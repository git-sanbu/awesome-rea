# Aegis: Finden des Android TOTP-Algorithmus

[← Zurück zu allen Fällen](../../README.de.md) · Offizielle Vitrinen

[English](../aegis-totp.md) · [简体中文](../zh-CN/aegis-totp.md) · [繁體中文](../zh-TW/aegis-totp.md) · [日本語](../ja/aegis-totp.md) · [한국어](../ko/aegis-totp.md) · [Español](../es/aegis-totp.md) · [Français](../fr/aegis-totp.md) · [Deutsch](../de/aegis-totp.md) · [Português (Brasil)](../pt-BR/aegis-totp.md) · [Русский](../ru/aegis-totp.md) · [العربية](../ar/aegis-totp.md) · [हिन्दी](../hi/aegis-totp.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** REA-Vorzeigeteam; Quellenangabe der ursprünglichen Projektautoren
- **Datum der Quellenüberprüfung:** 2026-10-16
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** Aegis Authenticator 3.4.3 Android APK

## Die Frage

Wie wird alle 30 Sekunden ein sechsstelliger Login-Code berechnet?

## Was REA getan hat

Die REA Android-Analyse lokalisiert Generierungs-, Anzeige- und Kopiermethoden. Der Autor liest die HOTP/TOTP-Berechnung und erstellt eine Browser-Demo mit einstellbarer Uhr.

## Vom Autor gemeldete Ergebnisse

Die offizielle Seite berichtet über 133-Fälle, in denen die extrahierte Methode mit einer unabhängigen Implementierung verglichen wird, sowie über die sechs SHA-1-Referenzvektoren von RFC 6238.

## Einschränkungen und unbestätigte Ansprüche

Der Umfang liegt in der Codegenerierung, nicht in einer Rekonstruktion des Tresors, des verschlüsselten Speichers oder der gesamten App. In diesem Katalog wurden die Fälle nicht erneut ausgeführt.

## Was zu lernen ist

Wählen Sie eine kleine Funktion, die unabhängig überprüft werden kann, und schränken Sie ihre Implementierung mit öffentlichen Standardtestvektoren ein.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> Inspected with REA 6.1.0 on 9 October 2026.

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html)
- [Projekt / Demo](https://rea.tools/showcase/aegis/)
- [Zusätzliche Quelle 1](https://github.com/beemdevelopment/Aegis)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
