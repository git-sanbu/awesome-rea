#!/usr/bin/env python3
"""Refresh machine translations of public catalog text; English/Chinese stay editorial.
Uses Google's public translation endpoint (unofficial, no uptime guarantee).
Cached responses are local. Review generated changes before publishing.
"""
import argparse
from collections import Counter
import concurrent.futures
import hashlib
import json
from pathlib import Path
import re
import time
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / '.translation-cache'
FIELDS = ['title', 'target', 'question', 'rea_role', 'reported_result', 'limitations', 'takeaway', 'author']
TERMS = ['Awesome REA', 'Reverse Engineer Anything', 'REA', 'Ghidra', 'Evidence', 'GitHub', 'Stars', 'Sanbu', 'MCP', 'CLI', 'IPC', 'HOTP', 'TOTP', 'PRNG', 'SDL2', 'Windows', 'macOS', 'Linux', 'Android', 'Electron', 'JavaScript', 'TypeScript', 'Rust', 'Swift', 'PowerToys', 'Notion', 'Snowball War', 'Ski or Die', 'DX-Ball', 'TH04', 'DownUnderCTF', 'Z3', 'Paper', 'Sketch', 'TradingView', 'Bloomberg', 'Wispr Flow', 'Ghostty', 'SwiftTerm', 'QuickBooks', 'PreSonus', 'LazyOwn', 'Virtual Desktop', 'PipeWire', 'GStreamer', 'netcat', 'MongoDB Compass', 'Claude Code', 'Codex', 'DeepSeek', 'WinDirStat', 'Tauri', 'Svelte', 'Hyper3D', 'Rodin', 'Pixel Watch', 'Funny Print', 'Hermes', 'bzip2', 'OpenCode', 'Battlefield', 'Refractor', 'Themida', 'GunZ', 'V5VPN', 'Go/MyGo', 'World in Conflict', 'Tiberium Wars', 'Kane’s Wrath', 'sparkDash', 'Co-op Anything', 'AppKit', 'CMocka', 'Hopper', 'objdump', 'readelf', 'objdelta', 'ratewise', 'WorldGen']
TOKEN = re.compile(r'\{\w+\}|' + '|'.join(re.escape(t) for t in sorted(TERMS, key=len, reverse=True)) + r'|\b[\w.-]*\d[\w.:/%+-]*(?:/\d+)*|\b[\w.-]+(?:/[\w.-]+)+|\b[\w-]+\.(?:js|mjs|py|md|json|exe|dll|so|asar)\b')

def translate_request(items, target, source, compact=False):
    mapping = {}
    def protect(match):
        if compact:
            existing = next((key for key,value in mapping.items() if value == match[0]), None)
            if existing: return existing
        key = f'ZXQ{len(mapping):04d}XQZ'
        mapping[key] = match[0]
        return key
    pattern = re.compile(r'\{\w+\}|' + '|'.join(re.escape(t) for t in sorted(TERMS,key=len,reverse=True)) + r'|\b[\w.-]+(?:/[\w.-]+)+|\b[\w-]+\.(?:js|mjs|py|md|json|exe|dll|so|asar)\b') if compact else TOKEN
    protected = [(i, pattern.sub(protect, value)) for i, value in items]
    query = '\n'.join(f'[{i+100000}]\n{value}' for i, value in protected)
    key = hashlib.sha256((source+'|'+target+'|'+query).encode()).hexdigest()
    cached = CACHE / (key+'.json')
    if cached.exists():
        output = json.loads(cached.read_text())
    else:
        url = 'https://translate.googleapis.com/translate_a/single?' + urllib.parse.urlencode({'client':'gtx','sl':source,'tl':target,'dt':'t','q':query})
        for attempt in range(3):
            try:
                with urllib.request.urlopen(url, timeout=40) as response:
                    payload = json.load(response)
                output = ''.join(segment[0] for segment in payload[0] if segment[0])
                break
            except Exception:
                if attempt == 2:
                    raise
                time.sleep(2 * (attempt+1))
        cached.write_text(json.dumps(output, ensure_ascii=False))
    markers = list(re.finditer(r'\[\s*(1\d{2}[.,\s]?\d{3})\s*\]', output))
    if [int(re.sub(r'\D','',m[1]))-100000 for m in markers] != [i for i,_ in items]:
        raise ValueError(f'{target}: translation lost field boundaries; expected {[i for i,_ in items]}, got {[m[1] for m in markers]}; response={output!r}' if len(items)==1 else f'{target}: translation lost field boundaries')
    restored = {}
    for n,m in enumerate(markers):
        value = output[m.end():markers[n+1].start() if n+1<len(markers) else len(output)].strip()
        for key, original in mapping.items():
            value = value.replace(key, original)
        if 'ZXQ' in value or 'XQZ' in value:
            raise ValueError(f'{target}: damaged protected token in {items[n][0]}: {value!r}')
        expected_tokens = re.findall(r'ZXQ\d+XQZ', protected[n][1])
        if any(key not in output[m.end():markers[n+1].start() if n+1<len(markers) else len(output)] for key in expected_tokens):
            raise ValueError(f'{target}: missing protected token in {items[n][0]}')
        if compact and Counter(str(int(n)) for n in re.findall(r'\d+',value)) != Counter(str(int(n)) for n in re.findall(r'\d+',items[n][1])):
            raise ValueError(f'{target}: numeric mismatch in {items[n][0]}')
        if not value:
            raise ValueError(f'{target}: empty translation')
        restored[int(re.sub(r'\D','',m[1]))-100000] = value
    return restored

