(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap";*{box-sizing:border-box}html,body,#root,main{height:100%}body{margin:0}main{font-family:Open Sans,sans-serif;display:flex;align-items:center;justify-content:center}:root{--ratio: 1.78}html{font-size:min(1vw,calc(1vh * var(--ratio)))}img{max-width:100%;max-height:40rem}article{height:100vh;width:100vw;max-height:calc(100rem / var(--ratio));max-width:100rem;display:flex;flex-direction:column;align-items:center;justify-content:space-between;background-size:cover;background-position:center}article .footer{height:10rem;background:#fff9;width:100%;display:flex;justify-content:center;align-items:center;gap:3rem}h1{font-size:3rem}h2{font-size:2rem}.transition-enter{opacity:0}.transition-enter-active,.transition-exit{opacity:1}.transition-exit-active{opacity:0}.transition-enter-active,.transition-exit-active{transition:opacity .3s,transform .5s}.question{padding:3rem;margin:0;text-align:center}.dndLayout{display:flex;flex:1;flex-direction:column;width:100%}.dndLayout.columns{flex-direction:row}.dndLayout.columns>*{width:50%}.dndLayout.columns .question{text-align:left}.dndLayout.columns .dropZone{flex-wrap:wrap;align-self:center;align-items:center;justify-content:center}.dndLayout.columns .dropZone .dropContainer{height:7rem;min-width:100%}.dndLayout.columns.x2 .dropZone .dropContainer{min-width:40%}.dropZone{flex:1;display:flex;justify-content:space-evenly;padding:3rem;gap:3rem;width:100%;font-size:.875rem;line-height:1.25rem}.itemButton{height:8rem;margin:1.25rem;padding:1rem 2rem;display:flex;font-size:3rem;justify-content:space-around;align-items:center;background:#fff;border:.25rem solid #337ab7;border-radius:.5rem;box-shadow:0 1.25rem 1.5rem -.25rem #0000001a,0 .5rem .75rem -.25rem #0000001a}.itemButton:hover{outline:.25rem solid #337ab7;border:.5rem solid #fff;outline-offset:-.75rem;border-radius:.75rem;box-shadow:0 0 .24rem #337ab740;filter:none}.itemButton:focus{outline:none;border:.5rem double #337ab7;border-radius:.25rem;filter:none;cursor:move}.image{height:100%;width:auto}.reply{width:75%;height:75%;margin-top:1.25rem;font-size:2.25rem;line-height:2.5rem;text-align:center}.correct{color:#16a34a}.dropContainer{border:.25rem solid black;background:#fff;flex:1;position:relative;display:flex;flex-direction:column;align-items:center;width:0}.dropContainer.disabled{font-size:5rem;justify-content:center}.over{outline:.25rem dashed #337ab7;outline-offset:.5rem}.title{text-align:center;font-size:3rem;line-height:1;letter-spacing:.025em;font-weight:700;margin:1rem}.answerContainer{width:100%;display:flex;gap:3rem;justify-content:center}.answer{width:26.5%;height:80.5%;padding-top:2.25rem;padding-bottom:2.25rem;background-color:#000000bf;background-size:100% 100%;inset:85.13% auto auto 22.5%;font-size:3.75rem;line-height:2.5rem;color:#fff;text-align:center}.answer:focus{border:.25rem solid #337ab7}.answer:hover{border:.25rem solid #337ab7;border-radius:.25rem}video{height:100vh;width:100vw}.video-container{display:flex;height:100vh;width:100vw;background:#000}.video-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-60%);display:flex;align-items:center;justify-content:center;z-index:99;color:#337ab7;border:4px solid #337ab7;background:#fff;border-radius:999px;width:100px;height:100px;box-shadow:0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a}.video-play:hover{background:#d9d9d9;box-shadow:0 0 5px #337ab740}.video-play:focus{outline:none;border:8px double #337ab7}.celebration{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;align-items:center;justify-content:center}.celebration .star{width:50rem;animation:zoom-in-zoom-out 2s ease-in-out,rotate 2s ease-in-out}.celebration h1{position:absolute;animation:zoom-in-zoom-out 2s ease-in-out}@keyframes zoom-in-zoom-out{0%{scale:0}75%{scale:1.25}to{scale:1}}@keyframes rotate{0%{rotate:0}75%{scale:600deg}to{rotate:720deg}}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fc = { exports: {} }, Do = {}, pc = { exports: {} }, Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul = Symbol.for("react.element"), bf = Symbol.for("react.portal"), _f = Symbol.for("react.fragment"), $f = Symbol.for("react.strict_mode"), ep = Symbol.for("react.profiler"), tp = Symbol.for("react.provider"), np = Symbol.for("react.context"), rp = Symbol.for("react.forward_ref"), lp = Symbol.for("react.suspense"), op = Symbol.for("react.memo"), ip = Symbol.for("react.lazy"), Qs = Symbol.iterator;
function up(e) {
  return e === null || typeof e != "object" ? null : (e = Qs && e[Qs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var hc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, vc = Object.assign, mc = {};
function or(e, t, n) {
  this.props = e, this.context = t, this.refs = mc, this.updater = n || hc;
}
or.prototype.isReactComponent = {};
or.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function gc() {
}
gc.prototype = or.prototype;
function Tu(e, t, n) {
  this.props = e, this.context = t, this.refs = mc, this.updater = n || hc;
}
var Iu = Tu.prototype = new gc();
Iu.constructor = Tu;
vc(Iu, or.prototype);
Iu.isPureReactComponent = !0;
var js = Array.isArray, Ac = Object.prototype.hasOwnProperty, Ou = { current: null }, yc = { key: !0, ref: !0, __self: !0, __source: !0 };
function qc(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      Ac.call(t, r) && !yc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++)
      s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: ul, type: e, key: o, ref: i, props: l, _owner: Ou.current };
}
function sp(e, t) {
  return { $$typeof: ul, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Uu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ul;
}
function ap(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Zs = /\/+/g;
function $o(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ap("" + e.key) : t.toString(36);
}
function Bl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ul:
          case bf:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + $o(i, 0) : r, js(l) ? (n = "", e != null && (n = e.replace(Zs, "$&/") + "/"), Bl(l, t, n, "", function(a) {
      return a;
    })) : l != null && (Uu(l) && (l = sp(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Zs, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", js(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + $o(o, u);
      i += Bl(o, t, n, s, l);
    }
  else if (s = up(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + $o(o, u++), i += Bl(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function ql(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Bl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function cp(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var Te = { current: null }, Ql = { transition: null }, dp = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: Ql, ReactCurrentOwner: Ou };
Z.Children = { map: ql, forEach: function(e, t, n) {
  ql(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ql(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ql(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Uu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Z.Component = or;
Z.Fragment = _f;
Z.Profiler = ep;
Z.PureComponent = Tu;
Z.StrictMode = $f;
Z.Suspense = lp;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp;
Z.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = vc({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Ou.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      Ac.call(t, s) && !yc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++)
      u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: ul, type: e.type, key: l, ref: o, props: r, _owner: i };
};
Z.createContext = function(e) {
  return e = { $$typeof: np, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: tp, _context: e }, e.Consumer = e;
};
Z.createElement = qc;
Z.createFactory = function(e) {
  var t = qc.bind(null, e);
  return t.type = e, t;
};
Z.createRef = function() {
  return { current: null };
};
Z.forwardRef = function(e) {
  return { $$typeof: rp, render: e };
};
Z.isValidElement = Uu;
Z.lazy = function(e) {
  return { $$typeof: ip, _payload: { _status: -1, _result: e }, _init: cp };
};
Z.memo = function(e, t) {
  return { $$typeof: op, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function(e) {
  var t = Ql.transition;
  Ql.transition = {};
  try {
    e();
  } finally {
    Ql.transition = t;
  }
};
Z.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
Z.useCallback = function(e, t) {
  return Te.current.useCallback(e, t);
};
Z.useContext = function(e) {
  return Te.current.useContext(e);
};
Z.useDebugValue = function() {
};
Z.useDeferredValue = function(e) {
  return Te.current.useDeferredValue(e);
};
Z.useEffect = function(e, t) {
  return Te.current.useEffect(e, t);
};
Z.useId = function() {
  return Te.current.useId();
};
Z.useImperativeHandle = function(e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function(e, t) {
  return Te.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function(e, t) {
  return Te.current.useLayoutEffect(e, t);
};
Z.useMemo = function(e, t) {
  return Te.current.useMemo(e, t);
};
Z.useReducer = function(e, t, n) {
  return Te.current.useReducer(e, t, n);
};
Z.useRef = function(e) {
  return Te.current.useRef(e);
};
Z.useState = function(e) {
  return Te.current.useState(e);
};
Z.useSyncExternalStore = function(e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function() {
  return Te.current.useTransition();
};
Z.version = "18.2.0";
pc.exports = Z;
var q = pc.exports;
const J = /* @__PURE__ */ dc(q);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp = q, pp = Symbol.for("react.element"), hp = Symbol.for("react.fragment"), vp = Object.prototype.hasOwnProperty, mp = fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, gp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    vp.call(t, r) && !gp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: pp, type: e, key: o, ref: i, props: l, _owner: mp.current };
}
Do.Fragment = hp;
Do.jsx = Sc;
Do.jsxs = Sc;
fc.exports = Do;
var B = fc.exports, Ti = {}, wc = { exports: {} }, He = {}, Vc = { exports: {} }, kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(D, P) {
    var m = D.length;
    D.push(P);
    e:
      for (; 0 < m; ) {
        var d = m - 1 >>> 1, N = D[d];
        if (0 < l(N, P))
          D[d] = P, D[m] = N, m = d;
        else
          break e;
      }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0)
      return null;
    var P = D[0], m = D.pop();
    if (m !== P) {
      D[0] = m;
      e:
        for (var d = 0, N = D.length, T = N >>> 1; d < T; ) {
          var L = 2 * (d + 1) - 1, z = D[L], I = L + 1, O = D[I];
          if (0 > l(z, m))
            I < N && 0 > l(O, z) ? (D[d] = O, D[I] = m, d = I) : (D[d] = z, D[L] = m, d = L);
          else if (I < N && 0 > l(O, m))
            D[d] = O, D[I] = m, d = I;
          else
            break e;
        }
    }
    return P;
  }
  function l(D, P) {
    var m = D.sortIndex - P.sortIndex;
    return m !== 0 ? m : D.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], a = [], v = 1, p = null, g = 3, y = !1, w = !1, A = !1, V = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(D) {
    for (var P = n(a); P !== null; ) {
      if (P.callback === null)
        r(a);
      else if (P.startTime <= D)
        r(a), P.sortIndex = P.expirationTime, t(s, P);
      else
        break;
      P = n(a);
    }
  }
  function S(D) {
    if (A = !1, h(D), !w)
      if (n(s) !== null)
        w = !0, Et(k);
      else {
        var P = n(a);
        P !== null && Ne(S, P.startTime - D);
      }
  }
  function k(D, P) {
    w = !1, A && (A = !1, f(x), x = -1), y = !0;
    var m = g;
    try {
      for (h(P), p = n(s); p !== null && (!(p.expirationTime > P) || D && !K()); ) {
        var d = p.callback;
        if (typeof d == "function") {
          p.callback = null, g = p.priorityLevel;
          var N = d(p.expirationTime <= P);
          P = e.unstable_now(), typeof N == "function" ? p.callback = N : p === n(s) && r(s), h(P);
        } else
          r(s);
        p = n(s);
      }
      if (p !== null)
        var T = !0;
      else {
        var L = n(a);
        L !== null && Ne(S, L.startTime - P), T = !1;
      }
      return T;
    } finally {
      p = null, g = m, y = !1;
    }
  }
  var M = !1, E = null, x = -1, F = 5, U = -1;
  function K() {
    return !(e.unstable_now() - U < F);
  }
  function ye() {
    if (E !== null) {
      var D = e.unstable_now();
      U = D;
      var P = !0;
      try {
        P = E(!0, D);
      } finally {
        P ? qe() : (M = !1, E = null);
      }
    } else
      M = !1;
  }
  var qe;
  if (typeof c == "function")
    qe = function() {
      c(ye);
    };
  else if (typeof MessageChannel < "u") {
    var Oe = new MessageChannel(), zt = Oe.port2;
    Oe.port1.onmessage = ye, qe = function() {
      zt.postMessage(null);
    };
  } else
    qe = function() {
      V(ye, 0);
    };
  function Et(D) {
    E = D, M || (M = !0, qe());
  }
  function Ne(D, P) {
    x = V(function() {
      D(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    w || y || (w = !0, Et(k));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return g;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(D) {
    switch (g) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = g;
    }
    var m = g;
    g = P;
    try {
      return D();
    } finally {
      g = m;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, P) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3;
    }
    var m = g;
    g = D;
    try {
      return P();
    } finally {
      g = m;
    }
  }, e.unstable_scheduleCallback = function(D, P, m) {
    var d = e.unstable_now();
    switch (typeof m == "object" && m !== null ? (m = m.delay, m = typeof m == "number" && 0 < m ? d + m : d) : m = d, D) {
      case 1:
        var N = -1;
        break;
      case 2:
        N = 250;
        break;
      case 5:
        N = 1073741823;
        break;
      case 4:
        N = 1e4;
        break;
      default:
        N = 5e3;
    }
    return N = m + N, D = { id: v++, callback: P, priorityLevel: D, startTime: m, expirationTime: N, sortIndex: -1 }, m > d ? (D.sortIndex = m, t(a, D), n(s) === null && D === n(a) && (A ? (f(x), x = -1) : A = !0, Ne(S, m - d))) : (D.sortIndex = N, t(s, D), w || y || (w = !0, Et(k))), D;
  }, e.unstable_shouldYield = K, e.unstable_wrapCallback = function(D) {
    var P = g;
    return function() {
      var m = g;
      g = P;
      try {
        return D.apply(this, arguments);
      } finally {
        g = m;
      }
    };
  };
})(kc);
Vc.exports = kc;
var Ap = Vc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ec = q, Je = Ap;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Cc = /* @__PURE__ */ new Set(), Qr = {};
function En(e, t) {
  bn(e, t), bn(e + "Capture", t);
}
function bn(e, t) {
  for (Qr[e] = t, e = 0; e < t.length; e++)
    Cc.add(t[e]);
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ii = Object.prototype.hasOwnProperty, yp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ws = {}, Gs = {};
function qp(e) {
  return Ii.call(Gs, e) ? !0 : Ii.call(Ws, e) ? !1 : yp.test(e) ? Gs[e] = !0 : (Ws[e] = !0, !1);
}
function Sp(e, t, n, r) {
  if (n !== null && n.type === 0)
    return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function wp(e, t, n, r) {
  if (t === null || typeof t > "u" || Sp(e, t, n, r))
    return !0;
  if (r)
    return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ie(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ke[e] = new Ie(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ke[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ke[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ke[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ke[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ke[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ke[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ke[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ke[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Lu = /[\-:]([a-z])/g;
function Pu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Lu,
    Pu
  );
  ke[t] = new Ie(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Lu, Pu);
  ke[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Lu, Pu);
  ke[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function zu(e, t, n, r) {
  var l = ke.hasOwnProperty(t) ? ke[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wp(t, n, l, r) && (n = null), r || l === null ? qp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Sl = Symbol.for("react.element"), Tn = Symbol.for("react.portal"), In = Symbol.for("react.fragment"), Fu = Symbol.for("react.strict_mode"), Oi = Symbol.for("react.profiler"), xc = Symbol.for("react.provider"), Mc = Symbol.for("react.context"), Bu = Symbol.for("react.forward_ref"), Ui = Symbol.for("react.suspense"), Li = Symbol.for("react.suspense_list"), Qu = Symbol.for("react.memo"), Wt = Symbol.for("react.lazy"), Nc = Symbol.for("react.offscreen"), Ks = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != "object" ? null : (e = Ks && e[Ks] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ei;
function kr(e) {
  if (ei === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ei = t && t[1] || "";
    }
  return `
` + ei + e;
}
var ti = !1;
function ni(e, t) {
  if (!e || ti)
    return "";
  ti = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var l = a.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    ti = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? kr(e) : "";
}
function Vp(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type);
    case 16:
      return kr("Lazy");
    case 13:
      return kr("Suspense");
    case 19:
      return kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ni(e.type, !1), e;
    case 11:
      return e = ni(e.type.render, !1), e;
    case 1:
      return e = ni(e.type, !0), e;
    default:
      return "";
  }
}
function Pi(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case In:
      return "Fragment";
    case Tn:
      return "Portal";
    case Oi:
      return "Profiler";
    case Fu:
      return "StrictMode";
    case Ui:
      return "Suspense";
    case Li:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Mc:
        return (e.displayName || "Context") + ".Consumer";
      case xc:
        return (e._context.displayName || "Context") + ".Provider";
      case Bu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Qu:
        return t = e.displayName || null, t !== null ? t : Pi(e.type) || "Memo";
      case Wt:
        t = e._payload, e = e._init;
        try {
          return Pi(e(t));
        } catch {
        }
    }
  return null;
}
function kp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pi(t);
    case 8:
      return t === Fu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
  }
  return null;
}
function un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Dc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ep(e) {
  var t = Dc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function wl(e) {
  e._valueTracker || (e._valueTracker = Ep(e));
}
function Rc(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Dc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function $l(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zi(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Js(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = un(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Tc(e, t) {
  t = t.checked, t != null && zu(e, "checked", t, !1);
}
function Fi(e, t) {
  Tc(e, t);
  var n = un(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Bi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bi(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Hs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Bi(e, t, n) {
  (t !== "number" || $l(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Wn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qi(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(C(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Xs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(C(92));
      if (Er(n)) {
        if (1 < n.length)
          throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: un(n) };
}
function Ic(e, t) {
  var n = un(t.value), r = un(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ys(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Oc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ji(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Oc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Vl, Uc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (Vl = Vl || document.createElement("div"), Vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Vl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Cp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nr).forEach(function(e) {
  Cp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Nr[t] = Nr[e];
  });
});
function Lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nr.hasOwnProperty(e) && Nr[e] ? ("" + t).trim() : t + "px";
}
function Pc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Lc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var xp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Zi(e, t) {
  if (t) {
    if (xp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(C(62));
  }
}
function Wi(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Gi = null;
function ju(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ki = null, Gn = null, Kn = null;
function bs(e) {
  if (e = cl(e)) {
    if (typeof Ki != "function")
      throw Error(C(280));
    var t = e.stateNode;
    t && (t = Uo(t), Ki(e.stateNode, e.type, t));
  }
}
function zc(e) {
  Gn ? Kn ? Kn.push(e) : Kn = [e] : Gn = e;
}
function Fc() {
  if (Gn) {
    var e = Gn, t = Kn;
    if (Kn = Gn = null, bs(e), t)
      for (e = 0; e < t.length; e++)
        bs(t[e]);
  }
}
function Bc(e, t) {
  return e(t);
}
function Qc() {
}
var ri = !1;
function jc(e, t, n) {
  if (ri)
    return e(t, n);
  ri = !0;
  try {
    return Bc(e, t, n);
  } finally {
    ri = !1, (Gn !== null || Kn !== null) && (Qc(), Fc());
  }
}
function Zr(e, t) {
  var n = e.stateNode;
  if (n === null)
    return null;
  var r = Uo(n);
  if (r === null)
    return null;
  n = r[t];
  e:
    switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (n && typeof n != "function")
    throw Error(C(231, t, typeof n));
  return n;
}
var Ji = !1;
if (Rt)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", { get: function() {
      Ji = !0;
    } }), window.addEventListener("test", gr, gr), window.removeEventListener("test", gr, gr);
  } catch {
    Ji = !1;
  }
function Mp(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (v) {
    this.onError(v);
  }
}
var Dr = !1, eo = null, to = !1, Hi = null, Np = { onError: function(e) {
  Dr = !0, eo = e;
} };
function Dp(e, t, n, r, l, o, i, u, s) {
  Dr = !1, eo = null, Mp.apply(Np, arguments);
}
function Rp(e, t, n, r, l, o, i, u, s) {
  if (Dp.apply(this, arguments), Dr) {
    if (Dr) {
      var a = eo;
      Dr = !1, eo = null;
    } else
      throw Error(C(198));
    to || (to = !0, Hi = a);
  }
}
function Cn(e) {
  var t = e, n = e;
  if (e.alternate)
    for (; t.return; )
      t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function _s(e) {
  if (Cn(e) !== e)
    throw Error(C(188));
}
function Tp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Cn(e), t === null)
      throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n)
          return _s(l), e;
        if (o === r)
          return _s(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return)
      n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
          throw Error(C(189));
      }
    }
    if (n.alternate !== r)
      throw Error(C(190));
  }
  if (n.tag !== 3)
    throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Wc(e) {
  return e = Tp(e), e !== null ? Gc(e) : null;
}
function Gc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Gc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Kc = Je.unstable_scheduleCallback, $s = Je.unstable_cancelCallback, Ip = Je.unstable_shouldYield, Op = Je.unstable_requestPaint, ue = Je.unstable_now, Up = Je.unstable_getCurrentPriorityLevel, Zu = Je.unstable_ImmediatePriority, Jc = Je.unstable_UserBlockingPriority, no = Je.unstable_NormalPriority, Lp = Je.unstable_LowPriority, Hc = Je.unstable_IdlePriority, Ro = null, Vt = null;
function Pp(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == "function")
    try {
      Vt.onCommitFiberRoot(Ro, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var ht = Math.clz32 ? Math.clz32 : Bp, zp = Math.log, Fp = Math.LN2;
function Bp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zp(e) / Fp | 0) | 0;
}
var kl = 64, El = 4194304;
function Cr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ro(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Cr(u) : (o &= i, o !== 0 && (r = Cr(o)));
  } else
    i = n & ~l, i !== 0 ? r = Cr(i) : o !== 0 && (r = Cr(o));
  if (r === 0)
    return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0))
    return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t; )
      n = 31 - ht(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Qp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function jp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - ht(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Qp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Xi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xc() {
  var e = kl;
  return kl <<= 1, !(kl & 4194240) && (kl = 64), e;
}
function li(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function sl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ht(t), e[t] = n;
}
function Zp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ht(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Wu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var b = 0;
function Yc(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var bc, Gu, _c, $c, ed, Yi = !1, Cl = [], _t = null, $t = null, en = null, Wr = /* @__PURE__ */ new Map(), Gr = /* @__PURE__ */ new Map(), Jt = [], Wp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ea(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      Wr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gr.delete(t.pointerId);
  }
}
function Ar(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = cl(t), t !== null && Gu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Gp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return _t = Ar(_t, e, t, n, r, l), !0;
    case "dragenter":
      return $t = Ar($t, e, t, n, r, l), !0;
    case "mouseover":
      return en = Ar(en, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Wr.set(o, Ar(Wr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Gr.set(o, Ar(Gr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function td(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Zc(n), t !== null) {
          e.blockedOn = t, ed(e.priority, function() {
            _c(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Gi = r, n.target.dispatchEvent(r), Gi = null;
    } else
      return t = cl(n), t !== null && Gu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ta(e, t, n) {
  jl(e) && n.delete(t);
}
function Kp() {
  Yi = !1, _t !== null && jl(_t) && (_t = null), $t !== null && jl($t) && ($t = null), en !== null && jl(en) && (en = null), Wr.forEach(ta), Gr.forEach(ta);
}
function yr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Yi || (Yi = !0, Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Kp)));
}
function Kr(e) {
  function t(l) {
    return yr(l, e);
  }
  if (0 < Cl.length) {
    yr(Cl[0], e);
    for (var n = 1; n < Cl.length; n++) {
      var r = Cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (_t !== null && yr(_t, e), $t !== null && yr($t, e), en !== null && yr(en, e), Wr.forEach(t), Gr.forEach(t), n = 0; n < Jt.length; n++)
    r = Jt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jt.length && (n = Jt[0], n.blockedOn === null); )
    td(n), n.blockedOn === null && Jt.shift();
}
var Jn = Lt.ReactCurrentBatchConfig, lo = !0;
function Jp(e, t, n, r) {
  var l = b, o = Jn.transition;
  Jn.transition = null;
  try {
    b = 1, Ku(e, t, n, r);
  } finally {
    b = l, Jn.transition = o;
  }
}
function Hp(e, t, n, r) {
  var l = b, o = Jn.transition;
  Jn.transition = null;
  try {
    b = 4, Ku(e, t, n, r);
  } finally {
    b = l, Jn.transition = o;
  }
}
function Ku(e, t, n, r) {
  if (lo) {
    var l = bi(e, t, n, r);
    if (l === null)
      hi(e, t, r, oo, n), ea(e, r);
    else if (Gp(l, e, t, n, r))
      r.stopPropagation();
    else if (ea(e, r), t & 4 && -1 < Wp.indexOf(e)) {
      for (; l !== null; ) {
        var o = cl(l);
        if (o !== null && bc(o), o = bi(e, t, n, r), o === null && hi(e, t, r, oo, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      hi(e, t, r, null, n);
  }
}
var oo = null;
function bi(e, t, n, r) {
  if (oo = null, e = ju(r), e = vn(e), e !== null)
    if (t = Cn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Zc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return oo = e, null;
}
function nd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Up()) {
        case Zu:
          return 1;
        case Jc:
          return 4;
        case no:
        case Lp:
          return 16;
        case Hc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null, Ju = null, Zl = null;
function rd() {
  if (Zl)
    return Zl;
  var e, t = Ju, n = t.length, r, l = "value" in Yt ? Yt.value : Yt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return Zl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Wl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function xl() {
  return !0;
}
function na() {
  return !1;
}
function Xe(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? xl : na, this.isPropagationStopped = na, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xl);
  }, persist: function() {
  }, isPersistent: xl }), t;
}
var ir = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Hu = Xe(ir), al = oe({}, ir, { view: 0, detail: 0 }), Xp = Xe(al), oi, ii, qr, To = oe({}, al, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== qr && (qr && e.type === "mousemove" ? (oi = e.screenX - qr.screenX, ii = e.screenY - qr.screenY) : ii = oi = 0, qr = e), oi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ii;
} }), ra = Xe(To), Yp = oe({}, To, { dataTransfer: 0 }), bp = Xe(Yp), _p = oe({}, al, { relatedTarget: 0 }), ui = Xe(_p), $p = oe({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), eh = Xe($p), th = oe({}, ir, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), nh = Xe(th), rh = oe({}, ir, { data: 0 }), la = Xe(rh), lh = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, oh = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, ih = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function uh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ih[e]) ? !!t[e] : !1;
}
function Xu() {
  return uh;
}
var sh = oe({}, al, { key: function(e) {
  if (e.key) {
    var t = lh[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Wl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? oh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xu, charCode: function(e) {
  return e.type === "keypress" ? Wl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Wl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ah = Xe(sh), ch = oe({}, To, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), oa = Xe(ch), dh = oe({}, al, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xu }), fh = Xe(dh), ph = oe({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hh = Xe(ph), vh = oe({}, To, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), mh = Xe(vh), gh = [9, 13, 27, 32], Yu = Rt && "CompositionEvent" in window, Rr = null;
Rt && "documentMode" in document && (Rr = document.documentMode);
var Ah = Rt && "TextEvent" in window && !Rr, ld = Rt && (!Yu || Rr && 8 < Rr && 11 >= Rr), ia = " ", ua = !1;
function od(e, t) {
  switch (e) {
    case "keyup":
      return gh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function id(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function yh(e, t) {
  switch (e) {
    case "compositionend":
      return id(t);
    case "keypress":
      return t.which !== 32 ? null : (ua = !0, ia);
    case "textInput":
      return e = t.data, e === ia && ua ? null : e;
    default:
      return null;
  }
}
function qh(e, t) {
  if (On)
    return e === "compositionend" || !Yu && od(e, t) ? (e = rd(), Zl = Ju = Yt = null, On = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ld && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sh[e.type] : t === "textarea";
}
function ud(e, t, n, r) {
  zc(r), t = io(t, "onChange"), 0 < t.length && (n = new Hu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Tr = null, Jr = null;
function wh(e) {
  Ad(e, 0);
}
function Io(e) {
  var t = Pn(e);
  if (Rc(t))
    return e;
}
function Vh(e, t) {
  if (e === "change")
    return t;
}
var sd = !1;
if (Rt) {
  var si;
  if (Rt) {
    var ai = "oninput" in document;
    if (!ai) {
      var aa = document.createElement("div");
      aa.setAttribute("oninput", "return;"), ai = typeof aa.oninput == "function";
    }
    si = ai;
  } else
    si = !1;
  sd = si && (!document.documentMode || 9 < document.documentMode);
}
function ca() {
  Tr && (Tr.detachEvent("onpropertychange", ad), Jr = Tr = null);
}
function ad(e) {
  if (e.propertyName === "value" && Io(Jr)) {
    var t = [];
    ud(t, Jr, e, ju(e)), jc(wh, t);
  }
}
function kh(e, t, n) {
  e === "focusin" ? (ca(), Tr = t, Jr = n, Tr.attachEvent("onpropertychange", ad)) : e === "focusout" && ca();
}
function Eh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Io(Jr);
}
function Ch(e, t) {
  if (e === "click")
    return Io(t);
}
function xh(e, t) {
  if (e === "input" || e === "change")
    return Io(t);
}
function Mh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var mt = typeof Object.is == "function" ? Object.is : Mh;
function Hr(e, t) {
  if (mt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ii.call(t, l) || !mt(e[l], t[l]))
      return !1;
  }
  return !0;
}
function da(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function fa(e, t) {
  var n = da(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t)
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = da(n);
  }
}
function cd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function dd() {
  for (var e = window, t = $l(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = $l(e.document);
  }
  return t;
}
function bu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Nh(e) {
  var t = dd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && cd(n.ownerDocument.documentElement, n)) {
    if (r !== null && bu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = fa(n, o);
        var i = fa(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Dh = Rt && "documentMode" in document && 11 >= document.documentMode, Un = null, _i = null, Ir = null, $i = !1;
function pa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $i || Un == null || Un !== $l(r) || (r = Un, "selectionStart" in r && bu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Hr(Ir, r) || (Ir = r, r = io(_i, "onSelect"), 0 < r.length && (t = new Hu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Un)));
}
function Ml(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Ln = { animationend: Ml("Animation", "AnimationEnd"), animationiteration: Ml("Animation", "AnimationIteration"), animationstart: Ml("Animation", "AnimationStart"), transitionend: Ml("Transition", "TransitionEnd") }, ci = {}, fd = {};
Rt && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation), "TransitionEvent" in window || delete Ln.transitionend.transition);
function Oo(e) {
  if (ci[e])
    return ci[e];
  if (!Ln[e])
    return e;
  var t = Ln[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in fd)
      return ci[e] = t[n];
  return e;
}
var pd = Oo("animationend"), hd = Oo("animationiteration"), vd = Oo("animationstart"), md = Oo("transitionend"), gd = /* @__PURE__ */ new Map(), ha = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function an(e, t) {
  gd.set(e, t), En(t, [e]);
}
for (var di = 0; di < ha.length; di++) {
  var fi = ha[di], Rh = fi.toLowerCase(), Th = fi[0].toUpperCase() + fi.slice(1);
  an(Rh, "on" + Th);
}
an(pd, "onAnimationEnd");
an(hd, "onAnimationIteration");
an(vd, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an(md, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
En("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
En("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
En("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
En("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ih = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function va(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Rp(r, t, void 0, e), e.currentTarget = null;
}
function Ad(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, a = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          va(l, u, a), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, a = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          va(l, u, a), o = s;
        }
    }
  }
  if (to)
    throw e = Hi, to = !1, Hi = null, e;
}
function ee(e, t) {
  var n = t[lu];
  n === void 0 && (n = t[lu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (yd(t, e, 2, !1), n.add(r));
}
function pi(e, t, n) {
  var r = 0;
  t && (r |= 4), yd(n, e, r, t);
}
var Nl = "_reactListening" + Math.random().toString(36).slice(2);
function Xr(e) {
  if (!e[Nl]) {
    e[Nl] = !0, Cc.forEach(function(n) {
      n !== "selectionchange" && (Ih.has(n) || pi(n, !1, e), pi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nl] || (t[Nl] = !0, pi("selectionchange", !1, t));
  }
}
function yd(e, t, n, r) {
  switch (nd(t)) {
    case 1:
      var l = Jp;
      break;
    case 4:
      l = Hp;
      break;
    default:
      l = Ku;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function hi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = vn(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  jc(function() {
    var a = o, v = ju(n), p = [];
    e: {
      var g = gd.get(e);
      if (g !== void 0) {
        var y = Hu, w = e;
        switch (e) {
          case "keypress":
            if (Wl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            y = ah;
            break;
          case "focusin":
            w = "focus", y = ui;
            break;
          case "focusout":
            w = "blur", y = ui;
            break;
          case "beforeblur":
          case "afterblur":
            y = ui;
            break;
          case "click":
            if (n.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = ra;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = bp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = fh;
            break;
          case pd:
          case hd:
          case vd:
            y = eh;
            break;
          case md:
            y = hh;
            break;
          case "scroll":
            y = Xp;
            break;
          case "wheel":
            y = mh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = nh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = oa;
        }
        var A = (t & 4) !== 0, V = !A && e === "scroll", f = A ? g !== null ? g + "Capture" : null : g;
        A = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var S = h.stateNode;
          if (h.tag === 5 && S !== null && (h = S, f !== null && (S = Zr(c, f), S != null && A.push(Yr(c, S, h)))), V)
            break;
          c = c.return;
        }
        0 < A.length && (g = new y(g, w, null, n, v), p.push({ event: g, listeners: A }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (g = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", g && n !== Gi && (w = n.relatedTarget || n.fromElement) && (vn(w) || w[Tt]))
          break e;
        if ((y || g) && (g = v.window === v ? v : (g = v.ownerDocument) ? g.defaultView || g.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = a, w = w ? vn(w) : null, w !== null && (V = Cn(w), w !== V || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = a), y !== w)) {
          if (A = ra, S = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (A = oa, S = "onPointerLeave", f = "onPointerEnter", c = "pointer"), V = y == null ? g : Pn(y), h = w == null ? g : Pn(w), g = new A(S, c + "leave", y, n, v), g.target = V, g.relatedTarget = h, S = null, vn(v) === a && (A = new A(f, c + "enter", w, n, v), A.target = h, A.relatedTarget = V, S = A), V = S, y && w)
            t: {
              for (A = y, f = w, c = 0, h = A; h; h = Dn(h))
                c++;
              for (h = 0, S = f; S; S = Dn(S))
                h++;
              for (; 0 < c - h; )
                A = Dn(A), c--;
              for (; 0 < h - c; )
                f = Dn(f), h--;
              for (; c--; ) {
                if (A === f || f !== null && A === f.alternate)
                  break t;
                A = Dn(A), f = Dn(f);
              }
              A = null;
            }
          else
            A = null;
          y !== null && ma(p, g, y, A, !1), w !== null && V !== null && ma(p, V, w, A, !0);
        }
      }
      e: {
        if (g = a ? Pn(a) : window, y = g.nodeName && g.nodeName.toLowerCase(), y === "select" || y === "input" && g.type === "file")
          var k = Vh;
        else if (sa(g))
          if (sd)
            k = xh;
          else {
            k = Eh;
            var M = kh;
          }
        else
          (y = g.nodeName) && y.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (k = Ch);
        if (k && (k = k(e, a))) {
          ud(p, k, n, v);
          break e;
        }
        M && M(e, g, a), e === "focusout" && (M = g._wrapperState) && M.controlled && g.type === "number" && Bi(g, "number", g.value);
      }
      switch (M = a ? Pn(a) : window, e) {
        case "focusin":
          (sa(M) || M.contentEditable === "true") && (Un = M, _i = a, Ir = null);
          break;
        case "focusout":
          Ir = _i = Un = null;
          break;
        case "mousedown":
          $i = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          $i = !1, pa(p, n, v);
          break;
        case "selectionchange":
          if (Dh)
            break;
        case "keydown":
        case "keyup":
          pa(p, n, v);
      }
      var E;
      if (Yu)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        On ? od(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x && (ld && n.locale !== "ko" && (On || x !== "onCompositionStart" ? x === "onCompositionEnd" && On && (E = rd()) : (Yt = v, Ju = "value" in Yt ? Yt.value : Yt.textContent, On = !0)), M = io(a, x), 0 < M.length && (x = new la(x, e, null, n, v), p.push({ event: x, listeners: M }), E ? x.data = E : (E = id(n), E !== null && (x.data = E)))), (E = Ah ? yh(e, n) : qh(e, n)) && (a = io(a, "onBeforeInput"), 0 < a.length && (v = new la("onBeforeInput", "beforeinput", null, n, v), p.push({ event: v, listeners: a }), v.data = E));
    }
    Ad(p, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function io(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Zr(e, n), o != null && r.unshift(Yr(e, o, l)), o = Zr(e, t), o != null && r.push(Yr(e, o, l))), e = e.return;
  }
  return r;
}
function Dn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ma(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, l ? (s = Zr(n, o), s != null && i.unshift(Yr(n, s, u))) : l || (s = Zr(n, o), s != null && i.push(Yr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Oh = /\r\n?/g, Uh = /\u0000|\uFFFD/g;
function ga(e) {
  return (typeof e == "string" ? e : "" + e).replace(Oh, `
`).replace(Uh, "");
}
function Dl(e, t, n) {
  if (t = ga(t), ga(e) !== t && n)
    throw Error(C(425));
}
function uo() {
}
var eu = null, tu = null;
function nu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ru = typeof setTimeout == "function" ? setTimeout : void 0, Lh = typeof clearTimeout == "function" ? clearTimeout : void 0, Aa = typeof Promise == "function" ? Promise : void 0, Ph = typeof queueMicrotask == "function" ? queueMicrotask : typeof Aa < "u" ? function(e) {
  return Aa.resolve(null).then(e).catch(zh);
} : ru;
function zh(e) {
  setTimeout(function() {
    throw e;
  });
}
function vi(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Kr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Kr(t);
}
function tn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3)
      break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?")
        break;
      if (t === "/$")
        return null;
    }
  }
  return e;
}
function ya(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0)
          return e;
        t--;
      } else
        n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ur = Math.random().toString(36).slice(2), St = "__reactFiber$" + ur, br = "__reactProps$" + ur, Tt = "__reactContainer$" + ur, lu = "__reactEvents$" + ur, Fh = "__reactListeners$" + ur, Bh = "__reactHandles$" + ur;
function vn(e) {
  var t = e[St];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Tt] || n[St]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = ya(e); e !== null; ) {
          if (n = e[St])
            return n;
          e = ya(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function cl(e) {
  return e = e[St] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(C(33));
}
function Uo(e) {
  return e[br] || null;
}
var ou = [], zn = -1;
function cn(e) {
  return { current: e };
}
function te(e) {
  0 > zn || (e.current = ou[zn], ou[zn] = null, zn--);
}
function $(e, t) {
  zn++, ou[zn] = e.current, e.current = t;
}
var sn = {}, Me = cn(sn), ze = cn(!1), qn = sn;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n)
    l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function Fe(e) {
  return e = e.childContextTypes, e != null;
}
function so() {
  te(ze), te(Me);
}
function qa(e, t, n) {
  if (Me.current !== sn)
    throw Error(C(168));
  $(Me, t), $(ze, n);
}
function qd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(C(108, kp(e) || "Unknown", l));
  return oe({}, n, r);
}
function ao(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn, qn = Me.current, $(Me, e), $(ze, ze.current), !0;
}
function Sa(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(C(169));
  n ? (e = qd(e, t, qn), r.__reactInternalMemoizedMergedChildContext = e, te(ze), te(Me), $(Me, e)) : te(ze), $(ze, n);
}
var xt = null, Lo = !1, mi = !1;
function Sd(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function Qh(e) {
  Lo = !0, Sd(e);
}
function dn() {
  if (!mi && xt !== null) {
    mi = !0;
    var e = 0, t = b;
    try {
      var n = xt;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      xt = null, Lo = !1;
    } catch (l) {
      throw xt !== null && (xt = xt.slice(e + 1)), Kc(Zu, dn), l;
    } finally {
      b = t, mi = !1;
    }
  }
  return null;
}
var Fn = [], Bn = 0, co = null, fo = 0, et = [], tt = 0, Sn = null, Mt = 1, Nt = "";
function fn(e, t) {
  Fn[Bn++] = fo, Fn[Bn++] = co, co = e, fo = t;
}
function wd(e, t, n) {
  et[tt++] = Mt, et[tt++] = Nt, et[tt++] = Sn, Sn = e;
  var r = Mt;
  e = Nt;
  var l = 32 - ht(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - ht(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Mt = 1 << 32 - ht(t) + l | n << l | r, Nt = o + e;
  } else
    Mt = 1 << o | n << l | r, Nt = e;
}
function _u(e) {
  e.return !== null && (fn(e, 1), wd(e, 1, 0));
}
function $u(e) {
  for (; e === co; )
    co = Fn[--Bn], Fn[Bn] = null, fo = Fn[--Bn], Fn[Bn] = null;
  for (; e === Sn; )
    Sn = et[--tt], et[tt] = null, Nt = et[--tt], et[tt] = null, Mt = et[--tt], et[tt] = null;
}
var Ke = null, Ge = null, ne = !1, pt = null;
function Vd(e, t) {
  var n = rt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function wa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, Ge = tn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, Ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sn !== null ? { id: Mt, overflow: Nt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ke = e, Ge = null, !0) : !1;
    default:
      return !1;
  }
}
function iu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function uu(e) {
  if (ne) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!wa(e, t)) {
        if (iu(e))
          throw Error(C(418));
        t = tn(n.nextSibling);
        var r = Ke;
        t && wa(e, t) ? Vd(r, n) : (e.flags = e.flags & -4097 | 2, ne = !1, Ke = e);
      }
    } else {
      if (iu(e))
        throw Error(C(418));
      e.flags = e.flags & -4097 | 2, ne = !1, Ke = e;
    }
  }
}
function Va(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ke = e;
}
function Rl(e) {
  if (e !== Ke)
    return !1;
  if (!ne)
    return Va(e), ne = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !nu(e.type, e.memoizedProps)), t && (t = Ge)) {
    if (iu(e))
      throw kd(), Error(C(418));
    for (; t; )
      Vd(e, t), t = tn(t.nextSibling);
  }
  if (Va(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = tn(e.nextSibling);
              break e;
            }
            t--;
          } else
            n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else
    Ge = Ke ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function kd() {
  for (var e = Ge; e; )
    e = tn(e.nextSibling);
}
function $n() {
  Ge = Ke = null, ne = !1;
}
function es(e) {
  pt === null ? pt = [e] : pt.push(e);
}
var jh = Lt.ReactCurrentBatchConfig;
function dt(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var po = cn(null), ho = null, Qn = null, ts = null;
function ns() {
  ts = Qn = ho = null;
}
function rs(e) {
  var t = po.current;
  te(po), e._currentValue = t;
}
function su(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Hn(e, t) {
  ho = e, ts = Qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function ot(e) {
  var t = e._currentValue;
  if (ts !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Qn === null) {
      if (ho === null)
        throw Error(C(308));
      Qn = e, ho.dependencies = { lanes: 0, firstContext: e };
    } else
      Qn = Qn.next = e;
  return t;
}
var mn = null;
function ls(e) {
  mn === null ? mn = [e] : mn.push(e);
}
function Ed(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ls(t)) : (n.next = l.next, l.next = n), t.interleaved = n, It(e, r);
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Gt = !1;
function os(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Cd(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, G & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, It(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, ls(r)) : (t.next = l.next, l.next = t), r.interleaved = t, It(e, n);
}
function Gl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wu(e, n);
  }
}
function ka(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else
      l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function vo(e, t, n, r) {
  var l = e.updateQueue;
  Gt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== i && (u === null ? v.firstBaseUpdate = a : u.next = a, v.lastBaseUpdate = s));
  }
  if (o !== null) {
    var p = l.baseState;
    i = 0, v = a = s = null, u = o;
    do {
      var g = u.lane, y = u.eventTime;
      if ((r & g) === g) {
        v !== null && (v = v.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, A = u;
          switch (g = t, y = n, A.tag) {
            case 1:
              if (w = A.payload, typeof w == "function") {
                p = w.call(y, p, g);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = A.payload, g = typeof w == "function" ? w.call(y, p, g) : w, g == null)
                break e;
              p = oe({}, p, g);
              break e;
            case 2:
              Gt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [u] : g.push(u));
      } else
        y = { eventTime: y, lane: g, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (a = v = y, s = p) : v = v.next = y, i |= g;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        g = u, u = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null;
      }
    } while (!0);
    if (v === null && (s = p), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = v, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    Vn |= i, e.lanes = i, e.memoizedState = p;
  }
}
function Ea(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var xd = new Ec.Component().refs;
function au(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Po = { isMounted: function(e) {
  return (e = e._reactInternals) ? Cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), l = ln(e), o = Dt(r, l);
  o.payload = t, n != null && (o.callback = n), t = nn(e, o, l), t !== null && (vt(t, e, l, r), Gl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), l = ln(e), o = Dt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = nn(e, o, l), t !== null && (vt(t, e, l, r), Gl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Re(), r = ln(e), l = Dt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = nn(e, l, r), t !== null && (vt(t, e, r, n), Gl(t, e, r));
} };
function Ca(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, r) || !Hr(l, o) : !0;
}
function Md(e, t, n) {
  var r = !1, l = sn, o = t.contextType;
  return typeof o == "object" && o !== null ? o = ot(o) : (l = Fe(t) ? qn : Me.current, r = t.contextTypes, o = (r = r != null) ? _n(e, l) : sn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Po, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function xa(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Po.enqueueReplaceState(t, t.state, null);
}
function cu(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = xd, os(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = ot(o) : (o = Fe(t) ? qn : Me.current, l.context = _n(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (au(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Po.enqueueReplaceState(l, l.state, null), vo(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(C(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === xd && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(C(284));
    if (!n._owner)
      throw Error(C(290, e));
  }
  return e;
}
function Tl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ma(e) {
  var t = e._init;
  return t(e._payload);
}
function Nd(e) {
  function t(f, c) {
    if (e) {
      var h = f.deletions;
      h === null ? (f.deletions = [c], f.flags |= 16) : h.push(c);
    }
  }
  function n(f, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function l(f, c) {
    return f = on(f, c), f.index = 0, f.sibling = null, f;
  }
  function o(f, c, h) {
    return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < c ? (f.flags |= 2, c) : h) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, h, S) {
    return c === null || c.tag !== 6 ? (c = Vi(h, f.mode, S), c.return = f, c) : (c = l(c, h), c.return = f, c);
  }
  function s(f, c, h, S) {
    var k = h.type;
    return k === In ? v(f, c, h.props.children, S, h.key) : c !== null && (c.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Wt && Ma(k) === c.type) ? (S = l(c, h.props), S.ref = Sr(f, c, h), S.return = f, S) : (S = bl(h.type, h.key, h.props, null, f.mode, S), S.ref = Sr(f, c, h), S.return = f, S);
  }
  function a(f, c, h, S) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = ki(h, f.mode, S), c.return = f, c) : (c = l(c, h.children || []), c.return = f, c);
  }
  function v(f, c, h, S, k) {
    return c === null || c.tag !== 7 ? (c = yn(h, f.mode, S, k), c.return = f, c) : (c = l(c, h), c.return = f, c);
  }
  function p(f, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = Vi("" + c, f.mode, h), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Sl:
          return h = bl(c.type, c.key, c.props, null, f.mode, h), h.ref = Sr(f, null, c), h.return = f, h;
        case Tn:
          return c = ki(c, f.mode, h), c.return = f, c;
        case Wt:
          var S = c._init;
          return p(f, S(c._payload), h);
      }
      if (Er(c) || mr(c))
        return c = yn(c, f.mode, h, null), c.return = f, c;
      Tl(f, c);
    }
    return null;
  }
  function g(f, c, h, S) {
    var k = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number")
      return k !== null ? null : u(f, c, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Sl:
          return h.key === k ? s(f, c, h, S) : null;
        case Tn:
          return h.key === k ? a(f, c, h, S) : null;
        case Wt:
          return k = h._init, g(
            f,
            c,
            k(h._payload),
            S
          );
      }
      if (Er(h) || mr(h))
        return k !== null ? null : v(f, c, h, S, null);
      Tl(f, h);
    }
    return null;
  }
  function y(f, c, h, S, k) {
    if (typeof S == "string" && S !== "" || typeof S == "number")
      return f = f.get(h) || null, u(c, f, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Sl:
          return f = f.get(S.key === null ? h : S.key) || null, s(c, f, S, k);
        case Tn:
          return f = f.get(S.key === null ? h : S.key) || null, a(c, f, S, k);
        case Wt:
          var M = S._init;
          return y(f, c, h, M(S._payload), k);
      }
      if (Er(S) || mr(S))
        return f = f.get(h) || null, v(c, f, S, k, null);
      Tl(c, S);
    }
    return null;
  }
  function w(f, c, h, S) {
    for (var k = null, M = null, E = c, x = c = 0, F = null; E !== null && x < h.length; x++) {
      E.index > x ? (F = E, E = null) : F = E.sibling;
      var U = g(f, E, h[x], S);
      if (U === null) {
        E === null && (E = F);
        break;
      }
      e && E && U.alternate === null && t(f, E), c = o(U, c, x), M === null ? k = U : M.sibling = U, M = U, E = F;
    }
    if (x === h.length)
      return n(f, E), ne && fn(f, x), k;
    if (E === null) {
      for (; x < h.length; x++)
        E = p(f, h[x], S), E !== null && (c = o(E, c, x), M === null ? k = E : M.sibling = E, M = E);
      return ne && fn(f, x), k;
    }
    for (E = r(f, E); x < h.length; x++)
      F = y(E, f, x, h[x], S), F !== null && (e && F.alternate !== null && E.delete(F.key === null ? x : F.key), c = o(F, c, x), M === null ? k = F : M.sibling = F, M = F);
    return e && E.forEach(function(K) {
      return t(f, K);
    }), ne && fn(f, x), k;
  }
  function A(f, c, h, S) {
    var k = mr(h);
    if (typeof k != "function")
      throw Error(C(150));
    if (h = k.call(h), h == null)
      throw Error(C(151));
    for (var M = k = null, E = c, x = c = 0, F = null, U = h.next(); E !== null && !U.done; x++, U = h.next()) {
      E.index > x ? (F = E, E = null) : F = E.sibling;
      var K = g(f, E, U.value, S);
      if (K === null) {
        E === null && (E = F);
        break;
      }
      e && E && K.alternate === null && t(f, E), c = o(K, c, x), M === null ? k = K : M.sibling = K, M = K, E = F;
    }
    if (U.done)
      return n(
        f,
        E
      ), ne && fn(f, x), k;
    if (E === null) {
      for (; !U.done; x++, U = h.next())
        U = p(f, U.value, S), U !== null && (c = o(U, c, x), M === null ? k = U : M.sibling = U, M = U);
      return ne && fn(f, x), k;
    }
    for (E = r(f, E); !U.done; x++, U = h.next())
      U = y(E, f, x, U.value, S), U !== null && (e && U.alternate !== null && E.delete(U.key === null ? x : U.key), c = o(U, c, x), M === null ? k = U : M.sibling = U, M = U);
    return e && E.forEach(function(ye) {
      return t(f, ye);
    }), ne && fn(f, x), k;
  }
  function V(f, c, h, S) {
    if (typeof h == "object" && h !== null && h.type === In && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Sl:
          e: {
            for (var k = h.key, M = c; M !== null; ) {
              if (M.key === k) {
                if (k = h.type, k === In) {
                  if (M.tag === 7) {
                    n(f, M.sibling), c = l(M, h.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (M.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Wt && Ma(k) === M.type) {
                  n(f, M.sibling), c = l(M, h.props), c.ref = Sr(f, M, h), c.return = f, f = c;
                  break e;
                }
                n(f, M);
                break;
              } else
                t(f, M);
              M = M.sibling;
            }
            h.type === In ? (c = yn(h.props.children, f.mode, S, h.key), c.return = f, f = c) : (S = bl(h.type, h.key, h.props, null, f.mode, S), S.ref = Sr(f, c, h), S.return = f, f = S);
          }
          return i(f);
        case Tn:
          e: {
            for (M = h.key; c !== null; ) {
              if (c.key === M)
                if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                  n(f, c.sibling), c = l(c, h.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else
                t(f, c);
              c = c.sibling;
            }
            c = ki(h, f.mode, S), c.return = f, f = c;
          }
          return i(f);
        case Wt:
          return M = h._init, V(f, c, M(h._payload), S);
      }
      if (Er(h))
        return w(f, c, h, S);
      if (mr(h))
        return A(f, c, h, S);
      Tl(f, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, h), c.return = f, f = c) : (n(f, c), c = Vi(h, f.mode, S), c.return = f, f = c), i(f)) : n(f, c);
  }
  return V;
}
var er = Nd(!0), Dd = Nd(!1), dl = {}, kt = cn(dl), _r = cn(dl), $r = cn(dl);
function gn(e) {
  if (e === dl)
    throw Error(C(174));
  return e;
}
function is(e, t) {
  switch ($($r, t), $(_r, e), $(kt, dl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ji(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ji(t, e);
  }
  te(kt), $(kt, t);
}
function tr() {
  te(kt), te(_r), te($r);
}
function Rd(e) {
  gn($r.current);
  var t = gn(kt.current), n = ji(t, e.type);
  t !== n && ($(_r, e), $(kt, n));
}
function us(e) {
  _r.current === e && (te(kt), te(_r));
}
var re = cn(0);
function mo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128)
        return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var gi = [];
function ss() {
  for (var e = 0; e < gi.length; e++)
    gi[e]._workInProgressVersionPrimary = null;
  gi.length = 0;
}
var Kl = Lt.ReactCurrentDispatcher, Ai = Lt.ReactCurrentBatchConfig, wn = 0, le = null, fe = null, me = null, go = !1, Or = !1, el = 0, Zh = 0;
function Ee() {
  throw Error(C(321));
}
function as(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!mt(e[n], t[n]))
      return !1;
  return !0;
}
function cs(e, t, n, r, l, o) {
  if (wn = o, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Kl.current = e === null || e.memoizedState === null ? Jh : Hh, e = n(r, l), Or) {
    o = 0;
    do {
      if (Or = !1, el = 0, 25 <= o)
        throw Error(C(301));
      o += 1, me = fe = null, t.updateQueue = null, Kl.current = Xh, e = n(r, l);
    } while (Or);
  }
  if (Kl.current = Ao, t = fe !== null && fe.next !== null, wn = 0, me = fe = le = null, go = !1, t)
    throw Error(C(300));
  return e;
}
function ds() {
  var e = el !== 0;
  return el = 0, e;
}
function qt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return me === null ? le.memoizedState = me = e : me = me.next = e, me;
}
function it() {
  if (fe === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = fe.next;
  var t = me === null ? le.memoizedState : me.next;
  if (t !== null)
    me = t, fe = e;
  else {
    if (e === null)
      throw Error(C(310));
    fe = e, e = { memoizedState: fe.memoizedState, baseState: fe.baseState, baseQueue: fe.baseQueue, queue: fe.queue, next: null }, me === null ? le.memoizedState = me = e : me = me.next = e;
  }
  return me;
}
function tl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yi(e) {
  var t = it(), n = t.queue;
  if (n === null)
    throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = fe, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, a = o;
    do {
      var v = a.lane;
      if ((wn & v) === v)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: v,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = p, i = r) : s = s.next = p, le.lanes |= v, Vn |= v;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, mt(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, le.lanes |= o, Vn |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qi(e) {
  var t = it(), n = t.queue;
  if (n === null)
    throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    mt(o, t.memoizedState) || (Pe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Td() {
}
function Id(e, t) {
  var n = le, r = it(), l = t(), o = !mt(r.memoizedState, l);
  if (o && (r.memoizedState = l, Pe = !0), r = r.queue, fs(Ld.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || me !== null && me.memoizedState.tag & 1) {
    if (n.flags |= 2048, nl(9, Ud.bind(null, n, r, l, t), void 0, null), Ae === null)
      throw Error(C(349));
    wn & 30 || Od(n, t, l);
  }
  return l;
}
function Od(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ud(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Pd(t) && zd(e);
}
function Ld(e, t, n) {
  return n(function() {
    Pd(t) && zd(e);
  });
}
function Pd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mt(e, n);
  } catch {
    return !0;
  }
}
function zd(e) {
  var t = It(e, 1);
  t !== null && vt(t, e, 1, -1);
}
function Na(e) {
  var t = qt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: tl, lastRenderedState: e }, t.queue = e, e = e.dispatch = Kh.bind(null, le, e), [t.memoizedState, e];
}
function nl(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Fd() {
  return it().memoizedState;
}
function Jl(e, t, n, r) {
  var l = qt();
  le.flags |= e, l.memoizedState = nl(1 | t, n, void 0, r === void 0 ? null : r);
}
function zo(e, t, n, r) {
  var l = it();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (fe !== null) {
    var i = fe.memoizedState;
    if (o = i.destroy, r !== null && as(r, i.deps)) {
      l.memoizedState = nl(t, n, o, r);
      return;
    }
  }
  le.flags |= e, l.memoizedState = nl(1 | t, n, o, r);
}
function Da(e, t) {
  return Jl(8390656, 8, e, t);
}
function fs(e, t) {
  return zo(2048, 8, e, t);
}
function Bd(e, t) {
  return zo(4, 2, e, t);
}
function Qd(e, t) {
  return zo(4, 4, e, t);
}
function jd(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Zd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zo(4, 4, jd.bind(null, t, e), n);
}
function ps() {
}
function Wd(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && as(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Gd(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && as(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Kd(e, t, n) {
  return wn & 21 ? (mt(n, t) || (n = Xc(), le.lanes |= n, Vn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function Wh(e, t) {
  var n = b;
  b = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ai.transition;
  Ai.transition = {};
  try {
    e(!1), t();
  } finally {
    b = n, Ai.transition = r;
  }
}
function Jd() {
  return it().memoizedState;
}
function Gh(e, t, n) {
  var r = ln(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Hd(e))
    Xd(t, n);
  else if (n = Ed(e, t, n, r), n !== null) {
    var l = Re();
    vt(n, e, r, l), Yd(n, t, r);
  }
}
function Kh(e, t, n) {
  var r = ln(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Hd(e))
    Xd(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, mt(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, ls(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = Ed(e, t, l, r), n !== null && (l = Re(), vt(n, e, r, l), Yd(n, t, r));
  }
}
function Hd(e) {
  var t = e.alternate;
  return e === le || t !== null && t === le;
}
function Xd(e, t) {
  Or = go = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Yd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Wu(e, n);
  }
}
var Ao = { readContext: ot, useCallback: Ee, useContext: Ee, useEffect: Ee, useImperativeHandle: Ee, useInsertionEffect: Ee, useLayoutEffect: Ee, useMemo: Ee, useReducer: Ee, useRef: Ee, useState: Ee, useDebugValue: Ee, useDeferredValue: Ee, useTransition: Ee, useMutableSource: Ee, useSyncExternalStore: Ee, useId: Ee, unstable_isNewReconciler: !1 }, Jh = { readContext: ot, useCallback: function(e, t) {
  return qt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ot, useEffect: Da, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Jl(
    4194308,
    4,
    jd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Jl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Jl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = qt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = qt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gh.bind(null, le, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = qt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Na, useDebugValue: ps, useDeferredValue: function(e) {
  return qt().memoizedState = e;
}, useTransition: function() {
  var e = Na(!1), t = e[0];
  return e = Wh.bind(null, e[1]), qt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = le, l = qt();
  if (ne) {
    if (n === void 0)
      throw Error(C(407));
    n = n();
  } else {
    if (n = t(), Ae === null)
      throw Error(C(349));
    wn & 30 || Od(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Da(Ld.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, nl(9, Ud.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = qt(), t = Ae.identifierPrefix;
  if (ne) {
    var n = Nt, r = Mt;
    n = (r & ~(1 << 32 - ht(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = el++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Zh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Hh = {
  readContext: ot,
  useCallback: Wd,
  useContext: ot,
  useEffect: fs,
  useImperativeHandle: Zd,
  useInsertionEffect: Bd,
  useLayoutEffect: Qd,
  useMemo: Gd,
  useReducer: yi,
  useRef: Fd,
  useState: function() {
    return yi(tl);
  },
  useDebugValue: ps,
  useDeferredValue: function(e) {
    var t = it();
    return Kd(t, fe.memoizedState, e);
  },
  useTransition: function() {
    var e = yi(tl)[0], t = it().memoizedState;
    return [e, t];
  },
  useMutableSource: Td,
  useSyncExternalStore: Id,
  useId: Jd,
  unstable_isNewReconciler: !1
}, Xh = { readContext: ot, useCallback: Wd, useContext: ot, useEffect: fs, useImperativeHandle: Zd, useInsertionEffect: Bd, useLayoutEffect: Qd, useMemo: Gd, useReducer: qi, useRef: Fd, useState: function() {
  return qi(tl);
}, useDebugValue: ps, useDeferredValue: function(e) {
  var t = it();
  return fe === null ? t.memoizedState = e : Kd(t, fe.memoizedState, e);
}, useTransition: function() {
  var e = qi(tl)[0], t = it().memoizedState;
  return [e, t];
}, useMutableSource: Td, useSyncExternalStore: Id, useId: Jd, unstable_isNewReconciler: !1 };
function nr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Vp(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function du(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Yh = typeof WeakMap == "function" ? WeakMap : Map;
function bd(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    qo || (qo = !0, Su = r), du(e, t);
  }, n;
}
function _d(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      du(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    du(e, t), typeof r != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ra(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yh();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = cv.bind(null, e, t, n), t.then(e, e));
}
function Ta(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ia(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, nn(n, t, 1))), n.lanes |= 1), e);
}
var bh = Lt.ReactCurrentOwner, Pe = !1;
function De(e, t, n, r) {
  t.child = e === null ? Dd(t, null, n, r) : er(t, e.child, n, r);
}
function Oa(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Hn(t, l), r = cs(e, t, n, r, o, l), n = ds(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ot(e, t, l)) : (ne && n && _u(t), t.flags |= 1, De(e, t, r, l), t.child);
}
function Ua(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ss(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, $d(e, t, o, r, l)) : (e = bl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Hr, n(i, r) && e.ref === t.ref)
      return Ot(e, t, l);
  }
  return t.flags |= 1, e = on(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function $d(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Hr(o, r) && e.ref === t.ref)
      if (Pe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (Pe = !0);
      else
        return t.lanes = e.lanes, Ot(e, t, l);
  }
  return fu(e, t, n, r, l);
}
function ef(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $(Zn, We), We |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $(Zn, We), We |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, $(Zn, We), We |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $(Zn, We), We |= r;
  return De(e, t, l, n), t.child;
}
function tf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function fu(e, t, n, r, l) {
  var o = Fe(n) ? qn : Me.current;
  return o = _n(t, o), Hn(t, l), n = cs(e, t, n, r, o, l), r = ds(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ot(e, t, l)) : (ne && r && _u(t), t.flags |= 1, De(e, t, n, l), t.child);
}
function La(e, t, n, r, l) {
  if (Fe(n)) {
    var o = !0;
    ao(t);
  } else
    o = !1;
  if (Hn(t, l), t.stateNode === null)
    Hl(e, t), Md(t, n, r), cu(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = ot(a) : (a = Fe(n) ? qn : Me.current, a = _n(t, a));
    var v = n.getDerivedStateFromProps, p = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && xa(t, i, r, a), Gt = !1;
    var g = t.memoizedState;
    i.state = g, vo(t, r, i, l), s = t.memoizedState, u !== r || g !== s || ze.current || Gt ? (typeof v == "function" && (au(t, n, v, r), s = t.memoizedState), (u = Gt || Ca(t, n, u, r, g, s, a)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Cd(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : dt(t.type, u), i.props = a, p = t.pendingProps, g = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = ot(s) : (s = Fe(n) ? qn : Me.current, s = _n(t, s));
    var y = n.getDerivedStateFromProps;
    (v = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== p || g !== s) && xa(t, i, r, s), Gt = !1, g = t.memoizedState, i.state = g, vo(t, r, i, l);
    var w = t.memoizedState;
    u !== p || g !== w || ze.current || Gt ? (typeof y == "function" && (au(t, n, y, r), w = t.memoizedState), (a = Gt || Ca(t, n, a, r, g, w, s) || !1) ? (v || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return pu(e, t, n, r, o, l);
}
function pu(e, t, n, r, l, o) {
  tf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && Sa(t, n, !1), Ot(e, t, o);
  r = t.stateNode, bh.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = er(t, e.child, null, o), t.child = er(t, null, u, o)) : De(e, t, u, o), t.memoizedState = r.state, l && Sa(t, n, !0), t.child;
}
function nf(e) {
  var t = e.stateNode;
  t.pendingContext ? qa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qa(e, t.context, !1), is(e, t.containerInfo);
}
function Pa(e, t, n, r, l) {
  return $n(), es(l), t.flags |= 256, De(e, t, n, r), t.child;
}
var hu = { dehydrated: null, treeContext: null, retryLane: 0 };
function vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rf(e, t, n) {
  var r = t.pendingProps, l = re.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(re, l & 1), e === null)
    return uu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Qo(i, r, 0, null), e = yn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = vu(n), t.memoizedState = hu, e) : hs(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return _h(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = on(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = on(u, o) : (o = yn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? vu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = hu, r;
  }
  return o = e.child, e = o.sibling, r = on(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function hs(e, t) {
  return t = Qo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Il(e, t, n, r) {
  return r !== null && es(r), er(t, e.child, null, n), e = hs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function _h(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Si(Error(C(422))), Il(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Qo({ mode: "visible", children: r.children }, l, 0, null), o = yn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && er(t, e.child, null, i), t.child.memoizedState = vu(i), t.memoizedState = hu, o);
  if (!(t.mode & 1))
    return Il(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(C(419)), r = Si(o, r, void 0), Il(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, Pe || u) {
    if (r = Ae, r !== null) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, It(e, l), vt(r, e, l, -1));
    }
    return qs(), r = Si(Error(C(421))), Il(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = dv.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ge = tn(l.nextSibling), Ke = t, ne = !0, pt = null, e !== null && (et[tt++] = Mt, et[tt++] = Nt, et[tt++] = Sn, Mt = e.id, Nt = e.overflow, Sn = t), t = hs(t, r.children), t.flags |= 4096, t);
}
function za(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), su(e.return, t, n);
}
function wi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function lf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (De(e, t, r.children, n), r = re.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && za(e, n, t);
          else if (e.tag === 19)
            za(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if ($(re, r), !(t.mode & 1))
    t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          e = n.alternate, e !== null && mo(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), wi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && mo(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        wi(t, !0, n, null, o);
        break;
      case "together":
        wi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Vn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function $h(e, t, n) {
  switch (t.tag) {
    case 3:
      nf(t), $n();
      break;
    case 5:
      Rd(t);
      break;
    case 1:
      Fe(t.type) && ao(t);
      break;
    case 4:
      is(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      $(po, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? ($(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? rf(e, t, n) : ($(re, re.current & 1), e = Ot(e, t, n), e !== null ? e.sibling : null);
      $(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return lf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(re, re.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ef(e, t, n);
  }
  return Ot(e, t, n);
}
var of, mu, uf, sf;
of = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
mu = function() {
};
uf = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, gn(kt.current);
    var o = null;
    switch (n) {
      case "input":
        l = zi(e, l), r = zi(e, r), o = [];
        break;
      case "select":
        l = oe({}, l, { value: void 0 }), r = oe({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Qi(e, l), r = Qi(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = uo);
    }
    Zi(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u)
            u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
        } else
          a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Qr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = l != null ? l[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null))
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
          } else
            n || (o || (o = []), o.push(
              a,
              n
            )), n = s;
        else
          a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Qr.hasOwnProperty(a) ? (s != null && a === "onScroll" && ee("scroll", e), o || u === s || (o = [])) : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
sf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wr(e, t) {
  if (!ne)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function ev(e, t, n) {
  var r = t.pendingProps;
  switch ($u(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ce(t), null;
    case 1:
      return Fe(t.type) && so(), Ce(t), null;
    case 3:
      return r = t.stateNode, tr(), te(ze), te(Me), ss(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, pt !== null && (ku(pt), pt = null))), mu(e, t), Ce(t), null;
    case 5:
      us(t);
      var l = gn($r.current);
      if (n = t.type, e !== null && t.stateNode != null)
        uf(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(C(166));
          return Ce(t), null;
        }
        if (e = gn(kt.current), Rl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[St] = t, r[br] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xr.length; l++)
                ee(xr[l], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee(
                "error",
                r
              ), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Js(r, o), ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, ee("invalid", r);
              break;
            case "textarea":
              Xs(r, o), ee("invalid", r);
          }
          Zi(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Dl(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Dl(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Qr.hasOwnProperty(i) && u != null && i === "onScroll" && ee("scroll", r);
            }
          switch (n) {
            case "input":
              wl(r), Hs(r, o, !0);
              break;
            case "textarea":
              wl(r), Ys(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = uo);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Oc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[St] = t, e[br] = r, of(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Wi(n, r), n) {
              case "dialog":
                ee("cancel", e), ee("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < xr.length; l++)
                  ee(xr[l], e);
                l = r;
                break;
              case "source":
                ee("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                ee(
                  "error",
                  e
                ), ee("load", e), l = r;
                break;
              case "details":
                ee("toggle", e), l = r;
                break;
              case "input":
                Js(e, r), l = zi(e, r), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = oe({}, r, { value: void 0 }), ee("invalid", e);
                break;
              case "textarea":
                Xs(e, r), l = Qi(e, r), ee("invalid", e);
                break;
              default:
                l = r;
            }
            Zi(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Pc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Uc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && jr(e, s) : typeof s == "number" && jr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Qr.hasOwnProperty(o) ? s != null && o === "onScroll" && ee("scroll", e) : s != null && zu(e, o, s, i));
              }
            switch (n) {
              case "input":
                wl(e), Hs(e, r, !1);
                break;
              case "textarea":
                wl(e), Ys(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Wn(e, !!r.multiple, o, !1) : r.defaultValue != null && Wn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = uo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null)
        sf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(C(166));
        if (n = gn($r.current), gn(kt.current), Rl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (o = r.nodeValue !== n) && (e = Ke, e !== null))
            switch (e.tag) {
              case 3:
                Dl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Dl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r;
      }
      return Ce(t), null;
    case 13:
      if (te(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ne && Ge !== null && t.mode & 1 && !(t.flags & 128))
          kd(), $n(), t.flags |= 98560, o = !1;
        else if (o = Rl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(C(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(C(317));
            o[St] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), o = !1;
        } else
          pt !== null && (ku(pt), pt = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? he === 0 && (he = 3) : qs())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return tr(), mu(e, t), e === null && Xr(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return rs(t.type._context), Ce(t), null;
    case 17:
      return Fe(t.type) && so(), Ce(t), null;
    case 19:
      if (te(re), o = t.memoizedState, o === null)
        return Ce(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          wr(o, !1);
        else {
          if (he !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = mo(e), i !== null) {
                for (t.flags |= 128, wr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return $(re, re.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && ue() > rr && (t.flags |= 128, r = !0, wr(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = mo(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !ne)
              return Ce(t), null;
          } else
            2 * ue() - o.renderingStartTime > rr && n !== 1073741824 && (t.flags |= 128, r = !0, wr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ue(), t.sibling = null, n = re.current, $(re, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return ys(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function tv(e, t) {
  switch ($u(t), t.tag) {
    case 1:
      return Fe(t.type) && so(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return tr(), te(ze), te(Me), ss(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return us(t), null;
    case 13:
      if (te(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(C(340));
        $n();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return te(re), null;
    case 4:
      return tr(), null;
    case 10:
      return rs(t.type._context), null;
    case 22:
    case 23:
      return ys(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ol = !1, xe = !1, nv = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else
      n.current = null;
}
function gu(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Fa = !1;
function rv(e, t) {
  if (eu = lo, e = dd(), bu(e)) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, s = -1, a = 0, v = 0, p = e, g = null;
          t:
            for (; ; ) {
              for (var y; p !== n || l !== 0 && p.nodeType !== 3 || (u = i + l), p !== o || r !== 0 && p.nodeType !== 3 || (s = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (y = p.firstChild) !== null; )
                g = p, p = y;
              for (; ; ) {
                if (p === e)
                  break t;
                if (g === n && ++a === l && (u = i), g === o && ++v === r && (s = i), (y = p.nextSibling) !== null)
                  break;
                p = g, g = p.parentNode;
              }
              p = y;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (tu = { focusedElem: e, selectionRange: n }, lo = !1, R = t; R !== null; )
    if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, R = e;
    else
      for (; R !== null; ) {
        t = R;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var A = w.memoizedProps, V = w.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? A : dt(t.type, A), V);
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (S) {
          ie(t, t.return, S);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, R = e;
          break;
        }
        R = t.return;
      }
  return w = Fa, Fa = !1, w;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && gu(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Fo(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Au(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function af(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, af(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[br], delete t[lu], delete t[Fh], delete t[Bh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function cf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ba(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || cf(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function yu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = uo));
  else if (r !== 4 && (e = e.child, e !== null))
    for (yu(e, t, n), e = e.sibling; e !== null; )
      yu(e, t, n), e = e.sibling;
}
function qu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (qu(e, t, n), e = e.sibling; e !== null; )
      qu(e, t, n), e = e.sibling;
}
var we = null, ft = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; )
    df(e, t, n), n = n.sibling;
}
function df(e, t, n) {
  if (Vt && typeof Vt.onCommitFiberUnmount == "function")
    try {
      Vt.onCommitFiberUnmount(Ro, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      xe || jn(n, t);
    case 6:
      var r = we, l = ft;
      we = null, Zt(e, t, n), we = r, ft = l, we !== null && (ft ? (e = we, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null && (ft ? (e = we, n = n.stateNode, e.nodeType === 8 ? vi(e.parentNode, n) : e.nodeType === 1 && vi(e, n), Kr(e)) : vi(we, n.stateNode));
      break;
    case 4:
      r = we, l = ft, we = n.stateNode.containerInfo, ft = !0, Zt(e, t, n), we = r, ft = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && gu(n, t, i), l = l.next;
        } while (l !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (!xe && (jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ie(n, t, u);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (xe = (r = xe) || n.memoizedState !== null, Zt(e, t, n), xe = r) : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function Qa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nv()), t.forEach(function(r) {
      var l = fv.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                we = u.stateNode, ft = !1;
                break e;
              case 3:
                we = u.stateNode.containerInfo, ft = !0;
                break e;
              case 4:
                we = u.stateNode.containerInfo, ft = !0;
                break e;
            }
            u = u.return;
          }
        if (we === null)
          throw Error(C(160));
        df(o, i, l), we = null, ft = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        ie(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      ff(t, e), t = t.sibling;
}
function ff(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ct(t, e), yt(e), r & 4) {
        try {
          Ur(3, e, e.return), Fo(3, e);
        } catch (A) {
          ie(e, e.return, A);
        }
        try {
          Ur(5, e, e.return);
        } catch (A) {
          ie(e, e.return, A);
        }
      }
      break;
    case 1:
      ct(t, e), yt(e), r & 512 && n !== null && jn(n, n.return);
      break;
    case 5:
      if (ct(t, e), yt(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          jr(l, "");
        } catch (A) {
          ie(e, e.return, A);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Tc(l, o), Wi(u, i);
            var a = Wi(u, o);
            for (i = 0; i < s.length; i += 2) {
              var v = s[i], p = s[i + 1];
              v === "style" ? Pc(l, p) : v === "dangerouslySetInnerHTML" ? Uc(l, p) : v === "children" ? jr(l, p) : zu(l, v, p, a);
            }
            switch (u) {
              case "input":
                Fi(l, o);
                break;
              case "textarea":
                Ic(l, o);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null ? Wn(l, !!o.multiple, y, !1) : g !== !!o.multiple && (o.defaultValue != null ? Wn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Wn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[br] = o;
          } catch (A) {
            ie(e, e.return, A);
          }
      }
      break;
    case 6:
      if (ct(t, e), yt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(C(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (A) {
          ie(e, e.return, A);
        }
      }
      break;
    case 3:
      if (ct(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        try {
          Kr(t.containerInfo);
        } catch (A) {
          ie(e, e.return, A);
        }
      break;
    case 4:
      ct(t, e), yt(e);
      break;
    case 13:
      ct(t, e), yt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (gs = ue())), r & 4 && Qa(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (xe = (a = xe) || v, ct(t, e), xe = a) : ct(t, e), yt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !v && e.mode & 1)
          for (R = e, v = e.child; v !== null; ) {
            for (p = R = v; R !== null; ) {
              switch (g = R, y = g.child, g.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, g, g.return);
                  break;
                case 1:
                  jn(g, g.return);
                  var w = g.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = g, n = g.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (A) {
                      ie(r, n, A);
                    }
                  }
                  break;
                case 5:
                  jn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Za(p);
                    continue;
                  }
              }
              y !== null ? (y.return = g, R = y) : Za(p);
            }
            v = v.sibling;
          }
        e:
          for (v = null, p = e; ; ) {
            if (p.tag === 5) {
              if (v === null) {
                v = p;
                try {
                  l = p.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = p.stateNode, s = p.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Lc("display", i));
                } catch (A) {
                  ie(e, e.return, A);
                }
              }
            } else if (p.tag === 6) {
              if (v === null)
                try {
                  p.stateNode.nodeValue = a ? "" : p.memoizedProps;
                } catch (A) {
                  ie(e, e.return, A);
                }
            } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
            if (p === e)
              break e;
            for (; p.sibling === null; ) {
              if (p.return === null || p.return === e)
                break e;
              v === p && (v = null), p = p.return;
            }
            v === p && (v = null), p.sibling.return = p.return, p = p.sibling;
          }
      }
      break;
    case 19:
      ct(t, e), yt(e), r & 4 && Qa(e);
      break;
    case 21:
      break;
    default:
      ct(
        t,
        e
      ), yt(e);
  }
}
function yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (jr(l, ""), r.flags &= -33);
          var o = Ba(e);
          qu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Ba(e);
          yu(e, u, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (s) {
      ie(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lv(e, t, n) {
  R = e, pf(e);
}
function pf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Ol;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || xe;
        u = Ol;
        var a = xe;
        if (Ol = i, (xe = s) && !a)
          for (R = l; R !== null; )
            i = R, s = i.child, i.tag === 22 && i.memoizedState !== null ? Wa(l) : s !== null ? (s.return = i, R = s) : Wa(l);
        for (; o !== null; )
          R = o, pf(o), o = o.sibling;
        R = l, Ol = u, xe = a;
      }
      ja(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, R = o) : ja(e);
  }
}
function ja(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || Fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Ea(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null)
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ea(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var v = a.memoizedState;
                  if (v !== null) {
                    var p = v.dehydrated;
                    p !== null && Kr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        xe || t.flags & 512 && Au(t);
      } catch (g) {
        ie(t, t.return, g);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function Za(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function Wa(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fo(4, t);
          } catch (s) {
            ie(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ie(t, l, s);
            }
          }
          var o = t.return;
          try {
            Au(t);
          } catch (s) {
            ie(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Au(t);
          } catch (s) {
            ie(t, i, s);
          }
      }
    } catch (s) {
      ie(t, t.return, s);
    }
    if (t === e) {
      R = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, R = u;
      break;
    }
    R = t.return;
  }
}
var ov = Math.ceil, yo = Lt.ReactCurrentDispatcher, vs = Lt.ReactCurrentOwner, lt = Lt.ReactCurrentBatchConfig, G = 0, Ae = null, ae = null, Ve = 0, We = 0, Zn = cn(0), he = 0, rl = null, Vn = 0, Bo = 0, ms = 0, Lr = null, Le = null, gs = 0, rr = 1 / 0, Ct = null, qo = !1, Su = null, rn = null, Ul = !1, bt = null, So = 0, Pr = 0, wu = null, Xl = -1, Yl = 0;
function Re() {
  return G & 6 ? ue() : Xl !== -1 ? Xl : Xl = ue();
}
function ln(e) {
  return e.mode & 1 ? G & 2 && Ve !== 0 ? Ve & -Ve : jh.transition !== null ? (Yl === 0 && (Yl = Xc()), Yl) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : nd(e.type)), e) : 1;
}
function vt(e, t, n, r) {
  if (50 < Pr)
    throw Pr = 0, wu = null, Error(C(185));
  sl(e, n, r), (!(G & 2) || e !== Ae) && (e === Ae && (!(G & 2) && (Bo |= n), he === 4 && Ht(e, Ve)), Be(e, r), n === 1 && G === 0 && !(t.mode & 1) && (rr = ue() + 500, Lo && dn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  jp(e, t);
  var r = ro(e, e === Ae ? Ve : 0);
  if (r === 0)
    n !== null && $s(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && $s(n), t === 1)
      e.tag === 0 ? Qh(Ga.bind(null, e)) : Sd(Ga.bind(null, e)), Ph(function() {
        !(G & 6) && dn();
      }), n = null;
    else {
      switch (Yc(r)) {
        case 1:
          n = Zu;
          break;
        case 4:
          n = Jc;
          break;
        case 16:
          n = no;
          break;
        case 536870912:
          n = Hc;
          break;
        default:
          n = no;
      }
      n = Sf(n, hf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function hf(e, t) {
  if (Xl = -1, Yl = 0, G & 6)
    throw Error(C(327));
  var n = e.callbackNode;
  if (Xn() && e.callbackNode !== n)
    return null;
  var r = ro(e, e === Ae ? Ve : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = wo(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var o = mf();
    (Ae !== e || Ve !== t) && (Ct = null, rr = ue() + 500, An(e, t));
    do
      try {
        sv();
        break;
      } catch (u) {
        vf(e, u);
      }
    while (!0);
    ns(), yo.current = o, G = l, ae !== null ? t = 0 : (Ae = null, Ve = 0, t = he);
  }
  if (t !== 0) {
    if (t === 2 && (l = Xi(e), l !== 0 && (r = l, t = Vu(e, l))), t === 1)
      throw n = rl, An(e, 0), Ht(e, r), Be(e, ue()), n;
    if (t === 6)
      Ht(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !iv(l) && (t = wo(e, r), t === 2 && (o = Xi(e), o !== 0 && (r = o, t = Vu(e, o))), t === 1))
        throw n = rl, An(e, 0), Ht(e, r), Be(e, ue()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          pn(e, Le, Ct);
          break;
        case 3:
          if (Ht(e, r), (r & 130023424) === r && (t = gs + 500 - ue(), 10 < t)) {
            if (ro(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Re(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ru(pn.bind(null, e, Le, Ct), t);
            break;
          }
          pn(e, Le, Ct);
          break;
        case 4:
          if (Ht(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ht(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ov(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ru(pn.bind(null, e, Le, Ct), r);
            break;
          }
          pn(e, Le, Ct);
          break;
        case 5:
          pn(e, Le, Ct);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Be(e, ue()), e.callbackNode === n ? hf.bind(null, e) : null;
}
function Vu(e, t) {
  var n = Lr;
  return e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256), e = wo(e, t), e !== 2 && (t = Le, Le = n, t !== null && ku(t)), e;
}
function ku(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function iv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!mt(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null)
      n.return = t, t = n;
    else {
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Ht(e, t) {
  for (t &= ~ms, t &= ~Bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ht(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ga(e) {
  if (G & 6)
    throw Error(C(327));
  Xn();
  var t = ro(e, 0);
  if (!(t & 1))
    return Be(e, ue()), null;
  var n = wo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xi(e);
    r !== 0 && (t = r, n = Vu(e, r));
  }
  if (n === 1)
    throw n = rl, An(e, 0), Ht(e, t), Be(e, ue()), n;
  if (n === 6)
    throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, pn(e, Le, Ct), Be(e, ue()), null;
}
function As(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    G = n, G === 0 && (rr = ue() + 500, Lo && dn());
  }
}
function kn(e) {
  bt !== null && bt.tag === 0 && !(G & 6) && Xn();
  var t = G;
  G |= 1;
  var n = lt.transition, r = b;
  try {
    if (lt.transition = null, b = 1, e)
      return e();
  } finally {
    b = r, lt.transition = n, G = t, !(G & 6) && dn();
  }
}
function ys() {
  We = Zn.current, te(Zn);
}
function An(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Lh(n)), ae !== null)
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ($u(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && so();
          break;
        case 3:
          tr(), te(ze), te(Me), ss();
          break;
        case 5:
          us(r);
          break;
        case 4:
          tr();
          break;
        case 13:
          te(re);
          break;
        case 19:
          te(re);
          break;
        case 10:
          rs(r.type._context);
          break;
        case 22:
        case 23:
          ys();
      }
      n = n.return;
    }
  if (Ae = e, ae = e = on(e.current, null), Ve = We = t, he = 0, rl = null, ms = Bo = Vn = 0, Le = Lr = null, mn !== null) {
    for (t = 0; t < mn.length; t++)
      if (n = mn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    mn = null;
  }
  return e;
}
function vf(e, t) {
  do {
    var n = ae;
    try {
      if (ns(), Kl.current = Ao, go) {
        for (var r = le.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        go = !1;
      }
      if (wn = 0, me = fe = le = null, Or = !1, el = 0, vs.current = null, n === null || n.return === null) {
        he = 1, rl = t, ae = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = Ve, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, v = u, p = v.tag;
          if (!(v.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var g = v.alternate;
            g ? (v.updateQueue = g.updateQueue, v.memoizedState = g.memoizedState, v.lanes = g.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var y = Ta(i);
          if (y !== null) {
            y.flags &= -257, Ia(y, i, u, o, t), y.mode & 1 && Ra(o, a, t), t = y, s = a;
            var w = t.updateQueue;
            if (w === null) {
              var A = /* @__PURE__ */ new Set();
              A.add(s), t.updateQueue = A;
            } else
              w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ra(o, a, t), qs();
              break e;
            }
            s = Error(C(426));
          }
        } else if (ne && u.mode & 1) {
          var V = Ta(i);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256), Ia(V, i, u, o, t), es(nr(s, u));
            break e;
          }
        }
        o = s = nr(s, u), he !== 4 && (he = 2), Lr === null ? Lr = [o] : Lr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var f = bd(o, s, t);
              ka(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type, h = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (rn === null || !rn.has(h)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = _d(o, u, t);
                ka(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Af(n);
    } catch (k) {
      t = k, ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mf() {
  var e = yo.current;
  return yo.current = Ao, e === null ? Ao : e;
}
function qs() {
  (he === 0 || he === 3 || he === 2) && (he = 4), Ae === null || !(Vn & 268435455) && !(Bo & 268435455) || Ht(Ae, Ve);
}
function wo(e, t) {
  var n = G;
  G |= 2;
  var r = mf();
  (Ae !== e || Ve !== t) && (Ct = null, An(e, t));
  do
    try {
      uv();
      break;
    } catch (l) {
      vf(e, l);
    }
  while (!0);
  if (ns(), G = n, yo.current = r, ae !== null)
    throw Error(C(261));
  return Ae = null, Ve = 0, he;
}
function uv() {
  for (; ae !== null; )
    gf(ae);
}
function sv() {
  for (; ae !== null && !Ip(); )
    gf(ae);
}
function gf(e) {
  var t = qf(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? Af(e) : ae = t, vs.current = null;
}
function Af(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = tv(n, t), n !== null) {
        n.flags &= 32767, ae = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        he = 6, ae = null;
        return;
      }
    } else if (n = ev(n, t, We), n !== null) {
      ae = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function pn(e, t, n) {
  var r = b, l = lt.transition;
  try {
    lt.transition = null, b = 1, av(e, t, n, r);
  } finally {
    lt.transition = l, b = r;
  }
  return null;
}
function av(e, t, n, r) {
  do
    Xn();
  while (bt !== null);
  if (G & 6)
    throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Zp(e, o), e === Ae && (ae = Ae = null, Ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ul || (Ul = !0, Sf(no, function() {
    return Xn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = lt.transition, lt.transition = null;
    var i = b;
    b = 1;
    var u = G;
    G |= 4, vs.current = null, rv(e, n), ff(n, e), Nh(tu), lo = !!eu, tu = eu = null, e.current = n, lv(n), Op(), G = u, b = i, lt.transition = o;
  } else
    e.current = n;
  if (Ul && (Ul = !1, bt = e, So = l), o = e.pendingLanes, o === 0 && (rn = null), Pp(n.stateNode), Be(e, ue()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qo)
    throw qo = !1, e = Su, Su = null, e;
  return So & 1 && e.tag !== 0 && Xn(), o = e.pendingLanes, o & 1 ? e === wu ? Pr++ : (Pr = 0, wu = e) : Pr = 0, dn(), null;
}
function Xn() {
  if (bt !== null) {
    var e = Yc(So), t = lt.transition, n = b;
    try {
      if (lt.transition = null, b = 16 > e ? 16 : e, bt === null)
        var r = !1;
      else {
        if (e = bt, bt = null, So = 0, G & 6)
          throw Error(C(331));
        var l = G;
        for (G |= 4, R = e.current; R !== null; ) {
          var o = R, i = o.child;
          if (R.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (R = a; R !== null; ) {
                  var v = R;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(8, v, o);
                  }
                  var p = v.child;
                  if (p !== null)
                    p.return = v, R = p;
                  else
                    for (; R !== null; ) {
                      v = R;
                      var g = v.sibling, y = v.return;
                      if (af(v), v === a) {
                        R = null;
                        break;
                      }
                      if (g !== null) {
                        g.return = y, R = g;
                        break;
                      }
                      R = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var A = w.child;
                if (A !== null) {
                  w.child = null;
                  do {
                    var V = A.sibling;
                    A.sibling = null, A = V;
                  } while (A !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, R = i;
          else
            e:
              for (; R !== null; ) {
                if (o = R, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, R = f;
                  break e;
                }
                R = o.return;
              }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          i = R;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null)
            h.return = i, R = h;
          else
            e:
              for (i = c; R !== null; ) {
                if (u = R, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fo(9, u);
                    }
                  } catch (k) {
                    ie(u, u.return, k);
                  }
                if (u === i) {
                  R = null;
                  break e;
                }
                var S = u.sibling;
                if (S !== null) {
                  S.return = u.return, R = S;
                  break e;
                }
                R = u.return;
              }
        }
        if (G = l, dn(), Vt && typeof Vt.onPostCommitFiberRoot == "function")
          try {
            Vt.onPostCommitFiberRoot(Ro, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      b = n, lt.transition = t;
    }
  }
  return !1;
}
function Ka(e, t, n) {
  t = nr(n, t), t = bd(e, t, 1), e = nn(e, t, 1), t = Re(), e !== null && (sl(e, 1, t), Be(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3)
    Ka(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ka(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
          e = nr(n, e), e = _d(t, e, 1), t = nn(t, e, 1), e = Re(), t !== null && (sl(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function cv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Re(), e.pingedLanes |= e.suspendedLanes & n, Ae === e && (Ve & n) === n && (he === 4 || he === 3 && (Ve & 130023424) === Ve && 500 > ue() - gs ? An(e, 0) : ms |= n), Be(e, t);
}
function yf(e, t) {
  t === 0 && (e.mode & 1 ? (t = El, El <<= 1, !(El & 130023424) && (El = 4194304)) : t = 1);
  var n = Re();
  e = It(e, t), e !== null && (sl(e, t, n), Be(e, n));
}
function dv(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), yf(e, n);
}
function fv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), yf(e, n);
}
var qf;
qf = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current)
      Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Pe = !1, $h(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else
    Pe = !1, ne && t.flags & 1048576 && wd(t, fo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Hl(e, t), e = t.pendingProps;
      var l = _n(t, Me.current);
      Hn(t, n), l = cs(null, t, r, e, l, n);
      var o = ds();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fe(r) ? (o = !0, ao(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, os(t), l.updater = Po, t.stateNode = l, l._reactInternals = t, cu(t, r, e, n), t = pu(null, t, r, !0, o, n)) : (t.tag = 0, ne && o && _u(t), De(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Hl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = hv(r), e = dt(r, e), l) {
          case 0:
            t = fu(null, t, r, e, n);
            break e;
          case 1:
            t = La(null, t, r, e, n);
            break e;
          case 11:
            t = Oa(null, t, r, e, n);
            break e;
          case 14:
            t = Ua(null, t, r, dt(r.type, e), n);
            break e;
        }
        throw Error(C(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), fu(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), La(e, t, r, l, n);
    case 3:
      e: {
        if (nf(t), e === null)
          throw Error(C(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Cd(e, t), vo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = nr(Error(C(423)), t), t = Pa(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = nr(Error(C(424)), t), t = Pa(e, t, r, n, l);
            break e;
          } else
            for (Ge = tn(t.stateNode.containerInfo.firstChild), Ke = t, ne = !0, pt = null, n = Dd(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if ($n(), r === l) {
            t = Ot(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Rd(t), e === null && uu(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, nu(r, l) ? i = null : o !== null && nu(r, o) && (t.flags |= 32), tf(e, t), De(e, t, i, n), t.child;
    case 6:
      return e === null && uu(t), null;
    case 13:
      return rf(e, t, n);
    case 4:
      return is(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = er(t, null, r, n) : De(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Oa(e, t, r, l, n);
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, $(po, r._currentValue), r._currentValue = i, o !== null)
          if (mt(o.value, i)) {
            if (o.children === l.children && !ze.current) {
              t = Ot(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = Dt(-1, n & -n), s.tag = 2;
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var v = a.pending;
                        v === null ? s.next = s : (s.next = v.next, v.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), su(
                      o.return,
                      n,
                      t
                    ), u.lanes |= n;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(C(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), su(i, n, t), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        De(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Hn(t, n), l = ot(l), r = r(l), t.flags |= 1, De(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = dt(r, t.pendingProps), l = dt(r.type, l), Ua(e, t, r, l, n);
    case 15:
      return $d(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Hl(e, t), t.tag = 1, Fe(r) ? (e = !0, ao(t)) : e = !1, Hn(t, n), Md(t, r, l), cu(t, r, l, n), pu(null, t, r, !0, e, n);
    case 19:
      return lf(e, t, n);
    case 22:
      return ef(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Sf(e, t) {
  return Kc(e, t);
}
function pv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function rt(e, t, n, r) {
  return new pv(e, t, n, r);
}
function Ss(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function hv(e) {
  if (typeof e == "function")
    return Ss(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Bu)
      return 11;
    if (e === Qu)
      return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function bl(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    Ss(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case In:
          return yn(n.children, l, o, t);
        case Fu:
          i = 8, l |= 8;
          break;
        case Oi:
          return e = rt(12, n, t, l | 2), e.elementType = Oi, e.lanes = o, e;
        case Ui:
          return e = rt(13, n, t, l), e.elementType = Ui, e.lanes = o, e;
        case Li:
          return e = rt(19, n, t, l), e.elementType = Li, e.lanes = o, e;
        case Nc:
          return Qo(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case xc:
                i = 10;
                break e;
              case Mc:
                i = 9;
                break e;
              case Bu:
                i = 11;
                break e;
              case Qu:
                i = 14;
                break e;
              case Wt:
                i = 16, r = null;
                break e;
            }
          throw Error(C(130, e == null ? e : typeof e, ""));
      }
  return t = rt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function yn(e, t, n, r) {
  return e = rt(7, e, r, t), e.lanes = n, e;
}
function Qo(e, t, n, r) {
  return e = rt(22, e, r, t), e.elementType = Nc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Vi(e, t, n) {
  return e = rt(6, e, null, t), e.lanes = n, e;
}
function ki(e, t, n) {
  return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function vv(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = li(0), this.expirationTimes = li(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = li(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function ws(e, t, n, r, l, o, i, u, s) {
  return e = new vv(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = rt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, os(o), e;
}
function mv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Tn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wf(e) {
  if (!e)
    return sn;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1)
      throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n))
      return qd(e, n, t);
  }
  return t;
}
function Vf(e, t, n, r, l, o, i, u, s) {
  return e = ws(n, r, !0, e, l, o, i, u, s), e.context = wf(null), n = e.current, r = Re(), l = ln(n), o = Dt(r, l), o.callback = t ?? null, nn(n, o, l), e.current.lanes = l, sl(e, l, r), Be(e, r), e;
}
function jo(e, t, n, r) {
  var l = t.current, o = Re(), i = ln(l);
  return n = wf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = nn(l, t, i), e !== null && (vt(e, l, i, o), Gl(e, l, i)), i;
}
function Vo(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ja(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vs(e, t) {
  Ja(e, t), (e = e.alternate) && Ja(e, t);
}
function gv() {
  return null;
}
var kf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ks(e) {
  this._internalRoot = e;
}
Zo.prototype.render = ks.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(C(409));
  jo(e, t, null, null);
};
Zo.prototype.unmount = ks.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    kn(function() {
      jo(null, e, null, null);
    }), t[Tt] = null;
  }
};
function Zo(e) {
  this._internalRoot = e;
}
Zo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = $c();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++)
      ;
    Jt.splice(n, 0, e), n === 0 && td(e);
  }
};
function Es(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Wo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ha() {
}
function Av(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = Vo(i);
        o.call(a);
      };
    }
    var i = Vf(t, r, e, 0, null, !1, !1, "", Ha);
    return e._reactRootContainer = i, e[Tt] = i.current, Xr(e.nodeType === 8 ? e.parentNode : e), kn(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = Vo(s);
      u.call(a);
    };
  }
  var s = ws(e, 0, !1, null, null, !1, !1, "", Ha);
  return e._reactRootContainer = s, e[Tt] = s.current, Xr(e.nodeType === 8 ? e.parentNode : e), kn(function() {
    jo(t, s, n, r);
  }), s;
}
function Go(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = Vo(i);
        u.call(s);
      };
    }
    jo(t, i, e, l);
  } else
    i = Av(n, t, e, l, r);
  return Vo(i);
}
bc = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cr(t.pendingLanes);
        n !== 0 && (Wu(t, n | 1), Be(t, ue()), !(G & 6) && (rr = ue() + 500, dn()));
      }
      break;
    case 13:
      kn(function() {
        var r = It(e, 1);
        if (r !== null) {
          var l = Re();
          vt(r, e, 1, l);
        }
      }), Vs(e, 1);
  }
};
Gu = function(e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Re();
      vt(t, e, 134217728, n);
    }
    Vs(e, 134217728);
  }
};
_c = function(e) {
  if (e.tag === 13) {
    var t = ln(e), n = It(e, t);
    if (n !== null) {
      var r = Re();
      vt(n, e, t, r);
    }
    Vs(e, t);
  }
};
$c = function() {
  return b;
};
ed = function(e, t) {
  var n = b;
  try {
    return b = e, t();
  } finally {
    b = n;
  }
};
Ki = function(e, t, n) {
  switch (t) {
    case "input":
      if (Fi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Uo(r);
            if (!l)
              throw Error(C(90));
            Rc(r), Fi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ic(e, n);
      break;
    case "select":
      t = n.value, t != null && Wn(e, !!n.multiple, t, !1);
  }
};
Bc = As;
Qc = kn;
var yv = { usingClientEntryPoint: !1, Events: [cl, Pn, Uo, zc, Fc, As] }, Vr = { findFiberByHostInstance: vn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, qv = { bundleType: Vr.bundleType, version: Vr.version, rendererPackageName: Vr.rendererPackageName, rendererConfig: Vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Wc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Vr.findFiberByHostInstance || gv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ll.isDisabled && Ll.supportsFiber)
    try {
      Ro = Ll.inject(qv), Vt = Ll;
    } catch {
    }
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yv;
He.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Es(t))
    throw Error(C(200));
  return mv(e, t, null, n);
};
He.createRoot = function(e, t) {
  if (!Es(e))
    throw Error(C(299));
  var n = !1, r = "", l = kf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ws(e, 1, !1, null, null, n, !1, r, l), e[Tt] = t.current, Xr(e.nodeType === 8 ? e.parentNode : e), new ks(t);
};
He.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = Wc(t), e = e === null ? null : e.stateNode, e;
};
He.flushSync = function(e) {
  return kn(e);
};
He.hydrate = function(e, t, n) {
  if (!Wo(t))
    throw Error(C(200));
  return Go(null, e, t, !0, n);
};
He.hydrateRoot = function(e, t, n) {
  if (!Es(e))
    throw Error(C(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = kf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Vf(t, null, e, 1, n ?? null, l, !1, o, i), e[Tt] = t.current, Xr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new Zo(t);
};
He.render = function(e, t, n) {
  if (!Wo(t))
    throw Error(C(200));
  return Go(null, e, t, !1, n);
};
He.unmountComponentAtNode = function(e) {
  if (!Wo(e))
    throw Error(C(40));
  return e._reactRootContainer ? (kn(function() {
    Go(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Tt] = null;
    });
  }), !0) : !1;
};
He.unstable_batchedUpdates = As;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Wo(n))
    throw Error(C(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(C(38));
  return Go(e, t, n, !1, r);
};
He.version = "18.2.0-next-9e3b772b8-20220608";
function Ef() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ef);
    } catch (e) {
      console.error(e);
    }
}
Ef(), wc.exports = He;
var Xt = wc.exports;
const Pl = /* @__PURE__ */ dc(Xt);
var Xa = Xt;
Ti.createRoot = Xa.createRoot, Ti.hydrateRoot = Xa.hydrateRoot;
function Eu() {
  return Eu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Eu.apply(this, arguments);
}
function Cf(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), l, o;
  for (o = 0; o < r.length; o++)
    l = r[o], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Cu(e, t) {
  return Cu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, l) {
    return r.__proto__ = l, r;
  }, Cu(e, t);
}
function Cs(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Cu(e, t);
}
function Sv(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function wv(e, t) {
  e.classList ? e.classList.add(t) : Sv(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function Ya(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Vv(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Ya(e.className, t) : e.setAttribute("class", Ya(e.className && e.className.baseVal || "", t));
}
const ba = {
  disabled: !1
}, xs = J.createContext(null);
var xf = function(t) {
  return t.scrollTop;
}, Mr = "unmounted", hn = "exited", nt = "entering", wt = "entered", ll = "exiting", Pt = /* @__PURE__ */ function(e) {
  Cs(t, e);
  function t(r, l) {
    var o;
    o = e.call(this, r, l) || this;
    var i = l, u = i && !i.isMounting ? r.enter : r.appear, s;
    return o.appearStatus = null, r.in ? u ? (s = hn, o.appearStatus = nt) : s = wt : r.unmountOnExit || r.mountOnEnter ? s = Mr : s = hn, o.state = {
      status: s
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(l, o) {
    var i = l.in;
    return i && o.status === Mr ? {
      status: hn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(l) {
    var o = null;
    if (l !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== nt && i !== wt && (o = nt) : (i === nt || i === wt) && (o = ll);
    }
    this.updateStatus(!1, o);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var l = this.props.timeout, o, i, u;
    return o = i = u = l, l != null && typeof l != "number" && (o = l.exit, i = l.enter, u = l.appear !== void 0 ? l.appear : i), {
      exit: o,
      enter: i,
      appear: u
    };
  }, n.updateStatus = function(l, o) {
    if (l === void 0 && (l = !1), o !== null)
      if (this.cancelNextCallback(), o === nt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : Pl.findDOMNode(this);
          i && xf(i);
        }
        this.performEnter(l);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === hn && this.setState({
        status: Mr
      });
  }, n.performEnter = function(l) {
    var o = this, i = this.props.enter, u = this.context ? this.context.isMounting : l, s = this.props.nodeRef ? [u] : [Pl.findDOMNode(this), u], a = s[0], v = s[1], p = this.getTimeouts(), g = u ? p.appear : p.enter;
    if (!l && !i || ba.disabled) {
      this.safeSetState({
        status: wt
      }, function() {
        o.props.onEntered(a);
      });
      return;
    }
    this.props.onEnter(a, v), this.safeSetState({
      status: nt
    }, function() {
      o.props.onEntering(a, v), o.onTransitionEnd(g, function() {
        o.safeSetState({
          status: wt
        }, function() {
          o.props.onEntered(a, v);
        });
      });
    });
  }, n.performExit = function() {
    var l = this, o = this.props.exit, i = this.getTimeouts(), u = this.props.nodeRef ? void 0 : Pl.findDOMNode(this);
    if (!o || ba.disabled) {
      this.safeSetState({
        status: hn
      }, function() {
        l.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: ll
    }, function() {
      l.props.onExiting(u), l.onTransitionEnd(i.exit, function() {
        l.safeSetState({
          status: hn
        }, function() {
          l.props.onExited(u);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(l, o) {
    o = this.setNextCallback(o), this.setState(l, o);
  }, n.setNextCallback = function(l) {
    var o = this, i = !0;
    return this.nextCallback = function(u) {
      i && (i = !1, o.nextCallback = null, l(u));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(l, o) {
    this.setNextCallback(o);
    var i = this.props.nodeRef ? this.props.nodeRef.current : Pl.findDOMNode(this), u = l == null && !this.props.addEndListener;
    if (!i || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], a = s[0], v = s[1];
      this.props.addEndListener(a, v);
    }
    l != null && setTimeout(this.nextCallback, l);
  }, n.render = function() {
    var l = this.state.status;
    if (l === Mr)
      return null;
    var o = this.props, i = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var u = Cf(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ J.createElement(xs.Provider, {
        value: null
      }, typeof i == "function" ? i(l, u) : J.cloneElement(J.Children.only(i), u))
    );
  }, t;
}(J.Component);
Pt.contextType = xs;
Pt.propTypes = {};
function Rn() {
}
Pt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Rn,
  onEntering: Rn,
  onEntered: Rn,
  onExit: Rn,
  onExiting: Rn,
  onExited: Rn
};
Pt.UNMOUNTED = Mr;
Pt.EXITED = hn;
Pt.ENTERING = nt;
Pt.ENTERED = wt;
Pt.EXITING = ll;
const kv = Pt;
var Ev = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return wv(t, r);
  });
}, Ei = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return Vv(t, r);
  });
}, Ms = /* @__PURE__ */ function(e) {
  Cs(t, e);
  function t() {
    for (var r, l = arguments.length, o = new Array(l), i = 0; i < l; i++)
      o[i] = arguments[i];
    return r = e.call.apply(e, [this].concat(o)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(u, s) {
      var a = r.resolveArguments(u, s), v = a[0], p = a[1];
      r.removeClasses(v, "exit"), r.addClass(v, p ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(u, s);
    }, r.onEntering = function(u, s) {
      var a = r.resolveArguments(u, s), v = a[0], p = a[1], g = p ? "appear" : "enter";
      r.addClass(v, g, "active"), r.props.onEntering && r.props.onEntering(u, s);
    }, r.onEntered = function(u, s) {
      var a = r.resolveArguments(u, s), v = a[0], p = a[1], g = p ? "appear" : "enter";
      r.removeClasses(v, g), r.addClass(v, g, "done"), r.props.onEntered && r.props.onEntered(u, s);
    }, r.onExit = function(u) {
      var s = r.resolveArguments(u), a = s[0];
      r.removeClasses(a, "appear"), r.removeClasses(a, "enter"), r.addClass(a, "exit", "base"), r.props.onExit && r.props.onExit(u);
    }, r.onExiting = function(u) {
      var s = r.resolveArguments(u), a = s[0];
      r.addClass(a, "exit", "active"), r.props.onExiting && r.props.onExiting(u);
    }, r.onExited = function(u) {
      var s = r.resolveArguments(u), a = s[0];
      r.removeClasses(a, "exit"), r.addClass(a, "exit", "done"), r.props.onExited && r.props.onExited(u);
    }, r.resolveArguments = function(u, s) {
      return r.props.nodeRef ? [r.props.nodeRef.current, u] : [u, s];
    }, r.getClassNames = function(u) {
      var s = r.props.classNames, a = typeof s == "string", v = a && s ? s + "-" : "", p = a ? "" + v + u : s[u], g = a ? p + "-active" : s[u + "Active"], y = a ? p + "-done" : s[u + "Done"];
      return {
        baseClassName: p,
        activeClassName: g,
        doneClassName: y
      };
    }, r;
  }
  var n = t.prototype;
  return n.addClass = function(l, o, i) {
    var u = this.getClassNames(o)[i + "ClassName"], s = this.getClassNames("enter"), a = s.doneClassName;
    o === "appear" && i === "done" && a && (u += " " + a), i === "active" && l && xf(l), u && (this.appliedClasses[o][i] = u, Ev(l, u));
  }, n.removeClasses = function(l, o) {
    var i = this.appliedClasses[o], u = i.base, s = i.active, a = i.done;
    this.appliedClasses[o] = {}, u && Ei(l, u), s && Ei(l, s), a && Ei(l, a);
  }, n.render = function() {
    var l = this.props;
    l.classNames;
    var o = Cf(l, ["classNames"]);
    return /* @__PURE__ */ J.createElement(kv, Eu({}, o, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(J.Component);
Ms.defaultProps = {
  classNames: ""
};
Ms.propTypes = {};
const Cv = Ms;
var zl, Fl;
function xv(e, t) {
  return !(e === t || J.isValidElement(e) && J.isValidElement(t) && e.key != null && e.key === t.key);
}
var lr = {
  out: "out-in",
  in: "in-out"
}, ko = function(t, n, r) {
  return function() {
    var l;
    t.props[n] && (l = t.props)[n].apply(l, arguments), r();
  };
}, Mv = (zl = {}, zl[lr.out] = function(e) {
  var t = e.current, n = e.changeState;
  return J.cloneElement(t, {
    in: !1,
    onExited: ko(t, "onExited", function() {
      n(nt, null);
    })
  });
}, zl[lr.in] = function(e) {
  var t = e.current, n = e.changeState, r = e.children;
  return [t, J.cloneElement(r, {
    in: !0,
    onEntered: ko(r, "onEntered", function() {
      n(nt);
    })
  })];
}, zl), Nv = (Fl = {}, Fl[lr.out] = function(e) {
  var t = e.children, n = e.changeState;
  return J.cloneElement(t, {
    in: !0,
    onEntered: ko(t, "onEntered", function() {
      n(wt, J.cloneElement(t, {
        in: !0
      }));
    })
  });
}, Fl[lr.in] = function(e) {
  var t = e.current, n = e.children, r = e.changeState;
  return [J.cloneElement(t, {
    in: !1,
    onExited: ko(t, "onExited", function() {
      r(wt, J.cloneElement(n, {
        in: !0
      }));
    })
  }), J.cloneElement(n, {
    in: !0
  })];
}, Fl), Ns = /* @__PURE__ */ function(e) {
  Cs(t, e);
  function t() {
    for (var r, l = arguments.length, o = new Array(l), i = 0; i < l; i++)
      o[i] = arguments[i];
    return r = e.call.apply(e, [this].concat(o)) || this, r.state = {
      status: wt,
      current: null
    }, r.appeared = !1, r.changeState = function(u, s) {
      s === void 0 && (s = r.state.current), r.setState({
        status: u,
        current: s
      });
    }, r;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.appeared = !0;
  }, t.getDerivedStateFromProps = function(l, o) {
    return l.children == null ? {
      current: null
    } : o.status === nt && l.mode === lr.in ? {
      status: nt
    } : o.current && xv(o.current, l.children) ? {
      status: ll
    } : {
      current: J.cloneElement(l.children, {
        in: !0
      })
    };
  }, n.render = function() {
    var l = this.props, o = l.children, i = l.mode, u = this.state, s = u.status, a = u.current, v = {
      children: o,
      current: a,
      changeState: this.changeState,
      status: s
    }, p;
    switch (s) {
      case nt:
        p = Nv[i](v);
        break;
      case ll:
        p = Mv[i](v);
        break;
      case wt:
        p = a;
    }
    return /* @__PURE__ */ J.createElement(xs.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, p);
  }, t;
}(J.Component);
Ns.propTypes = {};
Ns.defaultProps = {
  mode: lr.out
};
const Dv = Ns, Ko = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function sr(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Ds(e) {
  return "nodeType" in e;
}
function Qe(e) {
  var t, n;
  return e ? sr(e) ? e : Ds(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Rs(e) {
  const {
    Document: t
  } = Qe(e);
  return e instanceof t;
}
function fl(e) {
  return sr(e) ? !1 : e instanceof Qe(e).HTMLElement;
}
function Mf(e) {
  return e instanceof Qe(e).SVGElement;
}
function ar(e) {
  return e ? sr(e) ? e.document : Ds(e) ? Rs(e) ? e : fl(e) || Mf(e) ? e.ownerDocument : document : document : document;
}
const Ut = Ko ? q.useLayoutEffect : q.useEffect;
function Ts(e) {
  const t = q.useRef(e);
  return Ut(() => {
    t.current = e;
  }), q.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
      r[l] = arguments[l];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Rv() {
  const e = q.useRef(null), t = q.useCallback((r, l) => {
    e.current = setInterval(r, l);
  }, []), n = q.useCallback(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function ol(e, t) {
  t === void 0 && (t = [e]);
  const n = q.useRef(e);
  return Ut(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function pl(e, t) {
  const n = q.useRef();
  return q.useMemo(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Eo(e) {
  const t = Ts(e), n = q.useRef(null), r = q.useCallback(
    (l) => {
      l !== n.current && (t == null || t(l, n.current)), n.current = l;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function xu(e) {
  const t = q.useRef();
  return q.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let Ci = {};
function Jo(e, t) {
  return q.useMemo(() => {
    if (t)
      return t;
    const n = Ci[e] == null ? 0 : Ci[e] + 1;
    return Ci[e] = n, e + "-" + n;
  }, [e, t]);
}
function Nf(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return r.reduce((o, i) => {
      const u = Object.entries(i);
      for (const [s, a] of u) {
        const v = o[s];
        v != null && (o[s] = v + e * a);
      }
      return o;
    }, {
      ...t
    });
  };
}
const Yn = /* @__PURE__ */ Nf(1), Co = /* @__PURE__ */ Nf(-1);
function Tv(e) {
  return "clientX" in e && "clientY" in e;
}
function Df(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = Qe(e.target);
  return t && e instanceof t;
}
function Iv(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = Qe(e.target);
  return t && e instanceof t;
}
function Mu(e) {
  if (Iv(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return Tv(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const _a = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Ov(e) {
  return e.matches(_a) ? e : e.querySelector(_a);
}
const Uv = {
  display: "none"
};
function Lv(e) {
  let {
    id: t,
    value: n
  } = e;
  return J.createElement("div", {
    id: t,
    style: Uv
  }, n);
}
function Pv(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const l = {
    position: "fixed",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return J.createElement("div", {
    id: t,
    style: l,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function zv() {
  const [e, t] = q.useState("");
  return {
    announce: q.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const Rf = /* @__PURE__ */ q.createContext(null);
function Fv(e) {
  const t = q.useContext(Rf);
  q.useEffect(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Bv() {
  const [e] = q.useState(() => /* @__PURE__ */ new Set()), t = q.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [q.useCallback((r) => {
    let {
      type: l,
      event: o
    } = r;
    e.forEach((i) => {
      var u;
      return (u = i[l]) == null ? void 0 : u.call(i, o);
    });
  }, [e]), t];
}
const Qv = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, jv = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function Zv(e) {
  let {
    announcements: t = jv,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: l = Qv
  } = e;
  const {
    announce: o,
    announcement: i
  } = zv(), u = Jo("DndLiveRegion"), [s, a] = q.useState(!1);
  if (q.useEffect(() => {
    a(!0);
  }, []), Fv(q.useMemo(() => ({
    onDragStart(p) {
      let {
        active: g
      } = p;
      o(t.onDragStart({
        active: g
      }));
    },
    onDragMove(p) {
      let {
        active: g,
        over: y
      } = p;
      t.onDragMove && o(t.onDragMove({
        active: g,
        over: y
      }));
    },
    onDragOver(p) {
      let {
        active: g,
        over: y
      } = p;
      o(t.onDragOver({
        active: g,
        over: y
      }));
    },
    onDragEnd(p) {
      let {
        active: g,
        over: y
      } = p;
      o(t.onDragEnd({
        active: g,
        over: y
      }));
    },
    onDragCancel(p) {
      let {
        active: g,
        over: y
      } = p;
      o(t.onDragCancel({
        active: g,
        over: y
      }));
    }
  }), [o, t])), !s)
    return null;
  const v = J.createElement(J.Fragment, null, J.createElement(Lv, {
    id: r,
    value: l.draggable
  }), J.createElement(Pv, {
    id: u,
    announcement: i
  }));
  return n ? Xt.createPortal(v, n) : v;
}
var pe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(pe || (pe = {}));
function xo() {
}
function xi(e, t) {
  return q.useMemo(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Wv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return q.useMemo(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const gt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Gv(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function Kv(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
function Jv(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), l = Math.min(t.left + t.width, e.left + e.width), o = Math.min(t.top + t.height, e.top + e.height), i = l - r, u = o - n;
  if (r < l && n < o) {
    const s = t.width * t.height, a = e.width * e.height, v = i * u, p = v / (s + a - v);
    return Number(p.toFixed(4));
  }
  return 0;
}
const Hv = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const l = [];
  for (const o of r) {
    const {
      id: i
    } = o, u = n.get(i);
    if (u) {
      const s = Jv(u, t);
      s > 0 && l.push({
        id: i,
        data: {
          droppableContainer: o,
          value: s
        }
      });
    }
  }
  return l.sort(Gv);
};
function Xv(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Tf(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : gt;
}
function Yv(e) {
  return function(n) {
    for (var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      l[o - 1] = arguments[o];
    return l.reduce((i, u) => ({
      ...i,
      top: i.top + e * u.y,
      bottom: i.bottom + e * u.y,
      left: i.left + e * u.x,
      right: i.right + e * u.x
    }), {
      ...n
    });
  };
}
const bv = /* @__PURE__ */ Yv(1);
function _v(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function $v(e, t, n) {
  const r = _v(t);
  if (!r)
    return e;
  const {
    scaleX: l,
    scaleY: o,
    x: i,
    y: u
  } = r, s = e.left - i - (1 - l) * parseFloat(n), a = e.top - u - (1 - o) * parseFloat(n.slice(n.indexOf(" ") + 1)), v = l ? e.width / l : e.width, p = o ? e.height / o : e.height;
  return {
    width: v,
    height: p,
    top: a,
    right: s + v,
    bottom: a + p,
    left: s
  };
}
const em = {
  ignoreTransform: !1
};
function hl(e, t) {
  t === void 0 && (t = em);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: a,
      transformOrigin: v
    } = Qe(e).getComputedStyle(e);
    a && (n = $v(n, a, v));
  }
  const {
    top: r,
    left: l,
    width: o,
    height: i,
    bottom: u,
    right: s
  } = n;
  return {
    top: r,
    left: l,
    width: o,
    height: i,
    bottom: u,
    right: s
  };
}
function $a(e) {
  return hl(e, {
    ignoreTransform: !0
  });
}
function tm(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function nm(e, t) {
  return t === void 0 && (t = Qe(e).getComputedStyle(e)), t.position === "fixed";
}
function rm(e, t) {
  t === void 0 && (t = Qe(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((l) => {
    const o = t[l];
    return typeof o == "string" ? n.test(o) : !1;
  });
}
function Is(e, t) {
  const n = [];
  function r(l) {
    if (t != null && n.length >= t || !l)
      return n;
    if (Rs(l) && l.scrollingElement != null && !n.includes(l.scrollingElement))
      return n.push(l.scrollingElement), n;
    if (!fl(l) || Mf(l) || n.includes(l))
      return n;
    const o = Qe(e).getComputedStyle(l);
    return l !== e && rm(l, o) && n.push(l), nm(l, o) ? n : r(l.parentNode);
  }
  return e ? r(e) : n;
}
function If(e) {
  const [t] = Is(e, 1);
  return t ?? null;
}
function Mi(e) {
  return !Ko || !e ? null : sr(e) ? e : Ds(e) ? Rs(e) || e === ar(e).scrollingElement ? window : fl(e) ? e : null : null;
}
function Of(e) {
  return sr(e) ? e.scrollX : e.scrollLeft;
}
function Uf(e) {
  return sr(e) ? e.scrollY : e.scrollTop;
}
function Nu(e) {
  return {
    x: Of(e),
    y: Uf(e)
  };
}
var ge;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(ge || (ge = {}));
function Lf(e) {
  return !Ko || !e ? !1 : e === document.scrollingElement;
}
function Pf(e) {
  const t = {
    x: 0,
    y: 0
  }, n = Lf(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, l = e.scrollTop <= t.y, o = e.scrollLeft <= t.x, i = e.scrollTop >= r.y, u = e.scrollLeft >= r.x;
  return {
    isTop: l,
    isLeft: o,
    isBottom: i,
    isRight: u,
    maxScroll: r,
    minScroll: t
  };
}
const lm = {
  x: 0.2,
  y: 0.2
};
function om(e, t, n, r, l) {
  let {
    top: o,
    left: i,
    right: u,
    bottom: s
  } = n;
  r === void 0 && (r = 10), l === void 0 && (l = lm);
  const {
    isTop: a,
    isBottom: v,
    isLeft: p,
    isRight: g
  } = Pf(e), y = {
    x: 0,
    y: 0
  }, w = {
    x: 0,
    y: 0
  }, A = {
    height: t.height * l.y,
    width: t.width * l.x
  };
  return !a && o <= t.top + A.height ? (y.y = ge.Backward, w.y = r * Math.abs((t.top + A.height - o) / A.height)) : !v && s >= t.bottom - A.height && (y.y = ge.Forward, w.y = r * Math.abs((t.bottom - A.height - s) / A.height)), !g && u >= t.right - A.width ? (y.x = ge.Forward, w.x = r * Math.abs((t.right - A.width - u) / A.width)) : !p && i <= t.left + A.width && (y.x = ge.Backward, w.x = r * Math.abs((t.left + A.width - i) / A.width)), {
    direction: y,
    speed: w
  };
}
function im(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: o,
      innerHeight: i
    } = window;
    return {
      top: 0,
      left: 0,
      right: o,
      bottom: i,
      width: o,
      height: i
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: l
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: l,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function zf(e) {
  return e.reduce((t, n) => Yn(t, Nu(n)), gt);
}
function um(e) {
  return e.reduce((t, n) => t + Of(n), 0);
}
function sm(e) {
  return e.reduce((t, n) => t + Uf(n), 0);
}
function am(e, t) {
  if (t === void 0 && (t = hl), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: l,
    right: o
  } = t(e);
  If(e) && (l <= 0 || o <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const cm = [["x", ["left", "right"], um], ["y", ["top", "bottom"], sm]];
class Os {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Is(n), l = zf(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [o, i, u] of cm)
      for (const s of i)
        Object.defineProperty(this, s, {
          get: () => {
            const a = u(r), v = l[o] - a;
            return this.rect[s] + v;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class zr {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var l;
    (l = this.target) == null || l.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function dm(e) {
  const {
    EventTarget: t
  } = Qe(e);
  return e instanceof t ? e : ar(e);
}
function Ni(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var $e;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})($e || ($e = {}));
function ec(e) {
  e.preventDefault();
}
function fm(e) {
  e.stopPropagation();
}
var _;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(_ || (_ = {}));
const Ff = {
  start: [_.Space, _.Enter],
  cancel: [_.Esc],
  end: [_.Space, _.Enter]
}, pm = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case _.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case _.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case _.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case _.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class Us {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new zr(ar(n)), this.windowListeners = new zr(Qe(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add($e.Resize, this.handleCancel), this.windowListeners.add($e.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add($e.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && am(r), n(gt);
  }
  handleKeyDown(t) {
    if (Df(t)) {
      const {
        active: n,
        context: r,
        options: l
      } = this.props, {
        keyboardCodes: o = Ff,
        coordinateGetter: i = pm,
        scrollBehavior: u = "smooth"
      } = l, {
        code: s
      } = t;
      if (o.end.includes(s)) {
        this.handleEnd(t);
        return;
      }
      if (o.cancel.includes(s)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: a
      } = r.current, v = a ? {
        x: a.left,
        y: a.top
      } : gt;
      this.referenceCoordinates || (this.referenceCoordinates = v);
      const p = i(t, {
        active: n,
        context: r.current,
        currentCoordinates: v
      });
      if (p) {
        const g = Co(p, v), y = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: w
        } = r.current;
        for (const A of w) {
          const V = t.code, {
            isTop: f,
            isRight: c,
            isLeft: h,
            isBottom: S,
            maxScroll: k,
            minScroll: M
          } = Pf(A), E = im(A), x = {
            x: Math.min(V === _.Right ? E.right - E.width / 2 : E.right, Math.max(V === _.Right ? E.left : E.left + E.width / 2, p.x)),
            y: Math.min(V === _.Down ? E.bottom - E.height / 2 : E.bottom, Math.max(V === _.Down ? E.top : E.top + E.height / 2, p.y))
          }, F = V === _.Right && !c || V === _.Left && !h, U = V === _.Down && !S || V === _.Up && !f;
          if (F && x.x !== p.x) {
            const K = A.scrollLeft + g.x, ye = V === _.Right && K <= k.x || V === _.Left && K >= M.x;
            if (ye && !g.y) {
              A.scrollTo({
                left: K,
                behavior: u
              });
              return;
            }
            ye ? y.x = A.scrollLeft - K : y.x = V === _.Right ? A.scrollLeft - k.x : A.scrollLeft - M.x, y.x && A.scrollBy({
              left: -y.x,
              behavior: u
            });
            break;
          } else if (U && x.y !== p.y) {
            const K = A.scrollTop + g.y, ye = V === _.Down && K <= k.y || V === _.Up && K >= M.y;
            if (ye && !g.x) {
              A.scrollTo({
                top: K,
                behavior: u
              });
              return;
            }
            ye ? y.y = A.scrollTop - K : y.y = V === _.Down ? A.scrollTop - k.y : A.scrollTop - M.y, y.y && A.scrollBy({
              top: -y.y,
              behavior: u
            });
            break;
          }
        }
        this.handleMove(t, Yn(Co(p, this.referenceCoordinates), y));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Us.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = Ff,
      onActivation: l
    } = t, {
      active: o
    } = n;
    const {
      code: i
    } = e.nativeEvent;
    if (r.start.includes(i)) {
      const u = o.activatorNode.current;
      return u && e.target !== u ? !1 : (e.preventDefault(), l == null || l({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function tc(e) {
  return !!(e && "distance" in e);
}
function nc(e) {
  return !!(e && "delay" in e);
}
class Ls {
  constructor(t, n, r) {
    var l;
    r === void 0 && (r = dm(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: o
    } = t, {
      target: i
    } = o;
    this.props = t, this.events = n, this.document = ar(i), this.documentListeners = new zr(this.document), this.listeners = new zr(r), this.windowListeners = new zr(Qe(i)), this.initialCoordinates = (l = Mu(o)) != null ? l : gt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add($e.Resize, this.handleCancel), this.windowListeners.add($e.DragStart, ec), this.windowListeners.add($e.VisibilityChange, this.handleCancel), this.windowListeners.add($e.ContextMenu, ec), this.documentListeners.add($e.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (nc(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay);
        return;
      }
      if (tc(n))
        return;
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add($e.Click, fm, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add($e.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: l,
      props: o
    } = this, {
      onMove: i,
      options: {
        activationConstraint: u
      }
    } = o;
    if (!l)
      return;
    const s = (n = Mu(t)) != null ? n : gt, a = Co(l, s);
    if (!r && u) {
      if (tc(u)) {
        if (u.tolerance != null && Ni(a, u.tolerance))
          return this.handleCancel();
        if (Ni(a, u.distance))
          return this.handleStart();
      }
      return nc(u) && Ni(a, u.tolerance) ? this.handleCancel() : void 0;
    }
    t.cancelable && t.preventDefault(), i(s);
  }
  handleEnd() {
    const {
      onEnd: t
    } = this.props;
    this.detach(), t();
  }
  handleCancel() {
    const {
      onCancel: t
    } = this.props;
    this.detach(), t();
  }
  handleKeydown(t) {
    t.code === _.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const hm = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Bf extends Ls {
  constructor(t) {
    const {
      event: n
    } = t, r = ar(n.target);
    super(t, hm, r);
  }
}
Bf.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const vm = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Du;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Du || (Du = {}));
class Qf extends Ls {
  constructor(t) {
    super(t, vm, ar(t.event.target));
  }
}
Qf.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Du.RightClick ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
const Di = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class jf extends Ls {
  constructor(t) {
    super(t, Di);
  }
  static setup() {
    return window.addEventListener(Di.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Di.move.name, t);
    };
    function t() {
    }
  }
}
jf.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: l
    } = n;
    return l.length > 1 ? !1 : (r == null || r({
      event: n
    }), !0);
  }
}];
var Fr;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Fr || (Fr = {}));
var Mo;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Mo || (Mo = {}));
function mm(e) {
  let {
    acceleration: t,
    activator: n = Fr.Pointer,
    canScroll: r,
    draggingRect: l,
    enabled: o,
    interval: i = 5,
    order: u = Mo.TreeOrder,
    pointerCoordinates: s,
    scrollableAncestors: a,
    scrollableAncestorRects: v,
    delta: p,
    threshold: g
  } = e;
  const y = Am({
    delta: p,
    disabled: !o
  }), [w, A] = Rv(), V = q.useRef({
    x: 0,
    y: 0
  }), f = q.useRef({
    x: 0,
    y: 0
  }), c = q.useMemo(() => {
    switch (n) {
      case Fr.Pointer:
        return s ? {
          top: s.y,
          bottom: s.y,
          left: s.x,
          right: s.x
        } : null;
      case Fr.DraggableRect:
        return l;
    }
  }, [n, l, s]), h = q.useRef(null), S = q.useCallback(() => {
    const M = h.current;
    if (!M)
      return;
    const E = V.current.x * f.current.x, x = V.current.y * f.current.y;
    M.scrollBy(E, x);
  }, []), k = q.useMemo(() => u === Mo.TreeOrder ? [...a].reverse() : a, [u, a]);
  q.useEffect(
    () => {
      if (!o || !a.length || !c) {
        A();
        return;
      }
      for (const M of k) {
        if ((r == null ? void 0 : r(M)) === !1)
          continue;
        const E = a.indexOf(M), x = v[E];
        if (!x)
          continue;
        const {
          direction: F,
          speed: U
        } = om(M, x, c, t, g);
        for (const K of ["x", "y"])
          y[K][F[K]] || (U[K] = 0, F[K] = 0);
        if (U.x > 0 || U.y > 0) {
          A(), h.current = M, w(S, i), V.current = U, f.current = F;
          return;
        }
      }
      V.current = {
        x: 0,
        y: 0
      }, f.current = {
        x: 0,
        y: 0
      }, A();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      S,
      r,
      A,
      o,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(c),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(y),
      w,
      a,
      k,
      v,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(g)
    ]
  );
}
const gm = {
  x: {
    [ge.Backward]: !1,
    [ge.Forward]: !1
  },
  y: {
    [ge.Backward]: !1,
    [ge.Forward]: !1
  }
};
function Am(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = xu(t);
  return pl((l) => {
    if (n || !r || !l)
      return gm;
    const o = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [ge.Backward]: l.x[ge.Backward] || o.x === -1,
        [ge.Forward]: l.x[ge.Forward] || o.x === 1
      },
      y: {
        [ge.Backward]: l.y[ge.Backward] || o.y === -1,
        [ge.Forward]: l.y[ge.Forward] || o.y === 1
      }
    };
  }, [n, t, r]);
}
function ym(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return pl((l) => {
    var o;
    return t === null ? null : (o = r ?? l) != null ? o : null;
  }, [r, t]);
}
function qm(e, t) {
  return q.useMemo(() => e.reduce((n, r) => {
    const {
      sensor: l
    } = r, o = l.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, r)
    }));
    return [...n, ...o];
  }, []), [e, t]);
}
var il;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(il || (il = {}));
var Ru;
(function(e) {
  e.Optimized = "optimized";
})(Ru || (Ru = {}));
const rc = /* @__PURE__ */ new Map();
function Sm(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: l
  } = t;
  const [o, i] = q.useState(null), {
    frequency: u,
    measure: s,
    strategy: a
  } = l, v = q.useRef(e), p = V(), g = ol(p), y = q.useCallback(function(f) {
    f === void 0 && (f = []), !g.current && i((c) => c === null ? f : c.concat(f.filter((h) => !c.includes(h))));
  }, [g]), w = q.useRef(null), A = pl((f) => {
    if (p && !n)
      return rc;
    if (!f || f === rc || v.current !== e || o != null) {
      const c = /* @__PURE__ */ new Map();
      for (let h of e) {
        if (!h)
          continue;
        if (o && o.length > 0 && !o.includes(h.id) && h.rect.current) {
          c.set(h.id, h.rect.current);
          continue;
        }
        const S = h.node.current, k = S ? new Os(s(S), S) : null;
        h.rect.current = k, k && c.set(h.id, k);
      }
      return c;
    }
    return f;
  }, [e, o, n, p, s]);
  return q.useEffect(() => {
    v.current = e;
  }, [e]), q.useEffect(
    () => {
      p || y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, p]
  ), q.useEffect(
    () => {
      o && o.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(o)]
  ), q.useEffect(
    () => {
      p || typeof u != "number" || w.current !== null || (w.current = setTimeout(() => {
        y(), w.current = null;
      }, u));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, p, y, ...r]
  ), {
    droppableRects: A,
    measureDroppableContainers: y,
    measuringScheduled: o != null
  };
  function V() {
    switch (a) {
      case il.Always:
        return !1;
      case il.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Zf(e, t) {
  return pl((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function wm(e, t) {
  return Zf(e, t);
}
function Vm(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Ts(t), l = q.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: o
    } = window;
    return new o(r);
  }, [r, n]);
  return q.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function Ho(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Ts(t), l = q.useMemo(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: o
      } = window;
      return new o(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return q.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function km(e) {
  return new Os(hl(e), e);
}
function lc(e, t, n) {
  t === void 0 && (t = km);
  const [r, l] = q.useReducer(u, null), o = Vm({
    callback(s) {
      if (e)
        for (const a of s) {
          const {
            type: v,
            target: p
          } = a;
          if (v === "childList" && p instanceof HTMLElement && p.contains(e)) {
            l();
            break;
          }
        }
    }
  }), i = Ho({
    callback: l
  });
  return Ut(() => {
    l(), e ? (i == null || i.observe(e), o == null || o.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (i == null || i.disconnect(), o == null || o.disconnect());
  }, [e]), r;
  function u(s) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var a;
      return (a = s ?? n) != null ? a : null;
    }
    const v = t(e);
    return JSON.stringify(s) === JSON.stringify(v) ? s : v;
  }
}
function Em(e) {
  const t = Zf(e);
  return Tf(e, t);
}
const oc = [];
function Cm(e) {
  const t = q.useRef(e), n = pl((r) => e ? r && r !== oc && e && t.current && e.parentNode === t.current.parentNode ? r : Is(e) : oc, [e]);
  return q.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function xm(e) {
  const [t, n] = q.useState(null), r = q.useRef(e), l = q.useCallback((o) => {
    const i = Mi(o.target);
    i && n((u) => u ? (u.set(i, Nu(i)), new Map(u)) : null);
  }, []);
  return q.useEffect(() => {
    const o = r.current;
    if (e !== o) {
      i(o);
      const u = e.map((s) => {
        const a = Mi(s);
        return a ? (a.addEventListener("scroll", l, {
          passive: !0
        }), [a, Nu(a)]) : null;
      }).filter((s) => s != null);
      n(u.length ? new Map(u) : null), r.current = e;
    }
    return () => {
      i(e), i(o);
    };
    function i(u) {
      u.forEach((s) => {
        const a = Mi(s);
        a == null || a.removeEventListener("scroll", l);
      });
    }
  }, [l, e]), q.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((o, i) => Yn(o, i), gt) : zf(e) : gt, [e, t]);
}
function ic(e, t) {
  t === void 0 && (t = []);
  const n = q.useRef(null);
  return q.useEffect(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), q.useEffect(() => {
    const r = e !== gt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Co(e, n.current) : gt;
}
function Mm(e) {
  q.useEffect(
    () => {
      if (!Ko)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n == null || n();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function Nm(e, t) {
  return q.useMemo(() => e.reduce((n, r) => {
    let {
      eventName: l,
      handler: o
    } = r;
    return n[l] = (i) => {
      o(i, t);
    }, n;
  }, {}), [e, t]);
}
function Wf(e) {
  return q.useMemo(() => e ? tm(e) : null, [e]);
}
const Ri = [];
function Dm(e, t) {
  t === void 0 && (t = hl);
  const [n] = e, r = Wf(n ? Qe(n) : null), [l, o] = q.useReducer(u, Ri), i = Ho({
    callback: o
  });
  return e.length > 0 && l === Ri && o(), Ut(() => {
    e.length ? e.forEach((s) => i == null ? void 0 : i.observe(s)) : (i == null || i.disconnect(), o());
  }, [e]), l;
  function u() {
    return e.length ? e.map((s) => Lf(s) ? r : new Os(t(s), s)) : Ri;
  }
}
function Rm(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return fl(t) ? t : e;
}
function Tm(e) {
  let {
    measure: t
  } = e;
  const [n, r] = q.useState(null), l = q.useCallback((a) => {
    for (const {
      target: v
    } of a)
      if (fl(v)) {
        r((p) => {
          const g = t(v);
          return p ? {
            ...p,
            width: g.width,
            height: g.height
          } : g;
        });
        break;
      }
  }, [t]), o = Ho({
    callback: l
  }), i = q.useCallback((a) => {
    const v = Rm(a);
    o == null || o.disconnect(), v && (o == null || o.observe(v)), r(v ? t(v) : null);
  }, [t, o]), [u, s] = Eo(i);
  return q.useMemo(() => ({
    nodeRef: u,
    rect: n,
    setRef: s
  }), [n, u, s]);
}
const Im = [{
  sensor: Bf,
  options: {}
}, {
  sensor: Us,
  options: {}
}], Om = {
  current: {}
}, _l = {
  draggable: {
    measure: $a
  },
  droppable: {
    measure: $a,
    strategy: il.WhileDragging,
    frequency: Ru.Optimized
  },
  dragOverlay: {
    measure: hl
  }
};
class Br extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const Um = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Br(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: xo
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: _l,
  measureDroppableContainers: xo,
  windowRect: null,
  measuringScheduled: !1
}, Lm = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: xo,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: xo
}, Xo = /* @__PURE__ */ q.createContext(Lm), Pm = /* @__PURE__ */ q.createContext(Um);
function zm() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Br()
    }
  };
}
function Fm(e, t) {
  switch (t.type) {
    case pe.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case pe.DragMove:
      return e.draggable.active ? {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      } : e;
    case pe.DragEnd:
    case pe.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case pe.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, l = new Br(e.droppable.containers);
      return l.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: l
        }
      };
    }
    case pe.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: l
      } = t, o = e.droppable.containers.get(n);
      if (!o || r !== o.key)
        return e;
      const i = new Br(e.droppable.containers);
      return i.set(n, {
        ...o,
        disabled: l
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    case pe.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, l = e.droppable.containers.get(n);
      if (!l || r !== l.key)
        return e;
      const o = new Br(e.droppable.containers);
      return o.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    default:
      return e;
  }
}
function Bm(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: l
  } = q.useContext(Xo), o = xu(r), i = xu(n == null ? void 0 : n.id);
  return q.useEffect(() => {
    if (!t && !r && o && i != null) {
      if (!Df(o) || document.activeElement === o.target)
        return;
      const u = l.get(i);
      if (!u)
        return;
      const {
        activatorNode: s,
        node: a
      } = u;
      if (!s.current && !a.current)
        return;
      requestAnimationFrame(() => {
        for (const v of [s.current, a.current]) {
          if (!v)
            continue;
          const p = Ov(v);
          if (p) {
            p.focus();
            break;
          }
        }
      });
    }
  }, [r, t, l, i, o]), null;
}
function Qm(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((l, o) => o({
    transform: l,
    ...r
  }), n) : n;
}
function jm(e) {
  return q.useMemo(
    () => ({
      draggable: {
        ..._l.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ..._l.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ..._l.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function Zm(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: l = !0
  } = e;
  const o = q.useRef(!1), {
    x: i,
    y: u
  } = typeof l == "boolean" ? {
    x: l,
    y: l
  } : l;
  Ut(() => {
    if (!i && !u || !t) {
      o.current = !1;
      return;
    }
    if (o.current || !r)
      return;
    const a = t == null ? void 0 : t.node.current;
    if (!a || a.isConnected === !1)
      return;
    const v = n(a), p = Tf(v, r);
    if (i || (p.x = 0), u || (p.y = 0), o.current = !0, Math.abs(p.x) > 0 || Math.abs(p.y) > 0) {
      const g = If(a);
      g && g.scrollBy({
        top: p.y,
        left: p.x
      });
    }
  }, [t, i, u, r, n]);
}
const Gf = /* @__PURE__ */ q.createContext({
  ...gt,
  scaleX: 1,
  scaleY: 1
});
var Kt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Kt || (Kt = {}));
const Wm = /* @__PURE__ */ q.memo(function(t) {
  var n, r, l, o;
  let {
    id: i,
    accessibility: u,
    autoScroll: s = !0,
    children: a,
    sensors: v = Im,
    collisionDetection: p = Hv,
    measuring: g,
    modifiers: y,
    ...w
  } = t;
  const A = q.useReducer(Fm, void 0, zm), [V, f] = A, [c, h] = Bv(), [S, k] = q.useState(Kt.Uninitialized), M = S === Kt.Initialized, {
    draggable: {
      active: E,
      nodes: x,
      translate: F
    },
    droppable: {
      containers: U
    }
  } = V, K = E ? x.get(E) : null, ye = q.useRef({
    initial: null,
    translated: null
  }), qe = q.useMemo(() => {
    var Se;
    return E != null ? {
      id: E,
      // It's possible for the active node to unmount while dragging
      data: (Se = K == null ? void 0 : K.data) != null ? Se : Om,
      rect: ye
    } : null;
  }, [E, K]), Oe = q.useRef(null), [zt, Et] = q.useState(null), [Ne, D] = q.useState(null), P = ol(w, Object.values(w)), m = Jo("DndDescribedBy", i), d = q.useMemo(() => U.getEnabled(), [U]), N = jm(g), {
    droppableRects: T,
    measureDroppableContainers: L,
    measuringScheduled: z
  } = Sm(d, {
    dragging: M,
    dependencies: [F.x, F.y],
    config: N.droppable
  }), I = ym(x, E), O = q.useMemo(() => Ne ? Mu(Ne) : null, [Ne]), j = Yf(), X = wm(I, N.draggable.measure);
  Zm({
    activeNode: E ? x.get(E) : null,
    config: j.layoutShiftCompensation,
    initialRect: X,
    measure: N.draggable.measure
  });
  const W = lc(I, N.draggable.measure, X), Y = lc(I ? I.parentElement : null), H = q.useRef({
    activatorEvent: null,
    active: null,
    activeNode: I,
    collisionRect: null,
    collisions: null,
    droppableRects: T,
    draggableNodes: x,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: U,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), se = U.getNodeFor((n = H.current.over) == null ? void 0 : n.id), Q = Tm({
    measure: N.dragOverlay.measure
  }), ce = (r = Q.nodeRef.current) != null ? r : I, ve = M ? (l = Q.rect) != null ? l : W : null, Ue = !!(Q.nodeRef.current && Q.rect), Ye = Em(Ue ? null : W), ut = Wf(ce ? Qe(ce) : null), de = Cm(M ? se ?? I : null), xn = Dm(de), Mn = Qm(y, {
    transform: {
      x: F.x - Ye.x,
      y: F.y - Ye.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: Ne,
    active: qe,
    activeNodeRect: W,
    containerNodeRect: Y,
    draggingNodeRect: ve,
    over: H.current.over,
    overlayNodeRect: Q.rect,
    scrollableAncestors: de,
    scrollableAncestorRects: xn,
    windowRect: ut
  }), vl = O ? Yn(O, F) : null, cr = xm(de), Yo = ic(cr), ml = ic(cr, [W]), Ft = Yn(Mn, Yo), Bt = ve ? bv(ve, Mn) : null, Qt = qe && Bt ? p({
    active: qe,
    collisionRect: Bt,
    droppableRects: T,
    droppableContainers: d,
    pointerCoordinates: vl
  }) : null, dr = Kv(Qt, "id"), [be, gl] = q.useState(null), bo = Ue ? Mn : Yn(Mn, ml), Kf = Xv(bo, (o = be == null ? void 0 : be.rect) != null ? o : null, W), zs = q.useCallback(
    (Se, je) => {
      let {
        sensor: Ze,
        options: jt
      } = je;
      if (Oe.current == null)
        return;
      const _e = x.get(Oe.current);
      if (!_e)
        return;
      const st = Se.nativeEvent, At = new Ze({
        active: Oe.current,
        activeNode: _e,
        event: st,
        options: jt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: H,
        onStart(at) {
          const fr = Oe.current;
          if (fr == null)
            return;
          const pr = x.get(fr);
          if (!pr)
            return;
          const {
            onDragStart: Al
          } = P.current, yl = {
            active: {
              id: fr,
              data: pr.data,
              rect: ye
            }
          };
          Xt.unstable_batchedUpdates(() => {
            Al == null || Al(yl), k(Kt.Initializing), f({
              type: pe.DragStart,
              initialCoordinates: at,
              active: fr
            }), c({
              type: "onDragStart",
              event: yl
            });
          });
        },
        onMove(at) {
          f({
            type: pe.DragMove,
            coordinates: at
          });
        },
        onEnd: Nn(pe.DragEnd),
        onCancel: Nn(pe.DragCancel)
      });
      Xt.unstable_batchedUpdates(() => {
        Et(At), D(Se.nativeEvent);
      });
      function Nn(at) {
        return async function() {
          const {
            active: pr,
            collisions: Al,
            over: yl,
            scrollAdjustedTranslate: Bs
          } = H.current;
          let hr = null;
          if (pr && Bs) {
            const {
              cancelDrop: vr
            } = P.current;
            hr = {
              activatorEvent: st,
              active: pr,
              collisions: Al,
              delta: Bs,
              over: yl
            }, at === pe.DragEnd && typeof vr == "function" && await Promise.resolve(vr(hr)) && (at = pe.DragCancel);
          }
          Oe.current = null, Xt.unstable_batchedUpdates(() => {
            f({
              type: at
            }), k(Kt.Uninitialized), gl(null), Et(null), D(null);
            const vr = at === pe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (hr) {
              const _o = P.current[vr];
              _o == null || _o(hr), c({
                type: vr,
                event: hr
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [x]
  ), Jf = q.useCallback((Se, je) => (Ze, jt) => {
    const _e = Ze.nativeEvent, st = x.get(jt);
    if (
      // Another sensor is already instantiating
      Oe.current !== null || // No active draggable
      !st || // Event has already been captured
      _e.dndKit || _e.defaultPrevented
    )
      return;
    const At = {
      active: st
    };
    Se(Ze, je.options, At) === !0 && (_e.dndKit = {
      capturedBy: je.sensor
    }, Oe.current = jt, zs(Ze, je));
  }, [x, zs]), Fs = qm(v, Jf);
  Mm(v), Ut(() => {
    W && S === Kt.Initializing && k(Kt.Initialized);
  }, [W, S]), q.useEffect(
    () => {
      const {
        onDragMove: Se
      } = P.current, {
        active: je,
        activatorEvent: Ze,
        collisions: jt,
        over: _e
      } = H.current;
      if (!je || !Ze)
        return;
      const st = {
        active: je,
        activatorEvent: Ze,
        collisions: jt,
        delta: {
          x: Ft.x,
          y: Ft.y
        },
        over: _e
      };
      Xt.unstable_batchedUpdates(() => {
        Se == null || Se(st), c({
          type: "onDragMove",
          event: st
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ft.x, Ft.y]
  ), q.useEffect(
    () => {
      const {
        active: Se,
        activatorEvent: je,
        collisions: Ze,
        droppableContainers: jt,
        scrollAdjustedTranslate: _e
      } = H.current;
      if (!Se || Oe.current == null || !je || !_e)
        return;
      const {
        onDragOver: st
      } = P.current, At = jt.get(dr), Nn = At && At.rect.current ? {
        id: At.id,
        rect: At.rect.current,
        data: At.data,
        disabled: At.disabled
      } : null, at = {
        active: Se,
        activatorEvent: je,
        collisions: Ze,
        delta: {
          x: _e.x,
          y: _e.y
        },
        over: Nn
      };
      Xt.unstable_batchedUpdates(() => {
        gl(Nn), st == null || st(at), c({
          type: "onDragOver",
          event: at
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dr]
  ), Ut(() => {
    H.current = {
      activatorEvent: Ne,
      active: qe,
      activeNode: I,
      collisionRect: Bt,
      collisions: Qt,
      droppableRects: T,
      draggableNodes: x,
      draggingNode: ce,
      draggingNodeRect: ve,
      droppableContainers: U,
      over: be,
      scrollableAncestors: de,
      scrollAdjustedTranslate: Ft
    }, ye.current = {
      initial: ve,
      translated: Bt
    };
  }, [qe, I, Qt, Bt, x, ce, ve, T, U, be, de, Ft]), mm({
    ...j,
    delta: F,
    draggingRect: Bt,
    pointerCoordinates: vl,
    scrollableAncestors: de,
    scrollableAncestorRects: xn
  });
  const Hf = q.useMemo(() => ({
    active: qe,
    activeNode: I,
    activeNodeRect: W,
    activatorEvent: Ne,
    collisions: Qt,
    containerNodeRect: Y,
    dragOverlay: Q,
    draggableNodes: x,
    droppableContainers: U,
    droppableRects: T,
    over: be,
    measureDroppableContainers: L,
    scrollableAncestors: de,
    scrollableAncestorRects: xn,
    measuringConfiguration: N,
    measuringScheduled: z,
    windowRect: ut
  }), [qe, I, W, Ne, Qt, Y, Q, x, U, T, be, L, de, xn, N, z, ut]), Xf = q.useMemo(() => ({
    activatorEvent: Ne,
    activators: Fs,
    active: qe,
    activeNodeRect: W,
    ariaDescribedById: {
      draggable: m
    },
    dispatch: f,
    draggableNodes: x,
    over: be,
    measureDroppableContainers: L
  }), [Ne, Fs, qe, W, f, m, x, be, L]);
  return J.createElement(Rf.Provider, {
    value: h
  }, J.createElement(Xo.Provider, {
    value: Xf
  }, J.createElement(Pm.Provider, {
    value: Hf
  }, J.createElement(Gf.Provider, {
    value: Kf
  }, a)), J.createElement(Bm, {
    disabled: (u == null ? void 0 : u.restoreFocus) === !1
  })), J.createElement(Zv, {
    ...u,
    hiddenTextDescribedById: m
  }));
  function Yf() {
    const Se = (zt == null ? void 0 : zt.autoScrollEnabled) === !1, je = typeof s == "object" ? s.enabled === !1 : s === !1, Ze = M && !Se && !je;
    return typeof s == "object" ? {
      ...s,
      enabled: Ze
    } : {
      enabled: Ze
    };
  }
}), Gm = /* @__PURE__ */ q.createContext(null), uc = "button", Km = "Droppable";
function Jm(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: l
  } = e;
  const o = Jo(Km), {
    activators: i,
    activatorEvent: u,
    active: s,
    activeNodeRect: a,
    ariaDescribedById: v,
    draggableNodes: p,
    over: g
  } = q.useContext(Xo), {
    role: y = uc,
    roleDescription: w = "draggable",
    tabIndex: A = 0
  } = l ?? {}, V = (s == null ? void 0 : s.id) === t, f = q.useContext(V ? Gf : Gm), [c, h] = Eo(), [S, k] = Eo(), M = Nm(i, t), E = ol(n);
  Ut(
    () => (p.set(t, {
      id: t,
      key: o,
      node: c,
      activatorNode: S,
      data: E
    }), () => {
      const F = p.get(t);
      F && F.key === o && p.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p, t]
  );
  const x = q.useMemo(() => ({
    role: y,
    tabIndex: A,
    "aria-disabled": r,
    "aria-pressed": V && y === uc ? !0 : void 0,
    "aria-roledescription": w,
    "aria-describedby": v.draggable
  }), [r, y, A, V, w, v.draggable]);
  return {
    active: s,
    activatorEvent: u,
    activeNodeRect: a,
    attributes: x,
    isDragging: V,
    listeners: r ? void 0 : M,
    node: c,
    over: g,
    setNodeRef: h,
    setActivatorNodeRef: k,
    transform: f
  };
}
const Hm = "Droppable", Xm = {
  timeout: 25
};
function Ym(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: l
  } = e;
  const o = Jo(Hm), {
    active: i,
    dispatch: u,
    over: s,
    measureDroppableContainers: a
  } = q.useContext(Xo), v = q.useRef({
    disabled: n
  }), p = q.useRef(!1), g = q.useRef(null), y = q.useRef(null), {
    disabled: w,
    updateMeasurementsFor: A,
    timeout: V
  } = {
    ...Xm,
    ...l
  }, f = ol(A ?? r), c = q.useCallback(
    () => {
      if (!p.current) {
        p.current = !0;
        return;
      }
      y.current != null && clearTimeout(y.current), y.current = setTimeout(() => {
        a(Array.isArray(f.current) ? f.current : [f.current]), y.current = null;
      }, V);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [V]
  ), h = Ho({
    callback: c,
    disabled: w || !i
  }), S = q.useCallback((x, F) => {
    h && (F && (h.unobserve(F), p.current = !1), x && h.observe(x));
  }, [h]), [k, M] = Eo(S), E = ol(t);
  return q.useEffect(() => {
    !h || !k.current || (h.disconnect(), p.current = !1, h.observe(k.current));
  }, [k, h]), Ut(
    () => (u({
      type: pe.RegisterDroppable,
      element: {
        id: r,
        key: o,
        disabled: n,
        node: k,
        rect: g,
        data: E
      }
    }), () => u({
      type: pe.UnregisterDroppable,
      key: o,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), q.useEffect(() => {
    n !== v.current.disabled && (u({
      type: pe.SetDroppableDisabled,
      id: r,
      key: o,
      disabled: n
    }), v.current.disabled = n);
  }, [r, o, n, u]), {
    active: i,
    rect: g,
    isOver: (s == null ? void 0 : s.id) === r,
    node: k,
    over: s,
    setNodeRef: M
  };
}
function bm(e, t, n) {
  const r = {
    ...e
  };
  return t.top + e.y <= n.top ? r.y = n.top - t.top : t.bottom + e.y >= n.top + n.height && (r.y = n.top + n.height - t.bottom), t.left + e.x <= n.left ? r.x = n.left - t.left : t.right + e.x >= n.left + n.width && (r.x = n.left + n.width - t.right), r;
}
const _m = (e) => {
  let {
    transform: t,
    draggingNodeRect: n,
    windowRect: r
  } = e;
  return !n || !r ? t : bm(t, n, r);
}, $m = "data:audio/mpeg;base64,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NbC934LIrpabg3xE//uSZA+AIx1o3vnnTfRT7RvvFazojlmLZ6fBN9k2NG30JTL6dZtmtPnNf86Lf//Cb/v7XZ0zwej6mndXQ1nOExfhEQ////////+FH//7JpPFMwlSequRkIsUmm0QIYamw968GLySyazUzASAACABQOgeCqiOmif/0////6/P///8gGRSrPskmhRVKggifsF/NP////////UOI9//2NIfKoHThd5VopKlSsH8TKUSgqOiM2pu66l1XHRk5WLLbZdmUkgYAIzkvL6S0ijyJmg3BIyMz47mg4oysrrctyFpWSW+sa3ClrWy3a/1KdNO3BG/+rstu9ZJjic1TLpoXjIxc3OF86Uhw5iEOOFX////////RG+PD3/9ZdjIwitjrKzGQqWGEUQ+yk02Q5kPRF1V+OOOABQBnbKXHfdl///////FT///5WqHbpSqFQfHmoCv////////1DMl//icqub4yliOlskg9GoDwihy6dGCwnLSahPnsBlZnUJltFK5d3d4iWJJWHgFy9n8PkvBrp1RnIynaozhQ+hfGRTHfuNBfZVsXP/7kmQSgAOjaN157U30S20a/QZJvo55mWvntNmZLbRsvHab2uLVm8SHj41dJCtT9qX4lX//b6SyMYGCkEHOJGCBidRWFCSXHAW////////+sDqtX/5/LZIdKSA8mBhQdPmzoqOOaQkqSJWZolhHDXI2tRNQAAAAAAAQAR/////////4r////yqZHFmDrsxu62LheHdlgGvP////////8ORG2y//tNdt3OzmqufwroJMH5NU2fm0YQ1F3QHkpSSt3eHd3YTlQcAWXI6VkMQIOXIdgrpcDpOKc/WUv6NV6tgPaP8FnH9v/dlY8RrahNtLQt5z9f4Hi3+/WpfapZYX1Os1rQUm9ahoL+oL0cf////////Y4DANzf/nCEjk3pNIJOHlBRIKDZp1igCkAl2leLNQHaUAhgAGAAAHABX+KweEzP+rp/////8DP//+iFDWtm2tmQ1F3RBH03////////6goCl//5c0SxGkdAyJaCRY6nkw8wJBYQw61Qnr1Ra2TXaApgKAGj9N8ekdhxMyqVzgXpGwXM3UYpUC4ZnnhZjJv3//+5JkEgAjk2ZX6fNN9kqNG18FSb6POaNhp8mX0Raza/R2pvudZs9gb/RQed1/V9QIxH2/q7XUz0VIjieXkJkyKZkbpIrIePOUwQNG83////////cW9B//yJfCPmXMvJkSzRV0hOrMcwQOa2Kcm5XBkGKACs0AAAFAAoB/qpKv//5gD///8X////I1ZDtHXyoOi7hSk3////////sDcOf/1VpnFK1UowMxpYDQJBh8B/AV91PUEYrqg0jkra3t//9CkIMEPDcPiKLohaTIWfpbSRnig35kTtSrOS7hEthGtP3f5zFzBhZ1pJM6v1/gvDf/+9tRBUXdNTOlWk6jouyezILEFt//73WpBm1rS+k69f/1i5T//8qGVoIjhCOJgN8PDIMCqk5t8qJSwvOGy8wrRzUXp+XY0B5BQAIAN5YMNf6///////iE///+UKKl+3oD4U84ASQ2f///////+sMJr//1OMHo6P46NNKk6EUoYWjTF4LE3ttK1QxckGqSW2+ApgBBDCxCykxMIvESKZReirPDMdmQZNEJX4bQ+L7sA6Ir//uSZBKAY8xo1On0ZfREzNsvFA16z5mfT6xRN9j4M2x8MCnrefn9TvHD006KK3dl/V9QIyZa///6iaNrddfWcFOKanKgByoi5bZ2/2/Tq3+////UGsSv//iQLYTF02ovdQFEpwpHAd40ZxxgvKDpytpdTAhmW1q/UACAd3AAAAFAP/IC7nQiKTkX///5f96/zIdw8dYV5d////////+OQ///3Y+YpH0VJGJlTMyQOOkkmXJeWibJpG6A5WKQ5Z9rYCkAWEK5SxU93KjbPS/CKLtqnmXmtxR1JBE6CWW5BCuGBkuzw/eOrFLa5d9mUmm1XzvqLIE3pfV/r26vOGRdNUUkp5JBF6JfEtHY6h9gYZyG1K/+3+pv////dEQTGy//6acqRvYo4dsusImIpRwVQthWusp/GYEyW2sGZWiAH/DU58MBxhZtMRv///k3/9QqkXAsFP////////oEpv/5Qoh6KeSkpktMIWQgY0XlHNU5jUONOFL5p5Zb72CkAWCKClDNDgIaPjAhxe4BLAA2MRKqBPo1Za8ZkXLcDGMT1zXXw//7kmQVAAPEZ9Pp9DX0R2zbLywKltB9m0Hs1HfJHrNsvFA2E7dVjYSU6SLf1dSykCqcem//6/SD5XpotSSo1JEyK6OJExHUAQqEECdSX/2/7////+o6CAKRP/+dhNNknOGkijxiCnKnJeVtSCWF29XadqZmgJmXYAABQF6iPdUeeDw8byCIEnHEo2QA5L/En///44v/5gYD/QFoz////////1B8l//qcYpk1nOnOQsYY777Ho5rTSJeqoqw0O6AAYBIAzlv+194V6vardA8UcaSuJazdaVwzJrmd6VPCQcE2kuxyzuYWsKbG960GRtVWvI30iZA3YQA7B9n/99TOtjozTr/bzgoYomRPCyQMpgMDFwBJ41Sb+s9/1////X3RIcBgQOAoAiq7f+ZybSm4QGgQOO9cIZmTaH0jFMLVAGiId3ABgNgJ/c4SYwmBQ6tkUpjV+3/+P3/vqXWtt0xvf2uytj7jbrEea////////9nBdF9v/ztTaKal66TPdFFlqTRb5YzFUZneYcwAoAIAZnDJWDu7KXwYlk3eLOC4cy1mOX/+5JkDgADvGbQezWkwkUM2m0eQszPDaNHrFR30QOnq/xwNsocPyrDuE/AAElIvJeeQROLY8j7O7V60slPnAN1lEaKX//7zpOrf2350U8iDnA/MDcYQDr5YOqWr9Z7/pf///V6yGAYM0HGG//9dbbpmLrPbqYxWt01OhpprQLXAS6TSCBgAgCdDwlB4F55iFRUa173tu9/9ur//wQK3///of/1llKiXgMqE/s//X//////5wNSNP/6bor0c8+VaaSeuQW8RPSWxgpABhCMuftylSp9EA3UnXEo4s1aLyGvTQ1zlSvNR8HfIg6z7+uY/rX7VqZP3yz6iPA0cFhpof//50UGXlvSXVWijJ0gokyJiKcCAkA2yLKl/62/61qt///+oogVBItqS//qIOPJSyQbi0gS0hvRHfEiVgIwZADPMw7gtAAYD3zBqYHgSHgWA+JlUmlUjX3dWrN+Mb///6P/9RUnxMkn////////3RAg4tX/Veaa4DIrYGnVKBalV2iHmVBNiDBDiYjcMMRWp9j7Uohp0IYh44GQ6SwG8mq4q+5B//uSRBIAAxpn1nnxHmRjDNr/PaO+jGWLWefAd9l6J2i8zFIAYv1vVu3s8CvpndbNsa8H6vqAZ6X///WLm2/61D8TuYhZeNj///3////+mI5JO//1PZs+6GqWdyLj5ZIVMsKSmeJiYlxTVCYScdocB/kxFdH8Ts2SWshBDHXWD5MViPqKyMqu43Yv1v47+PEzr9a3/q+oC3///6w2kVUNT+mVARw18ZRG///9X////1CYFt//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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUQUdodHRwOi8vd3d3LmZyZWVzZnguY28udWsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/w==", eg = "data:audio/mpeg;base64,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";
let sc = Promise.resolve();
const tg = {
  true: $m,
  false: eg
}, ng = (e, t, n) => {
  let r = !1;
  const l = document.createElement("div");
  l.className = "video-container", l.style = "position: absolute; top: 0; left: 0; right: 0; bottom: 0;";
  const o = document.createElement("video");
  o.src = e, o.autoplay = o.controls = !0;
  const i = document.createElement("button");
  i.className = "video-play", i.onclick = () => o.play(), i.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" viewBox="0 0 15 16">
      <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
    </svg>
  `, o.oncanplaythrough = () => !r && l.appendChild(i), o.onplaying = () => {
    r = !0;
    try {
      l.removeChild(i);
    } catch {
    }
  }, o.onended = () => {
    n.removeChild(l), t();
  }, l.appendChild(o), n.appendChild(l);
}, rg = (e, t, n) => {
  const r = new Audio(e);
  r.onended = t, r.play();
}, No = {
  isFinished: async () => await sc,
  play: (e) => {
    const t = (e == null ? void 0 : e.type) === "video" ? ng : rg, n = (e == null ? void 0 : e.src) || tg[e || !1];
    sc = new Promise((r) => t(n, r, document.getElementById("root")));
  }
};
function ac(e) {
  const { id: t, alt: n, image: r, html: l } = e.item, { active: o, attributes: i, isDragging: u, listeners: s, setNodeRef: a, transform: v } = Jm({
    id: t,
    attributes: { roleDescription: n }
  }), p = l ? { dangerouslySetInnerHTML: !!l && { __html: l } } : { children: /* @__PURE__ */ B.jsx("img", { className: "image", ...r, style: { pointerEvents: "none" } }) };
  return /* @__PURE__ */ B.jsx(
    "button",
    {
      ref: a,
      style: {
        transform: v ? `translate3d(${v.x}px, ${v.y}px, 0)` : "none",
        transition: u ? "none" : "transform 0.3s"
      },
      ...s,
      ...i,
      "aria-describedby": n,
      className: "itemButton",
      ...p
    }
  );
}
function lg({ html: e, id: t, index: n, children: r }) {
  const { isOver: l, setNodeRef: o } = Ym({
    id: t,
    data: { current: n }
  });
  return /* @__PURE__ */ B.jsxs("div", { ref: o, className: `dropContainer ${l ? "over" : ""}`, children: [
    /* @__PURE__ */ B.jsx("h1", { className: "title", dangerouslySetInnerHTML: { __html: e } }),
    r
  ] });
}
function og({ advanceStep: e, config: t }) {
  var y, w;
  const n = t.tokens.map((A, V) => ({ id: V + "", ...A })), [r, l] = q.useState([
    { itemIds: Array(n.length).fill().map((A, V) => V) },
    ...t.zones.map((A) => ({ ...A, itemIds: [] }))
  ]), [o, i] = q.useState(null), u = xi(Qf), s = xi(Us), a = xi(jf, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  }), v = Wv(u, s, a);
  function p(A) {
    const { active: V } = A;
    i(V.id);
  }
  function g(A) {
    var h, S, k;
    const { over: V } = A;
    if (!V)
      return;
    const f = r.find((M) => M.id === V.id), c = n[o];
    if (!(f.maxItems === 0 || ((h = f.itemIds) == null ? void 0 : h.length) >= (f.maxItems || t.maxItems)))
      return [c.answer].flat().includes(V.id) ? (l((M) => M.map((E) => {
        const x = E.itemIds.filter((F) => F != o);
        return E.id === V.id && x.push(o), { ...E, itemIds: x };
      })), No.play(((k = c.feedback) == null ? void 0 : k.correct) || !0), i(null)) : No.play(((S = c.feedback) == null ? void 0 : S.incorrect) || !1);
  }
  return q.useEffect(() => {
    var A, V;
    (V = (A = r[0]) == null ? void 0 : A.itemIds) != null && V.length || e();
  }, [e, r]), /* @__PURE__ */ B.jsx("article", { className: "dndBox", style: { backgroundImage: `url(${t.backgroundImage || ""})` }, children: /* @__PURE__ */ B.jsxs(
    Wm,
    {
      sensors: v,
      onDragStart: p,
      onDragEnd: g,
      modifiers: [_m],
      children: [
        /* @__PURE__ */ B.jsxs("div", { className: ["dndLayout", t.layout].flat().join(" "), children: [
          !!t.html && /* @__PURE__ */ B.jsx("div", { className: "question", dangerouslySetInnerHTML: { __html: t.html } }),
          /* @__PURE__ */ B.jsx("div", { className: "dropZone", children: r.slice(1).map((A, V) => {
            var f;
            return A.maxItems === 0 ? /* @__PURE__ */ B.jsx("div", { className: "dropContainer disabled", children: A.html }) : /* @__PURE__ */ B.jsx(
              lg,
              {
                index: V,
                ...A,
                children: (f = A.itemIds) == null ? void 0 : f.map((c) => {
                  const h = n[c];
                  return /* @__PURE__ */ B.jsx(ac, { item: h }, c);
                })
              },
              V
            );
          }) })
        ] }),
        /* @__PURE__ */ B.jsx("div", { className: "footer", children: (w = (y = r[0]) == null ? void 0 : y.itemIds) == null ? void 0 : w.map((A) => {
          const V = n[A];
          return /* @__PURE__ */ B.jsx(ac, { item: V }, A);
        }) })
      ]
    }
  ) });
}
function ig({ answer: e, inputSelection: t }) {
  return /* @__PURE__ */ B.jsx("button", { className: "answer", onClick: () => t(e), dangerouslySetInnerHTML: { __html: e.html } });
}
function ug({ advanceStep: e, config: t }) {
  const n = t.options, [r, l] = q.useState(null), [o, i] = q.useState(!1);
  function u(s) {
    l(s.correct), i(!0), No.play(s.feedback || s.correct);
  }
  return q.useEffect(() => {
    r && e();
  }, [e, r]), /* @__PURE__ */ B.jsxs("article", { style: { backgroundImage: `url(${t.backgroundImage || ""})` }, children: [
    /* @__PURE__ */ B.jsx("div", { className: "question", dangerouslySetInnerHTML: { __html: t.html } }),
    /* @__PURE__ */ B.jsx("div", { className: "footer", children: n.map((s, a) => /* @__PURE__ */ B.jsx(
      ig,
      {
        answer: s,
        inputSelection: u
      },
      a
    )) })
  ] });
}
const sg = ({ onFinished: e, ...t }) => {
  const n = q.useRef(), [r, l] = q.useState(), o = q.useCallback(() => l((u) => u !== !1), []), i = q.useCallback(() => l(!1), []);
  return /* @__PURE__ */ B.jsxs("div", { id: "video-container", className: "video-container", children: [
    /* @__PURE__ */ B.jsx(
      "video",
      {
        autoPlay: !0,
        controls: !0,
        width: "100%",
        ref: n,
        onCanPlayThrough: o,
        onPlaying: i,
        onEnded: e,
        children: /* @__PURE__ */ B.jsx("source", { type: "video/mp4", ...t })
      }
    ),
    !!r && /* @__PURE__ */ B.jsx("div", { className: "video-overlay", children: /* @__PURE__ */ B.jsx("button", { className: "video-play", onClick: () => {
      var u;
      return (u = n.current) == null ? void 0 : u.play();
    }, children: /* @__PURE__ */ B.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "70%", height: "70%", fill: "currentColor", viewBox: "0 0 15 16", children: /* @__PURE__ */ B.jsx("path", { d: "M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" }) }) }) })
  ] });
}, ag = ({ advanceStep: e, config: { video: t } }) => /* @__PURE__ */ B.jsx(sg, { onFinished: e, ...t });
var Ps = {};
(function e(t, n, r, l) {
  var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), i = typeof Path2D == "function" && typeof DOMMatrix == "function", u = function() {
    if (!t.OffscreenCanvas)
      return !1;
    var m = new OffscreenCanvas(1, 1), d = m.getContext("2d");
    d.fillRect(0, 0, 1, 1);
    var N = m.transferToImageBitmap();
    try {
      d.createPattern(N, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  }();
  function s() {
  }
  function a(m) {
    var d = n.exports.Promise, N = d !== void 0 ? d : t.Promise;
    return typeof N == "function" ? new N(m) : (m(s, s), null);
  }
  var v = /* @__PURE__ */ function(m, d) {
    return {
      transform: function(N) {
        if (m)
          return N;
        if (d.has(N))
          return d.get(N);
        var T = new OffscreenCanvas(N.width, N.height), L = T.getContext("2d");
        return L.drawImage(N, 0, 0), d.set(N, T), T;
      },
      clear: function() {
        d.clear();
      }
    };
  }(u, /* @__PURE__ */ new Map()), p = function() {
    var m = Math.floor(16.666666666666668), d, N, T = {}, L = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (d = function(z) {
      var I = Math.random();
      return T[I] = requestAnimationFrame(function O(j) {
        L === j || L + m - 1 < j ? (L = j, delete T[I], z()) : T[I] = requestAnimationFrame(O);
      }), I;
    }, N = function(z) {
      T[z] && cancelAnimationFrame(T[z]);
    }) : (d = function(z) {
      return setTimeout(z, m);
    }, N = function(z) {
      return clearTimeout(z);
    }), { frame: d, cancel: N };
  }(), g = /* @__PURE__ */ function() {
    var m, d, N = {};
    function T(L) {
      function z(I, O) {
        L.postMessage({ options: I || {}, callback: O });
      }
      L.init = function(O) {
        var j = O.transferControlToOffscreen();
        L.postMessage({ canvas: j }, [j]);
      }, L.fire = function(O, j, X) {
        if (d)
          return z(O, null), d;
        var W = Math.random().toString(36).slice(2);
        return d = a(function(Y) {
          function H(se) {
            se.data.callback === W && (delete N[W], L.removeEventListener("message", H), d = null, v.clear(), X(), Y());
          }
          L.addEventListener("message", H), z(O, W), N[W] = H.bind(null, { data: { callback: W } });
        }), d;
      }, L.reset = function() {
        L.postMessage({ reset: !0 });
        for (var O in N)
          N[O](), delete N[O];
      };
    }
    return function() {
      if (m)
        return m;
      if (!r && o) {
        var L = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + e.toString() + ")(this, module, true, SIZE);",
          "onmessage = function(msg) {",
          "  if (msg.data.options) {",
          "    CONFETTI(msg.data.options).then(function () {",
          "      if (msg.data.callback) {",
          "        postMessage({ callback: msg.data.callback });",
          "      }",
          "    });",
          "  } else if (msg.data.reset) {",
          "    CONFETTI && CONFETTI.reset();",
          "  } else if (msg.data.resize) {",
          "    SIZE.width = msg.data.resize.width;",
          "    SIZE.height = msg.data.resize.height;",
          "  } else if (msg.data.canvas) {",
          "    SIZE.width = msg.data.canvas.width;",
          "    SIZE.height = msg.data.canvas.height;",
          "    CONFETTI = module.exports.create(msg.data.canvas);",
          "  }",
          "}"
        ].join(`
`);
        try {
          m = new Worker(URL.createObjectURL(new Blob([L])));
        } catch (z) {
          return typeof console !== void 0 && typeof console.warn == "function" && console.warn("🎊 Could not load worker", z), null;
        }
        T(m);
      }
      return m;
    };
  }(), y = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ["square", "circle"],
    zIndex: 100,
    colors: [
      "#26ccff",
      "#a25afd",
      "#ff5e7e",
      "#88ff5a",
      "#fcff42",
      "#ffa62d",
      "#ff36ff"
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: !1,
    scalar: 1
  };
  function w(m, d) {
    return d ? d(m) : m;
  }
  function A(m) {
    return m != null;
  }
  function V(m, d, N) {
    return w(
      m && A(m[d]) ? m[d] : y[d],
      N
    );
  }
  function f(m) {
    return m < 0 ? 0 : Math.floor(m);
  }
  function c(m, d) {
    return Math.floor(Math.random() * (d - m)) + m;
  }
  function h(m) {
    return parseInt(m, 16);
  }
  function S(m) {
    return m.map(k);
  }
  function k(m) {
    var d = String(m).replace(/[^0-9a-f]/gi, "");
    return d.length < 6 && (d = d[0] + d[0] + d[1] + d[1] + d[2] + d[2]), {
      r: h(d.substring(0, 2)),
      g: h(d.substring(2, 4)),
      b: h(d.substring(4, 6))
    };
  }
  function M(m) {
    var d = V(m, "origin", Object);
    return d.x = V(d, "x", Number), d.y = V(d, "y", Number), d;
  }
  function E(m) {
    m.width = document.documentElement.clientWidth, m.height = document.documentElement.clientHeight;
  }
  function x(m) {
    var d = m.getBoundingClientRect();
    m.width = d.width, m.height = d.height;
  }
  function F(m) {
    var d = document.createElement("canvas");
    return d.style.position = "fixed", d.style.top = "0px", d.style.left = "0px", d.style.pointerEvents = "none", d.style.zIndex = m, d;
  }
  function U(m, d, N, T, L, z, I, O, j) {
    m.save(), m.translate(d, N), m.rotate(z), m.scale(T, L), m.arc(0, 0, 1, I, O, j), m.restore();
  }
  function K(m) {
    var d = m.angle * (Math.PI / 180), N = m.spread * (Math.PI / 180);
    return {
      x: m.x,
      y: m.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: m.startVelocity * 0.5 + Math.random() * m.startVelocity,
      angle2D: -d + (0.5 * N - Math.random() * N),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: m.color,
      shape: m.shape,
      tick: 0,
      totalTicks: m.ticks,
      decay: m.decay,
      drift: m.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: m.gravity * 3,
      ovalScalar: 0.6,
      scalar: m.scalar,
      flat: m.flat
    };
  }
  function ye(m, d) {
    d.x += Math.cos(d.angle2D) * d.velocity + d.drift, d.y += Math.sin(d.angle2D) * d.velocity + d.gravity, d.velocity *= d.decay, d.flat ? (d.wobble = 0, d.wobbleX = d.x + 10 * d.scalar, d.wobbleY = d.y + 10 * d.scalar, d.tiltSin = 0, d.tiltCos = 0, d.random = 1) : (d.wobble += d.wobbleSpeed, d.wobbleX = d.x + 10 * d.scalar * Math.cos(d.wobble), d.wobbleY = d.y + 10 * d.scalar * Math.sin(d.wobble), d.tiltAngle += 0.1, d.tiltSin = Math.sin(d.tiltAngle), d.tiltCos = Math.cos(d.tiltAngle), d.random = Math.random() + 2);
    var N = d.tick++ / d.totalTicks, T = d.x + d.random * d.tiltCos, L = d.y + d.random * d.tiltSin, z = d.wobbleX + d.random * d.tiltCos, I = d.wobbleY + d.random * d.tiltSin;
    if (m.fillStyle = "rgba(" + d.color.r + ", " + d.color.g + ", " + d.color.b + ", " + (1 - N) + ")", m.beginPath(), i && d.shape.type === "path" && typeof d.shape.path == "string" && Array.isArray(d.shape.matrix))
      m.fill(Ne(
        d.shape.path,
        d.shape.matrix,
        d.x,
        d.y,
        Math.abs(z - T) * 0.1,
        Math.abs(I - L) * 0.1,
        Math.PI / 10 * d.wobble
      ));
    else if (d.shape.type === "bitmap") {
      var O = Math.PI / 10 * d.wobble, j = Math.abs(z - T) * 0.1, X = Math.abs(I - L) * 0.1, W = d.shape.bitmap.width * d.scalar, Y = d.shape.bitmap.height * d.scalar, H = new DOMMatrix([
        Math.cos(O) * j,
        Math.sin(O) * j,
        -Math.sin(O) * X,
        Math.cos(O) * X,
        d.x,
        d.y
      ]);
      H.multiplySelf(new DOMMatrix(d.shape.matrix));
      var se = m.createPattern(v.transform(d.shape.bitmap), "no-repeat");
      se.setTransform(H), m.globalAlpha = 1 - N, m.fillStyle = se, m.fillRect(
        d.x - W / 2,
        d.y - Y / 2,
        W,
        Y
      ), m.globalAlpha = 1;
    } else if (d.shape === "circle")
      m.ellipse ? m.ellipse(d.x, d.y, Math.abs(z - T) * d.ovalScalar, Math.abs(I - L) * d.ovalScalar, Math.PI / 10 * d.wobble, 0, 2 * Math.PI) : U(m, d.x, d.y, Math.abs(z - T) * d.ovalScalar, Math.abs(I - L) * d.ovalScalar, Math.PI / 10 * d.wobble, 0, 2 * Math.PI);
    else if (d.shape === "star")
      for (var Q = Math.PI / 2 * 3, ce = 4 * d.scalar, ve = 8 * d.scalar, Ue = d.x, Ye = d.y, ut = 5, de = Math.PI / ut; ut--; )
        Ue = d.x + Math.cos(Q) * ve, Ye = d.y + Math.sin(Q) * ve, m.lineTo(Ue, Ye), Q += de, Ue = d.x + Math.cos(Q) * ce, Ye = d.y + Math.sin(Q) * ce, m.lineTo(Ue, Ye), Q += de;
    else
      m.moveTo(Math.floor(d.x), Math.floor(d.y)), m.lineTo(Math.floor(d.wobbleX), Math.floor(L)), m.lineTo(Math.floor(z), Math.floor(I)), m.lineTo(Math.floor(T), Math.floor(d.wobbleY));
    return m.closePath(), m.fill(), d.tick < d.totalTicks;
  }
  function qe(m, d, N, T, L) {
    var z = d.slice(), I = m.getContext("2d"), O, j, X = a(function(W) {
      function Y() {
        O = j = null, I.clearRect(0, 0, T.width, T.height), v.clear(), L(), W();
      }
      function H() {
        r && !(T.width === l.width && T.height === l.height) && (T.width = m.width = l.width, T.height = m.height = l.height), !T.width && !T.height && (N(m), T.width = m.width, T.height = m.height), I.clearRect(0, 0, T.width, T.height), z = z.filter(function(se) {
          return ye(I, se);
        }), z.length ? O = p.frame(H) : Y();
      }
      O = p.frame(H), j = Y;
    });
    return {
      addFettis: function(W) {
        return z = z.concat(W), X;
      },
      canvas: m,
      promise: X,
      reset: function() {
        O && p.cancel(O), j && j();
      }
    };
  }
  function Oe(m, d) {
    var N = !m, T = !!V(d || {}, "resize"), L = !1, z = V(d, "disableForReducedMotion", Boolean), I = o && !!V(d || {}, "useWorker"), O = I ? g() : null, j = N ? E : x, X = m && O ? !!m.__confetti_initialized : !1, W = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, Y;
    function H(Q, ce, ve) {
      for (var Ue = V(Q, "particleCount", f), Ye = V(Q, "angle", Number), ut = V(Q, "spread", Number), de = V(Q, "startVelocity", Number), xn = V(Q, "decay", Number), Mn = V(Q, "gravity", Number), vl = V(Q, "drift", Number), cr = V(Q, "colors", S), Yo = V(Q, "ticks", Number), ml = V(Q, "shapes"), Ft = V(Q, "scalar"), Bt = !!V(Q, "flat"), Qt = M(Q), dr = Ue, be = [], gl = m.width * Qt.x, bo = m.height * Qt.y; dr--; )
        be.push(
          K({
            x: gl,
            y: bo,
            angle: Ye,
            spread: ut,
            startVelocity: de,
            color: cr[dr % cr.length],
            shape: ml[c(0, ml.length)],
            ticks: Yo,
            decay: xn,
            gravity: Mn,
            drift: vl,
            scalar: Ft,
            flat: Bt
          })
        );
      return Y ? Y.addFettis(be) : (Y = qe(m, be, j, ce, ve), Y.promise);
    }
    function se(Q) {
      var ce = z || V(Q, "disableForReducedMotion", Boolean), ve = V(Q, "zIndex", Number);
      if (ce && W)
        return a(function(de) {
          de();
        });
      N && Y ? m = Y.canvas : N && !m && (m = F(ve), document.body.appendChild(m)), T && !X && j(m);
      var Ue = {
        width: m.width,
        height: m.height
      };
      O && !X && O.init(m), X = !0, O && (m.__confetti_initialized = !0);
      function Ye() {
        if (O) {
          var de = {
            getBoundingClientRect: function() {
              if (!N)
                return m.getBoundingClientRect();
            }
          };
          j(de), O.postMessage({
            resize: {
              width: de.width,
              height: de.height
            }
          });
          return;
        }
        Ue.width = Ue.height = null;
      }
      function ut() {
        Y = null, T && (L = !1, t.removeEventListener("resize", Ye)), N && m && (document.body.removeChild(m), m = null, X = !1);
      }
      return T && !L && (L = !0, t.addEventListener("resize", Ye, !1)), O ? O.fire(Q, Ue, ut) : H(Q, Ue, ut);
    }
    return se.reset = function() {
      O && O.reset(), Y && Y.reset();
    }, se;
  }
  var zt;
  function Et() {
    return zt || (zt = Oe(null, { useWorker: !0, resize: !0 })), zt;
  }
  function Ne(m, d, N, T, L, z, I) {
    var O = new Path2D(m), j = new Path2D();
    j.addPath(O, new DOMMatrix(d));
    var X = new Path2D();
    return X.addPath(j, new DOMMatrix([
      Math.cos(I) * L,
      Math.sin(I) * L,
      -Math.sin(I) * z,
      Math.cos(I) * z,
      N,
      T
    ])), X;
  }
  function D(m) {
    if (!i)
      throw new Error("path confetti are not supported in this browser");
    var d, N;
    typeof m == "string" ? d = m : (d = m.path, N = m.matrix);
    var T = new Path2D(d), L = document.createElement("canvas"), z = L.getContext("2d");
    if (!N) {
      for (var I = 1e3, O = I, j = I, X = 0, W = 0, Y, H, se = 0; se < I; se += 2)
        for (var Q = 0; Q < I; Q += 2)
          z.isPointInPath(T, se, Q, "nonzero") && (O = Math.min(O, se), j = Math.min(j, Q), X = Math.max(X, se), W = Math.max(W, Q));
      Y = X - O, H = W - j;
      var ce = 10, ve = Math.min(ce / Y, ce / H);
      N = [
        ve,
        0,
        0,
        ve,
        -Math.round(Y / 2 + O) * ve,
        -Math.round(H / 2 + j) * ve
      ];
    }
    return {
      type: "path",
      path: d,
      matrix: N
    };
  }
  function P(m) {
    var d, N = 1, T = "#000000", L = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof m == "string" ? d = m : (d = m.text, N = "scalar" in m ? m.scalar : N, L = "fontFamily" in m ? m.fontFamily : L, T = "color" in m ? m.color : T);
    var z = 10 * N, I = "" + z + "px " + L, O = new OffscreenCanvas(z, z), j = O.getContext("2d");
    j.font = I;
    var X = j.measureText(d), W = Math.ceil(X.actualBoundingBoxRight + X.actualBoundingBoxLeft), Y = Math.ceil(X.actualBoundingBoxAscent + X.actualBoundingBoxDescent), H = 2, se = X.actualBoundingBoxLeft + H, Q = X.actualBoundingBoxAscent + H;
    W += H + H, Y += H + H, O = new OffscreenCanvas(W, Y), j = O.getContext("2d"), j.font = I, j.fillStyle = T, j.fillText(d, se, Q);
    var ce = 1 / N;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: O.transferToImageBitmap(),
      matrix: [ce, 0, 0, ce, -W * ce / 2, -Y * ce / 2]
    };
  }
  n.exports = function() {
    return Et().apply(this, arguments);
  }, n.exports.reset = function() {
    Et().reset();
  }, n.exports.create = Oe, n.exports.shapeFromPath = D, n.exports.shapeFromText = P;
})(/* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
}(), Ps, !1);
const cc = Ps.exports;
Ps.exports.create;
const cg = () => /* @__PURE__ */ B.jsx(
  "svg",
  {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: "star",
    viewBox: "0 0 600 475",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ B.jsx("g", { children: /* @__PURE__ */ B.jsx("path", { style: { fillRule: "evenodd", clipRule: "evenodd", stroke: "black", strokeWidth: "0.5rem", fill: "yellow" }, d: `M331.9,56.7l32.6,79.8c2.5,6.2,8,10.1,14.6,10.6l86,6.4c14.2,1,25.7,10.1,30.1,23.6
		c4.4,13.5,0.4,27.6-10.5,36.8l-65.9,55.7c-5.1,4.3-7.2,10.7-5.6,17.2l20.5,83.8c3.4,13.8-1.6,27.6-13.2,35.9
		c-11.5,8.4-26.1,8.9-38.2,1.4l-82.4-51l-82.4,51c-12.1,7.5-26.7,7-38.2-1.4c-11.5-8.4-16.5-22.1-13.2-35.9l20.5-83.8
		c1.6-6.5-0.5-12.9-5.6-17.2l-65.9-55.7c-10.9-9.2-14.9-23.3-10.5-36.8c4.4-13.5,15.9-22.6,30.1-23.6l86-6.4
		c6.7-0.5,12.1-4.4,14.6-10.6l32.6-79.8c5.4-13.2,17.5-21.3,31.8-21.3C314.4,35.3,326.5,43.5,331.9,56.7L331.9,56.7z` }) })
  }
), dg = () => (q.useEffect(() => {
  cc({ gravity: 0.25, origin: { x: 0, y: 0.75 }, angle: 60 }), cc({ gravity: 0.25, origin: { x: 1, y: 0.75 }, angle: 120 });
}, []), /* @__PURE__ */ B.jsxs("div", { className: "celebration", children: [
  /* @__PURE__ */ B.jsx(cg, {}),
  /* @__PURE__ */ B.jsx("h1", { children: "Great Job!" })
] })), fg = (e) => {
  switch (e) {
    case "matching":
      return og;
    case "multiple-choice":
      return ug;
    case "video":
      return ag;
    default:
      return ({ advanceStep: t }) => /* @__PURE__ */ B.jsxs("div", { children: [
        /* @__PURE__ */ B.jsxs("p", { children: [
          "Missing component for type `",
          e,
          "`"
        ] }),
        /* @__PURE__ */ B.jsx("button", { onClick: () => t(), children: "Next >" })
      ] });
  }
};
function pg({ config: e }) {
  var v;
  const { sequence: t } = e || {}, [n, r] = q.useState(0), [l, o] = q.useState(!1), u = q.useRef(t.map(() => q.createRef())).current[n], s = q.useCallback(async (p = 1) => {
    await No.isFinished(), n + p >= t.length ? (o(!0), setTimeout(() => {
      window.parent.postMessage({ event: "nextSlide" }, "*");
    }, 6e3)) : setTimeout(() => {
      r(n + 1);
    }, 1e3);
  }, [n]), a = fg((v = t == null ? void 0 : t[n]) == null ? void 0 : v.type);
  return /* @__PURE__ */ B.jsx("main", { children: /* @__PURE__ */ B.jsx(Dv, { mode: "out-in", children: /* @__PURE__ */ B.jsx(
    Cv,
    {
      nodeRef: u,
      timeout: 500,
      classNames: "transition",
      addEndListener: (p) => {
        u.current.addEventListener("transitionend", p, !1);
      },
      children: /* @__PURE__ */ B.jsxs("div", { ref: u, children: [
        /* @__PURE__ */ B.jsx(a, { config: t == null ? void 0 : t[n], advanceStep: s }),
        !!l && /* @__PURE__ */ B.jsx(dg, {})
      ] })
    },
    n
  ) }) });
}
const hg = {
  Init: (e, t) => {
    Ti.createRoot(e).render(
      /* @__PURE__ */ B.jsx(J.StrictMode, { children: /* @__PURE__ */ B.jsx(pg, { config: t }) })
    );
  }
};
export {
  hg as default
};
