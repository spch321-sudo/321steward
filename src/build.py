#!/usr/bin/env python3
"""321管家建置：python3 src/build.py [--artifact 輸出路徑]
- 讀 src/ 的 app.js、ext.js、gcal_lib.js、plus.js、style.css、sw.tpl.js、verses.json
- 产生根目錄的 index.html（HTML＋CSS）、app.js（全部程式）、sw.js、version.json
- 简体字表用 OpenCC（pip install opencc-python-reimplemented）
- --artifact：另外輸出單一檔案版本（給 claude.ai 預覽）
"""
import json,os,re,sys,datetime
from opencc import OpenCC
SRC=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.dirname(SRC)
def rd(n): return open(os.path.join(SRC,n),encoding='utf-8').read()
cc=OpenCC('t2s')
VER=(datetime.datetime.now(datetime.timezone.utc)+datetime.timedelta(hours=8)).strftime('v%Y.%m%d.%H%M')
js=rd('app.js').replace('/*EXT*/',rd('ext.js')).replace('/*GCAL*/',rd('gcal_lib.js')).replace('/*PLUS*/',rd('plus.js'))
js=js.replace('@@VER@@',VER).replace('/*VV*/{}',json.dumps(json.load(open(os.path.join(SRC,'verses.json'),encoding='utf-8')),ensure_ascii=False,separators=(',',':')))
chars=sorted(set(c for c in js if '㐀'<=c<='鿿' or c in '「」'))
m={}
for c in chars:
    s=cc.convert(c)
    if s!=c: m[c]=s
m.update({'著':'着','帳':'账','裡':'里','藉':'藉','「':'“','」':'”'})
js=js.replace('/*ZSMAP*/{}',json.dumps(m,ensure_ascii=False,separators=(',',':')))
css=rd('style.css')
fonts='<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@600;700;900&display=swap">\n'
body='''<header class="top"><div class="wrap topin"><button class="brand" data-act="splash" aria-label="321"><span class="n">321</span><span class="w" id="brandName">管家</span></button><div class="topr"><div class="toprow"><button class="fsbtn" data-act="fs" aria-label="Text size">Aa</button><div class="langs" id="langs" role="group" aria-label="Language"></div></div><div class="date" id="hdate"></div></div></div></header>
<main class="wrap" id="main"></main>
<nav class="tabs" aria-label="Menu"><div class="tabsin" id="tabs"></div></nav>
<div class="toast" id="toast" hidden></div>
<div class="splash" id="splash" hidden></div>
<div id="sheet" hidden></div>
<button class="updbar" id="updbar" data-act="updNow" hidden>已有新版本，點這裡立即更新</button>
'''
head='''<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>321管家</title>
<meta name="theme-color" content="#1D3A6E">
<meta name="description" content="321管家：依神、己、人、事的關係次序，全方位管理人生的每個範疇。">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="321管家">
<link rel="manifest" href="manifest.json">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-v2-32.png">
<link rel="apple-touch-icon" href="apple-touch-icon-v2.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-v2.png">
<link rel="apple-touch-icon" sizes="167x167" href="icon-v2-167.png">
<link rel="apple-touch-icon" sizes="152x152" href="icon-v2-152.png">
<meta property="og:image" content="hero.jpg">
'''
base=':root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}img{max-width:100%}\n'
idx=head+fonts+'<style>\n'+base+css+'</style>\n</head>\n<body>\n'+body+'<script src="app.js?v='+VER+'"></script>\n</body>\n</html>\n'
open(os.path.join(ROOT,'index.html'),'w',encoding='utf-8').write(idx)
open(os.path.join(ROOT,'app.js'),'w',encoding='utf-8').write(js)
open(os.path.join(ROOT,'sw.js'),'w',encoding='utf-8').write(rd('sw.tpl.js').replace('@@VER@@',VER))
open(os.path.join(ROOT,'version.json'),'w').write(json.dumps({'v':VER})+'\n')
if '--artifact' in sys.argv:
    out=sys.argv[sys.argv.index('--artifact')+1]
    art='<title>321管家</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n'+fonts+'<style>\n'+css+'</style>\n'+body+'<script>\n'+js+'</script>\n'
    open(out,'w',encoding='utf-8').write(art)
print(VER,'index.html',len(idx.encode()),'bytes · app.js',len(js.encode()),'bytes')
