# Cum contribui la Digital Compass

Mulțumim că vrei să ajuți. Acesta e conținut de **siguranță** — un om speriat urmează
pașii pe care îi scriem. De aceea avem un standard clar, nu ca să te descurajăm, ci ca
informația să rămână de încredere.

## Ce căutăm

- **Corecții de acuratețe** — un pas greșit, un număr sau link învechit, o procedură
  schimbată.
- **Surse oficiale noi** — DNSC, ANPC, poliție, bănci, platforme oficiale.
- **Playbook-uri noi** — situații reale, frecvente, de tip criză („mi s-a întâmplat X, ce
  fac?").

## Standardul de conținut

1. **Fiecare afirmație procedurală are o sursă oficială.** Nu scriem din memorie sau din
   auzite. Sursele merg în `sources` (etichetă + link real).
2. **Ton uman, fără jargon, fără să sperie.** Începe cu calm („Întâi, respiră"), apoi pași
   concreți.
3. **Numere și linkuri reale**, verificate, pentru raportare.
4. **Marchează data verificării** (`lastReviewed`).
5. **Fără** sfaturi nesusținute, ton alarmist, promisiuni, linkuri de afiliere sau
   îndemnuri la plată.

## Limbi și traduceri — avem nevoie de tine

Site-ul există în **română** (originalul), **engleză** și **maghiară** — ancorate
în România (publicul: expați, respectiv comunitatea maghiarofonă din RO; canalele
de raportare rămân cele românești) — și în **poloneză, ancorată în POLONIA**
(primul „country pack": canale, surse și exemple poloneze; sursa editorială e
`docs/country-packs/pl.md`, cu fiecare URL verificat). Traducerile sunt făcute cu
AI și verificate editorial, dar **nu de vorbitori nativi**. Dacă ești vorbitor
nativ și vezi o formulare nefirească — un PR cu corectura, oricât de mică, e exact
genul de contribuție pe care o căutăm.

### Cum adaugi o limbă nouă („language pack")

Regula de aur: **canalele se localizează, nu se traduc.** O limbă are sens în două
scenarii, iar ele cer lucruri diferite:

- **Limbă vorbită în România** (cum sunt EN/HU de azi): canalele DNSC/Poliția/banca
  rămân; e „doar" traducere + glose pentru instituțiile românești.
- **Limbă pentru altă țară** (PL pentru Polonia etc.): OBLIGATORIU se înlocuiesc
  canalele de raportare (CERT-ul național, poliția, protecția consumatorului),
  sursele și exemplele de înșelătorii cu cele locale, verificate cu link real.
  Fără asta, un playbook tradus e periculos — trimite omul în criză la un număr
  care nu-l poate ajuta.

Pașii tehnici (modelul complet e limba `hu` din istoric):
1. Conținut: `src/content/playbooks/<lang>/` + `src/content/ghiduri/<lang>/`
   (aceleași slug-uri de fișier ca RO — sunt cheia comună între limbi).
2. `src/lib/i18n-content.ts`: adaugă limba în `Lang` și `LANGS`.
3. `src/i18n/routes.ts`: rutele limbii (slug-uri localizate pentru paginile statice).
4. `src/i18n/ui.ts`: dicționarul complet de interfață.
5. `astro.config.mjs`: locale în `i18n` și în `sitemap({ i18n })`.
6. Pagini subțiri în `src/pages/<lang>/` (copiate după `src/pages/hu/`) + cele
   3 pagini de proză traduse.
7. `public/webmcp.js` și `mcp/src/` — adaugă limba în enum-uri și în maparea
   segmentului de ghiduri.
8. `npm run build` trebuie să treacă; verifică hreflang-ul pe o pagină.

## Cum adaugi un playbook

Creezi un fișier în `src/content/playbooks/ro/<slug>.md` (plus, ideal, variantele
în limbile existente). Schema completă e în `src/content.config.ts`. Frontmatter:

```yaml
---
title: "Întrebarea omului. Ce fac?"
summary: "Rezumat scurt (meta description)."
situation: "Cum sună situația pe cardul din Home"
icon: "📞"
order: 5
severity: urgent        # urgent | important
lastReviewed: "9 iulie 2026"
steps:
  - "Primul pas, acționabil. Poți folosi <strong>accent</strong>."
donts:
  - "Ce să NU faci."
recognize:
  - "Semn de recunoaștere data viitoare."
report:
  - channel: "DNSC"
    detail: "Ce raportezi aici."
    phone: "1911"
    url: "https://dnsc.ro"
sources:
  - label: "Sursă oficială"
    url: "https://..."
---

**Întâi, respiră.** Fraza care calmează, în corpul markdown.
```

## Procesul

1. Un PR mic = un playbook nou sau o corecție. Ușor de verificat.
2. Rulează `npm run build` — trebuie să treacă (schema validează frontmatter-ul).
3. Descrie în PR **de unde ai luat informația** (sursele).

## Licență

Contribuind, ești de acord ca **conținutul** tău să fie sub [CC BY 4.0](LICENSE-CONTENT.md)
și **codul** sub [MIT](LICENSE).
