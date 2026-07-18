---
title: Der KI-Assistent will etwas für mich tun — senden, kaufen, löschen. Lasse ich ihn?
summary: Der KI-Assistent bittet um Ihre Freigabe, eine Nachricht zu senden, eine Zahlung auszuführen oder etwas zu löschen — oder hat es schon getan. Hier steht, wie Sie sicher freigeben und was Sie tun, wenn er einen Fehler gemacht hat.
situation: Der KI-Assistent will für mich senden, kaufen oder löschen
icon: "🤖"
order: 18
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18. Juli 2026"
steps:
  - "<strong>Lesen Sie genau, was er tun will</strong>, bevor Sie freigeben: an wen er sendet, welchen Betrag er zahlt, welche Datei er löscht. Geben Sie nur frei, wenn Sie selbst, mit eigener Hand, genau dasselbe getan hätten."
  - "Lassen Sie die <strong>manuelle Bestätigung</strong> eingeschaltet („frag mich vorher“) für Senden, Zahlungen und Löschen. Schalten Sie nicht auf „automatisch freigeben“, um den Fragen zu entgehen — die Fragen sind Ihr Sicherheitsnetz."
  - "Geben Sie dem Assistenten bei Einkäufen und Zahlungen <strong>so wenig wie möglich</strong>: eine Karte mit niedrigem Limit oder eine virtuelle Karte, nicht die Hauptkarte und keinen Zugriff auf das ganze Bankkonto."
  - "Was <strong>unumkehrbar ist, bleibt bei Ihnen</strong>: endgültiges Löschen, Nachrichten an viele Menschen, große Zahlungen. Lassen Sie den Assistenten vorbereiten (Entwurf, Warenkorb), aber den letzten Knopf drücken Sie selbst."
  - "Hat er schon etwas Falsches getan? <strong>Begrenzen Sie jetzt den Schaden:</strong> Prüfen Sie den Ordner „Gesendet“ und rufen Sie die Nachricht zurück, wenn möglich, stornieren Sie die Bestellung, rufen Sie bei Zahlungen die Bank an (offizielle Nummer auf der Kartenrückseite) — und trennen Sie den Assistenten von der betreffenden App, bis Sie verstehen, was passiert ist."
donts:
  - "Geben Sie nicht aus Reflex alles frei, was er verlangt — die Gewohnheit, immer „Ja“ zu drücken, ist genau das Risiko."
  - "Lassen Sie ihn nicht stundenlang unbeaufsichtigt arbeiten, mit dem Recht, zu senden, zu kaufen oder zu löschen."
  - "Geben Sie ihm nicht Ihr Bank-Passwort oder die Hauptkarte — nutzen Sie niedrige Limits und virtuelle Karten."
  - "Gehen Sie nicht davon aus, dass er „es besser weiß“ — ein Assistent kann von einer E-Mail oder einer Seite, die er liest (mit versteckten Anweisungen im Text), dazu gebracht werden, etwas anderes zu tun, als Sie ihm aufgetragen haben."
recognize:
  - "<strong>Er schlägt eine Aktion vor, um die Sie nicht gebeten haben:</strong> Er will aus heiterem Himmel eine E-Mail senden, einen Link öffnen oder ein Konto „überprüfen“."
  - "Er will persönliche Daten oder Dateien an eine Adresse oder eine Website senden, die Sie nicht kennen."
  - "Er drängt auf schnelle Freigabe oder schlägt Ihnen vor, <strong>die Bestätigungen abzuschalten</strong> — „damit es effizienter ist“."
  - "Sein Verhalten ändert sich plötzlich, nachdem er eine Nachricht oder ein Dokument von jemand anderem gelesen hat — möglicherweise enthielt dieser Text versteckte Anweisungen für den Assistenten."
report:
  - channel: "Ihre Bank"
    detail: "Wenn er eine Zahlung ausgeführt hat, die Sie nicht wollten — rufen Sie die offizielle Nummer auf der Kartenrückseite an, lassen Sie die Karte sperren und fragen Sie nach der Rückbuchung."
  - channel: "Der Anbieter des Assistenten (OpenAI / Microsoft / Google)"
    detail: "Melden Sie die merkwürdige Aktion direkt aus der App — die Firmen behandeln das als Sicherheitsproblem."
  - channel: "BSI-Service-Center"
    detail: "Wenn Sie nicht wissen, welcher Schritt der nächste ist: Information und Orientierung für Verbraucherinnen und Verbraucher (Mo–Do 8–17 Uhr, Fr 8–16 Uhr, kostenlos)."
    phone: "0800 274 1000"
    url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/verbraucherinnen-und-verbraucher_node.html"
  - channel: "Polizei"
    detail: "Wenn Sie Geld verloren haben: Erstatten Sie Anzeige über die Onlinewache Ihres Bundeslandes oder bei jeder Polizeidienststelle. Bewahren Sie Screenshots der Unterhaltung und der Aktion auf."
    url: "https://portal.onlinewache.polizei.de"
sources:
  - label: "OpenAI — Sicherheitsprogramm für KI-Apps und -Agenten"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — Apps von Drittanbietern mit Zugriff auf Ihr Konto"
    url: "https://myaccount.google.com/connections"
  - label: "BSI — Informationen für Verbraucherinnen und Verbraucher"
    url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/verbraucherinnen-und-verbraucher_node.html"
---

**Erst mal: durchatmen.** Ein Assistent, der um Ihre Freigabe bittet, ist ein System, das richtig funktioniert — dieses „Sind Sie sicher?“ gibt es genau für Sie. Die einfache Regel: *Sie geben nur frei, was Sie selbst getan hätten*, und alles Unumkehrbare drücken Sie selbst. Und falls schon etwas schiefgelaufen ist: In den ersten Minuten lässt sich der Schaden fast immer begrenzen.
