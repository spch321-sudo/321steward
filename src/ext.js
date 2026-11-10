/* ================= 321 App 共用功能（ES5）：字級、主題、朗讀、經文美圖、空中團契、自動更新、小智強化 ================= */
var APPVER='@@VER@@';
var SETK='steward321.set',SET={font:0,theme:''};
try{var _st=JSON.parse(localStorage.getItem(SETK)||'{}');if(_st){SET.font=+_st.font||0;SET.theme=_st.theme||'';}}catch(e){}
function saveSet(){try{localStorage.setItem(SETK,JSON.stringify(SET));}catch(e){}}
var FS_NAMES=[['標準','Standard'],['大','Large'],['特大','Extra large'],['超大','Huge']];
function applyChrome(){
 var h=document.documentElement,c=['fs-lg','fs-xl','fs-xxl'];
 for(var i=0;i<c.length;i++)h.classList.remove(c[i]);
 if(SET.font>0)h.classList.add(c[SET.font-1]);
 if(SET.theme)h.setAttribute('data-theme',SET.theme);else h.removeAttribute('data-theme');
}

/* ---------- 朗讀（單一 audio、背景接續、失敗改用裝置語音） ---------- */
var TTS_URL='https://azure-tts.spch321.workers.dev';
var VOICE={zh:'zh-TW-YunJheNeural',zs:'zh-CN-Yunfan:DragonHDLatestNeural',en:'en-US-AndrewNeural'};
var SILENT_WAV='data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAgD4AAAB9AAACABAAZGF0YQAAAAA=';
var TTS={el:null,unlocked:false,key:'',segs:[],urls:{},want:-1,gen:0,lock:null};
var SPK={};
function ttsEl(){if(!TTS.el){TTS.el=document.createElement('audio');TTS.el.setAttribute('playsinline','');document.body.appendChild(TTS.el);}return TTS.el;}
function ttsUnlock(){var a=ttsEl();if(TTS.unlocked)return;TTS.unlocked=true;try{a.src=SILENT_WAV;var p=a.play();if(p&&p.catch)p.catch(function(){});}catch(e){}}
var EMOJI_RE=/[\uD83C-\uD83E][\uDC00-\uDFFF]|[←-⇿⌀-⏿■-➿⬀-⯿☀-⛿️‍⃣]/g;
var BKSAY={'詩篇':1};
function refSay(r){
 if(L==='en')return r.replace(/^(.*?)\s+(\d+):(\d+)(?:-(\d+))?$/,function(m,b,c,v,v2){return b+' chapter '+c+' verse '+v+(v2?' to '+v2:'');});
 return r.replace(/^(.*?)\s*(\d+):(\d+)(?:-(\d+))?$/,function(m,b,c,v,v2){return b+c+(b==='詩篇'||b==='诗篇'?'篇':'章')+v+(v2?'到'+v2:'')+T('節','节');});
}
function ttsPrep(t){
 t=String(t||'').replace(EMOJI_RE,'').replace(/〔[^〕]*〕/g,'').replace(/\[[^\]]*\]/g,'');
 t=t.replace(/^\s*#{1,6}\s*/gm,'').replace(/\*\*|__|`/g,'').replace(/^\s*>\s?/gm,'').replace(/^\s*[-*•]\s+/gm,'').replace(/\|/g,'，');
 if(L==='en')return t.replace(/\s+/g,' ').replace(/\s+([,.;:!?])/g,'$1').replace(/\b321\b/g,'3 2 1');
 t=t.replace(/[「」『』《》〈〉“”]/g,'').replace(/[（(]([^）)]*)[）)]/g,'，$1，').replace(/——|—/g,'，');
 t=t.replace(/321/g,'三二一').replace(/920/g,'九二零').replace(/235/g,'二三五');
 t=t.replace(/與主同行|與神同行/g,function(m){return m.charAt(0)+m.charAt(1)+'同形';}).replace(/得著/g,'得着').replace(/數算/g,'鼠算').replace(/重生/g,'蟲生').replace(/教會/g,'叫會').replace(/應許/g,'英許');
 return t.replace(/\n+/g,'。').replace(/[，。]{2,}/g,'。');
}
function ttsSplit(t){
 var max=L==='en'?320:130,parts=L==='en'?t.match(/[^.!?]+[.!?]*\s*/g)||[t]:t.match(/[^。！？；]+[。！？；]*/g)||[t],out=[],cur='';
 for(var i=0;i<parts.length;i++){var p=parts[i];if(!p.replace(/\s/g,''))continue;if(cur&&(cur+p).length>max){out.push(cur);cur='';}cur+=p;}
 if(cur)out.push(cur);return out;
}
function spkSync(){
 var bs=document.querySelectorAll('[data-act="speak"]');
 for(var i=0;i<bs.length;i++){var on=TTS.key&&bs[i].getAttribute('data-id')===TTS.key;bs[i].classList.toggle('on',!!on);var lb=bs[i].querySelector('.lb');if(lb)lb.textContent=on?T('停止','Stop'):T('朗讀','Listen');}
}
function stopSpeak(){
 TTS.gen++;var a=TTS.el;if(a){a.onended=null;a.onerror=null;try{a.pause();}catch(e){}}
 for(var k in TTS.urls){try{URL.revokeObjectURL(TTS.urls[k]);}catch(e){}}
 TTS.urls={};TTS.segs=[];TTS.want=-1;TTS.key='';
 try{if(window.speechSynthesis)speechSynthesis.cancel();}catch(e){}
 if(TTS.lock){try{TTS.lock.release();}catch(e){}TTS.lock=null;}
 try{if(navigator.mediaSession)navigator.mediaSession.playbackState='none';}catch(e){}
 spkSync();
}
function ttsFetch(i,gen,tries){
 if(TTS.urls[i]||i>=TTS.segs.length)return;
 TTS.urls[i]='…';
 var x=new XMLHttpRequest();x.open('POST',TTS_URL);x.setRequestHeader('Content-Type','application/json');x.responseType='arraybuffer';x.timeout=25000;
 function fail(){if(gen!==TTS.gen)return;delete TTS.urls[i];if((tries||0)<2){setTimeout(function(){ttsFetch(i,gen,(tries||0)+1);},800*((tries||0)+1));}else{TTS.urls[i]='x';if(TTS.want===i)ttsFallback(i,gen);}}
 x.onload=function(){if(gen!==TTS.gen)return;if(x.status>=200&&x.status<300&&x.response&&x.response.byteLength>128){TTS.urls[i]=URL.createObjectURL(new Blob([x.response],{type:'audio/mpeg'}));if(TTS.want===i)ttsPlay(i,gen);}else fail();};
 x.onerror=x.ontimeout=fail;
 try{x.send(JSON.stringify({voice:VOICE[L]||VOICE.zh,rate:'+0%',sil:140,silc:140,sile:260,text:TTS.segs[i]}));}catch(e){fail();}
}
function ttsPlay(i,gen){
 if(gen!==TTS.gen)return;
 if(i>=TTS.segs.length){stopSpeak();return;}
 TTS.want=i;ttsFetch(i+1,gen);ttsFetch(i+2,gen);
 var u=TTS.urls[i];
 if(!u||u==='…'){ttsFetch(i,gen);return;}
 if(u==='x'){ttsFallback(i,gen);return;}
 var a=ttsEl();a.onended=function(){ttsPlay(i+1,gen);};a.onerror=function(){TTS.urls[i]='x';ttsFallback(i,gen);};
 a.src=u;var p=a.play();if(p&&p.catch)p.catch(function(){ttsFallback(i,gen);});
}
function ttsFallback(i,gen){
 if(gen!==TTS.gen)return;
 if(!window.speechSynthesis){toast(T('無法朗讀，請檢查網路','Cannot read aloud; check your connection'));stopSpeak();return;}
 if(!TTS.fbTold){TTS.fbTold=1;toast(T('改用裝置內建語音朗讀','Using the device voice'));}
 var u=new SpeechSynthesisUtterance(TTS.segs.slice(i).join(' '));u.lang=L==='en'?'en-US':(L==='zs'?'zh-CN':'zh-TW');u.rate=.95;
 u.onend=function(){if(gen===TTS.gen)stopSpeak();};
 TTS.want=-2;speechSynthesis.cancel();speechSynthesis.speak(u);
}
function speak(key,title){
 var text=SPK[key];
 if(TTS.key===key){stopSpeak();return;}
 stopSpeak();ttsUnlock();if(!text)return;
 TTS.key=key;TTS.segs=ttsSplit(ttsPrep(text));TTS.fbTold=0;var gen=TTS.gen;
 try{if(navigator.mediaSession&&window.MediaMetadata){navigator.mediaSession.metadata=new MediaMetadata({title:title||T('321管家','321 Steward'),artist:T('國度321空中團契','Kingdom 321 Fellowship'),artwork:[{src:'icon-v2-512.png',sizes:'512x512',type:'image/png'}]});
  navigator.mediaSession.setActionHandler('pause',stopSpeak);navigator.mediaSession.setActionHandler('stop',stopSpeak);navigator.mediaSession.playbackState='playing';}}catch(e){}
 try{if(navigator.wakeLock)navigator.wakeLock.request('screen').then(function(l){TTS.lock=l;},function(){});}catch(e){}
 spkSync();ttsPlay(0,gen);
}
function spkBtn(key,text,title){SPK[key]=text;SPK[key+':t']=title||'';return '<button class="btn ghost sm'+(TTS.key===key?' on':'')+'" data-act="speak" data-id="'+key+'">'+ic('sound',16)+'<span class="lb">'+(TTS.key===key?T('停止','Stop'):T('朗讀','Listen'))+'</span></button>';}

