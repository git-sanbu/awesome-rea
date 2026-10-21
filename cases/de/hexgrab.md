# hexgrab: Untersuchung des Farbwählers PowerToys

[← Zurück zu allen Fällen](../../README.de.md) · Anwendungen

[English](../hexgrab.md) · [简体中文](../zh-CN/hexgrab.md) · [繁體中文](../zh-TW/hexgrab.md) · [日本語](../ja/hexgrab.md) · [한국어](../ko/hexgrab.md) · [Español](../es/hexgrab.md) · [Français](../fr/hexgrab.md) · [Deutsch](../de/hexgrab.md) · [Português (Brasil)](../pt-BR/hexgrab.md) · [Русский](../ru/hexgrab.md) · [العربية](../ar/hexgrab.md) · [हिन्दी](../hi/hexgrab.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** iammukeshm
- **Datum der Quellenüberprüfung:** 2026-10-16
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Farbauswahl-Binärdateien, die mit Microsoft PowerToys vertrieben werden

## Die Frage

Wie funktionieren globale Hotkeys, Pixelsampling und die Zwischenablage?

## Was REA getan hat

Der Autor analysiert veröffentlichte Binärdateien mit REA, prüft jedes Ergebnis anhand öffentlicher Quellen und erstellt mit .NET 10 / WPF einen kleineren unabhängigen Farbwähler.

## Vom Autor gemeldete Ergebnisse

Öffentliche Quelle und docs/rea-findings.md werden bereitgestellt. Der Autor berichtet, dass die Ergebnisse von 8 oder 9 völlig korrekt waren.

## Einschränkungen und unbestätigte Ansprüche

Getestet nur auf einem Monitor mit 125%-Skalierung; Das Verhalten bei mehreren Monitoren mit gemischten DPI-Werten wurde nicht auf echter Hardware getestet. Das 8/9-Ergebnis ist die Überprüfung dieser Untersuchung durch den Autor und keine allgemeine REA-Genauigkeitsrate.

## Was zu lernen ist

Üben Sie an Software mit öffentlichen Quellen, damit die Toolergebnisse überprüft werden können.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> to study how the Color Picker in Microsoft PowerToys works from its shipped binaries

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md)
- [Projekt / Demo](https://github.com/iammukeshm/hexgrab)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
