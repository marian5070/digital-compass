---
title: Aplikacja AI prosi o dostęp do kont lub dokumentów. Co sprawdzić?
summary: Aplikacja lub asystent AI prosi o pozwolenie na dostęp do twojej poczty, plików, zdjęć lub kontaktów. Oto co sprawdzić, zanim klikniesz „Zezwól” — i jak cofnąć dostęp, jeśli żałujesz.
situation: Aplikacja AI prosi o dostęp do poczty, plików lub kont
icon: "🔑"
order: 16
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18 lipca 2026"
steps:
  - "<strong>Zatrzymaj się na ekranie „Zezwól”.</strong> Tam jest napisane dokładnie, co aplikacja będzie mogła widzieć lub robić („czytać twoje e-maile”, „widzieć twoje pliki”). Przeczytaj tę listę spokojnie — po kliknięciu aplikacja naprawdę dostaje wszystko, co tam napisano."
  - "Sprawdź, <strong>kto zrobił aplikację</strong>: wyszukaj ją samodzielnie w oficjalnym sklepie (App Store, Google Play) albo na stronie producenta, zobacz nazwę firmy, opinie i od kiedy istnieje. Jeśli nie wiesz, kto za nią stoi, nie dawaj jej dostępu."
  - "Porównaj, o co prosi, z tym, co robi: <strong>daj jej tylko taki dostęp, jakiego potrzebuje</strong> do zadania, którego od niej oczekujesz. Aplikacja, która streszcza dokumenty, nie ma powodu czytać twoich e-maili ani kontaktów."
  - "Wybieraj wariant <strong>najbardziej ograniczony</strong>, gdy jest dostępny: „tylko ten plik/folder”, „tylko odczyt”, „tylko podczas używania aplikacji” — a nie „dostęp do całego konta”."
  - "Kliknąłeś już „Zezwól” i żałujesz? <strong>Cofnij dostęp</strong>: w Google wejdź na <strong>myaccount.google.com/connections</strong>, w Microsoft w ustawieniach konta w sekcji „Aplikacje i usługi”, na Facebooku w Ustawienia → „Aplikacje i witryny”. Usuń aplikację z listy — dostęp się kończy."
donts:
  - "Nie dawaj dostępu „do wszystkiego” tylko po to, żeby było szybciej — możesz wrócić i dodać uprawnienia później, jeśli naprawdę będą potrzebne."
  - "Nie instaluj aplikacji AI z reklam ani z linków przysłanych w wiadomościach — wyszukaj je samodzielnie, po nazwie, w oficjalnym sklepie."
  - "Nie wpisuj hasła do poczty ani do banku bezpośrednio w aplikacji AI. Prawidłowa prośba o dostęp przenosi cię na oficjalną stronę Google/Microsoft, która pokazuje, jaki dostęp dajesz — nie prosi o hasło w aplikacji."
  - "Nie podłączaj konta służbowego (firmowej poczty, dokumentów klientów) bez zapytania najpierw zespołu IT."
recognize:
  - "<strong>Prosi o znacznie więcej, niż potrzebuje:</strong> „generator obrazków”, który chce dostępu do e-maili i kontaktów, nie ma dobrego powodu."
  - "Producent, którego nigdzie nie znajdziesz: strona bez danych kontaktowych, aplikacja pojawiła się niedawno, opinii mało albo brzmią jak skopiowane."
  - "<strong>Pogania cię:</strong> „udziel dostępu, aby kontynuować”, oferty „tylko dziś”, okienka wracające natarczywie, aż klikniesz „Zezwól”."
  - "Podszywa się pod znaną aplikację: prawie identyczna nazwa, podobne logo, ale inny producent."
report:
  - channel: "Sklep z aplikacjami (Google Play / App Store)"
    detail: "Zgłoś aplikację, która prosi o nieuzasadniony dostęp albo podszywa się pod inną, żeby nie skrzywdziła kogoś jeszcze."
  - channel: "CERT Polska"
    detail: "Jeśli nie wiesz, jaki krok zrobić, możesz zgłosić sprawę i poprosić o wskazówki przez formularz incydent.cert.pl."
    url: "https://incydent.cert.pl"
  - channel: "Zespół IT twojej firmy"
    detail: "Jeśli chodzi o konto lub urządzenie służbowe, powiadom IT, zanim dasz dostęp — albo po tym, jak go dałeś."
sources:
  - label: "Google — aplikacje innych firm z dostępem do twojego konta"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — aplikacje i usługi z dostępem do twoich danych"
    url: "https://account.live.com/consent/Manage"
  - label: "OpenAI — program bezpieczeństwa dla aplikacji i agentów AI"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "CERT Polska — zgłaszanie incydentów"
    url: "https://cert.pl"
---

**Najpierw oddech.** Ekran „Zezwól na dostęp” to dokładnie ten moment, w którym kontrola należy do ciebie — jeszcze nic się nie stało. Zasada jest prosta: *kto zrobił aplikację i po co jej aż tyle*. A jeśli już kliknąłeś, dostęp zawsze można cofnąć — w dwie minuty, w ustawieniach konta.
