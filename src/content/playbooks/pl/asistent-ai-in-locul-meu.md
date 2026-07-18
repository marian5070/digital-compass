---
title: Asystent AI chce coś zrobić za mnie — wysłać, kupić, usunąć. Pozwolić mu?
summary: Asystent AI prosi o zgodę na wysłanie wiadomości, wykonanie płatności lub usunięcie czegoś — albo już to zrobił. Oto jak zatwierdzać bezpiecznie i co zrobić, jeśli się pomylił.
situation: Asystent AI chce coś za mnie wysłać, kupić lub usunąć
icon: "🤖"
order: 18
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18 lipca 2026"
steps:
  - "<strong>Przeczytaj dokładnie, co chce zrobić</strong>, zanim zatwierdzisz: do kogo wysyła, jaką kwotę płaci, jaki plik usuwa. Zatwierdź tylko wtedy, gdy sam, własną ręką, zrobiłbyś dokładnie to samo."
  - "Zostaw włączone <strong>ręczne zatwierdzanie</strong> („zapytaj mnie przed”) dla wysyłania, płatności i usuwania. Nie przełączaj na „zatwierdzanie automatyczne”, żeby pozbyć się pytań — pytania to twoja siatka bezpieczeństwa."
  - "Przy zakupach i płatnościach dawaj asystentowi <strong>jak najmniej</strong>: kartę z niskim limitem albo kartę wirtualną, nie główną kartę i nie dostęp do całego konta bankowego."
  - "To, co <strong>nieodwracalne, zostaje przy tobie</strong>: trwałe usunięcia, wiadomości do wielu osób, duże płatności. Pozwól asystentowi przygotować (szkic, koszyk zakupów), ale ostatni przycisk naciśnij sam."
  - "Zrobił już coś nie tak? <strong>Ogranicz szkody teraz:</strong> sprawdź folder „Wysłane” i wycofaj wiadomość, jeśli się da, anuluj zamówienie, przy płatnościach zadzwoń do banku (oficjalny numer z odwrotu karty) — i odłącz asystenta od tej aplikacji, dopóki nie zrozumiesz, co się stało."
donts:
  - "Nie zatwierdzaj odruchowo wszystkiego, o co prosi — nawyk klikania zawsze „Tak” to właśnie ryzyko."
  - "Nie zostawiaj go bez nadzoru na całe godziny z prawem do wysyłania, kupowania lub usuwania."
  - "Nie dawaj mu hasła do banku ani głównej karty — używaj niskich limitów i kart wirtualnych."
  - "Nie zakładaj, że „on wie lepiej” — asystenta może oszukać e-mail albo strona, którą czyta (z ukrytymi w tekście instrukcjami), żeby zrobił coś innego, niż mu kazałeś."
recognize:
  - "<strong>Proponuje działanie, o które nie prosiłeś:</strong> nagle chce wysłać e-mail, otworzyć link albo „zweryfikować” konto."
  - "Chce wysłać dane osobowe lub pliki na adres albo stronę, których nie rozpoznajesz."
  - "Nalega na szybkie zatwierdzenie albo podsuwa, żebyś <strong>wyłączył potwierdzenia</strong> „dla większej wydajności”."
  - "Zachowanie zmienia się nagle po przeczytaniu wiadomości lub dokumentu od kogoś innego — możliwe, że ten tekst zawierał ukryte instrukcje dla asystenta."
report:
  - channel: "Twój bank"
    detail: "Jeśli wykonał płatność, której nie chciałeś — zadzwoń na oficjalny numer z odwrotu karty, poproś o zablokowanie karty i zapytaj o zwrot płatności."
  - channel: "Producent asystenta (OpenAI / Microsoft / Google)"
    detail: "Zgłoś z poziomu aplikacji dziwne działanie — firmy traktują to jako problem bezpieczeństwa."
  - channel: "CERT Polska"
    detail: "Jeśli nie wiesz, jaki krok zrobić, możesz zgłosić sprawę i poprosić o wskazówki przez formularz incydent.cert.pl."
    url: "https://incydent.cert.pl"
  - channel: "Policja"
    detail: "Jeśli straciłeś pieniądze, złóż zawiadomienie na najbliższym komisariacie. Zachowaj zrzuty ekranu z rozmową i zatwierdzonym działaniem."
    url: "https://cbzc.policja.gov.pl"
sources:
  - label: "OpenAI — program bezpieczeństwa dla aplikacji i agentów AI"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — aplikacje innych firm z dostępem do twojego konta"
    url: "https://myaccount.google.com/connections"
  - label: "CERT Polska — zgłaszanie incydentów"
    url: "https://cert.pl"
---

**Najpierw oddech.** Asystent, który prosi cię o zgodę, to system działający tak, jak powinien — to „na pewno?” istnieje właśnie dla ciebie. Prosta zasada: *zatwierdzasz tylko to, co zrobiłbyś sam*, a wszystko, co nieodwracalne, klikasz ty. A jeśli już coś poszło nie tak, w pierwszych minutach prawie zawsze da się ograniczyć szkody.
