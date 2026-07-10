import type { APIRoute } from 'astro';
import { MD_HEADERS } from '../../lib/markdown';
import { getPlaybooks, getGhiduri, entrySlug } from '../../lib/i18n-content';
import { routes } from '../../i18n/routes';

// Varianta text/markdown a homepage-ului PL: /pl/index.md

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = await getPlaybooks('pl');
  const ghiduri = await getGhiduri('pl');

  const lines: string[] = [
    '# Digital Compass — publiczny przewodnik bezpieczeństwa cyfrowego, po polsku',
    '',
    'Coś Ci się przydarzyło w internecie? Wybierz sytuację poniżej i wykonuj kroki,',
    'spokojnie, jeden po drugim. Każdy poradnik ma wersję markdown pod tym samym URL + `.md`.',
    'Kanały zgłaszania są polskie (CERT Polska, policja, Twój bank).',
    '',
    '## Sytuacje kryzysowe',
    '',
    ...playbooks.map(
      (p) =>
        `- [${p.data.situation}](${SITE}${routes.pl.playbook(entrySlug(p.id))}.md) — ${p.data.title}`
    ),
    '',
    '## Poradniki zapobiegawcze',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}${routes.pl.guide(entrySlug(g.id))}.md): ${g.data.topic}`
    ),
    '',
    `Więcej: [Dlaczego istniejemy](${SITE}/pl/dlaczego-istniejemy) · [Źródła](${SITE}/pl/zrodla) · [Română](${SITE}/index.md) · [English](${SITE}/en/index.md) · [llms.txt](${SITE}/llms.txt)`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: MD_HEADERS });
};
