# iCSee localmod: tracing camera commands while preserving stock drivers

[← Back to all cases](../README.md) · Hardware and compatibility

[English](icsee-localmod.md) · [简体中文](zh-CN/icsee-localmod.md) · [繁體中文](zh-TW/icsee-localmod.md) · [日本語](ja/icsee-localmod.md) · [한국어](ko/icsee-localmod.md) · [Español](es/icsee-localmod.md) · [Français](fr/icsee-localmod.md) · [Deutsch](de/icsee-localmod.md) · [Português (Brasil)](pt-BR/icsee-localmod.md) · [Русский](ru/icsee-localmod.md) · [العربية](ar/icsee-localmod.md) · [हिन्दी](hi/icsee-localmod.md)

- **Author / attribution:** Vittuu
- **Source review date:** 2026-11-03
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** One XM530V200 / IPG-X2-WQ-BL camera and its stock Sofia application

## The question

How can native command research enable local camera controls while preserving working drivers and SD recording?

## What REA did

REA 6.8.0 and Ghidra traced Sofia command strings and cross-references to lighting and PTZ handlers. The published workflow records binary-specific anchors; protocol responses and physical behavior were validated separately.

## Author-reported results

The author publishes a local C panel/API, source and Home Assistant examples. The owner reports physical PTZ and white-LED checks, decoded audio/video, boot persistence and continued native WFS recording after independent restarts. A separate public simulated-backend record lists 22 passed tests and explicitly says hardware_tested=false.

## Limitations and unverified claims

The full firmware, decompilation and private Evidence bundles are not published. Hardware results are owner reports for one unit; simulated tests do not validate firmware installation or physical behavior. This is an extension to stock firmware, with no universal image, complete intercom or measured latency improvement. The route-removal guard is not a firewall; this catalog did not test a device.

## What to learn

Trace a bounded command, check authenticated responses, then verify the physical action and persistence as separate steps.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> REA/Ghidra supported analysis; Codex assisted with development and writing.

## Original sources

- [Primary source / pinned evidence](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/REA-GHIDRA-WORKFLOW.md)
- [Project / demo](https://github.com/Vittuu/icsee-localmod)
- [Additional source 1](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/README.md)
- [Additional source 2](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/VALIDATION.md)
- [Additional source 3](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/simulation-validation.json)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
