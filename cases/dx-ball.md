# DX-Ball: reconstructing stereo sound panning

[← Back to all cases](../README.md) · Official showcases

[English](dx-ball.md) · [简体中文](zh-CN/dx-ball.md) · [繁體中文](zh-TW/dx-ball.md) · [日本語](ja/dx-ball.md) · [한국어](ko/dx-ball.md) · [Español](es/dx-ball.md) · [Français](fr/dx-ball.md) · [Deutsch](de/dx-ball.md) · [Português (Brasil)](pt-BR/dx-ball.md) · [Русский](ru/dx-ball.md) · [العربية](ar/dx-ball.md) · [हिन्दी](hi/dx-ball.md)

- **Author / attribution:** REA showcase team; original project authors credited in sources
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** DX-Ball 1.07 Windows i386 executable

## The question

How does an on-screen position become a sound-pan value?

## What REA did

REA and Ghidra inspect the target function, callers, instructions and constants. The maintainer’s reconstruction explains an x87 expression omitted by the decompiled pseudocode.

## Author-reported results

The source records 3,205 differential cases against the original x86 function and a complete 63-byte match after recompilation with the historical compiler.

## Limitations and unverified claims

Validation covers one function and a specific checkpoint. The updated showcase reuses earlier execution and compilation records; it does not establish a complete game reconstruction.

## What to learn

When pseudocode is incomplete, follow callers, assembly and constants. Record semantic tests separately from byte matching.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Recorded analysis: REA 4.1.0, Ghidra 12.1.4, Linux x64 host.

## Original sources

- [Primary source / pinned evidence](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md)
- [Project / demo](https://rea.tools/showcase/dx-ball/)
- [Additional source 1](https://github.com/N0zoM1z0/dx-ball)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
