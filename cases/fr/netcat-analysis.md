# OpenBSD netcat: analyse statique d'un ELF livré

[← Retour à tous les cas](../../README.fr.md) · Analyse et évaluation

[English](../netcat-analysis.md) · [简体中文](../zh-CN/netcat-analysis.md) · [繁體中文](../zh-TW/netcat-analysis.md) · [日本語](../ja/netcat-analysis.md) · [한국어](../ko/netcat-analysis.md) · [Español](../es/netcat-analysis.md) · [Français](../fr/netcat-analysis.md) · [Deutsch](../de/netcat-analysis.md) · [Português (Brasil)](../pt-BR/netcat-analysis.md) · [Русский](../ru/netcat-analysis.md) · [العربية](../ar/netcat-analysis.md) · [हिन्दी](../hi/netcat-analysis.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** NullLabTests
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Ubuntu netcat-openbsd 1.234-1 binaire

## La question

Quelles implémentations liées au réseau, au proxy et à la sécurité se trouvent dans le binaire netcat fourni ?

## Ce que REA a fait

Les vérifications de disposition pwntools de REA et le chemin Ghidra analysent la même image, avec readelf, objdump, nm et chaînes utilisées pour les vérifications croisées.

## Résultats rapportés par l'auteur

L'auteur publie des enquêtes sur les fonctions, les chaînes et les chemins d'appel, les résultats.txt et la sortie JSON brute sous files/..

## Limitations et réclamations non vérifiées

Il s'agit d'une analyse statique d'une version spécifique. Les importations et le pseudocode à eux seuls n'établissent pas tous les comportements d'exécution ni ne constituent une certification de sécurité.

## Quoi apprendre

Conservez la sortie brute du REA avec des vérifications d'outils indépendantes afin que les conclusions puissent être examinées.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> We ran two providers against the same image and cross-checked with readelf, objdump, nm, and strings.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md)
- [Projet / démo](https://github.com/NullLabTests/OpenBSD_netcat_REA)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
