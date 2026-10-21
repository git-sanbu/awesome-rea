# bzip2: 기호화된 빌드에 대해 제거된 바이너리 결과 확인

[← 모든 케이스로 돌아가기](../../README.ko.md) · 분석 및 평가

[English](../bzip2-groundtruth.md) · [简体中文](../zh-CN/bzip2-groundtruth.md) · [繁體中文](../zh-TW/bzip2-groundtruth.md) · [日本語](../ja/bzip2-groundtruth.md) · [한국어](../ko/bzip2-groundtruth.md) · [Español](../es/bzip2-groundtruth.md) · [Français](../fr/bzip2-groundtruth.md) · [Deutsch](../de/bzip2-groundtruth.md) · [Português (Brasil)](../pt-BR/bzip2-groundtruth.md) · [Русский](../ru/bzip2-groundtruth.md) · [العربية](../ar/bzip2-groundtruth.md) · [हिन्दी](../hi/bzip2-groundtruth.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** CassieFox23
- **소스 검토 날짜:** 2026-10-19
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** bzip2 1.0.8 gcc -O2로 컴파일되고 제거됨, Linux x86-64

## 질문

출력 문자열에서 함수를 찾고 호출 관계를 확인하려면 어떻게 해야 합니까?

## REA가 한 일

REA 6.4.0 및 Ghidra는 문자열에서 함수를 찾고, 호출자와 호출 수신자를 나열하고, observed/derived. 레이블이 붙은 Evidence를 반환합니다. 작성자는 소스 코드 nm 및 objdump를 사용하여 동일한 소스에서 스트립되지 않은 빌드를 별도로 확인합니다.

## 저자 보고 결과

저자는 참조 빌드와 일치하는 1 호출자와 24 호출 수신자를 사용하여 압축 해제 결과를 보고합니다. 빌드 단계, 잘린 MCP 레코드 및 두 가지 오류 응답 클래스가 공개됩니다.

## 제한 사항 및 확인되지 않은 주장

도구 비교 없이 하나의 프로그램, 컴파일 설정 및 기능. 24 에지는 전체 런타임 그래프가 아닌 공급자 확인 직접 호출입니다. 전체 클라이언트 스크립트는 공개되지 않습니다. 아카이브에는 기록된 해시가 있지만 서명 확인은 없습니다. 이 카탈로그는 재실행되지 않았습니다.

## 무엇을 배울 것인가

일치하는 기호화된 빌드와 별도의 관찰, 추론 및 참조 확인을 통해 실제 정보를 구축합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> REA's function, one caller and 24 callees all matched an unstripped build and the source.

## 원본 소스

- [공개 토론/검토 시 편집 가능](https://github.com/morluto/rea/discussions/2254)
- [프로젝트/데모](https://github.com/morluto/rea/discussions/2254)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
