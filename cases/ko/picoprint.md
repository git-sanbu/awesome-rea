# PicoPrint: 모바일 감열식 프린터를 Windows 인쇄에 연결

[← 모든 케이스로 돌아가기](../../README.ko.md) · 하드웨어 및 호환성

[English](../picoprint.md) · [简体中文](../zh-CN/picoprint.md) · [繁體中文](../zh-TW/picoprint.md) · [日本語](../ja/picoprint.md) · [한국어](../ko/picoprint.md) · [Español](../es/picoprint.md) · [Français](../fr/picoprint.md) · [Deutsch](../de/picoprint.md) · [Português (Brasil)](../pt-BR/picoprint.md) · [Русский](../ru/picoprint.md) · [العربية](../ar/picoprint.md) · [हिन्दी](../hi/picoprint.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** bigtower17
- **소스 검토 날짜:** 2026-10-19
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** LX-D02 Bluetooth 열전사 프린터 및 Funny Print React Native Android 앱

## 질문

드라이버가 연결되었지만 인쇄되지 않는 경우 핸드셰이크 차이점을 어떻게 찾을 수 있습니까?

## REA가 한 일

REA 토론 #4152에서 저자는 REA 6.5.0가 의사, ADB 장치 검사 및 Android 조사 진입점을 제공했다고 말합니다. 실제 Hermes 바이트코드 디컴파일에는 hermes-dec가 사용되었습니다. 프로토콜 추론과 트래픽 비교는 REA만의 작업이 아니었습니다.

## 저자 보고 결과

저자는 실제 LX-D02를 사용하여 Windows 11에서 텍스트, 이미지 및 문서의 Ctrl+P 인쇄와 업스트림 핸드셰이크 수정 사항을 보고하는 열전사 기반 Go 인쇄 서비스 및 프로토콜 노트를 게시합니다.

## 제한 사항 및 확인되지 않은 주장

원클릭 설치 프로그램, 트레이 상태 또는 자동 재연결이 없는 초기 프로젝트입니다. 토론에서는 REA가 당시 이 대상의 Hermes 분석 단계를 다루지 않았다는 점을 명시적으로 언급합니다. 하나의 장치와 OS가 모든 펌웨어 또는 Windows 버전과 호환되지 않습니다.

## 무엇을 배울 것인가

인쇄와 연결을 구별하고 각 도구가 처리하는 정확한 단계를 기록합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> used to analyse the Android app.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md)
- [프로젝트/데모](https://github.com/bigtower17/picoprint)
- [추가 소스 1](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/doc/lx-d02-app-check.md)
- [추가 소스 2](https://github.com/morluto/rea/discussions/4152)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
