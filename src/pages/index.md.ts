import type { APIRoute } from 'astro';
import { MD_HEADERS } from '../lib/markdown';
import { getPlaybooks, getGhiduri, entrySlug } from '../lib/i18n-content';
import { routes } from '../i18n/routes';

// Varianta text/markdown a paginii principale: /index.md
// (servită și prin content negotiation pe / — Accept: text/markdown).

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = await getPlaybooks('ro');
  const ghiduri = await getGhiduri('ro');

  const lines: string[] = [
    '# Digital Compass — ghid public de siguranță digitală, în română',
    '',
    'Ți s-a întâmplat ceva online? Alege situația de mai jos și urmează pașii, calm,',
    'unul câte unul. Fiecare playbook are variantă markdown la același URL cu `.md`.',
    '',
    '## Situații de criză',
    '',
    ...playbooks.map(
      (p) =>
        `- [${p.data.situation}](${SITE}${routes.ro.playbook(entrySlug(p.id))}.md) — ${p.data.title}`
    ),
    '',
    '## Ghiduri de prevenție',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}${routes.ro.guide(entrySlug(g.id))}.md): ${g.data.topic}`
    ),
    '',
    `Mai multe: [De ce existăm](${SITE}/de-ce-existam) · [Surse](${SITE}/surse) · [English](${SITE}/en/index.md) · [llms.txt](${SITE}/llms.txt)`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: MD_HEADERS });
};
