# Desktop Games: portage d'un jouet de bureau sur macOS et le navigateur

[← Retour à tous les cas](../../README.fr.md) · Jeux

[English](../desktop-games-nostalgia.md) · [简体中文](../zh-CN/desktop-games-nostalgia.md) · [繁體中文](../zh-TW/desktop-games-nostalgia.md) · [日本語](../ja/desktop-games-nostalgia.md) · [한국어](../ko/desktop-games-nostalgia.md) · [Español](../es/desktop-games-nostalgia.md) · [Français](../fr/desktop-games-nostalgia.md) · [Deutsch](../de/desktop-games-nostalgia.md) · [Português (Brasil)](../pt-BR/desktop-games-nostalgia.md) · [Русский](../ru/desktop-games-nostalgia.md) · [العربية](../ar/desktop-games-nostalgia.md) · [हिन्दी](../hi/desktop-games-nostalgia.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** ucodia
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Programme 2000 jeux de bureau/réducteurs de stress de Gemtree Windows

## La question

Comment l'interpréteur Peter, l'arborescence du programme, les interactions et les actifs peuvent-ils être compris et portés ?

## Ce que REA a fait

L'auteur utilise Claude Code, REA et Ghidra. REA étudie la compression d'image, la disposition des ressources, le timing, le mouvement des sprites, le son et les coordonnées dans l'interpréteur ; Les outils Python traitent l'arborescence du programme et les actifs.

## Résultats rapportés par l'auteur

Le référentiel public comprend une version Swift macOS, une version du navigateur, une arborescence de programmes décompilée et des scripts de traitement des actifs.

## Limitations et réclamations non vérifiées

L'auteur utilise les vraies couleurs au lieu de la palette d'origine et modifie le rendu des ombres. L'inclusion ne vérifie pas la compatibilité complète ni les droits de redistribution des actifs tiers.

## Quoi apprendre

Pour les logiciels avec un interpréteur intégré, distinguez l'interpréteur, l'arborescence du programme et les actifs.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> The interpreter was decompiled with REA

## Sources originales

- [Source principale/preuve épinglée](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md)
- [Projet / démo](https://github.com/ucodia/desktop-games-nostalgia)
- [Source supplémentaire 1](https://ucodia.github.io/desktop-games-nostalgia/)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
