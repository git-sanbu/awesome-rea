# terminal-rs: TradingView 상호작용을 통해 정보를 제공받는 시장 터미널

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../terminal-rs.md) · [简体中文](../zh-CN/terminal-rs.md) · [繁體中文](../zh-TW/terminal-rs.md) · [日本語](../ja/terminal-rs.md) · [한국어](../ko/terminal-rs.md) · [Español](../es/terminal-rs.md) · [Français](../fr/terminal-rs.md) · [Deutsch](../de/terminal-rs.md) · [Português (Brasil)](../pt-BR/terminal-rs.md) · [Русский](../ru/terminal-rs.md) · [العربية](../ar/terminal-rs.md) · [हिन्दी](../hi/terminal-rs.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** michaelshimeles
- **소스 검토 날짜:** 2026-10-21
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 공개, 로그아웃된 TradingView 차트 페이지의 동작

## 질문

차트 상호 작용 연구는 어떻게 독립적인 Rust 시장 인터페이스에 정보를 제공할 수 있습니까?

## REA가 한 일

저자는 공개 페이지를 수동적으로 캡처하기 위해 REA 웹사이트 모드를 사용합니다. 조사 결과, Evidence ID 및 설계 의미는 docs/analysis.에 기록됩니다.

## 저자 보고 결과

이 프로젝트는 Rust GPU 차트, 키보드 명령, 패널 레이아웃 및 Bloomberg 스타일 인터페이스와의 데이터 통합을 게시합니다. 2026-10-21:에서 검토됨 151 내장 표시기, 매개변수 및 경계 입력 테스트, macOS 범용 릴리스 스크립트가 추가되었습니다. 이는 새로운 REA 조사가 아닌 이후 구현 변경 사항입니다.

## 제한 사항 및 확인되지 않은 주장

웹에 보이는 행동만 연구되었습니다. 이는 TradingView 또는 Bloomberg 소스 코드를 복구하는 것이 아닙니다. 데이터 소스, 속도 제한 및 데이터 사용 조건은 별도의 제약을 부과합니다.

## 무엇을 배울 것인가

공개 웹 관찰은 바이너리 디컴파일로 설명되지 않고 추적 가능한 설계 입력을 제공할 수 있습니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> tradingview.com with REA in website mode

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md)
- [프로젝트/데모](https://github.com/michaelshimeles/terminal-rs)
- [추가 소스 1](https://github.com/michaelshimeles/terminal-rs/blob/97c96dd09a4ba24e2693202f2012e0e8aa0a8615/README.md)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
