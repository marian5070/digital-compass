---
title: Je veux connecter mon assistant IA à d'autres applications. Que vérifier avant ?
summary: Vous voulez relier votre assistant IA (ChatGPT, Copilot, Gemini, etc.) à vos e-mails, vos fichiers ou votre agenda, via un « connecteur » ou une extension. Voici comment choisir uniquement des connecteurs de confiance et leur donner le moins d'accès possible.
situation: Je veux relier mon assistant IA à mes e-mails, fichiers ou mon agenda
icon: "🔌"
order: 17
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18 juillet 2026"
steps:
  - "Utilisez uniquement des <strong>connecteurs de la liste officielle</strong> de l'assistant, créés par l'entreprise elle-même ou par un éditeur que vous connaissez. Un connecteur est une petite extension qui relie l'assistant IA à d'autres applications (la technologie derrière s'appelle MCP, Model Context Protocol) — et, comme toute extension, il peut aussi être créé par des personnes malveillantes."
  - "<strong>Connectez une chose à la fois, seulement ce que vous utilisez.</strong> Ne reliez pas e-mails, fichiers et agenda « au cas où » — chaque connexion supplémentaire signifie plus de données auxquelles l'assistant accède."
  - "Réfléchissez à <strong>ce qui se trouve dans le compte que vous reliez</strong> : dans une messagerie, il y a des réinitialisations de mots de passe, des contrats, des factures. S'il contient des données sensibles ou des données de clients, ne le connectez pas — ou utilisez un compte séparé, réservé à cela."
  - "Gardez activée <strong>l'approbation manuelle</strong> (« demandez-moi avant d'envoyer ou de supprimer quelque chose »). Un assistant connecté lit aussi des messages ou des documents reçus d'autres personnes — et certains peuvent contenir des instructions cachées qui le trompent. Votre confirmation est le filet de sécurité ; voyez aussi le playbook sur les actions faites par l'assistant à votre place."
  - "<strong>Faites le ménage régulièrement :</strong> allez sur myaccount.google.com/connections (Google) ou dans les paramètres de votre compte Microsoft à « Applications et services », et retirez les connecteurs et les applications que vous n'utilisez plus."
donts:
  - "N'installez pas de connecteurs trouvés dans des publicités, sur des forums ou reçus par message — utilisez uniquement la liste officielle dans l'application de l'assistant."
  - "Ne connectez pas la messagerie de l'entreprise ou des fichiers contenant des données de clients sans l'accord de l'équipe informatique."
  - "N'écrivez pas le mot de passe de votre compte directement dans un connecteur — la connexion correcte passe par la page officielle Google/Microsoft, qui vous montre exactement quel accès vous donnez."
  - "Ne laissez pas connectées des applications que vous n'utilisez plus — un accès oublié est un risque oublié."
recognize:
  - "<strong>Il demande plus que ce qu'il promet :</strong> un connecteur « juste pour lire l'agenda » qui veut aussi envoyer des e-mails en votre nom."
  - "Un éditeur introuvable : pas de site, pas de coordonnées, apparu hier."
  - "Il est promu agressivement — « le connecteur qui fait tout pour vous », publicités insistantes, messages privés qui vous le recommandent."
  - "<strong>Après la connexion, l'assistant fait des choses inattendues</strong> — il envoie, partage ou cherche des choses que vous ne lui avez pas demandées. Retirez le connecteur immédiatement."
report:
  - channel: "L'éditeur de l'assistant (OpenAI / Microsoft / Google)"
    detail: "Signalez depuis l'application le connecteur qui se comporte de façon suspecte — les entreprises traitent cela comme un problème de sécurité."
  - channel: "17Cyber / Cybermalveillance.gouv.fr"
    detail: "Diagnostic en ligne proposé par la Police nationale, la Gendarmerie nationale et Cybermalveillance.gouv.fr : décrivez votre situation, vous recevez les recommandations adaptées."
    url: "https://www.17cyber.gouv.fr/"
  - channel: "Équipe informatique (si c'est au travail)"
    detail: "Si vous avez connecté un compte professionnel, prévenez l'équipe informatique — elle peut vérifier et retirer l'accès de façon centralisée."
sources:
  - label: "OpenAI — le programme de sécurité pour les applications et agents IA"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — applications tierces ayant accès à votre compte"
    url: "https://myaccount.google.com/connections"
  - label: "Microsoft — applications et services pouvant accéder à vos données"
    url: "https://account.live.com/consent/Manage"
  - label: "Cybermalveillance.gouv.fr — L'intelligence artificielle (IA), entre menaces et opportunités"
    url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/intelligence-artificielle-ia"
---

**D'abord, respirez.** Connecter n'est pas mauvais en soi — c'est justement ce qui rend un assistant vraiment utile. Pensez aux connecteurs comme aux *clés de votre maison* : vous ne les donnez qu'à quelqu'un de confiance, seulement pour la pièce dont il a besoin, et vous pouvez les reprendre à tout moment depuis les paramètres du compte.
