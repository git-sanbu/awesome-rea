# rea-groundtruth: checking analysis blind spots against known source

[← Back to all cases](../README.md) · Analysis and evaluation

[English](rea-groundtruth.md) · [简体中文](zh-CN/rea-groundtruth.md) · [繁體中文](zh-TW/rea-groundtruth.md) · [日本語](ja/rea-groundtruth.md) · [한국어](ko/rea-groundtruth.md) · [Español](es/rea-groundtruth.md) · [Français](fr/rea-groundtruth.md) · [Deutsch](de/rea-groundtruth.md) · [Português (Brasil)](pt-BR/rea-groundtruth.md) · [Русский](ru/rea-groundtruth.md) · [العربية](ar/rea-groundtruth.md) · [हिन्दी](hi/rea-groundtruth.md)

- **Author / attribution:** UnknownHacker1
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** MongoDB Compass 1.43.4 and handwritten Electron fixtures

## The question

Does a report of zero IPC calls or windows reflect the app or an analysis gap?

## What REA did

REA 6.4.0 analyzes an app with known source. Minimal examples with different webpack wrappers provide controls.

## Author-reported results

The author publishes a one-command reproduction of Electron APIs missed in a particular webpack form and records how a post-signing ASAR integrity mismatch was handled.

## Limitations and unverified claims

The report concerns specific builds on Windows 11 and REA 6.4.0. Later versions may fix the issue; this catalog does not claim the historical bug persists in the latest version.

## What to learn

Zero findings do not establish absence. Fixtures with known source can test analyzer coverage.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Tested with rea-agents 6.4.0 on Windows 11 x64, Node 22.22.

## Original sources

- [Primary source / pinned evidence](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md)
- [Project / demo](https://github.com/UnknownHacker1/rea-groundtruth)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
