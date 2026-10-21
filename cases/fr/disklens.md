# DiskLens: vérification des algorithmes d'analyse de disque et de treemap dans un binaire publié

[← Retour à tous les cas](../../README.fr.md) · Applications

[English](../disklens.md) · [简体中文](../zh-CN/disklens.md) · [繁體中文](../zh-TW/disklens.md) · [日本語](../ja/disklens.md) · [한국어](../ko/disklens.md) · [Español](../es/disklens.md) · [Français](../fr/disklens.md) · [Deutsch](../de/disklens.md) · [Português (Brasil)](../pt-BR/disklens.md) · [Русский](../ru/disklens.md) · [العربية](../ar/disklens.md) · [हिन्दी](../hi/disklens.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** KarlssonChristoffer
- **Date d'examen des sources:** 2026-10-19
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** WinDirStat 2.5.0 Windows exécutable et source publique

## La question

Comment vérifier l'analyse du disque, les arborescences et la détection des doublons avant de créer une nouvelle interface ?

## Ce que REA a fait

Claude Code utilise REA et Ghidra sur le fichier WinDirStat.exe installé pour confirmer l'énumération des répertoires, le lecteur NTFS MFT, les valeurs par défaut du treemap et la déduplication SHA-512. L'auteur déclare que les détails de l'algorithme provenaient principalement de la source de lecture ; REA a vérifié le binaire publié et a guidé l'enquête.

## Résultats rapportés par l'auteur

Le projet publie un moteur Rust, une interface Tauri/Svelte et des identifiants REA Evidence. L'auteur rapporte des tests du moteur 24 et une vérification scan/treemap d'environ un million de fichiers 1.3 sur une seule machine.

## Limitations et réclamations non vérifiées

L'auteur n'a explicitement pas examiné le code généré. Plusieurs opérations de fichiers et intégrations système manquent de vérifications réelles de l’interface utilisateur. L'analyse MFT rapide est absente et les liens physiques sont comptés deux fois. Certains algorithmes portent directement la source GPL, il ne s'agit donc pas d'une reconstruction en salle blanche d'un logiciel à source fermée. Le timing sur une seule machine n’est pas une comparaison contrôlée des performances.

## Quoi apprendre

Attribuez séparément les observations binaires et la lecture de la source, et indiquez quelles opérations sur les fichiers ont été réellement testées.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Claude used REA on the WinDirStat 2.5.0 installed on my PC

## Sources originales

- [Source principale/preuve épinglée](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md)
- [Projet / démo](https://github.com/KarlssonChristoffer/DiskLens)
- [Source supplémentaire 1](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/docs/research.md)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
