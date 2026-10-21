# PicoPrint: Anschluss eines mobilen Thermodruckers an den Windows-Drucker

[← Zurück zu allen Fällen](../../README.de.md) · Hardware und Kompatibilität

[English](../picoprint.md) · [简体中文](../zh-CN/picoprint.md) · [繁體中文](../zh-TW/picoprint.md) · [日本語](../ja/picoprint.md) · [한국어](../ko/picoprint.md) · [Español](../es/picoprint.md) · [Français](../fr/picoprint.md) · [Deutsch](../de/picoprint.md) · [Português (Brasil)](../pt-BR/picoprint.md) · [Русский](../ru/picoprint.md) · [العربية](../ar/picoprint.md) · [हिन्दी](../hi/picoprint.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** bigtower17
- **Datum der Quellenüberprüfung:** 2026-10-19
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** LX-D02 Bluetooth-Thermodrucker und Funny Print React Native Android-App

## Die Frage

Wie können Handshake-Unterschiede festgestellt werden, wenn ein Treiber eine Verbindung herstellt, aber nicht druckt?

## Was REA getan hat

In der REA-Diskussion #4152 sagt der Autor, dass REA 6.5.0 Ärzte, ADB-Geräteprüfungen und den Android-Ermittlungseingangspunkt bereitgestellt hat. Tatsächliche Hermes-Bytecode-Dekompilierung verwendet hermes-dec; Protokollinferenz und Verkehrsvergleich waren keine reine REA-Arbeit.

## Vom Autor gemeldete Ergebnisse

Der Autor veröffentlicht einen auf Thermoprint basierenden Go-Druckdienst und Protokollnotizen, in denen er über das Strg+P-Drucken von Text, Bildern und Dokumenten auf Windows 11 mit einem echten LX-D02 und einen Upstream-Handshake-Fix berichtet.

## Einschränkungen und unbestätigte Ansprüche

Frühes Projekt ohne Ein-Klick-Installationsprogramm, Tray-Status oder automatische Wiederverbindung. In der Diskussion wird ausdrücklich darauf hingewiesen, dass REA den damaligen Hermes-Analyseschritt dieses Ziels nicht abdeckte. Ein Gerät und ein Betriebssystem stellen nicht die Kompatibilität mit allen Firmware- oder Windows-Versionen her.

## Was zu lernen ist

Unterscheiden Sie zwischen Verbindung und Druck und zeichnen Sie den genauen Schritt auf, den jedes Werkzeug ausführt.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> used to analyse the Android app.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md)
- [Projekt / Demo](https://github.com/bigtower17/picoprint)
- [Zusätzliche Quelle 1](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/doc/lx-d02-app-check.md)
- [Zusätzliche Quelle 2](https://github.com/morluto/rea/discussions/4152)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
