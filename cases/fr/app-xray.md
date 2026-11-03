# App X-Ray: transformer les résultats du REA en rapports d'application partageables

[← Retour à tous les cas](../../README.fr.md) · Outils et intégrations

[English](../app-xray.md) · [简体中文](../zh-CN/app-xray.md) · [繁體中文](../zh-TW/app-xray.md) · [日本語](../ja/app-xray.md) · [한국어](../ko/app-xray.md) · [Español](../es/app-xray.md) · [Français](../fr/app-xray.md) · [Deutsch](../de/app-xray.md) · [Português (Brasil)](../pt-BR/app-xray.md) · [Русский](../ru/app-xray.md) · [العربية](../ar/app-xray.md) · [हिन्दी](../hi/app-xray.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** Eliot5566
- **Date d'examen des sources:** 2026-11-03
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Source d'application open source Electron, avec chemins supplémentaires pour l'APK, le binaire natif et le fichier modèle

## La question

Comment les preuves statiques REA peuvent-elles devenir un rapport de composant lisible et une différence de version à version ?

## Ce que REA a fait

L'intégration appelle les opérations REA 6.7.0 CLI épinglées et analyse JSON Evidence. Les lots d'analyse JavaScript conservent les fichiers sous la même racine pour préserver la résolution d'importation ; L'inspection des fusibles Electron est une opération REA distincte.

## Résultats rapportés par l'auteur

Le projet publie la génération de rapports, les règles, les différences CI et une galerie. Son rapport daté week-5 indique que les applications 20 Electron ont été analysées et que des versions ont été trouvées pour tous les 20, avec des analyses 18 sous 60 secondes sur ce conteneur. REA-Bench fournit des questions 54 dérivées de rapports du corpus 20-app.

## Limitations et réclamations non vérifiées

Il s’agit d’analyses datées rapportées par l’auteur, et non de découvertes de vulnérabilités ou de réseau d’exécution actuelles. Les règles peuvent manquer les fenêtres créées par l'assistant, les canaux calculés et la validation de l'expéditeur ; les adresses statiques ne prouvent pas le trafic. REA-Bench mesure l'accord avec les rapports App X-Ray plutôt que la vérité terrain indépendante et ne démontre pas lui-même l'avantage d'un agent activé par un outil. Ce catalogue n'a pas réexécuté les analyses.

## Quoi apprendre

Liez les déclarations de rapport à la source, conservez les validations et les dates d'analyse, et traitez les règles statiques et les réponses de référence générées comme faillibles.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Runs one REA CLI command with --json and returns the parsed Evidence record.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/core/rea.ts)
- [Projet / démo](https://github.com/Eliot5566/app-xray)
- [Source supplémentaire 1](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/README.md)
- [Source supplémentaire 2](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/results-2026-10-23-week5.md)
- [Source supplémentaire 3](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/rea-bench/README.md)
- [Source supplémentaire 4](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/rules/ipc.ts)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
