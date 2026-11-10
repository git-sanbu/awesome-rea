# DESIGN:OS Studio: an independent desktop studio that reads and writes Figma .fig files

[← Back to all cases](../README.md) · Applications

[English](design-os-studio.md) · [简体中文](zh-CN/design-os-studio.md) · [繁體中文](zh-TW/design-os-studio.md) · [日本語](ja/design-os-studio.md) · [한국어](ko/design-os-studio.md) · [Español](es/design-os-studio.md) · [Français](fr/design-os-studio.md) · [Deutsch](de/design-os-studio.md) · [Português (Brasil)](pt-BR/design-os-studio.md) · [Русский](ru/design-os-studio.md) · [العربية](ar/design-os-studio.md) · [हिन्दी](hi/design-os-studio.md)

- **Author / attribution:** jangtrinh
- **Source review date:** 2026-11-10
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Figma Desktop and the Figma .fig container format (fig-kiwi, writes version 106)

## The question

How can Figma .fig containers be read and written, and editor behaviour reimplemented, in an independent desktop studio?

## What REA did

Public project specs name morluto/rea 6.7.0 (`npx -y rea-agents`) as the tool for reverse-engineering Figma fields, and record that it ran analyze-javascript-application on extracted editor JavaScript. The same notes say wasm lanes were unavailable (WABT and Ghidra were not installed), so the kiwi schema was decoded with a local reader. Checked-in reports also contain rea CLI output, including completed inspect-macho and analyze-javascript-application runs, and some failed invocations. The product README does not mention REA.

## Author-reported results

DESIGN:OS Studio is a released desktop studio (reviewed v0.7.11) that reads Figma .fig containers and writes container version 106, reimplements editor behaviour locally, and ships a 39-tool stdio MCP server plus multi-language codegen. The README reports more than 6,000 macOS CI tests and designos-fig round-trip tests. The maintainer states that REA was used for this Figma work. This catalog reviewed the public specs, checked-in rea output and README; it did not install the studio or rerun rea.

## Limitations and unverified claims

The product README does not credit REA. Some recorded rea runs failed (unknown command or an unconfigured native-analysis provider). Full session scratchpads cited in other notes are kept outside the repository. Known issue #834 remains open: saving a .fig file drops numbered-list formatting and writes inherited or variable-bound paints on instances as fixed values. License is PolyForm Shield 1.0.0 (source-available, not an open-source license). This catalog did not independently reproduce .fig compatibility or rerun the test suite.

## What to learn

Documented REA use can live in project specs and checked-in CLI evidence even when the product README is silent, and a mixed workflow may still need a local fallback when REA's wasm lanes are unavailable.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## Original sources

- [Primary source / pinned evidence](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [Project / demo](https://github.com/jangtrinh/design-os-studio)
- [Additional source 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [Additional source 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [Additional source 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