/* ---------- 經文美圖 ---------- */
var CARD={t:'',ref:'',n:'',tpl:'navy',size:'s'};
var CARD_TPL={
 navy:{bg:['#1D3A6E','#14294F','#0B1833'],ink:'#F5EEDC',gold:'#E2B65C',sub:'#C9D3E6'},
 dawn:{bg:['#FBE9D2','#F3D3B0','#E6B48C'],ink:'#3B2A1A',gold:'#A0651C',sub:'#6E5440'},
 paper:{bg:['#FBF8F1','#F4EFE3','#EDE6D6'],ink:'#2A2620',gold:'#A9781D',sub:'#6B6355'},
 photo:{bg:['#0E1A33','#0E1A33','#0E1A33'],ink:'#FFFFFF',gold:'#F0C977',sub:'#E5E9F2',photo:1}
};
var CARD_SIZE={s:[1080,1080],t:[1080,1350],p:[1080,1920]};
var HERO_IMG=null;
function cardFont(serif,px,b){var f=L==='en'?(serif?'Georgia,"Times New Roman",serif':'Helvetica,Arial,sans-serif'):(L==='zs'?(serif?'"Noto Serif SC","Songti SC","STSong","SimSun",serif':'"Noto Sans SC","PingFang SC",sans-serif'):(serif?'"Noto Serif TC","Songti TC","PMingLiU",serif':'"Noto Sans TC","PingFang TC",sans-serif'));return (b?'700 ':'400 ')+px+'px '+f;}
var NO_START='，。、；：？！）」』】》〉·…—％”’',NO_END='（「『【《〈“‘';
function wrapLines(ctx,text,maxW){
 var lines=[],cur='',i,ch;
 if(L==='en'){var ws=text.split(/\s+/);for(i=0;i<ws.length;i++){var t2=cur?cur+' '+ws[i]:ws[i];if(ctx.measureText(t2).width>maxW&&cur){lines.push(cur);cur=ws[i];}else cur=t2;}if(cur)lines.push(cur);return lines;}
 for(i=0;i<text.length;i++){ch=text.charAt(i);
  if(ctx.measureText(cur+ch).width>maxW&&cur&&NO_START.indexOf(ch)<0){
   if(NO_END.indexOf(cur.charAt(cur.length-1))>=0){var last=cur.charAt(cur.length-1);lines.push(cur.slice(0,-1));cur=last+ch;}else{lines.push(cur);cur=ch;}
  }else cur+=ch;}
 if(cur)lines.push(cur);return lines;
}
function drawCard(cv){
 var sz=CARD_SIZE[CARD.size],W=sz[0],H=sz[1],tp=CARD_TPL[CARD.tpl],x=cv.getContext('2d'),i;
 cv.width=W;cv.height=H;
 var g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,tp.bg[0]);g.addColorStop(.55,tp.bg[1]);g.addColorStop(1,tp.bg[2]);x.fillStyle=g;x.fillRect(0,0,W,H);
 if(tp.photo&&HERO_IMG&&HERO_IMG.complete){var iw=HERO_IMG.naturalWidth,ih=HERO_IMG.naturalHeight,sc=Math.max(W/iw,H/ih);x.drawImage(HERO_IMG,(W-iw*sc)/2,(H-ih*sc)/2,iw*sc,ih*sc);
  var ov=x.createLinearGradient(0,0,0,H);ov.addColorStop(0,'rgba(9,18,40,.80)');ov.addColorStop(.5,'rgba(9,18,40,.86)');ov.addColorStop(1,'rgba(9,18,40,.80)');x.fillStyle=ov;x.fillRect(0,0,W,H);}
 var m=Math.round(W*.06);x.strokeStyle=tp.gold;x.globalAlpha=.55;x.lineWidth=3;x.strokeRect(m,m,W-2*m,H-2*m);x.globalAlpha=.3;x.lineWidth=1.5;x.strokeRect(m+14,m+14,W-2*m-28,H-2*m-28);x.globalAlpha=1;
 x.textAlign='center';x.textBaseline='middle';
 var top=m+90,grp=T('國度321空中團契','Kingdom 321 Fellowship');
 x.font=cardFont(false,34,true);x.fillStyle=tp.gold;x.fillText(grp,W/2,top);
 var gw=x.measureText(grp).width;x.fillRect(W/2-gw/2-90,top-1,60,2);x.fillRect(W/2+gw/2+30,top-1,60,2);
 var inner=W-2*m-140,body=!CARD.t?'':(/[「“『]/.test(CARD.t)?CARD.t:(L==='en'?'“'+CARD.t+'”':'「'+CARD.t+'」'));
 var fs=L==='en'?60:66,lines,lh,noteLines=[],nfs=36;
 var avail=H-2*m-320-(CARD.n?220:0);
 for(;fs>=34;fs-=2){x.font=cardFont(true,fs,true);lines=wrapLines(x,body,inner);lh=fs*1.55;if(lines.length*lh<=avail)break;}
 if(CARD.n){x.font=cardFont(false,nfs,false);noteLines=wrapLines(x,CARD.n,inner);if(noteLines.length>4){noteLines=noteLines.slice(0,4);noteLines[3]=noteLines[3].slice(0,-1)+'…';}}
 var blockH=lines.length*lh+90+(noteLines.length?60+noteLines.length*nfs*1.6:0),y=Math.max(top+90,(H-blockH)/2+20);
 x.fillStyle=tp.ink;x.font=cardFont(true,fs,true);
 for(i=0;i<lines.length;i++)x.fillText(lines[i],W/2,y+i*lh+lh/2);
 y+=lines.length*lh+40;
 if(CARD.ref){x.font=cardFont(false,34,false);x.fillStyle=tp.gold;x.fillText('— '+CARD.ref+' —',W/2,y);}
 if(noteLines.length){y+=60;x.fillStyle=tp.gold;for(i=-2;i<=2;i++){x.beginPath();x.arc(W/2+i*22,y,3.5,0,Math.PI*2);x.fill();}
  y+=46;x.font=cardFont(false,nfs,false);x.fillStyle=tp.sub;for(i=0;i<noteLines.length;i++)x.fillText(noteLines[i],W/2,y+i*nfs*1.6);}
 x.font=cardFont(false,28,false);x.fillStyle=tp.sub;x.globalAlpha=.85;x.fillText(T('321管家','321 Steward')+'  ·  spch321-sudo.github.io/321steward',W/2,H-m-56);x.globalAlpha=1;
}
function openCard(t,ref,n){
 stopSpeak();CARD.t=t||'';CARD.ref=ref||'';CARD.n=n||'';
 if(!HERO_IMG){HERO_IMG=new Image();HERO_IMG.onload=function(){if(CARD.tpl==='photo')paintCard();};HERO_IMG.src='hero.jpg';}
 ui.card=true;renderCard();
}
function renderCard(){
 var el=$('sheet'),h='',k;
 h+='<div class="sheet-card" role="dialog" aria-label="'+T('經文美圖','Verse card')+'"><div class="sh-hd"><b>'+ic('image',18)+T('經文美圖','Verse card')+'</b><button class="x" data-act="cardClose" aria-label="'+T('關閉','Close')+'">×</button></div>';
 h+='<div class="cardwrap"><canvas id="cardcv" aria-label="'+T('卡片預覽','Card preview')+'"></canvas></div>';
 h+='<div class="seg">';var TN={navy:['深藍','Navy'],dawn:['晨光','Dawn'],paper:['素紙','Paper'],photo:['主視覺','Photo']};
 for(k in CARD_TPL)h+='<button data-act="cardTpl" data-id="'+k+'"'+(CARD.tpl===k?' class="on"':'')+'>'+tr(TN[k])+'</button>';
 h+='</div><div class="seg">';var SN={s:['方形 1:1','Square'],t:['直式 4:5','Portrait 4:5'],p:['限動 9:16','Story 9:16']};
 for(k in CARD_SIZE)h+='<button data-act="cardSize" data-id="'+k+'"'+(CARD.size===k?' class="on"':'')+'>'+tr(SN[k])+'</button>';
 h+='</div><label class="f" for="card_n">'+T('卡片下方的話（可空白）','Words under the verse (optional)')+'<textarea id="card_n" data-bind="cardn" placeholder="'+T('寫一句你的領受或祝福','A line of insight or blessing')+'">'+esc(CARD.n)+'</textarea></label>';
 h+='<div class="btns"><button class="btn" data-act="cardShare">'+ic('share',16)+T('分享／存圖','Share / save')+'</button><button class="btn ghost" data-act="cardClose">'+T('完成','Done')+'</button></div><div id="cardimg"></div></div>';
 el.innerHTML='<div class="sheet-mask" data-act="cardMask">'+h+'</div>';el.hidden=false;
 paintCard();
}
function paintCard(){var cv=$('cardcv');if(!cv)return;drawCard(cv);
 if(document.fonts&&document.fonts.load&&!CARD.fontTried){CARD.fontTried=1;var fam=L==='zs'?'Noto Serif SC':'Noto Serif TC';Promise.all([document.fonts.load('700 40px "'+fam+'"'),document.fonts.load('400 30px "Noto Sans TC"')]).then(function(){var c2=$('cardcv');if(c2)drawCard(c2);},function(){});}}
