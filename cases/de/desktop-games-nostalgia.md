# Desktop Games: Portierung eines Desktop-Spielzeugs auf macOS und den Browser

[← Zurück zu allen Fällen](../../README.de.md) · Spiele

[English](../desktop-games-nostalgia.md) · [简体中文](../zh-CN/desktop-games-nostalgia.md) · [繁體中文](../zh-TW/desktop-games-nostalgia.md) · [日本語](../ja/desktop-games-nostalgia.md) · [한국어](../ko/desktop-games-nostalgia.md) · [Español](../es/desktop-games-nostalgia.md) · [Français](../fr/desktop-games-nostalgia.md) · [Deutsch](../de/desktop-games-nostalgia.md) · [Português (Brasil)](../pt-BR/desktop-games-nostalgia.md) · [Русский](../ru/desktop-games-nostalgia.md) · [العربية](../ar/desktop-games-nostalgia.md) · [हिन्दी](../hi/desktop-games-nostalgia.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** ucodia
- **Datum der Quellenüberprüfung:** 2026-10-16
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Gemtrees 2000 Desktop-Spiele/Stressreduzierer Windows-Programm

## Die Frage

Wie können der Peter-Interpreter, der Programmbaum, die Interaktionen und die Assets verstanden und portiert werden?

## Was REA getan hat

Der Autor verwendet Claude Code, REA und Ghidra. REA untersucht Bildkomprimierung, Ressourcenlayout, Timing, Sprite-Bewegung, Ton und Koordinaten im Interpreter; Python-Tools verarbeiten den Programmbaum und die Assets.

## Vom Autor gemeldete Ergebnisse

Das öffentliche Repository umfasst eine Swift macOS-Version, eine Browserversion, einen dekompilierten Programmbaum und Asset-Verarbeitungsskripts.

## Einschränkungen und unbestätigte Ansprüche

Der Autor verwendet Echtfarben anstelle der Originalpalette und ändert die Schattenwiedergabe. Durch die Aufnahme werden keine vollständigen Kompatibilitäts- oder Weiterverbreitungsrechte für Vermögenswerte Dritter überprüft.

## Was zu lernen ist

Unterscheiden Sie bei Software mit eingebettetem Interpreter zwischen Interpreter, Programmbaum und Assets.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> The interpreter was decompiled with REA

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md)
- [Projekt / Demo](https://github.com/ucodia/desktop-games-nostalgia)
- [Zusätzliche Quelle 1](https://ucodia.github.io/desktop-games-nostalgia/)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
