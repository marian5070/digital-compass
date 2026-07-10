import type { APIRoute } from 'astro';
import { MD_HEADERS } from '../../lib/markdown';
import { getPlaybooks, getGhiduri, entrySlug } from '../../lib/i18n-content';
import { routes } from '../../i18n/routes';

// Varianta text/markdown a homepage-ului IT: /it/index.md

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = await getPlaybooks('it');
  const ghiduri = await getGhiduri('it');

  const lines: string[] = [
    '# Digital Compass — una guida pubblica alla sicurezza digitale, in italiano',
    '',
    'Ti è successo qualcosa online? Scegli la situazione qui sotto e segui i passi,',
    'con calma, uno alla volta. Ogni guida ha una versione markdown allo stesso URL + `.md`.',
    'I canali di segnalazione sono italiani (Polizia Postale, CSIRT Italia, la tua banca).',
    '',
    '## Situazioni di crisi',
    '',
    ...playbooks.map(
      (p) =>
        `- [${p.data.situation}](${SITE}${routes.it.playbook(entrySlug(p.id))}.md) — ${p.data.title}`
    ),
    '',
    '## Guide preventive',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}${routes.it.guide(entrySlug(g.id))}.md): ${g.data.topic}`
    ),
    '',
    `Altro: [Perché esistiamo](${SITE}/it/perche-esistiamo) · [Fonti](${SITE}/it/fonti) · [Română](${SITE}/index.md) · [English](${SITE}/en/index.md) · [llms.txt](${SITE}/llms.txt)`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: MD_HEADERS });
};
