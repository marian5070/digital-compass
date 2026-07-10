---
title: « Ma banque / la police / un proche en danger » m'appelle. Que faire ?
summary: Quelqu'un vous appelle en se faisant passer pour votre banque, la police, un agent ou un proche en danger, et vous demande de l'argent, des codes ou des données. Voici comment reconnaître l'arnaque et quoi faire sur-le-champ.
situation: On m'a appelé pour me demander de l'argent ou des données en urgence
icon: "📞"
order: 4
severity: urgent
lastReviewed: "10 juillet 2026"
steps:
  - "<strong>Raccrochez.</strong> Ce n'est pas impoli — c'est le geste le plus sûr. Aucune institution réelle ne vous reprochera d'avoir raccroché pour rappeler vous-même."
  - "<strong>Rappelez vous-même</strong> au numéro officiel : la banque au numéro au dos de votre carte, le proche à son numéro habituel, l'administration au numéro de son site officiel. Ne rappelez pas le numéro qui s'est affiché — même s'il ressemble au vrai numéro de votre banque, il peut être usurpé (spoofing)."
  - "On vous a demandé un <strong>code reçu par SMS</strong>, un mot de passe, les données de votre carte ou de valider une opération dans l'application ? Votre banque ne vous demande jamais cela au téléphone. Vous n'avez rien donné ? Bien. Vous avez donné ? Appelez immédiatement votre banque et faites opposition — au numéro au dos de la carte ; si vous ne le trouvez pas, le serveur interbancaire d'opposition répond au 0 892 705 705, 7j/7 et 24h/24 (attention, numéro surtaxé)."
  - "Si c'est « un proche en danger qui a besoin d'argent tout de suite », <strong>vérifiez directement auprès de lui ou d'un autre membre de la famille</strong> avant tout paiement. La voix peut être imitée, même avec l'IA."
  - "Si des débits que vous ne reconnaissez pas apparaissent alors que votre carte est <strong>toujours en votre possession</strong>, signalez-les sur <strong>Perceval</strong> (via FranceConnect, gratuit, après l'opposition) — vous recevrez un récépissé pour votre banque. Si vous avez déjà envoyé de l'argent par virement, demandez le rappel des fonds et déposez plainte."
donts:
  - "Ne communiquez à personne — pas même à « votre banque » — le code reçu par SMS, votre PIN, votre mot de passe ou le cryptogramme (CVV), et ne validez aucune opération dans l'application dont vous n'êtes pas à l'origine."
  - "N'installez pas d'application d'« accès à distance » (AnyDesk, TeamViewer) demandée par la personne qui appelle."
  - "Ne remettez jamais votre carte bancaire à un « coursier » ou « employé de la banque » qui se présente chez vous — les banques ne font pas ça."
  - "Ne vous laissez pas presser. « C'est maintenant, sinon… » est précisément leur outil."
recognize:
  - "<strong>Urgence et secret :</strong> « n'en parlez à personne », « nous devons agir dans la minute »."
  - "On vous demande de <strong>déplacer votre argent « vers un compte sécurisé »</strong> ou de donner des codes « pour bloquer une fraude » — c'est ça, la fraude. C'est l'arnaque au faux conseiller bancaire, le fléau numéro un en France."
  - "Le « conseiller anti-fraude » connaît vos données personnelles et le numéro affiché semble être le vrai numéro de votre banque — le numéro se falsifie (spoofing), et l'appel inattendu est le vrai signal."
  - "On vous propose d'envoyer quelqu'un <strong>récupérer votre carte à domicile</strong> « pour la mettre en sécurité »."
  - "Pression émotionnelle : peur, honte, pitié (« votre petit-fils est à l'hôpital, il a besoin d'argent »), voix étrange avec des pauses ou une intonation artificielle (possible clonage par IA)."
report:
  - channel: "Votre banque"
    detail: "Raccrochez et appelez vous-même le numéro au dos de votre carte. Si vous avez donné des codes ou des données, faites opposition immédiatement ; à défaut, le serveur interbancaire répond au 0 892 705 705 (7j/7, 24h/24, numéro surtaxé)."
  - channel: "Perceval"
    detail: "Signalez en ligne les débits non reconnus si votre carte est toujours en votre possession et après avoir fait opposition. Gratuit, via FranceConnect."
    url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R46526"
  - channel: "Info Escroqueries"
    detail: "Des policiers et gendarmes vous conseillent et vous orientent. Gratuit, du lundi au vendredi, de 9h à 18h30."
    phone: "0 805 805 817"
  - channel: "Commissariat ou gendarmerie"
    detail: "Déposez plainte. Notez le numéro, l'heure et ce qui vous a été demandé."
    url: "https://www.masecurite.interieur.gouv.fr/fr/fiches-pratiques/famille-et-aides-aux-victimes/comment-porter-plainte"
  - channel: "17 / 112"
    detail: "Si vous sentez une menace immédiate ou si vous êtes en plein appel et ne savez pas quoi faire."
    phone: "17"
sources:
  - label: "Cybermalveillance.gouv.fr — Fraude au faux conseiller bancaire"
    url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/fraude-faux-conseiller-bancaire"
  - label: "Fédération bancaire française — Ne communiquez jamais vos codes"
    url: "https://www.fbf.fr"
  - label: "Service-Public — Perceval : signaler une fraude à la carte bancaire"
    url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R46526"
---

**D'abord, respirez.** Vous avez parfaitement le droit de raccrocher et de vérifier. Les escrocs comptent sur la précipitation et la peur — si vous vous accordez quelques minutes et rappelez vous-même votre banque au numéro au dos de votre carte, le piège se défait presque toujours.
