// Server static minimal pentru dist/ — folosit în producție (pm2, port 3040).
// Peste `express.static` adaugă exact două lucruri pe care un file-server nu le are:
//  1. content negotiation: `Accept: text/markdown` → varianta .md generată la build
//  2. 404 cu pagina custom din dist/404.html
import express from 'express';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const PORT = Number(process.env.PORT) || 3040;

const app = express();
app.disable('x-powered-by');

app.use((req, res, next) => {
  // Security baseline (securityheaders.com); CSP separat, per-app.
  // HSTS fără includeSubDomains: alte subdomenii madeinro.eu sunt alt origin.
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader(
    'Link',
    '</.well-known/api-catalog>; rel="api-catalog", ' +
      '<https://compass.madeinro.eu/sitemap-index.xml>; rel="sitemap"'
  );
  next();
});

// Negociere: paginile HTML au variantă .md generată la build (index.md,
// playbook/<slug>.md, ghiduri/<slug>.md). Dacă clientul preferă markdown
// și varianta există, o servim; altfel cădem transparent pe HTML.
app.use((req, res, next) => {
  const accept = req.headers.accept ?? '';
  if (!accept.includes('text/markdown')) return next();

  const clean = req.path.replace(/\/+$/, '') || '/index';
  const mdFile = path.join(DIST, `${clean}.md`);
  if (mdFile.startsWith(DIST) && existsSync(mdFile)) {
    res.setHeader('Vary', 'Accept');
    return res.type('text/markdown; charset=utf-8').sendFile(mdFile);
  }
  next();
});

app.use(
  express.static(DIST, {
    extensions: ['html'],
    dotfiles: 'allow', // altfel /.well-known/* (agent-skills) ar da 404
    setHeaders(res, filePath) {
      if (filePath.endsWith('.md'))
        res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      if (filePath.endsWith(`${path.sep}api-catalog`))
        res.setHeader('Content-Type', 'application/linkset+json'); // RFC 9727
      // Fișierele de descoperire se schimbă odată cu deploy-ul — cache scurt,
      // altfel Cloudflare le ține ore întregi la edge (văzut pe viu).
      if (filePath.includes(`${path.sep}.well-known${path.sep}`))
        res.setHeader('Cache-Control', 'public, max-age=300');
    },
  })
);

app.use((req, res) => {
  // no-store: altfel Cloudflare cachează 404-ul și un URL abia publicat
  // rămâne „inexistent" la edge mult după ce există la origin.
  res.setHeader('Cache-Control', 'no-store');
  res.status(404).sendFile(path.join(DIST, '404.html'));
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`digital-compass: dist/ servit pe http://127.0.0.1:${PORT}`);
});
