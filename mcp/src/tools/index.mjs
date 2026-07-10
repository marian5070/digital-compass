// Cele 5 unelte ale digital-compass-mcp — toate read-only, toate pe datele
// reale din build (agents.json + markdown). Pattern identic cu rotv-mcp:
// def {name, config} + handler, învelite în wrap() (logging, erori, shape MCP).
import { z } from 'zod';
import { getIndex, getMarkdown, normalize } from '../data/loader.mjs';

const SITE = 'https://compass.madeinro.eu';
const LangInput = z
  .enum(['ro', 'en', 'hu'])
  .default('ro')
  .describe('Limba conținutului (ro = original; en/hu dacă există traducere)');

// Câmpurile pe limbă din index: intrările fără `lang` sunt ro (istoric).
const byLang = (items, lang) => items.filter((i) => (i.lang ?? 'ro') === lang);

// --- 1. compass_list_situations ---------------------------------------------
const listTool = {
  name: 'compass_list_situations',
  config: {
    title: 'Lista situațiilor acoperite',
    description:
      'Toate situațiile de criză digitală (playbook-uri reactive: link fals, cont spart, țeapă online...) și ghidurile de prevenție acoperite de Digital Compass, cu slug-uri pentru compass_get_content. Ghid public românesc, limbaj simplu.',
    inputSchema: { lang: LangInput },
  },
};
async function handleList(args) {
  const idx = getIndex();
  const situatii = byLang(idx.situatii, args.lang);
  const ghiduri = byLang(idx.ghiduri, args.lang);
  return {
    lang: args.lang,
    situatii: situatii.map(({ slug, situatie, titlu, severitate, url }) => ({
      slug, situatie, titlu, severitate, url,
    })),
    ghiduri: ghiduri.map(({ slug, titlu, tema, url }) => ({ slug, titlu, tema, url })),
    hint: 'Cheamă compass_get_content cu {type, slug} pentru conținutul complet.',
  };
}

// --- 2. compass_get_content --------------------------------------------------
const getTool = {
  name: 'compass_get_content',
  config: {
    title: 'Conținutul complet al unui playbook sau ghid',
    description:
      'Markdown-ul complet al unui playbook de criză (pașii de urmat acum, ce să NU faci, cum recunoști data viitoare, unde raportezi în România) sau al unui ghid de prevenție. Potrivit de transmis utilizatorului pas cu pas, în ordinea din document.',
    inputSchema: {
      type: z.enum(['playbook', 'ghid']).describe('playbook = criză (reactiv), ghid = prevenție'),
      slug: z.string().describe('Slug-ul din compass_list_situations, ex. "link-sms-fals"'),
      lang: LangInput,
    },
  },
};
async function handleGet(args) {
  const markdown = getMarkdown(args.type, args.slug, args.lang);
  if (!markdown) {
    throw new Error(
      `Nu există ${args.type} „${args.slug}" în limba „${args.lang}". Cheamă compass_list_situations pentru lista validă.`
    );
  }
  const GUIDE_SEGMENT = { ro: 'ghiduri', en: 'guides', hu: 'utmutatok' };
  const base = args.type === 'ghid' ? GUIDE_SEGMENT[args.lang] : 'playbook';
  const prefix = args.lang === 'ro' ? '' : `/${args.lang}`;
  return {
    type: args.type,
    slug: args.slug,
    lang: args.lang,
    url: `${SITE}${prefix}/${base}/${args.slug}`,
    markdown,
  };
}

