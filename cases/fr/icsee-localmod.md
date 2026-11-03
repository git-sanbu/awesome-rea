# iCSee localmod: traçage des commandes de la caméra tout en préservant les pilotes d'origine

[← Retour à tous les cas](../../README.fr.md) · Matériel et compatibilité

[English](../icsee-localmod.md) · [简体中文](../zh-CN/icsee-localmod.md) · [繁體中文](../zh-TW/icsee-localmod.md) · [日本語](../ja/icsee-localmod.md) · [한국어](../ko/icsee-localmod.md) · [Español](../es/icsee-localmod.md) · [Français](../fr/icsee-localmod.md) · [Deutsch](../de/icsee-localmod.md) · [Português (Brasil)](../pt-BR/icsee-localmod.md) · [Русский](../ru/icsee-localmod.md) · [العربية](../ar/icsee-localmod.md) · [हिन्दी](../hi/icsee-localmod.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** Vittuu
- **Date d'examen des sources:** 2026-11-03
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Une caméra XM530V200 / IPG-X2-WQ-BL et son application d'origine Sofia

## La question

Comment la recherche de commandes natives peut-elle permettre le contrôle local de la caméra tout en préservant les pilotes fonctionnels et l'enregistrement SD ?

## Ce que REA a fait

REA 6.8.0 et Ghidra ont tracé les chaînes de commande Sofia et les références croisées aux gestionnaires d'éclairage et PTZ. Le flux de travail publié enregistre les ancres spécifiques aux binaires ; les réponses au protocole et le comportement physique ont été validés séparément.

## Résultats rapportés par l'auteur

L'auteur publie un C panel/API local, une source et des exemples Home Assistant. Le propriétaire signale des vérifications physiques du PTZ et des LED blanches, le décodage du audio/video, la persistance du démarrage et la poursuite de l'enregistrement natif du WFS après des redémarrages indépendants. Un enregistrement public distinct de backend simulé répertorie les tests réussis par 22 et indique explicitement hardware_tested=false.

## Limitations et réclamations non vérifiées

Les bundles complets de firmware, de décompilation et privés Evidence ne sont pas publiés. Les résultats matériels sont des rapports de propriétaire pour une unité ; les tests simulés ne valident pas l’installation du micrologiciel ou le comportement physique. Il s'agit d'une extension du firmware d'origine, sans image universelle, sans interphone complet ni amélioration de la latence mesurée. Le protecteur de suppression de route n'est pas un pare-feu ; ce catalogue n'a pas testé un appareil.

## Quoi apprendre

Tracez une commande limitée, vérifiez les réponses authentifiées, puis vérifiez l'action physique et la persistance en tant qu'étapes distinctes.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> REA/Ghidra supported analysis; Codex assisted with development and writing.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/REA-GHIDRA-WORKFLOW.md)
- [Projet / démo](https://github.com/Vittuu/icsee-localmod)
- [Source supplémentaire 1](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/README.md)
- [Source supplémentaire 2](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/VALIDATION.md)
- [Source supplémentaire 3](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/simulation-validation.json)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
