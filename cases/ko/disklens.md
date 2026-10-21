# DiskLens: 릴리스된 바이너리에서 디스크 검색 및 트리맵 알고리즘 확인

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../disklens.md) · [简体中文](../zh-CN/disklens.md) · [繁體中文](../zh-TW/disklens.md) · [日本語](../ja/disklens.md) · [한국어](../ko/disklens.md) · [Español](../es/disklens.md) · [Français](../fr/disklens.md) · [Deutsch](../de/disklens.md) · [Português (Brasil)](../pt-BR/disklens.md) · [Русский](../ru/disklens.md) · [العربية](../ar/disklens.md) · [हिन्दी](../hi/disklens.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** KarlssonChristoffer
- **소스 검토 날짜:** 2026-10-19
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** WinDirStat 2.5.0 Windows 실행 파일 및 공개 소스

## 질문

새 인터페이스를 구축하기 전에 디스크 스캐닝, 트리맵 및 중복 감지를 어떻게 확인할 수 있습니까?

## REA가 한 일

Claude Code는 설치된 WinDirStat.exe에서 REA 및 Ghidra를 사용하여 디렉터리 열거, NTFS MFT 리더, 트리맵 기본값 및 SHA-512 중복 제거를 확인합니다. 저자는 알고리즘 세부 사항이 대부분 소스를 읽는 데서 나왔다고 말합니다. REA는 공개된 바이너리를 확인하고 조사를 안내했습니다.

## 저자 보고 결과

이 프로젝트는 Rust 엔진, Tauri/Svelte 인터페이스 및 REA Evidence ID를 게시합니다. 저자는 하나의 시스템에서 대략 1.3백만 개의 파일에 대한 24 엔진 테스트와 scan/treemap 검사를 보고합니다.

## 제한 사항 및 확인되지 않은 주장

작성자는 생성된 코드를 명시적으로 검토하지 않았습니다. 여러 파일 작업 및 시스템 통합에는 실제 UI 검사가 부족합니다. 빠른 MFT 스캐닝이 없으며 하드 링크가 이중으로 계산됩니다. 일부 알고리즘은 GPL 소스를 직접 포팅하므로 이는 비공개 소스 소프트웨어를 클린룸으로 재구성한 것이 아닙니다. 단일 머신 타이밍은 제어된 성능 비교가 아닙니다.

## 무엇을 배울 것인가

이진 관찰과 소스 읽기를 별도로 지정하고 어떤 파일 작업이 실제로 테스트되었는지 명시합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Claude used REA on the WinDirStat 2.5.0 installed on my PC

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md)
- [프로젝트/데모](https://github.com/KarlssonChristoffer/DiskLens)
- [추가 소스 1](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/docs/research.md)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
