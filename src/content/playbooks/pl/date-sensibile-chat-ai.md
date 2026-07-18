---
title: Wkleiłem wrażliwe dane do czatu AI. Co teraz?
summary: Wkleiłeś do czatu AI hasło, dane karty, dokument albo dane klientów — i teraz żałujesz. Oto jak ograniczyć szkody, krok po kroku, i kogo powiadomić.
situation: Wkleiłem dane osobowe lub służbowe do czatu AI
icon: "💬"
order: 19
severity: urgent
category: ai-asistenti
audience: ambele
lastReviewed: "18 lipca 2026"
steps:
  - "<strong>Najpierw zrób inwentarz:</strong> co dokładnie tam trafiło — hasło? dane karty? numer PESEL albo zdjęcie dokumentu? dane klientów? Zapisz dokładnie, bo od tego zależą kolejne kroki."
  - "<strong>Traktuj dane jak ujawnione</strong> i działaj po kolei: hasło — zmień je teraz i włącz weryfikację dwuetapową; karta — zadzwoń do banku na numer z odwrotu karty i poproś o zablokowanie lub wymianę; dokument/PESEL — zastrzeż numer PESEL (np. w aplikacji mObywatel) i w najbliższym czasie uważaj na konta lub kredyty zakładane na twoje nazwisko."
  - "Dopiero potem <strong>usuń rozmowę</strong> z historii aplikacji i wyłącz w ustawieniach używanie rozmów do trenowania (większość aplikacji AI ma taką opcję). Usunięcie ogranicza, ale nie cofa — dlatego krok z hasłami i kartą jest pierwszy."
  - "Jeśli to były <strong>dane z pracy</strong> (klienci, umowy, dane finansowe): powiadom natychmiast zespół IT albo osobę odpowiedzialną za ochronę danych. Nie czekaj — firma ma ustawowe terminy zgłaszania i może ograniczyć szkody tylko wtedy, gdy dowie się szybko."
  - "Jeśli to były <strong>dane kogoś innego</strong> (klienta, znajomego, rodziny): powiedz tej osobie, żeby też mogła zmienić hasło albo pilnować swojego konta, jeśli trzeba."
donts:
  - "Nie uspokajaj się, że „to tylko czat” — to, co napisałeś, trafiło już na serwery firmy; pracuj z założeniem, że nie wróci."
  - "Nie kontynuuj rozmowy z jeszcze większą liczbą szczegółów, żeby „naprawić” — dokładasz ekspozycji, nie zmniejszasz jej."
  - "Nie ukrywaj incydentu przed firmą, jeśli to były dane służbowe — to zwłoka pogarsza sprawę, nie sama pomyłka."
  - "Nie płać za „usługi”, które obiecują usunięcie twoich danych z AI — nie mają jak; usuwanie działa tylko przez oficjalne ustawienia aplikacji."
recognize:
  - "Zdarza się prawie zawsze <strong>w pośpiechu</strong>: wklejasz cały e-mail, umowę albo tabelę „do streszczenia”, razem z prawdziwymi danymi w środku."
  - "Wysyłasz <strong>zdjęcie całego dokumentu</strong>, prosząc o pomoc z formularzem, zamiast zakryć dane, które nie są potrzebne."
  - "<strong>Nie tylko to, co wklejasz sam:</strong> jeśli asystent jest podłączony do poczty lub plików, sam dociera do wrażliwych danych — zobacz poradnik o podłączaniu asystenta do innych aplikacji."
  - "Zasada na następny raz: jeśli nie napisałbyś tego na tablicy ogłoszeń, nie wklejaj tego do czatu AI — zobacz poradnik „Czego NIE wklejać do narzędzi AI”."
report:
  - channel: "Twój bank"
    detail: "Jeśli podałeś dane bankowe — zadzwoń na oficjalny numer z odwrotu karty i zablokuj kartę."
  - channel: "Zespół IT / osoba odpowiedzialna za dane"
    detail: "Jeśli to były dane służbowe lub dane klientów, powiadom natychmiast — firma może mieć prawny obowiązek zgłoszenia incydentu."
  - channel: "CERT Polska"
    detail: "Możesz zgłosić incydent i poprosić o wskazówki przez formularz incydent.cert.pl."
    url: "https://incydent.cert.pl"
  - channel: "UODO (ochrona danych)"
    detail: "Urząd Ochrony Danych Osobowych — tu firma zgłasza incydenty z danymi klientów."
    url: "https://uodo.gov.pl"
sources:
  - label: "UODO — ochrona danych osobowych"
    url: "https://uodo.gov.pl"
  - label: "OpenAI — centrum pomocy (historia rozmów i ustawienia danych)"
    url: "https://help.openai.com"
  - label: "CERT Polska — zgłaszanie incydentów"
    url: "https://cert.pl"
---

**Najpierw oddech.** Sekundowa pomyłka to nie katastrofa — ale wymaga kilku kroków zrobionych teraz, we właściwej kolejności. Kluczowa myśl: *nie usuwanie jest pierwsze*, tylko zmiana tego, co można użyć przeciwko tobie (hasła, karta). Usuwasz i wyłączasz trenowanie zaraz potem. Krok po kroku, jeden po drugim.
