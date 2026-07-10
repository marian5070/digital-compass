import type { APIRoute } from 'astro';
import { MD_HEADERS } from '../../lib/markdown';
import { getPlaybooks, getGhiduri, entrySlug } from '../../lib/i18n-content';
import { routes } from '../../i18n/routes';

// Varianta text/markdown a homepage-ului DE: /de/index.md

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = await getPlaybooks('de');
  const ghiduri = await getGhiduri('de');

  const lines: string[] = [
    '# Digital Compass — ein öffentlicher Leitfaden für digitale Sicherheit, auf Deutsch',
    '',
    'Ist Ihnen online etwas passiert? Wählen Sie unten Ihre Situation und gehen Sie die Schritte',
    'in Ruhe durch, einen nach dem anderen. Jeder Ratgeber hat eine Markdown-Version unter derselben URL + `.md`.',
    'Die Meldewege sind deutsch (BSI, Polizei, Verbraucherzentrale, Ihre Bank).',
    '',
    '## Krisensituationen',
    '',
    ...playbooks.map(
      (p) =>
        `- [${p.data.situation}](${SITE}${routes.de.playbook(entrySlug(p.id))}.md) — ${p.data.title}`
    ),
    '',
    '## Vorbeugende Ratgeber',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}${routes.de.guide(entrySlug(g.id))}.md): ${g.data.topic}`
    ),
    '',
    `Mehr: [Warum es uns gibt](${SITE}/de/warum-es-uns-gibt) · [Quellen](${SITE}/de/quellen) · [Română](${SITE}/index.md) · [English](${SITE}/en/index.md) · [llms.txt](${SITE}/llms.txt)`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: MD_HEADERS });
};
