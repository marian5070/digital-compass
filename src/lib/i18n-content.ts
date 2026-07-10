import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

// Conținutul stă pe subfoldere de limbă (src/content/<colecție>/<lang>/<slug>.md),
// deci entry.id = "<lang>/<slug>". Helpers comune pentru toate call-site-urile.

export type Lang = 'ro' | 'en' | 'hu' | 'pl';
export const LANGS: Lang[] = ['ro', 'en', 'hu', 'pl'];
export const DEFAULT_LANG: Lang = 'ro';

export function entryLang(id: string): Lang {
  return (id.split('/')[0] as Lang) ?? DEFAULT_LANG;
}

export function entrySlug(id: string): string {
  return id.split('/').slice(1).join('/');
}

/** Prefixul de URL al limbii ('' pentru ro, '/en' pentru en). */
export function langPrefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? '' : `/${lang}`;
}

export async function getPlaybooks(lang: Lang): Promise<CollectionEntry<'playbooks'>[]> {
  return (await getCollection('playbooks', (e) => entryLang(e.id) === lang)).sort(
    (a, b) => a.data.order - b.data.order
  );
}

export async function getGhiduri(lang: Lang): Promise<CollectionEntry<'ghiduri'>[]> {
  return (await getCollection('ghiduri', (e) => entryLang(e.id) === lang)).sort(
    (a, b) => a.data.order - b.data.order
  );
}

export function getPlaybook(lang: Lang, slug: string) {
  return getEntry('playbooks', `${lang}/${slug}`);
}
