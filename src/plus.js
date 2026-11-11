/* ================= 321管家 第一～三階段：備份、版面、目標、禱告、編輯、提醒、引導、九果、235、分享、回顧、財務、隱私 ================= */
ui.edit=null;ui.rtab='rev';ui.aiMode='w';ui.logFor=null;ui.ansFor=null;ui.budEdit=false;ui.shr={prac:1,rev:1,wheel:0,pray:1};ui.layout=false;ui.lockSet=false;

/* ---------- 資料：初始與修補（只用字面值，load() 會在其他變數初始化前呼叫） ---------- */
function seed(){
 var t=ds(),m=t.slice(0,8);
 function h(a,si,ti){return {id:uid(),area:a,si:si,title:T(ti[0],ti[1]),log:{},per:7};}
 function k(a,si,ti,dd,p){return {id:uid(),area:a,si:si,title:T(ti[0],ti[1]),due:addDays(t,dd),pri:p,done:false,ex:true};}
 return {v:3,created:t,onb:0,name:L==='en'?'':'主耀',cals:[],vision:'',goals:[],prayers:[],fruit:{},mrev:{},cur:L==='zs'?'CNY':(L==='en'?'USD':'TWD'),budget:{},aiJ:true,
  home:{order:['verse','top3','sched','habits','due','more','rings','care','evening','fel'],hide:{}},
  rem:[{k:'dawn',t:'05:50'},{k:'bless',t:'12:00'},{k:'eve',t:'21:30'}],
  habits:[h('god',0,['晨讀321','Morning reading 321']),h('god',1,['安靜禱告 15 分鐘','Quiet prayer, 15 min']),h('self',0,['運動 30 分鐘','Exercise, 30 min']),h('self',0,['11 點前就寢','In bed by 11 pm']),h('people',2,['920：祝福一個人','920: bless one person']),h('work',1,['記帳','Record expenses'])],
  tasks:[k('god',2,['預備週六小家分享','Prepare Saturday small-group sharing'],3,2),k('self',2,['讀完《321學神》第一冊第三課','Finish 321 Theology, Book 1, Lesson 3'],5,1),k('people',0,['和家人一起吃晚飯、一起禱告','Dinner and prayer with family'],0,2),k('work',2,['繳水電費','Pay utility bills'],-1,3),k('work',0,['整理本月工作進度','Review this month\'s work progress'],7,1)],
  people:[{id:uid(),name:T('陳弟兄（範例）','Brother Chen (sample)'),ri:2,last:addDays(t,-20),bday:'',pray:T('工作轉換的方向','Direction in a job change'),log:[],ex:true},
   {id:uid(),name:T('林姊妹（範例）','Sister Lin (sample)'),ri:7,last:addDays(t,-9),bday:'',pray:T('認識耶穌的愛','To know the love of Jesus'),log:[],ex:true},
   {id:uid(),name:T('媽媽（範例）','Mom (sample)'),ri:1,last:addDays(t,-2),bday:'',pray:T('身體平安','Good health'),log:[],ex:true}],
  money:[{id:uid(),date:m+'01',cat:'salary',amt:60000,note:'',ex:true},{id:uid(),date:m+'02',cat:'give',amt:6000,note:T('十一奉獻','Tithe'),ex:true},{id:uid(),date:m+'05',cat:'food',amt:8200,note:'',ex:true},{id:uid(),date:m+'06',cat:'trans',amt:1200,note:'',ex:true}],
  top3:{},journal:{},wheels:[],reviews:{}};
}
function norm(o){
 var i,keys=['habits','tasks','people','money','wheels','goals','prayers','cals'];
 if(!o||typeof o!=='object')return seed();
 for(i=0;i<keys.length;i++){if(!(o[keys[i]] instanceof Array))o[keys[i]]=[];}
 var objs=['top3','journal','reviews','fruit','mrev','budget'];
 for(i=0;i<objs.length;i++){if(!o[objs[i]]||typeof o[objs[i]]!=='object')o[objs[i]]={};}
 if(o.name==null)o.name='';if(o.vision==null)o.vision='';if(o.onb==null)o.onb=1;if(!o.cur)o.cur='TWD';if(o.aiJ==null)o.aiJ=true;
 if(!o.home||!(o.home.order instanceof Array))o.home={order:['verse','top3','sched','habits','due','more','rings','care','evening','fel'],hide:{}};
 if(!o.home.hide)o.home.hide={};
 if(!(o.rem instanceof Array))o.rem=[{k:'dawn',t:'05:50'},{k:'bless',t:'12:00'},{k:'eve',t:'21:30'}];
 if(o.feedUrl){o.cals.push({id:uid(),name:'每日得勝',url:o.feedUrl,color:'#0a8f84'});}delete o.feedUrl;delete o.feed;
 var mig=[o.habits,o.tasks],g,x;
 for(g=0;g<2;g++){for(i=0;i<mig[g].length;i++){x=mig[g][i];if(x.si==null){x.si=idxIn(area(x.area).subs,x.sub||'');delete x.sub;}}}
 for(i=0;i<o.habits.length;i++){if(!o.habits[i].per)o.habits[i].per=7;if(!o.habits[i].log)o.habits[i].log={};}
 for(i=0;i<o.people.length;i++){var p=o.people[i];if(p.ri==null){p.ri=idxIn(REL,p.rel||'');delete p.rel;}if(!(p.log instanceof Array))p.log=[];}
 for(i=0;i<o.money.length;i++){var mm=o.money[i];if(!CATS[mm.cat]){for(var c in CATS){if(CATS[c][0]===mm.cat)mm.cat=c;}if(!CATS[mm.cat])mm.cat='other';}}
 o.v=3;return o;
}

/* ---------- 321 共用帳號（k321acct.js）：管家的雲端位置 'steward'；每日得勝公開給管家的時程在 'planner-pub' ---------- */
var ACC=window.K321ACCT||null,acctTimer=null,acctBusy=false,PUB={evs:null,at:0,busy:false};
try{var _pb=JSON.parse(localStorage.getItem('steward321.pub')||'null');if(_pb&&_pb.evs)PUB=_pb;}catch(e){}
(function(){var c=null;try{c=JSON.parse(localStorage.getItem('steward321.cloud')||'null');}catch(e){}
 if(ACC&&c&&c.id&&c.key&&c.sec){ACC.adopt(c);try{localStorage.removeItem('steward321.cloud');}catch(e){}setTimeout(function(){acctPush(null);},4000);}})();
function cloudOk(){return !!(ACC&&ACC.ok());}
function acctOn(){return !!(ACC&&ACC.get());}
function acctPush(cb){
 if(!acctOn()||acctBusy){if(cb)cb(acctOn()?'busy':'noacct');return;}
 acctBusy=true;ACC.put('steward',S,function(err){acctBusy=false;ui.acctErr=err||'';if(cb)cb(err);if(view==='review'&&ui.rtab==='set')render();});
}
function cloudSoon(){if(!acctOn())return;clearTimeout(acctTimer);acctTimer=setTimeout(function(){if(Date.now()-ACC.lastAt('steward')>5*60000)acctPush(null);else cloudSoon();},60000);}
function loadPub(force){
 if(!acctOn()||PUB.busy)return;if(!force&&PUB.chk&&Date.now()-PUB.chk<15*60000)return;
 PUB.busy=true;PUB.chk=Date.now();
 ACC.fetch('planner-pub',function(err,o,ts){PUB.busy=false;
  if(!err&&o&&o.ev){PUB.evs=o.ev;PUB.at=o.at||ts||Date.now();try{localStorage.setItem('steward321.pub',JSON.stringify({evs:PUB.evs,at:PUB.at}));}catch(e){}if(view==='today')render();}
 });
}
function pubFor(day){
 var o=[],i,e;if(!PUB.evs||!acctOn())return o;
 for(i=0;i<PUB.evs.length;i++){e=PUB.evs[i];if(e.d!==day)continue;
  o.push({title:e.t||T('（無標題）','(untitled)'),start:e.s||'',end:e.e||'',color:e.c||'#2d3a8c',cal:e.n||T('每日得勝','Daily Victory'),loc:e.l||'',sort:e.s?pd(day).getTime()+(+e.s.slice(0,2))*36e5+(+e.s.slice(3,5))*6e4:-1});}
 return o;
}
function acctChanged(kind){
 if(kind==='create'){toast(T('正在建立第一次備份…','Creating the first backup…'));acctPush(function(err){toast(err?cloudErr(err):T('已建立帳號並完成備份，請存好帳號碼','Account created and backed up. Keep your code safe'));});ACC.syncProfile();}
 else if(kind==='login'){
  toast(T('正在讀取雲端資料…','Reading cloud data…'));
  ACC.fetch('steward',function(err,o){
   if(err==='gone'){var a=ACC.get();
    if(a&&a.legacy){ACC.fetch('legacy',function(e2,o2){if(!e2){ui.restore=o2;render();}else acctPush(null);});return;}
    acctPush(null);toast(T('已登入，這支手機的資料已備份到帳號','Signed in; this phone\'s data is now backed up'));return;}
   if(err){toast(cloudErr(err));return;}
   ui.restore=o;ui.rtab='set';view='review';render();
  });
  ACC.syncProfile(function(e,n){if(n)toast(T('已帶入共用設定（空中團契開通）','Shared settings applied'));});loadPub(true);loadLife(true);loadRead(true);
 }
 else if(kind==='logout'){PUB={evs:null,at:0,busy:false};LIFE.pub=null;RP.chendu=null;RP.bible=null;try{localStorage.removeItem('steward321.chendu');localStorage.removeItem('steward321.bible');localStorage.removeItem('steward321.pub');localStorage.removeItem('steward321.life');}catch(e){}}
 render();
}
function cloudErr(e){return e==='gone'?T('雲端找不到資料','No cloud data found'):e==='key'?T('帳號碼不正確','The account code is not correct'):e==='nocrypto'?T('這個瀏覽器不支援加密','This browser cannot encrypt'):e==='fmt'?T('雲端資料讀不出來','Cloud data could not be read'):e==='net'?T('網路連不上，稍後再試','No connection, try again later'):T('雲端暫時無法使用（','Cloud unavailable (')+e+T('）',')');}
function applyRestore(o){S=norm(o);S.onb=1;ui.wheel=null;ui.restore=null;try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}acctPush(null);render();toast(T('已還原資料','Data restored'));}

/* 備份檔（分享或下載 JSON） */
function fileBackup(){
 var txt=JSON.stringify(S),name='321steward-'+ds()+'.json',f=null;
 try{f=new File([txt],name,{type:'application/json'});}catch(e){}
 if(f&&navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:name}).then(function(){toast(T('已送出備份檔','Backup file sent'));},function(){});return;}
 try{var u=URL.createObjectURL(new Blob([txt],{type:'application/json'})),a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(u);a.parentNode.removeChild(a);},2000);toast(T('已下載備份檔','Backup file downloaded'));}catch(e){ui.backup=true;render();}
}
function fileRestore(input){
 var f=input.files&&input.files[0];if(!f)return;var r=new FileReader();
 r.onload=function(){try{var o=JSON.parse(r.result);if(!o||!(o.habits instanceof Array))throw 0;ui.restore=o;render();}catch(e){toast(T('這不是321管家的備份檔','This is not a 321 Steward backup file'));}};
 r.readAsText(f);
}

/* ---------- 隱私鎖 ---------- */
var LKEY2='steward321.lock',PIN={buf:'',hidAt:0};
function lockHash(p){var h=0x811c9dc5,s=unescape(encodeURIComponent('321steward|'+p));for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=(h+((h<<1)+(h<<4)+(h<<7)+(h<<8)+(h<<24)))>>>0;}return ('0000000'+h.toString(16)).slice(-8);}
function lockOn(){try{return localStorage.getItem(LKEY2)||'';}catch(e){return '';}}
function showLock(){
 if(!lockOn()||$('lockv'))return;PIN.buf='';
 var w=document.createElement('div');w.id='lockv';w.className='lockv';document.body.appendChild(w);paintLock();
}
function paintLock(msg){
 var w=$('lockv');if(!w)return;var d='',i,keys=['1','2','3','4','5','6','7','8','9','','0','⌫'];
 for(i=0;i<4;i++)d+='<i class="'+(i<PIN.buf.length?'on':'')+'"></i>';
 var k='';for(i=0;i<keys.length;i++)k+=keys[i]?'<button data-act="pin" data-id="'+keys[i]+'" aria-label="'+(keys[i]==='⌫'?T('刪除','Delete'):keys[i])+'">'+keys[i]+'</button>':'<span></span>';
 w.innerHTML='<div class="lockin"><div class="brand"><span class="n">321</span><span class="w">'+T('管家','Steward')+'</span></div><p>'+(msg||T('請輸入密碼','Enter your passcode'))+'</p><div class="pdots">'+d+'</div><div class="pkeys">'+k+'</div></div>';
}
function pinKey(k){
 if(k==='⌫'){PIN.buf=PIN.buf.slice(0,-1);paintLock();return;}
 if(PIN.buf.length>=4)return;PIN.buf+=k;paintLock();
 if(PIN.buf.length===4){if(lockHash(PIN.buf)===lockOn()){var w=$('lockv');if(w)w.parentNode.removeChild(w);PIN.buf='';}else{PIN.buf='';setTimeout(function(){paintLock(T('密碼不對，請再試一次','Wrong passcode, try again'));},150);}}
}
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')PIN.hidAt=Date.now();else if(lockOn()&&PIN.hidAt&&Date.now()-PIN.hidAt>3*60000)showLock();});

/* ---------- 習慣：頻率與連續天數 ---------- */
var PER_OPTS=[[7,['每天','Daily']],[6,['每週 6 次','6× a week']],[5,['每週 5 次','5× a week']],[4,['每週 4 次','4× a week']],[3,['每週 3 次','3× a week']],[2,['每週 2 次','2× a week']],[1,['每週 1 次','Weekly']]];
function weekDone(h,wk){var n=0;for(var i=0;i<7;i++)if(h.log[addDays(wk,i)])n++;return n;}
function streak(h){
 var t=ds(),n=0,d;
 if((h.per||7)===7){d=h.log[t]?t:addDays(t,-1);while(h.log[d]&&n<3650){n++;d=addDays(d,-1);}return n;}
 var wk=weekKey(t);if(weekDone(h,wk)>=h.per)n=1;wk=addDays(wk,-7);
 while(weekDone(h,wk)>=h.per&&n<520){n++;wk=addDays(wk,-7);}return n;
}
function habitRow(h,withDots){
 var t=ds(),a=area(h.area),dots='',per=h.per||7,sk=streak(h),chips='';
 if(per<7)chips+='<span class="chip c" style="'+cvars(h.area)+'">'+T('本週 ','This week ')+weekDone(h,weekKey(t))+'/'+per+'</span>';
 if(sk>=2)chips+='<span class="chip gold">'+(per<7?T('連續 '+sk+' 週',sk+'-week streak'):T('連續 '+sk+' 天',sk+'-day streak'))+'</span>';
 if(withDots){dots='<div class="dots" style="'+cvars(h.area)+'" title="'+T('最近七天','Last 7 days')+'">';for(var j=6;j>=0;j--){dots+='<i class="dot'+(h.log[addDays(t,-j)]?' on':'')+(j===0?' td':'')+'"></i>';}dots+='</div>';}
 var r='<div class="row">'+chk(h.log[t],'hab',h.id,T('今天完成：','Done today: ')+h.title,h.area)+
 '<div class="grow"><button class="ttl tbtn" data-act="edit" data-id="h:'+h.id+'">'+esc(h.title)+'</button><div class="meta">'+
 (withDots?esc(subName(h.area,h.si)):'<span class="chip c" style="'+cvars(a.k)+'">'+tr(a.g)+'・'+esc(subName(h.area,h.si))+'</span>')+chips+'</div></div>'+dots+'</div>';
 if(ui.edit==='h:'+h.id)r+=editForm('h',h);
 return r;
}

