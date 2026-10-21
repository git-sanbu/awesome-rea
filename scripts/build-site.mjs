import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const readJSON = async file => JSON.parse(await readFile(path.join(root, file), 'utf8'));
const catalog = await readJSON('data/cases.json');
const popularity = await readJSON('data/popularity.json');
const languages = await readJSON('data/languages.json');
const locales = Object.fromEntries(await Promise.all(languages.map(async l => [l.id, await readJSON(`data/locales/${l.id}.json`)])));
const base = 'https://awesome-rea-e7l.pages.dev/';
const repo = 'https://github.com/git-sanbu/awesome-rea';
const upstream = 'https://github.com/morluto/rea';
const check = process.argv.includes('--check');
const e = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const format = (text, values = {}) => text.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);
const fields = ['title','target','question','rea_role','reported_result','limitations','takeaway','author'];
const sourceCases = Object.fromEntries(catalog.cases.map(c => [c.id, Object.fromEntries(fields.map(k => [k, c[k]]))]));
const sourceDigest = createHash('sha256').update(JSON.stringify({ui:locales.en.ui,cases:sourceCases})).digest('hex');
const groups = [...new Set(catalog.cases.map(c => c.category))];
const official = catalog.cases.filter(c => c.category === 'official').length;
const community = catalog.cases.length - official;
const popularCases = popularity.repositories.filter(m => catalog.cases.some(c => c.id === m.case_id) && m.stars >= 100).sort((a,b) => b.stars-a.stars);
const outputs = new Map();
const casePath = (language, id) => `${language.path}${id ? `cases/${id}/` : ''}`;
const caseURL = (language, id) => base + casePath(language,id);
const markdownPath = (language,id) => `cases/${language.id === 'en' ? '' : `${language.id}/`}${id}.md`;
const readmePath = language => language.id === 'en' ? 'README.md' : `README.${language.id}.md`;
const localized = (language,c) => ({...c,...locales[language.id].cases?.[c.id]});
const isMachine = language => !['en','zh-CN'].includes(language.id);
const placeholderKeys = text => [...text.matchAll(/\{\w+\}/g)].map(m=>m[0]).sort().join('|');

// A missing/stale translation must fail the build, never publish an English fallback
// behind another language's canonical URL.
if (new Set(catalog.cases.map(c=>c.id)).size !== catalog.cases.length) throw new Error('Duplicate case IDs');
for (const language of languages) {
 const locale = locales[language.id];
 if (Object.keys(locale.ui).length !== Object.keys(locales.en.ui).length) throw new Error(`UI key mismatch: ${language.id}`);
 for (const [key,value] of Object.entries(locales.en.ui)) {
  if (!locale.ui[key] || placeholderKeys(locale.ui[key]) !== placeholderKeys(value)) throw new Error(`Invalid UI translation: ${language.id}/${key}`);
 }
 if (language.id !== 'en') {
  if (locale.source_digest !== sourceDigest) throw new Error(`Stale translation: ${language.id}`);
  if (Object.keys(locale.cases).length !== catalog.cases.length) throw new Error(`Case count mismatch: ${language.id}`);
  for (const c of catalog.cases) for (const field of fields) {
   if (typeof locale.cases[c.id]?.[field] !== 'string' || !locale.cases[c.id][field].trim()) throw new Error(`Missing translation: ${language.id}/${c.id}/${field}`);
  }
 }
}

