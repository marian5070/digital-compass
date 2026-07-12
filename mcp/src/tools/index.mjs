// Cele 5 unelte ale digital-compass-mcp — toate read-only, toate pe datele
// reale din build (agents.json + markdown). Pattern identic cu rotv-mcp:
// def {name, config} + handler, învelite în wrap() (logging, erori, shape MCP).
import { z } from 'zod';
import { getIndex, getMarkdown, normalize } from '../data/loader.mjs';

const SITE = 'https://compass.madeinro.eu';
const LangInput = z
  .enum(['ro', 'en', 'hu', 'pl', 'cs', 'sk', 'it', 'fr', 'de'])
  .default('ro')
  .describe('Content language (ro = original; en/hu anchored in Romania; pl/cs/sk/it/fr/de anchored in their own countries, with local reporting channels)');

// Câmpurile pe limbă din index: intrările fără `lang` sunt ro (istoric).
const byLang = (items, lang) => items.filter((i) => (i.lang ?? 'ro') === lang);

// Filtre ADITIVE peste taxonomia UX 2.0 (categorie + audienta din agents.json).
// Audiența "ambele" satisface și individ și organizatie. Vocabularele de
// categorie diferă între situații și ghiduri — enum-ul le acceptă pe toate.
const CategorieInput = z
  .enum([
    // situații (playbooks)
    'cumparaturi-bani', 'conturi-dispozitive', 'mesaje-apeluri', 'oameni-manipulare',
    // ghiduri (prevenție)
    'conturi-parole', 'cumparaturi-plati', 'dispozitive', 'email-mesaje', 'la-birou',
  ])
  .optional()
  .describe(
    'Optional use-case category filter. Playbook categories: cumparaturi-bani, conturi-dispozitive, mesaje-apeluri, oameni-manipulare. Guide categories: conturi-parole, cumparaturi-plati, dispozitive, email-mesaje, la-birou.'
  );
const AudientaInput = z
  .enum(['individ', 'organizatie'])
  .optional()
  .describe('Optional audience filter: individ (private person) or organizatie (company/team). Content marked "ambele" matches both.');
const byFilters = (items, { categorie, audienta }) =>
  items.filter(
    (i) =>
      (!categorie || i.categorie === categorie) &&
      (!audienta || i.audienta === audienta || i.audienta === 'ambele')
  );

// --- 1. compass_list_situations ---------------------------------------------
const listTool = {
  name: 'compass_list_situations',
  config: {
    title: 'List covered situations',
    description:
      'All digital-crisis situations (reactive playbooks: fake link, hacked account, online scam...) and prevention guides covered by Digital Compass, with slugs for compass_get_content. Public Romanian guide, plain language, content in 9 languages. Optional filters: categorie (use case) and audienta (individ/organizatie).',
    inputSchema: { lang: LangInput, categorie: CategorieInput, audienta: AudientaInput },
  },
};
async function handleList(args) {
  const idx = getIndex();
  const situatii = byFilters(byLang(idx.situatii, args.lang), args);
  const ghiduri = byFilters(byLang(idx.ghiduri, args.lang), args);
  return {
    lang: args.lang,
    ...(args.categorie ? { categorie: args.categorie } : {}),
    ...(args.audienta ? { audienta: args.audienta } : {}),
    situatii: situatii.map(({ slug, situatie, titlu, severitate, categorie, audienta, url }) => ({
      slug, situatie, titlu, severitate, categorie, audienta, url,
    })),
    ghiduri: ghiduri.map(({ slug, titlu, tema, categorie, audienta, url }) => ({
      slug, titlu, tema, categorie, audienta, url,
    })),
    hint: 'Call compass_get_content with {type, slug} for the full content.',
  };
}

