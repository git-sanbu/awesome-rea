# Eleven: 에이전트 기반 데스크톱 워크벤치를 REA에 연결

[← 모든 케이스로 돌아가기](../../README.ko.md) · 도구 및 통합

[English](../eleven.md) · [简体中文](../zh-CN/eleven.md) · [繁體中文](../zh-TW/eleven.md) · [日本語](../ja/eleven.md) · [한국어](../ko/eleven.md) · [Español](../es/eleven.md) · [Français](../fr/eleven.md) · [Deutsch](../de/eleven.md) · [Português (Brasil)](../pt-BR/eleven.md) · [Русский](../ru/eleven.md) · [العربية](../ar/eleven.md) · [हिन्दी](../hi/eleven.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** Zfinix
- **소스 검토 날짜:** 2026-11-03
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** REA/Ghidra 및 ACP 에이전트 데스크톱 워크벤치를 통한 기본 바이너리 분석

## 질문

탐색 및 편집 가능한 주석이 공유 워크벤치에 계속 표시되는 동안 에이전트는 어떻게 바이너리를 검사할 수 있나요?

## REA가 한 일

엔진은 REA MCP를 시작하고 open_binary 및 프로시저 뷰를 호출합니다. 별도의 프록시는 REA 주석 쓰기 도구를 보류하면서 분석 도구를 전달하고, 가시적인 기록이 있는 Eleven 프로젝트 도구를 통해 이러한 변경 사항을 지시합니다.

## 저자 보고 결과

공개 출력에는 데스크톱 애플리케이션 소스, MCP 도구 문서, 프로젝트 주석 및 패치 제안 경로, 그리고 에이전트가 UI에서 /bin/ls 기능을 열도록 요청하는 작성자 제공 라이브 에이전트 테스트가 포함됩니다. README 및 업스트림 쇼케이스는 작동하는 작업대를 설명합니다.

## 제한 사항 및 확인되지 않은 주장

카탈로그는 실행된 테스트 영수증이나 설치된 릴리스가 아닌 소스 및 테스트 정의를 검사했습니다. 데스크톱 플랫폼 지원, 디버거 동작, 캐시 속도 향상 및 바이너리 분석 완전성은 독립적으로 확인되지 않았습니다. Rizin, jadx 및 기타 경로는 별도의 엔진입니다. 그 결과는 REA에 귀속되지 않습니다. 업스트림 쇼케이스 타이밍은 카탈로그 벤치마크가 아닌 작성자 관찰입니다.

## 무엇을 배울 것인가

프로젝트 편집에서 분석 통과를 분리하고, 작성자 및 실행 취소 기록을 표시하고, 실행 가능한 테스트를 관찰된 테스트 결과와 구별합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> REA for agents: every tool passes through except the ones whose changes belong in Eleven's project.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/bridge/reaProxy.ts)
- [프로젝트/데모](https://github.com/Zfinix/eleven)
- [추가 소스 1](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/README.md)
- [추가 소스 2](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/src/engine/rea.ts)
- [추가 소스 3](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/docs/mcp-tools.md)
- [추가 소스 4](https://github.com/Zfinix/eleven/blob/9fb1042696a0e0a3387e3c3317b6e697013ae835/app/tests/m4-agent.live.test.tsx)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
