# Co-op Anything: investigating campaign multiplayer entry points

[← Back to all cases](../README.md) · Games

[English](coop-anything.md) · [简体中文](zh-CN/coop-anything.md) · [繁體中文](zh-TW/coop-anything.md) · [日本語](ja/coop-anything.md) · [한국어](ko/coop-anything.md) · [Español](es/coop-anything.md) · [Français](fr/coop-anything.md) · [Deutsch](de/coop-anything.md) · [Português (Brasil)](pt-BR/coop-anything.md) · [Русский](ru/coop-anything.md) · [العربية](ar/coop-anything.md) · [हिन्दी](hi/coop-anything.md)

- **Author / attribution:** cranebeaker and community contributors
- **Source review date:** 2026-10-21
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Steam C&C3 Tiberium Wars / Kane’s Wrath builds and World in Conflict client/dedicated server

## The question

How can a campaign retain its scripts and sides while letting a second player join?

## What REA did

C&C3 notes explicitly record REA/Ghidra 12.1.4 observations of the TW 1.10 executable, locating the function that removes campaign sides during multiplayer/skirmish preparation. World in Conflict notes document dedicated-server role-selection analysis through REA/Ghidra, separating single-player restrictions, server state and unverified inferences. Other scripts, debuggers and runtime tests handle later work.

## Author-reported results

The project publishes MCP/skills, synchronization-test tools and game-specific research. C&C3 notes include addresses, formats and experiments. For World in Conflict, the author reports a LAN campaign host running missions while a second client joins and sees live synchronized units, but cannot control its own units. Each game retains its own QA level.

## Limitations and unverified claims

REA attribution is limited to the reviewed C&C3 and World in Conflict investigations, not every mod in the directory. Player-two control, deployment zones, visibility and internet play remain unfinished in World in Conflict; the report verifies LAN only. C&C3 also has unresolved campaign failures and context issues. Stars do not prove a completable campaign. This catalog did not run the games or tests.

## What to learn

Validate client connection, synchronized visibility and genuinely playable co-op as separate outcomes.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Engine seams (observed in the TW 1.10 exe with REA/Ghidra 12.1.4)

## Original sources

- [Primary source / pinned evidence](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md)
- [Project / demo](https://github.com/cranebeaker/coop-anything)
- [Additional source 1](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/README.md)
- [Additional source 2](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/world-in-conflict/NOTES.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
