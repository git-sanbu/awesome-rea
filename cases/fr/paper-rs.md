# Sketch (formerly paper-rs): une toile infinie Rust inspirée de Paper

[← Retour à tous les cas](../../README.fr.md) · Applications

[English](../paper-rs.md) · [简体中文](../zh-CN/paper-rs.md) · [繁體中文](../zh-TW/paper-rs.md) · [日本語](../ja/paper-rs.md) · [한국어](../ko/paper-rs.md) · [Español](../es/paper-rs.md) · [Français](../fr/paper-rs.md) · [Deutsch](../de/paper-rs.md) · [Português (Brasil)](../pt-BR/paper-rs.md) · [Русский](../ru/paper-rs.md) · [العربية](../ar/paper-rs.md) · [हिन्दी](../hi/paper-rs.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** michaelshimeles
- **Date d'examen des sources:** 2026-10-21
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Comportement de l'application de conception de bureau Paper

## La question

Comment les interactions entre le canevas, la mise en page et l’éditeur peuvent-elles éclairer un outil de conception indépendant ?

## Ce que REA a fait

L'auteur déclare que REA et Claude Code ont été utilisés pour étudier le comportement du bureau de Paper avant d'implémenter une application Rust distincte avec wgpu, winit et egui.

## Résultats rapportés par l'auteur

Le projet publie un canevas infini, des pages, des mises en page, une édition vectorielle, un tableau blanc et des interfaces MCP, avec des tests et des différences de fonctionnalités. Examiné sur 2026-10-21:, il s'appelle désormais Sketch, avec l'exécutable sketch-rs, migration au premier lancement de l'ancien répertoire du projet et compatibilité avec les anciens fichiers et variables d'environnement. Cela reste un cas.

## Limitations et réclamations non vérifiées

L'auteur ne l'avait explicitement pas lancé sur du matériel réel macOS. Certaines fonctionnalités sont approximatives ou manquantes. L'inclusion repose sur l'attribution publique de l'auteur et non sur l'équivalence vérifiée avec Paper.

## Quoi apprendre

Apprenez les contrats de comportement et d’interaction tout en précisant les limites de la mise en œuvre indépendante.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> by studying the behavior of the Paper desktop app with REA and Claude Code

## Sources originales

- [Source principale/preuve épinglée](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md)
- [Projet / démo](https://github.com/michaelshimeles/paper-rs)
- [Source supplémentaire 1](https://github.com/michaelshimeles/paper-rs/blob/0b1b91da7caa10abae7cbf75d2ce003822c85fe9/README.md)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
