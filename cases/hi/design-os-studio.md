# DESIGN:OS Studio: एक स्वतंत्र डेस्कटॉप स्टूडियो जो Figma .fig फ़ाइलें पढ़ता और लिखता है

[← सभी मामलों पर वापस जाएँ](../../README.hi.md) · अनुप्रयोग

[English](../design-os-studio.md) · [简体中文](../zh-CN/design-os-studio.md) · [繁體中文](../zh-TW/design-os-studio.md) · [日本語](../ja/design-os-studio.md) · [한국어](../ko/design-os-studio.md) · [Español](../es/design-os-studio.md) · [Français](../fr/design-os-studio.md) · [Deutsch](../de/design-os-studio.md) · [Português (Brasil)](../pt-BR/design-os-studio.md) · [Русский](../ru/design-os-studio.md) · [العربية](../ar/design-os-studio.md) · [हिन्दी](../hi/design-os-studio.md)

यह संस्करण संपादकीय अंग्रेजी संस्करण से मशीन-अनुवादित है। मूल उद्धरण उनकी स्रोत भाषा में रहते हैं। जब शब्दांकन अस्पष्ट हो, तो अंग्रेजी और संबंधित स्रोतों से परामर्श लें।

- **लेखक / श्रेय:** jangtrinh
- **स्रोत समीक्षा दिनांक:** 2026-11-10
- **स्थिति की समीक्षा करें:** सूत्रों की समीक्षा की गई; लेखक परीक्षण स्वतंत्र रूप से दोबारा नहीं चलाए गए।
- **लक्ष्य:** Figma Desktop और Figma .fig कंटेनर प्रारूप (fig-kiwi, संस्करण 106 लिखता है)

## सवाल

एक स्वतंत्र डेस्कटॉप स्टूडियो में Figma .fig कंटेनरों को कैसे पढ़ा और लिखा जाए, और संपादक व्यवहार को कैसे फिर से लागू किया जाए?

## REA ने क्या किया

परियोजना के सार्वजनिक विनिर्देश morluto/rea 6.7.0 (`npx -y rea-agents`) को Figma फ़ील्ड की रिवर्स इंजीनियरिंग का उपकरण बताते हैं, और दर्ज करते हैं कि उसने निकाले गए संपादक जावास्क्रिप्ट पर analyze-javascript-application चलाया। वही नोट कहते हैं कि wasm मार्ग तब उपलब्ध नहीं थे (WABT और Ghidra स्थापित नहीं थे), इसलिए kiwi स्कीमा को स्थानीय रीडर से डिकोड किया गया। जाँच-इन रिपोर्टों में rea CLI आउटपुट भी है, जिनमें पूर्ण inspect-macho और analyze-javascript-application रन तथा कुछ असफल आह्वान शामिल हैं। उत्पाद README, REA का उल्लेख नहीं करता।

## लेखक-रिपोर्ट किए गए परिणाम

DESIGN:OS Studio एक प्रकाशित डेस्कटॉप स्टूडियो है (समीक्षित संस्करण v0.7.11) जो Figma .fig कंटेनर पढ़ता है और कंटेनर संस्करण 106 लिखता है, संपादक व्यवहार को स्थानीय रूप से फिर से लागू करता है, और 39 उपकरणों वाला stdio MCP सर्वर तथा बहुभाषी कोड जनरेशन देता है। README 6,000 से अधिक macOS CI परीक्षणों और designos-fig राउंड-ट्रिप परीक्षणों का उल्लेख करता है। अनुरक्षक कहते हैं कि इस Figma कार्य के लिए REA का उपयोग हुआ। इस सूची ने सार्वजनिक विनिर्देश, जाँच-इन rea आउटपुट और README की समीक्षा की; स्टूडियो स्थापित नहीं किया और rea दोबारा नहीं चलाया।

## सीमाएँ और असत्यापित दावे

उत्पाद README, REA का श्रेय नहीं देता। कुछ दर्ज rea रन असफल रहे (अज्ञात कमांड या बिना कॉन्फ़िगर नेटिव-विश्लेषण प्रदाता)। अन्य नोट्स में उल्लिखित पूर्ण सत्र ड्राफ्ट रिपॉजिटरी के बाहर रखे गए हैं। ज्ञात समस्या #834 अभी खुली है: .fig सहेजने पर क्रमांकित सूची का स्वरूप हट जाता है, और इंस्टेंस पर विरासत या वैरिएबल-बद्ध पेंट स्थिर मानों के रूप में लिखे जाते हैं। लाइसेंस PolyForm Shield 1.0.0 है (स्रोत उपलब्ध, ओपन-सोर्स लाइसेंस नहीं)। इस सूची ने .fig संगतता को स्वतंत्र रूप से दोहराया नहीं और परीक्षण सूट को फिर से नहीं चलाया।

## क्या सीखना है

दस्तावेज़ीकृत REA उपयोग परियोजना विनिर्देशों और जाँच-इन CLI साक्ष्य में रह सकता है, भले ही उत्पाद README चुप हो, और जब REA के wasm मार्ग उपलब्ध न हों तो मिश्रित प्रवाह को अभी भी स्थानीय विकल्प की आवश्यकता हो सकती है।

## स्रोत में REA उपयोग साक्ष्य

अंश स्वरूपण सरलीकृत किया गया है. संपूर्ण संदर्भ के लिए मूल स्रोत पढ़ें।

> `rea` (morluto/rea 6.7.0, `npx -y rea-agents`) ran `analyze-javascript-application` over the extracted JS chunks (evidence `ev_2624766…`). Its wasm lanes were unavailable on this machine: WABT and Ghidra are not installed.

## मूल स्रोत

- [प्राथमिक स्रोत/पिन किए गए साक्ष्य](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/docs/specs/v0.6/E1-4-styles-hold-variable-aliases.md)
- [प्रोजेक्ट/डेमो](https://github.com/jangtrinh/design-os-studio)
- [अतिरिक्त स्रोत 1](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/261017-figma-parity-wave-ab/rea-findings.md)
- [अतिरिक्त स्रोत 2](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/plans/reports/agy-1277-shadow-knockout-evidence/step1-figma-re.log)
- [अतिरिक्त स्रोत 3](https://github.com/jangtrinh/design-os-studio/blob/df14c593e86edcc039adc2c67067bf8db64e9e84/README.md)

स्वतंत्र संपादकीय सारांश. इसका श्रेय मूल लेखकों को जाता है। लक्ष्य सॉफ़्टवेयर, इंस्टॉलर और पूर्ण डिकंपाइलर आउटपुट यहां पुनर्वितरित नहीं किए गए हैं।

<!-- कैटलॉग डेटा से उत्पन्न; इस नोट को अद्यतन करने के लिए डेटा फ़ाइलों को संपादित करें। -->
