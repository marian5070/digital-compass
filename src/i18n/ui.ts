import type { Lang } from '../lib/i18n-content';

// Toate textele de interfață (nu conținutul editorial — ăla stă în colecții).
// Sursa unică pentru ambele limbi; componentele citesc prin t(lang).

export const ui = {
  ro: {
    // Navigație + brand
    'nav.home': 'Acasă',
    'nav.start': 'Începe aici',
    'nav.guides': 'Ghiduri',
    'nav.why': 'De ce existăm',
    'nav.sources': 'Surse',
    'nav.aria': 'Navigare principală',
    'brand.aria': 'Digital Compass — acasă',

    // Footer
    'footer.tagline':
      'Cunoaștere publică, practică, pentru momentele de criză digitală. Nu diplome — claritate.',
    'footer.nav.aria': 'Navigare subsol',
    'footer.why': 'De ce existăm',
    'footer.sources': 'Surse & cum verificăm',
    'footer.emergency.title': 'În pericol acum?',
    'footer.emergency.line': 'Urgențe:',
    'footer.emergency.cyber': 'Incidente cibernetice (DNSC):',
    'footer.legal':
      'Proiect public, independent. Informația e orientativă, nu înlocuiește sfatul oficial al băncii, poliției sau autorităților.',

    // Carduri + liste
    'card.cta': 'Vezi ce ai de făcut',
    'sources.reviewed': 'Informație verificată ultima dată:',
    'sources.tellus': 'Dacă vezi ceva neactualizat, spune-ne.',

    // Pagina de playbook
    'pb.back': '← Toate situațiile',
    'pb.urgent': 'Urgent — acționează acum',
    'pb.breathe.aria': 'Întâi, respiră',
    'pb.steps': 'Primii pași, acum',
    'pb.donts': 'Ce să NU faci',
    'pb.recognize': 'Cum îți dai seama data viitoare',
    'pb.report': 'Unde raportezi',
    'pb.sources': 'Surse',
    'pb.disclaimer':
      'Acest ghid e orientativ și te ajută să acționezi rapid. Nu înlocuiește instrucțiunile oficiale ale băncii tale, ale poliției sau ale autorităților. La dubii, sună la numerele de mai sus.',

    // Pagina de ghid
    'guide.back': '← Toate ghidurile',
    'guide.eyebrow': 'Ghid de siguranță',
    'guide.good': 'Semne bune — la astea te uiți',
    'guide.bad': 'Semne de alarmă',
    'guide.related.label': 'Ai pățit deja?',
    'guide.related.cta': 'Vezi ce ai de făcut →',

    // 404
    'notfound.title': 'Pagina nu a fost găsită',
    'notfound.desc':
      'Pagina căutată nu există. Întoarce-te la situații și alege ce ți se întâmplă.',
    'notfound.h1': 'Aici nu e nimic. Dar nu te-ai rătăcit de tot.',
    'notfound.lead':
      'Pagina pe care o cauți nu există sau s-a mutat. Hai înapoi la situații — alege ce ți se întâmplă și îți spunem ce ai de făcut.',
    'notfound.cta': 'Înapoi la situații',

    // Homepage
    'home.eyebrow': 'Ghid public · în română',
    'home.h1': 'Ți s-a întâmplat ceva online? Respiră. Îți spunem exact ce ai de făcut.',
    'home.lead':
      'Fără jargon, fără diplome, fără să te sperie. Doar pași clari pentru momentele în care lumea digitală te prinde pe picior greșit — cu surse pe care le poți verifica.',
    'home.cta': 'Alege situația ta ↓',
    'home.cta.start': 'Ești nou aici sau ești o echipă? Începe aici →',
    'home.situations.h2': 'Care e situația ta acum?',
    'home.situations.lead':
      'Alege ce ți se întâmplă. Fiecare ghid începe cu primii pași, în ordine.',
    'home.prevent.eyebrow': 'Înainte să pățești',
    'home.prevent.h2': 'Vrei să eviți de la început?',
    'home.prevent.lead':
      'Ghiduri proactive: la ce te uiți înainte să plătești, semnele de alarmă și regulile simple care te feresc.',
    'home.prevent.cta': 'Vezi ghidurile →',
    'home.why.eyebrow': 'De ce existăm',
    'home.why.h2': 'Nu oferim diplome. Oferim claritate.',
    'home.why.p':
      'Se vorbește mult despre digitalizare, securitate și „competențe digitale", dar prea rar cineva îi explică omului obișnuit, pe limba lui, ce să facă atunci când chiar are o problemă. Noi asta acoperim: golul dintre discurs și un drum practic, public și accesibil.',
    'home.why.cta': 'Vezi ce oferim și ce nu oferim →',
    'home.title': 'Digital Compass',
    'home.desc':
      'Ghid public, practic, în română, pentru momentele de criză digitală: link fals, cont spart, țeapă online, apel de înșelăciune. Pași clari, surse verificate. Nu diplome — claritate.',

    // Index ghiduri
    'guides.title': 'Ghiduri de siguranță',
    'guides.desc':
      'Ghiduri proactive de siguranță digitală, în română: email și mesaje, conturi și parole, cumpărături și plăți, siguranță la birou. La ce te uiți înainte să pățești. Nu diplome — claritate.',
    'guides.eyebrow': 'Prevenție',
    'guides.h1': 'Înainte să pățești ceva',
    'guides.lead':
      'Playbook-urile de pe pagina principală te ajută după ce s-a întâmplat ceva. Ghidurile astea te ajută înainte: la ce te uiți, ce te avertizează și regulile simple care te feresc.',

    // Comutator de limbă
    'lang.switch': 'English version',
    'lang.switch.aria': 'Switch to English',
  },
  en: {
    'nav.home': 'Home',
    'nav.start': 'Start here',
    'nav.guides': 'Guides',
    'nav.why': 'Why we exist',
    'nav.sources': 'Sources',
    'nav.aria': 'Main navigation',
    'brand.aria': 'Digital Compass — home',

    'footer.tagline':
      'Public, practical knowledge for digital crisis moments. No diplomas — clarity.',
    'footer.nav.aria': 'Footer navigation',
    'footer.why': 'Why we exist',
    'footer.sources': 'Sources & how we verify',
    'footer.emergency.title': 'In danger right now?',
    'footer.emergency.line': 'Emergencies:',
    'footer.emergency.cyber': 'Cyber incidents (DNSC):',
    'footer.legal':
      'A public, independent project. This information is guidance only — it does not replace official advice from your bank, the police or the authorities.',

    'card.cta': 'See what to do',
    'sources.reviewed': 'Last reviewed:',
    'sources.tellus': 'Spotted something outdated? Tell us.',

    'pb.back': '← All situations',
    'pb.urgent': 'Urgent — act now',
    'pb.breathe.aria': 'First, breathe',
    'pb.steps': 'First steps, right now',
    'pb.donts': 'What NOT to do',
    'pb.recognize': 'How to spot it next time',
    'pb.report': 'Where to report (Romania)',
    'pb.sources': 'Sources',
    'pb.disclaimer':
      'This guide is meant to help you act fast. It does not replace official instructions from your bank, the police or the authorities. When in doubt, call the numbers above.',

    'guide.back': '← All guides',
    'guide.eyebrow': 'Safety guide',
    'guide.good': 'Good signs — look for these',
    'guide.bad': 'Warning signs',
    'guide.related.label': 'Already happened?',
    'guide.related.cta': 'See what to do →',

    'notfound.title': 'Page not found',
    'notfound.desc':
      'The page you are looking for does not exist. Go back to the situations and pick what is happening to you.',
    'notfound.h1': 'Nothing here. But you are not completely lost.',
    'notfound.lead':
      'The page you are looking for does not exist or has moved. Head back to the situations — pick what is happening to you and we will tell you what to do.',
    'notfound.cta': 'Back to situations',

    'home.eyebrow': 'Public guide · for Romania',
    'home.h1': 'Something happened to you online? Breathe. We will tell you exactly what to do.',
    'home.lead':
      'No jargon, no diplomas, no scare tactics. Just clear steps for the moments when the digital world catches you off guard — with sources you can verify.',
    'home.cta': 'Pick your situation ↓',
    'home.cta.start': 'New here, or part of a team? Start here →',
    'home.situations.h2': 'What is happening to you right now?',
    'home.situations.lead':
      'Pick what is happening. Every guide starts with the first steps, in order.',
    'home.prevent.eyebrow': 'Before it happens',
    'home.prevent.h2': 'Want to avoid it in the first place?',
    'home.prevent.lead':
      'Proactive guides: what to check before you pay, the warning signs, and the simple rules that keep you safe.',
    'home.prevent.cta': 'See the guides →',
    'home.why.eyebrow': 'Why we exist',
    'home.why.h2': 'We do not offer diplomas. We offer clarity.',
    'home.why.p':
      'There is a lot of talk about digitalisation, security and "digital skills", but far too rarely does anyone explain to an ordinary person, in plain words, what to do when they actually have a problem. That is the gap we cover: between the talk and a practical, public, accessible path.',
    'home.why.cta': 'See what we offer — and what we do not →',
    'home.title': 'Digital Compass',
    'home.desc':
      'A public, practical digital-safety guide for Romania, in English: fake links, hacked accounts, online purchase scams, fraud calls. Clear steps, verified sources, real Romanian reporting channels. No diplomas — clarity.',

    'guides.title': 'Safety guides',
    'guides.desc':
      'Proactive digital-safety guides for Romania: email and messages, accounts and passwords, online shopping and payments, safety at work. What to check before something happens. No diplomas — clarity.',
    'guides.eyebrow': 'Prevention',
    'guides.h1': 'Before something happens to you',
    'guides.lead':
      'The playbooks on the home page help you after something has happened. These guides help you before: what to look at, what should alarm you, and the simple rules that keep you safe.',

    'lang.switch': 'Versiunea în română',
    'lang.switch.aria': 'Comută la română',
  },
} as const;

export type UiKey = keyof (typeof ui)['ro'];

export function t(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui.ro[key];
}
