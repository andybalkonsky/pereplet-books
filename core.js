export const STATUSES = Object.freeze({want:'Хочу прочитать',reading:'Читаю',read:'Прочитано',dropped:'Брошено'});
export const KEY = 'pereplet:state:v1';
export const freshState = () => ({version:1,books:{},history:[],goal:12});
export function validISBN(value) {
  const s=String(value??'').replaceAll('-','').replaceAll(' ','');
  if(/^\d{13}$/.test(s))return [...s].reduce((sum,n,i)=>sum+Number(n)*(i%2?3:1),0)%10===0;
  if(/^\d{9}[\dX]$/.test(s))return [...s].reduce((sum,n,i)=>sum+(n==='X'?10:Number(n))*(10-i),0)%11===0;
  return false;
}
export function verified(book) {
  const v=book.verification;
  if(!v||typeof v.source!=='string')return false;
  let source;try{source=new URL(v.source);}catch{return false;}
  return v.status==='verified' && v.language==='ru' && Boolean(v.translator && v.evidence) && validISBN(v.isbn) && /^\d{4}-\d{2}-\d{2}$/.test(v.checkedAt) && Number.isFinite(Date.parse(v.checkedAt)) && source.protocol==='https:' && ['azbooka.ru','eksmo.ru','search.rsl.ru'].includes(source.hostname) && book.review?.spoilerFree===true;
}
export function validateState(raw,ids) {
  if(!raw || raw.version!==1 || !raw.books || typeof raw.books!=='object' || Array.isArray(raw.books)) throw new Error('Неверный формат резервной копии.');
  const state=freshState(), allowed=new Set(ids);
  for(const [id,record] of Object.entries(raw.books)) {
    if(!allowed.has(id)) continue;
    if(!record || !['accepted','rejected'].includes(record.decision) || (record.decision==='accepted' && !Object.hasOwn(STATUSES,record.status)) || typeof record.updatedAt!=='string' || !Number.isFinite(Date.parse(record.updatedAt))) throw new Error('В копии найдены некорректные записи.');
    state.books[id]={decision:record.decision,status:record.decision==='accepted'?record.status:null,updatedAt:record.updatedAt};
  }
  state.goal=Number.isInteger(raw.goal)&&raw.goal>=1&&raw.goal<=999?raw.goal:12;
  // История нужна только для отмены в текущем сеансе; импорт не доверяет её содержимому.
  return state;
}
export function decide(state,id,decision,status='want',now=new Date().toISOString()) {
  if(!['accepted','rejected'].includes(decision)||!Object.hasOwn(STATUSES,status)) throw new Error('Некорректный выбор');
  return {...state,books:{...state.books,[id]:{decision,status:decision==='accepted'?status:null,updatedAt:now}},history:[...state.history.slice(-49),{id,previous:state.books[id]??null}]};
}
export function restore(state,id) {
  const books={...state.books}; delete books[id];
  return {...state,books,history:[...state.history.slice(-49),{id,previous:state.books[id]??null}]};
}
export function undo(state) {
  if(!state.history.length)return state;
  const history=[...state.history],last=history.pop(),books={...state.books};
  if(last.previous)books[last.id]=last.previous;else delete books[last.id];
  return {...state,books,history};
}
export function available(catalog,state,genre='all') {return catalog.filter(b=>verified(b)&&!state.books[b.id]&&(genre==='all'||b.genre===genre));}
export function statistics(state,catalog) {
  const accepted=catalog.filter(b=>state.books[b.id]?.decision==='accepted');
  const counts=Object.fromEntries(Object.keys(STATUSES).map(s=>[s,accepted.filter(b=>state.books[b.id].status===s).length]));
  const genres={};for(const b of accepted)genres[b.genre]=(genres[b.genre]||0)+1;
  return {accepted:accepted.length,rejected:catalog.filter(b=>state.books[b.id]?.decision==='rejected').length,counts,genres};
}
