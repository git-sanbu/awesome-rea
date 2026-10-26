# REA Safe Agent: Vermittlung statischer Analysen zwischen zwei enthaltenen Prozessen

[← Zurück zu allen Fällen](../../README.de.md) · Tools und Integrationen

[English](../rea-safe-agents.md) · [简体中文](../zh-CN/rea-safe-agents.md) · [繁體中文](../zh-TW/rea-safe-agents.md) · [日本語](../ja/rea-safe-agents.md) · [한국어](../ko/rea-safe-agents.md) · [Español](../es/rea-safe-agents.md) · [Français](../fr/rea-safe-agents.md) · [Deutsch](../de/rea-safe-agents.md) · [Português (Brasil)](../pt-BR/rea-safe-agents.md) · [Русский](../ru/rea-safe-agents.md) · [العربية](../ar/rea-safe-agents.md) · [हिन्दी](../hi/rea-safe-agents.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

- **Autor / Namensnennung:** dagoSte
- **Datum der Quellenüberprüfung:** 2026-10-26
- **Überprüfungsstatus:** Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.
- **Ziel:** REA 6.7.0 Integration mit Ghidra 12.1.4 und JADX; harmlose ELF-Geräte und ein F-Droid APK

## Die Frage

Wie kann ein Agent REA abfragen, während der Zugriff auf Eingaben, Host-Tools und Modellanforderungen begrenzt bleibt?

## Was REA getan hat

Die Implementierung führt REA und seinen empfangenden Agenten in separaten Docker-Containern aus und leitet zugelassene MCP-Aufrufe über einen Host-Controller weiter. Eingefrorene Eingabe-Snapshots, tool/path-Prüfungen und begrenzte Ergebnisse schränken ein, was die Grenze überschreitet; REA liefert die eigentliche statische Analyse.

## Vom Autor gemeldete Ergebnisse

Datierter macOS ARM64-Belegbericht 11 erfolgreiche REA-Aufrufe mit Claude und 9 mit Codex auf demselben harmlosen ELF, wobei der Hash, die FNV-1a-Konstanten und die dekodierte Zeichenfolge anhand einer bekannten Quelle überprüft werden. Der Validierungsdatensatz meldet separat 39 erfolgreiche REA-Aufrufe für eine Live-F-Droid 2.0.2-Analyse.

## Einschränkungen und unbestätigte Ansprüche

Dies sind vom Autor veröffentlichte Prüfprotokolle, keine unabhängige Sicherheitszertifizierung. Die statische Analyse führt das Ziel nicht aus. Die Isolation hängt von Docker und dem Host-Controller ab; analysierter Text wird an den Modelldienst übermittelt, und die Docker-Integration unter Windows ist experimentell. Trotz des separaten unauffälligen npm-Audits bleiben Schwachstellenbefunde für die gesamten Images bestehen.

## Was zu lernen ist

Separate Scheinrichtlinientests, echte Toolaufrufe und Live-Modellläufe; Fügen Sie jeder Reklamation ein datiertes Ziel, einen Host und eine Quittung bei.

## REA Nutzungsnachweis in der Quelle

Die Formatierung von Auszügen wird vereinfacht. Lesen Sie die Originalquelle für den vollständigen Kontext.

> "rea_version": "6.7.0",

## Originalquellen

- [Primärquelle / angeheftete Beweise](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md)
- [Projekt / Demo](https://github.com/dagoSte/rea-safe-agents)
- [Zusätzliche Quelle 1](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-claude-subscription-macos-arm64-2026-10-19.json)
- [Zusätzliche Quelle 2](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-codex-chatgpt-macos-arm64-2026-10-19.json)
- [Zusätzliche Quelle 3](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/tunnel.py)
- [Zusätzliche Quelle 4](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/agent_session.py)

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben.

<!-- Aus Katalogdaten generiert; Bearbeiten Sie die Datendateien, um diesen Hinweis zu aktualisieren. -->
