# Screen Studio: séparer l'inspection statique des preuves d'enregistrement et d'exportation

[← Retour à tous les cas](../../README.fr.md) · Applications

[English](../screenstudio-research.md) · [简体中文](../zh-CN/screenstudio-research.md) · [繁體中文](../zh-TW/screenstudio-research.md) · [日本語](../ja/screenstudio-research.md) · [한국어](../ko/screenstudio-research.md) · [Español](../es/screenstudio-research.md) · [Français](../fr/screenstudio-research.md) · [Deutsch](../de/screenstudio-research.md) · [Português (Brasil)](../pt-BR/screenstudio-research.md) · [Русский](../ru/screenstudio-research.md) · [العربية](../ar/screenstudio-research.md) · [हिन्दी](../hi/screenstudio-research.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** Royo-Qiao
- **Date d'examen des sources:** 2026-11-03
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Screen Studio 3.7.3-4540, y compris une copie Apple Silicon reconditionnée localement

## La question

Comment les résultats Electron et Native-Helper peuvent-ils être séparés de la preuve d’enregistrement, d’exportation et de compatibilité ?

## Ce que REA a fait

Les inspections des fusibles REA et Mach-O ont fourni des extraits statiques sélectionnés de Evidence avec des identifiants et des hachages. Une analyse d'application limitée JavaScript a expiré deux fois ; aucun graphique complet ni aucune décompilation de fonctions natives n'est revendiqué.

## Résultats rapportés par l'auteur

L'auteur publie des outils d'inspection, de statistiques globales de projet et de validation des exportations. Un enregistrement natif historique aurait exporté les images 3, 337 à 1104 × 720 et 60 fps et entièrement décodé ; une vérification ultérieure d'un outil en lecture seule a examiné l'exportation enregistrée et agrégé les événements d'entrée humaine.

## Limitations et réclamations non vérifiées

Les enregistrements privés et les registres complets ne sont pas disponibles pour la relecture. Le hachage Mach-O identifie une copie reconditionnée localement. L'autorisation en réseau a échoué, une tentative de découpage n'a pas pris effet, la signature finale n'a pas été suivie d'un nouveau test de capture complet et une seule configuration Apple Silicon/macOS a été effectuée. Le décodage des fichiers ne prouve pas la provenance de l'enregistrement ou l'équivalence visuelle ; ce catalogue n'a pas refait l'expérience.

## Quoi apprendre

Conservez les métadonnées statiques, les observations de l'interface utilisateur, le décodage de fichiers et les commentaires humains comme preuves distinctes, et publiez les vérifications échouées aux côtés des réussites.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [Projet / démo](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [Source supplémentaire 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [Source supplémentaire 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [Source supplémentaire 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [Source supplémentaire 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
