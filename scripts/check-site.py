#!/usr/bin/env python3
"""Check every generated locale, equivalent-page link and catalog source boundary."""
from collections import Counter
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import urllib.parse
import xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parents[1]
DOCS=ROOT/'docs'
BASE='https://awesome-rea-e7l.pages.dev/'
languages=json.loads((ROOT/'data/languages.json').read_text())
cases=json.loads((ROOT/'data/cases.json').read_text())['cases']
paths=[l['path']+suffix for l in languages for suffix in ['',*[f'cases/{c["id"]}/' for c in cases]]]
expected_urls={BASE+p for p in paths}

class Page(HTMLParser):
 def __init__(self,text):
  super().__init__(convert_charrefs=True);self.html={};self.links=[];self.canonical=None;self.alternates={};self.scripts=[];self.in_json=False;self.h1=0;self.h2=0;self.rows=0;self.quotes=[];self.quote=None;self.current_links=[];self.ids=[]
  self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='html':self.html=a
  if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
  if tag=='link' and a.get('rel')=='alternate':
   assert a['hreflang'] not in self.alternates,'Duplicate hreflang'
   self.alternates[a['hreflang']]=a['href']
  if tag=='a':
   self.links.append(a.get('href',''))
   if 'data-language' in a:self.current_links.append(a)
  if tag=='script' and a.get('type')=='application/ld+json':self.in_json=True;self.scripts.append('')
  if tag=='h1':self.h1+=1
  if tag=='h2':self.h2+=1
  if 'data-case' in a:self.rows+=1
  if tag=='blockquote':self.quote={'lang':a.get('lang'),'text':''}
  if 'id' in a:self.ids.append(a['id'])
 def handle_data(self,data):
  if self.in_json:self.scripts[-1]+=data
  if self.quote is not None:self.quote['text']+=data
 def handle_endtag(self,tag):
  if tag=='script':self.in_json=False
  if tag=='blockquote' and self.quote is not None:self.quotes.append(self.quote);self.quote=None

def resolve_local(url,page):
 parsed=urllib.parse.urlparse(urllib.parse.urljoin(BASE+page,url))
 if parsed.netloc!=urllib.parse.urlparse(BASE).netloc:return None
 p=DOCS/urllib.parse.unquote(parsed.path).lstrip('/')
 return p/'index.html' if parsed.path.endswith('/') else p

for language in languages:
 for c in [None,*cases]:
  suffix=f'cases/{c["id"]}/' if c else ''
  pagepath=language['path']+suffix
  page=Page((DOCS/pagepath/'index.html').read_text())
  assert page.html['lang']==language['id'],pagepath
  assert page.html['dir']==language['dir'],pagepath
  assert page.h1==1,pagepath
  assert page.canonical==BASE+pagepath,pagepath
  expected={l['id']:BASE+l['path']+suffix for l in languages}
  expected['x-default']=BASE+suffix
  assert page.alternates==expected,pagepath
  assert len(page.current_links)==len(languages),pagepath
  assert [l['lang'] for l in page.current_links if l.get('aria-current')=='page']==[language['id']],pagepath
  for link in page.current_links:
   assert urllib.parse.urljoin(BASE+pagepath,link['href'])==expected[link['lang']],pagepath
  schema=json.loads(page.scripts[0]);assert schema['inLanguage']==language['id'] and schema['url']==page.canonical,pagepath
  if c:
   assert page.h2==7,pagepath
   assert page.quotes==[{'lang':c['rea_evidence_language'],'text':c['rea_evidence_excerpt']}],pagepath
   assert schema['citation']==[c['source_url'],*c['additional_sources']],pagepath
  else:
   assert page.rows==len(cases),pagepath
   assert schema['mainEntity']['numberOfItems']==len(cases),pagepath
  for link in page.links:
   target=resolve_local(link,pagepath)
   assert target is None or target.is_file(),(pagepath,link)
  assert len(page.ids)==len(set(page.ids)),pagepath

sitemap=ET.parse(DOCS/'sitemap.xml')
actual={node.text for node in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
assert actual==expected_urls,('Sitemap parity',len(actual),len(expected_urls))
# All generated Markdown language and return links resolve inside the repository.
markdown=[ROOT/('README.md' if l['id']=='en' else f'README.{l["id"]}.md') for l in languages]
markdown+=list((ROOT/'cases').rglob('*.md'))
for file in markdown:
 for link in re.findall(r'\]\(([^)]+)\)',file.read_text()):
  if '://' not in link and not link.startswith('#'):
   assert (file.parent/link.split('#')[0]).is_file(),(str(file),link)
print(json.dumps({'languages':len(languages),'html_pages':len(paths),'markdown_files':len(markdown),'hreflang_links':len(paths)*(len(languages)+1),'sitemap_urls':len(actual),'failures':[]},ensure_ascii=False))
