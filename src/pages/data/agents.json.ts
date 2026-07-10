import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

// Index compact al conținutului, pentru uneltele WebMCP (public/webmcp.js).
// Generat la build din colecții — aceeași sursă unică de adevăr.

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = (await getCollection('playbooks')).sort(
    (a, b) => a.data.order - b.data.order
  );
  const ghiduri = (await getCollection('ghiduri')).sort(
    (a, b) => a.data.order - b.data.order
  );

  const body = {
    site: SITE,
    situatii: playbooks.map((p) => ({
      slug: p.id,
      situatie: p.data.situation,
      titlu: p.data.title,
      rezumat: p.data.summary,
      severitate: p.data.severity,
      url: `${SITE}/playbook/${p.id}`,
      markdown: `${SITE}/playbook/${p.id}.md`,
    })),
    ghiduri: ghiduri.map((g) => ({
      slug: g.id,
      titlu: g.data.title,
      tema: g.data.topic,
      rezumat: g.data.summary,
      url: `${SITE}/ghiduri/${g.id}`,
      markdown: `${SITE}/ghiduri/${g.id}.md`,
    })),
  };

  return new Response(JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
