# Open Scrantic: Neuerstellung der Johnny Castaway-Bildschirmschoner-Engine in Rust

[← Zurück zu allen Fällen](../../README.de.md) · Spiele

[English](../open-scrantic.md) · [简体中文](../zh-CN/open-scrantic.md) · [繁體中文](../zh-TW/open-scrantic.md) · [日本語](../ja/open-scrantic.md) · [한국어](../ko/open-scrantic.md) · [Español](../es/open-scrantic.md) · [Français](../fr/open-scrantic.md) · [Deutsch](../de/open-scrantic.md) · [Português (Brasil)](../pt-BR/open-scrantic.md) · [Русский](../ru/open-scrantic.md) · [العربية](../ar/open-scrantic.md) · [हिन्दी](../hi/open-scrantic.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** glauberlima
- **Datum der Quellenüberprüfung:** 2026-10-26
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Screen Antics: Johnny Castaway (1992), Windows 3.1 SCRANTIC.SCR und passende Ressourcendateien

## Die Frage

Wie können der Skriptinterpreter, der Storyplan und das Zufallsverhalten eines 16-bit-Bildschirmschoners auf modernen Systemen ausgeführt werden?

## Was REA getan hat

Der Entwickler schreibt Claude Code ausdrücklich die Verantwortung für die Disassemblierung und Dekompilierung von SCRANTIC.SCR, die Wiederherstellung von Ressourcenformaten und Skriptsemantik sowie die Erstellung der Rust-Implementierung und -Dokumentation von REA zu.

## Vom Autor gemeldete Ergebnisse

Die öffentliche Rust-Engine implementiert das Laden von Ressourcen, die Ausführung von TTM/ADS-Skripten, den Story-Fortschritt, das Timing und den ursprünglichen Zufallszahlengenerator. ENGINE.md zeichnet wiederhergestellte Regeln und absichtliche Unterschiede auf; Der Autor stellt die Veröffentlichungspfade Windows, macOS und Linux bereit.

## Einschränkungen und unbestätigte Ansprüche

Die Engine benötigt die eigenen passenden Originaldateien des Benutzers und lehnt andere ausführbare Builds ab. Vollbild-Neuzeichnung, optionale image/audio-Verarbeitung und Einstellungen weichen vom Original ab. Plattformübergreifendes Verhalten und Äquivalenz wurden hier nicht unabhängig getestet; Rohe REA-Sitzungen wurden in den überprüften Dateien nicht gefunden.

## Was zu lernen ist

Halten Sie den ursprünglichen Asset-Eigentum vom Engine-Code getrennt, behalten Sie Rechen- und Planungsregeln bei und dokumentieren Sie absichtliche Kompatibilitätsunterschiede.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Together they were used to disassemble and decompile the original
`SCRANTIC.SCR`, recover the resource formats and script semantics, and write the Rust code, tests and
documentation.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md)
- [Projekt / Demo](https://github.com/glauberlima/open-scrantic)
- [Zusätzliche Quelle 1](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/docs/ENGINE.md)
- [Zusätzliche Quelle 2](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/rng.rs)
- [Zusätzliche Quelle 3](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/config.rs)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
