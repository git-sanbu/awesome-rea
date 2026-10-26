# REA in Spanish: reconstruindo um validador de chave de propriedade do autor

[← Voltar para todos os casos](../../README.pt-BR.md) · Aprendizagem e reprodução

[English](../rea-spanish-lab.md) · [简体中文](../zh-CN/rea-spanish-lab.md) · [繁體中文](../zh-TW/rea-spanish-lab.md) · [日本語](../ja/rea-spanish-lab.md) · [한국어](../ko/rea-spanish-lab.md) · [Español](../es/rea-spanish-lab.md) · [Français](../fr/rea-spanish-lab.md) · [Deutsch](../de/rea-spanish-lab.md) · [Português (Brasil)](../pt-BR/rea-spanish-lab.md) · [Русский](../ru/rea-spanish-lab.md) · [العربية](../ar/rea-spanish-lab.md) · [हिन्दी](../hi/rea-spanish-lab.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** harkiventures
- **Data de revisão da fonte:** 2026-10-26
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Binário licencia-cli.stripped educacional de propriedade do autor e sua construção de referência simbolizada

## A questão

Como a regra de aceitação de um pequeno programa despojado pode ser reconstruída e verificada em relação ao original?

## O que REA fez

O autor relata o uso de pseudocódigo REA e Ghidra mais bytes lidos em 0x102040 para recuperar conversão de caracteres, acumulação ponderada, rotação e verificações de aceitação e, em seguida, escrever um verificador Python separado.

## Resultados relatados pelo autor

A amostra gratuita em espanhol inclui configuração de laboratório e um caso resolvido, binários práticos despojados e simbolizados, fonte C de referência e um verificador Python reconstruído. O verificador lista exemplos esperados de 4; o autor relata a verificação da reconstrução em relação ao binário real.

## Limitações e reivindicações não verificadas

O exercício é o pequeno programa desprotegido do próprio autor, não um desvio de licenciamento comercial ou um resultado geral para software protegido. Os exemplos 4 são verificações limitadas, não equivalência exaustiva. Este catálogo não executou os binários nem executou novamente a comparação; o curso completo proposto ainda não foi entregue.

## O que aprender

Use um equipamento próprio com uma fonte de referência oculta, recupere uma regra limitada e teste as entradas aceitas e rejeitadas antes de comparar com a fonte.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Reimplementacion de la validacion del Caso A escrita SOLO desde el
pseudocodigo que REA/Ghidra devolvio (analisis/caso-a/05 y 06) y de los
bytes leidos en 0x102040 (07).

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/verificador-reconstruido.py)
- [Projeto / demonstração](https://github.com/harkiventures/rea-muestra-gratuita)
- [Fonte adicional 1](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/README.md)
- [Fonte adicional 2](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/LEEME.md)
- [Fonte adicional 3](https://github.com/harkiventures/rea-muestra-gratuita/blob/210febeb7b43392b3d09147695e7a193c5c4de5d/practica/licencia-cli.c)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
