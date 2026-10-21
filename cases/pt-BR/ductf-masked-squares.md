# DownUnderCTF: recuperando equações de verificação de sinalizadores

[← Voltar para todos os casos](../../README.pt-BR.md) · Vitrines oficiais

[English](../ductf-masked-squares.md) · [简体中文](../zh-CN/ductf-masked-squares.md) · [繁體中文](../zh-TW/ductf-masked-squares.md) · [日本語](../ja/ductf-masked-squares.md) · [한국어](../ko/ductf-masked-squares.md) · [Español](../es/ductf-masked-squares.md) · [Français](../fr/ductf-masked-squares.md) · [Deutsch](../de/ductf-masked-squares.md) · [Português (Brasil)](../pt-BR/ductf-masked-squares.md) · [Русский](../ru/ductf-masked-squares.md) · [العربية](../ar/ductf-masked-squares.md) · [हिन्दी](../hi/ductf-masked-squares.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** Equipe de vitrine REA; autores originais do projeto creditados em fontes
- **Data de revisão da fonte:** 2026-10-16
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** DownUnderCTF 2023 verificador de bandeira de quadrados mascarados, despojado Linux ELF

## A questão

Como a validação de entrada pode ser recuperada sem símbolos ou código-fonte?

## O que REA fez

REA encontra strings de prompt e referências cruzadas, analisa o verificador e lê máscaras e tabelas de destino. Z3 resolve as restrições 26; a captura do processo verifica o binário do desafio original.

## Resultados relatados pelo autor

O registro oficial mostra Correto! /exit 0 para o candidato correto e Incorreto! /exit 255 para um candidato incorreto. A solução é então verificada em relação à fonte e aos metadados dos organizadores.

## Limitações e reivindicações não verificadas

O solucionador assume um formato de sinalizador e um conjunto de caracteres comuns. A pesquisa do segundo modelo expirou, portanto a exclusividade não foi comprovada.

## O que aprender

Depois que o raciocínio estático produzir um candidato, execute as entradas corretas e incorretas por meio do programa original.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Fresh inspection and process captures on 8 October 2026, using the published REA 4.1.0 package

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md)
- [Projeto / demonstração](https://rea.tools/showcase/ctf/)
- [Fonte adicional 1](https://github.com/DownUnderCTF/Challenges_2023_Public/tree/b48f83db2984bc7fa2ec7879a32d7efb1be8d333/rev/masked-squares-flag-checker)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
