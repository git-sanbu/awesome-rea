# Notion: Electron 서식 있는 텍스트 클립보드 브리지 추적

[← 모든 케이스로 돌아가기](../../README.ko.md) · 공식 쇼케이스

[English](../notion-clipboard.md) · [简体中文](../zh-CN/notion-clipboard.md) · [繁體中文](../zh-TW/notion-clipboard.md) · [日本語](../ja/notion-clipboard.md) · [한국어](../ko/notion-clipboard.md) · [Español](../es/notion-clipboard.md) · [Français](../fr/notion-clipboard.md) · [Deutsch](../de/notion-clipboard.md) · [Português (Brasil)](../pt-BR/notion-clipboard.md) · [Русский](../ru/notion-clipboard.md) · [العربية](../ar/notion-clipboard.md) · [हिन्दी](../hi/notion-clipboard.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** REA 쇼케이스 팀; 원본 프로젝트 작성자가 소스에 표시됨
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Notion 데스크톱 7.6.1 app.asar와 웹 편집기 모듈이 다른 시간에 캐시됨

## 질문

웹 편집기는 데스크탑 클립보드를 통해 서식 있는 텍스트를 어떻게 작성합니까?

## REA가 한 일

REA는 탭 사전 로드를 정적으로 분석하여 컨텍스트 브리지와 IPC 호출을 찾습니다. 번들 코드를 직접 읽으면 클립보드 API, 채널 및 기본 프로세스 수신기가 채워집니다.

## 저자 보고 결과

쇼케이스에서는 렌더러 → 사전 로드 → IPC → 소스 수준의 메인에 대해 설명하고 독립 모듈 프로브의 서식 있는 텍스트 마커 및 마크다운 테이블을 보여줍니다.

## 제한 사항 및 확인되지 않은 주장

REA 그래프는 전체 클립보드 채널 체인을 자동으로 확인하지 못했습니다. 웹 편집기와 데스크탑 패키지가 런타임 샘플과 일치하지 않습니다. 실제 copy/paste는 동일한 버전에서 캡처되지 않았습니다.

## 무엇을 배울 것인가

REA에서 반환된 별도의 구조, 수동 코드 판독의 결론 및 독립 프로브의 결과.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> The published npm REA 4.1.0 package inspected the saved tab preload on 7 October 2026

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md)
- [프로젝트/데모](https://rea.tools/showcase/notion/)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
