# Co-op Anything: enquête sur les points d'entrée multijoueurs de la campagne

[← Retour à tous les cas](../../README.fr.md) · Jeux

[English](../coop-anything.md) · [简体中文](../zh-CN/coop-anything.md) · [繁體中文](../zh-TW/coop-anything.md) · [日本語](../ja/coop-anything.md) · [한국어](../ko/coop-anything.md) · [Español](../es/coop-anything.md) · [Français](../fr/coop-anything.md) · [Deutsch](../de/coop-anything.md) · [Português (Brasil)](../pt-BR/coop-anything.md) · [Русский](../ru/coop-anything.md) · [العربية](../ar/coop-anything.md) · [हिन्दी](../hi/coop-anything.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** cranebeaker and community contributors
- **Date d'examen des sources:** 2026-10-21
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Versions Steam C&C3 Tiberium Wars / Kane’s Wrath et serveur World in Conflict client/dedicated

## La question

Comment une campagne peut-elle conserver ses scripts et ses côtés tout en permettant à un deuxième joueur de la rejoindre ?

## Ce que REA a fait

Les notes C&C3 enregistrent explicitement les observations REA/Ghidra 12.1.4 de l'exécutable TW 1.10, en localisant la fonction qui supprime les côtés de campagne pendant la préparation de multiplayer/skirmish. Les notes World in Conflict documentent l'analyse de la sélection des rôles de serveur dédié via REA/Ghidra, séparant les restrictions solo, l'état du serveur et les inférences non vérifiées. D'autres scripts, débogueurs et tests d'exécution gèrent les travaux ultérieurs.

## Résultats rapportés par l'auteur

Le projet publie MCP/skills, des outils de test de synchronisation et des recherches spécifiques aux jeux. Les notes C&C3 incluent des adresses, des formats et des expériences. Pour World in Conflict, l'auteur rapporte qu'un hôte de campagne LAN exécute des missions tandis qu'un deuxième client le rejoint et voit des unités synchronisées en direct, mais ne peut pas contrôler ses propres unités. Chaque jeu conserve son propre niveau d'assurance qualité.

## Limitations et réclamations non vérifiées

L'attribution de REA est limitée aux enquêtes examinées C&C3 et World in Conflict, et non à tous les mods du répertoire. Le contrôle du joueur deux, les zones de déploiement, la visibilité et le jeu sur Internet restent inachevés dans World in Conflict ; le rapport vérifie uniquement le réseau local. C&C3 présente également des échecs de campagne et des problèmes de contexte non résolus. Stars ne prouve pas une campagne réalisable. Ce catalogue n'a pas exécuté les jeux ou les tests.

## Quoi apprendre

Validez la connexion client, la visibilité synchronisée et une coopération véritablement jouable comme résultats distincts.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Engine seams (observed in the TW 1.10 exe with REA/Ghidra 12.1.4)

## Sources originales

- [Source principale/preuve épinglée](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md)
- [Projet / démo](https://github.com/cranebeaker/coop-anything)
- [Source supplémentaire 1](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/README.md)
- [Source supplémentaire 2](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/world-in-conflict/NOTES.md)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
