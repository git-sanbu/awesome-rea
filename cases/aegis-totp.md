# Aegis: finding the Android TOTP algorithm

[← Back to all cases](../README.md) · Official showcases

[English](aegis-totp.md) · [简体中文](zh-CN/aegis-totp.md) · [繁體中文](zh-TW/aegis-totp.md) · [日本語](ja/aegis-totp.md) · [한국어](ko/aegis-totp.md) · [Español](es/aegis-totp.md) · [Français](fr/aegis-totp.md) · [Deutsch](de/aegis-totp.md) · [Português (Brasil)](pt-BR/aegis-totp.md) · [Русский](ru/aegis-totp.md) · [العربية](ar/aegis-totp.md) · [हिन्दी](hi/aegis-totp.md)

- **Author / attribution:** REA showcase team; original project authors credited in sources
- **Source review date:** 2026-10-16
- **Review status:** Sources reviewed; author tests not independently rerun.
- **Target:** Aegis Authenticator 3.4.3 Android APK

## The question

How is a six-digit login code calculated every 30 seconds?

## What REA did

REA Android analysis locates generation, display and copy methods. The author reads the HOTP/TOTP calculation and builds a browser demo with an adjustable clock.

## Author-reported results

The official page reports 133 cases comparing the extracted method with an independent implementation, plus the six SHA-1 reference vectors from RFC 6238.

## Limitations and unverified claims

The scope is code generation, not a reconstruction of the vault, encrypted storage or the whole app. This catalog did not rerun the cases.

## What to learn

Choose a small feature that can be verified independently and constrain its implementation with public standard test vectors.

## REA usage evidence in the source

Excerpt formatting is simplified. Read the original source for full context.

> Inspected with REA 6.1.0 on 9 October 2026.

## Original sources

- [Primary source / pinned evidence](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html)
- [Project / demo](https://rea.tools/showcase/aegis/)
- [Additional source 1](https://github.com/beemdevelopment/Aegis)

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here.

<!-- Generated from catalog data; edit the data files to update this note. -->
