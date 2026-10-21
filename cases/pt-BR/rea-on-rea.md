# REA on REA: investigando a ferramenta e testando previsões

[← Voltar para todos os casos](../../README.pt-BR.md) · Análise e avaliação

[English](../rea-on-rea.md) · [简体中文](../zh-CN/rea-on-rea.md) · [繁體中文](../zh-TW/rea-on-rea.md) · [日本語](../ja/rea-on-rea.md) · [한국어](../ko/rea-on-rea.md) · [Español](../es/rea-on-rea.md) · [Français](../fr/rea-on-rea.md) · [Deutsch](../de/rea-on-rea.md) · [Português (Brasil)](../pt-BR/rea-on-rea.md) · [Русский](../ru/rea-on-rea.md) · [العربية](../ar/rea-on-rea.md) · [हिन्दी](../hi/rea-on-rea.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** az9713
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Pacote 6.3.0 de reagente instalado

## A questão

Como REA escolhe um provedor de análise nativa e detecta um provedor indisponível?

## O que REA fez

REA analisa estaticamente cinco de seus próprios diretórios. O agente escreve previsões falsificáveis, executa o médico, depois lê as respostas da fonte e avalia suas previsões.

## Resultados relatados pelo autor

O autor publica o processo e os recibos dos testes: todas as quatro respostas estavam apenas parcialmente corretas e três dos oito resultados previstos da verificação Ghidra estavam errados.

## Limitações e reivindicações não verificadas

Uma única autoavaliação; os testes médicos não são testes open_binary. O pacote instalado e o ponto de verificação de origem também são diferentes.

## O que aprender

Transforme explicações plausíveis em previsões testáveis e publique falhas.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> REA analyzed 5 folders of the installed rea-agents 6.3.0 package with analyze_javascript_application.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md)
- [Projeto / demonstração](https://github.com/az9713/REA-demo)
- [Fonte adicional 1](https://az9713.github.io/REA-demo/rea-on-rea-receipt.html)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
