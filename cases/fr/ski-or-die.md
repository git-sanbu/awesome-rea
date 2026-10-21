# Ski or Die: reconstruction de Snowball War en Rust

[← Retour à tous les cas](../../README.fr.md) · Jeux

[English](../ski-or-die.md) · [简体中文](../zh-CN/ski-or-die.md) · [繁體中文](../zh-TW/ski-or-die.md) · [日本語](../ja/ski-or-die.md) · [한국어](../ko/ski-or-die.md) · [Español](../es/ski-or-die.md) · [Français](../fr/ski-or-die.md) · [Deutsch](../de/ski-or-die.md) · [Português (Brasil)](../pt-BR/ski-or-die.md) · [Русский](../ru/ski-or-die.md) · [العربية](../ar/ski-or-die.md) · [हिन्दी](../hi/ski-or-die.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** tuunanet
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Mini-jeu Snowball War de l'édition DOS de Ski or Die

## La question

Comment les règles de lancer, de collision, d'apparition et de notation peuvent-elles être récupérées à partir d'un jeu DOS ?

## Ce que REA a fait

REA CLI et l'adaptateur Ghidra 16-bit inspectent une image de chargement MZ décompressée. Les germes de code déclarés par l'appelant et les requêtes trace/function/search étudient les modules.

## Résultats rapportés par l'auteur

L'auteur publie une reconstruction jouable Rust + SDL2, des spécifications de comportement, des notes de rétro-ingénierie et des outils d'extraction d'actifs.

## Limitations et réclamations non vérifiées

Seul Snowball War est reconstruit. Il n'y a pas de lecture audio ni de comparaison côte à côte avec l'original DOS en cours d'exécution ; la fréquence d'images et le comportement du PRNG sont approximés. Les actifs doivent provenir de la propre copie du jeu du lecteur.

## Quoi apprendre

Écrivez des spécifications de comportement basées sur l'adresse avant de réécrire et étiquetez chaque approximation.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Every analysis call therefore ran through the REA CLI

## Sources originales

- [Source principale/preuve épinglée](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md)
- [Projet / démo](https://github.com/tuunanet/rea-ski-or-die-reconstruction)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
