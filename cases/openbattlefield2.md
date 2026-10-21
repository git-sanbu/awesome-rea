# OpenBattlefield2: function-level Evidence for a Battlefield 2 client

[← Back to all cases](../README.md) · Games

[English](openbattlefield2.md) · [简体中文](zh-CN/openbattlefield2.md) · [繁體中文](zh-TW/openbattlefield2.md) · [日本語](ja/openbattlefield2.md) · [한국어](ko/openbattlefield2.md) · [Español](es/openbattlefield2.md) · [Français](fr/openbattlefield2.md) · [Deutsch](de/openbattlefield2.md) · [Português (Brasil)](pt-BR/openbattlefield2.md) · [Русский](ru/openbattlefield2.md) · [العربية](ar/openbattlefield2.md) · [हिन्दी](hi/openbattlefield2.md)

- **Author / attribution:** Moxnatiy
- **Source review date:** 2026-10-21
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Battlefield 2 1.5 Refractor 2 client, rendering DLLs and original game data

## The question

How can crosshair, HUD and binary-behavior research inform a traceable engine implementation?

## What REA did

REA 4.1.0 and Ghidra 12.1.4 read 32-bit PE files and collect full function Evidence dossiers. Direct Ghidra queries, game data and server symbols supplement this. Crosshair notes include GuiIndex, position and offset-accumulation addresses and REA Evidence IDs; REA handles only the analysis stage.

## Author-reported results

The project publishes a C++20 engine, function notes, tests and screenshots. The author reports loading an owned BF2 1.5 installation, connecting to an original dedicated server and displaying soldiers and HUD. In connected mode the crosshair renders, expands during movement and contracts when stopped, with checks such as test_weapon_hud.

## Limitations and unverified claims

The research project still lacks firing, vehicle driving and sound. Crosshair weapon-switch, zoom and firing updates remain unfinished; hosted mode has no crosshair. The main platform is macOS arm64, and the Windows build was not run. Results involve multiple tools and cannot all be attributed to REA. This catalog did not rerun it.

## What to learn

Connect addresses, Evidence, implementation and acceptance commands for one observable feature.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Addresses are BF2.exe unless named otherwise; the evidence IDs are REA’s

## Original sources

- [Primary source / pinned evidence](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md)
- [Project / demo](https://github.com/Moxnatiy/OpenBattlefield2)
- [Additional source 1](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/README.md)
- [Additional source 2](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/CLAUDE.md)
- [Additional source 3](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/tools/rea.sh)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
