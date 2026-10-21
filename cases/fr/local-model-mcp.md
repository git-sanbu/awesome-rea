# Un modèle 27B local : une liste d'outils MCP plus petite permet l'analyse des fonctions

[← Retour à tous les cas](../../README.fr.md) · Analyse et évaluation

[English](../local-model-mcp.md) · [简体中文](../zh-CN/local-model-mcp.md) · [繁體中文](../zh-TW/local-model-mcp.md) · [日本語](../ja/local-model-mcp.md) · [한국어](../ko/local-model-mcp.md) · [Español](../es/local-model-mcp.md) · [Français](../fr/local-model-mcp.md) · [Deutsch](../de/local-model-mcp.md) · [Português (Brasil)](../pt-BR/local-model-mcp.md) · [Русский](../ru/local-model-mcp.md) · [العربية](../ar/local-model-mcp.md) · [हिन्दी](../hi/local-model-mcp.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** CassieFox23
- **Date d'examen des sources:** 2026-10-19
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Vérificateur de jetons C auto-construit ; Qwen3.8-27B, lama.cpp, OpenCode et REA MCP

## La question

Comment les descriptions et analyses des outils REA peuvent-elles s'intégrer dans le contexte 32K d'un modèle local ?

## Ce que REA a fait

L'auteur utilise le commit PR #3026 d993ffeb1 et les familles d'outils Ghidra 12.1.4. et une liste blanche OpenCode expose uniquement les outils 10 REA ; le modèle ouvre la cible, localise et décompile la fonction, puis ferme la session.

## Résultats rapportés par l'auteur

L'auteur rapporte que toutes les descriptions d'outils 206 dépassaient le contexte. Une configuration 62-tool a effectué une réinitialisation du GPU après avoir lu l'invite. L'invite 10-tool utilisait les jetons 4, 407 ; trois exécutions ont trouvé la chaîne cible et expliqué le vérificateur, chacune prenant environ 80 secondes.

## Limitations et réclamations non vérifiées

Les trois exécutions répètent un petit programme et une invite, et non trois tâches indépendantes. Aucun autre modèle ou client n’a été comparé. Les résultats utilisent un engagement de relations publiques historique ; Le nombre d'outils, les commutateurs et les timings ne sont pas des garanties pour la version actuelle.

## Quoi apprendre

Mesurez le coût du contexte du schéma avant de tester un ensemble d’outils minimal. La répétition d’une tâche n’établit pas la capacité générale.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> With the full tool list, nothing fits.

## Sources originales

- [Discussion publique / modifiable au moment de la révision](https://github.com/morluto/rea/discussions/3098)
- [Projet / démo](https://github.com/morluto/rea/discussions/3098)
- [Source supplémentaire 1](https://github.com/morluto/rea/pull/3026)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
