# Pixel Watch: an eSIM handoff helper informed by companion-APK analysis

[← Back to all cases](../README.md) · Hardware and compatibility

[English](watch-esim-helper.md) · [简体中文](zh-CN/watch-esim-helper.md) · [繁體中文](zh-TW/watch-esim-helper.md) · [日本語](ja/watch-esim-helper.md) · [한국어](ko/watch-esim-helper.md) · [Español](es/watch-esim-helper.md) · [Français](fr/watch-esim-helper.md) · [Deutsch](de/watch-esim-helper.md) · [Português (Brasil)](pt-BR/watch-esim-helper.md) · [Русский](ru/watch-esim-helper.md) · [العربية](ar/watch-esim-helper.md) · [हिन्दी](hi/watch-esim-helper.md)

- **Author / attribution:** AllMySlop
- **Source review date:** 2026-10-19
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Google Pixel Watch companion Android APK 5.0.0.958206140

## The question

How can a separate helper find and open the companion app’s existing watch-eSIM download flow?

## What REA did

The author states that Codex used morluto/rea to locate configuration entry points and navigation in the original APK. The helper parses a QR code or manual input, requests confirmation and hands activation information to the original app; it does not operate the eSIM directly.

## Author-reported results

The Android helper, companion-analysis.md and test records are public. TESTING.md reports 25 unit tests and emulator handoff. A later README update reports successful installation on a Pixel Watch 2 LTE and data-only eSIM connectivity on a supported carrier.

## Limitations and unverified claims

The later README connectivity report is newer than TESTING.md’s early network restriction; they are different validation stages. The author did not review generated code and Codex did not test a real watch. There is no installation-result callback, and compatibility depends on region, carrier, firmware and companion version.

## What to learn

Distinguish opening the original app, delivering configuration, installation and cellular connectivity. Date conflicting source reports.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> using https://github.com/morluto/rea

## Original sources

- [Primary source / pinned evidence](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md)
- [Project / demo](https://github.com/AllMySlop/pixel-watch-esim-writer)
- [Additional source 1](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/docs/companion-analysis.md)
- [Additional source 2](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/TESTING.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
