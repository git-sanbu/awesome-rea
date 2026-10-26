# REA in Spanish: reconstructing an author-owned key validator

[← Back to all cases](../README.md) · Learning and reproduction

[English](rea-spanish-lab.md) · [简体中文](zh-CN/rea-spanish-lab.md) · [繁體中文](zh-TW/rea-spanish-lab.md) · [日本語](ja/rea-spanish-lab.md) · [한국어](ko/rea-spanish-lab.md) · [Español](es/rea-spanish-lab.md) · [Français](fr/rea-spanish-lab.md) · [Deutsch](de/rea-spanish-lab.md) · [Português (Brasil)](pt-BR/rea-spanish-lab.md) · [Русский](ru/rea-spanish-lab.md) · [العربية](ar/rea-spanish-lab.md) · [हिन्दी](hi/rea-spanish-lab.md)

- **Author / attribution:** harkiventures
- **Source review date:** 2026-10-26
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Author-owned educational licencia-cli.stripped binary and its symbolized reference build

## The question

How can a small stripped program’s acceptance rule be reconstructed and checked against the original?

## What REA did

The author reports using REA and Ghidra pseudocode plus bytes read at 0x102040 to recover character conversion, weighted accumulation, rotation and acceptance checks, then writing a separate Python verifier.

## Author-reported results

The free Spanish sample includes lab setup and a worked case, stripped and symbolized practice binaries, reference C source and a reconstructed Python verifier. The verifier lists 4 expected examples; the author reports checking the reconstruction against the real binary.

## Limitations and unverified claims

The exercise is the author’s own small unprotected program, not a commercial licensing bypass or a general result for protected software. The 4 examples are limited checks, not exhaustive equivalence. This catalog did not execute the binaries or rerun the comparison; the proposed full course is not yet delivered.

## What to learn

Use an owned fixture with a hidden reference source, recover one bounded rule, and test accepted and rejected inputs before comparing with the source.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Reimplementacion de la validacion del Caso A escrita SOLO desde el
pseudocodigo que REA/Ghidra devolvio (analisis/caso-a/05 y 06) y de los
bytes leidos en 0x102040 (07).

## Original sources

- [Primary source / pinned evidence](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py)
- [Project / demo](https://github.com/harkiventures/rea-muestra-gratuita)
- [Additional source 1](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/README.md)
- [Additional source 2](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/LEEME.md)
- [Additional source 3](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/licencia-cli.c)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
