# Co-op Anything: investigando pontos de entrada multijogador da campanha

[← Voltar para todos os casos](../../README.pt-BR.md) · Jogos

[English](../coop-anything.md) · [简体中文](../zh-CN/coop-anything.md) · [繁體中文](../zh-TW/coop-anything.md) · [日本語](../ja/coop-anything.md) · [한국어](../ko/coop-anything.md) · [Español](../es/coop-anything.md) · [Français](../fr/coop-anything.md) · [Deutsch](../de/coop-anything.md) · [Português (Brasil)](../pt-BR/coop-anything.md) · [Русский](../ru/coop-anything.md) · [العربية](../ar/coop-anything.md) · [हिन्दी](../hi/coop-anything.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** cranebeaker and community contributors
- **Data de revisão da fonte:** 2026-10-21
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Compilações Steam C&C3 Tiberium Wars / Kane’s Wrath e servidor World in Conflict client/dedicated

## A questão

Como uma campanha pode manter seus roteiros e lados enquanto permite a entrada de um segundo jogador?

## O que REA fez

As notas C&C3 registram explicitamente observações REA/Ghidra 12.1.4 do executável TW 1.10, localizando a função que remove os lados da campanha durante a preparação de multiplayer/skirmish. As notas World in Conflict documentam a análise de seleção de função de servidor dedicado por meio de REA/Ghidra, separando restrições de jogador único, estado do servidor e inferências não verificadas. Outros scripts, depuradores e testes de tempo de execução cuidam do trabalho posterior.

## Resultados relatados pelo autor

O projeto publica MCP/habilidades, ferramentas de teste de sincronização e pesquisas específicas de jogos. As notas C&C3 incluem endereços, formatos e experimentos. Para World in Conflict, o autor relata um host de campanha LAN executando missões enquanto um segundo cliente se junta e vê unidades sincronizadas ao vivo, mas não pode controlar suas próprias unidades. Cada jogo mantém seu próprio nível de controle de qualidade.

## Limitações e reivindicações não verificadas

A atribuição de REA é limitada às investigações C&C3 e World in Conflict revisadas, não a todos os mods no diretório. O controle do jogador dois, zonas de implantação, visibilidade e jogo na Internet permanecem inacabados em World in Conflict; o relatório verifica apenas a LAN. C&C3 também apresenta falhas de campanha não resolvidas e problemas de contexto. Stars não prova ser uma campanha completável. Este catálogo não rodou os jogos ou testes.

## O que aprender

Valide a conexão do cliente, a visibilidade sincronizada e o modo cooperativo genuinamente jogável como resultados separados.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> Engine seams (observed in the TW 1.10 exe with REA/Ghidra 12.1.4)

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md)
- [Projeto / demonstração](https://github.com/cranebeaker/coop-anything)
- [Fonte adicional 1](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/README.md)
- [Fonte adicional 2](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/world-in-conflict/NOTES.md)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
