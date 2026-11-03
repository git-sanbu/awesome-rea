# REA Studio: MCP 도구를 제공하고 로컬 웹 UI에 Evidence를 기록했습니다.

[← 모든 케이스로 돌아가기](../../README.ko.md) · 도구 및 통합

[English](../rea-studio.md) · [简体中文](../zh-CN/rea-studio.md) · [繁體中文](../zh-TW/rea-studio.md) · [日本語](../ja/rea-studio.md) · [한국어](../ko/rea-studio.md) · [Español](../es/rea-studio.md) · [Français](../fr/rea-studio.md) · [Deutsch](../de/rea-studio.md) · [Português (Brasil)](../pt-BR/rea-studio.md) · [Русский](../ru/rea-studio.md) · [العربية](../ar/rea-studio.md) · [हिन्दी](../hi/rea-studio.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** theyishaik-lab
- **소스 검토 날짜:** 2026-11-03
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** REA MCP 도구 검색, 스키마 생성 양식 및 작은 C, JavaScript 및 Python 샘플

## 질문

로컬 인터페이스는 어떻게 설치된 REA 도구를 노출하고 해당 도구의 증거와 제한 사항을 읽을 수 있게 만들 수 있습니까?

## REA가 한 일

백엔드는 stdio MCP를 통해 REA를 실행하고 tools/list에 페이지를 매긴 다음 진행 및 취소 신호와 함께 tools/call를 전달합니다. 기록 스크립트는 작은 샘플 아티팩트에 대해 REA를 호출하고 별도의 정적 데모 빌드를 위해 결과를 저장합니다.

## 저자 보고 결과

공개 소스에는 로컬 웹 인터페이스, 스키마 기반 입력, 기록 및 Evidence 보기가 포함됩니다. 체크인된 데모 아티팩트는 REA 6.8.0를 식별하고 229-tool 카탈로그와 9 기록된 샘플 실행(8 완료, 1 오류)을 제공합니다. 지원되지 않는 데모 작업은 명시적인 기록되지 않은 오류를 반환합니다.

## 제한 사항 및 확인되지 않은 주장

호스팅된 데모에서는 저장된 응답과 시뮬레이션된 진행 상황을 재생합니다. 업로드는 브라우저에 남아 있으며 분석되지 않습니다. 녹음은 독립적인 재방송이 아닌 저자가 출판한 것입니다. 로컬 사용은 호스트 파일에서 도구를 호출할 수 있으며 구성된 공급자에 따라 다릅니다. 카탈로그가 백엔드를 설치 또는 테스트하지 않았으며 보안 감사를 설정하지 않았습니다.

## 무엇을 배울 것인가

라이브 도구 스키마에서 양식을 생성하고, 결과 보기의 제한 사항을 유지하고, 기록된 데모와 라이브 분석을 명확하게 구분합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Keeps one MCP stdio session with REA alive and exposes its tool catalog.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/server/rea.js)
- [프로젝트/데모](https://github.com/theyishaik-lab/rea-studio)
- [추가 소스 1](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/README.md)
- [추가 소스 2](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/scripts/record-demo.mjs)
- [추가 소스 3](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/demo/recordings.json)
- [추가 소스 4](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/api/demo.js)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
