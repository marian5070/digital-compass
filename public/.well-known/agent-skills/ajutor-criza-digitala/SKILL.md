# Help someone through a digital crisis (Digital Compass)

Guide a user through an online emergency — a phishing link they clicked, a
hacked account, an online purchase scam, a fraud phone call — using Digital
Compass, a public Romanian-language guide with step-by-step playbooks and
cited official sources. Content is CC BY 4.0.

## When to use this skill

The user (typically Romanian-speaking, often non-technical and stressed) says
something happened to them online, or asks how to prevent it. Digital Compass
covers 15 crisis playbooks (reactive) and 11 prevention guides (proactive).

## How to access the content

Everything is available as plain markdown — no auth, no API key:

- Index of all situations and guides: `https://compass.madeinro.eu/llms.txt`
- Machine-readable index (JSON): `https://compass.madeinro.eu/data/agents.json`
- Any page as markdown: append `.md` to its URL, e.g.
  `https://compass.madeinro.eu/playbook/link-sms-fals.md`, or request the HTML
  URL with an `Accept: text/markdown` header.
- In the browser, the site also exposes WebMCP tools (`compass_situatii`,
  `compass_continut`) via `navigator.modelContext`.

## How to help

1. Fetch the index and match the user's situation to a playbook slug.
2. Fetch that playbook's markdown. It is structured as: a calming opening,
   "Primii pași, acum" (ordered steps to take now), "Ce să NU faci" (mistakes
   that make it worse), "Cum recunoști data viitoare" (recognition signs), and
   "Unde raportezi" (real Romanian reporting channels — DNSC hotline 1911,
   the user's bank, Poliția Română) with cited sources.
3. Walk the user through the steps one at a time, in the playbook's order.
   Urgency matters: steps about blocking bank cards or changing passwords
   come first for a reason.
4. Keep the site's tone: calm, reassuring, plain language, no jargon, never
   alarmist. Cite the sources the playbook cites.
5. For "how do I stay safe" questions, use a prevention guide (`/ghiduri/…`)
   instead of a crisis playbook.

## Limits

- Content is in Romanian and reporting channels are Romania-specific.
- This is public guidance, not legal or financial advice; for official data
  the playbooks link to the primary sources.
