# REA Studio: Präsentation der MCP-Tools und aufgezeichnetes Evidence in einer lokalen Web-Benutzeroberfläche

[← Zurück zu allen Fällen](../../README.de.md) · Tools und Integrationen

[English](../rea-studio.md) · [简体中文](../zh-CN/rea-studio.md) · [繁體中文](../zh-TW/rea-studio.md) · [日本語](../ja/rea-studio.md) · [한국어](../ko/rea-studio.md) · [Español](../es/rea-studio.md) · [Français](../fr/rea-studio.md) · [Deutsch](../de/rea-studio.md) · [Português (Brasil)](../pt-BR/rea-studio.md) · [Русский](../ru/rea-studio.md) · [العربية](../ar/rea-studio.md) · [हिन्दी](../hi/rea-studio.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** theyishaik-lab
- **Datum der Quellenüberprüfung:** 2026-11-03
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** REA MCP Tool-Erkennung, schemagenerierte Formulare und kleine C-, JavaScript- und Python-Beispiele

## Die Frage

Wie kann eine lokale Schnittstelle installierte REA-Tools offenlegen und deren Beweise und Einschränkungen lesbar machen?

## Was REA getan hat

Das Backend startet REA über stdio MCP, paginiert tools/list und leitet tools/call mit Fortschritts- und Abbruchsignalen weiter. Ein Aufzeichnungsskript ruft REA für winzige Beispielartefakte auf und speichert die Ergebnisse für einen separaten statischen Demo-Build.

## Vom Autor gemeldete Ergebnisse

Die öffentliche Quelle umfasst eine lokale Weboberfläche, schemagesteuerte Eingaben, einen Verlauf und eine Evidence-Ansicht. Eingecheckte Demo-Artefakte identifizieren REA 6.8.0 und stellen einen 229-tool-Katalog sowie aufgezeichnete 9-Beispielläufe bereit (8 abgeschlossen, 1-Fehler); Nicht unterstützte Demo-Aktionen geben einen expliziten, nicht aufgezeichneten Fehler zurück.

## Einschränkungen und unbestätigte Ansprüche

Die gehostete Demo spielt gespeicherte Antworten und simulierte Fortschritte ab; Uploads bleiben im Browser und werden nicht analysiert. Bei den Aufnahmen handelt es sich um vom Autor veröffentlichte, keine unabhängigen Wiederholungen. Die lokale Verwendung kann Tools für Hostdateien aufrufen und hängt von konfigurierten Anbietern ab; Der Katalog hat das Backend nicht installiert oder getestet oder eine Sicherheitsüberprüfung durchgeführt.

## Was zu lernen ist

Generieren Sie Formulare aus dem Live-Tool-Schema, behalten Sie Einschränkungen in der Ergebnisansicht bei und unterscheiden Sie aufgezeichnete Demos klar von Live-Analysen.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Keeps one MCP stdio session with REA alive and exposes its tool catalog.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/server/rea.js)
- [Projekt / Demo](https://github.com/theyishaik-lab/rea-studio)
- [Zusätzliche Quelle 1](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/README.md)
- [Zusätzliche Quelle 2](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/scripts/record-demo.mjs)
- [Zusätzliche Quelle 3](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/demo/recordings.json)
- [Zusätzliche Quelle 4](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/api/demo.js)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
