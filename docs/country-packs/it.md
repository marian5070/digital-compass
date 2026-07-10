# Country pack: Italia (it)

Sursa editorială pentru versiunea italiană — **ancorată în Italia**: canalele,
sursele și exemplele de mai jos înlocuiesc integral echivalentele românești în
conținutul `it`. Toate URL-urile și numerele marcate ✅ au fost verificate direct
(fetch 200 + conținut confirmat) la data verificării. Ce nu a putut fi confirmat
NU se folosește în conținut.

Verificat: 2026-07-10.

## Canale de raportare (înlocuiesc DNSC/Poliția Română/ANPC)

| Rol | Canal italian | Detalii verificate |
|---|---|---|
| Raportare online criminalitate informatică (≈DNSC + poliție) | **Polizia Postale — Commissariato di P.S. Online** ✅ | commissariatodips.it. **„Segnala online"** (commissariatodips.it/segnalazioni/segnala-online/): fără SPID, doar e-mail obligatoriu; categorii: phishing, pedofilie, social network, bullismo, defacement etc. Site-ul precizează explicit: segnalarea „NON sostituisce in alcun modo il servizio di pronto intervento" — pentru urgențe 112/113. |
| Denuncia (plângere penală) | **denunceonline.poliziadistato.it** ✅ (funcționare confirmată pe commissariatodips.it; portalul însuși blochează accesul automat) | Login cu **SPID sau CIE**. Două servicii: (1) **pre-denuncia pentru reati telematici** — completezi online, dar o **finalizezi cu semnătură la ufficio di polizia în 48h** (programare pe aceeași platformă; serviciu în extindere, pornit experimental din Lazio); (2) **segnalazione furto/smarrimento** (telefon, documente, carduri) — **complet online**, „verbale protocollato entro 96 ore" în zona personală, activ în toată Italia. Alternativa mereu validă: orice questura/comisariat sau stazione Carabinieri, în persoană. |
| Incidente cibernetice naționale / alerte | **CSIRT Italia (ACN)** ✅ | acn.gov.it/portale/csirt-italia — echipa Agenzia per la Cybersicurezza Nazionale; formular „Segnala un incidente informatico": segnalazioni.acn.gov.it. Publică alerte de campanii active (ex. smishing Poste Italiane). Pentru cetățeanul obișnuit, poarta principală rămâne Polizia Postale. |
| Urgențe | **112 (NUE)** ✅ | prefettura.interno.gov.it (pagini NUE 112): gratuit, de pe fix sau mobil, **inclusiv fără SIM, fără credit sau cu telefon blocat**; Centrale Unica di Risposta care confluează 112/113/115/118 și rutează spre Polizia/Carabinieri/pompieri/ambulanță. |
| Blocare card bancar | **NU există număr unic național.** Poste Italiane (PostePay/BancoPosta): **800.00.33.22** (din Italia), **+39.02.82.44.33.33** (din străinătate), 24/7 ✅ (poste.it). Nexi: blocare **din App Nexi Pay / Area Personale nexi.it** ✅ (numărul verde Nexi ⚠️ — neconfirmat pe pagină oficială, nu-l publica). | Regula editorială: „sună numărul de pe spatele cardului / blochează din aplicația băncii"; numerele Poste se dau explicit (cea mai răspândită carta prepagată din Italia). |
| Phishing pe teme Poste | **antiphishing@posteitaliane.it** ✅ + tel. 06 4526 3322 (lun–sâm 8–20) ✅ | poste.it/sicurezza-online/guide-per-operare-in-sicurezza/come-difendersi-dalle-truffe — Poste/PostePay **nu cer niciodată** credențiale, PIN, OTP, date card, pe niciun canal. |
| Protecția consumatorului (≈ANPC) | **ECC-Net Italia (Centro Europeo Consumatori)** ✅ pentru dispute transfrontaliere UE: ecc-netitalia.it, info@ecc-netitalia.it, +39 06 44238090 | AGCM (agcm.it) e autoritatea pentru pratiche commerciali scorrette, dar site-ul ⚠️ (fetch 403, neconfirmat) — nu publica URL/telefon AGCM până la confirmare. |
| Investiții / intermediari neautorizați | **Consob** ✅ | consob.it → „Occhio alle truffe!": verifici intermediarul în registrele Consob/Banca d'Italia; secțiunea „Società non autorizzate ad operare — avvisi ai risparmiatori" (black-list actualizată). Abuzivismul financiar e infracțiune (până la 8 ani). |
| Copii și adolescenți | **Telefono Azzurro 1.96.96** ✅ (24/7, gratuit, + chat pe azzurro.it + WhatsApp +39 347 0705336) | azzurro.it. **114 Emergenza Infanzia** ✅ — urgențe care implică minori + raportare conținut ilegal. 116000 = minori dispăruți. |
| Conținut ilegal (CSAM/sextortion cu minori) | **114** + formularul „Segnala online" al Poliziei Postale (categoria pedofilia) ✅ | azzurro.it + commissariatodips.it. |
| Vârstnici / truffe la ușă și la telefon | **Carabinieri — „Contro le truffe"** ✅ | carabinieri.it/in-vostro-aiuto/consigli/pillole-di-prevenzione/contro-le-truffe: finto carabiniere, finto nipote; „forțele de ordine nu cer NICIODATĂ bani"; la orice suspiciune → 112. |
| Recuperare conturi | accounts.google.com/signin/recovery ✅; facebook.com/hacked ✅ (global, verificat în pl.md la aceeași dată; fetch direct servește doar shell JS) | Globale, neschimbate. |

