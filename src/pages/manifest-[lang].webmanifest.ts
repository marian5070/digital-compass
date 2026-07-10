import type { APIRoute, GetStaticPaths } from 'astro';
import { LANGS, type Lang } from '../lib/i18n-content';
import { routes } from '../i18n/routes';
import { t } from '../i18n/ui';

// Un manifest PWA per limbă: instalarea din /de/ pornește aplicația în /de/.
// Culorile = token-urile site-ului (indigo accent + off-white cald), în hex
// pentru compatibilitate maximă a parserelor de manifest.

export const getStaticPaths: GetStaticPaths = () =>
  LANGS.map((lang) => ({ params: { lang } }));

export const GET: APIRoute = ({ params }) => {
  const lang = params.lang as Lang;
  const T = t(lang);
  const manifest = {
    name: 'Digital Compass',
    short_name: 'Compass',
    description: T('home.desc'),
    lang,
    start_url: routes[lang].home,
    scope: '/',
    display: 'standalone',
    background_color: '#faf9f5',
    theme_color: '#4653c5',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    categories: ['education', 'utilities'],
  };
  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
