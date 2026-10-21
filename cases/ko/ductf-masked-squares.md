# DownUnderCTF: 플래그 확인 방정식 복구

[← 모든 케이스로 돌아가기](../../README.ko.md) · 공식 쇼케이스

[English](../ductf-masked-squares.md) · [简体中文](../zh-CN/ductf-masked-squares.md) · [繁體中文](../zh-TW/ductf-masked-squares.md) · [日本語](../ja/ductf-masked-squares.md) · [한국어](../ko/ductf-masked-squares.md) · [Español](../es/ductf-masked-squares.md) · [Français](../fr/ductf-masked-squares.md) · [Deutsch](../de/ductf-masked-squares.md) · [Português (Brasil)](../pt-BR/ductf-masked-squares.md) · [Русский](../ru/ductf-masked-squares.md) · [العربية](../ar/ductf-masked-squares.md) · [हिन्दी](../hi/ductf-masked-squares.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** REA 쇼케이스 팀; 원본 프로젝트 작성자가 소스에 표시됨
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** DownUnderCTF 2023 마스크 사각형 플래그 검사기, 벗겨짐 Linux ELF

## 질문

기호나 소스 코드 없이 입력 유효성 검사를 어떻게 복구할 수 있나요?

## REA가 한 일

REA는 프롬프트 문자열과 상호 참조를 찾고, 검사기를 분석하고, 마스크와 대상 테이블을 읽습니다. Z3는 26 제약 조건을 해결합니다. 프로세스 캡처는 원래 챌린지 바이너리를 확인합니다.

## 저자 보고 결과

공식 기록에 따르면 정확합니다! / 올바른 후보와 잘못된 후보에 대해 0를 종료합니다! / 잘못된 후보에 대해 255를 종료합니다. 그런 다음 솔루션을 주최자의 소스 및 메타데이터와 비교하여 확인합니다.

## 제한 사항 및 확인되지 않은 주장

솔버는 공통 플래그 형식과 문자 세트를 가정합니다. 두 번째 모델 검색 시간이 초과되어 고유성이 입증되지 않았습니다.

## 무엇을 배울 것인가

정적 추론을 통해 후보가 생성된 후 원본 프로그램을 통해 올바른 입력과 잘못된 입력을 모두 실행합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Fresh inspection and process captures on 8 October 2026, using the published REA 4.1.0 package

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md)
- [프로젝트/데모](https://rea.tools/showcase/ctf/)
- [추가 소스 1](https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