/* ---------- 事項：編輯、重複、子步驟、目標、排入日曆 ---------- */
var REP_OPTS=[['',['不重複','Once']],['d',['每天','Daily']],['w',['每週','Weekly']],['m',['每月','Monthly']]];
function repName(r){for(var i=0;i<REP_OPTS.length;i++)if(REP_OPTS[i][0]===r)return tr(REP_OPTS[i][1]);return '';}
function nextDue(d,r){if(r==='d')return addDays(d,1);if(r==='w')return addDays(d,7);var p=pd(d),m=p.getMonth()+1,y=p.getFullYear(),dd=p.getDate();if(m>11){m=0;y++;}var last=new Date(y,m+1,0).getDate();return ds(new Date(y,m,Math.min(dd,last)));}
function toggleTask(t){
 t.done=!t.done;t.doneAt=t.done?ds():'';
 if(t.done&&t.rep){var base=t.due&&t.due>ds()?t.due:(t.due||ds()),nd=nextDue(base,t.rep),c={id:uid(),area:t.area,si:t.si,title:t.title,due:nd,pri:t.pri,rep:t.rep,gid:t.gid||'',done:false};
  if(t.steps){c.steps=[];for(var i=0;i<t.steps.length;i++)c.steps.push({t:t.steps[i].t,d:0});}
  t.rep='';S.tasks.push(c);toast(T('完成了！下一次：','Done! Next: ')+md(nd));}
 else if(t.done)toast(T('完成了，榮耀歸給主','Done. Glory to God'));
}
function goalName(id){for(var i=0;i<S.goals.length;i++)if(S.goals[i].id===id)return S.goals[i].title;return '';}
function gcalLink(title,day,st,en,details,recur){
 var tz='Asia/Taipei';try{tz=Intl.DateTimeFormat().resolvedOptions().timeZone||tz;}catch(e){}
 var d=day.replace(/-/g,''),u='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(title)+'&dates='+d+'T'+st.replace(':','')+'00/'+d+'T'+en.replace(':','')+'00&ctz='+encodeURIComponent(tz);
 if(details)u+='&details='+encodeURIComponent(details);if(recur)u+='&recur='+encodeURIComponent(recur);return u;
}
function taskRow(t,showArea){
 var a=area(t.area),h,i,sd=0,stp=t.steps||[];
 for(i=0;i<stp.length;i++)if(stp[i].d)sd++;
 h='<div class="row">'+chk(t.done,'task',t.id,T('完成：','Done: ')+t.title,t.area)+
 '<div class="grow"><button class="ttl tbtn'+(t.done?' done':'')+'" data-act="edit" data-id="t:'+t.id+'">'+esc(t.title)+'</button><div class="meta">'+
 (showArea?'<span class="chip c" style="'+cvars(a.k)+'">'+tr(a.g)+'・'+esc(subName(t.area,t.si))+'</span>':'')+
 dueChip(t)+priChip(t.pri)+(t.rep&&!t.done?'<span class="chip">↻ '+repName(t.rep)+'</span>':'')+(stp.length?'<span class="chip">'+sd+'/'+stp.length+'</span>':'')+
 (t.gid&&goalName(t.gid)?'<span class="chip gold">◎ '+esc(goalName(t.gid))+'</span>':'')+exChip(t)+'</div></div>'+
 (!t.done?'<button class="x" data-act="schedTask" data-id="'+t.id+'" aria-label="'+T('排入時程','Schedule it')+'">'+ic('clock',18)+'</button>':'')+
 '<button class="x del" data-act="delTask" data-id="'+t.id+'" aria-label="'+T('刪除','Delete')+'">×</button></div>';
 if(stp.length&&!t.done){h+='<div class="steps2">';for(i=0;i<stp.length;i++)h+='<button class="step'+(stp[i].d?' on':'')+'" data-act="step" data-id="'+t.id+':'+i+'"><i></i>'+esc(stp[i].t)+'</button>';h+='</div>';}
 if(ui.schedTask===t.id){var day=t.due&&t.due>=ds()?t.due:ds();
  h+='<div class="inl"><span>'+md(day)+'</span><input id="st_s" type="time" value="09:00" aria-label="'+T('開始','Start')+'"><span>–</span><input id="st_e" type="time" value="10:00" aria-label="'+T('結束','End')+'">'+
  '<button class="btn sm" data-act="schedG" data-id="'+t.id+'">'+T('加到 Google 日曆','Add to Google Calendar')+'</button>'+
  (plannerHere()?'<button class="btn ghost sm" data-act="schedSave" data-id="'+t.id+'">'+T('排入每日得勝','Add to Daily Victory')+'</button>':'')+
  '<button class="btn ghost sm" data-act="schedCancel">'+T('取消','Cancel')+'</button></div>';}
 if(ui.edit==='t:'+t.id)h+=editForm('t',t);
 return h;
}
function optsVal(list,sel){var h='';for(var i=0;i<list.length;i++)h+='<option value="'+esc(list[i][0])+'"'+(String(list[i][0])===String(sel)?' selected':'')+'>'+esc(tr(list[i][1]))+'</option>';return h;}
function goalOpts(k,sel){var h='<option value="">'+T('不連到目標','No goal')+'</option>';for(var i=0;i<S.goals.length;i++){var g=S.goals[i];if(g.area===k&&(!g.done||g.id===sel))h+='<option value="'+g.id+'"'+(g.id===sel?' selected':'')+'>'+esc(g.title)+'</option>';}return h;}
function editForm(kind,o){
 var h='<div class="form edit">',sv='<div class="btns full"><button class="btn sm" data-act="editSave">'+T('儲存','Save')+'</button><button class="btn ghost sm" data-act="editCancel">'+T('取消','Cancel')+'</button></div>';
 if(kind==='t'){var st='';if(o.steps)for(var i=0;i<o.steps.length;i++)st+=(i?'\n':'')+o.steps[i].t;
  h+='<input id="ed_t" class="full" value="'+esc(o.title)+'" aria-label="'+T('名稱','Title')+'"><select id="ed_s" aria-label="'+T('範疇','Area')+'">'+opts(area(o.area).subs,o.si)+'</select><select id="ed_p" aria-label="'+T('優先','Priority')+'">'+optsVal([[1,['一般','Normal']],[2,['重要','Important']],[3,['緊急','Urgent']]],o.pri||1)+'</select>'+
  '<label class="f" for="ed_d">'+T('期限','Due')+'<input id="ed_d" type="date" value="'+esc(o.due||'')+'"></label><label class="f" for="ed_r">'+T('重複','Repeat')+'<select id="ed_r">'+optsVal(REP_OPTS,o.rep||'')+'</select></label>'+
  '<label class="f full" for="ed_g">'+T('連到目標','Goal')+'<select id="ed_g">'+goalOpts(o.area,o.gid||'')+'</select></label>'+
  '<label class="f full" for="ed_st">'+T('子步驟（一行一個）','Steps (one per line)')+'<textarea id="ed_st" rows="3">'+esc(st)+'</textarea></label>';}
 else if(kind==='h'){h+='<input id="ed_t" class="full" value="'+esc(o.title)+'" aria-label="'+T('名稱','Title')+'"><select id="ed_s" aria-label="'+T('範疇','Area')+'">'+opts(area(o.area).subs,o.si)+'</select><select id="ed_per" aria-label="'+T('頻率','Frequency')+'">'+optsVal(PER_OPTS,o.per||7)+'</select>'+
  '<button class="btn danger sm full" data-act="delHab" data-id="'+o.id+'">'+T('刪除這個操練','Delete this practice')+'</button>';}
 else if(kind==='p'){h+='<input id="ed_t" value="'+esc(o.name)+'" aria-label="'+T('名字','Name')+'"><select id="ed_r" aria-label="'+T('關係','Relationship')+'">'+opts(REL,o.ri)+'</select><input id="ed_pr" class="full" value="'+esc(o.pray||'')+'" placeholder="'+T('代禱事項','Prayer request')+'"><input id="ed_nx" class="full" value="'+esc(o.next||'')+'" placeholder="'+T('下一步，例如：週五約喝咖啡','Next step, e.g. coffee on Friday')+'"><label class="f full" for="ed_b">'+T('生日','Birthday')+'<input id="ed_b" type="date" value="'+esc(o.bday||'')+'"></label>';}
 else if(kind==='g'){h+='<input id="ed_t" class="full" value="'+esc(o.title)+'" aria-label="'+T('目標','Goal')+'"><label class="f full" for="ed_w">'+T('為什麼（這個目標怎樣讓耶穌得榮耀）','Why (how it glorifies Jesus)')+'<textarea id="ed_w" rows="2">'+esc(o.why||'')+'</textarea></label><label class="f full" for="ed_d">'+T('完成期限','Target date')+'<input id="ed_d" type="date" value="'+esc(o.due||'')+'"></label>';}
 return h+sv+'</div>';
}
function editSave(){
 var p=(ui.edit||'').split(':'),k=p[0],id=p[1],o=null,i,list=k==='t'?S.tasks:k==='h'?S.habits:k==='p'?S.people:S.goals;
 i=find(list,id);if(i<0){ui.edit=null;return;}o=list[i];
 var ti=val('ed_t');if(!ti){$('ed_t').focus();return;}
 if(k==='t'){o.title=ti;o.si=+val('ed_s')||0;o.pri=+val('ed_p')||1;o.due=val('ed_d');o.rep=val('ed_r');o.gid=val('ed_g');
  var ls=val('ed_st').split(/\n+/),old=o.steps||[],ns=[];for(i=0;i<ls.length;i++){var s=ls[i].replace(/^\s+|\s+$/g,'');if(!s)continue;var d=0;for(var j=0;j<old.length;j++)if(old[j].t===s)d=old[j].d;ns.push({t:s,d:d});}
  if(ns.length)o.steps=ns;else delete o.steps;delete o.ex;}
 else if(k==='h'){o.title=ti;o.si=+val('ed_s')||0;o.per=+val('ed_per')||7;}
 else if(k==='p'){o.name=ti;o.ri=+val('ed_r')||0;o.pray=val('ed_pr');o.next=val('ed_nx');o.bday=val('ed_b');delete o.ex;}
 else{o.title=ti;o.why=val('ed_w');o.due=val('ed_d');}
 ui.edit=null;toast(T('已儲存','Saved'));
}

/* ---------- 異象與目標 ---------- */
function goalProg(g){var n=0,d=0;for(var i=0;i<S.tasks.length;i++){var t=S.tasks[i];if(t.gid===g.id){n++;if(t.done)d++;}}return {n:n,d:d,p:g.done?1:(n?d/n:0)};}
function goalRow(g){
 var pr=goalProg(g),a=area(g.area),h='<div class="row goal">'+chk(g.done,'goalDone',g.id,T('完成目標：','Goal done: ')+g.title,g.area)+
 '<div class="grow"><button class="ttl tbtn'+(g.done?' done':'')+'" data-act="edit" data-id="g:'+g.id+'">'+esc(g.title)+'</button>'+
 '<div class="gbar" style="'+cvars(g.area)+'"><i><em style="width:'+Math.round(pr.p*100)+'%"></em></i><span>'+(pr.n?pr.d+'/'+pr.n:T('還沒有連結事項','No linked to-dos'))+'</span></div>'+
 (g.why?'<div class="meta">'+esc(g.why)+'</div>':'')+(g.due?'<div class="meta">'+T('期限 ','Target ')+esc(g.due)+'</div>':'')+'</div>'+
 '<button class="x del" data-act="delGoal" data-id="'+g.id+'" aria-label="'+T('刪除','Delete')+'">×</button></div>';
 if(ui.edit==='g:'+g.id)h+=editForm('g',g);
 return h;
}
function goalsCard(k){
 var a=area(k),h='<section class="card" style="'+cvars(k)+'">'+st('star',T('年度目標','Goals this year'),T('把每天的操練連到神國的目的','Link daily practice to God\'s purpose'))+'<div class="list">',n=0,i;
 for(i=0;i<S.goals.length;i++){if(S.goals[i].area===k){h+=goalRow(S.goals[i]);n++;}}
 if(!n)h+='<p class="empty">'+T('寫下今年在「'+tr(a.n)+'」上，你相信神要你成就的一到三件事。','Write one to three things you believe God wants you to reach this year in “'+tr(a.n)+'”.')+'</p>';
 h+='</div><div class="form"><input id="ng_t_'+k+'" class="full" placeholder="'+T('新的目標','New goal')+'" aria-label="'+T('目標','Goal')+'"><label class="f" for="ng_d_'+k+'">'+T('期限','Target date')+'<input id="ng_d_'+k+'" type="date" value="'+ds().slice(0,4)+'-12-31"></label><button class="btn" style="align-self:end" data-act="addGoal" data-id="'+k+'">'+T('加入目標','Add goal')+'</button></div></section>';
 return h;
}
function visionPanel(){
 var h='<section class="versecard"><span class="vlabel">'+ic('star',18)+T('一個目的：建立屬神的體系','The Goal: establish God\'s system')+'</span><blockquote class="verse sm">'+esc(vt('Matthew.6.33'))+'</blockquote><p class="ref">'+T('馬太福音 6:33','Matthew 6:33')+'</p></section>';
 h+='<section class="card">'+st('pen',T('我的異象','My vision'),T('神呼召我一生要成為怎樣的人、成就什麼？','Who has God called me to become, and what to accomplish?'))+
 '<textarea id="vis" data-bind="vision" rows="4" placeholder="'+T('例如：讓耶穌在我的家庭、職場和小家作王，陪伴更多人成為得勝者。','e.g. To let Jesus reign in my home, work and small group, walking with many to become overcomers.')+'">'+esc(S.vision||'')+'</textarea>'+
 '<p class="empty">'+T('層次：異象 → 年度目標 → 本週操練 → 今日三件要事','Vision → yearly goals → weekly practice → today\'s three priorities')+'</p></section>';
 for(var i=0;i<AREAS.length;i++)h+=goalsCard(AREAS[i].k);
 return h;
}

