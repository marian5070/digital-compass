---
title: Klikl jsem na falešný odkaz nebo SMS. Co teď?
summary: Otevřel jsi falešnou zprávu („zásilka čeká“, „zablokovaný účet“, banka) nebo jsi klikl na podezřelý odkaz. Tady jsou kroky, které udělej teď, jeden po druhém.
situation: Přišla mi podezřelá zpráva nebo jsem klikl na odkaz
icon: "✉️"
order: 1
severity: urgent
lastReviewed: "10. července 2026"
steps:
  - "<strong>Už nic nezadávej</strong> na stránce, která se otevřela. Zavři ji. Pokud jsi stihl něco vyplnit, přejdi rovnou k dalšímu kroku."
  - "Pokud jsi zadal <strong>údaje o kartě nebo heslo do banky</strong>: zavolej hned své bance na číslo ze zadní strany karty a nech kartu zablokovat. Jednotné národní číslo v Česku neexistuje — každá banka má svoje. Nevolej na číslo ze zprávy."
  - "Pokud jsi zadal <strong>heslo</strong> k nějakému účtu (e-mail, Facebook apod.): změň ho okamžitě v oficiální aplikaci a zapni si dvoufázové ověření."
  - "Účty, o které máš strach, kontroluj jen přes <strong>oficiální aplikaci</strong>, nebo tak, že adresu napíšeš do prohlížeče sám — nikdy přes odkaz ze zprávy."
  - "Falešnou zprávu „od České pošty“ přepošli na info@cpost.cz a falešnou SMS „od Zásilkovny“ na privacy@zasilkovna.cz — pomůžeš tím zablokovat podvod i ostatním. Podvodnou stránku nahlas přes formulář CSIRT.CZ. Pak zprávu smaž."
donts:
  - "Nevolej a nepiš na čísla ani adresy z podezřelé zprávy."
  - "Nikomu nedávej údaje o kartě, kód z SMS ani heslo — ať zpráva zní jakkoli oficiálně."
  - "Neinstaluj žádnou aplikaci, o kterou tě odkaz žádá (hlavně ne na „ověření“ nebo „vzdálený přístup“)."
recognize:
  - "<strong>Spěch a strach:</strong> „účet bude do 24 hodin zablokován“, „zásilka se vrací odesílateli“. Časový nátlak je hlavní signál."
  - "<strong>Adresa nesedí:</strong> odkaz vypadá skoro jako ten pravý, ale má písmena navíc, pomlčky nebo divnou doménu."
  - "<strong>Chtějí po tobě údaje, které skutečná banka přes odkaz nikdy nechce:</strong> PIN, celé heslo, kód CVV, kód z SMS."
  - "Chyby v češtině, divný slovosled, křečovitě úřední tón."
  - "<strong>Časté příklady teď:</strong> „zásilka zadržena na celnici — zaplaťte 216,99 Kč“, „doplatek 160 Kč“ nebo „neúplná adresa“ od „České pošty“ s odkazem na platbu; SMS „od Zásilkovny“ s výzvou „potvrďte platbu“ — Zásilkovna žádné platby přes SMS nechce. Všechno falešné — ověříš to jen tak, že na oficiální web vejdeš sám, ne přes odkaz."
report:
  - channel: "CSIRT.CZ"
    detail: "Falešný odkaz nebo stránku nahlas přes formulář hlášení incidentů a nech si poradit."
    url: "https://csirt.cz/cs/hlaseni-incidentu/"
  - channel: "Tvoje banka"
    detail: "Pokud jsi zadal bankovní údaje — zavolej na oficiální číslo ze zadní strany karty a zablokuj kartu. Jednotné národní číslo neexistuje, každá banka má vlastní postup."
  - channel: "Policie ČR"
    detail: "Pokud jsi přišel o peníze, podej trestní oznámení — osobně na kterékoli služebně (jednoduchý online formulář neexistuje). Schovej si snímky obrazovky se zprávou."
    url: "https://policie.gov.cz/clanek/oznameni-trestneho-cinu.aspx"
  - channel: "Česká pošta / Zásilkovna"
    detail: "Falešné zprávy přepošli: Česká pošta — info@cpost.cz, Zásilkovna — privacy@zasilkovna.cz."
sources:
  - label: "Česká pošta — aktuální bezpečnostní informace o podvodných zprávách"
    url: "https://www.ceskaposta.cz/o-spolecnosti/bezpecnostni-informace/aktualni-informace"
  - label: "Zásilkovna — podvodné SMS zprávy"
    url: "https://www.zasilkovna.cz/bezpecnost-ochrana-dat/sms"
---

**Nejdřív se nadechni.** Samotné kliknutí na odkaz ještě neznamená, že jsi o něco přišel. Nebezpečí většinou vzniká až ve chvíli, kdy *zadáš údaje* nebo *něco nainstaluješ*. Máš čas projít si kroky níže v klidu, jeden po druhém.
