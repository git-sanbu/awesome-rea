# App X-Ray: turning REA findings into shareable app reports

[← Back to all cases](../README.md) · Tools and integrations

[English](app-xray.md) · [简体中文](zh-CN/app-xray.md) · [繁體中文](zh-TW/app-xray.md) · [日本語](ja/app-xray.md) · [한국어](ko/app-xray.md) · [Español](es/app-xray.md) · [Français](fr/app-xray.md) · [Deutsch](de/app-xray.md) · [Português (Brasil)](pt-BR/app-xray.md) · [Русский](ru/app-xray.md) · [العربية](ar/app-xray.md) · [हिन्दी](hi/app-xray.md)

- **Author / attribution:** Eliot5566
- **Source review date:** 2026-11-03
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Open-source Electron application source, with additional APK, native-binary and model-file paths

## The question

How can static REA evidence become a readable component report and a version-to-version diff?

## What REA did

The integration invokes pinned REA 6.7.0 CLI operations and parses JSON Evidence. JavaScript analysis batches keep files under the same root to preserve import resolution; Electron fuse inspection is a separate REA operation.

## Author-reported results

The project publishes report generation, rules, CI diffs and a gallery. Its dated week-5 report says 20 Electron apps were scanned and versions found for all 20, with 18 scans under 60 seconds on that container. REA-Bench supplies 54 questions derived from reports across the 20-app corpus.

## Limitations and unverified claims

These are dated author-reported scans, not current vulnerability or runtime-network findings. Rules can miss helper-created windows, computed channels and sender validation; static addresses do not prove traffic. REA-Bench measures agreement with App X-Ray reports rather than independent ground truth and does not itself demonstrate a tool-enabled agent advantage. This catalog did not rerun scans.

## What to learn

Link report claims to source, retain scan commits and dates, and treat static rules and generated benchmark answers as fallible.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Runs one REA CLI command with --json and returns the parsed Evidence record.

## Original sources

- [Primary source / pinned evidence](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/core/rea.ts)
- [Project / demo](https://github.com/Eliot5566/app-xray)
- [Additional source 1](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/README.md)
- [Additional source 2](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/results-2026-10-23-week5.md)
- [Additional source 3](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/rea-bench/README.md)
- [Additional source 4](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/rules/ipc.ts)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
