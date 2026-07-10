import type { APIRoute } from 'astro';
import { MD_HEADERS } from '../../lib/markdown';
import { getPlaybooks, getGhiduri, entrySlug } from '../../lib/i18n-content';
import { routes } from '../../i18n/routes';

// Varianta text/markdown a homepage-ului EN: /en/index.md

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = await getPlaybooks('en');
  const ghiduri = await getGhiduri('en');

  const lines: string[] = [
    '# Digital Compass — a public digital-safety guide for Romania',
    '',
    'Something happened to you online? Pick the situation below and follow the steps,',
    'calmly, one at a time. Every playbook has a markdown version at the same URL + `.md`.',
    'Reporting channels are the real Romanian ones (DNSC 1911, Police, your bank).',
    '',
    '## Crisis situations',
    '',
    ...playbooks.map(
      (p) =>
        `- [${p.data.situation}](${SITE}${routes.en.playbook(entrySlug(p.id))}.md) — ${p.data.title}`
    ),
    '',
    '## Prevention guides',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}${routes.en.guide(entrySlug(g.id))}.md): ${g.data.topic}`
    ),
    '',
    `More: [Why we exist](${SITE}/en/why-we-exist) · [Sources](${SITE}/en/sources) · [Română](${SITE}/index.md) · [llms.txt](${SITE}/llms.txt)`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: MD_HEADERS });
};
