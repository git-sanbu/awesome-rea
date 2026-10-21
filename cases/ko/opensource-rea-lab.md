# Open-source REA Lab: npm 아티팩트 고정 및 해당 항목 슬라이스 분석

[← 모든 케이스로 돌아가기](../../README.ko.md) · 분석 및 평가

[English](../opensource-rea-lab.md) · [简体中文](../zh-CN/opensource-rea-lab.md) · [繁體中文](../zh-TW/opensource-rea-lab.md) · [日本語](../ja/opensource-rea-lab.md) · [한국어](../ko/opensource-rea-lab.md) · [Español](../es/opensource-rea-lab.md) · [Français](../fr/opensource-rea-lab.md) · [Deutsch](../de/opensource-rea-lab.md) · [Português (Brasil)](../pt-BR/opensource-rea-lab.md) · [Русский](../ru/opensource-rea-lab.md) · [العربية](../ar/opensource-rea-lab.md) · [हिन्दी](../hi/opensource-rea-lab.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** martinlofranodeoliveira
- **소스 검토 날짜:** 2026-10-19
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 공식 npm 리에이전트 6.4.0 package.json 및 scripts/rea.mjs

## 질문

제한된 항목 파일 질문에 답하기 전에 릴리스 아티팩트를 어떻게 식별할 수 있습니까?

## REA가 한 일

독립적인 Python 감사자가 먼저 아카이브 구조와 해시를 확인합니다. REA는 검증된 패키지에서 추출된 변경되지 않은 두 개의 파일을 정적으로 분석합니다. 항목 분기 의미론은 수동 구문 검사도 사용합니다. 감사자와 수동 결론은 REA 출력이 아닙니다.

## 저자 보고 결과

작성자는 고정된 다이제스트, 감사 JSON, 삭제된 Evidence 요약 및 재생 스크립트를 게시합니다. 슬라이스는 1 구문 분석된 JavaScript 파일, 469 AST 노드, 14 결과 및 제로 구문 분석 실패를 보고하는 동시에 의미 체계 확장 중에 전체 패키지 분석이 중단되었음을 나타냅니다.

## 제한 사항 및 확인되지 않은 주장

14 조사 결과는 취약점 개수가 아닙니다. 슬라이스는 110 의미론적 알 수 없음을 유지하고 dist 구현이 부족하므로 전체 패키지 보안 또는 런타임 정확성을 설정할 수 없습니다. 삭제된 요약은 재생할 수 없는 표준 Evidence입니다. 전체 패키지 적용 범위는 부분적입니다. 이 카탈로그는 재실행되지 않았습니다.

## 무엇을 배울 것인가

중단 사항과 알 수 없는 사항을 유지하면서 질문과 입력을 묶습니다. 구조적 검사, 바이트 ID 및 런타임 안전성은 서로 다른 결론입니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Can REA statically parse the actual shipped dispatcher?

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md)
- [프로젝트/데모](https://github.com/martinlofranodeoliveira/opensource-rea-lab)
- [추가 소스 1](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/rea-excerpt.json)
- [추가 소스 2](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/README.md)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