/* ---------- 禱告與應允 ---------- */
function prayerCard(){
 var t=ds(),h='<section class="card" style="'+cvars('god')+'">'+st('heart',T('禱告與應允','Prayers and answers'),T('記下禱告，也記下神的信實','Record prayers, and God\'s faithfulness'))+'<div class="list">',pend=[],ans=[],i;
 for(i=0;i<S.prayers.length;i++)(S.prayers[i].ans?ans:pend).push(S.prayers[i]);
 if(!pend.length)h+='<p class="empty">'+T('還沒有代禱事項。','No prayer requests yet.')+'</p>';
 for(i=0;i<pend.length;i++){var p=pend[i];
  h+='<div class="row"><div class="grow"><div class="ttl">'+esc(p.t)+'</div><div class="meta">'+(p.who?'<span>'+esc(p.who)+'</span>':'')+'<span class="chip">'+T('禱告 '+(diff(p.d,t)+1)+' 天','Day '+(diff(p.d,t)+1))+'</span></div></div>'+
  '<button class="btn ghost sm" data-act="ansOpen" data-id="'+p.id+'">'+T('已應允','Answered')+'</button><button class="x del" data-act="delPrayer" data-id="'+p.id+'" aria-label="'+T('刪除','Delete')+'">×</button></div>';
  if(ui.ansFor===p.id)h+='<div class="form"><textarea id="ans_t" class="full" rows="3" placeholder="'+T('神怎樣應允？寫下這段見證','How did God answer? Write the testimony')+'"></textarea><div class="btns full"><button class="btn sm" data-act="ansSave" data-id="'+p.id+'">'+T('記下見證','Save testimony')+'</button><button class="btn ghost sm" data-act="ansCancel">'+T('取消','Cancel')+'</button></div></div>';}
 h+='</div><div class="form"><input id="pr_t" class="full" placeholder="'+T('代禱事項','Prayer request')+'" aria-label="'+T('代禱事項','Prayer request')+'"><input id="pr_w" placeholder="'+T('為誰（可空白）','For whom (optional)')+'" aria-label="'+T('為誰','For whom')+'"><button class="btn" data-act="addPrayer">'+T('加入','Add')+'</button></div>';
 if(ans.length){ans.sort(function(a,b){return a.ad<b.ad?1:-1;});
  h+='<details class="fd"><summary>'+ic('star',17)+T('應允的見證 ','Answered prayers ')+'<b>'+ans.length+'</b></summary><div class="list">';
  for(i=0;i<Math.min(ans.length,20);i++){var q=ans[i];h+='<div class="row"><div class="grow"><div class="ttl">'+esc(q.t)+'</div><div class="meta"><span>'+esc(q.ad)+'</span>'+(q.who?'<span>'+esc(q.who)+'</span>':'')+'</div>'+(q.ans&&q.ans!=='1'?'<div class="testi">'+esc(q.ans)+'</div>':'')+'</div><button class="x" data-act="ansShare" data-id="'+q.id+'" aria-label="'+T('分享見證','Share testimony')+'">'+ic('share',17)+'</button></div>';}
  h+='</div></details>';}
 return h+'</section>';
}

/* ---------- 235 關係圈與聯絡紀錄 ---------- */
function ringOf(ri){return ri<=1?0:ri===2?1:ri===3?2:ri===4?3:4;}
function circleSVG(){
 var W=360,C=180,R=[38,74,108,140,170],names=[['家','Family'],['2','2'],['3','3'],['5','5'],['友','Friends']],groups=[[],[],[],[],[]],i,j,s='',t=ds();
 for(i=0;i<S.people.length;i++)groups[ringOf(S.people[i].ri)].push(S.people[i]);
 for(i=4;i>=0;i--)s+='<circle cx="'+C+'" cy="'+C+'" r="'+R[i]+'" fill="'+(i%2?'var(--surface)':'var(--sunk)')+'" stroke="var(--line)"/>';
 for(i=0;i<5;i++)s+='<text x="'+C+'" y="'+(C-R[i]+13)+'" text-anchor="middle" font-size="11" fill="var(--muted)">'+tr(names[i])+'</text>';
 s+='<circle cx="'+C+'" cy="'+C+'" r="17" fill="var(--accent)"/><text x="'+C+'" y="'+(C+5)+'" text-anchor="middle" font-size="13" font-weight="700" fill="var(--accent-ink)">'+T('我','Me')+'</text>';
 for(i=0;i<5;i++){var g=groups[i],rr=i===0?R[0]-12:(R[i]+R[i-1])/2;
  for(j=0;j<g.length;j++){var p=g[j],an=(j/g.length)*Math.PI*2-Math.PI/2+i*.5,x=C+rr*Math.cos(an),y=C+rr*Math.sin(an),nd=p.last?diff(p.last,t):99;
   var col=nd<7?'var(--self)':nd<14?'var(--gold)':'var(--people)';
   s+='<g><circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="7" fill="'+col+'"/><text x="'+x.toFixed(1)+'" y="'+(y+18).toFixed(1)+'" text-anchor="middle" font-size="10" fill="var(--ink)">'+esc(String(p.name).replace(/（.*?）|\(.*?\)/g,'').slice(0,L==='en'?8:3))+'</text></g>';}}
 return '<svg class="circ" viewBox="0 0 '+W+' '+W+'" role="img" aria-label="'+T('235 關係圈','235 relationship circles')+'">'+s+'</svg>'+
 '<div class="legend"><span><i style="background:var(--self)"></i>'+T('一週內聯絡','Within a week')+'</span><span><i style="background:var(--gold)"></i>'+T('一到兩週','1–2 weeks')+'</span><span><i style="background:var(--people)"></i>'+T('兩週以上','Over 2 weeks')+'</span></div>';
}
function peopleExtra(){
 var ps=peopleSorted(),t=ds(),h='<section class="card" style="'+cvars('people')+'">'+st('people',T('235 關係圈','235 circles'),T('2 屬靈同伴・3 屬靈父母兒女・5 屬靈戰友','2 companions · 3 parents/children · 5 co-workers'))+circleSVG()+'</section>';
 h+='<section class="card" style="'+cvars('people')+'">'+st('heart',T('關懷名單','Care list'),T('最久沒聯絡的排在最前；點名字可編輯','Longest since contact first; tap a name to edit'))+'<div class="list">';
 if(!ps.length)h+='<p class="empty">'+T('加入你的 2：家人、屬靈同伴、慕道友。','Add your “2”: family, companions, seekers.')+'</p>';
 for(var i=0;i<ps.length;i++){var p=ps[i],nd=p.last?diff(p.last,t):null,lg=p.log&&p.log[0];
  h+='<div class="row"><div class="grow"><button class="ttl tbtn" style="font-weight:700" data-act="edit" data-id="p:'+p.id+'">'+esc(p.name)+'</button><div class="meta"><span class="chip c" style="'+cvars('people')+'">'+esc(tr(REL[p.ri]||REL[0]))+'</span>'+
  (nd===null?'<span class="chip">'+T('尚未聯絡','Not contacted yet')+'</span>':nd===0?'<span class="chip">'+T('今天聯絡過','Contacted today')+'</span>':'<span class="chip'+(nd>=14?' warn':'')+'">'+T(nd+' 天前',nd+' days ago')+'</span>')+bdaySoon(p)+exChip(p)+'</div>'+
  (p.pray?'<div class="meta">'+T('代禱：','Pray for: ')+esc(p.pray)+'</div>':'')+(p.next?'<div class="meta">'+T('下一步：','Next: ')+esc(p.next)+'</div>':'')+
  (lg?'<div class="meta">'+esc(lg.d.slice(5))+'・'+esc(lg.n)+'</div>':'')+'</div>'+
  '<button class="btn ghost sm" data-act="contact" data-id="'+p.id+'">'+T('已聯絡','Contacted')+'</button><button class="x del" data-act="delPerson" data-id="'+p.id+'" aria-label="'+T('刪除','Delete')+'">×</button></div>';
  if(ui.logFor===p.id)h+='<div class="form"><input id="cl_n" class="full" placeholder="'+T('這次聊了什麼？（可空白）','What did you talk about? (optional)')+'"><input id="cl_x" class="full" value="'+esc(p.next||'')+'" placeholder="'+T('下一步','Next step')+'"><div class="btns full"><button class="btn sm" data-act="logSave" data-id="'+p.id+'">'+T('記下來','Save')+'</button><button class="btn ghost sm" data-act="logCancel">'+T('略過','Skip')+'</button></div></div>';
  if(ui.edit==='p:'+p.id)h+=editForm('p',p);}
 h+='</div><div class="form"><input id="np_n" placeholder="'+T('名字','Name')+'" aria-label="'+T('名字','Name')+'"><select id="np_r" aria-label="'+T('關係','Relationship')+'">'+opts(REL,1)+'</select>'+
 '<input id="np_p" class="full" placeholder="'+T('代禱事項（可空白）','Prayer request (optional)')+'" aria-label="'+T('代禱事項','Prayer request')+'"><label class="f" for="np_b">'+T('生日（可空白）','Birthday (optional)')+'<input id="np_b" type="date"></label><button class="btn" style="align-self:end" data-act="addPerson">'+T('加入名單','Add person')+'</button></div></section>';
 return h;
}

/* ---------- 財務：幣別、預算、年度奉獻 ---------- */
var CURS=[['TWD','NT$'],['MYR','RM'],['SGD','S$'],['NZD','NZ$'],['CNY','¥'],['HKD','HK$'],['USD','US$']];
function curSym(){for(var i=0;i<CURS.length;i++)if(CURS[i][0]===S.cur)return CURS[i][1];return '';}
function money(n){return curSym()+' '+fmt(n);}
function moneyExtra(){
 var t=ds(),mo=t.slice(0,7),yr=t.slice(0,4),inc=0,out=0,give=0,list=[],byCat={},yInc=0,yGive=0,mg=[0,0,0,0,0,0,0,0,0,0,0,0],i,c;
 for(i=0;i<S.money.length;i++){var m=S.money[i];
  if(m.date.slice(0,4)===yr){if(isIn(m.cat))yInc+=m.amt;else if(m.cat==='give'){yGive+=m.amt;mg[+m.date.slice(5,7)-1]+=m.amt;}}
  if(m.date.slice(0,7)!==mo)continue;list.push(m);if(isIn(m.cat))inc+=m.amt;else{out+=m.amt;byCat[m.cat]=(byCat[m.cat]||0)+m.amt;if(m.cat==='give')give+=m.amt;}}
 list.sort(function(a,b){return a.date<b.date?1:-1;});
 var h='<section class="card" style="'+cvars('work')+'">'+st('coin',T('本月財務','This month'),T((+mo.slice(5))+' 月・忠心管理神所託付的','Faithful with what God entrusts'))+'<div class="figs">'+
 '<div class="fig in"><span>'+T('收入','Income')+'</span><b>'+money(inc)+'</b></div><div class="fig out"><span>'+T('支出','Spending')+'</span><b>'+money(out)+'</b></div><div class="fig"><span>'+T('結餘','Balance')+'</span><b>'+money(inc-out)+'</b></div></div>'+
 '<div class="giving"><span>'+T('奉獻 ','Giving ')+money(give)+'</span><i><em style="width:'+(inc?Math.min(100,Math.round(give/inc*100)):0)+'%"></em></i><b>'+(inc?Math.round(give/inc*100)+'%':'—')+'</b></div>';
 h+='<details class="fd"'+(ui.budEdit?' open':'')+'><summary>'+ic('chart',17)+T('各類支出與預算','Spending and budget')+'</summary><div class="bars">';
 for(i=0;i<CAT_OUT.length;i++){c=CAT_OUT[i];var sp=byCat[c]||0,bg=+S.budget[c]||0;if(!sp&&!bg&&!ui.budEdit)continue;
  var over=bg&&sp>bg;
  h+='<div class="budrow"><div class="bl"><span>'+esc(tr(CATS[c]))+'</span><b'+(over?' class="over"':'')+'>'+fmt(sp)+(bg?' / '+fmt(bg):'')+'</b></div><i><em style="width:'+(bg?Math.min(100,Math.round(sp/bg*100)):(sp?100:0))+'%;'+(over?'background:var(--warn)':'')+'"></em></i>'+
  (ui.budEdit?'<input type="number" inputmode="decimal" min="0" id="bud_'+c+'" data-bind="bud" data-id="'+c+'" value="'+(bg||'')+'" placeholder="'+T('每月預算','Monthly budget')+'">':'')+'</div>';}
 h+='</div><div class="btns"><button class="btn ghost sm" data-act="budEdit">'+(ui.budEdit?T('完成','Done'):T('設定預算','Set budgets'))+'</button></div></details>';
 var mx=1;for(i=0;i<12;i++)if(mg[i]>mx)mx=mg[i];
 h+='<details class="fd"><summary>'+ic('heart',17)+T(yr+' 年奉獻',yr+' giving')+'<small>'+money(yGive)+(yInc?T('・佔收入 ',' · ')+Math.round(yGive/yInc*100)+'%':'')+'</small></summary><div class="ybars">';
 for(i=0;i<12;i++)h+='<div><i style="height:'+Math.round(mg[i]/mx*60)+'px"></i><span>'+(i+1)+'</span></div>';
 h+='</div></details><div class="list">';
 if(!list.length)h+='<p class="empty">'+T('本月還沒有紀錄。','No entries this month.')+'</p>';
 for(i=0;i<list.length;i++){var e=list[i],ii=isIn(e.cat);
  h+='<div class="row"><div class="grow"><div class="ttl">'+esc(tr(CATS[e.cat]))+(e.note?'・'+esc(e.note):'')+'</div><div class="meta">'+md(e.date)+exChip(e)+'</div></div><span class="amt'+(ii?' in':'')+'">'+(ii?'+':'−')+fmt(e.amt)+'</span><button class="x del" data-act="delMoney" data-id="'+e.id+'" aria-label="'+T('刪除','Delete')+'">×</button></div>';}
 h+='</div><div class="form"><select id="nm_c" aria-label="'+T('類別','Category')+'"><optgroup label="'+T('支出','Spending')+'">'+catOpts(CAT_OUT,'food')+'</optgroup><optgroup label="'+T('收入','Income')+'">'+catOpts(CAT_IN)+'</optgroup></select>'+
 '<input id="nm_a" type="number" inputmode="decimal" min="0" placeholder="'+T('金額','Amount')+' ('+esc(S.cur)+')" aria-label="'+T('金額','Amount')+'"><input id="nm_n" placeholder="'+T('備註（可空白）','Note (optional)')+'" aria-label="'+T('備註','Note')+'"><input id="nm_d" type="date" value="'+t+'" aria-label="'+T('日期','Date')+'">'+
 '<button class="btn full" data-act="addMoney">'+T('記一筆','Record')+'</button></div></section>';
 return h;
}

