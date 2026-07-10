// Generează dist/.well-known/agent-skills/index.json (Agent Skills Discovery
// RFC v0.2.0) după `astro build`. Digest-ul sha256 e calculat din fișierul
// SKILL.md efectiv livrat, deci nu poate devia de la conținut.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SKILLS_DIR = path.join(ROOT, '..', 'dist', '.well-known', 'agent-skills');

const DESCRIPTIONS = {
  'ajutor-criza-digitala':
    'Guide a user through an online emergency (phishing link, hacked account, purchase scam, fraud call) using Digital Compass — Romanian-language step-by-step playbooks with cited official sources, all available as plain markdown.',
};

const skills = readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => {
    const md = readFileSync(path.join(SKILLS_DIR, d.name, 'SKILL.md'));
    return {
      name: d.name,
      type: 'skill-md',
      description: DESCRIPTIONS[d.name] ?? '',
      url: `/.well-known/agent-skills/${d.name}/SKILL.md`,
      digest: `sha256:${createHash('sha256').update(md).digest('hex')}`,
    };
  });

const index = {
  $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
  skills,
};

writeFileSync(path.join(SKILLS_DIR, 'index.json'), JSON.stringify(index, null, 2) + '\n');
console.log(`agent-skills: index.json scris (${skills.length} skill-uri)`);
