# Country pack: Slovacia (sk)

Sursa editorială pentru versiunea slovacă — **ancorată în Slovacia**: canalele,
sursele și exemplele de mai jos înlocuiesc integral echivalentele românești în
conținutul `sk`. Toate URL-urile și numerele marcate ✅ au fost verificate direct
(fetch 200 + conținut confirmat) la data verificării. Ce nu a putut fi confirmat
NU se folosește în conținut.

Verificat: 2026-07-10.

## Canale de raportare (înlocuiesc DNSC/Poliția Română/ANPC)

| Rol | Canal slovac | Detalii verificate |
|---|---|---|
| Incidente cibernetice / phishing (≈DNSC) | **SK-CERT (NBÚ)** ✅ | Raportare prin portalul JISKB — sk-cert.sk → „Nahlásiť incident" (rady-a-navody/nahlasit-incident), **inclusiv raportări de la public** („hlásenia od verejnosti"); backup: e-mail incident@nbu.gov.sk (PGP recomandat). Varovania actuale: sk-cert.sk/threat. SK-CERT funcționează sub Národný bezpečnostný úrad (NBÚ). |
| Urgențe | **112 / 158** ✅ | 158 = linia gratuită a poliției, 112 = sistemul integrat de urgență; confirmate pe gender.gov.sk/zastavmenasilie/pomoc/policia/ („na bezplatnom telefónnom čísle 158... alebo 112"). |
| Plângere penală fraudă | **Orice secție de poliție / prokuratúra / instanță** ✅ | justice.gov.sk (Trestné konanie): „Trestné oznámenie môže podať ktokoľvek, na ktorejkoľvek polícii, prokuratúre, príp. súde" — în scris, oral în proces-verbal sau electronic cu semnătură electronică calificată (slovensko.sk). Confirmarea primirii e obligatorie. |
| Educație / verificare scam-uri | **FB „Hoaxy a podvody – Ministerstvo vnútra SR"** ✅ (facebook.com/hoaxMV) | Pagina oficială anti-hoax/anti-fraudă a MV SR (fostă „Polícia SR"/hoaxPZ, mutată sub minister) — titlul paginii confirmat prin browser. + **Call Centrum MV SR: 0800 222 222** ✅ (confirmat pe minv.sk). |
| Blocare card bancar | **Banca proprie — NU există număr unic național** ✅ | Fiecare bancă are linia sa 24/7 + blocare din aplicație (banky.sk/kam-volat-ked-stratite-kartu — listă pe bănci; blocarea e gratuită). Regula editorială: „aplicația băncii sau numărul de pe spatele cardului / site-ul oficial al băncii". |
| Protecția consumatorului (≈ANPC) | **SOI — Slovenská obchodná inšpekcia** ✅ | soi.sk; podnet electronic prin slovensko.sk (Elektronická podateľňa); linia pentru produse periculoase 0850 111 937. Publică **lista „Rizikové internetové obchody"** ✅ (soi.sk/informacie-pre-verejnost/internetove-obchody/rizikove-internetove-obchody) — inclusiv viagogo.sk; lista NU e exhaustivă. |
| Fraude financiare / verificare licențe | **NBS** ✅ | nbs.sk/pozor-na-podvody — „NBS nikdy nekontaktuje spotrebiteľov"; raportează ofertele frauduloase la NBS sau poliție; verifică firmele de investiții în registrul **subjekty.nbs.sk**. |
| Conținut ilegal (CSAM/extremism) | **Stopline.sk** ✅ | Centrul național de raportare a conținutului ilegal (abuz asupra copiilor, grooming, ură rasială); formular de raportare online; membru INHOPE; parteneri: ministere + Linka detskej istoty. |
| Copii și tineri | **116 111** ✅ | Linka detskej istoty (ldi.sk/116-111): gratuit din orice rețea, nonstop 24/7/365, anonim; + chat pe ldi.sk (zilnic 18–22) și 116111@ldi.sk. |
| Recuperare conturi | facebook.com/hacked ✅, accounts.google.com/signin/recovery ✅ | Globale, neschimbate (ambele 200). |

**Neconfirmate — NU se folosesc:** policiaslovakia.sk (raportare online a plângerii penale — neconfirmat), telefoanele ECC/Európske spotrebiteľské centrum SR, numerele individuale de blocare ale băncilor (nu le publicăm — trimitem la banca proprie), paginile dinamice vechi minv.sk (`?sprava=...` redirecționează spre homepage), pagina Tatra banka „predigitalnubezpecnost" (403 la fetch).

## Peisajul de înșelătorii (verificat, surse oficiale SK)