/* ---------- 範疇頁 ---------- */
function vArea(k){
 var a=area(k),t=ds(),h='',i,j,n=0;
 h+='<section class="band" style="'+cvars(k)+'"><div class="bmed" aria-hidden="true">'+ic(AICON[k],20)+'<b>'+tr(a.g)+'</b></div><div><h1>'+tr(a.n)+'</h1><p class="tag">'+tr(ATAG[k])+'</p></div><p class="motto">'+tr(a.motto)+'</p><div class="bv"><blockquote class="verse">'+esc(vt(a.v))+'</blockquote><p class="ref">'+tr(a.r)+'</p><div class="btns">'+spkBtn('va'+k,vt(a.v)+(L==='en'?' ':'。')+refSay(tr(a.r)),tr(a.n)).replace('btn ghost sm','btn onband sm')+'<button class="btn onband sm" data-act="vcardA" data-id="'+k+'">'+ic('image',16)+T('經文美圖','Verse card')+'</button></div></div></section>';
 h+=goalsCard(k);
 h+='<section class="card" style="'+cvars(k)+'">'+st('cross',T('每日操練','Daily practices'),T('點名稱可改頻率；圓點是最近七天','Tap a name to edit; dots show the last 7 days'))+'<div class="list">';
 for(i=0;i<S.habits.length;i++){if(S.habits[i].area===k){h+=habitRow(S.habits[i],true);n++;}}
 if(!n)h+='<p class="empty">'+T('還沒有操練項目，從下面加一項開始。','No practices yet. Add one below.')+'</p>';
 h+='</div><div class="form"><input id="nh_t" class="full" placeholder="'+T('新的操練，例如：背一節經文','New practice, e.g. memorise a verse')+'" aria-label="'+T('操練名稱','Practice')+'"><select id="nh_s" aria-label="'+T('範疇','Area')+'">'+opts(a.subs,0)+'</select><select id="nh_per" aria-label="'+T('頻率','Frequency')+'">'+optsVal(PER_OPTS,7)+'</select><button class="btn full" data-act="addHab" data-id="'+k+'">'+T('加入操練','Add practice')+'</button></div></section>';
 if(k==='god'){h+=readCard();h+=prayerCard();h+='<section class="card" style="'+cvars('god')+'">'+st('book',T('靈修筆記','Devotional notes'),T('資訊 → 啟示 → 信服 → 實踐','Information → revelation → conviction → practice'))+
  jText('dv_ref',T('今日經文','Today\'s passage'),T('例如：約翰福音 15:5','e.g. John 15:5'))+jText('dv_rev',T('神給我的啟示','What God showed me'),T('聖靈讓我看見什麼？','What did the Spirit open my eyes to?'))+jText('dv_act',T('我要實踐','What I will do'),T('今天具體怎麼行出來？','How will I live it out today?'))+jText('dv_pray',T('禱告','Prayer'),T('把領受化成禱告','Turn it into prayer'))+pastJ('dv_rev',T('近日的啟示','Recent insights'))+'</section>';}
 if(k==='self')h+='<section class="card" style="'+cvars('self')+'">'+st('self',T('舊人與新人','Old self and new self'),T('看見自己，也看見恩典','See yourself, and see grace'))+
  jText('old',T('今天顯出的舊人（有己）','Where my old self showed today'),T('哪裡驕傲、離開本位、想抓住權力？','Where was I proud, out of place, grasping control?'))+jText('neu',T('新人無己的回應','How the new self responded'),T('怎樣謙卑、回到本位，讓神作神？','How did I humble myself and let God be God?'))+pastJ('neu',T('近日的得勝','Recent victories'))+'</section>'+lifeCard();
 if(k==='people')h+=peopleExtra();
 if(k==='work')h+=moneyExtra();
 h+='<section class="card" style="'+cvars(k)+'">'+st('list',T('事項清單','To-dos'),T('點名稱可編輯、設定重複與子步驟','Tap a title to edit, repeat or add steps'));
 for(i=0;i<a.subs.length;i++){
  var list=[];for(j=0;j<S.tasks.length;j++){var tk=S.tasks[j];if(tk.area===k&&tk.si===i)list.push(tk);}
  sortTasks(list);
  h+='<h3 class="sub">'+esc(tr(a.subs[i]))+'</h3><div class="list">';
  if(!list.length)h+='<p class="empty">'+T('暫無事項','Nothing here yet')+'</p>';
  var sd=0;for(j=0;j<list.length;j++){if(list[j].done){if(sd>=3)continue;sd++;}h+=taskRow(list[j],false);}
  h+='</div>';
 }
 h+='<div class="form"><input id="nt_t" class="full" placeholder="'+T('新增事項','New to-do')+'" aria-label="'+T('事項名稱','To-do')+'"><select id="nt_s" aria-label="'+T('範疇','Area')+'">'+opts(a.subs,0)+'</select>'+
 '<select id="nt_p" aria-label="'+T('優先','Priority')+'">'+optsVal([[1,['一般','Normal']],[2,['重要','Important']],[3,['緊急','Urgent']]],1)+'</select>'+
 '<label class="f" for="nt_d">'+T('期限','Due')+'<input id="nt_d" type="date" value="'+t+'"></label><label class="f" for="nt_r">'+T('重複','Repeat')+'<select id="nt_r">'+optsVal(REP_OPTS,'')+'</select></label>'+
 '<label class="f full" for="nt_g">'+T('連到目標','Goal')+'<select id="nt_g">'+goalOpts(k,'')+'</select></label>'+
 '<button class="btn full" data-act="addTask" data-id="'+k+'">'+T('加入事項','Add to-do')+'</button></div></section>';
 return h;
}

/* ---------- 今日頁（可自訂順序、隱藏、收進「更多」） ---------- */
var HOME_NAMES={verse:['今日經文','Today\'s verse'],top3:['三件要事','Three priorities'],sched:['今日時程','Schedule'],habits:['今日操練','Practices'],due:['到期事項','Due soon'],more:['── 以下收在「更多」──','── Below goes under “More” ──'],rings:['四重關係','Four relationships'],care:['920 祝福','920 blessing'],evening:['晚間省察','Evening reflection'],fel:['國度321空中團契','Kingdom 321 Fellowship']};
function homePart(k){
 var t=ds(),h='',i,now=new Date(),cn=[T('一','one'),T('二','two'),T('三','three')];
 if(k==='verse'){var doy=Math.floor((now-new Date(now.getFullYear(),0,0))/864e5),v=VERSES[doy%VERSES.length];
  return '<section class="versecard"><span class="vlabel">'+ic('book',18)+T('今日經文','Today\'s verse')+'</span><blockquote class="verse">'+esc(vt(v[0]))+'</blockquote><p class="ref">'+T(v[1],v[2])+'</p><div class="btns">'+spkBtn('vtoday',vt(v[0])+(L==='en'?' ':'。')+refSay(T(v[1],v[2])),T('今日經文','Today\'s verse'))+'<button class="btn ghost sm" data-act="vcard" data-id="'+v[0]+'">'+ic('image',16)+T('經文美圖','Verse card')+'</button><button class="btn ghost sm" data-act="vshare" data-id="'+v[0]+'">'+ic('share',16)+T('分享','Share')+'</button></div></section>';}
 if(k==='top3'){var t3=S.top3[t]||[{t:'',d:0},{t:'',d:0},{t:'',d:0}];
  h='<section class="card">'+st('list',T('今日三件要事','Three priorities today'),S.vision?T('異象：','Vision: ')+esc(S.vision.length>40?S.vision.slice(0,40)+'…':S.vision):T('先求祂的國，再排我的事','Seek His kingdom first'))+'<div class="list">';
  for(i=0;i<3;i++){var lb=T('第'+cn[i]+'件要事','Priority '+(i+1));h+='<div class="row">'+chk(t3[i].d,'t3',i,lb)+'<input id="t3_'+i+'" data-bind="t3" data-id="'+i+'" value="'+esc(t3[i].t)+'" placeholder="'+lb+'" aria-label="'+lb+'"></div>';}
  var sug=[];for(i=0;i<S.tasks.length&&sug.length<4;i++){var tk=S.tasks[i];if(!tk.done&&tk.gid&&(!tk.due||tk.due<=addDays(t,7)))sug.push(tk);}
  if(sug.length){h+='<div class="fu"><span class="meta">'+T('從目標挑：','From goals:')+'</span>';for(i=0;i<sug.length;i++)h+='<button class="chip-btn" data-act="pickTop" data-id="'+sug[i].id+'">'+esc(sug[i].title)+'</button>';h+='</div>';}
  return h+'</div></section>';}
 if(k==='sched')return schedCard();
 if(k==='habits'){h='<section class="card">'+st('cross',T('今日操練','Today\'s practices'),'')+'<div class="list">';
  if(!S.habits.length)h+='<p class="empty">'+T('到「神、己、人、事」任一頁新增操練。','Add practices on the God, Self, Others or Work page.')+'</p>';
  for(i=0;i<AREAS.length;i++){for(var j=0;j<S.habits.length;j++){var hb=S.habits[j];if(hb.area===AREAS[i].k&&((hb.per||7)===7||hb.log[t]||weekDone(hb,weekKey(t))<hb.per))h+=habitRow(hb,false);}}
  return h+'</div></section>';}
 if(k==='due'){var due=[];for(i=0;i<S.tasks.length;i++){var tt=S.tasks[i];if(!tt.done&&tt.due&&tt.due<=addDays(t,1))due.push(tt);}
  sortTasks(due);h='<section class="card">'+st('clock',T('到期事項','Due soon'),T('逾期、今天、明天','Overdue, today, tomorrow'))+'<div class="list">';
  if(!due.length)h+='<p class="empty">'+T('沒有到期的事，感謝主。','Nothing due. Thank the Lord.')+'</p>';
  for(i=0;i<due.length;i++)h+=taskRow(due[i],true);return h+'</div></section>';}
 if(k==='rings'){h='<section class="card">'+st('star',T('四重關係','Four relationships'),T('今日操練完成度・按關係次序','Today\'s practices, in order of relationship'))+'<div class="medals">';
  for(i=0;i<AREAS.length;i++)h+=medal(areaPct(AREAS[i].k,t),AREAS[i]);return h+'</div></section>';}
 if(k==='care'){var ps=peopleSorted();h='<section class="card" style="'+cvars('people')+'">'+st('heart',T('920 今日祝福','920: bless someone today'),T('每個與我有關係的人，都是我的 2','Everyone in my life is my “2”'));
  if(!ps.length)return h+'<p class="empty">'+T('到「人」頁加入關懷名單，管家每天提醒你祝福一個人。','Add people on the Others page and the Steward will remind you to bless one each day.')+'</p></section>';
  var p0=ps[0],nd=p0.last?diff(p0.last,t):null;
  return h+'<div class="row" style="border:0"><div class="grow"><div class="ttl" style="font-size:19px;font-weight:700">'+esc(p0.name)+'</div><div class="meta"><span class="chip c" style="'+cvars('people')+'">'+esc(tr(REL[p0.ri]||REL[0]))+'</span>'+(nd===null?'<span class="chip">'+T('尚未聯絡','Not contacted yet')+'</span>':'<span class="chip'+(nd>=14?' warn':'')+'">'+T(nd+' 天沒聯絡',nd+' days since contact')+'</span>')+bdaySoon(p0)+exChip(p0)+'</div>'+
  (p0.pray?'<div class="meta">'+T('代禱：','Pray for: ')+esc(p0.pray)+'</div>':'')+(p0.next?'<div class="meta">'+T('下一步：','Next: ')+esc(p0.next)+'</div>':'')+'</div><button class="btn sm" data-act="contact" data-id="'+p0.id+'">'+T('已聯絡','Contacted')+'</button></div>'+
  (ui.logFor===p0.id?'<div class="form"><input id="cl_n" class="full" placeholder="'+T('這次聊了什麼？（可空白）','What did you talk about? (optional)')+'"><input id="cl_x" class="full" value="'+esc(p0.next||'')+'" placeholder="'+T('下一步','Next step')+'"><div class="btns full"><button class="btn sm" data-act="logSave" data-id="'+p0.id+'">'+T('記下來','Save')+'</button><button class="btn ghost sm" data-act="logCancel">'+T('略過','Skip')+'</button></div></div>':'')+'</section>';}
 if(k==='evening')return '<section class="card">'+st('moon',T('晚間省察','Evening reflection'),T('凡事謝恩，把榮耀歸給耶穌','Give thanks in everything'))+jText('thanks',T('今天感恩的事','What I thank God for today'),T('今天神在哪裡施恩給我？','Where did God show me grace today?'))+'</section>';
 if(k==='fel')return fellowCard();
 return '';
}
function vToday(){
 var now=new Date(),hr=now.getHours(),h='',i,inMore=false,more='';
 var greet=hr<5?T('夜深了','Late night'):hr<11?T('早安','Good morning'):hr<18?T('午安','Good afternoon'):T('晚安','Good evening');
 h+='<section class="kv"><img src="hero.jpg" alt="'+T('321管家主視覺','321 Steward key visual')+'" width="1080" height="608"><div class="cap"><b>'+greet+(S.name?T('，',', ')+esc(S.name):'')+'</b>'+T('今天也讓耶穌在你裡面作王','Let Jesus reign in you today')+'</div></section>';
 if(hasEx())h+='<div class="banner"><span>'+T('畫面上標「範例」的是示範資料，幫你看見管家怎麼運作。','Items marked “Sample” show how the Steward works.')+'</span><button class="btn ghost sm" data-act="clearEx">'+T('清除範例','Clear samples')+'</button></div>';
 var ord=S.home.order;
 for(i=0;i<ord.length;i++){var k=ord[i];if(k==='more'){inMore=true;continue;}if(S.home.hide[k])continue;var part=homePart(k);if(inMore)more+=part;else h+=part;}
 if(more)h+='<details class="more"'+(SET.moreOpen?' open':'')+' id="homeMore"><summary>'+T('更多','More')+'</summary><div class="morein">'+more+'</div></details>';
 return h;
}
function layoutCard(){
 var h='<div class="layout">',o=S.home.order;
 for(var i=0;i<o.length;i++){var k=o[i];
  h+='<div class="lrow'+(k==='more'?' sep':'')+'"><span>'+tr(HOME_NAMES[k])+'</span>'+(k!=='more'?'<button class="btn ghost sm" data-act="homeHide" data-id="'+k+'">'+(S.home.hide[k]?T('顯示','Show'):T('隱藏','Hide'))+'</button>':'')+
  '<button class="x" data-act="homeUp" data-id="'+i+'" aria-label="'+T('往上','Up')+'"'+(i?'':' disabled')+'>↑</button><button class="x" data-act="homeDown" data-id="'+i+'" aria-label="'+T('往下','Down')+'"'+(i<o.length-1?'':' disabled')+'>↓</button></div>';}
 return h+'<div class="btns"><button class="btn ghost sm" data-act="homeReset">'+T('恢復預設','Reset')+'</button></div></div>';
}

