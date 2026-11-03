# App X-Ray: REA 조사 결과를 공유 가능한 앱 보고서로 전환

[← 모든 케이스로 돌아가기](../../README.ko.md) · 도구 및 통합

[English](../app-xray.md) · [简体中文](../zh-CN/app-xray.md) · [繁體中文](../zh-TW/app-xray.md) · [日本語](../ja/app-xray.md) · [한국어](../ko/app-xray.md) · [Español](../es/app-xray.md) · [Français](../fr/app-xray.md) · [Deutsch](../de/app-xray.md) · [Português (Brasil)](../pt-BR/app-xray.md) · [Русский](../ru/app-xray.md) · [العربية](../ar/app-xray.md) · [हिन्दी](../hi/app-xray.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** Eliot5566
- **소스 검토 날짜:** 2026-11-03
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 추가 APK, 네이티브 바이너리 및 모델 파일 경로가 포함된 오픈 소스 Electron 애플리케이션 소스

## 질문

정적 REA 증거가 어떻게 읽을 수 있는 구성 요소 보고서와 버전 간 차이점이 될 수 있습니까?

## REA가 한 일

통합은 고정된 REA 6.7.0 CLI 작업을 호출하고 JSON Evidence를 구문 분석합니다. JavaScript 분석 배치는 파일을 동일한 루트 아래에 유지하여 가져오기 해상도를 유지합니다. Electron 퓨즈 검사는 별도의 REA 작업입니다.

## 저자 보고 결과

이 프로젝트는 보고서 생성, 규칙, CI 차이점 및 갤러리를 게시합니다. 날짜가 지정된 week-5 보고서에는 20 Electron 앱이 검색되었으며 모든 20에 대한 버전이 발견되었으며 해당 컨테이너의 60 초 아래에 18 검색이 포함되어 있습니다. REA-Bench는 20-app 코퍼스 전체의 보고서에서 파생된 54 질문을 제공합니다.

## 제한 사항 및 확인되지 않은 주장

이는 현재 취약점이나 런타임 네트워크 결과가 아닌 작성자가 보고한 날짜가 지난 스캔입니다. 규칙은 도우미가 만든 창, 계산된 채널 및 보낸 사람 확인을 놓칠 수 있습니다. 정적 주소는 트래픽을 증명하지 않습니다. REA-Bench는 독립적인 실제 사실이 아닌 App X-Ray 보고서와의 일치를 측정하며 자체적으로 도구 지원 에이전트 이점을 보여주지는 않습니다. 이 카탈로그는 스캔을 다시 실행하지 않았습니다.

## 무엇을 배울 것인가

보고서 주장을 소스에 연결하고, 스캔 커밋과 날짜를 유지하고, 정적 규칙과 생성된 벤치마크 답변을 오류가 있는 것으로 처리합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> Runs one REA CLI command with --json and returns the parsed Evidence record.

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/core/rea.ts)
- [프로젝트/데모](https://github.com/Eliot5566/app-xray)
- [추가 소스 1](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/README.md)
- [추가 소스 2](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/results-2026-10-23-week5.md)
- [추가 소스 3](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/bench/rea-bench/README.md)
- [추가 소스 4](https://github.com/Eliot5566/app-xray/blob/66a7b06fb45d99e0e1d1dbcf221856a62639faab/src/rules/ipc.ts)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
