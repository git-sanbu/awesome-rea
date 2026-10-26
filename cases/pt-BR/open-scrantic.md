# Open Scrantic: reconstruindo o mecanismo de proteção de tela Johnny Castaway em Rust

[← Voltar para todos os casos](../../README.pt-BR.md) · Jogos

[English](../open-scrantic.md) · [简体中文](../zh-CN/open-scrantic.md) · [繁體中文](../zh-TW/open-scrantic.md) · [日本語](../ja/open-scrantic.md) · [한국어](../ko/open-scrantic.md) · [Español](../es/open-scrantic.md) · [Français](../fr/open-scrantic.md) · [Deutsch](../de/open-scrantic.md) · [Português (Brasil)](../pt-BR/open-scrantic.md) · [Русский](../ru/open-scrantic.md) · [العربية](../ar/open-scrantic.md) · [हिन्दी](../hi/open-scrantic.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** glauberlima
- **Data de revisão da fonte:** 2026-10-26
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Screen Antics: Johnny Castaway (1992), Windows 3.1 SCRANTIC.SCR e arquivos de recursos correspondentes

## A questão

Como o interpretador de script, a programação da história e o comportamento aleatório de um protetor de tela 16-bit podem ser executados em sistemas modernos?

## O que REA fez

O desenvolvedor credita explicitamente Claude Code com REA por desmontar e descompilar SCRANTIC.SCR, recuperar formatos de recursos e semântica de script e produzir a implementação e documentação de Rust.

## Resultados relatados pelo autor

O mecanismo público Rust implementa carregamento de recursos, execução de script TTM/ADS, progressão da história, tempo e o gerador original de números aleatórios. ENGINE.md registra regras recuperadas e diferenças deliberadas; o autor fornece caminhos de liberação Windows, macOS e Linux.

## Limitações e reivindicações não verificadas

O mecanismo requer os arquivos originais correspondentes do próprio usuário e rejeita outras compilações executáveis. Redesenho de quadro inteiro, processamento image/audio opcional e configurações diferentes do original. O comportamento e a equivalência entre plataformas não foram testados de forma independente aqui; sessões REA brutas não foram encontradas nos arquivos revisados.

## O que aprender

Mantenha a propriedade original dos ativos separada do código do mecanismo, preserve regras aritméticas e de programação e documente diferenças deliberadas de compatibilidade.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Together they were used to disassemble and decompile the original
`SCRANTIC.SCR`, recover the resource formats and script semantics, and write the Rust code, tests and
documentation.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/README.md)
- [Projeto / demonstração](https://github.com/glauberlima/open-scrantic)
- [Fonte adicional 1](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/docs/ENGINE.md)
- [Fonte adicional 2](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/rng.rs)
- [Fonte adicional 3](https://github.com/glauberlima/open-scrantic/blob/8c049614158f2adb09e517ce9e29da89e8a3ac38/src/engine/config.rs)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
