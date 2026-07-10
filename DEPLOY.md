# Deploy — Digital Compass

Site static Astro (`npm run build` → `dist/`). Domeniu țintă:
**https://compass.madeinro.eu** (subdomeniu sub `madeinro.eu`).

`site` e setat în `astro.config.mjs`; dacă schimbi subdomeniul, schimbă acolo +
în `public/robots.txt`, apoi rebuild.

---

## Varianta aleasă — VPS + Cloudflare Tunnel

Serești `dist/` static de pe VPS și îl expui prin `cloudflared` (fără să deschizi porturi).

### 1. Build și urcă `dist/` pe VPS
```
npm run build
rsync -avz --delete dist/ user@VPS:/var/www/digital-compass/
```

### 2. Servește static pe VPS (ex. Caddy — HTTPS/local nu contează, tunelul se ocupă)
`Caddyfile`:
```
:8080 {
    root * /var/www/digital-compass
    file_server
    try_files {path} {path}/ /404.html
    encode gzip zstd
}
```
(sau nginx cu `root /var/www/digital-compass; try_files $uri $uri/ /404.html;`)

### 3. Cloudflare Tunnel → subdomeniu
```
! cloudflared tunnel login
cloudflared tunnel create digital-compass
```
În `~/.cloudflared/config.yml`:
```
tunnel: digital-compass
credentials-file: /root/.cloudflared/<UUID>.json
ingress:
  - hostname: compass.madeinro.eu
    service: http://localhost:8080
  - service: http_status:404
```
Leagă DNS-ul și pornește:
```
cloudflared tunnel route dns digital-compass compass.madeinro.eu
cloudflared tunnel run digital-compass   # sau ca serviciu: cloudflared service install
```

> Nota: `cloudflared tunnel route dns` funcționează dacă zona `madeinro.eu` e pe Cloudflare.
> La redeploy: refaci pașii 1 (build + rsync). Tunelul rămâne pornit.

---

## Varianta A — Cloudflare Pages (alternativă)

Gratuit, rapid, CDN global, HTTPS automat. Cel mai simplu dacă DNS-ul lui
`madeinro.eu` e deja pe Cloudflare.

### 1. Build local (îl fac eu / rulezi tu)
```
npm run build
```

### 2. Deploy prin Wrangler (login-ul îl faci TU)
```
! npx wrangler login
npx wrangler pages deploy dist --project-name digital-compass
```
`! npx wrangler login` deschide browserul pentru autentificare — rulează-l tu cu
prefixul `!` în prompt.

### 3. Subdomeniul compass.madeinro.eu
- Dacă `madeinro.eu` e pe Cloudflare: în proiectul Pages → **Custom domains** →
  adaugi `compass.madeinro.eu` (CNAME-ul se creează automat).
- Dacă DNS-ul e la alt registrar: adaugi manual un **CNAME**
  `compass` → `digital-compass.pages.dev`.

---

## Varianta B — Netlify (alternativă)

```
! npx netlify login
npx netlify deploy --dir dist --prod
```
Apoi în Netlify → Domain settings → add `compass.madeinro.eu` și urmezi
instrucțiunea de CNAME.

---

## Varianta C — orice hosting static

`dist/` e complet static. Îl poți urca prin FTP/SFTP oriunde servește fișiere
statice (inclusiv pe serverul unde stă deja `madeinro.eu`), într-un folder legat
de subdomeniul `compass`.

---

## După primul deploy — indexare

1. Verifică `https://compass.madeinro.eu/robots.txt` și `/sitemap-index.xml`.
2. Adaugă subdomeniul în **Google Search Console** și trimite sitemap-ul.
3. Testează un playbook în **Rich Results Test** (structured data HowTo).
