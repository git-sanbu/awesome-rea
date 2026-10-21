# ReaFuse: Kombinieren zweier Bibliotheken nach Untersuchung ihres Verhaltens

[← Zurück zu allen Fällen](../../README.de.md) · Lernen und Reproduktion

[English](../reafuse.md) · [简体中文](../zh-CN/reafuse.md) · [繁體中文](../zh-TW/reafuse.md) · [日本語](../ja/reafuse.md) · [한국어](../ko/reafuse.md) · [Español](../es/reafuse.md) · [Français](../fr/reafuse.md) · [Deutsch](../de/reafuse.md) · [Português (Brasil)](../pt-BR/reafuse.md) · [Русский](../ru/reafuse.md) · [العربية](../ar/reafuse.md) · [हिन्दी](../hi/reafuse.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** sickpyramid
- **Datum der Quellenüberprüfung:** 2026-10-19
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Zwei Paare von Open-Source-Bibliotheken JavaScript: ms + Pretty-Bytes und Dequal + Klona

## Die Frage

Wie können zwei Projekte zu Verhaltensspezifikationen und dann zu einem neuen kombinierten Tool werden?

## Was REA getan hat

Die statische Analyse REA 6.4.0 JavaScript liest die beiden Eingaben. README-Dateien und -Tests helfen bei der Erstellung von Verhaltensspezifikationen. Das Modell schlägt separat Kombinationen vor, schreibt Akzeptanzverträge und neuen Code und führt dann die Tests und Ähnlichkeitsscans des Autors durch.

## Vom Autor gemeldete Ergebnisse

Der Autor veröffentlicht ratewise (Übertragungsrate und ETA) und objdelta (strukturelles diff/patch), Berichte und Evidence. Zu den gemeldeten Vertragsergebnissen gehören 18/18 und 17/17 sowie 7/7- und 6/6-Tests für die neuen Werkzeuge. Beide Beispiele gelten als ein Projektfall.

## Einschränkungen und unbestätigte Ansprüche

Es wurden nur zwei öffentliche JavaScript-Beispiele überprüft; Das Projekt ist v0.1 Alpha. Derselbe Arbeitsablauf erzeugt Spezifikationen und Implementierungen. Die Reinraumkennzeichnung des Autors stellt keinen eigenständigen Rechtsschluss dar. Ähnlichkeitsscans und bestandene Tests stellen keine allgemeine Originalität oder vollständige Äquivalenz dar. Dieser Katalog hat sie nicht erneut ausgeführt.

## Was zu lernen ist

Verbinden Sie die Analyse mit der Implementierung durch Verhaltensspezifikationen und ordnen Sie Tests entweder dem Eingabeverhalten oder der neuen Kombination zu.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Every donor goes through REA's static JavaScript analysis

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md)
- [Projekt / Demo](https://github.com/sickpyramid/ReaFuse)
- [Zusätzliche Quelle 1](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/ratewise/REPORT.md)
- [Zusätzliche Quelle 2](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/objdelta/REPORT.md)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
