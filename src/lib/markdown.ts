import type { CollectionEntry } from 'astro:content';

// Variantele text/markdown ale paginilor — pentru agenți AI și cititoare text.
// Nu e o conversie din HTML: e ACELAȘI conținut structurat din colecții,
// redat ca markdown. Sursa unică rămâne frontmatter-ul + corpul .md.

const SITE = 'https://compass.madeinro.eu';

/** Inline-HTML din frontmatter (<strong>, <em>) → echivalentul markdown. */
function inlineMd(s: string): string {
  return s
    .replace(/<\/?strong>/g, '**')
    .replace(/<\/?em>/g, '*')
    .replace(/<[^>]+>/g, '');
}

const list = (items: string[]) => items.map((i) => `- ${inlineMd(i)}`).join('\n');

function footer(lastReviewed: string): string {
  return [
    '---',
    '',
    `Verificat ultima dată: ${lastReviewed}.`,
    `Digital Compass — cunoaștere publică, practică, în română (conținut CC BY 4.0): ${SITE}/`,
  ].join('\n');
}

export function playbookToMarkdown(entry: CollectionEntry<'playbooks'>): string {
  const { data } = entry;
  const parts: string[] = [
    `# ${data.title}`,
    '',
    data.summary,
    '',
    (entry.body ?? '').trim(),
    '',
    '## Primii pași, acum',
    '',
    data.steps.map((s, i) => `${i + 1}. ${inlineMd(s)}`).join('\n'),
  ];
  if (data.donts.length) parts.push('', '## Ce să NU faci', '', list(data.donts));
  if (data.recognize.length)
    parts.push('', '## Cum recunoști data viitoare', '', list(data.recognize));
  if (data.report.length) {
    parts.push(
      '',
      '## Unde raportezi',
      '',
      data.report
        .map((r) => {
          const extra = [r.phone && `telefon ${r.phone}`, r.url].filter(Boolean).join(' · ');
          return `- **${r.channel}** — ${inlineMd(r.detail)}${extra ? ` (${extra})` : ''}`;
        })
        .join('\n')
    );
  }
  if (data.sources.length)
    parts.push('', '## Surse', '', data.sources.map((s) => `- [${s.label}](${s.url})`).join('\n'));
  parts.push('', footer(data.lastReviewed), '');
  return parts.join('\n');
}

export function ghidToMarkdown(entry: CollectionEntry<'ghiduri'>): string {
  const { data } = entry;
  const parts: string[] = [`# ${data.title}`, '', data.summary, '', (entry.body ?? '').trim()];
  if (data.greenFlags.length)
    parts.push('', '## Semne bune', '', list(data.greenFlags));
  if (data.redFlags.length)
    parts.push('', '## Semne de alarmă', '', list(data.redFlags));
  if (data.rules.length) parts.push('', `## ${data.rulesTitle}`, '', list(data.rules));
  if (data.relatedPlaybook)
    parts.push(
      '',
      `Ai pățit deja? Vezi playbook-ul: ${SITE}/playbook/${data.relatedPlaybook}`
    );
  if (data.sources.length)
    parts.push('', '## Surse', '', data.sources.map((s) => `- [${s.label}](${s.url})`).join('\n'));
  parts.push('', footer(data.lastReviewed), '');
  return parts.join('\n');
}

export const MD_HEADERS = {
  'Content-Type': 'text/markdown; charset=utf-8',
};
