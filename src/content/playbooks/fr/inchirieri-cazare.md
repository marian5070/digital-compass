---
title: Je réserve un hébergement ou je loue un appartement et ça sent l'arnaque. Que faire ?
summary: Un message « de Booking » vous demande de reconfirmer le paiement, ou un propriétaire exige de l'argent avant même la visite. Voici comment reconnaître les arnaques à la réservation et à la location, et quoi faire.
situation: Je réserve un hébergement (Booking/Airbnb) ou je loue un appartement et quelque chose cloche
icon: "🏠"
order: 11
severity: urgent
lastReviewed: "10 juillet 2026"
steps:
  - "<strong>Ne ressaisissez pas les données de votre carte via un lien</strong> reçu par message, e-mail ou WhatsApp, même s'il semble venir de Booking ou de l'hôte. Booking.com ne vous demande jamais vos données de carte par WhatsApp, SMS ou téléphone — ce message vient du compte piraté d'un hôtel."
  - "<strong>Vérifiez directement, par vous-même :</strong> ouvrez l'application ou le site officiel (pas via le lien du message) et regardez si la réservation demande vraiment quelque chose. Appelez l'établissement au numéro officiel de son site."
  - "Pour un <strong>appartement à louer</strong> : n'envoyez ni dépôt de garantie ni loyer avant la visite et la signature du bail (ou, au minimum, un appel vidéo crédible). Aucun envoi d'argent avant la signature du bail — c'est la règle officielle."
  - "Si vous avez déjà donné les données de votre carte, appelez votre banque au numéro au dos de la carte et faites opposition. Si vous ne trouvez pas ce numéro, le serveur interbancaire d'opposition répond au 0 892 705 705, 7j/7 et 24h/24 — attention, c'est un numéro surtaxé."
  - "Si vous avez payé par virement, rassemblez les preuves, demandez à votre banque le rappel des fonds, signalez sur la plateforme et sur SignalConso, et déposez plainte via THESEE (fausse annonce de location)."
donts:
  - "Ne payez jamais en dehors de la plateforme par virement direct ou en cryptomonnaie, aussi convaincante que soit l'explication — un virement instantané est aussi irréversible que des espèces."
  - "Ne ressaisissez pas les données de votre carte via un lien, aussi officiel que paraisse le message « de Booking »."
  - "N'envoyez pas d'argent pour un appartement que vous n'avez pas vu."
recognize:
  - "<strong>Un message (via le chat Booking, e-mail ou WhatsApp) vous demande de « reconfirmer le paiement »</strong> ou de ressaisir les données de votre carte, sinon « la réservation sera annulée ». La pression du temps est le signe — le compte de l'établissement a été piraté, et le message contient les vraies données de votre réservation."
  - "L'hôte demande un <strong>paiement d'avance par virement direct</strong>, en dehors de la plateforme."
  - "Prix anormalement bas pour le quartier ou la saison, plus « j'ai d'autres demandes, décidez vite »."
  - "Le « propriétaire » refuse la visite ou un appel vidéo et demande le dépôt de garantie plus le premier mois avant que vous ayez vu le logement, ou exige vos pièces d'identité avant toute visite."
  - "Les photos de l'annonce apparaissent aussi dans une autre annonce (vérifiez par une recherche d'image inversée, ou cherchez l'adresse sur Google Maps / Street View)."
  - "L'annonce ne mentionne aucun paiement d'avance, mais on vous demande soudain un acompte « pour bloquer » l'hébergement — signal d'arnaque presque certain."
report:
  - channel: "La plateforme (Booking / Airbnb / le site d'annonces)"
    detail: "Signalez le message et l'annonce via la messagerie interne. Restez toujours dans la messagerie officielle de la plateforme."
  - channel: "Votre banque"
    detail: "Si vous avez donné les données de votre carte ou payé — faites opposition et demandez la contestation du paiement. Le numéro officiel est au dos de la carte."
  - channel: "17Cyber"
    detail: "Diagnostic guidé de l'hameçonnage et démarches recommandées."
    url: "https://17cyber.gouv.fr"
  - channel: "SignalConso"
    detail: "S'il s'agit d'un établissement, d'un site marchand ou d'une agence immobilière, faites un signalement."
    url: "https://signal.conso.gouv.fr"
  - channel: "THESEE — plainte en ligne"
    detail: "Si vous avez perdu de l'argent, déposez plainte en ligne pour fausse annonce de location, avec vos preuves."
    url: "https://www.masecurite.interieur.gouv.fr/fr/demarches-en-ligne/thesee-arnaques-internet-plainte-en-ligne"
sources:
  - label: "Service-Public — Fausse annonce de location immobilière : comment réagir ?"
    url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34092"
  - label: "SignalConso — signaler un problème à la DGCCRF"
    url: "https://signal.conso.gouv.fr"
---

**D'abord, respirez.** L'arnaque au « reconfirmez votre paiement Booking » trompe justement parce que le message arrive par la vraie application — mais aucun hôtel sérieux ne vous demande de ressaisir vos données de carte via un lien sous peine de perdre votre réservation. Et pour les appartements, la règle est simple : l'argent ne part qu'après la visite et la signature du bail.
