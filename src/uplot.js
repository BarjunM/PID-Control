/*! https://github.com/leeoniya/uPlot (v1.0.11) */
export var uPlot = (function () {
  "use strict";
  function n(n, t, e, r) {
    var i;
    e = e || 0;
    for (var a = 2147483647 >= (r = r || t.length - 1); r - e > 1; )
      n > t[(i = a ? (e + r) >> 1 : o((e + r) / 2))] ? (e = i) : (r = i);
    return n - t[e] > t[r] - n ? r : e;
  }
  function t(n, t, e, i) {
    var a = t - n,
      l = f(a || r(t) || 1),
      u = o(l),
      c = s(10, u) * e,
      v = 0 == a ? c : 0,
      h = g(
        (function (n, t) {
          return o(n / t) * t;
        })(n - v, c)
      ),
      m = g(p(t + v, c));
    return (
      i &&
        (0 == a
          ? t > 0
            ? ((h = 0), (m = 2 * t))
            : 0 > t && ((m = 0), (h = 2 * n))
          : (c > m - t && (m += c),
            c > n - h && (h -= c),
            n >= 0 && 0 > h && (h = 0),
            0 >= t && m > 0 && (m = 0))),
      [h, m]
    );
  }
  var e = Math,
    r = e.abs,
    o = e.floor,
    i = e.round,
    a = e.ceil,
    l = e.min,
    u = e.max,
    s = e.pow,
    f = e.log10,
    c = e.PI;
  function v(n, t) {
    return i(n / t) * t;
  }
  function h(n, t, e) {
    return l(u(n, t), e);
  }
  function m(n) {
    return "function" == typeof n
      ? n
      : function () {
          return n;
        };
  }
  function p(n, t) {
    return a(n / t) * t;
  }
  function d(n) {
    return i(1e3 * n) / 1e3;
  }
  function g(n) {
    return i(1e6 * n) / 1e6;
  }
  var x = Array.isArray;
  function w(n) {
    return "object" == typeof n && null !== n;
  }
  function b(n) {
    var t;
    if (x(n)) t = n.map(b);
    else if (w(n)) for (var e in ((t = {}), n)) t[e] = b(n[e]);
    else t = n;
    return t;
  }
  function y(n) {
    for (var t = arguments, e = 1; t.length > e; e++) {
      var r = t[e];
      for (var o in r) w(n[o]) ? y(n[o], b(r[o])) : (n[o] = b(r[o]));
    }
    return n;
  }
  var M = "width",
    k = "height",
    S = "top",
    T = "left",
    D = requestAnimationFrame,
    Y = document,
    E = window,
    _ = devicePixelRatio;
  function z(n, t) {
    null != t && n.classList.add(t);
  }
  function W(n, t, e) {
    n.style[t] = e + "px";
  }
  function F(n, t, e, r) {
    var o = Y.createElement(n);
    return null != t && z(o, t), null != e && e.insertBefore(o, r), o;
  }
  function A(n, t) {
    return F("div", n, t);
  }
  function C(n, t, e) {
    n.style.transform = "translate(" + t + "px," + e + "px)";
  }
  var H = { passive: !0 };
  function P(n, t, e) {
    t.addEventListener(n, e, H);
  }
  function N(n, t, e) {
    t.removeEventListener(n, e, H);
  }
  var V = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    L = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  function I(n) {
    return n.slice(0, 3);
  }
  var B = L.map(I),
    R = V.map(I),
    U = { MMMM: V, MMM: R, WWWW: L, WWW: B };
  function j(n) {
    return (10 > n ? "0" : "") + n;
  }
  var J = {
    YYYY: function (n) {
      return n.getFullYear();
    },
    YY: function (n) {
      return (n.getFullYear() + "").slice(2);
    },
    MMMM: function (n, t) {
      return t.MMMM[n.getMonth()];
    },
    MMM: function (n, t) {
      return t.MMM[n.getMonth()];
    },
    MM: function (n) {
      return j(n.getMonth() + 1);
    },
    M: function (n) {
      return n.getMonth() + 1;
    },
    DD: function (n) {
      return j(n.getDate());
    },
    D: function (n) {
      return n.getDate();
    },
    WWWW: function (n, t) {
      return t.WWWW[n.getDay()];
    },
    WWW: function (n, t) {
      return t.WWW[n.getDay()];
    },
    HH: function (n) {
      return j(n.getHours());
    },
    H: function (n) {
      return n.getHours();
    },
    h: function (n) {
      var t = n.getHours();
      return 0 == t ? 12 : t > 12 ? t - 12 : t;
    },
    AA: function (n) {
      return 12 > n.getHours() ? "AM" : "PM";
    },
    aa: function (n) {
      return 12 > n.getHours() ? "am" : "pm";
    },
    a: function (n) {
      return 12 > n.getHours() ? "a" : "p";
    },
    mm: function (n) {
      return j(n.getMinutes());
    },
    m: function (n) {
      return n.getMinutes();
    },
    ss: function (n) {
      return j(n.getSeconds());
    },
    s: function (n) {
      return n.getSeconds();
    },
    fff: function (n) {
      return (function (n) {
        return (10 > n ? "00" : 100 > n ? "0" : "") + n;
      })(n.getMilliseconds());
    }
  };
  function O(n, t) {
    t = t || U;
    for (var e, r = [], o = /\{([a-z]+)\}|[^{]+/gi; (e = o.exec(n)); )
      r.push("{" == e[0][0] ? J[e[1]] : e[0]);
    return function (n) {
      for (var e = "", o = 0; r.length > o; o++)
        e += "string" == typeof r[o] ? r[o] : r[o](n, t);
      return e;
    };
  }
  function G(n, t, e) {
    for (var o = [], i = n; t > i; i++)
      for (var a = 0; e.length > a; a++) {
        var l = e[a] * s(10, i);
        o.push(+l.toFixed(r(i)));
      }
    return o;
  }
  var q = [1, 2, 5],
    X = G(-12, 0, q),
    Z = G(0, 12, q),
    K = X.concat(Z),
    Q = 3600,
    $ = 86400,
    nn = 30 * $,
    tn = 365 * $,
    en = [5e-4].concat(G(-3, 0, q), [
      1,
      5,
      10,
      15,
      30,
      60,
      300,
      600,
      900,
      1800,
      Q,
      7200,
      3 * Q,
      4 * Q,
      6 * Q,
      8 * Q,
      43200,
      $,
      2 * $,
      3 * $,
      4 * $,
      5 * $,
      6 * $,
      7 * $,
      8 * $,
      9 * $,
      10 * $,
      15 * $,
      nn,
      2 * nn,
      3 * nn,
      4 * nn,
      6 * nn,
      tn,
      2 * tn,
      5 * tn,
      10 * tn,
      25 * tn,
      50 * tn,
      100 * tn
    ]);
  function rn(n, t) {
    return n.map(function (n) {
      return [n[0], t(n[1]), n[2], t(n[4] ? n[1] + n[3] : n[3])];
    });
  }
  var on = "{M}/{D}",
    an = "\n" + on,
    ln = "{h}:{mm}{aa}",
    un = [
      [tn, "{YYYY}", 7, "", 1],
      [28 * $, "{MMM}", 7, "\n{YYYY}", 1],
      [$, on, 7, "\n{YYYY}", 1],
      [Q, "{h}{aa}", 4, an, 1],
      [60, ln, 4, an, 1],
      [1, ":{ss}", 2, an + " " + ln, 1],
      [0.001, ":{ss}.{fff}", 2, an + " " + ln, 1]
    ];
  function sn(n, t) {
    return function (e, r, o, i) {
      var a =
          t.find(function (n) {
            return i >= n[0];
          }) || t[t.length - 1],
        l = null,
        u = null,
        s = null;
      return r.map(function (t) {
        var e = n(t),
          r = e.getFullYear(),
          o = e.getDate(),
          i = e.getMinutes(),
          f = r != l,
          c = o != u,
          v = i != s;
        return (
          (l = r),
          (u = o),
          (s = i),
          ((7 == a[2] && f) || (4 == a[2] && c) || (2 == a[2] && v)
            ? a[3]
            : a[1])(e)
        );
      });
    };
  }
  function fn(n, t, e) {
    return new Date(n, t, e);
  }
  function cn(n, t) {
    return t(n);
  }
  function vn(n, t) {
    return function (e, r) {
      return t(n(r));
    };
  }
  var hn = {
      show: !0,
      x: !0,
      y: !0,
      lock: !1,
      points: {
        show: function (n, t) {
          var e = n.series[t],
            r = A();
          r.style.background = e.stroke || "#000";
          var o = Tn(e.width, 1),
            i = (o - 1) / -2;
          return (
            W(r, M, o),
            W(r, k, o),
            W(r, "marginLeft", i),
            W(r, "marginTop", i),
            r
          );
        }
      },
      drag: { setScale: !0, x: !0, y: !1, dist: 0, uni: null, _x: !1, _y: !1 },
      focus: { prox: -1 },
      locked: !1,
      left: -10,
      top: -10,
      idx: null
    },
    mn = { show: !0, stroke: "rgba(0,0,0,0.07)", width: 2 },
    pn = y({}, mn, { size: 10 }),
    dn =
      '12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    gn = "bold " + dn,
    xn = {
      type: "x",
      show: !0,
      scale: "x",
      space: 50,
      gap: 5,
      size: 50,
      labelSize: 30,
      labelFont: gn,
      side: 2,
      grid: mn,
      ticks: pn,
      font: dn,
      rotate: 0
    },
    wn = { show: !0, scale: "x", min: 1 / 0, max: -1 / 0, idxs: [] },
    bn = new Intl.NumberFormat(navigator.language);
  function yn(n, t) {
    return t.map(bn.format);
  }
  function Mn(n, t, e, r, o, i) {
    for (
      var a = [], l = (t = i ? t : +p(t, r).toFixed(12));
      e >= l;
      l = +(l + r).toFixed(12)
    )
      a.push(l);
    return a;
  }
  function kn(n, t) {
    return t;
  }
  var Sn = {
    type: "y",
    show: !0,
    scale: "y",
    space: 40,
    gap: 5,
    size: 50,
    labelSize: 30,
    labelFont: gn,
    side: 3,
    grid: mn,
    ticks: pn,
    font: dn,
    rotate: 0
  };
  function Tn(n, t) {
    return d((3 + 2 * (n || 1)) * t);
  }
  var Dn = {
      scale: "y",
      show: !0,
      band: !1,
      spanGaps: !1,
      alpha: 1,
      points: {
        show: function (n, t) {
          var e = Tn(n.series[t].width, _),
            r = n.series[0].idxs;
          return n.bbox.width / e / 2 >= r[1] - r[0];
        }
      },
      values: null,
      min: 1 / 0,
      max: -1 / 0,
      idxs: [],
      path: null,
      clip: null
    },
    Yn = { time: !0, auto: !1, distr: 1, min: null, max: null },
    En = y({}, Yn, { time: !1, auto: !0 }),
    _n = {};
  function zn() {
    var n = [];
    return {
      sub: function (t) {
        n.push(t);
      },
      unsub: function (t) {
        n = n.filter(function (n) {
          return n != t;
        });
      },
      pub: function (t, e, r, o, i, a, l) {
        n.length > 1 &&
          n.forEach(function (n) {
            n != e && n.pub(t, e, r, o, i, a, l);
          });
      }
    };
  }
  function Wn(n, t, e, r) {
    return (r
      ? [n[0], n[1]].concat(n.slice(2))
      : [n[0]].concat(n.slice(1))
    ).map(function (n, r) {
      return Fn(n, r, t, e);
    });
  }
  function Fn(n, t, e, r) {
    return y({}, 0 == t || (n && n.side % 2 == 0) ? e : r, n);
  }
  function An(n, t, e, r) {
    return r + (1 - (n - t.min) / (t.max - t.min)) * e;
  }
  function Cn(n, t, e, r) {
    return r + ((n - t.min) / (t.max - t.min)) * e;
  }
  function Hn(n, t, e) {
    return [t, e > t ? e : e + 86400];
  }
  function Pn(n, t, e) {
    var i = e - t;
    if (0 == i) {
      var a = f(i || r(e) || 1),
        l = o(a) + 1;
      return [t, p(e, s(10, l))];
    }
    return [t, e];
  }
  function Nn(n, e, r) {
    return t(e, r, 0.2, !0);
  }
  function Vn(n) {
    return 0 == n.button;
  }
  function Ln(n) {
    var t;
    return [
      (n = n.replace(/\d+/, function (n) {
        return (t = i(n * _));
      })),
      t
    ];
  }
  function In(t, e, a) {
    var s = {},
      f = (s.root = A("uplot"));
    null != t.id && (f.id = t.id),
      z(f, t.class),
      t.title && (A("title", f).textContent = t.title);
    var w = F("canvas"),
      H = (s.ctx = w.getContext("2d")),
      V = A("wrap", f),
      L = A("under", V);
    V.appendChild(w);
    var I = A("over", V);
    ((t = b(t)).plugins || []).forEach(function (n) {
      n.opts && (t = n.opts(s, t) || t);
    });
    var B = !1,
      R = (s.series = Wn(t.series || [], wn, Dn, !1)),
      U = (s.axes = Wn(t.axes || [], xn, Sn, !0)),
      j = (s.scales = y({}, { x: Yn, y: En }, t.scales)),
      J = y({ x: i(Sn.size / 2), y: i(xn.size / 3) }, t.gutters),
      G =
        t.tzDate ||
        function (n) {
          return new Date(1e3 * n);
        },
      q = t.fmtDate || O,
      X = (function (n) {
        return function (t, e, r, i, a) {
          var l = [],
            u = i >= nn && tn > i,
            s = n(e),
            f = s / 1e3,
            c = fn(s.getFullYear(), s.getMonth(), u ? 1 : s.getDate()),
            v = c / 1e3;
          if (u)
            for (
              var h = i / nn,
                m = f == v ? f : fn(c.getFullYear(), c.getMonth() + h, 1) / 1e3,
                x = new Date(1e3 * m),
                w = x.getFullYear(),
                b = x.getMonth(),
                y = 0;
              r >= m;
              y++
            ) {
              var M = fn(w, b + h * y, 1);
              (m = (+M + (M - n(M / 1e3))) / 1e3) > r || l.push(m);
            }
          else {
            var k = $ > i ? i : $,
              S = v + (o(e) - o(f)) + p(f - v, k);
            l.push(S);
            for (
              var T = n(S),
                D = T.getHours() + T.getMinutes() / 60 + T.getSeconds() / Q,
                Y = i / Q;
              ;

            ) {
              S = d(S + i);
              var E = o(g(D + Y)) % 24,
                _ = n(S).getHours() - E;
              if ((_ > 1 && (_ = -1), (S -= _ * Q) > r)) break;
              (D = (D + Y) % 24),
                0.7 > d((S - l[l.length - 1]) / i) * a || l.push(S);
            }
          }
          return l;
        };
      })(G),
      on = sn(G, rn(un, q)),
      an = vn(G, cn("{YYYY}-{MM}-{DD} {h}:{mm}{aa}", q)),
      ln = {};
    for (var mn in j) {
      var pn = j[mn];
      (null == pn.min && null == pn.max) ||
        (ln[mn] = { min: pn.min, max: pn.max });
    }
    var dn,
      gn,
      bn = y({ show: !0 }, t.legend).show,
      In = [],
      Bn = !1;
    if (bn) {
      dn = F("table", "legend", f);
      var Rn = R[1] ? R[1].values : null;
      if ((Bn = null != Rn)) {
        var Un = F("tr", "labels", dn);
        for (var jn in (F("th", null, Un), (gn = Rn(s, 1, 0))))
          F("th", null, Un).textContent = jn;
      } else (gn = { _: 0 }), z(dn, "inline");
    }
    var Jn = (s.cursor = y({}, hn, t.cursor));
    Jn.points.show = m(Jn.points.show);
    var On = (s.focus = y({}, t.focus || { alpha: 0.3 }, Jn.focus)),
      Gn = On.prox >= 0,
      qn = [null];
    function Xn(n, t) {
      var e = n.scale,
        r = (j[e] = y({}, 0 == t ? Yn : En, j[e])),
        o = r.time;
      r.range = m(r.range || (o ? Hn : 0 == t ? Pn : Nn));
      var i = n.value;
      if (
        ((n.value = o
          ? (function (n) {
              return "string" == typeof n;
            })(i)
            ? vn(G, cn(i, q))
            : i || an
          : i || kn),
        (n.label = n.label || (o ? "Time" : "Value")),
        t > 0)
      ) {
        (n.width = null == n.width ? 1 : n.width), (n.paths = n.paths || _t);
        var a = Tn(n.width, 1);
        (n.points = y({}, { size: a, width: u(1, 0.2 * a) }, n.points)),
          (n.points.show = m(n.points.show)),
          (n._paths = null);
      }
      if (
        (bn &&
          In.splice(
            t,
            0,
            (function (n, t) {
              if (0 == t && Bn) return null;
              var e = [],
                r = F("tr", "series", dn, dn.childNodes[t]);
              z(r, n.class), n.show || z(r, "off");
              var o = F("th", null, r),
                i = A("ident", o);
              n.width && (i.style.borderColor = n.stroke),
                (i.style.backgroundColor = n.fill);
              var a = A("text", o);
              for (var l in ((a.textContent = n.label),
              t > 0 &&
                (P("click", o, function (t) {
                  Jn.locked ||
                    (Vn(t) &&
                      Jt(R.indexOf(n), { show: !n.show }, ge.setSeries));
                }),
                Gn &&
                  P("mouseenter", o, function () {
                    Jn.locked || Jt(R.indexOf(n), { focus: !0 }, ge.setSeries);
                  })),
              gn)) {
                var u = F("td", null, r);
                (u.textContent = "--"), e.push(u);
              }
              return e;
            })(n, t)
          ),
        Jn.show)
      ) {
        var l = (function (n, t) {
          if (t > 0) {
            var e = Jn.points.show(s, t);
            if (e)
              return (
                z(e, "cursor-pt"),
                z(e, n.class),
                C(e, -10, -10),
                I.insertBefore(e, qn[t]),
                e
              );
          }
        })(n, t);
        l && qn.splice(t, 0, l);
      }
    }
    for (var Zn in ((s.addSeries = function (n, t) {
      (n = Fn(n, (t = null == t ? R.length : t), wn, Dn)),
        R.splice(t, 0, n),
        Xn(R[t], t);
    }),
    (s.delSeries = function (n) {
      R.splice(n, 1),
        bn && In.splice(n, 1)[0][0].parentNode.remove(),
        qn.length > 1 && qn.splice(n, 1)[0].remove();
    }),
    R.forEach(Xn),
    j)) {
      var Kn = j[Zn];
      null != Kn.from && (j[Zn] = y({}, j[Kn.from], Kn));
    }
    var Qn,
      $n = R[0].scale,
      nt = j[$n].distr;
    U.forEach(function (n) {
      if (n.show) {
        var t = j[n.scale];
        null == t &&
          ((n.scale = n.side % 2 ? R[1].scale : $n), (t = j[n.scale]));
        var e = t.time;
        (n.space = m(n.space)),
          (n.rotate = m(n.rotate)),
          (n.incrs = m(n.incrs || (2 == t.distr ? Z : e ? en : K))),
          (n.split = m(n.split || (e && 1 == t.distr ? X : Mn)));
        var r = n.values;
        (n.values = e ? (x(r) ? sn(G, rn(r, q)) : r || on) : r || yn),
          (n.font = Ln(n.font)),
          (n.labelFont = Ln(n.labelFont));
      }
    });
    var tt,
      et,
      rt,
      ot,
      it,
      at,
      lt,
      ut,
      st,
      ft,
      ct = null,
      vt = null,
      ht = R[0].idxs,
      mt = null;
    function pt(n, t) {
      ((n = n || [])[0] = n[0] || []),
        (s.data = n),
        (e = n.slice()),
        (Qn = (mt = e[0]).length),
        2 == nt &&
          (e[0] = mt.map(function (n, t) {
            return t;
          })),
        Ft(),
        de("setData"),
        !1 !== t && dt();
    }
    function dt() {
      (ct = ht[0] = 0),
        (vt = ht[1] = Qn - 1),
        jt($n, 2 == nt ? ct : e[0][ct], 2 == nt ? vt : e[0][vt]);
    }
    function gt(n, t, e, r) {
      (H.strokeStyle = n || "#000"),
        (H.lineWidth = t),
        (H.lineJoin = "round"),
        H.setLineDash(e || []),
        (H.fillStyle = r || "#000");
    }
    function xt(n, t) {
      (s.width = tt = rt = n),
        (s.height = et = ot = t),
        (it = at = 0),
        (function () {
          var n = !1,
            t = !1,
            e = !1,
            r = !1;
          U.forEach(function (o) {
            if (o.show) {
              var i = o.side,
                a = i % 2,
                l =
                  o.size +
                  (o.labelSize = null != o.label ? o.labelSize || 30 : 0);
              l > 0 &&
                (a
                  ? ((rt -= l), 3 == i ? ((it += l), (r = !0)) : (e = !0))
                  : ((ot -= l), 0 == i ? ((at += l), (n = !0)) : (t = !0)));
            }
          }),
            (n || t) && (e || (rt -= J.x), r || ((rt -= J.x), (it += J.x))),
            (r || e) && (t || (ot -= J.y), n || ((ot -= J.y), (at += J.y)));
        })(),
        (function () {
          var n = it + rt,
            t = at + ot,
            e = it,
            r = at;
          function o(o, i) {
            switch (o) {
              case 1:
                return (n += i) - i;
              case 2:
                return (t += i) - i;
              case 3:
                return (e -= i) + i;
              case 0:
                return (r -= i) + i;
            }
          }
          U.forEach(function (n) {
            var t = n.side;
            (n._pos = o(t, n.size)),
              null != n.label && (n._lpos = o(t, n.labelSize));
          });
        })();
      var e = s.bbox;
      (lt = e[T] = v(it * _, 0.5)),
        (ut = e.top = v(at * _, 0.5)),
        (st = e[M] = v(rt * _, 0.5)),
        (ft = e[k] = v(ot * _, 0.5)),
        W(L, T, it),
        W(L, S, at),
        W(L, M, rt),
        W(L, k, ot),
        W(I, T, it),
        W(I, S, at),
        W(I, M, rt),
        W(I, k, ot),
        W(V, M, tt),
        W(V, k, et),
        (w[M] = i(tt * _)),
        (w[k] = i(et * _)),
        ie(),
        B && jt($n, j[$n].min, j[$n].max),
        B && de("setSize");
    }
    function wt() {
      if (Kt) $t = !0;
      else {
        if (Qn > 0) {
          var t = b(j);
          for (var r in t) {
            var o = t[r],
              i = ln[r];
            null != i
              ? (y(o, i), r == $n && Ft())
              : r != $n && ((o.min = 1 / 0), (o.max = -1 / 0));
          }
          for (var a in (R.forEach(function (r, o) {
            var i = r.scale,
              a = t[i];
            if (0 == o) {
              var f = a.range(s, a.min, a.max);
              (a.min = f[0]),
                (a.max = f[1]),
                (ct = n(a.min, e[0])),
                (vt = n(a.max, e[0])),
                a.min > e[0][ct] && ct++,
                e[0][vt] > a.max && vt--,
                (r.min = mt[ct]),
                (r.max = mt[vt]);
            } else if (r.show && null == ln[i]) {
              var c =
                r.min == 1 / 0
                  ? a.auto
                    ? (function (n, t, e) {
                        for (var r = 1 / 0, o = -1 / 0, i = t; e >= i; i++)
                          null != n[i] && ((r = l(r, n[i])), (o = u(o, n[i])));
                        return [r, o];
                      })(e[o], ct, vt)
                    : [0, 100]
                  : [r.min, r.max];
              (a.min = l(a.min, (r.min = c[0]))),
                (a.max = u(a.max, (r.max = c[1])));
            }
            (r.idxs[0] = ct), (r.idxs[1] = vt);
          }),
          t)) {
            var f = t[a];
            if (null == f.from && f.min != 1 / 0 && null == ln[a]) {
              var c = f.range(s, f.min, f.max);
              (f.min = c[0]), (f.max = c[1]);
            }
          }
          for (var v in t) {
            var h = t[v];
            if (null != h.from) {
              var m = t[h.from];
              if (m.min != 1 / 0) {
                var p = h.range(s, m.min, m.max);
                (h.min = p[0]), (h.max = p[1]);
              }
            }
          }
          var d = {};
          for (var g in t) {
            var x = t[g],
              w = j[g];
            (w.min == x.min && w.max == x.max) ||
              ((w.min = x.min), (w.max = x.max), (d[g] = !0));
          }
          for (var M in (R.forEach(function (n) {
            d[n.scale] && (n._paths = null);
          }),
          d))
            de("setScale", M);
        }
        for (var k in ln) ln[k] = null;
        Jn.show && re();
      }
    }
    (s.setData = pt),
      (s.bbox = {}),
      (s.setSize = function (n) {
        xt(n.width, n.height);
      });
    var bt,
      yt,
      Mt,
      kt,
      St,
      Tt,
      Dt,
      Yt = 1;
    function Et(n, t, e) {
      var r = n[n.length - 1];
      r && r[0] == t ? (r[1] = e) : n.push([t, e]);
    }
    function _t(n, t, r, o) {
      var a,
        s,
        f = R[t],
        c = e[0],
        v = e[t],
        h = j[$n],
        m = j[f.scale],
        p =
          1 == Yt
            ? { stroke: new Path2D(), fill: null, clip: null }
            : R[t - 1]._paths,
        g = p.stroke,
        x = d(f[M] * _),
        w = 1 / 0,
        b = -1 / 0,
        y = [],
        k = i(Cn(c[1 == Yt ? r : o], h, st, lt));
      f.band &&
        1 == Yt &&
        r == ct &&
        (x && g.lineTo(-x, i(An(v[r], m, ft, ut))),
        c[0] > h.min && y.push([lt, k - 1]));
      for (var S = 1 == Yt ? r : o; S >= r && o >= S; S += Yt) {
        var T = i(Cn(c[S], h, st, lt));
        if (T == k)
          null != v[S] &&
            ((a = i(An(v[S], m, ft, ut))), (w = l(a, w)), (b = u(a, b)));
        else {
          var D = !1;
          w != 1 / 0
            ? (g.lineTo(k, w), g.lineTo(k, b), g.lineTo(k, a), (s = k))
            : (D = !0),
            null != v[S]
              ? ((a = i(An(v[S], m, ft, ut))),
                g.lineTo(T, a),
                (w = b = a),
                T - k > 1 && null == v[S - 1] && (D = !0))
              : ((w = 1 / 0), (b = -1 / 0)),
            D && Et(y, s, T),
            (k = T);
        }
      }
      if ((null == v[o] && Et(y, s, k), f.band)) {
        var Y,
          E,
          z = 100 * x;
        -1 == Yt && r == ct && ((E = lt - z), (Y = r)),
          1 == Yt &&
            o == vt &&
            ((E = lt + st + z),
            (Y = o),
            h.max > c[Qn - 1] && y.push([k, lt + st])),
          g.lineTo(E, i(An(v[Y], m, ft, ut)));
      }
      if (
        1 == Yt &&
        ((p.clip = (function (n, t, e, r) {
          var o = null;
          if (t.length > 0) {
            if (R[n].spanGaps) {
              var i = t[0],
                a = t[t.length - 1];
              (t = []), e && t.push(i), r && t.push(a);
            }
            o = new Path2D();
            for (var l = lt, u = 0; t.length > u; u++) {
              var s = t[u];
              o.rect(l, ut, s[0] - l, ut + ft), (l = s[1]);
            }
            o.rect(l, ut, lt + st - l, ut + ft);
          }
          return o;
        })(t, y, null == v[r], null == v[o])),
        null != f.fill)
      ) {
        var W = (p.fill = new Path2D(g)),
          F = i(An(0, m, ft, ut));
        W.lineTo(lt + st, F), W.lineTo(lt, F);
      }
      return f.band && (Yt *= -1), p;
    }
    function zt(n, t, e, r) {
      var o;
      if (r > 0) {
        var i = n.space(s, t, e, r);
        (o = (function (n, t, e, r) {
          for (var o = e / n, i = 0; t.length > i; i++) {
            var a = t[i] * o;
            if (a >= r) return [t[i], a];
          }
        })(e - t, n.incrs(s, t, e, r, i), r, i)).push(o[1] / i);
      } else o = [0, 0];
      return o;
    }
    function Wt(n, t, e, r, o, i, a, l) {
      var u = (i % 2) / 2;
      H.translate(u, u), gt(a, i, l), H.beginPath();
      var s,
        f,
        c,
        v,
        h = r + (0 == e || 3 == e ? -o : o);
      0 == t ? ((f = r), (v = h)) : ((s = r), (c = h)),
        n.forEach(function (n) {
          0 == t ? (s = c = n) : (f = v = n), H.moveTo(s, f), H.lineTo(c, v);
        }),
        H.stroke(),
        H.translate(-u, -u);
    }
    function Ft() {
      R.forEach(function (n, t) {
        t > 0 && ((n.min = 1 / 0), (n.max = -1 / 0), (n._paths = null));
      });
    }
    function At() {
      Kt
        ? (Qt = !0)
        : (H.clearRect(0, 0, w[M], w[k]),
          de("drawClear"),
          (function () {
            U.forEach(function (n) {
              if (n.show) {
                var t = j[n.scale];
                if (t.min != 1 / 0) {
                  var e = n.side,
                    r = e % 2,
                    o = t.min,
                    a = t.max,
                    l = zt(n, o, a, 0 == r ? rt : ot),
                    u = l[0],
                    f = l[1],
                    v = n.split(s, o, a, u, l[2], 2 == t.distr),
                    h = 0 == r ? Cn : An,
                    m = 0 == r ? st : ft,
                    p = 0 == r ? lt : ut,
                    g = v.map(function (n) {
                      return i(h(n, t, m, p));
                    }),
                    x = i(n.gap * _),
                    w = n.ticks,
                    b = w.show ? i(w.size * _) : 0,
                    y = n.values(
                      s,
                      2 == t.distr
                        ? v.map(function (n) {
                            return mt[n];
                          })
                        : v,
                      f,
                      2 == t.distr ? mt[v[1]] - mt[v[0]] : u
                    ),
                    k = 2 == e ? (n.rotate(s, y, f) * -c) / 180 : 0,
                    D = i(n._pos * _),
                    Y =
                      D +
                      (b + x) *
                        ((0 == r && 0 == e) || (1 == r && 3 == e) ? -1 : 1),
                    E = 0 == r ? Y : 0,
                    z = 1 == r ? Y : 0;
                  (H.font = n.font[0]),
                    (H.fillStyle = n.stroke || "#000"),
                    (H.textAlign =
                      k > 0
                        ? T
                        : 0 > k
                        ? "right"
                        : 0 == r
                        ? "center"
                        : 3 == e
                        ? "right"
                        : T),
                    (H.textBaseline =
                      k || 1 == r ? "middle" : 2 == e ? S : "bottom");
                  var W = 1.5 * n.font[1];
                  if (
                    (y.forEach(function (n, t) {
                      0 == r ? (z = g[t]) : (E = g[t]),
                        ("" + n).split(/\n/gm).forEach(function (n, t) {
                          k
                            ? (H.save(),
                              H.translate(z, E + t * W),
                              H.rotate(k),
                              H.fillText(n, 0, 0),
                              H.restore())
                            : H.fillText(n, z, E + t * W);
                        });
                    }),
                    n.label)
                  ) {
                    H.save();
                    var F = i(n._lpos * _);
                    1 == r
                      ? ((z = E = 0),
                        H.translate(F, i(ut + ft / 2)),
                        H.rotate((3 == e ? -c : c) / 2))
                      : ((z = i(lt + st / 2)), (E = F)),
                      (H.font = n.labelFont[0]),
                      (H.textAlign = "center"),
                      (H.textBaseline = 2 == e ? S : "bottom"),
                      H.fillText(n.label, z, E),
                      H.restore();
                  }
                  w.show && Wt(g, r, e, D, b, d(w[M] * _), w.stroke);
                  var A = n.grid;
                  A.show &&
                    Wt(
                      g,
                      r,
                      0 == r ? 2 : 1,
                      0 == r ? ut : lt,
                      0 == r ? ft : st,
                      d(A[M] * _),
                      A.stroke,
                      A.dash
                    );
                }
              }
            }),
              de("drawAxes");
          })(),
          (function () {
            R.forEach(function (n, t) {
              if (t > 0 && n.show && Qn > 0 && null == n._paths) {
                var r = (function (n) {
                  for (
                    var t = h(ct - 1, 0, Qn - 1), e = h(vt + 1, 0, Qn - 1);
                    null == n[t] && t > 0;

                  )
                    t--;
                  for (; null == n[e] && Qn - 1 > e; ) e++;
                  return [t, e];
                })(e[t]);
                n._paths = n.paths(s, t, r[0], r[1]);
              }
            }),
              R.forEach(function (n, t) {
                t > 0 &&
                  n.show &&
                  (n._paths &&
                    (function (n) {
                      var t = R[n];
                      if (1 == Yt) {
                        var e = t._paths,
                          r = e.stroke,
                          o = e.fill,
                          i = e.clip,
                          a = d(t[M] * _),
                          l = (a % 2) / 2;
                        gt(t.stroke, a, t.dash, t.fill),
                          (H.globalAlpha = t.alpha),
                          H.translate(l, l),
                          H.save();
                        var u = lt,
                          s = ut,
                          f = st,
                          c = ft,
                          v = (a * _) / 2;
                        0 == t.min && (c += v),
                          0 == t.max && ((s -= v), (c += v)),
                          H.beginPath(),
                          H.rect(u, s, f, c),
                          H.clip(),
                          null != i && H.clip(i),
                          t.band
                            ? (H.fill(r), a && H.stroke(r))
                            : (a && H.stroke(r), null != t.fill && H.fill(o)),
                          H.restore(),
                          H.translate(-l, -l),
                          (H.globalAlpha = 1);
                      }
                      t.band && (Yt *= -1);
                    })(t),
                  n.points.show(s, t, ct, vt) &&
                    (function (n) {
                      var t = R[n],
                        r = t.points,
                        o = d(r.width * _),
                        a = (o % 2) / 2,
                        l = r.width > 0,
                        u = ((r.size - r.width) / 2) * _,
                        s = d(2 * u);
                      H.translate(a, a),
                        H.save(),
                        H.beginPath(),
                        H.rect(lt - s, ut - s, st + 2 * s, ft + 2 * s),
                        H.clip(),
                        (H.globalAlpha = t.alpha);
                      for (var f = new Path2D(), v = ct; vt >= v; v++)
                        if (null != e[n][v]) {
                          var h = i(Cn(e[0][v], j[$n], st, lt)),
                            m = i(An(e[n][v], j[t.scale], ft, ut));
                          f.moveTo(h + u, m), f.arc(h, m, u, 0, 2 * c);
                        }
                      gt(
                        r.stroke || t.stroke || "#000",
                        o,
                        null,
                        r.fill || (l ? "#fff" : t.stroke || "#000")
                      ),
                        H.fill(f),
                        l && H.stroke(f),
                        (H.globalAlpha = 1),
                        H.restore(),
                        H.translate(-a, -a);
                    })(t),
                  de("drawSeries", t));
              });
          })(),
          (bt = !0),
          de("draw"));
    }
    function Ct(t, r) {
      var o = j[t];
      if (null == o.from) {
        if (
          t == $n &&
          (2 == o.distr && ((r.min = n(r.min, e[0])), (r.max = n(r.max, e[0]))),
          o.time &&
            U[0].show &&
            r.max > r.min &&
            0.001 > zt(U[0], r.min, r.max, rt)[0])
        )
          return;
        (ln[t] = r), (bt = !1), wt(), !bt && At(), (bt = !1);
      }
    }
    (s.redraw = function (n) {
      !1 !== n ? jt($n, j[$n].min, j[$n].max) : At();
    }),
      (s.setScale = Ct);
    var Ht = !1,
      Pt = Jn.drag,
      Nt = Pt.x,
      Vt = Pt.y;
    if (Jn.show) {
      var Lt = "cursor-";
      Jn.x && ((Tt = Jn.left), (yt = A(Lt + "x", I))),
        Jn.y && ((Dt = Jn.top), (Mt = A(Lt + "y", I)));
    }
    var It = (s.select = y(
        { show: !0, left: 0, width: 0, top: 0, height: 0 },
        t.select
      )),
      Bt = It.show ? A("select", I) : null;
    function Rt(n, t) {
      if (It.show) {
        for (var e in n) W(Bt, e, (It[e] = n[e]));
        !1 !== t && de("setSelect");
      }
    }
    function Ut(n) {
      var t = bn ? In[n][0].parentNode : null;
      R[n].show
        ? t &&
          (function (n) {
            n.classList.remove("off");
          })(t)
        : (t && z(t, "off"), qn.length > 1 && C(qn[n], 0, -10));
    }
    function jt(n, t, e) {
      Ct(n, { min: t, max: e });
    }
    function Jt(n, t, e) {
      var r = R[n];
      if (
        (null != t.focus &&
          (function (n) {
            n != qt &&
              (R.forEach(function (t, e) {
                !(function (n, t) {
                  var e = R[n];
                  Ot(n, t), e.band && Ot(R[n + 1].band ? n + 1 : n - 1, t);
                })(e, null == n || 0 == e || e == n ? 1 : On.alpha);
              }),
              (qt = n),
              At());
          })(n),
        null != t.show)
      ) {
        if (((r.show = t.show), Ut(n), r.band)) {
          var o = R[n + 1] && R[n + 1].band ? n + 1 : n - 1;
          (R[o].show = r.show), Ut(o);
        }
        jt($n, j[$n].min, j[$n].max);
      }
      de("setSeries", n, t), e && we.pub("setSeries", s, n, t);
    }
    function Ot(n, t) {
      (R[n].alpha = t), In && (In[n][0].parentNode.style.opacity = t);
    }
    (s.setSelect = Rt), (s.setSeries = Jt);
    var Gt = Array(R.length),
      qt = null;
    function Xt(n, t) {
      var e = rt;
      t != $n && (n = (e = ot) - n);
      var r = j[t];
      return r.min + (n / e) * (r.max - r.min);
    }
    function Zt(t) {
      return n(Xt(t, $n), e[0], ct, vt);
    }
    bn &&
      Gn &&
      P("mouseleave", dn, function () {
        Jn.locked || (Jt(null, { focus: !1 }, ge.setSeries), re());
      }),
      (s.valToIdx = function (t) {
        return n(t, e[0]);
      }),
      (s.posToIdx = Zt),
      (s.posToVal = Xt),
      (s.valToPos = function (n, t, e) {
        return t == $n
          ? Cn(n, j[t], e ? st : rt, e ? lt : 0)
          : An(n, j[t], e ? ft : ot, e ? ut : 0);
      });
    var Kt = !1,
      Qt = !1,
      $t = !1,
      ne = !1;
    function te(n) {
      (Kt = !0),
        n(s),
        (Kt = !1),
        $t && wt(),
        ne && re(),
        Qt && !bt && At(),
        ($t = ne = Qt = bt = Kt);
    }
    (s.batch = te),
      (s.setCursor = function (n) {
        (Tt = n.left), (Dt = n.top), re();
      });
    var ee = 0;
    function re(n, t) {
      if (Kt) ne = !0;
      else {
        var o;
        if (
          ((ee = 0),
          Jn.show && (Jn.x && C(yt, i(Tt), 0), Jn.y && C(Mt, 0, i(Dt))),
          0 > Tt || 0 == Qn || ct > vt)
        ) {
          o = null;
          for (var a = 0; R.length > a; a++)
            if (
              (a > 0 && ((Gt[a] = 1 / 0), qn.length > 1 && C(qn[a], -10, -10)),
              bn)
            ) {
              if (0 == a && Bn) continue;
              for (var u = 0; In[a].length > u; u++)
                In[a][u].firstChild.nodeValue = "--";
            }
          Gn && Jt(null, { focus: !0 }, ge.setSeries);
        } else {
          o = Zt(Tt);
          for (var f = d(Cn(e[0][o], j[$n], rt, 0)), c = 0; R.length > c; c++) {
            var v = R[c];
            if (c > 0 && v.show) {
              var h = e[c][o],
                m = null == h ? -10 : d(An(h, j[v.scale], ot, 0));
              (Gt[c] = m > 0 ? r(m - Dt) : 1 / 0),
                qn.length > 1 && C(qn[c], f, m);
            } else Gt[c] = 1 / 0;
            if (bn) {
              if (o == Jn.idx || (0 == c && Bn)) continue;
              var p = 0 == c && 2 == nt ? mt : e[c],
                g = Bn ? v.values(s, c, o) : { _: v.value(s, p[o], c, o) },
                x = 0;
              for (var w in g) In[c][x++].firstChild.nodeValue = g[w];
            }
          }
        }
        if (It.show && Ht) {
          var b = r(Tt - kt),
            y = r(Dt - St);
          if (null != t) {
            var D = ge.scales,
              Y = D[0],
              E = D[1],
              _ = t.cursor.drag;
            if (((Nt = _._x), (Vt = _._y), Y)) {
              var z = j[Y],
                F = t.posToVal(t.select[T], Y),
                A = t.posToVal(t.select[T] + t.select[M], Y);
              (It[T] = Cn(F, z, rt, 0)),
                (It[M] = r(It[T] - Cn(A, z, rt, 0))),
                W(Bt, T, It[T]),
                W(Bt, M, It[M]),
                E || (W(Bt, S, (It.top = 0)), W(Bt, k, (It[k] = ot)));
            }
            if (E) {
              var H = j[E],
                P = t.posToVal(t.select.top, E),
                N = t.posToVal(t.select.top + t.select[k], E);
              (It.top = An(P, H, ot, 0)),
                (It[k] = r(It.top - An(N, H, ot, 0))),
                W(Bt, S, It.top),
                W(Bt, k, It[k]),
                Y || (W(Bt, T, (It[T] = 0)), W(Bt, M, (It[M] = rt)));
            }
          } else {
            (Nt = Pt.x && b >= Pt.dist), (Vt = Pt.y && y >= Pt.dist);
            var V = Pt.uni;
            if (
              (null != V
                ? Nt &&
                  Vt &&
                  ((Vt = y >= V),
                  (Nt = b >= V) || Vt || (y > b ? (Vt = !0) : (Nt = !0)))
                : Pt.x && Pt.y && (Nt || Vt) && (Nt = Vt = !0),
              Nt)
            ) {
              var L = l(kt, Tt);
              W(Bt, T, (It[T] = L)),
                W(Bt, M, (It[M] = b)),
                Vt || (W(Bt, S, (It.top = 0)), W(Bt, k, (It[k] = ot)));
            }
            if (Vt) {
              var I = l(St, Dt);
              W(Bt, S, (It.top = I)),
                W(Bt, k, (It[k] = y)),
                Nt || (W(Bt, T, (It[T] = 0)), W(Bt, M, (It[M] = rt)));
            }
            Nt || Vt || (W(Bt, k, (It[k] = 0)), W(Bt, M, (It[M] = 0)));
          }
        }
        if (
          ((Jn.idx = o),
          (Jn.left = Tt),
          (Jn.top = Dt),
          (Pt._x = Nt),
          (Pt._y = Vt),
          null != n && (we.pub("mousemove", s, Tt, Dt, rt, ot, o), Gn))
        ) {
          var U = l.apply(null, Gt),
            J = null;
          U > On.prox ||
            Gt.some(function (n, t) {
              if (n == U) return (J = t);
            }),
            Jt(J, { focus: !0 }, ge.setSeries);
        }
        B && de("setCursor");
      }
    }
    var oe = null;
    function ie() {
      oe = I.getBoundingClientRect();
    }
    function ae(n, t, e, r, o, i) {
      Jn.locked ||
        (le(n, t, e, r, o, i, 0, !1, null != n),
        null != n ? 0 == ee && (ee = D(re)) : re(null, t));
    }
    function le(n, t, e, r, o, i, a, l, u) {
      if (null != n) (e = n.clientX - oe.left), (r = n.clientY - oe.top);
      else {
        if (0 > e || 0 > r) return (Tt = -10), void (Dt = -10);
        var s = ge.scales,
          f = s[0],
          c = s[1];
        (e = null != f ? Cn(t.posToVal(e, f), j[f], rt, 0) : rt * (e / o)),
          (r = null != c ? An(t.posToVal(r, c), j[c], ot, 0) : ot * (r / i));
      }
      u &&
        ((e > 1 && rt - 1 > e) || (e = v(e, rt)),
        (r > 1 && ot - 1 > r) || (r = v(r, ot))),
        l ? ((kt = e), (St = r)) : ((Tt = e), (Dt = r));
    }
    function ue() {
      Rt({ width: 0, height: 0 }, !1);
    }
    function se(n, t, e, r, o, i) {
      (null != t || Vn(n)) &&
        ((Ht = !0),
        (Nt = Vt = Pt._x = Pt._y = !1),
        le(n, t, e, r, o, i, 0, !0, !1),
        null != n &&
          (P("mouseup", Y, fe), we.pub("mousedown", s, kt, St, rt, ot, null)));
    }
    function fe(n, t, e, r, o, i) {
      if (null != t || Vn(n)) {
        (Ht = Pt._x = Pt._y = !1), le(n, t, e, r, o, i, 0, !1, !0);
        var a = It[M] > 0 || It[k] > 0;
        a && Rt(It),
          Pt.setScale && a
            ? (te(function () {
                if ((Nt && jt($n, Xt(It[T], $n), Xt(It[T] + It[M], $n)), Vt))
                  for (var n in j)
                    n != $n &&
                      null == j[n].from &&
                      jt(n, Xt(It.top + It[k], n), Xt(It.top, n));
              }),
              ue())
            : Jn.lock && ((Jn.locked = !Jn.locked), Jn.locked || re());
      }
      null != n &&
        (N("mouseup", Y, fe), we.pub("mouseup", s, Tt, Dt, rt, ot, null));
    }
    function ce() {
      if (!Jn.locked) {
        var n = Ht;
        if (Ht) {
          var t = !0,
            e = !0;
          if (
            (Nt &&
              Vt &&
              ((t = 10 >= Tt || Tt >= rt - 10),
              (e = 10 >= Dt || Dt >= ot - 10)),
            Nt && t)
          ) {
            var r = Tt,
              o = rt - Tt,
              i = l(r, o);
            i == r && (Tt = 0), i == o && (Tt = rt);
          }
          if (Vt && e) {
            var a = Dt,
              u = ot - Dt,
              s = l(a, u);
            s == a && (Dt = 0), s == u && (Dt = ot);
          }
          re(1), (Ht = !1);
        }
        (Tt = -10), (Dt = -10), re(1), n && (Ht = n);
      }
    }
    function ve(n) {
      dt(), ue(), null != n && we.pub("dblclick", s, Tt, Dt, rt, ot, null);
    }
    var he,
      me = {};
    (me.mousedown = se),
      (me.mousemove = ae),
      (me.mouseup = fe),
      (me.dblclick = ve),
      (me.setSeries = function (n, t, e, r) {
        Jt(e, r);
      }),
      Jn.show &&
        (P("mousedown", I, se),
        P("mousemove", I, ae),
        P("mouseenter", I, ie),
        P("mouseleave", I, function () {
          D(ce);
        }),
        P("dblclick", I, ve),
        (he = (function (n) {
          var t = null;
          function e() {
            (t = null), n();
          }
          return function () {
            clearTimeout(t), (t = setTimeout(e, 100));
          };
        })(ie)),
        P("resize", E, he),
        P("scroll", E, he),
        (s.syncRect = ie));
    var pe = (s.hooks = t.hooks || {});
    function de(n, t, e) {
      n in pe &&
        pe[n].forEach(function (n) {
          n.call(null, s, t, e);
        });
    }
    (t.plugins || []).forEach(function (n) {
      for (var t in n.hooks) pe[t] = (pe[t] || []).concat(n.hooks[t]);
    });
    var ge = y({ key: null, setSeries: !1, scales: [$n, null] }, Jn.sync),
      xe = ge.key,
      we = null != xe ? (_n[xe] = _n[xe] || zn()) : zn();
    function be() {
      xt(t[M], t[k]),
        de("init", t, e),
        pt(e || t.data, !1),
        ln[$n] ? Ct($n, ln[$n]) : dt(),
        Rt(It, !1),
        (B = !0),
        de("ready");
    }
    return (
      we.sub(s),
      (s.pub = function (n, t, e, r, o, i, a) {
        me[n](null, t, e, r, o, i, a);
      }),
      (s.destroy = function () {
        we.unsub(s),
          N("resize", E, he),
          N("scroll", E, he),
          f.remove(),
          de("destroy");
      }),
      a
        ? a instanceof HTMLElement
          ? (a.appendChild(f), be())
          : a(s, be)
        : be(),
      s
    );
  }
  return (
    (In.assign = y),
    (In.rangeNum = t),
    (In.fmtDate = O),
    (In.tzDate = function (n, t) {
      var e;
      return (
        "Etc/UTC" == t
          ? (e = new Date(+n + 6e4 * n.getTimezoneOffset()))
          : (e = new Date(
              n.toLocaleString("en-US", { timeZone: t })
            )).setMilliseconds(n.getMilliseconds()),
        e
      );
    }),
    In
  );
})();