// --- 2. compass_get_content --------------------------------------------------
const getTool = {
  name: 'compass_get_content',
  config: {
    title: 'Full content of one playbook or guide',
    description:
      'The full markdown of a crisis playbook (steps to take now, what NOT to do, how to recognize it next time, where to report) or of a prevention guide. Suitable to relay to the user step by step, in document order.',
    inputSchema: {
      type: z.enum(['playbook', 'ghid']).describe('playbook = crisis (reactive), ghid = prevention guide'),
      slug: z.string().describe('Slug from compass_list_situations, e.g. "link-sms-fals"'),
      lang: LangInput,
    },
  },
};
async function handleGet(args) {
  const markdown = getMarkdown(args.type, args.slug, args.lang);
  if (!markdown) {
    throw new Error(
      `No ${args.type} "${args.slug}" in language "${args.lang}". Call compass_list_situations for the valid list.`
    );
  }
  const GUIDE_SEGMENT = { ro: 'ghiduri', en: 'guides', hu: 'utmutatok', pl: 'poradniki', cs: 'navody', sk: 'navody', it: 'guide', fr: 'guides', de: 'ratgeber' };
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
    title: 'Find the right playbook for a situation',
    description:
      'Matches the situation in the user\'s own words ("I clicked a link and it asked for my card") against the covered situations. Deterministic keyword matching (title, situation, summary), not guessing. Returns the best 3 matches with a score.',
    inputSchema: {
      query: z.string().min(3).describe('The situation, in the user\'s own words'),
      lang: LangInput,
      categorie: CategorieInput,
      audienta: AudientaInput,
    },
  },
};
async function handleFind(args) {
  const idx = getIndex();
  const tokens = [...new Set(normalize(args.query).split(/[^a-z0-9]+/).filter((t) => t.length >= 3))];
  if (!tokens.length) throw new Error('Query too short — describe the situation in a few words.');

  const score = (entry) => {
    const hay = normalize(`${entry.titlu} ${entry.situatie ?? entry.tema ?? ''} ${entry.rezumat}`);
    return tokens.reduce((acc, t) => acc + (hay.includes(t) ? 1 : 0), 0);
  };
  const rank = (items, type) =>
    byFilters(byLang(items, args.lang), args)
      .map((e) => ({
        type, slug: e.slug, titlu: e.titlu, categorie: e.categorie, audienta: e.audienta,
        url: e.url, matched: score(e),
      }))
      .filter((e) => e.matched > 0);

  const results = [...rank(idx.situatii, 'playbook'), ...rank(idx.ghiduri, 'ghid')]
    .sort((a, b) => b.matched - a.matched)
    .slice(0, 3)
    .map((e) => ({ ...e, matched: `${e.matched}/${tokens.length} keywords` }));

  return {
    query: args.query,
    lang: args.lang,
    results,
    hint: results.length
      ? 'Call compass_get_content with {type, slug} for the full steps.'
      : 'No match — call compass_list_situations and pick manually.',
  };
}

// --- 4. compass_report_channels ---------------------------------------------
const channelsTool = {
  name: 'compass_report_channels',
  config: {
    title: 'Where to report digital incidents',
    description:
      'Real reporting channels for digital incidents, from the playbooks\' "Where to report" sections. lang=ro/en/hu → channels in ROMANIA (DNSC 1911, Romanian Police, your bank); lang=pl → channels in POLAND (CERT Polska, policja, card blocking). With slug: only that situation\'s channels; without: all, deduplicated.',
    inputSchema: {
      slug: z.string().optional().describe('Optional: the slug of one specific playbook'),
      lang: LangInput,
    },
  },
};
async function handleChannels(args) {
  // en/hu sunt ancorate în România — canalele lor sunt cele din ro,
  // dar în limba cerută (fiecare limbă are propriul frontmatter `report`).
  const situatii = byLang(getIndex().situatii, args.lang);
  const nota =
    args.lang === 'pl'
      ? 'Numer alarmowy: 112. Incydenty: CERT Polska (incydent.cert.pl).'
      : 'Urgențe: 112. Incidente cibernetice (DNSC): 1911.';
  if (args.slug) {
    const entry = situatii.find((s) => s.slug === args.slug);
    if (!entry) throw new Error(`No playbook "${args.slug}" in language "${args.lang}".`);
    return { slug: args.slug, lang: args.lang, titlu: entry.titlu, canale: entry.raportare ?? [], nota };
  }
  const seen = new Map();
  for (const s of situatii) {
    for (const c of s.raportare ?? []) {
      const key = normalize(c.channel);
      if (!seen.has(key)) seen.set(key, { ...c, situatii: [] });
      seen.get(key).situatii.push(s.slug);
    }
  }
  return { lang: args.lang, canale: [...seen.values()], nota };
}

// --- 5. compass_freshness ----------------------------------------------------
const freshnessTool = {
  name: 'compass_freshness',
  config: {
    title: 'How fresh the content is',
    description:
      'The date of the last editorial review ("last verified") for every playbook and guide — transparency about how fresh the advice is.',
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

// All tools are read-only over public data — declared explicitly through the
// standard MCP annotations; clients (e.g. ChatGPT connectors) use them to
// decide whether a tool may run without per-call confirmation.
const READ_ONLY_ANNOTATIONS = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
};

export function registerTools(server) {
  for (const [def, handler] of TOOLS) {
    server.registerTool(
      def.name,
      { ...def.config, annotations: { title: def.config.title, ...READ_ONLY_ANNOTATIONS } },
      wrap(def.name, handler)
    );
  }
}
