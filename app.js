(function(){
var KEY='steward321.v1',LKEY='steward321.lang';
var ZS={"並":"并","亞":"亚","佔":"占","來":"来","係":"系","個":"个","們":"们","備":"备","傳":"传","傷":"伤","價":"价","優":"优","儲":"储","兒":"儿","內":"内","兩":"两","冊":"册","別":"别","刪":"删","則":"则","剛":"刚","劃":"划","動":"动","務":"务","勝":"胜","勵":"励","匯":"汇","區":"区","協":"协","參":"参","唸":"念","問":"问","啟":"启","單":"单","嗎":"吗","國":"国","圍":"围","圓":"圆","圖":"图","團":"团","報":"报","場":"场","塊":"块","媽":"妈","學":"学","寢":"寝","實":"实","寫":"写","將":"将","專":"专","對":"对","導":"导","層":"层","屬":"属","帳":"账","帶":"带","幣":"币","幫":"帮","幾":"几","強":"强","後":"后","從":"从","復":"复","悅":"悦","惡":"恶","愛":"爱","態":"态","慣":"惯","慮":"虑","憑":"凭","應":"应","懷":"怀","戰":"战","捨":"舍","掛":"挂","換":"换","撥":"拨","擇":"择","擋":"挡","據":"据","敗":"败","數":"数","斷":"断","於":"于","時":"时","暫":"暂","曆":"历","書":"书","會":"会","東":"东","條":"条","業":"业","榮":"荣","樂":"乐","樓":"楼","標":"标","樣":"样","樹":"树","機":"机","檔":"档","檢":"检","權":"权","歡":"欢","歸":"归","殺":"杀","氣":"气","沒":"没","況":"况","淺":"浅","減":"减","準":"准","溫":"温","滿":"满","潔":"洁","瀏":"浏","灣":"湾","為":"为","無":"无","熱":"热","狀":"状","獎":"奖","獻":"献","現":"现","環":"环","產":"产","畫":"画","異":"异","當":"当","疇":"畴","療":"疗","發":"发","確":"确","碼":"码","礎":"础","禱":"祷","稱":"称","穌":"稣","筆":"笔","節":"节","範":"范","簡":"简","糧":"粮","紀":"纪","約":"约","紐":"纽","純":"纯","紙":"纸","級":"级","結":"结","絡":"络","給":"给","統":"统","經":"经","網":"网","緊":"紧","緒":"绪","線":"线","編":"编","練":"练","繳":"缴","續":"续","羅":"罗","義":"义","習":"习","聖":"圣","聯":"联","聰":"聪","職":"职","腦":"脑","與":"与","舊":"旧","華":"华","藍":"蓝","蘭":"兰","處":"处","虛":"虚","號":"号","蟲":"虫","補":"补","裝":"装","裡":"里","製":"制","複":"复","見":"见","規":"规","視":"视","親":"亲","覺":"觉","覽":"览","觀":"观","訂":"订","訊":"讯","討":"讨","託":"托","記":"记","設":"设","許":"许","訴":"诉","註":"注","評":"评","試":"试","詩":"诗","話":"话","誇":"夸","認":"认","語":"语","誠":"诚","說":"说","誰":"谁","課":"课","調":"调","請":"请","論":"论","謀":"谋","謙":"谦","謝":"谢","謹":"谨","證":"证","識":"识","議":"议","讀":"读","變":"变","讓":"让","豈":"岂","負":"负","財":"财","責":"责","買":"买","費":"费","貼":"贴","資":"资","賜":"赐","賴":"赖","踐":"践","載":"载","輕":"轻","輪":"轮","輯":"辑","輸":"输","轉":"转","這":"这","連":"连","週":"周","進":"进","運":"运","過":"过","達":"达","適":"适","選":"选","還":"还","邊":"边","醫":"医","釘":"钉","鈕":"钮","銀":"银","錄":"录","鍵":"键","鎖":"锁","鐘":"钟","長":"长","閉":"闭","開":"开","間":"间","閱":"阅","關":"关","陰":"阴","陳":"陈","階":"阶","隨":"随","險":"险","隱":"隐","離":"离","雲":"云","電":"电","靈":"灵","靜":"静","頁":"页","項":"项","順":"顺","預":"预","領":"领","頭":"头","頻":"频","題":"题","額":"额","願":"愿","類":"类","顧":"顾","顯":"显","飯":"饭","飲":"饮","飾":"饰","餘":"余","馬":"马","驕":"骄","驗":"验","驟":"骤","體":"体","麼":"么","點":"点","齒":"齿","著":"着","藉":"藉","「":"“","」":"”"};
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
var VV={"1Corinthians.10.31":["所以，你們或吃或喝，無論做什麼，都要為榮耀神而行。","所以，你们或吃或喝，无论做什么，都要为荣耀神而行。","Whether therefore you eat or drink, or whatever you do, do all to the glory of God."],"1Corinthians.4.2":["所求於管家的，是要他有忠心。","所求于管家的，是要他有忠心。","Here, moreover, it is required of stewards that they be found faithful."],"1Corinthians.6.19-20":["豈不知你們的身子就是聖靈的殿嗎？這聖靈是從神而來，住在你們裡頭的；並且你們不是自己的人，因為你們是重價買來的。所以，要在你們的身子上榮耀神。","岂不知你们的身子就是圣灵的殿吗？这圣灵是从神而来，住在你们里头的；并且你们不是自己的人，因为你们是重价买来的。所以，要在你们的身子上荣耀神。","Or don’t you know that your body is a temple of the Holy Spirit who is in you, whom you have from God? You are not your own, for you were bought with a price. Therefore glorify God in your body and in your spirit, which are God’s."],"1Peter.4.10":["各人要照所得的恩賜彼此服事，作神百般恩賜的好管家。","各人要照所得的恩赐彼此服事，作神百般恩赐的好管家。","As each has received a gift, employ it in serving one another, as good managers of the grace of God in its various forms."],"Colossians.3.23":["無論做什麼，都要從心裡做，像是給主做的，不是給人做的。","无论做什么，都要从心里做，像是给主做的，不是给人做的。","And whatever you do, work heartily, as for the Lord and not for men."],"Ephesians.5.15-16":["你們要謹慎行事，不要像愚昧人，當像智慧人。要愛惜光陰，因為現今的世代邪惡。","你们要谨慎行事，不要像愚昧人，当像智慧人。要爱惜光阴，因为现今的世代邪恶。","Therefore watch carefully how you walk, not as unwise, but as wise, redeeming the time, because the days are evil."],"Galatians.2.20":["我已經與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著；並且我如今在肉身活著，是因信神的兒子而活；他是愛我，為我捨己。","我已经与基督同钉十字架，现在活着的不再是我，乃是基督在我里面活着；并且我如今在肉身活着，是因信神的儿子而活；他是爱我，为我舍己。","I have been crucified with Christ, and it is no longer I who live, but Christ lives in me. That life which I now live in the flesh, I live by faith in the Son of God, who loved me and gave himself up for me."],"Galatians.5.22-23":["聖靈所結的果子，就是仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制。這樣的事沒有律法禁止。","圣灵所结的果子，就是仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制。这样的事没有律法禁止。","But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control. Against such things there is no law."],"James.4.6":["但他賜更多的恩典，所以經上說：神阻擋驕傲的人，賜恩給謙卑的人。","但他赐更多的恩典，所以经上说：神阻挡骄傲的人，赐恩给谦卑的人。","But he gives more grace. Therefore it says, “God resists the proud, but gives grace to the humble.”"],"John.13.34":["我賜給你們一條新命令，乃是叫你們彼此相愛；我怎樣愛你們，你們也要怎樣相愛。","我赐给你们一条新命令，乃是叫你们彼此相爱；我怎样爱你们，你们也要怎样相爱。","A new commandment I give to you, that you love one another. Just as I have loved you, you also love one another."],"John.15.5":["我是葡萄樹，你們是枝子。常在我裡面的，我也常在他裡面，這人就多結果子；因為離了我，你們就不能做什麼。","我是葡萄树，你们是枝子。常在我里面的，我也常在他里面，这人就多结果子；因为离了我，你们就不能做什么。","I am the vine. You are the branches. He who remains in me and I in him bears much fruit, for apart from me you can do nothing."],"Luke.12.42":["主說：「誰是那忠心有見識的管家，主人派他管理家裡的人，按時分糧給他們呢？」","主说：“谁是那忠心有见识的管家，主人派他管理家里的人，按时分粮给他们呢？”","The Lord said, “Who then is the faithful and wise steward, whom his lord will set over his household, to give them their portion of food at the right times?”"],"Matthew.6.33":["你們要先求他的國和他的義，這些東西都要加給你們了。","你们要先求他的国和他的义，这些东西都要加给你们了。","But seek first God’s Kingdom and his righteousness; and all these things will be given to you as well."],"Philippians.4.6":["應當一無掛慮，只要凡事藉著禱告、祈求，和感謝，將你們所要的告訴神。","应当一无挂虑，只要凡事借着祷告、祈求，和感谢，将你们所要的告诉神。","In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God."],"Proverbs.16.3":["你所做的，要交託耶和華，你所謀的，就必成立。","你所做的，要交托耶和华，你所谋的，就必成立。","Commit your deeds to the LORD, and your plans shall succeed."],"Proverbs.3.5-6":["你要專心仰賴耶和華，不可倚靠自己的聰明，在你一切所行的事上都要認定他，他必指引你的路。","你要专心仰赖耶和华，不可倚靠自己的聪明，在你一切所行的事上都要认定他，他必指引你的路。","Trust in the LORD with all your heart, and don’t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight."],"Proverbs.4.23":["你要保守你心，勝過保守一切，因為一生的果效是由心發出。","你要保守你心，胜过保守一切，因为一生的果效是由心发出。","Keep your heart with all diligence, for out of it is the wellspring of life."],"Psalms.90.12":["求你指教我們怎樣數算自己的日子，好叫我們得著智慧的心。","求你指教我们怎样数算自己的日子，好叫我们得着智慧的心。","So teach us to count our days, that we may gain a heart of wisdom."],"Romans.12.2":["不要效法這個世界，只要心意更新而變化，叫你們察驗何為神的善良、純全、可喜悅的旨意。","不要效法这个世界，只要心意更新而变化，叫你们察验何为神的善良、纯全、可喜悦的旨意。","Don’t be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God."]};
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

/* ================= 321 App 共用功能（ES5）：字級、主題、朗讀、經文美圖、空中團契、自動更新、小智強化 ================= */
var APPVER='v2026.1111.0731';
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
 var w=$('felview');if(!w)return;w.parentNode.removeChild(w);document.body.classList.remove('felon');ui.fel=false;
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

/* 以下日曆解析取自 321每日得勝（含重複事件、時區、例外日） */
var _gcFmt={};
function _gcPad(n) { return n < 10 ? '0' + n : '' + n; }
function _gcUnesc(s) { return String(s || '').replace(/\\n/gi, ' ').replace(/\\([,;\\])/g, '$1'); }
function _gcTzOff(tz, ms) {
  try {
    var f = _gcFmt[tz];
    if (!f) f = _gcFmt[tz] = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    var m = /(\d+)\/(\d+)\/(\d+),?\s+(\d+):(\d+):(\d+)/.exec(f.format(new Date(ms)));
    if (!m) return null;
    var h = parseInt(m[4], 10) % 24;
    return Date.UTC(+m[3], +m[1] - 1, +m[2], h, +m[5], +m[6]) - Math.floor(ms / 1000) * 1000;
  } catch (e) { return null; }
}
function _gcWall(y, mo, d, h, mi, s, tz) {   /* mo: 1–12 */
  if (tz === 'Z') return Date.UTC(y, mo - 1, d, h, mi, s);
  if (tz) {
    var g = Date.UTC(y, mo - 1, d, h, mi, s), o = _gcTzOff(tz, g);
    if (o != null) { var u = g - o, o2 = _gcTzOff(tz, u); return (o2 != null && o2 !== o) ? g - o2 : u; }
  }
  return new Date(y, mo - 1, d, h, mi, s).getTime();   /* 浮動時間或不認得的時區：當作本機時間 */
}
function _gcParseDT(v, p) {
  var m = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?/.exec(v || '');
  if (!m) return null;
  var r = { y: +m[1], m: +m[2], d: +m[3], h: +(m[4] || 0), mi: +(m[5] || 0), s: +(m[6] || 0), day: !m[4] };
  r.tz = m[7] ? 'Z' : (p.TZID || '');
  return r;
}
function _gcDur(v) {
  var m = /^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/.exec(v || '');
  if (!m) return 0;
  var ms = (((+(m[2] || 0) * 7 + +(m[3] || 0)) * 24 + +(m[4] || 0)) * 60 + +(m[5] || 0)) * 60000 + +(m[6] || 0) * 1000;
  return m[1] === '-' ? -ms : ms;
}
function _gcRule(s) {
  var r = {}, a = String(s || '').split(';');
  for (var i = 0; i < a.length; i++) { var kv = a[i].split('='); if (kv.length === 2) r[kv[0].toUpperCase()] = kv[1]; }
  return r;
}
function _gcDays(y, m) { return new Date(y, m, 0).getDate(); }
function _gcPeriod(freq, rule, st, k, iv) {
  var out = [], i, by = rule.BYDAY ? rule.BYDAY.split(',') : null, bmd = rule.BYMONTHDAY ? rule.BYMONTHDAY.split(',') : null;
  if (freq === 'DAILY') { var dd = new Date(st.y, st.m - 1, st.d + k * iv); out.push([dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]); }
  else if (freq === 'WEEKLY') {
    var wk = _GC_WD[(rule.WKST || 'MO')] || 0, s0 = new Date(st.y, st.m - 1, st.d), back = (s0.getDay() - wk + 7) % 7;
    var ws = new Date(st.y, st.m - 1, st.d - back + k * iv * 7);
    var list = by ? by : [['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][s0.getDay()]];
    for (i = 0; i < list.length; i++) {
      var wd = _GC_WD[list[i].replace(/^[+-]?\d+/, '')]; if (wd == null) continue;
      var dd2 = new Date(ws.getFullYear(), ws.getMonth(), ws.getDate() + ((wd - wk + 7) % 7));
      out.push([dd2.getFullYear(), dd2.getMonth() + 1, dd2.getDate()]);
    }
  } else if (freq === 'MONTHLY' || freq === 'YEARLY') {
    var months = [];
    if (freq === 'MONTHLY') { var mm = new Date(st.y, st.m - 1 + k * iv, 1); months.push([mm.getFullYear(), mm.getMonth() + 1]); }
    else { var yy = st.y + k * iv, bm = rule.BYMONTH ? rule.BYMONTH.split(',') : [String(st.m)]; for (i = 0; i < bm.length; i++) months.push([yy, +bm[i]]); }
    for (var q = 0; q < months.length; q++) {
      var Y = months[q][0], M = months[q][1], dim = _gcDays(Y, M);
      if (bmd) { for (i = 0; i < bmd.length; i++) { var n = +bmd[i]; var D = n < 0 ? dim + n + 1 : n; if (D >= 1 && D <= dim) out.push([Y, M, D]); } }
      else if (by && (freq === 'MONTHLY' || rule.BYMONTH)) {
        for (i = 0; i < by.length; i++) {
          var mt = /^([+-]?\d+)?([A-Z]{2})$/.exec(by[i]); if (!mt) continue;
          var w = _GC_WD[mt[2]], ord = mt[1] ? +mt[1] : 0, hits = [];
          for (var dday = 1; dday <= dim; dday++) if (new Date(Y, M - 1, dday).getDay() === w) hits.push(dday);
          if (rule.BYSETPOS) ord = +rule.BYSETPOS;
          if (!ord) { for (var z = 0; z < hits.length; z++) out.push([Y, M, hits[z]]); }
          else { var pick = ord > 0 ? hits[ord - 1] : hits[hits.length + ord]; if (pick) out.push([Y, M, pick]); }
        }
      } else if (st.d <= dim) out.push([Y, M, st.d]);
    }
  }
  out.sort(function (a, b) { return (a[0] - b[0]) || (a[1] - b[1]) || (a[2] - b[2]); });
  return out;
}
function _gcExpand(ev, from, to, push) {
  var st = ev.ds; if (!st) return;
  var s0 = _gcMs(st), dur;
  if (ev.de) dur = _gcMs(ev.de) - s0; else if (ev.du) dur = ev.du; else dur = st.day ? 86400000 : 0;
  if (dur < 0) dur = 0;
  var exk = {};
  for (var i = 0; i < ev.ex.length; i++) { var x = ev.ex[i]; exk[x.y + '-' + x.m + '-' + x.d + (st.day ? '' : '@' + _gcMs(x))] = 1; exk[x.y + '-' + x.m + '-' + x.d] = 1; }
  if (!ev.rr) { if (s0 + dur >= from && s0 <= to) push(s0, dur, st.day); return; }
  var r = _gcRule(ev.rr), freq = r.FREQ, iv = Math.max(1, +(r.INTERVAL || 1)), cnt = r.COUNT ? +r.COUNT : 0, until = null, made = 0;
  if (!freq || !/^(DAILY|WEEKLY|MONTHLY|YEARLY)$/.test(freq)) { if (s0 + dur >= from && s0 <= to) push(s0, dur, st.day); return; }
  if (r.UNTIL) { var u = _gcParseDT(r.UNTIL, {}); if (u) { until = _gcMs(u); if (u.day || st.day) until += 86399999; } }
  for (var k = 0; k < 5000; k++) {
    var days = _gcPeriod(freq, r, st, k, iv);
    if (!days.length && k > 400) break;
    for (var j = 0; j < days.length; j++) {
      var D = days[j], o = { y: D[0], m: D[1], d: D[2], h: st.h, mi: st.mi, s: st.s, day: st.day, tz: st.tz }, ms = _gcMs(o);
      if (ms < s0) continue;
      if (until != null && ms > until) return;
      made++;
      if (cnt && made > cnt) return;
      if (ms > to) return;
      var key = D[0] + '-' + D[1] + '-' + D[2];
      if (exk[key + '@' + ms] || (st.day && exk[key]) || (ev._ov && ev._ov[ms])) continue;
      if (ms + dur >= from) push(ms, dur, st.day);
    }
  }
}
function gcalParse(text) {
  text = String(text || '').replace(/\r?\n[ \t]/g, '');
  var lines = text.split(/\r?\n/), evs = [], cur = null, depth = 0;
  for (var i = 0; i < lines.length; i++) {
    var ln = lines[i]; if (!ln) continue;
    if (ln === 'BEGIN:VEVENT') { cur = { ex: [] }; depth = 0; continue; }
    if (!cur) continue;
    if (/^BEGIN:/.test(ln)) { depth++; continue; }          /* VALARM 等巢狀區塊略過 */
    if (/^END:/.test(ln)) { if (depth) { depth--; continue; } if (ln === 'END:VEVENT') { evs.push(cur); cur = null; } continue; }
    if (depth) continue;
    var ci = ln.indexOf(':'); if (ci < 0) continue;
    var head = ln.slice(0, ci), val = ln.slice(ci + 1), parts = head.split(';'), name = parts[0].toUpperCase(), p = {};
    for (var j = 1; j < parts.length; j++) { var eq = parts[j].indexOf('='); if (eq > 0) p[parts[j].slice(0, eq).toUpperCase()] = parts[j].slice(eq + 1).replace(/^"|"$/g, ''); }
    if (name === 'SUMMARY') cur.t = _gcUnesc(val);
    else if (name === 'LOCATION') cur.l = _gcUnesc(val);
    else if (name === 'UID') cur.uid = val;
    else if (name === 'STATUS') cur.st = val.toUpperCase();
    else if (name === 'DTSTART') cur.ds = _gcParseDT(val, p);
    else if (name === 'DTEND') cur.de = _gcParseDT(val, p);
    else if (name === 'DURATION') cur.du = _gcDur(val);
    else if (name === 'RRULE') cur.rr = val;
    else if (name === 'RECURRENCE-ID') cur.rid = _gcParseDT(val, p);
    else if (name === 'EXDATE') { var xs = val.split(','); for (var k = 0; k < xs.length; k++) { var x = _gcParseDT(xs[k], p); if (x) cur.ex.push(x); } }
  }
  return evs;
}
function gcalBuild(evs) {
  var now = Date.now(), from = now - 200 * 86400000, to = now + 400 * 86400000, out = [], byUid = {}, i;
  for (i = 0; i < evs.length; i++) if (evs[i].rid && evs[i].uid) { (byUid[evs[i].uid] = byUid[evs[i].uid] || []).push(evs[i]); }
  for (i = 0; i < evs.length; i++) {
    var ev = evs[i];
    if (ev.rr && ev.uid && byUid[ev.uid]) { ev._ov = {}; for (var q = 0; q < byUid[ev.uid].length; q++) ev._ov[_gcMs(byUid[ev.uid][q].rid)] = 1; }
  }
  for (i = 0; i < evs.length; i++) {
    (function (ev) {
      if (ev.st === 'CANCELLED') return;
      _gcExpand(ev, from, to, function (s, d, a) {
        if (out.length < 4000) out.push({ s: s, e: s + d, a: a ? 1 : 0, t: ev.t || '', l: ev.l || '' });
      });
    })(evs[i]);
  }
  out.sort(function (a, b) { return a.s - b.s; });
  return out;
}
function _gcMs(o) { return o.day ? new Date(o.y, o.m - 1, o.d).getTime() : _gcWall(o.y, o.m, o.d, o.h, o.mi, o.s, o.tz); }
var _GC_WD = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 };

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

/* ---------- 雲端加密備份（每日得勝同一個 Worker；內容在手機上先加密，只有備份碼能解開） ---------- */
var CKEY='steward321.cloud',CLOUD=null,cloudTimer=null,cloudBusy=false;
try{CLOUD=JSON.parse(localStorage.getItem(CKEY)||'null');}catch(e){CLOUD=null;}
function saveCloud(){try{if(CLOUD)localStorage.setItem(CKEY,JSON.stringify(CLOUD));else localStorage.removeItem(CKEY);}catch(e){}}
function rnd(n){var a='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789',s='',i,b=null;try{b=new Uint8Array(n);crypto.getRandomValues(b);}catch(e){}for(i=0;i<n;i++)s+=a.charAt((b?b[i]:Math.floor(Math.random()*256))%a.length);return s;}
function cloudCode(c){return '321S-'+c.id+'-'+c.key+'-'+c.sec;}
function parseCode(t){var m=/321S-([A-Za-z0-9]{20,40})-([A-Za-z0-9]{30,50})-([A-Za-z0-9]{20,50})/.exec(String(t||''));return m?{id:m[1],key:m[2],sec:m[3]}:null;}
function u8(str){if(window.TextEncoder)return new TextEncoder().encode(str);var s=unescape(encodeURIComponent(str)),a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return a;}
function fromU8(a){if(window.TextDecoder)return new TextDecoder().decode(a);var s='';for(var i=0;i<a.length;i++)s+=String.fromCharCode(a[i]);return decodeURIComponent(escape(s));}
function b64(a){var s='',i,ch=8192;for(i=0;i<a.length;i+=ch)s+=String.fromCharCode.apply(null,a.subarray(i,i+ch));return btoa(s);}
function unb64(s){var b=atob(s),a=new Uint8Array(b.length);for(var i=0;i<b.length;i++)a[i]=b.charCodeAt(i);return a;}
function aesKey(sec){return crypto.subtle.digest('SHA-256',u8('321steward|'+sec)).then(function(h){return crypto.subtle.importKey('raw',h,{name:'AES-GCM'},false,['encrypt','decrypt']);});}
function cloudOk(){return !!(window.crypto&&crypto.subtle&&window.Promise);}
function cloudPush(cb){
 if(!CLOUD||cloudBusy||!cloudOk()){if(cb)cb(!cloudOk()?'nocrypto':'busy');return;}
 cloudBusy=true;var iv=new Uint8Array(12);crypto.getRandomValues(iv);
 aesKey(CLOUD.sec).then(function(k){return crypto.subtle.encrypt({name:'AES-GCM',iv:iv},k,u8(JSON.stringify(S)));}).then(function(ct){
  var all=new Uint8Array(12+ct.byteLength);all.set(iv,0);all.set(new Uint8Array(ct),12);
  var s=b64(all),body='BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//321 Steward//Backup//ZH\r\nX-WR-CALNAME:321 Steward backup\r\nX-STEWARD-V:1\r\nX-STEWARD-TS:'+Date.now()+'\r\n',i;
  for(i=0;i<s.length;i+=72)body+='X-STEWARD-B:'+s.slice(i,i+72)+'\r\n';
  body+='END:VCALENDAR\r\n';
  var x=new XMLHttpRequest();x.open('PUT',CAL_PROXY+'feed/'+CLOUD.id);x.setRequestHeader('X-Feed-Key',CLOUD.key);x.setRequestHeader('Content-Type','text/calendar; charset=utf-8');x.timeout=30000;
  x.onload=function(){cloudBusy=false;if(x.status>=200&&x.status<300){CLOUD.at=Date.now();CLOUD.err='';saveCloud();if(cb)cb('');}else{CLOUD.err='http '+x.status;saveCloud();if(cb)cb(CLOUD.err);}};
  x.onerror=x.ontimeout=function(){cloudBusy=false;CLOUD.err='net';saveCloud();if(cb)cb('net');};
  x.send(body);
 },function(){cloudBusy=false;if(cb)cb('crypto');});
}
function cloudSoon(){if(!CLOUD)return;clearTimeout(cloudTimer);cloudTimer=setTimeout(function(){if(Date.now()-(CLOUD.at||0)>8*60000)cloudPush(null);else cloudSoon();},90000);}
function cloudFetch(c,cb){
 if(!cloudOk()){cb('nocrypto');return;}
 var x=new XMLHttpRequest();x.open('GET',CAL_PROXY+'feed/'+c.id+'.ics?t='+Date.now());x.timeout=30000;
 x.onload=function(){
  if(x.status<200||x.status>=300){cb(x.status===404?'gone':'http '+x.status);return;}
  var m=x.responseText.match(/^X-STEWARD-B:(.*)$/gm);if(!m){cb('fmt');return;}
  var s='';for(var i=0;i<m.length;i++)s+=m[i].replace(/^X-STEWARD-B:/,'').replace(/\s/g,'');
  var all;try{all=unb64(s);}catch(e){cb('fmt');return;}
  aesKey(c.sec).then(function(k){return crypto.subtle.decrypt({name:'AES-GCM',iv:all.subarray(0,12)},k,all.subarray(12));}).then(function(pt){
   try{cb('',JSON.parse(fromU8(new Uint8Array(pt))));}catch(e){cb('fmt');}
  },function(){cb('key');});
 };
 x.onerror=x.ontimeout=function(){cb('net');};x.send();
}
function cloudErr(e){return e==='gone'?T('雲端找不到這份備份','No backup found for this code'):e==='key'?T('備份碼不正確','The backup code is not correct'):e==='nocrypto'?T('這個瀏覽器不支援加密備份','This browser cannot encrypt backups'):e==='fmt'?T('備份內容讀不出來','The backup could not be read'):e==='net'?T('網路連不上，稍後再試','No connection, try again later'):T('雲端暫時無法使用（','Cloud unavailable (')+e+T('）',')');}
function applyRestore(o){S=norm(o);S.onb=1;ui.wheel=null;ui.restore=null;save();render();toast(T('已還原備份','Backup restored'));}

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
 if(k==='god'){h+=prayerCard();h+='<section class="card" style="'+cvars('god')+'">'+st('book',T('靈修筆記','Devotional notes'),T('資訊 → 啟示 → 信服 → 實踐','Information → revelation → conviction → practice'))+
  jText('dv_ref',T('今日經文','Today\'s passage'),T('例如：約翰福音 15:5','e.g. John 15:5'))+jText('dv_rev',T('神給我的啟示','What God showed me'),T('聖靈讓我看見什麼？','What did the Spirit open my eyes to?'))+jText('dv_act',T('我要實踐','What I will do'),T('今天具體怎麼行出來？','How will I live it out today?'))+jText('dv_pray',T('禱告','Prayer'),T('把領受化成禱告','Turn it into prayer'))+pastJ('dv_rev',T('近日的啟示','Recent insights'))+'</section>';}
 if(k==='self')h+='<section class="card" style="'+cvars('self')+'">'+st('self',T('舊人與新人','Old self and new self'),T('看見自己，也看見恩典','See yourself, and see grace'))+
  jText('old',T('今天顯出的舊人（有己）','Where my old self showed today'),T('哪裡驕傲、離開本位、想抓住權力？','Where was I proud, out of place, grasping control?'))+jText('neu',T('新人無己的回應','How the new self responded'),T('怎樣謙卑、回到本位，讓神作神？','How did I humble myself and let God be God?'))+pastJ('neu',T('近日的得勝','Recent victories'))+'</section>';
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
 h+='<section class="card">'+st('share',T('雲端備份','Cloud backup'),T('換手機或資料被清除時，用備份碼找回','Restore everything on a new phone with your code'))+cloudPanel()+'</section>';
 h+='<section class="card">'+st('pen',T('備份檔','Backup file'),T('另存一份在檔案、雲端硬碟或寄給自己','Keep a copy in Files, a drive or email'))+
 '<div class="btns"><button class="btn ghost" data-act="fileBk">'+ic('share',16)+T('匯出備份檔','Export backup file')+'</button><label class="btn ghost" for="fileIn">'+T('從備份檔還原','Restore from file')+'</label><input type="file" id="fileIn" accept=".json,application/json" hidden></div>'+restoreConfirm()+
 '<details class="fd"'+(ui.backup?' open':'')+'><summary>'+T('用文字備份／還原','Text backup / restore')+'</summary><div class="btns"><button class="btn ghost sm" data-act="backup">'+(ui.backup?T('收起','Hide'):T('顯示備份文字','Show backup text'))+'</button></div>'+
 (ui.backup?'<textarea id="bk" readonly style="min-height:110px;font-size:13px">'+esc(JSON.stringify(S))+'</textarea><div class="btns"><button class="btn sm" data-act="copyBk">'+T('複製備份文字','Copy backup text')+'</button></div>':'')+
 '<label class="f" for="imp">'+T('貼上備份文字','Paste backup text')+'<textarea id="imp"></textarea></label><div class="btns"><button class="btn ghost sm" data-act="importData">'+T('還原','Restore')+'</button></div></details></section>';
 h+='<section class="card">'+st('self',T('隱私','Privacy'),'')+
 setRow(T('小智回顧時','When Xiaozhi reviews'),segOf([['1',['可以讀我的筆記','May read my notes']],['0',['不要讀我的筆記','Don\'t read my notes']]],S.aiJ?'1':'0','aiJ'))+
 setRow(T('密碼鎖','Passcode lock'),lockOn()?'<div class="btns"><span class="chip gold">'+T('已開啟','On')+'</span><button class="btn ghost sm" data-act="lockNow">'+T('立即上鎖','Lock now')+'</button><button class="btn ghost sm" data-act="lockOff">'+T('關閉密碼鎖','Turn off')+'</button></div>':
  (ui.lockSet?'<div class="form"><input id="pin1" type="password" inputmode="numeric" maxlength="4" placeholder="'+T('4 位數密碼','4-digit passcode')+'"><input id="pin2" type="password" inputmode="numeric" maxlength="4" placeholder="'+T('再輸入一次','Again')+'"><div class="btns full"><button class="btn sm" data-act="lockSave">'+T('開啟','Turn on')+'</button><button class="btn ghost sm" data-act="lockCancel">'+T('取消','Cancel')+'</button></div><p class="empty full">'+T('忘記密碼時只能清除資料，再用雲端備份碼還原，請先設定雲端備份。','If you forget it, you can only clear the data and restore from cloud backup, so set that up first.')+'</p></div>':'<div class="btns"><button class="btn ghost sm" data-act="lockSet">'+T('設定密碼鎖','Set a passcode')+'</button></div>'))+'</section>';
 h+='<section class="card">'+st('gear2',T('關於','About'),'')+
 setRow(T('版本 ','Version ')+'<b>'+esc(APPVER.indexOf('@@')<0?APPVER:'dev')+'</b>','<div class="btns"><button class="btn ghost sm" data-act="checkUpd">'+T('檢查更新','Check for updates')+'</button><button class="btn ghost sm" data-act="hardUpd">'+T('強制更新','Force update')+'</button><button class="btn ghost sm" data-act="onbAgain">'+T('重看使用引導','Show the welcome guide')+'</button></div>')+
 '<div class="btns">'+(hasEx()?'<button class="btn ghost sm" data-act="clearEx">'+T('清除範例','Clear samples')+'</button>':'')+'</div>'+
 (ui.reset?'<div class="banner"><span>'+T('確定要清空全部資料、回到初始狀態嗎？此動作無法復原。','Erase all data and start over? This cannot be undone.')+'</span><button class="btn danger sm" data-act="resetYes">'+T('確定清空','Erase all')+'</button><button class="btn ghost sm" data-act="resetNo">'+T('取消','Cancel')+'</button></div>':'<div class="btns"><button class="btn ghost sm" data-act="resetAsk" style="color:var(--warn)">'+T('清空全部資料','Erase all data')+'</button></div>')+'</section>';
 return h;
}
function cloudPanel(){
 var h='';
 if(!cloudOk())return '<p class="empty">'+T('這個瀏覽器不支援加密，請改用備份檔。','This browser cannot encrypt; please use a backup file.')+'</p>';
 if(CLOUD){
  h+='<p class="empty">'+(CLOUD.at?T('上次備份：','Last backup: ')+new Date(CLOUD.at).toLocaleString():T('還沒有備份','Not backed up yet'))+(CLOUD.err?' · <span style="color:var(--warn)">'+esc(cloudErr(CLOUD.err))+'</span>':'')+'</p>'+
  '<label class="f" for="ccode">'+T('你的備份碼（請另外存好，換手機時用它還原）','Your backup code (keep it safe; use it to restore on a new phone)')+'<textarea id="ccode" readonly rows="2" style="font-size:13px">'+esc(cloudCode(CLOUD))+'</textarea></label>'+
  '<div class="btns"><button class="btn sm" data-act="cloudNow">'+T('立即備份','Back up now')+'</button><button class="btn ghost sm" data-act="copy" data-id="'+esc(cloudCode(CLOUD))+'">'+T('複製備份碼','Copy code')+'</button><button class="btn ghost sm" data-act="cloudOff">'+T('停止雲端備份','Stop cloud backup')+'</button></div>'+
  '<p class="empty">'+T('🔒 資料在手機上先加密才上傳，只有備份碼能解開。之後每次修改都會自動備份。','🔒 Data is encrypted on this phone before upload; only your code can open it. Changes are backed up automatically.')+'</p>';
 }else h+='<div class="btns"><button class="btn" data-act="cloudOn">'+T('開啟雲端備份','Turn on cloud backup')+'</button></div>';
 h+='<details class="fd"><summary>'+T('用備份碼還原','Restore with a code')+'</summary><div class="form"><textarea id="rcode" class="full" rows="2" placeholder="321S-…"></textarea><button class="btn sm full" data-act="cloudGet">'+T('從雲端還原','Restore from cloud')+'</button></div></details>';
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
  '<p class="empty">'+T('之後可以在「回顧 → 設定」開啟雲端備份、每日提醒和密碼鎖；在「今日時程」連結每日得勝和 Google 日曆。','Later, turn on cloud backup, reminders and a passcode in Review → Settings, and link calendars from Today\'s schedule.')+'</p>';}
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
 case 'cloudOn':CLOUD={id:rnd(28),key:rnd(40),sec:rnd(32),at:0,err:''};saveCloud();render();toast(T('正在建立雲端備份…','Creating cloud backup…'));cloudPush(function(err){render();toast(err?cloudErr(err):T('雲端備份完成，請存好備份碼','Backed up. Keep your code safe'));});return true;
 case 'cloudNow':toast(T('正在備份…','Backing up…'));cloudPush(function(err){render();toast(err?cloudErr(err):T('雲端備份完成','Backed up'));});return true;
 case 'cloudOff':if(CLOUD){var cx=new XMLHttpRequest();try{cx.open('DELETE',CAL_PROXY+'feed/'+CLOUD.id);cx.setRequestHeader('X-Feed-Key',CLOUD.key);cx.send();}catch(err){}}CLOUD=null;saveCloud();render();toast(T('已停止雲端備份並刪除雲端資料','Cloud backup stopped and deleted'));return true;
 case 'cloudGet':x=parseCode(val('rcode'));if(!x){toast(T('備份碼格式不對，請整段貼上','The code looks wrong; paste the whole code'));return true;}
  toast(T('正在讀取雲端備份…','Reading cloud backup…'));cloudFetch(x,function(err,o){if(err){toast(cloudErr(err));return;}ui.restore=o;ui.restoreCloud=x;render();});return true;
 case 'restoreYes':var ro=ui.restore;if(ui.restoreCloud){CLOUD={id:ui.restoreCloud.id,key:ui.restoreCloud.key,sec:ui.restoreCloud.sec,at:Date.now(),err:''};saveCloud();ui.restoreCloud=null;}applyRestore(ro);return true;
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
