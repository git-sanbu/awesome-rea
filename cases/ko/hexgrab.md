# hexgrab: PowerToys 색상 선택기 조사 중

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../hexgrab.md) · [简体中文](../zh-CN/hexgrab.md) · [繁體中文](../zh-TW/hexgrab.md) · [日本語](../ja/hexgrab.md) · [한국어](../ko/hexgrab.md) · [Español](../es/hexgrab.md) · [Français](../fr/hexgrab.md) · [Deutsch](../de/hexgrab.md) · [Português (Brasil)](../pt-BR/hexgrab.md) · [Русский](../ru/hexgrab.md) · [العربية](../ar/hexgrab.md) · [हिन्दी](../hi/hexgrab.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** iammukeshm
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Microsoft PowerToys와 함께 배포되는 색상 선택기 바이너리

## 질문

전역 단축키, 픽셀 샘플링 및 클립보드는 어떻게 함께 작동합니까?

## REA가 한 일

저자는 REA를 사용하여 출시된 바이너리를 분석하고, 공개 소스와 비교하여 각 결과를 확인하고, .NET 10/WPF를 사용하여 더 작은 독립 색상 선택기를 구축합니다.

## 저자 보고 결과

공개 소스와 docs/rea-findings.md가 제공됩니다. 저자는 9 조사 결과 중 8가 완전히 정확했다고 보고합니다.

## 제한 사항 및 확인되지 않은 주장

125% 스케일링으로 하나의 모니터에서만 테스트되었습니다. 혼합 DPI 다중 모니터 동작은 실제 하드웨어에서 테스트되지 않았습니다. 8/9 결과는 일반적인 REA 정확도 비율이 아니라 저자가 이 조사를 확인한 결과입니다.

## 무엇을 배울 것인가

도구 결과를 확인할 수 있도록 공개 소스를 사용하여 소프트웨어를 연습합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> to study how the Color Picker in Microsoft PowerToys works from its shipped binaries

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md)
- [프로젝트/데모](https://github.com/iammukeshm/hexgrab)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
