# Open Scrantic: Rust에서 Johnny Castaway 화면 보호기 엔진 재구축

[← 모든 케이스로 돌아가기](../../README.ko.md) · 게임

[English](../open-scrantic.md) · [简体中文](../zh-CN/open-scrantic.md) · [繁體中文](../zh-TW/open-scrantic.md) · [日本語](../ja/open-scrantic.md) · [한국어](../ko/open-scrantic.md) · [Español](../es/open-scrantic.md) · [Français](../fr/open-scrantic.md) · [Deutsch](../de/open-scrantic.md) · [Português (Brasil)](../pt-BR/open-scrantic.md) · [Русский](../ru/open-scrantic.md) · [العربية](../ar/open-scrantic.md) · [हिन्दी](../hi/open-scrantic.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** glauberlima
- **소스 검토 날짜:** 2026-10-26
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 화면 장난: Johnny Castaway(1992), Windows 3.1 SCRANTIC.SCR 및 일치하는 리소스 파일

## 질문

16-bit 화면 보호기의 스크립트 해석기, 스토리 일정 및 무작위 동작을 최신 시스템에서 어떻게 실행할 수 있습니까?

## REA가 한 일

개발자는 SCRANTIC.SCR 분해 및 디컴파일, 리소스 형식 및 스크립트 의미 복구, Rust 구현 및 문서 생성에 대해 Claude Code와 REA를 명시적으로 인정합니다.

## 저자 보고 결과

공개 Rust 엔진은 리소스 로딩, TTM/ADS 스크립트 실행, 스토리 진행, 타이밍 및 원래 난수 생성기를 구현합니다. ENGINE.md는 복구된 규칙과 의도적인 차이점을 기록합니다. 저자는 Windows, macOS 및 Linux 릴리스 경로를 제공합니다.

## 제한 사항 및 확인되지 않은 주장

엔진은 사용자 자신의 일치하는 원본 파일을 요구하고 다른 실행 가능한 빌드를 거부합니다. 풀프레임 다시 그리기, 옵션 image/audio 처리 및 설정이 원본과 다릅니다. 플랫폼 간 동작 및 동등성은 여기서 독립적으로 테스트되지 않았습니다. 검토된 파일에서 원시 REA 세션을 찾을 수 없습니다.

## 무엇을 배울 것인가

원래 자산 소유권을 엔진 코드와 별도로 유지하고, 산술 및 일정 규칙을 보존하고, 의도적인 호환성 차이를 문서화합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Together they were used to disassemble and decompile the original
`SCRANTIC.SCR`, recover the resource formats and script semantics, and write the Rust code, tests and
documentation.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md)
- [프로젝트/데모](https://github.com/glauberlima/open-scrantic)
- [추가 소스 1](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/docs/ENGINE.md)
- [추가 소스 2](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/rng.rs)
- [추가 소스 3](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/config.rs)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
