import type { CollectionEntry } from 'astro:content';
import { entryLang, entrySlug, type Lang } from './i18n-content';
import { t } from '../i18n/ui';
import { routes } from '../i18n/routes';

// Variantele text/markdown ale paginilor — pentru agenți AI și cititoare text.
// Nu e o conversie din HTML: e ACELAȘI conținut structurat din colecții,
// redat ca markdown. Sursa unică rămâne frontmatter-ul + corpul .md.
// Limba se deduce din entry.id (<lang>/<slug>); titlurile de secțiune vin din
// același dicționar ca paginile HTML.

const SITE = 'https://compass.madeinro.eu';

/** Inline-HTML din frontmatter (<strong>, <em>) → echivalentul markdown. */
function inlineMd(s: string): string {
  return s
    .replace(/<\/?strong>/g, '**')
    .replace(/<\/?em>/g, '*')
    .replace(/<[^>]+>/g, '');
}

const list = (items: string[]) => items.map((i) => `- ${inlineMd(i)}`).join('\n');

function footer(lang: Lang, lastReviewed: string): string {
  const blurbs: Record<Lang, string> = {
    ro: `Digital Compass — cunoaștere publică, practică, în română (conținut CC BY 4.0): ${SITE}/`,
    en: `Digital Compass — public, practical digital-safety knowledge for Romania (content CC BY 4.0): ${SITE}/en`,
    hu: `Digital Compass — közhasznú, gyakorlati digitális biztonsági tudás Romániában élőknek (tartalom CC BY 4.0): ${SITE}/hu`,
    pl: `Digital Compass — publiczna, praktyczna wiedza o bezpieczeństwie cyfrowym (treść CC BY 4.0): ${SITE}/pl`,
    cs: `Digital Compass — veřejné, praktické znalosti o digitální bezpečnosti (obsah CC BY 4.0): ${SITE}/cs`,
    sk: `Digital Compass — verejné, praktické znalosti o digitálnej bezpečnosti (obsah CC BY 4.0): ${SITE}/sk`,
    it: `Digital Compass — conoscenza pubblica e pratica sulla sicurezza digitale (contenuto CC BY 4.0): ${SITE}/it`,
    fr: `Digital Compass — un savoir public et pratique sur la sécurité numérique (contenu CC BY 4.0): ${SITE}/fr`,
    de: `Digital Compass — öffentliches, praktisches Wissen zur digitalen Sicherheit (Inhalt CC BY 4.0): ${SITE}/de`,
  };
  const reviewed: Record<Lang, string> = {
    ro: 'Verificat ultima dată',
    en: 'Last reviewed',
    hu: 'Utoljára ellenőrizve',
    pl: 'Ostatnia weryfikacja',
    cs: 'Naposledy ověřeno',
    sk: 'Naposledy overené',
    it: 'Ultima verifica',
    fr: 'Dernière vérification',
    de: 'Zuletzt geprüft',
  };
  return ['---', '', `${reviewed[lang]}: ${lastReviewed}.`, blurbs[lang]].join('\n');
}

export function playbookToMarkdown(entry: CollectionEntry<'playbooks'>): string {
  const { data } = entry;
  const lang = entryLang(entry.id);
  const T = t(lang);
  const parts: string[] = [
    `# ${data.title}`,
    '',
    data.summary,
    '',
    (entry.body ?? '').trim(),
    '',
    `## ${T('pb.steps')}`,
    '',
    data.steps.map((s, i) => `${i + 1}. ${inlineMd(s)}`).join('\n'),
  ];
  if (data.donts.length) parts.push('', `## ${T('pb.donts')}`, '', list(data.donts));
  if (data.recognize.length)
    parts.push('', `## ${T('pb.recognize')}`, '', list(data.recognize));
  if (data.report.length) {
    parts.push(
      '',
      `## ${T('pb.report')}`,
      '',
      data.report
        .map((r) => {
          const extra = [r.phone && `tel. ${r.phone}`, r.url].filter(Boolean).join(' · ');
          return `- **${r.channel}** — ${inlineMd(r.detail)}${extra ? ` (${extra})` : ''}`;
        })
        .join('\n')
    );
  }
  if (data.sources.length)
    parts.push('', `## ${T('pb.sources')}`, '', data.sources.map((s) => `- [${s.label}](${s.url})`).join('\n'));
  parts.push('', footer(lang, data.lastReviewed), '');
  return parts.join('\n');
}

export function ghidToMarkdown(entry: CollectionEntry<'ghiduri'>): string {
  const { data } = entry;
  const lang = entryLang(entry.id);
  const T = t(lang);
  const parts: string[] = [`# ${data.title}`, '', data.summary, '', (entry.body ?? '').trim()];
  if (data.greenFlags.length)
    parts.push('', `## ${T('guide.good')}`, '', list(data.greenFlags));
  if (data.redFlags.length)
    parts.push('', `## ${T('guide.bad')}`, '', list(data.redFlags));
  if (data.rules.length) parts.push('', `## ${data.rulesTitle}`, '', list(data.rules));
  if (data.relatedPlaybook)
    parts.push(
      '',
      `${T('guide.related.label')} ${SITE}${routes[lang].playbook(data.relatedPlaybook)}`
    );
  if (data.sources.length)
    parts.push('', `## ${T('pb.sources')}`, '', data.sources.map((s) => `- [${s.label}](${s.url})`).join('\n'));
  parts.push('', footer(lang, data.lastReviewed), '');
  return parts.join('\n');
}

export const MD_HEADERS = {
  'Content-Type': 'text/markdown; charset=utf-8',
};
