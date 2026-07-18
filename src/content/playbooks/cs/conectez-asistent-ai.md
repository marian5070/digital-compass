---
title: Chci propojit AI asistenta s dalšími aplikacemi. Co si předem ověřit?
summary: Chceš napojit AI asistenta (ChatGPT, Copilot, Gemini apod.) na e-mail, soubory nebo kalendář přes „konektor“ nebo rozšíření. Tady je, jak vybírat jen důvěryhodné konektory a jak jim dát co nejmenší přístup.
situation: Chci napojit AI asistenta na e-mail, soubory nebo kalendář
icon: "🔌"
order: 17
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18. července 2026"
steps:
  - "Používej jen <strong>konektory z oficiálního seznamu</strong> asistenta, vytvořené danou firmou nebo výrobcem, kterého znáš. Konektor je malé rozšíření, které propojuje AI asistenta s dalšími aplikacemi (technologie v pozadí se jmenuje MCP, Model Context Protocol) — a jako každé rozšíření ho můžou udělat i lidé se zlými úmysly."
  - "<strong>Propojuj postupně a jen to, co používáš.</strong> Nenapojuj e-mail, soubory a kalendář „pro jistotu“ — každé propojení navíc znamená víc dat, ke kterým se asistent dostane."
  - "Zamysli se, <strong>co v propojovaném účtu je</strong>: v e-mailu leží resetování hesel, smlouvy, faktury. Pokud jsou tam citlivé údaje nebo data klientů, nepropojuj ho — nebo si založ oddělený účet, jen na tohle."
  - "Nech zapnuté <strong>ruční schvalování</strong> („zeptej se mě, než něco odešleš nebo smažeš“). Propojený asistent čte i zprávy a dokumenty od jiných lidí — a některé můžou obsahovat skryté pokyny, které ho obelstí. Tvoje potvrzení je záchranná síť; podívej se i na playbook o akcích, které asistent dělá za tebe."
  - "<strong>Pravidelně udělej pořádek:</strong> jdi na myaccount.google.com/connections (Google) nebo v nastavení účtu Microsoft na „Aplikace a služby“ a odeber konektory a aplikace, které už nepoužíváš."
donts:
  - "Neinstaluj konektory z reklam, z fór nebo ze zpráv — používej jen oficiální seznam v aplikaci asistenta."
  - "Nepropojuj firemní e-mail ani soubory s daty klientů bez souhlasu IT týmu."
  - "Nepiš heslo k účtu přímo do konektoru — správné propojení jde přes oficiální stránku Googlu/Microsoftu, která ti přesně ukáže, jaký přístup dáváš."
  - "Nenechávej propojené aplikace, které už nepoužíváš — zapomenutý přístup znamená zapomenuté riziko."
recognize:
  - "<strong>Chce víc, než slibuje:</strong> konektor „jen na čtení kalendáře“, který chce i posílat e-maily tvým jménem."
  - "Výrobce, kterého nikde nenajdeš: bez webu, bez kontaktů, objevil se včera."
  - "Agresivní propagace — „konektor, který za tebe udělá všechno“, dotěrné reklamy, soukromé zprávy, které ti ho doporučují."
  - "<strong>Po propojení dělá asistent nečekané věci</strong> — odesílá, sdílí nebo hledá věci, o které jsi ho nežádal. Konektor hned odeber."
report:
  - channel: "Výrobce asistenta (OpenAI / Microsoft / Google)"
    detail: "Nahlas přímo z aplikace konektor, který se chová podezřele — firmy to řeší jako bezpečnostní problém."
  - channel: "CSIRT.CZ"
    detail: "Pokud si nevíš rady s dalším krokem, nahlas to přes formulář a nech si poradit."
    url: "https://csirt.cz/cs/hlaseni-incidentu/"
  - channel: "IT tým firmy"
    detail: "Pokud jsi propojil pracovní účet, dej vědět IT — může přístup zkontrolovat a centrálně odebrat."
sources:
  - label: "OpenAI — bezpečnostní program pro aplikace a AI agenty"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — aplikace třetích stran s přístupem k tvému účtu"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — aplikace a služby s přístupem k tvým údajům"
    url: "https://account.live.com/consent/Manage"
  - label: "CSIRT.CZ — hlášení incidentů"
    url: "https://csirt.cz/cs/hlaseni-incidentu/"
---

**Nejdřív se nadechni.** Propojení není samo o sobě špatné — právě díky němu je asistent opravdu užitečný. Ber konektory jako *klíče od domu*: dáš je jen někomu, komu věříš, jen od místnosti, kterou potřebuje, a kdykoli si je můžeš vzít zpátky v nastavení účtu.
