/* 321管家 service worker：網頁與程式網路優先（拿得到新版就用新版），圖片快取優先，只清自己前綴的快取 */
var VER='@@VER@@',PFX='steward321-',CACHE=PFX+VER;
var CORE=['./','index.html','app.js','k321acct.js','hero.jpg','manifest.json','icon-v2-192.png','icon-v2-512.png','apple-touch-icon-v2.png'];
self.addEventListener('install',function(e){
 self.skipWaiting();
 e.waitUntil(caches.open(CACHE).then(function(c){return Promise.all(CORE.map(function(u){return fetch(new Request(u,{cache:'reload'})).then(function(r){if(r.ok)return c.put(u,r);}).catch(function(){});}));}));
});
self.addEventListener('activate',function(e){
 e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k.indexOf(PFX)===0&&k!==CACHE;}).map(function(k){return caches.delete(k);}));})
  .then(function(){return self.clients.claim();})
  .then(function(){return self.clients.matchAll({type:'window'});})
  .then(function(cs){cs.forEach(function(c){try{c.postMessage({t:'sw-updated',v:VER});}catch(x){}if(c.visibilityState==='hidden'&&c.navigate){try{c.navigate(c.url);}catch(x){}}});}));
});
self.addEventListener('message',function(e){if(e.data==='skip')self.skipWaiting();});
self.addEventListener('fetch',function(e){
 var r=e.request,u=new URL(r.url);
 if(r.method!=='GET'||u.origin!==location.origin)return;
 if(!/\/321steward\//.test(u.pathname))return;
 if(r.headers.get('range')||/\.(mp3|m4a|aac|wav|mp4|webm|mov|ogg)$/i.test(u.pathname))return;
 if(/version\.json$/.test(u.pathname)){e.respondWith(fetch(r,{cache:'no-store'}).catch(function(){return new Response('{}',{headers:{'Content-Type':'application/json'}});}));return;}
 var nav=r.mode==='navigate',dyn=nav||/\.(html|js|json|css)$/.test(u.pathname);
 if(dyn){
  e.respondWith(fetch(r,{cache:'no-cache'}).then(function(res){if(res.ok){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(nav?'index.html':r,cp);});}return res;})
   .catch(function(){return caches.match(nav?'index.html':r).then(function(m){return m||caches.match('index.html');});}));
  return;
 }
 e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(res){if(res.ok){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(r,cp);});}return res;});}));
});
