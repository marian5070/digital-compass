---
title: Kliknąłem w fałszywy link lub SMS. Co robić?
summary: Otworzyłeś fałszywą wiadomość („dopłata do paczki”, „zablokowane konto”, bank) albo kliknąłeś w podejrzany link. Oto kroki, które warto zrobić teraz, po kolei.
situation: Dostałem podejrzaną wiadomość albo kliknąłem w link
icon: "✉️"
order: 1
severity: urgent
lastReviewed: "10 lipca 2026"
steps:
  - "<strong>Nie wpisuj już niczego</strong> na stronie, która się otworzyła. Zamknij ją. Jeśli zdążyłeś podać jakieś dane, przejdź od razu do następnego kroku."
  - "Jeśli podałeś <strong>dane karty albo hasło do banku</strong>: zadzwoń teraz do banku na numer z odwrotu karty i poproś o zablokowanie karty. Kartę zastrzeżesz też pod jednym numerem dla wszystkich banków: <strong>+48 828 828 828</strong> (czynny całą dobę). Nie dzwoń na numer z wiadomości."
  - "Jeśli podałeś <strong>hasło</strong> do jakiegoś konta (e-mail, Facebook itp.): zmień je natychmiast w oficjalnej aplikacji i włącz weryfikację dwuetapową."
  - "Konta, o które się martwisz, sprawdzaj tylko przez <strong>oficjalną aplikację</strong> albo wpisując adres samodzielnie w przeglądarce — nigdy przez link z wiadomości."
  - "Podejrzanego SMS-a <strong>prześlij bezpłatnie na numer 8080</strong> (CERT Polska) — dzięki temu operatorzy zablokują fałszywą stronę także innym. Potem usuń wiadomość i, jeśli się da, zgłoś ją jako spam."
donts:
  - "Nie dzwoń i nie pisz na numery ani adresy z podejrzanej wiadomości."
  - "Nie podawaj nikomu danych karty, kodu z SMS-a ani hasła — nieważne, jak oficjalnie brzmi wiadomość."
  - "Nie instaluj żadnej aplikacji, o którą prosi link (zwłaszcza do „weryfikacji” albo „zdalnego dostępu”)."
recognize:
  - "<strong>Pośpiech i strach:</strong> „konto zostanie zablokowane w 24 godziny”, „paczka wróci do nadawcy”. Presja czasu to główny sygnał."
  - "<strong>Adres się nie zgadza:</strong> link wygląda prawie jak prawdziwy, ale ma dodatkowe litery, myślniki albo dziwną końcówkę domeny."
  - "<strong>Proszą o dane, o które prawdziwy bank nigdy nie prosi</strong> przez link: PIN, pełne hasło, kod CVV, kod z SMS-a."
  - "Błędy językowe, brak polskich znaków, sztucznie urzędowy ton."
  - "<strong>Częste przykłady teraz:</strong> „dopłata do paczki” od „InPost” lub „Poczty Polskiej”, fałszywa faktura PGE z groźbą „odłączenia prądu” (prawdziwe pismo ma twój numer klienta i nie zawiera linku do płatności), SMS o „nowej wiadomości w mObywatel” z linkiem do logowania. Wszystkie fałszywe — sprawdzasz tylko wchodząc samodzielnie na oficjalną stronę, nie przez link."
report:
  - channel: "CERT Polska"
    detail: "Podejrzanego SMS-a prześlij bezpłatnie na 8080. Fałszywy link lub stronę zgłoś przez formularz incydent.cert.pl."
    phone: "8080"
    url: "https://incydent.cert.pl"
  - channel: "Twój bank"
    detail: "Jeśli podałeś dane bankowe — zadzwoń na oficjalny numer z odwrotu karty i zablokuj kartę. Kartę zastrzeżesz też pod +48 828 828 828 (jeden numer dla wszystkich banków, całą dobę)."
    phone: "+48 828 828 828"
  - channel: "Policja"
    detail: "Jeśli straciłeś pieniądze, złóż zawiadomienie na najbliższym komisariacie (nie da się tego zrobić online). Zachowaj zrzuty ekranu z wiadomością."
    url: "https://cbzc.policja.gov.pl"
sources:
  - label: "CERT Polska — lista ostrzeżeń przed niebezpiecznymi stronami"
    url: "https://cert.pl/lista-ostrzezen/"
  - label: "CSIRT NASK / gov.pl — ostrzeżenia przed oszustwem „na przesyłkę” i fałszywymi SMS-ami mObywatel"
    url: "https://www.gov.pl/web/baza-wiedzy"
  - label: "Policja — fałszywe SMS-y o rachunkach za energię"
    url: "https://policja.pl/pol/aktualnosci/216111,dok.html"
---

**Najpierw oddech.** Samo kliknięcie w link nie oznacza jeszcze, że coś straciłeś. Prawdziwe ryzyko pojawia się zwykle dopiero wtedy, gdy *wpiszesz dane* albo *coś zainstalujesz*. Masz czas, żeby spokojnie przejść poniższe kroki, jeden po drugim.
