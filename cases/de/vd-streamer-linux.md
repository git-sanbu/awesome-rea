# Virtual Desktop Streamer: ein Linux-Port über eine Ersatzplattformschicht

[← Zurück zu allen Fällen](../../README.de.md) · Hardware und Kompatibilität

[English](../vd-streamer-linux.md) · [简体中文](../zh-CN/vd-streamer-linux.md) · [繁體中文](../zh-TW/vd-streamer-linux.md) · [日本語](../ja/vd-streamer-linux.md) · [한국어](../ko/vd-streamer-linux.md) · [Español](../es/vd-streamer-linux.md) · [Français](../fr/vd-streamer-linux.md) · [Deutsch](../de/vd-streamer-linux.md) · [Português (Brasil)](../pt-BR/vd-streamer-linux.md) · [Русский](../ru/vd-streamer-linux.md) · [العربية](../ar/vd-streamer-linux.md) · [हिन्दी](../hi/vd-streamer-linux.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** cudanexus
- **Datum der Quellenüberprüfung:** 2026-10-16
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Offizielle Installationspakete Virtual Desktop macOS und Windows

## Die Frage

Wie können Erfassung, Kodierung, Audio und Eingabe nach Linux verschoben werden, während die Protokollbibliothek erhalten bleibt?

## Was REA getan hat

Der Autor gibt an, dass Claude Code und REA beide Pakete analysieren. Eine vom Lesegerät bereitgestellte macOS-Protokollbibliothek wird wiederverwendet, während die Linux-Plattformschicht neu geschrieben wird.

## Vom Autor gemeldete Ergebnisse

Der öffentliche Linux-Port enthält Quellcode, Build-Anweisungen und simulierte Headset-Tests mit PipeWire/X11, GStreamer und uinput.

## Einschränkungen und unbestätigte Ansprüche

Es wurden keine echten Headset-, WLAN- oder GPU-Encoder-Tests durchgeführt. Die SteamVR/OpenXR-Spielfunktionen des Windows-Streamers werden nicht unterstützt. Die Abhängigkeit von der Protokollbibliothek des Anbieters bedeutet, dass es sich hierbei nicht um eine völlig unabhängige Protokollumschreibung handelt.

## Was zu lernen ist

Konzentrieren Sie sich bei der Kompatibilitätsarbeit auf Plattformgrenzen und unterscheiden Sie simulierte Gerätetests von echten Hardware-Akzeptanztests.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> This port was built by Claude Code (Claude Opus) with the REA reverse-engineering tools

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md)
- [Projekt / Demo](https://github.com/cudanexus/vd-streamer-linux)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
