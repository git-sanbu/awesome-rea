# Awesome REA — Reverse Engineer Anything

![Awesome REA](assets/cover.svg)

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · **Français** · [Deutsch](README.de.md) · [Português (Brasil)](README.pt-BR.md) · [Русский](README.ru.md) · [العربية](README.ar.md) · [हिन्दी](README.hi.md)

**Comprenez le logiciel avec REA. Qu'allez-vous construire ?**

Des anciens ports de jeu à un petit sélecteur de couleurs, explorez les projets publics à l'aide du Reverse Engineer Anything. Découvrez ce qui a été construit, comment REA a contribué et ce qui reste non vérifié.

[Explorez et mettez en vedette la collection sur GitHub](https://github.com/git-sanbu/awesome-rea) · [Rechercher un logiciel, un objectif ou des mots-clés](https://awesome-rea-e7l.pages.dev/fr/) · [Soumettre un cas](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)

**Affaires publiques 34** — Présentations officielles 5 et projets communautaires 29 ou expériences d'auteurs. Mise à jour : 2026-10-21. Chaque cas conserve sa propre date d’examen des sources.

> Sources examinées ; les tests de l'auteur ne sont pas réexécutés indépendamment.

[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)

Cette édition est traduite automatiquement à partir de la version éditoriale anglaise. Les citations originales restent dans leur langue source. Lorsque la formulation n’est pas claire, consultez l’anglais et les sources liées.

## Projets populaires

Instantané : 2026-10-21. Projets de catalogue examinés par la source avec au moins 100 GitHub Stars, triés par étoiles. Stars indique une attention, et non une reproduction indépendante ou une préparation à la production. [Sources d'instantanés](data/popularity.json).

| Projet / démo | GitHub Stars | Processus et limites |
| --- | ---: | --- |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 738 | [sparkDash: intégration de l'analyse REA dans un tableau de bord multi-appareils](cases/fr/sparkdash-rea.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 721 | [Co-op Anything: enquête sur les points d'entrée multijoueurs de la campagne](cases/fr/coop-anything.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 259 | [terminal-rs: un terminal de marché informé par les interactions TradingView](cases/fr/terminal-rs.md) |

## Vitrines officielles

| Projet / démo | La question | Source primaire |
| --- | --- | --- |
| [DX-Ball: reconstruction du panoramique sonore stéréo](cases/fr/dx-ball.md) | Comment une position à l’écran devient-elle une valeur de panoramique sonore ? | [Source primaire](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| [Notion: traçage du pont du presse-papiers en texte enrichi Electron](cases/fr/notion-clipboard.md) | Comment un éditeur Web écrit-il du texte enrichi via le presse-papiers du bureau ? | [Source primaire](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| [TH04: récupération des angles des anneaux de balle PC-98](cases/fr/th04.md) | Comment les balles sont-elles réparties uniformément autour d’un anneau et dirigées vers le joueur ? | [Source primaire](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| [Aegis: trouver l'algorithme Android TOTP](cases/fr/aegis-totp.md) | Comment un code de connexion à six chiffres est-il calculé toutes les secondes 30 ? | [Source primaire](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| [DownUnderCTF: récupération des équations de vérification des drapeaux](cases/fr/ductf-masked-squares.md) | Comment récupérer la validation des entrées sans symboles ni code source ? | [Source primaire](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |

## Jeux

| Projet / démo | La question | Source primaire |
| --- | --- | --- |
| [Desktop Games: portage d'un jouet de bureau sur macOS et le navigateur](cases/fr/desktop-games-nostalgia.md) | Comment l'interpréteur Peter, l'arborescence du programme, les interactions et les actifs peuvent-ils être compris et portés ? | [Source primaire](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| [Ski or Die: reconstruction de Snowball War en Rust](cases/fr/ski-or-die.md) | Comment les règles de lancer, de collision, d'apparition et de notation peuvent-elles être récupérées à partir d'un jeu DOS ? | [Source primaire](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| [OpenBattlefield2: niveau fonction Evidence pour un client Battlefield 2](cases/fr/openbattlefield2.md) | Comment la recherche sur le réticule, le HUD et le comportement binaire peut-elle éclairer la mise en œuvre d'un moteur traçable ? | [Source primaire](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| [GunZRs: identification d'une limite de regroupement avant la reconstruction à partir des données de jeu](cases/fr/gunzrs.md) | Comment la reconstruction peut-elle continuer lorsqu'un exécutable compressé empêche la récupération statique de la logique du jeu ? | [Source primaire](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| [Co-op Anything: enquête sur les points d'entrée multijoueurs de la campagne](cases/fr/coop-anything.md) | Comment une campagne peut-elle conserver ses scripts et ses côtés tout en permettant à un deuxième joueur de la rejoindre ? | [Source primaire](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |

## Applications

| Projet / démo | La question | Source primaire |
| --- | --- | --- |
| [Sketch (formerly paper-rs): une toile infinie Rust inspirée de Paper](cases/fr/paper-rs.md) | Comment les interactions entre le canevas, la mise en page et l’éditeur peuvent-elles éclairer un outil de conception indépendant ? | [Source primaire](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| [rec-rs: un enregistreur macOS natif inspiré d'OBS](cases/fr/rec-rs.md) | Comment construire un écran, une caméra et un enregistreur audio ciblés ? | [Source primaire](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| [terminal-rs: un terminal de marché informé par les interactions TradingView](cases/fr/terminal-rs.md) | Comment la recherche sur les interactions graphiques peut-elle éclairer une interface de marché Rust indépendante ? | [Source primaire](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| [Wispr Flow: un démontage de la saisie vocale et un petit prototype local](cases/fr/wispr-flow.md) | Comment l’enregistrement, la transcription, le contexte et le collage sont-ils connectés ? | [Source primaire](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| [hexgrab: enquête sur le sélecteur de couleurs PowerToys](cases/fr/hexgrab.md) | Comment les raccourcis clavier globaux, l'échantillonnage de pixels et le presse-papiers fonctionnent-ils ensemble ? | [Source primaire](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| [AdamTerm: enquêter sur le shell du Ghostty et construire un terminal](cases/fr/adamterm.md) | Comment sont répartis le noyau du terminal, les fenêtres natives, les menus et les services ? | [Source primaire](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| [Ledger Reborn: un grand livre local éclairé par la recherche QuickBooks](cases/fr/ledger-reborn.md) | Comment les workflows de comptabilité de bureau peuvent-ils éclairer une application locale indépendante ? | [Source primaire](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| [DiskLens: vérification des algorithmes d'analyse de disque et de treemap dans un binaire publié](cases/fr/disklens.md) | Comment vérifier l'analyse du disque, les arborescences et la détection des doublons avant de créer une nouvelle interface ? | [Source primaire](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| [Hyper3D: des bundles Web capturés à un prototype 3D indépendant](cases/fr/hyper3d-clone.md) | Comment les observations d’interface et d’API peuvent-elles éclairer un prototype qui exporte des modèles 3D ? | [Source primaire](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |

## Matériel et compatibilité

| Projet / démo | La question | Source primaire |
| --- | --- | --- |
| [VSL-DSP: application des résultats de la bibliothèque du fournisseur aux outils DSP audio](cases/fr/vsl-dsp.md) | Comment le contrôleur du fournisseur découvre-t-il les appareils, enregistre-t-il les paramètres et représente-t-il le gain ? | [Source primaire](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| [Virtual Desktop Streamer: un port Linux via une couche plateforme de remplacement](cases/fr/vd-streamer-linux.md) | Comment la capture, l'encodage, l'audio et l'entrée peuvent-ils être déplacés vers Linux tout en conservant la bibliothèque de protocoles ? | [Source primaire](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| [Pixel Watch: un assistant de transfert eSIM informé par l'analyse compagnon-APK](cases/fr/watch-esim-helper.md) | Comment un assistant distinct peut-il trouver et ouvrir le flux de téléchargement watch-eSIM existant de l’application compagnon ? | [Source primaire](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| [PicoPrint: connecter une imprimante thermique mobile à l'impression Windows](cases/fr/picoprint.md) | Lorsqu'un pilote se connecte mais n'imprime pas, comment détecter les différences de prise de contact ? | [Source primaire](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| [V5VPN: recherche de protocole pour un client de portail et de tunnel étendu](cases/fr/v5vpn-rea-client.md) | Comment l’authentification, la découverte de ressources et la recherche de connexions peuvent-elles informer un client indépendant ciblé ? | [Source primaire](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |

## Analyse et évaluation

| Projet / démo | La question | Source primaire |
| --- | --- | --- |
| [OpenBSD netcat: analyse statique d'un ELF livré](cases/fr/netcat-analysis.md) | Quelles implémentations liées au réseau, au proxy et à la sécurité se trouvent dans le binaire netcat fourni ? | [Source primaire](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| [REA on REA: enquêter sur l'outil et tester les prédictions](cases/fr/rea-on-rea.md) | Comment REA choisit-il un fournisseur d’analyse natif et détecte-t-il un fournisseur indisponible ? | [Source primaire](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| [rea-groundtruth: vérification des angles morts de l'analyse par rapport à une source connue](cases/fr/rea-groundtruth.md) | Un rapport indiquant zéro appel ou fenêtre IPC reflète-t-il l'application ou une lacune d'analyse ? | [Source primaire](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| [rea-lab: mesurer la contribution du REA à l'ingénierie inverse du Windows](cases/fr/rea-lab.md) | Comment l’ajout de REA affecte-t-il le taux de réussite, le temps et le coût d’un agent ? | [Source primaire](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| [bzip2: vérification des résultats binaires supprimés par rapport à une version symbolisée](cases/fr/bzip2-groundtruth.md) | Comment trouver une fonction à partir d’une chaîne de sortie et vérifier ses relations d’appel ? | [Source primaire](https://github.com/morluto/rea/discussions/2254) |
| [Un modèle 27B local : une liste d'outils MCP plus petite permet l'analyse des fonctions](cases/fr/local-model-mcp.md) | Comment les descriptions et analyses des outils REA peuvent-elles s'intégrer dans le contexte 32K d'un modèle local ? | [Source primaire](https://github.com/morluto/rea/discussions/3098) |
| [Open-source REA Lab: épingler un artefact npm et analyser sa tranche d'entrée](cases/fr/opensource-rea-lab.md) | Comment identifier un artefact de version avant de répondre à une question limitée relative au fichier d'entrée ? | [Source primaire](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |

## Apprentissage et reproduction

| Projet / démo | La question | Source primaire |
| --- | --- | --- |
| [rea-playbook: transformer Electron Evidence en rapport et reconstruction](cases/fr/rea-playbook.md) | Comment un grand Evidence JSON peut-il devenir des faits lisibles et une reconstruction vérifiée ? | [Source primaire](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| [ReaFuse: combiner deux bibliothèques après avoir étudié leur comportement](cases/fr/reafuse.md) | Comment deux projets peuvent-ils devenir des spécifications de comportement puis un nouvel outil combiné ? | [Source primaire](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |

## Outils et intégrations

| Projet / démo | La question | Source primaire |
| --- | --- | --- |
| [sparkDash: intégration de l'analyse REA dans un tableau de bord multi-appareils](cases/fr/sparkdash-rea.md) | Comment une interface Web peut-elle soumettre des tâches REA distantes de longue durée et charger des résultats volumineux à la demande ? | [Source primaire](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |

## Quels cas sont inclus ?

Une source primaire publique doit montrer explicitement l'utilisation de REA, une question concrète, un processus et un résultat. L'analyse, la mise en œuvre indépendante et le travail historique sont attribués séparément. Les expériences échouées, les évaluations et les intégrations REA mises en œuvre sont les bienvenues. Les introductions d'outils, les miroirs et les plans non mis en œuvre sont exclus.

[Contribuer](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [Enregistrements sources](SOURCES.md) · [Données de cas ouvertes](data/cases.json)

[Pour connaître les exigences d'installation et de version, consultez le projet en amont REA.](https://github.com/morluto/rea)

Une collection communautaire indépendante organisée par Sanbu. Non affilié au projet en amont REA.

Résumé éditorial indépendant. Le crédit appartient aux auteurs originaux. Les logiciels cibles, les installateurs et la sortie complète du décompilateur ne sont pas redistribués ici. [MIT](LICENSE).
