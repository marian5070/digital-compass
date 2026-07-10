# Country pack: Polonia (pl)

Sursa editorială pentru versiunea poloneză — **ancorată în Polonia**: canalele,
sursele și exemplele de mai jos înlocuiesc integral echivalentele românești în
conținutul `pl`. Toate URL-urile și numerele marcate ✅ au fost verificate direct
(fetch 200 + conținut confirmat) la data verificării. Ce nu a putut fi confirmat
NU se folosește în conținut.

Verificat: 2026-07-10.

## Canale de raportare (înlocuiesc DNSC/Poliția Română/ANPC)

| Rol | Canal polonez | Detalii verificate |
|---|---|---|
| Incidente cibernetice / phishing (≈DNSC) | **CERT Polska** ✅ | Formular: incydent.cert.pl (phishing: incydent.cert.pl/phishing). **SMS suspect → forward gratuit la 8080** (CSIRT NASK). Lista ostrzeżeń: cert.pl/lista-ostrzezen/ — operatorii Orange/Plus/Play/T-Mobile blochează automat domeniile listate. |
| Urgențe | **112** ✅ | gov.pl/web/numer-alarmowy-112; 997 rutat tot la 112. |
| Plângere penală fraudă | **Policja — orice komisariat, în persoană** ✅ | NU există depunere online a plângerii penale. CBZC (cbzc.policja.gov.pl) investighează, dar poarta de intrare e comisariatul. Ghid oficial: cbzc.policja.gov.pl → „Zgłoś cyberoszustwo". |
| Blocare card bancar | **System Zastrzegania Kart: +48 828 828 828** ✅ | zastrzegam.pl — gratuit, 24/7, inter-bancar (un număr pentru toate băncile; ZBP+NBP). |
| Furt de identitate / credite frauduloase | **Zastrzeż PESEL** ✅ | gov.pl (mObywatel / profil zaufany / urząd gminy), gratuit, efect imediat; din 1 iun 2024 instituțiile financiare sunt OBLIGATE să verifice blocarea înainte de credit. |
| Protecția consumatorului (≈ANPC) | **UOKiK: 801 440 220 / 22 266 76 76** ✅ | L–V 10–18, gratuit; + rzecznicy konsumentów (powiat). Dispute UE transfrontaliere: ECC Polska (konsument.gov.pl) — ⚠️ telefonul ECC neconfirmat, nu-l publica. |
| Conținut ilegal (sextortion/CSAM) | **Dyżurnet.pl: 801 615 005** ✅ | NASK; formular anonim pe dyzurnet.pl; confirmat pe gov.pl. |
| Copii și tineri | **116 111** ✅ | Telefon Zaufania dla Dzieci i Młodzieży (Fundacja Dajemy Dzieciom Siłę), 24/7, confidențial, + chat online (116111.pl). |
| Alerte credite | **Alerty BIK** ✅ | bik.pl — SMS la tentative de credit pe datele tale; SERVICIU PLĂTIT 48 zł/an (menționăm onest prețul). |
| Recuperare conturi | facebook.com/hacked ✅, accounts.google.com/signin/recovery ✅ | Globale, neschimbate. |

**Neconfirmate — NU se folosesc:** cert@cert.pl, kontakt.cbzc@…, telefonul/e-mailul ECC Polska.

## Peisajul de înșelătorii (verificat, surse oficiale PL)

Doar linkurile ✅ pot intra în `sources[]`. Informația din surse ⚠️ (media,
neconfirmate prin fetch) poate colora exemplele, dar NU se citează.

