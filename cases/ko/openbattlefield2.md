# OpenBattlefield2: 기능 수준 Evidence

[← 모든 케이스로 돌아가기](../../README.ko.md) · 게임

[English](../openbattlefield2.md) · [简体中文](../zh-CN/openbattlefield2.md) · [繁體中文](../zh-TW/openbattlefield2.md) · [日本語](../ja/openbattlefield2.md) · [한국어](../ko/openbattlefield2.md) · [Español](../es/openbattlefield2.md) · [Français](../fr/openbattlefield2.md) · [Deutsch](../de/openbattlefield2.md) · [Português (Brasil)](../pt-BR/openbattlefield2.md) · [Русский](../ru/openbattlefield2.md) · [العربية](../ar/openbattlefield2.md) · [हिन्दी](../hi/openbattlefield2.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** Moxnatiy
- **소스 검토 날짜:** 2026-10-21
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Battlefield 2 1.5 Refractor 2 클라이언트, DLL 및 원본 게임 데이터 렌더링

## 질문

십자선, HUD 및 바이너리 동작 연구는 추적 가능한 엔진 구현에 어떤 정보를 제공할 수 있습니까?

## REA가 한 일

REA 4.1.0 및 Ghidra 12.1.4는 32-bit PE 파일을 읽고 전체 기능 Evidence 서류를 수집합니다. Direct Ghidra 쿼리, 게임 데이터 및 서버 기호가 이를 보완합니다. 십자선 메모에는 GuiIndex, 위치 및 오프셋 누적 주소와 REA Evidence ID가 포함됩니다. REA는 분석 단계만 처리합니다.

## 저자 보고 결과

이 프로젝트는 C++20 엔진, 기능 노트, 테스트 및 스크린샷을 게시합니다. 저자는 소유한 BF2 1.5 설치를 로드하고 원래 전용 서버에 연결하고 군인과 HUD를 표시한다고 보고합니다. 연결된 모드에서 십자선은 test_weapon_hud와 같은 확인을 통해 렌더링되고 이동 중에 확장되고 중지되면 축소됩니다.

## 제한 사항 및 확인되지 않은 주장

연구 프로젝트에는 아직 발사, 차량 운전 및 소리가 부족합니다. 십자선 무기 전환, 확대/축소 및 발사 업데이트는 아직 완료되지 않았습니다. 호스팅 모드에는 십자선이 없습니다. 메인 플랫폼은 macOS arm64이고, Windows 빌드는 실행되지 않았습니다. 결과에는 여러 도구가 포함되어 있으며 모두 REA에 기인할 수는 없습니다. 이 카탈로그는 재실행되지 않았습니다.

## 무엇을 배울 것인가

하나의 관찰 가능한 기능에 대한 주소, Evidence, 구현 및 승인 명령을 연결합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Addresses are BF2.exe unless named otherwise; the evidence IDs are REA’s

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md)
- [프로젝트/데모](https://github.com/Moxnatiy/OpenBattlefield2)
- [추가 소스 1](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/README.md)
- [추가 소스 2](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/CLAUDE.md)
- [추가 소스 3](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/tools/rea.sh)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
