// Sursa de date a MCP-ului = build-ul Astro din ../dist (sursă unică de adevăr).
// agents.json e cache-uit în memorie și reîncărcat doar când mtime se schimbă
// (un redeploy al site-ului e vizibil imediat, fără restart la MCP).
import { readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const DIST = path.resolve(__dirname, '..', '..', '..', 'dist');

const INDEX_FILE = path.join(DIST, 'data', 'agents.json');

let cached = null;
let cachedMtime = 0;

export function getIndex() {
  const mtime = statSync(INDEX_FILE).mtimeMs;
  if (!cached || mtime !== cachedMtime) {
    cached = JSON.parse(readFileSync(INDEX_FILE, 'utf8'));
    cachedMtime = mtime;
  }
  return cached;
}

export function getIndexLoadedAt() {
  return cachedMtime ? new Date(cachedMtime) : null;
}

const SLUG_RE = /^[a-z0-9-]+$/;
const LANGS = new Set(['ro', 'en', 'hu']);
// Segmentul de URL al colecției de ghiduri diferă pe limbă.
const GUIDE_SEGMENT = { ro: 'ghiduri', en: 'guides', hu: 'utmutatok' };

/**
 * Markdown-ul unei pagini din dist. RO stă la rădăcină, alte limbi sub /<lang>/.
 * Întoarce null dacă nu există (slug greșit sau limbă netradusă încă).
 */
export function getMarkdown(type, slug, lang = 'ro') {
  if (!SLUG_RE.test(slug) || !LANGS.has(lang)) return null;
  const collection = type === 'ghid' ? GUIDE_SEGMENT[lang] : 'playbook';
  const rel = lang === 'ro' ? [collection, `${slug}.md`] : [lang, collection, `${slug}.md`];
  const file = path.join(DIST, ...rel);
  if (!file.startsWith(DIST) || !existsSync(file)) return null;
  return readFileSync(file, 'utf8');
}

/** Normalizare pentru căutare: fără diacritice, lowercase. */
export function normalize(s) {
  return String(s)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}
