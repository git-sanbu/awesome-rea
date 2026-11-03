# Eleven: connexion d'un atelier de bureau piloté par agent à REA

[← Retour à tous les cas](../../README.fr.md) · Outils et intégrations

[English](../eleven.md) · [简体中文](../zh-CN/eleven.md) · [繁體中文](../zh-TW/eleven.md) · [日本語](../ja/eleven.md) · [한국어](../ko/eleven.md) · [Español](../es/eleven.md) · [Français](../fr/eleven.md) · [Deutsch](../de/eleven.md) · [Português (Brasil)](../pt-BR/eleven.md) · [Русский](../ru/eleven.md) · [العربية](../ar/eleven.md) · [हिन्दी](../hi/eleven.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** Zfinix
- **Date d'examen des sources:** 2026-11-03
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Analyse binaire native via REA/Ghidra et un atelier de bureau avec agent ACP

## La question

Comment un agent peut-il inspecter un binaire alors que la navigation et les annotations modifiables restent visibles dans un atelier partagé ?

## Ce que REA a fait

Le moteur lance REA MCP et appelle les vues open_binary et procédure. Un proxy distinct transmet les outils d'analyse tout en retenant les outils d'écriture d'annotations REA, dirigeant ces modifications via les outils de projet Eleven avec un historique visible.

## Résultats rapportés par l'auteur

La sortie publique inclut la source de l'application de bureau, la documentation de l'outil MCP, les chemins d'annotation du projet et de suggestion de correctifs, ainsi qu'un test d'agent en direct fourni par l'auteur qui demande à un agent d'ouvrir une fonction /bin/ls dans l'interface utilisateur. README et la vitrine en amont décrivent l'établi fonctionnel.

## Limitations et réclamations non vérifiées

Le catalogue a inspecté les définitions de source et de test, et non une réception de test exécutée ou une version installée. La prise en charge de la plate-forme de bureau, le comportement du débogueur, l'accélération du cache et l'exhaustivité de l'analyse binaire n'ont pas été vérifiés de manière indépendante. Rizin, jadx et autres chemins sont des moteurs distincts ; leurs résultats ne sont pas attribués à REA. Les horaires des vitrines en amont sont des observations de l'auteur et non des références de catalogue.

## Quoi apprendre

Séparez l’analyse des modifications du projet, conservez la paternité et l’historique des annulations visibles et distinguez les tests exécutables des résultats de tests observés.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> REA for agents: every tool passes through except the ones whose changes belong in Eleven's project.

## Sources originales

- [Source principale/preuve épinglée](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/bridge/reaProxy.ts)
- [Projet / démo](https://github.com/Zfinix/eleven)
- [Source supplémentaire 1](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/README.md)
- [Source supplémentaire 2](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/engine/rea.ts)
- [Source supplémentaire 3](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/docs/mcp-tools.md)
- [Source supplémentaire 4](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/tests/m4-agent.live.test.tsx)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
