// Service Worker — Digital Compass
// Scop real: playbook-urile citite (sau salvate explicit) rămân disponibile
// offline — omul în criză poate avea net prost. Pattern validat (cand-reciclam):
// shell precache minim, network-first pe navigări cu fallback la cache,
// stale-while-revalidate pe assets. Bump VERSION la schimbări incompatibile.

const VERSION = 'v2';
const SHELL_CACHE = `dc-shell-${VERSION}`;
const PAGES_CACHE = `dc-pages-${VERSION}`;
const STATIC_CACHE = `dc-static-${VERSION}`;

const SHELL = ['/', '/icon-192.png', '/icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => ![SHELL_CACHE, PAGES_CACHE, STATIC_CACHE].includes(k))
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

// „Salvează ghidurile offline": pagina /aplicatie trimite lista de URL-uri
// ale limbii curente; le punem în cache și raportăm progresul.
self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || data.type !== 'CACHE_URLS' || !Array.isArray(data.urls)) return;
  event.waitUntil(
    caches.open(PAGES_CACHE).then(async (cache) => {
      let ok = 0;
      for (const url of data.urls) {
        try {
          const res = await fetch(url, { credentials: 'same-origin' });
          if (res.ok) {
            await cache.put(url, res);
            ok++;
          }
        } catch {
          /* offline sau URL căzut — continuăm */
        }
        if (event.source)
          event.source.postMessage({ type: 'CACHE_PROGRESS', done: ok, total: data.urls.length });
      }
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // MCP-ul și datele dinamice nu se cache-uiesc aici.
  if (url.pathname.startsWith('/mcp')) return;

  // Navigări: network-first (conținut proaspăt), fallback la cache (offline).
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(PAGES_CACHE).then((c) => c.put(request, copy));
          }
          return res;
        })
        .catch(async () => {
          let cached = await caches.match(request, { ignoreSearch: true });
          if (!cached) {
            // normalizează slash-ul final (cache-ul ține formele canonice cu /)
            const alt = url.pathname.endsWith('/')
              ? url.pathname.slice(0, -1)
              : url.pathname + '/';
            cached = await caches.match(alt, { ignoreSearch: true });
          }
          return cached || caches.match('/');
        })
    );
    return;
  }

  // Assets (_astro, imagini, .md, manifest): stale-while-revalidate.
  event.respondWith(
    caches.open(STATIC_CACHE).then(async (cache) => {
      const cached = await cache.match(request);
      const fetchPromise = fetch(request)
        .then((res) => {
          if (res.ok) cache.put(request, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
