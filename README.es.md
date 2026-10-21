# Awesome REA — Reverse Engineer Anything

![Awesome REA](assets/cover.svg)

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · **Español** · [Français](README.fr.md) · [Deutsch](README.de.md) · [Português (Brasil)](README.pt-BR.md) · [Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

**Comprender el software con REA. ¿Qué construirás?**

Desde ports de juegos heredados hasta un pequeño selector de color, explore proyectos públicos utilizando Reverse Engineer Anything. Vea qué se creó, cómo contribuyó REA y qué queda sin verificar.

[Explora y protagoniza la colección en GitHub](https://github.com/git-sanbu/awesome-rea) · [Software de búsqueda, propósito o palabras clave](https://awesome-rea-e7l.pages.dev/es/) · [Enviar un caso](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)

**34 casos públicos** — Exposiciones oficiales de 5 y proyectos comunitarios o experimentos de autor de 29. Actualizado: 2026-10-21. Cada caso conserva su propia fecha de revisión de la fuente.

> Fuentes revisadas; Las pruebas del autor no se vuelven a ejecutar de forma independiente.

[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)

Esta edición está traducida automáticamente de la versión editorial en inglés. Las citas originales permanecen en su idioma de origen. Cuando la redacción no esté clara, consulte el inglés y las fuentes vinculadas.

## Proyectos populares

Instantánea: 2026-10-21. Proyectos de catálogo revisados ​​en fuente con al menos 100 GitHub Stars, ordenados por estrellas. Stars indica atención, no reproducción independiente o preparación para la producción. [Fuentes de instantáneas](data/popularity.json).

| Proyecto / demostración | GitHub Stars | Proceso y limitaciones |
| --- | ---: | --- |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 738 | [sparkDash: integración del análisis REA en un panel multidispositivo](cases/es/sparkdash-rea.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 721 | [Co-op Anything: investigando puntos de entrada multijugador de campaña](cases/es/coop-anything.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 259 | [terminal-rs: una terminal de mercado informada por interacciones TradingView](cases/es/terminal-rs.md) |

## Vitrinas oficiales

| Proyecto / demostración | la pregunta | fuente primaria |
| --- | --- | --- |
| [DX-Ball: reconstrucción del panorama del sonido estéreo](cases/es/dx-ball.md) | ¿Cómo se convierte una posición en pantalla en un valor panorámico? | [fuente primaria](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| [Notion: seguimiento del puente del portapapeles de texto enriquecido Electron](cases/es/notion-clipboard.md) | ¿Cómo escribe un editor web texto enriquecido a través del portapapeles del escritorio? | [fuente primaria](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| [TH04: recuperando ángulos de anillo de bala PC-98](cases/es/th04.md) | ¿Cómo se distribuyen las balas uniformemente alrededor de un anillo y apuntan hacia el jugador? | [fuente primaria](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| [Aegis: encontrar el algoritmo Android TOTP](cases/es/aegis-totp.md) | ¿Cómo se calcula un código de inicio de sesión de seis dígitos cada 30 segundos? | [fuente primaria](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| [DownUnderCTF: recuperando ecuaciones de verificación de banderas](cases/es/ductf-masked-squares.md) | ¿Cómo se puede recuperar la validación de entrada sin símbolos ni código fuente? | [fuente primaria](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |

## Juegos

| Proyecto / demostración | la pregunta | fuente primaria |
| --- | --- | --- |
| [Desktop Games: portando un juguete de escritorio a macOS y al navegador](cases/es/desktop-games-nostalgia.md) | ¿Cómo se pueden entender y portar el intérprete, el árbol de programas, las interacciones y los activos de Peter? | [fuente primaria](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| [Ski or Die: reconstruyendo Snowball War en Rust](cases/es/ski-or-die.md) | ¿Cómo se pueden recuperar las reglas de lanzamiento, colisión, generación y puntuación de un juego de DOS? | [fuente primaria](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| [OpenBattlefield2: nivel de función Evidence para un cliente Battlefield 2](cases/es/openbattlefield2.md) | ¿Cómo puede la investigación del comportamiento binario, HUD y punto de mira informar la implementación de un motor rastreable? | [fuente primaria](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| [GunZRs: identificar un límite de empaquetado antes de reconstruir a partir de datos del juego](cases/es/gunzrs.md) | ¿Cómo puede continuar la reconstrucción cuando un ejecutable empaquetado impide la recuperación estática de la lógica del juego? | [fuente primaria](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| [Co-op Anything: investigando puntos de entrada multijugador de campaña](cases/es/coop-anything.md) | ¿Cómo puede una campaña conservar sus guiones y aspectos y al mismo tiempo permitir que se una un segundo jugador? | [fuente primaria](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |

## Aplicaciones

| Proyecto / demostración | la pregunta | fuente primaria |
| --- | --- | --- |
| [Sketch (formerly paper-rs): un lienzo infinito Rust inspirado en Paper](cases/es/paper-rs.md) | ¿Cómo pueden las interacciones entre el lienzo, el diseño y el editor informar a una herramienta de diseño independiente? | [fuente primaria](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| [rec-rs: una grabadora nativa macOS inspirada en OBS](cases/es/rec-rs.md) | ¿Cómo se puede construir una pantalla enfocada, una cámara y una grabadora de audio? | [fuente primaria](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| [terminal-rs: una terminal de mercado informada por interacciones TradingView](cases/es/terminal-rs.md) | ¿Cómo puede la investigación de interacción de gráficos informar a una interfaz de mercado Rust independiente? | [fuente primaria](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| [Wispr Flow: un desmontaje de entrada de voz y un pequeño prototipo local](cases/es/wispr-flow.md) | ¿Cómo se conectan la grabación, la transcripción, el contexto y el pegado? | [fuente primaria](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| [hexgrab: investigando el selector de color PowerToys](cases/es/hexgrab.md) | ¿Cómo funcionan juntos las teclas de acceso rápido globales, el muestreo de píxeles y el portapapeles? | [fuente primaria](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| [AdamTerm: investigando el caparazón de Ghostty y construyendo una terminal](cases/es/adamterm.md) | ¿Cómo se dividen el núcleo del terminal, las ventanas nativas, los menús y los servicios? | [fuente primaria](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| [Ledger Reborn: un libro de contabilidad local informado por la investigación QuickBooks](cases/es/ledger-reborn.md) | ¿Cómo pueden los flujos de trabajo de contabilidad de escritorio informar a una aplicación local independiente? | [fuente primaria](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| [DiskLens: comprobación de algoritmos de escaneo de disco y de mapa de árbol en un binario publicado](cases/es/disklens.md) | ¿Cómo se pueden verificar el escaneo de disco, los mapas de árbol y la detección de duplicados antes de crear una nueva interfaz? | [fuente primaria](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| [Hyper3D: de paquetes web capturados a un prototipo 3D independiente](cases/es/hyper3d-clone.md) | ¿Cómo pueden las observaciones de la interfaz y la API informar a un prototipo que exporta modelos 3D? | [fuente primaria](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |

## Hardware y compatibilidad

| Proyecto / demostración | la pregunta | fuente primaria |
| --- | --- | --- |
| [VSL-DSP: aplicación de los hallazgos de la biblioteca del proveedor a herramientas DSP de audio](cases/es/vsl-dsp.md) | ¿Cómo descubre el controlador del proveedor los dispositivos, registra parámetros y representa la ganancia? | [fuente primaria](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| [Virtual Desktop Streamer: un port Linux a través de una capa de plataforma de reemplazo](cases/es/vd-streamer-linux.md) | ¿Cómo se pueden trasladar la captura, la codificación, el audio y la entrada a Linux manteniendo la biblioteca de protocolos? | [fuente primaria](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| [Pixel Watch: un asistente de transferencia de eSIM basado en un análisis de APK complementario](cases/es/watch-esim-helper.md) | ¿Cómo puede un asistente independiente encontrar y abrir el flujo de descarga existente de reloj-eSIM de la aplicación complementaria? | [fuente primaria](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| [PicoPrint: conectar una impresora térmica móvil a la impresión Windows](cases/es/picoprint.md) | Cuando un controlador se conecta pero no imprime, ¿cómo se pueden encontrar las diferencias en el protocolo de enlace? | [fuente primaria](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| [V5VPN: investigación de protocolos para un portal con alcance y un cliente de túnel](cases/es/v5vpn-rea-client.md) | ¿Cómo pueden la autenticación, el descubrimiento de recursos y la investigación de conexiones informar a un cliente independiente de alcance? | [fuente primaria](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |

## Análisis y evaluación

| Proyecto / demostración | la pregunta | fuente primaria |
| --- | --- | --- |
| [OpenBSD netcat: análisis estático de un ELF enviado](cases/es/netcat-analysis.md) | ¿Qué implementaciones de red, proxy y relacionadas con la seguridad se encuentran en el binario netcat enviado? | [fuente primaria](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| [REA on REA: investigando la herramienta y probando predicciones](cases/es/rea-on-rea.md) | ¿Cómo elige REA un proveedor de análisis nativo y detecta un proveedor no disponible? | [fuente primaria](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| [rea-groundtruth: comprobar los puntos ciegos del análisis con una fuente conocida](cases/es/rea-groundtruth.md) | ¿Un informe de cero llamadas o ventanas de IPC refleja la aplicación o una brecha en el análisis? | [fuente primaria](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| [rea-lab: medición de la contribución del REA a la ingeniería inversa del Windows](cases/es/rea-lab.md) | ¿Cómo afecta la adición de REA a la tasa de éxito, el tiempo y el costo de un agente? | [fuente primaria](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| [bzip2: comparación de resultados de binarios eliminados con una compilación simbolizada](cases/es/bzip2-groundtruth.md) | ¿Cómo se puede encontrar una función a partir de una cadena de salida y comprobar sus relaciones de llamada? | [fuente primaria](https://github.com/morluto/rea/discussions/2254) |
| [Un modelo 27B local: una lista de herramientas MCP más pequeña permite el análisis de funciones](cases/es/local-model-mcp.md) | ¿Cómo pueden encajar las descripciones y el análisis de las herramientas REA en el contexto 32K de un modelo local? | [fuente primaria](https://github.com/morluto/rea/discussions/3098) |
| [Open-source REA Lab: fijación de un artefacto npm y análisis de su segmento de entrada](cases/es/opensource-rea-lab.md) | ¿Cómo se puede identificar un artefacto de liberación antes de responder una pregunta de un archivo de entrada acotado? | [fuente primaria](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |

## Aprendizaje y reproducción

| Proyecto / demostración | la pregunta | fuente primaria |
| --- | --- | --- |
| [rea-playbook: convertir Electron Evidence en un informe y reconstrucción](cases/es/rea-playbook.md) | ¿Cómo puede el JSON Evidence de gran tamaño convertirse en datos legibles y en una reconstrucción comprobada? | [fuente primaria](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| [ReaFuse: combinando dos bibliotecas después de investigar su comportamiento](cases/es/reafuse.md) | ¿Cómo pueden dos proyectos convertirse en especificaciones de comportamiento y luego en una nueva herramienta combinada? | [fuente primaria](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |

## Herramientas e integraciones

| Proyecto / demostración | la pregunta | fuente primaria |
| --- | --- | --- |
| [sparkDash: integración del análisis REA en un panel multidispositivo](cases/es/sparkdash-rea.md) | ¿Cómo puede una interfaz web enviar trabajos REA remotos de larga duración y cargar resultados grandes a pedido? | [fuente primaria](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |

## ¿Qué casos están incluidos?

Una fuente primaria pública debe mostrar explícitamente el uso de REA, una pregunta concreta, un proceso y un resultado. El análisis, la implementación independiente y el trabajo histórico se atribuyen por separado. Se aceptan experimentos fallidos, evaluaciones e integraciones REA implementadas. Se excluyen las introducciones de herramientas, espejos y planos no implementados.

[Contribuyendo](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [Registros fuente](SOURCES.md) · [Datos de casos abiertos](data/cases.json)

[Para conocer los requisitos de instalación y versión, consulte el proyecto ascendente REA.](https://github.com/morluto/rea)

Una colección comunitaria independiente comisariada por Sanbu. No afiliado al proyecto upstream REA.

Resumen editorial independiente. El crédito pertenece a los autores originales. El software de destino, los instaladores y el resultado completo del descompilador no se redistribuyen aquí. [MIT](LICENSE).
