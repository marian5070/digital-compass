import { LANGS, type Lang } from '../lib/i18n-content';

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
    pwa: '/aplicatie',
    org: '/pentru-firma',
    howItWorks: '/cum-functioneaza',
    playbook: (slug: string) => `/playbook/${slug}`,
    guide: (slug: string) => `/ghiduri/${slug}`,
  },
  en: {
    home: '/en',
    start: '/en/start-here',
    guidesIndex: '/en/guides',
    why: '/en/why-we-exist',
    sources: '/en/sources',
    pwa: '/en/app',
    org: '/en/for-your-team',
    howItWorks: '/en/how-it-works',
    playbook: (slug: string) => `/en/playbook/${slug}`,
    guide: (slug: string) => `/en/guides/${slug}`,
  },
  // Maghiară ancorată în România: limba se schimbă, canalele de raportare nu.
  hu: {
    home: '/hu',
    start: '/hu/kezdd-itt',
    guidesIndex: '/hu/utmutatok',
    why: '/hu/miert-letezunk',
    sources: '/hu/forrasok',
    pwa: '/hu/alkalmazas',
    org: '/hu/a-cegednek',
    howItWorks: '/hu/hogyan-mukodik',
    playbook: (slug: string) => `/hu/playbook/${slug}`,
    guide: (slug: string) => `/hu/utmutatok/${slug}`,
  },
  // Poloneză ancorată în POLONIA (primul country pack): substanța e localizată —
  // canale, surse și exemple poloneze, nu traduceri ale celor românești.
  pl: {
    home: '/pl',
    start: '/pl/zacznij-tutaj',
    guidesIndex: '/pl/poradniki',
    why: '/pl/dlaczego-istniejemy',
    sources: '/pl/zrodla',
    pwa: '/pl/aplikacja',
    org: '/pl/dla-twojej-firmy',
    howItWorks: '/pl/jak-to-dziala',
    playbook: (slug: string) => `/pl/playbook/${slug}`,
    guide: (slug: string) => `/pl/poradniki/${slug}`,
  },
  // Country packs (fiecare ancorat în țara lui — vezi docs/country-packs/).
  cs: {
    home: '/cs',
    start: '/cs/zacni-tady',
    guidesIndex: '/cs/navody',
    why: '/cs/proc-existujeme',
    sources: '/cs/zdroje',
    pwa: '/cs/aplikace',
    org: '/cs/pro-vasi-firmu',
    howItWorks: '/cs/jak-to-funguje',
    playbook: (slug: string) => `/cs/playbook/${slug}`,
    guide: (slug: string) => `/cs/navody/${slug}`,
  },
  sk: {
    home: '/sk',
    start: '/sk/zacni-tu',
    guidesIndex: '/sk/navody',
    why: '/sk/preco-existujeme',
    sources: '/sk/zdroje',
    pwa: '/sk/aplikacia',
    org: '/sk/pre-vasu-firmu',
    howItWorks: '/sk/ako-to-funguje',
    playbook: (slug: string) => `/sk/playbook/${slug}`,
    guide: (slug: string) => `/sk/navody/${slug}`,
  },
  it: {
    home: '/it',
    start: '/it/inizia-qui',
    guidesIndex: '/it/guide',
    why: '/it/perche-esistiamo',
    sources: '/it/fonti',
    pwa: '/it/app',
    org: '/it/per-la-tua-azienda',
    howItWorks: '/it/come-funziona',
    playbook: (slug: string) => `/it/playbook/${slug}`,
    guide: (slug: string) => `/it/guide/${slug}`,
  },
  fr: {
    home: '/fr',
    start: '/fr/commencer-ici',
    guidesIndex: '/fr/guides',
    why: '/fr/pourquoi-nous-existons',
    sources: '/fr/sources',
    pwa: '/fr/application',
    org: '/fr/pour-votre-entreprise',
    howItWorks: '/fr/comment-ca-marche',
    playbook: (slug: string) => `/fr/playbook/${slug}`,
    guide: (slug: string) => `/fr/guides/${slug}`,
  },
  de: {
    home: '/de',
    start: '/de/starte-hier',
    guidesIndex: '/de/ratgeber',
    why: '/de/warum-es-uns-gibt',
    sources: '/de/quellen',
    pwa: '/de/app',
    org: '/de/fuer-ihre-firma',
    howItWorks: '/de/wie-es-funktioniert',
    playbook: (slug: string) => `/de/playbook/${slug}`,
    guide: (slug: string) => `/de/ratgeber/${slug}`,
  },
} as const;

export function r(lang: Lang) {
  return routes[lang];
}

/** Alternates (hreflang + comutator) pentru paginile statice, peste toate limbile. */
export function pageAlternates(
  key: 'home' | 'start' | 'guidesIndex' | 'why' | 'sources' | 'pwa' | 'org' | 'howItWorks'
): Record<Lang, string> {
  return Object.fromEntries(LANGS.map((l) => [l, routes[l][key]])) as Record<Lang, string>;
}

/** Alternates pentru paginile de conținut (slug comun între limbi). */
export function contentAlternates(kind: 'playbook' | 'guide', slug: string): Record<Lang, string> {
  return Object.fromEntries(LANGS.map((l) => [l, routes[l][kind](slug)])) as Record<Lang, string>;
}
