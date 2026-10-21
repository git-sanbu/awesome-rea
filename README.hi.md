# Awesome REA — Reverse Engineer Anything

![Awesome REA](assets/cover.svg)

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Português (Brasil)](README.pt-BR.md) · [Русский](README.ru.md) · [العربية](README.ar.md) · **हिन्दी**

**REA के साथ सॉफ्टवेयर को समझें। आप क्या बनाएंगे?**

पुराने गेम पोर्ट से लेकर छोटे कलर पिकर तक, Reverse Engineer Anything का उपयोग करके सार्वजनिक परियोजनाओं का पता लगाएं। देखें कि क्या बनाया गया था, REA ने कैसे योगदान दिया और क्या असत्यापित है।

[GitHub पर संग्रह को खोजें और तारांकित करें](https://github.com/git-sanbu/awesome-rea) · [सॉफ़्टवेयर, उद्देश्य या कीवर्ड खोजें](https://awesome-rea-e7l.pages.dev/hi/) · [एक मामला प्रस्तुत करें](https://github.com/git-sanbu/awesome-rea/issues/new?template=case_submission.yml)

**34 सार्वजनिक मामले** — 5 आधिकारिक शोकेस और 29 सामुदायिक परियोजनाएं या लेखक प्रयोग. अपडेट किया गया: 2026-10-21। प्रत्येक मामले की अपनी स्रोत-समीक्षा तिथि बरकरार रहती है।

> सूत्रों की समीक्षा की गई; लेखक परीक्षण स्वतंत्र रूप से दोबारा नहीं चलाए गए।

[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)

यह संस्करण संपादकीय अंग्रेजी संस्करण से मशीन-अनुवादित है। मूल उद्धरण उनकी स्रोत भाषा में रहते हैं। जब शब्दांकन अस्पष्ट हो, तो अंग्रेजी और संबंधित स्रोतों से परामर्श लें।

## लोकप्रिय परियोजनाएँ

स्नैपशॉट: 2026-10-21. सितारों द्वारा क्रमबद्ध, कम से कम 100 GitHub Stars के साथ स्रोत-समीक्षित कैटलॉग परियोजनाएं। Stars ध्यान का संकेत देता है, स्वतंत्र पुनरुत्पादन या उत्पादन की तैयारी का नहीं। [स्नैपशॉट स्रोत](data/popularity.json).

| प्रोजेक्ट/डेमो | GitHub Stars | प्रक्रिया और सीमाएँ |
| --- | ---: | --- |
| [MiaAI-Lab/sparkDash](https://github.com/MiaAI-Lab/sparkDash) | 738 | [sparkDash: REA विश्लेषण को मल्टी-डिवाइस डैशबोर्ड में एकीकृत करना](cases/hi/sparkdash-rea.md) |
| [cranebeaker/coop-anything](https://github.com/cranebeaker/coop-anything) | 721 | [Co-op Anything: अभियान मल्टीप्लेयर प्रवेश बिंदुओं की जांच](cases/hi/coop-anything.md) |
| [michaelshimeles/terminal-rs](https://github.com/michaelshimeles/terminal-rs) | 259 | [terminal-rs: TradingView इंटरैक्शन द्वारा सूचित एक मार्केट टर्मिनल](cases/hi/terminal-rs.md) |

## आधिकारिक शोकेस

| प्रोजेक्ट/डेमो | सवाल | प्राथमिक स्रोत |
| --- | --- | --- |
| [DX-Ball: स्टीरियो साउंड पैनिंग का पुनर्निर्माण](cases/hi/dx-ball.md) | ऑन-स्क्रीन स्थिति ध्वनि-पैन मान कैसे बन जाती है? | [प्राथमिक स्रोत](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/dx-ball-sound-pan.md) |
| [Notion: Electron रिच-टेक्स्ट क्लिपबोर्ड ब्रिज का पता लगाना](cases/hi/notion-clipboard.md) | एक वेब संपादक डेस्कटॉप क्लिपबोर्ड के माध्यम से समृद्ध पाठ कैसे लिखता है? | [प्राथमिक स्रोत](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/notion-clipboard.md) |
| [TH04: PC-98 बुलेट-रिंग कोण पुनर्प्राप्त करना](cases/hi/th04.md) | गोलियों को रिंग के चारों ओर समान रूप से कैसे वितरित किया जाता है और खिलाड़ी की ओर लक्षित किया जाता है? | [प्राथमिक स्रोत](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/th04-bullet-ring.md) |
| [Aegis: Android TOTP एल्गोरिदम ढूँढना](cases/hi/aegis-totp.md) | प्रत्येक 30 सेकंड में छह अंकों वाले लॉगिन कोड की गणना कैसे की जाती है? | [प्राथमिक स्रोत](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/public/showcase/aegis/index.html) |
| [DownUnderCTF: फ़्लैग-चेकिंग समीकरणों को पुनर्प्राप्त करना](cases/hi/ductf-masked-squares.md) | प्रतीकों या स्रोत कोड के बिना इनपुट सत्यापन कैसे पुनर्प्राप्त किया जा सकता है? | [प्राथमिक स्रोत](https://github.com/morluto/rea/blob/42fc6c53ae188978deb3bedfe88287b6b316ba22/website/evidence/ctf-masked-squares.md) |

## खेल

| प्रोजेक्ट/डेमो | सवाल | प्राथमिक स्रोत |
| --- | --- | --- |
| [Desktop Games: डेस्कटॉप टॉय को macOS और ब्राउज़र में पोर्ट करना](cases/hi/desktop-games-nostalgia.md) | पीटर दुभाषिया, प्रोग्राम ट्री, इंटरैक्शन और संपत्तियों को कैसे समझा और पोर्ट किया जा सकता है? | [प्राथमिक स्रोत](https://github.com/ucodia/desktop-games-nostalgia/blob/27946dfe49d4a9b522dfe017c14eefbc0ca40b2a/README.md) |
| [Ski or Die: Rust में Snowball War का पुनर्निर्माण](cases/hi/ski-or-die.md) | डॉस गेम से थ्रो, टकराव, स्पॉनिंग और स्कोरिंग नियम कैसे पुनर्प्राप्त किए जा सकते हैं? | [प्राथमिक स्रोत](https://github.com/tuunanet/rea-ski-or-die-reconstruction/blob/0eac0671c90e21a16e663da7772b60710101ef7f/README.md) |
| [OpenBattlefield2: फ़ंक्शन-स्तर Evidence](cases/hi/openbattlefield2.md) | क्रॉसहेयर, एचयूडी और बाइनरी-व्यवहार अनुसंधान एक ट्रेस करने योग्य इंजन कार्यान्वयन को कैसे सूचित कर सकते हैं? | [प्राथमिक स्रोत](https://github.com/Moxnatiy/OpenBattlefield2/blob/48078865c89ab6c3a98af8ecb06a40349b640e34/docs/functions/hud-crosshair.md) |
| [GunZRs: गेम डेटा से पुनर्निर्माण से पहले पैकिंग सीमा की पहचान करना](cases/hi/gunzrs.md) | जब एक पैक्ड निष्पादन योग्य गेम लॉजिक की स्थैतिक पुनर्प्राप्ति को रोकता है तो पुनर्निर्माण कैसे जारी रह सकता है? | [प्राथमिक स्रोत](https://github.com/OpenRsG/GunZRs/blob/485575b7451912ed1d62661c388663b08dce4faf/docs/formats.md) |
| [Co-op Anything: अभियान मल्टीप्लेयर प्रवेश बिंदुओं की जांच](cases/hi/coop-anything.md) | किसी दूसरे खिलाड़ी को शामिल होने देते समय कोई अभियान अपनी स्क्रिप्ट और पक्षों को कैसे बरकरार रख सकता है? | [प्राथमिक स्रोत](https://github.com/cranebeaker/coop-anything/blob/9e972b6d8e8aa62c53ad933cff3b64ae489e4ee3/games/command-and-conquer-3/NOTES.md) |

## अनुप्रयोग

| प्रोजेक्ट/डेमो | सवाल | प्राथमिक स्रोत |
| --- | --- | --- |
| [Sketch (formerly paper-rs): एक Paper-प्रेरित Rust अनंत कैनवास](cases/hi/paper-rs.md) | कैनवास, लेआउट और संपादक इंटरैक्शन एक स्वतंत्र डिज़ाइन टूल को कैसे सूचित कर सकते हैं? | [प्राथमिक स्रोत](https://github.com/michaelshimeles/paper-rs/blob/2a7db544b4d4fc81397a4b2c30ba66757c8cc928/README.md) |
| [rec-rs: एक OBS-प्रेरित देशी macOS रिकॉर्डर](cases/hi/rec-rs.md) | एक केंद्रित स्क्रीन, कैमरा और ऑडियो रिकॉर्डर कैसे बनाया जा सकता है? | [प्राथमिक स्रोत](https://github.com/michaelshimeles/rec-rs/blob/c8791be63d25f056a7f4705fba64c55774511708/README.md) |
| [terminal-rs: TradingView इंटरैक्शन द्वारा सूचित एक मार्केट टर्मिनल](cases/hi/terminal-rs.md) | चार्ट-इंटरैक्शन अनुसंधान एक स्वतंत्र Rust बाज़ार इंटरफ़ेस को कैसे सूचित कर सकता है? | [प्राथमिक स्रोत](https://github.com/michaelshimeles/terminal-rs/blob/2ae060d2d0b608aad910ed855039f6795a3322c2/README.md) |
| [Wispr Flow: एक स्पीच-इनपुट टियरडाउन और एक छोटा स्थानीय प्रोटोटाइप](cases/hi/wispr-flow.md) | रिकॉर्डिंग, ट्रांसक्रिप्शन, संदर्भ और पेस्टिंग कैसे जुड़े हुए हैं? | [प्राथमिक स्रोत](https://github.com/az9713/wispr-flow-rea-teardown/blob/5edbe6fcf70bbb4594d565212a5ecc7b0c7dfe68/README.md) |
| [hexgrab: PowerToys रंग पिकर की जांच](cases/hi/hexgrab.md) | वैश्विक हॉटकी, पिक्सेल नमूनाकरण और क्लिपबोर्ड एक साथ कैसे काम करते हैं? | [प्राथमिक स्रोत](https://github.com/iammukeshm/hexgrab/blob/511c58078776af4fb0d2e3601e098f98e9f90c9a/README.md) |
| [AdamTerm: Ghostty के शेल की जांच करना और एक टर्मिनल का निर्माण करना](cases/hi/adamterm.md) | टर्मिनल कोर, नेटिव विंडो, मेनू और सेवाओं को कैसे विभाजित किया जाता है? | [प्राथमिक स्रोत](https://github.com/AdamLinCodes/AdamTerm/blob/5278f12a7e885c793bbf5aeb567950fa17798ba5/README.md) |
| [Ledger Reborn: QuickBooks अनुसंधान द्वारा सूचित एक स्थानीय लेजर](cases/hi/ledger-reborn.md) | डेस्कटॉप अकाउंटिंग वर्कफ़्लो एक स्वतंत्र स्थानीय ऐप को कैसे सूचित कर सकता है? | [प्राथमिक स्रोत](https://github.com/lxistired/ledger-reborn/blob/d7f6b8a1f4ad6c4ae8b10100d1c93cf15940c21d/README.md) |
| [DiskLens: जारी बाइनरी में डिस्क-स्कैनिंग और ट्रीमैप एल्गोरिदम की जाँच करना](cases/hi/disklens.md) | नया इंटरफ़ेस बनाने से पहले डिस्क स्कैनिंग, ट्रीमैप्स और डुप्लिकेट डिटेक्शन की जाँच कैसे की जा सकती है? | [प्राथमिक स्रोत](https://github.com/KarlssonChristoffer/DiskLens/blob/c7d67f4b084b408d9b3e1bb22ee8723727494488/README.md) |
| [Hyper3D: कैप्चर किए गए वेब बंडलों से एक स्वतंत्र 3D प्रोटोटाइप तक](cases/hi/hyper3d-clone.md) | इंटरफ़ेस और एपीआई अवलोकन एक प्रोटोटाइप को कैसे सूचित कर सकते हैं जो 3D मॉडल निर्यात करता है? | [प्राथमिक स्रोत](https://github.com/payswapdotorg/hyper3d-clone/blob/b8a3f5fcfb5774c615b1f30372b346274b6e136f/README.md) |

## हार्डवेयर और अनुकूलता

| प्रोजेक्ट/डेमो | सवाल | प्राथमिक स्रोत |
| --- | --- | --- |
| [VSL-DSP: ऑडियो डीएसपी टूल्स पर विक्रेता-लाइब्रेरी निष्कर्षों को लागू करना](cases/hi/vsl-dsp.md) | विक्रेता नियंत्रक उपकरणों की खोज कैसे करता है, मापदंडों को पंजीकृत करता है और लाभ का प्रतिनिधित्व कैसे करता है? | [प्राथमिक स्रोत](https://github.com/grisuno/VSL-DSP/blob/e619f0877ffca3c183be37cdd9474f2d7e348ad5/README.md) |
| [Virtual Desktop Streamer: एक प्रतिस्थापन प्लेटफ़ॉर्म परत के माध्यम से एक Linux पोर्ट](cases/hi/vd-streamer-linux.md) | प्रोटोकॉल लाइब्रेरी को बनाए रखते हुए कैप्चर, एन्कोडिंग, ऑडियो और इनपुट को Linux पर कैसे ले जाया जा सकता है? | [प्राथमिक स्रोत](https://github.com/cudanexus/vd-streamer-linux/blob/e65c302f13639f044742bdc4951ab1a424c1c929/README.md) |
| [Pixel Watch: कंपेनियन-एपीके विश्लेषण द्वारा सूचित एक eSIM हैंडऑफ़ सहायक](cases/hi/watch-esim-helper.md) | एक अलग सहायक सहयोगी ऐप के मौजूदा वॉच-ई-सिम डाउनलोड प्रवाह को कैसे ढूंढ और खोल सकता है? | [प्राथमिक स्रोत](https://github.com/AllMySlop/pixel-watch-esim-writer/blob/a097e819556430bd98c1e7a797016209839c9b1b/README.md) |
| [PicoPrint: एक मोबाइल थर्मल प्रिंटर को Windows प्रिंटिंग से कनेक्ट करना](cases/hi/picoprint.md) | जब कोई ड्राइवर कनेक्ट करता है लेकिन प्रिंट नहीं करता है, तो हैंडशेक अंतर कैसे पाया जा सकता है? | [प्राथमिक स्रोत](https://github.com/bigtower17/picoprint/blob/2a366129ffd21b2c8238608caa060efa957e00d7/README.md) |
| [V5VPN: एक स्कोप्ड पोर्टल और टनल क्लाइंट के लिए प्रोटोकॉल अनुसंधान](cases/hi/v5vpn-rea-client.md) | प्रमाणीकरण, संसाधन खोज और कनेक्शन अनुसंधान एक दायरे वाले स्वतंत्र ग्राहक को कैसे सूचित कर सकते हैं? | [प्राथमिक स्रोत](https://github.com/hygkui/v5vpn-rea-client/blob/9a82b4029feae8e9c5031197b3a448b723684d36/README.md) |

## विश्लेषण एवं मूल्यांकन

| प्रोजेक्ट/डेमो | सवाल | प्राथमिक स्रोत |
| --- | --- | --- |
| [OpenBSD netcat: शिप किए गए ईएलएफ का स्थिर विश्लेषण](cases/hi/netcat-analysis.md) | शिप किए गए netcat बाइनरी में कौन सा नेटवर्क, प्रॉक्सी और सुरक्षा-संबंधित कार्यान्वयन हैं? | [प्राथमिक स्रोत](https://github.com/NullLabTests/OpenBSD_netcat_REA/blob/cc1870d34e83bad0b8a6ca2489f6fa177efa6a2a/README.md) |
| [REA on REA: टूल की जांच करना और भविष्यवाणियों का परीक्षण करना](cases/hi/rea-on-rea.md) | REA एक मूल-विश्लेषण प्रदाता का चयन कैसे करता है और एक अनुपलब्ध प्रदाता का पता कैसे लगाता है? | [प्राथमिक स्रोत](https://github.com/az9713/REA-demo/blob/d01fc8ac812abaddae85e86f7ff116cd8b9b52c3/README.md) |
| [rea-groundtruth: ज्ञात स्रोत के विरुद्ध विश्लेषण ब्लाइंड स्पॉट की जाँच करना](cases/hi/rea-groundtruth.md) | क्या शून्य IPC कॉल या विंडोज़ की रिपोर्ट ऐप या विश्लेषण अंतर को दर्शाती है? | [प्राथमिक स्रोत](https://github.com/UnknownHacker1/rea-groundtruth/blob/5b48f366368c9fbe2abaaab810aba6814c27190b/README.md) |
| [rea-lab: Windows रिवर्स इंजीनियरिंग में REA के योगदान को मापना](cases/hi/rea-lab.md) | REA जोड़ने से एजेंट की सफलता दर, समय और लागत पर क्या प्रभाव पड़ता है? | [प्राथमिक स्रोत](https://github.com/pablodiazjorge/rea-lab/blob/db3e90f60700cf7ad3d4149ddcc95a9389a63a2b/README.md) |
| [bzip2: प्रतीकात्मक निर्माण के विरुद्ध स्ट्रिप्ड-बाइनरी निष्कर्षों की जाँच करना](cases/hi/bzip2-groundtruth.md) | आउटपुट स्ट्रिंग से कोई फ़ंक्शन कैसे पाया जा सकता है और उसके कॉल संबंधों की जांच कैसे की जा सकती है? | [प्राथमिक स्रोत](https://github.com/morluto/rea/discussions/2254) |
| [एक स्थानीय 27B मॉडल: एक छोटी MCP टूल सूची फ़ंक्शन विश्लेषण को सक्षम बनाती है](cases/hi/local-model-mcp.md) | REA टूल विवरण और विश्लेषण स्थानीय मॉडल के 32K संदर्भ में कैसे फिट हो सकते हैं? | [प्राथमिक स्रोत](https://github.com/morluto/rea/discussions/3098) |
| [Open-source REA Lab: एक एनपीएम आर्टिफैक्ट को पिन करना और उसके एंट्री स्लाइस का विश्लेषण करना](cases/hi/opensource-rea-lab.md) | बाउंडेड एंट्री-फ़ाइल प्रश्न का उत्तर देने से पहले रिलीज़ आर्टिफैक्ट की पहचान कैसे की जा सकती है? | [प्राथमिक स्रोत](https://github.com/martinlofranodeoliveira/opensource-rea-lab/blob/f1496d87bf196d637ba1a69d33a9fced7774f2df/analyses/rea-agents-6.4.0/README.md) |

## सीखना और पुनरुत्पादन

| प्रोजेक्ट/डेमो | सवाल | प्राथमिक स्रोत |
| --- | --- | --- |
| [rea-playbook: Electron Evidence को एक रिपोर्ट और पुनर्निर्माण में बदलना](cases/hi/rea-playbook.md) | बड़ा Evidence JSON पठनीय तथ्य और जाँचा गया पुनर्निर्माण कैसे बन सकता है? | [प्राथमिक स्रोत](https://github.com/jinshi666888/rea-playbook/blob/0ad65a85139025f32402be13ed64c8003e39b00a/README.md) |
| [ReaFuse: दो पुस्तकालयों के व्यवहार की जांच के बाद उनका संयोजन](cases/hi/reafuse.md) | दो परियोजनाएँ व्यवहार विशिष्टताएँ और फिर एक नया संयुक्त उपकरण कैसे बन सकती हैं? | [प्राथमिक स्रोत](https://github.com/sickpyramid/ReaFuse/blob/c64502a2827832c042d894ba90dc678a95772cb1/README.md) |

## उपकरण और एकीकरण

| प्रोजेक्ट/डेमो | सवाल | प्राथमिक स्रोत |
| --- | --- | --- |
| [sparkDash: REA विश्लेषण को मल्टी-डिवाइस डैशबोर्ड में एकीकृत करना](cases/hi/sparkdash-rea.md) | एक वेब इंटरफ़ेस लंबे समय से चलने वाली दूरस्थ REA नौकरियां कैसे सबमिट कर सकता है और मांग पर बड़े परिणाम कैसे लोड कर सकता है? | [प्राथमिक स्रोत](https://github.com/MiaAI-Lab/sparkDash/blob/be35be9f594c65a3324f1d97ace58668d3a22068/README.md) |

## कौन से मामले शामिल हैं?

एक सार्वजनिक प्राथमिक स्रोत को स्पष्ट रूप से REA उपयोग, एक ठोस प्रश्न, एक प्रक्रिया और आउटपुट दिखाना होगा। विश्लेषण, स्वतंत्र कार्यान्वयन और ऐतिहासिक कार्य को अलग-अलग जिम्मेदार ठहराया गया है। असफल प्रयोगों, मूल्यांकनों और कार्यान्वित REA एकीकरणों का स्वागत है। उपकरण परिचय, दर्पण और लागू न की गई योजनाओं को बाहर रखा गया है।

[योगदान दे रहे हैं](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [स्रोत अभिलेख](SOURCES.md) · [केस डेटा खोलें](data/cases.json)

[स्थापना और संस्करण आवश्यकताओं के लिए, REA अपस्ट्रीम प्रोजेक्ट देखें।](https://github.com/morluto/rea)

Sanbu द्वारा क्यूरेट किया गया एक स्वतंत्र सामुदायिक संग्रह। REA अपस्ट्रीम प्रोजेक्ट से संबद्ध नहीं है।

स्वतंत्र संपादकीय सारांश. इसका श्रेय मूल लेखकों को जाता है। लक्ष्य सॉफ़्टवेयर, इंस्टॉलर और पूर्ण डिकंपाइलर आउटपुट यहां पुनर्वितरित नहीं किए गए हैं। [MIT](LICENSE).
