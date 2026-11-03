# Screen Studio: स्थैतिक निरीक्षण को रिकॉर्डिंग और निर्यात साक्ष्य से अलग करना

[← सभी मामलों पर वापस जाएँ](../../README.hi.md) · अनुप्रयोग

[English](../screenstudio-research.md) · [简体中文](../zh-CN/screenstudio-research.md) · [繁體中文](../zh-TW/screenstudio-research.md) · [日本語](../ja/screenstudio-research.md) · [한국어](../ko/screenstudio-research.md) · [Español](../es/screenstudio-research.md) · [Français](../fr/screenstudio-research.md) · [Deutsch](../de/screenstudio-research.md) · [Português (Brasil)](../pt-BR/screenstudio-research.md) · [Русский](../ru/screenstudio-research.md) · [العربية](../ar/screenstudio-research.md) · [हिन्दी](../hi/screenstudio-research.md)

यह संस्करण संपादकीय अंग्रेजी संस्करण से मशीन-अनुवादित है। मूल उद्धरण उनकी स्रोत भाषा में रहते हैं। जब शब्दांकन अस्पष्ट हो, तो अंग्रेजी और संबंधित स्रोतों से परामर्श लें।

- **लेखक / श्रेय:** Royo-Qiao
- **स्रोत समीक्षा दिनांक:** 2026-11-03
- **स्थिति की समीक्षा करें:** सूत्रों की समीक्षा की गई; लेखक परीक्षण स्वतंत्र रूप से दोबारा नहीं चलाए गए।
- **लक्ष्य:** Screen Studio 3.7.3-4540, जिसमें स्थानीय रूप से रीपैकेज्ड Apple सिलिकॉन कॉपी भी शामिल है

## सवाल

Electron और देशी-सहायक निष्कर्षों को रिकॉर्डिंग, निर्यात और संगतता के प्रमाण से अलग कैसे रखा जा सकता है?

## REA ने क्या किया

REA फ़्यूज़ और मैक-ओ निरीक्षण ने आईडी और हैश के साथ क्यूरेटेड स्थिर Evidence अंश प्रदान किए। एक सीमित JavaScript अनुप्रयोग विश्लेषण का समय दो बार समाप्त हुआ; किसी पूर्ण ग्राफ़ या मूल फ़ंक्शन डिकंपाइलेशन का दावा नहीं किया गया है।

## लेखक-रिपोर्ट किए गए परिणाम

लेखक निरीक्षण, समग्र परियोजना-सांख्यिकी और निर्यात-सत्यापन उपकरण प्रकाशित करता है। कथित तौर पर एक ऐतिहासिक देशी रिकॉर्डिंग ने 1104 × 720 और 60 एफपीएस पर 3,337 फ्रेम निर्यात किए और पूरी तरह से डिकोड किए गए; बाद में रीड-ओनली टूल चेक ने सहेजे गए निर्यात और समग्र मानव-इनपुट घटनाओं की जांच की।

## सीमाएँ और असत्यापित दावे

निजी रिकॉर्डिंग और पूर्ण बही-खाता दोबारा चलाने के लिए उपलब्ध नहीं हैं। मैक-ओ हैश स्थानीय रूप से दोबारा पैक की गई प्रतिलिपि की पहचान करता है। नेटवर्क प्राधिकरण विफल रहा, एक ट्रिम प्रयास प्रभावी नहीं हुआ, अंतिम हस्ताक्षर के बाद पूर्ण कैप्चर रीटेस्ट नहीं हुआ, और केवल एक Apple Silicon/macOS सेटअप का प्रयोग किया गया। फ़ाइल डिकोडिंग रिकॉर्डिंग उत्पत्ति या दृश्य तुल्यता साबित नहीं करती है; इस कैटलॉग ने प्रयोग को दोबारा नहीं चलाया।

## क्या सीखना है

स्थैतिक मेटाडेटा, यूआई अवलोकन, फ़ाइल डिकोडिंग और मानव प्रतिक्रिया को अलग साक्ष्य के रूप में रखें, और सफलताओं के साथ-साथ विफल जांच भी प्रकाशित करें।

## स्रोत में REA उपयोग साक्ष्य

अंश स्वरूपण सरलीकृत किया गया है. संपूर्ण संदर्भ के लिए मूल स्रोत पढ़ें।

> REA `inspect_electron_fuses` found a version-1 eight-fuse wire in the arm64
  Electron Framework.

## मूल स्रोत

- [प्राथमिक स्रोत/पिन किए गए साक्ष्य](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/docs/evidence.md)
- [प्रोजेक्ट/डेमो](https://github.com/Royo-Qiao/screenstudio-rea-research)
- [अतिरिक्त स्रोत 1](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/README.md)
- [अतिरिक्त स्रोत 2](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-fuses-summary.json)
- [अतिरिक्त स्रोत 3](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/rea-macho-summary.json)
- [अतिरिक्त स्रोत 4](https://github.com/Royo-Qiao/screenstudio-rea-research/blob/01ef9c96ad7dfc86023fa9254ee96fdfb73d6720/evidence/tool-recheck.json)

स्वतंत्र संपादकीय सारांश. इसका श्रेय मूल लेखकों को जाता है। लक्ष्य सॉफ़्टवेयर, इंस्टॉलर और पूर्ण डिकंपाइलर आउटपुट यहां पुनर्वितरित नहीं किए गए हैं।

<!-- कैटलॉग डेटा से उत्पन्न; इस नोट को अद्यतन करने के लिए डेटा फ़ाइलों को संपादित करें। -->
