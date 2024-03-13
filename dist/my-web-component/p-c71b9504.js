const t = 'my-web-component';
let n;
let e;
let s = false;
let l = false;
const o = (t, n = '') => {
  {
    return () => {};
  }
};
const c = (t, n) => {
  {
    return () => {};
  }
};
const i = '{visibility:hidden}.hydrated{visibility:inherit}';
const f = 'slot-fb{display:contents}slot-fb[hidden]{display:none}';
const r = {};
const u = t => t != null;
const a = t => {
  t = typeof t;
  return t === 'object' || t === 'function';
};
function d(t) {
  var n, e, s;
  return (s = (e = (n = t.head) === null || n === void 0 ? void 0 : n.querySelector('meta[name="csp-nonce"]')) === null || e === void 0 ? void 0 : e.getAttribute('content')) !==
    null && s !== void 0
    ? s
    : undefined;
}
const y = (t, n, ...e) => {
  let s = null;
  let l = null;
  let o = false;
  let c = false;
  const i = [];
  const f = n => {
    for (let e = 0; e < n.length; e++) {
      s = n[e];
      if (Array.isArray(s)) {
        f(s);
      } else if (s != null && typeof s !== 'boolean') {
        if ((o = typeof t !== 'function' && !a(s))) {
          s = String(s);
        }
        if (o && c) {
          i[i.length - 1].t += s;
        } else {
          i.push(o ? p(null, s) : s);
        }
        c = o;
      }
    }
  };
  f(e);
  if (n) {
    if (n.key) {
      l = n.key;
    }
    {
      const t = n.className || n.class;
      if (t) {
        n.class =
          typeof t !== 'object'
            ? t
            : Object.keys(t)
                .filter(n => t[n])
                .join(' ');
      }
    }
  }
  const r = p(t, null);
  r.l = n;
  if (i.length > 0) {
    r.o = i;
  }
  {
    r.i = l;
  }
  return r;
};
const p = (t, n) => {
  const e = { u: 0, p: t, t: n, h: null, o: null };
  {
    e.l = null;
  }
  {
    e.i = null;
  }
  return e;
};
const h = {};
const m = t => t && t.p === h;
const $ = (t, n) => {
  if (t != null && !a(t)) {
    if (n & 1) {
      return String(t);
    }
    return t;
  }
  return t;
};
const v = t => ct(t).$hostElement$;
const b = (t, n, e) => {
  const s = mt.ce(n, e);
  t.dispatchEvent(s);
  return s;
};
const w = new WeakMap();
const S = (t, n, e) => {
  let s = yt.get(t);
  if (vt && e) {
    s = s || new CSSStyleSheet();
    if (typeof s === 'string') {
      s = n;
    } else {
      s.replaceSync(n);
    }
  } else {
    s = n;
  }
  yt.set(t, s);
};
const g = (t, n, e) => {
  var s;
  const l = k(n);
  const o = yt.get(l);
  t = t.nodeType === 11 ? t : ht;
  if (o) {
    if (typeof o === 'string') {
      t = t.head || t;
      let e = w.get(t);
      let c;
      if (!e) {
        w.set(t, (e = new Set()));
      }
      if (!e.has(l)) {
        {
          c = ht.createElement('style');
          c.innerHTML = o;
          const n = (s = mt.m) !== null && s !== void 0 ? s : d(ht);
          if (n != null) {
            c.setAttribute('nonce', n);
          }
          t.insertBefore(c, t.querySelector('link'));
        }
        if (n.u & 4) {
          c.innerHTML += f;
        }
        if (e) {
          e.add(l);
        }
      }
    } else if (!t.adoptedStyleSheets.includes(o)) {
      t.adoptedStyleSheets = [...t.adoptedStyleSheets, o];
    }
  }
  return l;
};
const j = t => {
  const n = t.$;
  const e = t.$hostElement$;
  const s = n.u;
  const l = o('attachStyles', n.v);
  const c = g(e.shadowRoot ? e.shadowRoot : e.getRootNode(), n);
  if (s & 10) {
    e['s-sc'] = c;
    e.classList.add(c + '-h');
  }
  l();
};
const k = (t, n) => 'sc-' + t.v;
const C = (t, n, e, s, l, o) => {
  if (e !== s) {
    let c = rt(t, n);
    let i = n.toLowerCase();
    if (n === 'class') {
      const n = t.classList;
      const l = O(e);
      const o = O(s);
      n.remove(...l.filter(t => t && !o.includes(t)));
      n.add(...o.filter(t => t && !l.includes(t)));
    } else if (n === 'key');
    else if (!c && n[0] === 'o' && n[1] === 'n') {
      if (n[2] === '-') {
        n = n.slice(3);
      } else if (rt(pt, i)) {
        n = i.slice(2);
      } else {
        n = i[2] + n.slice(3);
      }
      if (e || s) {
        const l = n.endsWith(P);
        n = n.replace(x, '');
        if (e) {
          mt.rel(t, n, e, l);
        }
        if (s) {
          mt.ael(t, n, s, l);
        }
      }
    } else {
      const i = a(s);
      if ((c || (i && s !== null)) && !l) {
        try {
          if (!t.tagName.includes('-')) {
            const l = s == null ? '' : s;
            if (n === 'list') {
              c = false;
            } else if (e == null || t[n] != l) {
              t[n] = l;
            }
          } else {
            t[n] = s;
          }
        } catch (t) {}
      }
      if (s == null || s === false) {
        if (s !== false || t.getAttribute(n) === '') {
          {
            t.removeAttribute(n);
          }
        }
      } else if ((!c || o & 4 || l) && !i) {
        s = s === true ? '' : s;
        {
          t.setAttribute(n, s);
        }
      }
    }
  }
};
const M = /\s/;
const O = t => (!t ? [] : t.split(M));
const P = 'Capture';
const x = new RegExp(P + '$');
const E = (t, n, e, s) => {
  const l = n.h.nodeType === 11 && n.h.host ? n.h.host : n.h;
  const o = (t && t.l) || r;
  const c = n.l || r;
  {
    for (s in o) {
      if (!(s in c)) {
        C(l, s, o[s], undefined, e, n.u);
      }
    }
  }
  for (s in c) {
    C(l, s, o[s], c[s], e, n.u);
  }
};
const U = (t, l, o, c) => {
  const i = l.o[o];
  let f = 0;
  let r;
  let a;
  if (i.t !== null) {
    r = i.h = ht.createTextNode(i.t);
  } else {
    r = i.h = ht.createElement(i.p);
    {
      E(null, i, s);
    }
    if (u(n) && r['s-si'] !== n) {
      r.classList.add((r['s-si'] = n));
    }
    if (i.o) {
      for (f = 0; f < i.o.length; ++f) {
        a = U(t, i, f);
        if (a) {
          r.appendChild(a);
        }
      }
    }
  }
  r['s-hn'] = e;
  return r;
};
const A = (t, n, s, l, o, c) => {
  let i = t;
  let f;
  if (i.shadowRoot && i.tagName === e) {
    i = i.shadowRoot;
  }
  for (; o <= c; ++o) {
    if (l[o]) {
      f = U(null, s, o);
      if (f) {
        l[o].h = f;
        i.insertBefore(f, n);
      }
    }
  }
};
const L = (t, n, e) => {
  for (let s = n; s <= e; ++s) {
    const n = t[s];
    if (n) {
      const t = n.h;
      if (t) {
        t.remove();
      }
    }
  }
};
const N = (t, n, e, s, l = false) => {
  let o = 0;
  let c = 0;
  let i = 0;
  let f = 0;
  let r = n.length - 1;
  let u = n[0];
  let a = n[r];
  let d = s.length - 1;
  let y = s[0];
  let p = s[d];
  let h;
  let m;
  while (o <= r && c <= d) {
    if (u == null) {
      u = n[++o];
    } else if (a == null) {
      a = n[--r];
    } else if (y == null) {
      y = s[++c];
    } else if (p == null) {
      p = s[--d];
    } else if (R(u, y, l)) {
      T(u, y, l);
      u = n[++o];
      y = s[++c];
    } else if (R(a, p, l)) {
      T(a, p, l);
      a = n[--r];
      p = s[--d];
    } else if (R(u, p, l)) {
      T(u, p, l);
      t.insertBefore(u.h, a.h.nextSibling);
      u = n[++o];
      p = s[--d];
    } else if (R(a, y, l)) {
      T(a, y, l);
      t.insertBefore(a.h, u.h);
      a = n[--r];
      y = s[++c];
    } else {
      i = -1;
      {
        for (f = o; f <= r; ++f) {
          if (n[f] && n[f].i !== null && n[f].i === y.i) {
            i = f;
            break;
          }
        }
      }
      if (i >= 0) {
        m = n[i];
        if (m.p !== y.p) {
          h = U(n && n[c], e, i);
        } else {
          T(m, y, l);
          n[i] = undefined;
          h = m.h;
        }
        y = s[++c];
      } else {
        h = U(n && n[c], e, c);
        y = s[++c];
      }
      if (h) {
        {
          u.h.parentNode.insertBefore(h, u.h);
        }
      }
    }
  }
  if (o > r) {
    A(t, s[d + 1] == null ? null : s[d + 1].h, e, s, c, d);
  } else if (c > d) {
    L(n, o, r);
  }
};
const R = (t, n, e = false) => {
  if (t.p === n.p) {
    if (!e) {
      return t.i === n.i;
    }
    return true;
  }
  return false;
};
const T = (t, n, e = false) => {
  const l = (n.h = t.h);
  const o = t.o;
  const c = n.o;
  const i = n.t;
  if (i === null) {
    {
      {
        E(t, n, s);
      }
    }
    if (o !== null && c !== null) {
      N(l, o, n, c, e);
    } else if (c !== null) {
      if (t.t !== null) {
        l.textContent = '';
      }
      A(l, null, n, c, 0, c.length - 1);
    } else if (o !== null) {
      L(o, 0, o.length - 1);
    }
  } else if (t.t !== i) {
    l.data = i;
  }
};
const W = (t, s, l = false) => {
  const o = t.$hostElement$;
  const c = t.S || p(null, null);
  const i = m(s) ? s : y(null, null, s);
  e = o.tagName;
  if (l && i.l) {
    for (const t of Object.keys(i.l)) {
      if (o.hasAttribute(t) && !['key', 'ref', 'style', 'class'].includes(t)) {
        i.l[t] = o[t];
      }
    }
  }
  i.p = null;
  i.u |= 4;
  t.S = i;
  i.h = c.h = o.shadowRoot || o;
  {
    n = o['s-sc'];
  }
  T(c, i, l);
};
const H = (t, n) => {
  if (n && !t.j && n['s-p']) {
    n['s-p'].push(new Promise(n => (t.j = n)));
  }
};
const q = (t, n) => {
  {
    t.u |= 16;
  }
  if (t.u & 4) {
    t.u |= 512;
    return;
  }
  H(t, t.k);
  const e = () => F(t, n);
  return Ct(e);
};
const F = (t, n) => {
  const e = o('scheduleUpdate', t.$.v);
  const s = t.C;
  let l;
  if (n) {
    {
      l = G(s, 'componentWillLoad');
    }
  }
  e();
  return I(l, () => _(t, s, n));
};
const I = (t, n) => (V(t) ? t.then(n) : n());
const V = t => t instanceof Promise || (t && t.then && typeof t.then === 'function');
const _ = async (t, n, e) => {
  var s;
  const l = t.$hostElement$;
  const c = o('update', t.$.v);
  const i = l['s-rc'];
  if (e) {
    j(t);
  }
  const f = o('render', t.$.v);
  {
    z(t, n, l, e);
  }
  if (i) {
    i.map(t => t());
    l['s-rc'] = undefined;
  }
  f();
  c();
  {
    const n = (s = l['s-p']) !== null && s !== void 0 ? s : [];
    const e = () => B(t);
    if (n.length === 0) {
      e();
    } else {
      Promise.all(n).then(e);
      t.u |= 4;
      n.length = 0;
    }
  }
};
const z = (t, n, e, s) => {
  try {
    n = n.render();
    {
      t.u &= ~16;
    }
    {
      t.u |= 2;
    }
    {
      {
        {
          W(t, n, s);
        }
      }
    }
  } catch (n) {
    ut(n, t.$hostElement$);
  }
  return null;
};
const B = t => {
  const n = t.$.v;
  const e = t.$hostElement$;
  const s = o('postUpdate', n);
  const l = t.k;
  if (!(t.u & 64)) {
    t.u |= 64;
    {
      J(e);
    }
    s();
    {
      t.M(e);
      if (!l) {
        D();
      }
    }
  } else {
    s();
  }
  {
    if (t.j) {
      t.j();
      t.j = undefined;
    }
    if (t.u & 512) {
      kt(() => q(t, false));
    }
    t.u &= ~(4 | 512);
  }
};
const D = n => {
  {
    J(ht.documentElement);
  }
  kt(() => b(pt, 'appload', { detail: { namespace: t } }));
};
const G = (t, n, e) => {
  if (t && t[n]) {
    try {
      return t[n](e);
    } catch (t) {
      ut(t);
    }
  }
  return undefined;
};
const J = t => t.classList.add('hydrated');
const K = (t, n) => ct(t).O.get(n);
const Q = (t, n, e, s) => {
  const l = ct(t);
  const o = l.O.get(n);
  const c = l.u;
  const i = l.C;
  e = $(e, s.P[n][0]);
  const f = Number.isNaN(o) && Number.isNaN(e);
  const r = e !== o && !f;
  if ((!(c & 8) || o === undefined) && r) {
    l.O.set(n, e);
    if (i) {
      if ((c & (2 | 16)) === 2) {
        q(l, false);
      }
    }
  }
};
const X = (t, n, e) => {
  var s;
  const l = t.prototype;
  if (n.P) {
    const o = Object.entries(n.P);
    o.map(([t, [s]]) => {
      if (s & 31 || (e & 2 && s & 32)) {
        Object.defineProperty(l, t, {
          get() {
            return K(this, t);
          },
          set(e) {
            Q(this, t, e, n);
          },
          configurable: true,
          enumerable: true,
        });
      }
    });
    if (e & 1) {
      const e = new Map();
      l.attributeChangedCallback = function (t, s, o) {
        mt.jmp(() => {
          var c;
          const i = e.get(t);
          if (this.hasOwnProperty(i)) {
            o = this[i];
            delete this[i];
          } else if (l.hasOwnProperty(i) && typeof this[i] === 'number' && this[i] == o) {
            return;
          } else if (i == null) {
            const e = ct(this);
            const l = e === null || e === void 0 ? void 0 : e.u;
            if (l && !(l & 8) && l & 128 && o !== s) {
              const l = e.C;
              const i = (c = n.U) === null || c === void 0 ? void 0 : c[t];
              i === null || i === void 0
                ? void 0
                : i.forEach(n => {
                    if (l[n] != null) {
                      l[n].call(l, o, s, t);
                    }
                  });
            }
            return;
          }
          this[i] = o === null && typeof this[i] === 'boolean' ? false : o;
        });
      };
      t.observedAttributes = Array.from(
        new Set([
          ...Object.keys((s = n.U) !== null && s !== void 0 ? s : {}),
          ...o
            .filter(([t, n]) => n[0] & 15)
            .map(([t, n]) => {
              const s = n[1] || t;
              e.set(s, t);
              return s;
            }),
        ]),
      );
    }
  }
  return t;
};
const Y = async (t, n, e, s) => {
  let l;
  if ((n.u & 32) === 0) {
    n.u |= 32;
    {
      l = dt(e);
      if (l.then) {
        const t = c();
        l = await l;
        t();
      }
      if (!l.isProxied) {
        X(l, e, 2);
        l.isProxied = true;
      }
      const t = o('createInstance', e.v);
      {
        n.u |= 8;
      }
      try {
        new l(n);
      } catch (t) {
        ut(t);
      }
      {
        n.u &= ~8;
      }
      t();
    }
    if (l.style) {
      let t = l.style;
      const n = k(e);
      if (!yt.has(n)) {
        const s = o('registerStyles', e.v);
        S(n, t, !!(e.u & 1));
        s();
      }
    }
  }
  const i = n.k;
  const f = () => q(n, true);
  if (i && i['s-rc']) {
    i['s-rc'].push(f);
  } else {
    f();
  }
};
const Z = t => {};
const tt = t => {
  if ((mt.u & 1) === 0) {
    const n = ct(t);
    const e = n.$;
    const s = o('connectedCallback', e.v);
    if (!(n.u & 1)) {
      n.u |= 1;
      {
        let e = t;
        while ((e = e.parentNode || e.host)) {
          if (e['s-p']) {
            H(n, (n.k = e));
            break;
          }
        }
      }
      if (e.P) {
        Object.entries(e.P).map(([n, [e]]) => {
          if (e & 31 && t.hasOwnProperty(n)) {
            const e = t[n];
            delete t[n];
            t[n] = e;
          }
        });
      }
      {
        Y(t, n, e);
      }
    } else {
      if (n === null || n === void 0 ? void 0 : n.C);
      else if (n === null || n === void 0 ? void 0 : n.A) {
        n.A.then(() => Z());
      }
    }
    s();
  }
};
const nt = t => {};
const et = async t => {
  if ((mt.u & 1) === 0) {
    const n = ct(t);
    if (n === null || n === void 0 ? void 0 : n.C);
    else if (n === null || n === void 0 ? void 0 : n.A) {
      n.A.then(() => nt());
    }
  }
};
const st = (t, n = {}) => {
  var e;
  const s = o();
  const l = [];
  const c = n.exclude || [];
  const r = pt.customElements;
  const u = ht.head;
  const a = u.querySelector('meta[charset]');
  const y = ht.createElement('style');
  const p = [];
  let h;
  let m = true;
  Object.assign(mt, n);
  mt.L = new URL(n.resourcesUrl || './', ht.baseURI).href;
  let $ = false;
  t.map(t => {
    t[1].map(n => {
      const e = { u: n[0], v: n[1], P: n[2], N: n[3] };
      if (e.u & 4) {
        $ = true;
      }
      {
        e.P = n[2];
      }
      const s = e.v;
      const o = class extends HTMLElement {
        constructor(t) {
          super(t);
          t = this;
          ft(t, e);
          if (e.u & 1) {
            {
              {
                t.attachShadow({ mode: 'open' });
              }
            }
          }
        }
        connectedCallback() {
          if (h) {
            clearTimeout(h);
            h = null;
          }
          if (m) {
            p.push(this);
          } else {
            mt.jmp(() => tt(this));
          }
        }
        disconnectedCallback() {
          mt.jmp(() => et(this));
        }
        componentOnReady() {
          return ct(this).A;
        }
      };
      e.R = t[0];
      if (!c.includes(s) && !r.get(s)) {
        l.push(s);
        r.define(s, X(o, e, 1));
      }
    });
  });
  if (l.length > 0) {
    if ($) {
      y.textContent += f;
    }
    {
      y.textContent += l + i;
    }
    if (y.innerHTML.length) {
      y.setAttribute('data-styles', '');
      const t = (e = mt.m) !== null && e !== void 0 ? e : d(ht);
      if (t != null) {
        y.setAttribute('nonce', t);
      }
      u.insertBefore(y, a ? a.nextSibling : u.firstChild);
    }
  }
  m = false;
  if (p.length) {
    p.map(t => t.connectedCallback());
  } else {
    {
      mt.jmp(() => (h = setTimeout(D, 30)));
    }
  }
  s();
};
const lt = t => (mt.m = t);
const ot = new WeakMap();
const ct = t => ot.get(t);
const it = (t, n) => ot.set((n.C = t), n);
const ft = (t, n) => {
  const e = { u: 0, $hostElement$: t, $: n, O: new Map() };
  {
    e.A = new Promise(t => (e.M = t));
    t['s-p'] = [];
    t['s-rc'] = [];
  }
  return ot.set(t, e);
};
const rt = (t, n) => n in t;
const ut = (t, n) => (0, console.error)(t, n);
const at = new Map();
const dt = (t, n, e) => {
  const s = t.v.replace(/-/g, '_');
  const l = t.R;
  const o = at.get(l);
  if (o) {
    return o[s];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return import(`./${l}.entry.js${''}`).then(t => {
    {
      at.set(l, t);
    }
    return t[s];
  }, ut);
};
const yt = new Map();
const pt = typeof window !== 'undefined' ? window : {};
const ht = pt.document || { head: {} };
const mt = {
  u: 0,
  L: '',
  jmp: t => t(),
  raf: t => requestAnimationFrame(t),
  ael: (t, n, e, s) => t.addEventListener(n, e, s),
  rel: (t, n, e, s) => t.removeEventListener(n, e, s),
  ce: (t, n) => new CustomEvent(t, n),
};
const $t = t => Promise.resolve(t);
const vt = (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === 'function';
  } catch (t) {}
  return false;
})();
const bt = [];
const wt = [];
const St = (t, n) => e => {
  t.push(e);
  if (!l) {
    l = true;
    if (n && mt.u & 4) {
      kt(jt);
    } else {
      mt.raf(jt);
    }
  }
};
const gt = t => {
  for (let n = 0; n < t.length; n++) {
    try {
      t[n](performance.now());
    } catch (t) {
      ut(t);
    }
  }
  t.length = 0;
};
const jt = () => {
  gt(bt);
  {
    gt(wt);
    if ((l = bt.length > 0)) {
      mt.raf(jt);
    }
  }
};
const kt = t => $t().then(t);
const Ct = St(wt, true);
export { h as H, st as b, v as g, y as h, $t as p, it as r, lt as s };
//# sourceMappingURL=p-c71b9504.js.map
