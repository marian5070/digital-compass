import { getCollection } from 'astro:content';
import type { APIRoute, GetStaticPaths } from 'astro';
import { playbookToMarkdown, MD_HEADERS } from '../../lib/markdown';

// Varianta text/markdown a fiecărui playbook: /playbook/<slug>.md
// Serverul o oferă și prin content negotiation (Accept: text/markdown).
export const getStaticPaths: GetStaticPaths = async () => {
  const playbooks = await getCollection('playbooks');
  return playbooks.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
};

export const GET: APIRoute = ({ props }) => {
  return new Response(playbookToMarkdown(props.entry), { headers: MD_HEADERS });
};
