import {BOOKS} from './data.js';
import {STATUSES,KEY,freshState,validateState,verified,decide,restore,undo,available,statistics} from './core.js';
const catalog=BOOKS.filter(verified), byId=new Map(catalog.map(b=>[b.id,b]));
const $=s=>document.querySelector(s), main=$('#main'), dialog=$('#book-dialog');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let state=freshState(),storageProblem='', genre='all',search='',statusFilter='all',view='discover',pending=null,returnFocus=null;
try {const raw=localStorage.getItem(KEY);if(raw)state=validateState(JSON.parse(raw),catalog.map(b=>b.id));} catch {storageProblem='Не удалось прочитать сохранение. Оно не перезаписано: сначала экспортируйте исходные данные в настройках.';}
let readBlocked=Boolean(storageProblem);
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').classList.remove('visible'),5000);}
function commit(next){
  if(readBlocked){toast('Сначала сохраните исходные данные и восстановите копию в настройках.');return false;}
  try{localStorage.setItem(KEY,JSON.stringify(next));state=next;storageProblem='';return true;}
  catch{storageProblem='Браузер не разрешил сохранить изменения. Освободите место или разрешите хранение данных.';toast(storageProblem);return false;}
}
const cover=b=>`<img class="cover" src="assets/${b.id}.svg" alt="Графическая обложка: ${esc(b.title)}" draggable="false" width="280" height="400">`;
function title(kicker,heading,description=''){return `<div class="section-title"><p class="eyebrow">${kicker}</p><h1>${heading}</h1>${description?`<p class="muted">${description}</p>`:''}</div>`;}
const empty=(heading,text)=>`<div class="empty"><span aria-hidden="true">❧</span><h2>${heading}</h2><p>${text}</p></div>`;
function options(value){return Object.entries(STATUSES).map(([id,label])=>`<option value="${id}" ${id===value?'selected':''}>${label}</option>`).join('');}
function genreOptions(){return `<option value="all">Все жанры</option>`+[...new Set(catalog.map(b=>b.genre))].map(g=>`<option ${g===genre?'selected':''}>${g}</option>`).join('');}
function render(){
  view=location.hash.slice(1)||'discover';if(!['discover','library','rejected','stats','settings','about'].includes(view))view='discover';
  document.querySelectorAll('[data-nav]').forEach(a=>{a.classList.toggle('active',a.dataset.nav===view);if(a.dataset.nav===view)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  $('#library-count').textContent=statistics(state,catalog).accepted;
  main.className=`view-${view}`;
  const renderers={discover:renderDiscover,library:()=>renderShelf(false),rejected:()=>renderShelf(true),stats:renderStats,settings:renderSettings,about:renderAbout};
  main.innerHTML=(storageProblem?`<p class="warning" role="alert">${esc(storageProblem)}</p>`:'')+renderers[view]();
  if(view==='discover')bindSwipe();
}
function renderDiscover(){
  const queue=available(catalog,state,genre), b=queue[0], stats=statistics(state,catalog);
  return `<section class="discovery-intro">${title('Свидание с новой историей','Ваша следующая<br><em>любимая книга.</em>','Сначала — первое впечатление.<br>Всё остальное — если случится симпатия.')}<div class="intro-note"><span class="tiny-icon">✓</span><span>Только книги на русском<br><small>Перевод каждого издания проверен</small></span></div><div class="daily-note"><span class="eyebrow">МАЛЕНЬКИЙ РИТУАЛ</span><p>Пара минут на выбор.<br>Целый мир впереди.</p><span class="line-art" aria-hidden="true">❧</span></div></section>
  <section class="discovery-stage" aria-label="Знакомство с книгами"><div class="stage-top"><label class="select-label">На полке <select id="genre" aria-label="Жанр">${genreOptions()}</select></label><span class="muted small">Осталось ${queue.length}</span></div>
  ${b?`<div class="card-stack"><article class="swipe-card" id="swipe-card" aria-label="${esc(b.title)}"><div class="cover-stage">${cover(b)}</div><div class="book-caption"><span class="genre">${esc(b.genre)}</span><h2>${esc(b.title)}</h2><p>${esc(b.author)}</p></div></article></div><div class="decision-buttons"><button class="decision reject" data-action="reject" aria-label="Отклонить книгу"><span aria-hidden="true">×</span><small>Не сейчас</small></button><button class="undo" data-action="undo" ${!state.history.length?'disabled':''} aria-label="Отменить последний выбор">↶</button><button class="decision accept" data-action="accept" aria-label="Книга нравится, открыть аннотацию"><span aria-hidden="true">♡</span><small>Интересно</small></button></div><p class="gesture-hint">← Не сейчас <span>свайпните или нажмите кнопку</span> Интересно →</p>`:empty('Полка просмотрена',genre==='all'?'Все книги уже нашли своё место. Загляните в библиотеку или верните книгу из отложенных.':'В этом жанре больше нет новых книг. Выберите другой жанр.')} ${!b&&state.history.length?'<button class="button" data-action="undo">↶ Отменить последний выбор</button>':''}</section>
  <aside class="discovery-aside"><span class="edition-label">ЛИЧНАЯ КОЛЛЕКЦИЯ / 01</span><div class="mini-stat"><strong>${stats.accepted.toString().padStart(2,'0')}</strong><span>историй<br>в вашей библиотеке</span></div><a class="text-link" href="#library">Заглянуть на полку ↗</a><div class="aside-bottom"><span aria-hidden="true">✳</span><p>Без рейтингов.<br>Без чужих мнений.<br>Только ваш вкус.</p></div></aside>`;
}
function renderShelf(rejected){
  let items=catalog.filter(b=>state.books[b.id]?.decision===(rejected?'rejected':'accepted'));
  const total=items.length;
  items=items.filter(b=>(rejected||statusFilter==='all'||state.books[b.id].status===statusFilter)&&`${b.title} ${b.author} ${b.genre}`.toLocaleLowerCase('ru').includes(search.toLocaleLowerCase('ru')));
  return `${title(rejected?'Пусть подождут':'Ваша личная полка',rejected?'Отложенные истории':'Моя библиотека',rejected?'Здесь книги, которым вы сказали «не сейчас». К любому знакомству можно вернуться.':'Все книги, которым вы сказали «интересно». Меняйте статус в своём темпе.')}<div class="shelf-toolbar"><label class="search"><span aria-hidden="true">⌕</span><input id="search" type="search" placeholder="Название, автор или жанр" aria-label="Поиск по книгам" value="${esc(search)}"></label>${!rejected?`<label class="select-label">Статус <select id="status-filter"><option value="all">Все статусы</option>${options(statusFilter)}</select></label>`:''}<span class="muted">${items.length} из ${total}</span></div><div class="shelf">${items.map(b=>`<article class="shelf-book"><button class="book-open" data-open="${b.id}">${cover(b)}<span class="genre">${esc(b.genre)}</span><h2>${esc(b.title)}</h2><p>${esc(b.author)}</p></button>${rejected?`<button class="button subtle wide" data-restore="${b.id}">Вернуть в знакомства</button>`:`<label class="sr-only" for="status-${b.id}">Статус книги ${esc(b.title)}</label><select class="status-select" id="status-${b.id}" data-status="${b.id}">${options(state.books[b.id].status)}</select>`}</article>`).join('')}</div>${!items.length?empty(total?'Ничего не нашлось':rejected?'Пока ни одной отложенной книги':'Здесь поселятся ваши книги',total?'Попробуйте изменить поиск или фильтр.':'Загляните в «Открывать» и познакомьтесь с первой историей.'):''}`;
}
function renderStats(){
  const s=statistics(state,catalog), percent=Math.min(100,Math.round(s.counts.read/state.goal*100));
  return `${title('Читательский дневник','Ваши истории в цифрах','Небольшие шаги складываются в большую библиотеку.')}<div class="stats-grid">${Object.entries(STATUSES).map(([key,label])=>`<article class="metric"><span>${label}</span><strong>${s.counts[key]}</strong></article>`).join('')}</div><div class="stats-panels"><section class="paper-panel"><span class="eyebrow">ЛИЧНАЯ ЦЕЛЬ</span><h2>Ещё одна глава — ближе к цели</h2><p><strong>${s.counts.read}</strong> из ${state.goal} книг прочитано</p><progress max="${state.goal}" value="${s.counts.read}" aria-label="Прогресс цели"></progress><span class="muted">${percent}% · все книги со статусом «Прочитано»</span><label class="goal-field">Моя цель <input type="number" id="goal" min="1" max="999" value="${state.goal}"> <button class="button subtle" data-action="goal">Сохранить</button></label></section><section class="paper-panel"><span class="eyebrow">ВАШ КНИЖНЫЙ ВКУС</span><h2>Любимые жанры</h2>${Object.entries(s.genres).sort((a,b)=>b[1]-a[1]).map(([g,n])=>`<div class="genre-row"><span>${g}</span><strong>${n}</strong><div class="bar"><i style="width:${n/Math.max(1,s.accepted)*100}%"></i></div></div>`).join('')||'<p class="muted">Добавьте книги, и здесь появятся ваши предпочтения.</p>'}<p class="muted small">По всем книгам библиотеки, включая брошенные.</p></section></div><p class="muted">Просмотрено: ${s.accepted+s.rejected} · Добавлено: ${s.accepted} · Отложено: ${s.rejected}. Статистика отражает текущие статусы, а не историю за год.</p>`;
}
function renderSettings(){return `${title('Всё под рукой','Настройки и данные','Библиотека сохраняется в этом браузере. Для переноса на другой телефон используйте резервную копию.')}<div class="stats-panels"><section class="paper-panel"><h2>Ваша библиотека — с вами</h2><p class="muted">Автоматической синхронизации между устройствами нет. Очистка данных сайта удалит сохранение.</p><button class="button" data-action="export">↓ Экспортировать библиотеку</button><label class="button subtle import-label">↑ Импортировать копию<input id="import" type="file" accept="application/json,.json"></label><p class="small muted">Импорт заменяет текущую библиотеку после подтверждения. Копии других версий не принимаются.</p>${readBlocked?'<button class="button subtle" data-action="raw-export">Скачать исходное сохранение</button><button class="button subtle" data-action="recover">Начать с пустой библиотеки</button>':''}</section><section class="paper-panel"><h2>Устроиться поудобнее</h2><p>На телефоне добавьте сайт на главный экран через меню браузера. После первого открытия книги доступны без интернета.</p><p class="muted">Внешние ссылки на источники требуют подключения. Мы не отправляем вашу библиотеку на сервер и не используем аналитику.</p><a class="text-link" href="#about">Как проверяется каталог ↗</a></section></div>`;}
function renderAbout(){return `${title('Редакционная полка','Хорошая история начинается с доверия.')}<div class="about-layout"><section class="paper-panel"><h2>Только подтверждённые переводы</h2><p>В стартовом каталоге ${catalog.length} произведений. Для каждого вручную проверены русское издание, переводчик и ISBN по карточке издательства или записи Российской государственной библиотеки. Проверка: 5 ноября 2026 года.</p><p>Язык названия или поле «ru» из книжного поиска сами по себе не считаются доказательством. Непроверенные записи не попадают в знакомства.</p><h2>Аннотации без спойлеров</h2><p>Короткие тексты написаны для этого каталога: только исходная ситуация, настроение и темы. Без развязок, поворотов и раскрытия судеб персонажей. Оригинальные аннотации издательств автоматически не подгружаются — они могут содержать спойлеры.</p><h2>Обложки и связи</h2><p>Графические обложки созданы специально для «Переплёта» и не воспроизводят оформление издательств. ISBN относится к указанному русскому изданию; для произведения в сборнике это указано отдельно.</p><p>«Продолжение» означает следующую книгу цикла; «Похожее настроение» — редакционную рекомендацию. Ссылка открывает карточку и не добавляет книгу без вашего выбора.</p></section><section class="paper-panel"><h2>Проверенные издания</h2><div class="source-list">${catalog.map(b=>`<details><summary>${esc(b.title)}</summary><p>${esc(b.verification.translator)}<br>ISBN ${esc(b.verification.isbn)}</p><p class="muted small">${esc(b.verification.evidence)}</p><a href="${b.verification.source}" target="_blank" rel="noopener noreferrer">Источник подтверждения ↗</a></details>`).join('')}</div><p class="small muted">Внешний сайт может раскрывать сюжет. Для спокойного выбора достаточно нашей аннотации.</p></section></div>`;}
function openBook(id,mode='details'){
  const b=byId.get(id);if(!b)return;
  if(!dialog.open)returnFocus=document.activeElement;
  pending=mode==='accept'?id:null;
  const record=state.books[id];
  $('#dialog-content').innerHTML=`<button class="dialog-close" data-action="close" aria-label="Закрыть карточку">×</button><div class="dialog-layout"><div class="dialog-cover">${cover(b)}</div><section><p class="eyebrow">${pending?'ЕСТЬ СИМПАТИЯ':'КАРТОЧКА КНИГИ'}</p><span class="genre">${b.genre}</span><h2 id="dialog-title">${esc(b.title)}</h2><p class="book-author">${esc(b.author)}</p><div class="annotation"><span class="eyebrow">БЕЗ СПОЙЛЕРОВ</span><p>${esc(b.summary)}</p></div>${record?.decision==='accepted'?`<label class="field">На вашей полке<select data-status="${id}">${options(record.status)}</select></label>`:`<button class="button wide" data-add="${id}">♡ Добавить в «Хочу прочитать»</button>`}${pending?'<button class="button subtle wide" data-action="close">Вернуться к выбору</button>':''}<div class="related"><span class="eyebrow">РЯДОМ НА ПОЛКЕ</span>${b.related.map(r=>`<button class="related-link" data-related="${r.id}"><span><small>${esc(r.type)}</small>${esc(byId.get(r.id)?.title||'')}</span><span>↗</span></button>`).join('')||'<p class="small muted">Связанных книг в каталоге пока нет.</p>'}</div><details class="verification"><summary>✓ Русское издание подтверждено</summary><p>${esc(b.verification.publisher)} · ISBN ${esc(b.verification.isbn)}<br>Перевод: ${esc(b.verification.translator)}</p><p>${esc(b.verification.evidence)}</p><p>Проверено: ${b.verification.checkedAt}</p><a href="${b.verification.source}" target="_blank" rel="noopener noreferrer">Проверить источник ↗</a><p class="small muted">На внешнем сайте возможны спойлеры.</p></details></section></div>`;
  if(!dialog.open)dialog.showModal();else dialog.scrollTop=0;
  $('.dialog-close').focus();
}
function closeBook(){dialog.close();pending=null;if(returnFocus?.isConnected)returnFocus.focus();else main.focus();}
function acceptCurrent(){const b=available(catalog,state,genre)[0];if(b)openBook(b.id,'accept');}
function rejectCurrent(){const b=available(catalog,state,genre)[0];if(b&&commit(decide(state,b.id,'rejected'))){render();toast('Книга в отложенных. Выбор можно отменить.');}}
function download(content,name){const url=URL.createObjectURL(new Blob([content],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
document.addEventListener('click',e=>{
  const el=e.target.closest('button,[data-open]');if(!el)return;
  if(el.dataset.open)openBook(el.dataset.open);
  if(el.dataset.related)openBook(el.dataset.related);
  if(el.dataset.add&&commit(decide(state,el.dataset.add,'accepted'))){closeBook();render();toast('Книга добавлена в «Хочу прочитать».');}
  if(el.dataset.restore&&commit(restore(state,el.dataset.restore))){render();toast('Книга снова появится в знакомствах.');}
  const a=el.dataset.action;
  if(a==='close')closeBook();
  if(a==='accept')acceptCurrent();
  if(a==='reject')rejectCurrent();
  if(a==='undo'&&commit(undo(state))){render();toast('Последний выбор отменён.');}
  if(a==='export')download(JSON.stringify({...state,history:[]},null,2),`pereplet-${new Date().toISOString().slice(0,10)}.json`);
  if(a==='raw-export'){try{download(localStorage.getItem(KEY)||'{}','pereplet-original.json');}catch{toast('Доступ к хранилищу закрыт.');}}
  if(a==='recover'&&confirm('Исходное сохранение будет заменено пустой библиотекой. Сначала скачайте его. Продолжить?')){readBlocked=false;if(commit(freshState()))render();else readBlocked=true;}
  if(a==='goal'){const n=Number($('#goal').value);if(Number.isInteger(n)&&n>=1&&n<=999){if(commit({...state,goal:n})){render();toast('Цель сохранена.');}}else toast('Укажите целое число от 1 до 999.');}
});
document.addEventListener('change',async e=>{
  if(e.target.id==='genre'){genre=e.target.value;render();}
  if(e.target.id==='status-filter'){statusFilter=e.target.value;render();}
  if(e.target.dataset.status){const id=e.target.dataset.status;if(commit(decide(state,id,'accepted',e.target.value))){render();toast('Статус сохранён.');}else e.target.value=state.books[id]?.status||'want';}
  if(e.target.id==='import'){
    const file=e.target.files[0];if(!file)return;
    try{if(file.size>2*1024*1024)throw new Error('Файл слишком большой (не более 2 МБ).');const next=validateState(JSON.parse(await file.text()),catalog.map(b=>b.id));if(confirm(`Заменить текущую библиотеку? В копии ${Object.keys(next.books).length} записей. Перед импортом рекомендуется экспорт.`)){const was=readBlocked;readBlocked=false;if(commit(next)){render();toast('Библиотека восстановлена.');}else readBlocked=was;}}
    catch(error){toast(error.message==='Unexpected end of JSON input'?'Не удалось прочитать JSON.':`Копия не загружена: ${error.message}`);}finally{e.target.value='';}
  }
});
document.addEventListener('input',e=>{if(e.target.id==='search'){search=e.target.value;const pos=e.target.selectionStart;render();$('#search').focus();try{$('#search').setSelectionRange(pos,pos);}catch{}}});
document.addEventListener('keydown',e=>{if(dialog.open||view!=='discover'||/INPUT|SELECT|TEXTAREA|BUTTON/.test(e.target.tagName)||e.ctrlKey||e.altKey||e.metaKey)return;if(e.key==='ArrowLeft'){e.preventDefault();rejectCurrent();}if(e.key==='ArrowRight'){e.preventDefault();acceptCurrent();}});
dialog.addEventListener('cancel',e=>{e.preventDefault();closeBook();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeBook();}});
function bindSwipe(){const card=$('#swipe-card');if(!card)return;let start=null;
  card.addEventListener('pointerdown',e=>{if(e.button!==0)return;start={x:e.clientX,y:e.clientY,id:e.pointerId};card.setPointerCapture(e.pointerId);});
  card.addEventListener('pointermove',e=>{if(!start)return;const dx=e.clientX-start.x,dy=e.clientY-start.y;if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>12){card.style.transform=`translateX(${dx*.55}px) rotate(${dx/35}deg)`;}});
  const reset=()=>{start=null;card.style.transform='';};card.addEventListener('pointercancel',reset);
  card.addEventListener('pointerup',e=>{if(!start)return;const dx=e.clientX-start.x,dy=e.clientY-start.y;reset();if(Math.abs(dx)>75&&Math.abs(dx)>Math.abs(dy)*1.3){if(dx>0)acceptCurrent();else rejectCurrent();}});
}
window.addEventListener('hashchange',()=>{search='';statusFilter='all';if(dialog.open)closeBook();render();main.focus();});
window.addEventListener('storage',e=>{if(e.key===KEY){try{state=e.newValue?validateState(JSON.parse(e.newValue),catalog.map(b=>b.id)):freshState();readBlocked=false;storageProblem='';if(dialog.open)closeBook();render();toast('Библиотека обновлена из другой вкладки.');}catch{readBlocked=true;storageProblem='Другая вкладка записала некорректное сохранение. Экспортируйте исходные данные в настройках и восстановите копию.';if(dialog.open)closeBook();render();toast(storageProblem);}}});
render();
if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('./sw.js').catch(()=>toast('Офлайн-режим пока недоступен. Библиотека продолжает сохраняться в браузере.'));
