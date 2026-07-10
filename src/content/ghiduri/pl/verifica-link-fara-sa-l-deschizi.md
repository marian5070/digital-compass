---
title: "Jak sprawdzić link, nie otwierając go"
summary: Link może wyglądać na zaufany, a prowadzić zupełnie gdzie indziej. Oto jak zobaczyć, dokąd naprawdę prowadzi, zanim go dotkniesz — na komputerze i na telefonie.
topic: Zobacz, dokąd prowadzi link, zanim go dotkniesz
category: email-mesaje
icon: "🔗"
order: 2
lastReviewed: "10 lipca 2026"
rulesTitle: "Zapamiętaj w skrócie"
rules:
  - "Na komputerze: <strong>najedź kursorem na link</strong> (bez klikania) i przeczytaj adres, który pojawia się na dole."
  - "Na telefonie: <strong>przytrzymaj palec</strong> na linku, żeby zobaczyć adres, a potem zamknij okienko bez otwierania."
  - "Patrz na to, co stoi tuż przed <strong>.pl</strong> lub <strong>.com</strong> — to jest prawdziwy adres strony. Instytucje państwowe mają adresy kończące się na <strong>gov.pl</strong>."
  - "Podejrzany SMS z linkiem <strong>prześlij bezpłatnie na numer 8080</strong> (CSIRT NASK) — pomagasz zablokować fałszywą stronę."
  - "Wiadomość przyszła nieproszona? W ogóle nie klikaj — wejdź na oficjalną stronę samodzielnie, wpisując adres."
relatedPlaybook: link-sms-fals
sources:
  - label: "CERT Polska — lista ostrzeżeń przed niebezpiecznymi stronami"
    url: "https://cert.pl/lista-ostrzezen/"
  - label: "gov.pl — baza wiedzy o cyberbezpieczeństwie (CSIRT NASK)"
    url: "https://www.gov.pl/web/baza-wiedzy"
---

Link może wyglądać na dobry, a zaprowadzić Cię zupełnie gdzie indziej. Dobra wiadomość: **możesz zobaczyć, dokąd prowadzi, zanim go otworzysz.** Zajmuje to pięć sekund i nie musisz w niego klikać.

## Na komputerze: najedź kursorem na link

Ustaw kursor myszy nad linkiem, ale **nie klikaj**. Na dole, w rogu okna, pojawi się prawdziwy adres, dokąd link prowadzi. Jeśli nie zgadza się z tym, co link „mówi”, jest podejrzany.

## Na telefonie: przytrzymaj palec

**Przytrzymaj palec** na linku przez kilka sekund (nie dotykaj go krótko, bo się otworzy). Pojawi się małe okienko z prawdziwym adresem. Czytasz go i możesz zamknąć bez wchodzenia.

## Jak czytać adres (najważniejsza część)

Prawdziwy adres to kawałek przed pierwszym ukośnikiem `/`. A w nim najbardziej liczy się **część stojąca tuż przed „.pl” lub „.com”**.

Przykład: `inpost.przesylka-doplata.ru/...`
Tutaj prawdziwy adres to **przesylka-doplata.ru**, nie „InPost”. Więc to **nie** jest InPost.

Ich sztuczka polega na tym, żeby na początku postawić nazwę znanej firmy i Cię uspokoić. Ty patrz zawsze na **koniec**.

Jeszcze jedna wskazówka: instytucje państwowe w Polsce mają adresy w domenie **gov.pl**. Prawdziwy mObywatel czy urząd znajdziesz na gov.pl — strona typu `mobywatel-logowanie.xyz` to podróbka.

## Sygnały alarmowe w adresie

- Dużo myślników albo doklejone słowa: `inpost-doplata-paczki.com`.
- Podmienione, podobne litery: `rnicrosoft.com` zamiast `microsoft.com` („rn” wygląda jak „m”).
- Dziwne końcówki (`.ru`, `.xyz`, `.top`) dla instytucji działającej w Polsce.

## Polska ma jeszcze jedną siatkę bezpieczeństwa

CERT Polska prowadzi **listę ostrzeżeń** — publiczny spis niebezpiecznych stron (cert.pl/lista-ostrzezen/). Operatorzy komórkowi blokują wpisane tam adresy automatycznie: jeśli przy próbie wejścia zobaczysz stronę z ostrzeżeniem, po prostu ją zamknij.

Ty też możesz dołożyć cegiełkę: **podejrzany SMS prześlij bezpłatnie na numer 8080**. Trafi do CSIRT NASK, a fałszywa strona może zostać zablokowana, zanim kliknie w nią ktoś inny.

## Złota zasada

Jeśli wiadomość przyszła nieproszona, **w ogóle nie klikaj**. Wejdź na oficjalną stronę samodzielnie (wpisując adres ręcznie) albo otwórz aplikację. Wtedy nikt nie ma jak Cię oszukać.
