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
