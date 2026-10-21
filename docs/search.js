const form = document.querySelector('[data-search]');
const input = document.querySelector('#q');
const rows = [...document.querySelectorAll('[data-case]')];
const groups = [...document.querySelectorAll('[data-group]')];
const buttons = [...document.querySelectorAll('[data-filter]')];
const counter = document.querySelector('#count');
const empty = document.querySelector('#empty');
const params = new URLSearchParams(location.search);
const normalize = value => value.normalize('NFKC').toLocaleLowerCase().trim();
const legacyCategories = {'官方案例':'official','游戏实践':'games','应用实践':'apps','硬件与兼容':'hardware','分析与评测':'analysis','学习与复现':'learning','工具与集成':'integrations'};
const requestedCategory = legacyCategories[params.get('category')] || params.get('category');
let category = buttons.some(b => b.dataset.filter === requestedCategory) ? requestedCategory : 'all';
input.value = params.get('q') || '';
function update() {
  const words = normalize(input.value).split(/\s+/u).filter(Boolean);
  let visible = 0;
  for (const row of rows) {
    const matches = (category === 'all' || row.dataset.category === category) && words.every(word => normalize(row.dataset.search).includes(word));
    row.hidden = !matches;
    if (matches) visible++;
  }
  for (const group of groups) group.hidden = ![...group.querySelectorAll('[data-case]')].some(row => !row.hidden);
  for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  counter.textContent = counter.dataset.template.replace('{visible}', visible).replace('{total}', rows.length);
  empty.hidden = visible !== 0;
  const next = new URL(location.href);
  next.searchParams.delete('q'); next.searchParams.delete('category');
  if (input.value.trim()) next.searchParams.set('q', input.value.trim());
  if (category !== 'all') next.searchParams.set('category', category);
  history.replaceState(null, '', next.pathname + next.search + next.hash);
  for (const link of document.querySelectorAll('[data-language]')) {
    const target = new URL(link.href);
    target.search = next.search;
    link.href = target.href;
  }
}
form.hidden = false;
input.addEventListener('input', update);
form.addEventListener('submit', event => { event.preventDefault(); update(); });
for (const button of buttons) button.addEventListener('click', () => { category = button.dataset.filter; update(); });
document.querySelector('[data-clear]').addEventListener('click', () => { input.value = ''; category = 'all'; update(); input.focus(); });
document.querySelector('[data-reset]').addEventListener('click', () => { input.value = ''; category = 'all'; update(); input.focus(); });
window.addEventListener('keydown', event => { if (event.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && !document.activeElement.isContentEditable && !event.metaKey && !event.ctrlKey && !event.altKey) { event.preventDefault(); input.focus(); } });
update();
