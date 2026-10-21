# V5VPN: recherche de protocole pour un client de portail et de tunnel étendu

[← Retour à tous les cas](../../README.fr.md) · Matériel et compatibilité

[English](../v5vpn-rea-client.md) · [简体中文](../zh-CN/v5vpn-rea-client.md) · [繁體中文](../zh-TW/v5vpn-rea-client.md) · [日本語](../ja/v5vpn-rea-client.md) · [한국어](../ko/v5vpn-rea-client.md) · [Español](../es/v5vpn-rea-client.md) · [Français](../fr/v5vpn-rea-client.md) · [Deutsch](../de/v5vpn-rea-client.md) · [Português (Brasil)](../pt-BR/v5vpn-rea-client.md) · [Русский](../ru/v5vpn-rea-client.md) · [العربية](../ar/v5vpn-rea-client.md) · [हिन्दी](../hi/v5vpn-rea-client.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** hygkui
- **Date d'examen des sources:** 2026-10-21
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Client LeadSec V5VPN 5.3.3.x et protocole de passerelle v2.0

## La question

Comment l’authentification, la découverte de ressources et la recherche de connexions peuvent-elles informer un client indépendant ciblé ?

## Ce que REA a fait

L'auteur cite explicitement morluto/rea comme référence de rétro-ingénierie et documente les symboles, le désassemblage et les mappages de mémoire dans SecUI.exe, SecController.dll, SecLogin.dll, SecSSL.dll et VpnServ.exe. Le README connecte l'authentification, les branches d'expiration des mots de passe, la découverte des ressources et HTTP CONNECT à une implémentation indépendante du Go/MyGo ; les journaux d’appels complets REA ne sont pas publics.

## Résultats rapportés par l'auteur

Le bureau public Go/MyGo et la source CLI, les notes de protocole et les tests sont fournis. L'auteur rapporte une connectivité de bout en bout sur une machine de développement Windows et deux passerelles de production, couvrant le portail VPN SSL, les ressources autorisées et les tunnels HTTP CONNECT.

## Limitations et réclamations non vérifiées

La portée indiquée est 5.3.3.x et le protocole v2.0. Linux/macOS a été compilé mais n'a pas été testé. Pas d'adaptateur virtuel de noyau, d'IPsec ou de routage sur l'ensemble du réseau ; La clé USB, la connexion anonyme et les suites cryptographiques chinoises ne sont pas prises en charge. Ce catalogue ne s'est pas connecté aux passerelles ni n'a vérifié la sécurité et ne considère pas la formulation « entièrement fissurée » comme une conclusion établie.

## Quoi apprendre

Séparez la portée du protocole des tests de plate-forme. La convivialité du client nécessite une validation par rapport à des passerelles et des scénarios spécifiques.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> 基于 REA (Reverse Engineer Anything) 逆向分析技术与 MyGo 跨平台桌面技术架构，重新实现的现代化 V5VPN 客户端。

## Sources originales

- [Source principale/preuve épinglée](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md)
- [Projet / démo](https://github.com/hygkui/v5vpn-rea-client)
- [Source supplémentaire 1](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/internal/protocol/auth_test.go)
- [Source supplémentaire 2](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/internal/protocol/tunnel_test.go)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
