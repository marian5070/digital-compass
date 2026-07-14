// digital-compass-mcp UI resources — MCP Apps extension
// (io.modelcontextprotocol/ui). One predeclared template: the playbook
// checklist card, rendered by capable hosts in a sandboxed iframe and fed
// the compass_get_content result over postMessage.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Fixed by the MCP Apps extension spec (2026-01-26).
const MCP_APP_HTML = 'text/html;profile=mcp-app';

const TEMPLATE = fs.readFileSync(path.join(__dirname, 'playbook-card.html'), 'utf8');

export function registerResources(server) {
  server.registerResource(
    'playbook-card',
    'ui://compass/playbook-card',
    {
      title: 'Playbook checklist card (MCP Apps template)',
      description:
        'Self-contained HTML template for compass_get_content: severity band, the playbook rendered ' +
        'as a calm step-by-step checklist (local check-offs, nothing stored), reporting links, and a ' +
        'link to the full page on compass.madeinro.eu.',
      mimeType: MCP_APP_HTML,
    },
    async (uri) => ({
      contents: [{ uri: uri.href, mimeType: MCP_APP_HTML, text: TEMPLATE }],
    })
  );
}
