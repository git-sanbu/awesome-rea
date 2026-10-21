# Wispr Flow: a speech-input teardown and a small local prototype

[← Back to all cases](../README.md) · Applications

[English](wispr-flow.md) · [简体中文](zh-CN/wispr-flow.md) · [繁體中文](zh-TW/wispr-flow.md) · [日本語](ja/wispr-flow.md) · [한국어](ko/wispr-flow.md) · [Español](es/wispr-flow.md) · [Français](fr/wispr-flow.md) · [Deutsch](de/wispr-flow.md) · [Português (Brasil)](pt-BR/wispr-flow.md) · [Русский](ru/wispr-flow.md) · [العربية](ar/wispr-flow.md) · [हिन्दी](hi/wispr-flow.md)

- **Author / attribution:** az9713
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Wispr Flow 1.6.1102 Electron package and native helper

## The question

How are recording, transcription, context and pasting connected?

## What REA did

The report combines REA CLI JavaScript static analysis, direct bundle reading and REA + Ghidra investigation of helper paste code. Claims are marked proven, inferred or hidden.

## Author-reported results

The author publishes a teardown, supplementary Ghidra investigation, development record and local flowlite.py prototype.

## Limitations and unverified claims

The first two MCP calls timed out. Some conclusions come from other tools or manual code reading. The original app was not run and network traffic was not captured, so server models and behavior remain hidden. The prototype omits context, streaming and complete validation.

## What to learn

Record failures and supplementary tools. Client analysis cannot establish how a server-side model works.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Wispr Flow, reverse engineered with REA

## Original sources

- [Primary source / pinned evidence](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md)
- [Project / demo](https://github.com/az9713/wispr-flow-rea-teardown)
- [Additional source 1](https://az9713.github.io/wispr-flow-rea-teardown/wispr-flow-teardown.html)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
