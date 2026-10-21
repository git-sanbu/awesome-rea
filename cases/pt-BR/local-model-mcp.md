# Um modelo 27B local: uma lista menor de ferramentas MCP permite a análise de funções

[← Voltar para todos os casos](../../README.pt-BR.md) · Análise e avaliação

[English](../local-model-mcp.md) · [简体中文](../zh-CN/local-model-mcp.md) · [繁體中文](../zh-TW/local-model-mcp.md) · [日本語](../ja/local-model-mcp.md) · [한국어](../ko/local-model-mcp.md) · [Español](../es/local-model-mcp.md) · [Français](../fr/local-model-mcp.md) · [Deutsch](../de/local-model-mcp.md) · [Português (Brasil)](../pt-BR/local-model-mcp.md) · [Русский](../ru/local-model-mcp.md) · [العربية](../ar/local-model-mcp.md) · [हिन्दी](../hi/local-model-mcp.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** CassieFox23
- **Data de revisão da fonte:** 2026-10-19
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Verificador de token C autoconstruído; Qwen3.8-27B, lhama.cpp, OpenCode e REA MCP

## A questão

Como as descrições e análises da ferramenta REA podem se ajustar ao contexto 32K de um modelo local?

## O que REA fez

O autor usa as famílias de ferramentas PR #3026 commit d993ffeb1 e Ghidra 12.1.4. e uma lista de permissões OpenCode expõe apenas ferramentas 10 REA; o modelo abre o destino, localiza e descompila a função e fecha a sessão.

## Resultados relatados pelo autor

O autor relata que todas as descrições da ferramenta 206 excederam o contexto. Uma configuração 62-tool atingiu uma redefinição de GPU após ler o prompt. O prompt 10-tool usou tokens 4,407; três execuções encontraram a string de destino e explicaram o verificador, cada uma levando cerca de 80 segundos.

## Limitações e reivindicações não verificadas

As três execuções repetem um pequeno programa e solicitam, não três tarefas independentes. Nenhum outro modelo ou cliente foi comparado. Os resultados usam um commit histórico de RP; contagens de ferramentas, interruptores e temporizações não são garantias para a versão atual.

## O que aprender

Meça o custo do contexto do esquema antes de testar um conjunto mínimo de ferramentas. A repetição de uma tarefa não estabelece capacidade geral.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> With the full tool list, nothing fits.

## Fontes originais

- [Discussão pública/editável no momento da revisão](https://github.com/morluto/rea/discussions/3098)
- [Projeto / demonstração](https://github.com/morluto/rea/discussions/3098)
- [Fonte adicional 1](https://github.com/morluto/rea/pull/3026)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
