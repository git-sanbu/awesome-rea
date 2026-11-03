# Terminal (formerly terminal-rs): un terminal de marché informé par les interactions TradingView

[← Retour à tous les cas](../../README.fr.md) · Applications

[English](../terminal-rs.md) · [简体中文](../zh-CN/terminal-rs.md) · [繁體中文](../zh-TW/terminal-rs.md) · [日本語](../ja/terminal-rs.md) · [한국어](../ko/terminal-rs.md) · [Español](../es/terminal-rs.md) · [Français](../fr/terminal-rs.md) · [Deutsch](../de/terminal-rs.md) · [Português (Brasil)](../pt-BR/terminal-rs.md) · [Русский](../ru/terminal-rs.md) · [العربية](../ar/terminal-rs.md) · [हिन्दी](../hi/terminal-rs.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** michaelshimeles
- **Date d'examen des sources:** 2026-11-03
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Comportement des pages de cartes TradingView publiques et déconnectées

## La question

Comment la recherche sur les interactions graphiques peut-elle éclairer une interface de marché Rust indépendante ?

## Ce que REA a fait

L'auteur utilise le mode site Web REA pour la capture passive des pages publiques. Les résultats, les identifiants Evidence et les implications de conception sont enregistrés dans docs/analysis.

## Résultats rapportés par l'auteur

Le projet publie des graphiques GPU Rust, des commandes clavier, des dispositions de panneaux et l'intégration de données avec une interface de style Bloomberg. Examiné sur 2026-10-21: Des indicateurs intégrés 151, des tests de paramètres et d'entrée de limites, ainsi qu'un script de version universelle macOS ont été ajoutés. Il s’agit de modifications d’implémentation ultérieures et non d’une nouvelle enquête REA. Examiné sur 2026-11-03:, le référentiel est désormais Terminal, avec le même ID de catalogue stable. Son README documente les flux de divulgation, les vues de compte SnapTrade et le trading opt-in ; ces fonctionnalités d'implémentation sont distinctes de la recherche sur le comportement des graphiques REA.

## Limitations et réclamations non vérifiées

Seul le comportement visible sur le Web a été étudié ; il ne s'agit pas d'une récupération du code source TradingView ou Bloomberg. Les sources de données, les limites de débit et les conditions d'utilisation des données imposent des contraintes distinctes. L'auteur distingue les tests brokerage/order simulés et les données simulées des services en direct. Ce catalogue n'a pas connecté une maison de courtage, passé des commandes ou vérifié l'exactitude des données actuelles. L'ancien commit README est conservé comme provenance historique mais a renvoyé HTTP 404 lors de cet examen.

## Quoi apprendre

Les observations publiques sur le Web peuvent fournir des données de conception traçables sans être décrites comme une décompilation binaire.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> tradingview.com with [REA](https://github.com/morluto/rea) in website mode

## Sources originales

- [Source principale/preuve épinglée](https://github.com/michaelshimeles/terminal/blob/0690de8c6c86e1939d9226a482ebe7476cc79156/README.md)
- [Projet / démo](https://github.com/michaelshimeles/terminal)
- [Source supplémentaire 1](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md)
- [Source supplémentaire 2](https://github.com/michaelshimeles/terminal-rs/blob/97c96dd09a4ba24e2693202f2012e0e8aa0a8615/README.md)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
