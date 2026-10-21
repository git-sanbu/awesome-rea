# sparkDash: intégration de l'analyse REA dans un tableau de bord multi-appareils

[← Retour à tous les cas](../../README.fr.md) · Outils et intégrations

[English](../sparkdash-rea.md) · [简体中文](../zh-CN/sparkdash-rea.md) · [繁體中文](../zh-TW/sparkdash-rea.md) · [日本語](../ja/sparkdash-rea.md) · [한국어](../ko/sparkdash-rea.md) · [Español](../es/sparkdash-rea.md) · [Français](../fr/sparkdash-rea.md) · [Deutsch](../de/sparkdash-rea.md) · [Português (Brasil)](../pt-BR/sparkdash-rea.md) · [Русский](../ru/sparkdash-rea.md) · [العربية](../ar/sparkdash-rea.md) · [हिन्दी](../hi/sparkdash-rea.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** MiaAI-Lab
- **Date d'examen des sources:** 2026-10-21
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** REA CLI, fichiers d'entrée et vues analysis/Evidence sur les appareils Linux distants

## La question

Comment une interface Web peut-elle soumettre des tâches REA distantes de longue durée et charger des résultats volumineux à la demande ?

## Ce que REA a fait

Le projet appelle en fait en amont REA via son CLI, épinglant les agents réactifs 6.4.0 et son fichier de verrouillage. server/rea implémente les tâches détachées, les téléchargements, le statut, les résultats paginés et les exportations. Les commandes pilotent l'inspection-analyse-vue et la comparaison ; le tableau de bord n'implémente pas de décompilateur.

## Résultats rapportés par l'auteur

La page Outils publics → REA et l'implémentation du serveur prennent en charge l'exécution à distance détachée, les journaux, les résumés, limitations/unknowns, les vues à la demande, les exportations JSON et la comparaison Evidence. Les tests d’épinglage de version, de gestion des tâches et de téléchargement sont publics. L'inclusion concerne l'intégration mise en œuvre, et non les seules instructions d'installation.

## Limitations et réclamations non vérifiées

Il s'agit d'un cas d'intégration, et non d'une reconstruction REA de sparkDash ou d'une preuve que chaque chemin d'analyse en amont a réussi l'acceptation matérielle. Les appareils doivent exécuter Linux, la fonctionnalité est désactivée par défaut et les formats cibles nécessitent des fournisseurs supplémentaires. Les tests du gestionnaire examinés utilisent un faux REA et un shell local, qui ne remplacent pas le vrai Ghidra ou les tests d'appareils distants. Ce catalogue ne l'a pas installé ni exécuté.

## Quoi apprendre

Attribuez les capacités en amont séparément du travail de planification et d'interface utilisateur, en préservant les preuves, les limitations et les échecs dans les résultats affichés.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> sparkDash uses the CLI only

## Sources originales

- [Source principale/preuve épinglée](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md)
- [Projet / démo](https://github.com/MiaAI-Lab/sparkDash)
- [Source supplémentaire 1](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/commands.js)
- [Source supplémentaire 2](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/ReaManager.js)
- [Source supplémentaire 3](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/pinned/package.json)
- [Source supplémentaire 4](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/__tests__/manager.test.js)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