/* ---------- 每日提醒（加到日曆，由手機的日曆負責通知） ---------- */
var REM_NAMES={dawn:['晨讀321','Morning reading 321'],bless:['920：祝福一個人','920: bless one person'],eve:['晚間省察','Evening reflection']};
function remEnd(t){var p=t.split(':'),m=(+p[0])*60+(+p[1])+15;return pad(Math.floor(m/60)%24)+':'+pad(m%60);}
function remCard(){
 var h='<div class="list">',d=addDays(ds(),1);
 for(var i=0;i<S.rem.length;i++){var r=S.rem[i];
  h+='<div class="remrow"><div class="ttl">'+tr(REM_NAMES[r.k])+'</div><div class="remctl"><input type="time" id="rem_'+i+'" data-bind="rem" data-id="'+i+'" value="'+esc(r.t)+'" aria-label="'+tr(REM_NAMES[r.k])+'">'+
  '<a class="btn ghost sm" href="'+esc(gcalLink('321'+T('管家・','Steward · ')+tr(REM_NAMES[r.k]),d,r.t,remEnd(r.t),T('打開 321管家：','Open 321 Steward: ')+'https://spch321-sudo.github.io/321steward/','RRULE:FREQ=DAILY'))+'" target="_blank" rel="noopener">'+T('加到 Google 日曆','Google Calendar')+'</a></div></div>';}
 return h+'</div><div class="btns"><button class="btn sm" data-act="remIcs">'+T('一次加到手機行事曆','Add all to phone calendar')+'</button></div><p class="empty">'+T('提醒會出現在手機的行事曆，到時間就會通知你。','Reminders are added to your phone calendar, which will notify you on time.')+'</p>';
}
function remIcs(){
 var d=addDays(ds(),1).replace(/-/g,''),s='BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//321 Steward//Reminders//ZH\r\n';
 for(var i=0;i<S.rem.length;i++){var r=S.rem[i];
  s+='BEGIN:VEVENT\r\nUID:321steward-'+r.k+'-'+d+'\r\nDTSTAMP:'+d+'T000000Z\r\nDTSTART:'+d+'T'+r.t.replace(':','')+'00\r\nDTEND:'+d+'T'+remEnd(r.t).replace(':','')+'00\r\nRRULE:FREQ=DAILY\r\nSUMMARY:321'+T('管家・','Steward · ')+tr(REM_NAMES[r.k])+'\r\nURL:https://spch321-sudo.github.io/321steward/\r\nBEGIN:VALARM\r\nACTION:DISPLAY\r\nDESCRIPTION:'+tr(REM_NAMES[r.k])+'\r\nTRIGGER:PT0M\r\nEND:VALARM\r\nEND:VEVENT\r\n';}
 s+='END:VCALENDAR\r\n';
 var f=null;try{f=new File([s],'321steward-reminders.ics',{type:'text/calendar'});}catch(e){}
 if(f&&navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f]}).then(function(){},function(){});return;}
 try{var u=URL.createObjectURL(new Blob([s],{type:'text/calendar'}));location.href=u;}catch(e){toast(T('這台裝置不支援，請改用 Google 日曆按鈕','Not supported here; use the Google Calendar buttons'));}
}

/* ---------- 聖靈九果 ---------- */
var FRUITS=[['仁愛','Love'],['喜樂','Joy'],['和平','Peace'],['忍耐','Patience'],['恩慈','Kindness'],['良善','Goodness'],['信實','Faithfulness'],['溫柔','Gentleness'],['節制','Self-control']];
function fruitVals(){var m=ds().slice(0,7);if(ui.fruit)return ui.fruit;if(S.fruit[m])ui.fruit=S.fruit[m].slice();else{var ks=Object.keys(S.fruit).sort(),l=ks[ks.length-1];ui.fruit=l?S.fruit[l].slice():[5,5,5,5,5,5,5,5,5];}return ui.fruit;}
function spark(arr){
 if(arr.length<2)return '';var w=64,hh=20,p='';
 for(var i=0;i<arr.length;i++)p+=(i?'L':'M')+(i*w/(arr.length-1)).toFixed(1)+' '+(hh-(arr[i]-1)/9*hh).toFixed(1);
 return '<svg class="spark" viewBox="-2 -2 '+(w+4)+' '+(hh+4)+'" aria-hidden="true"><path d="'+p+'" fill="none" stroke="var(--self)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>';
}
function fruitCard(){
 var cur=fruitVals(),ks=Object.keys(S.fruit).sort().slice(-6),m=ds().slice(0,7),h,i,j,sum=0;
 for(i=0;i<9;i++)sum+=cur[i];
 h='<section class="card" style="'+cvars('self')+'">'+st('star',T('聖靈九果・每月自省','Fruit of the Spirit · monthly'),T('這個月，聖靈在我身上結出怎樣的果子？平均 ','How is the Spirit\'s fruit growing in me? Average ')+(sum/9).toFixed(1))+'<div class="fruit">';
 for(i=0;i<9;i++){var hist=[];for(j=0;j<ks.length;j++)hist.push(S.fruit[ks[j]][i]);if(!S.fruit[m])hist.push(cur[i]);
  h+='<label class="fr" for="fr_'+i+'"><span>'+tr(FRUITS[i])+'</span>'+spark(hist)+'<b id="frv_'+i+'">'+cur[i]+'</b><input id="fr_'+i+'" type="range" min="1" max="10" value="'+cur[i]+'" data-bind="fruit" data-id="'+i+'"></label>';}
 h+='</div><p class="empty">'+T('「聖靈所結的果子，就是仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制。」加拉太書 5:22-23','“But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control.” Galatians 5:22-23')+'</p>';
 return h+'<div class="btns"><button class="btn" data-act="saveFruit">'+(S.fruit[m]?T('更新本月自省','Update this month'):T('儲存本月自省','Save this month'))+'</button></div></section>';
}

/* ---------- 分享給屬靈同伴 ---------- */
var SHR_ITEMS=[['prac',['操練完成度','Practice completion']],['rev',['我的週檢討','My weekly review']],['wheel',['生命之輪最弱三項','Three weakest areas']],['pray',['代禱事項','Prayer requests']]];
function shareCard(){
 var h='<section class="card" style="'+cvars('people')+'">'+st('share',T('分享給屬靈同伴','Share with a companion'),T('彼此代禱、彼此提醒，一起成為得勝者','Pray for and spur one another on'))+'<div class="seg">';
 for(var i=0;i<SHR_ITEMS.length;i++){var k=SHR_ITEMS[i][0];h+='<button data-act="shrTog" data-id="'+k+'"'+(ui.shr[k]?' class="on"':'')+'>'+tr(SHR_ITEMS[i][1])+'</button>';}
 return h+'</div><div class="btns"><button class="btn" data-act="shrGo">'+ic('share',16)+T('分享這週的摘要','Share this week\'s summary')+'</button></div></section>';
}
function shareSummary(){
 var r=weekRange(),o=[],i;
 o.push(T('【我的 321 週報】','[My 321 weekly update] ')+md(r.from)+'–'+md(r.to));
 if(ui.shr.prac){o.push(T('■ 操練完成度','■ Practices'));for(i=0;i<AREAS.length;i++){var p=weekPct(AREAS[i].k);o.push('  '+tr(AREAS[i].n)+'：'+(p<0?'—':Math.round(p*100)+'%'));}}
 if(ui.shr.rev){var rv=S.reviews[r.wk]||{},F=[['rev',['資訊與啟示','Revelation']],['do',['信服與實踐','Practice']],['fix',['檢討與修正','Correction']],['next',['反覆與繁殖','Next']]];
  for(i=0;i<F.length;i++)if(rv[F[i][0]])o.push('■ '+tr(F[i][1])+'：'+rv[F[i][0]]);}
 if(ui.shr.wheel){var w=S.wheels[S.wheels.length-1];if(w){var subs=allSubs(),ps=[];for(i=0;i<subs.length;i++)ps.push({n:subs[i].n,v:w.v[i]});ps.sort(function(a,b){return a.v-b.v;});o.push(T('■ 需要代禱成長的：','■ Growth areas: ')+ps[0].n+'、'+ps[1].n+'、'+ps[2].n);}}
 if(ui.shr.pray){var pr=[];for(i=0;i<S.prayers.length;i++)if(!S.prayers[i].ans)pr.push(S.prayers[i].t);if(pr.length)o.push(T('■ 請為我禱告：','■ Please pray for: ')+pr.slice(0,5).join('；'));}
 o.push(T('願耶穌在我們裡面作王！','May Jesus reign in us!'));
 return o.join('\n');
}

/* ---------- 小智：週、月、年回顧 ---------- */
function rangeOf(mode){
 var t=ds();
 if(mode==='m'){var f=t.slice(0,8)+'01',p=pd(f);return {key:'M'+t.slice(0,7),from:f,to:ds(new Date(p.getFullYear(),p.getMonth()+1,0)),today:t,label:T((+t.slice(5,7))+' 月',t.slice(0,7))};}
 if(mode==='y')return {key:'Y'+t.slice(0,4),from:t.slice(0,4)+'-01-01',to:t.slice(0,4)+'-12-31',today:t,label:T(t.slice(0,4)+' 年',t.slice(0,4))};
 var wk=weekKey(t);return {key:wk,from:wk,to:addDays(wk,6),today:t,label:T(md(wk)+' 起這週','Week of '+md(wk))};
}
function aiHolder(){var r=rangeOf(ui.aiMode);if(ui.aiMode==='w'){if(!S.reviews[r.key])S.reviews[r.key]={};return S.reviews[r.key];}if(!S.mrev[r.key])S.mrev[r.key]={};return S.mrev[r.key];}
function ctxFor(mode){
 var r=rangeOf(mode),lines=[],i,j,d,a,end=r.today<r.to?r.today:r.to,lim=mode==='w'?40:mode==='m'?25:30;
 lines.push(T('範圍：','Period: ')+r.from+' ~ '+end);
 if(S.vision)lines.push(T('【我的異象】','[My vision] ')+S.vision);
 lines.push(T('【操練完成情況】','[Practices]'));
 for(i=0;i<AREAS.length;i++){a=AREAS[i];
  for(j=0;j<S.habits.length;j++){var h=S.habits[j],n=0,days=0;if(h.area!==a.k)continue;
   for(d=r.from;d<=end;d=addDays(d,1)){days++;if(h.log[d])n++;}
   lines.push('- '+tr(a.n)+'／'+h.title+'：'+n+'/'+((h.per||7)===7?days:Math.ceil(days/7)*h.per)+T('（目標每週 '+(h.per||7)+' 次）',' (target '+(h.per||7)+'/week)'));}}
 var done=[],over=[];
 for(i=0;i<S.tasks.length;i++){var t=S.tasks[i];if(t.ex)continue;
  if(t.done&&t.doneAt>=r.from&&t.doneAt<=end)done.push(tr(area(t.area).g)+'・'+t.title);
  else if(!t.done&&t.due&&t.due<r.today)over.push(tr(area(t.area).g)+'・'+t.title);}
 lines.push(T('【完成的事項】','[Completed] ')+done.length+(done.length?'\n- '+done.slice(0,lim).join('\n- '):''));
 lines.push(T('【逾期未完成】','[Overdue] ')+over.length+(over.length?'\n- '+over.slice(0,15).join('\n- '):''));
 if(S.goals.length){lines.push(T('【年度目標進度】','[Goals]'));for(i=0;i<S.goals.length;i++){var g=S.goals[i],gp=goalProg(g);lines.push('- '+tr(area(g.area).g)+'・'+g.title+'：'+(g.done?T('已完成','done'):gp.d+'/'+gp.n));}}
 var cont=0,long=0;for(i=0;i<S.people.length;i++){var p=S.people[i];if(p.ex)continue;if(p.last&&p.last>=r.from)cont++;if(!p.last||diff(p.last,r.today)>=14)long++;}
 lines.push(T('【920關懷】聯絡了 ','[920] contacted ')+cont+T(' 人；超過兩週沒聯絡 ','; 2+ weeks without contact: ')+long+T(' 人',''));
 var pa=[],pn=0;for(i=0;i<S.prayers.length;i++){var q=S.prayers[i];if(q.d>=r.from&&q.d<=end)pn++;if(q.ans&&q.ad>=r.from&&q.ad<=end)pa.push(q.t);}
 lines.push(T('【禱告】新增 ','[Prayer] new ')+pn+T('，蒙應允 ',', answered ')+pa.length+(pa.length?'：'+pa.slice(0,8).join('；'):''));
 var fk=Object.keys(S.fruit).sort();if(fk.length){var fl=[];for(i=0;i<fk.length;i++){if(fk[i]>=r.from.slice(0,7)&&fk[i]<=end.slice(0,7)||i===fk.length-1){var s=0;for(j=0;j<9;j++)s+=S.fruit[fk[i]][j];fl.push(fk[i]+' '+(s/9).toFixed(1));}}lines.push(T('【聖靈九果平均】','[Fruit average] ')+fl.join('、'));}
 if(S.aiJ){var F={thanks:T('感恩','Thanks'),dv_rev:T('靈修啟示','Insight'),dv_act:T('要實踐','To practise'),old:T('舊人有己','Old self'),neu:T('新人無己','New self')},f,notes=[];
  for(d=end;d>=r.from&&notes.length<lim;d=addDays(d,-1)){var jn=S.journal[d];if(!jn)continue;for(f in F){if(jn[f])notes.push('- '+d.slice(5)+' '+F[f]+'：'+String(jn[f]).slice(0,mode==='w'?160:90));}}
  lines.push(T('【筆記】','[Notes]')+(notes.length?'\n'+notes.join('\n'):T('（沒有）','(none)')));
  var RF={rev:T('啟示','Revelation'),'do':T('實踐','Practice'),fix:T('修正','Correction'),next:T('下一步','Next')},rv,wk;
  lines.push(T('【我自己寫的檢討】','[My own reviews]'));
  for(wk=weekKey(r.from);wk<=end;wk=addDays(wk,7)){rv=S.reviews[wk];if(!rv)continue;for(f in RF){if(rv[f])lines.push('- '+md(wk)+' '+RF[f]+'：'+String(rv[f]).slice(0,mode==='w'?300:120));}}}
 else lines.push(T('（使用者選擇不分享筆記內容）','(The user chose not to share journal notes)'));
 var lc=lifeCtx();if(lc)lines.push(lc);
 var rc=readCtx();if(rc)lines.push(rc);
 var ws=S.wheels,wl=ws[ws.length-1];
 if(wl){var subs=allSubs(),pairs=[];for(i=0;i<subs.length;i++)pairs.push({n:subs[i].n,v:wl.v[i]});pairs.sort(function(x,y){return x.v-y.v;});
  lines.push(T('【生命之輪】最近 ','[Life wheel] latest ')+wl.date+T('，最低三項：','; lowest: ')+pairs[0].n+' '+pairs[0].v+'、'+pairs[1].n+' '+pairs[1].v+'、'+pairs[2].n+' '+pairs[2].v);}
 return lines.join('\n');
}
function weekContext(){return ctxFor('w');}
function aiIntro(mode){var M={w:['週檢討','weekly review'],m:['月回顧','monthly review'],y:['年度回顧','yearly review']}[mode];return T('以下是我在321管家的紀錄，請陪我做'+M[0]+'。\n\n','Here is my record in the 321 Steward. Please walk me through a '+M[1]+'.\n\n');}
function aiStart(){
 var hd=aiHolder(),mode=ui.aiMode,msgs=[{role:'user',content:aiIntro(mode)+ctxFor(mode)}];
 hd.chat=msgs;ui.aiBusy=true;ui.aiErr='';ui.crisis=false;stopSpeak();save();render();
 aiCall(msgs,function(err,out){ui.aiBusy=false;if(err){ui.aiErr=err;}else{hd.chat.push({role:'assistant',content:out,ok:1});foldOld(hd.chat);save();}render();});
}
function aiAsk(q){
 q=q||val('ai_q');var rv=aiHolder();if(!q||!rv.chat)return;
 if(CRISIS_RE.test(q))ui.crisis=true;
 rv.chat.push({role:'user',content:q});ui.aiBusy=true;ui.aiErr='';save();render();
 var msgs=[],i;for(i=0;i<rv.chat.length;i++)msgs.push({role:rv.chat[i].role,content:rv.chat[i].content});
 if(msgs.length>12)msgs=[msgs[0]].concat(msgs.slice(-11));if(msgs[1]&&msgs[1].role==='user')msgs.splice(1,1);
 aiCall(msgs,function(err,out){ui.aiBusy=false;if(err){ui.aiErr=err;rv.chat.pop();}else{rv.chat.push({role:'assistant',content:out,ok:1});foldOld(rv.chat);}save();render();});
}
function aiCard(){
 var r=rangeOf(ui.aiMode),rv=aiHolder(),chat=rv.chat||[],h,i,last=-1,MODES=[['w',['這週','Week']],['m',['這個月','Month']],['y',['今年','Year']]];
 for(i=0;i<chat.length;i++)if(chat[i].role==='assistant')last=i;
 h='<section class="card">'+st('spark',T('小智陪你回顧','Review with Xiaozhi'),T('依八大步驟，看見恩典也看見要修正的','See grace, and what needs correcting'))+'<div class="seg">';
 for(i=0;i<MODES.length;i++)h+='<button data-act="aiMode" data-id="'+MODES[i][0]+'"'+(ui.aiMode===MODES[i][0]?' class="on"':'')+'>'+tr(MODES[i][1])+'</button>';
 h+='</div>';
 if(!chat.length){
  h+='<p class="empty">'+T('小智會讀'+r.label+'的操練、事項、目標、禱告、九果和你寫的檢討，給你肯定、提醒和接下來的操練建議。關懷名單只送出人數，不送名字和聯絡資料。','Xiaozhi reads your practices, to-dos, goals, prayers, fruit and reviews for '+r.label+', then offers encouragement, honest correction and next steps. Only counts from your care list are sent.')+(S.aiJ?'':T('（目前設定為不分享筆記內容）',' (Journal notes are not shared.)'))+'</p>'+
  '<div class="btns"><button class="btn" data-act="aiStart"'+(ui.aiBusy?' disabled':'')+'>'+ic('spark',16)+T('請小智陪我回顧','Start with Xiaozhi')+'</button></div>';
 }else{
  h+='<div class="chat">';
  for(i=0;i<chat.length;i++){var m=chat[i];
   if(i===0){h+='<div class="msg me"><small>'+T('已送出'+r.label+'的摘要','Sent the summary for '+r.label)+'</small></div>';continue;}
   if(m.role!=='assistant'){h+='<div class="msg me">'+esc(m.content)+'</div>';continue;}
   var lg=msgLong(m.content),key='ai'+r.key+'_'+i;
   h+='<div class="msg ai'+(m.fold&&lg?' fold':'')+'" id="msg'+i+'"><div class="who">'+ic('spark',15)+T('小智','Xiaozhi')+'</div><div class="msg-body">'+mdHtml(m.content)+'</div>'+
    (lg?'<button class="msg-more" data-act="aiFold" data-id="'+i+'">'+(m.fold?T('展開全文 ▾','Show all ▾'):T('收合 ▴','Collapse ▴'))+'</button>':'')+
    '<div class="msg-act">'+spkBtn(key,mdStrip(m.content),T('小智回顧','Review'))+
    '<button class="btn ghost sm" data-act="aiShare" data-id="'+i+'">'+ic('share',16)+T('分享','Share')+'</button>'+
    '<button class="btn ghost sm" data-act="aiImg" data-id="'+i+'">'+ic('image',16)+T('做成美圖','Card')+'</button></div></div>';
   if(i===last&&m.ok&&!ui.aiBusy){var fu=FU[L==='en'?'en':'zh'];h+='<div class="fu">';for(var j=0;j<fu.length;j++)h+='<button class="chip-btn" data-act="aiFu" data-id="'+j+'">'+esc(T(fu[j][0],fu[j][0]))+'</button>';h+='</div>';}
  }
  if(ui.aiBusy)h+='<div class="msg ai"><p class="empty">'+(ui.aiCont?T('小智還在接著寫…','Xiaozhi is still writing…'):T('小智正在禱告思想……','Xiaozhi is thinking…'))+'</p></div>';
  h+='</div>';
  if(ui.crisis)h+=crisisCard();
  h+='<div class="inl"><input id="ai_q" class="grow" placeholder="'+T('追問小智','Ask a follow-up')+'" aria-label="'+T('追問','Follow-up')+'"><button class="btn sm" data-act="aiAsk"'+(ui.aiBusy?' disabled':'')+'>'+T('送出','Send')+'</button></div>'+
   '<div class="btns"><button class="btn ghost sm" data-act="aiStart"'+(ui.aiBusy?' disabled':'')+'>'+T('依最新資料重新回顧','Review again with latest data')+'</button></div>';
 }
 if(ui.aiErr)h+='<p class="empty" style="color:var(--warn)">'+T('小智暫時連不上（','Xiaozhi could not be reached (')+esc(ui.aiErr)+T('）。請確認網路後再試；在 claude.ai 預覽畫面中無法連線，放上 GitHub Pages 後即可使用。','). Check your connection and try again. It cannot connect inside the claude.ai preview; it works on GitHub Pages.')+'</p>';
 return h+'</section>';
}

