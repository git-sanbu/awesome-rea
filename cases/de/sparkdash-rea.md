# sparkDash: Integration der REA-Analyse in ein Dashboard für mehrere Geräte

[← Zurück zu allen Fällen](../../README.de.md) · Tools und Integrationen

[English](../sparkdash-rea.md) · [简体中文](../zh-CN/sparkdash-rea.md) · [繁體中文](../zh-TW/sparkdash-rea.md) · [日本語](../ja/sparkdash-rea.md) · [한국어](../ko/sparkdash-rea.md) · [Español](../es/sparkdash-rea.md) · [Français](../fr/sparkdash-rea.md) · [Deutsch](../de/sparkdash-rea.md) · [Português (Brasil)](../pt-BR/sparkdash-rea.md) · [Русский](../ru/sparkdash-rea.md) · [العربية](../ar/sparkdash-rea.md) · [हिन्दी](../hi/sparkdash-rea.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** MiaAI-Lab
- **Datum der Quellenüberprüfung:** 2026-10-21
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** REA CLI, Eingabedateien und analysis/Evidence-Ansichten auf Remote-Linux-Geräten

## Die Frage

Wie kann eine Webschnittstelle lang laufende Remote-Jobs REA übermitteln und große Ergebnisse bei Bedarf laden?

## Was REA getan hat

Das Projekt ruft tatsächlich den Upstream REA über seinen CLI auf und fixiert die Reagenten 6.4.0 und seine Sperrdatei. server/rea implementiert getrennte Jobs, Uploads, Status, ausgelagerte Ergebnisse und Exporte. Befehle steuern „Inspizieren, Analysieren, Anzeigen“ und „Vergleichen“. the dashboard does not implement a decompiler.

## Vom Autor gemeldete Ergebnisse

Die öffentliche Seite „Tools → REA“ und die Serverimplementierung unterstützen die getrennte Remote-Ausführung, Protokolle, Zusammenfassungen, limitations/unknowns, On-Demand-Ansichten, JSON-Exporte und den Evidence-Vergleich. Versions-Pinning, Jobverwaltung und Upload-Tests sind öffentlich. Bei der Einbeziehung geht es um die implementierte Integration, nicht nur um Installationsanweisungen.

## Einschränkungen und unbestätigte Ansprüche

Dies ist ein Integrationsfall, keine REA-Rekonstruktion von sparkDash oder ein Beweis dafür, dass jeder Upstream-Analysepfad die Hardware-Akzeptanz bestanden hat. Auf den Geräten muss Linux ausgeführt werden, die Funktion ist standardmäßig deaktiviert und Zielformate benötigen zusätzliche Anbieter. Überprüfte Manager-Tests verwenden gefälschtes REA und eine lokale Shell, die echte Ghidra- oder Remote-Gerätetests nicht ersetzen. This catalog did not install or run it.

## Was zu lernen ist

Ordnen Sie Upstream-Funktionen getrennt von der Planung und der UI-Arbeit zu und bewahren Sie Beweise, Einschränkungen und Fehler in den angezeigten Ergebnissen.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> sparkDash uses the CLI only

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md)
- [Projekt / Demo](https://github.com/MiaAI-Lab/sparkDash)
- [Zusätzliche Quelle 1](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/commands.js)
- [Zusätzliche Quelle 2](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/ReaManager.js)
- [Zusätzliche Quelle 3](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/pinned/package.json)
- [Zusätzliche Quelle 4](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/__tests__/manager.test.js)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
