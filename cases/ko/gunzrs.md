# GunZRs: 게임 데이터에서 다시 빌드하기 전에 패킹 경계 식별

[← 모든 케이스로 돌아가기](../../README.ko.md) · 게임

[English](../gunzrs.md) · [简体中文](../zh-CN/gunzrs.md) · [繁體中文](../zh-TW/gunzrs.md) · [日本語](../ja/gunzrs.md) · [한국어](../ko/gunzrs.md) · [Español](../es/gunzrs.md) · [Français](../fr/gunzrs.md) · [Deutsch](../de/gunzrs.md) · [Português (Brasil)](../pt-BR/gunzrs.md) · [Русский](../ru/gunzrs.md) · [العربية](../ar/gunzrs.md) · [हिन्दी](../hi/gunzrs.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** OpenRsG
- **소스 검토 날짜:** 2026-10-21
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** GunZ: Duel Steam 설치, Gunz.exe 및 .mrs 아카이브

## 질문

압축된 실행 파일이 게임 로직의 정적 복구를 방해하는 경우 재구성을 어떻게 계속할 수 있습니까?

## REA가 한 일

REA 및 Ghidra는 기본 파일을 조사합니다. 작성자는 로컬 REA Evidence 경로를 사용하여 Themida 섹션, 항목 RVA 및 압축 풀기 스텁을 Gunz.exe에 기록합니다. 게임 형식은 주로 데이터 파일 구조에서 복구됩니다. 공개 스크립트는 또한 REA 쿼리, 생성된 ELF/PE 고정 장치, 분석, 캐싱 및 오류 전파를 다룹니다.

## 저자 보고 결과

이 프로젝트는 Rust + Bevy 재구성, 형식 메모, 쿼리 스크립트 및 테스트를 게시합니다. 저자는 자체 설치, 지도, 액션, 봇, 브라우저 빌드 및 LAN을 통해 Linux 플레이 가능성을 보고합니다. 생성된 ELF/PE 기능 분석 및 스냅샷-재생 확인은 게임 호환성과 별도로 기록됩니다.

## 제한 사항 및 확인되지 않은 주장

압축된 게임 코드는 정적으로 복구되지 않았으며 일부 동작과 타이밍이 추론됩니다. 원본 Evidence는 작성자의 로컬로 유지됩니다. 공개 자료에는 설명과 스크립트가 포함됩니다. Windows/macOS CI 빌드가 보고되었지만 작성자가 재생하지 않았습니다. 맵 개수는 노트 범위가 다르며 완전한 호환성을 입증하지 않습니다. 이 카탈로그는 재실행되지 않았습니다.

## 무엇을 배울 것인가

분석 실패는 여전히 유용한 경계를 설정할 수 있습니다. 즉, 이진 사실, 데이터 파일 관찰 및 추론을 별도로 레이블링할 수 있습니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> stub (REA evidence under .local/re/a076a5d8…/). Game code is not statically readable

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md)
- [프로젝트/데모](https://github.com/OpenRsG/GunZRs)
- [추가 소스 1](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/README.md)
- [추가 소스 2](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/reverse-engineering.md)
- [추가 소스 3](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/scripts/rea.sh)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
