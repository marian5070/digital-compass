import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colecția „playbooks" — fiecare fișier .md e o situație de criză.
// Structura e în frontmatter (pași, ce să NU faci, raportare) ca să avem un
// tratament vizual consistent; corpul .md ține fraza care calmează („Întâi, respiră").
const playbooks = defineCollection({
  loader: glob({ base: './src/content/playbooks', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(), // întrebare, în limbaj de om
    summary: z.string(), // meta description + rezumat
    situation: z.string(), // cum sună pe cardul din Home
    icon: z.string().default('•'),
    order: z.number().default(0),
    severity: z.enum(['urgent', 'important']).default('important'),
    // Categoria de use case — grupează situațiile pe Home (triaj, nu listă plată).
    // Valorile sunt slug-uri stabile, identice în toate limbile; etichetele UI se traduc.
    category: z.enum([
      'cumparaturi-bani',
      'conturi-dispozitive',
      'mesaje-apeluri',
      'oameni-manipulare',
      'ai-asistenti',
    ]),
    // Cui i se adresează: individ (default), organizație, sau ambele.
    audience: z.enum(['individ', 'organizatie', 'ambele']).default('individ'),
    lastReviewed: z.string(),

    // Primii pași (acum) — acționabili, în ordine.
    steps: z.array(z.string()).min(1),
    // Ce să NU faci — greșelile care agravează.
    donts: z.array(z.string()).default([]),
    // Cum recunoști data viitoare — semne concrete.
    recognize: z.array(z.string()).default([]),

    // Unde raportezi — canale reale, cu telefon/link când există.
    report: z
      .array(
        z.object({
          channel: z.string(),
          detail: z.string(),
          phone: z.string().optional(),
          url: z.string().url().optional(),
        })
      )
      .default([]),

    // Surse citate.
    sources: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

// Colecția „ghiduri" — conținut PROACTIV (prevenție): la ce te uiți înainte să pățești.
// Pereche cu playbook-urile reactive (ex. „cum cumperi în siguranță" ↔ „am fost înșelat").
const ghiduri = defineCollection({
  loader: glob({ base: './src/content/ghiduri', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    topic: z.string(), // subtitlul de pe card
    // Categoria tematică (grupează ghidurile pe pagina /ghiduri).
    category: z.enum([
      'email-mesaje',
      'conturi-parole',
      'dispozitive',
      'cumparaturi-plati',
      'la-birou',
    ]),
    icon: z.string().default('•'),
    order: z.number().default(0),
    // Cui i se adresează: individ (default), organizație, sau ambele.
    audience: z.enum(['individ', 'organizatie', 'ambele']).default('individ'),
    lastReviewed: z.string(),
    // Semne bune / de încredere.
    greenFlags: z.array(z.string()).default([]),
    // Semne de alarmă.
    redFlags: z.array(z.string()).default([]),
    // Reguli / pași înainte să continui.
    rules: z.array(z.string()).default([]),
    // Titlul secțiunii de pași (checklist „reguli" vs tutorial „pornește în X pași").
    rulesTitle: z.string().default('Reguli simple înainte să continui'),
    // Slug-ul playbook-ului reactiv pereche (dacă ai pățit deja).
    relatedPlaybook: z.string().optional(),
    sources: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

export const collections = { playbooks, ghiduri };
