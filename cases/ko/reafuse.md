# ReaFuse: 두 라이브러리의 동작을 조사한 후 결합

[← 모든 케이스로 돌아가기](../../README.ko.md) · 학습과 재생산

[English](../reafuse.md) · [简体中文](../zh-CN/reafuse.md) · [繁體中文](../zh-TW/reafuse.md) · [日本語](../ja/reafuse.md) · [한국어](../ko/reafuse.md) · [Español](../es/reafuse.md) · [Français](../fr/reafuse.md) · [Deutsch](../de/reafuse.md) · [Português (Brasil)](../pt-BR/reafuse.md) · [Русский](../ru/reafuse.md) · [العربية](../ar/reafuse.md) · [हिन्दी](../hi/reafuse.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** sickpyramid
- **소스 검토 날짜:** 2026-10-19
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 두 쌍의 오픈 소스 JavaScript 라이브러리: ms + Pretty-bytes 및 dequal + klona

## 질문

어떻게 두 프로젝트가 동작 사양이 되고 새로운 결합 도구가 될 수 있습니까?

## REA가 한 일

REA 6.4.0 JavaScript 정적 분석은 두 개의 입력을 읽습니다. README 파일과 테스트는 동작 사양을 생성하는 데 도움이 됩니다. 모델은 별도로 조합을 제안하고 승인 계약과 새 코드를 작성한 다음 작성자의 테스트와 유사성 스캔을 실행합니다.

## 저자 보고 결과

저자는 ratewise(전송 속도 및 ETA) 및 objdelta(구조적 diff/patch), 보고서 및 Evidence를 출판합니다. 보고된 계약 결과는 18/18 및 17/17와 새로운 도구에 대한 7/7 및 6/6 테스트입니다. 두 사례 모두 하나의 프로젝트 사례로 간주됩니다.

## 제한 사항 및 확인되지 않은 주장

두 개의 공개 JavaScript 예제만 검토되었습니다. 프로젝트는 v0.1 알파입니다. 동일한 워크플로를 통해 사양과 구현이 생성됩니다. 저자의 클린룸 라벨은 독립적인 법적 결론이 아닙니다. 유사성 스캔 및 통과 테스트는 일반적인 독창성 또는 완전한 동등성을 확립하지 않습니다. 이 카탈로그는 재실행되지 않았습니다.

## 무엇을 배울 것인가

동작 사양을 통해 분석을 구현에 연결하고 테스트를 입력 동작 또는 새로운 조합에 매핑합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Every donor goes through REA's static JavaScript analysis

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md)
- [프로젝트/데모](https://github.com/sickpyramid/ReaFuse)
- [추가 소스 1](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/ratewise/REPORT.md)
- [추가 소스 2](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/showcase/objdelta/REPORT.md)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
