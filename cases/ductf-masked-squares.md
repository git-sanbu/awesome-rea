# DownUnderCTF: recovering flag-checking equations

[← Back to all cases](../README.md) · Official showcases

[English](ductf-masked-squares.md) · [简体中文](zh-CN/ductf-masked-squares.md) · [繁體中文](zh-TW/ductf-masked-squares.md) · [日本語](ja/ductf-masked-squares.md) · [한국어](ko/ductf-masked-squares.md) · [Español](es/ductf-masked-squares.md) · [Français](fr/ductf-masked-squares.md) · [Deutsch](de/ductf-masked-squares.md) · [Português (Brasil)](pt-BR/ductf-masked-squares.md) · [Русский](ru/ductf-masked-squares.md) · [العربية](ar/ductf-masked-squares.md) · [हिन्दी](hi/ductf-masked-squares.md)

- **Author / attribution:** REA showcase team; original project authors credited in sources
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** DownUnderCTF 2023 masked squares flag checker, stripped Linux ELF

## The question

How can input validation be recovered without symbols or source code?

## What REA did

REA finds prompt strings and cross-references, analyzes the checker and reads masks and target tables. Z3 solves 26 constraints; process capture checks the original challenge binary.

## Author-reported results

The official record shows Correct! / exit 0 for the correct candidate and Incorrect! / exit 255 for an incorrect candidate. The solution is then checked against the organizers’ source and metadata.

## Limitations and unverified claims

The solver assumes a common flag format and character set. A second-model search timed out, so uniqueness was not proved.

## What to learn

After static reasoning produces a candidate, run both correct and incorrect inputs through the original program.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Fresh inspection and process captures on 8 October 2026, using the published REA 4.1.0 package

## Original sources

- [Primary source / pinned evidence](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md)
- [Project / demo](https://rea.tools/showcase/ctf/)
- [Additional source 1](https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
