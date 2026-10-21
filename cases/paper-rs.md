# Sketch (formerly paper-rs): a Paper-inspired Rust infinite canvas

[← Back to all cases](../README.md) · Applications

[English](paper-rs.md) · [简体中文](zh-CN/paper-rs.md) · [繁體中文](zh-TW/paper-rs.md) · [日本語](ja/paper-rs.md) · [한국어](ko/paper-rs.md) · [Español](es/paper-rs.md) · [Français](fr/paper-rs.md) · [Deutsch](de/paper-rs.md) · [Português (Brasil)](pt-BR/paper-rs.md) · [Русский](ru/paper-rs.md) · [العربية](ar/paper-rs.md) · [हिन्दी](hi/paper-rs.md)

- **Author / attribution:** michaelshimeles
- **Source review date:** 2026-10-21
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Behavior of the Paper desktop design application

## The question

How can canvas, layout and editor interactions inform an independent design tool?

## What REA did

The author states that REA and Claude Code were used to investigate Paper’s desktop behavior before implementing a separate Rust app with wgpu, winit and egui.

## Author-reported results

The project publishes an infinite canvas, pages, layouts, vector editing, whiteboarding and MCP interfaces, with tests and feature differences. Reviewed on 2026-10-21: it is now named Sketch, with the sketch-rs executable, first-launch migration of the old project directory and compatibility with old files and environment variables. It remains one case.

## Limitations and unverified claims

The author explicitly had not launched it on real macOS hardware. Some features are approximated or missing. Inclusion relies on the author’s public attribution, not verified equivalence to Paper.

## What to learn

Learn behavior and interaction contracts while stating the boundaries of the independent implementation.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> by studying the behavior of the Paper desktop app with REA and Claude Code

## Original sources

- [Primary source / pinned evidence](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md)
- [Project / demo](https://github.com/michaelshimeles/paper-rs)
- [Additional source 1](https://github.com/michaelshimeles/paper-rs/blob/0b1b91da7caa10abae7cbf75d2ce003822c85fe9/README.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
