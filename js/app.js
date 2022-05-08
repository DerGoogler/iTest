(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "/x4Q": function (e, t, n) {
      var i, a, o, s;
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (s = function (e) {
        "use strict";
        /*!
         * ScrollToPlugin 3.2.4
         * https://greensock.com
         *
         * @license Copyright 2008-2020, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var t,
          n,
          i,
          a,
          o,
          s,
          l,
          c = function () {
            return "undefined" != typeof window;
          },
          u = function () {
            return t || (c() && (t = window.gsap) && t.registerPlugin && t);
          },
          h = function (e) {
            return "string" == typeof e;
          },
          d = function (e, t) {
            var n = "x" === t ? "Width" : "Height",
              s = "scroll" + n,
              r = "client" + n;
            return e === i || e === a || e === o
              ? Math.max(a[s], o[s]) - (i["inner" + n] || a[r] || o[r])
              : e[s] - e["offset" + n];
          },
          f = function (e, t) {
            var n = "scroll" + ("x" === t ? "Left" : "Top");
            return (
              e === i &&
                (null != e.pageXOffset
                  ? (n = "page" + t.toUpperCase() + "Offset")
                  : (e = null != a[n] ? a : o)),
              function () {
                return e[n];
              }
            );
          },
          p = function (e, t) {
            var n = s(e)[0].getBoundingClientRect(),
              r = !t || t === i || t === o,
              l = r
                ? {
                    top:
                      a.clientTop -
                      (i.pageYOffset || a.scrollTop || o.scrollTop || 0),
                    left:
                      a.clientLeft -
                      (i.pageXOffset || a.scrollLeft || o.scrollLeft || 0),
                  }
                : t.getBoundingClientRect(),
              c = { x: n.left - l.left, y: n.top - l.top };
            return !r && t && ((c.x += f(t, "x")()), (c.y += f(t, "y")())), c;
          },
          m = function (e, t, n, i) {
            return isNaN(e) || "object" === r(e)
              ? h(e) && "=" === e.charAt(1)
                ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + i
                : "max" === e
                ? d(t, n)
                : Math.min(d(t, n), p(e, t)[n])
              : parseFloat(e);
          },
          y = function () {
            (t = u()),
              c() &&
                t &&
                document.body &&
                ((i = window),
                (o = document.body),
                (a = document.documentElement),
                (s = t.utils.toArray),
                t.config({ autoKillThreshold: 7 }),
                (l = t.config()),
                (n = 1));
          },
          g = {
            version: "3.2.4",
            name: "scrollTo",
            rawVars: 1,
            register: function (e) {
              (t = e), y();
            },
            init: function (e, t, a, o, s) {
              n || y(),
                (this.isWin = e === i),
                (this.target = e),
                (this.tween = a),
                "object" !== r(t)
                  ? h((t = { y: t }).y) &&
                    "max" !== t.y &&
                    "=" !== t.y.charAt(1) &&
                    (t.x = t.y)
                  : t.nodeType && (t = { y: t, x: t }),
                (this.vars = t),
                (this.autoKill = !!t.autoKill),
                (this.getX = f(e, "x")),
                (this.getY = f(e, "y")),
                (this.x = this.xPrev = this.getX()),
                (this.y = this.yPrev = this.getY()),
                null != t.x
                  ? (this.add(
                      this,
                      "x",
                      this.x,
                      m(t.x, e, "x", this.x) - (t.offsetX || 0),
                      o,
                      s,
                      Math.round
                    ),
                    this._props.push("scrollTo_x"))
                  : (this.skipX = 1),
                null != t.y
                  ? (this.add(
                      this,
                      "y",
                      this.y,
                      m(t.y, e, "y", this.y) - (t.offsetY || 0),
                      o,
                      s,
                      Math.round
                    ),
                    this._props.push("scrollTo_y"))
                  : (this.skipY = 1);
            },
            render: function (e, t) {
              for (
                var n,
                  a,
                  o,
                  s,
                  r,
                  c = t._pt,
                  u = t.target,
                  h = t.tween,
                  f = t.autoKill,
                  p = t.xPrev,
                  m = t.yPrev,
                  y = t.isWin;
                c;

              )
                c.r(e, c.d), (c = c._next);
              (n = y || !t.skipX ? t.getX() : p),
                (o = (a = y || !t.skipY ? t.getY() : m) - m),
                (s = n - p),
                (r = l.autoKillThreshold),
                t.x < 0 && (t.x = 0),
                t.y < 0 && (t.y = 0),
                f &&
                  (!t.skipX &&
                    (s > r || s < -r) &&
                    n < d(u, "x") &&
                    (t.skipX = 1),
                  !t.skipY &&
                    (o > r || o < -r) &&
                    a < d(u, "y") &&
                    (t.skipY = 1),
                  t.skipX &&
                    t.skipY &&
                    (h.kill(),
                    t.vars.onAutoKill &&
                      t.vars.onAutoKill.apply(
                        h,
                        t.vars.onAutoKillParams || []
                      ))),
                y
                  ? i.scrollTo(t.skipX ? n : t.x, t.skipY ? a : t.y)
                  : (t.skipY || (u.scrollTop = t.y),
                    t.skipX || (u.scrollLeft = t.x)),
                (t.xPrev = t.x),
                (t.yPrev = t.y);
            },
            kill: function (e) {
              var t = "scrollTo" === e;
              (t || "scrollTo_x" === e) && (this.skipX = 1),
                (t || "scrollTo_y" === e) && (this.skipY = 1);
            },
          };
        (g.max = d),
          (g.getOffset = p),
          (g.buildGetter = f),
          u() && t.registerPlugin(g),
          (e.ScrollToPlugin = g),
          (e.default = g),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
        "object" === r(t) && void 0 !== e
          ? s(t)
          : ((a = [t]),
            void 0 === (o = "function" == typeof (i = s) ? i.apply(t, a) : i) ||
              (e.exports = o));
    },
    0: function (e, t, n) {
      n("kOmT"), (e.exports = n("IMnL"));
    },
    IMnL: function (e, t) {},
    kOmT: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("EVdn"),
        a = n.n(i),
        o = n("z/o8"),
        s = n("MZFn"),
        r = n.n(s),
        l = n("/x4Q"),
        c = n.n(l);
      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function h(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), e;
      }
      var d = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        return (
          h(e, null, [
            {
              key: "instance",
              get: function () {
                return e._instance || (e._instance = new e()), e._instance;
              },
            },
          ]),
          h(e, [
            {
              key: "isTouch",
              value: function () {
                if (this.isWindows()) return !1;
                var e = " -webkit- -moz- -o- -ms- ".split(" ");
                return (
                  !!(
                    "ontouchstart" in window ||
                    (window.DocumentTouch && document instanceof DocumentTouch)
                  ) ||
                  (function (e) {
                    return window.matchMedia(e).matches;
                  })(["(", e.join("touch-enabled),("), "heartz", ")"].join(""))
                );
              },
            },
            {
              key: "isOldIE",
              value: function () {
                return !!window.MSInputMethodContext && !!document.documentMode;
              },
            },
            {
              key: "isIE",
              value: function () {
                var e = window.navigator.userAgent,
                  t = e.indexOf("MSIE ");
                if (t > 0)
                  return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
                if (e.indexOf("Trident/") > 0) {
                  var n = e.indexOf("rv:");
                  return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
                }
                var i = e.indexOf("Edge/");
                return (
                  i > 0 && parseInt(e.substring(i + 5, e.indexOf(".", i)), 10)
                );
              },
            },
            {
              key: "isMobileSafari",
              value: function () {
               // var e = navigator.userAgent;
               // return (
               //   /(iPad|iPhone|iPod|Chrome|Android)/gi.test(e) &&
               //   !/CriOS/.test(e) &&
               //   !/FxiOS/.test(e) &&
               //   !/OPiOS/.test(e) &&
               //   !/mercury/.test(e)
               // );
              },
            },
            {
              key: "isSafari",
              value: function () {
                return /^((?!chrome|android).)*safari/i.test(
                  navigator.userAgent
                );
              },
            },
            {
              key: "isFirefox",
              value: function () {
                return -1 != navigator.userAgent.indexOf("Firefox");
              },
            },
            {
              key: "isWindows",
              value: function () {
                return navigator.platform.indexOf("Win") > -1;
              },
            },
            {
              key: "isSamsung",
              value: function () {
               // return !!navigator.userAgent.match(
               //   /SAMSUNG|SGH-[I|N|T]|GT-[I|P|N]|SM-[N|P|T|Z|G]|SHV-E|SCH-[I|J|R|S]|SPH-L/i
               // );
              },
            },
            {
              key: "iOSVersion",
              value: function () {
                var e,
                  t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                return (
                  null != t &&
                  ((e = [
                    parseInt(t[1], 10),
                    parseInt(t[2], 10),
                    parseInt(t[3] || 0, 10),
                  ]),
                  parseFloat(e.join(".")))
                );
              },
            },
            {
              key: "hasNotch",
              value: function () {
                if (
                  CSS.supports("padding-bottom: env(safe-area-inset-bottom)")
                ) {
                  var e = document.createElement("div");
                  (e.style.paddingBottom = "env(safe-area-inset-bottom)"),
                    document.body.appendChild(e);
                  var t = parseInt(
                    window.getComputedStyle(e).paddingBottom,
                    10
                  );
                  if ((document.body.removeChild(e), t > 0)) return !0;
                }
                return !1;
              },
            },
            {
              key: "getOS",
              value: function () {
                var e,
                  t,
                  n = navigator.userAgent;
                return (
                  n.match(/iPad/i) || n.match(/iPhone/i)
                    ? ((e = "iOS"), (t = n.indexOf("OS ")))
                    : n.match(/Android/i)
                    ? ((e = "Android"), (t = n.indexOf("Android ")))
                    : (e = "unknown"),
                  "iOS" === e && t > -1
                    ? n.substr(t + 3, 3).replace("_", ".")
                    : "Android" === e && t > -1
                    ? n.substr(t + 8, 3)
                    : "unknown",
                  e
                );
              },
            },
            {
              key: "getIPhoneModel",
              value: function () {
                return window.screen.height / window.screen.width ==
                  812 / 375 && 3 == window.devicePixelRatio
                  ? 10
                  : window.screen.height / window.screen.width == 736 / 414 &&
                    3 == window.devicePixelRatio
                  ? 8
                  : window.screen.height / window.screen.width == 667 / 375 &&
                    3 == window.devicePixelRatio
                  ? 7
                  : window.screen.height / window.screen.width == 667 / 375 &&
                    2 == window.devicePixelRatio
                  ? 6
                  : window.screen.height / window.screen.width == 1.775 &&
                    2 == window.devicePixelRatio
                  ? 5
                  : window.screen.height / window.screen.width == 1.5 &&
                    2 == window.devicePixelRatio
                  ? 4
                  : window.screen.height / window.screen.width == 1.5 &&
                    1 == window.devicePixelRatio
                  ? 1
                  : 11;
              },
            },
          ]),
          e
        );
      })();
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function p(e, t, n) {
        return t && f(e.prototype, t), n && f(e, n), e;
      }
      var m = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.pageTitle = document.title),
              (this.debubMode = !1);
          }
          return (
            p(e, null, [
              {
                key: "instance",
                get: function () {
                  return e._instance || (e._instance = new e()), e._instance;
                },
              },
            ]),
            p(e, [
              {
                key: "trackPage",
                value: function (e, t) {
                  var n = "".concat(this.pageTitle, " - ").concat(e);
                  this.debubMode
                    ? (console.log("[gtag] - track-page:"),
                      console.log("[gtag] - page_title:", n),
                      console.log("[gtag] - page_path:", t),
                      console.log("--------------"))
                    : dataLayer.push({
                        event: "virtual_pageview",
                        _event: "virtual_pageview",
                        page_title: n,
                        page_path: t,
                      });
                },
              },
              {
                key: "trackEvent",
                value: function (e, t, n, i) {
                  this.debubMode;
                },
              },
            ]),
            e
          );
        })(),
        y = m;
      function g(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function E(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function b(e, t, n) {
        return t && E(e.prototype, t), n && E(e, n), e;
      }
      m.instance;
      var w = (function () {
          function e(t, n) {
            g(this, e), this.render(t, n);
          }
          return (
            b(e, [
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.debug = !1),
                    -1 != window.location.href.indexOf("localhost") &&
                      (this.debug = !0),
                    (this.refs = {
/** Backup
 * fallbackContent: this.element.find(
                        '*[data-ref="app-fallback-content"]'
                      ),
                      fallbackInstall: this.element.find(
                        '*[data-ref="app-fallback-install"]'
                      ),
                      fallbackBrowser: this.element.find(
                        '*[data-ref="app-fallback-browser"]'
                      ),
                      fallbackSocial: this.element.find(
                        '*[data-ref="app-fallback-social"]'
                      ),
                      fallbackDesktop: this.element.find(
                        '*[data-ref="app-fallback-desktop"]'
                      ),
                      fallbackPhone: this.element.find(
                        '*[data-ref="app-fallback-phone"]'
                      ),
                      fallbackSamsung: this.element.find(
                        '*[data-ref="app-fallback-samsung"]'
                      ),
                      fallbackAndroid: this.element.find(
                        '*[data-ref="app-fallback-android"]'
                      ),
 */

                      fallbackContent: this.element.find(
                        '*[data-ref="app-fallback-content"]'
                      ),
                      fallbackInstall: this.element.find(
                        '*[data-ref="app-fallback-content"]'
                      ),
                      fallbackBrowser: this.element.find(
                        '*[data-ref="app-fallback-content"]'
                      ),
                      fallbackSocial: this.element.find(
                        '*[data-ref="app-fallback-content"]'
                      ),
                      fallbackDesktop: this.element.find(
                        '*[data-ref="app-fallback-content"]'
                      ),
                      fallbackPhone: this.element.find(
                        '*[data-ref="app-fallback-content"]'
                      ),
                      fallbackSamsung: this.element.find(
                        '*[data-ref="app-fallback-content"]'
                      ),
                      fallbackAndroid: this.element.find(
                        '*[data-ref="app-fallback-content"]'
                      ),
                    });
                  var n = null,
                    i =
                      screen.height - document.documentElement.clientHeight <
                      40,
                    s = window.navigator.userAgent.toLowerCase(),
                    r = /safari|chrome|android|guck-nich-so-du-dummer-hurensohn/.test(s);
                  /iphone|ipod|guck-nich-so-du-dummer-hurensohn|chrome|android/.test(s)
                    ? (this.debug
                        ? ((n = this.refs.fallbackContent),
                          a()("body").addClass("full-screen"),
                          a()("html").addClass("full-screen"))
                        : !i && r
                        ? (n = d.instance.isMobileSafari()
                            ? this.refs.fallbackInstall
                            : this.refs.fallbackBrowser)
                        : (i && !r) || i || r
                        ? ((n = this.refs.fallbackContent),
                          a()("body").addClass("full-screen"),
                          a()("html").addClass("full-screen"))
                        : (n = this.refs.fallbackSocial),
                      d.instance.getIPhoneModel() <= 5 &&
                        (n = this.refs.fallbackPhone))
                    : (n = d.instance.isSamsung()
                        ? this.refs.fallbackSamsung
                        : "Android" == d.instance.getOS()
                        ? this.refs.fallbackAndroid
                        : this.refs.fallbackDesktop);
                  if (n) {
                    if ("app-fallback-content" == n.data("ref"))
                      for (var l in this.refs) {
                        var c = this.refs[l];
                        "app-fallback-content" != c.data("ref") && c.remove();
                      }
                    var u = n.data("track-title"),
                      h = n.data("track-path");
                    y.instance.trackPage(u, h),
                      o.a.set(n, { visibility: "visible" });
                  }
                },
              },
            ]),
            e
          );
        })(),
        v = (function () {
          function e(t, n) {
            g(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            b(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { START: "CApp.EVENT.START" };
                },
              },
            ]),
            b(e, [
              {
                key: "render",
                value: function (e, t) {
                  new w(e, t);
                },
              },
            ]),
            e
          );
        })();
      function T(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var k = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, i;
        return (
          (t = e),
          (i = [
            {
              key: "spanize",
              value: function (e) {
                e = e.split(" ");
                for (var t = "", n = 0; n < e.length; n++)
                  t += "<span>" + e[n] + "</span>";
                return t;
              },
            },
            {
              key: "toNumber",
              value: function (e) {
                return e < 10 ? "0" + e : e;
              },
            },
            {
              key: "toMonthName",
              value: function (e) {
                return [
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
                  "December",
                ][e];
              },
            },
            {
              key: "toWeekdayName",
              value: function (e) {
                return [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ][e];
              },
            },
            {
              key: "slugfy",
              value: function (e) {
                return e
                  .replace(/[ÁÀÂÃÄ]/gi, "a")
                  .replace(/[ÉÈÊË]/gi, "e")
                  .replace(/[ÍÌÎÏ]/gi, "i")
                  .replace(/[ÓÒÔÕÖ]/gi, "o")
                  .replace(/[ÚÙÛÜ]/gi, "u")
                  .replace(/[Ç]/gi, "c")
                  .toLowerCase()
                  .replace(/^\s+|\s+$/g, "")
                  .replace(/[_|\s]+/g, "-")
                  .replace(/[^a-z0-9-\/]+/g, "")
                  .replace(/[-]+/g, "-")
                  .replace(/^-+|-+$/g, "");
              },
            },
          ]),
          (n = null) && T(t.prototype, n),
          i && T(t, i),
          e
        );
      })();
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var O = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, i;
        return (
          (t = e),
          (i = [
            {
              key: "getDiff",
              value: function (e, t) {
                return e > t ? e - t : t - e;
              },
            },
            {
              key: "getDistance",
              value: function (t, n, i, a) {
                var o = e.getDiff(t, i),
                  s = e.getDiff(n, a);
                return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2));
              },
            },
          ]),
          (n = null) && C(t.prototype, n),
          i && C(t, i),
          e
        );
      })();
      function P(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function N(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function _(e, t, n) {
        return t && N(e.prototype, t), n && N(e, n), e;
      }
      var S = (function () {
          function e(t, n) {
            P(this, e), this.render(t, n);
          }
          return (
            _(e, [
              {
                key: "animate",
                value: function () {
                  o.a.fromTo(
                    this.refs.pulse,
                    { scale: 0.7 },
                    { scale: 1, duration: 2, ease: "power3.out" }
                  ),
                    o.a.fromTo(
                      this.refs.pulse,
                      { opacity: 0.1 },
                      {
                        opacity: 0,
                        duration: 0.8,
                        delay: 1.2,
                        ease: "none",
                        onComplete: this.animate.bind(this),
                      }
                    );
                },
              },
              {
                key: "on_TOUCH_END",
                value: function (e) {
                  e.preventDefault(),
                    o.a.set(this.refs.pulseContainer, { opacity: 1 }),
                    o.a.killTweensOf(this.refs.background),
                    (this.currentScale = 1),
                    o.a.killTweensOf([
                      this.refs.overlay,
                      this.refs.background,
                      this.element,
                      this.refs.nextButton,
                    ]),
                    o.a.to(this.refs.overlay, {
                      scale: this.currentScale ? 1 : 0.2,
                      duration: 0.2,
                      ease: "power3.out",
                    }),
                    o.a.to(this.refs.background, {
                      scale: this.currentScale ? 1 : 0.2,
                      duration: 0.3,
                      ease: "power3.out",
                    }),
                    this.currentScale
                      ? (this.element.css("pointer-events", "none"),
                        this.refs.nextButton.css("pointer-events", "none"),
                        o.a.to(this.refs.nextButton, {
                          opacity: 0,
                          duration: 0.3,
                          ease: "power3.out",
                        }),
                        o.a.to(this.element, {
                          opacity: 0,
                          duration: 0.3,
                          ease: "power3.out",
                        }),
                        "start" == this.data.id
                          ? a()(window).trigger(A.EVENT.START)
                          : a()(window).trigger(A.EVENT.END))
                      : (o.a.to(this.refs.nextButton, {
                          opacity: 1,
                          duration: 0.3,
                          ease: "power3.out",
                        }),
                        o.a.to(this.element, {
                          opacity: 1,
                          duration: 0.3,
                          ease: "power3.out",
                        })),
                    a()(document).off("touchend"),
                    a()(document).off("touchmove");
                },
              },
              {
                key: "on_TOUCH_MOVE",
                value: function (e) {
                  e.preventDefault();
                  var t = e.touches[0] || e.changedTouches[0];
                  this.currentTouchPosition = {
                    x: t.pageX - this.initialTouchPosition.x,
                    y: t.pageY - this.initialTouchPosition.y,
                  };
                  var n = O.getDistance(
                    0,
                    0,
                    this.currentTouchPosition.x,
                    this.currentTouchPosition.y
                  );
                  (this.currentScale = n / 200),
                    (this.currentScale =
                      this.currentScale < 0 ? 0 : this.currentScale),
                    (this.currentScale =
                      this.currentScale > 1 ? 1 : this.currentScale);
                  var i = 0.8 * this.currentScale;
                  i = (i = i > 0.8 ? 0.8 : i) < 0 ? 0 : i;
                  var a = -1 * (0.8 - this.currentScale);
                  (a = a < 0 ? 0 : a),
                    (a *= 5),
                    o.a.to(this.refs.nextButton, {
                      opacity: 1 - a,
                      duration: 0.2,
                      ease: "none",
                    }),
                    o.a.to(this.refs.overlay, {
                      scale: 0.2 + i,
                      duration: 0.2,
                      ease: "none",
                    });
                },
              },
              {
                key: "hit_TOUCH_START",
                value: function (e) {
                  e.preventDefault(), (this.currentScale = 0);
                  var t = e.touches[0] || e.changedTouches[0];
                  (this.initialTouchPosition = { x: t.pageX, y: t.pageY }),
                    (this.currentTouchPosition = {
                      x: t.pageX - this.initialTouchPosition.x,
                      y: t.pageY - this.initialTouchPosition.y,
                    }),
                    o.a.set(this.refs.pulseContainer, { opacity: 0 }),
                    o.a.killTweensOf(this.refs.background),
                    o.a.to(this.refs.background, {
                      scale: 1,
                      duration: 0.6,
                      ease: "power3.out",
                    }),
                    a()(document).on("touchend", this.on_TOUCH_END.bind(this)),
                    a()(document).on(
                      "touchmove",
                      this.on_TOUCH_MOVE.bind(this)
                    );
                },
              },
              {
                key: "reset",
                value: function () {
                  this.element.css("pointer-events", "auto"),
                    this.refs.nextButton.css("pointer-events", "auto"),
                    (this.currentScale = 0),
                    o.a.set(this.refs.background, { scale: 0.2 }),
                    o.a.set(this.refs.overlay, { scale: 0 }),
                    o.a.set(this.refs.nextButton, { opacity: 1 }),
                    o.a.set(this.element, { opacity: 1 });
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.currentScale = 0),
                    (this.initialTouchPosition = { x: 0, y: 0 }),
                    (this.currentTouchPosition = { x: 0, y: 0 }),
                    (this.data = {
                      id: this.element.data("button-call-id"),
                      next: this.element.data("button-call-extra"),
                    }),
                    (this.refs = {
                      pulseContainer: this.element.find(
                        '*[data-ref="button-call-pulse-container"]'
                      ),
                      background: this.element.find(
                        '*[data-ref="button-call-background"]'
                      ),
                      overlay: this.element.find(
                        '*[data-ref="button-call-overlay"]'
                      ),
                      pulse: this.element.find(
                        '*[data-ref="button-call-pulse"]'
                      ),
                      hit: this.element.find('*[data-ref="button-call-hit"]'),
                      nextButton: a()("*[".concat(this.data.next, "]")),
                    }),
                    a()(this.refs.hit).on(
                      "touchstart",
                      this.hit_TOUCH_START.bind(this)
                    ),
                    this.animate(),
                    a()(window).on(A.EVENT.RESET, this.reset.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        A = (function () {
          function e(t, n) {
            P(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            _(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    START: "CAppButtonCall.EVENT.START",
                    END: "CAppButtonCall.EVENT.END",
                    RESET: "CAppButtonCall.EVENT.RESET",
                  };
                },
              },
            ]),
            _(e, [
              {
                key: "render",
                value: function (e, t) {
                  new S(e, t);
                },
              },
            ]),
            e
          );
        })(),
        I = A;
      function V(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var x = (function () {
        var e, t, n;
        function i(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            (this.volume = 1);
        }
        return (
          (e = i),
          (n = [
            {
              key: "EVENT",
              get: function () {
                return {};
              },
            },
            {
              key: "instance",
              get: function () {
                return (
                  this._instance ||
                    (this._instance = new i("singletonEnforcer")),
                  this._instance
                );
              },
            },
          ]),
          (t = null) && V(e.prototype, t),
          n && V(e, n),
          i
        );
      })();
      function L(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var D = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, i;
        return (
          (t = e),
          (i = [
            {
              key: "shuffle",
              value: function (e) {
                var t, n, i;
                for (i = e.length - 1; i > 0; i--)
                  (t = Math.floor(Math.random() * (i + 1))),
                    (n = e[i]),
                    (e[i] = e[t]),
                    (e[t] = n);
                return e;
              },
            },
            {
              key: "rotate",
              value: function (e, t) {
                return (
                  (t -= (e = this.clone(e)).length * Math.floor(t / e.length)),
                  e.push.apply(e, e.splice(0, t)),
                  e
                );
              },
            },
            {
              key: "clone",
              value: function (e) {
                return e.slice();
              },
            },
          ]),
          (n = null) && L(t.prototype, n),
          i && L(t, i),
          e
        );
      })();
      function R(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function B(e, t, n) {
        return t && R(e.prototype, t), n && R(e, n), e;
      }
      var M = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.date = new Date()),
            (this.isAutoTextInited = !1),
            (this.isSamTextApplied = !1),
            (this.isDeveloperTextApplied = !1),
            (this.data = [
              {
                name: "Sam",
                color: "#85e3c9",
                phone: "+64**********",
                time: new Date(),
                isDraft: !1,
                chat: [],
                reply: {
                  messages: [
                    "This is a ‘slimmed down’ experience, you won’t be able to do ‘everything’ you can on the real phone. It’s more about seeing that it’s easy to jump in, the waters fine.",
                    "Keep looking around and I’ll call you soon.",
                    "There are lots of other apps to play around with, not just text. Go explore.",
                  ],
                },
                push: {
                  messages: [
                    {
                      delay: 5,
                      text: "Welcome to the other side. Swipe up, down, left and right, see what everything does, tap on all the apps, make yourself at home… it’s your phone after all.",
                    },
                  ],
                },
              },
              {
                name: "Logan Dodds",
                color: "#83d9b2",
                phone: "+64**********",
                time: new Date(),
                isDraft: !1,
                chat: [],
                reply: {
                  messages: [
                    "Hey, just jumping on a helicopter, will text back when I land.",
                    "Hey, just at some epic beach somewhere, can’t talk now, will text back later.",
                    "Hey, sorry haven’t had time to read your messages, just about to go diving in this amazing location.",
                  ],
                },
                push: {
                  messages: [
                    {
                      delay: 60,
                      text: "Hey, it’s Logan. Check out the camera. I’ve put together a little walk through for you. Enjoy.",
                    },
                  ],
                },
              },
              {
                name: "Generic friend 1",
                color: "#9dd894",
                phone: "+64**********",
                time: new Date(),
                isDraft: !1,
                chat: [
                  {
                    message: "What’s up?",
                    direction: "from",
                    type: "text",
                    minutesPast: 30,
                    readed: !0,
                  },
                  {
                    message:
                      "Not much, have cleared my calendar to try out this android on apple thing.",
                    direction: "to",
                    type: "text",
                    minutesPast: 28,
                    readed: !0,
                  },
                  {
                    message: "What?",
                    direction: "from",
                    type: "text",
                    minutesPast: 26,
                    readed: !0,
                  },
                  {
                    message: "Never mind.",
                    direction: "to",
                    type: "text",
                    minutesPast: 24,
                    readed: !0,
                  },
                  {
                    message:
                      "Helen just told me you have me in your phone as Generic Friend 1. I really don’t know how I feel about that.",
                    direction: "from",
                    type: "text",
                    minutesPast: 22,
                    readed: !0,
                  },
                  {
                    message: "",
                    direction: "from",
                    type: "image",
                    image:
                      "https://media.giphy.com/media/l3q2K5jinAlChoCLS/source.gif",
                    minutesPast: 21,
                    readed: !0,
                  },
                  {
                    message:
                      "You should be flattered you are Generic Friend 1 and not Generic Friend 2.",
                    direction: "to",
                    type: "text",
                    minutesPast: 20,
                    readed: !0,
                  },
                  {
                    message: "Good point.",
                    direction: "from",
                    type: "text",
                    minutesPast: 18,
                    readed: !0,
                  },
                ],
                reply: {
                  messages: [
                    "I’m in a meeting, this is the generic response my phone suggests. Seems fitting for a generic friend.",
                    "Was that to me?",
                    "Have you finished your iTest yet? Seen the light?",
                  ],
                },
                push: {
                  messages: [
                    {
                      delay: 15,
                      text: "Check out Themes. It’s an app on your homescreen. Your phone shouldn’t be generic, so Samsung lets you transform the whole design. Try applying one now.",
                    },
                  ],
                },
              },
              {
                name: "Friend with kids",
                color: "#c2cf75",
                phone: "+64**********",
                time: new Date(),
                isDraft: !1,
                chat: [
                  {
                    message: "Hjdnks",
                    direction: "from",
                    type: "text",
                    minutesPast: 20,
                    readed: !0,
                  },
                  {
                    message: "Ijdfb sieufienfos",
                    direction: "from",
                    type: "text",
                    minutesPast: 19,
                    readed: !0,
                  },
                  {
                    message: "seodoijfsef",
                    direction: "from",
                    type: "text",
                    minutesPast: 18,
                    readed: !0,
                  },
                  {
                    message: "",
                    direction: "from",
                    type: "image",
                    image: "".concat(
                      host,
                      "./assets/img/messages/message-1.jpg"
                    ),
                    minutesPast: 17,
                    readed: !0,
                  },
                  {
                    message: "Picture",
                    direction: "from",
                    type: "image",
                    image: "".concat(
                      host,
                      "./assets/img/messages/message-2.jpg"
                    ),
                    minutesPast: 15,
                    readed: !0,
                  },
                ],
                reply: { messages: ["Hnndfk djfn", "Od eindfim", "uNdlsndo"] },
                push: {
                  messages: [
                    { delay: 180, text: "hbsjissesdfsdf" },
                    {
                      delay: 10,
                      text: "Sorry, my daughter was playing with my phone. You’re lucky, you’ve got Samsung Kids, make sure you check it out… life saver!",
                    },
                  ],
                },
              },
            ]),
            this.preloadChatImages();
        }
        return (
          B(e, null, [
            {
              key: "EVENT",
              get: function () {
                return {
                  UPDATE: "CAppMessagesData.EVENT.UPDATE",
                  NEW_MESSAGE: "CAppMessagesData.EVENT.NEW_MESSAGE",
                };
              },
            },
            {
              key: "instance",
              get: function () {
                return (
                  this._instance ||
                    (this._instance = new e("singletonEnforcer")),
                  (window.notifications = this),
                  this._instance
                );
              },
            },
          ]),
          B(e, [
            {
              key: "preloadChatImages",
              value: function () {
                for (var e = 0; e < this.data.length; e++) {
                  this.data[e].chat.forEach(function (e) {
                    "image" == e.type &&
                      ((e.texture = new Image()),
                      (e.texture.src = e.image),
                      (e.texture.onload = function () {}));
                  });
                }
              },
            },
            {
              key: "startAutoText",
              value: function () {
                if (!this.isAutoTextInited) {
                  this.isAutoTextInited = !0;
                  for (var e = 0; e < this.data.length; e++) {
                    var t = this.data[e];
                    if ((o.a.killTweensOf(t), t.push)) {
                      t.push.counter || (t.push.counter = 0);
                      var n = t.push.messages[t.push.counter].delay;
                      this.delayNotification(t, n);
                    }
                  }
                }
              },
            },
            { key: "startCallText", value: function () {} },
            {
              key: "startDeveloperText",
              value: function () {
                if (!this.isDeveloperTextApplied) {
                  this.isDeveloperTextApplied = !0;
                  var t = {
                    name: "Dev",
                    color: "#000000",
                    phone: "danillocastilho on github",
                    time: new Date(),
                    isDraft: !1,
                    chat: [
                      {
                        message:
                          "Made with love by few nerds on an island country in the southwestern Pacific Ocean. 🖤",
                        direction: "from",
                        type: "text",
                        minutesPast: 1,
                        readed: !0,
                      },
                    ],
                    reply: { messages: [] },
                    push: { messages: [] },
                  };
                  this.data.push(t), a()(window).trigger(e.EVENT.UPDATE);
                }
              },
            },
            {
              key: "maskChatAsReaded",
              value: function (t) {
                for (var n = this.data[t], i = 0; i < n.chat.length; i++) {
                  n.chat[i].readed = !0;
                }
                a()(window).trigger(e.EVENT.UPDATE);
              },
            },
            {
              key: "pushUserMessage",
              value: function (t, n) {
                this.data[t].chat.push(n), a()(window).trigger(e.EVENT.UPDATE);
              },
            },
            {
              key: "delayNotification",
              value: function (e, t) {
                if (e.push.messages[e.push.counter]) {
                  e.push.messages[e.push.counter];
                  o.a.killTweensOf(e),
                    o.a.fromTo(
                      e,
                      {},
                      {
                        duration: t,
                        delay: 0,
                        onComplete: this.pushNotificationMessage.bind(this),
                        onCompleteParams: [e],
                      }
                    );
                }
              },
            },
            {
              key: "pushNotificationMessage",
              value: function (t) {
                var n = t.push.messages[t.push.counter],
                  i = !t.chat.filter(function (e) {
                    return !e.readed;
                  }).length;
                if (
                  "messages" == window.app ||
                  "camera" == window.app ||
                  "kids" == window.app ||
                  !i ||
                  window.calling ||
                  window.dashboardSearchOpen ||
                  window.dashboardNotificationOpen
                )
                  this.delayNotification(t, n.delay);
                else {
                  var o = {
                    message: n.text,
                    direction: "from",
                    type: "text",
                    minutesPast: 0,
                    readed: !1,
                  };
                  (t.time = new Date()),
                    t.push.counter++,
                    t.chat.push(o),
                    a()(window).trigger(e.EVENT.UPDATE),
                    a()(window).trigger(e.EVENT.NEW_MESSAGE, [t]);
                  var s = t.push.messages[t.push.counter];
                  s && this.delayNotification(t, s.delay);
                }
              },
            },
            {
              key: "pushExternalMessage",
              value: function (t) {
                this.data.filter(function (e) {
                  return e.name == t.name;
                }).length
                  ? this.pushBotMessage(t.name, t.chat[0])
                  : (this.data.unshift(t),
                    a()(window).trigger(e.EVENT.UPDATE),
                    a()(window).trigger(e.EVENT.NEW_MESSAGE, [t]));
              },
            },
            {
              key: "pushBotMessage",
              value: function (t, n) {
                for (var i = -1, o = 0; o < this.data.length; o++) {
                  this.data[o].name == t && (i = o);
                }
                -1 != i &&
                  (this.data[i].chat.push(n),
                  (this.data[i].time = new Date()),
                  a()(window).trigger(e.EVENT.NEW_MESSAGE, [this.data[i]]),
                  a()(window).trigger(e.EVENT.UPDATE));
              },
            },
          ]),
          e
        );
      })();
      function U(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function H(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function K(e, t, n) {
        return t && H(e.prototype, t), n && H(e, n), e;
      }
      var q = (function () {
          function e(t, n) {
            U(this, e), this.render(t, n);
          }
          return (
            K(e, [
              {
                key: "toHex",
                value: function (e) {
                  var t = e.toString(16);
                  return 1 == t.length ? "0" + t : t;
                },
              },
              {
                key: "parseColor",
                value: function (e) {
                  var t = [];
                  return (
                    e.replace(/[\d+\.]+/g, function (e) {
                      t.push(parseFloat(e));
                    }),
                    {
                      hex: "#" + t.slice(0, 3).map(this.toHex).join(""),
                      opacity: 4 == t.length ? t[3] : 1,
                    }
                  );
                },
              },
              {
                key: "open",
                value: function (e, t, n) {
                  if (window.interactive && !this.onTransition) {
                    switch (
                      ((window.calling = !0),
                      this.disableDetails(),
                      this.disableStatus(),
                      this.disableOptions(),
                      a()(window).trigger(j.EVENT.ON_OPEN),
                      a()(window).trigger(I.EVENT.RESET),
                      (this.onTransition = !1),
                      (this.counter = 0),
                      (this.state.callType = t),
                      this.element.css("display", "block"),
                      o.a.killTweensOf(this.element),
                      o.a.set(this.element, { color: "#fff" }),
                      o.a.set(this.refs.overlay, { opacity: 0 }),
                      o.a.set(this.refs.buttonEnd, { opacity: 1 }),
                      o.a.set(this.refs.optionsOut, { opacity: 1 }),
                      t)
                    ) {
                      case j.TYPE.OUTGOING:
                        this.refs.number.html(n.phone),
                          this.refs.country.html(n.country),
                          this.refs.optionsOut.css("display", "block"),
                          this.refs.optionsCalling.css("display", "block"),
                          this.refs.statusCalling.css("display", "block"),
                          (this.refs.audioOut.currentTime = 0),
                          this.refs.audioOut.play(),
                          o.a.set(this.refs.optionsBackground, { opacity: 1 }),
                          y.instance.trackPage("Phone", "/app/phone/outgoing");
                        break;
                      case j.TYPE.INCOMING:
                        o.a.killTweensOf(this.animation),
                          this.refs.number.html(n.name),
                          this.refs.country.html(n.phone);
                        var i = new Date();
                        i.setMinutes(i.getMinutes() - 30);
                        var s = k.toNumber(i.getHours()),
                          r = k.toNumber(i.getMinutes());
                        this.refs.recentCallTime.html(
                          "".concat(s, ":").concat(r)
                        ),
                          this.refs.optionsIn.css("display", "block"),
                          this.refs.optionsRecentCall.css("display", "block"),
                          this.refs.statusIncoming.css("display", "block"),
                          (this.refs.audioIn.currentTime = 0),
                          (this.refs.audioRingtone.currentTime = 0),
                          this.refs.audioRingtone.play(),
                          o.a.set(this.refs.optionsBackground, { opacity: 0 }),
                          y.instance.trackPage("Phone", "/app/phone/incoming");
                    }
                    o.a.fromTo(
                      this.element,
                      { opacity: 0, scale: 1 },
                      {
                        opacity: 1,
                        scale: 1,
                        delay: 1,
                        duration: 0.3,
                        ease: "power3.out",
                      }
                    ),
                      o.a.killTweensOf([
                        this.refs.backgroundCircle1,
                        this.refs.backgroundCircle2,
                      ]),
                      o.a.set(
                        [
                          this.refs.backgroundCircle1,
                          this.refs.backgroundCircle2,
                        ],
                        { scale: 0 }
                      ),
                      o.a.set(this.refs.country, { opacity: 1 }),
                      o.a.killTweensOf(this.refs.background),
                      o.a.set(this.refs.background, { opacity: 1 });
                  }
                },
              },
              { key: "onOpen", value: function () {} },
              {
                key: "close",
                value: function () {
                  o.a.to(this.element, {
                    opacity: 0,
                    delay: 1,
                    duration: 0.3,
                    ease: "power3.out",
                    onStart: function () {
                      a()(window).trigger(j.EVENT.CLOSE);
                    },
                    onComplete: this.onClose.bind(this),
                  });
                },
              },
              {
                key: "onClose",
                value: function () {
                  a()(window).trigger(j.EVENT.ON_CLOSE),
                    this.element.css("display", "none"),
                    (this.onTransition = !1),
                    (window.calling = !1);
                },
              },
              {
                key: "update",
                value: function () {
                  this.counter++, this.setTime();
                },
              },
              {
                key: "answer",
                value: function () {
                  this.state.isCallAnswerd ||
                    (o.a.set(this.refs.optionsBackground, { opacity: 1 }),
                    y.instance.trackPage("Phone", "/app/phone/answer"),
                    (this.state.isCallAnswerd = !0),
                    this.disableStatus(),
                    this.disableOptions(),
                    this.refs.statusAnswer.css("display", "block"),
                    this.refs.optionsOut.css("display", "block"),
                    this.refs.optionsCalling.css("display", "block"),
                    o.a.fromTo(
                      this.refs.buttonEnd,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.4, ease: "power3.out" }
                    ),
                    o.a.to(this.refs.country, {
                      opacity: 0,
                      duration: 0.4,
                      ease: "power3.out",
                    }),
                    (this.counter = 0),
                    this.setTime(),
                    (this.timer = setInterval(this.update.bind(this), 1e3)),
                    this.refs.audioRingtone.paused ||
                      (this.refs.audioRingtone.pause(),
                      (this.refs.audioRingtone.currentTime = 0),
                      (this.refs.audioIn.currentTime = 0),
                      this.refs.audioIn.play()),
                    o.a.fromTo(
                      [
                        this.refs.backgroundCircle1,
                        this.refs.backgroundCircle2,
                      ],
                      { scale: 0 },
                      { scale: 2, duration: 3, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.refs.background,
                      { opacity: 1 },
                      { opacity: 0, duration: 2, delay: 1, ease: "power3.out" }
                    ));
                },
              },
              {
                key: "hangup",
                value: function () {
                  this.onTransition ||
                    ((this.onTransition = !0),
                    o.a.set(this.refs.optionsBackground, { opacity: 0 }),
                    this.refs.audioOut.paused ||
                      (this.refs.audioOut.pause(),
                      (this.refs.audioOut.currentTime = 0)),
                    this.refs.audioIn.paused ||
                      (this.refs.audioIn.pause(),
                      (this.refs.audioIn.currentTime = 0)),
                    this.disableOptions(),
                    this.state.isCallAnswerd ||
                      o.a.set(this.refs.optionsOut, { opacity: 0 }),
                    this.refs.optionsOut.css("display", "block"),
                    this.refs.optionsEndCall.css("display", "block"),
                    clearInterval(this.timer),
                    this.disableStatus(),
                    this.refs.statusEnd.css("display", "block"),
                    0 == this.counter
                      ? this.refs.time.html("")
                      : this.setTime(),
                    (this.state.isCallAnswerd = !1),
                    o.a.fromTo(
                      this.refs.overlay,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.2, ease: "power3.out" }
                    ),
                    o.a.to(this.refs.buttonEnd, {
                      opacity: 0,
                      duration: 0.2,
                      ease: "power3.out",
                    }),
                    (this.currentColor = this.parseColor(
                      this.refs.overlayColor.css("background-color")
                    )),
                    (this.currentColor = parseInt(
                      this.currentColor.hex.replace("#", "0x")
                    )),
                    this.currentColor >= 16e6 &&
                      o.a.to(this.element, {
                        color: "#000",
                        duration: 0.2,
                        ease: "power3.out",
                      }),
                    o.a.to(this.refs.country, {
                      opacity: 0,
                      duration: 0.2,
                      ease: "power3.out",
                    }),
                    o.a.fromTo(
                      this.refs.time,
                      { opacity: 0 },
                      {
                        opacity: 1,
                        duration: 0.4,
                        yoyo: !0,
                        ease: "none",
                        repeat: 4,
                        onComplete: this.on_HANGUP.bind(this),
                      }
                    ),
                    a()(window).trigger(j.EVENT.ON_HANGUP),
                    M.instance.startCallText(),
                    y.instance.trackPage("Phone", "/app/phone/hangup"));
                },
              },
              {
                key: "deny",
                value: function () {
                  this.onTransition ||
                    (this.state.isCallAnswerd
                      ? this.hangup()
                      : (this.refs.audioRingtone.pause(),
                        (this.refs.audioRingtone.currentTime = 0),
                        (this.onTransition = !0),
                        (this.state.isCallAnswerd = !1),
                        o.a.fromTo(
                          this.element,
                          { opacity: 1 },
                          {
                            opacity: 0,
                            duration: 0.6,
                            scale: 0.6,
                            ease: "power3.inOut",
                            onComplete: this.onClose.bind(this),
                          }
                        ),
                        a()(window).trigger(j.EVENT.ON_DENY),
                        M.instance.startCallText(),
                        y.instance.trackPage("Phone", "/app/phone/deny")));
                },
              },
              {
                key: "on_HANGUP",
                value: function () {
                  o.a.to(this, {
                    duration: 1,
                    onComplete: this.close.bind(this),
                  });
                },
              },
              {
                key: "setTime",
                value: function () {
                  var e = Math.floor(this.counter / 60),
                    t = this.counter % 60,
                    n = "".concat(k.toNumber(e), ":").concat(k.toNumber(t));
                  this.refs.time.html(n);
                },
              },
              {
                key: "disableStatus",
                value: function () {
                  this.refs.statusCalling.css("display", "none"),
                    this.refs.statusAnswer.css("display", "none"),
                    this.refs.statusEnd.css("display", "none"),
                    this.refs.statusIncoming.css("display", "none");
                },
              },
              {
                key: "disableOptions",
                value: function () {
                  this.refs.optionsCalling.css("display", "none"),
                    this.refs.optionsEndCall.css("display", "none"),
                    this.refs.optionsRecentCall.css("display", "none"),
                    this.refs.optionsIn.css("display", "none"),
                    this.refs.optionsOut.css("display", "none");
                },
              },
              { key: "disableDetails", value: function () {} },
              {
                key: "audioOut_UPDATE",
                value: function () {
                  this.refs.audioOut.currentTime >
                    this.delayToAnswerCallInSeconds && this.answer();
                },
              },
              { key: "audioRingtone_UPDATE", value: function () {} },
              {
                key: "audioIn_ENDED",
                value: function () {
                  this.deny();
                },
              },
              {
                key: "endCounter",
                value: function () {
                  window.calling ||
                  window.news ||
                  "camera" == window.app ||
                  "kids" == window.app
                    ? o.a.fromTo(
                        this.animation,
                        { value: 0 },
                        {
                          value: 1,
                          duration: 10,
                          onComplete: this.endCounter.bind(this),
                        }
                      )
                    : (o.a.killTweensOf(this.animation), window.call());
                },
              },
              {
                key: "startCounter",
                value: function () {
                  o.a.fromTo(
                    this.animation,
                    { value: 0 },
                    {
                      value: 0,
                      duration: this.delayToCall,
                      onComplete: this.endCounter.bind(this),
                    }
                  );
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.onTransition = !1),
                    (this.delayToAnswerCallInSeconds = 4),
                    (this.delayToCall = 300),
                    (this.state = { callType: "", isCallAnswerd: !1 }),
                    (this.animation = { value: 0 }),
                    (this.timer = null),
                    (this.counter = 0),
                    (this.refs = {
                      audioRingtone: this.element
                        .find(
                          '*[data-ref="app-call-inoutgoing-audio-ringtone"]'
                        )
                        .get(0),
                      audioOut: this.element
                        .find('*[data-ref="app-call-inoutgoing-audio-out"]')
                        .get(0),
                      audioIn: this.element
                        .find('*[data-ref="app-call-inoutgoing-audio-in"]')
                        .get(0),
                      background: this.element.find(
                        '*[data-ref="app-call-inoutgoing-background"]'
                      ),
                      backgroundCircle1: this.element.find(
                        '*[data-ref="app-call-inoutgoing-background-circle-1"]'
                      ),
                      backgroundCircle2: this.element.find(
                        '*[data-ref="app-call-inoutgoing-background-circle-2"]'
                      ),
                      number: this.element.find(
                        '*[data-ref="app-call-inoutgoing-number"]'
                      ),
                      country: this.element.find(
                        '*[data-ref="app-call-inoutgoing-country"]'
                      ),
                      buttonStart: this.element.find(
                        '*[data-ref="app-call-button-start"]'
                      ),
                      buttonEnd: this.element.find(
                        '*[data-ref="app-call-button-end"]'
                      ),
                      buttonDeny: this.element.find(
                        '*[data-ref="app-call-button-deny"]'
                      ),
                      statusCalling: this.element.find(
                        '*[data-ref="app-call-inoutgoing-status-calling"]'
                      ),
                      statusAnswer: this.element.find(
                        '*[data-ref="app-call-inoutgoing-status-answer"]'
                      ),
                      statusEnd: this.element.find(
                        '*[data-ref="app-call-inoutgoing-status-end"]'
                      ),
                      statusIncoming: this.element.find(
                        '*[data-ref="app-call-inoutgoing-status-incoming"]'
                      ),
                      time: this.element.find(
                        '*[data-ref="app-call-inoutgoing-time"]'
                      ),
                      recentCallTime: this.element.find(
                        '*[data-ref="app-call-inoutgoing-options-recent-call-time"]'
                      ),
                      overlay: this.element.find(
                        '*[data-ref="app-call-inoutgoing-overlay"]'
                      ),
                      overlayColor: this.element.find(
                        '*[data-ref="app-call-inoutgoing-overlay-color"]'
                      ),
                      optionsBackground: this.element.find(
                        '*[data-ref="app-call-inoutgoing-options-background"]'
                      ),
                      optionsCalling: this.element.find(
                        '*[data-ref="app-call-inoutgoing-options-calling"]'
                      ),
                      optionsEndCall: this.element.find(
                        '*[data-ref="app-call-inoutgoing-options-end-call"]'
                      ),
                      optionsRecentCall: this.element.find(
                        '*[data-ref="app-call-inoutgoing-options-recent-call"]'
                      ),
                      optionsOut: this.element.find(
                        '*[data-ref="app-call-inoutgoing-options-out"]'
                      ),
                      optionsIn: this.element.find(
                        '*[data-ref="app-call-inoutgoing-options-in"]'
                      ),
                    }),
                    a()(this.refs.buttonEnd).on(
                      "click",
                      this.hangup.bind(this)
                    ),
                    a()(window).on(I.EVENT.START, this.answer.bind(this)),
                    a()(window).on(I.EVENT.END, this.deny.bind(this)),
                    this.refs.audioOut.addEventListener(
                      "timeupdate",
                      this.audioOut_UPDATE.bind(this)
                    ),
                    this.refs.audioOut.addEventListener(
                      "ended",
                      this.hangup.bind(this)
                    ),
                    this.refs.audioRingtone.addEventListener(
                      "timeupdate",
                      this.audioRingtone_UPDATE.bind(this)
                    ),
                    this.refs.audioRingtone.addEventListener(
                      "ended",
                      this.deny.bind(this)
                    ),
                    this.refs.audioIn.addEventListener(
                      "ended",
                      this.audioIn_ENDED.bind(this)
                    ),
                    a()(window).on(j.EVENT.OPEN, this.open.bind(this)),
                    a()(window).on(j.EVENT.CLOSE, this.close.bind(this)),
                    a()(window).on(j.EVENT.START, this.startCounter.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        j = (function () {
          function e(t, n) {
            U(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            K(e, null, [
              {
                key: "TYPE",
                get: function () {
                  return {
                    INCOMING: "CAppCallInOutgoing.EVENT.INCOMING",
                    OUTGOING: "CAppCallInOutgoing.EVENT.OUTGOING",
                  };
                },
              },
              {
                key: "EVENT",
                get: function () {
                  return {
                    START: "CAppCallInOutgoing.EVENT.START",
                    OPEN: "CAppCallInOutgoing.EVENT.OPEN",
                    ON_OPEN: "CAppCallInOutgoing.EVENT.ON_OPEN",
                    CLOSE: "CAppCallInOutgoing.EVENT.CLOSE",
                    ON_CLOSE: "CAppCallInOutgoing.EVENT.ON_CLOSE",
                    ON_HANGUP: "CAppCallInOutgoing.EVENT.ON_HANGUP",
                    ON_DENY: "CAppCallInOutgoing.EVENT.ON_DENY",
                  };
                },
              },
            ]),
            K(e, [
              {
                key: "render",
                value: function (e, t) {
                  new q(e, t);
                },
              },
            ]),
            e
          );
        })(),
        F = j;
      function Y(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function W(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function G(e, t, n) {
        return t && W(e.prototype, t), n && W(e, n), e;
      }
      var X = (function () {
          function e(t, n) {
            Y(this, e), this.render(t, n);
          }
          return (
            G(e, [
              {
                key: "on_OPEN_APP",
                value: function (e, t) {
                  o.a.fromTo(
                    this.element,
                    { scale: 1, opacity: 1 },
                    {
                      scale: 0.9,
                      opacity: 0.5,
                      duration: 0.4,
                      transformOrigin: "50% 100%",
                      delay: t,
                    }
                  );
                },
              },
              {
                key: "on_CLOSE_APP",
                value: function (e, t) {
                  o.a.fromTo(
                    this.element,
                    { scale: 0.9, opacity: 0.5 },
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 0.4,
                      transformOrigin: "50% 100%",
                      delay: t,
                    }
                  );
                },
              },
              {
                key: "outgoing_ON_DENY",
                value: function (e) {
                  o.a.fromTo(
                    this.element,
                    { scale: 0.9, opacity: 0.5 },
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 0.4,
                      transformOrigin: "50% 100%",
                      delay: 0.2,
                    }
                  );
                },
              },
              {
                key: "startAutoText",
                value: function () {
                  "" == window.app && M.instance.startAutoText();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      container: this.element.find(
                        '*[data-ref="dashboard-content-container"]'
                      ),
                    }),
                    a()(window).on(
                      z.EVENT.OPEN_APP,
                      this.on_OPEN_APP.bind(this)
                    ),
                    a()(window).on(
                      z.EVENT.CLOSE_APP,
                      this.on_CLOSE_APP.bind(this)
                    ),
                    a()(window).on(
                      F.EVENT.ON_DENY,
                      this.outgoing_ON_DENY.bind(this)
                    ),
                    a()(this.element).on(
                      "touchend",
                      this.startAutoText.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        z = (function () {
          function e(t, n) {
            Y(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            G(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN_APP: "CDashboardContent.EVENT.OPEN_APP",
                    CLOSE_APP: "CDashboardContent.EVENT.CLOSE_APP",
                  };
                },
              },
            ]),
            G(e, [
              {
                key: "render",
                value: function (e, t) {
                  new X(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Z = z;
      n("Womt");
      function J(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function $(e, t, n) {
        return t && Q(e.prototype, t), n && Q(e, n), e;
      }
      var ee = (function () {
          function e(t, n) {
            J(this, e), this.render(t, n);
          }
          return (
            $(e, [
              {
                key: "on_OPEN_APP",
                value: function (e, t, n) {
                  o.a.to(this.element, {
                    color: "#555555",
                    duration: 0.2,
                    delay: t,
                  }),
                    n ||
                      o.a.set(this.refs.background, {
                        opacity: 0.9,
                        duration: 0.2,
                        delay: t,
                      });
                },
              },
              {
                key: "on_CLOSE_APP",
                value: function (e, t) {
                  o.a.to(this.element, {
                    color: "#ffffff",
                    duration: 0.2,
                    delay: t,
                  }),
                    o.a.set(this.refs.background, {
                      opacity: 0,
                      duration: 0.2,
                      delay: t,
                    });
                },
              },
              {
                key: "outgoing_OPEN",
                value: function () {
                  o.a.to(this.refs.background, {
                    opacity: 0,
                    duration: 0.2,
                    delay: 1,
                  });
                },
              },
              {
                key: "outgoing_ON_HANGUP",
                value: function () {
                  o.a.set(this.refs.background, {
                    opacity: 0.9,
                    duration: 0.2,
                    delay: 0,
                  });
                },
              },
              {
                key: "outgoing_ON_DENY",
                value: function () {
                  o.a.set(this.refs.background, {
                    opacity: 0.9,
                    duration: 0.2,
                    delay: 0.2,
                  });
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      background: this.element.find(
                        '*[data-ref="dashboard-header-background"]'
                      ),
                    }),
                    a()(window).on(
                      te.EVENT.OPEN_APP,
                      this.on_OPEN_APP.bind(this)
                    ),
                    a()(window).on(
                      te.EVENT.CLOSE_APP,
                      this.on_CLOSE_APP.bind(this)
                    ),
                    a()(window).on(
                      F.EVENT.ON_OPEN,
                      this.outgoing_OPEN.bind(this)
                    ),
                    a()(window).on(
                      F.EVENT.ON_HANGUP,
                      this.outgoing_ON_HANGUP.bind(this)
                    ),
                    a()(window).on(
                      F.EVENT.ON_DENY,
                      this.outgoing_ON_DENY.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        te = (function () {
          function e(t, n) {
            J(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            $(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN_APP: "CDashboardHeader.EVENT.OPEN_APP",
                    CLOSE_APP: "CDashboardHeader.EVENT.CLOSE_APP",
                  };
                },
              },
            ]),
            $(e, [
              {
                key: "render",
                value: function (e, t) {
                  new ee(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ne = te;
      function ie(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var ae = (function () {
        var e, t, n;
        function i(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, i),
            (this.props = {});
        }
        return (
          (e = i),
          (n = [
            {
              key: "EVENT",
              get: function () {
                return { UPDATE: "CAppData.EVENT.UPDATE" };
              },
            },
            {
              key: "instance",
              get: function () {
                return (
                  this._instance ||
                    (this._instance = new i("singletonEnforcer")),
                  (window.notifications = this),
                  this._instance
                );
              },
            },
          ]),
          (t = null) && ie(e.prototype, t),
          n && ie(e, n),
          i
        );
      })();
      function oe(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function se(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function re(e, t, n) {
        return t && se(e.prototype, t), n && se(e, n), e;
      }
      var le = (function () {
          function e(t, n) {
            oe(this, e), this.render(t, n);
          }
          return (
            re(e, [
              {
                key: "on_OPEN_APP",
                value: function (e, t) {
                  o.a.set(this.element, {
                    color: "#a8a8a8",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    duration: 0.2,
                    delay: t,
                  });
                },
              },
              {
                key: "on_CLOSE_APP",
                value: function (e, t) {
                  window.dashboardSearchOpen
                    ? o.a.set(this.element, {
                        color: "#ffffff",
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        duration: 0.2,
                        delay: t,
                      })
                    : o.a.set(this.element, {
                        color: "#555555",
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        duration: 0.2,
                        delay: t,
                      });
                },
              },
              {
                key: "on_OPEN_NEWS_APP",
                value: function (e, t) {
                  (window.news = !0),
                    o.a.set(this.element, {
                      color: "#666666",
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      duration: 0.2,
                      delay: t,
                    });
                },
              },
              {
                key: "on_CLOSE_NEWS_APP",
                value: function (e, t) {
                  (window.news = !1),
                    o.a.set(this.element, {
                      color: "#555555",
                      backgroundColor: "rgba(255, 255, 255, 0)",
                      duration: 0.2,
                      delay: t,
                    });
                },
              },
              {
                key: "on_OPEN_DASHBOARD_SEARCH",
                value: function (e, t) {
                  o.a.set(this.element, {
                    color: "#ffffff",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    duration: 0.2,
                    delay: t,
                  });
                },
              },
              {
                key: "on_CLOSE_DASHBOARD_SEARCH",
                value: function (e, t) {
                  o.a.set(this.element, {
                    color: "#555555",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    duration: 0.2,
                    delay: t,
                  });
                },
              },
              {
                key: "on_CLICK_BUTTON_MENU",
                value: function (e) {
                  a()(window).trigger(ce.EVENT.MENU);
                },
              },
              {
                key: "on_CLICK_BUTTON_HOME",
                value: function (e) {
                  if (Je.getInApp("video")) return !1;
                  this.checkClosePermissions()
                    ? (a()(window).trigger(Je.EVENT.CLOSE, [!0]),
                      a()(window).trigger(ce.EVENT.HOME),
                      y.instance.trackPage(
                        "Dashboard",
                        "/app/dashboard/button-home"
                      ))
                    : a()(window).trigger(Je.EVENT.PREVENT_CLOSE);
                },
              },
              {
                key: "on_CLICK_BUTTON_BACK",
                value: function (e) {
                  this.checkClosePermissions()
                    ? (a()(window).trigger(Je.EVENT.CLOSE),
                      a()(window).trigger(ce.EVENT.BACK),
                      y.instance.trackPage(
                        "Dashboard",
                        "/app/dashboard/button-back"
                      ))
                    : a()(window).trigger(Je.EVENT.PREVENT_CLOSE);
                },
              },
              {
                key: "on_CLOSE_PREVENTED_APP",
                value: function () {
                  this.checkClosePermissions()
                    ? (a()(window).trigger(Je.EVENT.CLOSE, [!0]),
                      a()(window).trigger(ce.EVENT.HOME))
                    : a()(window).trigger(Je.EVENT.PREVENT_CLOSE);
                },
              },
              {
                key: "on_touchstart_BUTTON",
                value: function (e) {
                  var t = a()(e.currentTarget).find(
                    '*[data-ref="dashboard-footer-button-overlay"]'
                  );
                  o.a.fromTo(
                    t,
                    { scaleX: 0.6 },
                    { scaleX: 1, duration: 0.4, ease: "power3.out" }
                  ),
                    o.a.fromTo(
                      t,
                      { opacity: 1 },
                      {
                        opacity: 0,
                        duration: 0.4,
                        delay: 0.2,
                        ease: "power3.inOut",
                      }
                    );
                },
              },
              {
                key: "update_THEME_BLACK",
                value: function () {
                  o.a.set(this.refs.overlayBackground, {
                    backgroundColor: "#000",
                  });
                },
              },
              {
                key: "update_THEME_WHITE",
                value: function () {
                  o.a.set(this.refs.overlayBackground, {
                    backgroundColor: "#FFF",
                  });
                },
              },
              {
                key: "outgoing_ON_OPEN",
                value: function () {
                  o.a.set(this.element, {
                    color: "#ffffff",
                    duration: 0.2,
                    delay: 1,
                  }),
                    this.element.css("pointer-events", "none");
                },
              },
              {
                key: "outgoing_ON_CLOSE",
                value: function () {
                  this.element.css("pointer-events", "auto");
                },
              },
              {
                key: "outgoing_ON_DENY_OR_ON_HANGUP",
                value: function () {
                  window.dashboardSearchOpen
                    ? "" != window.app
                      ? o.a.set(this.element, {
                          color: "#555555",
                          duration: 0.2,
                          delay: 0,
                        })
                      : o.a.set(this.element, {
                          color: "#ffffff",
                          duration: 0.2,
                          delay: 0,
                        })
                    : "" != window.app
                    ? o.a.set(this.element, {
                        color: "#a8a8a8",
                        duration: 0.2,
                        delay: 0,
                      })
                    : o.a.set(this.element, {
                        color: "#555555",
                        duration: 0.2,
                        delay: 0,
                      });
                },
              },
              {
                key: "checkClosePermissions",
                value: function () {
                  return (
                    "kids" != window.app || !ae.instance.props.kids.preventClose
                  );
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      background: this.element.find(
                        '*[data-ref="dashboard-footer-background"]'
                      ),
                      overlayBackground: this.element.find(
                        '*[data-ref="dashboard-footer-button-overlay-background"]'
                      ),
                      buttonMenu: this.element.find(
                        '*[data-ref="dashboard-footer-button-menu"]'
                      ),
                      buttonBack: this.element.find(
                        '*[data-ref="dashboard-footer-button-back"]'
                      ),
                      buttonHome: this.element.find(
                        '*[data-ref="dashboard-footer-button-home"]'
                      ),
                      buttonStroke: this.element.find(
                        '*[data-ref="dashboard-footer-button-stroke"]'
                      ),
                    }),
                    a()(window).on(
                      ce.EVENT.OPEN_APP,
                      this.on_OPEN_APP.bind(this)
                    ),
                    a()(window).on(
                      ce.EVENT.CLOSE_APP,
                      this.on_CLOSE_APP.bind(this)
                    ),
                    a()(window).on(
                      ce.EVENT.OPEN_NEWS_APP,
                      this.on_OPEN_NEWS_APP.bind(this)
                    ),
                    a()(window).on(
                      ce.EVENT.CLOSE_NEWS_APP,
                      this.on_CLOSE_NEWS_APP.bind(this)
                    ),
                    a()(window).on(
                      ce.EVENT.OPEN_DASHBOARD_SEARCH,
                      this.on_OPEN_DASHBOARD_SEARCH.bind(this)
                    ),
                    a()(window).on(
                      ce.EVENT.CLOSE_DASHBOARD_SEARCH,
                      this.on_CLOSE_DASHBOARD_SEARCH.bind(this)
                    ),
                    a()(window).on(
                      ce.EVENT.CLOSE_PREVENTED_APP,
                      this.on_CLOSE_PREVENTED_APP.bind(this)
                    ),
                    a()(this.refs.buttonMenu).on(
                      "click",
                      this.on_CLICK_BUTTON_MENU.bind(this)
                    ),
                    a()(this.refs.buttonBack).on(
                      "click",
                      this.on_CLICK_BUTTON_BACK.bind(this)
                    ),
                    a()(this.refs.buttonHome).on(
                      "click",
                      this.on_CLICK_BUTTON_HOME.bind(this)
                    ),
                    a()(this.refs.buttonMenu).on(
                      "touchstart",
                      this.on_touchstart_BUTTON.bind(this)
                    ),
                    a()(this.refs.buttonBack).on(
                      "touchstart",
                      this.on_touchstart_BUTTON.bind(this)
                    ),
                    a()(this.refs.buttonHome).on(
                      "touchstart",
                      this.on_touchstart_BUTTON.bind(this)
                    ),
                    a()(window).on(
                      ce.EVENT.UPDATE_THEME_BLACK,
                      this.update_THEME_BLACK.bind(this)
                    ),
                    a()(window).on(
                      ce.EVENT.UPDATE_THEME_WHITE,
                      this.update_THEME_WHITE.bind(this)
                    ),
                    a()(window).on(
                      F.EVENT.ON_OPEN,
                      this.outgoing_ON_OPEN.bind(this)
                    ),
                    a()(window).on(
                      F.EVENT.ON_CLOSE,
                      this.outgoing_ON_CLOSE.bind(this)
                    ),
                    a()(window).on(
                      F.EVENT.ON_HANGUP,
                      this.outgoing_ON_DENY_OR_ON_HANGUP.bind(this)
                    ),
                    a()(window).on(
                      F.EVENT.ON_DENY,
                      this.outgoing_ON_DENY_OR_ON_HANGUP.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        ce = (function () {
          function e(t, n) {
            oe(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            re(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    HOME: "CDashboardFooter.EVENT.HOME",
                    MENU: "CDashboardFooter.EVENT.MENU",
                    BACK: "CDashboardFooter.EVENT.BACK",
                    UPDATE_THEME_BLACK:
                      "CDashboardFooter.EVENT.UPDATE_THEME_BLACK",
                    UPDATE_THEME_WHITE:
                      "CDashboardFooter.EVENT.UPDATE_THEME_WHITE",
                    OPEN_APP: "CDashboardFooter.EVENT.OPEN_APP",
                    CLOSE_APP: "CDashboardFooter.EVENT.CLOSE_APP",
                    OPEN_NEWS_APP: "CDashboardFooter.EVENT.OPEN_NEWS_APP",
                    CLOSE_NEWS_APP: "CDashboardFooter.EVENT.CLOSE_NEWS_APP",
                    OPEN_DASHBOARD_SEARCH:
                      "CDashboardFooter.EVENT.OPEN_DASHBOARD_SEARCH",
                    CLOSE_DASHBOARD_SEARCH:
                      "CDashboardFooter.EVENT.CLOSE_DASHBOARD_SEARCH",
                    CLOSE_PREVENTED_APP:
                      "CDashboardFooter.EVENT.CLOSE_PREVENTED_APP",
                  };
                },
              },
            ]),
            re(e, [
              {
                key: "render",
                value: function (e, t) {
                  new le(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ue = ce;
      function he(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function de(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function fe(e, t, n) {
        return t && de(e.prototype, t), n && de(e, n), e;
      }
      var pe = (function () {
          function e(t, n) {
            he(this, e), this.render(t, n);
          }
          return (
            fe(e, [
              { key: "on_OPEN_APP", value: function (e, t) {} },
              { key: "on_CLOSE_APP", value: function (e, t) {} },
              {
                key: "outgoing_ON_DENY",
                value: function (e) {
                  o.a.fromTo(
                    this.refs.background,
                    { scale: 1.3 },
                    { scale: 1, duration: 0.4, ease: "power3.out", delay: 0.2 }
                  );
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      background: this.element.find(
                        '*[data-ref="dashboard-background"]'
                      ),
                    }),
                    a()(window).on(
                      me.EVENT.OPEN_APP,
                      this.on_OPEN_APP.bind(this)
                    ),
                    a()(window).on(
                      me.EVENT.CLOSE_APP,
                      this.on_CLOSE_APP.bind(this)
                    ),
                    a()(window).on(
                      F.EVENT.ON_DENY,
                      this.outgoing_ON_DENY.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        me = (function () {
          function e(t, n) {
            he(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            fe(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN_APP: "CDashboard.EVENT.OPEN_APP",
                    CLOSE_APP: "CDashboard.EVENT.CLOSE_APP",
                  };
                },
              },
            ]),
            fe(e, [
              {
                key: "render",
                value: function (e, t) {
                  new pe(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ye = me;
      function ge(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ee(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function be(e, t, n) {
        return t && Ee(e.prototype, t), n && Ee(e, n), e;
      }
      var we = (function () {
          function e(t, n) {
            ge(this, e), this.render(t, n);
          }
          return (
            be(e, [
              {
                key: "on_OPEN_APP",
                value: function (e, t) {
                  o.a.to(this.element, { opacity: 1, duration: 0.4, delay: t });
                },
              },
              {
                key: "on_CLOSE_APP",
                value: function (e, t) {
                  o.a.to(this.element, { opacity: 0, duration: 0.4, delay: t });
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    a()(window).on(
                      ve.EVENT.OPEN_APP,
                      this.on_OPEN_APP.bind(this)
                    ),
                    a()(window).on(
                      ve.EVENT.CLOSE_APP,
                      this.on_CLOSE_APP.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        ve = (function () {
          function e(t, n) {
            ge(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            be(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN_APP: "CDashboardOverlay.EVENT.OPEN_APP",
                    CLOSE_APP: "CDashboardOverlay.EVENT.CLOSE_APP",
                  };
                },
              },
            ]),
            be(e, [
              {
                key: "render",
                value: function (e, t) {
                  new we(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Te = ve;
      function ke(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ce(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Oe(e, t, n) {
        return t && Ce(e.prototype, t), n && Ce(e, n), e;
      }
      var Pe = (function () {
          function e(t, n) {
            ke(this, e), this.render(t, n);
          }
          return (
            Oe(e, [
              {
                key: "on_CLICK",
                value: function (e) {
                  if (window.clickable) {
                    a()(e.currentTarget);
                    a()(window).trigger(Je.EVENT.OPEN, [
                      this.data.name,
                      this.refs.icon,
                    ]);
                  }
                },
              },
              {
                key: "on_APP_INIT",
                value: function (e, t) {
                  t == this.data.name &&
                    this.refs.notification.length &&
                    this.refs.notification.css("display", "none");
                },
              },
              {
                key: "on_APP_DISPOSE",
                value: function (e, t) {
                  t == this.data.name &&
                    this.refs.notification.css("display", "block");
                },
              },
              {
                key: "on_APP_START",
                value: function (e, t) {
                  t == this.data.name &&
                    this.on_CLICK({ currentTarget: this.element });
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    a()(this.element).on("click", this.on_CLICK.bind(this)),
                    (this.data = {
                      name: this.element.data("app-link-id"),
                      isStatic: this.element.data("app-link-static"),
                      location: this.element.data("app-link-location"),
                    }),
                    (this.refs = {
                      notification: this.element.find(
                        '*[data-ref="app-link-notification"]'
                      ),
                      icon: this.element.find('*[data-ref="app-link-icon"]'),
                    }),
                    "dashboard" == this.data.location &&
                      (a()(window).on(
                        Ne.EVENT.START,
                        this.on_APP_START.bind(this)
                      ),
                      this.element.data("debug") &&
                        this.on_CLICK({ currentTarget: this.element })),
                    a()(window).on(Je.EVENT.INIT, this.on_APP_INIT.bind(this)),
                    a()(window).on(
                      Je.EVENT.DISPOSE,
                      this.on_APP_DISPOSE.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        Ne = (function () {
          function e(t, n) {
            ke(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Oe(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { START: "CAppLink.EVENT.START" };
                },
              },
            ]),
            Oe(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Pe(e, t);
                },
              },
            ]),
            e
          );
        })(),
        _e = Ne;
      function Se(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ae(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Ie(e, t, n) {
        return t && Ae(e.prototype, t), n && Ae(e, n), e;
      }
      var Ve = (function () {
          function e(t, n) {
            Se(this, e), this.render(t, n);
          }
          return (
            Ie(e, [
              {
                key: "open",
                value: function (e, t, n, i, a, s) {
                  this.onTransition ||
                    ((this.onTransition = !0),
                    this.refs.title.html(t),
                    this.refs.text.html(n),
                    this.refs.buttonText.html(i),
                    s
                      ? this.refs.shareContainer.css("display", "block")
                      : this.refs.shareContainer.css("display", "none"),
                    a
                      ? (o.a.set(this.refs.image, { display: "block" }),
                        this.refs.imageSource.attr("src", a))
                      : o.a.set(this.refs.image, { display: "none" }),
                    o.a.killTweensOf([this.refs.background, this.refs.content]),
                    this.element.css("display", "block"),
                    o.a.fromTo(
                      this.refs.background,
                      { opacity: 1 },
                      { opacity: 1, duration: 0.6, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.refs.content,
                      { opacity: 0, y: 30 },
                      {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        onComplete: this.on_OPEN.bind(this),
                      }
                    ));
                },
              },
              {
                key: "on_OPEN",
                value: function () {
                  this.onTransition = !1;
                },
              },
              {
                key: "close",
                value: function () {
                  this.onTransition ||
                    ((this.onTransition = !0),
                    o.a.killTweensOf([this.refs.background, this.refs.content]),
                    o.a.to(this.refs.content, {
                      y: 30,
                      opacity: 0,
                      duration: 0.4,
                      ease: "power3.inOut",
                    }),
                    o.a.to(this.refs.background, {
                      opacity: 0,
                      duration: 0.3,
                      ease: "power3.out",
                      delay: 0.3,
                      onComplete: this.on_CLOSE.bind(this),
                    }));
                },
              },
              {
                key: "on_CLOSE",
                value: function () {
                  this.element.css("display", "none"), (this.onTransition = !1);
                },
              },
              {
                key: "button_CLICK",
                value: function () {
                  this.close();
                },
              },
              {
                key: "share_CLICK",
                value: function () {
                  var e = this,
                    t = {
                      title: document.title,
                      text: a()("meta[name=description]").attr("content"),
                      url: location.href.replace("index.html", ""),
                    };
                  if (!navigator.share) return !1;
                  navigator
                    .share(t)
                    .then(function () {
                      e.close();
                    })
                    .catch(function (e) {});
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.onTransition = !1),
                    (this.refs = {
                      background: this.element.find(
                        '*[data-ref="app-alert-background"]'
                      ),
                      content: this.element.find(
                        '*[data-ref="app-alert-content"]'
                      ),
                      title: this.element.find('*[data-ref="app-alert-title"]'),
                      text: this.element.find('*[data-ref="app-alert-text"]'),
                      image: this.element.find('*[data-ref="app-alert-image"]'),
                      imageSource: this.element.find(
                        '*[data-ref="app-alert-image-source"]'
                      ),
                      button: this.element.find(
                        '*[data-ref="app-alert-button"]'
                      ),
                      shareContainer: this.element.find(
                        '*[data-ref="app-alert-share-container"]'
                      ),
                      share: this.element.find('*[data-ref="app-alert-share"]'),
                      buttonText: this.element.find(
                        '*[data-ref="app-alert-button-text"]'
                      ),
                    }),
                    this.refs.button.on("click", this.button_CLICK.bind(this)),
                    this.refs.share.on("click", this.share_CLICK.bind(this)),
                    a()(window).on(xe.EVENT.OPEN, this.open.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        xe = (function () {
          function e(t, n) {
            Se(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Ie(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { OPEN: "CAppAlert.EVENT.OPEN" };
                },
              },
            ]),
            Ie(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Ve(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Le = xe;
      function De(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Re(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Be(e, t, n) {
        return t && Re(e.prototype, t), n && Re(e, n), e;
      }
      var Me = (function () {
          function e(t, n) {
            De(this, e), this.render(t, n);
          }
          return (
            Be(e, [
              {
                key: "on_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget),
                    n = !0,
                    i = [
                      this.data.title,
                      this.data.text,
                      this.data.cta,
                      this.data.image,
                      this.data.share,
                    ],
                    o = t.find('*[data-ref="camera-settings-button-icon"]');
                  o.length && 1 == (o = o.eq(0)).css("opacity") && (n = !1),
                    n &&
                      (this.data.trackTitle &&
                        this.data.trackPath &&
                        y.instance.trackPage(
                          this.data.trackTitle,
                          ""
                            .concat(this.data.trackPath)
                            .concat(this.data.trackAction)
                        ),
                      a()(window).trigger(Le.EVENT.OPEN, i));
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  if (
                    ((this.element = a()(e)),
                    (this.data = {
                      title: this.element.data("app-alert-button-title"),
                      text: this.element.data("app-alert-button-text"),
                      cta: this.element.data("app-alert-button-cta"),
                      image: this.element.data("app-alert-button-image"),
                      share: this.element.data("app-alert-share"),
                      trackTitle: this.element.data("track-title"),
                      trackPath: this.element.data("track-path"),
                      trackAction: "",
                    }),
                    this.data.trackTitle && this.data.trackPath)
                  ) {
                    var n = this.element.data("track-action");
                    n && (this.data.trackAction = k.slugfy(n));
                  }
                  this.element.data("camera-settings-button-id") &&
                    ((this.data.trackTitle = "Camera"),
                    (this.data.trackPath = "/app/camera/settings/"),
                    (this.data.trackAction = this.element.data(
                      "camera-settings-button-id"
                    ))),
                    this.element.on("click", this.on_CLICK.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Ue = (function () {
          function e(t, n) {
            De(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Be(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            Be(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Me(e, t);
                },
              },
            ]),
            e
          );
        })();
      function He(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ke(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function qe(e, t, n) {
        return t && Ke(e.prototype, t), n && Ke(e, n), e;
      }
      var je = (function () {
          function e(t, n) {
            He(this, e), this.render(t, n);
          }
          return (
            qe(e, [
              {
                key: "form_SUBMIT",
                value: function (e) {
                  e.preventDefault();
                },
              },
              {
                key: "field_CHANGE",
                value: function (e) {
                  this.filterApps(), 13 === e.which && this.refs.field.blur();
                },
              },
              {
                key: "field_FOCUS",
                value: function (e) {
                  (this.isOnSearch = !0),
                    this.filterApps(),
                    this.refs.list.css("display", "none"),
                    this.refs.filter.css("display", "block"),
                    this.refs.buttonClose.css("display", "block"),
                    this.refs.buttonOptions.css("display", "none");
                },
              },
              {
                key: "field_BLUR",
                value: function (e) {
                  this.refs.field.val().toLowerCase();
                },
              },
              {
                key: "getFilterText",
                value: function (e) {
                  var t = a()(e).find('*[data-component="app-link"]');
                  return (
                    0 == t.length &&
                      (t = a()(e).find('*[data-component="app-alert-button"]')),
                    t
                      .text()
                      .replace(/([\r\n]+ +)+/gm, "")
                      .toLowerCase()
                  );
                },
              },
              {
                key: "filterApps",
                value: function () {
                  var e = this,
                    t = this.refs.field.val().toLowerCase(),
                    n = this.refs.filterItems.toArray();
                  "" != t &&
                    (n = n.filter(function (n) {
                      return e.getFilterText(n).substr(0, t.length) == t;
                    }));
                  var i = n.sort(function (t, n) {
                    return e.getFilterText(t).localeCompare(e.getFilterText(n));
                  });
                  if (i.length < 4)
                    for (var a = 4 - i.length, o = 0; o < a; o++)
                      i.push(this.template.filterItem.clone());
                  (i = i.slice(0, 4)),
                    this.refs.filterContainer.html(i),
                    new _e(
                      '*[data-component="app-link"]',
                      this.refs.filterContainer.get(0)
                    ),
                    new Ue(
                      '*[data-component="app-alert-button"]',
                      this.refs.filterContainer.get(0)
                    );
                },
              },
              {
                key: "dashboard_BACK",
                value: function (e) {
                  this.isOnSearch && "" == window.app
                    ? ((this.isOnSearch = !1),
                      this.refs.field.val(""),
                      this.refs.filter.css("display", "none"),
                      this.refs.list.css("display", "block"),
                      this.refs.buttonClose.css("display", "none"),
                      this.refs.buttonOptions.css("display", "block"),
                      this.refs.field.blur())
                    : this.dashboard_HOME();
                },
              },
              {
                key: "dashboard_HOME",
                value: function (e) {
                  window.dashboardSearchOpen &&
                    (this.isOnSearch ||
                      "" != window.app ||
                      a()(window).trigger(Fe.EVENT.CLOSE));
                },
              },
              {
                key: "buttonClose_CLICK",
                value: function () {
                  this.dashboard_BACK();
                },
              },
              {
                key: "on_OPEN_APP",
                value: function (e, t) {
                  o.a.fromTo(
                    this.refs.content,
                    { scale: 1, opacity: 1 },
                    {
                      scale: 0.95,
                      opacity: 0.5,
                      duration: 0.4,
                      transformOrigin: "50% 100%",
                      delay: t,
                    }
                  );
                },
              },
              {
                key: "on_CLOSE_APP",
                value: function (e, t) {
                  o.a.fromTo(
                    this.refs.content,
                    { scale: 0.95, opacity: 0.5 },
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 0.4,
                      transformOrigin: "50% 100%",
                      delay: t,
                    }
                  );
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.isOnSearch = !1),
                    (this.template = {
                      filterItem: this.element.find(
                        '*[data-ref="dashboard-search-filter-item-template"]'
                      ),
                    }),
                    (this.refs = {
                      content: this.element.find(
                        '*[data-ref="dashboard-search-content"]'
                      ),
                      form: this.element.find(
                        '*[data-ref="dashboard-search-form"]'
                      ),
                      field: this.element.find(
                        '*[data-ref="dashboard-search-form-field"]'
                      ),
                      list: this.element.find(
                        '*[data-ref="dashboard-search-list"]'
                      ),
                      filter: this.element.find(
                        '*[data-ref="dashboard-search-filter"]'
                      ),
                      filterContainer: this.element.find(
                        '*[data-ref="dashboard-search-filter-container"]'
                      ),
                      filterItems: this.element.find(
                        '*[data-ref="dashboard-search-filter-item"]'
                      ),
                      buttonOptions: this.element.find(
                        '*[data-ref="dashboard-search-button-options"]'
                      ),
                      buttonClose: this.element.find(
                        '*[data-ref="dashboard-search-button-close"]'
                      ),
                    }),
                    this.refs.filterContainer.html(""),
                    a()(this.refs.form).on(
                      "submit",
                      this.form_SUBMIT.bind(this)
                    ),
                    a()(this.refs.field).on(
                      "keypress",
                      this.field_CHANGE.bind(this)
                    ),
                    a()(this.refs.field).on(
                      "focus",
                      this.field_FOCUS.bind(this)
                    ),
                    a()(this.refs.field).on("blur", this.field_BLUR.bind(this)),
                    a()(this.refs.buttonClose).on(
                      "touchstart",
                      this.buttonClose_CLICK.bind(this)
                    ),
                    a()(window).on(
                      ue.EVENT.BACK,
                      this.dashboard_BACK.bind(this)
                    ),
                    a()(window).on(
                      ue.EVENT.HOME,
                      this.dashboard_HOME.bind(this)
                    ),
                    a()(window).on(
                      Fe.EVENT.OPEN_APP,
                      this.on_OPEN_APP.bind(this)
                    ),
                    a()(window).on(
                      Fe.EVENT.CLOSE_APP,
                      this.on_CLOSE_APP.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        Fe = (function () {
          function e(t, n) {
            He(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            qe(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CDashboardSearch.EVENT.OPEN",
                    CLOSE: "CDashboardSearch.EVENT.CLOSE",
                    OPEN_APP: "CDashboardSearch.EVENT.OPEN_APP",
                    CLOSE_APP: "CDashboardSearch.EVENT.CLOSE_APP",
                  };
                },
              },
            ]),
            qe(e, [
              {
                key: "render",
                value: function (e, t) {
                  new je(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Ye = Fe;
      function We(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ge(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Xe(e, t, n) {
        return t && Ge(e.prototype, t), n && Ge(e, n), e;
      }
      var ze = (function () {
          function e(t, n) {
            We(this, e), this.render(t, n);
          }
          return (
            Xe(e, [
              {
                key: "open",
                value: function (e) {
                  if (!this.state.isOpened) {
                    (window.app = this.data.name),
                      y.instance.trackPage(
                        this.data.pageTitle,
                        this.data.pagePath
                      ),
                      a()(window).trigger(Ze.EVENT.INIT, [this.data.name]),
                      (this.refs.dashboardIcon = e),
                      (this.state.isOpened = !0),
                      this.element.css("display", "block"),
                      a()(window).trigger(ye.EVENT.OPEN_APP, [0]),
                      a()(window).trigger(Z.EVENT.OPEN_APP, [0]),
                      a()(window).trigger(Te.EVENT.OPEN_APP, [0]),
                      a()(window).trigger(Ye.EVENT.OPEN_APP, [0]),
                      a()(window).trigger(ne.EVENT.OPEN_APP, [
                        0.25,
                        this.data.isHeaderTransparent,
                      ]),
                      a()(window).trigger(ue.EVENT.OPEN_APP, [0.25]),
                      (this.refs.dashboardRed = this.refs.dashboardIcon
                        .get(0)
                        .getBoundingClientRect());
                    var t = this.refs.dashboardRed,
                      n = "0% 100%",
                      i = 0;
                    this.data.isStatic
                      ? (o.a.fromTo(
                          this.refs.content,
                          { opacity: 0 },
                          {
                            opacity: 1,
                            duration: i + 0.1 + 0.2,
                            delay: 0,
                            ease: "power3.out",
                          }
                        ),
                        o.a.fromTo(
                          this.refs.content,
                          { scale: 0.8, transformOrigin: "center center" },
                          {
                            scale: 1,
                            x: 0,
                            y: 0,
                            duration: i + 0.1 + 0.4,
                            ease: "power3.out",
                            delay: 0,
                          }
                        ))
                      : (o.a.fromTo(
                          this.refs.content,
                          { opacity: 0 },
                          {
                            opacity: 1,
                            duration: i + 0.1 + 0.2,
                            delay: 0,
                            ease: "power3.out",
                          }
                        ),
                        o.a.fromTo(
                          this.refs.icon,
                          { opacity: 1 },
                          {
                            opacity: 0,
                            duration: i + 0.1 + 0.1,
                            delay: 0,
                            ease: "power3.out",
                          }
                        ),
                        o.a.fromTo(
                          this.refs.icon,
                          { scale: 1, transformOrigin: n, x: 0, y: 0 },
                          {
                            scale: 6.4,
                            x: 0,
                            y: t.y,
                            transformOrigin: n,
                            duration: i + 0.1 + 0.4,
                            ease: "power3.out",
                            delay: 0,
                          }
                        ),
                        o.a.fromTo(
                          this.refs.container,
                          { x: t.x, y: t.y, transformOrigin: "0% 0%" },
                          {
                            x: 0,
                            y: 0,
                            duration: i + 0.1 + 0.4,
                            ease: "power3.out",
                            delay: 0,
                          }
                        ),
                        o.a.fromTo(
                          this.refs.content,
                          {
                            x: 5,
                            y: 5,
                            scaleX: 0.17,
                            scaleY: 0.07,
                            transformOrigin: "0px 0px",
                          },
                          {
                            scaleX: 1,
                            scaleY: 1,
                            x: 0,
                            y: 0,
                            duration: i + 0.1 + 0.4,
                            ease: "power3.out",
                            delay: 0,
                          }
                        )),
                      o.a.to(this, {
                        duration: 0.6,
                        onComplete: this.view_OPEN.bind(this),
                      });
                  }
                },
              },
              {
                key: "view_OPEN",
                value: function () {
                  if (this.refs.video.length) {
                    var e = this.refs.video.get(0);
                    (e.currentTime = 0), e.play();
                  }
                  if (
                    this.data.isInitialAlertAvailable &&
                    !this.state.isMessageDispatched
                  ) {
                    this.state.isMessageDispatched = !0;
                    var t = [
                      this.data.message.title,
                      this.data.message.text,
                      this.data.message.cta,
                    ];
                    a()(window).trigger(Le.EVENT.OPEN, t);
                  }
                },
              },
              {
                key: "close",
                value: function (e) {
                  if (
                    e
                      ? this.state.isOpened && window.app == this.data.name
                      : this.state.isOpened &&
                        window.app == this.data.name &&
                        !Ze.isInApp()
                  ) {
                    if (((this.state.isOpened = !1), this.refs.video.length))
                      this.refs.video.get(0).pause();
                    var t = this.refs.dashboardRed;
                    this.data.isStatic
                      ? (o.a.to(this.refs.content, {
                          scale: 0.8,
                          transformOrigin: "center center",
                          duration: 0.4,
                          ease: "power3.out",
                          delay: 0,
                        }),
                        o.a.to(this.refs.content, {
                          opacity: 0,
                          duration: 0.15,
                          delay: 0,
                          ease: "none",
                        }))
                      : (o.a.to(this.refs.container, {
                          x: t.x,
                          y: t.y,
                          transformOrigin: "0% 0%",
                          duration: 0.4,
                          ease: "power3.out",
                          delay: 0,
                        }),
                        o.a.to(this.refs.content, {
                          scaleX: 0,
                          scaleY: 0,
                          x: 35,
                          y: 35,
                          transformOrigin: "0px 0px",
                          duration: 0.4,
                          ease: "power3.out",
                          delay: 0,
                        }),
                        o.a.to(this.refs.icon, {
                          opacity: 1,
                          duration: 0.1,
                          delay: 0.1,
                          ease: "power3.out",
                        }),
                        o.a.to(this.refs.icon, {
                          scale: 1,
                          transformOrigin: "0% 100%",
                          x: 0,
                          y: 0,
                          duration: 0.4,
                          ease: "power3.out",
                          delay: 0,
                        }),
                        o.a.to(this.refs.content, {
                          opacity: 0,
                          duration: 0.175,
                          delay: 0,
                          ease: "none",
                        })),
                      o.a.to(this, {
                        duration: 0.45,
                        onComplete: this.view_CLOSE.bind(this),
                      }),
                      a()(window).trigger(ye.EVENT.CLOSE_APP, [0]),
                      a()(window).trigger(Z.EVENT.CLOSE_APP, [0]),
                      a()(window).trigger(Te.EVENT.CLOSE_APP, [0]),
                      a()(window).trigger(ne.EVENT.CLOSE_APP, [0]),
                      a()(window).trigger(ue.EVENT.CLOSE_APP, [0]),
                      a()(window).trigger(Ye.EVENT.CLOSE_APP, [0]);
                  }
                },
              },
              {
                key: "view_CLOSE",
                value: function () {
                  this.refs.video.length &&
                    (this.refs.video.get(0).currentTime = 0);
                  a()(window).trigger(Ze.EVENT.DISPOSE, [this.data.name]),
                    this.element.css("display", "none"),
                    (window.app = ""),
                    window.is_search
                      ? y.instance.trackPage(
                          "Dashboard - Search",
                          "/app/dashboard/search"
                        )
                      : y.instance.trackPage("Dashboard", "/app/dashboard");
                },
              },
              {
                key: "on_OPEN",
                value: function (e, t, n, i) {
                  t == this.data.name
                    ? n && this.open(n, i)
                    : this.state.isOpened && this.close();
                },
              },
              {
                key: "on_CLOSE",
                value: function (e, t) {
                  this.close(t);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.state = { isOpened: !1, isMessageDispatched: !1 }),
                    (this.data = {
                      pageTitle: this.element.data("track-title"),
                      pagePath: this.element.data("track-path"),
                      name: this.element.data("app-view-name"),
                      isStatic: this.element.data("app-view-is-static"),
                      isHeaderTransparent: this.element.data(
                        "app-view-is-header-transparent"
                      ),
                      isInitialAlertAvailable: this.element.data(
                        "app-view-alert-button"
                      ),
                      message: {
                        title: this.element.data("app-view-alert-button-title"),
                        text: this.element.data("app-view-alert-button-text"),
                        cta: this.element.data("app-view-alert-button-cta"),
                      },
                    }),
                    (this.refs = {
                      appContent: this.element.find(
                        '*[data-ref="app-content"]'
                      ),
                      container: this.element.find(
                        '*[data-ref="app-view-container"]'
                      ),
                      content: this.element.find(
                        '*[data-ref="app-view-content"]'
                      ),
                      icon: this.element.find('*[data-ref="app-view-icon"]'),
                      video: this.element.find('*[data-ref="app-view-video"]'),
                      buttonClose: this.element.find(
                        '*[data-ref="app-view-close"]'
                      ),
                      dashboardIcon: null,
                      dashboardRed: null,
                    }),
                    this.refs.appContent.data("app-name", this.data.name),
                    this.data.isStatic &&
                      o.a.set(this.refs.icon, { display: "none" }),
                    a()(window).on(Ze.EVENT.OPEN, this.on_OPEN.bind(this)),
                    a()(window).on(Ze.EVENT.CLOSE, this.on_CLOSE.bind(this)),
                    this.element.css("display", "none"),
                    (window.app = ""),
                    a()(this.refs.buttonClose).on(
                      "click",
                      this.close.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        Ze = (function () {
          function e(t, n) {
            We(this, e),
              (window.in_app = {}),
              (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Xe(e, null, [
              {
                key: "addInApp",
                value: function (e) {
                  window.in_app[e] = !0;
                },
              },
              {
                key: "removeInApp",
                value: function (e) {
                  var t = {};
                  for (var n in window.in_app) n != e && (t[n] = !0);
                  window.in_app = t;
                },
              },
              {
                key: "getInApp",
                value: function (e) {
                  return window.in_app[e];
                },
              },
              {
                key: "isInApp",
                value: function () {
                  var e = !1;
                  for (var t in window.in_app) e = !0;
                  return e;
                },
              },
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppView.EVENT.OPEN",
                    CLOSE: "CAppView.EVENT.CLOSE",
                    INIT: "CAppView.EVENT.INIT",
                    DISPOSE: "CAppView.EVENT.DISPOSE",
                    PREVENT_CLOSE: "CAppView.EVENT.PREVENT_CLOSE",
                  };
                },
              },
            ]),
            Xe(e, [
              {
                key: "render",
                value: function (e, t) {
                  new ze(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Je = Ze;
      function Qe(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function $e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function et(e, t, n) {
        return t && $e(e.prototype, t), n && $e(e, n), e;
      }
      var tt = (function () {
          function e(t, n) {
            Qe(this, e), this.render(t, n);
          }
          return (
            et(e, [
              { key: "init", value: function () {} },
              {
                key: "isExtraContentScreen",
                value: function () {
                  return !(
                    !this.useExtraContent || this.position != nt.POSITION.DOWN
                  );
                },
              },
              {
                key: "resetLinks",
                value: function () {
                  this.refs.links.length &&
                    o.a.set(this.refs.links, { pointerEvents: "auto" });
                },
              },
              {
                key: "on_TOUCH_END",
                value: function (e) {
                  var t = 0.5;
                  if (this.direction == nt.DIRECTION.X) {
                    if (e)
                      if (this.moveCounter < 15)
                        this.currentTouchPosition.x < -1 * this.threshold
                          ? this.currentPage++
                          : this.currentTouchPosition.x > this.threshold &&
                            this.currentPage--;
                      else {
                        var n = this.refs.list.get(0).getBoundingClientRect();
                        this.currentPage = Math.round(
                          (-1 * n.x) / window.innerWidth
                        );
                      }
                    else t = 0.6;
                    (this.currentPage = this.useExtraContent
                      ? this.currentPage < -1
                        ? -1
                        : this.currentPage
                      : this.currentPage < 0
                      ? 0
                      : this.currentPage),
                      (this.currentPage =
                        this.currentPage > this.refs.listItems.length - 1
                          ? this.refs.listItems.length - 1
                          : this.currentPage);
                    var i = -this.currentPage * window.innerWidth,
                      s = i;
                    if (
                      ((s = s < 0 ? 0 : s),
                      o.a.killTweensOf([
                        this.refs.list,
                        this.refs.pagination,
                        this.refs.listItems,
                      ]),
                      o.a.to(this.refs.list, {
                        x: i,
                        duration: t,
                        ease: "power3.out",
                      }),
                      o.a.to(this.refs.pagination, {
                        x: s,
                        duration: t,
                        ease: "power3.out",
                      }),
                      o.a.to(this.refs.listItems, {
                        scale: 1,
                        opacity: 1,
                        duration: t,
                        transformOrigin: "50% 50%",
                        ease: "power3.out",
                      }),
                      this.useExtraContent)
                    ) {
                      var r = i / window.innerWidth;
                      (r = (r = r > 1 ? 1 : r) < 0 ? 0 : r),
                        o.a.killTweensOf([
                          this.refs.extraOverlay,
                          this.refs.extraContent,
                          this.refs.extraFooter,
                        ]),
                        o.a.to(this.refs.extraOverlay, {
                          opacity: 0.9 * r,
                          duration: t,
                          ease: "power3.out",
                        }),
                        o.a.to(this.refs.extraContent, {
                          x: i - window.innerWidth,
                          duration: t,
                          ease: "power3.out",
                        }),
                        o.a.to(this.refs.extraFooter, {
                          x: s,
                          duration: t,
                          ease: "power3.out",
                          onComplete: this.transition_COMPLETE.bind(this),
                        }),
                        -1 == this.currentPage
                          ? a()(window).trigger(ue.EVENT.OPEN_NEWS_APP)
                          : a()(window).trigger(ue.EVENT.CLOSE_NEWS_APP),
                        y.instance.trackPage(
                          "Dashboard",
                          "/app/dashboard/".concat(this.currentPage)
                        );
                    }
                    var l = this.currentPage;
                    this.refs.paginationItems.toArray().map(function (e, t) {
                      return o.a.to(e, {
                        duration: 0.3,
                        ease: "power3.inOut",
                        opacity: l == t ? 1 : 0,
                      });
                    });
                  } else {
                    if (!this.isExtraContentScreen()) {
                      var c = (1 * this.currentTouchPosition.y) / 200;
                      this.position == nt.POSITION.UP ? (c *= -1) : (c = c),
                        (c = (c = c > 1 ? 1 : c) < 0 ? 0 : c),
                        window.dashboardSearchOpen
                          ? c > 0.25
                            ? ((window.dashboardSearchOpen = !1),
                              o.a.to(this.percentY, {
                                value: 0,
                                duration: t,
                                ease: "power3.out",
                                onUpdate: this.updateSearchFade.bind(this),
                              }))
                            : ((window.dashboardSearchOpen = !0),
                              o.a.to(this.percentY, {
                                value: 1,
                                duration: t,
                                ease: "power3.out",
                                onUpdate: this.updateSearchFade.bind(this),
                              }))
                          : c > 0.25
                          ? ((window.dashboardSearchOpen = !0),
                            o.a.to(this.percentY, {
                              value: 1,
                              duration: t,
                              ease: "power3.out",
                              onUpdate: this.updateSearchFade.bind(this),
                            }))
                          : ((window.dashboardSearchOpen = !1),
                            o.a.to(this.percentY, {
                              value: 0,
                              duration: t,
                              ease: "power3.out",
                              onUpdate: this.updateSearchFade.bind(this),
                            })),
                        window.dashboardSearchOpen
                          ? this.refs.searchContent.css(
                              "pointer-events",
                              "auto"
                            )
                          : this.refs.searchContent.css(
                              "pointer-events",
                              "none"
                            ),
                        window.dashboardSearchOpen
                          ? (a()(window).trigger(
                              ue.EVENT.OPEN_DASHBOARD_SEARCH
                            ),
                            (window.is_search = !0),
                            y.instance.trackPage(
                              "Dashboard - Search",
                              "/app/dashboard/search"
                            ))
                          : ((window.is_search = !1),
                            y.instance.trackPage("Dashboard", "/app/dashboard"),
                            a()(window).trigger(
                              ue.EVENT.CLOSE_DASHBOARD_SEARCH
                            ));
                    }
                  }
                  a()(document).off("touchend"),
                    a()(document).off("touchmove"),
                    clearTimeout(this.enableLinksTimer),
                    (this.enableLinksTimer = setTimeout(
                      this.resetLinks.bind(this),
                      1e3
                    ));
                },
              },
              {
                key: "on_TOUCH_MOVE",
                value: function (e) {
                  this.moveCounter++;
                  var t = e.touches[0] || e.changedTouches[0];
                  if (
                    ((this.currentTouchPosition = {
                      x: t.pageX - this.initialTouchPosition.x,
                      y: t.pageY - this.initialTouchPosition.y,
                    }),
                    this.moveCounter > 2)
                  )
                    if (
                      (clearTimeout(this.enableLinksTimer),
                      this.refs.links.length &&
                        o.a.set(this.refs.links, { pointerEvents: "none" }),
                      "" == this.direction &&
                        (Math.abs(this.currentTouchPosition.y) >
                          Math.abs(this.currentTouchPosition.x) &&
                        -1 != this.currentPage
                          ? ((this.direction = nt.DIRECTION.Y),
                            this.currentTouchPosition.y >= 0
                              ? (this.position = nt.POSITION.DOWN)
                              : (this.position = nt.POSITION.UP))
                          : (this.direction = nt.DIRECTION.X)),
                      this.isDefaultSlider ||
                        (Math.abs(this.currentTouchPosition.y) >
                          Math.abs(this.currentTouchPosition.x) &&
                          (this.direction = nt.DIRECTION.X)),
                      this.direction == nt.DIRECTION.X)
                    ) {
                      var n =
                          -this.currentPage * window.innerWidth +
                          this.currentTouchPosition.x,
                        i = (n = n > window.innerWidth ? window.innerWidth : n);
                      if (((i = i < 0 ? 0 : i), this.useExtraContent)) {
                        var a = n / window.innerWidth;
                        (a = (a = a > 1 ? 1 : a) < 0 ? 0 : a),
                          o.a.to(this.refs.extraOverlay, {
                            duration: 0.1,
                            opacity: a,
                          }),
                          o.a.to(this.refs.extraContent, {
                            duration: 0.1,
                            x: n - window.innerWidth,
                          }),
                          o.a.to(this.refs.extraFooter, {
                            duration: 0.1,
                            x: i,
                          });
                      }
                      var s = 0;
                      this.currentPage >= this.refs.listItems.length - 1
                        ? (s =
                            (s =
                              (s = (-1 * this.currentTouchPosition.x) / 5e3) > 1
                                ? 1
                                : s) < 0
                              ? 0
                              : s) > 0 &&
                          (n = -this.currentPage * window.innerWidth)
                        : this.currentPage <= 0 &&
                          !this.useExtraContent &&
                          (s =
                            (s =
                              (s = (1 * this.currentTouchPosition.x) / 5e3) > 1
                                ? 1
                                : s) < 0
                              ? 0
                              : s) > 0 &&
                          (n = -this.currentPage * window.innerWidth),
                        o.a.to(this.refs.listItems, {
                          scale: 1 - s,
                          opacity: 1 - 5 * s,
                          duration: 0.1,
                          transformOrigin: "50% 50%",
                          ease: "none",
                        }),
                        this.useExtraContent &&
                          o.a.to(this.refs.pagination, { duration: 0.1, x: i }),
                        o.a.to(this.refs.list, { duration: 0.1, x: n });
                    } else {
                      if (this.isExtraContentScreen())
                        window.dashboard_notification.start(e);
                      else {
                        var r = (1 * this.currentTouchPosition.y) / 200;
                        this.position == nt.POSITION.UP ? (r *= -1) : (r = r),
                          (r = (r = r > 1 ? 1 : r) < 0 ? 0 : r),
                          window.dashboardSearchOpen
                            ? (this.percentY.value = 1 - r)
                            : (this.percentY.value = r),
                          this.updateSearchFade();
                      }
                    }
                },
              },
              {
                key: "on_TOUCH_START",
                value: function (e) {
                  (this.moveCounter = 0),
                    (this.direction = ""),
                    (this.position = ""),
                    (this.isOpen = window.dashboardSearchOpen),
                    o.a.killTweensOf(this.refs.list);
                  var t = e.touches[0] || e.changedTouches[0];
                  (this.initialTouchPosition = { x: t.pageX, y: t.pageY }),
                    (this.currentTouchPosition = {
                      x: t.pageX - this.initialTouchPosition.x,
                      y: t.pageY - this.initialTouchPosition.y,
                    }),
                    a()(document).on("touchend", this.on_TOUCH_END.bind(this)),
                    a()(document).on(
                      "touchmove",
                      this.on_TOUCH_MOVE.bind(this)
                    );
                },
              },
              {
                key: "transition_COMPLETE",
                value: function () {
                  -1 == this.currentPage
                    ? a()(window).trigger(ue.EVENT.UPDATE_THEME_WHITE)
                    : a()(window).trigger(ue.EVENT.UPDATE_THEME_BLACK);
                },
              },
              {
                key: "openSearch",
                value: function () {
                  var e = 1;
                  (e = (e = e > 1 ? 1 : e) < 0 ? 0 : e),
                    window.dashboardSearchOpen
                      ? e > 0.25
                        ? ((window.dashboardSearchOpen = !1),
                          o.a.to(this.percentY, {
                            value: 0,
                            duration: 0.6,
                            ease: "power3.out",
                            onUpdate: this.updateSearchFade.bind(this),
                          }))
                        : ((window.dashboardSearchOpen = !0),
                          o.a.to(this.percentY, {
                            value: 1,
                            duration: 0.6,
                            ease: "power3.out",
                            onUpdate: this.updateSearchFade.bind(this),
                          }))
                      : e > 0.25
                      ? ((window.dashboardSearchOpen = !0),
                        o.a.to(this.percentY, {
                          value: 1,
                          duration: 0.6,
                          ease: "power3.out",
                          onUpdate: this.updateSearchFade.bind(this),
                        }))
                      : ((window.dashboardSearchOpen = !1),
                        o.a.to(this.percentY, {
                          value: 0,
                          duration: 0.6,
                          ease: "power3.out",
                          onUpdate: this.updateSearchFade.bind(this),
                        })),
                    window.dashboardSearchOpen
                      ? this.refs.searchContent.css("pointer-events", "auto")
                      : this.refs.searchContent.css("pointer-events", "none"),
                    window.dashboardSearchOpen
                      ? (a()(window).trigger(ue.EVENT.OPEN_DASHBOARD_SEARCH),
                        (window.is_search = !0),
                        y.instance.trackPage(
                          "Dashboard - Search",
                          "/app/dashboard/search"
                        ))
                      : ((window.is_search = !1),
                        y.instance.trackPage("Dashboard", "/app/dashboard"),
                        a()(window).trigger(ue.EVENT.CLOSE_DASHBOARD_SEARCH));
                },
              },
              {
                key: "moveToFirstScreen",
                value: function () {
                  Je.getInApp("voucher-details") ||
                    (-1 == this.currentPage &&
                      ((this.currentPage = 0), this.on_TOUCH_END()));
                },
              },
              {
                key: "footer_BACK",
                value: function () {
                  this.moveToFirstScreen();
                },
              },
              {
                key: "footer_HOME",
                value: function () {
                  this.moveToFirstScreen();
                },
              },
              {
                key: "updateBackgroundBlur",
                value: function () {
                  this.blur.value;
                },
              },
              {
                key: "updateSearchFade",
                value: function () {
                  var e = this.percentY.value,
                    t = 60 * e;
                  t = this.position == nt.POSITION.UP ? 60 - t : -60 + t;
                  var n = 100 * e;
                  (n = this.position == nt.POSITION.UP ? -n : n),
                    this.isOpen && ((t *= -1), (n *= -1));
                  var i = 1 - 0.2 * e,
                    a = 1.5 * e - 0.5;
                  a = a < 0 ? 0 : a;
                  var s = 1 - 2 * e;
                  s = s < 0 ? 0 : s;
                  var r = 20 * e;
                  o.a.set(this.refs.searchContainer, {
                    opacity: a,
                    y: t,
                    transformOrigin: "50% 50%",
                  }),
                    o.a.set(this.refs.dashboardContent, {
                      opacity: s,
                      scale: i,
                      y: n,
                    }),
                    o.a.set(
                      [
                        this.refs.searchHeader,
                        this.refs.searchPagination,
                        this.refs.searchBackgroundBlack,
                      ],
                      { opacity: e }
                    ),
                    o.a.set(this.blur, {
                      value: r,
                      onUpdate: this.updateBackgroundBlur.bind(this),
                    });
                },
              },
              {
                key: "dashboardSearch_CLOSE",
                value: function (e) {
                  this.useExtraContent &&
                    ((this.isOpen = !0),
                    (window.dashboardSearchOpen = !1),
                    o.a.to(this.percentY, {
                      value: 0,
                      duration: 0.6,
                      ease: "power3.out",
                      onUpdate: this.updateSearchFade.bind(this),
                    }),
                    this.refs.searchContent.css("pointer-events", "none"),
                    a()(window).trigger(ue.EVENT.CLOSE_DASHBOARD_SEARCH));
                },
              },
              {
                key: "reset",
                value: function () {
                  (this.currentPage = 0),
                    (this.direction = nt.DIRECTION.X),
                    this.on_TOUCH_END();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  if (
                    ((this.element = a()(e)),
                    (this.useExtraContent = !1),
                    (this.direction = ""),
                    (this.position = ""),
                    (window.dashboardSearchOpen = !1),
                    (this.isOpen = window.dashboardSearchOpen),
                    (this.enableLinksTimer = null),
                    (this.initialTouchPosition = { x: 0, y: 0 }),
                    (this.currentTouchPosition = { x: 0, y: 0 }),
                    (this.currentPage = 0),
                    (this.threshold = 10),
                    (this.moveCounter = 0),
                    (this.blur = { value: 20 }),
                    (this.percentY = { value: 0 }),
                    (this.refs = {
                      list: this.element.find('*[data-ref="slider-list"]'),
                      listItems: this.element.find(
                        '*[data-ref="slider-list-item"]'
                      ),
                      pagination: this.element.find(
                        '*[data-ref="slider-pagination"]'
                      ),
                      paginationItems: this.element.find(
                        '*[data-ref="slider-pagination-item"]'
                      ),
                      extraContent: a()(this.element.data("slider-extra-page")),
                      extraHit: a()(this.element.data("slider-extra-hit")),
                      extraOverlay: a()(
                        this.element.data("slider-extra-overlay")
                      ),
                      extraFooter: a()(
                        this.element.data("slider-extra-footer")
                      ),
                      searchHeader: a()(
                        '*[data-ref="dashboard-search-header"]'
                      ),
                      searchContainer: a()(
                        '*[data-ref="dashboard-search-container"]'
                      ),
                      searchPagination: a()(
                        '*[data-ref="dashboard-search-pagination"]'
                      ),
                      searchBackgroundBlack: a()(
                        '*[data-ref="dashboard-search-background-black"]'
                      ),
                      searchBackgroundBlur: a()(
                        '*[data-ref="dashboard-search-background-blur"]'
                      ),
                      searchContent: a()(
                        '*[data-ref="dashboard-search-content"]'
                      ),
                      dashboardContent: a()(
                        '*[data-ref="dashboard-content-container"]'
                      ),
                      links: this.element.find("a"),
                    }),
                    this.refs.extraContent.length &&
                      (this.useExtraContent = !0),
                    (this.isDefaultSlider =
                      "default" == this.element.data("slider-type")),
                    !window.dashboardSearchOpen)
                  ) {
                    o.a.set(this.refs.searchContainer, {
                      opacity: 0,
                      scale: 1,
                      y: 0,
                      transformOrigin: "50% 50%",
                    }),
                      o.a.set(
                        [
                          this.refs.searchHeader,
                          this.refs.searchPagination,
                          this.refs.searchBackgroundBlack,
                        ],
                        { opacity: 0 }
                      );
                  }
                  o.a.set(this.refs.list, {
                    width: 100 * this.refs.listItems.length + "vw",
                  }),
                    o.a.set(this.refs.paginationItems, { opacity: 0 }),
                    o.a.set(this.refs.paginationItems.eq(0), { opacity: 1 }),
                    this.init(),
                    this.useExtraContent &&
                      (this.refs.extraHit.on(
                        "touchstart",
                        this.on_TOUCH_START.bind(this)
                      ),
                      a()(window).on(
                        nt.EVENT.OPEN_SEARCH,
                        this.openSearch.bind(this)
                      )),
                    this.element.on(
                      "touchstart",
                      this.on_TOUCH_START.bind(this)
                    ),
                    a()(window).on(ue.EVENT.BACK, this.footer_BACK.bind(this)),
                    a()(window).on(ue.EVENT.HOME, this.footer_HOME.bind(this)),
                    a()(window).on(
                      Ye.EVENT.CLOSE,
                      this.dashboardSearch_CLOSE.bind(this)
                    ),
                    a()(window).on(nt.EVENT.RESET, this.reset.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        nt = (function () {
          function e(t, n) {
            Qe(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            et(e, null, [
              {
                key: "DIRECTION",
                get: function () {
                  return { Y: "CSlider.DIRECTION.Y", X: "CSlider.DIRECTION.X" };
                },
              },
              {
                key: "POSITION",
                get: function () {
                  return {
                    UP: "CSlider.POSITION.UP",
                    DOWN: "CSlider.POSITION.DOWN",
                  };
                },
              },
              {
                key: "EVENT",
                get: function () {
                  return {
                    START: "CSlider.EVENT.START",
                    RESET: "CSlider.EVENT.RESET",
                    OPEN_SEARCH: "CSlider.EVENT.OPEN_SEARCH",
                  };
                },
              },
            ]),
            et(e, [
              {
                key: "render",
                value: function (e, t) {
                  new tt(e, t);
                },
              },
            ]),
            e
          );
        })(),
        it = nt;
      function at(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ot(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function st(e, t, n) {
        return t && ot(e.prototype, t), n && ot(e, n), e;
      }
      var rt = (function () {
          function e(t, n) {
            at(this, e), this.render(t, n);
          }
          return (
            st(e, [
              {
                key: "on_SCROLL",
                value: function () {
                  var e = this.element.get(0).getBoundingClientRect(),
                    t = this.refs.headline.get(0).getBoundingClientRect(),
                    n = this.refs.title.get(0).getBoundingClientRect(),
                    i = (t.y - e.y) / (120 - e.y);
                  i = (i = i < 0 ? 0 : i) > 1 ? 1 : i;
                  var a = (n.y - e.y) / (250 - e.y);
                  (a = (a = a < 0 ? 0 : a) > 1 ? 1 : a),
                    o.a.set(this.refs.headline, { opacity: i }),
                    this.refs.cover.length &&
                      o.a.set(this.refs.cover, { opacity: i }),
                    o.a.set(this.refs.title, { opacity: Math.abs(a - 1) });
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      content: this.element.find('*[data-ref="app-content"]'),
                      headline: this.element.find(
                        '*[data-ref="app-header-headline"]'
                      ),
                      title: this.element.find(
                        '*[data-ref="app-header-title"]'
                      ),
                      cover: this.element.find(
                        '*[data-ref="app-header-cover"]'
                      ),
                    }),
                    a()(this.refs.content).on(
                      "scroll",
                      this.on_SCROLL.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        lt = (function () {
          function e(t, n) {
            at(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            st(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppHeader.EVENT.OPEN",
                    CLOSE: "CAppHeader.EVENT.CLOSE",
                  };
                },
              },
            ]),
            st(e, [
              {
                key: "render",
                value: function (e, t) {
                  new rt(e, t);
                },
              },
            ]),
            e
          );
        })();
      function ct(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ut(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function ht(e, t, n) {
        return t && ut(e.prototype, t), n && ut(e, n), e;
      }
      var dt = (function () {
          function e(t, n) {
            ct(this, e), this.render(t, n);
          }
          return (
            ht(e, [
              {
                key: "open",
                value: function () {
                  M.instance.maskChatAsReaded(this.index),
                    this.refs.fieldName.html(this.data.name),
                    this.refs.fieldPhone.html(this.data.phone),
                    this.refs.fieldText.val(""),
                    y.instance.trackPage(
                      "Messages",
                      "/app/messages/chat/".concat(k.slugfy(this.data.name))
                    ),
                    this.element.css("display", "block"),
                    this.update(),
                    (this.isOpen = !0);
                },
              },
              {
                key: "update",
                value: function () {
                  var e = [],
                    t = this.template.date.clone(),
                    n = new Date();
                  t
                    .find('*[data-ref="app-chat-item-time"]')
                    .html(
                      [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                      ][n.getDay()] +
                        ", " +
                        k.toNumber(n.getDate()) +
                        " " +
                        n.getFullYear()
                    ),
                    e.push(t);
                  for (var i = 0; i < this.data.chat.length; i++) {
                    var a = this.data.chat[i],
                      o = void 0;
                    switch (a.type) {
                      case "text":
                        o =
                          "from" == a.direction
                            ? this.template.textFrom.clone()
                            : this.template.textTo.clone();
                        break;
                      case "image":
                        o =
                          "from" == a.direction
                            ? this.template.imageFrom.clone()
                            : null;
                    }
                    e.push(o),
                      "from" == a.direction &&
                        (o
                          .find('*[data-ref="app-chat-item-container-letter"]')
                          .css("background-color", this.data.color),
                        o
                          .find('*[data-ref="app-chat-item-letter"]')
                          .html(this.data.name.substr(0, 1)));
                    var s = o.find('*[data-ref="app-chat-item-image"]');
                    s.length > 0 &&
                      s.css(
                        "background-image",
                        "url(".concat(a.texture.src, ")")
                      ),
                      o
                        .find('*[data-ref="app-chat-item-text"]')
                        .html(a.message);
                    var r = new Date(new Date() - 6e4 * a.minutesPast),
                      l =
                        k.toNumber(r.getHours()) +
                        ":" +
                        k.toNumber(r.getMinutes());
                    o.find('*[data-ref="app-chat-item-time"]').html(l);
                  }
                  this.refs.list.html(e), this.refs.content.scrollTop(9999);
                },
              },
              {
                key: "close",
                value: function () {
                  (this.isOpen = !1), this.element.css("display", "none");
                },
              },
              {
                key: "chat_OPEN",
                value: function (e, t) {
                  (this.index = t),
                    (this.data = M.instance.data[t]),
                    this.open();
                },
              },
              { key: "chat_CLOSE", value: function (e, t) {} },
              {
                key: "buttonClose_CLICK",
                value: function () {
                  this.close();
                },
              },
              {
                key: "chat_UPDATE",
                value: function () {
                  this.isOpen && this.update();
                },
              },
              {
                key: "form_SUBMIT",
                value: function (e) {
                  var t = this;
                  e.preventDefault();
                  var n = this.refs.fieldText.val();
                  if ("" != n) {
                    var i = {
                      message: n,
                      direction: "to",
                      type: "text",
                      minutesPast: 0,
                      readed: !0,
                    };
                    if (
                      (M.instance.pushUserMessage(this.index, i),
                      this.data.reply)
                    ) {
                      if (
                        (this.data.reply.counter ||
                          (this.data.reply.counter = 0),
                        this.data.reply.messages[this.data.reply.counter])
                      ) {
                        var a = {
                          message:
                            this.data.reply.messages[
                              this.data.reply.counter %
                                this.data.reply.messages.length
                            ],
                          direction: "from",
                          type: "text",
                          minutesPast: 0,
                          readed: !0,
                        };
                        setTimeout(function () {
                          M.instance.pushBotMessage(t.data.name, a);
                        }, 3500);
                      }
                      this.data.reply.counter++,
                        this.data.reply.counter >
                          2 * this.data.reply.messages.length &&
                          (this.data.reply.counter = 0);
                    }
                    this.refs.fieldText.val("");
                  }
                },
              },
              {
                key: "field_FOCUS",
                value: function (e) {
                  o.a.set(this.refs.footer, { display: "none" });
                },
              },
              {
                key: "field_BLUR",
                value: function (e) {
                  o.a.set(this.refs.footer, { display: "block" });
                },
              },
              {
                key: "app_INIT",
                value: function (e, t) {
                  "messages" == t &&
                    this.isOpen &&
                    M.instance.maskChatAsReaded(this.index);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.isOpen = !1),
                    (this.template = {
                      date: this.element.find(
                        '*[data-ref="app-chat-message-date"]'
                      ),
                      textTo: this.element.find(
                        '*[data-ref="app-chat-message-text-to"]'
                      ),
                      textFrom: this.element.find(
                        '*[data-ref="app-chat-message-text-from"]'
                      ),
                      imageFrom: this.element.find(
                        '*[data-ref="app-chat-message-image-from"]'
                      ),
                    }),
                    (this.refs = {
                      footer: a()('*[data-component="dashboard-footer"]'),
                      content: this.element.find(
                        '*[data-ref="app-chat-content"]'
                      ),
                      list: this.element.find('*[data-ref="app-chat-list"]'),
                      buttonClose: this.element.find(
                        '*[data-ref="app-chat-button-close"]'
                      ),
                      fieldName: this.element.find(
                        '*[data-ref="app-chat-field-name"]'
                      ),
                      fieldPhone: this.element.find(
                        '*[data-ref="app-chat-field-phone"]'
                      ),
                      fieldText: this.element.find(
                        '*[data-ref="app-chat-field-text"]'
                      ),
                      form: this.element.find('*[data-ref="app-chat-form"]'),
                    }),
                    a()(this.refs.buttonClose).on(
                      "click",
                      this.buttonClose_CLICK.bind(this)
                    ),
                    a()(this.refs.form).on(
                      "submit",
                      this.form_SUBMIT.bind(this)
                    ),
                    this.refs.fieldText.on(
                      "focus",
                      this.field_FOCUS.bind(this)
                    ),
                    this.refs.fieldText.on("blur", this.field_BLUR.bind(this)),
                    a()(window).on(ft.EVENT.OPEN, this.chat_OPEN.bind(this)),
                    a()(window).on(M.EVENT.UPDATE, this.chat_UPDATE.bind(this)),
                    a()(window).on(Je.EVENT.INIT, this.app_INIT.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        ft = (function () {
          function e(t, n) {
            ct(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            ht(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppChat.EVENT.OPEN",
                    CLOSE: "CAppChat.EVENT.CLOSE",
                  };
                },
              },
            ]),
            ht(e, [
              {
                key: "render",
                value: function (e, t) {
                  new dt(e, t);
                },
              },
            ]),
            e
          );
        })(),
        pt = ft;
      function mt(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function yt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function gt(e, t, n) {
        return t && yt(e.prototype, t), n && yt(e, n), e;
      }
      var Et = (function () {
          function e(t, n) {
            mt(this, e), this.render(t, n);
          }
          return (
            gt(e, [
              {
                key: "message_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget).data("index");
                  a()(window).trigger(pt.EVENT.OPEN, [t]);
                },
              },
              {
                key: "contact_CLICK",
                value: function () {
                  var e = a()(event.currentTarget).data("name"),
                    t = -1;
                  M.instance.data.map(function (n, i) {
                    n.name == e && (t = i);
                  });
                  -1 != t && a()(window).trigger(pt.EVENT.OPEN, [t]);
                },
              },
              {
                key: "updateConversations",
                value: function () {
                  for (
                    var e = M.instance.data, t = [], n = 0, i = 0;
                    i < e.length;
                    i++
                  ) {
                    var o = e[i];
                    if (o.chat.length) {
                      var s = this.template.messagesTemplate.clone();
                      s.attr("data-index", i),
                        s
                          .find('*[data-ref="app-messages-list-item-title"]')
                          .html(o.name.substr(0, 1)),
                        s
                          .find(
                            '*[data-ref="app-messages-list-item-container-title"]'
                          )
                          .css("background-color", o.color),
                        s
                          .find('*[data-ref="app-messages-list-item-name"]')
                          .html(o.name);
                      var r = o.chat.slice().reverse()[0],
                        l = r.message;
                      l.length > 75 && (l = l.substr(0, 72) + "..."),
                        s
                          .find('*[data-ref="app-messages-list-item-text"]')
                          .html(l);
                      var c = new Date(new Date() - 6e4 * r.minutesPast),
                        u =
                          k.toNumber(c.getHours()) +
                          ":" +
                          k.toNumber(c.getMinutes());
                      s.find(
                        '*[data-ref="app-messages-list-item-timestamp"]'
                      ).html(u);
                      var h = o.chat.slice().filter(function (e) {
                        return 0 == e.readed;
                      }).length;
                      (n += h),
                        h > 0
                          ? (s
                              .find(
                                '*[data-ref="app-messages-list-item-label-number"]'
                              )
                              .html(h),
                            s
                              .find(
                                '*[data-ref="app-messages-list-item-label"]'
                              )
                              .css("display", "block"))
                          : s
                              .find(
                                '*[data-ref="app-messages-list-item-label"]'
                              )
                              .css("display", "none"),
                        o.isDraft
                          ? s
                              .find(
                                '*[data-ref="app-messages-list-item-draft"]'
                              )
                              .css("display", "block")
                          : s
                              .find(
                                '*[data-ref="app-messages-list-item-draft"]'
                              )
                              .css("display", "none"),
                        i >= e.length - 1 &&
                          s
                            .find(
                              '*[data-ref="app-messages-list-item-linebreak"]'
                            )
                            .css("opacity", "0"),
                        a()(s).on("click", this.message_CLICK.bind(this)),
                        t.push(s);
                    }
                  }
                  var d = "no unread message";
                  n
                    ? ((d = ""
                        .concat(n, " unread message")
                        .concat(n > 1 ? "s" : "")),
                      this.refs.title.attr("style", ""),
                      this.refs.buttonConversations
                        .find('*[data-ref="notification"]')
                        .css("display", "block"),
                      this.refs.buttonConversations
                        .find(
                          '*[data-ref="app-messages-list-item-label-number"]'
                        )
                        .html(n))
                    : (this.refs.title.css("background-color", "transparent"),
                      this.refs.buttonConversations
                        .find('*[data-ref="notification"]')
                        .css("display", "none")),
                    this.refs.title.html(d),
                    this.refs.messagesList.html(t);
                },
              },
              {
                key: "updateContacts",
                value: function () {
                  for (
                    var e = M.instance.data.sort(function (e, t) {
                        return t.time - e.time;
                      }),
                      t = [],
                      n = {},
                      i = 0;
                    i < e.length;
                    i++
                  ) {
                    var o = e[i],
                      s = o.name.substr(0, 1);
                    n[s] || (n[s] = []), n[s].push(o);
                  }
                  for (var r in n) {
                    var l = r,
                      c = n[r],
                      u = this.template.contactsTemplate.clone();
                    u.find(
                      '*[data-ref="app-messages-contact-item-letter"]'
                    ).html(l);
                    for (var h = 0; h < c.length; h++) {
                      var d = c[h],
                        f = this.template.contactsDetailsTemplate.clone();
                      f
                        .find(
                          '*[data-ref="app-messages-contact-item-details-container-title"]'
                        )
                        .css("background-color", d.color),
                        f
                          .find(
                            '*[data-ref="app-messages-contact-item-details-title"]'
                          )
                          .html(d.name.substr(0, 1)),
                        f
                          .find(
                            '*[data-ref="app-messages-contact-item-details-name"]'
                          )
                          .html(d.name),
                        h >= c.length - 1 &&
                          f
                            .find(
                              '*[data-ref="app-messages-contact-item-details-linebreak"]'
                            )
                            .css("opacity", "0"),
                        f.attr("data-name", d.name),
                        a()(f).on("click", this.contact_CLICK.bind(this)),
                        u
                          .find('*[data-ref="app-messages-contact-item-list"]')
                          .append(f);
                    }
                    t.push(u);
                  }
                  this.refs.contactTitle.html(
                    ""
                      .concat(e.length, " contact")
                      .concat(e.length > 1 ? "s" : "")
                  ),
                    this.refs.contactList.html(t);
                },
              },
              {
                key: "update",
                value: function () {
                  this.updateContacts(), this.updateConversations();
                },
              },
              {
                key: "buttonConversations_CLICK",
                value: function () {
                  switch (
                    (this.refs.contactContainer.css("display", "none"),
                    this.refs.buttonConversations
                      .find('*[data-ref="button-dash-enabled"]')
                      .css("display", "block"),
                    this.refs.buttonConversations
                      .find('*[data-ref="button-dash-disabled"]')
                      .css("display", "none"),
                    this.refs.buttonContacts
                      .find('*[data-ref="button-dash-enabled"]')
                      .css("display", "none"),
                    this.refs.buttonContacts
                      .find('*[data-ref="button-dash-disabled"]')
                      .css("display", "block"),
                    this.refs.filterConainter.css("display", "block"),
                    this.refs.titleMessagesContainer.css("display", "block"),
                    this.refs.titleContactsContainer.css("display", "none"),
                    this.state.messagesType)
                  ) {
                    case "all":
                      this.refs.chatContainer.css("display", "block");
                      break;
                    case "category":
                      this.refs.categoryContainer.css("display", "block");
                  }
                  this.refs.content.scrollTop(0);
                },
              },
              {
                key: "buttonContacts_CLICK",
                value: function () {
                  this.refs.chatContainer.css("display", "none"),
                    this.refs.contactContainer.css("display", "block"),
                    this.refs.buttonConversations
                      .find('*[data-ref="button-dash-enabled"]')
                      .css("display", "none"),
                    this.refs.buttonConversations
                      .find('*[data-ref="button-dash-disabled"]')
                      .css("display", "block"),
                    this.refs.buttonContacts
                      .find('*[data-ref="button-dash-enabled"]')
                      .css("display", "block"),
                    this.refs.buttonContacts
                      .find('*[data-ref="button-dash-disabled"]')
                      .css("display", "none"),
                    this.refs.filterConainter.css("display", "none"),
                    this.refs.titleMessagesContainer.css("display", "none"),
                    this.refs.titleContactsContainer.css("display", "block"),
                    this.refs.categoryContainer.css("display", "none"),
                    this.refs.content.scrollTop(0),
                    this.buttonContactsCounter++,
                    this.buttonContactsCounter >= 10 &&
                      M.instance.startDeveloperText(),
                    clearTimeout(this.resetContactsCounter),
                    (this.resetContactsCounter = setTimeout(
                      this.resetHiddenMessage.bind(this),
                      1e3
                    ));
                },
              },
              {
                key: "resetHiddenMessage",
                value: function () {
                  this.buttonContactsCounter = 0;
                },
              },
              {
                key: "buttonAll_CLICK",
                value: function () {
                  this.refs.buttonAll
                    .find('*[data-ref="button-rounded-enabled"]')
                    .css("display", "block"),
                    this.refs.buttonAll
                      .find('*[data-ref="button-rounded-disabled"]')
                      .css("display", "none"),
                    this.refs.buttonCategory
                      .find('*[data-ref="button-rounded-enabled"]')
                      .css("display", "none"),
                    this.refs.buttonCategory
                      .find('*[data-ref="button-rounded-disabled"]')
                      .css("display", "block"),
                    this.refs.filterConainter.css("display", "block"),
                    this.refs.chatContainer.css("display", "block"),
                    this.refs.contactContainer.css("display", "none"),
                    this.refs.categoryContainer.css("display", "none"),
                    (this.state.messagesType = "all");
                },
              },
              {
                key: "buttonCategory_CLICK",
                value: function () {
                  this.refs.buttonCategory
                    .find('*[data-ref="button-rounded-enabled"]')
                    .css("display", "block"),
                    this.refs.buttonCategory
                      .find('*[data-ref="button-rounded-disabled"]')
                      .css("display", "none"),
                    this.refs.buttonAll
                      .find('*[data-ref="button-rounded-enabled"]')
                      .css("display", "none"),
                    this.refs.buttonAll
                      .find('*[data-ref="button-rounded-disabled"]')
                      .css("display", "block"),
                    this.refs.filterConainter.css("display", "block"),
                    this.refs.chatContainer.css("display", "none"),
                    this.refs.contactContainer.css("display", "none"),
                    this.refs.categoryContainer.css("display", "block"),
                    (this.state.messagesType = "category");
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.state = { messagesType: "all" }),
                    (this.buttonContactsCounter = 0),
                    (this.resetContactsCounter = null),
                    (this.template = {
                      messagesTemplate: this.element.find(
                        '*[data-ref="app-messages-list-item-template"]'
                      ),
                      contactsTemplate: this.element.find(
                        '*[data-ref="app-messages-contact-item-template"]'
                      ),
                      contactsDetailsTemplate: this.element.find(
                        '*[data-ref="app-messages-contact-item-details-template"]'
                      ),
                    }),
                    (this.refs = {
                      content: this.element.find('*[data-ref="app-content"]'),
                      titleMessagesContainer: this.element.find(
                        '*[data-ref="app-message-title-messages-container"]'
                      ),
                      titleContactsContainer: this.element.find(
                        '*[data-ref="app-message-title-contact-container"]'
                      ),
                      title: this.element.find(
                        '*[data-ref="app-messages-title"]'
                      ),
                      contactTitle: this.element.find(
                        '*[data-ref="app-messages-contact-title"]'
                      ),
                      messagesList: this.element.find(
                        '*[data-ref="app-messages-list"]'
                      ),
                      contactList: this.element.find(
                        '*[data-ref="app-messages-contacts"]'
                      ),
                      chatContainer: this.element.find(
                        '*[data-ref="app-messages-chat-container"]'
                      ),
                      contactContainer: this.element.find(
                        '*[data-ref="app-messages-contact-container"]'
                      ),
                      categoryContainer: this.element.find(
                        '*[data-ref="app-messages-category-container"]'
                      ),
                      filterConainter: this.element.find(
                        '*[data-ref="app-messages-filter-container"]'
                      ),
                      buttonSearch: this.element.find(
                        '*[data-ref="app-messages-button-search"]'
                      ),
                      buttonConversations: this.element.find(
                        '*[data-ref="app-message-button-conversations"]'
                      ),
                      buttonContacts: this.element.find(
                        '*[data-ref="app-message-button-contacts"]'
                      ),
                      buttonAll: this.element.find(
                        '*[data-ref="app-message-button-all"]'
                      ),
                      buttonCategory: this.element.find(
                        '*[data-ref="app-message-button-category"]'
                      ),
                    }),
                    a()(this.refs.buttonConversations).on(
                      "click",
                      this.buttonConversations_CLICK.bind(this)
                    ),
                    a()(this.refs.buttonContacts).on(
                      "click",
                      this.buttonContacts_CLICK.bind(this)
                    ),
                    a()(this.refs.buttonAll).on(
                      "click",
                      this.buttonAll_CLICK.bind(this)
                    ),
                    a()(this.refs.buttonCategory).on(
                      "click",
                      this.buttonCategory_CLICK.bind(this)
                    ),
                    this.update(),
                    a()(window).on(M.EVENT.UPDATE, this.update.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        bt = (function () {
          function e(t, n) {
            mt(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            gt(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppMessages.EVENT.OPEN",
                    CLOSE: "CAppMessages.EVENT.CLOSE",
                  };
                },
              },
            ]),
            gt(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Et(e, t);
                },
              },
            ]),
            e
          );
        })();
      function wt(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function vt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Tt(e, t, n) {
        return t && vt(e.prototype, t), n && vt(e, n), e;
      }
      var kt = (function () {
          function e(t, n) {
            wt(this, e), this.render(t, n);
          }
          return (
            Tt(e, [
              {
                key: "update",
                value: function () {
                  for (
                    var e = M.instance.data, t = 0, n = 0;
                    n < e.length;
                    n++
                  ) {
                    t += e[n].chat.slice().filter(function (e) {
                      return 0 == e.readed;
                    }).length;
                  }
                  this.refs.label.html(t),
                    t
                      ? this.element.css("display", "block")
                      : this.element.css("display", "none");
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      label: this.element.find(
                        '*[data-ref="app-messages-list-item-label-number"]'
                      ),
                    }),
                    this.update(),
                    a()(window).on(M.EVENT.UPDATE, this.update.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Ct = (function () {
          function e(t, n) {
            wt(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Tt(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppMessagesNotificationLabel.EVENT.OPEN",
                    CLOSE: "CAppMessagesNotificationLabel.EVENT.CLOSE",
                  };
                },
              },
            ]),
            Tt(e, [
              {
                key: "render",
                value: function (e, t) {
                  new kt(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Ot(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Pt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Nt(e, t, n) {
        return t && Pt(e.prototype, t), n && Pt(e, n), e;
      }
      var _t = (function () {
          function e(t, n) {
            Ot(this, e), this.render(t, n);
          }
          return (
            Nt(e, [
              {
                key: "lock",
                value: function () {
                  this.element.css("display", "block");
                },
              },
              {
                key: "unlock",
                value: function () {
                  this.element.css("display", "none");
                },
              },
              {
                key: "navigateToApp",
                value: function (e, t, n) {
                  (this.data.switchAppName = t),
                    this.lock(),
                    "news" == n
                      ? (a()(window).trigger(ue.EVENT.BACK),
                        o.a.delayedCall(0.8, this.onApp_CLOSE.bind(this)))
                      : (a()(window).trigger(ue.EVENT.CLOSE_PREVENTED_APP),
                        o.a.delayedCall(0.8, this.onApp_CLOSE.bind(this)));
                },
              },
              {
                key: "onApp_CLOSE",
                value: function () {
                  a()(window).trigger(_e.EVENT.START, [
                    this.data.switchAppName,
                  ]),
                    o.a.delayedCall(0.6, this.onApp_OPEN.bind(this));
                },
              },
              {
                key: "onApp_OPEN",
                value: function () {
                  this.unlock();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.data = { switchAppName: "" }),
                    a()(window).on(St.EVENT.LOCK, this.lock.bind(this)),
                    a()(window).on(St.EVENT.UNLOCK, this.unlock.bind(this)),
                    a()(window).on(
                      St.EVENT.NAVIGATE_TO_APP,
                      this.navigateToApp.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        St = (function () {
          function e(t, n) {
            Ot(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Nt(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    LOCK: "CAppLocker.EVENT.LOCK",
                    UNLOCK: "CAppLocker.EVENT.UNLOCK",
                    NAVIGATE_TO_APP: "CAppLocker.EVENT.NAVIGATE_TO_APP",
                  };
                },
              },
            ]),
            Nt(e, [
              {
                key: "render",
                value: function (e, t) {
                  new _t(e, t);
                },
              },
            ]),
            e
          );
        })(),
        At = St;
      function It(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Vt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function xt(e, t, n) {
        return t && Vt(e.prototype, t), n && Vt(e, n), e;
      }
      var Lt = (function () {
          function e(t, n) {
            It(this, e), this.render(t, n);
          }
          return (
            xt(e, [
              {
                key: "show",
                value: function (e) {
                  if (!this.onTransition) {
                    (this.conversation = e),
                      (this.onTransition = !0),
                      (this.isAvailable = !0),
                      (this.refs.audio.currentTime = 0),
                      this.refs.audio.play();
                    var t = e.chat
                      .slice()
                      .reverse()
                      .filter(function (e) {
                        return "from" == e.direction;
                      })[0].message;
                    this.element.css("display", "block");
                    var n = e.name,
                      i = t;
                    this.refs.name.html(n),
                      this.refs.message.html("".concat(i.substr(0, 20), "...")),
                      o.a.set(this.refs.container, { width: "auto", scale: 1 });
                    var a = this.refs.container.get(0).getBoundingClientRect();
                    o.a.fromTo(
                      this.refs.container,
                      { opacity: 0, scale: 0.9 },
                      { opacity: 1, scale: 1, duration: 0.3, ease: "linear" }
                    ),
                      o.a.fromTo(
                        this.refs.container,
                        { y: -80 },
                        { y: 0, duration: 0.6, ease: "back.out" }
                      ),
                      o.a.fromTo(
                        this.refs.container,
                        { width: 37 },
                        {
                          width: a.width + 5,
                          ease: "power3.inOut",
                          delay: 0.55,
                        }
                      ),
                      o.a.fromTo(
                        this.refs.icon,
                        { scale: 1 },
                        { scale: 0.8, delay: 0.55, ease: "power3.inOut" }
                      ),
                      o.a.fromTo(
                        [this.refs.name, this.refs.message],
                        { opacity: 0, x: 0, y: 0, z: 0 },
                        {
                          opacity: 1,
                          duration: 0.6,
                          ease: "power2.out",
                          delay: 0.7,
                          onComplete: this.on_SHOW.bind(this),
                        }
                      );
                  }
                },
              },
              {
                key: "on_SHOW",
                value: function () {
                  o.a.to(this, {
                    duration: 3,
                    delay: 0,
                    onComplete: this.hide.bind(this),
                  });
                },
              },
              {
                key: "hide",
                value: function () {
                  (this.isAvailable = !1),
                    o.a.to([this.refs.name, this.refs.message], {
                      opacity: 0,
                      duration: 0.6,
                      ease: "power2.out",
                      delay: 0,
                    }),
                    o.a.to(this.refs.container, {
                      width: 37,
                      duration: 0.6,
                      ease: "power3.inOut",
                      delay: 0,
                    }),
                    o.a.to(this.refs.icon, {
                      scale: 1,
                      duration: 0.6,
                      ease: "power3.inOut",
                      delay: 0,
                    }),
                    o.a.to(this.refs.container, {
                      y: -80,
                      duration: 0.6,
                      ease: "back.in",
                      delay: 0.5,
                    }),
                    o.a.to(this.refs.container, {
                      opacity: 0,
                      scale: 0.9,
                      duration: 0.3,
                      delay: 0.75,
                      ease: "linear",
                      onComplete: this.on_HIDE.bind(this),
                    });
                },
              },
              {
                key: "on_HIDE",
                value: function () {
                  o.a.set(this.refs.container, { width: "auto" }),
                    this.element.css("display", "none"),
                    (this.onTransition = !1);
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  this.show(t);
                },
              },
              {
                key: "on_CLICK",
                value: function (e) {
                  if (this.isAvailable) {
                    o.a.killTweensOf(this), this.hide();
                    for (var t = -1, n = 0; n < M.instance.data.length; n++) {
                      M.instance.data[n].name == this.conversation.name &&
                        (t = n);
                    }
                    if (-1 != t)
                      if (
                        (y.instance.trackPage(
                          "Messages",
                          "/app/messages/notification/".concat(
                            k.slugfy(this.conversation.name)
                          )
                        ),
                        ("" != window.app && "messages" != window.app) ||
                          window.news)
                      )
                        "" != window.app &&
                          (a()(window).trigger(pt.EVENT.OPEN, [t]),
                          a()(window).trigger(At.EVENT.NAVIGATE_TO_APP, [
                            "messages",
                          ]));
                      else {
                        var i = a()('*[data-app-link-id="messages"]');
                        a()(window).trigger(pt.EVENT.OPEN, [t]),
                          a()(window).trigger(Je.EVENT.OPEN, [
                            "messages",
                            i,
                            !0,
                          ]);
                      }
                  }
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.onTransition = !1),
                    (this.isAvailable = !1),
                    (this.conversation = null),
                    (this.refs = {
                      container: this.element.find(
                        '*[data-ref="app-messages-notification-container"]'
                      ),
                      audio: this.element
                        .find('*[data-ref="app-messages-notification-audio"]')
                        .get(0),
                      icon: this.element.find(
                        '*[data-ref="app-messages-notification-icon"]'
                      ),
                      name: this.element.find(
                        '*[data-ref="app-messages-notification-contact-name"]'
                      ),
                      message: this.element.find(
                        '*[data-ref="app-messages-notification-contact-message"]'
                      ),
                    }),
                    this.element.on("click", this.on_CLICK.bind(this)),
                    a()(window).on(M.EVENT.NEW_MESSAGE, this.update.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Dt = (function () {
          function e(t, n) {
            It(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            xt(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppMessagesNotification.EVENT.OPEN",
                    CLOSE: "CAppMessagesNotification.EVENT.CLOSE",
                  };
                },
              },
            ]),
            xt(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Lt(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Rt(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Bt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Mt(e, t, n) {
        return t && Bt(e.prototype, t), n && Bt(e, n), e;
      }
      var Ut = (function () {
          function e(t, n) {
            Rt(this, e), this.render(t, n);
          }
          return (
            Mt(e, [
              {
                key: "on_CLICK",
                value: function (e) {
                  o.a.fromTo(
                    this.refs.overlay,
                    { scale: 0.8 },
                    { scale: 1, duration: 0.6, ease: "power3.out" }
                  ),
                    o.a.fromTo(
                      this.refs.overlay,
                      { opacity: 1 },
                      {
                        opacity: 0,
                        duration: 0.6,
                        delay: 0.3,
                        ease: "power3.inOut",
                      }
                    );
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      overlay: this.element.find(
                        '*[data-ref="button-background-overlay"]'
                      ),
                    }),
                    o.a.set(this.refs.overlay, { opacity: 0 }),
                    a()(this.element).on("click", this.on_CLICK.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Ht = (function () {
          function e(t, n) {
            Rt(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Mt(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CButtonBackground.EVENT.OPEN",
                    CLOSE: "CButtonBackground.EVENT.CLOSE",
                  };
                },
              },
            ]),
            Mt(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Ut(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Kt(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function qt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function jt(e, t, n) {
        return t && qt(e.prototype, t), n && qt(e, n), e;
      }
      var Ft = (function () {
          function e(t, n) {
            Kt(this, e), this.render(t, n);
          }
          return (
            jt(e, [
              {
                key: "on_CLICK",
                value: function () {
                  "active" == this.state.status
                    ? (this.state.status = "deactive")
                    : (this.state.status = "active"),
                    y.instance.trackPage(
                      "Dashboard - Notifications",
                      "/app/dashboard/notifications/"
                        .concat(this.data.tracker, "/")
                        .concat(this.state.status)
                    ),
                    o.a.to(this.refs.enabledIcon, {
                      duration: 0.1,
                      opacity: "active" == this.state.status ? 1 : 0,
                    });
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.state = { status: this.element.data("status") }),
                    (this.data = { tracker: this.element.data("tracker") }),
                    (this.refs = {
                      enabledIcon: this.element.find(
                        '*[data-ref="dashboard-notification-button-enabled"]'
                      ),
                    }),
                    o.a.set(this.refs.enabledIcon, {
                      opacity: "active" == this.state.status ? 1 : 0,
                    }),
                    a()(this.element).on(
                      "touchstart",
                      this.on_CLICK.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        Yt = (function () {
          function e(t, n) {
            Kt(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            jt(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            jt(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Ft(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Wt(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Gt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Xt(e, t, n) {
        return t && Gt(e.prototype, t), n && Gt(e, n), e;
      }
      var zt = (function () {
          function e(t, n) {
            Wt(this, e), this.render(t, n);
          }
          return (
            Xt(e, [
              {
                key: "updateBackgroundBlur",
                value: function () {
                  var e = 20 * this.blur.value;
                  e = Math.floor(e);
                },
              },
              {
                key: "on_TOUCH_END",
                value: function (e) {
                  switch (this.direction) {
                    case 1:
                      (this.onTransition = !0),
                        o.a.killTweensOf([
                          this.refs.bar,
                          this.refs.text,
                          this.refs.background,
                          this.blur,
                        ]),
                        o.a.to(this.refs.bar, {
                          duration: 0.3,
                          y: "0%",
                          ease: "power2.out",
                        }),
                        o.a.to(this.refs.text, {
                          duration: 0.3,
                          opacity: 1,
                          ease: "power2.out",
                        }),
                        o.a.to(this.refs.background, {
                          duration: 0.3,
                          opacity: 1,
                          ease: "power2.out",
                          onComplete: this.onTransition_COMPLETE.bind(this),
                        }),
                        o.a.to(this.blur, {
                          duration: 0.3,
                          value: 1,
                          ease: "power2.out",
                          onUpdate: this.updateBackgroundBlur.bind(this),
                        }),
                        this.refs.overlay.css("display", "block"),
                        (this.state.isOpened = !0),
                        (window.dashboardNotificationOpen = !0),
                        y.instance.trackPage(
                          "Dashboard - Notifications",
                          "/app/dashboard/notifications"
                        );
                      break;
                    case -1:
                      (this.onTransition = !0),
                        o.a.killTweensOf([
                          this.refs.bar,
                          this.refs.text,
                          this.refs.background,
                          this.blur,
                        ]),
                        o.a.to(this.refs.bar, {
                          duration: 0.3,
                          y: "-100%",
                          ease: "power2.out",
                        }),
                        o.a.to(this.refs.text, {
                          duration: 0.3,
                          opacity: 0,
                          ease: "power2.out",
                        }),
                        o.a.to(this.refs.background, {
                          duration: 0.3,
                          opacity: 0,
                          ease: "power2.out",
                          onComplete: this.onTransition_COMPLETE.bind(this),
                        }),
                        o.a.to(this.blur, {
                          duration: 0.3,
                          value: 0,
                          ease: "power2.out",
                          onUpdate: this.updateBackgroundBlur.bind(this),
                        }),
                        this.refs.overlay.css("display", "none"),
                        (this.state.isOpened = !1),
                        (window.dashboardNotificationOpen = !1),
                        y.instance.trackPage("Dashboard", "/app/dashboard");
                  }
                  a()(document).off("touchend"), a()(document).off("touchmove");
                },
              },
              {
                key: "on_TOUCH_MOVE",
                value: function (e) {
                  this.moveCounter++;
                  var t = e.touches[0] || e.changedTouches[0];
                  this.currentTouchPosition = {
                    x: t.pageX - this.initialTouchPosition.x,
                    y: t.pageY - this.initialTouchPosition.y,
                  };
                  var n = (100 * this.currentTouchPosition.y) / this.barHeight,
                    i = this.currentTouchPosition.y / this.barHeight;
                  if (
                    ((this.currentTouchPosition.y > this.threshold ||
                      this.currentTouchPosition.y < this.threshold) &&
                      this.moveCounter++,
                    this.moveCounter)
                  ) {
                    (n = (n = this.state.isOpened ? n : -100 + n) > 0 ? 0 : n),
                      o.a.to(this.refs.bar, {
                        duration: 0.1,
                        y: "".concat(n, "%"),
                      }),
                      this.state.isOpened && (i += 1);
                    var a = i;
                    o.a.to(this.refs.background, { duration: 0.1, opacity: i }),
                      o.a.to(this.refs.text, { duration: 0.1, opacity: a }),
                      o.a.to(this.blur, {
                        value: i,
                        onUpdate: this.updateBackgroundBlur.bind(this),
                      });
                    var s = n + 100;
                    s >= this.oldPercent
                      ? (this.direction = 1)
                      : (this.direction = -1),
                      (this.oldPercent = s);
                  }
                },
              },
              {
                key: "on_TOUCH_START",
                value: function (e) {
                  if (!this.onTransition) {
                    (this.direction = 0),
                      (this.oldPercent = 0),
                      (this.moveCounter = 0),
                      (this.barHeight = this.refs.bar.height());
                    var t = e.touches[0] || e.changedTouches[0];
                    (this.initialTouchPosition = { x: t.pageX, y: t.pageY }),
                      (this.currentTouchPosition = {
                        x: t.pageX - this.initialTouchPosition.x,
                        y: t.pageY - this.initialTouchPosition.y,
                      }),
                      a()(document).on(
                        "touchend",
                        this.on_TOUCH_END.bind(this)
                      ),
                      a()(document).on(
                        "touchmove",
                        this.on_TOUCH_MOVE.bind(this)
                      );
                  }
                },
              },
              {
                key: "onTransition_COMPLETE",
                value: function () {
                  (this.onTransition = !1), (this.onStart = !1);
                },
              },
              {
                key: "app_INIT",
                value: function () {
                  this.refs.hit.css("height", "40px");
                },
              },
              {
                key: "app_DISPOSE",
                value: function () {
                  window.dashboardSearchOpen ||
                    this.refs.hit.css("height", "120px");
                },
              },
              {
                key: "start",
                value: function (e) {
                  if (!this.onTransition && !this.onStart) {
                    (this.onStart = !0),
                      (this.direction = 0),
                      (this.oldPercent = 0),
                      (this.moveCounter = 0),
                      (this.barHeight = this.refs.bar.height());
                    var t = e.touches[0] || e.changedTouches[0];
                    (this.initialTouchPosition = { x: t.pageX, y: t.pageY }),
                      (this.currentTouchPosition = {
                        x: t.pageX - this.initialTouchPosition.x,
                        y: t.pageY - this.initialTouchPosition.y,
                      }),
                      a()(document).on(
                        "touchend",
                        this.on_TOUCH_END.bind(this)
                      ),
                      a()(document).on(
                        "touchmove",
                        this.on_TOUCH_MOVE.bind(this)
                      );
                  }
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.direction = 0),
                    (this.oldPercent = 0),
                    (this.onTransition = !1),
                    (this.onStart = !1),
                    (window.dashboardNotificationOpen = !1),
                    (this.state = { isOpened: !1 }),
                    (this.initialTouchPosition = { x: 0, y: 0 }),
                    (this.currentTouchPosition = { x: 0, y: 0 }),
                    (this.currentPage = 0),
                    (this.threshold = 10),
                    (this.moveCounter = 0),
                    (this.barHeight = 0),
                    (this.blur = { value: 0 }),
                    (this.refs = {
                      background: this.element.find(
                        '*[data-ref="dashboard-notifications-background"]'
                      ),
                      text: this.element.find(
                        '*[data-ref="dashboard-notifications-text"]'
                      ),
                      bar: this.element.find(
                        '*[data-ref="dashboard-notifications-bar"]'
                      ),
                      hit: this.element.find(
                        '*[data-ref="dashboard-notifications-hit"]'
                      ),
                      overlay: this.element.find(
                        '*[data-ref="dashboard-notifications-overlay"]'
                      ),
                    }),
                    o.a.set(this.refs.background, { opacity: 0 }),
                    o.a.set(this.refs.bar, { y: "-100%" }),
                    this.element.on(
                      "touchstart",
                      this.on_TOUCH_START.bind(this)
                    ),
                    a()(window).on(Je.EVENT.INIT, this.app_INIT.bind(this)),
                    a()(window).on(
                      Je.EVENT.DISPOSE,
                      this.app_DISPOSE.bind(this)
                    ),
                    a()(window).on(
                      ue.EVENT.OPEN_DASHBOARD_SEARCH,
                      this.app_INIT.bind(this)
                    ),
                    a()(window).on(
                      ue.EVENT.CLOSE_DASHBOARD_SEARCH,
                      this.app_DISPOSE.bind(this)
                    ),
                    (window.dashboard_notification = this);
                },
              },
            ]),
            e
          );
        })(),
        Zt = (function () {
          function e(t, n) {
            Wt(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Xt(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            Xt(e, [
              {
                key: "render",
                value: function (e, t) {
                  new zt(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Jt(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Qt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function $t(e, t, n) {
        return t && Qt(e.prototype, t), n && Qt(e, n), e;
      }
      var en = (function () {
          function e(t, n) {
            Jt(this, e), this.render(t, n);
          }
          return (
            $t(e, [
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    o.a.set(this.element, { x: "-100%" });
                },
              },
            ]),
            e
          );
        })(),
        tn = (function () {
          function e(t, n) {
            Jt(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            $t(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            $t(e, [
              {
                key: "render",
                value: function (e, t) {
                  new en(e, t);
                },
              },
            ]),
            e
          );
        })();
      function nn(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function an(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function on(e, t, n) {
        return t && an(e.prototype, t), n && an(e, n), e;
      }
      var sn = (function () {
          function e(t, n) {
            nn(this, e), this.render(t, n);
          }
          return (
            on(e, [
              {
                key: "button_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget),
                    n = t.data("id");
                  this.refs.containers.css("display", "none"),
                    this.element
                      .find('*[data-filter="'.concat(n, '"]'))
                      .css("display", "block"),
                    this.refs.buttons
                      .find('*[data-ref="news-button-enabled"]')
                      .css("display", "none"),
                    t
                      .find('*[data-ref="news-button-enabled"]')
                      .css("display", "block");
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      buttons: this.element.find(
                        '*[data-component="news-button"]'
                      ),
                      containers: this.element.find(
                        '*[data-ref="news-container"]'
                      ),
                    }),
                    this.refs.containers.css("display", "none"),
                    this.refs.containers.eq(0).css("display", "block"),
                    this.refs.buttons
                      .eq(0)
                      .find('*[data-ref="news-button-enabled"]')
                      .css("display", "block"),
                    a()(this.refs.buttons).on(
                      "click",
                      this.button_CLICK.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        rn = (function () {
          function e(t, n) {
            nn(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            on(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            on(e, [
              {
                key: "render",
                value: function (e, t) {
                  new sn(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ln = n("vDqi"),
        cn = n.n(ln);
      function un(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function hn(e, t, n) {
        return t && un(e.prototype, t), n && un(e, n), e;
      }
      var dn = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.useStaticWeather = !0),
            (this.isLoaded = this.useStaticWeather),
            (this.data = {
              location: "Current location",
              country: "",
              temp: "18",
              description: "Light Rain",
              date: new Date(),
            }),
            this.useStaticWeather ||
              (navigator.geolocation &&
                navigator.geolocation.getCurrentPosition(
                  this.on_POSITION.bind(this)
                ));
        }
        return (
          hn(e, null, [
            {
              key: "EVENT",
              get: function () {
                return { UPDATE: "CAppWeatherData.EVENT.UPDATE" };
              },
            },
            {
              key: "instance",
              get: function () {
                return (
                  this._instance ||
                    (this._instance = new e("singletonEnforcer")),
                  this._instance
                );
              },
            },
          ]),
          hn(e, [
            {
              key: "on_POSITION",
              value: function (e) {
                this.load(e.coords.latitude, e.coords.longitude);
              },
            },
            {
              key: "load",
              value: function (t, n) {
                var i = {
                  method: "GET",
                  url: "https://community-open-weather-map.p.rapidapi.com/forecast",
                  params: { units: "metric", lat: t, lon: n, cnt: "1" },
                  headers: {
                    "x-rapidapi-key":
                      "d2c0ac94demsh20b7a8c0e879311p169566jsn0076ad73eb3e",
                    "x-rapidapi-host":
                      "community-open-weather-map.p.rapidapi.com",
                  },
                };
                cn.a
                  .request(i)
                  .then(
                    function (t) {
                      (this.data.country = t.data.city.country),
                        (this.data.location = t.data.city.name),
                        (this.data.temp = t.data.list[0].main.temp),
                        (this.data.description =
                          t.data.list[0].weather[0].description),
                        (this.isLoaded = !0),
                        a()(window).trigger(e.EVENT.UPDATE);
                    }.bind(this)
                  )
                  .catch(function (e) {
                    console.error(e);
                  });
              },
            },
          ]),
          e
        );
      })();
      function fn(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function pn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function mn(e, t, n) {
        return t && pn(e.prototype, t), n && pn(e, n), e;
      }
      var yn = (function () {
          function e(t, n) {
            fn(this, e), this.render(t, n);
          }
          return (
            mn(e, [
              {
                key: "update",
                value: function () {
                  o.a.to(this.element, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power3.out",
                  });
                  var e = dn.instance.data,
                    t = e.date.getHours() > 11 ? "pm" : "am";
                  this.refs.celsius.html(Math.round(e.temp)),
                    this.refs.date.html(
                      ""
                        .concat(e.date.getDate(), "/")
                        .concat(e.date.getMonth() + 1)
                    ),
                    this.refs.time.html(
                      ""
                        .concat(e.date.getHours() % 12, ":")
                        .concat(k.toNumber(e.date.getMinutes()), " ")
                        .concat(t)
                    ),
                    this.refs.location.html("".concat(e.location));
                  var n = e.description;
                  (n = n.substr(0, 1).toUpperCase() + n.substr(1, n.length)),
                    this.refs.description.html("".concat(n)),
                    o.a.fromTo(
                      this.refs.icon,
                      { rotation: -90, opacity: 0 },
                      {
                        rotation: -360,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                      }
                    );
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      celsius: this.element.find(
                        '*[data-ref="weather-celsius"]'
                      ),
                      date: this.element.find('*[data-ref="weather-date"]'),
                      time: this.element.find('*[data-ref="weather-time"]'),
                      location: this.element.find(
                        '*[data-ref="weather-location"]'
                      ),
                      country: this.element.find(
                        '*[data-ref="weather-country"]'
                      ),
                      description: this.element.find(
                        '*[data-ref="weather-description"]'
                      ),
                      icon: this.element.find('*[data-ref="weather-icon"]'),
                    }),
                    o.a.set(this.element, { opacity: 0 }),
                    this.element.on("click", this.update.bind(this)),
                    a()(window).on(dn.EVENT.UPDATE, this.update.bind(this)),
                    dn.instance.isLoaded && this.update();
                },
              },
            ]),
            e
          );
        })(),
        gn = (function () {
          function e(t, n) {
            fn(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            mn(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN_APP: "CWeather.EVENT.OPEN_APP",
                    CLOSE_APP: "CWeather.EVENT.CLOSE_APP",
                  };
                },
              },
            ]),
            mn(e, [
              {
                key: "render",
                value: function (e, t) {
                  new yn(e, t);
                },
              },
            ]),
            e
          );
        })();
      function En(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function bn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function wn(e, t, n) {
        return t && bn(e.prototype, t), n && bn(e, n), e;
      }
      var vn = (function () {
          function e(t, n) {
            En(this, e), this.render(t, n);
          }
          return (
            wn(e, [
              {
                key: "update",
                value: function () {
                  var e = new Date(),
                    t = k.toNumber(e.getHours()),
                    n = k.toNumber(e.getMinutes()),
                    i = "".concat(t, ":").concat(n);
                  i != this.time &&
                    ((this.time = i), this.element.html(this.time));
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.time = ""),
                    (this.interval = setInterval(this.update.bind(this), 100));
                },
              },
            ]),
            e
          );
        })(),
        Tn = (function () {
          function e(t, n) {
            En(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            wn(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            wn(e, [
              {
                key: "render",
                value: function (e, t) {
                  new vn(e, t);
                },
              },
            ]),
            e
          );
        })();
      function kn(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Cn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function On(e, t, n) {
        return t && Cn(e.prototype, t), n && Cn(e, n), e;
      }
      var Pn = (function () {
          function e(t, n) {
            kn(this, e), this.render(t, n);
          }
          return (
            On(e, [
              {
                key: "animate",
                value: function () {
                  o.a.set(this.element, { opacity: this.visible ? 0 : 1 }),
                    (this.visible = !this.visible),
                    (this.interval = setTimeout(this.animate.bind(this), 500));
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.interval = null),
                    (this.visible = !0),
                    this.animate();
                },
              },
            ]),
            e
          );
        })(),
        Nn = (function () {
          function e(t, n) {
            kn(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            On(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            On(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Pn(e, t);
                },
              },
            ]),
            e
          );
        })();
      function _n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Sn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function An(e, t, n) {
        return t && Sn(e.prototype, t), n && Sn(e, n), e;
      }
      var In = (function () {
          function e(t, n) {
            _n(this, e), this.render(t, n);
          }
          return (
            An(e, [
              {
                key: "setNumber",
                value: function () {
                  var e = this.currentValue;
                  switch (e) {
                    case "clear":
                      this.currentText = "";
                      break;
                    case "video":
                    case "call":
                      break;
                    case "back":
                      this.currentText = this.currentText.substr(
                        0,
                        this.currentText.length - 1
                      );
                      break;
                    default:
                      this.currentText = this.currentText + String(e);
                  }
                  (this.currentText = this.currentText.substr(0, 10)),
                    this.currentText.length
                      ? this.state.isExtraVisible ||
                        (o.a.to(this.refs.buttonExtra, {
                          opacity: 1,
                          duration: 0.3,
                          ease: "power3.out",
                        }),
                        (this.state.isExtraVisible = !0))
                      : this.state.isExtraVisible &&
                        (o.a.to(this.refs.buttonExtra, {
                          opacity: 0,
                          duration: 0.3,
                          ease: "power3.out",
                        }),
                        (this.state.isExtraVisible = !1)),
                    this.refs.number.html(this.currentText);
                },
              },
              {
                key: "button_TOUCH_END",
                value: function () {
                  clearInterval(this.interval);
                },
              },
              {
                key: "button_TOUCH_START",
                value: function (e) {
                  var t = a()(e.currentTarget),
                    n = t.data("value"),
                    i = t.find('*[data-ref="app-call-button-background"]');
                  i.length &&
                    (o.a.killTweensOf(i),
                    o.a.fromTo(
                      i,
                      { scale: 0.5 },
                      {
                        scale: 1.1,
                        duration: 0.4,
                        delay: 0,
                        ease: "power3.out",
                      }
                    ),
                    o.a.fromTo(
                      i,
                      { opacity: 1 },
                      {
                        opacity: 0,
                        duration: 0.2,
                        delay: 0.2,
                        ease: "power3.out",
                      }
                    ));
                  var s = t.find('*[data-ref="app-call-button-number"]'),
                    r = t.find('*[data-ref="app-call-button-letter"]');
                  s.length &&
                    (o.a.killTweensOf([s, r]),
                    o.a.fromTo(
                      [s, r],
                      { scale: 0.6 },
                      { scale: 1, duration: 0.4, ease: "power3.out" }
                    )),
                    (this.currentValue = n),
                    this.setNumber(),
                    clearInterval(this.interval),
                    (this.interval = setInterval(
                      this.setNumber.bind(this),
                      200
                    ));
                },
              },
              {
                key: "buttonStart_CLICK",
                value: function () {
                  if (
                    this.currentText.length > 3 &&
                    -1 == this.currentText.indexOf("#") &&
                    -1 == this.currentText.indexOf("*")
                  ) {
                    var e = {
                      name: "",
                      phone: this.currentText,
                      country: "New Zealand",
                    };
                    a()(window).trigger(F.EVENT.OPEN, [F.TYPE.OUTGOING, e]);
                  }
                },
              },
              {
                key: "outgoing_OPEN",
                value: function (e) {
                  (this.currentValue = "clear"), this.setNumber();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.currentText = ""),
                    (this.currentValue = ""),
                    (this.interval = null),
                    (this.state = { isExtraVisible: !1 }),
                    (this.refs = {
                      number: this.element.find(
                        '*[data-ref="app-call-number"]'
                      ),
                      button: this.element.find(
                        '*[data-ref="app-call-button"]'
                      ),
                      buttonExtra: this.element.find(
                        '*[data-ref="app-call-button-extra"]'
                      ),
                      background: this.element.find(
                        '*[data-ref="app-call-button-background"]'
                      ),
                      buttonStart: this.element.find(
                        '*[data-ref="app-call-button-start-current-call"]'
                      ),
                    }),
                    o.a.set(this.refs.background, { opacity: 0 }),
                    o.a.set(this.refs.buttonExtra, { opacity: 0 }),
                    a()(this.refs.buttonStart).on(
                      "click",
                      this.buttonStart_CLICK.bind(this)
                    ),
                    a()(this.refs.button).on(
                      "touchstart",
                      this.button_TOUCH_START.bind(this)
                    ),
                    a()(this.element).on(
                      "touchend",
                      this.button_TOUCH_END.bind(this)
                    ),
                    a()(window).on(
                      F.EVENT.ON_OPEN,
                      this.outgoing_OPEN.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        Vn = (function () {
          function e(t, n) {
            _n(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            An(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppCall.EVENT.OPEN",
                    CLOSE: "CAppCall.EVENT.CLOSE",
                  };
                },
              },
            ]),
            An(e, [
              {
                key: "render",
                value: function (e, t) {
                  new In(e, t);
                },
              },
            ]),
            e
          );
        })();
      function xn(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ln(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Dn(e, t, n) {
        return t && Ln(e.prototype, t), n && Ln(e, n), e;
      }
      var Rn = (function () {
          function e(t, n) {
            xn(this, e), this.render(t, n);
          }
          return (
            Dn(e, [
              {
                key: "on_CLICK",
                value: function (e) {
                  if (window.clickable) {
                    a()(e.currentTarget);
                    switch (this.data.name) {
                      case "messages":
                        break;
                      case "call":
                        window.call();
                    }
                  }
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    a()(this.element).on("click", this.on_CLICK.bind(this)),
                    (this.data = { name: this.element.data("app-trigger-id") }),
                    (this.refs = {
                      notification: this.element.find(
                        '*[data-ref="app-trigger-notification"]'
                      ),
                    });
                },
              },
            ]),
            e
          );
        })(),
        Bn = (function () {
          function e(t, n) {
            xn(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Dn(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { START: "CAppTrigger.EVENT.START" };
                },
              },
            ]),
            Dn(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Rn(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Mn(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Un(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Hn(e, t, n) {
        return t && Un(e.prototype, t), n && Un(e, n), e;
      }
      var Kn = (function () {
          function e(t, n) {
            Mn(this, e), this.render(t, n);
          }
          return (
            Hn(e, [
              {
                key: "preload",
                value: function () {
                  var e = this.element.get(0);
                  e.src = e.dataset.src;
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  this.element = a()(e);
                  this.element.get(0);
                  a()(window).on(qn.EVENT.START, this.preload.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        qn = (function () {
          function e(t, n) {
            Mn(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Hn(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { START: "CAudio.EVENT.START" };
                },
              },
            ]),
            Hn(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Kn(e, t);
                },
              },
            ]),
            e
          );
        })(),
        jn = qn;
      function Fn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Yn(e, t, n) {
        return t && Fn(e.prototype, t), n && Fn(e, n), e;
      }
      var Wn = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.data = [
              {
                type: "image",
                url: "".concat(host, "./assets/img/camera/photo-thumb.jpg"),
              },
            ]),
            (this.cuepoints = {
              intro: [],
              top: [],
              bottom: [
                { time: 6, label: "scene-optimizer" },
                { time: 22, label: "pulse-settings" },
                { time: 23, label: "pulse-flash" },
                { time: 24, label: "pulse-timer" },
                { time: 25, label: "pulse-mode" },
                { time: 26, label: "pulse-filters" },
                { time: 27, label: "filters" },
                { time: 34, label: "shot" },
              ],
              "video-mode": [
                { time: 11, label: "single-take" },
                { time: 15, label: "more-menu" },
              ],
              "more-mode": [],
            });
        }
        return (
          Yn(e, null, [
            {
              key: "EVENT",
              get: function () {
                return { UPDATE: "CAppCameraData.EVENT.UPDATE" };
              },
            },
            {
              key: "instance",
              get: function () {
                return (
                  this._instance ||
                    (this._instance = new e("singletonEnforcer")),
                  this._instance
                );
              },
            },
          ]),
          Yn(e, [
            {
              key: "addPhoto",
              value: function (t) {
                this.data.push({ type: "image", url: t }),
                  a()(window).trigger(e.EVENT.UPDATE);
              },
            },
            {
              key: "getLastMedia",
              value: function () {
                return this.data[this.data.length - 1];
              },
            },
          ]),
          e
        );
      })();
      n("wOnQ");
      function Gn(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Xn(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function zn(e, t, n) {
        return t && Xn(e.prototype, t), n && Xn(e, n), e;
      }
      var Zn = (function () {
          function e(t, n) {
            Gn(this, e), this.render(t, n);
          }
          return (
            zn(e, [
              {
                key: "setButtonPosition",
                value: function (e) {
                  for (var t = 0, n = 0, i = 0, s = 0; s <= e; s++) {
                    var r = this.refs.button.eq(s).get(0);
                    (t += r.getBoundingClientRect().width),
                      (i = r.getBoundingClientRect().width);
                  }
                  for (var l = 0; l < e; l++) {
                    n += this.refs.button
                      .eq(l)
                      .get(0)
                      .getBoundingClientRect().width;
                  }
                  switch (
                    ((t -=
                      this.refs.button.eq(e).get(0).getBoundingClientRect()
                        .width / 2),
                    o.a.killTweensOf(this.refs.buttonVideo),
                    1 == e
                      ? o.a.fromTo(
                          this.refs.buttonVideo,
                          { opacity: 1, scale: 0 },
                          {
                            opacity: 1,
                            scale: 1,
                            duration: 0.3,
                            ease: "power3.out",
                          }
                        )
                      : o.a.to(this.refs.buttonVideo, {
                          opacity: 0,
                          duration: 0.3,
                          ease: "power3.out",
                        }),
                    this.videoShouldPlay ||
                      ((t = this.firstButtonOffset),
                      (i = this.firstButtonWidth)),
                    o.a.to(this.element, {
                      x: -t,
                      duration: 0.5,
                      ease: "power3.out",
                    }),
                    o.a.to(this.refs.overlay, {
                      x: n,
                      width: i,
                      duration: 0.5,
                      ease: "power3.out",
                    }),
                    e)
                  ) {
                    case 0:
                      this.videoShouldPlay &&
                        a()(window).trigger(gi.EVENT.PLAY_BOTTOM_VIDEO),
                        Je.removeInApp("camera-mode");
                      break;
                    case 1:
                      this.videoShouldPlay &&
                        a()(window).trigger(gi.EVENT.PLAY_VIDEO_MODE),
                        Je.removeInApp("camera-mode");
                      break;
                    case 2:
                      this.videoShouldPlay &&
                        a()(window).trigger(gi.EVENT.PLAY_MORE_MODE),
                        Je.addInApp("camera-mode");
                  }
                  a()(window).trigger(Jn.EVENT.UPDATE, [e]),
                    (this.videoShouldPlay = !0);
                },
              },
              {
                key: "button_ON_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget).data("camera-mode-index");
                  this.setButtonPosition(t);
                },
              },
              {
                key: "reset",
                value: function (e, t) {
                  t
                    ? ((this.videoShouldPlay = !1), this.setButtonPosition(0))
                    : Je.getInApp("camera-mode") &&
                      "camera" == window.app &&
                      this.setButtonPosition(0);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.videoShouldPlay = !0),
                    (this.firstButtonWidth = 80),
                    (this.firstButtonOffset = 40),
                    (this.refs = {
                      content: this.element.find(
                        '*[data-ref="camera-mode-content"]'
                      ),
                      container: this.element.find(
                        '*[data-ref="camera-mode-container"]'
                      ),
                      button: this.element.find(
                        '*[data-ref="camera-mode-button"]'
                      ),
                      overlay: this.element.find(
                        '*[data-ref="camera-mode-overlay"]'
                      ),
                      buttonVideo: a()('*[data-ref="camera-button-video"]'),
                    }),
                    o.a.set(this.refs.buttonVideo, { scale: 0 }),
                    a()(this.refs.button).on(
                      "click",
                      this.button_ON_CLICK.bind(this)
                    ),
                    a()(window).on(ue.EVENT.BACK, this.reset.bind(this)),
                    a()(window).on(Jn.EVENT.RESET, this.reset.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Jn = (function () {
          function e(t, n) {
            Gn(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            zn(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    UPDATE: "CAppCameraModes.EVENT.UPDATE",
                    RESET: "CAppCameraModes.EVENT.RESET",
                  };
                },
              },
            ]),
            zn(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Zn(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Qn = Jn;
      function $n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ei(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function ti(e, t, n) {
        return t && ei(e.prototype, t), n && ei(e, n), e;
      }
      var ni = (function () {
          function e(t, n) {
            $n(this, e), this.render(t, n);
          }
          return (
            ti(e, [
              {
                key: "toogle",
                value: function () {
                  o.a.killTweensOf([this.refs.background]);
                  var e = this.data.text;
                  this.state.isActive
                    ? ((this.state.isActive = !1),
                      o.a.to(
                        this.refs.background,
                        { scale: 0 },
                        { scale: 1, duration: 0.3, ease: "power3.out" }
                      ),
                      (e += ": Off"))
                    : ((this.state.isActive = !0),
                      o.a.fromTo(
                        this.refs.background,
                        { opacity: 0 },
                        { opacity: 1, duration: 0.3, ease: "power3.out" }
                      ),
                      o.a.fromTo(
                        this.refs.background,
                        { scale: 0 },
                        { scale: 1, duration: 0.3, ease: "back.out" }
                      ),
                      o.a.fromTo(
                        this.refs.icon,
                        { rotation: 0 },
                        { rotation: 360, duration: 0.6, ease: "power3.inOut" }
                      ),
                      (e += ": On")),
                    this.showStatusMessage(e);
                },
              },
              {
                key: "showStatusMessage",
                value: function (e) {
                  e &&
                    (this.refs.statusText.html(e),
                    o.a.killTweensOf(this.refs.status),
                    o.a.fromTo(
                      this.refs.status,
                      { opacity: 1 },
                      {
                        opacity: 0,
                        duration: 0.2,
                        ease: "power3.out",
                        delay: 1,
                      }
                    ));
                },
              },
              {
                key: "auto_ON",
                value: function () {
                  this.state.isActive
                    ? (this.toogle(),
                      this.toogle(),
                      o.a.fromTo(
                        this.animation,
                        { value: 0 },
                        {
                          value: 1,
                          duration: 3,
                          onComplete: this.auto_STEP1.bind(this),
                        }
                      ))
                    : (this.toogle(),
                      o.a.fromTo(
                        this.animation,
                        { value: 0 },
                        {
                          value: 1,
                          duration: 3,
                          onComplete: this.auto_STEP1.bind(this),
                        }
                      ));
                },
              },
              {
                key: "auto_STEP1",
                value: function () {
                  o.a.set(this.refs.icon, { opacity: 0 }),
                    o.a.set(this.refs.iconPerson, { opacity: 0 }),
                    o.a.fromTo(
                      this.refs.iconScenery,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.6, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.animation,
                      { value: 0 },
                      {
                        value: 1,
                        duration: 2,
                        onComplete: this.auto_STEP2.bind(this),
                      }
                    );
                },
              },
              {
                key: "auto_STEP2",
                value: function () {
                  o.a.set(this.refs.icon, { opacity: 0 }),
                    o.a.set(this.refs.iconScenery, { opacity: 0 }),
                    o.a.fromTo(
                      this.refs.iconPerson,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.6, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.animation,
                      { value: 0 },
                      {
                        value: 1,
                        duration: 2,
                        onComplete: this.auto_STEP3.bind(this),
                      }
                    );
                },
              },
              {
                key: "auto_STEP3",
                value: function () {
                  o.a.set(this.refs.iconScenery, { opacity: 0 }),
                    o.a.set(this.refs.iconPerson, { opacity: 0 }),
                    o.a.fromTo(
                      this.refs.icon,
                      { rotation: 0, opacity: 1 },
                      {
                        rotation: 360,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.inOut",
                      }
                    );
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.animation = { value: 0 }),
                    (this.state = { isActive: !1 }),
                    (this.data = {
                      text: this.element.data("camera-scene-text"),
                    }),
                    (this.refs = {
                      background: this.element.find(
                        '*[data-ref="camera-scene-background"]'
                      ),
                      icon: this.element.find(
                        '*[data-ref="camera-scene-icon"]'
                      ),
                      iconScenery: this.element.find(
                        '*[data-ref="camera-scene-icon-scenery"]'
                      ),
                      iconPerson: this.element.find(
                        '*[data-ref="camera-scene-icon-person"]'
                      ),
                      status: a()('*[data-ref="camera-scene-status"]'),
                      statusText: a()('*[data-ref="camera-scene-status-text"]'),
                    }),
                    a()(this.element).on("click", this.toogle.bind(this)),
                    a()(window).on(ii.EVENT.AUTO_ON, this.auto_ON.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        ii = (function () {
          function e(t, n) {
            $n(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            ti(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { AUTO_ON: "CAppCameraScene.EVENT.AUTO_ON" };
                },
              },
            ]),
            ti(e, [
              {
                key: "render",
                value: function (e, t) {
                  new ni(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ai = ii;
      function oi(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function si(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function ri(e, t, n) {
        return t && si(e.prototype, t), n && si(e, n), e;
      }
      var li = (function () {
          function e(t, n) {
            oi(this, e), this.render(t, n);
          }
          return (
            ri(e, [
              {
                key: "setStatusLevel",
                value: function () {
                  var e = Number(this.state.statusLevel).toFixed(1);
                  this.refs.status.html(e + "x"),
                    o.a.set(this.refs.status, { opacity: 1 });
                },
              },
              {
                key: "setZoomLevel",
                value: function (e, t) {
                  Je.addInApp("camera-zoom"),
                    o.a.killTweensOf(this.refs.sceneStatus),
                    o.a.set(this.refs.sceneStatus, { opacity: 0 });
                  var n,
                    i,
                    a = this.refs.zoomButton.find(
                      '*[data-ref="camera-settings-button-background-active"]'
                    ),
                    s = this.refs.zoomButton.find(
                      '*[data-ref="camera-zoom-button-icon-active"]'
                    );
                  o.a.set([a, s], { opacity: 0 });
                  var r = 2;
                  switch (e) {
                    case 0.5:
                      r = 0;
                      break;
                    case 1:
                    case 2:
                      r = 1;
                  }
                  (n = this.refs.zoomButton
                    .eq(r)
                    .find(
                      '*[data-ref="camera-settings-button-background-active"]'
                    )),
                    (i = this.refs.zoomButton
                      .eq(r)
                      .find('*[data-ref="camera-zoom-button-icon-active"]')),
                    o.a.fromTo(
                      n,
                      { opacity: 1, scale: 0 },
                      { opacity: 1, scale: 1, duration: 0.3, ease: "back.out" }
                    ),
                    o.a.fromTo(
                      i,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.3, ease: "power3.out" }
                    ),
                    o.a.to(this.refs.photoButton, {
                      scale: 0.9,
                      duration: 0.3,
                      ease: "power3.out",
                    });
                  for (var l = 0; l < this.refs.zoomLevelButton.length; l++) {
                    var c = this.refs.zoomLevelButton.eq(l),
                      u = parseFloat(c.data("camera-zoom-level"));
                    o.a.to(c, {
                      borderColor: u == e ? "#fff" : "#636363",
                      duration: 0.3,
                      ease: "power3.out",
                    });
                  }
                  t
                    ? (o.a.killTweensOf(this.state),
                      o.a.to(this.state, {
                        statusLevel: e,
                        duration: 1,
                        ease: "power3.out",
                        onUpdate: this.setStatusLevel.bind(this),
                      }))
                    : ((this.state.statusLevel = e), this.setStatusLevel()),
                    clearTimeout(this.interval),
                    (this.interval = setTimeout(this.reset.bind(this), 3e3));
                },
              },
              {
                key: "reset",
                value: function () {
                  Je.getInApp("camera-zoom") &&
                    (Je.removeInApp("camera-zoom"),
                    clearTimeout(this.interval),
                    o.a.set(this.refs.status, { opacity: 0 }),
                    this.refs.overlay.css("pointer-events", "auto"),
                    o.a.set(this.refs.overlay, { opacity: 1 }),
                    this.refs.extra.css("pointer-events", "auto"),
                    o.a.set(this.refs.extra, { opacity: 1 }),
                    this.refs.container.css("pointer-events", "none"),
                    o.a.set(this.refs.container, { opacity: 0 }),
                    o.a.fromTo(
                      this.refs.overlay,
                      { y: 10 },
                      { y: 0, duration: 0.3, ease: "power3.out" }
                    ),
                    o.a.to(this.refs.photoButton, {
                      scale: 1,
                      duration: 0.3,
                      ease: "power3.out",
                    }));
                },
              },
              {
                key: "zoomButton_ON_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget),
                    n = parseFloat(t.data("camera-zoom-level")),
                    i = t.data("camera-zoom-animation");
                  this.refs.overlay.css("pointer-events", "none"),
                    o.a.set(this.refs.overlay, { opacity: 0 }),
                    this.refs.extra.css("pointer-events", "none"),
                    o.a.set(this.refs.extra, { opacity: 0 }),
                    this.refs.container.css("pointer-events", "auto"),
                    o.a.set(this.refs.container, { opacity: 1 }),
                    y.instance.trackPage(
                      "Camera",
                      "/app/camera/zoom/level-".concat(n)
                    ),
                    this.setZoomLevel(n, i);
                },
              },
              {
                key: "auto_ON",
                value: function () {
                  Je.getInApp("camera-filters") ||
                    (a()(window).trigger(At.EVENT.LOCK), this.auto_step1());
                },
              },
              {
                key: "auto_step1",
                value: function () {
                  this.element.css("pointer-events", "none"),
                    this.refs.zoomButton.eq(0).click(),
                    o.a.to(this, {
                      duration: 1,
                      onComplete: this.auto_step2.bind(this),
                    });
                },
              },
              {
                key: "auto_step2",
                value: function () {
                  o.a.to(this, {
                    duration: 1,
                    onComplete: this.auto_step3.bind(this),
                  });
                },
              },
              {
                key: "auto_step3",
                value: function () {
                  this.refs.zoomLevelButton.eq(3).click(),
                    o.a.to(this, {
                      duration: 2,
                      onComplete: this.auto_step4.bind(this),
                    });
                },
              },
              {
                key: "auto_step4",
                value: function () {
                  a()(window).trigger(At.EVENT.UNLOCK),
                    this.reset(),
                    this.element.css("pointer-events", "auto");
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.interval = null),
                    (this.state = { statusLevel: 1 }),
                    (this.refs = {
                      status: this.element.find(
                        '*[data-ref="camera-zoom-status"]'
                      ),
                      options: this.element.find(
                        '*[data-ref="camera-zoom-overlay"]'
                      ),
                      overlay: this.element.find(
                        '*[data-ref="camera-zoom-overlay"]'
                      ),
                      extra: this.element.find(
                        '*[data-ref="camera-zoom-extra"]'
                      ),
                      container: this.element.find(
                        '*[data-ref="camera-zoom-container"]'
                      ),
                      zoomButton: this.element.find(
                        '*[data-ref="camera-zoom-button"]'
                      ),
                      zoomLevelButton: this.element.find(
                        '*[data-ref="camera-zoom-level"]'
                      ),
                      photoButton: this.element.find(
                        '*[data-ref="camera-button-photo"]'
                      ),
                      sceneStatus: this.element.find(
                        '*[data-ref="camera-scene-status"]'
                      ),
                    }),
                    o.a.set(this.refs.status, { opacity: 0 }),
                    a()(this.refs.zoomButton).on(
                      "click",
                      this.zoomButton_ON_CLICK.bind(this)
                    ),
                    a()(this.refs.zoomLevelButton).on(
                      "click",
                      this.zoomButton_ON_CLICK.bind(this)
                    ),
                    a()(window).on(ue.EVENT.BACK, this.reset.bind(this)),
                    a()(window).on(ci.EVENT.AUTO_ON, this.auto_ON.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        ci = (function () {
          function e(t, n) {
            oi(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            ri(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { AUTO_ON: "CAppCameraZoom.EVENT.AUTO_ON" };
                },
              },
            ]),
            ri(e, [
              {
                key: "render",
                value: function (e, t) {
                  new li(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ui = ci;
      function hi(e, t, n) {
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
      function di(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function fi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function pi(e, t, n) {
        return t && fi(e.prototype, t), n && fi(e, n), e;
      }
      var mi = (function () {
          function e(t, n) {
            di(this, e), this.render(t, n);
          }
          return (
            pi(e, [
              {
                key: "shot",
                value: function () {
                  if (
                    (y.instance.trackPage("Camera", "/app/camera/take-photo"),
                    document.getElementById("video-user"))
                  ) {
                    o.a.killTweensOf(this.refs.foreground),
                      o.a.fromTo(
                        this.refs.foreground,
                        { opacity: 1 },
                        {
                          opacity: 0,
                          duration: 0.3,
                          delay: 0.2,
                          ease: "power3.out",
                        }
                      );
                    var e,
                      t,
                      n,
                      i = document.getElementById("video-user"),
                      a = this.refs.canvas.get(0),
                      s = a.getContext("2d");
                    if (
                      ((n = i.videoWidth / i.videoHeight),
                      (e = i.videoWidth - 100),
                      (t = parseInt(e / n, 10)),
                      (a.width = e),
                      (a.height = t),
                      s.fillRect(0, 0, e, t),
                      window.localStream)
                    ) {
                      s.drawImage(i, 0, 0, e, t);
                      var r = a.toDataURL("image/jpg");
                      Wn.instance.addPhoto(r);
                    } else
                      Wn.instance.addPhoto(
                        "".concat(host, "./assets/img/camera/photo-thumb.jpg")
                      );
                  }
                },
              },
              {
                key: "buttonLastImage_ON_CLICK",
                value: function (e) {
                  y.instance.trackPage("Camera", "/app/camera/lastest-images");
                },
              },
              {
                key: "buttonRotate_ON_CLICK",
                value: function (e) {
                  o.a.killTweensOf(this.refs.rotationStatus),
                    o.a.fromTo(
                      this.refs.rotationStatus,
                      { opacity: 1 },
                      {
                        opacity: 0,
                        duration: 0.2,
                        ease: "power3.out",
                        delay: 1,
                      }
                    ),
                    y.instance.trackPage("Camera", "/app/camera/change-camera");
                },
              },
              {
                key: "buttonShot_ON_CLICK",
                value: function (e) {
                  this.shot();
                },
              },
              {
                key: "updateLastImage",
                value: function () {
                  var e = Wn.instance.getLastMedia();
                  this.refs.lastImage.css(
                    "background-image",
                    "url(".concat(e.url, ")")
                  );
                },
              },
              {
                key: "playVideo",
                value: function (e) {
                  var t;
                  switch (
                    (this.player_ENABLE_STANDBY(),
                    "" != this.state.video && this.pauseVideos(),
                    (this.cuepoints = Wn.instance.cuepoints[e]),
                    (this.counter = 0),
                    e)
                  ) {
                    case "intro":
                      (t = this.refs.playerIntro),
                        o.a.set(this.refs.backgroundBottom, {
                          y: 0,
                          opacity: 0,
                        }),
                        o.a.set(this.refs.backgroundTop, { opacity: 1 }),
                        y.instance.trackPage("Camera", "/app/camera/intro-1");
                      break;
                    case "bottom":
                      (t = this.refs.playerBottom),
                        o.a.set(this.refs.backgroundBottom, {
                          y: 0,
                          opacity: 0,
                        }),
                        o.a.set(this.refs.backgroundTop, { opacity: 1 }),
                        y.instance.trackPage("Camera", "/app/camera/photo");
                      break;
                    case "video-mode":
                      (t = this.refs.playerVideoMode),
                        o.a.set(this.refs.backgroundBottom, {
                          y: 0,
                          opacity: 0,
                        }),
                        o.a.set(this.refs.backgroundTop, { opacity: 1 }),
                        y.instance.trackPage("Camera", "/app/camera/video");
                      break;
                    case "more-mode":
                      (t = this.refs.playerMoreMode),
                        y.instance.trackPage("Camera", "/app/camera/more");
                  }
                  t &&
                    ((this.currentPlayer = this.refs.player),
                    (this.currentPlayer.src = ""),
                    this.currentPlayer.load(),
                    (this.currentPlayer.src = t.data("src")),
                    this.currentPlayer.load(),
                    this.hideVideos(),
                    o.a.killTweensOf(this.currentPlayer),
                    o.a.set(this.currentPlayer, {
                      opacity: 1,
                      ease: "power3.out",
                    }),
                    (this.currentPlayer.currentTime = 0),
                    this.currentPlayer.play(),
                    (this.state.video = e));
                },
              },
              {
                key: "hideVideos",
                value: function () {
                  for (var e = 0; e < this.videos.length; e++) this.videos[e];
                },
              },
              {
                key: "pauseVideos",
                value: function () {
                  for (var e = 0; e < this.videos.length; e++) {
                    var t = this.videos[e];
                    t.paused || t.pause();
                  }
                },
              },
              {
                key: "init",
                value: function (e, t) {
                  if ("camera" == t)
                    if (this.useCameraAsBackground)
                      if (this.isCameraPermissionsAsked)
                        this.playVideo("intro"),
                          this.showFallbackMessage(),
                          this.cameraAvailable &&
                            o.a.delayedCall(2, this.delayUserCamera.bind(this));
                      else {
                        this.playVideo("intro"),
                          (this.isCameraPermissionsAsked = !0),
                          this.refs.player.pause();
                        navigator.mediaDevices
                          .getUserMedia({
                            video: {
                              width: 1280,
                              height: 720,
                              facingMode: "environment",
                            },
                          })
                          .then(
                            function (e) {
                              this.cameraAvailable = !0;
                              var t = document.getElementById("video-user");
                              (window.localStream = e),
                                (t.srcObject = window.localStream),
                                (t.muted = !0),
                                (t.onloadedmetadata = function (e) {
                                  t.play(),
                                    this.refs.player.play(),
                                    this.showFallbackMessage();
                                }.bind(this));
                            }.bind(this)
                          )
                          .catch(
                            function (e) {
                              this.refs.player.play(),
                                this.showFallbackMessage();
                            }.bind(this)
                          );
                      }
                    else this.playVideo("intro"), this.showFallbackMessage();
                },
              },
              { key: "showFallbackMessage", value: function () {} },
              {
                key: "delayUserCamera",
                value: function () {
                  if (!window.localStream) {
                    navigator.mediaDevices
                      .getUserMedia({
                        video: {
                          width: 1280,
                          height: 720,
                          facingMode: "environment",
                        },
                      })
                      .then(
                        function (e) {
                          var t = document.getElementById("video-user");
                          (window.localStream = e),
                            (t.srcObject = window.localStream),
                            (t.muted = !0),
                            (t.onloadedmetadata = function (e) {
                              t.play();
                            }.bind(this));
                        }.bind(this)
                      )
                      .catch(function (e) {}.bind(this));
                  }
                },
              },
              { key: "onInit_COMPLETE", value: function () {} },
              {
                key: "dispose",
                value: function (e, t) {
                  "camera" == t &&
                    (o.a.killTweensOf(this.animation),
                    this.pauseVideos(),
                    this.hideVideos(),
                    o.a.set(this.refs.backgroundBottom, { y: 0, opacity: 0 }),
                    o.a.set(this.refs.backgroundTop, { opacity: 1 }),
                    this.player_WAITING(),
                    this.player_ENABLE_STANDBY(),
                    (this.state.video = ""),
                    window.localStream &&
                      (window.localStream
                        .getVideoTracks()
                        .forEach(function (e) {
                          return e.stop();
                        }),
                      (window.localStream = null)),
                    a()(window).trigger(Qn.EVENT.RESET, !0));
                },
              },
              { key: "on_PLAY_TOP_VIDEO", value: function (e) {} },
              {
                key: "on_PLAY_BOTTOM_VIDEO",
                value: function (e) {
                  this.player_WAITING(), this.playVideo("bottom");
                },
              },
              {
                key: "on_PLAY_VIDEO_MODE",
                value: function (e) {
                  this.player_WAITING(), this.playVideo("video-mode");
                },
              },
              {
                key: "on_PLAY_MORE_MODE",
                value: function (e) {
                  this.player_WAITING(), this.playVideo("more-mode");
                },
              },
              {
                key: "mode_UPDATE",
                value: function (e, t) {
                  2 == t
                    ? (this.refs.cameraMore.css("display", "block"),
                      this.refs.cameraSettings.css("visibility", "hidden"),
                      this.refs.cameraZoom.css("visibility", "hidden"),
                      this.refs.cameraShooter.css("visibility", "hidden"),
                      o.a.set(this.refs.backgroundTop, { opacity: 1 }),
                      o.a.set(this.refs.backgroundBottom, {
                        y: 70,
                        opacity: 1,
                      }))
                    : (this.refs.cameraMore.css("display", "none"),
                      this.refs.cameraSettings.css("visibility", "visible"),
                      this.refs.cameraZoom.css("visibility", "visible"),
                      this.refs.cameraShooter.css("visibility", "visible"),
                      this.on_UPDATE_RATIO(null, this.currentMode));
                },
              },
              {
                key: "on_OPEN_FILTER",
                value: function () {
                  Je.getInApp("camera-filters") ||
                    Je.getInApp("camera-zoom") ||
                    (this.refs.cameraFilters.css("display", "block"),
                    this.refs.cameraModes.css("visibility", "hidden"),
                    this.refs.cameraSettings.css("visibility", "hidden"),
                    this.refs.cameraZoom.css("visibility", "hidden"),
                    this.refs.buttonLastImage.css("visibility", "hidden"),
                    this.refs.buttonRotate.css("visibility", "hidden"),
                    this.refs.cameraTitle.css("display", "block"),
                    o.a.killTweensOf(this.refs.buttonShot),
                    o.a.to(this.refs.buttonShot, {
                      scale: 0.9,
                      duration: 0.3,
                      ease: "power3.out",
                    }),
                    o.a.set(this.refs.backgroundBottom, { y: 0 }),
                    Je.addInApp("camera-filters"),
                    this.on_UPDATE_FILTER());
                },
              },
              {
                key: "on_UPDATE_FILTER",
                value: function () {
                  Je.getInApp("camera-filters") &&
                    (clearInterval(this.filtersInterval),
                    (this.filtersInterval = setTimeout(
                      this.reset.bind(this),
                      8e3
                    )));
                },
              },
              {
                key: "on_UPDATE_RATIO",
                value: function (e, t) {
                  switch (
                    (3 == t
                      ? o.a.set(this.refs.backgroundTop, { opacity: 0 })
                      : o.a.set(this.refs.backgroundTop, { opacity: 1 }),
                    t)
                  ) {
                    case 0:
                      o.a.set(this.refs.backgroundBottom, { y: 70 });
                      break;
                    case 1:
                    case 3:
                      o.a.set(this.refs.backgroundBottom, {
                        y: 70,
                        opacity: 0.2,
                      });
                      break;
                    case 2:
                      o.a.set(this.refs.backgroundBottom, { y: 0, opacity: 1 });
                  }
                  this.currentMode = t;
                },
              },
              {
                key: "playerIntro_ENDED",
                value: function () {
                  "intro" == this.state.video
                    ? this.playVideo("bottom")
                    : this.player_ENABLE_STANDBY();
                },
              },
              {
                key: "video_TIME_UPDATE",
                value: function () {
                  if (this.currentPlayer) {
                    var e = this.currentPlayer.currentTime,
                      t = this.cuepoints[this.counter];
                    t &&
                      e >= t.time &&
                      (this.counter++, this.video_DISPATCH_CUE_POINT(t.label));
                  }
                },
              },
              {
                key: "video_DISPATCH_CUE_POINT",
                value: function (e) {
                  switch (e) {
                    case "scene-optimizer":
                      a()(window).trigger(ai.EVENT.AUTO_ON);
                      break;
                    case "zoom":
                      a()(window).trigger(ui.EVENT.AUTO_ON);
                      break;
                    case "ratio":
                      a()(window).trigger(Si.EVENT.RATIO_AUTO_ON);
                      break;
                    case "filters":
                      a()(window).trigger(Si.EVENT.FILTERS_AUTO_ON);
                      break;
                    case "shot":
                      a()(window).trigger(yi.EVENT.SHOT_AUTO_ON);
                      break;
                    case "pulse-settings":
                      this.pulseIcon("settings");
                      break;
                    case "pulse-flash":
                      this.pulseIcon("flash");
                      break;
                    case "pulse-timer":
                      this.pulseIcon("timer");
                      break;
                    case "pulse-mode":
                      this.pulseIcon("mode");
                      break;
                    case "pulse-filters":
                      this.pulseIcon("filters");
                      break;
                    case "single-take":
                      this.pulseButton("button-text-single-take");
                      break;
                    case "more-menu":
                      this.pulseButton("button-text-more-menu");
                  }
                },
              },
              {
                key: "pulseButton",
                value: function (e) {
                  var t,
                    n = this.element.find('*[data-ref="'.concat(e, '"]'));
                  o.a.set(n, { color: "#ffeb00" }),
                    o.a.to(
                      n,
                      (hi((t = { color: 1 }), "color", "#ffffff"),
                      hi(t, "duration", 0.6),
                      hi(t, "delay", 0.5),
                      hi(t, "ease", "power3.out"),
                      t)
                    );
                },
              },
              {
                key: "pulseIcon",
                value: function (e) {
                  var t = this.element.find(
                    '*[data-camera-settings-button-id="'.concat(e, '"]')
                  );
                  o.a.set(t, { opacity: 0, scale: 1.2 }),
                    o.a.to(t, {
                      opacity: 1,
                      scale: 1,
                      duration: 0.6,
                      delay: 0.2,
                      ease: "power3.out",
                    });
                },
              },
              {
                key: "on_SHOT_AUTO_ON",
                value: function () {
                  o.a.set(this.refs.autoShotBorder, { opacity: 1 }),
                    o.a.to(this.refs.autoShotBorder, {
                      opacity: 0,
                      duration: 0.6,
                      delay: 1,
                      ease: "power3.out",
                      onComplete: this.on_SHOT_AUTO_ON_step1.bind(this),
                    });
                },
              },
              {
                key: "on_SHOT_AUTO_ON_step1",
                value: function () {
                  o.a.set(this.refs.autoShotContainer, {
                    scale: 1,
                    opacity: 1,
                  }),
                    o.a.set(
                      [
                        this.refs.autoShotIcon1,
                        this.refs.autoShotIcon2,
                        this.refs.autoShotIcon3,
                        this.refs.autoShotIcon4,
                      ],
                      { opacity: 0.2 }
                    ),
                    this.on_SHOT_AUTO_ON_step2();
                },
              },
              {
                key: "on_SHOT_AUTO_ON_step2",
                value: function () {
                  o.a.to(
                    [
                      this.refs.autoShotIcon1,
                      this.refs.autoShotIcon2,
                      this.refs.autoShotIcon3,
                      this.refs.autoShotIcon4,
                    ],
                    {
                      opacity: 1,
                      duration: 0.3,
                      delay: 0,
                      ease: "power3.out",
                      stagger: 0.3,
                      onComplete: this.on_SHOT_AUTO_ON_step3.bind(this),
                    }
                  );
                },
              },
              {
                key: "on_SHOT_AUTO_ON_step3",
                value: function () {
                  o.a.to(this.refs.autoShotContainer, {
                    scale: 0.3,
                    duration: 0.6,
                    opacity: 0,
                    ease: "power3.out",
                  }),
                    this.shot(),
                    Wn.instance.addPhoto(
                      "".concat(host, "./assets/img/camera/photo-thumb.jpg")
                    );
                },
              },
              {
                key: "player_WAITING",
                value: function (e) {
                  this.isBuffering ||
                    ((this.isBuffering = !0),
                    o.a.killTweensOf(this.refs.preloader),
                    o.a.to(this.refs.preloader, {
                      opacity: 1,
                      duration: 0.3,
                      ease: "power3.out",
                    }));
                },
              },
              {
                key: "player_CAN_PLAY",
                value: function (e) {
                  this.isBuffering &&
                    ((this.isBuffering = !1),
                    o.a.killTweensOf(this.refs.preloader),
                    o.a.to(this.refs.preloader, {
                      opacity: 0,
                      duration: 0.3,
                      ease: "power3.out",
                    }),
                    this.player_DISABLE_STANDBY());
                },
              },
              {
                key: "player_ENABLE_STANDBY",
                value: function () {
                  this.isStandby ||
                    ((this.isStandby = !0),
                    o.a.killTweensOf(this.refs.playerSelf),
                    o.a.to(this.refs.playerSelf, {
                      opacity: 1,
                      duration: 0.3,
                      ease: "power3.out",
                    }));
                },
              },
              {
                key: "player_DISABLE_STANDBY",
                value: function () {
                  this.isStandby &&
                    ((this.isStandby = !1),
                    o.a.killTweensOf(this.refs.playerSelf),
                    o.a.to(this.refs.playerSelf, {
                      opacity: 0,
                      duration: 0.3,
                      ease: "power3.out",
                    }));
                },
              },
              {
                key: "controls_CLICK",
                value: function () {
                  this.isStandby ||
                    this.isBuffering ||
                    (this.refs.player.paused
                      ? (o.a.set(this.refs.controlsButtonPause, {
                          display: "none",
                          opacity: 0,
                        }),
                        o.a.fromTo(
                          this.refs.controlsButtonPlay,
                          { display: "block", opacity: 1, scale: 1.2 },
                          {
                            scale: 1,
                            duration: 1,
                            opacity: 0,
                            ease: "power3.inOut",
                          }
                        ),
                        this.refs.player.play())
                      : (o.a.set(this.refs.controlsButtonPlay, {
                          display: "none",
                          opacity: 0,
                        }),
                        o.a.fromTo(
                          this.refs.controlsButtonPause,
                          { display: "block", opacity: 1, scale: 1.2 },
                          {
                            scale: 1,
                            duration: 1,
                            opacity: 0,
                            ease: "power3.inOut",
                          }
                        ),
                        this.refs.player.pause()));
                },
              },
              {
                key: "reset",
                value: function () {
                  Je.getInApp("camera-filters") &&
                    (this.on_UPDATE_RATIO(null, this.currentMode),
                    clearInterval(this.filtersInterval),
                    Je.removeInApp("camera-filters"),
                    this.refs.cameraFilters.css("display", "none"),
                    this.refs.cameraModes.css("visibility", "visible"),
                    this.refs.cameraSettings.css("visibility", "visible"),
                    this.refs.cameraZoom.css("visibility", "visible"),
                    this.refs.buttonLastImage.css("visibility", "visible"),
                    this.refs.buttonRotate.css("visibility", "visible"),
                    this.refs.cameraTitle.css("display", "none"),
                    o.a.killTweensOf(this.refs.buttonShot),
                    o.a.to(this.refs.buttonShot, {
                      scale: 1,
                      duration: 0.3,
                      ease: "power3.out",
                    }));
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  if (
                    ((this.element = a()(e)),
                    this.filtersInterval,
                    (this.counter = 0),
                    this.cuepoints,
                    (this.isBuffering = !1),
                    (this.isStandby = !1),
                    (this.state = { video: "" }),
                    (this.animation = { value: 0 }),
                    (this.currentMode = 0),
                    (this.isCameraPermissionsAsked = !1),
                    (this.useCameraAsBackground = !0),
                    (this.cameraAvailable = !1),
                    (this.fallbackMessageCounter = 0),
                    (this.refs = {
                      canvas: this.element.find(
                        '*[data-ref="app-camera-canvas"]'
                      ),
                      video: this.element.find(
                        '*[data-component="app-camera-video"]'
                      ),
                      foreground: this.element.find(
                        '*[data-ref="app-camera-foreground"]'
                      ),
                      lastImage: this.element.find(
                        '*[data-ref="app-camera-last-image"]'
                      ),
                      buttonLastImage: this.element.find(
                        '*[data-ref="app-camera-last-image"]'
                      ),
                      buttonShot: this.element.find(
                        '*[data-ref="camera-button-photo"]'
                      ),
                      buttonRotate: this.element.find(
                        '*[data-ref="camera-button-rotate"]'
                      ),
                      player: this.element
                        .find('*[data-ref="app-camera-general-player"]')
                        .get(0),
                      playerIntro: this.element.find(
                        '*[data-ref="app-camera-player-intro"]'
                      ),
                      playerTop: this.element.find(
                        '*[data-ref="app-camera-player-top"]'
                      ),
                      playerBottom: this.element.find(
                        '*[data-ref="app-camera-player-bottom"]'
                      ),
                      playerVideoMode: this.element.find(
                        '*[data-ref="app-camera-player-video-mode"]'
                      ),
                      playerMoreMode: this.element.find(
                        '*[data-ref="app-camera-player-more-mode"]'
                      ),
                      playerUser: this.element.find(
                        '*[data-ref="app-camera-player-user"]'
                      ),
                      playerSelf: this.element.find(
                        '*[data-ref="app-camera-self"]'
                      ),
                      cameraMore: this.element.find(
                        '*[data-ref="camera-more"]'
                      ),
                      cameraFilters: this.element.find(
                        '*[data-ref="camera-filters"]'
                      ),
                      cameraModes: this.element.find(
                        '*[data-ref="camera-zoom-overlay"]'
                      ),
                      cameraTitle: this.element.find(
                        '*[data-ref="camera-title"]'
                      ),
                      backgroundBottom: this.element.find(
                        '*[data-ref="camera-background-bottom"]'
                      ),
                      backgroundTop: this.element.find(
                        '*[data-ref="camera-background-top"]'
                      ),
                      cameraSettings: this.element.find(
                        '*[data-ref="camera-settings"]'
                      ),
                      cameraZoom: this.element.find(
                        '*[data-ref="camera-zoom"]'
                      ),
                      cameraShooter: this.element.find(
                        '*[data-ref="camera-shooter"]'
                      ),
                      preloader: this.element.find(
                        '*[data-ref="app-camera-preloader"]'
                      ),
                      controls: this.element.find(
                        '*[data-ref="app-camera-controls"]'
                      ),
                      controlsButtonPlay: this.element.find(
                        '*[data-ref="app-camera-controls-button-play"]'
                      ),
                      controlsButtonPause: this.element.find(
                        '*[data-ref="app-camera-controls-button-pause"]'
                      ),
                      shotAudio: this.element
                        .find('*[data-ref="app-camera-shot"]')
                        .get(0),
                      autoShotContainer: this.element.find(
                        '*[data-ref="app-camara-auto-shot-icon-container"]'
                      ),
                      autoShotIcon1: this.element.find(
                        '*[data-ref="app-camara-auto-shot-icon-1"]'
                      ),
                      autoShotIcon2: this.element.find(
                        '*[data-ref="app-camara-auto-shot-icon-2"]'
                      ),
                      autoShotIcon3: this.element.find(
                        '*[data-ref="app-camara-auto-shot-icon-3"]'
                      ),
                      autoShotIcon4: this.element.find(
                        '*[data-ref="app-camara-auto-shot-icon-4"]'
                      ),
                      autoShotBorder: this.element.find(
                        '*[data-ref="app-camara-auto-shot-icon-border"]'
                      ),
                      rotationStatus: this.element.find(
                        '*[data-ref="camera-rotation-status"]'
                      ),
                    }),
                    (this.videos = [this.refs.player]),
                    (this.muteAll = !1),
                    this.muteAll)
                  )
                    for (var n = 0; n < this.videos.length; n++) {
                      this.videos[n].muted = !0;
                    }
                  this.refs.cameraMore.css("display", "none"),
                    o.a.set(this.refs.backgroundBottom, { y: 70 }),
                    this.updateLastImage(),
                    a()(window).on(
                      Wn.EVENT.UPDATE,
                      this.updateLastImage.bind(this)
                    ),
                    a()(this.refs.buttonShot).on(
                      "click",
                      this.buttonShot_ON_CLICK.bind(this)
                    ),
                    a()(this.refs.buttonLastImage).on(
                      "click",
                      this.buttonLastImage_ON_CLICK.bind(this)
                    ),
                    a()(this.refs.buttonRotate).on(
                      "click",
                      this.buttonRotate_ON_CLICK.bind(this)
                    ),
                    a()(window).on(Je.EVENT.INIT, this.init.bind(this)),
                    a()(window).on(Je.EVENT.DISPOSE, this.dispose.bind(this)),
                    a()(window).on(
                      yi.EVENT.PLAY_TOP_VIDEO,
                      this.on_PLAY_TOP_VIDEO.bind(this)
                    ),
                    a()(window).on(
                      yi.EVENT.PLAY_BOTTOM_VIDEO,
                      this.on_PLAY_BOTTOM_VIDEO.bind(this)
                    ),
                    a()(window).on(
                      yi.EVENT.PLAY_VIDEO_MODE,
                      this.on_PLAY_VIDEO_MODE.bind(this)
                    ),
                    a()(window).on(
                      yi.EVENT.PLAY_MORE_MODE,
                      this.on_PLAY_MORE_MODE.bind(this)
                    ),
                    a()(window).on(
                      yi.EVENT.OPEN_FILTER,
                      this.on_OPEN_FILTER.bind(this)
                    ),
                    a()(window).on(
                      yi.EVENT.UPDATE_FILTER,
                      this.on_UPDATE_FILTER.bind(this)
                    ),
                    a()(window).on(
                      yi.EVENT.UPDATE_RATIO,
                      this.on_UPDATE_RATIO.bind(this)
                    ),
                    a()(window).on(
                      yi.EVENT.SHOT_AUTO_ON,
                      this.on_SHOT_AUTO_ON.bind(this)
                    ),
                    a()(window).on(
                      Qn.EVENT.UPDATE,
                      this.mode_UPDATE.bind(this)
                    ),
                    a()(window).on(ue.EVENT.BACK, this.reset.bind(this)),
                    this.refs.controls.on(
                      "click",
                      this.controls_CLICK.bind(this)
                    ),
                    this.player_WAITING(),
                    this.player_ENABLE_STANDBY(),
                    o.a.set(this.refs.backgroundBottom, { y: 0, opacity: 0 }),
                    o.a.set(this.refs.backgroundTop, { opacity: 1 });
                  var i = this.refs.player;
                  i.addEventListener(
                    "ended",
                    this.playerIntro_ENDED.bind(this)
                  ),
                    i.addEventListener(
                      "timeupdate",
                      this.video_TIME_UPDATE.bind(this)
                    ),
                    i.addEventListener(
                      "waiting",
                      this.player_WAITING.bind(this)
                    ),
                    i.addEventListener(
                      "seeking",
                      this.player_WAITING.bind(this)
                    ),
                    i.addEventListener(
                      "canplaythrough",
                      this.player_CAN_PLAY.bind(this)
                    ),
                    i.addEventListener(
                      "playing",
                      this.player_CAN_PLAY.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        yi = (function () {
          function e(t, n) {
            di(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            pi(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    PLAY_TOP_VIDEO: "CAppCamera.EVENT.PLAY_TOP_VIDEO",
                    PLAY_BOTTOM_VIDEO: "CAppCamera.EVENT.PLAY_BOTTOM_VIDEO",
                    PLAY_VIDEO_MODE: "CAppCamera.EVENT.PLAY_VIDEO_MODE",
                    PLAY_MORE_MODE: "CAppCamera.EVENT.PLAY_MORE_MODE",
                    OPEN_FILTER: "CAppCamera.EVENT.OPEN_FILTER",
                    UPDATE_FILTER: "CAppCamera.EVENT.UPDATE_FILTER",
                    RESET_FILTER: "CAppCamera.EVENT.RESET_FILTER",
                    UPDATE_RATIO: "CAppCamera.EVENT.UPDATE_RATIO",
                    SHOT_AUTO_ON: "CAppCamera.EVENT.SHOT_AUTO_ON",
                  };
                },
              },
            ]),
            pi(e, [
              {
                key: "render",
                value: function (e, t) {
                  new mi(e, t);
                },
              },
            ]),
            e
          );
        })(),
        gi = yi;
      function Ei(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function bi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function wi(e, t, n) {
        return t && bi(e.prototype, t), n && bi(e, n), e;
      }
      var vi = (function () {
          function e(t, n) {
            Ei(this, e), this.render(t, n);
          }
          return (
            wi(e, [
              {
                key: "removeFilters",
                value: function () {
                  for (var e = 0; e < this.filters.length; e++) {
                    var t = this.filters[e];
                    this.refs.video.removeClass(t);
                  }
                },
              },
              {
                key: "setButtonIndex",
                value: function (e, t) {
                  var n =
                    -this.refs.buttonContainer
                      .eq(0)
                      .get(0)
                      .getBoundingClientRect().width * e;
                  o.a.killTweensOf(this.refs.container),
                    o.a.to(this.refs.container, {
                      x: n,
                      duration: t,
                      ease: "power2.out",
                    });
                  var i = this.refs.buttonContainer
                    .eq(e)
                    .data("camera-filter-name");
                  this.removeFilters(),
                    i && this.refs.video.addClass(i),
                    y.instance.trackPage(
                      "Camera",
                      "/app/camera/filter/item-".concat(e + 1)
                    ),
                    a()(window).trigger(gi.EVENT.UPDATE_FILTER),
                    (this.positionX = n);
                },
              },
              {
                key: "on_TOUCH_END",
                value: function (e) {
                  var t = this.positionX + this.currentTouchPosition.x,
                    n = this.refs.buttonContainer
                      .eq(0)
                      .get(0)
                      .getBoundingClientRect(),
                    i = Math.round(Math.abs(t) / n.width);
                  (i =
                    (i = i < 0 ? 0 : i) > this.refs.buttonContainer.length - 1
                      ? this.refs.buttonContainer.length - 1
                      : i),
                    this.setButtonIndex(i, 0.2),
                    a()(document).off("touchend"),
                    a()(document).off("touchmove"),
                    a()(window).trigger(gi.EVENT.UPDATE_FILTER);
                },
              },
              {
                key: "on_TOUCH_MOVE",
                value: function (e) {
                  var t = e.touches[0] || e.changedTouches[0];
                  (this.currentTouchPosition = {
                    x: t.pageX - this.initialTouchPosition.x,
                    y: t.pageY - this.initialTouchPosition.y,
                  }),
                    Math.abs(this.currentTouchPosition.x) > 20 &&
                      (this.isMoving = !0);
                  var n =
                      -this.refs.buttonContainer
                        .eq(0)
                        .get(0)
                        .getBoundingClientRect().width *
                      (this.refs.buttonContainer.length - 1),
                    i = this.positionX + this.currentTouchPosition.x;
                  (i = (i = i > 0 ? 0 : i) < n ? n : i),
                    o.a.to(this.refs.container, { x: i, duration: 0.2 }),
                    a()(window).trigger(gi.EVENT.UPDATE_FILTER);
                },
              },
              {
                key: "on_TOUCH_START",
                value: function (e) {
                  this.isMoving = !1;
                  var t = e.touches[0] || e.changedTouches[0];
                  (this.initialTouchPosition = { x: t.pageX, y: t.pageY }),
                    (this.currentTouchPosition = {
                      x: t.pageX - this.initialTouchPosition.x,
                      y: t.pageY - this.initialTouchPosition.y,
                    }),
                    a()(document).on("touchend", this.on_TOUCH_END.bind(this)),
                    a()(document).on(
                      "touchmove",
                      this.on_TOUCH_MOVE.bind(this)
                    ),
                    a()(window).trigger(gi.EVENT.UPDATE_FILTER);
                },
              },
              {
                key: "buttonFilter_CLICK",
                value: function (e) {
                  if (!this.isMoving) {
                    var t = a()(e.currentTarget).data(
                      "camera-filter-button-index"
                    );
                    this.setButtonIndex(t, 0.6);
                  }
                },
              },
              {
                key: "reset",
                value: function () {
                  this.setButtonIndex(0, 0);
                },
              },
              {
                key: "auto",
                value: function (e, t) {
                  var n = 1;
                  0 == t && (n = 0), this.setButtonIndex(t, n);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.positionX = 0),
                    (this.isMoving = !1),
                    (this.refs = {
                      hit: this.element.find(
                        '*[data-ref="camera-filters-hit"]'
                      ),
                      container: this.element.find(
                        '*[data-ref="camera-filters-container"]'
                      ),
                      buttonContainer: this.element.find(
                        '*[data-ref="camera-filter-button-container"]'
                      ),
                      buttonFilter: this.element.find(
                        '*[data-ref="camera-filter-button"]'
                      ),
                      video: a()('*[data-component="app-camera-video"]'),
                    }),
                    (this.filters = []);
                  for (var n = 0; n < this.refs.buttonContainer.length; n++) {
                    var i = this.refs.buttonContainer
                      .eq(n)
                      .data("camera-filter-name");
                    i && this.filters.push(i);
                  }
                  this.refs.buttonFilter.on(
                    "click",
                    this.buttonFilter_CLICK.bind(this)
                  ),
                    this.refs.hit.on(
                      "touchstart",
                      this.on_TOUCH_START.bind(this)
                    ),
                    a()(window).on(
                      gi.EVENT.RESET_FILTER,
                      this.reset.bind(this)
                    ),
                    a()(window).on(Ti.EVENT.AUTO_FILTER, this.auto.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Ti = (function () {
          function e(t, n) {
            Ei(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            wi(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    UPDATE: "CAppCameraFilters.EVENT.UPDATE",
                    AUTO_FILTER: "CAppCameraFilters.EVENT.AUTO_FILTER",
                  };
                },
              },
            ]),
            wi(e, [
              {
                key: "render",
                value: function (e, t) {
                  new vi(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ki = Ti;
      function Ci(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Oi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Pi(e, t, n) {
        return t && Oi(e.prototype, t), n && Oi(e, n), e;
      }
      var Ni = (function () {
          function e(t, n) {
            Ci(this, e), this.render(t, n);
          }
          return (
            Pi(e, [
              {
                key: "openModal",
                value: function (e) {
                  var t = this.element.find(
                    '*[data-camera-settings-id="'.concat(e, '"]')
                  );
                  if (
                    (y.instance.trackPage(
                      "Camera",
                      "/app/camera/settings/".concat(e)
                    ),
                    a()(window).trigger(gi.EVENT.PLAY_TOP_VIDEO),
                    t.length)
                  ) {
                    Je.addInApp("camera-settings"),
                      (this.state.currentModal = e),
                      o.a.set(this.refs.container, { opacity: 0 }),
                      this.refs.container.css("pointer-events", "none"),
                      t.css("display", "block"),
                      o.a.fromTo(
                        t,
                        { opacity: 0 },
                        { opacity: 1, duration: 0.3, ease: "power3.out" }
                      );
                    for (
                      var n = t.find('*[data-ref="camera-modal-button"]'),
                        i = 0,
                        s = 0;
                      s < n.length;
                      s++
                    ) {
                      n.eq(s).data("index", s);
                      var r = n.eq(s).get(0),
                        l = r.getBoundingClientRect(),
                        c = l.x + l.width / 2,
                        u = window.innerWidth / 2 - c;
                      o.a.fromTo(
                        r,
                        { x: u, opacity: 1 },
                        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
                      ),
                        1 ==
                          n
                            .eq(s)
                            .find('*[data-ref="camera-modal-button-active"]')
                            .css("opacity") && (i = s);
                    }
                    var h = n.eq(i).data("text");
                    this.showStatusMessage(h),
                      clearInterval(this.interval),
                      (this.interval = setTimeout(this.reset.bind(this), 5e3));
                  }
                },
              },
              {
                key: "closeModal",
                value: function (e) {
                  var t = this.state.currentModal;
                  if ("" != t) {
                    var n = this.element.find(
                      '*[data-camera-settings-id="'.concat(t, '"]')
                    );
                    if (n.length) {
                      Je.removeInApp("camera-settings"),
                        clearInterval(this.interval);
                      var i = e.data("index"),
                        s = n.find('*[data-ref="camera-modal-button"]'),
                        r = n.find('*[data-ref="camera-modal-button-normal"]'),
                        l = n.find('*[data-ref="camera-modal-button-active"]');
                      o.a.set(r, { opacity: 1 }),
                        o.a.set(l, { opacity: 0 }),
                        o.a.set(
                          s
                            .eq(i)
                            .find('*[data-ref="camera-modal-button-active"]'),
                          { opacity: 1 }
                        ),
                        o.a.set(
                          s
                            .eq(i)
                            .find('*[data-ref="camera-modal-button-normal"]'),
                          { opacity: 0 }
                        );
                      var c = this.element
                        .find(
                          '*[data-camera-settings-button-id="'.concat(
                            this.state.currentModal,
                            '"]'
                          )
                        )
                        .find('*[data-ref="camera-settings-button-icon"]');
                      switch (
                        (o.a.set(c, { opacity: 0 }),
                        o.a.set(c.eq(i), { opacity: 1 }),
                        (this.state.currentModal = ""),
                        n.css("display", "none"),
                        t)
                      ) {
                        case "mode":
                          a()(window).trigger(gi.EVENT.UPDATE_RATIO, [i]);
                      }
                      o.a.set(this.refs.container, { opacity: 1 }),
                        this.refs.container.css("pointer-events", "auto");
                    }
                  }
                },
              },
              {
                key: "activeButton",
                value: function (e, t) {
                  var n = 0;
                  t.data("active-index") || (n = 1);
                  var i = t.find('*[data-ref="camera-settings-button-icon"]');
                  o.a.set(i, { opacity: 0 }), o.a.set(i.eq(n), { opacity: 1 });
                  var s = i.eq(n).data("text");
                  switch (e) {
                    case "filters":
                      1 == n
                        ? a()(window).trigger(gi.EVENT.OPEN_FILTER)
                        : a()(window).trigger(gi.EVENT.RESET_FILTER);
                  }
                  this.showStatusMessage(s), t.data("active-index", n);
                },
              },
              {
                key: "button_ON_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget),
                    n = t.data("camera-settings-button-type"),
                    i = t.data("camera-settings-button-id"),
                    s = t.find(
                      '*[data-ref="camera-settings-button-background"]'
                    );
                  switch (
                    (s.length &&
                      (o.a.killTweensOf(s),
                      o.a.fromTo(
                        s,
                        { opacity: 1 },
                        {
                          opacity: 0,
                          duration: 0.6,
                          delay: 0.1,
                          ease: "power3.out",
                        }
                      )),
                    n)
                  ) {
                    case "modal":
                      this.openModal(i);
                    case "normal":
                      this.activeButton(i, t);
                  }
                },
              },
              {
                key: "modalButton_ON_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget),
                    n = t.data("text");
                  this.showStatusMessage(n), this.closeModal(t);
                },
              },
              {
                key: "showStatusMessage",
                value: function (e) {
                  e &&
                    (this.refs.statusText.html(e),
                    o.a.killTweensOf(this.refs.status),
                    o.a.fromTo(
                      this.refs.status,
                      { opacity: 1 },
                      {
                        opacity: 0,
                        duration: 0.2,
                        ease: "power3.out",
                        delay: 1,
                      }
                    ));
                },
              },
              {
                key: "reset",
                value: function () {
                  if (Je.getInApp("camera-settings")) {
                    var e = this.state.currentModal;
                    if ("" != e) {
                      var t = this.element.find(
                        '*[data-camera-settings-id="'.concat(e, '"]')
                      );
                      if (t.length) {
                        Je.removeInApp("camera-settings"),
                          clearInterval(this.interval);
                        for (
                          var n = null,
                            i = t.find('*[data-ref="camera-modal-button"]'),
                            a = 0;
                          a < i.length;
                          a++
                        )
                          1 ==
                            i
                              .eq(a)
                              .find('*[data-ref="camera-modal-button-active"]')
                              .css("opacity") && (n = i.eq(a));
                        this.closeModal(n);
                      }
                    }
                  }
                },
              },
              {
                key: "ratio_AUTO_ON",
                value: function () {
                  Je.getInApp("camera-settings") ||
                    Je.getInApp("camera-filters") ||
                    Je.getInApp("camera-zoom") ||
                    (a()(window).trigger(At.EVENT.LOCK),
                    this.ratio_auto_step1());
                },
              },
              {
                key: "ratio_auto_step1",
                value: function () {
                  this.element.css("pointer-events", "none"),
                    this.refs.buttons.eq(3).click();
                  this.element
                    .find('*[data-camera-settings-id="mode"]')
                    .find('*[data-ref="camera-modal-button"]');
                  o.a.to(this, {
                    duration: 2,
                    onComplete: this.ratio_auto_step2.bind(this),
                  });
                },
              },
              {
                key: "ratio_auto_step2",
                value: function () {
                  this.element
                    .find('*[data-camera-settings-id="mode"]')
                    .find('*[data-ref="camera-modal-button"]')
                    .eq(3)
                    .click(),
                    this.reset(),
                    this.element.css("pointer-events", "auto"),
                    a()(window).trigger(At.EVENT.UNLOCK);
                },
              },
              {
                key: "filters_AUTO_ON",
                value: function () {
                  Je.getInApp("camera-settings") ||
                    Je.getInApp("camera-filters") ||
                    Je.getInApp("camera-zoom") ||
                    (1 ==
                      this.refs.buttons
                        .eq(5)
                        .find('*[data-ref="camera-settings-button-icon"]')
                        .eq(1)
                        .css("opacity") && this.refs.buttons.eq(5).click(),
                    this.refs.buttons.eq(5).click());
                },
              },
              {
                key: "filters_auto_step1",
                value: function () {
                  a()(window).trigger(ki.EVENT.AUTO_FILTER, [3]);
                },
              },
              {
                key: "on_UPDATE_RATIO",
                value: function (e, t) {
                  this.element
                    .find('*[data-camera-settings-id="mode"]')
                    .find('*[data-ref="camera-modal-button"]')
                    .eq(t)
                    .click();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.interval = null),
                    (this.state = { currentModal: "" }),
                    (this.refs = {
                      container: this.element.find(
                        '*[data-ref="camera-settings-container"]'
                      ),
                      buttons: this.element.find(
                        '*[data-ref="camera-settings-button"]'
                      ),
                      modals: this.element.find(
                        '*[data-ref="camera-settings-modal"]'
                      ),
                      status: this.element.find(
                        '*[data-ref="camera-settings-status"]'
                      ),
                      statusText: this.element.find(
                        '*[data-ref="camera-settings-status-text"]'
                      ),
                      modalButtons: this.element.find(
                        '*[data-ref="camera-modal-button"]'
                      ),
                      modalButtonActive: this.element.find(
                        '*[data-ref="camera-modal-button-active"]'
                      ),
                    }),
                    this.refs.modals.css("display", "none"),
                    this.refs.modalButtonActive.css("opacity", "0"),
                    this.refs.status.css("opacity", "0");
                  for (var n = 0; n < this.refs.modals.length; n++) {
                    var i = this.refs.modals
                        .eq(n)
                        .find('*[data-ref="camera-modal-button"]'),
                      s = i
                        .find('*[data-ref="camera-modal-button-normal"]')
                        .eq(0),
                      r = i
                        .find('*[data-ref="camera-modal-button-active"]')
                        .eq(0);
                    o.a.set(r, { opacity: 1 }), o.a.set(s, { opacity: 0 });
                  }
                  a()(this.refs.buttons).on(
                    "click",
                    this.button_ON_CLICK.bind(this)
                  ),
                    a()(this.refs.modalButtons).on(
                      "click",
                      this.modalButton_ON_CLICK.bind(this)
                    ),
                    a()(window).on(ue.EVENT.BACK, this.reset.bind(this)),
                    a()(window).on(
                      _i.EVENT.RATIO_AUTO_ON,
                      this.ratio_AUTO_ON.bind(this)
                    ),
                    a()(window).on(
                      _i.EVENT.FILTERS_AUTO_ON,
                      this.filters_AUTO_ON.bind(this)
                    ),
                    a()(window).on(
                      _i.EVENT.UPDATE_RATIO,
                      this.on_UPDATE_RATIO.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        _i = (function () {
          function e(t, n) {
            Ci(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Pi(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    RATIO_AUTO_ON: "CAppCameraSettings.EVENT.RATIO_AUTO_ON",
                    FILTERS_AUTO_ON: "CAppCameraSettings.EVENT.FILTERS_AUTO_ON",
                    UPDATE_RATIO: "CAppCameraSettings.EVENT.UPDATE_RATIO",
                  };
                },
              },
            ]),
            Pi(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Ni(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Si = _i;
      function Ai(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ii(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Vi(e, t, n) {
        return t && Ii(e.prototype, t), n && Ii(e, n), e;
      }
      var xi = (function () {
          function e(t, n) {
            Ai(this, e), this.render(t, n);
          }
          return (
            Vi(e, [
              {
                key: "loaded",
                value: function (e) {
                  if (200 == e.status) {
                    var t = e.data.data,
                      n = (t = t[Math.floor(Math.random() * t.length)]).images
                        .downsized_large.url;
                    this.element.css("background-image", "url(".concat(n, ")"));
                  } else this.error();
                },
              },
              { key: "error", value: function () {} },
              {
                key: "render",
                value: function (e, t) {
                  this.element = a()(e);
                  var n = "https://api.giphy.com/v1/gifs/trending?api_key="
                    .concat("PtreBGCGl8nQYbjcyl5sGph5ywyAoDeB", "&limit=")
                    .concat(5, "&rating=g");
                  cn.a
                    .get(n)
                    .then(this.loaded.bind(this))
                    .catch(this.error.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Li = (function () {
          function e(t, n) {
            Ai(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Vi(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            Vi(e, [
              {
                key: "render",
                value: function (e, t) {
                  new xi(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Di(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ri(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Bi(e, t, n) {
        return t && Ri(e.prototype, t), n && Ri(e, n), e;
      }
      var Mi = (function () {
          function e(t, n) {
            Di(this, e), this.render(t, n);
          }
          return (
            Bi(e, [
              {
                key: "loaded",
                value: function () {
                  this.element.is("img")
                    ? this.element.attr("src", this.data.src)
                    : this.element.css(
                        "background-image",
                        'url("'.concat(this.data.src, '")')
                      );
                },
              },
              {
                key: "preload",
                value: function () {
                  this.img ||
                    ((this.img = new Image()),
                    (this.img.src = this.data.src),
                    (this.img.onerror = function () {}),
                    (this.img.onload = this.loaded.bind(this)));
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.img = null),
                    (this.data = { src: this.element.data("src") }),
                    a()(window).on(Ui.EVENT.START, this.preload.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Ui = (function () {
          function e(t, n) {
            Di(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Bi(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { START: "CImageLoader.EVENT.START" };
                },
              },
            ]),
            Bi(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Mi(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Hi = Ui;
      function Ki(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function qi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function ji(e, t, n) {
        return t && qi(e.prototype, t), n && qi(e, n), e;
      }
      var Fi = (function () {
          function e(t, n) {
            Ki(this, e), this.render(t, n);
          }
          return (
            ji(e, [
              {
                key: "close",
                value: function (e) {
                  this.refs.buttonStart.off("click");
                  var t = this.refs.texts.eq(this.counter - 1);
                  o.a.to(t, { opacity: 0, duration: 0.6, ease: "power3.out" }),
                    (window.interactive = !0),
                    a()(window).trigger(jn.EVENT.START),
                    a()(window).trigger(F.EVENT.START),
                    y.instance.trackPage("App", "/app"),
                    y.instance.trackPage("Dashboard", "/app/dashboard"),
                    o.a.to(this.element, {
                      opacity: 0,
                      duration: 1,
                      delay: 1,
                      scale: 1.6,
                      ease: "power3.inOut",
                    }),
                    o.a.fromTo(
                      this.refs.welcomeIcons,
                      { opacity: 0, scale: 0.5 },
                      {
                        duration: 0.6,
                        opacity: 1,
                        scale: 1,
                        ease: "power2.inOut",
                        delay: 1.2,
                        stagger: 0.05,
                        onComplete: this.onClose.bind(this),
                      }
                    );
                },
              },
              {
                key: "onClose",
                value: function () {
                  o.a.set(this.element, { display: "none" }),
                    (window.endOfTutorial = !0);
                },
              },
              {
                key: "showText",
                value: function () {
                  this.counter > 0 && a()(window).trigger(Hi.EVENT.START),
                    o.a.set(this.refs.texts, { display: "none" });
                  var e = this.refs.texts.eq(this.counter);
                  o.a.fromTo(
                    e,
                    { opacity: 0, y: 50, display: "block" },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
                  ),
                    this.counter++;
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.counter = 0),
                    (this.useCamera = !1),
                    (this.refs = {
                      buttonStart: this.element.find(
                        '*[data-ref="app-tutorial-button-start"]'
                      ),
                      buttonNext: this.element.find(
                        '*[data-ref="app-tutorial-button-next"]'
                      ),
                      texts: this.element.find(
                        '*[data-ref="app-tutorial-text"]'
                      ),
                      welcomeIcons: a()(
                        '*[data-ref="app-dashboard-welcome-animation"]'
                      ),
                    }),
                    o.a.set(this.refs.welcomeIcons, { opacity: 0, scale: 0.5 }),
                    this.refs.buttonStart.on("click", this.close.bind(this)),
                    this.refs.buttonNext.on("click", this.showText.bind(this)),
                    this.showText();
                },
              },
            ]),
            e
          );
        })(),
        Yi = (function () {
          function e(t, n) {
            Ki(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            ji(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            ji(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Fi(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Wi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Gi(e, t, n) {
        return t && Wi(e.prototype, t), n && Wi(e, n), e;
      }
      var Xi = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.counter = 0),
            (this.data = [
              {
                title: "Settings",
                text: "There should be no big surprises in here, settings is where you can find and adjust all your, um, settings.",
                cta: "OK",
              },
              {
                title: "Settings",
                text: "We’ve simplified the settings menu experience, just so our developer could have a lunch break.",
                cta: "OK",
              },
              {
                title: "Settings",
                text: "OK, you really want to click on one of these, well you can access the themes from the settings menu, give it a try.",
                cta: "OK",
              },
            ]);
        }
        return (
          Gi(e, null, [
            {
              key: "EVENT",
              get: function () {
                return {};
              },
            },
            {
              key: "instance",
              get: function () {
                return (
                  this._instance ||
                    (this._instance = new e("singletonEnforcer")),
                  this._instance
                );
              },
            },
          ]),
          Gi(e, [
            {
              key: "getAlertMessage",
              value: function () {
                var e = this.data[this.counter % this.data.length];
                return this.counter++, e;
              },
            },
          ]),
          e
        );
      })();
      function zi(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Zi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Ji(e, t, n) {
        return t && Zi(e.prototype, t), n && Zi(e, n), e;
      }
      var Qi = (function () {
          function e(t, n) {
            zi(this, e), this.render(t, n);
          }
          return (
            Ji(e, [
              {
                key: "open",
                value: function (e, t) {
                  Je.addInApp("settings-details");
                  var n = t.index;
                  (this.state.currentItem = this.refs.items.eq(n)),
                    o.a.killTweensOf([
                      this.refs.wrapper,
                      this.state.currentItem,
                      this.element,
                    ]),
                    o.a.fromTo(
                      this.refs.wrapper,
                      { y: 0 },
                      { y: -50, duration: 0.4, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.state.currentItem,
                      { display: "flex", y: 100 },
                      { y: 0, duration: 0.4, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.element,
                      { display: "block", pointerEvents: "auto", opacity: 0 },
                      {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power3.out",
                        onComplete: this.onOpen.bind(this),
                      }
                    );
                },
              },
              { key: "onOpen", value: function () {} },
              {
                key: "close",
                value: function () {
                  Je.getInApp("settings-details") &&
                    (Je.removeInApp("settings-details"),
                    o.a.killTweensOf([
                      this.refs.wrapper,
                      this.state.currentItem,
                      this.element,
                    ]),
                    o.a.to(this.refs.wrapper, {
                      y: 0,
                      duration: 0.4,
                      ease: "power3.inOut",
                    }),
                    o.a.to(this.state.currentItem, {
                      y: 100,
                      duration: 0.4,
                      ease: "power3.inOut",
                    }),
                    o.a.to(this.element, {
                      opacity: 0,
                      duration: 0.4,
                      ease: "power3.inOut",
                      onComplete: this.onClose.bind(this),
                    }));
                },
              },
              {
                key: "onClose",
                value: function () {
                  o.a.set(this.refs.items, { display: "none" }),
                    o.a.set(this.element, {
                      display: "none",
                      pointerEvents: "none",
                    });
                },
              },
              { key: "reset", value: function () {} },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      wrapper: a()('*[data-ref="app-settings-wrapper"]'),
                      items: this.element.find(
                        '*[data-ref="app-settings-details-item"]'
                      ),
                    }),
                    (this.state = { currentItem: null }),
                    this.reset(),
                    a()(window).on($i.EVENT.OPEN, this.open.bind(this)),
                    a()(window).on($i.EVENT.CLOSE, this.close.bind(this)),
                    o.a.set(this.element, {
                      display: "none",
                      pointerEvents: "none",
                    }),
                    o.a.set(this.refs.items, { display: "none" }),
                    a()(window).on(ue.EVENT.BACK, this.close.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        $i = (function () {
          function e(t, n) {
            zi(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Ji(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppSettingsDetails.EVENT.OPEN",
                    CLOSE: "CAppSettingsDetails.EVENT.CLOSE",
                    RESET: "CAppSettingsDetails.EVENT.RESET",
                  };
                },
              },
            ]),
            Ji(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Qi(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ea = $i;
      function ta(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function na(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function ia(e, t, n) {
        return t && na(e.prototype, t), n && na(e, n), e;
      }
      var aa = (function () {
          function e(t, n) {
            ta(this, e), this.render(t, n);
          }
          return (
            ia(e, [
              {
                key: "item_CLICK",
                value: function (e) {
                  var t = Xi.instance.getAlertMessage();
                  a()(window).trigger(Le.EVENT.OPEN, [t.title, t.text, t.cta]);
                },
              },
              {
                key: "button_CLICK",
                value: function (e) {
                  a()(e.currentTarget);
                  a()(window).trigger(ea.EVENT.OPEN, [{ index: 0 }]);
                },
              },
              {
                key: "reset",
                value: function () {
                  this.props.shouldRestartState &&
                    (Je.getInApp("settings-details") ||
                      this.refs.content.scrollTop(0));
                },
              },
              { key: "app_INIT", value: function (e, t) {} },
              {
                key: "app_DISPOSE",
                value: function (e, t) {
                  "settings" == t && this.reset();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.props = { shouldRestartState: !1 }),
                    (this.refs = {
                      items: this.element.find(
                        '*[data-ref="app-settings-item"]'
                      ),
                      buttons: this.element.find(
                        '*[data-ref="app-settings-button"]'
                      ),
                    }),
                    this.refs.items.on("click", this.item_CLICK.bind(this)),
                    this.refs.buttons.on("click", this.button_CLICK.bind(this)),
                    a()(window).on(Je.EVENT.INIT, this.app_INIT.bind(this)),
                    a()(window).on(
                      Je.EVENT.DISPOSE,
                      this.app_DISPOSE.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        oa = (function () {
          function e(t, n) {
            ta(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            ia(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppSettings.EVENT.OPEN",
                    CLOSE: "CAppSettings.EVENT.CLOSE",
                  };
                },
              },
            ]),
            ia(e, [
              {
                key: "render",
                value: function (e, t) {
                  new aa(e, t);
                },
              },
            ]),
            e
          );
        })();
      function sa(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ra(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function la(e, t, n) {
        return t && ra(e.prototype, t), n && ra(e, n), e;
      }
      var ca = (function () {
          function e(t, n) {
            sa(this, e), this.render(t, n);
          }
          return (
            la(e, [
              {
                key: "open",
                value: function (e, t) {
                  Je.addInApp("kids-details");
                  var n = t.index;
                  (this.state.currentItem = this.refs.items.eq(n)),
                    y.instance.trackPage(
                      "Kids",
                      "/app/kids/item-".concat(n + 1)
                    ),
                    o.a.killTweensOf([
                      this.refs.wrapper,
                      this.state.currentItem,
                      this.element,
                    ]),
                    o.a.fromTo(
                      this.refs.wrapper,
                      { y: 0 },
                      { y: -50, duration: 0.4, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.state.currentItem,
                      { display: "flex", y: 100 },
                      { y: 0, duration: 0.4, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.element,
                      { display: "block", pointerEvents: "auto", opacity: 0 },
                      {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power3.out",
                        onComplete: this.onOpen.bind(this),
                      }
                    ),
                    this.show(this.state.currentItem, n);
                },
              },
              { key: "onOpen", value: function () {} },
              {
                key: "close",
                value: function () {
                  Je.getInApp("kids-details") &&
                    (Je.removeInApp("kids-details"),
                    o.a.killTweensOf([
                      this.refs.wrapper,
                      this.state.currentItem,
                      this.element,
                    ]),
                    o.a.to(this.refs.wrapper, {
                      y: 0,
                      duration: 0.4,
                      ease: "power3.inOut",
                    }),
                    o.a.to(this.state.currentItem, {
                      y: 100,
                      duration: 0.4,
                      ease: "power3.inOut",
                    }),
                    o.a.to(this.element, {
                      opacity: 0,
                      duration: 0.4,
                      ease: "power3.inOut",
                      onComplete: this.onClose.bind(this),
                    }));
                },
              },
              {
                key: "onClose",
                value: function () {
                  o.a.set(this.refs.items, { display: "none" }),
                    o.a.set(this.element, {
                      display: "none",
                      pointerEvents: "none",
                    });
                },
              },
              {
                key: "show",
                value: function (e, t) {
                  switch (t) {
                    case 0:
                      var n = e.find(
                          '*[data-ref="app-kids-details-item-text-1"]'
                        ),
                        i = e.find(
                          '*[data-ref="app-kids-details-item-text-2"]'
                        ),
                        a = e.find(
                          '*[data-ref="app-kids-details-item-footer"]'
                        );
                      o.a.killTweensOf([n, i, a]),
                        o.a.fromTo(
                          n,
                          {
                            scale: 0,
                            rotation: -45,
                            transformOrigin: "right bottom",
                          },
                          {
                            scale: 1,
                            rotation: 0,
                            duration: 2,
                            ease: "elastic.out",
                            delay: 0.6,
                          }
                        ),
                        o.a.fromTo(
                          i,
                          {
                            scale: 0,
                            rotation: -45,
                            transformOrigin: "right bottom",
                          },
                          {
                            scale: 1,
                            rotation: 0,
                            duration: 2,
                            ease: "elastic.out",
                            delay: 0.8,
                          }
                        ),
                        o.a.fromTo(
                          a,
                          { scale: 0 },
                          {
                            scale: 1,
                            rotation: 0,
                            duration: 2,
                            ease: "bounce.out",
                            delay: 0.9,
                          }
                        );
                  }
                },
              },
              { key: "reset", value: function () {} },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      wrapper: a()('*[data-ref="app-kids-wrapper"]'),
                      items: this.element.find(
                        '*[data-ref="app-kids-details-item"]'
                      ),
                    }),
                    (this.state = { currentItem: null }),
                    this.reset(),
                    a()(window).on(ua.EVENT.OPEN, this.open.bind(this)),
                    a()(window).on(ua.EVENT.CLOSE, this.close.bind(this)),
                    o.a.set(this.element, {
                      display: "none",
                      pointerEvents: "none",
                    }),
                    o.a.set(this.refs.items, { display: "none" }),
                    a()(window).on(ue.EVENT.BACK, this.close.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        ua = (function () {
          function e(t, n) {
            sa(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            la(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppKidsDetails.EVENT.OPEN",
                    CLOSE: "CAppKidsDetails.EVENT.CLOSE",
                    RESET: "CAppKidsDetails.EVENT.RESET",
                  };
                },
              },
            ]),
            la(e, [
              {
                key: "render",
                value: function (e, t) {
                  new ca(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ha = ua;
      function da(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function fa(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function pa(e, t, n) {
        return t && fa(e.prototype, t), n && fa(e, n), e;
      }
      var ma = (function () {
          function e(t, n) {
            da(this, e), this.render(t, n);
          }
          return (
            pa(e, [
              {
                key: "button_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget).data("app-kids-button-index");
                  a()(window).trigger(ha.EVENT.OPEN, [{ index: t }]);
                },
              },
              {
                key: "animationHeadline1",
                value: function () {
                  o.a.fromTo(
                    this.refs.crocos,
                    { x: "-100%" },
                    { x: "0%", duration: 1, ease: "power3.out", delay: 1 }
                  ),
                    o.a.fromTo(
                      this.refs.crocosHand,
                      { rotation: 0, transformOrigin: "0% 100%" },
                      {
                        rotation: 15,
                        duration: 0.3,
                        ease: "power1.inOut",
                        delay: 1.3,
                        repeat: 7,
                        yoyo: !0,
                      }
                    ),
                    o.a.to(this.refs.headline1, {
                      opacity: 1,
                      duration: 0.6,
                      ease: "power3.out",
                      delay: 0.6,
                    }),
                    o.a.to(this.refs.headline1, {
                      opacity: 0,
                      duration: 0.6,
                      ease: "power3.out",
                      delay: 5,
                      onComplete: this.animationHeadline2.bind(this),
                    });
                },
              },
              {
                key: "animationHeadline2",
                value: function () {
                  o.a.fromTo(
                    this.refs.headline2,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.6, ease: "power3.out", delay: 0 }
                  ),
                    o.a.to(this.refs.headline2, {
                      opacity: 0,
                      duration: 0.6,
                      ease: "power3.out",
                      delay: 4,
                    });
                },
              },
              {
                key: "buttonCancel_CLICK",
                value: function (e) {
                  o.a.set(this.refs.pinPanelContainer, {
                    pointerEvents: "none",
                  }),
                    o.a.to(this.refs.pinPanelBackground, {
                      opacity: 0,
                      duration: 0.4,
                      ease: "power3.inOut",
                    }),
                    o.a.to(this.refs.pinPanelContainer, {
                      y: 150,
                      opacity: 0,
                      duration: 0.4,
                      ease: "power3.inOut",
                      onComplete: this.buttonCancel_COMPLETE.bind(this),
                    }),
                    (this.isPinPanelAvailable = !1);
                },
              },
              {
                key: "buttonCancel_COMPLETE",
                value: function () {
                  o.a.killTweensOf([
                    this.refs.pinPanel,
                    this.refs.pinPanelContainer,
                    this.refs.pinPanelBackground,
                    this.refs.pinPanelContainer,
                    this.refs.pinPanelStatus,
                    this.pinCounter,
                    this.pinCounter.animation,
                  ]),
                    o.a.set(this.refs.pinPanel, { display: "none" });
                },
              },
              {
                key: "buttonConfirm_CLICK",
                value: function (e) {
                  o.a.killTweensOf([
                    this.refs.pinPanel,
                    this.refs.pinPanelContainer,
                    this.refs.pinPanelBackground,
                    this.refs.pinPanelContainer,
                    this.refs.pinPanelStatus,
                    this.pinCounter,
                    this.pinCounter.animation,
                  ]),
                    o.a.set(this.refs.pinPanelContainer, {
                      pointerEvents: "none",
                    }),
                    this.enableClose();
                },
              },
              {
                key: "enableClose",
                value: function () {
                  (ae.instance.props.kids.preventClose = !1),
                    a()(window).trigger(ue.EVENT.CLOSE_PREVENTED_APP);
                },
              },
              {
                key: "pinCounter_UPDATE",
                value: function () {
                  var e = "",
                    t = Math.round(this.pinCounter.value);
                  if (0 == t) e = "&nbsp;";
                  else for (var n = 0; n < t; n++) e += this.passChar;
                  this.refs.pinPanelField.html(e);
                },
              },
              {
                key: "on_APP_INIT",
                value: function (e, t) {
                  "kids" == t &&
                    ((this.isPinPanelAvailable = !1),
                    o.a.set(this.refs.pinPanel, { display: "none" }),
                    (ae.instance.props.kids.preventClose = !0),
                    this.animationHeadline1());
                },
              },
              {
                key: "on_APP_DISPOSE",
                value: function (e, t) {
                  "kids" == t &&
                    (o.a.killTweensOf([
                      this.refs.headline1,
                      this.refs.headline2,
                      this.refs.crocos,
                      this.refs.crocosHand,
                    ]),
                    o.a.set(this.refs.crocos, { x: "-100%" }),
                    o.a.set([this.refs.headline1, this.refs.headline2], {
                      opacity: 0,
                    }));
                },
              },
              {
                key: "on_APP_PREVENT_CLOSE",
                value: function () {
                  ae.instance.props.kids.preventClose &&
                    (Je.getInApp("kids-details")
                      ? a()(window).trigger(ha.EVENT.CLOSE)
                      : this.isPinPanelAvailable ||
                        ((this.pinCounter.value = 0),
                        this.pinCounter_UPDATE(),
                        o.a.killTweensOf([
                          this.refs.pinPanel,
                          this.refs.pinPanelContainer,
                          this.refs.pinPanelBackground,
                          this.refs.pinPanelContainer,
                          this.refs.pinPanelStatus,
                          this.pinCounter,
                          this.pinCounter.animation,
                        ]),
                        o.a.set(this.refs.pinPanel, { display: "block" }),
                        o.a.set(this.refs.pinPanelContainer, {
                          pointerEvents: "auto",
                        }),
                        o.a.fromTo(
                          this.refs.pinPanelBackground,
                          { opacity: 0 },
                          { opacity: 1, duration: 0.4, ease: "power2.out" }
                        ),
                        o.a.fromTo(
                          this.refs.pinPanelContainer,
                          { y: 150, opacity: 1 },
                          { y: 0, duration: 0.4, ease: "power2.out" }
                        ),
                        o.a.fromTo(
                          this.pinCounter,
                          { value: 0 },
                          {
                            value: this.pinCounter.max,
                            duration: 1,
                            ease: "steps (".concat(this.pinCounter.max, ")"),
                            delay: 0.6,
                            onUpdate: this.pinCounter_UPDATE.bind(this),
                          }
                        ),
                        o.a.fromTo(
                          this.refs.pinPanelStatus,
                          { opacity: 0 },
                          {
                            opacity: 1,
                            duration: 0.4,
                            ease: "power2.out",
                            delay: 1,
                          }
                        ),
                        this.props.pinPanelAutoCloseApp &&
                          o.a.fromTo(
                            this.pinCounter.animation,
                            { value: 0 },
                            {
                              value: 1,
                              duration: 8,
                              onComplete: this.buttonConfirm_CLICK.bind(this),
                            }
                          ),
                        (this.isPinPanelAvailable = !0)));
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.props = { pinPanelAutoCloseApp: !0 }),
                    (this.interval = null),
                    (this.isPinPanelAvailable = !1),
                    (this.pinCounter = {
                      animation: { value: 0 },
                      value: 0,
                      max: 10,
                    }),
                    (this.refs = {
                      headline1: this.element.find(
                        '*[data-ref="app-kids-headline-1"'
                      ),
                      headline2: this.element.find(
                        '*[data-ref="app-kids-headline-2"'
                      ),
                      crocos: this.element.find(
                        '*[data-ref="app-kids-crocos"]'
                      ),
                      crocosHand: this.element.find(
                        '*[data-ref="app-kids-crocos-hand"]'
                      ),
                      buttons: this.element.find(
                        '*[data-ref="app-kids-button"]'
                      ),
                      pinPanel: this.element.find(
                        '*[data-ref="app-kids-pin-panel"]'
                      ),
                      pinPanelContainer: this.element.find(
                        '*[data-ref="app-kids-pin-panel-container"]'
                      ),
                      pinPanelBackground: this.element.find(
                        '*[data-ref="app-kids-pin-panel-background"]'
                      ),
                      pinPanelButtonCancel: this.element.find(
                        '*[data-ref="app-kids-pin-panel-button-cancel"]'
                      ),
                      pinPanelButtonConfirm: this.element.find(
                        '*[data-ref="app-kids-pin-panel-button-confirm"]'
                      ),
                      pinPanelStatus: this.element.find(
                        '*[data-ref="app-kids-pin-panel-status"]'
                      ),
                      pinPanelField: this.element.find(
                        '*[data-ref="app-kids-pin-panel-field"]'
                      ),
                    }),
                    (this.passChar = this.refs.pinPanelField.data(
                      "app-kids-pin-panel-field-text"
                    )),
                    o.a.set(this.refs.pinPanel, { display: "none" }),
                    o.a.set(this.refs.crocos, { x: "-100%" }),
                    o.a.set([this.refs.headline1, this.refs.headline2], {
                      opacity: 0,
                    }),
                    (ae.instance.props.kids = { preventClose: !1 }),
                    this.refs.buttons.on("click", this.button_CLICK.bind(this)),
                    this.refs.pinPanelButtonCancel.on(
                      "click",
                      this.buttonCancel_CLICK.bind(this)
                    ),
                    this.refs.pinPanelButtonConfirm.on(
                      "click",
                      this.buttonConfirm_CLICK.bind(this)
                    ),
                    a()(window).on(Je.EVENT.INIT, this.on_APP_INIT.bind(this)),
                    a()(window).on(
                      Je.EVENT.DISPOSE,
                      this.on_APP_DISPOSE.bind(this)
                    ),
                    a()(window).on(
                      Je.EVENT.PREVENT_CLOSE,
                      this.on_APP_PREVENT_CLOSE.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        ya = (function () {
          function e(t, n) {
            da(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            pa(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppKids.EVENT.OPEN",
                    CLOSE: "CAppKids.EVENT.CLOSE",
                  };
                },
              },
            ]),
            pa(e, [
              {
                key: "render",
                value: function (e, t) {
                  new ma(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ga = n("+QRC"),
        Ea = n.n(ga);
      function ba(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function wa(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function va(e, t, n) {
        return t && wa(e.prototype, t), n && wa(e, n), e;
      }
      var Ta = (function () {
          function e(t, n) {
            ba(this, e), this.render(t, n);
          }
          return (
            va(e, [
              {
                key: "on_CLICK",
                value: function () {
                  Ea()(window.location.href),
                    o.a.killTweensOf([this, this.refs.status]),
                    o.a.fromTo(
                      this.refs.status,
                      { opacity: 0 },
                      { opacity: 1, duration: 0.3, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this,
                      {},
                      { duration: 2, onComplete: this.close.bind(this) }
                    );
                },
              },
              {
                key: "close",
                value: function () {
                  o.a.killTweensOf([this, this.refs.status]),
                    o.a.to(this.refs.status, {
                      opacity: 0,
                      duration: 0.3,
                      ease: "power3.out",
                    });
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      status: this.element.find(
                        '*[data-ref="clipboard-status"]'
                      ),
                    }),
                    this.element.on("click", this.on_CLICK.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        ka = (function () {
          function e(t, n) {
            ba(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            va(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            va(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Ta(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Ca(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Oa(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Pa(e, t, n) {
        return t && Oa(e.prototype, t), n && Oa(e, n), e;
      }
      var Na = (function () {
          function e(t, n) {
            Ca(this, e), this.render(t, n);
          }
          return (
            Pa(e, [
              {
                key: "on_SCROLL",
                value: function () {
                  this.element.get(0).getBoundingClientRect();
                  var e =
                    (-1 * this.refs.headline.get(0).getBoundingClientRect().y) /
                    120;
                  (e = (e = e < 0 ? 0 : e) > 1 ? 1 : e),
                    o.a.set(this.refs.cover, { opacity: 1 - e }),
                    o.a.set(this.refs.title, { opacity: e, y: 10 * (1 - e) });
                },
              },
              {
                key: "animate",
                value: function (e) {
                  o.a.to(this, {
                    duration: this.delayToNextSlide + e,
                    onComplete: this.goToNextSlide.bind(this),
                  });
                },
              },
              {
                key: "goToNextSlide",
                value: function () {
                  var e = this.refs.coverItem.eq(
                    this.counter % this.refs.coverItem.length
                  );
                  this.counter++;
                  var t = this.refs.coverItem.eq(
                    this.counter % this.refs.coverItem.length
                  );
                  o.a.to(e, { x: "-100%", duration: 0.6, ease: "power1.out" }),
                    o.a.fromTo(
                      t,
                      { x: "100%" },
                      { x: "0%", duration: 0.6, ease: "power1.out" }
                    ),
                    this.setPage(),
                    this.animate(0);
                },
              },
              {
                key: "setPage",
                value: function () {
                  if (this.refs.pagination.length) {
                    var e = this.paginationTemplate,
                      t = this.refs.coverItem.length,
                      n = (this.counter % this.refs.coverItem.length) + 1;
                    (e = e.replace("{page}", n).replace("{pages}", t)),
                      this.refs.pagination.html(e);
                  }
                },
              },
              {
                key: "on_APP_INIT",
                value: function (e, t) {
                  t == this.refs.content.data("app-name") &&
                    this.refs.coverItem.length > 1 &&
                    this.animate(5);
                },
              },
              {
                key: "on_APP_DISPOSE",
                value: function () {
                  o.a.killTweensOf(this);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.counter = 0),
                    (this.paginationTemplate = ""),
                    (this.delayToNextSlide = 5),
                    (this.refs = {
                      content: this.element.find('*[data-ref="app-content"]'),
                      headline: this.element.find(
                        '*[data-ref="app-header-slider-headline"]'
                      ),
                      title: this.element.find(
                        '*[data-ref="app-header-slider-title"]'
                      ),
                      cover: this.element.find(
                        '*[data-ref="app-header-slider-cover"]'
                      ),
                      coverItem: this.element.find(
                        '*[data-ref="app-header-slider-cover-item"]'
                      ),
                      pagination: this.element.find(
                        '*[data-ref="app-header-slider-pagination"]'
                      ),
                    }),
                    this.refs.pagination.length &&
                      ((this.paginationTemplate = this.refs.pagination.html()),
                      this.setPage());
                  for (var n = 0; n < this.refs.coverItem.length; n++) {
                    var i = this.refs.coverItem.eq(n);
                    o.a.set(i, { x: 0 == n ? "0%" : "100%" });
                  }
                  a()(this.refs.content).on(
                    "scroll",
                    this.on_SCROLL.bind(this)
                  ),
                    a()(window).on(Je.EVENT.INIT, this.on_APP_INIT.bind(this)),
                    a()(window).on(
                      Je.EVENT.DISPOSE,
                      this.on_APP_DISPOSE.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        _a = (function () {
          function e(t, n) {
            Ca(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Pa(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppHeaderSlider.EVENT.OPEN",
                    CLOSE: "CAppHeaderSlider.EVENT.CLOSE",
                  };
                },
              },
            ]),
            Pa(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Na(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Sa(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Aa(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Ia(e, t, n) {
        return t && Aa(e.prototype, t), n && Aa(e, n), e;
      }
      var Va = (function () {
          function e(t, n) {
            Sa(this, e), this.render(t, n);
          }
          return (
            Ia(e, [
              {
                key: "open",
                value: function (e, t) {
                  (this.themeIndex = t),
                    (this.data = Ba.instance.getDataByThemeName(t)),
                    this.refs.title.html(this.data.name),
                    y.instance.trackPage(
                      "Galaxy Themes",
                      "/app/galaxy-themes/".concat(
                        k.slugfy(this.data.name),
                        "/apply"
                      )
                    ),
                    o.a.set(this.refs.progress, { width: "0%" }),
                    this.setPercent(0);
                  var n = this.refs.image.css("background-image");
                  -1 != n.indexOf(Ba.instance.currentTheme) &&
                    ((n = n.replace(
                      Ba.instance.currentTheme,
                      Ba.instance.data[t]
                    )),
                    this.refs.image.css("background-image", n)),
                    this.element.css("display", "block"),
                    a()(window).trigger(it.EVENT.RESET),
                    o.a.delayedCall(1, this.onOpen.bind(this));
                },
              },
              {
                key: "onOpen",
                value: function () {
                  Ba.instance.update(this.themeIndex);
                },
              },
              {
                key: "close",
                value: function () {
                  o.a.delayedCall(1, this.onClose.bind(this));
                },
              },
              {
                key: "onClose",
                value: function () {
                  this.element.css("display", "none");
                },
              },
              {
                key: "setPercent",
                value: function (e) {
                  this.refs.percent.html("".concat(e, "%")),
                    o.a.to(this.refs.progress, {
                      duration: 0.3,
                      width: "".concat(e, "%"),
                    });
                },
              },
              {
                key: "progress",
                value: function (e, t) {
                  this.setPercent(Math.floor(100 * t)), t >= 1 && this.close();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.data = null),
                    (this.themeIndex = 0),
                    (this.refs = {
                      title: this.element.find('*[data-ref="app-theme-title"]'),
                      image: this.element.find('*[data-ref="app-theme-image"]'),
                      progress: this.element.find(
                        '*[data-ref="app-theme-progress"]'
                      ),
                      percent: this.element.find(
                        '*[data-ref="app-theme-percent"]'
                      ),
                    }),
                    a()(window).on(xa.EVENT.OPEN, this.open.bind(this)),
                    a()(window).on(Ba.EVENT.PROGRESS, this.progress.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        xa = (function () {
          function e(t, n) {
            Sa(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Ia(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { OPEN: "CAppThemeLoader.EVENT.OPEN" };
                },
              },
            ]),
            Ia(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Va(e, t);
                },
              },
            ]),
            e
          );
        })(),
        La = xa;
      function Da(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Ra(e, t, n) {
        return t && Da(e.prototype, t), n && Da(e, n), e;
      }
      var Ba = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.data = [
              "default",
              "black-onix",
              "black-minimalist",
              "white-minimalist",
              "white-onix",
              "cute",
              "retro",
            ]),
            (this.themesData = {
              default: {
                name: "Default",
                description:
                  "Samsung users are all unique and they like their phones to be unique too. No turtleneck wearer should dictate how your phone looks. Check out a few of the other themes. The ones here are just to give you a taste, but once you have a real Samsung you’ll have access to a world of amazing options.",
                previewImages: 3,
              },
              "black-onix": {
                name: "Black Onyx",
                description:
                  "There are 1000s of digital artists on the internet and with Galaxy Themes you can put them to work designing your phone how you like it.",
                previewImages: 3,
              },
              "black-minimalist": {
                name: "Darth",
                description:
                  "Whatever your interest there is a theme to match it. Love dressing head to toe in black and marching around to intimidating music? This is the theme for you.",
                previewImages: 3,
              },
              "white-minimalist": {
                name: "Simple white",
                description:
                  "With Simple White now your phone can match your kicks. In fact, some of your favourite brands will have themes so you can match your phone to a lot more than your kicks.",
                previewImages: 3,
              },
              "white-onix": {
                name: "Robot",
                description:
                  "We couldn’t resist making an iTest theme. You’ll understand once your own Samsung. Customisation is addictive.",
                previewImages: 3,
              },
              cute: {
                name: "Cute",
                description:
                  "When you change your themes you’ll notice that it also changes the look and feel of the Samsung apps too and each of the icons gets a cool little treatment.",
                previewImages: 3,
              },
              retro: {
                name: "Retro",
                description:
                  "The 80s used to mean shoulder pads and questionable hairstyles, but now it means epic phone themes and nostalgic electropop.",
                previewImages: 3,
              },
            }),
            (this.currentTheme = this.data[0]),
            (window.theme = this.currentTheme),
            (this.loader = 0),
            (this.loaderCounter = 0),
            (this.isPreviewLoaded = !1),
            this.preloadPreviewImages();
        }
        return (
          Ra(e, null, [
            {
              key: "EVENT",
              get: function () {
                return {
                  UPDATE: "CAppThemesData.EVENT.UPDATE",
                  PROGRESS: "CAppThemesData.EVENT.PROGRESS",
                };
              },
            },
            {
              key: "instance",
              get: function () {
                return (
                  this._instance ||
                    (this._instance = new e("singletonEnforcer")),
                  this._instance
                );
              },
            },
          ]),
          Ra(e, [
            {
              key: "preloadPreviewImages",
              value: function () {
                if (!this.isPreviewLoaded) {
                  this.isPreviewLoaded = !0;
                  for (var e = 0; e < this.data.length; e++)
                    for (var t = this.data[e], n = 0; n < 3; n++) {
                      var i = n + 1;
                      new Image().src = ""
                        .concat(host, "./assets/img/themes/")
                        .concat(t, "/preview/icon-theme-")
                        .concat(i, ".jpg");
                    }
                }
              },
            },
            {
              key: "update",
              value: function (t) {
                var n = this.data[t],
                  i = this.currentTheme;
                (this.currentTheme = n),
                  (window.theme = this.currentTheme),
                  (this.loader = 0),
                  (this.loaderCounter = 0),
                  a()(window).trigger(e.EVENT.UPDATE, [i, n]);
              },
            },
            {
              key: "addImageToLoader",
              value: function (e) {
                (e = e.replace('url("', "").replace('")', "")), this.loader++;
                var t = new Image();
                (t.src = e), (t.onload = this.image_LOADED.bind(this));
              },
            },
            {
              key: "image_LOADED",
              value: function () {
                this.loaderCounter++;
                var t = this.loaderCounter / this.loader;
                a()(window).trigger(e.EVENT.PROGRESS, [t]);
              },
            },
            {
              key: "getDataByThemeName",
              value: function (e) {
                return this.themesData[this.data[e]];
              },
            },
          ]),
          e
        );
      })();
      function Ma(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ua(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Ha(e, t, n) {
        return t && Ua(e.prototype, t), n && Ua(e, n), e;
      }
      var Ka = (function () {
          function e(t, n) {
            Ma(this, e), this.render(t, n);
          }
          return (
            Ha(e, [
              {
                key: "open",
                value: function () {
                  this.element.css("display", "block"),
                    this.refs.buttonClose.css("pointer-events", "auto"),
                    this.update(),
                    o.a.fromTo(
                      this.refs.wrapper,
                      { y: 0 },
                      { y: -50, duration: 0.4, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.element,
                      { y: 100, opacity: 0 },
                      {
                        y: 0,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power3.out",
                        onComplete: this.onOpen.bind(this),
                      }
                    );
                },
              },
              {
                key: "onOpen",
                value: function () {
                  this.isOpen = !0;
                },
              },
              {
                key: "update",
                value: function () {
                  this.refs.textTitle.html(this.data.name),
                    this.refs.textDescription.html(this.data.description);
                  var e = Ba.instance.data[this.themeIndex];
                  new Image().src = ""
                    .concat(host, "./assets/img/themes/")
                    .concat(e, "/dashboard/background.jpg");
                  for (
                    var t = this.refs.imageTemplate.clone(), n = "", i = 0;
                    i < this.data.previewImages;
                    i++
                  )
                    n += t
                      .html()
                      .replace("default", e)
                      .replace("icon-theme-1", "icon-theme-".concat(i + 1));
                  this.refs.imageList.html(n),
                    this.refs.imageList.scrollLeft(0);
                },
              },
              {
                key: "close",
                value: function () {
                  this.refs.buttonClose.css("pointer-events", "none"),
                    o.a.to(this.refs.wrapper, {
                      y: 0,
                      duration: 0.2,
                      ease: "power3.in",
                    }),
                    o.a.to(this.element, {
                      y: 100,
                      opacity: 0,
                      duration: 0.2,
                      ease: "power3.in",
                      onComplete: this.onClose.bind(this),
                    });
                },
              },
              {
                key: "onClose",
                value: function () {
                  this.element.css("display", "none"), (this.isOpen = !1);
                },
              },
              {
                key: "theme_OPEN",
                value: function (e, t, n) {
                  this.viewport.id == t &&
                    ((this.themeIndex = n),
                    (this.data = Ba.instance.getDataByThemeName(n)),
                    this.open());
                },
              },
              { key: "chat_CLOSE", value: function (e, t) {} },
              {
                key: "buttonClose_CLICK",
                value: function () {
                  this.close();
                },
              },
              {
                key: "chat_UPDATE",
                value: function () {
                  this.isOpen && this.update();
                },
              },
              { key: "app_INIT", value: function (e, t) {} },
              {
                key: "buttonApply_CLICK",
                value: function () {
                  a()(window).trigger(La.EVENT.OPEN, this.themeIndex),
                    this.close(),
                    a()(window).trigger(Je.EVENT.CLOSE, [!0]);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.data = null),
                    (this.themeIndex = 0),
                    (this.viewport = { id: this.element.data("app-theme-id") }),
                    (this.refs = {
                      buttonClose: this.element.find(
                        '*[data-ref="app-theme-button-close"]'
                      ),
                      buttonApply: this.element.find(
                        '*[data-ref="app-theme-button-apply"]'
                      ),
                      textTitle: this.element.find(
                        '*[data-ref="app-themes-text-title"]'
                      ),
                      textDescription: this.element.find(
                        '*[data-ref="app-themes-text-description"]'
                      ),
                      imageTemplate: this.element.find(
                        '*[data-ref="app-themes-image-template"]'
                      ),
                      imageList: this.element.find(
                        '*[data-ref="app-themes-image-list"]'
                      ),
                      wrapper: a()('*[data-ref="app-theme-wrapper"]'),
                    }),
                    a()(this.refs.buttonClose).on(
                      "click",
                      this.buttonClose_CLICK.bind(this)
                    ),
                    a()(this.refs.buttonApply).on(
                      "click",
                      this.buttonApply_CLICK.bind(this)
                    ),
                    a()(window).on(qa.EVENT.OPEN, this.theme_OPEN.bind(this)),
                    a()(window).on(Je.EVENT.INIT, this.app_INIT.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        qa = (function () {
          function e(t, n) {
            Ma(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Ha(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppTheme.EVENT.OPEN",
                    CLOSE: "CAppTheme.EVENT.CLOSE",
                  };
                },
              },
            ]),
            Ha(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Ka(e, t);
                },
              },
            ]),
            e
          );
        })(),
        ja = qa;
      function Fa(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ya(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Wa(e, t, n) {
        return t && Ya(e.prototype, t), n && Ya(e, n), e;
      }
      var Ga = (function () {
          function e(t, n) {
            Fa(this, e), this.render(t, n);
          }
          return (
            Wa(e, [
              {
                key: "buttonFeatured_CLICK",
                value: function () {
                  this.refs.buttonFeatured
                    .find('*[data-ref="button-rounded-enabled"]')
                    .css("display", "block"),
                    this.refs.buttonFeatured
                      .find('*[data-ref="button-rounded-disabled"]')
                      .css("display", "none"),
                    this.refs.buttonTop
                      .find('*[data-ref="button-rounded-enabled"]')
                      .css("display", "none"),
                    this.refs.buttonTop
                      .find('*[data-ref="button-rounded-disabled"]')
                      .css("display", "block"),
                    this.refs.featuredContainer.css("display", "block"),
                    this.refs.topContainer.css("display", "none"),
                    this.refs.content.scrollTop(
                      this.topPositionWhenSwitchCategory
                    ),
                    o.a.fromTo(
                      this.refs.featuredContainer,
                      { x: -window.innerWidth },
                      { x: 0, duration: 0.2, ease: "power2.out" }
                    );
                },
              },
              {
                key: "buttonTop_CLICK",
                value: function () {
                  this.refs.buttonTop
                    .find('*[data-ref="button-rounded-enabled"]')
                    .css("display", "block"),
                    this.refs.buttonTop
                      .find('*[data-ref="button-rounded-disabled"]')
                      .css("display", "none"),
                    this.refs.buttonFeatured
                      .find('*[data-ref="button-rounded-enabled"]')
                      .css("display", "none"),
                    this.refs.buttonFeatured
                      .find('*[data-ref="button-rounded-disabled"]')
                      .css("display", "block"),
                    this.refs.topContainer.css("display", "block"),
                    this.refs.featuredContainer.css("display", "none"),
                    this.refs.content.scrollTop(
                      this.topPositionWhenSwitchCategory
                    ),
                    o.a.fromTo(
                      this.refs.topContainer,
                      { x: window.innerWidth },
                      { x: 0, duration: 0.2, ease: "power2.out" }
                    );
                },
              },
              {
                key: "buttonTheme_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget).data("theme-button-index");
                  a()(window).trigger(ja.EVENT.OPEN, ["store", t]);
                },
              },
              {
                key: "reset",
                value: function () {
                  this.props.shouldRestartState &&
                    (o.a.killTweensOf([this.refs.foreground]),
                    o.a.set(this.refs.foreground, { display: "block" }));
                },
              },
              {
                key: "app_INIT",
                value: function (e, t) {
                  if ("galaxy-store" == t) {
                    var n = !0;
                    if (
                      (this.props.shouldRestartState ||
                        (this.props.restartCounter > 0 && (n = !1),
                        this.props.restartCounter++),
                      n)
                    ) {
                      o.a.killTweensOf([
                        this.refs.foreground,
                        this.refs.foregroundIcon,
                      ]),
                        o.a.fromTo(
                          this.refs.foreground,
                          { display: "block", opacity: 1 },
                          {
                            opacity: 0,
                            duration: 0.6,
                            delay: this.props.delayToStart + 1.2,
                            ease: "power3.inOut",
                            onComplete: this.onAppInit.bind(this),
                          }
                        );
                      var i = o.a.timeline({ paused: !0, delay: 0.4 });
                      i.fromTo(
                        this.refs.foregroundIcon,
                        { rotation: 0, transformOrigin: "center top" },
                        {
                          rotation: -15,
                          transformOrigin: "center top",
                          duration: 0.3,
                          ease: "power1.inOut",
                        }
                      ),
                        i.to(this.refs.foregroundIcon, {
                          rotation: 15,
                          transformOrigin: "center top",
                          duration: 0.2,
                          ease: "power1.inOut",
                        }),
                        i.to(this.refs.foregroundIcon, {
                          rotation: -15,
                          transformOrigin: "center top",
                          duration: 0.2,
                          ease: "power1.inOut",
                        }),
                        i.to(this.refs.foregroundIcon, {
                          rotation: 7,
                          transformOrigin: "center top",
                          duration: 0.1,
                          ease: "power1.inOut",
                        }),
                        i.to(this.refs.foregroundIcon, {
                          rotation: -7,
                          transformOrigin: "center top",
                          duration: 0.1,
                          ease: "power1.inOut",
                        }),
                        i.to(this.refs.foregroundIcon, {
                          rotation: 0,
                          transformOrigin: "center top",
                          duration: 0.1,
                          ease: "power1.inOut",
                        }),
                        i.play();
                    } else this.onAppInit();
                  }
                },
              },
              {
                key: "onAppInit",
                value: function () {
                  o.a.set(this.refs.foreground, { display: "none" });
                },
              },
              {
                key: "app_DISPOSE",
                value: function (e, t) {
                  "galaxy-store" == t && this.reset();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.topPositionWhenSwitchCategory = 170),
                    (this.props = {
                      shouldRestartState: !0,
                      restartCounter: 0,
                      delayToStart: 1,
                    }),
                    (this.refs = {
                      foreground: this.element.find(
                        '*[data-ref="app-galaxy-store-foreground"]'
                      ),
                      foregroundIcon: this.element.find(
                        '*[data-ref="app-galaxy-store-foreground-icon"]'
                      ),
                      content: this.element.find('*[data-ref="app-content"]'),
                      featuredContainer: this.element.find(
                        '*[data-ref="app-galaxy-store-container-featured"]'
                      ),
                      topContainer: this.element.find(
                        '*[data-ref="app-galaxy-store-container-top"]'
                      ),
                      buttonFeatured: this.element.find(
                        '*[data-ref="app-galaxy-store-button-featured"]'
                      ),
                      buttonTop: this.element.find(
                        '*[data-ref="app-galaxy-store-button-top"]'
                      ),
                      themeButton: this.element.find(
                        '*[data-ref="theme-button"]'
                      ),
                    }),
                    a()(this.refs.themeButton).on(
                      "click",
                      this.buttonTheme_CLICK.bind(this)
                    ),
                    a()(this.refs.buttonFeatured).on(
                      "click",
                      this.buttonFeatured_CLICK.bind(this)
                    ),
                    a()(this.refs.buttonTop).on(
                      "click",
                      this.buttonTop_CLICK.bind(this)
                    ),
                    a()(window).on(Je.EVENT.INIT, this.app_INIT.bind(this)),
                    a()(window).on(
                      Je.EVENT.DISPOSE,
                      this.app_DISPOSE.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        Xa = (function () {
          function e(t, n) {
            Fa(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Wa(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppGalaxyStore.EVENT.OPEN",
                    CLOSE: "CAppGalaxyStore.EVENT.CLOSE",
                  };
                },
              },
            ]),
            Wa(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Ga(e, t);
                },
              },
            ]),
            e
          );
        })();
      function za(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      var Za = (function () {
        function e(t, n) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            this.render(t, n),
            this
          );
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "reset",
              value: function () {
                (this.isPinchEnable = !1),
                  (this.initialDistance = 0),
                  (this.initialImageScale = 100),
                  (this.scrollLeft = 0.5),
                  (this.currentImageScale = this.initialImageScale);
              },
            },
            {
              key: "getTouchDistance",
              value: function (e) {
                var t = e[0].clientX,
                  n = e[0].clientY,
                  i = t - e[1].clientX,
                  a = n - e[1].clientY;
                return Math.sqrt(i * i + a * a);
              },
            },
            {
              key: "setImageScale",
              value: function () {
                o.a.set(this.refs.imageContainer, {
                  width: "".concat(this.currentImageScale, "%"),
                });
                var e =
                  this.scrollLeft *
                  (this.refs.imageContainer.width() - window.innerWidth);
                this.currentImageScale <= 100 && (this.scrollLeft = 0.5),
                  this.refs.viewportContainer.scrollLeft(e);
              },
            },
            {
              key: "image_SCROLL",
              value: function (e) {
                if (this.isPinchEnable) e.preventDefault();
                else {
                  var t =
                    this.refs.viewportContainer.scrollLeft() /
                    (this.refs.imageContainer.width() - window.innerWidth);
                  this.scrollLeft = t;
                }
              },
            },
            {
              key: "image_TOUCH_MOVE",
              value: function (e) {
                if (e.touches.length >= 2 && this.isPinchEnable) {
                  var t =
                    this.getTouchDistance(e.touches) - this.initialDistance;
                  (this.currentImageScale = this.initialImageScale + t),
                    (this.currentImageScale = Math.max(
                      this.currentImageScale,
                      100
                    )),
                    (this.currentImageScale = Math.min(
                      this.currentImageScale,
                      400
                    )),
                    this.setImageScale();
                }
              },
            },
            {
              key: "image_TOUCH_START",
              value: function (e) {
                e.touches.length >= 2 &&
                  ((this.initialDistance = this.getTouchDistance(e.touches)),
                  (this.isPinchEnable = !0));
              },
            },
            {
              key: "image_TOUCH_END",
              value: function (e) {
                e.touches.length < 2 &&
                  ((this.initialImageScale = this.currentImageScale),
                  (this.isPinchEnable = !1)),
                  this.refs.viewportContainer.focus();
              },
            },
            {
              key: "image_TOUCH_CLICK",
              value: function (e) {
                o.a.killTweensOf(this),
                  this.currentImageScale <= 100
                    ? o.a.to(this, {
                        currentImageScale: 250,
                        duration: 0.3,
                        ease: "power3.out",
                        onUpdate: this.setImageScale.bind(this),
                        onComplete: this.imageScale_COMPLETE.bind(this),
                      })
                    : o.a.to(this, {
                        currentImageScale: 100,
                        duration: 0.3,
                        ease: "power3.out",
                        onUpdate: this.setImageScale.bind(this),
                        onComplete: this.imageScale_COMPLETE.bind(this),
                      });
              },
            },
            {
              key: "imageScale_COMPLETE",
              value: function () {
                this.initialImageScale = this.currentImageScale;
              },
            },
            {
              key: "render",
              value: function (e, t) {
                (this.element = e),
                  (this.refs = {
                    viewportContainer: this.element.find(
                      '*[data-ref="gallery-image-viewport"]'
                    ),
                    imageContainer: this.element.find(
                      '*[data-ref="gallery-image-container"]'
                    ),
                  }),
                  this.reset(),
                  a()(this.refs.imageContainer).on(
                    "touchstart",
                    this.image_TOUCH_START.bind(this)
                  ),
                  a()(this.refs.imageContainer).on(
                    "touchend",
                    this.image_TOUCH_END.bind(this)
                  ),
                  a()(this.refs.imageContainer).on(
                    "touchmove",
                    this.image_TOUCH_MOVE.bind(this)
                  ),
                  a()(this.refs.imageContainer).on(
                    "dblclick",
                    this.image_TOUCH_CLICK.bind(this)
                  ),
                  a()(this.refs.viewportContainer).on(
                    "scroll",
                    this.image_SCROLL.bind(this)
                  );
              },
            },
          ]) && za(t.prototype, n),
          i && za(t, i),
          e
        );
      })();
      function Ja(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Qa(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function $a(e, t, n) {
        return t && Qa(e.prototype, t), n && Qa(e, n), e;
      }
      var eo = (function () {
          function e(t, n) {
            Ja(this, e), this.render(t, n);
          }
          return (
            $a(e, [
              {
                key: "open",
                value: function (e, t) {
                  Je.addInApp("gallery-photo"),
                    (this.currentIndex = t.index),
                    (this.photosRect = t.position),
                    this.reset(),
                    this.setImageScale(),
                    (this.currentScrollViewportPosition =
                      -window.innerWidth * this.currentIndex),
                    o.a.set(this.refs.scrollViewport, {
                      x: this.currentScrollViewportPosition,
                    }),
                    o.a.set(this.element, {
                      display: "block",
                      pointerEvents: "auto",
                    });
                  var n = this.photosRect[this.currentIndex],
                    i = n.x < window.innerWidth / 2 ? "0% 0%" : "100% 0%",
                    a = this.refs.imageBlock
                      .eq(this.currentIndex)
                      .find('*[data-ref="gallery-image-container"]'),
                    s = this.refs.imageBlock.eq(this.currentIndex);
                  o.a.set(a, { height: "auto" }),
                    o.a.fromTo(
                      s,
                      {
                        x: n.x,
                        y: n.y,
                        width: n.width,
                        height: n.height,
                        transformOrigin: i,
                      },
                      {
                        x: 0,
                        y: 0,
                        width: "100%",
                        height: "100%",
                        duration: 0.4,
                        ease: "power3.out",
                        delay: 0,
                      }
                    ),
                    o.a.set(this.refs.background, { opacity: 1 }),
                    o.a.fromTo(
                      [this.refs.topBar, this.refs.bottomBar],
                      { opacity: 0 },
                      {
                        opacity: 1,
                        duration: 0.3,
                        delay: 0.3,
                        ease: "power3.out",
                      }
                    );
                },
              },
              { key: "onOpen", value: function () {} },
              {
                key: "close",
                value: function () {
                  if (Je.getInApp("gallery-photo")) {
                    Je.removeInApp("gallery-photo"),
                      o.a.set(this.refs.background, { opacity: 0 }),
                      o.a.to([this.refs.topBar, this.refs.bottomBar], {
                        opacity: 0,
                        duration: 0.2,
                        ease: "power1.out",
                      });
                    var e = this.photosRect[this.currentIndex],
                      t = e.x < window.innerWidth / 2 ? "0% 0%" : "100% 0%",
                      n = this.refs.imageBlock
                        .eq(this.currentIndex)
                        .find('*[data-ref="gallery-image-container"]');
                    o.a.set(n, { width: "100%" }),
                      o.a.to(n, {
                        height: e.height,
                        duration: 0.2,
                        ease: "power1.out",
                        delay: 0,
                      });
                    var i = this.refs.imageBlock.eq(this.currentIndex);
                    o.a.fromTo(
                      i,
                      {
                        x: 0,
                        y: 0,
                        width: "100%",
                        height: "100%",
                        transformOrigin: t,
                      },
                      {
                        x: e.x,
                        y: e.y,
                        width: e.width,
                        height: e.height,
                        duration: 0.2,
                        ease: "power1.out",
                        delay: 0,
                        onComplete: this.onClose.bind(this),
                      }
                    );
                  }
                },
              },
              {
                key: "onClose",
                value: function () {
                  o.a.set(this.element, {
                    display: "none",
                    pointerEvents: "none",
                  });
                  var e = this.refs.imageBlock
                      .eq(this.currentIndex)
                      .find('*[data-ref="gallery-image-container"]'),
                    t = this.refs.imageBlock.eq(this.currentIndex);
                  o.a.set(e, { height: "auto" }),
                    o.a.set(t, {
                      x: 0,
                      y: 0,
                      width: "100%",
                      height: "100%",
                      duration: 0.4,
                      ease: "power3.out",
                      delay: 0,
                    });
                },
              },
              {
                key: "setImageScale",
                value: function () {
                  for (var e = 0; e < this.photos.length; e++) {
                    this.photos[e].setImageScale();
                  }
                },
              },
              {
                key: "reset",
                value: function () {
                  for (var e = 0; e < this.photos.length; e++) {
                    this.photos[e].reset();
                  }
                },
              },
              {
                key: "scrollViewport_TOUCH_END",
                value: function (e) {
                  if (this.isMoving) {
                    this.isMoving = !1;
                    var t = Math.round(
                      (-1 * this.moveableScrollViewportPosition) /
                        window.innerWidth
                    );
                    (t =
                      (t = t < 0 ? 0 : t) > this.refs.imageBlock.length - 1
                        ? this.refs.imageBlock.length - 1
                        : t),
                      (this.currentScrollViewportPosition =
                        -window.innerWidth * t),
                      o.a.killTweensOf(this.refs.scrollViewport),
                      o.a.to(this.refs.scrollViewport, {
                        x: this.currentScrollViewportPosition,
                        duration: 0.3,
                        ease: "power1.out",
                      }),
                      (this.currentIndex = t),
                      o.a.killTweensOf([
                        this.refs.arrowLeft,
                        this.refs.arrowRight,
                      ]),
                      o.a.to(this.refs.arrowLeft, {
                        x: "-25%",
                        duration: 0.5,
                        ease: "power1.out",
                      }),
                      o.a.to(this.refs.arrowRight, {
                        x: "25%",
                        duration: 0.5,
                        ease: "power1.out",
                      });
                  }
                  a()(document).off("touchend"), a()(document).off("touchmove");
                },
              },
              {
                key: "scrollViewport_TOUCH_MOVE",
                value: function (e) {
                  if (this.photos[this.currentIndex].isPinchEnable)
                    (this.currentScrollViewportPosition =
                      -window.innerWidth * this.currentIndex),
                      o.a.set(this.refs.scrollViewport, {
                        x: this.currentScrollViewportPosition,
                      }),
                      o.a.to(this.refs.arrowLeft, {
                        x: "-25%",
                        duration: 0.3,
                        ease: "power1.out",
                      }),
                      o.a.to(this.refs.arrowRight, {
                        x: "25%",
                        duration: 0.3,
                        ease: "power1.out",
                      }),
                      a()(document).off("touchend"),
                      a()(document).off("touchmove");
                  else {
                    this.isMoving = !0;
                    var t = e.touches[0] || e.changedTouches[0];
                    this.currentTouchPosition = {
                      x: t.pageX - this.initialTouchPosition.x,
                      y: t.pageY - this.initialTouchPosition.y,
                    };
                    var n = -(
                      this.refs.imageBlock.length * window.innerWidth -
                      window.innerWidth
                    );
                    o.a.killTweensOf([
                      this.refs.arrowLeft,
                      this.refs.arrowRight,
                    ]);
                    var i =
                      (25 *
                        (this.currentScrollViewportPosition +
                          this.currentTouchPosition.x)) /
                      100;
                    (i = i > 25 ? 25 : i),
                      o.a.set(this.refs.arrowLeft, {
                        x: "".concat(-25 + i, "%"),
                      });
                    var s =
                      (25 *
                        (n -
                          (this.currentScrollViewportPosition +
                            this.currentTouchPosition.x))) /
                      100;
                    (s = s > 25 ? 25 : s),
                      o.a.to(this.refs.arrowRight, {
                        x: "".concat(25 - s, "%"),
                        duration: 0.1,
                      }),
                      (this.moveableScrollViewportPosition =
                        this.currentScrollViewportPosition +
                        this.currentTouchPosition.x),
                      (this.moveableScrollViewportPosition =
                        this.moveableScrollViewportPosition > 0
                          ? 0
                          : this.moveableScrollViewportPosition),
                      (this.moveableScrollViewportPosition =
                        this.moveableScrollViewportPosition < n
                          ? n
                          : this.moveableScrollViewportPosition),
                      o.a.to(this.refs.scrollViewport, {
                        x: this.moveableScrollViewportPosition,
                        duration: 0.1,
                      });
                  }
                },
              },
              {
                key: "scrollViewport_TOUCH_START",
                value: function (e) {
                  var t = this.photos[this.currentIndex].currentImageScale;
                  if (((this.isMoving = !1), t <= 100)) {
                    var n = e.touches[0] || e.changedTouches[0];
                    (this.initialTouchPosition = { x: n.pageX, y: n.pageY }),
                      (this.currentTouchPosition = {
                        x: n.pageX - this.initialTouchPosition.x,
                        y: n.pageY - this.initialTouchPosition.y,
                      }),
                      a()(document).on(
                        "touchend",
                        this.scrollViewport_TOUCH_END.bind(this)
                      ),
                      a()(document).on(
                        "touchmove",
                        this.scrollViewport_TOUCH_MOVE.bind(this)
                      );
                  }
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.photosRect = null),
                    (this.currentScrollViewportPosition = 0),
                    (this.moveableScrollViewportPosition = 0),
                    (this.currentIndex = 0),
                    (this.isMoving = !1),
                    (this.initialTouchPosition = { x: 0, y: 0 }),
                    (this.currentTouchPosition = { x: 0, y: 0 }),
                    (this.refs = {
                      background: this.element.find(
                        '*[data-ref="gallery-image-background"]'
                      ),
                      buttonBack: this.element.find(
                        '*[data-ref="gallery-image-button-back"]'
                      ),
                      topBar: this.element.find(
                        '*[data-ref="gallery-image-top-bar"]'
                      ),
                      bottomBar: this.element.find(
                        '*[data-ref="gallery-image-bottom-bar"]'
                      ),
                      scrollViewport: this.element.find(
                        '*[data-ref="gallery-image-scroll"]'
                      ),
                      imageBlock: this.element.find(
                        '*[data-ref="gallery-image-block"]'
                      ),
                      arrowLeft: this.element.find(
                        '*[data-ref="gallery-image-arrow-left"]'
                      ),
                      arrowRight: this.element.find(
                        '*[data-ref="gallery-image-arrow-right"]'
                      ),
                    }),
                    (this.photos = []);
                  for (var n = 0; n < this.refs.imageBlock.length; n++)
                    this.photos.push(new Za(this.refs.imageBlock.eq(n), n));
                  this.reset(),
                    o.a.set(this.refs.arrowLeft, { x: "-25%" }),
                    o.a.set(this.refs.arrowRight, { x: "25%" }),
                    a()(this.refs.buttonBack).on(
                      "click",
                      this.close.bind(this)
                    ),
                    a()(window).on(to.EVENT.OPEN, this.open.bind(this)),
                    a()(window).on(to.EVENT.CLOSE, this.close.bind(this)),
                    a()(this.refs.scrollViewport).on(
                      "touchstart",
                      this.scrollViewport_TOUCH_START.bind(this)
                    ),
                    this.setImageScale(),
                    o.a.set(this.element, {
                      display: "none",
                      pointerEvents: "none",
                    }),
                    a()(window).on(ue.EVENT.BACK, this.close.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        to = (function () {
          function e(t, n) {
            Ja(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            $a(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppGalleryPhoto.EVENT.OPEN",
                    CLOSE: "CAppGalleryPhoto.EVENT.CLOSE",
                  };
                },
              },
            ]),
            $a(e, [
              {
                key: "render",
                value: function (e, t) {
                  new eo(e, t);
                },
              },
            ]),
            e
          );
        })(),
        no = to;
      function io(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ao(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function oo(e, t, n) {
        return t && ao(e.prototype, t), n && ao(e, n), e;
      }
      var so = (function () {
          function e(t, n) {
            io(this, e), this.render(t, n);
          }
          return (
            oo(e, [
              {
                key: "photo_CLICK",
                value: function (e) {
                  for (
                    var t = a()(e.currentTarget),
                      n = t.data("image"),
                      i = t.data("index"),
                      o = (t.get(0).getBoundingClientRect(), []),
                      s = 0;
                    s < this.refs.photos.length;
                    s++
                  ) {
                    var r = this.refs.photos.eq(s);
                    o.push(r.get(0).getBoundingClientRect());
                  }
                  a()(window).trigger(no.EVENT.OPEN, [
                    { photo: n, index: i, position: o },
                  ]);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      photos: this.element.find(
                        '*[data-ref="app-gallery-photo"]'
                      ),
                    }),
                    this.refs.photos.on("click", this.photo_CLICK.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        ro = (function () {
          function e(t, n) {
            io(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            oo(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppGallery.EVENT.OPEN",
                    CLOSE: "CAppGallery.EVENT.CLOSE",
                  };
                },
              },
            ]),
            oo(e, [
              {
                key: "render",
                value: function (e, t) {
                  new so(e, t);
                },
              },
            ]),
            e
          );
        })();
      function lo(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function co(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function uo(e, t, n) {
        return t && co(e.prototype, t), n && co(e, n), e;
      }
      var ho = (function () {
          function e(t, n) {
            lo(this, e), this.render(t, n);
          }
          return (
            uo(e, [
              {
                key: "open",
                value: function (e, t) {
                  this.onTransition ||
                    (Je.addInApp("video"),
                    (this.onTransition = !0),
                    o.a.killTweensOf([this.element]),
                    (this.refs.video.src = t.src),
                    (this.refs.video.muted = !1),
                    this.refs.video.play(),
                    this.element.css("display", "block"),
                    o.a.fromTo(
                      this.element,
                      { opacity: 0, y: 0 },
                      {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        onComplete: this.on_OPEN.bind(this),
                      }
                    ));
                },
              },
              {
                key: "on_OPEN",
                value: function () {
                  this.onTransition = !1;
                },
              },
              {
                key: "close",
                value: function () {
                  this.onTransition ||
                    (Je.getInApp("video") &&
                      (Je.removeInApp("video"),
                      (this.onTransition = !0),
                      this.refs.video.pause(),
                      o.a.to(this.element, {
                        y: 0,
                        opacity: 0,
                        duration: 0.4,
                        ease: "power3.inOut",
                        onComplete: this.on_CLOSE.bind(this),
                      })));
                },
              },
              {
                key: "on_CLOSE",
                value: function () {
                  (this.refs.video.src = ""),
                    this.element.css("display", "none"),
                    (this.onTransition = !1);
                },
              },
              {
                key: "button_CLICK",
                value: function () {
                  this.close();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.onTransition = !1),
                    (this.refs = {
                      button: this.element.find(
                        '*[data-ref="app-video-button-back"'
                      ),
                      video: this.element
                        .find('*[data-ref="app-video-player"]')
                        .get(0),
                    }),
                    this.refs.button.on("click", this.button_CLICK.bind(this)),
                    a()(window).on(fo.EVENT.OPEN, this.open.bind(this)),
                    a()(window).on(ue.EVENT.BACK, this.close.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        fo = (function () {
          function e(t, n) {
            lo(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            uo(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { OPEN: "CAppVideo.EVENT.OPEN" };
                },
              },
            ]),
            uo(e, [
              {
                key: "render",
                value: function (e, t) {
                  new ho(e, t);
                },
              },
            ]),
            e
          );
        })(),
        po = fo;
      function mo(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function yo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function go(e, t, n) {
        return t && yo(e.prototype, t), n && yo(e, n), e;
      }
      var Eo = (function () {
          function e(t, n) {
            mo(this, e), this.render(t, n);
          }
          return (
            go(e, [
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      content: this.element.find('*[data-ref="app-content"]'),
                    });
                },
              },
            ]),
            e
          );
        })(),
        bo = (function () {
          function e(t, n) {
            mo(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            go(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppGameLauncher.EVENT.OPEN",
                    CLOSE: "CAppGameLauncher.EVENT.CLOSE",
                  };
                },
              },
            ]),
            go(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Eo(e, t);
                },
              },
            ]),
            e
          );
        })();
      function wo(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function vo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function To(e, t, n) {
        return t && vo(e.prototype, t), n && vo(e, n), e;
      }
      var ko = (function () {
          function e(t, n) {
            wo(this, e), this.render(t, n);
          }
          return (
            To(e, [
              {
                key: "on_CLICK",
                value: function (e) {
                  a()(e.currentTarget);
                  a()(window).trigger(po.EVENT.OPEN, this.data);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.data = {
                      src: this.element.data("app-video-button-src"),
                    }),
                    this.element.on("click", this.on_CLICK.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Co = (function () {
          function e(t, n) {
            wo(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            To(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            To(e, [
              {
                key: "render",
                value: function (e, t) {
                  new ko(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Oo(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Po(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function No(e, t, n) {
        return t && Po(e.prototype, t), n && Po(e, n), e;
      }
      var _o = (function () {
          function e(t, n) {
            Oo(this, e), this.render(t, n);
          }
          return (
            No(e, [
              {
                key: "buttonTheme_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget).data("theme-button-index");
                  a()(window).trigger(ja.EVENT.OPEN, ["themes", t]);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      content: this.element.find('*[data-ref="app-content"]'),
                      themeButton: this.element.find(
                        '*[data-ref="theme-button"]'
                      ),
                    }),
                    a()(this.refs.themeButton).on(
                      "click",
                      this.buttonTheme_CLICK.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        So = (function () {
          function e(t, n) {
            Oo(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            No(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppGalaxyThemes.EVENT.OPEN",
                    CLOSE: "CAppGalaxyThemes.EVENT.CLOSE",
                  };
                },
              },
            ]),
            No(e, [
              {
                key: "render",
                value: function (e, t) {
                  new _o(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Ao(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Io(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Vo(e, t, n) {
        return t && Io(e.prototype, t), n && Io(e, n), e;
      }
      var xo = (function () {
          function e(t, n) {
            Ao(this, e), this.render(t, n);
          }
          return (
            Vo(e, [
              {
                key: "update",
                value: function (e, t, n) {
                  if (this.data.isCSS) this.element.attr("data-theme", n);
                  else if (this.data.isImage) {
                    var i = this.element.attr("src");
                    (i = i.replace(t, n)),
                      Ba.instance.addImageToLoader(i),
                      this.element.attr("src", i);
                  } else {
                    var a = this.element.css("background-image");
                    -1 != a.indexOf(t) &&
                      ((a = a.replace(t, n)),
                      Ba.instance.addImageToLoader(a),
                      this.element.css("background-image", a));
                  }
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  this.element = a()(e);
                  var n = this.element.attr("src"),
                    i = this.element.data("theme");
                  (this.data = {
                    isCSS: !("" == i || !i),
                    isImage: "" != n && null != n,
                  }),
                    a()(window).on(Ba.EVENT.UPDATE, this.update.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Lo = (function () {
          function e(t, n) {
            Ao(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Vo(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { OPEN: "CAppThemeChanger.EVENT.OPEN" };
                },
              },
            ]),
            Vo(e, [
              {
                key: "render",
                value: function (e, t) {
                  new xo(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Do(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ro(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Bo(e, t, n) {
        return t && Ro(e.prototype, t), n && Ro(e, n), e;
      }
      var Mo = (function () {
          function e(t, n) {
            Do(this, e), this.render(t, n);
          }
          return (
            Bo(e, [
              {
                key: "on_CLICK",
                value: function (e) {
                  a()(e.currentTarget);
                  Ba.instance.update(this.data.index);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.data = {
                      index: this.element.data("app-theme-button-index"),
                    }),
                    this.element.on("click", this.on_CLICK.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Uo = (function () {
          function e(t, n) {
            Do(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Bo(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            Bo(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Mo(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Ho(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ko(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function qo(e, t, n) {
        return t && Ko(e.prototype, t), n && Ko(e, n), e;
      }
      var jo = (function () {
          function e(t, n) {
            Ho(this, e), this.render(t, n);
          }
          return (
            qo(e, [
              {
                key: "mailButton_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget),
                    n = t.find('*[data-ref="app-mail-button-icon"]'),
                    i = t.find('*[data-ref="app-mail-button-text"]'),
                    s = t.find('*[data-ref="app-mail-background"]');
                  o.a.killTweensOf([n, i, s]);
                  var r = o.a.timeline({});
                  r.fromTo(
                    n,
                    { rotation: 0, transformOrigin: "center top" },
                    {
                      rotation: -15,
                      transformOrigin: "center top",
                      duration: 0.2,
                      ease: "power1.inOut",
                    }
                  ),
                    r.to(n, {
                      rotation: 15,
                      transformOrigin: "center top",
                      duration: 0.4,
                      ease: "power1.inOut",
                    }),
                    r.to(n, {
                      rotation: -15,
                      transformOrigin: "center top",
                      duration: 0.4,
                      ease: "power1.inOut",
                    }),
                    r.to(n, {
                      rotation: 0,
                      transformOrigin: "center top",
                      duration: 0.4,
                      ease: "power1.inOut",
                    }),
                    o.a.fromTo(
                      s,
                      { scale: 1 },
                      {
                        scale: 5,
                        transformOrigin: "center center",
                        duration: 0.4,
                        ease: "power1.out",
                      }
                    ),
                    o.a.fromTo(
                      s,
                      { opacity: 1 },
                      {
                        opacity: 0,
                        transformOrigin: "center center",
                        duration: 0.3,
                        delay: 0.2,
                        ease: "power1.out",
                      }
                    ),
                    o.a.fromTo(
                      i,
                      { opacity: 0, scale: 0 },
                      {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: "power3.out",
                      }
                    ),
                    this.state.isExpanded ||
                      (o.a.to(this.refs.header, {
                        top: "-15%",
                        duration: 0.6,
                        ease: "power3.out",
                      }),
                      o.a.to(this.refs.container, {
                        top: "25%",
                        duration: 0.6,
                        ease: "power3.out",
                      })),
                    o.a.set(this.refs.descript, { display: "none" });
                  var l = this.refs.descript.eq(
                    this.state.descriptCounter % this.refs.descript.length
                  );
                  o.a.killTweensOf(l),
                    o.a.fromTo(
                      l,
                      { opacity: 0, y: 20, display: "block" },
                      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
                    ),
                    this.state.descriptCounter++,
                    (this.state.isExpanded = !0);
                },
              },
              {
                key: "reset",
                value: function () {
                  this.props.shouldRestartState &&
                    (this.props.shouldDescriptRestartWhenAppClose &&
                      (this.state.descriptCounter = 0),
                    (this.state.isExpanded = !1),
                    o.a.set(this.refs.header, { top: "0%" }),
                    o.a.set(this.refs.container, { top: "50%" }),
                    o.a.set(this.refs.descript, { display: "none" }));
                },
              },
              { key: "app_INIT", value: function (e, t) {} },
              {
                key: "app_DISPOSE",
                value: function (e, t) {
                  "mail" == t && this.reset();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.props = {
                      shouldRestartState: !0,
                      shouldDescriptRestartWhenAppClose: !0,
                    }),
                    (this.state = { isExpanded: !1, descriptCounter: 0 }),
                    (this.refs = {
                      header: this.element.find(
                        '*[data-ref="app-mail-header"]'
                      ),
                      container: this.element.find(
                        '*[data-ref="app-mail-container"]'
                      ),
                      descript: this.element.find(
                        '*[data-ref="app-mail-descript"]'
                      ),
                      mailButton: this.element.find(
                        '*[data-ref="app-mail-button"]'
                      ),
                    }),
                    this.refs.mailButton.on(
                      "click",
                      this.mailButton_CLICK.bind(this)
                    ),
                    a()(window).on(Je.EVENT.INIT, this.app_INIT.bind(this)),
                    a()(window).on(
                      Je.EVENT.DISPOSE,
                      this.app_DISPOSE.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        Fo = (function () {
          function e(t, n) {
            Ho(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            qo(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppMail.EVENT.OPEN",
                    CLOSE: "CAppMail.EVENT.CLOSE",
                  };
                },
              },
            ]),
            qo(e, [
              {
                key: "render",
                value: function (e, t) {
                  new jo(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Yo(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Wo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Go(e, t, n) {
        return t && Wo(e.prototype, t), n && Wo(e, n), e;
      }
      var Xo = (function () {
          function e(t, n) {
            Yo(this, e), this.render(t, n);
          }
          return (
            Go(e, [
              {
                key: "open",
                value: function (e, t) {
                  Je.addInApp("wearable-details");
                  var n = t.index;
                  (this.state.currentItem = this.refs.items.eq(n)),
                    o.a.killTweensOf([
                      this.refs.wrapper,
                      this.state.currentItem,
                      this.element,
                    ]),
                    o.a.fromTo(
                      this.refs.wrapper,
                      { y: 0 },
                      { y: -50, duration: 0.4, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.state.currentItem,
                      { display: "flex", y: 100 },
                      { y: 0, duration: 0.4, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.element,
                      { display: "block", pointerEvents: "auto", opacity: 0 },
                      {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power3.out",
                        onComplete: this.onOpen.bind(this),
                      }
                    );
                },
              },
              { key: "onOpen", value: function () {} },
              {
                key: "close",
                value: function () {
                  Je.getInApp("wearable-details") &&
                    (Je.removeInApp("wearable-details"),
                    o.a.killTweensOf([
                      this.refs.wrapper,
                      this.state.currentItem,
                      this.element,
                    ]),
                    o.a.to(this.refs.wrapper, {
                      y: 0,
                      duration: 0.4,
                      ease: "power3.inOut",
                    }),
                    o.a.to(this.state.currentItem, {
                      y: 100,
                      duration: 0.4,
                      ease: "power3.inOut",
                    }),
                    o.a.to(this.element, {
                      opacity: 0,
                      duration: 0.4,
                      ease: "power3.inOut",
                      onComplete: this.onClose.bind(this),
                    }));
                },
              },
              {
                key: "onClose",
                value: function () {
                  o.a.set(this.refs.items, { display: "none" }),
                    o.a.set(this.element, {
                      display: "none",
                      pointerEvents: "none",
                    });
                },
              },
              { key: "reset", value: function () {} },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      wrapper: a()('*[data-ref="app-wearable-wrapper"]'),
                      items: this.element.find(
                        '*[data-ref="app-wearable-details-item"]'
                      ),
                    }),
                    (this.state = { currentItem: null }),
                    this.reset(),
                    a()(window).on(zo.EVENT.OPEN, this.open.bind(this)),
                    a()(window).on(zo.EVENT.CLOSE, this.close.bind(this)),
                    o.a.set(this.element, {
                      display: "none",
                      pointerEvents: "none",
                    }),
                    o.a.set(this.refs.items, { display: "none" }),
                    a()(window).on(ue.EVENT.BACK, this.close.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        zo = (function () {
          function e(t, n) {
            Yo(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Go(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppWearableDetails.EVENT.OPEN",
                    CLOSE: "CAppWearableDetails.EVENT.CLOSE",
                    RESET: "CAppWearableDetails.EVENT.RESET",
                  };
                },
              },
            ]),
            Go(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Xo(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Zo = zo;
      function Jo(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Qo(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function $o(e, t, n) {
        return t && Qo(e.prototype, t), n && Qo(e, n), e;
      }
      var es = (function () {
          function e(t, n) {
            Jo(this, e), this.render(t, n);
          }
          return (
            $o(e, [
              {
                key: "button_CLICK",
                value: function (e) {
                  var t = a()(e.currentTarget).data(
                    "app-wearable-button-index"
                  );
                  a()(window).trigger(Zo.EVENT.OPEN, [{ index: t }]);
                },
              },
              {
                key: "reset",
                value: function () {
                  if (
                    this.props.shouldRestartState &&
                    !Je.getInApp("wearable-details")
                  ) {
                    this.refs.content.scrollTop(0),
                      o.a.killTweensOf([
                        this.refs.foreground,
                        this.refs.cover,
                        this.refs.overlay,
                      ]),
                      this.state.backgroundCounter++,
                      o.a.set(this.refs.foregroundItem, { display: "none" });
                    var e = this.refs.foregroundItem.eq(
                        this.state.backgroundCounter %
                          this.refs.foregroundItem.length
                      ),
                      t = e.css("background-image");
                    o.a.set(this.refs.header, { backgroundImage: t }),
                      o.a.set(e, { display: "block" });
                  }
                },
              },
              {
                key: "app_INIT",
                value: function (e, t) {
                  "wearable" == t &&
                    (o.a.killTweensOf([
                      this.refs.foreground,
                      this.refs.cover,
                      this.refs.overlay,
                    ]),
                    o.a.fromTo(
                      this.refs.foreground,
                      { display: "block", y: "0%" },
                      {
                        y: "-100%",
                        duration: 1,
                        delay: this.props.delayToStart,
                        ease: "power3.inOut",
                      }
                    ),
                    o.a.fromTo(
                      this.refs.cover,
                      { opacity: 1 },
                      {
                        opacity: 0,
                        duration: 0.5,
                        delay: this.props.delayToStart + 0.5,
                        ease: "power3.out",
                      }
                    ),
                    o.a.fromTo(
                      this.refs.overlay,
                      { y: "75%" },
                      {
                        y: "0%",
                        opacity: 1,
                        duration: 1,
                        delay: this.props.delayToStart,
                        ease: "power3.inOut",
                        onComplete: this.onAppInit.bind(this),
                      }
                    ));
                },
              },
              {
                key: "onAppInit",
                value: function () {
                  o.a.set(this.refs.foreground, { display: "none" });
                },
              },
              {
                key: "app_DISPOSE",
                value: function (e, t) {
                  "wearable" == t && this.reset();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.props = { shouldRestartState: !0, delayToStart: 1 }),
                    (this.state = { backgroundCounter: 0 }),
                    (this.refs = {
                      content: this.element.find('*[data-ref="app-content"]'),
                      header: this.element.find(
                        '*[data-ref="app-wearble-header"]'
                      ),
                      buttons: this.element.find(
                        '*[data-ref="app-wearable-button"]'
                      ),
                      cover: this.element.find(
                        '*[data-ref="app-wearable-cover"]'
                      ),
                      overlay: this.element.find(
                        '*[data-ref="app-wearable-overlay"]'
                      ),
                      foreground: this.element.find(
                        '*[data-ref="app-wearable-foreground"]'
                      ),
                      foregroundItem: this.element.find(
                        '*[data-ref="app-wearable-foreground-item"]'
                      ),
                    }),
                    o.a.set(this.refs.foregroundItem, { display: "none" }),
                    o.a.set(this.refs.foregroundItem.eq(0), {
                      display: "block",
                    }),
                    this.refs.buttons.on("click", this.button_CLICK.bind(this)),
                    a()(window).on(Je.EVENT.INIT, this.app_INIT.bind(this)),
                    a()(window).on(
                      Je.EVENT.DISPOSE,
                      this.app_DISPOSE.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        ts = (function () {
          function e(t, n) {
            Jo(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            $o(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppWearable.EVENT.OPEN",
                    CLOSE: "CAppWearable.EVENT.CLOSE",
                  };
                },
              },
            ]),
            $o(e, [
              {
                key: "render",
                value: function (e, t) {
                  new es(e, t);
                },
              },
            ]),
            e
          );
        })();
      function ns(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function is(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function as(e, t, n) {
        return t && is(e.prototype, t), n && is(e, n), e;
      }
      var os = (function () {
          function e(t, n) {
            ns(this, e), this.render(t, n);
          }
          return (
            as(e, [
              {
                key: "reset",
                value: function () {
                  this.props.shouldRestartState &&
                    (o.a.killTweensOf(this.refs.splash),
                    o.a.set(this.refs.splash, {
                      display: "block",
                      pointerEvents: "auto",
                    }),
                    o.a.killTweensOf([
                      this.animation,
                      this.refs.image.arrow,
                      this.refs.image.iconLeft,
                      this.refs.image.iconRight,
                    ]),
                    o.a.set(this.refs.image.iconLeft, { opacity: 1 }),
                    o.a.set(this.refs.image.iconRight, { opacity: 0 }));
                },
              },
              {
                key: "animate",
                value: function () {
                  for (
                    var e = D.shuffle(this.refs.image.iconLeft.toArray()),
                      t = 0;
                    t < e.length;
                    t++
                  ) {
                    var n = e[t],
                      i = this.refs.image.iconRight.eq(
                        parseInt(n.dataset.index)
                      ),
                      a = 1 + t / 2;
                    o.a.killTweensOf([n, i]),
                      o.a.fromTo(
                        n,
                        { opacity: 1 },
                        { opacity: 0, ease: "power3.out", delay: a }
                      ),
                      o.a.fromTo(
                        i,
                        { opacity: 0, scale: 0.3 },
                        { opacity: 1, scale: 1, ease: "back.out", delay: a }
                      );
                  }
                  o.a.fromTo(
                    this.animation,
                    { value: 0 },
                    {
                      value: 1,
                      duration: 7,
                      onComplete: this.animate.bind(this),
                    }
                  );
                },
              },
              {
                key: "app_INIT",
                value: function (e, t) {
                  "smart-switch" == t &&
                    (o.a.fromTo(
                      this.refs.image.arrow,
                      { opacity: 0 },
                      {
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.inOut",
                        repeat: -1,
                        stagger: 0.1,
                      }
                    ),
                    this.animate(),
                    this.props.useSplashScreen
                      ? o.a.fromTo(
                          this.refs.splash,
                          { opacity: 1 },
                          {
                            opacity: 0,
                            duration: 0.6,
                            ease: "power3.out",
                            delay: 1,
                            onComplete: this.onApp_INIT.bind(this),
                          }
                        )
                      : o.a.set(this.refs.splash, {
                          display: "none",
                          pointerEvents: "none",
                        }));
                },
              },
              {
                key: "onApp_INIT",
                value: function () {
                  o.a.set(this.refs.splash, {
                    display: "none",
                    pointerEvents: "none",
                  });
                },
              },
              {
                key: "app_DISPOSE",
                value: function (e, t) {
                  "smart-switch" == t && this.reset();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.animation = { value: 0 }),
                    (this.props = {
                      useSplashScreen: !1,
                      shouldRestartState: !0,
                    }),
                    (this.refs = {
                      splash: this.element.find(
                        '*[data-ref="app-smart-switch-splash"]'
                      ),
                      image: {
                        arrow: this.element.find(
                          '*[data-ref="app-smart-switch-image-arrow"]'
                        ),
                        iconLeft: this.element.find(
                          '*[data-ref="app-smart-switch-image-icon-left"]'
                        ),
                        iconRight: this.element.find(
                          '*[data-ref="app-smart-switch-image-icon-right"]'
                        ),
                      },
                    }),
                    o.a.set(this.refs.image.iconRight, { opacity: 0 }),
                    a()(window).on(Je.EVENT.INIT, this.app_INIT.bind(this)),
                    a()(window).on(
                      Je.EVENT.DISPOSE,
                      this.app_DISPOSE.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        ss = (function () {
          function e(t, n) {
            ns(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            as(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppSmartSwitch.EVENT.OPEN",
                    CLOSE: "CAppSmartSwitch.EVENT.CLOSE",
                  };
                },
              },
            ]),
            as(e, [
              {
                key: "render",
                value: function (e, t) {
                  new os(e, t);
                },
              },
            ]),
            e
          );
        })();
      function rs(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ls(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function cs(e, t, n) {
        return t && ls(e.prototype, t), n && ls(e, n), e;
      }
      var us = (function () {
          function e(t, n) {
            rs(this, e), this.render(t, n);
          }
          return (
            cs(e, [
              { key: "getWeekday", value: function (e) {} },
              {
                key: "update",
                value: function () {
                  var e = new Date(),
                    t = e.getDate(),
                    n = k.toWeekdayName(e.getDay()),
                    i = k.toMonthName(e.getMonth()),
                    a = ""
                      .concat(n.substr(0, 3), ", ")
                      .concat(t, " ")
                      .concat(i.substr(0, 3));
                  a != this.time &&
                    ((this.time = a), this.element.html(this.time));
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.time = ""),
                    (this.interval = setInterval(this.update.bind(this), 100));
                },
              },
            ]),
            e
          );
        })(),
        hs = (function () {
          function e(t, n) {
            rs(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            cs(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            cs(e, [
              {
                key: "render",
                value: function (e, t) {
                  new us(e, t);
                },
              },
            ]),
            e
          );
        })();
      function ds(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function fs(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function ps(e, t, n) {
        return t && fs(e.prototype, t), n && fs(e, n), e;
      }
      var ms = (function () {
          function e(t, n) {
            ds(this, e), this.render(t, n);
          }
          return (
            ps(e, [
              {
                key: "on_CLICK",
                value: function (e) {
                  a()(window).trigger(At.EVENT.NAVIGATE_TO_APP, [
                    this.data.name,
                  ]);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.data = {
                      name: this.element.data("app-link-switch-name"),
                    }),
                    a()(this.element).on("click", this.on_CLICK.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        ys = (function () {
          function e(t, n) {
            ds(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            ps(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { START: "CAppLinkSwitch.EVENT.START" };
                },
              },
            ]),
            ps(e, [
              {
                key: "render",
                value: function (e, t) {
                  new ms(e, t);
                },
              },
            ]),
            e
          );
        })();
      function gs(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Es(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function bs(e, t, n) {
        return t && Es(e.prototype, t), n && Es(e, n), e;
      }
      var ws = (function () {
          function e(t, n) {
            gs(this, e), this.render(t, n);
          }
          return (
            bs(e, [
              {
                key: "on_CLICK",
                value: function (e) {
                  a()(window).trigger(At.EVENT.NAVIGATE_TO_APP, [
                    this.data.name,
                    "news",
                  ]);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.data = {
                      name: this.element.data("app-link-news-name"),
                    }),
                    a()(this.element).on("click", this.on_CLICK.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        vs = (function () {
          function e(t, n) {
            gs(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            bs(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { START: "CAppLinkNews.EVENT.START" };
                },
              },
            ]),
            bs(e, [
              {
                key: "render",
                value: function (e, t) {
                  new ws(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Ts(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function ks(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Cs(e, t, n) {
        return t && ks(e.prototype, t), n && ks(e, n), e;
      }
      var Os = (function () {
          function e(t, n) {
            Ts(this, e), this.render(t, n);
          }
          return (
            Cs(e, [
              {
                key: "open",
                value: function (e, t) {
                  Je.addInApp("voucher-details");
                  var n = t.index;
                  (this.state.currentItem = this.refs.items.eq(n)),
                    o.a.killTweensOf([
                      this.refs.wrapper,
                      this.state.currentItem,
                      this.element,
                    ]),
                    o.a.fromTo(
                      this.state.currentItem,
                      { display: "flex", y: 100 },
                      { y: 0, duration: 0.4, ease: "power3.out" }
                    ),
                    o.a.fromTo(
                      this.element,
                      { display: "block", pointerEvents: "auto", opacity: 0 },
                      {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power3.out",
                        onComplete: this.onOpen.bind(this),
                      }
                    );
                },
              },
              { key: "onOpen", value: function () {} },
              {
                key: "close",
                value: function () {
                  Je.getInApp("voucher-details") &&
                    (Je.removeInApp("voucher-details"),
                    o.a.killTweensOf([
                      this.refs.wrapper,
                      this.state.currentItem,
                      this.element,
                    ]),
                    o.a.to(this.state.currentItem, {
                      y: 100,
                      duration: 0.4,
                      ease: "power3.inOut",
                    }),
                    o.a.to(this.element, {
                      opacity: 0,
                      duration: 0.4,
                      ease: "power3.inOut",
                      onComplete: this.onClose.bind(this),
                    }));
                },
              },
              {
                key: "onClose",
                value: function () {
                  o.a.set(this.refs.items, { display: "none" }),
                    o.a.set(this.element, {
                      display: "none",
                      pointerEvents: "none",
                    });
                },
              },
              { key: "reset", value: function () {} },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.refs = {
                      items: this.element.find(
                        '*[data-ref="app-voucher-details-item"]'
                      ),
                    }),
                    (this.state = { currentItem: null }),
                    this.reset(),
                    a()(window).on(Ps.EVENT.OPEN, this.open.bind(this)),
                    a()(window).on(Ps.EVENT.CLOSE, this.close.bind(this)),
                    o.a.set(this.element, {
                      display: "none",
                      pointerEvents: "none",
                    }),
                    o.a.set(this.refs.items, { display: "none" }),
                    a()(window).on(ue.EVENT.BACK, this.close.bind(this)),
                    a()(window).on(ue.EVENT.HOME, this.close.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Ps = (function () {
          function e(t, n) {
            Ts(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Cs(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppVoucherDetails.EVENT.OPEN",
                    CLOSE: "CAppVoucherDetails.EVENT.CLOSE",
                    RESET: "CAppVoucherDetails.EVENT.RESET",
                  };
                },
              },
            ]),
            Cs(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Os(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Ns = Ps;
      function _s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ss(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function As(e, t, n) {
        return t && Ss(e.prototype, t), n && Ss(e, n), e;
      }
      var Is = (function () {
          function e(t, n) {
            _s(this, e), this.render(t, n);
          }
          return (
            As(e, [
              {
                key: "on_CLICK",
                value: function (e) {
                  a()(window).trigger(Ns.EVENT.OPEN, [
                    { index: this.data.index },
                  ]);
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.data = {
                      index: this.element.data("app-link-voucher-index"),
                    }),
                    a()(this.element).on("click", this.on_CLICK.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Vs = (function () {
          function e(t, n) {
            _s(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            As(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { START: "CAppLinkVoucher.EVENT.START" };
                },
              },
            ]),
            As(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Is(e, t);
                },
              },
            ]),
            e
          );
        })();
      function xs(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ls(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Ds(e, t, n) {
        return t && Ls(e.prototype, t), n && Ls(e, n), e;
      }
      var Rs = (function () {
          function e(t, n) {
            xs(this, e), this.render(t, n);
          }
          return (
            Ds(e, [
              {
                key: "open",
                value: function () {
                  (this.onTrasition = !0),
                    (this.isOpen = !0),
                    o.a.killTweensOf([
                      this.refs.container,
                      this.refs.background,
                      this.refs.buttonIcon,
                      this.refs.title,
                      this.refs.row,
                    ]),
                    o.a.to(this.refs.background, {
                      opacity: 1,
                      duration: 0.6,
                      ease: "power3.out",
                    }),
                    o.a.set(this.refs.buttonIcon, { opacity: 1 }),
                    o.a.set(this.refs.title, { opacity: 1 }),
                    o.a.set(this.refs.row, { y: "0%" }),
                    o.a.to(this.refs.container, {
                      y: this.finalY,
                      duration: 0.6,
                      ease: "power3.out",
                      onComplete: this.onTransition_COMPLETE.bind(this),
                    });
                },
              },
              {
                key: "close",
                value: function () {
                  (this.onTrasition = !0),
                    (this.isOpen = !1),
                    o.a.killTweensOf([
                      this.refs.container,
                      this.refs.background,
                      this.refs.buttonIcon,
                      this.refs.title,
                      this.refs.row,
                    ]),
                    o.a.to(this.refs.background, {
                      opacity: 0,
                      duration: 0.6,
                      ease: "power3.out",
                    }),
                    o.a.set(this.refs.buttonIcon, { opacity: 0 }),
                    o.a.set(this.refs.title, { opacity: 0 }),
                    o.a.set(this.refs.row, { y: "-30%" }),
                    o.a.to(this.refs.container, {
                      y: this.initialY,
                      duration: 0.6,
                      ease: "power3.out",
                      onComplete: this.onTransition_COMPLETE.bind(this),
                    });
                },
              },
              {
                key: "onTransition_COMPLETE",
                value: function () {
                  this.onTrasition = !1;
                },
              },
              {
                key: "update",
                value: function () {
                  this.onTrasition ||
                    (this.isOpen ? this.close() : this.open());
                },
              },
              {
                key: "element_MOUSE_DOWN",
                value: function (e) {
                  this.isMoving = 0;
                },
              },
              {
                key: "element_MOUSE_MOVE",
                value: function (e) {
                  this.isMoving++;
                },
              },
              {
                key: "element_MOUSE_END",
                value: function (e) {
                  this.isMoving > 1 && ((this.isMoving = 0), this.update());
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.onTrasition = !1),
                    (this.isOpen = !1),
                    (this.isMoving = 0),
                    (this.refs = {
                      container: this.element.find(
                        '*[data-ref="app-game-launcher-panel-container"]'
                      ),
                      background: this.element.find(
                        '*[data-ref="app-game-launcher-panel-background"]'
                      ),
                      buttonIcon: this.element.find(
                        '*[data-ref="app-game-launcher-panel-button-icon"]'
                      ),
                      row: this.element.find(
                        '*[data-ref="app-game-launcher-panel-row"]'
                      ),
                      title: this.element.find(
                        '*[data-ref="app-game-launcher-panel-title"]'
                      ),
                    }),
                    (this.initialY = window.innerHeight - 140),
                    (this.finalY = 100),
                    o.a.set(this.refs.background, { opacity: 0 }),
                    o.a.set(this.refs.buttonIcon, { opacity: 0 }),
                    o.a.set(this.refs.title, { opacity: 0 }),
                    o.a.set(this.refs.row, { y: "-30%" }),
                    o.a.set(this.refs.container, { y: this.initialY }),
                    this.refs.container.on(
                      "touchstart",
                      this.element_MOUSE_DOWN.bind(this)
                    ),
                    this.element.on(
                      "touchend",
                      this.element_MOUSE_END.bind(this)
                    ),
                    this.element.on(
                      "touchmove",
                      this.element_MOUSE_MOVE.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        Bs = (function () {
          function e(t, n) {
            xs(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Ds(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppGameLauncherPanel.EVENT.OPEN",
                    CLOSE: "CAppGameLauncherPanel.EVENT.CLOSE",
                  };
                },
              },
            ]),
            Ds(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Rs(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Ms(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Us(e, t, n) {
        return t && Ms(e.prototype, t), n && Ms(e, n), e;
      }
      var Hs = (function () {
        function e(t) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            this.render(t),
            this
          );
        }
        return (
          Us(
            e,
            [
              {
                key: "start",
                value: function () {
                  o.a.killTweensOf(this.animation),
                    o.a.fromTo(
                      this.animation,
                      { value: this.data.from },
                      {
                        value: this.data.to,
                        duration: 2,
                        ease: "power3.out",
                        delay: 1.2,
                        onUpdate: this.update.bind(this),
                      }
                    );
                },
              },
              {
                key: "update",
                value: function () {
                  var e = this.animation.value;
                  switch (this.data.type) {
                    case "int":
                      e = Math.round(e);
                      break;
                    case "float":
                      e = parseFloat(e).toFixed(1);
                  }
                  this.element.html(e);
                },
              },
              {
                key: "reset",
                value: function () {
                  o.a.killTweensOf(this.animation),
                    (this.animation.value = this.data.from);
                },
              },
            ],
            [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]
          ),
          Us(e, [
            {
              key: "render",
              value: function (e, t) {
                (this.element = e),
                  (this.data = {
                    from: this.element.data("text-interval-from"),
                    to: this.element.data("text-interval-to"),
                    type: this.element.data("text-interval-type"),
                  }),
                  (this.animation = { value: this.data.from });
              },
            },
          ]),
          e
        );
      })();
      function Ks(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function qs(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function js(e, t, n) {
        return t && qs(e.prototype, t), n && qs(e, n), e;
      }
      var Fs = (function () {
          function e(t, n) {
            Ks(this, e), this.render(t, n);
          }
          return (
            js(e, [
              {
                key: "reset",
                value: function () {
                  if (this.props.shouldRestartState) {
                    for (var e = 0; e < this.textsIntervals.length; e++) {
                      this.textsIntervals[e].reset();
                    }
                    o.a.killTweensOf([this.refs.foreground]),
                      o.a.set(this.refs.foreground, { display: "block" });
                  }
                },
              },
              {
                key: "app_INIT",
                value: function (e, t) {
                  if ("health" == t) {
                    for (var n = 0; n < this.textsIntervals.length; n++) {
                      this.textsIntervals[n].start();
                    }
                    var i = !0;
                    this.props.shouldRestartState ||
                      (this.props.restartCounter > 0 && (i = !1),
                      this.props.restartCounter++),
                      i
                        ? (o.a.killTweensOf([this.refs.foreground]),
                          o.a.fromTo(
                            this.refs.foreground,
                            { display: "block", opacity: 1 },
                            {
                              opacity: 0,
                              duration: 0.6,
                              delay: this.props.delayToStart,
                              ease: "power3.inOut",
                              onComplete: this.onAppInit.bind(this),
                            }
                          ))
                        : this.onAppInit();
                  }
                },
              },
              {
                key: "onAppInit",
                value: function () {
                  o.a.set(this.refs.foreground, { display: "none" });
                },
              },
              {
                key: "app_DISPOSE",
                value: function (e, t) {
                  "health" == t && this.reset();
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.topPositionWhenSwitchCategory = 170),
                    (this.props = {
                      shouldRestartState: !0,
                      restartCounter: 0,
                      delayToStart: 0.6,
                    }),
                    (this.refs = {
                      foreground: this.element.find(
                        '*[data-ref="app-health-foreground"]'
                      ),
                      textsIntervals: this.element.find(
                        '*[data-component="c-text-interval"]'
                      ),
                    }),
                    (this.textsIntervals = []);
                  for (var n = 0; n < this.refs.textsIntervals.length; n++)
                    this.textsIntervals.push(
                      new Hs(this.refs.textsIntervals.eq(n))
                    );
                  a()(window).on(Je.EVENT.INIT, this.app_INIT.bind(this)),
                    a()(window).on(
                      Je.EVENT.DISPOSE,
                      this.app_DISPOSE.bind(this)
                    );
                },
              },
            ]),
            e
          );
        })(),
        Ys = (function () {
          function e(t, n) {
            Ks(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            js(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {
                    OPEN: "CAppHealth.EVENT.OPEN",
                    CLOSE: "CAppHealth.EVENT.CLOSE",
                  };
                },
              },
            ]),
            js(e, [
              {
                key: "render",
                value: function (e, t) {
                  new Fs(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Ws(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Gs(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function Xs(e, t, n) {
        return t && Gs(e.prototype, t), n && Gs(e, n), e;
      }
      var zs = (function () {
          function e(t, n) {
            Ws(this, e), this.render(t, n);
          }
          return (
            Xs(e, [
              {
                key: "on_CLICK",
                value: function (e) {
                  y.instance.trackPage(
                    this.data.title,
                    "".concat(this.data.path).concat(this.data.action)
                  );
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.data = {
                      title: this.element.data("track-title"),
                      path: this.element.data("track-path"),
                      action: k.slugfy(this.element.data("track-action")),
                    }),
                    a()(this.element).on("click", this.on_CLICK.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        Zs = (function () {
          function e(t, n) {
            Ws(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            Xs(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return { START: "CTrackerLink.EVENT.START" };
                },
              },
            ]),
            Xs(e, [
              {
                key: "render",
                value: function (e, t) {
                  new zs(e, t);
                },
              },
            ]),
            e
          );
        })();
      function Js(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Qs(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function $s(e, t, n) {
        return t && Qs(e.prototype, t), n && Qs(e, n), e;
      }
      var er = (function () {
          function e(t, n) {
            Js(this, e), this.render(t, n);
          }
          return (
            $s(e, [
              {
                key: "blink",
                value: function () {
                  if (!window.endOfTutorial) {
                    o.a.fromTo(
                      this.refs.eyeShape,
                      { scaleX: 1 },
                      {
                        scaleX: 0.5,
                        duration: 0.1,
                        delay: 0,
                        ease: "power2.out",
                      }
                    ),
                      o.a.fromTo(
                        this.refs.eyeShape,
                        { opacity: 1 },
                        {
                          duration: 0.025,
                          opacity: 0,
                          delay: 0.025,
                          ease: "power2.out",
                        }
                      ),
                      o.a.fromTo(
                        this.refs.eyeBlink,
                        { opacity: 0 },
                        {
                          duration: 0.025,
                          opacity: 1,
                          delay: 0.025,
                          ease: "power2.out",
                        }
                      );
                    o.a.to(this.refs.eyeBlink, {
                      duration: 0.05,
                      opacity: 0,
                      delay: 0.05,
                      ease: "power2.out",
                    }),
                      o.a.to(this.refs.eyeShape, {
                        scaleX: 1,
                        duration: 0.1,
                        delay: 0.05,
                        ease: "power2.out",
                      }),
                      o.a.to(this.refs.eyeShape, {
                        duration: 0.05,
                        opacity: 1,
                        delay: 0.1,
                        ease: "power2.out",
                      }),
                      this.blinkCount++,
                      this.blinkCount % 2 == 0
                        ? o.a.delayedCall(5, this.blink.bind(this))
                        : this.doubleBlink
                        ? ((this.doubleBlink = !1),
                          o.a.delayedCall(0.15, this.blink.bind(this)))
                        : o.a.delayedCall(5, this.blink.bind(this));
                  }
                },
              },
              {
                key: "look",
                value: function () {
                  if (!window.endOfTutorial) {
                    var e = o.a.timeline({
                      paused: !0,
                      delay: 0,
                      onComplete: this.look.bind(this),
                    });
                    e.fromTo(
                      this.refs.leftEye,
                      { y: "0%" },
                      {
                        y: "50%",
                        x: "-25%",
                        scale: 1,
                        duration: 1.6,
                        ease: "power2.inOut",
                      },
                      3
                    ),
                      e.fromTo(
                        this.refs.rightEye,
                        { y: "0%" },
                        {
                          y: "25%",
                          x: "-25%",
                          scale: 1,
                          duration: 1.6,
                          ease: "power2.inOut",
                        },
                        3
                      ),
                      e.to(
                        this.refs.leftEye,
                        {
                          y: "50%",
                          x: "15%",
                          duration: 3,
                          ease: "power2.inOut",
                        },
                        4.6
                      ),
                      e.to(
                        this.refs.rightEye,
                        {
                          y: "25%",
                          x: "15%",
                          duration: 3,
                          ease: "power2.inOut",
                        },
                        4.6
                      ),
                      e.to(
                        this.refs.leftEye,
                        {
                          y: "0%",
                          x: "0%",
                          scale: 1,
                          duration: 1.6,
                          ease: "power2.inOut",
                        },
                        8.6
                      ),
                      e.to(
                        this.refs.rightEye,
                        {
                          y: "0%",
                          x: "0%",
                          scale: 1,
                          duration: 1.6,
                          ease: "power2.inOut",
                        },
                        8.6
                      ),
                      e.to(
                        this.refs.leftEye,
                        {
                          y: "0%",
                          x: "0%",
                          scale: 1,
                          duration: 1.6,
                          ease: "power2.inOut",
                        },
                        10
                      ),
                      e.to(
                        this.refs.rightEye,
                        {
                          y: "0%",
                          x: "0%",
                          scale: 1,
                          duration: 1.6,
                          ease: "power2.inOut",
                        },
                        10
                      ),
                      e.play();
                  }
                },
              },
              {
                key: "render",
                value: function (e, t) {
                  (this.element = a()(e)),
                    (this.blinkCount = 0),
                    (this.doubleBlink = !0),
                    (this.refs = {
                      shape: this.element.find(
                        '*[data-ref="app-robot-animation-shape"]'
                      ),
                      leftEye: this.element.find(
                        '*[data-ref="app-robot-animation-left-eye"]'
                      ),
                      rightEye: this.element.find(
                        '*[data-ref="app-robot-animation-right-eye"]'
                      ),
                      eyeShape: this.element.find(
                        '*[data-ref="app-robot-animation-eye-shape"]'
                      ),
                      eyeBlink: this.element.find(
                        '*[data-ref="app-robot-animation-eye-blink"]'
                      ),
                    });
                  var n = o.a.timeline({ paused: !0, delay: 0 });
                  n.fromTo(
                    this.refs.shape,
                    { x: "100%", scale: 0.4 },
                    {
                      x: "0%",
                      scale: 1,
                      duration: 1.6,
                      delay: 1,
                      ease: "power2.out",
                    }
                  ),
                    n.play(),
                    o.a.delayedCall(5, this.blink.bind(this)),
                    o.a.delayedCall(2, this.look.bind(this));
                },
              },
            ]),
            e
          );
        })(),
        tr = (function () {
          function e(t, n) {
            Js(this, e), (this.all = n.querySelectorAll(t));
            for (var i = 0; i < this.all.length; i++)
              this.render(this.all[i], i);
          }
          return (
            $s(e, null, [
              {
                key: "EVENT",
                get: function () {
                  return {};
                },
              },
            ]),
            $s(e, [
              {
                key: "render",
                value: function (e, t) {
                  new er(e, t);
                },
              },
            ]),
            e
          );
        })();
      (window.clickable = !0),
        (window.moveCount = 0),
        (window.interactive = !1);
      var nr = null;
      function ir(e) {
        window.clickable && window.moveCount > 10 && (window.clickable = !1),
          window.moveCount++;
      }
      function ar(e) {
        (window.clickable = !0),
          (window.moveCount = 0),
          window.addEventListener("touchend", or, { passive: !1 }),
          window.addEventListener("touchmove", ir, { passive: !1 });
      }
      function or(e) {
        clearTimeout(nr),
          (nr = setTimeout(sr, 500)),
          window.removeEventListener("touchend", or),
          window.removeEventListener("touchmove", ir);
      }
      function sr() {
        (window.clickable = !0), (window.moveCount = 0);
      }
      function rr() {
        a()(window).trigger(F.EVENT.OPEN, [
          F.TYPE.INCOMING,
          { name: "Sam", phone: "0800 726 786", country: "New Zealand" },
        ]);
      }
      new r.a();
      document.addEventListener("DOMContentLoaded", function () {
        o.a.registerPlugin(c.a),
          window.addEventListener("touchstart", ar, { passive: !1 }),
          window.addEventListener("mousedown", ar, { passive: !1 }),
          x.instance,
          Ba.instance,
          new v('*[data-component="app"]', document),
          new it('*[data-component="slider"]', document),
          new jn('*[data-component="audio"]', document),
          new Tn('*[data-component="clock"]', document),
          new hs('*[data-component="daytime"]', document),
          new Nn('*[data-component="cursor"]', document),
          new ka('*[data-component="clipboard"]', document),
          new ye('*[data-component="dashboard"]', document),
          new ne('*[data-component="dashboard-header"]', document),
          new ue('*[data-component="dashboard-footer"]', document),
          new Z('*[data-component="dashboard-content"]', document),
          new Te('*[data-component="dashboard-overlay"]', document),
          new tn('*[data-component="dashboard-news"]', document),
          new Zt('*[data-component="dashboard-notifications"]', document),
          new Ye('*[data-component="dashboard-search"]', document),
          new Yt('*[data-component="dashboard-notification-button"]', document),
          new rn('*[data-component="news-filter"]', document),
          new Li('*[data-component="giphy"]', document),
          new gn('*[data-component="weather"]', document),
          new Je('*[data-component="app-view"]', document),
          new Fo('*[data-component="app-mail"]', document),
          new ts('*[data-component="app-wearable"]', document),
          new Zo('*[data-component="app-wearable-details"]', document),
          new Ns('*[data-component="app-voucher-details"]', document),
          new Vs('*[data-component="app-link-voucher"]', document),
          new ya('*[data-component="app-kids"]', document),
          new ha('*[data-component="app-kids-details"]', document),
          new ss('*[data-component="app-smart-switch"]', document),
          new Ys('*[data-component="app-health"]', document),
          new bt('*[data-component="app-messages"]', document),
          new Ct(
            '*[data-component="app-messages-notification-label"]',
            document
          ),
          new Dt('*[data-component="app-messages-notification"]', document),
          new pt('*[data-component="app-chat"]', document),
          new Vn('*[data-component="app-call"]', document),
          new F('*[data-component="app-call-inoutgoing"]', document),
          new I('*[data-component="button-call"]', document),
          new gi('*[data-component="app-camera"]', document),
          new Si('*[data-component="camera-settings"]', document),
          new ui('*[data-component="camera-zoom"]', document),
          new ai('*[data-component="camera-scene"]', document),
          new Qn('*[data-component="camera-modes"]', document),
          new ki('*[data-component="camera-filters"]', document),
          new oa('*[data-component="app-settings"]', document),
          new ea('*[data-component="app-settings-details"]', document),
          new Xa('*[data-component="app-galaxy-store"]', document),
          new ro('*[data-component="app-gallery"]', document),
          new no('*[data-component="gallery-photo"]', document),
          new bo('*[data-component="app-game-launcher"]', document),
          new Bs('*[data-component="app-game-launcher-panel"]', document),
          new So('*[data-component="app-galaxy-themes"]', document),
          new Uo('*[data-component="app-theme-button"]', document),
          new Lo('*[data-component="app-themes-changes"]', document),
          new ja('*[data-component="app-theme"]', document),
          new La('*[data-component="app-theme-loader"]', document),
          new lt('*[data-component="app-header"]', document),
          new _a('*[data-component="app-header-slider"]', document),
          new _e('*[data-component="app-link"]', document),
          new ys('*[data-component="app-link-switch"]', document),
          new vs('*[data-component="app-link-news"]', document),
          new Bn('*[data-component="app-trigger"]', document),
          new At('*[data-component="app-locker"]', document),
          new Le('*[data-component="app-alert"]', document),
          new Ue('*[data-component="app-alert-button"]', document),
          new po('*[data-component="app-video"]', document),
          new Co('*[data-component="app-video-button"]', document),
          new Ht('*[data-component="button-background"]', document),
          new Zs('*[data-tracker="c-tracker"]', document),
          new Hi('*[data-loader="image"]', document),
          new Yi('*[data-component="app-tutorial"]', document),
          new tr('*[data-component="app-robot-animation"]', document),
          (window.call = rr);
      });
    },
  },
  [[0, 1, 2]],
]);
