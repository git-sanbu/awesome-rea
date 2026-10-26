# Open Claude UI: documenter les interactions sur le bureau et publier des composants d'interface utilisateur réutilisables

[← Retour à tous les cas](../../README.fr.md) · Applications

[English](../open-claude-ui.md) · [简体中文](../zh-CN/open-claude-ui.md) · [繁體中文](../zh-TW/open-claude-ui.md) · [日本語](../ja/open-claude-ui.md) · [한국어](../ko/open-claude-ui.md) · [Español](../es/open-claude-ui.md) · [Français](../fr/open-claude-ui.md) · [Deutsch](../de/open-claude-ui.md) · [Português (Brasil)](../pt-BR/open-claude-ui.md) · [Русский](../ru/open-claude-ui.md) · [العربية](../ar/open-claude-ui.md) · [हिन्दी](../hi/open-claude-ui.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** Caho1
- **Date d'examen des sources:** 2026-10-26
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Package Claude Desktop macOS ; rapporté par l'auteur @ant/desktop Base de référence 2.37337.1 et interface utilisateur Web fournie

## La question

Comment les règles de composition des entrées, de défilement et d’interaction avec le bureau peuvent-elles éclairer les composants d’interface réutilisables ?

## Ce que REA a fait

L'auteur attribue l'enquête ASAR, JavaScript AST et CSS à REA 6.5.0.. Le chapitre sur l'interaction relie les extraits de code groupé aux gardes d'entrée et aux règles de défilement ; des exemples TypeScript distincts implémentent ces comportements.

## Résultats rapportés par l'auteur

Le référentiel publie des notes de conception versionnées, un livre d'histoires de composants, des jetons CSS et des exemples d'implémentation, y compris des vérifications de l'état de composition et une garde Entrée post-composition dans RichComposerWithMentions.tsx.

## Limitations et réclamations non vérifiées

Il s'agit d'une bibliothèque d'interface utilisateur et d'un démontage rapporté par l'auteur, et non d'un client Claude complet ou d'un service modèle. Les enregistrements bruts de session REA et les tests indépendants d'équivalence comportementale ou visuelle n'ont pas été trouvés dans les fichiers examinés. Les affirmations en matière de version et de fidélité restent celles de l’auteur.

## Quoi apprendre

Connectez une règle d'interaction à son emplacement et à sa mise en œuvre de bundle cités ; distinguer la documentation de conception de l'équivalence mesurée.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> 逆向还原自官方 Claude Desktop / Web 核心输入组件 (REA v6.5.0 取证):

## Sources originales

- [Source principale/preuve épinglée](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx)
- [Projet / démo](https://github.com/Caho1/open-claude-ui)
- [Source supplémentaire 1](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/README.md)
- [Source supplémentaire 2](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v1/03-%E4%BC%9A%E8%AF%9D%E6%A0%B8%E5%BF%83%E6%B5%81%E4%B8%8E%E6%8C%87%E4%BB%A4%E4%BA%A4%E4%BA%92%E5%BC%95%E6%93%8E.md)
- [Source supplémentaire 3](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v2/01-%E7%BB%BC%E8%BF%B0%E4%B8%8E%E7%89%88%E6%9C%AC%E8%BE%B9%E7%95%8C.md)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
