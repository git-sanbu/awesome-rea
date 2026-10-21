# GunZRs: identification d'une limite de regroupement avant la reconstruction à partir des données de jeu

[← Retour à tous les cas](../../README.fr.md) · Jeux

[English](../gunzrs.md) · [简体中文](../zh-CN/gunzrs.md) · [繁體中文](../zh-TW/gunzrs.md) · [日本語](../ja/gunzrs.md) · [한국어](../ko/gunzrs.md) · [Español](../es/gunzrs.md) · [Français](../fr/gunzrs.md) · [Deutsch](../de/gunzrs.md) · [Português (Brasil)](../pt-BR/gunzrs.md) · [Русский](../ru/gunzrs.md) · [العربية](../ar/gunzrs.md) · [हिन्दी](../hi/gunzrs.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** OpenRsG
- **Date d'examen des sources:** 2026-10-21
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** GunZ : L'installation de Duel Steam, Gunz.exe et archives .mrs

## La question

Comment la reconstruction peut-elle continuer lorsqu'un exécutable compressé empêche la récupération statique de la logique du jeu ?

## Ce que REA a fait

REA et Ghidra étudient les fichiers natifs. L'auteur enregistre les sections Themida, l'entrée RVA et les talons de déballage dans Gunz.exe, avec les chemins locaux REA Evidence. Les formats de jeu sont alors principalement récupérés à partir de la structure des fichiers de données. Les scripts publics couvrent également les requêtes REA, les appareils ELF/PE générés, l'analyse, la mise en cache et la propagation des échecs.

## Résultats rapportés par l'auteur

Le projet publie une reconstruction Rust + Bevy, des notes de format, des scripts de requête et des tests. L'auteur rapporte la jouabilité du Linux avec une installation propriétaire, des cartes, des actions, des robots, une version de navigateur et un réseau local. L'analyse des fonctions ELF/PE générée et les contrôles de relecture des instantanés sont enregistrés séparément de la compatibilité du jeu.

## Limitations et réclamations non vérifiées

Le code du jeu compressé n'a pas été récupéré de manière statique, et certains comportements et timings sont déduits. L'original Evidence reste local pour l'auteur ; le matériel public comprend des descriptions et des scripts. Les builds Windows/macOS CI sont signalés mais n'ont pas été lus par l'auteur. Les décomptes de cartes ont des portées de notes différentes et ne prouvent pas une compatibilité totale. Ce catalogue ne l'a pas réédité.

## Quoi apprendre

Un échec d’analyse peut toujours établir une limite utile : étiqueter séparément les faits binaires, les observations et les inférences des fichiers de données.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> stub (REA evidence under .local/re/a076a5d8…/). Game code is not statically readable

## Sources originales

- [Source principale/preuve épinglée](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md)
- [Projet / démo](https://github.com/OpenRsG/GunZRs)
- [Source supplémentaire 1](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/README.md)
- [Source supplémentaire 2](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/reverse-engineering.md)
- [Source supplémentaire 3](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/scripts/rea.sh)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
