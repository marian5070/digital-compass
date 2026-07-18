---
title: Chcem pripojiť AI asistenta k ďalším aplikáciám. Čo si overiť vopred?
summary: Chceš prepojiť AI asistenta (ChatGPT, Copilot, Gemini a pod.) s e-mailom, súbormi alebo kalendárom cez „konektor“ alebo rozšírenie. Tu je, ako si vybrať len dôveryhodné konektory a ako im dať čo najmenej prístupu.
situation: Chcem prepojiť AI asistenta s e-mailom, súbormi alebo kalendárom
icon: "🔌"
order: 17
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18. júla 2026"
steps:
  - "Používaj len <strong>konektory z oficiálneho zoznamu</strong> asistenta, vyrobené danou firmou alebo výrobcom, ktorého poznáš. Konektor je malé rozšírenie, ktoré prepája AI asistenta s ďalšími aplikáciami (technológia v pozadí sa volá MCP, Model Context Protocol) — a ako každé rozšírenie ho môžu vyrobiť aj ľudia so zlými úmyslami."
  - "<strong>Pripájaj postupne, len to, čo používaš.</strong> Neprepájaj e-mail, súbory a kalendár „pre istotu“ — každé prepojenie navyše znamená viac údajov, ku ktorým sa asistent dostane."
  - "Zamysli sa, <strong>čo je v účte, ktorý pripájaš</strong>: v e-maile sú resety hesiel, zmluvy, faktúry. Ak sú tam citlivé údaje alebo údaje klientov, nepripájaj ho — alebo použi samostatný účet, len na tento účel."
  - "Nechaj zapnuté <strong>ručné schvaľovanie</strong> („spýtaj sa ma, skôr než niečo odošleš alebo vymažeš“). Pripojený asistent číta aj správy a dokumenty od iných ľudí — a niektoré môžu obsahovať skryté pokyny, ktoré ho oklamú. Tvoje potvrdenie je záchranná sieť; pozri aj playbook o tom, keď asistent koná namiesto teba."
  - "<strong>Pravidelne si urob poriadok:</strong> choď na myaccount.google.com/connections (Google) alebo v nastaveniach účtu Microsoft na „Aplikácie a služby“ a odstráň konektory a aplikácie, ktoré už nepoužívaš."
donts:
  - "Neinštaluj konektory nájdené v reklamách, na fórach ani také, čo ti prišli v správach — používaj len oficiálny zoznam v aplikácii asistenta."
  - "Nepripájaj firemný e-mail ani súbory s údajmi klientov bez súhlasu IT tímu."
  - "Nepíš heslo od účtu priamo do konektora — správne prepojenie ide cez oficiálnu stránku Googlu/Microsoftu, ktorá ti presne ukáže, aký prístup dávaš."
  - "Nenechávaj pripojené aplikácie, ktoré už nepoužívaš — zabudnutý prístup je zabudnuté riziko."
recognize:
  - "<strong>Pýta viac, než sľubuje:</strong> konektor „len na čítanie kalendára“, ktorý chce aj posielať e-maily v tvojom mene."
  - "Výrobca, ktorého nikde nenájdeš: bez stránky, bez kontaktných údajov, objavil sa včera."
  - "Agresívne sa propaguje — „konektor, ktorý urobí všetko za teba“, dotieravé reklamy, súkromné správy, ktoré ti ho odporúčajú."
  - "<strong>Po pripojení robí asistent nečakané veci</strong> — posiela, zdieľa alebo vyhľadáva veci, o ktoré si ho nežiadal. Konektor okamžite odstráň."
report:
  - channel: "Výrobca asistenta (OpenAI / Microsoft / Google)"
    detail: "Nahlás priamo v aplikácii konektor, ktorý sa správa podozrivo — firmy to berú ako bezpečnostný problém."
  - channel: "SK-CERT"
    detail: "Národná jednotka pre kybernetickú bezpečnosť: incident nahlásiš cez „Nahlásiť incident“ na sk-cert.sk (prijíma aj hlásenia od verejnosti) alebo e-mailom na incident@nbu.gov.sk."
    url: "https://www.sk-cert.sk/sk/rady-a-navody/nahlasit-incident/"
  - channel: "IT tím firmy"
    detail: "Ak si pripojil pracovný účet, daj vedieť IT tímu — vie prístup skontrolovať a centrálne odvolať."
sources:
  - label: "OpenAI — program bezpečnosti pre aplikácie a AI agentov"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — aplikácie tretích strán s prístupom k tvojmu účtu"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — aplikácie a služby s prístupom k tvojim údajom"
    url: "https://account.live.com/consent/Manage"
  - label: "SK-CERT — Národné centrum kybernetickej bezpečnosti"
    url: "https://www.sk-cert.sk/"
---

**Najprv sa nadýchni.** Pripájanie nie je samo osebe zlé — práve to robí asistenta naozaj užitočným. Mysli na konektory ako na *kľúče od domu*: dáš ich len niekomu, komu dôveruješ, len od izby, ktorú potrebuje, a kedykoľvek si ich môžeš vziať späť v nastaveniach účtu.
