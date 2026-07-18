---
title: Un'app AI mi chiede l'accesso ad account o documenti. Cosa controllo?
summary: Un'app o un assistente AI ti chiede il permesso di vedere la tua e-mail, i tuoi file, le foto o i contatti. Ecco cosa controllare prima di premere «Consenti» — e come revocare l'accesso se ci ripensi.
situation: Un'app AI mi chiede l'accesso a e-mail, file o account
icon: "🔑"
order: 16
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18 luglio 2026"
steps:
  - "<strong>Fermati alla schermata «Consenti».</strong> Lì c'è scritto esattamente cosa potrà vedere o fare l'app («leggere le tue e-mail», «vedere i tuoi file»). Leggi la lista con calma — dopo che premi, l'app riceve davvero tutto quello che c'è scritto."
  - "Controlla <strong>chi ha fatto l'app</strong>: cercala tu nello store ufficiale (App Store, Google Play) o sul sito del produttore, guarda il nome dell'azienda, le recensioni e da quanto tempo esiste. Se non riesci a capire chi c'è dietro, non darle l'accesso."
  - "Confronta ciò che chiede con ciò che fa: <strong>dalle solo l'accesso che le serve</strong> per il compito che le chiedi. Un'app che ti riassume documenti non ha motivo di leggere le tue e-mail o i tuoi contatti."
  - "Scegli l'opzione <strong>più limitata</strong> quando c'è: «solo questo file/cartella», «solo lettura», «solo mentre uso l'app» — non «accesso a tutto l'account»."
  - "Hai già premuto «Consenti» e ci ripensi? <strong>Revoca l'accesso</strong>: per Google vai su <strong>myaccount.google.com/connections</strong>, per Microsoft nelle impostazioni dell'account alla voce «App e servizi», per Facebook in Impostazioni → «App e siti web». Togli l'app dalla lista — l'accesso si interrompe."
donts:
  - "Non dare l'accesso «a tutto» solo per fare prima — puoi sempre tornare e aggiungere permessi più tardi, se serve davvero."
  - "Non installare app AI dalle pubblicità o da link ricevuti nei messaggi — cercale tu, col loro nome, nello store ufficiale."
  - "Non scrivere la password dell'e-mail o della banca direttamente dentro un'app AI. La richiesta di accesso fatta bene ti porta sulla pagina ufficiale Google/Microsoft, che ti mostra che accesso stai dando — non ti chiede la password nell'app."
  - "Non collegare l'account di lavoro (l'e-mail aziendale, i documenti dei clienti) senza prima chiedere al team IT."
recognize:
  - "<strong>Chiede troppo per quello che fa:</strong> un «generatore di foto» che vuole l'accesso a e-mail e contatti non ha una buona ragione."
  - "Un produttore che non trovi da nessuna parte: sito senza contatti, app comparsa da poco, recensioni scarse o che sembrano copiate."
  - "<strong>Ti mette fretta:</strong> «concedi l'accesso per continuare», offerte «solo per oggi», finestre che tornano con insistenza finché non premi «Consenti»."
  - "Imita un'app conosciuta: nome quasi identico, logo somigliante, ma un altro produttore."
report:
  - channel: "Lo store di app (Google Play / App Store)"
    detail: "Segnala l'app che chiede accessi ingiustificati o che ne imita un'altra, così non fa danni a qualcun altro."
  - channel: "CSIRT Italia (ACN)"
    detail: "Se hai dato l'accesso a un'app sospetta, puoi segnalare l'accaduto all'Agenzia per la Cybersicurezza Nazionale."
    url: "https://segnalazioni.acn.gov.it"
  - channel: "Il team IT dell'azienda"
    detail: "Se si tratta dell'account o del dispositivo di lavoro, avvisa l'IT prima di dare l'accesso — o subito dopo averlo dato."
sources:
  - label: "Google — app di terze parti con accesso al tuo account"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — app e servizi che possono accedere ai tuoi dati"
    url: "https://account.live.com/consent/Manage"
  - label: "OpenAI — il programma di sicurezza per app e agenti AI"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "CSIRT Italia (ACN) — buone pratiche di sicurezza"
    url: "https://www.acn.gov.it/portale/csirt-italia"
---

**Prima di tutto: respira.** La schermata «Consenti l'accesso» è esattamente il momento in cui il controllo ce l'hai tu — non è ancora successo niente. La regola è semplice: *chi ha fatto l'app e perché le serve così tanto*. E se hai già premuto, l'accesso si può revocare in qualsiasi momento, in due minuti, dalle impostazioni dell'account.
