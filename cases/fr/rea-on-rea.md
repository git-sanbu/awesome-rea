# REA on REA: enquêter sur l'outil et tester les prédictions

[← Retour à tous les cas](../../README.fr.md) · Analyse et évaluation

[English](../rea-on-rea.md) · [简体中文](../zh-CN/rea-on-rea.md) · [繁體中文](../zh-TW/rea-on-rea.md) · [日本語](../ja/rea-on-rea.md) · [한국어](../ko/rea-on-rea.md) · [Español](../es/rea-on-rea.md) · [Français](../fr/rea-on-rea.md) · [Deutsch](../de/rea-on-rea.md) · [Português (Brasil)](../pt-BR/rea-on-rea.md) · [Русский](../ru/rea-on-rea.md) · [العربية](../ar/rea-on-rea.md) · [हिन्दी](../hi/rea-on-rea.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** az9713
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Package d'agents réactifs 6.3.0 installé

## La question

Comment REA choisit-il un fournisseur d’analyse natif et détecte-t-il un fournisseur indisponible ?

## Ce que REA a fait

REA analyse statiquement cinq de ses propres répertoires. L'agent écrit des prédictions falsifiables, consulte le médecin, puis lit les réponses de la source et évalue ses prédictions.

## Résultats rapportés par l'auteur

L'auteur publie le processus et les reçus du test : les quatre réponses n'étaient que partiellement correctes, et trois des huit résultats prédits du contrôle Ghidra étaient faux.

## Limitations et réclamations non vérifiées

Une seule auto-évaluation ; les tests du médecin ne sont pas des tests open_binary. Le package installé et le point de contrôle source diffèrent également.

## Quoi apprendre

Transformez des explications plausibles en prédictions testables et publiez les échecs.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> REA analyzed 5 folders of the installed rea-agents 6.3.0 package with analyze_javascript_application.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md)
- [Projet / démo](https://github.com/az9713/REA-demo)
- [Source supplémentaire 1](https://az9713.github.io/REA-demo/rea-on-rea-receipt.html)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
