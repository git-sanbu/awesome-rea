# Aegis: Android TOTP 알고리즘 찾기

[← 모든 케이스로 돌아가기](../../README.ko.md) · 공식 쇼케이스

[English](../aegis-totp.md) · [简体中文](../zh-CN/aegis-totp.md) · [繁體中文](../zh-TW/aegis-totp.md) · [日本語](../ja/aegis-totp.md) · [한국어](../ko/aegis-totp.md) · [Español](../es/aegis-totp.md) · [Français](../fr/aegis-totp.md) · [Deutsch](../de/aegis-totp.md) · [Português (Brasil)](../pt-BR/aegis-totp.md) · [Русский](../ru/aegis-totp.md) · [العربية](../ar/aegis-totp.md) · [हिन्दी](../hi/aegis-totp.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** REA 쇼케이스 팀; 원본 프로젝트 작성자가 소스에 표시됨
- **소스 검토 날짜:** 2026-10-16
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 이지스 인증기 3.4.3 Android APK

## 질문

30초마다 6자리 로그인 코드가 어떻게 계산되나요?

## REA가 한 일

REA Android 분석은 생성, 표시 및 복사 방법을 찾습니다. 저자는 HOTP/TOTP 계산을 읽고 조정 가능한 시계가 포함된 브라우저 데모를 구축합니다.

## 저자 보고 결과

공식 페이지에서는 추출된 방법을 독립적인 구현과 비교하는 133 사례와 RFC 6238.의 6개 SHA-1 참조 벡터를 보고합니다.

## 제한 사항 및 확인되지 않은 주장

범위는 볼트, 암호화된 저장소 또는 전체 앱의 재구성이 아닌 코드 생성입니다. 이 카탈로그는 사례를 재실행하지 않았습니다.

## 무엇을 배울 것인가

독립적으로 검증할 수 있는 작은 기능을 선택하고 공개 표준 테스트 벡터로 구현을 제한합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Inspected with REA 6.1.0 on 9 October 2026.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html)
- [프로젝트/데모](https://rea.tools/showcase/aegis/)
- [추가 소스 1](https://github.com/beemdevelopment/Aegis)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
