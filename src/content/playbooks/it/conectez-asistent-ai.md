---
title: Voglio collegare l'assistente AI ad altre app. Cosa controllo prima?
summary: Vuoi collegare l'assistente AI (ChatGPT, Copilot, Gemini ecc.) a e-mail, file o calendario, tramite un «connettore» o un'estensione. Ecco come scegliere solo connettori affidabili e come dargli il minor accesso possibile.
situation: Voglio collegare l'assistente AI a e-mail, file o calendario
icon: "🔌"
order: 17
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18 luglio 2026"
steps:
  - "Usa solo <strong>connettori dalla lista ufficiale</strong> dell'assistente, fatti dall'azienda stessa o da un produttore che conosci. Un connettore è una piccola estensione che collega l'assistente AI ad altre app (la tecnologia dietro si chiama MCP, Model Context Protocol) — e, come ogni estensione, può essere fatta anche da malintenzionati."
  - "<strong>Collega una cosa alla volta, solo quello che usi.</strong> Non collegare e-mail, file e calendario «tanto per» — ogni collegamento in più significa più dati a cui arriva l'assistente."
  - "Pensa a <strong>cosa c'è nell'account che stai collegando</strong>: nell'e-mail ci sono reset di password, contratti, fatture. Se lì ci sono dati sensibili o dati di clienti, non collegarlo — oppure usa un account separato, solo per questo."
  - "Tieni attiva l'<strong>approvazione manuale</strong> («chiedimi prima di inviare o cancellare qualcosa»). Un assistente collegato legge anche messaggi o documenti ricevuti da altri — e alcuni possono contenere istruzioni nascoste che lo ingannano. La tua conferma è la rete di sicurezza; vedi anche il playbook sulle azioni fatte dall'assistente al posto tuo."
  - "<strong>Fai pulizia ogni tanto:</strong> vai su myaccount.google.com/connections (Google) o nelle impostazioni dell'account Microsoft alla voce «App e servizi» e togli i connettori e le app che non usi più."
donts:
  - "Non installare connettori trovati nelle pubblicità, sui forum o ricevuti nei messaggi — usa solo la lista ufficiale nell'app dell'assistente."
  - "Non collegare l'e-mail aziendale o i file con dati di clienti senza l'accordo del team IT."
  - "Non scrivere la password dell'account direttamente in un connettore — il collegamento fatto bene passa dalla pagina ufficiale Google/Microsoft, che ti mostra esattamente che accesso stai dando."
  - "Non lasciare collegate app che non usi più — un accesso dimenticato è un rischio dimenticato."
recognize:
  - "<strong>Chiede più di quello che promette:</strong> un connettore «solo per leggere il calendario» che vuole anche inviare e-mail a nome tuo."
  - "Un produttore che non trovi da nessuna parte: niente sito, niente contatti, comparso ieri."
  - "Viene promosso in modo aggressivo — «il connettore che ti fa tutto», pubblicità insistenti, messaggi privati che te lo consigliano."
  - "<strong>Dopo il collegamento, l'assistente fa cose inaspettate</strong> — invia, condivide o cerca cose che non gli hai chiesto. Togli subito il connettore."
report:
  - channel: "Il produttore dell'assistente (OpenAI / Microsoft / Google)"
    detail: "Segnala dall'app il connettore che si comporta in modo sospetto — le aziende lo trattano come un problema di sicurezza."
  - channel: "CSIRT Italia (ACN)"
    detail: "Se non sai che passo fare, puoi segnalare l'accaduto all'Agenzia per la Cybersicurezza Nazionale."
    url: "https://segnalazioni.acn.gov.it"
  - channel: "Il team IT dell'azienda"
    detail: "Se hai collegato un account di lavoro, avvisa l'IT — può controllare e revocare l'accesso in modo centralizzato."
sources:
  - label: "OpenAI — il programma di sicurezza per app e agenti AI"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — app di terze parti con accesso al tuo account"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — app e servizi che possono accedere ai tuoi dati"
    url: "https://account.live.com/consent/Manage"
  - label: "CSIRT Italia (ACN) — buone pratiche di sicurezza"
    url: "https://www.acn.gov.it/portale/csirt-italia"
---

**Prima di tutto: respira.** Collegare non è un male in sé — è proprio questo che rende un assistente davvero utile. Pensa ai connettori come alle *chiavi di casa*: le dai solo a qualcuno di cui ti fidi, solo per la stanza che gli serve, e puoi riprendertele in qualsiasi momento dalle impostazioni dell'account.
