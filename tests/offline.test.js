import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile,access} from 'node:fs/promises';
const code=await readFile(new URL('../sw.js',import.meta.url),'utf8');
function worker(){
 const handlers={},deleted=[],requests=[],files=[];
 let cached=null,networkCalls=0;
 const context={URL,self:{location:{origin:'https://reader.example'},registration:{scope:'https://reader.example/books/'},clients:{claim:async()=>{}} ,addEventListener:(name,handler)=>handlers[name]=handler},caches:{open:async()=>({addAll:async list=>files.push(...list)}),keys:async()=>['pereplet-v0','pereplet-v1','kotoba-v5'],delete:async key=>deleted.push(key),match:async req=>{requests.push(req);return cached;}},fetch:async()=>{networkCalls++;return 'network';}};
 vm.runInNewContext(code,context);
 return {handlers,deleted,requests,files,setCached:v=>cached=v,get networkCalls(){return networkCalls;}};
}
test('Офлайн-установка включает только существующие локальные файлы',async()=>{
 const w=worker();let task;w.handlers.install({waitUntil:p=>task=p});await task;
 assert.ok(w.files.includes('./app.js'));assert.ok(w.files.includes('./assets/icon-512.png'));
 for(const file of w.files)await access(new URL(file==='./'?'../index.html':'../'+file.slice(2),import.meta.url));
});
test('Очистка кэша не затрагивает Kotoba и другие приложения',async()=>{
 const w=worker();let task;w.handlers.activate({waitUntil:p=>task=p});await task;assert.deepEqual(w.deleted,['pereplet-v0']);
});
test('Офлайн-кэш возвращает ресурс без сети и не перехватывает источники/другие приложения',async()=>{
 const w=worker();w.setCached('offline');let response;
 const event=url=>({request:{url,method:'GET'},respondWith:p=>response=p});
 w.handlers.fetch(event('https://reader.example/books/app.js'));assert.equal(await response,'offline');assert.equal(w.networkCalls,0);
 response=undefined;w.handlers.fetch(event('https://azbooka.ru/books/example'));assert.equal(response,undefined);
 w.handlers.fetch(event('https://reader.example/kotoba/app.js'));assert.equal(response,undefined);
 w.setCached(null);w.handlers.fetch(event('https://reader.example/books/index.html'));assert.equal(await response,'network');assert.equal(w.networkCalls,1);
});
