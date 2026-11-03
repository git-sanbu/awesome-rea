# Screen Studio: 정적 검사를 기록 및 내보내기 증거에서 분리

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../screenstudio-research.md) · [简体中文](../zh-CN/screenstudio-research.md) · [繁體中文](../zh-TW/screenstudio-research.md) · [日本語](../ja/screenstudio-research.md) · [한국어](../ko/screenstudio-research.md) · [Español](../es/screenstudio-research.md) · [Français](../fr/screenstudio-research.md) · [Deutsch](../de/screenstudio-research.md) · [Português (Brasil)](../pt-BR/screenstudio-research.md) · [Русский](../ru/screenstudio-research.md) · [العربية](../ar/screenstudio-research.md) · [हिन्दी](../hi/screenstudio-research.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** Royo-Qiao
- **소스 검토 날짜:** 2026-11-03
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** Screen Studio 3.7.3-4540(현지에서 재포장된 Apple Silicon 사본 포함)

## 질문

Electron 및 기본 도우미 결과를 기록, 내보내기 및 호환성 증명과 별도로 어떻게 보관할 수 있습니까?

## REA가 한 일

REA 퓨즈 및 Mach-O 검사는 ID 및 해시가 포함된 선별된 정적 Evidence 발췌문을 제공했습니다. 제한된 JavaScript 애플리케이션 분석 시간이 두 번 초과되었습니다. 완전한 그래프나 기본 기능 디컴파일은 주장되지 않습니다.

## 저자 보고 결과

저자는 검사, 집계 프로젝트 통계 및 수출 검증 도구를 게시합니다. 역사적인 네이티브 녹화는 1104 × 720 및 60 fps에서 3, 337 프레임을 내보내고 완전히 디코딩된 것으로 알려졌습니다. 이후의 읽기 전용 도구 검사에서는 저장된 내보내기 및 집계된 인간 입력 이벤트를 검사했습니다.

## 제한 사항 및 확인되지 않은 주장

비공개 녹음 및 전체 원장은 재생할 수 없습니다. Mach-O 해시는 로컬로 다시 패키징된 복사본을 식별합니다. 네트워크 인증이 실패하고 트림 시도가 적용되지 않았으며 최종 서명 후 전체 캡처 재테스트가 이루어지지 않았으며 하나의 Apple Silicon/macOS 설정만 실행되었습니다. 파일 디코딩은 녹음 출처나 시각적 동등성을 증명하지 않습니다. 이 카탈로그는 실험을 다시 실행하지 않았습니다.

## 무엇을 배울 것인가

정적 메타데이터, UI 관찰, 파일 디코딩 및 사람의 피드백을 별도의 증거로 유지하고 성공과 함께 실패한 검사를 게시합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [프로젝트/데모](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [추가 소스 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [추가 소스 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [추가 소스 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [추가 소스 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
