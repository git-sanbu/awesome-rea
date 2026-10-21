# sparkDash: REA 분석을 다중 장치 대시보드에 통합

[← 모든 케이스로 돌아가기](../../README.ko.md) · 도구 및 통합

[English](../sparkdash-rea.md) · [简体中文](../zh-CN/sparkdash-rea.md) · [繁體中文](../zh-TW/sparkdash-rea.md) · [日本語](../ja/sparkdash-rea.md) · [한국어](../ko/sparkdash-rea.md) · [Español](../es/sparkdash-rea.md) · [Français](../fr/sparkdash-rea.md) · [Deutsch](../de/sparkdash-rea.md) · [Português (Brasil)](../pt-BR/sparkdash-rea.md) · [Русский](../ru/sparkdash-rea.md) · [العربية](../ar/sparkdash-rea.md) · [हिन्दी](../hi/sparkdash-rea.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** MiaAI-Lab
- **소스 검토 날짜:** 2026-10-21
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 원격 Linux 장치의 REA CLI, 입력 파일 및 analysis/Evidence 보기

## 질문

웹 인터페이스는 어떻게 장기 실행 원격 REA 작업을 제출하고 요청 시 큰 결과를 로드할 수 있습니까?

## REA가 한 일

프로젝트는 실제로 CLI를 통해 업스트림 REA를 호출하여 시약 에이전트 6.4.0 및 해당 잠금 파일을 고정합니다. server/rea는 분리된 작업, 업로드, 상태, 페이징된 결과 및 내보내기를 구현합니다. 명령은 검사-분석-보기 및 비교를 구동합니다. 대시보드는 디컴파일러를 구현하지 않습니다.

## 저자 보고 결과

공개 도구 → REA 페이지 및 서버 구현은 분리된 원격 실행, 로그, 요약, limitations/unknowns, 주문형 보기, JSON 내보내기 및 Evidence 비교를 지원합니다. 버전 고정, 작업 관리 및 업로드 테스트는 공개됩니다. 포함 문제는 설치 지침만으로는 구현된 통합이 아닙니다.

## 제한 사항 및 확인되지 않은 주장

이는 sparkDash의 REA 재구성이나 모든 업스트림 분석 경로가 하드웨어 승인을 통과했다는 증거가 아닌 통합 사례입니다. 장치는 Linux를 실행해야 하며, 이 기능은 기본적으로 꺼져 있으며 대상 형식에는 추가 공급자가 필요합니다. 검토된 관리자 테스트는 실제 Ghidra 또는 원격 장치 테스트를 대체하지 않는 가짜 REA 및 로컬 셸을 사용합니다. 이 카탈로그는 설치 또는 실행되지 않았습니다.

## 무엇을 배울 것인가

일정 및 UI 작업과 별도로 업스트림 기능의 속성을 지정하여 표시된 결과의 증거, 제한 사항 및 실패를 보존합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> sparkDash uses the CLI only

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md)
- [프로젝트/데모](https://github.com/MiaAI-Lab/sparkDash)
- [추가 소스 1](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/commands.js)
- [추가 소스 2](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/ReaManager.js)
- [추가 소스 3](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/pinned/package.json)
- [추가 소스 4](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/server/rea/__tests__/manager.test.js)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
