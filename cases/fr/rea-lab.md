# rea-lab: mesurer la contribution du REA à l'ingénierie inverse du Windows

[← Retour à tous les cas](../../README.fr.md) · Analyse et évaluation

[English](../rea-lab.md) · [简体中文](../zh-CN/rea-lab.md) · [繁體中文](../zh-TW/rea-lab.md) · [日本語](../ja/rea-lab.md) · [한국어](../ko/rea-lab.md) · [Español](../es/rea-lab.md) · [Français](../fr/rea-lab.md) · [Deutsch](../de/rea-lab.md) · [Português (Brasil)](../pt-BR/rea-lab.md) · [Русский](../ru/rea-lab.md) · [العربية](../ar/rea-lab.md) · [हिन्दी](../hi/rea-lab.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** pablodiazjorge
- **Date d'examen des sources:** 2026-10-21
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Petits défis Windows, binaires plus gros avec leurres et vrais programmes open source

## La question

Comment l’ajout de REA affecte-t-il le taux de réussite, le temps et le coût d’un agent ?

## Ce que REA a fait

L'auteur configure Windows et Ghidra, exécute des études contrôlées pré-enregistrées, vérifie le Evidence cité et publie des articles, des environnements et des correctifs en amont.

## Résultats rapportés par l'auteur

Cinq études préenregistrées sont publiques. Étudiez 1: 28/30 dans les deux groupes. Étude 2: 11/24 sans REA versus 4/24 avec REA. Étude 3: 71/72 versus 68/72. L'étude 4 utilise DeepSeek : 20/20 versus 19/20, sans différence significative détectée. Dans l'étude 5, la compétence révisée coûte 14% plus que la compétence officielle (p=0.012), sans changement significatif de précision. La note de rétention 2026-10-21 Evidence distingue les exécutions d'étude 482, les exécutions d'appel 336 qui ont appelé REA et les réexécutions interrompues par redémarrage de 3 : aucune de ces exécutions d'appel 339 REA n'a conservé de manière proactive Evidence ; l'évaluateur l'a reconstitué à partir des dossiers des clients.

## Limitations et réclamations non vérifiées

Toutes les études épinglent REA 6.4.0, Claude Code 2.1.296 et leurs modèles, tâches et autorisations respectifs ; les résultats ne peuvent pas être généralisés aux versions actuelles ou à toute l’ingénierie inverse. Les différences de taux de réussite dans les études 2 et 3 n’étaient pas statistiquement significatives selon les tests de l’auteur. La certification 3 de l'étude Evidence a été corrigée de 142/144 à 144/144 après une correction de niveleuse ; le nombre de résolutions est resté inchangé. L'étude 4 ne comporte que des paires 20. L'étude 5 compare le texte de compétence injecté dans les invites, et non le chargement automatique du client. Ce catalogue n'a pas repris les études. Le nombre de 339 correspond aux exécutions d’appels de REA, et non à l’échantillon total de l’étude, et n’implique pas l’absence de contenu Evidence ou l’échec de la certification.

## Quoi apprendre

Évaluez ensemble les contrôles, la répartition des tâches, les coûts et la qualité des preuves.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Study 1, preregistered: on ten small Windows crackmes, rea did not change how many Claude Code solved

## Sources originales

- [Source principale/preuve épinglée](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md)
- [Projet / démo](https://github.com/pablodiazjorge/rea-lab)
- [Source supplémentaire 1](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/README.md)
- [Source supplémentaire 2](https://github.com/pablodiazjorge/rea-lab/blob/8796545134a00023b0fba3d75dbbaf77a9be68d8/README.md)
- [Source supplémentaire 3](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-4/README.md)
- [Source supplémentaire 4](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-5/README.md)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
