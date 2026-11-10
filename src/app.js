(function(){
var KEY='steward321.v1',LKEY='steward321.lang';
var ZS=/*ZSMAP*/{};
var L='zh';
try{L=localStorage.getItem(LKEY)||'';}catch(e){}
if(L!=='zh'&&L!=='zs'&&L!=='en'){var nl=(navigator.language||'').toLowerCase();L=nl.indexOf('zh')===0?((nl.indexOf('cn')>0||nl.indexOf('hans')>0||nl.indexOf('sg')>0)?'zs':'zh'):(nl?'en':'zh');}
function zs(s){var o='',c;s=String(s);for(var i=0;i<s.length;i++){c=s.charAt(i);o+=ZS[c]||c;}return o;}
function T(zh,en){return L==='en'?en:(L==='zs'?zs(zh):zh);}
function tr(a){return T(a[0],a[1]);}

var PLANNER_URL='https://spch321-sudo.github.io/321planner/';
var AI_URL='https://xiaozhi-proxy.spch321.workers.dev';
var AREAS=[
 {k:'god',g:['神','G'],s:['與神','God'],n:['與神的關係','With God'],subs:[['讀經靈修','Word & devotion'],['禱告敬拜','Prayer & worship'],['事奉','Service']],
  motto:['先建立與神的關係——讓耶穌作王，讓耶穌得著一切的榮耀','First, my relationship with God: let Jesus reign, and let Him have all the glory'],
  v:'Matthew.6.33',r:['馬太福音 6:33','Matthew 6:33']},
 {k:'self',g:['己','S'],s:['與己','Self'],n:['與自己的關係','With myself'],subs:[['身體健康','Health'],['心靈情緒','Heart & emotions'],['學習成長','Learning']],
  motto:['不再是我，乃是基督——無己才能讓耶穌在裡面活','Not I, but Christ: only selflessness lets Jesus live in me'],
  v:'1Corinthians.6.19-20',r:['哥林多前書 6:19-20','1 Corinthians 6:19-20']},
 {k:'people',g:['人','O'],s:['與人','Others'],n:['與人的關係','With others'],subs:[['婚姻家庭','Marriage & family'],['屬靈同伴','Spiritual companions'],['關懷傳福音','Care & gospel']],
  motto:['人比事重要，關係比東西重要——操練920，活出無己的愛','People matter more than tasks, relationships more than things: practise 920'],
  v:'John.13.34',r:['約翰福音 13:34','John 13:34']},
 {k:'work',g:['事','W'],s:['與事','Work'],n:['與事的關係','With my work'],subs:[['工作事業','Work & career'],['財務管理','Finances'],['家務生活','Home & daily life']],
  motto:['先生命、再關係、後事工——凡事為榮耀神而行','Life first, then relationships, then ministry: do all to the glory of God'],
  v:'Colossians.3.23',r:['歌羅西書 3:23','Colossians 3:23']}
];
var VV=/*VV*/{};
function vt(k){var v=VV[k]||["","",""];return v[L==="zh"?0:(L==="zs"?1:2)];}
var VERSES=[["Luke.12.42", "路加福音 12:42", "Luke 12:42"], ["1Corinthians.4.2", "哥林多前書 4:2", "1 Corinthians 4:2"], ["1Peter.4.10", "彼得前書 4:10", "1 Peter 4:10"], ["Proverbs.4.23", "箴言 4:23", "Proverbs 4:23"], ["Galatians.2.20", "加拉太書 2:20", "Galatians 2:20"], ["Psalms.90.12", "詩篇 90:12", "Psalm 90:12"], ["Ephesians.5.15-16", "以弗所書 5:15-16", "Ephesians 5:15-16"], ["James.4.6", "雅各書 4:6", "James 4:6"], ["Proverbs.16.3", "箴言 16:3", "Proverbs 16:3"], ["John.15.5", "約翰福音 15:5", "John 15:5"], ["1Corinthians.10.31", "哥林多前書 10:31", "1 Corinthians 10:31"], ["Romans.12.2", "羅馬書 12:2", "Romans 12:2"], ["Philippians.4.6", "腓立比書 4:6", "Philippians 4:6"], ["Galatians.5.22-23", "加拉太書 5:22-23", "Galatians 5:22-23"], ["Proverbs.3.5-6", "箴言 3:5-6", "Proverbs 3:5-6"]];
var REL=[['配偶','Spouse'],['家人','Family'],['屬靈同伴（2）','Companion (2)'],['屬靈父母兒女（3）','Spiritual parent/child (3)'],['屬靈戰友（5）','Co-worker (5)'],['朋友','Friend'],['同事','Colleague'],['慕道友','Seeker']];
var CATS={give:['奉獻','Giving'],food:['飲食','Food'],home:['居住','Housing'],trans:['交通','Transport'],family:['家庭','Family'],edu:['教育','Education'],med:['醫療','Medical'],other:['其他支出','Other expense'],salary:['薪資','Salary'],bonus:['獎金','Bonus'],inc:['其他收入','Other income']};
var CAT_OUT=['give','food','home','trans','family','edu','med','other'],CAT_IN=['salary','bonus','inc'];
var IC={
 cross:'<path d="M12 2.5v19M5.5 8.5h13" stroke-width="2.6"/>',
 self:'<circle cx="12" cy="7.5" r="4"/><path d="M4 21c0-4.4 3.6-7.4 8-7.4s8 3 8 7.4"/>',
 people:'<circle cx="12" cy="7.5" r="3.2"/><circle cx="5" cy="9.5" r="2.3"/><circle cx="19" cy="9.5" r="2.3"/><path d="M6.6 20c0-3.4 2.4-5.6 5.4-5.6s5.4 2.2 5.4 5.6M1.5 19c0-2.4 1.5-4 3.6-4M22.5 19c0-2.4-1.5-4-3.6-4"/>',
 gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M5.5 18.5l2.1-2.1M16.4 7.6l2.1-2.1"/><circle cx="12" cy="12" r="6.6"/>',
 home:'<path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 9.5V20h5v-5.5h3V20h5V9.5"/>',
 chart:'<path d="M3 20.5h18"/><path d="M6 17v-5M11 17V7M16 17v-8M21 17V4" stroke-width="2.4"/>',
 book:'<path d="M2.5 5.5c3-1.4 6.2-1.4 9.5.8 3.3-2.2 6.5-2.2 9.5-.8v13c-3-1.4-6.2-1.4-9.5.8-3.3-2.2-6.5-2.2-9.5-.8z"/><path d="M12 6.3v13.5"/>',
 star:'<path d="M12 3.2l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.6l-5.3 2.9 1.1-5.9-4.4-4.1 6-.8z"/>',
 clock:'<circle cx="12" cy="12" r="8.8"/><path d="M12 7v5.2l3.4 2"/>',
 list:'<path d="M9 6.5h11M9 12h11M9 17.5h11"/><path d="M4 6.5h.01M4 12h.01M4 17.5h.01" stroke-width="3"/>',
 heart:'<path d="M12 20s-7.5-4.4-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.6 12 20 12 20z"/>',
 moon:'<path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/>',
 spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
 coin:'<circle cx="12" cy="12" r="8.8"/><path d="M14.8 9.2c-.6-.9-1.6-1.4-2.8-1.4-1.6 0-2.8.9-2.8 2.1 0 2.9 5.8 1.4 5.8 4.3 0 1.2-1.2 2.1-2.9 2.1-1.3 0-2.4-.6-3-1.5M12 6v1.8M12 16.3v1.8"/>',
 sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
 image:'<rect x="3" y="4.5" width="18" height="15" rx="2.5"/><circle cx="8.5" cy="9.5" r="1.8"/><path d="M21 16l-5-5-8.5 8.5"/>',
 share:'<path d="M12 15V3.5M7.5 8 12 3.5 16.5 8"/><path d="M5 12v7a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-7"/>',
 video:'<rect x="2.5" y="6" width="13" height="12" rx="2.5"/><path d="M15.5 10.5 21.5 7v10l-6-3.5z"/>',
 pen:'<path d="M4 20l1-4.2L15.6 5.2a2.1 2.1 0 0 1 3 3L8 18.8z"/><path d="M13.8 7l3 3"/>',
 gear2:'<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4.9a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.5a7 7 0 0 0-2 1.2L5.1 5.8l-2 3.4 2 1.6a7 7 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-.9a7 7 0 0 0 2 1.2L10 21h4l.5-2.5a7 7 0 0 0 2-1.2l2.4.9 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z"/>'
};
function ic(n,sz){return '<svg viewBox="0 0 24 24" width="'+(sz||18)+'" height="'+(sz||18)+'" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(IC[n]||'')+'</svg>';}
var AICON={god:'cross',self:'self',people:'people',work:'gear'};
var ATAG={god:['與神同行','Walk with God'],self:['管理自己','Steward myself'],people:['關係建造','Build relationships'],work:['有效管理','Manage well']};
function st(icon,title,small,k){return '<h2 class="st"><span class="ic"'+(k?' style="'+cvars(k)+'"':'')+'>'+ic(icon,17)+'</span>'+title+(small?'<small>'+small+'</small>':'')+'</h2>';}
var CHK='<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function pad(n){return (n<10?'0':'')+n;}
function ds(d){d=d||new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());}
function pd(s){var p=s.split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
function addDays(s,n){var d=pd(s);d.setDate(d.getDate()+n);return ds(d);}
function diff(a,b){return Math.round((pd(b)-pd(a))/864e5);}
function weekKey(s){var d=pd(s);d.setDate(d.getDate()-((d.getDay()+6)%7));return ds(d);}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
function fmt(n){var s=String(Math.round(Math.abs(n))).replace(/\B(?=(\d{3})+(?!\d))/g,',');return (n<0?'-':'')+s;}
function area(k){for(var i=0;i<AREAS.length;i++){if(AREAS[i].k===k)return AREAS[i];}return AREAS[0];}
function subName(k,si){var a=area(k);return tr(a.subs[si]||a.subs[0]);}
function cvars(k){return '--c:var(--'+k+');--cs:var(--'+k+'-soft);--cd:var(--'+k+'-deep)';}
function $(id){return document.getElementById(id);}
function val(id){var e=$(id);return e?e.value.replace(/^\s+|\s+$/g,''):'';}
function md(d){return T((+d.slice(5,7))+'/'+(+d.slice(8)),(+d.slice(5,7))+'/'+(+d.slice(8)));}

/* seed：見 plus */
function idxIn(list,s){for(var i=0;i<list.length;i++){if(list[i][0]===s||list[i][1]===s)return i;}return 0;}
/* norm：見 plus */
function load(){try{var s=localStorage.getItem(KEY);if(s)return norm(JSON.parse(s));}catch(e){}return seed();}
/* save：見 plus */

var S=load();
var view='today';
var ui={wheel:null,backup:false,reset:false,schedOff:0,schedTask:null,aiBusy:false,aiErr:'',calBusy:{},calSet:false};
var tt=null;
function toast(m){var e=$('toast');e.textContent=m;e.hidden=false;clearTimeout(tt);tt=setTimeout(function(){e.hidden=true;},1800);}

/* ---------- 321每日得勝 時程 ---------- */
function lsJ(k){try{var r=localStorage.getItem(k);return r?JSON.parse(r):null;}catch(e){return null;}}
function plannerHere(){try{return localStorage.getItem('p4_schema_ver')!==null||localStorage.getItem('p4_idx')!==null||localStorage.getItem('p4_schedrules')!==null;}catch(e){return false;}}
function ruleMatch(r,day,origin){
 var d=pd(day),dd=Math.round((d-origin)/864e5);
 if(r.repeat==='daily')return true;
 if(r.repeat==='weekly'){if(r.weekdays&&r.weekdays.length)return r.weekdays.indexOf(d.getDay())>=0;return d.getDay()===origin.getDay();}
 if(r.repeat==='monthly')return d.getDate()===origin.getDate();
 if(r.repeat==='yearly')return d.getMonth()===origin.getMonth()&&d.getDate()===origin.getDate();
 if(r.repeat==='custom'){var ci=r.customInterval||1,cu=r.customUnit||'day';
  if(cu==='day')return dd%ci===0;if(cu==='week')return dd%(ci*7)===0;
  if(cu==='month')return d.getDate()===origin.getDate()&&(d.getFullYear()*12+d.getMonth()-(origin.getFullYear()*12+origin.getMonth()))%ci===0;}
 return false;
}
function plannerDay(day){
 var out=[],a=lsJ('p4_sched_'+day)||[],rules=lsJ('p4_schedrules')||[],i;
 for(i=0;i<a.length;i++){if(a[i]&&a[i].title)out.push({title:a[i].title,start:a[i].start||'',end:a[i].end||'',color:a[i].color||'',cal:!!a[i]._cal});}
 for(i=0;i<rules.length;i++){var r=rules[i];if(!r||!r._origin||day<=r._origin)continue;
  if(r.customEnd==='date'&&r.customEndDate&&day>r.customEndDate)continue;
  var origin=pd(r._origin);if(!ruleMatch(r,day,origin))continue;
  if(r.customEnd==='count'&&r.customCount){var cnt=0,n=diff(r._origin,day);for(var j=1;j<=n;j++){if(ruleMatch(r,addDays(r._origin,j),origin))cnt++;}if(cnt>r.customCount)continue;}
  out.push({title:r.title,start:r.start||'',end:r.end||'',color:r.color||'',rep:true});}
 return out;
}
/* ---------- 連結的日曆：每日得勝同步網址、Google 日曆私人網址（多個） ---------- */
var CAL_PROXY='https://ical-proxy.spch321.workers.dev/';
var CAL_COLORS=['#0a8f84','#4285f4','#d50000','#8e24aa','#f4511e','#0b8043','#f6bf26','#616161'];
var CACHE_KEY='steward321.calcache',CALC={};
try{CALC=JSON.parse(localStorage.getItem(CACHE_KEY)||'{}')||{};}catch(e){CALC={};}
function saveCalc(){try{localStorage.setItem(CACHE_KEY,JSON.stringify(CALC));}catch(e){}}
function isFeed(u){return String(u||'').indexOf(CAL_PROXY+'feed/')===0;}
function calUrlFrom(raw){
 raw=String(raw||'');var m=/(webcal|https):\/\/[^\s"'<>，。]+/i.exec(raw);if(!m)return '';
 var u=m[0];if(/^webcal:/i.test(u))u='https:'+u.slice(7);return u.replace(/[)）\]】]+$/,'');
}
function calFetch(c,force,cb){
 var ce=CALC[c.id];
 if(!force&&ce&&Date.now()-ce.at<20*60000){if(cb)cb();return;}
 if(ui.calBusy[c.id])return;ui.calBusy[c.id]=1;
 var url=isFeed(c.url)?c.url+(c.url.indexOf('?')<0?'?':'&')+'t='+Date.now():CAL_PROXY+'?url='+encodeURIComponent(c.url);
 var x=new XMLHttpRequest();
 function done(err){delete ui.calBusy[c.id];if(err){c.err=err;}else delete c.err;save();if(cb)cb(err);if(view==='today')render();}
 try{x.open('GET',url);}catch(e){done('net');return;}
 x.timeout=25000;
 x.onload=function(){
  if(x.status===404||x.status===410){done('gone');return;}
  if(x.status<200||x.status>=300||x.responseText.indexOf('BEGIN:VCALENDAR')<0){done('fmt');return;}
  var all=gcalBuild(gcalParse(x.responseText)),lo=Date.now()-2*864e5,hi=Date.now()+45*864e5,keep=[];
  for(var i=0;i<all.length;i++){var e=all[i];if(e.e>=lo&&e.s<=hi)keep.push([e.s,e.e,e.a,e.t,e.l]);}
  CALC[c.id]={at:Date.now(),ev:keep};saveCalc();done('');
 };
 x.onerror=x.ontimeout=function(){done('net');};
 try{x.send();}catch(e){done('net');}
}
function refreshCals(force){for(var i=0;i<S.cals.length;i++)calFetch(S.cals[i],force);}
function calEventsFor(day){
 var out=[],d0=pd(day).getTime(),d1=d0+864e5,i,j;
 for(i=0;i<S.cals.length;i++){var c=S.cals[i],ce=CALC[c.id];if(!ce||c.off)continue;
  for(j=0;j<ce.ev.length;j++){var e=ce.ev[j];if(e[1]<=d0&&!(e[2]&&e[0]===d0)||e[0]>=d1)continue;
   var st=new Date(e[0]),en=new Date(e[1]);
   out.push({title:e[3]||T('（無標題）','(untitled)'),loc:e[4]||'',start:e[2]||e[0]<d0?'':pad(st.getHours())+':'+pad(st.getMinutes()),end:e[2]||e[1]>=d1?'':pad(en.getHours())+':'+pad(en.getMinutes()),color:c.color,cal:c.name,sort:e[2]?-1:e[0]});}}
 return out;
}
function schedFor(day){
 var a=plannerHere()?plannerDay(day):[],b=calEventsFor(day),seen={},out=[],i,k,all;
 for(i=0;i<a.length;i++){a[i].cal=T('每日得勝','Daily Victory');a[i].sort=a[i].start?pd(day).getTime()+(+a[i].start.slice(0,2))*36e5+(+a[i].start.slice(3,5))*6e4:-1;}
 all=a.concat(b);
 for(i=0;i<all.length;i++){k=all[i].start+'|'+all[i].title;if(seen[k])continue;seen[k]=1;out.push(all[i]);}
 out.sort(function(x,y){return x.sort-y.sort;});
 return out;
}
function calSetup(){
 var h='<div class="calset">',i,c;
 if(S.cals.length){h+='<div class="list">';
  for(i=0;i<S.cals.length;i++){c=S.cals[i];var ce=CALC[c.id];
   h+='<div class="row"><i class="bar2" style="background:'+esc(c.color)+'"></i><div class="grow"><div class="ttl">'+esc(c.name)+'</div><div class="meta">'+
   (isFeed(c.url)?T('每日得勝時程','Daily Victory schedule'):T('Google 日曆','Google Calendar'))+'・'+
   (ui.calBusy[c.id]?T('同步中…','Syncing…'):c.err?'<span style="color:var(--warn)">'+(c.err==='gone'?T('對方已停止分享','No longer shared'):c.err==='fmt'?T('網址讀不到日曆，請重新複製','Link did not return a calendar; copy it again'):T('連線失敗','Connection failed'))+'</span>':ce?T('同步於 ','Synced ')+new Date(ce.at).toTimeString().slice(0,5):T('尚未同步','Not synced'))+'</div></div>'+
   '<button class="x del" data-act="calDel" data-id="'+c.id+'" aria-label="'+T('移除','Remove')+'">×</button></div>';}
  h+='</div>';}
 h+='<div class="form"><textarea id="cal_u" class="full" rows="2" placeholder="'+T('貼上同步網址或 iCal 私人網址','Paste a sync link or private iCal address')+'" aria-label="'+T('日曆網址','Calendar link')+'"></textarea>'+
 '<input id="cal_n" placeholder="'+T('名稱，例如：我的時程、工作','Name, e.g. My schedule, Work')+'" aria-label="'+T('名稱','Name')+'"><button class="btn" data-act="calAdd">'+T('連結','Link')+'</button></div>';
 h+='<details class="fd"'+(S.cals.length?'':' open')+'><summary>'+ic('list',17)+T('怎麼取得網址','How to get the link')+'</summary><div class="howto">'+
 '<h4>'+T('每日得勝的時程與日曆活動','Daily Victory schedule and calendar')+'</h4><ol>'+
 '<li>'+T('打開「321每日得勝」，到「日曆」頁。','Open 321 Daily Victory and go to the Calendar page.')+'</li>'+
 '<li>'+T('按「📤 匯出到 Google 日曆」。','Tap “📤 Export to Google Calendar”.')+'</li>'+
 '<li>'+T('按「🔗 建立同步網址」，再按「複製」。','Tap “🔗 Create sync link”, then “Copy”.')+'</li>'+
 '<li>'+T('回到管家，貼在上面的框，取個名稱，按「連結」。','Come back, paste it above, give it a name and tap “Link”.')+'</li></ol>'+
 '<h4>'+T('Google 日曆的活動','Google Calendar events')+'</h4><ol>'+
 '<li>'+T('用電腦打開 Google 日曆，按右上角齒輪 →「設定」。','On a computer, open Google Calendar → gear icon → Settings.')+'</li>'+
 '<li>'+T('左邊點你的日曆名稱，往下找到「整合日曆」。','Click your calendar on the left, scroll to “Integrate calendar”.')+'</li>'+
 '<li>'+T('複製「iCal 格式的私人網址」，傳到手機。','Copy the “Secret address in iCal format” and send it to your phone.')+'</li>'+
 '<li>'+T('貼在上面的框，按「連結」。','Paste it above and tap “Link”.')+'</li></ol>'+
 '<p class="empty">'+T('🔒 這些網址只存在這支手機，管家只讀取、不會改動你的日曆。','🔒 Links stay on this phone. The Steward only reads your calendars, never changes them.')+'</p></div></details></div>';
 return h;
}
function pushToPlanner(day,title,start,end){
 var key='p4_sched_'+day,arr=lsJ(key)||[];
 arr.push({title:title,start:start,end:end,color:'#0a8f84',note:T('來自321管家','From 321 Steward'),repeat:'none',weekdays:[],customInterval:1,customUnit:'day',customEnd:'forever',customCount:10,customEndDate:''});
 arr.sort(function(a,b){return a.start<b.start?-1:1;});
 try{localStorage.setItem(key,JSON.stringify(arr));return true;}catch(e){return false;}
}

/* ---------- 共用 ---------- */
function hasEx(){var a=[S.tasks,S.people,S.money],i,j;for(i=0;i<a.length;i++){for(j=0;j<a[i].length;j++){if(a[i][j].ex)return true;}}return false;}
function areaPct(k,day){var n=0,d=0;for(var i=0;i<S.habits.length;i++){var h=S.habits[i];if(h.area!==k)continue;n++;if(h.log[day])d++;}return n?d/n:-1;}
function weekPct(k){var t=ds(),n=0,d=0;for(var i=0;i<S.habits.length;i++){var h=S.habits[i];if(h.area!==k)continue;for(var j=0;j<7;j++){n++;if(h.log[addDays(t,-j)])d++;}}return n?d/n:-1;}
function medal(p,a){
 var c=2*Math.PI*35,len=p>0?c*p:0;
 return '<button class="medal" data-act="go" data-id="'+a.k+'" style="'+cvars(a.k)+'"><span class="mring"><svg viewBox="0 0 76 76" aria-hidden="true"><circle cx="38" cy="38" r="35" fill="none" stroke="var(--sunk)" stroke-width="4"/>'+
 '<circle cx="38" cy="38" r="35" fill="none" stroke="var(--'+a.k+')" stroke-width="4" stroke-dasharray="'+len.toFixed(1)+' '+c.toFixed(1)+'"'+(p>0?' stroke-linecap="round"':'')+' transform="rotate(-90 38 38)"/></svg>'+
 '<span class="mcore">'+ic(AICON[a.k],18)+'<b>'+tr(a.g)+'</b></span></span><span class="lb">'+tr(ATAG[a.k])+'</span><span class="pc">'+(p<0?'—':Math.round(p*100)+'%')+'</span></button>';
}
function chk(on,act,id,label,k){return '<button class="chk'+(on?' on':'')+'" data-act="'+act+'" data-id="'+id+'" aria-pressed="'+(on?'true':'false')+'" aria-label="'+esc(label)+'"'+(k?' style="'+cvars(k)+'"':'')+'>'+CHK+'</button>';}
function exChip(o){return o.ex?'<span class="chip">'+T('範例','Sample')+'</span>':'';}
function dueChip(t){
 if(!t.due||t.done)return '';
 var n=diff(ds(),t.due);
 if(n<0)return '<span class="chip warn">'+T('逾期 '+(-n)+' 天',(-n)+' day'+(n<-1?'s':'')+' overdue')+'</span>';
 if(n===0)return '<span class="chip gold">'+T('今天','Today')+'</span>';
 if(n===1)return '<span class="chip">'+T('明天','Tomorrow')+'</span>';
 return '<span class="chip">'+md(t.due)+'</span>';
}
function priChip(p){return p===3?'<span class="chip warn">'+T('緊急','Urgent')+'</span>':p===2?'<span class="chip gold">'+T('重要','Important')+'</span>':'';}
/* taskRow：見 plus */
/* habitRow：見 plus */
function jText(f,label,ph){var j=S.journal[ds()]||{};return '<label class="f" for="j_'+f+'">'+label+'<textarea id="j_'+f+'" data-bind="j" data-f="'+f+'" placeholder="'+esc(ph)+'">'+esc(j[f]||'')+'</textarea></label>';}
function pastJ(f,label){
 var keys=[],k,t=ds();for(k in S.journal){if(k!==t&&S.journal[k][f])keys.push(k);}
 keys.sort().reverse();if(!keys.length)return '';
 var h='<div class="past"><h3 class="sub">'+label+'</h3>';
 for(var i=0;i<Math.min(5,keys.length);i++){h+='<div><small>'+keys[i]+'</small>'+esc(S.journal[keys[i]][f])+'</div>';}
 return h+'</div>';
}
function sortTasks(arr){return arr.sort(function(a,b){if(a.done!==b.done)return a.done?1:-1;var x=a.due||'9999',y=b.due||'9999';if(x!==y)return x<y?-1:1;return (b.pri||1)-(a.pri||1);});}
function peopleSorted(){return S.people.slice().sort(function(a,b){return (a.last||'0000')<(b.last||'0000')?-1:1;});}
function bdaySoon(p){
 if(!p.bday)return '';
 var t=ds(),y=+t.slice(0,4),b=y+p.bday.slice(4),n=diff(t,b);
 if(n<0){b=(y+1)+p.bday.slice(4);n=diff(t,b);}
 if(n===0)return '<span class="chip gold">'+T('今天生日','Birthday today')+'</span>';
 if(n<=30)return '<span class="chip gold">'+T(n+' 天後生日','Birthday in '+n+' days')+'</span>';
 return '';
}
function opts(list,sel){var h='';for(var i=0;i<list.length;i++)h+='<option value="'+i+'"'+(i===sel?' selected':'')+'>'+esc(tr(list[i]))+'</option>';return h;}
function catOpts(keys,sel){var h='';for(var i=0;i<keys.length;i++)h+='<option value="'+keys[i]+'"'+(keys[i]===sel?' selected':'')+'>'+esc(tr(CATS[keys[i]]))+'</option>';return h;}

/* ---------- 今日 ---------- */
function schedCard(){
 var day=addDays(ds(),ui.schedOff),here=plannerHere(),evs=schedFor(day),now=new Date(),hm=pad(now.getHours())+':'+pad(now.getMinutes()),i,h,busy=false,k;
 for(k in ui.calBusy)busy=true;
 h='<section class="card">'+st('clock',(ui.schedOff?T('明日時程','Tomorrow'):T('今日時程','Today\'s schedule')),T('每日得勝時程・連結的日曆活動','Daily Victory and linked calendars'));
 if(!here&&!S.cals.length){h+='<p class="empty">'+T('連結每日得勝的時程和你的日曆，今天要做的事就會全部出現在這裡。','Link your Daily Victory schedule and calendars to see everything for today here.')+'</p>'+calSetup()+'</section>';return h;}
 h+='<div class="list">';
 if(!evs.length)h+='<p class="empty">'+(busy?T('正在讀取時程……','Loading schedule…'):T('這天沒有排定的時程。','Nothing scheduled.'))+'</p>';
 for(i=0;i<evs.length;i++){var e=evs[i],cur=!ui.schedOff&&e.start&&e.end&&e.start<=hm&&hm<e.end;
  h+='<div class="row sch'+(cur?' now':'')+'"><span class="tm">'+(e.start||T('全天','All day'))+(e.end?'<br>'+e.end:'')+'</span><i class="bar2" style="background:'+esc(e.color||'var(--accent)')+'"></i><div class="grow"><div class="ttl">'+esc(e.title)+'</div><div class="meta">'+(cur?'<span class="chip gold">'+T('進行中','Now')+'</span>':'')+(e.cal?'<span>'+esc(e.cal)+'</span>':'')+(e.loc?'<span>'+esc(e.loc)+'</span>':'')+'</div></div></div>';}
 h+='</div><div class="btns"><button class="btn ghost sm" data-act="schedDay">'+(ui.schedOff?T('看今天','Today'):T('看明天','Tomorrow'))+'</button>'+
 (S.cals.length?'<button class="btn ghost sm" data-act="calRefresh">'+T('重新整理','Refresh')+'</button>':'')+
 '<button class="btn ghost sm" data-act="calSet">'+(ui.calSet?T('收起','Close'):T('管理連結的日曆','Linked calendars'))+'</button>'+
 '<a class="btn ghost sm" href="'+PLANNER_URL+'" target="_blank" rel="noopener">'+T('開啟每日得勝','Open Daily Victory')+'</a></div>'+(ui.calSet?calSetup():'')+'</section>';
 return h;
}
/* vToday：見 plus */

/* ---------- 範疇頁 ---------- */
/* vArea：見 plus */
/* peopleExtra：見 plus */
function isIn(cat){return CAT_IN.indexOf(cat)>=0;}
/* moneyExtra：見 plus */

/* ---------- 小智週檢討 ---------- */
function weekRange(){var t=ds(),wk=weekKey(t);return {wk:wk,from:wk,to:addDays(wk,6),today:t};}
function aiSystem(){
 return T('你是「小智」，國度321空中團契的屬靈同伴，在321管家裡陪伴使用者做每週、每月或每年的回顧。你是一位敬虔愛神的福音派牧者，熟悉321理念：三個基礎（耶穌是我的榜樣、聖經是我的準則、聖靈是我的引導）、兩個核心（讓耶穌作王、讓耶穌得著一切的榮耀）、一個目的（建立屬神的體系）；改變觀念的八大步驟（資訊、啟示、信服、實踐、檢討、修正、反覆、繁殖）；舊人有己、新人無己；先生命、再關係、後事工；關係的次序是神、己、人、事。\n'+
 '請根據使用者這段期間的資料回應：一、具體指出神這段期間在他身上的恩典，只根據資料，不誇大、不奉承；二、誠實點出一個最需要修正的地方，連到舊人有己的根源；三、依八大步驟給下週一到三個具體、做得到的操練；四、引用一處和合本經文並註明出處，只引用你確定的經文；五、最後問一個幫助他反省的問題。\n'+
 '回答格式：語氣溫暖、簡潔，全文不超過四百字；小標題要短，可用條列；把最重要的那一句用「> 」標成引言。不要用程式碼區塊或唸不出來的裝飾符號。資料裡沒有的事不要編造。若使用者流露想傷害自己或他人的念頭，請溫柔地停下檢討，鼓勵他立刻聯絡信任的人或當地的緊急求助專線。請用'+(L==='zs'?'简体中文':'繁體中文')+'回答。\n'+
 '【禱告的寫法（一定要照做）】回答裡凡要寫禱告，那一段的小標題一律寫「憑信心禱告」，不要寫「為你禱告」「我為你禱告」或「一起禱告」。禱告前先用一句話邀請讀者自己開口，例如「請你憑信心，親口向主這樣禱告：」。禱告本身要用讀者的第一人稱（用「我」），寫成讀者自己向神說的話；不要寫成小智替讀者禱告。禱告要簡短、真誠、帶著信心交託與感恩，結尾一律用「奉主耶穌的名禱告，阿們。」',
 'You are “Xiaozhi”, a spiritual companion from Kingdom 321 Fellowship, walking with the user through a weekly, monthly or yearly review inside the 321 Steward app. You are a godly evangelical pastor who knows the 321 framework: the Three Foundations (Jesus is my role model, the Bible is my standard, the Holy Spirit is my guide), the Two Core Values (let Jesus reign, let Jesus have all the glory), and the Goal (establish God\'s system); the eight steps of changing one\'s mindset (information, revelation, conviction, practice, review, correction, repetition, multiplication); the old self that lives for self versus the new self of selflessness; life first, then relationships, then ministry; the order of relationships: God, self, others, work.\n'+
 'Based on the user\'s data for this period: 1) name specific evidence of God\'s grace in this period, only from the data, without exaggeration or flattery; 2) honestly point out the one area most needing correction and connect it to its self-centred root; 3) give one to three concrete, doable practices for next week, following the eight steps; 4) quote one Bible verse from the World English Bible with its reference, only a verse you are sure of; 5) end with one question for reflection.\n'+
 'Format: warm and concise, under 250 words, short headings and bullet points; mark the single most important sentence as a “> ” quote. No code blocks or decorative symbols. Do not invent anything not in the data. If the user expresses thoughts of harming themselves or others, gently pause the review and encourage them to contact someone they trust or a local emergency line right away. Answer in English.\n'+
 '[How to write prayers — always follow] Whenever you include a prayer, title that section “Pray in Faith”, never “I pray for you” or “Let us pray”. Introduce it with one line inviting the reader to pray it themselves, e.g. “In faith, pray this to the Lord in your own words:”. Write the prayer in the reader\'s first person (“I”), as their own words to God, not as Xiaozhi praying for them. Keep it short, sincere, trusting and thankful, and end with “In the name of the Lord Jesus we pray, Amen.”');
}
/* weekContext：見 plus */
function aiOne(msgs,cb){
 var tries=0;
 function go(){
  var x=new XMLHttpRequest();
  x.open('POST',AI_URL);x.setRequestHeader('Content-Type','application/json');x.timeout=70000;
  x.onload=function(){
   var out='',stop='';
   if(x.status>=200&&x.status<300){try{var d=JSON.parse(x.responseText);stop=d.stop_reason||(d.choices&&d.choices[0]&&d.choices[0].finish_reason)||'';if(d&&d.content&&d.content.length){for(var i=0;i<d.content.length;i++)out+=d.content[i].text||'';}else if(d)out=d.reply||d.text||d.message||'';}catch(e){}}
   if(out)cb(null,out,stop);else retry('http '+x.status);};
  x.onerror=function(){retry('network');};x.ontimeout=function(){retry('timeout');};
  try{x.send(JSON.stringify({system:aiSystem(),messages:msgs,max_tokens:1400}));}catch(e){retry('send');}
 }
 function retry(why){tries++;if(tries<3)setTimeout(go,tries*900);else cb(why);}
 go();
}
function aiTrunc(text,stop){
 if(stop==='max_tokens'||stop==='length')return 'sure';
 if(!stop&&text.length>600&&!/[。！？.!?」”）)\]*]\s*$/.test(text))return 'guess';
 return '';
}
function aiJoin(a,b){
 b=b.replace(/^\s*(好的|好|OK|Sure)[，,。.!！]?\s*/i,'');
 for(var n=Math.min(40,a.length,b.length);n>3;n--){if(a.slice(-n)===b.slice(0,n)){b=b.slice(n);break;}}
 if(/^\s*(#{1,6}\s|>\s)/.test(b))return a.replace(/\s+$/,'')+'\n\n'+b.replace(/^\s+/,'');
 if(/^\s*([-*•]\s|\d+[.、)]\s|\|)/.test(b))return a.replace(/\s+$/,'')+'\n'+b.replace(/^\s+/,'');
 return a+b;
}
function aiCall(msgs,cb){
 var acc='',rounds=0;
 function step(m){aiOne(m,function(err,out,stop){
  if(err){if(acc)cb(null,acc);else cb(err);return;}
  acc=acc?aiJoin(acc,out):out.replace(/^\s+|\s+$/g,'');
  var tr2=aiTrunc(acc,stop);rounds++;
  if(tr2&&rounds<(tr2==='sure'?5:2)){ui.aiCont=true;render();
   step(msgs.concat([{role:'assistant',content:acc},{role:'user',content:T('請從中斷的地方直接接著寫完，不要重複已經寫過的內容。','Please continue exactly where you stopped, without repeating anything.')}]));}
  else{ui.aiCont=false;cb(null,acc.replace(/\s+$/,''));}
 });}
 step(msgs);
}
function mdHtml(s){
 var lines=esc(s).split(/\n/),h='',inL=false,i,l;
 function inline(x){return x.replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>');}
 for(i=0;i<lines.length;i++){l=lines[i];
  var m=/^\s*(?:[-*•]|\d+[.、)])\s+(.*)$/.exec(l);
  if(m){if(!inL){h+='<ul>';inL=true;}h+='<li>'+inline(m[1])+'</li>';continue;}
  if(inL){h+='</ul>';inL=false;}
  if(/^\s*#{1,6}\s+/.test(l)){h+='<h4>'+inline(l.replace(/^\s*#{1,6}\s+/,''))+'</h4>';continue;}
  if(/^\s*&gt;\s?/.test(l)){h+='<blockquote>'+inline(l.replace(/^\s*&gt;\s?/,''))+'</blockquote>';continue;}
  if(/^\s*(-{3,}|\*{3,})\s*$/.test(l)||/^\s*$/.test(l))continue;
  h+='<p>'+inline(l)+'</p>';}
 if(inL)h+='</ul>';
 return h;
}
function mdStrip(s){return String(s).replace(/^\s*#{1,6}\s*/gm,'').replace(/\*\*|__|`/g,'').replace(/^\s*>\s?/gm,'').replace(/^\s*[-*•]\s+/gm,'・').replace(/\n{3,}/g,'\n\n').replace(/^\s+|\s+$/g,'');}
function aiQuote(s){var m=/^\s*>\s?(.+)$/m.exec(s);if(m)return mdStrip(m[1]);var t=mdStrip(s).replace(/\n+/g,' ');var max=L==='en'?300:140;return t.length>max?t.slice(0,max)+'…':t;}
function msgLong(s){return mdStrip(s).length>(L==='en'?420:200);}
function foldOld(chat){var lastA=-1,i;for(i=0;i<chat.length;i++)if(chat[i].role==='assistant')lastA=i;for(i=0;i<chat.length;i++){if(chat[i].role==='assistant')chat[i].fold=(i!==lastA&&msgLong(chat[i].content));}}
var FU={
 zh:[['下週第一步','請幫我把下週的操練排成每天做得到的小步驟。'],['憑信心禱告','請照你剛才的回答，寫一段我可以憑信心自己禱告的禱告。'],['舊人的根源','請再幫我看清楚，這週的問題背後，舊人有己的根源是什麼？'],['經文默想','請再給我一處合適的和合本經文，並帶我默想。'],['920 祝福','這週我可以怎樣具體祝福身邊的一個人？'],['時間次序','照神、己、人、事的次序，我下週的時間要怎麼調整？']],
 en:[['First step','Please break next week\'s practices into small steps I can do each day.'],['Pray in faith','Based on your answer, write a short prayer I can pray in faith myself.'],['The root','Help me see more clearly the self-centred root behind this week\'s struggle.'],['A verse','Give me one more fitting verse and walk me through a short meditation.'],['920 blessing','How can I bless one person around me in a concrete way this week?'],['Order of time','Following God, self, others, work, how should I adjust my time next week?']]
};
/* aiStart：見 plus */
/* aiAsk：見 plus */
/* aiCard：見 plus */

/* ---------- 回顧 ---------- */
function allSubs(){var r=[];for(var i=0;i<AREAS.length;i++)for(var j=0;j<AREAS[i].subs.length;j++)r.push({k:AREAS[i].k,n:tr(AREAS[i].subs[j])});return r;}
function radar(cur,prev){
 var subs=allSubs(),N=subs.length,cx=170,cy=160,R=105,s='',i,lv,fs=L==='en'?10:12;
 function pt(i,r){var an=(i*360/N-90)*Math.PI/180;return [cx+r*Math.cos(an),cy+r*Math.sin(an)];}
 function poly(vals){var p=[];for(var i=0;i<N;i++){var q=pt(i,R*vals[i]/10);p.push(q[0].toFixed(1)+','+q[1].toFixed(1));}return p.join(' ');}
 for(lv=2;lv<=10;lv+=2){var g=[];for(i=0;i<N;i++)g.push(lv);s+='<polygon points="'+poly(g)+'" fill="none" stroke="var(--line)" stroke-width="1"/>';}
 for(i=0;i<N;i++){var e=pt(i,R);s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+e[0].toFixed(1)+'" y2="'+e[1].toFixed(1)+'" stroke="var(--line)" stroke-width="1"/>';}
 if(prev)s+='<polygon points="'+poly(prev)+'" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 4"/>';
 s+='<polygon points="'+poly(cur)+'" fill="var(--accent)" fill-opacity=".16" stroke="var(--accent)" stroke-width="2"/>';
 for(i=0;i<N;i++){var q=pt(i,R*cur[i]/10);s+='<circle cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="3.5" fill="var(--'+subs[i].k+')"/>';
  var Lp=pt(i,R+14),anc=Lp[0]>cx+4?'start':Lp[0]<cx-4?'end':'middle',dy=Lp[1]<cy-R+5?-2:Lp[1]>cy+R-5?12:4;
  s+='<text x="'+Lp[0].toFixed(1)+'" y="'+(Lp[1]+dy).toFixed(1)+'" text-anchor="'+anc+'" font-size="'+fs+'" fill="var(--'+subs[i].k+')">'+esc(subs[i].n)+'</text>';}
 return '<svg class="radar" viewBox="-60 30 460 265" role="img" aria-label="'+T('生命之輪','Life wheel')+'">'+s+'</svg>';
}
function wheelVals(){if(ui.wheel)return ui.wheel;var last=S.wheels[S.wheels.length-1];ui.wheel=last?last.v.slice():[5,5,5,5,5,5,5,5,5,5,5,5];return ui.wheel;}
/* vReview：見 plus */

/* ---------- 外框 ---------- */
var TABS=[{v:'today',i:'home',g:['今','T'],s:['今日','Today']},{v:'god',i:'cross',g:['神','G'],s:['與神','God']},{v:'self',i:'self',g:['己','S'],s:['與己','Self']},{v:'people',i:'people',g:['人','O'],s:['與人','Others']},{v:'work',i:'gear',g:['事','W'],s:['與事','Work']},{v:'review',i:'chart',g:['省','R'],s:['回顧','Review']}];
var LANGS=[['zh','繁'],['zs','简'],['en','EN']];
function render(){
 var d=new Date(),WD=['日','一','二','三','四','五','六'],WE=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],ME=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 document.documentElement.lang=L==='en'?'en':(L==='zs'?'zh-Hans':'zh-Hant');
 document.title=T('321管家','321 Steward');
 $('brandName').textContent=T('管家','Steward');
 $('hdate').textContent=L==='en'?WE[d.getDay()]+', '+ME[d.getMonth()]+' '+d.getDate():T(d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日 星期'+WD[d.getDay()],'');
 var lh='';for(var j=0;j<LANGS.length;j++)lh+='<button data-act="lang" data-id="'+LANGS[j][0]+'" aria-pressed="'+(L===LANGS[j][0])+'"'+(L===LANGS[j][0]?' class="on"':'')+'>'+LANGS[j][1]+'</button>';
 $('langs').innerHTML=lh;
 var th='';
 for(var i=0;i<TABS.length;i++){var b=TABS[i],isA=b.v!=='today'&&b.v!=='review';
  th+='<button class="tab'+(view===b.v?' on':'')+'" data-act="go" data-id="'+b.v+'"'+(isA?' style="'+cvars(b.v)+'"':'')+(view===b.v?' aria-current="page"':'')+'>'+ic(b.i,24)+'<span>'+tr(b.s)+'</span></button>';}
 $('tabs').innerHTML=th;
 applyChrome();
 var ub=$('updbar');if(ub)ub.textContent=T('已有新版本，點這裡立即更新','New version available — tap to update');
 $('main').innerHTML=view==='today'?vToday():view==='review'?vReview():vArea(view);
 spkSync();updIdle();
}
function find(arr,id){for(var i=0;i<arr.length;i++){if(arr[i].id===id)return i;}return -1;}
function okUrl(u){return /^https:\/\/[^\s]+$/.test(u);}

document.addEventListener('click',function(e){
 var el=e.target;
 while(el&&el!==document&&!(el.getAttribute&&el.getAttribute('data-act')))el=el.parentNode;
 if(!el||el===document)return;
 var act=el.getAttribute('data-act'),id=el.getAttribute('data-id'),t=ds(),i,x;
 switch(act){
 case 'splash':showSplash();return;
 case 'speak':speak(id,SPK[id+':t']);return;
 case 'felOpen':felOpen();return;
 case 'felClose':felClose(false);return;
 case 'vcard':openCard(vt(id),(function(){for(var q=0;q<VERSES.length;q++)if(VERSES[q][0]===id)return T(VERSES[q][1],VERSES[q][2]);return '';})(),'');return;
 case 'vcardA':x=area(id);openCard(vt(x.v),tr(x.r),tr(x.motto));return;
 case 'vshare':for(i=0;i<VERSES.length;i++){if(VERSES[i][0]===id){shareText((L==='en'?'“':'「')+vt(id)+(L==='en'?'”':'」')+'\n—— '+T(VERSES[i][1],VERSES[i][2]));break;}}return;
 case 'cardTpl':CARD.tpl=id;renderCard();return;
 case 'cardSize':CARD.size=id;renderCard();return;
 case 'cardShare':shareCard();return;
 case 'cardClose':closeCard();return;
 case 'cardMask':if(e.target===el)closeCard();return;
 case 'copy':(function(txt){try{navigator.clipboard.writeText(txt).then(function(){toast(T('已複製 ','Copied ')+txt);},function(){toast(txt);});}catch(err){toast(txt);}})(id);return;
 case 'fs':SET.font=(SET.font+1)%4;saveSet();applyChrome();toast(T('字級：','Text size: ')+tr(FS_NAMES[SET.font]));if(view==='review')render();return;
 case 'fsSet':SET.font=+id;saveSet();applyChrome();render();return;
 case 'theme':SET.theme=id;saveSet();applyChrome();render();return;
 case 'checkUpd':checkUpdate(true);return;
 case 'hardUpd':UPD.pending=UPD.pending||'hard';applyUpdate(true);return;
 case 'updNow':applyUpdate(false);return;
 case 'aiFold':(function(){var rv=aiHolder();if(!rv||!rv.chat[+id])return;var m=rv.chat[+id];m.fold=!m.fold;save();var box=$('msg'+id);if(box){box.classList.toggle('fold',m.fold);el.textContent=m.fold?T('展開全文 ▾','Show all ▾'):T('收合 ▴','Collapse ▴');if(m.fold&&box.scrollIntoView)box.scrollIntoView({block:'nearest'});}})();return;
 case 'aiShare':(function(){var rv=aiHolder();if(rv&&rv.chat[+id])shareText(T('【小智週檢討】','[Weekly review]')+'\n'+mdStrip(rv.chat[+id].content));})();return;
 case 'aiImg':(function(){var rv=aiHolder();if(rv&&rv.chat[+id])openCard(aiQuote(rv.chat[+id].content),'',T('小智週檢討','Weekly review with Xiaozhi'));})();return;
 case 'aiFu':if(!ui.aiBusy){var fu=FU[L==='en'?'en':'zh'][+id];aiAsk(T(fu[1],fu[1]));}return;
 case 'enter':hideSplash();return;
 case 'go':stopSpeak();view=id;ui.reset=false;ui.schedTask=null;render();window.scrollTo(0,0);return;
 case 'lang':stopSpeak();CARD.fontTried=0;L=id;try{localStorage.setItem(LKEY,L);}catch(err){}ui.wheel=null;render();return;
 case 't3':if(!S.top3[t])S.top3[t]=[{t:'',d:0},{t:'',d:0},{t:'',d:0}];x=S.top3[t][+id];x.d=x.d?0:1;break;
 case 'hab':i=find(S.habits,id);if(i<0)return;x=S.habits[i];if(x.log[t])delete x.log[t];else x.log[t]=1;break;
 case 'delTask':i=find(S.tasks,id);if(i>=0)S.tasks.splice(i,1);break;
 case 'schedTask':ui.schedTask=ui.schedTask===id?null:id;render();return;
 case 'schedCancel':ui.schedTask=null;render();return;
 case 'schedSave':i=find(S.tasks,id);if(i<0)return;x=S.tasks[i];
  var st=val('st_s'),en=val('st_e'),day=x.due&&x.due>=t?x.due:t;
  if(!st||!en||st>=en){toast(T('結束時間要晚於開始時間','End time must be after start time'));return;}
  if(pushToPlanner(day,x.title,st,en)){ui.schedTask=null;toast(T('已排入每日得勝 ','Added to Daily Victory ')+md(day));render();}else toast(T('寫入失敗，請稍後再試','Could not save, try again'));
  return;
 case 'schedDay':ui.schedOff=ui.schedOff?0:1;render();return;
 case 'calAdd':x=calUrlFrom(val('cal_u'));
  if(!x){toast(T('請貼上 https 或 webcal 開頭的網址','Paste a link starting with https or webcal'));return;}
  for(i=0;i<S.cals.length;i++){if(S.cals[i].url===x){toast(T('這個日曆已經連結了','Already linked'));return;}}
  var cn=val('cal_n')||(isFeed(x)?T('每日得勝','Daily Victory'):T('Google 日曆','Google Calendar'));
  var nc={id:uid(),name:cn,url:x,color:CAL_COLORS[S.cals.length%CAL_COLORS.length]};S.cals.push(nc);save();ui.calSet=true;render();
  toast(T('正在讀取 ','Loading ')+cn+'…');calFetch(nc,true,function(err){toast(err?T('讀不到這個日曆，請確認網址','Could not read this calendar; check the link'):T('已連結 ','Linked ')+cn);});return;
 case 'calDel':i=find(S.cals,id);if(i>=0){delete CALC[id];saveCalc();S.cals.splice(i,1);}toast(T('已移除','Removed'));break;
 case 'calRefresh':refreshCals(true);toast(T('正在更新時程…','Updating…'));render();return;
 case 'calSet':ui.calSet=!ui.calSet;render();return;
 case 'delPerson':i=find(S.people,id);if(i>=0)S.people.splice(i,1);break;
 case 'delMoney':i=find(S.money,id);if(i>=0)S.money.splice(i,1);break;
 case 'saveWheel':var w=wheelVals().slice();
  for(i=0;i<S.wheels.length;i++){if(S.wheels[i].date===t){S.wheels.splice(i,1);break;}}
  S.wheels.push({date:t,v:w});ui.wheel=null;toast(T('已儲存生命之輪','Life wheel saved'));break;
 case 'aiStart':if(!ui.aiBusy)aiStart();return;
 case 'aiAsk':if(!ui.aiBusy)aiAsk();return;
 case 'clearEx':S.tasks=S.tasks.filter(function(o){return !o.ex;});S.people=S.people.filter(function(o){return !o.ex;});S.money=S.money.filter(function(o){return !o.ex;});toast(T('已清除範例','Samples cleared'));break;
 case 'backup':ui.backup=!ui.backup;render();return;
 case 'copyBk':var ta=$('bk');
  try{navigator.clipboard.writeText(ta.value).then(function(){toast(T('已複製','Copied'));},function(){ta.focus();ta.select();toast(T('請長按選取並複製','Long-press to select and copy'));});}
  catch(err){ta.focus();ta.select();toast(T('請長按選取並複製','Long-press to select and copy'));}
  return;
 case 'importData':
  try{var o=JSON.parse(val('imp'));if(!o||!(o.habits instanceof Array))throw 0;S=norm(o);ui.wheel=null;save();render();toast(T('已還原備份','Backup restored'));}
  catch(err){toast(T('備份文字不完整，請重新貼上','The backup text is incomplete; paste it again'));}
  return;
 case 'resetAsk':ui.reset=true;render();return;
 case 'resetNo':ui.reset=false;render();return;
 case 'resetYes':S=seed();S.onb=1;S.tasks=[];S.people=[];S.money=[];ui.reset=false;ui.wheel=null;toast(T('已清空','Erased'));break;
 default:if(plusAct(act,id,el,e))return;return;
 }
 save();render();
});
document.addEventListener('keydown',function(e){if(e.key==='Enter'&&e.target&&e.target.id==='ai_q'&&!ui.aiBusy){e.preventDefault();aiAsk();}});
document.addEventListener('input',function(e){
 var el=e.target,b=el.getAttribute&&el.getAttribute('data-bind');if(!b)return;
 var t=ds(),f=el.getAttribute('data-f'),id=el.getAttribute('data-id'),pb=plusBind(b,el,f,id);
 if(pb){if(pb!=='nosave')save();return;}
 if(b==='t3'){if(!S.top3[t])S.top3[t]=[{t:'',d:0},{t:'',d:0},{t:'',d:0}];S.top3[t][+id].t=el.value;}
 else if(b==='j'){if(!S.journal[t])S.journal[t]={};S.journal[t][f]=el.value;}
 else if(b==='rv'){var wk=weekKey(t);if(!S.reviews[wk])S.reviews[wk]={};S.reviews[wk][f]=el.value;}
 else if(b==='name'){S.name=el.value;}
 else if(b==='cardn'){CARD.n=el.value;paintCard();return;}
 else if(b==='w'){var w=wheelVals();w[+id]=+el.value;$('wv_'+id).textContent=el.value;var last=S.wheels[S.wheels.length-1];$('radar').innerHTML=radar(w,last?last.v:null);return;}
 save();
});
window.addEventListener('storage',function(e){if(e.key&&e.key.indexOf('p4_sched')===0&&view==='today')render();});

/*EXT*/
/*GCAL*/
/*PLUS*/
var SKEY='steward321.splash';
function showSplash(){
 var now=new Date(),hr=now.getHours(),greet=hr<5?T('夜深了','Late night'):hr<11?T('早安','Good morning'):hr<18?T('午安','Good afternoon'):T('晚安','Good evening');
 var el=$('splash');
 el.innerHTML='<img src="hero.jpg" alt="'+T('321管家主視覺','321 Steward key visual')+'" width="1080" height="1080"><p>'+greet+(S.name?T('，',', ')+esc(S.name):'')+T('。忠心的管家，從親近神開始。','. A faithful steward begins with drawing near to God.')+'</p><button class="btn gold" data-act="enter">'+T('進入今天','Enter today')+'</button>';
 el.hidden=false;
}
function hideSplash(){$('splash').hidden=true;try{localStorage.setItem(SKEY,ds());}catch(e){}}
applyChrome();
render();
refreshCals(false);
felLoad();
updInit();
(function(){var seen='';try{seen=localStorage.getItem(SKEY)||'';}catch(e){}if(!S.onb)showOnb();else if(seen!==ds())showSplash();if(lockOn())showLock();})();
})();
