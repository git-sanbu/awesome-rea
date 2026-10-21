# Open-source REA Lab: épingler un artefact npm et analyser sa tranche d'entrée

[← Retour à tous les cas](../../README.fr.md) · Analyse et évaluation

[English](../opensource-rea-lab.md) · [简体中文](../zh-CN/opensource-rea-lab.md) · [繁體中文](../zh-TW/opensource-rea-lab.md) · [日本語](../ja/opensource-rea-lab.md) · [한국어](../ko/opensource-rea-lab.md) · [Español](../es/opensource-rea-lab.md) · [Français](../fr/opensource-rea-lab.md) · [Deutsch](../de/opensource-rea-lab.md) · [Português (Brasil)](../pt-BR/opensource-rea-lab.md) · [Русский](../ru/opensource-rea-lab.md) · [العربية](../ar/opensource-rea-lab.md) · [हिन्दी](../hi/opensource-rea-lab.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** martinlofranodeoliveira
- **Date d'examen des sources:** 2026-10-19
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Réactifs npm officiels 6.4.0 package.json et scripts/rea.mjs

## La question

Comment identifier un artefact de version avant de répondre à une question limitée relative au fichier d'entrée ?

## Ce que REA a fait

Un auditeur Python indépendant vérifie d'abord la structure et les hachages des archives. REA analyse statiquement deux fichiers inchangés extraits du package vérifié. La sémantique des branches d'entrée utilise également des contrôles de syntaxe manuels ; l'auditeur et les conclusions manuelles ne sont pas des sorties REA.

## Résultats rapportés par l'auteur

L'auteur publie des résumés épinglés, un audit JSON, des résumés Evidence aseptisés et des scripts de reproduction. La tranche rapporte que 1 a analysé le fichier JavaScript, les nœuds 469 AST, les résultats 14 et aucun échec d'analyse, tout en notant que l'analyse du package complet a été interrompue pendant l'expansion sémantique.

## Limitations et réclamations non vérifiées

Les résultats 14 ne constituent pas un décompte de vulnérabilités. La tranche conserve les inconnues sémantiques 110 et ne dispose pas d'implémentations dist, elle ne peut donc pas établir la sécurité complète du package ou l'exactitude de l'exécution. Un résumé épuré n'est pas rejouable canoniquement Evidence ; la couverture complète est partielle. Ce catalogue ne l'a pas réédité.

## Quoi apprendre

Reliez la question et la contribution tout en conservant les interruptions et les inconnues. Les contrôles structurels, l'identité des octets et la sécurité d'exécution sont des conclusions différentes.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Can REA statically parse the actual shipped dispatcher?

## Sources originales

- [Source principale/preuve épinglée](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md)
- [Projet / démo](https://github.com/martinlofranodeoliveira/opensource-rea-lab)
- [Source supplémentaire 1](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/rea-excerpt.json)
- [Source supplémentaire 2](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/README.md)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
