# iCSee localmod: Verfolgen von Kamerabefehlen unter Beibehaltung der Standardtreiber

[← Zurück zu allen Fällen](../../README.de.md) · Hardware und Kompatibilität

[English](../icsee-localmod.md) · [简体中文](../zh-CN/icsee-localmod.md) · [繁體中文](../zh-TW/icsee-localmod.md) · [日本語](../ja/icsee-localmod.md) · [한국어](../ko/icsee-localmod.md) · [Español](../es/icsee-localmod.md) · [Français](../fr/icsee-localmod.md) · [Deutsch](../de/icsee-localmod.md) · [Português (Brasil)](../pt-BR/icsee-localmod.md) · [Русский](../ru/icsee-localmod.md) · [العربية](../ar/icsee-localmod.md) · [हिन्दी](../hi/icsee-localmod.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** Vittuu
- **Datum der Quellenüberprüfung:** 2026-11-03
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Eine XM530V200/IPG-X2-WQ-BL-Kamera und ihre Standardanwendung Sofia

## Die Frage

Wie kann die native Befehlsforschung eine lokale Kamerasteuerung ermöglichen und gleichzeitig funktionierende Treiber und SD-Aufzeichnung erhalten?

## Was REA getan hat

REA 6.8.0 und Ghidra verfolgten Sofia-Befehlszeichenfolgen und Querverweise zu Beleuchtungs- und PTZ-Handlern. Der veröffentlichte Workflow zeichnet binärspezifische Anker auf; Protokollreaktionen und körperliches Verhalten wurden separat validiert.

## Vom Autor gemeldete Ergebnisse

Der Autor veröffentlicht ein lokales C-panel/API-, Quell- und Home Assistant-Beispiel. Der Besitzer meldet physische PTZ- und weiße LED-Prüfungen, dekodiertes audio/video, Boot-Persistenz und fortgesetzte native WFS-Aufzeichnung nach unabhängigen Neustarts. Ein separater öffentlicher simulierter Backend-Datensatz listet die bestandenen Tests von 22 auf und sagt ausdrücklich „hardware_tested=false“.

## Einschränkungen und unbestätigte Ansprüche

Die vollständigen Firmware-, Dekompilierungs- und privaten Evidence-Bundles werden nicht veröffentlicht. Bei den Hardware-Ergebnissen handelt es sich um Besitzerberichte für eine Einheit. Simulierte Tests validieren weder die Firmware-Installation noch das physische Verhalten. Dies ist eine Erweiterung der Standard-Firmware ohne universelles Image, vollständige Gegensprechanlage oder gemessene Latenzverbesserung. Der Route-Removal-Guard ist keine Firewall; In diesem Katalog wurde kein Gerät getestet.

## Was zu lernen ist

Verfolgen Sie einen begrenzten Befehl, überprüfen Sie authentifizierte Antworten und überprüfen Sie dann die physische Aktion und Persistenz als separate Schritte.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> REA/Ghidra supported analysis; Codex assisted with development and writing.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/REA-GHIDRA-WORKFLOW.md)
- [Projekt / Demo](https://github.com/Vittuu/icsee-localmod)
- [Zusätzliche Quelle 1](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/README.md)
- [Zusätzliche Quelle 2](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/VALIDATION.md)
- [Zusätzliche Quelle 3](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/simulation-validation.json)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
