# App X-Ray: REA-Ergebnisse in gemeinsam nutzbare App-Berichte umwandeln

[← Zurück zu allen Fällen](../../README.de.md) · Tools und Integrationen

[English](../app-xray.md) · [简体中文](../zh-CN/app-xray.md) · [繁體中文](../zh-TW/app-xray.md) · [日本語](../ja/app-xray.md) · [한국어](../ko/app-xray.md) · [Español](../es/app-xray.md) · [Français](../fr/app-xray.md) · [Deutsch](../de/app-xray.md) · [Português (Brasil)](../pt-BR/app-xray.md) · [Русский](../ru/app-xray.md) · [العربية](../ar/app-xray.md) · [हिन्दी](../hi/app-xray.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** Eliot5566
- **Datum der Quellenüberprüfung:** 2026-11-03
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Open-Source-Anwendungsquelle Electron mit zusätzlichen APK-, nativen Binär- und Modelldateipfaden

## Die Frage

Wie können aus statischen REA-Beweisen ein lesbarer Komponentenbericht und ein Unterschied zwischen Versionen werden?

## Was REA getan hat

Die Integration ruft angeheftete REA 6.7.0 CLI-Vorgänge auf und analysiert JSON Evidence. Bei JavaScript-Analysestapeln bleiben Dateien unter demselben Stammverzeichnis, um die Importauflösung beizubehalten. Die Inspektion der Electron-Sicherungen ist ein separater REA-Vorgang.

## Vom Autor gemeldete Ergebnisse

Das Projekt veröffentlicht Berichtserstellung, Regeln, CI-Unterschiede und eine Galerie. Im datierten week-5-Bericht heißt es, dass 20 Electron-Apps gescannt und Versionen für alle 20 gefunden wurden, wobei 18-Scans für diesen Container weniger als 60 Sekunden dauern. REA-Bench stellt 54-Fragen bereit, die aus Berichten im gesamten 20-app-Korpus abgeleitet sind.

## Einschränkungen und unbestätigte Ansprüche

Hierbei handelt es sich um veraltete, vom Autor gemeldete Scans, nicht um aktuelle Schwachstellen- oder Laufzeitnetzwerkergebnisse. Regeln können von Helfern erstellte Fenster, berechnete Kanäle und Absendervalidierung übersehen; Statische Adressen beweisen keinen Datenverkehr. REA-Bench misst die Übereinstimmung mit App X-Ray-Berichten und nicht mit der unabhängigen Grundwahrheit und weist selbst keinen Tool-fähigen Agentenvorteil nach. Dieser Katalog hat die Scans nicht erneut ausgeführt.

## Was zu lernen ist

Verknüpfen Sie Berichtsansprüche mit der Quelle, behalten Sie Scan-Commits und -Daten bei und behandeln Sie statische Regeln und generierte Benchmark-Antworten als fehlbar.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Runs one REA CLI command with --json and returns the parsed Evidence record.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/core/rea.ts)
- [Projekt / Demo](https://github.com/Eliot5566/app-xray)
- [Zusätzliche Quelle 1](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/README.md)
- [Zusätzliche Quelle 2](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/results-2026-10-23-week5.md)
- [Zusätzliche Quelle 3](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/rea-bench/README.md)
- [Zusätzliche Quelle 4](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/rules/ipc.ts)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