**Neconfirmate — NU se folosesc:** numărul verde Nexi 800.15.16.16 (doar surse
terțe; pe nexi.it confirmată doar blocarea din app/Area Personale), site-ul și
telefonul AGCM (403 la fetch), numărul Poste 803 160 (sursă terță, veche).

## Peisajul de înșelătorii (verificat, surse oficiale IT)

Doar linkurile ✅ pot intra în `sources[]`. Informația din surse ⚠️ (media,
neconfirmate prin fetch) poate colora exemplele, dar NU se citează.

- **Smishing Poste Italiane/BancoPosta** — masiv în Italia: SMS „evită blocarea
  cardului" + link spre clonă Poste care fură credențiale și date de card.
  ✅ acn.gov.it/portale/w/campagna-di-smishing-a-tema-poste-italiane (CSIRT, cu
  domeniul fals documentat). Regula Poste: nu cere NICIODATĂ date pe SMS/e-mail/telefon.
  ✅ poste.it (come difendersi dalle truffe).
- **SMS „il tuo pacco sta arrivando"** — pachet „în giacenza", acționează în 48h,
  link fără HTTPS spre site clonă care cere „taxă de deblocare" + date de card;
  uneori mesajul intră în firul legitim al curierului. Verifici doar în aplicația
  oficială a curierului (Poste/BRT/DHL), tastând tu adresa.
  ✅ commissariatodips.it (truffa-sms-il-tuo-pacco-sta-arrivando).
- **„Falso operatore bancario" + spoofing** — după un phishing/smishing pregătitor,
  „operatorul antifraudă" al băncii/Poste sună de pe **numărul real al băncii**
  (VoIP spoofing), anunță „accese anomale" și te convinge să muți banii pe un
  „conto sicuro" — al escrocului; îți interzice să vorbești cu angajații și stă
  cu tine la telefon. Mesaj oficial: **niciun operator bancar/poștal și niciun
  polițist nu-ți cere vreodată să muți bani pe alte conturi.**
  ✅ commissariatodips.it (attenzione-alle-truffe-di-falsi-operatori-di-banche-o-di-poste-italiane),
  ✅ poliziadistato.it (la-polizia-postale-informa--attenzione-alle-truffe-tramite-spoofing) —
  la dubii: închide și sună tu banca / 112-113.