/* ---------- 回顧頁：回顧／目標／設定 ---------- */
function setRow(label,inner){return '<div class="setrow"><span>'+label+'</span>'+inner+'</div>';}
function segOf(list,cur,act){var o='<div class="seg">';for(var i=0;i<list.length;i++)o+='<button data-act="'+act+'" data-id="'+esc(list[i][0])+'"'+(String(cur)===String(list[i][0])?' class="on"':'')+'>'+esc(tr(list[i][1]))+'</button>';return o+'</div>';}
function settingsPanel(){
 var h='',i;
 h+='<section class="card">'+st('gear2',T('顯示','Display'),'')+
 setRow(T('字級','Text size'),segOf([[0,FS_NAMES[0]],[1,FS_NAMES[1]],[2,FS_NAMES[2]],[3,FS_NAMES[3]]],SET.font,'fsSet'))+
 setRow(T('外觀','Appearance'),segOf([['',['跟隨系統','System']],['light',['淺色','Light']],['dark',['深色','Dark']]],SET.theme,'theme'))+
 '<label class="f" for="nm_me">'+T('你的稱呼','Your name')+'<input id="nm_me" data-bind="name" value="'+esc(S.name)+'"></label>'+
 setRow(T('幣別','Currency'),segOf(function(){var o=[];for(var q=0;q<CURS.length;q++)o.push([CURS[q][0],[CURS[q][0],CURS[q][0]]]);return o;}(),S.cur,'cur'))+
 '<details class="fd"'+(ui.layout?' open':'')+'><summary>'+ic('list',17)+T('今日頁版面','Today page layout')+'<small>'+T('排順序、隱藏、收進「更多」','Order, hide, or move under “More”')+'</small></summary>'+layoutCard()+'</details></section>';
 h+='<section class="card">'+st('clock',T('每日提醒','Daily reminders'),T('晨讀、920、晚間省察','Morning reading, 920, evening reflection'))+remCard()+'</section>';
 h+='<section class="card">'+st('share',T('321 共用帳號','321 Account'),T('一組帳號碼，所有 321 App 共用','One code for every 321 app'))+cloudPanel()+'</section>';
 h+='<section class="card">'+st('pen',T('備份檔','Backup file'),T('另存一份在檔案、雲端硬碟或寄給自己','Keep a copy in Files, a drive or email'))+
 '<div class="btns"><button class="btn ghost" data-act="fileBk">'+ic('share',16)+T('匯出備份檔','Export backup file')+'</button><label class="btn ghost" for="fileIn">'+T('從備份檔還原','Restore from file')+'</label><input type="file" id="fileIn" accept=".json,application/json" hidden></div>'+restoreConfirm()+
 '<details class="fd"'+(ui.backup?' open':'')+'><summary>'+T('用文字備份／還原','Text backup / restore')+'</summary><div class="btns"><button class="btn ghost sm" data-act="backup">'+(ui.backup?T('收起','Hide'):T('顯示備份文字','Show backup text'))+'</button></div>'+
 (ui.backup?'<textarea id="bk" readonly style="min-height:110px;font-size:13px">'+esc(JSON.stringify(S))+'</textarea><div class="btns"><button class="btn sm" data-act="copyBk">'+T('複製備份文字','Copy backup text')+'</button></div>':'')+
 '<label class="f" for="imp">'+T('貼上備份文字','Paste backup text')+'<textarea id="imp"></textarea></label><div class="btns"><button class="btn ghost sm" data-act="importData">'+T('還原','Restore')+'</button></div></details></section>';
 h+='<section class="card">'+st('self',T('隱私','Privacy'),'')+
 setRow(T('小智回顧時','When Xiaozhi reviews'),segOf([['1',['可以讀我的筆記','May read my notes']],['0',['不要讀我的筆記','Don\'t read my notes']]],S.aiJ?'1':'0','aiJ'))+
 setRow(T('密碼鎖','Passcode lock'),lockOn()?'<div class="btns"><span class="chip gold">'+T('已開啟','On')+'</span><button class="btn ghost sm" data-act="lockNow">'+T('立即上鎖','Lock now')+'</button><button class="btn ghost sm" data-act="lockOff">'+T('關閉密碼鎖','Turn off')+'</button></div>':
  (ui.lockSet?'<div class="form"><input id="pin1" type="password" inputmode="numeric" maxlength="4" placeholder="'+T('4 位數密碼','4-digit passcode')+'"><input id="pin2" type="password" inputmode="numeric" maxlength="4" placeholder="'+T('再輸入一次','Again')+'"><div class="btns full"><button class="btn sm" data-act="lockSave">'+T('開啟','Turn on')+'</button><button class="btn ghost sm" data-act="lockCancel">'+T('取消','Cancel')+'</button></div><p class="empty full">'+T('忘記密碼時只能清除資料，再用 321 帳號碼還原，請先登入帳號。','If you forget it, you can only clear the data and restore with your 321 Account, so sign in first.')+'</p></div>':'<div class="btns"><button class="btn ghost sm" data-act="lockSet">'+T('設定密碼鎖','Set a passcode')+'</button></div>'))+'</section>';
 h+='<section class="card">'+st('gear2',T('關於','About'),'')+
 setRow(T('版本 ','Version ')+'<b>'+esc(APPVER.indexOf('@@')<0?APPVER:'dev')+'</b>','<div class="btns"><button class="btn ghost sm" data-act="checkUpd">'+T('檢查更新','Check for updates')+'</button><button class="btn ghost sm" data-act="hardUpd">'+T('強制更新','Force update')+'</button><button class="btn ghost sm" data-act="onbAgain">'+T('重看使用引導','Show the welcome guide')+'</button></div>')+
 '<div class="btns">'+(hasEx()?'<button class="btn ghost sm" data-act="clearEx">'+T('清除範例','Clear samples')+'</button>':'')+'</div>'+
 (ui.reset?'<div class="banner"><span>'+T('確定要清空全部資料、回到初始狀態嗎？此動作無法復原。','Erase all data and start over? This cannot be undone.')+'</span><button class="btn danger sm" data-act="resetYes">'+T('確定清空','Erase all')+'</button><button class="btn ghost sm" data-act="resetNo">'+T('取消','Cancel')+'</button></div>':'<div class="btns"><button class="btn ghost sm" data-act="resetAsk" style="color:var(--warn)">'+T('清空全部資料','Erase all data')+'</button></div>')+'</section>';
 return h;
}
function cloudPanel(){
 if(!ACC)return '<p class="empty">'+T('帳號模組沒有載入，請確認網路後重新開啟管家。','The account module did not load; check your connection and reopen.')+'</p>'+restoreConfirm();
 if(!ACC.ok())return '<p class="empty">'+T('這個瀏覽器不支援加密，請改用備份檔。','This browser cannot encrypt; please use a backup file.')+'</p>'+restoreConfirm();
 var h='',fa=false;try{fa=!!localStorage.getItem('k321_auth');}catch(e){}
 if(acctOn()){var at=ACC.lastAt('steward');
  h+='<p class="empty"><b style="color:var(--self)">✓ '+T('已登入','Signed in')+'</b> · '+(at?T('上次同步：','Last sync: ')+new Date(at).toLocaleString():T('尚未同步','Not synced yet'))+(ui.acctErr&&ui.acctErr!=='busy'?' · <span style="color:var(--warn)">'+esc(cloudErr(ui.acctErr))+'</span>':'')+'</p>';
  h+='<div class="list">'+
   '<div class="row"><i class="bar2" style="background:#2d3a8c"></i><div class="grow"><div class="ttl">'+T('321每日得勝','321 Daily Victory')+'</div><div class="meta">'+(PUB.evs?T('時程已互通・更新於 ','Schedule shared · updated ')+new Date(PUB.at).toLocaleString():T('在每日得勝用同一組帳號碼登入，時程就會自動出現在管家','Sign in to Daily Victory with the same code to share its schedule'))+'</div></div></div>'+
   '<div class="row"><i class="bar2" style="background:var(--god)"></i><div class="grow"><div class="ttl">'+T('晨讀321・321互動聖經','Morning Reading · Interactive Bible')+'</div><div class="meta">'+((RP.chendu||RP.bible)?T('讀經進度已互通，顯示在「與神」頁','Reading progress shared on the God page'):T('在晨讀321與互動聖經用同一組帳號碼登入，讀經進度就會出現在「與神」頁','Sign in to both with the same code to show reading progress on the God page'))+'</div></div></div>'+
   '<div class="row"><i class="bar2" style="background:var(--self)"></i><div class="grow"><div class="ttl">'+T('321生命操練','321 Life Practice')+'</div><div class="meta">'+(LIFE.pub?T('操練紀錄已互通・更新於 ','Practice shared · updated ')+new Date(LIFE.pub.at).toLocaleString():T('在生命操練用同一組帳號碼登入，進展就會出現在「與己」頁','Sign in to Life Practice with the same code to show your progress on the Self page'))+'</div></div></div>'+
   '<div class="row"><i class="bar2" style="background:var(--gold)"></i><div class="grow"><div class="ttl">'+T('國度321空中團契','Kingdom 321 Fellowship')+'</div><div class="meta">'+(fa?T('已開通，用同一組帳號的 App 都不必再輸入授權碼','Unlocked for every app using this account'):T('在管家裡開啟團契 App 輸入一次授權碼，其他 App 就通用','Enter the access code once inside the Steward; other apps will share it'))+'</div></div></div></div>';
  h+='<div class="btns"><button class="btn sm" data-act="cloudNow">'+T('立即同步','Sync now')+'</button><button class="btn ghost sm" data-act="acctOpen">'+T('帳號碼與登出','Account code / sign out')+'</button></div>';
 }else h+='<p class="empty">'+T('一組帳號碼，所有 321 App 共用：自動加密備份、換手機找回、App 之間資料互通。','One code for every 321 app: encrypted backup, restore on a new phone, and data shared between apps.')+'</p><div class="btns"><button class="btn" data-act="acctOpen">'+T('建立或登入 321 帳號','Create or sign in to a 321 Account')+'</button></div>';
 h+='<p class="empty">'+T('🔒 資料在手機上先加密才上傳，只有帳號碼解得開。帳號碼就是鑰匙，請另外存好。','🔒 Data is encrypted on the phone before upload; only your code can open it. The code is the key, so keep it safe.')+'</p>';
 return h+restoreConfirm();
}
function restoreConfirm(){
 if(!ui.restore)return '';var o=ui.restore,n=(o.tasks||[]).length,j=Object.keys(o.journal||{}).length;
 return '<div class="banner"><span>'+T('找到備份：'+n+' 個事項、'+j+' 天筆記。還原後會取代這支手機上目前的資料。','Backup found: '+n+' to-dos, '+j+' days of notes. Restoring replaces the data on this phone.')+'</span><button class="btn danger sm" data-act="restoreYes">'+T('確定還原','Restore')+'</button><button class="btn ghost sm" data-act="restoreNo">'+T('取消','Cancel')+'</button></div>';
}
function vReview(){
 var r=weekRange(),wk=r.wk,h='',i,cur,subs,last,TABS2=[['rev',['回顧','Review']],['goal',['異象與目標','Vision & goals']],['set',['設定','Settings']]];
 h+='<div class="seg tabs2">';for(i=0;i<TABS2.length;i++)h+='<button data-act="rtab" data-id="'+TABS2[i][0]+'"'+(ui.rtab===TABS2[i][0]?' class="on"':'')+'>'+tr(TABS2[i][1])+'</button>';h+='</div>';
 if(ui.rtab==='goal')return h+visionPanel();
 if(ui.rtab==='set')return h+settingsPanel();
 cur=wheelVals();subs=allSubs();last=S.wheels[S.wheels.length-1];
 var steps=[['資訊','Information'],['啟示','Revelation'],['信服','Conviction'],['實踐','Practice'],['檢討','Review'],['修正','Correction'],['反覆','Repetition'],['繁殖','Multiplication']],sh='';
 for(i=0;i<steps.length;i++)sh+='<span>'+tr(steps[i])+'</span>';
 h+='<section class="versecard"><span class="vlabel">'+ic('pen',18)+T('改變觀念的八大步驟','Eight steps to a changed mindset')+'</span><div class="steps">'+sh+'</div><blockquote class="verse sm">'+esc(vt(VERSES[5][0]))+'</blockquote><p class="ref">'+T(VERSES[5][1],VERSES[5][2])+'</p></section>';
 h+='<section class="card">'+st('chart',T('本週操練','This week'),T('最近七天完成度','Last 7 days'))+'<div class="bars">';
 for(i=0;i<AREAS.length;i++){var a=AREAS[i],p=weekPct(a.k);h+='<div class="bar" style="'+cvars(a.k)+'"><b>'+tr(a.g)+'</b><i><em style="width:'+(p<0?0:Math.round(p*100))+'%"></em></i><span>'+(p<0?'—':Math.round(p*100)+'%')+'</span></div>';}
 h+='</div></section>';
 var rv=S.reviews[wk]||{};
 function rt(f,label,ph){return '<label class="f" for="rv_'+f+'">'+label+'<textarea id="rv_'+f+'" data-bind="rv" data-f="'+f+'" placeholder="'+esc(ph)+'">'+esc(rv[f]||'')+'</textarea></label>';}
 h+='<section class="card">'+st('pen',T('本週檢討','My weekly review'),T(md(wk)+' 起這一週','Week of '+md(wk)))+
 rt('rev',T('資訊與啟示','Information & revelation'),T('這週神透過經文、聚會、環境讓我看見什麼？','What did God show me this week?'))+
 rt('do',T('信服與實踐','Conviction & practice'),T('我真的相信、也行出來的是什麼？','What did I truly believe and live out?'))+
 rt('fix',T('檢討與修正','Review & correction'),T('哪裡又回到舊人有己？要怎麼修正？','Where did I slip back into the old self? How will I correct it?'))+
 rt('next',T('反覆與繁殖','Repetition & multiplication'),T('下週持續操練什麼？要把它傳給誰？','What will I keep practising, and whom will I pass it on to?'))+'</section>';
 h+=aiCard();
 h+=shareCard();
 h+=fruitCard();
 h+='<section class="card">'+st('star',T('生命之輪','Life wheel'),(last?T('虛線是 '+last.date+' 的評估','Dashed line: '+last.date):T('1 分最弱，10 分最滿足','1 = weakest, 10 = most fulfilled')))+'<div id="radar">'+radar(cur,last?last.v:null)+'</div><div class="sliders">';
 for(i=0;i<subs.length;i++){h+='<label class="sl" for="w_'+i+'" style="'+cvars(subs[i].k)+'"><span>'+tr(area(subs[i].k).g)+'・'+esc(subs[i].n)+'</span><b id="wv_'+i+'">'+cur[i]+'</b><input id="w_'+i+'" type="range" min="1" max="10" step="1" value="'+cur[i]+'" data-bind="w" data-id="'+i+'"></label>';}
 h+='</div><div class="btns"><button class="btn" data-act="saveWheel">'+T('儲存今天的評估','Save today\'s assessment')+'</button></div></section>';
 return h;
}

