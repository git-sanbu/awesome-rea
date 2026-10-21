# Ski or Die: rebuilding Snowball War in Rust

[← Back to all cases](../README.md) · Games

[English](ski-or-die.md) · [简体中文](zh-CN/ski-or-die.md) · [繁體中文](zh-TW/ski-or-die.md) · [日本語](ja/ski-or-die.md) · [한국어](ko/ski-or-die.md) · [Español](es/ski-or-die.md) · [Français](fr/ski-or-die.md) · [Deutsch](de/ski-or-die.md) · [Português (Brasil)](pt-BR/ski-or-die.md) · [Русский](ru/ski-or-die.md) · [العربية](ar/ski-or-die.md) · [हिन्दी](hi/ski-or-die.md)

- **Author / attribution:** tuunanet
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Snowball War minigame from the DOS edition of Ski or Die

## The question

How can throwing, collision, spawning and scoring rules be recovered from a DOS game?

## What REA did

REA CLI and the Ghidra 16-bit adapter inspect an unpacked MZ load image. Caller-declared code seeds and trace/function/search queries investigate the modules.

## Author-reported results

The author publishes a playable Rust + SDL2 reconstruction, behavior specifications, reverse-engineering notes and asset-extraction tools.

## Limitations and unverified claims

Only Snowball War is reconstructed. There is no audio playback or side-by-side comparison with the running DOS original; frame rate and PRNG behavior are approximated. Assets must come from the reader’s own game copy.

## What to learn

Write address-backed behavior specifications before rewriting, and label each approximation.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Every analysis call therefore ran through the REA CLI

## Original sources

- [Primary source / pinned evidence](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md)
- [Project / demo](https://github.com/tuunanet/rea-ski-or-die-reconstruction)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
