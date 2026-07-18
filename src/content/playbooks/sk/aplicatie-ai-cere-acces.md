---
title: AI aplikácia odo mňa pýta prístup k účtom alebo dokumentom. Čo si overiť?
summary: Aplikácia alebo AI asistent ťa žiada o povolenie vidieť tvoj e-mail, súbory, fotky alebo kontakty. Tu je, čo si overiť, skôr než klepneš na „Povoliť“ — a ako prístup vezmeš späť, ak to oľutuješ.
situation: AI aplikácia odo mňa pýta prístup k e-mailu, súborom alebo účtom
icon: "🔑"
order: 16
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18. júla 2026"
steps:
  - "<strong>Zastav sa na obrazovke „Povoliť“.</strong> Presne tam je napísané, čo všetko bude aplikácia môcť vidieť alebo robiť („čítať tvoje e-maily“, „vidieť tvoje súbory“). Prečítaj si zoznam v pokoji — keď klepneš, aplikácia naozaj dostane všetko, čo tam je napísané."
  - "Over si, <strong>kto aplikáciu vyrobil</strong>: vyhľadaj si ju sám v oficiálnom obchode (App Store, Google Play) alebo na stránke výrobcu, pozri si názov firmy, recenzie a odkedy existuje. Ak nevieš zistiť, kto za ňou stojí, prístup jej nedávaj."
  - "Porovnaj, čo pýta, s tým, čo robí: <strong>daj jej len prístup, ktorý naozaj potrebuje</strong> na to, čo od nej chceš. Aplikácia, ktorá ti zhŕňa dokumenty, nemá dôvod čítať tvoje e-maily ani kontakty."
  - "Vyber <strong>najobmedzenejšiu možnosť</strong>, ak existuje: „len tento súbor/priečinok“, „len na čítanie“, „len počas používania aplikácie“ — nie „prístup k celému účtu“."
  - "Už si klepol na „Povoliť“ a ľutuješ to? <strong>Odvolaj prístup</strong>: pri Googli choď na <strong>myaccount.google.com/connections</strong>, pri Microsofte do nastavení účtu na „Aplikácie a služby“, pri Facebooku do Nastavenia → „Aplikácie a weby“. Odstráň aplikáciu zo zoznamu — prístup sa tým skončí."
donts:
  - "Nedávaj prístup „ku všetkému“ len preto, aby to šlo rýchlejšie — vrátiť sa a pridať povolenia môžeš aj neskôr, ak budú naozaj treba."
  - "Neinštaluj AI aplikácie z reklám ani z odkazov, ktoré ti prišli v správach — vyhľadaj si ich sám, podľa názvu, v oficiálnom obchode."
  - "Nepíš heslo od e-mailu ani od banky priamo do AI aplikácie. Správna žiadosť o prístup ťa vezme na oficiálnu stránku Googlu/Microsoftu, ktorá ti ukáže, aký prístup dávaš — heslo od teba v aplikácii nepýta."
  - "Nepripájaj pracovný účet (firemný e-mail, dokumenty klientov) bez toho, aby si sa najprv spýtal IT tímu."
recognize:
  - "<strong>Pýta oveľa viac, než na čo slúži:</strong> „generátor obrázkov“, ktorý chce prístup k e-mailom a kontaktom, nemá na to dobrý dôvod."
  - "Výrobca, ktorého nikde nenájdeš: stránka bez kontaktných údajov, aplikácia, ktorá sa objavila len nedávno, málo recenzií alebo recenzie, ktoré znejú ako kopírované."
  - "<strong>Náhli ťa:</strong> „udeľ prístup, aby si mohol pokračovať“, ponuky „len dnes“, okná, ktoré sa dotieravo vracajú, kým neklepneš na „Povoliť“."
  - "Napodobňuje známu aplikáciu: takmer rovnaký názov, podobné logo, ale iný výrobca."
report:
  - channel: "Obchod s aplikáciami (Google Play / App Store)"
    detail: "Nahlás aplikáciu, ktorá pýta neodôvodnený prístup alebo napodobňuje inú, aby nepoškodila niekoho ďalšieho."
  - channel: "SK-CERT"
    detail: "Národná jednotka pre kybernetickú bezpečnosť: incident nahlásiš cez „Nahlásiť incident“ na sk-cert.sk (prijíma aj hlásenia od verejnosti) alebo e-mailom na incident@nbu.gov.sk."
    url: "https://www.sk-cert.sk/sk/rady-a-navody/nahlasit-incident/"
  - channel: "IT tím firmy"
    detail: "Ak ide o pracovný účet alebo pracovné zariadenie, daj vedieť IT tímu — najlepšie skôr, než prístup udelíš, alebo hneď po tom."
sources:
  - label: "Google — aplikácie tretích strán s prístupom k tvojmu účtu"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — aplikácie a služby s prístupom k tvojim údajom"
    url: "https://account.live.com/consent/Manage"
  - label: "OpenAI — program bezpečnosti pre aplikácie a AI agentov"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "SK-CERT — Národné centrum kybernetickej bezpečnosti"
    url: "https://www.sk-cert.sk/"
---

**Najprv sa nadýchni.** Obrazovka „Povoliť prístup“ je presne tá chvíľa, keď máš kontrolu ty — zatiaľ sa nič nestalo. Pravidlo je jednoduché: *kto aplikáciu vyrobil a načo toľko prístupu potrebuje*. A ak si už klepol, prístup sa dá kedykoľvek odvolať — za dve minúty v nastaveniach účtu.
