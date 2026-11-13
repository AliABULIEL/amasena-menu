/* Amasina digital menu. Vanilla JS, no framework. Data: menu-data.js (window.MENU_DATA). */
(() => {
  'use strict';
  const D = window.MENU_DATA;
  if (!D) return;
  const M = D.marketing, U = M.ui, P = D.photos;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const C = navigator.connection || {};
  const LITE = RM || !!C.saveData || /(^|-)2g$/.test(C.effectiveType || '');
  const IMG = 'assets/img/', VID = 'assets/video/';
  const TITLES = { ar: 'Amasina · أماسينا — المنيو', he: 'Amasina · אמסינה — התפריט' };
  let lang = 'ar';

  const pick = (o, k) => (o && o[k + '_' + lang]) || '';
  const get = path => path.split('.').reduce((o, k) => (o == null ? o : o[k]), D);

  function h(tag, cls, attrs, kids) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (attrs) for (const k in attrs) if (attrs[k] != null) el.setAttribute(k, attrs[k]);
    if (kids) el.append(...kids);
    return el;
  }
  function svgUse(id) {
    const ns = 'http://www.w3.org/2000/svg';
    const s = document.createElementNS(ns, 'svg');
    s.setAttribute('aria-hidden', 'true');
    s.setAttribute('focusable', 'false');
    const u = document.createElementNS(ns, 'use');
    u.setAttribute('href', '#' + id);
    s.append(u);
    return s;
  }

  /* text with *keyword* -> <em class="kw">, optional per-word spans (no innerHTML) */
  function rich(el, txt, words) {
    el.textContent = '';
    let i = 0;
    const fill = (target, part) => {
      if (!words) { target.append(part); return; }
      part.split(/(\s+)/).forEach(w => {
        if (!w) return;
        if (/^\s+$/.test(w)) target.append(w);
        else target.append(h('span', 'w', { style: '--i:' + i++ }, [w]));
      });
    };
    String(txt).split('*').forEach((part, k) => {
      if (!part) return;
      if (k % 2) { const em = h('em', 'kw'); fill(em, part); el.append(em); } else fill(el, part);
    });
  }

  /* bindings: re-applied on every language switch */
  const binds = [];
  function bind(el, fn, opt = {}) { binds.push({ el, fn, ...opt }); }
  function applyBinds() {
    for (const b of binds) {
      const v = b.fn();
      if (b.attr) b.el.setAttribute(b.attr, v);
      else if (b.rich) rich(b.el, v, b.words);
      else b.el.textContent = v;
    }
  }
  const tx = (el, obj, key, opt) => { bind(el, () => pick(obj, key), opt); return el; };

  /* ---------- static markup bindings ---------- */
  $$('[data-t]').forEach(el => {
    const path = el.dataset.t;
    bind(el, () => get(path + '_' + lang) || '', {
      rich: el.hasAttribute('data-rich'), words: el.hasAttribute('data-words'), attr: el.dataset.attr
    });
  });
  $$('[data-price]').forEach(el => {
    const v = M.salad_offer.options[+el.dataset.price].price;
    el.textContent = v == null ? '' : String(v);
  });
  const LOGO_ALT = () => 'Amasina – ' + pick(M.brand, 'slogan');
  $$('img[src*="logo"]').forEach(img => { if (img.alt) bind(img, LOGO_ALT, { attr: 'alt' }); });
  bind($('#lb-x'), () => pick(U, 'close'), { attr: 'aria-label' });
  $('#ig').href = M.footer.instagram_url;
  $('#maps').href = M.footer.maps_url;

  /* ---------- images ---------- */
  function photoImg(key, sizes, widths) {
    const img = h('img', null, {
      src: IMG + key + '-720.webp',
      srcset: widths.map(w => `${IMG}${key}-${w}.webp ${w}w`).join(', '),
      sizes, width: 1080, height: 1350, loading: 'lazy', decoding: 'async'
    });
    bind(img, () => pick(P[key], 'alt'), { attr: 'alt' });
    return img;
  }
  const strip = $('#strip');
  M.salad_offer.strip.forEach(k => {
    strip.append(h('div', 'frame', null, [h('div', 'ph', null, [photoImg(k, '(min-width:600px) 190px, 34vw', [360, 720])])]));
  });
  const gal = $('#gallery');
  M.salad_offer.gallery.forEach(k => {
    const fig = h('figure', 'frame', null, [h('div', 'ph', null, [photoImg(k, '(min-width:600px) 340px, 62vw', [360, 720])])]);
    if (P[k] && P[k].caption_ar) fig.append(tx(h('figcaption'), P[k], 'caption'));
    gal.append(fig);
  });

  /* ---------- prices ---------- */
  const unit = () => pick(U, 'weight_unit');
  const priceEl = n => h('bdi', 'price', { dir: 'ltr' }, [h('span', 'n', null, [String(n)]), ' ', h('span', 'cur', null, [U.currency || '₪'])]);
  const srEl = () => h('span', 'sr', null, [pick(U, 'price_aria')]);
  const isNum = v => typeof v === 'number' && isFinite(v);
  const state = {};   // section id -> { weight, any }
  const cells = [];   // { item, slot, label, card }

  function drawCell(c, roll) {
    const { item, slot, label, card } = c;
    slot.textContent = '';
    if (label) label.textContent = '';
    if (item.prices) {
      const st = state[item.section];
      if (!st.any) {
        slot.append(srEl());
        const wt = h('span', 'wt');
        if (card) wt.textContent = `250 / 330 ${unit()}`;
        else wt.append(h('bdi', null, { dir: 'ltr' }, ['250 /']), h('span', null, null, [`330 ${unit()}`]));
        (label || slot).append(wt);
        return;
      }
      const v = item.prices[st.weight];
      const el = isNum(v) ? priceEl(v) : srEl();
      if (roll && !RM) el.classList.add('roll');
      slot.append(el);
      if (label) label.append(h('span', 'wt', null, [`${st.weight} ${unit()}`]));
      return;
    }
    slot.append(isNum(item.price) ? priceEl(item.price) : srEl());
  }
  const drawCells = sec => cells.forEach(c => { if (!sec || c.item.section === sec) drawCell(c, !!sec); });

  /* ---------- lightbox ---------- */
  const lb = $('#lb');
  let lbFrom = null, lbItem = null;
  function openLb(item, from) {
    lbItem = item; lbFrom = from;
    const img = $('#lb-img');
    img.src = IMG + item.photo + '-1080.webp';
    img.alt = pick(P[item.photo], 'alt');
    fillLb();
    if (lb.showModal) lb.showModal(); else lb.setAttribute('open', '');
  }
  function fillLb() {
    if (!lbItem) return;
    $('#lb-name').textContent = pick(lbItem, 'name');
    $('#lb-desc').textContent = pick(lbItem, 'desc');
  }
  $('#lb-x').addEventListener('click', () => lb.close());
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  lb.addEventListener('close', () => { lbItem = null; if (lbFrom) lbFrom.focus(); });

  /* ---------- badges ---------- */
  function badge(b) {
    if (b === 'preorder') return tx(h('span', 'bdg bdg-pre'), U, 'preorder');
    if (b === 'kg1') return tx(h('span', 'bdg'), U, 'kg1');
    return null;
  }

  /* ---------- menu sections ---------- */
  function opener(sec) {
    const o = sec.opener || { type: 'type' };
    const h2 = tx(h('h2', 'h1', { id: 'h-' + sec.id }), sec, 'headline', { rich: true });
    const sub = tx(h('p', 'sub'), sec, 'tagline');
    const mark = h('img', 'mark', { src: 'assets/logo.webp', width: 31, height: 24, alt: '', 'aria-hidden': 'true', loading: 'lazy' });
    if (o.type === 'type') {
      const sw = svgUse('swash'); sw.setAttribute('class', 'swash');
      return h('div', 'head rv', null, [mark, h2, sw, sub]);
    }
    let media;
    if (o.type === 'video') {
      media = h('video', null, {
        muted: '', playsinline: '', loop: '', preload: 'none', 'aria-hidden': 'true',
        poster: VID + o.ref + '-poster.webp', 'data-src': VID + o.ref + '.mp4', width: 480, height: 600
      });
      media.muted = true;
      videos.push(media);
    } else {
      media = photoImg(o.ref, '(min-width:600px) 560px, 100vw', [720, 1080]);
    }
    media.classList.add('media');
    return h('figure', 'band rv', null, [media, mark, h('div', 'band-txt', null, [h2, sub])]);
  }

  function card(item) {
    const btn = h('button', 'ph', { type: 'button' }, [photoImg(item.photo, '(min-width:600px) 260px, 45vw', [360, 720])]);
    btn.addEventListener('click', () => openLb(item, btn));
    const bs = (item.badges || []).map(badge).filter(Boolean);
    const phWrap = h('div', null, { style: 'position:relative' }, [btn]);
    if (bs.length) phWrap.append(h('div', 'badges', null, bs));
    const slot = h('span', 'slot'), label = h('span', 'lbl');
    cells.push({ item, slot, label, card: true });
    const kids = [tx(h('h3'), item, 'name')];
    if (item.desc_short_ar) kids.push(tx(h('p', 'ds'), item, 'desc_short'));
    kids.push(h('div', 'card-foot', null, [slot, label]));
    return h('article', 'card frame rv', null, [phWrap, h('div', 'card-txt', null, kids)]);
  }

  function row(item, feature) {
    const tile = h('div', 'tile', { 'aria-hidden': 'true' }, [svgUse('i-' + (item.icon || 'steak'))]);
    const name = h('h3');
    const nameTxt = tx(h('span'), item, 'name');
    name.append(nameTxt);
    (item.badges || []).map(badge).filter(Boolean).forEach(b => name.append(' ', b));
    const end = h('div', 'end');
    cells.push({ item, slot: end, label: null, card: false });
    return h('li', 'row rv' + (feature ? ' feature' : ''), null, [tile, h('div', null, null, [name, tx(h('p'), item, 'desc')]), end]);
  }

  function weightToggle(sec, st) {
    const wrap = h('div', 'wtg', { 'data-w': st.weight });
    const grp = h('div', 'lt', { role: 'group' });
    bind(grp, () => pick(U, 'weight_label'), { attr: 'aria-label' });
    ['250', '330'].forEach(w => {
      const b = h('button', null, { type: 'button', 'aria-pressed': String(w === st.weight) });
      bind(b, () => `${w} ${unit()}`);
      b.addEventListener('click', () => {
        if (st.weight === w) return;
        st.weight = w;
        wrap.dataset.w = w;
        $$('button', grp).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
        drawCells(sec.id);
      });
      grp.append(b);
    });
    grp.append(h('span', 'lt-thumb', { 'aria-hidden': 'true' }));
    wrap.append(tx(h('span', 'wtg-lbl', { 'aria-hidden': 'true' }), U, 'weight_label'), grp);
    if (!st.any) wrap.hidden = true;   // R15: hidden until a price is filled in
    return wrap;
  }

  const videos = [];
  const menu = $('#menu');
  D.sections.filter(s => s.id !== 'salads').forEach(sec => {
    const items = D.items.filter(i => i.section === sec.id);
    const weighted = items.some(i => i.prices);
    const vals = items.flatMap(i => (i.prices ? Object.values(i.prices) : [i.price]));
    const st = state[sec.id] = { weight: '250', any: weighted && vals.some(isNum) };
    const el = h('section', 'sec', { id: sec.id, 'aria-labelledby': 'h-' + sec.id }, [opener(sec)]);
    if (vals.some(v => !isNum(v))) {
      el.append(tx(h('p', 'note'), U, weighted ? 'price_note_weighted' : 'price_note'));
    }
    const body = h('div', 'sec-body');
    if (weighted) body.append(weightToggle(sec, st));
    const photoItems = items.filter(i => i.photo && P[i.photo]);
    const rowItems = items.filter(i => !(i.photo && P[i.photo]));
    if (photoItems.length) body.append(h('div', 'grid', null, photoItems.map(card)));
    if (rowItems.length) body.append(h('ul', 'rows', null, rowItems.map(i => row(i, sec.id === 'specials'))));
    el.append(body);
    menu.append(el);
  });

  /* ---------- chips ---------- */
  const track = $('#chips'), line = $('.chip-line', track);
  const chipMap = {};
  D.sections.forEach(sec => {
    const a = tx(h('a', 'chip', { href: '#' + sec.id }), sec, 'chip');
    chipMap[sec.id] = a;
    track.append(a);
  });
  let activeId = null;
  function placeLine() {
    const a = chipMap[activeId];
    if (!a) { line.style.opacity = 0; return; }
    const tr = track.getBoundingClientRect(), r = a.getBoundingClientRect();
    line.style.opacity = 1;
    line.style.transform = `translateX(${r.left - tr.left + 12}px) scaleX(${Math.max(r.width - 24, 1)})`;
  }
  function setActive(id) {
    if (id === activeId) return;
    activeId = id;
    for (const k in chipMap) chipMap[k].classList.toggle('on', k === id);
    placeLine();
    const a = chipMap[id], nav = track.parentElement;
    if (a && bar.classList.contains('on')) {
      const nr = nav.getBoundingClientRect(), r = a.getBoundingClientRect();
      nav.scrollBy({ left: r.left + r.width / 2 - (nr.left + nr.width / 2), behavior: RM ? 'auto' : 'smooth' });
    }
  }

  /* ---------- observers ---------- */
  const bar = $('#bar');
  const hasIO = 'IntersectionObserver' in window;
  if (hasIO) {
    new IntersectionObserver(([e]) => {
      bar.classList.toggle('on', e.intersectionRatio < 0.2);
      if (bar.classList.contains('on')) placeLine();
    }, { threshold: [0, 0.2, 0.4] }).observe($('#top'));

    const secIO = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -54% 0px' });
    D.sections.forEach(s => { const el = document.getElementById(s.id); if (el) secIO.observe(el); });
  } else bar.classList.add('on');

  // reveal: one observer, unobserve after the first reveal; 50 ms stagger within a parent
  const rv = $$('.rv');
  const groups = new Map();
  rv.forEach(el => {
    const p = el.parentElement, n = groups.get(p) || 0;
    groups.set(p, n + 1);
    if (n) el.style.setProperty('--d', Math.min(n, 6) * 50 + 'ms');
  });
  if (RM || !hasIO) rv.forEach(el => el.classList.add('in'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    rv.forEach(el => io.observe(el));
  }

  // videos: src only near view, play at >= 50 % visible, pause below; never under reduced motion / Save-Data / 2g
  if (!LITE && hasIO) {
    const vio = new IntersectionObserver(es => es.forEach(e => {
      const v = e.target;
      if (e.intersectionRatio >= 0.5) {
        if (!v.getAttribute('src')) v.src = v.dataset.src;
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else if (!v.paused) v.pause();
    }), { threshold: [0, 0.5] });
    videos.forEach(v => vio.observe(v));
  }

  /* ---------- language ---------- */
  function resolveLang() {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'ar' || q === 'he') return q;
    let s = null;
    try { s = localStorage.getItem('amasina.lang'); } catch (e) { /* storage blocked */ }
    if (s === 'ar' || s === 'he') return s;
    // first ar/he in preference order wins
    const first = (navigator.languages || [navigator.language || '']).find(l => /^(ar|he)/i.test(l)) || '';
    return /^he/i.test(first) ? 'he' : 'ar';
  }
  function setLang(l, first) {
    lang = l;
    const root = document.documentElement;
    root.lang = l;
    root.dir = 'rtl';
    try { localStorage.setItem('amasina.lang', l); } catch (e) { /* storage blocked */ }
    applyBinds();
    drawCells();
    fillLb();
    document.title = TITLES[l];
    $$('.lt [data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    if (!first) {
      requestAnimationFrame(placeLine);
      if (!RM && document.body.animate) $('.page').animate([{ opacity: 0.25 }, { opacity: 1 }], { duration: 180, easing: 'ease-out' });
    }
  }
  $$('.lt [data-lang]').forEach(b => b.addEventListener('click', () => { if (b.dataset.lang !== lang) setLang(b.dataset.lang); }));

  setLang(resolveLang(), true);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeLine);
})();
