# OpenBattlefield2: niveau fonction Evidence pour un client Battlefield 2

[← Retour à tous les cas](../../README.fr.md) · Jeux

[English](../openbattlefield2.md) · [简体中文](../zh-CN/openbattlefield2.md) · [繁體中文](../zh-TW/openbattlefield2.md) · [日本語](../ja/openbattlefield2.md) · [한국어](../ko/openbattlefield2.md) · [Español](../es/openbattlefield2.md) · [Français](../fr/openbattlefield2.md) · [Deutsch](../de/openbattlefield2.md) · [Português (Brasil)](../pt-BR/openbattlefield2.md) · [Русский](../ru/openbattlefield2.md) · [العربية](../ar/openbattlefield2.md) · [हिन्दी](../hi/openbattlefield2.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** Moxnatiy
- **Date d'examen des sources:** 2026-10-21
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Client Battlefield 2 1.5 Refractor 2, rendu des DLL et des données de jeu originales

## La question

Comment la recherche sur le réticule, le HUD et le comportement binaire peut-elle éclairer la mise en œuvre d'un moteur traçable ?

## Ce que REA a fait

REA 4.1.0 et Ghidra 12.1.4 lisent les fichiers 32-bit PE et collectent les dossiers Evidence complets. Des requêtes directes Ghidra, des données de jeu et des symboles de serveur complètent cela. Les notes en forme de croix incluent le GuiIndex, les adresses de position et d'accumulation de décalage et les ID REA Evidence ; REA gère uniquement l’étape d’analyse.

## Résultats rapportés par l'auteur

Le projet publie un moteur C++20, des notes de fonctions, des tests et des captures d'écran. L'auteur rapporte avoir chargé une installation appartenant à BF2 1.5, se connectant à un serveur dédié d'origine et affichant les soldats et le HUD. En mode connecté, le réticule s'affiche, s'étend pendant le mouvement et se contracte à l'arrêt, avec des contrôles tels que test_weapon_hud.

## Limitations et réclamations non vérifiées

Le projet de recherche manque encore de tir, de conduite des véhicules et de son. Les mises à jour du changement d'arme, du zoom et du tir en croix restent inachevées ; le mode hébergé n'a pas de réticule. La plate-forme principale est macOS arm64 et la version Windows n'a pas été exécutée. Les résultats impliquent plusieurs outils et ne peuvent pas tous être attribués à REA. Ce catalogue ne l'a pas réédité.

## Quoi apprendre

Connectez les adresses, Evidence, les commandes d’implémentation et d’acceptation pour une fonctionnalité observable.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Addresses are BF2.exe unless named otherwise; the evidence IDs are REA’s

## Sources originales

- [Source principale/preuve épinglée](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md)
- [Projet / démo](https://github.com/Moxnatiy/OpenBattlefield2)
- [Source supplémentaire 1](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/README.md)
- [Source supplémentaire 2](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/CLAUDE.md)
- [Source supplémentaire 3](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/tools/rea.sh)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
