# hexgrab: enquête sur le sélecteur de couleurs PowerToys

[← Retour à tous les cas](../../README.fr.md) · Applications

[English](../hexgrab.md) · [简体中文](../zh-CN/hexgrab.md) · [繁體中文](../zh-TW/hexgrab.md) · [日本語](../ja/hexgrab.md) · [한국어](../ko/hexgrab.md) · [Español](../es/hexgrab.md) · [Français](../fr/hexgrab.md) · [Deutsch](../de/hexgrab.md) · [Português (Brasil)](../pt-BR/hexgrab.md) · [Русский](../ru/hexgrab.md) · [العربية](../ar/hexgrab.md) · [हिन्दी](../hi/hexgrab.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** iammukeshm
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Binaires de sélecteur de couleurs distribués avec Microsoft PowerToys

## La question

Comment les raccourcis clavier globaux, l'échantillonnage de pixels et le presse-papiers fonctionnent-ils ensemble ?

## Ce que REA a fait

L'auteur analyse les binaires publiés avec REA, vérifie chaque résultat par rapport à une source publique et crée un sélecteur de couleurs indépendant plus petit avec .NET 10 / WPF.

## Résultats rapportés par l'auteur

Public source and docs/rea-findings.md are provided. L'auteur rapporte que les résultats de 8 sur 9 étaient tout à fait corrects.

## Limitations et réclamations non vérifiées

Testé uniquement sur un moniteur à la mise à l'échelle 125% ; Le comportement de plusieurs moniteurs à DPI mixtes n'a pas été testé sur du matériel réel. Le résultat 8/9 est la vérification par l’auteur de cette enquête, et non un taux de précision général du REA.

## Quoi apprendre

Entraînez-vous sur des logiciels de source publique afin que les résultats des outils puissent être vérifiés.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> to study how the Color Picker in Microsoft PowerToys works from its shipped binaries

## Sources originales

- [Source principale/preuve épinglée](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md)
- [Projet / démo](https://github.com/iammukeshm/hexgrab)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
