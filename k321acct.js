/* =====================================================================
 * 321 共用帳號（K321ACCT）v1 · ES5
 * 一組「帳號碼」＝所有 321 App 共用的鑰匙：
 *   ‧ 每個 App 有自己的雲端位置（slot），由帳號碼＋App 名稱推算出來，不必另外記
 *   ‧ 內容在手機上先用 AES-GCM 加密才上傳，只有帳號碼解得開
 *   ‧ "profile" 位置放各 App 共用的設定（例如空中團契的開通狀態）
 * 儲存服務：ical-proxy Worker 的 feed（PUT/GET/DELETE，與每日得勝同步網址同一套）
 * 用法：
 *   K321ACCT.get()                     目前登入的帳號（沒有就是 null）
 *   K321ACCT.open({lang,onChange})     打開帳號視窗（建立／登入／登出）
 *   K321ACCT.put(app,obj,cb)           把 obj 加密存到這個 App 的位置
 *   K321ACCT.fetch(app,cb)             取回 cb(err,obj,ts)
 *   K321ACCT.syncProfile(cb)           同步共用設定（PROFILE_KEYS）
 * ===================================================================== */
(function(){
 if(window.K321ACCT)return;
 var BASE='https://ical-proxy.spch321.workers.dev/feed/',LS='k321_acct';
 var PROFILE_KEYS=['k321_auth'];               /* 空中團契授權碼開通狀態：開通一次，所有 App 的內嵌團契都通用 */
 var CH='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
 function lsGet(){try{var a=JSON.parse(localStorage.getItem(LS)||'null');return a&&a.id&&a.key&&a.sec?a:null;}catch(e){return null;}}
 function lsSet(a){try{if(a)localStorage.setItem(LS,JSON.stringify(a));else localStorage.removeItem(LS);}catch(e){}}
 function ok(){return !!(window.crypto&&crypto.subtle&&window.Promise);}
 function rnd(n){var s='',b=new Uint8Array(n),i;crypto.getRandomValues(b);for(i=0;i<n;i++)s+=CH.charAt(b[i]%CH.length);return s;}
 function u8(str){if(window.TextEncoder)return new TextEncoder().encode(str);var s=unescape(encodeURIComponent(str)),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return a;}
 function fromU8(a){if(window.TextDecoder)return new TextDecoder().decode(a);var s='';for(var i=0;i<a.length;i++)s+=String.fromCharCode(a[i]);return decodeURIComponent(escape(s));}
 function b64(a){var s='',i;for(i=0;i<a.length;i+=8192)s+=String.fromCharCode.apply(null,a.subarray(i,i+8192));return btoa(s);}
 function unb64(s){var b=atob(s),a=new Uint8Array(b.length);for(var i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return a;}
 function sha(str){return crypto.subtle.digest('SHA-256',u8(str)).then(function(h){return new Uint8Array(h);});}
 function chars(bytes,n){var s='';for(var i=0;i<n;i++)s+=CH.charAt(bytes[i%bytes.length]%CH.length);return s;}
 function code(a){return '321A-'+a.id+'-'+a.key+'-'+a.sec;}
 function parse(t){var m=/321[AS]-([A-Za-z0-9]{20,40})-([A-Za-z0-9]{30,50})-([A-Za-z0-9]{20,50})/.exec(String(t||''));return m?{id:m[1],key:m[2],sec:m[3],legacy:/321S-/.test(m[0])}:null;}
 /* 推算某個 App 的雲端位置；'legacy' 是 321管家早期雲端備份的位置 */
 function slot(app){
  var a=lsGet();if(!a)return Promise.reject('noacct');
  if(app==='legacy')return sha('321steward|'+a.sec).then(function(h){return crypto.subtle.importKey('raw',h,{name:'AES-GCM'},false,['encrypt','decrypt']).then(function(k){return {id:a.id,key:a.key,aes:k};});});
  return Promise.all([sha('id|'+a.id+'|'+app),sha('key|'+a.key+'|'+app),sha('key2|'+a.key+'|'+app),sha('k321|'+a.sec+'|'+app)]).then(function(r){
   var kb=new Uint8Array(64);kb.set(r[1],0);kb.set(r[2],32);
   return crypto.subtle.importKey('raw',r[3],{name:'AES-GCM'},false,['encrypt','decrypt']).then(function(k){return {id:chars(r[0],28),key:chars(kb,40),aes:k};});
  });
 }
 function xhr(method,url,key,body,cb){
  var x=new XMLHttpRequest();
  try{x.open(method,url);if(key)x.setRequestHeader('X-Feed-Key',key);if(body!=null)x.setRequestHeader('Content-Type','text/calendar; charset=utf-8');}catch(e){cb('net');return;}
  x.timeout=30000;
  x.onload=function(){if(x.status>=200&&x.status<300)cb('',x.responseText);else cb(x.status===404||x.status===410?'gone':'http '+x.status);};
  x.onerror=x.ontimeout=function(){cb('net');};
  try{x.send(body);}catch(e){cb('net');}
 }
 function put(app,obj,cb){
  cb=cb||function(){};if(!ok()){cb('nocrypto');return;}
  slot(app).then(function(s){
   var iv=new Uint8Array(12);crypto.getRandomValues(iv);
   return crypto.subtle.encrypt({name:'AES-GCM',iv:iv},s.aes,u8(JSON.stringify(obj))).then(function(ct){
    var all=new Uint8Array(12+ct.byteLength);all.set(iv,0);all.set(new Uint8Array(ct),12);
    var b=b64(all),body='BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//K321//Account//ZH\r\nX-WR-CALNAME:321\r\nX-K321-APP:'+app+'\r\nX-K321-TS:'+Date.now()+'\r\n',i;
    for(i=0;i<b.length;i+=72)body+='X-K321-B:'+b.slice(i,i+72)+'\r\n';
    xhr('PUT',BASE+s.id,s.key,body+'END:VCALENDAR\r\n',function(err){if(!err)mark(app);cb(err);});
   });
  })['catch'](function(e){cb(typeof e==='string'?e:'crypto');});
 }
 function fetch(app,cb){
  if(!ok()){cb('nocrypto');return;}
  slot(app).then(function(s){
   xhr('GET',BASE+s.id+'.ics?t='+Date.now(),null,null,function(err,txt){
    if(err){cb(err);return;}
    var m=txt.match(/^X-(K321|STEWARD)-B:(.*)$/gm),ts=+((/^X-(?:K321|STEWARD)-TS:(\d+)/m.exec(txt)||[])[1]||0);
    if(!m){cb('fmt');return;}
    var b='';for(var i=0;i<m.length;i++)b+=m[i].replace(/^X-(K321|STEWARD)-B:/,'').replace(/\s/g,'');
    var all;try{all=unb64(b);}catch(e){cb('fmt');return;}
    crypto.subtle.decrypt({name:'AES-GCM',iv:all.subarray(0,12)},s.aes,all.subarray(12)).then(function(pt){
     try{cb('',JSON.parse(fromU8(new Uint8Array(pt))),ts);}catch(e){cb('fmt');}
    },function(){cb('key');});
   });
  })['catch'](function(e){cb(typeof e==='string'?e:'crypto');});
 }
 function del(app,cb){slot(app).then(function(s){xhr('DELETE',BASE+s.id,s.key,null,cb||function(){});})['catch'](function(){});}
 function mark(app){try{var m=JSON.parse(localStorage.getItem('k321_acct_at')||'{}');m[app]=Date.now();localStorage.setItem('k321_acct_at',JSON.stringify(m));}catch(e){}}
 function lastAt(app){try{return (JSON.parse(localStorage.getItem('k321_acct_at')||'{}'))[app]||0;}catch(e){return 0;}}
 /* 共用設定：雲端有、本機沒有 → 帶進來；本機有 → 寫回雲端 */
 function syncProfile(cb){
  cb=cb||function(){};if(!lsGet()){cb('noacct');return;}
  fetch('profile',function(err,obj){
   var p=(!err&&obj&&typeof obj==='object')?obj:{},changed=false,applied=0,i,k,v;
   for(i=0;i<PROFILE_KEYS.length;i++){k=PROFILE_KEYS[i];v=null;try{v=localStorage.getItem(k);}catch(e){}
    if(v==null&&p[k]!=null){try{localStorage.setItem(k,p[k]);applied++;}catch(e){}}
    else if(v!=null&&p[k]!==v){p[k]=v;changed=true;}}
   if(changed||err==='gone'){p._ts=Date.now();put('profile',p,function(){cb('',applied);});}else cb(err&&err!=='gone'?err:'',applied);
  });
 }
 /* ---------- 帳號視窗 ---------- */
 var TX={
  zh:{t:'321 共用帳號',intro:'一組帳號碼，所有 321 App 共用：自動加密備份、換手機一鍵找回、App 之間互通資料（例如管家直接看到每日得勝的時程），空中團契開通一次就全部通用。',create:'建立新帳號',have:'我已經有帳號碼',ph:'貼上 321A- 開頭的帳號碼',login:'登入',on:'這支手機已登入',codeL:'你的帳號碼（就是鑰匙，請存好、不要給別人）',copy:'複製帳號碼',copied:'已複製',out:'這支手機登出',outAsk:'確定要在這支手機登出嗎？雲端資料不會刪除，之後用帳號碼可以再登入。',yes:'確定登出',no:'取消',bad:'帳號碼格式不對，請整段貼上',close:'關閉',nocrypto:'這個瀏覽器不支援加密，請用 Safari 或 Chrome。',save:'請把帳號碼截圖或寄給自己保存；其他 321 App 用同一組登入。'},
  zs:{t:'321 共用账号',intro:'一组账号码，所有 321 App 共用：自动加密备份、换手机一键找回、App 之间互通数据（例如管家直接看到每日得胜的时程），空中团契开通一次就全部通用。',create:'建立新账号',have:'我已经有账号码',ph:'粘贴 321A- 开头的账号码',login:'登录',on:'这部手机已登录',codeL:'你的账号码（就是钥匙，请存好、不要给别人）',copy:'复制账号码',copied:'已复制',out:'这部手机登出',outAsk:'确定要在这部手机登出吗？云端数据不会删除，之后用账号码可以再登录。',yes:'确定登出',no:'取消',bad:'账号码格式不对，请整段粘贴',close:'关闭',nocrypto:'这个浏览器不支持加密，请用 Safari 或 Chrome。',save:'请把账号码截图或发给自己保存；其他 321 App 用同一组登录。'},
  en:{t:'321 Account',intro:'One account code shared by every 321 app: encrypted automatic backup, one-step restore on a new phone, data shared between apps (the Steward sees your Daily Victory schedule), and the Fellowship unlocked once for all apps.',create:'Create an account',have:'I already have a code',ph:'Paste your code starting with 321A-',login:'Sign in',on:'Signed in on this phone',codeL:'Your account code (it is the key — keep it safe, never share it)',copy:'Copy code',copied:'Copied',out:'Sign out on this phone',outAsk:'Sign out on this phone? Cloud data stays; sign in again with your code anytime.',yes:'Sign out',no:'Cancel',bad:'That code looks wrong; paste the whole code',close:'Close',nocrypto:'This browser cannot encrypt; please use Safari or Chrome.',save:'Screenshot or email this code to yourself. Use the same code in other 321 apps.'}
 };
 var CSS='.k3a{position:fixed;inset:0;z-index:2147483000;background:rgba(5,10,25,.55);display:flex;align-items:flex-end;justify-content:center;font-family:-apple-system,"Noto Sans TC","PingFang TC",sans-serif}'+
  '.k3a-c{background:#fff;color:#14213D;width:100%;max-width:560px;max-height:90vh;overflow:auto;border-radius:22px 22px 0 0;padding:20px 18px calc(20px + env(safe-area-inset-bottom,0px));box-sizing:border-box;display:flex;flex-direction:column;gap:12px;font-size:16px;line-height:1.65}'+
  '.k3a h3{margin:0;font-size:21px;display:flex;align-items:center;gap:10px}.k3a h3 b{background:linear-gradient(160deg,#1D3A6E,#11264B);color:#E5B85E;font-style:italic;border-radius:10px;padding:2px 8px;font-size:15px}'+
  '.k3a p{margin:0;color:#4a5670}.k3a textarea{width:100%;box-sizing:border-box;font:14px/1.5 monospace;border:1.5px solid #d6dde8;border-radius:12px;padding:10px;color:#14213D;background:#f6f8fb}'+
  '.k3a-b{display:flex;flex-wrap:wrap;gap:8px}.k3a button{font:inherit;font-weight:700;border:0;border-radius:12px;padding:11px 16px;cursor:pointer;background:#1D3A6E;color:#fff}'+
  '.k3a button.g{background:transparent;color:#1D3A6E;border:1.5px solid #d6dde8}.k3a button.r{background:#C2432D}.k3a .ok{color:#2A8550;font-weight:700}'+
  '@media (prefers-color-scheme:dark){.k3a-c{background:#161F31;color:#E7ECF5}.k3a p{color:#9AA6BD}.k3a textarea{background:#0D1320;color:#E7ECF5;border-color:#29354D}.k3a button.g{color:#90B0EA;border-color:#29354D}}';
 var view=null;
 function open(opts){
  opts=opts||{};var L=TX[opts.lang]?opts.lang:'zh',X=TX[L];
  if(!document.getElementById('k3acss')){var st=document.createElement('style');st.id='k3acss';st.textContent=CSS;document.head.appendChild(st);}
  close();view=document.createElement('div');view.className='k3a';document.body.appendChild(view);
  var mode='home';
  function paint(msg){
   var a=lsGet(),h='<div class="k3a-c" role="dialog" aria-label="'+X.t+'"><h3><b>321</b>'+X.t+'</h3>';
   if(!ok())h+='<p>'+X.nocrypto+'</p>';
   else if(a){h+='<p class="ok">✓ '+X.on+'</p><p>'+X.codeL+'</p><textarea readonly rows="3" id="k3acode">'+code(a)+'</textarea><p>'+X.save+'</p>';
    if(mode==='out')h+='<p>'+X.outAsk+'</p><div class="k3a-b"><button class="r" data-k="outyes">'+X.yes+'</button><button class="g" data-k="home">'+X.no+'</button></div>';
    else h+='<div class="k3a-b"><button data-k="copy">'+X.copy+'</button><button class="g" data-k="out">'+X.out+'</button><button class="g" data-k="close">'+X.close+'</button></div>';}
   else{h+='<p>'+X.intro+'</p>';
    if(mode==='have')h+='<textarea rows="3" id="k3ain" placeholder="'+X.ph+'"></textarea>'+(msg?'<p style="color:#C2432D">'+msg+'</p>':'')+'<div class="k3a-b"><button data-k="login">'+X.login+'</button><button class="g" data-k="home">'+X.no+'</button></div>';
    else h+='<div class="k3a-b"><button data-k="create">'+X.create+'</button><button class="g" data-k="have">'+X.have+'</button><button class="g" data-k="close">'+X.close+'</button></div>';}
   view.innerHTML=h+'</div>';
  }
  view.onclick=function(e){
   var t=e.target;if(t===view){close();return;}
   var k=t.getAttribute&&t.getAttribute('data-k');if(!k)return;
   if(k==='close'){close();return;}
   if(k==='create'){lsSet({id:rnd(28),key:rnd(40),sec:rnd(32),ts:Date.now()});mode='home';paint();if(opts.onChange)opts.onChange('create');return;}
   if(k==='have'||k==='home'||k==='out'){mode=k;paint();return;}
   if(k==='login'){var p=parse((document.getElementById('k3ain')||{}).value);if(!p){paint(X.bad);return;}lsSet({id:p.id,key:p.key,sec:p.sec,ts:Date.now(),legacy:p.legacy?1:0});mode='home';paint();if(opts.onChange)opts.onChange('login');return;}
   if(k==='copy'){var ta=document.getElementById('k3acode'),v=ta.value;try{navigator.clipboard.writeText(v).then(function(){t.textContent=X.copied;},function(){ta.select();});}catch(x){ta.select();}return;}
   if(k==='outyes'){lsSet(null);try{localStorage.removeItem('k321_acct_at');}catch(x){}mode='home';paint();if(opts.onChange)opts.onChange('logout');return;}
  };
  paint();
 }
 function close(){if(view&&view.parentNode)view.parentNode.removeChild(view);view=null;}
 window.K321ACCT={version:1,get:lsGet,ok:ok,code:function(){var a=lsGet();return a?code(a):'';},parse:parse,
  adopt:function(c){if(c&&c.id&&c.key&&c.sec&&!lsGet())lsSet({id:c.id,key:c.key,sec:c.sec,ts:Date.now(),legacy:1});return lsGet();},
  open:open,close:close,put:put,fetch:fetch,del:del,lastAt:lastAt,syncProfile:syncProfile};
})();
