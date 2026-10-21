# rea-groundtruth: 알려진 소스에 대한 분석 사각지대 확인

[← 모든 케이스로 돌아가기](../../README.ko.md) · 분석 및 평가

[English](../rea-groundtruth.md) · [简体中文](../zh-CN/rea-groundtruth.md) · [繁體中文](../zh-TW/rea-groundtruth.md) · [日本語](../ja/rea-groundtruth.md) · [한국어](../ko/rea-groundtruth.md) · [Español](../es/rea-groundtruth.md) · [Français](../fr/rea-groundtruth.md) · [Deutsch](../de/rea-groundtruth.md) · [Português (Brasil)](../pt-BR/rea-groundtruth.md) · [Русский](../ru/rea-groundtruth.md) · [العربية](../ar/rea-groundtruth.md) · [हिन्दी](../hi/rea-groundtruth.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** UnknownHacker1
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** MongoDB Compass 1.43.4 및 필기 Electron 고정 장치

## 질문

IPC 호출이나 창이 0이라는 보고는 앱이나 분석 공백을 반영합니까?

## REA가 한 일

REA 6.4.0는 소스가 알려진 앱을 분석합니다. 다양한 웹팩 래퍼를 사용한 최소 예제는 컨트롤을 제공합니다.

## 저자 보고 결과

저자는 특정 웹팩 형식에서 누락된 Electron API의 단일 명령 복제를 게시하고 서명 후 ASAR 무결성 불일치가 어떻게 처리되었는지 기록합니다.

## 제한 사항 및 확인되지 않은 주장

이 보고서는 Windows 11 및 REA 6.4.0.의 특정 빌드에 관한 것입니다. 최신 버전에서는 문제가 해결될 수 있습니다. 이 카탈로그는 최신 버전에서 과거 버그가 지속된다고 주장하지 않습니다.

## 무엇을 배울 것인가

0개의 결과가 부재를 입증하지 않습니다. 소스가 알려진 설비는 분석기 적용 범위를 테스트할 수 있습니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Tested with rea-agents 6.4.0 on Windows 11 x64, Node 22.22.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md)
- [프로젝트/데모](https://github.com/UnknownHacker1/rea-groundtruth)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
