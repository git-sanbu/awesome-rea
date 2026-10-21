# Desktop Games: porting a desktop toy to macOS and the browser

[← Back to all cases](../README.md) · Games

[English](desktop-games-nostalgia.md) · [简体中文](zh-CN/desktop-games-nostalgia.md) · [繁體中文](zh-TW/desktop-games-nostalgia.md) · [日本語](ja/desktop-games-nostalgia.md) · [한국어](ko/desktop-games-nostalgia.md) · [Español](es/desktop-games-nostalgia.md) · [Français](fr/desktop-games-nostalgia.md) · [Deutsch](de/desktop-games-nostalgia.md) · [Português (Brasil)](pt-BR/desktop-games-nostalgia.md) · [Русский](ru/desktop-games-nostalgia.md) · [العربية](ar/desktop-games-nostalgia.md) · [हिन्दी](hi/desktop-games-nostalgia.md)

- **Author / attribution:** ucodia
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Gemtree’s 2000 Desktop Games / Stress Reducers Windows program

## The question

How can the Peter interpreter, program tree, interactions and assets be understood and ported?

## What REA did

The author uses Claude Code, REA and Ghidra. REA investigates image compression, resource layout, timing, sprite movement, sound and coordinates in the interpreter; Python tools process the program tree and assets.

## Author-reported results

The public repository includes a Swift macOS version, browser version, decompiled program tree and asset-processing scripts.

## Limitations and unverified claims

The author uses true color instead of the original palette and changes shadow rendering. Inclusion does not verify complete compatibility or redistribution rights for third-party assets.

## What to learn

For software with an embedded interpreter, distinguish the interpreter, program tree and assets.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> The interpreter was decompiled with REA

## Original sources

- [Primary source / pinned evidence](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md)
- [Project / demo](https://github.com/ucodia/desktop-games-nostalgia)
- [Additional source 1](https://ucodia.github.io/desktop-games-nostalgia/)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
