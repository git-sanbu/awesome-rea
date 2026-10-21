# Awesome REA — Reverse Engineer Anything

![Awesome REA](assets/cover.svg)

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Français](README.fr.md) · **Deutsch** · [Português (Brasil)](README.pt-BR.md) · [Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

**Software verstehen mit REA. Was wirst du bauen?**

Entdecken Sie öffentliche Projekte mit Reverse Engineer Anything, von älteren Game-Ports bis hin zu einem kleinen Farbwähler. Sehen Sie, was gebaut wurde, wie REA dazu beigetragen hat und was noch nicht bestätigt ist.

[Entdecken und präsentieren Sie die Kollektion auf GitHub](https://github.com/git-sanbu/awesome-rea) · [Suchen Sie nach Software, Zweck oder Schlüsselwörtern](https://awesome-rea-e7l.pages.dev/de/) · [Senden Sie einen Fall](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)

**34 öffentliche Fälle** — Offizielle 5-Showcases und 29-Community-Projekte oder Autorenexperimente. Aktualisiert: 2026-10-21. Jeder Fall behält sein eigenes Datum für die Quellenüberprüfung.

> Quellen überprüft; Autorentests werden nicht unabhängig wiederholt.

[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)

Diese Ausgabe wurde maschinell aus der redaktionellen englischen Version übersetzt. Originalzitate bleiben in ihrer Ausgangssprache. Wenn der Wortlaut unklar ist, konsultieren Sie Englisch und die verlinkten Quellen.

## Beliebte Projekte

Schnappschuss: 2026-10-21. Quellengeprüfte Katalogprojekte mit mindestens 100 GitHub Stars, sortiert nach Sternen. Stars weisen auf Aufmerksamkeit hin, nicht auf unabhängige Reproduktion oder Produktionsbereitschaft. [Snapshot-Quellen](data/popularity.json).

| Projekt / Demo | GitHub Stars | Prozess und Einschränkungen |
| --- | ---: | --- |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 738 | [sparkDash: Integration der REA-Analyse in ein Dashboard für mehrere Geräte](cases/de/sparkdash-rea.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 721 | [Co-op Anything: Untersuchung der Einstiegspunkte für den Mehrspielermodus der Kampagne](cases/de/coop-anything.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 259 | [terminal-rs: ein Marktterminal, das durch TradingView-Interaktionen informiert wird](cases/de/terminal-rs.md) |

## Offizielle Vitrinen

| Projekt / Demo | Die Frage | Primärquelle |
| --- | --- | --- |
| [DX-Ball: Rekonstruktion des Stereo-Sound-Pannings](cases/de/dx-ball.md) | Wie wird eine Position auf dem Bildschirm zu einem Ton-Pan-Wert? | [Primärquelle](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| [Notion: Verfolgen der Rich-Text-Zwischenablagebrücke Electron](cases/de/notion-clipboard.md) | Wie schreibt ein Web-Editor Rich Text über die Desktop-Zwischenablage? | [Primärquelle](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| [TH04: Wiederherstellung der Geschossringwinkel PC-98](cases/de/th04.md) | Wie werden Kugeln gleichmäßig um einen Ring verteilt und auf den Spieler gerichtet? | [Primärquelle](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| [Aegis: Finden des Android TOTP-Algorithmus](cases/de/aegis-totp.md) | Wie wird alle 30 Sekunden ein sechsstelliger Login-Code berechnet? | [Primärquelle](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| [DownUnderCTF: Wiederherstellen von Flag-Checking-Gleichungen](cases/de/ductf-masked-squares.md) | Wie kann die Eingabevalidierung ohne Symbole oder Quellcode wiederhergestellt werden? | [Primärquelle](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |

## Spiele

| Projekt / Demo | Die Frage | Primärquelle |
| --- | --- | --- |
| [Desktop Games: Portierung eines Desktop-Spielzeugs auf macOS und den Browser](cases/de/desktop-games-nostalgia.md) | Wie können der Peter-Interpreter, der Programmbaum, die Interaktionen und die Assets verstanden und portiert werden? | [Primärquelle](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| [Ski or Die: Neuaufbau von Snowball War in Rust](cases/de/ski-or-die.md) | Wie können Wurf-, Kollisions-, Spawn- und Punkteregeln aus einem DOS-Spiel wiederhergestellt werden? | [Primärquelle](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| [OpenBattlefield2: -Funktionsebene Evidence für einen Battlefield 2-Client](cases/de/openbattlefield2.md) | Wie können Fadenkreuz-, HUD- und binäre Verhaltensforschung in eine nachvollziehbare Engine-Implementierung einfließen? | [Primärquelle](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| [GunZRs: Identifizieren einer Packgrenze vor dem Neuaufbau aus Spieldaten](cases/de/gunzrs.md) | Wie kann die Rekonstruktion fortgesetzt werden, wenn eine gepackte ausführbare Datei die statische Wiederherstellung der Spiellogik verhindert? | [Primärquelle](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| [Co-op Anything: Untersuchung der Einstiegspunkte für den Mehrspielermodus der Kampagne](cases/de/coop-anything.md) | Wie kann eine Kampagne ihre Skripte und Seiten beibehalten und gleichzeitig einen zweiten Spieler beitreten lassen? | [Primärquelle](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |

## Anwendungen

| Projekt / Demo | Die Frage | Primärquelle |
| --- | --- | --- |
| [Sketch (formerly paper-rs): eine von Paper inspirierte unendliche Rust-Leinwand](cases/de/paper-rs.md) | Wie können die Interaktionen zwischen Leinwand, Layout und Editor ein unabhängiges Designtool beeinflussen? | [Primärquelle](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| [rec-rs: ein OBS-inspirierter nativer macOS-Recorder](cases/de/rec-rs.md) | Wie können ein fokussierter Bildschirm, eine Kamera und ein Audiorecorder gebaut werden? | [Primärquelle](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| [terminal-rs: ein Marktterminal, das durch TradingView-Interaktionen informiert wird](cases/de/terminal-rs.md) | Wie kann die Chart-Interaktionsforschung eine unabhängige Rust-Marktschnittstelle beeinflussen? | [Primärquelle](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| [Wispr Flow: ein Spracheingabe-Teardown und ein kleiner lokaler Prototyp](cases/de/wispr-flow.md) | Wie hängen Aufnahme, Transkription, Kontext und Einfügen zusammen? | [Primärquelle](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| [hexgrab: Untersuchung des Farbwählers PowerToys](cases/de/hexgrab.md) | Wie funktionieren globale Hotkeys, Pixelsampling und die Zwischenablage? | [Primärquelle](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| [AdamTerm: Untersuchung der Shell von Ghostty und Aufbau eines Terminals](cases/de/adamterm.md) | Wie sind der Terminalkern, native Fenster, Menüs und Dienste aufgeteilt? | [Primärquelle](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| [Ledger Reborn: ein lokales Hauptbuch, das auf der QuickBooks-Forschung basiert](cases/de/ledger-reborn.md) | Wie können Desktop-Buchhaltungsworkflows eine unabhängige lokale App informieren? | [Primärquelle](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| [DiskLens: Überprüfung von Festplatten-Scan- und Treemap-Algorithmen in einer veröffentlichten Binärdatei](cases/de/disklens.md) | Wie können Festplattenscans, Treemaps und Duplikaterkennung überprüft werden, bevor eine neue Schnittstelle erstellt wird? | [Primärquelle](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| [Hyper3D: von erfassten Web-Bundles bis hin zu einem unabhängigen 3D-Prototyp](cases/de/hyper3d-clone.md) | Wie können Schnittstellen- und API-Beobachtungen einen Prototyp beeinflussen, der 3D-Modelle exportiert? | [Primärquelle](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |

## Hardware und Kompatibilität

| Projekt / Demo | Die Frage | Primärquelle |
| --- | --- | --- |
| [VSL-DSP: Anwendung von Erkenntnissen aus Herstellerbibliotheken auf Audio-DSP-Tools](cases/de/vsl-dsp.md) | Wie erkennt der Hersteller-Controller Geräte, registriert Parameter und stellt den Gewinn dar? | [Primärquelle](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| [Virtual Desktop Streamer: ein Linux-Port über eine Ersatzplattformschicht](cases/de/vd-streamer-linux.md) | Wie können Erfassung, Kodierung, Audio und Eingabe nach Linux verschoben werden, während die Protokollbibliothek erhalten bleibt? | [Primärquelle](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| [Pixel Watch: ein eSIM-Übergabehelfer, der durch eine Companion-APK-Analyse informiert wird](cases/de/watch-esim-helper.md) | Wie kann ein separater Helfer den vorhandenen Watch-eSIM-Download-Flow der Begleit-App finden und öffnen? | [Primärquelle](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| [PicoPrint: Anschluss eines mobilen Thermodruckers an den Windows-Drucker](cases/de/picoprint.md) | Wie können Handshake-Unterschiede festgestellt werden, wenn ein Treiber eine Verbindung herstellt, aber nicht druckt? | [Primärquelle](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| [V5VPN: Protokollrecherche für einen bereichsbezogenen Portal- und Tunnel-Client](cases/de/v5vpn-rea-client.md) | Wie können Authentifizierung, Ressourcenerkennung und Verbindungsforschung einen bereichsbezogenen unabhängigen Client informieren? | [Primärquelle](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |

## Analyse und Bewertung

| Projekt / Demo | Die Frage | Primärquelle |
| --- | --- | --- |
| [OpenBSD netcat: Statische Analyse eines ausgelieferten ELF](cases/de/netcat-analysis.md) | Welche Netzwerk-, Proxy- und sicherheitsbezogenen Implementierungen sind in der ausgelieferten netcat-Binärdatei enthalten? | [Primärquelle](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| [REA on REA: Untersuchung des Tools und Testen von Vorhersagen](cases/de/rea-on-rea.md) | Wie wählt REA einen nativen Analyseanbieter aus und erkennt einen nicht verfügbaren Anbieter? | [Primärquelle](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| [rea-groundtruth: Überprüfung der blinden Flecken der Analyse anhand bekannter Quellen](cases/de/rea-groundtruth.md) | Spiegelt ein Bericht über null IPC-Aufrufe oder -Fenster die App oder eine Analyselücke wider? | [Primärquelle](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| [rea-lab: Messung des Beitrags von REA zum Reverse Engineering von Windows](cases/de/rea-lab.md) | Wie wirkt sich das Hinzufügen von REA auf die Erfolgsquote, den Zeitaufwand und die Kosten eines Agenten aus? | [Primärquelle](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| [bzip2: Überprüfung entfernter Binärergebnisse anhand eines symbolisierten Builds](cases/de/bzip2-groundtruth.md) | Wie kann eine Funktion aus einem Ausgabestring gefunden und ihre Aufrufbeziehungen überprüft werden? | [Primärquelle](https://github.com/morluto/rea/discussions/2254) |
| [Ein lokales 27B-Modell: Eine kleinere MCP-Werkzeugliste ermöglicht die Funktionsanalyse](cases/de/local-model-mcp.md) | Wie können REA-Werkzeugbeschreibungen und -Analysen in den 32K-Kontext eines lokalen Modells passen? | [Primärquelle](https://github.com/morluto/rea/discussions/3098) |
| [Open-source REA Lab: Anheften eines NPM-Artefakts und Analysieren seines Eingangssegments](cases/de/opensource-rea-lab.md) | Wie kann ein Release-Artefakt identifiziert werden, bevor eine Frage zu einer begrenzten Eintragsdatei beantwortet wird? | [Primärquelle](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |

## Lernen und Reproduktion

| Projekt / Demo | Die Frage | Primärquelle |
| --- | --- | --- |
| [rea-playbook: Electron Evidence in einen Bericht und eine Rekonstruktion verwandeln](cases/de/rea-playbook.md) | Wie kann aus großem Evidence JSON lesbare Fakten und eine überprüfte Rekonstruktion werden? | [Primärquelle](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| [ReaFuse: Kombinieren zweier Bibliotheken nach Untersuchung ihres Verhaltens](cases/de/reafuse.md) | Wie können zwei Projekte zu Verhaltensspezifikationen und dann zu einem neuen kombinierten Tool werden? | [Primärquelle](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |

## Tools und Integrationen

| Projekt / Demo | Die Frage | Primärquelle |
| --- | --- | --- |
| [sparkDash: Integration der REA-Analyse in ein Dashboard für mehrere Geräte](cases/de/sparkdash-rea.md) | Wie kann eine Webschnittstelle lang laufende Remote-Jobs REA übermitteln und große Ergebnisse bei Bedarf laden? | [Primärquelle](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |

## Welche Fälle sind enthalten?

Eine öffentliche Primärquelle muss explizit die REA-Nutzung, eine konkrete Fragestellung, einen Prozess und eine Ausgabe aufzeigen. Analyse, eigenständige Umsetzung und historische Arbeit werden gesondert ausgewiesen. Fehlgeschlagene Experimente, Auswertungen und umgesetzte REA-Integrationen sind willkommen. Ausgenommen sind Tooleinführungen, Spiegelungen und nicht umgesetzte Pläne.

[Mitwirken](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [Quelldatensätze](SOURCES.md) · [Falldaten öffnen](data/cases.json)

[Informationen zu Installations- und Versionsanforderungen finden Sie im Upstream-Projekt REA.](https://github.com/morluto/rea)

Eine unabhängige Community-Sammlung, kuratiert von Sanbu. Nicht mit dem Upstream-Projekt REA verbunden.

Unabhängige redaktionelle Zusammenfassung. Die Urheberschaft liegt bei den Originalautoren. Zielsoftware, Installationsprogramme und die komplette Dekompilerausgabe werden hier nicht weitergegeben. [MIT](LICENSE).
