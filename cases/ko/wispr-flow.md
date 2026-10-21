# Wispr Flow: 음성 입력 분해 및 소형 로컬 프로토타입

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../wispr-flow.md) · [简体中文](../zh-CN/wispr-flow.md) · [繁體中文](../zh-TW/wispr-flow.md) · [日本語](../ja/wispr-flow.md) · [한국어](../ko/wispr-flow.md) · [Español](../es/wispr-flow.md) · [Français](../fr/wispr-flow.md) · [Deutsch](../de/wispr-flow.md) · [Português (Brasil)](../pt-BR/wispr-flow.md) · [Русский](../ru/wispr-flow.md) · [العربية](../ar/wispr-flow.md) · [हिन्दी](../hi/wispr-flow.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** az9713
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Wispr Flow 1.6.1102 Electron 패키지 및 기본 도우미

## 질문

녹음, 전사, 컨텍스트 및 붙여넣기는 어떻게 연결됩니까?

## REA가 한 일

이 보고서는 REA CLI JavaScript 정적 분석, 직접 번들 읽기 및 도우미 붙여넣기 코드 REA + Ghidra 조사를 결합합니다. 주장은 입증됨, 추론됨, 숨김으로 표시됩니다.

## 저자 보고 결과

저자는 분해, 보충 Ghidra 조사, 개발 기록 및 로컬 flowlite.py 프로토타입을 게시합니다.

## 제한 사항 및 확인되지 않은 주장

처음 두 개의 MCP 호출이 시간 초과되었습니다. 일부 결론은 다른 도구나 수동 코드 판독을 통해 도출됩니다. 원래 앱이 실행되지 않았고 네트워크 트래픽이 캡처되지 않았으므로 서버 모델과 동작은 숨겨진 상태로 유지됩니다. 프로토타입에는 컨텍스트, 스트리밍 및 전체 유효성 검사가 생략되어 있습니다.

## 무엇을 배울 것인가

실패와 보충 도구를 기록합니다. 클라이언트 분석은 서버 측 모델의 작동 방식을 설정할 수 없습니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Wispr Flow, reverse engineered with REA

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md)
- [프로젝트/데모](https://github.com/az9713/wispr-flow-rea-teardown)
- [추가 소스 1](https://az9713.github.io/wispr-flow-rea-teardown/wispr-flow-teardown.html)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