- **SMS fals INPS + identități digitale false (SPID)** — „actualizează-ți datele"
  → site clonă INPS care cere document de identitate, selfie cu documentul, IBAN.
  Cu documentele furate se deschid **SPID-uri paralele valide pe același codice
  fiscale** (la alți identity provider), cu care escrocii intră în portalurile
  statului și deturnează rambursări/IBAN-uri. Regula oficială: **SMS-urile INPS
  nu conțin niciodată linkuri**; intri doar pe inps.it.
  ✅ commissariatodips.it (sms-truffa-provenienti-da-un-falso-mittente-inps;
  nuova-campagna-di-smishing-documenti-rubati-e-false-identita-digitali).
- **Truffe la vânzări online (țintesc VÂNZĂTORUL)** — pe Subito.it/Vinted/Facebook
  Marketplace: falsul cumpărător te trimite „la bancomat ca să primești plata",
  cere ~100 € „costuri de asigurare" sau anunță un transfer „blocat pentru
  verificări" care se deblochează cu încă 250 €; amenință cu acțiuni legale dacă
  refuzi. Nicio plată legitimă nu se „primește" la bancomat.
  ✅ commissariatodips.it (attenzione-alle-truffe-sulle-vendite-online).
- **Fake shops / oferte-momeală** — site-uri întregi „reduse", prețuri irealiste;
  Poste listează „acquisti online" printre fraudele principale + truffa
  „cont în pericol" și truffa romantică. ✅ poste.it (come difendersi dalle truffe).
- **Falso trading online / investiții crypto** — contact pe social/telefon,
  „broker" insistent, sumă mică la început, randamente fictive care „cresc",
  apoi „taxe de deblocare" ca să-ți scoți banii — care nu se mai întorc.
  **Deepfake-uri cu personaje publice italiene**: video generate cu AI în care
  „amministratori delegati, politici, personalități" recomandă investiții pe
  care nu le-au recomandat niciodată. Caz documentat: 473 de site-uri/conturi/
  reclame sechestrate — foloseau abuziv marca ENI și imaginea CEO-ului său în
  video deepfake. Verificare: consob.it (registre + avvisi ai risparmiatori).
  ✅ poliziadistato.it (falso-trading-online--i-consigli-della-polizia-postale),
  ✅ poliziadistato.it/articolo/311766b37ed0b4523327926501 (sechestrul celor 473),
  ✅ consob.it (Occhio alle truffe).
- **„Finto carabiniere" / „finto nipote"** (vârstnici) — telefon: „ruda ta a
  provocat un accident / a fost arestată, plătește ca s-o eliberezi" (numerar
  sau bijuterii, ridicate la domiciliu de un fals carabinier); sau „ghici cine
  sunt!" — falsul nepot cere bani urgent. Reguli oficiale: nu deschide ușa
  necunoscuților, nu te încrede doar în legitimație, forțele de ordine nu cer
  NICIODATĂ bani; sună 112 fără ezitare.
  ✅ carabinieri.it (contro le truffe).
- **Job scams** — „activitate comodă de acasă", recenzii plătite, like-uri
  recompensate; semnale: anunț fără informații clare, câștiguri mari promise,
  **cereri de bani anticipate** (materiale, dosar, cursuri), lipsa unui contract
  scris. ✅ commissariatodips.it (job-scams-come-riconoscere-le-false-proposte-di-lavoro).
- **Sextortion** — val de e-mailuri „ți-am monitorizat webcam-ul, plătește în
  criptomonede altfel public materialul": în majoritatea cazurilor **nu există
  niciun material și niciun acces** — nu răspunzi, nu plătești, schimbi parolele.
  Fenomen real pe social (cu material real): Polizia Postale investighează și
  identifică autorii. ✅ commissariatodips.it (alert-email-di-sextortion-con-ricatto-in-criptovalute-1).
- **Case vacanza fantasma** — anunț cu poze frumoase, preț convenabil,
  „disponibilitate imediată", presiune pe caparra/acconto rapid; casa nu există
  sau nu e a lor. Reguli oficiale: cere cât mai multe date despre proprietar,
  caută anunțul/pozele pe motor de căutare, **rămâi pe platforma oficială**
  (nu muta discuția pe messenger extern), nu plăti în avans fără verificare.
  ✅ commissariatodips.it (calendario-dellavvento-cyber-attenzione-alle-truffe-case-vacanza).
