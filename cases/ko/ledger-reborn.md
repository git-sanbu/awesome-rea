# Ledger Reborn: QuickBooks 연구를 통해 정보를 얻은 로컬 원장

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../ledger-reborn.md) · [简体中文](../zh-CN/ledger-reborn.md) · [繁體中文](../zh-TW/ledger-reborn.md) · [日本語](../ja/ledger-reborn.md) · [한국어](../ko/ledger-reborn.md) · [Español](../es/ledger-reborn.md) · [Français](../fr/ledger-reborn.md) · [Deutsch](../de/ledger-reborn.md) · [Português (Brasil)](../pt-BR/ledger-reborn.md) · [Русский](../ru/ledger-reborn.md) · [العربية](../ar/ledger-reborn.md) · [हिन्दी](../hi/ledger-reborn.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** lxistired
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Mac용 QuickBooks 데스크탑

## 질문

데스크톱 회계 워크플로가 독립 로컬 앱에 어떻게 정보를 제공할 수 있나요?

## REA가 한 일

저자는 QuickBooks 조사를 REA에 기인한 다음 로컬 SQLite 회계 엔진 및 데스크톱 인터페이스를 구현하고 CASE_STUDY를 게시합니다.

## 저자 보고 결과

이 프로젝트는 미리보기 패키지, 소스 및 사례 연구를 게시합니다. 저자는 구현된 송장, 지불, 재고, 은행 조정 및 보고 워크플로를 나열합니다.

## 제한 사항 및 확인되지 않은 주장

아직 미리보기: 단일 사용자, 하나의 시스템 및 USD만 가능합니다. 급여, 세금 신고, 온라인 뱅킹, 다중 통화 및 전체 QuickBooks 파일 마이그레이션은 구현되지 않습니다. 포괄적인 상호작용이나 픽셀 동등성은 확인되지 않았습니다.

## 무엇을 배울 것인가

조사 결과를 검사 가능한 비즈니스 워크플로로 전환하고 재무 규칙과 지원되지 않는 운영을 문서화하세요.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> We used REA to investigate QuickBooks Desktop for Mac and independently implement a desktop accounting tool.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md)
- [프로젝트/데모](https://github.com/lxistired/ledger-reborn)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