def translate_batch(items,target,source):
    try:
        return translate_request(items,target,source)
    except ValueError:
        if len(items)==1:
            return translate_request(items,target,source,compact=True)
        middle=len(items)//2
        return {**translate_batch(items[:middle],target,source),**translate_batch(items[middle:],target,source)}

def translate_language(language):
    source = 'zh-CN' if language == 'zh-TW' else 'en'
    base = json.loads((ROOT/f'data/locales/{source}.json').read_text())
    catalog = json.loads((ROOT/'data/cases.json').read_text())
    cases = base.get('cases') or {c['id']:{k:c[k] for k in FIELDS} for c in catalog['cases']}
    paths = [('ui',key) for key in base['ui']]
    values = list(base['ui'].values())
    for case_id,case in cases.items():
        for field in FIELDS:
            paths.append(('cases',case_id,field)); values.append(case[field])
    batches=[]; batch=[]; size=0
    # Protected tokens increase short number/identifier lengths; keep ample URL margin.
    for i,value in enumerate(values):
        estimated=len(TOKEN.sub('ZXQ0000XQZ',value))+20
        if size+estimated>3500 and batch:
            batches.append(batch);batch=[];size=0
        batch.append((i,value));size+=estimated
    if batch:batches.append(batch)
    result={}
    for batch in batches:
        result.update(translate_batch(batch,language,source))
    english_ui = json.loads((ROOT/'data/locales/en.json').read_text())['ui']
    source_cases = {c['id']:{k:c[k] for k in FIELDS} for c in catalog['cases']}
    digest = hashlib.sha256(json.dumps({'ui':english_ui,'cases':source_cases},ensure_ascii=False,separators=(',',':')).encode()).hexdigest()
    output={'source_digest':digest,'updated_on':catalog['updated_on'],'translation_method':f'Machine translation from {source} using Google Translate public endpoint; original source quotations preserved. English is the editorial reference.','ui':{},'cases':{}}
    for i,where in enumerate(paths):
        if where[0]=='ui':output['ui'][where[1]]=result[i]
        else:output['cases'].setdefault(where[1],{})[where[2]]=result[i]
    # Preserve repository/project names and exact author handles as attribution.
    for case in catalog['cases']:
        translated=output['cases'][case['id']]
        if case['category']!='official': translated['author']=case['author']
        if case['id']!='local-model-mcp':
            parts=re.split(r'[:：]',translated['title'],maxsplit=1)
            if len(parts)==2: translated['title']=case['title'].split(':',1)[0]+': '+parts[1].strip()
    (ROOT/f'data/locales/{language}.json').write_text(json.dumps(output,ensure_ascii=False,indent=2)+'\n')
    print(f'{language}: {len(cases)} cases, {len(output["ui"])} interface strings, {len(batches)} batches',flush=True)

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--languages',nargs='*')
    args=parser.parse_args()
    CACHE.mkdir(exist_ok=True)
    languages=args.languages or [l['id'] for l in json.loads((ROOT/'data/languages.json').read_text()) if l['id'] not in ('en','zh-CN','zh-TW')]
    supported={l['id'] for l in json.loads((ROOT/'data/languages.json').read_text())} - {'en','zh-CN','zh-TW'}
    if not set(languages)<=supported: parser.error('Select supported machine-translation locales; use convert-chinese.py for zh-TW.')
    errors=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        tasks={executor.submit(translate_language,l):l for l in languages}
        for task in concurrent.futures.as_completed(tasks):
            try: task.result()
            except Exception as error: errors.append((tasks[task],str(error))); print(f'{tasks[task]}: FAILED {error}',flush=True)
    if errors: raise SystemExit(str(errors))
