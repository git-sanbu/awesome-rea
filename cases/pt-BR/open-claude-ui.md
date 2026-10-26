# Open Claude UI: documentando interações na área de trabalho e publicando componentes de UI reutilizáveis

[← Voltar para todos os casos](../../README.pt-BR.md) · Aplicativos

[English](../open-claude-ui.md) · [简体中文](../zh-CN/open-claude-ui.md) · [繁體中文](../zh-TW/open-claude-ui.md) · [日本語](../ja/open-claude-ui.md) · [한국어](../ko/open-claude-ui.md) · [Español](../es/open-claude-ui.md) · [Français](../fr/open-claude-ui.md) · [Deutsch](../de/open-claude-ui.md) · [Português (Brasil)](../pt-BR/open-claude-ui.md) · [Русский](../ru/open-claude-ui.md) · [العربية](../ar/open-claude-ui.md) · [हिन्दी](../hi/open-claude-ui.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** Caho1
- **Data de revisão da fonte:** 2026-10-26
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Pacote Claude Desktop macOS; relatado pelo autor @ant/desktop Linha de base 2.37337.1 e UI da web agrupada

## A questão

Como as regras de composição de entrada, rolagem e interação da área de trabalho podem informar componentes de interface reutilizáveis?

## O que REA fez

O autor atribui investigação ASAR, JavaScript AST e CSS a REA 6.5.0. O capítulo de interação vincula trechos de código agrupado a proteções de entrada e regras de rolagem; exemplos separados de TypeScript implementam esses comportamentos.

## Resultados relatados pelo autor

O repositório publica notas de design versionadas, um livro de histórias de componentes, tokens CSS e exemplos de implementação, incluindo verificações de estado de composição e um protetor Enter pós-composição em RichComposerWithMentions.tsx.

## Limitações e reivindicações não verificadas

Esta é uma biblioteca de UI e desmontagem relatada pelo autor, não um cliente Claude completo ou serviço de modelo. Registros brutos de sessão REA e testes independentes de equivalência comportamental ou visual não foram encontrados nos arquivos revisados. As reivindicações de versão e fidelidade permanecem do autor.

## O que aprender

Conecte uma regra de interação ao local e implementação do pacote citado; distinguir documentação de projeto de equivalência medida.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> 逆向还原自官方 Claude Desktop / Web 核心输入组件 (REA v6.5.0 取证):

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/code-examples/RichComposerWithMentions.tsx)
- [Projeto / demonstração](https://github.com/Caho1/open-claude-ui)
- [Fonte adicional 1](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/README.md)
- [Fonte adicional 2](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v1/03-%E4%BC%9A%E8%AF%9D%E6%A0%B8%E5%BF%83%E6%B5%81%E4%B8%8E%E6%8C%87%E4%BB%A4%E4%BA%A4%E4%BA%92%E5%BC%95%E6%93%8E.md)
- [Fonte adicional 3](https://github.com/Caho1/open-claude-ui/blob/c1f923ae0051a871941b98a0e2e3183a545e6a85/docs/v2/01-%E7%BB%BC%E8%BF%B0%E4%B8%8E%E7%89%88%E6%9C%AC%E8%BE%B9%E7%95%8C.md)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
