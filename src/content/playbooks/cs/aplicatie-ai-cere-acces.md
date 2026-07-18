---
title: Aplikace s AI chce přístup k mým účtům nebo dokumentům. Co zkontrolovat?
summary: Aplikace nebo AI asistent tě žádá o povolení vidět tvůj e-mail, soubory, fotky nebo kontakty. Tady je, co ověřit, než klikneš na „Povolit“ — a jak přístup odebrat, když toho lituješ.
situation: Aplikace s AI chce přístup k e-mailu, souborům nebo účtům
icon: "🔑"
order: 16
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18. července 2026"
steps:
  - "<strong>Zastav se na obrazovce „Povolit“.</strong> Přesně tam je napsané, co všechno aplikace uvidí nebo bude moct dělat („číst tvoje e-maily“, „vidět tvoje soubory“). Přečti si seznam v klidu — jakmile klikneš, aplikace opravdu dostane všechno, co tam stojí."
  - "Ověř si, <strong>kdo aplikaci vytvořil</strong>: vyhledej si ji sám v oficiálním obchodě (App Store, Google Play) nebo na webu výrobce, podívej se na jméno firmy, recenze a jak dlouho existuje. Pokud nepoznáš, kdo za ní stojí, přístup jí nedávej."
  - "Porovnej, co žádá, s tím, co dělá: <strong>dej jí jen přístup, který potřebuje</strong> na práci, kterou od ní chceš. Aplikace, která ti shrnuje dokumenty, nemá důvod číst tvoje e-maily nebo kontakty."
  - "Vyber <strong>nejomezenější možnost</strong>, když existuje: „jen tento soubor/složka“, „jen čtení“, „jen když aplikaci používám“ — ne „přístup k celému účtu“."
  - "Už jsi klikl na „Povolit“ a lituješ toho? <strong>Odeber přístup</strong>: u Googlu jdi na <strong>myaccount.google.com/connections</strong>, u Microsoftu do nastavení účtu na „Aplikace a služby“, u Facebooku do Nastavení → „Aplikace a weby“. Odstraň aplikaci ze seznamu — přístup se zastaví."
donts:
  - "Nedávej přístup „ke všemu“ jen proto, aby to šlo rychleji — vrátit se a přidat oprávnění můžeš i později, pokud bude opravdu potřeba."
  - "Neinstaluj AI aplikace z reklam nebo z odkazů ze zpráv — vyhledej si je sám, podle jména, v oficiálním obchodě."
  - "Nepiš heslo od e-mailu nebo od banky přímo do AI aplikace. Správná žádost o přístup tě vezme na oficiální stránku Googlu/Microsoftu, která ti ukáže, jaký přístup dáváš — heslo v aplikaci nechce."
  - "Nepropojuj pracovní účet (firemní e-mail, dokumenty klientů) bez toho, aby ses nejdřív zeptal IT týmu."
recognize:
  - "<strong>Chce mnohem víc, než na co je:</strong> „generátor obrázků“, který chce přístup k e-mailům a kontaktům, nemá dobrý důvod."
  - "Výrobce, kterého nikde nenajdeš: web bez kontaktů, aplikace, která se objevila teprve nedávno, málo recenzí, nebo recenze, které zní jak okopírované."
  - "<strong>Tlačí na spěch:</strong> „udělte přístup, abyste mohli pokračovat“, nabídky „jen dnes“, okna, která se vracejí, dokud neklikneš na „Povolit“."
  - "Napodobuje známou aplikaci: skoro stejné jméno, podobné logo, ale jiný výrobce."
report:
  - channel: "Obchod s aplikacemi (Google Play / App Store)"
    detail: "Nahlas aplikaci, která chce neodůvodněný přístup nebo napodobuje jinou, aby nepoškodila někoho dalšího."
  - channel: "CSIRT.CZ"
    detail: "Pokud si nevíš rady s dalším krokem, nahlas to přes formulář a nech si poradit."
    url: "https://csirt.cz/cs/hlaseni-incidentu/"
  - channel: "IT tým firmy"
    detail: "Pokud jde o pracovní účet nebo zařízení, dej vědět IT — ideálně předtím, než přístup dáš, nebo hned potom."
sources:
  - label: "Google — aplikace třetích stran s přístupem k tvému účtu"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — aplikace a služby s přístupem k tvým údajům"
    url: "https://account.live.com/consent/Manage"
  - label: "OpenAI — bezpečnostní program pro aplikace a AI agenty"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "CSIRT.CZ — hlášení incidentů"
    url: "https://csirt.cz/cs/hlaseni-incidentu/"
---

**Nejdřív se nadechni.** Obrazovka „Povolit přístup“ je přesně ta chvíle, kdy máš kontrolu ty — ještě se nic nestalo. Pravidlo je jednoduché: *kdo aplikaci vytvořil a proč potřebuje tolik*. A pokud už jsi klikl, přístup jde kdykoli odebrat, během dvou minut, v nastavení účtu.
