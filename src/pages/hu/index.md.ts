import type { APIRoute } from 'astro';
import { MD_HEADERS } from '../../lib/markdown';
import { getPlaybooks, getGhiduri, entrySlug } from '../../lib/i18n-content';
import { routes } from '../../i18n/routes';

// Varianta text/markdown a homepage-ului HU: /hu/index.md

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = await getPlaybooks('hu');
  const ghiduri = await getGhiduri('hu');

  const lines: string[] = [
    '# Digital Compass — közhasznú digitális biztonsági útmutató, Romániában élőknek',
    '',
    'Történt veled valami az interneten? Válaszd ki a helyzetet, és kövesd a lépéseket,',
    'nyugodtan, egyenként. Minden útmutató elérhető markdownként is: `.md` a URL végén.',
    'A bejelentési csatornák a valódi romániaiak (DNSC 1911, rendőrség, a bankod).',
    '',
    '## Válsághelyzetek',
    '',
    ...playbooks.map(
      (p) =>
        `- [${p.data.situation}](${SITE}${routes.hu.playbook(entrySlug(p.id))}.md) — ${p.data.title}`
    ),
    '',
    '## Megelőző útmutatók',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}${routes.hu.guide(entrySlug(g.id))}.md): ${g.data.topic}`
    ),
    '',
    `Továbbiak: [Miért létezünk](${SITE}/hu/miert-letezunk) · [Források](${SITE}/hu/forrasok) · [Română](${SITE}/index.md) · [English](${SITE}/en/index.md) · [llms.txt](${SITE}/llms.txt)`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: MD_HEADERS });
};