- **Smishing curierat** — „dopłata do paczki" InPost/Poczta Polska: SMS cu link
  spre clonă de curier + plată falsă. ✅ gov.pl/web/baza-wiedzy (avertisment CSIRT NASK, campania „na przesyłkę").
- **Facturi false PGE** — „zaplanowano odłączenie energii... uregulowanie zadłużenia" + link.
  Regulă: PGE reală are nr. de client și NU pune link de plată. ✅ policja.pl/pol/aktualnosci/216111.
- **SMS fals mObywatel** — „nowa wiadomość, zaloguj się" → domeniu fals. ✅ gov.pl/web/baza-wiedzy (fałszywe SMS mObywatel). mObywatel real: doar din App Store/Google Play, fără funcții de „câștig". ✅ gov.pl/web/cyfryzacja.
- **Coduri BLIK pe Messenger** — cont de prieten spart cere „kod BLIK" (împrumut urgent);
  codul = retragere instant la bancomat. Control-cheie: ecranul de confirmare din aplicație
  arată TIPUL operațiunii („wypłata z bankomatu") + suma. ✅ blik.com (articol oficial „na znajomego z Facebooka").
- **Classiscam pe OLX/Allegro Lokalnie/Vinted (țintește VÂNZĂTORUL)** — „cumpărător" mută pe
  WhatsApp, „am plătit, tu doar încasezi" + link spre fals gateway OLX/InPost cu pagini
  clonate de bănci. Pe OLX nu există NICIO procedură care cere login bancar ca să primești bani.
  ✅ cert.pl/posts/2022/04/classiscam/. Vinted + cod QR fals (CSIRT KNF): ✅ cyberdefence24.pl.
- **„Na wnuczka" / „na policjanta"** — telefon: „nepoata a provocat un accident, trebuie bani";
  falși polițiști. Mesaj oficial: poliția nu cere NICIODATĂ bani. ✅ policja.pl/pol/aktualnosci/208885.
- **Spoofing bancar** — pe ecran apare numărul REAL al băncii; „consultantul" cere login/BLIK/
  acces la distanță. Sfat oficial: închide, așteaptă 30 sec, sună numărul de pe card.
  ✅ policja.pl/pol/aktualnosci/225969.
- **Fake shops** — CERT: tot site-ul „redus", fără ramburs, telefon de neverificat, recenzii în masă,
  „lacătul HTTPS nu e garanție". ✅ cert.pl/falszywe-sklepy/. UOKiK: branduri „poloneze" inventate,
  reduceri fără prețul minim din 30 zile. ✅ uokik.gov.pl (zakupy wysokiego ryzyka).
- **Investiții false** — CERT: reclame + „consultant" telefonic + AnyDesk + profituri fictive +
  recovery scam. ✅ cert.pl/falszywe-inwestycje/. Deepfake cu Duda, Brzoska (InPost), Lewandowski,
  Leszczyna, „Budda", ca știri TV false. ✅ nask.pl/magazyn (NASK ostrzega deepfake).
- **Joburi false** — recruiter pe WhatsApp, task-uri mici plătite → „investiții"/acces bancar.
  ✅ tychy.policja.gov.pl/k27/prewencja/dla-internautow/386803.
- **Sextortion** — „străina" trimite prima, video-chat înregistrat, șantaj. Nu plăti, păstrează
  dovezi, poliție + platformă. ✅ malopolska.policja.gov.pl (sekstorsja). Conținut ilegal: Dyżurnet 801 615 005.
- **Închirieri false** — preț-momeală, „proprietar din UK", fals escrow, „cheile prin DHL", depozit
  în 24h. ✅ niebezpiecznik.pl (przekręt na mieszkanie OLX/Gratka/Otodom).
- **Bilete false** — site-uri clonă de ticketing, reclame FB, „doar BLIK funcționează".
  ✅ dolnoslaska.policja.gov.pl/wr1/aktualnosci/biezace-inf/157782.
- **OtoMoto** — (cumpărător) „mașina e în Anglia, dați zaliczka"; (vânzător) fals „Otomoto Security
  Team" cere „verificare" cu login BANCAR. ✅ cert.orange.pl/aktualnosci/oszustwo-na-security-otomoto/.
- **Deepfake/AI** — lip-sync pe voci reale, ambalat ca știri TV. ✅ nask.pl/magazyn.
- **QR false** — parcometre/parbrize, fake CAPTCHA cu malware. ✅ cert.pl/posts/2025/04/przeglad-kampanii-2024/.

## Maparea per playbook (report[] + sources[] + recognize[])

| Slug | report[] (canale) | sources[] (✅) | recognize: exemple PL |
|---|---|---|---|
| link-sms-fals | CERT Polska (incydent.cert.pl + **SMS→8080**); banca (nr. de pe card / 828 828 828 la card compromis); Policja (komisariat, dacă ai pierdut bani) | cert.pl/lista-ostrzezen/, gov.pl (przesyłka), policja.pl/216111 | „dopłata do paczki" InPost, factura PGE, SMS mObywatel |
| cont-spart | Meta hacked / Google recovery; CERT Polska; avertizează-ți contactele (BLIK!) | blik.com (znajomy z FB), cert.pl | contul tău cere coduri BLIK prietenilor |
| teapa-cumparare-online | UOKiK 801 440 220 + rzecznik; Policja (komisariat); CERT (site fals → incydent.cert.pl) | cert.pl/falszywe-sklepy/, uokik.gov.pl | fake shops, „doar BLIK merge", branduri PL inventate |
| olx-curier-fals | CERT Polska (gateway fals); banca imediat (login compromis → 828 828 828); Policja | cert.pl/classiscam | „am plătit, încasezi tu" + WhatsApp + gateway fals |
| inselatorie-telefon | Închide → 30 sec → banca la nr. de pe card; Policja/112; CERT | policja.pl/225969, policja.pl/208885 | spoofing bancar, na policjanta |
| apropiat-inselat | Policja/112 imediat; banca victimei; 116 111 dacă e minor | policja.pl/208885, 116111.pl | na wnuczka (accident fals, taximetriști-curieri) |
| oferta-investitii-crypto | Policja (komisariat, cu dovezi); CERT (domeniu fals); banca | cert.pl/falszywe-inwestycje/, nask.pl (deepfake) | deepfake Duda/Brzoska/Lewandowski ca știri TV |
| joburi-false-task | Policja; CERT; banca dacă ai plătit | tychy.policja.gov.pl/386803 | recruiter WhatsApp, task-uri mici plătite |
| sextortion | NU plăti; Policja (art. 191a KK — până la 5 ani pt. făptaș); Dyżurnet 801 615 005; 116 111 (minori); platforma | malopolska.policja.gov.pl, dyzurnet.pl, 116111.pl | „străina" trimite prima, video înregistrat |
| malware-ransomware | CERT Polska (incydent.cert.pl); banca (dacă banking atins); Policja | cert.pl (przegląd kampanii — fake CAPTCHA) | fake CAPTCHA, QR parcare |
| telefon-pierdut-furat | 828 828 828 (carduri, toate băncile); **Zastrzeż PESEL** (mObywatel/gov.pl); operatorul (SIM); Policja; Find My/Find Hub | zastrzegam.pl, gov.pl (PESEL) | — (pași, nu recunoaștere) |
| inchirieri-cazare | Nu plăti înainte de vizionare; Policja; UOKiK | niebezpiecznik.pl (przekręt na mieszkanie) | „proprietar din UK", escrow fals, chei prin DHL |
| bilete-false | Cumpără doar de la operatorul oficial; Policja; banca | dolnoslaska.policja.gov.pl/157782 | clone ticketing, doar BLIK, reclame FB |
| masina-second-hand | Nu da zaliczka pt. mașini „din străinătate"; Policja; CERT (fals Security Team) | cert.orange.pl (Otomoto) | mașina „în Anglia", fals Otomoto Security Team |
| real-sau-ai | CERT (raportare reclame false); nu decide pe baza video-ului — verifică sursa oficială | nask.pl (deepfake) | lip-sync celebrități PL, știri TV false |

Ghiduri (prevenție): aceleași surse; specific PL de integrat: BLIK (cod 6 cifre,
~2 min, confirmare în aplicație — citește TIPUL operațiunii), lista ostrzeżeń
CERT (verificarea linkurilor), Alerty BIK (48 zł/an — preț menționat onest),
mObywatel doar din magazinele oficiale, gov.pl = domeniul instituțiilor de stat,
căutarea recenziilor: „[nume magazin] + oszustwo / opinie".

## Reguli editoriale pl

1. `report[]` și `sources[]` din frontmatter se ÎNLOCUIESC cu canalele de mai sus,
   per situație (nu se traduc cele românești).
2. Exemplele din `recognize[]` se adaptează la scam-urile documentate în Polonia
   (InPost/„dopłata do paczki", coduri BLIK pe Messenger, „na wnuczka"/„na
   policjanta", Allegro/OLX.pl/Vinted etc.).
3. `lastReviewed` = data verificării country pack-ului (2026-07-10 la lansare),
   în format polonez („10 lipca 2026").
4. Fără glose de instituții — publicul e în Polonia, instituțiile sunt ale lui.
5. Pașii universali rămân (blocarea cardului → numărul unic 828 828 828 în loc
   de „numărul de pe spatele cardului" acolo unde e mai puternic; ambele valid).