Doar linkurile ✅ pot intra în `sources[]`. Informația din surse ⚠️ (media,
neconfirmate prin fetch) poate colora exemplele, dar NU se citează.

- **Smishing curierat** — SMS/e-mail „zásielka" în numele Slovenská pošta/Packeta:
  taxă de livrare/vamă, „completează datele", link spre clonă + formular de card.
  Reguli oficiale: pošta „nikdy nežiada platby za doručenie prostredníctvom e-mailu
  alebo SMS" — „Neklikajte, neplaťte, nahláste!" (raportare: zakaznickyservis@slposta.sk).
  ✅ posta.sk/podpora/varovania-pred-podvodmi. Packeta: expeditorul SMS-ului real e
  întotdeauna „Packeta"; codurile din SMS nu se retrimit nimănui. ✅ packeta.sk/bezpecnost-ochrana-dat/sms.
- **Valuri de smishing + deturnare WhatsApp** — SK-CERT: campanii care imită bănci,
  instituții de stat, firme de curierat; pe WhatsApp, „cunoscuți" cer vot într-un
  sondaj → scanezi un cod QR și îți asociezi contul WhatsApp cu dispozitivul
  atacatorului (acces la istoric + contacte). ✅ sk-cert.sk/sk/nova-vlna-podvodnych-kampani/ (11.4.2025).
