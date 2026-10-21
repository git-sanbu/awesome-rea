# REA on REA: Untersuchung des Tools und Testen von Vorhersagen

[← Zurück zu allen Fällen](../../README.de.md) · Analyse und Bewertung

[English](../rea-on-rea.md) · [简体中文](../zh-CN/rea-on-rea.md) · [繁體中文](../zh-TW/rea-on-rea.md) · [日本語](../ja/rea-on-rea.md) · [한국어](../ko/rea-on-rea.md) · [Español](../es/rea-on-rea.md) · [Français](../fr/rea-on-rea.md) · [Deutsch](../de/rea-on-rea.md) · [Português (Brasil)](../pt-BR/rea-on-rea.md) · [Русский](../ru/rea-on-rea.md) · [العربية](../ar/rea-on-rea.md) · [हिन्दी](../hi/rea-on-rea.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** az9713
- **Datum der Quellenüberprüfung:** 2026-10-16
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Installiertes Reagenzien-Paket 6.3.0

## Die Frage

Wie wählt REA einen nativen Analyseanbieter aus und erkennt einen nicht verfügbaren Anbieter?

## Was REA getan hat

REA analysiert statisch fünf seiner eigenen Verzeichnisse. Der Agent schreibt falsifizierbare Vorhersagen, führt einen Arzt durch, liest dann die Antworten der Quelle und bewertet seine Vorhersagen.

## Vom Autor gemeldete Ergebnisse

Der Autor veröffentlicht den Prozess und die Testbelege: Alle vier Antworten waren nur teilweise richtig und drei von acht vorhergesagten Ghidra-Check-Ergebnissen waren falsch.

## Einschränkungen und unbestätigte Ansprüche

Eine einzige Selbsteinschätzung; Arzttests sind keine open_binary-Tests. Auch das installierte Paket und der Quellprüfpunkt unterscheiden sich.

## Was zu lernen ist

Verwandeln Sie plausible Erklärungen in überprüfbare Vorhersagen und veröffentlichen Sie Fehlschläge.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> REA analyzed 5 folders of the installed rea-agents 6.3.0 package with analyze_javascript_application.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md)
- [Projekt / Demo](https://github.com/az9713/REA-demo)
- [Zusätzliche Quelle 1](https://az9713.github.io/REA-demo/rea-on-rea-receipt.html)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
