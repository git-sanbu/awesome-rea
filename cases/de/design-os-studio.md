# DESIGN:OS Studio: ein unabhängiges Desktop-Studio, das Figma-.fig-Dateien liest und schreibt

[← Zurück zu allen Fällen](../../README.de.md) · Anwendungen

[English](../design-os-studio.md) · [简体中文](../zh-CN/design-os-studio.md) · [繁體中文](../zh-TW/design-os-studio.md) · [日本語](../ja/design-os-studio.md) · [한국어](../ko/design-os-studio.md) · [Español](../es/design-os-studio.md) · [Français](../fr/design-os-studio.md) · [Deutsch](../de/design-os-studio.md) · [Português (Brasil)](../pt-BR/design-os-studio.md) · [Русский](../ru/design-os-studio.md) · [العربية](../ar/design-os-studio.md) · [हिन्दी](../hi/design-os-studio.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** jangtrinh
- **Datum der Quellenüberprüfung:** 2026-11-10
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Figma Desktop und das Figma-.fig-Containerformat (fig-kiwi, schreibt Version 106)

## Die Frage

Wie lassen sich Figma-.fig-Container lesen und schreiben und das Editorverhalten in einem unabhängigen Desktop-Studio neu implementieren?

## Was REA getan hat

Öffentliche Projektspezifikationen nennen morluto/rea 6.7.0 (`npx -y rea-agents`) als Werkzeug zur Reverse-Analyse von Figma-Feldern und halten fest, dass analyze-javascript-application auf extrahiertem Editor-JavaScript lief. Dieselben Notizen sagen, dass wasm-Pfade nicht verfügbar waren (WABT und Ghidra waren nicht installiert), daher wurde das Kiwi-Schema mit einem lokalen Leser decodiert. Eingecheckte Berichte enthalten außerdem rea-CLI-Ausgaben, darunter abgeschlossene inspect-macho- und analyze-javascript-application-Läufe sowie einige fehlgeschlagene Aufrufe. Die Produkt-README erwähnt REA nicht.

## Vom Autor gemeldete Ergebnisse

DESIGN:OS Studio ist ein veröffentlichtes Desktop-Studio (geprüft v0.7.11), das Figma-.fig-Container liest und Containerversion 106 schreibt, Editorverhalten lokal neu implementiert und einen stdio-MCP-Server mit 39 Werkzeugen sowie mehrsprachige Codegenerierung mitliefert. Die README nennt mehr als 6.000 macOS-CI-Tests und designos-fig-Roundtrip-Tests. Der Maintainer erklärt, dass REA für diese Figma-Arbeit verwendet wurde. Dieser Katalog hat die öffentlichen Spezifikationen, die eingecheckte rea-Ausgabe und die README geprüft; das Studio wurde nicht installiert und rea nicht erneut ausgeführt.

## Einschränkungen und unbestätigte Ansprüche

Die Produkt-README nennt REA nicht. Einige aufgezeichnete rea-Läufe schlugen fehl (unbekannter Befehl oder ein nicht konfigurierter Native-Analyse-Anbieter). Vollständige Sitzungsentwürfe, die in anderen Notizen genannt werden, liegen außerhalb des Repositories. Das bekannte Problem #834 bleibt offen: Beim Speichern einer .fig geht die Nummerierung von Listen verloren, und vererbte oder an Variablen gebundene Füllungen auf Instanzen werden als feste Werte geschrieben. Die Lizenz ist PolyForm Shield 1.0.0 (source-available, keine Open-Source-Lizenz). Dieser Katalog hat die .fig-Kompatibilität nicht unabhängig reproduziert und die Testsuite nicht erneut ausgeführt.

## Was zu lernen ist

Dokumentierte REA-Nutzung kann in Projektspezifikationen und eingecheckter CLI-Evidenz stehen, auch wenn die Produkt-README schweigt, und ein gemischter Ablauf kann weiterhin eine lokale Rückfallebene brauchen, wenn REAs wasm-Pfade nicht verfügbar sind.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [Projekt / Demo](https://github.com/jangtrinh/design-os-studio)
- [Zusätzliche Quelle 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [Zusätzliche Quelle 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [Zusätzliche Quelle 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
