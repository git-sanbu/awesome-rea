# Awesome REA — Reverse Engineer Anything

![Awesome REA](assets/cover.svg)

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · **한국어** · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Português (Brasil)](README.pt-BR.md) · [Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

**REA로 소프트웨어를 이해하세요. 무엇을 만들 것인가?**

레거시 게임 포트부터 작은 색상 선택기까지 Reverse Engineer Anything를 사용하여 공개 프로젝트를 탐색해 보세요. 무엇이 구축되었는지, REA가 어떻게 기여했는지, 아직 확인되지 않은 사항을 확인하세요.

[GitHub에서 컬렉션을 탐색하고 별표를 표시하세요.](https://github.com/git-sanbu/awesome-rea) · [소프트웨어, 목적 또는 키워드 검색](https://awesome-rea-e7l.pages.dev/ko/) · [사례 제출](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)

**34 공개 사례** — 5 공식 쇼케이스 및 29 커뮤니티 프로젝트 또는 작가 실험. 업데이트됨: 2026-10-21. 각 사례는 자체 출처 검토 날짜를 유지합니다.

> 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.

[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

## 인기 프로젝트

스냅샷: 2026-10-21. 별표별로 정렬된 최소 100 GitHub Stars가 포함된 소스 검토 카탈로그 프로젝트입니다. Stars는 독립적인 재생산이나 생산 준비가 아닌 관심을 나타냅니다. [스냅샷 소스](data/popularity.json).

| 프로젝트/데모 | GitHub Stars | 프로세스 및 제한사항 |
| --- | ---: | --- |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 738 | [sparkDash: REA 분석을 다중 장치 대시보드에 통합](cases/ko/sparkdash-rea.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 721 | [Co-op Anything: 캠페인 멀티플레이어 진입점 조사](cases/ko/coop-anything.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 259 | [terminal-rs: TradingView 상호작용을 통해 정보를 제공받는 시장 터미널](cases/ko/terminal-rs.md) |

## 공식 쇼케이스

| 프로젝트/데모 | 질문 | 기본 소스 |
| --- | --- | --- |
| [DX-Ball: 스테레오 사운드 패닝 재구성](cases/ko/dx-ball.md) | 화면상의 위치는 어떻게 사운드 팬 값이 되나요? | [기본 소스](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| [Notion: Electron 서식 있는 텍스트 클립보드 브리지 추적](cases/ko/notion-clipboard.md) | 웹 편집기는 데스크탑 클립보드를 통해 서식 있는 텍스트를 어떻게 작성합니까? | [기본 소스](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| [TH04: PC-98 총알 링 각도 복구](cases/ko/th04.md) | 총알은 어떻게 링 주위에 고르게 분포되어 플레이어를 향하게 됩니까? | [기본 소스](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| [Aegis: Android TOTP 알고리즘 찾기](cases/ko/aegis-totp.md) | 30초마다 6자리 로그인 코드가 어떻게 계산되나요? | [기본 소스](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| [DownUnderCTF: 플래그 확인 방정식 복구](cases/ko/ductf-masked-squares.md) | 기호나 소스 코드 없이 입력 유효성 검사를 어떻게 복구할 수 있나요? | [기본 소스](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |

## 게임

| 프로젝트/데모 | 질문 | 기본 소스 |
| --- | --- | --- |
| [Desktop Games: 데스크탑 장난감을 macOS 및 브라우저로 포팅](cases/ko/desktop-games-nostalgia.md) | Peter 인터프리터, 프로그램 트리, 상호 작용 및 자산을 어떻게 이해하고 이식할 수 있습니까? | [기본 소스](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| [Ski or Die: Rust에서 Snowball War 재구축](cases/ko/ski-or-die.md) | DOS 게임에서 던지기, 충돌, 생성 및 득점 규칙을 어떻게 복구할 수 있습니까? | [기본 소스](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| [OpenBattlefield2: 기능 수준 Evidence](cases/ko/openbattlefield2.md) | 십자선, HUD 및 바이너리 동작 연구는 추적 가능한 엔진 구현에 어떤 정보를 제공할 수 있습니까? | [기본 소스](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| [GunZRs: 게임 데이터에서 다시 빌드하기 전에 패킹 경계 식별](cases/ko/gunzrs.md) | 압축된 실행 파일이 게임 로직의 정적 복구를 방해하는 경우 재구성을 어떻게 계속할 수 있습니까? | [기본 소스](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| [Co-op Anything: 캠페인 멀티플레이어 진입점 조사](cases/ko/coop-anything.md) | 두 번째 플레이어가 참여하도록 허용하면서 캠페인의 스크립트와 측면을 어떻게 유지할 수 있습니까? | [기본 소스](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |

## 응용

| 프로젝트/데모 | 질문 | 기본 소스 |
| --- | --- | --- |
| [Sketch (formerly paper-rs): Paper에서 영감을 받은 Rust 무한 캔버스](cases/ko/paper-rs.md) | 캔버스, 레이아웃 및 편집기 상호 작용이 독립적인 디자인 도구에 어떻게 정보를 제공할 수 있습니까? | [기본 소스](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| [rec-rs: OBS에서 영감을 받은 기본 macOS 레코더](cases/ko/rec-rs.md) | 초점이 맞춰진 화면, 카메라, 오디오 레코더를 어떻게 만들 수 있나요? | [기본 소스](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| [terminal-rs: TradingView 상호작용을 통해 정보를 제공받는 시장 터미널](cases/ko/terminal-rs.md) | 차트 상호 작용 연구는 어떻게 독립적인 Rust 시장 인터페이스에 정보를 제공할 수 있습니까? | [기본 소스](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| [Wispr Flow: 음성 입력 분해 및 소형 로컬 프로토타입](cases/ko/wispr-flow.md) | 녹음, 전사, 컨텍스트 및 붙여넣기는 어떻게 연결됩니까? | [기본 소스](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| [hexgrab: PowerToys 색상 선택기 조사 중](cases/ko/hexgrab.md) | 전역 단축키, 픽셀 샘플링 및 클립보드는 어떻게 함께 작동합니까? | [기본 소스](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| [AdamTerm: Ghostty의 쉘 조사 및 터미널 구축](cases/ko/adamterm.md) | 터미널 코어, 기본 창, 메뉴 및 서비스는 어떻게 구분됩니까? | [기본 소스](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| [Ledger Reborn: QuickBooks 연구를 통해 정보를 얻은 로컬 원장](cases/ko/ledger-reborn.md) | 데스크톱 회계 워크플로가 독립 로컬 앱에 어떻게 정보를 제공할 수 있나요? | [기본 소스](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| [DiskLens: 릴리스된 바이너리에서 디스크 검색 및 트리맵 알고리즘 확인](cases/ko/disklens.md) | 새 인터페이스를 구축하기 전에 디스크 스캐닝, 트리맵 및 중복 감지를 어떻게 확인할 수 있습니까? | [기본 소스](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| [Hyper3D: 캡처된 웹 번들부터 독립적인 3D 프로토타입까지](cases/ko/hyper3d-clone.md) | 인터페이스 및 API 관찰은 3D 모델을 내보내는 프로토타입에 어떻게 정보를 제공할 수 있습니까? | [기본 소스](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |

## 하드웨어 및 호환성

| 프로젝트/데모 | 질문 | 기본 소스 |
| --- | --- | --- |
| [VSL-DSP: 공급업체 라이브러리 결과를 오디오 DSP 도구에 적용](cases/ko/vsl-dsp.md) | 공급업체 컨트롤러는 어떻게 장치를 검색하고, 매개변수를 등록하고, 게인을 표시합니까? | [기본 소스](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| [Virtual Desktop Streamer: 대체 플랫폼 레이어를 통한 Linux 포트](cases/ko/vd-streamer-linux.md) | 프로토콜 라이브러리를 유지하면서 어떻게 캡처, 인코딩, 오디오 및 입력을 Linux로 이동할 수 있습니까? | [기본 소스](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| [Pixel Watch: 동반 APK 분석을 통해 정보를 얻은 eSIM 핸드오프 도우미](cases/ko/watch-esim-helper.md) | 별도의 도우미가 컴패니언 앱의 기존 watch-eSIM 다운로드 흐름을 어떻게 찾아 열 수 있나요? | [기본 소스](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| [PicoPrint: 모바일 감열식 프린터를 Windows 인쇄에 연결](cases/ko/picoprint.md) | 드라이버가 연결되었지만 인쇄되지 않는 경우 핸드셰이크 차이점을 어떻게 찾을 수 있습니까? | [기본 소스](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| [V5VPN: 범위가 지정된 포털 및 터널 클라이언트에 대한 프로토콜 연구](cases/ko/v5vpn-rea-client.md) | 인증, 리소스 검색 및 연결 연구는 범위가 지정된 독립 클라이언트에 어떻게 알릴 수 있습니까? | [기본 소스](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |

## 분석 및 평가

| 프로젝트/데모 | 질문 | 기본 소스 |
| --- | --- | --- |
| [OpenBSD netcat: 배송된 ELF의 정적 분석](cases/ko/netcat-analysis.md) | 배송된 netcat 바이너리에는 어떤 네트워크, 프록시 및 보안 관련 구현이 포함되어 있습니까? | [기본 소스](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| [REA on REA: 도구 조사 및 예측 테스트](cases/ko/rea-on-rea.md) | REA는 기본 분석 제공자를 어떻게 선택하고 사용할 수 없는 제공자를 감지합니까? | [기본 소스](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| [rea-groundtruth: 알려진 소스에 대한 분석 사각지대 확인](cases/ko/rea-groundtruth.md) | IPC 호출이나 창이 0이라는 보고는 앱이나 분석 공백을 반영합니까? | [기본 소스](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| [rea-lab: Windows 리버스 엔지니어링에 대한 REA의 기여도 측정](cases/ko/rea-lab.md) | REA를 추가하면 상담원의 성공률, 시간 및 비용에 어떤 영향을 미치나요? | [기본 소스](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| [bzip2: 기호화된 빌드에 대해 제거된 바이너리 결과 확인](cases/ko/bzip2-groundtruth.md) | 출력 문자열에서 함수를 찾고 호출 관계를 확인하려면 어떻게 해야 합니까? | [기본 소스](https://github.com/morluto/rea/discussions/2254) |
| [로컬 27B 모델: 더 작은 MCP 도구 목록으로 기능 분석 가능](cases/ko/local-model-mcp.md) | REA 도구 설명 및 분석이 로컬 모델의 32K 컨텍스트에 어떻게 적합할 수 있습니까? | [기본 소스](https://github.com/morluto/rea/discussions/3098) |
| [Open-source REA Lab: npm 아티팩트 고정 및 해당 항목 슬라이스 분석](cases/ko/opensource-rea-lab.md) | 제한된 항목 파일 질문에 답하기 전에 릴리스 아티팩트를 어떻게 식별할 수 있습니까? | [기본 소스](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |

## 학습과 재생산

| 프로젝트/데모 | 질문 | 기본 소스 |
| --- | --- | --- |
| [rea-playbook: Electron Evidence를 보고서 및 재구성으로 전환](cases/ko/rea-playbook.md) | 큰 Evidence JSON이 어떻게 읽을 수 있는 사실과 확인된 재구성이 될 수 있습니까? | [기본 소스](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| [ReaFuse: 두 라이브러리의 동작을 조사한 후 결합](cases/ko/reafuse.md) | 어떻게 두 프로젝트가 동작 사양이 되고 새로운 결합 도구가 될 수 있습니까? | [기본 소스](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |

## 도구 및 통합

| 프로젝트/데모 | 질문 | 기본 소스 |
| --- | --- | --- |
| [sparkDash: REA 분석을 다중 장치 대시보드에 통합](cases/ko/sparkdash-rea.md) | 웹 인터페이스는 어떻게 장기 실행 원격 REA 작업을 제출하고 요청 시 큰 결과를 로드할 수 있습니까? | [기본 소스](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |

## 어떤 경우가 포함되나요?

공개 기본 소스에는 REA 사용, 구체적인 질문, 프로세스 및 출력이 명시적으로 표시되어야 합니다. 분석, 독립적 구현 및 역사적 작업은 별도로 귀속됩니다. 실패한 실험, 평가 및 구현된 REA 통합을 환영합니다. 도구 소개, 미러 및 구현되지 않은 계획은 제외됩니다.

[기여](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [소스 레코드](SOURCES.md) · [케이스 데이터 열기](data/cases.json)

[설치 및 버전 요구 사항은 REA 업스트림 프로젝트를 참조하세요.](https://github.com/morluto/rea)

Sanbu가 큐레이팅한 독립 커뮤니티 컬렉션입니다. REA 업스트림 프로젝트와 관련이 없습니다.

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다. [MIT](LICENSE).
