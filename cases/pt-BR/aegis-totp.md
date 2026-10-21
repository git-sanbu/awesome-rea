# Aegis: encontrando o algoritmo Android TOTP

[← Voltar para todos os casos](../../README.pt-BR.md) · Vitrines oficiais

[English](../aegis-totp.md) · [简体中文](../zh-CN/aegis-totp.md) · [繁體中文](../zh-TW/aegis-totp.md) · [日本語](../ja/aegis-totp.md) · [한국어](../ko/aegis-totp.md) · [Español](../es/aegis-totp.md) · [Français](../fr/aegis-totp.md) · [Deutsch](../de/aegis-totp.md) · [Português (Brasil)](../pt-BR/aegis-totp.md) · [Русский](../ru/aegis-totp.md) · [العربية](../ar/aegis-totp.md) · [हिन्दी](../hi/aegis-totp.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** Equipe de vitrine REA; autores originais do projeto creditados em fontes
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Autenticador Aegis 3.4.3 Android APK

## A questão

Como um código de login de seis dígitos é calculado a cada 30 segundos?

## O que REA fez

A análise REA Android localiza métodos de geração, exibição e cópia. O autor lê o cálculo HOTP/TOTP e constrói uma demonstração do navegador com relógio ajustável.

## Resultados relatados pelo autor

A página oficial relata casos 133 comparando o método extraído com uma implementação independente, além dos seis vetores de referência SHA-1 da RFC 6238.

## Limitações e reivindicações não verificadas

O escopo é a geração de código, não uma reconstrução do cofre, do armazenamento criptografado ou de todo o aplicativo. Este catálogo não reexecutou os casos.

## O que aprender

Escolha um pequeno recurso que possa ser verificado de forma independente e restrinja sua implementação com vetores de teste de padrão público.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Inspected with REA 6.1.0 on 9 October 2026.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html)
- [Projeto / demonstração](https://rea.tools/showcase/aegis/)
- [Fonte adicional 1](https://github.com/beemdevelopment/Aegis)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
