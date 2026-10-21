# Wispr Flow: un démontage de la saisie vocale et un petit prototype local

[← Retour à tous les cas](../../README.fr.md) · Applications

[English](../wispr-flow.md) · [简体中文](../zh-CN/wispr-flow.md) · [繁體中文](../zh-TW/wispr-flow.md) · [日本語](../ja/wispr-flow.md) · [한국어](../ko/wispr-flow.md) · [Español](../es/wispr-flow.md) · [Français](../fr/wispr-flow.md) · [Deutsch](../de/wispr-flow.md) · [Português (Brasil)](../pt-BR/wispr-flow.md) · [Русский](../ru/wispr-flow.md) · [العربية](../ar/wispr-flow.md) · [हिन्दी](../hi/wispr-flow.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** az9713
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Package Wispr Flow 1.6.1102 Electron et assistant natif

## La question

Comment l’enregistrement, la transcription, le contexte et le collage sont-ils connectés ?

## Ce que REA a fait

Le rapport combine l'analyse statique REA CLI JavaScript, la lecture directe du bundle et l'enquête REA + Ghidra sur le code de collage auxiliaire. Les allégations sont marquées comme étant prouvées, déduites ou cachées.

## Résultats rapportés par l'auteur

L'auteur publie un démontage, une enquête supplémentaire sur le Ghidra, un dossier de développement et un prototype local du flowlite.py.

## Limitations et réclamations non vérifiées

Les deux premiers appels MCP ont expiré. Certaines conclusions proviennent d'autres outils ou de lecture manuelle de code. L'application d'origine n'a pas été exécutée et le trafic réseau n'a pas été capturé, de sorte que les modèles et le comportement des serveurs restent masqués. Le prototype omet le contexte, le streaming et la validation complète.

## Quoi apprendre

Enregistrer les échecs et les outils supplémentaires. L'analyse client ne peut pas établir le fonctionnement d'un modèle côté serveur.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Wispr Flow, reverse engineered with REA

## Sources originales

- [Source principale/preuve épinglée](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md)
- [Projet / démo](https://github.com/az9713/wispr-flow-rea-teardown)
- [Source supplémentaire 1](https://az9713.github.io/wispr-flow-rea-teardown/wispr-flow-teardown.html)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
