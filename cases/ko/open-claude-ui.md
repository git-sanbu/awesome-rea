# Open Claude UI: 데스크톱 상호 작용 문서화 및 재사용 가능한 UI 구성 요소 게시

[← 모든 케이스로 돌아가기](../../README.ko.md) · 응용

[English](../open-claude-ui.md) · [简体中文](../zh-CN/open-claude-ui.md) · [繁體中文](../zh-TW/open-claude-ui.md) · [日本語](../ja/open-claude-ui.md) · [한국어](../ko/open-claude-ui.md) · [Español](../es/open-claude-ui.md) · [Français](../fr/open-claude-ui.md) · [Deutsch](../de/open-claude-ui.md) · [Português (Brasil)](../pt-BR/open-claude-ui.md) · [Русский](../ru/open-claude-ui.md) · [العربية](../ar/open-claude-ui.md) · [हिन्दी](../hi/open-claude-ui.md)

이 버전은 편집 영어 버전에서 기계 번역되었습니다. 원래 인용문은 원어로 유지됩니다. 표현이 불분명할 경우 영어 및 링크된 소스를 참조하세요.

- **저자 / 저작자:** Caho1
- **소스 검토 날짜:** 2026-10-26
- **검토 상태:** 검토된 출처; 작성자 테스트는 독립적으로 다시 실행되지 않습니다.
- **대상:** 클로드 데스크탑 macOS 패키지; 작성자가 보고한 @ant/desktop 2.37337.1 기준선 및 번들 웹 UI

## 질문

입력 구성, 스크롤 및 데스크탑 상호 작용 규칙은 재사용 가능한 인터페이스 구성 요소에 어떻게 알릴 수 있습니까?

## REA가 한 일

저자는 ASAR, JavaScript AST 및 CSS 조사를 REA 6.5.0.로 간주합니다. 상호 작용 장은 번들 코드 발췌 부분을 입력 가드 및 스크롤 규칙에 연결합니다. 별도의 TypeScript 예제는 이러한 동작을 구현합니다.

## 저자 보고 결과

저장소는 RichComposerWithMentions.tsx에 구성 상태 확인 및 구성 후 Enter 가드를 포함하여 버전이 지정된 디자인 노트, 구성 요소 스토리북, CSS 토큰 및 구현 예제를 게시합니다.

## 제한 사항 및 확인되지 않은 주장

이는 완전한 Claude 클라이언트 또는 모델 서비스가 아닌 UI 라이브러리 및 작성자가 보고한 분해입니다. 원시 REA 세션 기록과 독립적인 행동 또는 시각적 동등성 테스트는 검토된 파일에서 발견되지 않았습니다. 버전 및 충실도에 대한 주장은 작성자의 소유입니다.

## 무엇을 배울 것인가

하나의 상호 작용 규칙을 인용된 번들 위치 및 구현에 연결합니다. 설계 문서와 측정된 동등성을 구별합니다.

## 소스의 REA 사용 증거

발췌 서식이 단순화되었습니다. 전체 내용을 보려면 원본 소스를 읽어보세요.

> 逆向还原自官方 Claude Desktop / Web 核心输入组件 (REA v6.5.0 取证):

## 원본 소스

- [주요 출처/고정된 증거](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx)
- [프로젝트/데모](https://github.com/Caho1/open-claude-ui)
- [추가 소스 1](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/README.md)
- [추가 소스 2](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v1/03-%E4%BC%9A%E8%AF%9D%E6%A0%B8%E5%BF%83%E6%B5%81%E4%B8%8E%E6%8C%87%E4%BB%A4%E4%BA%A4%E4%BA%92%E5%BC%95%E6%93%8E.md)
- [추가 소스 3](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v2/01-%E7%BB%BC%E8%BF%B0%E4%B8%8E%E7%89%88%E6%9C%AC%E8%BE%B9%E7%95%8C.md)

독립적인 편집 요약. 크레딧은 원저자에게 있습니다. 대상 소프트웨어, 설치 프로그램 및 전체 디컴파일러 출력은 여기에 재배포되지 않습니다.

<!-- 카탈로그 데이터에서 생성됩니다. 이 메모를 업데이트하려면 데이터 파일을 편집하세요. -->
