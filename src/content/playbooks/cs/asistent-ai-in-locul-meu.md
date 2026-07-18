---
title: AI asistent chce něco udělat za mě — odeslat, koupit, smazat. Mám ho nechat?
summary: AI asistent tě žádá o schválení, aby odeslal zprávu, provedl platbu nebo něco smazal — nebo to už udělal. Tady je, jak schvalovat bezpečně a co dělat, když udělal chybu.
situation: AI asistent chce za mě něco odeslat, koupit nebo smazat
icon: "🤖"
order: 18
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18. července 2026"
steps:
  - "<strong>Přečti si přesně, co chce udělat</strong>, než to schválíš: komu to posílá, jakou částku platí, který soubor maže. Schval to jen tehdy, když bys přesně totéž udělal sám, vlastní rukou."
  - "Nech zapnuté <strong>ruční schvalování</strong> („zeptej se mě předem“) pro odesílání, platby a mazání. Nepřepínej na „automatické schvalování“, aby ses zbavil otázek — ty otázky jsou tvoje záchranná síť."
  - "Při nákupech a platbách dej asistentovi <strong>co nejméně</strong>: kartu s nízkým limitem nebo virtuální kartu, ne hlavní kartu a ne přístup k celému bankovnímu účtu."
  - "Co je <strong>nevratné, zůstává na tobě</strong>: definitivní mazání, zprávy pro hodně lidí, velké platby. Nech asistenta věci připravit (koncept, nákupní košík), ale poslední tlačítko zmáčkni ty."
  - "Už udělal něco špatně? <strong>Omez škody hned:</strong> zkontroluj složku „Odeslané“ a vezmi zprávu zpět, pokud to jde, zruš objednávku, kvůli platbám zavolej bance (oficiální číslo ze zadní strany karty) — a odpoj asistenta od dané aplikace, dokud nepochopíš, co se stalo."
donts:
  - "Neschvaluj reflexivně všechno, o co žádá — zvyk mačkat pořád „Ano“ je přesně to riziko."
  - "Nenechávej ho pracovat bez dozoru celé hodiny s právem odesílat, nakupovat nebo mazat."
  - "Nedávej mu heslo do banky ani hlavní kartu — používej nízké limity a virtuální karty."
  - "Nepředpokládej, že „on to ví líp“ — asistenta může obelstít e-mail nebo stránka, kterou čte (se skrytými pokyny v textu), aby udělal něco jiného, než jsi chtěl."
recognize:
  - "<strong>Navrhuje akci, o kterou jsi nežádal:</strong> z ničeho nic chce poslat e-mail, otevřít odkaz nebo „zkontrolovat“ účet."
  - "Chce poslat osobní údaje nebo soubory na adresu nebo web, které nepoznáváš."
  - "Naléhá, abys schvaloval rychle, nebo ti navrhuje <strong>vypnout potvrzování</strong> „aby to bylo efektivnější“."
  - "Chování se náhle změní poté, co přečetl zprávu nebo dokument od někoho jiného — ten text mohl obsahovat skryté pokyny pro asistenta."
report:
  - channel: "Tvoje banka"
    detail: "Pokud provedl platbu, kterou jsi nechtěl — zavolej na oficiální číslo ze zadní strany karty, nech kartu zablokovat a zeptej se na vrácení platby."
  - channel: "Výrobce asistenta (OpenAI / Microsoft / Google)"
    detail: "Nahlas divnou akci přímo z aplikace — firmy to řeší jako bezpečnostní problém."
  - channel: "CSIRT.CZ"
    detail: "Pokud si nevíš rady s dalším krokem, nahlas to přes formulář a nech si poradit."
    url: "https://csirt.cz/cs/hlaseni-incidentu/"
  - channel: "Policie ČR"
    detail: "Pokud jsi přišel o peníze, podej trestní oznámení — osobně na kterékoli služebně. Schovej si snímky obrazovky s konverzací i akcí."
    url: "https://policie.gov.cz/clanek/oznameni-trestneho-cinu.aspx"
sources:
  - label: "OpenAI — bezpečnostní program pro aplikace a AI agenty"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — aplikace třetích stran s přístupem k tvému účtu"
    url: "https://myaccount.google.com/connections"
  - label: "CSIRT.CZ — hlášení incidentů"
    url: "https://csirt.cz/cs/hlaseni-incidentu/"
---

**Nejdřív se nadechni.** Asistent, který tě žádá o schválení, je systém, který funguje, jak má — to „opravdu?“ existuje přesně kvůli tobě. Jednoduché pravidlo: *schvaluješ jen to, co bys udělal sám*, a všechno nevratné mačkáš ty. A pokud už něco pokazil, škody se skoro vždycky dají omezit v prvních minutách.
