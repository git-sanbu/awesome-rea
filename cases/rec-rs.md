# rec-rs: an OBS-inspired native macOS recorder

[← Back to all cases](../README.md) · Applications

[English](rec-rs.md) · [简体中文](zh-CN/rec-rs.md) · [繁體中文](zh-TW/rec-rs.md) · [日本語](ja/rec-rs.md) · [한국어](ko/rec-rs.md) · [Español](es/rec-rs.md) · [Français](fr/rec-rs.md) · [Deutsch](de/rec-rs.md) · [Português (Brasil)](pt-BR/rec-rs.md) · [Русский](ru/rec-rs.md) · [العربية](ar/rec-rs.md) · [हिन्दी](hi/rec-rs.md)

- **Author / attribution:** michaelshimeles
- **Source review date:** 2026-10-21
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Architecture and behavior of OBS Studio

## The question

How can a focused screen, camera and audio recorder be built?

## What REA did

The author states that REA and Claude Code were used to investigate OBS before building an independent tool with Rust and Apple frameworks.

## Author-reported results

The project publishes screen/camera recording, audio mixing, replay buffer and streaming features. The author reports development and testing on an Apple Silicon Mac. The 2026-10-21 README adds Apple Silicon + Intel universal releases, signing/notarization and Sparkle updates.

## Limitations and unverified claims

Requires macOS 15+. The reported hardware remains an Apple Silicon M4 Pro; an Intel download and build instructions do not verify recording on a real Intel Mac. This is a scoped implementation, not a complete OBS replacement or cross-platform reconstruction. This catalog did not rerun it.

## What to learn

Extract the architecture needed for a specific use case and build a smaller product around it.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> by studying its architecture and behavior with REA and Claude Code

## Original sources

- [Primary source / pinned evidence](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md)
- [Project / demo](https://github.com/michaelshimeles/rec-rs)
- [Additional source 1](https://github.com/michaelshimeles/rec-rs/blob/d5a7920cd00d96dcabc779750e8316f23e8c048f/README.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
