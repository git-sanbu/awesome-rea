# rea-lab: medindo a contribuição de REA para a engenharia reversa de Windows

[← Voltar para todos os casos](../../README.pt-BR.md) · Análise e avaliação

[English](../rea-lab.md) · [简体中文](../zh-CN/rea-lab.md) · [繁體中文](../zh-TW/rea-lab.md) · [日本語](../ja/rea-lab.md) · [한국어](../ko/rea-lab.md) · [Español](../es/rea-lab.md) · [Français](../fr/rea-lab.md) · [Deutsch](../de/rea-lab.md) · [Português (Brasil)](../pt-BR/rea-lab.md) · [Русский](../ru/rea-lab.md) · [العربية](../ar/rea-lab.md) · [हिन्दी](../hi/rea-lab.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** pablodiazjorge
- **Data de revisão da fonte:** 2026-10-21
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Pequenos desafios Windows, binários maiores com iscas e programas reais de código aberto

## A questão

Como a adição de REA afeta a taxa de sucesso, o tempo e o custo de um agente?

## O que REA fez

O autor configura Windows e Ghidra, executa estudos controlados pré-registrados, verifica Evidence citado e publica redações, ambientes e correções upstream.

## Resultados relatados pelo autor

Cinco estudos pré-registrados são públicos. Estude 1: 28/30 em ambos os grupos. Estude 2: 11/24 sem REA versus 4/24 com REA. Estudo 3: 71/72 versus 68/72. O estudo 4 usa DeepSeek: 20/20 versus 19/20, sem diferença significativa detectada. No Estudo 5, a habilidade revisada custa 14% mais do que a habilidade oficial (p=0.012), sem uma alteração significativa na precisão. A nota de retenção 2026-10-21 Evidence distingue execuções de estudo 482, 336 que chamou REA e 3 reexecuções interrompidas por reinicialização: nenhuma dessas execuções de chamada 339 REA retidas proativamente Evidence; o avaliador o reconstruiu a partir dos registros do cliente.

## Limitações e reivindicações não verificadas

Todos os estudos pinam REA 6.4.0, Claude Code 2.1.296 e seus respectivos modelos, tarefas e permissões; os resultados não podem ser generalizados para as versões atuais ou para toda a engenharia reversa. As diferenças nas taxas de sucesso dos estudos 2 e 3 não foram estatisticamente significativas nos testes do autor. A certificação do estudo 3 Evidence foi corrigida de 142/144 para 144/144 após uma correção na motoniveladora; as contagens de resolução permaneceram inalteradas. O estudo 4 possui apenas pares 20. O estudo 5 compara texto de habilidade injetado em prompts, não no carregamento automático do cliente. Este catálogo não reexecutou os estudos. A contagem 339 é de execuções de chamada REA, não da amostra total do estudo, e não implica conteúdo Evidence ausente ou falha na certificação.

## O que aprender

Avalie controles, distribuição de tarefas, custos e qualidade das evidências em conjunto.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Study 1, preregistered: on ten small Windows crackmes, rea did not change how many Claude Code solved

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md)
- [Projeto / demonstração](https://github.com/pablodiazjorge/rea-lab)
- [Fonte adicional 1](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/README.md)
- [Fonte adicional 2](https://github.com/pablodiazjorge/rea-lab/blob/8796545134a00023b0fba3d75dbbaf77a9be68d8/README.md)
- [Fonte adicional 3](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-4/README.md)
- [Fonte adicional 4](https://github.com/pablodiazjorge/rea-lab/blob/67caf0e9687d3dc4912d6214a61695ebb3f4076c/writeups/2026-10-study-5/README.md)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
