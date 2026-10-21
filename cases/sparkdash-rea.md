# sparkDash: integrating REA analysis into a multi-device dashboard

[← Back to all cases](../README.md) · Tools and integrations

[English](sparkdash-rea.md) · [简体中文](zh-CN/sparkdash-rea.md) · [繁體中文](zh-TW/sparkdash-rea.md) · [日本語](ja/sparkdash-rea.md) · [한국어](ko/sparkdash-rea.md) · [Español](es/sparkdash-rea.md) · [Français](fr/sparkdash-rea.md) · [Deutsch](de/sparkdash-rea.md) · [Português (Brasil)](pt-BR/sparkdash-rea.md) · [Русский](ru/sparkdash-rea.md) · [العربية](ar/sparkdash-rea.md) · [हिन्दी](hi/sparkdash-rea.md)

- **Author / attribution:** MiaAI-Lab
- **Source review date:** 2026-10-21
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** REA CLI, input files and analysis/Evidence views on remote Linux devices

## The question

How can a web interface submit long-running remote REA jobs and load large results on demand?

## What REA did

The project actually calls upstream REA through its CLI, pinning rea-agents 6.4.0 and its lockfile. server/rea implements detached jobs, uploads, status, paged results and exports. Commands drive inspect-analysis-view and compare; the dashboard does not implement a decompiler.

## Author-reported results

The public Tools → REA page and server implementation support detached remote execution, logs, summaries, limitations/unknowns, on-demand views, JSON exports and Evidence comparison. Version pinning, job-management and upload tests are public. Inclusion concerns implemented integration, not installation instructions alone.

## Limitations and unverified claims

This is an integration case, not a REA reconstruction of sparkDash or proof that every upstream analysis path passed hardware acceptance. Devices must run Linux, the feature is off by default and target formats need additional providers. Reviewed manager tests use fake REA and a local shell, which do not replace real Ghidra or remote-device tests. This catalog did not install or run it.

## What to learn

Attribute upstream capabilities separately from scheduling and UI work, preserving evidence, limitations and failures in the displayed results.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> sparkDash uses the CLI only

## Original sources

- [Primary source / pinned evidence](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md)
- [Project / demo](https://github.com/MiaAI-Lab/sparkDash)
- [Additional source 1](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/commands.js)
- [Additional source 2](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/ReaManager.js)
- [Additional source 3](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/pinned/package.json)
- [Additional source 4](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/__tests__/manager.test.js)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
