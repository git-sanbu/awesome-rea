# Co-op Anything: 캠페인 멀티플레이어 진입점 조사

[← 모든 케이스로 돌아가기](../../README.ko.md) · 게임

[English](../coop-anything.md) · [简体中文](../zh-CN/coop-anything.md) · [繁體中文](../zh-TW/coop-anything.md) · [日本語](../ja/coop-anything.md) · [한국어](../ko/coop-anything.md) · [Español](../es/coop-anything.md) · [Français](../fr/coop-anything.md) · [Deutsch](../de/coop-anything.md) · [Português (Brasil)](../pt-BR/coop-anything.md) · [Русский](../ru/coop-anything.md) · [العربية](../ar/coop-anything.md) · [हिन्दी](../hi/coop-anything.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** cranebeaker and community contributors
- **소스 검토 날짜:** 2026-10-21
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Steam C&C3 Tiberium Wars / Kane’s Wrath 빌드 및 World in Conflict client/dedicated 서버

## 질문

두 번째 플레이어가 참여하도록 허용하면서 캠페인의 스크립트와 측면을 어떻게 유지할 수 있습니까?

## REA가 한 일

C&C3 노트는 TW 1.10 실행 파일의 REA/Ghidra 12.1.4 관찰을 명시적으로 기록하여 multiplayer/skirmish 준비 중에 캠페인 측면을 제거하는 기능을 찾습니다. World in Conflict 노트는 REA/Ghidra를 통해 전용 서버 역할 선택 분석을 문서화하여 싱글 플레이어 제한 사항, 서버 상태 및 확인되지 않은 추론을 구분합니다. 다른 스크립트, 디버거 및 런타임 테스트는 이후 작업을 처리합니다.

## 저자 보고 결과

이 프로젝트는 MCP/기술, 동기화 테스트 도구 및 게임별 연구를 게시합니다. C&C3 노트에는 주소, 형식, 실험이 포함되어 있습니다. World in Conflict의 경우 작성자는 두 번째 클라이언트가 참여하여 실시간 동기화 장치를 보는 동안 LAN 캠페인 호스트가 임무를 실행하고 있다고 보고하지만 자체 장치를 제어할 수는 없습니다. 각 게임은 자체 QA 수준을 유지합니다.

## 제한 사항 및 확인되지 않은 주장

REA 속성은 검토된 C&C3 및 World in Conflict 조사로 제한되며 디렉토리의 모든 모드가 아닙니다. 플레이어 2 제어, 배포 영역, 가시성 및 인터넷 플레이는 World in Conflict에서 아직 완료되지 않았습니다. 보고서는 LAN만 확인합니다. C&C3에는 해결되지 않은 캠페인 실패 및 상황 문제도 있습니다. Stars는 완전한 캠페인임을 입증하지 못합니다. 이 카탈로그는 게임이나 테스트를 실행하지 않았습니다.

## 무엇을 배울 것인가

클라이언트 연결, 동기화된 가시성 및 진정한 플레이 가능한 협동을 별도의 결과로 검증합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Engine seams (observed in the TW 1.10 exe with REA/Ghidra 12.1.4)

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md)
- [프로젝트/데모](https://github.com/cranebeaker/coop-anything)
- [추가 소스 1](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/README.md)
- [추가 소스 2](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/world-in-conflict/NOTES.md)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