/* ---------- 首次使用引導 ---------- */
var TPL=[['god',0,['晨讀321','Morning reading 321'],7],['god',1,['安靜禱告 15 分鐘','Quiet prayer, 15 min'],7],['god',2,['參加小家聚會','Attend small group'],1],['god',0,['背一節經文','Memorise a verse'],5],
 ['self',0,['運動 30 分鐘','Exercise, 30 min'],5],['self',0,['11 點前就寢','In bed by 11 pm'],7],['self',2,['閱讀 20 分鐘','Read 20 min'],5],['self',1,['寫下舊人與新人','Write old self / new self'],7],
 ['people',2,['920：祝福一個人','920: bless one person'],7],['people',0,['和家人一起禱告','Pray with family'],7],['people',1,['聯絡一位屬靈同伴','Contact a companion'],2],
 ['work',1,['記帳','Record expenses'],7],['work',0,['規劃明天三件要事','Plan tomorrow\'s three priorities'],5],['work',2,['整理家務 15 分鐘','Tidy up 15 min'],5]];
function showOnb(){ui.onb=1;ui.obSel=ui.obSel||{0:1,1:1,4:1,5:1,8:1,11:1};ui.obEx=ui.obEx||'keep';paintOnb();}
function paintOnb(){
 var w=$('onb');if(!w){w=document.createElement('div');w.id='onb';w.className='onb';document.body.appendChild(w);}
 var h='<div class="onbcard"><div class="obstep">'+ui.onb+' / 3</div>',i;
 if(ui.onb===1){h+='<img src="hero.jpg" alt="" class="obimg"><h2>'+T('歡迎使用 321管家','Welcome to 321 Steward')+'</h2><p>'+T('依照「神、己、人、事」的關係次序，陪你忠心管理神託付的每一個範疇。','Steward every area God entrusts to you, in the order of God, self, others, work.')+'</p>'+
  '<div class="seg">';for(i=0;i<LANGS.length;i++)h+='<button data-act="obLang" data-id="'+LANGS[i][0]+'"'+(L===LANGS[i][0]?' class="on"':'')+'>'+LANGS[i][1]+'</button>';
  h+='</div><label class="f" for="ob_n">'+T('怎麼稱呼你？','What should we call you?')+'<input id="ob_n" value="'+esc(S.name||'')+'"></label>';}
 else if(ui.onb===2){h+='<h2>'+T('選擇你的每日操練','Choose your practices')+'</h2><p>'+T('先選幾個就好，之後隨時可以增減。','Start with a few; you can change them anytime.')+'</p><div class="obgrid">';
  for(i=0;i<TPL.length;i++){var a=area(TPL[i][0]);h+='<button class="obh'+(ui.obSel[i]?' on':'')+'" data-act="obHab" data-id="'+i+'" style="'+cvars(a.k)+'"><b>'+tr(a.g)+'</b>'+esc(tr(TPL[i][2]))+'</button>';}
  h+='</div>';}
 else{h+='<h2>'+T('最後一步','Last step')+'</h2><p>'+T('要先看看範例，還是從空白開始？','See sample data first, or start fresh?')+'</p>'+segOf([['keep',['先看範例','Show samples']],['blank',['從空白開始','Start fresh']]],ui.obEx,'obEx')+
  '<p class="empty">'+T('之後可以在「回顧 → 設定」登入 321 共用帳號、開啟每日提醒和密碼鎖；在「今日時程」連結每日得勝和 Google 日曆。','Later, sign in to your 321 Account and set reminders and a passcode in Review → Settings, and link calendars from Today\'s schedule.')+'</p>';}
 h+='<div class="btns obnav">'+(ui.onb>1?'<button class="btn ghost" data-act="obBack">'+T('上一步','Back')+'</button>':'')+'<button class="btn gold" data-act="obNext">'+(ui.onb<3?T('下一步','Next'):T('開始使用','Start'))+'</button></div></div>';
 w.innerHTML=h;
}
function finishOnb(){
 var hs=[],i;for(i=0;i<TPL.length;i++)if(ui.obSel[i])hs.push({id:uid(),area:TPL[i][0],si:TPL[i][1],title:tr(TPL[i][2]),log:{},per:TPL[i][3]});
 if(hs.length)S.habits=hs;
 if(ui.obEx==='blank'){S.tasks=S.tasks.filter(function(o){return !o.ex;});S.people=S.people.filter(function(o){return !o.ex;});S.money=S.money.filter(function(o){return !o.ex;});}
 S.onb=1;ui.onb=0;save();var w=$('onb');if(w)w.parentNode.removeChild(w);
 try{localStorage.setItem('steward321.splash',ds());}catch(e){}
 render();window.scrollTo(0,0);toast(T('願耶穌在你的每一天作王！','May Jesus reign in every day!'));
}

/* ---------- 動作 ---------- */
function plusAct(act,id,el,e){
 var t=ds(),i,x;
 switch(act){
 case 'task':i=find(S.tasks,id);if(i<0)return true;toggleTask(S.tasks[i]);break;
 case 'addTask':x=val('nt_t');if(!x){$('nt_t').focus();return true;}S.tasks.push({id:uid(),area:id,si:+val('nt_s')||0,title:x,due:val('nt_d'),pri:+val('nt_p')||1,rep:val('nt_r'),gid:val('nt_g'),done:false});toast(T('已加入事項','To-do added'));break;
 case 'addHab':x=val('nh_t');if(!x){$('nh_t').focus();return true;}S.habits.push({id:uid(),area:id,si:+val('nh_s')||0,title:x,log:{},per:+val('nh_per')||7});toast(T('已加入操練','Practice added'));break;
 case 'delHab':i=find(S.habits,id);if(i>=0)S.habits.splice(i,1);ui.edit=null;toast(T('已刪除操練','Practice deleted'));break;
 case 'edit':ui.edit=ui.edit===id?null:id;render();return true;
 case 'editCancel':ui.edit=null;render();return true;
 case 'editSave':editSave();break;
 case 'step':x=id.split(':');i=find(S.tasks,x[0]);if(i<0)return true;var sp=S.tasks[i].steps[+x[1]];sp.d=sp.d?0:1;break;
 case 'schedG':i=find(S.tasks,id);if(i<0)return true;x=S.tasks[i];var st2=val('st_s'),en2=val('st_e'),dy=x.due&&x.due>=t?x.due:t;
  if(!st2||!en2||st2>=en2){toast(T('結束時間要晚於開始時間','End time must be after start time'));return true;}
  ui.schedTask=null;render();window.open(gcalLink(x.title,dy,st2,en2,T('來自 321管家','From 321 Steward'),''),'_blank');return true;
 case 'pickTop':i=find(S.tasks,id);if(i<0)return true;if(!S.top3[t])S.top3[t]=[{t:'',d:0},{t:'',d:0},{t:'',d:0}];for(var q=0;q<3;q++){if(!S.top3[t][q].t){S.top3[t][q].t=S.tasks[i].title;break;}}if(q===3)toast(T('三件要事已經排滿了','All three priorities are set'));break;
 case 'contact':i=find(S.people,id);if(i<0)return true;S.people[i].last=t;ui.logFor=id;toast(T('願主祝福 ','God bless ')+S.people[i].name);break;
 case 'logSave':i=find(S.people,id);if(i>=0){var nn=val('cl_n');if(nn){S.people[i].log.unshift({d:t,n:nn});S.people[i].log=S.people[i].log.slice(0,30);}S.people[i].next=val('cl_x');}ui.logFor=null;break;
 case 'logCancel':ui.logFor=null;render();return true;
 case 'addPerson':x=val('np_n');if(!x){$('np_n').focus();return true;}S.people.push({id:uid(),name:x,ri:+val('np_r')||0,last:'',bday:val('np_b'),pray:val('np_p'),log:[]});toast(T('已加入關懷名單','Added to care list'));break;
 case 'addMoney':x=parseFloat(val('nm_a'));if(!(x>0)){$('nm_a').focus();return true;}S.money.push({id:uid(),date:val('nm_d')||t,cat:val('nm_c')||'other',amt:x,note:val('nm_n')});toast(T('已記帳','Recorded'));break;
 case 'budEdit':ui.budEdit=!ui.budEdit;render();return true;
 case 'cur':S.cur=id;break;
 case 'addGoal':x=val('ng_t_'+id);if(!x){$('ng_t_'+id).focus();return true;}S.goals.push({id:uid(),area:id,title:x,due:val('ng_d_'+id),why:'',done:false,ts:t});toast(T('已加入目標','Goal added'));break;
 case 'goalDone':i=find(S.goals,id);if(i>=0){S.goals[i].done=!S.goals[i].done;if(S.goals[i].done)toast(T('目標達成！把榮耀歸給耶穌','Goal reached! Glory to Jesus'));}break;
 case 'delGoal':i=find(S.goals,id);if(i>=0){for(var g=0;g<S.tasks.length;g++)if(S.tasks[g].gid===id)S.tasks[g].gid='';S.goals.splice(i,1);}break;
 case 'addPrayer':x=val('pr_t');if(!x){$('pr_t').focus();return true;}S.prayers.unshift({id:uid(),t:x,who:val('pr_w'),d:t,ans:'',ad:''});toast(T('已加入代禱','Prayer added'));break;
 case 'ansOpen':ui.ansFor=id;render();var ta=$('ans_t');if(ta)ta.focus();return true;
 case 'ansCancel':ui.ansFor=null;render();return true;
 case 'ansSave':i=find(S.prayers,id);if(i>=0){S.prayers[i].ans=val('ans_t')||'1';S.prayers[i].ad=t;}ui.ansFor=null;toast(T('感謝主，祂是信實的！','Thank God, He is faithful!'));break;
 case 'delPrayer':i=find(S.prayers,id);if(i>=0)S.prayers.splice(i,1);break;
 case 'ansShare':i=find(S.prayers,id);if(i>=0){var pp=S.prayers[i];shareText(T('【禱告蒙應允的見證】\n','[Answered prayer]\n')+pp.t+(pp.ans&&pp.ans!=='1'?'\n'+pp.ans:'')+'\n'+T('感謝主，祂是信實的！','Thank God, He is faithful!'));}return true;
 case 'rtab':ui.rtab=id;ui.edit=null;render();window.scrollTo(0,0);return true;
 case 'aiMode':ui.aiMode=id;ui.aiErr='';ui.crisis=false;render();return true;
 case 'saveFruit':S.fruit[t.slice(0,7)]=fruitVals().slice();ui.fruit=null;toast(T('已儲存本月九果自省','Saved this month\'s reflection'));break;
 case 'shrTog':ui.shr[id]=ui.shr[id]?0:1;render();return true;
 case 'shrGo':shareText(shareSummary());return true;
 case 'homeUp':case 'homeDown':x=+id;var o=S.home.order,y=act==='homeUp'?x-1:x+1;if(y<0||y>=o.length)return true;var tmp=o[x];o[x]=o[y];o[y]=tmp;ui.layout=true;break;
 case 'homeHide':S.home.hide[id]=!S.home.hide[id];ui.layout=true;break;
 case 'homeReset':S.home={order:['verse','top3','sched','habits','due','more','rings','care','evening','fel'],hide:{}};ui.layout=true;break;
 case 'remIcs':remIcs();return true;
 case 'readOpen':openApp(id==='bible'?BIBLE_URL:CHENDU_URL,id==='bible'?T('321互動聖經','Interactive Bible'):T('晨讀321','Morning Reading 321'));return true;
 case 'readRefresh':loadRead(true);toast(T('正在更新…','Updating…'));return true;
 case 'lifeOpen':openApp(LIFE_URL,T('321生命操練','321 Life Practice'));return true;
 case 'lifeRefresh':loadLife(true);toast(T('正在更新…','Updating…'));return true;
 case 'acctOpen':if(ACC)ACC.open({lang:L,onChange:acctChanged});return true;
 case 'cloudNow':toast(T('正在同步…','Syncing…'));acctPush(function(err){toast(err?cloudErr(err):T('已同步到 321 帳號','Synced'));});ACC.syncProfile();loadPub(true);loadLife(true);loadRead(true);return true;
 case 'restoreYes':applyRestore(ui.restore);return true;
 case 'restoreNo':ui.restore=null;ui.restoreCloud=null;render();return true;
 case 'fileBk':fileBackup();return true;
 case 'aiJ':S.aiJ=id==='1';break;
 case 'lockSet':ui.lockSet=true;render();return true;
 case 'lockCancel':ui.lockSet=false;render();return true;
 case 'lockSave':var a1=val('pin1'),a2=val('pin2');if(!/^\d{4}$/.test(a1)){toast(T('請輸入 4 位數字','Enter 4 digits'));return true;}if(a1!==a2){toast(T('兩次密碼不一樣','The two passcodes differ'));return true;}
  try{localStorage.setItem(LKEY2,lockHash(a1));}catch(err){}ui.lockSet=false;render();toast(T('密碼鎖已開啟','Passcode lock on'));return true;
 case 'lockOff':try{localStorage.removeItem(LKEY2);}catch(err){}render();toast(T('密碼鎖已關閉','Passcode lock off'));return true;
 case 'lockNow':showLock();return true;
 case 'pin':pinKey(id);return true;
 case 'onbAgain':ui.onb=1;ui.obSel=null;showOnb();return true;
 case 'obLang':var on=$('ob_n');if(on)S.name=on.value;L=id;try{localStorage.setItem(LKEY,L);}catch(err){}render();paintOnb();return true;
 case 'obHab':ui.obSel[id]=ui.obSel[id]?0:1;paintOnb();return true;
 case 'obEx':ui.obEx=id;paintOnb();return true;
 case 'obBack':ui.onb--;paintOnb();return true;
 case 'obNext':if(ui.onb===1){var nm=$('ob_n');if(nm)S.name=nm.value.replace(/^\s+|\s+$/g,'');}if(ui.onb<3){ui.onb++;paintOnb();}else finishOnb();return true;
 default:return false;
 }
 save();render();return true;
}
function plusBind(b,el,f,id){
 if(b==='vision'){S.vision=el.value;return true;}
 if(b==='rem'){S.rem[+id].t=el.value||S.rem[+id].t;return true;}
 if(b==='bud'){var v=parseFloat(el.value);if(v>0)S.budget[id]=v;else delete S.budget[id];return true;}
 if(b==='fruit'){var fv=fruitVals();fv[+id]=+el.value;var lb=$('frv_'+id);if(lb)lb.textContent=el.value;return 'nosave';}
 return false;
}
document.addEventListener('change',function(e){if(e.target&&e.target.id==='fileIn')fileRestore(e.target);});
document.addEventListener('toggle',function(e){if(e.target&&e.target.id==='homeMore'){SET.moreOpen=e.target.open;saveSet();}},true);
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}cloudSoon();}

