# REA on REA: 도구 조사 및 예측 테스트

[← 모든 케이스로 돌아가기](../../README.ko.md) · 분석 및 평가

[English](../rea-on-rea.md) · [简体中文](../zh-CN/rea-on-rea.md) · [繁體中文](../zh-TW/rea-on-rea.md) · [日本語](../ja/rea-on-rea.md) · [한국어](../ko/rea-on-rea.md) · [Español](../es/rea-on-rea.md) · [Français](../fr/rea-on-rea.md) · [Deutsch](../de/rea-on-rea.md) · [Português (Brasil)](../pt-BR/rea-on-rea.md) · [Русский](../ru/rea-on-rea.md) · [العربية](../ar/rea-on-rea.md) · [हिन्दी](../hi/rea-on-rea.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** az9713
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 설치된 리에이전트 6.3.0 패키지

## 질문

REA는 기본 분석 제공자를 어떻게 선택하고 사용할 수 없는 제공자를 감지합니까?

## REA가 한 일

REA는 자체 디렉터리 5개를 정적으로 분석합니다. 에이전트는 위조 가능한 예측을 작성하고 doctor를 실행한 다음 소스 답변을 읽고 예측을 평가합니다.

## 저자 보고 결과

저자는 프로세스와 테스트 영수증을 게시합니다. 4개의 답변은 모두 부분적으로만 정확했으며 예측된 Ghidra 검사 결과 8개 중 3개는 틀렸습니다.

## 제한 사항 및 확인되지 않은 주장

단일 자체 평가 의사 테스트는 open_binary 테스트가 아닙니다. 설치된 패키지와 소스 체크포인트도 다릅니다.

## 무엇을 배울 것인가

그럴듯한 설명을 테스트 가능한 예측으로 바꾸고 게시 실패를 기록하세요.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> REA analyzed 5 folders of the installed rea-agents 6.3.0 package with analyze_javascript_application.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md)
- [프로젝트/데모](https://github.com/az9713/REA-demo)
- [추가 소스 1](https://az9713.github.io/REA-demo/rea-on-rea-receipt.html)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
