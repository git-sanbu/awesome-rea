# AdamTerm: Untersuchung der Shell von Ghostty und Aufbau eines Terminals

[← Zurück zu allen Fällen](../../README.de.md) · Anwendungen

[English](../adamterm.md) · [简体中文](../zh-CN/adamterm.md) · [繁體中文](../zh-TW/adamterm.md) · [日本語](../ja/adamterm.md) · [한국어](../ko/adamterm.md) · [Español](../es/adamterm.md) · [Français](../fr/adamterm.md) · [Deutsch](../de/adamterm.md) · [Português (Brasil)](../pt-BR/adamterm.md) · [Русский](../ru/adamterm.md) · [العربية](../ar/adamterm.md) · [हिन्दी](../hi/adamterm.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** AdamLinCodes
- **Datum der Quellenüberprüfung:** 2026-10-16
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Ghostty 1.3.1 macOS App-Bundle

## Die Frage

Wie sind der Terminalkern, native Fenster, Menüs und Dienste aufgeteilt?

## Was REA getan hat

REA prüft Mach-O, Plists, Signaturen, Objective-C-Metadaten, Interface Builder und die Auflösung dynamischer Bibliotheken. Dieser Pfad verwendet weder Hopper noch Ghidra.

## Vom Autor gemeldete Ergebnisse

Der Autor erstellt ein kleineres macOS-Terminal mit AppKit, SwiftTerm und nativen Registerkarten und stellt Selbstprüfungsbefehle bereit.

## Einschränkungen und unbestätigte Ansprüche

Es verwendet SwiftTerm, anstatt den Zig-Kern von Ghostty neu aufzubauen. Geteilte Fenster, eine Suchleiste, Konfigurationsdateien und ein Schnellterminal sind nicht implementiert.

## Was zu lernen ist

Paketmetadaten und Schnittstellenressourcen können einige Architekturfragen vor der umfassenden Dekompilierung beantworten.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> A minimal macOS terminal built by reverse-engineering Ghostty 1.3.1 with REA

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md)
- [Projekt / Demo](https://github.com/AdamLinCodes/AdamTerm)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
