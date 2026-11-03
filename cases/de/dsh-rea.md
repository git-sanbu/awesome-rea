# dsh-rea: Beibehaltung von MCP-Verträgen bei gleichzeitiger Offenlegung von Tools bei Bedarf

[← Zurück zu allen Fällen](../../README.de.md) · Tools und Integrationen

[English](../dsh-rea.md) · [简体中文](../zh-CN/dsh-rea.md) · [繁體中文](../zh-TW/dsh-rea.md) · [日本語](../ja/dsh-rea.md) · [한국어](../ko/dsh-rea.md) · [Español](../es/dsh-rea.md) · [Français](../fr/dsh-rea.md) · [Deutsch](../de/dsh-rea.md) · [Português (Brasil)](../pt-BR/dsh-rea.md) · [Русский](../ru/dsh-rea.md) · [العربية](../ar/dsh-rea.md) · [हिन्दी](../hi/dsh-rea.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** JeremyWangCY
- **Datum der Quellenüberprüfung:** 2026-11-03
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** REA 6.8.0 MCP Werkzeuge, Eingabeaufforderungen und Fähigkeiten in DeepSeek Harness

## Die Frage

Wie kann ein Adapter Upstream-Tool-Verträge beibehalten und gleichzeitig ungenutzte Schemata aus jeder Agent-Anfrage heraushalten?

## Was REA getan hat

Der Adapter startet die angeheftete ausführbare Upstream-Datei MCP über eine DSH-Brücke, teilt seine Verbindung für Eingabeaufforderungen und Vervollständigungen und verwendet Toolmasken pro Agent. Der Befehl /rea zeigt den Katalog und die Fertigkeit an; /rea off blendet sie wieder aus.

## Vom Autor gemeldete Ergebnisse

Der Autor veröffentlicht Adaptercode, Schemamessungen und einen begrenzten Differenzialbericht, der 229-Tools und Vergleiche deterministischer Aufrufe im nativen und PTC-Modus auflistet. Der gemessene Modelleingabekatalog umfasst 273,264 Bytes; Dies ist eine Schema-Nutzlastmessung, kein LLM-Token oder Kostenbenchmark.

## Einschränkungen und unbestätigte Ansprüche

Das Repository enthält einen bestandenen Vergleichsbericht und eine separate Dokumentation eines Windows integrity_mismatch-Fehlers im Verifizierungsbefehl. Die Katalogbetreuer haben keinen erfolgreichen Überprüfungslauf für Windows bestätigt. Übereinstimmende Werkzeugdefinitionen bedeuten nicht, dass alle Werkzeuge ausgeführt wurden. Der gemeldete Vergleich deckt weder native Engines, Live-Capture noch alle Anbieter ab und ermittelt keine gleichwertigen Sprachmodellantworten. Die Katalogbetreuer haben diese Tests nicht durchgeführt.

## Was zu lernen ist

Vergleichen Sie Schemata und vervollständigen Sie deterministische Ergebnisumschläge, bewahren Sie historische Bestandsaufzeichnungen auf und legen Sie aktuelle Fehler separat offen.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> REA is an exact npm dependency, not a reimplementation.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/README.md)
- [Projekt / Demo](https://github.com/JeremyWangCY/dsh-rea)
- [Zusätzliche Quelle 1](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/README.md)
- [Zusätzliche Quelle 2](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/index.js)
- [Zusätzliche Quelle 3](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/gate.js)
- [Zusätzliche Quelle 4](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/integration-report.json)
- [Zusätzliche Quelle 5](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/schema-measurement.json)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
