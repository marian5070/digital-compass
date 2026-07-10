import type { APIRoute } from 'astro';
import { MD_HEADERS } from '../../lib/markdown';
import { getPlaybooks, getGhiduri, entrySlug } from '../../lib/i18n-content';
import { routes } from '../../i18n/routes';

// Varianta text/markdown a homepage-ului FR: /fr/index.md

const SITE = 'https://compass.madeinro.eu';

export const GET: APIRoute = async () => {
  const playbooks = await getPlaybooks('fr');
  const ghiduri = await getGhiduri('fr');

  const lines: string[] = [
    '# Digital Compass — un guide public de sécurité numérique, en français',
    '',
    'Il vous est arrivé quelque chose en ligne ? Choisissez votre situation ci-dessous et suivez',
    'les étapes, calmement, une par une. Chaque guide a une version markdown à la même URL + `.md`.',
    'Les canaux de signalement sont français (Cybermalveillance/17Cyber, 33700, votre banque).',
    '',
    '## Situations d’urgence',
    '',
    ...playbooks.map(
      (p) =>
        `- [${p.data.situation}](${SITE}${routes.fr.playbook(entrySlug(p.id))}.md) — ${p.data.title}`
    ),
    '',
    '## Guides de prévention',
    '',
    ...ghiduri.map(
      (g) => `- [${g.data.title}](${SITE}${routes.fr.guide(entrySlug(g.id))}.md): ${g.data.topic}`
    ),
    '',
    `En savoir plus : [Pourquoi nous existons](${SITE}/fr/pourquoi-nous-existons) · [Sources](${SITE}/fr/sources) · [Română](${SITE}/index.md) · [English](${SITE}/en/index.md) · [llms.txt](${SITE}/llms.txt)`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: MD_HEADERS });
};
