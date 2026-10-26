# Open Claude UI: documenting desktop interactions and publishing reusable UI components

[← Back to all cases](../README.md) · Applications

[English](open-claude-ui.md) · [简体中文](zh-CN/open-claude-ui.md) · [繁體中文](zh-TW/open-claude-ui.md) · [日本語](ja/open-claude-ui.md) · [한국어](ko/open-claude-ui.md) · [Español](es/open-claude-ui.md) · [Français](fr/open-claude-ui.md) · [Deutsch](de/open-claude-ui.md) · [Português (Brasil)](pt-BR/open-claude-ui.md) · [Русский](ru/open-claude-ui.md) · [العربية](ar/open-claude-ui.md) · [हिन्दी](hi/open-claude-ui.md)

- **Author / attribution:** Caho1
- **Source review date:** 2026-10-26
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Claude Desktop macOS package; author-reported @ant/desktop 2.37337.1 baseline and bundled web UI

## The question

How can input composition, scrolling and desktop interaction rules inform reusable interface components?

## What REA did

The author attributes ASAR, JavaScript AST and CSS investigation to REA 6.5.0. The interaction chapter links bundled-code excerpts to input guards and scrolling rules; separate TypeScript examples implement those behaviors.

## Author-reported results

The repository publishes versioned design notes, a component storybook, CSS tokens and implementation examples, including composition-state checks and a post-composition Enter guard in RichComposerWithMentions.tsx.

## Limitations and unverified claims

This is a UI library and author-reported teardown, not a complete Claude client or model service. Raw REA session records and independent behavioral or visual equivalence tests were not found in the reviewed files. Version and fidelity claims remain the author’s.

## What to learn

Connect one interaction rule to its cited bundle location and implementation; distinguish design documentation from measured equivalence.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> 逆向还原自官方 Claude Desktop / Web 核心输入组件 (REA v6.5.0 取证):

## Original sources

- [Primary source / pinned evidence](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx)
- [Project / demo](https://github.com/Caho1/open-claude-ui)
- [Additional source 1](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/README.md)
- [Additional source 2](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v1/03-%E4%BC%9A%E8%AF%9D%E6%A0%B8%E5%BF%83%E6%B5%81%E4%B8%8E%E6%8C%87%E4%BB%A4%E4%BA%A4%E4%BA%92%E5%BC%95%E6%93%8E.md)
- [Additional source 3](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v2/01-%E7%BB%BC%E8%BF%B0%E4%B8%8E%E7%89%88%E6%9C%AC%E8%BE%B9%E7%95%8C.md)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
