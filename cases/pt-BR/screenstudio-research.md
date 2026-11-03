# Screen Studio: separando a inspeção estática do registro e exportação de evidências

[← Voltar para todos os casos](../../README.pt-BR.md) · Aplicativos

[English](../screenstudio-research.md) · [简体中文](../zh-CN/screenstudio-research.md) · [繁體中文](../zh-TW/screenstudio-research.md) · [日本語](../ja/screenstudio-research.md) · [한국어](../ko/screenstudio-research.md) · [Español](../es/screenstudio-research.md) · [Français](../fr/screenstudio-research.md) · [Deutsch](../de/screenstudio-research.md) · [Português (Brasil)](../pt-BR/screenstudio-research.md) · [Русский](../ru/screenstudio-research.md) · [العربية](../ar/screenstudio-research.md) · [हिन्दी](../hi/screenstudio-research.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

- **Autor / atribuição:** Royo-Qiao
- **Data de revisão da fonte:** 2026-11-03
- **Rever estado:** Fontes revisadas; os testes do autor não são executados de forma independente.
- **Alvo:** Screen Studio 3.7.3-4540, incluindo uma cópia Apple Silicon reembalada localmente

## A questão

Como as descobertas do Electron e do auxiliar nativo podem ser mantidas separadas da prova de gravação, exportação e compatibilidade?

## O que REA fez

As inspeções de fusível REA e Mach-O forneceram trechos estáticos selecionados de Evidence com IDs e hashes. Uma análise de aplicativo JavaScript local expirou duas vezes; nenhum gráfico completo ou descompilação de função nativa é reivindicado.

## Resultados relatados pelo autor

O autor publica inspeção, estatísticas agregadas de projetos e ferramentas de validação de exportação. Uma gravação nativa histórica supostamente exportou quadros 3, 337 em 1104 × 720 e 60 fps e totalmente decodificada; uma verificação posterior da ferramenta somente leitura examinou a exportação salva e os eventos agregados de entrada humana.

## Limitações e reivindicações não verificadas

Gravações privadas e livros-razão completos não estão disponíveis para reprodução. O hash Mach-O identifica uma cópia reembalada localmente. A autorização de rede falhou, uma tentativa de corte não entrou em vigor, a assinatura final não foi seguida por um novo teste de captura completo e apenas uma configuração Apple Silicon/macOS foi exercida. A decodificação do arquivo não comprova a procedência da gravação ou equivalência visual; este catálogo não reexecutou o experimento.

## O que aprender

Mantenha os metadados estáticos, as observações da interface do usuário, a decodificação de arquivos e o feedback humano como evidências separadas e publique as verificações com falha junto com as verificações bem-sucedidas.

## Evidência de uso de REA na fonte

A formatação do trecho é simplificada. Leia a fonte original para o contexto completo.

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## Fontes originais

- [Fonte primária/evidência fixada](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [Projeto / demonstração](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [Fonte adicional 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [Fonte adicional 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [Fonte adicional 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [Fonte adicional 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui.

<!-- Gerado a partir de dados de catálogo; edite os arquivos de dados para atualizar esta nota. -->
