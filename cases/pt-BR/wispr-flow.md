# Wispr Flow: uma desmontagem da entrada de voz e um pequeno protótipo local

[← Voltar para todos os casos](../../README.pt-BR.md) · Aplicativos

[English](../wispr-flow.md) · [简体中文](../zh-CN/wispr-flow.md) · [繁體中文](../zh-TW/wispr-flow.md) · [日本語](../ja/wispr-flow.md) · [한국어](../ko/wispr-flow.md) · [Español](../es/wispr-flow.md) · [Français](../fr/wispr-flow.md) · [Deutsch](../de/wispr-flow.md) · [Português (Brasil)](../pt-BR/wispr-flow.md) · [Русский](../ru/wispr-flow.md) · [العربية](../ar/wispr-flow.md) · [हिन्दी](../hi/wispr-flow.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** az9713
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Pacote Wispr Flow 1.6.1102 Electron e auxiliar nativo

## A questão

Como a gravação, a transcrição, o contexto e a colagem estão conectados?

## O que REA fez

O relatório combina análise estática REA CLI JavaScript, leitura direta de pacote e investigação REA + Ghidra do código de colagem auxiliar. As reivindicações são marcadas como comprovadas, inferidas ou ocultas.

## Resultados relatados pelo autor

O autor publica uma desmontagem, investigação Ghidra suplementar, registro de desenvolvimento e protótipo flowlite.py local.

## Limitações e reivindicações não verificadas

As duas primeiras chamadas MCP expiraram. Algumas conclusões vêm de outras ferramentas ou da leitura manual de código. O aplicativo original não foi executado e o tráfego de rede não foi capturado, portanto, os modelos e o comportamento do servidor permanecem ocultos. O protótipo omite contexto, streaming e validação completa.

## O que aprender

Registre falhas e ferramentas complementares. A análise do cliente não pode estabelecer como funciona um modelo do lado do servidor.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Wispr Flow, reverse engineered with REA

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md)
- [Projeto / demonstração](https://github.com/az9713/wispr-flow-rea-teardown)
- [Fonte adicional 1](https://az9713.github.io/wispr-flow-rea-teardown/wispr-flow-teardown.html)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
