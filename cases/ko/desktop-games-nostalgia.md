# Desktop Games: 데스크탑 장난감을 macOS 및 브라우저로 포팅

[← 모든 케이스로 돌아가기](../../README.ko.md) · 게임

[English](../desktop-games-nostalgia.md) · [简体中文](../zh-CN/desktop-games-nostalgia.md) · [繁體中文](../zh-TW/desktop-games-nostalgia.md) · [日本語](../ja/desktop-games-nostalgia.md) · [한국어](../ko/desktop-games-nostalgia.md) · [Español](../es/desktop-games-nostalgia.md) · [Français](../fr/desktop-games-nostalgia.md) · [Deutsch](../de/desktop-games-nostalgia.md) · [Português (Brasil)](../pt-BR/desktop-games-nostalgia.md) · [Русский](../ru/desktop-games-nostalgia.md) · [العربية](../ar/desktop-games-nostalgia.md) · [हिन्दी](../hi/desktop-games-nostalgia.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** ucodia
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Gemtree의 2000 데스크탑 게임/스트레스 감소기 Windows 프로그램

## 질문

Peter 인터프리터, 프로그램 트리, 상호 작용 및 자산을 어떻게 이해하고 이식할 수 있습니까?

## REA가 한 일

저자는 Claude Code, REA 및 Ghidra를 사용합니다. REA는 인터프리터의 이미지 압축, 리소스 레이아웃, 타이밍, 스프라이트 이동, 사운드 및 좌표를 조사합니다. Python 도구는 프로그램 트리와 자산을 처리합니다.

## 저자 보고 결과

공개 저장소에는 Swift macOS 버전, 브라우저 버전, 디컴파일된 프로그램 트리 및 자산 처리 스크립트가 포함되어 있습니다.

## 제한 사항 및 확인되지 않은 주장

저자는 원래 팔레트 대신 트루 컬러를 사용하고 그림자 렌더링을 변경합니다. 포함한다고 해서 제3자 자산에 대한 완전한 호환성이나 재배포 권한이 확인되지는 않습니다.

## 무엇을 배울 것인가

인터프리터가 내장된 소프트웨어의 경우 인터프리터, 프로그램 트리 및 자산을 구분합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> The interpreter was decompiled with REA

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md)
- [프로젝트/데모](https://github.com/ucodia/desktop-games-nostalgia)
- [추가 소스 1](https://ucodia.github.io/desktop-games-nostalgia/)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
