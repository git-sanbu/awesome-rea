# VSL-DSP: application des résultats de la bibliothèque du fournisseur aux outils DSP audio

[← Retour à tous les cas](../../README.fr.md) · Matériel et compatibilité

[English](../vsl-dsp.md) · [简体中文](../zh-CN/vsl-dsp.md) · [繁體中文](../zh-TW/vsl-dsp.md) · [日本語](../ja/vsl-dsp.md) · [한국어](../ko/vsl-dsp.md) · [Español](../es/vsl-dsp.md) · [Français](../fr/vsl-dsp.md) · [Deutsch](../de/vsl-dsp.md) · [Português (Brasil)](../pt-BR/vsl-dsp.md) · [Русский](../ru/vsl-dsp.md) · [العربية](../ar/vsl-dsp.md) · [हिन्दी](../hi/vsl-dsp.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

- **Auteur / attribution:** grisuno
- **Date d'examen des sources:** 2026-10-16
- **Statut de l'examen:** Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.
- **Cible:** PreSonus Commande universelle libucnet.so et libfatchannelplugins.so

## La question

Comment le contrôleur du fournisseur découvre-t-il les appareils, enregistre-t-il les paramètres et représente-t-il le gain ?

## Ce que REA a fait

L'extension réelle de LazyOwn pilote les REA et Ghidra par rapport aux bibliothèques du fournisseur, préservant l'enveloppe Evidence et produisant des spécifications de protocole et de paramètres.

## Résultats rapportés par l'auteur

L'auteur applique les résultats aux commandes dB, aux noms de paramètres et à la conversion linear/dB, et propose des tests CMocka.

## Limitations et réclamations non vérifiées

Le rôle de REA se limite aux découvertes spécifiques de la bibliothèque du fournisseur et aux améliorations ultérieures, et non à l'ensemble du pilote. The mute wire code was not recovered.

## Quoi apprendre

La recherche protocolaire peut combler une lacune concrète dans un projet existant. Unknown control codes should remain unknown.

## Preuve d'utilisation de REA dans la source

Le formatage des extraits est simplifié. Lisez la source originale pour le contexte complet.

> lazyaddon, which drives REA (Reverse Engineer Anything) with Ghidra 12.1.4

## Sources originales

- [Source principale/preuve épinglée](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md)
- [Projet / démo](https://github.com/grisuno/VSL-DSP)

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici.

<!-- Généré à partir des données du catalogue ; modifiez les fichiers de données pour mettre à jour cette note. -->
