#!/usr/bin/env python3
"""Convert editorial Simplified Chinese to Taiwan Traditional Chinese with OpenCC.
Requires opencc-python-reimplemented in the selected Python environment.
Review locale terminology after conversion; original source quotes are shared data.
"""
import hashlib
import json
from pathlib import Path
from opencc import OpenCC

root=Path(__file__).resolve().parents[1]
english=json.loads((root/'data/locales/en.json').read_text())
chinese=json.loads((root/'data/locales/zh-CN.json').read_text())
catalog=json.loads((root/'data/cases.json').read_text())
fields=['title','target','question','rea_role','reported_result','limitations','takeaway','author']
source={'ui':english['ui'],'cases':{c['id']:{k:c[k] for k in fields} for c in catalog['cases']}}
chinese['source_digest']=hashlib.sha256(json.dumps(source,ensure_ascii=False,separators=(',',':')).encode()).hexdigest()
(root/'data/locales/zh-CN.json').write_text(json.dumps(chinese,ensure_ascii=False,indent=2)+'\n')
converter=OpenCC('s2twp')
def convert(value):
 if isinstance(value,dict):return {k:convert(v) for k,v in value.items()}
 return converter.convert(value) if isinstance(value,str) else value
traditional=convert(chinese)
traditional['translation_method']='Automatic Traditional Chinese (Taiwan) conversion of original Chinese editorial text with OpenCC s2twp. English is the editorial reference.'
traditional['ui']['translationNote']='本語言版本由簡體中文編輯稿自動轉換為繁體中文；引文保留原文語言。措辭不明時請參考英文主版本及原始來源。'
(root/'data/locales/zh-TW.json').write_text(json.dumps(traditional,ensure_ascii=False,indent=2)+'\n')
print('Chinese source digest recorded; Traditional Chinese converted.')
