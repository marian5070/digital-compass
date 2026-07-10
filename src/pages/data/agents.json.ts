import type { APIRoute } from 'astro';
import { getPlaybooks, getGhiduri, entrySlug, LANGS } from '../../lib/i18n-content';
import { routes } from '../../i18n/routes';

// Index compact al conținutului (ambele limbi), pentru uneltele WebMCP
// (public/webmcp.js) și pentru serverul MCP (mcp/). Generat la build din
// colecții — aceeași sursă unică de adevăr.

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const situatii = [];
  const ghiduriOut = [];

  for (const lang of LANGS) {
    for (const p of await getPlaybooks(lang)) {
      const slug = entrySlug(p.id);
      situatii.push({
        lang,
        slug,
        situatie: p.data.situation,
        titlu: p.data.title,
        rezumat: p.data.summary,
        severitate: p.data.severity,
        verificat: p.data.lastReviewed,
        raportare: p.data.report,
        url: `${SITE}${routes[lang].playbook(slug)}`,
        markdown: `${SITE}${routes[lang].playbook(slug)}.md`,
      });
    }
    for (const g of await getGhiduri(lang)) {
      const slug = entrySlug(g.id);
      ghiduriOut.push({
        lang,
        slug,
        titlu: g.data.title,
        tema: g.data.topic,
        rezumat: g.data.summary,
        verificat: g.data.lastReviewed,
        url: `${SITE}${routes[lang].guide(slug)}`,
        markdown: `${SITE}${routes[lang].guide(slug)}.md`,
      });
    }
  }

  return new Response(JSON.stringify({ site: SITE, situatii, ghiduri: ghiduriOut }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
