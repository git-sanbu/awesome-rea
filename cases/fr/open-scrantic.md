# Open Scrantic: reconstruction du moteur d'économiseur d'écran Johnny Castaway dans Rust

[← Retour à tous les cas](../../README.fr.md) · Jeux

[English](../open-scrantic.md) · [简体中文](../zh-CN/open-scrantic.md) · [繁體中文](../zh-TW/open-scrantic.md) · [日本語](../ja/open-scrantic.md) · [한국어](../ko/open-scrantic.md) · [Español](../es/open-scrantic.md) · [Français](../fr/open-scrantic.md) · [Deutsch](../de/open-scrantic.md) · [Português (Brasil)](../pt-BR/open-scrantic.md) · [Русский](../ru/open-scrantic.md) · [العربية](../ar/open-scrantic.md) · [हिन्दी](../hi/open-scrantic.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** glauberlima
- **Date d'examen des sources:** 2026-10-26
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Screen Antics : Johnny Castaway (1992), Windows 3.1 SCRANTIC.SCR et fichiers de ressources correspondants

## La question

Comment l'interpréteur de script, le calendrier d'histoire et le comportement aléatoire d'un économiseur d'écran 16-bit peuvent-ils fonctionner sur les systèmes modernes ?

## Ce que REA a fait

The developer explicitly credits Claude Code with REA for disassembling and decompiling SCRANTIC.SCR, recovering resource formats and script semantics, and producing the Rust implementation and documentation.

## Résultats rapportés par l'auteur

The public Rust engine implements resource loading, TTM/ADS script execution, story progression, timing and the original random-number generator. ENGINE.md enregistre les règles récupérées et les différences délibérées ; l'auteur fournit les chemins de version Windows, macOS et Linux.

## Limitations et réclamations non vérifiées

Le moteur nécessite les propres fichiers originaux correspondants de l’utilisateur et rejette les autres versions exécutables. Redessinage plein écran, traitement image/audio en option et paramètres différents de l'original. Le comportement multiplateforme et l'équivalence n'ont pas été testés de manière indépendante ici ; Les sessions brutes REA n'ont pas été trouvées dans les fichiers examinés.

## Quoi apprendre

Keep original asset ownership separate from engine code, preserve arithmetic and scheduling rules, and document deliberate compatibility differences.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Together they were used to disassemble and decompile the original
`SCRANTIC.SCR`, recover the resource formats and script semantics, and write the Rust code, tests and
documentation.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md)
- [Projet / démo](https://github.com/glauberlima/open-scrantic)
- [Source supplémentaire 1](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/docs/ENGINE.md)
- [Source supplémentaire 2](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/rng.rs)
- [Source supplémentaire 3](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/config.rs)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
