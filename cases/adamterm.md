# AdamTerm: investigating Ghostty’s shell and building a terminal

[← Back to all cases](../README.md) · Applications

[English](adamterm.md) · [简体中文](zh-CN/adamterm.md) · [繁體中文](zh-TW/adamterm.md) · [日本語](ja/adamterm.md) · [한국어](ko/adamterm.md) · [Español](es/adamterm.md) · [Français](fr/adamterm.md) · [Deutsch](de/adamterm.md) · [Português (Brasil)](pt-BR/adamterm.md) · [Русский](ru/adamterm.md) · [العربية](ar/adamterm.md) · [हिन्दी](hi/adamterm.md)

- **Author / attribution:** AdamLinCodes
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Ghostty 1.3.1 macOS app bundle

## The question

How are the terminal core, native windows, menus and services divided?

## What REA did

REA inspects Mach-O, plists, signatures, Objective-C metadata, Interface Builder and dynamic-library resolution. This path did not use Hopper or Ghidra.

## Author-reported results

The author builds a smaller macOS terminal with AppKit, SwiftTerm and native tabs, and provides self-check commands.

## Limitations and unverified claims

It uses SwiftTerm rather than rebuilding Ghostty’s Zig core. Split panes, a search bar, configuration files and a quick terminal are not implemented.

## What to learn

Package metadata and interface resources can answer some architecture questions before deep decompilation.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> A minimal macOS terminal built by reverse-engineering Ghostty 1.3.1 with REA

## Original sources

- [Primary source / pinned evidence](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md)
- [Project / demo](https://github.com/AdamLinCodes/AdamTerm)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
