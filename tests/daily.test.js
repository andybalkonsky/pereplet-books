import test from 'node:test';
import assert from 'node:assert/strict';
import {BOOKS} from '../data.js';
import {freshState,prepareDaily,dailyAvailable,dayKey,decide,restore,undo,validateState,DAILY_LIMIT} from '../core.js';
const ids=BOOKS.map(b=>b.id),date='2026-11-05';
test('Дневная подборка содержит 20 уникальных книг и не меняется при перезагрузке',()=>{
 const s=prepareDaily(freshState(),BOOKS,date);assert.equal(s.daily.ids.length,DAILY_LIMIT);assert.equal(new Set(s.daily.ids).size,20);
 const restored=validateState(JSON.parse(JSON.stringify(s)),ids);assert.deepEqual(prepareDaily(restored,BOOKS,date).daily,s.daily);
 assert.strictEqual(prepareDaily(s,BOOKS,date),s);
});
test('После 20 решений ни фильтр, ни возврат посторонней книги не расширяет подборку',()=>{
 let s=prepareDaily(freshState(),BOOKS,date);const batch=[...s.daily.ids];
 for(const id of batch)s=decide(s,id,'rejected');
 assert.equal(dailyAvailable(BOOKS,s).length,0);assert.equal(dailyAvailable(BOOKS,s,'Фэнтези').length,0);
 const outsider=ids.find(id=>!batch.includes(id));s=restore(decide(s,outsider,'rejected'),outsider);
 assert.equal(dailyAvailable(BOOKS,s).length,0);assert.deepEqual(s.daily.ids,batch);
});
test('Отмена возвращает ту же книгу и не выдаёт новую сверх лимита',()=>{
 const s=prepareDaily(freshState(),BOOKS,date),chosen=decide(s,s.daily.ids[0],'accepted');
 assert.equal(dailyAvailable(BOOKS,chosen).length,19);const reverted=undo(chosen);assert.equal(dailyAvailable(BOOKS,reverted).length,20);assert.deepEqual(reverted.daily,s.daily);
});
test('На следующий день выдаются новые непросмотренные книги, старые решения сохраняются',()=>{
 let s=prepareDaily(freshState(),BOOKS,date);const old=[...s.daily.ids];for(const id of old)s=decide(s,id,'accepted');
 const next=prepareDaily(s,BOOKS,'2026-11-06');assert.equal(next.daily.ids.length,20);assert.ok(next.daily.ids.every(id=>!old.includes(id)));assert.deepEqual(next.books,s.books);
});
test('Миграция старой копии сохраняет статусы и добавляет дневную тему',()=>{
 const old={version:1,books:{earthsea:{decision:'accepted',status:'reading',updatedAt:'2026-11-01T12:00:00Z'}},goal:12};
 const s=validateState(old,ids);assert.equal(s.books.earthsea.status,'reading');assert.equal(s.theme,'day');assert.equal(prepareDaily(s,BOOKS,date).daily.ids.includes('earthsea'),false);
 const pink=validateState({...s,theme:'pink'},ids);assert.equal(pink.theme,'pink');assert.equal(validateState({...s,theme:'invalid'},ids).theme,'day');
});
test('Дата считается по локальному календарю, повреждённый импорт не выдаёт больше 20 карточек',()=>{
 assert.equal(dayKey(new Date(2026,10,5,23,59)),'2026-11-05');assert.equal(dayKey(new Date(2026,10,6,0,0)),'2026-11-06');
 const s=validateState({...freshState(),daily:{date,ids:[...ids,...ids]}},ids);assert.equal(s.daily.ids.length,20);
 assert.equal(prepareDaily(freshState(),BOOKS.slice(0,3),date).daily.ids.length,3);
});
