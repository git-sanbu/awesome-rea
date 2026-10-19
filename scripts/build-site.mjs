import { readFile, writeFile, mkdir, readdir, unlink, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const catalog = JSON.parse(await readFile(path.join(root, 'data/cases.json'), 'utf8'));
const base = 'https://awesome-rea-e7l.pages.dev/';
const repo = 'https://github.com/git-sanbu/awesome-rea';
const check = process.argv.includes('--check');
const e = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const groups = [...new Set(catalog.cases.map(c => c.category))];
const officialCount = catalog.cases.filter(c => c.category === '官方案例').length;
const communityCount = catalog.cases.length - officialCount;
const english = Object.fromEntries((await readFile(path.join(root,'README.en.md'),'utf8')).split('\n').filter(line => line.startsWith('| ') && line.includes('[Case note]')).map(line => { const cells=line.split('|').map(s=>s.trim()); return [cells[1], cells[2]]; }));
const outputs = new Map();
const categoryAliases = {'官方案例':'official showcases examples','游戏实践':'games game porting reconstruction','应用实践':'apps applications desktop tools','硬件与兼容':'hardware compatibility protocols linux drivers','分析与评测':'analysis evaluation benchmark security','学习与复现':'learning tutorial reproduction electron'};
function head(title, description, url, prefix, schema) {
 return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(title)}</title><meta name="description" content="${e(description)}"><link rel="canonical" href="${e(url)}"><meta name="robots" content="index,follow"><meta name="theme-color" content="#1557b0"><meta property="og:type" content="website"><meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(description)}"><meta property="og:url" content="${e(url)}"><meta property="og:site_name" content="Awesome REA"><meta property="og:locale" content="zh_CN"><meta property="og:image" content="${base}social-preview.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Awesome REA — real projects, original sources, honest limits"><meta name="twitter:card" content="summary_large_image"><link rel="icon" type="image/svg+xml" href="${prefix}favicon.svg"><link rel="stylesheet" href="${prefix}style.css"><script type="application/ld+json">${json(schema)}</script></head>`;
}
function header(prefix) { return `<a class="skip" href="#main">跳到案例内容</a><div class="wrap"><header class="top"><a class="brand" href="${prefix}index.html">Awesome REA</a><nav aria-label="主导航"><a href="${repo}">GitHub 仓库</a><a href="${repo}/blob/main/README.en.md" lang="en">English</a><a href="${repo}/issues/new?template=case_submission.yml">投稿案例</a></nav></header></div>`; }
function footer(){return `<footer class="footer wrap"><p>独立社区案例集，由 <a href="https://github.com/git-sanbu">Sanbu</a> 整理。与 <a href="https://github.com/morluto/rea">REA 上游项目</a> 无隶属关系。</p><p>最近更新：${e(catalog.updated_on)}；各案例保留独立核对日期。已阅读公开原文，未独立复跑作者测试。<a href="${repo}/blob/main/CONTRIBUTING.md">贡献指南</a> · <a href="${repo}/blob/main/data/cases.json">开放案例数据</a> · <a href="${repo}/blob/main/LICENSE">MIT</a></p></footer>`;}
const description = `${catalog.cases.length} 个公开 REA 实践案例：游戏移植、桌面应用、硬件兼容与逆向评测。搜索软件名或用途，了解 Reverse Engineer Anything 的实际用法、成果和原始出处。`;
const schema = {'@context':'https://schema.org','@type':'CollectionPage','name':'Awesome REA — REA 实践案例 / Reverse Engineer Anything use cases','url':base,'description':description,'inLanguage':'zh-CN','dateModified':catalog.updated_on,'mainEntity':{'@type':'ItemList','numberOfItems':catalog.cases.length,'itemListElement':catalog.cases.map((c,i)=>({'@type':'ListItem','position':i+1,'item':{'@type':'WebPage','name':c.title,'url':`${base}cases/${c.id}/`}}))}};
let html=head('Awesome REA — REA 实践案例与用法 | Reverse Engineer Anything use cases',description,base,'',schema)+`<body>${header('')}<main class="wrap" id="main"><section class="hero"><div><h1>用 REA 看懂软件，<br>然后做出了什么？</h1><p>从老游戏移植到自己的取色器，收录大家用 Reverse Engineer Anything 完成的公开实践。看具体用途，也看结果背后的证据与局限。</p><p class="english" lang="en">Real-world REA use cases, examples and reverse engineering case studies.</p><a href="${repo}">在 GitHub 查看与收藏案例集</a></div><aside class="sample" aria-label="一个实际案例"><p>从一个小功能开始</p><h2>PowerToys 取色器<br>变成了 hexgrab</h2><p>研究已发布二进制，用公开源码核对发现，再写一个精简的 Windows 取色器。</p><a href="cases/hexgrab/">阅读这次实践</a></aside></section><div class="intro"><span><strong>${catalog.cases.length} 个公开案例</strong>，其中 ${officialCount} 个官方案例、${communityCount} 个社区项目与作者实验</span><span>每条附一手出处，测试成果按原作者报告转述</span></div><form class="search" data-search hidden role="search"><label for="q">搜索软件、用途或关键词</label><div class="input-row"><input id="q" name="q" type="search" autocomplete="off" placeholder="例如：Ghostty、游戏移植、Electron、录屏"><button type="button" class="clear" data-clear>清除筛选</button></div><div class="filters" role="group" aria-label="按案例类别筛选"><button type="button" class="filter" data-filter="all" aria-pressed="true">全部</button>${groups.map(group=>`<button type="button" class="filter" data-filter="${e(group)}" aria-pressed="false">${e(group)}</button>`).join('')}</div><p class="count" id="count" role="status" aria-live="polite">显示 ${catalog.cases.length} / ${catalog.cases.length} 个案例</p></form><noscript><p class="not-script">下面列出全部案例。可以使用浏览器的查找功能搜索软件名。</p></noscript><div id="empty" class="empty" hidden><h2>没有找到匹配案例</h2><p>试试软件名、英文关键词，或清除分类。你也可以投稿一个尚未收录的实践。</p><button type="button" class="clear" data-reset>显示全部案例</button></div>`;
for(const group of groups){
 html+=`<section class="group" data-group><h2>${e(group)}</h2>`;
 for(const c of catalog.cases.filter(c=>c.category===group)){
  const search=[c.title,c.id,c.target,c.question,c.rea_role,c.reported_result,c.takeaway,c.category,categoryAliases[c.category]||'',c.author,english[c.id]||''].join(' ');
  html+=`<article class="row" data-case data-category="${e(group)}" data-search="${e(search)}"><div><h3><a href="cases/${c.id}/">${e(c.title)}</a></h3><p>${e(c.question)}</p><p class="meta">来源：${e(c.author)}</p></div><div><p class="result">${e(c.reported_result)}</p><div class="links"><a href="cases/${c.id}/">过程与局限</a><a href="${e(c.source_url)}">原始出处</a></div></div></article>`;
 }
 html+='</section>';
}
html+=`<section class="how"><h2>什么样的实践会被收录？</h2><p>公开原文明确使用 REA，有具体问题、实际过程和产出。分析、独立重写与历史成果分别归因；失败实验与工具评测也会收录。只介绍工具、备份源码或提出尚未实施的计划，不计入案例。</p><p><a href="${repo}/blob/main/SOURCES.md">查看来源记录</a>，或<a href="${repo}/issues/new?template=case_submission.yml">推荐一个实践</a>。安装与工具版本要求请查看 <a href="https://github.com/morluto/rea">REA 官方项目</a>。</p></section></main>${footer()}<script src="search.js" defer></script></body></html>`;
outputs.set('index.html',html+'\n');
for(const c of catalog.cases){
 const url=`${base}cases/${c.id}/`;
 const data={'@context':'https://schema.org','@type':'WebPage','name':c.title,'url':url,'description':c.question,'inLanguage':'zh-CN','dateModified':c.checked_on,'isPartOf':{'@type':'CollectionPage','name':'Awesome REA','url':base},'citation':[c.source_url,...c.additional_sources]};
 const sections=[['想解决什么问题',c.question],['REA 具体做了什么',c.rea_role],['原作者报告的成果',c.reported_result],['局限与未验证项',c.limitations],['可以借鉴什么',c.takeaway]];
 const links=[[c.source_url.includes('/discussions/')?'公开原文 / 核对时可编辑的讨论原帖':'公开原文 / 固定版本证据',c.source_url],['项目 / 演示',c.project_url],...c.additional_sources.map((url,i)=>[`补充来源 ${i+1}`,url])];
 const page=head(`${c.title} | Awesome REA`,c.question,url,'../../',data)+`<body>${header('../../')}<main class="wrap detail" id="main"><a class="back" href="../../">返回全部案例</a><h1>${e(c.title)}</h1><p class="lede" lang="en">${e(english[c.id]||'REA reverse engineering case study')}</p><div class="facts"><p><strong>分析目标：</strong>${e(c.target)}</p><p><strong>作者 / 归属：</strong>${e(c.author)}</p><p><strong>核对日期：</strong>${e(c.checked_on)}</p><p><strong>收录状态：</strong>已阅读公开来源，未独立复跑作者测试</p></div>${sections.map(([title,text])=>`<section><h2>${e(title)}</h2><p>${e(text)}</p></section>`).join('')}<section><h2>原文中的 REA 使用证据</h2><blockquote lang="en">${e(c.rea_evidence_excerpt)}</blockquote><p>短摘录简化了排版，完整上下文以原文为准。</p></section><section><h2>原始来源</h2><ul>${links.map(([label,url])=>`<li><a href="${e(url)}">${e(label)}</a></li>`).join('')}</ul><p>本页为独立中文整理，成果归原作者。目标软件、安装包和完整反编译输出不在此分发。</p></section><p><a href="${repo}/blob/main/cases/${c.id}.md">在 GitHub 查看此案例</a> · <a href="${repo}/issues/new?template=correction.yml">纠正资料</a></p></main>${footer()}</body></html>`;
 outputs.set(`cases/${c.id}/index.html`,page+'\n');
}
outputs.set('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[base,...catalog.cases.map(c=>`${base}cases/${c.id}/`)].map(url=>`<url><loc>${e(url)}</loc><lastmod>${catalog.updated_on}</lastmod></url>`).join('')}</urlset>\n`);
outputs.set('.nojekyll','');
outputs.set('favicon.svg','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="13" fill="#1557b0"/><text x="32" y="44" text-anchor="middle" fill="white" font-family="sans-serif" font-size="39" font-weight="700">R</text></svg>\n');
outputs.set('robots.txt',`User-agent: *\nAllow: /\nSitemap: ${base}sitemap.xml\n`);
for(const [file,content] of outputs){
 const dest=path.join(root,'docs',file);
 if(check){if(await readFile(dest,'utf8')!==content)throw new Error(`Generated file is stale: docs/${file}`);}
 else{await mkdir(path.dirname(dest),{recursive:true});await writeFile(dest,content);}
}
const expected=new Set(catalog.cases.map(c=>c.id));
for(const entry of await readdir(path.join(root,'docs/cases'),{withFileTypes:true})){
 const obsolete=entry.isDirectory()?!expected.has(entry.name):entry.name.endsWith('.html');
 if(obsolete){if(check)throw new Error(`Obsolete case page: ${entry.name}`);else await rm(path.join(root,'docs/cases',entry.name),{recursive:true,force:true});}
}
console.log(`${check?'Checked':'Built'} ${catalog.cases.length} case pages, index, sitemap, and metadata.`);
