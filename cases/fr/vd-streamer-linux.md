# Virtual Desktop Streamer: un port Linux via une couche plateforme de remplacement

[← Retour à tous les cas](../../README.fr.md) · Matériel et compatibilité

[English](../vd-streamer-linux.md) · [简体中文](../zh-CN/vd-streamer-linux.md) · [繁體中文](../zh-TW/vd-streamer-linux.md) · [日本語](../ja/vd-streamer-linux.md) · [한국어](../ko/vd-streamer-linux.md) · [Español](../es/vd-streamer-linux.md) · [Français](../fr/vd-streamer-linux.md) · [Deutsch](../de/vd-streamer-linux.md) · [Português (Brasil)](../pt-BR/vd-streamer-linux.md) · [Русский](../ru/vd-streamer-linux.md) · [العربية](../ar/vd-streamer-linux.md) · [हिन्दी](../hi/vd-streamer-linux.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** cudanexus
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Packages d'installation officiels Virtual Desktop macOS et Windows

## La question

Comment la capture, l'encodage, l'audio et l'entrée peuvent-ils être déplacés vers Linux tout en conservant la bibliothèque de protocoles ?

## Ce que REA a fait

L'auteur déclare que Claude Code et REA analysent les deux packages. Une bibliothèque de protocoles macOS fournie par le lecteur est réutilisée, tandis que la couche plateforme Linux est réécrite.

## Résultats rapportés par l'auteur

Le port public Linux comprend les sources, les instructions de construction et les tests de casques simulés utilisant PipeWire/X11, GStreamer et uinput.

## Limitations et réclamations non vérifiées

Aucun test réel de casque, de Wi-Fi ou d’encodeur GPU n’a été effectué. Les fonctionnalités de jeu SteamVR/OpenXR du streamer Windows ne sont pas prises en charge. La dépendance à l'égard de la bibliothèque de protocoles du fournisseur signifie qu'il ne s'agit pas d'une réécriture de protocole totalement indépendante.

## Quoi apprendre

Concentrez le travail de compatibilité sur les limites de la plate-forme et distinguez les tests de périphériques simulés de l'acceptation du matériel réel.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> This port was built by Claude Code (Claude Opus) with the REA reverse-engineering tools

## Sources originales

- [Source principale/preuve épinglée](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md)
- [Projet / démo](https://github.com/cudanexus/vd-streamer-linux)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
