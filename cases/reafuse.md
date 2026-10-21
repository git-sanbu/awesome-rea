# ReaFuse: combining two libraries after investigating their behavior

[← Back to all cases](../README.md) · Learning and reproduction

[English](reafuse.md) · [简体中文](zh-CN/reafuse.md) · [繁體中文](zh-TW/reafuse.md) · [日本語](ja/reafuse.md) · [한국어](ko/reafuse.md) · [Español](es/reafuse.md) · [Français](fr/reafuse.md) · [Deutsch](de/reafuse.md) · [Português (Brasil)](pt-BR/reafuse.md) · [Русский](ru/reafuse.md) · [العربية](ar/reafuse.md) · [हिन्दी](hi/reafuse.md)

- **Author / attribution:** sickpyramid
- **Source review date:** 2026-10-19
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Two pairs of open-source JavaScript libraries: ms + pretty-bytes, and dequal + klona

## The question

How can two projects become behavior specifications and then a new combined tool?

## What REA did

REA 6.4.0 JavaScript static analysis reads the two inputs. README files and tests help produce behavior specifications; the model separately proposes combinations, writes acceptance contracts and new code, then runs the author’s tests and similarity scans.

## Author-reported results

The author publishes ratewise (transfer rate and ETA) and objdelta (structural diff/patch), reports and Evidence. Reported contract results are 18/18 and 17/17, plus 7/7 and 6/6 tests for the new tools. Both examples count as one project case.

## Limitations and unverified claims

Only two public JavaScript examples were reviewed; the project is v0.1 alpha. The same workflow produces specifications and implementations. The author’s clean-room label is not an independent legal conclusion. Similarity scans and passing tests do not establish general originality or complete equivalence. This catalog did not rerun them.

## What to learn

Connect analysis to implementation through behavior specifications, mapping tests to either input behavior or the new combination.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Every donor goes through REA's static JavaScript analysis

## Original sources

- [Primary source / pinned evidence](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md)
- [Project / demo](https://github.com/sickpyramid/ReaFuse)
- [Additional source 1](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/ratewise/REPORT.md)
- [Additional source 2](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/objdelta/REPORT.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
