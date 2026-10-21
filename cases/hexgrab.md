# hexgrab: investigating the PowerToys color picker

[← Back to all cases](../README.md) · Applications

[English](hexgrab.md) · [简体中文](zh-CN/hexgrab.md) · [繁體中文](zh-TW/hexgrab.md) · [日本語](ja/hexgrab.md) · [한국어](ko/hexgrab.md) · [Español](es/hexgrab.md) · [Français](fr/hexgrab.md) · [Deutsch](de/hexgrab.md) · [Português (Brasil)](pt-BR/hexgrab.md) · [Русский](ru/hexgrab.md) · [العربية](ar/hexgrab.md) · [हिन्दी](hi/hexgrab.md)

- **Author / attribution:** iammukeshm
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Color-picker binaries distributed with Microsoft PowerToys

## The question

How do global hotkeys, pixel sampling and the clipboard work together?

## What REA did

The author analyzes released binaries with REA, checks each finding against public source, and builds a smaller independent color picker with .NET 10 / WPF.

## Author-reported results

Public source and docs/rea-findings.md are provided. The author reports that 8 of 9 findings were fully correct.

## Limitations and unverified claims

Tested only on one monitor at 125% scaling; mixed-DPI multi-monitor behavior was not tested on real hardware. The 8/9 result is the author’s check of this investigation, not a general REA accuracy rate.

## What to learn

Practice on software with public source so that tool findings can be checked.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> to study how the Color Picker in Microsoft PowerToys works from its shipped binaries

## Original sources

- [Primary source / pinned evidence](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md)
- [Project / demo](https://github.com/iammukeshm/hexgrab)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
