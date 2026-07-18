---
title: AI asistent chce niečo urobiť namiesto mňa — odoslať, nakúpiť, vymazať. Mám ho nechať?
summary: AI asistent ťa žiada o schválenie, aby odoslal správu, urobil platbu alebo niečo vymazal — alebo to už urobil. Tu je, ako schvaľovať bezpečne a čo robiť, keď sa pomýlil.
situation: AI asistent chce za mňa niečo odoslať, kúpiť alebo vymazať
icon: "🤖"
order: 18
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18. júla 2026"
steps:
  - "<strong>Prečítaj si presne, čo chce urobiť</strong>, skôr než to schváliš: komu posiela, akú sumu platí, ktorý súbor maže. Schváľ to len vtedy, ak by si presne to isté urobil aj ty, vlastnou rukou."
  - "Nechaj zapnuté <strong>ručné schvaľovanie</strong> („spýtaj sa ma vopred“) pri odosielaní, platbách a mazaní. Neprepínaj na „automatické schvaľovanie“, aby si sa zbavil otázok — otázky sú tvoja záchranná sieť."
  - "Pri nákupoch a platbách daj asistentovi <strong>čo najmenej</strong>: kartu s nízkym limitom alebo virtuálnu kartu, nie hlavnú kartu a nie prístup k celému bankovému účtu."
  - "Čo je <strong>nezvratné, zostáva na tebe</strong>: definitívne mazanie, správy pre veľa ľudí, veľké platby. Nechaj asistenta veci pripraviť (koncept, nákupný košík), ale posledné tlačidlo stlač ty."
  - "Už niečo pokazil? <strong>Obmedz škody hneď:</strong> skontroluj priečinok „Odoslané“ a ak sa dá, správu odvolaj, zruš objednávku, pri platbách zavolaj banke (na oficiálne číslo na zadnej strane karty) — a asistenta od danej aplikácie odpoj, kým nepochopíš, čo sa stalo."
donts:
  - "Neschvaľuj reflexívne všetko, čo pýta — zvyk vždy stlačiť „Áno“ je presne to riziko."
  - "Nenechávaj ho celé hodiny pracovať bez dozoru s právom odosielať, nakupovať alebo mazať."
  - "Nedávaj mu heslo od banky ani hlavnú kartu — používaj nízke limity a virtuálne karty."
  - "Nepredpokladaj, že „on vie lepšie“ — asistenta môže e-mail alebo stránka, ktorú číta (so skrytými pokynmi v texte), oklamať, aby urobil niečo iné, než si žiadal."
recognize:
  - "<strong>Navrhuje akciu, o ktorú si nežiadal:</strong> z ničoho nič chce odoslať e-mail, otvoriť odkaz alebo „overiť“ účet."
  - "Chce poslať osobné údaje alebo súbory na adresu alebo stránku, ktoré nepoznáš."
  - "Nalieha, aby si schvaľoval rýchlo, alebo ti navrhuje <strong>vypnúť potvrdenia</strong>, „aby to bolo efektívnejšie“."
  - "Správanie sa náhle zmení po tom, čo prečítal správu alebo dokument od niekoho iného — ten text mohol obsahovať skryté pokyny pre asistenta."
report:
  - channel: "Tvoja banka"
    detail: "Ak urobil platbu, ktorú si nechcel — zavolaj na oficiálne číslo na zadnej strane karty, požiadaj o zablokovanie karty a spýtaj sa na vrátenie platby."
  - channel: "Výrobca asistenta (OpenAI / Microsoft / Google)"
    detail: "Nahlás priamo v aplikácii zvláštnu akciu — firmy to berú ako bezpečnostný problém."
  - channel: "SK-CERT"
    detail: "Národná jednotka pre kybernetickú bezpečnosť: incident nahlásiš cez „Nahlásiť incident“ na sk-cert.sk (prijíma aj hlásenia od verejnosti) alebo e-mailom na incident@nbu.gov.sk."
    url: "https://www.sk-cert.sk/sk/rady-a-navody/nahlasit-incident/"
  - channel: "Polícia"
    detail: "Ak si prišiel o peniaze, podaj trestné oznámenie — na ktorejkoľvek policajnej stanici. Odlož si snímky obrazovky s konverzáciou aj s tou akciou."
    phone: "158"
sources:
  - label: "OpenAI — program bezpečnosti pre aplikácie a AI agentov"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — aplikácie tretích strán s prístupom k tvojmu účtu"
    url: "https://myaccount.google.com/connections"
  - label: "SK-CERT — Národné centrum kybernetickej bezpečnosti"
    url: "https://www.sk-cert.sk/"
---

**Najprv sa nadýchni.** Asistent, ktorý ťa žiada o schválenie, je systém, ktorý funguje, ako má — to „si si istý?“ je tam presne pre teba. Jednoduché pravidlo: *schvaľuješ len to, čo by si urobil aj sám*, a všetko nezvratné stláčaš ty. A ak už niečo pokazil, takmer vždy sa dajú škody obmedziť v prvých minútach.
