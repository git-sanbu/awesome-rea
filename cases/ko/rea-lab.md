# rea-lab: Windows 리버스 엔지니어링에 대한 REA의 기여도 측정

[← 모든 케이스로 돌아가기](../../README.ko.md) · 분석 및 평가

[English](../rea-lab.md) · [简体中文](../zh-CN/rea-lab.md) · [繁體中文](../zh-TW/rea-lab.md) · [日本語](../ja/rea-lab.md) · [한국어](../ko/rea-lab.md) · [Español](../es/rea-lab.md) · [Français](../fr/rea-lab.md) · [Deutsch](../de/rea-lab.md) · [Português (Brasil)](../pt-BR/rea-lab.md) · [Русский](../ru/rea-lab.md) · [العربية](../ar/rea-lab.md) · [हिन्दी](../hi/rea-lab.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** pablodiazjorge
- **소스 검토 날짜:** 2026-10-21
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 작은 Windows 챌린지, 미끼가 포함된 대규모 바이너리 및 실제 오픈 소스 프로그램

## 질문

REA를 추가하면 상담원의 성공률, 시간 및 비용에 어떤 영향을 미치나요?

## REA가 한 일

저자는 Windows 및 Ghidra를 설정하고, 사전 등록된 통제 연구를 실행하고, 인용된 Evidence를 확인하고, 글, 환경 및 업스트림 수정 사항을 게시합니다.

## 저자 보고 결과

사전 등록된 5개의 연구가 공개되었습니다. 두 그룹 모두에서 1: 28/30를 연구합니다. 2: REA가 없는 11/24와 REA가 있는 4/24를 연구합니다. 연구 3: 71/72 대 68/72. 연구 4는 DeepSeek를 사용합니다. 20/20 대 19/20는 유의미한 차이가 발견되지 않았습니다. 5 연구에서는 수정된 스킬의 비용이 공식 스킬(p=0.012)보다 14% 더 높으며 정확도에는 큰 변화가 없습니다. 2026-10-21 Evidence-보존 노트는 482 연구 실행, REA를 호출한 336 및 3 재시작 중단 재실행을 구별합니다. 이러한 339 REA 호출 실행은 사전에 유지되지 않습니다. Evidence; 채점자는 고객 기록에서 그것을 재구성했습니다.

## 제한 사항 및 확인되지 않은 주장

모든 연구는 REA 6.4.0, Claude Code 2.1.296 및 해당 모델, 작업 및 권한을 고정합니다. 결과는 현재 버전이나 모든 리버스 엔지니어링으로 일반화될 수 없습니다. 연구 2 및 3 성공률 차이는 저자의 테스트에서 통계적으로 유의미하지 않았습니다. 연구 3 Evidence 인증은 그레이더 수정 후 142/144에서 144/144로 수정되었습니다. 해결 횟수는 변경되지 않았습니다. 연구 4에는 20 쌍만 있습니다. 연구 5는 자동 클라이언트 로딩이 아닌 프롬프트에 삽입된 기술 텍스트를 비교합니다. 이 카탈로그는 연구를 재실행하지 않았습니다. 339 수는 전체 연구 샘플이 아닌 REA 호출 실행이며, Evidence 콘텐츠 누락이나 인증 실패를 의미하지 않습니다.

## 무엇을 배울 것인가

제어, 작업 분배, 비용 및 증거 품질을 함께 평가합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Study 1, preregistered: on ten small Windows crackmes, rea did not change how many Claude Code solved

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md)
- [프로젝트/데모](https://github.com/pablodiazjorge/rea-lab)
- [추가 소스 1](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/README.md)
- [추가 소스 2](https://github.com/pablodiazjorge/rea-lab/blob/8796545134a00023b0fba3d75dbbaf77a9be68d8/README.md)
- [추가 소스 3](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-4/README.md)
- [추가 소스 4](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-5/README.md)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
