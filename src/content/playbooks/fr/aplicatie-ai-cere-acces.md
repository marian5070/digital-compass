---
title: Une application d'IA me demande l'accès à mes comptes ou documents. Que vérifier ?
summary: Une application ou un assistant IA vous demande la permission de voir vos e-mails, vos fichiers, vos photos ou vos contacts. Voici quoi vérifier avant d'appuyer sur « Autoriser » — et comment retirer l'accès si vous regrettez.
situation: Une application d'IA me demande l'accès à mes e-mails, fichiers ou comptes
icon: "🔑"
order: 16
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18 juillet 2026"
steps:
  - "<strong>Arrêtez-vous sur l'écran « Autoriser ».</strong> Il indique exactement ce que l'application pourra voir ou faire (« lire vos e-mails », « voir vos fichiers »). Lisez la liste tranquillement — une fois que vous avez appuyé, l'application obtient vraiment tout ce qui y est écrit."
  - "Vérifiez <strong>qui a créé l'application</strong> : cherchez-la vous-même dans le magasin officiel (App Store, Google Play) ou sur le site de l'éditeur, regardez le nom de l'entreprise, les avis et depuis quand elle existe. Si vous n'arrivez pas à savoir qui est derrière, ne lui donnez pas accès."
  - "Comparez ce qu'elle demande avec ce qu'elle fait : <strong>donnez-lui uniquement l'accès dont elle a besoin</strong> pour la tâche que vous attendez d'elle. Une application qui résume des documents n'a aucune raison de lire vos e-mails ou vos contacts."
  - "Choisissez l'option <strong>la plus limitée</strong> quand elle existe : « seulement ce fichier/dossier », « lecture seule », « seulement pendant l'utilisation de l'application » — pas « accès à tout le compte »."
  - "Vous avez déjà appuyé sur « Autoriser » et vous regrettez ? <strong>Retirez l'accès</strong> : chez Google, allez sur <strong>myaccount.google.com/connections</strong> ; chez Microsoft, dans les paramètres du compte à « Applications et services » ; chez Facebook, dans Paramètres → « Applications et sites web ». Retirez l'application de la liste — l'accès s'arrête."
donts:
  - "Ne donnez pas accès « à tout » juste pour que ça aille plus vite — vous pourrez revenir ajouter des permissions plus tard, si c'est vraiment nécessaire."
  - "N'installez pas d'applications d'IA depuis des publicités ou des liens reçus par message — cherchez-les vous-même, par leur nom, dans le magasin officiel."
  - "N'écrivez pas le mot de passe de votre messagerie ou de votre banque directement dans une application d'IA. Une demande d'accès correcte vous amène sur la page officielle Google/Microsoft, qui vous montre quel accès vous donnez — elle ne vous demande pas votre mot de passe dans l'application."
  - "Ne connectez pas votre compte professionnel (messagerie de l'entreprise, documents des clients) sans demander d'abord à l'équipe informatique."
recognize:
  - "<strong>Elle demande beaucoup trop pour ce qu'elle fait :</strong> un « générateur d'images » qui veut accéder à vos e-mails et à vos contacts n'a pas de bonne raison."
  - "Un éditeur introuvable : site sans coordonnées, application apparue tout récemment, avis rares ou qui semblent copiés."
  - "<strong>Elle vous presse :</strong> « accordez l'accès pour continuer », offres « aujourd'hui seulement », fenêtres qui reviennent avec insistance jusqu'à ce que vous appuyiez sur « Autoriser »."
  - "Elle imite une application connue : nom presque identique, logo ressemblant, mais un autre éditeur."
report:
  - channel: "Le magasin d'applications (Google Play / App Store)"
    detail: "Signalez l'application qui demande un accès injustifié ou qui en imite une autre, pour qu'elle ne fasse pas d'autres victimes."
  - channel: "17Cyber / Cybermalveillance.gouv.fr"
    detail: "Diagnostic en ligne proposé par la Police nationale, la Gendarmerie nationale et Cybermalveillance.gouv.fr : décrivez votre situation, vous recevez les recommandations adaptées."
    url: "https://www.17cyber.gouv.fr/"
  - channel: "Équipe informatique (si c'est au travail)"
    detail: "S'il s'agit d'un compte ou d'un appareil professionnel, prévenez l'équipe informatique avant de donner l'accès — ou après l'avoir donné."
sources:
  - label: "Google — applications tierces ayant accès à votre compte"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — applications et services pouvant accéder à vos données"
    url: "https://account.live.com/consent/Manage"
  - label: "OpenAI — le programme de sécurité pour les applications et agents IA"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Cybermalveillance.gouv.fr — L'intelligence artificielle (IA), entre menaces et opportunités"
    url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/intelligence-artificielle-ia"
---

**D'abord, respirez.** L'écran « Autoriser l'accès » est exactement le moment où c'est vous qui avez le contrôle — rien ne s'est encore passé. La règle est simple : *qui a créé l'application, et pourquoi a-t-elle besoin de tout ça*. Et si vous avez déjà appuyé, l'accès peut être retiré à tout moment, en deux minutes, depuis les paramètres du compte.
