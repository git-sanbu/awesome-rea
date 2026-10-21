# Open-source REA Lab: pinning an npm artifact and analyzing its entry slice

[← Back to all cases](../README.md) · Analysis and evaluation

[English](opensource-rea-lab.md) · [简体中文](zh-CN/opensource-rea-lab.md) · [繁體中文](zh-TW/opensource-rea-lab.md) · [日本語](ja/opensource-rea-lab.md) · [한국어](ko/opensource-rea-lab.md) · [Español](es/opensource-rea-lab.md) · [Français](fr/opensource-rea-lab.md) · [Deutsch](de/opensource-rea-lab.md) · [Português (Brasil)](pt-BR/opensource-rea-lab.md) · [Русский](ru/opensource-rea-lab.md) · [العربية](ar/opensource-rea-lab.md) · [हिन्दी](hi/opensource-rea-lab.md)

- **Author / attribution:** martinlofranodeoliveira
- **Source review date:** 2026-10-19
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Official npm rea-agents 6.4.0 package.json and scripts/rea.mjs

## The question

How can a release artifact be identified before answering a bounded entry-file question?

## What REA did

An independent Python auditor checks archive structure and hashes first. REA statically analyzes two unchanged files extracted from the verified package. Entry-branch semantics also use manual syntax checks; the auditor and manual conclusions are not REA output.

## Author-reported results

The author publishes pinned digests, audit JSON, sanitized Evidence summaries and reproduction scripts. The slice reports 1 parsed JavaScript file, 469 AST nodes, 14 findings and zero parse failures, while noting that full-package analysis was interrupted during semantic expansion.

## Limitations and unverified claims

The 14 findings are not a vulnerability count. The slice retains 110 semantic unknowns and lacks dist implementations, so it cannot establish full-package security or runtime correctness. A sanitized summary is not replayable canonical Evidence; full-package coverage is partial. This catalog did not rerun it.

## What to learn

Bound the question and input while retaining interruptions and unknowns. Structural checks, byte identity and runtime safety are different conclusions.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Can REA statically parse the actual shipped dispatcher?

## Original sources

- [Primary source / pinned evidence](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md)
- [Project / demo](https://github.com/martinlofranodeoliveira/opensource-rea-lab)
- [Additional source 1](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/rea-excerpt.json)
- [Additional source 2](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/README.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
