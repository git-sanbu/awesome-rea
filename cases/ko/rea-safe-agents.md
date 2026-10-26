# REA Safe Agent: 포함된 두 프로세스 간의 정적 분석 중개

[← 모든 케이스로 돌아가기](../../README.ko.md) · 도구 및 통합

[English](../rea-safe-agents.md) · [简体中文](../zh-CN/rea-safe-agents.md) · [繁體中文](../zh-TW/rea-safe-agents.md) · [日本語](../ja/rea-safe-agents.md) · [한국어](../ko/rea-safe-agents.md) · [Español](../es/rea-safe-agents.md) · [Français](../fr/rea-safe-agents.md) · [Deutsch](../de/rea-safe-agents.md) · [Português (Brasil)](../pt-BR/rea-safe-agents.md) · [Русский](../ru/rea-safe-agents.md) · [العربية](../ar/rea-safe-agents.md) · [हिन्दी](../hi/rea-safe-agents.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** dagoSte
- **소스 검토 날짜:** 2026-10-26
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** REA 6.7.0는 Ghidra 12.1.4 및 JADX와 통합됩니다. 양성 ELF 설비 및 F-Droid APK

## 질문

입력, 호스트 도구 및 모델 요청에 대한 액세스가 제한된 상태에서 에이전트가 REA를 쿼리하려면 어떻게 해야 합니까?

## REA가 한 일

구현에서는 별도의 Docker 컨테이너에서 REA와 해당 수신 에이전트를 실행하고 호스트 컨트롤러를 통해 허용 목록에 있는 MCP 호출을 릴레이합니다. 고정된 입력 스냅샷, tool/path 검사 및 제한된 결과는 경계를 넘는 것을 제한합니다. REA는 실제 정적 분석을 제공합니다.

## 저자 보고 결과

날짜가 지정된 macOS ARM64 영수증은 동일한 양성 ELF에서 Claude와 9 및 Codex를 사용하여 11 성공적인 REA 호출을 보고하고 알려진 소스에 대해 해시, FNV-1a 상수 및 디코딩된 문자열을 확인합니다. 검증 기록은 라이브 F-Droid 2.0.2 분석에 대한 39 성공적인 REA 호출을 별도로 보고합니다.

## 제한 사항 및 확인되지 않은 주장

이는 작성자가 공개한 검증 기록이며 독립적인 보안 인증이 아닙니다. 정적 분석은 대상을 실행하지 않습니다. 격리는 Docker와 호스트 컨트롤러에 의존하며 분석된 텍스트는 모델 서비스로 전송됩니다. Windows Docker 통합은 실험 단계입니다. 별도의 npm 감사 결과가 깨끗해도 전체 이미지의 취약점 발견은 남아 있습니다.

## 무엇을 배울 것인가

별도의 모의 정책 테스트, 실제 도구 호출 및 라이브 모델 실행 날짜가 적힌 대상, 호스트 및 영수증에 각 청구서를 첨부하십시오.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> "rea_version": "6.7.0",

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/validation.md)
- [프로젝트/데모](https://github.com/dagoSte/rea-safe-agents)
- [추가 소스 1](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-claude-subscription-macos-arm64-2026-10-19.json)
- [추가 소스 2](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/docs/evidence/live-codex-chatgpt-macos-arm64-2026-10-19.json)
- [추가 소스 3](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/tunnel.py)
- [추가 소스 4](https://github.com/dagoSte/rea-safe-agents/blob/c6f45cd27f1ed8ca774d5438d86d4b4f81c484fe/skills/rea-isolated/scripts/agent_session.py)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
