# REA in Spanish: reconstruction d'un validateur de clé appartenant à l'auteur

[← Retour à tous les cas](../../README.fr.md) · Apprentissage et reproduction

[English](../rea-spanish-lab.md) · [简体中文](../zh-CN/rea-spanish-lab.md) · [繁體中文](../zh-TW/rea-spanish-lab.md) · [日本語](../ja/rea-spanish-lab.md) · [한국어](../ko/rea-spanish-lab.md) · [Español](../es/rea-spanish-lab.md) · [Français](../fr/rea-spanish-lab.md) · [Deutsch](../de/rea-spanish-lab.md) · [Português (Brasil)](../pt-BR/rea-spanish-lab.md) · [Русский](../ru/rea-spanish-lab.md) · [العربية](../ar/rea-spanish-lab.md) · [हिन्दी](../hi/rea-spanish-lab.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** harkiventures
- **Date d'examen des sources:** 2026-10-26
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** Binaire éducatif licencia-cli.stripped appartenant à l'auteur et sa version de référence symbolisée

## La question

Comment la règle d’acceptation d’un petit programme supprimé peut-elle être reconstruite et vérifiée par rapport à l’original ?

## Ce que REA a fait

L'auteur rapporte qu'il utilise le pseudocode REA et Ghidra ainsi que les octets lus sur 0x102040 pour récupérer la conversion de caractères, l'accumulation pondérée, la rotation et les contrôles d'acceptation, puis écrit un vérificateur Python distinct.

## Résultats rapportés par l'auteur

L'échantillon espagnol gratuit comprend une configuration de laboratoire et un cas travaillé, des binaires pratiques supprimés et symbolisés, une source C de référence et un vérificateur Python reconstruit. Le vérificateur répertorie les exemples attendus de 4 ; l'auteur rapporte avoir vérifié la reconstruction par rapport au binaire réel.

## Limitations et réclamations non vérifiées

L’exercice est le propre petit programme non protégé de l’auteur, et non un contournement de licence commerciale ou un résultat général pour un logiciel protégé. Les exemples 4 sont des contrôles limités et non une équivalence exhaustive. Ce catalogue n'a pas exécuté les fichiers binaires ni réexécuté la comparaison ; le cours complet proposé n'est pas encore dispensé.

## Quoi apprendre

Utilisez un appareil possédé avec une source de référence cachée, récupérez une règle limitée et testez les entrées acceptées et rejetées avant de comparer avec la source.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> Reimplementacion de la validacion del Caso A escrita SOLO desde el
pseudocodigo que REA/Ghidra devolvio (analisis/caso-a/05 y 06) y de los
bytes leidos en 0x102040 (07).

## Sources originales

- [Source principale/preuve épinglée](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py)
- [Projet / démo](https://github.com/harkiventures/rea-muestra-gratuita)
- [Source supplémentaire 1](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/README.md)
- [Source supplémentaire 2](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/LEEME.md)
- [Source supplémentaire 3](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/licencia-cli.c)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
