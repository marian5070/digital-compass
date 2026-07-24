import type { APIRoute } from 'astro';
import { getPlaybooks, getGhiduri, entrySlug, LANGS, type Lang } from '../lib/i18n-content';
import { routes } from '../i18n/routes';

// /llms.txt — hartă a site-ului pentru agenți AI (https://llmstxt.org/).
// Generat la build din colecțiile reale (toate limbile); se actualizează singur.

const SITE = 'https://compass.madeinro.eu';

// Antetul de secțiune per limbă non-ro: titlu + o frază despre ancorare.
const SECTIONS: Partial<Record<Lang, { title: string; blurb: string[] }>> = {
  en: {
    title: 'English version (anchored in Romania — for expats and foreigners living in Romania)',
    blurb: [
      'The same playbooks and guides in English, with the real Romanian reporting',
      `channels (DNSC 1911, Police, banks). Start at ${SITE}/en`,
    ],
  },
  hu: {
    title: 'Magyar változat (Romániában élő magyaroknak — a bejelentési csatornák a romániaiak)',
    blurb: [
      'Ugyanazok az útmutatók magyarul, a valódi romániai bejelentési csatornákkal',
      `(DNSC 1911, rendőrség, a bankod). Kezdd itt: ${SITE}/hu`,
    ],
  },
  pl: {
    title: 'Wersja polska (dla Polski — polskie kanały zgłaszania)',
    blurb: [
      'Te same poradniki po polsku, z PRAWDZIWYMI polskimi kanałami zgłaszania',
      '(CERT Polska / SMS 8080, policja, zastrzeganie kart 828 828 828, UOKiK).',
      `Zacznij tutaj: ${SITE}/pl`,
    ],
  },
  cs: {
    title: 'Česká verze (pro Česko — české kanály pro nahlášení)',
    blurb: [
      'Stejné návody česky, se skutečnými českými kanály pro nahlášení incidentů.',
      `Začni tady: ${SITE}/cs`,
    ],
  },
  sk: {
    title: 'Slovenská verzia (pre Slovensko — slovenské kanály na nahlásenie)',
    blurb: [
      'Rovnaké návody po slovensky, so skutočnými slovenskými kanálmi na nahlásenie.',
      `Začni tu: ${SITE}/sk`,
    ],
  },
  it: {
    title: 'Versione italiana (per l’Italia — canali di segnalazione italiani)',
    blurb: [
      'Le stesse guide in italiano, con i veri canali di segnalazione italiani',
      `(Polizia Postale, CSIRT Italia). Inizia qui: ${SITE}/it`,
    ],
  },
  fr: {
    title: 'Version française (pour la France — canaux de signalement français)',
    blurb: [
      'Les mêmes guides en français, avec les vrais canaux de signalement français',
      `(Cybermalveillance, 33700, Pharos). Commencez ici: ${SITE}/fr`,
    ],
  },
  de: {
    title: 'Deutsche Version (für Deutschland — deutsche Meldewege)',
    blurb: [
      'Dieselben Leitfäden auf Deutsch, mit den echten deutschen Meldewegen',
      `(BSI, Polizei, Sperr-Notruf 116 116). Starten Sie hier: ${SITE}/de`,
    ],
  },
};

export const GET: APIRoute = async () => {
  const lines: string[] = [
    '# Digital Compass',
    '',
    '> Cunoaștere publică, practică, în română, pentru momentele de criză digitală.',
    '> Nu diplome — claritate.',
    '',
    'Ghid public care ajută omul obișnuit când i se întâmplă ceva online: un link fals,',
    'un cont spart, o țeapă la cumpărare, un apel de înșelăciune. Fiecare situație are un',
    'playbook „situație → ce faci", cu surse citate. Limbaj simplu, non-tehnic.',
    'Conținut CC BY 4.0, cod MIT (https://github.com/marian5070/digital-compass).',
    '',
    'Fiecare pagină de playbook sau ghid are și o variantă text/markdown: adaugă `.md`',
    'la URL sau cere cu antetul `Accept: text/markdown`. Există și un server MCP:',
    `${SITE}/mcp (Streamable HTTP, fără autentificare).`,
    '',
    'Versiunile en/hu sunt ancorate în ROMÂNIA (canale românești); versiunile',
    'pl/cs/sk/it/fr/de sunt ancorate în țările respective (canale locale).',
    '',
    '## Situații de criză (playbook-uri reactive)',
    '',
  ];

  const playbooksRo = await getPlaybooks('ro');
  const ghiduriRo = await getGhiduri('ro');
  lines.push(
    ...playbooksRo.map(
      (p) => `- [${p.data.title}](${SITE}${routes.ro.playbook(entrySlug(p.id))}): ${p.data.summary}`
    ),
    '',
    '## Ghiduri de prevenție',
    '',
    ...ghiduriRo.map(
      (g) => `- [${g.data.title}](${SITE}${routes.ro.guide(entrySlug(g.id))}): ${g.data.summary}`
    ),
    '',
    '## Despre proiect',
    '',
    `- [De ce existăm](${SITE}/de-ce-existam): misiunea și principiile proiectului`,
    `- [Începe aici](${SITE}/incepe-aici): primul pas pentru cititorii noi`,
    `- [Surse](${SITE}/surse): sursele oficiale pe care le cităm`,
    `- [Cum funcționează](${SITE}/cum-functioneaza): aceleași cunoștințe pe site, în PWA și pentru agenții AI (MCP) + link către studiul de caz complet`
  );

  for (const lang of LANGS) {
    const section = SECTIONS[lang];
    if (!section) continue;
    const playbooks = await getPlaybooks(lang);
    const ghiduri = await getGhiduri(lang);
    if (!playbooks.length && !ghiduri.length) continue;
    lines.push('', `## ${section.title}`, '', ...section.blurb, '');
    if (playbooks.length)
      lines.push(
        ...playbooks.map(
          (p) =>
            `- [${p.data.title}](${SITE}${routes[lang].playbook(entrySlug(p.id))}): ${p.data.summary}`
        ),
        ''
      );
    if (ghiduri.length)
      lines.push(
        ...ghiduri.map(
          (g) =>
            `- [${g.data.title}](${SITE}${routes[lang].guide(entrySlug(g.id))}): ${g.data.summary}`
        )
      );
  }
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
