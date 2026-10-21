# Awesome REA — Reverse Engineer Anything

![Awesome REA](assets/cover.svg)

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · **Português (Brasil)** · [Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

**Entenda o software com REA. O que você vai construir?**

Desde portas de jogos antigas até um pequeno seletor de cores, explore projetos públicos usando Reverse Engineer Anything. Veja o que foi construído, como REA contribuiu e o que ainda não foi verificado.

[Explore e marque a coleção em GitHub](https://github.com/git-sanbu/awesome-rea) · [Pesquise software, finalidade ou palavras-chave](https://awesome-rea-e7l.pages.dev/pt-BR/) · [Envie um caso](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)

**34 casos públicos** — 5 vitrines oficiais e projetos comunitários 29 ou experimentos de autores. Atualizado: 2026-10-21. Cada caso mantém sua própria data de revisão da fonte.

> Fontes revisadas; os testes do autor não são executados de forma independente.

[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)

Esta edição foi traduzida automaticamente da versão editorial em inglês. As citações originais permanecem no idioma de origem. Quando o texto não estiver claro, consulte o inglês e as fontes vinculadas.

## Projetos populares

Instantâneo: 2026-10-21. Projetos de catálogo revisados ​​pela fonte com pelo menos 100 GitHub Stars, classificados por estrelas. Stars indica atenção, não reprodução independente ou prontidão para produção. [Fontes de instantâneos](data/popularity.json).

| Projeto / demonstração | GitHub Stars | Processo e limitações |
| --- | ---: | --- |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 738 | [sparkDash: integração da análise REA em um painel para vários dispositivos](cases/pt-BR/sparkdash-rea.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 721 | [Co-op Anything: investigando pontos de entrada multijogador da campanha](cases/pt-BR/coop-anything.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 259 | [terminal-rs: um terminal de mercado informado pelas interações TradingView](cases/pt-BR/terminal-rs.md) |

## Vitrines oficiais

| Projeto / demonstração | A questão | Fonte primária |
| --- | --- | --- |
| [DX-Ball: reconstruindo o panorama do som estéreo](cases/pt-BR/dx-ball.md) | Como uma posição na tela se torna um valor de panorâmica sonora? | [Fonte primária](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| [Notion: rastreando a ponte da área de transferência de rich text Electron](cases/pt-BR/notion-clipboard.md) | Como um editor da web escreve rich text na área de transferência da área de trabalho? | [Fonte primária](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| [TH04: recuperando ângulos do anel de bala PC-98](cases/pt-BR/th04.md) | Como as balas são distribuídas uniformemente ao redor de um anel e apontadas para o jogador? | [Fonte primária](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| [Aegis: encontrando o algoritmo Android TOTP](cases/pt-BR/aegis-totp.md) | Como um código de login de seis dígitos é calculado a cada 30 segundos? | [Fonte primária](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| [DownUnderCTF: recuperando equações de verificação de sinalizadores](cases/pt-BR/ductf-masked-squares.md) | Como a validação de entrada pode ser recuperada sem símbolos ou código-fonte? | [Fonte primária](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |

## Jogos

| Projeto / demonstração | A questão | Fonte primária |
| --- | --- | --- |
| [Desktop Games: portando um brinquedo de desktop para macOS e o navegador](cases/pt-BR/desktop-games-nostalgia.md) | Como o intérprete Peter, a árvore de programas, as interações e os ativos podem ser entendidos e portados? | [Fonte primária](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| [Ski or Die: reconstruindo Snowball War em Rust](cases/pt-BR/ski-or-die.md) | Como as regras de lançamento, colisão, desova e pontuação podem ser recuperadas de um jogo DOS? | [Fonte primária](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| [OpenBattlefield2: Evidence de nível de função para um cliente Battlefield 2](cases/pt-BR/openbattlefield2.md) | Como a pesquisa de mira, HUD e comportamento binário pode informar uma implementação de mecanismo rastreável? | [Fonte primária](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| [GunZRs: identificando um limite de empacotamento antes de reconstruir a partir dos dados do jogo](cases/pt-BR/gunzrs.md) | Como a reconstrução pode continuar quando um executável compactado impede a recuperação estática da lógica do jogo? | [Fonte primária](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| [Co-op Anything: investigando pontos de entrada multijogador da campanha](cases/pt-BR/coop-anything.md) | Como uma campanha pode manter seus roteiros e lados enquanto permite a entrada de um segundo jogador? | [Fonte primária](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |

## Aplicativos

| Projeto / demonstração | A questão | Fonte primária |
| --- | --- | --- |
| [Sketch (formerly paper-rs): uma tela infinita Rust inspirada em Paper](cases/pt-BR/paper-rs.md) | Como as interações entre tela, layout e editor podem informar uma ferramenta de design independente? | [Fonte primária](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| [rec-rs: um gravador macOS nativo inspirado em OBS](cases/pt-BR/rec-rs.md) | Como construir uma tela focada, uma câmera e um gravador de áudio? | [Fonte primária](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| [terminal-rs: um terminal de mercado informado pelas interações TradingView](cases/pt-BR/terminal-rs.md) | Como a pesquisa de interação gráfica pode informar uma interface de mercado Rust independente? | [Fonte primária](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| [Wispr Flow: uma desmontagem da entrada de voz e um pequeno protótipo local](cases/pt-BR/wispr-flow.md) | Como a gravação, a transcrição, o contexto e a colagem estão conectados? | [Fonte primária](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| [hexgrab: investigando o seletor de cores PowerToys](cases/pt-BR/hexgrab.md) | Como as teclas de atalho globais, a amostragem de pixels e a área de transferência funcionam juntas? | [Fonte primária](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| [AdamTerm: investigando o shell do Ghostty e construindo um terminal](cases/pt-BR/adamterm.md) | Como são divididos o núcleo do terminal, janelas nativas, menus e serviços? | [Fonte primária](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| [Ledger Reborn: um livro-razão local informado pela pesquisa QuickBooks](cases/pt-BR/ledger-reborn.md) | Como os fluxos de trabalho de contabilidade de desktop podem informar um aplicativo local independente? | [Fonte primária](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| [DiskLens: verificando algoritmos de varredura de disco e mapa de árvore em um binário lançado](cases/pt-BR/disklens.md) | Como a verificação de disco, mapas de árvore e detecção de duplicatas podem ser verificadas antes de construir uma nova interface? | [Fonte primária](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| [Hyper3D: de pacotes de web capturados a um protótipo 3D independente](cases/pt-BR/hyper3d-clone.md) | Como as observações de interface e API podem informar um protótipo que exporta modelos 3D? | [Fonte primária](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |

## Hardware e compatibilidade

| Projeto / demonstração | A questão | Fonte primária |
| --- | --- | --- |
| [VSL-DSP: aplicando descobertas da biblioteca do fornecedor a ferramentas DSP de áudio](cases/pt-BR/vsl-dsp.md) | Como o controlador do fornecedor descobre dispositivos, registra parâmetros e representa ganhos? | [Fonte primária](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| [Virtual Desktop Streamer: uma porta Linux por meio de uma camada de plataforma de substituição](cases/pt-BR/vd-streamer-linux.md) | Como a captura, a codificação, o áudio e a entrada podem ser transferidos para Linux, mantendo a biblioteca de protocolos? | [Fonte primária](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| [Pixel Watch: um auxiliar de transferência de eSIM informado pela análise de APK complementar](cases/pt-BR/watch-esim-helper.md) | Como um ajudante separado pode encontrar e abrir o fluxo de download existente do watch-eSIM do aplicativo complementar? | [Fonte primária](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| [PicoPrint: conectando uma impressora térmica móvel à impressão Windows](cases/pt-BR/picoprint.md) | Quando um driver se conecta, mas não imprime, como podem ser encontradas diferenças de handshake? | [Fonte primária](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| [V5VPN: pesquisa de protocolo para um portal com escopo definido e cliente de túnel](cases/pt-BR/v5vpn-rea-client.md) | Como a autenticação, a descoberta de recursos e a pesquisa de conexão podem informar um cliente independente com escopo definido? | [Fonte primária](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |

## Análise e avaliação

| Projeto / demonstração | A questão | Fonte primária |
| --- | --- | --- |
| [OpenBSD netcat: análise estática de um ELF enviado](cases/pt-BR/netcat-analysis.md) | Quais implementações de rede, proxy e segurança estão no binário netcat enviado? | [Fonte primária](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| [REA on REA: investigando a ferramenta e testando previsões](cases/pt-BR/rea-on-rea.md) | Como REA escolhe um provedor de análise nativa e detecta um provedor indisponível? | [Fonte primária](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| [rea-groundtruth: verificando pontos cegos da análise em relação a fontes conhecidas](cases/pt-BR/rea-groundtruth.md) | Um relatório de zero chamadas ou janelas IPC reflete o aplicativo ou uma lacuna de análise? | [Fonte primária](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| [rea-lab: medindo a contribuição de REA para a engenharia reversa de Windows](cases/pt-BR/rea-lab.md) | Como a adição de REA afeta a taxa de sucesso, o tempo e o custo de um agente? | [Fonte primária](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| [bzip2: verificando descobertas binárias despojadas em relação a uma construção simbolizada](cases/pt-BR/bzip2-groundtruth.md) | Como uma função pode ser encontrada a partir de uma string de saída e seus relacionamentos de chamada verificados? | [Fonte primária](https://github.com/morluto/rea/discussions/2254) |
| [Um modelo 27B local: uma lista menor de ferramentas MCP permite a análise de funções](cases/pt-BR/local-model-mcp.md) | Como as descrições e análises da ferramenta REA podem se ajustar ao contexto 32K de um modelo local? | [Fonte primária](https://github.com/morluto/rea/discussions/3098) |
| [Open-source REA Lab: fixando um artefato npm e analisando sua fatia de entrada](cases/pt-BR/opensource-rea-lab.md) | Como um artefato de liberação pode ser identificado antes de responder a uma pergunta do arquivo de entrada limitado? | [Fonte primária](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |

## Aprendizagem e reprodução

| Projeto / demonstração | A questão | Fonte primária |
| --- | --- | --- |
| [rea-playbook: transformando Electron Evidence em um relatório e reconstrução](cases/pt-BR/rea-playbook.md) | Como o JSON Evidence grande pode se tornar fatos legíveis e uma reconstrução verificada? | [Fonte primária](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| [ReaFuse: combinando duas bibliotecas após investigar seu comportamento](cases/pt-BR/reafuse.md) | Como podem dois projetos tornar-se especificações de comportamento e depois uma nova ferramenta combinada? | [Fonte primária](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |

## Ferramentas e integrações

| Projeto / demonstração | A questão | Fonte primária |
| --- | --- | --- |
| [sparkDash: integração da análise REA em um painel para vários dispositivos](cases/pt-BR/sparkdash-rea.md) | Como uma interface da web pode enviar trabalhos REA remotos de longa duração e carregar grandes resultados sob demanda? | [Fonte primária](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |

## Quais casos estão incluídos?

Uma fonte primária pública deve mostrar explicitamente o uso de REA, uma pergunta concreta, um processo e um resultado. Análise, implementação independente e trabalho histórico são atribuídos separadamente. Experimentos fracassados, avaliações e integrações REA implementadas são bem-vindas. Excluem-se introduções de ferramentas, espelhos e planos não implementados.

[Contribuindo](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [Registros de origem](SOURCES.md) · [Dados do caso aberto](data/cases.json)

[Para requisitos de instalação e versão, consulte o projeto upstream REA.](https://github.com/morluto/rea)

Uma coleção comunitária independente com curadoria de Sanbu. Não afiliado ao projeto upstream REA.

Resumo editorial independente. O crédito pertence aos autores originais. O software alvo, os instaladores e a saída completa do descompilador não são redistribuídos aqui. [MIT](LICENSE).