- **Bilete false** — site-uri care vând bilete inexistente la concerte epuizate;
  biletele „nu sunt valabile sau nu sunt livrate niciodată". Cumpără doar din
  canalele oficiale/punctele autorizate (verificate pe site-ul artistului);
  pentru revânzare, doar platforme oficiale cu garanții.
  ✅ commissariatodips.it (attenzione-alla-falsa-vendita-di-biglietti).
- **Auto între privați — „truffa del falso acquirente"** — „cumpărătorul" acceptă
  prețul fără să negocieze, nu poate veni să vadă mașina, dar cere o **visura
  a vehiculului plătită de tine** pe un link primit de la el (câteva zeci de
  euro); dispare cu banii și cu datele tale. Reguli: orice cerere de bani „ca
  garanție a cumpărării" e truffa; visure doar prin canalele oficiale ACI.
  ✅ poliziadistato.it (vendite-auto-tra-privati--truffa-del-falso-acquirente).
- **Deepfake/AI** — video sintetice cu figuri publice și mărci italiene (cazul
  ENI + CEO) ambalate ca reclame/știri de investiții; nu decide pe baza
  video-ului — verifică sursa oficială și registrele Consob.
  ✅ poliziadistato.it (falso trading + sechestrul 473).

## Maparea per playbook (report[] + sources[] + recognize[])

| Slug | report[] (canale) | sources[] (✅) | recognize: exemple IT |
|---|---|---|---|
| link-sms-fals | Polizia Postale — Segnala online (commissariatodips.it); tema Poste → antiphishing@posteitaliane.it; banca la numărul oficial (Poste: 800.00.33.22) | acn.gov.it (smishing Poste), commissariatodips.it (pacco), poste.it (truffe) | SMS „PosteInfo: carta bloccata", „il tuo pacco sta arrivando", SMS INPS cu link |
| cont-spart | Google recovery / facebook.com/hacked; Segnala online; avertizează-ți contactele | commissariatodips.it (frodi-online-phishing-smishing-vishing) | contul tău cere bani/coduri prietenilor pe Messenger/WhatsApp |
| teapa-cumparare-online | Polizia Postale (Segnala online + denuncia); banca (chargeback); vânzător din altă țară UE → ECC-Net Italia | commissariatodips.it (vendite online), poste.it (truffe) | fake shops, prețuri irealiste, magazin care cere doar bonifico |
| olx-curier-fals | Polizia Postale; banca imediat (dacă ai introdus date de card) | commissariatodips.it (attenzione-alle-truffe-sulle-vendite-online) | pe Subito/Vinted/FB Marketplace: „vino la bancomat să primești plata", 100 € „asigurare", transfer „blocat" + 250 € |
| inselatorie-telefon | Închide → sună TU banca la numărul de pe card; 112; Segnala online | poliziadistato.it (spoofing), commissariatodips.it (falsi operatori) | „falso operatore bancario" de pe numărul REAL al băncii, „conto sicuro" |
| apropiat-inselat | 112 imediat; banca victimei; denuncia la Carabinieri/Polizia; minor implicat → Telefono Azzurro 1.96.96 | carabinieri.it (contro le truffe), azzurro.it | „finto carabiniere" cu accidentul rudei, „finto nipote" — „ghici cine sunt!" |
| oferta-investitii-crypto | Denuncia rapid la Polizia Postale (blocarea internațională a fondurilor); verifică pe consob.it; banca | poliziadistato.it (falso trading; sechestrul 473), consob.it (Occhio alle truffe) | deepfake cu marca ENI și CEO-ul său, „broker" la telefon, „taxă de deblocare" |
| joburi-false-task | Polizia Postale; banca dacă ai plătit | commissariatodips.it (job scams) | recenzii/like-uri plătite, cereri de bani pentru „dosar" sau „curs", fără contract |
| sextortion | NU plăti; Segnala online / denuncia; minori → 114 + Telefono Azzurro 1.96.96; platforma | commissariatodips.it (sextortion), azzurro.it | e-mail „ți-am filmat webcam-ul, plătește în Bitcoin"; șantaj după video-chat |
| malware-ransomware | Polizia Postale; CSIRT Italia (segnalazioni.acn.gov.it); banca dacă banking-ul e atins | acn.gov.it (CSIRT), commissariatodips.it (pacco — pași post-click) | link „pacco" → schimbă TOATE parolele, anunță contactele |
| telefon-pierdut-furat | Blocare carduri (Poste 800.00.33.22 / aplicația băncii, ex. Nexi Pay); **segnalazione smarrimento complet online pe denunceonline.poliziadistato.it (SPID/CIE, verbale în 96h)**; operatorul (SIM); Find My/Find Hub | commissariatodips.it (denuncia-per-furto-o-smarrimento), poste.it (furto e smarrimento carta) | — (pași, nu recunoaștere) |
| inchirieri-cazare | Nu plăti caparra fără verificare; rămâi pe platforma oficială; Polizia Postale | commissariatodips.it (truffe case vacanza) | casa fantasma, preț-momeală, presiune „plătește azi ca să blochezi oferta" |
| bilete-false | Cumpără doar din canale oficiale (verificate pe site-ul artistului); Polizia Postale; banca | commissariatodips.it (falsa vendita di biglietti) | site-uri clonă la concerte sold-out, bilete nelivrate/nevalide |
| masina-second-hand | Nu plăti „visura" cerută de cumpărător — visure doar prin ACI; Polizia Postale | poliziadistato.it (vendite auto — falso acquirente) | acceptă prețul fără negociere, „nu pot veni", link de plată pentru visura |
| real-sau-ai | Nu decide pe baza video-ului — verifică sursa oficială; investiții → consob.it; Segnala online | poliziadistato.it (falso trading + sechestrul 473) | deepfake ENI/CEO în reclame de investiții, „personalități" care recomandă trading |

