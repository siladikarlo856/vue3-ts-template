/* import-map-overrides@2.4.0 */
!(function () {
  "use strict";
  function e(t) {
    return (e =
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
          })(t);
  }
  function t(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function r(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e;
  }
  function o(e, t, n) {
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
  function i(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && a(e, t);
  }
  function l(e) {
    return (l = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function a(e, t) {
    return (a =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function u() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function s(e, t, n) {
    return (s = u()
      ? Reflect.construct
      : function (e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var o = new (Function.bind.apply(e, r))();
          return n && a(o, n.prototype), o;
        }).apply(null, arguments);
  }
  function d(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (d = function (e) {
      if (
        null === e ||
        ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
      )
        return e;
      var n;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, r);
      }
      function r() {
        return s(e, arguments, l(this).constructor);
      }
      return (
        (r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        a(r, e)
      );
    })(e);
  }
  function p(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function c(e, t) {
    return !t || ("object" != typeof t && "function" != typeof t) ? p(e) : t;
  }
  function m(e) {
    var t = u();
    return function () {
      var n,
        r = l(e);
      if (t) {
        var o = l(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);
      return c(this, n);
    };
  }
  function f(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var l, a = e[Symbol.iterator]();
              !(r = (l = a.next()).done) &&
              (n.push(l.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        }
      })(e, t) ||
      v(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function v(e, t) {
    if (e) {
      if ("string" == typeof e) return h(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? h(e, t)
          : void 0
      );
    }
  }
  function h(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function g(t, n) {
    if (Array.isArray(t)) {
      for (var r = 0; r < t.length; r++) if (t[r] === n) return !0;
      return !1;
    }
    if ("string" == typeof t) return t.indexOf(n) >= 0;
    throw Error("Can't call includes on ".concat(e(t)));
  }
  function _(e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : window.location.href;
    e = e.replace(/[\[\]]/g, "\\$&");
    var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
      r = n.exec(t);
    return r
      ? r[2]
        ? decodeURIComponent(r[2].replace(/\+/g, " "))
        : ""
      : null;
  }
  var y,
    b = "import-map-overrides-domains",
    w = document.querySelector('meta[name="importmap-type"]'),
    x = document.querySelector('meta[name="'.concat(b, '"]')),
    k = {},
    M = w ? w.getAttribute("content") : "importmap";
  if (x) {
    var E = x.getAttribute("content");
    E ||
      console.warn("Invalid ".concat(b, " meta element - content required."));
    var O = function (e) {
      return new RegExp(
        (function (e) {
          if ("string" != typeof e) throw new TypeError("Expected a string");
          return e
            .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
            .replace(/-/g, "\\x2d");
        })(e).replace("\\*", ".+")
      ).test(window.location.hostname);
    };
    0 === E.indexOf("allowlist:")
      ? (y = !E.slice("allowlist:".length).split(",").some(O))
      : 0 === E.indexOf("denylist:")
      ? (y = E.slice("denylist:".length).split(",").some(O))
      : console.log(
          "Invalid "
            .concat(b, " meta content attribute - must start with ")
            .concat("allowlist:", " or ")
            .concat("denylist:")
        );
  } else y = !1;
  (function () {
    try {
      return localStorage.getItem("test"), !0;
    } catch (e) {
      return !1;
    }
  })() ||
    (console.warn(
      "Disabling import-map-overrides, since local storage is not readable"
    ),
    (y = !0)),
    y ||
      (function () {
        var e,
          t = !!w && w.hasAttribute("server-cookie"),
          n = !!w && w.hasAttribute("server-only");
        window.importMapOverrides = {
          addOverride: function (e, n) {
            /^\d+$/g.test(n) && (n = r.getUrlFromPort(e, n));
            var o = "import-map-override:" + e;
            return (
              localStorage.setItem(o, n),
              t && (document.cookie = "".concat(o, "=").concat(n)),
              i(),
              r.getOverrideMap()
            );
          },
          getOverrideMap: function () {
            for (
              var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = { imports: {}, scopes: {} },
                n = r.getDisabledOverrides(),
                o = function (r, o) {
                  (!e && n.indexOf(r) >= 0) || (t.imports[r] = o);
                },
                i = 0;
              i < localStorage.length;
              i++
            ) {
              var l = localStorage.key(i);
              0 === l.indexOf("import-map-override:") &&
                o(
                  l.slice("import-map-override:".length),
                  localStorage.getItem(l)
                );
            }
            var a = _(
              "imo",
              window.parent ? window.parent.location.href : window.location.href
            );
            if (a) {
              var u;
              try {
                u = JSON.parse(a);
              } catch (e) {
                throw Error(
                  "Invalid importMap query param - text content must be json"
                );
              }
              Object.keys(u.imports).forEach(function (e) {
                o(e, u.imports[e]);
              });
            }
            return t;
          },
          removeOverride: function (e) {
            var n = "import-map-override:" + e,
              o = null !== localStorage.getItem(n);
            return (
              localStorage.removeItem(n),
              t &&
                (document.cookie = "".concat(
                  n,
                  "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                )),
              r.enableOverride(e),
              i(),
              o
            );
          },
          resetOverrides: function () {
            return (
              Object.keys(r.getOverrideMap(!0).imports).forEach(function (e) {
                r.removeOverride(e);
              }),
              localStorage.removeItem("import-map-overrides-disabled"),
              localStorage.removeItem("import-map-overrides-external-maps"),
              i(),
              r.getOverrideMap()
            );
          },
          hasOverrides: function () {
            return Object.keys(r.getOverrideMap().imports).length > 0;
          },
          getUrlFromPort: function (e, t) {
            var n = e.replace(/@/g, "").replace(/\//g, "-");
            return "//localhost:".concat(t, "/").concat(n, ".js");
          },
          enableUI: function () {
            var e = document.querySelector("import-map-overrides-full");
            e ||
              ((e = document.createElement(
                "import-map-overrides-full"
              )).setAttribute("show-when-local-storage", "true"),
              document.body.appendChild(e));
            var t = e.getAttribute("show-when-local-storage");
            t && (localStorage.setItem(t, !0), e.renderWithPreact());
          },
          mergeImportMap: function (e, t) {
            var n = { imports: {}, scopes: {} };
            for (var r in e.imports) n.imports[r] = e.imports[r];
            for (var o in t.imports) n.imports[o] = t.imports[o];
            for (var i in e.scopes) n.scopes[i] = e.scopes[i];
            for (var l in t.scopes) n.scopes[l] = t.scopes[l];
            return n;
          },
          getDefaultMap: function () {
            return (
              e ||
              (e = Array.prototype.reduce.call(
                document.querySelectorAll(
                  'script[type="'.concat(
                    M,
                    '"], script[type="overridable-importmap"]'
                  )
                ),
                function (e, t) {
                  return t.hasAttribute("data-is-importmap-override")
                    ? e
                    : ((n = t.src
                        ? v(t.src)
                        : Promise.resolve(JSON.parse(t.textContent))),
                      Promise.all([e, n]).then(function (e) {
                        var t = f(e, 2),
                          n = t[0],
                          o = t[1];
                        return r.mergeImportMap(n, o);
                      }));
                  var n;
                },
                Promise.resolve({ imports: {}, scopes: {} })
              ))
            );
          },
          getCurrentPageMap: function () {
            return Promise.all([
              r.getDefaultMap(),
              r.getExternalOverrideMap(r.getCurrentPageExternalOverrides()),
            ]).then(function (e) {
              var t = f(e, 2),
                n = t[0],
                o = t[1];
              return r.mergeImportMap(r.mergeImportMap(n, o), u);
            });
          },
          getCurrentPageExternalOverrides: function () {
            var e = [];
            return (
              document
                .querySelectorAll(
                  "[".concat(
                    "data-is-importmap-override",
                    ']:not([id="import-map-overrides"])'
                  )
                )
                .forEach(function (t) {
                  e.push(t.src);
                }),
              e
            );
          },
          getNextPageMap: function () {
            return Promise.all([
              r.getDefaultMap(),
              r.getExternalOverrideMap(),
            ]).then(function (e) {
              var t = f(e, 2),
                n = t[0],
                o = t[1];
              return r.mergeImportMap(
                r.mergeImportMap(n, o),
                r.getOverrideMap()
              );
            });
          },
          disableOverride: function (e) {
            var t = r.getDisabledOverrides();
            return (
              !g(t, e) &&
              (localStorage.setItem(
                "import-map-overrides-disabled",
                JSON.stringify(t.concat(e))
              ),
              i(),
              !0)
            );
          },
          enableOverride: function (e) {
            var t = r.getDisabledOverrides(),
              n = t.indexOf(e);
            return (
              n >= 0 &&
              (t.splice(n, 1),
              localStorage.setItem(
                "import-map-overrides-disabled",
                JSON.stringify(t)
              ),
              i(),
              !0)
            );
          },
          getDisabledOverrides: function () {
            var e = localStorage.getItem("import-map-overrides-disabled");
            return e ? JSON.parse(e) : [];
          },
          isDisabled: function (e) {
            return g(r.getDisabledOverrides(), e);
          },
          getExternalOverrides: function () {
            var e = localStorage.getItem("import-map-overrides-external-maps");
            return e ? JSON.parse(e).sort() : [];
          },
          addExternalOverride: function (e) {
            e = new URL(e, document.baseURI).href;
            var t = r.getExternalOverrides();
            return (
              !g(t, e) &&
              (localStorage.setItem(
                "import-map-overrides-external-maps",
                JSON.stringify(t.concat(e))
              ),
              i(),
              !0)
            );
          },
          removeExternalOverride: function (e) {
            var t = r.getExternalOverrides();
            return (
              !!g(t, e) &&
              (localStorage.setItem(
                "import-map-overrides-external-maps",
                JSON.stringify(
                  t.filter(function (t) {
                    return t !== e;
                  })
                )
              ),
              i(),
              !0)
            );
          },
          getExternalOverrideMap: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.getExternalOverrides();
            return e.reduce(function (e, t) {
              var n = k[t] || (k[t] = v(t));
              return Promise.all([e, n]).then(function (e) {
                var t = f(e, 2),
                  n = t[0],
                  o = t[1];
                return r.mergeImportMap(n, o);
              });
            }, Promise.resolve({ imports: {}, scopes: {} }));
          },
          isExternalMapValid: function (e) {
            return (k[e] || (k[e] = v(e))).then(function () {
              return g(r.invalidExternalMaps, e);
            });
          },
          invalidExternalMaps: [],
        };
        var r = window.importMapOverrides,
          o = !0;
        try {
          CustomEvent ? new CustomEvent("a") : (o = !1);
        } catch (e) {
          o = !1;
        }
        function i() {
          l("change");
        }
        function l(e) {
          setTimeout(function () {
            var t = "import-map-overrides:".concat(e),
              n = o ? new CustomEvent(t) : document.createEvent(t);
            window.dispatchEvent(n);
          });
        }
        var a,
          u = r.getOverrideMap(),
          s = r.getExternalOverrides();
        if (!n) {
          var d = document.querySelector(
            'script[type="overridable-importmap"]'
          );
          if (!(a = d)) {
            var p = document.querySelectorAll('script[type="'.concat(M, '"]'));
            a = p ? p[p.length - 1] : null;
          }
          if (d) {
            if (d.src)
              throw Error(
                'import-map-overrides: external import maps with type="overridable-importmap" are not supported'
              );
            var c;
            try {
              c = JSON.parse(d.textContent);
            } catch (e) {
              throw Error(
                'Invalid <script type="overridable-importmap"> - text content must be json'
              );
            }
            (a = m(r.mergeImportMap(c, u), "import-map-overrides", a)), h();
          } else
            h(),
              Object.keys(u.imports).length > 0 &&
                (a = m(u, "import-map-overrides", a));
        }
        function m(e, t, n) {
          var r = document.createElement("script");
          return (
            (r.type = M),
            (r.id = t),
            r.setAttribute("data-is-importmap-override", ""),
            "string" == typeof e
              ? (r.src = e)
              : (r.textContent = JSON.stringify(e, null, 2)),
            n
              ? n.insertAdjacentElement("afterend", r)
              : document.head.appendChild(r),
            r
          );
        }
        function v(e) {
          return fetch(e).then(
            function (e) {
              return e.ok
                ? e.json().catch(function (t) {
                    return (
                      console.warn(
                        Error(
                          "External override import map contained invalid json, at url "
                            .concat(e.url, ". ")
                            .concat(t)
                        )
                      ),
                      r.invalidExternalMaps.push(e.url),
                      { imports: {}, scopes: {} }
                    );
                  })
                : (console.warn(
                    Error(
                      "Unable to download external override import map from url "
                        .concat(e.url, ". Server responded with status ")
                        .concat(e.status)
                    )
                  ),
                  r.invalidExternalMaps.push(e.url),
                  { imports: {}, scopes: {} });
            },
            function () {
              return (
                console.warn(
                  Error(
                    "Unable to download external import map at url '".concat(
                      e,
                      "'"
                    )
                  )
                ),
                r.invalidExternalMaps.push(new URL(e, document.baseURI).href),
                { imports: {}, scopes: {} }
              );
            }
          );
        }
        function h() {
          s.length > 0 &&
            s.forEach(function (e, t) {
              a = m(e, "import-map-overrides-external-".concat(t));
            });
        }
        l("init");
      })(),
    (function (e, t) {
      void 0 === t && (t = {});
      var n = t.insertAt;
      if ("undefined" != typeof document) {
        var r = document.head || document.getElementsByTagName("head")[0],
          o = document.createElement("style");
        (o.type = "text/css"),
          "top" === n && r.firstChild
            ? r.insertBefore(o, r.firstChild)
            : r.appendChild(o),
          o.styleSheet
            ? (o.styleSheet.cssText = e)
            : o.appendChild(document.createTextNode(e));
      }
    })(
      ".imo-unstyled {\n  border: none;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  cursor: pointer;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  -webkit-appearance: none;\n}\n\n.imo-unstyled::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.imo-trigger {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 10px;\n  border-radius: 5px;\n  background-color: navajowhite;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-family: sans-serif;\n  z-index: 10500;\n}\n\n.imo-popup {\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  z-index: 10000;\n  background-color: black;\n  color: white;\n  font-family: sans-serif;\n  padding: 24px;\n  overflow-y: auto;\n}\n\n.imo-popup a:visited,\n.imo-popup a {\n  color: white;\n}\n\n.imo-popup .imo-module-dialog {\n  left: calc(50% - 200px);\n}\n\n.imo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.imo-list {\n  margin-left: 16px;\n}\n\n.imo-list > *:not(:last-child) {\n  margin-bottom: 8px;\n}\n\n.imo-list-container *,\n.imo-modal-container * {\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n\n.imo-module-dialog {\n  position: fixed;\n  z-index: 30000000;\n  top: 30%;\n  max-width: 600px;\n  margin: 0 auto;\n  border: 4px solid navajowhite;\n  background-color: white;\n  padding: 1em;\n  left: 50%;\n  right: auto;\n  transform: translateX(-50%);\n}\n\n.imo-module-dialog input {\n  width: 100%;\n  font-size: 16px;\n  box-sizing: border-box;\n  padding-right: 20px;\n}\n\n.imo-module-dialog table {\n  margin-bottom: 16px;\n}\n\n.imo-module-dialog table td:first-child {\n  text-align: right;\n  padding-right: 16px;\n  word-break: keep-all;\n}\n\n.imo-module-dialog table td {\n  word-break: break-all;\n}\n\n.imo-module-dialog.imo-overridden {\n  border: 4px solid salmon;\n}\n\n.imo-table-header-actions {\n  display: flex;\n  align-items: center;\n}\n\n.imo-overrides-table {\n  border-collapse: collapse;\n  margin-top: 32px;\n}\n\n.imo-overrides-table tr td:first-child {\n  display: flex;\n  align-items: center;\n  padding-right: 32px;\n  position: relative;\n}\n\n.imo-needs-refresh {\n  position: absolute;\n  right: 8px;\n  width: 20px;\n  height: 20px;\n  /* base64 encoded 27F2 svg */\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='261' height='216' xmlns='http://www.w3.org/2000/svg' stroke='%23ffffff' stroke-linecap='square' stroke-miterlimit='10' shape-rendering='auto' stroke-opacity='1' fill='%23ffffff' stroke-dasharray='none' stroke-width='1' stroke-linejoin='miter' stroke-dashoffset='0'%3E%3Cg%3E%3Cpath fill='%23ffffff' d='m152.5625,214.0625q-27.5625,0 -49.6406,-11.8125q-22.0781,-11.8125 -34.7344,-28.4062l12.6563,-11.5313q10.6874,15.1875 31.0781,25.0313q20.3906,9.8437 40.6406,9.8437q21.375,0 44.1563,-11.5313q22.7812,-11.5312 34.3124,-34.3124q11.5313,-22.7813 11.5313,-44.1563q0,-21.375 -11.5313,-44.1563q-11.5312,-22.7812 -34.3124,-34.3124q-22.7813,-11.5313 -44.1563,-11.5313q-19.9687,0 -39.6563,9.1406q-19.6874,9.1407 -30.9374,24.1875q-11.25,15.0469 -16.7344,35.7188l42.3281,-34.7344l-54,91.6875l-54,-91.6875l47.25,38.8125q3.9375,-24.4687 17.4375,-44.5781q13.5,-20.1094 36.9844,-32.7656q23.4844,-12.6563 51.3281,-12.6563q29.25,0 54,14.0625q24.75,14.0625 38.8125,38.8125q14.0625,24.75 14.0625,54q0,29.25 -14.0625,54q-14.0625,24.75 -38.8125,38.8125q-24.75,14.0625 -54,14.0625z' /%3E%3C/g%3E%3C/svg%3E\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.imo-status {\n  height: 16px;\n  width: 16px;\n  border-radius: 8px;\n  border: 1px solid white;\n  margin-right: 8px;\n}\n\n.imo-disabled-override {\n  background-color: lightblue;\n}\n\n.imo-next-override {\n  background-color: darkred;\n}\n\n.imo-current-override {\n  background-color: salmon;\n}\n\n.imo-default-module {\n  background-color: lightgoldenrodyellow;\n}\n\n.imo-external-override {\n  background-color: orange;\n}\n\n.imo-next-default {\n  background-color: darkgoldenrod;\n}\n\n.imo-dev-lib-override {\n  background-color: lightpink;\n}\n\n.imo-overrides-table tbody tr:hover {\n  cursor: pointer;\n  background-color: #404040;\n}\n\n.imo-overrides-table td,\n.imo-overrides-table th {\n  line-height: 18px;\n  padding: 16px;\n  border: 1px solid white;\n}\n\n.imo-add-new {\n  margin-left: 16px;\n}\n\n.imo-clear-input {\n  position: absolute;\n  top: 0;\n  right: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.imo-modal-container {\n  font-family: sans-serif;\n}\n\n.imo-modal {\n  background-color: rgba(61, 70, 77, 0.6);\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 20000000;\n}\n\n.imo-list-search,\n.imo-list-container button,\n.imo-modal-container button {\n  font-size: 14px;\n  height: 27px;\n  line-height: 27px;\n}\n\n.imo-list-search {\n  line-height: 22px;\n  border: none;\n  padding: 5px;\n}\n"
    );
  var N,
    S,
    C,
    U,
    I,
    P = {},
    D = [],
    A = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function j(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function L(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function R(e, t, n) {
    var r,
      o,
      i,
      l = arguments,
      a = {};
    for (i in t)
      "key" == i ? (r = t[i]) : "ref" == i ? (o = t[i]) : (a[i] = t[i]);
    if (arguments.length > 3)
      for (n = [n], i = 3; i < arguments.length; i++) n.push(l[i]);
    if (
      (null != n && (a.children = n),
      "function" == typeof e && null != e.defaultProps)
    )
      for (i in e.defaultProps) void 0 === a[i] && (a[i] = e.defaultProps[i]);
    return q(e, a, r, o, null);
  }
  function q(e, t, n, r, o) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++N.__v : o,
    };
    return null != N.vnode && N.vnode(i), i;
  }
  function T(e) {
    return e.children;
  }
  function F(e, t) {
    (this.props = e), (this.context = t);
  }
  function W(e, t) {
    if (null == t) return e.__ ? W(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? W(e) : null;
  }
  function z(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return z(e);
    }
  }
  function J(e) {
    ((!e.__d && (e.__d = !0) && S.push(e) && !$.__r++) ||
      U !== N.debounceRendering) &&
      ((U = N.debounceRendering) || C)($);
  }
  function $() {
    for (var e; ($.__r = S.length); )
      (e = S.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      })),
        (S = []),
        e.some(function (e) {
          var t, n, r, o, i, l, a;
          e.__d &&
            ((l = (i = (t = e).__v).__e),
            (a = t.__P) &&
              ((n = []),
              ((r = j({}, i)).__v = i.__v + 1),
              (o = Y(
                a,
                i,
                r,
                t.__n,
                void 0 !== a.ownerSVGElement,
                null != i.__h ? [l] : null,
                n,
                null == l ? W(i) : l,
                i.__h
              )),
              Z(n, i),
              o != l && z(i)));
        });
  }
  function V(e, t, n, r, o, i, l, a, u, s) {
    var d,
      p,
      c,
      m,
      f,
      v,
      h,
      g = (r && r.__k) || D,
      _ = g.length;
    for (
      u == P && (u = null != l ? l[0] : _ ? W(r, 0) : null), n.__k = [], d = 0;
      d < t.length;
      d++
    )
      if (
        null !=
        (m = n.__k[d] =
          null == (m = t[d]) || "boolean" == typeof m
            ? null
            : "string" == typeof m || "number" == typeof m
            ? q(null, m, null, null, m)
            : Array.isArray(m)
            ? q(T, { children: m }, null, null, null)
            : null != m.__e || null != m.__c
            ? q(m.type, m.props, m.key, null, m.__v)
            : m)
      ) {
        if (
          ((m.__ = n),
          (m.__b = n.__b + 1),
          null === (c = g[d]) || (c && m.key == c.key && m.type === c.type))
        )
          g[d] = void 0;
        else
          for (p = 0; p < _; p++) {
            if ((c = g[p]) && m.key == c.key && m.type === c.type) {
              g[p] = void 0;
              break;
            }
            c = null;
          }
        (f = Y(e, m, (c = c || P), o, i, l, a, u, s)),
          (p = m.ref) &&
            c.ref != p &&
            (h || (h = []),
            c.ref && h.push(c.ref, null, m),
            h.push(p, m.__c || f, m)),
          null != f
            ? (null == v && (v = f),
              (u = B(e, m, c, g, l, f, u)),
              s || "option" != n.type
                ? "function" == typeof n.type && (n.__d = u)
                : (e.value = ""))
            : u && c.__e == u && u.parentNode != e && (u = W(c));
      }
    if (((n.__e = v), null != l && "function" != typeof n.type))
      for (d = l.length; d--; ) null != l[d] && L(l[d]);
    for (d = _; d--; ) null != g[d] && ne(g[d], g[d]);
    if (h) for (d = 0; d < h.length; d++) te(h[d], h[++d], h[++d]);
  }
  function B(e, t, n, r, o, i, l) {
    var a, u, s;
    if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
    else if (o == n || i != l || null == i.parentNode)
      e: if (null == l || l.parentNode !== e) e.appendChild(i), (a = null);
      else {
        for (u = l, s = 0; (u = u.nextSibling) && s < r.length; s += 2)
          if (u == i) break e;
        e.insertBefore(i, l), (a = l);
      }
    return void 0 !== a ? a : i.nextSibling;
  }
  function H(e, t, n) {
    "-" === t[0]
      ? e.setProperty(t, n)
      : (e[t] =
          null == n ? "" : "number" != typeof n || A.test(t) ? n : n + "px");
  }
  function G(e, t, n, r, o) {
    var i, l, a;
    if ((o && "className" == t && (t = "class"), "style" === t))
      if ("string" == typeof n) e.style.cssText = n;
      else {
        if (("string" == typeof r && (e.style.cssText = r = ""), r))
          for (t in r) (n && t in n) || H(e.style, t, "");
        if (n) for (t in n) (r && n[t] === r[t]) || H(e.style, t, n[t]);
      }
    else
      "o" === t[0] && "n" === t[1]
        ? ((i = t !== (t = t.replace(/Capture$/, ""))),
          (l = t.toLowerCase()) in e && (t = l),
          (t = t.slice(2)),
          e.l || (e.l = {}),
          (e.l[t + i] = n),
          (a = i ? K : X),
          n ? r || e.addEventListener(t, a, i) : e.removeEventListener(t, a, i))
        : "list" !== t &&
          "tagName" !== t &&
          "form" !== t &&
          "type" !== t &&
          "size" !== t &&
          "download" !== t &&
          "href" !== t &&
          !o &&
          t in e
        ? (e[t] = null == n ? "" : n)
        : "function" != typeof n &&
          "dangerouslySetInnerHTML" !== t &&
          (t !== (t = t.replace(/xlink:?/, ""))
            ? null == n || !1 === n
              ? e.removeAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  t.toLowerCase()
                )
              : e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  t.toLowerCase(),
                  n
                )
            : null == n || (!1 === n && !/^ar/.test(t))
            ? e.removeAttribute(t)
            : e.setAttribute(t, n));
  }
  function X(e) {
    this.l[e.type + !1](N.event ? N.event(e) : e);
  }
  function K(e) {
    this.l[e.type + !0](N.event ? N.event(e) : e);
  }
  function Q(e, t, n) {
    var r, o;
    for (r = 0; r < e.__k.length; r++)
      (o = e.__k[r]) &&
        ((o.__ = e),
        o.__e &&
          ("function" == typeof o.type && o.__k.length > 1 && Q(o, t, n),
          (t = B(n, o, o, e.__k, null, o.__e, t)),
          "function" == typeof e.type && (e.__d = t)));
  }
  function Y(e, t, n, r, o, i, l, a, u) {
    var s,
      d,
      p,
      c,
      m,
      f,
      v,
      h,
      g,
      _,
      y,
      b = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h &&
      ((u = n.__h), (a = t.__e = n.__e), (t.__h = null), (i = [a])),
      (s = N.__b) && s(t);
    try {
      e: if ("function" == typeof b) {
        if (
          ((h = t.props),
          (g = (s = b.contextType) && r[s.__c]),
          (_ = s ? (g ? g.props.value : s.__) : r),
          n.__c
            ? (v = (d = t.__c = n.__c).__ = d.__E)
            : ("prototype" in b && b.prototype.render
                ? (t.__c = d = new b(h, _))
                : ((t.__c = d = new F(h, _)),
                  (d.constructor = b),
                  (d.render = re)),
              g && g.sub(d),
              (d.props = h),
              d.state || (d.state = {}),
              (d.context = _),
              (d.__n = r),
              (p = d.__d = !0),
              (d.__h = [])),
          null == d.__s && (d.__s = d.state),
          null != b.getDerivedStateFromProps &&
            (d.__s == d.state && (d.__s = j({}, d.__s)),
            j(d.__s, b.getDerivedStateFromProps(h, d.__s))),
          (c = d.props),
          (m = d.state),
          p)
        )
          null == b.getDerivedStateFromProps &&
            null != d.componentWillMount &&
            d.componentWillMount(),
            null != d.componentDidMount && d.__h.push(d.componentDidMount);
        else {
          if (
            (null == b.getDerivedStateFromProps &&
              h !== c &&
              null != d.componentWillReceiveProps &&
              d.componentWillReceiveProps(h, _),
            (!d.__e &&
              null != d.shouldComponentUpdate &&
              !1 === d.shouldComponentUpdate(h, d.__s, _)) ||
              t.__v === n.__v)
          ) {
            (d.props = h),
              (d.state = d.__s),
              t.__v !== n.__v && (d.__d = !1),
              (d.__v = t),
              (t.__e = n.__e),
              (t.__k = n.__k),
              d.__h.length && l.push(d),
              Q(t, a, e);
            break e;
          }
          null != d.componentWillUpdate && d.componentWillUpdate(h, d.__s, _),
            null != d.componentDidUpdate &&
              d.__h.push(function () {
                d.componentDidUpdate(c, m, f);
              });
        }
        (d.context = _),
          (d.props = h),
          (d.state = d.__s),
          (s = N.__r) && s(t),
          (d.__d = !1),
          (d.__v = t),
          (d.__P = e),
          (s = d.render(d.props, d.state, d.context)),
          (d.state = d.__s),
          null != d.getChildContext && (r = j(j({}, r), d.getChildContext())),
          p ||
            null == d.getSnapshotBeforeUpdate ||
            (f = d.getSnapshotBeforeUpdate(c, m)),
          (y =
            null != s && s.type == T && null == s.key ? s.props.children : s),
          V(e, Array.isArray(y) ? y : [y], t, n, r, o, i, l, a, u),
          (d.base = t.__e),
          (t.__h = null),
          d.__h.length && l.push(d),
          v && (d.__E = d.__ = null),
          (d.__e = !1);
      } else
        null == i && t.__v === n.__v
          ? ((t.__k = n.__k), (t.__e = n.__e))
          : (t.__e = ee(n.__e, t, n, r, o, i, l, u));
      (s = N.diffed) && s(t);
    } catch (e) {
      (t.__v = null),
        (u || null != i) &&
          ((t.__e = a), (t.__h = !!u), (i[i.indexOf(a)] = null)),
        N.__e(e, t, n);
    }
    return t.__e;
  }
  function Z(e, t) {
    N.__c && N.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
              e.call(t);
            });
        } catch (e) {
          N.__e(e, t.__v);
        }
      });
  }
  function ee(e, t, n, r, o, i, l, a) {
    var u,
      s,
      d,
      p,
      c,
      m = n.props,
      f = t.props;
    if (((o = "svg" === t.type || o), null != i))
      for (u = 0; u < i.length; u++)
        if (
          null != (s = i[u]) &&
          ((null === t.type ? 3 === s.nodeType : s.localName === t.type) ||
            e == s)
        ) {
          (e = s), (i[u] = null);
          break;
        }
    if (null == e) {
      if (null === t.type) return document.createTextNode(f);
      (e = o
        ? document.createElementNS("http://www.w3.org/2000/svg", t.type)
        : document.createElement(t.type, f.is && { is: f.is })),
        (i = null),
        (a = !1);
    }
    if (null === t.type) m === f || (a && e.data === f) || (e.data = f);
    else {
      if (
        (null != i && (i = D.slice.call(e.childNodes)),
        (d = (m = n.props || P).dangerouslySetInnerHTML),
        (p = f.dangerouslySetInnerHTML),
        !a)
      ) {
        if (null != i)
          for (m = {}, c = 0; c < e.attributes.length; c++)
            m[e.attributes[c].name] = e.attributes[c].value;
        (p || d) &&
          ((p && ((d && p.__html == d.__html) || p.__html === e.innerHTML)) ||
            (e.innerHTML = (p && p.__html) || ""));
      }
      (function (e, t, n, r, o) {
        var i;
        for (i in n)
          "children" === i || "key" === i || i in t || G(e, i, null, n[i], r);
        for (i in t)
          (o && "function" != typeof t[i]) ||
            "children" === i ||
            "key" === i ||
            "value" === i ||
            "checked" === i ||
            n[i] === t[i] ||
            G(e, i, t[i], n[i], r);
      })(e, f, m, o, a),
        p
          ? (t.__k = [])
          : ((u = t.props.children),
            V(
              e,
              Array.isArray(u) ? u : [u],
              t,
              n,
              r,
              "foreignObject" !== t.type && o,
              i,
              l,
              P,
              a
            )),
        a ||
          ("value" in f &&
            void 0 !== (u = f.value) &&
            (u !== e.value || ("progress" === t.type && !u)) &&
            G(e, "value", u, m.value, !1),
          "checked" in f &&
            void 0 !== (u = f.checked) &&
            u !== e.checked &&
            G(e, "checked", u, m.checked, !1));
    }
    return e;
  }
  function te(e, t, n) {
    try {
      "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
      N.__e(e, n);
    }
  }
  function ne(e, t, n) {
    var r, o, i;
    if (
      (N.unmount && N.unmount(e),
      (r = e.ref) && ((r.current && r.current !== e.__e) || te(r, null, t)),
      n || "function" == typeof e.type || (n = null != (o = e.__e)),
      (e.__e = e.__d = void 0),
      null != (r = e.__c))
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (e) {
          N.__e(e, t);
        }
      r.base = r.__P = null;
    }
    if ((r = e.__k)) for (i = 0; i < r.length; i++) r[i] && ne(r[i], t, n);
    null != o && L(o);
  }
  function re(e, t, n) {
    return this.constructor(e, n);
  }
  function oe(e, t, n) {
    var r, o, i;
    N.__ && N.__(e, t),
      (o = (r = n === I) ? null : (n && n.__k) || t.__k),
      (e = R(T, null, [e])),
      (i = []),
      Y(
        t,
        ((r ? t : n || t).__k = e),
        o || P,
        P,
        void 0 !== t.ownerSVGElement,
        n && !r
          ? [n]
          : o
          ? null
          : t.childNodes.length
          ? D.slice.call(t.childNodes)
          : null,
        i,
        n || P,
        r
      ),
      Z(i, e);
  }
  (N = {
    __e: function (e, t) {
      for (var n, r, o, i = t.__h; (t = t.__); )
        if ((n = t.__c) && !n.__)
          try {
            if (
              ((r = n.constructor) &&
                null != r.getDerivedStateFromError &&
                (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)),
              null != n.componentDidCatch &&
                (n.componentDidCatch(e), (o = n.__d)),
              o)
            )
              return (t.__h = i), (n.__E = n);
          } catch (t) {
            e = t;
          }
      throw e;
    },
    __v: 0,
  }),
    (F.prototype.setState = function (e, t) {
      var n;
      (n =
        null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = j({}, this.state))),
        "function" == typeof e && (e = e(j({}, n), this.props)),
        e && j(n, e),
        null != e && this.__v && (t && this.__h.push(t), J(this));
    }),
    (F.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), J(this));
    }),
    (F.prototype.render = T),
    (S = []),
    (C =
      "function" == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    ($.__r = 0),
    (I = P);
  var ie = (function (e) {
      i(l, e);
      var n = m(l);
      function l() {
        var e;
        t(this, l);
        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
          i[a] = arguments[a];
        return (
          o(
            p((e = n.call.apply(n, [this].concat(i)))),
            "getInitialOverrideUrl",
            function () {
              var t = new RegExp("//localhost:([0-9]+)/").exec(
                e.props.module.overrideUrl
              );
              return t &&
                e.props.module.overrideUrl ===
                  window.importMapOverrides.getUrlFromPort(
                    e.props.module.moduleName,
                    t[1]
                  )
                ? t[1]
                : e.props.module.overrideUrl
                ? e.props.module.overrideUrl
                : "";
            }
          ),
          o(p(e), "state", {
            overrideUrl: e.getInitialOverrideUrl(),
            moduleName: "",
          }),
          o(p(e), "inputEl", null),
          o(p(e), "moduleNameEl", null),
          o(p(e), "handleInputRef", function (t) {
            e.inputEl = t;
          }),
          o(p(e), "handleModuleNameRef", function (t) {
            e.moduleNameEl = t;
          }),
          o(p(e), "dialogRef", function (t) {
            e.dialogEl = t;
          }),
          o(p(e), "handleSubmit", function (t) {
            t.preventDefault(),
              e.props.module.moduleName &&
                window.importMapOverrides.isDisabled(
                  e.props.module.moduleName
                ) &&
                window.importMapOverrides.enableOverride(
                  e.props.module.moduleName
                ),
              e.props.module.isNew
                ? e.props.addNewModule(e.state.moduleName, e.state.overrideUrl)
                : e.props.updateModuleUrl(e.state.overrideUrl);
          }),
          o(p(e), "getDerivedUrl", function () {
            var t = e.props.module.isNew
              ? e.state.moduleName
              : e.props.module.moduleName;
            return le.test(e.state.overrideUrl)
              ? window.importMapOverrides.getUrlFromPort(t, e.state.overrideUrl)
              : e.state.overrideUrl;
          }),
          o(p(e), "keyDown", function (t) {
            "Escape" === t.key && (t.stopPropagation(), e.props.cancel());
          }),
          o(p(e), "focusFirstInput", function () {
            (e.moduleNameEl || e.inputEl).select();
          }),
          o(p(e), "clearModuleName", function () {
            e.setState({ moduleName: "" }, function () {
              e.focusFirstInput();
            });
          }),
          o(p(e), "clearInput", function () {
            e.setState({ overrideUrl: "" }, function () {
              e.focusFirstInput();
            });
          }),
          e
        );
      }
      return (
        r(l, [
          {
            key: "componentDidMount",
            value: function () {
              this.focusFirstInput(),
                this.dialogEl.addEventListener("keydown", this.keyDown);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e, t) {
              var n = this;
              this.props.module !== e.module &&
                this.setState(
                  { overrideUrl: this.props.module.overrideUrl || "" },
                  function () {
                    n.focusFirstInput();
                  }
                );
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.dialogEl.removeEventListener("keydown", this.keyDown);
            },
          },
          {
            key: "render",
            value: function (e) {
              var t = this,
                n = e.module;
              return R(
                "div",
                { className: "imo-modal-container" },
                R("div", { className: "imo-modal" }),
                R(
                  "dialog",
                  {
                    className: "imo-module-dialog ".concat(
                      this.state.overrideUrl.length > 0
                        ? "imo-overridden"
                        : "imo-default"
                    ),
                    open: !0,
                    ref: this.dialogRef,
                  },
                  R(
                    "form",
                    { method: "dialog", onSubmit: this.handleSubmit },
                    R("h3", { style: { marginTop: 0 } }, n.moduleName),
                    R(
                      "table",
                      null,
                      R(
                        "tbody",
                        null,
                        !n.isNew &&
                          R(
                            "tr",
                            null,
                            R("td", null, "Default URL:"),
                            R("td", null, n.defaultUrl)
                          ),
                        n.isNew &&
                          R(
                            "tr",
                            null,
                            R(
                              "td",
                              null,
                              R(
                                "span",
                                { id: "module-name-label" },
                                "Module Name:"
                              )
                            ),
                            R(
                              "td",
                              { style: { position: "relative" } },
                              R("input", {
                                type: "text",
                                tabIndex: 1,
                                value: this.state.moduleName,
                                "aria-labelledby": "module-name-label",
                                onInput: function (e) {
                                  return t.setState({
                                    moduleName: e.target.value,
                                  });
                                },
                                ref: this.handleModuleNameRef,
                                required: !0,
                              }),
                              R(
                                "div",
                                {
                                  role: "button",
                                  tabIndex: 3,
                                  className: "imo-clear-input",
                                  onClick: this.clearModuleName,
                                },
                                R("div", null, "ⓧ")
                              )
                            )
                          ),
                        R(
                          "tr",
                          null,
                          R(
                            "td",
                            null,
                            R(
                              "span",
                              { id: "override-url-label" },
                              "Override URL:"
                            )
                          ),
                          R(
                            "td",
                            { style: { position: "relative" } },
                            R("input", {
                              ref: this.handleInputRef,
                              type: "text",
                              value: this.state.overrideUrl,
                              "aria-labelledby": "override-url-label",
                              tabIndex: 2,
                              onInput: function (e) {
                                return t.setState({
                                  overrideUrl: e.target.value,
                                });
                              },
                            }),
                            R(
                              "div",
                              {
                                role: "button",
                                tabIndex: 4,
                                className: "imo-clear-input",
                                onClick: this.clearInput,
                              },
                              R("div", null, "ⓧ")
                            )
                          )
                        ),
                        le.test(this.state.overrideUrl) &&
                          R(
                            "tr",
                            null,
                            R("td", null, "Derived url:"),
                            R("td", null, this.getDerivedUrl())
                          )
                      )
                    ),
                    R(
                      "div",
                      { className: "imo-dialog-actions" },
                      R(
                        "button",
                        {
                          type: "button",
                          tabIndex: 5,
                          onClick: this.props.cancel,
                          style: { marginRight: "16px" },
                        },
                        "Cancel"
                      ),
                      this.props.module.overrideUrl &&
                        !this.props.module.disabled &&
                        R(
                          "button",
                          {
                            type: "button",
                            onClick: function () {
                              t.props.module.disabled
                                ? window.importMapOverrides.enableOverride(
                                    t.props.module.moduleName
                                  )
                                : window.importMapOverrides.disableOverride(
                                    t.props.module.moduleName
                                  ),
                                t.props.cancel();
                            },
                            tabIndex: 6,
                            style: { marginRight: "16px" },
                          },
                          this.props.module.disabled ? "Enable" : "Disable",
                          " Override"
                        ),
                      R(
                        "button",
                        {
                          type: "submit",
                          tabIndex: 7,
                          className: this.state.overrideUrl
                            ? "imo-overridden"
                            : "imo-default",
                        },
                        this.state.overrideUrl
                          ? "Apply override"
                          : "Reset to default"
                      )
                    )
                  )
                )
              );
            },
          },
        ]),
        l
      );
    })(F),
    le = /^\d+$/,
    ae = (function (e) {
      i(l, e);
      var n = m(l);
      function l() {
        var e;
        t(this, l);
        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
          i[a] = arguments[a];
        return (
          o(p((e = n.call.apply(n, [this].concat(i)))), "state", {
            url: e.props.dialogExternalMap.isNew
              ? ""
              : e.props.dialogExternalMap.url,
          }),
          o(p(e), "inputEl", null),
          o(p(e), "handleSubmit", function (t) {
            t.preventDefault(),
              e.props.dialogExternalMap.isNew ||
                window.importMapOverrides.removeExternalOverride(
                  e.props.dialogExternalMap.url
                ),
              e.state.url &&
                window.importMapOverrides.addExternalOverride(e.state.url),
              e.props.cancel();
          }),
          o(p(e), "keyDown", function (t) {
            "Escape" === t.key && (t.stopPropagation(), e.props.cancel());
          }),
          e
        );
      }
      return (
        r(l, [
          {
            key: "componentDidMount",
            value: function () {
              this.inputEl.focus(),
                this.dialogEl.addEventListener("keydown", this.keyDown);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.dialogEl.removeEventListener("keydown", this.keyDown);
            },
          },
          {
            key: "render",
            value: function () {
              var e = this;
              return R(
                "div",
                { className: "imo-modal-container" },
                R("div", { className: "imo-modal" }),
                R(
                  "dialog",
                  {
                    className: "imo-module-dialog",
                    open: !0,
                    ref: function (t) {
                      return (e.dialogEl = t);
                    },
                  },
                  R(
                    "form",
                    { method: "dialog", onSubmit: this.handleSubmit },
                    R(
                      "h3",
                      { style: { marginTop: 0 } },
                      this.props.dialogExternalMap.isNew
                        ? "Add External Import Map"
                        : "Edit External Import Map"
                    ),
                    R(
                      "div",
                      { style: { marginBottom: "20px" } },
                      R(
                        "label",
                        { htmlFor: "external-importmap-url" },
                        "URL to import map:"
                      ),
                      R(
                        "span",
                        { style: { position: "relative" } },
                        R("input", {
                          id: "external-importmap-url",
                          type: "text",
                          value: this.state.url,
                          onInput: function (t) {
                            return e.setState({ url: t.target.value });
                          },
                          ref: function (t) {
                            return (e.inputEl = t);
                          },
                          required: this.props.dialogExternalMap.isNew,
                        }),
                        R(
                          "div",
                          {
                            role: "button",
                            tabIndex: 0,
                            className: "imo-clear-input",
                            onClick: function () {
                              return e.setState({ url: "" });
                            },
                          },
                          R("div", null, "ⓧ")
                        )
                      )
                    ),
                    R(
                      "div",
                      { className: "imo-dialog-actions" },
                      R(
                        "button",
                        {
                          type: "button",
                          onClick: this.props.cancel,
                          style: { marginRight: "16px" },
                        },
                        "Cancel"
                      ),
                      R(
                        "button",
                        {
                          type: "submit",
                          className: this.state.url
                            ? "imo-overridden"
                            : "imo-default",
                        },
                        this.state.url || this.props.dialogExternalMap.isNew
                          ? "Apply override"
                          : "Remove override"
                      )
                    )
                  )
                )
              );
            },
          },
        ]),
        l
      );
    })(F),
    ue = (function (e) {
      i(o, e);
      var n = m(o);
      function o() {
        return t(this, o), n.apply(this, arguments);
      }
      return (
        r(o, [
          {
            key: "componentDidMount",
            value: function () {
              window.importMapOverrides.getCurrentPageMap().then(pe);
            },
          },
          {
            key: "render",
            value: function () {
              return null;
            },
          },
        ]),
        o
      );
    })(F),
    se = function (e) {
      return e.replace(".min.js", ".js");
    },
    de = {
      react: function (e) {
        return e.replace("production.min", "development");
      },
      "react-dom": function (e) {
        return e.replace("production.min", "development");
      },
      "single-spa": function (e) {
        return e.replace("single-spa.min.js", "single-spa.dev.js");
      },
      vue: se,
      "vue-router": se,
      "@angular/core": se,
      "@angular/common": se,
      "@angular/router": se,
      "@angular/platform-browser": se,
    };
  function pe(e) {
    Object.keys(e.imports)
      .filter(function (e) {
        return de[e];
      })
      .forEach(function (t) {
        window.importMapOverrides.addOverride(t, de[t](e.imports[t]));
      });
  }
  function ce() {
    return (
      Object.keys(window.importMapOverrides.getOverrideMap().imports).filter(
        function (e) {
          return !de[e];
        }
      ).length > 0
    );
  }
  var me = (function (e) {
    i(l, e);
    var n = m(l);
    function l() {
      var e;
      t(this, l);
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      return (
        o(p((e = n.call.apply(n, [this].concat(i)))), "state", {
          notOverriddenMap: { imports: {} },
          currentPageMap: { imports: {} },
          nextPageMap: { imports: {} },
          dialogModule: null,
          dialogExternalMap: null,
          searchVal: "",
        }),
        o(p(e), "reload", function (e) {
          e.stopPropagation(), window.location.reload();
        }),
        o(p(e), "cancel", function () {
          e.setState({ dialogModule: null, dialogExternalMap: null });
        }),
        o(p(e), "updateModuleUrl", function (t) {
          null === (t = t || null)
            ? window.importMapOverrides.removeOverride(
                e.state.dialogModule.moduleName
              )
            : window.importMapOverrides.addOverride(
                e.state.dialogModule.moduleName,
                t
              ),
            e.setState({ dialogModule: null });
        }),
        o(p(e), "doUpdate", function () {
          e.forceUpdate(),
            window.importMapOverrides.getNextPageMap().then(function (t) {
              e.setState({ nextPageMap: t });
            });
        }),
        o(p(e), "addNewModule", function (t, n) {
          t && n && window.importMapOverrides.addOverride(t, n),
            e.setState({ dialogModule: null });
        }),
        o(p(e), "filterModuleNames", function (t) {
          return (
            !(e.state.searchVal.trim().length > 0) || g(t, e.state.searchVal)
          );
        }),
        e
      );
    }
    return (
      r(l, [
        {
          key: "componentDidMount",
          value: function () {
            var e = this;
            window.importMapOverrides.getDefaultMap().then(function (t) {
              e.setState({ notOverriddenMap: t });
            }),
              window.importMapOverrides.getCurrentPageMap().then(function (t) {
                e.setState({ currentPageMap: t });
              }),
              window.importMapOverrides.getNextPageMap().then(function (t) {
                e.setState({ nextPageMap: t });
              }),
              window.addEventListener(
                "import-map-overrides:change",
                this.doUpdate
              ),
              this.inputRef.focus();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            window.removeEventListener(
              "import-map-overrides:change",
              this.doUpdate
            );
          },
        },
        {
          key: "componentDidUpdate",
          value: function (e, t) {
            !t.dialogModule && this.state.dialogModule
              ? ((this.dialogContainer = document.createElement("div")),
                document.body.appendChild(this.dialogContainer),
                oe(
                  R(ie, {
                    module: this.state.dialogModule,
                    cancel: this.cancel,
                    updateModuleUrl: this.updateModuleUrl,
                    addNewModule: this.addNewModule,
                  }),
                  this.dialogContainer
                ))
              : t.dialogModule &&
                !this.state.dialogModule &&
                (oe(null, this.dialogContainer),
                this.dialogContainer.remove(),
                delete this.dialogContainer),
              !t.dialogExternalMap && this.state.dialogExternalMap
                ? ((this.dialogContainer = document.createElement("div")),
                  document.body.appendChild(this.dialogContainer),
                  oe(
                    R(ae, {
                      dialogExternalMap: this.state.dialogExternalMap,
                      cancel: this.cancel,
                    }),
                    this.dialogContainer
                  ))
                : t.dialogExternalMap &&
                  !this.state.dialogExternalMap &&
                  (oe(null, this.dialogContainer),
                  this.dialogContainer.remove(),
                  delete this.dialogContainer);
          },
        },
        {
          key: "render",
          value: function () {
            var e = this,
              t = [],
              n = [],
              r = [],
              o = [],
              i = [],
              l = [],
              a = [],
              u = window.importMapOverrides.getOverrideMap(!0).imports,
              s = Object.keys(this.state.notOverriddenMap.imports),
              d = window.importMapOverrides.getDisabledOverrides();
            s.filter(this.filterModuleNames).forEach(function (s) {
              var p = {
                moduleName: s,
                defaultUrl: e.state.notOverriddenMap.imports[s],
                overrideUrl: u[s],
                disabled: g(d, s),
              };
              p.disabled
                ? r.push(p)
                : u[s]
                ? e.state.currentPageMap.imports[s] === u[s]
                  ? de[s] && de[s](e.state.currentPageMap.imports[s]) === u[s]
                    ? a.push(p)
                    : t.push(p)
                  : n.push(p)
                : e.state.notOverriddenMap.imports[s] ===
                  e.state.currentPageMap.imports[s]
                ? o.push(p)
                : e.state.notOverriddenMap.imports[s] ===
                  e.state.nextPageMap.imports[s]
                ? l.push(p)
                : i.push(p);
            }),
              Object.keys(u)
                .filter(this.filterModuleNames)
                .forEach(function (o) {
                  if (!g(s, o)) {
                    var i = {
                      moduleName: o,
                      defaultUrl: null,
                      overrideUrl: u[o],
                      disabled: g(d, o),
                    };
                    i.disabled
                      ? r.push(i)
                      : e.state.currentPageMap.imports[o] === u[o]
                      ? t.push(i)
                      : n.push(i);
                  }
                }),
              t.sort(fe),
              o.sort(fe),
              n.sort(fe);
            var p = (function () {
                var e,
                  t = window.importMapOverrides.getExternalOverrides(),
                  n =
                    window.importMapOverrides.getCurrentPageExternalOverrides(),
                  r = [],
                  o = [],
                  i = [],
                  l = (function (e, t) {
                    var n;
                    if (
                      "undefined" == typeof Symbol ||
                      null == e[Symbol.iterator]
                    ) {
                      if (Array.isArray(e) || (n = v(e))) {
                        n && (e = n);
                        var r = 0,
                          o = function () {};
                        return {
                          s: o,
                          n: function () {
                            return r >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[r++] };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: o,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var i,
                      l = !0,
                      a = !1;
                    return {
                      s: function () {
                        n = e[Symbol.iterator]();
                      },
                      n: function () {
                        var e = n.next();
                        return (l = e.done), e;
                      },
                      e: function (e) {
                        (a = !0), (i = e);
                      },
                      f: function () {
                        try {
                          l || null == n.return || n.return();
                        } finally {
                          if (a) throw i;
                        }
                      },
                    };
                  })(t);
                try {
                  for (l.s(); !(e = l.n()).done; ) {
                    var a = e.value;
                    g(window.importMapOverrides.invalidExternalMaps, a)
                      ? r.push(a)
                      : g(n, a)
                      ? o.push(a)
                      : i.push(a);
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
                return {
                  brokenMaps: r,
                  workingCurrentPageMaps: o,
                  workingNextPageMaps: i,
                };
              })(),
              c = p.brokenMaps,
              m = p.workingCurrentPageMaps,
              f = p.workingNextPageMaps;
            return R(
              "div",
              { className: "imo-list-container" },
              R(
                "div",
                { className: "imo-table-header-actions" },
                R("input", {
                  className: "imo-list-search",
                  "aria-label": "Search modules",
                  placeholder: "Search modules",
                  value: this.state.searchVal,
                  onInput: function (t) {
                    return e.setState({ searchVal: t.target.value });
                  },
                  ref: function (t) {
                    return (e.inputRef = t);
                  },
                }),
                R(
                  "div",
                  { className: "imo-add-new" },
                  R(
                    "button",
                    {
                      onClick: function () {
                        return e.setState({
                          dialogModule: { moduleName: "New module", isNew: !0 },
                        });
                      },
                    },
                    "Add new module"
                  )
                ),
                R(
                  "div",
                  { className: "imo-add-new" },
                  R(
                    "button",
                    {
                      onClick: function () {
                        e.setState({
                          dialogExternalMap: { url: "", isNew: !0 },
                        });
                      },
                    },
                    "Add import map"
                  )
                ),
                R(
                  "div",
                  { className: "imo-add-new" },
                  R(
                    "button",
                    {
                      onClick: function () {
                        return window.importMapOverrides.resetOverrides();
                      },
                    },
                    "Reset all overrides"
                  )
                )
              ),
              R(
                "table",
                { className: "imo-overrides-table" },
                R(
                  "thead",
                  null,
                  R(
                    "tr",
                    null,
                    R("th", null, "Module Status"),
                    R("th", null, "Module Name"),
                    R("th", null, "Domain"),
                    R("th", null, "Filename")
                  )
                ),
                R(
                  "tbody",
                  null,
                  n.map(function (t) {
                    return R(
                      "tr",
                      {
                        role: "button",
                        tabIndex: 0,
                        onClick: function () {
                          return e.setState({ dialogModule: t });
                        },
                        key: t.moduleName,
                      },
                      R(
                        "td",
                        { onClick: e.reload, role: "button", tabIndex: 0 },
                        R("div", { className: "imo-status imo-next-override" }),
                        R("div", null, "Inline Override"),
                        R("div", { className: "imo-needs-refresh" })
                      ),
                      R("td", null, t.moduleName),
                      R("td", null, he(t)),
                      R("td", null, ge(t))
                    );
                  }),
                  l.map(function (t) {
                    return R(
                      "tr",
                      {
                        role: "button",
                        tabIndex: 0,
                        onClick: function () {
                          return e.setState({ dialogModule: t });
                        },
                        key: t.moduleName,
                      },
                      R(
                        "td",
                        { style: { position: "relative" } },
                        R("div", { className: "imo-status imo-next-default" }),
                        R("div", null, "Default"),
                        R("div", { className: "imo-needs-refresh" })
                      ),
                      R("td", null, t.moduleName),
                      R("td", null, he(t)),
                      R("td", null, ge(t))
                    );
                  }),
                  r.map(function (t) {
                    return R(
                      "tr",
                      {
                        role: "button",
                        tabIndex: 0,
                        onClick: function () {
                          return e.setState({ dialogModule: t });
                        },
                        key: t.moduleName,
                      },
                      R(
                        "td",
                        null,
                        R("div", {
                          className: "imo-status imo-disabled-override",
                        }),
                        R("div", null, "Override disabled")
                      ),
                      R("td", null, t.moduleName),
                      R("td", null, he(t)),
                      R("td", null, ge(t))
                    );
                  }),
                  t.map(function (t) {
                    return R(
                      "tr",
                      {
                        role: "button",
                        tabIndex: 0,
                        onClick: function () {
                          return e.setState({ dialogModule: t });
                        },
                        key: t.moduleName,
                      },
                      R(
                        "td",
                        null,
                        R("div", {
                          className: "imo-status imo-current-override",
                        }),
                        R("div", null, "Inline Override")
                      ),
                      R("td", null, t.moduleName),
                      R("td", null, he(t)),
                      R("td", null, ge(t))
                    );
                  }),
                  i.map(function (t) {
                    return R(
                      "tr",
                      {
                        role: "button",
                        tabIndex: 0,
                        onClick: function () {
                          return e.setState({ dialogModule: t });
                        },
                        key: t.moduleName,
                      },
                      R(
                        "td",
                        null,
                        R("div", {
                          className: "imo-status imo-external-override",
                        }),
                        R("div", null, "External Override")
                      ),
                      R("td", null, t.moduleName),
                      R("td", null, he(t)),
                      R("td", null, ge(t))
                    );
                  }),
                  a.map(function (t) {
                    return R(
                      "tr",
                      {
                        role: "button",
                        tabIndex: 0,
                        onClick: function () {
                          return e.setState({ dialogModule: t });
                        },
                        key: t.moduleName,
                        title:
                          "Automatically use dev version of certain npm libs",
                      },
                      R(
                        "td",
                        null,
                        R("div", {
                          className: "imo-status imo-dev-lib-override",
                        }),
                        R("div", null, "Dev Lib Override")
                      ),
                      R("td", null, t.moduleName),
                      R("td", null, he(t)),
                      R("td", null, ge(t))
                    );
                  }),
                  o.map(function (t) {
                    return R(
                      "tr",
                      {
                        role: "button",
                        tabIndex: 0,
                        onClick: function () {
                          return e.setState({ dialogModule: t });
                        },
                        key: t.moduleName,
                      },
                      R(
                        "td",
                        null,
                        R("div", {
                          className: "imo-status imo-default-module",
                        }),
                        R("div", null, "Default")
                      ),
                      R("td", null, t.moduleName),
                      R("td", null, he(t)),
                      R("td", null, ge(t))
                    );
                  })
                )
              ),
              (c.length > 0 || m.length > 0 || f.length > 0) &&
                R(
                  "table",
                  { className: "imo-overrides-table" },
                  R(
                    "thead",
                    null,
                    R("th", null, "Import Map Status"),
                    R("th", null, "URL")
                  ),
                  R(
                    "tbody",
                    null,
                    c.map(function (t) {
                      return R(
                        "tr",
                        {
                          role: "button",
                          tabIndex: 0,
                          onClick: function () {
                            return e.setState({
                              dialogExternalMap: { isNew: !1, url: t },
                            });
                          },
                          key: t,
                        },
                        R(
                          "td",
                          null,
                          R("div", {
                            className: "imo-status imo-disabled-override",
                          }),
                          R("div", null, "Invalid")
                        ),
                        R("td", null, t)
                      );
                    }),
                    f.map(function (t) {
                      return R(
                        "tr",
                        {
                          role: "button",
                          tabIndex: 0,
                          onClick: function () {
                            return e.setState({
                              dialogExternalMap: { isNew: !1, url: t },
                            });
                          },
                          key: t,
                        },
                        R(
                          "td",
                          null,
                          R("div", {
                            className: "imo-status imo-next-override",
                          }),
                          R("div", null, "Pending refresh")
                        ),
                        R("td", null, t)
                      );
                    }),
                    m.map(function (t) {
                      return R(
                        "tr",
                        {
                          role: "button",
                          tabIndex: 0,
                          onClick: function () {
                            return e.setState({
                              dialogExternalMap: { isNew: !1, url: t },
                            });
                          },
                          key: t,
                        },
                        R(
                          "td",
                          null,
                          R("div", {
                            className: "imo-status imo-current-override",
                          }),
                          R("div", null, "Override")
                        ),
                        R("td", null, t)
                      );
                    })
                  )
                )
            );
          },
        },
      ]),
      l
    );
  })(F);
  function fe(e, t) {
    return e.moduleName > t.moduleName;
  }
  var ve =
    (document.querySelector("base") && document.querySelector("base").href) ||
    location.origin + "/";
  function he(e) {
    var t = _e(e),
      n = ye(t);
    return n ? n.host : t;
  }
  function ge(e) {
    var t = _e(e),
      n = ye(t);
    return n ? n.pathname.slice(n.pathname.lastIndexOf("/") + 1) : t;
  }
  function _e(e) {
    return e.overrideUrl || e.defaultUrl;
  }
  function ye(e) {
    try {
      return new URL(e, ve);
    } catch (e) {
      return null;
    }
  }
  var be = (function (e) {
      i(l, e);
      var n = m(l);
      function l() {
        var e;
        t(this, l);
        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
          i[a] = arguments[a];
        return (
          o(
            p((e = n.call.apply(n, [this].concat(i)))),
            "doUpdate",
            function () {
              return e.forceUpdate();
            }
          ),
          o(p(e), "keydownListener", function (t) {
            "Escape" === t.key && e.props.close && e.props.close();
          }),
          e
        );
      }
      return (
        r(l, [
          {
            key: "componentDidMount",
            value: function () {
              window.addEventListener("keydown", this.keydownListener),
                window.addEventListener(
                  "import-map-overrides:change",
                  this.doUpdate
                );
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              window.removeEventListener("keydown", this.keydownListener),
                window.removeEventListener(
                  "import-map-overrides:change",
                  this.doUpdate
                );
            },
          },
          {
            key: "render",
            value: function (e) {
              return R(
                "div",
                { className: "imo-popup" },
                R(
                  "div",
                  { className: "imo-header" },
                  R(
                    "div",
                    null,
                    R("h1", null, "Import Map Overrides"),
                    R(
                      "p",
                      null,
                      "This developer tool allows you to view and override your import maps. Start by clicking on a module that you'd like to override.",
                      " ",
                      R(
                        "a",
                        {
                          target: "_blank",
                          href: "https://github.com/joeldenning/import-map-overrides",
                        },
                        "See documentation for more info"
                      ),
                      "."
                    )
                  ),
                  R(
                    "button",
                    { className: "imo-unstyled", onClick: e.close },
                    "ⓧ"
                  )
                ),
                R(me, { importMapChanged: this.props.importMapChanged })
              );
            },
          },
        ]),
        l
      );
    })(F),
    we = (function (e) {
      i(l, e);
      var n = m(l);
      function l() {
        var e;
        t(this, l);
        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
          i[a] = arguments[a];
        return (
          o(p((e = n.call.apply(n, [this].concat(i)))), "state", {
            showingPopup: !1,
          }),
          o(p(e), "doUpdate", function () {
            return e.forceUpdate();
          }),
          o(p(e), "toggleTrigger", function () {
            e.setState(function (e) {
              return { showingPopup: !e.showingPopup };
            });
          }),
          o(p(e), "importMapChanged", function () {
            e.forceUpdate();
          }),
          o(p(e), "useDevLibs", function () {
            var t = localStorage.getItem("import-map-overrides-dev-libs");
            return t
              ? "true" === t
              : e.props.customElement.hasAttribute("dev-libs");
          }),
          o(p(e), "atLeastOneOverride", function () {
            return e.useDevLibs()
              ? ce()
              : Object.keys(window.importMapOverrides.getOverrideMap().imports)
                  .length > 0;
          }),
          e
        );
      }
      return (
        r(l, [
          {
            key: "componentDidMount",
            value: function () {
              window.addEventListener(
                "import-map-overrides:change",
                this.doUpdate
              );
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              window.removeEventListener(
                "import-map-overrides:change",
                this.doUpdate
              );
            },
          },
          {
            key: "render",
            value: function (e, t) {
              return e.customElement.hasAttribute("show-when-local-storage") &&
                "true" !==
                  localStorage.getItem(
                    e.customElement.getAttribute("show-when-local-storage")
                  )
                ? null
                : R(
                    "div",
                    null,
                    R(
                      "button",
                      {
                        onClick: this.toggleTrigger,
                        className: "imo-unstyled imo-trigger ".concat(
                          this.atLeastOneOverride()
                            ? "imo-current-override"
                            : ""
                        ),
                      },
                      "{···}"
                    ),
                    this.useDevLibs() && R(ue, null),
                    t.showingPopup &&
                      R(be, {
                        close: this.toggleTrigger,
                        importMapChanged: this.importMapChanged,
                      })
                  );
            },
          },
        ]),
        l
      );
    })(F);
  function xe(e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (function (o) {
      i(a, o);
      var l = m(a);
      function a() {
        return t(this, a), l.apply(this, arguments);
      }
      return (
        r(
          a,
          [
            {
              key: "connectedCallback",
              value: function () {
                this.renderWithPreact();
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                oe(null, this), (this.renderedEl = null);
              },
            },
            {
              key: "attributeChangedCallback",
              value: function () {
                this.renderWithPreact();
              },
            },
            {
              key: "renderWithPreact",
              value: function () {
                this.renderedEl = oe(
                  R(e, { customElement: this }),
                  this,
                  this.renderedEl
                );
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return n;
              },
            },
          ]
        ),
        a
      );
    })(d(HTMLElement));
  }
  window.customElements &&
    !y &&
    (window.customElements.define(
      "import-map-overrides-full",
      xe(we, ["show-when-local-storage"])
    ),
    window.customElements.define("import-map-overrides-popup", xe(be)),
    window.customElements.define("import-map-overrides-list", xe(me)));
})();
//# sourceMappingURL=import-map-overrides.js.map
