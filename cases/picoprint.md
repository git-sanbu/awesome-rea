# PicoPrint: connecting a mobile thermal printer to Windows printing

[← Back to all cases](../README.md) · Hardware and compatibility

[English](picoprint.md) · [简体中文](zh-CN/picoprint.md) · [繁體中文](zh-TW/picoprint.md) · [日本語](ja/picoprint.md) · [한국어](ko/picoprint.md) · [Español](es/picoprint.md) · [Français](fr/picoprint.md) · [Deutsch](de/picoprint.md) · [Português (Brasil)](pt-BR/picoprint.md) · [Русский](ru/picoprint.md) · [العربية](ar/picoprint.md) · [हिन्दी](hi/picoprint.md)

- **Author / attribution:** bigtower17
- **Source review date:** 2026-10-19
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** LX-D02 Bluetooth thermal printer and Funny Print React Native Android app

## The question

When a driver connects but does not print, how can handshake differences be found?

## What REA did

In REA discussion #4152, the author says REA 6.5.0 provided doctor, ADB device checks and the Android investigation entry point. Actual Hermes bytecode decompilation used hermes-dec; protocol inference and traffic comparison were not REA-only work.

## Author-reported results

The author publishes a thermoprint-based Go printing service and protocol notes, reporting Ctrl+P printing of text, images and documents on Windows 11 with a real LX-D02, and an upstream handshake fix.

## Limitations and unverified claims

Early project with no one-click installer, tray status or automatic reconnect. The discussion explicitly notes that REA did not cover this target’s Hermes-analysis step at the time. One device and OS do not establish compatibility with all firmware or Windows versions.

## What to learn

Distinguish connection from printing and record the exact step handled by each tool.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> used to analyse the Android app.

## Original sources

- [Primary source / pinned evidence](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md)
- [Project / demo](https://github.com/bigtower17/picoprint)
- [Additional source 1](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/doc/lx-d02-app-check.md)
- [Additional source 2](https://github.com/morluto/rea/discussions/4152)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
