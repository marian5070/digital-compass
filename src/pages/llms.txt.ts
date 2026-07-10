import type { APIRoute } from 'astro';
import { getPlaybooks, getGhiduri, entrySlug } from '../lib/i18n-content';
import { routes } from '../i18n/routes';

// /llms.txt — hartă a site-ului pentru agenți AI (https://llmstxt.org/).
// Generat la build din colecțiile reale (ambele limbi); se actualizează singur.

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooksRo = await getPlaybooks('ro');
  const ghiduriRo = await getGhiduri('ro');
  const playbooksEn = await getPlaybooks('en');
  const ghiduriEn = await getGhiduri('en');

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
    '## Situații de criză (playbook-uri reactive)',
    '',
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
  ];

  if (playbooksEn.length || ghiduriEn.length) {
    lines.push(
      '',
      '## English version (anchored in Romania — for expats and foreigners living in Romania)',
      '',
      `The same playbooks and guides in English, with the real Romanian reporting`,
      `channels (DNSC 1911, Police, banks). Start at ${SITE}/en`,
      ''
    );
    if (playbooksEn.length)
      lines.push(
        '### Crisis playbooks (EN)',
        '',
        ...playbooksEn.map(
          (p) => `- [${p.data.title}](${SITE}${routes.en.playbook(entrySlug(p.id))}): ${p.data.summary}`
        ),
        ''
      );
    if (ghiduriEn.length)
      lines.push(
        '### Prevention guides (EN)',
        '',
        ...ghiduriEn.map(
          (g) => `- [${g.data.title}](${SITE}${routes.en.guide(entrySlug(g.id))}): ${g.data.summary}`
        )
      );
  }
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
