# Country pack: Cehia (cs)

Sursa editorială pentru versiunea cehă — **ancorată în Cehia**: canalele,
sursele și exemplele de mai jos înlocuiesc integral echivalentele românești în
conținutul `cs`. Toate URL-urile și numerele marcate ✅ au fost verificate direct
(fetch 200 + conținut confirmat) la data verificării. Ce nu a putut fi confirmat
NU se folosește în conținut.

Verificat: 2026-07-10.

**Atenție la domenii:** instituțiile de stat cehe au migrat pe `.gov.cz` —
`policie.cz` și `coi.cz` dau 301 spre **policie.gov.cz** / **coi.gov.cz**.
Publicăm exclusiv formele care dau 200.

## Canale de raportare (înlocuiesc DNSC/Poliția Română/ANPC)

| Rol | Canal ceh | Detalii verificate |
|---|---|---|
| Incidente cibernetice / phishing (≈DNSC, pentru cetățeni) | **CSIRT.CZ** ✅ | Punct de contact pentru PUBLIC și entitățile din afara regulării: „Nadále sloužíme jako kontaktní místo pro veřejnost". Raportare prin formular: csirt.cz/cs/hlaseni-incidentu/. ⚠️ E-mailul de raportare (abuse@…) neconfirmat — nu-l publica. |
| Incidente la entități reglementate | **NÚKIB** ✅ | nukib.gov.cz — autoritatea națională de securitate cibernetică; primește incidente de la entitățile reglementate (portal propriu din nov. 2025). NU e canalul cetățeanului: pentru phishing/fraude personale → CSIRT.CZ + Policie. NÚKIB avertizează chiar el asupra apelurilor false „în numele NÚKIB". |
| Urgențe | **112 / 158** ✅ | 158 = linia poliției, 112 = urgențe generale; ambele afișate pe policie.gov.cz. |
| Plângere penală fraudă | **Policie ČR — orice secție, în persoană** ✅ | NU există formular online simplu: „trestní oznámení" se depune oral la orice organ de poliție, în scris (recomandat cu confirmare), electronic DOAR cu semnătură electronică sau prin datová schránka. Ghid oficial: policie.gov.cz/clanek/oznameni-trestneho-cinu.aspx. Vechea „hotline" online a poliției a fost ÎNCHISĂ în 2018; conținutul dăunător se raportează la STOPonline.cz (policie.gov.cz/clanek/ukonceni-provozu-hotline.aspx ✅). |
| Blocare card bancar | **Doar banca proprie — NU există număr unic național** ✅ | Spre deosebire de Polonia (828 828 828), în Cehia „každá banka má svá vlastní pravidla a postupy" (mzv.gov.cz, lista consulară). Numărul e pe spatele cardului / în aplicație. ⚠️ Numerele individuale per bancă din lista MZV pot fi neactualizate — publicăm principiul, nu numerele. |
| Protecția consumatorului (≈ANPC) | **ČOI: +420 222 703 404** ✅ | Linia de consiliere consumatori, luni și miercuri 8–16 (coi.gov.cz/kontakty-inspektoraty/). Sesizări: podatelna@coi.gov.cz. Lista oficială de e-shopuri riscante: coi.gov.cz/pro-spotrebitele/rizikove-e-shopy/ — sute de site-uri, căutabilă. |
| Conținut ilegal (CSAM/sextortion) | **STOPonline.cz: +420 910 101 010** ✅ | Operat de CZ.NIC cu CSIRT.CZ; e-mail stoponline@nic.cz; primește conținut ilegal cu copii + amenințări cibernetice. Recomandat oficial de poliție ca succesor al hotline-ului propriu. ⚠️ Anonimitatea raportării neconfirmată — nu o promite. |
| Copii și tineri | **116 111 — Linka bezpečí** ✅ | Gratuit, NONSTOP, anonim, pentru copii și tineri până la 26 de ani; chat zilnic 9–13 și 15–19, e-mail cu răspuns în 3 zile (linkabezpeci.cz). |
| Educație anti-fraudă | **kybertest.cz** ✅ | Test interactiv ČBA (#nePINdej!) în parteneriat cu Policie ČR și NÚKIB; simulează fraudele curente pe grupe de vârstă. Poliția e partener oficial: policie.gov.cz/clanek/nepindej.aspx. |
| Recuperare conturi | facebook.com/hacked ✅, accounts.google.com/signin/recovery ✅ | Globale, neschimbate. |

**Neconfirmate — NU se folosesc:** e-mailul de raportare CSIRT.CZ (abuse@…),
portal.nukib.gov.cz/chci-vyridit (menționat pe homepage NÚKIB, neverificat
direct), numerele de blocare card per bancă din lista MZV, anonimitatea
STOPonline, scurtătura „coi.gov.cz/rizikove".

## Peisajul de înșelătorii (verificat, surse oficiale CZ)

Doar linkurile ✅ pot intra în `sources[]`. Informația din surse ⚠️ (media,
neconfirmate prin fetch) poate colora exemplele, dar NU se citează.

- **Smishing curierat** — SMS/e-mail „Česká pošta": zásilka reținută în vamă,
  „plătește 216,99 Kč" / taxă de 160 Kč / „adresă incompletă" + link de plată.
  Pošta cere forward-ul mesajelor false la info@cpost.cz.
  ✅ ceskaposta.cz/o-spolecnosti/bezpecnostni-informace/aktualni-informace.
  Varianta Zásilkovna: „potvrďte platbu" prin SMS — Zásilkovna NU cere plăți prin
  SMS; raportare la privacy@zasilkovna.cz. ✅ zasilkovna.cz/bezpecnost-ochrana-dat/sms.
- **Scam pe Bazoš/portaluri de anunțuri (țintește VÂNZĂTORUL)** — „cumpărătorul"
  propune că „zboží vyzvedne kurýr" (Zásilkovna/DPD/Česká pošta) și trimite link
  spre fals gateway unde vânzătorul „își încasează banii" introducând datele
  cardului sau loginul bancar. Regula poliției: „Prodejce přeci zboží PRODÁVÁ,
  nekupuje!" — vânzătorul nu introduce NICIODATĂ date de card ca să primească bani.
  ✅ policie.gov.cz/clanek/pozor-na-podvody-v-kyberprostoru.aspx,
  ✅ policie.gov.cz/clanek/podvod-pres-inzerat-431640.aspx.
  Zásilkovna oficial: nu operează niciun serviciu în care vânzătorul introduce
  date de card; singurul gateway legitim e prin ČSOB; domeniul e doar zasilkovna.cz
  (clonele arată ca „zasilkovna-cz.dealpay.site"). ✅ zasilkovna.cz/blog/phishing-pozor-na-podvodniky-na-inzertnich-portalech.
- **„Falešný bankéř / falešný policista"** — fenomenul nr. 1 în CZ: apel cu numărul
  REAL al băncii/poliției (spoofing), „contul e în pericol / cineva a luat credit
  pe numele tău", intră în scenă un „polițist", presiune „Musíte jednat hned",
  „Nikomu nevolejte", transfer pe „bezpečný účet" sau instalare de acces la
  distanță. Paguba medie: ~750 000 Kč. Regula oficială **3Z: Zastav. Zavěs.
  Zkontroluj.** (Oprește-te. Închide. Verifică.) — poliția și banca nu cer
  NICIODATĂ transferuri prin telefon.
  ✅ policie.gov.cz/clanek/policie-varuje-pred-falesnymi-policisty-a-bankeri-dodrzujte-pravidlo-3z.aspx.
- **„Vnuk" (nepotul) la telefon** — „ahoj babi/dědo…", nepotul „are o urgență"
  (accident, spital), nu poate veni personal și „trimite un prieten" după bani.
  Sfat poliție: verifică imediat sunând nepotul/familia; dacă nimeni n-a sunat →
  158. ✅ policie.gov.cz/clanek/seniori-nedejte-sanci-podvodnikum.aspx.
- **Cont spart + cereri către prieteni** — link „hlasuj pentru copilul meu"
  (concurs fals) pe WhatsApp/Facebook → introduci numărul de telefon + codul SMS →
  contul e preluat → contactele primesc cereri de „împrumut" (35 000 Kč, cont
  bancar indicat). Control-cheie: orice cerere de bani de la un „prieten" se
  verifică prin apel direct.
  ✅ policie.gov.cz/clanek/odkaz-na-hlasovani-zadost-o-pujcku-dalsi-poskozeni-prisli-o-penize.aspx.
- **Investiții false + deepfake** — video generat cu AI cu guvernatorul ČNB care
  „recomandă o investiție creată de banca centrală", ambalat ca reportaj TV.
  ČNB oficial: „žádné investiční produkty nenabízí a nabízet nebude"; verifică
  întotdeauna dacă ofertantul are autorizație ČNB.
  ✅ cnb.cz/cs/cnb-news/aktuality/Upozorneni-Podvodne-video-zneuziva-podvrzene-zabery-guvernera.-Pokud-naletite-muzete-prijit-o-vsechno/.
  Crypto + „consultanți": ✅ policie.gov.cz/clanek/pozor-na-podvody-v-kyberprostoru.aspx.
  ⚠️ Deepfake-urile cu Fiala/Babiš/Pavel/prezentatoare TV — doar în media, necitabile.
- **Joburi false „task"** — „125 Kč pentru 5 like-uri/recenzii la video-uri",
  primele plăți sunt REALE (700 Kč) ca să câștige încrederea, apoi „zona VIP" cu
  depozite obligatorii — caz documentat: 315 000 Kč pierduți în 4 tranșe + presiune
  spre credite. ✅ policie.gov.cz/clanek/novy-internetovy-podvod-laka-na-snadny-vydelek.aspx.
- **Fake e-shops** — ČOI ține lista publică de „rizikové e-shopy" (fără date de
  contact ale operatorului, operatori extra-UE, val de reclamații); includerea pe
  listă = recomandare de maximă prudență. ✅ coi.gov.cz/pro-spotrebitele/rizikove-e-shopy/.
