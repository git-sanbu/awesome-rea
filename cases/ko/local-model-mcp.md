# 로컬 27B 모델: 더 작은 MCP 도구 목록으로 기능 분석 가능

[← 모든 케이스로 돌아가기](../../README.ko.md) · 분석 및 평가

[English](../local-model-mcp.md) · [简体中文](../zh-CN/local-model-mcp.md) · [繁體中文](../zh-TW/local-model-mcp.md) · [日本語](../ja/local-model-mcp.md) · [한국어](../ko/local-model-mcp.md) · [Español](../es/local-model-mcp.md) · [Français](../fr/local-model-mcp.md) · [Deutsch](../de/local-model-mcp.md) · [Português (Brasil)](../pt-BR/local-model-mcp.md) · [Русский](../ru/local-model-mcp.md) · [العربية](../ar/local-model-mcp.md) · [हिन्दी](../hi/local-model-mcp.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** CassieFox23
- **소스 검토 날짜:** 2026-10-19
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 자체 구축된 C 토큰 검사기; Qwen3.8-27B, llama.cpp, OpenCode 및 REA MCP

## 질문

REA 도구 설명 및 분석이 로컬 모델의 32K 컨텍스트에 어떻게 적합할 수 있습니까?

## REA가 한 일

작성자는 PR #3026 커밋 d993ffeb1 및 Ghidra 12.1.4. 도구 제품군을 사용하고 OpenCode 허용 목록은 10 REA 도구만 노출합니다. 모델은 대상을 열고 함수를 찾아 디컴파일한 다음 세션을 닫습니다.

## 저자 보고 결과

저자는 모든 206 도구 설명이 컨텍스트를 초과했다고 보고합니다. 62-tool 설정에서 프롬프트를 읽은 후 GPU 재설정이 발생했습니다. 10-tool 프롬프트는 4,407 토큰을 사용했습니다. 세 번의 실행으로 대상 문자열을 찾고 검사기를 설명했는데, 각각 약 80초가 걸렸습니다.

## 제한 사항 및 확인되지 않은 주장

세 번의 실행은 세 개의 독립적인 작업이 아닌 하나의 작은 프로그램과 프롬프트를 반복합니다. 다른 모델이나 클라이언트는 비교되지 않았습니다. 결과는 과거 PR 커밋을 사용합니다. 도구 수, 스위치 및 타이밍은 현재 릴리스에 대해 보장되지 않습니다.

## 무엇을 배울 것인가

최소한의 도구 세트를 테스트하기 전에 스키마 컨텍스트 비용을 측정하십시오. 한 가지 작업을 반복한다고 해서 일반적인 능력이 확립되는 것은 아닙니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> With the full tool list, nothing fits.

## 원본 소스

- [공개 토론/검토 시 편집 가능](https://github.com/morluto/rea/discussions/3098)
- [프로젝트/데모](https://github.com/morluto/rea/discussions/3098)
- [추가 소스 1](https://github.com/morluto/rea/pull/3026)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