// --- 3. compass_find_playbook ------------------------------------------------
const findTool = {
  name: 'compass_find_playbook',
  config: {
    title: 'Găsește playbook-ul potrivit situației',
    description:
      'Potrivește descrierea în cuvintele utilizatorului („am dat click pe un link și mi-a cerut cardul") cu situațiile acoperite. Potrivire determinstă pe cuvinte-cheie (titlu, situație, rezumat), nu ghicit. Întoarce cele mai bune 3 potriviri cu scor.',
    inputSchema: {
      query: z.string().min(3).describe('Situația, în cuvintele utilizatorului'),
      lang: LangInput,
    },
  },
};
async function handleFind(args) {
  const idx = getIndex();
  const tokens = [...new Set(normalize(args.query).split(/[^a-z0-9]+/).filter((t) => t.length >= 3))];
  if (!tokens.length) throw new Error('Query prea scurt — descrie situația în câteva cuvinte.');

  const score = (entry) => {
    const hay = normalize(`${entry.titlu} ${entry.situatie ?? entry.tema ?? ''} ${entry.rezumat}`);
    return tokens.reduce((acc, t) => acc + (hay.includes(t) ? 1 : 0), 0);
  };
  const rank = (items, type) =>
    byLang(items, args.lang)
      .map((e) => ({ type, slug: e.slug, titlu: e.titlu, url: e.url, matched: score(e) }))
      .filter((e) => e.matched > 0);

  const results = [...rank(idx.situatii, 'playbook'), ...rank(idx.ghiduri, 'ghid')]
    .sort((a, b) => b.matched - a.matched)
    .slice(0, 3)
    .map((e) => ({ ...e, matched: `${e.matched}/${tokens.length} cuvinte-cheie` }));

  return {
    query: args.query,
    lang: args.lang,
    results,
    hint: results.length
      ? 'Cheamă compass_get_content cu {type, slug} pentru pașii compleți.'
      : 'Nicio potrivire — cheamă compass_list_situations și alege manual.',
  };
}

// --- 4. compass_report_channels ---------------------------------------------
const channelsTool = {
  name: 'compass_report_channels',
  config: {
    title: 'Unde raportezi în România',
    description:
      'Canalele reale de raportare din România pentru incidente digitale (DNSC 1911, Poliția Română, banca), din secțiunile „Unde raportezi" ale playbook-urilor. Cu slug: doar canalele acelei situații; fără: toate canalele, deduplicate.',
    inputSchema: {
      slug: z.string().optional().describe('Opțional: slug-ul unui playbook anume'),
    },
  },
};
async function handleChannels(args) {
  const situatii = byLang(getIndex().situatii, 'ro');
  if (args.slug) {
    const entry = situatii.find((s) => s.slug === args.slug);
    if (!entry) throw new Error(`Nu există playbook „${args.slug}".`);
    return { slug: args.slug, titlu: entry.titlu, canale: entry.raportare ?? [] };
  }
  const seen = new Map();
  for (const s of situatii) {
    for (const c of s.raportare ?? []) {
      const key = normalize(c.channel);
      if (!seen.has(key)) seen.set(key, { ...c, situatii: [] });
      seen.get(key).situatii.push(s.slug);
    }
  }
  return { canale: [...seen.values()], nota: 'Urgențe: 112. Incidente cibernetice (DNSC): 1911.' };
}

// --- 5. compass_freshness ----------------------------------------------------
const freshnessTool = {
  name: 'compass_freshness',
  config: {
    title: 'Cât de proaspăt e conținutul',
    description:
      'Data ultimei verificări editoriale („verificat ultima dată") pentru fiecare playbook și ghid — transparență asupra prospețimii sfaturilor.',
    inputSchema: {},
  },
};
async function handleFreshness() {
  const idx = getIndex();
  const pick = ({ slug, titlu, verificat }) => ({ slug, titlu, verificat });
  return {
    situatii: byLang(idx.situatii, 'ro').map(pick),
    ghiduri: byLang(idx.ghiduri, 'ro').map(pick),
  };
}

// --- înregistrare -------------------------------------------------------------
const TOOLS = [
  [listTool, handleList],
  [getTool, handleGet],
  [findTool, handleFind],
  [channelsTool, handleChannels],
  [freshnessTool, handleFreshness],
];

function wrap(name, handler) {
  return async (args) => {
    const t0 = Date.now();
    let ok = true;
    try {
      const payload = await handler(args ?? {});
      // Conținutul markdown se livrează ca text direct (agenții îl citesc așa),
      // restul ca JSON — în ambele cazuri cu structuredContent complet.
      const text = payload.markdown ?? JSON.stringify(payload, null, 2);
      return { content: [{ type: 'text', text }], structuredContent: payload };
    } catch (err) {
      ok = false;
      const errBody = { error: true, tool: name, message: err?.message || 'Unknown error' };
      return {
        isError: true,
        content: [{ type: 'text', text: JSON.stringify(errBody) }],
        structuredContent: errBody,
      };
    } finally {
      process.stdout.write(
        JSON.stringify({ t: new Date().toISOString(), evt: 'tool', tool: name, ms: Date.now() - t0, ok }) + '\n'
      );
    }
  };
}

export function registerTools(server) {
  for (const [def, handler] of TOOLS) {
    server.registerTool(def.name, def.config, wrap(def.name, handler));
  }
}
