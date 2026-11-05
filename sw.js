const CACHE='pereplet-v1';
const FILES=['./','./index.html','./style.css','./app.js','./core.js','./data.js','./manifest.webmanifest','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png',...['earthsea','prince','alice','looking-glass','pride','jane','hobbit','silo','ringworld','builders','cat-eyes'].map(id=>`./assets/${id}.svg`)];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('pereplet-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
 const url=new URL(e.request.url);
 if(e.request.method!=='GET'||url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)));
});
