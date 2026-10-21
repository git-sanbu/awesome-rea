# Sketch (formerly paper-rs): Paper에서 영감을 받은 Rust 무한 캔버스

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../paper-rs.md) · [简体中文](../zh-CN/paper-rs.md) · [繁體中文](../zh-TW/paper-rs.md) · [日本語](../ja/paper-rs.md) · [한국어](../ko/paper-rs.md) · [Español](../es/paper-rs.md) · [Français](../fr/paper-rs.md) · [Deutsch](../de/paper-rs.md) · [Português (Brasil)](../pt-BR/paper-rs.md) · [Русский](../ru/paper-rs.md) · [العربية](../ar/paper-rs.md) · [हिन्दी](../hi/paper-rs.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** michaelshimeles
- **소스 검토 날짜:** 2026-10-21
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Paper 데스크탑 디자인 애플리케이션의 동작

## 질문

캔버스, 레이아웃 및 편집기 상호 작용이 독립적인 디자인 도구에 어떻게 정보를 제공할 수 있습니까?

## REA가 한 일

저자는 wgpu, winit 및 egui를 사용하여 별도의 Rust 앱을 구현하기 전에 REA 및 Claude Code를 사용하여 Paper의 데스크톱 동작을 조사했다고 말합니다.

## 저자 보고 결과

이 프로젝트는 테스트 및 기능 차이가 있는 무한한 캔버스, 페이지, 레이아웃, 벡터 편집, 화이트보드 및 MCP 인터페이스를 게시합니다. 2026-10-21:에서 검토된 결과 이제는 Sketch-rs 실행 파일, 이전 프로젝트 디렉터리의 최초 실행 마이그레이션 및 이전 파일 및 환경 변수와의 호환성을 통해 Sketch로 명명되었습니다. 하나의 사례로 남아 있습니다.

## 제한 사항 및 확인되지 않은 주장

작성자는 실제 macOS 하드웨어에서 명시적으로 이를 실행하지 않았습니다. 일부 기능은 근사치이거나 누락되었습니다. 포함 여부는 Paper에 대한 검증된 동등성이 아니라 작성자의 공개 속성에 따라 결정됩니다.

## 무엇을 배울 것인가

독립적인 구현의 경계를 설명하면서 행동 및 상호 작용 계약을 알아보세요.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> by studying the behavior of the Paper desktop app with REA and Claude Code

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md)
- [프로젝트/데모](https://github.com/michaelshimeles/paper-rs)
- [추가 소스 1](https://github.com/michaelshimeles/paper-rs/blob/0b1b91da7caa10abae7cbf75d2ce003822c85fe9/README.md)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
