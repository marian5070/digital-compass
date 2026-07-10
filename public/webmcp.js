/**
 * WebMCP (navigator.modelContext — Chrome origin trial): expune conținutul
 * ghidului ca unelte pentru agenții AI din browser. Vanilla JS, fără
 * dependențe, fără request-uri externe — pe browserele fără API e no-op strict.
 * Filozofia site-ului rămâne: zero tracking, zero framework.
 */
(function () {
  'use strict';
  try {
    var mc = navigator.modelContext;
    if (!mc || typeof mc.provideContext !== 'function') return;

    var indexCache = null;
    function loadIndex() {
      if (indexCache) return Promise.resolve(indexCache);
      return fetch('/data/agents.json')
        .then(function (r) { return r.json(); })
        .then(function (data) { indexCache = data; return data; });
    }
    function ok(data) {
      return { content: [{ type: 'text', text: JSON.stringify(data) }] };
    }
    function err(msg) {
      return { content: [{ type: 'text', text: JSON.stringify({ error: msg }) }], isError: true };
    }

    var tools = [
      {
        name: 'compass_situatii',
        description:
          'Lista situațiilor de criză digitală acoperite de Digital Compass (link fals, cont spart, țeapă online...) plus ghidurile de prevenție, în română, engleză și maghiară (câmpul lang per intrare). Folosește-o ca să găsești slug-ul potrivit pentru problema utilizatorului, apoi cheamă compass_continut.',
        inputSchema: { type: 'object', properties: {} },
        execute: function () {
          return loadIndex().then(ok, function () {
            return err('Indexul nu a putut fi încărcat.');
          });
        },
      },
      {
        name: 'compass_continut',
        description:
          'Conținutul complet (markdown) al unui playbook de criză sau ghid de prevenție: pașii de urmat acum, ce să NU faci, cum recunoști data viitoare, unde raportezi în România (DNSC 1911, Poliție, bancă), cu surse citate. Ghid public, limbaj simplu — potrivit de transmis direct utilizatorului. lang: "ro" (implicit), "en" sau "hu".',
        inputSchema: {
          type: 'object',
          properties: {
            tip: { type: 'string', enum: ['playbook', 'ghid'], description: 'playbook = criză (s-a întâmplat deja), ghid = prevenție' },
            slug: { type: 'string', description: 'Slug-ul din compass_situatii, ex: "link-sms-fals"' },
            lang: { type: 'string', enum: ['ro', 'en', 'hu', 'pl'], description: 'Limba conținutului (implicit ro; pl = ancorat în Polonia)' },
          },
          required: ['tip', 'slug'],
        },
        execute: function (args) {
          var a = args || {};
          if (!a.slug || !/^[a-z0-9-]+$/.test(a.slug)) return Promise.resolve(err('Slug invalid.'));
          var GUIDES = { ro: '/ghiduri/', en: '/en/guides/', hu: '/hu/utmutatok/', pl: '/pl/poradniki/' };
          var PLAYBOOKS = { ro: '/playbook/', en: '/en/playbook/', hu: '/hu/playbook/', pl: '/pl/playbook/' };
          var lang = GUIDES[a.lang] ? a.lang : 'ro';
          var base = a.tip === 'ghid' ? GUIDES[lang] : PLAYBOOKS[lang];
          return fetch(base + a.slug + '.md')
            .then(function (r) {
              if (!r.ok) throw new Error(String(r.status));
              return r.text();
            })
            .then(function (text) {
              return { content: [{ type: 'text', text: text }] };
            })
            .catch(function () {
              return err('Nu există „' + a.slug + '". Cheamă compass_situatii pentru lista completă.');
            });
        },
      },
    ];

    mc.provideContext({ tools: tools });
  } catch (e) {
    /* API experimental — nu are voie să strice pagina. */
  }
})();
