# iCSee localmod: 스톡 드라이버를 유지하면서 카메라 명령 추적

[← 모든 케이스로 돌아가기](../../README.ko.md) · 하드웨어 및 호환성

[English](../icsee-localmod.md) · [简体中文](../zh-CN/icsee-localmod.md) · [繁體中文](../zh-TW/icsee-localmod.md) · [日本語](../ja/icsee-localmod.md) · [한국어](../ko/icsee-localmod.md) · [Español](../es/icsee-localmod.md) · [Français](../fr/icsee-localmod.md) · [Deutsch](../de/icsee-localmod.md) · [Português (Brasil)](../pt-BR/icsee-localmod.md) · [Русский](../ru/icsee-localmod.md) · [العربية](../ar/icsee-localmod.md) · [हिन्दी](../hi/icsee-localmod.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** Vittuu
- **소스 검토 날짜:** 2026-11-03
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** XM530V200 / IPG-X2-WQ-BL 카메라 1대 및 기본 Sofia 애플리케이션

## 질문

작동 중인 드라이버와 SD 녹화를 유지하면서 기본 명령 연구를 통해 로컬 카메라 제어를 어떻게 활성화할 수 있습니까?

## REA가 한 일

REA 6.8.0 및 Ghidra는 Sofia 명령 문자열과 조명 및 PTZ 핸들러에 대한 상호 참조를 추적했습니다. 게시된 워크플로는 바이너리별 앵커를 기록합니다. 프로토콜 응답과 물리적 동작은 별도로 검증되었습니다.

## 저자 보고 결과

저자는 로컬 C panel/API, 소스 및 Home Assistant 예제를 게시합니다. 소유자는 물리적 PTZ 및 백색 LED 검사, 디코딩된 audio/video, 부팅 지속성 및 독립적인 재시작 후 지속적인 기본 WFS 녹화를 보고합니다. 별도의 공개 시뮬레이션 백엔드 기록에는 22가 통과한 테스트가 나열되어 있으며 hardware_tested=false라고 명시되어 있습니다.

## 제한 사항 및 확인되지 않은 주장

전체 펌웨어, 디컴파일 및 개인 Evidence 번들은 게시되지 않습니다. 하드웨어 결과는 한 장치에 대한 소유자 보고서입니다. 시뮬레이션 테스트에서는 펌웨어 설치나 물리적 동작을 검증하지 않습니다. 이는 범용 이미지, 완전한 인터콤 또는 측정된 대기 시간 개선이 없는 기본 펌웨어의 확장입니다. 경로 제거 가드는 방화벽이 아닙니다. 이 카탈로그는 장치를 테스트하지 않았습니다.

## 무엇을 배울 것인가

제한된 명령을 추적하고 인증된 응답을 확인한 다음 별도의 단계로 물리적 동작과 지속성을 확인합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> REA/Ghidra supported analysis; Codex assisted with development and writing.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/REA-GHIDRA-WORKFLOW.md)
- [프로젝트/데모](https://github.com/Vittuu/icsee-localmod)
- [추가 소스 1](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/README.md)
- [추가 소스 2](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/VALIDATION.md)
- [추가 소스 3](https://github.com/Vittuu/icsee-localmod/blob/52f0ca06064faa2e62ee6d9c600f048bd1768207/docs/simulation-validation.json)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
