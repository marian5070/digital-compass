// digital-compass-mcp — Streamable HTTP stateless, după scheletul rotv-mcp
// (validat în producție). Server + transport noi per POST, bind doar loopback.
import express from 'express';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

import { getIndex, getIndexLoadedAt } from './data/loader.mjs';
import { registerTools } from './tools/index.mjs';
import { rateLimit } from './middleware/rate-limit.mjs';
import { authOptional } from './middleware/auth.mjs';
import { accessLog } from './middleware/log.mjs';

const VERSION = '0.2.0';

getIndex(); // fail-fast dacă dist/ nu e construit

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', true);

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex');
  next();
});

app.use(express.json({ limit: '256kb' }));
app.use(accessLog);
app.use(rateLimit({ rpm: Number(process.env.RATE_LIMIT_RPM || 60) }));
app.use(authOptional);

app.get('/mcp/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'digital-compass-mcp',
    version: VERSION,
    uptime_s: Math.round(process.uptime()),
    content_built_at: getIndexLoadedAt()?.toISOString() ?? null,
  });
});

app.post('/mcp', async (req, res) => {
  const server = new McpServer({ name: 'digital-compass-mcp', version: VERSION });
  registerTools(server);
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  res.on('close', () => {
    try { transport.close(); } catch {}
    try { server.close(); } catch {}
  });
  try {
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  } catch (err) {
    process.stderr.write(JSON.stringify({
      t: new Date().toISOString(),
      evt: 'mcp.fatal',
      err: err?.message,
      stack: (err?.stack || '').slice(0, 500),
    }) + '\n');
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        id: null,
        error: { code: -32603, message: 'Internal error' },
      });
    }
  }
});

app.all('/mcp', (_req, res) => {
  res.status(405).json({
    jsonrpc: '2.0',
    id: null,
    error: { code: -32000, message: 'Method not allowed — use POST' },
  });
});

const PORT = Number(process.env.PORT) || 3050;
app.listen(PORT, '127.0.0.1', () => {
  process.stdout.write(JSON.stringify({
    t: new Date().toISOString(),
    evt: 'listening',
    host: '127.0.0.1',
    port: PORT,
  }) + '\n');
});

process.on('SIGTERM', () => {
  process.stdout.write(JSON.stringify({ t: new Date().toISOString(), evt: 'sigterm' }) + '\n');
  process.exit(0);
});
