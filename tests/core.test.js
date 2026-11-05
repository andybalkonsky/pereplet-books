import test from 'node:test';
import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {BOOKS} from '../data.js';
import {freshState,decide,restore,undo,available,statistics,validateState,verified,STATUSES,validISBN} from '../core.js';
const ids=BOOKS.map(b=>b.id);
test('В каталог проходят только подтверждённые переводы с проверенной аннотацией',()=>{
 assert.equal(new Set(ids).size,BOOKS.length);
 for(const b of BOOKS){assert.ok(verified(b),b.id);for(const r of b.related)assert.ok(ids.includes(r.id));}
 assert.equal(verified({...BOOKS[0],verification:{language:'ru'}}),false);
 assert.equal(verified({...BOOKS[0],review:{spoilerFree:false}}),false);
 assert.equal(verified({...BOOKS[0],verification:{...BOOKS[0].verification,source:'https://example.org/fake'}}),false);
 assert.equal(verified({...BOOKS[0],verification:{...BOOKS[0].verification,isbn:'978-0-000-00000-0'}}),false);
});
test('ISBN проверяется по контрольной сумме, а не только по формату',()=>{
 assert.equal(validISBN('978-5-389-09948-7'),true);assert.equal(validISBN('5-7684-0473-2'),true);
 assert.equal(validISBN('978-5-389-09948-8'),false);assert.equal(validISBN('123'),false);
});
test('Свайпы, библиотека, отклонённые и отмена сохраняют независимые решения',()=>{
 const start=freshState(),accepted=decide(start,ids[0],'accepted'),rejected=decide(accepted,ids[1],'rejected');
 assert.equal(available(BOOKS,rejected).length,BOOKS.length-2);
 assert.equal(rejected.books[ids[0]].status,'want');assert.equal(rejected.books[ids[1]].decision,'rejected');
 assert.deepEqual(undo(rejected),accepted);assert.deepEqual(undo(accepted),start);
 const restored=restore(rejected,ids[1]);assert.equal(available(BOOKS,restored).length,BOOKS.length-1);assert.deepEqual(undo(restored),rejected);
});
test('Все четыре статуса и статистика отражают текущую библиотеку',()=>{
 let s=freshState();Object.keys(STATUSES).forEach((status,i)=>{s=decide(s,ids[i],'accepted',status);});s=decide(s,ids[4],'rejected');
 const metrics=statistics(s,BOOKS);assert.equal(metrics.accepted,4);assert.equal(metrics.rejected,1);assert.deepEqual(Object.values(metrics.counts),[1,1,1,1]);
 s=decide(s,ids[2],'accepted','dropped');assert.equal(statistics(s,BOOKS).counts.read,0);
});
test('Экспорт / импорт переносят библиотеку, фильтруют чужие ID и отвергают повреждения',()=>{
 const s=decide(freshState(),ids[0],'accepted','reading');s.goal=24;
 const parsed=validateState(JSON.parse(JSON.stringify(s)),ids);assert.deepEqual(parsed.books,s.books);assert.equal(parsed.goal,24);assert.deepEqual(parsed.history,[]);
 assert.throws(()=>validateState({version:2,books:{}},ids));assert.throws(()=>validateState({...s,books:{[ids[0]]:{decision:'accepted',status:'bad'}}},ids));
 assert.deepEqual(validateState({...s,books:{unknown:{decision:'bad'}}},ids).books,{});
 assert.throws(()=>validateState({...s,books:{[ids[0]]:{...s.books[ids[0]],updatedAt:'invalid'}}},ids));
});
test('Фильтр жанров не возвращает просмотренные книги',()=>{
 const s=decide(freshState(),'earthsea','rejected'),books=available(BOOKS,s,'Фэнтези');assert.ok(books.some(b=>b.id==='hobbit'));assert.ok(books.every(b=>b.genre==='Фэнтези'&&b.id!=='earthsea'));
});
test('Статические ресурсы и офлайн-каталог полны',async()=>{
 assert.ok(BOOKS.length>=140);
 for(const b of BOOKS){const url=new URL(b.coverUrl);assert.equal(url.protocol,'https:');assert.ok(['cdn.azbooka.ru','cdn.eksmo.ru','cdn.ast.ru'].includes(url.hostname));assert.ok(b.summary.length>50);}
 for(const file of ['index.html','style.css','theme.js','app.js','core.js','data.js','manifest.webmanifest','assets/icon.svg','assets/fallback.svg'])await access(new URL('../'+file,import.meta.url));
});
