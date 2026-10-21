# DiskLens: checking disk-scanning and treemap algorithms in a released binary

[← Back to all cases](../README.md) · Applications

[English](disklens.md) · [简体中文](zh-CN/disklens.md) · [繁體中文](zh-TW/disklens.md) · [日本語](ja/disklens.md) · [한국어](ko/disklens.md) · [Español](es/disklens.md) · [Français](fr/disklens.md) · [Deutsch](de/disklens.md) · [Português (Brasil)](pt-BR/disklens.md) · [Русский](ru/disklens.md) · [العربية](ar/disklens.md) · [हिन्दी](hi/disklens.md)

- **Author / attribution:** KarlssonChristoffer
- **Source review date:** 2026-10-19
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** WinDirStat 2.5.0 Windows executable and public source

## The question

How can disk scanning, treemaps and duplicate detection be checked before building a new interface?

## What REA did

Claude Code uses REA and Ghidra on the installed WinDirStat.exe to confirm directory enumeration, the NTFS MFT reader, treemap defaults and SHA-512 deduplication. The author states that algorithm details mostly came from reading source; REA checked the released binary and guided the investigation.

## Author-reported results

The project publishes a Rust engine, Tauri/Svelte interface and REA Evidence IDs. The author reports 24 engine tests and a scan/treemap check of roughly 1.3 million files on one machine.

## Limitations and unverified claims

The author explicitly did not review the generated code. Several file operations and system integrations lack real-UI checks. Fast MFT scanning is absent and hard links are double-counted. Some algorithms directly port GPL source, so this is not a clean-room reconstruction of closed-source software. Single-machine timing is not a controlled performance comparison.

## What to learn

Attribute binary observations and source reading separately, and state which file operations were actually tested.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Claude used REA on the WinDirStat 2.5.0 installed on my PC

## Original sources

- [Primary source / pinned evidence](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md)
- [Project / demo](https://github.com/KarlssonChristoffer/DiskLens)
- [Additional source 1](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/docs/research.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
