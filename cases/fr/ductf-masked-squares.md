# DownUnderCTF: récupération des équations de vérification des drapeaux

[← Retour à tous les cas](../../README.fr.md) · Vitrines officielles

[English](../ductf-masked-squares.md) · [简体中文](../zh-CN/ductf-masked-squares.md) · [繁體中文](../zh-TW/ductf-masked-squares.md) · [日本語](../ja/ductf-masked-squares.md) · [한국어](../ko/ductf-masked-squares.md) · [Español](../es/ductf-masked-squares.md) · [Français](../fr/ductf-masked-squares.md) · [Deutsch](../de/ductf-masked-squares.md) · [Português (Brasil)](../pt-BR/ductf-masked-squares.md) · [Русский](../ru/ductf-masked-squares.md) · [العربية](../ar/ductf-masked-squares.md) · [हिन्दी](../hi/ductf-masked-squares.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** Équipe de présentation REA ; auteurs du projet original crédités dans les sources
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** DownUnderCTF 2023 vérificateur de drapeau à carrés masqués, dépouillé Linux ELF

## La question

Comment récupérer la validation des entrées sans symboles ni code source ?

## Ce que REA a fait

REA trouve les chaînes d'invite et les références croisées, analyse le vérificateur et lit les masques et les tables cibles. Z3 résout les contraintes 26 ; la capture de processus vérifie le binaire de défi d'origine.

## Résultats rapportés par l'auteur

Le rapport officiel indique Correct ! / quittez 0 pour le bon candidat et Incorrect ! / quittez 255 pour un candidat incorrect. La solution est ensuite vérifiée par rapport à la source et aux métadonnées des organisateurs.

## Limitations et réclamations non vérifiées

Le solveur suppose un format d'indicateur et un jeu de caractères communs. La recherche d'un deuxième modèle a expiré et l'unicité n'a donc pas été prouvée.

## Quoi apprendre

Une fois que le raisonnement statique a produit un candidat, exécutez les entrées correctes et incorrectes via le programme d'origine.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Fresh inspection and process captures on 8 October 2026, using the published REA 4.1.0 package

## Sources originales

- [Source principale/preuve épinglée](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md)
- [Projet / démo](https://rea.tools/showcase/ctf/)
- [Source supplémentaire 1](https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