/* ---------- 321生命操練（位置 'life-pub'） ---------- */
var LIFE_URL='https://spch321-sudo.github.io/321life/',LIFE={pub:null,busy:false,chk:0};
try{var _lf=JSON.parse(localStorage.getItem('steward321.life')||'null');if(_lf&&_lf.groups)LIFE.pub=_lf;}catch(e){}
function loadLife(force){
 if(!acctOn()||LIFE.busy)return;if(!force&&LIFE.chk&&Date.now()-LIFE.chk<15*60000)return;
 LIFE.busy=true;LIFE.chk=Date.now();
 ACC.fetch('life-pub',function(err,o){LIFE.busy=false;
  if(!err&&o&&o.groups){LIFE.pub=o;try{localStorage.setItem('steward321.life',JSON.stringify(o));}catch(e){}if(view==='self'||view==='review')render();}
 });
}
function openApp(url,title){
 if(!felEmbed()){window.open(url,'_blank');return;}
 stopSpeak();if($('felview'))return;
 var w=document.createElement('div');w.id='felview';w.className='felview';
 w.innerHTML='<div class="fvbar"><button class="fvback" data-act="felClose">‹ '+T('回到321管家','Back to 321 Steward')+'</button><span>'+esc(title)+'</span><a class="fvout" href="'+url+'" target="_blank" rel="noopener" aria-label="'+T('用瀏覽器開啟','Open in browser')+'">'+ic('share',18)+'</a></div><iframe src="'+url+'" title="'+esc(title)+'"></iframe>';
 document.body.appendChild(w);document.body.classList.add('felon');ui.fel=true;
 try{history.pushState({fel:1},'',location.pathname+location.search+'#app');}catch(e){}
}
function lifeDays(n){var p=LIFE.pub,c=0,from=addDays(ds(),-(n-1));if(!p||!p.days)return 0;for(var i=0;i<p.days.length;i++)if(p.days[i]>=from)c++;return c;}
function lifeArrow(cur,pre,good){if(cur==null||pre==null||cur===pre)return '';var up=cur>pre;return '<em class="'+((up===good)?'up':'dn')+'">'+(up?'↑':'↓')+'</em>';}
function lifeCard(){
 var p=LIFE.pub,h='<section class="card" style="'+cvars('self')+'">'+st('self',T('321生命操練','321 Life Practice'),T('舊人有己檢視・新人無己操練','Old-self check · new-self practice')),i;
 if(!p){
  h+='<p class="empty">'+(acctOn()?T('在生命操練用同一組 321 帳號登入，你的檢視與操練進展就會出現在這裡，小智回顧時也會一起參考。','Sign in to Life Practice with the same 321 Account; your progress will appear here and in Xiaozhi\'s reviews.'):T('先在「回顧 → 設定」登入 321 共用帳號，再到生命操練用同一組帳號登入，兩邊就會連起來。','Sign in to your 321 Account in Review → Settings, then use the same code in Life Practice to link them.'))+'</p>';
 }else{
  var last=p.days&&p.days.length?p.days[p.days.length-1]:'';
  h+='<div class="figs"><div class="fig"><span>'+T('近 30 天操練','Days, last 30')+'</span><b>'+lifeDays(30)+T(' 天',' d')+'</b></div><div class="fig"><span>'+T('生命健檢','Life checks')+'</span><b>'+(p.checks||0)+'</b></div><div class="fig"><span>'+T('最近一次','Last')+'</span><b style="font-size:16px">'+(last?md(last):'—')+'</b></div></div>';
  h+='<div class="lchart"><div class="lleg"><span><i class="o"></i>'+T('舊人有己（越低越好）','Old self (lower is better)')+'</span><span><i class="n"></i>'+T('新人無己（越高越好）','New self (higher is better)')+'</span></div>';
  for(i=0;i<p.groups.length;i++){var g=p.groups[i],o=p.latest.exam[g.id],n=p.latest.train[g.id],po=p.prev.exam[g.id],pn=p.prev.train[g.id];
   if(o==null&&n==null)continue;
   h+='<div class="lrow2"><b>'+esc(T(g.zh,g.en))+'</b><div class="lbars"><i class="o"><u style="width:'+((o||0)/15*100)+'%"></u></i><i class="n"><u style="width:'+((n||0)/15*100)+'%"></u></i></div><span>'+(o==null?'–':o)+lifeArrow(o,po,false)+'<br>'+(n==null?'–':n)+lifeArrow(n,pn,true)+'</span></div>';}
  h+='</div><p class="empty">'+T('更新於 ','Updated ')+new Date(p.at).toLocaleString()+'</p>';
 }
 return h+'<div class="btns"><button class="btn ghost sm" data-act="lifeOpen">'+T('開啟生命操練','Open Life Practice')+'</button>'+(p?'<button class="btn ghost sm" data-act="lifeRefresh">'+T('重新整理','Refresh')+'</button>':'')+'</div></section>';
}
function lifeCtx(){
 var p=LIFE.pub;if(!p)return '';
 var ws=[],bs=[],i,g;
 for(i=0;i<p.groups.length;i++){g=p.groups[i];var o=p.latest.exam[g.id],n=p.latest.train[g.id];if(o!=null)ws.push({n:T(g.zh,g.en),v:o});if(n!=null)bs.push({n:T(g.zh,g.en),v:n});}
 ws.sort(function(a,b){return b.v-a.v;});bs.sort(function(a,b){return b.v-a.v;});
 return T('【321生命操練】近 30 天操練 ','[321 Life Practice] practice days in last 30: ')+lifeDays(30)+T(' 天；生命健檢 ','; life checks ')+(p.checks||0)+T(' 次',' total')+
  (ws.length?T('；舊人有己最重的：','; strongest old-self areas: ')+ws.slice(0,3).map(function(x){return x.n+' '+x.v+'/15';}).join('、'):'')+
  (bs.length?T('；新人無己最好的：','; best new-self areas: ')+bs.slice(0,3).map(function(x){return x.n+' '+x.v+'/15';}).join('、'):'');
}

/* ---------- 晨讀321（'chendu-pub'）與 321互動聖經（'bible-pub'） ---------- */
var CHENDU_URL='https://spch321-sudo.github.io/chendu321/',BIBLE_URL='https://spch321-sudo.github.io/bible/';
var RP={chendu:null,bible:null,busy:{},chk:{}};
try{RP.chendu=JSON.parse(localStorage.getItem('steward321.chendu')||'null');RP.bible=JSON.parse(localStorage.getItem('steward321.bible')||'null');}catch(e){}
function loadRead(force){
 if(!acctOn())return;
 var list=[['chendu','chendu-pub'],['bible','bible-pub']];
 for(var i=0;i<list.length;i++)(function(k,slot){
  if(RP.busy[k]||(!force&&RP.chk[k]&&Date.now()-RP.chk[k]<15*60000))return;
  RP.busy[k]=1;RP.chk[k]=Date.now();
  ACC.fetch(slot,function(err,o){RP.busy[k]=0;if(!err&&o){RP[k]=o;try{localStorage.setItem('steward321.'+k,JSON.stringify(o));}catch(e){}if(view==='god'||view==='review')render();}});
 })(list[i][0],list[i][1]);
}
function readDays(arr,n){var c=0,from=addDays(ds(),-(n-1));if(!arr)return 0;for(var i=0;i<arr.length;i++)if(arr[i]>=from)c++;return c;}
function nm3(o){if(!o)return '';return L==='en'?(o.en||o.zh):(L==='zs'?(o.zs||zs(o.zh||'')):(o.zh||''));}
function readCard(){
 var c=RP.chendu,b=RP.bible,h='<section class="card" style="'+cvars('god')+'">'+st('book',T('讀經與晨讀','Bible reading & Morning Reading'),T('晨讀321・321互動聖經','Morning Reading 321 · Interactive Bible'));
 h+='<div class="rgrid">';
 h+='<div class="rbox"><div class="rhd">'+T('晨讀321','Morning Reading 321')+'</div>';
 if(c){var pc=c.total?Math.round(c.read/c.total*100):0;
  h+='<div class="rbig">'+c.read+'<small> / '+c.total+T(' 課',' lessons')+'</small></div><div class="gbar" style="'+cvars('god')+'"><i><em style="width:'+pc+'%"></em></i><span>'+pc+'%</span></div>'+
  '<div class="meta"><span class="chip gold">'+T('連續 '+c.streak+' 天',c.streak+'-day streak')+'</span>'+(c.best?'<span>'+T('最長 '+c.best+' 天','best '+c.best)+'</span>':'')+'</div>'+
  (c.last?'<div class="meta">'+T('最近：第 '+esc(c.last.no)+' 課 ','Last: lesson '+esc(c.last.no)+' ')+esc(c.last.title)+'</div>':'');}
 else h+='<p class="empty">'+T('在晨讀321用同一組 321 帳號登入就會顯示。','Sign in to Morning Reading 321 with the same account.')+'</p>';
 h+='<button class="btn ghost sm" data-act="readOpen" data-id="chendu">'+T('開啟晨讀321','Open Morning Reading')+'</button></div>';
 h+='<div class="rbox"><div class="rhd">'+T('321互動聖經','Interactive Bible')+'</div>';
 if(b){var pb=Math.round(b.chapters/1189*1000)/10;
  h+='<div class="rbig">'+b.chapters+'<small> / 1189'+T(' 章',' ch')+'</small></div><div class="gbar" style="'+cvars('god')+'"><i><em style="width:'+Math.min(100,pb)+'%"></em></i><span>'+pb+'%</span></div>'+
  '<div class="meta"><span class="chip gold">'+T('近 7 天讀了 '+readDays(b.days,7)+' 天',readDays(b.days,7)+' of last 7 days')+'</span></div>'+
  (b.last?'<div class="meta">'+T('最近：','Last: ')+esc(nm3(b.last))+' '+b.last.ch+T(' 章','')+'</div>':'')+
  (b.plan?'<div class="meta">'+T('計畫：','Plan: ')+esc(nm3(b.plan.name))+(b.plan.total?' '+b.plan.done+'/'+b.plan.total:'')+'</div>':'');}
 else h+='<p class="empty">'+T('在互動聖經用同一組 321 帳號登入就會顯示。','Sign in to the Interactive Bible with the same account.')+'</p>';
 h+='<button class="btn ghost sm" data-act="readOpen" data-id="bible">'+T('開啟互動聖經','Open Interactive Bible')+'</button></div></div>';
 if(c||b)h+='<div class="btns"><button class="btn ghost sm" data-act="readRefresh">'+T('重新整理','Refresh')+'</button></div>';
 return h+'</section>';
}
function readCtx(){
 var c=RP.chendu,b=RP.bible,o=[];
 if(c)o.push(T('【晨讀321】讀過 ','[Morning Reading 321] read ')+c.read+'/'+c.total+T(' 課，連續 ',' lessons, streak ')+c.streak+T(' 天',' days')+(c.last?T('，最近：第 ',' , last: lesson ')+c.last.no+T(' 課 ',' ')+c.last.title:''));
 if(b)o.push(T('【互動聖經】讀過 ','[Interactive Bible] read ')+b.chapters+T(' 章；近 30 天讀經 ',' chapters; reading days in last 30: ')+readDays(b.days,30)+T(' 天','')+(b.last?T('；最近：','; last: ')+nm3(b.last)+' '+b.last.ch:'')+(b.plan&&b.plan.total?T('；讀經計畫 ','; plan ')+b.plan.done+'/'+b.plan.total:''));
 return o.join('\n');
}
