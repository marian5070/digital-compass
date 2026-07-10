import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { MD_HEADERS } from '../lib/markdown';

// Varianta text/markdown a paginii principale: /index.md
// (servită și prin content negotiation pe / — Accept: text/markdown).

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = (await getCollection('playbooks')).sort(
    (a, b) => a.data.order - b.data.order
  );
  const ghiduri = (await getCollection('ghiduri')).sort(
    (a, b) => a.data.order - b.data.order
  );

  const lines: string[] = [
    '# Digital Compass — ghid public de siguranță digitală, în română',
    '',
    'Ți s-a întâmplat ceva online? Alege situația de mai jos și urmează pașii, calm,',
    'unul câte unul. Fiecare playbook are variantă markdown la același URL cu `.md`.',
    '',
    '## Situații de criză',
    '',
    ...playbooks.map(
      (p) => `- [${p.data.situation}](${SITE}/playbook/${p.id}.md) — ${p.data.title}`
    ),
    '',
    '## Ghiduri de prevenție',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}/ghiduri/${g.id}.md): ${g.data.topic}`
    ),
    '',
    `Mai multe: [De ce existăm](${SITE}/de-ce-existam) · [Surse](${SITE}/surse) · [llms.txt](${SITE}/llms.txt)`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: MD_HEADERS });
};
