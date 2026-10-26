# REA Safe Agent: négociation d'analyses statiques entre deux processus confinés

[← Retour à tous les cas](../../README.fr.md) · Outils et intégrations

[English](../rea-safe-agents.md) · [简体中文](../zh-CN/rea-safe-agents.md) · [繁體中文](../zh-TW/rea-safe-agents.md) · [日本語](../ja/rea-safe-agents.md) · [한국어](../ko/rea-safe-agents.md) · [Español](../es/rea-safe-agents.md) · [Français](../fr/rea-safe-agents.md) · [Deutsch](../de/rea-safe-agents.md) · [Português (Brasil)](../pt-BR/rea-safe-agents.md) · [Русский](../ru/rea-safe-agents.md) · [العربية](../ar/rea-safe-agents.md) · [हिन्दी](../hi/rea-safe-agents.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** dagoSte
- **Date d'examen des sources:** 2026-10-26
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Intégration de REA 6.7.0 avec Ghidra 12.1.4 et JADX ; des appareils ELF bénins et un F-Droid APK

## La question

Comment un agent peut-il interroger REA alors que l’accès aux entrées, aux outils hôtes et aux requêtes de modèle reste limité ?

## Ce que REA a fait

L'implémentation exécute REA et son agent de réception dans des conteneurs Docker distincts et relaie les appels MCP sur liste blanche via un contrôleur hôte. Les instantanés d'entrée gelés, les vérifications tool/path et les résultats limités limitent ce qui traverse la frontière ; REA fournit l’analyse statique réelle.

## Résultats rapportés par l'auteur

Les reçus ARM64 datés de macOS signalent 11 appels REA réussis avec Claude et 9 avec Codex sur le même ELF bénin, vérifiant son hachage, ses constantes FNV-1a et sa chaîne décodée par rapport à une source connue. L'enregistrement de validation rapporte séparément 39 appels REA réussis pour une analyse F-Droid 2.0.2 en direct.

## Limitations et réclamations non vérifiées

Ces comptes rendus sont publiés par l’auteur et ne constituent pas une certification de sécurité indépendante. L’analyse statique n’exécute pas la cible. Le confinement dépend de Docker et du contrôleur hôte ; le texte analysé est transmis au service du modèle et l’intégration Docker sous Windows reste expérimentale. Des vulnérabilités persistent dans les images complètes malgré un audit npm distinct sans problème signalé.

## Quoi apprendre

Séparez les tests de stratégie fictive, les appels d'outils réels et les exécutions de modèles réels ; joindre chaque réclamation à une cible, un hôte et un reçu datés.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> "rea_version": "6.7.0",

## Sources originales

- [Source principale/preuve épinglée](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md)
- [Projet / démo](https://github.com/dagoSte/rea-safe-agents)
- [Source supplémentaire 1](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-claude-subscription-macos-arm64-2026-10-19.json)
- [Source supplémentaire 2](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-codex-chatgpt-macos-arm64-2026-10-19.json)
- [Source supplémentaire 3](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/tunnel.py)
- [Source supplémentaire 4](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/agent_session.py)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
