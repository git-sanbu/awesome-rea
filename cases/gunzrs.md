# GunZRs: identifying a packing boundary before rebuilding from game data

[← Back to all cases](../README.md) · Games

[English](gunzrs.md) · [简体中文](zh-CN/gunzrs.md) · [繁體中文](zh-TW/gunzrs.md) · [日本語](ja/gunzrs.md) · [한국어](ko/gunzrs.md) · [Español](es/gunzrs.md) · [Français](fr/gunzrs.md) · [Deutsch](de/gunzrs.md) · [Português (Brasil)](pt-BR/gunzrs.md) · [Русский](ru/gunzrs.md) · [العربية](ar/gunzrs.md) · [हिन्दी](hi/gunzrs.md)

- **Author / attribution:** OpenRsG
- **Source review date:** 2026-10-21
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** GunZ: The Duel Steam installation, Gunz.exe and .mrs archives

## The question

How can reconstruction continue when a packed executable prevents static recovery of game logic?

## What REA did

REA and Ghidra investigate native files. The author records Themida sections, entry RVA and unpacking stubs in Gunz.exe, with local REA Evidence paths. Game formats are then mainly recovered from data-file structure. Public scripts also cover REA queries, generated ELF/PE fixtures, analysis, caching and failure propagation.

## Author-reported results

The project publishes a Rust + Bevy reconstruction, format notes, query scripts and tests. The author reports Linux playability with an owned installation, maps, actions, bots, a browser build and LAN. Generated ELF/PE function analysis and snapshot-replay checks are recorded separately from game compatibility.

## Limitations and unverified claims

The packed game code was not statically recovered, and some behavior and timing are inferred. Original Evidence remains local to the author; public material includes descriptions and scripts. Windows/macOS CI builds are reported but were not played by the author. Map counts have different note scopes and do not prove full compatibility. This catalog did not rerun it.

## What to learn

An analysis failure can still establish a useful boundary: label binary facts, data-file observations and inferences separately.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> stub (REA evidence under .local/re/a076a5d8…/). Game code is not statically readable

## Original sources

- [Primary source / pinned evidence](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md)
- [Project / demo](https://github.com/OpenRsG/GunZRs)
- [Additional source 1](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/README.md)
- [Additional source 2](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/reverse-engineering.md)
- [Additional source 3](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/scripts/rea.sh)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
