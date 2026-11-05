const CACHE='pereplet-v2',COVER_CACHE='pereplet-covers-v1',COVER_LIMIT=80;
const FILES=['./','./index.html','./style.css','./theme.js','./app.js','./core.js','./data.js','./manifest.webmanifest','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/fallback.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('pereplet-')&&k!==CACHE&&k!==COVER_CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
function isCover(url){return (url.hostname==='cdn.azbooka.ru'&&url.pathname.startsWith('/cv/'))||(['cdn.eksmo.ru','cdn.ast.ru'].includes(url.hostname)&&url.pathname.includes('/COVER/'));}
async function coverResponse(request){
 const cache=await caches.open(COVER_CACHE),cached=await cache.match(request);if(cached)return cached;
 try{
  const response=await fetch(request);
  if(response.ok||response.type==='opaque'){
   try{await cache.put(request,response.clone());const keys=await cache.keys();await Promise.all(keys.slice(0,Math.max(0,keys.length-COVER_LIMIT)).map(k=>cache.delete(k)));}catch{}
  }
  return response;
 }catch{return (await caches.match(new URL('./assets/fallback.svg',self.registration.scope).href))||Response.error();}
}
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);
 if(url.protocol==='https:'&&isCover(url)){e.respondWith(coverResponse(e.request));return;}
 if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)));
});
