# REA Studio: apresentando ferramentas MCP e Evidence gravado em uma interface da web local

[← Voltar para todos os casos](../../README.pt-BR.md) · Ferramentas e integrações

[English](../rea-studio.md) · [简体中文](../zh-CN/rea-studio.md) · [繁體中文](../zh-TW/rea-studio.md) · [日本語](../ja/rea-studio.md) · [한국어](../ko/rea-studio.md) · [Español](../es/rea-studio.md) · [Français](../fr/rea-studio.md) · [Deutsch](../de/rea-studio.md) · [Português (Brasil)](../pt-BR/rea-studio.md) · [Русский](../ru/rea-studio.md) · [العربية](../ar/rea-studio.md) · [हिन्दी](../hi/rea-studio.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** theyishaik-lab
- **Data de revisão da fonte:** 2026-11-03
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Descoberta da ferramenta REA MCP, formulários gerados por esquema e pequenas amostras em C, JavaScript e Python

## A questão

Como uma interface local pode expor as ferramentas REA instaladas e tornar legíveis suas evidências e limitações?

## O que REA fez

O backend inicia REA no stdio MCP, pagina tools/list e encaminha tools/call com sinais de progresso e cancelamento. Um script de gravação chama REA em pequenos artefatos de amostra e salva os resultados para uma construção de demonstração estática separada.

## Resultados relatados pelo autor

A fonte pública inclui uma interface web local, entradas orientadas por esquema, histórico e uma visualização Evidence. Os artefatos de demonstração verificados identificam REA 6.8.0 e fornecem um catálogo 229-tool, além de execuções de amostra gravadas 9 (8 concluído, erro 1); ações de demonstração não suportadas retornam um erro explícito não registrado.

## Limitações e reivindicações não verificadas

A demonstração hospedada reproduz respostas salvas e progresso simulado; os uploads permanecem no navegador e não são analisados. As gravações são publicadas pelo autor, não são reprises independentes. O uso local pode invocar ferramentas em arquivos host e depende dos provedores configurados; o catálogo não instalou nem testou o back-end nem estabeleceu uma auditoria de segurança.

## O que aprender

Gere formulários a partir do esquema da ferramenta ao vivo, preserve as limitações na visualização dos resultados e distinga claramente as demonstrações gravadas das análises ao vivo.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Keeps one MCP stdio session with REA alive and exposes its tool catalog.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/server/rea.js)
- [Projeto / demonstração](https://github.com/theyishaik-lab/rea-studio)
- [Fonte adicional 1](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/README.md)
- [Fonte adicional 2](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/scripts/record-demo.mjs)
- [Fonte adicional 3](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/demo/recordings.json)
- [Fonte adicional 4](https://github.com/theyishaik-lab/rea-studio/blob/aee05c85c45bbbaf3b50f3527d216702365b8cf2/src/api/demo.js)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
