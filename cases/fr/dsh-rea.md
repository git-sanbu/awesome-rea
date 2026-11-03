# dsh-rea: préserver les contrats MCP tout en révélant les outils à la demande

[← Retour à tous les cas](../../README.fr.md) · Outils et intégrations

[English](../dsh-rea.md) · [简体中文](../zh-CN/dsh-rea.md) · [繁體中文](../zh-TW/dsh-rea.md) · [日本語](../ja/dsh-rea.md) · [한국어](../ko/dsh-rea.md) · [Español](../es/dsh-rea.md) · [Français](../fr/dsh-rea.md) · [Deutsch](../de/dsh-rea.md) · [Português (Brasil)](../pt-BR/dsh-rea.md) · [Русский](../ru/dsh-rea.md) · [العربية](../ar/dsh-rea.md) · [हिन्दी](../hi/dsh-rea.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** JeremyWangCY
- **Date d'examen des sources:** 2026-11-03
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Outils, invites et compétences REA 6.8.0 MCP dans DeepSeek Harness

## La question

Comment un adaptateur peut-il préserver les contrats d’outils en amont tout en gardant les schémas inutilisés hors de chaque requête d’agent ?

## Ce que REA a fait

L'adaptateur lance l'exécutable MCP épinglé en amont via un pont DSH, partage sa connexion pour les invites et les complétions, et utilise des masques d'outils par agent. La commande /rea révèle le catalogue et la compétence ; /rea off les cache à nouveau.

## Résultats rapportés par l'auteur

L'auteur publie du code d'adaptateur, des mesures de schéma et un rapport différentiel borné répertoriant les outils 229 et des comparaisons d'appels déterministes en modes natif et PTC. Le catalogue d'entrée de modèle mesuré est composé d'octets 273, 264 ; il s'agit d'une mesure de la charge utile du schéma, et non d'un jeton LLM ou d'une référence de coûts.

## Limitations et réclamations non vérifiées

Le référentiel contient un rapport de comparaison réussi et une documentation séparée d'une erreur Windows integrity_mismatch dans la commande de vérification. Les responsables du catalogue n'ont pas confirmé une vérification réussie sur Windows. Faire correspondre les définitions d'outils ne signifie pas que tous les outils ont été exécutés. La comparaison rapportée ne couvre pas les moteurs natifs, la capture en direct ou tous les fournisseurs, et n'établit pas de réponses de modèle de langage équivalentes. Les responsables du catalogue n'ont pas effectué ces tests.

## Quoi apprendre

Comparez les schémas et complétez les enveloppes de résultats déterministes, conservez les enregistrements de réussite historiques et divulguez séparément les échecs actuels.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> REA is an exact npm dependency, not a reimplementation.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/README.md)
- [Projet / démo](https://github.com/JeremyWangCY/dsh-rea)
- [Source supplémentaire 1](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/README.md)
- [Source supplémentaire 2](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/index.js)
- [Source supplémentaire 3](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/gate.js)
- [Source supplémentaire 4](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/integration-report.json)
- [Source supplémentaire 5](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/schema-measurement.json)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
