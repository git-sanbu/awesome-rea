# DX-Ball: reconstruction du panoramique sonore stéréo

[← Retour à tous les cas](../../README.fr.md) · Vitrines officielles

[English](../dx-ball.md) · [简体中文](../zh-CN/dx-ball.md) · [繁體中文](../zh-TW/dx-ball.md) · [日本語](../ja/dx-ball.md) · [한국어](../ko/dx-ball.md) · [Español](../es/dx-ball.md) · [Français](../fr/dx-ball.md) · [Deutsch](../de/dx-ball.md) · [Português (Brasil)](../pt-BR/dx-ball.md) · [Русский](../ru/dx-ball.md) · [العربية](../ar/dx-ball.md) · [हिन्दी](../hi/dx-ball.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** Équipe de présentation REA ; auteurs du projet original crédités dans les sources
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** DX-Ball 1.07 Windows i386 exécutable

## La question

Comment une position à l’écran devient-elle une valeur de panoramique sonore ?

## Ce que REA a fait

REA et Ghidra inspectent la fonction cible, les appelants, les instructions et les constantes. La reconstruction du responsable explique une expression x87 omise par le pseudocode décompilé.

## Résultats rapportés par l'auteur

La source enregistre les cas différentiels 3, 205 par rapport à la fonction x86 d'origine et une correspondance 63-byte complète après recompilation avec le compilateur historique.

## Limitations et réclamations non vérifiées

La validation couvre une fonction et un point de contrôle spécifique. La vitrine mise à jour réutilise les enregistrements d'exécution et de compilation antérieurs ; il n'établit pas une reconstruction complète du jeu.

## Quoi apprendre

Lorsque le pseudocode est incomplet, suivez les appelants, l'assembly et les constantes. Enregistrez les tests sémantiques séparément de la correspondance d'octets.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Recorded analysis: REA 4.1.0, Ghidra 12.1.4, Linux x64 host.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md)
- [Projet / démo](https://rea.tools/showcase/dx-ball/)
- [Source supplémentaire 1](https://github.com/N0zoM1z0/dx-ball)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
