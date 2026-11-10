# DESIGN:OS Studio : un studio de bureau indépendant qui lit et écrit les fichiers Figma .fig

[← Retour à tous les cas](../../README.fr.md) · Applications

[English](../design-os-studio.md) · [简体中文](../zh-CN/design-os-studio.md) · [繁體中文](../zh-TW/design-os-studio.md) · [日本語](../ja/design-os-studio.md) · [한국어](../ko/design-os-studio.md) · [Español](../es/design-os-studio.md) · [Français](../fr/design-os-studio.md) · [Deutsch](../de/design-os-studio.md) · [Português (Brasil)](../pt-BR/design-os-studio.md) · [Русский](../ru/design-os-studio.md) · [العربية](../ar/design-os-studio.md) · [हिन्दी](../hi/design-os-studio.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** jangtrinh
- **Date d'examen des sources:** 2026-11-10
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Figma Desktop et le format de conteneur Figma .fig (fig-kiwi, écrit la version 106)

## La question

Comment lire et écrire des conteneurs Figma .fig, et réimplémenter le comportement de l’éditeur, dans un studio de bureau indépendant ?

## Ce que REA a fait

Les spécifications publiques du projet désignent morluto/rea 6.7.0 (`npx -y rea-agents`) comme outil d’ingénierie inverse des champs Figma, et indiquent qu’il a exécuté analyze-javascript-application sur du JavaScript d’éditeur extrait. Les mêmes notes précisent que les voies wasm étaient indisponibles (WABT et Ghidra n’étaient pas installés), si bien que le schéma kiwi a été décodé avec un lecteur local. Les rapports versionnés contiennent aussi des sorties de la CLI rea, y compris des exécutions terminées de inspect-macho et analyze-javascript-application, ainsi que certaines invocations en échec. Le README du produit ne mentionne pas REA.

## Résultats rapportés par l'auteur

DESIGN:OS Studio est un studio de bureau publié (v0.7.11 examinée) qui lit les conteneurs Figma .fig et écrit la version 106, réimplémente le comportement de l’éditeur en local, et fournit un serveur MCP stdio de 39 outils ainsi qu’une génération de code multi-langages. Le README indique plus de 6 000 tests CI macOS et des tests aller-retour designos-fig. Le mainteneur affirme que REA a été utilisé pour ce travail Figma. Ce catalogue a examiné les spécifications publiques, les sorties rea versionnées et le README ; il n’a pas installé le studio ni relancé rea.

## Limitations et réclamations non vérifiées

Le README du produit n’attribue pas REA. Certaines exécutions rea enregistrées ont échoué (commande inconnue ou fournisseur d’analyse native non configuré). Les brouillons de session complets cités ailleurs sont conservés hors du dépôt. Le problème connu #834 reste ouvert : l’enregistrement d’un .fig perd le formatage des listes numérotées et écrit comme valeurs fixes les peintures héritées ou liées à des variables sur les instances. La licence est PolyForm Shield 1.0.0 (source disponible, pas une licence open source). Ce catalogue n’a pas reproduit de façon indépendante la compatibilité .fig ni relancé la suite de tests.

## Quoi apprendre

L’usage documenté de REA peut figurer dans les spécifications et dans des preuves CLI versionnées même si le README du produit est silencieux, et un flux mixte peut encore exiger une solution locale de repli lorsque les voies wasm de REA sont indisponibles.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [Projet / démo](https://github.com/jangtrinh/design-os-studio)
- [Source supplémentaire 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [Source supplémentaire 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [Source supplémentaire 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
