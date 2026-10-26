# REA in Spanish: 작성자 소유 키 유효성 검사기 재구성

[← 모든 케이스로 돌아가기](../../README.ko.md) · 학습과 재생산

[English](../rea-spanish-lab.md) · [简体中文](../zh-CN/rea-spanish-lab.md) · [繁體中文](../zh-TW/rea-spanish-lab.md) · [日本語](../ja/rea-spanish-lab.md) · [한국어](../ko/rea-spanish-lab.md) · [Español](../es/rea-spanish-lab.md) · [Français](../fr/rea-spanish-lab.md) · [Deutsch](../de/rea-spanish-lab.md) · [Português (Brasil)](../pt-BR/rea-spanish-lab.md) · [Русский](../ru/rea-spanish-lab.md) · [العربية](../ar/rea-spanish-lab.md) · [हिन्दी](../hi/rea-spanish-lab.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** harkiventures
- **소스 검토 날짜:** 2026-10-26
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 작성자 소유의 교육용 licencia-cli.stripped 바이너리 및 기호화된 참조 빌드

## 질문

작은 스트립 프로그램의 승인 규칙을 어떻게 원본과 비교하여 재구성하고 확인할 수 있습니까?

## REA가 한 일

저자는 REA 및 Ghidra 의사코드와 0x102040에서 읽은 바이트를 사용하여 문자 변환, 가중치 누적, 회전 및 승인 검사를 복구한 다음 별도의 Python 검증기를 작성했다고 보고합니다.

## 저자 보고 결과

무료 스페인어 샘플에는 랩 설정 및 작업 사례, 제거되고 기호화된 연습 바이너리, 참조 C 소스 및 재구성된 Python 검증기가 포함되어 있습니다. 검증자는 4 예상 예를 나열합니다. 저자는 실제 바이너리에 대해 재구성을 확인했다고 보고합니다.

## 제한 사항 및 확인되지 않은 주장

이 연습은 상업용 라이센스 우회나 보호된 소프트웨어에 대한 일반적인 결과가 아닌 작성자 자신의 소규모 비보호 프로그램입니다. 4 예는 완전한 동등성이 아닌 제한된 점검입니다. 이 카탈로그는 바이너리를 실행하거나 비교를 다시 실행하지 않았습니다. 제안된 전체 과정은 아직 제공되지 않았습니다.

## 무엇을 배울 것인가

숨겨진 참조 소스가 있는 자체 픽스처를 사용하고, 제한된 규칙 하나를 복구하고, 소스와 비교하기 전에 허용 및 거부된 입력을 테스트합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Reimplementacion de la validacion del Caso A escrita SOLO desde el
pseudocodigo que REA/Ghidra devolvio (analisis/caso-a/05 y 06) y de los
bytes leidos en 0x102040 (07).

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py)
- [프로젝트/데모](https://github.com/harkiventures/rea-muestra-gratuita)
- [추가 소스 1](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/README.md)
- [추가 소스 2](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/LEEME.md)
- [추가 소스 3](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/licencia-cli.c)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
