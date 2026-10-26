# Awesome REA — Reverse Engineer Anything

![Awesome REA](assets/cover.svg)

**English** · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Português (Brasil)](README.pt-BR.md) · [Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

**Understand software with REA. What will you build?**

From legacy game ports to a small color picker, explore public projects using Reverse Engineer Anything. See what was built, how REA contributed, and what remains unverified.

[Explore and star the collection on GitHub](https://github.com/git-sanbu/awesome-rea) · [Search software, purpose or keywords](https://awesome-rea-e7l.pages.dev/) · [Submit a case](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)

**38 public cases** — 5 official showcases and 33 community projects or author experiments. Updated: 2026-10-26. Each case retains its own source-review date.

> Sources reviewed; author tests not independently rerun.

[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)

## Popular projects

Snapshot: 2026-10-26. Source-reviewed catalog projects with at least 100 GitHub Stars, sorted by stars. Stars indicate attention, not independent reproduction or production readiness. [Snapshot sources](data/popularity.json).

| Project / demo | GitHub Stars | Process and limitations |
| --- | ---: | --- |
| [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) | 1415 | [Open Claude UI: documenting desktop interactions and publishing reusable UI components](cases/open-claude-ui.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 1391 | [Co-op Anything: investigating campaign multiplayer entry points](cases/coop-anything.md) |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 763 | [sparkDash: integrating REA analysis into a multi-device dashboard](cases/sparkdash-rea.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 301 | [terminal-rs: a market terminal informed by TradingView interactions](cases/terminal-rs.md) |
| [michaelshimeles/rec-rs](https://github.com/michaelshimeles/rec-rs) | 104 | [rec-rs: an OBS-inspired native macOS recorder](cases/rec-rs.md) |

## Official showcases

| Project / demo | The question | Primary source |
| --- | --- | --- |
| [DX-Ball: reconstructing stereo sound panning](cases/dx-ball.md) | How does an on-screen position become a sound-pan value? | [Primary source](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| [Notion: tracing the Electron rich-text clipboard bridge](cases/notion-clipboard.md) | How does a web editor write rich text through the desktop clipboard? | [Primary source](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| [TH04: recovering PC-98 bullet-ring angles](cases/th04.md) | How are bullets evenly distributed around a ring and aimed toward the player? | [Primary source](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| [Aegis: finding the Android TOTP algorithm](cases/aegis-totp.md) | How is a six-digit login code calculated every 30 seconds? | [Primary source](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| [DownUnderCTF: recovering flag-checking equations](cases/ductf-masked-squares.md) | How can input validation be recovered without symbols or source code? | [Primary source](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |

## Games

| Project / demo | The question | Primary source |
| --- | --- | --- |
| [Desktop Games: porting a desktop toy to macOS and the browser](cases/desktop-games-nostalgia.md) | How can the Peter interpreter, program tree, interactions and assets be understood and ported? | [Primary source](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| [Ski or Die: rebuilding Snowball War in Rust](cases/ski-or-die.md) | How can throwing, collision, spawning and scoring rules be recovered from a DOS game? | [Primary source](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| [OpenBattlefield2: function-level Evidence for a Battlefield 2 client](cases/openbattlefield2.md) | How can crosshair, HUD and binary-behavior research inform a traceable engine implementation? | [Primary source](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| [GunZRs: identifying a packing boundary before rebuilding from game data](cases/gunzrs.md) | How can reconstruction continue when a packed executable prevents static recovery of game logic? | [Primary source](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| [Co-op Anything: investigating campaign multiplayer entry points](cases/coop-anything.md) | How can a campaign retain its scripts and sides while letting a second player join? | [Primary source](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |
| [Open Scrantic: rebuilding the Johnny Castaway screensaver engine in Rust](cases/open-scrantic.md) | How can a 16-bit screensaver’s script interpreter, story schedule and random behavior run on modern systems? | [Primary source](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md) |

## Applications

| Project / demo | The question | Primary source |
| --- | --- | --- |
| [Sketch (formerly paper-rs): a Paper-inspired Rust infinite canvas](cases/paper-rs.md) | How can canvas, layout and editor interactions inform an independent design tool? | [Primary source](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| [rec-rs: an OBS-inspired native macOS recorder](cases/rec-rs.md) | How can a focused screen, camera and audio recorder be built? | [Primary source](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| [terminal-rs: a market terminal informed by TradingView interactions](cases/terminal-rs.md) | How can chart-interaction research inform an independent Rust market interface? | [Primary source](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| [Wispr Flow: a speech-input teardown and a small local prototype](cases/wispr-flow.md) | How are recording, transcription, context and pasting connected? | [Primary source](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| [hexgrab: investigating the PowerToys color picker](cases/hexgrab.md) | How do global hotkeys, pixel sampling and the clipboard work together? | [Primary source](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| [AdamTerm: investigating Ghostty’s shell and building a terminal](cases/adamterm.md) | How are the terminal core, native windows, menus and services divided? | [Primary source](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| [Ledger Reborn: a local ledger informed by QuickBooks research](cases/ledger-reborn.md) | How can desktop accounting workflows inform an independent local app? | [Primary source](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| [DiskLens: checking disk-scanning and treemap algorithms in a released binary](cases/disklens.md) | How can disk scanning, treemaps and duplicate detection be checked before building a new interface? | [Primary source](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| [Hyper3D: from captured web bundles to an independent 3D prototype](cases/hyper3d-clone.md) | How can interface and API observations inform a prototype that exports 3D models? | [Primary source](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |
| [Open Claude UI: documenting desktop interactions and publishing reusable UI components](cases/open-claude-ui.md) | How can input composition, scrolling and desktop interaction rules inform reusable interface components? | [Primary source](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx) |

## Hardware and compatibility

| Project / demo | The question | Primary source |
| --- | --- | --- |
| [VSL-DSP: applying vendor-library findings to audio DSP tools](cases/vsl-dsp.md) | How does the vendor controller discover devices, register parameters and represent gain? | [Primary source](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| [Virtual Desktop Streamer: a Linux port through a replacement platform layer](cases/vd-streamer-linux.md) | How can capture, encoding, audio and input move to Linux while retaining the protocol library? | [Primary source](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| [Pixel Watch: an eSIM handoff helper informed by companion-APK analysis](cases/watch-esim-helper.md) | How can a separate helper find and open the companion app’s existing watch-eSIM download flow? | [Primary source](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| [PicoPrint: connecting a mobile thermal printer to Windows printing](cases/picoprint.md) | When a driver connects but does not print, how can handshake differences be found? | [Primary source](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| [V5VPN: protocol research for a scoped portal and tunnel client](cases/v5vpn-rea-client.md) | How can authentication, resource discovery and connection research inform a scoped independent client? | [Primary source](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |

## Analysis and evaluation

| Project / demo | The question | Primary source |
| --- | --- | --- |
| [OpenBSD netcat: static analysis of a shipped ELF](cases/netcat-analysis.md) | Which network, proxy and security-related implementations are in the shipped netcat binary? | [Primary source](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| [REA on REA: investigating the tool and testing predictions](cases/rea-on-rea.md) | How does REA choose a native-analysis provider and detect an unavailable provider? | [Primary source](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| [rea-groundtruth: checking analysis blind spots against known source](cases/rea-groundtruth.md) | Does a report of zero IPC calls or windows reflect the app or an analysis gap? | [Primary source](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| [rea-lab: measuring REA’s contribution to Windows reverse engineering](cases/rea-lab.md) | How does adding REA affect an agent’s success rate, time and cost? | [Primary source](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| [bzip2: checking stripped-binary findings against a symbolized build](cases/bzip2-groundtruth.md) | How can a function be found from an output string and its call relationships checked? | [Primary source](https://github.com/morluto/rea/discussions/2254) |
| [A local 27B model: a smaller MCP tool list enables function analysis](cases/local-model-mcp.md) | How can REA tool descriptions and analysis fit into a local model’s 32K context? | [Primary source](https://github.com/morluto/rea/discussions/3098) |
| [Open-source REA Lab: pinning an npm artifact and analyzing its entry slice](cases/opensource-rea-lab.md) | How can a release artifact be identified before answering a bounded entry-file question? | [Primary source](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |

## Learning and reproduction

| Project / demo | The question | Primary source |
| --- | --- | --- |
| [rea-playbook: turning Electron Evidence into a report and reconstruction](cases/rea-playbook.md) | How can large Evidence JSON become readable facts and a checked reconstruction? | [Primary source](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| [ReaFuse: combining two libraries after investigating their behavior](cases/reafuse.md) | How can two projects become behavior specifications and then a new combined tool? | [Primary source](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |
| [REA in Spanish: reconstructing an author-owned key validator](cases/rea-spanish-lab.md) | How can a small stripped program’s acceptance rule be reconstructed and checked against the original? | [Primary source](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py) |

## Tools and integrations

| Project / demo | The question | Primary source |
| --- | --- | --- |
| [sparkDash: integrating REA analysis into a multi-device dashboard](cases/sparkdash-rea.md) | How can a web interface submit long-running remote REA jobs and load large results on demand? | [Primary source](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |
| [REA Safe Agent: brokering static analysis between two contained processes](cases/rea-safe-agents.md) | How can an agent query REA while access to inputs, host tools and model requests remains bounded? | [Primary source](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md) |

## Which cases are included?

A public primary source must explicitly show REA use, a concrete question, a process and output. Analysis, independent implementation and historical work are attributed separately. Failed experiments, evaluations and implemented REA integrations are welcome. Tool introductions, mirrors and unimplemented plans are excluded.

[Contributing](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [Source records](SOURCES.md) · [Open case data](data/cases.json)

[For installation and version requirements, see the REA upstream project.](https://github.com/morluto/rea)

An independent community collection curated by Sanbu. Not affiliated with the REA upstream project.

Independent editorial summary. Credit belongs to the original authors. Target software, installers and complete decompiler output are not redistributed here. [MIT](LICENSE).
