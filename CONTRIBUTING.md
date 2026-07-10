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

## Cum adaugi un playbook

Creezi un fișier în `src/content/playbooks/<slug>.md`. Schema completă e în
`src/content.config.ts`. Frontmatter:

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