function closeCard(){ui.card=false;$('sheet').hidden=true;$('sheet').innerHTML='';}
function shareCard(){
 var cv=$('cardcv');if(!cv)return;
 function showImg(){var u;try{u=cv.toDataURL('image/png');}catch(e){toast(T('無法產生圖片','Could not create the image'));return;}$('cardimg').innerHTML='<p class="empty">'+T('長按圖片即可儲存或分享','Long-press the image to save or share')+'</p><img src="'+u+'" alt="'+T('經文美圖','Verse card')+'">';}
 if(!cv.toBlob){showImg();return;}
 cv.toBlob(function(b){
  if(!b){showImg();return;}
  var f=null;try{f=new File([b],'321steward-card.png',{type:'image/png'});}catch(e){}
  if(f&&navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:T('321管家','321 Steward')}).then(function(){},function(){showImg();});}
  else showImg();
 },'image/png');
}
function shareText(txt){
 var full=txt+'\n\n—— '+T('國度321空中團契','Kingdom 321 Fellowship')+'\nhttps://spch321-sudo.github.io/321steward/';
 if(navigator.share){navigator.share({text:full}).then(function(){},function(){});return;}
 try{navigator.clipboard.writeText(full).then(function(){toast(T('已複製，可以貼上分享','Copied, ready to paste'));},function(){toast(T('請長按選取文字分享','Long-press to copy'));});}catch(e){toast(T('請長按選取文字分享','Long-press to copy'));}
}

