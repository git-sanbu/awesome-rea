# Hyper3D: 캡처된 웹 번들부터 독립적인 3D 프로토타입까지

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../hyper3d-clone.md) · [简体中文](../zh-CN/hyper3d-clone.md) · [繁體中文](../zh-TW/hyper3d-clone.md) · [日本語](../ja/hyper3d-clone.md) · [한국어](../ko/hyper3d-clone.md) · [Español](../es/hyper3d-clone.md) · [Français](../fr/hyper3d-clone.md) · [Deutsch](../de/hyper3d-clone.md) · [Português (Brasil)](../pt-BR/hyper3d-clone.md) · [Русский](../ru/hyper3d-clone.md) · [العربية](../ar/hyper3d-clone.md) · [हिन्दी](../hi/hyper3d-clone.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** payswapdotorg
- **소스 검토 날짜:** 2026-10-19
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 캡처된 Hyper3D Rodin JavaScript 번들 및 작업 공간 동작

## 질문

인터페이스 및 API 관찰은 3D 모델을 내보내는 프로토타입에 어떻게 정보를 제공할 수 있습니까?

## REA가 한 일

저자는 초기 시각적 프로토타입 단서를 찾기 위해 시약 에이전트 6.5.0를 사용하여 21 캡처된 JavaScript 파일을 정적으로 분석합니다. 이후 기능은 인증된 작업 공간 네트워크 관찰 및 API 청사진과 별도로 설계되었습니다. REA는 원래 3D-model 가중치 또는 세대 백엔드를 복구하지 못했습니다.

## 저자 보고 결과

이 프로젝트는 Next.js 16 프로토타입, API 청사진 및 차이점을 게시합니다. 저자는 image/text-to-scene 사양, three.js 형상 및 GLB, GLTF, OBJ, STL 및 USDZ 내보내기를 다루는 67 테스트를 보고합니다.

## 제한 사항 및 확인되지 않은 주장

기본 생성기는 동등한 Rodin 모델 품질이나 백엔드 동작이 아닌 독립적인 장면 계획 및 결정론적 형상 파이프라인을 사용합니다. 외부 생성 서비스에는 별도의 자격 증명이 필요합니다. 3D 편집 및 WorldGen는 구현되지 않습니다. REA의 기여는 초기 웹 분석으로 제한됩니다. 테스트는 작성자가 보고합니다.

## 무엇을 배울 것인가

프런트엔드 관찰, API 계약 및 독립적 기능을 구별합니다. 내보내기 형식 테스트는 세대 품질 동등성을 설정하지 않습니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> rea-agents@6.5.0 analyze-javascript-application

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md)
- [프로젝트/데모](https://github.com/payswapdotorg/hyper3d-clone)
- [추가 소스 1](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/recon/API-BLUEPRINT.md)
- [추가 소스 2](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/DECISIONS.md)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
