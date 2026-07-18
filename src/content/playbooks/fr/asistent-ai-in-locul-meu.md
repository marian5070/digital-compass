---
title: L'assistant IA veut faire quelque chose à ma place — envoyer, acheter, supprimer. Je le laisse ?
summary: L'assistant IA vous demande votre approbation pour envoyer un message, effectuer un paiement ou supprimer quelque chose — ou il l'a déjà fait. Voici comment approuver en sécurité et quoi faire s'il s'est trompé.
situation: L'assistant IA veut envoyer, acheter ou supprimer quelque chose pour moi
icon: "🤖"
order: 18
severity: important
category: ai-asistenti
audience: ambele
lastReviewed: "18 juillet 2026"
steps:
  - "<strong>Lisez exactement ce qu'il veut faire</strong> avant d'approuver : à qui il envoie, quel montant il paie, quel fichier il supprime. N'approuvez que si vous auriez fait vous-même, de vos propres mains, exactement la même chose."
  - "Gardez activée <strong>l'approbation manuelle</strong> (« demandez-moi avant ») pour les envois, les paiements et les suppressions. Ne passez pas en « approbation automatique » pour échapper aux questions — les questions sont votre filet de sécurité."
  - "Pour les achats et les paiements, donnez à l'assistant <strong>le moins possible</strong> : une carte à petit plafond ou une carte virtuelle, pas votre carte principale ni l'accès à tout votre compte bancaire."
  - "Ce qui est <strong>irréversible reste entre vos mains</strong> : suppressions définitives, messages envoyés à beaucoup de monde, gros paiements. Laissez l'assistant préparer (un brouillon, un panier d'achat), mais appuyez vous-même sur le bouton final."
  - "Il a déjà fait quelque chose de travers ? <strong>Limitez les dégâts maintenant :</strong> vérifiez le dossier « Envoyés » et rappelez le message si c'est possible, annulez la commande, appelez la banque pour les paiements (le numéro officiel au dos de votre carte) — et déconnectez l'assistant de l'application concernée jusqu'à ce que vous compreniez ce qui s'est passé."
donts:
  - "N'approuvez pas par réflexe tout ce qu'il demande — l'habitude d'appuyer toujours sur « Oui » est exactement le risque."
  - "Ne le laissez pas travailler sans surveillance pendant des heures avec le droit d'envoyer, d'acheter ou de supprimer."
  - "Ne lui donnez pas votre mot de passe bancaire ni votre carte principale — utilisez des petits plafonds et des cartes virtuelles."
  - "Ne partez pas du principe qu'« il sait mieux que vous » — un assistant peut être trompé par un e-mail ou une page qu'il lit (avec des instructions cachées dans le texte) et faire autre chose que ce que vous lui avez demandé."
recognize:
  - "<strong>Il propose une action que vous n'avez pas demandée :</strong> il veut soudain envoyer un e-mail, ouvrir un lien ou « vérifier » un compte."
  - "Il veut envoyer des données personnelles ou des fichiers vers une adresse ou un site que vous ne reconnaissez pas."
  - "Il insiste pour que vous approuviez vite ou vous suggère de <strong>désactiver les confirmations</strong> « pour être plus efficace »."
  - "Son comportement change brusquement après avoir lu un message ou un document reçu de quelqu'un d'autre — ce texte contenait peut-être des instructions cachées pour l'assistant."
report:
  - channel: "Votre banque"
    detail: "S'il a effectué un paiement que vous ne vouliez pas — appelez le numéro officiel au dos de votre carte, faites opposition et demandez la contestation du paiement."
  - channel: "L'éditeur de l'assistant (OpenAI / Microsoft / Google)"
    detail: "Signalez depuis l'application l'action étrange — les entreprises traitent cela comme un problème de sécurité."
  - channel: "17Cyber / Cybermalveillance.gouv.fr"
    detail: "Diagnostic en ligne proposé par la Police nationale, la Gendarmerie nationale et Cybermalveillance.gouv.fr : décrivez votre situation, vous recevez les recommandations adaptées."
    url: "https://www.17cyber.gouv.fr/"
  - channel: "Police / Gendarmerie — plainte"
    detail: "Si vous avez perdu de l'argent, déposez plainte — en ligne via THESEE (connexion FranceConnect) ou sur place. Gardez des captures d'écran de la conversation et de l'action."
    url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34000"
sources:
  - label: "OpenAI — le programme de sécurité pour les applications et agents IA"
    url: "https://openai.com/index/safety-bug-bounty/"
  - label: "Google — applications tierces ayant accès à votre compte"
    url: "https://myaccount.google.com/connections"
  - label: "Cybermalveillance.gouv.fr — L'intelligence artificielle (IA), entre menaces et opportunités"
    url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/intelligence-artificielle-ia"
---

**D'abord, respirez.** Un assistant qui vous demande votre approbation est un système qui fonctionne comme il faut — ce « êtes-vous sûr ? » existe précisément pour vous. La règle simple : *vous n'approuvez que ce que vous auriez fait vous-même*, et tout ce qui est irréversible, c'est vous qui appuyez. Et s'il a déjà fait une erreur, on peut presque toujours limiter les dégâts dans les premières minutes.
