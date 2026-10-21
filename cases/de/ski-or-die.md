# Ski or Die: Neuaufbau von Snowball War in Rust

[← Zurück zu allen Fällen](../../README.de.md) · Spiele

[English](../ski-or-die.md) · [简体中文](../zh-CN/ski-or-die.md) · [繁體中文](../zh-TW/ski-or-die.md) · [日本語](../ja/ski-or-die.md) · [한국어](../ko/ski-or-die.md) · [Español](../es/ski-or-die.md) · [Français](../fr/ski-or-die.md) · [Deutsch](../de/ski-or-die.md) · [Português (Brasil)](../pt-BR/ski-or-die.md) · [Русский](../ru/ski-or-die.md) · [العربية](../ar/ski-or-die.md) · [हिन्दी](../hi/ski-or-die.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** tuunanet
- **Datum der Quellenüberprüfung:** 2026-10-16
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Snowball War Minispiel aus der DOS-Edition von Ski or Die

## Die Frage

Wie können Wurf-, Kollisions-, Spawn- und Punkteregeln aus einem DOS-Spiel wiederhergestellt werden?

## Was REA getan hat

REA CLI und der Ghidra 16-bit-Adapter prüfen ein entpacktes MZ-Ladebild. Vom Aufrufer deklarierte Code-Seeds und trace/function/search-Abfragen untersuchen die Module.

## Vom Autor gemeldete Ergebnisse

Der Autor veröffentlicht eine spielbare Rust + SDL2-Rekonstruktion, Verhaltensspezifikationen, Hinweise zum Reverse Engineering und Tools zur Asset-Extraktion.

## Einschränkungen und unbestätigte Ansprüche

Nur Snowball War wird rekonstruiert. Es gibt keine Audiowiedergabe oder einen direkten Vergleich mit dem laufenden DOS-Original; Bildrate und PRNG-Verhalten sind Näherungswerte. Die Assets müssen aus der eigenen Spielkopie des Lesers stammen.

## Was zu lernen ist

Schreiben Sie vor dem Umschreiben adressgestützte Verhaltensspezifikationen und kennzeichnen Sie jede Annäherung.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Every analysis call therefore ran through the REA CLI

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md)
- [Projekt / Demo](https://github.com/tuunanet/rea-ski-or-die-reconstruction)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
