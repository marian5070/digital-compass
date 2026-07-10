import type { APIRoute } from 'astro';
import { MD_HEADERS } from '../../lib/markdown';
import { getPlaybooks, getGhiduri, entrySlug } from '../../lib/i18n-content';
import { routes } from '../../i18n/routes';

// Varianta text/markdown a homepage-ului SK: /sk/index.md

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = await getPlaybooks('sk');
  const ghiduri = await getGhiduri('sk');

  const lines: string[] = [
    '# Digital Compass — verejný sprievodca digitálnou bezpečnosťou, po slovensky',
    '',
    'Stalo sa ti niečo na internete? Vyber si situáciu nižšie a postupuj po krokoch,',
    'v pokoji, jeden za druhým. Každý návod má markdown verziu na rovnakej URL + `.md`.',
    'Kanály na nahlasovanie sú slovenské (SK-CERT, Polícia SR, SOI, tvoja banka).',
    '',
    '## Krízové situácie',
    '',
    ...playbooks.map(
      (p) =>
        `- [${p.data.situation}](${SITE}${routes.sk.playbook(entrySlug(p.id))}.md) — ${p.data.title}`
    ),
    '',
    '## Preventívne návody',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}${routes.sk.guide(entrySlug(g.id))}.md): ${g.data.topic}`
    ),
    '',
    `Viac: [Prečo existujeme](${SITE}/sk/preco-existujeme) · [Zdroje](${SITE}/sk/zdroje) · [Română](${SITE}/index.md) · [English](${SITE}/en/index.md) · [llms.txt](${SITE}/llms.txt)`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: MD_HEADERS });
};