- **Sextortion** — profil fals „feminin" pe Instagram, schimb de materiale intime,
  apoi șantaj (caz documentat: minor, 1 000 €, urmat de „alt contact" care escaladează).
  Sfat poliție: NU plăti („zasíláním peněz situaci nevyřešíte – naopak"), păstrează
  dovezile, raportează fără rușine.
  ✅ policie.gov.cz/clanek/sextorze-pachatele-zneuzivaji-duveru-obeti-na-socialnich-sitich.aspx.
- **Închirieri false** — „vizionare" doar pe video la cafenea, avans cerut pe loc,
  apartamentul „se eliberează curând" — 3 cazuri/150 000 Kč într-o săptămână la Praga.
  Sfat poliție: verifică proprietarul real în **katastr nemovitostí**, cere vizionare
  fizică, acte autentificate la intermediari. ✅ policie.gov.cz/clanek/podvody-s-pronajmy-bytu.aspx.
  ⚠️ Varianta „proprietar străin + MoneyGram" — necitabilă (sursa nefetchuită), doar colorare.
- **Bilete false** — același QR/cod de bare vândut mai multor persoane („intră doar
  primul scanat"), bilete contrafăcute cu coduri nefuncționale, vânzători care
  blochează cumpărătorul după plată. Sfat oficial: DOAR vânzători oficiali.
  ✅ policie.gov.cz/clanek/nakup-vstupenek-z-druhe-ruky-je-risk.aspx.
- **Mașini second-hand** — anunț atractiv, mașina e „în străinătate / la graniță",
  se cere zálohă (caz: 3 200 EUR ≈ 80 000 Kč pentru un Opel Mokka inexistent), apoi
  vânzătorul dispare. Sfat poliție: nu plăti nimic pentru o mașină nevăzută/neverificată.
  ✅ policie.gov.cz/clanek/or-kladno-zpravodajstvi-podvod-pri-koupi-vozidla.aspx.
  ⚠️ Scam-uri specifice „Sauto" — nedocumentate în surse oficiale, nu se citează.
- **Deepfake/AI** — vezi investițiile false (guvernatorul ČNB). Campania #nePINdej!
  a inclus explicit AI în scenariile de testare: „e-šmejdi lucrează cu ea".
  ✅ nukib.gov.cz/cs/infoservis/aktuality/2002-ceska-bankovni-asociace-opet-spousti-kampan-nepindej-nove-do-ni-zapojila-i-umelou-inteligenci/,
  ✅ kybertest.cz.

## Maparea per playbook (report[] + sources[] + recognize[])

| Slug | report[] (canale) | sources[] (✅) | recognize: exemple CZ |
|---|---|---|---|
| link-sms-fals | CSIRT.CZ (formular csirt.cz/cs/hlaseni-incidentu/); banca (nr. de pe card, dacă ai introdus date); Policie (orice secție, dacă ai pierdut bani); forward: info@cpost.cz (Česká pošta) / privacy@zasilkovna.cz | ceskaposta.cz (aktualni-informace), zasilkovna.cz/bezpecnost-ochrana-dat/sms | „zásilka în vamă — 216,99 Kč", „adresă incompletă", doplatek Zásilkovna |
| cont-spart | Meta hacked / Google recovery; avertizează-ți contactele (cereri de împrumut!); Policie dacă cineva a plătit | policie.gov.cz (odkaz-na-hlasovani…) | „hlasuj pentru…" + cod SMS; contul tău cere „půjčka 35 000 Kč" prietenilor |
| teapa-cumparare-online | ČOI 222 703 404 (L+Mi 8–16) + podatelna@coi.gov.cz; Policie (secție); banca; verifică lista rizikové e-shopy ÎNAINTE | coi.gov.cz/pro-spotrebitele/rizikove-e-shopy/, policie.gov.cz (podvod-pres-inzerat-431640) | e-shop fără date de operator, preț „prea bun", doar plată în avans |
| olx-curier-fals | banca IMEDIAT (card/login compromis); CSIRT.CZ (gateway fals); Policie; privacy@zasilkovna.cz | policie.gov.cz (pozor-na-podvody-v-kyberprostoru), zasilkovna.cz (blog inzertní portály) | „kurýr ridică marfa", gateway „zasilkovna-cz.*", vânzătorul pus să-și dea cardul |
| inselatorie-telefon | Regula 3Z: închide → sună banca la nr. de pe card; 158/112; nimic pe „bezpečný účet" | policie.gov.cz (pravidlo-3z) | spoofing cu numărul real al băncii, falešný bankéř + falešný policista |
| apropiat-inselat | 158/112 imediat; banca victimei; 116 111 dacă e minor/tânăr | policie.gov.cz (seniori-nedejte-sanci-podvodnikum), linkabezpeci.cz | legenda „vnuk": accident/spital, „trimit un prieten după bani" |
| oferta-investitii-crypto | Policie (secție, cu dovezi); banca; verifică autorizația la ČNB; CSIRT.CZ (domeniu fals) | cnb.cz (deepfake guvernator), policie.gov.cz (kyberprostor) | deepfake cu guvernatorul ČNB ca „reportaj", „investiție a băncii centrale" |
| joburi-false-task | Policie; banca dacă ai plătit / ai dat date | policie.gov.cz (novy-internetovy-podvod-laka-na-snadny-vydelek) | 125 Kč pt. 5 like-uri, prima plată reală, apoi „VIP zóna" cu depozite |
| sextortion | NU plăti; păstrează dovezile; Policie (fără rușine — protejezi și alte victime); STOPonline.cz +420 910 101 010 (conținut); 116 111 (minori); platforma | policie.gov.cz (sextorze…), stoponline.cz, linkabezpeci.cz | profil fals „feminin" pe Instagram, „străina" trimite prima, șantaj 1 000 € |
| malware-ransomware | CSIRT.CZ (formular); banca (dacă banking-ul e atins); Policie; firmele/instituțiile reglementate → NÚKIB | csirt.cz/cs/hlaseni-incidentu/, nukib.gov.cz | linkuri/atașamente din smishing-ul de curierat |
| telefon-pierdut-furat | banca proprie pt. card (nr. de pe spatele cardului — NU există număr unic național); operatorul (blocare SIM); Policie; Find My/Find Hub | mzv.gov.cz (fiecare bancă propriile proceduri) | — (pași, nu recunoaștere) |
| inchirieri-cazare | Nu plăti înainte de vizionare FIZICĂ; verifică proprietarul în katastr nemovitostí; Policie; ČOI | policie.gov.cz (podvody-s-pronajmy-bytu) | „vizionare" pe video la cafenea, zálohă pe loc, apartament „ocupat încă" |
| bilete-false | Cumpără doar de la operatorul oficial; Policie; banca | policie.gov.cz (nakup-vstupenek-z-druhe-ruky-je-risk) | același QR vândut de mai multe ori — „intră primul scanat" |
| masina-second-hand | Nu da zálohă pt. mașini „din străinătate/la graniță"; vezi mașina fizic; Policie | policie.gov.cz (or-kladno …podvod-pri-koupi-vozidla) | Opel Mokka „în străinătate", avans 3 200 EUR, vânzător de negăsit |
| real-sau-ai | Nu decide pe baza video-ului — verifică la sursa oficială (ČNB nu vinde investiții); Policie la pagubă; antrenament pe kybertest.cz | cnb.cz (deepfake guvernator), kybertest.cz, policie.gov.cz (nepindej) | deepfake guvernator ČNB, „celebrități" în reportaje TV false |

Ghiduri (prevenție): aceleași surse; specific CZ de integrat: regula **3Z**
(Zastav. Zavěs. Zkontroluj.) ca reflex universal la telefoane, **kybertest.cz**
(#nePINdej! — ČBA + Policie + NÚKIB) ca antrenament practic, lista **rizikové
e-shopy** ČOI înainte de orice cumpărătură la e-shop necunoscut, verificarea
proprietarului în **katastr nemovitostí** la închirieri, domeniile oficiale:
instituțiile de stat = `.gov.cz` (policie.gov.cz, coi.gov.cz, nukib.gov.cz),
Zásilkovna = doar `zasilkovna.cz`, Česká pošta nu trimite linkuri de plată.
Context de platformă: loginul de internet banking e folosit în CZ și ca
**bankovní identita** (identitate digitală) — un login bancar furat în scam-ul
de pe Bazoš compromite mai mult decât contul bancar.

## Reguli editoriale cs

1. `report[]` și `sources[]` din frontmatter se ÎNLOCUIESC cu canalele de mai sus,
   per situație (nu se traduc cele românești).
2. Exemplele din `recognize[]` se adaptează la scam-urile documentate în Cehia
   (Česká pošta/Zásilkovna „doplatek", falešný bankéř + regula 3Z, „vnuk",
   Bazoš cu gateway fals pe vânzător etc.).
3. `lastReviewed` = data verificării country pack-ului (2026-07-10 la lansare),
   în format ceh („10. července 2026").
4. Fără glose de instituții — publicul e în Cehia, instituțiile sunt ale lui.
5. Pașii universali rămân, cu o diferență față de PL: la blocarea cardului NU
   există număr unic național — formularea corectă e „numărul de pe spatele
   cardului / aplicația băncii tale".
6. Plângerea penală NU se poate depune printr-un simplu formular online —
   nu promite „raportare online la poliție"; electronic doar cu semnătură
   electronică sau datová schránka.
