# AdamTerm: Ghostty의 쉘 조사 및 터미널 구축

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../adamterm.md) · [简体中文](../zh-CN/adamterm.md) · [繁體中文](../zh-TW/adamterm.md) · [日本語](../ja/adamterm.md) · [한국어](../ko/adamterm.md) · [Español](../es/adamterm.md) · [Français](../fr/adamterm.md) · [Deutsch](../de/adamterm.md) · [Português (Brasil)](../pt-BR/adamterm.md) · [Русский](../ru/adamterm.md) · [العربية](../ar/adamterm.md) · [हिन्दी](../hi/adamterm.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** AdamLinCodes
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Ghostty 1.3.1 macOS 앱 번들

## 질문

터미널 코어, 기본 창, 메뉴 및 서비스는 어떻게 구분됩니까?

## REA가 한 일

REA는 Mach-O, plists, 서명, Objective-C 메타데이터, 인터페이스 빌더 및 동적 라이브러리 해상도를 검사합니다. 이 경로는 Hopper 또는 Ghidra를 사용하지 않았습니다.

## 저자 보고 결과

저자는 AppKit, SwiftTerm 및 기본 탭을 사용하여 더 작은 macOS 터미널을 구축하고 자체 검사 명령을 제공합니다.

## 제한 사항 및 확인되지 않은 주장

Ghostty의 Zig 코어를 재구축하는 대신 SwiftTerm를 사용합니다. 분할 창, 검색 창, 구성 파일 및 빠른 터미널은 구현되지 않습니다.

## 무엇을 배울 것인가

패키지 메타데이터와 인터페이스 리소스는 심층 디컴파일 전에 몇 가지 아키텍처 질문에 답할 수 있습니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> A minimal macOS terminal built by reverse-engineering Ghostty 1.3.1 with REA

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md)
- [프로젝트/데모](https://github.com/AdamLinCodes/AdamTerm)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
