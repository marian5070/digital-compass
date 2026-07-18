---
title: Az AI-asszisztens helyettem akar megtenni valamit — küldeni, vásárolni, törölni. Hagyjam?
summary: Az AI-asszisztens a jóváhagyásodat kéri, hogy elküldjön egy üzenetet, elindítson egy fizetést vagy töröljön valamit — vagy már meg is tette. Íme, hogyan hagyd jóvá biztonságosan, és mit tegyél, ha hibázott.
situation: Az AI-asszisztens küldeni, vásárolni vagy törölni akar valamit helyettem
icon: "🤖"
order: 18
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "2026. július 18."
steps:
  - "<strong>Olvasd el pontosan, mit akar tenni</strong>, mielőtt jóváhagyod: kinek küld, mekkora összeget fizet, melyik fájlt törli. Csak akkor hagyd jóvá, ha te magad, a saját kezeddel is pontosan ugyanezt tetted volna."
  - "Tartsd bekapcsolva a <strong>kézi jóváhagyást</strong> („kérdezz meg előtte”) a küldésekhez, fizetésekhez és törlésekhez. Ne válts „automatikus jóváhagyásra” csak azért, hogy megszabadulj a kérdésektől — a kérdések a te biztonsági hálód."
  - "Vásárlásnál és fizetésnél adj az asszisztensnek <strong>minél kevesebbet</strong>: egy alacsony limitű kártyát vagy egy virtuális kártyát, ne a fő kártyádat, és ne hozzáférést az egész bankszámládhoz."
  - "Ami <strong>visszafordíthatatlan, az maradjon nálad</strong>: végleges törlések, sok embernek szóló üzenetek, nagy összegű fizetések. Hagyd, hogy az asszisztens előkészítse (piszkozat, bevásárlókosár), de az utolsó gombot te nyomd meg."
  - "Már megtett valamit, amit nem kellett volna? <strong>Csökkentsd a kárt most:</strong> nézd meg az „Elküldött” mappát, és vond vissza az üzenetet, ha lehet, mondd le a rendelést, fizetésnél hívd fel a bankot (a kártya hátoldalán lévő hivatalos számon) — és válaszd le az asszisztenst az adott alkalmazásról, amíg nem érted, mi történt."
donts:
  - "Ne hagyj jóvá reflexből mindent, amit kér — pont az a kockázat, ha megszokod, hogy mindig „Igen”-t nyomsz."
  - "Ne hagyd órákon át felügyelet nélkül dolgozni úgy, hogy közben küldhet, vásárolhat vagy törölhet."
  - "Ne add meg neki a banki jelszavadat vagy a fő kártyádat — használj alacsony limiteket és virtuális kártyákat."
  - "Ne feltételezd, hogy „ő jobban tudja” — egy asszisztenst becsaphat egy e-mail vagy egy oldal, amelyet elolvas (a szövegbe rejtett utasításokkal), hogy mást tegyen, mint amit kértél."
recognize:
  - "<strong>Olyan műveletet javasol, amit nem kértél:</strong> a semmiből e-mailt akar küldeni, linket megnyitni vagy „ellenőrizni” egy fiókot."
  - "Személyes adatokat vagy fájlokat akar küldeni egy címre vagy weboldalra, amelyet nem ismersz fel."
  - "Sürgeti a gyors jóváhagyást, vagy azt javasolja, hogy <strong>kapcsold ki a megerősítéseket</strong> „a hatékonyság kedvéért”."
  - "A viselkedése hirtelen megváltozik, miután elolvasott egy mástól kapott üzenetet vagy dokumentumot — lehet, hogy az a szöveg rejtett utasításokat tartalmazott az asszisztens számára."
report:
  - channel: "A bankod"
    detail: "Ha olyan fizetést indított, amit nem akartál — hívd a kártya hátoldalán lévő hivatalos számot, kérd a kártya letiltását, és érdeklődj a fizetés visszatérítéséről."
  - channel: "Az asszisztens gyártója (OpenAI / Microsoft / Google)"
    detail: "Jelentsd az alkalmazásból a furcsa műveletet — a cégek ezt biztonsági problémaként kezelik."
  - channel: "DNSC (útmutatás)"
    detail: "Ha nem tudod, mi legyen a következő lépés, tanácsot kérhetsz a DNSC-től (Románia nemzeti kiberbiztonsági hatósága)."
    phone: "1911"
    url: "https://dnsc.ro"
  - channel: "Rendőrség"
    detail: "Ha pénzt veszítettél, tégy feljelentést a rendőrségen (Poliția Română). Őrizd meg a beszélgetésről és a műveletről készült képernyőképeket."
    url: "https://www.politiaromana.ro"
sources:
  - label: "OpenAI — biztonsági program AI-alkalmazásokhoz és -ügynökökhöz"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — harmadik féltől származó alkalmazások, amelyek hozzáférnek a fiókodhoz"
    url: "https://myaccount.google.com/connections"
  - label: "DNSC — a fiókok biztonsága"
    url: "https://dnsc.ro"
---

**Először is: lélegezz.** Egy asszisztens, amely a jóváhagyásodat kéri, egy jól működő rendszer — az a „biztos vagy benne?” pontosan érted van. Az egyszerű szabály: *csak azt hagyod jóvá, amit te magad is megtettél volna*, és ami visszafordíthatatlan, azt te nyomod meg. És ha már hibázott valamiben, az első percekben szinte mindig csökkenthető a kár.
