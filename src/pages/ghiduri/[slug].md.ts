import { getCollection } from 'astro:content';
import type { APIRoute, GetStaticPaths } from 'astro';
import { ghidToMarkdown, MD_HEADERS } from '../../lib/markdown';

// Varianta text/markdown a fiecărui ghid: /ghiduri/<slug>.md
export const getStaticPaths: GetStaticPaths = async () => {
  const ghiduri = await getCollection('ghiduri');
  return ghiduri.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
};

export const GET: APIRoute = ({ props }) => {
  return new Response(ghidToMarkdown(props.entry), { headers: MD_HEADERS });
};
