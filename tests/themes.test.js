import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const css=await readFile(new URL('../style.css',import.meta.url),'utf8'),early=await readFile(new URL('../theme.js',import.meta.url),'utf8');
function luminance(hex){const channels=hex.match(/[0-9a-f]{2}/gi).map(c=>parseInt(c,16)/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4);return channels[0]*.2126+channels[1]*.7152+channels[2]*.0722;}
function contrast(a,b){const [hi,lo]=[luminance(a),luminance(b)].sort((a,b)=>b-a);return (hi+.05)/(lo+.05);}
test('Обычный и второстепенный текст читаются на фоне и панелях всех трёх тем',()=>{
 for(const selector of [':root',':root[data-theme="night"]',':root[data-theme="pink"]']){
  const block=css.slice(css.indexOf(selector+'{')).split('}')[0],vars=Object.fromEntries([...block.matchAll(/--([a-z]+):(#\w+)/g)].map(m=>[m[1],m[2]]));
  for(const color of ['text','muted'])for(const bg of ['bg','surface'])assert.ok(contrast(vars[color],vars[bg])>=4.5,`${selector} ${color}/${bg}: ${contrast(vars[color],vars[bg])}`);
  assert.ok(contrast(vars.primary,vars.onprimary)>=4.5,`${selector} primary button`);
 }
});
test('Сохранённая тема применяется до CSS, повреждённое/закрытое хранилище не ломает страницу',()=>{
 for(const theme of ['day','night','pink']){const document={documentElement:{dataset:{}}};vm.runInNewContext(early,{document,localStorage:{getItem:()=>JSON.stringify({theme})}});assert.equal(document.documentElement.dataset.theme,theme);}
 for(const value of ['{','{"theme":"other"}']){const document={documentElement:{dataset:{}}};assert.doesNotThrow(()=>vm.runInNewContext(early,{document,localStorage:{getItem:()=>value}}));assert.equal(document.documentElement.dataset.theme,undefined);}
 assert.doesNotThrow(()=>vm.runInNewContext(early,{localStorage:{getItem:()=>{throw new Error('denied');}}}));
});