/* ---------- 國度321空中團契 ---------- */
var FEL_URL='https://spch321-sudo.github.io/321fellowship/';
var FEL_DEF={meetings:[{days:[1,2,3,4,5,6],start:'06:00',end:'07:00',title:'晨讀'},{days:[1,2,3,4,5],start:'12:10',end:'13:00',title:'午修靈糧'},{days:[1,2,3,4,5],start:'21:00',end:'22:00',title:'晚禱'}],
 zoom:{url:'https://zoom.us/j/8193972372?pwd=o3tuX9k87Lyhb3UEV7hgRtSUYVyI1Q.1',id:'819 397 2372',pw:'321'},youtube:'https://www.youtube.com/@kingdom321air',
 offering:[{country:'台灣',holder:'社團法人中華活力全人關懷協會',bank:'新光商業銀行 新埔分行',account:'(103) 0338101013000'},{country:'馬來西亞',holder:'馬來西亞安提阿教會',bank:'Public Bank',account:'3178557627'},{country:'紐西蘭',holder:'Bin Lu',bank:'ASB Bank Auckland Branch',account:'12-3231-0055109-00'},{country:'新加坡',holder:'LEE CHEW YONG',bank:'DBS My Account',account:'275-153637-9'},{country:'中國',holder:'微信支付',holderEn:'WeChat Pay',bank:'',account:''}]};
