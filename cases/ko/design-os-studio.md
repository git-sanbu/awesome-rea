# DESIGN:OS Studio: Figma .fig 파일을 읽고 쓰는 독립 데스크톱 스튜디오

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../design-os-studio.md) · [简体中文](../zh-CN/design-os-studio.md) · [繁體中文](../zh-TW/design-os-studio.md) · [日本語](../ja/design-os-studio.md) · [한국어](../ko/design-os-studio.md) · [Español](../es/design-os-studio.md) · [Français](../fr/design-os-studio.md) · [Deutsch](../de/design-os-studio.md) · [Português (Brasil)](../pt-BR/design-os-studio.md) · [Русский](../ru/design-os-studio.md) · [العربية](../ar/design-os-studio.md) · [हिन्दी](../hi/design-os-studio.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** jangtrinh
- **소스 검토 날짜:** 2026-11-10
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Figma Desktop과 Figma .fig 컨테이너 형식(fig-kiwi, 쓰기 버전 106)

## 질문

독립 데스크톱 스튜디오에서 Figma .fig 컨테이너를 읽고 쓰며 편집기 동작을 재구현하려면 어떻게 해야 하는가?

## REA가 한 일

공개 사양은 Figma 필드 리버스 엔지니어링 도구로 morluto/rea 6.7.0(`npx -y rea-agents`)을 지목하고, 추출한 편집기 JavaScript에 analyze-javascript-application을 실행했다고 기록한다. 같은 설명은 wasm 경로를 당시 쓸 수 없었고(WABT와 Ghidra 미설치) kiwi 스키마는 로컬 리더로 디코딩했다고 한다. 저장된 보고서에는 완료된 inspect-macho 및 analyze-javascript-application rea CLI 출력과 일부 실패한 호출도 있다. 제품 README는 REA를 언급하지 않는다.

## 저자 보고 결과

DESIGN:OS Studio는 공개된 데스크톱 스튜디오(검토한 버전 v0.7.11)로, Figma .fig 컨테이너를 읽고 컨테이너 버전 106을 쓰며, 편집기 동작을 로컬에서 재구현하고, 39개 도구의 stdio MCP 서버와 다국어 코드 생성을 포함한다. README는 macOS CI의 6,000개 이상 테스트와 designos-fig 왕복 테스트를 보고한다. 유지관리자는 이 Figma 작업에 REA를 사용했다고 밝힌다. 이 목록은 공개 사양, 저장된 rea 출력, README를 검토했으며 스튜디오를 설치하거나 rea를 다시 실행하지는 않았다.

## 제한 사항 및 확인되지 않은 주장

제품 README는 REA를 크레딧하지 않는다. 기록된 rea 실행 중 일부는 실패했다(알 수 없는 명령 또는 구성되지 않은 네이티브 분석 제공자). 다른 메모에서 언급된 전체 세션 초안은 저장소 밖에 있다. 알려진 문제 #834는 여전히 열려 있다. .fig를 저장하면 번호 매기기 목록 서식이 사라지고, 인스턴스의 상속 또는 변수 바인딩된 페인트가 고정 값으로 기록된다. 라이선스는 PolyForm Shield 1.0.0(소스 이용 가능, 오픈 소스 라이선스 아님)이다. 이 목록은 .fig 호환성을 독자적으로 재현하지 않았고 테스트 모음도 다시 실행하지 않았다.

## 무엇을 배울 것인가

REA 사용은 제품 README가 침묵해도 프로젝트 사양과 저장된 CLI 증거에 남을 수 있으며, REA의 wasm 경로를 쓸 수 없을 때는 혼합 워크플로에도 로컬 대안이 필요할 수 있다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [프로젝트/데모](https://github.com/jangtrinh/design-os-studio)
- [추가 소스 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [추가 소스 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [추가 소스 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
