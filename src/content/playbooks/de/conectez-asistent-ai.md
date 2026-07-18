---
title: Ich möchte den KI-Assistenten mit anderen Apps verbinden. Was prüfe ich vorher?
summary: Sie möchten den KI-Assistenten (ChatGPT, Copilot, Gemini usw.) mit E-Mail, Dateien oder Kalender verbinden — über einen „Konnektor“ oder eine Erweiterung. Hier steht, wie Sie nur vertrauenswürdige Konnektoren wählen und ihnen so wenig Zugriff wie möglich geben.
situation: Ich möchte den KI-Assistenten mit E-Mail, Dateien oder Kalender verbinden
icon: "🔌"
order: 17
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18. Juli 2026"
steps:
  - "Nutzen Sie nur <strong>Konnektoren aus der offiziellen Liste</strong> des Assistenten, gemacht von der jeweiligen Firma oder von einem Hersteller, den Sie kennen. Ein Konnektor ist eine kleine Erweiterung, die den KI-Assistenten mit anderen Apps verbindet (die Technik dahinter heißt MCP, Model Context Protocol) — und wie jede Erweiterung kann sie auch von Menschen mit bösen Absichten gebaut werden."
  - "<strong>Verbinden Sie eines nach dem anderen, nur was Sie nutzen.</strong> Verknüpfen Sie nicht E-Mail, Dateien und Kalender „auf Vorrat“ — jede zusätzliche Verbindung bedeutet mehr Daten, an die der Assistent herankommt."
  - "Überlegen Sie, <strong>was in dem Konto steckt, das Sie verbinden</strong>: Im E-Mail-Postfach liegen Passwort-Zurücksetzungen, Verträge, Rechnungen. Sind dort sensible Daten oder Kundendaten, verbinden Sie es nicht — oder nutzen Sie ein separates Konto, nur dafür."
  - "Lassen Sie die <strong>manuelle Bestätigung</strong> eingeschaltet („frag mich, bevor du etwas sendest oder löschst“). Ein verbundener Assistent liest auch Nachrichten oder Dokumente, die von anderen kommen — und manche können versteckte Anweisungen enthalten, die ihn austricksen. Ihre Bestätigung ist das Sicherheitsnetz; sehen Sie sich auch das Playbook zu Aktionen an, die der Assistent für Sie ausführt."
  - "<strong>Räumen Sie regelmäßig auf:</strong> Gehen Sie auf myaccount.google.com/connections (Google) oder in die Microsoft-Kontoeinstellungen unter „Apps und Dienste“ und entfernen Sie Konnektoren und Apps, die Sie nicht mehr nutzen."
donts:
  - "Installieren Sie keine Konnektoren aus Werbung, aus Foren oder aus Nachrichten — nutzen Sie nur die offizielle Liste in der App des Assistenten."
  - "Verbinden Sie die Firmen-E-Mail oder Dateien mit Kundendaten nicht ohne Zustimmung der IT-Abteilung."
  - "Tippen Sie das Passwort Ihres Kontos nie direkt in einen Konnektor ein — die korrekte Verbindung läuft über die offizielle Google-/Microsoft-Seite, die Ihnen genau zeigt, welchen Zugriff Sie geben."
  - "Lassen Sie keine Apps verbunden, die Sie nicht mehr nutzen — vergessener Zugriff ist vergessenes Risiko."
recognize:
  - "<strong>Er verlangt mehr, als er verspricht:</strong> ein Konnektor „nur zum Lesen des Kalenders“, der auch E-Mails in Ihrem Namen senden will."
  - "Ein Hersteller, den Sie nirgends finden: keine Website, keine Kontaktdaten, erst gestern aufgetaucht."
  - "Er wird aggressiv beworben — „der Konnektor, der alles für Sie erledigt“, aufdringliche Werbung, private Nachrichten, die ihn empfehlen."
  - "<strong>Nach dem Verbinden tut der Assistent unerwartete Dinge</strong> — er sendet, teilt oder sucht Dinge, um die Sie ihn nicht gebeten haben. Entfernen Sie den Konnektor sofort."
report:
  - channel: "Der Anbieter des Assistenten (OpenAI / Microsoft / Google)"
    detail: "Melden Sie den Konnektor, der sich verdächtig verhält, direkt aus der App — die Firmen behandeln das als Sicherheitsproblem."
  - channel: "BSI-Service-Center"
    detail: "Wenn Sie nicht wissen, welcher Schritt der nächste ist: Information und Orientierung für Verbraucherinnen und Verbraucher (Mo–Do 8–17 Uhr, Fr 8–16 Uhr, kostenlos)."
    phone: "0800 274 1000"
    url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/verbraucherinnen-und-verbraucher_node.html"
  - channel: "IT-Abteilung der Firma"
    detail: "Haben Sie ein Konto von der Arbeit verbunden, informieren Sie die IT — sie kann den Zugriff zentral prüfen und widerrufen."
sources:
  - label: "OpenAI — Sicherheitsprogramm für KI-Apps und -Agenten"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — Apps von Drittanbietern mit Zugriff auf Ihr Konto"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — Apps und Dienste, die auf Ihre Daten zugreifen können"
    url: "https://account.live.com/consent/Manage"
  - label: "BSI — Informationen für Verbraucherinnen und Verbraucher"
    url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/verbraucherinnen-und-verbraucher_node.html"
---

**Erst mal: durchatmen.** Verbinden ist nicht schlecht an sich — genau das macht einen Assistenten wirklich nützlich. Denken Sie bei Konnektoren an die *Schlüssel Ihrer Wohnung*: Sie geben sie nur jemandem, dem Sie vertrauen, nur für das Zimmer, das er braucht — und Sie können sie jederzeit in den Kontoeinstellungen zurücknehmen.
