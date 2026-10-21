# GunZRs: identificando um limite de empacotamento antes de reconstruir a partir dos dados do jogo

[← Voltar para todos os casos](../../README.pt-BR.md) · Jogos

[English](../gunzrs.md) · [简体中文](../zh-CN/gunzrs.md) · [繁體中文](../zh-TW/gunzrs.md) · [日本語](../ja/gunzrs.md) · [한국어](../ko/gunzrs.md) · [Español](../es/gunzrs.md) · [Français](../fr/gunzrs.md) · [Deutsch](../de/gunzrs.md) · [Português (Brasil)](../pt-BR/gunzrs.md) · [Русский](../ru/gunzrs.md) · [العربية](../ar/gunzrs.md) · [हिन्दी](../hi/gunzrs.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** OpenRsG
- **Data de revisão da fonte:** 2026-10-21
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** GunZ: A instalação do Duel Steam, Gunz.exe e arquivos .mrs

## A questão

Como a reconstrução pode continuar quando um executável compactado impede a recuperação estática da lógica do jogo?

## O que REA fez

REA e Ghidra investigam arquivos nativos. O autor registra seções Themida, entrada RVA e stubs de descompactação em Gunz.exe, com caminhos locais REA Evidence. Os formatos de jogo são então recuperados principalmente da estrutura do arquivo de dados. Os scripts públicos também cobrem consultas REA, equipamentos ELF/PE gerados, análise, armazenamento em cache e propagação de falhas.

## Resultados relatados pelo autor

O projeto publica uma reconstrução Rust + Bevy, notas de formato, scripts de consulta e testes. O autor relata a jogabilidade do Linux com instalação própria, mapas, ações, bots, construção de navegador e LAN. A análise da função ELF/PE gerada e as verificações de repetição de instantâneos são registradas separadamente da compatibilidade do jogo.

## Limitações e reivindicações não verificadas

O código do jogo compactado não foi recuperado estaticamente e alguns comportamentos e tempo são inferidos. O Evidence original permanece local para o autor; o material público inclui descrições e scripts. As compilações de CI Windows/macOS são relatadas, mas não foram reproduzidas pelo autor. As contagens de mapas têm escopos de notas diferentes e não comprovam compatibilidade total. Este catálogo não foi executado novamente.

## O que aprender

Uma falha na análise ainda pode estabelecer um limite útil: rotular fatos binários, observações de arquivos de dados e inferências separadamente.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> stub (REA evidence under .local/re/a076a5d8…/). Game code is not statically readable

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md)
- [Projeto / demonstração](https://github.com/OpenRsG/GunZRs)
- [Fonte adicional 1](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/README.md)
- [Fonte adicional 2](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/reverse-engineering.md)
- [Fonte adicional 3](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/scripts/rea.sh)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
