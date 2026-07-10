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
  res.setHeader(
    'Link',
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
    setHeaders(res, filePath) {
      if (filePath.endsWith('.md'))
        res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    },
  })
);

app.use((req, res) => {
  res.status(404).sendFile(path.join(DIST, '404.html'));
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`digital-compass: dist/ servit pe http://127.0.0.1:${PORT}`);
});
