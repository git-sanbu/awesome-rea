# DX-Ball: Rekonstruktion des Stereo-Sound-Pannings

[← Zurück zu allen Fällen](../../README.de.md) · Offizielle Vitrinen

[English](../dx-ball.md) · [简体中文](../zh-CN/dx-ball.md) · [繁體中文](../zh-TW/dx-ball.md) · [日本語](../ja/dx-ball.md) · [한국어](../ko/dx-ball.md) · [Español](../es/dx-ball.md) · [Français](../fr/dx-ball.md) · [Deutsch](../de/dx-ball.md) · [Português (Brasil)](../pt-BR/dx-ball.md) · [Русский](../ru/dx-ball.md) · [العربية](../ar/dx-ball.md) · [हिन्दी](../hi/dx-ball.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** REA-Vorzeigeteam; Quellenangabe der ursprünglichen Projektautoren
- **Datum der Quellenüberprüfung:** 2026-10-16
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** DX-Ball 1.07 Windows i386 ausführbare Datei

## Die Frage

Wie wird eine Position auf dem Bildschirm zu einem Ton-Pan-Wert?

## Was REA getan hat

REA und Ghidra prüfen die Zielfunktion, Aufrufer, Anweisungen und Konstanten. Die Rekonstruktion des Betreuers erklärt einen x87-Ausdruck, der im dekompilierten Pseudocode weggelassen wurde.

## Vom Autor gemeldete Ergebnisse

Die Quelle zeichnet 3-, 205-Differenzfälle gegenüber der ursprünglichen x86-Funktion und eine vollständige 63-byte-Übereinstimmung nach der Neukompilierung mit dem historischen Compiler auf.

## Einschränkungen und unbestätigte Ansprüche

Die Validierung umfasst eine Funktion und einen bestimmten Prüfpunkt. Der aktualisierte Showcase verwendet frühere Ausführungs- und Kompilierungsdatensätze wieder. Es wird keine vollständige Spielrekonstruktion erstellt.

## Was zu lernen ist

Wenn der Pseudocode unvollständig ist, befolgen Sie Aufrufer, Assembly und Konstanten. Zeichnen Sie semantische Tests getrennt vom Byte-Matching auf.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Recorded analysis: REA 4.1.0, Ghidra 12.1.4, Linux x64 host.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md)
- [Projekt / Demo](https://rea.tools/showcase/dx-ball/)
- [Zusätzliche Quelle 1](https://github.com/N0zoM1z0/dx-ball)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
