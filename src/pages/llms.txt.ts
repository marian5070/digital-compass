import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

// /llms.txt — hartă a site-ului pentru agenți AI (https://llmstxt.org/).
// Generat la build din colecțiile reale; se actualizează singur cu conținutul.

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = (await getCollection('playbooks')).sort(
    (a, b) => a.data.order - b.data.order
  );
  const ghiduri = (await getCollection('ghiduri')).sort(
    (a, b) => a.data.order - b.data.order
  );

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
    'la URL sau cere cu antetul `Accept: text/markdown`.',
    '',
    '## Situații de criză (playbook-uri reactive)',
    '',
    ...playbooks.map(
      (p) => `- [${p.data.title}](${SITE}/playbook/${p.id}): ${p.data.summary}`
    ),
    '',
    '## Ghiduri de prevenție',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}/ghiduri/${g.id}): ${g.data.summary}`
    ),
    '',
    '## Despre proiect',
    '',
    `- [De ce existăm](${SITE}/de-ce-existam): misiunea și principiile proiectului`,
    `- [Începe aici](${SITE}/incepe-aici): primul pas pentru cititorii noi`,
    `- [Surse](${SITE}/surse): sursele oficiale pe care le cităm`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
