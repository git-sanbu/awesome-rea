# Ski or Die: Rust에서 Snowball War 재구축

[← 모든 케이스로 돌아가기](../../README.ko.md) · 게임

[English](../ski-or-die.md) · [简体中文](../zh-CN/ski-or-die.md) · [繁體中文](../zh-TW/ski-or-die.md) · [日本語](../ja/ski-or-die.md) · [한국어](../ko/ski-or-die.md) · [Español](../es/ski-or-die.md) · [Français](../fr/ski-or-die.md) · [Deutsch](../de/ski-or-die.md) · [Português (Brasil)](../pt-BR/ski-or-die.md) · [Русский](../ru/ski-or-die.md) · [العربية](../ar/ski-or-die.md) · [हिन्दी](../hi/ski-or-die.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** tuunanet
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Ski or Die DOS 에디션의 Snowball War 미니게임

## 질문

DOS 게임에서 던지기, 충돌, 생성 및 득점 규칙을 어떻게 복구할 수 있습니까?

## REA가 한 일

REA CLI 및 Ghidra 16-bit 어댑터는 압축이 풀린 MZ 로드 이미지를 검사합니다. 호출자가 선언한 코드 시드와 trace/function/search 쿼리는 모듈을 조사합니다.

## 저자 보고 결과

저자는 플레이 가능한 Rust + SDL2 재구성, 동작 사양, 리버스 엔지니어링 노트 및 자산 추출 도구를 게시합니다.

## 제한 사항 및 확인되지 않은 주장

Snowball War만 재구성됩니다. 실행 중인 DOS 원본과 오디오 재생 또는 병렬 비교가 없습니다. 프레임 속도와 PRNG 동작은 근사치입니다. 자산은 독자 자신의 게임 사본에서 가져와야 합니다.

## 무엇을 배울 것인가

다시 쓰기 전에 주소 지원 동작 사양을 작성하고 각 근사값에 레이블을 지정합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Every analysis call therefore ran through the REA CLI

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md)
- [프로젝트/데모](https://github.com/tuunanet/rea-ski-or-die-reconstruction)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
