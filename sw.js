/* 321管家 service worker：頁面先走網路（隨時拿到新版），失敗才用快取；圖檔快取優先 */
var C='steward321-v3';
var CORE=['./','index.html','hero.jpg','manifest.json','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(CORE);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==C;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){
 var u=new URL(e.request.url);
 if(e.request.method!=='GET'||u.origin!==location.origin)return;
 if(e.request.mode==='navigate'||/\.html$/.test(u.pathname)){
  e.respondWith(fetch(e.request).then(function(r){var cp=r.clone();caches.open(C).then(function(c){c.put('index.html',cp);});return r;}).catch(function(){return caches.match('index.html');}));
  return;
 }
 e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(res){var cp=res.clone();caches.open(C).then(function(c){c.put(e.request,cp);});return res;});}));
});
