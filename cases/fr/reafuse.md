# ReaFuse: combiner deux bibliothèques après avoir étudié leur comportement

[← Retour à tous les cas](../../README.fr.md) · Apprentissage et reproduction

[English](../reafuse.md) · [简体中文](../zh-CN/reafuse.md) · [繁體中文](../zh-TW/reafuse.md) · [日本語](../ja/reafuse.md) · [한국어](../ko/reafuse.md) · [Español](../es/reafuse.md) · [Français](../fr/reafuse.md) · [Deutsch](../de/reafuse.md) · [Português (Brasil)](../pt-BR/reafuse.md) · [Русский](../ru/reafuse.md) · [العربية](../ar/reafuse.md) · [हिन्दी](../hi/reafuse.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** sickpyramid
- **Date d'examen des sources:** 2026-10-19
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Deux paires de bibliothèques open source JavaScript : ms + jolis octets et dequal + klona

## La question

Comment deux projets peuvent-ils devenir des spécifications de comportement puis un nouvel outil combiné ?

## Ce que REA a fait

L'analyse statique REA 6.4.0 JavaScript lit les deux entrées. Les fichiers et tests README aident à produire des spécifications de comportement ; le modèle propose séparément des combinaisons, rédige des contrats d'acceptation et un nouveau code, puis exécute les tests et les analyses de similarité de l'auteur.

## Résultats rapportés par l'auteur

L'auteur publie ratewise (taux de transfert et ETA) et objdelta (diff/patch structurel), rapports et Evidence. Les résultats du contrat rapportés sont les tests 18/18 et 17/17, ainsi que les tests 7/7 et 6/6 pour les nouveaux outils. Les deux exemples comptent pour un seul cas de projet.

## Limitations et réclamations non vérifiées

Seuls deux exemples publics JavaScript ont été examinés ; le projet est v0.1 alpha. Le même flux de travail produit des spécifications et des implémentations. L’étiquette de salle blanche de l’auteur ne constitue pas une conclusion juridique indépendante. Les analyses de similarité et les tests de réussite n'établissent pas l'originalité générale ou l'équivalence complète. Ce catalogue ne les a pas rediffusés.

## Quoi apprendre

Connectez l'analyse à la mise en œuvre via des spécifications de comportement, en mappant les tests sur le comportement d'entrée ou sur la nouvelle combinaison.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Every donor goes through REA's static JavaScript analysis

## Sources originales

- [Source principale/preuve épinglée](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md)
- [Projet / démo](https://github.com/sickpyramid/ReaFuse)
- [Source supplémentaire 1](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/ratewise/REPORT.md)
- [Source supplémentaire 2](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/objdelta/REPORT.md)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
