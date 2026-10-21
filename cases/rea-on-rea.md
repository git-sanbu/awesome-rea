# REA on REA: investigating the tool and testing predictions

[← Back to all cases](../README.md) · Analysis and evaluation

[English](rea-on-rea.md) · [简体中文](zh-CN/rea-on-rea.md) · [繁體中文](zh-TW/rea-on-rea.md) · [日本語](ja/rea-on-rea.md) · [한국어](ko/rea-on-rea.md) · [Español](es/rea-on-rea.md) · [Français](fr/rea-on-rea.md) · [Deutsch](de/rea-on-rea.md) · [Português (Brasil)](pt-BR/rea-on-rea.md) · [Русский](ru/rea-on-rea.md) · [العربية](ar/rea-on-rea.md) · [हिन्दी](hi/rea-on-rea.md)

- **Author / attribution:** az9713
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Installed rea-agents 6.3.0 package

## The question

How does REA choose a native-analysis provider and detect an unavailable provider?

## What REA did

REA statically analyzes five of its own directories. The agent writes falsifiable predictions, runs doctor, then reads the source answers and assesses its predictions.

## Author-reported results

The author publishes the process and test receipts: all four answers were only partly correct, and three of eight predicted Ghidra-check outcomes were wrong.

## Limitations and unverified claims

A single self-assessment; doctor tests are not open_binary tests. The installed package and source checkpoint also differ.

## What to learn

Turn plausible explanations into testable predictions and publish failures.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> REA analyzed 5 folders of the installed rea-agents 6.3.0 package with analyze_javascript_application.

## Original sources

- [Primary source / pinned evidence](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md)
- [Project / demo](https://github.com/az9713/REA-demo)
- [Additional source 1](https://az9713.github.io/REA-demo/rea-on-rea-receipt.html)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
