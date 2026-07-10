// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site static, output complet HTML. Fără JS de framework by default.
// `site` se va seta la domeniul final înainte de lansare (folosit pentru sitemap/canonical).
export default defineConfig({
  // Subdomeniu sub madeinro.eu (digital-compass.ro e luat). Ușor de schimbat.
  site: 'https://compass.madeinro.eu',
  trailingSlash: 'ignore',
  // RO rămâne la rădăcină (URL-urile istorice nu se schimbă); EN sub /en/.
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en', 'hu'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ro',
        locales: { ro: 'ro', en: 'en', hu: 'hu' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
