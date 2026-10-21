# OpenBSD netcat: 배송된 ELF의 정적 분석

[← 모든 케이스로 돌아가기](../../README.ko.md) · 분석 및 평가

[English](../netcat-analysis.md) · [简体中文](../zh-CN/netcat-analysis.md) · [繁體中文](../zh-TW/netcat-analysis.md) · [日本語](../ja/netcat-analysis.md) · [한국어](../ko/netcat-analysis.md) · [Español](../es/netcat-analysis.md) · [Français](../fr/netcat-analysis.md) · [Deutsch](../de/netcat-analysis.md) · [Português (Brasil)](../pt-BR/netcat-analysis.md) · [Русский](../ru/netcat-analysis.md) · [العربية](../ar/netcat-analysis.md) · [हिन्दी](../hi/netcat-analysis.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** NullLabTests
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 우분투 netcat-openbsd 1.234-1 바이너리

## 질문

배송된 netcat 바이너리에는 어떤 네트워크, 프록시 및 보안 관련 구현이 포함되어 있습니까?

## REA가 한 일

REA의 pwntools 레이아웃 검사와 Ghidra 경로는 교차 검사에 사용되는 readelf, objdump, nm 및 문자열을 사용하여 동일한 이미지를 분석합니다.

## 저자 보고 결과

저자는 files/. 아래에 함수, 문자열 및 호출 경로 조사, results.txt 및 원시 JSON 출력을 게시합니다.

## 제한 사항 및 확인되지 않은 주장

이는 특정 빌드에 대한 정적 분석입니다. 가져오기 및 의사코드만으로는 모든 런타임 동작을 설정하거나 보안 인증을 구성하지 않습니다.

## 무엇을 배울 것인가

결론을 검토할 수 있도록 독립적인 도구 검사와 함께 원본 REA 출력을 보관하세요.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> We ran two providers against the same image and cross-checked with readelf, objdump, nm, and strings.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md)
- [프로젝트/데모](https://github.com/NullLabTests/OpenBSD_netcat_REA)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
