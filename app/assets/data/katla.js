this.wordle = this.wordle || {},
this.wordle.bundle = function(a) {
    "use strict";
    function e(a) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        }
        )(a)
    }
    function t(a, e) {
        if (!(a instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function n(a, e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(a, n.key, n)
        }
    }
    function i(a, e, t) {
        return e && n(a.prototype, e),
        t && n(a, t),
        a
    }
    function r(a, e, t) {
        return e in a ? Object.defineProperty(a, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[e] = t,
        a
    }
    function o(a, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        a.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: a,
                writable: !0,
                configurable: !0
            }
        }),
        e && u(a, e)
    }
    function s(a) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a)
        }
        )(a)
    }
    function u(a, e) {
        return (u = Object.setPrototypeOf || function(a, e) {
            return a.__proto__ = e,
            a
        }
        )(a, e)
    }
    function l() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (a) {
            return !1
        }
    }
    function k(a, e, t) {
        return (k = l() ? Reflect.construct : function(a, e, t) {
            var n = [null];
            n.push.apply(n, e);
            var i = new (Function.bind.apply(a, n));
            return t && u(i, t.prototype),
            i
        }
        ).apply(null, arguments)
    }
    function d(a) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (d = function(a) {
            if (null === a || (t = a,
            -1 === Function.toString.call(t).indexOf("[native code]")))
                return a;
            var t;
            if ("function" != typeof a)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(a))
                    return e.get(a);
                e.set(a, n)
            }
            function n() {
                return k(a, arguments, s(this).constructor)
            }
            return n.prototype = Object.create(a.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            u(n, a)
        }
        )(a)
    }
    function c(a) {
        if (void 0 === a)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a
    }
    function p(a, e) {
        return !e || "object" != typeof e && "function" != typeof e ? c(a) : e
    }
    function m(a) {
        var e = l();
        return function() {
            var t, n = s(a);
            if (e) {
                var i = s(this).constructor;
                t = Reflect.construct(n, arguments, i)
            } else
                t = n.apply(this, arguments);
            return p(this, t)
        }
    }
    function h(a) {
        return function(a) {
            if (Array.isArray(a))
                return g(a)
        }(a) || function(a) {
            if ("undefined" != typeof Symbol && null != a[Symbol.iterator] || null != a["@@iterator"])
                return Array.from(a)
        }(a) || b(a) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function b(a, e) {
        if (a) {
            if ("string" == typeof a)
                return g(a, e);
            var t = Object.prototype.toString.call(a).slice(8, -1);
            return "Object" === t && a.constructor && (t = a.constructor.name),
            "Map" === t || "Set" === t ? Array.from(a) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? g(a, e) : void 0
        }
    }
    function g(a, e) {
        (null == e || e > a.length) && (e = a.length);
        for (var t = 0, n = new Array(e); t < e; t++)
            n[t] = a[t];
        return n
    }
    var f = document.createElement("template");
    f.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            r(c(a = e.call(this)), "_letter", ""),
            r(c(a), "_state", "empty"),
            r(c(a), "_animation", "idle"),
            r(c(a), "_last", !1),
            r(c(a), "_reveal", !1),
            a.attachShadow({
                mode: "open"
            }),
            a
        }
        return i(n, [{
            key: "last",
            set: function(a) {
                this._last = a
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild(f.content.cloneNode(!0)),
                this.$tile = this.shadowRoot.querySelector(".tile"),
                this.$tile.addEventListener("animationend", (function(e) {
                    "PopIn" === e.animationName && (a._animation = "idle"),
                    "FlipIn" === e.animationName && (a.$tile.dataset.state = a._state,
                    a._animation = "flip-out"),
                    "FlipOut" === e.animationName && (a._animation = "idle",
                    a._last && a.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row",{
                        bubbles: !0,
                        composed: !0
                    }))),
                    a._render()
                }
                )),
                this._render()
            }
        }, {
            key: "attributeChangedCallback",
            value: function(a, e, t) {
                switch (a) {
                case "letter":
                    if (t === e)
                        break;
                    var n = "null" === t ? "" : t;
                    this._letter = n,
                    this._state = n ? "tbd" : "empty",
                    this._animation = n ? "pop" : "idle";
                    break;
                case "evaluation":
                    if (!t)
                        break;
                    this._state = t;
                    break;
                case "reveal":
                    this._animation = "flip-in",
                    this._reveal = !0
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                this.$tile && (this.$tile.textContent = this._letter,
                ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state),
                (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letter", "evaluation", "reveal"]
            }
        }]),
        n
    }(d(HTMLElement));
    customElements.define("game-tile", v);
    var y = document.createElement("template");
    y.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var w = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            (a = e.call(this)).attachShadow({
                mode: "open"
            }),
            a._letters = "",
            a._evaluation = [],
            a._length,
            a
        }
        return i(n, [{
            key: "evaluation",
            get: function() {
                return this._evaluation
            },
            set: function(a) {
                var e = this;
                this._evaluation = a,
                this.$tiles && this.$tiles.forEach((function(a, t) {
                    a.setAttribute("evaluation", e._evaluation[t]),
                    setTimeout((function() {
                        a.setAttribute("reveal", "")
                    }
                    ), 300 * t)
                }
                ))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild(y.content.cloneNode(!0)),
                this.$row = this.shadowRoot.querySelector(".row");
                for (var e = function(e) {
                    var t = document.createElement("game-tile")
                      , n = a._letters[e];
                    n && t.setAttribute("letter", n),
                    a._evaluation[e] && (t.setAttribute("evaluation", a._evaluation[e]),
                    setTimeout((function() {
                        t.setAttribute("reveal", "")
                    }
                    ), 100 * e)),
                    e === a._length - 1 && (t.last = !0),
                    a.$row.appendChild(t)
                }, t = 0; t < this._length; t++)
                    e(t);
                this.$tiles = this.shadowRoot.querySelectorAll("game-tile"),
                this.addEventListener("animationend", (function(e) {
                    "Shake" === e.animationName && a.removeAttribute("invalid")
                }
                ))
            }
        }, {
            key: "attributeChangedCallback",
            value: function(a, e, t) {
                switch (a) {
                case "letters":
                    this._letters = t || "";
                    break;
                case "length":
                    this._length = parseInt(t, 10);
                    break;
                case "win":
                    if (null === t) {
                        this.$tiles.forEach((function(a) {
                            a.classList.remove("win")
                        }
                        ));
                        break
                    }
                    this.$tiles.forEach((function(a, e) {
                        a.classList.add("win"),
                        a.style.animationDelay = "".concat(100 * e, "ms")
                    }
                    ))
                }
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                var a = this;
                this.$row && this.$tiles.forEach((function(e, t) {
                    var n = a._letters[t];
                    n ? e.setAttribute("letter", n) : e.removeAttribute("letter")
                }
                ))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["letters", "length", "invalid", "win"]
            }
        }]),
        n
    }(d(HTMLElement));
    customElements.define("game-row", w);
    var j = document.createElement("template");
    j.innerHTML = "\n  <slot></slot>\n";
    var x = "darkTheme"
      , S = "colorBlindTheme"
      , _ = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            t(this, n),
            r(c(a = e.call(this)), "isDarkTheme", !1),
            r(c(a), "isColorBlindTheme", !1),
            a.attachShadow({
                mode: "open"
            });
            var i = JSON.parse(window.localStorage.getItem(x))
              , o = window.matchMedia("(prefers-color-scheme: dark)").matches
              , s = JSON.parse(window.localStorage.getItem(S));
            return !0 === i || !1 === i ? a.setDarkTheme(i) : o && a.setDarkTheme(!0),
            !0 !== s && !1 !== s || a.setColorBlindTheme(s),
            a
        }
        return i(n, [{
            key: "setDarkTheme",
            value: function(a) {
                var e = document.querySelector("body");
                a && !e.classList.contains("nightmode") ? e.classList.add("nightmode") : e.classList.remove("nightmode"),
                this.isDarkTheme = a,
                window.localStorage.setItem(x, JSON.stringify(a))
            }
        }, {
            key: "setColorBlindTheme",
            value: function(a) {
                var e = document.querySelector("body");
                a && !e.classList.contains("colorblind") ? e.classList.add("colorblind") : e.classList.remove("colorblind"),
                this.isColorBlindTheme = a,
                window.localStorage.setItem(S, JSON.stringify(a))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild(j.content.cloneNode(!0)),
                this.shadowRoot.addEventListener("game-setting-change", (function(e) {
                    var t = e.detail
                      , n = t.name
                      , i = t.checked;
                    switch (n) {
                    case "dark-theme":
                        return void a.setDarkTheme(i);
                    case "color-blind-theme":
                        return void a.setColorBlindTheme(i)
                    }
                }
                ))
            }
        }]),
        n
    }(d(HTMLElement));
    function E(a, e) {
        return a === e || a != a && e != e
    }
    function z(a, e) {
        for (var t = a.length; t--; )
            if (E(a[t][0], e))
                return t;
        return -1
    }
    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;
    function T(a) {
        var e = -1
          , t = null == a ? 0 : a.length;
        for (this.clear(); ++e < t; ) {
            var n = a[e];
            this.set(n[0], n[1])
        }
    }
    T.prototype.clear = function() {
        this.__data__ = [],
        this.size = 0
    }
    ,
    T.prototype.delete = function(a) {
        var e = this.__data__
          , t = z(e, a);
        return !(t < 0 || (t == e.length - 1 ? e.pop() : A.call(e, t, 1),
        --this.size,
        0))
    }
    ,
    T.prototype.get = function(a) {
        var e = this.__data__
          , t = z(e, a);
        return t < 0 ? void 0 : e[t][1]
    }
    ,
    T.prototype.has = function(a) {
        return z(this.__data__, a) > -1
    }
    ,
    T.prototype.set = function(a, e) {
        var t = this.__data__
          , n = z(t, a);
        return n < 0 ? (++this.size,
        t.push([a, e])) : t[n][1] = e,
        this
    }
    ;
    var C = "object" == ("undefined" == typeof global ? "undefined" : e(global)) && global && global.Object === Object && global
      , I = "object" == ("undefined" == typeof self ? "undefined" : e(self)) && self && self.Object === Object && self
      , L = C || I || Function("return this")()
      , M = L.Symbol
      , O = Object.prototype
      , R = O.hasOwnProperty
      , q = O.toString
      , P = M ? M.toStringTag : void 0
      , N = Object.prototype.toString
      , $ = M ? M.toStringTag : void 0;
    function H(a) {
        return null == a ? void 0 === a ? "[object Undefined]" : "[object Null]" : $ && $ in Object(a) ? function(a) {
            var e = R.call(a, P)
              , t = a[P];
            try {
                a[P] = void 0;
                var n = !0
            } catch (a) {}
            var i = q.call(a);
            return n && (e ? a[P] = t : delete a[P]),
            i
        }(a) : function(a) {
            return N.call(a)
        }(a)
    }
    function B(a) {
        var t = e(a);
        return null != a && ("object" == t || "function" == t)
    }
    function D(a) {
        if (!B(a))
            return !1;
        var e = H(a);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
    }
    var G, F = L["__core-js_shared__"], K = (G = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "")) ? "Symbol(src)_1." + G : "", W = Function.prototype.toString, Y = /^\[object .+?Constructor\]$/, J = Function.prototype, U = Object.prototype, X = J.toString, V = U.hasOwnProperty, Q = RegExp("^" + X.call(V).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function Z(a, e) {
        var t = function(a, e) {
            return null == a ? void 0 : a[e]
        }(a, e);
        return function(a) {
            return !(!B(a) || (e = a,
            K && K in e)) && (D(a) ? Q : Y).test(function(a) {
                if (null != a) {
                    try {
                        return W.call(a)
                    } catch (a) {}
                    try {
                        return a + ""
                    } catch (a) {}
                }
                return ""
            }(a));
            var e
        }(t) ? t : void 0
    }
    var aa = Z(L, "Map")
      , ea = Z(Object, "create")
      , ta = Object.prototype.hasOwnProperty
      , na = Object.prototype.hasOwnProperty;
    function ia(a) {
        var e = -1
          , t = null == a ? 0 : a.length;
        for (this.clear(); ++e < t; ) {
            var n = a[e];
            this.set(n[0], n[1])
        }
    }
    function ra(a, t) {
        var n, i, r = a.__data__;
        return ("string" == (i = e(n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? r["string" == typeof t ? "string" : "hash"] : r.map
    }
    function oa(a) {
        var e = -1
          , t = null == a ? 0 : a.length;
        for (this.clear(); ++e < t; ) {
            var n = a[e];
            this.set(n[0], n[1])
        }
    }
    function sa(a) {
        var e = this.__data__ = new T(a);
        this.size = e.size
    }
    ia.prototype.clear = function() {
        this.__data__ = ea ? ea(null) : {},
        this.size = 0
    }
    ,
    ia.prototype.delete = function(a) {
        var e = this.has(a) && delete this.__data__[a];
        return this.size -= e ? 1 : 0,
        e
    }
    ,
    ia.prototype.get = function(a) {
        var e = this.__data__;
        if (ea) {
            var t = e[a];
            return "__lodash_hash_undefined__" === t ? void 0 : t
        }
        return ta.call(e, a) ? e[a] : void 0
    }
    ,
    ia.prototype.has = function(a) {
        var e = this.__data__;
        return ea ? void 0 !== e[a] : na.call(e, a)
    }
    ,
    ia.prototype.set = function(a, e) {
        var t = this.__data__;
        return this.size += this.has(a) ? 0 : 1,
        t[a] = ea && void 0 === e ? "__lodash_hash_undefined__" : e,
        this
    }
    ,
    oa.prototype.clear = function() {
        this.size = 0,
        this.__data__ = {
            hash: new ia,
            map: new (aa || T),
            string: new ia
        }
    }
    ,
    oa.prototype.delete = function(a) {
        var e = ra(this, a).delete(a);
        return this.size -= e ? 1 : 0,
        e
    }
    ,
    oa.prototype.get = function(a) {
        return ra(this, a).get(a)
    }
    ,
    oa.prototype.has = function(a) {
        return ra(this, a).has(a)
    }
    ,
    oa.prototype.set = function(a, e) {
        var t = ra(this, a)
          , n = t.size;
        return t.set(a, e),
        this.size += t.size == n ? 0 : 1,
        this
    }
    ,
    sa.prototype.clear = function() {
        this.__data__ = new T,
        this.size = 0
    }
    ,
    sa.prototype.delete = function(a) {
        var e = this.__data__
          , t = e.delete(a);
        return this.size = e.size,
        t
    }
    ,
    sa.prototype.get = function(a) {
        return this.__data__.get(a)
    }
    ,
    sa.prototype.has = function(a) {
        return this.__data__.has(a)
    }
    ,
    sa.prototype.set = function(a, e) {
        var t = this.__data__;
        if (t instanceof T) {
            var n = t.__data__;
            if (!aa || n.length < 199)
                return n.push([a, e]),
                this.size = ++t.size,
                this;
            t = this.__data__ = new oa(n)
        }
        return t.set(a, e),
        this.size = t.size,
        this
    }
    ;
    var ua = function() {
        try {
            var a = Z(Object, "defineProperty");
            return a({}, "", {}),
            a
        } catch (a) {}
    }();
    function la(a, e, t) {
        "__proto__" == e && ua ? ua(a, e, {
            configurable: !0,
            enumerable: !0,
            value: t,
            writable: !0
        }) : a[e] = t
    }
    function ka(a, e, t) {
        (void 0 !== t && !E(a[e], t) || void 0 === t && !(e in a)) && la(a, e, t)
    }
    var da = "object" == (void 0 === a ? "undefined" : e(a)) && a && !a.nodeType && a
      , ca = da && "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module && !module.nodeType && module
      , pa = ca && ca.exports === da ? L.Buffer : void 0
      , ma = (pa && pa.allocUnsafe,
    L.Uint8Array);
    var ha, ba, ga = Object.create, fa = function() {
        function a() {}
        return function(e) {
            if (!B(e))
                return {};
            if (ga)
                return ga(e);
            a.prototype = e;
            var t = new a;
            return a.prototype = void 0,
            t
        }
    }(), va = (ha = Object.getPrototypeOf,
    ba = Object,
    function(a) {
        return ha(ba(a))
    }
    ), ya = Object.prototype;
    function wa(a) {
        var e = a && a.constructor;
        return a === ("function" == typeof e && e.prototype || ya)
    }
    function ja(a) {
        return null != a && "object" == e(a)
    }
    function xa(a) {
        return ja(a) && "[object Arguments]" == H(a)
    }
    var Sa = Object.prototype
      , _a = Sa.hasOwnProperty
      , Ea = Sa.propertyIsEnumerable
      , za = xa(function() {
        return arguments
    }()) ? xa : function(a) {
        return ja(a) && _a.call(a, "callee") && !Ea.call(a, "callee")
    }
      , Aa = Array.isArray;
    function Ta(a) {
        return "number" == typeof a && a > -1 && a % 1 == 0 && a <= 9007199254740991
    }
    function Ca(a) {
        return null != a && Ta(a.length) && !D(a)
    }
    var Ia = "object" == (void 0 === a ? "undefined" : e(a)) && a && !a.nodeType && a
      , La = Ia && "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module && !module.nodeType && module
      , Ma = La && La.exports === Ia ? L.Buffer : void 0
      , Oa = (Ma ? Ma.isBuffer : void 0) || function() {
        return !1
    }
      , Ra = Function.prototype
      , qa = Object.prototype
      , Pa = Ra.toString
      , Na = qa.hasOwnProperty
      , $a = Pa.call(Object)
      , Ha = {};
    Ha["[object Float32Array]"] = Ha["[object Float64Array]"] = Ha["[object Int8Array]"] = Ha["[object Int16Array]"] = Ha["[object Int32Array]"] = Ha["[object Uint8Array]"] = Ha["[object Uint8ClampedArray]"] = Ha["[object Uint16Array]"] = Ha["[object Uint32Array]"] = !0,
    Ha["[object Arguments]"] = Ha["[object Array]"] = Ha["[object ArrayBuffer]"] = Ha["[object Boolean]"] = Ha["[object DataView]"] = Ha["[object Date]"] = Ha["[object Error]"] = Ha["[object Function]"] = Ha["[object Map]"] = Ha["[object Number]"] = Ha["[object Object]"] = Ha["[object RegExp]"] = Ha["[object Set]"] = Ha["[object String]"] = Ha["[object WeakMap]"] = !1;
    var Ba = "object" == (void 0 === a ? "undefined" : e(a)) && a && !a.nodeType && a
      , Da = Ba && "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module && !module.nodeType && module
      , Ga = Da && Da.exports === Ba && C.process
      , Fa = function() {
        try {
            return Da && Da.require && Da.require("util").types || Ga && Ga.binding && Ga.binding("util")
        } catch (a) {}
    }()
      , Ka = Fa && Fa.isTypedArray
      , Wa = Ka ? function(a) {
        return function(e) {
            return a(e)
        }
    }(Ka) : function(a) {
        return ja(a) && Ta(a.length) && !!Ha[H(a)]
    }
    ;
    function Ya(a, e) {
        if (("constructor" !== e || "function" != typeof a[e]) && "__proto__" != e)
            return a[e]
    }
    var Ja = Object.prototype.hasOwnProperty;
    function Ua(a, e, t) {
        var n = a[e];
        Ja.call(a, e) && E(n, t) && (void 0 !== t || e in a) || la(a, e, t)
    }
    var Xa = /^(?:0|[1-9]\d*)$/;
    function Va(a, t) {
        var n = e(a);
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && Xa.test(a)) && a > -1 && a % 1 == 0 && a < t
    }
    var Qa = Object.prototype.hasOwnProperty;
    var Za = Object.prototype.hasOwnProperty;
    function ae(a) {
        return Ca(a) ? function(a, e) {
            var t = Aa(a)
              , n = !t && za(a)
              , i = !t && !n && Oa(a)
              , r = !t && !n && !i && Wa(a)
              , o = t || n || i || r
              , s = o ? function(a, e) {
                for (var t = -1, n = Array(a); ++t < a; )
                    n[t] = e(t);
                return n
            }(a.length, String) : []
              , u = s.length;
            for (var l in a)
                !e && !Qa.call(a, l) || o && ("length" == l || i && ("offset" == l || "parent" == l) || r && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Va(l, u)) || s.push(l);
            return s
        }(a, !0) : function(a) {
            if (!B(a))
                return function(a) {
                    var e = [];
                    if (null != a)
                        for (var t in Object(a))
                            e.push(t);
                    return e
                }(a);
            var e = wa(a)
              , t = [];
            for (var n in a)
                ("constructor" != n || !e && Za.call(a, n)) && t.push(n);
            return t
        }(a)
    }
    function ee(a, e, t, n, i, r, o) {
        var s = Ya(a, t)
          , u = Ya(e, t)
          , l = o.get(u);
        if (l)
            ka(a, t, l);
        else {
            var k, d = r ? r(s, u, t + "", a, e, o) : void 0, c = void 0 === d;
            if (c) {
                var p = Aa(u)
                  , m = !p && Oa(u)
                  , h = !p && !m && Wa(u);
                d = u,
                p || m || h ? Aa(s) ? d = s : ja(k = s) && Ca(k) ? d = function(a, e) {
                    var t = -1
                      , n = a.length;
                    for (e || (e = Array(n)); ++t < n; )
                        e[t] = a[t];
                    return e
                }(s) : m ? (c = !1,
                d = function(a, e) {
                    return a.slice()
                }(u)) : h ? (c = !1,
                d = function(a, e) {
                    var t, n, i = e ? (n = new (t = a.buffer).constructor(t.byteLength),
                    new ma(n).set(new ma(t)),
                    n) : a.buffer;
                    return new a.constructor(i,a.byteOffset,a.length)
                }(u, !0)) : d = [] : function(a) {
                    if (!ja(a) || "[object Object]" != H(a))
                        return !1;
                    var e = va(a);
                    if (null === e)
                        return !0;
                    var t = Na.call(e, "constructor") && e.constructor;
                    return "function" == typeof t && t instanceof t && Pa.call(t) == $a
                }(u) || za(u) ? (d = s,
                za(s) ? d = function(a) {
                    return function(a, e, t, n) {
                        var i = !t;
                        t || (t = {});
                        for (var r = -1, o = e.length; ++r < o; ) {
                            var s = e[r]
                              , u = void 0;
                            void 0 === u && (u = a[s]),
                            i ? la(t, s, u) : Ua(t, s, u)
                        }
                        return t
                    }(a, ae(a))
                }(s) : B(s) && !D(s) || (d = function(a) {
                    return "function" != typeof a.constructor || wa(a) ? {} : fa(va(a))
                }(u))) : c = !1
            }
            c && (o.set(u, d),
            i(d, u, n, r, o),
            o.delete(u)),
            ka(a, t, d)
        }
    }
    function te(a, e, t, n, i) {
        a !== e && function(a, e, t) {
            for (var n = -1, i = Object(a), r = t(a), o = r.length; o--; ) {
                var s = r[++n];
                if (!1 === e(i[s], s, i))
                    break
            }
        }(e, (function(r, o) {
            if (i || (i = new sa),
            B(r))
                ee(a, e, o, t, te, n, i);
            else {
                var s = n ? n(Ya(a, o), r, o + "", a, e, i) : void 0;
                void 0 === s && (s = r),
                ka(a, o, s)
            }
        }
        ), ae)
    }
    function ne(a) {
        return a
    }
    function ie(a, e, t) {
        switch (t.length) {
        case 0:
            return a.call(e);
        case 1:
            return a.call(e, t[0]);
        case 2:
            return a.call(e, t[0], t[1]);
        case 3:
            return a.call(e, t[0], t[1], t[2])
        }
        return a.apply(e, t)
    }
    var re = Math.max
      , oe = ua ? function(a, e) {
        return ua(a, "toString", {
            configurable: !0,
            enumerable: !1,
            value: (t = e,
            function() {
                return t
            }
            ),
            writable: !0
        });
        var t
    }
    : ne
      , se = Date.now
      , ue = function(a) {
        var e = 0
          , t = 0;
        return function() {
            var n = se()
              , i = 16 - (n - t);
            if (t = n,
            i > 0) {
                if (++e >= 800)
                    return arguments[0]
            } else
                e = 0;
            return a.apply(void 0, arguments)
        }
    }(oe);
    var le, ke = (le = function(a, e, t) {
        te(a, e, t)
    }
    ,
    function(a, e) {
        return ue(function(a, e, t) {
            return e = re(void 0 === e ? a.length - 1 : e, 0),
            function() {
                for (var n = arguments, i = -1, r = re(n.length - e, 0), o = Array(r); ++i < r; )
                    o[i] = n[e + i];
                i = -1;
                for (var s = Array(e + 1); ++i < e; )
                    s[i] = n[i];
                return s[e] = t(o),
                ie(a, this, s)
            }
        }(a, e, ne), a + "")
    }((function(a, t) {
        var n = -1
          , i = t.length
          , r = i > 1 ? t[i - 1] : void 0
          , o = i > 2 ? t[2] : void 0;
        for (r = le.length > 3 && "function" == typeof r ? (i--,
        r) : void 0,
        o && function(a, t, n) {
            if (!B(n))
                return !1;
            var i = e(t);
            return !!("number" == i ? Ca(n) && Va(t, n.length) : "string" == i && t in n) && E(n[t], a)
        }(t[0], t[1], o) && (r = i < 3 ? void 0 : r,
        i = 1),
        a = Object(a); ++n < i; ) {
            var s = t[n];
            s && le(a, s, n)
        }
        return a
    }
    ))), de = "gameState", ce = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1
    };
    function pe() {
        var a = window.localStorage.getItem(de) || JSON.stringify(ce);
        return JSON.parse(a)
    }
    function me(a) {
        var e = pe();
        !function(a) {
            window.localStorage.setItem(de, JSON.stringify(a))
        }(ke(e, a))
    }
    var he = document.createElement("template");
    he.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  #privacy-policy,\n  #copyright {\n    text-align: left;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      \x3c!--<div class="setting">\n        <div class="text">\n          <div class="title">Hard Mode</div>\n          <div class="description">Any revealed hints must be used in subsequent guesses</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      --\x3e<div class="setting">\n        <div class="text">\n          <div class="title">Tema Gelap</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Mode Buta Warna</div>\n          <div class="description">Warna kontras tinggi</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Umpan Balik</div>\n        </div>\n        <div class="control">\n          <a href="mailto:chocoberry520@gmail.com?subject=Maklum Balas" title="chocoberry520@gmail.com">Email</a>\n          \n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div>\n      <div id="privacy-policy"><a href="privacy-policy.html" target="_blank">Privacy Policy</a></div>\n      \n    </div>\n    \n    <div>\n      \n    </div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var be = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            r(c(a = e.call(this)), "gameApp", void 0),
            a.attachShadow({
                mode: "open"
            }),
            a
        }
        return i(n, [{
            key: "connectedCallback",
            value: function() {
                var a, e = this;
                this.shadowRoot.appendChild(he.content.cloneNode(!0)),
                this.shadowRoot.querySelector("#hash").textContent = null === (a = window.wordle) || void 0 === a ? void 0 : a.hash,
                this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset),
                this.shadowRoot.addEventListener("game-switch-change", (function(a) {
                    a.stopPropagation();
                    var t = a.detail
                      , n = t.name
                      , i = t.checked
                      , r = t.disabled;
                    e.dispatchEvent(new CustomEvent("game-setting-change",{
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: n,
                            checked: i,
                            disabled: r
                        }
                    })),
                    e.render()
                }
                )),
                this.render()
            }
        }, {
            key: "render",
            value: function() {
                var a = document.querySelector("body");
                a.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
                a.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
                var e = pe();
                e.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
                e.hardMode || "IN_PROGRESS" !== e.gameStatus || 0 === e.rowIndex || (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"),
                this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""))
            }
        }]),
        n
    }(d(HTMLElement));
    customElements.define("game-settings", be);
    var ge = document.createElement("template");
    ge.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var fe = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            r(c(a = e.call(this)), "_duration", void 0),
            a.attachShadow({
                mode: "open"
            }),
            a
        }
        return i(n, [{
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild(ge.content.cloneNode(!0));
                var e = this.shadowRoot.querySelector(".toast");
                e.textContent = this.getAttribute("text"),
                this._duration = this.getAttribute("duration") || 1e3,
                "Infinity" !== this._duration && setTimeout((function() {
                    e.classList.add("fade")
                }
                ), this._duration),
                e.addEventListener("transitionend", (function(e) {
                    a.parentNode.removeChild(a)
                }
                ))
            }
        }]),
        n
    }(d(HTMLElement));
    function ve() {
        dataLayer.push(arguments)
    }
    customElements.define("game-toast", fe),
    window.dataLayer = window.dataLayer || [],
    ve("js", new Date);
    var ye = ["lezat", "panel", "musuh", "komik", "panti", "tarik", "balas", "untuk", "angel", "fajar", "pelan", "hijau", "pompa", "kapal", "tomat", "paman", "induk", "cinta", "retak", "baris", "pulih", "pasir", "domba", "tusuk", "kedai", "gagah", "fisik", "sepak", "turut", "pasti", "masak", "balik", "kimia", "dosis", "sikat", "duduk", "omong", "label", "tajam", "bantu", "motor", "macan", "salam", "garis", "penuh", "bosan", "massa", "gerak", "tepuk", "wujud", "artis", "lahir", "mafia", "titik", "moral", "mahal", "dunia", "cerah", "damai", "buruk", "waktu", "jaket", "dapat", "paham", "benci", "zaman", "lilin", "utang", "turun", "bukti", "busur", "bukit", "seksi", "kirim", "versi", "tidak", "medan", "belok", "humor", "ember", "pukul", "mandi", "telah", "situs", "gadis", "sosis", "sulit", "mesti", "bulan", "tebal", "punya", "fakta", "mayat", "biara", "nakal", "gemuk", "wajah", "super", "botol", "setan", "tepat", "hasil", "tewas", "nomor", "mampu", "mawar", "opsir", "motif", "robot", "lebih", "selam", "darat", "pintu", "hakim", "pesta", "gitar", "bijak", "angka", "tiket", "cewek", "tekan", "ajaib", "momen", "bapak", "ramah", "koboi", "rekam", "tokoh", "kulit", "total", "elang", "saham", "mimpi", "peran", "pilih", "lahan", "bajak", "tujuh", "agung", "ulang", "robek", "reuni", "aksen", "abadi", "usaha", "sikap", "lekas", "ramai", "orbit", "masuk", "jubah", "kabin", "makna", "tenda", "napas", "semua", "lemon", "meski", "padat", "virus", "jalur", "mulia", "taksi", "ratus", "dalam", "taman", "akrab", "tutup", "bocah", "gempa", "utara", "harga", "layak", "pisau", "roket", "sobat", "tamat", "rokok", "madam", "ganja", "piala", "patut", "tahap", "cabul", "final", "gajah", "macam", "tikus", "surga", "kolam", "sehat", "serta", "asyik", "jawab", "indah", "lunak", "marah", "badai", "kagum", "demam", "salju", "bebas", "biaya", "asing", "jaksa", "tiada", "lolos", "gosip", "natal", "papan", "tanah", "putra", "halus", "rubah", "lemak", "bakat", "milik", "kakek", "masih", "egois", "rompi", "gatal", "badan", "serum", "iklan", "rapat", "pahit", "kudus", "pucat", "libur", "jamin", "bunyi", "lebar", "piano", "yaitu", "cetak", "sedih", "beras", "patah", "jarak", "meter", "kalau", "letak", "panen", "turis", "balap", "kartu", "warna", "hebat", "merah", "tahun", "ketua", "hukum", "salib", "siang", "jejak", "lampu", "teluk", "memar", "tupai", "depan", "palsu", "belum", "wiski", "puluh", "stres", "berat", "hujan", "jumat", "cuman", "rumah", "kesal", "tuhan", "perut", "teman", "bedah", "nyawa", "sains", "cemas", "udara", "bunga", "bibir", "ketat", "jimat", "musik", "jatuh", "katak", "cakar", "model", "suruh", "kasur", "sopan", "piatu", "donat", "akses", "karet", "jarum", "namun", "kagak", "ganti", "sumur", "organ", "rutin", "lalat", "nafas", "heran", "cacat", "jumpa", "ialah", "pesan", "besar", "tahta", "tanda", "rudal", "fokus", "hitam", "botak", "roman", "tatap", "lurus", "mirip", "april", "panah", "sibuk", "akhir", "tubuh", "tinju", "sabun", "beres", "pedas", "parah", "mobil", "bukan", "gagal", "kutub", "porno", "istri", "lebah", "resep", "cakap", "sadar", "manis", "dewan", "nasib", "yatim", "cowok", "singa", "ampun", "gugur", "angsa", "jamur", "sabtu", "kunci", "pulau", "nilai", "larut", "karir", "ceria", "sipil", "jalan", "tulis", "jenis", "petir", "mesin", "makan", "yakin", "biksu", "ingin", "peluk", "alami", "tetap", "senin", "harta", "mahir", "rindu", "lapor", "pergi", "opera", "surya", "kadal", "garam", "upaya", "taruh", "entah", "semut", "bahan", "rumor", "paris", "tulus", "busuk", "malah", "putih", "sejak", "mewah", "buntu", "tahan", "hapus", "bahas", "hajar", "catur", "makam", "detak", "bubuk", "radar", "bubar", "maret", "orang", "tidur", "senat", "kayak", "video", "teror", "buaya", "balon", "bakar", "kursi", "jaman", "boleh", "susah", "keras", "sulap", "pagar", "mohon", "licik", "tegak", "sayap", "perlu", "badut", "budak", "resmi", "arwah", "pipis", "beban", "cukup", "medis", "timur", "lelah", "iblis", "skala", "karun", "waras", "lutut", "basah", "dansa", "kasus", "surat", "dapur", "ultra", "kabut", "bakal", "malam", "mudah", "kaset", "pakai", "pajak", "andai", "kelak", "lewat", "fiksi", "sifat", "sinar", "ronde", "musim", "benar", "kuasa", "mason", "bikin", "koper", "tegas", "benda", "mulut", "kawin", "topik", "sabuk", "tiang", "kanan", "sosok", "kamis", "perak", "delta", "bawah", "lawan", "pecah", "harus", "rapuh", "menit", "jahat", "korek", "legal", "level", "objek", "nafsu", "padam", "pohon", "paksa", "nenek", "kisah", "pihak", "jelek", "arena", "benua", "kasar", "paruh", "sudah", "terus", "gelap", "lepas", "derek", "pasta", "nomer", "bunuh", "huruf", "ribut", "gagak", "jasad", "butuh", "saran", "harap", "antik", "bebek", "nyata", "hutan", "paket", "buang", "kesan", "pusat", "lihat", "antar", "lapar", "hidup", "takut", "rekan", "tunai", "karya", "tanpa", "kejar", "teori", "novel", "album", "danau", "kalah", "murni", "hewan", "ruang", "gugup", "walau", "benih", "leher", "pacar", "detik", "lemah", "jelas", "besok", "lapis", "wajar", "mabuk", "kabar", "siaga", "sopir", "kawat", "hamba", "rupee", "sandi", "logam", "klien", "idiot", "tirai", "keren", "utama", "fatal", "bodoh", "putar", "batuk", "salah", "maria", "wajib", "mitos", "cuaca", "janji", "bulat", "hantu", "intel", "santa", "malas", "agama", "kaget", "lulus", "setia", "kapan", "batas", "alarm", "cukur", "suara", "puisi", "racun", "kacau", "payah", "empat", "email", "kamar", "dekat", "sabar", "abang", "jeruk", "siapa", "mulai", "kubah", "penis", "patuh", "udang", "kotak", "media", "ingat", "hotel", "judul", "arsip", "drama", "sidik", "ilusi", "telur", "warga", "aktor", "jurus", "telat", "suami", "cepat", "darah", "lokal", "gawat", "minta", "bagai", "pilot", "emang", "cocok", "emosi", "vodka", "islam", "murah", "kotor", "kecil", "radio", "kawan", "minum", "segar", "bonus", "koran", "layar", "studi", "panik", "macet", "siswa", "kerja", "janda", "biasa", "kasih", "pekan", "tanya", "hanya", "merek", "babak", "acara", "kurus", "kelas", "tentu", "juara", "hadir", "sipir", "ganda", "lipat", "sebab", "pikir", "mitra", "calon", "kitab", "megan", "nanti", "haram", "panas", "sebut", "laser", "wakil", "rumit", "sudut", "kebun", "celah", "capek", "sihir", "negro", "habis", "nyali", "angin", "putri", "bayar", "barat", "bocor", "suatu", "putus", "aroma", "belas", "kargo", "kapak", "klaim", "motel", "aktif", "wahai", "ujung", "rekor", "betul", "latar", "tebak", "bahwa", "kejam", "gelar", "bagus", "mayor", "dolar", "kubur", "bekas", "hamil", "kabur", "kabel", "gurun", "dasar", "supir", "polis", "ambil", "segel", "tugas", "makin", "pasar", "jujur", "tipis", "umpan", "wabah", "murid", "saksi", "lomba", "lidah", "henry", "sakit", "kakak", "rusak", "kenal", "saraf", "gelas"]
      , we = ["abadi", "abaka", "abang", "abdas", "abdul", "abece", "abian", "abing", "abjad", "ablur", "abnus", "abrak", "abrar", "abras", "abrek", "absah", "absen", "abses", "absis", "abtar", "abuan", "acala", "acang", "acara", "acawi", "acung", "adaks", "adang", "adati", "adika", "ading", "adisi", "adnan", "adpis", "adres", "adven", "advis", "aerob", "afair", "afdal", "afiat", "afiks", "afkir", "afrit", "afsun", "afuah", "afwah", "agama", "agami", "agape", "agens", "agogo", "agung", "ahkam", "ahmak", "ahmar", "ahsan", "ahwal", "ajaib", "ajang", "ajnas", "ajung", "akaid", "akang", "akasa", "akbar", "akene", "akhir", "akmal", "akrab", "aksen", "aksep", "akses", "aksis", "akson", "aktif", "aktip", "aktor", "akuan", "akuwu", "akwal", "alami", "alang", "alarm", "albas", "albit", "album", "aliah", "alias", "alibi", "aling", "alkah", "alkil", "alkus", "alosu", "altar", "alung", "alusi", "alwah", "amang", "ambah", "ambai", "ambak", "ambal", "ambar", "ambat", "ambau", "ambeg", "ambek", "amben", "ambet", "ambil", "ambin", "amboi", "ambuh", "ambul", "ambur", "ameba", "amien", "amina", "amino", "amorf", "ampai", "ampas", "ampat", "ampek", "ampel", "ampuh", "ampuk", "ampul", "ampun", "amput", "amril", "amsal", "amuba", "amung", "anang", "anani", "anbia", "ancai", "ancak", "ancam", "ancoa", "ancol", "ancuk", "andai", "andak", "andal", "andam", "andan", "andap", "andar", "andil", "andok", "anduh", "anduk", "andun", "andur", "aneka", "anfas", "angah", "angan", "angel", "angga", "anggu", "angin", "angit", "angka", "angku", "anglo", "angon", "angop", "angot", "angsa", "angsu", "angur", "angus", "angut", "animo", "anion", "anjak", "anjal", "anjar", "anjat", "anjir", "anjur", "anode", "anomi", "ansar", "ansor", "antah", "antan", "antap", "antar", "antek", "antem", "antep", "antih", "antik", "antoi", "antop", "antre", "antuk", "antul", "antun", "anual", "anyak", "anyam", "anyar", "anyik", "anyir", "aorta", "apati", "apion", "apium", "apkir", "aplus", "apnea", "apoge", "april", "aprit", "apron", "apung", "arang", "arasy", "arbab", "arbei", "arcas", "areal", "arena", "areta", "argol", "argon", "argot", "aries", "aring", "arnal", "aroma", "arpus", "arsip", "arsir", "arsis", "artik", "artis", "aruan", "aruda", "arung", "arwah", "arzak", "asali", "asana", "asasi", "asbak", "asbes", "asbut", "asese", "asfal", "asfar", "asing", "asiri", "askar", "asket", "askon", "asnad", "asong", "aspal", "aspek", "asrar", "aster", "asung", "aswad", "asyik", "atase", "ateis", "atlas", "atlet", "atman", "atowa", "atung", "audio", "audit", "auksi", "aulia", "aural", "aurat", "aurum", "autad", "avgas", "avtur", "awang", "ayeng", "azali", "azmat", "babad", "babah", "babak", "babal", "baban", "babar", "babas", "babat", "babet", "babil", "babit", "babon", "babun", "babur", "babut", "bacah", "bacak", "bacar", "bacek", "bacem", "bacik", "bacin", "bacok", "bacot", "bacul", "bacut", "badai", "badak", "badal", "badam", "badan", "badar", "badau", "badik", "badui", "baduk", "badur", "badut", "bafta", "bagai", "bagak", "bagal", "bagan", "bagar", "bagas", "bagat", "bagau", "bagea", "bagor", "baguk", "bagul", "bagur", "bagus", "bahak", "baham", "bahan", "bahar", "bahas", "bahwa", "baiat", "bajaj", "bajak", "bajan", "bajar", "bajau", "bajik", "bajul", "bakak", "bakal", "bakam", "bakap", "bakar", "bakat", "bakau", "bakda", "bakdu", "bakik", "bakir", "bakmi", "baksi", "bakso", "bakti", "bakul", "bakup", "bakut", "balad", "balah", "balai", "balak", "balam", "balan", "balap", "balar", "balas", "balau", "balen", "balet", "balig", "balik", "balit", "baliu", "balok", "balon", "balot", "baluh", "balui", "baluk", "balun", "balur", "balut", "bambu", "banal", "banar", "banat", "banci", "banda", "bando", "bandu", "banir", "banji", "bantu", "banua", "banyo", "banyu", "bapak", "bapao", "bapet", "barah", "barai", "barak", "baran", "barap", "baras", "barat", "bardi", "barel", "barep", "baret", "barga", "barid", "barik", "baris", "barit", "barli", "barok", "baron", "barso", "barua", "baruh", "barut", "basah", "basal", "basat", "basau", "basil", "basin", "basir", "basis", "basit", "basmi", "basuh", "basut", "batai", "batak", "batal", "batas", "batau", "batel", "batih", "batik", "batil", "batin", "batis", "batok", "baton", "batuk", "batun", "baung", "bawab", "bawah", "bawak", "bawal", "bawat", "bawel", "bawon", "bayak", "bayam", "bayan", "bayar", "bayas", "bayat", "bayem", "bayuh", "bayun", "bayur", "bazar", "bebal", "beban", "bebar", "bebas", "bebat", "bebek", "bebel", "beber", "becak", "becek", "becuk", "becus", "bedah", "bedak", "bedal", "bedan", "bedar", "bedel", "bedil", "bedol", "beduk", "begah", "begal", "begap", "begar", "beguk", "bejat", "bekah", "bekal", "bekam", "bekap", "bekas", "bekat", "bekel", "beken", "beker", "bekil", "bekuk", "belah", "belai", "belak", "belam", "belan", "belar", "belas", "belat", "belau", "beldu", "belek", "belel", "belia", "belik", "belis", "belit", "beloh", "belok", "belon", "belot", "beluk", "belum", "belur", "belus", "belut", "benah", "benak", "benam", "benar", "benci", "benda", "bende", "bendi", "bendo", "bendu", "bengu", "benih", "benta", "benua", "benum", "benur", "berai", "berak", "beram", "beras", "berat", "bereo", "beres", "beret", "berik", "beril", "berko", "berma", "bermi", "berok", "beron", "berui", "beruk", "berus", "besan", "besar", "besek", "besel", "beser", "beset", "besit", "besok", "besot", "besuk", "besut", "betah", "betas", "betau", "betet", "betik", "betis", "betok", "beton", "betot", "betul", "bewok", "biadi", "biang", "biara", "biasa", "biaya", "bibel", "bibir", "bibit", "bidah", "bidai", "bidak", "bidal", "bidan", "bidar", "bidas", "bidet", "bidik", "biduk", "bidur", "bihun", "bijak", "bijan", "bijih", "bikin", "bikir", "biksu", "bilah", "bilai", "bilal", "bilas", "bilau", "bilga", "bilik", "bilis", "bilur", "binal", "binar", "bincu", "bindu", "binen", "biner", "binti", "biola", "biota", "birah", "birai", "biram", "biras", "birat", "birih", "birit", "bisai", "bisan", "bisik", "bison", "bissu", "bisul", "biuku", "bivak", "blong", "bloon", "blues", "bobok", "bobol", "bobos", "bobot", "bocah", "bocok", "bocor", "bodhi", "bodoh", "bodok", "bodor", "bogam", "bogel", "bogem", "bogol", "bogor", "bogot", "bohok", "bokar", "bokca", "bokek", "bokoh", "bokop", "bokor", "bokot", "boksu", "bolak", "boleh", "bolos", "bolot", "bomoh", "bomor", "bonar", "bonet", "bongo", "bonto", "bonus", "bopok", "borak", "borat", "borci", "bordu", "boreh", "borek", "borok", "boron", "boros", "bosan", "boson", "bosor", "bosun", "botak", "botoh", "botok", "botol", "botor", "boyak", "boyas", "bozah", "brana", "brata", "bruto", "buana", "buang", "buani", "buari", "buaya", "bubar", "bubuh", "bubuk", "bubul", "bubun", "bubur", "bubus", "bubut", "budak", "budek", "buduk", "budur", "bueng", "bufer", "bufet", "bugar", "bugil", "buhuk", "buhul", "buhur", "bujal", "bujam", "bujet", "bujuk", "bujur", "bujut", "bukan", "bukat", "bukau", "buket", "bukit", "bukti", "bukur", "bukut", "bulai", "bulak", "bulan", "bular", "bulat", "bulir", "bulug", "buluh", "buluk", "bulur", "bulus", "bumbu", "bumel", "bunda", "bunga", "buntu", "bunuh", "bunut", "bunyi", "bupet", "burai", "burak", "buram", "buras", "burat", "buret", "burik", "burit", "buron", "bursa", "buruh", "buruj", "buruk", "burun", "burut", "busai", "busar", "buset", "busik", "busuk", "busur", "busut", "butek", "butik", "butir", "butuh", "butul", "butun", "butut", "buwuh", "buyar", "buyur", "buyut", "cabai", "cabak", "cabar", "cabau", "cabik", "cabir", "cabuh", "cabuk", "cabul", "cabur", "cabut", "cacah", "cacak", "cacap", "cacar", "cacat", "cacau", "cacil", "cadai", "cadar", "cadas", "cadel", "cadik", "cadir", "cadok", "caduk", "cagak", "cagar", "cagil", "caguh", "cagun", "cagut", "cahar", "caima", "caing", "cakah", "cakak", "cakap", "cakar", "cakep", "cakil", "cakra", "cakup", "cakur", "cakus", "calak", "calar", "calir", "calit", "calon", "calui", "caluk", "calus", "camar", "camat", "camau", "camca", "camil", "campa", "camuk", "camur", "canai", "canak", "canda", "candi", "candu", "capah", "capai", "capak", "capal", "capar", "capek", "capik", "capil", "capit", "capuk", "carah", "carak", "caram", "caran", "carat", "caren", "carik", "caruk", "carut", "casis", "catat", "catek", "catet", "catuk", "catur", "catut", "caung", "cawai", "cawak", "cawan", "cawat", "cawis", "cebak", "ceban", "cebik", "cebil", "cebir", "cebis", "cebok", "cebol", "cebur", "cecah", "cecak", "cecap", "cecar", "ceceh", "cecer", "cecok", "cedal", "cedok", "ceduk", "cegah", "cegak", "cegar", "cegas", "cegat", "ceguk", "cekah", "cekak", "cekal", "cekam", "cekap", "cekat", "cekau", "cekek", "cekel", "ceker", "cekih", "cekik", "cekit", "cekok", "cekuh", "cekuk", "cekup", "cekur", "cekut", "celah", "celak", "celar", "celas", "celat", "celek", "celep", "celih", "celik", "celis", "celok", "celos", "celuk", "celum", "celup", "celur", "celus", "cemar", "cemas", "cemat", "cemeh", "cemek", "cemer", "cempa", "cempe", "cemuk", "cenak", "cengi", "cepak", "cepal", "cepat", "cepek", "ceper", "cepit", "cepol", "cepuk", "cerah", "cerai", "cerak", "cerap", "cerat", "cerau", "cerca", "cerek", "ceret", "ceria", "cerih", "cerna", "cerpu", "ceruh", "ceruk", "cerun", "cerup", "cerut", "cetai", "cetak", "cetar", "cetek", "ceter", "cetok", "cetus", "ceuki", "cewek", "cibir", "cibit", "cibuk", "cicah", "cicak", "cicih", "cicik", "cicil", "cicip", "cicir", "cicit", "ciduk", "cigak", "cihui", "cikal", "cikar", "cikok", "cikun", "cikut", "cilap", "cilik", "cilok", "cincu", "cinda", "cinde", "cinta", "cipai", "cipan", "cipoa", "cipok", "cipta", "cirit", "citak", "citra", "coang", "coban", "cobek", "cocok", "cocol", "cocor", "codak", "codet", "codot", "cogah", "cogan", "cogok", "cokar", "cokek", "coket", "cokok", "cokol", "colak", "colek", "colet", "colok", "colot", "comek", "comel", "comor", "comot", "comro", "conet", "congo", "copar", "copet", "copol", "copot", "corak", "corek", "coret", "corob", "corot", "cotet", "cotok", "cowok", "cuaca", "cuang", "cuban", "cubit", "cucuh", "cucuk", "cucun", "cucup", "cucur", "cucut", "cugat", "cukai", "cukam", "cukil", "cukin", "cukir", "cukit", "cukup", "cukur", "culak", "culan", "culas", "culik", "culim", "culun", "cuman", "cumbu", "cumil", "cunam", "cunda", "cungo", "cunia", "cupai", "cupak", "cupar", "cupet", "cupit", "cupul", "curah", "curai", "curam", "curat", "curik", "curna", "cutak", "cutel", "dabak", "dabal", "dabat", "dabih", "dabik", "dabir", "dabit", "dabol", "dabus", "dacin", "dadah", "dadak", "dadal", "dadap", "dadar", "dadek", "dadih", "daduh", "daduk", "daeng", "dagel", "dahak", "daham", "dahan", "dahar", "daing", "dajal", "dakah", "dakar", "dakik", "dakon", "daksa", "dakwa", "dalal", "dalam", "dalem", "dalih", "dalil", "damah", "damai", "damak", "damal", "daman", "damar", "damas", "damat", "damba", "damen", "damik", "danau", "danda", "dandi", "dange", "dansa", "danta", "danuh", "danur", "dapat", "dapra", "dapur", "darab", "darah", "daras", "darat", "darau", "darji", "darma", "darun", "darus", "dasar", "dasin", "dasun", "datar", "datif", "datuk", "datum", "dawai", "dawan", "dawat", "dawet", "dayah", "dayuh", "dayuk", "dayus", "debah", "debak", "debam", "debap", "debar", "debas", "debat", "debet", "debik", "debil", "debit", "debug", "debuk", "debum", "debun", "debup", "debur", "debus", "debut", "decah", "decak", "decap", "deceh", "decit", "decup", "decur", "decus", "decut", "dedah", "dedai", "dedak", "dedal", "dedap", "dedar", "dedas", "dedau", "dedek", "dedel", "deder", "dedes", "degam", "degan", "degap", "degar", "degen", "degil", "deguk", "degum", "degup", "deham", "dehem", "dekah", "dekak", "dekam", "dekan", "dekap", "dekar", "dekat", "dekik", "dekil", "dekor", "deksa", "dekus", "dekut", "delah", "delan", "delap", "delas", "delat", "deler", "delik", "delta", "delut", "demah", "demam", "demap", "demek", "demen", "demes", "demik", "demit", "demon", "denah", "denai", "denak", "denda", "dendi", "dengu", "denim", "denok", "depak", "depan", "depap", "depot", "depun", "depus", "derai", "derak", "deram", "deran", "derap", "deras", "derau", "derek", "derel", "derep", "deres", "deret", "deria", "derik", "deris", "derit", "derji", "derma", "deruk", "derum", "derun", "derup", "derus", "derut", "desah", "desak", "desar", "desau", "desih", "desik", "desil", "desir", "desis", "desit", "desuk", "desup", "desur", "desus", "desut", "detak", "detap", "detar", "detas", "detia", "detik", "detil", "detup", "detus", "dewan", "diang", "diare", "didih", "didik", "didis", "digen", "digit", "digul", "dikau", "dikir", "dikit", "diksa", "diksi", "dikte", "dilak", "dilam", "diler", "dimer", "dinar", "dinas", "dinda", "dingo", "diode", "dipan", "diplo", "dirah", "direk", "diris", "dirus", "disel", "disko", "doang", "dobel", "doble", "dobol", "dodet", "dodok", "dodol", "dodor", "dodos", "dodot", "dogel", "doger", "dogma", "dogol", "dohok", "dohyo", "dokar", "dokoh", "dolan", "dolar", "dolat", "dolim", "dolok", "domba", "domot", "donat", "donor", "donto", "dopis", "dorbi", "dorna", "dosen", "dosin", "dosir", "dosis", "dowel", "dower", "doyak", "doyan", "drama", "druwe", "duafa", "duaja", "duane", "dubes", "duble", "dubuk", "dubur", "duduk", "dudur", "dudus", "dugal", "dugas", "duhai", "dukan", "dukat", "dukuh", "dukun", "dulag", "dulur", "dunah", "dunak", "dungu", "dunia", "dupak", "duplo", "durat", "duren", "durja", "durma", "durna", "durno", "dusin", "dusta", "dusun", "duwet", "duyun", "eboni", "eceng", "edema", "edisi", "efusi", "egois", "ekang", "ekrin", "eksak", "eksem", "ekses", "eksim", "eksin", "eksit", "ekspo", "elang", "elegi", "elemi", "eleng", "eling", "elips", "elite", "eltor", "eluat", "eluen", "elung", "elusi", "email", "emang", "embah", "embak", "embal", "emban", "embar", "embat", "embek", "embel", "ember", "embih", "embik", "embok", "embol", "embuh", "embun", "embus", "embut", "emisi", "emong", "emosi", "empal", "empap", "empar", "empas", "empat", "empek", "emper", "empet", "empik", "empoh", "empok", "empos", "empot", "empuk", "empul", "emrat", "encal", "enceh", "encek", "encel", "encer", "encik", "encim", "encit", "encok", "encot", "endal", "endam", "endap", "endon", "enduk", "endul", "endus", "endut", "eneng", "engah", "engas", "engku", "enjak", "enjal", "enjin", "enjut", "entah", "entak", "entar", "entas", "enten", "entit", "entok", "entot", "entre", "entri", "envoi", "enyah", "enyak", "enzim", "eolit", "eosen", "eosin", "erang", "erata", "erbis", "ercis", "ereng", "ergot", "ering", "erong", "erosi", "erpah", "erpak", "esais", "esens", "eskas", "ester", "etana", "etape", "etika", "etnik", "etnis", "eyang", "faali", "fabel", "faden", "fadil", "fagot", "fajar", "fakih", "fakir", "faksi", "fakta", "falah", "falaj", "falak", "farad", "faraj", "farak", "fardu", "farik", "farji", "fasad", "faset", "fasia", "fasid", "fasih", "fasik", "fasis", "fatah", "fatal", "fatir", "fatom", "fatri", "fatur", "fatwa", "fauna", "felon", "femto", "fenit", "fenol", "feral", "ferum", "feses", "fetis", "fetor", "fetus", "fiber", "fidah", "fider", "figur", "fikih", "fikli", "fiksi", "fikus", "filum", "final", "finir", "finis", "firma", "fisik", "fisis", "fiton", "fitri", "floem", "flora", "fluks", "fluor", "fobia", "fokus", "folio", "fonem", "fonik", "fonis", "fonon", "forte", "forum", "fosil", "foton", "fovea", "frasa", "frase", "freon", "front", "fujur", "fulan", "fulus", "fungi", "furuk", "fusta", "fusuk", "futur", "fyord", "gabah", "gabai", "gabak", "gabas", "gabir", "gabor", "gabro", "gabuk", "gabus", "gacok", "gadai", "gadis", "gadon", "gaduh", "gaduk", "gafar", "gafur", "gagah", "gagai", "gagak", "gagal", "gagap", "gagas", "gagau", "gaguk", "gaham", "gahar", "gaing", "gajah", "gajak", "gajih", "gajul", "gajus", "galah", "galai", "galak", "galan", "galar", "galas", "galat", "galau", "galib", "galih", "galir", "galon", "galuh", "galur", "gamak", "gamal", "gamam", "gaman", "gamat", "gamet", "gamik", "gamis", "gamit", "gamma", "gamuh", "ganal", "ganar", "ganas", "ganco", "gancu", "ganda", "gandi", "gandu", "ganih", "ganja", "ganti", "gapah", "gapai", "gapil", "gapit", "gaple", "gapuk", "garah", "garai", "garam", "garan", "garap", "garau", "garba", "garda", "gardu", "garib", "garis", "garit", "garpu", "garuk", "garut", "garwa", "gasab", "gasak", "gasal", "gasir", "gatal", "gatot", "gatra", "gatuk", "gaung", "gawai", "gawal", "gawan", "gawar", "gawat", "gawir", "gayal", "gayam", "gayat", "gayau", "gayuh", "gayuk", "gayun", "gayut", "gazal", "gebah", "gebar", "geber", "gebok", "gebos", "gebot", "gebuk", "gecar", "gecek", "gecer", "gecul", "gedek", "gedik", "gedok", "gedor", "gegai", "gegap", "gegar", "gegas", "gegat", "gegau", "gegep", "geger", "gegua", "gejah", "gejos", "gelak", "gelam", "gelap", "gelar", "gelas", "gelek", "geler", "geluh", "geluk", "gelup", "gelut", "gemah", "gemak", "gemal", "geman", "gemap", "gemar", "gemas", "gemik", "gemit", "gempa", "gemuk", "gemul", "genah", "genap", "genih", "genis", "genit", "genom", "genre", "genta", "genus", "gepit", "gepok", "gepuk", "gerah", "gerai", "gerak", "geram", "gerat", "gerau", "gerda", "gereh", "gerek", "geret", "gerha", "gerih", "gerik", "gerim", "gerip", "gerit", "germo", "geros", "geruh", "gerun", "gerup", "gerus", "gerut", "gesau", "gesek", "gesel", "geser", "gesit", "getah", "getap", "getar", "getas", "getek", "getik", "getil", "getir", "getis", "getok", "getol", "getuk", "getun", "gibah", "gibas", "gidik", "gigih", "gigil", "gigir", "gigis", "gigit", "gilap", "gilas", "gilik", "gilir", "gincu", "gipsi", "girah", "giral", "giras", "girik", "giris", "gisar", "gisik", "gisil", "gitar", "gites", "gitik", "gitok", "gladi", "glans", "globe", "gobah", "gobak", "gobar", "gobek", "gobet", "gocap", "gocek", "gocoh", "godak", "godam", "godek", "godok", "godot", "gogoh", "gogok", "gogos", "gohok", "gojek", "gokar", "golak", "golbi", "golek", "goler", "golok", "golpi", "gonad", "gonio", "gopek", "gopoh", "gorap", "gorek", "gores", "goroh", "gorok", "gosan", "gosip", "gosok", "gotes", "gotik", "gotri", "gotun", "gowok", "goyah", "goyak", "graha", "grasi", "greha", "griya", "grogi", "guano", "gubah", "gubal", "gubar", "gubel", "gubit", "gubuk", "gudam", "gudeg", "gudik", "gugah", "gugat", "guguh", "guguk", "gugup", "gugur", "gugus", "gulah", "gulai", "gulam", "gulat", "gulir", "gulma", "gulud", "gulut", "gumal", "gumam", "gumba", "gumuk", "gumul", "gumun", "gunci", "gundi", "gundu", "gurab", "gurah", "guram", "gurat", "gurau", "gurdi", "gurem", "gurih", "gurik", "gurit", "gurub", "guruh", "guruk", "gurun", "gurur", "gusah", "gusar", "gusel", "gusti", "gusul", "gusur", "gutik", "gutuk", "guyon", "guyub", "guyur", "habib", "habis", "habuk", "hadam", "hadap", "hadas", "hadat", "hadir", "hadis", "hafal", "hafiz", "haiku", "hajah", "hajar", "hajat", "hajib", "hajim", "hajis", "hakam", "hakim", "halal", "halau", "halba", "halia", "halim", "halma", "halte", "halus", "halwa", "hamal", "hamba", "hamdu", "hamik", "hamil", "hampa", "hamud", "hamun", "hanif", "hantu", "hanya", "hapal", "hapus", "harak", "haram", "harap", "harbi", "harem", "harga", "haris", "harit", "harpa", "harta", "harum", "harus", "hasab", "hasad", "hasai", "hasan", "hasar", "hasib", "hasid", "hasil", "hasta", "hasud", "hasut", "hatif", "hatta", "haula", "hauri", "hawar", "hayat", "heban", "hebat", "heboh", "heiho", "heksa", "hekto", "helah", "helai", "helat", "hemat", "henry", "henti", "hepar", "hepta", "heran", "herba", "hertz", "hewan", "hibah", "hibat", "hibob", "hibuk", "hibur", "hidro", "hidup", "hiena", "hijab", "hijau", "hikam", "hilal", "hilap", "hilau", "hilir", "himar", "himen", "himne", "hinap", "hindi", "hindu", "hiper", "hipui", "hirap", "hirau", "hiruk", "hirup", "hisab", "hisap", "hitam", "hodah", "hokah", "honae", "honji", "honor", "horak", "horas", "horor", "hosti", "hotel", "hubar", "hudai", "hudud", "hufaz", "hujah", "hujaj", "hujan", "hujat", "hujin", "hukah", "hukum", "hulam", "huler", "hulul", "hulur", "human", "humas", "humin", "humor", "humus", "hunus", "hurah", "huria", "huruf", "hutan", "ialah", "ibing", "iblis", "ibrit", "ibung", "ideal", "idiil", "idiom", "idiot", "idola", "idrak", "ifrit", "iftar", "ihdad", "ihram", "ihsan", "ihsas", "ihwal", "ijbar", "ijmak", "ijmal", "iklan", "iklim", "ikrab", "ikram", "ikrar", "ilafi", "ilahi", "ileum", "ilham", "ilian", "iling", "ilusi", "imago", "imaji", "imang", "imani", "imbak", "imbal", "imbas", "imbau", "imbit", "imbuh", "imkan", "imlek", "impak", "impas", "impek", "impit", "impor", "imsak", "inang", "incar", "incer", "incit", "incut", "indah", "indak", "indap", "inden", "indik", "indra", "induk", "infak", "infra", "infus", "ingar", "ingat", "ingau", "inggu", "ingin", "ingus", "injak", "injap", "injil", "insaf", "insan", "insar", "insek", "inses", "inset", "intai", "intan", "intel", "inter", "intil", "intim", "intip", "intra", "intro", "inyik", "inzar", "iodin", "iprit", "ipung", "irama", "iring", "ironi", "irung", "isasi", "isbat", "iseng", "islah", "islam", "israf", "istal", "istan", "istaz", "istri", "itlak", "jabal", "jabar", "jabat", "jabel", "jabir", "jadah", "jadam", "jaduk", "jagal", "jagat", "jagra", "jagur", "jahan", "jahar", "jahat", "jahil", "jahit", "jahul", "jajah", "jajak", "jajal", "jajan", "jajar", "jakal", "jakas", "jaket", "jaksa", "jaksi", "jakun", "jalad", "jalak", "jalal", "jalan", "jalar", "jalil", "jalin", "jalur", "jamah", "jamak", "jamal", "jaman", "jambe", "jambu", "jamik", "jamil", "jamin", "jamis", "jampi", "jamur", "janah", "janat", "janda", "janik", "janin", "janji", "janur", "japan", "japin", "japuk", "jarab", "jarah", "jarak", "jaram", "jaran", "jaras", "jarem", "jarit", "jarum", "jarwa", "jasad", "jasus", "jatah", "jatuh", "jauza", "jawab", "jawat", "jawer", "jawil", "jazam", "jebab", "jebah", "jebai", "jebak", "jebar", "jebat", "jebik", "jebol", "jebor", "jebuh", "jebur", "jedot", "jegal", "jegil", "jejak", "jejal", "jejap", "jejas", "jejer", "jeket", "jeksi", "jelah", "jelai", "jelak", "jelar", "jelas", "jelau", "jelek", "jelih", "jelir", "jelit", "jelma", "jeluk", "jelum", "jelus", "jelut", "jemah", "jemba", "jemur", "jenak", "jenat", "jenis", "jenuh", "jepet", "jepit", "jepun", "jeput", "jerah", "jeram", "jeran", "jerap", "jerat", "jerau", "jerba", "jerih", "jerit", "jeruk", "jerum", "jerun", "jetis", "jewer", "jibti", "jibun", "jicap", "jidal", "jidar", "jidat", "jidor", "jidur", "jihad", "jihat", "jijik", "jijit", "jilah", "jilam", "jilat", "jilid", "jimak", "jimat", "jinak", "jinem", "jingo", "jingu", "jipro", "jipsi", "jirak", "jiran", "jirat", "jirus", "jisim", "jitah", "jitak", "jitok", "jiwat", "jiwit", "joang", "jobak", "jodoh", "jogan", "jogar", "joget", "joglo", "johan", "johar", "jojol", "jolak", "jolek", "jolok", "jolor", "jomlo", "jompo", "joran", "jorok", "josna", "jotos", "joule", "jreng", "juang", "juara", "jubah", "jubel", "jubin", "judek", "judes", "judul", "juhut", "juita", "jujah", "jujai", "jujat", "jujuh", "jujur", "jujut", "jukut", "julab", "julai", "julat", "julir", "juluk", "julur", "jumat", "jumbo", "jumpa", "jumud", "junam", "junta", "junub", "junun", "jurah", "jurai", "juran", "jurik", "juris", "jurit", "juruh", "jurus", "kabab", "kabah", "kabak", "kabar", "kabat", "kabau", "kabel", "kabil", "kabin", "kabir", "kabit", "kaboi", "kabul", "kabur", "kabus", "kabut", "kacak", "kacam", "kacar", "kacau", "kacek", "kacer", "kacip", "kacir", "kacuk", "kadal", "kadam", "kadar", "kadas", "kader", "kades", "kadet", "kadha", "kadim", "kadir", "kadok", "kadru", "kadut", "kafah", "kafan", "kafil", "kafir", "kagak", "kaget", "kagok", "kagum", "kahaf", "kahak", "kahan", "kahar", "kahat", "kahin", "kahwa", "kaing", "kajai", "kakah", "kakak", "kakao", "kakap", "kakar", "kakas", "kakek", "kakok", "kaksa", "kakus", "kalah", "kalai", "kalam", "kalap", "kalar", "kalas", "kalat", "kalau", "kalbi", "kalbu", "kaldu", "kalem", "kalih", "kalio", "kalis", "kalor", "kalui", "kaluk", "kalus", "kalut", "kamal", "kamar", "kamas", "kamat", "kamba", "kambi", "kamil", "kamir", "kamis", "kamit", "kamka", "kampa", "kamus", "kanah", "kanal", "kanan", "kanat", "kanda", "kandi", "kanji", "kanon", "kanta", "kanti", "kanto", "kanun", "kanya", "kapah", "kapai", "kapak", "kapal", "kapan", "kapar", "kapas", "kapat", "kapel", "kaper", "kapir", "kapis", "kapit", "kapok", "kapon", "kappa", "kapri", "kapuk", "kapur", "karam", "karap", "karar", "karas", "karat", "karau", "karel", "karet", "kargo", "karib", "karih", "karil", "karim", "karir", "karma", "karsa", "karst", "karti", "kartu", "karun", "karut", "karya", "kasab", "kasad", "kasah", "kasai", "kasam", "kasap", "kasar", "kasau", "kasdu", "kasep", "kaset", "kasid", "kasih", "kasim", "kasip", "kasir", "kaspe", "kasta", "kasti", "kasui", "kasur", "kasus", "kasut", "kaswi", "katah", "katai", "katak", "katam", "katan", "katar", "katek", "katel", "kater", "kates", "katib", "katik", "katil", "katir", "katok", "katuk", "katul", "katun", "katup", "katut", "kaula", "kauli", "kaung", "kausa", "kaver", "kawah", "kawak", "kawal", "kawan", "kawat", "kawih", "kawin", "kawuk", "kawul", "kayai", "kayak", "kayal", "kayan", "kayau", "kayuh", "kayun", "kebab", "kebah", "kebal", "kebam", "kebas", "kebat", "kebel", "kebin", "kebit", "kebuk", "kebul", "kebun", "kebur", "kebut", "kecai", "kecak", "kecam", "kecap", "kecar", "kecek", "kecer", "kecik", "kecil", "kecit", "kecoh", "kecup", "kecut", "kedah", "kedai", "kedal", "kedam", "kedap", "kedar", "kedau", "kedek", "keder", "kedik", "kedip", "kedok", "kedot", "keduk", "kedul", "kedut", "kehel", "kejai", "kejam", "kejan", "kejap", "kejar", "kejat", "kejen", "kejer", "kejip", "kejur", "kejut", "kekah", "kekal", "kekam", "kekar", "kekas", "kekat", "kekau", "kekeh", "kekek", "kekel", "kekep", "keker", "kekok", "kekol", "kelab", "kelah", "kelai", "kelak", "kelam", "kelar", "kelas", "kelat", "kelek", "kelep", "keler", "kelih", "kelik", "kelim", "kelip", "kelir", "kelis", "kelit", "kelok", "kelom", "kelon", "kelop", "kelor", "kelos", "kelua", "keluh", "kelui", "keluk", "kelun", "kelus", "kelut", "kemah", "kemal", "kemam", "kemas", "kemat", "kembu", "kemih", "kemik", "kemit", "kemon", "kempa", "kempu", "kemul", "kemut", "kenaf", "kenal", "kenan", "kenap", "kenas", "kendi", "kendo", "kenek", "kenem", "kenes", "kenop", "kenor", "kenur", "kenya", "kenyi", "keong", "kepah", "kepai", "kepak", "kepal", "kepam", "kepar", "kepau", "kepek", "kepel", "keper", "kepet", "kepik", "kepil", "kepis", "kepit", "kepoh", "kepok", "kepol", "kepot", "kepuh", "kepuk", "kepul", "kerah", "kerai", "kerak", "keram", "keran", "kerap", "keras", "kerat", "kerau", "kerek", "keren", "kerih", "kerik", "kerip", "keris", "kerit", "kerja", "kermi", "kernu", "keroh", "kerok", "keron", "kerop", "kerot", "keruh", "keruk", "kerul", "kerun", "kerup", "kerut", "kesah", "kesak", "kesal", "kesam", "kesan", "kesat", "kesek", "kesel", "keset", "kesik", "kesip", "kesot", "kesup", "kesut", "ketah", "ketai", "ketak", "ketal", "ketam", "ketan", "ketap", "ketar", "ketat", "ketek", "ketel", "keter", "ketes", "ketik", "ketil", "ketip", "ketis", "ketok", "keton", "ketua", "ketuk", "ketul", "ketun", "ketup", "ketur", "ketus", "kewer", "kewes", "kewuh", "khafi", "khair", "khali", "khasi", "khauf", "khaul", "khiar", "khoja", "khudu", "kiani", "kiara", "kiasi", "kibar", "kibas", "kibik", "kibir", "kibul", "kicau", "kicik", "kicuh", "kicut", "kidab", "kidal", "kidam", "kidar", "kidul", "kijai", "kijil", "kijip", "kikih", "kikik", "kikil", "kikir", "kikis", "kikuk", "kikus", "kilah", "kilai", "kilan", "kilap", "kilar", "kilas", "kilat", "kilau", "kilik", "kilir", "kilus", "kimah", "kimar", "kimia", "kimlo", "kimpa", "kimus", "kinca", "kinja", "kinte", "kiong", "kipai", "kipal", "kipar", "kipas", "kiper", "kirab", "kirai", "kiran", "kirap", "kiras", "kirau", "kirik", "kirim", "kirip", "kiris", "kiruh", "kisah", "kisai", "kisar", "kisas", "kisat", "kisik", "kista", "kisut", "kitab", "kitar", "kitik", "kitin", "kitir", "kitri", "kizib", "klaim", "klien", "klise", "klona", "koala", "koana", "kobah", "kobak", "kobar", "kober", "koboi", "kobok", "kobol", "kobra", "kocak", "kocek", "kocoh", "kocok", "kocor", "kodak", "kodok", "kohir", "kohol", "kohor", "kojah", "kojoh", "kojol", "kojor", "kokah", "kokas", "kokoh", "kokok", "kokol", "kokon", "kokot", "koksa", "kokus", "kolah", "kolak", "kolam", "kolek", "kolik", "kolok", "kolom", "kolon", "kolor", "kolot", "kolum", "koman", "kombo", "komet", "komik", "komis", "komit", "kompi", "konan", "konco", "konde", "konis", "konon", "konte", "konus", "kopah", "kopak", "kopal", "kopek", "kopel", "koper", "kopet", "koplo", "kopok", "kopor", "kopra", "koral", "koran", "kored", "korek", "kores", "koret", "korma", "koroh", "korok", "korps", "korsi", "korum", "korup", "korve", "kosar", "kosek", "kosel", "kosen", "koset", "kotah", "kotai", "kotak", "kotek", "kotes", "kotok", "kotor", "kover", "kowak", "kowan", "kowek", "koyak", "koyam", "koyan", "koyok", "krail", "krama", "krans", "krebo", "kredo", "kreol", "kribo", "krida", "kring", "kriya", "kroco", "kromo", "kroni", "kroto", "kuaci", "kuala", "kuali", "kuang", "kuari", "kuark", "kuart", "kuasa", "kuasi", "kuaya", "kubah", "kubak", "kubik", "kubil", "kubin", "kubis", "kubit", "kubra", "kubti", "kubul", "kubur", "kubus", "kucai", "kucak", "kucam", "kucek", "kucel", "kucil", "kucir", "kucup", "kucur", "kucut", "kudai", "kudap", "kudil", "kudis", "kuduk", "kudup", "kudus", "kueni", "kufur", "kuilu", "kuing", "kuini", "kujur", "kujut", "kukai", "kukuh", "kukuk", "kukul", "kukup", "kukur", "kukus", "kukut", "kulah", "kulai", "kulak", "kulan", "kulat", "kuldi", "kulim", "kulio", "kulir", "kulit", "kulon", "kulot", "kulub", "kuluk", "kulum", "kulup", "kulur", "kulut", "kumai", "kumal", "kuman", "kumat", "kumba", "kumbu", "kumel", "kumis", "kumpi", "kumuh", "kumur", "kumus", "kumut", "kunca", "kunci", "kundi", "kunir", "kunta", "kunut", "kuota", "kupak", "kupas", "kupat", "kupel", "kupil", "kupir", "kupon", "kupui", "kupur", "kurai", "kuran", "kurap", "kuras", "kurau", "kuren", "kuret", "kuria", "kurik", "kurir", "kurma", "kursi", "kurun", "kurus", "kurva", "kusal", "kusam", "kusau", "kusen", "kusik", "kusir", "kusta", "kusti", "kusuf", "kusuk", "kusut", "kutak", "kutat", "kutik", "kutil", "kutin", "kutip", "kutub", "kutuk", "kutut", "kuwuk", "kuwur", "kuyam", "kuyup", "kweni", "labak", "labas", "label", "labil", "labuh", "labun", "labur", "labut", "lacak", "lacur", "lacut", "ladah", "ladam", "ladan", "laden", "lafal", "lagak", "lagam", "lagan", "lagau", "lahab", "lahad", "lahak", "lahan", "lahap", "lahar", "lahat", "lahip", "lahir", "laici", "lajak", "lajat", "lajur", "lakab", "lakak", "lakar", "laken", "lakon", "lakri", "laksa", "lakum", "lakur", "lalah", "lalai", "lalak", "lalap", "lalat", "lalau", "laler", "lalim", "lamar", "lambe", "lambo", "lambu", "lamin", "lampu", "lamun", "lamur", "lanar", "lanau", "lanca", "landa", "langi", "langu", "lanja", "lanji", "lansi", "lanun", "lanus", "laocu", "lapad", "lapah", "lapak", "lapal", "lapar", "lapaz", "lapel", "lapih", "lapik", "lapir", "lapis", "lapor", "lapuk", "lapun", "lapur", "larah", "larai", "larak", "laram", "larap", "laras", "larat", "larau", "largo", "larih", "larik", "laris", "laron", "larut", "larva", "lasah", "lasak", "lasat", "laser", "lasit", "lasuh", "latah", "latak", "latam", "latar", "latas", "laten", "latif", "latih", "latis", "latma", "latuh", "latuk", "latur", "laung", "lauya", "lawah", "lawak", "lawan", "lawar", "lawas", "lawat", "lawon", "layah", "layak", "layam", "layan", "layap", "layar", "layas", "layat", "layer", "layon", "layuh", "layuk", "layur", "layut", "lazat", "lazim", "lebah", "lebai", "lebak", "lebam", "leban", "lebap", "lebar", "lebas", "lebat", "leber", "lebih", "lebuh", "lebuk", "lebum", "lebun", "lebur", "lecah", "lecak", "lecap", "lecat", "leceh", "lecek", "lecer", "lecet", "lecit", "lecok", "lecuh", "lecun", "lecup", "lecur", "lecut", "ledak", "ledek", "ledes", "ledos", "ledre", "leduk", "legah", "legal", "legam", "legap", "legar", "legat", "legek", "legen", "leger", "leges", "legih", "legio", "legit", "legok", "legum", "lehar", "leher", "lejar", "lejas", "lejit", "lejok", "lekah", "lekam", "lekap", "lekar", "lekas", "lekat", "lekir", "lekit", "lekok", "lekuk", "lekum", "lekun", "lelah", "lelai", "lelak", "lelap", "lelar", "lelas", "lelat", "leleh", "lelep", "leler", "leles", "lelet", "lemah", "lemak", "lemas", "lemau", "lembu", "lemes", "lemon", "lemur", "lenan", "lenci", "lenda", "lenga", "lenge", "lenis", "lenja", "lenor", "lensa", "lenso", "lepai", "lepak", "lepap", "lepas", "lepat", "lepau", "lepek", "leper", "lepes", "lepet", "lepih", "lepik", "lepit", "lepoh", "lepok", "lepot", "lepra", "lepuh", "lepuk", "lepur", "lerah", "lerai", "lerak", "leram", "lerap", "leret", "lerik", "lerok", "lerot", "lerum", "lesah", "lesak", "lesan", "lesap", "lesat", "lesau", "lesbi", "leseh", "lesek", "leset", "lesih", "lesir", "lesit", "lesot", "lesus", "lesut", "letai", "letak", "letal", "letek", "leter", "letih", "letik", "letis", "letoi", "letos", "letuk", "letum", "letup", "letur", "letus", "leuca", "level", "lever", "lewah", "lewar", "lewat", "leyeh", "leyot", "lezat", "liana", "liang", "libas", "libat", "libei", "libra", "libur", "licak", "licau", "licik", "licin", "lidah", "lidas", "lidid", "ligan", "ligar", "ligas", "ligat", "ligih", "lihai", "lihat", "likas", "likat", "likir", "likur", "likut", "lilah", "lilan", "lilau", "lilin", "lilit", "liman", "limar", "limas", "limau", "limfa", "limit", "limpa", "limun", "limut", "linan", "linau", "lindu", "linen", "liong", "lipai", "lipan", "lipas", "lipat", "lipid", "lipit", "lipur", "liput", "lirih", "lirik", "liris", "lisah", "lisan", "lisis", "lisol", "lisus", "lisut", "litah", "litak", "liter", "liver", "liwan", "liwat", "liwet", "lobak", "loban", "locok", "locot", "lodan", "lodeh", "lodoh", "logam", "logat", "logis", "lohok", "lohor", "lokal", "lokan", "lokap", "lokek", "loket", "lokia", "lokio", "lokos", "lokus", "lolak", "loloh", "lolos", "lomba", "lomek", "lomot", "lonan", "lonco", "longo", "lonte", "lopak", "lopek", "loper", "lopis", "lopor", "lorah", "loran", "lorat", "lorek", "lorot", "losin", "lotak", "lotek", "lotis", "lotre", "lotus", "loyak", "loyal", "loyar", "luang", "luasa", "luban", "luber", "lubuk", "lubur", "lucah", "lucup", "lucut", "ludah", "ludat", "ludes", "lugas", "lugut", "luhak", "luhur", "luing", "lukah", "lukat", "lukeh", "lukis", "lukut", "lulai", "luluh", "luluk", "lulum", "lulup", "lulur", "lulus", "lulut", "lumai", "lumar", "lumas", "lumat", "lumbu", "lumen", "lumer", "lumuh", "lumur", "lumus", "lumut", "lunak", "lunas", "lunau", "lundi", "lundu", "luner", "lunta", "lupat", "lupuh", "lupuk", "lupus", "luput", "lurah", "lurik", "lurub", "luruh", "lurus", "lurut", "lusin", "lusuh", "lutut", "luwes", "luyak", "luyut", "mabir", "mabuh", "mabuk", "mabul", "macam", "macan", "macat", "macet", "macis", "madah", "madam", "madar", "madat", "madia", "madik", "madya", "mafia", "magel", "magik", "magis", "magma", "magun", "mahah", "mahal", "mahar", "mahdi", "mahia", "mahir", "mahwu", "maido", "majal", "majas", "majer", "majir", "majuh", "majuj", "majun", "makam", "makan", "makao", "makar", "makas", "makda", "maket", "makin", "makna", "makro", "maksi", "makua", "makul", "malah", "malai", "malak", "malam", "malan", "malap", "malar", "malas", "malau", "maleo", "malih", "malik", "malim", "malin", "malis", "malka", "malun", "mamah", "mamai", "mamak", "maman", "mamar", "mamat", "mambo", "mambu", "mamik", "mampu", "mamut", "manah", "manai", "manau", "manci", "manda", "mandi", "mandu", "mangu", "mania", "manik", "manis", "manja", "manol", "manta", "manti", "mantu", "manuk", "manut", "maois", "mapak", "mapan", "marah", "marak", "maras", "marem", "maret", "marga", "maria", "marka", "marus", "marut", "masai", "masak", "masal", "masam", "masap", "maser", "masif", "masih", "masin", "masir", "masoi", "mason", "massa", "masuk", "matan", "matoa", "maton", "matra", "matur", "maula", "maung", "mawar", "mawas", "mawat", "mawin", "mawon", "mawut", "mayam", "mayar", "mayas", "mayat", "mayit", "mayor", "mayur", "mebel", "mecis", "medan", "media", "medik", "medil", "medio", "medis", "medit", "medok", "meduk", "megah", "megak", "megan", "megar", "megat", "meger", "mejam", "mejan", "mejen", "mekap", "mekar", "mekis", "melar", "melas", "melek", "meler", "melik", "melit", "melon", "melor", "melur", "memar", "memek", "memur", "menak", "menat", "mendu", "menep", "menge", "mengi", "menir", "menit", "menor", "menta", "menur", "meong", "mepet", "merah", "merak", "meram", "merat", "merca", "mercu", "merdu", "merek", "merem", "meres", "merih", "merik", "merot", "merta", "merut", "mesan", "mesem", "mesin", "mesiu", "meski", "meson", "mesra", "mesta", "mesti", "mesui", "mesum", "mesut", "metah", "metai", "metal", "meter", "metil", "metro", "mewah", "mewek", "miana", "miang", "midar", "midik", "mihun", "mijil", "mikat", "mikro", "milad", "milik", "milir", "mimik", "mimis", "mimpi", "minat", "mindi", "minim", "minor", "minta", "minum", "minus", "mioma", "mipis", "mirah", "mirai", "mirat", "mirih", "mirik", "mirip", "miris", "misai", "misal", "misan", "misil", "misoa", "misua", "misuh", "mitos", "mitra", "mizab", "mizan", "mobil", "mochi", "mocok", "modal", "modar", "model", "modem", "modin", "modis", "modul", "modus", "mofet", "mogok", "mohon", "mohor", "mojah", "moksa", "molar", "molek", "moler", "moles", "molor", "molos", "momen", "momok", "monel", "mopit", "morak", "moral", "mores", "moril", "moron", "morse", "motel", "motif", "motor", "mozah", "muara", "mubah", "mubut", "mudah", "mudat", "mudik", "mudra", "mudun", "mufti", "muhal", "muhib", "muhit", "mujur", "mukah", "mukim", "mukun", "mulai", "mulas", "mulat", "mules", "mulia", "mulsa", "multi", "muluk", "mulur", "mulus", "mulut", "mumet", "mumuk", "mumur", "mumut", "munci", "mundu", "munib", "muntu", "mupus", "murad", "murah", "murai", "mural", "muram", "muras", "murba", "murca", "murid", "muris", "murka", "murni", "murup", "murus", "musik", "musim", "muson", "musti", "musuh", "mutah", "mutan", "mutih", "muzah", "nadar", "nadim", "nadir", "nafar", "nafas", "nafsi", "nafsu", "nafta", "nagam", "nahak", "nahas", "nahwu", "najam", "najis", "nakal", "nalam", "nalar", "nalih", "nambi", "namun", "nanah", "nanap", "nanar", "nanas", "nanda", "nandu", "nanti", "napal", "napas", "napsi", "napsu", "napuh", "naqal", "naqli", "nasab", "nasal", "nasar", "nasel", "nasib", "nasti", "nasut", "natal", "natar", "natur", "naung", "nayam", "nayap", "nazam", "nazar", "nazim", "nazir", "ndoro", "neala", "neces", "necis", "neger", "negro", "negus", "nekad", "nekat", "nekel", "nenar", "nenas", "nenda", "nenek", "nenen", "nener", "nenes", "netra", "ngeri", "ngilu", "ngoko", "ngoyo", "ngung", "niaga", "nifak", "nifas", "nihil", "nijas", "nikah", "nikel", "nilai", "nilam", "nilau", "nilon", "ninik", "nipah", "nipas", "nipis", "nisab", "nisan", "nisbi", "nista", "nobat", "nodus", "noken", "nomad", "nomer", "nomor", "nonoh", "nonok", "nonol", "nopek", "norak", "norit", "norma", "notes", "novel", "nrima", "nudis", "nugat", "nujum", "nukil", "nunut", "nusyu", "nutan", "nuzul", "nyala", "nyale", "nyali", "nyana", "nyang", "nyata", "nyawa", "nyepi", "nyeri", "nyiri", "nyiru", "nyiur", "nyolo", "nyong", "oasis", "obeng", "objek", "oblak", "obral", "obras", "obrol", "obrus", "obyek", "ofset", "oknum", "oktaf", "oktal", "oktan", "oktet", "oleng", "oleum", "oliva", "ombak", "omega", "omong", "ompol", "omset", "omzet", "onani", "oncat", "oncek", "oncen", "oncer", "oncom", "oncor", "onder", "ondok", "ondos", "ongeh", "ongji", "ongok", "oniks", "onyok", "onyot", "oolit", "opera", "opini", "opium", "oplah", "oplet", "oplos", "opmak", "opsen", "opsin", "opsir", "optik", "optis", "orang", "orasi", "orbit", "order", "oreng", "oreol", "organ", "orgel", "orien", "orion", "orkes", "osean", "ovari", "ovasi", "oyong", "pacai", "pacak", "pacal", "pacar", "pacat", "pacau", "pacek", "pacet", "pacih", "pacik", "pacis", "pacok", "pacuk", "pacul", "padah", "padak", "padam", "padan", "padas", "padat", "padma", "padmi", "padri", "paduk", "pagan", "pagar", "pagas", "pagon", "pagun", "pagut", "paham", "pahar", "pahat", "pahit", "paing", "pajak", "pajan", "pajuh", "pakai", "pakal", "pakan", "pakar", "pakat", "pakau", "pakde", "pakem", "paket", "pakis", "pakma", "paksa", "paksi", "pakta", "pakuh", "pakuk", "pakus", "palai", "palak", "palam", "palar", "palas", "palat", "palau", "paldu", "palem", "palen", "pales", "palet", "palis", "palit", "palka", "palma", "palsu", "paltu", "paluh", "palun", "palut", "pamah", "paman", "pamer", "pamit", "pamor", "pampa", "panah", "panai", "panar", "panas", "panau", "panca", "panci", "panco", "pandu", "panel", "panen", "panik", "panil", "panir", "panja", "panji", "panti", "panto", "panus", "papah", "papak", "papan", "papar", "papas", "papat", "papui", "parab", "paraf", "parah", "parak", "param", "paran", "parap", "paras", "parau", "parga", "paria", "parih", "parik", "paris", "parit", "parji", "parka", "paron", "parsi", "paruh", "parun", "parut", "parwa", "pasah", "pasai", "pasak", "pasal", "pasar", "pasat", "pasca", "paser", "paset", "pasif", "pasik", "pasim", "pasir", "pasit", "pasok", "pasta", "pasti", "pasuk", "patah", "patam", "patar", "patek", "paten", "pater", "patet", "patih", "patik", "patil", "patin", "patio", "patka", "patok", "patos", "patri", "patuh", "patuk", "patut", "pauhi", "paung", "pause", "pawai", "pawak", "payah", "payar", "payau", "payet", "payir", "payon", "peang", "pecah", "pecai", "pecak", "pecal", "pecat", "pecel", "pecok", "pecuk", "pecun", "pecut", "pedah", "pedak", "pedal", "pedar", "pedas", "pedel", "pedet", "pedih", "pedis", "pedok", "pedut", "pegah", "pegal", "pegan", "pegar", "pegas", "pegat", "pegoh", "pegon", "pegun", "pejal", "pejam", "pekah", "pekak", "pekam", "pekan", "pekat", "pekau", "pekik", "pekir", "pekis", "peksi", "pekuk", "pekur", "pelah", "pelak", "pelan", "pelas", "pelat", "peleh", "pelek", "peles", "pelet", "pelik", "pelir", "pelit", "pelog", "peloh", "pelok", "pelor", "peluh", "peluk", "pelus", "pemeo", "penak", "penat", "pencu", "penda", "penes", "penge", "penis", "pensi", "penta", "penuh", "penyu", "pepah", "pepak", "pepas", "pepat", "pepek", "peper", "pepes", "pepet", "perah", "perai", "perak", "peram", "peran", "perap", "peras", "perat", "perca", "perdu", "pereh", "perei", "peres", "pergi", "peria", "perih", "perin", "perit", "perji", "perli", "perlu", "peroi", "peron", "perop", "perot", "peruk", "perum", "perun", "perus", "perut", "pesai", "pesak", "pesam", "pesan", "pesat", "pesek", "peser", "peset", "pesok", "pesta", "pesuk", "pesut", "petah", "petai", "petak", "petal", "petam", "petan", "petas", "petek", "petel", "petes", "petia", "petik", "petir", "petis", "petor", "petuk", "petus", "petut", "pewat", "peyek", "peyot", "piala", "pialu", "piama", "piang", "piano", "piara", "piatu", "picah", "picik", "picis", "picit", "pidit", "piezo", "pigmi", "pihak", "pijah", "pijak", "pijar", "pijat", "pijin", "pijit", "pikap", "pikat", "pikau", "piket", "pikir", "pikul", "pikun", "pikup", "pilah", "pilak", "pilar", "pilas", "pilau", "pileh", "pilek", "pilih", "pilin", "pilis", "pilon", "pilot", "pilus", "pinak", "pinar", "pinas", "pinda", "pines", "pinga", "pinis", "pinta", "pintu", "pinus", "piong", "pipet", "pipih", "pipil", "pipis", "pipit", "pirai", "pirau", "pirik", "pirit", "pirsa", "piruk", "pirus", "pisah", "pisak", "pisau", "pises", "pisik", "pisin", "pisit", "pisuh", "pitah", "pitak", "pitam", "pitar", "pitih", "pitis", "piton", "pitot", "pitut", "piung", "pivot", "piyik", "plang", "plano", "plato", "plaza", "pleno", "plong", "pluto", "poces", "pocok", "podak", "pohon", "poise", "pojok", "pokah", "poker", "poket", "pokok", "pokta", "polah", "polan", "polen", "poler", "poles", "polet", "polio", "polip", "polis", "polka", "polok", "polos", "pompa", "ponco", "ponil", "ponok", "ponor", "popok", "popor", "porah", "porno", "porok", "poros", "porot", "porsi", "porta", "porto", "poser", "potas", "potel", "potia", "potol", "praba", "prabu", "prada", "praja", "pramu", "prasi", "premi", "prima", "prive", "prosa", "proto", "psalm", "psike", "puaka", "puasa", "puber", "pucat", "pucik", "pucuk", "pudar", "pudat", "pudel", "puder", "pudur", "pugak", "pugar", "pugas", "puguh", "puing", "puisi", "pujuk", "pujur", "pujut", "pukah", "pukal", "pukas", "pukat", "pukau", "pukul", "pulai", "pulan", "pulas", "pulau", "pulen", "pules", "pulih", "pulik", "pulpa", "pulsa", "puluh", "pulun", "pulut", "punah", "punai", "punar", "punat", "punca", "punci", "pundi", "punia", "punti", "punuk", "punya", "pupil", "pupuh", "pupuk", "pupur", "pupus", "puput", "purba", "purik", "puris", "purna", "puruk", "purun", "purus", "purut", "purwa", "pusak", "pusar", "pusat", "puser", "puspa", "pusta", "pusut", "putar", "putat", "puter", "putih", "putik", "putra", "putri", "putus", "putut", "puyan", "puyer", "puyuh", "qasar", "qudsi", "quran", "rabak", "raban", "rabas", "rabat", "rabet", "rabik", "rabit", "rabuk", "rabun", "rabut", "racak", "racau", "racik", "racuh", "racun", "radah", "radai", "radak", "radar", "radas", "raden", "rades", "radif", "radin", "radio", "radis", "radon", "rafia", "rafik", "ragam", "ragas", "ragib", "ragil", "raguk", "ragum", "ragut", "rahak", "rahap", "rahat", "rahib", "rahim", "rajab", "rajah", "rajam", "rajim", "rajin", "rajok", "rajuk", "rajul", "rajut", "rakah", "rakap", "rakat", "raket", "rakis", "rakit", "rakna", "raksa", "raksi", "rakuk", "rakus", "rakut", "rakyu", "ralat", "ralip", "ramah", "ramai", "ramal", "rambu", "rames", "ramin", "rampa", "ramus", "ranah", "ranai", "ranap", "ranca", "rancu", "randa", "randi", "randu", "rangu", "ranji", "ranju", "rante", "ranti", "ranum", "rapah", "rapai", "rapak", "rapal", "rapat", "rapel", "rapik", "rapor", "rapuh", "rapun", "rapus", "rarai", "rarak", "raras", "rasai", "rasam", "rasan", "rasau", "rasem", "rasia", "rasio", "rasuk", "rasul", "ratah", "ratap", "ratas", "ratib", "ratna", "ratus", "raung", "rawah", "rawai", "rawak", "rawan", "rawat", "rawin", "rawit", "rawon", "rayah", "rayan", "rayap", "rayau", "rayon", "rayun", "razia", "rebab", "rebah", "rebak", "reban", "rebas", "rebat", "rebeh", "rebek", "rebes", "rebet", "rebok", "rebon", "rebuk", "rebus", "rebut", "recak", "receh", "recet", "recik", "recok", "recup", "redah", "redam", "redap", "redas", "redih", "redik", "redum", "redup", "redut", "regah", "regan", "regas", "regat", "regel", "regen", "reges", "regim", "regio", "regol", "reguk", "regup", "rehab", "rehal", "rehat", "rejab", "rejah", "rejam", "rejan", "rejeh", "rejim", "rejuk", "rekah", "rekal", "rekam", "rekan", "rekap", "rekat", "reken", "rekes", "rekor", "reksa", "rekto", "relai", "relap", "relas", "relau", "relik", "reluk", "remah", "remai", "remak", "remas", "remeh", "remet", "remis", "remoh", "rempa", "remuk", "renah", "renai", "renal", "renda", "renek", "renes", "renik", "renin", "renta", "rente", "renti", "repah", "repak", "repas", "repek", "repes", "repet", "repih", "repis", "repot", "repuh", "repui", "reput", "rerak", "reras", "rerot", "resah", "resak", "resam", "resan", "resap", "resek", "resep", "reses", "resik", "resin", "resmi", "resor", "restu", "retak", "retal", "retas", "retek", "retet", "retih", "retok", "retro", "retur", "retus", "reuni", "rewak", "rewan", "rewel", "rewet", "reyal", "reyot", "rezim", "riang", "ribat", "riben", "ribut", "ricau", "ricik", "ricis", "ricuh", "ridan", "ridip", "rigai", "rihal", "rihat", "rijal", "rikuh", "rilis", "rimah", "rimas", "rimba", "rimbu", "rimih", "rimis", "rimpi", "rinai", "rinci", "rincu", "rindu", "ripit", "ripuh", "ripuk", "ririt", "risak", "risau", "riset", "risih", "risik", "risit", "ritma", "ritme", "ritul", "ritus", "riung", "rival", "riwan", "robek", "roboh", "robok", "robot", "rocet", "rodan", "rodat", "rodok", "rogoh", "rogok", "rogol", "rojol", "roker", "roket", "rokok", "rolet", "roman", "romet", "romok", "rompi", "ronce", "ronda", "ronde", "rondo", "roneo", "ronta", "rorod", "roset", "rosin", "rosok", "rosot", "rotan", "rotok", "rowot", "royak", "royal", "royan", "royer", "ruang", "ruaya", "rubah", "rubai", "ruban", "rubel", "rubik", "rubin", "rubuh", "rucah", "rudah", "rudal", "rudin", "rudus", "rugbi", "rugul", "ruing", "rujah", "rujak", "rujuk", "rukam", "rukuh", "rukuk", "rukun", "rumah", "rumal", "rumba", "rumbu", "rumen", "rumin", "rumit", "rumor", "rumpi", "rumuk", "rumus", "rungu", "runti", "runut", "rupee", "ruruh", "rurut", "rusak", "rusuh", "rusuk", "rutab", "rutin", "rutuk", "rutup", "ruwah", "ruwat", "ruwet", "ruyak", "ruyap", "ruyat", "ruyup", "sabah", "sabak", "saban", "sabar", "sabas", "sabat", "sabda", "sabel", "saben", "sabet", "sabil", "sabit", "sabot", "sabtu", "sabuk", "sabun", "sabur", "sabut", "sadah", "sadai", "sadak", "sadap", "sadar", "sadau", "sadel", "sadik", "sadin", "sadir", "sadis", "sadur", "safar", "safih", "safir", "sagai", "sagar", "sagon", "sagun", "sagur", "saham", "sahan", "sahap", "sahda", "sahdu", "sahib", "sahid", "sahih", "sahir", "sahur", "sahut", "saidi", "sailo", "saing", "sains", "sajak", "sajen", "sakai", "sakal", "sakap", "sakar", "sakat", "sakhi", "sakit", "saksi", "sakti", "salaf", "salah", "salai", "salak", "salam", "salap", "salar", "salat", "saldo", "saleh", "salem", "salep", "salib", "salih", "salim", "salin", "salip", "salir", "salju", "salon", "salto", "saluk", "salur", "salut", "salvo", "samad", "samak", "saman", "samar", "samas", "samba", "sambi", "samin", "samir", "sampa", "sampi", "sampo", "sampu", "samsu", "samuh", "samum", "samun", "sanad", "sanak", "sanat", "sanca", "sanda", "sandi", "sando", "sanga", "sangu", "sanik", "santa", "santo", "santu", "sanya", "sapai", "sapar", "sapat", "sapau", "sapih", "sapir", "sapit", "sapta", "saput", "saraf", "sarak", "saran", "sarap", "sarat", "sarau", "sareh", "saren", "sarik", "sarip", "sarit", "sarju", "sarok", "saron", "saruk", "sarun", "sarut", "sarwa", "sasak", "sasan", "sasap", "sasar", "sasau", "sasis", "satai", "satak", "satar", "satih", "satin", "satir", "satwa", "sauna", "saung", "sawab", "sawah", "sawai", "sawan", "sawar", "sawat", "sawer", "sawit", "sawut", "sayak", "sayap", "sayat", "sayet", "sayib", "sayid", "sayup", "sayur", "sebab", "sebai", "sebak", "sebal", "sebam", "sebar", "sebat", "sebel", "sebet", "sebih", "sebik", "sebit", "sebuk", "sebum", "sebun", "sebut", "sedah", "sedak", "sedam", "sedan", "sedap", "sedat", "sedia", "sedih", "sedot", "seduh", "sedut", "segah", "segak", "segan", "segar", "segeh", "segel", "sehat", "sejak", "sejat", "sejuk", "sekah", "sekak", "sekal", "sekam", "sekan", "sekap", "sekar", "sekat", "sekin", "sekip", "sekoi", "sekon", "sekop", "seksi", "sekte", "sekui", "sekul", "selai", "selak", "selam", "selan", "selap", "selar", "selat", "seleo", "selia", "selip", "selir", "selit", "seliu", "selok", "selom", "selon", "selop", "selot", "selui", "seluk", "selup", "selut", "semah", "semai", "semak", "seman", "semat", "semek", "semen", "semir", "semok", "semua", "semur", "semut", "senak", "senam", "senar", "senat", "senda", "sendi", "sendu", "senen", "senil", "senin", "senja", "senta", "senti", "senuh", "senuk", "senur", "sepah", "sepai", "sepak", "sepal", "sepam", "sepan", "sepat", "sepel", "sepen", "sepet", "sepih", "sepir", "sepit", "sepoi", "sepon", "sepuh", "sepui", "sepuk", "sepul", "sepur", "seput", "serah", "serai", "serak", "seram", "seran", "serap", "serat", "serau", "serba", "serbi", "serbu", "serdi", "sereh", "serep", "seret", "serik", "serit", "serok", "serot", "serpa", "serse", "sersi", "serta", "sertu", "seruh", "serui", "seruk", "serul", "serum", "serun", "serut", "sesah", "sesai", "sesak", "sesal", "sesam", "sesap", "sesar", "sesat", "seser", "sesil", "setai", "setal", "setan", "setat", "setek", "setel", "setem", "seten", "seter", "setia", "setik", "setin", "setip", "setir", "setom", "seton", "setop", "setor", "setra", "setti", "setua", "setum", "setup", "sewah", "sewal", "sewar", "sewat", "sewot", "siaga", "siang", "siapa", "sibak", "sibar", "sibir", "sibuk", "sibur", "sidai", "sidat", "sidik", "siduk", "sifat", "sifer", "sifon", "sigai", "sigak", "sigap", "sigar", "siger", "sigma", "sigot", "sihir", "sijil", "sikah", "sikai", "sikak", "sikap", "sikas", "sikat", "sikik", "sikin", "sikit", "siksa", "sikut", "silaf", "silah", "silam", "silap", "silat", "silau", "silet", "silih", "silik", "silir", "silok", "siluk", "simak", "sinar", "sinau", "sinda", "singa", "sinis", "sinom", "sinse", "sinus", "sinyo", "sioca", "siong", "sipai", "sipat", "sipil", "sipir", "sipit", "sipoa", "siput", "sirah", "siram", "sirap", "sirat", "sirep", "sirib", "sirih", "sirik", "sirip", "sirke", "sirna", "sirop", "sirup", "sirus", "sisal", "sisih", "sisik", "sisip", "sisir", "sista", "siswa", "siswi", "sitak", "sitar", "sitat", "siter", "sitir", "situn", "situs", "siung", "siwar", "siwer", "skafa", "skala", "skema", "skene", "skors", "skrin", "skrip", "skuas", "skuat", "slang", "sling", "soang", "soban", "sobat", "sobek", "sobok", "sodet", "sodok", "sodor", "sofis", "sogan", "sogok", "sohar", "sohib", "sohor", "sohun", "sojah", "sokah", "soker", "soket", "sokom", "solah", "solak", "solar", "solat", "solek", "solid", "solis", "solok", "solot", "solum", "somah", "sonar", "sonik", "sonor", "sopak", "sopan", "sopek", "sopir", "sorak", "sorek", "soren", "sorga", "sorog", "sorok", "sorot", "sosio", "sosis", "sosoh", "sosok", "sosor", "sotoh", "sotor", "sowan", "soyak", "spasi", "spion", "spons", "spora", "sport", "sriti", "start", "stasi", "steik", "stela", "stema", "steno", "stepa", "stori", "stres", "strip", "studi", "stuko", "stupa", "suaka", "suami", "suang", "suara", "suari", "suasa", "suatu", "subak", "subal", "subam", "suban", "subuh", "subur", "sudah", "sudet", "sudip", "sudra", "suduk", "sudur", "sudut", "sufah", "sufal", "sugar", "sugih", "sugra", "suguh", "sugul", "sugun", "suhad", "suhuf", "suhun", "sujen", "sujud", "sukan", "sukar", "sukat", "suket", "sukma", "sukun", "sukur", "sulah", "sulam", "sulap", "sulbi", "sulih", "sulit", "sulub", "suluh", "suluk", "sulup", "sulur", "sulut", "sumah", "sumba", "sumbi", "sumbu", "sumeh", "sumir", "sumur", "sunah", "sunam", "sunan", "sunat", "sungu", "sunti", "sunyi", "supai", "supel", "super", "supir", "supit", "supra", "surah", "surai", "suram", "surat", "surau", "suren", "surga", "surih", "suris", "suruh", "suruk", "surup", "surut", "surya", "susah", "susuh", "susuk", "susul", "susun", "susup", "susur", "susut", "sutan", "suten", "sutil", "sutra", "suwir", "swike", "syair", "syaka", "syala", "syeir", "syekh", "syeti", "syiar", "syiwa", "syura", "taala", "tabah", "tabak", "tabal", "taban", "tabel", "tabia", "tabib", "tabii", "tabik", "tabir", "tablo", "tabok", "tabuh", "tabun", "tabur", "tabut", "tadah", "tadir", "tagak", "tagal", "tagan", "tagar", "tageh", "tagih", "tagut", "tahak", "tahan", "tahap", "tahar", "tahil", "tahir", "tahta", "tahun", "taiga", "taiko", "taiso", "tajak", "tajam", "tajau", "tajen", "tajin", "tajuk", "tajur", "takah", "takak", "takal", "takar", "takat", "takeh", "takel", "takik", "takir", "takma", "takol", "taksa", "taksi", "takuh", "takuk", "takur", "takut", "takwa", "talah", "talai", "talak", "talam", "talar", "talas", "talek", "talen", "talib", "talon", "talun", "talut", "tamak", "tamam", "taman", "tamar", "tamat", "tambi", "tambo", "tampi", "tamuk", "tanah", "tanai", "tanak", "tanam", "tanau", "tanda", "tandu", "tango", "tania", "tanin", "tanji", "tanju", "tanpa", "tansi", "tante", "tanti", "tanur", "tanya", "taoci", "taoco", "taoge", "taoke", "taosi", "tapah", "tapai", "tapak", "tapal", "tapih", "tapin", "tapir", "tapis", "taptu", "tapui", "tapuk", "tapus", "taraf", "tarah", "tarak", "taram", "tarap", "taras", "tarif", "tarik", "tarip", "taris", "tarra", "tarub", "taruh", "taruk", "tarum", "tarup", "tasai", "tasak", "tasel", "tasik", "tatah", "tatai", "tatak", "tatal", "tatap", "tatar", "tatih", "tauco", "tauge", "tauke", "taung", "tawaf", "tawak", "tawan", "tawar", "tawas", "tawes", "tawon", "tawur", "tayib", "tayub", "tayum", "tazir", "tebah", "tebak", "tebal", "teban", "tebar", "tebas", "tebat", "tebok", "tebon", "tebuk", "tebus", "tedak", "tedas", "teduh", "tegah", "tegak", "tegal", "tegap", "tegar", "tegas", "tegel", "tegil", "tegor", "teguh", "teguk", "tegun", "tegur", "tekad", "tekah", "tekak", "tekam", "tekan", "tekap", "tekar", "tekat", "tekek", "tekel", "teken", "teker", "tekik", "tekis", "tekoh", "tekor", "tekpi", "tekte", "tekua", "tekuk", "tekun", "tekup", "tekur", "telah", "telak", "telan", "telap", "telas", "telat", "telau", "teler", "teles", "telik", "telop", "telor", "teluh", "teluk", "telur", "telus", "telut", "temak", "teman", "temas", "tembu", "temeh", "temin", "tempa", "tempe", "tempo", "tenak", "tenam", "tenar", "tenat", "tenda", "tendo", "tener", "tengu", "tenis", "tenok", "tenor", "tensi", "tentu", "tenuk", "tenun", "teori", "tepak", "tepam", "tepas", "tepat", "tepeh", "tepek", "tepet", "tepik", "tepis", "tepok", "tepos", "tepuk", "tepus", "terak", "teral", "teram", "teran", "terap", "teras", "terau", "terem", "teres", "teret", "terik", "terin", "terka", "terna", "terok", "teror", "terpa", "teruk", "terum", "terup", "terus", "tesis", "testa", "tetak", "tetal", "tetap", "tetar", "tetas", "teteh", "tetek", "teter", "tetes", "tetra", "tetua", "tewas", "teyan", "tiada", "tiaga", "tiang", "tiara", "tiban", "tidak", "tidur", "tifus", "tigas", "tihul", "tijak", "tikai", "tikam", "tikar", "tikas", "tiket", "tikim", "tikpi", "tikus", "tilam", "tilan", "tilap", "tilas", "tilde", "tilik", "timah", "timba", "timbo", "timol", "timpa", "timun", "timur", "timus", "tiner", "tingi", "tinja", "tinju", "tinta", "tipak", "tipar", "tipes", "tipis", "tipus", "tirah", "tirai", "tiram", "tiran", "tiras", "tirau", "tiris", "tirta", "tirus", "tisik", "titah", "titar", "titel", "titer", "titih", "titik", "titip", "titir", "titis", "titit", "tiung", "tiwah", "tiwul", "tobak", "tobat", "toboh", "todak", "tofan", "togan", "togel", "togok", "tohok", "tohor", "tokak", "tokek", "tokoh", "tokok", "tolak", "tolan", "tolap", "toleh", "tolok", "tolol", "toman", "tomat", "tonem", "tonik", "tonil", "tonit", "tonus", "topah", "topan", "topas", "topek", "topes", "topik", "torak", "toreh", "torek", "tores", "torne", "torsi", "torso", "torus", "total", "totau", "totem", "totok", "totol", "towaf", "towel", "toyah", "toyoh", "toyor", "trafo", "trama", "trans", "trema", "trica", "triko", "trips", "trofi", "troli", "tropi", "trusa", "tsuru", "tuala", "tuang", "tuban", "tubin", "tubir", "tubuh", "tudak", "tuduh", "tufah", "tugal", "tugar", "tugas", "tugur", "tuhan", "tuhur", "tuidi", "tujah", "tujuh", "tujul", "tukai", "tukak", "tukal", "tukam", "tukar", "tukas", "tukik", "tukil", "tukuk", "tukul", "tukun", "tukup", "tulah", "tulak", "tular", "tulat", "tulen", "tulis", "tulup", "tulus", "tuman", "tumbu", "tumis", "tumit", "tumor", "tumpu", "tumus", "tunai", "tunak", "tunam", "tunan", "tunas", "tunda", "tungu", "tunik", "tupai", "turap", "turas", "turba", "turis", "turne", "tursi", "turun", "turus", "turut", "tusam", "tusir", "tusuk", "tuter", "tutor", "tutuh", "tutuk", "tutul", "tutup", "tutur", "tutut", "tuyuk", "tuyul", "uanda", "ubang", "ubaya", "ubung", "udang", "udani", "udara", "udema", "udeng", "ujana", "ujang", "ujung", "uktab", "ulama", "ulang", "uling", "ultra", "ulung", "umara", "umbai", "umban", "umbar", "umbin", "umbra", "umbuk", "umbul", "umbur", "umbut", "umpak", "umpan", "umpat", "umpet", "umpil", "umpuk", "umpun", "umput", "umrah", "umrat", "uncit", "uncue", "uncui", "undak", "undan", "unduh", "undur", "ungam", "ungar", "ungka", "ungsi", "ungti", "uniat", "union", "unjam", "unjuk", "unjun", "unjur", "unjut", "unsur", "untai", "untal", "until", "untir", "untuk", "untun", "untut", "unyai", "upaya", "upeti", "urang", "urban", "urgen", "urian", "urine", "uring", "urita", "urung", "usada", "usaha", "usali", "usang", "uskup", "usrek", "ustad", "ustaz", "usung", "uswah", "utama", "utang", "utara", "uvula", "uyung", "uzlah", "vakum", "valas", "valid", "valis", "varia", "vasal", "velar", "velum", "venal", "venus", "verba", "versi", "verso", "vespa", "veste", "veter", "video", "vigia", "vinil", "viola", "virga", "virgo", "virus", "visnu", "vista", "visum", "visus", "vital", "vodka", "vokal", "vonis", "votum", "vulva", "wabah", "wadah", "wadak", "wadal", "wadam", "wadar", "wadas", "wadat", "wader", "waduh", "waduk", "wafak", "wafat", "wagon", "wahah", "wahai", "waham", "wahib", "wahid", "wahon", "wahyu", "waima", "wajah", "wajan", "wajar", "wajib", "wajik", "wajit", "wakaf", "wakil", "waktu", "wakun", "walad", "walah", "walak", "walat", "walau", "waleh", "walet", "waluh", "wanda", "wangi", "waqaf", "warak", "waras", "wardi", "warga", "waria", "warid", "warik", "waris", "warna", "warok", "warsa", "warta", "wasak", "wasal", "wasir", "wasit", "watak", "watan", "watas", "waton", "wawas", "wayuh", "wazir", "wedam", "wedar", "wedel", "weduk", "wekel", "weker", "welas", "welit", "welut", "werak", "werda", "werek", "werit", "werst", "wesel", "weton", "wijen", "wijik", "wilis", "windu", "wirid", "wiron", "wisal", "wisik", "wiski", "wisma", "wisnu", "witir", "wodka", "wrang", "wreda", "wregu", "wuduk", "wujud", "wuker", "wukuf", "wulan", "wungu", "wutuh", "xenia", "xenon", "xilem", "xilol", "yahud", "yahwe", "yaitu", "yakin", "yakis", "yakni", "yaksa", "yakun", "yakut", "yasan", "yasti", "yatim", "yogia", "yokal", "yunda", "yunta", "yuris", "zabad", "zabah", "zabib", "zabur", "zadah", "zahid", "zahir", "zakar", "zakat", "zakum", "zalim", "zalir", "zaman", "zamin", "zarah", "zatua", "zawal", "zebra", "zelot", "zenit", "zigot", "zikir", "zinah", "zirah", "ziter", "zohal", "zohor", "zuama", "zuhud", "zuhur"]
      , je = "present"
      , xe = "correct"
      , Se = "absent"
      , _e = {
        unknown: 0,
        absent: 1,
        present: 2,
        correct: 3
    };
    function Ee(a, e) {
        var t = {};
        return a.forEach((function(a, n) {
            if (e[n])
                for (var i = 0; i < a.length; i++) {
                    var r = a[i]
                      , o = e[n][i]
                      , s = t[r] || "unknown";
                    _e[o] > _e[s] && (t[r] = o)
                }
        }
        )),
        t
    }
    function ze(a) {
        var e = ["th", "st", "nd", "rd"]
          , t = a % 100;
        return a + (e[(t - 20) % 10] || e[t] || e[0])
    }
    var Ae = new Date(2022,11,11,0,0,0,0);
    function Te(a, e) {
        var t = new Date(a)
          , n = new Date(e).setHours(0, 0, 0, 0) - t.setHours(0, 0, 0, 0);
        return Math.round(n / 864e5)
    }
    function Ce(a) {
        return Te(Ae, a)
    }
    var Ie = "abcdefghijklmnopqrstuvwxyz"
      , Le = [].concat(h(Ie.split("").slice(13)), h(Ie.split("").slice(0, 13)));
    function Me(a) {
        for (var e = "", t = 0; t < a.length; t++) {
            var n = Ie.indexOf(a[t]);
            e += n >= 0 ? Le[n] : "_"
        }
        return e
    }
    var Oe = "statistics"
      , Re = "fail"
      , qe = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: r({
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        }, Re, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0
    };
    function Pe() {
        var a = window.localStorage.getItem(Oe) || JSON.stringify(qe);
        return JSON.parse(a)
    }
    function Ne(a) {
        var e = a.isWin
          , t = a.isStreak
          , n = a.numGuesses
          , i = Pe();
        e ? (i.guesses[n] += 1,
        t ? i.currentStreak += 1 : i.currentStreak = 1) : (i.currentStreak = 0,
        i.guesses.fail += 1),
        i.maxStreak = Math.max(i.currentStreak, i.maxStreak),
        i.gamesPlayed += 1,
        i.gamesWon += e ? 1 : 0,
        i.winPercentage = Math.round(i.gamesWon / i.gamesPlayed * 100),
        i.averageGuesses = Math.round(Object.entries(i.guesses).reduce((function(a, e) {
            var t = function(a, e) {
                return function(a) {
                    if (Array.isArray(a))
                        return a
                }(a) || function(a, e) {
                    var t = null == a ? null : "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
                    if (null != t) {
                        var n, i, r = [], o = !0, s = !1;
                        try {
                            for (t = t.call(a); !(o = (n = t.next()).done) && (r.push(n.value),
                            !e || r.length !== e); o = !0)
                                ;
                        } catch (a) {
                            s = !0,
                            i = a
                        } finally {
                            try {
                                o || null == t.return || t.return()
                            } finally {
                                if (s)
                                    throw i
                            }
                        }
                        return r
                    }
                }(a, e) || b(a, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }(e, 2)
              , n = t[0]
              , i = t[1];
            return n !== Re ? a += n * i : a
        }
        ), 0) / i.gamesWon),
        function(a) {
            window.localStorage.setItem(Oe, JSON.stringify(a))
        }(i)
    }
    var $e = document.createElement("template");
    $e.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4e3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 95%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         KATLA\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div style="text-align:center;color: var(--color-tone-1);">WORDLE INDONESIA</div><div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
    var He = document.createElement("template");
    He.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Be = "IN_PROGRESS"
      , De = "WIN"
      , Ge = "FAIL"
      , Fe = ["Tidak mungkin!", "Juara!", "Bagus!", "Pintar", "Bisa", "Beruntung..."]
      , Ke = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            t(this, n),
            r(c(a = e.call(this)), "tileIndex", 0),
            r(c(a), "rowIndex", 0),
            r(c(a), "solution", void 0),
            r(c(a), "boardState", void 0),
            r(c(a), "evaluations", void 0),
            r(c(a), "canInput", !0),
            r(c(a), "gameStatus", Be),
            r(c(a), "letterEvaluations", {}),
            r(c(a), "$board", void 0),
            r(c(a), "$keyboard", void 0),
            r(c(a), "$game", void 0),
            r(c(a), "today", void 0),
            r(c(a), "lastPlayedTs", void 0),
            r(c(a), "lastCompletedTs", void 0),
            r(c(a), "hardMode", void 0),
            r(c(a), "dayOffset", void 0),
            a.attachShadow({
                mode: "open"
            }),
            a.today = new Date;
            var i = pe();
            return a.lastPlayedTs = i.lastPlayedTs,
            !a.lastPlayedTs || Te(new Date(a.lastPlayedTs), a.today) >= 1 ? (a.boardState = new Array(6).fill(""),
            a.evaluations = new Array(6).fill(null),
            a.solution = function(a) {
                var e;
                return e = Ce(a) % ye.length,
                ye[e]
            }(a.today),
            a.dayOffset = Ce(a.today),
            a.lastCompletedTs = i.lastCompletedTs,
            a.hardMode = i.hardMode,
            a.restoringFromLocalStorage = !1,
            me({
                rowIndex: a.rowIndex,
                boardState: a.boardState,
                evaluations: a.evaluations,
                solution: a.solution,
                gameStatus: a.gameStatus
            }),
            ve("event", "level_start", {
                level_name: Me(a.solution)
            })) : (a.boardState = i.boardState,
            a.evaluations = i.evaluations,
            a.rowIndex = i.rowIndex,
            a.solution = i.solution,
            a.dayOffset = Ce(a.today),
            a.letterEvaluations = Ee(a.boardState, a.evaluations),
            a.gameStatus = i.gameStatus,
            a.lastCompletedTs = i.lastCompletedTs,
            a.hardMode = i.hardMode,
            a.gameStatus !== Be && (a.canInput = !1),
            a.restoringFromLocalStorage = !0),
            a
        }
        return i(n, [{
            key: "evaluateRow",
            value: function() {
                if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                    var a, e = this.$board.querySelectorAll("game-row")[this.rowIndex], t = this.boardState[this.rowIndex];
                    if (a = t,
                    !we.includes(a) && !ye.includes(a))
                        return e.setAttribute("invalid", ""),
                        void this.addToast("Kata tidak valid");
                    if (this.hardMode) {
                        var n = function(a, e, t) {
                            if (!a || !e || !t)
                                return {
                                    validGuess: !0
                                };
                            for (var n = 0; n < t.length; n++)
                                if (t[n] === xe && a[n] !== e[n])
                                    return {
                                        validGuess: !1,
                                        errorMessage: "".concat(ze(n + 1), " letter must be ").concat(e[n].toUpperCase())
                                    };
                            for (var i = {}, r = 0; r < t.length; r++)
                                [xe, je].includes(t[r]) && (i[e[r]] ? i[e[r]] += 1 : i[e[r]] = 1);
                            var o = a.split("").reduce((function(a, e) {
                                return a[e] ? a[e] += 1 : a[e] = 1,
                                a
                            }
                            ), {});
                            for (var s in i)
                                if ((o[s] || 0) < i[s])
                                    return {
                                        validGuess: !1,
                                        errorMessage: "Guess must contain ".concat(s.toUpperCase())
                                    };
                            return {
                                validGuess: !0
                            }
                        }(t, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1])
                          , i = n.validGuess
                          , r = n.errorMessage;
                        if (!i)
                            return e.setAttribute("invalid", ""),
                            void this.addToast(r || "Not valid in hard mode")
                    }
                    var o = function(a, e) {
                        for (var t = Array(e.length).fill(Se), n = Array(e.length).fill(!0), i = Array(e.length).fill(!0), r = 0; r < a.length; r++)
                            a[r] === e[r] && i[r] && (t[r] = xe,
                            n[r] = !1,
                            i[r] = !1);
                        for (var o = 0; o < a.length; o++) {
                            var s = a[o];
                            if (n[o])
                                for (var u = 0; u < e.length; u++) {
                                    var l = e[u];
                                    if (i[u] && s === l) {
                                        t[o] = je,
                                        i[u] = !1;
                                        break
                                    }
                                }
                        }
                        return t
                    }(t, this.solution);
                    this.evaluations[this.rowIndex] = o,
                    this.letterEvaluations = Ee(this.boardState, this.evaluations),
                    e.evaluation = this.evaluations[this.rowIndex],
                    this.rowIndex += 1;
                    var s = this.rowIndex >= 6
                      , u = o.every((function(a) {
                        return "correct" === a
                    }
                    ));
                    (s || u) && (Ne({
                        isWin: u,
                        isStreak: !!this.lastCompletedTs && 1 === Te(new Date(this.lastCompletedTs), new Date),
                        numGuesses: this.rowIndex
                    }),
                    me({
                        lastCompletedTs: Date.now()
                    }),
                    this.gameStatus = u ? De : Ge,
                    ve("event", "level_end", {
                        level_name: Me(this.solution),
                        num_guesses: this.rowIndex,
                        success: u
                    })),
                    this.tileIndex = 0,
                    this.canInput = !1,
                    me({
                        rowIndex: this.rowIndex,
                        boardState: this.boardState,
                        evaluations: this.evaluations,
                        solution: this.solution,
                        gameStatus: this.gameStatus,
                        lastPlayedTs: Date.now()
                    })
                }
            }
        }, {
            key: "addLetter",
            value: function(a) {
                this.gameStatus === Be && this.canInput && (this.tileIndex >= 5 || (this.boardState[this.rowIndex] += a,
                this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]),
                this.tileIndex += 1))
            }
        }, {
            key: "removeLetter",
            value: function() {
                if (this.gameStatus === Be && this.canInput && !(this.tileIndex <= 0)) {
                    this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                    var a = this.$board.querySelectorAll("game-row")[this.rowIndex];
                    this.boardState[this.rowIndex] ? a.setAttribute("letters", this.boardState[this.rowIndex]) : a.removeAttribute("letters"),
                    a.removeAttribute("invalid"),
                    this.tileIndex -= 1
                }
            }
        }, {
            key: "submitGuess",
            value: function() {
                if (this.gameStatus === Be && this.canInput) {
                    if (5 !== this.tileIndex)
                        return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""),
                        void this.addToast("Not enough letters");
                    this.evaluateRow()
                }
            }
        }, {
            key: "addToast",
            value: function(a, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , n = document.createElement("game-toast");
                n.setAttribute("text", a),
                e && n.setAttribute("duration", e),
                t ? this.shadowRoot.querySelector("#system-toaster").prepend(n) : this.shadowRoot.querySelector("#game-toaster").prepend(n)
            }
        }, {
            key: "sizeBoard",
            value: function() {
                var a = this.shadowRoot.querySelector("#board-container")
                  , e = Math.min(Math.floor(a.clientHeight * (5 / 6)), 350)
                  , t = 6 * Math.floor(e / 5);
                this.$board.style.width = "".concat(e, "px"),
                this.$board.style.height = "".concat(t, "px")
            }
        }, {
            key: "showStatsModal",
            value: function() {
                var a = this.$game.querySelector("game-modal")
                  , e = document.createElement("game-stats");
                this.gameStatus === De && this.rowIndex <= 6 && e.setAttribute("highlight-guess", this.rowIndex),
                e.gameApp = this,
                a.appendChild(e),
                a.setAttribute("open", "")
            }
        }, {
            key: "showHelpModal",
            value: function() {
                var a = this.$game.querySelector("game-modal");
                a.appendChild(document.createElement("game-help")),
                a.setAttribute("open", "")
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild($e.content.cloneNode(!0)),
                this.$game = this.shadowRoot.querySelector("#game"),
                this.$board = this.shadowRoot.querySelector("#board"),
                this.$keyboard = this.shadowRoot.querySelector("game-keyboard"),
                this.sizeBoard(),
                this.lastPlayedTs || setTimeout((function() {
                    return a.showHelpModal()
                }
                ), 100);
                for (var e = 0; e < 6; e++) {
                    var t = document.createElement("game-row");
                    t.setAttribute("letters", this.boardState[e]),
                    t.setAttribute("length", 5),
                    this.evaluations[e] && (t.evaluation = this.evaluations[e]),
                    this.$board.appendChild(t)
                }
                this.$game.addEventListener("game-key-press", (function(e) {
                    var t = e.detail.key;
                    "←" === t || "Backspace" === t ? a.removeLetter() : "↵" === t || "Enter" === t ? a.submitGuess() : Ie.includes(t.toLowerCase()) && a.addLetter(t.toLowerCase())
                }
                )),
                this.$game.addEventListener("game-last-tile-revealed-in-row", (function(e) {
                    a.$keyboard.letterEvaluations = a.letterEvaluations,
                    a.rowIndex < 6 && (a.canInput = !0);
                    var t = a.$board.querySelectorAll("game-row")[a.rowIndex - 1];
                    (e.path || e.composedPath && e.composedPath()).includes(t) && ([De, Ge].includes(a.gameStatus) && (a.restoringFromLocalStorage ? a.showStatsModal() : (a.gameStatus === De && (t.setAttribute("win", ""),
                    a.addToast(Fe[a.rowIndex - 1], 2e3)),
                    a.gameStatus === Ge && a.addToast(a.solution.toUpperCase(), 1 / 0),
                    setTimeout((function() {
                        a.showStatsModal()
                    }
                    ), 2500))),
                    a.restoringFromLocalStorage = !1)
                }
                )),
                this.shadowRoot.addEventListener("game-setting-change", (function(e) {
                    var t = e.detail
                      , n = t.name
                      , i = t.checked
                      , r = t.disabled;
                    "hard-mode" !== n || (r ? a.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : (a.hardMode = i,
                    me({
                        hardMode: i
                    })))
                }
                )),
                this.shadowRoot.getElementById("settings-button").addEventListener("click", (function(e) {
                    var t = a.$game.querySelector("game-page")
                      , n = document.createTextNode("PENGATURAN");
                    t.appendChild(n);
                    var i = document.createElement("game-settings");
                    i.setAttribute("slot", "content"),
                    i.gameApp = a,
                    t.appendChild(i),
                    t.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("help-button").addEventListener("click", (function(e) {
                    var t = a.$game.querySelector("game-page")
                      , n = document.createTextNode("Cara Main");
                    t.appendChild(n);
                    var i = document.createElement("game-help");
                    i.setAttribute("page", ""),
                    i.setAttribute("slot", "content"),
                    t.appendChild(i),
                    t.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("statistics-button").addEventListener("click", (function(e) {
                    a.showStatsModal()
                }
                )),
                window.addEventListener("resize", this.sizeBoard.bind(this))
            }
        }, {
            key: "disconnectedCallback",
            value: function() {}
        }, {
            key: "debugTools",
            value: function() {
                var a = this;
                this.shadowRoot.getElementById("debug-tools").appendChild(He.content.cloneNode(!0)),
                this.shadowRoot.getElementById("toast").addEventListener("click", (function(e) {
                    a.addToast("hello world")
                }
                )),
                this.shadowRoot.getElementById("modal").addEventListener("click", (function(e) {
                    var t = a.$game.querySelector("game-modal");
                    t.textContent = "hello plz",
                    t.setAttribute("open", "")
                }
                )),
                this.shadowRoot.getElementById("reveal").addEventListener("click", (function() {
                    a.evaluateRow()
                }
                )),
                this.shadowRoot.getElementById("shake").addEventListener("click", (function() {
                    a.$board.querySelectorAll("game-row")[a.rowIndex].setAttribute("invalid", "")
                }
                )),
                this.shadowRoot.getElementById("bounce").addEventListener("click", (function() {
                    var e = a.$board.querySelectorAll("game-row")[a.rowIndex - 1];
                    "" === e.getAttribute("win") ? e.removeAttribute("win") : e.setAttribute("win", "")
                }
                ))
            }
        }]),
        n
    }(d(HTMLElement));
    customElements.define("game-app", Ke);
    var We = document.createElement("template");
    We.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
    var Ye = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            (a = e.call(this)).attachShadow({
                mode: "open"
            }),
            a
        }
        return i(n, [{
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild(We.content.cloneNode(!0)),
                this.addEventListener("click", (function(e) {
                    a.shadowRoot.querySelector(".content").classList.add("closing")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(e) {
                    "SlideOut" === e.animationName && (a.shadowRoot.querySelector(".content").classList.remove("closing"),
                    a.removeChild(a.firstChild),
                    a.removeAttribute("open"))
                }
                ))
            }
        }]),
        n
    }(d(HTMLElement));
    customElements.define("game-modal", Ye);
    var Je = document.createElement("template");
    Je.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 42px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var Ue = document.createElement("template");
    Ue.innerHTML = "\n  <button>key</button>\n";
    var Xe = document.createElement("template");
    Xe.innerHTML = '\n  <div class="spacer"></div>\n';
    var Ve = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"], ["↵", "z", "x", "c", "v", "b", "n", "m", "←"]]
      , Qe = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            r(c(a = e.call(this)), "_letterEvaluations", {}),
            a.attachShadow({
                mode: "open"
            }),
            a
        }
        return i(n, [{
            key: "letterEvaluations",
            set: function(a) {
                this._letterEvaluations = a,
                this._render()
            }
        }, {
            key: "dispatchKeyPressEvent",
            value: function(a) {
                this.dispatchEvent(new CustomEvent("game-key-press",{
                    bubbles: !0,
                    composed: !0,
                    detail: {
                        key: a
                    }
                }))
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild(Je.content.cloneNode(!0)),
                this.$keyboard = this.shadowRoot.getElementById("keyboard"),
                this.$keyboard.addEventListener("click", (function(e) {
                    var t = e.target.closest("button");
                    t && a.$keyboard.contains(t) && a.dispatchKeyPressEvent(t.dataset.key)
                }
                )),
                window.addEventListener("keydown", (function(e) {
                    if (!0 !== e.repeat) {
                        var t = e.key
                          , n = e.metaKey
                          , i = e.ctrlKey;
                        n || i || (Ie.includes(t.toLowerCase()) || "Backspace" === t || "Enter" === t) && a.dispatchKeyPressEvent(t)
                    }
                }
                )),
                this.$keyboard.addEventListener("transitionend", (function(e) {
                    var t = e.target.closest("button");
                    t && a.$keyboard.contains(t) && t.classList.remove("fade")
                }
                )),
                Ve.forEach((function(e) {
                    var t = document.createElement("div");
                    t.classList.add("row"),
                    e.forEach((function(a) {
                        var e;
                        if (a >= "a" && a <= "z" || "←" === a || "↵" === a) {
                            if ((e = Ue.content.cloneNode(!0).firstElementChild).dataset.key = a,
                            e.textContent = a,
                            "←" === a) {
                                var n = document.createElement("game-icon");
                                n.setAttribute("icon", "backspace"),
                                e.textContent = "",
                                e.appendChild(n),
                                e.classList.add("one-and-a-half")
                            }
                            "↵" == a && (e.textContent = "enter",
                            e.classList.add("one-and-a-half"))
                        } else
                            (e = Xe.content.cloneNode(!0).firstElementChild).classList.add(1 === a.length ? "half" : "one");
                        t.appendChild(e)
                    }
                    )),
                    a.$keyboard.appendChild(t)
                }
                )),
                this._render()
            }
        }, {
            key: "_render",
            value: function() {
                for (var a in this._letterEvaluations) {
                    var e = this.$keyboard.querySelector('[data-key="'.concat(a, '"]'));
                    e.dataset.state = this._letterEvaluations[a],
                    e.classList.add("fade")
                }
            }
        }]),
        n
    }(d(HTMLElement));
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    function Ze(a, e, t, n) {
        return new (t || (t = Promise))((function(i, r) {
            function o(a) {
                try {
                    u(n.next(a))
                } catch (a) {
                    r(a)
                }
            }
            function s(a) {
                try {
                    u(n.throw(a))
                } catch (a) {
                    r(a)
                }
            }
            function u(a) {
                var e;
                a.done ? i(a.value) : (e = a.value,
                e instanceof t ? e : new t((function(a) {
                    a(e)
                }
                ))).then(o, s)
            }
            u((n = n.apply(a, e || [])).next())
        }
        ))
    }
    function at(a, e) {
        var t, n, i, r, o = {
            label: 0,
            sent: function() {
                if (1 & i[0])
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }
        ),
        r;
        function s(r) {
            return function(s) {
                return function(r) {
                    if (t)
                        throw new TypeError("Generator is already executing.");
                    for (; o; )
                        try {
                            if (t = 1,
                            n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n),
                            0) : n.next) && !(i = i.call(n, r[1])).done)
                                return i;
                            switch (n = 0,
                            i && (r = [2 & r[0], i.value]),
                            r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return o.label++,
                                {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                o.label++,
                                n = r[1],
                                r = [0];
                                continue;
                            case 7:
                                r = o.ops.pop(),
                                o.trys.pop();
                                continue;
                            default:
                                if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== r[0] && 2 !== r[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    o.label = r[1];
                                    break
                                }
                                if (6 === r[0] && o.label < i[1]) {
                                    o.label = i[1],
                                    i = r;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2],
                                    o.ops.push(r);
                                    break
                                }
                                i[2] && o.ops.pop(),
                                o.trys.pop();
                                continue
                            }
                            r = e.call(a, o)
                        } catch (a) {
                            r = [6, a],
                            n = 0
                        } finally {
                            t = i = 0
                        }
                    if (5 & r[0])
                        throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }([r, s])
            }
        }
    }
    customElements.define("game-keyboard", Qe),
    function() {
        (console.warn || console.log).apply(console, arguments)
    }
    .bind("[clipboard-polyfill]");
    var et, tt, nt, it, rt = "undefined" == typeof navigator ? void 0 : navigator, ot = null == rt ? void 0 : rt.clipboard;
    null === (et = null == ot ? void 0 : ot.read) || void 0 === et || et.bind(ot),
    null === (tt = null == ot ? void 0 : ot.readText) || void 0 === tt || tt.bind(ot);
    var st = (null === (nt = null == ot ? void 0 : ot.write) || void 0 === nt || nt.bind(ot),
    null === (it = null == ot ? void 0 : ot.writeText) || void 0 === it ? void 0 : it.bind(ot))
      , ut = "undefined" == typeof window ? void 0 : window
      , lt = (null == ut || ut.ClipboardItem,
    ut)
      , kt = function() {
        this.success = !1
    };
    function dt(a, e, t) {
        for (var n in a.success = !0,
        e) {
            var i = e[n]
              , r = t.clipboardData;
            r.setData(n, i),
            "text/plain" === n && r.getData(n) !== i && (a.success = !1)
        }
        t.preventDefault()
    }
    function ct(a) {
        var e = new kt
          , t = dt.bind(this, e, a);
        document.addEventListener("copy", t);
        try {
            document.execCommand("copy")
        } finally {
            document.removeEventListener("copy", t)
        }
        return e.success
    }
    function pt(a, e) {
        mt(a);
        var t = ct(e);
        return ht(),
        t
    }
    function mt(a) {
        var e = document.getSelection();
        if (e) {
            var t = document.createRange();
            t.selectNodeContents(a),
            e.removeAllRanges(),
            e.addRange(t)
        }
    }
    function ht() {
        var a = document.getSelection();
        a && a.removeAllRanges()
    }
    function bt(a, e, t) {
        try {
            n = navigator.userAgent || navigator.vendor || window.opera,
            !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(a) ? function(a) {
                return Ze(this, void 0, void 0, (function() {
                    return at(this, (function(e) {
                        if (st)
                            return [2, st(a)];
                        if (!function(a) {
                            return Ze(this, void 0, void 0, (function() {
                                var e;
                                return at(this, (function(t) {
                                    if (e = "text/plain"in a,
                                    "undefined" == typeof ClipboardEvent && void 0 !== lt.clipboardData && void 0 !== lt.clipboardData.setData) {
                                        if (!e)
                                            throw new Error("No `text/plain` value was specified.");
                                        if (n = a["text/plain"],
                                        lt.clipboardData.setData("Text", n))
                                            return [2, !0];
                                        throw new Error("Copying failed, possibly because the user rejected it.")
                                    }
                                    var n;
                                    return ct(a) || navigator.userAgent.indexOf("Edge") > -1 || pt(document.body, a) || function(a) {
                                        var e = document.createElement("div");
                                        e.setAttribute("style", "-webkit-user-select: text !important"),
                                        e.textContent = "temporary element",
                                        document.body.appendChild(e);
                                        var t = pt(e, a);
                                        return document.body.removeChild(e),
                                        t
                                    }(a) || function(a) {
                                        var e = document.createElement("div");
                                        e.setAttribute("style", "-webkit-user-select: text !important");
                                        var t = e;
                                        e.attachShadow && (t = e.attachShadow({
                                            mode: "open"
                                        }));
                                        var n = document.createElement("span");
                                        n.innerText = a,
                                        t.appendChild(n),
                                        document.body.appendChild(e),
                                        mt(n);
                                        var i = document.execCommand("copy");
                                        return ht(),
                                        document.body.removeChild(e),
                                        i
                                    }(a["text/plain"]) ? [2, !0] : [2, !1]
                                }
                                ))
                            }
                            ))
                        }(function(a) {
                            var e = {};
                            return e["text/plain"] = a,
                            e
                        }(a)))
                            throw new Error("writeText() failed");
                        return [2]
                    }
                    ))
                }
                ))
            }(a.text).then(e, t) : navigator.share(a)
        } catch (a) {
            t()
        }
        var n
    }
    var gt = document.createElement("template");
    gt.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>STATISTIK</h1>\n    <div id="statistics"></div>\n    <h1>Distribusi Tebakan</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div><h1 style="margin-top:30px;">INGIN BERMAIN TANPA BATAS?</h1><a href="https://play.google.com/store/apps/details?id=com.san.katla" target="_blank"><img alt="Get it on Google Play" id="logo-img" src="https://play.google.com/intl/en_us/badges/static/images/badges/id_badge_web_generic.png" width="240px" height="auto"></a>\n<a href="https://apps.apple.com/id/app/wordlist-unlimited-challenge/id1672181086?l=id" target="_blank" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/id-id?size=250x83&amp;releaseDate=1676678400" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a></div>\n';
    var ft = document.createElement("template");
    ft.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var vt = document.createElement("template");
    vt.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var yt = document.createElement("template");
    yt.innerHTML = '\n  <div class="countdown">\n    <h1>KATA BERIKUTNYA</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      BAGIKAN <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var wt = {
        currentStreak: "Rentetan Kemenangan Saat Ini",
        maxStreak: "Rekor Kemenangan Tertinggi",
        winPercentage: "Menang %",
        gamesPlayed: "Sudah Dimainkan",
        gamesWon: "Menang",
        averageGuesses: "Purata Tekaan"
    }
      , jt = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            r(c(a = e.call(this)), "stats", {}),
            r(c(a), "gameApp", void 0),
            a.attachShadow({
                mode: "open"
            }),
            a.stats = Pe(),
            a
        }
        return i(n, [{
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild(gt.content.cloneNode(!0));
                var e = this.shadowRoot.getElementById("statistics")
                  , t = this.shadowRoot.getElementById("guess-distribution")
                  , n = Math.max.apply(Math, h(Object.values(this.stats.guesses)));
                if (Object.values(this.stats.guesses).every((function(a) {
                    return 0 === a
                }
                ))) {
                    var i = document.createElement("div");
                    i.classList.add("no-data"),
                    i.innerText = "Tidak Ada Catatan",
                    t.appendChild(i)
                } else
                    for (var r = 1; r < Object.keys(this.stats.guesses).length; r++) {
                        var o = r
                          , s = this.stats.guesses[r]
                          , u = vt.content.cloneNode(!0)
                          , l = Math.max(7, Math.round(s / n * 100));
                        u.querySelector(".guess").textContent = o;
                        var k = u.querySelector(".graph-bar");
                        if (k.style.width = "".concat(l, "%"),
                        "number" == typeof s) {
                            u.querySelector(".num-guesses").textContent = s,
                            s > 0 && k.classList.add("align-right");
                            var d = parseInt(this.getAttribute("highlight-guess"), 10);
                            d && r === d && k.classList.add("highlight")
                        }
                        t.appendChild(u)
                    }
                if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(t) {
                    var n = wt[t]
                      , i = a.stats[t]
                      , r = ft.content.cloneNode(!0);
                    r.querySelector(".label").textContent = n,
                    r.querySelector(".statistic").textContent = i,
                    e.appendChild(r)
                }
                )),
                this.gameApp.gameStatus !== Be) {
                    var c = this.shadowRoot.querySelector(".footer")
                      , p = yt.content.cloneNode(!0);
                    c.appendChild(p),
                    this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        bt(function(a) {
                            var e = a.evaluations
                              , t = a.dayOffset
                              , n = a.rowIndex
                              , i = a.isHardMode
                              , r = a.isWin
                              , o = JSON.parse(window.localStorage.getItem(x))
                              , s = JSON.parse(window.localStorage.getItem(S))
                              , u = "katlaindonesia.com\n".concat(t);
                            u += " ".concat(r ? n : "X", "/").concat(6),
                            i && (u += "*");
                            var l = "";
                            return e.forEach((function(a) {
                                a && (a.forEach((function(a) {
                                    if (a) {
                                        var e = "";
                                        switch (a) {
                                        case xe:
                                            e = function(a) {
                                                return a ? "🟧" : "🟩"
                                            }(s);
                                            break;
                                        case je:
                                            e = function(a) {
                                                return a ? "🟦" : "🟨"
                                            }(s);
                                            break;
                                        case Se:
                                            e = function(a) {
                                                return a ? "⬛" : "⬜"
                                            }(o)
                                        }
                                        l += e
                                    }
                                }
                                )),
                                l += "\n")
                            }
                            )),
                            {
                                text: "".concat(u, "\n").concat(l.trimEnd())
                            }
                        }({
                            evaluations: a.gameApp.evaluations,
                            dayOffset: a.gameApp.dayOffset,
                            rowIndex: a.gameApp.rowIndex,
                            isHardMode: a.gameApp.hardMode,
                            isWin: a.gameApp.gameStatus === De
                        }), (function() {
                            a.gameApp.addToast("Keputusan telah disalin ke clipboard", 2e3, !0)
                        }
                        ), (function() {
                            a.gameApp.addToast("Berkongsi tidak berjaya", 2e3, !0)
                        }
                        ))
                    }
                    ))
                }
            }
        }]),
        n
    }(d(HTMLElement));
    customElements.define("game-stats", jt);
    var xt = document.createElement("template");
    xt.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var St = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            (a = e.call(this)).attachShadow({
                mode: "open"
            }),
            a
        }
        return i(n, [{
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild(xt.content.cloneNode(!0)),
                this.shadowRoot.querySelector(".container").addEventListener("click", (function(e) {
                    e.stopPropagation(),
                    a.hasAttribute("checked") ? a.removeAttribute("checked") : a.setAttribute("checked", ""),
                    a.dispatchEvent(new CustomEvent("game-switch-change",{
                        bubbles: !0,
                        composed: !0,
                        detail: {
                            name: a.getAttribute("name"),
                            checked: a.hasAttribute("checked"),
                            disabled: a.hasAttribute("disabled")
                        }
                    }))
                }
                ))
            }
        }], [{
            key: "observedAttributes",
            get: function() {
                return ["checked"]
            }
        }]),
        n
    }(d(HTMLElement));
    customElements.define("game-switch", St);
    var _t = document.createElement("template");
    _t.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Tebak <strong>KATA</strong> tanpa imbuhan dalam 6 kali percobaan.</p>\n      <p>Setiap tebakan harus berupa kata 5 huruf yang valid. Tekan tombol enter untuk mengirim.</p>\n      <p>Setelah setiap tebakan, warna kotak akan berubah untuk menunjukkan seberapa dekat tebakan Anda dengan kata tersebut.</p>\n      <div class="examples">\n        <p><strong>Contoh</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="b" evaluation="correct" reveal></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="j"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="k"></game-tile>\n          </div>\n          <p>Huruf <strong>B</strong> di dalam tempat yang betul.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="b"></game-tile>\n            <game-tile letter="a" evaluation="present" reveal></game-tile>\n            <game-tile letter="j"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="k"></game-tile>\n          </div>\n          <p>Huruf <strong>A</strong> di dalam tempat yang salah.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="b"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="j"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="n" evaluation="absent" reveal></game-tile>\n          </div>\n          <p>Huruf <strong>N</strong> tiada dalam di mana-mana tempat.</p>\n        </div>\n      </div>\n      <p><strong>Kata-kata baru akan tersedia setiap hari!<strong></p>\n    </div>\n  </section>\n';
    var Et = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            (a = e.call(this)).attachShadow({
                mode: "open"
            }),
            a
        }
        return i(n, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(_t.content.cloneNode(!0))
            }
        }]),
        n
    }(d(HTMLElement));
    customElements.define("game-help", Et);
    var zt = document.createElement("template");
    zt.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
    var At = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            (a = e.call(this)).attachShadow({
                mode: "open"
            }),
            a
        }
        return i(n, [{
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild(zt.content.cloneNode(!0)),
                this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(e) {
                    a.shadowRoot.querySelector(".overlay").classList.add("closing")
                }
                )),
                this.shadowRoot.addEventListener("animationend", (function(e) {
                    "SlideOut" === e.animationName && (a.shadowRoot.querySelector(".overlay").classList.remove("closing"),
                    Array.from(a.childNodes).forEach((function(e) {
                        a.removeChild(e)
                    }
                    )),
                    a.removeAttribute("open"))
                }
                ))
            }
        }]),
        n
    }(d(HTMLElement));
    customElements.define("game-page", At);
    var Tt = document.createElement("template");
    Tt.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Ct = {
        help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
    }
      , It = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            return t(this, n),
            (a = e.call(this)).attachShadow({
                mode: "open"
            }),
            a
        }
        return i(n, [{
            key: "connectedCallback",
            value: function() {
                this.shadowRoot.appendChild(Tt.content.cloneNode(!0));
                var a = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Ct[a]),
                "backspace" === a && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
                "share" === a && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
            }
        }]),
        n
    }(d(HTMLElement));
    customElements.define("game-icon", It);
    var Lt = document.createElement("template");
    Lt.innerHTML = '\n  <div id="timer"></div>\n';
    var Mt = 36e5
      , Ot = function(a) {
        o(n, a);
        var e = m(n);
        function n() {
            var a;
            t(this, n),
            r(c(a = e.call(this)), "targetEpochMS", void 0),
            r(c(a), "intervalId", void 0),
            r(c(a), "$timer", void 0),
            a.attachShadow({
                mode: "open"
            });
            var i = new Date;
            return i.setDate(i.getDate() + 1),
            i.setHours(0, 0, 0, 0),
            a.targetEpochMS = i.getTime(),
            a
        }
        return i(n, [{
            key: "padDigit",
            value: function(a) {
                return a.toString().padStart(2, "0")
            }
        }, {
            key: "updateTimer",
            value: function() {
                var a, e = (new Date).getTime(), t = Math.floor(this.targetEpochMS - e);
                if (t <= 0)
                    a = "00:00:00";
                else {
                    var n = Math.floor(t % 864e5 / Mt)
                      , i = Math.floor(t % Mt / 6e4)
                      , r = Math.floor(t % 6e4 / 1e3);
                    a = "".concat(this.padDigit(n), ":").concat(this.padDigit(i), ":").concat(this.padDigit(r))
                }
                this.$timer.textContent = a
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var a = this;
                this.shadowRoot.appendChild(Lt.content.cloneNode(!0)),
                this.$timer = this.shadowRoot.querySelector("#timer"),
                this.intervalId = setInterval((function() {
                    a.updateTimer()
                }
                ), 200)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                clearInterval(this.intervalId)
            }
        }]),
        n
    }(d(HTMLElement));
    return customElements.define("countdown-timer", Ot),
    a.CountdownTimer = Ot,
    a.GameApp = Ke,
    a.GameHelp = Et,
    a.GameIcon = It,
    a.GameKeyboard = Qe,
    a.GameModal = Ye,
    a.GamePage = At,
    a.GameRow = w,
    a.GameSettings = be,
    a.GameStats = jt,
    a.GameSwitch = St,
    a.GameThemeManager = _,
    a.GameTile = v,
    a.GameToast = fe,
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a
}({});
