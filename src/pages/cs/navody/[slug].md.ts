import type { APIRoute, GetStaticPaths } from 'astro';
import { ghidToMarkdown, MD_HEADERS } from '../../../lib/markdown';
import { getGhiduri, entrySlug } from '../../../lib/i18n-content';

// Varianta text/markdown a ghidurilor HU: /cs/navody/<slug>.md
export const getStaticPaths: GetStaticPaths = async () => {
  const ghiduri = await getGhiduri("cs");
  return ghiduri.map((entry) => ({
    params: { slug: entrySlug(entry.id) },
    props: { entry },
  }));
};

export const GET: APIRoute = ({ props }) => {
  return new Response(ghidToMarkdown(props.entry), { headers: MD_HEADERS });
};