function head(language, title, description, id, schema) {
 const url = caseURL(language,id);
 const alternates = languages.map(l=>`<link rel="alternate" hreflang="${l.id}" href="${caseURL(l,id)}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${caseURL(languages[0],id)}">`;
 return `<!doctype html><html lang="${language.id}" dir="${language.dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(title)}</title><meta name="description" content="${e(description)}"><link rel="canonical" href="${url}">${alternates}<meta name="robots" content="index,follow"><meta name="theme-color" content="#1557b0"><meta property="og:type" content="website"><meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(description)}"><meta property="og:url" content="${url}"><meta property="og:site_name" content="Awesome REA"><meta property="og:locale" content="${language.og}">${languages.filter(l=>l.id!==language.id).map(l=>`<meta property="og:locale:alternate" content="${l.og}">`).join('')}<meta property="og:image" content="${base}social-preview.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Awesome REA"><meta name="twitter:card" content="summary_large_image"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/style.css"><script type="application/ld+json">${json(schema)}</script></head>`;
}
function header(language,id) {
 const t=locales[language.id].ui;
 return `<a class="skip" href="#main">${e(t.skip)}</a><div class="wrap"><header class="top"><a class="brand" href="/${language.path}">Awesome REA</a><nav aria-label="${e(t.navigation)}"><a href="${repo}">${e(t.github)}</a><a href="${repo}/issues/new?template=case_submission.yml">${e(t.submit)}</a></nav><details class="language-picker"><summary aria-label="${e(t.languages)}">${e(language.label)}</summary><nav aria-label="${e(t.languages)}">${languages.map(l=>`<a data-language href="/${casePath(l,id)}" lang="${l.id}" hreflang="${l.id}" dir="${l.dir}"${l.id===language.id?' aria-current="page"':''}>${e(l.label)}</a>`).join('')}</nav></details></header></div>`;
}
function translationNote(language,id) {
 if(!isMachine(language)) return '';
 const t=locales[language.id].ui;
 return `<aside class="translation-note"><p>${e(t.translationNote)} <a href="/${casePath(languages[0],id)}" lang="en">${e(t.englishVersion)}</a></p></aside>`;
}
function footer(language) {
 const t=locales[language.id].ui;
 return `<footer class="footer wrap"><p>${e(t.independent)} <a href="${upstream}">REA</a></p><p>${e(format(t.updated,{date:catalog.updated_on}))} ${e(t.status)}</p><p><a href="${repo}/blob/main/CONTRIBUTING.md">${e(t.contribute)}</a> · <a href="${repo}/blob/main/data/cases.json">${e(t.openData)}</a> · <a href="${repo}/blob/main/LICENSE">MIT</a></p></footer>`;
}
function sourceLinks(c,t) {
 return [[c.source_url.includes('/discussions/')?t.discussion:t.pinned,c.source_url],[t.project,c.project_url],...c.additional_sources.map((url,i)=>[format(t.supplement,{number:i+1}),url])];
}
function caseMarkdown(language,c) {
 const t=locales[language.id].ui;
 const prefix=language.id==='en'?'../':'../../';
 const other=languages.map(l=>`[${l.label}](${l.id==='en'&&language.id==='en'?`${c.id}.md`:l.id==='en'?`../${c.id}.md`:language.id==='en'?`${l.id}/${c.id}.md`:`../${l.id}/${c.id}.md`})`).join(' · ');
 return `# ${c.title}\n\n[← ${t.back}](${prefix}${readmePath(language)}) · ${t[`category_${c.category}`]}\n\n${other}\n\n${isMachine(language)?`${t.translationNote}\n\n`:''}- **${t.author}:** ${c.author}\n- **${t.checked}:** ${c.checked_on}\n- **${t.review}:** ${t.status}\n- **${t.target}:** ${c.target}\n\n${[['question','question'],['role','rea_role'],['result','reported_result'],['limits','limitations'],['takeaway','takeaway']].map(([label,key])=>`## ${t[label]}\n\n${c[key]}\n`).join('\n')}\n## ${t.evidence}\n\n${t.excerptNote}\n\n> ${c.rea_evidence_excerpt}\n\n## ${t.sources}\n\n${sourceLinks(c,t).map(([label,url])=>`- [${label}](${url})`).join('\n')}\n\n${t.rights}\n\n<!-- ${t.markdownGenerated} -->\n`;
}
function readme(language,cases) {
 const t=locales[language.id].ui;
 const use=(id)=>cases.find(c=>c.id===id);
 const languageLinks=languages.map(l=>l.id===language.id?`**${l.label}**`:`[${l.label}](${readmePath(l)})`).join(' · ');
 return `# Awesome REA — Reverse Engineer Anything\n\n![Awesome REA](assets/cover.svg)\n\n${languageLinks}\n\n**${t.heroTitle.replace('\n',' ')}**\n\n${t.heroText}\n\n[${t.heroLink}](${repo}) · [${t.search}](${caseURL(language)}) · [${t.submit}](${repo}/issues/new?template=case_submission.yml)\n\n**${format(t.caseCount,{count:cases.length})}** — ${format(t.breakdown,{official,community})}. ${format(t.updated,{date:catalog.updated_on})}\n\n> ${t.status}\n\n[CHANGELOG](CHANGELOG.md) · [Localization (English)](LOCALIZATION.md)\n\n${isMachine(language)?`${t.translationNote}\n\n`:''}## ${t.popular}\n\n${format(t.popularNote,{date:popularity.checked_on})} [${t.snapshot}](data/popularity.json).\n\n| ${t.project} | GitHub Stars | ${t.details} |\n| --- | ---: | --- |\n${popularCases.map(m=>`| [${m.repository}](https://github.com/${m.repository}) | ${m.stars} | [${use(m.case_id).title}](${markdownPath(language,m.case_id)}) |`).join('\n')}\n\n${groups.map(group=>`## ${t[`category_${group}`]}\n\n| ${t.project} | ${t.question} | ${t.primary} |\n| --- | --- | --- |\n${cases.filter(c=>c.category===group).map(c=>`| [${c.title}](${markdownPath(language,c.id)}) | ${c.question} | [${t.primary}](${c.source_url}) |`).join('\n')}`).join('\n\n')}\n\n## ${t.inclusionTitle}\n\n${t.inclusionText}\n\n[${t.contribute}](CONTRIBUTING.md) · [REA FAQ (English)](ABOUT.md) · [${t.sourceRecords}](SOURCES.md) · [${t.openData}](data/cases.json)\n\n[${t.prerequisites}](${upstream})\n\n${t.independent}\n\n${t.rights} [MIT](LICENSE).\n`;
}

for(const language of languages) {
 const t=locales[language.id].ui;
 const cases=catalog.cases.map(c=>localized(language,c));
 const description=format(t.description,{count:cases.length});
 const indexSchema={'@context':'https://schema.org','@type':'CollectionPage','name':t.pageTitle,'url':caseURL(language),'description':description,'inLanguage':language.id,'dateModified':catalog.updated_on,'mainEntity':{'@type':'ItemList','numberOfItems':cases.length,'itemListElement':cases.map((c,i)=>({'@type':'ListItem','position':i+1,'item':{'@type':'WebPage','name':c.title,'url':caseURL(language,c.id)}}))}};
 let html=head(language,t.pageTitle,description,undefined,indexSchema)+`<body>${header(language)}<main class="wrap" id="main"><section class="hero"><div><h1>${t.heroTitle.split('\n').map(e).join('<br>')}</h1><p>${e(t.heroText)}</p><a href="${repo}">${e(t.heroLink)}</a></div><aside class="sample" aria-label="${e(t.sampleLabel)}"><p>${e(t.sampleStart)}</p><h2>${e(t.sampleTitle)}</h2><p>${e(t.sampleText)}</p><a href="cases/hexgrab/">${e(t.sampleLink)}</a></aside></section><div class="intro"><span><strong>${e(format(t.caseCount,{count:cases.length}))}</strong> · ${e(format(t.breakdown,{official,community}))}</span><span>${e(t.sourceNote)}</span></div>${translationNote(language)}<section class="popular" aria-labelledby="popular-title"><h2 id="popular-title">${e(t.popular)}</h2><p>${e(format(t.popularNote,{date:popularity.checked_on}))} <a href="${repo}/blob/main/data/popularity.json">${e(t.snapshot)}</a></p><ol>${popularCases.map(m=>`<li><a href="cases/${m.case_id}/">${e(cases.find(c=>c.id===m.case_id).title)}</a> <span class="stars" dir="ltr">${m.stars.toLocaleString(language.id)} Stars</span></li>`).join('')}</ol></section><form class="search" data-search hidden role="search"><label for="q">${e(t.search)}</label><div class="input-row"><input id="q" name="q" type="search" autocomplete="off" placeholder="${e(t.placeholder)}"><button type="button" class="clear" data-clear>${e(t.clear)}</button></div><div class="filters" role="group" aria-label="${e(t.filter)}"><button type="button" class="filter" data-filter="all" aria-pressed="true">${e(t.all)}</button>${groups.map(group=>`<button type="button" class="filter" data-filter="${group}" aria-pressed="false">${e(t[`category_${group}`])}</button>`).join('')}</div><p class="count" id="count" role="status" aria-live="polite" data-template="${e(t.counter)}">${e(format(t.counter,{visible:cases.length,total:cases.length}))}</p></form><noscript><p class="not-script">${e(t.noscript)}</p></noscript><div id="empty" class="empty" hidden><h2>${e(t.emptyTitle)}</h2><p>${e(t.emptyText)}</p><button type="button" class="clear" data-reset>${e(t.reset)}</button></div>`;
 for(const group of groups) {
  html+=`<section class="group" data-group><h2>${e(t[`category_${group}`])}</h2>`;
  for(const c of cases.filter(c=>c.category===group)) {
   const en=catalog.cases.find(item=>item.id===c.id);
   const zh=locales['zh-CN'].cases[c.id];
   const search=[...fields.map(k=>c[k]),...fields.map(k=>en[k]),...fields.map(k=>zh[k]),c.id,group,t[`category_${group}`],locales.en.ui[`category_${group}`]].join(' ');
   html+=`<article class="row" data-case data-category="${group}" data-search="${e(search)}"><div><h3><a href="cases/${c.id}/">${e(c.title)}</a></h3><p>${e(c.question)}</p><p class="meta">${e(t.source)}: ${e(c.author)}</p></div><div><p class="result">${e(c.reported_result)}</p><div class="links"><a href="cases/${c.id}/">${e(t.details)}</a><a href="${e(c.source_url)}">${e(t.primary)}</a></div></div></article>`;
  }
  html+='</section>';
 }
 html+=`<section class="how"><h2>${e(t.inclusionTitle)}</h2><p>${e(t.inclusionText)}</p><p><a href="${repo}/blob/main/SOURCES.md">${e(t.sourceRecords)}</a> · <a href="${repo}/issues/new?template=case_submission.yml">${e(t.recommend)}</a></p><p><a href="${upstream}">${e(t.prerequisites)}</a></p></section></main>${footer(language)}<script src="/search.js" defer></script></body></html>`;
 outputs.set(`docs/${language.path}index.html`,html+'\n');
 outputs.set(readmePath(language),readme(language,cases));
 if(language.id==='en') outputs.set('README.en.md',readme(language,cases));
 for(const c of cases) {
  const data={'@context':'https://schema.org','@type':'WebPage','name':c.title,'url':caseURL(language,c.id),'description':c.question,'inLanguage':language.id,'dateModified':c.checked_on,'isPartOf':{'@type':'CollectionPage','name':'Awesome REA','url':caseURL(language)},'citation':[c.source_url,...c.additional_sources]};
  const sections=[['question',c.question],['role',c.rea_role],['result',c.reported_result],['limits',c.limitations],['takeaway',c.takeaway]];
  const page=head(language,`${c.title} | Awesome REA`,c.question,c.id,data)+`<body>${header(language,c.id)}<main class="wrap detail" id="main"><a class="back" href="/${language.path}">${e(t.back)}</a><h1>${e(c.title)}</h1>${translationNote(language,c.id)}<div class="facts"><p><strong>${e(t.target)}:</strong> ${e(c.target)}</p><p><strong>${e(t.author)}:</strong> ${e(c.author)}</p><p><strong>${e(t.checked)}:</strong> <time datetime="${c.checked_on}">${c.checked_on}</time></p><p><strong>${e(t.review)}:</strong> ${e(t.status)}</p></div>${sections.map(([key,text])=>`<section><h2>${e(t[key])}</h2><p>${e(text)}</p></section>`).join('')}<section><h2>${e(t.evidence)}</h2><blockquote lang="${c.rea_evidence_language}" dir="auto">${e(c.rea_evidence_excerpt)}</blockquote><p>${e(t.excerptNote)}</p></section><section><h2>${e(t.sources)}</h2><ul>${sourceLinks(c,t).map(([label,url])=>`<li><a href="${e(url)}">${e(label)}</a></li>`).join('')}</ul><p>${e(t.rights)}</p></section><p><a href="${repo}/blob/main/${markdownPath(language,c.id)}">${e(t.githubCase)}</a> · <a href="${repo}/issues/new?template=correction.yml">${e(t.correct)}</a></p></main>${footer(language)}</body></html>`;
  outputs.set(`docs/${casePath(language,c.id)}index.html`,page+'\n');
  outputs.set(markdownPath(language,c.id),caseMarkdown(language,c));
 }
}
const urls=languages.flatMap(l=>[caseURL(l),...catalog.cases.map(c=>caseURL(l,c.id))]);
outputs.set('docs/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${e(url)}</loc><lastmod>${catalog.updated_on}</lastmod></url>`).join('')}</urlset>\n`);
outputs.set('docs/.nojekyll','');
outputs.set('docs/favicon.svg','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="13" fill="#1557b0"/><text x="32" y="44" text-anchor="middle" fill="white" font-family="sans-serif" font-size="39" font-weight="700">R</text></svg>\n');
outputs.set('docs/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${base}sitemap.xml\n`);
for(const [file,content] of outputs) {
 const dest=path.join(root,file);
 if(check) { if(await readFile(dest,'utf8')!==content) throw new Error(`Generated file is stale: ${file}`); }
 else { await mkdir(path.dirname(dest),{recursive:true}); await writeFile(dest,content); }
}
for(const language of languages) for(const entry of await readdir(path.join(root,'docs',language.path,'cases'),{withFileTypes:true})) {
 if(entry.isDirectory()&&!catalog.cases.some(c=>c.id===entry.name)||entry.name.endsWith('.html')) {
  if(check) throw new Error(`Obsolete case page: ${language.path}${entry.name}`);
  await rm(path.join(root,'docs',language.path,'cases',entry.name),{recursive:true,force:true});
 }
}
console.log(`${check?'Checked':'Built'} ${catalog.cases.length} cases × ${languages.length} languages: ${urls.length} HTML pages, Markdown notes, READMEs and metadata.`);
