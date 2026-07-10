import type { Lang } from '../lib/i18n-content';

// Harta rutelor pe limbă. RO stă la rădăcină; EN are slug-uri englezești pentru
// paginile statice și segmentul 'guides'. Slug-urile de CONȚINUT (playbook/ghid)
// rămân identice între limbi — sunt cheia comună pentru MCP, .md și hreflang.

export const routes = {
  ro: {
    home: '/',
    start: '/incepe-aici',
    guidesIndex: '/ghiduri',
    why: '/de-ce-existam',
    sources: '/surse',
    playbook: (slug: string) => `/playbook/${slug}`,
    guide: (slug: string) => `/ghiduri/${slug}`,
  },
  en: {
    home: '/en',
    start: '/en/start-here',
    guidesIndex: '/en/guides',
    why: '/en/why-we-exist',
    sources: '/en/sources',
    playbook: (slug: string) => `/en/playbook/${slug}`,
    guide: (slug: string) => `/en/guides/${slug}`,
  },
} as const;

export function r(lang: Lang) {
  return routes[lang];
}
