---
title: Vreau să conectez asistentul AI la alte aplicații. Ce verific înainte?
summary: Vrei să legi asistentul AI (ChatGPT, Copilot, Gemini etc.) de email, fișiere sau calendar, printr-un „conector” sau o extensie. Iată cum alegi doar conectori de încredere și cum le dai cât mai puțin acces.
situation: Vreau să leg asistentul AI de email, fișiere sau calendar
icon: "🔌"
order: 17
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18 iulie 2026"
steps:
  - "Folosește doar <strong>conectori din lista oficială</strong> a asistentului, făcuți de firma respectivă sau de un producător pe care îl cunoști. Un conector e o mică extensie care leagă asistentul AI de alte aplicații (tehnologia din spate se numește MCP, Model Context Protocol) — și, ca orice extensie, poate fi făcută și de oameni rău intenționați."
  - "<strong>Conectează pe rând, doar ce folosești.</strong> Nu lega email, fișiere și calendar „ca să fie” — fiecare legătură în plus înseamnă mai multe date la care ajunge asistentul."
  - "Gândește-te <strong>ce e în contul pe care îl legi</strong>: în email stau resetări de parole, contracte, facturi. Dacă acolo sunt date sensibile sau date de clienți, nu-l conecta — sau folosește un cont separat, doar pentru asta."
  - "Ține pornită <strong>aprobarea manuală</strong> („întreabă-mă înainte să trimită sau să șteargă ceva”). Un asistent conectat citește și mesaje sau documente primite de la alții — iar unele pot conține instrucțiuni ascunse care îl păcălesc. Confirmarea ta e plasa de siguranță; vezi și playbook-ul despre acțiunile făcute de asistent în locul tău."
  - "<strong>Fă ordine periodic:</strong> intră pe myaccount.google.com/connections (Google) sau în setările contului Microsoft la „Aplicații și servicii” și scoate conectorii și aplicațiile pe care nu le mai folosești."
donts:
  - "Nu instala conectori găsiți în reclame, pe forumuri sau primiți pe mesaje — folosește doar lista oficială din aplicația asistentului."
  - "Nu conecta emailul firmei sau fișierele cu date de clienți fără acordul echipei IT."
  - "Nu-ți scrie parola contului direct într-un conector — legarea corectă trece prin pagina oficială Google/Microsoft, care îți arată exact ce acces dai."
  - "Nu lăsa conectate aplicații pe care nu le mai folosești — acces uitat înseamnă risc uitat."
recognize:
  - "<strong>Cere mai mult decât promite:</strong> un conector „doar de citit calendarul” care vrea și să trimită emailuri în numele tău."
  - "Producător pe care nu-l găsești nicăieri: fără site, fără date de contact, apărut ieri."
  - "E promovat agresiv — „conectorul care îți face tot”, reclame insistente, mesaje private care ți-l recomandă."
  - "<strong>După conectare, asistentul face lucruri neașteptate</strong> — trimite, distribuie sau caută lucruri pe care nu i le-ai cerut. Scoate conectorul imediat."
report:
  - channel: "Producătorul asistentului (OpenAI / Microsoft / Google)"
    detail: "Raportează din aplicație conectorul care se comportă suspect — firmele tratează asta ca problemă de siguranță."
  - channel: "DNSC (îndrumare)"
    detail: "Dacă nu știi ce pas să faci, poți cere sfat."
    phone: "1911"
    url: "https://dnsc.ro"
  - channel: "Echipa IT a firmei"
    detail: "Dacă ai conectat un cont de serviciu, anunță IT-ul — poate verifica și retrage accesul centralizat."
sources:
  - label: "OpenAI — programul de siguranță pentru aplicații și agenți AI"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — aplicații terțe cu acces la contul tău"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — aplicații și servicii care îți pot accesa datele"
    url: "https://account.live.com/consent/Manage"
  - label: "DNSC — securitatea conturilor"
    url: "https://dnsc.ro"
---

**Întâi, respiră.** Conectarea nu e rea în sine — chiar asta face un asistent cu adevărat util. Gândește-te la conectori ca la *cheile casei*: le dai doar cuiva de încredere, doar pentru camera de care are nevoie, și le poți lua înapoi oricând din setările contului.