- **Vishing bancar („falošný bankár/policajt")** — apeluri în numele băncii, poliției
  sau chiar NBS: „operațiuni suspecte", transfer urgent în „cont sigur", instalare de
  aplicații care capturează parole/PIN/SMS-uri. Mesaj oficial: NBS nu contactează
  NICIODATĂ consumatorii; poliția nu cere NICIODATĂ bani. Închide și sună banca la
  numărul oficial. ✅ nbs.sk/pozor-na-podvody/.
- **Classiscam pe Bazoš.sk/Vinted (țintește VÂNZĂTORUL)** — „cumpărător" pe WhatsApp:
  „am plătit deja, curierul e aranjat (Packeta/DPD), tu doar confirmi primirea banilor"
  + link cu logo Bazoš/pošta/Packeta și buton „Získať peniaze" care cere numărul
  cardului, CVC și soldul. Cardul servește la PLATĂ, nu la primirea banilor — pentru
  a primi bani ajunge IBAN-ul. Ancore oficiale: ✅ packeta.sk (SMS/gateway fals),
  ✅ posta.sk. Detaliile campaniilor Bazoš/Vinted: ⚠️ media (mojandroid.sk, startitup) — doar colorare.
- **„Falošný vnuk" / „falošný policajt" (seniori)** — telefon pe fix: „nepotul" a avut
  accident / „polițistul" cere să „salvezi" economiile; în T1 2026 poliția a înregistrat
  44 de fraude telefonice finalizate pe seniori, ~734.000 € pagubă. ⚠️ media (Pravda,
  info.sk) — exemplele colorează, sursa citabilă rămâne NBS ✅ („poliția nu cere bani")
  și justice.gov.sk ✅ (plângerea penală).
- **Fake e-shops** — SOI publică lista „Rizikové internetové obchody" (~30+ magazine,
  incl. viagogo.sk): marfă neexpediată, reclamații ignorate, sediu inexistent; absența
  de pe listă NU înseamnă siguranță. ✅ soi.sk (rizikové internetové obchody).
- **Investiții false + deepfake** — NBS: videouri deepfake cu personalități publice și
  branduri (SPP, Slovnaft, ČEZ) promovează platforme de investiții inexistente pe
  FB/IG/TikTok/X/YouTube; ignoră, nu te înregistra, raportează la NBS/poliție, verifică
  licența pe subjekty.nbs.sk. ✅ nbs.sk/aktuality (deepfake, 26.1.2024) +
  ✅ nbs.sk/pozor-na-podvody/. Deepfake cu Pellegrini sau cu șeful Slovenskej sporiteľne
  (P. Krutil): ⚠️ media — doar colorare.
- **Joburi false pe WhatsApp/Telegram** — task-uri mărunte plătite (like-uri, recenzii),
  „câștiguri" în dashboard fals, apoi „plătește (crypto) ca să-ți deblochezi banii";
  grupuri cu „câștigători" falși. Regulă: „Za potenciálnu prácu nikdy neplaťte peniaze
  vopred". ✅ bezpecnenanete.eset.com (ESET, falošné pracovné ponuky).
- **Sextortion** — poliția din Bratislava: după schimb de poze/video intime cu
  necunoscuți (site-uri de dating), urmează șantaj cu publicarea; nu trimite nimic,
  ignoră/blochează. ✅ teraz.sk/816880 (TASR, avertisment oficial al poliției, 20.8.2024).
  Conținut ilegal → Stopline.sk ✅; minori → 116 111 ✅.
- **Închirieri false** — caz instrumentat de poliția din Snina: bărbat de 49 de ani a
  plătit 4 avansuri = 2.880 € pentru un apartament „de închiriat" în Humenné; făptașul
  a tăiat comunicarea. Poliția: prudență la plăți către necunoscuți. ✅ teraz.sk/925306
  (TASR, 4.12.2025). Tipare: preț-momeală, „proprietar plecat în străinătate", avans
  cerut înainte de vizionare (⚠️ media — colorare).
- **Bilete false (festivaluri/concerte)** — NBÚ: vânzători falși pe rețele sociale și
  portaluri de anunțuri, preț suspect de mic, cer „doar un avans" ca să pară credibili,
  presiune de timp („mám viac záujemcov, ale ste prvý"); site-uri clonă de ticketing și
  „reselleri"; chiar și la întâlnire fizică biletul poate avea QR modificat sau e vândut
  de mai multe ori. Cumpără doar prin canale oficiale. ✅ nbu.gov.sk (falošná vstupenka, 9.7.2025).
- **Mașini second-hand** — Autobazar.sk: anunțuri cu preț foarte avantajos, vânzător
  „din străinătate, cel mai des din Marea Britanie" (nu poate înmatricula volanul pe
  stânga), comunicare doar pe e-mail, cere banii ÎN AVANS și promite livrare cu firmă de
  transport. „Nikdy neposielajte peniaze vopred!"; anunț suspect → kontakt@autobazar.sk;
  pagubă → poliția + banca. ✅ autobazar.sk/ako-sa-chranit-pred-podvodnikmi/. Caz real
  poliție: tractor pe Bazoš.sk, avans 3.800 € plătit, marfa nelivrată. ✅ minv.sk (aktuality Prešov, „podvod s traktorom").
- **Malware/infostealers** — SK-CERT (Operation ENDGAME, 8.7.2026): infostealer-ul
  StealC a afectat ~400 de slovaci; varovania actuale pe sk-cert.sk/threat. ✅ sk-cert.sk.

## Maparea per playbook (report[] + sources[] + recognize[])

| Slug | report[] (canale) | sources[] (✅) | recognize: exemple SK |
|---|---|---|---|
| link-sms-fals | SK-CERT (JISKB / incident@nbu.gov.sk, cu linkul exact); banca proprie imediat (app / nr. de pe card, dacă ai introdus date); Polícia (plângere la orice secție, dacă ai pierdut bani) | sk-cert.sk (nová vlna podvodných kampaní), posta.sk (varovania pred podvodmi), packeta.sk (SMS) | „zásielka" Slovenská pošta/Packeta cu taxă + link, SMS „banca ta", expeditor ≠ „Packeta" |
| cont-spart | Meta hacked / Google recovery; SK-CERT; avertizează-ți contactele (WhatsApp deturnat cere bani/coduri) | facebook.com/hacked, accounts.google.com/signin/recovery, sk-cert.sk (nová vlna — QR pairing WhatsApp) | „prietenul" cere vot în sondaj + cod QR → WhatsApp asociat atacatorului |
| teapa-cumparare-online | SOI (podnet electronic via slovensko.sk); Polícia (orice secție); SK-CERT (site fals) | soi.sk (rizikové internetové obchody), soi.sk | e-shop „totul redus", pe lista SOI (incl. viagogo.sk), sediu inexistent, reclamații ignorate |
| olx-curier-fals | SK-CERT (gateway fals); banca IMEDIAT (date de card introduse); Polícia | packeta.sk (SMS/gateway), posta.sk | „am plătit, curierul e aranjat" pe WhatsApp + buton „Získať peniaze" care cere nr. de card + CVC |
| inselatorie-telefon | Închide → sună banca la nr. de pe card; Polícia 158/112; NBS (raportare oferte/apeluri în numele ei) | nbs.sk/pozor-na-podvody/, gender.gov.sk (158/112) | falošný bankár/policajt, „cont sigur", NBS „te sună" (nu sună niciodată), aplicații de acces la distanță |
| apropiat-inselat | Polícia 158/112 imediat; banca victimei; 116 111 dacă e minor | gender.gov.sk (158/112), justice.gov.sk (trestné oznámenie), ldi.sk | „vnuk" cu accident pe telefonul fix, „polițist" care „salvează" economiile |
| oferta-investitii-crypto | Polícia (plângere cu dovezi); NBS (raportare + verifică subjekty.nbs.sk); SK-CERT (domeniu fals) | nbs.sk/aktuality (deepfake), nbs.sk/pozor-na-podvody/ | deepfake SPP/Slovnaft/ČEZ ca reclame de investiții, „consultant" telefonic, profituri fictive |
| joburi-false-task | Polícia; SK-CERT; banca dacă ai plătit | bezpecnenanete.eset.com (falošné pracovné ponuky), sk-cert.sk (nová vlna) | recruiter pe WhatsApp/Telegram, task-uri mărunte plătite, „plătește ca să retragi câștigul" |
| sextortion | NU plăti; Polícia (plângere penală); Stopline.sk (conținut ilegal); 116 111 (minori); platforma | teraz.sk/816880 (avertisment poliție via TASR), stopline.sk, ldi.sk | „necunoscuta" trimite prima poze, video-chat înregistrat, șantaj cu publicarea |
| malware-ransomware | SK-CERT (JISKB / incident@nbu.gov.sk); banca (dacă banking-ul e atins); Polícia | sk-cert.sk (Operation ENDGAME/StealC), sk-cert.sk (nahlásiť incident) | infostealer StealC (~400 de victime SK), atașamente/linkuri din smishing |
| telefon-pierdut-furat | Banca proprie: blocare card din aplicație sau la linia băncii (NU există număr unic național); operatorul (blocare SIM); Polícia (la furt); Find My/Find Hub; recuperare conturi | banky.sk (kam volať pri strate karty), facebook.com/hacked, accounts.google.com/signin/recovery | — (pași, nu recunoaștere) |
| inchirieri-cazare | Nu plăti nimic înainte de vizionare + contract; Polícia; banca (recall la transfer recent) | teraz.sk/925306 (caz poliția Snina via TASR), justice.gov.sk | avansuri repetate pentru apartament nevăzut (2.880 € în cazul Snina), „proprietar plecat în străinătate" |
| bilete-false | Cumpără doar de la operatorul oficial; Polícia; banca | nbu.gov.sk (falošná vstupenka), soi.sk (viagogo.sk pe lista rizikové) | preț suspect de mic, „doar un avans", „mám viac záujemcov", QR modificat, site clonă de ticketing |
| masina-second-hand | Nu trimite avans pentru mașini „din străinătate"; anunț suspect → kontakt@autobazar.sk; Polícia; banca | autobazar.sk (ako sa chrániť pred podvodníkmi), minv.sk (podvod s traktorom) | mașina „e în Marea Britanie" (volan pe stânga), plată în avans + „transportator", tractor Bazoš 3.800 € |
| real-sau-ai | Nu decide pe baza video-ului — verifică sursa oficială; NBS (oferte de investiții); urmărește demontările de pe „Hoaxy a podvody" | nbs.sk/aktuality (deepfake), facebook.com/hoaxMV | deepfake cu branduri energetice (SPP/Slovnaft/ČEZ) și figuri publice, ambalat ca știri/reclame |

Ghiduri (prevenție): aceleași surse; specific SK de integrat: verificarea firmelor de
investiții pe subjekty.nbs.sk, lista SOI de e-shopuri riscante (cu disclaimerul că nu e
exhaustivă), varovania SK-CERT (sk-cert.sk/threat), regula poștei „Neklikajte, neplaťte,
nahláste!", expeditorul SMS real „Packeta", gov.sk = domeniul instituțiilor de stat
(banner oficial „Doména gov.sk je oficiálna"), cardul servește la plată — pentru a primi
bani ajunge IBAN-ul, căutarea recenziilor: „[nume e-shop] + podvod / skúsenosti".

## Reguli editoriale sk

1. `report[]` și `sources[]` din frontmatter se ÎNLOCUIESC cu canalele de mai sus,
   per situație (nu se traduc cele românești).
2. Exemplele din `recognize[]` se adaptează la scam-urile documentate în Slovacia
   (Slovenská pošta/Packeta „zásielka", classiscam Bazoš/Vinted, „falošný vnuk"/
   „falošný policajt", deepfake SPP/Slovnaft, Autobazar.sk „mașina din UK" etc.).
3. `lastReviewed` = data verificării country pack-ului (2026-07-10 la lansare),
   în format slovac („10. júla 2026").
4. Fără glose de instituții — publicul e în Slovacia, instituțiile sunt ale lui.
5. Pașii universali rămân; la blocarea cardului NU inventăm un număr unic (nu există
   în Slovacia) — „aplicația băncii sau numărul de pe spatele cardului"; nu publicăm
   numerele individuale ale băncilor.
6. Pagina FB „Hoaxy a podvody" se citează ca „Hoaxy a podvody – Ministerstvo vnútra SR"
   (facebook.com/hoaxMV) — numele vechi „Polícia SR" nu se mai folosește.
