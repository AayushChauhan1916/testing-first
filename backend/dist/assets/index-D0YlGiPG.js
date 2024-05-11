var K1 = Object.defineProperty;
var q1 = (e, t, n) =>
  t in e
    ? K1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var pu = (e, t, n) => (q1(e, typeof t != "symbol" ? t + "" : t, n), n);
function X1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function dg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function cr(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var fg = { exports: {} },
  Wa = {},
  pg = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uo = Symbol.for("react.element"),
  Y1 = Symbol.for("react.portal"),
  Q1 = Symbol.for("react.fragment"),
  G1 = Symbol.for("react.strict_mode"),
  J1 = Symbol.for("react.profiler"),
  Z1 = Symbol.for("react.provider"),
  ex = Symbol.for("react.context"),
  tx = Symbol.for("react.forward_ref"),
  nx = Symbol.for("react.suspense"),
  rx = Symbol.for("react.memo"),
  ix = Symbol.for("react.lazy"),
  Ip = Symbol.iterator;
function ox(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ip && e[Ip]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var mg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hg = Object.assign,
  gg = {};
function Ei(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gg),
    (this.updater = n || mg);
}
Ei.prototype.isReactComponent = {};
Ei.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ei.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vg() {}
vg.prototype = Ei.prototype;
function Id(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gg),
    (this.updater = n || mg);
}
var Dd = (Id.prototype = new vg());
Dd.constructor = Id;
hg(Dd, Ei.prototype);
Dd.isPureReactComponent = !0;
var Dp = Array.isArray,
  yg = Object.prototype.hasOwnProperty,
  Ad = { current: null },
  xg = { key: !0, ref: !0, __self: !0, __source: !0 };
function wg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      yg.call(t, r) && !xg.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Uo,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Ad.current,
  };
}
function sx(e, t) {
  return {
    $$typeof: Uo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Rd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Uo;
}
function ax(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ap = /\/+/g;
function mu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ax("" + e.key)
    : t.toString(36);
}
function As(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Uo:
          case Y1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + mu(s, 0) : r),
      Dp(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ap, "$&/") + "/"),
          As(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Rd(i) &&
            (i = sx(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ap, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Dp(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + mu(o, a);
      s += As(o, t, n, l, i);
    }
  else if (((l = ox(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + mu(o, a++)), (s += As(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ss(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    As(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function lx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var st = { current: null },
  Rs = { transition: null },
  ux = {
    ReactCurrentDispatcher: st,
    ReactCurrentBatchConfig: Rs,
    ReactCurrentOwner: Ad,
  };
ee.Children = {
  map: ss,
  forEach: function (e, t, n) {
    ss(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ss(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ss(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Rd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ee.Component = Ei;
ee.Fragment = Q1;
ee.Profiler = J1;
ee.PureComponent = Id;
ee.StrictMode = G1;
ee.Suspense = nx;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ux;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = hg({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Ad.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      yg.call(t, l) &&
        !xg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Uo, type: e.type, key: i, ref: o, props: r, _owner: s };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: ex,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Z1, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = wg;
ee.createFactory = function (e) {
  var t = wg.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: tx, render: e };
};
ee.isValidElement = Rd;
ee.lazy = function (e) {
  return { $$typeof: ix, _payload: { _status: -1, _result: e }, _init: lx };
};
ee.memo = function (e, t) {
  return { $$typeof: rx, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = Rs.transition;
  Rs.transition = {};
  try {
    e();
  } finally {
    Rs.transition = t;
  }
};
ee.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ee.useCallback = function (e, t) {
  return st.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return st.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return st.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return st.current.useEffect(e, t);
};
ee.useId = function () {
  return st.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return st.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return st.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return st.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return st.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return st.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return st.current.useRef(e);
};
ee.useState = function (e) {
  return st.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return st.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return st.current.useTransition();
};
ee.version = "18.2.0";
pg.exports = ee;
var C = pg.exports;
const X = dg(C),
  jr = X1({ __proto__: null, default: X }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cx = C,
  dx = Symbol.for("react.element"),
  fx = Symbol.for("react.fragment"),
  px = Object.prototype.hasOwnProperty,
  mx = cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) px.call(t, r) && !hx.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: dx,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: mx.current,
  };
}
Wa.Fragment = fx;
Wa.jsx = Sg;
Wa.jsxs = Sg;
fg.exports = Wa;
var c = fg.exports,
  uc = {},
  _g = { exports: {} },
  kt = {},
  bg = { exports: {} },
  Eg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, V) {
    var W = D.length;
    D.push(V);
    e: for (; 0 < W; ) {
      var G = (W - 1) >>> 1,
        J = D[G];
      if (0 < i(J, V)) (D[G] = V), (D[W] = J), (W = G);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var V = D[0],
      W = D.pop();
    if (W !== V) {
      D[0] = W;
      e: for (var G = 0, J = D.length, se = J >>> 1; G < se; ) {
        var Q = 2 * (G + 1) - 1,
          Ye = D[Q],
          De = Q + 1,
          ht = D[De];
        if (0 > i(Ye, W))
          De < J && 0 > i(ht, Ye)
            ? ((D[G] = ht), (D[De] = W), (G = De))
            : ((D[G] = Ye), (D[Q] = W), (G = Q));
        else if (De < J && 0 > i(ht, W)) (D[G] = ht), (D[De] = W), (G = De);
        else break e;
      }
    }
    return V;
  }
  function i(D, V) {
    var W = D.sortIndex - V.sortIndex;
    return W !== 0 ? W : D.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    f = 1,
    h = null,
    p = 3,
    S = !1,
    y = !1,
    g = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    w = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(D) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= D)
        r(u), (V.sortIndex = V.expirationTime), t(l, V);
      else break;
      V = n(u);
    }
  }
  function v(D) {
    if (((g = !1), d(D), !y))
      if (n(l) !== null) (y = !0), z(x);
      else {
        var V = n(u);
        V !== null && U(v, V.startTime - D);
      }
  }
  function x(D, V) {
    (y = !1), g && ((g = !1), w(P), (P = -1)), (S = !0);
    var W = p;
    try {
      for (
        d(V), h = n(l);
        h !== null && (!(h.expirationTime > V) || (D && !M()));

      ) {
        var G = h.callback;
        if (typeof G == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var J = G(h.expirationTime <= V);
          (V = e.unstable_now()),
            typeof J == "function" ? (h.callback = J) : h === n(l) && r(l),
            d(V);
        } else r(l);
        h = n(l);
      }
      if (h !== null) var se = !0;
      else {
        var Q = n(u);
        Q !== null && U(v, Q.startTime - V), (se = !1);
      }
      return se;
    } finally {
      (h = null), (p = W), (S = !1);
    }
  }
  var b = !1,
    _ = null,
    P = -1,
    N = 5,
    O = -1;
  function M() {
    return !(e.unstable_now() - O < N);
  }
  function T() {
    if (_ !== null) {
      var D = e.unstable_now();
      O = D;
      var V = !0;
      try {
        V = _(!0, D);
      } finally {
        V ? I() : ((b = !1), (_ = null));
      }
    } else b = !1;
  }
  var I;
  if (typeof m == "function")
    I = function () {
      m(T);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(),
      $ = R.port2;
    (R.port1.onmessage = T),
      (I = function () {
        $.postMessage(null);
      });
  } else
    I = function () {
      E(T, 0);
    };
  function z(D) {
    (_ = D), b || ((b = !0), I());
  }
  function U(D, V) {
    P = E(function () {
      D(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || S || ((y = !0), z(x));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (D) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = p;
      }
      var W = p;
      p = V;
      try {
        return D();
      } finally {
        p = W;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, V) {
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
      var W = p;
      p = D;
      try {
        return V();
      } finally {
        p = W;
      }
    }),
    (e.unstable_scheduleCallback = function (D, V, W) {
      var G = e.unstable_now();
      switch (
        (typeof W == "object" && W !== null
          ? ((W = W.delay), (W = typeof W == "number" && 0 < W ? G + W : G))
          : (W = G),
        D)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = W + J),
        (D = {
          id: f++,
          callback: V,
          priorityLevel: D,
          startTime: W,
          expirationTime: J,
          sortIndex: -1,
        }),
        W > G
          ? ((D.sortIndex = W),
            t(u, D),
            n(l) === null &&
              D === n(u) &&
              (g ? (w(P), (P = -1)) : (g = !0), U(v, W - G)))
          : ((D.sortIndex = J), t(l, D), y || S || ((y = !0), z(x))),
        D
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (D) {
      var V = p;
      return function () {
        var W = p;
        p = V;
        try {
          return D.apply(this, arguments);
        } finally {
          p = W;
        }
      };
    });
})(Eg);
bg.exports = Eg;
var gx = bg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pg = C,
  Tt = gx;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Cg = new Set(),
  fo = {};
function Mr(e, t) {
  mi(e, t), mi(e + "Capture", t);
}
function mi(e, t) {
  for (fo[e] = t, e = 0; e < t.length; e++) Cg.add(t[e]);
}
var Cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  cc = Object.prototype.hasOwnProperty,
  vx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rp = {},
  Mp = {};
function yx(e) {
  return cc.call(Mp, e)
    ? !0
    : cc.call(Rp, e)
    ? !1
    : vx.test(e)
    ? (Mp[e] = !0)
    : ((Rp[e] = !0), !1);
}
function xx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function wx(e, t, n, r) {
  if (t === null || typeof t > "u" || xx(e, t, n, r)) return !0;
  if (r) return !1;
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
function at(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Xe[e] = new at(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Xe[t] = new at(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Xe[e] = new at(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Xe[e] = new at(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Xe[e] = new at(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Xe[e] = new at(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Xe[e] = new at(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Xe[e] = new at(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Xe[e] = new at(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Md = /[\-:]([a-z])/g;
function $d(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Md, $d);
    Xe[t] = new at(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Md, $d);
    Xe[t] = new at(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Md, $d);
  Xe[t] = new at(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Xe[e] = new at(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Xe.xlinkHref = new at(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Xe[e] = new at(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ld(e, t, n, r) {
  var i = Xe.hasOwnProperty(t) ? Xe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (wx(t, n, i, r) && (n = null),
    r || i === null
      ? yx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dn = Pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  as = Symbol.for("react.element"),
  qr = Symbol.for("react.portal"),
  Xr = Symbol.for("react.fragment"),
  Fd = Symbol.for("react.strict_mode"),
  dc = Symbol.for("react.profiler"),
  Tg = Symbol.for("react.provider"),
  jg = Symbol.for("react.context"),
  zd = Symbol.for("react.forward_ref"),
  fc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.suspense_list"),
  Ud = Symbol.for("react.memo"),
  zn = Symbol.for("react.lazy"),
  Ng = Symbol.for("react.offscreen"),
  $p = Symbol.iterator;
function Ri(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($p && e[$p]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Se = Object.assign,
  hu;
function Xi(e) {
  if (hu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      hu = (t && t[1]) || "";
    }
  return (
    `
` +
    hu +
    e
  );
}
var gu = !1;
function vu(e, t) {
  if (!e || gu) return "";
  gu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (gu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xi(e) : "";
}
function Sx(e) {
  switch (e.tag) {
    case 5:
      return Xi(e.type);
    case 16:
      return Xi("Lazy");
    case 13:
      return Xi("Suspense");
    case 19:
      return Xi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vu(e.type, !1)), e;
    case 11:
      return (e = vu(e.type.render, !1)), e;
    case 1:
      return (e = vu(e.type, !0)), e;
    default:
      return "";
  }
}
function mc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xr:
      return "Fragment";
    case qr:
      return "Portal";
    case dc:
      return "Profiler";
    case Fd:
      return "StrictMode";
    case fc:
      return "Suspense";
    case pc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case jg:
        return (e.displayName || "Context") + ".Consumer";
      case Tg:
        return (e._context.displayName || "Context") + ".Provider";
      case zd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ud:
        return (
          (t = e.displayName || null), t !== null ? t : mc(e.type) || "Memo"
        );
      case zn:
        (t = e._payload), (e = e._init);
        try {
          return mc(e(t));
        } catch {}
    }
  return null;
}
function _x(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return mc(t);
    case 8:
      return t === Fd ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function sr(e) {
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
function kg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function bx(e) {
  var t = kg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ls(e) {
  e._valueTracker || (e._valueTracker = bx(e));
}
function Og(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = kg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ra(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hc(e, t) {
  var n = t.checked;
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Lp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = sr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ig(e, t) {
  (t = t.checked), t != null && Ld(e, "checked", t, !1);
}
function gc(e, t) {
  Ig(e, t);
  var n = sr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? vc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && vc(e, t.type, sr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Fp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function vc(e, t, n) {
  (t !== "number" || ra(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yi = Array.isArray;
function si(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function yc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function zp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Yi(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: sr(n) };
}
function Dg(e, t) {
  var n = sr(t.value),
    r = sr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Up(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ag(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ag(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var us,
  Rg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        us = us || document.createElement("div"),
          us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = us.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function po(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zi = {
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
    strokeWidth: !0,
  },
  Ex = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zi).forEach(function (e) {
  Ex.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zi[t] = Zi[e]);
  });
});
function Mg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Zi.hasOwnProperty(e) && Zi[e])
    ? ("" + t).trim()
    : t + "px";
}
function $g(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Mg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Px = Se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wc(e, t) {
  if (t) {
    if (Px[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Sc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var _c = null;
function Bd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var bc = null,
  ai = null,
  li = null;
function Bp(e) {
  if ((e = Wo(e))) {
    if (typeof bc != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Ya(t)), bc(e.stateNode, e.type, t));
  }
}
function Lg(e) {
  ai ? (li ? li.push(e) : (li = [e])) : (ai = e);
}
function Fg() {
  if (ai) {
    var e = ai,
      t = li;
    if (((li = ai = null), Bp(e), t)) for (e = 0; e < t.length; e++) Bp(t[e]);
  }
}
function zg(e, t) {
  return e(t);
}
function Ug() {}
var yu = !1;
function Bg(e, t, n) {
  if (yu) return e(t, n);
  yu = !0;
  try {
    return zg(e, t, n);
  } finally {
    (yu = !1), (ai !== null || li !== null) && (Ug(), Fg());
  }
}
function mo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ya(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Ec = !1;
if (Cn)
  try {
    var Mi = {};
    Object.defineProperty(Mi, "passive", {
      get: function () {
        Ec = !0;
      },
    }),
      window.addEventListener("test", Mi, Mi),
      window.removeEventListener("test", Mi, Mi);
  } catch {
    Ec = !1;
  }
function Cx(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var eo = !1,
  ia = null,
  oa = !1,
  Pc = null,
  Tx = {
    onError: function (e) {
      (eo = !0), (ia = e);
    },
  };
function jx(e, t, n, r, i, o, s, a, l) {
  (eo = !1), (ia = null), Cx.apply(Tx, arguments);
}
function Nx(e, t, n, r, i, o, s, a, l) {
  if ((jx.apply(this, arguments), eo)) {
    if (eo) {
      var u = ia;
      (eo = !1), (ia = null);
    } else throw Error(L(198));
    oa || ((oa = !0), (Pc = u));
  }
}
function $r(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Vp(e) {
  if ($r(e) !== e) throw Error(L(188));
}
function kx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $r(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Vp(i), e;
        if (o === r) return Vp(i), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Wg(e) {
  return (e = kx(e)), e !== null ? Hg(e) : null;
}
function Hg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kg = Tt.unstable_scheduleCallback,
  Wp = Tt.unstable_cancelCallback,
  Ox = Tt.unstable_shouldYield,
  Ix = Tt.unstable_requestPaint,
  Te = Tt.unstable_now,
  Dx = Tt.unstable_getCurrentPriorityLevel,
  Vd = Tt.unstable_ImmediatePriority,
  qg = Tt.unstable_UserBlockingPriority,
  sa = Tt.unstable_NormalPriority,
  Ax = Tt.unstable_LowPriority,
  Xg = Tt.unstable_IdlePriority,
  Ha = null,
  dn = null;
function Rx(e) {
  if (dn && typeof dn.onCommitFiberRoot == "function")
    try {
      dn.onCommitFiberRoot(Ha, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var en = Math.clz32 ? Math.clz32 : Lx,
  Mx = Math.log,
  $x = Math.LN2;
function Lx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mx(e) / $x) | 0)) | 0;
}
var cs = 64,
  ds = 4194304;
function Qi(e) {
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
function aa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Qi(a)) : ((o &= s), o !== 0 && (r = Qi(o)));
  } else (s = n & ~i), s !== 0 ? (r = Qi(s)) : o !== 0 && (r = Qi(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - en(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Fx(e, t) {
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
function zx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - en(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = Fx(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Cc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Yg() {
  var e = cs;
  return (cs <<= 1), !(cs & 4194240) && (cs = 64), e;
}
function xu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Bo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - en(t)),
    (e[t] = n);
}
function Ux(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - en(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Wd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - en(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var le = 0;
function Qg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gg,
  Hd,
  Jg,
  Zg,
  e0,
  Tc = !1,
  fs = [],
  Qn = null,
  Gn = null,
  Jn = null,
  ho = new Map(),
  go = new Map(),
  Bn = [],
  Bx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Hp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qn = null;
      break;
    case "dragenter":
    case "dragleave":
      Gn = null;
      break;
    case "mouseover":
    case "mouseout":
      Jn = null;
      break;
    case "pointerover":
    case "pointerout":
      ho.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      go.delete(t.pointerId);
  }
}
function $i(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Wo(t)), t !== null && Hd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Vx(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Qn = $i(Qn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Gn = $i(Gn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Jn = $i(Jn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ho.set(o, $i(ho.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), go.set(o, $i(go.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function t0(e) {
  var t = wr(e.target);
  if (t !== null) {
    var n = $r(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vg(n)), t !== null)) {
          (e.blockedOn = t),
            e0(e.priority, function () {
              Jg(n);
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
function Ms(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = jc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (_c = r), n.target.dispatchEvent(r), (_c = null);
    } else return (t = Wo(n)), t !== null && Hd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Kp(e, t, n) {
  Ms(e) && n.delete(t);
}
function Wx() {
  (Tc = !1),
    Qn !== null && Ms(Qn) && (Qn = null),
    Gn !== null && Ms(Gn) && (Gn = null),
    Jn !== null && Ms(Jn) && (Jn = null),
    ho.forEach(Kp),
    go.forEach(Kp);
}
function Li(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Tc ||
      ((Tc = !0),
      Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority, Wx)));
}
function vo(e) {
  function t(i) {
    return Li(i, e);
  }
  if (0 < fs.length) {
    Li(fs[0], e);
    for (var n = 1; n < fs.length; n++) {
      var r = fs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Qn !== null && Li(Qn, e),
      Gn !== null && Li(Gn, e),
      Jn !== null && Li(Jn, e),
      ho.forEach(t),
      go.forEach(t),
      n = 0;
    n < Bn.length;
    n++
  )
    (r = Bn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bn.length && ((n = Bn[0]), n.blockedOn === null); )
    t0(n), n.blockedOn === null && Bn.shift();
}
var ui = Dn.ReactCurrentBatchConfig,
  la = !0;
function Hx(e, t, n, r) {
  var i = le,
    o = ui.transition;
  ui.transition = null;
  try {
    (le = 1), Kd(e, t, n, r);
  } finally {
    (le = i), (ui.transition = o);
  }
}
function Kx(e, t, n, r) {
  var i = le,
    o = ui.transition;
  ui.transition = null;
  try {
    (le = 4), Kd(e, t, n, r);
  } finally {
    (le = i), (ui.transition = o);
  }
}
function Kd(e, t, n, r) {
  if (la) {
    var i = jc(e, t, n, r);
    if (i === null) Nu(e, t, r, ua, n), Hp(e, r);
    else if (Vx(i, e, t, n, r)) r.stopPropagation();
    else if ((Hp(e, r), t & 4 && -1 < Bx.indexOf(e))) {
      for (; i !== null; ) {
        var o = Wo(i);
        if (
          (o !== null && Gg(o),
          (o = jc(e, t, n, r)),
          o === null && Nu(e, t, r, ua, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Nu(e, t, r, null, n);
  }
}
var ua = null;
function jc(e, t, n, r) {
  if (((ua = null), (e = Bd(r)), (e = wr(e)), e !== null))
    if (((t = $r(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ua = e), null;
}
function n0(e) {
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
      switch (Dx()) {
        case Vd:
          return 1;
        case qg:
          return 4;
        case sa:
        case Ax:
          return 16;
        case Xg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Hn = null,
  qd = null,
  $s = null;
function r0() {
  if ($s) return $s;
  var e,
    t = qd,
    n = t.length,
    r,
    i = "value" in Hn ? Hn.value : Hn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return ($s = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ls(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ps() {
  return !0;
}
function qp() {
  return !1;
}
function Ot(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ps
        : qp),
      (this.isPropagationStopped = qp),
      this
    );
  }
  return (
    Se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ps));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ps));
      },
      persist: function () {},
      isPersistent: ps,
    }),
    t
  );
}
var Pi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xd = Ot(Pi),
  Vo = Se({}, Pi, { view: 0, detail: 0 }),
  qx = Ot(Vo),
  wu,
  Su,
  Fi,
  Ka = Se({}, Vo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Yd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Fi &&
            (Fi && e.type === "mousemove"
              ? ((wu = e.screenX - Fi.screenX), (Su = e.screenY - Fi.screenY))
              : (Su = wu = 0),
            (Fi = e)),
          wu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Su;
    },
  }),
  Xp = Ot(Ka),
  Xx = Se({}, Ka, { dataTransfer: 0 }),
  Yx = Ot(Xx),
  Qx = Se({}, Vo, { relatedTarget: 0 }),
  _u = Ot(Qx),
  Gx = Se({}, Pi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jx = Ot(Gx),
  Zx = Se({}, Pi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ew = Ot(Zx),
  tw = Se({}, Pi, { data: 0 }),
  Yp = Ot(tw),
  nw = {
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
    MozPrintableKey: "Unidentified",
  },
  rw = {
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
    224: "Meta",
  },
  iw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ow(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = iw[e]) ? !!t[e] : !1;
}
function Yd() {
  return ow;
}
var sw = Se({}, Vo, {
    key: function (e) {
      if (e.key) {
        var t = nw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ls(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? rw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yd,
    charCode: function (e) {
      return e.type === "keypress" ? Ls(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ls(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  aw = Ot(sw),
  lw = Se({}, Ka, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qp = Ot(lw),
  uw = Se({}, Vo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yd,
  }),
  cw = Ot(uw),
  dw = Se({}, Pi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fw = Ot(dw),
  pw = Se({}, Ka, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  mw = Ot(pw),
  hw = [9, 13, 27, 32],
  Qd = Cn && "CompositionEvent" in window,
  to = null;
Cn && "documentMode" in document && (to = document.documentMode);
var gw = Cn && "TextEvent" in window && !to,
  i0 = Cn && (!Qd || (to && 8 < to && 11 >= to)),
  Gp = " ",
  Jp = !1;
function o0(e, t) {
  switch (e) {
    case "keyup":
      return hw.indexOf(t.keyCode) !== -1;
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
function s0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yr = !1;
function vw(e, t) {
  switch (e) {
    case "compositionend":
      return s0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Jp = !0), Gp);
    case "textInput":
      return (e = t.data), e === Gp && Jp ? null : e;
    default:
      return null;
  }
}
function yw(e, t) {
  if (Yr)
    return e === "compositionend" || (!Qd && o0(e, t))
      ? ((e = r0()), ($s = qd = Hn = null), (Yr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return i0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Zp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xw[e.type] : t === "textarea";
}
function a0(e, t, n, r) {
  Lg(r),
    (t = ca(t, "onChange")),
    0 < t.length &&
      ((n = new Xd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var no = null,
  yo = null;
function ww(e) {
  y0(e, 0);
}
function qa(e) {
  var t = Jr(e);
  if (Og(t)) return e;
}
function Sw(e, t) {
  if (e === "change") return t;
}
var l0 = !1;
if (Cn) {
  var bu;
  if (Cn) {
    var Eu = "oninput" in document;
    if (!Eu) {
      var em = document.createElement("div");
      em.setAttribute("oninput", "return;"),
        (Eu = typeof em.oninput == "function");
    }
    bu = Eu;
  } else bu = !1;
  l0 = bu && (!document.documentMode || 9 < document.documentMode);
}
function tm() {
  no && (no.detachEvent("onpropertychange", u0), (yo = no = null));
}
function u0(e) {
  if (e.propertyName === "value" && qa(yo)) {
    var t = [];
    a0(t, yo, e, Bd(e)), Bg(ww, t);
  }
}
function _w(e, t, n) {
  e === "focusin"
    ? (tm(), (no = t), (yo = n), no.attachEvent("onpropertychange", u0))
    : e === "focusout" && tm();
}
function bw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return qa(yo);
}
function Ew(e, t) {
  if (e === "click") return qa(t);
}
function Pw(e, t) {
  if (e === "input" || e === "change") return qa(t);
}
function Cw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nn = typeof Object.is == "function" ? Object.is : Cw;
function xo(e, t) {
  if (nn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!cc.call(t, i) || !nn(e[i], t[i])) return !1;
  }
  return !0;
}
function nm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function rm(e, t) {
  var n = nm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
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
    n = nm(n);
  }
}
function c0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? c0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function d0() {
  for (var e = window, t = ra(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ra(e.document);
  }
  return t;
}
function Gd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Tw(e) {
  var t = d0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    c0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Gd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = rm(n, o));
        var s = rm(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var jw = Cn && "documentMode" in document && 11 >= document.documentMode,
  Qr = null,
  Nc = null,
  ro = null,
  kc = !1;
function im(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  kc ||
    Qr == null ||
    Qr !== ra(r) ||
    ((r = Qr),
    "selectionStart" in r && Gd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ro && xo(ro, r)) ||
      ((ro = r),
      (r = ca(Nc, "onSelect")),
      0 < r.length &&
        ((t = new Xd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qr))));
}
function ms(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gr = {
    animationend: ms("Animation", "AnimationEnd"),
    animationiteration: ms("Animation", "AnimationIteration"),
    animationstart: ms("Animation", "AnimationStart"),
    transitionend: ms("Transition", "TransitionEnd"),
  },
  Pu = {},
  f0 = {};
Cn &&
  ((f0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gr.animationend.animation,
    delete Gr.animationiteration.animation,
    delete Gr.animationstart.animation),
  "TransitionEvent" in window || delete Gr.transitionend.transition);
function Xa(e) {
  if (Pu[e]) return Pu[e];
  if (!Gr[e]) return e;
  var t = Gr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in f0) return (Pu[e] = t[n]);
  return e;
}
var p0 = Xa("animationend"),
  m0 = Xa("animationiteration"),
  h0 = Xa("animationstart"),
  g0 = Xa("transitionend"),
  v0 = new Map(),
  om =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dr(e, t) {
  v0.set(e, t), Mr(t, [e]);
}
for (var Cu = 0; Cu < om.length; Cu++) {
  var Tu = om[Cu],
    Nw = Tu.toLowerCase(),
    kw = Tu[0].toUpperCase() + Tu.slice(1);
  dr(Nw, "on" + kw);
}
dr(p0, "onAnimationEnd");
dr(m0, "onAnimationIteration");
dr(h0, "onAnimationStart");
dr("dblclick", "onDoubleClick");
dr("focusin", "onFocus");
dr("focusout", "onBlur");
dr(g0, "onTransitionEnd");
mi("onMouseEnter", ["mouseout", "mouseover"]);
mi("onMouseLeave", ["mouseout", "mouseover"]);
mi("onPointerEnter", ["pointerout", "pointerover"]);
mi("onPointerLeave", ["pointerout", "pointerover"]);
Mr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Gi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ow = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));
function sm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Nx(r, t, void 0, e), (e.currentTarget = null);
}
function y0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          sm(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          sm(i, a, u), (o = l);
        }
    }
  }
  if (oa) throw ((e = Pc), (oa = !1), (Pc = null), e);
}
function me(e, t) {
  var n = t[Rc];
  n === void 0 && (n = t[Rc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (x0(t, e, 2, !1), n.add(r));
}
function ju(e, t, n) {
  var r = 0;
  t && (r |= 4), x0(n, e, r, t);
}
var hs = "_reactListening" + Math.random().toString(36).slice(2);
function wo(e) {
  if (!e[hs]) {
    (e[hs] = !0),
      Cg.forEach(function (n) {
        n !== "selectionchange" && (Ow.has(n) || ju(n, !1, e), ju(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hs] || ((t[hs] = !0), ju("selectionchange", !1, t));
  }
}
function x0(e, t, n, r) {
  switch (n0(t)) {
    case 1:
      var i = Hx;
      break;
    case 4:
      i = Kx;
      break;
    default:
      i = Kd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ec ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Nu(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = wr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Bg(function () {
    var u = o,
      f = Bd(n),
      h = [];
    e: {
      var p = v0.get(e);
      if (p !== void 0) {
        var S = Xd,
          y = e;
        switch (e) {
          case "keypress":
            if (Ls(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = aw;
            break;
          case "focusin":
            (y = "focus"), (S = _u);
            break;
          case "focusout":
            (y = "blur"), (S = _u);
            break;
          case "beforeblur":
          case "afterblur":
            S = _u;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Xp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Yx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = cw;
            break;
          case p0:
          case m0:
          case h0:
            S = Jx;
            break;
          case g0:
            S = fw;
            break;
          case "scroll":
            S = qx;
            break;
          case "wheel":
            S = mw;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = ew;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Qp;
        }
        var g = (t & 4) !== 0,
          E = !g && e === "scroll",
          w = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var m = u, d; m !== null; ) {
          d = m;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              w !== null && ((v = mo(m, w)), v != null && g.push(So(m, v, d)))),
            E)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((p = new S(p, y, null, n, f)), h.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          p &&
            n !== _c &&
            (y = n.relatedTarget || n.fromElement) &&
            (wr(y) || y[Tn]))
        )
          break e;
        if (
          (S || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          S
            ? ((y = n.relatedTarget || n.toElement),
              (S = u),
              (y = y ? wr(y) : null),
              y !== null &&
                ((E = $r(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((S = null), (y = u)),
          S !== y)
        ) {
          if (
            ((g = Xp),
            (v = "onMouseLeave"),
            (w = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Qp),
              (v = "onPointerLeave"),
              (w = "onPointerEnter"),
              (m = "pointer")),
            (E = S == null ? p : Jr(S)),
            (d = y == null ? p : Jr(y)),
            (p = new g(v, m + "leave", S, n, f)),
            (p.target = E),
            (p.relatedTarget = d),
            (v = null),
            wr(f) === u &&
              ((g = new g(w, m + "enter", y, n, f)),
              (g.target = d),
              (g.relatedTarget = E),
              (v = g)),
            (E = v),
            S && y)
          )
            t: {
              for (g = S, w = y, m = 0, d = g; d; d = Fr(d)) m++;
              for (d = 0, v = w; v; v = Fr(v)) d++;
              for (; 0 < m - d; ) (g = Fr(g)), m--;
              for (; 0 < d - m; ) (w = Fr(w)), d--;
              for (; m--; ) {
                if (g === w || (w !== null && g === w.alternate)) break t;
                (g = Fr(g)), (w = Fr(w));
              }
              g = null;
            }
          else g = null;
          S !== null && am(h, p, S, g, !1),
            y !== null && E !== null && am(h, E, y, g, !0);
        }
      }
      e: {
        if (
          ((p = u ? Jr(u) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === "select" || (S === "input" && p.type === "file"))
        )
          var x = Sw;
        else if (Zp(p))
          if (l0) x = Pw;
          else {
            x = bw;
            var b = _w;
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (x = Ew);
        if (x && (x = x(e, u))) {
          a0(h, x, n, f);
          break e;
        }
        b && b(e, p, u),
          e === "focusout" &&
            (b = p._wrapperState) &&
            b.controlled &&
            p.type === "number" &&
            vc(p, "number", p.value);
      }
      switch (((b = u ? Jr(u) : window), e)) {
        case "focusin":
          (Zp(b) || b.contentEditable === "true") &&
            ((Qr = b), (Nc = u), (ro = null));
          break;
        case "focusout":
          ro = Nc = Qr = null;
          break;
        case "mousedown":
          kc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (kc = !1), im(h, n, f);
          break;
        case "selectionchange":
          if (jw) break;
        case "keydown":
        case "keyup":
          im(h, n, f);
      }
      var _;
      if (Qd)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Yr
          ? o0(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (i0 &&
          n.locale !== "ko" &&
          (Yr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Yr && (_ = r0())
            : ((Hn = f),
              (qd = "value" in Hn ? Hn.value : Hn.textContent),
              (Yr = !0))),
        (b = ca(u, P)),
        0 < b.length &&
          ((P = new Yp(P, e, null, n, f)),
          h.push({ event: P, listeners: b }),
          _ ? (P.data = _) : ((_ = s0(n)), _ !== null && (P.data = _)))),
        (_ = gw ? vw(e, n) : yw(e, n)) &&
          ((u = ca(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Yp("onBeforeInput", "beforeinput", null, n, f)),
            h.push({ event: f, listeners: u }),
            (f.data = _)));
    }
    y0(h, t);
  });
}
function So(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ca(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = mo(e, n)),
      o != null && r.unshift(So(e, o, i)),
      (o = mo(e, t)),
      o != null && r.push(So(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Fr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function am(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = mo(n, o)), l != null && s.unshift(So(n, l, a)))
        : i || ((l = mo(n, o)), l != null && s.push(So(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Iw = /\r\n?/g,
  Dw = /\u0000|\uFFFD/g;
function lm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Iw,
      `
`
    )
    .replace(Dw, "");
}
function gs(e, t, n) {
  if (((t = lm(t)), lm(e) !== t && n)) throw Error(L(425));
}
function da() {}
var Oc = null,
  Ic = null;
function Dc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ac = typeof setTimeout == "function" ? setTimeout : void 0,
  Aw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  um = typeof Promise == "function" ? Promise : void 0,
  Rw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof um < "u"
      ? function (e) {
          return um.resolve(null).then(e).catch(Mw);
        }
      : Ac;
function Mw(e) {
  setTimeout(function () {
    throw e;
  });
}
function ku(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), vo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  vo(t);
}
function Zn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function cm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ci = Math.random().toString(36).slice(2),
  un = "__reactFiber$" + Ci,
  _o = "__reactProps$" + Ci,
  Tn = "__reactContainer$" + Ci,
  Rc = "__reactEvents$" + Ci,
  $w = "__reactListeners$" + Ci,
  Lw = "__reactHandles$" + Ci;
function wr(e) {
  var t = e[un];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tn] || n[un])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = cm(e); e !== null; ) {
          if ((n = e[un])) return n;
          e = cm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Wo(e) {
  return (
    (e = e[un] || e[Tn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Ya(e) {
  return e[_o] || null;
}
var Mc = [],
  Zr = -1;
function fr(e) {
  return { current: e };
}
function ge(e) {
  0 > Zr || ((e.current = Mc[Zr]), (Mc[Zr] = null), Zr--);
}
function pe(e, t) {
  Zr++, (Mc[Zr] = e.current), (e.current = t);
}
var ar = {},
  tt = fr(ar),
  ct = fr(!1),
  Nr = ar;
function hi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ar;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function dt(e) {
  return (e = e.childContextTypes), e != null;
}
function fa() {
  ge(ct), ge(tt);
}
function dm(e, t, n) {
  if (tt.current !== ar) throw Error(L(168));
  pe(tt, t), pe(ct, n);
}
function w0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, _x(e) || "Unknown", i));
  return Se({}, n, r);
}
function pa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ar),
    (Nr = tt.current),
    pe(tt, e),
    pe(ct, ct.current),
    !0
  );
}
function fm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = w0(e, t, Nr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ge(ct),
      ge(tt),
      pe(tt, e))
    : ge(ct),
    pe(ct, n);
}
var xn = null,
  Qa = !1,
  Ou = !1;
function S0(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function Fw(e) {
  (Qa = !0), S0(e);
}
function pr() {
  if (!Ou && xn !== null) {
    Ou = !0;
    var e = 0,
      t = le;
    try {
      var n = xn;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xn = null), (Qa = !1);
    } catch (i) {
      throw (xn !== null && (xn = xn.slice(e + 1)), Kg(Vd, pr), i);
    } finally {
      (le = t), (Ou = !1);
    }
  }
  return null;
}
var ei = [],
  ti = 0,
  ma = null,
  ha = 0,
  Rt = [],
  Mt = 0,
  kr = null,
  Sn = 1,
  _n = "";
function vr(e, t) {
  (ei[ti++] = ha), (ei[ti++] = ma), (ma = e), (ha = t);
}
function _0(e, t, n) {
  (Rt[Mt++] = Sn), (Rt[Mt++] = _n), (Rt[Mt++] = kr), (kr = e);
  var r = Sn;
  e = _n;
  var i = 32 - en(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - en(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Sn = (1 << (32 - en(t) + i)) | (n << i) | r),
      (_n = o + e);
  } else (Sn = (1 << o) | (n << i) | r), (_n = e);
}
function Jd(e) {
  e.return !== null && (vr(e, 1), _0(e, 1, 0));
}
function Zd(e) {
  for (; e === ma; )
    (ma = ei[--ti]), (ei[ti] = null), (ha = ei[--ti]), (ei[ti] = null);
  for (; e === kr; )
    (kr = Rt[--Mt]),
      (Rt[Mt] = null),
      (_n = Rt[--Mt]),
      (Rt[Mt] = null),
      (Sn = Rt[--Mt]),
      (Rt[Mt] = null);
}
var Pt = null,
  _t = null,
  ye = !1,
  Qt = null;
function b0(e, t) {
  var n = Lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function pm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pt = e), (_t = Zn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pt = e), (_t = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = kr !== null ? { id: Sn, overflow: _n } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pt = e),
            (_t = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function $c(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lc(e) {
  if (ye) {
    var t = _t;
    if (t) {
      var n = t;
      if (!pm(e, t)) {
        if ($c(e)) throw Error(L(418));
        t = Zn(n.nextSibling);
        var r = Pt;
        t && pm(e, t)
          ? b0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ye = !1), (Pt = e));
      }
    } else {
      if ($c(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (ye = !1), (Pt = e);
    }
  }
}
function mm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pt = e;
}
function vs(e) {
  if (e !== Pt) return !1;
  if (!ye) return mm(e), (ye = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Dc(e.type, e.memoizedProps))),
    t && (t = _t))
  ) {
    if ($c(e)) throw (E0(), Error(L(418)));
    for (; t; ) b0(e, t), (t = Zn(t.nextSibling));
  }
  if ((mm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _t = Zn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _t = null;
    }
  } else _t = Pt ? Zn(e.stateNode.nextSibling) : null;
  return !0;
}
function E0() {
  for (var e = _t; e; ) e = Zn(e.nextSibling);
}
function gi() {
  (_t = Pt = null), (ye = !1);
}
function ef(e) {
  Qt === null ? (Qt = [e]) : Qt.push(e);
}
var zw = Dn.ReactCurrentBatchConfig;
function Xt(e, t) {
  if (e && e.defaultProps) {
    (t = Se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ga = fr(null),
  va = null,
  ni = null,
  tf = null;
function nf() {
  tf = ni = va = null;
}
function rf(e) {
  var t = ga.current;
  ge(ga), (e._currentValue = t);
}
function Fc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ci(e, t) {
  (va = e),
    (tf = ni = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ut = !0), (e.firstContext = null));
}
function Bt(e) {
  var t = e._currentValue;
  if (tf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ni === null)) {
      if (va === null) throw Error(L(308));
      (ni = e), (va.dependencies = { lanes: 0, firstContext: e });
    } else ni = ni.next = e;
  return t;
}
var Sr = null;
function of(e) {
  Sr === null ? (Sr = [e]) : Sr.push(e);
}
function P0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), of(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    jn(e, r)
  );
}
function jn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Un = !1;
function sf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function C0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function En(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function er(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ne & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      jn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), of(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    jn(e, n)
  );
}
function Fs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Wd(e, n);
  }
}
function hm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ya(e, t, n, r) {
  var i = e.updateQueue;
  Un = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== s &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var h = i.baseState;
    (s = 0), (f = u = l = null), (a = o);
    do {
      var p = a.lane,
        S = a.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            g = a;
          switch (((p = t), (S = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                h = y.call(S, h, p);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (p = typeof y == "function" ? y.call(S, h, p) : y),
                p == null)
              )
                break e;
              h = Se({}, h, p);
              break e;
            case 2:
              Un = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [a]) : p.push(a));
      } else
        (S = {
          eventTime: S,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = S), (l = h)) : (f = f.next = S),
          (s |= p);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (l = h),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Ir |= s), (e.lanes = s), (e.memoizedState = h);
  }
}
function gm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var T0 = new Pg.Component().refs;
function zc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ga = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $r(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      i = nr(e),
      o = En(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = er(e, o, i)),
      t !== null && (tn(t, e, i, r), Fs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      i = nr(e),
      o = En(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = er(e, o, i)),
      t !== null && (tn(t, e, i, r), Fs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ot(),
      r = nr(e),
      i = En(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = er(e, i, r)),
      t !== null && (tn(t, e, r, n), Fs(t, e, r));
  },
};
function vm(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xo(n, r) || !xo(i, o)
      : !0
  );
}
function j0(e, t, n) {
  var r = !1,
    i = ar,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Bt(o))
      : ((i = dt(t) ? Nr : tt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? hi(e, i) : ar)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ga),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ym(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ga.enqueueReplaceState(t, t.state, null);
}
function Uc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = T0), sf(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Bt(o))
    : ((o = dt(t) ? Nr : tt.current), (i.context = hi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (zc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ga.enqueueReplaceState(i, i.state, null),
      ya(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function zi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === T0 && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function ys(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xm(e) {
  var t = e._init;
  return t(e._payload);
}
function N0(e) {
  function t(w, m) {
    if (e) {
      var d = w.deletions;
      d === null ? ((w.deletions = [m]), (w.flags |= 16)) : d.push(m);
    }
  }
  function n(w, m) {
    if (!e) return null;
    for (; m !== null; ) t(w, m), (m = m.sibling);
    return null;
  }
  function r(w, m) {
    for (w = new Map(); m !== null; )
      m.key !== null ? w.set(m.key, m) : w.set(m.index, m), (m = m.sibling);
    return w;
  }
  function i(w, m) {
    return (w = rr(w, m)), (w.index = 0), (w.sibling = null), w;
  }
  function o(w, m, d) {
    return (
      (w.index = d),
      e
        ? ((d = w.alternate),
          d !== null
            ? ((d = d.index), d < m ? ((w.flags |= 2), m) : d)
            : ((w.flags |= 2), m))
        : ((w.flags |= 1048576), m)
    );
  }
  function s(w) {
    return e && w.alternate === null && (w.flags |= 2), w;
  }
  function a(w, m, d, v) {
    return m === null || m.tag !== 6
      ? ((m = Lu(d, w.mode, v)), (m.return = w), m)
      : ((m = i(m, d)), (m.return = w), m);
  }
  function l(w, m, d, v) {
    var x = d.type;
    return x === Xr
      ? f(w, m, d.props.children, v, d.key)
      : m !== null &&
        (m.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === zn &&
            xm(x) === m.type))
      ? ((v = i(m, d.props)), (v.ref = zi(w, m, d)), (v.return = w), v)
      : ((v = Hs(d.type, d.key, d.props, null, w.mode, v)),
        (v.ref = zi(w, m, d)),
        (v.return = w),
        v);
  }
  function u(w, m, d, v) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== d.containerInfo ||
      m.stateNode.implementation !== d.implementation
      ? ((m = Fu(d, w.mode, v)), (m.return = w), m)
      : ((m = i(m, d.children || [])), (m.return = w), m);
  }
  function f(w, m, d, v, x) {
    return m === null || m.tag !== 7
      ? ((m = Pr(d, w.mode, v, x)), (m.return = w), m)
      : ((m = i(m, d)), (m.return = w), m);
  }
  function h(w, m, d) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Lu("" + m, w.mode, d)), (m.return = w), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case as:
          return (
            (d = Hs(m.type, m.key, m.props, null, w.mode, d)),
            (d.ref = zi(w, null, m)),
            (d.return = w),
            d
          );
        case qr:
          return (m = Fu(m, w.mode, d)), (m.return = w), m;
        case zn:
          var v = m._init;
          return h(w, v(m._payload), d);
      }
      if (Yi(m) || Ri(m))
        return (m = Pr(m, w.mode, d, null)), (m.return = w), m;
      ys(w, m);
    }
    return null;
  }
  function p(w, m, d, v) {
    var x = m !== null ? m.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return x !== null ? null : a(w, m, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case as:
          return d.key === x ? l(w, m, d, v) : null;
        case qr:
          return d.key === x ? u(w, m, d, v) : null;
        case zn:
          return (x = d._init), p(w, m, x(d._payload), v);
      }
      if (Yi(d) || Ri(d)) return x !== null ? null : f(w, m, d, v, null);
      ys(w, d);
    }
    return null;
  }
  function S(w, m, d, v, x) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (w = w.get(d) || null), a(m, w, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case as:
          return (w = w.get(v.key === null ? d : v.key) || null), l(m, w, v, x);
        case qr:
          return (w = w.get(v.key === null ? d : v.key) || null), u(m, w, v, x);
        case zn:
          var b = v._init;
          return S(w, m, d, b(v._payload), x);
      }
      if (Yi(v) || Ri(v)) return (w = w.get(d) || null), f(m, w, v, x, null);
      ys(m, v);
    }
    return null;
  }
  function y(w, m, d, v) {
    for (
      var x = null, b = null, _ = m, P = (m = 0), N = null;
      _ !== null && P < d.length;
      P++
    ) {
      _.index > P ? ((N = _), (_ = null)) : (N = _.sibling);
      var O = p(w, _, d[P], v);
      if (O === null) {
        _ === null && (_ = N);
        break;
      }
      e && _ && O.alternate === null && t(w, _),
        (m = o(O, m, P)),
        b === null ? (x = O) : (b.sibling = O),
        (b = O),
        (_ = N);
    }
    if (P === d.length) return n(w, _), ye && vr(w, P), x;
    if (_ === null) {
      for (; P < d.length; P++)
        (_ = h(w, d[P], v)),
          _ !== null &&
            ((m = o(_, m, P)), b === null ? (x = _) : (b.sibling = _), (b = _));
      return ye && vr(w, P), x;
    }
    for (_ = r(w, _); P < d.length; P++)
      (N = S(_, w, P, d[P], v)),
        N !== null &&
          (e && N.alternate !== null && _.delete(N.key === null ? P : N.key),
          (m = o(N, m, P)),
          b === null ? (x = N) : (b.sibling = N),
          (b = N));
    return (
      e &&
        _.forEach(function (M) {
          return t(w, M);
        }),
      ye && vr(w, P),
      x
    );
  }
  function g(w, m, d, v) {
    var x = Ri(d);
    if (typeof x != "function") throw Error(L(150));
    if (((d = x.call(d)), d == null)) throw Error(L(151));
    for (
      var b = (x = null), _ = m, P = (m = 0), N = null, O = d.next();
      _ !== null && !O.done;
      P++, O = d.next()
    ) {
      _.index > P ? ((N = _), (_ = null)) : (N = _.sibling);
      var M = p(w, _, O.value, v);
      if (M === null) {
        _ === null && (_ = N);
        break;
      }
      e && _ && M.alternate === null && t(w, _),
        (m = o(M, m, P)),
        b === null ? (x = M) : (b.sibling = M),
        (b = M),
        (_ = N);
    }
    if (O.done) return n(w, _), ye && vr(w, P), x;
    if (_ === null) {
      for (; !O.done; P++, O = d.next())
        (O = h(w, O.value, v)),
          O !== null &&
            ((m = o(O, m, P)), b === null ? (x = O) : (b.sibling = O), (b = O));
      return ye && vr(w, P), x;
    }
    for (_ = r(w, _); !O.done; P++, O = d.next())
      (O = S(_, w, P, O.value, v)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? P : O.key),
          (m = o(O, m, P)),
          b === null ? (x = O) : (b.sibling = O),
          (b = O));
    return (
      e &&
        _.forEach(function (T) {
          return t(w, T);
        }),
      ye && vr(w, P),
      x
    );
  }
  function E(w, m, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Xr &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case as:
          e: {
            for (var x = d.key, b = m; b !== null; ) {
              if (b.key === x) {
                if (((x = d.type), x === Xr)) {
                  if (b.tag === 7) {
                    n(w, b.sibling),
                      (m = i(b, d.props.children)),
                      (m.return = w),
                      (w = m);
                    break e;
                  }
                } else if (
                  b.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === zn &&
                    xm(x) === b.type)
                ) {
                  n(w, b.sibling),
                    (m = i(b, d.props)),
                    (m.ref = zi(w, b, d)),
                    (m.return = w),
                    (w = m);
                  break e;
                }
                n(w, b);
                break;
              } else t(w, b);
              b = b.sibling;
            }
            d.type === Xr
              ? ((m = Pr(d.props.children, w.mode, v, d.key)),
                (m.return = w),
                (w = m))
              : ((v = Hs(d.type, d.key, d.props, null, w.mode, v)),
                (v.ref = zi(w, m, d)),
                (v.return = w),
                (w = v));
          }
          return s(w);
        case qr:
          e: {
            for (b = d.key; m !== null; ) {
              if (m.key === b)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === d.containerInfo &&
                  m.stateNode.implementation === d.implementation
                ) {
                  n(w, m.sibling),
                    (m = i(m, d.children || [])),
                    (m.return = w),
                    (w = m);
                  break e;
                } else {
                  n(w, m);
                  break;
                }
              else t(w, m);
              m = m.sibling;
            }
            (m = Fu(d, w.mode, v)), (m.return = w), (w = m);
          }
          return s(w);
        case zn:
          return (b = d._init), E(w, m, b(d._payload), v);
      }
      if (Yi(d)) return y(w, m, d, v);
      if (Ri(d)) return g(w, m, d, v);
      ys(w, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        m !== null && m.tag === 6
          ? (n(w, m.sibling), (m = i(m, d)), (m.return = w), (w = m))
          : (n(w, m), (m = Lu(d, w.mode, v)), (m.return = w), (w = m)),
        s(w))
      : n(w, m);
  }
  return E;
}
var vi = N0(!0),
  k0 = N0(!1),
  Ho = {},
  fn = fr(Ho),
  bo = fr(Ho),
  Eo = fr(Ho);
function _r(e) {
  if (e === Ho) throw Error(L(174));
  return e;
}
function af(e, t) {
  switch ((pe(Eo, t), pe(bo, e), pe(fn, Ho), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xc(t, e));
  }
  ge(fn), pe(fn, t);
}
function yi() {
  ge(fn), ge(bo), ge(Eo);
}
function O0(e) {
  _r(Eo.current);
  var t = _r(fn.current),
    n = xc(t, e.type);
  t !== n && (pe(bo, e), pe(fn, n));
}
function lf(e) {
  bo.current === e && (ge(fn), ge(bo));
}
var xe = fr(0);
function xa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Iu = [];
function uf() {
  for (var e = 0; e < Iu.length; e++)
    Iu[e]._workInProgressVersionPrimary = null;
  Iu.length = 0;
}
var zs = Dn.ReactCurrentDispatcher,
  Du = Dn.ReactCurrentBatchConfig,
  Or = 0,
  we = null,
  Re = null,
  Fe = null,
  wa = !1,
  io = !1,
  Po = 0,
  Uw = 0;
function Qe() {
  throw Error(L(321));
}
function cf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nn(e[n], t[n])) return !1;
  return !0;
}
function df(e, t, n, r, i, o) {
  if (
    ((Or = o),
    (we = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zs.current = e === null || e.memoizedState === null ? Hw : Kw),
    (e = n(r, i)),
    io)
  ) {
    o = 0;
    do {
      if (((io = !1), (Po = 0), 25 <= o)) throw Error(L(301));
      (o += 1),
        (Fe = Re = null),
        (t.updateQueue = null),
        (zs.current = qw),
        (e = n(r, i));
    } while (io);
  }
  if (
    ((zs.current = Sa),
    (t = Re !== null && Re.next !== null),
    (Or = 0),
    (Fe = Re = we = null),
    (wa = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function ff() {
  var e = Po !== 0;
  return (Po = 0), e;
}
function sn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Fe === null ? (we.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
}
function Vt() {
  if (Re === null) {
    var e = we.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = Fe === null ? we.memoizedState : Fe.next;
  if (t !== null) (Fe = t), (Re = e);
  else {
    if (e === null) throw Error(L(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      Fe === null ? (we.memoizedState = Fe = e) : (Fe = Fe.next = e);
  }
  return Fe;
}
function Co(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Au(e) {
  var t = Vt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = Re,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var f = u.lane;
      if ((Or & f) === f)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = h), (s = r)) : (l = l.next = h),
          (we.lanes |= f),
          (Ir |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      nn(r, t.memoizedState) || (ut = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (we.lanes |= o), (Ir |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ru(e) {
  var t = Vt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    nn(o, t.memoizedState) || (ut = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function I0() {}
function D0(e, t) {
  var n = we,
    r = Vt(),
    i = t(),
    o = !nn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ut = !0)),
    (r = r.queue),
    pf(M0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      To(9, R0.bind(null, n, r, i, t), void 0, null),
      ze === null)
    )
      throw Error(L(349));
    Or & 30 || A0(n, t, i);
  }
  return i;
}
function A0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function R0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $0(t) && L0(e);
}
function M0(e, t, n) {
  return n(function () {
    $0(t) && L0(e);
  });
}
function $0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nn(e, n);
  } catch {
    return !0;
  }
}
function L0(e) {
  var t = jn(e, 1);
  t !== null && tn(t, e, 1, -1);
}
function wm(e) {
  var t = sn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Co,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ww.bind(null, we, e)),
    [t.memoizedState, e]
  );
}
function To(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function F0() {
  return Vt().memoizedState;
}
function Us(e, t, n, r) {
  var i = sn();
  (we.flags |= e),
    (i.memoizedState = To(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ja(e, t, n, r) {
  var i = Vt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Re !== null) {
    var s = Re.memoizedState;
    if (((o = s.destroy), r !== null && cf(r, s.deps))) {
      i.memoizedState = To(t, n, o, r);
      return;
    }
  }
  (we.flags |= e), (i.memoizedState = To(1 | t, n, o, r));
}
function Sm(e, t) {
  return Us(8390656, 8, e, t);
}
function pf(e, t) {
  return Ja(2048, 8, e, t);
}
function z0(e, t) {
  return Ja(4, 2, e, t);
}
function U0(e, t) {
  return Ja(4, 4, e, t);
}
function B0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function V0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ja(4, 4, B0.bind(null, t, e), n)
  );
}
function mf() {}
function W0(e, t) {
  var n = Vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function H0(e, t) {
  var n = Vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function K0(e, t, n) {
  return Or & 21
    ? (nn(n, t) || ((n = Yg()), (we.lanes |= n), (Ir |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n));
}
function Bw(e, t) {
  var n = le;
  (le = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Du.transition;
  Du.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = n), (Du.transition = r);
  }
}
function q0() {
  return Vt().memoizedState;
}
function Vw(e, t, n) {
  var r = nr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    X0(e))
  )
    Y0(t, n);
  else if (((n = P0(e, t, n, r)), n !== null)) {
    var i = ot();
    tn(n, e, r, i), Q0(n, t, r);
  }
}
function Ww(e, t, n) {
  var r = nr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (X0(e)) Y0(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), nn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), of(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = P0(e, t, i, r)),
      n !== null && ((i = ot()), tn(n, e, r, i), Q0(n, t, r));
  }
}
function X0(e) {
  var t = e.alternate;
  return e === we || (t !== null && t === we);
}
function Y0(e, t) {
  io = wa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Q0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Wd(e, n);
  }
}
var Sa = {
    readContext: Bt,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useInsertionEffect: Qe,
    useLayoutEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useMutableSource: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    unstable_isNewReconciler: !1,
  },
  Hw = {
    readContext: Bt,
    useCallback: function (e, t) {
      return (sn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Bt,
    useEffect: Sm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Us(4194308, 4, B0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Us(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Us(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = sn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = sn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Vw.bind(null, we, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = sn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wm,
    useDebugValue: mf,
    useDeferredValue: function (e) {
      return (sn().memoizedState = e);
    },
    useTransition: function () {
      var e = wm(!1),
        t = e[0];
      return (e = Bw.bind(null, e[1])), (sn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = we,
        i = sn();
      if (ye) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), ze === null)) throw Error(L(349));
        Or & 30 || A0(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Sm(M0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        To(9, R0.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = sn(),
        t = ze.identifierPrefix;
      if (ye) {
        var n = _n,
          r = Sn;
        (n = (r & ~(1 << (32 - en(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Po++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Uw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Kw = {
    readContext: Bt,
    useCallback: W0,
    useContext: Bt,
    useEffect: pf,
    useImperativeHandle: V0,
    useInsertionEffect: z0,
    useLayoutEffect: U0,
    useMemo: H0,
    useReducer: Au,
    useRef: F0,
    useState: function () {
      return Au(Co);
    },
    useDebugValue: mf,
    useDeferredValue: function (e) {
      var t = Vt();
      return K0(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Au(Co)[0],
        t = Vt().memoizedState;
      return [e, t];
    },
    useMutableSource: I0,
    useSyncExternalStore: D0,
    useId: q0,
    unstable_isNewReconciler: !1,
  },
  qw = {
    readContext: Bt,
    useCallback: W0,
    useContext: Bt,
    useEffect: pf,
    useImperativeHandle: V0,
    useInsertionEffect: z0,
    useLayoutEffect: U0,
    useMemo: H0,
    useReducer: Ru,
    useRef: F0,
    useState: function () {
      return Ru(Co);
    },
    useDebugValue: mf,
    useDeferredValue: function (e) {
      var t = Vt();
      return Re === null ? (t.memoizedState = e) : K0(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Ru(Co)[0],
        t = Vt().memoizedState;
      return [e, t];
    },
    useMutableSource: I0,
    useSyncExternalStore: D0,
    useId: q0,
    unstable_isNewReconciler: !1,
  };
function xi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Sx(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Mu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xw = typeof WeakMap == "function" ? WeakMap : Map;
function G0(e, t, n) {
  (n = En(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ba || ((ba = !0), (Jc = r)), Bc(e, t);
    }),
    n
  );
}
function J0(e, t, n) {
  (n = En(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Bc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Bc(e, t),
          typeof r != "function" &&
            (tr === null ? (tr = new Set([this])) : tr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function _m(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xw();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = lS.bind(null, e, t, n)), t.then(e, e));
}
function bm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Em(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = En(-1, 1)), (t.tag = 2), er(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Yw = Dn.ReactCurrentOwner,
  ut = !1;
function nt(e, t, n, r) {
  t.child = e === null ? k0(t, null, n, r) : vi(t, e.child, n, r);
}
function Pm(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    ci(t, i),
    (r = df(e, t, n, r, o, i)),
    (n = ff()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nn(e, t, i))
      : (ye && n && Jd(t), (t.flags |= 1), nt(e, t, r, i), t.child)
  );
}
function Cm(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !_f(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Z0(e, t, o, r, i))
      : ((e = Hs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xo), n(s, r) && e.ref === t.ref)
    )
      return Nn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = rr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Z0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (xo(o, r) && e.ref === t.ref)
      if (((ut = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ut = !0);
      else return (t.lanes = e.lanes), Nn(e, t, i);
  }
  return Vc(e, t, n, r, i);
}
function ev(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        pe(ii, xt),
        (xt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          pe(ii, xt),
          (xt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        pe(ii, xt),
        (xt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      pe(ii, xt),
      (xt |= r);
  return nt(e, t, i, n), t.child;
}
function tv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vc(e, t, n, r, i) {
  var o = dt(n) ? Nr : tt.current;
  return (
    (o = hi(t, o)),
    ci(t, i),
    (n = df(e, t, n, r, o, i)),
    (r = ff()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nn(e, t, i))
      : (ye && r && Jd(t), (t.flags |= 1), nt(e, t, n, i), t.child)
  );
}
function Tm(e, t, n, r, i) {
  if (dt(n)) {
    var o = !0;
    pa(t);
  } else o = !1;
  if ((ci(t, i), t.stateNode === null))
    Bs(e, t), j0(t, n, r), Uc(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Bt(u))
      : ((u = dt(n) ? Nr : tt.current), (u = hi(t, u)));
    var f = n.getDerivedStateFromProps,
      h =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && ym(t, s, r, u)),
      (Un = !1);
    var p = t.memoizedState;
    (s.state = p),
      ya(t, r, s, i),
      (l = t.memoizedState),
      a !== r || p !== l || ct.current || Un
        ? (typeof f == "function" && (zc(t, n, f, r), (l = t.memoizedState)),
          (a = Un || vm(t, n, a, r, p, l, u))
            ? (h ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      C0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Xt(t.type, a)),
      (s.props = u),
      (h = t.pendingProps),
      (p = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Bt(l))
        : ((l = dt(n) ? Nr : tt.current), (l = hi(t, l)));
    var S = n.getDerivedStateFromProps;
    (f =
      typeof S == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== h || p !== l) && ym(t, s, r, l)),
      (Un = !1),
      (p = t.memoizedState),
      (s.state = p),
      ya(t, r, s, i);
    var y = t.memoizedState;
    a !== h || p !== y || ct.current || Un
      ? (typeof S == "function" && (zc(t, n, S, r), (y = t.memoizedState)),
        (u = Un || vm(t, n, u, r, p, y, l) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wc(e, t, n, r, o, i);
}
function Wc(e, t, n, r, i, o) {
  tv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && fm(t, n, !1), Nn(e, t, o);
  (r = t.stateNode), (Yw.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = vi(t, e.child, null, o)), (t.child = vi(t, null, a, o)))
      : nt(e, t, a, o),
    (t.memoizedState = r.state),
    i && fm(t, n, !0),
    t.child
  );
}
function nv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? dm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && dm(e, t.context, !1),
    af(e, t.containerInfo);
}
function jm(e, t, n, r, i) {
  return gi(), ef(i), (t.flags |= 256), nt(e, t, n, r), t.child;
}
var Hc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rv(e, t, n) {
  var r = t.pendingProps,
    i = xe.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    pe(xe, i & 1),
    e === null)
  )
    return (
      Lc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = tl(s, r, 0, null)),
              (e = Pr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Kc(n)),
              (t.memoizedState = Hc),
              e)
            : hf(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Qw(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = rr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = rr(a, o)) : ((o = Pr(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Kc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Hc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = rr(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function hf(e, t) {
  return (
    (t = tl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function xs(e, t, n, r) {
  return (
    r !== null && ef(r),
    vi(t, e.child, null, n),
    (e = hf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Qw(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Mu(Error(L(422)))), xs(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = tl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Pr(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && vi(t, e.child, null, s),
        (t.child.memoizedState = Kc(s)),
        (t.memoizedState = Hc),
        o);
  if (!(t.mode & 1)) return xs(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(L(419))), (r = Mu(o, r, void 0)), xs(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), ut || a)) {
    if (((r = ze), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), jn(e, i), tn(r, e, i, -1));
    }
    return Sf(), (r = Mu(Error(L(421)))), xs(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = uS.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (_t = Zn(i.nextSibling)),
      (Pt = t),
      (ye = !0),
      (Qt = null),
      e !== null &&
        ((Rt[Mt++] = Sn),
        (Rt[Mt++] = _n),
        (Rt[Mt++] = kr),
        (Sn = e.id),
        (_n = e.overflow),
        (kr = t)),
      (t = hf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Nm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fc(e.return, t, n);
}
function $u(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function iv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((nt(e, t, r.children, n), (r = xe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Nm(e, n, t);
        else if (e.tag === 19) Nm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((pe(xe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && xa(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          $u(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && xa(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        $u(t, !0, n, null, o);
        break;
      case "together":
        $u(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ir |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = rr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Gw(e, t, n) {
  switch (t.tag) {
    case 3:
      nv(t), gi();
      break;
    case 5:
      O0(t);
      break;
    case 1:
      dt(t.type) && pa(t);
      break;
    case 4:
      af(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      pe(ga, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(xe, xe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? rv(e, t, n)
          : (pe(xe, xe.current & 1),
            (e = Nn(e, t, n)),
            e !== null ? e.sibling : null);
      pe(xe, xe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return iv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        pe(xe, xe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ev(e, t, n);
  }
  return Nn(e, t, n);
}
var ov, qc, sv, av;
ov = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qc = function () {};
sv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), _r(fn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = hc(e, i)), (r = hc(e, r)), (o = []);
        break;
      case "select":
        (i = Se({}, i, { value: void 0 })),
          (r = Se({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = yc(e, i)), (r = yc(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = da);
    }
    wc(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (fo.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (fo.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && me("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
av = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ui(e, t) {
  if (!ye)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Jw(e, t, n) {
  var r = t.pendingProps;
  switch ((Zd(t), t.tag)) {
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
      return Ge(t), null;
    case 1:
      return dt(t.type) && fa(), Ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        yi(),
        ge(ct),
        ge(tt),
        uf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qt !== null && (td(Qt), (Qt = null)))),
        qc(e, t),
        Ge(t),
        null
      );
    case 5:
      lf(t);
      var i = _r(Eo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Ge(t), null;
        }
        if (((e = _r(fn.current)), vs(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[un] = t), (r[_o] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              me("cancel", r), me("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Gi.length; i++) me(Gi[i], r);
              break;
            case "source":
              me("error", r);
              break;
            case "img":
            case "image":
            case "link":
              me("error", r), me("load", r);
              break;
            case "details":
              me("toggle", r);
              break;
            case "input":
              Lp(r, o), me("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                me("invalid", r);
              break;
            case "textarea":
              zp(r, o), me("invalid", r);
          }
          wc(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      gs(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      gs(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : fo.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  me("scroll", r);
            }
          switch (n) {
            case "input":
              ls(r), Fp(r, o, !0);
              break;
            case "textarea":
              ls(r), Up(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = da);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ag(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[un] = t),
            (e[_o] = r),
            ov(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Sc(n, r)), n)) {
              case "dialog":
                me("cancel", e), me("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Gi.length; i++) me(Gi[i], e);
                i = r;
                break;
              case "source":
                me("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                me("error", e), me("load", e), (i = r);
                break;
              case "details":
                me("toggle", e), (i = r);
                break;
              case "input":
                Lp(e, r), (i = hc(e, r)), me("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Se({}, r, { value: void 0 })),
                  me("invalid", e);
                break;
              case "textarea":
                zp(e, r), (i = yc(e, r)), me("invalid", e);
                break;
              default:
                i = r;
            }
            wc(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? $g(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Rg(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && po(e, l)
                    : typeof l == "number" && po(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (fo.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && me("scroll", e)
                      : l != null && Ld(e, o, l, s));
              }
            switch (n) {
              case "input":
                ls(e), Fp(e, r, !1);
                break;
              case "textarea":
                ls(e), Up(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? si(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      si(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = da);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ge(t), null;
    case 6:
      if (e && t.stateNode != null) av(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = _r(Eo.current)), _r(fn.current), vs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[un] = t),
            (o = r.nodeValue !== n) && ((e = Pt), e !== null))
          )
            switch (e.tag) {
              case 3:
                gs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  gs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[un] = t),
            (t.stateNode = r);
      }
      return Ge(t), null;
    case 13:
      if (
        (ge(xe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ye && _t !== null && t.mode & 1 && !(t.flags & 128))
          E0(), gi(), (t.flags |= 98560), (o = !1);
        else if (((o = vs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(L(317));
            o[un] = t;
          } else
            gi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ge(t), (o = !1);
        } else Qt !== null && (td(Qt), (Qt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || xe.current & 1 ? Me === 0 && (Me = 3) : Sf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        yi(), qc(e, t), e === null && wo(t.stateNode.containerInfo), Ge(t), null
      );
    case 10:
      return rf(t.type._context), Ge(t), null;
    case 17:
      return dt(t.type) && fa(), Ge(t), null;
    case 19:
      if ((ge(xe), (o = t.memoizedState), o === null)) return Ge(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Ui(o, !1);
        else {
          if (Me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = xa(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ui(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return pe(xe, (xe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Te() > wi &&
            ((t.flags |= 128), (r = !0), Ui(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xa(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ui(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ye)
            )
              return Ge(t), null;
          } else
            2 * Te() - o.renderingStartTime > wi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ui(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Te()),
          (t.sibling = null),
          (n = xe.current),
          pe(xe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        wf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xt & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Zw(e, t) {
  switch ((Zd(t), t.tag)) {
    case 1:
      return (
        dt(t.type) && fa(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        yi(),
        ge(ct),
        ge(tt),
        uf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return lf(t), null;
    case 13:
      if (
        (ge(xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        gi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ge(xe), null;
    case 4:
      return yi(), null;
    case 10:
      return rf(t.type._context), null;
    case 22:
    case 23:
      return wf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ws = !1,
  Ze = !1,
  eS = typeof WeakSet == "function" ? WeakSet : Set,
  K = null;
function ri(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Pe(e, t, r);
      }
    else n.current = null;
}
function Xc(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var km = !1;
function tS(e, t) {
  if (((Oc = la), (e = d0()), Gd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            f = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var S;
              h !== n || (i !== 0 && h.nodeType !== 3) || (a = s + i),
                h !== o || (r !== 0 && h.nodeType !== 3) || (l = s + r),
                h.nodeType === 3 && (s += h.nodeValue.length),
                (S = h.firstChild) !== null;

            )
              (p = h), (h = S);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++u === i && (a = s),
                p === o && ++f === r && (l = s),
                (S = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = S;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ic = { focusedElem: e, selectionRange: n }, la = !1, K = t; K !== null; )
    if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (K = e);
    else
      for (; K !== null; ) {
        t = K;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    E = y.memoizedState,
                    w = t.stateNode,
                    m = w.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Xt(t.type, g),
                      E
                    );
                  w.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (v) {
          Pe(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (K = e);
          break;
        }
        K = t.return;
      }
  return (y = km), (km = !1), y;
}
function oo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Xc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Za(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yc(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function lv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[un], delete t[_o], delete t[Rc], delete t[$w], delete t[Lw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function uv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Om(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || uv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Qc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = da));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qc(e, t, n), e = e.sibling; e !== null; ) Qc(e, t, n), (e = e.sibling);
}
function Gc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gc(e, t, n), e = e.sibling; e !== null; ) Gc(e, t, n), (e = e.sibling);
}
var Ve = null,
  Yt = !1;
function $n(e, t, n) {
  for (n = n.child; n !== null; ) cv(e, t, n), (n = n.sibling);
}
function cv(e, t, n) {
  if (dn && typeof dn.onCommitFiberUnmount == "function")
    try {
      dn.onCommitFiberUnmount(Ha, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ze || ri(n, t);
    case 6:
      var r = Ve,
        i = Yt;
      (Ve = null),
        $n(e, t, n),
        (Ve = r),
        (Yt = i),
        Ve !== null &&
          (Yt
            ? ((e = Ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ve.removeChild(n.stateNode));
      break;
    case 18:
      Ve !== null &&
        (Yt
          ? ((e = Ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? ku(e.parentNode, n)
              : e.nodeType === 1 && ku(e, n),
            vo(e))
          : ku(Ve, n.stateNode));
      break;
    case 4:
      (r = Ve),
        (i = Yt),
        (Ve = n.stateNode.containerInfo),
        (Yt = !0),
        $n(e, t, n),
        (Ve = r),
        (Yt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Xc(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      $n(e, t, n);
      break;
    case 1:
      if (
        !Ze &&
        (ri(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Pe(n, t, a);
        }
      $n(e, t, n);
      break;
    case 21:
      $n(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ze = (r = Ze) || n.memoizedState !== null), $n(e, t, n), (Ze = r))
        : $n(e, t, n);
      break;
    default:
      $n(e, t, n);
  }
}
function Im(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new eS()),
      t.forEach(function (r) {
        var i = cS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function qt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ve = a.stateNode), (Yt = !1);
              break e;
            case 3:
              (Ve = a.stateNode.containerInfo), (Yt = !0);
              break e;
            case 4:
              (Ve = a.stateNode.containerInfo), (Yt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ve === null) throw Error(L(160));
        cv(o, s, i), (Ve = null), (Yt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        Pe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dv(t, e), (t = t.sibling);
}
function dv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qt(t, e), on(e), r & 4)) {
        try {
          oo(3, e, e.return), Za(3, e);
        } catch (g) {
          Pe(e, e.return, g);
        }
        try {
          oo(5, e, e.return);
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      break;
    case 1:
      qt(t, e), on(e), r & 512 && n !== null && ri(n, n.return);
      break;
    case 5:
      if (
        (qt(t, e),
        on(e),
        r & 512 && n !== null && ri(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          po(i, "");
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Ig(i, o),
              Sc(a, s);
            var u = Sc(a, o);
            for (s = 0; s < l.length; s += 2) {
              var f = l[s],
                h = l[s + 1];
              f === "style"
                ? $g(i, h)
                : f === "dangerouslySetInnerHTML"
                ? Rg(i, h)
                : f === "children"
                ? po(i, h)
                : Ld(i, f, h, u);
            }
            switch (a) {
              case "input":
                gc(i, o);
                break;
              case "textarea":
                Dg(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? si(i, !!o.multiple, S, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? si(i, !!o.multiple, o.defaultValue, !0)
                      : si(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[_o] = o;
          } catch (g) {
            Pe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((qt(t, e), on(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          Pe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (qt(t, e), on(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          vo(t.containerInfo);
        } catch (g) {
          Pe(e, e.return, g);
        }
      break;
    case 4:
      qt(t, e), on(e);
      break;
    case 13:
      qt(t, e),
        on(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (yf = Te())),
        r & 4 && Im(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ze = (u = Ze) || f), qt(t, e), (Ze = u)) : qt(t, e),
        on(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (K = e, f = e.child; f !== null; ) {
            for (h = K = f; K !== null; ) {
              switch (((p = K), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  oo(4, p, p.return);
                  break;
                case 1:
                  ri(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      Pe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ri(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Am(h);
                    continue;
                  }
              }
              S !== null ? ((S.return = p), (K = S)) : Am(h);
            }
            f = f.sibling;
          }
        e: for (f = null, h = e; ; ) {
          if (h.tag === 5) {
            if (f === null) {
              f = h;
              try {
                (i = h.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = h.stateNode),
                      (l = h.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Mg("display", s)));
              } catch (g) {
                Pe(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (f === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (g) {
                Pe(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            f === h && (f = null), (h = h.return);
          }
          f === h && (f = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      qt(t, e), on(e), r & 4 && Im(e);
      break;
    case 21:
      break;
    default:
      qt(t, e), on(e);
  }
}
function on(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (uv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (po(i, ""), (r.flags &= -33));
          var o = Om(e);
          Gc(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Om(e);
          Qc(e, a, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      Pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function nS(e, t, n) {
  (K = e), fv(e);
}
function fv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var i = K,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ws;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ze;
        a = ws;
        var u = Ze;
        if (((ws = s), (Ze = l) && !u))
          for (K = i; K !== null; )
            (s = K),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Rm(i)
                : l !== null
                ? ((l.return = s), (K = l))
                : Rm(i);
        for (; o !== null; ) (K = o), fv(o), (o = o.sibling);
        (K = i), (ws = a), (Ze = u);
      }
      Dm(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (K = o)) : Dm(e);
  }
}
function Dm(e) {
  for (; K !== null; ) {
    var t = K;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ze || Za(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ze)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && gm(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                gm(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var h = f.dehydrated;
                    h !== null && vo(h);
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
              throw Error(L(163));
          }
        Ze || (t.flags & 512 && Yc(t));
      } catch (p) {
        Pe(t, t.return, p);
      }
    }
    if (t === e) {
      K = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (K = n);
      break;
    }
    K = t.return;
  }
}
function Am(e) {
  for (; K !== null; ) {
    var t = K;
    if (t === e) {
      K = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (K = n);
      break;
    }
    K = t.return;
  }
}
function Rm(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Za(4, t);
          } catch (l) {
            Pe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Pe(t, i, l);
            }
          }
          var o = t.return;
          try {
            Yc(t);
          } catch (l) {
            Pe(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Yc(t);
          } catch (l) {
            Pe(t, s, l);
          }
      }
    } catch (l) {
      Pe(t, t.return, l);
    }
    if (t === e) {
      K = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (K = a);
      break;
    }
    K = t.return;
  }
}
var rS = Math.ceil,
  _a = Dn.ReactCurrentDispatcher,
  gf = Dn.ReactCurrentOwner,
  zt = Dn.ReactCurrentBatchConfig,
  ne = 0,
  ze = null,
  Ie = null,
  Ke = 0,
  xt = 0,
  ii = fr(0),
  Me = 0,
  jo = null,
  Ir = 0,
  el = 0,
  vf = 0,
  so = null,
  lt = null,
  yf = 0,
  wi = 1 / 0,
  yn = null,
  ba = !1,
  Jc = null,
  tr = null,
  Ss = !1,
  Kn = null,
  Ea = 0,
  ao = 0,
  Zc = null,
  Vs = -1,
  Ws = 0;
function ot() {
  return ne & 6 ? Te() : Vs !== -1 ? Vs : (Vs = Te());
}
function nr(e) {
  return e.mode & 1
    ? ne & 2 && Ke !== 0
      ? Ke & -Ke
      : zw.transition !== null
      ? (Ws === 0 && (Ws = Yg()), Ws)
      : ((e = le),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : n0(e.type))),
        e)
    : 1;
}
function tn(e, t, n, r) {
  if (50 < ao) throw ((ao = 0), (Zc = null), Error(L(185)));
  Bo(e, n, r),
    (!(ne & 2) || e !== ze) &&
      (e === ze && (!(ne & 2) && (el |= n), Me === 4 && Vn(e, Ke)),
      ft(e, r),
      n === 1 && ne === 0 && !(t.mode & 1) && ((wi = Te() + 500), Qa && pr()));
}
function ft(e, t) {
  var n = e.callbackNode;
  zx(e, t);
  var r = aa(e, e === ze ? Ke : 0);
  if (r === 0)
    n !== null && Wp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wp(n), t === 1))
      e.tag === 0 ? Fw(Mm.bind(null, e)) : S0(Mm.bind(null, e)),
        Rw(function () {
          !(ne & 6) && pr();
        }),
        (n = null);
    else {
      switch (Qg(r)) {
        case 1:
          n = Vd;
          break;
        case 4:
          n = qg;
          break;
        case 16:
          n = sa;
          break;
        case 536870912:
          n = Xg;
          break;
        default:
          n = sa;
      }
      n = wv(n, pv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function pv(e, t) {
  if (((Vs = -1), (Ws = 0), ne & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (di() && e.callbackNode !== n) return null;
  var r = aa(e, e === ze ? Ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pa(e, r);
  else {
    t = r;
    var i = ne;
    ne |= 2;
    var o = hv();
    (ze !== e || Ke !== t) && ((yn = null), (wi = Te() + 500), Er(e, t));
    do
      try {
        sS();
        break;
      } catch (a) {
        mv(e, a);
      }
    while (!0);
    nf(),
      (_a.current = o),
      (ne = i),
      Ie !== null ? (t = 0) : ((ze = null), (Ke = 0), (t = Me));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Cc(e)), i !== 0 && ((r = i), (t = ed(e, i)))), t === 1)
    )
      throw ((n = jo), Er(e, 0), Vn(e, r), ft(e, Te()), n);
    if (t === 6) Vn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !iS(i) &&
          ((t = Pa(e, r)),
          t === 2 && ((o = Cc(e)), o !== 0 && ((r = o), (t = ed(e, o)))),
          t === 1))
      )
        throw ((n = jo), Er(e, 0), Vn(e, r), ft(e, Te()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          yr(e, lt, yn);
          break;
        case 3:
          if (
            (Vn(e, r), (r & 130023424) === r && ((t = yf + 500 - Te()), 10 < t))
          ) {
            if (aa(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ot(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ac(yr.bind(null, e, lt, yn), t);
            break;
          }
          yr(e, lt, yn);
          break;
        case 4:
          if ((Vn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - en(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Te() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * rS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ac(yr.bind(null, e, lt, yn), r);
            break;
          }
          yr(e, lt, yn);
          break;
        case 5:
          yr(e, lt, yn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return ft(e, Te()), e.callbackNode === n ? pv.bind(null, e) : null;
}
function ed(e, t) {
  var n = so;
  return (
    e.current.memoizedState.isDehydrated && (Er(e, t).flags |= 256),
    (e = Pa(e, t)),
    e !== 2 && ((t = lt), (lt = n), t !== null && td(t)),
    e
  );
}
function td(e) {
  lt === null ? (lt = e) : lt.push.apply(lt, e);
}
function iS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!nn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Vn(e, t) {
  for (
    t &= ~vf,
      t &= ~el,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - en(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Mm(e) {
  if (ne & 6) throw Error(L(327));
  di();
  var t = aa(e, 0);
  if (!(t & 1)) return ft(e, Te()), null;
  var n = Pa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Cc(e);
    r !== 0 && ((t = r), (n = ed(e, r)));
  }
  if (n === 1) throw ((n = jo), Er(e, 0), Vn(e, t), ft(e, Te()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yr(e, lt, yn),
    ft(e, Te()),
    null
  );
}
function xf(e, t) {
  var n = ne;
  ne |= 1;
  try {
    return e(t);
  } finally {
    (ne = n), ne === 0 && ((wi = Te() + 500), Qa && pr());
  }
}
function Dr(e) {
  Kn !== null && Kn.tag === 0 && !(ne & 6) && di();
  var t = ne;
  ne |= 1;
  var n = zt.transition,
    r = le;
  try {
    if (((zt.transition = null), (le = 1), e)) return e();
  } finally {
    (le = r), (zt.transition = n), (ne = t), !(ne & 6) && pr();
  }
}
function wf() {
  (xt = ii.current), ge(ii);
}
function Er(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Aw(n)), Ie !== null))
    for (n = Ie.return; n !== null; ) {
      var r = n;
      switch ((Zd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && fa();
          break;
        case 3:
          yi(), ge(ct), ge(tt), uf();
          break;
        case 5:
          lf(r);
          break;
        case 4:
          yi();
          break;
        case 13:
          ge(xe);
          break;
        case 19:
          ge(xe);
          break;
        case 10:
          rf(r.type._context);
          break;
        case 22:
        case 23:
          wf();
      }
      n = n.return;
    }
  if (
    ((ze = e),
    (Ie = e = rr(e.current, null)),
    (Ke = xt = t),
    (Me = 0),
    (jo = null),
    (vf = el = Ir = 0),
    (lt = so = null),
    Sr !== null)
  ) {
    for (t = 0; t < Sr.length; t++)
      if (((n = Sr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Sr = null;
  }
  return e;
}
function mv(e, t) {
  do {
    var n = Ie;
    try {
      if ((nf(), (zs.current = Sa), wa)) {
        for (var r = we.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        wa = !1;
      }
      if (
        ((Or = 0),
        (Fe = Re = we = null),
        (io = !1),
        (Po = 0),
        (gf.current = null),
        n === null || n.return === null)
      ) {
        (Me = 1), (jo = t), (Ie = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Ke),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            f = a,
            h = f.tag;
          if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var S = bm(s);
          if (S !== null) {
            (S.flags &= -257),
              Em(S, s, a, o, t),
              S.mode & 1 && _m(o, u, t),
              (t = S),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              _m(o, u, t), Sf();
              break e;
            }
            l = Error(L(426));
          }
        } else if (ye && a.mode & 1) {
          var E = bm(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Em(E, s, a, o, t),
              ef(xi(l, a));
            break e;
          }
        }
        (o = l = xi(l, a)),
          Me !== 4 && (Me = 2),
          so === null ? (so = [o]) : so.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var w = G0(o, l, t);
              hm(o, w);
              break e;
            case 1:
              a = l;
              var m = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (tr === null || !tr.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = J0(o, a, t);
                hm(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      vv(n);
    } catch (x) {
      (t = x), Ie === n && n !== null && (Ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function hv() {
  var e = _a.current;
  return (_a.current = Sa), e === null ? Sa : e;
}
function Sf() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    ze === null || (!(Ir & 268435455) && !(el & 268435455)) || Vn(ze, Ke);
}
function Pa(e, t) {
  var n = ne;
  ne |= 2;
  var r = hv();
  (ze !== e || Ke !== t) && ((yn = null), Er(e, t));
  do
    try {
      oS();
      break;
    } catch (i) {
      mv(e, i);
    }
  while (!0);
  if ((nf(), (ne = n), (_a.current = r), Ie !== null)) throw Error(L(261));
  return (ze = null), (Ke = 0), Me;
}
function oS() {
  for (; Ie !== null; ) gv(Ie);
}
function sS() {
  for (; Ie !== null && !Ox(); ) gv(Ie);
}
function gv(e) {
  var t = xv(e.alternate, e, xt);
  (e.memoizedProps = e.pendingProps),
    t === null ? vv(e) : (Ie = t),
    (gf.current = null);
}
function vv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zw(n, t)), n !== null)) {
        (n.flags &= 32767), (Ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Me = 6), (Ie = null);
        return;
      }
    } else if (((n = Jw(n, t, xt)), n !== null)) {
      Ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ie = t;
      return;
    }
    Ie = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function yr(e, t, n) {
  var r = le,
    i = zt.transition;
  try {
    (zt.transition = null), (le = 1), aS(e, t, n, r);
  } finally {
    (zt.transition = i), (le = r);
  }
  return null;
}
function aS(e, t, n, r) {
  do di();
  while (Kn !== null);
  if (ne & 6) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Ux(e, o),
    e === ze && ((Ie = ze = null), (Ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ss ||
      ((Ss = !0),
      wv(sa, function () {
        return di(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = zt.transition), (zt.transition = null);
    var s = le;
    le = 1;
    var a = ne;
    (ne |= 4),
      (gf.current = null),
      tS(e, n),
      dv(n, e),
      Tw(Ic),
      (la = !!Oc),
      (Ic = Oc = null),
      (e.current = n),
      nS(n),
      Ix(),
      (ne = a),
      (le = s),
      (zt.transition = o);
  } else e.current = n;
  if (
    (Ss && ((Ss = !1), (Kn = e), (Ea = i)),
    (o = e.pendingLanes),
    o === 0 && (tr = null),
    Rx(n.stateNode),
    ft(e, Te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ba) throw ((ba = !1), (e = Jc), (Jc = null), e);
  return (
    Ea & 1 && e.tag !== 0 && di(),
    (o = e.pendingLanes),
    o & 1 ? (e === Zc ? ao++ : ((ao = 0), (Zc = e))) : (ao = 0),
    pr(),
    null
  );
}
function di() {
  if (Kn !== null) {
    var e = Qg(Ea),
      t = zt.transition,
      n = le;
    try {
      if (((zt.transition = null), (le = 16 > e ? 16 : e), Kn === null))
        var r = !1;
      else {
        if (((e = Kn), (Kn = null), (Ea = 0), ne & 6)) throw Error(L(331));
        var i = ne;
        for (ne |= 4, K = e.current; K !== null; ) {
          var o = K,
            s = o.child;
          if (K.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (K = u; K !== null; ) {
                  var f = K;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oo(8, f, o);
                  }
                  var h = f.child;
                  if (h !== null) (h.return = f), (K = h);
                  else
                    for (; K !== null; ) {
                      f = K;
                      var p = f.sibling,
                        S = f.return;
                      if ((lv(f), f === u)) {
                        K = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = S), (K = p);
                        break;
                      }
                      K = S;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var E = g.sibling;
                    (g.sibling = null), (g = E);
                  } while (g !== null);
                }
              }
              K = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (K = s);
          else
            e: for (; K !== null; ) {
              if (((o = K), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    oo(9, o, o.return);
                }
              var w = o.sibling;
              if (w !== null) {
                (w.return = o.return), (K = w);
                break e;
              }
              K = o.return;
            }
        }
        var m = e.current;
        for (K = m; K !== null; ) {
          s = K;
          var d = s.child;
          if (s.subtreeFlags & 2064 && d !== null) (d.return = s), (K = d);
          else
            e: for (s = m; K !== null; ) {
              if (((a = K), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Za(9, a);
                  }
                } catch (x) {
                  Pe(a, a.return, x);
                }
              if (a === s) {
                K = null;
                break e;
              }
              var v = a.sibling;
              if (v !== null) {
                (v.return = a.return), (K = v);
                break e;
              }
              K = a.return;
            }
        }
        if (
          ((ne = i), pr(), dn && typeof dn.onPostCommitFiberRoot == "function")
        )
          try {
            dn.onPostCommitFiberRoot(Ha, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (le = n), (zt.transition = t);
    }
  }
  return !1;
}
function $m(e, t, n) {
  (t = xi(n, t)),
    (t = G0(e, t, 1)),
    (e = er(e, t, 1)),
    (t = ot()),
    e !== null && (Bo(e, 1, t), ft(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) $m(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $m(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (tr === null || !tr.has(r)))
        ) {
          (e = xi(n, e)),
            (e = J0(t, e, 1)),
            (t = er(t, e, 1)),
            (e = ot()),
            t !== null && (Bo(t, 1, e), ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function lS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ot()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ze === e &&
      (Ke & n) === n &&
      (Me === 4 || (Me === 3 && (Ke & 130023424) === Ke && 500 > Te() - yf)
        ? Er(e, 0)
        : (vf |= n)),
    ft(e, t);
}
function yv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ds), (ds <<= 1), !(ds & 130023424) && (ds = 4194304))
      : (t = 1));
  var n = ot();
  (e = jn(e, t)), e !== null && (Bo(e, t, n), ft(e, n));
}
function uS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), yv(e, n);
}
function cS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), yv(e, n);
}
var xv;
xv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ct.current) ut = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ut = !1), Gw(e, t, n);
      ut = !!(e.flags & 131072);
    }
  else (ut = !1), ye && t.flags & 1048576 && _0(t, ha, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bs(e, t), (e = t.pendingProps);
      var i = hi(t, tt.current);
      ci(t, n), (i = df(null, t, r, e, i, n));
      var o = ff();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            dt(r) ? ((o = !0), pa(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            sf(t),
            (i.updater = Ga),
            (t.stateNode = i),
            (i._reactInternals = t),
            Uc(t, r, e, n),
            (t = Wc(null, t, r, !0, o, n)))
          : ((t.tag = 0), ye && o && Jd(t), nt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = fS(r)),
          (e = Xt(r, e)),
          i)
        ) {
          case 0:
            t = Vc(null, t, r, e, n);
            break e;
          case 1:
            t = Tm(null, t, r, e, n);
            break e;
          case 11:
            t = Pm(null, t, r, e, n);
            break e;
          case 14:
            t = Cm(null, t, r, Xt(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xt(r, i)),
        Vc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xt(r, i)),
        Tm(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((nv(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          C0(e, t),
          ya(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = xi(Error(L(423)), t)), (t = jm(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = xi(Error(L(424)), t)), (t = jm(e, t, r, n, i));
            break e;
          } else
            for (
              _t = Zn(t.stateNode.containerInfo.firstChild),
                Pt = t,
                ye = !0,
                Qt = null,
                n = k0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((gi(), r === i)) {
            t = Nn(e, t, n);
            break e;
          }
          nt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        O0(t),
        e === null && Lc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Dc(r, i) ? (s = null) : o !== null && Dc(r, o) && (t.flags |= 32),
        tv(e, t),
        nt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Lc(t), null;
    case 13:
      return rv(e, t, n);
    case 4:
      return (
        af(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vi(t, null, r, n)) : nt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xt(r, i)),
        Pm(e, t, r, i, n)
      );
    case 7:
      return nt(e, t, t.pendingProps, n), t.child;
    case 8:
      return nt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return nt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          pe(ga, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (nn(o.value, s)) {
            if (o.children === i.children && !ct.current) {
              t = Nn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = En(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (l.next = l)
                          : ((l.next = f.next), (f.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Fc(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(L(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Fc(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        nt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ci(t, n),
        (i = Bt(i)),
        (r = r(i)),
        (t.flags |= 1),
        nt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Xt(r, t.pendingProps)),
        (i = Xt(r.type, i)),
        Cm(e, t, r, i, n)
      );
    case 15:
      return Z0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xt(r, i)),
        Bs(e, t),
        (t.tag = 1),
        dt(r) ? ((e = !0), pa(t)) : (e = !1),
        ci(t, n),
        j0(t, r, i),
        Uc(t, r, i, n),
        Wc(null, t, r, !0, e, n)
      );
    case 19:
      return iv(e, t, n);
    case 22:
      return ev(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function wv(e, t) {
  return Kg(e, t);
}
function dS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Lt(e, t, n, r) {
  return new dS(e, t, n, r);
}
function _f(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fS(e) {
  if (typeof e == "function") return _f(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zd)) return 11;
    if (e === Ud) return 14;
  }
  return 2;
}
function rr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Hs(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) _f(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Xr:
        return Pr(n.children, i, o, t);
      case Fd:
        (s = 8), (i |= 8);
        break;
      case dc:
        return (
          (e = Lt(12, n, t, i | 2)), (e.elementType = dc), (e.lanes = o), e
        );
      case fc:
        return (e = Lt(13, n, t, i)), (e.elementType = fc), (e.lanes = o), e;
      case pc:
        return (e = Lt(19, n, t, i)), (e.elementType = pc), (e.lanes = o), e;
      case Ng:
        return tl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Tg:
              s = 10;
              break e;
            case jg:
              s = 9;
              break e;
            case zd:
              s = 11;
              break e;
            case Ud:
              s = 14;
              break e;
            case zn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Lt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Pr(e, t, n, r) {
  return (e = Lt(7, e, r, t)), (e.lanes = n), e;
}
function tl(e, t, n, r) {
  return (
    (e = Lt(22, e, r, t)),
    (e.elementType = Ng),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Lu(e, t, n) {
  return (e = Lt(6, e, null, t)), (e.lanes = n), e;
}
function Fu(e, t, n) {
  return (
    (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pS(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = xu(0)),
    (this.expirationTimes = xu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function bf(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new pS(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Lt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    sf(o),
    e
  );
}
function mS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: qr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Sv(e) {
  if (!e) return ar;
  e = e._reactInternals;
  e: {
    if ($r(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (dt(n)) return w0(e, n, t);
  }
  return t;
}
function _v(e, t, n, r, i, o, s, a, l) {
  return (
    (e = bf(n, r, !0, e, i, o, s, a, l)),
    (e.context = Sv(null)),
    (n = e.current),
    (r = ot()),
    (i = nr(n)),
    (o = En(r, i)),
    (o.callback = t ?? null),
    er(n, o, i),
    (e.current.lanes = i),
    Bo(e, i, r),
    ft(e, r),
    e
  );
}
function nl(e, t, n, r) {
  var i = t.current,
    o = ot(),
    s = nr(i);
  return (
    (n = Sv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = En(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = er(i, t, s)),
    e !== null && (tn(e, i, s, o), Fs(e, i, s)),
    s
  );
}
function Ca(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ef(e, t) {
  Lm(e, t), (e = e.alternate) && Lm(e, t);
}
function hS() {
  return null;
}
var bv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Pf(e) {
  this._internalRoot = e;
}
rl.prototype.render = Pf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  nl(e, t, null, null);
};
rl.prototype.unmount = Pf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dr(function () {
      nl(null, e, null, null);
    }),
      (t[Tn] = null);
  }
};
function rl(e) {
  this._internalRoot = e;
}
rl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bn.length && t !== 0 && t < Bn[n].priority; n++);
    Bn.splice(n, 0, e), n === 0 && t0(e);
  }
};
function Cf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function il(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Fm() {}
function gS(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Ca(s);
        o.call(u);
      };
    }
    var s = _v(t, r, e, 0, null, !1, !1, "", Fm);
    return (
      (e._reactRootContainer = s),
      (e[Tn] = s.current),
      wo(e.nodeType === 8 ? e.parentNode : e),
      Dr(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ca(l);
      a.call(u);
    };
  }
  var l = bf(e, 0, !1, null, null, !1, !1, "", Fm);
  return (
    (e._reactRootContainer = l),
    (e[Tn] = l.current),
    wo(e.nodeType === 8 ? e.parentNode : e),
    Dr(function () {
      nl(t, l, n, r);
    }),
    l
  );
}
function ol(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ca(s);
        a.call(l);
      };
    }
    nl(t, s, e, i);
  } else s = gS(n, t, e, i, r);
  return Ca(s);
}
Gg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Qi(t.pendingLanes);
        n !== 0 &&
          (Wd(t, n | 1), ft(t, Te()), !(ne & 6) && ((wi = Te() + 500), pr()));
      }
      break;
    case 13:
      Dr(function () {
        var r = jn(e, 1);
        if (r !== null) {
          var i = ot();
          tn(r, e, 1, i);
        }
      }),
        Ef(e, 1);
  }
};
Hd = function (e) {
  if (e.tag === 13) {
    var t = jn(e, 134217728);
    if (t !== null) {
      var n = ot();
      tn(t, e, 134217728, n);
    }
    Ef(e, 134217728);
  }
};
Jg = function (e) {
  if (e.tag === 13) {
    var t = nr(e),
      n = jn(e, t);
    if (n !== null) {
      var r = ot();
      tn(n, e, t, r);
    }
    Ef(e, t);
  }
};
Zg = function () {
  return le;
};
e0 = function (e, t) {
  var n = le;
  try {
    return (le = e), t();
  } finally {
    le = n;
  }
};
bc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((gc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ya(r);
            if (!i) throw Error(L(90));
            Og(r), gc(r, i);
          }
        }
      }
      break;
    case "textarea":
      Dg(e, n);
      break;
    case "select":
      (t = n.value), t != null && si(e, !!n.multiple, t, !1);
  }
};
zg = xf;
Ug = Dr;
var vS = { usingClientEntryPoint: !1, Events: [Wo, Jr, Ya, Lg, Fg, xf] },
  Bi = {
    findFiberByHostInstance: wr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  yS = {
    bundleType: Bi.bundleType,
    version: Bi.version,
    rendererPackageName: Bi.rendererPackageName,
    rendererConfig: Bi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Bi.findFiberByHostInstance || hS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_s.isDisabled && _s.supportsFiber)
    try {
      (Ha = _s.inject(yS)), (dn = _s);
    } catch {}
}
kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vS;
kt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cf(t)) throw Error(L(200));
  return mS(e, t, null, n);
};
kt.createRoot = function (e, t) {
  if (!Cf(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = bv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = bf(e, 1, !1, null, null, n, !1, r, i)),
    (e[Tn] = t.current),
    wo(e.nodeType === 8 ? e.parentNode : e),
    new Pf(t)
  );
};
kt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Wg(t)), (e = e === null ? null : e.stateNode), e;
};
kt.flushSync = function (e) {
  return Dr(e);
};
kt.hydrate = function (e, t, n) {
  if (!il(t)) throw Error(L(200));
  return ol(null, e, t, !0, n);
};
kt.hydrateRoot = function (e, t, n) {
  if (!Cf(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = bv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = _v(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Tn] = t.current),
    wo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new rl(t);
};
kt.render = function (e, t, n) {
  if (!il(t)) throw Error(L(200));
  return ol(null, e, t, !1, n);
};
kt.unmountComponentAtNode = function (e) {
  if (!il(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Dr(function () {
        ol(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tn] = null);
        });
      }),
      !0)
    : !1;
};
kt.unstable_batchedUpdates = xf;
kt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!il(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return ol(e, t, n, !1, r);
};
kt.version = "18.2.0-next-9e3b772b8-20220608";
function Ev() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ev);
    } catch (e) {
      console.error(e);
    }
}
Ev(), (_g.exports = kt);
var xS = _g.exports,
  zm = xS;
(uc.createRoot = zm.createRoot), (uc.hydrateRoot = zm.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function No() {
  return (
    (No = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    No.apply(this, arguments)
  );
}
var qn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(qn || (qn = {}));
const Um = "popstate";
function wS(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return nd(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ta(i);
  }
  return _S(t, n, null, e);
}
function je(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Pv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function SS() {
  return Math.random().toString(36).substr(2, 8);
}
function Bm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function nd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    No(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ti(t) : t,
      { state: n, key: (t && t.key) || r || SS() }
    )
  );
}
function Ta(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ti(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function _S(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = qn.Pop,
    l = null,
    u = f();
  u == null && ((u = 0), s.replaceState(No({}, s.state, { idx: u }), ""));
  function f() {
    return (s.state || { idx: null }).idx;
  }
  function h() {
    a = qn.Pop;
    let E = f(),
      w = E == null ? null : E - u;
    (u = E), l && l({ action: a, location: g.location, delta: w });
  }
  function p(E, w) {
    a = qn.Push;
    let m = nd(g.location, E, w);
    n && n(m, E), (u = f() + 1);
    let d = Bm(m, u),
      v = g.createHref(m);
    try {
      s.pushState(d, "", v);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      i.location.assign(v);
    }
    o && l && l({ action: a, location: g.location, delta: 1 });
  }
  function S(E, w) {
    a = qn.Replace;
    let m = nd(g.location, E, w);
    n && n(m, E), (u = f());
    let d = Bm(m, u),
      v = g.createHref(m);
    s.replaceState(d, "", v),
      o && l && l({ action: a, location: g.location, delta: 0 });
  }
  function y(E) {
    let w = i.location.origin !== "null" ? i.location.origin : i.location.href,
      m = typeof E == "string" ? E : Ta(E);
    return (
      (m = m.replace(/ $/, "%20")),
      je(
        w,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, w)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(E) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Um, h),
        (l = E),
        () => {
          i.removeEventListener(Um, h), (l = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: y,
    encodeLocation(E) {
      let w = y(E);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: p,
    replace: S,
    go(E) {
      return s.go(E);
    },
  };
  return g;
}
var Vm;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Vm || (Vm = {}));
function bS(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ti(t) : t,
    i = Tf(r.pathname || "/", n);
  if (i == null) return null;
  let o = Cv(e);
  ES(o);
  let s = null;
  for (let a = 0; s == null && a < o.length; ++a) {
    let l = MS(i);
    s = DS(o[a], l);
  }
  return s;
}
function Cv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (je(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = ir([r, l.relativePath]),
      f = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (je(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Cv(o.children, t, f, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: OS(u, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of Tv(o.path)) i(o, s, l);
    }),
    t
  );
}
function Tv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = Tv(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function ES(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : IS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const PS = /^:[\w-]+$/,
  CS = 3,
  TS = 2,
  jS = 1,
  NS = 10,
  kS = -2,
  Wm = (e) => e === "*";
function OS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Wm) && (r += kS),
    t && (r += TS),
    n
      .filter((i) => !Wm(i))
      .reduce((i, o) => i + (PS.test(o) ? CS : o === "" ? jS : NS), r)
  );
}
function IS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function DS(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = i === "/" ? t : t.slice(i.length) || "/",
      f = AS(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let h = a.route;
    o.push({
      params: r,
      pathname: ir([i, f.pathname]),
      pathnameBase: zS(ir([i, f.pathnameBase])),
      route: h,
    }),
      f.pathnameBase !== "/" && (i = ir([i, f.pathnameBase]));
  }
  return o;
}
function AS(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = RS(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, f, h) => {
      let { paramName: p, isOptional: S } = f;
      if (p === "*") {
        let g = a[h] || "";
        s = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[h];
      return (
        S && !y ? (u[p] = void 0) : (u[p] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function RS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Pv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function MS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Pv(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Tf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function $S(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Ti(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : LS(n, t)) : t,
    search: US(r),
    hash: BS(i),
  };
}
function LS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function zu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function FS(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function jf(e, t) {
  let n = FS(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Nf(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Ti(e))
    : ((i = No({}, e)),
      je(
        !i.pathname || !i.pathname.includes("?"),
        zu("?", "pathname", "search", i)
      ),
      je(
        !i.pathname || !i.pathname.includes("#"),
        zu("#", "pathname", "hash", i)
      ),
      je(!i.search || !i.search.includes("#"), zu("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    a;
  if (s == null) a = n;
  else {
    let h = t.length - 1;
    if (!r && s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; ) p.shift(), (h -= 1);
      i.pathname = p.join("/");
    }
    a = h >= 0 ? t[h] : "/";
  }
  let l = $S(i, a),
    u = s && s !== "/" && s.endsWith("/"),
    f = (o || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || f) && (l.pathname += "/"), l;
}
const ir = (e) => e.join("/").replace(/\/\/+/g, "/"),
  zS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  US = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  BS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function VS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const jv = ["post", "put", "patch", "delete"];
new Set(jv);
const WS = ["get", ...jv];
new Set(WS);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ko() {
  return (
    (ko = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ko.apply(this, arguments)
  );
}
const kf = C.createContext(null),
  HS = C.createContext(null),
  mr = C.createContext(null),
  sl = C.createContext(null),
  An = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Nv = C.createContext(null);
function KS(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ji() || je(!1);
  let { basename: r, navigator: i } = C.useContext(mr),
    { hash: o, pathname: s, search: a } = Dv(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : ir([r, s])),
    i.createHref({ pathname: l, search: a, hash: o })
  );
}
function ji() {
  return C.useContext(sl) != null;
}
function Ko() {
  return ji() || je(!1), C.useContext(sl).location;
}
function kv(e) {
  C.useContext(mr).static || C.useLayoutEffect(e);
}
function Ov() {
  let { isDataRoute: e } = C.useContext(An);
  return e ? o_() : qS();
}
function qS() {
  ji() || je(!1);
  let e = C.useContext(kf),
    { basename: t, future: n, navigator: r } = C.useContext(mr),
    { matches: i } = C.useContext(An),
    { pathname: o } = Ko(),
    s = JSON.stringify(jf(i, n.v7_relativeSplatPath)),
    a = C.useRef(!1);
  return (
    kv(() => {
      a.current = !0;
    }),
    C.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let h = Nf(u, JSON.parse(s), o, f.relative === "path");
        e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : ir([t, h.pathname])),
          (f.replace ? r.replace : r.push)(h, f.state, f);
      },
      [t, r, s, o, e]
    )
  );
}
function Iv() {
  let { matches: e } = C.useContext(An),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Dv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = C.useContext(mr),
    { matches: i } = C.useContext(An),
    { pathname: o } = Ko(),
    s = JSON.stringify(jf(i, r.v7_relativeSplatPath));
  return C.useMemo(() => Nf(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function XS(e, t) {
  return YS(e, t);
}
function YS(e, t, n, r) {
  ji() || je(!1);
  let { navigator: i } = C.useContext(mr),
    { matches: o } = C.useContext(An),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Ko(),
    f;
  if (t) {
    var h;
    let E = typeof t == "string" ? Ti(t) : t;
    l === "/" || ((h = E.pathname) != null && h.startsWith(l)) || je(!1),
      (f = E);
  } else f = u;
  let p = f.pathname || "/",
    S = p;
  if (l !== "/") {
    let E = l.replace(/^\//, "").split("/");
    S = "/" + p.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let y = bS(e, { pathname: S }),
    g = e_(
      y &&
        y.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, a, E.params),
            pathname: ir([
              l,
              i.encodeLocation
                ? i.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? l
                : ir([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && g
    ? C.createElement(
        sl.Provider,
        {
          value: {
            location: ko(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: qn.Pop,
          },
        },
        g
      )
    : g;
}
function QS() {
  let e = i_(),
    t = VS(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    null
  );
}
const GS = C.createElement(QS, null);
class JS extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          An.Provider,
          { value: this.props.routeContext },
          C.createElement(Nv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ZS(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(kf);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(An.Provider, { value: t }, r)
  );
}
function e_(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let f = s.findIndex(
      (h) => h.route.id && (a == null ? void 0 : a[h.route.id])
    );
    f >= 0 || je(!1), (s = s.slice(0, Math.min(s.length, f + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < s.length; f++) {
      let h = s[f];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = f),
        h.route.id)
      ) {
        let { loaderData: p, errors: S } = n,
          y =
            h.route.loader &&
            p[h.route.id] === void 0 &&
            (!S || S[h.route.id] === void 0);
        if (h.route.lazy || y) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((f, h, p) => {
    let S,
      y = !1,
      g = null,
      E = null;
    n &&
      ((S = a && h.route.id ? a[h.route.id] : void 0),
      (g = h.route.errorElement || GS),
      l &&
        (u < 0 && p === 0
          ? (s_("route-fallback", !1), (y = !0), (E = null))
          : u === p &&
            ((y = !0), (E = h.route.hydrateFallbackElement || null))));
    let w = t.concat(s.slice(0, p + 1)),
      m = () => {
        let d;
        return (
          S
            ? (d = g)
            : y
            ? (d = E)
            : h.route.Component
            ? (d = C.createElement(h.route.Component, null))
            : h.route.element
            ? (d = h.route.element)
            : (d = f),
          C.createElement(ZS, {
            match: h,
            routeContext: { outlet: f, matches: w, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || p === 0)
      ? C.createElement(JS, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: S,
          children: m(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Av = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Av || {}),
  ja = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ja || {});
function t_(e) {
  let t = C.useContext(kf);
  return t || je(!1), t;
}
function n_(e) {
  let t = C.useContext(HS);
  return t || je(!1), t;
}
function r_(e) {
  let t = C.useContext(An);
  return t || je(!1), t;
}
function Rv(e) {
  let t = r_(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || je(!1), n.route.id;
}
function i_() {
  var e;
  let t = C.useContext(Nv),
    n = n_(ja.UseRouteError),
    r = Rv(ja.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function o_() {
  let { router: e } = t_(Av.UseNavigateStable),
    t = Rv(ja.UseNavigateStable),
    n = C.useRef(!1);
  return (
    kv(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, ko({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Hm = {};
function s_(e, t, n) {
  !t && !Hm[e] && (Hm[e] = !0);
}
function Oo(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  ji() || je(!1);
  let { future: o, static: s } = C.useContext(mr),
    { matches: a } = C.useContext(An),
    { pathname: l } = Ko(),
    u = Ov(),
    f = Nf(t, jf(a, o.v7_relativeSplatPath), l, i === "path"),
    h = JSON.stringify(f);
  return (
    C.useEffect(
      () => u(JSON.parse(h), { replace: n, state: r, relative: i }),
      [u, h, i, n, r]
    ),
    null
  );
}
function vt(e) {
  je(!1);
}
function a_(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = qn.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  ji() && je(!1);
  let l = t.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: ko({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s]
    );
  typeof r == "string" && (r = Ti(r));
  let {
      pathname: f = "/",
      search: h = "",
      hash: p = "",
      state: S = null,
      key: y = "default",
    } = r,
    g = C.useMemo(() => {
      let E = Tf(f, l);
      return E == null
        ? null
        : {
            location: { pathname: E, search: h, hash: p, state: S, key: y },
            navigationType: i,
          };
    }, [l, f, h, p, S, y, i]);
  return g == null
    ? null
    : C.createElement(
        mr.Provider,
        { value: u },
        C.createElement(sl.Provider, { children: n, value: g })
      );
}
function l_(e) {
  let { children: t, location: n } = e;
  return XS(rd(t), n);
}
new Promise(() => {});
function rd(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === C.Fragment) {
        n.push.apply(n, rd(r.props.children, o));
        return;
      }
      r.type !== vt && je(!1), !r.props.index || !r.props.children || je(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = rd(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function id() {
  return (
    (id = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    id.apply(this, arguments)
  );
}
function u_(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function c_(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function d_(e, t) {
  return e.button === 0 && (!t || t === "_self") && !c_(e);
}
const f_ = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  p_ = "6";
try {
  window.__reactRouterVersion = p_;
} catch {}
const m_ = "startTransition",
  Km = jr[m_];
function h_(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = C.useRef();
  o.current == null && (o.current = wS({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = C.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    f = C.useCallback(
      (h) => {
        u && Km ? Km(() => l(h)) : l(h);
      },
      [l, u]
    );
  return (
    C.useLayoutEffect(() => s.listen(f), [s, f]),
    C.createElement(a_, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const g_ =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  v_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  te = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: h,
      } = t,
      p = u_(t, f_),
      { basename: S } = C.useContext(mr),
      y,
      g = !1;
    if (typeof u == "string" && v_.test(u) && ((y = u), g_))
      try {
        let d = new URL(window.location.href),
          v = u.startsWith("//") ? new URL(d.protocol + u) : new URL(u),
          x = Tf(v.pathname, S);
        v.origin === d.origin && x != null
          ? (u = x + v.search + v.hash)
          : (g = !0);
      } catch {}
    let E = KS(u, { relative: i }),
      w = y_(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: f,
        relative: i,
        unstable_viewTransition: h,
      });
    function m(d) {
      r && r(d), d.defaultPrevented || w(d);
    }
    return C.createElement(
      "a",
      id({}, p, { href: y || E, onClick: g || o ? r : m, ref: n, target: l })
    );
  });
var qm;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(qm || (qm = {}));
var Xm;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Xm || (Xm = {}));
function y_(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = Ov(),
    u = Ko(),
    f = Dv(e, { relative: s });
  return C.useCallback(
    (h) => {
      if (d_(h, n)) {
        h.preventDefault();
        let p = r !== void 0 ? r : Ta(u) === Ta(f);
        l(e, {
          replace: p,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, f, r, i, n, e, o, s, a]
  );
}
var qo = (e) => e.type === "checkbox",
  oi = (e) => e instanceof Date,
  rt = (e) => e == null;
const Mv = (e) => typeof e == "object";
var $e = (e) => !rt(e) && !Array.isArray(e) && Mv(e) && !oi(e),
  x_ = (e) =>
    $e(e) && e.target ? (qo(e.target) ? e.target.checked : e.target.value) : e,
  w_ = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  S_ = (e, t) => e.has(w_(t)),
  __ = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return $e(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Of =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Dt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(Of && (e instanceof Blob || e instanceof FileList)) &&
    (n || $e(e))
  )
    if (((t = n ? [] : {}), !n && !__(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Dt(e[r]));
  else return e;
  return t;
}
var Xo = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Ce = (e) => e === void 0,
  q = (e, t, n) => {
    if (!t || !$e(e)) return n;
    const r = Xo(t.split(/[,[\].]+?/)).reduce((i, o) => (rt(i) ? i : i[o]), e);
    return Ce(r) || r === e ? (Ce(e[t]) ? n : e[t]) : r;
  },
  wn = (e) => typeof e == "boolean";
const Ym = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Gt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  vn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
X.createContext(null);
var b_ = (e, t, n, r = !0) => {
    const i = { defaultValues: t._defaultValues };
    for (const o in e)
      Object.defineProperty(i, o, {
        get: () => {
          const s = o;
          return (
            t._proxyFormState[s] !== Gt.all &&
              (t._proxyFormState[s] = !r || Gt.all),
            n && (n[s] = !0),
            e[s]
          );
        },
      });
    return i;
  },
  yt = (e) => $e(e) && !Object.keys(e).length,
  E_ = (e, t, n, r) => {
    n(e);
    const { name: i, ...o } = e;
    return (
      yt(o) ||
      Object.keys(o).length >= Object.keys(t).length ||
      Object.keys(o).find((s) => t[s] === (!r || Gt.all))
    );
  },
  Uu = (e) => (Array.isArray(e) ? e : [e]);
function P_(e) {
  const t = X.useRef(e);
  (t.current = e),
    X.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var cn = (e) => typeof e == "string",
  C_ = (e, t, n, r, i) =>
    cn(e)
      ? (r && t.watch.add(e), q(n, e, i))
      : Array.isArray(e)
      ? e.map((o) => (r && t.watch.add(o), q(n, o)))
      : (r && (t.watchAll = !0), n),
  If = (e) => /^\w*$/.test(e),
  $v = (e) => Xo(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  he = (e, t, n) => {
    let r = -1;
    const i = If(t) ? [t] : $v(t),
      o = i.length,
      s = o - 1;
    for (; ++r < o; ) {
      const a = i[r];
      let l = n;
      if (r !== s) {
        const u = e[a];
        l = $e(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
      }
      (e[a] = l), (e = e[a]);
    }
    return e;
  },
  T_ = (e, t, n, r, i) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: i || !0 },
        }
      : {},
  Qm = (e) => ({
    isOnSubmit: !e || e === Gt.onSubmit,
    isOnBlur: e === Gt.onBlur,
    isOnChange: e === Gt.onChange,
    isOnAll: e === Gt.all,
    isOnTouch: e === Gt.onTouched,
  }),
  Gm = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const lo = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const o = q(e, i);
    if (o) {
      const { _f: s, ...a } = o;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], i) && !r) break;
        if (s.ref && t(s.ref, s.name) && !r) break;
        lo(a, t);
      } else $e(a) && lo(a, t);
    }
  }
};
var j_ = (e, t, n) => {
    const r = Xo(q(e, n));
    return he(r, "root", t[n]), he(e, n, r), e;
  },
  Df = (e) => e.type === "file",
  Xn = (e) => typeof e == "function",
  Na = (e) => {
    if (!Of) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Ks = (e) => cn(e),
  Af = (e) => e.type === "radio",
  ka = (e) => e instanceof RegExp;
const Jm = { value: !1, isValid: !1 },
  Zm = { value: !0, isValid: !0 };
var Lv = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Ce(e[0].attributes.value)
        ? Ce(e[0].value) || e[0].value === ""
          ? Zm
          : { value: e[0].value, isValid: !0 }
        : Zm
      : Jm;
  }
  return Jm;
};
const eh = { isValid: !1, value: null };
var Fv = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        eh
      )
    : eh;
function th(e, t, n = "validate") {
  if (Ks(e) || (Array.isArray(e) && e.every(Ks)) || (wn(e) && !e))
    return { type: n, message: Ks(e) ? e : "", ref: t };
}
var zr = (e) => ($e(e) && !ka(e) ? e : { value: e, message: "" }),
  nh = async (e, t, n, r, i) => {
    const {
        ref: o,
        refs: s,
        required: a,
        maxLength: l,
        minLength: u,
        min: f,
        max: h,
        pattern: p,
        validate: S,
        name: y,
        valueAsNumber: g,
        mount: E,
        disabled: w,
      } = e._f,
      m = q(t, y);
    if (!E || w) return {};
    const d = s ? s[0] : o,
      v = (T) => {
        r &&
          d.reportValidity &&
          (d.setCustomValidity(wn(T) ? "" : T || ""), d.reportValidity());
      },
      x = {},
      b = Af(o),
      _ = qo(o),
      P = b || _,
      N =
        ((g || Df(o)) && Ce(o.value) && Ce(m)) ||
        (Na(o) && o.value === "") ||
        m === "" ||
        (Array.isArray(m) && !m.length),
      O = T_.bind(null, y, n, x),
      M = (T, I, R, $ = vn.maxLength, z = vn.minLength) => {
        const U = T ? I : R;
        x[y] = { type: T ? $ : z, message: U, ref: o, ...O(T ? $ : z, U) };
      };
    if (
      i
        ? !Array.isArray(m) || !m.length
        : a &&
          ((!P && (N || rt(m))) ||
            (wn(m) && !m) ||
            (_ && !Lv(s).isValid) ||
            (b && !Fv(s).isValid))
    ) {
      const { value: T, message: I } = Ks(a)
        ? { value: !!a, message: a }
        : zr(a);
      if (
        T &&
        ((x[y] = {
          type: vn.required,
          message: I,
          ref: d,
          ...O(vn.required, I),
        }),
        !n)
      )
        return v(I), x;
    }
    if (!N && (!rt(f) || !rt(h))) {
      let T, I;
      const R = zr(h),
        $ = zr(f);
      if (!rt(m) && !isNaN(m)) {
        const z = o.valueAsNumber || (m && +m);
        rt(R.value) || (T = z > R.value), rt($.value) || (I = z < $.value);
      } else {
        const z = o.valueAsDate || new Date(m),
          U = (W) => new Date(new Date().toDateString() + " " + W),
          D = o.type == "time",
          V = o.type == "week";
        cn(R.value) &&
          m &&
          (T = D ? U(m) > U(R.value) : V ? m > R.value : z > new Date(R.value)),
          cn($.value) &&
            m &&
            (I = D
              ? U(m) < U($.value)
              : V
              ? m < $.value
              : z < new Date($.value));
      }
      if ((T || I) && (M(!!T, R.message, $.message, vn.max, vn.min), !n))
        return v(x[y].message), x;
    }
    if ((l || u) && !N && (cn(m) || (i && Array.isArray(m)))) {
      const T = zr(l),
        I = zr(u),
        R = !rt(T.value) && m.length > +T.value,
        $ = !rt(I.value) && m.length < +I.value;
      if ((R || $) && (M(R, T.message, I.message), !n))
        return v(x[y].message), x;
    }
    if (p && !N && cn(m)) {
      const { value: T, message: I } = zr(p);
      if (
        ka(T) &&
        !m.match(T) &&
        ((x[y] = { type: vn.pattern, message: I, ref: o, ...O(vn.pattern, I) }),
        !n)
      )
        return v(I), x;
    }
    if (S) {
      if (Xn(S)) {
        const T = await S(m, t),
          I = th(T, d);
        if (I && ((x[y] = { ...I, ...O(vn.validate, I.message) }), !n))
          return v(I.message), x;
      } else if ($e(S)) {
        let T = {};
        for (const I in S) {
          if (!yt(T) && !n) break;
          const R = th(await S[I](m, t), d, I);
          R &&
            ((T = { ...R, ...O(I, R.message) }), v(R.message), n && (x[y] = T));
        }
        if (!yt(T) && ((x[y] = { ref: d, ...T }), !n)) return x;
      }
    }
    return v(!0), x;
  };
function N_(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = Ce(e) ? r++ : e[t[r++]];
  return e;
}
function k_(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Ce(e[t])) return !1;
  return !0;
}
function Ae(e, t) {
  const n = Array.isArray(t) ? t : If(t) ? [t] : $v(t),
    r = n.length === 1 ? e : N_(e, n),
    i = n.length - 1,
    o = n[i];
  return (
    r && delete r[o],
    i !== 0 &&
      (($e(r) && yt(r)) || (Array.isArray(r) && k_(r))) &&
      Ae(e, n.slice(0, -1)),
    e
  );
}
var Bu = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (i) => {
        for (const o of e) o.next && o.next(i);
      },
      subscribe: (i) => (
        e.push(i),
        {
          unsubscribe: () => {
            e = e.filter((o) => o !== i);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Oa = (e) => rt(e) || !Mv(e);
function br(e, t) {
  if (Oa(e) || Oa(t)) return e === t;
  if (oi(e) && oi(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const i of n) {
    const o = e[i];
    if (!r.includes(i)) return !1;
    if (i !== "ref") {
      const s = t[i];
      if (
        (oi(o) && oi(s)) ||
        ($e(o) && $e(s)) ||
        (Array.isArray(o) && Array.isArray(s))
          ? !br(o, s)
          : o !== s
      )
        return !1;
    }
  }
  return !0;
}
var zv = (e) => e.type === "select-multiple",
  O_ = (e) => Af(e) || qo(e),
  Vu = (e) => Na(e) && e.isConnected,
  Uv = (e) => {
    for (const t in e) if (Xn(e[t])) return !0;
    return !1;
  };
function Ia(e, t = {}) {
  const n = Array.isArray(e);
  if ($e(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || ($e(e[r]) && !Uv(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), Ia(e[r], t[r]))
        : rt(e[r]) || (t[r] = !0);
  return t;
}
function Bv(e, t, n) {
  const r = Array.isArray(e);
  if ($e(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || ($e(e[i]) && !Uv(e[i]))
        ? Ce(t) || Oa(n[i])
          ? (n[i] = Array.isArray(e[i]) ? Ia(e[i], []) : { ...Ia(e[i]) })
          : Bv(e[i], rt(t) ? {} : t[i], n[i])
        : (n[i] = !br(e[i], t[i]));
  return n;
}
var bs = (e, t) => Bv(e, t, Ia(t)),
  Vv = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    Ce(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && cn(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function Wu(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Df(t)
      ? t.files
      : Af(t)
      ? Fv(e.refs).value
      : zv(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : qo(t)
      ? Lv(e.refs).value
      : Vv(Ce(t.value) ? e.ref.value : t.value, e);
}
var I_ = (e, t, n, r) => {
    const i = {};
    for (const o of e) {
      const s = q(t, o);
      s && he(i, o, s._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: i,
      shouldUseNativeValidation: r,
    };
  },
  Vi = (e) =>
    Ce(e)
      ? e
      : ka(e)
      ? e.source
      : $e(e)
      ? ka(e.value)
        ? e.value.source
        : e.value
      : e,
  D_ = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function rh(e, t, n) {
  const r = q(e, n);
  if (r || If(n)) return { error: r, name: n };
  const i = n.split(".");
  for (; i.length; ) {
    const o = i.join("."),
      s = q(t, o),
      a = q(e, o);
    if (s && !Array.isArray(s) && n !== o) return { name: n };
    if (a && a.type) return { name: o, error: a };
    i.pop();
  }
  return { name: n };
}
var A_ = (e, t, n, r, i) =>
    i.isOnAll
      ? !1
      : !n && i.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : i.isOnBlur)
      ? !e
      : (n ? r.isOnChange : i.isOnChange)
      ? e
      : !0,
  R_ = (e, t) => !Xo(q(e, t)).length && Ae(e, t);
const M_ = {
  mode: Gt.onSubmit,
  reValidateMode: Gt.onChange,
  shouldFocusError: !0,
};
function $_(e = {}) {
  let t = { ...M_, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Xn(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    i =
      $e(t.defaultValues) || $e(t.values)
        ? Dt(t.defaultValues || t.values) || {}
        : {},
    o = t.shouldUnregister ? {} : Dt(i),
    s = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    l,
    u = 0;
  const f = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    h = { values: Bu(), array: Bu(), state: Bu() },
    p = Qm(t.mode),
    S = Qm(t.reValidateMode),
    y = t.criteriaMode === Gt.all,
    g = (j) => (k) => {
      clearTimeout(u), (u = setTimeout(j, k));
    },
    E = async (j) => {
      if (f.isValid || j) {
        const k = t.resolver ? yt((await P()).errors) : await O(r, !0);
        k !== n.isValid && h.state.next({ isValid: k });
      }
    },
    w = (j, k) => {
      (f.isValidating || f.validatingFields) &&
        ((j || Array.from(a.mount)).forEach((A) => {
          A && (k ? he(n.validatingFields, A, k) : Ae(n.validatingFields, A));
        }),
        h.state.next({
          validatingFields: n.validatingFields,
          isValidating: !yt(n.validatingFields),
        }));
    },
    m = (j, k = [], A, H, B = !0, F = !0) => {
      if (H && A) {
        if (((s.action = !0), F && Array.isArray(q(r, j)))) {
          const Y = A(q(r, j), H.argA, H.argB);
          B && he(r, j, Y);
        }
        if (F && Array.isArray(q(n.errors, j))) {
          const Y = A(q(n.errors, j), H.argA, H.argB);
          B && he(n.errors, j, Y), R_(n.errors, j);
        }
        if (f.touchedFields && F && Array.isArray(q(n.touchedFields, j))) {
          const Y = A(q(n.touchedFields, j), H.argA, H.argB);
          B && he(n.touchedFields, j, Y);
        }
        f.dirtyFields && (n.dirtyFields = bs(i, o)),
          h.state.next({
            name: j,
            isDirty: T(j, k),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else he(o, j, k);
    },
    d = (j, k) => {
      he(n.errors, j, k), h.state.next({ errors: n.errors });
    },
    v = (j) => {
      (n.errors = j), h.state.next({ errors: n.errors, isValid: !1 });
    },
    x = (j, k, A, H) => {
      const B = q(r, j);
      if (B) {
        const F = q(o, j, Ce(A) ? q(i, j) : A);
        Ce(F) || (H && H.defaultChecked) || k
          ? he(o, j, k ? F : Wu(B._f))
          : $(j, F),
          s.mount && E();
      }
    },
    b = (j, k, A, H, B) => {
      let F = !1,
        Y = !1;
      const ae = { name: j },
        Le = !!(q(r, j) && q(r, j)._f.disabled);
      if (!A || H) {
        f.isDirty &&
          ((Y = n.isDirty),
          (n.isDirty = ae.isDirty = T()),
          (F = Y !== ae.isDirty));
        const gt = Le || br(q(i, j), k);
        (Y = !!(!Le && q(n.dirtyFields, j))),
          gt || Le ? Ae(n.dirtyFields, j) : he(n.dirtyFields, j, !0),
          (ae.dirtyFields = n.dirtyFields),
          (F = F || (f.dirtyFields && Y !== !gt));
      }
      if (A) {
        const gt = q(n.touchedFields, j);
        gt ||
          (he(n.touchedFields, j, A),
          (ae.touchedFields = n.touchedFields),
          (F = F || (f.touchedFields && gt !== A)));
      }
      return F && B && h.state.next(ae), F ? ae : {};
    },
    _ = (j, k, A, H) => {
      const B = q(n.errors, j),
        F = f.isValid && wn(k) && n.isValid !== k;
      if (
        (e.delayError && A
          ? ((l = g(() => d(j, A))), l(e.delayError))
          : (clearTimeout(u),
            (l = null),
            A ? he(n.errors, j, A) : Ae(n.errors, j)),
        (A ? !br(B, A) : B) || !yt(H) || F)
      ) {
        const Y = {
          ...H,
          ...(F && wn(k) ? { isValid: k } : {}),
          errors: n.errors,
          name: j,
        };
        (n = { ...n, ...Y }), h.state.next(Y);
      }
    },
    P = async (j) => {
      w(j, !0);
      const k = await t.resolver(
        o,
        t.context,
        I_(j || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return w(j), k;
    },
    N = async (j) => {
      const { errors: k } = await P(j);
      if (j)
        for (const A of j) {
          const H = q(k, A);
          H ? he(n.errors, A, H) : Ae(n.errors, A);
        }
      else n.errors = k;
      return k;
    },
    O = async (j, k, A = { valid: !0 }) => {
      for (const H in j) {
        const B = j[H];
        if (B) {
          const { _f: F, ...Y } = B;
          if (F) {
            const ae = a.array.has(F.name);
            w([H], !0);
            const Le = await nh(B, o, y, t.shouldUseNativeValidation && !k, ae);
            if ((w([H]), Le[F.name] && ((A.valid = !1), k))) break;
            !k &&
              (q(Le, F.name)
                ? ae
                  ? j_(n.errors, Le, F.name)
                  : he(n.errors, F.name, Le[F.name])
                : Ae(n.errors, F.name));
          }
          Y && (await O(Y, k, A));
        }
      }
      return A.valid;
    },
    M = () => {
      for (const j of a.unMount) {
        const k = q(r, j);
        k &&
          (k._f.refs ? k._f.refs.every((A) => !Vu(A)) : !Vu(k._f.ref)) &&
          De(j);
      }
      a.unMount = new Set();
    },
    T = (j, k) => (j && k && he(o, j, k), !br(G(), i)),
    I = (j, k, A) =>
      C_(j, a, { ...(s.mount ? o : Ce(k) ? i : cn(j) ? { [j]: k } : k) }, A, k),
    R = (j) => Xo(q(s.mount ? o : i, j, e.shouldUnregister ? q(i, j, []) : [])),
    $ = (j, k, A = {}) => {
      const H = q(r, j);
      let B = k;
      if (H) {
        const F = H._f;
        F &&
          (!F.disabled && he(o, j, Vv(k, F)),
          (B = Na(F.ref) && rt(k) ? "" : k),
          zv(F.ref)
            ? [...F.ref.options].forEach(
                (Y) => (Y.selected = B.includes(Y.value))
              )
            : F.refs
            ? qo(F.ref)
              ? F.refs.length > 1
                ? F.refs.forEach(
                    (Y) =>
                      (!Y.defaultChecked || !Y.disabled) &&
                      (Y.checked = Array.isArray(B)
                        ? !!B.find((ae) => ae === Y.value)
                        : B === Y.value)
                  )
                : F.refs[0] && (F.refs[0].checked = !!B)
              : F.refs.forEach((Y) => (Y.checked = Y.value === B))
            : Df(F.ref)
            ? (F.ref.value = "")
            : ((F.ref.value = B),
              F.ref.type || h.values.next({ name: j, values: { ...o } })));
      }
      (A.shouldDirty || A.shouldTouch) &&
        b(j, B, A.shouldTouch, A.shouldDirty, !0),
        A.shouldValidate && W(j);
    },
    z = (j, k, A) => {
      for (const H in k) {
        const B = k[H],
          F = `${j}.${H}`,
          Y = q(r, F);
        (a.array.has(j) || !Oa(B) || (Y && !Y._f)) && !oi(B)
          ? z(F, B, A)
          : $(F, B, A);
      }
    },
    U = (j, k, A = {}) => {
      const H = q(r, j),
        B = a.array.has(j),
        F = Dt(k);
      he(o, j, F),
        B
          ? (h.array.next({ name: j, values: { ...o } }),
            (f.isDirty || f.dirtyFields) &&
              A.shouldDirty &&
              h.state.next({
                name: j,
                dirtyFields: bs(i, o),
                isDirty: T(j, F),
              }))
          : H && !H._f && !rt(F)
          ? z(j, F, A)
          : $(j, F, A),
        Gm(j, a) && h.state.next({ ...n }),
        h.values.next({ name: s.mount ? j : void 0, values: { ...o } });
    },
    D = async (j) => {
      s.mount = !0;
      const k = j.target;
      let A = k.name,
        H = !0;
      const B = q(r, A),
        F = () => (k.type ? Wu(B._f) : x_(j)),
        Y = (ae) => {
          H = Number.isNaN(ae) || ae === q(o, A, ae);
        };
      if (B) {
        let ae, Le;
        const gt = F(),
          Lr = j.type === Ym.BLUR || j.type === Ym.FOCUS_OUT,
          V1 =
            (!D_(B._f) && !t.resolver && !q(n.errors, A) && !B._f.deps) ||
            A_(Lr, q(n.touchedFields, A), n.isSubmitted, S, p),
          du = Gm(A, a, Lr);
        he(o, A, gt),
          Lr
            ? (B._f.onBlur && B._f.onBlur(j), l && l(0))
            : B._f.onChange && B._f.onChange(j);
        const fu = b(A, gt, Lr, !1),
          W1 = !yt(fu) || du;
        if (
          (!Lr && h.values.next({ name: A, type: j.type, values: { ...o } }),
          V1)
        )
          return (
            f.isValid && E(), W1 && h.state.next({ name: A, ...(du ? {} : fu) })
          );
        if ((!Lr && du && h.state.next({ ...n }), t.resolver)) {
          const { errors: kp } = await P([A]);
          if ((Y(gt), H)) {
            const H1 = rh(n.errors, r, A),
              Op = rh(kp, r, H1.name || A);
            (ae = Op.error), (A = Op.name), (Le = yt(kp));
          }
        } else
          w([A], !0),
            (ae = (await nh(B, o, y, t.shouldUseNativeValidation))[A]),
            w([A]),
            Y(gt),
            H && (ae ? (Le = !1) : f.isValid && (Le = await O(r, !0)));
        H && (B._f.deps && W(B._f.deps), _(A, Le, ae, fu));
      }
    },
    V = (j, k) => {
      if (q(n.errors, k) && j.focus) return j.focus(), 1;
    },
    W = async (j, k = {}) => {
      let A, H;
      const B = Uu(j);
      if (t.resolver) {
        const F = await N(Ce(j) ? j : B);
        (A = yt(F)), (H = j ? !B.some((Y) => q(F, Y)) : A);
      } else
        j
          ? ((H = (
              await Promise.all(
                B.map(async (F) => {
                  const Y = q(r, F);
                  return await O(Y && Y._f ? { [F]: Y } : Y);
                })
              )
            ).every(Boolean)),
            !(!H && !n.isValid) && E())
          : (H = A = await O(r));
      return (
        h.state.next({
          ...(!cn(j) || (f.isValid && A !== n.isValid) ? {} : { name: j }),
          ...(t.resolver || !j ? { isValid: A } : {}),
          errors: n.errors,
        }),
        k.shouldFocus && !H && lo(r, V, j ? B : a.mount),
        H
      );
    },
    G = (j) => {
      const k = { ...i, ...(s.mount ? o : {}) };
      return Ce(j) ? k : cn(j) ? q(k, j) : j.map((A) => q(k, A));
    },
    J = (j, k) => ({
      invalid: !!q((k || n).errors, j),
      isDirty: !!q((k || n).dirtyFields, j),
      isTouched: !!q((k || n).touchedFields, j),
      isValidating: !!q((k || n).validatingFields, j),
      error: q((k || n).errors, j),
    }),
    se = (j) => {
      j && Uu(j).forEach((k) => Ae(n.errors, k)),
        h.state.next({ errors: j ? n.errors : {} });
    },
    Q = (j, k, A) => {
      const H = (q(r, j, { _f: {} })._f || {}).ref;
      he(n.errors, j, { ...k, ref: H }),
        h.state.next({ name: j, errors: n.errors, isValid: !1 }),
        A && A.shouldFocus && H && H.focus && H.focus();
    },
    Ye = (j, k) =>
      Xn(j)
        ? h.values.subscribe({ next: (A) => j(I(void 0, k), A) })
        : I(j, k, !0),
    De = (j, k = {}) => {
      for (const A of j ? Uu(j) : a.mount)
        a.mount.delete(A),
          a.array.delete(A),
          k.keepValue || (Ae(r, A), Ae(o, A)),
          !k.keepError && Ae(n.errors, A),
          !k.keepDirty && Ae(n.dirtyFields, A),
          !k.keepTouched && Ae(n.touchedFields, A),
          !k.keepIsValidating && Ae(n.validatingFields, A),
          !t.shouldUnregister && !k.keepDefaultValue && Ae(i, A);
      h.values.next({ values: { ...o } }),
        h.state.next({ ...n, ...(k.keepDirty ? { isDirty: T() } : {}) }),
        !k.keepIsValid && E();
    },
    ht = ({ disabled: j, name: k, field: A, fields: H, value: B }) => {
      if (wn(j)) {
        const F = j ? void 0 : Ce(B) ? Wu(A ? A._f : q(H, k)._f) : B;
        he(o, k, F), b(k, F, !1, !1, !0);
      }
    },
    Ai = (j, k = {}) => {
      let A = q(r, j);
      const H = wn(k.disabled);
      return (
        he(r, j, {
          ...(A || {}),
          _f: {
            ...(A && A._f ? A._f : { ref: { name: j } }),
            name: j,
            mount: !0,
            ...k,
          },
        }),
        a.mount.add(j),
        A
          ? ht({ field: A, disabled: k.disabled, name: j, value: k.value })
          : x(j, !0, k.value),
        {
          ...(H ? { disabled: k.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!k.required,
                min: Vi(k.min),
                max: Vi(k.max),
                minLength: Vi(k.minLength),
                maxLength: Vi(k.maxLength),
                pattern: Vi(k.pattern),
              }
            : {}),
          name: j,
          onChange: D,
          onBlur: D,
          ref: (B) => {
            if (B) {
              Ai(j, k), (A = q(r, j));
              const F =
                  (Ce(B.value) &&
                    B.querySelectorAll &&
                    B.querySelectorAll("input,select,textarea")[0]) ||
                  B,
                Y = O_(F),
                ae = A._f.refs || [];
              if (Y ? ae.find((Le) => Le === F) : F === A._f.ref) return;
              he(r, j, {
                _f: {
                  ...A._f,
                  ...(Y
                    ? {
                        refs: [
                          ...ae.filter(Vu),
                          F,
                          ...(Array.isArray(q(i, j)) ? [{}] : []),
                        ],
                        ref: { type: F.type, name: j },
                      }
                    : { ref: F }),
                },
              }),
                x(j, !1, void 0, F);
            } else
              (A = q(r, j, {})),
                A._f && (A._f.mount = !1),
                (t.shouldUnregister || k.shouldUnregister) &&
                  !(S_(a.array, j) && s.action) &&
                  a.unMount.add(j);
          },
        }
      );
    },
    Cp = () => t.shouldFocusError && lo(r, V, a.mount),
    U1 = (j) => {
      wn(j) &&
        (h.state.next({ disabled: j }),
        lo(
          r,
          (k, A) => {
            let H = j;
            const B = q(r, A);
            B && wn(B._f.disabled) && (H || (H = B._f.disabled)),
              (k.disabled = H);
          },
          0,
          !1
        ));
    },
    Tp = (j, k) => async (A) => {
      let H;
      A && (A.preventDefault && A.preventDefault(), A.persist && A.persist());
      let B = Dt(o);
      if ((h.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: F, values: Y } = await P();
        (n.errors = F), (B = Y);
      } else await O(r);
      if ((Ae(n.errors, "root"), yt(n.errors))) {
        h.state.next({ errors: {} });
        try {
          await j(B, A);
        } catch (F) {
          H = F;
        }
      } else k && (await k({ ...n.errors }, A)), Cp(), setTimeout(Cp);
      if (
        (h.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: yt(n.errors) && !H,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        H)
      )
        throw H;
    },
    B1 = (j, k = {}) => {
      q(r, j) &&
        (Ce(k.defaultValue)
          ? U(j, Dt(q(i, j)))
          : (U(j, k.defaultValue), he(i, j, Dt(k.defaultValue))),
        k.keepTouched || Ae(n.touchedFields, j),
        k.keepDirty ||
          (Ae(n.dirtyFields, j),
          (n.isDirty = k.defaultValue ? T(j, Dt(q(i, j))) : T())),
        k.keepError || (Ae(n.errors, j), f.isValid && E()),
        h.state.next({ ...n }));
    },
    jp = (j, k = {}) => {
      const A = j ? Dt(j) : i,
        H = Dt(A),
        B = yt(j),
        F = B ? i : H;
      if ((k.keepDefaultValues || (i = A), !k.keepValues)) {
        if (k.keepDirtyValues)
          for (const Y of a.mount)
            q(n.dirtyFields, Y) ? he(F, Y, q(o, Y)) : U(Y, q(F, Y));
        else {
          if (Of && Ce(j))
            for (const Y of a.mount) {
              const ae = q(r, Y);
              if (ae && ae._f) {
                const Le = Array.isArray(ae._f.refs)
                  ? ae._f.refs[0]
                  : ae._f.ref;
                if (Na(Le)) {
                  const gt = Le.closest("form");
                  if (gt) {
                    gt.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (o = e.shouldUnregister ? (k.keepDefaultValues ? Dt(i) : {}) : Dt(F)),
          h.array.next({ values: { ...F } }),
          h.values.next({ values: { ...F } });
      }
      (a = {
        mount: k.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (s.mount = !f.isValid || !!k.keepIsValid || !!k.keepDirtyValues),
        (s.watch = !!e.shouldUnregister),
        h.state.next({
          submitCount: k.keepSubmitCount ? n.submitCount : 0,
          isDirty: B
            ? !1
            : k.keepDirty
            ? n.isDirty
            : !!(k.keepDefaultValues && !br(j, i)),
          isSubmitted: k.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: B
            ? []
            : k.keepDirtyValues
            ? k.keepDefaultValues && o
              ? bs(i, o)
              : n.dirtyFields
            : k.keepDefaultValues && j
            ? bs(i, j)
            : {},
          touchedFields: k.keepTouched ? n.touchedFields : {},
          errors: k.keepErrors ? n.errors : {},
          isSubmitSuccessful: k.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Np = (j, k) => jp(Xn(j) ? j(o) : j, k);
  return {
    control: {
      register: Ai,
      unregister: De,
      getFieldState: J,
      handleSubmit: Tp,
      setError: Q,
      _executeSchema: P,
      _getWatch: I,
      _getDirty: T,
      _updateValid: E,
      _removeUnmounted: M,
      _updateFieldArray: m,
      _updateDisabledField: ht,
      _getFieldArray: R,
      _reset: jp,
      _resetDefaultValues: () =>
        Xn(t.defaultValues) &&
        t.defaultValues().then((j) => {
          Np(j, t.resetOptions), h.state.next({ isLoading: !1 });
        }),
      _updateFormState: (j) => {
        n = { ...n, ...j };
      },
      _disableForm: U1,
      _subjects: h,
      _proxyFormState: f,
      _setErrors: v,
      get _fields() {
        return r;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return s;
      },
      set _state(j) {
        s = j;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return a;
      },
      set _names(j) {
        a = j;
      },
      get _formState() {
        return n;
      },
      set _formState(j) {
        n = j;
      },
      get _options() {
        return t;
      },
      set _options(j) {
        t = { ...t, ...j };
      },
    },
    trigger: W,
    register: Ai,
    handleSubmit: Tp,
    watch: Ye,
    setValue: U,
    getValues: G,
    reset: Np,
    resetField: B1,
    clearErrors: se,
    unregister: De,
    setError: Q,
    setFocus: (j, k = {}) => {
      const A = q(r, j),
        H = A && A._f;
      if (H) {
        const B = H.refs ? H.refs[0] : H.ref;
        B.focus && (B.focus(), k.shouldSelect && B.select());
      }
    },
    getFieldState: J,
  };
}
function Rf(e = {}) {
  const t = X.useRef(),
    n = X.useRef(),
    [r, i] = X.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Xn(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Xn(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...$_(e), formState: r });
  const o = t.current.control;
  return (
    (o._options = e),
    P_({
      subject: o._subjects.state,
      next: (s) => {
        E_(s, o._proxyFormState, o._updateFormState, !0) &&
          i({ ...o._formState });
      },
    }),
    X.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    X.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const s = o._getDirty();
        s !== r.isDirty && o._subjects.state.next({ isDirty: s });
      }
    }, [o, r.isDirty]),
    X.useEffect(() => {
      e.values && !br(e.values, n.current)
        ? (o._reset(e.values, o._options.resetOptions),
          (n.current = e.values),
          i((s) => ({ ...s })))
        : o._resetDefaultValues();
    }, [e.values, o]),
    X.useEffect(() => {
      e.errors && o._setErrors(e.errors);
    }, [e.errors, o]),
    X.useEffect(() => {
      o._state.mount || (o._updateValid(), (o._state.mount = !0)),
        o._state.watch &&
          ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted();
    }),
    X.useEffect(() => {
      e.shouldUnregister && o._subjects.values.next({ values: o._getWatch() });
    }, [e.shouldUnregister, o]),
    (t.current.formState = b_(r, o)),
    t.current
  );
}
function Be(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var L_ = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  ih = L_,
  Hu = () => Math.random().toString(36).substring(7).split("").join("."),
  F_ = {
    INIT: `@@redux/INIT${Hu()}`,
    REPLACE: `@@redux/REPLACE${Hu()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Hu()}`,
  },
  Da = F_;
function Mf(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Wv(e, t, n) {
  if (typeof e != "function") throw new Error(Be(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Be(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Be(1));
    return n(Wv)(e, t);
  }
  let r = e,
    i = t,
    o = new Map(),
    s = o,
    a = 0,
    l = !1;
  function u() {
    s === o &&
      ((s = new Map()),
      o.forEach((E, w) => {
        s.set(w, E);
      }));
  }
  function f() {
    if (l) throw new Error(Be(3));
    return i;
  }
  function h(E) {
    if (typeof E != "function") throw new Error(Be(4));
    if (l) throw new Error(Be(5));
    let w = !0;
    u();
    const m = a++;
    return (
      s.set(m, E),
      function () {
        if (w) {
          if (l) throw new Error(Be(6));
          (w = !1), u(), s.delete(m), (o = null);
        }
      }
    );
  }
  function p(E) {
    if (!Mf(E)) throw new Error(Be(7));
    if (typeof E.type > "u") throw new Error(Be(8));
    if (typeof E.type != "string") throw new Error(Be(17));
    if (l) throw new Error(Be(9));
    try {
      (l = !0), (i = r(i, E));
    } finally {
      l = !1;
    }
    return (
      (o = s).forEach((m) => {
        m();
      }),
      E
    );
  }
  function S(E) {
    if (typeof E != "function") throw new Error(Be(10));
    (r = E), p({ type: Da.REPLACE });
  }
  function y() {
    const E = h;
    return {
      subscribe(w) {
        if (typeof w != "object" || w === null) throw new Error(Be(11));
        function m() {
          const v = w;
          v.next && v.next(f());
        }
        return m(), { unsubscribe: E(m) };
      },
      [ih]() {
        return this;
      },
    };
  }
  return (
    p({ type: Da.INIT }),
    { dispatch: p, subscribe: h, getState: f, replaceReducer: S, [ih]: y }
  );
}
function z_(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Da.INIT }) > "u") throw new Error(Be(12));
    if (typeof n(void 0, { type: Da.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Be(13));
  });
}
function U_(e) {
  const t = Object.keys(e),
    n = {};
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  try {
    z_(n);
  } catch (o) {
    i = o;
  }
  return function (s = {}, a) {
    if (i) throw i;
    let l = !1;
    const u = {};
    for (let f = 0; f < r.length; f++) {
      const h = r[f],
        p = n[h],
        S = s[h],
        y = p(S, a);
      if (typeof y > "u") throw (a && a.type, new Error(Be(14)));
      (u[h] = y), (l = l || y !== S);
    }
    return (l = l || r.length !== Object.keys(s).length), l ? u : s;
  };
}
function Aa(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function B_(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(Be(15));
    };
    const s = { getState: i.getState, dispatch: (l, ...u) => o(l, ...u) },
      a = e.map((l) => l(s));
    return (o = Aa(...a)(i.dispatch)), { ...i, dispatch: o };
  };
}
function V_(e) {
  return Mf(e) && "type" in e && typeof e.type == "string";
}
var Hv = Symbol.for("immer-nothing"),
  oh = Symbol.for("immer-draftable"),
  jt = Symbol.for("immer-state");
function Jt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Si = Object.getPrototypeOf;
function lr(e) {
  return !!e && !!e[jt];
}
function kn(e) {
  var t;
  return e
    ? Kv(e) ||
        Array.isArray(e) ||
        !!e[oh] ||
        !!((t = e.constructor) != null && t[oh]) ||
        ll(e) ||
        ul(e)
    : !1;
}
var W_ = Object.prototype.constructor.toString();
function Kv(e) {
  if (!e || typeof e != "object") return !1;
  const t = Si(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === W_;
}
function Ra(e, t) {
  al(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function al(e) {
  const t = e[jt];
  return t ? t.type_ : Array.isArray(e) ? 1 : ll(e) ? 2 : ul(e) ? 3 : 0;
}
function od(e, t) {
  return al(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function qv(e, t, n) {
  const r = al(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function H_(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ll(e) {
  return e instanceof Map;
}
function ul(e) {
  return e instanceof Set;
}
function xr(e) {
  return e.copy_ || e.base_;
}
function sd(e, t) {
  if (ll(e)) return new Map(e);
  if (ul(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && Kv(e))
    return Si(e) ? { ...e } : Object.assign(Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[jt];
  let r = Reflect.ownKeys(n);
  for (let i = 0; i < r.length; i++) {
    const o = r[i],
      s = n[o];
    s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
      (s.get || s.set) &&
        (n[o] = {
          configurable: !0,
          writable: !0,
          enumerable: s.enumerable,
          value: e[o],
        });
  }
  return Object.create(Si(e), n);
}
function $f(e, t = !1) {
  return (
    cl(e) ||
      lr(e) ||
      !kn(e) ||
      (al(e) > 1 && (e.set = e.add = e.clear = e.delete = K_),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => $f(r, !0))),
    e
  );
}
function K_() {
  Jt(2);
}
function cl(e) {
  return Object.isFrozen(e);
}
var q_ = {};
function Ar(e) {
  const t = q_[e];
  return t || Jt(0, e), t;
}
var Io;
function Xv() {
  return Io;
}
function X_(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function sh(e, t) {
  t &&
    (Ar("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function ad(e) {
  ld(e), e.drafts_.forEach(Y_), (e.drafts_ = null);
}
function ld(e) {
  e === Io && (Io = e.parent_);
}
function ah(e) {
  return (Io = X_(Io, e));
}
function Y_(e) {
  const t = e[jt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function lh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[jt].modified_ && (ad(t), Jt(4)),
        kn(e) && ((e = Ma(t, e)), t.parent_ || $a(t, e)),
        t.patches_ &&
          Ar("Patches").generateReplacementPatches_(
            n[jt].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Ma(t, n, [])),
    ad(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Hv ? e : void 0
  );
}
function Ma(e, t, n) {
  if (cl(t)) return t;
  const r = t[jt];
  if (!r) return Ra(t, (i, o) => uh(e, r, t, i, o, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return $a(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i,
      s = !1;
    r.type_ === 3 && ((o = new Set(i)), i.clear(), (s = !0)),
      Ra(o, (a, l) => uh(e, r, i, a, l, n, s)),
      $a(e, i, !1),
      n &&
        e.patches_ &&
        Ar("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function uh(e, t, n, r, i, o, s) {
  if (lr(i)) {
    const a =
        o && t && t.type_ !== 3 && !od(t.assigned_, r) ? o.concat(r) : void 0,
      l = Ma(e, i, a);
    if ((qv(n, r, l), lr(l))) e.canAutoFreeze_ = !1;
    else return;
  } else s && n.add(i);
  if (kn(i) && !cl(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Ma(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        $a(e, i);
  }
}
function $a(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && $f(t, n);
}
function Q_(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Xv(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    o = Lf;
  n && ((i = [r]), (o = Do));
  const { revoke: s, proxy: a } = Proxy.revocable(i, o);
  return (r.draft_ = a), (r.revoke_ = s), a;
}
var Lf = {
    get(e, t) {
      if (t === jt) return e;
      const n = xr(e);
      if (!od(n, t)) return G_(e, n, t);
      const r = n[t];
      return e.finalized_ || !kn(r)
        ? r
        : r === Ku(e.base_, t)
        ? (qu(e), (e.copy_[t] = cd(r, e)))
        : r;
    },
    has(e, t) {
      return t in xr(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(xr(e));
    },
    set(e, t, n) {
      const r = Yv(xr(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = Ku(xr(e), t),
          o = i == null ? void 0 : i[jt];
        if (o && o.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (H_(n, i) && (n !== void 0 || od(e.base_, t))) return !0;
        qu(e), ud(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Ku(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), qu(e), ud(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = xr(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Jt(11);
    },
    getPrototypeOf(e) {
      return Si(e.base_);
    },
    setPrototypeOf() {
      Jt(12);
    },
  },
  Do = {};
Ra(Lf, (e, t) => {
  Do[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Do.deleteProperty = function (e, t) {
  return Do.set.call(this, e, t, void 0);
};
Do.set = function (e, t, n) {
  return Lf.set.call(this, e[0], t, n, e[0]);
};
function Ku(e, t) {
  const n = e[jt];
  return (n ? xr(n) : e)[t];
}
function G_(e, t, n) {
  var i;
  const r = Yv(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function Yv(e, t) {
  if (!(t in e)) return;
  let n = Si(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Si(n);
  }
}
function ud(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ud(e.parent_));
}
function qu(e) {
  e.copy_ || (e.copy_ = sd(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var J_ = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const o = n;
          n = t;
          const s = this;
          return function (l = o, ...u) {
            return s.produce(l, (f) => n.call(this, f, ...u));
          };
        }
        typeof n != "function" && Jt(6),
          r !== void 0 && typeof r != "function" && Jt(7);
        let i;
        if (kn(t)) {
          const o = ah(this),
            s = cd(t, void 0);
          let a = !0;
          try {
            (i = n(s)), (a = !1);
          } finally {
            a ? ad(o) : ld(o);
          }
          return sh(o, r), lh(i, o);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === Hv && (i = void 0),
            this.autoFreeze_ && $f(i, !0),
            r)
          ) {
            const o = [],
              s = [];
            Ar("Patches").generateReplacementPatches_(t, i, o, s), r(o, s);
          }
          return i;
        } else Jt(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
        let r, i;
        return [
          this.produce(t, n, (s, a) => {
            (r = s), (i = a);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    kn(e) || Jt(8), lr(e) && (e = Qv(e));
    const t = ah(this),
      n = cd(e, void 0);
    return (n[jt].isManual_ = !0), ld(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[jt];
    (!n || !n.isManual_) && Jt(9);
    const { scope_: r } = n;
    return sh(r, t), lh(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Ar("Patches").applyPatches_;
    return lr(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function cd(e, t) {
  const n = ll(e)
    ? Ar("MapSet").proxyMap_(e, t)
    : ul(e)
    ? Ar("MapSet").proxySet_(e, t)
    : Q_(e, t);
  return (t ? t.scope_ : Xv()).drafts_.push(n), n;
}
function Qv(e) {
  return lr(e) || Jt(10, e), Gv(e);
}
function Gv(e) {
  if (!kn(e) || cl(e)) return e;
  const t = e[jt];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = sd(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = sd(e, !0);
  return (
    Ra(n, (r, i) => {
      qv(n, r, Gv(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var Nt = new J_(),
  Jv = Nt.produce;
Nt.produceWithPatches.bind(Nt);
Nt.setAutoFreeze.bind(Nt);
Nt.setUseStrictShallowCopy.bind(Nt);
Nt.applyPatches.bind(Nt);
Nt.createDraft.bind(Nt);
Nt.finishDraft.bind(Nt);
function Z_(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function eb(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function tb(
  e,
  t = "expected all items to be functions, instead received the following types: "
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var ch = (e) => (Array.isArray(e) ? e : [e]);
function nb(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    tb(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    t
  );
}
function rb(e, t) {
  const n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var ib = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  ob = typeof WeakRef < "u" ? WeakRef : ib,
  sb = 0,
  dh = 1;
function Es() {
  return { s: sb, v: void 0, o: null, p: null };
}
function Ff(e, t = {}) {
  let n = Es();
  const { resultEqualityCheck: r } = t;
  let i,
    o = 0;
  function s() {
    var h;
    let a = n;
    const { length: l } = arguments;
    for (let p = 0, S = l; p < S; p++) {
      const y = arguments[p];
      if (typeof y == "function" || (typeof y == "object" && y !== null)) {
        let g = a.o;
        g === null && (a.o = g = new WeakMap());
        const E = g.get(y);
        E === void 0 ? ((a = Es()), g.set(y, a)) : (a = E);
      } else {
        let g = a.p;
        g === null && (a.p = g = new Map());
        const E = g.get(y);
        E === void 0 ? ((a = Es()), g.set(y, a)) : (a = E);
      }
    }
    const u = a;
    let f;
    if (
      (a.s === dh ? (f = a.v) : ((f = e.apply(null, arguments)), o++),
      (u.s = dh),
      r)
    ) {
      const p =
        ((h = i == null ? void 0 : i.deref) == null ? void 0 : h.call(i)) ?? i;
      p != null && r(p, f) && ((f = p), o !== 0 && o--),
        (i =
          (typeof f == "object" && f !== null) || typeof f == "function"
            ? new ob(f)
            : f);
    }
    return (u.v = f), f;
  }
  return (
    (s.clearCache = () => {
      (n = Es()), s.resetResultsCount();
    }),
    (s.resultsCount = () => o),
    (s.resetResultsCount = () => {
      o = 0;
    }),
    s
  );
}
function Zv(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let o = 0,
        s = 0,
        a,
        l = {},
        u = i.pop();
      typeof u == "object" && ((l = u), (u = i.pop())),
        Z_(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`
        );
      const f = { ...n, ...l },
        {
          memoize: h,
          memoizeOptions: p = [],
          argsMemoize: S = Ff,
          argsMemoizeOptions: y = [],
          devModeChecks: g = {},
        } = f,
        E = ch(p),
        w = ch(y),
        m = nb(i),
        d = h(function () {
          return o++, u.apply(null, arguments);
        }, ...E),
        v = S(function () {
          s++;
          const b = rb(m, arguments);
          return (a = d.apply(null, b)), a;
        }, ...w);
      return Object.assign(v, {
        resultFunc: u,
        memoizedResultFunc: d,
        dependencies: m,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => a,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0;
        },
        memoize: h,
        argsMemoize: S,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var ab = Zv(Ff),
  lb = Object.assign(
    (e, t = ab) => {
      eb(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const n = Object.keys(e),
        r = n.map((o) => e[o]);
      return t(r, (...o) => o.reduce((s, a, l) => ((s[n[l]] = a), s), {}));
    },
    { withTypes: () => lb }
  );
function ey(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (o) =>
      typeof o == "function" ? o(n, r, e) : i(o);
}
var ub = ey(),
  cb = ey,
  db = (...e) => {
    const t = Zv(...e),
      n = Object.assign(
        (...r) => {
          const i = t(...r),
            o = (s, ...a) => i(lr(s) ? Qv(s) : s, ...a);
          return Object.assign(o, i), o;
        },
        { withTypes: () => n }
      );
    return n;
  };
db(Ff);
var fb =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Aa
              : Aa.apply(null, arguments);
        },
  pb = (e) => e && typeof e.match == "function";
function Pn(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(pt(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => V_(r) && r.type === e),
    n
  );
}
var ty = class Ji extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ji.prototype);
  }
  static get [Symbol.species]() {
    return Ji;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Ji(...t[0].concat(this))
      : new Ji(...t.concat(this));
  }
};
function fh(e) {
  return kn(e) ? Jv(e, () => {}) : e;
}
function ph(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(pt(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function mb(e) {
  return typeof e == "boolean";
}
var hb = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let s = new ty();
      return n && (mb(n) ? s.push(ub) : s.push(cb(n.extraArgument))), s;
    },
  gb = "RTK_autoBatch",
  ny = (e) => (t) => {
    setTimeout(t, e);
  },
  vb =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : ny(10),
  yb =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        o = !1,
        s = !1;
      const a = new Set(),
        l =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? vb
            : e.type === "callback"
            ? e.queueNotification
            : ny(e.timeout),
        u = () => {
          (s = !1), o && ((o = !1), a.forEach((f) => f()));
        };
      return Object.assign({}, r, {
        subscribe(f) {
          const h = () => i && f(),
            p = r.subscribe(h);
          return (
            a.add(f),
            () => {
              p(), a.delete(f);
            }
          );
        },
        dispatch(f) {
          var h;
          try {
            return (
              (i = !((h = f == null ? void 0 : f.meta) != null && h[gb])),
              (o = !i),
              o && (s || ((s = !0), l(u))),
              r.dispatch(f)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  xb = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new ty(e);
      return r && i.push(yb(typeof r == "object" ? r : void 0)), i;
    },
  wb = !0;
function Sb(e) {
  const t = hb(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: o = void 0,
      enhancers: s = void 0,
    } = e || {};
  let a;
  if (typeof n == "function") a = n;
  else if (Mf(n)) a = U_(n);
  else throw new Error(pt(1));
  let l;
  typeof r == "function" ? (l = r(t)) : (l = t());
  let u = Aa;
  i && (u = fb({ trace: !wb, ...(typeof i == "object" && i) }));
  const f = B_(...l),
    h = xb(f);
  let p = typeof s == "function" ? s(h) : h();
  const S = u(...p);
  return Wv(a, o, S);
}
function ry(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(o, s) {
      const a = typeof o == "string" ? o : o.type;
      if (!a) throw new Error(pt(28));
      if (a in t) throw new Error(pt(29));
      return (t[a] = s), i;
    },
    addMatcher(o, s) {
      return n.push({ matcher: o, reducer: s }), i;
    },
    addDefaultCase(o) {
      return (r = o), i;
    },
  };
  return e(i), [t, n, r];
}
function _b(e) {
  return typeof e == "function";
}
function bb(e, t) {
  let [n, r, i] = ry(t),
    o;
  if (_b(e)) o = () => fh(e());
  else {
    const a = fh(e);
    o = () => a;
  }
  function s(a = o(), l) {
    let u = [
      n[l.type],
      ...r.filter(({ matcher: f }) => f(l)).map(({ reducer: f }) => f),
    ];
    return (
      u.filter((f) => !!f).length === 0 && (u = [i]),
      u.reduce((f, h) => {
        if (h)
          if (lr(f)) {
            const S = h(f, l);
            return S === void 0 ? f : S;
          } else {
            if (kn(f)) return Jv(f, (p) => h(p, l));
            {
              const p = h(f, l);
              if (p === void 0) {
                if (f === null) return f;
                throw new Error(pt(9));
              }
              return p;
            }
          }
        return f;
      }, a)
    );
  }
  return (s.getInitialState = o), s;
}
var Eb = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  iy = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += Eb[(Math.random() * 64) | 0];
    return t;
  },
  Pb = (e, t) => (pb(e) ? e.match(t) : e(t));
function Cb(...e) {
  return (t) => e.some((n) => Pb(n, t));
}
var Tb = ["name", "message", "stack", "code"],
  Xu = class {
    constructor(e, t) {
      pu(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  mh = class {
    constructor(e, t) {
      pu(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  jb = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of Tb) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  rn = (() => {
    function e(t, n, r) {
      const i = Pn(t + "/fulfilled", (l, u, f, h) => ({
          payload: l,
          meta: {
            ...(h || {}),
            arg: f,
            requestId: u,
            requestStatus: "fulfilled",
          },
        })),
        o = Pn(t + "/pending", (l, u, f) => ({
          payload: void 0,
          meta: {
            ...(f || {}),
            arg: u,
            requestId: l,
            requestStatus: "pending",
          },
        })),
        s = Pn(t + "/rejected", (l, u, f, h, p) => ({
          payload: h,
          error: ((r && r.serializeError) || jb)(l || "Rejected"),
          meta: {
            ...(p || {}),
            arg: f,
            requestId: u,
            rejectedWithValue: !!h,
            requestStatus: "rejected",
            aborted: (l == null ? void 0 : l.name) === "AbortError",
            condition: (l == null ? void 0 : l.name) === "ConditionError",
          },
        }));
      function a(l) {
        return (u, f, h) => {
          const p = r != null && r.idGenerator ? r.idGenerator(l) : iy(),
            S = new AbortController();
          let y, g;
          function E(m) {
            (g = m), S.abort();
          }
          const w = (async function () {
            var v, x;
            let m;
            try {
              let b =
                (v = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : v.call(r, l, { getState: f, extra: h });
              if ((kb(b) && (b = await b), b === !1 || S.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const _ = new Promise((P, N) => {
                (y = () => {
                  N({ name: "AbortError", message: g || "Aborted" });
                }),
                  S.signal.addEventListener("abort", y);
              });
              u(
                o(
                  p,
                  l,
                  (x = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : x.call(
                        r,
                        { requestId: p, arg: l },
                        { getState: f, extra: h }
                      )
                )
              ),
                (m = await Promise.race([
                  _,
                  Promise.resolve(
                    n(l, {
                      dispatch: u,
                      getState: f,
                      extra: h,
                      requestId: p,
                      signal: S.signal,
                      abort: E,
                      rejectWithValue: (P, N) => new Xu(P, N),
                      fulfillWithValue: (P, N) => new mh(P, N),
                    })
                  ).then((P) => {
                    if (P instanceof Xu) throw P;
                    return P instanceof mh
                      ? i(P.payload, p, l, P.meta)
                      : i(P, p, l);
                  }),
                ]));
            } catch (b) {
              m =
                b instanceof Xu ? s(null, p, l, b.payload, b.meta) : s(b, p, l);
            } finally {
              y && S.signal.removeEventListener("abort", y);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                s.match(m) &&
                m.meta.condition) ||
                u(m),
              m
            );
          })();
          return Object.assign(w, {
            abort: E,
            requestId: p,
            arg: l,
            unwrap() {
              return w.then(Nb);
            },
          });
        };
      }
      return Object.assign(a, {
        pending: o,
        rejected: s,
        fulfilled: i,
        settled: Cb(s, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function Nb(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function kb(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Ob = Symbol.for("rtk-slice-createasyncthunk");
function Ib(e, t) {
  return `${e}/${t}`;
}
function Db({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Ob];
  return function (i) {
    const { name: o, reducerPath: s = o } = i;
    if (!o) throw new Error(pt(11));
    typeof process < "u";
    const a =
        (typeof i.reducers == "function" ? i.reducers(Rb()) : i.reducers) || {},
      l = Object.keys(a),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      f = {
        addCase(d, v) {
          const x = typeof d == "string" ? d : d.type;
          if (!x) throw new Error(pt(12));
          if (x in u.sliceCaseReducersByType) throw new Error(pt(13));
          return (u.sliceCaseReducersByType[x] = v), f;
        },
        addMatcher(d, v) {
          return u.sliceMatchers.push({ matcher: d, reducer: v }), f;
        },
        exposeAction(d, v) {
          return (u.actionCreators[d] = v), f;
        },
        exposeCaseReducer(d, v) {
          return (u.sliceCaseReducersByName[d] = v), f;
        },
      };
    l.forEach((d) => {
      const v = a[d],
        x = {
          reducerName: d,
          type: Ib(o, d),
          createNotation: typeof i.reducers == "function",
        };
      $b(v) ? Fb(x, v, f, t) : Mb(x, v, f);
    });
    function h() {
      const [d = {}, v = [], x = void 0] =
          typeof i.extraReducers == "function"
            ? ry(i.extraReducers)
            : [i.extraReducers],
        b = { ...d, ...u.sliceCaseReducersByType };
      return bb(i.initialState, (_) => {
        for (let P in b) _.addCase(P, b[P]);
        for (let P of u.sliceMatchers) _.addMatcher(P.matcher, P.reducer);
        for (let P of v) _.addMatcher(P.matcher, P.reducer);
        x && _.addDefaultCase(x);
      });
    }
    const p = (d) => d,
      S = new Map();
    let y;
    function g(d, v) {
      return y || (y = h()), y(d, v);
    }
    function E() {
      return y || (y = h()), y.getInitialState();
    }
    function w(d, v = !1) {
      function x(_) {
        let P = _[d];
        return typeof P > "u" && v && (P = E()), P;
      }
      function b(_ = p) {
        const P = ph(S, v, { insert: () => new WeakMap() });
        return ph(P, _, {
          insert: () => {
            const N = {};
            for (const [O, M] of Object.entries(i.selectors ?? {}))
              N[O] = Ab(M, _, E, v);
            return N;
          },
        });
      }
      return {
        reducerPath: d,
        getSelectors: b,
        get selectors() {
          return b(x);
        },
        selectSlice: x,
      };
    }
    const m = {
      name: o,
      reducer: g,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: E,
      ...w(s),
      injectInto(d, { reducerPath: v, ...x } = {}) {
        const b = v ?? s;
        return (
          d.inject({ reducerPath: b, reducer: g }, x), { ...m, ...w(b, !0) }
        );
      },
    };
    return m;
  };
}
function Ab(e, t, n, r) {
  function i(o, ...s) {
    let a = t(o);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return (i.unwrapped = e), i;
}
var Yo = Db();
function Rb() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function Mb({ type: e, reducerName: t, createNotation: n }, r, i) {
  let o, s;
  if ("reducer" in r) {
    if (n && !Lb(r)) throw new Error(pt(17));
    (o = r.reducer), (s = r.prepare);
  } else o = r;
  i.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, s ? Pn(e, s) : Pn(e));
}
function $b(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Lb(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Fb({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(pt(18));
  const {
      payloadCreator: o,
      fulfilled: s,
      pending: a,
      rejected: l,
      settled: u,
      options: f,
    } = n,
    h = i(e, o, f);
  r.exposeAction(t, h),
    s && r.addCase(h.fulfilled, s),
    a && r.addCase(h.pending, a),
    l && r.addCase(h.rejected, l),
    u && r.addMatcher(h.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: s || Ps,
      pending: a || Ps,
      rejected: l || Ps,
      settled: u || Ps,
    });
}
function Ps() {}
var zb = (e, t) => {
    if (typeof e != "function") throw new Error(pt(32));
  },
  zf = "listenerMiddleware",
  Ub = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: o } = e;
    if (t) i = Pn(t).match;
    else if (n) (t = n.type), (i = n.match);
    else if (r) i = r;
    else if (!i) throw new Error(pt(21));
    return zb(o), { predicate: i, type: t, effect: o };
  },
  Bb = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = Ub(e);
      return {
        id: iy(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(pt(22));
        },
      };
    },
    { withTypes: () => Bb }
  ),
  Vb = Object.assign(Pn(`${zf}/add`), { withTypes: () => Vb });
Pn(`${zf}/removeAll`);
var Wb = Object.assign(Pn(`${zf}/remove`), { withTypes: () => Wb });
function pt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
function Hb(e) {
  return new Promise(async (t, n) => {
    const i = await (
      await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(e),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
    ).json();
    i.success == !0
      ? (t(i.user), localStorage.setItem("user", JSON.stringify(i.user)))
      : n(i.message);
  });
}
function Kb(e) {
  return new Promise(async (t, n) => {
    try {
      const i = await (
        await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(e),
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        })
      ).json();
      i.success == !0
        ? (t(i.user), localStorage.setItem("user", JSON.stringify(i.user)))
        : n(i.message);
    } catch (r) {
      n(r);
    }
  });
}
function qb(e, t) {
  return new Promise(async (n, r) => {
    const o = await (
      await fetch("/api/user/addaddress", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(e, t),
        headers: { "Content-Type": "application/json" },
      })
    ).json();
    o.success == !0 ? n(o.user) : r(o.message);
  });
}
const Xb = { status: "idle", user: null, error: null },
  qs = rn("user/createUser", async (e) => await Hb(e)),
  Xs = rn("user/loginUser", async (e) => await Kb(e)),
  dd = rn("user/adduseraddress", async (e, t) => await qb(e, t)),
  oy = Yo({
    name: "user",
    initialState: Xb,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(qs.pending, (t) => {
        (t.status = "loading"), (t.error = null);
      })
        .addCase(qs.fulfilled, (t, n) => {
          (t.status = "idle"), (t.error = null), (t.user = n.payload);
        })
        .addCase(qs.rejected, (t, n) => {
          (t.status = "idle"), (t.error = n.error);
        })
        .addCase(Xs.pending, (t) => {
          t.status = "loading";
        })
        .addCase(Xs.fulfilled, (t, n) => {
          (t.status = "idle"), (t.user = n.payload);
        })
        .addCase(Xs.rejected, (t, n) => {
          (t.status = "idle"), (t.error = n.error);
        })
        .addCase(dd.pending, (t, n) => {
          t.status = "loading";
        })
        .addCase(dd.fulfilled, (t, n) => {
          (t.status = "success"), (t.user = n.payload);
        });
    },
  }),
  dl = (e) => e.auth.user,
  sy = (e) => e.auth.error;
oy.actions;
const Yb = oy.reducer;
var ay = { exports: {} },
  ly = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qo = C;
function Qb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Gb = typeof Object.is == "function" ? Object.is : Qb,
  Jb = Qo.useSyncExternalStore,
  Zb = Qo.useRef,
  eE = Qo.useEffect,
  tE = Qo.useMemo,
  nE = Qo.useDebugValue;
ly.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = Zb(null);
  if (o.current === null) {
    var s = { hasValue: !1, value: null };
    o.current = s;
  } else s = o.current;
  o = tE(
    function () {
      function l(S) {
        if (!u) {
          if (((u = !0), (f = S), (S = r(S)), i !== void 0 && s.hasValue)) {
            var y = s.value;
            if (i(y, S)) return (h = y);
          }
          return (h = S);
        }
        if (((y = h), Gb(f, S))) return y;
        var g = r(S);
        return i !== void 0 && i(y, g) ? y : ((f = S), (h = g));
      }
      var u = !1,
        f,
        h,
        p = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        p === null
          ? void 0
          : function () {
              return l(p());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = Jb(e, o[0], o[1]);
  return (
    eE(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    nE(a),
    a
  );
};
ay.exports = ly;
var rE = ay.exports,
  bt = "default" in jr ? X : jr,
  hh = Symbol.for("react-redux-context"),
  gh = typeof globalThis < "u" ? globalThis : {};
function iE() {
  if (!bt.createContext) return {};
  const e = gh[hh] ?? (gh[hh] = new Map());
  let t = e.get(bt.createContext);
  return t || ((t = bt.createContext(null)), e.set(bt.createContext, t)), t;
}
var ur = iE(),
  oE = () => {
    throw new Error("uSES not initialized!");
  };
function Uf(e = ur) {
  return function () {
    return bt.useContext(e);
  };
}
var uy = Uf(),
  cy = oE,
  sE = (e) => {
    cy = e;
  },
  aE = (e, t) => e === t;
function lE(e = ur) {
  const t = e === ur ? uy : Uf(e),
    n = (r, i = {}) => {
      const { equalityFn: o = aE, devModeChecks: s = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: a,
          subscription: l,
          getServerState: u,
          stabilityCheck: f,
          identityFunctionCheck: h,
        } = t();
      bt.useRef(!0);
      const p = bt.useCallback(
          {
            [r.name](y) {
              return r(y);
            },
          }[r.name],
          [r, f, s.stabilityCheck]
        ),
        S = cy(l.addNestedSub, a.getState, u || a.getState, p, o);
      return bt.useDebugValue(S), S;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var de = lE();
function uE(e) {
  e();
}
function cE() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      uE(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var vh = { notify() {}, get: () => [] };
function dE(e, t) {
  let n,
    r = vh,
    i = 0,
    o = !1;
  function s(g) {
    f();
    const E = r.subscribe(g);
    let w = !1;
    return () => {
      w || ((w = !0), E(), h());
    };
  }
  function a() {
    r.notify();
  }
  function l() {
    y.onStateChange && y.onStateChange();
  }
  function u() {
    return o;
  }
  function f() {
    i++, n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = cE()));
  }
  function h() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = vh));
  }
  function p() {
    o || ((o = !0), f());
  }
  function S() {
    o && ((o = !1), h());
  }
  const y = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: p,
    tryUnsubscribe: S,
    getListeners: () => r,
  };
  return y;
}
var fE =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  pE = typeof navigator < "u" && navigator.product === "ReactNative",
  mE = fE || pE ? bt.useLayoutEffect : bt.useEffect;
function hE({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once",
}) {
  const s = bt.useMemo(() => {
      const u = dE(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: o,
      };
    }, [e, r, i, o]),
    a = bt.useMemo(() => e.getState(), [e]);
  mE(() => {
    const { subscription: u } = s;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [s, a]);
  const l = t || ur;
  return bt.createElement(l.Provider, { value: s }, n);
}
var gE = hE;
function dy(e = ur) {
  const t = e === ur ? uy : Uf(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var vE = dy();
function yE(e = ur) {
  const t = e === ur ? vE : dy(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var hr = yE();
sE(rE.useSyncExternalStoreWithSelector);
function fy(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = fy(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function bn() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = fy(e)) && (r && (r += " "), (r += t));
  return r;
}
const Ao = (e) => typeof e == "number" && !isNaN(e),
  Cr = (e) => typeof e == "string",
  Et = (e) => typeof e == "function",
  Ys = (e) => (Cr(e) || Et(e) ? e : null),
  fd = (e) => C.isValidElement(e) || Cr(e) || Et(e) || Ao(e);
function xE(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = r + "px"),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
      });
  });
}
function fl(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: o = 300,
  } = e;
  return function (s) {
    let {
      children: a,
      position: l,
      preventExitTransition: u,
      done: f,
      nodeRef: h,
      isIn: p,
      playToast: S,
    } = s;
    const y = r ? `${t}--${l}` : t,
      g = r ? `${n}--${l}` : n,
      E = C.useRef(0);
    return (
      C.useLayoutEffect(() => {
        const w = h.current,
          m = y.split(" "),
          d = (v) => {
            v.target === h.current &&
              (S(),
              w.removeEventListener("animationend", d),
              w.removeEventListener("animationcancel", d),
              E.current === 0 &&
                v.type !== "animationcancel" &&
                w.classList.remove(...m));
          };
        w.classList.add(...m),
          w.addEventListener("animationend", d),
          w.addEventListener("animationcancel", d);
      }, []),
      C.useEffect(() => {
        const w = h.current,
          m = () => {
            w.removeEventListener("animationend", m), i ? xE(w, f, o) : f();
          };
        p ||
          (u
            ? m()
            : ((E.current = 1),
              (w.className += ` ${g}`),
              w.addEventListener("animationend", m)));
      }, [p]),
      X.createElement(X.Fragment, null, a)
    );
  };
}
function yh(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const it = new Map();
let Ro = [];
const pd = new Set(),
  wE = (e) => pd.forEach((t) => t(e)),
  py = () => it.size > 0;
function my(e, t) {
  var n;
  if (t) return !((n = it.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return (
    it.forEach((i) => {
      i.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function hy(e, t) {
  fd(e) &&
    (py() || Ro.push({ content: e, options: t }),
    it.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function xh(e, t) {
  it.forEach((n) => {
    t != null && t != null && t.containerId
      ? (t == null ? void 0 : t.containerId) === n.id &&
        n.toggle(e, t == null ? void 0 : t.id)
      : n.toggle(e, t == null ? void 0 : t.id);
  });
}
function SE(e) {
  const {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = C.useRef(
    (function (o) {
      const s = o.containerId || 1;
      return {
        subscribe(a) {
          const l = (function (f, h, p) {
            let S = 1,
              y = 0,
              g = [],
              E = [],
              w = [],
              m = h;
            const d = new Map(),
              v = new Set(),
              x = () => {
                (w = Array.from(d.values())), v.forEach((P) => P());
              },
              b = (P) => {
                (E = P == null ? [] : E.filter((N) => N !== P)), x();
              },
              _ = (P) => {
                const {
                    toastId: N,
                    onOpen: O,
                    updateId: M,
                    children: T,
                  } = P.props,
                  I = M == null;
                P.staleId && d.delete(P.staleId),
                  d.set(N, P),
                  (E = [...E, P.props.toastId].filter((R) => R !== P.staleId)),
                  x(),
                  p(yh(P, I ? "added" : "updated")),
                  I && Et(O) && O(C.isValidElement(T) && T.props);
              };
            return {
              id: f,
              props: m,
              observe: (P) => (v.add(P), () => v.delete(P)),
              toggle: (P, N) => {
                d.forEach((O) => {
                  (N != null && N !== O.props.toastId) ||
                    (Et(O.toggle) && O.toggle(P));
                });
              },
              removeToast: b,
              toasts: d,
              clearQueue: () => {
                (y -= g.length), (g = []);
              },
              buildToast: (P, N) => {
                if (
                  ((J) => {
                    let { containerId: se, toastId: Q, updateId: Ye } = J;
                    const De = se ? se !== f : f !== 1,
                      ht = d.has(Q) && Ye == null;
                    return De || ht;
                  })(N)
                )
                  return;
                const {
                    toastId: O,
                    updateId: M,
                    data: T,
                    staleId: I,
                    delay: R,
                  } = N,
                  $ = () => {
                    b(O);
                  },
                  z = M == null;
                z && y++;
                const U = {
                  ...m,
                  style: m.toastStyle,
                  key: S++,
                  ...Object.fromEntries(
                    Object.entries(N).filter((J) => {
                      let [se, Q] = J;
                      return Q != null;
                    })
                  ),
                  toastId: O,
                  updateId: M,
                  data: T,
                  closeToast: $,
                  isIn: !1,
                  className: Ys(N.className || m.toastClassName),
                  bodyClassName: Ys(N.bodyClassName || m.bodyClassName),
                  progressClassName: Ys(
                    N.progressClassName || m.progressClassName
                  ),
                  autoClose:
                    !N.isLoading &&
                    ((D = N.autoClose),
                    (V = m.autoClose),
                    D === !1 || (Ao(D) && D > 0) ? D : V),
                  deleteToast() {
                    const J = d.get(O),
                      { onClose: se, children: Q } = J.props;
                    Et(se) && se(C.isValidElement(Q) && Q.props),
                      p(yh(J, "removed")),
                      d.delete(O),
                      y--,
                      y < 0 && (y = 0),
                      g.length > 0 ? _(g.shift()) : x();
                  },
                };
                var D, V;
                (U.closeButton = m.closeButton),
                  N.closeButton === !1 || fd(N.closeButton)
                    ? (U.closeButton = N.closeButton)
                    : N.closeButton === !0 &&
                      (U.closeButton = !fd(m.closeButton) || m.closeButton);
                let W = P;
                C.isValidElement(P) && !Cr(P.type)
                  ? (W = C.cloneElement(P, {
                      closeToast: $,
                      toastProps: U,
                      data: T,
                    }))
                  : Et(P) && (W = P({ closeToast: $, toastProps: U, data: T }));
                const G = { content: W, props: U, staleId: I };
                m.limit && m.limit > 0 && y > m.limit && z
                  ? g.push(G)
                  : Ao(R)
                  ? setTimeout(() => {
                      _(G);
                    }, R)
                  : _(G);
              },
              setProps(P) {
                m = P;
              },
              setToggle: (P, N) => {
                d.get(P).toggle = N;
              },
              isToastActive: (P) => E.some((N) => N === P),
              getSnapshot: () => (m.newestOnTop ? w.reverse() : w),
            };
          })(s, o, wE);
          it.set(s, l);
          const u = l.observe(a);
          return (
            Ro.forEach((f) => hy(f.content, f.options)),
            (Ro = []),
            () => {
              u(), it.delete(s);
            }
          );
        },
        setProps(a) {
          var l;
          (l = it.get(s)) == null || l.setProps(a);
        },
        getSnapshot() {
          var a;
          return (a = it.get(s)) == null ? void 0 : a.getSnapshot();
        },
      };
    })(e)
  ).current;
  r(e);
  const i = C.useSyncExternalStore(t, n, n);
  return {
    getToastToRender: function (o) {
      if (!i) return [];
      const s = new Map();
      return (
        i.forEach((a) => {
          const { position: l } = a.props;
          s.has(l) || s.set(l, []), s.get(l).push(a);
        }),
        Array.from(s, (a) => o(a[0], a[1]))
      );
    },
    isToastActive: my,
    count: i == null ? void 0 : i.length,
  };
}
function _E(e) {
  const [t, n] = C.useState(!1),
    [r, i] = C.useState(!1),
    o = C.useRef(null),
    s = C.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: a,
      pauseOnHover: l,
      closeToast: u,
      onClick: f,
      closeOnClick: h,
    } = e;
  var p, S;
  function y() {
    n(!0);
  }
  function g() {
    n(!1);
  }
  function E(d) {
    const v = o.current;
    s.canDrag &&
      v &&
      ((s.didMove = !0),
      t && g(),
      (s.delta =
        e.draggableDirection === "x"
          ? d.clientX - s.start
          : d.clientY - s.start),
      s.start !== d.clientX && (s.canCloseOnClick = !1),
      (v.style.transform = `translate3d(${
        e.draggableDirection === "x"
          ? `${s.delta}px, var(--y)`
          : `0, calc(${s.delta}px + var(--y))`
      },0)`),
      (v.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance))));
  }
  function w() {
    document.removeEventListener("pointermove", E),
      document.removeEventListener("pointerup", w);
    const d = o.current;
    if (s.canDrag && s.didMove && d) {
      if (((s.canDrag = !1), Math.abs(s.delta) > s.removalDistance))
        return i(!0), e.closeToast(), void e.collapseAll();
      (d.style.transition = "transform 0.2s, opacity 0.2s"),
        d.style.removeProperty("transform"),
        d.style.removeProperty("opacity");
    }
  }
  (S = it.get(
    (p = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1
  )) == null || S.setToggle(p.id, p.fn),
    C.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || g(),
          window.addEventListener("focus", y),
          window.addEventListener("blur", g),
          () => {
            window.removeEventListener("focus", y),
              window.removeEventListener("blur", g);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const m = {
    onPointerDown: function (d) {
      if (e.draggable === !0 || e.draggable === d.pointerType) {
        (s.didMove = !1),
          document.addEventListener("pointermove", E),
          document.addEventListener("pointerup", w);
        const v = o.current;
        (s.canCloseOnClick = !0),
          (s.canDrag = !0),
          (v.style.transition = "none"),
          e.draggableDirection === "x"
            ? ((s.start = d.clientX),
              (s.removalDistance = v.offsetWidth * (e.draggablePercent / 100)))
            : ((s.start = d.clientY),
              (s.removalDistance =
                (v.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (d) {
      const {
        top: v,
        bottom: x,
        left: b,
        right: _,
      } = o.current.getBoundingClientRect();
      d.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      d.clientX >= b &&
      d.clientX <= _ &&
      d.clientY >= v &&
      d.clientY <= x
        ? g()
        : y();
    },
  };
  return (
    a && l && ((m.onMouseEnter = g), e.stacked || (m.onMouseLeave = y)),
    h &&
      (m.onClick = (d) => {
        f && f(d), s.canCloseOnClick && u();
      }),
    {
      playToast: y,
      pauseToast: g,
      isRunning: t,
      preventExitTransition: r,
      toastRef: o,
      eventHandlers: m,
    }
  );
}
function bE(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: i = "default",
    hide: o,
    className: s,
    style: a,
    controlledProgress: l,
    progress: u,
    rtl: f,
    isIn: h,
    theme: p,
  } = e;
  const S = o || (l && u === 0),
    y = {
      ...a,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
    };
  l && (y.transform = `scaleX(${u})`);
  const g = bn(
      "Toastify__progress-bar",
      l
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${p}`,
      `Toastify__progress-bar--${i}`,
      { "Toastify__progress-bar--rtl": f }
    ),
    E = Et(s) ? s({ rtl: f, type: i, defaultClassName: g }) : bn(g, s),
    w = {
      [l && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        l && u < 1
          ? null
          : () => {
              h && r();
            },
    };
  return X.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": S },
    X.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${i}`,
    }),
    X.createElement("div", {
      role: "progressbar",
      "aria-hidden": S ? "true" : "false",
      "aria-label": "notification timer",
      className: E,
      style: y,
      ...w,
    })
  );
}
let EE = 1;
const gy = () => "" + EE++;
function PE(e) {
  return e && (Cr(e.toastId) || Ao(e.toastId)) ? e.toastId : gy();
}
function uo(e, t) {
  return hy(e, t), t.toastId;
}
function La(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: PE(t) };
}
function Cs(e) {
  return (t, n) => uo(t, La(e, n));
}
function Z(e, t) {
  return uo(e, La("default", t));
}
(Z.loading = (e, t) =>
  uo(
    e,
    La("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (Z.promise = function (e, t, n) {
    let r,
      { pending: i, error: o, success: s } = t;
    i && (r = Cr(i) ? Z.loading(i, n) : Z.loading(i.render, { ...n, ...i }));
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      l = (f, h, p) => {
        if (h == null) return void Z.dismiss(r);
        const S = { type: f, ...a, ...n, data: p },
          y = Cr(h) ? { render: h } : h;
        return r ? Z.update(r, { ...S, ...y }) : Z(y.render, { ...S, ...y }), p;
      },
      u = Et(e) ? e() : e;
    return u.then((f) => l("success", s, f)).catch((f) => l("error", o, f)), u;
  }),
  (Z.success = Cs("success")),
  (Z.info = Cs("info")),
  (Z.error = Cs("error")),
  (Z.warning = Cs("warning")),
  (Z.warn = Z.warning),
  (Z.dark = (e, t) => uo(e, La("default", { theme: "dark", ...t }))),
  (Z.dismiss = function (e) {
    (function (t) {
      var n;
      if (py()) {
        if (t == null || Cr((n = t)) || Ao(n))
          it.forEach((r) => {
            r.removeToast(t);
          });
        else if (t && ("containerId" in t || "id" in t)) {
          const r = it.get(t.containerId);
          r
            ? r.removeToast(t.id)
            : it.forEach((i) => {
                i.removeToast(t.id);
              });
        }
      } else Ro = Ro.filter((r) => t != null && r.options.toastId !== t);
    })(e);
  }),
  (Z.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      it.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  (Z.isActive = my),
  (Z.update = function (e, t) {
    t === void 0 && (t = {});
    const n = ((r, i) => {
      var o;
      let { containerId: s } = i;
      return (o = it.get(s || 1)) == null ? void 0 : o.toasts.get(r);
    })(e, t);
    if (n) {
      const { props: r, content: i } = n,
        o = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: gy() };
      o.toastId !== e && (o.staleId = e);
      const s = o.render || i;
      delete o.render, uo(s, o);
    }
  }),
  (Z.done = (e) => {
    Z.update(e, { progress: 1 });
  }),
  (Z.onChange = function (e) {
    return (
      pd.add(e),
      () => {
        pd.delete(e);
      }
    );
  }),
  (Z.play = (e) => xh(!0, e)),
  (Z.pause = (e) => xh(!1, e));
const CE = typeof window < "u" ? C.useLayoutEffect : C.useEffect,
  Ts = (e) => {
    let { theme: t, type: n, isLoading: r, ...i } = e;
    return X.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...i,
    });
  },
  Yu = {
    info: function (e) {
      return X.createElement(
        Ts,
        { ...e },
        X.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return X.createElement(
        Ts,
        { ...e },
        X.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return X.createElement(
        Ts,
        { ...e },
        X.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return X.createElement(
        Ts,
        { ...e },
        X.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return X.createElement("div", { className: "Toastify__spinner" });
    },
  },
  TE = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
        playToast: o,
      } = _E(e),
      {
        closeButton: s,
        children: a,
        autoClose: l,
        onClick: u,
        type: f,
        hideProgressBar: h,
        closeToast: p,
        transition: S,
        position: y,
        className: g,
        style: E,
        bodyClassName: w,
        bodyStyle: m,
        progressClassName: d,
        progressStyle: v,
        updateId: x,
        role: b,
        progress: _,
        rtl: P,
        toastId: N,
        deleteToast: O,
        isIn: M,
        isLoading: T,
        closeOnClick: I,
        theme: R,
      } = e,
      $ = bn(
        "Toastify__toast",
        `Toastify__toast-theme--${R}`,
        `Toastify__toast--${f}`,
        { "Toastify__toast--rtl": P },
        { "Toastify__toast--close-on-click": I }
      ),
      z = Et(g)
        ? g({ rtl: P, position: y, type: f, defaultClassName: $ })
        : bn($, g),
      U = (function (G) {
        let { theme: J, type: se, isLoading: Q, icon: Ye } = G,
          De = null;
        const ht = { theme: J, type: se };
        return (
          Ye === !1 ||
            (Et(Ye)
              ? (De = Ye({ ...ht, isLoading: Q }))
              : C.isValidElement(Ye)
              ? (De = C.cloneElement(Ye, ht))
              : Q
              ? (De = Yu.spinner())
              : ((Ai) => Ai in Yu)(se) && (De = Yu[se](ht))),
          De
        );
      })(e),
      D = !!_ || !l,
      V = { closeToast: p, type: f, theme: R };
    let W = null;
    return (
      s === !1 ||
        (W = Et(s)
          ? s(V)
          : C.isValidElement(s)
          ? C.cloneElement(s, V)
          : (function (G) {
              let { closeToast: J, theme: se, ariaLabel: Q = "close" } = G;
              return X.createElement(
                "button",
                {
                  className: `Toastify__close-button Toastify__close-button--${se}`,
                  type: "button",
                  onClick: (Ye) => {
                    Ye.stopPropagation(), J(Ye);
                  },
                  "aria-label": Q,
                },
                X.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  X.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  })
                )
              );
            })(V)),
      X.createElement(
        S,
        {
          isIn: M,
          done: O,
          position: y,
          preventExitTransition: n,
          nodeRef: r,
          playToast: o,
        },
        X.createElement(
          "div",
          {
            id: N,
            onClick: u,
            "data-in": M,
            className: z,
            ...i,
            style: E,
            ref: r,
          },
          X.createElement(
            "div",
            {
              ...(M && { role: b }),
              className: Et(w) ? w({ type: f }) : bn("Toastify__toast-body", w),
              style: m,
            },
            U != null &&
              X.createElement(
                "div",
                {
                  className: bn("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !T,
                  }),
                },
                U
              ),
            X.createElement("div", null, a)
          ),
          W,
          X.createElement(bE, {
            ...(x && !D ? { key: `pb-${x}` } : {}),
            rtl: P,
            theme: R,
            delay: l,
            isRunning: t,
            isIn: M,
            closeToast: p,
            hide: h,
            type: f,
            style: v,
            className: d,
            controlledProgress: D,
            progress: _ || 0,
          })
        )
      )
    );
  },
  pl = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  jE = fl(pl("bounce", !0));
fl(pl("slide", !0));
fl(pl("zoom"));
fl(pl("flip"));
const NE = {
  position: "top-right",
  transition: jE,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light",
};
function kE(e) {
  let t = { ...NE, ...e };
  const n = e.stacked,
    [r, i] = C.useState(!0),
    o = C.useRef(null),
    { getToastToRender: s, isToastActive: a, count: l } = SE(t),
    { className: u, style: f, rtl: h, containerId: p } = t;
  function S(g) {
    const E = bn(
      "Toastify__toast-container",
      `Toastify__toast-container--${g}`,
      { "Toastify__toast-container--rtl": h }
    );
    return Et(u)
      ? u({ position: g, rtl: h, defaultClassName: E })
      : bn(E, Ys(u));
  }
  function y() {
    n && (i(!0), Z.play());
  }
  return (
    CE(() => {
      if (n) {
        var g;
        const E = o.current.querySelectorAll('[data-in="true"]'),
          w = 12,
          m = (g = t.position) == null ? void 0 : g.includes("top");
        let d = 0,
          v = 0;
        Array.from(E)
          .reverse()
          .forEach((x, b) => {
            const _ = x;
            _.classList.add("Toastify__toast--stacked"),
              b > 0 && (_.dataset.collapsed = `${r}`),
              _.dataset.pos || (_.dataset.pos = m ? "top" : "bot");
            const P = d * (r ? 0.2 : 1) + (r ? 0 : w * b);
            _.style.setProperty("--y", `${m ? P : -1 * P}px`),
              _.style.setProperty("--g", `${w}`),
              _.style.setProperty("--s", "" + (1 - (r ? v : 0))),
              (d += _.offsetHeight),
              (v += 0.025);
          });
      }
    }, [r, l, n]),
    X.createElement(
      "div",
      {
        ref: o,
        className: "Toastify",
        id: p,
        onMouseEnter: () => {
          n && (i(!1), Z.pause());
        },
        onMouseLeave: y,
      },
      s((g, E) => {
        const w = E.length ? { ...f } : { ...f, pointerEvents: "none" };
        return X.createElement(
          "div",
          { className: S(g), style: w, key: `container-${g}` },
          E.map((m) => {
            let { content: d, props: v } = m;
            return X.createElement(
              TE,
              {
                ...v,
                stacked: n,
                collapseAll: y,
                isIn: a(v.toastId, v.containerId),
                style: v.style,
                key: `toast-${v.key}`,
              },
              d
            );
          })
        );
      })
    )
  );
}
const OE = () => {
    const e = hr(),
      {
        register: t,
        handleSubmit: n,
        formState: { errors: r },
      } = Rf(),
      i = de(sy),
      o = de(dl),
      s = (a) => {
        e(qs({ email: a.email, password: a.password, name: a.name }));
      };
    return c.jsxs(c.Fragment, {
      children: [
        o && c.jsx(Oo, { to: "/" }),
        c.jsxs("div", {
          className:
            "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",
          children: [
            c.jsx("div", {
              className: "sm:mx-auto sm:w-full sm:max-w-sm",
              children: c.jsx("h2", {
                className:
                  "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
                children: "Sign Up",
              }),
            }),
            c.jsxs("div", {
              className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm",
              children: [
                c.jsxs("form", {
                  noValidate: !0,
                  className: "space-y-6",
                  onSubmit: n(s),
                  children: [
                    i &&
                      c.jsx("p", {
                        className: "text-red-500",
                        children: i.message,
                      }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("label", {
                          htmlFor: "email",
                          className:
                            "block text-sm font-medium leading-6 text-gray-900",
                          children: "Email address",
                        }),
                        c.jsxs("div", {
                          className: "mt-2",
                          children: [
                            c.jsx("input", {
                              id: "email",
                              ...t("email", {
                                required: "email required",
                                pattern: {
                                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                  message: "valid email required",
                                },
                              }),
                              type: "email",
                              autoComplete: "email",
                              required: !0,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                            }),
                            r.email &&
                              c.jsx("p", {
                                className: "text-red-500",
                                children: r.email.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("label", {
                          htmlFor: "email",
                          className:
                            "block text-sm font-medium leading-6 text-gray-900",
                          children: "Name",
                        }),
                        c.jsxs("div", {
                          className: "mt-2",
                          children: [
                            c.jsx("input", {
                              id: "name",
                              ...t("name", { required: "Name required" }),
                              type: "text",
                              required: !0,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                            }),
                            r.name &&
                              c.jsx("p", {
                                className: "text-red-500",
                                children: r.name.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            c.jsx("label", {
                              htmlFor: "password",
                              className:
                                "block text-sm font-medium leading-6 text-gray-900",
                              children: "Password",
                            }),
                            c.jsx("div", {
                              className: "text-sm",
                              children: c.jsx("a", {
                                href: "#",
                                className:
                                  "font-semibold text-indigo-600 hover:text-indigo-500",
                              }),
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "mt-2",
                          children: [
                            c.jsx("input", {
                              id: "password",
                              ...t("password", {
                                required: "password required",
                              }),
                              type: "password",
                              autoComplete: "current-password",
                              required: !0,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                            }),
                            r.password &&
                              c.jsx("p", {
                                className: "text-red-500",
                                children: r.password.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("div", {
                          className: "flex items-center justify-between",
                          children: c.jsx("label", {
                            htmlFor: "confirmPassword",
                            className:
                              "block text-sm font-medium leading-6 text-gray-900",
                            children: "Confirm Password",
                          }),
                        }),
                        c.jsxs("div", {
                          className: "mt-2",
                          children: [
                            c.jsx("input", {
                              id: "confirmPassword",
                              ...t("confirmPassword", {
                                required: "confirmPassword required",
                                validate: (a, l) =>
                                  a === l.password || "password does not match",
                              }),
                              type: "password",
                              autoComplete: "current-password",
                              required: !0,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                            }),
                            r.confirmPassword &&
                              c.jsx("p", {
                                className: "text-red-500",
                                children: r.confirmPassword.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx("div", {
                      children: c.jsx("button", {
                        type: "submit",
                        className:
                          "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                        children: "Sign Up",
                      }),
                    }),
                  ],
                }),
                c.jsxs("p", {
                  className: "mt-10 text-center text-sm text-gray-500",
                  children: [
                    "already registered?",
                    c.jsx(te, {
                      to: "/login",
                      className:
                        "font-semibold text-indigo-600 hover:text-indigo-500",
                      children: "Login Here",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  IE = () => c.jsx(OE, {}),
  DE = () => {
    const e = hr(),
      t = de(dl),
      {
        register: n,
        handleSubmit: r,
        formState: { errors: i },
      } = Rf(),
      o = de(sy),
      s = (a) => {
        e(Xs({ username: a.email, password: a.password }));
      };
    return c.jsxs(c.Fragment, {
      children: [
        t && c.jsx(Oo, { to: "/" }),
        c.jsxs("div", {
          className:
            "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",
          children: [
            c.jsx("div", {
              className: "sm:mx-auto sm:w-full sm:max-w-sm",
              children: c.jsx("h2", {
                className:
                  "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",
                children: "Sign in to your account",
              }),
            }),
            c.jsxs("div", {
              className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm",
              children: [
                c.jsxs("form", {
                  className: "space-y-6",
                  onSubmit: r(s),
                  children: [
                    o &&
                      c.jsx("p", {
                        className: "text-red-500",
                        children: o.message,
                      }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("label", {
                          htmlFor: "email",
                          className:
                            "block text-sm font-medium leading-6 text-gray-900",
                          children: "Email address",
                        }),
                        c.jsxs("div", {
                          className: "mt-2",
                          children: [
                            c.jsx("input", {
                              id: "email",
                              ...n("email", {
                                required: "email required",
                                pattern: {
                                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                  message: "valid email required",
                                },
                              }),
                              type: "email",
                              autoComplete: "email",
                              required: !0,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                            }),
                            i.email &&
                              c.jsx("p", {
                                className: "text-red-500",
                                children: i.email.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            c.jsx("label", {
                              htmlFor: "password",
                              className:
                                "block text-sm font-medium leading-6 text-gray-900",
                              children: "Password",
                            }),
                            c.jsx("div", {
                              className: "text-sm",
                              children: c.jsx("a", {
                                href: "#",
                                className:
                                  "font-semibold text-indigo-600 hover:text-indigo-500",
                                children: "Forgot password?",
                              }),
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "mt-2",
                          children: [
                            c.jsx("input", {
                              id: "password",
                              ...n("password", {
                                required: "password required",
                              }),
                              type: "password",
                              autoComplete: "current-password",
                              required: !0,
                              className:
                                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                            }),
                            i.password &&
                              c.jsx("p", {
                                className: "text-red-500",
                                children: i.password.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx("div", {
                      children: c.jsx("button", {
                        type: "submit",
                        className:
                          "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                        children: "Sign in",
                      }),
                    }),
                  ],
                }),
                c.jsxs("p", {
                  className: "mt-10 text-center text-sm text-gray-500",
                  children: [
                    "New to website?",
                    c.jsx(te, {
                      to: "/signup",
                      className:
                        "font-semibold text-indigo-600 hover:text-indigo-500",
                      children: "SignUp Here",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
var AE = Object.defineProperty,
  RE = (e, t, n) =>
    t in e
      ? AE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Qu = (e, t, n) => (RE(e, typeof t != "symbol" ? t + "" : t, n), n);
let ME = class {
    constructor() {
      Qu(this, "current", this.detect()),
        Qu(this, "handoffState", "pending"),
        Qu(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  Tr = new ME(),
  Ut = (e, t) => {
    Tr.isServer ? C.useEffect(e, t) : C.useLayoutEffect(e, t);
  };
function or(e) {
  let t = C.useRef(e);
  return (
    Ut(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let fe = function (e) {
  let t = or(e);
  return X.useCallback((...n) => t.current(...n), [t]);
};
function $E(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function On() {
  let e = [],
    t = {
      addEventListener(n, r, i, o) {
        return (
          n.addEventListener(r, i, o),
          t.add(() => n.removeEventListener(r, i, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          $E(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, i) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: i }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = On();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let i of e.splice(r, 1)) i();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function ml() {
  let [e] = C.useState(On);
  return C.useEffect(() => () => e.dispose(), [e]), e;
}
function LE() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in jr
    ? ((t) => t.useSyncExternalStore)(jr)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function Bf() {
  let e = LE(),
    [t, n] = C.useState(Tr.isHandoffComplete);
  return (
    t && Tr.isHandoffComplete === !1 && n(!1),
    C.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    C.useEffect(() => Tr.handoff(), []),
    e ? !1 : t
  );
}
var wh;
let Go =
  (wh = X.useId) != null
    ? wh
    : function () {
        let e = Bf(),
          [t, n] = X.useState(e ? () => Tr.nextId() : null);
        return (
          Ut(() => {
            t === null && n(Tr.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function et(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((i) => `"${i}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, et), r);
}
function Jo(e) {
  return Tr.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let md = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var hd = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(hd || {}),
  FE = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(FE || {}),
  zE = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(zE || {});
function vy(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(md)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Vf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Vf || {});
function Wf(e, t = 0) {
  var n;
  return e === ((n = Jo(e)) == null ? void 0 : n.body)
    ? !1
    : et(t, {
        0() {
          return e.matches(md);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(md)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
function yy(e) {
  let t = Jo(e);
  On().nextFrame(() => {
    t && !Wf(t.activeElement, 0) && BE(e);
  });
}
var UE = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(UE || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function BE(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let VE = ["textarea", "input"].join(",");
function WE(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, VE)) !=
    null
    ? n
    : !1;
}
function xy(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let i = t(n),
      o = t(r);
    if (i === null || o === null) return 0;
    let s = i.compareDocumentPosition(o);
    return s & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : s & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function HE(e, t) {
  return KE(vy(), t, { relativeTo: e });
}
function KE(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: i = [] } = {}
) {
  let o = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    s = Array.isArray(e) ? (n ? xy(e) : e) : vy(e);
  i.length > 0 && s.length > 1 && (s = s.filter((S) => !i.includes(S))),
    (r = r ?? o.activeElement);
  let a = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    l = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, s.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, s.indexOf(r)) + 1;
      if (t & 8) return s.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = t & 32 ? { preventScroll: !0 } : {},
    f = 0,
    h = s.length,
    p;
  do {
    if (f >= h || f + h <= 0) return 0;
    let S = l + f;
    if (t & 16) S = (S + h) % h;
    else {
      if (S < 0) return 3;
      if (S >= h) return 1;
    }
    (p = s[S]), p == null || p.focus(u), (f += a);
  } while (p !== o.activeElement);
  return t & 6 && WE(p) && p.select(), 2;
}
function qE() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function XE() {
  return /Android/gi.test(window.navigator.userAgent);
}
function YE() {
  return qE() || XE();
}
function js(e, t, n) {
  let r = or(t);
  C.useEffect(() => {
    function i(o) {
      r.current(o);
    }
    return (
      document.addEventListener(e, i, n),
      () => document.removeEventListener(e, i, n)
    );
  }, [e, n]);
}
function QE(e, t, n) {
  let r = or(t);
  C.useEffect(() => {
    function i(o) {
      r.current(o);
    }
    return (
      window.addEventListener(e, i, n),
      () => window.removeEventListener(e, i, n)
    );
  }, [e, n]);
}
function GE(e, t, n = !0) {
  let r = C.useRef(!1);
  C.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function i(s, a) {
    if (!r.current || s.defaultPrevented) return;
    let l = a(s);
    if (l === null || !l.getRootNode().contains(l) || !l.isConnected) return;
    let u = (function f(h) {
      return typeof h == "function"
        ? f(h())
        : Array.isArray(h) || h instanceof Set
        ? h
        : [h];
    })(e);
    for (let f of u) {
      if (f === null) continue;
      let h = f instanceof HTMLElement ? f : f.current;
      if (
        (h != null && h.contains(l)) ||
        (s.composed && s.composedPath().includes(h))
      )
        return;
    }
    return !Wf(l, Vf.Loose) && l.tabIndex !== -1 && s.preventDefault(), t(s, l);
  }
  let o = C.useRef(null);
  js(
    "pointerdown",
    (s) => {
      var a, l;
      r.current &&
        (o.current =
          ((l = (a = s.composedPath) == null ? void 0 : a.call(s)) == null
            ? void 0
            : l[0]) || s.target);
    },
    !0
  ),
    js(
      "mousedown",
      (s) => {
        var a, l;
        r.current &&
          (o.current =
            ((l = (a = s.composedPath) == null ? void 0 : a.call(s)) == null
              ? void 0
              : l[0]) || s.target);
      },
      !0
    ),
    js(
      "click",
      (s) => {
        YE() || (o.current && (i(s, () => o.current), (o.current = null)));
      },
      !0
    ),
    js(
      "touchend",
      (s) => i(s, () => (s.target instanceof HTMLElement ? s.target : null)),
      !0
    ),
    QE(
      "blur",
      (s) =>
        i(s, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function JE(...e) {
  return C.useMemo(() => Jo(...e), [...e]);
}
function Sh(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function wy(e, t) {
  let [n, r] = C.useState(() => Sh(e));
  return (
    Ut(() => {
      r(Sh(e));
    }, [e.type, e.as]),
    Ut(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
let Sy = Symbol();
function ZE(e, t = !0) {
  return Object.assign(e, { [Sy]: t });
}
function Rn(...e) {
  let t = C.useRef(e);
  C.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = fe((r) => {
    for (let i of t.current)
      i != null && (typeof i == "function" ? i(r) : (i.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Sy])) ? void 0 : n;
}
function _h(e) {
  return [e.screenX, e.screenY];
}
function eP() {
  let e = C.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let n = _h(t);
      return e.current[0] === n[0] && e.current[1] === n[1]
        ? !1
        : ((e.current = n), !0);
    },
    update(t) {
      e.current = _h(t);
    },
  };
}
function tP({ container: e, accept: t, walk: n, enabled: r = !0 }) {
  let i = C.useRef(t),
    o = C.useRef(n);
  C.useEffect(() => {
    (i.current = t), (o.current = n);
  }, [t, n]),
    Ut(() => {
      if (!e || !r) return;
      let s = Jo(e);
      if (!s) return;
      let a = i.current,
        l = o.current,
        u = Object.assign((h) => a(h), { acceptNode: a }),
        f = s.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, u, !1);
      for (; f.nextNode(); ) l(f.currentNode);
    }, [e, r, i, o]);
}
function Fa(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var _i = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(_i || {}),
  Yn = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Yn || {});
function Mn({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: i,
  visible: o = !0,
  name: s,
  mergeRefs: a,
}) {
  a = a ?? nP;
  let l = by(t, e);
  if (o) return Ns(l, n, r, s, a);
  let u = i ?? 0;
  if (u & 2) {
    let { static: f = !1, ...h } = l;
    if (f) return Ns(h, n, r, s, a);
  }
  if (u & 1) {
    let { unmount: f = !0, ...h } = l;
    return et(f ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Ns({ ...h, hidden: !0, style: { display: "none" } }, n, r, s, a);
      },
    });
  }
  return Ns(l, n, r, s, a);
}
function Ns(e, t = {}, n, r, i) {
  let {
      as: o = n,
      children: s,
      refName: a = "ref",
      ...l
    } = Gu(e, ["unmount", "static"]),
    u = e.ref !== void 0 ? { [a]: e.ref } : {},
    f = typeof s == "function" ? s(t) : s;
  "className" in l &&
    l.className &&
    typeof l.className == "function" &&
    (l.className = l.className(t));
  let h = {};
  if (t) {
    let p = !1,
      S = [];
    for (let [y, g] of Object.entries(t))
      typeof g == "boolean" && (p = !0), g === !0 && S.push(y);
    p && (h["data-headlessui-state"] = S.join(" "));
  }
  if (o === C.Fragment && Object.keys(bh(l)).length > 0) {
    if (!C.isValidElement(f) || (Array.isArray(f) && f.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(l).map((g) => `  - ${g}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((g) => `  - ${g}`).join(`
`),
        ].join(`
`)
      );
    let p = f.props,
      S =
        typeof (p == null ? void 0 : p.className) == "function"
          ? (...g) => Fa(p == null ? void 0 : p.className(...g), l.className)
          : Fa(p == null ? void 0 : p.className, l.className),
      y = S ? { className: S } : {};
    return C.cloneElement(
      f,
      Object.assign(
        {},
        by(f.props, bh(Gu(l, ["ref"]))),
        h,
        u,
        { ref: i(f.ref, u.ref) },
        y
      )
    );
  }
  return C.createElement(
    o,
    Object.assign(
      {},
      Gu(l, ["ref"]),
      o !== C.Fragment && u,
      o !== C.Fragment && h
    ),
    f
  );
}
function _y() {
  let e = C.useRef([]),
    t = C.useCallback((n) => {
      for (let r of e.current)
        r != null && (typeof r == "function" ? r(n) : (r.current = n));
    }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return (e.current = n), t;
  };
}
function nP(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function by(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let i in r)
      i.startsWith("on") && typeof r[i] == "function"
        ? (n[i] != null || (n[i] = []), n[i].push(r[i]))
        : (t[i] = r[i]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](i, ...o) {
        let s = n[r];
        for (let a of s) {
          if (
            (i instanceof Event ||
              (i == null ? void 0 : i.nativeEvent) instanceof Event) &&
            i.defaultPrevented
          )
            return;
          a(i, ...o);
        }
      },
    });
  return t;
}
function gn(e) {
  var t;
  return Object.assign(C.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function bh(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Gu(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let Hf = C.createContext(null);
Hf.displayName = "OpenClosedContext";
var He = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(He || {});
function hl() {
  return C.useContext(Hf);
}
function Kf({ value: e, children: t }) {
  return X.createElement(Hf.Provider, { value: e }, t);
}
function Ey(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && rP(n) ? !1 : r;
}
function rP(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function iP(e) {
  throw new Error("Unexpected object: " + e);
}
var Zt = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(Zt || {});
function oP(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    i = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let o = 0; o < n.length; ++o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 1: {
      for (let o = i - 1; o >= 0; --o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 2: {
      for (let o = i + 1; o < n.length; ++o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 3: {
      for (let o = n.length - 1; o >= 0; --o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 4: {
      for (let o = 0; o < n.length; ++o)
        if (t.resolveId(n[o], o, n) === e.id) return o;
      return r;
    }
    case 5:
      return null;
    default:
      iP(e);
  }
}
var Ee = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(Ee || {});
function qf() {
  let e = C.useRef(!1);
  return (
    Ut(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
var Eh;
let sP =
  (Eh = X.startTransition) != null
    ? Eh
    : function (e) {
        e();
      };
var aP = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(aP || {}),
  lP = ((e) => (
    (e[(e.ToggleDisclosure = 0)] = "ToggleDisclosure"),
    (e[(e.CloseDisclosure = 1)] = "CloseDisclosure"),
    (e[(e.SetButtonId = 2)] = "SetButtonId"),
    (e[(e.SetPanelId = 3)] = "SetPanelId"),
    (e[(e.LinkPanel = 4)] = "LinkPanel"),
    (e[(e.UnlinkPanel = 5)] = "UnlinkPanel"),
    e
  ))(lP || {});
let uP = {
    0: (e) => ({
      ...e,
      disclosureState: et(e.disclosureState, { 0: 1, 1: 0 }),
    }),
    1: (e) => (e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }),
    4(e) {
      return e.linkedPanel === !0 ? e : { ...e, linkedPanel: !0 };
    },
    5(e) {
      return e.linkedPanel === !1 ? e : { ...e, linkedPanel: !1 };
    },
    2(e, t) {
      return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
    },
    3(e, t) {
      return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
    },
  },
  Xf = C.createContext(null);
Xf.displayName = "DisclosureContext";
function Yf(e) {
  let t = C.useContext(Xf);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Yf), n);
  }
  return t;
}
let Qf = C.createContext(null);
Qf.displayName = "DisclosureAPIContext";
function Py(e) {
  let t = C.useContext(Qf);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Py), n);
  }
  return t;
}
let Gf = C.createContext(null);
Gf.displayName = "DisclosurePanelContext";
function cP() {
  return C.useContext(Gf);
}
function dP(e, t) {
  return et(t.type, uP, e, t);
}
let fP = C.Fragment;
function pP(e, t) {
  let { defaultOpen: n = !1, ...r } = e,
    i = C.useRef(null),
    o = Rn(
      t,
      ZE((E) => {
        i.current = E;
      }, e.as === void 0 || e.as === C.Fragment)
    ),
    s = C.useRef(null),
    a = C.useRef(null),
    l = C.useReducer(dP, {
      disclosureState: n ? 0 : 1,
      linkedPanel: !1,
      buttonRef: a,
      panelRef: s,
      buttonId: null,
      panelId: null,
    }),
    [{ disclosureState: u, buttonId: f }, h] = l,
    p = fe((E) => {
      h({ type: 1 });
      let w = Jo(i);
      if (!w || !f) return;
      let m = E
        ? E instanceof HTMLElement
          ? E
          : E.current instanceof HTMLElement
          ? E.current
          : w.getElementById(f)
        : w.getElementById(f);
      m == null || m.focus();
    }),
    S = C.useMemo(() => ({ close: p }), [p]),
    y = C.useMemo(() => ({ open: u === 0, close: p }), [u, p]),
    g = { ref: o };
  return X.createElement(
    Xf.Provider,
    { value: l },
    X.createElement(
      Qf.Provider,
      { value: S },
      X.createElement(
        Kf,
        { value: et(u, { 0: He.Open, 1: He.Closed }) },
        Mn({
          ourProps: g,
          theirProps: r,
          slot: y,
          defaultTag: fP,
          name: "Disclosure",
        })
      )
    )
  );
}
let mP = "button";
function hP(e, t) {
  let n = Go(),
    { id: r = `headlessui-disclosure-button-${n}`, ...i } = e,
    [o, s] = Yf("Disclosure.Button"),
    a = cP(),
    l = a === null ? !1 : a === o.panelId,
    u = C.useRef(null),
    f = Rn(u, t, l ? null : o.buttonRef),
    h = _y();
  C.useEffect(() => {
    if (!l)
      return (
        s({ type: 2, buttonId: r }),
        () => {
          s({ type: 2, buttonId: null });
        }
      );
  }, [r, s, l]);
  let p = fe((m) => {
      var d;
      if (l) {
        if (o.disclosureState === 1) return;
        switch (m.key) {
          case Ee.Space:
          case Ee.Enter:
            m.preventDefault(),
              m.stopPropagation(),
              s({ type: 0 }),
              (d = o.buttonRef.current) == null || d.focus();
            break;
        }
      } else
        switch (m.key) {
          case Ee.Space:
          case Ee.Enter:
            m.preventDefault(), m.stopPropagation(), s({ type: 0 });
            break;
        }
    }),
    S = fe((m) => {
      switch (m.key) {
        case Ee.Space:
          m.preventDefault();
          break;
      }
    }),
    y = fe((m) => {
      var d;
      Ey(m.currentTarget) ||
        e.disabled ||
        (l
          ? (s({ type: 0 }), (d = o.buttonRef.current) == null || d.focus())
          : s({ type: 0 }));
    }),
    g = C.useMemo(() => ({ open: o.disclosureState === 0 }), [o]),
    E = wy(e, u),
    w = l
      ? { ref: f, type: E, onKeyDown: p, onClick: y }
      : {
          ref: f,
          id: r,
          type: E,
          "aria-expanded": o.disclosureState === 0,
          "aria-controls": o.linkedPanel ? o.panelId : void 0,
          onKeyDown: p,
          onKeyUp: S,
          onClick: y,
        };
  return Mn({
    mergeRefs: h,
    ourProps: w,
    theirProps: i,
    slot: g,
    defaultTag: mP,
    name: "Disclosure.Button",
  });
}
let gP = "div",
  vP = _i.RenderStrategy | _i.Static;
function yP(e, t) {
  let n = Go(),
    { id: r = `headlessui-disclosure-panel-${n}`, ...i } = e,
    [o, s] = Yf("Disclosure.Panel"),
    { close: a } = Py("Disclosure.Panel"),
    l = _y(),
    u = Rn(t, o.panelRef, (y) => {
      sP(() => s({ type: y ? 4 : 5 }));
    });
  C.useEffect(
    () => (
      s({ type: 3, panelId: r }),
      () => {
        s({ type: 3, panelId: null });
      }
    ),
    [r, s]
  );
  let f = hl(),
    h = f !== null ? (f & He.Open) === He.Open : o.disclosureState === 0,
    p = C.useMemo(() => ({ open: o.disclosureState === 0, close: a }), [o, a]),
    S = { ref: u, id: r };
  return X.createElement(
    Gf.Provider,
    { value: o.panelId },
    Mn({
      mergeRefs: l,
      ourProps: S,
      theirProps: i,
      slot: p,
      defaultTag: gP,
      features: vP,
      visible: h,
      name: "Disclosure.Panel",
    })
  );
}
let xP = gn(pP),
  wP = gn(hP),
  SP = gn(yP),
  Ju = Object.assign(xP, { Button: wP, Panel: SP }),
  Ph =
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ch(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "",
    i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return r;
  let o = !1;
  for (let a of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    a.remove(), (o = !0);
  let s = o ? ((n = i.innerText) != null ? n : "") : r;
  return Ph.test(s) && (s = s.replace(Ph, "")), s;
}
function _P(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n
      .split(" ")
      .map((i) => {
        let o = document.getElementById(i);
        if (o) {
          let s = o.getAttribute("aria-label");
          return typeof s == "string" ? s.trim() : Ch(o).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return Ch(e).trim();
}
function bP(e) {
  let t = C.useRef(""),
    n = C.useRef("");
  return fe(() => {
    let r = e.current;
    if (!r) return "";
    let i = r.innerText;
    if (t.current === i) return n.current;
    let o = _P(r).trim().toLowerCase();
    return (t.current = i), (n.current = o), o;
  });
}
var EP = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(EP || {}),
  PP = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(PP || {}),
  CP = ((e) => (
    (e[(e.OpenMenu = 0)] = "OpenMenu"),
    (e[(e.CloseMenu = 1)] = "CloseMenu"),
    (e[(e.GoToItem = 2)] = "GoToItem"),
    (e[(e.Search = 3)] = "Search"),
    (e[(e.ClearSearch = 4)] = "ClearSearch"),
    (e[(e.RegisterItem = 5)] = "RegisterItem"),
    (e[(e.UnregisterItem = 6)] = "UnregisterItem"),
    e
  ))(CP || {});
function Zu(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
    r = xy(t(e.items.slice()), (o) => o.dataRef.current.domRef.current),
    i = n ? r.indexOf(n) : null;
  return i === -1 && (i = null), { items: r, activeItemIndex: i };
}
let TP = {
    1(e) {
      return e.menuState === 1
        ? e
        : { ...e, activeItemIndex: null, menuState: 1 };
    },
    0(e) {
      return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
    },
    2: (e, t) => {
      var n;
      let r = Zu(e),
        i = oP(t, {
          resolveItems: () => r.items,
          resolveActiveIndex: () => r.activeItemIndex,
          resolveId: (o) => o.id,
          resolveDisabled: (o) => o.dataRef.current.disabled,
        });
      return {
        ...e,
        ...r,
        searchQuery: "",
        activeItemIndex: i,
        activationTrigger: (n = t.trigger) != null ? n : 1,
      };
    },
    3: (e, t) => {
      let n = e.searchQuery !== "" ? 0 : 1,
        r = e.searchQuery + t.value.toLowerCase(),
        i = (
          e.activeItemIndex !== null
            ? e.items
                .slice(e.activeItemIndex + n)
                .concat(e.items.slice(0, e.activeItemIndex + n))
            : e.items
        ).find((s) => {
          var a;
          return (
            ((a = s.dataRef.current.textValue) == null
              ? void 0
              : a.startsWith(r)) && !s.dataRef.current.disabled
          );
        }),
        o = i ? e.items.indexOf(i) : -1;
      return o === -1 || o === e.activeItemIndex
        ? { ...e, searchQuery: r }
        : { ...e, searchQuery: r, activeItemIndex: o, activationTrigger: 1 };
    },
    4(e) {
      return e.searchQuery === ""
        ? e
        : { ...e, searchQuery: "", searchActiveItemIndex: null };
    },
    5: (e, t) => {
      let n = Zu(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
      return { ...e, ...n };
    },
    6: (e, t) => {
      let n = Zu(e, (r) => {
        let i = r.findIndex((o) => o.id === t.id);
        return i !== -1 && r.splice(i, 1), r;
      });
      return { ...e, ...n, activationTrigger: 1 };
    },
  },
  Jf = C.createContext(null);
Jf.displayName = "MenuContext";
function gl(e) {
  let t = C.useContext(Jf);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, gl), n);
  }
  return t;
}
function jP(e, t) {
  return et(t.type, TP, e, t);
}
let NP = C.Fragment;
function kP(e, t) {
  let { __demoMode: n = !1, ...r } = e,
    i = C.useReducer(jP, {
      __demoMode: n,
      menuState: n ? 0 : 1,
      buttonRef: C.createRef(),
      itemsRef: C.createRef(),
      items: [],
      searchQuery: "",
      activeItemIndex: null,
      activationTrigger: 1,
    }),
    [{ menuState: o, itemsRef: s, buttonRef: a }, l] = i,
    u = Rn(t);
  GE(
    [a, s],
    (S, y) => {
      var g;
      l({ type: 1 }),
        Wf(y, Vf.Loose) ||
          (S.preventDefault(), (g = a.current) == null || g.focus());
    },
    o === 0
  );
  let f = fe(() => {
      l({ type: 1 });
    }),
    h = C.useMemo(() => ({ open: o === 0, close: f }), [o, f]),
    p = { ref: u };
  return X.createElement(
    Jf.Provider,
    { value: i },
    X.createElement(
      Kf,
      { value: et(o, { 0: He.Open, 1: He.Closed }) },
      Mn({ ourProps: p, theirProps: r, slot: h, defaultTag: NP, name: "Menu" })
    )
  );
}
let OP = "button";
function IP(e, t) {
  var n;
  let r = Go(),
    { id: i = `headlessui-menu-button-${r}`, ...o } = e,
    [s, a] = gl("Menu.Button"),
    l = Rn(s.buttonRef, t),
    u = ml(),
    f = fe((g) => {
      switch (g.key) {
        case Ee.Space:
        case Ee.Enter:
        case Ee.ArrowDown:
          g.preventDefault(),
            g.stopPropagation(),
            a({ type: 0 }),
            u.nextFrame(() => a({ type: 2, focus: Zt.First }));
          break;
        case Ee.ArrowUp:
          g.preventDefault(),
            g.stopPropagation(),
            a({ type: 0 }),
            u.nextFrame(() => a({ type: 2, focus: Zt.Last }));
          break;
      }
    }),
    h = fe((g) => {
      switch (g.key) {
        case Ee.Space:
          g.preventDefault();
          break;
      }
    }),
    p = fe((g) => {
      if (Ey(g.currentTarget)) return g.preventDefault();
      e.disabled ||
        (s.menuState === 0
          ? (a({ type: 1 }),
            u.nextFrame(() => {
              var E;
              return (E = s.buttonRef.current) == null
                ? void 0
                : E.focus({ preventScroll: !0 });
            }))
          : (g.preventDefault(), a({ type: 0 })));
    }),
    S = C.useMemo(() => ({ open: s.menuState === 0 }), [s]),
    y = {
      ref: l,
      id: i,
      type: wy(e, s.buttonRef),
      "aria-haspopup": "menu",
      "aria-controls": (n = s.itemsRef.current) == null ? void 0 : n.id,
      "aria-expanded": s.menuState === 0,
      onKeyDown: f,
      onKeyUp: h,
      onClick: p,
    };
  return Mn({
    ourProps: y,
    theirProps: o,
    slot: S,
    defaultTag: OP,
    name: "Menu.Button",
  });
}
let DP = "div",
  AP = _i.RenderStrategy | _i.Static;
function RP(e, t) {
  var n, r;
  let i = Go(),
    { id: o = `headlessui-menu-items-${i}`, ...s } = e,
    [a, l] = gl("Menu.Items"),
    u = Rn(a.itemsRef, t),
    f = JE(a.itemsRef),
    h = ml(),
    p = hl(),
    S = p !== null ? (p & He.Open) === He.Open : a.menuState === 0;
  C.useEffect(() => {
    let m = a.itemsRef.current;
    m &&
      a.menuState === 0 &&
      m !== (f == null ? void 0 : f.activeElement) &&
      m.focus({ preventScroll: !0 });
  }, [a.menuState, a.itemsRef, f]),
    tP({
      container: a.itemsRef.current,
      enabled: a.menuState === 0,
      accept(m) {
        return m.getAttribute("role") === "menuitem"
          ? NodeFilter.FILTER_REJECT
          : m.hasAttribute("role")
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
      walk(m) {
        m.setAttribute("role", "none");
      },
    });
  let y = fe((m) => {
      var d, v;
      switch ((h.dispose(), m.key)) {
        case Ee.Space:
          if (a.searchQuery !== "")
            return (
              m.preventDefault(),
              m.stopPropagation(),
              l({ type: 3, value: m.key })
            );
        case Ee.Enter:
          if (
            (m.preventDefault(),
            m.stopPropagation(),
            l({ type: 1 }),
            a.activeItemIndex !== null)
          ) {
            let { dataRef: x } = a.items[a.activeItemIndex];
            (v = (d = x.current) == null ? void 0 : d.domRef.current) == null ||
              v.click();
          }
          yy(a.buttonRef.current);
          break;
        case Ee.ArrowDown:
          return (
            m.preventDefault(),
            m.stopPropagation(),
            l({ type: 2, focus: Zt.Next })
          );
        case Ee.ArrowUp:
          return (
            m.preventDefault(),
            m.stopPropagation(),
            l({ type: 2, focus: Zt.Previous })
          );
        case Ee.Home:
        case Ee.PageUp:
          return (
            m.preventDefault(),
            m.stopPropagation(),
            l({ type: 2, focus: Zt.First })
          );
        case Ee.End:
        case Ee.PageDown:
          return (
            m.preventDefault(),
            m.stopPropagation(),
            l({ type: 2, focus: Zt.Last })
          );
        case Ee.Escape:
          m.preventDefault(),
            m.stopPropagation(),
            l({ type: 1 }),
            On().nextFrame(() => {
              var x;
              return (x = a.buttonRef.current) == null
                ? void 0
                : x.focus({ preventScroll: !0 });
            });
          break;
        case Ee.Tab:
          m.preventDefault(),
            m.stopPropagation(),
            l({ type: 1 }),
            On().nextFrame(() => {
              HE(a.buttonRef.current, m.shiftKey ? hd.Previous : hd.Next);
            });
          break;
        default:
          m.key.length === 1 &&
            (l({ type: 3, value: m.key }),
            h.setTimeout(() => l({ type: 4 }), 350));
          break;
      }
    }),
    g = fe((m) => {
      switch (m.key) {
        case Ee.Space:
          m.preventDefault();
          break;
      }
    }),
    E = C.useMemo(() => ({ open: a.menuState === 0 }), [a]),
    w = {
      "aria-activedescendant":
        a.activeItemIndex === null || (n = a.items[a.activeItemIndex]) == null
          ? void 0
          : n.id,
      "aria-labelledby": (r = a.buttonRef.current) == null ? void 0 : r.id,
      id: o,
      onKeyDown: y,
      onKeyUp: g,
      role: "menu",
      tabIndex: 0,
      ref: u,
    };
  return Mn({
    ourProps: w,
    theirProps: s,
    slot: E,
    defaultTag: DP,
    features: AP,
    visible: S,
    name: "Menu.Items",
  });
}
let MP = C.Fragment;
function $P(e, t) {
  let n = Go(),
    { id: r = `headlessui-menu-item-${n}`, disabled: i = !1, ...o } = e,
    [s, a] = gl("Menu.Item"),
    l = s.activeItemIndex !== null ? s.items[s.activeItemIndex].id === r : !1,
    u = C.useRef(null),
    f = Rn(t, u);
  Ut(() => {
    if (s.__demoMode || s.menuState !== 0 || !l || s.activationTrigger === 0)
      return;
    let x = On();
    return (
      x.requestAnimationFrame(() => {
        var b, _;
        (_ = (b = u.current) == null ? void 0 : b.scrollIntoView) == null ||
          _.call(b, { block: "nearest" });
      }),
      x.dispose
    );
  }, [s.__demoMode, u, l, s.menuState, s.activationTrigger, s.activeItemIndex]);
  let h = bP(u),
    p = C.useRef({
      disabled: i,
      domRef: u,
      get textValue() {
        return h();
      },
    });
  Ut(() => {
    p.current.disabled = i;
  }, [p, i]),
    Ut(
      () => (a({ type: 5, id: r, dataRef: p }), () => a({ type: 6, id: r })),
      [p, r]
    );
  let S = fe(() => {
      a({ type: 1 });
    }),
    y = fe((x) => {
      if (i) return x.preventDefault();
      a({ type: 1 }), yy(s.buttonRef.current);
    }),
    g = fe(() => {
      if (i) return a({ type: 2, focus: Zt.Nothing });
      a({ type: 2, focus: Zt.Specific, id: r });
    }),
    E = eP(),
    w = fe((x) => E.update(x)),
    m = fe((x) => {
      E.wasMoved(x) &&
        (i || l || a({ type: 2, focus: Zt.Specific, id: r, trigger: 0 }));
    }),
    d = fe((x) => {
      E.wasMoved(x) && (i || (l && a({ type: 2, focus: Zt.Nothing })));
    }),
    v = C.useMemo(() => ({ active: l, disabled: i, close: S }), [l, i, S]);
  return Mn({
    ourProps: {
      id: r,
      ref: f,
      role: "menuitem",
      tabIndex: i === !0 ? void 0 : -1,
      "aria-disabled": i === !0 ? !0 : void 0,
      disabled: void 0,
      onClick: y,
      onFocus: g,
      onPointerEnter: w,
      onMouseEnter: w,
      onPointerMove: m,
      onMouseMove: m,
      onPointerLeave: d,
      onMouseLeave: d,
    },
    theirProps: o,
    slot: v,
    defaultTag: MP,
    name: "Menu.Item",
  });
}
let LP = gn(kP),
  FP = gn(IP),
  zP = gn(RP),
  UP = gn($P),
  Ur = Object.assign(LP, { Button: FP, Items: zP, Item: UP });
function BP(e = 0) {
  let [t, n] = C.useState(e),
    r = qf(),
    i = C.useCallback(
      (l) => {
        r.current && n((u) => u | l);
      },
      [t, r]
    ),
    o = C.useCallback((l) => !!(t & l), [t]),
    s = C.useCallback(
      (l) => {
        r.current && n((u) => u & ~l);
      },
      [n, r]
    ),
    a = C.useCallback(
      (l) => {
        r.current && n((u) => u ^ l);
      },
      [n]
    );
  return { flags: t, addFlag: i, hasFlag: o, removeFlag: s, toggleFlag: a };
}
function VP(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function ec(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function tc(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function WP(e, t) {
  let n = On();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: i } = getComputedStyle(e),
    [o, s] = [r, i].map((l) => {
      let [u = 0] = l
        .split(",")
        .filter(Boolean)
        .map((f) => (f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3))
        .sort((f, h) => h - f);
      return u;
    }),
    a = o + s;
  if (a !== 0) {
    n.group((u) => {
      u.setTimeout(() => {
        t(), u.dispose();
      }, a),
        u.addEventListener(e, "transitionrun", (f) => {
          f.target === f.currentTarget && u.dispose();
        });
    });
    let l = n.addEventListener(e, "transitionend", (u) => {
      u.target === u.currentTarget && (t(), l());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function HP(e, t, n, r) {
  let i = n ? "enter" : "leave",
    o = On(),
    s = r !== void 0 ? VP(r) : () => {};
  i === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let a = et(i, { enter: () => t.enter, leave: () => t.leave }),
    l = et(i, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    u = et(i, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    tc(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    ec(e, ...t.base, ...a, ...u),
    o.nextFrame(() => {
      tc(e, ...t.base, ...a, ...u),
        ec(e, ...t.base, ...a, ...l),
        WP(
          e,
          () => (tc(e, ...t.base, ...a), ec(e, ...t.base, ...t.entered), s())
        );
    }),
    o.dispose
  );
}
function KP({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: i,
  onStop: o,
}) {
  let s = qf(),
    a = ml(),
    l = or(n);
  Ut(() => {
    e && (l.current = "enter");
  }, [e]),
    Ut(() => {
      let u = On();
      a.add(u.dispose);
      let f = t.current;
      if (f && l.current !== "idle" && s.current)
        return (
          u.dispose(),
          i.current(l.current),
          u.add(
            HP(f, r.current, l.current === "enter", () => {
              u.dispose(), o.current(l.current);
            })
          ),
          u.dispose
        );
    }, [n]);
}
function Ln(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let vl = C.createContext(null);
vl.displayName = "TransitionContext";
var qP = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(qP || {});
function XP() {
  let e = C.useContext(vl);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function YP() {
  let e = C.useContext(yl);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let yl = C.createContext(null);
yl.displayName = "NestingContext";
function xl(e) {
  return "children" in e
    ? xl(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Cy(e, t) {
  let n = or(e),
    r = C.useRef([]),
    i = qf(),
    o = ml(),
    s = fe((S, y = Yn.Hidden) => {
      let g = r.current.findIndex(({ el: E }) => E === S);
      g !== -1 &&
        (et(y, {
          [Yn.Unmount]() {
            r.current.splice(g, 1);
          },
          [Yn.Hidden]() {
            r.current[g].state = "hidden";
          },
        }),
        o.microTask(() => {
          var E;
          !xl(r) && i.current && ((E = n.current) == null || E.call(n));
        }));
    }),
    a = fe((S) => {
      let y = r.current.find(({ el: g }) => g === S);
      return (
        y
          ? y.state !== "visible" && (y.state = "visible")
          : r.current.push({ el: S, state: "visible" }),
        () => s(S, Yn.Unmount)
      );
    }),
    l = C.useRef([]),
    u = C.useRef(Promise.resolve()),
    f = C.useRef({ enter: [], leave: [], idle: [] }),
    h = fe((S, y, g) => {
      l.current.splice(0),
        t &&
          (t.chains.current[y] = t.chains.current[y].filter(([E]) => E !== S)),
        t == null ||
          t.chains.current[y].push([
            S,
            new Promise((E) => {
              l.current.push(E);
            }),
          ]),
        t == null ||
          t.chains.current[y].push([
            S,
            new Promise((E) => {
              Promise.all(f.current[y].map(([w, m]) => m)).then(() => E());
            }),
          ]),
        y === "enter"
          ? (u.current = u.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => g(y)))
          : g(y);
    }),
    p = fe((S, y, g) => {
      Promise.all(f.current[y].splice(0).map(([E, w]) => w))
        .then(() => {
          var E;
          (E = l.current.shift()) == null || E();
        })
        .then(() => g(y));
    });
  return C.useMemo(
    () => ({
      children: r,
      register: a,
      unregister: s,
      onStart: h,
      onStop: p,
      wait: u,
      chains: f,
    }),
    [a, s, r, h, p, f, u]
  );
}
function QP() {}
let GP = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Th(e) {
  var t;
  let n = {};
  for (let r of GP) n[r] = (t = e[r]) != null ? t : QP;
  return n;
}
function JP(e) {
  let t = C.useRef(Th(e));
  return (
    C.useEffect(() => {
      t.current = Th(e);
    }, [e]),
    t
  );
}
let ZP = "div",
  Ty = _i.RenderStrategy;
function e2(e, t) {
  var n, r;
  let {
      beforeEnter: i,
      afterEnter: o,
      beforeLeave: s,
      afterLeave: a,
      enter: l,
      enterFrom: u,
      enterTo: f,
      entered: h,
      leave: p,
      leaveFrom: S,
      leaveTo: y,
      ...g
    } = e,
    E = C.useRef(null),
    w = Rn(E, t),
    m = (n = g.unmount) == null || n ? Yn.Unmount : Yn.Hidden,
    { show: d, appear: v, initial: x } = XP(),
    [b, _] = C.useState(d ? "visible" : "hidden"),
    P = YP(),
    { register: N, unregister: O } = P;
  C.useEffect(() => N(E), [N, E]),
    C.useEffect(() => {
      if (m === Yn.Hidden && E.current) {
        if (d && b !== "visible") {
          _("visible");
          return;
        }
        return et(b, { hidden: () => O(E), visible: () => N(E) });
      }
    }, [b, E, N, O, d, m]);
  let M = or({
      base: Ln(g.className),
      enter: Ln(l),
      enterFrom: Ln(u),
      enterTo: Ln(f),
      entered: Ln(h),
      leave: Ln(p),
      leaveFrom: Ln(S),
      leaveTo: Ln(y),
    }),
    T = JP({ beforeEnter: i, afterEnter: o, beforeLeave: s, afterLeave: a }),
    I = Bf();
  C.useEffect(() => {
    if (I && b === "visible" && E.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [E, b, I]);
  let R = x && !v,
    $ = v && d && x,
    z = !I || R ? "idle" : d ? "enter" : "leave",
    U = BP(0),
    D = fe((Q) =>
      et(Q, {
        enter: () => {
          U.addFlag(He.Opening), T.current.beforeEnter();
        },
        leave: () => {
          U.addFlag(He.Closing), T.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    V = fe((Q) =>
      et(Q, {
        enter: () => {
          U.removeFlag(He.Opening), T.current.afterEnter();
        },
        leave: () => {
          U.removeFlag(He.Closing), T.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    W = Cy(() => {
      _("hidden"), O(E);
    }, P),
    G = C.useRef(!1);
  KP({
    immediate: $,
    container: E,
    classes: M,
    direction: z,
    onStart: or((Q) => {
      (G.current = !0), W.onStart(E, Q, D);
    }),
    onStop: or((Q) => {
      (G.current = !1),
        W.onStop(E, Q, V),
        Q === "leave" && !xl(W) && (_("hidden"), O(E));
    }),
  });
  let J = g,
    se = { ref: w };
  return (
    $
      ? (J = {
          ...J,
          className: Fa(
            g.className,
            ...M.current.enter,
            ...M.current.enterFrom
          ),
        })
      : G.current &&
        ((J.className = Fa(
          g.className,
          (r = E.current) == null ? void 0 : r.className
        )),
        J.className === "" && delete J.className),
    X.createElement(
      yl.Provider,
      { value: W },
      X.createElement(
        Kf,
        { value: et(b, { visible: He.Open, hidden: He.Closed }) | U.flags },
        Mn({
          ourProps: se,
          theirProps: J,
          defaultTag: ZP,
          features: Ty,
          visible: b === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function t2(e, t) {
  let { show: n, appear: r = !1, unmount: i = !0, ...o } = e,
    s = C.useRef(null),
    a = Rn(s, t);
  Bf();
  let l = hl();
  if (
    (n === void 0 && l !== null && (n = (l & He.Open) === He.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [u, f] = C.useState(n ? "visible" : "hidden"),
    h = Cy(() => {
      f("hidden");
    }),
    [p, S] = C.useState(!0),
    y = C.useRef([n]);
  Ut(() => {
    p !== !1 &&
      y.current[y.current.length - 1] !== n &&
      (y.current.push(n), S(!1));
  }, [y, n]);
  let g = C.useMemo(() => ({ show: n, appear: r, initial: p }), [n, r, p]);
  C.useEffect(() => {
    if (n) f("visible");
    else if (!xl(h)) f("hidden");
    else {
      let d = s.current;
      if (!d) return;
      let v = d.getBoundingClientRect();
      v.x === 0 && v.y === 0 && v.width === 0 && v.height === 0 && f("hidden");
    }
  }, [n, h]);
  let E = { unmount: i },
    w = fe(() => {
      var d;
      p && S(!1), (d = e.beforeEnter) == null || d.call(e);
    }),
    m = fe(() => {
      var d;
      p && S(!1), (d = e.beforeLeave) == null || d.call(e);
    });
  return X.createElement(
    yl.Provider,
    { value: h },
    X.createElement(
      vl.Provider,
      { value: g },
      Mn({
        ourProps: {
          ...E,
          as: C.Fragment,
          children: X.createElement(jy, {
            ref: a,
            ...E,
            ...o,
            beforeEnter: w,
            beforeLeave: m,
          }),
        },
        theirProps: {},
        defaultTag: C.Fragment,
        features: Ty,
        visible: u === "visible",
        name: "Transition",
      })
    )
  );
}
function n2(e, t) {
  let n = C.useContext(vl) !== null,
    r = hl() !== null;
  return X.createElement(
    X.Fragment,
    null,
    !n && r
      ? X.createElement(gd, { ref: t, ...e })
      : X.createElement(jy, { ref: t, ...e })
  );
}
let gd = gn(t2),
  jy = gn(e2),
  r2 = gn(n2),
  i2 = Object.assign(gd, { Child: r2, Root: gd });
function o2({ title: e, titleId: t, ...n }, r) {
  return C.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? C.createElement("title", { id: t }, e) : null,
    C.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    })
  );
}
const s2 = C.forwardRef(o2),
  a2 = s2;
function l2({ title: e, titleId: t, ...n }, r) {
  return C.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? C.createElement("title", { id: t }, e) : null,
    C.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
    })
  );
}
const u2 = C.forwardRef(l2),
  jh = u2;
function c2({ title: e, titleId: t, ...n }, r) {
  return C.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? C.createElement("title", { id: t }, e) : null,
    C.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18 18 6M6 6l12 12",
    })
  );
}
const d2 = C.forwardRef(c2),
  f2 = d2;
function p2(e) {
  return new Promise(async (t, n) => {
    const i = await (
      await fetch("/api/cart/addtocart", {
        method: "POST",
        body: JSON.stringify(e),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
    ).json();
    i.success == !0 ? t(i) : n(i.message);
  });
}
function m2(e, t) {
  return new Promise(async (n, r) => {
    const o = await (
      await fetch("/api/cart/deletefromcart", {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e, t),
      })
    ).json();
    o.success == !0 ? n({ data: o }) : r(o.message);
  });
}
function h2(e) {
  return new Promise(async (t) => {
    const r = await (
      await fetch("/api/cart/fetchcart", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ userId: e }),
        headers: { "Content-Type": "application/json" },
      })
    ).json();
    t({ data: r });
  });
}
const g2 = {
    status: { state: "idle", message: "aayush" },
    cart: [],
    isCart: !0,
  },
  vd = rn("cart/addToCart", async (e) => (await p2(e)).cart),
  za = rn("cart/deleteCart", async (e, t) => (await m2(e, t)).data),
  yd = rn("/cart/fetchcart", async (e) => (await h2(e)).data),
  Ny = Yo({
    name: "cart",
    initialState: g2,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(vd.pending, (t, n) => {
        t.status = { state: "loading", message: "adding item...." };
      })
        .addCase(vd.fulfilled, (t, n) => {
          (t.status = { state: "success", message: "item added successfully" }),
            (t.cart = n.payload);
        })
        .addCase(za.pending, (t, n) => {
          t.status = "Loading";
        })
        .addCase(za.fulfilled, (t, n) => {
          t.cart = n.payload.cart;
        })
        .addCase(yd.pending, (t, n) => {
          t.status = "Loading";
        })
        .addCase(yd.fulfilled, (t, n) => {
          (t.cart = n.payload.cart), (t.isCart = !0);
        });
    },
  }),
  Zf = (e) => e.cart.cart;
Ny.actions;
const v2 = Ny.reducer;
function y2() {
  return new Promise(async (e, t) => {
    const r = await (
      await fetch("/api/user/fetch", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
    ).json();
    r.success == !0 ? e(r) : t(r.message);
  });
}
const x2 = { customer: !1 },
  xd = rn("customer/fetchUser", async () => await y2()),
  ky = Yo({
    name: "customer",
    initialState: x2,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(xd.pending, (t, n) => {
        t.status = "Loading";
      }).addCase(xd.fulfilled, (t, n) => {
        (t.status = "success"), (t.customer = n.payload.user);
      });
    },
  });
ky.actions;
const Ni = (e) => e.customer.customer,
  w2 = ky.reducer,
  Nh = [
    { name: "Home", href: "/", current: !0 },
    { name: "Men", href: "/men", current: !1 },
    { name: "Women", href: "/women", current: !1 },
    { name: "Kids", href: "/kids", current: !1 },
  ];
function Wi(...e) {
  return e.filter(Boolean).join(" ");
}
const S2 = () => {
    const e = de(Zf),
      t = de(Ni),
      n = e.reduce((i, o) => o.quantity + i, 0),
      r = async () => {
        (
          await (
            await fetch("/api/auth/logout", {
              method: "GET",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
            })
          ).json()
        ).success == !0 &&
          (toast.success("Logged Out Successfully"),
          setInterval(() => {
            localStorage.removeItem("user"), window.location.replace("/");
          }, 3e3));
      };
    return c.jsx("div", {
      className: "min-h-full",
      children: c.jsx(Ju, {
        as: "nav",
        className: "bg-gray-800",
        children: ({ open: i }) =>
          c.jsxs(c.Fragment, {
            children: [
              c.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: c.jsxs("div", {
                  className: "flex h-16 items-center justify-between",
                  children: [
                    c.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        c.jsx("div", {
                          className: "flex-shrink-0 ml-0",
                          children: c.jsx(te, {
                            to: "/",
                            children: c.jsx("img", {
                              className: "h-8 w-8",
                              src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
                              alt: "Your Company",
                            }),
                          }),
                        }),
                        t &&
                          c.jsxs("div", {
                            className: "ml-2  text-sm text-white",
                            children: ["Welcome, ", t.name],
                          }),
                        c.jsx("div", {
                          className: "hidden md:block",
                          children: c.jsx("div", {
                            className: "ml-10 flex items-baseline space-x-4",
                            children: Nh.map((o) =>
                              c.jsx(
                                te,
                                {
                                  to: o.href,
                                  className: Wi(
                                    o.current
                                      ? "bg-gray-900 text-white"
                                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                    "rounded-md px-3 py-2 text-sm font-medium"
                                  ),
                                  "aria-current": o.current ? "page" : void 0,
                                  children: o.name,
                                },
                                o.name
                              )
                            ),
                          }),
                        }),
                      ],
                    }),
                    c.jsx("div", {
                      className: "hidden md:block",
                      children: c.jsxs("div", {
                        className: "ml-4 flex items-center md:ml-6",
                        children: [
                          c.jsx("div", {
                            className:
                              "relative ml-4 flex items-center md:ml-6",
                            children: c.jsxs(te, {
                              to: "/cart",
                              className: "relative",
                              children: [
                                c.jsx("button", {
                                  type: "button",
                                  className:
                                    "rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                  children: c.jsx(jh, {
                                    className: "h-6 w-6",
                                    "aria-hidden": "true",
                                  }),
                                }),
                                n >= 0 &&
                                  c.jsx("span", {
                                    className:
                                      "absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 bg-red-500 text-white rounded-full text-xs",
                                    children: n,
                                  }),
                              ],
                            }),
                          }),
                          t
                            ? c.jsxs(Ur, {
                                as: "div",
                                className: "ml-4 relative flex-shrink-0",
                                children: [
                                  c.jsx("div", {
                                    children: c.jsx(Ur.Button, {
                                      className: "bg-gray-800 flex",
                                      children: c.jsx("div", {
                                        className:
                                          "bg-gray-900 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white cursor-pointer z-10",
                                        children: "Your Profile",
                                      }),
                                    }),
                                  }),
                                  c.jsx(i2, {
                                    as: C.Fragment,
                                    enter: "transition ease-out duration-200",
                                    enterFrom: "transform opacity-0 scale-95",
                                    enterTo: "transform opacity-100 scale-100",
                                    leave: "transition ease-in duration-75",
                                    leaveFrom:
                                      "transform opacity-100 scale-100",
                                    leaveTo: "transform opacity-0 scale-95",
                                    children: c.jsx(Ur.Items, {
                                      className:
                                        "absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50",
                                      children: c.jsxs("div", {
                                        className: "py-1",
                                        children: [
                                          c.jsx(Ur.Item, {
                                            children: ({ active: o }) =>
                                              c.jsx(te, {
                                                to: "/account",
                                                className: Wi(
                                                  o ? "bg-gray-100" : "",
                                                  "block px-4 py-2 text-sm text-gray-700"
                                                ),
                                                children: "Account",
                                              }),
                                          }),
                                          c.jsx(Ur.Item, {
                                            children: ({ active: o }) =>
                                              c.jsx(te, {
                                                to: "/orders",
                                                className: Wi(
                                                  o ? "bg-gray-100" : "",
                                                  "block px-4 py-2 text-sm text-gray-700"
                                                ),
                                                children: "Orders",
                                              }),
                                          }),
                                          c.jsx(Ur.Item, {
                                            children: ({ active: o }) =>
                                              c.jsx("div", {
                                                onClick: r,
                                                className: Wi(
                                                  o ? "bg-gray-100" : "",
                                                  "block px-4 py-2 text-sm text-gray-700"
                                                ),
                                                children: "Logout",
                                              }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              })
                            : c.jsxs("div", {
                                className:
                                  "ml-4 flex items-center md:ml-6 space-x-4",
                                children: [
                                  c.jsx(te, {
                                    to: "/login",
                                    children: c.jsx("button", {
                                      type: "button",
                                      className:
                                        "bg-gray-800 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                                      children: "Login",
                                    }),
                                  }),
                                  c.jsx(te, {
                                    to: "/signup",
                                    children: c.jsx("button", {
                                      type: "button",
                                      className:
                                        "bg-gray-800 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                                      children: "Sign Up",
                                    }),
                                  }),
                                ],
                              }),
                        ],
                      }),
                    }),
                    c.jsx("div", {
                      className: "-mr-2 flex md:hidden",
                      children: c.jsxs(Ju.Button, {
                        className:
                          "relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                        children: [
                          c.jsx("span", { className: "absolute -inset-0.5" }),
                          c.jsx("span", {
                            className: "sr-only",
                            children: "Open main menu",
                          }),
                          i
                            ? c.jsx(f2, {
                                className: "block h-6 w-6",
                                "aria-hidden": "true",
                              })
                            : c.jsx(a2, {
                                className: "block h-6 w-6",
                                "aria-hidden": "true",
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              c.jsxs(Ju.Panel, {
                className: "md:hidden",
                children: [
                  c.jsx("div", {
                    className: "space-y-1 px-2 pb-3 pt-2 sm:px-3",
                    children: Nh.map((o) =>
                      c.jsx(
                        te,
                        {
                          to: o.href,
                          className: Wi(
                            o.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          ),
                          "aria-current": o.current ? "page" : void 0,
                          children: o.name,
                        },
                        o.name
                      )
                    ),
                  }),
                  c.jsxs("div", {
                    className: "border-t border-gray-700 pb-3 pt-4",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-center px-5",
                        children: [
                          c.jsx(te, {
                            to: "/cart",
                            children: c.jsxs("button", {
                              type: "button",
                              className:
                                "relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                              children: [
                                c.jsx("span", {
                                  className: "absolute -inset-1.5",
                                }),
                                c.jsx("span", {
                                  className: "sr-only",
                                  children: "View notifications",
                                }),
                                c.jsx(jh, {
                                  className: "h-6 w-6",
                                  "aria-hidden": "true",
                                }),
                                n >= 0 &&
                                  c.jsx("span", {
                                    className:
                                      "absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 bg-red-500 text-white rounded-full text-xs",
                                    children: n,
                                  }),
                              ],
                            }),
                          }),
                          t == !1 &&
                            c.jsxs(c.Fragment, {
                              children: [
                                c.jsx(te, {
                                  to: "/login",
                                  children: c.jsx("button", {
                                    type: "button",
                                    className:
                                      "bg-gray-800 ml-8 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                                    children: "Login",
                                  }),
                                }),
                                c.jsx(te, {
                                  to: "/signup",
                                  children: c.jsx("button", {
                                    type: "button",
                                    className:
                                      "bg-gray-800 ml-5 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                                    children: "Sign Up",
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                      t &&
                        c.jsx("div", {
                          className: "pt-4 pb-3 border-t border-gray-700",
                          children: c.jsxs("div", {
                            className: "mt-3 px-2 space-y-1",
                            children: [
                              c.jsx(te, {
                                to: "/account",
                                className:
                                  "block px-3 py-2 text-base rounded-md text-gray-300 hover:text-white hover:bg-gray-700",
                                children: "Account",
                              }),
                              c.jsx(te, {
                                to: "/orders",
                                className:
                                  "block px-3 py-2 text-base rounded-md text-gray-300 hover:text-white hover:bg-gray-700",
                                children: "Orders",
                              }),
                              c.jsx("div", {
                                onClick: r,
                                className:
                                  "block px-3 py-2 text-base rounded-md text-gray-300 hover:text-white hover:bg-gray-700",
                                children: "Logout",
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      }),
    });
  },
  _2 = () => c.jsx(DE, {}),
  b2 = () => {
    const t = de(Ni)._id,
      n = hr(),
      r = de(Zf),
      i = r.reduce((s, a) => a.quantity * a.product.new_price + s, 0),
      o = (s, a, l) => {
        s.preventDefault(),
          Z.success("🛒 Item Removed ", { position: "bottom-left" }),
          n(za({ productId: l, userId: a }));
      };
    return c.jsxs("div", {
      className: "mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8 bg-white",
      children: [
        c.jsx("h2", {
          className: "text-4xl font-bold tracking-tight text-gray-900",
          children: "Cart",
        }),
        c.jsx("div", {
          className: "mt-8",
          children: c.jsx("div", {
            className: "flow-root",
            children: c.jsx("ul", {
              role: "list",
              className: "-my-6 divide-y divide-gray-200",
              children: r.map((s, a) =>
                c.jsxs(
                  "li",
                  {
                    className: "flex py-6",
                    children: [
                      c.jsx("div", {
                        className:
                          "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",
                        children: c.jsx("img", {
                          src: s.product.image.imageUrl,
                          alt: s.product.image.imageUrl,
                          className: "h-full w-full object-cover object-center",
                        }),
                      }),
                      c.jsxs("div", {
                        className: "ml-4 flex flex-1 flex-col",
                        children: [
                          c.jsx("div", {
                            children: c.jsxs("div", {
                              className:
                                "flex justify-between text-base font-medium text-gray-900",
                              children: [
                                c.jsx("h3", {
                                  children: c.jsx("a", {
                                    href: s.href,
                                    children: s.product.name,
                                  }),
                                }),
                                c.jsxs("p", {
                                  className: "ml-4",
                                  children: ["₹", s.product.new_price],
                                }),
                              ],
                            }),
                          }),
                          c.jsxs("div", {
                            className:
                              "flex flex-1 items-end justify-between text-sm",
                            children: [
                              c.jsxs("div", {
                                className: "text-gray-500",
                                children: [
                                  " ",
                                  c.jsx("label", {
                                    htmlFor: "quantity",
                                    className:
                                      "inline mr-5 text-sm font-medium leading-6 text-gray-900",
                                    children: "Qty",
                                  }),
                                  " ",
                                  c.jsxs("select", {
                                    name: "quantity",
                                    id: "quantity",
                                    children: [
                                      c.jsx("option", {
                                        value: s.quantity,
                                        children: s.quantity,
                                      }),
                                      c.jsx("option", {
                                        value: "1",
                                        children: "One",
                                      }),
                                      c.jsx("option", {
                                        value: "2",
                                        children: "Two",
                                      }),
                                      c.jsx("option", {
                                        value: "3",
                                        children: "Three",
                                      }),
                                      c.jsx("option", {
                                        value: "4",
                                        children: "Four",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsx("div", {
                                className: "flex",
                                children: c.jsx("button", {
                                  type: "button",
                                  onClick: (l) => o(l, t, s.product._id),
                                  className:
                                    "font-medium text-indigo-600 hover:text-indigo-500",
                                  children: "Remove",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  a
                )
              ),
            }),
          }),
        }),
        c.jsxs("div", {
          className: "mt-8",
          children: [
            c.jsxs("div", {
              className:
                "flex justify-between text-base font-medium text-gray-900",
              children: [
                c.jsx("p", { children: "Subtotal" }),
                c.jsxs("p", { children: ["₹", i] }),
              ],
            }),
            c.jsx("p", {
              className: "mt-0.5 text-sm text-gray-500",
              children: "Shipping and taxes calculated at checkout.",
            }),
            c.jsx("div", {
              className: "mt-6",
              children: c.jsx(te, {
                className:
                  "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700",
                to: "/checkout",
                children: "Checkout",
              }),
            }),
            c.jsx("div", {
              className:
                "mt-6 flex justify-center text-center text-sm text-gray-500",
              children: c.jsxs("p", {
                className: "mb-4",
                children: [
                  "or",
                  " ",
                  c.jsxs("button", {
                    type: "button",
                    className:
                      "font-medium text-indigo-600 hover:text-indigo-500",
                    children: [
                      c.jsx(te, { to: "/", children: "Continue Shopping" }),
                      c.jsx("span", { "aria-hidden": "true", children: " →" }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  E2 = () => c.jsx(b2, {});
function gr(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function oe() {
  return (
    (oe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oe.apply(this, arguments)
  );
}
function P2(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((i) => {
      r[i] = e[i]
        .reduce((o, s) => {
          if (s) {
            const a = t(s);
            a !== "" && o.push(a), n && n[s] && o.push(n[s]);
          }
          return o;
        }, [])
        .join(" ");
    }),
    r
  );
}
function Mo(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const C2 = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Mo }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Oy(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var T2 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  j2 = Oy(function (e) {
    return (
      T2.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function N2(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function k2(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var O2 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(k2(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = N2(i);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Je = "-ms-",
  Ua = "-moz-",
  re = "-webkit-",
  Iy = "comm",
  ep = "rule",
  tp = "decl",
  I2 = "@import",
  Dy = "@keyframes",
  D2 = "@layer",
  A2 = Math.abs,
  wl = String.fromCharCode,
  R2 = Object.assign;
function M2(e, t) {
  return We(e, 0) ^ 45
    ? (((((((t << 2) ^ We(e, 0)) << 2) ^ We(e, 1)) << 2) ^ We(e, 2)) << 2) ^
        We(e, 3)
    : 0;
}
function Ay(e) {
  return e.trim();
}
function $2(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, n) {
  return e.replace(t, n);
}
function wd(e, t) {
  return e.indexOf(t);
}
function We(e, t) {
  return e.charCodeAt(t) | 0;
}
function $o(e, t, n) {
  return e.slice(t, n);
}
function an(e) {
  return e.length;
}
function np(e) {
  return e.length;
}
function ks(e, t) {
  return t.push(e), e;
}
function L2(e, t) {
  return e.map(t).join("");
}
var Sl = 1,
  bi = 1,
  Ry = 0,
  mt = 0,
  Oe = 0,
  ki = "";
function _l(e, t, n, r, i, o, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Sl,
    column: bi,
    length: s,
    return: "",
  };
}
function Hi(e, t) {
  return R2(_l("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function F2() {
  return Oe;
}
function z2() {
  return (
    (Oe = mt > 0 ? We(ki, --mt) : 0), bi--, Oe === 10 && ((bi = 1), Sl--), Oe
  );
}
function Ct() {
  return (
    (Oe = mt < Ry ? We(ki, mt++) : 0), bi++, Oe === 10 && ((bi = 1), Sl++), Oe
  );
}
function pn() {
  return We(ki, mt);
}
function Qs() {
  return mt;
}
function Zo(e, t) {
  return $o(ki, e, t);
}
function Lo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function My(e) {
  return (Sl = bi = 1), (Ry = an((ki = e))), (mt = 0), [];
}
function $y(e) {
  return (ki = ""), e;
}
function Gs(e) {
  return Ay(Zo(mt - 1, Sd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function U2(e) {
  for (; (Oe = pn()) && Oe < 33; ) Ct();
  return Lo(e) > 2 || Lo(Oe) > 3 ? "" : " ";
}
function B2(e, t) {
  for (
    ;
    --t &&
    Ct() &&
    !(Oe < 48 || Oe > 102 || (Oe > 57 && Oe < 65) || (Oe > 70 && Oe < 97));

  );
  return Zo(e, Qs() + (t < 6 && pn() == 32 && Ct() == 32));
}
function Sd(e) {
  for (; Ct(); )
    switch (Oe) {
      case e:
        return mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sd(Oe);
        break;
      case 40:
        e === 41 && Sd(e);
        break;
      case 92:
        Ct();
        break;
    }
  return mt;
}
function V2(e, t) {
  for (; Ct() && e + Oe !== 57; ) if (e + Oe === 84 && pn() === 47) break;
  return "/*" + Zo(t, mt - 1) + "*" + wl(e === 47 ? e : Ct());
}
function W2(e) {
  for (; !Lo(pn()); ) Ct();
  return Zo(e, mt);
}
function H2(e) {
  return $y(Js("", null, null, null, [""], (e = My(e)), 0, [0], e));
}
function Js(e, t, n, r, i, o, s, a, l) {
  for (
    var u = 0,
      f = 0,
      h = s,
      p = 0,
      S = 0,
      y = 0,
      g = 1,
      E = 1,
      w = 1,
      m = 0,
      d = "",
      v = i,
      x = o,
      b = r,
      _ = d;
    E;

  )
    switch (((y = m), (m = Ct()))) {
      case 40:
        if (y != 108 && We(_, h - 1) == 58) {
          wd((_ += ie(Gs(m), "&", "&\f")), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Gs(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += U2(y);
        break;
      case 92:
        _ += B2(Qs() - 1, 7);
        continue;
      case 47:
        switch (pn()) {
          case 42:
          case 47:
            ks(K2(V2(Ct(), Qs()), t, n), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * g:
        a[u++] = an(_) * w;
      case 125 * g:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            E = 0;
          case 59 + f:
            w == -1 && (_ = ie(_, /\f/g, "")),
              S > 0 &&
                an(_) - h &&
                ks(
                  S > 32
                    ? Oh(_ + ";", r, n, h - 1)
                    : Oh(ie(_, " ", "") + ";", r, n, h - 2),
                  l
                );
            break;
          case 59:
            _ += ";";
          default:
            if (
              (ks((b = kh(_, t, n, u, f, i, a, d, (v = []), (x = []), h)), o),
              m === 123)
            )
              if (f === 0) Js(_, t, b, b, v, o, h, a, x);
              else
                switch (p === 99 && We(_, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Js(
                      e,
                      b,
                      b,
                      r && ks(kh(e, b, b, 0, 0, i, a, d, i, (v = []), h), x),
                      i,
                      x,
                      h,
                      a,
                      r ? v : x
                    );
                    break;
                  default:
                    Js(_, b, b, b, [""], x, 0, a, x);
                }
        }
        (u = f = S = 0), (g = w = 1), (d = _ = ""), (h = s);
        break;
      case 58:
        (h = 1 + an(_)), (S = y);
      default:
        if (g < 1) {
          if (m == 123) --g;
          else if (m == 125 && g++ == 0 && z2() == 125) continue;
        }
        switch (((_ += wl(m)), m * g)) {
          case 38:
            w = f > 0 ? 1 : ((_ += "\f"), -1);
            break;
          case 44:
            (a[u++] = (an(_) - 1) * w), (w = 1);
            break;
          case 64:
            pn() === 45 && (_ += Gs(Ct())),
              (p = pn()),
              (f = h = an((d = _ += W2(Qs())))),
              m++;
            break;
          case 45:
            y === 45 && an(_) == 2 && (g = 0);
        }
    }
  return o;
}
function kh(e, t, n, r, i, o, s, a, l, u, f) {
  for (
    var h = i - 1, p = i === 0 ? o : [""], S = np(p), y = 0, g = 0, E = 0;
    y < r;
    ++y
  )
    for (var w = 0, m = $o(e, h + 1, (h = A2((g = s[y])))), d = e; w < S; ++w)
      (d = Ay(g > 0 ? p[w] + " " + m : ie(m, /&\f/g, p[w]))) && (l[E++] = d);
  return _l(e, t, n, i === 0 ? ep : a, l, u, f);
}
function K2(e, t, n) {
  return _l(e, t, n, Iy, wl(F2()), $o(e, 2, -2), 0);
}
function Oh(e, t, n, r) {
  return _l(e, t, n, tp, $o(e, 0, r), $o(e, r + 1, -1), r);
}
function fi(e, t) {
  for (var n = "", r = np(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
  return n;
}
function q2(e, t, n, r) {
  switch (e.type) {
    case D2:
      if (e.children.length) break;
    case I2:
    case tp:
      return (e.return = e.return || e.value);
    case Iy:
      return "";
    case Dy:
      return (e.return = e.value + "{" + fi(e.children, r) + "}");
    case ep:
      e.value = e.props.join(",");
  }
  return an((n = fi(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function X2(e) {
  var t = np(e);
  return function (n, r, i, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, i, o) || "";
    return s;
  };
}
function Y2(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Q2 = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = pn()), i === 38 && o === 12 && (n[r] = 1), !Lo(o);

    )
      Ct();
    return Zo(t, mt);
  },
  G2 = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (Lo(i)) {
        case 0:
          i === 38 && pn() === 12 && (n[r] = 1), (t[r] += Q2(mt - 1, n, r));
          break;
        case 2:
          t[r] += Gs(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = pn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += wl(i);
      }
    while ((i = Ct()));
    return t;
  },
  J2 = function (t, n) {
    return $y(G2(My(t), n));
  },
  Ih = new WeakMap(),
  Z2 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ih.get(r)) &&
        !i
      ) {
        Ih.set(t, !0);
        for (
          var o = [], s = J2(n, o), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var f = 0; f < a.length; f++, u++)
            t.props[u] = o[l] ? s[l].replace(/&\f/g, a[f]) : a[f] + " " + s[l];
      }
    }
  },
  eC = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Ly(e, t) {
  switch (M2(e, t)) {
    case 5103:
      return re + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return re + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return re + e + Ua + e + Je + e + e;
    case 6828:
    case 4268:
      return re + e + Je + e + e;
    case 6165:
      return re + e + Je + "flex-" + e + e;
    case 5187:
      return (
        re + e + ie(e, /(\w+).+(:[^]+)/, re + "box-$1$2" + Je + "flex-$1$2") + e
      );
    case 5443:
      return re + e + Je + "flex-item-" + ie(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        re +
        e +
        Je +
        "flex-line-pack" +
        ie(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return re + e + Je + ie(e, "shrink", "negative") + e;
    case 5292:
      return re + e + Je + ie(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        re +
        "box-" +
        ie(e, "-grow", "") +
        re +
        e +
        Je +
        ie(e, "grow", "positive") +
        e
      );
    case 4554:
      return re + ie(e, /([^-])(transform)/g, "$1" + re + "$2") + e;
    case 6187:
      return (
        ie(
          ie(ie(e, /(zoom-|grab)/, re + "$1"), /(image-set)/, re + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, re + "$1$`$1");
    case 4968:
      return (
        ie(
          ie(e, /(.+:)(flex-)?(.*)/, re + "box-pack:$3" + Je + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        re +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, re + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (an(e) - 1 - t > 6)
        switch (We(e, t + 1)) {
          case 109:
            if (We(e, t + 4) !== 45) break;
          case 102:
            return (
              ie(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  re +
                  "$2-$3$1" +
                  Ua +
                  (We(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~wd(e, "stretch")
              ? Ly(ie(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (We(e, t + 1) !== 115) break;
    case 6444:
      switch (We(e, an(e) - 3 - (~wd(e, "!important") && 10))) {
        case 107:
          return ie(e, ":", ":" + re) + e;
        case 101:
          return (
            ie(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                re +
                (We(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                re +
                "$2$3$1" +
                Je +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (We(e, t + 11)) {
        case 114:
          return re + e + Je + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return re + e + Je + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return re + e + Je + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return re + e + Je + e + e;
  }
  return e;
}
var tC = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case tp:
          t.return = Ly(t.value, t.length);
          break;
        case Dy:
          return fi([Hi(t, { value: ie(t.value, "@", "@" + re) })], i);
        case ep:
          if (t.length)
            return L2(t.props, function (o) {
              switch ($2(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return fi(
                    [Hi(t, { props: [ie(o, /:(read-\w+)/, ":" + Ua + "$1")] })],
                    i
                  );
                case "::placeholder":
                  return fi(
                    [
                      Hi(t, {
                        props: [ie(o, /:(plac\w+)/, ":" + re + "input-$1")],
                      }),
                      Hi(t, { props: [ie(o, /:(plac\w+)/, ":" + Ua + "$1")] }),
                      Hi(t, { props: [ie(o, /:(plac\w+)/, Je + "input-$1")] }),
                    ],
                    i
                  );
              }
              return "";
            });
      }
  },
  nC = [tC],
  Fy = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var E = g.getAttribute("data-emotion");
        E.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var i = t.stylisPlugins || nC,
      o = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var E = g.getAttribute("data-emotion").split(" "), w = 1;
            w < E.length;
            w++
          )
            o[E[w]] = !0;
          a.push(g);
        }
      );
    var l,
      u = [Z2, eC];
    {
      var f,
        h = [
          q2,
          Y2(function (g) {
            f.insert(g);
          }),
        ],
        p = X2(u.concat(i, h)),
        S = function (E) {
          return fi(H2(E), p);
        };
      l = function (E, w, m, d) {
        (f = m),
          S(E ? E + "{" + w.styles + "}" : w.styles),
          d && (y.inserted[w.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new O2({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return y.sheet.hydrate(a), y;
  },
  zy = { exports: {} },
  ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ue = typeof Symbol == "function" && Symbol.for,
  rp = Ue ? Symbol.for("react.element") : 60103,
  ip = Ue ? Symbol.for("react.portal") : 60106,
  bl = Ue ? Symbol.for("react.fragment") : 60107,
  El = Ue ? Symbol.for("react.strict_mode") : 60108,
  Pl = Ue ? Symbol.for("react.profiler") : 60114,
  Cl = Ue ? Symbol.for("react.provider") : 60109,
  Tl = Ue ? Symbol.for("react.context") : 60110,
  op = Ue ? Symbol.for("react.async_mode") : 60111,
  jl = Ue ? Symbol.for("react.concurrent_mode") : 60111,
  Nl = Ue ? Symbol.for("react.forward_ref") : 60112,
  kl = Ue ? Symbol.for("react.suspense") : 60113,
  rC = Ue ? Symbol.for("react.suspense_list") : 60120,
  Ol = Ue ? Symbol.for("react.memo") : 60115,
  Il = Ue ? Symbol.for("react.lazy") : 60116,
  iC = Ue ? Symbol.for("react.block") : 60121,
  oC = Ue ? Symbol.for("react.fundamental") : 60117,
  sC = Ue ? Symbol.for("react.responder") : 60118,
  aC = Ue ? Symbol.for("react.scope") : 60119;
function It(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case rp:
        switch (((e = e.type), e)) {
          case op:
          case jl:
          case bl:
          case Pl:
          case El:
          case kl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Tl:
              case Nl:
              case Il:
              case Ol:
              case Cl:
                return e;
              default:
                return t;
            }
        }
      case ip:
        return t;
    }
  }
}
function Uy(e) {
  return It(e) === jl;
}
ue.AsyncMode = op;
ue.ConcurrentMode = jl;
ue.ContextConsumer = Tl;
ue.ContextProvider = Cl;
ue.Element = rp;
ue.ForwardRef = Nl;
ue.Fragment = bl;
ue.Lazy = Il;
ue.Memo = Ol;
ue.Portal = ip;
ue.Profiler = Pl;
ue.StrictMode = El;
ue.Suspense = kl;
ue.isAsyncMode = function (e) {
  return Uy(e) || It(e) === op;
};
ue.isConcurrentMode = Uy;
ue.isContextConsumer = function (e) {
  return It(e) === Tl;
};
ue.isContextProvider = function (e) {
  return It(e) === Cl;
};
ue.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === rp;
};
ue.isForwardRef = function (e) {
  return It(e) === Nl;
};
ue.isFragment = function (e) {
  return It(e) === bl;
};
ue.isLazy = function (e) {
  return It(e) === Il;
};
ue.isMemo = function (e) {
  return It(e) === Ol;
};
ue.isPortal = function (e) {
  return It(e) === ip;
};
ue.isProfiler = function (e) {
  return It(e) === Pl;
};
ue.isStrictMode = function (e) {
  return It(e) === El;
};
ue.isSuspense = function (e) {
  return It(e) === kl;
};
ue.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === bl ||
    e === jl ||
    e === Pl ||
    e === El ||
    e === kl ||
    e === rC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Il ||
        e.$$typeof === Ol ||
        e.$$typeof === Cl ||
        e.$$typeof === Tl ||
        e.$$typeof === Nl ||
        e.$$typeof === oC ||
        e.$$typeof === sC ||
        e.$$typeof === aC ||
        e.$$typeof === iC))
  );
};
ue.typeOf = It;
zy.exports = ue;
var lC = zy.exports,
  By = lC,
  uC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  cC = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Vy = {};
Vy[By.ForwardRef] = uC;
Vy[By.Memo] = cC;
var dC = !0;
function fC(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ";") : (r += i + " ");
    }),
    r
  );
}
var Wy = function (t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || dC === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  Hy = function (t, n, r) {
    Wy(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? "." + i : "", o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function pC(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var mC = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  hC = /[A-Z]|^ms/g,
  gC = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ky = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Dh = function (t) {
    return t != null && typeof t != "boolean";
  },
  nc = Oy(function (e) {
    return Ky(e) ? e : e.replace(hC, "-$&").toLowerCase();
  }),
  Ah = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(gC, function (r, i, o) {
            return (ln = { name: i, styles: o, next: ln }), i;
          });
    }
    return mC[t] !== 1 && !Ky(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Fo(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (ln = { name: n.name, styles: n.styles, next: ln }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (ln = { name: r.name, styles: r.styles, next: ln }), (r = r.next);
        var i = n.styles + ";";
        return i;
      }
      return vC(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var o = ln,
          s = n(e);
        return (ln = o), Fo(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function vC(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += Fo(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += o + "{" + t[s] + "}")
          : Dh(s) && (r += nc(o) + ":" + Ah(o, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          Dh(s[a]) && (r += nc(o) + ":" + Ah(o, s[a]) + ";");
      else {
        var l = Fo(e, t, s);
        switch (o) {
          case "animation":
          case "animationName": {
            r += nc(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
  return r;
}
var Rh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  ln,
  sp = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var i = !0,
      o = "";
    ln = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((i = !1), (o += Fo(r, n, s)))
      : (o += s[0]);
    for (var a = 1; a < t.length; a++) (o += Fo(r, n, t[a])), i && (o += s[a]);
    Rh.lastIndex = 0;
    for (var l = "", u; (u = Rh.exec(o)) !== null; ) l += "-" + u[1];
    var f = pC(o) + l;
    return { name: f, styles: o, next: ln };
  },
  yC = function (t) {
    return t();
  },
  qy = jr.useInsertionEffect ? jr.useInsertionEffect : !1,
  xC = qy || yC,
  Mh = qy || C.useLayoutEffect,
  Xy = C.createContext(typeof HTMLElement < "u" ? Fy({ key: "css" }) : null),
  wC = Xy.Provider,
  Yy = function (t) {
    return C.forwardRef(function (n, r) {
      var i = C.useContext(Xy);
      return t(n, i, r);
    });
  },
  Dl = C.createContext({}),
  rc = { exports: {} },
  $h;
function Qy() {
  return (
    $h ||
      (($h = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var i = arguments[r];
                      for (var o in i)
                        Object.prototype.hasOwnProperty.call(i, o) &&
                          (n[o] = i[o]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(rc)),
    rc.exports
  );
}
Qy();
var SC = Yy(function (e, t) {
  var n = e.styles,
    r = sp([n], void 0, C.useContext(Dl)),
    i = C.useRef();
  return (
    Mh(
      function () {
        var o = t.key + "-global",
          s = new t.sheet.constructor({
            key: o,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector(
            'style[data-emotion="' + o + " " + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null &&
            ((a = !0), l.setAttribute("data-emotion", o), s.hydrate([l])),
          (i.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t]
    ),
    Mh(
      function () {
        var o = i.current,
          s = o[0],
          a = o[1];
        if (a) {
          o[1] = !1;
          return;
        }
        if ((r.next !== void 0 && Hy(t, r.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert("", r, s, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function Al() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return sp(t);
}
var ap = function () {
    var t = Al.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  _C = j2,
  bC = function (t) {
    return t !== "theme";
  },
  Lh = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? _C : bC;
  },
  Fh = function (t, n, r) {
    var i;
    if (n) {
      var o = n.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (s) {
              return t.__emotion_forwardProp(s) && o(s);
            }
          : o;
    }
    return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
  },
  EC = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      Wy(n, r, i),
      xC(function () {
        return Hy(n, r, i);
      }),
      null
    );
  },
  PC = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      s;
    n !== void 0 && ((o = n.label), (s = n.target));
    var a = Fh(t, n, r),
      l = a || Lh(i),
      u = !l("as");
    return function () {
      var f = arguments,
        h =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && h.push("label:" + o + ";"),
        f[0] == null || f[0].raw === void 0)
      )
        h.push.apply(h, f);
      else {
        h.push(f[0][0]);
        for (var p = f.length, S = 1; S < p; S++) h.push(f[S], f[0][S]);
      }
      var y = Yy(function (g, E, w) {
        var m = (u && g.as) || i,
          d = "",
          v = [],
          x = g;
        if (g.theme == null) {
          x = {};
          for (var b in g) x[b] = g[b];
          x.theme = C.useContext(Dl);
        }
        typeof g.className == "string"
          ? (d = fC(E.registered, v, g.className))
          : g.className != null && (d = g.className + " ");
        var _ = sp(h.concat(v), E.registered, x);
        (d += E.key + "-" + _.name), s !== void 0 && (d += " " + s);
        var P = u && a === void 0 ? Lh(m) : l,
          N = {};
        for (var O in g) (u && O === "as") || (P(O) && (N[O] = g[O]));
        return (
          (N.className = d),
          (N.ref = w),
          C.createElement(
            C.Fragment,
            null,
            C.createElement(EC, {
              cache: E,
              serialized: _,
              isStringTag: typeof m == "string",
            }),
            C.createElement(m, N)
          )
        );
      });
      return (
        (y.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof i == "string"
                ? i
                : i.displayName || i.name || "Component") +
              ")"),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = i),
        (y.__emotion_styles = h),
        (y.__emotion_forwardProp = a),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (y.withComponent = function (g, E) {
          return e(g, oe({}, n, E, { shouldForwardProp: Fh(y, E, !0) })).apply(
            void 0,
            h
          );
        }),
        y
      );
    };
  },
  CC = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  _d = PC.bind();
CC.forEach(function (e) {
  _d[e] = _d(e);
});
let bd;
typeof document == "object" && (bd = Fy({ key: "css", prepend: !0 }));
function TC(e) {
  const { injectFirst: t, children: n } = e;
  return t && bd ? c.jsx(wC, { value: bd, children: n }) : n;
}
function jC(e) {
  return e == null || Object.keys(e).length === 0;
}
function NC(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (i) => t(jC(i) ? n : i) : t;
  return c.jsx(SC, { styles: r });
}
function kC(e, t) {
  return _d(e, t);
}
const OC = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  IC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: NC,
        StyledEngineProvider: TC,
        ThemeContext: Dl,
        css: Al,
        default: kC,
        internal_processStyles: OC,
        keyframes: ap,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Wn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function Gy(e) {
  if (!Wn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = Gy(e[n]);
    }),
    t
  );
}
function mn(e, t, n = { clone: !0 }) {
  const r = n.clone ? oe({}, e) : e;
  return (
    Wn(e) &&
      Wn(t) &&
      Object.keys(t).forEach((i) => {
        i !== "__proto__" &&
          (Wn(t[i]) && i in e && Wn(e[i])
            ? (r[i] = mn(e[i], t[i], n))
            : n.clone
            ? (r[i] = Wn(t[i]) ? Gy(t[i]) : t[i])
            : (r[i] = t[i]));
      }),
    r
  );
}
const DC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: mn, isPlainObject: Wn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  AC = ["values", "unit", "step"],
  RC = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => oe({}, n, { [r.key]: r.val }), {})
    );
  };
function Jy(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    i = gr(e, AC),
    o = RC(t),
    s = Object.keys(o);
  function a(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${
      (typeof t[p] == "number" ? t[p] : p) - r / 100
    }${n})`;
  }
  function u(p, S) {
    const y = s.indexOf(S);
    return `@media (min-width:${
      typeof t[p] == "number" ? t[p] : p
    }${n}) and (max-width:${
      (y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : S) - r / 100
    }${n})`;
  }
  function f(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : a(p);
  }
  function h(p) {
    const S = s.indexOf(p);
    return S === 0
      ? a(s[1])
      : S === s.length - 1
      ? l(s[S])
      : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return oe(
    {
      keys: s,
      values: o,
      up: a,
      down: l,
      between: u,
      only: f,
      not: h,
      unit: n,
    },
    i
  );
}
const MC = { borderRadius: 4 },
  $C = MC;
function co(e, t) {
  return t ? mn(e, t, { clone: !1 }) : e;
}
const lp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  zh = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${lp[e]}px)`,
  };
function In(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || zh;
    return t.reduce((s, a, l) => ((s[o.up(o.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || zh;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(o.values || lp).indexOf(a) !== -1) {
        const l = o.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function LC(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, i) => {
          const o = e.up(i);
          return (r[o] = {}), r;
        }, {})) || {}
  );
}
function FC(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Rr(e) {
  if (typeof e != "string") throw new Error(Mo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const zC = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Rr }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Rl(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((i, o) => (i && i[o] ? i[o] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, i) => (r && r[i] != null ? r[i] : null), e);
}
function Ba(e, t, n, r = n) {
  let i;
  return (
    typeof e == "function"
      ? (i = e(n))
      : Array.isArray(e)
      ? (i = e[n] || r)
      : (i = Rl(e, n) || r),
    t && (i = t(i, r, e)),
    i
  );
}
function Ne(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e,
    o = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = Rl(l, r) || {};
      return In(s, a, (h) => {
        let p = Ba(u, i, h);
        return (
          h === p &&
            typeof h == "string" &&
            (p = Ba(u, i, `${t}${h === "default" ? "" : Rr(h)}`, h)),
          n === !1 ? p : { [n]: p }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function UC(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const BC = { m: "margin", p: "padding" },
  VC = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Uh = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  WC = UC((e) => {
    if (e.length > 2)
      if (Uh[e]) e = Uh[e];
      else return [e];
    const [t, n] = e.split(""),
      r = BC[t],
      i = VC[n] || "";
    return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
  }),
  up = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  cp = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...up, ...cp];
function es(e, t, n, r) {
  var i;
  const o = (i = Rl(e, t, !1)) != null ? i : n;
  return typeof o == "number"
    ? (s) => (typeof s == "string" ? s : o * s)
    : Array.isArray(o)
    ? (s) => (typeof s == "string" ? s : o[s])
    : typeof o == "function"
    ? o
    : () => {};
}
function Zy(e) {
  return es(e, "spacing", 8);
}
function ts(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function HC(e, t) {
  return (n) => e.reduce((r, i) => ((r[i] = ts(t, n)), r), {});
}
function KC(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const i = WC(n),
    o = HC(i, r),
    s = e[n];
  return In(e, s, o);
}
function e1(e, t) {
  const n = Zy(e.theme);
  return Object.keys(e)
    .map((r) => KC(e, t, r, n))
    .reduce(co, {});
}
function _e(e) {
  return e1(e, up);
}
_e.propTypes = {};
_e.filterProps = up;
function be(e) {
  return e1(e, cp);
}
be.propTypes = {};
be.filterProps = cp;
function qC(e = 8) {
  if (e.mui) return e;
  const t = Zy({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((o) => {
          const s = t(o);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function Ml(...e) {
  const t = e.reduce(
      (r, i) => (
        i.filterProps.forEach((o) => {
          r[o] = i;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((i, o) => (t[o] ? co(i, t[o](r)) : i), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), [])),
    n
  );
}
function $t(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ht(e, t) {
  return Ne({ prop: e, themeKey: "borders", transform: t });
}
const XC = Ht("border", $t),
  YC = Ht("borderTop", $t),
  QC = Ht("borderRight", $t),
  GC = Ht("borderBottom", $t),
  JC = Ht("borderLeft", $t),
  ZC = Ht("borderColor"),
  eT = Ht("borderTopColor"),
  tT = Ht("borderRightColor"),
  nT = Ht("borderBottomColor"),
  rT = Ht("borderLeftColor"),
  iT = Ht("outline", $t),
  oT = Ht("outlineColor"),
  $l = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = es(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: ts(t, r) });
      return In(e, e.borderRadius, n);
    }
    return null;
  };
$l.propTypes = {};
$l.filterProps = ["borderRadius"];
Ml(XC, YC, QC, GC, JC, ZC, eT, tT, nT, rT, $l, iT, oT);
const Ll = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = es(e.theme, "spacing", 8),
      n = (r) => ({ gap: ts(t, r) });
    return In(e, e.gap, n);
  }
  return null;
};
Ll.propTypes = {};
Ll.filterProps = ["gap"];
const Fl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = es(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: ts(t, r) });
    return In(e, e.columnGap, n);
  }
  return null;
};
Fl.propTypes = {};
Fl.filterProps = ["columnGap"];
const zl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = es(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: ts(t, r) });
    return In(e, e.rowGap, n);
  }
  return null;
};
zl.propTypes = {};
zl.filterProps = ["rowGap"];
const sT = Ne({ prop: "gridColumn" }),
  aT = Ne({ prop: "gridRow" }),
  lT = Ne({ prop: "gridAutoFlow" }),
  uT = Ne({ prop: "gridAutoColumns" }),
  cT = Ne({ prop: "gridAutoRows" }),
  dT = Ne({ prop: "gridTemplateColumns" }),
  fT = Ne({ prop: "gridTemplateRows" }),
  pT = Ne({ prop: "gridTemplateAreas" }),
  mT = Ne({ prop: "gridArea" });
Ml(Ll, Fl, zl, sT, aT, lT, uT, cT, dT, fT, pT, mT);
function pi(e, t) {
  return t === "grey" ? t : e;
}
const hT = Ne({ prop: "color", themeKey: "palette", transform: pi }),
  gT = Ne({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: pi,
  }),
  vT = Ne({ prop: "backgroundColor", themeKey: "palette", transform: pi });
Ml(hT, gT, vT);
function St(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const yT = Ne({ prop: "width", transform: St }),
  dp = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, i;
        const o =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || lp[n];
        return o
          ? ((i = e.theme) == null || (i = i.breakpoints) == null
              ? void 0
              : i.unit) !== "px"
            ? { maxWidth: `${o}${e.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: St(n) };
      };
      return In(e, e.maxWidth, t);
    }
    return null;
  };
dp.filterProps = ["maxWidth"];
const xT = Ne({ prop: "minWidth", transform: St }),
  wT = Ne({ prop: "height", transform: St }),
  ST = Ne({ prop: "maxHeight", transform: St }),
  _T = Ne({ prop: "minHeight", transform: St });
Ne({ prop: "size", cssProperty: "width", transform: St });
Ne({ prop: "size", cssProperty: "height", transform: St });
const bT = Ne({ prop: "boxSizing" });
Ml(yT, dp, xT, wT, ST, _T, bT);
const ET = {
    border: { themeKey: "borders", transform: $t },
    borderTop: { themeKey: "borders", transform: $t },
    borderRight: { themeKey: "borders", transform: $t },
    borderBottom: { themeKey: "borders", transform: $t },
    borderLeft: { themeKey: "borders", transform: $t },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: $t },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: $l },
    color: { themeKey: "palette", transform: pi },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: pi,
    },
    backgroundColor: { themeKey: "palette", transform: pi },
    p: { style: be },
    pt: { style: be },
    pr: { style: be },
    pb: { style: be },
    pl: { style: be },
    px: { style: be },
    py: { style: be },
    padding: { style: be },
    paddingTop: { style: be },
    paddingRight: { style: be },
    paddingBottom: { style: be },
    paddingLeft: { style: be },
    paddingX: { style: be },
    paddingY: { style: be },
    paddingInline: { style: be },
    paddingInlineStart: { style: be },
    paddingInlineEnd: { style: be },
    paddingBlock: { style: be },
    paddingBlockStart: { style: be },
    paddingBlockEnd: { style: be },
    m: { style: _e },
    mt: { style: _e },
    mr: { style: _e },
    mb: { style: _e },
    ml: { style: _e },
    mx: { style: _e },
    my: { style: _e },
    margin: { style: _e },
    marginTop: { style: _e },
    marginRight: { style: _e },
    marginBottom: { style: _e },
    marginLeft: { style: _e },
    marginX: { style: _e },
    marginY: { style: _e },
    marginInline: { style: _e },
    marginInlineStart: { style: _e },
    marginInlineEnd: { style: _e },
    marginBlock: { style: _e },
    marginBlockStart: { style: _e },
    marginBlockEnd: { style: _e },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Ll },
    rowGap: { style: zl },
    columnGap: { style: Fl },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: St },
    maxWidth: { style: dp },
    minWidth: { transform: St },
    height: { transform: St },
    maxHeight: { transform: St },
    minHeight: { transform: St },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  ns = ET;
function PT(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function CT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function t1() {
  function e(n, r, i, o) {
    const s = { [n]: r, theme: i },
      a = o[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: f, style: h } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const p = Rl(i, u) || {};
    return h
      ? h(s)
      : In(s, r, (y) => {
          let g = Ba(p, f, y);
          return (
            y === g &&
              typeof y == "string" &&
              (g = Ba(p, f, `${n}${y === "default" ? "" : Rr(y)}`, y)),
            l === !1 ? g : { [l]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: i, theme: o = {} } = n || {};
    if (!i) return null;
    const s = (r = o.unstable_sxConfig) != null ? r : ns;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(o);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const f = LC(o.breakpoints),
        h = Object.keys(f);
      let p = f;
      return (
        Object.keys(u).forEach((S) => {
          const y = CT(u[S], o);
          if (y != null)
            if (typeof y == "object")
              if (s[S]) p = co(p, e(S, y, o, s));
              else {
                const g = In({ theme: o }, y, (E) => ({ [S]: E }));
                PT(g, y) ? (p[S] = t({ sx: y, theme: o })) : (p = co(p, g));
              }
            else p = co(p, e(S, y, o, s));
        }),
        FC(h, p)
      );
    }
    return Array.isArray(i) ? i.map(a) : a(i);
  }
  return t;
}
const Ul = t1();
Ul.filterProps = ["sx"];
function n1(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const TT = ["breakpoints", "palette", "spacing", "shape"];
function fp(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: i, shape: o = {} } = e,
    s = gr(e, TT),
    a = Jy(n),
    l = qC(i);
  let u = mn(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: oe({ mode: "light" }, r),
      spacing: l,
      shape: oe({}, $C, o),
    },
    s
  );
  return (
    (u.applyStyles = n1),
    (u = t.reduce((f, h) => mn(f, h), u)),
    (u.unstable_sxConfig = oe(
      {},
      ns,
      s == null ? void 0 : s.unstable_sxConfig
    )),
    (u.unstable_sx = function (h) {
      return Ul({ sx: h, theme: this });
    }),
    u
  );
}
const jT = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: fp,
      private_createBreakpoints: Jy,
      unstable_applyStyles: n1,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function NT(e) {
  return Object.keys(e).length === 0;
}
function kT(e = null) {
  const t = C.useContext(Dl);
  return !t || NT(t) ? e : t;
}
const OT = fp();
function IT(e = OT) {
  return kT(e);
}
const DT = ["sx"],
  AT = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      i =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : ns;
    return (
      Object.keys(e).forEach((o) => {
        i[o] ? (r.systemProps[o] = e[o]) : (r.otherProps[o] = e[o]);
      }),
      r
    );
  };
function RT(e) {
  const { sx: t } = e,
    n = gr(e, DT),
    { systemProps: r, otherProps: i } = AT(n);
  let o;
  return (
    Array.isArray(t)
      ? (o = [r, ...t])
      : typeof t == "function"
      ? (o = (...s) => {
          const a = t(...s);
          return Wn(a) ? oe({}, r, a) : r;
        })
      : (o = oe({}, r, t)),
    oe({}, i, { sx: o })
  );
}
const MT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Ul,
        extendSxProp: RT,
        unstable_createStyleFunctionSx: t1,
        unstable_defaultSxConfig: ns,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Bh = (e) => e,
  $T = () => {
    let e = Bh;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Bh;
      },
    };
  },
  LT = $T(),
  FT = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function r1(e, t, n = "Mui") {
  const r = FT[t];
  return r ? `${n}-${r}` : `${LT.generate(e)}-${t}`;
}
function zT(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((i) => {
      r[i] = r1(e, i, n);
    }),
    r
  );
}
var i1 = { exports: {} },
  ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pp = Symbol.for("react.element"),
  mp = Symbol.for("react.portal"),
  Bl = Symbol.for("react.fragment"),
  Vl = Symbol.for("react.strict_mode"),
  Wl = Symbol.for("react.profiler"),
  Hl = Symbol.for("react.provider"),
  Kl = Symbol.for("react.context"),
  UT = Symbol.for("react.server_context"),
  ql = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Yl = Symbol.for("react.suspense_list"),
  Ql = Symbol.for("react.memo"),
  Gl = Symbol.for("react.lazy"),
  BT = Symbol.for("react.offscreen"),
  o1;
o1 = Symbol.for("react.module.reference");
function Kt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case pp:
        switch (((e = e.type), e)) {
          case Bl:
          case Wl:
          case Vl:
          case Xl:
          case Yl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case UT:
              case Kl:
              case ql:
              case Gl:
              case Ql:
              case Hl:
                return e;
              default:
                return t;
            }
        }
      case mp:
        return t;
    }
  }
}
ce.ContextConsumer = Kl;
ce.ContextProvider = Hl;
ce.Element = pp;
ce.ForwardRef = ql;
ce.Fragment = Bl;
ce.Lazy = Gl;
ce.Memo = Ql;
ce.Portal = mp;
ce.Profiler = Wl;
ce.StrictMode = Vl;
ce.Suspense = Xl;
ce.SuspenseList = Yl;
ce.isAsyncMode = function () {
  return !1;
};
ce.isConcurrentMode = function () {
  return !1;
};
ce.isContextConsumer = function (e) {
  return Kt(e) === Kl;
};
ce.isContextProvider = function (e) {
  return Kt(e) === Hl;
};
ce.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === pp;
};
ce.isForwardRef = function (e) {
  return Kt(e) === ql;
};
ce.isFragment = function (e) {
  return Kt(e) === Bl;
};
ce.isLazy = function (e) {
  return Kt(e) === Gl;
};
ce.isMemo = function (e) {
  return Kt(e) === Ql;
};
ce.isPortal = function (e) {
  return Kt(e) === mp;
};
ce.isProfiler = function (e) {
  return Kt(e) === Wl;
};
ce.isStrictMode = function (e) {
  return Kt(e) === Vl;
};
ce.isSuspense = function (e) {
  return Kt(e) === Xl;
};
ce.isSuspenseList = function (e) {
  return Kt(e) === Yl;
};
ce.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Bl ||
    e === Wl ||
    e === Vl ||
    e === Xl ||
    e === Yl ||
    e === BT ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Gl ||
        e.$$typeof === Ql ||
        e.$$typeof === Hl ||
        e.$$typeof === Kl ||
        e.$$typeof === ql ||
        e.$$typeof === o1 ||
        e.getModuleId !== void 0))
  );
};
ce.typeOf = Kt;
i1.exports = ce;
var Vh = i1.exports;
const VT = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function s1(e) {
  const t = `${e}`.match(VT);
  return (t && t[1]) || "";
}
function a1(e, t = "") {
  return e.displayName || e.name || s1(e) || t;
}
function Wh(e, t, n) {
  const r = a1(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function WT(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return a1(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Vh.ForwardRef:
          return Wh(e, e.render, "ForwardRef");
        case Vh.Memo:
          return Wh(e, e.type, "memo");
        default:
          return;
      }
  }
}
const HT = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: WT, getFunctionName: s1 },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function l1(e, t) {
  const n = oe({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = oe({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const i = e[r] || {},
          o = t[r];
        (n[r] = {}),
          !o || !Object.keys(o)
            ? (n[r] = i)
            : !i || !Object.keys(i)
            ? (n[r] = o)
            : ((n[r] = oe({}, o)),
              Object.keys(i).forEach((s) => {
                n[r][s] = l1(i[s], o[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function KT(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : l1(t.components[n].defaultProps, r);
}
function qT({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = IT(n);
  return r && (i = i[r] || i), KT({ theme: i, name: t, props: e });
}
function XT(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const YT = Object.freeze(
  Object.defineProperty({ __proto__: null, default: XT }, Symbol.toStringTag, {
    value: "Module",
  })
);
function QT(e, t) {
  return oe(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
var ke = {},
  u1 = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(u1);
var c1 = u1.exports;
const GT = cr(C2),
  JT = cr(YT);
var d1 = c1;
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.alpha = h1;
ke.blend = dj;
ke.colorChannel = void 0;
var ZT = (ke.darken = gp);
ke.decomposeColor = Wt;
ke.emphasize = g1;
var ej = (ke.getContrastRatio = sj);
ke.getLuminance = Va;
ke.hexToRgb = f1;
ke.hslToRgb = m1;
var tj = (ke.lighten = vp);
ke.private_safeAlpha = aj;
ke.private_safeColorChannel = void 0;
ke.private_safeDarken = lj;
ke.private_safeEmphasize = cj;
ke.private_safeLighten = uj;
ke.recomposeColor = Oi;
ke.rgbToHex = oj;
var Hh = d1(GT),
  nj = d1(JT);
function hp(e, t = 0, n = 1) {
  return (0, nj.default)(e, t, n);
}
function f1(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, i) =>
            i < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function rj(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Wt(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Wt(f1(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, Hh.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    i;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (i = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        i
      ) === -1)
    )
      throw new Error((0, Hh.default)(10, i));
  } else r = r.split(",");
  return (
    (r = r.map((o) => parseFloat(o))), { type: n, values: r, colorSpace: i }
  );
}
const p1 = (e) => {
  const t = Wt(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
ke.colorChannel = p1;
const ij = (e, t) => {
  try {
    return p1(e);
  } catch {
    return e;
  }
};
ke.private_safeColorChannel = ij;
function Oi(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((i, o) => (o < 3 ? parseInt(i, 10) : i)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function oj(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = Wt(e);
  return `#${t.map((n, r) => rj(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function m1(e) {
  e = Wt(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    i = t[2] / 100,
    o = r * Math.min(i, 1 - i),
    s = (u, f = (u + n / 30) % 12) =>
      i - o * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), Oi({ type: a, values: l })
  );
}
function Va(e) {
  e = Wt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Wt(m1(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function sj(e, t) {
  const n = Va(e),
    r = Va(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function h1(e, t) {
  return (
    (e = Wt(e)),
    (t = hp(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Oi(e)
  );
}
function aj(e, t, n) {
  try {
    return h1(e, t);
  } catch {
    return e;
  }
}
function gp(e, t) {
  if (((e = Wt(e)), (t = hp(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Oi(e);
}
function lj(e, t, n) {
  try {
    return gp(e, t);
  } catch {
    return e;
  }
}
function vp(e, t) {
  if (((e = Wt(e)), (t = hp(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Oi(e);
}
function uj(e, t, n) {
  try {
    return vp(e, t);
  } catch {
    return e;
  }
}
function g1(e, t = 0.15) {
  return Va(e) > 0.5 ? gp(e, t) : vp(e, t);
}
function cj(e, t, n) {
  try {
    return g1(e, t);
  } catch {
    return e;
  }
}
function dj(e, t, n, r = 1) {
  const i = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    o = Wt(e),
    s = Wt(t),
    a = [
      i(o.values[0], s.values[0]),
      i(o.values[1], s.values[1]),
      i(o.values[2], s.values[2]),
    ];
  return Oi({ type: "rgb", values: a });
}
const fj = { black: "#000", white: "#fff" },
  zo = fj,
  pj = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  mj = pj,
  hj = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Br = hj,
  gj = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Vr = gj,
  vj = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Ki = vj,
  yj = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Wr = yj,
  xj = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Hr = xj,
  wj = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Kr = wj,
  Sj = ["mode", "contrastThreshold", "tonalOffset"],
  Kh = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: zo.white, default: zo.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  ic = {
    text: {
      primary: zo.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: zo.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function qh(e, t, n, r) {
  const i = r.light || r,
    o = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = tj(e.main, i))
      : t === "dark" && (e.dark = ZT(e.main, o)));
}
function _j(e = "light") {
  return e === "dark"
    ? { main: Wr[200], light: Wr[50], dark: Wr[400] }
    : { main: Wr[700], light: Wr[400], dark: Wr[800] };
}
function bj(e = "light") {
  return e === "dark"
    ? { main: Br[200], light: Br[50], dark: Br[400] }
    : { main: Br[500], light: Br[300], dark: Br[700] };
}
function Ej(e = "light") {
  return e === "dark"
    ? { main: Vr[500], light: Vr[300], dark: Vr[700] }
    : { main: Vr[700], light: Vr[400], dark: Vr[800] };
}
function Pj(e = "light") {
  return e === "dark"
    ? { main: Hr[400], light: Hr[300], dark: Hr[700] }
    : { main: Hr[700], light: Hr[500], dark: Hr[900] };
}
function Cj(e = "light") {
  return e === "dark"
    ? { main: Kr[400], light: Kr[300], dark: Kr[700] }
    : { main: Kr[800], light: Kr[500], dark: Kr[900] };
}
function Tj(e = "light") {
  return e === "dark"
    ? { main: Ki[400], light: Ki[300], dark: Ki[700] }
    : { main: "#ed6c02", light: Ki[500], dark: Ki[900] };
}
function jj(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    i = gr(e, Sj),
    o = e.primary || _j(t),
    s = e.secondary || bj(t),
    a = e.error || Ej(t),
    l = e.info || Pj(t),
    u = e.success || Cj(t),
    f = e.warning || Tj(t);
  function h(g) {
    return ej(g, ic.text.primary) >= n ? ic.text.primary : Kh.text.primary;
  }
  const p = ({
      color: g,
      name: E,
      mainShade: w = 500,
      lightShade: m = 300,
      darkShade: d = 700,
    }) => {
      if (
        ((g = oe({}, g)),
        !g.main && g[w] && (g.main = g[w]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(Mo(11, E ? ` (${E})` : "", w));
      if (typeof g.main != "string")
        throw new Error(Mo(12, E ? ` (${E})` : "", JSON.stringify(g.main)));
      return (
        qh(g, "light", m, r),
        qh(g, "dark", d, r),
        g.contrastText || (g.contrastText = h(g.main)),
        g
      );
    },
    S = { dark: ic, light: Kh };
  return mn(
    oe(
      {
        common: oe({}, zo),
        mode: t,
        primary: p({ color: o, name: "primary" }),
        secondary: p({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: p({ color: a, name: "error" }),
        warning: p({ color: f, name: "warning" }),
        info: p({ color: l, name: "info" }),
        success: p({ color: u, name: "success" }),
        grey: mj,
        contrastThreshold: n,
        getContrastText: h,
        augmentColor: p,
        tonalOffset: r,
      },
      S[t]
    ),
    i
  );
}
const Nj = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function kj(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Xh = { textTransform: "uppercase" },
  Yh = '"Roboto", "Helvetica", "Arial", sans-serif';
function Oj(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Yh,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: f,
      pxToRem: h,
    } = n,
    p = gr(n, Nj),
    S = i / 14,
    y = h || ((w) => `${(w / u) * S}rem`),
    g = (w, m, d, v, x) =>
      oe(
        { fontFamily: r, fontWeight: w, fontSize: y(m), lineHeight: d },
        r === Yh ? { letterSpacing: `${kj(v / m)}em` } : {},
        x,
        f
      ),
    E = {
      h1: g(o, 96, 1.167, -1.5),
      h2: g(o, 60, 1.2, -0.5),
      h3: g(s, 48, 1.167, 0),
      h4: g(s, 34, 1.235, 0.25),
      h5: g(s, 24, 1.334, 0),
      h6: g(a, 20, 1.6, 0.15),
      subtitle1: g(s, 16, 1.75, 0.15),
      subtitle2: g(a, 14, 1.57, 0.1),
      body1: g(s, 16, 1.5, 0.15),
      body2: g(s, 14, 1.43, 0.15),
      button: g(a, 14, 1.75, 0.4, Xh),
      caption: g(s, 12, 1.66, 0.4),
      overline: g(s, 12, 2.66, 1, Xh),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return mn(
    oe(
      {
        htmlFontSize: u,
        pxToRem: y,
        fontFamily: r,
        fontSize: i,
        fontWeightLight: o,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      E
    ),
    p,
    { clone: !1 }
  );
}
const Ij = 0.2,
  Dj = 0.14,
  Aj = 0.12;
function ve(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ij})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Dj})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Aj})`,
  ].join(",");
}
const Rj = [
    "none",
    ve(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ve(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ve(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ve(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ve(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ve(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ve(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ve(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ve(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ve(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ve(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ve(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ve(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ve(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ve(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ve(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ve(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ve(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ve(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ve(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ve(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ve(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ve(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ve(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Mj = ["duration", "easing", "delay"],
  $j = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Lj = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Qh(e) {
  return `${Math.round(e)}ms`;
}
function Fj(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function zj(e) {
  const t = oe({}, $j, e.easing),
    n = oe({}, Lj, e.duration);
  return oe(
    {
      getAutoHeightDuration: Fj,
      create: (i = ["all"], o = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = o;
        return (
          gr(o, Mj),
          (Array.isArray(i) ? i : [i])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : Qh(s)} ${a} ${
                  typeof l == "string" ? l : Qh(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const Uj = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Bj = Uj,
  Vj = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Wj(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: i = {},
      typography: o = {},
    } = e,
    s = gr(e, Vj);
  if (e.vars) throw new Error(Mo(18));
  const a = jj(r),
    l = fp(e);
  let u = mn(l, {
    mixins: QT(l.breakpoints, n),
    palette: a,
    shadows: Rj.slice(),
    typography: Oj(a, o),
    transitions: zj(i),
    zIndex: oe({}, Bj),
  });
  return (
    (u = mn(u, s)),
    (u = t.reduce((f, h) => mn(f, h), u)),
    (u.unstable_sxConfig = oe(
      {},
      ns,
      s == null ? void 0 : s.unstable_sxConfig
    )),
    (u.unstable_sx = function (h) {
      return Ul({ sx: h, theme: this });
    }),
    u
  );
}
const Hj = Wj(),
  v1 = Hj,
  y1 = "$$material";
function Kj({ props: e, name: t }) {
  return qT({ props: e, name: t, defaultTheme: v1, themeId: y1 });
}
var rs = {},
  oc = { exports: {} },
  Gh;
function qj() {
  return (
    Gh ||
      ((Gh = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var i = {};
          for (var o in n)
            if (Object.prototype.hasOwnProperty.call(n, o)) {
              if (r.indexOf(o) >= 0) continue;
              i[o] = n[o];
            }
          return i;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(oc)),
    oc.exports
  );
}
const Xj = cr(IC),
  Yj = cr(DC),
  Qj = cr(zC),
  Gj = cr(HT),
  Jj = cr(jT),
  Zj = cr(MT);
var Ii = c1;
Object.defineProperty(rs, "__esModule", { value: !0 });
var eN = (rs.default = pN);
rs.shouldForwardProp = Zs;
rs.systemDefaultTheme = void 0;
var At = Ii(Qy()),
  Ed = Ii(qj()),
  Jh = aN(Xj),
  tN = Yj;
Ii(Qj);
Ii(Gj);
var nN = Ii(Jj),
  rN = Ii(Zj);
const iN = ["ownerState"],
  oN = ["variants"],
  sN = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function x1(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (x1 = function (r) {
    return r ? n : t;
  })(e);
}
function aN(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = x1(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function lN(e) {
  return Object.keys(e).length === 0;
}
function uN(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Zs(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const cN = (rs.systemDefaultTheme = (0, nN.default)()),
  dN = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Os({ defaultTheme: e, theme: t, themeId: n }) {
  return lN(t) ? e : t[n] || t;
}
function fN(e) {
  return e ? (t, n) => n[e] : null;
}
function ea(e, t) {
  let { ownerState: n } = t,
    r = (0, Ed.default)(t, iN);
  const i =
    typeof e == "function" ? e((0, At.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(i))
    return i.flatMap((o) => ea(o, (0, At.default)({ ownerState: n }, r)));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const { variants: o = [] } = i;
    let a = (0, Ed.default)(i, oN);
    return (
      o.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props((0, At.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((f) => {
              (n == null ? void 0 : n[f]) !== l.props[f] &&
                r[f] !== l.props[f] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style((0, At.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return i;
}
function pN(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = cN,
      rootShouldForwardProp: r = Zs,
      slotShouldForwardProp: i = Zs,
    } = e,
    o = (s) =>
      (0, rN.default)(
        (0, At.default)({}, s, {
          theme: Os((0, At.default)({}, s, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (o.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, Jh.internal_processStyles)(s, (x) =>
        x.filter((b) => !(b != null && b.__mui_systemSx))
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: f,
          skipSx: h,
          overridesResolver: p = fN(dN(u)),
        } = a,
        S = (0, Ed.default)(a, sN),
        y = f !== void 0 ? f : (u && u !== "Root" && u !== "root") || !1,
        g = h || !1;
      let E,
        w = Zs;
      u === "Root" || u === "root"
        ? (w = r)
        : u
        ? (w = i)
        : uN(s) && (w = void 0);
      const m = (0, Jh.default)(
          s,
          (0, At.default)({ shouldForwardProp: w, label: E }, S)
        ),
        d = (x) =>
          (typeof x == "function" && x.__emotion_real !== x) ||
          (0, tN.isPlainObject)(x)
            ? (b) =>
                ea(
                  x,
                  (0, At.default)({}, b, {
                    theme: Os({ theme: b.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : x,
        v = (x, ...b) => {
          let _ = d(x);
          const P = b ? b.map(d) : [];
          l &&
            p &&
            P.push((M) => {
              const T = Os(
                (0, At.default)({}, M, { defaultTheme: n, themeId: t })
              );
              if (
                !T.components ||
                !T.components[l] ||
                !T.components[l].styleOverrides
              )
                return null;
              const I = T.components[l].styleOverrides,
                R = {};
              return (
                Object.entries(I).forEach(([$, z]) => {
                  R[$] = ea(z, (0, At.default)({}, M, { theme: T }));
                }),
                p(M, R)
              );
            }),
            l &&
              !y &&
              P.push((M) => {
                var T;
                const I = Os(
                    (0, At.default)({}, M, { defaultTheme: n, themeId: t })
                  ),
                  R =
                    I == null ||
                    (T = I.components) == null ||
                    (T = T[l]) == null
                      ? void 0
                      : T.variants;
                return ea(
                  { variants: R },
                  (0, At.default)({}, M, { theme: I })
                );
              }),
            g || P.push(o);
          const N = P.length - b.length;
          if (Array.isArray(x) && N > 0) {
            const M = new Array(N).fill("");
            (_ = [...x, ...M]), (_.raw = [...x.raw, ...M]);
          }
          const O = m(_, ...P);
          return s.muiName && (O.muiName = s.muiName), O;
        };
      return m.withConfig && (v.withConfig = m.withConfig), v;
    }
  );
}
function mN(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const hN = (e) => mN(e) && e !== "classes",
  gN = hN,
  yp = eN({ themeId: y1, defaultTheme: v1, rootShouldForwardProp: gN });
function vN(e) {
  return r1("MuiCircularProgress", e);
}
zT("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const yN = [
  "className",
  "color",
  "disableShrink",
  "size",
  "style",
  "thickness",
  "value",
  "variant",
];
let Jl = (e) => e,
  Zh,
  eg,
  tg,
  ng;
const Fn = 44,
  xN = ap(
    Zh ||
      (Zh = Jl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  wN = ap(
    eg ||
      (eg = Jl`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
  ),
  SN = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: i } = e,
      o = {
        root: ["root", n, `color${Rr(r)}`],
        svg: ["svg"],
        circle: ["circle", `circle${Rr(n)}`, i && "circleDisableShrink"],
      };
    return P2(o, vN, t);
  },
  _N = yp("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`color${Rr(n.color)}`]];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      oe(
        { display: "inline-block" },
        e.variant === "determinate" && {
          transition: t.transitions.create("transform"),
        },
        e.color !== "inherit" && { color: (t.vars || t).palette[e.color].main }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      Al(
        tg ||
          (tg = Jl`
      animation: ${0} 1.4s linear infinite;
    `),
        xN
      )
  ),
  bN = yp("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg,
  })({ display: "block" }),
  EN = yp("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.circle,
        t[`circle${Rr(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      oe(
        { stroke: "currentColor" },
        e.variant === "determinate" && {
          transition: t.transitions.create("stroke-dashoffset"),
        },
        e.variant === "indeterminate" && {
          strokeDasharray: "80px, 200px",
          strokeDashoffset: 0,
        }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      !e.disableShrink &&
      Al(
        ng ||
          (ng = Jl`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        wN
      )
  ),
  PN = C.forwardRef(function (t, n) {
    const r = Kj({ props: t, name: "MuiCircularProgress" }),
      {
        className: i,
        color: o = "primary",
        disableShrink: s = !1,
        size: a = 40,
        style: l,
        thickness: u = 3.6,
        value: f = 0,
        variant: h = "indeterminate",
      } = r,
      p = gr(r, yN),
      S = oe({}, r, {
        color: o,
        disableShrink: s,
        size: a,
        thickness: u,
        value: f,
        variant: h,
      }),
      y = SN(S),
      g = {},
      E = {},
      w = {};
    if (h === "determinate") {
      const m = 2 * Math.PI * ((Fn - u) / 2);
      (g.strokeDasharray = m.toFixed(3)),
        (w["aria-valuenow"] = Math.round(f)),
        (g.strokeDashoffset = `${(((100 - f) / 100) * m).toFixed(3)}px`),
        (E.transform = "rotate(-90deg)");
    }
    return c.jsx(
      _N,
      oe(
        {
          className: bn(y.root, i),
          style: oe({ width: a, height: a }, E, l),
          ownerState: S,
          ref: n,
          role: "progressbar",
        },
        w,
        p,
        {
          children: c.jsx(bN, {
            className: y.svg,
            ownerState: S,
            viewBox: `${Fn / 2} ${Fn / 2} ${Fn} ${Fn}`,
            children: c.jsx(EN, {
              className: y.circle,
              style: g,
              ownerState: S,
              cx: Fn,
              cy: Fn,
              r: (Fn - u) / 2,
              fill: "none",
              strokeWidth: u,
            }),
          }),
        }
      )
    );
  }),
  w1 = PN;
function CN(e) {
  return new Promise(async (t, n) => {
    const i = await (
      await fetch("/api/order/addorder", {
        method: "POST",
        body: JSON.stringify(e),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
    ).json();
    i.success == !0 ? t(i) : n(i.message);
  });
}
function TN(e) {
  return new Promise(async (t, n) => {
    const i = await (
      await fetch("/api/order/prepaidorder", {
        method: "POST",
        body: JSON.stringify(e),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
    ).json();
    i.success == !0 ? t(i) : n(i.message);
  });
}
function jN(e) {
  return new Promise(async (t, n) => {
    const i = await (
      await fetch("/api/order/fetch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(e),
        credentials: "include",
      })
    ).json();
    i.success == !0 ? t(i.user) : n(i.message);
  });
}
const NN = {
    order: [],
    status: { success: "", message: "" },
    currentOrder: null,
    userOrders: [],
    fetchStatus: "",
    razorpayOrder: "",
    razorPayCurrentOrder: "",
  },
  ta = rn("order/addorder", async (e) => await CN(e)),
  Pd = rn("order/fetchOrder", async (e) => await jN(e)),
  Cd = rn("order/prepaidorder", async (e) => await TN(e)),
  S1 = Yo({
    name: "order",
    initialState: NN,
    reducers: {
      resetStatus: (e) => {
        e.status = "idle";
      },
      resetCurrentOrder: (e) => {
        e.currentOrder = null;
      },
      addPredpaidOrder: (e, t) => {
        e.order.push(t.payload[0]), (e.currentOrder = t.payload);
      },
    },
    extraReducers: (e) => {
      e.addCase(ta.pending, (t, n) => {
        t.status.success = "Loading";
      })
        .addCase(ta.fulfilled, (t, n) => {
          t.order.push(n.payload.order[0]),
            (t.currentOrder = n.payload.order),
            (t.razorpayOrder = n.payload.razorpayResponse),
            (t.status.success = "success");
        })
        .addCase(ta.rejected, (t, n) => {
          (t.status.message = n.error.message),
            (t.status.success = "went wrong");
        })
        .addCase(Cd.pending, (t, n) => {
          t.status.success = "Loading";
        })
        .addCase(Cd.fulfilled, (t, n) => {
          (t.razorpayOrder = n.payload.razorpayResponse),
            (t.razorPayCurrentOrder = n.payload.currentOrder),
            (t.status.success = "success");
        })
        .addCase(Pd.pending, (t, n) => {
          t.fetchStatus = "loading";
        })
        .addCase(Pd.fulfilled, (t, n) => {
          (t.fetchStatus = "success"), (t.userOrders = n.payload.orders);
        });
    },
  }),
  { resetStatus: kN, resetCurrentOrder: ON, addPredpaidOrder: IN } = S1.actions,
  DN = (e) => e.order.order,
  _1 = (e) => e.order.currentOrder,
  AN = (e) => e.order.status,
  RN = (e) => e.order.userOrders,
  MN = (e) => e.order.razorpayOrder,
  $N = (e) => e.order.razorPayCurrentOrder,
  LN = (e) => e.order.fetchStatus,
  FN = S1.reducer,
  zN = () => {
    const e = de(AN),
      t = de(MN),
      n = de($N),
      r = de(Ni),
      [i, o] = C.useState(r.address[0]),
      [s, a] = C.useState("cash"),
      l = de(_1),
      u = r._id,
      f = hr(),
      h = de(Zf),
      p = h.reduce((_, P) => P.quantity * P.product.new_price + _, 0),
      S = h.reduce((_, P) => P.quantity + _, 0),
      y = (_, P, N) => {
        _.preventDefault(), f(za({ productId: N, userId: P }));
      },
      {
        register: g,
        handleSubmit: E,
        formState: { errors: w },
        reset: m,
      } = Rf(),
      d = (_) => {
        f(dd({ userId: u, userAddress: _ })), m();
      },
      v = (_) => {
        const P = _.target.value,
          N = r.address[P];
        o(N);
      },
      x = (_) => {
        a(_.target.value);
      };
    C.useEffect(() => {
      e === "success" &&
        setTimeout(() => {
          f(kN());
        }, 9e3);
    }, [e]);
    const b = (_) => {
      if (i == null)
        console.log(r.address.length), Z.info("Please Add Your Address First");
      else if (s == "cash")
        f(
          ta({
            user: r._id,
            product: h,
            shippingaddress: i,
            totalAmount: p,
            totalItems: S,
            paymentmethod: s,
          })
        );
      else {
        f(
          Cd({
            user: r._id,
            product: h,
            shippingaddress: i,
            totalAmount: p,
            totalItems: S,
            paymentmethod: s,
          })
        );
        var P = {
            key: "rzp_test_WjYkuxQq5QqRtK",
            amount: p * 100,
            currency: "INR",
            name: "Krishna",
            description: "Test Transaction",
            image:
              "https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais",
            order_id: t.id,
            handler: async function (O) {
              const M = {
                  razorpay_order_id: O.razorpay_order_id,
                  razorpay_payment_id: O.razorpay_payment_id,
                  razorpay_signature: O.razorpay_signature,
                  currentOrder: n,
                },
                I = await (
                  await fetch("/api/order/orderpayment/validate", {
                    method: "POST",
                    body: JSON.stringify(M),
                    headers: { "Content-Type": "application/json" },
                  })
                ).json();
              I.success == !1 && Z.error(I.message);
              const R = I.order;
              f(IN(R));
            },
            prefill: { name: r.name, email: r.email, contact: "7060457474" },
            notes: { address: r.address[0] },
            theme: { color: "#3399cc" },
          },
          N = new window.Razorpay(P);
        N.on("payment.failed", function (O) {
          Z.error(O.error.code),
            Z.error(O.error.description),
            Z.error(O.error.source),
            Z.error(O.error.step),
            Z.error(O.error.reason),
            Z.error(O.error.metadata.order_id),
            Z.error(O.error.metadata.payment_id);
        }),
          N.open(),
          _.preventDefault();
      }
    };
    return !h || h.length === 0
      ? c.jsx(Oo, { to: "/" })
      : (e.success == "went wrong" &&
          Z.error(e.message, { position: "top-center" }),
        c.jsx(c.Fragment, {
          children: c.jsxs(c.Fragment, {
            children: [
              l && c.jsx(Oo, { to: `/ordersuccess/${l[0]._id}`, replace: !0 }),
              c.jsx("div", {
                className:
                  "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 bg-white",
                children: c.jsxs("div", {
                  className: "grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6",
                  children: [
                    c.jsx("div", {
                      className: "lg:col-span-3",
                      children: c.jsx("form", {
                        onSubmit: E(d),
                        children: c.jsxs("div", {
                          className: "space-y-12",
                          children: [
                            c.jsxs("div", {
                              className: "border-b border-gray-900/10 pb-12",
                              children: [
                                c.jsx("h2", {
                                  className:
                                    "text-base font-semibold leading-7 text-gray-900",
                                  children: "Personal Information",
                                }),
                                c.jsx("p", {
                                  className:
                                    "mt-1 text-sm leading-6 text-gray-600",
                                  children:
                                    "Use a permanent address where you can receive mail.",
                                }),
                                c.jsxs("div", {
                                  className:
                                    "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",
                                  children: [
                                    c.jsxs("div", {
                                      className: "col-span-full",
                                      children: [
                                        c.jsx("label", {
                                          htmlFor: "first-name",
                                          className:
                                            "block text-sm font-medium leading-6 text-gray-900",
                                          children: "Name",
                                        }),
                                        c.jsx("div", {
                                          className: "mt-2",
                                          children: c.jsx("input", {
                                            type: "text",
                                            ...g("name", {
                                              required: "name missing",
                                            }),
                                            id: "first-name",
                                            autoComplete: "given-name",
                                            className:
                                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                          }),
                                        }),
                                        w.name &&
                                          c.jsx("p", {
                                            className: "text-red-500",
                                            children: w.name.message,
                                          }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className: "col-span-full",
                                      children: [
                                        c.jsx("label", {
                                          htmlFor: "email",
                                          className:
                                            "block text-sm font-medium leading-6 text-gray-900",
                                          children: "Email address",
                                        }),
                                        c.jsx("div", {
                                          className: "mt-2",
                                          children: c.jsx("input", {
                                            id: "email",
                                            ...g("email", {
                                              required: "email missing",
                                            }),
                                            type: "email",
                                            autoComplete: "email",
                                            className:
                                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                          }),
                                        }),
                                        w.email &&
                                          c.jsx("p", {
                                            className: "text-red-500",
                                            children: w.email.message,
                                          }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className: "col-span-full",
                                      children: [
                                        c.jsx("label", {
                                          htmlFor: "street-address",
                                          className:
                                            "block text-sm font-medium leading-6 text-gray-900",
                                          children: "Street address",
                                        }),
                                        c.jsx("div", {
                                          className: "mt-2",
                                          children: c.jsx("input", {
                                            type: "text",
                                            ...g("street", {
                                              required: "street missing",
                                            }),
                                            id: "street-address",
                                            autoComplete: "street-address",
                                            className:
                                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                          }),
                                        }),
                                        w.street &&
                                          c.jsx("p", {
                                            className: "text-red-500",
                                            children: w.street.message,
                                          }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className: "sm:col-span-2 sm:col-start-1",
                                      children: [
                                        c.jsx("label", {
                                          htmlFor: "city",
                                          className:
                                            "block text-sm font-medium leading-6 text-gray-900",
                                          children: "City",
                                        }),
                                        c.jsx("div", {
                                          className: "mt-2",
                                          children: c.jsx("input", {
                                            type: "text",
                                            ...g("city", {
                                              required: "city missing",
                                            }),
                                            id: "city",
                                            autoComplete: "address-level2",
                                            className:
                                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                          }),
                                        }),
                                        w.city &&
                                          c.jsx("p", {
                                            className: "text-red-500",
                                            children: w.city.message,
                                          }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className: "sm:col-span-2",
                                      children: [
                                        c.jsx("label", {
                                          htmlFor: "region",
                                          className:
                                            "block text-sm font-medium leading-6 text-gray-900",
                                          children: "State / Province",
                                        }),
                                        c.jsx("div", {
                                          className: "mt-2",
                                          children: c.jsx("input", {
                                            type: "text",
                                            ...g("state", {
                                              required: "State Missing",
                                            }),
                                            id: "region",
                                            autoComplete: "address-level1",
                                            className:
                                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                          }),
                                        }),
                                        w.state &&
                                          c.jsx("p", {
                                            className: "text-red-500",
                                            children: w.state.message,
                                          }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className: "sm:col-span-2",
                                      children: [
                                        c.jsx("label", {
                                          htmlFor: "postal-code",
                                          className:
                                            "block text-sm font-medium leading-6 text-gray-900",
                                          children: "ZIP / Postal code",
                                        }),
                                        c.jsx("div", {
                                          className: "mt-2",
                                          children: c.jsx("input", {
                                            type: "text",
                                            ...g("pincode", {
                                              required: "Pincode Missing",
                                            }),
                                            id: "postal-code",
                                            autoComplete: "postal-code",
                                            className:
                                              "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                          }),
                                        }),
                                        w.pincode &&
                                          c.jsx("p", {
                                            className: "text-red-500",
                                            children: w.pincode.message,
                                          }),
                                        c.jsxs("div", {
                                          className:
                                            "mt-6 flex items-center justify-end gap-x-6",
                                          children: [
                                            c.jsx("button", {
                                              type: "reset",
                                              className:
                                                "text-sm font-semibold leading-6 text-gray-900",
                                              children: "Reset",
                                            }),
                                            c.jsx("button", {
                                              type: "submit",
                                              className:
                                                "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                              children: "Add Address",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsx("ul", {
                              role: "list",
                              className: "divide-y divide-gray-100",
                              children: r.address.map((_, P) =>
                                c.jsxs(
                                  "li",
                                  {
                                    className:
                                      "flex justify-between gap-x-6 py-5",
                                    children: [
                                      c.jsxs("div", {
                                        className: "flex min-w-0 gap-x-4",
                                        children: [
                                          c.jsx("input", {
                                            id: "address",
                                            name: "address",
                                            onChange: v,
                                            value: P,
                                            type: "radio",
                                            checked: i == r.address[P],
                                            className:
                                              "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                          }),
                                          c.jsxs("div", {
                                            className: "min-w-0 flex-auto",
                                            children: [
                                              c.jsx("p", {
                                                className:
                                                  "text-sm font-semibold leading-6 text-gray-900",
                                                children: _.name,
                                              }),
                                              c.jsx("p", {
                                                className:
                                                  "mt-1 truncate text-xs leading-5 text-gray-500",
                                                children: _.street,
                                              }),
                                              c.jsx("p", {
                                                className:
                                                  "mt-1 truncate text-xs leading-5 text-gray-500",
                                                children: _.pincode,
                                              }),
                                              c.jsx("p", {
                                                className:
                                                  "mt-1 truncate text-xs leading-5 text-gray-500",
                                                children: _.state,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      c.jsx("div", {
                                        className:
                                          "hidden shrink-0 sm:flex sm:flex-col sm:items-end",
                                        children: c.jsx("p", {
                                          className:
                                            "text-sm leading-6 text-gray-900",
                                          children: _.phone,
                                        }),
                                      }),
                                    ],
                                  },
                                  P
                                )
                              ),
                            }),
                            c.jsx("div", {
                              className: "mt-10 space-y-10",
                              children: c.jsxs("fieldset", {
                                children: [
                                  c.jsx("legend", {
                                    className:
                                      "text-sm font-semibold leading-6 text-gray-900",
                                    children: "Payment Method",
                                  }),
                                  c.jsxs("div", {
                                    className: "mt-6 space-y-6",
                                    children: [
                                      c.jsxs("div", {
                                        className: "flex items-center gap-x-3",
                                        children: [
                                          c.jsx("input", {
                                            id: "cash",
                                            name: "payment",
                                            onChange: x,
                                            value: "cash",
                                            type: "radio",
                                            checked: s == "cash",
                                            className:
                                              "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                          }),
                                          c.jsx("label", {
                                            htmlFor: "cash",
                                            className:
                                              "block text-sm font-medium leading-6 text-gray-900",
                                            children: "Cash",
                                          }),
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        className: "flex items-center gap-x-3",
                                        children: [
                                          c.jsx("input", {
                                            id: "card",
                                            name: "payment",
                                            type: "radio",
                                            value: "card",
                                            onChange: x,
                                            checked: s == "card",
                                            className:
                                              "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                                          }),
                                          c.jsx("label", {
                                            htmlFor: "card",
                                            className:
                                              "block text-sm font-medium leading-6 text-gray-900",
                                            children: "Card",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    c.jsx("div", {
                      className: "lg:col-span-3",
                      children: c.jsxs("div", {
                        className:
                          "mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8 bg-white",
                        children: [
                          c.jsx("h2", {
                            className:
                              "text-4xl font-bold tracking-tight text-gray-900",
                            children: "Cart",
                          }),
                          c.jsx("div", {
                            className: "mt-8",
                            children: c.jsx("div", {
                              className: "flow-root",
                              children: c.jsx("ul", {
                                role: "list",
                                className: "-my-6 divide-y divide-gray-200",
                                children: h.map((_, P) =>
                                  c.jsxs(
                                    "li",
                                    {
                                      className: "flex py-6",
                                      children: [
                                        c.jsx("div", {
                                          className:
                                            "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",
                                          children: c.jsx("img", {
                                            src: _.product.image.imageUrl,
                                            alt: _.product.image.imageUrl,
                                            className:
                                              "h-full w-full object-cover object-center",
                                          }),
                                        }),
                                        c.jsxs("div", {
                                          className:
                                            "ml-4 flex flex-1 flex-col",
                                          children: [
                                            c.jsx("div", {
                                              children: c.jsxs("div", {
                                                className:
                                                  "flex justify-between text-base font-medium text-gray-900",
                                                children: [
                                                  c.jsx("h3", {
                                                    children: c.jsx("a", {
                                                      href: _.href,
                                                      children: _.product.name,
                                                    }),
                                                  }),
                                                  c.jsxs("p", {
                                                    className: "ml-4",
                                                    children: [
                                                      "₹",
                                                      _.product.new_price,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            c.jsxs("div", {
                                              className:
                                                "flex flex-1 items-end justify-between text-sm",
                                              children: [
                                                c.jsxs("div", {
                                                  className: "text-gray-500",
                                                  children: [
                                                    " ",
                                                    c.jsx("label", {
                                                      htmlFor: "quantity",
                                                      className:
                                                        "inline mr-5 text-sm font-medium leading-6 text-gray-900",
                                                      children: "Qty",
                                                    }),
                                                    " ",
                                                    c.jsxs("select", {
                                                      name: "quantity",
                                                      id: "quantity",
                                                      children: [
                                                        c.jsx("option", {
                                                          value: _.quantity,
                                                          children: _.quantity,
                                                        }),
                                                        c.jsx("option", {
                                                          value: "1",
                                                          children: "One",
                                                        }),
                                                        c.jsx("option", {
                                                          value: "2",
                                                          children: "Two",
                                                        }),
                                                        c.jsx("option", {
                                                          value: "3",
                                                          children: "Three",
                                                        }),
                                                        c.jsx("option", {
                                                          value: "4",
                                                          children: "Four",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                c.jsx("div", {
                                                  className: "flex",
                                                  children: c.jsx("button", {
                                                    type: "button",
                                                    onClick: (N) =>
                                                      y(N, u, _.product._id),
                                                    className:
                                                      "font-medium text-indigo-600 hover:text-indigo-500",
                                                    children: "Remove",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    P
                                  )
                                ),
                              }),
                            }),
                          }),
                          c.jsxs("div", {
                            className: "mt-8",
                            children: [
                              c.jsxs("div", {
                                className:
                                  "flex justify-between text-base font-medium text-gray-900",
                                children: [
                                  c.jsx("p", { children: "Subtotal" }),
                                  c.jsxs("p", { children: ["₹", p] }),
                                ],
                              }),
                              c.jsx("p", {
                                className: "mt-0.5 text-sm text-gray-500",
                                children:
                                  "Shipping and taxes calculated at checkout.",
                              }),
                              c.jsx("div", {
                                className: "mt-6",
                                children: c.jsx("div", {
                                  onClick: b,
                                  className:
                                    "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 cursor-pointer text-base font-medium text-white shadow-sm hover:bg-indigo-700",
                                  children: "Pay and order now",
                                }),
                              }),
                              c.jsx("div", {
                                className:
                                  "mt-6 flex justify-center text-center text-sm text-gray-500",
                                children: c.jsxs("p", {
                                  children: [
                                    "or",
                                    " ",
                                    c.jsxs("button", {
                                      type: "button",
                                      className:
                                        "font-medium text-indigo-600 hover:text-indigo-500",
                                      children: [
                                        c.jsx(te, {
                                          to: "/",
                                          children: "Continue Shopping",
                                        }),
                                        c.jsx("span", {
                                          "aria-hidden": "true",
                                          children: " →",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }));
  };
function UN({ title: e, titleId: t, ...n }, r) {
  return C.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? C.createElement("title", { id: t }, e) : null,
    C.createElement("path", {
      fillRule: "evenodd",
      d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
      clipRule: "evenodd",
    })
  );
}
const BN = C.forwardRef(UN),
  VN = BN;
function WN({ title: e, titleId: t, ...n }, r) {
  return C.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? C.createElement("title", { id: t }, e) : null,
    C.createElement("path", {
      fillRule: "evenodd",
      d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
      clipRule: "evenodd",
    })
  );
}
const HN = C.forwardRef(WN),
  KN = HN;
function qN({ title: e, titleId: t, ...n }, r) {
  return C.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? C.createElement("title", { id: t }, e) : null,
    C.createElement("path", {
      fillRule: "evenodd",
      d: "M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z",
      clipRule: "evenodd",
    })
  );
}
const XN = C.forwardRef(qN),
  YN = XN;
function QN() {
  return new Promise(async (e) => {
    const n = (await fetch("/api/fetchproduct")).json();
    e({ data: n });
  });
}
const GN = { products: [], status: "idle", isProduct: !1 },
  na = rn("product/fetchAllProduct", async () => (await QN()).data),
  b1 = Yo({
    name: "product",
    initialState: GN,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(na.pending, (t) => {
        t.status = "loading";
      })
        .addCase(na.fulfilled, (t, n) => {
          (t.status = "success"),
            (t.products = n.payload.product),
            (t.isProduct = !0);
        })
        .addCase(na.rejected, (t, n) => {
          (t.status = "failed"), (t.products = n.payload.product);
        });
    },
  });
b1.actions;
const E1 = (e) => e.product.products,
  JN = (e) => e.product.status,
  ZN = (e) => e.product.isProduct,
  ek = b1.reducer,
  Is = { href: "#", average: 4, totalCount: 117 };
function tk(...e) {
  return e.filter(Boolean).join(" ");
}
function nk(e) {
  const t = e.product[0],
    n = hr(),
    r = de(ZN),
    i = de(Ni),
    o = (s) => {
      if (i) {
        s.preventDefault(),
          Z.success("🛒 Item Added ", { position: "bottom-left" }),
          n(vd({ productId: t._id, quantity: 1, user: i._id })),
          window.scrollTo(0, 0);
        return;
      } else window.location.replace("/login");
    };
  return c.jsx(c.Fragment, {
    children:
      r &&
      c.jsx("div", {
        className: "bg-white",
        children: c.jsxs("div", {
          className: "pt-6",
          children: [
            c.jsxs("div", {
              className:
                "mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8",
              children: [
                c.jsx("div", {
                  className:
                    "aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block",
                  children: c.jsx("img", {
                    src: t.image.imageUrl,
                    alt: t.image.imageUrl,
                    className: "h-full w-full object-cover object-center",
                  }),
                }),
                c.jsxs("div", {
                  className: "hidden lg:grid lg:grid-cols-1 lg:gap-y-8",
                  children: [
                    c.jsx("div", {
                      className:
                        "aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",
                      children: c.jsx("img", {
                        src: t.image.imageUrl,
                        alt: t.image.imageUrl,
                        className: "h-full w-full object-cover object-center",
                      }),
                    }),
                    c.jsx("div", {
                      className:
                        "aspect-h-2 aspect-w-3 overflow-hidden rounded-lg",
                      children: c.jsx("img", {
                        src: t.image.imageUrl,
                        alt: t.image.imageUrl,
                        className: "h-full w-full object-cover object-center",
                      }),
                    }),
                  ],
                }),
                c.jsx("div", {
                  className:
                    "aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg",
                  children: c.jsx("img", {
                    src: t.image.imageUrl,
                    alt: t.image.imageUrl,
                    className: "h-full w-full object-cover object-center",
                  }),
                }),
              ],
            }),
            c.jsxs("div", {
              className:
                "mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16",
              children: [
                c.jsx("div", {
                  className:
                    "lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8",
                  children: c.jsx("h1", {
                    className:
                      "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl",
                    children: t.name,
                  }),
                }),
                c.jsxs("div", {
                  className: "mt-4 lg:row-span-3 lg:mt-0",
                  children: [
                    c.jsx("h2", {
                      className: "sr-only",
                      children: "Product information",
                    }),
                    c.jsxs("p", {
                      className: "text-3xl tracking-tight text-gray-900",
                      children: ["₹", t.new_price],
                    }),
                    c.jsxs("div", {
                      className: "mt-6",
                      children: [
                        c.jsx("h3", {
                          className: "sr-only",
                          children: "Reviews",
                        }),
                        c.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            c.jsx("div", {
                              className: "flex items-center",
                              children: [0, 1, 2, 3, 4].map((s) =>
                                c.jsx(
                                  YN,
                                  {
                                    className: tk(
                                      Is.average > s
                                        ? "text-gray-900"
                                        : "text-gray-200",
                                      "h-5 w-5 flex-shrink-0"
                                    ),
                                    "aria-hidden": "true",
                                  },
                                  s
                                )
                              ),
                            }),
                            c.jsxs("p", {
                              className: "sr-only",
                              children: [Is.average, " out of 5 stars"],
                            }),
                            c.jsxs("a", {
                              href: Is.href,
                              className:
                                "ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500",
                              children: [Is.totalCount, " reviews"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx("div", {
                      className: "mt-10",
                      children:
                        t.stock <= 0
                          ? c.jsx("div", {
                              className: "text-red-700 text-2xl",
                              children: "Out of Stock",
                            })
                          : c.jsx("button", {
                              type: "submit",
                              onClick: o,
                              className:
                                "mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                              children: "Add to cart",
                            }),
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className:
                    "py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6",
                  children: [
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "sr-only",
                          children: "Description",
                        }),
                        c.jsx("div", {
                          className: "space-y-6",
                          children: c.jsx("p", {
                            className: "text-base text-gray-900",
                            children: t.description,
                          }),
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "mt-10",
                      children: [
                        c.jsx("h3", {
                          className: "text-sm font-medium text-gray-900",
                          children: "Highlights",
                        }),
                        c.jsx("div", {
                          className: "mt-4",
                          children: c.jsxs("ul", {
                            role: "list",
                            className: "list-disc space-y-2 pl-4 text-sm",
                            children: [
                              c.jsx("li", {
                                children: "Hand cut and sewn locally",
                              }),
                              c.jsx("li", {
                                children: "Dyed with our proprietary colors",
                              }),
                              c.jsx("li", {
                                children: "Pre-washed & pre-shrunk",
                              }),
                              c.jsx("li", {
                                children: "Ultra-soft 100% cotton",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: "mt-10",
                      children: [
                        c.jsx("h2", {
                          className: "text-sm font-medium text-gray-900",
                          children: "Details",
                        }),
                        c.jsx("div", {
                          className: "mt-4 space-y-6",
                          children: c.jsx("p", {
                            children:
                              'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
  });
}
const rk = () => {
  const e = de(E1),
    { id: t } = Iv(),
    n = e.filter((r) => r._id == t);
  return c.jsx(nk, { product: n });
};
var P1 = {},
  C1 = {},
  T1 = {},
  Zl = {},
  qe = {};
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.TraceDirectionKey = qe.Direction = qe.Axis = void 0;
var Td;
qe.TraceDirectionKey = Td;
(function (e) {
  (e.NEGATIVE = "NEGATIVE"), (e.POSITIVE = "POSITIVE"), (e.NONE = "NONE");
})(Td || (qe.TraceDirectionKey = Td = {}));
var jd;
qe.Direction = jd;
(function (e) {
  (e.TOP = "TOP"),
    (e.LEFT = "LEFT"),
    (e.RIGHT = "RIGHT"),
    (e.BOTTOM = "BOTTOM"),
    (e.NONE = "NONE");
})(jd || (qe.Direction = jd = {}));
var Nd;
qe.Axis = Nd;
(function (e) {
  (e.X = "x"), (e.Y = "y");
})(Nd || (qe.Axis = Nd = {}));
Object.defineProperty(Zl, "__esModule", { value: !0 });
Zl.calculateDirection = ik;
var sc = qe;
function ik(e) {
  var t,
    n = sc.TraceDirectionKey.NEGATIVE,
    r = sc.TraceDirectionKey.POSITIVE,
    i = e[e.length - 1],
    o = e[e.length - 2] || 0;
  return e.every(function (s) {
    return s === 0;
  })
    ? sc.TraceDirectionKey.NONE
    : ((t = i > o ? r : n), i === 0 && (t = o < 0 ? r : n), t);
}
var eu = {},
  Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
Ft.resolveAxisDirection =
  Ft.getDirectionValue =
  Ft.getDirectionKey =
  Ft.getDifference =
    void 0;
var wt = qe,
  ok = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = Object.keys(t).toString();
    switch (n) {
      case wt.TraceDirectionKey.POSITIVE:
        return wt.TraceDirectionKey.POSITIVE;
      case wt.TraceDirectionKey.NEGATIVE:
        return wt.TraceDirectionKey.NEGATIVE;
      default:
        return wt.TraceDirectionKey.NONE;
    }
  };
Ft.getDirectionKey = ok;
var sk = function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t[t.length - 1] || 0;
};
Ft.getDirectionValue = sk;
var ak = function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Math.abs(t - n);
};
Ft.getDifference = ak;
var lk = function (t, n) {
  var r = wt.Direction.LEFT,
    i = wt.Direction.RIGHT,
    o = wt.Direction.NONE;
  return (
    t === wt.Axis.Y && ((r = wt.Direction.BOTTOM), (i = wt.Direction.TOP)),
    n === wt.TraceDirectionKey.NEGATIVE && (o = r),
    n === wt.TraceDirectionKey.POSITIVE && (o = i),
    o
  );
};
Ft.resolveAxisDirection = lk;
Object.defineProperty(eu, "__esModule", { value: !0 });
eu.calculateDirectionDelta = ck;
var uk = qe,
  qi = Ft;
function ck(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      n = e.length,
      r = n - 1,
      i = uk.TraceDirectionKey.NONE;
    r >= 0;
    r--
  ) {
    var o = e[r],
      s = (0, qi.getDirectionKey)(o),
      a = (0, qi.getDirectionValue)(o[s]),
      l = e[r - 1] || {},
      u = (0, qi.getDirectionKey)(l),
      f = (0, qi.getDirectionValue)(l[u]),
      h = (0, qi.getDifference)(a, f);
    if (h >= t) {
      i = s;
      break;
    } else i = u;
  }
  return i;
}
var tu = {};
Object.defineProperty(tu, "__esModule", { value: !0 });
tu.calculateDuration = dk;
function dk() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e ? t - e : 0;
}
var xp = {};
Object.defineProperty(xp, "__esModule", { value: !0 });
xp.calculateMovingPosition = fk;
function fk(e) {
  if ("changedTouches" in e) {
    var t = e.changedTouches && e.changedTouches[0];
    return { x: t && t.clientX, y: t && t.clientY };
  }
  return { x: e.clientX, y: e.clientY };
}
var wp = {},
  nu = {};
Object.defineProperty(nu, "__esModule", { value: !0 });
nu.updateTrace = pk;
function pk(e, t) {
  var n = e[e.length - 1];
  return n !== t && e.push(t), e;
}
var ru = {},
  iu = {};
Object.defineProperty(iu, "__esModule", { value: !0 });
iu.calculateTraceDirections = mk;
var Ds = qe;
function rg(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function mk() {
  for (
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = [],
      n = Ds.TraceDirectionKey.POSITIVE,
      r = Ds.TraceDirectionKey.NEGATIVE,
      i = 0,
      o = [],
      s = Ds.TraceDirectionKey.NONE;
    i < e.length;
    i++
  ) {
    var a = e[i],
      l = e[i - 1];
    if (o.length) {
      var u = a > l ? n : r;
      s === Ds.TraceDirectionKey.NONE && (s = u),
        u === s
          ? o.push(a)
          : (t.push(rg({}, s, o.slice())), (o = []), o.push(a), (s = u));
    } else a !== 0 && (s = a > 0 ? n : r), o.push(a);
  }
  return o.length && t.push(rg({}, s, o)), t;
}
Object.defineProperty(ru, "__esModule", { value: !0 });
ru.resolveDirection = xk;
var hk = Zl,
  gk = iu,
  vk = eu,
  ig = Ft,
  yk = qe;
function xk(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : yk.Axis.X,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  if (n) {
    var r = (0, gk.calculateTraceDirections)(e),
      i = (0, vk.calculateDirectionDelta)(r, n);
    return (0, ig.resolveAxisDirection)(t, i);
  }
  var o = (0, hk.calculateDirection)(e);
  return (0, ig.resolveAxisDirection)(t, o);
}
var ou = {};
Object.defineProperty(ou, "__esModule", { value: !0 });
ou.calculateVelocity = wk;
function wk(e, t, n) {
  var r = Math.sqrt(e * e + t * t);
  return r / (n || 1);
}
Object.defineProperty(wp, "__esModule", { value: !0 });
wp.calculatePosition = bk;
var og = nu,
  sg = ru,
  Sk = tu,
  _k = ou,
  ag = qe;
function bk(e, t) {
  var n = e.start,
    r = e.x,
    i = e.y,
    o = e.traceX,
    s = e.traceY,
    a = t.rotatePosition,
    l = t.directionDelta,
    u = a.x - r,
    f = i - a.y,
    h = Math.abs(u),
    p = Math.abs(f);
  (0, og.updateTrace)(o, u), (0, og.updateTrace)(s, f);
  var S = (0, sg.resolveDirection)(o, ag.Axis.X, l),
    y = (0, sg.resolveDirection)(s, ag.Axis.Y, l),
    g = (0, Sk.calculateDuration)(n, Date.now()),
    E = (0, _k.calculateVelocity)(h, p, g);
  return {
    absX: h,
    absY: p,
    deltaX: u,
    deltaY: f,
    directionX: S,
    directionY: y,
    duration: g,
    positionX: a.x,
    positionY: a.y,
    velocity: E,
  };
}
var su = {};
Object.defineProperty(su, "__esModule", { value: !0 });
su.checkIsMoreThanSingleTouches = void 0;
var Ek = function (t) {
  return !!(t.touches && t.touches.length > 1);
};
su.checkIsMoreThanSingleTouches = Ek;
var is = {},
  au = {};
Object.defineProperty(au, "__esModule", { value: !0 });
au.createOptions = Pk;
function Pk() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return (
    Object.defineProperty(e, "passive", {
      get: function () {
        return (this.isPassiveSupported = !0), !0;
      },
      enumerable: !0,
    }),
    e
  );
}
Object.defineProperty(is, "__esModule", { value: !0 });
is.checkIsPassiveSupported = Tk;
is.noop = void 0;
var Ck = au;
function Tk(e) {
  if (typeof e == "boolean") return e;
  var t = { isPassiveSupported: e };
  try {
    var n = (0, Ck.createOptions)(t);
    window.addEventListener("checkIsPassiveSupported", kd, n),
      window.removeEventListener("checkIsPassiveSupported", kd, n);
  } catch {}
  return t.isPassiveSupported;
}
var kd = function () {};
is.noop = kd;
var lu = {};
Object.defineProperty(lu, "__esModule", { value: !0 });
lu.checkIsTouchEventsSupported = void 0;
function Od(e) {
  "@babel/helpers - typeof";
  return (
    (Od =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Od(e)
  );
}
var jk = function () {
  return (
    (typeof window > "u" ? "undefined" : Od(window)) === "object" &&
    ("ontouchstart" in window || !!window.navigator.maxTouchPoints)
  );
};
lu.checkIsTouchEventsSupported = jk;
var uu = {};
Object.defineProperty(uu, "__esModule", { value: !0 });
uu.getInitialState = void 0;
function lg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Nk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lg(Object(n), !0).forEach(function (r) {
          kk(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : lg(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function kk(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Ok = function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Nk({ x: 0, y: 0, start: 0, isSwiping: !1, traceX: [], traceY: [] }, t);
};
uu.getInitialState = Ok;
var cu = {};
Object.defineProperty(cu, "__esModule", { value: !0 });
cu.getInitialProps = void 0;
function ug(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ik(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ug(Object(n), !0).forEach(function (r) {
          Dk(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ug(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Dk(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Ak = function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Ik(
    {
      element: null,
      target: null,
      delta: 10,
      directionDelta: 0,
      rotationAngle: 0,
      mouseTrackingEnabled: !1,
      touchTrackingEnabled: !0,
      preventDefaultTouchmoveEvent: !1,
      preventTrackingOnMouseleave: !1,
    },
    t
  );
};
cu.getInitialProps = Ak;
var Sp = {};
Object.defineProperty(Sp, "__esModule", { value: !0 });
Sp.getOptions = Rk;
function Rk() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
  return e ? { passive: !1 } : {};
}
var _p = {};
Object.defineProperty(_p, "__esModule", { value: !0 });
_p.rotateByAngle = Mk;
function Mk(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (t === 0) return e;
  var n = e.x,
    r = e.y,
    i = (Math.PI / 180) * t,
    o = n * Math.cos(i) + r * Math.sin(i),
    s = r * Math.cos(i) - n * Math.sin(i);
  return { x: o, y: s };
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = Zl;
  Object.keys(t).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === t[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return t[d];
        },
      });
  });
  var n = eu;
  Object.keys(n).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === n[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return n[d];
        },
      });
  });
  var r = tu;
  Object.keys(r).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === r[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return r[d];
        },
      });
  });
  var i = xp;
  Object.keys(i).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === i[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return i[d];
        },
      });
  });
  var o = wp;
  Object.keys(o).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === o[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return o[d];
        },
      });
  });
  var s = iu;
  Object.keys(s).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === s[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return s[d];
        },
      });
  });
  var a = ou;
  Object.keys(a).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === a[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return a[d];
        },
      });
  });
  var l = su;
  Object.keys(l).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === l[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return l[d];
        },
      });
  });
  var u = is;
  Object.keys(u).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === u[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return u[d];
        },
      });
  });
  var f = lu;
  Object.keys(f).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === f[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return f[d];
        },
      });
  });
  var h = Ft;
  Object.keys(h).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === h[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return h[d];
        },
      });
  });
  var p = au;
  Object.keys(p).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === p[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return p[d];
        },
      });
  });
  var S = uu;
  Object.keys(S).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === S[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return S[d];
        },
      });
  });
  var y = cu;
  Object.keys(y).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === y[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return y[d];
        },
      });
  });
  var g = Sp;
  Object.keys(g).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === g[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return g[d];
        },
      });
  });
  var E = ru;
  Object.keys(E).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === E[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return E[d];
        },
      });
  });
  var w = _p;
  Object.keys(w).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === w[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return w[d];
        },
      });
  });
  var m = nu;
  Object.keys(m).forEach(function (d) {
    d === "default" ||
      d === "__esModule" ||
      (d in e && e[d] === m[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return m[d];
        },
      });
  });
})(T1);
(function (e) {
  function t(p) {
    "@babel/helpers - typeof";
    return (
      (t =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (S) {
              return typeof S;
            }
          : function (S) {
              return S &&
                typeof Symbol == "function" &&
                S.constructor === Symbol &&
                S !== Symbol.prototype
                ? "symbol"
                : typeof S;
            }),
      t(p)
    );
  }
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = {};
  e.default = void 0;
  var r = s(T1),
    i = qe;
  Object.keys(i).forEach(function (p) {
    p === "default" ||
      p === "__esModule" ||
      Object.prototype.hasOwnProperty.call(n, p) ||
      (p in e && e[p] === i[p]) ||
      Object.defineProperty(e, p, {
        enumerable: !0,
        get: function () {
          return i[p];
        },
      });
  });
  function o(p) {
    if (typeof WeakMap != "function") return null;
    var S = new WeakMap(),
      y = new WeakMap();
    return (o = function (E) {
      return E ? y : S;
    })(p);
  }
  function s(p, S) {
    if (!S && p && p.__esModule) return p;
    if (p === null || (t(p) !== "object" && typeof p != "function"))
      return { default: p };
    var y = o(S);
    if (y && y.has(p)) return y.get(p);
    var g = {},
      E = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in p)
      if (w !== "default" && Object.prototype.hasOwnProperty.call(p, w)) {
        var m = E ? Object.getOwnPropertyDescriptor(p, w) : null;
        m && (m.get || m.set) ? Object.defineProperty(g, w, m) : (g[w] = p[w]);
      }
    return (g.default = p), y && y.set(p, g), g;
  }
  function a(p, S) {
    if (!(p instanceof S))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(p, S) {
    for (var y = 0; y < S.length; y++) {
      var g = S[y];
      (g.enumerable = g.enumerable || !1),
        (g.configurable = !0),
        "value" in g && (g.writable = !0),
        Object.defineProperty(p, g.key, g);
    }
  }
  function u(p, S, y) {
    return (
      S && l(p.prototype, S),
      y && l(p, y),
      Object.defineProperty(p, "prototype", { writable: !1 }),
      p
    );
  }
  function f(p, S, y) {
    return (
      S in p
        ? Object.defineProperty(p, S, {
            value: y,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (p[S] = y),
      p
    );
  }
  var h = (function () {
    function p(S) {
      a(this, p),
        f(this, "state", void 0),
        f(this, "props", void 0),
        (this.state = r.getInitialState()),
        (this.props = r.getInitialProps(S)),
        (this.handleSwipeStart = this.handleSwipeStart.bind(this)),
        (this.handleSwipeMove = this.handleSwipeMove.bind(this)),
        (this.handleSwipeEnd = this.handleSwipeEnd.bind(this)),
        (this.handleMouseDown = this.handleMouseDown.bind(this)),
        (this.handleMouseMove = this.handleMouseMove.bind(this)),
        (this.handleMouseUp = this.handleMouseUp.bind(this)),
        (this.handleMouseLeave = this.handleMouseLeave.bind(this));
    }
    return (
      u(
        p,
        [
          {
            key: "init",
            value: function () {
              this.setupTouchListeners(), this.setupMouseListeners();
            },
          },
          {
            key: "update",
            value: function (y) {
              var g = this.props,
                E = Object.assign({}, g, y);
              if (g.element !== E.element || g.target !== E.target) {
                this.destroy(), (this.props = E), this.init();
                return;
              }
              (this.props = E),
                (g.mouseTrackingEnabled !== E.mouseTrackingEnabled ||
                  g.preventTrackingOnMouseleave !==
                    E.preventTrackingOnMouseleave) &&
                  (this.cleanupMouseListeners(),
                  E.mouseTrackingEnabled
                    ? this.setupMouseListeners()
                    : this.cleanupMouseListeners()),
                g.touchTrackingEnabled !== E.touchTrackingEnabled &&
                  (this.cleanupTouchListeners(),
                  E.touchTrackingEnabled
                    ? this.setupTouchListeners()
                    : this.cleanupTouchListeners());
            },
          },
          {
            key: "destroy",
            value: function () {
              this.cleanupMouseListeners(),
                this.cleanupTouchListeners(),
                (this.state = r.getInitialState()),
                (this.props = r.getInitialProps());
            },
          },
          {
            key: "setupTouchListeners",
            value: function () {
              var y = this.props,
                g = y.element,
                E = y.target,
                w = y.touchTrackingEnabled;
              if (g && w) {
                var m = E || g,
                  d = r.checkIsPassiveSupported(),
                  v = r.getOptions(d);
                m.addEventListener("touchstart", this.handleSwipeStart, v),
                  m.addEventListener("touchmove", this.handleSwipeMove, v),
                  m.addEventListener("touchend", this.handleSwipeEnd, v);
              }
            },
          },
          {
            key: "cleanupTouchListeners",
            value: function () {
              var y = this.props,
                g = y.element,
                E = y.target,
                w = E || g;
              w &&
                (w.removeEventListener("touchstart", this.handleSwipeStart),
                w.removeEventListener("touchmove", this.handleSwipeMove),
                w.removeEventListener("touchend", this.handleSwipeEnd));
            },
          },
          {
            key: "setupMouseListeners",
            value: function () {
              var y = this.props,
                g = y.element,
                E = y.mouseTrackingEnabled,
                w = y.preventTrackingOnMouseleave;
              E &&
                g &&
                (g.addEventListener("mousedown", this.handleMouseDown),
                g.addEventListener("mousemove", this.handleMouseMove),
                g.addEventListener("mouseup", this.handleMouseUp),
                w && g.addEventListener("mouseleave", this.handleMouseLeave));
            },
          },
          {
            key: "cleanupMouseListeners",
            value: function () {
              var y = this.props.element;
              y &&
                (y.removeEventListener("mousedown", this.handleMouseDown),
                y.removeEventListener("mousemove", this.handleMouseMove),
                y.removeEventListener("mouseup", this.handleMouseUp),
                y.removeEventListener("mouseleave", this.handleMouseLeave));
            },
          },
          {
            key: "getEventData",
            value: function (y) {
              var g =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : { directionDelta: 0 },
                E = this.props.rotationAngle,
                w = g.directionDelta,
                m = r.calculateMovingPosition(y),
                d = r.rotateByAngle(m, E);
              return r.calculatePosition(this.state, {
                rotatePosition: d,
                directionDelta: w,
              });
            },
          },
          {
            key: "handleSwipeStart",
            value: function (y) {
              if (!r.checkIsMoreThanSingleTouches(y)) {
                var g = this.props.rotationAngle,
                  E = r.calculateMovingPosition(y),
                  w = r.rotateByAngle(E, g),
                  m = w.x,
                  d = w.y;
                this.state = r.getInitialState({
                  isSwiping: !1,
                  start: Date.now(),
                  x: m,
                  y: d,
                });
              }
            },
          },
          {
            key: "handleSwipeMove",
            value: function (y) {
              var g = this.state,
                E = g.x,
                w = g.y,
                m = g.isSwiping;
              if (!(!E || !w || r.checkIsMoreThanSingleTouches(y))) {
                var d = this.props.directionDelta || 0,
                  v = this.getEventData(y, { directionDelta: d }),
                  x = v.absX,
                  b = v.absY,
                  _ = v.deltaX,
                  P = v.deltaY,
                  N = v.directionX,
                  O = v.directionY,
                  M = v.duration,
                  T = v.velocity,
                  I = this.props,
                  R = I.delta,
                  $ = I.preventDefaultTouchmoveEvent,
                  z = I.onSwipeStart,
                  U = I.onSwiping;
                y.cancelable && $ && y.preventDefault(),
                  !(x < Number(R) && b < Number(R) && !m) &&
                    (z &&
                      !m &&
                      z(y, {
                        deltaX: _,
                        deltaY: P,
                        absX: x,
                        absY: b,
                        directionX: N,
                        directionY: O,
                        duration: M,
                        velocity: T,
                      }),
                    (this.state.isSwiping = !0),
                    U &&
                      U(y, {
                        deltaX: _,
                        deltaY: P,
                        absX: x,
                        absY: b,
                        directionX: N,
                        directionY: O,
                        duration: M,
                        velocity: T,
                      }));
              }
            },
          },
          {
            key: "handleSwipeEnd",
            value: function (y) {
              var g = this.props,
                E = g.onSwiped,
                w = g.onTap;
              if (this.state.isSwiping) {
                var m = this.props.directionDelta || 0,
                  d = this.getEventData(y, { directionDelta: m });
                E && E(y, d);
              } else {
                var v = this.getEventData(y);
                w && w(y, v);
              }
              this.state = r.getInitialState();
            },
          },
          {
            key: "handleMouseDown",
            value: function (y) {
              var g = this.props.target;
              g
                ? g === y.target && this.handleSwipeStart(y)
                : this.handleSwipeStart(y);
            },
          },
          {
            key: "handleMouseMove",
            value: function (y) {
              this.handleSwipeMove(y);
            },
          },
          {
            key: "handleMouseUp",
            value: function (y) {
              var g = this.state.isSwiping,
                E = this.props.target;
              E
                ? (E === y.target || g) && this.handleSwipeEnd(y)
                : this.handleSwipeEnd(y);
            },
          },
          {
            key: "handleMouseLeave",
            value: function (y) {
              var g = this.state.isSwiping;
              g && this.handleSwipeEnd(y);
            },
          },
        ],
        [
          {
            key: "isTouchEventsSupported",
            value: function () {
              return r.checkIsTouchEventsSupported();
            },
          },
        ]
      ),
      p
    );
  })();
  e.default = h;
})(C1);
var j1 = {},
  hn = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.Modifiers =
      e.Classnames =
      e.AutoplayDirection =
      e.ControlsStrategy =
      e.AutoPlayStrategy =
      e.AnimationType =
      e.EventType =
        void 0),
    (function (t) {
      (t.ACTION = "action"),
        (t.INIT = "init"),
        (t.RESIZE = "resize"),
        (t.UPDATE = "update");
    })(e.EventType || (e.EventType = {})),
    (function (t) {
      (t.FADEOUT = "fadeout"), (t.SLIDE = "slide");
    })(e.AnimationType || (e.AnimationType = {})),
    (function (t) {
      (t.DEFAULT = "default"),
        (t.ALL = "all"),
        (t.ACTION = "action"),
        (t.NONE = "none");
    })(e.AutoPlayStrategy || (e.AutoPlayStrategy = {})),
    (function (t) {
      (t.DEFAULT = "default"),
        (t.ALTERNATE = "alternate"),
        (t.RESPONSIVE = "responsive");
    })(e.ControlsStrategy || (e.ControlsStrategy = {})),
    (function (t) {
      (t.RTL = "rtl"), (t.LTR = "ltr");
    })(e.AutoplayDirection || (e.AutoplayDirection = {})),
    (function (t) {
      (t.ANIMATED = "animated animated-out fadeOut"),
        (t.ROOT = "alice-carousel"),
        (t.WRAPPER = "alice-carousel__wrapper"),
        (t.STAGE = "alice-carousel__stage"),
        (t.STAGE_ITEM = "alice-carousel__stage-item"),
        (t.DOTS = "alice-carousel__dots"),
        (t.DOTS_ITEM = "alice-carousel__dots-item"),
        (t.PLAY_BTN = "alice-carousel__play-btn"),
        (t.PLAY_BTN_ITEM = "alice-carousel__play-btn-item"),
        (t.PLAY_BTN_WRAPPER = "alice-carousel__play-btn-wrapper"),
        (t.SLIDE_INFO = "alice-carousel__slide-info"),
        (t.SLIDE_INFO_ITEM = "alice-carousel__slide-info-item"),
        (t.BUTTON_PREV = "alice-carousel__prev-btn"),
        (t.BUTTON_PREV_WRAPPER = "alice-carousel__prev-btn-wrapper"),
        (t.BUTTON_PREV_ITEM = "alice-carousel__prev-btn-item"),
        (t.BUTTON_NEXT = "alice-carousel__next-btn"),
        (t.BUTTON_NEXT_WRAPPER = "alice-carousel__next-btn-wrapper"),
        (t.BUTTON_NEXT_ITEM = "alice-carousel__next-btn-item");
    })(e.Classnames || (e.Classnames = {})),
    (function (t) {
      (t.ACTIVE = "__active"),
        (t.INACTIVE = "__inactive"),
        (t.CLONED = "__cloned"),
        (t.CUSTOM = "__custom"),
        (t.PAUSE = "__pause"),
        (t.SEPARATOR = "__separator"),
        (t.SSR = "__ssr"),
        (t.TARGET = "__target");
    })(e.Modifiers || (e.Modifiers = {}));
})(hn);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.defaultProps = void 0);
  var t = hn;
  e.defaultProps = {
    activeIndex: 0,
    animationDuration: 400,
    animationEasingFunction: "ease",
    animationType: t.AnimationType.SLIDE,
    autoHeight: !1,
    autoWidth: !1,
    autoPlay: !1,
    autoPlayControls: !1,
    autoPlayDirection: t.AutoplayDirection.LTR,
    autoPlayInterval: 400,
    autoPlayStrategy: t.AutoPlayStrategy.DEFAULT,
    children: void 0,
    controlsStrategy: t.ControlsStrategy.DEFAULT,
    disableButtonsControls: !1,
    disableDotsControls: !1,
    disableSlideInfo: !0,
    infinite: !1,
    innerWidth: void 0,
    items: void 0,
    keyboardNavigation: !1,
    mouseTracking: !1,
    syncStateOnPropsUpdate: !0,
    name: "",
    paddingLeft: 0,
    paddingRight: 0,
    responsive: void 0,
    swipeDelta: 20,
    swipeExtraPadding: 200,
    ssrSilentMode: !0,
    touchTracking: !0,
    touchMoveDefaultEvents: !0,
    onInitialized: function () {},
    onResized: function () {},
    onUpdated: function () {},
    onResizeEvent: void 0,
    onSlideChange: function () {},
    onSlideChanged: function () {},
  };
})(j1);
var N1 = {};
(function (e) {
  var t = function () {
      return (t =
        Object.assign ||
        function (o) {
          for (var s, a = 1, l = arguments.length; a < l; a++)
            for (var u in (s = arguments[a]))
              Object.prototype.hasOwnProperty.call(s, u) && (o[u] = s[u]);
          return o;
        }).apply(this, arguments);
    },
    n = function (o) {
      return o && o.__esModule ? o : { default: o };
    },
    r = (Object.defineProperty(e, "__esModule", { value: !0 }), n(C));
  function i(o) {
    var s = { xDown: null, xUp: null };
    return r.default.createElement(
      "a",
      t(
        {
          onClick: function (a) {
            s.xDown !== s.xUp && a.preventDefault();
          },
          onMouseDown: function (a) {
            a.preventDefault(), (s.xUp = null), (s.xDown = a.clientX);
          },
          onMouseUp: function (a) {
            a.preventDefault(), (s.xUp = a.clientX);
          },
        },
        o
      ),
      o.children
    );
  }
  e.default = i;
})(N1);
var k1 = {},
  O1 = {},
  Di = {},
  bp = {},
  Ep = {},
  Pp = {};
(function (e) {
  var t = function () {
      return (t =
        Object.assign ||
        function (i) {
          for (var o, s = 1, a = arguments.length; s < a; s++)
            for (var l in (o = arguments[s]))
              Object.prototype.hasOwnProperty.call(o, l) && (i[l] = o[l]);
          return i;
        }).apply(this, arguments);
    },
    n =
      (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.mapPositionCoords = e.mapPartialCoords = void 0),
      function (i) {
        return i.map(function (o) {
          return { width: o.width, position: 0 };
        });
      }),
    r =
      ((e.mapPartialCoords = n),
      function (i, o) {
        return (
          o === void 0 && (o = 0),
          i.map(function (s) {
            return s.position > o ? t(t({}, s), { position: o }) : s;
          })
        );
      });
  e.mapPositionCoords = r;
})(Pp);
var os = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.isVerticalTouchmoveDetected =
      e.getFadeoutAnimationPosition =
      e.getFadeoutAnimationIndex =
      e.getSwipeTouchendIndex =
      e.getSwipeTouchendPosition =
      e.getSwipeTransformationCursor =
      e.getTransformationItemIndex =
      e.getSwipeShiftValue =
      e.getItemCoords =
      e.getIsLeftDirection =
      e.shouldRecalculateSwipePosition =
      e.getSwipeLimitMax =
      e.getSwipeLimitMin =
      e.shouldCancelSlideAnimation =
      e.shouldRecalculateSlideIndex =
      e.getUpdateSlidePositionIndex =
      e.getActiveIndex =
      e.getStartIndex =
      e.getShiftIndex =
        void 0);
  var t = function (v, x) {
      return (v = v === void 0 ? 0 : v) + (x = x === void 0 ? 0 : x);
    },
    n =
      ((e.getShiftIndex = t),
      function (v, x) {
        if ((v === void 0 && (v = 0), (x = x === void 0 ? 0 : x))) {
          if (x <= v) return x - 1;
          if (0 < v) return v;
        }
        return 0;
      }),
    r =
      ((e.getStartIndex = n),
      function (_) {
        var x = _.startIndex,
          x = x === void 0 ? 0 : x,
          b = _.itemsCount,
          _ = _.infinite;
        return _ !== void 0 && _
          ? x
          : (0, e.getStartIndex)(x, b === void 0 ? 0 : b);
      }),
    i =
      ((e.getActiveIndex = r),
      function (v, x) {
        return v < 0 ? x - 1 : x <= v ? 0 : v;
      }),
    o =
      ((e.getUpdateSlidePositionIndex = i),
      function (v, x) {
        return v < 0 || x <= v;
      }),
    s =
      ((e.shouldRecalculateSlideIndex = o),
      function (v, x) {
        return v < 0 || x <= v;
      }),
    a =
      ((e.shouldCancelSlideAnimation = s),
      function (_, N) {
        var b = _.itemsOffset,
          _ = _.transformationSet,
          _ = _ === void 0 ? [] : _,
          P = N.infinite,
          N = N.swipeExtraPadding;
        return P
          ? (_[b === void 0 ? 0 : b] || {}).position
          : ((P = (_[0] || {}).width),
            Math.min(N === void 0 ? 0 : N, P === void 0 ? 0 : P));
      }),
    l =
      ((e.getSwipeLimitMin = a),
      function (M, _) {
        var b = _.infinite,
          _ = _.swipeExtraPadding,
          _ = _ === void 0 ? 0 : _,
          P = M.itemsCount,
          N = M.itemsOffset,
          O = M.itemsInSlide,
          O = O === void 0 ? 1 : O,
          M = M.transformationSet,
          M = M === void 0 ? [] : M;
        return b
          ? (
              M[
                (P === void 0 ? 1 : P) +
                  (0, e.getShiftIndex)(O, N === void 0 ? 0 : N)
              ] || {}
            ).position || 0
          : (0, e.getItemCoords)(-O, M).position + _;
      }),
    u =
      ((e.getSwipeLimitMax = l),
      function (v, x, b) {
        return -x <= v || Math.abs(v) >= b;
      }),
    f =
      ((e.shouldRecalculateSwipePosition = u),
      function (v) {
        return (v = v === void 0 ? 0 : v) < 0;
      }),
    h =
      ((e.getIsLeftDirection = f),
      function (v, x) {
        return (
          (x = x === void 0 ? [] : x).slice((v = v === void 0 ? 0 : v))[0] || {
            position: 0,
            width: 0,
          }
        );
      }),
    p =
      ((e.getItemCoords = h),
      function (v, x) {
        return (
          v === void 0 && (v = 0),
          x === void 0 && (x = []),
          (0, e.getItemCoords)(v, x).position
        );
      }),
    S =
      ((e.getSwipeShiftValue = p),
      function (v, x) {
        return (
          x === void 0 && (x = 0),
          (v = v === void 0 ? [] : v).findIndex(function (b) {
            return b.position >= Math.abs(x);
          })
        );
      }),
    y =
      ((e.getTransformationItemIndex = S),
      function (v, x, b) {
        return (
          v === void 0 && (v = []),
          x === void 0 && (x = 0),
          b === void 0 && (b = 0),
          (v = (0, e.getTransformationItemIndex)(v, x)),
          (0, e.getIsLeftDirection)(b) ? v : v - 1
        );
      }),
    g =
      ((e.getSwipeTransformationCursor = y),
      function (M, I, T) {
        T === void 0 && (T = 0);
        var _ = M.infinite,
          P = M.autoWidth,
          N = M.isStageContentPartial,
          O = M.swipeAllowedPositionMax,
          M = M.transformationSet,
          T = (0, e.getSwipeTransformationCursor)(M, T, I),
          I = (0, e.getItemCoords)(T, M).position;
        if (!_) {
          if (P && N) return 0;
          if (O < I) return -O;
        }
        return -I;
      }),
    E =
      ((e.getSwipeTouchendPosition = g),
      function (v, I) {
        var b = I.transformationSet,
          _ = I.itemsInSlide,
          P = I.itemsOffset,
          N = I.itemsCount,
          O = I.infinite,
          M = I.isStageContentPartial,
          T = I.activeIndex,
          I = I.translate3d;
        return O || (!M && I !== Math.abs(v))
          ? ((M = (0, e.getTransformationItemIndex)(b, v)),
            O
              ? M < (I = (0, e.getShiftIndex)(_, P))
                ? N - _ - P + M
                : I + N <= M
                ? M - (I + N)
                : M - I
              : M)
          : T;
      }),
    w =
      ((e.getSwipeTouchendIndex = E),
      function (_) {
        var x = _.infinite,
          b = _.activeIndex,
          _ = _.itemsInSlide;
        return x ? b + _ : b;
      }),
    m =
      ((e.getFadeoutAnimationIndex = w),
      function (v, _) {
        var b = _.activeIndex,
          _ = _.stageWidth;
        return v < b ? (b - v) * -_ || 0 : (v - b) * _ || 0;
      }),
    d =
      ((e.getFadeoutAnimationPosition = m),
      function (v, x, b) {
        return v < (b = b === void 0 ? 0 : b) || v < 0.1 * x;
      });
  e.isVerticalTouchmoveDetected = d;
})(os);
(function (e) {
  var t = function () {
      return (t =
        Object.assign ||
        function (T) {
          for (var I, R = 1, $ = arguments.length; R < $; R++)
            for (var z in (I = arguments[R]))
              Object.prototype.hasOwnProperty.call(I, z) && (T[z] = I[z]);
          return T;
        }).apply(this, arguments);
    },
    n =
      (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getItemsInSlide =
        e.canUseDOM =
        e.getTransformMatrix =
        e.getTranslateXProperty =
        e.getTouchmoveTranslatePosition =
        e.getTranslate3dProperty =
        e.getRenderStageItemStyles =
        e.getRenderStageStyles =
        e.getTransitionProperty =
        e.getRenderWrapperStyles =
        e.animate =
        e.shouldHandleResizeEvent =
        e.getElementFirstChild =
        e.getElementCursor =
        e.getAutoheightProperty =
        e.getElementDimensions =
        e.getItemWidth =
        e.createDefaultTransformationSet =
        e.createAutowidthTransformationSet =
        e.isElement =
        e.createClones =
        e.getItemsOffset =
        e.getItemsCount =
        e.getSlides =
          void 0),
      Pp),
    r = os,
    i = function (R) {
      var I = R.children,
        R = R.items;
      return I ? (I.length ? I : [I]) : R === void 0 ? [] : R;
    },
    o =
      ((e.getSlides = i),
      function (T) {
        return (0, e.getSlides)(T).length;
      }),
    s =
      ((e.getItemsCount = o),
      function ($) {
        var I = $.infinite,
          R = $.paddingRight,
          $ = $.paddingLeft;
        return I && ($ || R) ? 1 : 0;
      }),
    a =
      ((e.getItemsOffset = s),
      function (T) {
        var I,
          R,
          $,
          z,
          U = (0, e.getSlides)(T);
        return T.infinite
          ? ((I = (0, e.getItemsCount)(T)),
            (z = (0, e.getItemsOffset)(T)),
            (T = (0, e.getItemsInSlide)(I, T)),
            ($ = Math.min(T, I) + z),
            (R = U.slice(0, $)),
            ($ = U.slice(-$)),
            z &&
              T === I &&
              ((z = U[0]), (T = U.slice(-1)[0]), $.unshift(T), R.push(z)),
            $.concat(U, R))
          : U;
      }),
    l =
      ((e.createClones = a),
      function (T) {
        try {
          return T instanceof Element || T instanceof HTMLDocument;
        } catch {
          return !1;
        }
      }),
    u =
      ((e.isElement = l),
      function (T, I, R) {
        I === void 0 && (I = 0), R === void 0 && (R = !1);
        var $ = 0,
          z = !0,
          U = [];
        return (
          (0, e.isElement)(T) &&
            ((U = Array.from((T == null ? void 0 : T.children) || []).reduce(
              function (D, Q, J) {
                var G = 0,
                  J = J - 1,
                  se = D[J],
                  Q = p(Q == null ? void 0 : Q.firstChild).width,
                  Q = Q === void 0 ? 0 : Q;
                return (
                  (z = ($ += Q) <= I),
                  se && (G = J == 0 ? se.width : se.width + se.position),
                  D.push({ position: G, width: Q }),
                  D
                );
              },
              []
            )),
            R ||
              (U = z
                ? (0, n.mapPartialCoords)(U)
                : ((T = $ - I), (0, n.mapPositionCoords)(U, T)))),
          { coords: U, content: $, partial: z }
        );
      }),
    f =
      ((e.createAutowidthTransformationSet = u),
      function (T, I, R, $) {
        $ === void 0 && ($ = !1);
        var z = 0,
          U = !0,
          D = [],
          V = (0, e.getItemWidth)(I, R);
        return (
          (D = T.reduce(function (W, G, Q) {
            var se = 0,
              Q = W[Q - 1];
            return (
              (U = (z += V) <= I),
              Q && (se = V + Q.position || 0),
              W.push({ width: V, position: se }),
              W
            );
          }, [])),
          {
            coords: (D = $
              ? D
              : U
              ? (0, n.mapPartialCoords)(D)
              : ((R = z - I), (0, n.mapPositionCoords)(D, R))),
            content: z,
            partial: U,
          }
        );
      }),
    h =
      ((e.createDefaultTransformationSet = f),
      function (T, I) {
        return 0 < I ? T / I : T;
      });
  function p(T) {
    return T && T.getBoundingClientRect
      ? { width: (T = T.getBoundingClientRect()).width, height: T.height }
      : { width: 0, height: 0 };
  }
  (e.getItemWidth = h), (e.getElementDimensions = p);
  var S = function (T, $, z) {
      var $ = (0, e.getElementCursor)($, z),
        z = (0, e.getElementFirstChild)(T, $);
      if ((0, e.isElement)(z))
        return (
          (T = window.getComputedStyle(z)),
          ($ = parseFloat(T.marginTop)),
          (T = parseFloat(T.marginBottom)),
          Math.ceil(z.offsetHeight + $ + T)
        );
    },
    y =
      ((e.getAutoheightProperty = S),
      function (T, $) {
        var R = $.activeIndex,
          $ = $.itemsInSlide;
        return T.infinite ? R + $ + (0, e.getItemsOffset)(T) : R;
      }),
    g =
      ((e.getElementCursor = y),
      function (T, I) {
        return (T = (T && T.children) || []), (T[I] && T[I].firstChild) || null;
      });
  function E(T, I, R) {
    return (
      (I = I === void 0 ? {} : I).width !== (R = R === void 0 ? {} : R).width
    );
  }
  function w(T, z) {
    var z = z || {},
      R = z.position,
      R = R === void 0 ? 0 : R,
      $ = z.animationDuration,
      $ = $ === void 0 ? 0 : $,
      z = z.animationEasingFunction,
      z = z === void 0 ? "ease" : z;
    return (
      T &&
        (0, e.isElement)(T) &&
        ((T.style.transition = "transform ".concat($, "ms ").concat(z, " 0ms")),
        (T.style.transform = "translate3d(".concat(R, "px, 0, 0)"))),
      T
    );
  }
  (e.getElementFirstChild = g),
    (e.shouldHandleResizeEvent = E),
    (e.animate = w);
  var m = function (T, I, R) {
      var U = T || {},
        $ = U.paddingLeft,
        z = U.paddingRight,
        D = U.autoHeight,
        U = U.animationDuration,
        D = D ? (0, e.getAutoheightProperty)(R, T, I) : void 0;
      return {
        height: D,
        transition: D ? "height ".concat(U, "ms") : void 0,
        paddingLeft: "".concat($, "px"),
        paddingRight: "".concat(z, "px"),
      };
    },
    d =
      ((e.getRenderWrapperStyles = m),
      function (R) {
        var R = R || {},
          I = R.animationDuration,
          R = R.animationEasingFunction,
          R = R === void 0 ? "ease" : R;
        return "transform "
          .concat(I === void 0 ? 0 : I, "ms ")
          .concat(R, " 0ms");
      }),
    v =
      ((e.getTransitionProperty = d),
      function (T, I) {
        return (
          (T = (T || {}).translate3d),
          (T = "translate3d(".concat(-(T === void 0 ? 0 : T), "px, 0, 0)")),
          t(t({}, I), { transform: T })
        );
      }),
    x =
      ((e.getRenderStageStyles = v),
      function (T, U) {
        var D = U.transformationSet,
          R = U.fadeoutAnimationIndex,
          $ = U.fadeoutAnimationPosition,
          z = U.fadeoutAnimationProcessing,
          U = U.animationDuration,
          D = (D[T] || {}).width;
        return z && R === T
          ? {
              transform: "translateX(".concat($, "px)"),
              animationDuration: "".concat(U, "ms"),
              width: "".concat(D, "px"),
            }
          : { width: D };
      }),
    b =
      ((e.getRenderStageItemStyles = x),
      function (T, D) {
        var R = T,
          $ = D.infinite,
          z = D.itemsOffset,
          U = D.itemsInSlide,
          D = D.transformationSet;
        return (
          (
            (D === void 0 ? [] : D)[
              (R = $
                ? T +
                  (0, r.getShiftIndex)(
                    U === void 0 ? 0 : U,
                    z === void 0 ? 0 : z
                  )
                : R)
            ] || {}
          ).position || 0
        );
      }),
    _ =
      ((e.getTranslate3dProperty = b),
      function (T, I) {
        return -(I - Math.floor(T));
      });
  function P(T) {
    return (T = N(T)), (T = (T && T[4]) || ""), Number(T);
  }
  function N(T) {
    return (
      (T &&
        (0, e.isElement)(T) &&
        window.getComputedStyle(T).transform.match(/(-?[0-9.]+)/g)) ||
      []
    );
  }
  (e.getTouchmoveTranslatePosition = _),
    (e.getTranslateXProperty = P),
    (e.getTransformMatrix = N);
  var O = function () {
      var T;
      try {
        return !!(
          (T = window == null ? void 0 : window.document) != null &&
          T.createElement
        );
      } catch {
        return !1;
      }
    },
    M =
      ((e.canUseDOM = O),
      function (T, V) {
        var R,
          $ = 1,
          z = V.responsive,
          U = V.autoWidth,
          D = V.infinite,
          V = V.innerWidth;
        return U !== void 0 && U
          ? D !== void 0 && D
            ? T
            : $
          : (z &&
              (U = Object.keys(z)).length &&
              (V || (0, e.canUseDOM)()) &&
              ((R = V === void 0 ? window.innerWidth : V),
              U.forEach(function (W) {
                var G;
                Number(W) <= R &&
                  ((G = (W = z[W]).items),
                  (W = W.itemsFit),
                  ($ =
                    (W === void 0 ? "fill" : W) === "contain"
                      ? G
                      : Math.min(G, T)));
              })),
            $ || 1);
      });
  e.getItemsInSlide = M;
})(Ep);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.calculateInitialState =
      e.getIsStageContentPartial =
      e.concatClassnames =
        void 0);
  var t = Ep,
    n = os,
    r = function () {
      for (var s = [], a = 0; a < arguments.length; a++) s[a] = arguments[a];
      return s.filter(Boolean).join(" ");
    },
    i =
      ((e.concatClassnames = r),
      function (s, a, l) {
        return (
          a === void 0 && (a = 0),
          l === void 0 && (l = 0),
          !(s = s !== void 0 && s) && l <= a
        );
      }),
    o =
      ((e.getIsStageContentPartial = i),
      function (P, a, l) {
        l === void 0 && (l = (0, t.canUseDOM)());
        var u,
          f,
          h = P.animationDuration,
          h = h === void 0 ? 0 : h,
          p = P.infinite,
          p = p !== void 0 && p,
          S = P.autoPlay,
          S = S !== void 0 && S,
          y = P.autoWidth,
          y = y !== void 0 && y,
          g = (0, t.createClones)(P),
          E = (0, t.getTransitionProperty)(),
          w = (0, t.getItemsCount)(P),
          m = (0, t.getItemsOffset)(P),
          d = (0, t.getItemsInSlide)(w, P),
          v = (0, n.getStartIndex)(P.activeIndex, w),
          v = (0, n.getActiveIndex)({
            startIndex: v,
            itemsCount: w,
            infinite: p,
          }),
          x = (0, t.getElementDimensions)(a).width,
          b =
            ((f =
              ((a = (
                y
                  ? ((u = (a = (0, t.createAutowidthTransformationSet)(a, x, p))
                      .coords),
                    (f = a.content),
                    a)
                  : ((u = (a = (0, t.createDefaultTransformationSet)(
                      g,
                      x,
                      d,
                      p
                    )).coords),
                    (f = a.content),
                    a)
              ).partial),
              f)),
            (0, n.getItemCoords)(-d, (u = u)).position),
          _ = (0, n.getSwipeLimitMin)(
            { itemsOffset: m, transformationSet: u },
            P
          ),
          P = (0, n.getSwipeLimitMax)(
            {
              itemsCount: w,
              itemsOffset: m,
              itemsInSlide: d,
              transformationSet: u,
            },
            P
          ),
          N = (0, n.getSwipeShiftValue)(w, u);
        return {
          activeIndex: v,
          autoWidth: y,
          animationDuration: h,
          clones: g,
          infinite: p,
          itemsCount: w,
          itemsInSlide: d,
          itemsOffset: m,
          translate3d: (0, t.getTranslate3dProperty)(v, {
            itemsInSlide: d,
            itemsOffset: m,
            transformationSet: u,
            autoWidth: y,
            infinite: p,
          }),
          stageWidth: x,
          stageContentWidth: f,
          initialStageHeight: 0,
          isStageContentPartial: a,
          isAutoPlaying: S,
          isAutoPlayCanceledOnAction: !1,
          transformationSet: u,
          transition: E,
          fadeoutAnimationIndex: null,
          fadeoutAnimationPosition: null,
          fadeoutAnimationProcessing: !1,
          swipeLimitMin: _,
          swipeLimitMax: P,
          swipeAllowedPositionMax: b,
          swipeShiftValue: N,
          canUseDom: l,
        };
      });
  e.calculateInitialState = o;
})(bp);
var I1 = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.isClonedItem =
      e.isTargetItem =
      e.isActiveItem =
      e.getRenderStageItemClasses =
        void 0);
  var t = hn,
    n = bp,
    r = os,
    i = function (y, S) {
      y === void 0 && (y = 0);
      var f = S.fadeoutAnimationIndex,
        h = (0, e.isActiveItem)(y, S) ? t.Modifiers.ACTIVE : "",
        p = (0, e.isClonedItem)(y, S) ? t.Modifiers.CLONED : "",
        S = (0, e.isTargetItem)(y, S) ? t.Modifiers.TARGET : "",
        y = y === f ? t.Classnames.ANIMATED : "";
      return (0, n.concatClassnames)(t.Classnames.STAGE_ITEM, h, p, S, y);
    },
    o =
      ((e.getRenderStageItemClasses = i),
      function (l, y) {
        l === void 0 && (l = 0);
        var f = y.activeIndex,
          h = y.itemsInSlide,
          p = y.itemsOffset,
          S = y.infinite,
          y = y.autoWidth,
          g = (0, r.getShiftIndex)(h, p);
        return y && S
          ? l - g === f + p
          : ((y = f + g), S ? y <= l && l < y + h : f <= l && l < y);
      }),
    s =
      ((e.isActiveItem = o),
      function (l, S) {
        l === void 0 && (l = 0);
        var f = S.activeIndex,
          y = S.itemsInSlide,
          h = S.itemsOffset,
          p = S.infinite,
          S = S.autoWidth,
          y = (0, r.getShiftIndex)(y, h);
        return p ? (S && p ? l - y === f + h : l === f + y) : l === f;
      }),
    a =
      ((e.isTargetItem = s),
      function (l, y) {
        l === void 0 && (l = 0);
        var f = y.itemsInSlide,
          h = y.itemsOffset,
          p = y.itemsCount,
          S = y.infinite,
          y = y.autoWidth;
        return (
          !!S &&
          (y && S
            ? l < f || p - 1 + f < l
            : l < (y = (0, r.getShiftIndex)(f, h)) || p - 1 + y < l)
        );
      });
  e.isClonedItem = a;
})(I1);
var D1 = {};
(function (e) {
  function t(n, r) {
    r === void 0 && (r = 0);
    function i() {
      o && (clearTimeout(o), (o = void 0));
    }
    var o = void 0;
    return [
      function () {
        for (var s = this, a = [], l = 0; l < arguments.length; l++)
          a[l] = arguments[l];
        i(),
          (o = window.setTimeout(function () {
            n.apply(s, a), (o = void 0);
          }, r));
      },
      i,
    ];
  }
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.debounce = void 0),
    (e.debounce = t);
})(D1);
var A1 = {};
(function (e) {
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
  }
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.debug = void 0),
    (e.debug = t);
})(A1);
var R1 = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getSlideItemInfo =
      e.getSlideInfo =
      e.getSlideIndexForMultipleItems =
      e.getSlideIndexForNonMultipleItems =
      e.getActiveSlideDotsLength =
      e.getActiveSlideIndex =
        void 0);
  var t = function (a, f) {
      var f = f || {},
        h = f.activeIndex,
        u = f.itemsInSlide,
        f = f.itemsCount,
        h = h + u;
      return u === 1
        ? (0, e.getSlideIndexForNonMultipleItems)(h, u, f)
        : (0, e.getSlideIndexForMultipleItems)(h, u, f, a);
    },
    n =
      ((e.getActiveSlideIndex = t),
      function (a, l) {
        var u;
        return (
          l === void 0 && (l = 1),
          (a = a === void 0 ? 0 : a) && l
            ? ((u = Math.floor(a / l)), a % l == 0 ? u - 1 : u)
            : 0
        );
      }),
    r =
      ((e.getActiveSlideDotsLength = n),
      function (a, l, u) {
        return a < l ? u - l : u < a ? 0 : a - 1;
      }),
    i =
      ((e.getSlideIndexForNonMultipleItems = r),
      function (a, l, u, f) {
        var h = (0, e.getActiveSlideDotsLength)(u, l);
        return a === u + l
          ? 0
          : f || (a < l && a !== 0)
          ? h
          : a === 0
          ? u % l == 0
            ? h
            : h - 1
          : 0 < l
          ? Math.floor(a / l) - 1
          : 0;
      }),
    o =
      ((e.getSlideIndexForMultipleItems = i),
      function (a, l) {
        return (
          l === void 0 && (l = 0),
          (a = (a = a === void 0 ? 0 : a) + 1),
          a < 1 ? (a = l) : l < a && (a = 1),
          { item: a, itemsCount: l }
        );
      }),
    s =
      ((e.getSlideInfo = o),
      function (l) {
        var l = l || {},
          u = l.itemsInSlide,
          f = l.activeIndex,
          h = l.infinite,
          p = l.itemsCount;
        return l.isStageContentPartial
          ? { isPrevSlideDisabled: !0, isNextSlideDisabled: !0 }
          : {
              isPrevSlideDisabled: h === !1 && f === 0,
              isNextSlideDisabled: h === !1 && p - u <= f,
            };
      });
  e.getSlideItemInfo = s;
})(R1);
var M1 = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.shouldCancelAutoPlayOnHover =
      e.shouldCancelAutoPlayOnAction =
      e.getItemIndexForDotNavigation =
      e.checkIsTheLastDotIndex =
      e.getDotsNavigationLength =
      e.hasDotForEachSlide =
      e.isStrategy =
      e.shouldDisableButtons =
      e.shouldDisableDots =
      e.shouldDisableControls =
        void 0);
  var t = hn;
  function n(y, w) {
    var y = (y || {}).controlsStrategy,
      w = w || {},
      g = w.itemsInSlide,
      E = w.itemsCount,
      w = w.autoWidth;
    if ((0, e.isStrategy)(y, t.ControlsStrategy.RESPONSIVE))
      return !w && g === E;
  }
  function r(p, S) {
    return p.disableDotsControls || n(p, S);
  }
  function i(p, S) {
    return p.disableButtonsControls || (!p.infinite && n(p, S));
  }
  (e.shouldDisableControls = n),
    (e.shouldDisableDots = r),
    (e.shouldDisableButtons = i);
  var o = function (p, S) {
      return (
        p === void 0 && (p = ""),
        S === void 0 && (S = ""),
        !!(p && p.includes(S))
      );
    },
    s =
      ((e.isStrategy = o),
      function (p, S) {
        return p || (0, e.isStrategy)(S, t.ControlsStrategy.ALTERNATE);
      }),
    a =
      ((e.hasDotForEachSlide = s),
      function (p, S, y) {
        return (
          p === void 0 && (p = 0),
          S === void 0 && (S = 1),
          (y = y !== void 0 && y)
            ? p
            : (Number(S) !== 0 && Math.ceil(p / S)) || 0
        );
      }),
    l =
      ((e.getDotsNavigationLength = a),
      function (p, S, y) {
        return !S && p === y - 1;
      }),
    u =
      ((e.checkIsTheLastDotIndex = l),
      function (p, S, y, g) {
        return (S ? y - g : p * g) || 0;
      }),
    f =
      ((e.getItemIndexForDotNavigation = u),
      function (p) {
        return (
          (p = p === void 0 ? "" : p) === t.AutoPlayStrategy.ACTION ||
          p === t.AutoPlayStrategy.ALL
        );
      }),
    h =
      ((e.shouldCancelAutoPlayOnAction = f),
      function (p) {
        return (
          (p = p === void 0 ? "" : p) === t.AutoPlayStrategy.DEFAULT ||
          p === t.AutoPlayStrategy.ALL
        );
      });
  e.shouldCancelAutoPlayOnHover = h;
})(M1);
(function (e) {
  var t = Object.create
      ? function (r, i, o, s) {
          s === void 0 && (s = o);
          var a = Object.getOwnPropertyDescriptor(i, o);
          (a && ("get" in a ? i.__esModule : !a.writable && !a.configurable)) ||
            (a = {
              enumerable: !0,
              get: function () {
                return i[o];
              },
            }),
            Object.defineProperty(r, s, a);
        }
      : function (r, i, o, s) {
          r[(s = s === void 0 ? o : s)] = i[o];
        },
    n = function (r, i) {
      for (var o in r)
        o === "default" ||
          Object.prototype.hasOwnProperty.call(i, o) ||
          t(i, r, o);
    };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    n(bp, e),
    n(Ep, e),
    n(I1, e),
    n(D1, e),
    n(os, e),
    n(A1, e),
    n(R1, e),
    n(M1, e),
    n(Pp, e);
})(Di);
(function (e) {
  var t = function (s) {
      return s && s.__esModule ? s : { default: s };
    },
    n =
      (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.SlideInfo = void 0),
      t(C)),
    r = hn,
    i = Di,
    o = function (l) {
      var u = l.activeIndex,
        a = l.itemsCount,
        l = l.renderSlideInfo,
        u = (0, i.getSlideInfo)(u, a).item;
      return typeof l == "function"
        ? n.default.createElement(
            "div",
            { className: r.Classnames.SLIDE_INFO },
            l({ item: u, itemsCount: a })
          )
        : ((l = (0, i.concatClassnames)(
            r.Classnames.SLIDE_INFO_ITEM,
            r.Modifiers.SEPARATOR
          )),
          n.default.createElement(
            "div",
            { className: r.Classnames.SLIDE_INFO },
            n.default.createElement(
              "span",
              { className: r.Classnames.SLIDE_INFO_ITEM },
              u
            ),
            n.default.createElement("span", { className: l }, "/"),
            n.default.createElement(
              "span",
              { className: r.Classnames.SLIDE_INFO_ITEM },
              a
            )
          ));
    };
  e.SlideInfo = o;
})(O1);
var $1 = {};
(function (e) {
  var t = function (i) {
      return i && i.__esModule ? i : { default: i };
    },
    n =
      (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.StageItem = void 0),
      t(C)),
    r = function (a) {
      var o = a.item,
        s = a.className,
        a = a.styles;
      return n.default.createElement("li", { style: a, className: s }, o);
    };
  e.StageItem = r;
})($1);
var L1 = {};
(function (e) {
  var t = function (s) {
      return s && s.__esModule ? s : { default: s };
    },
    n =
      (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.DotsNavigation = void 0),
      t(C)),
    r = hn,
    i = Di,
    o = function (E) {
      var a = E.state,
        l = E.onClick,
        u = E.onMouseEnter,
        f = E.onMouseLeave,
        h = E.controlsStrategy,
        p = E.renderDotsItem,
        S = a.itemsCount,
        y = a.itemsInSlide,
        g = a.infinite,
        E = a.autoWidth,
        w = a.activeIndex,
        m = (0, i.getSlideItemInfo)(a).isNextSlideDisabled,
        d = (0, i.hasDotForEachSlide)(E, h),
        v = (0, i.getDotsNavigationLength)(S, y, d);
      return n.default.createElement(
        "ul",
        { className: r.Classnames.DOTS },
        Array.from({ length: S }).map(function (x, b) {
          var _, P, N;
          if (b < v)
            return (
              (P = (0, i.checkIsTheLastDotIndex)(b, !!g, v)),
              (_ = (0, i.getItemIndexForDotNavigation)(b, P, S, y)),
              (P = (0, i.getActiveSlideIndex)(m, a)),
              d && ((P = w) < 0 ? (P = S - 1) : S <= w && (P = 0), (_ = b)),
              (P = P === b ? r.Modifiers.ACTIVE : ""),
              (N = p ? r.Modifiers.CUSTOM : ""),
              (N = (0, i.concatClassnames)(r.Classnames.DOTS_ITEM, P, N)),
              n.default.createElement(
                "li",
                {
                  key: "dot-item-".concat(b),
                  onMouseEnter: u,
                  onMouseLeave: f,
                  onClick: function () {
                    return l(_);
                  },
                  className: N,
                },
                p && p({ isActive: !!P, activeIndex: b })
              )
            );
        })
      );
    };
  e.DotsNavigation = o;
})(L1);
var F1 = {};
(function (e) {
  var t = function (s) {
      return s && s.__esModule ? s : { default: s };
    },
    n =
      (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.PlayPauseButton = void 0),
      t(C)),
    r = hn,
    i = Di,
    o = function (u) {
      var a = u.isPlaying,
        l = u.onClick,
        u = u.renderPlayPauseButton;
      return typeof u == "function"
        ? n.default.createElement(
            "div",
            { className: r.Classnames.PLAY_BTN, onClick: l },
            u({ isPlaying: a })
          )
        : ((u = a ? r.Modifiers.PAUSE : ""),
          (a = (0, i.concatClassnames)(r.Classnames.PLAY_BTN_ITEM, u)),
          n.default.createElement(
            "div",
            { className: r.Classnames.PLAY_BTN },
            n.default.createElement(
              "div",
              { className: r.Classnames.PLAY_BTN_WRAPPER },
              n.default.createElement("div", { onClick: l, className: a })
            )
          ));
    };
  e.PlayPauseButton = o;
})(F1);
var z1 = {};
(function (e) {
  var t = function (s) {
      return s && s.__esModule ? s : { default: s };
    },
    n =
      (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.PrevNextButton = void 0),
      t(C)),
    r = hn,
    i = Di,
    o = function (p) {
      var a,
        l = p.name,
        u = p.isDisabled,
        f = p.onClick,
        h = p.renderPrevButton,
        p = p.renderNextButton;
      return typeof h == "function"
        ? n.default.createElement(
            "div",
            { className: r.Classnames.BUTTON_PREV, onClick: f },
            h({ isDisabled: u })
          )
        : typeof p == "function"
        ? n.default.createElement(
            "div",
            { className: r.Classnames.BUTTON_NEXT, onClick: f },
            p({ isDisabled: u })
          )
        : ((p = (h = l === "prev") ? "<" : ">"),
          (l = h ? r.Classnames.BUTTON_PREV : r.Classnames.BUTTON_NEXT),
          (a = h
            ? r.Classnames.BUTTON_PREV_WRAPPER
            : r.Classnames.BUTTON_NEXT_WRAPPER),
          (h = h
            ? r.Classnames.BUTTON_PREV_ITEM
            : r.Classnames.BUTTON_NEXT_ITEM),
          (u = u ? r.Modifiers.INACTIVE : ""),
          (h = (0, i.concatClassnames)(h, u)),
          n.default.createElement(
            "div",
            { className: l },
            n.default.createElement(
              "div",
              { className: a },
              n.default.createElement(
                "p",
                {
                  className: h,
                  onClick: function (S) {
                    return f(S);
                  },
                },
                n.default.createElement("span", { "data-area": p })
              )
            )
          ));
    };
  e.PrevNextButton = o;
})(z1);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.PrevNextButton =
      e.PlayPauseButton =
      e.DotsNavigation =
      e.StageItem =
      e.SlideInfo =
        void 0);
  var t = O1,
    n =
      (Object.defineProperty(e, "SlideInfo", {
        enumerable: !0,
        get: function () {
          return t.SlideInfo;
        },
      }),
      $1),
    r =
      (Object.defineProperty(e, "StageItem", {
        enumerable: !0,
        get: function () {
          return n.StageItem;
        },
      }),
      L1),
    i =
      (Object.defineProperty(e, "DotsNavigation", {
        enumerable: !0,
        get: function () {
          return r.DotsNavigation;
        },
      }),
      F1),
    o =
      (Object.defineProperty(e, "PlayPauseButton", {
        enumerable: !0,
        get: function () {
          return i.PlayPauseButton;
        },
      }),
      z1);
  Object.defineProperty(e, "PrevNextButton", {
    enumerable: !0,
    get: function () {
      return o.PrevNextButton;
    },
  });
})(k1);
(function (e) {
  var t = (function () {
      var m = function (d, v) {
        return (m =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array
            ? function (x, b) {
                x.__proto__ = b;
              }
            : function (x, b) {
                for (var _ in b)
                  Object.prototype.hasOwnProperty.call(b, _) && (x[_] = b[_]);
              }))(d, v);
      };
      return function (d, v) {
        if (typeof v != "function" && v !== null)
          throw new TypeError(
            "Class extends value " + String(v) + " is not a constructor or null"
          );
        function x() {
          this.constructor = d;
        }
        m(d, v),
          (d.prototype =
            v === null
              ? Object.create(v)
              : ((x.prototype = v.prototype), new x()));
      };
    })(),
    n = function () {
      return (n =
        Object.assign ||
        function (m) {
          for (var d, v = 1, x = arguments.length; v < x; v++)
            for (var b in (d = arguments[v]))
              Object.prototype.hasOwnProperty.call(d, b) && (m[b] = d[b]);
          return m;
        }).apply(this, arguments);
    },
    r = Object.create
      ? function (m, d, v, x) {
          x === void 0 && (x = v);
          var b = Object.getOwnPropertyDescriptor(d, v);
          (b && ("get" in b ? d.__esModule : !b.writable && !b.configurable)) ||
            (b = {
              enumerable: !0,
              get: function () {
                return d[v];
              },
            }),
            Object.defineProperty(m, x, b);
        }
      : function (m, d, v, x) {
          m[(x = x === void 0 ? v : x)] = d[v];
        },
    i = Object.create
      ? function (m, d) {
          Object.defineProperty(m, "default", { enumerable: !0, value: d });
        }
      : function (m, d) {
          m.default = d;
        },
    o = function (m) {
      if (m && m.__esModule) return m;
      var d = {};
      if (m != null)
        for (var v in m)
          v !== "default" &&
            Object.prototype.hasOwnProperty.call(m, v) &&
            r(d, m, v);
      return i(d, m), d;
    },
    s = function (m, d) {
      for (var v in m)
        v === "default" ||
          Object.prototype.hasOwnProperty.call(d, v) ||
          r(d, m, v);
    },
    a = function (m, d, v, x) {
      return new (v = v || Promise)(function (b, _) {
        function P(M) {
          try {
            O(x.next(M));
          } catch (T) {
            _(T);
          }
        }
        function N(M) {
          try {
            O(x.throw(M));
          } catch (T) {
            _(T);
          }
        }
        function O(M) {
          var T;
          M.done
            ? b(M.value)
            : ((T = M.value) instanceof v
                ? T
                : new v(function (I) {
                    I(T);
                  })
              ).then(P, N);
        }
        O((x = x.apply(m, d || [])).next());
      });
    },
    l = function (m, d) {
      var v,
        x,
        b,
        _ = {
          label: 0,
          sent: function () {
            if (1 & b[0]) throw b[1];
            return b[1];
          },
          trys: [],
          ops: [],
        },
        P = { next: N(0), throw: N(1), return: N(2) };
      return (
        typeof Symbol == "function" &&
          (P[Symbol.iterator] = function () {
            return this;
          }),
        P
      );
      function N(O) {
        return function (M) {
          var T = [O, M];
          if (v) throw new TypeError("Generator is already executing.");
          for (; _; )
            try {
              if (
                ((v = 1),
                x &&
                  (b =
                    2 & T[0]
                      ? x.return
                      : T[0]
                      ? x.throw || ((b = x.return) && b.call(x), 0)
                      : x.next) &&
                  !(b = b.call(x, T[1])).done)
              )
                return b;
              switch (((x = 0), (T = b ? [2 & T[0], b.value] : T)[0])) {
                case 0:
                case 1:
                  b = T;
                  break;
                case 4:
                  return _.label++, { value: T[1], done: !1 };
                case 5:
                  _.label++, (x = T[1]), (T = [0]);
                  continue;
                case 7:
                  (T = _.ops.pop()), _.trys.pop();
                  continue;
                default:
                  if (
                    !(b = 0 < (b = _.trys).length && b[b.length - 1]) &&
                    (T[0] === 6 || T[0] === 2)
                  ) {
                    _ = 0;
                    continue;
                  }
                  if (T[0] === 3 && (!b || (T[1] > b[0] && T[1] < b[3])))
                    _.label = T[1];
                  else if (T[0] === 6 && _.label < b[1])
                    (_.label = b[1]), (b = T);
                  else {
                    if (!(b && _.label < b[2])) {
                      b[2] && _.ops.pop(), _.trys.pop();
                      continue;
                    }
                    (_.label = b[2]), _.ops.push(T);
                  }
              }
              T = d.call(m, _);
            } catch (I) {
              (T = [6, I]), (x = 0);
            } finally {
              v = b = 0;
            }
          if (5 & T[0]) throw T[1];
          return { value: T[0] ? T[1] : void 0, done: !0 };
        };
      }
    },
    u = function (m) {
      return m && m.__esModule ? m : { default: m };
    },
    f =
      (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.Link = void 0),
      u(C)),
    h = u(C1),
    p = j1,
    S = u(N1),
    y = ((e.Link = S.default), o(k1)),
    g = o(Di),
    E = hn,
    w =
      (s(hn, e),
      (function (m) {
        function d(v) {
          var x = m.call(this, v) || this;
          return (
            (x.swipeListener = null),
            (x._handleKeyboardEvents = function (b) {
              switch (b.code) {
                case "Space":
                  return x.props.autoPlay && x._handlePlayPauseToggle();
                case "ArrowLeft":
                  return x.slidePrev(b);
                case "ArrowRight":
                  return x.slideNext(b);
              }
            }),
            (x._handleBeforeSlideEnd = function (b) {
              return a(x, void 0, void 0, function () {
                var _, P, N;
                return l(this, function (O) {
                  switch (O.label) {
                    case 0:
                      return (
                        (P = this.state),
                        (N = P.activeIndex),
                        (_ = P.itemsCount),
                        (P = P.fadeoutAnimationProcessing),
                        g.shouldRecalculateSlideIndex(N, _)
                          ? ((N = g.getUpdateSlidePositionIndex(N, _)),
                            [4, this._handleUpdateSlidePosition(N)])
                          : [3, 2]
                      );
                    case 1:
                      return O.sent(), [3, 4];
                    case 2:
                      return P
                        ? [
                            4,
                            this.setState({
                              fadeoutAnimationIndex: null,
                              fadeoutAnimationPosition: null,
                              fadeoutAnimationProcessing: !1,
                            }),
                          ]
                        : [3, 4];
                    case 3:
                      O.sent(), (O.label = 4);
                    case 4:
                      return this._handleSlideChanged(b), [2];
                  }
                });
              });
            }),
            (x._handleMouseEnter = function () {
              var b = x.props.autoPlayStrategy;
              g.shouldCancelAutoPlayOnHover(b) &&
                x.state.isAutoPlaying &&
                ((x.isHovered = !0), x._handlePause());
            }),
            (x._handleMouseLeave = function () {
              x.state.isAutoPlaying && ((x.isHovered = !1), x._handlePlay());
            }),
            (x._handlePause = function () {
              x._clearAutoPlayTimeout();
            }),
            (x._handlePlayPauseToggle = function () {
              return a(x, void 0, void 0, function () {
                var b;
                return l(this, function (_) {
                  switch (_.label) {
                    case 0:
                      return (
                        (b = this.state.isAutoPlaying),
                        (this.hasUserAction = !0),
                        [
                          4,
                          this.setState({
                            isAutoPlaying: !b,
                            isAutoPlayCanceledOnAction: !0,
                          }),
                        ]
                      );
                    case 1:
                      return (
                        _.sent(),
                        b ? this._handlePause() : this._handlePlay(),
                        [2]
                      );
                  }
                });
              });
            }),
            (x._setRootComponentRef = function (b) {
              return (x.rootElement = b);
            }),
            (x._setStageComponentRef = function (b) {
              return (x.stageComponent = b);
            }),
            (x._renderStageItem = function (b, _) {
              var P = g.getRenderStageItemStyles(_, x.state),
                N = g.getRenderStageItemClasses(_, x.state);
              return f.default.createElement(y.StageItem, {
                styles: P,
                className: N,
                key: "stage-item-".concat(_),
                item: b,
              });
            }),
            (x._renderSlideInfo = function () {
              var b = x.props.renderSlideInfo,
                P = x.state,
                _ = P.activeIndex,
                P = P.itemsCount;
              return f.default.createElement(y.SlideInfo, {
                itemsCount: P,
                activeIndex: _,
                renderSlideInfo: b,
              });
            }),
            (x.state = g.calculateInitialState(v, null)),
            (x.isHovered = !1),
            (x.isAnimationDisabled = !1),
            (x.isTouchMoveProcessStarted = !1),
            (x.cancelTouchAnimations = !1),
            (x.hasUserAction = !1),
            (x.rootElement = null),
            (x.rootComponentDimensions = {}),
            (x.stageComponent = null),
            (x.startTouchmovePosition = void 0),
            (x.slideTo = x.slideTo.bind(x)),
            (x.slidePrev = x.slidePrev.bind(x)),
            (x.slideNext = x.slideNext.bind(x)),
            (x._handleTouchmove = x._handleTouchmove.bind(x)),
            (x._handleTouchend = x._handleTouchend.bind(x)),
            (x._handleDotClick = x._handleDotClick.bind(x)),
            (x._handleResize = x._handleResize.bind(x)),
            (v = g.debounce(x._handleResize, 100)),
            (x._handleResizeDebounced = v[0]),
            (x._cancelResizeDebounced = v[1]),
            x
          );
        }
        return (
          t(d, m),
          (d.prototype.componentDidMount = function () {
            return a(this, void 0, void 0, function () {
              return l(this, function (v) {
                switch (v.label) {
                  case 0:
                    return [4, this._setInitialState()];
                  case 1:
                    return (
                      v.sent(),
                      this._addEventListeners(),
                      this._setupSwipeHandlers(),
                      this.props.autoPlay && this._handlePlay(),
                      [2]
                    );
                }
              });
            });
          }),
          (d.prototype.componentDidUpdate = function (v) {
            var D = this.props,
              x = D.activeIndex,
              b = D.animationDuration,
              _ = D.autoWidth,
              P = D.children,
              N = D.infinite,
              O = D.items,
              M = D.paddingLeft,
              T = D.paddingRight,
              I = D.responsive,
              R = D.swipeExtraPadding,
              $ = D.mouseTracking,
              z = D.swipeDelta,
              U = D.touchTracking,
              D = D.touchMoveDefaultEvents;
            (P && v.children !== P) ||
            v.autoWidth !== _ ||
            v.infinite !== N ||
            v.items !== O ||
            v.paddingLeft !== M ||
            v.paddingRight !== T ||
            v.responsive !== I ||
            v.swipeExtraPadding !== R
              ? this._updateComponent()
              : (v.animationDuration !== b &&
                  this.setState({ animationDuration: b }),
                v.activeIndex !== x && this.slideTo(x, E.EventType.UPDATE)),
              (v.swipeDelta === z &&
                v.mouseTracking === $ &&
                v.touchTracking === U &&
                v.touchMoveDefaultEvents === D) ||
                this._updateSwipeProps(),
              this.props.keyboardNavigation !== v.keyboardNavigation &&
                this._updateEventListeners();
          }),
          (d.prototype.componentWillUnmount = function () {
            this._cancelResizeDebounced(),
              this._cancelTimeoutAnimations(),
              this._removeEventListeners();
          }),
          Object.defineProperty(d.prototype, "eventObject", {
            get: function () {
              var x = this.state,
                v = x.itemsInSlide,
                x = x.activeIndex,
                _ = g.getSlideItemInfo(this.state),
                b = _.isNextSlideDisabled,
                _ = _.isPrevSlideDisabled;
              return {
                item: x,
                slide: g.getActiveSlideIndex(b, this.state),
                itemsInSlide: v,
                isNextSlideDisabled: b,
                isPrevSlideDisabled: _,
                type: E.EventType.ACTION,
              };
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(d.prototype, "isFadeoutAnimationAllowed", {
            get: function () {
              var v = this.state.itemsInSlide,
                P = this.props,
                x = P.animationType,
                b = P.paddingLeft,
                _ = P.paddingRight,
                P = P.autoWidth;
              return v === 1 && x === E.AnimationType.FADEOUT && !(b || _ || P);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(d.prototype, "touchmovePosition", {
            get: function () {
              return this.startTouchmovePosition !== void 0
                ? this.startTouchmovePosition
                : this.state.translate3d;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (d.prototype.slideTo = function (v, x) {
            var b, _, P;
            v === void 0 && (v = 0),
              this._handlePause(),
              this.isFadeoutAnimationAllowed
                ? ((b = g.getUpdateSlidePositionIndex(
                    v,
                    this.state.itemsCount
                  )),
                  (_ = g.getFadeoutAnimationPosition(b, this.state)),
                  (P = g.getFadeoutAnimationIndex(this.state)),
                  this._handleSlideTo({
                    activeIndex: b,
                    fadeoutAnimationIndex: P,
                    fadeoutAnimationPosition: _,
                    eventType: x,
                  }))
                : this._handleSlideTo({ activeIndex: v, eventType: x });
          }),
          (d.prototype.slidePrev = function (_) {
            this._handlePause(), _ && _.isTrusted && (this.hasUserAction = !0);
            var x,
              b,
              _ = this.state.activeIndex - 1;
            this.isFadeoutAnimationAllowed
              ? ((x = -this.state.stageWidth),
                (b = g.getFadeoutAnimationIndex(this.state)),
                this._handleSlideTo({
                  activeIndex: _,
                  fadeoutAnimationIndex: b,
                  fadeoutAnimationPosition: x,
                }))
              : this._handleSlideTo({ activeIndex: _ });
          }),
          (d.prototype.slideNext = function (_) {
            this._handlePause(), _ && _.isTrusted && (this.hasUserAction = !0);
            var x,
              b,
              _ = this.state.activeIndex + 1;
            this.isFadeoutAnimationAllowed
              ? ((x = this.state.stageWidth),
                (b = g.getFadeoutAnimationIndex(this.state)),
                this._handleSlideTo({
                  activeIndex: _,
                  fadeoutAnimationIndex: b,
                  fadeoutAnimationPosition: x,
                }))
              : this._handleSlideTo({ activeIndex: _ });
          }),
          (d.prototype._addEventListeners = function () {
            window.addEventListener("resize", this._handleResizeDebounced),
              this.props.keyboardNavigation &&
                window.addEventListener("keyup", this._handleKeyboardEvents);
          }),
          (d.prototype._removeEventListeners = function () {
            this.swipeListener && this.swipeListener.destroy(),
              window.removeEventListener("resize", this._handleResizeDebounced),
              window.removeEventListener("keyup", this._handleKeyboardEvents);
          }),
          (d.prototype._updateEventListeners = function () {
            this.props.keyboardNavigation
              ? window.addEventListener("keyup", this._handleKeyboardEvents)
              : window.removeEventListener("keyup", this._handleKeyboardEvents);
          }),
          (d.prototype._handleResize = function (v) {
            return a(this, void 0, void 0, function () {
              var x, b, _, P;
              return l(this, function (N) {
                switch (N.label) {
                  case 0:
                    return (
                      (_ = this.props.onResizeEvent),
                      (b = g.getElementDimensions(this.rootElement)),
                      (_ || g.shouldHandleResizeEvent)(
                        v,
                        this.rootComponentDimensions,
                        b
                      )
                        ? (this._cancelTimeoutAnimations(),
                          (this.rootComponentDimensions = b),
                          (_ = this.state),
                          (b = _.itemsCount),
                          (x = _.isAutoPlaying),
                          (_ = g.getUpdateSlidePositionIndex(
                            this.state.activeIndex,
                            b
                          )),
                          (b = g.calculateInitialState(
                            n(n({}, this.props), { activeIndex: _ }),
                            this.stageComponent
                          )),
                          (_ = g.getTranslate3dProperty(b.activeIndex, b)),
                          (P = n(n({}, b), {
                            translate3d: _,
                            isAutoPlaying: x,
                          })),
                          g.animate(this.stageComponent, { position: -_ }),
                          [4, this.setState(P)])
                        : [3, 2]
                    );
                  case 1:
                    N.sent(),
                      this._handleResized({ itemsInSlide: P.itemsInSlide }),
                      (this.isAnimationDisabled = !1),
                      x && this._handlePlay(),
                      (N.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (d.prototype._handleTouchmove = function (v, N) {
            var b = N.absY,
              _ = N.absX,
              P = N.deltaX,
              N = this.props.swipeDelta,
              R = this.state,
              O = R.swipeShiftValue,
              M = R.swipeLimitMin,
              T = R.swipeLimitMax,
              I = R.infinite,
              R = R.fadeoutAnimationProcessing;
            if (
              ((this.hasUserAction = !0),
              !(
                R ||
                (!this.isTouchMoveProcessStarted &&
                  g.isVerticalTouchmoveDetected(_, b, N))
              ))
            ) {
              this.isTouchMoveProcessStarted ||
                (this._cancelTimeoutAnimations(),
                this._setTouchmovePosition(),
                (this.isAnimationDisabled = !0),
                (this.isTouchMoveProcessStarted = !0),
                this._handleSlideChange());
              var $ = g.getTouchmoveTranslatePosition(
                P,
                this.touchmovePosition
              );
              if (I === !1)
                return M < $ || $ < -T
                  ? void 0
                  : void g.animate(this.stageComponent, { position: $ });
              if (g.shouldRecalculateSwipePosition($, M, T))
                try {
                  (function z() {
                    g.getIsLeftDirection(P) ? ($ += O) : ($ += -O),
                      g.shouldRecalculateSwipePosition($, M, T) && z();
                  })();
                } catch (z) {
                  g.debug(z);
                }
              g.animate(this.stageComponent, { position: $ });
            }
          }),
          (d.prototype._handleTouchend = function (v, N) {
            var b,
              _,
              P,
              N = N.deltaX;
            this._clearTouchmovePosition(),
              this.isTouchMoveProcessStarted &&
                ((this.isTouchMoveProcessStarted = !1),
                (b = this.state.animationDuration),
                (_ = this.props.animationEasingFunction),
                (P = g.getTranslateXProperty(this.stageComponent)),
                (N = g.getSwipeTouchendPosition(this.state, N, P)),
                g.animate(this.stageComponent, {
                  position: N,
                  animationDuration: b,
                  animationEasingFunction: _,
                }),
                this._handleBeforeTouchEnd(N));
          }),
          (d.prototype._handleBeforeTouchEnd = function (v) {
            var x = this,
              b = this.state.animationDuration;
            this.touchEndTimeoutId = window.setTimeout(function () {
              return a(x, void 0, void 0, function () {
                var _,
                  P,
                  N,
                  O = this;
                return l(this, function (M) {
                  switch (M.label) {
                    case 0:
                      return (
                        (_ = g.getSwipeTouchendIndex(v, this.state)),
                        (P = g.getTranslate3dProperty(_, this.state)),
                        g.animate(this.stageComponent, { position: -P }),
                        (N = g.getTransitionProperty()),
                        [
                          4,
                          this.setState({
                            activeIndex: _,
                            translate3d: P,
                            transition: N,
                          }),
                        ]
                      );
                    case 1:
                      return (
                        M.sent(),
                        requestAnimationFrame(function () {
                          return O._handleSlideChanged();
                        }),
                        [2]
                      );
                  }
                });
              });
            }, b);
          }),
          (d.prototype._handleSlideTo = function (v) {
            var _ = v.activeIndex,
              x = _ === void 0 ? 0 : _,
              _ = v.fadeoutAnimationIndex,
              b = _ === void 0 ? null : _,
              _ = v.fadeoutAnimationPosition,
              P = _ === void 0 ? null : _,
              N = v.eventType;
            return a(this, void 0, void 0, function () {
              var O,
                M,
                T,
                I,
                R = this;
              return l(this, function ($) {
                switch ($.label) {
                  case 0:
                    return (
                      (M = this.props),
                      (T = M.infinite),
                      (M = M.animationEasingFunction),
                      (O = this.state),
                      (I = O.itemsCount),
                      (O = O.animationDuration),
                      this.isAnimationDisabled ||
                      this.state.activeIndex === x ||
                      (!T && g.shouldCancelSlideAnimation(x, I))
                        ? [2]
                        : ((this.isAnimationDisabled = !0),
                          this._cancelTimeoutAnimations(),
                          this._handleSlideChange(N),
                          (T = !1),
                          (I = g.getTranslate3dProperty(x, this.state)),
                          (M =
                            b !== null && P !== null
                              ? ((T = !0), g.getTransitionProperty())
                              : g.getTransitionProperty({
                                  animationDuration: O,
                                  animationEasingFunction: M,
                                })),
                          [
                            4,
                            this.setState({
                              activeIndex: x,
                              transition: M,
                              translate3d: I,
                              animationDuration: O,
                              fadeoutAnimationIndex: b,
                              fadeoutAnimationPosition: P,
                              fadeoutAnimationProcessing: T,
                            }),
                          ])
                    );
                  case 1:
                    return (
                      $.sent(),
                      (this.slideEndTimeoutId = window.setTimeout(function () {
                        return R._handleBeforeSlideEnd(N);
                      }, O)),
                      [2]
                    );
                }
              });
            });
          }),
          (d.prototype._handleUpdateSlidePosition = function (v) {
            return a(this, void 0, void 0, function () {
              var x, b, _;
              return l(this, function (P) {
                switch (P.label) {
                  case 0:
                    return (
                      (x = this.state.animationDuration),
                      (b = g.getTranslate3dProperty(v, this.state)),
                      (_ = g.getTransitionProperty({ animationDuration: 0 })),
                      [
                        4,
                        this.setState({
                          activeIndex: v,
                          translate3d: b,
                          transition: _,
                          animationDuration: x,
                          fadeoutAnimationIndex: null,
                          fadeoutAnimationPosition: null,
                          fadeoutAnimationProcessing: !1,
                        }),
                      ]
                    );
                  case 1:
                    return P.sent(), [2];
                }
              });
            });
          }),
          (d.prototype._handleUpdated = function () {
            this.props.onUpdated &&
              this.props.onUpdated(
                n(n({}, this.eventObject), { type: E.EventType.UPDATE })
              );
          }),
          (d.prototype._handleResized = function (v) {
            v === void 0 && (v = {}),
              this.props.onResized &&
                this.props.onResized(
                  n(n(n({}, this.eventObject), v), { type: E.EventType.RESIZE })
                );
          }),
          (d.prototype._handleSlideChange = function (v) {
            this.props.onSlideChange &&
              ((v = v
                ? n(n({}, this.eventObject), { type: v })
                : this.eventObject),
              this.props.onSlideChange(v));
          }),
          (d.prototype._handleSlideChanged = function (v) {
            return a(this, void 0, void 0, function () {
              var x, b, _, P;
              return l(this, function (N) {
                switch (N.label) {
                  case 0:
                    return (
                      (b = this.state),
                      (x = b.isAutoPlaying),
                      (b = b.isAutoPlayCanceledOnAction),
                      (_ = this.props),
                      (P = _.autoPlayStrategy),
                      (_ = _.onSlideChanged),
                      g.shouldCancelAutoPlayOnAction(P) &&
                      this.hasUserAction &&
                      !b
                        ? [
                            4,
                            this.setState({
                              isAutoPlayCanceledOnAction: !0,
                              isAutoPlaying: !1,
                            }),
                          ]
                        : [3, 2]
                    );
                  case 1:
                    return N.sent(), [3, 3];
                  case 2:
                    x && this._handlePlay(), (N.label = 3);
                  case 3:
                    return (
                      (this.isAnimationDisabled = !1),
                      _ &&
                        ((P = v
                          ? n(n({}, this.eventObject), { type: v })
                          : this.eventObject),
                        _(P)),
                      v === E.EventType.UPDATE && this._handleUpdated(),
                      [2]
                    );
                }
              });
            });
          }),
          (d.prototype._handleDotClick = function (v) {
            (this.hasUserAction = !0), this.slideTo(v);
          }),
          (d.prototype._handlePlay = function () {
            this._setAutoPlayInterval();
          }),
          (d.prototype._cancelTimeoutAnimations = function () {
            this._clearAutoPlayTimeout(),
              this._clearSlideEndTimeout(),
              this.clearTouchendTimeout();
          }),
          (d.prototype._clearAutoPlayTimeout = function () {
            window.clearTimeout(this.autoPlayTimeoutId),
              (this.autoPlayTimeoutId = void 0);
          }),
          (d.prototype._clearSlideEndTimeout = function () {
            clearTimeout(this.slideEndTimeoutId),
              (this.slideEndTimeoutId = void 0);
          }),
          (d.prototype.clearTouchendTimeout = function () {
            clearTimeout(this.touchEndTimeoutId),
              (this.touchEndTimeoutId = void 0);
          }),
          (d.prototype._clearTouchmovePosition = function () {
            this.startTouchmovePosition = void 0;
          }),
          (d.prototype._setTouchmovePosition = function () {
            var v = g.getTranslateXProperty(this.stageComponent);
            this.startTouchmovePosition = -v;
          }),
          (d.prototype._setInitialState = function () {
            return a(this, void 0, void 0, function () {
              var v;
              return l(this, function (x) {
                switch (x.label) {
                  case 0:
                    return (
                      (v = g.calculateInitialState(
                        this.props,
                        this.stageComponent
                      )),
                      (this.rootComponentDimensions = g.getElementDimensions(
                        this.rootElement
                      )),
                      [4, this.setState(v)]
                    );
                  case 1:
                    return (
                      x.sent(),
                      this.props.onInitialized &&
                        this.props.onInitialized(
                          n(n({}, this.eventObject), { type: E.EventType.INIT })
                        ),
                      [2]
                    );
                }
              });
            });
          }),
          (d.prototype._setAutoPlayInterval = function () {
            var v = this,
              b = this.props,
              x = b.autoPlayDirection,
              b = b.autoPlayInterval;
            this.autoPlayTimeoutId = window.setTimeout(function () {
              v.isHovered ||
                (x === E.AutoplayDirection.RTL ? v.slidePrev() : v.slideNext());
            }, b);
          }),
          (d.prototype._setupSwipeHandlers = function () {
            (this.swipeListener = new h.default({
              element: this.rootElement,
              delta: this.props.swipeDelta,
              onSwiping: this._handleTouchmove,
              onSwiped: this._handleTouchend,
              rotationAngle: 5,
              mouseTrackingEnabled: this.props.mouseTracking,
              touchTrackingEnabled: this.props.touchTracking,
              preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents,
              preventTrackingOnMouseleave: !0,
            })),
              this.swipeListener.init();
          }),
          (d.prototype._updateComponent = function () {
            var v = this,
              x = (this.props.syncStateOnPropsUpdate ? this.state : this.props)
                .activeIndex,
              b = n(n({}, this.props), { activeIndex: x });
            this._cancelTimeoutAnimations(),
              (this.isAnimationDisabled = !1),
              this.state.isAutoPlaying && this._handlePlay(),
              this.setState({ clones: g.createClones(b) }),
              requestAnimationFrame(function () {
                v.setState(
                  g.calculateInitialState(b, v.stageComponent),
                  function () {
                    return v._handleUpdated();
                  }
                );
              });
          }),
          (d.prototype._updateSwipeProps = function () {
            this.swipeListener &&
              this.swipeListener.update({
                delta: this.props.swipeDelta,
                mouseTrackingEnabled: this.props.mouseTracking,
                touchTrackingEnabled: this.props.touchTracking,
                preventDefaultTouchmoveEvent:
                  !this.props.touchMoveDefaultEvents,
              });
          }),
          (d.prototype._renderDotsNavigation = function () {
            var x = this.props,
              v = x.renderDotsItem,
              x = x.controlsStrategy;
            return f.default.createElement(y.DotsNavigation, {
              state: this.state,
              onClick: this._handleDotClick,
              renderDotsItem: v,
              controlsStrategy: x,
            });
          }),
          (d.prototype._renderPrevButton = function () {
            var v = this.props.renderPrevButton,
              x = g.getSlideItemInfo(this.state).isPrevSlideDisabled;
            return f.default.createElement(y.PrevNextButton, {
              name: "prev",
              onClick: this.slidePrev,
              isDisabled: x,
              renderPrevButton: v,
            });
          }),
          (d.prototype._renderNextButton = function () {
            var v = this.props.renderNextButton,
              x = g.getSlideItemInfo(this.state).isNextSlideDisabled;
            return f.default.createElement(y.PrevNextButton, {
              name: "next",
              onClick: this.slideNext,
              isDisabled: x,
              renderNextButton: v,
            });
          }),
          (d.prototype._renderPlayPauseButton = function () {
            var v = this.props.renderPlayPauseButton,
              x = this.state.isAutoPlaying;
            return f.default.createElement(y.PlayPauseButton, {
              isPlaying: x,
              onClick: this._handlePlayPauseToggle,
              renderPlayPauseButton: v,
            });
          }),
          (d.prototype.render = function () {
            var O = this.state,
              P = O.translate3d,
              v = O.clones,
              N = O.transition,
              O = O.canUseDom,
              x = g.shouldDisableDots(this.props, this.state),
              b = g.shouldDisableButtons(this.props, this.state),
              _ = g.getRenderWrapperStyles(
                this.props,
                this.state,
                this.stageComponent
              ),
              P = g.getRenderStageStyles({ translate3d: P }, { transition: N }),
              N = this.props.ssrSilentMode || O ? "" : E.Modifiers.SSR,
              O = g.concatClassnames(E.Classnames.ROOT, N);
            return f.default.createElement(
              "div",
              { className: O },
              f.default.createElement(
                "div",
                { ref: this._setRootComponentRef },
                f.default.createElement(
                  "div",
                  {
                    style: _,
                    className: E.Classnames.WRAPPER,
                    onMouseEnter: this._handleMouseEnter,
                    onMouseLeave: this._handleMouseLeave,
                  },
                  f.default.createElement(
                    "ul",
                    {
                      style: P,
                      className: E.Classnames.STAGE,
                      ref: this._setStageComponentRef,
                    },
                    v.map(this._renderStageItem)
                  )
                )
              ),
              x ? null : this._renderDotsNavigation(),
              b ? null : this._renderPrevButton(),
              b ? null : this._renderNextButton(),
              this.props.disableSlideInfo ? null : this._renderSlideInfo(),
              this.props.autoPlayControls ? this._renderPlayPauseButton() : null
            );
          }),
          (d.defaultProps = p.defaultProps),
          d
        );
      })(f.default.PureComponent));
  e.default = w;
})(P1);
const $k = dg(P1),
  Lk = [
    {
      image:
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_14.jpg",
      path: "/women/clothing/lengha_choli",
    },
    {
      image:
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/8/_/8_11.jpg",
      path: "/women/clothing/lengha_choli",
    },
    {
      image:
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_12.jpg",
      path: "/women/clothing/lengha_choli",
    },
    {
      image:
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_13.jpg",
      path: "/women/clothing/lengha_choli",
    },
  ],
  Fk = () => {
    const e = Lk.map((t, n) =>
      c.jsx(
        "img",
        {
          src: t.image,
          alt: "{item.path}",
          className: "cursor-pointer",
          role: "presentation",
        },
        n
      )
    );
    return c.jsx($k, {
      items: e,
      disableButtonsControls: !0,
      autoPlay: !0,
      autoPlayInterval: 2e3,
      infinite: !0,
    });
  },
  cg = ({ data: e, section: t }) =>
    c.jsx(c.Fragment, {
      children: c.jsxs("div", {
        className: "px-20 mt-8 mb-10",
        children: [
          c.jsx("h1", {
            className:
              "text-4xl text-cyan-900 text-center underline mb-10 decoration-solid",
            children: t,
          }),
          c.jsx("div", {
            className:
              "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",
            children: e.map((n, r) =>
              c.jsxs(
                te,
                {
                  to: `/productdetails/${n._id}`,
                  className: "group",
                  onClick: () => window.location(0, 0),
                  children: [
                    c.jsx("div", {
                      className:
                        "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7",
                      children: c.jsx("img", {
                        src: n.image.imageUrl,
                        alt: n.image.imageUrl,
                        className:
                          "h-full w-full object-cover object-center group-hover:opacity-75",
                        loading: "lazy",
                      }),
                    }),
                    c.jsx("h3", {
                      className: "mt-4 text-sm text-gray-700",
                      children: n.name,
                    }),
                    n.stock <= 0
                      ? c.jsx("div", {
                          className: "text-red-700 mt-2",
                          children: "Out of Stock",
                        })
                      : c.jsxs(c.Fragment, {
                          children: [
                            c.jsxs("p", {
                              className:
                                "mt-1 line-through inline-block text-lg font-medium text-gray-500",
                              children: ["₹ ", n.old_price],
                            }),
                            "       ",
                            c.jsxs("p", {
                              className:
                                "mt-1 text-lg inline-block font-medium text-gray-900",
                              children: ["₹ ", n.new_price],
                            }),
                          ],
                        }),
                  ],
                },
                r
              )
            ),
          }),
        ],
      }),
    }),
  zk = () => {
    const [e, t] = C.useState(),
      [n, r] = C.useState(),
      [i, o] = C.useState(),
      [s, a] = C.useState(),
      l = de(dl),
      u = async () => {
        const p = await (await fetch("/api/newproduct")).json();
        p.success
          ? (t(p.newProducts), r(!0))
          : console.log("failed to fetch new products");
      },
      f = async () => {
        const p = await (await fetch("/api/popular")).json();
        p.success
          ? (a(p.mostSelling), o(!0))
          : console.log("failed to fetch new products");
      };
    return (
      C.useEffect(() => {
        u(), f();
      }, []),
      C.useEffect(() => {
        l && Z.success("Logged in Successfully");
      }, [l]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(Fk, {}),
          n && c.jsx(cg, { data: e, section: "New Arrivals" }),
          i && c.jsx(cg, { data: s, section: "Most Selling's" }),
        ],
      })
    );
  },
  Uk = () =>
    c.jsxs("footer", {
      className: "bg-gray-900  text-white py-12",
      children: [
        c.jsx("div", {
          className: "container mx-auto px-4",
          children: c.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-y-8",
            children: [
              c.jsxs("div", {
                className: "md:col-span-2",
                children: [
                  c.jsx("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: "Get in Touch",
                  }),
                  c.jsx("p", {
                    className: "text-gray-300 mb-4",
                    children: "Developed By : Aayush Chauhan",
                  }),
                  c.jsx("p", {
                    className: "text-gray-300 mb-4",
                    children: "Connect with us on social media:",
                  }),
                  c.jsxs("ul", {
                    className: "flex space-x-4",
                    children: [
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "hover:text-gray-300 transition duration-300 ease-in-out",
                          children: c.jsx("i", {
                            className: "fab fa-facebook-f",
                          }),
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "hover:text-gray-300 transition duration-300 ease-in-out",
                          children: c.jsx("i", { className: "fab fa-twitter" }),
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "hover:text-gray-300 transition duration-300 ease-in-out",
                          children: c.jsx("i", {
                            className: "fab fa-instagram",
                          }),
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "hover:text-gray-300 transition duration-300 ease-in-out",
                          children: c.jsx("i", {
                            className: "fab fa-linkedin-in",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex flex-col space-y-4 md:col-span-1",
                children: [
                  c.jsx("h3", {
                    className: "text-xl font-bold",
                    children: "Quick Links",
                  }),
                  c.jsxs("ul", {
                    className: "text-gray-300",
                    children: [
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "hover:text-gray-300 transition duration-300 ease-in-out",
                          children: "Shop",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "hover:text-gray-300 transition duration-300 ease-in-out",
                          children: "About Us",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "hover:text-gray-300 transition duration-300 ease-in-out",
                          children: "Contact",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex flex-col space-y-4 md:col-span-1",
                children: [
                  c.jsx("h3", {
                    className: "text-xl font-bold",
                    children: "Our Services",
                  }),
                  c.jsxs("ul", {
                    className: "text-gray-300",
                    children: [
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "hover:text-gray-300 transition duration-300 ease-in-out",
                          children: "Shipping & Delivery",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "hover:text-gray-300 transition duration-300 ease-in-out",
                          children: "Returns & Exchanges",
                        }),
                      }),
                      c.jsx("li", {
                        children: c.jsx("a", {
                          href: "#",
                          className:
                            "hover:text-gray-300 transition duration-300 ease-in-out",
                          children: "Customer Support",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex flex-col space-y-4 md:col-span-1",
                children: [
                  c.jsx("h3", {
                    className: "text-xl font-bold",
                    children: "Contact Us",
                  }),
                  c.jsxs("ul", {
                    className: "text-gray-300",
                    children: [
                      c.jsxs("li", {
                        children: [
                          c.jsx("i", { className: "fas fa-map-marker-alt" }),
                          " Ambika Green Avenue",
                        ],
                      }),
                      c.jsxs("li", {
                        children: [
                          c.jsx("i", { className: "fas fa-city" }),
                          " Chandigarh, India",
                        ],
                      }),
                      c.jsxs("li", {
                        children: [
                          c.jsx("i", { className: "fas fa-phone-alt" }),
                          " Phone: 7060457474",
                        ],
                      }),
                      c.jsxs("li", {
                        children: [
                          c.jsx("i", { className: "fas fa-envelope" }),
                          " Email: thakurnishkarshchauhan1916@gmail.com",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsx("div", {
          className: "mt-12 border-t border-gray-800",
          children: c.jsxs("div", {
            className:
              "container mx-auto px-4 flex justify-between items-center text-sm",
            children: [
              c.jsxs("p", {
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " Your Company. All rights reserved.",
                ],
              }),
              c.jsx("p", { children: "Privacy Policy | Terms of Service" }),
            ],
          }),
        }),
      ],
    });
function Bk(e) {
  let t = e.products;
  return c.jsxs("div", {
    className: "bg-white",
    children: [
      c.jsxs("div", {
        className:
          "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",
        children: [
          c.jsx("h2", { className: "sr-only", children: "Products" }),
          c.jsx("div", {
            className:
              "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",
            children: t.map((n, r) =>
              c.jsxs(
                te,
                {
                  to: `/productdetails/${n._id}`,
                  className: "group",
                  children: [
                    c.jsx("div", {
                      className:
                        "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7",
                      children: c.jsx("img", {
                        src: n.image.imageUrl,
                        alt: n.image.imageUrl,
                        className:
                          "h-full w-full object-cover object-center group-hover:opacity-75",
                        loading: "lazy",
                      }),
                    }),
                    c.jsx("h3", {
                      className: "mt-4 text-sm text-gray-700",
                      children: n.name,
                    }),
                    n.stock <= 0
                      ? c.jsx("div", {
                          className: "text-red-700 mt-2",
                          children: "Out of Stock",
                        })
                      : c.jsxs(c.Fragment, {
                          children: [
                            c.jsxs("p", {
                              className:
                                "mt-1 line-through inline-block text-lg font-medium text-gray-500",
                              children: ["₹ ", n.old_price],
                            }),
                            "       ",
                            c.jsxs("p", {
                              className:
                                "mt-1 text-lg inline-block font-medium text-gray-900",
                              children: ["₹ ", n.new_price],
                            }),
                          ],
                        }),
                  ],
                },
                r
              )
            ),
          }),
        ],
      }),
      c.jsxs("div", {
        className:
          "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6",
        children: [
          c.jsxs("div", {
            className: "flex flex-1 justify-between sm:hidden",
            children: [
              c.jsx(te, {
                href: "#",
                className:
                  "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
                children: "Previous",
              }),
              c.jsx(te, {
                href: "#",
                className:
                  "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
                children: "Next",
              }),
            ],
          }),
          c.jsxs("div", {
            className:
              "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",
            children: [
              c.jsx("div", {
                children: c.jsxs("p", {
                  className: "text-sm text-gray-700",
                  children: [
                    "Showing ",
                    c.jsx("span", { className: "font-medium", children: "1" }),
                    " to",
                    " ",
                    c.jsx("span", { className: "font-medium", children: "10" }),
                    " of",
                    " ",
                    c.jsx("span", { className: "font-medium", children: "97" }),
                    " results",
                  ],
                }),
              }),
              c.jsx("div", {
                children: c.jsxs("nav", {
                  className:
                    "isolate inline-flex -space-x-px rounded-md shadow-sm",
                  "aria-label": "Pagination",
                  children: [
                    c.jsxs(te, {
                      href: "#",
                      className:
                        "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                      children: [
                        c.jsx("span", {
                          className: "sr-only",
                          children: "Previous",
                        }),
                        c.jsx(VN, {
                          className: "h-5 w-5",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                    c.jsx(te, {
                      href: "#",
                      "aria-current": "page",
                      className:
                        "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                      children: "1",
                    }),
                    c.jsx(te, {
                      href: "#",
                      className:
                        "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                      children: "2",
                    }),
                    c.jsx(te, {
                      href: "#",
                      className:
                        "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex",
                      children: "3",
                    }),
                    c.jsx("span", {
                      className:
                        "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0",
                      children: "...",
                    }),
                    c.jsx(te, {
                      href: "#",
                      className:
                        "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex",
                      children: "8",
                    }),
                    c.jsx(te, {
                      href: "#",
                      className:
                        "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                      children: "9",
                    }),
                    c.jsx(te, {
                      href: "#",
                      className:
                        "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                      children: "10",
                    }),
                    c.jsxs(te, {
                      href: "#",
                      className:
                        "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                      children: [
                        c.jsx("span", {
                          className: "sr-only",
                          children: "Next",
                        }),
                        c.jsx(KN, {
                          className: "h-5 w-5",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const ac = ({ category: e }) => {
    const t = de(E1),
      n = de(JN),
      r = t.filter((i) => i.category.toLowerCase() === e.toLowerCase());
    return c.jsx(c.Fragment, {
      children:
        n === "loading"
          ? c.jsx("div", {
              className: "flex justify-center items-center h-screen",
              children: c.jsxs("div", {
                className: "text-center",
                children: [
                  c.jsx(w1, { sx: { fontSize: 48 } }),
                  " ",
                  c.jsx("div", { children: "Fetching Data From Server" }),
                ],
              }),
            })
          : c.jsx(Bk, { products: r }),
    });
  },
  lc = ({ children: e }) =>
    !localStorage.getItem("user") ? c.jsx(Oo, { to: "/login" }) : e;
function Vk() {
  return c.jsx(c.Fragment, {
    children: c.jsx("main", {
      className:
        "grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8",
      children: c.jsxs("div", {
        className: "text-center",
        children: [
          c.jsx("p", {
            className: "text-base font-semibold text-indigo-600",
            children: "404",
          }),
          c.jsx("h1", {
            className:
              "mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",
            children: "Page not found",
          }),
          c.jsx("p", {
            className: "mt-6 text-base leading-7 text-gray-600",
            children: "Sorry, we couldn’t find the page you’re looking for.",
          }),
          c.jsxs("div", {
            className: "mt-10 flex items-center justify-center gap-x-6",
            children: [
              c.jsx(te, {
                to: "/",
                className:
                  "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                children: "Go back home",
              }),
              c.jsx("a", {
                href: "#",
                className: "text-sm font-semibold text-gray-900",
                children: "Contact support - Call - 7060457474",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Wk() {
  const { id: e } = Iv(),
    t = hr();
  return (
    C.useEffect(() => {
      t(ON());
    }, [t]),
    c.jsx(c.Fragment, {
      children: c.jsx("main", {
        className:
          "grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("p", {
              className: "text-base font-semibold text-indigo-600",
              children: "Order Successfully Placed",
            }),
            c.jsxs("h1", {
              className:
                "mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",
              children: ["Order ID:", e],
            }),
            c.jsx("p", {
              className: "mt-6 text-base leading-7 text-gray-600",
              children: "Thanks for Placing the order.",
            }),
            c.jsxs("div", {
              className: "mt-10 flex items-center justify-center gap-x-6",
              children: [
                c.jsx(te, {
                  to: "/",
                  className:
                    "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                  children: "Go back home",
                }),
                c.jsx(te, {
                  to: "/orders",
                  className:
                    "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                  children: "Your Orders",
                }),
                c.jsx("a", {
                  href: "#",
                  className: "text-sm font-semibold text-gray-900",
                  children: "Have a nice day!!!",
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
const Hk = "/assets/emptyOrder-LhbYsT5j.jpg",
  Kk = () => {
    const e = de(Ni),
      t = de(LN),
      n = de(RN),
      r = e._id,
      i = hr(),
      o = de(_1);
    C.useEffect(() => {
      e && i(Pd({ id: r }));
    }, [i, o, e]);
    const s = (a) => {
      switch (a) {
        case "Pending":
          return "return bg-cyan-200 text-cyan-700";
        case "Delivered":
          return "bg-emerald-200 text-emerald-700";
        case "Cancelled":
          return "bg-red-200 text-red-700";
        case "Dispatch":
          return "bg-yellow-200 text-yellow-700";
      }
    };
    return c.jsx(c.Fragment, {
      children:
        t == "loading"
          ? c.jsx("div", {
              className: "flex justify-center items-center h-screen",
              children: c.jsxs("div", {
                className: "text-center",
                children: [
                  c.jsx(w1, { sx: { fontSize: 48 } }),
                  " ",
                  c.jsx("div", { children: "Fetching Data From Server" }),
                ],
              }),
            })
          : c.jsx(c.Fragment, {
              children:
                n.length > 0
                  ? c.jsxs("div", {
                      children: [
                        c.jsx("div", {
                          className:
                            "text-2xl flex justify-center align-middle font-bold text-gray-700 mt-5",
                          children: "Your Orders",
                        }),
                        n.map((a, l) =>
                          c.jsxs(
                            "div",
                            {
                              className:
                                "mx-auto mb-5 mt-6 max-w-7xl px-4 sm:px-6 lg:px-8 bg-white",
                              children: [
                                c.jsxs("h2", {
                                  className:
                                    "text-xl font-bold tracking-tight text-gray-900",
                                  children: ["Order : ", a._id],
                                }),
                                c.jsxs("h2", {
                                  className:
                                    "text-lg font-bold tracking-tight text-gray-900",
                                  children: [
                                    "Status :",
                                    " ",
                                    c.jsx("span", {
                                      className: `text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none rounded-lg ${s(
                                        a.status
                                      )}`,
                                      children: a.status,
                                    }),
                                  ],
                                }),
                                c.jsx("div", {
                                  className: "mt-8",
                                  children: c.jsx("div", {
                                    className: "flow-root",
                                    children: c.jsx("ul", {
                                      role: "list",
                                      className:
                                        "-my-6 divide-y divide-gray-200",
                                      children: a.product[0].map((u, f) =>
                                        c.jsxs(
                                          "li",
                                          {
                                            className: "flex py-6",
                                            children: [
                                              c.jsx("div", {
                                                className:
                                                  "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",
                                                children: c.jsx("img", {
                                                  src: u.product.image.imageUrl,
                                                  alt: u.product.image.imageUrl,
                                                  className:
                                                    "h-full w-full object-cover object-center",
                                                }),
                                              }),
                                              c.jsxs("div", {
                                                className:
                                                  "ml-4 flex flex-1 flex-col",
                                                children: [
                                                  c.jsx("div", {
                                                    children: c.jsxs("div", {
                                                      className:
                                                        "flex justify-between text-base font-medium text-gray-900",
                                                      children: [
                                                        c.jsx("h3", {
                                                          children: c.jsx("a", {
                                                            href: u.href,
                                                            children:
                                                              u.product.name,
                                                          }),
                                                        }),
                                                        c.jsxs("p", {
                                                          className: "ml-4",
                                                          children: [
                                                            "₹",
                                                            u.product.new_price,
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  c.jsx("div", {
                                                    className:
                                                      "flex flex-1 items-end justify-between text-sm",
                                                    children: c.jsxs("div", {
                                                      className:
                                                        "text-gray-500",
                                                      children: [
                                                        " ",
                                                        c.jsx("label", {
                                                          htmlFor: "quantity",
                                                          className:
                                                            "inline mr-5 text-sm font-medium leading-6 text-gray-900",
                                                          children: "Qty :",
                                                        }),
                                                        " ",
                                                        c.jsx("span", {
                                                          className:
                                                            "text-md font-bold",
                                                          children: u.quantity,
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          f
                                        )
                                      ),
                                    }),
                                  }),
                                }),
                                c.jsx("hr", {
                                  className:
                                    "w-80 mt-5 md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto border-t-2 border-gray-500 font-bold",
                                }),
                                c.jsxs("div", {
                                  className:
                                    "text-xl inline-block mr-10 font-bold text-gray-700 mt-5",
                                  children: ["Shipping Address :", " "],
                                }),
                                c.jsx("ul", {
                                  role: "list",
                                  className:
                                    "divide-y divide-gray-100 inline-block",
                                  children: a.shippingaddress.map((u, f) =>
                                    c.jsxs(
                                      "li",
                                      {
                                        className:
                                          "flex justify-between gap-x-6 py-5",
                                        children: [
                                          c.jsx("div", {
                                            className: "flex min-w-0 gap-x-4",
                                            children: c.jsxs("div", {
                                              className: "min-w-0 flex-auto",
                                              children: [
                                                c.jsx("p", {
                                                  className:
                                                    "text-sm font-semibold leading-6 text-gray-900",
                                                  children: u.name,
                                                }),
                                                c.jsx("p", {
                                                  className:
                                                    "mt-1 truncate text-xs leading-5 text-gray-500",
                                                  children: u.street,
                                                }),
                                                c.jsx("p", {
                                                  className:
                                                    "mt-1 truncate text-xs leading-5 text-gray-500",
                                                  children: u.pincode,
                                                }),
                                                c.jsx("p", {
                                                  className:
                                                    "mt-1 truncate text-xs leading-5 text-gray-500",
                                                  children: u.state,
                                                }),
                                              ],
                                            }),
                                          }),
                                          c.jsx("div", {
                                            className:
                                              "hidden shrink-0 sm:flex sm:flex-col sm:items-end",
                                            children: c.jsx("p", {
                                              className:
                                                "text-sm leading-6 text-gray-900",
                                              children: u.phone,
                                            }),
                                          }),
                                        ],
                                      },
                                      f
                                    )
                                  ),
                                }),
                                c.jsxs("div", {
                                  className:
                                    "text-sm font-bold text-gray-700 mt-5",
                                  children: [
                                    "Payment :",
                                    " ",
                                    c.jsx("div", {
                                      className: "inline text-red-500",
                                      children: a.paymentmethod,
                                    }),
                                    " ",
                                  ],
                                }),
                                c.jsxs("div", {
                                  className:
                                    "text-sm font-bold text-gray-700 mt-5",
                                  children: [
                                    "Purchase Date :",
                                    c.jsxs("div", {
                                      className: "inline text-red-500",
                                      children: [
                                        " ",
                                        new Date(a.orderDate).toLocaleString(),
                                      ],
                                    }),
                                  ],
                                }),
                                c.jsx("div", {
                                  className: "mt-8",
                                  children: c.jsxs("div", {
                                    className:
                                      "flex justify-between pb-5 text-base font-medium text-gray-900",
                                    children: [
                                      c.jsx("p", { children: "Total Value" }),
                                      c.jsxs("p", {
                                        children: ["₹", a.totalAmount],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            l
                          )
                        ),
                      ],
                    })
                  : c.jsxs("div", {
                      className: "text-center py-8",
                      children: [
                        c.jsx("img", {
                          src: Hk,
                          alt: "Cartoon Image",
                          className: "w-80 h-90 mx-auto mb-4",
                        }),
                        c.jsx("p", {
                          className: "text-lg font-bold text-gray-700",
                          children: "Nothing to Show !! Place Some Order",
                        }),
                      ],
                    }),
            }),
    });
  };
function qk() {
  const e = de(Ni),
    t = e._id,
    n = de(dl),
    r = de(DN),
    i = hr();
  return (
    C.useEffect(() => {
      i(na());
    }, [i, r]),
    C.useEffect(() => {
      e._id && i(yd(t));
    }, [e, r, i]),
    C.useEffect(() => {
      i(xd());
    }, [i, r, n]),
    c.jsxs(h_, {
      children: [
        c.jsx(S2, {}),
        c.jsxs(l_, {
          children: [
            c.jsx(vt, {
              exact: !0,
              path: "/kids",
              element: c.jsx(ac, { category: "kid" }),
            }),
            c.jsx(vt, {
              exact: !0,
              path: "/women",
              element: c.jsx(ac, { category: "women" }),
            }),
            c.jsx(vt, {
              exact: !0,
              path: "/men",
              element: c.jsx(ac, { category: "men" }),
            }),
            c.jsx(vt, {
              exact: !0,
              path: "/productdetails/:id",
              element: c.jsx(rk, {}),
            }),
            c.jsx(vt, {
              exact: !0,
              path: "/checkout",
              element: c.jsx(lc, { children: c.jsx(zN, {}) }),
            }),
            c.jsx(vt, {
              exact: !0,
              path: "/cart",
              element: c.jsx(lc, { children: c.jsx(E2, {}) }),
            }),
            c.jsx(vt, { exact: !0, path: "/signup", element: c.jsx(IE, {}) }),
            c.jsx(vt, { exact: !0, path: "/login", element: c.jsx(_2, {}) }),
            c.jsx(vt, { exact: !0, path: "/", element: c.jsx(zk, {}) }),
            c.jsx(vt, {
              exact: !0,
              path: "/ordersuccess/:id",
              element: c.jsx(Wk, {}),
            }),
            c.jsx(vt, {
              exact: !0,
              path: "/orders",
              element: c.jsx(lc, { children: c.jsx(Kk, {}) }),
            }),
            c.jsx(vt, { path: "*", element: c.jsx(Vk, {}) }),
          ],
        }),
        c.jsx(Uk, {}),
        c.jsx(kE, {
          position: "top-center",
          autoClose: 4e3,
          hideProgressBar: !1,
          newestOnTop: !1,
          closeOnClick: !0,
          rtl: !1,
          pauseOnFocusLoss: !0,
          draggable: !0,
          pauseOnHover: !0,
          theme: "light",
        }),
      ],
    })
  );
}
const Xk = Sb({
  reducer: { cart: v2, auth: Yb, product: ek, order: FN, customer: w2 },
});
uc.createRoot(document.getElementById("root")).render(
  c.jsx(X.StrictMode, {
    children: c.jsx(gE, { store: Xk, children: c.jsx(qk, {}) }),
  })
);
