# hexgrab: investigando o seletor de cores PowerToys

[← Voltar para todos os casos](../../README.pt-BR.md) · Aplicativos

[English](../hexgrab.md) · [简体中文](../zh-CN/hexgrab.md) · [繁體中文](../zh-TW/hexgrab.md) · [日本語](../ja/hexgrab.md) · [한국어](../ko/hexgrab.md) · [Español](../es/hexgrab.md) · [Français](../fr/hexgrab.md) · [Deutsch](../de/hexgrab.md) · [Português (Brasil)](../pt-BR/hexgrab.md) · [Русский](../ru/hexgrab.md) · [العربية](../ar/hexgrab.md) · [हिन्दी](../hi/hexgrab.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** iammukeshm
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Binários seletores de cores distribuídos com Microsoft PowerToys

## A questão

Como as teclas de atalho globais, a amostragem de pixels e a área de transferência funcionam juntas?

## O que REA fez

O autor analisa binários lançados com REA, verifica cada descoberta em relação à fonte pública e constrói um seletor de cores independente menor com .NET 10/WPF.

## Resultados relatados pelo autor

Fonte pública e docs/rea-findings.md são fornecidos. O autor relata que as descobertas 8 de 9 estavam totalmente corretas.

## Limitações e reivindicações não verificadas

Testado apenas em um monitor na escala 125%; O comportamento de vários monitores com DPI misto não foi testado em hardware real. O resultado 8/9 é a verificação do autor desta investigação, não uma taxa de precisão geral do REA.

## O que aprender

Pratique em software de fonte pública para que as descobertas da ferramenta possam ser verificadas.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> to study how the Color Picker in Microsoft PowerToys works from its shipped binaries

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md)
- [Projeto / demonstração](https://github.com/iammukeshm/hexgrab)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