var MT_EN={'晨讀':'Morning Reading 321','晨讀321':'Morning Reading 321','午修靈糧':'Midday Devotion','晚禱':'Evening Prayer'};
var CTRY_EN={'台灣':'Taiwan','馬來西亞':'Malaysia','紐西蘭':'New Zealand','新加坡':'Singapore','中國':'China'};
var FEL=FEL_DEF;
try{var _fc=JSON.parse(localStorage.getItem('steward321.fel')||'null');if(_fc&&_fc.meetings)FEL=_fc;}catch(e){}
var CN_WD={'日':0,'一':1,'二':2,'三':3,'四':4,'五':5,'六':6};
function parseDays(s){
 s=String(s||'');var m=/週?([一二三四五六日])\s*[至到~～-]\s*週?([一二三四五六日])/.exec(s),out=[],a,b,i;
 if(/每天|每日|daily/i.test(s))return [0,1,2,3,4,5,6];
 if(m){a=CN_WD[m[1]];b=CN_WD[m[2]];if(b===0)b=7;for(i=a;i<=b;i++)out.push(i%7);return out;}
 var r=/[一二三四五六日]/g,x;while((x=r.exec(s))!==null)out.push(CN_WD[x[0]]);
 return out.length?out:[0,1,2,3,4,5,6];
}
function felLoad(){
 var x=new XMLHttpRequest();
 try{x.open('GET',FEL_URL+'data.json?t='+Date.now());}catch(e){return;}
 x.timeout=15000;
 x.onload=function(){
  if(x.status<200||x.status>=300)return;
  try{var d=JSON.parse(x.responseText),ms=[],i;
   for(i=0;i<(d.meetings||[]).length;i++){var mt=d.meetings[i],tm=String(mt.time||'').split(/[–\-~～]/);if(tm.length<2)continue;ms.push({days:parseDays(mt.day),start:tm[0].replace(/\s/g,''),end:tm[1].replace(/\s/g,''),title:mt.title||'',link:mt.link||''});}
   var L2=d.links||{},z=L2.zoom||{};
   FEL={meetings:ms.length?ms:FEL_DEF.meetings,zoom:{url:z.url||FEL_DEF.zoom.url,id:z.meetingId||FEL_DEF.zoom.id,pw:z.passcode||FEL_DEF.zoom.pw},youtube:(L2.youtube&&L2.youtube.url)||FEL_DEF.youtube,offering:L2.offering&&L2.offering.length?L2.offering:FEL_DEF.offering};
   try{localStorage.setItem('steward321.fel',JSON.stringify(FEL));}catch(e){}
   if(view==='today')render();
  }catch(e){}
 };
 try{x.send();}catch(e){}
}
var TPE=8*36e5;
function nextMeet(now){
 now=now||Date.now();var best=null,list=FEL.meetings||[],i,k;
 var tp=new Date(now+TPE),base=Date.UTC(tp.getUTCFullYear(),tp.getUTCMonth(),tp.getUTCDate());
 for(i=0;i<list.length;i++){var mt=list[i],sp=mt.start.split(':'),ep=mt.end.split(':');
  for(k=0;k<8;k++){var day=new Date(base+k*864e5);if(mt.days.indexOf(day.getUTCDay())<0)continue;
   var st=base+k*864e5+(+sp[0])*36e5+(+sp[1])*6e4-TPE,en=base+k*864e5+(+ep[0])*36e5+(+ep[1])*6e4-TPE;if(en<=st)en+=864e5;
   if(now<en){var o={mt:mt,start:st,end:en,live:now>=st};if(o.live)return o;if(!best||st<best.start)best=o;break;}}}
 return best;
}
function mtTitle(mt){return L==='en'?(MT_EN[mt.title]||mt.title):T(mt.title,mt.title);}
function wdT(d){return L==='en'?['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d]:T('週'+'日一二三四五六'.charAt(d),'');}
function hm(d){return pad(d.getHours())+':'+pad(d.getMinutes());}
function cdText(o){
 var now=Date.now(),ms=o.live?o.end-now:o.start-now,mins=Math.max(0,Math.round(ms/6e4)),h=Math.floor(mins/60),mm=mins%60;
 var span=L==='en'?((h?h+' h ':'')+mm+' min'):((h?h+' 小時 ':'')+mm+' 分');
 return o.live?T('進行中・再 ','Live now · ')+span+T(' 結束',' left'):T('還有 ','Starts in ')+span;
}
function daysText(ds){
 if(ds.length===7)return T('每天','Daily');
 var s=ds.slice().sort(function(a,b){return ((a+6)%7)-((b+6)%7);});
 var first=s[0],last=s[s.length-1],cont=true;for(var i=1;i<s.length;i++){if((s[i-1]+1)%7!==s[i])cont=false;}
 if(cont&&s.length>2)return L==='en'?wdT(first)+'–'+wdT(last):T('週'+'日一二三四五六'.charAt(first)+'至週'+'日一二三四五六'.charAt(last),'');
 var o=[];for(i=0;i<s.length;i++)o.push(wdT(s[i]));return o.join(L==='en'?', ':'、');
}
function sameTz(){return new Date().getTimezoneOffset()===-480;}
/* 在管家裡直接開團契 App（同一網站，用內嵌視窗），團契自己的頁首與底部分頁都看得到 */
function felEmbed(){return location.hostname==='spch321-sudo.github.io';}
function felOpen(){
 stopSpeak();if($('felview'))return;
 var w=document.createElement('div');w.id='felview';w.className='felview';
 w.innerHTML='<div class="fvbar"><button class="fvback" data-act="felClose">‹ '+T('回到321管家','Back to 321 Steward')+'</button><span>'+T('國度321空中團契','Kingdom 321 Fellowship')+'</span><a class="fvout" href="'+FEL_URL+'" target="_blank" rel="noopener" aria-label="'+T('用瀏覽器開啟','Open in browser')+'">'+ic('share',18)+'</a></div><iframe src="'+FEL_URL+'" title="'+T('國度321空中團契','Kingdom 321 Fellowship')+'"></iframe>';
 document.body.appendChild(w);document.body.classList.add('felon');ui.fel=true;
 try{history.pushState({fel:1},'',location.pathname+location.search+'#fellowship');}catch(e){}
}
function felClose(fromPop){
 var w=$('felview');if(!w)return;w.parentNode.removeChild(w);document.body.classList.remove('felon');ui.fel=false;if(acctOn())ACC.syncProfile();
 if(!fromPop){try{if(history.state&&history.state.fel)history.back();}catch(e){}}
}
window.addEventListener('popstate',function(){if($('felview'))felClose(true);});
function fellowCard(){
 var o=nextMeet(),h,i,z=FEL.zoom||{};
 h='<section class="card fel"><div class="felhd"><span class="felmark">321</span><div><h2>'+T('國度321空中團契','Kingdom 321 Fellowship')+'</h2><p>'+T('每天線上一起讀經、禱告，活出基督的生命','Read and pray together online every day')+'</p></div></div>';
 if(o){var s=new Date(o.start),e=new Date(o.end),url=o.mt.link||z.url;
  h+='<div class="nextm'+(o.live?' live':'')+'"><span class="nk">'+(o.live?T('聚會進行中','Meeting now'):T('下一堂聚會','Next meeting'))+'</span><h3>'+esc(mtTitle(o.mt))+'</h3>'+
  '<div class="nt">'+wdT(s.getDay())+' '+hm(s)+'–'+hm(e)+(sameTz()?'':' <small>'+T('（你的時間）','(your time)')+'</small>')+'</div>'+
  '<div class="cd" id="felcd">'+cdText(o)+'</div>'+
  (url?'<a class="btn gold big" href="'+esc(url)+'" target="_blank" rel="noopener">'+ic('video',18)+(o.live?T('立即加入聚會','Join now'):T('一鍵加入聚會','Join the meeting'))+'</a>':'')+
  '<div class="zid">'+T('會議 ID ','Meeting ID ')+'<b>'+esc(z.id||'')+'</b>'+T('・密碼 ',' · Passcode ')+'<b>'+esc(z.pw||'')+'</b> <button class="btn ghost sm" data-act="copy" data-id="'+esc(String(z.id||'').replace(/\s/g,''))+'">'+T('複製 ID','Copy ID')+'</button></div></div>';}
 h+='<details class="fd"><summary>'+ic('clock',17)+T('聚會時間','Meeting times')+'<small>'+(sameTz()?T('台北時間','Taipei time'):T('台北時間，括號內為你的時間','Taipei time; yours in brackets'))+'</small></summary><div class="list">';
 for(i=0;i<FEL.meetings.length;i++){var mt=FEL.meetings[i],oc=null,lt='';
  if(!sameTz()){var nm=FEL.meetings[i];var save=FEL.meetings;FEL.meetings=[nm];oc=nextMeet();FEL.meetings=save;if(oc)lt=' <small>（'+wdT(new Date(oc.start).getDay())+' '+hm(new Date(oc.start))+'）</small>';}
  h+='<div class="row"><div class="grow"><div class="ttl">'+esc(mtTitle(mt))+'</div><div class="meta">'+daysText(mt.days)+' '+esc(mt.start)+'–'+esc(mt.end)+lt+'</div></div></div>';}
 h+='</div></details>';
 h+='<details class="fd"><summary>'+ic('heart',17)+T('奉獻支持','Give')+'<small>'+T('支持團契的事工','Support the fellowship')+'</small></summary><div class="list">';
 var of=FEL.offering||[];
 for(i=0;i<of.length;i++){var g=of[i],acct=g.account||'';
  h+='<div class="row of"><div class="grow"><div class="ttl">'+esc(L==='en'?(CTRY_EN[g.country]||g.country):T(g.country,g.country))+'</div><div class="meta">'+esc(L==='en'&&g.holderEn?g.holderEn:g.holder||'')+(g.bank?'・'+esc(g.bank):'')+'</div>'+
  (acct?'<div class="acct">'+esc(acct)+' <button class="btn ghost sm" data-act="copy" data-id="'+esc(acct.replace(/^\(\d+\)\s*/,''))+'">'+T('複製帳號','Copy')+'</button></div>':'')+
  (g.qr?'<img class="qr" src="'+esc(g.qr)+'" alt="QR">'+(g.qrCap?'<div class="meta">'+esc(L==='en'?(g.qrCapEn||g.qrCap):g.qrCap)+'</div>':''):'')+'</div></div>';}
 h+='</div></details>';
 h+='<div class="btns">'+(felEmbed()?'<button class="btn ghost sm" data-act="felOpen">'+ic('people',16)+T('開啟321空中團契 App','Open the Fellowship app')+'</button>':'<a class="btn ghost sm" href="'+FEL_URL+'" target="_blank" rel="noopener">'+ic('people',16)+T('開啟321空中團契 App','Open the Fellowship app')+'</a>')+'<a class="btn ghost sm" href="'+esc(FEL.youtube||FEL_DEF.youtube)+'" target="_blank" rel="noopener">'+ic('video',16)+'YouTube</a></div></section>';
 return h;
}
setInterval(function(){var el=$('felcd');if(!el)return;var o=nextMeet();if(o)el.textContent=cdText(o);},30000);

/* ---------- 小智：危機求助 ---------- */
var CRISIS_RE=/想死|不想活|自殺|自杀|輕生|轻生|結束生命|结束生命|活不下去|傷害自己|伤害自己|割腕|跳樓|跳楼|suicid|kill myself|end my life|want to die|hurt myself|self-harm/i;
function crisisCard(){
 return '<div class="crisis"><b>'+T('你很重要，不需要一個人扛。','You matter. You don\'t have to carry this alone.')+'</b><p>'+T('如果你正想傷害自己，請現在就聯絡身邊信任的人，或撥打求助專線：','If you are thinking of harming yourself, please reach out now to someone you trust or a helpline:')+'</p>'+
 '<ul><li>'+T('台灣：安心專線 1925、生命線 1995','Taiwan: 1925 or 1995')+'</li><li>'+T('馬來西亞：Befrienders 03-7627 2929','Malaysia: Befrienders 03-7627 2929')+'</li><li>'+T('新加坡：SOS 1767','Singapore: SOS 1767')+'</li><li>'+T('紐西蘭：1737','New Zealand: 1737')+'</li><li>'+T('中國：希望24熱線 400-161-9995','China: 400-161-9995')+'</li></ul><p>'+T('有立即危險時，請撥打當地緊急電話。','If you are in immediate danger, call your local emergency number.')+'</p></div>';
}

/* ---------- 自動更新（version.json＋SW，只動自己的快取） ---------- */
var UPD={reg:null,pending:'',checking:false},CPFX='steward321-';
function updBusy(){
 if(TTS.key||ui.aiBusy||ui.card||ui.fel)return true;
 var a=document.activeElement;if(a&&(a.tagName==='TEXTAREA'||(a.tagName==='INPUT'&&a.type!=='range'))&&a.value)return true;
 return false;
}
function updBar(show){var b=$('updbar');if(!b)return;b.hidden=!show;}
function onNewVersion(v){
 UPD.pending=v;
 if(updBusy()){updBar(true);return;}
 applyUpdate(false);
}
function updIdle(){if(UPD.pending&&!updBusy())applyUpdate(false);}
function applyUpdate(hard){
 var v=UPD.pending||'',ss=window.sessionStorage;
 try{if(!hard&&ss){if(ss.getItem('updHard')===v){updBar(true);UPD.pending='';return;}if(ss.getItem('updTry')===v)hard=true;ss.setItem(hard?'updHard':'updTry',v);}}catch(e){}
 toast(T('正在更新到新版本…','Updating…'));
 function go(){location.replace(location.pathname+'?u='+Date.now()+location.hash);}
 if(hard){
  var p=[];try{if(window.caches)p.push(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k.indexOf(CPFX)===0;}).map(function(k){return caches.delete(k);}));}));}catch(e){}
  try{if(UPD.reg)p.push(UPD.reg.unregister());}catch(e){}
  if(p.length&&window.Promise)Promise.all(p).then(go,go);else go();return;
 }
 try{if(UPD.reg){if(UPD.reg.waiting)UPD.reg.waiting.postMessage('skip');UPD.reg.update();}}catch(e){}
 setTimeout(go,900);
}
function checkUpdate(manual){
 if(UPD.checking)return;UPD.checking=true;
 var x=new XMLHttpRequest();
 try{x.open('GET','version.json?t='+Date.now());x.setRequestHeader('Cache-Control','no-cache');}catch(e){UPD.checking=false;return;}
 x.timeout=12000;
 x.onload=function(){UPD.checking=false;var v='';try{v=JSON.parse(x.responseText).v;}catch(e){}
  if(v&&v!==APPVER&&APPVER.indexOf('@@')<0)onNewVersion(v);else if(manual)toast(v?T('已經是最新版本','You have the latest version'):T('無法取得版本資訊','Could not read version info'));};
 x.onerror=x.ontimeout=function(){UPD.checking=false;if(manual)toast(T('網路連不上，稍後再試','No connection, try again later'));};
 try{x.send();}catch(e){UPD.checking=false;}
 try{if(UPD.reg)UPD.reg.update();}catch(e){}
}
function updInit(){
 try{if(/[?&]u=\d+/.test(location.search)&&history.replaceState)history.replaceState(null,'',location.pathname+location.hash);}catch(e){}
 var https=location.protocol==='https:'&&/github\.io$/.test(location.hostname);
 if(https&&navigator.serviceWorker){
  navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).then(function(r){if(!r)return;UPD.reg=r;
   r.addEventListener('updatefound',function(){var w=r.installing;if(w)w.addEventListener('statechange',function(){if(w.state==='installed'&&navigator.serviceWorker.controller)checkUpdate(false);});});},function(){});
  navigator.serviceWorker.addEventListener('message',function(e){if(e.data&&e.data.t==='sw-updated'&&e.data.v&&e.data.v!==APPVER)onNewVersion(e.data.v);});
 }
 if(!https)return;
 setTimeout(function(){checkUpdate(false);},2500);
 setInterval(function(){checkUpdate(false);},30*60000);
 document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')checkUpdate(false);});
 window.addEventListener('pageshow',function(e){if(e.persisted)checkUpdate(false);});
 window.addEventListener('online',function(){checkUpdate(false);});
 setInterval(updIdle,20000);
}
