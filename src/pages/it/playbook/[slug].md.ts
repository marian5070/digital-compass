import type { APIRoute, GetStaticPaths } from 'astro';
import { playbookToMarkdown, MD_HEADERS } from '../../../lib/markdown';
import { getPlaybooks, entrySlug } from '../../../lib/i18n-content';

// Varianta text/markdown a playbook-urilor HU: /it/playbook/<slug>.md
export const getStaticPaths: GetStaticPaths = async () => {
  const playbooks = await getPlaybooks("it");
  return playbooks.map((entry) => ({
    params: { slug: entrySlug(entry.id) },
    props: { entry },
  }));
};

export const GET: APIRoute = ({ props }) => {
  return new Response(playbookToMarkdown(props.entry), { headers: MD_HEADERS });
};
