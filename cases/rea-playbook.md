# rea-playbook: turning Electron Evidence into a report and reconstruction

[← Back to all cases](../README.md) · Learning and reproduction

[English](rea-playbook.md) · [简体中文](zh-CN/rea-playbook.md) · [繁體中文](zh-TW/rea-playbook.md) · [日本語](ja/rea-playbook.md) · [한국어](ko/rea-playbook.md) · [Español](es/rea-playbook.md) · [Français](fr/rea-playbook.md) · [Deutsch](de/rea-playbook.md) · [Português (Brasil)](pt-BR/rea-playbook.md) · [Русский](ru/rea-playbook.md) · [العربية](ar/rea-playbook.md) · [हिन्दी](hi/rea-playbook.md)

- **Author / attribution:** jinshi666888
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** An eight-file minimal Electron example included in the repository

## The question

How can large Evidence JSON become readable facts and a checked reconstruction?

## What REA did

The project pins REA 6.3.0 and supplies an analyze → extract → verify pipeline, MCP handshake and real tool-call probes.

## Author-reported results

The author publishes a sanitized Evidence fixture, file:line report, reconstruction and assertions, reporting 10/10 reconstruction checks passing.

## Limitations and unverified claims

The offline demo reads an existing fixture; it is not a fresh REA run. A small self-built target does not represent a complex commercial app.

## What to learn

Start with a controlled small sample and connect evidence, readable specifications and regression checks.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> npm run analyze will fetch rea-agents@6.3.0 on first use via npx fallback.

## Original sources

- [Primary source / pinned evidence](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md)
- [Project / demo](https://github.com/jinshi666888/rea-playbook)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
