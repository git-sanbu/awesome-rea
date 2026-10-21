# PicoPrint: connecter une imprimante thermique mobile à l'impression Windows

[← Retour à tous les cas](../../README.fr.md) · Matériel et compatibilité

[English](../picoprint.md) · [简体中文](../zh-CN/picoprint.md) · [繁體中文](../zh-TW/picoprint.md) · [日本語](../ja/picoprint.md) · [한국어](../ko/picoprint.md) · [Español](../es/picoprint.md) · [Français](../fr/picoprint.md) · [Deutsch](../de/picoprint.md) · [Português (Brasil)](../pt-BR/picoprint.md) · [Русский](../ru/picoprint.md) · [العربية](../ar/picoprint.md) · [हिन्दी](../hi/picoprint.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** bigtower17
- **Date d'examen des sources:** 2026-10-19
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Imprimante thermique Bluetooth LX-D02 et application Funny Print React Native Android

## La question

Lorsqu'un pilote se connecte mais n'imprime pas, comment détecter les différences de prise de contact ?

## Ce que REA a fait

Dans la discussion REA #4152, l'auteur indique que REA 6.5.0 a fourni le médecin, les vérifications des appareils ADB et le point d'entrée de l'enquête Android. Décompilation réelle du bytecode Hermes utilisée par Hermes-dec ; l'inférence de protocole et la comparaison du trafic n'étaient pas un travail réservé au REA.

## Résultats rapportés par l'auteur

L'auteur publie un service d'impression Go basé sur l'impression thermique et des notes de protocole, signalant l'impression Ctrl+P de textes, d'images et de documents sur Windows 11 avec un vrai LX-D02 et un correctif de poignée de main en amont.

## Limitations et réclamations non vérifiées

Premier projet sans programme d'installation en un clic, sans statut de plateau ni reconnexion automatique. La discussion note explicitement que REA ne couvrait pas à l’époque l’étape d’analyse Hermes de cette cible. Un appareil et un système d'exploitation n'établissent pas la compatibilité avec toutes les versions du micrologiciel ou du Windows.

## Quoi apprendre

Distinguez la connexion de l’impression et enregistrez l’étape exacte traitée par chaque outil.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> used to analyse the Android app.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md)
- [Projet / démo](https://github.com/bigtower17/picoprint)
- [Source supplémentaire 1](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/doc/lx-d02-app-check.md)
- [Source supplémentaire 2](https://github.com/morluto/rea/discussions/4152)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
