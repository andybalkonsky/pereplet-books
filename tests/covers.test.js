import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';
const code=await readFile(new URL('../sw.js',import.meta.url),'utf8');
function harness(fail=false,oldCount=0){
 const handlers={},images=new Map(Array.from({length:oldCount},(_,i)=>[`old-${i}`,{type:'opaque'}]));let calls=0;
 const response={ok:true,type:'basic',clone(){return this;}};
 const context={URL,Response,self:{location:{origin:'https://reader.example'},registration:{scope:'https://reader.example/books/'},addEventListener:(n,f)=>handlers[n]=f},caches:{open:async()=>({match:async r=>images.get(r.url),put:async(r,v)=>images.set(r.url,v),keys:async()=>[...images.keys()],delete:async k=>images.delete(k)}),match:async()=>({fallback:true})},fetch:async()=>{calls++;if(fail)throw new Error('offline');return response;}};
 vm.runInNewContext(code,context);
 async function request(url){let promise;handlers.fetch({request:{url,method:'GET'},respondWith:p=>promise=p});return promise;}
 return {request,images,get calls(){return calls;}};
}
test('Издательская обложка кэшируется после просмотра и повторно доступна без запроса',async()=>{
 const h=harness(),url='https://cdn.azbooka.ru/cv/w383/example.jpg';await h.request(url);await h.request(url);assert.equal(h.calls,1);assert.equal(h.images.size,1);
});
test('Кэш обложек ограничен 80 изображениями, офлайн выдаётся заглушка',async()=>{
 const h=harness(false,81);await h.request('https://cdn.ast.ru/v2/BOOK/COVER/example.jpg');assert.equal(h.images.size,80);
 const offline=harness(true);assert.equal((await offline.request('https://cdn.eksmo.ru/v2/BOOK/COVER/example.jpg')).fallback,true);
});
test('Сторонние домены и обычные страницы издателя не кэшируются как обложки',async()=>{
 const h=harness();assert.equal(await h.request('https://example.org/image.jpg'),undefined);assert.equal(await h.request('https://azbooka.ru/books/example'),undefined);assert.equal(h.calls,0);
});
