# Notion: tracing the Electron rich-text clipboard bridge

[← Back to all cases](../README.md) · Official showcases

[English](notion-clipboard.md) · [简体中文](zh-CN/notion-clipboard.md) · [繁體中文](zh-TW/notion-clipboard.md) · [日本語](ja/notion-clipboard.md) · [한국어](ko/notion-clipboard.md) · [Español](es/notion-clipboard.md) · [Français](fr/notion-clipboard.md) · [Deutsch](de/notion-clipboard.md) · [Português (Brasil)](pt-BR/notion-clipboard.md) · [Русский](ru/notion-clipboard.md) · [العربية](ar/notion-clipboard.md) · [हिन्दी](hi/notion-clipboard.md)

- **Author / attribution:** REA showcase team; original project authors credited in sources
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Notion Desktop 7.6.1 app.asar and a web-editor module cached at a different time

## The question

How does a web editor write rich text through the desktop clipboard?

## What REA did

REA statically analyzes the tab preload to locate the context bridge and IPC invocation. Direct reading of bundled code fills in the clipboard API, channels and main-process receiver.

## Author-reported results

The showcase explains renderer → preload → IPC → main at source level and demonstrates rich-text markers and Markdown tables in an independent module probe.

## Limitations and unverified claims

The REA graph did not automatically resolve the full clipboard-channel chain. The web editor and desktop package are not matching runtime samples; real copy/paste was not captured on the same version.

## What to learn

Separate structures returned by REA, conclusions from manual code reading and results from independent probes.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> The published npm REA 4.1.0 package inspected the saved tab preload on 7 October 2026

## Original sources

- [Primary source / pinned evidence](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md)
- [Project / demo](https://rea.tools/showcase/notion/)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
