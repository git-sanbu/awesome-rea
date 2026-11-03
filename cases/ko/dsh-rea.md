# dsh-rea: MCP 계약을 유지하면서 주문형 도구 공개

[← 모든 케이스로 돌아가기](../../README.ko.md) · 도구 및 통합

[English](../dsh-rea.md) · [简体中文](../zh-CN/dsh-rea.md) · [繁體中文](../zh-TW/dsh-rea.md) · [日本語](../ja/dsh-rea.md) · [한국어](../ko/dsh-rea.md) · [Español](../es/dsh-rea.md) · [Français](../fr/dsh-rea.md) · [Deutsch](../de/dsh-rea.md) · [Português (Brasil)](../pt-BR/dsh-rea.md) · [Русский](../ru/dsh-rea.md) · [العربية](../ar/dsh-rea.md) · [हिन्दी](../hi/dsh-rea.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** JeremyWangCY
- **소스 검토 날짜:** 2026-11-03
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** REA 6.8.0 MCP DeepSeek Harness 내부 도구, 프롬프트 및 기술

## 질문

어댑터는 어떻게 각 에이전트 요청에서 사용되지 않는 스키마를 유지하면서 업스트림 도구 계약을 보존할 수 있습니까?

## REA가 한 일

어댑터는 DSH 브리지를 통해 고정된 업스트림 MCP 실행 파일을 시작하고 프롬프트 및 완료를 위해 연결을 공유하며 에이전트별 도구 마스크를 사용합니다. /rea 명령은 카탈로그와 스킬을 표시합니다. /rea off는 다시 숨깁니다.

## 저자 보고 결과

저자는 229 도구와 기본 및 PTC 모드의 결정적 호출 비교를 나열하는 어댑터 코드, 스키마 측정 및 제한된 차등 보고서를 게시합니다. 측정된 모델 입력 카탈로그는 273,264 바이트입니다. 이는 LLM 토큰이나 비용 벤치마크가 아닌 스키마 페이로드 측정입니다.

## 제한 사항 및 확인되지 않은 주장

저장소에는 통과 비교 보고서와 확인 명령의 Windows integrity_mismatch 오류에 대한 별도의 문서가 포함되어 있습니다. 카탈로그 관리자는 Windows에서 성공적인 검증 실행을 확인하지 않았습니다. 도구 정의가 일치한다고 해서 모든 도구가 실행되었다는 의미는 아닙니다. 보고된 비교에는 기본 엔진, 라이브 캡처 또는 모든 공급자가 포함되지 않으며 동등한 언어 모델 응답을 설정하지 않습니다. 카탈로그 유지관리자는 이러한 테스트를 실행하지 않았습니다.

## 무엇을 배울 것인가

스키마를 비교하고 결정론적 결과 봉투를 완성하고 과거 통과 기록을 유지하며 현재 오류를 별도로 공개합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> REA is an exact npm dependency, not a reimplementation.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/README.md)
- [프로젝트/데모](https://github.com/JeremyWangCY/dsh-rea)
- [추가 소스 1](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/README.md)
- [추가 소스 2](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/index.js)
- [추가 소스 3](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/lib/gate.js)
- [추가 소스 4](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/integration-report.json)
- [추가 소스 5](https://github.com/JeremyWangCY/dsh-rea/blob/6f4f0fb52533664baa98adb7bd50f20492bfb7e7/verification/schema-measurement.json)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
