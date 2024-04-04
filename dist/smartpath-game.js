(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap";*{box-sizing:border-box}html,body,#root,main{height:100%}body{margin:0}main{font-family:Open Sans,sans-serif;display:flex;align-items:center;justify-content:center}:root{--ratio: 1.78}html{font-size:min(1vw,calc(1vh * var(--ratio)))}img{max-width:100%;max-height:40rem}button{font-size:2rem}article{height:100vh;width:100vw;max-height:calc(100rem / var(--ratio));max-width:100rem;display:flex;flex-direction:column;align-items:center;justify-content:space-between;background-size:cover;background-position:center}article .footer{height:10rem;background:#fff9;width:100%;display:flex;justify-content:center;align-items:center;gap:3rem}h1{font-size:3rem}h2{font-size:2rem}.flex-row{padding:1rem;gap:1rem;display:flex;flex:1;flex-direction:row;width:100%}.flex-row>*{flex:1;display:flex;justify-content:center;align-items:center}.transition-enter{opacity:0}.transition-enter-active,.transition-exit{opacity:1}.transition-exit-active{opacity:0}.transition-enter-active,.transition-exit-active{transition:opacity .3s,transform .5s}.question{padding:3rem;margin:0;text-align:center}.dndLayout{display:flex;flex:1;flex-direction:column;width:100%}.dndLayout.columns{flex-direction:row}.dndLayout.columns>*{width:50%}.dndLayout.columns .question{text-align:left}.dndLayout.columns .dropZone{flex-wrap:wrap;align-self:center;align-items:center;justify-content:center}.dndLayout.columns .dropZone .dropContainer{height:7rem;min-width:100%}.dndLayout.columns.x2 .dropZone .dropContainer{min-width:40%;justify-content:center}.dropZone{flex:1;display:flex;justify-content:space-evenly;padding:3rem;gap:3rem;width:100%;font-size:.875rem;line-height:1.25rem}.itemButton{height:8rem;margin:1.25rem;padding:1rem 2rem;display:flex;font-size:3rem;justify-content:space-around;align-items:center;background:#fff;border:.25rem solid #337ab7;border-radius:.5rem;box-shadow:0 1.25rem 1.5rem -.25rem #0000001a,0 .5rem .75rem -.25rem #0000001a}.itemButton:hover{outline:.25rem solid #337ab7;border:.5rem solid #fff;outline-offset:-.75rem;border-radius:.75rem;box-shadow:0 0 .24rem #337ab740;filter:none}.itemButton:focus{outline:none;border:.5rem double #337ab7;border-radius:.25rem;filter:none;cursor:move}.image{height:100%;width:auto}.reply{width:75%;height:75%;margin-top:1.25rem;font-size:2.25rem;line-height:2.5rem;text-align:center}.correct{color:#16a34a}.dropContainer{border:.25rem solid black;background:#fff;flex:1;position:relative;display:flex;flex-direction:column;align-items:center;width:0}.dropContainer.disabled{font-size:5rem;justify-content:center;border:none}.over{outline:.25rem dashed #337ab7;outline-offset:.5rem}.title{text-align:center;font-size:3rem;line-height:1;letter-spacing:.025em;font-weight:700;margin:1rem}.calculator{display:flex;flex-wrap:wrap;background:#d3d3d3;border-radius:1rem;border:.25rem solid black;padding:2rem 1.5rem;width:34rem}.calculator button{border:.125rem solid black;border-radius:1rem;font-size:3rem;padding:.5rem}.calculator input{width:100%;text-align:right;padding:1rem;height:7rem;align-self:self-end;font-size:4rem;letter-spacing:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.125rem solid black;border-radius:1rem}.calculator_numbers{flex:3;display:flex;flex-direction:row-reverse;flex-wrap:wrap;gap:1rem;margin:1rem}.calculator_numbers>button:first-child{width:100%;background:red;color:#fff;text-transform:uppercase}.calculator_numbers>button:last-child{width:64%}.calculator_numbers>button{width:30%}.calculator_actions{flex:1;display:flex;flex-direction:column;gap:1rem;margin:1rem;margin-left:0}.calculator_actions>button{flex:1;width:100%;font-size:3.5rem;background-color:gray;color:#fff}.cupcakeBuilderPage .budget{flex-direction:column;align-items:flex-start!important}.cupcakeBuilderPage .budget>*{transition:all .6s}.cupcakeBuilderPage .budget>.unavailable{transform:translate(-90%)}.cupcakeBuilderPage .tokens{flex-wrap:wrap;display:flex;justify-content:space-between;align-items:normal;flex:2!important}.cupcakeBuilderPage .tokens>button{width:33%;position:relative;align-items:flex-end;border:none;background:transparent;white-space:nowrap}.cupcakeBuilderPage .tokens>button img{padding:0 4rem}.cupcakeBuilderPage .tokens>button.selected:after{display:block;position:absolute;content:"";border:.35rem solid green;border-radius:50%;top:50%;left:50%;padding:30% 35%;transform:translate(-50%,-50%);z-index:1}.answerContainer{width:100%;display:flex;gap:3rem;justify-content:center}.answer{width:26.5%;height:80.5%;padding-top:2.25rem;padding-bottom:2.25rem;background-color:#000000bf;background-size:100% 100%;inset:85.13% auto auto 22.5%;font-size:3.75rem;line-height:2.5rem;color:#fff;text-align:center}.answer:focus{border:.25rem solid #337ab7}.answer:hover{border:.25rem solid #337ab7;border-radius:.25rem}video{height:100vh;width:100vw}.video-container{display:flex;height:100vh;width:100vw;background:#000}.video-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-60%);display:flex;align-items:center;justify-content:center;z-index:99;color:#337ab7;border:4px solid #337ab7;background:#fff;border-radius:999px;width:100px;height:100px;box-shadow:0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a}.video-play:hover{background:#d9d9d9;box-shadow:0 0 5px #337ab740}.video-play:focus{outline:none;border:8px double #337ab7}.celebration{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;align-items:center;justify-content:center}.celebration .star{width:50rem;animation:zoom-in-zoom-out 2s ease-in-out,rotate 2s ease-in-out}.celebration h1{position:absolute;animation:zoom-in-zoom-out 2s ease-in-out}@keyframes zoom-in-zoom-out{0%{scale:0}75%{scale:1.25}to{scale:1}}@keyframes rotate{0%{rotate:0}75%{scale:600deg}to{rotate:720deg}}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function pc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hc = { exports: {} }, Do = {}, mc = { exports: {} }, Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sl = Symbol.for("react.element"), ep = Symbol.for("react.portal"), tp = Symbol.for("react.fragment"), np = Symbol.for("react.strict_mode"), rp = Symbol.for("react.profiler"), lp = Symbol.for("react.provider"), op = Symbol.for("react.context"), ip = Symbol.for("react.forward_ref"), up = Symbol.for("react.suspense"), sp = Symbol.for("react.memo"), ap = Symbol.for("react.lazy"), Qs = Symbol.iterator;
function cp(e) {
  return e === null || typeof e != "object" ? null : (e = Qs && e[Qs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var vc = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, gc = Object.assign, Ac = {};
function ir(e, t, n) {
  this.props = e, this.context = t, this.refs = Ac, this.updater = n || vc;
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ir.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yc() {
}
yc.prototype = ir.prototype;
function Iu(e, t, n) {
  this.props = e, this.context = t, this.refs = Ac, this.updater = n || vc;
}
var Ou = Iu.prototype = new yc();
Ou.constructor = Iu;
gc(Ou, ir.prototype);
Ou.isPureReactComponent = !0;
var Zs = Array.isArray, qc = Object.prototype.hasOwnProperty, Uu = { current: null }, Sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function wc(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null)
    for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t)
      qc.call(t, r) && !Sc.hasOwnProperty(r) && (l[r] = t[r]);
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
  return { $$typeof: sl, type: e, key: o, ref: i, props: l, _owner: Uu.current };
}
function dp(e, t) {
  return { $$typeof: sl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Lu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sl;
}
function fp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ws = /\/+/g;
function $o(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? fp("" + e.key) : t.toString(36);
}
function jl(e, t, n, r, l) {
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
          case sl:
          case ep:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + $o(i, 0) : r, Zs(l) ? (n = "", e != null && (n = e.replace(Ws, "$&/") + "/"), jl(l, t, n, "", function(a) {
      return a;
    })) : l != null && (Lu(l) && (l = dp(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ws, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Zs(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + $o(o, u);
      i += jl(o, t, n, s, l);
    }
  else if (s = cp(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + $o(o, u++), i += jl(o, t, n, s, l);
  else if (o === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Sl(e, t, n) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return jl(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function pp(e) {
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
var Te = { current: null }, Ql = { transition: null }, hp = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: Ql, ReactCurrentOwner: Uu };
Z.Children = { map: Sl, forEach: function(e, t, n) {
  Sl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Sl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Sl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Lu(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Z.Component = ir;
Z.Fragment = tp;
Z.Profiler = rp;
Z.PureComponent = Iu;
Z.StrictMode = np;
Z.Suspense = up;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hp;
Z.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = gc({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = Uu.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      qc.call(t, s) && !Sc.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return { $$typeof: sl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
Z.createContext = function(e) {
  return e = { $$typeof: op, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: lp, _context: e }, e.Consumer = e;
};
Z.createElement = wc;
Z.createFactory = function(e) {
  var t = wc.bind(null, e);
  return t.type = e, t;
};
Z.createRef = function() {
  return { current: null };
};
Z.forwardRef = function(e) {
  return { $$typeof: ip, render: e };
};
Z.isValidElement = Lu;
Z.lazy = function(e) {
  return { $$typeof: ap, _payload: { _status: -1, _result: e }, _init: pp };
};
Z.memo = function(e, t) {
  return { $$typeof: sp, type: e, compare: t === void 0 ? null : t };
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
mc.exports = Z;
var y = mc.exports;
const J = /* @__PURE__ */ pc(y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mp = y, vp = Symbol.for("react.element"), gp = Symbol.for("react.fragment"), Ap = Object.prototype.hasOwnProperty, yp = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vc(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Ap.call(t, r) && !qp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: vp, type: e, key: o, ref: i, props: l, _owner: yp.current };
}
Do.Fragment = gp;
Do.jsx = Vc;
Do.jsxs = Vc;
hc.exports = Do;
var R = hc.exports, Ii = {}, kc = { exports: {} }, He = {}, Ec = { exports: {} }, xc = {};
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
  function t(D, z) {
    var g = D.length;
    D.push(z);
    e:
      for (; 0 < g; ) {
        var h = g - 1 >>> 1, N = D[h];
        if (0 < l(N, z))
          D[h] = z, D[g] = N, g = h;
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
    var z = D[0], g = D.pop();
    if (g !== z) {
      D[0] = g;
      e:
        for (var h = 0, N = D.length, O = N >>> 1; h < O; ) {
          var P = 2 * (h + 1) - 1, B = D[P], U = P + 1, L = D[U];
          if (0 > l(B, g))
            U < N && 0 > l(L, B) ? (D[h] = L, D[U] = g, h = U) : (D[h] = B, D[P] = g, h = P);
          else if (U < N && 0 > l(L, g))
            D[h] = L, D[U] = g, h = U;
          else
            break e;
        }
    }
    return z;
  }
  function l(D, z) {
    var g = D.sortIndex - z.sortIndex;
    return g !== 0 ? g : D.id - z.id;
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
  var s = [], a = [], f = 1, d = null, v = 3, q = !1, w = !1, A = !1, V = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(D) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null)
        r(a);
      else if (z.startTime <= D)
        r(a), z.sortIndex = z.expirationTime, t(s, z);
      else
        break;
      z = n(a);
    }
  }
  function S(D) {
    if (A = !1, m(D), !w)
      if (n(s) !== null)
        w = !0, Et(E);
      else {
        var z = n(a);
        z !== null && Ne(S, z.startTime - D);
      }
  }
  function E(D, z) {
    w = !1, A && (A = !1, p(C), C = -1), q = !0;
    var g = v;
    try {
      for (m(z), d = n(s); d !== null && (!(d.expirationTime > z) || D && !K()); ) {
        var h = d.callback;
        if (typeof h == "function") {
          d.callback = null, v = d.priorityLevel;
          var N = h(d.expirationTime <= z);
          z = e.unstable_now(), typeof N == "function" ? d.callback = N : d === n(s) && r(s), m(z);
        } else
          r(s);
        d = n(s);
      }
      if (d !== null)
        var O = !0;
      else {
        var P = n(a);
        P !== null && Ne(S, P.startTime - z), O = !1;
      }
      return O;
    } finally {
      d = null, v = g, q = !1;
    }
  }
  var M = !1, k = null, C = -1, F = 5, I = -1;
  function K() {
    return !(e.unstable_now() - I < F);
  }
  function ye() {
    if (k !== null) {
      var D = e.unstable_now();
      I = D;
      var z = !0;
      try {
        z = k(!0, D);
      } finally {
        z ? qe() : (M = !1, k = null);
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
    var Oe = new MessageChannel(), Ft = Oe.port2;
    Oe.port1.onmessage = ye, qe = function() {
      Ft.postMessage(null);
    };
  } else
    qe = function() {
      V(ye, 0);
    };
  function Et(D) {
    k = D, M || (M = !0, qe());
  }
  function Ne(D, z) {
    C = V(function() {
      D(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    w || q || (w = !0, Et(E));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(D) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = v;
    }
    var g = v;
    v = z;
    try {
      return D();
    } finally {
      v = g;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, z) {
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
    var g = v;
    v = D;
    try {
      return z();
    } finally {
      v = g;
    }
  }, e.unstable_scheduleCallback = function(D, z, g) {
    var h = e.unstable_now();
    switch (typeof g == "object" && g !== null ? (g = g.delay, g = typeof g == "number" && 0 < g ? h + g : h) : g = h, D) {
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
    return N = g + N, D = { id: f++, callback: z, priorityLevel: D, startTime: g, expirationTime: N, sortIndex: -1 }, g > h ? (D.sortIndex = g, t(a, D), n(s) === null && D === n(a) && (A ? (p(C), C = -1) : A = !0, Ne(S, g - h))) : (D.sortIndex = N, t(s, D), w || q || (w = !0, Et(E))), D;
  }, e.unstable_shouldYield = K, e.unstable_wrapCallback = function(D) {
    var z = v;
    return function() {
      var g = v;
      v = z;
      try {
        return D.apply(this, arguments);
      } finally {
        v = g;
      }
    };
  };
})(xc);
Ec.exports = xc;
var Sp = Ec.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc = y, Je = Sp;
function x(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Mc = /* @__PURE__ */ new Set(), Qr = {};
function xn(e, t) {
  _n(e, t), _n(e + "Capture", t);
}
function _n(e, t) {
  for (Qr[e] = t, e = 0; e < t.length; e++)
    Mc.add(t[e]);
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Oi = Object.prototype.hasOwnProperty, wp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Gs = {}, Ks = {};
function Vp(e) {
  return Oi.call(Ks, e) ? !0 : Oi.call(Gs, e) ? !1 : wp.test(e) ? Ks[e] = !0 : (Gs[e] = !0, !1);
}
function kp(e, t, n, r) {
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
function Ep(e, t, n, r) {
  if (t === null || typeof t > "u" || kp(e, t, n, r))
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
var Pu = /[\-:]([a-z])/g;
function zu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Pu,
    zu
  );
  ke[t] = new Ie(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Pu, zu);
  ke[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Pu, zu);
  ke[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ke[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ke[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fu(e, t, n, r) {
  var l = ke.hasOwnProperty(t) ? ke[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ep(t, n, l, r) && (n = null), r || l === null ? Vp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pt = Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, wl = Symbol.for("react.element"), In = Symbol.for("react.portal"), On = Symbol.for("react.fragment"), Bu = Symbol.for("react.strict_mode"), Ui = Symbol.for("react.profiler"), Nc = Symbol.for("react.provider"), Dc = Symbol.for("react.context"), ju = Symbol.for("react.forward_ref"), Li = Symbol.for("react.suspense"), Pi = Symbol.for("react.suspense_list"), Qu = Symbol.for("react.memo"), Gt = Symbol.for("react.lazy"), Rc = Symbol.for("react.offscreen"), Js = Symbol.iterator;
function gr(e) {
  return e === null || typeof e != "object" ? null : (e = Js && e[Js] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ei;
function Er(e) {
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
  return (e = e ? e.displayName || e.name : "") ? Er(e) : "";
}
function xp(e) {
  switch (e.tag) {
    case 5:
      return Er(e.type);
    case 16:
      return Er("Lazy");
    case 13:
      return Er("Suspense");
    case 19:
      return Er("SuspenseList");
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
function zi(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case On:
      return "Fragment";
    case In:
      return "Portal";
    case Ui:
      return "Profiler";
    case Bu:
      return "StrictMode";
    case Li:
      return "Suspense";
    case Pi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Dc:
        return (e.displayName || "Context") + ".Consumer";
      case Nc:
        return (e._context.displayName || "Context") + ".Provider";
      case ju:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Qu:
        return t = e.displayName || null, t !== null ? t : zi(e.type) || "Memo";
      case Gt:
        t = e._payload, e = e._init;
        try {
          return zi(e(t));
        } catch {
        }
    }
  return null;
}
function Cp(e) {
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
      return zi(t);
    case 8:
      return t === Bu ? "StrictMode" : "Mode";
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
function sn(e) {
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
function Tc(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Mp(e) {
  var t = Tc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Vl(e) {
  e._valueTracker || (e._valueTracker = Mp(e));
}
function Ic(e) {
  if (!e)
    return !1;
  var t = e._valueTracker;
  if (!t)
    return !0;
  var n = t.getValue(), r = "";
  return e && (r = Tc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function eo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fi(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Hs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = sn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Oc(e, t) {
  t = t.checked, t != null && Fu(e, "checked", t, !1);
}
function Bi(e, t) {
  Oc(e, t);
  var n = sn(t.value), r = t.type;
  if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ji(e, t.type, n) : t.hasOwnProperty("defaultValue") && ji(e, t.type, sn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Xs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
      return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ji(e, t, n) {
  (t !== "number" || eo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xr = Array.isArray;
function Gn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++)
      t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sn(n), t = null, l = 0; l < e.length; l++) {
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
    throw Error(x(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ys(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null)
        throw Error(x(92));
      if (xr(n)) {
        if (1 < n.length)
          throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: sn(n) };
}
function Uc(e, t) {
  var n = sn(t.value), r = sn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function bs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Lc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var kl, Pc = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = t;
  else {
    for (kl = kl || document.createElement("div"), kl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kl.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; t.firstChild; )
      e.appendChild(t.firstChild);
  }
});
function Zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
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
}, Np = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function(e) {
  Np.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Dr[t] = Dr[e];
  });
});
function zc(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dr.hasOwnProperty(e) && Dr[e] ? ("" + t).trim() : t + "px";
}
function Fc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = zc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
}
var Dp = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Wi(e, t) {
  if (t) {
    if (Dp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null)
        throw Error(x(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object")
      throw Error(x(62));
  }
}
function Gi(e, t) {
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
var Ki = null;
function Zu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ji = null, Kn = null, Jn = null;
function _s(e) {
  if (e = dl(e)) {
    if (typeof Ji != "function")
      throw Error(x(280));
    var t = e.stateNode;
    t && (t = Uo(t), Ji(e.stateNode, e.type, t));
  }
}
function Bc(e) {
  Kn ? Jn ? Jn.push(e) : Jn = [e] : Kn = e;
}
function jc() {
  if (Kn) {
    var e = Kn, t = Jn;
    if (Jn = Kn = null, _s(e), t)
      for (e = 0; e < t.length; e++)
        _s(t[e]);
  }
}
function Qc(e, t) {
  return e(t);
}
function Zc() {
}
var ri = !1;
function Wc(e, t, n) {
  if (ri)
    return e(t, n);
  ri = !0;
  try {
    return Qc(e, t, n);
  } finally {
    ri = !1, (Kn !== null || Jn !== null) && (Zc(), jc());
  }
}
function Wr(e, t) {
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
    throw Error(x(231, t, typeof n));
  return n;
}
var Hi = !1;
if (Rt)
  try {
    var Ar = {};
    Object.defineProperty(Ar, "passive", { get: function() {
      Hi = !0;
    } }), window.addEventListener("test", Ar, Ar), window.removeEventListener("test", Ar, Ar);
  } catch {
    Hi = !1;
  }
function Rp(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (f) {
    this.onError(f);
  }
}
var Rr = !1, to = null, no = !1, Xi = null, Tp = { onError: function(e) {
  Rr = !0, to = e;
} };
function Ip(e, t, n, r, l, o, i, u, s) {
  Rr = !1, to = null, Rp.apply(Tp, arguments);
}
function Op(e, t, n, r, l, o, i, u, s) {
  if (Ip.apply(this, arguments), Rr) {
    if (Rr) {
      var a = to;
      Rr = !1, to = null;
    } else
      throw Error(x(198));
    no || (no = !0, Xi = a);
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
function Gc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
      return t.dehydrated;
  }
  return null;
}
function $s(e) {
  if (Cn(e) !== e)
    throw Error(x(188));
}
function Up(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Cn(e), t === null)
      throw Error(x(188));
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
          return $s(l), e;
        if (o === r)
          return $s(l), t;
        o = o.sibling;
      }
      throw Error(x(188));
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
          throw Error(x(189));
      }
    }
    if (n.alternate !== r)
      throw Error(x(190));
  }
  if (n.tag !== 3)
    throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Kc(e) {
  return e = Up(e), e !== null ? Jc(e) : null;
}
function Jc(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var t = Jc(e);
    if (t !== null)
      return t;
    e = e.sibling;
  }
  return null;
}
var Hc = Je.unstable_scheduleCallback, ea = Je.unstable_cancelCallback, Lp = Je.unstable_shouldYield, Pp = Je.unstable_requestPaint, ue = Je.unstable_now, zp = Je.unstable_getCurrentPriorityLevel, Wu = Je.unstable_ImmediatePriority, Xc = Je.unstable_UserBlockingPriority, ro = Je.unstable_NormalPriority, Fp = Je.unstable_LowPriority, Yc = Je.unstable_IdlePriority, Ro = null, Vt = null;
function Bp(e) {
  if (Vt && typeof Vt.onCommitFiberRoot == "function")
    try {
      Vt.onCommitFiberRoot(Ro, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var ht = Math.clz32 ? Math.clz32 : Zp, jp = Math.log, Qp = Math.LN2;
function Zp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (jp(e) / Qp | 0) | 0;
}
var El = 64, xl = 4194304;
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
function lo(e, t) {
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
function Wp(e, t) {
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
function Gp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - ht(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Wp(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Yi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function bc() {
  var e = El;
  return El <<= 1, !(El & 4194240) && (El = 64), e;
}
function li(e) {
  for (var t = [], n = 0; 31 > n; n++)
    t.push(e);
  return t;
}
function al(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ht(t), e[t] = n;
}
function Kp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ht(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function Gu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var b = 0;
function _c(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var $c, Ku, ed, td, nd, bi = !1, Cl = [], $t = null, en = null, tn = null, Gr = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), Ht = [], Jp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ta(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      $t = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      Gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = dl(t), t !== null && Ku(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Hp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return $t = yr($t, e, t, n, r, l), !0;
    case "dragenter":
      return en = yr(en, e, t, n, r, l), !0;
    case "mouseover":
      return tn = yr(tn, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Gr.set(o, yr(Gr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Kr.set(o, yr(Kr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function rd(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Gc(n), t !== null) {
          e.blockedOn = t, nd(e.priority, function() {
            ed(n);
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
function Zl(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ki = r, n.target.dispatchEvent(r), Ki = null;
    } else
      return t = dl(n), t !== null && Ku(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function na(e, t, n) {
  Zl(e) && n.delete(t);
}
function Xp() {
  bi = !1, $t !== null && Zl($t) && ($t = null), en !== null && Zl(en) && (en = null), tn !== null && Zl(tn) && (tn = null), Gr.forEach(na), Kr.forEach(na);
}
function qr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, bi || (bi = !0, Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Xp)));
}
function Jr(e) {
  function t(l) {
    return qr(l, e);
  }
  if (0 < Cl.length) {
    qr(Cl[0], e);
    for (var n = 1; n < Cl.length; n++) {
      var r = Cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for ($t !== null && qr($t, e), en !== null && qr(en, e), tn !== null && qr(tn, e), Gr.forEach(t), Kr.forEach(t), n = 0; n < Ht.length; n++)
    r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && (n = Ht[0], n.blockedOn === null); )
    rd(n), n.blockedOn === null && Ht.shift();
}
var Hn = Pt.ReactCurrentBatchConfig, oo = !0;
function Yp(e, t, n, r) {
  var l = b, o = Hn.transition;
  Hn.transition = null;
  try {
    b = 1, Ju(e, t, n, r);
  } finally {
    b = l, Hn.transition = o;
  }
}
function bp(e, t, n, r) {
  var l = b, o = Hn.transition;
  Hn.transition = null;
  try {
    b = 4, Ju(e, t, n, r);
  } finally {
    b = l, Hn.transition = o;
  }
}
function Ju(e, t, n, r) {
  if (oo) {
    var l = _i(e, t, n, r);
    if (l === null)
      hi(e, t, r, io, n), ta(e, r);
    else if (Hp(l, e, t, n, r))
      r.stopPropagation();
    else if (ta(e, r), t & 4 && -1 < Jp.indexOf(e)) {
      for (; l !== null; ) {
        var o = dl(l);
        if (o !== null && $c(o), o = _i(e, t, n, r), o === null && hi(e, t, r, io, n), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      hi(e, t, r, null, n);
  }
}
var io = null;
function _i(e, t, n, r) {
  if (io = null, e = Zu(r), e = vn(e), e !== null)
    if (t = Cn(e), t === null)
      e = null;
    else if (n = t.tag, n === 13) {
      if (e = Gc(t), e !== null)
        return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else
      t !== e && (e = null);
  return io = e, null;
}
function ld(e) {
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
      switch (zp()) {
        case Wu:
          return 1;
        case Xc:
          return 4;
        case ro:
        case Fp:
          return 16;
        case Yc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bt = null, Hu = null, Wl = null;
function od() {
  if (Wl)
    return Wl;
  var e, t = Hu, n = t.length, r, l = "value" in bt ? bt.value : bt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++)
    ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
    ;
  return Wl = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Gl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ml() {
  return !0;
}
function ra() {
  return !1;
}
function Xe(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ml : ra, this.isPropagationStopped = ra, this;
  }
  return oe(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ml);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ml);
  }, persist: function() {
  }, isPersistent: Ml }), t;
}
var ur = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Xu = Xe(ur), cl = oe({}, ur, { view: 0, detail: 0 }), _p = Xe(cl), oi, ii, Sr, To = oe({}, cl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (oi = e.screenX - Sr.screenX, ii = e.screenY - Sr.screenY) : ii = oi = 0, Sr = e), oi);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ii;
} }), la = Xe(To), $p = oe({}, To, { dataTransfer: 0 }), eh = Xe($p), th = oe({}, cl, { relatedTarget: 0 }), ui = Xe(th), nh = oe({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rh = Xe(nh), lh = oe({}, ur, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), oh = Xe(lh), ih = oe({}, ur, { data: 0 }), oa = Xe(ih), uh = {
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
}, sh = {
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
}, ah = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ch(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ah[e]) ? !!t[e] : !1;
}
function Yu() {
  return ch;
}
var dh = oe({}, cl, { key: function(e) {
  if (e.key) {
    var t = uh[e.key] || e.key;
    if (t !== "Unidentified")
      return t;
  }
  return e.type === "keypress" ? (e = Gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sh[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yu, charCode: function(e) {
  return e.type === "keypress" ? Gl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), fh = Xe(dh), ph = oe({}, To, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ia = Xe(ph), hh = oe({}, cl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yu }), mh = Xe(hh), vh = oe({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gh = Xe(vh), Ah = oe({}, To, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), yh = Xe(Ah), qh = [9, 13, 27, 32], bu = Rt && "CompositionEvent" in window, Tr = null;
Rt && "documentMode" in document && (Tr = document.documentMode);
var Sh = Rt && "TextEvent" in window && !Tr, id = Rt && (!bu || Tr && 8 < Tr && 11 >= Tr), ua = " ", sa = !1;
function ud(e, t) {
  switch (e) {
    case "keyup":
      return qh.indexOf(t.keyCode) !== -1;
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
function sd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function wh(e, t) {
  switch (e) {
    case "compositionend":
      return sd(t);
    case "keypress":
      return t.which !== 32 ? null : (sa = !0, ua);
    case "textInput":
      return e = t.data, e === ua && sa ? null : e;
    default:
      return null;
  }
}
function Vh(e, t) {
  if (Un)
    return e === "compositionend" || !bu && ud(e, t) ? (e = od(), Wl = Hu = bt = null, Un = !1, e) : null;
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
      return id && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var kh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function aa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!kh[e.type] : t === "textarea";
}
function ad(e, t, n, r) {
  Bc(r), t = uo(t, "onChange"), 0 < t.length && (n = new Xu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ir = null, Hr = null;
function Eh(e) {
  qd(e, 0);
}
function Io(e) {
  var t = zn(e);
  if (Ic(t))
    return e;
}
function xh(e, t) {
  if (e === "change")
    return t;
}
var cd = !1;
if (Rt) {
  var si;
  if (Rt) {
    var ai = "oninput" in document;
    if (!ai) {
      var ca = document.createElement("div");
      ca.setAttribute("oninput", "return;"), ai = typeof ca.oninput == "function";
    }
    si = ai;
  } else
    si = !1;
  cd = si && (!document.documentMode || 9 < document.documentMode);
}
function da() {
  Ir && (Ir.detachEvent("onpropertychange", dd), Hr = Ir = null);
}
function dd(e) {
  if (e.propertyName === "value" && Io(Hr)) {
    var t = [];
    ad(t, Hr, e, Zu(e)), Wc(Eh, t);
  }
}
function Ch(e, t, n) {
  e === "focusin" ? (da(), Ir = t, Hr = n, Ir.attachEvent("onpropertychange", dd)) : e === "focusout" && da();
}
function Mh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Io(Hr);
}
function Nh(e, t) {
  if (e === "click")
    return Io(t);
}
function Dh(e, t) {
  if (e === "input" || e === "change")
    return Io(t);
}
function Rh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var vt = typeof Object.is == "function" ? Object.is : Rh;
function Xr(e, t) {
  if (vt(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Oi.call(t, l) || !vt(e[l], t[l]))
      return !1;
  }
  return !0;
}
function fa(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function pa(e, t) {
  var n = fa(e);
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
    n = fa(n);
  }
}
function fd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function pd() {
  for (var e = window, t = eo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n)
      e = t.contentWindow;
    else
      break;
    t = eo(e.document);
  }
  return t;
}
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Th(e) {
  var t = pd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && fd(n.ownerDocument.documentElement, n)) {
    if (r !== null && _u(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
        n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = pa(n, o);
        var i = pa(
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
var Ih = Rt && "documentMode" in document && 11 >= document.documentMode, Ln = null, $i = null, Or = null, eu = !1;
function ha(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  eu || Ln == null || Ln !== eo(r) || (r = Ln, "selectionStart" in r && _u(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Or && Xr(Or, r) || (Or = r, r = uo($i, "onSelect"), 0 < r.length && (t = new Xu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Ln)));
}
function Nl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Pn = { animationend: Nl("Animation", "AnimationEnd"), animationiteration: Nl("Animation", "AnimationIteration"), animationstart: Nl("Animation", "AnimationStart"), transitionend: Nl("Transition", "TransitionEnd") }, ci = {}, hd = {};
Rt && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete Pn.animationend.animation, delete Pn.animationiteration.animation, delete Pn.animationstart.animation), "TransitionEvent" in window || delete Pn.transitionend.transition);
function Oo(e) {
  if (ci[e])
    return ci[e];
  if (!Pn[e])
    return e;
  var t = Pn[e], n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in hd)
      return ci[e] = t[n];
  return e;
}
var md = Oo("animationend"), vd = Oo("animationiteration"), gd = Oo("animationstart"), Ad = Oo("transitionend"), yd = /* @__PURE__ */ new Map(), ma = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(e, t) {
  yd.set(e, t), xn(t, [e]);
}
for (var di = 0; di < ma.length; di++) {
  var fi = ma[di], Oh = fi.toLowerCase(), Uh = fi[0].toUpperCase() + fi.slice(1);
  cn(Oh, "on" + Uh);
}
cn(md, "onAnimationEnd");
cn(vd, "onAnimationIteration");
cn(gd, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Ad, "onTransitionEnd");
_n("onMouseEnter", ["mouseout", "mouseover"]);
_n("onMouseLeave", ["mouseout", "mouseover"]);
_n("onPointerEnter", ["pointerout", "pointerover"]);
_n("onPointerLeave", ["pointerout", "pointerover"]);
xn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
xn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
xn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
xn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
xn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));
function va(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Op(r, t, void 0, e), e.currentTarget = null;
}
function qd(e, t) {
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
  if (no)
    throw e = Xi, no = !1, Xi = null, e;
}
function ee(e, t) {
  var n = t[ou];
  n === void 0 && (n = t[ou] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Sd(t, e, 2, !1), n.add(r));
}
function pi(e, t, n) {
  var r = 0;
  t && (r |= 4), Sd(n, e, r, t);
}
var Dl = "_reactListening" + Math.random().toString(36).slice(2);
function Yr(e) {
  if (!e[Dl]) {
    e[Dl] = !0, Mc.forEach(function(n) {
      n !== "selectionchange" && (Lh.has(n) || pi(n, !1, e), pi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Dl] || (t[Dl] = !0, pi("selectionchange", !1, t));
  }
}
function Sd(e, t, n, r) {
  switch (ld(t)) {
    case 1:
      var l = Yp;
      break;
    case 4:
      l = bp;
      break;
    default:
      l = Ju;
  }
  n = l.bind(null, t, n, e), l = void 0, !Hi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
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
  Wc(function() {
    var a = o, f = Zu(n), d = [];
    e: {
      var v = yd.get(e);
      if (v !== void 0) {
        var q = Xu, w = e;
        switch (e) {
          case "keypress":
            if (Gl(n) === 0)
              break e;
          case "keydown":
          case "keyup":
            q = fh;
            break;
          case "focusin":
            w = "focus", q = ui;
            break;
          case "focusout":
            w = "blur", q = ui;
            break;
          case "beforeblur":
          case "afterblur":
            q = ui;
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
            q = la;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            q = eh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            q = mh;
            break;
          case md:
          case vd:
          case gd:
            q = rh;
            break;
          case Ad:
            q = gh;
            break;
          case "scroll":
            q = _p;
            break;
          case "wheel":
            q = yh;
            break;
          case "copy":
          case "cut":
          case "paste":
            q = oh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            q = ia;
        }
        var A = (t & 4) !== 0, V = !A && e === "scroll", p = A ? v !== null ? v + "Capture" : null : v;
        A = [];
        for (var c = a, m; c !== null; ) {
          m = c;
          var S = m.stateNode;
          if (m.tag === 5 && S !== null && (m = S, p !== null && (S = Wr(c, p), S != null && A.push(br(c, S, m)))), V)
            break;
          c = c.return;
        }
        0 < A.length && (v = new q(v, w, null, n, f), d.push({ event: v, listeners: A }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", v && n !== Ki && (w = n.relatedTarget || n.fromElement) && (vn(w) || w[Tt]))
          break e;
        if ((q || v) && (v = f.window === f ? f : (v = f.ownerDocument) ? v.defaultView || v.parentWindow : window, q ? (w = n.relatedTarget || n.toElement, q = a, w = w ? vn(w) : null, w !== null && (V = Cn(w), w !== V || w.tag !== 5 && w.tag !== 6) && (w = null)) : (q = null, w = a), q !== w)) {
          if (A = la, S = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (A = ia, S = "onPointerLeave", p = "onPointerEnter", c = "pointer"), V = q == null ? v : zn(q), m = w == null ? v : zn(w), v = new A(S, c + "leave", q, n, f), v.target = V, v.relatedTarget = m, S = null, vn(f) === a && (A = new A(p, c + "enter", w, n, f), A.target = m, A.relatedTarget = V, S = A), V = S, q && w)
            t: {
              for (A = q, p = w, c = 0, m = A; m; m = Rn(m))
                c++;
              for (m = 0, S = p; S; S = Rn(S))
                m++;
              for (; 0 < c - m; )
                A = Rn(A), c--;
              for (; 0 < m - c; )
                p = Rn(p), m--;
              for (; c--; ) {
                if (A === p || p !== null && A === p.alternate)
                  break t;
                A = Rn(A), p = Rn(p);
              }
              A = null;
            }
          else
            A = null;
          q !== null && ga(d, v, q, A, !1), w !== null && V !== null && ga(d, V, w, A, !0);
        }
      }
      e: {
        if (v = a ? zn(a) : window, q = v.nodeName && v.nodeName.toLowerCase(), q === "select" || q === "input" && v.type === "file")
          var E = xh;
        else if (aa(v))
          if (cd)
            E = Dh;
          else {
            E = Mh;
            var M = Ch;
          }
        else
          (q = v.nodeName) && q.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = Nh);
        if (E && (E = E(e, a))) {
          ad(d, E, n, f);
          break e;
        }
        M && M(e, v, a), e === "focusout" && (M = v._wrapperState) && M.controlled && v.type === "number" && ji(v, "number", v.value);
      }
      switch (M = a ? zn(a) : window, e) {
        case "focusin":
          (aa(M) || M.contentEditable === "true") && (Ln = M, $i = a, Or = null);
          break;
        case "focusout":
          Or = $i = Ln = null;
          break;
        case "mousedown":
          eu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          eu = !1, ha(d, n, f);
          break;
        case "selectionchange":
          if (Ih)
            break;
        case "keydown":
        case "keyup":
          ha(d, n, f);
      }
      var k;
      if (bu)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Un ? ud(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (id && n.locale !== "ko" && (Un || C !== "onCompositionStart" ? C === "onCompositionEnd" && Un && (k = od()) : (bt = f, Hu = "value" in bt ? bt.value : bt.textContent, Un = !0)), M = uo(a, C), 0 < M.length && (C = new oa(C, e, null, n, f), d.push({ event: C, listeners: M }), k ? C.data = k : (k = sd(n), k !== null && (C.data = k)))), (k = Sh ? wh(e, n) : Vh(e, n)) && (a = uo(a, "onBeforeInput"), 0 < a.length && (f = new oa("onBeforeInput", "beforeinput", null, n, f), d.push({ event: f, listeners: a }), f.data = k));
    }
    qd(d, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function uo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Wr(e, n), o != null && r.unshift(br(e, o, l)), o = Wr(e, t), o != null && r.push(br(e, o, l))), e = e.return;
  }
  return r;
}
function Rn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ga(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && a !== null && (u = a, l ? (s = Wr(n, o), s != null && i.unshift(br(n, s, u))) : l || (s = Wr(n, o), s != null && i.push(br(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ph = /\r\n?/g, zh = /\u0000|\uFFFD/g;
function Aa(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ph, `
`).replace(zh, "");
}
function Rl(e, t, n) {
  if (t = Aa(t), Aa(e) !== t && n)
    throw Error(x(425));
}
function so() {
}
var tu = null, nu = null;
function ru(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var lu = typeof setTimeout == "function" ? setTimeout : void 0, Fh = typeof clearTimeout == "function" ? clearTimeout : void 0, ya = typeof Promise == "function" ? Promise : void 0, Bh = typeof queueMicrotask == "function" ? queueMicrotask : typeof ya < "u" ? function(e) {
  return ya.resolve(null).then(e).catch(jh);
} : lu;
function jh(e) {
  setTimeout(function() {
    throw e;
  });
}
function mi(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8)
      if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Jr(t);
          return;
        }
        r--;
      } else
        n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Jr(t);
}
function nn(e) {
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
function qa(e) {
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
var sr = Math.random().toString(36).slice(2), St = "__reactFiber$" + sr, _r = "__reactProps$" + sr, Tt = "__reactContainer$" + sr, ou = "__reactEvents$" + sr, Qh = "__reactListeners$" + sr, Zh = "__reactHandles$" + sr;
function vn(e) {
  var t = e[St];
  if (t)
    return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Tt] || n[St]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = qa(e); e !== null; ) {
          if (n = e[St])
            return n;
          e = qa(e);
        }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function dl(e) {
  return e = e[St] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(x(33));
}
function Uo(e) {
  return e[_r] || null;
}
var iu = [], Fn = -1;
function dn(e) {
  return { current: e };
}
function te(e) {
  0 > Fn || (e.current = iu[Fn], iu[Fn] = null, Fn--);
}
function $(e, t) {
  Fn++, iu[Fn] = e.current, e.current = t;
}
var an = {}, Me = dn(an), ze = dn(!1), Sn = an;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n)
    return an;
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
function ao() {
  te(ze), te(Me);
}
function Sa(e, t, n) {
  if (Me.current !== an)
    throw Error(x(168));
  $(Me, t), $(ze, n);
}
function wd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function")
    return n;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in t))
      throw Error(x(108, Cp(e) || "Unknown", l));
  return oe({}, n, r);
}
function co(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, Sn = Me.current, $(Me, e), $(ze, ze.current), !0;
}
function wa(e, t, n) {
  var r = e.stateNode;
  if (!r)
    throw Error(x(169));
  n ? (e = wd(e, t, Sn), r.__reactInternalMemoizedMergedChildContext = e, te(ze), te(Me), $(Me, e)) : te(ze), $(ze, n);
}
var Ct = null, Lo = !1, vi = !1;
function Vd(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
function Wh(e) {
  Lo = !0, Vd(e);
}
function fn() {
  if (!vi && Ct !== null) {
    vi = !0;
    var e = 0, t = b;
    try {
      var n = Ct;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ct = null, Lo = !1;
    } catch (l) {
      throw Ct !== null && (Ct = Ct.slice(e + 1)), Hc(Wu, fn), l;
    } finally {
      b = t, vi = !1;
    }
  }
  return null;
}
var Bn = [], jn = 0, fo = null, po = 0, et = [], tt = 0, wn = null, Mt = 1, Nt = "";
function pn(e, t) {
  Bn[jn++] = po, Bn[jn++] = fo, fo = e, po = t;
}
function kd(e, t, n) {
  et[tt++] = Mt, et[tt++] = Nt, et[tt++] = wn, wn = e;
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
function $u(e) {
  e.return !== null && (pn(e, 1), kd(e, 1, 0));
}
function es(e) {
  for (; e === fo; )
    fo = Bn[--jn], Bn[jn] = null, po = Bn[--jn], Bn[jn] = null;
  for (; e === wn; )
    wn = et[--tt], et[tt] = null, Nt = et[--tt], et[tt] = null, Mt = et[--tt], et[tt] = null;
}
var Ke = null, Ge = null, ne = !1, pt = null;
function Ed(e, t) {
  var n = rt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Va(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, Ge = nn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, Ge = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = wn !== null ? { id: Mt, overflow: Nt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ke = e, Ge = null, !0) : !1;
    default:
      return !1;
  }
}
function uu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function su(e) {
  if (ne) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!Va(e, t)) {
        if (uu(e))
          throw Error(x(418));
        t = nn(n.nextSibling);
        var r = Ke;
        t && Va(e, t) ? Ed(r, n) : (e.flags = e.flags & -4097 | 2, ne = !1, Ke = e);
      }
    } else {
      if (uu(e))
        throw Error(x(418));
      e.flags = e.flags & -4097 | 2, ne = !1, Ke = e;
    }
  }
}
function ka(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ke = e;
}
function Tl(e) {
  if (e !== Ke)
    return !1;
  if (!ne)
    return ka(e), ne = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ru(e.type, e.memoizedProps)), t && (t = Ge)) {
    if (uu(e))
      throw xd(), Error(x(418));
    for (; t; )
      Ed(e, t), t = nn(t.nextSibling);
  }
  if (ka(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = nn(e.nextSibling);
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
    Ge = Ke ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function xd() {
  for (var e = Ge; e; )
    e = nn(e.nextSibling);
}
function er() {
  Ge = Ke = null, ne = !1;
}
function ts(e) {
  pt === null ? pt = [e] : pt.push(e);
}
var Gh = Pt.ReactCurrentBatchConfig;
function dt(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ho = dn(null), mo = null, Qn = null, ns = null;
function rs() {
  ns = Qn = mo = null;
}
function ls(e) {
  var t = ho.current;
  te(ho), e._currentValue = t;
}
function au(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
      break;
    e = e.return;
  }
}
function Xn(e, t) {
  mo = e, ns = Qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function ot(e) {
  var t = e._currentValue;
  if (ns !== e)
    if (e = { context: e, memoizedValue: t, next: null }, Qn === null) {
      if (mo === null)
        throw Error(x(308));
      Qn = e, mo.dependencies = { lanes: 0, firstContext: e };
    } else
      Qn = Qn.next = e;
  return t;
}
var gn = null;
function os(e) {
  gn === null ? gn = [e] : gn.push(e);
}
function Cd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, os(t)) : (n.next = l.next, l.next = n), t.interleaved = n, It(e, r);
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Kt = !1;
function is(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Md(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Dt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, G & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, It(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, os(r)) : (t.next = l.next, l.next = t), r.interleaved = t, It(e, n);
}
function Kl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Gu(e, n);
  }
}
function Ea(e, t) {
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
  Kt = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, i === null ? o = a : i.next = a, i = s;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, u = f.lastBaseUpdate, u !== i && (u === null ? f.firstBaseUpdate = a : u.next = a, f.lastBaseUpdate = s));
  }
  if (o !== null) {
    var d = l.baseState;
    i = 0, f = a = s = null, u = o;
    do {
      var v = u.lane, q = u.eventTime;
      if ((r & v) === v) {
        f !== null && (f = f.next = {
          eventTime: q,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, A = u;
          switch (v = t, q = n, A.tag) {
            case 1:
              if (w = A.payload, typeof w == "function") {
                d = w.call(q, d, v);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = A.payload, v = typeof w == "function" ? w.call(q, d, v) : w, v == null)
                break e;
              d = oe({}, d, v);
              break e;
            case 2:
              Kt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [u] : v.push(u));
      } else
        q = { eventTime: q, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, f === null ? (a = f = q, s = d) : f = f.next = q, i |= v;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        v = u, u = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
      }
    } while (!0);
    if (f === null && (s = d), l.baseState = s, l.firstBaseUpdate = a, l.lastBaseUpdate = f, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else
      o === null && (l.shared.lanes = 0);
    kn |= i, e.lanes = i, e.memoizedState = d;
  }
}
function xa(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function")
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var Nd = new Cc.Component().refs;
function cu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Po = { isMounted: function(e) {
  return (e = e._reactInternals) ? Cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), l = on(e), o = Dt(r, l);
  o.payload = t, n != null && (o.callback = n), t = rn(e, o, l), t !== null && (mt(t, e, l, r), Kl(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Re(), l = on(e), o = Dt(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = rn(e, o, l), t !== null && (mt(t, e, l, r), Kl(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Re(), r = on(e), l = Dt(n, r);
  l.tag = 2, t != null && (l.callback = t), t = rn(e, l, r), t !== null && (mt(t, e, r, n), Kl(t, e, r));
} };
function Ca(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Xr(n, r) || !Xr(l, o) : !0;
}
function Dd(e, t, n) {
  var r = !1, l = an, o = t.contextType;
  return typeof o == "object" && o !== null ? o = ot(o) : (l = Fe(t) ? Sn : Me.current, r = t.contextTypes, o = (r = r != null) ? $n(e, l) : an), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Po, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Ma(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Po.enqueueReplaceState(t, t.state, null);
}
function du(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = Nd, is(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = ot(o) : (o = Fe(t) ? Sn : Me.current, l.context = $n(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (cu(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Po.enqueueReplaceState(l, l.state, null), vo(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1)
          throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r)
        throw Error(x(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        u === Nd && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string")
      throw Error(x(284));
    if (!n._owner)
      throw Error(x(290, e));
  }
  return e;
}
function Il(e, t) {
  throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Na(e) {
  var t = e._init;
  return t(e._payload);
}
function Rd(e) {
  function t(p, c) {
    if (e) {
      var m = p.deletions;
      m === null ? (p.deletions = [c], p.flags |= 16) : m.push(c);
    }
  }
  function n(p, c) {
    if (!e)
      return null;
    for (; c !== null; )
      t(p, c), c = c.sibling;
    return null;
  }
  function r(p, c) {
    for (p = /* @__PURE__ */ new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
    return p;
  }
  function l(p, c) {
    return p = un(p, c), p.index = 0, p.sibling = null, p;
  }
  function o(p, c, m) {
    return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < c ? (p.flags |= 2, c) : m) : (p.flags |= 2, c)) : (p.flags |= 1048576, c);
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, c, m, S) {
    return c === null || c.tag !== 6 ? (c = Vi(m, p.mode, S), c.return = p, c) : (c = l(c, m), c.return = p, c);
  }
  function s(p, c, m, S) {
    var E = m.type;
    return E === On ? f(p, c, m.props.children, S, m.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Gt && Na(E) === c.type) ? (S = l(c, m.props), S.ref = wr(p, c, m), S.return = p, S) : (S = _l(m.type, m.key, m.props, null, p.mode, S), S.ref = wr(p, c, m), S.return = p, S);
  }
  function a(p, c, m, S) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = ki(m, p.mode, S), c.return = p, c) : (c = l(c, m.children || []), c.return = p, c);
  }
  function f(p, c, m, S, E) {
    return c === null || c.tag !== 7 ? (c = qn(m, p.mode, S, E), c.return = p, c) : (c = l(c, m), c.return = p, c);
  }
  function d(p, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number")
      return c = Vi("" + c, p.mode, m), c.return = p, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case wl:
          return m = _l(c.type, c.key, c.props, null, p.mode, m), m.ref = wr(p, null, c), m.return = p, m;
        case In:
          return c = ki(c, p.mode, m), c.return = p, c;
        case Gt:
          var S = c._init;
          return d(p, S(c._payload), m);
      }
      if (xr(c) || gr(c))
        return c = qn(c, p.mode, m, null), c.return = p, c;
      Il(p, c);
    }
    return null;
  }
  function v(p, c, m, S) {
    var E = c !== null ? c.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number")
      return E !== null ? null : u(p, c, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case wl:
          return m.key === E ? s(p, c, m, S) : null;
        case In:
          return m.key === E ? a(p, c, m, S) : null;
        case Gt:
          return E = m._init, v(
            p,
            c,
            E(m._payload),
            S
          );
      }
      if (xr(m) || gr(m))
        return E !== null ? null : f(p, c, m, S, null);
      Il(p, m);
    }
    return null;
  }
  function q(p, c, m, S, E) {
    if (typeof S == "string" && S !== "" || typeof S == "number")
      return p = p.get(m) || null, u(c, p, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case wl:
          return p = p.get(S.key === null ? m : S.key) || null, s(c, p, S, E);
        case In:
          return p = p.get(S.key === null ? m : S.key) || null, a(c, p, S, E);
        case Gt:
          var M = S._init;
          return q(p, c, m, M(S._payload), E);
      }
      if (xr(S) || gr(S))
        return p = p.get(m) || null, f(c, p, S, E, null);
      Il(c, S);
    }
    return null;
  }
  function w(p, c, m, S) {
    for (var E = null, M = null, k = c, C = c = 0, F = null; k !== null && C < m.length; C++) {
      k.index > C ? (F = k, k = null) : F = k.sibling;
      var I = v(p, k, m[C], S);
      if (I === null) {
        k === null && (k = F);
        break;
      }
      e && k && I.alternate === null && t(p, k), c = o(I, c, C), M === null ? E = I : M.sibling = I, M = I, k = F;
    }
    if (C === m.length)
      return n(p, k), ne && pn(p, C), E;
    if (k === null) {
      for (; C < m.length; C++)
        k = d(p, m[C], S), k !== null && (c = o(k, c, C), M === null ? E = k : M.sibling = k, M = k);
      return ne && pn(p, C), E;
    }
    for (k = r(p, k); C < m.length; C++)
      F = q(k, p, C, m[C], S), F !== null && (e && F.alternate !== null && k.delete(F.key === null ? C : F.key), c = o(F, c, C), M === null ? E = F : M.sibling = F, M = F);
    return e && k.forEach(function(K) {
      return t(p, K);
    }), ne && pn(p, C), E;
  }
  function A(p, c, m, S) {
    var E = gr(m);
    if (typeof E != "function")
      throw Error(x(150));
    if (m = E.call(m), m == null)
      throw Error(x(151));
    for (var M = E = null, k = c, C = c = 0, F = null, I = m.next(); k !== null && !I.done; C++, I = m.next()) {
      k.index > C ? (F = k, k = null) : F = k.sibling;
      var K = v(p, k, I.value, S);
      if (K === null) {
        k === null && (k = F);
        break;
      }
      e && k && K.alternate === null && t(p, k), c = o(K, c, C), M === null ? E = K : M.sibling = K, M = K, k = F;
    }
    if (I.done)
      return n(
        p,
        k
      ), ne && pn(p, C), E;
    if (k === null) {
      for (; !I.done; C++, I = m.next())
        I = d(p, I.value, S), I !== null && (c = o(I, c, C), M === null ? E = I : M.sibling = I, M = I);
      return ne && pn(p, C), E;
    }
    for (k = r(p, k); !I.done; C++, I = m.next())
      I = q(k, p, C, I.value, S), I !== null && (e && I.alternate !== null && k.delete(I.key === null ? C : I.key), c = o(I, c, C), M === null ? E = I : M.sibling = I, M = I);
    return e && k.forEach(function(ye) {
      return t(p, ye);
    }), ne && pn(p, C), E;
  }
  function V(p, c, m, S) {
    if (typeof m == "object" && m !== null && m.type === On && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case wl:
          e: {
            for (var E = m.key, M = c; M !== null; ) {
              if (M.key === E) {
                if (E = m.type, E === On) {
                  if (M.tag === 7) {
                    n(p, M.sibling), c = l(M, m.props.children), c.return = p, p = c;
                    break e;
                  }
                } else if (M.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Gt && Na(E) === M.type) {
                  n(p, M.sibling), c = l(M, m.props), c.ref = wr(p, M, m), c.return = p, p = c;
                  break e;
                }
                n(p, M);
                break;
              } else
                t(p, M);
              M = M.sibling;
            }
            m.type === On ? (c = qn(m.props.children, p.mode, S, m.key), c.return = p, p = c) : (S = _l(m.type, m.key, m.props, null, p.mode, S), S.ref = wr(p, c, m), S.return = p, p = S);
          }
          return i(p);
        case In:
          e: {
            for (M = m.key; c !== null; ) {
              if (c.key === M)
                if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                  n(p, c.sibling), c = l(c, m.children || []), c.return = p, p = c;
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else
                t(p, c);
              c = c.sibling;
            }
            c = ki(m, p.mode, S), c.return = p, p = c;
          }
          return i(p);
        case Gt:
          return M = m._init, V(p, c, M(m._payload), S);
      }
      if (xr(m))
        return w(p, c, m, S);
      if (gr(m))
        return A(p, c, m, S);
      Il(p, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(p, c.sibling), c = l(c, m), c.return = p, p = c) : (n(p, c), c = Vi(m, p.mode, S), c.return = p, p = c), i(p)) : n(p, c);
  }
  return V;
}
var tr = Rd(!0), Td = Rd(!1), fl = {}, kt = dn(fl), $r = dn(fl), el = dn(fl);
function An(e) {
  if (e === fl)
    throw Error(x(174));
  return e;
}
function us(e, t) {
  switch ($(el, t), $($r, e), $(kt, fl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zi(t, e);
  }
  te(kt), $(kt, t);
}
function nr() {
  te(kt), te($r), te(el);
}
function Id(e) {
  An(el.current);
  var t = An(kt.current), n = Zi(t, e.type);
  t !== n && ($($r, e), $(kt, n));
}
function ss(e) {
  $r.current === e && (te(kt), te($r));
}
var re = dn(0);
function go(e) {
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
function as() {
  for (var e = 0; e < gi.length; e++)
    gi[e]._workInProgressVersionPrimary = null;
  gi.length = 0;
}
var Jl = Pt.ReactCurrentDispatcher, Ai = Pt.ReactCurrentBatchConfig, Vn = 0, le = null, fe = null, ve = null, Ao = !1, Ur = !1, tl = 0, Kh = 0;
function Ee() {
  throw Error(x(321));
}
function cs(e, t) {
  if (t === null)
    return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n]))
      return !1;
  return !0;
}
function ds(e, t, n, r, l, o) {
  if (Vn = o, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jl.current = e === null || e.memoizedState === null ? Yh : bh, e = n(r, l), Ur) {
    o = 0;
    do {
      if (Ur = !1, tl = 0, 25 <= o)
        throw Error(x(301));
      o += 1, ve = fe = null, t.updateQueue = null, Jl.current = _h, e = n(r, l);
    } while (Ur);
  }
  if (Jl.current = yo, t = fe !== null && fe.next !== null, Vn = 0, ve = fe = le = null, Ao = !1, t)
    throw Error(x(300));
  return e;
}
function fs() {
  var e = tl !== 0;
  return tl = 0, e;
}
function qt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ve === null ? le.memoizedState = ve = e : ve = ve.next = e, ve;
}
function it() {
  if (fe === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = fe.next;
  var t = ve === null ? le.memoizedState : ve.next;
  if (t !== null)
    ve = t, fe = e;
  else {
    if (e === null)
      throw Error(x(310));
    fe = e, e = { memoizedState: fe.memoizedState, baseState: fe.baseState, baseQueue: fe.baseQueue, queue: fe.queue, next: null }, ve === null ? le.memoizedState = ve = e : ve = ve.next = e;
  }
  return ve;
}
function nl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yi(e) {
  var t = it(), n = t.queue;
  if (n === null)
    throw Error(x(311));
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
      var f = a.lane;
      if ((Vn & f) === f)
        s !== null && (s = s.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var d = {
          lane: f,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        s === null ? (u = s = d, i = r) : s = s.next = d, le.lanes |= f, kn |= f;
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? i = r : s.next = u, vt(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, le.lanes |= o, kn |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qi(e) {
  var t = it(), n = t.queue;
  if (n === null)
    throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    vt(o, t.memoizedState) || (Pe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Od() {
}
function Ud(e, t) {
  var n = le, r = it(), l = t(), o = !vt(r.memoizedState, l);
  if (o && (r.memoizedState = l, Pe = !0), r = r.queue, ps(zd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ve !== null && ve.memoizedState.tag & 1) {
    if (n.flags |= 2048, rl(9, Pd.bind(null, n, r, l, t), void 0, null), Ae === null)
      throw Error(x(349));
    Vn & 30 || Ld(n, t, l);
  }
  return l;
}
function Ld(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Pd(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Fd(t) && Bd(e);
}
function zd(e, t, n) {
  return n(function() {
    Fd(t) && Bd(e);
  });
}
function Fd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function Bd(e) {
  var t = It(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function Da(e) {
  var t = qt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nl, lastRenderedState: e }, t.queue = e, e = e.dispatch = Xh.bind(null, le, e), [t.memoizedState, e];
}
function rl(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = le.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function jd() {
  return it().memoizedState;
}
function Hl(e, t, n, r) {
  var l = qt();
  le.flags |= e, l.memoizedState = rl(1 | t, n, void 0, r === void 0 ? null : r);
}
function zo(e, t, n, r) {
  var l = it();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (fe !== null) {
    var i = fe.memoizedState;
    if (o = i.destroy, r !== null && cs(r, i.deps)) {
      l.memoizedState = rl(t, n, o, r);
      return;
    }
  }
  le.flags |= e, l.memoizedState = rl(1 | t, n, o, r);
}
function Ra(e, t) {
  return Hl(8390656, 8, e, t);
}
function ps(e, t) {
  return zo(2048, 8, e, t);
}
function Qd(e, t) {
  return zo(4, 2, e, t);
}
function Zd(e, t) {
  return zo(4, 4, e, t);
}
function Wd(e, t) {
  if (typeof t == "function")
    return e = e(), t(e), function() {
      t(null);
    };
  if (t != null)
    return e = e(), t.current = e, function() {
      t.current = null;
    };
}
function Gd(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zo(4, 4, Wd.bind(null, t, e), n);
}
function hs() {
}
function Kd(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Jd(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Hd(e, t, n) {
  return Vn & 21 ? (vt(n, t) || (n = bc(), le.lanes |= n, kn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function Jh(e, t) {
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
function Xd() {
  return it().memoizedState;
}
function Hh(e, t, n) {
  var r = on(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Yd(e))
    bd(t, n);
  else if (n = Cd(e, t, n, r), n !== null) {
    var l = Re();
    mt(n, e, r, l), _d(n, t, r);
  }
}
function Xh(e, t, n) {
  var r = on(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yd(e))
    bd(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null))
      try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, vt(u, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, os(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    n = Cd(e, t, l, r), n !== null && (l = Re(), mt(n, e, r, l), _d(n, t, r));
  }
}
function Yd(e) {
  var t = e.alternate;
  return e === le || t !== null && t === le;
}
function bd(e, t) {
  Ur = Ao = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function _d(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Gu(e, n);
  }
}
var yo = { readContext: ot, useCallback: Ee, useContext: Ee, useEffect: Ee, useImperativeHandle: Ee, useInsertionEffect: Ee, useLayoutEffect: Ee, useMemo: Ee, useReducer: Ee, useRef: Ee, useState: Ee, useDebugValue: Ee, useDeferredValue: Ee, useTransition: Ee, useMutableSource: Ee, useSyncExternalStore: Ee, useId: Ee, unstable_isNewReconciler: !1 }, Yh = { readContext: ot, useCallback: function(e, t) {
  return qt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ot, useEffect: Ra, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hl(
    4194308,
    4,
    Wd.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Hl(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Hl(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = qt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = qt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Hh.bind(null, le, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = qt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Da, useDebugValue: hs, useDeferredValue: function(e) {
  return qt().memoizedState = e;
}, useTransition: function() {
  var e = Da(!1), t = e[0];
  return e = Jh.bind(null, e[1]), qt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = le, l = qt();
  if (ne) {
    if (n === void 0)
      throw Error(x(407));
    n = n();
  } else {
    if (n = t(), Ae === null)
      throw Error(x(349));
    Vn & 30 || Ld(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Ra(zd.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, rl(9, Pd.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = qt(), t = Ae.identifierPrefix;
  if (ne) {
    var n = Nt, r = Mt;
    n = (r & ~(1 << 32 - ht(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = tl++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else
    n = Kh++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, bh = {
  readContext: ot,
  useCallback: Kd,
  useContext: ot,
  useEffect: ps,
  useImperativeHandle: Gd,
  useInsertionEffect: Qd,
  useLayoutEffect: Zd,
  useMemo: Jd,
  useReducer: yi,
  useRef: jd,
  useState: function() {
    return yi(nl);
  },
  useDebugValue: hs,
  useDeferredValue: function(e) {
    var t = it();
    return Hd(t, fe.memoizedState, e);
  },
  useTransition: function() {
    var e = yi(nl)[0], t = it().memoizedState;
    return [e, t];
  },
  useMutableSource: Od,
  useSyncExternalStore: Ud,
  useId: Xd,
  unstable_isNewReconciler: !1
}, _h = { readContext: ot, useCallback: Kd, useContext: ot, useEffect: ps, useImperativeHandle: Gd, useInsertionEffect: Qd, useLayoutEffect: Zd, useMemo: Jd, useReducer: qi, useRef: jd, useState: function() {
  return qi(nl);
}, useDebugValue: hs, useDeferredValue: function(e) {
  var t = it();
  return fe === null ? t.memoizedState = e : Hd(t, fe.memoizedState, e);
}, useTransition: function() {
  var e = qi(nl)[0], t = it().memoizedState;
  return [e, t];
}, useMutableSource: Od, useSyncExternalStore: Ud, useId: Xd, unstable_isNewReconciler: !1 };
function rr(e, t) {
  try {
    var n = "", r = t;
    do
      n += xp(r), r = r.return;
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
function fu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var $h = typeof WeakMap == "function" ? WeakMap : Map;
function $d(e, t, n) {
  n = Dt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    So || (So = !0, wu = r), fu(e, t);
  }, n;
}
function ef(e, t, n) {
  n = Dt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      fu(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    fu(e, t), typeof r != "function" && (ln === null ? ln = /* @__PURE__ */ new Set([this]) : ln.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ta(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $h();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else
    l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = pm.bind(null, e, t, n), t.then(e, e));
}
function Ia(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Oa(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Dt(-1, 1), t.tag = 2, rn(n, t, 1))), n.lanes |= 1), e);
}
var em = Pt.ReactCurrentOwner, Pe = !1;
function De(e, t, n, r) {
  t.child = e === null ? Td(t, null, n, r) : tr(t, e.child, n, r);
}
function Ua(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return Xn(t, l), r = ds(e, t, n, r, o, l), n = fs(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ot(e, t, l)) : (ne && n && $u(t), t.flags |= 1, De(e, t, r, l), t.child);
}
function La(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !ws(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, tf(e, t, o, r, l)) : (e = _l(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Xr, n(i, r) && e.ref === t.ref)
      return Ot(e, t, l);
  }
  return t.flags |= 1, e = un(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function tf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Xr(o, r) && e.ref === t.ref)
      if (Pe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (Pe = !0);
      else
        return t.lanes = e.lanes, Ot(e, t, l);
  }
  return pu(e, t, n, r, l);
}
function nf(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $(Wn, We), We |= n;
    else {
      if (!(n & 1073741824))
        return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $(Wn, We), We |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, $(Wn, We), We |= r;
    }
  else
    o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $(Wn, We), We |= r;
  return De(e, t, l, n), t.child;
}
function rf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function pu(e, t, n, r, l) {
  var o = Fe(n) ? Sn : Me.current;
  return o = $n(t, o), Xn(t, l), n = ds(e, t, n, r, o, l), r = fs(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ot(e, t, l)) : (ne && r && $u(t), t.flags |= 1, De(e, t, n, l), t.child);
}
function Pa(e, t, n, r, l) {
  if (Fe(n)) {
    var o = !0;
    co(t);
  } else
    o = !1;
  if (Xn(t, l), t.stateNode === null)
    Xl(e, t), Dd(t, n, r), du(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = ot(a) : (a = Fe(n) ? Sn : Me.current, a = $n(t, a));
    var f = n.getDerivedStateFromProps, d = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== a) && Ma(t, i, r, a), Kt = !1;
    var v = t.memoizedState;
    i.state = v, vo(t, r, i, l), s = t.memoizedState, u !== r || v !== s || ze.current || Kt ? (typeof f == "function" && (cu(t, n, f, r), s = t.memoizedState), (u = Kt || Ca(t, n, u, r, v, s, a)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = a, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Md(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : dt(t.type, u), i.props = a, d = t.pendingProps, v = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = ot(s) : (s = Fe(n) ? Sn : Me.current, s = $n(t, s));
    var q = n.getDerivedStateFromProps;
    (f = typeof q == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== d || v !== s) && Ma(t, i, r, s), Kt = !1, v = t.memoizedState, i.state = v, vo(t, r, i, l);
    var w = t.memoizedState;
    u !== d || v !== w || ze.current || Kt ? (typeof q == "function" && (cu(t, n, q, r), w = t.memoizedState), (a = Kt || Ca(t, n, a, r, v, w, s) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = s, r = a) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return hu(e, t, n, r, o, l);
}
function hu(e, t, n, r, l, o) {
  rf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i)
    return l && wa(t, n, !1), Ot(e, t, o);
  r = t.stateNode, em.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = tr(t, e.child, null, o), t.child = tr(t, null, u, o)) : De(e, t, u, o), t.memoizedState = r.state, l && wa(t, n, !0), t.child;
}
function lf(e) {
  var t = e.stateNode;
  t.pendingContext ? Sa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sa(e, t.context, !1), us(e, t.containerInfo);
}
function za(e, t, n, r, l) {
  return er(), ts(l), t.flags |= 256, De(e, t, n, r), t.child;
}
var mu = { dehydrated: null, treeContext: null, retryLane: 0 };
function vu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function of(e, t, n) {
  var r = t.pendingProps, l = re.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), $(re, l & 1), e === null)
    return su(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = jo(i, r, 0, null), e = qn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = vu(n), t.memoizedState = mu, e) : ms(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return tm(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = un(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = un(u, o) : (o = qn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? vu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = mu, r;
  }
  return o = e.child, e = o.sibling, r = un(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ms(e, t) {
  return t = jo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ol(e, t, n, r) {
  return r !== null && ts(r), tr(t, e.child, null, n), e = ms(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function tm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Si(Error(x(422))), Ol(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = jo({ mode: "visible", children: r.children }, l, 0, null), o = qn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && tr(t, e.child, null, i), t.child.memoizedState = vu(i), t.memoizedState = mu, o);
  if (!(t.mode & 1))
    return Ol(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(x(419)), r = Si(o, r, void 0), Ol(e, t, i, r);
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, It(e, l), mt(r, e, l, -1));
    }
    return Ss(), r = Si(Error(x(421))), Ol(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hm.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Ge = nn(l.nextSibling), Ke = t, ne = !0, pt = null, e !== null && (et[tt++] = Mt, et[tt++] = Nt, et[tt++] = wn, Mt = e.id, Nt = e.overflow, wn = t), t = ms(t, r.children), t.flags |= 4096, t);
}
function Fa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), au(e.return, t, n);
}
function wi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function uf(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (De(e, t, r.children, n), r = re.current, r & 2)
    r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Fa(e, n, t);
          else if (e.tag === 19)
            Fa(e, n, t);
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
          e = n.alternate, e !== null && go(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), wi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && go(e) === null) {
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
function Xl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ot(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), kn |= t.lanes, !(n & t.childLanes))
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(x(153));
  if (t.child !== null) {
    for (e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      e = e.sibling, n = n.sibling = un(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function nm(e, t, n) {
  switch (t.tag) {
    case 3:
      lf(t), er();
      break;
    case 5:
      Id(t);
      break;
    case 1:
      Fe(t.type) && co(t);
      break;
    case 4:
      us(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      $(ho, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? ($(re, re.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? of(e, t, n) : ($(re, re.current & 1), e = Ot(e, t, n), e !== null ? e.sibling : null);
      $(re, re.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r)
          return uf(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), $(re, re.current), r)
        break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, nf(e, t, n);
  }
  return Ot(e, t, n);
}
var sf, gu, af, cf;
sf = function(e, t) {
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
gu = function() {
};
af = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, An(kt.current);
    var o = null;
    switch (n) {
      case "input":
        l = Fi(e, l), r = Fi(e, r), o = [];
        break;
      case "select":
        l = oe({}, l, { value: void 0 }), r = oe({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Qi(e, l), r = Qi(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = so);
    }
    Wi(n, r);
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
cf = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vr(e, t) {
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
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function rm(e, t, n) {
  var r = t.pendingProps;
  switch (es(t), t.tag) {
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
      return xe(t), null;
    case 1:
      return Fe(t.type) && ao(), xe(t), null;
    case 3:
      return r = t.stateNode, nr(), te(ze), te(Me), as(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Tl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, pt !== null && (Eu(pt), pt = null))), gu(e, t), xe(t), null;
    case 5:
      ss(t);
      var l = An(el.current);
      if (n = t.type, e !== null && t.stateNode != null)
        af(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(x(166));
          return xe(t), null;
        }
        if (e = An(kt.current), Tl(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[St] = t, r[_r] = o, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Mr.length; l++)
                ee(Mr[l], r);
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
              Hs(r, o), ee("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, ee("invalid", r);
              break;
            case "textarea":
              Ys(r, o), ee("invalid", r);
          }
          Wi(n, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Rl(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Rl(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Qr.hasOwnProperty(i) && u != null && i === "onScroll" && ee("scroll", r);
            }
          switch (n) {
            case "input":
              Vl(r), Xs(r, o, !0);
              break;
            case "textarea":
              Vl(r), bs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = so);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Lc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[St] = t, e[_r] = r, sf(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Gi(n, r), n) {
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
                for (l = 0; l < Mr.length; l++)
                  ee(Mr[l], e);
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
                Hs(e, r), l = Fi(e, r), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = oe({}, r, { value: void 0 }), ee("invalid", e);
                break;
              case "textarea":
                Ys(e, r), l = Qi(e, r), ee("invalid", e);
                break;
              default:
                l = r;
            }
            Wi(n, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Fc(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Pc(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Zr(e, s) : typeof s == "number" && Zr(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Qr.hasOwnProperty(o) ? s != null && o === "onScroll" && ee("scroll", e) : s != null && Fu(e, o, s, i));
              }
            switch (n) {
              case "input":
                Vl(e), Xs(e, r, !1);
                break;
              case "textarea":
                Vl(e), bs(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Gn(e, !!r.multiple, o, !1) : r.defaultValue != null && Gn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = so);
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null)
        cf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null)
          throw Error(x(166));
        if (n = An(el.current), An(kt.current), Tl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (o = r.nodeValue !== n) && (e = Ke, e !== null))
            switch (e.tag) {
              case 3:
                Rl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Rl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (te(re), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ne && Ge !== null && t.mode & 1 && !(t.flags & 128))
          xd(), er(), t.flags |= 98560, o = !1;
        else if (o = Tl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(x(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(x(317));
            o[St] = t;
          } else
            er(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), o = !1;
        } else
          pt !== null && (Eu(pt), pt = null), o = !0;
        if (!o)
          return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || re.current & 1 ? he === 0 && (he = 3) : Ss())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return nr(), gu(e, t), e === null && Yr(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return ls(t.type._context), xe(t), null;
    case 17:
      return Fe(t.type) && ao(), xe(t), null;
    case 19:
      if (te(re), o = t.memoizedState, o === null)
        return xe(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          Vr(o, !1);
        else {
          if (he !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null; ) {
              if (i = go(e), i !== null) {
                for (t.flags |= 128, Vr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                  o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                return $(re, re.current & 1 | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && ue() > lr && (t.flags |= 128, r = !0, Vr(o, !1), t.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = go(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !ne)
              return xe(t), null;
          } else
            2 * ue() - o.renderingStartTime > lr && n !== 1073741824 && (t.flags |= 128, r = !0, Vr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ue(), t.sibling = null, n = re.current, $(re, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return qs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function lm(e, t) {
  switch (es(t), t.tag) {
    case 1:
      return Fe(t.type) && ao(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return nr(), te(ze), te(Me), as(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ss(t), null;
    case 13:
      if (te(re), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null)
          throw Error(x(340));
        er();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return te(re), null;
    case 4:
      return nr(), null;
    case 10:
      return ls(t.type._context), null;
    case 22:
    case 23:
      return qs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ul = !1, Ce = !1, om = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function Zn(e, t) {
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
function Au(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Ba = !1;
function im(e, t) {
  if (tu = oo, e = pd(), _u(e)) {
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
          var i = 0, u = -1, s = -1, a = 0, f = 0, d = e, v = null;
          t:
            for (; ; ) {
              for (var q; d !== n || l !== 0 && d.nodeType !== 3 || (u = i + l), d !== o || r !== 0 && d.nodeType !== 3 || (s = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (q = d.firstChild) !== null; )
                v = d, d = q;
              for (; ; ) {
                if (d === e)
                  break t;
                if (v === n && ++a === l && (u = i), v === o && ++f === r && (s = i), (q = d.nextSibling) !== null)
                  break;
                d = v, v = d.parentNode;
              }
              d = q;
            }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else
          n = null;
      }
    n = n || { start: 0, end: 0 };
  } else
    n = null;
  for (nu = { focusedElem: e, selectionRange: n }, oo = !1, T = t; T !== null; )
    if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = t, T = e;
    else
      for (; T !== null; ) {
        t = T;
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
                  var A = w.memoizedProps, V = w.memoizedState, p = t.stateNode, c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? A : dt(t.type, A), V);
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (S) {
          ie(t, t.return, S);
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, T = e;
          break;
        }
        T = t.return;
      }
  return w = Ba, Ba = !1, w;
}
function Lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Au(t, n, o);
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
function yu(e) {
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
function df(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, df(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[_r], delete t[ou], delete t[Qh], delete t[Zh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ff(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ja(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ff(e.return))
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
function qu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = so));
  else if (r !== 4 && (e = e.child, e !== null))
    for (qu(e, t, n), e = e.sibling; e !== null; )
      qu(e, t, n), e = e.sibling;
}
function Su(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Su(e, t, n), e = e.sibling; e !== null; )
      Su(e, t, n), e = e.sibling;
}
var we = null, ft = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; )
    pf(e, t, n), n = n.sibling;
}
function pf(e, t, n) {
  if (Vt && typeof Vt.onCommitFiberUnmount == "function")
    try {
      Vt.onCommitFiberUnmount(Ro, n);
    } catch {
    }
  switch (n.tag) {
    case 5:
      Ce || Zn(n, t);
    case 6:
      var r = we, l = ft;
      we = null, Wt(e, t, n), we = r, ft = l, we !== null && (ft ? (e = we, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null && (ft ? (e = we, n = n.stateNode, e.nodeType === 8 ? mi(e.parentNode, n) : e.nodeType === 1 && mi(e, n), Jr(e)) : mi(we, n.stateNode));
      break;
    case 4:
      r = we, l = ft, we = n.stateNode.containerInfo, ft = !0, Wt(e, t, n), we = r, ft = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Au(n, t, i), l = l.next;
        } while (l !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (!Ce && (Zn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ie(n, t, u);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ce = (r = Ce) || n.memoizedState !== null, Wt(e, t, n), Ce = r) : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function Qa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new om()), t.forEach(function(r) {
      var l = mm.bind(null, e, r);
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
          throw Error(x(160));
        pf(o, i, l), we = null, ft = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (a) {
        ie(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      hf(t, e), t = t.sibling;
}
function hf(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ct(t, e), yt(e), r & 4) {
        try {
          Lr(3, e, e.return), Fo(3, e);
        } catch (A) {
          ie(e, e.return, A);
        }
        try {
          Lr(5, e, e.return);
        } catch (A) {
          ie(e, e.return, A);
        }
      }
      break;
    case 1:
      ct(t, e), yt(e), r & 512 && n !== null && Zn(n, n.return);
      break;
    case 5:
      if (ct(t, e), yt(e), r & 512 && n !== null && Zn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Zr(l, "");
        } catch (A) {
          ie(e, e.return, A);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && Oc(l, o), Gi(u, i);
            var a = Gi(u, o);
            for (i = 0; i < s.length; i += 2) {
              var f = s[i], d = s[i + 1];
              f === "style" ? Fc(l, d) : f === "dangerouslySetInnerHTML" ? Pc(l, d) : f === "children" ? Zr(l, d) : Fu(l, f, d, a);
            }
            switch (u) {
              case "input":
                Bi(l, o);
                break;
              case "textarea":
                Uc(l, o);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var q = o.value;
                q != null ? Gn(l, !!o.multiple, q, !1) : v !== !!o.multiple && (o.defaultValue != null ? Gn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Gn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[_r] = o;
          } catch (A) {
            ie(e, e.return, A);
          }
      }
      break;
    case 6:
      if (ct(t, e), yt(e), r & 4) {
        if (e.stateNode === null)
          throw Error(x(162));
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
          Jr(t.containerInfo);
        } catch (A) {
          ie(e, e.return, A);
        }
      break;
    case 4:
      ct(t, e), yt(e);
      break;
    case 13:
      ct(t, e), yt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (As = ue())), r & 4 && Qa(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ce = (a = Ce) || f, ct(t, e), Ce = a) : ct(t, e), yt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !f && e.mode & 1)
          for (T = e, f = e.child; f !== null; ) {
            for (d = T = f; T !== null; ) {
              switch (v = T, q = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lr(4, v, v.return);
                  break;
                case 1:
                  Zn(v, v.return);
                  var w = v.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                    } catch (A) {
                      ie(r, n, A);
                    }
                  }
                  break;
                case 5:
                  Zn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    Wa(d);
                    continue;
                  }
              }
              q !== null ? (q.return = v, T = q) : Wa(d);
            }
            f = f.sibling;
          }
        e:
          for (f = null, d = e; ; ) {
            if (d.tag === 5) {
              if (f === null) {
                f = d;
                try {
                  l = d.stateNode, a ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = d.stateNode, s = d.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = zc("display", i));
                } catch (A) {
                  ie(e, e.return, A);
                }
              }
            } else if (d.tag === 6) {
              if (f === null)
                try {
                  d.stateNode.nodeValue = a ? "" : d.memoizedProps;
                } catch (A) {
                  ie(e, e.return, A);
                }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e)
              break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e)
                break e;
              f === d && (f = null), d = d.return;
            }
            f === d && (f = null), d.sibling.return = d.return, d = d.sibling;
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
          if (ff(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Zr(l, ""), r.flags &= -33);
          var o = ja(e);
          Su(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = ja(e);
          qu(e, u, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      ie(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function um(e, t, n) {
  T = e, mf(e);
}
function mf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var l = T, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Ul;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || Ce;
        u = Ul;
        var a = Ce;
        if (Ul = i, (Ce = s) && !a)
          for (T = l; T !== null; )
            i = T, s = i.child, i.tag === 22 && i.memoizedState !== null ? Ga(l) : s !== null ? (s.return = i, T = s) : Ga(l);
        for (; o !== null; )
          T = o, mf(o), o = o.sibling;
        T = l, Ul = u, Ce = a;
      }
      Za(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, T = o) : Za(e);
  }
}
function Za(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || Fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null)
                  r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && xa(t, o, r);
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
                xa(t, i, n);
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
                  var f = a.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Jr(d);
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
              throw Error(x(163));
          }
        Ce || t.flags & 512 && yu(t);
      } catch (v) {
        ie(t, t.return, v);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function Wa(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function Ga(e) {
  for (; T !== null; ) {
    var t = T;
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
            yu(t);
          } catch (s) {
            ie(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            yu(t);
          } catch (s) {
            ie(t, i, s);
          }
      }
    } catch (s) {
      ie(t, t.return, s);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, T = u;
      break;
    }
    T = t.return;
  }
}
var sm = Math.ceil, qo = Pt.ReactCurrentDispatcher, vs = Pt.ReactCurrentOwner, lt = Pt.ReactCurrentBatchConfig, G = 0, Ae = null, ae = null, Ve = 0, We = 0, Wn = dn(0), he = 0, ll = null, kn = 0, Bo = 0, gs = 0, Pr = null, Le = null, As = 0, lr = 1 / 0, xt = null, So = !1, wu = null, ln = null, Ll = !1, _t = null, wo = 0, zr = 0, Vu = null, Yl = -1, bl = 0;
function Re() {
  return G & 6 ? ue() : Yl !== -1 ? Yl : Yl = ue();
}
function on(e) {
  return e.mode & 1 ? G & 2 && Ve !== 0 ? Ve & -Ve : Gh.transition !== null ? (bl === 0 && (bl = bc()), bl) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ld(e.type)), e) : 1;
}
function mt(e, t, n, r) {
  if (50 < zr)
    throw zr = 0, Vu = null, Error(x(185));
  al(e, n, r), (!(G & 2) || e !== Ae) && (e === Ae && (!(G & 2) && (Bo |= n), he === 4 && Xt(e, Ve)), Be(e, r), n === 1 && G === 0 && !(t.mode & 1) && (lr = ue() + 500, Lo && fn()));
}
function Be(e, t) {
  var n = e.callbackNode;
  Gp(e, t);
  var r = lo(e, e === Ae ? Ve : 0);
  if (r === 0)
    n !== null && ea(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ea(n), t === 1)
      e.tag === 0 ? Wh(Ka.bind(null, e)) : Vd(Ka.bind(null, e)), Bh(function() {
        !(G & 6) && fn();
      }), n = null;
    else {
      switch (_c(r)) {
        case 1:
          n = Wu;
          break;
        case 4:
          n = Xc;
          break;
        case 16:
          n = ro;
          break;
        case 536870912:
          n = Yc;
          break;
        default:
          n = ro;
      }
      n = Vf(n, vf.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function vf(e, t) {
  if (Yl = -1, bl = 0, G & 6)
    throw Error(x(327));
  var n = e.callbackNode;
  if (Yn() && e.callbackNode !== n)
    return null;
  var r = lo(e, e === Ae ? Ve : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Vo(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var o = Af();
    (Ae !== e || Ve !== t) && (xt = null, lr = ue() + 500, yn(e, t));
    do
      try {
        dm();
        break;
      } catch (u) {
        gf(e, u);
      }
    while (!0);
    rs(), qo.current = o, G = l, ae !== null ? t = 0 : (Ae = null, Ve = 0, t = he);
  }
  if (t !== 0) {
    if (t === 2 && (l = Yi(e), l !== 0 && (r = l, t = ku(e, l))), t === 1)
      throw n = ll, yn(e, 0), Xt(e, r), Be(e, ue()), n;
    if (t === 6)
      Xt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !am(l) && (t = Vo(e, r), t === 2 && (o = Yi(e), o !== 0 && (r = o, t = ku(e, o))), t === 1))
        throw n = ll, yn(e, 0), Xt(e, r), Be(e, ue()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          hn(e, Le, xt);
          break;
        case 3:
          if (Xt(e, r), (r & 130023424) === r && (t = As + 500 - ue(), 10 < t)) {
            if (lo(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              Re(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = lu(hn.bind(null, e, Le, xt), t);
            break;
          }
          hn(e, Le, xt);
          break;
        case 4:
          if (Xt(e, r), (r & 4194240) === r)
            break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ht(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = ue() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = lu(hn.bind(null, e, Le, xt), r);
            break;
          }
          hn(e, Le, xt);
          break;
        case 5:
          hn(e, Le, xt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Be(e, ue()), e.callbackNode === n ? vf.bind(null, e) : null;
}
function ku(e, t) {
  var n = Pr;
  return e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256), e = Vo(e, t), e !== 2 && (t = Le, Le = n, t !== null && Eu(t)), e;
}
function Eu(e) {
  Le === null ? Le = e : Le.push.apply(Le, e);
}
function am(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!vt(o(), l))
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
function Xt(e, t) {
  for (t &= ~gs, t &= ~Bo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ht(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ka(e) {
  if (G & 6)
    throw Error(x(327));
  Yn();
  var t = lo(e, 0);
  if (!(t & 1))
    return Be(e, ue()), null;
  var n = Vo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yi(e);
    r !== 0 && (t = r, n = ku(e, r));
  }
  if (n === 1)
    throw n = ll, yn(e, 0), Xt(e, t), Be(e, ue()), n;
  if (n === 6)
    throw Error(x(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, hn(e, Le, xt), Be(e, ue()), null;
}
function ys(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    G = n, G === 0 && (lr = ue() + 500, Lo && fn());
  }
}
function En(e) {
  _t !== null && _t.tag === 0 && !(G & 6) && Yn();
  var t = G;
  G |= 1;
  var n = lt.transition, r = b;
  try {
    if (lt.transition = null, b = 1, e)
      return e();
  } finally {
    b = r, lt.transition = n, G = t, !(G & 6) && fn();
  }
}
function qs() {
  We = Wn.current, te(Wn);
}
function yn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Fh(n)), ae !== null)
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch (es(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ao();
          break;
        case 3:
          nr(), te(ze), te(Me), as();
          break;
        case 5:
          ss(r);
          break;
        case 4:
          nr();
          break;
        case 13:
          te(re);
          break;
        case 19:
          te(re);
          break;
        case 10:
          ls(r.type._context);
          break;
        case 22:
        case 23:
          qs();
      }
      n = n.return;
    }
  if (Ae = e, ae = e = un(e.current, null), Ve = We = t, he = 0, ll = null, gs = Bo = kn = 0, Le = Pr = null, gn !== null) {
    for (t = 0; t < gn.length; t++)
      if (n = gn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
    gn = null;
  }
  return e;
}
function gf(e, t) {
  do {
    var n = ae;
    try {
      if (rs(), Jl.current = yo, Ao) {
        for (var r = le.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Ao = !1;
      }
      if (Vn = 0, ve = fe = le = null, Ur = !1, tl = 0, vs.current = null, n === null || n.return === null) {
        he = 1, ll = t, ae = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = Ve, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s, f = u, d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var v = f.alternate;
            v ? (f.updateQueue = v.updateQueue, f.memoizedState = v.memoizedState, f.lanes = v.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var q = Ia(i);
          if (q !== null) {
            q.flags &= -257, Oa(q, i, u, o, t), q.mode & 1 && Ta(o, a, t), t = q, s = a;
            var w = t.updateQueue;
            if (w === null) {
              var A = /* @__PURE__ */ new Set();
              A.add(s), t.updateQueue = A;
            } else
              w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ta(o, a, t), Ss();
              break e;
            }
            s = Error(x(426));
          }
        } else if (ne && u.mode & 1) {
          var V = Ia(i);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256), Oa(V, i, u, o, t), ts(rr(s, u));
            break e;
          }
        }
        o = s = rr(s, u), he !== 4 && (he = 2), Pr === null ? Pr = [o] : Pr.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = $d(o, s, t);
              Ea(o, p);
              break e;
            case 1:
              u = s;
              var c = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (ln === null || !ln.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var S = ef(o, u, t);
                Ea(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qf(n);
    } catch (E) {
      t = E, ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Af() {
  var e = qo.current;
  return qo.current = yo, e === null ? yo : e;
}
function Ss() {
  (he === 0 || he === 3 || he === 2) && (he = 4), Ae === null || !(kn & 268435455) && !(Bo & 268435455) || Xt(Ae, Ve);
}
function Vo(e, t) {
  var n = G;
  G |= 2;
  var r = Af();
  (Ae !== e || Ve !== t) && (xt = null, yn(e, t));
  do
    try {
      cm();
      break;
    } catch (l) {
      gf(e, l);
    }
  while (!0);
  if (rs(), G = n, qo.current = r, ae !== null)
    throw Error(x(261));
  return Ae = null, Ve = 0, he;
}
function cm() {
  for (; ae !== null; )
    yf(ae);
}
function dm() {
  for (; ae !== null && !Lp(); )
    yf(ae);
}
function yf(e) {
  var t = wf(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? qf(e) : ae = t, vs.current = null;
}
function qf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = lm(n, t), n !== null) {
        n.flags &= 32767, ae = n;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        he = 6, ae = null;
        return;
      }
    } else if (n = rm(n, t, We), n !== null) {
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
function hn(e, t, n) {
  var r = b, l = lt.transition;
  try {
    lt.transition = null, b = 1, fm(e, t, n, r);
  } finally {
    lt.transition = l, b = r;
  }
  return null;
}
function fm(e, t, n, r) {
  do
    Yn();
  while (_t !== null);
  if (G & 6)
    throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(x(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Kp(e, o), e === Ae && (ae = Ae = null, Ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ll || (Ll = !0, Vf(ro, function() {
    return Yn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = lt.transition, lt.transition = null;
    var i = b;
    b = 1;
    var u = G;
    G |= 4, vs.current = null, im(e, n), hf(n, e), Th(nu), oo = !!tu, nu = tu = null, e.current = n, um(n), Pp(), G = u, b = i, lt.transition = o;
  } else
    e.current = n;
  if (Ll && (Ll = !1, _t = e, wo = l), o = e.pendingLanes, o === 0 && (ln = null), Bp(n.stateNode), Be(e, ue()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (So)
    throw So = !1, e = wu, wu = null, e;
  return wo & 1 && e.tag !== 0 && Yn(), o = e.pendingLanes, o & 1 ? e === Vu ? zr++ : (zr = 0, Vu = e) : zr = 0, fn(), null;
}
function Yn() {
  if (_t !== null) {
    var e = _c(wo), t = lt.transition, n = b;
    try {
      if (lt.transition = null, b = 16 > e ? 16 : e, _t === null)
        var r = !1;
      else {
        if (e = _t, _t = null, wo = 0, G & 6)
          throw Error(x(331));
        var l = G;
        for (G |= 4, T = e.current; T !== null; ) {
          var o = T, i = o.child;
          if (T.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (T = a; T !== null; ) {
                  var f = T;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null)
                    d.return = f, T = d;
                  else
                    for (; T !== null; ) {
                      f = T;
                      var v = f.sibling, q = f.return;
                      if (df(f), f === a) {
                        T = null;
                        break;
                      }
                      if (v !== null) {
                        v.return = q, T = v;
                        break;
                      }
                      T = q;
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
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, T = i;
          else
            e:
              for (; T !== null; ) {
                if (o = T, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(9, o, o.return);
                  }
                var p = o.sibling;
                if (p !== null) {
                  p.return = o.return, T = p;
                  break e;
                }
                T = o.return;
              }
        }
        var c = e.current;
        for (T = c; T !== null; ) {
          i = T;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null)
            m.return = i, T = m;
          else
            e:
              for (i = c; T !== null; ) {
                if (u = T, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Fo(9, u);
                    }
                  } catch (E) {
                    ie(u, u.return, E);
                  }
                if (u === i) {
                  T = null;
                  break e;
                }
                var S = u.sibling;
                if (S !== null) {
                  S.return = u.return, T = S;
                  break e;
                }
                T = u.return;
              }
        }
        if (G = l, fn(), Vt && typeof Vt.onPostCommitFiberRoot == "function")
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
function Ja(e, t, n) {
  t = rr(n, t), t = $d(e, t, 1), e = rn(e, t, 1), t = Re(), e !== null && (al(e, 1, t), Be(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3)
    Ja(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ja(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ln === null || !ln.has(r))) {
          e = rr(n, e), e = ef(t, e, 1), t = rn(t, e, 1), e = Re(), t !== null && (al(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Re(), e.pingedLanes |= e.suspendedLanes & n, Ae === e && (Ve & n) === n && (he === 4 || he === 3 && (Ve & 130023424) === Ve && 500 > ue() - As ? yn(e, 0) : gs |= n), Be(e, t);
}
function Sf(e, t) {
  t === 0 && (e.mode & 1 ? (t = xl, xl <<= 1, !(xl & 130023424) && (xl = 4194304)) : t = 1);
  var n = Re();
  e = It(e, t), e !== null && (al(e, t, n), Be(e, n));
}
function hm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Sf(e, n);
}
function mm(e, t) {
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
      throw Error(x(314));
  }
  r !== null && r.delete(t), Sf(e, n);
}
var wf;
wf = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current)
      Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return Pe = !1, nm(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else
    Pe = !1, ne && t.flags & 1048576 && kd(t, po, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Xl(e, t), e = t.pendingProps;
      var l = $n(t, Me.current);
      Xn(t, n), l = ds(null, t, r, e, l, n);
      var o = fs();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fe(r) ? (o = !0, co(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, is(t), l.updater = Po, t.stateNode = l, l._reactInternals = t, du(t, r, e, n), t = hu(null, t, r, !0, o, n)) : (t.tag = 0, ne && o && $u(t), De(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Xl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = gm(r), e = dt(r, e), l) {
          case 0:
            t = pu(null, t, r, e, n);
            break e;
          case 1:
            t = Pa(null, t, r, e, n);
            break e;
          case 11:
            t = Ua(null, t, r, e, n);
            break e;
          case 14:
            t = La(null, t, r, dt(r.type, e), n);
            break e;
        }
        throw Error(x(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), pu(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Pa(e, t, r, l, n);
    case 3:
      e: {
        if (lf(t), e === null)
          throw Error(x(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Md(e, t), vo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = rr(Error(x(423)), t), t = za(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = rr(Error(x(424)), t), t = za(e, t, r, n, l);
            break e;
          } else
            for (Ge = nn(t.stateNode.containerInfo.firstChild), Ke = t, ne = !0, pt = null, n = Td(t, null, r, n), t.child = n; n; )
              n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (er(), r === l) {
            t = Ot(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Id(t), e === null && su(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, ru(r, l) ? i = null : o !== null && ru(r, o) && (t.flags |= 32), rf(e, t), De(e, t, i, n), t.child;
    case 6:
      return e === null && su(t), null;
    case 13:
      return of(e, t, n);
    case 4:
      return us(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tr(t, null, r, n) : De(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Ua(e, t, r, l, n);
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, $(ho, r._currentValue), r._currentValue = i, o !== null)
          if (vt(o.value, i)) {
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
                        var f = a.pending;
                        f === null ? s.next = s : (s.next = f.next, f.next = s), a.pending = s;
                      }
                    }
                    o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), au(
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
                  throw Error(x(341));
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), au(i, n, t), i = o.sibling;
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
      return l = t.type, r = t.pendingProps.children, Xn(t, n), l = ot(l), r = r(l), t.flags |= 1, De(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = dt(r, t.pendingProps), l = dt(r.type, l), La(e, t, r, l, n);
    case 15:
      return tf(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Xl(e, t), t.tag = 1, Fe(r) ? (e = !0, co(t)) : e = !1, Xn(t, n), Dd(t, r, l), du(t, r, l, n), hu(null, t, r, !0, e, n);
    case 19:
      return uf(e, t, n);
    case 22:
      return nf(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Vf(e, t) {
  return Hc(e, t);
}
function vm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function rt(e, t, n, r) {
  return new vm(e, t, n, r);
}
function ws(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function gm(e) {
  if (typeof e == "function")
    return ws(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ju)
      return 11;
    if (e === Qu)
      return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function _l(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function")
    ws(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case On:
          return qn(n.children, l, o, t);
        case Bu:
          i = 8, l |= 8;
          break;
        case Ui:
          return e = rt(12, n, t, l | 2), e.elementType = Ui, e.lanes = o, e;
        case Li:
          return e = rt(13, n, t, l), e.elementType = Li, e.lanes = o, e;
        case Pi:
          return e = rt(19, n, t, l), e.elementType = Pi, e.lanes = o, e;
        case Rc:
          return jo(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Nc:
                i = 10;
                break e;
              case Dc:
                i = 9;
                break e;
              case ju:
                i = 11;
                break e;
              case Qu:
                i = 14;
                break e;
              case Gt:
                i = 16, r = null;
                break e;
            }
          throw Error(x(130, e == null ? e : typeof e, ""));
      }
  return t = rt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function qn(e, t, n, r) {
  return e = rt(7, e, r, t), e.lanes = n, e;
}
function jo(e, t, n, r) {
  return e = rt(22, e, r, t), e.elementType = Rc, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Vi(e, t, n) {
  return e = rt(6, e, null, t), e.lanes = n, e;
}
function ki(e, t, n) {
  return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Am(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = li(0), this.expirationTimes = li(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = li(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Vs(e, t, n, r, l, o, i, u, s) {
  return e = new Am(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = rt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, is(o), e;
}
function ym(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: In, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function kf(e) {
  if (!e)
    return an;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1)
      throw Error(x(170));
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
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n))
      return wd(e, n, t);
  }
  return t;
}
function Ef(e, t, n, r, l, o, i, u, s) {
  return e = Vs(n, r, !0, e, l, o, i, u, s), e.context = kf(null), n = e.current, r = Re(), l = on(n), o = Dt(r, l), o.callback = t ?? null, rn(n, o, l), e.current.lanes = l, al(e, l, r), Be(e, r), e;
}
function Qo(e, t, n, r) {
  var l = t.current, o = Re(), i = on(l);
  return n = kf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Dt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = rn(l, t, i), e !== null && (mt(e, l, i, o), Kl(e, l, i)), i;
}
function ko(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ha(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ks(e, t) {
  Ha(e, t), (e = e.alternate) && Ha(e, t);
}
function qm() {
  return null;
}
var xf = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Es(e) {
  this._internalRoot = e;
}
Zo.prototype.render = Es.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
    throw Error(x(409));
  Qo(e, t, null, null);
};
Zo.prototype.unmount = Es.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function() {
      Qo(null, e, null, null);
    }), t[Tt] = null;
  }
};
function Zo(e) {
  this._internalRoot = e;
}
Zo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = td();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++)
      ;
    Ht.splice(n, 0, e), n === 0 && rd(e);
  }
};
function xs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Wo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Xa() {
}
function Sm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var a = ko(i);
        o.call(a);
      };
    }
    var i = Ef(t, r, e, 0, null, !1, !1, "", Xa);
    return e._reactRootContainer = i, e[Tt] = i.current, Yr(e.nodeType === 8 ? e.parentNode : e), En(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var a = ko(s);
      u.call(a);
    };
  }
  var s = Vs(e, 0, !1, null, null, !1, !1, "", Xa);
  return e._reactRootContainer = s, e[Tt] = s.current, Yr(e.nodeType === 8 ? e.parentNode : e), En(function() {
    Qo(t, s, n, r);
  }), s;
}
function Go(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = ko(i);
        u.call(s);
      };
    }
    Qo(t, i, e, l);
  } else
    i = Sm(n, t, e, l, r);
  return ko(i);
}
$c = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cr(t.pendingLanes);
        n !== 0 && (Gu(t, n | 1), Be(t, ue()), !(G & 6) && (lr = ue() + 500, fn()));
      }
      break;
    case 13:
      En(function() {
        var r = It(e, 1);
        if (r !== null) {
          var l = Re();
          mt(r, e, 1, l);
        }
      }), ks(e, 1);
  }
};
Ku = function(e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = Re();
      mt(t, e, 134217728, n);
    }
    ks(e, 134217728);
  }
};
ed = function(e) {
  if (e.tag === 13) {
    var t = on(e), n = It(e, t);
    if (n !== null) {
      var r = Re();
      mt(n, e, t, r);
    }
    ks(e, t);
  }
};
td = function() {
  return b;
};
nd = function(e, t) {
  var n = b;
  try {
    return b = e, t();
  } finally {
    b = n;
  }
};
Ji = function(e, t, n) {
  switch (t) {
    case "input":
      if (Bi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Uo(r);
            if (!l)
              throw Error(x(90));
            Ic(r), Bi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Uc(e, n);
      break;
    case "select":
      t = n.value, t != null && Gn(e, !!n.multiple, t, !1);
  }
};
Qc = ys;
Zc = En;
var wm = { usingClientEntryPoint: !1, Events: [dl, zn, Uo, Bc, jc, ys] }, kr = { findFiberByHostInstance: vn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Vm = { bundleType: kr.bundleType, version: kr.version, rendererPackageName: kr.rendererPackageName, rendererConfig: kr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Kc(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: kr.findFiberByHostInstance || qm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pl.isDisabled && Pl.supportsFiber)
    try {
      Ro = Pl.inject(Vm), Vt = Pl;
    } catch {
    }
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm;
He.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xs(t))
    throw Error(x(200));
  return ym(e, t, null, n);
};
He.createRoot = function(e, t) {
  if (!xs(e))
    throw Error(x(299));
  var n = !1, r = "", l = xf;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Vs(e, 1, !1, null, null, n, !1, r, l), e[Tt] = t.current, Yr(e.nodeType === 8 ? e.parentNode : e), new Es(t);
};
He.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
  return e = Kc(t), e = e === null ? null : e.stateNode, e;
};
He.flushSync = function(e) {
  return En(e);
};
He.hydrate = function(e, t, n) {
  if (!Wo(t))
    throw Error(x(200));
  return Go(null, e, t, !0, n);
};
He.hydrateRoot = function(e, t, n) {
  if (!xs(e))
    throw Error(x(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = xf;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ef(t, null, e, 1, n ?? null, l, !1, o, i), e[Tt] = t.current, Yr(e), r)
    for (e = 0; e < r.length; e++)
      n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
        n,
        l
      );
  return new Zo(t);
};
He.render = function(e, t, n) {
  if (!Wo(t))
    throw Error(x(200));
  return Go(null, e, t, !1, n);
};
He.unmountComponentAtNode = function(e) {
  if (!Wo(e))
    throw Error(x(40));
  return e._reactRootContainer ? (En(function() {
    Go(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Tt] = null;
    });
  }), !0) : !1;
};
He.unstable_batchedUpdates = ys;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Wo(n))
    throw Error(x(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(x(38));
  return Go(e, t, n, !1, r);
};
He.version = "18.2.0-next-9e3b772b8-20220608";
function Cf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cf);
    } catch (e) {
      console.error(e);
    }
}
Cf(), kc.exports = He;
var Yt = kc.exports;
const zl = /* @__PURE__ */ pc(Yt);
var Ya = Yt;
Ii.createRoot = Ya.createRoot, Ii.hydrateRoot = Ya.hydrateRoot;
function xu() {
  return xu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xu.apply(this, arguments);
}
function Mf(e, t) {
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
function km(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Em(e, t) {
  e.classList ? e.classList.add(t) : km(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function ba(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function xm(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = ba(e.className, t) : e.setAttribute("class", ba(e.className && e.className.baseVal || "", t));
}
const _a = {
  disabled: !1
}, Ms = J.createContext(null);
var Nf = function(t) {
  return t.scrollTop;
}, Nr = "unmounted", mn = "exited", nt = "entering", wt = "entered", ol = "exiting", zt = /* @__PURE__ */ function(e) {
  Cs(t, e);
  function t(r, l) {
    var o;
    o = e.call(this, r, l) || this;
    var i = l, u = i && !i.isMounting ? r.enter : r.appear, s;
    return o.appearStatus = null, r.in ? u ? (s = mn, o.appearStatus = nt) : s = wt : r.unmountOnExit || r.mountOnEnter ? s = Nr : s = mn, o.state = {
      status: s
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(l, o) {
    var i = l.in;
    return i && o.status === Nr ? {
      status: mn
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(l) {
    var o = null;
    if (l !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== nt && i !== wt && (o = nt) : (i === nt || i === wt) && (o = ol);
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
          var i = this.props.nodeRef ? this.props.nodeRef.current : zl.findDOMNode(this);
          i && Nf(i);
        }
        this.performEnter(l);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === mn && this.setState({
        status: Nr
      });
  }, n.performEnter = function(l) {
    var o = this, i = this.props.enter, u = this.context ? this.context.isMounting : l, s = this.props.nodeRef ? [u] : [zl.findDOMNode(this), u], a = s[0], f = s[1], d = this.getTimeouts(), v = u ? d.appear : d.enter;
    if (!l && !i || _a.disabled) {
      this.safeSetState({
        status: wt
      }, function() {
        o.props.onEntered(a);
      });
      return;
    }
    this.props.onEnter(a, f), this.safeSetState({
      status: nt
    }, function() {
      o.props.onEntering(a, f), o.onTransitionEnd(v, function() {
        o.safeSetState({
          status: wt
        }, function() {
          o.props.onEntered(a, f);
        });
      });
    });
  }, n.performExit = function() {
    var l = this, o = this.props.exit, i = this.getTimeouts(), u = this.props.nodeRef ? void 0 : zl.findDOMNode(this);
    if (!o || _a.disabled) {
      this.safeSetState({
        status: mn
      }, function() {
        l.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: ol
    }, function() {
      l.props.onExiting(u), l.onTransitionEnd(i.exit, function() {
        l.safeSetState({
          status: mn
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
    var i = this.props.nodeRef ? this.props.nodeRef.current : zl.findDOMNode(this), u = l == null && !this.props.addEndListener;
    if (!i || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], a = s[0], f = s[1];
      this.props.addEndListener(a, f);
    }
    l != null && setTimeout(this.nextCallback, l);
  }, n.render = function() {
    var l = this.state.status;
    if (l === Nr)
      return null;
    var o = this.props, i = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var u = Mf(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ J.createElement(Ms.Provider, {
        value: null
      }, typeof i == "function" ? i(l, u) : J.cloneElement(J.Children.only(i), u))
    );
  }, t;
}(J.Component);
zt.contextType = Ms;
zt.propTypes = {};
function Tn() {
}
zt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Tn,
  onEntering: Tn,
  onEntered: Tn,
  onExit: Tn,
  onExiting: Tn,
  onExited: Tn
};
zt.UNMOUNTED = Nr;
zt.EXITED = mn;
zt.ENTERING = nt;
zt.ENTERED = wt;
zt.EXITING = ol;
const Cm = zt;
var Mm = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return Em(t, r);
  });
}, Ei = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return xm(t, r);
  });
}, Ns = /* @__PURE__ */ function(e) {
  Cs(t, e);
  function t() {
    for (var r, l = arguments.length, o = new Array(l), i = 0; i < l; i++)
      o[i] = arguments[i];
    return r = e.call.apply(e, [this].concat(o)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(u, s) {
      var a = r.resolveArguments(u, s), f = a[0], d = a[1];
      r.removeClasses(f, "exit"), r.addClass(f, d ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(u, s);
    }, r.onEntering = function(u, s) {
      var a = r.resolveArguments(u, s), f = a[0], d = a[1], v = d ? "appear" : "enter";
      r.addClass(f, v, "active"), r.props.onEntering && r.props.onEntering(u, s);
    }, r.onEntered = function(u, s) {
      var a = r.resolveArguments(u, s), f = a[0], d = a[1], v = d ? "appear" : "enter";
      r.removeClasses(f, v), r.addClass(f, v, "done"), r.props.onEntered && r.props.onEntered(u, s);
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
      var s = r.props.classNames, a = typeof s == "string", f = a && s ? s + "-" : "", d = a ? "" + f + u : s[u], v = a ? d + "-active" : s[u + "Active"], q = a ? d + "-done" : s[u + "Done"];
      return {
        baseClassName: d,
        activeClassName: v,
        doneClassName: q
      };
    }, r;
  }
  var n = t.prototype;
  return n.addClass = function(l, o, i) {
    var u = this.getClassNames(o)[i + "ClassName"], s = this.getClassNames("enter"), a = s.doneClassName;
    o === "appear" && i === "done" && a && (u += " " + a), i === "active" && l && Nf(l), u && (this.appliedClasses[o][i] = u, Mm(l, u));
  }, n.removeClasses = function(l, o) {
    var i = this.appliedClasses[o], u = i.base, s = i.active, a = i.done;
    this.appliedClasses[o] = {}, u && Ei(l, u), s && Ei(l, s), a && Ei(l, a);
  }, n.render = function() {
    var l = this.props;
    l.classNames;
    var o = Mf(l, ["classNames"]);
    return /* @__PURE__ */ J.createElement(Cm, xu({}, o, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(J.Component);
Ns.defaultProps = {
  classNames: ""
};
Ns.propTypes = {};
const Nm = Ns;
var Fl, Bl;
function Dm(e, t) {
  return !(e === t || J.isValidElement(e) && J.isValidElement(t) && e.key != null && e.key === t.key);
}
var or = {
  out: "out-in",
  in: "in-out"
}, Eo = function(t, n, r) {
  return function() {
    var l;
    t.props[n] && (l = t.props)[n].apply(l, arguments), r();
  };
}, Rm = (Fl = {}, Fl[or.out] = function(e) {
  var t = e.current, n = e.changeState;
  return J.cloneElement(t, {
    in: !1,
    onExited: Eo(t, "onExited", function() {
      n(nt, null);
    })
  });
}, Fl[or.in] = function(e) {
  var t = e.current, n = e.changeState, r = e.children;
  return [t, J.cloneElement(r, {
    in: !0,
    onEntered: Eo(r, "onEntered", function() {
      n(nt);
    })
  })];
}, Fl), Tm = (Bl = {}, Bl[or.out] = function(e) {
  var t = e.children, n = e.changeState;
  return J.cloneElement(t, {
    in: !0,
    onEntered: Eo(t, "onEntered", function() {
      n(wt, J.cloneElement(t, {
        in: !0
      }));
    })
  });
}, Bl[or.in] = function(e) {
  var t = e.current, n = e.children, r = e.changeState;
  return [J.cloneElement(t, {
    in: !1,
    onExited: Eo(t, "onExited", function() {
      r(wt, J.cloneElement(n, {
        in: !0
      }));
    })
  }), J.cloneElement(n, {
    in: !0
  })];
}, Bl), Ds = /* @__PURE__ */ function(e) {
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
    } : o.status === nt && l.mode === or.in ? {
      status: nt
    } : o.current && Dm(o.current, l.children) ? {
      status: ol
    } : {
      current: J.cloneElement(l.children, {
        in: !0
      })
    };
  }, n.render = function() {
    var l = this.props, o = l.children, i = l.mode, u = this.state, s = u.status, a = u.current, f = {
      children: o,
      current: a,
      changeState: this.changeState,
      status: s
    }, d;
    switch (s) {
      case nt:
        d = Tm[i](f);
        break;
      case ol:
        d = Rm[i](f);
        break;
      case wt:
        d = a;
    }
    return /* @__PURE__ */ J.createElement(Ms.Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, d);
  }, t;
}(J.Component);
Ds.propTypes = {};
Ds.defaultProps = {
  mode: or.out
};
const Im = Ds, Ko = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function ar(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function Rs(e) {
  return "nodeType" in e;
}
function je(e) {
  var t, n;
  return e ? ar(e) ? e : Rs(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function Ts(e) {
  const {
    Document: t
  } = je(e);
  return e instanceof t;
}
function pl(e) {
  return ar(e) ? !1 : e instanceof je(e).HTMLElement;
}
function Df(e) {
  return e instanceof je(e).SVGElement;
}
function cr(e) {
  return e ? ar(e) ? e.document : Rs(e) ? Ts(e) ? e : pl(e) || Df(e) ? e.ownerDocument : document : document : document;
}
const Ut = Ko ? y.useLayoutEffect : y.useEffect;
function Is(e) {
  const t = y.useRef(e);
  return Ut(() => {
    t.current = e;
  }), y.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
      r[l] = arguments[l];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Om() {
  const e = y.useRef(null), t = y.useCallback((r, l) => {
    e.current = setInterval(r, l);
  }, []), n = y.useCallback(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function il(e, t) {
  t === void 0 && (t = [e]);
  const n = y.useRef(e);
  return Ut(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function hl(e, t) {
  const n = y.useRef();
  return y.useMemo(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function xo(e) {
  const t = Is(e), n = y.useRef(null), r = y.useCallback(
    (l) => {
      l !== n.current && (t == null || t(l, n.current)), n.current = l;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function Mu(e) {
  const t = y.useRef();
  return y.useEffect(() => {
    t.current = e;
  }, [e]), t.current;
}
let xi = {};
function Jo(e, t) {
  return y.useMemo(() => {
    if (t)
      return t;
    const n = xi[e] == null ? 0 : xi[e] + 1;
    return xi[e] = n, e + "-" + n;
  }, [e, t]);
}
function Rf(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return r.reduce((o, i) => {
      const u = Object.entries(i);
      for (const [s, a] of u) {
        const f = o[s];
        f != null && (o[s] = f + e * a);
      }
      return o;
    }, {
      ...t
    });
  };
}
const bn = /* @__PURE__ */ Rf(1), Co = /* @__PURE__ */ Rf(-1);
function Um(e) {
  return "clientX" in e && "clientY" in e;
}
function Tf(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = je(e.target);
  return t && e instanceof t;
}
function Lm(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = je(e.target);
  return t && e instanceof t;
}
function Nu(e) {
  if (Lm(e)) {
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
  return Um(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const $a = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Pm(e) {
  return e.matches($a) ? e : e.querySelector($a);
}
const zm = {
  display: "none"
};
function Fm(e) {
  let {
    id: t,
    value: n
  } = e;
  return J.createElement("div", {
    id: t,
    style: zm
  }, n);
}
function Bm(e) {
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
function jm() {
  const [e, t] = y.useState("");
  return {
    announce: y.useCallback((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const If = /* @__PURE__ */ y.createContext(null);
function Qm(e) {
  const t = y.useContext(If);
  y.useEffect(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function Zm() {
  const [e] = y.useState(() => /* @__PURE__ */ new Set()), t = y.useCallback((r) => (e.add(r), () => e.delete(r)), [e]);
  return [y.useCallback((r) => {
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
const Wm = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, Gm = {
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
function Km(e) {
  let {
    announcements: t = Gm,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: l = Wm
  } = e;
  const {
    announce: o,
    announcement: i
  } = jm(), u = Jo("DndLiveRegion"), [s, a] = y.useState(!1);
  if (y.useEffect(() => {
    a(!0);
  }, []), Qm(y.useMemo(() => ({
    onDragStart(d) {
      let {
        active: v
      } = d;
      o(t.onDragStart({
        active: v
      }));
    },
    onDragMove(d) {
      let {
        active: v,
        over: q
      } = d;
      t.onDragMove && o(t.onDragMove({
        active: v,
        over: q
      }));
    },
    onDragOver(d) {
      let {
        active: v,
        over: q
      } = d;
      o(t.onDragOver({
        active: v,
        over: q
      }));
    },
    onDragEnd(d) {
      let {
        active: v,
        over: q
      } = d;
      o(t.onDragEnd({
        active: v,
        over: q
      }));
    },
    onDragCancel(d) {
      let {
        active: v,
        over: q
      } = d;
      o(t.onDragCancel({
        active: v,
        over: q
      }));
    }
  }), [o, t])), !s)
    return null;
  const f = J.createElement(J.Fragment, null, J.createElement(Fm, {
    id: r,
    value: l.draggable
  }), J.createElement(Bm, {
    id: u,
    announcement: i
  }));
  return n ? Yt.createPortal(f, n) : f;
}
var pe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(pe || (pe = {}));
function Mo() {
}
function Ci(e, t) {
  return y.useMemo(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function Jm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return y.useMemo(
    () => [...t].filter((r) => r != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const gt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function Hm(e, t) {
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
function Xm(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return t ? n[t] : n;
}
function Ym(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), l = Math.min(t.left + t.width, e.left + e.width), o = Math.min(t.top + t.height, e.top + e.height), i = l - r, u = o - n;
  if (r < l && n < o) {
    const s = t.width * t.height, a = e.width * e.height, f = i * u, d = f / (s + a - f);
    return Number(d.toFixed(4));
  }
  return 0;
}
const bm = (e) => {
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
      const s = Ym(u, t);
      s > 0 && l.push({
        id: i,
        data: {
          droppableContainer: o,
          value: s
        }
      });
    }
  }
  return l.sort(Hm);
};
function _m(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function Of(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : gt;
}
function $m(e) {
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
const ev = /* @__PURE__ */ $m(1);
function tv(e) {
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
function nv(e, t, n) {
  const r = tv(t);
  if (!r)
    return e;
  const {
    scaleX: l,
    scaleY: o,
    x: i,
    y: u
  } = r, s = e.left - i - (1 - l) * parseFloat(n), a = e.top - u - (1 - o) * parseFloat(n.slice(n.indexOf(" ") + 1)), f = l ? e.width / l : e.width, d = o ? e.height / o : e.height;
  return {
    width: f,
    height: d,
    top: a,
    right: s + f,
    bottom: a + d,
    left: s
  };
}
const rv = {
  ignoreTransform: !1
};
function ml(e, t) {
  t === void 0 && (t = rv);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: a,
      transformOrigin: f
    } = je(e).getComputedStyle(e);
    a && (n = nv(n, a, f));
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
function ec(e) {
  return ml(e, {
    ignoreTransform: !0
  });
}
function lv(e) {
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
function ov(e, t) {
  return t === void 0 && (t = je(e).getComputedStyle(e)), t.position === "fixed";
}
function iv(e, t) {
  t === void 0 && (t = je(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((l) => {
    const o = t[l];
    return typeof o == "string" ? n.test(o) : !1;
  });
}
function Os(e, t) {
  const n = [];
  function r(l) {
    if (t != null && n.length >= t || !l)
      return n;
    if (Ts(l) && l.scrollingElement != null && !n.includes(l.scrollingElement))
      return n.push(l.scrollingElement), n;
    if (!pl(l) || Df(l) || n.includes(l))
      return n;
    const o = je(e).getComputedStyle(l);
    return l !== e && iv(l, o) && n.push(l), ov(l, o) ? n : r(l.parentNode);
  }
  return e ? r(e) : n;
}
function Uf(e) {
  const [t] = Os(e, 1);
  return t ?? null;
}
function Mi(e) {
  return !Ko || !e ? null : ar(e) ? e : Rs(e) ? Ts(e) || e === cr(e).scrollingElement ? window : pl(e) ? e : null : null;
}
function Lf(e) {
  return ar(e) ? e.scrollX : e.scrollLeft;
}
function Pf(e) {
  return ar(e) ? e.scrollY : e.scrollTop;
}
function Du(e) {
  return {
    x: Lf(e),
    y: Pf(e)
  };
}
var ge;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(ge || (ge = {}));
function zf(e) {
  return !Ko || !e ? !1 : e === document.scrollingElement;
}
function Ff(e) {
  const t = {
    x: 0,
    y: 0
  }, n = zf(e) ? {
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
const uv = {
  x: 0.2,
  y: 0.2
};
function sv(e, t, n, r, l) {
  let {
    top: o,
    left: i,
    right: u,
    bottom: s
  } = n;
  r === void 0 && (r = 10), l === void 0 && (l = uv);
  const {
    isTop: a,
    isBottom: f,
    isLeft: d,
    isRight: v
  } = Ff(e), q = {
    x: 0,
    y: 0
  }, w = {
    x: 0,
    y: 0
  }, A = {
    height: t.height * l.y,
    width: t.width * l.x
  };
  return !a && o <= t.top + A.height ? (q.y = ge.Backward, w.y = r * Math.abs((t.top + A.height - o) / A.height)) : !f && s >= t.bottom - A.height && (q.y = ge.Forward, w.y = r * Math.abs((t.bottom - A.height - s) / A.height)), !v && u >= t.right - A.width ? (q.x = ge.Forward, w.x = r * Math.abs((t.right - A.width - u) / A.width)) : !d && i <= t.left + A.width && (q.x = ge.Backward, w.x = r * Math.abs((t.left + A.width - i) / A.width)), {
    direction: q,
    speed: w
  };
}
function av(e) {
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
function Bf(e) {
  return e.reduce((t, n) => bn(t, Du(n)), gt);
}
function cv(e) {
  return e.reduce((t, n) => t + Lf(n), 0);
}
function dv(e) {
  return e.reduce((t, n) => t + Pf(n), 0);
}
function fv(e, t) {
  if (t === void 0 && (t = ml), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: l,
    right: o
  } = t(e);
  Uf(e) && (l <= 0 || o <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const pv = [["x", ["left", "right"], cv], ["y", ["top", "bottom"], dv]];
class Us {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = Os(n), l = Bf(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [o, i, u] of pv)
      for (const s of i)
        Object.defineProperty(this, s, {
          get: () => {
            const a = u(r), f = l[o] - a;
            return this.rect[s] + f;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Fr {
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
function hv(e) {
  const {
    EventTarget: t
  } = je(e);
  return e instanceof t ? e : cr(e);
}
function Ni(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var $e;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})($e || ($e = {}));
function tc(e) {
  e.preventDefault();
}
function mv(e) {
  e.stopPropagation();
}
var _;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(_ || (_ = {}));
const jf = {
  start: [_.Space, _.Enter],
  cancel: [_.Esc],
  end: [_.Space, _.Enter]
}, vv = (e, t) => {
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
class Ls {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new Fr(cr(n)), this.windowListeners = new Fr(je(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add($e.Resize, this.handleCancel), this.windowListeners.add($e.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add($e.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && fv(r), n(gt);
  }
  handleKeyDown(t) {
    if (Tf(t)) {
      const {
        active: n,
        context: r,
        options: l
      } = this.props, {
        keyboardCodes: o = jf,
        coordinateGetter: i = vv,
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
      } = r.current, f = a ? {
        x: a.left,
        y: a.top
      } : gt;
      this.referenceCoordinates || (this.referenceCoordinates = f);
      const d = i(t, {
        active: n,
        context: r.current,
        currentCoordinates: f
      });
      if (d) {
        const v = Co(d, f), q = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: w
        } = r.current;
        for (const A of w) {
          const V = t.code, {
            isTop: p,
            isRight: c,
            isLeft: m,
            isBottom: S,
            maxScroll: E,
            minScroll: M
          } = Ff(A), k = av(A), C = {
            x: Math.min(V === _.Right ? k.right - k.width / 2 : k.right, Math.max(V === _.Right ? k.left : k.left + k.width / 2, d.x)),
            y: Math.min(V === _.Down ? k.bottom - k.height / 2 : k.bottom, Math.max(V === _.Down ? k.top : k.top + k.height / 2, d.y))
          }, F = V === _.Right && !c || V === _.Left && !m, I = V === _.Down && !S || V === _.Up && !p;
          if (F && C.x !== d.x) {
            const K = A.scrollLeft + v.x, ye = V === _.Right && K <= E.x || V === _.Left && K >= M.x;
            if (ye && !v.y) {
              A.scrollTo({
                left: K,
                behavior: u
              });
              return;
            }
            ye ? q.x = A.scrollLeft - K : q.x = V === _.Right ? A.scrollLeft - E.x : A.scrollLeft - M.x, q.x && A.scrollBy({
              left: -q.x,
              behavior: u
            });
            break;
          } else if (I && C.y !== d.y) {
            const K = A.scrollTop + v.y, ye = V === _.Down && K <= E.y || V === _.Up && K >= M.y;
            if (ye && !v.x) {
              A.scrollTo({
                top: K,
                behavior: u
              });
              return;
            }
            ye ? q.y = A.scrollTop - K : q.y = V === _.Down ? A.scrollTop - E.y : A.scrollTop - M.y, q.y && A.scrollBy({
              top: -q.y,
              behavior: u
            });
            break;
          }
        }
        this.handleMove(t, bn(Co(d, this.referenceCoordinates), q));
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
Ls.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = jf,
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
function nc(e) {
  return !!(e && "distance" in e);
}
function rc(e) {
  return !!(e && "delay" in e);
}
class Ps {
  constructor(t, n, r) {
    var l;
    r === void 0 && (r = hv(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: o
    } = t, {
      target: i
    } = o;
    this.props = t, this.events = n, this.document = cr(i), this.documentListeners = new Fr(this.document), this.listeners = new Fr(r), this.windowListeners = new Fr(je(i)), this.initialCoordinates = (l = Nu(o)) != null ? l : gt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
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
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add($e.Resize, this.handleCancel), this.windowListeners.add($e.DragStart, tc), this.windowListeners.add($e.VisibilityChange, this.handleCancel), this.windowListeners.add($e.ContextMenu, tc), this.documentListeners.add($e.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (rc(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay);
        return;
      }
      if (nc(n))
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
    t && (this.activated = !0, this.documentListeners.add($e.Click, mv, {
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
    const s = (n = Nu(t)) != null ? n : gt, a = Co(l, s);
    if (!r && u) {
      if (nc(u)) {
        if (u.tolerance != null && Ni(a, u.tolerance))
          return this.handleCancel();
        if (Ni(a, u.distance))
          return this.handleStart();
      }
      return rc(u) && Ni(a, u.tolerance) ? this.handleCancel() : void 0;
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
const gv = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class Qf extends Ps {
  constructor(t) {
    const {
      event: n
    } = t, r = cr(n.target);
    super(t, gv, r);
  }
}
Qf.activators = [{
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
const Av = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Ru;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Ru || (Ru = {}));
class Zf extends Ps {
  constructor(t) {
    super(t, Av, cr(t.event.target));
  }
}
Zf.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Ru.RightClick ? !1 : (r == null || r({
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
class Wf extends Ps {
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
Wf.activators = [{
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
var Br;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Br || (Br = {}));
var No;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(No || (No = {}));
function yv(e) {
  let {
    acceleration: t,
    activator: n = Br.Pointer,
    canScroll: r,
    draggingRect: l,
    enabled: o,
    interval: i = 5,
    order: u = No.TreeOrder,
    pointerCoordinates: s,
    scrollableAncestors: a,
    scrollableAncestorRects: f,
    delta: d,
    threshold: v
  } = e;
  const q = Sv({
    delta: d,
    disabled: !o
  }), [w, A] = Om(), V = y.useRef({
    x: 0,
    y: 0
  }), p = y.useRef({
    x: 0,
    y: 0
  }), c = y.useMemo(() => {
    switch (n) {
      case Br.Pointer:
        return s ? {
          top: s.y,
          bottom: s.y,
          left: s.x,
          right: s.x
        } : null;
      case Br.DraggableRect:
        return l;
    }
  }, [n, l, s]), m = y.useRef(null), S = y.useCallback(() => {
    const M = m.current;
    if (!M)
      return;
    const k = V.current.x * p.current.x, C = V.current.y * p.current.y;
    M.scrollBy(k, C);
  }, []), E = y.useMemo(() => u === No.TreeOrder ? [...a].reverse() : a, [u, a]);
  y.useEffect(
    () => {
      if (!o || !a.length || !c) {
        A();
        return;
      }
      for (const M of E) {
        if ((r == null ? void 0 : r(M)) === !1)
          continue;
        const k = a.indexOf(M), C = f[k];
        if (!C)
          continue;
        const {
          direction: F,
          speed: I
        } = sv(M, C, c, t, v);
        for (const K of ["x", "y"])
          q[K][F[K]] || (I[K] = 0, F[K] = 0);
        if (I.x > 0 || I.y > 0) {
          A(), m.current = M, w(S, i), V.current = I, p.current = F;
          return;
        }
      }
      V.current = {
        x: 0,
        y: 0
      }, p.current = {
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
      JSON.stringify(q),
      w,
      a,
      E,
      f,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const qv = {
  x: {
    [ge.Backward]: !1,
    [ge.Forward]: !1
  },
  y: {
    [ge.Backward]: !1,
    [ge.Forward]: !1
  }
};
function Sv(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = Mu(t);
  return hl((l) => {
    if (n || !r || !l)
      return qv;
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
function wv(e, t) {
  const n = t !== null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return hl((l) => {
    var o;
    return t === null ? null : (o = r ?? l) != null ? o : null;
  }, [r, t]);
}
function Vv(e, t) {
  return y.useMemo(() => e.reduce((n, r) => {
    const {
      sensor: l
    } = r, o = l.activators.map((i) => ({
      eventName: i.eventName,
      handler: t(i.handler, r)
    }));
    return [...n, ...o];
  }, []), [e, t]);
}
var ul;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(ul || (ul = {}));
var Tu;
(function(e) {
  e.Optimized = "optimized";
})(Tu || (Tu = {}));
const lc = /* @__PURE__ */ new Map();
function kv(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: l
  } = t;
  const [o, i] = y.useState(null), {
    frequency: u,
    measure: s,
    strategy: a
  } = l, f = y.useRef(e), d = V(), v = il(d), q = y.useCallback(function(p) {
    p === void 0 && (p = []), !v.current && i((c) => c === null ? p : c.concat(p.filter((m) => !c.includes(m))));
  }, [v]), w = y.useRef(null), A = hl((p) => {
    if (d && !n)
      return lc;
    if (!p || p === lc || f.current !== e || o != null) {
      const c = /* @__PURE__ */ new Map();
      for (let m of e) {
        if (!m)
          continue;
        if (o && o.length > 0 && !o.includes(m.id) && m.rect.current) {
          c.set(m.id, m.rect.current);
          continue;
        }
        const S = m.node.current, E = S ? new Us(s(S), S) : null;
        m.rect.current = E, E && c.set(m.id, E);
      }
      return c;
    }
    return p;
  }, [e, o, n, d, s]);
  return y.useEffect(() => {
    f.current = e;
  }, [e]), y.useEffect(
    () => {
      d || q();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, d]
  ), y.useEffect(
    () => {
      o && o.length > 0 && i(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(o)]
  ), y.useEffect(
    () => {
      d || typeof u != "number" || w.current !== null || (w.current = setTimeout(() => {
        q(), w.current = null;
      }, u));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, d, q, ...r]
  ), {
    droppableRects: A,
    measureDroppableContainers: q,
    measuringScheduled: o != null
  };
  function V() {
    switch (a) {
      case ul.Always:
        return !1;
      case ul.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function Gf(e, t) {
  return hl((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Ev(e, t) {
  return Gf(e, t);
}
function xv(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Is(t), l = y.useMemo(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: o
    } = window;
    return new o(r);
  }, [r, n]);
  return y.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function Ho(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Is(t), l = y.useMemo(
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
  return y.useEffect(() => () => l == null ? void 0 : l.disconnect(), [l]), l;
}
function Cv(e) {
  return new Us(ml(e), e);
}
function oc(e, t, n) {
  t === void 0 && (t = Cv);
  const [r, l] = y.useReducer(u, null), o = xv({
    callback(s) {
      if (e)
        for (const a of s) {
          const {
            type: f,
            target: d
          } = a;
          if (f === "childList" && d instanceof HTMLElement && d.contains(e)) {
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
    const f = t(e);
    return JSON.stringify(s) === JSON.stringify(f) ? s : f;
  }
}
function Mv(e) {
  const t = Gf(e);
  return Of(e, t);
}
const ic = [];
function Nv(e) {
  const t = y.useRef(e), n = hl((r) => e ? r && r !== ic && e && t.current && e.parentNode === t.current.parentNode ? r : Os(e) : ic, [e]);
  return y.useEffect(() => {
    t.current = e;
  }, [e]), n;
}
function Dv(e) {
  const [t, n] = y.useState(null), r = y.useRef(e), l = y.useCallback((o) => {
    const i = Mi(o.target);
    i && n((u) => u ? (u.set(i, Du(i)), new Map(u)) : null);
  }, []);
  return y.useEffect(() => {
    const o = r.current;
    if (e !== o) {
      i(o);
      const u = e.map((s) => {
        const a = Mi(s);
        return a ? (a.addEventListener("scroll", l, {
          passive: !0
        }), [a, Du(a)]) : null;
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
  }, [l, e]), y.useMemo(() => e.length ? t ? Array.from(t.values()).reduce((o, i) => bn(o, i), gt) : Bf(e) : gt, [e, t]);
}
function uc(e, t) {
  t === void 0 && (t = []);
  const n = y.useRef(null);
  return y.useEffect(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), y.useEffect(() => {
    const r = e !== gt;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Co(e, n.current) : gt;
}
function Rv(e) {
  y.useEffect(
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
function Tv(e, t) {
  return y.useMemo(() => e.reduce((n, r) => {
    let {
      eventName: l,
      handler: o
    } = r;
    return n[l] = (i) => {
      o(i, t);
    }, n;
  }, {}), [e, t]);
}
function Kf(e) {
  return y.useMemo(() => e ? lv(e) : null, [e]);
}
const Ri = [];
function Iv(e, t) {
  t === void 0 && (t = ml);
  const [n] = e, r = Kf(n ? je(n) : null), [l, o] = y.useReducer(u, Ri), i = Ho({
    callback: o
  });
  return e.length > 0 && l === Ri && o(), Ut(() => {
    e.length ? e.forEach((s) => i == null ? void 0 : i.observe(s)) : (i == null || i.disconnect(), o());
  }, [e]), l;
  function u() {
    return e.length ? e.map((s) => zf(s) ? r : new Us(t(s), s)) : Ri;
  }
}
function Ov(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return pl(t) ? t : e;
}
function Uv(e) {
  let {
    measure: t
  } = e;
  const [n, r] = y.useState(null), l = y.useCallback((a) => {
    for (const {
      target: f
    } of a)
      if (pl(f)) {
        r((d) => {
          const v = t(f);
          return d ? {
            ...d,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), o = Ho({
    callback: l
  }), i = y.useCallback((a) => {
    const f = Ov(a);
    o == null || o.disconnect(), f && (o == null || o.observe(f)), r(f ? t(f) : null);
  }, [t, o]), [u, s] = xo(i);
  return y.useMemo(() => ({
    nodeRef: u,
    rect: n,
    setRef: s
  }), [n, u, s]);
}
const Lv = [{
  sensor: Qf,
  options: {}
}, {
  sensor: Ls,
  options: {}
}], Pv = {
  current: {}
}, $l = {
  draggable: {
    measure: ec
  },
  droppable: {
    measure: ec,
    strategy: ul.WhileDragging,
    frequency: Tu.Optimized
  },
  dragOverlay: {
    measure: ml
  }
};
class jr extends Map {
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
const zv = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new jr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Mo
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: $l,
  measureDroppableContainers: Mo,
  windowRect: null,
  measuringScheduled: !1
}, Fv = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Mo,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Mo
}, Xo = /* @__PURE__ */ y.createContext(Fv), Bv = /* @__PURE__ */ y.createContext(zv);
function jv() {
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
      containers: new jr()
    }
  };
}
function Qv(e, t) {
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
      } = n, l = new jr(e.droppable.containers);
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
      const i = new jr(e.droppable.containers);
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
      const o = new jr(e.droppable.containers);
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
function Zv(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: l
  } = y.useContext(Xo), o = Mu(r), i = Mu(n == null ? void 0 : n.id);
  return y.useEffect(() => {
    if (!t && !r && o && i != null) {
      if (!Tf(o) || document.activeElement === o.target)
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
        for (const f of [s.current, a.current]) {
          if (!f)
            continue;
          const d = Pm(f);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [r, t, l, i, o]), null;
}
function Wv(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((l, o) => o({
    transform: l,
    ...r
  }), n) : n;
}
function Gv(e) {
  return y.useMemo(
    () => ({
      draggable: {
        ...$l.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...$l.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...$l.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function Kv(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: l = !0
  } = e;
  const o = y.useRef(!1), {
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
    const f = n(a), d = Of(f, r);
    if (i || (d.x = 0), u || (d.y = 0), o.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const v = Uf(a);
      v && v.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [t, i, u, r, n]);
}
const Jf = /* @__PURE__ */ y.createContext({
  ...gt,
  scaleX: 1,
  scaleY: 1
});
var Jt;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Jt || (Jt = {}));
const Jv = /* @__PURE__ */ y.memo(function(t) {
  var n, r, l, o;
  let {
    id: i,
    accessibility: u,
    autoScroll: s = !0,
    children: a,
    sensors: f = Lv,
    collisionDetection: d = bm,
    measuring: v,
    modifiers: q,
    ...w
  } = t;
  const A = y.useReducer(Qv, void 0, jv), [V, p] = A, [c, m] = Zm(), [S, E] = y.useState(Jt.Uninitialized), M = S === Jt.Initialized, {
    draggable: {
      active: k,
      nodes: C,
      translate: F
    },
    droppable: {
      containers: I
    }
  } = V, K = k ? C.get(k) : null, ye = y.useRef({
    initial: null,
    translated: null
  }), qe = y.useMemo(() => {
    var Se;
    return k != null ? {
      id: k,
      // It's possible for the active node to unmount while dragging
      data: (Se = K == null ? void 0 : K.data) != null ? Se : Pv,
      rect: ye
    } : null;
  }, [k, K]), Oe = y.useRef(null), [Ft, Et] = y.useState(null), [Ne, D] = y.useState(null), z = il(w, Object.values(w)), g = Jo("DndDescribedBy", i), h = y.useMemo(() => I.getEnabled(), [I]), N = Gv(v), {
    droppableRects: O,
    measureDroppableContainers: P,
    measuringScheduled: B
  } = kv(h, {
    dragging: M,
    dependencies: [F.x, F.y],
    config: N.droppable
  }), U = wv(C, k), L = y.useMemo(() => Ne ? Nu(Ne) : null, [Ne]), Q = $f(), X = Ev(U, N.draggable.measure);
  Kv({
    activeNode: k ? C.get(k) : null,
    config: Q.layoutShiftCompensation,
    initialRect: X,
    measure: N.draggable.measure
  });
  const W = oc(U, N.draggable.measure, X), Y = oc(U ? U.parentElement : null), H = y.useRef({
    activatorEvent: null,
    active: null,
    activeNode: U,
    collisionRect: null,
    collisions: null,
    droppableRects: O,
    draggableNodes: C,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: I,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), se = I.getNodeFor((n = H.current.over) == null ? void 0 : n.id), j = Uv({
    measure: N.dragOverlay.measure
  }), ce = (r = j.nodeRef.current) != null ? r : U, me = M ? (l = j.rect) != null ? l : W : null, Ue = !!(j.nodeRef.current && j.rect), Ye = Mv(Ue ? null : W), ut = Kf(ce ? je(ce) : null), de = Nv(M ? se ?? U : null), Mn = Iv(de), Nn = Wv(q, {
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
    draggingNodeRect: me,
    over: H.current.over,
    overlayNodeRect: j.rect,
    scrollableAncestors: de,
    scrollableAncestorRects: Mn,
    windowRect: ut
  }), vl = L ? bn(L, F) : null, dr = Dv(de), Yo = uc(dr), gl = uc(dr, [W]), Bt = bn(Nn, Yo), jt = me ? ev(me, Nn) : null, Qt = qe && jt ? d({
    active: qe,
    collisionRect: jt,
    droppableRects: O,
    droppableContainers: h,
    pointerCoordinates: vl
  }) : null, fr = Xm(Qt, "id"), [be, Al] = y.useState(null), bo = Ue ? Nn : bn(Nn, gl), Xf = _m(bo, (o = be == null ? void 0 : be.rect) != null ? o : null, W), Fs = y.useCallback(
    (Se, Qe) => {
      let {
        sensor: Ze,
        options: Zt
      } = Qe;
      if (Oe.current == null)
        return;
      const _e = C.get(Oe.current);
      if (!_e)
        return;
      const st = Se.nativeEvent, At = new Ze({
        active: Oe.current,
        activeNode: _e,
        event: st,
        options: Zt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: H,
        onStart(at) {
          const pr = Oe.current;
          if (pr == null)
            return;
          const hr = C.get(pr);
          if (!hr)
            return;
          const {
            onDragStart: yl
          } = z.current, ql = {
            active: {
              id: pr,
              data: hr.data,
              rect: ye
            }
          };
          Yt.unstable_batchedUpdates(() => {
            yl == null || yl(ql), E(Jt.Initializing), p({
              type: pe.DragStart,
              initialCoordinates: at,
              active: pr
            }), c({
              type: "onDragStart",
              event: ql
            });
          });
        },
        onMove(at) {
          p({
            type: pe.DragMove,
            coordinates: at
          });
        },
        onEnd: Dn(pe.DragEnd),
        onCancel: Dn(pe.DragCancel)
      });
      Yt.unstable_batchedUpdates(() => {
        Et(At), D(Se.nativeEvent);
      });
      function Dn(at) {
        return async function() {
          const {
            active: hr,
            collisions: yl,
            over: ql,
            scrollAdjustedTranslate: js
          } = H.current;
          let mr = null;
          if (hr && js) {
            const {
              cancelDrop: vr
            } = z.current;
            mr = {
              activatorEvent: st,
              active: hr,
              collisions: yl,
              delta: js,
              over: ql
            }, at === pe.DragEnd && typeof vr == "function" && await Promise.resolve(vr(mr)) && (at = pe.DragCancel);
          }
          Oe.current = null, Yt.unstable_batchedUpdates(() => {
            p({
              type: at
            }), E(Jt.Uninitialized), Al(null), Et(null), D(null);
            const vr = at === pe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (mr) {
              const _o = z.current[vr];
              _o == null || _o(mr), c({
                type: vr,
                event: mr
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [C]
  ), Yf = y.useCallback((Se, Qe) => (Ze, Zt) => {
    const _e = Ze.nativeEvent, st = C.get(Zt);
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
    Se(Ze, Qe.options, At) === !0 && (_e.dndKit = {
      capturedBy: Qe.sensor
    }, Oe.current = Zt, Fs(Ze, Qe));
  }, [C, Fs]), Bs = Vv(f, Yf);
  Rv(f), Ut(() => {
    W && S === Jt.Initializing && E(Jt.Initialized);
  }, [W, S]), y.useEffect(
    () => {
      const {
        onDragMove: Se
      } = z.current, {
        active: Qe,
        activatorEvent: Ze,
        collisions: Zt,
        over: _e
      } = H.current;
      if (!Qe || !Ze)
        return;
      const st = {
        active: Qe,
        activatorEvent: Ze,
        collisions: Zt,
        delta: {
          x: Bt.x,
          y: Bt.y
        },
        over: _e
      };
      Yt.unstable_batchedUpdates(() => {
        Se == null || Se(st), c({
          type: "onDragMove",
          event: st
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Bt.x, Bt.y]
  ), y.useEffect(
    () => {
      const {
        active: Se,
        activatorEvent: Qe,
        collisions: Ze,
        droppableContainers: Zt,
        scrollAdjustedTranslate: _e
      } = H.current;
      if (!Se || Oe.current == null || !Qe || !_e)
        return;
      const {
        onDragOver: st
      } = z.current, At = Zt.get(fr), Dn = At && At.rect.current ? {
        id: At.id,
        rect: At.rect.current,
        data: At.data,
        disabled: At.disabled
      } : null, at = {
        active: Se,
        activatorEvent: Qe,
        collisions: Ze,
        delta: {
          x: _e.x,
          y: _e.y
        },
        over: Dn
      };
      Yt.unstable_batchedUpdates(() => {
        Al(Dn), st == null || st(at), c({
          type: "onDragOver",
          event: at
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fr]
  ), Ut(() => {
    H.current = {
      activatorEvent: Ne,
      active: qe,
      activeNode: U,
      collisionRect: jt,
      collisions: Qt,
      droppableRects: O,
      draggableNodes: C,
      draggingNode: ce,
      draggingNodeRect: me,
      droppableContainers: I,
      over: be,
      scrollableAncestors: de,
      scrollAdjustedTranslate: Bt
    }, ye.current = {
      initial: me,
      translated: jt
    };
  }, [qe, U, Qt, jt, C, ce, me, O, I, be, de, Bt]), yv({
    ...Q,
    delta: F,
    draggingRect: jt,
    pointerCoordinates: vl,
    scrollableAncestors: de,
    scrollableAncestorRects: Mn
  });
  const bf = y.useMemo(() => ({
    active: qe,
    activeNode: U,
    activeNodeRect: W,
    activatorEvent: Ne,
    collisions: Qt,
    containerNodeRect: Y,
    dragOverlay: j,
    draggableNodes: C,
    droppableContainers: I,
    droppableRects: O,
    over: be,
    measureDroppableContainers: P,
    scrollableAncestors: de,
    scrollableAncestorRects: Mn,
    measuringConfiguration: N,
    measuringScheduled: B,
    windowRect: ut
  }), [qe, U, W, Ne, Qt, Y, j, C, I, O, be, P, de, Mn, N, B, ut]), _f = y.useMemo(() => ({
    activatorEvent: Ne,
    activators: Bs,
    active: qe,
    activeNodeRect: W,
    ariaDescribedById: {
      draggable: g
    },
    dispatch: p,
    draggableNodes: C,
    over: be,
    measureDroppableContainers: P
  }), [Ne, Bs, qe, W, p, g, C, be, P]);
  return J.createElement(If.Provider, {
    value: m
  }, J.createElement(Xo.Provider, {
    value: _f
  }, J.createElement(Bv.Provider, {
    value: bf
  }, J.createElement(Jf.Provider, {
    value: Xf
  }, a)), J.createElement(Zv, {
    disabled: (u == null ? void 0 : u.restoreFocus) === !1
  })), J.createElement(Km, {
    ...u,
    hiddenTextDescribedById: g
  }));
  function $f() {
    const Se = (Ft == null ? void 0 : Ft.autoScrollEnabled) === !1, Qe = typeof s == "object" ? s.enabled === !1 : s === !1, Ze = M && !Se && !Qe;
    return typeof s == "object" ? {
      ...s,
      enabled: Ze
    } : {
      enabled: Ze
    };
  }
}), Hv = /* @__PURE__ */ y.createContext(null), sc = "button", Xv = "Droppable";
function Yv(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: l
  } = e;
  const o = Jo(Xv), {
    activators: i,
    activatorEvent: u,
    active: s,
    activeNodeRect: a,
    ariaDescribedById: f,
    draggableNodes: d,
    over: v
  } = y.useContext(Xo), {
    role: q = sc,
    roleDescription: w = "draggable",
    tabIndex: A = 0
  } = l ?? {}, V = (s == null ? void 0 : s.id) === t, p = y.useContext(V ? Jf : Hv), [c, m] = xo(), [S, E] = xo(), M = Tv(i, t), k = il(n);
  Ut(
    () => (d.set(t, {
      id: t,
      key: o,
      node: c,
      activatorNode: S,
      data: k
    }), () => {
      const F = d.get(t);
      F && F.key === o && d.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, t]
  );
  const C = y.useMemo(() => ({
    role: q,
    tabIndex: A,
    "aria-disabled": r,
    "aria-pressed": V && q === sc ? !0 : void 0,
    "aria-roledescription": w,
    "aria-describedby": f.draggable
  }), [r, q, A, V, w, f.draggable]);
  return {
    active: s,
    activatorEvent: u,
    activeNodeRect: a,
    attributes: C,
    isDragging: V,
    listeners: r ? void 0 : M,
    node: c,
    over: v,
    setNodeRef: m,
    setActivatorNodeRef: E,
    transform: p
  };
}
const bv = "Droppable", _v = {
  timeout: 25
};
function $v(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: l
  } = e;
  const o = Jo(bv), {
    active: i,
    dispatch: u,
    over: s,
    measureDroppableContainers: a
  } = y.useContext(Xo), f = y.useRef({
    disabled: n
  }), d = y.useRef(!1), v = y.useRef(null), q = y.useRef(null), {
    disabled: w,
    updateMeasurementsFor: A,
    timeout: V
  } = {
    ..._v,
    ...l
  }, p = il(A ?? r), c = y.useCallback(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      q.current != null && clearTimeout(q.current), q.current = setTimeout(() => {
        a(Array.isArray(p.current) ? p.current : [p.current]), q.current = null;
      }, V);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [V]
  ), m = Ho({
    callback: c,
    disabled: w || !i
  }), S = y.useCallback((C, F) => {
    m && (F && (m.unobserve(F), d.current = !1), C && m.observe(C));
  }, [m]), [E, M] = xo(S), k = il(t);
  return y.useEffect(() => {
    !m || !E.current || (m.disconnect(), d.current = !1, m.observe(E.current));
  }, [E, m]), Ut(
    () => (u({
      type: pe.RegisterDroppable,
      element: {
        id: r,
        key: o,
        disabled: n,
        node: E,
        rect: v,
        data: k
      }
    }), () => u({
      type: pe.UnregisterDroppable,
      key: o,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), y.useEffect(() => {
    n !== f.current.disabled && (u({
      type: pe.SetDroppableDisabled,
      id: r,
      key: o,
      disabled: n
    }), f.current.disabled = n);
  }, [r, o, n, u]), {
    active: i,
    rect: v,
    isOver: (s == null ? void 0 : s.id) === r,
    node: E,
    over: s,
    setNodeRef: M
  };
}
function eg(e, t, n) {
  const r = {
    ...e
  };
  return t.top + e.y <= n.top ? r.y = n.top - t.top : t.bottom + e.y >= n.top + n.height && (r.y = n.top + n.height - t.bottom), t.left + e.x <= n.left ? r.x = n.left - t.left : t.right + e.x >= n.left + n.width && (r.x = n.left + n.width - t.right), r;
}
const tg = (e) => {
  let {
    transform: t,
    draggingNodeRect: n,
    windowRect: r
  } = e;
  return !n || !r ? t : eg(t, n, r);
}, ng = "data:audio/mpeg;base64,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NbC934LIrpabg3xE//uSZA+AIx1o3vnnTfRT7RvvFazojlmLZ6fBN9k2NG30JTL6dZtmtPnNf86Lf//Cb/v7XZ0zwej6mndXQ1nOExfhEQ////////+FH//7JpPFMwlSequRkIsUmm0QIYamw968GLySyazUzASAACABQOgeCqiOmif/0////6/P///8gGRSrPskmhRVKggifsF/NP////////UOI9//2NIfKoHThd5VopKlSsH8TKUSgqOiM2pu66l1XHRk5WLLbZdmUkgYAIzkvL6S0ijyJmg3BIyMz47mg4oysrrctyFpWSW+sa3ClrWy3a/1KdNO3BG/+rstu9ZJjic1TLpoXjIxc3OF86Uhw5iEOOFX////////RG+PD3/9ZdjIwitjrKzGQqWGEUQ+yk02Q5kPRF1V+OOOABQBnbKXHfdl///////FT///5WqHbpSqFQfHmoCv////////1DMl//icqub4yliOlskg9GoDwihy6dGCwnLSahPnsBlZnUJltFK5d3d4iWJJWHgFy9n8PkvBrp1RnIynaozhQ+hfGRTHfuNBfZVsXP/7kmQSgAOjaN157U30S20a/QZJvo55mWvntNmZLbRsvHab2uLVm8SHj41dJCtT9qX4lX//b6SyMYGCkEHOJGCBidRWFCSXHAW////////+sDqtX/5/LZIdKSA8mBhQdPmzoqOOaQkqSJWZolhHDXI2tRNQAAAAAAAQAR/////////4r////yqZHFmDrsxu62LheHdlgGvP////////8ORG2y//tNdt3OzmqufwroJMH5NU2fm0YQ1F3QHkpSSt3eHd3YTlQcAWXI6VkMQIOXIdgrpcDpOKc/WUv6NV6tgPaP8FnH9v/dlY8RrahNtLQt5z9f4Hi3+/WpfapZYX1Os1rQUm9ahoL+oL0cf////////Y4DANzf/nCEjk3pNIJOHlBRIKDZp1igCkAl2leLNQHaUAhgAGAAAHABX+KweEzP+rp/////8DP//+iFDWtm2tmQ1F3RBH03////////6goCl//5c0SxGkdAyJaCRY6nkw8wJBYQw61Qnr1Ra2TXaApgKAGj9N8ekdhxMyqVzgXpGwXM3UYpUC4ZnnhZjJv3//+5JkEgAjk2ZX6fNN9kqNG18FSb6POaNhp8mX0Raza/R2pvudZs9gb/RQed1/V9QIxH2/q7XUz0VIjieXkJkyKZkbpIrIePOUwQNG83////////cW9B//yJfCPmXMvJkSzRV0hOrMcwQOa2Kcm5XBkGKACs0AAAFAAoB/qpKv//5gD///8X////I1ZDtHXyoOi7hSk3////////sDcOf/1VpnFK1UowMxpYDQJBh8B/AV91PUEYrqg0jkra3t//9CkIMEPDcPiKLohaTIWfpbSRnig35kTtSrOS7hEthGtP3f5zFzBhZ1pJM6v1/gvDf/+9tRBUXdNTOlWk6jouyezILEFt//73WpBm1rS+k69f/1i5T//8qGVoIjhCOJgN8PDIMCqk5t8qJSwvOGy8wrRzUXp+XY0B5BQAIAN5YMNf6///////iE///+UKKl+3oD4U84ASQ2f///////+sMJr//1OMHo6P46NNKk6EUoYWjTF4LE3ttK1QxckGqSW2+ApgBBDCxCykxMIvESKZReirPDMdmQZNEJX4bQ+L7sA6Ir//uSZBKAY8xo1On0ZfREzNsvFA16z5mfT6xRN9j4M2x8MCnrefn9TvHD006KK3dl/V9QIyZa///6iaNrddfWcFOKanKgByoi5bZ2/2/Tq3+////UGsSv//iQLYTF02ovdQFEpwpHAd40ZxxgvKDpytpdTAhmW1q/UACAd3AAAAFAP/IC7nQiKTkX///5f96/zIdw8dYV5d////////+OQ///3Y+YpH0VJGJlTMyQOOkkmXJeWibJpG6A5WKQ5Z9rYCkAWEK5SxU93KjbPS/CKLtqnmXmtxR1JBE6CWW5BCuGBkuzw/eOrFLa5d9mUmm1XzvqLIE3pfV/r26vOGRdNUUkp5JBF6JfEtHY6h9gYZyG1K/+3+pv////dEQTGy//6acqRvYo4dsusImIpRwVQthWusp/GYEyW2sGZWiAH/DU58MBxhZtMRv///k3/9QqkXAsFP////////oEpv/5Qoh6KeSkpktMIWQgY0XlHNU5jUONOFL5p5Zb72CkAWCKClDNDgIaPjAhxe4BLAA2MRKqBPo1Za8ZkXLcDGMT1zXXw//7kmQVAAPEZ9Pp9DX0R2zbLywKltB9m0Hs1HfJHrNsvFA2E7dVjYSU6SLf1dSykCqcem//6/SD5XpotSSo1JEyK6OJExHUAQqEECdSX/2/7////+o6CAKRP/+dhNNknOGkijxiCnKnJeVtSCWF29XadqZmgJmXYAABQF6iPdUeeDw8byCIEnHEo2QA5L/En///44v/5gYD/QFoz////////1B8l//qcYpk1nOnOQsYY777Ho5rTSJeqoqw0O6AAYBIAzlv+194V6vardA8UcaSuJazdaVwzJrmd6VPCQcE2kuxyzuYWsKbG960GRtVWvI30iZA3YQA7B9n/99TOtjozTr/bzgoYomRPCyQMpgMDFwBJ41Sb+s9/1////X3RIcBgQOAoAiq7f+ZybSm4QGgQOO9cIZmTaH0jFMLVAGiId3ABgNgJ/c4SYwmBQ6tkUpjV+3/+P3/vqXWtt0xvf2uytj7jbrEea////////9nBdF9v/ztTaKal66TPdFFlqTRb5YzFUZneYcwAoAIAZnDJWDu7KXwYlk3eLOC4cy1mOX/+5JkDgADvGbQezWkwkUM2m0eQszPDaNHrFR30QOnq/xwNsocPyrDuE/AAElIvJeeQROLY8j7O7V60slPnAN1lEaKX//7zpOrf2350U8iDnA/MDcYQDr5YOqWr9Z7/pf///V6yGAYM0HGG//9dbbpmLrPbqYxWt01OhpprQLXAS6TSCBgAgCdDwlB4F55iFRUa173tu9/9ur//wQK3///of/1llKiXgMqE/s//X//////5wNSNP/6bor0c8+VaaSeuQW8RPSWxgpABhCMuftylSp9EA3UnXEo4s1aLyGvTQ1zlSvNR8HfIg6z7+uY/rX7VqZP3yz6iPA0cFhpof//50UGXlvSXVWijJ0gokyJiKcCAkA2yLKl/62/61qt///+oogVBItqS//qIOPJSyQbi0gS0hvRHfEiVgIwZADPMw7gtAAYD3zBqYHgSHgWA+JlUmlUjX3dWrN+Mb///6P/9RUnxMkn////////3RAg4tX/Veaa4DIrYGnVKBalV2iHmVBNiDBDiYjcMMRWp9j7Uohp0IYh44GQ6SwG8mq4q+5B//uSRBIAAxpn1nnxHmRjDNr/PaO+jGWLWefAd9l6J2i8zFIAYv1vVu3s8CvpndbNsa8H6vqAZ6X///WLm2/61D8TuYhZeNj///3////+mI5JO//1PZs+6GqWdyLj5ZIVMsKSmeJiYlxTVCYScdocB/kxFdH8Ts2SWshBDHXWD5MViPqKyMqu43Yv1v47+PEzr9a3/q+oC3///6w2kVUNT+mVARw18ZRG///9X////1CYFt//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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUQUdodHRwOi8vd3d3LmZyZWVzZnguY28udWsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/w==", rg = "data:audio/mpeg;base64,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";
let ac = Promise.resolve();
const lg = {
  true: ng,
  false: rg
}, Hf = () => {
  const e = document.createElement("button");
  return e.className = "video-play", e.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" viewBox="0 0 15 16">
      <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
    </svg>
  `, e;
}, og = (e, t, n) => {
  let r = !1;
  const l = document.createElement("div");
  l.className = "video-container", l.style = "position: absolute; top: 0; left: 0; right: 0; bottom: 0;";
  const o = document.createElement("video");
  o.src = e, o.autoplay = o.controls = !0;
  const i = Hf();
  i.onclick = () => o.play(), o.oncanplaythrough = () => !r && l.appendChild(i), o.onplaying = () => {
    r = !0;
    try {
      l.removeChild(i);
    } catch {
    }
  }, o.onended = () => {
    n.removeChild(l), t();
  }, l.appendChild(o), n.appendChild(l);
};
let Ti = null;
const ig = (e, t, n) => {
  const r = new Audio(e);
  r.onended = t, r.play().catch((l) => {
    if (l.name === "NotAllowedError") {
      const o = Hf();
      o.onclick = () => r.play(), r.onplaying = () => {
        try {
          n.removeChild(o);
        } catch (i) {
          console.log("e", i);
        }
      }, Ti && n.removeChild(Ti), n.appendChild(Ti = o);
    }
  });
}, Lt = {
  onFinished: async (e) => {
    await ac, e == null || e();
  },
  play: (e) => {
    const t = (e == null ? void 0 : e.type) === "video" ? og : ig, n = (e == null ? void 0 : e.src) || lg[e || !1];
    ac = new Promise((r) => t(n, r, document.getElementById("root")));
  }
};
function cc({ id: e, item: t }) {
  const { alt: n, image: r, html: l } = t, { active: o, attributes: i, isDragging: u, listeners: s, setNodeRef: a, transform: f } = Yv({
    id: e,
    attributes: { roleDescription: n }
  }), d = l ? { dangerouslySetInnerHTML: !!l && { __html: l } } : { children: /* @__PURE__ */ R.jsx("img", { className: "image", ...r, style: { pointerEvents: "none" } }) };
  return /* @__PURE__ */ R.jsx(
    "button",
    {
      ref: a,
      style: {
        transform: f ? `translate3d(${f.x}px, ${f.y}px, 0)` : "none",
        transition: u ? "none" : "transform 0.3s"
      },
      ...s,
      ...i,
      "aria-describedby": n,
      className: "itemButton",
      ...d
    }
  );
}
function ug({ html: e, id: t, index: n, children: r }) {
  const { isOver: l, setNodeRef: o } = $v({
    id: t,
    data: { current: n }
  });
  return /* @__PURE__ */ R.jsxs("div", { ref: o, className: `dropContainer ${l ? "over" : ""}`, children: [
    !!e && /* @__PURE__ */ R.jsx("h1", { className: "title", dangerouslySetInnerHTML: { __html: e } }),
    r
  ] });
}
function sg({ advanceStep: e, config: t }) {
  var q, w;
  const n = t.tokens.map((A, V) => ({ id: V + "", ...A })), [r, l] = y.useState([
    { itemIds: n.map(({ id: A }) => A) },
    ...t.zones.map((A) => ({ ...A, itemIds: [] }))
  ]), [o, i] = y.useState(null), u = Ci(Zf), s = Ci(Ls), a = Ci(Wf, {
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  }), f = Jm(u, s, a);
  function d(A) {
    const { active: V } = A;
    i(V.id.split("-")[1]);
  }
  function v(A) {
    var m, S, E;
    const { over: V } = A;
    if (!V)
      return;
    const p = r.find((M) => M.id === V.id), c = n[o];
    if (!(p.maxItems === 0 || !t.infiniteTokens && ((m = p.itemIds) == null ? void 0 : m.length) >= (p.maxItems || t.maxItems)))
      return [c.answer].flat().includes(V.id) ? (l((M) => M.map((k, C) => {
        let F = t.infiniteTokens ? C ? k.itemIds : k.itemIds.map((I) => I.split(".")[0] == o ? o + "." + Date.now() : I) : k.itemIds.filter((I) => I != o);
        return k.id === V.id && (F = [...F, o], t.infiniteTokens && (F = F.slice(-1 * (p.maxItems ?? t.maxItems)))), { ...k, itemIds: F };
      })), Lt.play(((E = c.feedback) == null ? void 0 : E.correct) || !0), i(null)) : Lt.play(((S = c.feedback) == null ? void 0 : S.incorrect) || !1);
  }
  return y.useEffect(() => {
    var A, V;
    t.infiniteTokens ? r != null && r.slice(1).every((p) => {
      var c;
      return (((c = p.itemIds) == null ? void 0 : c.length) || 0) === (p.maxItems ?? 1);
    }) && e() : (V = (A = r[0]) == null ? void 0 : A.itemIds) != null && V.length || e();
  }, [e, r]), /* @__PURE__ */ R.jsx("article", { className: "dndBox", style: { backgroundImage: `url(${t.backgroundImage || ""})` }, children: /* @__PURE__ */ R.jsxs(
    Jv,
    {
      sensors: f,
      onDragStart: d,
      onDragEnd: v,
      modifiers: [tg],
      children: [
        /* @__PURE__ */ R.jsxs("div", { className: ["dndLayout", t.layout].flat().join(" "), children: [
          !!t.html && /* @__PURE__ */ R.jsx("div", { className: "question", dangerouslySetInnerHTML: { __html: t.html } }),
          /* @__PURE__ */ R.jsx("div", { className: "dropZone", children: r.slice(1).map((A, V) => {
            var p;
            return A.maxItems === 0 ? /* @__PURE__ */ R.jsx("div", { className: "dropContainer disabled", children: A.html }) : /* @__PURE__ */ R.jsx(
              ug,
              {
                index: V,
                ...A,
                children: (p = A.itemIds) == null ? void 0 : p.map((c) => {
                  const m = n[c];
                  return /* @__PURE__ */ R.jsx(cc, { id: V + "-" + c, item: m }, c);
                })
              },
              V
            );
          }) })
        ] }),
        /* @__PURE__ */ R.jsx("div", { className: "footer", children: (w = (q = r[0]) == null ? void 0 : q.itemIds) == null ? void 0 : w.map((A) => {
          const V = n[A.split(".")[0]];
          return /* @__PURE__ */ R.jsx(cc, { id: "footer-" + V.id, item: V }, A);
        }) })
      ]
    }
  ) });
}
const dc = {
  "+": (e, t) => e + t,
  "−": (e, t) => e - t,
  "×": (e, t) => e * t,
  "÷": (e, t) => e / t
};
function ag({ advanceStep: e, config: t }) {
  const [n, r] = y.useState(), [l, o] = y.useState("0"), [i, u] = y.useState(0), s = y.useCallback(() => {
    a(), o("0"), u(0);
  }, []);
  y.useEffect(() => {
    var f, d;
    n === "=" && (i === t.answer ? (Lt.play(((f = t.feedback) == null ? void 0 : f.correct) || !0), e()) : (Lt.play((d = t.feedback) == null ? void 0 : d.incorrect), s()), a());
  }, [e, n, i]);
  const a = (f) => {
    l && (u((d) => Math.round(1e3 * dc[n || "+"](d, parseFloat(l))) / 1e3), o("")), r(f);
  };
  return /* @__PURE__ */ R.jsxs("article", { className: "calculatorPage", style: { backgroundImage: `url(${t.backgroundImage || ""})` }, children: [
    !!t.html && /* @__PURE__ */ R.jsx("div", { dangerouslySetInnerHTML: { __html: t.html } }),
    /* @__PURE__ */ R.jsxs("div", { className: "flex-row", children: [
      /* @__PURE__ */ R.jsx("div", { children: /* @__PURE__ */ R.jsxs("div", { className: "calculator", children: [
        /* @__PURE__ */ R.jsx("input", { readOnly: !0, value: (n || i ? i : "") + (n || "") + l }),
        /* @__PURE__ */ R.jsxs("div", { className: "calculator_numbers", children: [
          /* @__PURE__ */ R.jsx("button", { onClick: s, children: "Clear" }),
          Array(10).fill().map((f, d) => d).slice(1).reverse().map((f) => /* @__PURE__ */ R.jsx("button", { onClick: () => o((d) => parseFloat("" + d + f) + ""), children: f }, f)),
          /* @__PURE__ */ R.jsx("button", { onClick: () => o((f) => f ? f.includes(".") ? f : f + "." : "0."), children: "." }),
          /* @__PURE__ */ R.jsx("button", { onClick: () => o((f) => parseFloat("" + f + 0) + ""), children: "0" })
        ] }),
        /* @__PURE__ */ R.jsxs("div", { className: "calculator_actions", children: [
          Object.keys(dc).reverse().map((f) => /* @__PURE__ */ R.jsx("button", { onClick: () => a(f), children: f }, f)),
          /* @__PURE__ */ R.jsx("button", { onClick: () => a("="), children: "=" })
        ] })
      ] }) }),
      /* @__PURE__ */ R.jsx("div", { children: !!t.image && /* @__PURE__ */ R.jsx("img", { src: t.image }) })
    ] })
  ] });
}
function cg({ advanceStep: e, config: t }) {
  var i;
  const [n, r] = y.useState([]), l = Object.values(n).filter(Boolean).map(({ price: u }) => u).reduce((u, s) => u + s, 0), o = y.useCallback((u) => {
    r((s) => {
      var a, f;
      if (s.includes(u))
        return s.filter((d) => d !== u);
      {
        const d = l + u.price, v = s.length + 1, q = d === t.budget && v === t.maxItems;
        return d < t.budget && v < t.maxItems || q ? (Lt.play(((a = t.feedback) == null ? void 0 : a.correct) || !0), q && e(), [...s, u]) : (Lt.play((f = t.feedback) == null ? void 0 : f.incorrect), s);
      }
    });
  }, [l]);
  return /* @__PURE__ */ R.jsxs("article", { className: "cupcakeBuilderPage", style: { backgroundImage: `url(${t.backgroundImage || ""})` }, children: [
    !!t.html && /* @__PURE__ */ R.jsx("div", { dangerouslySetInnerHTML: { __html: t.html } }),
    /* @__PURE__ */ R.jsxs("div", { className: "flex-row", children: [
      /* @__PURE__ */ R.jsx("div", { className: "budget", children: Array(t.budget).fill().map((u, s) => {
        var a;
        return /* @__PURE__ */ R.jsx(
          "img",
          {
            style: { maxHeight: 40 / t.budget + "rem" },
            ...(a = t.currency) == null ? void 0 : a.image,
            className: l > s ? "unavailable" : ""
          },
          s
        );
      }) }),
      /* @__PURE__ */ R.jsx("div", { className: "tokens", children: (i = t.tokens) == null ? void 0 : i.map((u, s) => {
        const { image: a, name: f, price: d } = u;
        return /* @__PURE__ */ R.jsxs(
          "button",
          {
            className: n.includes(u) ? "selected" : "",
            onClick: () => o(u),
            children: [
              /* @__PURE__ */ R.jsx("img", { style: { maxHeight: 40 / Math.ceil(t.tokens.length / 2) + "rem" }, ...a }),
              /* @__PURE__ */ R.jsxs("div", { children: [
                f,
                " $",
                d
              ] })
            ]
          },
          s
        );
      }) })
    ] })
  ] });
}
function dg({ answer: e, inputSelection: t }) {
  return /* @__PURE__ */ R.jsx("button", { className: "answer", onClick: () => t(e), dangerouslySetInnerHTML: { __html: e.html } });
}
function fg({ advanceStep: e, config: t }) {
  const n = t.options;
  function r(l) {
    Lt.play(l.feedback || l.correct), l.correct && e(l.goto);
  }
  return /* @__PURE__ */ R.jsxs("article", { style: { backgroundImage: `url(${t.backgroundImage || ""})` }, children: [
    /* @__PURE__ */ R.jsx("div", { className: "question", dangerouslySetInnerHTML: { __html: t.html } }),
    /* @__PURE__ */ R.jsx("div", { className: "footer", children: n.map((l, o) => /* @__PURE__ */ R.jsx(
      dg,
      {
        answer: l,
        inputSelection: r
      },
      o
    )) })
  ] });
}
const pg = ({ onFinished: e, ...t }) => {
  const n = y.useRef(), [r, l] = y.useState(), o = y.useCallback(() => l((u) => u !== !1), []), i = y.useCallback(() => l(!1), []);
  return /* @__PURE__ */ R.jsxs("div", { id: "video-container", className: "video-container", children: [
    /* @__PURE__ */ R.jsx(
      "video",
      {
        autoPlay: !0,
        controls: !0,
        width: "100%",
        ref: n,
        onCanPlayThrough: o,
        onPlaying: i,
        onEnded: e,
        children: /* @__PURE__ */ R.jsx("source", { type: "video/mp4", ...t })
      }
    ),
    !!r && /* @__PURE__ */ R.jsx("div", { className: "video-overlay", children: /* @__PURE__ */ R.jsx("button", { className: "video-play", onClick: () => {
      var u;
      return (u = n.current) == null ? void 0 : u.play();
    }, children: /* @__PURE__ */ R.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "70%", height: "70%", fill: "currentColor", viewBox: "0 0 15 16", children: /* @__PURE__ */ R.jsx("path", { d: "M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" }) }) }) })
  ] });
}, hg = ({ advanceStep: e, config: { video: t } }) => /* @__PURE__ */ R.jsx(pg, { onFinished: e, ...t });
var zs = {};
(function e(t, n, r, l) {
  var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), i = typeof Path2D == "function" && typeof DOMMatrix == "function", u = function() {
    if (!t.OffscreenCanvas)
      return !1;
    var g = new OffscreenCanvas(1, 1), h = g.getContext("2d");
    h.fillRect(0, 0, 1, 1);
    var N = g.transferToImageBitmap();
    try {
      h.createPattern(N, "no-repeat");
    } catch {
      return !1;
    }
    return !0;
  }();
  function s() {
  }
  function a(g) {
    var h = n.exports.Promise, N = h !== void 0 ? h : t.Promise;
    return typeof N == "function" ? new N(g) : (g(s, s), null);
  }
  var f = /* @__PURE__ */ function(g, h) {
    return {
      transform: function(N) {
        if (g)
          return N;
        if (h.has(N))
          return h.get(N);
        var O = new OffscreenCanvas(N.width, N.height), P = O.getContext("2d");
        return P.drawImage(N, 0, 0), h.set(N, O), O;
      },
      clear: function() {
        h.clear();
      }
    };
  }(u, /* @__PURE__ */ new Map()), d = function() {
    var g = Math.floor(16.666666666666668), h, N, O = {}, P = 0;
    return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (h = function(B) {
      var U = Math.random();
      return O[U] = requestAnimationFrame(function L(Q) {
        P === Q || P + g - 1 < Q ? (P = Q, delete O[U], B()) : O[U] = requestAnimationFrame(L);
      }), U;
    }, N = function(B) {
      O[B] && cancelAnimationFrame(O[B]);
    }) : (h = function(B) {
      return setTimeout(B, g);
    }, N = function(B) {
      return clearTimeout(B);
    }), { frame: h, cancel: N };
  }(), v = /* @__PURE__ */ function() {
    var g, h, N = {};
    function O(P) {
      function B(U, L) {
        P.postMessage({ options: U || {}, callback: L });
      }
      P.init = function(L) {
        var Q = L.transferControlToOffscreen();
        P.postMessage({ canvas: Q }, [Q]);
      }, P.fire = function(L, Q, X) {
        if (h)
          return B(L, null), h;
        var W = Math.random().toString(36).slice(2);
        return h = a(function(Y) {
          function H(se) {
            se.data.callback === W && (delete N[W], P.removeEventListener("message", H), h = null, f.clear(), X(), Y());
          }
          P.addEventListener("message", H), B(L, W), N[W] = H.bind(null, { data: { callback: W } });
        }), h;
      }, P.reset = function() {
        P.postMessage({ reset: !0 });
        for (var L in N)
          N[L](), delete N[L];
      };
    }
    return function() {
      if (g)
        return g;
      if (!r && o) {
        var P = [
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
          g = new Worker(URL.createObjectURL(new Blob([P])));
        } catch (B) {
          return typeof console !== void 0 && typeof console.warn == "function" && console.warn("🎊 Could not load worker", B), null;
        }
        O(g);
      }
      return g;
    };
  }(), q = {
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
  function w(g, h) {
    return h ? h(g) : g;
  }
  function A(g) {
    return g != null;
  }
  function V(g, h, N) {
    return w(
      g && A(g[h]) ? g[h] : q[h],
      N
    );
  }
  function p(g) {
    return g < 0 ? 0 : Math.floor(g);
  }
  function c(g, h) {
    return Math.floor(Math.random() * (h - g)) + g;
  }
  function m(g) {
    return parseInt(g, 16);
  }
  function S(g) {
    return g.map(E);
  }
  function E(g) {
    var h = String(g).replace(/[^0-9a-f]/gi, "");
    return h.length < 6 && (h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]), {
      r: m(h.substring(0, 2)),
      g: m(h.substring(2, 4)),
      b: m(h.substring(4, 6))
    };
  }
  function M(g) {
    var h = V(g, "origin", Object);
    return h.x = V(h, "x", Number), h.y = V(h, "y", Number), h;
  }
  function k(g) {
    g.width = document.documentElement.clientWidth, g.height = document.documentElement.clientHeight;
  }
  function C(g) {
    var h = g.getBoundingClientRect();
    g.width = h.width, g.height = h.height;
  }
  function F(g) {
    var h = document.createElement("canvas");
    return h.style.position = "fixed", h.style.top = "0px", h.style.left = "0px", h.style.pointerEvents = "none", h.style.zIndex = g, h;
  }
  function I(g, h, N, O, P, B, U, L, Q) {
    g.save(), g.translate(h, N), g.rotate(B), g.scale(O, P), g.arc(0, 0, 1, U, L, Q), g.restore();
  }
  function K(g) {
    var h = g.angle * (Math.PI / 180), N = g.spread * (Math.PI / 180);
    return {
      x: g.x,
      y: g.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: g.startVelocity * 0.5 + Math.random() * g.startVelocity,
      angle2D: -h + (0.5 * N - Math.random() * N),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: g.color,
      shape: g.shape,
      tick: 0,
      totalTicks: g.ticks,
      decay: g.decay,
      drift: g.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: g.gravity * 3,
      ovalScalar: 0.6,
      scalar: g.scalar,
      flat: g.flat
    };
  }
  function ye(g, h) {
    h.x += Math.cos(h.angle2D) * h.velocity + h.drift, h.y += Math.sin(h.angle2D) * h.velocity + h.gravity, h.velocity *= h.decay, h.flat ? (h.wobble = 0, h.wobbleX = h.x + 10 * h.scalar, h.wobbleY = h.y + 10 * h.scalar, h.tiltSin = 0, h.tiltCos = 0, h.random = 1) : (h.wobble += h.wobbleSpeed, h.wobbleX = h.x + 10 * h.scalar * Math.cos(h.wobble), h.wobbleY = h.y + 10 * h.scalar * Math.sin(h.wobble), h.tiltAngle += 0.1, h.tiltSin = Math.sin(h.tiltAngle), h.tiltCos = Math.cos(h.tiltAngle), h.random = Math.random() + 2);
    var N = h.tick++ / h.totalTicks, O = h.x + h.random * h.tiltCos, P = h.y + h.random * h.tiltSin, B = h.wobbleX + h.random * h.tiltCos, U = h.wobbleY + h.random * h.tiltSin;
    if (g.fillStyle = "rgba(" + h.color.r + ", " + h.color.g + ", " + h.color.b + ", " + (1 - N) + ")", g.beginPath(), i && h.shape.type === "path" && typeof h.shape.path == "string" && Array.isArray(h.shape.matrix))
      g.fill(Ne(
        h.shape.path,
        h.shape.matrix,
        h.x,
        h.y,
        Math.abs(B - O) * 0.1,
        Math.abs(U - P) * 0.1,
        Math.PI / 10 * h.wobble
      ));
    else if (h.shape.type === "bitmap") {
      var L = Math.PI / 10 * h.wobble, Q = Math.abs(B - O) * 0.1, X = Math.abs(U - P) * 0.1, W = h.shape.bitmap.width * h.scalar, Y = h.shape.bitmap.height * h.scalar, H = new DOMMatrix([
        Math.cos(L) * Q,
        Math.sin(L) * Q,
        -Math.sin(L) * X,
        Math.cos(L) * X,
        h.x,
        h.y
      ]);
      H.multiplySelf(new DOMMatrix(h.shape.matrix));
      var se = g.createPattern(f.transform(h.shape.bitmap), "no-repeat");
      se.setTransform(H), g.globalAlpha = 1 - N, g.fillStyle = se, g.fillRect(
        h.x - W / 2,
        h.y - Y / 2,
        W,
        Y
      ), g.globalAlpha = 1;
    } else if (h.shape === "circle")
      g.ellipse ? g.ellipse(h.x, h.y, Math.abs(B - O) * h.ovalScalar, Math.abs(U - P) * h.ovalScalar, Math.PI / 10 * h.wobble, 0, 2 * Math.PI) : I(g, h.x, h.y, Math.abs(B - O) * h.ovalScalar, Math.abs(U - P) * h.ovalScalar, Math.PI / 10 * h.wobble, 0, 2 * Math.PI);
    else if (h.shape === "star")
      for (var j = Math.PI / 2 * 3, ce = 4 * h.scalar, me = 8 * h.scalar, Ue = h.x, Ye = h.y, ut = 5, de = Math.PI / ut; ut--; )
        Ue = h.x + Math.cos(j) * me, Ye = h.y + Math.sin(j) * me, g.lineTo(Ue, Ye), j += de, Ue = h.x + Math.cos(j) * ce, Ye = h.y + Math.sin(j) * ce, g.lineTo(Ue, Ye), j += de;
    else
      g.moveTo(Math.floor(h.x), Math.floor(h.y)), g.lineTo(Math.floor(h.wobbleX), Math.floor(P)), g.lineTo(Math.floor(B), Math.floor(U)), g.lineTo(Math.floor(O), Math.floor(h.wobbleY));
    return g.closePath(), g.fill(), h.tick < h.totalTicks;
  }
  function qe(g, h, N, O, P) {
    var B = h.slice(), U = g.getContext("2d"), L, Q, X = a(function(W) {
      function Y() {
        L = Q = null, U.clearRect(0, 0, O.width, O.height), f.clear(), P(), W();
      }
      function H() {
        r && !(O.width === l.width && O.height === l.height) && (O.width = g.width = l.width, O.height = g.height = l.height), !O.width && !O.height && (N(g), O.width = g.width, O.height = g.height), U.clearRect(0, 0, O.width, O.height), B = B.filter(function(se) {
          return ye(U, se);
        }), B.length ? L = d.frame(H) : Y();
      }
      L = d.frame(H), Q = Y;
    });
    return {
      addFettis: function(W) {
        return B = B.concat(W), X;
      },
      canvas: g,
      promise: X,
      reset: function() {
        L && d.cancel(L), Q && Q();
      }
    };
  }
  function Oe(g, h) {
    var N = !g, O = !!V(h || {}, "resize"), P = !1, B = V(h, "disableForReducedMotion", Boolean), U = o && !!V(h || {}, "useWorker"), L = U ? v() : null, Q = N ? k : C, X = g && L ? !!g.__confetti_initialized : !1, W = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, Y;
    function H(j, ce, me) {
      for (var Ue = V(j, "particleCount", p), Ye = V(j, "angle", Number), ut = V(j, "spread", Number), de = V(j, "startVelocity", Number), Mn = V(j, "decay", Number), Nn = V(j, "gravity", Number), vl = V(j, "drift", Number), dr = V(j, "colors", S), Yo = V(j, "ticks", Number), gl = V(j, "shapes"), Bt = V(j, "scalar"), jt = !!V(j, "flat"), Qt = M(j), fr = Ue, be = [], Al = g.width * Qt.x, bo = g.height * Qt.y; fr--; )
        be.push(
          K({
            x: Al,
            y: bo,
            angle: Ye,
            spread: ut,
            startVelocity: de,
            color: dr[fr % dr.length],
            shape: gl[c(0, gl.length)],
            ticks: Yo,
            decay: Mn,
            gravity: Nn,
            drift: vl,
            scalar: Bt,
            flat: jt
          })
        );
      return Y ? Y.addFettis(be) : (Y = qe(g, be, Q, ce, me), Y.promise);
    }
    function se(j) {
      var ce = B || V(j, "disableForReducedMotion", Boolean), me = V(j, "zIndex", Number);
      if (ce && W)
        return a(function(de) {
          de();
        });
      N && Y ? g = Y.canvas : N && !g && (g = F(me), document.body.appendChild(g)), O && !X && Q(g);
      var Ue = {
        width: g.width,
        height: g.height
      };
      L && !X && L.init(g), X = !0, L && (g.__confetti_initialized = !0);
      function Ye() {
        if (L) {
          var de = {
            getBoundingClientRect: function() {
              if (!N)
                return g.getBoundingClientRect();
            }
          };
          Q(de), L.postMessage({
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
        Y = null, O && (P = !1, t.removeEventListener("resize", Ye)), N && g && (document.body.removeChild(g), g = null, X = !1);
      }
      return O && !P && (P = !0, t.addEventListener("resize", Ye, !1)), L ? L.fire(j, Ue, ut) : H(j, Ue, ut);
    }
    return se.reset = function() {
      L && L.reset(), Y && Y.reset();
    }, se;
  }
  var Ft;
  function Et() {
    return Ft || (Ft = Oe(null, { useWorker: !0, resize: !0 })), Ft;
  }
  function Ne(g, h, N, O, P, B, U) {
    var L = new Path2D(g), Q = new Path2D();
    Q.addPath(L, new DOMMatrix(h));
    var X = new Path2D();
    return X.addPath(Q, new DOMMatrix([
      Math.cos(U) * P,
      Math.sin(U) * P,
      -Math.sin(U) * B,
      Math.cos(U) * B,
      N,
      O
    ])), X;
  }
  function D(g) {
    if (!i)
      throw new Error("path confetti are not supported in this browser");
    var h, N;
    typeof g == "string" ? h = g : (h = g.path, N = g.matrix);
    var O = new Path2D(h), P = document.createElement("canvas"), B = P.getContext("2d");
    if (!N) {
      for (var U = 1e3, L = U, Q = U, X = 0, W = 0, Y, H, se = 0; se < U; se += 2)
        for (var j = 0; j < U; j += 2)
          B.isPointInPath(O, se, j, "nonzero") && (L = Math.min(L, se), Q = Math.min(Q, j), X = Math.max(X, se), W = Math.max(W, j));
      Y = X - L, H = W - Q;
      var ce = 10, me = Math.min(ce / Y, ce / H);
      N = [
        me,
        0,
        0,
        me,
        -Math.round(Y / 2 + L) * me,
        -Math.round(H / 2 + Q) * me
      ];
    }
    return {
      type: "path",
      path: h,
      matrix: N
    };
  }
  function z(g) {
    var h, N = 1, O = "#000000", P = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    typeof g == "string" ? h = g : (h = g.text, N = "scalar" in g ? g.scalar : N, P = "fontFamily" in g ? g.fontFamily : P, O = "color" in g ? g.color : O);
    var B = 10 * N, U = "" + B + "px " + P, L = new OffscreenCanvas(B, B), Q = L.getContext("2d");
    Q.font = U;
    var X = Q.measureText(h), W = Math.ceil(X.actualBoundingBoxRight + X.actualBoundingBoxLeft), Y = Math.ceil(X.actualBoundingBoxAscent + X.actualBoundingBoxDescent), H = 2, se = X.actualBoundingBoxLeft + H, j = X.actualBoundingBoxAscent + H;
    W += H + H, Y += H + H, L = new OffscreenCanvas(W, Y), Q = L.getContext("2d"), Q.font = U, Q.fillStyle = O, Q.fillText(h, se, j);
    var ce = 1 / N;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: L.transferToImageBitmap(),
      matrix: [ce, 0, 0, ce, -W * ce / 2, -Y * ce / 2]
    };
  }
  n.exports = function() {
    return Et().apply(this, arguments);
  }, n.exports.reset = function() {
    Et().reset();
  }, n.exports.create = Oe, n.exports.shapeFromPath = D, n.exports.shapeFromText = z;
})(/* @__PURE__ */ function() {
  return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
}(), zs, !1);
const fc = zs.exports;
zs.exports.create;
const mg = () => /* @__PURE__ */ R.jsx(
  "svg",
  {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: "star",
    viewBox: "0 0 600 475",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ R.jsx("g", { children: /* @__PURE__ */ R.jsx("path", { style: { fillRule: "evenodd", clipRule: "evenodd", stroke: "black", strokeWidth: "0.5rem", fill: "yellow" }, d: `M331.9,56.7l32.6,79.8c2.5,6.2,8,10.1,14.6,10.6l86,6.4c14.2,1,25.7,10.1,30.1,23.6
		c4.4,13.5,0.4,27.6-10.5,36.8l-65.9,55.7c-5.1,4.3-7.2,10.7-5.6,17.2l20.5,83.8c3.4,13.8-1.6,27.6-13.2,35.9
		c-11.5,8.4-26.1,8.9-38.2,1.4l-82.4-51l-82.4,51c-12.1,7.5-26.7,7-38.2-1.4c-11.5-8.4-16.5-22.1-13.2-35.9l20.5-83.8
		c1.6-6.5-0.5-12.9-5.6-17.2l-65.9-55.7c-10.9-9.2-14.9-23.3-10.5-36.8c4.4-13.5,15.9-22.6,30.1-23.6l86-6.4
		c6.7-0.5,12.1-4.4,14.6-10.6l32.6-79.8c5.4-13.2,17.5-21.3,31.8-21.3C314.4,35.3,326.5,43.5,331.9,56.7L331.9,56.7z` }) })
  }
), vg = () => (y.useEffect(() => {
  fc({ gravity: 0.25, origin: { x: 0, y: 0.75 }, angle: 60 }), fc({ gravity: 0.25, origin: { x: 1, y: 0.75 }, angle: 120 });
}, []), /* @__PURE__ */ R.jsxs("div", { className: "celebration", children: [
  /* @__PURE__ */ R.jsx(mg, {}),
  /* @__PURE__ */ R.jsx("h1", { children: "Great Job!" })
] })), gg = (e) => {
  switch (e) {
    case "matching":
      return sg;
    case "multiple-choice":
      return fg;
    case "video":
      return hg;
    case "calculator":
      return ag;
    case "cupcake":
      return cg;
    default:
      return ({ advanceStep: t }) => /* @__PURE__ */ R.jsxs("div", { children: [
        /* @__PURE__ */ R.jsxs("p", { children: [
          "Missing component for type `",
          e,
          "`"
        ] }),
        /* @__PURE__ */ R.jsx("button", { onClick: () => t(), children: "Next >" })
      ] });
  }
};
function Ag({ config: e }) {
  var f;
  const { sequence: t } = e || {}, [n, r] = y.useState(0), [l, o] = y.useState(!1), u = y.useRef(t.map(() => y.createRef())).current[n], s = y.useCallback(async (d) => {
    await Lt.onFinished();
    const v = d ?? n + 1;
    console.log("goto", v, t == null ? void 0 : t[v]), t != null && t[v] ? setTimeout(() => {
      r(v);
    }, 1e3) : (o(!0), setTimeout(() => {
      window.parent.postMessage({ event: "nextSlide" }, "*");
    }, 6e3));
  }, [n]);
  y.useEffect(() => {
    var v;
    const d = (v = t == null ? void 0 : t[n]) == null ? void 0 : v.media;
    d && Lt.play(d);
  }, [n]);
  const a = gg((f = t == null ? void 0 : t[n]) == null ? void 0 : f.type);
  return /* @__PURE__ */ R.jsx("main", { children: /* @__PURE__ */ R.jsx(Im, { mode: "out-in", children: /* @__PURE__ */ R.jsx(
    Nm,
    {
      nodeRef: u,
      timeout: 500,
      classNames: "transition",
      addEndListener: (d) => {
        var v;
        (v = u.current) == null || v.addEventListener("transitionend", d, !1);
      },
      children: /* @__PURE__ */ R.jsxs("div", { ref: u, children: [
        /* @__PURE__ */ R.jsx(a, { config: t == null ? void 0 : t[n], advanceStep: s }),
        !!l && /* @__PURE__ */ R.jsx(vg, {})
      ] })
    },
    n
  ) }) });
}
const yg = {
  Init: (e, t) => {
    Ii.createRoot(e).render(
      /* @__PURE__ */ R.jsx(J.StrictMode, { children: /* @__PURE__ */ R.jsx(Ag, { config: t }) })
    );
  }
};
export {
  yg as default
};
