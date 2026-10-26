# Open Scrantic: rebuilding the Johnny Castaway screensaver engine in Rust

[← Back to all cases](../README.md) · Games

[English](open-scrantic.md) · [简体中文](zh-CN/open-scrantic.md) · [繁體中文](zh-TW/open-scrantic.md) · [日本語](ja/open-scrantic.md) · [한국어](ko/open-scrantic.md) · [Español](es/open-scrantic.md) · [Français](fr/open-scrantic.md) · [Deutsch](de/open-scrantic.md) · [Português (Brasil)](pt-BR/open-scrantic.md) · [Русский](ru/open-scrantic.md) · [العربية](ar/open-scrantic.md) · [हिन्दी](hi/open-scrantic.md)

- **Author / attribution:** glauberlima
- **Source review date:** 2026-10-26
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Screen Antics: Johnny Castaway (1992), Windows 3.1 SCRANTIC.SCR and matching resource files

## The question

How can a 16-bit screensaver’s script interpreter, story schedule and random behavior run on modern systems?

## What REA did

The developer explicitly credits Claude Code with REA for disassembling and decompiling SCRANTIC.SCR, recovering resource formats and script semantics, and producing the Rust implementation and documentation.

## Author-reported results

The public Rust engine implements resource loading, TTM/ADS script execution, story progression, timing and the original random-number generator. ENGINE.md records recovered rules and deliberate differences; the author supplies Windows, macOS and Linux release paths.

## Limitations and unverified claims

The engine requires the user’s own matching original files and rejects other executable builds. Full-frame redraw, optional image/audio processing and settings differ from the original. Cross-platform behavior and equivalence were not independently tested here; raw REA sessions were not found in the reviewed files.

## What to learn

Keep original asset ownership separate from engine code, preserve arithmetic and scheduling rules, and document deliberate compatibility differences.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Together they were used to disassemble and decompile the original
`SCRANTIC.SCR`, recover the resource formats and script semantics, and write the Rust code, tests and
documentation.

## Original sources

- [Primary source / pinned evidence](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md)
- [Project / demo](https://github.com/glauberlima/open-scrantic)
- [Additional source 1](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/docs/ENGINE.md)
- [Additional source 2](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/rng.rs)
- [Additional source 3](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/config.rs)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
