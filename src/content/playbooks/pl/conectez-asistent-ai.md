---
title: Chcę podłączyć asystenta AI do innych aplikacji. Co sprawdzić najpierw?
summary: Chcesz połączyć asystenta AI (ChatGPT, Copilot, Gemini itp.) z pocztą, plikami lub kalendarzem przez „konektor” albo rozszerzenie. Oto jak wybierać tylko zaufane konektory i dawać im jak najmniej dostępu.
situation: Chcę połączyć asystenta AI z pocztą, plikami lub kalendarzem
icon: "🔌"
order: 17
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18 lipca 2026"
steps:
  - "Używaj tylko <strong>konektorów z oficjalnej listy</strong> asystenta, zrobionych przez tę firmę albo przez producenta, którego znasz. Konektor to małe rozszerzenie, które łączy asystenta AI z innymi aplikacjami (technologia, która za tym stoi, nazywa się MCP, Model Context Protocol) — i, jak każde rozszerzenie, może być stworzone także przez osoby o złych zamiarach."
  - "<strong>Podłączaj po kolei, tylko to, czego używasz.</strong> Nie łącz poczty, plików i kalendarza „na zapas” — każde dodatkowe połączenie to więcej danych, do których sięga asystent."
  - "Pomyśl, <strong>co jest na koncie, które podłączasz</strong>: w poczcie leżą resetowania haseł, umowy, faktury. Jeśli są tam dane wrażliwe albo dane klientów, nie podłączaj go — albo użyj osobnego konta, tylko do tego."
  - "Zostaw włączone <strong>ręczne zatwierdzanie</strong> („zapytaj mnie, zanim coś wyślesz lub usuniesz”). Podłączony asystent czyta też wiadomości i dokumenty przysłane przez innych — a niektóre mogą zawierać ukryte instrukcje, które go oszukają. Twoje potwierdzenie to siatka bezpieczeństwa; zobacz też poradnik o działaniach, które asystent wykonuje za ciebie."
  - "<strong>Rób porządki regularnie:</strong> wejdź na myaccount.google.com/connections (Google) albo w ustawienia konta Microsoft w sekcji „Aplikacje i usługi” i usuń konektory oraz aplikacje, których już nie używasz."
donts:
  - "Nie instaluj konektorów znalezionych w reklamach, na forach ani przysłanych w wiadomościach — używaj tylko oficjalnej listy w aplikacji asystenta."
  - "Nie podłączaj firmowej poczty ani plików z danymi klientów bez zgody zespołu IT."
  - "Nie wpisuj hasła do konta bezpośrednio w konektorze — prawidłowe łączenie przechodzi przez oficjalną stronę Google/Microsoft, która pokazuje dokładnie, jaki dostęp dajesz."
  - "Nie zostawiaj podłączonych aplikacji, których już nie używasz — zapomniany dostęp to zapomniane ryzyko."
recognize:
  - "<strong>Prosi o więcej, niż obiecuje:</strong> konektor „tylko do odczytu kalendarza”, który chce też wysyłać e-maile w twoim imieniu."
  - "Producent, którego nigdzie nie znajdziesz: bez strony, bez danych kontaktowych, pojawił się wczoraj."
  - "Jest agresywnie promowany — „konektor, który zrobi za ciebie wszystko”, natarczywe reklamy, prywatne wiadomości z poleceniem."
  - "<strong>Po podłączeniu asystent robi rzeczy nieoczekiwane</strong> — wysyła, udostępnia albo wyszukuje coś, o co nie prosiłeś. Usuń konektor natychmiast."
report:
  - channel: "Producent asystenta (OpenAI / Microsoft / Google)"
    detail: "Zgłoś z poziomu aplikacji konektor, który zachowuje się podejrzanie — firmy traktują to jako problem bezpieczeństwa."
  - channel: "CERT Polska"
    detail: "Jeśli nie wiesz, jaki krok zrobić, możesz zgłosić sprawę i poprosić o wskazówki przez formularz incydent.cert.pl."
    url: "https://incydent.cert.pl"
  - channel: "Zespół IT twojej firmy"
    detail: "Jeśli podłączyłeś konto służbowe, powiadom IT — może sprawdzić i cofnąć dostęp centralnie."
sources:
  - label: "OpenAI — program bezpieczeństwa dla aplikacji i agentów AI"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — aplikacje innych firm z dostępem do twojego konta"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — aplikacje i usługi z dostępem do twoich danych"
    url: "https://account.live.com/consent/Manage"
  - label: "CERT Polska — zgłaszanie incydentów"
    url: "https://cert.pl"
---

**Najpierw oddech.** Samo podłączanie nie jest złe — właśnie to robi z asystenta naprawdę użyteczne narzędzie. Myśl o konektorach jak o *kluczach do domu*: dajesz je tylko komuś zaufanemu, tylko do pokoju, którego potrzebuje, i zawsze możesz je odebrać w ustawieniach konta.
