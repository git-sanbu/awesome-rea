# OpenBSD netcat: static analysis of a shipped ELF

[← Back to all cases](../README.md) · Analysis and evaluation

[English](netcat-analysis.md) · [简体中文](zh-CN/netcat-analysis.md) · [繁體中文](zh-TW/netcat-analysis.md) · [日本語](ja/netcat-analysis.md) · [한국어](ko/netcat-analysis.md) · [Español](es/netcat-analysis.md) · [Français](fr/netcat-analysis.md) · [Deutsch](de/netcat-analysis.md) · [Português (Brasil)](pt-BR/netcat-analysis.md) · [Русский](ru/netcat-analysis.md) · [العربية](ar/netcat-analysis.md) · [हिन्दी](hi/netcat-analysis.md)

- **Author / attribution:** NullLabTests
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Ubuntu netcat-openbsd 1.234-1 binary

## The question

Which network, proxy and security-related implementations are in the shipped netcat binary?

## What REA did

REA’s pwntools layout checks and Ghidra path analyze the same image, with readelf, objdump, nm and strings used for cross-checks.

## Author-reported results

The author publishes function, string and call-path investigations, results.txt and raw JSON output under files/.

## Limitations and unverified claims

This is static analysis of a specific build. Imports and pseudocode alone do not establish every runtime behavior or constitute a security certification.

## What to learn

Keep raw REA output alongside independent tool checks so conclusions can be reviewed.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> We ran two providers against the same image and cross-checked with readelf, objdump, nm, and strings.

## Original sources

- [Primary source / pinned evidence](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md)
- [Project / demo](https://github.com/NullLabTests/OpenBSD_netcat_REA)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
