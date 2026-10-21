# Awesome REA — Reverse Engineer Anything use cases & examples

![Awesome REA: real projects, original sources, honest limits](assets/cover.svg)

[中文完整目录](README.md) · **English** · [Search the case directory](https://awesome-rea-e7l.pages.dev/)

**Real-world REA use cases, examples, tutorials and AI-assisted reverse engineering case studies.**

An independent collection of public, source-backed uses of [morluto/rea](https://github.com/morluto/rea), the Reverse Engineer Anything MCP server and CLI.

**34 cases: 5 official showcases and 29 community projects or author experiments. Latest update: 2026-10-21; each entry retains its own review date.** Each Chinese case note explains the target, REA's role, reported output, limitations and original sources. We reviewed the sources; we did not independently reproduce the projects or their tests.

Search by software or purpose: Ghostty, PowerToys, Electron, game porting, screen recording, Android, or Windows. The [online directory](https://awesome-rea-e7l.pages.dev/) includes category filters and links to all primary sources.

## Latest update — 2026-10-21

This second refresh adds Co-op Anything (721 stars) and sparkDash (738 stars), with a dated popularity section. The earlier refresh added three cases: OpenBattlefield2's crosshair Evidence, GunZRs' packed-binary boundary and data-led reconstruction, and a V5VPN portal/tunnel client. Refreshed Sketch (formerly paper-rs), rec-rs release architecture, terminal-rs indicators and rea-lab's 339 REA-calling-run denominator. Earlier pinned sources remain linked; all results are author-reported and were not independently rerun. See [CHANGELOG.md](CHANGELOG.md).

## Popular projects — 2026-10-21 snapshot

Source-reviewed catalog projects with at least 100 GitHub stars, sorted by stars. This is a dated attention snapshot, not a growth, quality or compatibility score. [Machine-readable source](data/popularity.json).

| Project | Stars | Evidence |
| --- | ---: | --- |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 738 | [Case note](cases/sparkdash-rea.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 721 | [Case note](cases/coop-anything.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 259 | [Case note](cases/terminal-rs.md) |

## Public cases

| Project | Use | Case note and original source |
| --- | --- | --- |
| dx-ball | Windows x86 sound-pan reconstruction | [Case note](cases/dx-ball.md) · [Primary source](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| notion-clipboard | Electron rich-clipboard bridge | [Case note](cases/notion-clipboard.md) · [Primary source](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| th04 | PC-98 DOS bullet-ring maths | [Case note](cases/th04.md) · [Primary source](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| aegis-totp | Android TOTP calculation | [Case note](cases/aegis-totp.md) · [Primary source](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| ductf-masked-squares | CTF flag-checker analysis and process verification | [Case note](cases/ductf-masked-squares.md) · [Primary source](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |
| desktop-games-nostalgia | Legacy desktop toy port to macOS and browser | [Case note](cases/desktop-games-nostalgia.md) · [Primary source](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| ski-or-die | DOS minigame reconstructed in Rust/SDL2 | [Case note](cases/ski-or-die.md) · [Primary source](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| paper-rs | Sketch, formerly paper-rs: Paper-inspired native infinite canvas | [Case note](cases/paper-rs.md) · [Primary source](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| rec-rs | OBS-inspired macOS recorder | [Case note](cases/rec-rs.md) · [Primary source](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| terminal-rs | Public TradingView chart behaviour research | [Case note](cases/terminal-rs.md) · [Primary source](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| wispr-flow | Speech-to-text pipeline teardown and local prototype | [Case note](cases/wispr-flow.md) · [Primary source](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| hexgrab | PowerToys-inspired Windows color picker | [Case note](cases/hexgrab.md) · [Primary source](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| adamterm | Ghostty shell investigation and SwiftTerm terminal | [Case note](cases/adamterm.md) · [Primary source](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| ledger-reborn | QuickBooks workflow research and local ledger | [Case note](cases/ledger-reborn.md) · [Primary source](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| vsl-dsp | Vendor audio-library findings for DSP tooling | [Case note](cases/vsl-dsp.md) · [Primary source](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| vd-streamer-linux | Linux platform layer for VR desktop streaming | [Case note](cases/vd-streamer-linux.md) · [Primary source](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| netcat-analysis | Static analysis of a shipped netcat binary | [Case note](cases/netcat-analysis.md) · [Primary source](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| rea-on-rea | Provider-selection investigation with falsifiable predictions | [Case note](cases/rea-on-rea.md) · [Primary source](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| rea-groundtruth | Known-source checks for Electron analysis blind spots | [Case note](cases/rea-groundtruth.md) · [Primary source](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| rea-lab | Controlled Windows reverse-engineering studies | [Case note](cases/rea-lab.md) · [Primary source](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| rea-playbook | Small Electron evidence-to-reconstruction lab | [Case note](cases/rea-playbook.md) · [Primary source](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| disklens | WinDirStat binary investigation and a Rust/Tauri disk analyzer | [Case note](cases/disklens.md) · [Primary source](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| hyper3d-clone | Captured Hyper3D JavaScript analysis and an independent 3D prototype | [Case note](cases/hyper3d-clone.md) · [Primary source](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |
| watch-esim-helper | Pixel Watch companion APK research and an eSIM handoff helper | [Case note](cases/watch-esim-helper.md) · [Primary source](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| picoprint | LX-D02 printer interoperability with REA setup and Hermes analysis | [Case note](cases/picoprint.md) · [Primary source](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| bzip2-groundtruth | Stripped bzip2 function and call-graph checks against known ground truth | [Case note](cases/bzip2-groundtruth.md) · [Primary source](https://github.com/morluto/rea/discussions/2254) |
| local-model-mcp | A 32K local model uses REA through a ten-tool MCP allowlist | [Case note](cases/local-model-mcp.md) · [Primary source](https://github.com/morluto/rea/discussions/3098) |
| opensource-rea-lab | Pinned npm artifact audit and a bounded REA dispatcher analysis | [Case note](cases/opensource-rea-lab.md) · [Primary source](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |
| reafuse | REA-backed behavior specs combine two JavaScript libraries into new tools | [Case note](cases/reafuse.md) · [Primary source](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |
| openbattlefield2 | Function-level REA Evidence for a Battlefield 2 crosshair and client engine | [Case note](cases/openbattlefield2.md) · [Primary source](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| gunzrs | REA packed-binary boundary checks and data-led Rust game reconstruction | [Case note](cases/gunzrs.md) · [Primary source](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| v5vpn-rea-client | V5VPN protocol research and a scoped Go portal/tunnel client | [Case note](cases/v5vpn-rea-client.md) · [Primary source](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |
| coop-anything | REA/Ghidra investigations of campaign multiplayer seams; unfinished co-op experiments | [Case note](cases/coop-anything.md) · [Primary source](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |
| sparkdash-rea | Implemented remote REA CLI jobs, paged Evidence results and dashboard integration | [Case note](cases/sparkdash-rea.md) · [Primary source](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |

## Inclusion

A primary source must explicitly attribute some work to REA. AI-assisted rewrites without confirmed REA use, mirrors, news reposts and unimplemented proposals are excluded. Reported results, independent verification and limitations remain distinct. A project is counted once.

[Submit a case](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml) or send a pull request using the [case template](templates/case.md). Submissions in Chinese or English are welcome. Preserve authorship, link to original evidence and describe what remains unknown.

See [CONTRIBUTING.md](CONTRIBUTING.md), [SOURCES.md](SOURCES.md), and [data/cases.json](data/cases.json). Original catalog text is MIT-licensed; linked projects and quoted material retain their own rights.

## Frequently asked questions

**What are REA, rea-agents and Reverse Engineer Anything?** This collection is specifically about [morluto/rea](https://github.com/morluto/rea), whose npm package is `rea-agents`. It provides CLI and MCP analysis tools for coding agents. Unrelated projects sharing the name REA are excluded.

**Do all examples need Ghidra or IDA?** No. JavaScript/Electron static analysis and several package-metadata paths work without a native analysis engine. See each case and the official prerequisites.

**Can I contribute someone else's project or a failed experiment?** Yes. Link to the original author's public report and explain REA's actual role, reported results and limitations. Chinese and English submissions are welcome. Star the repository if you want to find it again later.
