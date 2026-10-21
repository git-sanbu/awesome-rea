# Virtual Desktop Streamer: 대체 플랫폼 레이어를 통한 Linux 포트

[← 모든 케이스로 돌아가기](../../README.ko.md) · 하드웨어 및 호환성

[English](../vd-streamer-linux.md) · [简体中文](../zh-CN/vd-streamer-linux.md) · [繁體中文](../zh-TW/vd-streamer-linux.md) · [日本語](../ja/vd-streamer-linux.md) · [한국어](../ko/vd-streamer-linux.md) · [Español](../es/vd-streamer-linux.md) · [Français](../fr/vd-streamer-linux.md) · [Deutsch](../de/vd-streamer-linux.md) · [Português (Brasil)](../pt-BR/vd-streamer-linux.md) · [Русский](../ru/vd-streamer-linux.md) · [العربية](../ar/vd-streamer-linux.md) · [हिन्दी](../hi/vd-streamer-linux.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** cudanexus
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 공식 Virtual Desktop macOS 및 Windows 설치 패키지

## 질문

프로토콜 라이브러리를 유지하면서 어떻게 캡처, 인코딩, 오디오 및 입력을 Linux로 이동할 수 있습니까?

## REA가 한 일

저자는 Claude Code와 REA가 두 패키지를 모두 분석한다고 말합니다. 리더에서 제공하는 macOS 프로토콜 라이브러리는 재사용되는 반면 Linux 플랫폼 레이어는 다시 작성됩니다.

## 저자 보고 결과

공개 Linux 포트에는 PipeWire/X11, GStreamer 및 uinput을 사용하는 소스, 빌드 지침 및 시뮬레이션 헤드셋 테스트가 포함되어 있습니다.

## 제한 사항 및 확인되지 않은 주장

실제 헤드셋, Wi-Fi 또는 GPU 인코더 테스트는 수행되지 않았습니다. Windows 스트리머의 SteamVR/OpenXR 게임 기능은 지원되지 않습니다. 공급업체 프로토콜 라이브러리에 대한 의존성은 이것이 완전히 독립적인 프로토콜 재작성이 아님을 의미합니다.

## 무엇을 배울 것인가

플랫폼 경계에 대한 호환성 작업에 초점을 맞추고 시뮬레이션된 장치 테스트와 실제 하드웨어 수용을 구별합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> This port was built by Claude Code (Claude Opus) with the REA reverse-engineering tools

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md)
- [프로젝트/데모](https://github.com/cudanexus/vd-streamer-linux)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
