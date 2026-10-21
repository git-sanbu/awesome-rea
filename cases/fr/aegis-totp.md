# Aegis: trouver l'algorithme Android TOTP

[← Retour à tous les cas](../../README.fr.md) · Vitrines officielles

[English](../aegis-totp.md) · [简体中文](../zh-CN/aegis-totp.md) · [繁體中文](../zh-TW/aegis-totp.md) · [日本語](../ja/aegis-totp.md) · [한국어](../ko/aegis-totp.md) · [Español](../es/aegis-totp.md) · [Français](../fr/aegis-totp.md) · [Deutsch](../de/aegis-totp.md) · [Português (Brasil)](../pt-BR/aegis-totp.md) · [Русский](../ru/aegis-totp.md) · [العربية](../ar/aegis-totp.md) · [हिन्दी](../hi/aegis-totp.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** Équipe de présentation REA ; auteurs du projet original crédités dans les sources
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Authentificateur Aegis 3.4.3 Android APK

## La question

Comment un code de connexion à six chiffres est-il calculé toutes les secondes 30 ?

## Ce que REA a fait

L'analyse REA Android localise les méthodes de génération, d'affichage et de copie. L'auteur lit le calcul HOTP/TOTP et crée une démo de navigateur avec une horloge réglable.

## Résultats rapportés par l'auteur

La page officielle rapporte des cas 133 comparant la méthode extraite avec une implémentation indépendante, ainsi que les six vecteurs de référence SHA-1 de la RFC 6238..

## Limitations et réclamations non vérifiées

L’objectif est la génération de code, et non la reconstruction du coffre-fort, du stockage chiffré ou de l’ensemble de l’application. Ce catalogue n'a pas réédité les cas.

## Quoi apprendre

Choisissez une petite fonctionnalité qui peut être vérifiée indépendamment et limitez sa mise en œuvre avec des vecteurs de test standards publics.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Inspected with REA 6.1.0 on 9 October 2026.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html)
- [Projet / démo](https://rea.tools/showcase/aegis/)
- [Source supplémentaire 1](https://github.com/beemdevelopment/Aegis)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
