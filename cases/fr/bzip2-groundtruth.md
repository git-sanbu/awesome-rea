# bzip2: vérification des résultats binaires supprimés par rapport à une version symbolisée

[← Retour à tous les cas](../../README.fr.md) · Analyse et évaluation

[English](../bzip2-groundtruth.md) · [简体中文](../zh-CN/bzip2-groundtruth.md) · [繁體中文](../zh-TW/bzip2-groundtruth.md) · [日本語](../ja/bzip2-groundtruth.md) · [한국어](../ko/bzip2-groundtruth.md) · [Español](../es/bzip2-groundtruth.md) · [Français](../fr/bzip2-groundtruth.md) · [Deutsch](../de/bzip2-groundtruth.md) · [Português (Brasil)](../pt-BR/bzip2-groundtruth.md) · [Русский](../ru/bzip2-groundtruth.md) · [العربية](../ar/bzip2-groundtruth.md) · [हिन्दी](../hi/bzip2-groundtruth.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** CassieFox23
- **Date d'examen des sources:** 2026-10-19
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** bzip2 1.0.8 compilé avec gcc -O2 et supprimé, Linux x86-64

## La question

Comment trouver une fonction à partir d’une chaîne de sortie et vérifier ses relations d’appel ?

## Ce que REA a fait

REA 6.4.0 et Ghidra localisent une fonction à partir d'une chaîne, répertorient les appelants et les appelés et renvoient Evidence étiqueté observed/derived.. L'auteur vérifie séparément une version non supprimée de la même source avec le code source, nm et objdump.

## Résultats rapportés par l'auteur

L'auteur rapporte avoir trouvé une décompression avec l'appelant 1 et les appelés 24 correspondant à la version de référence. Les étapes de construction, les enregistrements MCP supprimés et deux classes de réponses d'erreur sont publics.

## Limitations et réclamations non vérifiées

Un programme, une configuration de compilation et une fonction, sans comparaison d'outils. Les bords 24 sont des appels directs résolus par le fournisseur, et non un graphique d'exécution complet. Le script client complet n'est pas public ; l'archive a un hachage enregistré mais aucune vérification de signature. Ce catalogue ne l'a pas réédité.

## Quoi apprendre

Construisez la vérité terrain à partir d’une construction symbolisée correspondante et d’observations, d’inférences et de vérifications de références séparées.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> REA's function, one caller and 24 callees all matched an unstripped build and the source.

## Sources originales

- [Discussion publique / modifiable au moment de la révision](https://github.com/morluto/rea/discussions/2254)
- [Projet / démo](https://github.com/morluto/rea/discussions/2254)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
