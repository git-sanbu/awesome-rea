# Notion: traçage du pont du presse-papiers en texte enrichi Electron

[← Retour à tous les cas](../../README.fr.md) · Vitrines officielles

[English](../notion-clipboard.md) · [简体中文](../zh-CN/notion-clipboard.md) · [繁體中文](../zh-TW/notion-clipboard.md) · [日本語](../ja/notion-clipboard.md) · [한국어](../ko/notion-clipboard.md) · [Español](../es/notion-clipboard.md) · [Français](../fr/notion-clipboard.md) · [Deutsch](../de/notion-clipboard.md) · [Português (Brasil)](../pt-BR/notion-clipboard.md) · [Русский](../ru/notion-clipboard.md) · [العربية](../ar/notion-clipboard.md) · [हिन्दी](../hi/notion-clipboard.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** Équipe de présentation REA ; auteurs du projet original crédités dans les sources
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Notion Desktop 7.6.1 app.asar et un module d'édition Web mis en cache à un moment différent

## La question

Comment un éditeur Web écrit-il du texte enrichi via le presse-papiers du bureau ?

## Ce que REA a fait

REA analyse statiquement le préchargement de l'onglet pour localiser le pont de contexte et l'invocation IPC. La lecture directe du code groupé remplit l'API du presse-papiers, les canaux et le récepteur du processus principal.

## Résultats rapportés par l'auteur

La vitrine explique le moteur de rendu → préchargement → IPC → principal au niveau source et démontre les marqueurs de texte enrichi et les tableaux Markdown dans une sonde de module indépendante.

## Limitations et réclamations non vérifiées

Le graphique REA n’a pas résolu automatiquement la chaîne complète des canaux du Presse-papiers. L'éditeur Web et le package de bureau ne correspondent pas aux exemples d'exécution ; le vrai copy/paste n’a pas été capturé sur la même version.

## Quoi apprendre

Structures séparées renvoyées par REA, conclusions de la lecture manuelle du code et résultats de sondes indépendantes.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> The published npm REA 4.1.0 package inspected the saved tab preload on 7 October 2026

## Sources originales

- [Source principale/preuve épinglée](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md)
- [Projet / démo](https://rea.tools/showcase/notion/)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
