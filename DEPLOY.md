# Deploy — Digital Compass

Site static Astro (`npm run build` → `dist/`), live pe
**https://compass.madeinro.eu**.

`site` e setat în `astro.config.mjs`; dacă schimbi subdomeniul, schimbă acolo +
în `public/robots.txt` + constantele `SITE` din `src/lib/markdown.ts`,
`src/pages/llms.txt.ts`, `src/pages/index.md.ts` și Link header-ul din
`server.mjs`, apoi rebuild.

---

## Setup-ul real (VPS + Cloudflare Tunnel existent)

Repo-ul e clonat pe VPS în `/opt/apps/digital-compass`. Nu are tunel propriu:
folosește tunelul cloudflared existent al VPS-ului, care servește deja mai multe
site-uri (rulat ca serviciu systemd, config în `/etc/cloudflared/config.yml`).

### Servire: `server.mjs` sub pm2, port 3040

`dist/` NU e servit de un file-server generic, ci de `server.mjs` (express, ~50
de linii), pentru două capabilități pe care un file-server nu le are:

1. **Content negotiation pentru agenți AI** — `Accept: text/markdown` întoarce
   varianta `.md` a paginii, generată la build din aceleași colecții de conținut
   (`src/pages/**/[slug].md.ts`, `index.md.ts`). Aceleași variante sunt accesibile
   și direct, adăugând `.md` la URL.
2. **404 custom** — servește `dist/404.html` cu status 404.

Plus `Link: <…/sitemap-index.xml>; rel="sitemap"` pe toate răspunsurile.

```bash
pm2 start server.mjs --name digital-compass   # din /opt/apps/digital-compass
pm2 save
```

### Ingress în tunelul existent

În `/etc/cloudflared/config.yml`, înainte de regula catch-all:

```yaml
  - hostname: compass.madeinro.eu
    service: http://localhost:3040
```

Apoi `sudo systemctl restart cloudflared` (restart, nu reload — reload oprește
procesul fără să-l repornească).

DNS: CNAME `compass` → `<tunnel-id>.cfargotunnel.com`, **Proxied**, în zona
madeinro.eu (adăugat manual în dashboard-ul Cloudflare; `cloudflared tunnel
route dns` nu merge dacă certificatul tunelului e emis pe altă zonă).

## Redeploy (la orice schimbare de conținut sau cod)

```bash
cd /opt/apps/digital-compass
git pull
npm ci
npm run build                # regenerează dist/ (HTML + .md + llms.txt + sitemap)
pm2 restart digital-compass  # necesar doar dacă s-a schimbat server.mjs
```

Fișierele din `dist/` sunt statice — build-ul nou e servit imediat, fără restart,
dacă doar conținutul s-a schimbat.

---

## Agent-readiness (isitagentready.com)

Ce publicăm real, fără decor:

- `robots.txt` cu **Content-Signal** (`search=yes, ai-input=yes, ai-train=yes` —
  conținutul e CC BY 4.0, misiunea e reach maxim) și sitemap.
- **`/llms.txt`** generat la build din colecțiile reale (playbooks + ghiduri).
- **Markdown negotiation** (vezi mai sus) — conținutul original, nu conversie.
- `Link: rel="sitemap"` header global.
- DNS-AID: vine din zona madeinro.eu (DNSSEC activ) + recordurile HTTPS publicate
  automat de Cloudflare pentru hostname-urile proxied.

Sărite intenționat (site de conținut, fără API sau comerț): OAuth, MCP Server
Card, API Catalog, Agent Skills, WebMCP, x402/UCP/ACP.

## După primul deploy — indexare

1. Verifică `https://compass.madeinro.eu/robots.txt` și `/sitemap-index.xml`.
2. Adaugă subdomeniul în **Google Search Console** și trimite sitemap-ul.
3. Testează un playbook în **Rich Results Test** (structured data HowTo).
