# AdamTerm: enquêter sur le shell du Ghostty et construire un terminal

[← Retour à tous les cas](../../README.fr.md) · Applications

[English](../adamterm.md) · [简体中文](../zh-CN/adamterm.md) · [繁體中文](../zh-TW/adamterm.md) · [日本語](../ja/adamterm.md) · [한국어](../ko/adamterm.md) · [Español](../es/adamterm.md) · [Français](../fr/adamterm.md) · [Deutsch](../de/adamterm.md) · [Português (Brasil)](../pt-BR/adamterm.md) · [Русский](../ru/adamterm.md) · [العربية](../ar/adamterm.md) · [हिन्दी](../hi/adamterm.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** AdamLinCodes
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Ghostty 1.3.1 macOS app bundle

## La question

Comment sont répartis le noyau du terminal, les fenêtres natives, les menus et les services ?

## Ce que REA a fait

REA inspecte Mach-O, les plisses, les signatures, les métadonnées Objective-C, Interface Builder et la résolution de la bibliothèque dynamique. This path did not use Hopper or Ghidra.

## Résultats rapportés par l'auteur

L'auteur construit un terminal macOS plus petit avec AppKit, SwiftTerm et des onglets natifs, et fournit des commandes d'auto-vérification.

## Limitations et réclamations non vérifiées

Il utilise SwiftTerm plutôt que de reconstruire le noyau Zig de Ghostty. Les volets divisés, une barre de recherche, des fichiers de configuration et un terminal rapide ne sont pas implémentés.

## Quoi apprendre

Les métadonnées du package et les ressources d'interface peuvent répondre à certaines questions d'architecture avant une décompilation approfondie.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> A minimal macOS terminal built by reverse-engineering Ghostty 1.3.1 with REA

## Sources originales

- [Source principale/preuve épinglée](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md)
- [Projet / démo](https://github.com/AdamLinCodes/AdamTerm)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
