import type { APIRoute } from 'astro';
import { MD_HEADERS } from '../../lib/markdown';
import { getPlaybooks, getGhiduri, entrySlug } from '../../lib/i18n-content';
import { routes } from '../../i18n/routes';

// Varianta text/markdown a homepage-ului CS: /cs/index.md

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = await getPlaybooks('cs');
  const ghiduri = await getGhiduri('cs');

  const lines: string[] = [
    '# Digital Compass — veřejný průvodce digitální bezpečností, česky',
    '',
    'Stalo se ti něco na internetu? Vyber si situaci níže a postupuj po krocích,',
    'v klidu, jeden za druhým. Každý návod má markdown verzi na stejné URL + `.md`.',
    'Kanály pro hlášení jsou české (CSIRT.CZ, Policie ČR, ČOI, tvoje banka).',
    '',
    '## Krizové situace',
    '',
    ...playbooks.map(
      (p) =>
        `- [${p.data.situation}](${SITE}${routes.cs.playbook(entrySlug(p.id))}.md) — ${p.data.title}`
    ),
    '',
    '## Preventivní návody',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}${routes.cs.guide(entrySlug(g.id))}.md): ${g.data.topic}`
    ),
    '',
    `Více: [Proč existujeme](${SITE}/cs/proc-existujeme) · [Zdroje](${SITE}/cs/zdroje) · [Română](${SITE}/index.md) · [English](${SITE}/en/index.md) · [llms.txt](${SITE}/llms.txt)`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: MD_HEADERS });
};
