# REA Studio: présentation des outils MCP et Evidence enregistré dans une interface utilisateur Web locale

[← Retour à tous les cas](../../README.fr.md) · Outils et intégrations

[English](../rea-studio.md) · [简体中文](../zh-CN/rea-studio.md) · [繁體中文](../zh-TW/rea-studio.md) · [日本語](../ja/rea-studio.md) · [한국어](../ko/rea-studio.md) · [Español](../es/rea-studio.md) · [Français](../fr/rea-studio.md) · [Deutsch](../de/rea-studio.md) · [Português (Brasil)](../pt-BR/rea-studio.md) · [Русский](../ru/rea-studio.md) · [العربية](../ar/rea-studio.md) · [हिन्दी](../hi/rea-studio.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** theyishaik-lab
- **Date d'examen des sources:** 2026-11-03
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** REA MCP découverte d'outils, formulaires générés par schéma et petits exemples C, JavaScript et Python

## La question

Comment une interface locale peut-elle exposer les outils REA installés et rendre lisibles leurs preuves et limitations ?

## Ce que REA a fait

Le backend lance REA sur stdio MCP, pagine tools/list et transmet tools/call avec les signaux de progression et d'annulation. Un script d'enregistrement appelle REA sur de minuscules exemples d'artefacts et enregistre les résultats pour une version de démonstration statique distincte.

## Résultats rapportés par l'auteur

La source publique comprend une interface Web locale, des entrées basées sur un schéma, un historique et une vue Evidence. Les artefacts de démonstration archivés identifient REA 6.8.0 et fournissent un catalogue 229-tool ainsi que des échantillons enregistrés 9 (8 terminé, erreur 1) ; les actions de démonstration non prises en charge renvoient une erreur explicite non enregistrée.

## Limitations et réclamations non vérifiées

La démo hébergée rejoue les réponses enregistrées et la progression simulée ; les téléchargements restent dans le navigateur et ne sont pas analysés. Les enregistrements sont publiés par l'auteur et non des rediffusions indépendantes. L'utilisation locale peut appeler des outils sur les fichiers hôtes et dépend des fournisseurs configurés ; le catalogue n'a pas installé ni testé le backend ni établi d'audit de sécurité.

## Quoi apprendre

Générez des formulaires à partir du schéma de l'outil en direct, préservez les limitations dans la vue des résultats et distinguez clairement les démos enregistrées de l'analyse en direct.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Keeps one MCP stdio session with REA alive and exposes its tool catalog.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/server/rea.js)
- [Projet / démo](https://github.com/theyishaik-lab/rea-studio)
- [Source supplémentaire 1](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/README.md)
- [Source supplémentaire 2](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/scripts/record-demo.mjs)
- [Source supplémentaire 3](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/demo/recordings.json)
- [Source supplémentaire 4](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/api/demo.js)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