Ghiduri (prevenție): aceleași surse; specific IT de integrat: Poste/PostePay nu
cer NICIODATĂ date pe niciun canal (antiphishing@posteitaliane.it pentru mesaje
suspecte), **SMS-urile INPS nu conțin niciodată linkuri**, SPID/CIE = poarta
serviciilor publice — documentul + selfie-ul tău ajung SPID fals pe numele tău
(nu le trimite nimănui), verificarea intermediarilor pe consob.it înainte de
orice investiție, 112 funcționează și fără SIM/credit, segnalazione smarrimento
100% online cu SPID/CIE (verbale în 96h), „Segnala online" ≠ denuncia (pentru
plângere penală mergi la comisariat sau folosești pre-denuncia + semnare în 48h).

## Reguli editoriale it

1. `report[]` și `sources[]` din frontmatter se ÎNLOCUIESC cu canalele de mai sus,
   per situație (nu se traduc cele românești).
2. Exemplele din `recognize[]` se adaptează la scam-urile documentate în Italia
   (smishing PosteInfo/„pacco in giacenza", „falso operatore bancario" cu
   spoofing, „finto carabiniere"/„finto nipote", Subito.it/Vinted/Facebook
   Marketplace, deepfake ENI etc.).
3. `lastReviewed` = data verificării country pack-ului (2026-07-10 la lansare),
   în format italian („10 luglio 2026").
4. Fără glose de instituții — publicul e în Italia, instituțiile sunt ale lui.
5. Pașii universali rămân; la blocarea cardului NU inventa un număr unic
   național (nu există): „numărul de pe spatele cardului / aplicația băncii",
   plus numerele Poste (800.00.33.22 / +39.02.82.44.33.33) date explicit.
6. Distincția segnalazione vs denuncia se păstrează în orice text `it`:
   raportezi online oricând, dar plângerea penală se semnează fizic (sau
   pre-denuncia online + semnare la ufficio în 48h, unde serviciul e activ).
