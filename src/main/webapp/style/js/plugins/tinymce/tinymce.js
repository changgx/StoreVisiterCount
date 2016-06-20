/* =============================================
 * tinyMCE 4.0.26 (2014-05-06)
 * 
 * License: MIT
 * ============================================= */

!function (e, t) {
    "use strict";
    function n(e, t) {
        for (var n, r = [], i = 0; i < e.length; ++i) {
            if (n = s[e[i]] || o(e[i]), !n)throw"module definition dependecy not found: " + e[i];
            r.push(n)
        }
        t.apply(null, r)
    }

    function r(e, r, i) {
        if ("string" != typeof e)throw"invalid module definition, module id must be defined and be a string";
        if (r === t)throw"invalid module definition, dependencies must be specified";
        if (i === t)throw"invalid module definition, definition function must be specified";
        n(r, function () {
            s[e] = i.apply(null, arguments)
        })
    }

    function i(e) {
        return !!s[e]
    }

    function o(t) {
        for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
            if (!n[r[i]])return;
            n = n[r[i]]
        }
        return n
    }

    function a(n) {
        for (var r = 0; r < n.length; r++) {
            for (var i = e, o = n[r], a = o.split(/[.\/]/), l = 0; l < a.length - 1; ++l)i[a[l]] === t && (i[a[l]] = {}), i = i[a[l]];
            i[a[a.length - 1]] = s[o]
        }
    }

    var s = {}, l = "tinymce/dom/EventUtils", c = "tinymce/dom/Sizzle", u = "tinymce/dom/DomQuery", d = "tinymce/html/Styles", f = "tinymce/dom/TreeWalker", p = "tinymce/util/Tools", h = "tinymce/dom/Range", m = "tinymce/html/Entities", g = "tinymce/Env", v = "tinymce/dom/StyleSheetLoader", y = "tinymce/dom/DOMUtils", b = "tinymce/dom/ScriptLoader", C = "tinymce/AddOnManager", x = "tinymce/html/Node", w = "tinymce/html/Schema", _ = "tinymce/html/SaxParser", N = "tinymce/html/DomParser", E = "tinymce/html/Writer", S = "tinymce/html/Serializer", k = "tinymce/dom/Serializer", T = "tinymce/dom/TridentSelection", R = "tinymce/util/VK", A = "tinymce/dom/ControlSelection", B = "tinymce/dom/RangeUtils", D = "tinymce/dom/Selection", L = "tinymce/fmt/Preview", M = "tinymce/Formatter", H = "tinymce/UndoManager", P = "tinymce/EnterKey", O = "tinymce/ForceBlocks", I = "tinymce/EditorCommands", F = "tinymce/util/URI", z = "tinymce/util/Class", W = "tinymce/util/EventDispatcher", V = "tinymce/ui/Selector", U = "tinymce/ui/Collection", q = "tinymce/ui/DomUtils", $ = "tinymce/ui/Control", j = "tinymce/ui/Factory", K = "tinymce/ui/KeyboardNavigation", G = "tinymce/ui/Container", Y = "tinymce/ui/DragHelper", X = "tinymce/ui/Scrollable", J = "tinymce/ui/Panel", Q = "tinymce/ui/Movable", Z = "tinymce/ui/Resizable", et = "tinymce/ui/FloatPanel", tt = "tinymce/ui/Window", nt = "tinymce/ui/MessageBox", rt = "tinymce/WindowManager", it = "tinymce/util/Quirks", ot = "tinymce/util/Observable", at = "tinymce/EditorObservable", st = "tinymce/Shortcuts", lt = "tinymce/Editor", ct = "tinymce/util/I18n", ut = "tinymce/FocusManager", dt = "tinymce/EditorManager", ft = "tinymce/LegacyInput", pt = "tinymce/util/XHR", ht = "tinymce/util/JSON", mt = "tinymce/util/JSONRequest", gt = "tinymce/util/JSONP", vt = "tinymce/util/LocalStorage", yt = "tinymce/Compat", bt = "tinymce/ui/Layout", Ct = "tinymce/ui/AbsoluteLayout", xt = "tinymce/ui/Tooltip", wt = "tinymce/ui/Widget", _t = "tinymce/ui/Button", Nt = "tinymce/ui/ButtonGroup", Et = "tinymce/ui/Checkbox", St = "tinymce/ui/PanelButton", kt = "tinymce/ui/ColorButton", Tt = "tinymce/ui/ComboBox", Rt = "tinymce/ui/Path", At = "tinymce/ui/ElementPath", Bt = "tinymce/ui/FormItem", Dt = "tinymce/ui/Form", Lt = "tinymce/ui/FieldSet", Mt = "tinymce/ui/FilePicker", Ht = "tinymce/ui/FitLayout", Pt = "tinymce/ui/FlexLayout", Ot = "tinymce/ui/FlowLayout", It = "tinymce/ui/FormatControls", Ft = "tinymce/ui/GridLayout", zt = "tinymce/ui/Iframe", Wt = "tinymce/ui/Label", Vt = "tinymce/ui/Toolbar", Ut = "tinymce/ui/MenuBar", qt = "tinymce/ui/MenuButton", $t = "tinymce/ui/ListBox", jt = "tinymce/ui/MenuItem", Kt = "tinymce/ui/Menu", Gt = "tinymce/ui/Radio", Yt = "tinymce/ui/ResizeHandle", Xt = "tinymce/ui/Spacer", Jt = "tinymce/ui/SplitButton", Qt = "tinymce/ui/StackLayout", Zt = "tinymce/ui/TabPanel", en = "tinymce/ui/TextBox", tn = "tinymce/ui/Throbber";
    r(l, [], function () {
        function e(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        }

        function t(e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
        }

        function n(e, t) {
            function n() {
                return !1
            }

            function r() {
                return !0
            }

            var i, o = t || {}, l;
            for (i in e)s[i] || (o[i] = e[i]);
            if (o.target || (o.target = o.srcElement || document), e && a.test(e.type) && e.pageX === l && e.clientX !== l) {
                var c = o.target.ownerDocument || document, u = c.documentElement, d = c.body;
                o.pageX = e.clientX + (u && u.scrollLeft || d && d.scrollLeft || 0) - (u && u.clientLeft || d && d.clientLeft || 0), o.pageY = e.clientY + (u && u.scrollTop || d && d.scrollTop || 0) - (u && u.clientTop || d && d.clientTop || 0)
            }
            return o.preventDefault = function () {
                o.isDefaultPrevented = r, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, o.stopPropagation = function () {
                o.isPropagationStopped = r, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }, o.stopImmediatePropagation = function () {
                o.isImmediatePropagationStopped = r, o.stopPropagation()
            }, o.isDefaultPrevented || (o.isDefaultPrevented = n, o.isPropagationStopped = n, o.isImmediatePropagationStopped = n), o
        }

        function r(n, r, i) {
            function o() {
                i.domLoaded || (i.domLoaded = !0, r(c))
            }

            function a() {
                ("complete" === l.readyState || "interactive" === l.readyState && l.body) && (t(l, "readystatechange", a), o())
            }

            function s() {
                try {
                    l.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(s, 0)
                }
                o()
            }

            var l = n.document, c = {type: "ready"};
            return i.domLoaded ? void r(c) : (l.addEventListener ? "complete" === l.readyState ? o() : e(n, "DOMContentLoaded", o) : (e(l, "readystatechange", a), l.documentElement.doScroll && n.self === n.top && s()), void e(n, "load", o))
        }

        function i() {
            function i(e, t) {
                var n, r, i, o, a = s[t];
                if (n = a && a[e.type])for (r = 0, i = n.length; i > r; r++)if (o = n[r], o && o.func.call(o.scope, e) === !1 && e.preventDefault(), e.isImmediatePropagationStopped())return
            }

            var a = this, s = {}, l, c, u, d, f;
            c = o + (+new Date).toString(32), d = "onmouseenter"in document.documentElement, u = "onfocusin"in document.documentElement, f = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, l = 1, a.domLoaded = !1, a.events = s, a.bind = function (t, o, p, h) {
                function m(e) {
                    i(n(e || _.event), g)
                }

                var g, v, y, b, C, x, w, _ = window;
                if (t && 3 !== t.nodeType && 8 !== t.nodeType) {
                    for (t[c] ? g = t[c] : (g = l++, t[c] = g, s[g] = {}), h = h || t, o = o.split(" "), y = o.length; y--;)b = o[y], x = m, C = w = !1, "DOMContentLoaded" === b && (b = "ready"), a.domLoaded && "ready" === b && "complete" == t.readyState ? p.call(h, n({type: b})) : (d || (C = f[b], C && (x = function (e) {
                        var t, r;
                        if (t = e.currentTarget, r = e.relatedTarget, r && t.contains)r = t.contains(r); else for (; r && r !== t;)r = r.parentNode;
                        r || (e = n(e || _.event), e.type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, i(e, g))
                    })), u || "focusin" !== b && "focusout" !== b || (w = !0, C = "focusin" === b ? "focus" : "blur", x = function (e) {
                        e = n(e || _.event), e.type = "focus" === e.type ? "focusin" : "focusout", i(e, g)
                    }), v = s[g][b], v ? "ready" === b && a.domLoaded ? p({type: b}) : v.push({
                        func: p,
                        scope: h
                    }) : (s[g][b] = v = [{
                        func: p,
                        scope: h
                    }], v.fakeName = C, v.capture = w, v.nativeHandler = x, "ready" === b ? r(t, x, a) : e(t, C || b, x, w)));
                    return t = v = 0, p
                }
            }, a.unbind = function (e, n, r) {
                var i, o, l, u, d, f;
                if (!e || 3 === e.nodeType || 8 === e.nodeType)return a;
                if (i = e[c]) {
                    if (f = s[i], n) {
                        for (n = n.split(" "), l = n.length; l--;)if (d = n[l], o = f[d]) {
                            if (r)for (u = o.length; u--;)if (o[u].func === r) {
                                var p = o.nativeHandler, h = o.fakeName, m = o.capture;
                                o = o.slice(0, u).concat(o.slice(u + 1)), o.nativeHandler = p, o.fakeName = h, o.capture = m, f[d] = o
                            }
                            r && 0 !== o.length || (delete f[d], t(e, o.fakeName || d, o.nativeHandler, o.capture))
                        }
                    } else {
                        for (d in f)o = f[d], t(e, o.fakeName || d, o.nativeHandler, o.capture);
                        f = {}
                    }
                    for (d in f)return a;
                    delete s[i];
                    try {
                        delete e[c]
                    } catch (g) {
                        e[c] = null
                    }
                }
                return a
            }, a.fire = function (e, t, r) {
                var o;
                if (!e || 3 === e.nodeType || 8 === e.nodeType)return a;
                r = n(null, r), r.type = t, r.target = e;
                do o = e[c], o && i(r, o), e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow; while (e && !r.isPropagationStopped());
                return a
            }, a.clean = function (e) {
                var t, n, r = a.unbind;
                if (!e || 3 === e.nodeType || 8 === e.nodeType)return a;
                if (e[c] && r(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)for (r(e), n = e.getElementsByTagName("*"), t = n.length; t--;)e = n[t], e[c] && r(e);
                return a
            }, a.destroy = function () {
                s = {}
            }, a.cancel = function (e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
            }
        }

        var o = "mce-data-", a = /^(?:mouse|contextmenu)|click/, s = {
            keyLocation: 1,
            layerX: 1,
            layerY: 1,
            returnValue: 1
        };
        return i.Event = new i, i.Event.bind(window, "ready", function () {
        }), i
    }), r(c, [], function () {
        function e(e) {
            return mt.test(e + "")
        }

        function n() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > _.cacheLength && delete e[t.shift()], e[n] = r, r
            }
        }

        function r(e) {
            return e[I] = !0, e
        }

        function i(e) {
            var t = B.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }

        function o(e, t, n, r) {
            var i, o, a, s, l, c, f, p, h, m;
            if ((t ? t.ownerDocument || t : F) !== B && A(t), t = t || B, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (s = t.nodeType) && 9 !== s)return [];
            if (L && !r) {
                if (i = gt.exec(e))if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode)return n;
                        if (o.id === a)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a)return n.push(o), n
                } else {
                    if (i[2])return Z.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && z.getElementsByClassName && t.getElementsByClassName)return Z.apply(n, t.getElementsByClassName(a)), n
                }
                if (z.qsa && !M.test(e)) {
                    if (f = !0, p = I, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = u(e), (f = t.getAttribute("id")) ? p = f.replace(bt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)c[l] = p + d(c[l]);
                        h = ht.test(e) && t.parentNode || t, m = c.join(",")
                    }
                    if (m)try {
                        return Z.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {
                    } finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return b(e.replace(lt, "$1"), t, n, r)
        }

        function a(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e, t) {
            var n, r, i, a, s, l, c, u = q[e + " "];
            if (u)return t ? 0 : u.slice(0);
            for (s = e, l = [], c = _.preFilter; s;) {
                (!n || (r = ct.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = ut.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(lt, " ")
                }), s = s.slice(n.length));
                for (a in _.filter)!(r = pt[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? o.error(e) : q(e, l).slice(0)
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
            return r
        }

        function f(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = V++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
            } : function (t, n, a) {
                var s, l, c, u = W + " " + o;
                if (a) {
                    for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
                } else for (; t = t[r];)if (1 === t.nodeType || i)if (c = t[I] || (t[I] = {}), (l = c[r]) && l[0] === u) {
                    if ((s = l[1]) === !0 || s === w)return s === !0
                } else if (l = c[r] = [u], l[1] = e(t, n, a) || w, l[1] === !0)return !0
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function h(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
            return a
        }

        function m(e, t, n, i, o, a) {
            return i && !i[I] && (i = m(i)), o && !o[I] && (o = m(o, a)), r(function (r, a, s, l) {
                var c, u, d, f = [], p = [], m = a.length, g = r || y(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? g : h(g, f, e, s, l), b = n ? o || (r ? e : m || i) ? [] : a : v;
                if (n && n(v, b, s, l), i)for (c = h(b, p), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(v[p[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(v[u] = d);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = o ? tt.call(r, d) : f[u]) > -1 && (r[c] = !(a[c] = d))
                    }
                } else b = h(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
            })
        }

        function g(e) {
            for (var t, n, r, i = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = f(function (e) {
                return e === t
            }, a, !0), c = f(function (e) {
                return tt.call(t, e) > -1
            }, a, !0), u = [function (e, n, r) {
                return !o && (r || n !== k) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
            }]; i > s; s++)if (n = _.relative[e[s].type])u = [f(p(u), n)]; else {
                if (n = _.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                    for (r = ++s; i > r && !_.relative[e[r].type]; r++);
                    return m(s > 1 && p(u), s > 1 && d(e.slice(0, s - 1)).replace(lt, "$1"), n, r > s && g(e.slice(s, r)), i > r && g(e = e.slice(r)), i > r && d(e))
                }
                u.push(n)
            }
            return p(u)
        }

        function v(e, t) {
            var n = 0, i = t.length > 0, a = e.length > 0, s = function (r, s, l, c, u) {
                var d, f, p, m = [], g = 0, v = "0", y = r && [], b = null != u, C = k, x = r || a && _.find.TAG("*", u && s.parentNode || s), N = W += null == C ? 1 : Math.random() || .1;
                for (b && (k = s !== B && s, w = n); null != (d = x[v]); v++) {
                    if (a && d) {
                        for (f = 0; p = e[f++];)if (p(d, s, l)) {
                            c.push(d);
                            break
                        }
                        b && (W = N, w = ++n)
                    }
                    i && ((d = !p && d) && g--, r && y.push(d))
                }
                if (g += v, i && v !== g) {
                    for (f = 0; p = t[f++];)p(y, m, s, l);
                    if (r) {
                        if (g > 0)for (; v--;)y[v] || m[v] || (m[v] = J.call(c));
                        m = h(m)
                    }
                    Z.apply(c, m), b && !r && m.length > 0 && g + t.length > 1 && o.uniqueSort(c)
                }
                return b && (W = N, k = C), y
            };
            return i ? r(s) : s
        }

        function y(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++)o(e, t[r], n);
            return n
        }

        function b(e, t, n, r) {
            var i, o, a, s, l, c = u(e);
            if (!r && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && L && _.relative[o[1].type]) {
                    if (t = (_.find.ID(a.matches[0].replace(xt, wt), t) || [])[0], !t)return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !_.relative[s = a.type]);)if ((l = _.find[s]) && (r = l(a.matches[0].replace(xt, wt), ht.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && d(o), !e)return Z.apply(n, r), n;
                    break
                }
            }
            return S(e, c)(r, t, !L, n, ht.test(e)), n
        }

        function C() {
        }

        var x, w, _, N, E, S, k, T, R, A, B, D, L, M, H, P, O, I = "sizzle" + -new Date, F = window.document, z = {}, W = 0, V = 0, U = n(), q = n(), $ = n(), j = !1, K = function () {
            return 0
        }, G = typeof t, Y = 1 << 31, X = [], J = X.pop, Q = X.push, Z = X.push, et = X.slice, tt = X.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                return -1
            }, nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = rt.replace("w", "w#"), ot = "([*^$|!~]?=)", at = "\\[" + nt + "*(" + rt + ")" + nt + "*(?:" + ot + nt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + it + ")|)|)" + nt + "*\\]", st = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)", lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), ct = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([\\x20\\t\\r\\n\\f>+~])" + nt + "*"), dt = new RegExp(st), ft = new RegExp("^" + it + "$"), pt = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + rt + ")['\"]?\\]"),
            TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + at),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        }, ht = /[\x20\t\r\n\f]*[+~]/, mt = /^[^{]+\{\s*\[native code/, gt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, vt = /^(?:input|select|textarea|button)$/i, yt = /^h\d$/i, bt = /'|\\/g, Ct = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, wt = function (e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            Z.apply(X = et.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
        } catch (_t) {
            Z = {
                apply: X.length ? function (e, t) {
                    Q.apply(e, et.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        E = o.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, A = o.setDocument = function (n) {
            var r = n ? n.ownerDocument || n : F;
            return r !== B && 9 === r.nodeType && r.documentElement ? (B = r, D = r.documentElement, L = !E(r), z.getElementsByTagName = i(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), z.attributes = i(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), z.getElementsByClassName = i(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), z.getByName = i(function (e) {
                e.id = I + 0, e.appendChild(B.createElement("a")).setAttribute("name", I), e.appendChild(B.createElement("i")).setAttribute("name", I), D.appendChild(e);
                var t = r.getElementsByName && r.getElementsByName(I).length === 2 + r.getElementsByName(I + 0).length;
                return D.removeChild(e), t
            }), z.sortDetached = i(function (e) {
                return e.compareDocumentPosition && 1 & e.compareDocumentPosition(B.createElement("div"))
            }), _.attrHandle = i(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== G && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            }, z.getByName ? (_.find.ID = function (e, t) {
                if (typeof t.getElementById !== G && L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function (e) {
                var t = e.replace(xt, wt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (_.find.ID = function (e, n) {
                if (typeof n.getElementById !== G && L) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== G && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, _.filter.ID = function (e) {
                var t = e.replace(xt, wt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), _.find.TAG = z.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== G ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, _.find.NAME = z.getByName && function (e, t) {
                    return typeof t.getElementsByName !== G ? t.getElementsByName(name) : void 0
                }, _.find.CLASS = z.getElementsByClassName && function (e, t) {
                    return typeof t.getElementsByClassName !== G && L ? t.getElementsByClassName(e) : void 0
                }, H = [], M = [":focus"], (z.qsa = e(r.querySelectorAll)) && (i(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + nt + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || M.push(":checked")
            }), i(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && M.push("[*^$]=" + nt + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (z.matchesSelector = e(P = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function (e) {
                z.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), H.push("!=", st)
            }), M = new RegExp(M.join("|")), H = H.length && new RegExp(H.join("|")), O = e(D.contains) || D.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, K = D.compareDocumentPosition ? function (e, t) {
                if (e === t)return j = !0, 0;
                var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return n ? 1 & n || T && t.compareDocumentPosition(e) === n ? e === r || O(F, e) ? -1 : t === r || O(F, t) ? 1 : R ? tt.call(R, e) - tt.call(R, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var n, i = 0, o = e.parentNode, s = t.parentNode, l = [e], c = [t];
                if (e === t)return j = !0, 0;
                if (!o || !s)return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : 0;
                if (o === s)return a(e, t);
                for (n = e; n = n.parentNode;)l.unshift(n);
                for (n = t; n = n.parentNode;)c.unshift(n);
                for (; l[i] === c[i];)i++;
                return i ? a(l[i], c[i]) : l[i] === F ? -1 : c[i] === F ? 1 : 0
            }, B) : B
        }, o.matches = function (e, t) {
            return o(e, null, null, t)
        }, o.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== B && A(e), t = t.replace(Ct, "='$1']"), z.matchesSelector && L && (!H || !H.test(t)) && !M.test(t))try {
                var n = P.call(e, t);
                if (n || z.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (r) {
            }
            return o(t, B, null, [e]).length > 0
        }, o.contains = function (e, t) {
            return (e.ownerDocument || e) !== B && A(e), O(e, t)
        }, o.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== B && A(e), L && (t = t.toLowerCase()), (n = _.attrHandle[t]) ? n(e) : !L || z.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, o.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, o.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (j = !z.detectDuplicates, T = !z.sortDetached, R = !z.sortStable && e.slice(0), e.sort(K), j) {
                for (; t = e[i++];)t === e[i] && (r = n.push(i));
                for (; r--;)e.splice(n[r], 1)
            }
            return e
        }, N = o.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += N(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r]; r++)n += N(t);
            return n
        }, _ = o.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pt,
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xt, wt), e[3] = (e[4] || e[5] || "").replace(xt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && dt.test(n) && (t = u(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(xt, wt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                }, CLASS: function (e) {
                    var t = U[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && U(e, function (e) {
                            return t.test(e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = o.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (u = g[I] || (g[I] = {}), c = u[e] || [], p = c[0] === W && c[1], f = c[0] === W && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)if (1 === d.nodeType && ++f && d === t) {
                                    u[e] = [W, p, f];
                                    break
                                }
                            } else if (y && (c = (t[I] || (t[I] = {}))[e]) && c[0] === W)f = c[1]; else for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[I] || (d[I] = {}))[e] = [W, f]), d !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, i = _.pseudos[e] || _.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                    return i[I] ? i(t) : i.length > 1 ? (n = [e, e, "", t], _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, n) {
                        for (var r, o = i(e, t), a = o.length; a--;)r = tt.call(e, o[a]), e[r] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = S(e.replace(lt, "$1"));
                    return i[I] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }), has: r(function (e) {
                    return function (t) {
                        return o(e, t).length > 0
                    }
                }), contains: r(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return ft.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(), function (t) {
                        var n;
                        do if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = window.location && window.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === D
                }, focus: function (e) {
                    return e === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
                    return !0
                }, parent: function (e) {
                    return !_.pseudos.empty(e)
                }, header: function (e) {
                    return yt.test(e.nodeName)
                }, input: function (e) {
                    return vt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        };
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})_.pseudos[x] = s(x);
        for (x in{submit: !0, reset: !0})_.pseudos[x] = l(x);
        return S = o.compile = function (e, t) {
            var n, r = [], i = [], o = $[e + " "];
            if (!o) {
                for (t || (t = u(e)), n = t.length; n--;)o = g(t[n]), o[I] ? r.push(o) : i.push(o);
                o = $(e, v(i, r))
            }
            return o
        }, _.pseudos.nth = _.pseudos.eq, C.prototype = _.filters = _.pseudos, _.setFilters = new C, z.sortStable = I.split("").sort(K).join("") === I, A(), [0, 0].sort(K), z.detectDuplicates = j, o
    }), r(u, [l, c], function (e, n) {
        function r(e) {
            return "undefined" != typeof e
        }

        function i(e) {
            return "string" == typeof e
        }

        function o(e) {
            var t, n, r;
            for (r = v.createElement("div"), t = v.createDocumentFragment(), r.innerHTML = e; n = r.firstChild;)t.appendChild(n);
            return t
        }

        function a(e, t, n) {
            var r;
            if ("string" == typeof t)t = o(t); else if (t.length) {
                for (r = 0; r < t.length; r++)a(e, t[r], n);
                return e
            }
            for (r = e.length; r--;)n.call(e[r], t.parentNode ? t : t);
            return e
        }

        function s(e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        }

        function l(e, t) {
            var n;
            for (e = e || [], "string" == typeof e && (e = e.split(" ")), t = t || {}, n = e.length; n--;)t[e[n]] = {};
            return t
        }

        function c(e, t) {
            return new c.fn.init(e, t)
        }

        function u(e) {
            var t = arguments, n, r, i;
            for (r = 1; r < t.length; r++) {
                n = t[r];
                for (i in n)e[i] = n[i]
            }
            return e
        }

        function d(e) {
            var t = [], n, r;
            for (n = 0, r = e.length; r > n; n++)t[n] = e[n];
            return t
        }

        function f(e, t) {
            var n;
            if (t.indexOf)return t.indexOf(e);
            for (n = t.length; n--;)if (t[n] === e)return n;
            return -1
        }

        function p(e) {
            return null === e || e === t ? "" : ("" + e).replace(N, "")
        }

        function h(e, t) {
            var n, r, i, o, a;
            if (e)if (n = e.length, n === o) {
                for (r in e)if (e.hasOwnProperty(r) && (a = e[r], t.call(a, a, r) === !1))break
            } else for (i = 0; n > i && (a = e[i], t.call(a, a, r) !== !1); i++);
            return e
        }

        function m(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !c(o).is(r));)1 === o.nodeType && i.push(o), o = o[n];
            return i
        }

        function g(e, t, n, r) {
            for (var i = []; e; e = e[n])r && e.nodeType !== r || e === t || i.push(e);
            return i
        }

        var v = document, y = Array.prototype.push, b = Array.prototype.slice, C = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, x = e.Event, w = l("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"), _ = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, N = /^\s*|\s*$/g;
        return c.fn = c.prototype = {
            constructor: c, selector: "", length: 0, init: function (e, t) {
                var n = this, r, a;
                if (!e)return n;
                if (e.nodeType)return n.context = n[0] = e, n.length = 1, n;
                if (i(e)) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : C.exec(e), !r)return c(t || document).find(e);
                    if (r[1])for (a = o(e).firstChild; a;)this.add(a), a = a.nextSibling; else {
                        if (a = v.getElementById(r[2]), a.id !== r[2])return n.find(e);
                        n.length = 1, n[0] = a
                    }
                } else this.add(e);
                return n
            }, toArray: function () {
                return d(this)
            }, add: function (e) {
                var t = this;
                return _(e) ? y.apply(t, e) : e instanceof c ? t.add(e.toArray()) : y.call(t, e), t
            }, attr: function (e, n) {
                var i = this;
                if ("object" == typeof e)h(e, function (e, t) {
                    i.attr(t, e)
                }); else {
                    if (!r(n))return i[0] && 1 === i[0].nodeType ? i[0].getAttribute(e) : t;
                    this.each(function () {
                        1 === this.nodeType && this.setAttribute(e, n)
                    })
                }
                return i
            }, css: function (e, n) {
                var i = this;
                if ("object" == typeof e)h(e, function (e, t) {
                    i.css(t, e)
                }); else {
                    if (e = e.replace(/-(\D)/g, function (e, t) {
                            return t.toUpperCase()
                        }), !r(n))return i[0] ? i[0].style[e] : t;
                    "number" != typeof n || w[e] || (n += "px"), i.each(function () {
                        var t = this.style;
                        "opacity" === e && this.runtimeStyle && "undefined" == typeof this.runtimeStyle.opacity && (t.filter = "" === n ? "" : "alpha(opacity=" + 100 * n + ")");
                        try {
                            t[e] = n
                        } catch (r) {
                        }
                    })
                }
                return i
            }, remove: function () {
                for (var e = this, t, n = this.length; n--;)t = e[n], x.clean(t), t.parentNode && t.parentNode.removeChild(t);
                return this
            }, empty: function () {
                for (var e = this, t, n = this.length; n--;)for (t = e[n]; t.firstChild;)t.removeChild(t.firstChild);
                return this
            }, html: function (e) {
                var t = this, n;
                if (r(e)) {
                    for (n = t.length; n--;)t[n].innerHTML = e;
                    return t
                }
                return t[0] ? t[0].innerHTML : ""
            }, text: function (e) {
                var t = this, n;
                if (r(e)) {
                    for (n = t.length; n--;)t[n].innerText = t[0].textContent = e;
                    return t
                }
                return t[0] ? t[0].innerText || t[0].textContent : ""
            }, append: function () {
                return a(this, arguments, function (e) {
                    1 === this.nodeType && this.appendChild(e)
                })
            }, prepend: function () {
                return a(this, arguments, function (e) {
                    1 === this.nodeType && this.insertBefore(e, this.firstChild)
                })
            }, before: function () {
                var e = this;
                return e[0] && e[0].parentNode ? a(e, arguments, function (e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }) : e
            }, after: function () {
                var e = this;
                return e[0] && e[0].parentNode ? a(e, arguments, function (e) {
                    this.parentNode.insertBefore(e, this)
                }) : e
            }, appendTo: function (e) {
                return c(e).append(this), this
            }, addClass: function (e) {
                return this.toggleClass(e, !0)
            }, removeClass: function (e) {
                return this.toggleClass(e, !1)
            }, toggleClass: function (e, t) {
                var n = this;
                return -1 !== e.indexOf(" ") ? h(e.split(" "), function () {
                    n.toggleClass(this, t)
                }) : n.each(function (n) {
                    var r;
                    s(n, e) !== t && (r = n.className, t ? n.className += r ? " " + e : e : n.className = p((" " + r + " ").replace(" " + e + " ", " ")))
                }), n
            }, hasClass: function (e) {
                return s(this[0], e)
            }, each: function (e) {
                return h(this, e)
            }, on: function (e, t) {
                return this.each(function () {
                    x.bind(this, e, t)
                })
            }, off: function (e, t) {
                return this.each(function () {
                    x.unbind(this, e, t)
                })
            }, show: function () {
                return this.css("display", "")
            }, hide: function () {
                return this.css("display", "none")
            }, slice: function () {
                return new c(b.apply(this, arguments))
            }, eq: function (e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, replaceWith: function (e) {
                var t = this;
                return t[0] && t[0].parentNode.replaceChild(c(e)[0], t[0]), t
            }, wrap: function (e) {
                return e = c(e)[0], this.each(function () {
                    var t = this, n = e.cloneNode(!1);
                    t.parentNode.insertBefore(n, t), n.appendChild(t)
                })
            }, unwrap: function () {
                return this.each(function () {
                    for (var e = this, t = e.firstChild, n; t;)n = t, t = t.nextSibling, e.parentNode.insertBefore(n, e)
                })
            }, clone: function () {
                var e = [];
                return this.each(function () {
                    e.push(this.cloneNode(!0))
                }), c(e)
            }, find: function (e) {
                var t, n, r = [];
                for (t = 0, n = this.length; n > t; t++)c.find(e, this[t], r);
                return c(r)
            }, push: y, sort: [].sort, splice: [].splice
        }, u(c, {
            extend: u,
            toArray: d,
            inArray: f,
            isArray: _,
            each: h,
            trim: p,
            makeMap: l,
            find: n,
            expr: n.selectors,
            unique: n.uniqueSort,
            text: n.getText,
            isXMLDoc: n.isXML,
            contains: n.contains,
            filter: function (e, t, n) {
                return n && (e = ":not(" + e + ")"), t = 1 === t.length ? c.find.matchesSelector(t[0], e) ? [t[0]] : [] : c.find.matches(e, t)
            }
        }), h({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return m(e, "parentNode")
            }, parentsUntil: function (e, t) {
                return m(e, "parentNode", t)
            }, next: function (e) {
                return g(e, "nextSibling", 1)
            }, prev: function (e) {
                return g(e, "previousSibling", 1)
            }, nextNodes: function (e) {
                return g(e, "nextSibling")
            }, prevNodes: function (e) {
                return g(e, "previousSibling")
            }, children: function (e) {
                return g(e.firstChild, "nextSibling", 1)
            }, contents: function (e) {
                return d(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
            }
        }, function (e, t) {
            c.fn[e] = function (n) {
                var r = this, i;
                if (r.length > 1)throw new Error("DomQuery only supports traverse functions on a single node.");
                return r[0] && (i = t(r[0], n)), i = c(i), n && "parentsUntil" !== e ? i.filter(n) : i
            }
        }), c.fn.filter = function (e) {
            return c.filter(e)
        }, c.fn.is = function (e) {
            return !!e && this.filter(e).length > 0
        }, c.fn.init.prototype = c.fn, c
    }), r(d, [], function () {
        return function (e, t) {
            function n(e, t, n, r) {
                function i(e) {
                    return e = parseInt(e, 10).toString(16), e.length > 1 ? e : "0" + e
                }

                return "#" + i(t) + i(n) + i(r)
            }

            var r = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi, i = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi, o = /\s*([^:]+):\s*([^;]+);?/g, a = /\s+$/, s, l, c = {}, u, d = "\ufeff";
            for (e = e || {}, u = ("\\\" \\' \\; \\: ; : " + d).split(" "), l = 0; l < u.length; l++)c[u[l]] = d + l, c[d + l] = u[l];
            return {
                toHex: function (e) {
                    return e.replace(r, n)
                }, parse: function (t) {
                    function s(e, t, n) {
                        var r, i, o, a;
                        if (r = m[e + "-top" + t], r && (i = m[e + "-right" + t], i && (o = m[e + "-bottom" + t], o && (a = m[e + "-left" + t])))) {
                            var s = [r, i, o, a];
                            for (l = s.length - 1; l-- && s[l] === s[l + 1];);
                            l > -1 && n || (m[e + t] = -1 == l ? s[0] : s.join(" "), delete m[e + "-top" + t], delete m[e + "-right" + t], delete m[e + "-bottom" + t], delete m[e + "-left" + t])
                        }
                    }

                    function u(e) {
                        var t = m[e], n;
                        if (t) {
                            for (t = t.split(" "), n = t.length; n--;)if (t[n] !== t[0])return !1;
                            return m[e] = t[0], !0
                        }
                    }

                    function d(e, t, n, r) {
                        u(t) && u(n) && u(r) && (m[e] = m[t] + " " + m[n] + " " + m[r], delete m[t], delete m[n], delete m[r])
                    }

                    function f(e) {
                        return b = !0, c[e]
                    }

                    function p(e, t) {
                        return b && (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                            return c[e]
                        })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                    }

                    function h(t, n, r, i, o, a) {
                        if (o = o || a)return o = p(o), "'" + o.replace(/\'/g, "\\'") + "'";
                        if (n = p(n || r || i), !e.allow_script_urls) {
                            var s = n.replace(/[\s\r\n]+/, "");
                            if (/(java|vb)script:/i.test(s))return "";
                            if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(s))return ""
                        }
                        return C && (n = C.call(x, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')"
                    }

                    var m = {}, g, v, y, b, C = e.url_converter, x = e.url_converter_scope || this;
                    if (t) {
                        for (t = t.replace(/[\u0000-\u001F]/g, ""), t = t.replace(/\\[\"\';:\uFEFF]/g, f).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                            return e.replace(/[;:]/g, f)
                        }); g = o.exec(t);) {
                            if (v = g[1].replace(a, "").toLowerCase(), y = g[2].replace(a, ""), y = y.replace(/\\[0-9a-f]+/g, function (e) {
                                    return String.fromCharCode(parseInt(e.substr(1), 16))
                                }), v && y.length > 0) {
                                if (!e.allow_script_urls && ("behavior" == v || /expression\s*\(|\/\*|\*\//.test(y)))continue;
                                "font-weight" === v && "700" === y ? y = "bold" : ("color" === v || "background-color" === v) && (y = y.toLowerCase()), y = y.replace(r, n), y = y.replace(i, h), m[v] = b ? p(y, !0) : y
                            }
                            o.lastIndex = g.index + g[0].length
                        }
                        s("border", "", !0), s("border", "-width"), s("border", "-color"), s("border", "-style"), s("padding", ""), s("margin", ""), d("border", "border-width", "border-style", "border-color"), "medium none" === m.border && delete m.border, "none" === m["border-image"] && delete m["border-image"]
                    }
                    return m
                }, serialize: function (e, n) {
                    function r(n) {
                        var r, o, a, l;
                        if (r = t.styles[n])for (o = 0, a = r.length; a > o; o++)n = r[o], l = e[n], l !== s && l.length > 0 && (i += (i.length > 0 ? " " : "") + n + ": " + l + ";")
                    }

                    var i = "", o, a;
                    if (n && t && t.styles)r("*"), r(n); else for (o in e)a = e[o], a !== s && a.length > 0 && (i += (i.length > 0 ? " " : "") + o + ": " + a + ";");
                    return i
                }
            }
        }
    }), r(f, [], function () {
        return function (e, t) {
            function n(e, n, r, i) {
                var o, a;
                if (e) {
                    if (!i && e[n])return e[n];
                    if (e != t) {
                        if (o = e[r])return o;
                        for (a = e.parentNode; a && a != t; a = a.parentNode)if (o = a[r])return o
                    }
                }
            }

            var r = e;
            this.current = function () {
                return r
            }, this.next = function (e) {
                return r = n(r, "firstChild", "nextSibling", e)
            }, this.prev = function (e) {
                return r = n(r, "lastChild", "previousSibling", e)
            }
        }
    }), r(p, [], function () {
        function e(e) {
            return null === e || e === t ? "" : ("" + e).replace(m, "")
        }

        function n(e, n) {
            return n ? "array" == n && g(e) ? !0 : typeof e == n : e !== t
        }

        function r(e) {
            var t = [], n, r;
            for (n = 0, r = e.length; r > n; n++)t[n] = e[n];
            return t
        }

        function i(e, t, n) {
            var r;
            for (e = e || [], t = t || ",", "string" == typeof e && (e = e.split(t)), n = n || {}, r = e.length; r--;)n[e[r]] = {};
            return n
        }

        function o(e, n, r) {
            var i, o;
            if (!e)return 0;
            if (r = r || e, e.length !== t) {
                for (i = 0, o = e.length; o > i; i++)if (n.call(r, e[i], i, e) === !1)return 0
            } else for (i in e)if (e.hasOwnProperty(i) && n.call(r, e[i], i, e) === !1)return 0;
            return 1
        }

        function a(e, t) {
            var n = [];
            return o(e, function (e) {
                n.push(t(e))
            }), n
        }

        function s(e, t) {
            var n = [];
            return o(e, function (e) {
                (!t || t(e)) && n.push(e)
            }), n
        }

        function l(e, t, n) {
            var r = this, i, o, a, s, l, c = 0;
            if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), a = e[3].match(/(^|\.)(\w+)$/i)[2], o = r.createNS(e[3].replace(/\.\w+$/, ""), n), !o[a]) {
                if ("static" == e[2])return o[a] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[a]));
                t[a] || (t[a] = function () {
                }, c = 1), o[a] = t[a], r.extend(o[a].prototype, t), e[5] && (i = r.resolve(e[5]).prototype, s = e[5].match(/\.(\w+)$/i)[1], l = o[a], o[a] = c ? function () {
                    return i[s].apply(this, arguments)
                } : function () {
                    return this.parent = i[s], l.apply(this, arguments)
                }, o[a].prototype[a] = o[a], r.each(i, function (e, t) {
                    o[a].prototype[t] = i[t]
                }), r.each(t, function (e, t) {
                    i[t] ? o[a].prototype[t] = function () {
                        return this.parent = i[t], e.apply(this, arguments)
                    } : t != a && (o[a].prototype[t] = e)
                })), r.each(t["static"], function (e, t) {
                    o[a][t] = e
                })
            }
        }

        function c(e, t) {
            var n, r;
            if (e)for (n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
            return -1
        }

        function u(e, n) {
            var r, i, o, a = arguments, s;
            for (r = 1, i = a.length; i > r; r++) {
                n = a[r];
                for (o in n)n.hasOwnProperty(o) && (s = n[o], s !== t && (e[o] = s))
            }
            return e
        }

        function d(e, t, n, r) {
            r = r || this, e && (n && (e = e[n]), o(e, function (e, i) {
                return t.call(r, e, i, n) === !1 ? !1 : void d(e, t, n, r)
            }))
        }

        function f(e, t) {
            var n, r;
            for (t = t || window, e = e.split("."), n = 0; n < e.length; n++)r = e[n], t[r] || (t[r] = {}), t = t[r];
            return t
        }

        function p(e, t) {
            var n, r;
            for (t = t || window, e = e.split("."), n = 0, r = e.length; r > n && (t = t[e[n]], t); n++);
            return t
        }

        function h(t, r) {
            return !t || n(t, "array") ? t : a(t.split(r || ","), e)
        }

        var m = /^\s*|\s*$/g, g = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
        return {
            trim: e,
            isArray: g,
            is: n,
            toArray: r,
            makeMap: i,
            each: o,
            map: a,
            grep: s,
            inArray: c,
            extend: u,
            create: l,
            walk: d,
            createNS: f,
            resolve: p,
            explode: h
        }
    }), r(h, [p], function (e) {
        function t(n) {
            function r() {
                return H.createDocumentFragment()
            }

            function i(e, t) {
                _(F, e, t)
            }

            function o(e, t) {
                _(z, e, t)
            }

            function a(e) {
                i(e.parentNode, j(e))
            }

            function s(e) {
                i(e.parentNode, j(e) + 1)
            }

            function l(e) {
                o(e.parentNode, j(e))
            }

            function c(e) {
                o(e.parentNode, j(e) + 1)
            }

            function u(e) {
                e ? (M[U] = M[V], M[q] = M[W]) : (M[V] = M[U], M[W] = M[q]), M.collapsed = F
            }

            function d(e) {
                a(e), c(e)
            }

            function f(e) {
                i(e, 0), o(e, 1 === e.nodeType ? e.childNodes.length : e.nodeValue.length)
            }

            function p(e, t) {
                var n = M[V], r = M[W], i = M[U], o = M[q], a = t.startContainer, s = t.startOffset, l = t.endContainer, c = t.endOffset;
                return 0 === e ? w(n, r, a, s) : 1 === e ? w(i, o, a, s) : 2 === e ? w(i, o, l, c) : 3 === e ? w(n, r, l, c) : void 0
            }

            function h() {
                N(I)
            }

            function m() {
                return N(P)
            }

            function g() {
                return N(O)
            }

            function v(e) {
                var t = this[V], r = this[W], i, o;
                3 !== t.nodeType && 4 !== t.nodeType || !t.nodeValue ? (t.childNodes.length > 0 && (o = t.childNodes[r]), o ? t.insertBefore(e, o) : 3 == t.nodeType ? n.insertAfter(e, t) : t.appendChild(e)) : r ? r >= t.nodeValue.length ? n.insertAfter(e, t) : (i = t.splitText(r), t.parentNode.insertBefore(e, i)) : t.parentNode.insertBefore(e, t)
            }

            function y(e) {
                var t = M.extractContents();
                M.insertNode(e), e.appendChild(t), M.selectNode(e)
            }

            function b() {
                return $(new t(n), {
                    startContainer: M[V],
                    startOffset: M[W],
                    endContainer: M[U],
                    endOffset: M[q],
                    collapsed: M.collapsed,
                    commonAncestorContainer: M.commonAncestorContainer
                })
            }

            function C(e, t) {
                var n;
                if (3 == e.nodeType)return e;
                if (0 > t)return e;
                for (n = e.firstChild; n && t > 0;)--t, n = n.nextSibling;
                return n ? n : e
            }

            function x() {
                return M[V] == M[U] && M[W] == M[q]
            }

            function w(e, t, r, i) {
                var o, a, s, l, c, u;
                if (e == r)return t == i ? 0 : i > t ? -1 : 1;
                for (o = r; o && o.parentNode != e;)o = o.parentNode;
                if (o) {
                    for (a = 0, s = e.firstChild; s != o && t > a;)a++, s = s.nextSibling;
                    return a >= t ? -1 : 1
                }
                for (o = e; o && o.parentNode != r;)o = o.parentNode;
                if (o) {
                    for (a = 0, s = r.firstChild; s != o && i > a;)a++, s = s.nextSibling;
                    return i > a ? -1 : 1
                }
                for (l = n.findCommonAncestor(e, r), c = e; c && c.parentNode != l;)c = c.parentNode;
                for (c || (c = l), u = r; u && u.parentNode != l;)u = u.parentNode;
                if (u || (u = l), c == u)return 0;
                for (s = l.firstChild; s;) {
                    if (s == c)return -1;
                    if (s == u)return 1;
                    s = s.nextSibling
                }
            }

            function _(e, t, r) {
                var i, o;
                for (e ? (M[V] = t, M[W] = r) : (M[U] = t, M[q] = r), i = M[U]; i.parentNode;)i = i.parentNode;
                for (o = M[V]; o.parentNode;)o = o.parentNode;
                o == i ? w(M[V], M[W], M[U], M[q]) > 0 && M.collapse(e) : M.collapse(e), M.collapsed = x(), M.commonAncestorContainer = n.findCommonAncestor(M[V], M[U])
            }

            function N(e) {
                var t, n = 0, r = 0, i, o, a, s, l, c;
                if (M[V] == M[U])return E(e);
                for (t = M[U], i = t.parentNode; i; t = i, i = i.parentNode) {
                    if (i == M[V])return S(t, e);
                    ++n
                }
                for (t = M[V], i = t.parentNode; i; t = i, i = i.parentNode) {
                    if (i == M[U])return k(t, e);
                    ++r
                }
                for (o = r - n, a = M[V]; o > 0;)a = a.parentNode, o--;
                for (s = M[U]; 0 > o;)s = s.parentNode, o++;
                for (l = a.parentNode, c = s.parentNode; l != c; l = l.parentNode, c = c.parentNode)a = l, s = c;
                return T(a, s, e)
            }

            function E(e) {
                var t, n, i, o, a, s, l, c, u;
                if (e != I && (t = r()), M[W] == M[q])return t;
                if (3 == M[V].nodeType) {
                    if (n = M[V].nodeValue, i = n.substring(M[W], M[q]), e != O && (o = M[V], c = M[W], u = M[q] - M[W], 0 === c && u >= o.nodeValue.length - 1 ? o.parentNode.removeChild(o) : o.deleteData(c, u), M.collapse(F)), e == I)return;
                    return i.length > 0 && t.appendChild(H.createTextNode(i)), t
                }
                for (o = C(M[V], M[W]), a = M[q] - M[W]; o && a > 0;)s = o.nextSibling, l = D(o, e), t && t.appendChild(l), --a, o = s;
                return e != O && M.collapse(F), t
            }

            function S(e, t) {
                var n, i, o, a, s, l;
                if (t != I && (n = r()), i = R(e, t), n && n.appendChild(i), o = j(e), a = o - M[W], 0 >= a)return t != O && (M.setEndBefore(e), M.collapse(z)), n;
                for (i = e.previousSibling; a > 0;)s = i.previousSibling, l = D(i, t), n && n.insertBefore(l, n.firstChild), --a, i = s;
                return t != O && (M.setEndBefore(e), M.collapse(z)), n
            }

            function k(e, t) {
                var n, i, o, a, s, l;
                for (t != I && (n = r()), o = A(e, t), n && n.appendChild(o), i = j(e), ++i, a = M[q] - i, o = e.nextSibling; o && a > 0;)s = o.nextSibling, l = D(o, t), n && n.appendChild(l), --a, o = s;
                return t != O && (M.setStartAfter(e), M.collapse(F)), n
            }

            function T(e, t, n) {
                var i, o, a, s, l, c, u;
                for (n != I && (o = r()), i = A(e, n), o && o.appendChild(i), a = j(e), s = j(t), ++a, l = s - a, c = e.nextSibling; l > 0;)u = c.nextSibling, i = D(c, n), o && o.appendChild(i), c = u, --l;
                return i = R(t, n), o && o.appendChild(i), n != O && (M.setStartAfter(e), M.collapse(F)), o
            }

            function R(e, t) {
                var n = C(M[U], M[q] - 1), r, i, o, a, s, l = n != M[U];
                if (n == e)return B(n, l, z, t);
                for (r = n.parentNode, i = B(r, z, z, t); r;) {
                    for (; n;)o = n.previousSibling, a = B(n, l, z, t), t != I && i.insertBefore(a, i.firstChild), l = F, n = o;
                    if (r == e)return i;
                    n = r.previousSibling, r = r.parentNode, s = B(r, z, z, t), t != I && s.appendChild(i), i = s
                }
            }

            function A(e, t) {
                var n = C(M[V], M[W]), r = n != M[V], i, o, a, s, l;
                if (n == e)return B(n, r, F, t);
                for (i = n.parentNode, o = B(i, z, F, t); i;) {
                    for (; n;)a = n.nextSibling, s = B(n, r, F, t), t != I && o.appendChild(s), r = F, n = a;
                    if (i == e)return o;
                    n = i.nextSibling, i = i.parentNode, l = B(i, z, F, t), t != I && l.appendChild(o), o = l
                }
            }

            function B(e, t, r, i) {
                var o, a, s, l, c;
                if (t)return D(e, i);
                if (3 == e.nodeType) {
                    if (o = e.nodeValue, r ? (l = M[W], a = o.substring(l), s = o.substring(0, l)) : (l = M[q], a = o.substring(0, l), s = o.substring(l)), i != O && (e.nodeValue = s), i == I)return;
                    return c = n.clone(e, z), c.nodeValue = a, c
                }
                if (i != I)return n.clone(e, z)
            }

            function D(e, t) {
                return t != I ? t == O ? n.clone(e, F) : e : void e.parentNode.removeChild(e)
            }

            function L() {
                return n.create("body", null, g()).outerText
            }

            var M = this, H = n.doc, P = 0, O = 1, I = 2, F = !0, z = !1, W = "startOffset", V = "startContainer", U = "endContainer", q = "endOffset", $ = e.extend, j = n.nodeIndex;
            return $(M, {
                startContainer: H,
                startOffset: 0,
                endContainer: H,
                endOffset: 0,
                collapsed: F,
                commonAncestorContainer: H,
                START_TO_START: 0,
                START_TO_END: 1,
                END_TO_END: 2,
                END_TO_START: 3,
                setStart: i,
                setEnd: o,
                setStartBefore: a,
                setStartAfter: s,
                setEndBefore: l,
                setEndAfter: c,
                collapse: u,
                selectNode: d,
                selectNodeContents: f,
                compareBoundaryPoints: p,
                deleteContents: h,
                extractContents: m,
                cloneContents: g,
                insertNode: v,
                surroundContents: y,
                cloneRange: b,
                toStringIE: L
            }), M
        }

        return t.prototype.toString = function () {
            return this.toStringIE()
        }, t
    }), r(m, [p], function (e) {
        function t(e) {
            var t;
            return t = document.createElement("div"), t.innerHTML = e, t.textContent || t.innerText || e
        }

        function n(e, t) {
            var n, r, i, a = {};
            if (e) {
                for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)r = String.fromCharCode(parseInt(e[n], t)), o[r] || (i = "&" + e[n + 1] + ";", a[r] = i, a[i] = r);
                return a
            }
        }

        var r = e.makeMap, i, o, a, s = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = /[<>&\"\']/g, u = /&(#x|#)?([\w]+);/g, d = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        };
        o = {'"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;"}, a = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&apos;": "'"
        }, i = n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
        var f = {
            encodeRaw: function (e, t) {
                return e.replace(t ? s : l, function (e) {
                    return o[e] || e
                })
            }, encodeAllRaw: function (e) {
                return ("" + e).replace(c, function (e) {
                    return o[e] || e
                })
            }, encodeNumeric: function (e, t) {
                return e.replace(t ? s : l, function (e) {
                    return e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : o[e] || "&#" + e.charCodeAt(0) + ";"
                })
            }, encodeNamed: function (e, t, n) {
                return n = n || i, e.replace(t ? s : l, function (e) {
                    return o[e] || n[e] || e
                })
            }, getEncodeFunc: function (e, t) {
                function a(e, n) {
                    return e.replace(n ? s : l, function (e) {
                        return o[e] || t[e] || "&#" + e.charCodeAt(0) + ";" || e
                    })
                }

                function c(e, n) {
                    return f.encodeNamed(e, n, t)
                }

                return t = n(t) || i, e = r(e.replace(/\+/g, ",")), e.named && e.numeric ? a : e.named ? t ? c : f.encodeNamed : e.numeric ? f.encodeNumeric : f.encodeRaw
            }, decode: function (e) {
                return e.replace(u, function (e, n, r) {
                    return n ? (r = parseInt(r, 2 === n.length ? 16 : 10), r > 65535 ? (r -= 65536, String.fromCharCode(55296 + (r >> 10), 56320 + (1023 & r))) : d[r] || String.fromCharCode(r)) : a[e] || i[e] || t(e)
                })
            }
        };
        return f
    }), r(g, [], function () {
        var e = navigator, t = e.userAgent, n, r, i, o, a, s, l;
        n = window.opera && window.opera.buildNumber, r = /WebKit/.test(t), i = !r && !n && /MSIE/gi.test(t) && /Explorer/gi.test(e.appName), i = i && /MSIE (\w+)\./.exec(t)[1], o = -1 == t.indexOf("Trident/") || -1 == t.indexOf("rv:") && -1 == e.appName.indexOf("Netscape") ? !1 : 11, i = i || o, a = !r && !o && /Gecko/.test(t), s = -1 != t.indexOf("Mac"), l = /(iPad|iPhone)/.test(t);
        var c = !l || t.match(/AppleWebKit\/(\d*)/)[1] >= 534;
        return {
            opera: n,
            webkit: r,
            ie: i,
            gecko: a,
            mac: s,
            iOS: l,
            contentEditable: c,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 != i,
            range: window.getSelection && "Range"in window,
            documentMode: i ? document.documentMode || 7 : 10
        }
    }), r(v, [], function () {
        return function (e, t) {
            function n(t) {
                e.getElementsByTagName("head")[0].appendChild(t)
            }

            function r(t, r, s) {
                function l() {
                    for (var e = v.passed, t = e.length; t--;)e[t]();
                    v.status = 2, v.passed = [], v.failed = []
                }

                function c() {
                    for (var e = v.failed, t = e.length; t--;)e[t]();
                    v.status = 3, v.passed = [], v.failed = []
                }

                function u() {
                    var e = navigator.userAgent.match(/WebKit\/(\d*)/);
                    return !!(e && e[1] < 536)
                }

                function d(e, t) {
                    e() || ((new Date).getTime() - g < a ? window.setTimeout(t, 0) : c())
                }

                function f() {
                    d(function () {
                        for (var t = e.styleSheets, n, r = t.length, i; r--;)if (n = t[r], i = n.ownerNode ? n.ownerNode : n.owningElement, i && i.id === h.id)return l(), !0
                    }, f)
                }

                function p() {
                    d(function () {
                        try {
                            var e = m.sheet.cssRules;
                            return l(), !!e
                        } catch (t) {
                        }
                    }, p)
                }

                var h, m, g, v;
                if (o[t] ? v = o[t] : (v = {
                        passed: [],
                        failed: []
                    }, o[t] = v), r && v.passed.push(r), s && v.failed.push(s), 1 != v.status) {
                    if (2 == v.status)return void l();
                    if (3 == v.status)return void c();
                    if (v.status = 1, h = e.createElement("link"), h.rel = "stylesheet", h.type = "text/css", h.id = "u" + i++, h.async = !1, h.defer = !1, g = (new Date).getTime(), "onload"in h && !u())h.onload = f, h.onerror = c; else {
                        if (navigator.userAgent.indexOf("Firefox") > 0)return m = e.createElement("style"), m.textContent = '@import "' + t + '"', p(), void n(m);
                        f()
                    }
                    n(h), h.href = t
                }
            }

            var i = 0, o = {}, a;
            t = t || {}, a = t.maxLoadTime || 5e3, this.load = r
        }
    }), r(y, [c, d, l, f, h, m, g, p, v], function (e, n, r, i, o, a, s, l, c) {
        function u(e, t) {
            var i = this, o;
            i.doc = e, i.win = window, i.files = {}, i.counter = 0, i.stdMode = !v || e.documentMode >= 8, i.boxModel = !v || "CSS1Compat" == e.compatMode || i.stdMode, i.hasOuterHTML = "outerHTML"in e.createElement("a"), i.styleSheetLoader = new c(e), this.boundEvents = [], i.settings = t = m({
                keep_values: !1,
                hex_colors: 1
            }, t), i.schema = t.schema, i.styles = new n({
                url_converter: t.url_converter,
                url_converter_scope: t.url_converter_scope
            }, t.schema), i.fixDoc(e), i.events = t.ownEvents ? new r(t.proxy) : r.Event, o = t.schema ? t.schema.getBlockElements() : {}, i.isBlock = function (e) {
                if (!e)return !1;
                var t = e.nodeType;
                return t ? !(1 !== t || !o[e.nodeName]) : !!o[e]
            }
        }

        var d = l.each, f = l.is, p = l.grep, h = l.trim, m = l.extend, g = s.webkit, v = s.ie, y = /^([a-z0-9],?)+$/i, b = /^[ \t\r\n]*$/, C = l.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " ");
        return u.prototype = {
            root: null,
            props: {
                "for": "htmlFor",
                "class": "className",
                className: "className",
                checked: "checked",
                disabled: "disabled",
                maxlength: "maxLength",
                readonly: "readOnly",
                selected: "selected",
                value: "value",
                id: "id",
                name: "name",
                type: "type"
            },
            fixDoc: function (e) {
                var t = this.settings, n;
                if (v && t.schema) {
                    "abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g, function (t) {
                        e.createElement(t)
                    });
                    for (n in t.schema.getCustomElements())e.createElement(n)
                }
            },
            clone: function (e, t) {
                var n = this, r, i;
                return !v || 1 !== e.nodeType || t ? e.cloneNode(t) : (i = n.doc, t ? r.firstChild : (r = i.createElement(e.nodeName), d(n.getAttribs(e), function (t) {
                    n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName))
                }), r))
            },
            getRoot: function () {
                var e = this;
                return e.get(e.settings.root_element) || e.doc.body
            },
            getViewPort: function (e) {
                var t, n;
                return e = e ? e : this.win, t = e.document, n = this.boxModel ? t.documentElement : t.body, {
                    x: e.pageXOffset || n.scrollLeft,
                    y: e.pageYOffset || n.scrollTop,
                    w: e.innerWidth || n.clientWidth,
                    h: e.innerHeight || n.clientHeight
                }
            },
            getRect: function (e) {
                var t = this, n, r;
                return e = t.get(e), n = t.getPos(e), r = t.getSize(e), {x: n.x, y: n.y, w: r.w, h: r.h}
            },
            getSize: function (e) {
                var t = this, n, r;
                return e = t.get(e), n = t.getStyle(e, "width"), r = t.getStyle(e, "height"), -1 === n.indexOf("px") && (n = 0), -1 === r.indexOf("px") && (r = 0), {
                    w: parseInt(n, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(r, 10) || e.offsetHeight || e.clientHeight
                }
            },
            getParent: function (e, t, n) {
                return this.getParents(e, t, n, !1)
            },
            getParents: function (e, n, r, i) {
                var o = this, a, s = [];
                for (e = o.get(e), i = i === t, r = r || ("BODY" != o.getRoot().nodeName ? o.getRoot().parentNode : null), f(n, "string") && (a = n, n = "*" === n ? function (e) {
                    return 1 == e.nodeType
                } : function (e) {
                    return o.is(e, a)
                }); e && e != r && e.nodeType && 9 !== e.nodeType;) {
                    if (!n || n(e)) {
                        if (!i)return e;
                        s.push(e)
                    }
                    e = e.parentNode
                }
                return i ? s : null
            },
            get: function (e) {
                var t;
                return e && this.doc && "string" == typeof e && (t = e, e = this.doc.getElementById(e), e && e.id !== t) ? this.doc.getElementsByName(t)[1] : e
            },
            getNext: function (e, t) {
                return this._findSib(e, t, "nextSibling")
            },
            getPrev: function (e, t) {
                return this._findSib(e, t, "previousSibling")
            },
            select: function (t, n) {
                var r = this;
                return e(t, r.get(n) || r.get(r.settings.root_element) || r.doc, [])
            },
            is: function (n, r) {
                var i;
                if (n.length === t) {
                    if ("*" === r)return 1 == n.nodeType;
                    if (y.test(r)) {
                        for (r = r.toLowerCase().split(/,/), n = n.nodeName.toLowerCase(), i = r.length - 1; i >= 0; i--)if (r[i] == n)return !0;
                        return !1
                    }
                }
                if (n.nodeType && 1 != n.nodeType)return !1;
                var o = n.nodeType ? [n] : n;
                return e(r, o[0].ownerDocument || o[0], null, o).length > 0
            },
            add: function (e, t, n, r, i) {
                var o = this;
                return this.run(e, function (e) {
                    var a;
                    return a = f(t, "string") ? o.doc.createElement(t) : t, o.setAttribs(a, n), r && (r.nodeType ? a.appendChild(r) : o.setHTML(a, r)), i ? a : e.appendChild(a)
                })
            },
            create: function (e, t, n) {
                return this.add(this.doc.createElement(e), e, t, n, 1)
            },
            createHTML: function (e, t, n) {
                var r = "", i;
                r += "<" + e;
                for (i in t)t.hasOwnProperty(i) && null !== t[i] && (r += " " + i + '="' + this.encode(t[i]) + '"');
                return "undefined" != typeof n ? r + ">" + n + "</" + e + ">" : r + " />"
            },
            createFragment: function (e) {
                var t, n, r = this.doc, i;
                for (i = r.createElement("div"), t = r.createDocumentFragment(), e && (i.innerHTML = e); n = i.firstChild;)t.appendChild(n);
                return t
            },
            remove: function (e, t) {
                return this.run(e, function (e) {
                    var n, r = e.parentNode;
                    if (!r)return null;
                    if (t)for (; n = e.firstChild;)!v || 3 !== n.nodeType || n.nodeValue ? r.insertBefore(n, e) : e.removeChild(n);
                    return r.removeChild(e)
                })
            },
            setStyle: function (e, t, n) {
                return this.run(e, function (e) {
                    var r = this, i, o;
                    if (t)if ("string" == typeof t) {
                        i = e.style, t = t.replace(/-(\D)/g, function (e, t) {
                            return t.toUpperCase()
                        }), "number" != typeof n || C[t] || (n += "px"), "opacity" === t && e.runtimeStyle && "undefined" == typeof e.runtimeStyle.opacity && (i.filter = "" === n ? "" : "alpha(opacity=" + 100 * n + ")"), "float" == t && (t = "cssFloat"in e.style ? "cssFloat" : "styleFloat");
                        try {
                            i[t] = n
                        } catch (a) {
                        }
                        r.settings.update_styles && e.removeAttribute("data-mce-style")
                    } else for (o in t)r.setStyle(e, o, t[o])
                })
            },
            getStyle: function (e, n, r) {
                if (e = this.get(e)) {
                    if (this.doc.defaultView && r) {
                        n = n.replace(/[A-Z]/g, function (e) {
                            return "-" + e
                        });
                        try {
                            return this.doc.defaultView.getComputedStyle(e, null).getPropertyValue(n)
                        } catch (i) {
                            return null
                        }
                    }
                    return n = n.replace(/-(\D)/g, function (e, t) {
                        return t.toUpperCase()
                    }), "float" == n && (n = v ? "styleFloat" : "cssFloat"), e.currentStyle && r ? e.currentStyle[n] : e.style ? e.style[n] : t
                }
            },
            setStyles: function (e, t) {
                this.setStyle(e, t)
            },
            css: function (e, t, n) {
                this.setStyle(e, t, n)
            },
            removeAllAttribs: function (e) {
                return this.run(e, function (e) {
                    var t, n = e.attributes;
                    for (t = n.length - 1; t >= 0; t--)e.removeAttributeNode(n.item(t))
                })
            },
            setAttrib: function (e, t, n) {
                var r = this;
                if (e && t)return this.run(e, function (e) {
                    var i = r.settings, o = e.getAttribute(t);
                    if (null !== n)switch (t) {
                        case"style":
                            if (!f(n, "string"))return void d(n, function (t, n) {
                                r.setStyle(e, n, t)
                            });
                            i.keep_values && (n ? e.setAttribute("data-mce-style", n, 2) : e.removeAttribute("data-mce-style", 2)), e.style.cssText = n;
                            break;
                        case"class":
                            e.className = n || "";
                            break;
                        case"src":
                        case"href":
                            i.keep_values && (i.url_converter && (n = i.url_converter.call(i.url_converter_scope || r, n, t, e)), r.setAttrib(e, "data-mce-" + t, n, 2));
                            break;
                        case"shape":
                            e.setAttribute("data-mce-style", n)
                    }
                    f(n) && null !== n && 0 !== n.length ? e.setAttribute(t, "" + n, 2) : e.removeAttribute(t, 2), o != n && i.onSetAttrib && i.onSetAttrib({
                        attrElm: e,
                        attrName: t,
                        attrValue: n
                    })
                })
            },
            setAttribs: function (e, t) {
                var n = this;
                return this.run(e, function (e) {
                    d(t, function (t, r) {
                        n.setAttrib(e, r, t)
                    })
                })
            },
            getAttrib: function (e, t, n) {
                var r, i = this, o;
                if (e = i.get(e), !e || 1 !== e.nodeType)return n === o ? !1 : n;
                if (f(n) || (n = ""), /^(src|href|style|coords|shape)$/.test(t) && (r = e.getAttribute("data-mce-" + t)))return r;
                if (v && i.props[t] && (r = e[i.props[t]], r = r && r.nodeValue ? r.nodeValue : r), r || (r = e.getAttribute(t, 2)), /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noshade|nowrap|readonly|selected)$/.test(t))return e[i.props[t]] === !0 && "" === r ? t : r ? t : "";
                if ("FORM" === e.nodeName && e.getAttributeNode(t))return e.getAttributeNode(t).nodeValue;
                if ("style" === t && (r = r || e.style.cssText, r && (r = i.serializeStyle(i.parseStyle(r), e.nodeName), i.settings.keep_values && e.setAttribute("data-mce-style", r))), g && "class" === t && r && (r = r.replace(/(apple|webkit)\-[a-z\-]+/gi, "")), v)switch (t) {
                    case"rowspan":
                    case"colspan":
                        1 === r && (r = "");
                        break;
                    case"size":
                        ("+0" === r || 20 === r || 0 === r) && (r = "");
                        break;
                    case"width":
                    case"height":
                    case"vspace":
                    case"checked":
                    case"disabled":
                    case"readonly":
                        0 === r && (r = "");
                        break;
                    case"hspace":
                        -1 === r && (r = "");
                        break;
                    case"maxlength":
                    case"tabindex":
                        (32768 === r || 2147483647 === r || "32768" === r) && (r = "");
                        break;
                    case"multiple":
                    case"compact":
                    case"noshade":
                    case"nowrap":
                        return 65535 === r ? t : n;
                    case"shape":
                        r = r.toLowerCase();
                        break;
                    default:
                        0 === t.indexOf("on") && r && (r = ("" + r).replace(/^function\s+\w+\(\)\s+\{\s+(.*)\s+\}$/, "$1"))
                }
                return r !== o && null !== r && "" !== r ? "" + r : n
            },
            getPos: function (e, t) {
                var n = this, r = 0, i = 0, o, a = n.doc, s;
                if (e = n.get(e), t = t || a.body, e) {
                    if (t === a.body && e.getBoundingClientRect)return s = e.getBoundingClientRect(), t = n.boxModel ? a.documentElement : a.body, r = s.left + (a.documentElement.scrollLeft || a.body.scrollLeft) - t.clientLeft, i = s.top + (a.documentElement.scrollTop || a.body.scrollTop) - t.clientTop, {
                        x: r,
                        y: i
                    };
                    for (o = e; o && o != t && o.nodeType;)r += o.offsetLeft || 0, i += o.offsetTop || 0, o = o.offsetParent;
                    for (o = e.parentNode; o && o != t && o.nodeType;)r -= o.scrollLeft || 0, i -= o.scrollTop || 0, o = o.parentNode
                }
                return {x: r, y: i}
            },
            parseStyle: function (e) {
                return this.styles.parse(e)
            },
            serializeStyle: function (e, t) {
                return this.styles.serialize(e, t)
            },
            addStyle: function (e) {
                var t = this, n = t.doc, r, i;
                if (t !== u.DOM && n === document) {
                    var o = u.DOM.addedStyles;
                    if (o = o || [], o[e])return;
                    o[e] = !0, u.DOM.addedStyles = o
                }
                i = n.getElementById("mceDefaultStyles"), i || (i = n.createElement("style"), i.id = "mceDefaultStyles", i.type = "text/css", r = n.getElementsByTagName("head")[0], r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i)), i.styleSheet ? i.styleSheet.cssText += e : i.appendChild(n.createTextNode(e))
            },
            loadCSS: function (e) {
                var t = this, n = t.doc, r;
                return t !== u.DOM && n === document ? void u.DOM.loadCSS(e) : (e || (e = ""), r = n.getElementsByTagName("head")[0], void d(e.split(","), function (e) {
                    var i;
                    t.files[e] || (t.files[e] = !0, i = t.create("link", {
                        rel: "stylesheet",
                        href: e
                    }), v && n.documentMode && n.recalc && (i.onload = function () {
                        n.recalc && n.recalc(), i.onload = null
                    }), r.appendChild(i))
                }))
            },
            addClass: function (e, t) {
                return this.run(e, function (e) {
                    var n;
                    return t ? this.hasClass(e, t) ? e.className : (n = this.removeClass(e, t), e.className = n = ("" !== n ? n + " " : "") + t, n) : 0
                })
            },
            removeClass: function (e, t) {
                var n = this, r;
                return n.run(e, function (e) {
                    var i;
                    return n.hasClass(e, t) ? (r || (r = new RegExp("(^|\\s+)" + t + "(\\s+|$)", "g")), i = e.className.replace(r, " "), i = h(" " != i ? i : ""), e.className = i, i || (e.removeAttribute("class"), e.removeAttribute("className")), i) : e.className
                })
            },
            hasClass: function (e, t) {
                return e = this.get(e), e && t ? -1 !== (" " + e.className + " ").indexOf(" " + t + " ") : !1
            },
            toggleClass: function (e, n, r) {
                r = r === t ? !this.hasClass(e, n) : r, this.hasClass(e, n) !== r && (r ? this.addClass(e, n) : this.removeClass(e, n))
            },
            show: function (e) {
                return this.setStyle(e, "display", "block")
            },
            hide: function (e) {
                return this.setStyle(e, "display", "none")
            },
            isHidden: function (e) {
                return e = this.get(e), !e || "none" == e.style.display || "none" == this.getStyle(e, "display")
            },
            uniqueId: function (e) {
                return (e ? e : "mce_") + this.counter++
            },
            setHTML: function (e, t) {
                var n = this;
                return n.run(e, function (e) {
                    if (v) {
                        for (; e.firstChild;)e.removeChild(e.firstChild);
                        try {
                            e.innerHTML = "<br />" + t, e.removeChild(e.firstChild)
                        } catch (r) {
                            var i = n.create("div");
                            i.innerHTML = "<br />" + t, d(p(i.childNodes), function (t, n) {
                                n && e.canHaveHTML && e.appendChild(t)
                            })
                        }
                    } else e.innerHTML = t;
                    return t
                })
            },
            getOuterHTML: function (e) {
                var t, n = this;
                return (e = n.get(e)) ? 1 === e.nodeType && n.hasOuterHTML ? e.outerHTML : (t = (e.ownerDocument || n.doc).createElement("body"), t.appendChild(e.cloneNode(!0)), t.innerHTML) : null
            },
            setOuterHTML: function (e, t, n) {
                var r = this;
                return r.run(e, function (e) {
                    function i() {
                        var i, o;
                        for (o = n.createElement("body"), o.innerHTML = t, i = o.lastChild; i;)r.insertAfter(i.cloneNode(!0), e), i = i.previousSibling;
                        r.remove(e)
                    }

                    if (1 == e.nodeType)if (n = n || e.ownerDocument || r.doc, v)try {
                        1 == e.nodeType && r.hasOuterHTML ? e.outerHTML = t : i()
                    } catch (o) {
                        i()
                    } else i()
                })
            },
            decode: a.decode,
            encode: a.encodeAllRaw,
            insertAfter: function (e, t) {
                return t = this.get(t), this.run(e, function (e) {
                    var n, r;
                    return n = t.parentNode, r = t.nextSibling, r ? n.insertBefore(e, r) : n.appendChild(e), e
                })
            },
            replace: function (e, t, n) {
                var r = this;
                return r.run(t, function (t) {
                    return f(t, "array") && (e = e.cloneNode(!0)), n && d(p(t.childNodes), function (t) {
                        e.appendChild(t)
                    }), t.parentNode.replaceChild(e, t)
                })
            },
            rename: function (e, t) {
                var n = this, r;
                return e.nodeName != t.toUpperCase() && (r = n.create(t), d(n.getAttribs(e), function (t) {
                    n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName))
                }), n.replace(r, e, 1)), r || e
            },
            findCommonAncestor: function (e, t) {
                for (var n = e, r; n;) {
                    for (r = t; r && n != r;)r = r.parentNode;
                    if (n == r)break;
                    n = n.parentNode
                }
                return !n && e.ownerDocument ? e.ownerDocument.documentElement : n
            },
            toHex: function (e) {
                return this.styles.toHex(l.trim(e))
            },
            run: function (e, t, n) {
                var r = this, i;
                return "string" == typeof e && (e = r.get(e)), e ? (n = n || this, e.nodeType || !e.length && 0 !== e.length ? t.call(n, e) : (i = [], d(e, function (e, o) {
                    e && ("string" == typeof e && (e = r.get(e)), i.push(t.call(n, e, o)))
                }), i)) : !1
            },
            getAttribs: function (e) {
                var t;
                if (e = this.get(e), !e)return [];
                if (v) {
                    if (t = [], "OBJECT" == e.nodeName)return e.attributes;
                    "OPTION" === e.nodeName && this.getAttrib(e, "selected") && t.push({
                        specified: 1,
                        nodeName: "selected"
                    });
                    var n = /<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;
                    return e.cloneNode(!1).outerHTML.replace(n, "").replace(/[\w:\-]+/gi, function (e) {
                        t.push({specified: 1, nodeName: e})
                    }), t
                }
                return e.attributes
            },
            isEmpty: function (e, t) {
                var n = this, r, o, a, s, l, c = 0;
                if (e = e.firstChild) {
                    s = new i(e, e.parentNode), t = t || n.schema ? n.schema.getNonEmptyElements() : null;
                    do {
                        if (a = e.nodeType, 1 === a) {
                            if (e.getAttribute("data-mce-bogus"))continue;
                            if (l = e.nodeName.toLowerCase(), t && t[l]) {
                                if ("br" === l) {
                                    c++;
                                    continue
                                }
                                return !1
                            }
                            for (o = n.getAttribs(e), r = o.length; r--;)if (l = o[r].nodeName, "name" === l || "data-mce-bookmark" === l)return !1
                        }
                        if (8 == a)return !1;
                        if (3 === a && !b.test(e.nodeValue))return !1
                    } while (e = s.next())
                }
                return 1 >= c
            },
            createRng: function () {
                var e = this.doc;
                return e.createRange ? e.createRange() : new o(this)
            },
            nodeIndex: function (e, t) {
                var n = 0, r, i;
                if (e)for (r = e.nodeType, e = e.previousSibling; e; e = e.previousSibling)i = e.nodeType, (!t || 3 != i || i != r && e.nodeValue.length) && (n++, r = i);
                return n
            },
            split: function (e, t, n) {
                function r(e) {
                    function t(e) {
                        var t = e.previousSibling && "SPAN" == e.previousSibling.nodeName, n = e.nextSibling && "SPAN" == e.nextSibling.nodeName;
                        return t && n
                    }

                    var n, o = e.childNodes, a = e.nodeType;
                    if (1 != a || "bookmark" != e.getAttribute("data-mce-type")) {
                        for (n = o.length - 1; n >= 0; n--)r(o[n]);
                        if (9 != a) {
                            if (3 == a && e.nodeValue.length > 0) {
                                var s = h(e.nodeValue).length;
                                if (!i.isBlock(e.parentNode) || s > 0 || 0 === s && t(e))return
                            } else if (1 == a && (o = e.childNodes, 1 == o.length && o[0] && 1 == o[0].nodeType && "bookmark" == o[0].getAttribute("data-mce-type") && e.parentNode.insertBefore(o[0], e), o.length || /^(br|hr|input|img)$/i.test(e.nodeName)))return;
                            i.remove(e)
                        }
                        return e
                    }
                }

                var i = this, o = i.createRng(), a, s, l;
                return e && t ? (o.setStart(e.parentNode, i.nodeIndex(e)), o.setEnd(t.parentNode, i.nodeIndex(t)), a = o.extractContents(), o = i.createRng(), o.setStart(t.parentNode, i.nodeIndex(t) + 1), o.setEnd(e.parentNode, i.nodeIndex(e) + 1), s = o.extractContents(), l = e.parentNode, l.insertBefore(r(a), e), n ? l.replaceChild(n, t) : l.insertBefore(t, e), l.insertBefore(r(s), e), i.remove(e), n || t) : void 0
            },
            bind: function (e, t, n, r) {
                var i = this;
                if (l.isArray(e)) {
                    for (var o = e.length; o--;)e[o] = i.bind(e[o], t, n, r);
                    return e
                }
                return !i.settings.collect || e !== i.doc && e !== i.win || i.boundEvents.push([e, t, n, r]), i.events.bind(e, t, n, r || i)
            },
            unbind: function (e, t, n) {
                var r = this, i;
                if (l.isArray(e)) {
                    for (i = e.length; i--;)e[i] = r.unbind(e[i], t, n);
                    return e
                }
                if (r.boundEvents && (e === r.doc || e === r.win))for (i = r.boundEvents.length; i--;) {
                    var o = r.boundEvents[i];
                    e != o[0] || t && t != o[1] || n && n != o[2] || this.events.unbind(o[0], o[1], o[2])
                }
                return this.events.unbind(e, t, n)
            },
            fire: function (e, t, n) {
                return this.events.fire(e, t, n)
            },
            getContentEditable: function (e) {
                var t;
                return e && 1 == e.nodeType ? (t = e.getAttribute("data-mce-contenteditable"), t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null) : null
            },
            getContentEditableParent: function (e) {
                for (var t = this.getRoot(), n = null; e && e !== t && (n = this.getContentEditable(e), null === n); e = e.parentNode);
                return n
            },
            destroy: function () {
                var t = this;
                if (t.boundEvents) {
                    for (var n = t.boundEvents.length; n--;) {
                        var r = t.boundEvents[n];
                        this.events.unbind(r[0], r[1], r[2])
                    }
                    t.boundEvents = null
                }
                e.setDocument && e.setDocument(), t.win = t.doc = t.root = t.events = t.frag = null
            },
            isChildOf: function (e, t) {
                for (; e;) {
                    if (t === e)return !0;
                    e = e.parentNode
                }
                return !1
            },
            dumpRng: function (e) {
                return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
            },
            _findSib: function (e, t, n) {
                var r = this, i = t;
                if (e)for ("string" == typeof i && (i = function (e) {
                    return r.is(e, t)
                }), e = e[n]; e; e = e[n])if (i(e))return e;
                return null
            }
        }, u.DOM = new u(document), u
    }), r(b, [y, p], function (e, t) {
        function n() {
            function e(e, t) {
                function n() {
                    o.remove(s), a && (a.onreadystatechange = a.onload = a = null), t()
                }

                function i() {
                    "undefined" != typeof console && console.log && console.log("Failed to load: " + e)
                }

                var o = r, a, s;
                s = o.uniqueId(), a = document.createElement("script"), a.id = s, a.type = "text/javascript", a.src = e, "onreadystatechange"in a ? a.onreadystatechange = function () {
                    /loaded|complete/.test(a.readyState) && n()
                } : a.onload = n, a.onerror = i, (document.getElementsByTagName("head")[0] || document.body).appendChild(a)
            }

            var t = 0, n = 1, a = 2, s = {}, l = [], c = {}, u = [], d = 0, f;
            this.isDone = function (e) {
                return s[e] == a
            }, this.markDone = function (e) {
                s[e] = a
            }, this.add = this.load = function (e, n, r) {
                var i = s[e];
                i == f && (l.push(e), s[e] = t), n && (c[e] || (c[e] = []), c[e].push({func: n, scope: r || this}))
            }, this.loadQueue = function (e, t) {
                this.loadScripts(l, e, t)
            }, this.loadScripts = function (t, r, l) {
                function p(e) {
                    i(c[e], function (e) {
                        e.func.call(e.scope)
                    }), c[e] = f
                }

                var h;
                u.push({func: r, scope: l || this}), (h = function () {
                    var r = o(t);
                    t.length = 0, i(r, function (t) {
                        return s[t] == a ? void p(t) : void(s[t] != n && (s[t] = n, d++, e(t, function () {
                            s[t] = a, d--, p(t), h()
                        })))
                    }), d || (i(u, function (e) {
                        e.func.call(e.scope)
                    }), u.length = 0)
                })()
            }
        }

        var r = e.DOM, i = t.each, o = t.grep;
        return n.ScriptLoader = new n, n
    }), r(C, [b, p], function (e, n) {
        function r() {
            var e = this;
            e.items = [], e.urls = {}, e.lookup = {}
        }

        var i = n.each;
        return r.prototype = {
            get: function (e) {
                return this.lookup[e] ? this.lookup[e].instance : t
            }, dependencies: function (e) {
                var t;
                return this.lookup[e] && (t = this.lookup[e].dependencies), t || []
            }, requireLangPack: function (t, n) {
                var i = r.language;
                if (i && r.languageLoad !== !1) {
                    if (n)if (n = "," + n + ",", -1 != n.indexOf("," + i.substr(0, 2) + ","))i = i.substr(0, 2); else if (-1 == n.indexOf("," + i + ","))return;
                    e.ScriptLoader.add(this.urls[t] + "/langs/" + i + ".js")
                }
            }, add: function (e, t, n) {
                return this.items.push(t), this.lookup[e] = {instance: t, dependencies: n}, t
            }, createUrl: function (e, t) {
                return "object" == typeof t ? t : {prefix: e.prefix, resource: t, suffix: e.suffix}
            }, addComponents: function (t, n) {
                var r = this.urls[t];
                i(n, function (t) {
                    e.ScriptLoader.add(r + "/" + t)
                })
            }, load: function (n, o, a, s) {
                function l() {
                    var r = c.dependencies(n);
                    i(r, function (e) {
                        var n = c.createUrl(o, e);
                        c.load(n.resource, n, t, t)
                    }), a && a.call(s ? s : e)
                }

                var c = this, u = o;
                c.urls[n] || ("object" == typeof o && (u = o.prefix + o.resource + o.suffix), 0 !== u.indexOf("/") && -1 == u.indexOf("://") && (u = r.baseURL + "/" + u), c.urls[n] = u.substring(0, u.lastIndexOf("/")), c.lookup[n] ? l() : e.ScriptLoader.add(u, l, s))
            }
        }, r.PluginManager = new r, r.ThemeManager = new r, r
    }), r(x, [], function () {
        function e(e, t, n) {
            var r, i, o = n ? "lastChild" : "firstChild", a = n ? "prev" : "next";
            if (e[o])return e[o];
            if (e !== t) {
                if (r = e[a])return r;
                for (i = e.parent; i && i !== t; i = i.parent)if (r = i[a])return r
            }
        }

        function t(e, t) {
            this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {})
        }

        var n = /^[ \t\r\n]*$/, r = {
            "#text": 3,
            "#comment": 8,
            "#cdata": 4,
            "#pi": 7,
            "#doctype": 10,
            "#document-fragment": 11
        };
        return t.prototype = {
            replace: function (e) {
                var t = this;
                return e.parent && e.remove(), t.insert(e, t), t.remove(), t
            }, attr: function (e, t) {
                var n = this, r, i, o;
                if ("string" != typeof e) {
                    for (i in e)n.attr(i, e[i]);
                    return n
                }
                if (r = n.attributes) {
                    if (t !== o) {
                        if (null === t) {
                            if (e in r.map)for (delete r.map[e], i = r.length; i--;)if (r[i].name === e)return r = r.splice(i, 1), n;
                            return n
                        }
                        if (e in r.map) {
                            for (i = r.length; i--;)if (r[i].name === e) {
                                r[i].value = t;
                                break
                            }
                        } else r.push({name: e, value: t});
                        return r.map[e] = t, n
                    }
                    return r.map[e]
                }
            }, clone: function () {
                var e = this, n = new t(e.name, e.type), r, i, o, a, s;
                if (o = e.attributes) {
                    for (s = [], s.map = {}, r = 0, i = o.length; i > r; r++)a = o[r], "id" !== a.name && (s[s.length] = {
                        name: a.name,
                        value: a.value
                    }, s.map[a.name] = a.value);
                    n.attributes = s
                }
                return n.value = e.value, n.shortEnded = e.shortEnded, n
            }, wrap: function (e) {
                var t = this;
                return t.parent.insert(e, t), e.append(t), t
            }, unwrap: function () {
                var e = this, t, n;
                for (t = e.firstChild; t;)n = t.next, e.insert(t, e, !0), t = n;
                e.remove()
            }, remove: function () {
                var e = this, t = e.parent, n = e.next, r = e.prev;
                return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : r.next = n, t.lastChild === e ? (t.lastChild = r, r && (r.next = null)) : n.prev = r, e.parent = e.next = e.prev = null), e
            }, append: function (e) {
                var t = this, n;
                return e.parent && e.remove(), n = t.lastChild, n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, e.parent = t, e
            }, insert: function (e, t, n) {
                var r;
                return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, e.next = t, t.prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, e.prev = t, t.next = e), e.parent = r, e
            }, getAll: function (t) {
                var n = this, r, i = [];
                for (r = n.firstChild; r; r = e(r, n))r.name === t && i.push(r);
                return i
            }, empty: function () {
                var t = this, n, r, i;
                if (t.firstChild) {
                    for (n = [], i = t.firstChild; i; i = e(i, t))n.push(i);
                    for (r = n.length; r--;)i = n[r], i.parent = i.firstChild = i.lastChild = i.next = i.prev = null
                }
                return t.firstChild = t.lastChild = null, t
            }, isEmpty: function (t) {
                var r = this, i = r.firstChild, o, a;
                if (i)do {
                    if (1 === i.type) {
                        if (i.attributes.map["data-mce-bogus"])continue;
                        if (t[i.name])return !1;
                        for (o = i.attributes.length; o--;)if (a = i.attributes[o].name, "name" === a || 0 === a.indexOf("data-mce-"))return !1
                    }
                    if (8 === i.type)return !1;
                    if (3 === i.type && !n.test(i.value))return !1
                } while (i = e(i, r));
                return !0
            }, walk: function (t) {
                return e(this, null, t)
            }
        }, t.create = function (e, n) {
            var i, o;
            if (i = new t(e, r[e] || 1), n)for (o in n)i.attr(o, n[o]);
            return i
        }, t
    }), r(w, [p], function (e) {
        function t(e, t) {
            return e ? e.split(t || " ") : []
        }

        function n(e) {
            function n(e, n, r) {
                function i(e) {
                    var t = {}, n, r;
                    for (n = 0, r = e.length; r > n; n++)t[e[n]] = {};
                    return t
                }

                var o, l, c, u = arguments;
                for (r = r || [], n = n || "", "string" == typeof r && (r = t(r)), l = 3; l < u.length; l++)"string" == typeof u[l] && (u[l] = t(u[l])), r.push.apply(r, u[l]);
                for (e = t(e), o = e.length; o--;)c = [].concat(s, t(n)), a[e[o]] = {
                    attributes: i(c),
                    attributesOrder: c,
                    children: i(r)
                }
            }

            function i(e, n) {
                var r, i, o, s;
                for (e = t(e), r = e.length, n = t(n); r--;)for (i = a[e[r]], o = 0, s = n.length; s > o; o++)i.attributes[n[o]] = {}, i.attributesOrder.push(n[o])
            }

            var a = {}, s, l, c, u, d, f;
            return r[e] ? r[e] : (s = t("id accesskey class dir lang style tabindex title"), l = t("address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"), c = t("a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"), "html4" != e && (s.push.apply(s, t("contenteditable contextmenu draggable dropzone hidden spellcheck translate")), l.push.apply(l, t("article aside details dialog figure header footer hgroup section nav")), c.push.apply(c, t("audio canvas command datalist mark meter output progress time wbr video ruby bdi keygen"))), "html5-strict" != e && (s.push("xml:lang"), f = t("acronym applet basefont big font strike tt"), c.push.apply(c, f), o(f, function (e) {
                n(e, "", c)
            }), d = t("center dir isindex noframes"), l.push.apply(l, d), u = [].concat(l, c), o(d, function (e) {
                n(e, "", u)
            })), u = u || [].concat(l, c), n("html", "manifest", "head body"), n("head", "", "base command link meta noscript script style title"), n("title hr noscript br"), n("base", "href target"), n("link", "href rel media hreflang type sizes hreflang"), n("meta", "name http-equiv content charset"), n("style", "media type scoped"), n("script", "src async defer type charset"), n("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", u), n("address dt dd div caption", "", u), n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", c), n("blockquote", "cite", u), n("ol", "reversed start type", "li"), n("ul", "", "li"), n("li", "value", u), n("dl", "", "dt dd"), n("a", "href target rel media hreflang type", c), n("q", "cite", c), n("ins del", "cite datetime", u), n("img", "src alt usemap ismap width height"), n("iframe", "src name width height", u), n("embed", "src type width height"), n("object", "data type typemustmatch name usemap form width height", u, "param"), n("param", "name value"), n("map", "name", u, "area"), n("area", "alt coords shape href target rel media hreflang type"), n("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" == e ? " col" : "")), n("colgroup", "span", "col"), n("col", "span"), n("tbody thead tfoot", "", "tr"), n("tr", "", "td th"), n("td", "colspan rowspan headers", u), n("th", "colspan rowspan headers scope abbr", u), n("form", "accept-charset action autocomplete enctype method name novalidate target", u), n("fieldset", "disabled form name", u, "legend"), n("label", "form for", c), n("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), n("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" == e ? u : c), n("select", "disabled form multiple name required size", "option optgroup"), n("optgroup", "disabled label", "option"), n("option", "disabled label selected value"), n("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), n("menu", "type label", u, "li"), n("noscript", "", u), "html4" != e && (n("wbr"), n("ruby", "", c, "rt rp"), n("figcaption", "", u), n("mark rt rp summary bdi", "", c), n("canvas", "width height", u), n("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", u, "track source"), n("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", u, "track source"), n("source", "src type media"), n("track", "kind src srclang label default"), n("datalist", "", c, "option"), n("article section nav aside header footer", "", u), n("hgroup", "", "h1 h2 h3 h4 h5 h6"), n("figure", "", u, "figcaption"), n("time", "datetime", c), n("dialog", "open", u), n("command", "type label icon disabled checked radiogroup command"), n("output", "for form name", c), n("progress", "value max", c), n("meter", "value min max low high optimum", c), n("details", "open", u, "summary"), n("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" != e && (i("script", "language xml:space"), i("style", "xml:space"), i("object", "declare classid codebase codetype archive standby align border hspace vspace"), i("param", "valuetype type"), i("a", "charset name rev shape coords"), i("br", "clear"), i("applet", "codebase archive code object alt name width height align hspace vspace"), i("img", "name longdesc align border hspace vspace"), i("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), i("font basefont", "size color face"), i("input", "usemap align"), i("select", "onchange"), i("textarea"), i("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), i("ul", "type compact"), i("li", "type"), i("ol dl menu dir", "compact"), i("pre", "width xml:space"), i("hr", "align noshade size width"), i("isindex", "prompt"), i("table", "summary width frame rules cellspacing cellpadding align bgcolor"), i("col", "width align char charoff valign"), i("colgroup", "width align char charoff valign"), i("thead", "align char charoff valign"), i("tr", "align char charoff valign bgcolor"), i("th", "axis align char charoff valign nowrap bgcolor width height"), i("form", "accept"), i("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), i("tfoot", "align char charoff valign"), i("tbody", "align char charoff valign"), i("area", "nohref"), i("body", "background bgcolor text link vlink alink")), "html4" != e && (i("input button select textarea", "autofocus"), i("input textarea", "placeholder"), i("a", "download"), i("link script img", "crossorigin"), i("iframe", "sandbox seamless allowfullscreen")), o(t("a form meter progress dfn"), function (e) {
                a[e] && delete a[e].children[e]
            }), delete a.caption.children.table, r[e] = a, a)
        }

        var r = {}, i = e.makeMap, o = e.each, a = e.extend, s = e.explode, l = e.inArray;
        return function (e) {
            function c(t, n, o) {
                var s = e[t];
                return s ? s = i(s, /[, ]/, i(s.toUpperCase(), /[, ]/)) : (s = r[t], s || (s = i(n, " ", i(n.toUpperCase(), " ")), s = a(s, o), r[t] = s)), s
            }

            function u(e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
            }

            function d(e) {
                var n, r, o, a, s, c, d, f, p, h, m, g, y, C, x, w, _, N, E, S = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/, k = /^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/, T = /[*?+]/;
                if (e)for (e = t(e, ","), v["@"] && (w = v["@"].attributes, _ = v["@"].attributesOrder), n = 0, r = e.length; r > n; n++)if (s = S.exec(e[n])) {
                    if (C = s[1], p = s[2], x = s[3], f = s[5], g = {}, y = [], c = {
                            attributes: g,
                            attributesOrder: y
                        }, "#" === C && (c.paddEmpty = !0), "-" === C && (c.removeEmpty = !0), "!" === s[4] && (c.removeEmptyAttrs = !0), w) {
                        for (N in w)g[N] = w[N];
                        y.push.apply(y, _)
                    }
                    if (f)for (f = t(f, "|"), o = 0, a = f.length; a > o; o++)if (s = k.exec(f[o])) {
                        if (d = {}, m = s[1], h = s[2].replace(/::/g, ":"), C = s[3], E = s[4], "!" === m && (c.attributesRequired = c.attributesRequired || [], c.attributesRequired.push(h), d.required = !0), "-" === m) {
                            delete g[h], y.splice(l(y, h), 1);
                            continue
                        }
                        C && ("=" === C && (c.attributesDefault = c.attributesDefault || [], c.attributesDefault.push({
                            name: h,
                            value: E
                        }), d.defaultValue = E), ":" === C && (c.attributesForced = c.attributesForced || [], c.attributesForced.push({
                            name: h,
                            value: E
                        }), d.forcedValue = E), "<" === C && (d.validValues = i(E, "?"))), T.test(h) ? (c.attributePatterns = c.attributePatterns || [], d.pattern = u(h), c.attributePatterns.push(d)) : (g[h] || y.push(h), g[h] = d)
                    }
                    w || "@" != p || (w = g, _ = y), x && (c.outputName = p, v[x] = c), T.test(p) ? (c.pattern = u(p), b.push(c)) : v[p] = c
                }
            }

            function f(e) {
                v = {}, b = [], d(e), o(x, function (e, t) {
                    y[t] = e.children
                })
            }

            function p(e) {
                var n = /^(~)?(.+)$/;
                e && (r.text_block_elements = r.block_elements = null, o(t(e, ","), function (e) {
                    var t = n.exec(e), r = "~" === t[1], i = r ? "span" : "div", s = t[2];
                    if (y[s] = y[i], R[s] = i, r || (S[s.toUpperCase()] = {}, S[s] = {}), !v[s]) {
                        var l = v[i];
                        l = a({}, l), delete l.removeEmptyAttrs, delete l.removeEmpty, v[s] = l
                    }
                    o(y, function (e, t) {
                        e[i] && (y[t] = e = a({}, y[t]), e[s] = e[i])
                    })
                }))
            }

            function h(e) {
                var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                e && o(t(e, ","), function (e) {
                    var r = n.exec(e), i, s;
                    r && (s = r[1], i = s ? y[r[2]] : y[r[2]] = {"#comment": {}}, i = y[r[2]], o(t(r[3], "|"), function (e) {
                        "-" === s ? (y[r[2]] = i = a({}, y[r[2]]), delete i[e]) : i[e] = {}
                    }))
                })
            }

            function m(e) {
                var t = v[e], n;
                if (t)return t;
                for (n = b.length; n--;)if (t = b[n], t.pattern.test(e))return t
            }

            var g = this, v = {}, y = {}, b = [], C, x, w, _, N, E, S, k, T, R = {}, A = {};
            e = e || {}, x = n(e.schema), e.verify_html === !1 && (e.valid_elements = "*[*]"), e.valid_styles && (C = {}, o(e.valid_styles, function (e, t) {
                C[t] = s(e)
            })), w = c("whitespace_elements", "pre script noscript style textarea video audio iframe object"), _ = c("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), N = c("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), E = c("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), k = c("non_empty_elements", "td th iframe video audio object script", N), T = c("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"), S = c("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup", T), o((e.special || "script noscript style textarea").split(" "), function (e) {
                A[e] = new RegExp("</" + e + "[^>]*>", "gi")
            }), e.valid_elements ? f(e.valid_elements) : (o(x, function (e, t) {
                v[t] = {attributes: e.attributes, attributesOrder: e.attributesOrder}, y[t] = e.children
            }), "html5" != e.schema && o(t("strong/b em/i"), function (e) {
                e = t(e, "/"), v[e[1]].outputName = e[0]
            }), v.img.attributesDefault = [{
                name: "alt",
                value: ""
            }], o(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function (e) {
                v[e] && (v[e].removeEmpty = !0)
            }), o(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"), function (e) {
                v[e].paddEmpty = !0
            }), o(t("span"), function (e) {
                v[e].removeEmptyAttrs = !0
            })), p(e.custom_elements), h(e.valid_children), d(e.extended_valid_elements), h("+ol[ul|ol],+ul[ul|ol]"), e.invalid_elements && o(s(e.invalid_elements), function (e) {
                v[e] && delete v[e]
            }), m("span") || d("span[!data-mce-type|*]"), g.children = y, g.styles = C, g.getBoolAttrs = function () {
                return E
            }, g.getBlockElements = function () {
                return S
            }, g.getTextBlockElements = function () {
                return T
            }, g.getShortEndedElements = function () {
                return N
            }, g.getSelfClosingElements = function () {
                return _
            }, g.getNonEmptyElements = function () {
                return k
            }, g.getWhiteSpaceElements = function () {
                return w
            }, g.getSpecialElements = function () {
                return A
            }, g.isValidChild = function (e, t) {
                var n = y[e];
                return !(!n || !n[t])
            }, g.isValid = function (e, t) {
                var n, r, i = m(e);
                if (i) {
                    if (!t)return !0;
                    if (i.attributes[t])return !0;
                    if (n = i.attributePatterns)for (r = n.length; r--;)if (n[r].pattern.test(e))return !0
                }
                return !1
            }, g.getElementRule = m, g.getCustomElements = function () {
                return R
            }, g.addValidElements = d, g.setValidElements = f, g.addCustomElements = p, g.addValidChildren = h, g.elements = v
        }
    }), r(_, [w, m, p], function (e, t, n) {
        var r = n.each;
        return function (i, o) {
            function a() {
            }

            var s = this;
            i = i || {}, s.schema = o = o || new e, i.fix_self_closing !== !1 && (i.fix_self_closing = !0), r("comment cdata text start end pi doctype".split(" "), function (e) {
                e && (s[e] = i[e] || a)
            }), s.parse = function (e) {
                function r(e) {
                    var t, n;
                    for (t = f.length; t-- && f[t].name !== e;);
                    if (t >= 0) {
                        for (n = f.length - 1; n >= t; n--)e = f[n], e.valid && s.end(e.name);
                        f.length = t
                    }
                }

                function a(e, t, n, r, o) {
                    var a, s, l = /[\s\u0000-\u001F]+/g;
                    if (t = t.toLowerCase(), n = t in C ? t : F(n || r || o || ""), w && !v && 0 !== t.indexOf("data-")) {
                        if (a = k[t], !a && T) {
                            for (s = T.length; s-- && (a = T[s], !a.pattern.test(t)););
                            -1 === s && (a = null)
                        }
                        if (!a)return;
                        if (a.validValues && !(n in a.validValues))return
                    }
                    if (W[t] && !i.allow_script_urls) {
                        var c = n.replace(l, "");
                        try {
                            c = decodeURIComponent(c)
                        } catch (u) {
                            c = unescape(c)
                        }
                        if (V.test(c))return;
                        if (!i.allow_html_data_urls && U.test(c) && !/^data:image\//i.test(c))return
                    }
                    p.map[t] = n, p.push({name: t, value: n})
                }

                var s = this, l, c = 0, u, d, f = [], p, h, m, g, v, y, b, C, x, w, _, N, E, S, k, T, R, A, B, D, L, M, H, P, O, I = 0, F = t.decode, z, W = n.makeMap("src,href,data,background,formaction,poster"), V = /((java|vb)script|mhtml):/i, U = /^data:/i;
                for (M = new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), H = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, b = o.getShortEndedElements(), L = i.self_closing_elements || o.getSelfClosingElements(), C = o.getBoolAttrs(), w = i.validate, y = i.remove_internals, z = i.fix_self_closing, P = o.getSpecialElements(); l = M.exec(e);) {
                    if (c < l.index && s.text(F(e.substr(c, l.index - c))), u = l[6])u = u.toLowerCase(), ":" === u.charAt(0) && (u = u.substr(1)), r(u); else if (u = l[7]) {
                        if (u = u.toLowerCase(), ":" === u.charAt(0) && (u = u.substr(1)), x = u in b, z && L[u] && f.length > 0 && f[f.length - 1].name === u && r(u), !w || (_ = o.getElementRule(u))) {
                            if (N = !0, w && (k = _.attributes, T = _.attributePatterns), (S = l[8]) ? (v = -1 !== S.indexOf("data-mce-type"), v && y && (N = !1), p = [], p.map = {}, S.replace(H, a)) : (p = [], p.map = {}), w && !v) {
                                if (R = _.attributesRequired, A = _.attributesDefault, B = _.attributesForced, D = _.removeEmptyAttrs, D && !p.length && (N = !1), B)for (h = B.length; h--;)E = B[h], g = E.name, O = E.value, "{$uid}" === O && (O = "mce_" + I++), p.map[g] = O, p.push({
                                    name: g,
                                    value: O
                                });
                                if (A)for (h = A.length; h--;)E = A[h], g = E.name, g in p.map || (O = E.value, "{$uid}" === O && (O = "mce_" + I++), p.map[g] = O, p.push({
                                    name: g,
                                    value: O
                                }));
                                if (R) {
                                    for (h = R.length; h-- && !(R[h]in p.map););
                                    -1 === h && (N = !1)
                                }
                                p.map["data-mce-bogus"] && (N = !1)
                            }
                            N && s.start(u, p, x)
                        } else N = !1;
                        if (d = P[u]) {
                            d.lastIndex = c = l.index + l[0].length, (l = d.exec(e)) ? (N && (m = e.substr(c, l.index - c)), c = l.index + l[0].length) : (m = e.substr(c), c = e.length), N && (m.length > 0 && s.text(m, !0), s.end(u)), M.lastIndex = c;
                            continue
                        }
                        x || (S && S.indexOf("/") == S.length - 1 ? N && s.end(u) : f.push({name: u, valid: N}))
                    } else(u = l[1]) ? (">" === u.charAt(0) && (u = " " + u), i.allow_conditional_comments || "[if" !== u.substr(0, 3) || (u = " " + u), s.comment(u)) : (u = l[2]) ? s.cdata(u) : (u = l[3]) ? s.doctype(u) : (u = l[4]) && s.pi(u, l[5]);
                    c = l.index + l[0].length
                }
                for (c < e.length && s.text(F(e.substr(c))), h = f.length - 1; h >= 0; h--)u = f[h], u.valid && s.end(u.name)
            }
        }
    }), r(N, [x, w, _, p], function (e, t, n, r) {
        var i = r.makeMap, o = r.each, a = r.explode, s = r.extend;
        return function (r, l) {
            function c(t) {
                var n, r, o, a, s, c, d, f, p, h, m, g, v, y;
                for (m = i("tr,td,th,tbody,thead,tfoot,table"), h = l.getNonEmptyElements(), g = l.getTextBlockElements(), n = 0; n < t.length; n++)if (r = t[n], r.parent && !r.fixed)if (g[r.name] && "li" == r.parent.name) {
                    for (v = r.next; v && g[v.name];)v.name = "li", v.fixed = !0, r.parent.insert(v, r.parent), v = v.next;
                    r.unwrap(r)
                } else {
                    for (a = [r], o = r.parent; o && !l.isValidChild(o.name, r.name) && !m[o.name]; o = o.parent)a.push(o);
                    if (o && a.length > 1) {
                        for (a.reverse(), s = c = u.filterNode(a[0].clone()), p = 0; p < a.length - 1; p++) {
                            for (l.isValidChild(c.name, a[p].name) ? (d = u.filterNode(a[p].clone()), c.append(d)) : d = c, f = a[p].firstChild; f && f != a[p + 1];)y = f.next, d.append(f), f = y;
                            c = d
                        }
                        s.isEmpty(h) ? o.insert(r, a[0], !0) : (o.insert(s, a[0], !0), o.insert(r, s)), o = a[0], (o.isEmpty(h) || o.firstChild === o.lastChild && "br" === o.firstChild.name) && o.empty().remove()
                    } else if (r.parent) {
                        if ("li" === r.name) {
                            if (v = r.prev, v && ("ul" === v.name || "ul" === v.name)) {
                                v.append(r);
                                continue
                            }
                            if (v = r.next, v && ("ul" === v.name || "ul" === v.name)) {
                                v.insert(r, v.firstChild, !0);
                                continue
                            }
                            r.wrap(u.filterNode(new e("ul", 1)));
                            continue
                        }
                        l.isValidChild(r.parent.name, "div") && l.isValidChild("div", r.name) ? r.wrap(u.filterNode(new e("div", 1))) : "style" === r.name || "script" === r.name ? r.empty().remove() : r.unwrap()
                    }
                }
            }

            var u = this, d = {}, f = [], p = {}, h = {};
            r = r || {}, r.validate = "validate"in r ? r.validate : !0, r.root_name = r.root_name || "body", u.schema = l = l || new t, u.filterNode = function (e) {
                var t, n, r;
                n in d && (r = p[n], r ? r.push(e) : p[n] = [e]), t = f.length;
                for (; t--;)n = f[t].name, n in e.attributes.map && (r = h[n], r ? r.push(e) : h[n] = [e]);
                return e
            }, u.addNodeFilter = function (e, t) {
                o(a(e), function (e) {
                    var n = d[e];
                    n || (d[e] = n = []), n.push(t)
                })
            }, u.addAttributeFilter = function (e, t) {
                o(a(e), function (e) {
                    var n;
                    for (n = 0; n < f.length; n++)if (f[n].name === e)return void f[n].callbacks.push(t);
                    f.push({name: e, callbacks: [t]})
                })
            }, u.parse = function (t, o) {
                function a() {
                    function e(e) {
                        e && (t = e.firstChild, t && 3 == t.type && (t.value = t.value.replace(R, "")), t = e.lastChild, t && 3 == t.type && (t.value = t.value.replace(D, "")))
                    }

                    var t = y.firstChild, n, i;
                    if (l.isValidChild(y.name, I.toLowerCase())) {
                        for (; t;)n = t.next, 3 == t.type || 1 == t.type && "p" !== t.name && !T[t.name] && !t.attr("data-mce-type") ? i ? i.append(t) : (i = u(I, 1), i.attr(r.forced_root_block_attrs), y.insert(i, t), i.append(t)) : (e(i), i = null), t = n;
                        e(i)
                    }
                }

                function u(t, n) {
                    var r = new e(t, n), i;
                    return t in d && (i = p[t], i ? i.push(r) : p[t] = [r]), r
                }

                function m(e) {
                    var t, n, r;
                    for (t = e.prev; t && 3 === t.type;)n = t.value.replace(D, ""), n.length > 0 ? (t.value = n, t = t.prev) : (r = t.prev, t.remove(), t = r)
                }

                function g(e) {
                    var t, n = {};
                    for (t in e)"li" !== t && "p" != t && (n[t] = e[t]);
                    return n
                }

                var v, y, b, C, x, w, _, N, E, S, k, T, R, A = [], B, D, L, M, H, P, O, I;
                if (o = o || {}, p = {}, h = {}, T = s(i("script,style,head,html,body,title,meta,param"), l.getBlockElements()), O = l.getNonEmptyElements(), P = l.children, k = r.validate, I = "forced_root_block"in o ? o.forced_root_block : r.forced_root_block, H = l.getWhiteSpaceElements(), R = /^[ \t\r\n]+/, D = /[ \t\r\n]+$/, L = /[ \t\r\n]+/g, M = /^[ \t\r\n]+$/, v = new n({
                        validate: k,
                        allow_script_urls: r.allow_script_urls,
                        allow_conditional_comments: r.allow_conditional_comments,
                        self_closing_elements: g(l.getSelfClosingElements()),
                        cdata: function (e) {
                            b.append(u("#cdata", 4)).value = e
                        },
                        text: function (e, t) {
                            var n;
                            B || (e = e.replace(L, " "), b.lastChild && T[b.lastChild.name] && (e = e.replace(R, ""))), 0 !== e.length && (n = u("#text", 3), n.raw = !!t, b.append(n).value = e)
                        },
                        comment: function (e) {
                            b.append(u("#comment", 8)).value = e
                        },
                        pi: function (e, t) {
                            b.append(u(e, 7)).value = t, m(b)
                        },
                        doctype: function (e) {
                            var t;
                            t = b.append(u("#doctype", 10)), t.value = e, m(b)
                        },
                        start: function (e, t, n) {
                            var r, i, o, a, s;
                            if (o = k ? l.getElementRule(e) : {}) {
                                for (r = u(o.outputName || e, 1), r.attributes = t, r.shortEnded = n, b.append(r), s = P[b.name], s && P[r.name] && !s[r.name] && A.push(r), i = f.length; i--;)a = f[i].name, a in t.map && (E = h[a], E ? E.push(r) : h[a] = [r]);
                                T[e] && m(r), n || (b = r), !B && H[e] && (B = !0)
                            }
                        },
                        end: function (t) {
                            var n, r, i, o, a;
                            if (r = k ? l.getElementRule(t) : {}) {
                                if (T[t] && !B) {
                                    if (n = b.firstChild, n && 3 === n.type)if (i = n.value.replace(R, ""), i.length > 0)n.value = i, n = n.next; else for (o = n.next, n.remove(), n = o; n && 3 === n.type;)i = n.value, o = n.next, (0 === i.length || M.test(i)) && (n.remove(), n = o), n = o;
                                    if (n = b.lastChild, n && 3 === n.type)if (i = n.value.replace(D, ""), i.length > 0)n.value = i, n = n.prev; else for (o = n.prev, n.remove(), n = o; n && 3 === n.type;)i = n.value, o = n.prev, (0 === i.length || M.test(i)) && (n.remove(), n = o), n = o
                                }
                                if (B && H[t] && (B = !1), (r.removeEmpty || r.paddEmpty) && b.isEmpty(O))if (r.paddEmpty)b.empty().append(new e("#text", "3")).value = "\xa0"; else if (!b.attributes.map.name && !b.attributes.map.id)return a = b.parent, b.empty().remove(), void(b = a);
                                b = b.parent
                            }
                        }
                    }, l), y = b = new e(o.context || r.root_name, 11), v.parse(t), k && A.length && (o.context ? o.invalid = !0 : c(A)), I && ("body" == y.name || o.isRootContent) && a(), !o.invalid) {
                    for (S in p) {
                        for (E = d[S], C = p[S], _ = C.length; _--;)C[_].parent || C.splice(_, 1);
                        for (x = 0, w = E.length; w > x; x++)E[x](C, S, o)
                    }
                    for (x = 0, w = f.length; w > x; x++)if (E = f[x], E.name in h) {
                        for (C = h[E.name], _ = C.length; _--;)C[_].parent || C.splice(_, 1);
                        for (_ = 0, N = E.callbacks.length; N > _; _++)E.callbacks[_](C, E.name, o)
                    }
                }
                return y
            }, r.remove_trailing_brs && u.addNodeFilter("br", function (t) {
                var n, r = t.length, i, o = s({}, l.getBlockElements()), a = l.getNonEmptyElements(), c, u, d, f, p, h;
                for (o.body = 1, n = 0; r > n; n++)if (i = t[n], c = i.parent, o[i.parent.name] && i === c.lastChild) {
                    for (d = i.prev; d;) {
                        if (f = d.name, "span" !== f || "bookmark" !== d.attr("data-mce-type")) {
                            if ("br" !== f)break;
                            if ("br" === f) {
                                i = null;
                                break
                            }
                        }
                        d = d.prev
                    }
                    i && (i.remove(), c.isEmpty(a) && (p = l.getElementRule(c.name), p && (p.removeEmpty ? c.remove() : p.paddEmpty && (c.empty().append(new e("#text", 3)).value = "\xa0"))))
                } else {
                    for (u = i; c && c.firstChild === u && c.lastChild === u && (u = c, !o[c.name]);)c = c.parent;
                    u === c && (h = new e("#text", 3), h.value = "\xa0", i.replace(h))
                }
            }), r.allow_html_in_named_anchor || u.addAttributeFilter("id,name", function (e) {
                for (var t = e.length, n, r, i, o; t--;)if (o = e[t], "a" === o.name && o.firstChild && !o.attr("href")) {
                    i = o.parent, n = o.lastChild;
                    do r = n.prev, i.insert(n, o), n = r; while (n)
                }
            })
        }
    }), r(E, [m, p], function (e, t) {
        var n = t.makeMap;
        return function (t) {
            var r = [], i, o, a, s, l;
            return t = t || {}, i = t.indent, o = n(t.indent_before || ""), a = n(t.indent_after || ""), s = e.getEncodeFunc(t.entity_encoding || "raw", t.entities), l = "html" == t.element_format, {
                start: function (e, t, n) {
                    var c, u, d, f;
                    if (i && o[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n")), r.push("<", e), t)for (c = 0, u = t.length; u > c; c++)d = t[c], r.push(" ", d.name, '="', s(d.value, !0), '"');
                    r[r.length] = !n || l ? ">" : " />", n && i && a[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n"))
                }, end: function (e) {
                    var t;
                    r.push("</", e, ">"), i && a[e] && r.length > 0 && (t = r[r.length - 1], t.length > 0 && "\n" !== t && r.push("\n"))
                }, text: function (e, t) {
                    e.length > 0 && (r[r.length] = t ? e : s(e))
                }, cdata: function (e) {
                    r.push("<![CDATA[", e, "]]>")
                }, comment: function (e) {
                    r.push("<!--", e, "-->")
                }, pi: function (e, t) {
                    t ? r.push("<?", e, " ", t, "?>") : r.push("<?", e, "?>"), i && r.push("\n")
                }, doctype: function (e) {
                    r.push("<!DOCTYPE", e, ">", i ? "\n" : "")
                }, reset: function () {
                    r.length = 0
                }, getContent: function () {
                    return r.join("").replace(/\n$/, "")
                }
            }
        }
    }), r(S, [E, w], function (e, t) {
        return function (n, r) {
            var i = this, o = new e(n);
            n = n || {}, n.validate = "validate"in n ? n.validate : !0, i.schema = r = r || new t, i.writer = o, i.serialize = function (e) {
                function t(e) {
                    var n = i[e.type], s, l, c, u, d, f, p, h, m;
                    if (n)n(e); else {
                        if (s = e.name, l = e.shortEnded, c = e.attributes, a && c && c.length > 1) {
                            for (f = [], f.map = {}, m = r.getElementRule(e.name), p = 0, h = m.attributesOrder.length; h > p; p++)u = m.attributesOrder[p], u in c.map && (d = c.map[u], f.map[u] = d, f.push({
                                name: u,
                                value: d
                            }));
                            for (p = 0, h = c.length; h > p; p++)u = c[p].name, u in f.map || (d = c.map[u], f.map[u] = d, f.push({
                                name: u,
                                value: d
                            }));
                            c = f
                        }
                        if (o.start(e.name, c, l), !l) {
                            if (e = e.firstChild)do t(e); while (e = e.next);
                            o.end(s)
                        }
                    }
                }

                var i, a;
                return a = n.validate, i = {
                    3: function (e) {
                        o.text(e.value, e.raw)
                    }, 8: function (e) {
                        o.comment(e.value)
                    }, 7: function (e) {
                        o.pi(e.name, e.value)
                    }, 10: function (e) {
                        o.doctype(e.value)
                    }, 4: function (e) {
                        o.cdata(e.value)
                    }, 11: function (e) {
                        if (e = e.firstChild)do t(e); while (e = e.next)
                    }
                }, o.reset(), 1 != e.type || n.inner ? i[11](e) : t(e), o.getContent()
            }
        }
    }), r(k, [y, N, m, S, x, w, g, p], function (e, t, n, r, i, o, a, s) {
        var l = s.each, c = s.trim, u = e.DOM;
        return function (e, i) {
            var s, d, f;
            return i && (s = i.dom, d = i.schema), s = s || u, d = d || new o(e), e.entity_encoding = e.entity_encoding || "named", e.remove_trailing_brs = "remove_trailing_brs"in e ? e.remove_trailing_brs : !0, f = new t(e, d), f.addAttributeFilter("data-mce-tabindex", function (e, t) {
                for (var n = e.length, r; n--;)r = e[n], r.attr("tabindex", r.attributes.map["data-mce-tabindex"]), r.attr(t, null)
            }), f.addAttributeFilter("src,href,style", function (t, n) {
                for (var r = t.length, i, o, a = "data-mce-" + n, l = e.url_converter, c = e.url_converter_scope, u; r--;)i = t[r], o = i.attributes.map[a], o !== u ? (i.attr(n, o.length > 0 ? o : null), i.attr(a, null)) : (o = i.attributes.map[n], "style" === n ? o = s.serializeStyle(s.parseStyle(o), i.name) : l && (o = l.call(c, o, n, i.name)), i.attr(n, o.length > 0 ? o : null))
            }), f.addAttributeFilter("class", function (e) {
                for (var t = e.length, n, r; t--;)n = e[t], r = n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), n.attr("class", r.length > 0 ? r : null)
            }), f.addAttributeFilter("data-mce-type", function (e, t, n) {
                for (var r = e.length, i; r--;)i = e[r], "bookmark" !== i.attributes.map["data-mce-type"] || n.cleanup || i.remove()
            }), f.addAttributeFilter("data-mce-expando", function (e, t) {
                for (var n = e.length; n--;)e[n].attr(t, null)
            }), f.addNodeFilter("noscript", function (e) {
                for (var t = e.length, r; t--;)r = e[t].firstChild, r && (r.value = n.decode(r.value))
            }), f.addNodeFilter("script,style", function (e, t) {
                function n(e) {
                    return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                }

                for (var r = e.length, i, o; r--;)if (i = e[r], o = i.firstChild ? i.firstChild.value : "", "script" === t) {
                    var a = (i.attr("type") || "text/javascript").replace(/^mce\-/, "");
                    i.attr("type", "text/javascript" === a ? null : a), o.length > 0 && (i.firstChild.value = "// <![CDATA[\n" + n(o) + "\n// ]]>")
                } else o.length > 0 && (i.firstChild.value = "<!--\n" + n(o) + "\n-->")
            }), f.addNodeFilter("#comment", function (e) {
                for (var t = e.length, n; t--;)n = e[t], 0 === n.value.indexOf("[CDATA[") ? (n.name = "#cdata", n.type = 4, n.value = n.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === n.value.indexOf("mce:protected ") && (n.name = "#text", n.type = 3, n.raw = !0, n.value = unescape(n.value).substr(14))
            }), f.addNodeFilter("xml:namespace,input", function (e, t) {
                for (var n = e.length, r; n--;)r = e[n], 7 === r.type ? r.remove() : 1 === r.type && ("input" !== t || "type"in r.attributes.map || r.attr("type", "text"))
            }), e.fix_list_elements && f.addNodeFilter("ul,ol", function (e) {
                for (var t = e.length, n, r; t--;)n = e[t], r = n.parent, ("ul" === r.name || "ol" === r.name) && n.prev && "li" === n.prev.name && n.prev.append(n)
            }), f.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected", function (e, t) {
                for (var n = e.length; n--;)e[n].attr(t, null)
            }), {
                schema: d,
                addNodeFilter: f.addNodeFilter,
                addAttributeFilter: f.addAttributeFilter,
                serialize: function (t, n) {
                    var i = this, o, u, p, h, m;
                    return a.ie && s.select("script,style,select,map").length > 0 ? (m = t.innerHTML, t = t.cloneNode(!1), s.setHTML(t, m)) : t = t.cloneNode(!0), o = t.ownerDocument.implementation, o.createHTMLDocument && (u = o.createHTMLDocument(""), l("BODY" == t.nodeName ? t.childNodes : [t], function (e) {
                        u.body.appendChild(u.importNode(e, !0))
                    }), t = "BODY" != t.nodeName ? u.body.firstChild : u.body, p = s.doc, s.doc = u), n = n || {}, n.format = n.format || "html", n.selection && (n.forced_root_block = ""), n.no_events || (n.node = t, i.onPreProcess(n)), h = new r(e, d), n.content = h.serialize(f.parse(c(n.getInner ? t.innerHTML : s.getOuterHTML(t)), n)), n.cleanup || (n.content = n.content.replace(/\uFEFF/g, "")), n.no_events || i.onPostProcess(n), p && (s.doc = p), n.node = null, n.content
                },
                addRules: function (e) {
                    d.addValidElements(e)
                },
                setRules: function (e) {
                    d.setValidElements(e)
                },
                onPreProcess: function (e) {
                    i && i.fire("PreProcess", e)
                },
                onPostProcess: function (e) {
                    i && i.fire("PostProcess", e)
                }
            }
        }
    }), r(T, [], function () {
        function e(e) {
            function t(t, n) {
                var r, i = 0, o, a, s, l, c, u, d = -1, f;
                if (r = t.duplicate(), r.collapse(n), f = r.parentElement(), f.ownerDocument === e.dom.doc) {
                    for (; "false" === f.contentEditable;)f = f.parentNode;
                    if (!f.hasChildNodes())return {node: f, inside: 1};
                    for (s = f.children, o = s.length - 1; o >= i;)if (u = Math.floor((i + o) / 2), l = s[u], r.moveToElementText(l), d = r.compareEndPoints(n ? "StartToStart" : "EndToEnd", t), d > 0)o = u - 1; else {
                        if (!(0 > d))return {node: l};
                        i = u + 1
                    }
                    if (0 > d)for (l ? r.collapse(!1) : (r.moveToElementText(f), r.collapse(!0), l = f, a = !0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", 1) && f == r.parentElement();)c++; else for (r.collapse(!0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", -1) && f == r.parentElement();)c++;
                    return {node: l, position: d, offset: c, inside: a}
                }
            }

            function n() {
                function n(e) {
                    var n = t(o, e), r, i, s = 0, l, c, u;
                    if (r = n.node, i = n.offset, n.inside && !r.hasChildNodes())return void a[e ? "setStart" : "setEnd"](r, 0);
                    if (i === c)return void a[e ? "setStartBefore" : "setEndAfter"](r);
                    if (n.position < 0) {
                        if (l = n.inside ? r.firstChild : r.nextSibling, !l)return void a[e ? "setStartAfter" : "setEndAfter"](r);
                        if (!i)return void(3 == l.nodeType ? a[e ? "setStart" : "setEnd"](l, 0) : a[e ? "setStartBefore" : "setEndBefore"](l));
                        for (; l;) {
                            if (u = l.nodeValue, s += u.length, s >= i) {
                                r = l, s -= i, s = u.length - s;
                                break
                            }
                            l = l.nextSibling
                        }
                    } else {
                        if (l = r.previousSibling, !l)return a[e ? "setStartBefore" : "setEndBefore"](r);
                        if (!i)return void(3 == r.nodeType ? a[e ? "setStart" : "setEnd"](l, r.nodeValue.length) : a[e ? "setStartAfter" : "setEndAfter"](l));
                        for (; l;) {
                            if (s += l.nodeValue.length, s >= i) {
                                r = l, s -= i;
                                break
                            }
                            l = l.previousSibling
                        }
                    }
                    a[e ? "setStart" : "setEnd"](r, s)
                }

                var o = e.getRng(), a = i.createRng(), s, l, c, u, d;
                if (s = o.item ? o.item(0) : o.parentElement(), s.ownerDocument != i.doc)return a;
                if (l = e.isCollapsed(), o.item)return a.setStart(s.parentNode, i.nodeIndex(s)), a.setEnd(a.startContainer, a.startOffset + 1), a;
                try {
                    n(!0), l || n()
                } catch (f) {
                    if (-2147024809 != f.number)throw f;
                    d = r.getBookmark(2), c = o.duplicate(), c.collapse(!0), s = c.parentElement(), l || (c = o.duplicate(), c.collapse(!1), u = c.parentElement(), u.innerHTML = u.innerHTML), s.innerHTML = s.innerHTML, r.moveToBookmark(d), o = e.getRng(), n(!0), l || n()
                }
                return a
            }

            var r = this, i = e.dom, o = !1;
            this.getBookmark = function (n) {
                function r(e) {
                    var t, n, r, o, a = [];
                    for (t = e.parentNode, n = i.getRoot().parentNode; t != n && 9 !== t.nodeType;) {
                        for (r = t.children, o = r.length; o--;)if (e === r[o]) {
                            a.push(o);
                            break
                        }
                        e = t, t = t.parentNode
                    }
                    return a
                }

                function o(e) {
                    var n;
                    return n = t(a, e), n ? {
                        position: n.position,
                        offset: n.offset,
                        indexes: r(n.node),
                        inside: n.inside
                    } : void 0
                }

                var a = e.getRng(), s = {};
                return 2 === n && (a.item ? s.start = {
                    ctrl: !0,
                    indexes: r(a.item(0))
                } : (s.start = o(!0), e.isCollapsed() || (s.end = o()))), s
            }, this.moveToBookmark = function (e) {
                function t(e) {
                    var t, n, r, o;
                    for (t = i.getRoot(), n = e.length - 1; n >= 0; n--)o = t.children, r = e[n], r <= o.length - 1 && (t = o[r]);
                    return t
                }

                function n(n) {
                    var i = e[n ? "start" : "end"], a, s, l, c;
                    i && (a = i.position > 0, s = o.createTextRange(), s.moveToElementText(t(i.indexes)), c = i.offset, c !== l ? (s.collapse(i.inside || a), s.moveStart("character", a ? -c : c)) : s.collapse(n), r.setEndPoint(n ? "StartToStart" : "EndToStart", s), n && r.collapse(!0))
                }

                var r, o = i.doc.body;
                e.start && (e.start.ctrl ? (r = o.createControlRange(), r.addElement(t(e.start.indexes)), r.select()) : (r = o.createTextRange(), n(!0), n(), r.select()))
            }, this.addRange = function (t) {
                function n(e) {
                    var t, n, a, d, h;
                    a = i.create("a"), t = e ? s : c, n = e ? l : u, d = r.duplicate(), (t == f || t == f.documentElement) && (t = p, n = 0), 3 == t.nodeType ? (t.parentNode.insertBefore(a, t), d.moveToElementText(a), d.moveStart("character", n), i.remove(a), r.setEndPoint(e ? "StartToStart" : "EndToEnd", d)) : (h = t.childNodes, h.length ? (n >= h.length ? i.insertAfter(a, h[h.length - 1]) : t.insertBefore(a, h[n]), d.moveToElementText(a)) : t.canHaveHTML && (t.innerHTML = "<span>&#xFEFF;</span>", a = t.firstChild, d.moveToElementText(a), d.collapse(o)), r.setEndPoint(e ? "StartToStart" : "EndToEnd", d), i.remove(a))
                }

                var r, a, s, l, c, u, d, f = e.dom.doc, p = f.body, h, m;
                if (s = t.startContainer, l = t.startOffset, c = t.endContainer, u = t.endOffset, r = p.createTextRange(), s == c && 1 == s.nodeType) {
                    if (l == u && !s.hasChildNodes()) {
                        if (s.canHaveHTML)return d = s.previousSibling, d && !d.hasChildNodes() && i.isBlock(d) ? d.innerHTML = "&#xFEFF;" : d = null, s.innerHTML = "<span>&#xFEFF;</span><span>&#xFEFF;</span>", r.moveToElementText(s.lastChild), r.select(), i.doc.selection.clear(), s.innerHTML = "", void(d && (d.innerHTML = ""));
                        l = i.nodeIndex(s), s = s.parentNode
                    }
                    if (l == u - 1)try {
                        if (m = s.childNodes[l], a = p.createControlRange(), a.addElement(m), a.select(), h = e.getRng(), h.item && m === h.item(0))return
                    } catch (g) {
                    }
                }
                n(!0), n(), r.select()
            }, this.getRangeAt = n
        }

        return e
    }), r(R, [g], function (e) {
        return {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            modifierPressed: function (e) {
                return e.shiftKey || e.ctrlKey || e.altKey
            },
            metaKeyPressed: function (t) {
                return (e.mac ? t.metaKey : t.ctrlKey) && !t.altKey
            }
        }
    }), r(A, [R, p, g], function (e, t, n) {
        return function (r, i) {
            function o(e) {
                var t = i.settings.object_resizing;
                return t === !1 || n.iOS ? !1 : ("string" != typeof t && (t = "table,img,div"), "false" === e.getAttribute("data-mce-resize") ? !1 : i.dom.is(e, t))
            }

            function a(t) {
                var n, r;
                n = t.screenX - k, r = t.screenY - T, H = n * E[2] + B, P = r * E[3] + D, H = 5 > H ? 5 : H, P = 5 > P ? 5 : P, (e.modifierPressed(t) || "IMG" == w.nodeName && E[2] * E[3] !== 0) && (H = Math.round(P / L), P = Math.round(H * L)), C.setStyles(_, {
                    width: H,
                    height: P
                }), E[2] < 0 && _.clientWidth <= H && C.setStyle(_, "left", R + (B - H)), E[3] < 0 && _.clientHeight <= P && C.setStyle(_, "top", A + (D - P)), M || (i.fire("ObjectResizeStart", {
                    target: w,
                    width: B,
                    height: D
                }), M = !0)
            }

            function s() {
                function e(e, t) {
                    t && (w.style[e] || !i.schema.isValid(w.nodeName.toLowerCase(), e) ? C.setStyle(w, e, t) : C.setAttrib(w, e, t))
                }

                M = !1, e("width", H), e("height", P), C.unbind(O, "mousemove", a), C.unbind(O, "mouseup", s), I != O && (C.unbind(I, "mousemove", a), C.unbind(I, "mouseup", s)), C.remove(_), F && "TABLE" != w.nodeName || l(w), i.fire("ObjectResized", {
                    target: w,
                    width: H,
                    height: P
                }), i.nodeChanged()
            }

            function l(e, t, r) {
                var l, u, d, f, p, h = i.getBody();
                g(), l = C.getPos(e, h), R = l.x, A = l.y, p = e.getBoundingClientRect(), u = p.width || p.right - p.left, d = p.height || p.bottom - p.top, w != e && (m(), w = e, H = P = 0), f = i.fire("ObjectSelected", {target: e}), o(e) && !f.isDefaultPrevented() ? x(N, function (e, o) {
                    function l(t) {
                        k = t.screenX, T = t.screenY, B = w.clientWidth, D = w.clientHeight, L = D / B, E = e, _ = w.cloneNode(!0), C.addClass(_, "mce-clonedresizable"), _.contentEditable = !1, _.unSelectabe = !0, C.setStyles(_, {
                            left: R,
                            top: A,
                            margin: 0
                        }), _.removeAttribute("data-mce-selected"), i.getBody().appendChild(_), C.bind(O, "mousemove", a), C.bind(O, "mouseup", s), I != O && (C.bind(I, "mousemove", a), C.bind(I, "mouseup", s))
                    }

                    var c, f;
                    return t ? void(o == t && l(r)) : (c = C.get("mceResizeHandle" + o), c ? C.show(c) : (f = i.getBody(), c = C.add(f, "div", {
                        id: "mceResizeHandle" + o,
                        "data-mce-bogus": !0,
                        "class": "mce-resizehandle",
                        unselectable: !0,
                        style: "cursor:" + o + "-resize; margin:0; padding:0"
                    }), n.ie && (c.contentEditable = !1)), e.elm || (C.bind(c, "mousedown", function (e) {
                        e.stopImmediatePropagation(), e.preventDefault(), l(e)
                    }), e.elm = c), void C.setStyles(c, {
                        left: u * e[0] + R - c.offsetWidth / 2,
                        top: d * e[1] + A - c.offsetHeight / 2
                    }))
                }) : c(), w.setAttribute("data-mce-selected", "1")
            }

            function c() {
                var e, t;
                g(), w && w.removeAttribute("data-mce-selected");
                for (e in N)t = C.get("mceResizeHandle" + e), t && (C.unbind(t), C.remove(t))
            }

            function u(e) {
                function t(e, t) {
                    if (e)do if (e === t)return !0; while (e = e.parentNode)
                }

                var n;
                return x(C.select("img[data-mce-selected],hr[data-mce-selected]"), function (e) {
                    e.removeAttribute("data-mce-selected")
                }), n = "mousedown" == e.type ? e.target : r.getNode(), n = C.getParent(n, F ? "table" : "table,img,hr"), t(n, i.getBody()) && (v(), t(r.getStart(), n) && t(r.getEnd(), n) && (!F || n != r.getStart() && "IMG" !== r.getStart().nodeName)) ? void l(n) : void c()
            }

            function d(e, t, n) {
                e && e.attachEvent && e.attachEvent("on" + t, n)
            }

            function f(e, t, n) {
                e && e.detachEvent && e.detachEvent("on" + t, n)
            }

            function p(e) {
                var t = e.srcElement, n, r, o, a, s, c, u;
                n = t.getBoundingClientRect(), c = S.clientX - n.left, u = S.clientY - n.top;
                for (r in N)if (o = N[r], a = t.offsetWidth * o[0], s = t.offsetHeight * o[1], Math.abs(a - c) < 8 && Math.abs(s - u) < 8) {
                    E = o;
                    break
                }
                M = !0, i.getDoc().selection.empty(), l(t, r, S)
            }

            function h(e) {
                var t = e.srcElement;
                if (t != w) {
                    if (m(), 0 === t.id.indexOf("mceResizeHandle"))return void(e.returnValue = !1);
                    ("IMG" == t.nodeName || "TABLE" == t.nodeName) && (c(), w = t, d(t, "resizestart", p))
                }
            }

            function m() {
                f(w, "resizestart", p)
            }

            function g() {
                for (var e in N) {
                    var t = N[e];
                    t.elm && (C.unbind(t.elm), delete t.elm)
                }
            }

            function v() {
                try {
                    i.getDoc().execCommand("enableObjectResizing", !1, !1)
                } catch (e) {
                }
            }

            function y(e) {
                var t;
                if (F) {
                    t = O.body.createControlRange();
                    try {
                        return t.addElement(e), t.select(), !0
                    } catch (n) {
                    }
                }
            }

            function b() {
                w = _ = null, F && (m(), f(i.getBody(), "controlselect", h))
            }

            var C = i.dom, x = t.each, w, _, N, E, S, k, T, R, A, B, D, L, M, H, P, O = i.getDoc(), I = document, F = n.ie && n.ie < 11;
            N = {
                n: [.5, 0, 0, -1],
                e: [1, .5, 1, 0],
                s: [.5, 1, 0, 1],
                w: [0, .5, -1, 0],
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
            };
            var z = ".mce-content-body";
            return i.contentStyles.push(z + " div.mce-resizehandle {position: absolute;border: 1px solid black;background: #FFF;width: 5px;height: 5px;z-index: 10000}" + z + " .mce-resizehandle:hover {background: #000}" + z + " img[data-mce-selected], hr[data-mce-selected] {outline: 1px solid black;resize: none}" + z + " .mce-clonedresizable {position: absolute;" + (n.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}"), i.on("init", function () {
                F ? (i.on("ObjectResized", function (e) {
                    "TABLE" != e.target.nodeName && (c(), y(e.target))
                }), d(i.getBody(), "controlselect", h), i.on("mousedown", function (e) {
                    S = e
                })) : (v(), n.ie >= 11 && (i.on("mouseup", function (e) {
                    var t = e.target.nodeName;
                    /^(TABLE|IMG|HR)$/.test(t) && (i.selection.select(e.target, "TABLE" == t), i.nodeChanged())
                }), i.dom.bind(i.getBody(), "mscontrolselect", function (e) {
                    /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" == e.target.tagName && window.setTimeout(function () {
                        i.selection.select(e.target)
                    }, 0))
                }))), i.on("nodechange mousedown mouseup ResizeEditor", u), i.on("keydown keyup", function (e) {
                    w && "TABLE" == w.nodeName && u(e)
                }), i.on("hide", c)
            }), i.on("remove", g), {
                isResizable: o,
                showResizeRect: l,
                hideResizeRect: c,
                updateResizeRect: u,
                controlSelect: y,
                destroy: b
            }
        }
    }), r(B, [p, f], function (e, t) {
        function n(e) {
            this.walk = function (t, n) {
                function i(e) {
                    var t;
                    return t = e[0], 3 === t.nodeType && t === l && c >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === d && e.length > 0 && t === u && 3 === t.nodeType && e.splice(e.length - 1, 1), e
                }

                function o(e, t, n) {
                    for (var r = []; e && e != n; e = e[t])r.push(e);
                    return r
                }

                function a(e, t) {
                    do {
                        if (e.parentNode == t)return e;
                        e = e.parentNode
                    } while (e)
                }

                function s(e, t, r) {
                    var a = r ? "nextSibling" : "previousSibling";
                    for (m = e, g = m.parentNode; m && m != t; m = g)g = m.parentNode, v = o(m == e ? m : m[a], a), v.length && (r || v.reverse(), n(i(v)))
                }

                var l = t.startContainer, c = t.startOffset, u = t.endContainer, d = t.endOffset, f, p, h, m, g, v, y;
                if (y = e.select("td.mce-item-selected,th.mce-item-selected"), y.length > 0)return void r(y, function (e) {
                    n([e])
                });
                if (1 == l.nodeType && l.hasChildNodes() && (l = l.childNodes[c]), 1 == u.nodeType && u.hasChildNodes() && (u = u.childNodes[Math.min(d - 1, u.childNodes.length - 1)]), l == u)return n(i([l]));
                for (f = e.findCommonAncestor(l, u), m = l; m; m = m.parentNode) {
                    if (m === u)return s(l, f, !0);
                    if (m === f)break
                }
                for (m = u; m; m = m.parentNode) {
                    if (m === l)return s(u, f);
                    if (m === f)break
                }
                p = a(l, f) || l, h = a(u, f) || u, s(l, p, !0), v = o(p == l ? p : p.nextSibling, "nextSibling", h == u ? h.nextSibling : h), v.length && n(i(v)), s(u, h)
            }, this.split = function (e) {
                function t(e, t) {
                    return e.splitText(t)
                }

                var n = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset;
                return n == i && 3 == n.nodeType ? r > 0 && r < n.nodeValue.length && (i = t(n, r), n = i.previousSibling, o > r ? (o -= r, n = i = t(i, o).previousSibling, o = i.nodeValue.length, r = 0) : o = 0) : (3 == n.nodeType && r > 0 && r < n.nodeValue.length && (n = t(n, r), r = 0), 3 == i.nodeType && o > 0 && o < i.nodeValue.length && (i = t(i, o).previousSibling, o = i.nodeValue.length)), {
                    startContainer: n,
                    startOffset: r,
                    endContainer: i,
                    endOffset: o
                }
            }, this.normalize = function (n) {
                function r(r) {
                    function a(n, r) {
                        for (var i = new t(n, e.getParent(n.parentNode, e.isBlock) || f); n = i[r ? "prev" : "next"]();)if ("BR" === n.nodeName)return !0
                    }

                    function s(e, t) {
                        return e.previousSibling && e.previousSibling.nodeName == t
                    }

                    function l(n, r) {
                        var a, s, l;
                        if (r = r || c, l = e.getParent(r.parentNode, e.isBlock) || f, n && "BR" == r.nodeName && g && e.isEmpty(l))return c = r.parentNode, u = e.nodeIndex(r), void(i = !0);
                        for (a = new t(r, l); p = a[n ? "prev" : "next"]();) {
                            if ("false" === e.getContentEditableParent(p))return;
                            if (3 === p.nodeType && p.nodeValue.length > 0)return c = p, u = n ? p.nodeValue.length : 0, void(i = !0);
                            if (e.isBlock(p) || h[p.nodeName.toLowerCase()])return;
                            s = p
                        }
                        o && s && (c = s, i = !0, u = 0)
                    }

                    var c, u, d, f = e.getRoot(), p, h, m, g;
                    if (c = n[(r ? "start" : "end") + "Container"], u = n[(r ? "start" : "end") + "Offset"], g = 1 == c.nodeType && u === c.childNodes.length, h = e.schema.getNonEmptyElements(), m = r, 1 == c.nodeType && u > c.childNodes.length - 1 && (m = !1), 9 === c.nodeType && (c = e.getRoot(), u = 0), c === f) {
                        if (m && (p = c.childNodes[u > 0 ? u - 1 : 0], p && (h[p.nodeName] || "TABLE" == p.nodeName)))return;
                        if (c.hasChildNodes() && (u = Math.min(!m && u > 0 ? u - 1 : u, c.childNodes.length - 1), c = c.childNodes[u], u = 0, c.hasChildNodes() && !/TABLE/.test(c.nodeName))) {
                            p = c, d = new t(c, f);
                            do {
                                if (3 === p.nodeType && p.nodeValue.length > 0) {
                                    u = m ? 0 : p.nodeValue.length, c = p, i = !0;
                                    break
                                }
                                if (h[p.nodeName.toLowerCase()]) {
                                    u = e.nodeIndex(p), c = p.parentNode, "IMG" != p.nodeName || m || u++, i = !0;
                                    break
                                }
                            } while (p = m ? d.next() : d.prev())
                        }
                    }
                    o && (3 === c.nodeType && 0 === u && l(!0), 1 === c.nodeType && (p = c.childNodes[u], p || (p = c.childNodes[u - 1]), !p || "BR" !== p.nodeName || s(p, "A") || a(p) || a(p, !0) || l(!0, p))), m && !o && 3 === c.nodeType && u === c.nodeValue.length && l(!1), i && n["set" + (r ? "Start" : "End")](c, u)
                }

                var i, o;
                return o = n.collapsed, r(!0), o || r(), i && o && n.collapse(!0), i
            }
        }

        var r = e.each;
        return n.compareRanges = function (e, t) {
            if (e && t) {
                if (!e.item && !e.duplicate)return e.startContainer == t.startContainer && e.startOffset == t.startOffset;
                if (e.item && t.item && e.item(0) === t.item(0))return !0;
                if (e.isEqual && t.isEqual && t.isEqual(e))return !0
            }
            return !1
        }, n
    }), r(D, [f, T, A, B, g, p], function (e, n, r, i, o, a) {
        function s(e, t, i, o) {
            var a = this;
            a.dom = e, a.win = t, a.serializer = i, a.editor = o, a.controlSelection = new r(a, o), a.win.getSelection || (a.tridentSel = new n(a))
        }

        var l = a.each, c = a.grep, u = a.trim, d = o.ie, f = o.opera;
        return s.prototype = {
            setCursorLocation: function (e, t) {
                var n = this, r = n.dom.createRng();
                e ? (r.setStart(e, t), r.setEnd(e, t), n.setRng(r), n.collapse(!1)) : (n._moveEndPoint(r, n.editor.getBody(), !0), n.setRng(r))
            }, getContent: function (e) {
                var n = this, r = n.getRng(), i = n.dom.create("body"), o = n.getSel(), a, s, l;
                return e = e || {}, a = s = "", e.get = !0, e.format = e.format || "html", e.selection = !0, n.editor.fire("BeforeGetContent", e), "text" == e.format ? n.isCollapsed() ? "" : r.text || (o.toString ? o.toString() : "") : (r.cloneContents ? (l = r.cloneContents(), l && i.appendChild(l)) : r.item !== t || r.htmlText !== t ? (i.innerHTML = "<br>" + (r.item ? r.item(0).outerHTML : r.htmlText), i.removeChild(i.firstChild)) : i.innerHTML = r.toString(), /^\s/.test(i.innerHTML) && (a = " "), /\s+$/.test(i.innerHTML) && (s = " "), e.getInner = !0, e.content = n.isCollapsed() ? "" : a + n.serializer.serialize(i, e) + s, n.editor.fire("GetContent", e), e.content)
            }, setContent: function (e, t) {
                var n = this, r = n.getRng(), i, o = n.win.document, a, s;
                if (t = t || {format: "html"}, t.set = !0, t.selection = !0, e = t.content = e, t.no_events || n.editor.fire("BeforeSetContent", t), e = t.content, r.insertNode) {
                    e += '<span id="__caret">_</span>', r.startContainer == o && r.endContainer == o ? o.body.innerHTML = e : (r.deleteContents(), 0 === o.body.childNodes.length ? o.body.innerHTML = e : r.createContextualFragment ? r.insertNode(r.createContextualFragment(e)) : (a = o.createDocumentFragment(), s = o.createElement("div"), a.appendChild(s), s.outerHTML = e, r.insertNode(a))), i = n.dom.get("__caret"), r = o.createRange(), r.setStartBefore(i), r.setEndBefore(i), n.setRng(r), n.dom.remove("__caret");
                    try {
                        n.setRng(r)
                    } catch (l) {
                    }
                } else r.item && (o.execCommand("Delete", !1, null), r = n.getRng()), /^\s+/.test(e) ? (r.pasteHTML('<span id="__mce_tmp">_</span>' + e), n.dom.remove("__mce_tmp")) : r.pasteHTML(e);
                t.no_events || n.editor.fire("SetContent", t)
            }, getStart: function () {
                var e = this, t = e.getRng(), n, r, i, o;
                if (t.duplicate || t.item) {
                    if (t.item)return t.item(0);
                    for (i = t.duplicate(), i.collapse(1), n = i.parentElement(), n.ownerDocument !== e.dom.doc && (n = e.dom.getRoot()), r = o = t.parentElement(); o = o.parentNode;)if (o == n) {
                        n = r;
                        break
                    }
                    return n
                }
                return n = t.startContainer, 1 == n.nodeType && n.hasChildNodes() && (n = n.childNodes[Math.min(n.childNodes.length - 1, t.startOffset)]), n && 3 == n.nodeType ? n.parentNode : n
            }, getEnd: function () {
                var e = this, t = e.getRng(), n, r;
                return t.duplicate || t.item ? t.item ? t.item(0) : (t = t.duplicate(), t.collapse(0), n = t.parentElement(), n.ownerDocument !== e.dom.doc && (n = e.dom.getRoot()), n && "BODY" == n.nodeName ? n.lastChild || n : n) : (n = t.endContainer, r = t.endOffset, 1 == n.nodeType && n.hasChildNodes() && (n = n.childNodes[r > 0 ? r - 1 : r]), n && 3 == n.nodeType ? n.parentNode : n)
            }, getBookmark: function (e, t) {
                function n(e, t) {
                    var n = 0;
                    return l(a.select(e), function (e, r) {
                        e == t && (n = r)
                    }), n
                }

                function r(e) {
                    function t(t) {
                        var n, r, i, o = t ? "start" : "end";
                        n = e[o + "Container"], r = e[o + "Offset"], 1 == n.nodeType && "TR" == n.nodeName && (i = n.childNodes, n = i[Math.min(t ? r : r - 1, i.length - 1)], n && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r)))
                    }

                    return t(!0), t(), e
                }

                function i() {
                    function e(e, n) {
                        var i = e[n ? "startContainer" : "endContainer"], a = e[n ? "startOffset" : "endOffset"], s = [], l, c, u = 0;
                        if (3 == i.nodeType) {
                            if (t)for (l = i.previousSibling; l && 3 == l.nodeType; l = l.previousSibling)a += l.nodeValue.length;
                            s.push(a)
                        } else c = i.childNodes, a >= c.length && c.length && (u = 1, a = Math.max(0, c.length - 1)), s.push(o.dom.nodeIndex(c[a], t) + u);
                        for (; i && i != r; i = i.parentNode)s.push(o.dom.nodeIndex(i, t));
                        return s
                    }

                    var n = o.getRng(!0), r = a.getRoot(), i = {};
                    return i.start = e(n, !0), o.isCollapsed() || (i.end = e(n)), i
                }

                var o = this, a = o.dom, s, c, u, d, f, p, h = "&#xFEFF;", m;
                if (2 == e)return p = o.getNode(), f = p ? p.nodeName : null, "IMG" == f ? {
                    name: f,
                    index: n(f, p)
                } : o.tridentSel ? o.tridentSel.getBookmark(e) : i();
                if (e)return {rng: o.getRng()};
                if (s = o.getRng(), u = a.uniqueId(), d = o.isCollapsed(), m = "overflow:hidden;line-height:0px", s.duplicate || s.item) {
                    if (s.item)return p = s.item(0), f = p.nodeName, {name: f, index: n(f, p)};
                    c = s.duplicate();
                    try {
                        s.collapse(), s.pasteHTML('<span data-mce-type="bookmark" id="' + u + '_start" style="' + m + '">' + h + "</span>"), d || (c.collapse(!1), s.moveToElementText(c.parentElement()), 0 === s.compareEndPoints("StartToEnd", c) && c.move("character", -1), c.pasteHTML('<span data-mce-type="bookmark" id="' + u + '_end" style="' + m + '">' + h + "</span>"))
                    } catch (g) {
                        return null
                    }
                } else {
                    if (p = o.getNode(), f = p.nodeName, "IMG" == f)return {name: f, index: n(f, p)};
                    c = r(s.cloneRange()), d || (c.collapse(!1), c.insertNode(a.create("span", {
                        "data-mce-type": "bookmark",
                        id: u + "_end",
                        style: m
                    }, h))), s = r(s), s.collapse(!0), s.insertNode(a.create("span", {
                        "data-mce-type": "bookmark",
                        id: u + "_start",
                        style: m
                    }, h))
                }
                return o.moveToBookmark({id: u, keep: 1}), {id: u}
            }, moveToBookmark: function (e) {
                function t(t) {
                    var n = e[t ? "start" : "end"], r, i, o, l;
                    if (n) {
                        for (o = n[0], i = s, r = n.length - 1; r >= 1; r--) {
                            if (l = i.childNodes, n[r] > l.length - 1)return;
                            i = l[n[r]]
                        }
                        3 === i.nodeType && (o = Math.min(n[0], i.nodeValue.length)), 1 === i.nodeType && (o = Math.min(n[0], i.childNodes.length)), t ? a.setStart(i, o) : a.setEnd(i, o)
                    }
                    return !0
                }

                function n(t) {
                    var n = o.get(e.id + "_" + t), r, i, a, s, d = e.keep;
                    if (n && (r = n.parentNode, "start" == t ? (d ? (r = n.firstChild, i = 1) : i = o.nodeIndex(n), u = p = r, h = m = i) : (d ? (r = n.firstChild, i = 1) : i = o.nodeIndex(n), p = r, m = i), !d)) {
                        for (s = n.previousSibling, a = n.nextSibling, l(c(n.childNodes), function (e) {
                            3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                        }); n = o.get(e.id + "_" + t);)o.remove(n, 1);
                        s && a && s.nodeType == a.nodeType && 3 == s.nodeType && !f && (i = s.nodeValue.length, s.appendData(a.nodeValue), o.remove(a), "start" == t ? (u = p = s, h = m = i) : (p = s, m = i))
                    }
                }

                function r(e) {
                    return !o.isBlock(e) || e.innerHTML || d || (e.innerHTML = '<br data-mce-bogus="1" />'), e
                }

                var i = this, o = i.dom, a, s, u, p, h, m;
                if (e)if (e.start) {
                    if (a = o.createRng(), s = o.getRoot(), i.tridentSel)return i.tridentSel.moveToBookmark(e);
                    t(!0) && t() && i.setRng(a)
                } else e.id ? (n("start"), n("end"), u && (a = o.createRng(), a.setStart(r(u), h), a.setEnd(r(p), m), i.setRng(a))) : e.name ? i.select(o.select(e.name)[e.index]) : e.rng && i.setRng(e.rng)
            }, select: function (e, t) {
                var n = this, r = n.dom, i = r.createRng(), o;
                if (n.lastFocusBookmark = null, e) {
                    if (!t && n.controlSelection.controlSelect(e))return;
                    o = r.nodeIndex(e), i.setStart(e.parentNode, o), i.setEnd(e.parentNode, o + 1), t && (n._moveEndPoint(i, e, !0), n._moveEndPoint(i, e)), n.setRng(i)
                }
                return e
            }, isCollapsed: function () {
                var e = this, t = e.getRng(), n = e.getSel();
                return !t || t.item ? !1 : t.compareEndPoints ? 0 === t.compareEndPoints("StartToEnd", t) : !n || t.collapsed
            }, collapse: function (e) {
                var t = this, n = t.getRng(), r;
                n.item && (r = n.item(0), n = t.win.document.body.createTextRange(), n.moveToElementText(r)), n.collapse(!!e), t.setRng(n)
            }, getSel: function () {
                var e = this.win;
                return e.getSelection ? e.getSelection() : e.document.selection
            }, getRng: function (e) {
                function t(e, t, n) {
                    try {
                        return t.compareBoundaryPoints(e, n)
                    } catch (r) {
                        return -1
                    }
                }

                var n = this, r, i, o, a = n.win.document, s;
                if (!e && n.lastFocusBookmark) {
                    var l = n.lastFocusBookmark;
                    return l.startContainer ? (i = a.createRange(), i.setStart(l.startContainer, l.startOffset), i.setEnd(l.endContainer, l.endOffset)) : i = l, i
                }
                if (e && n.tridentSel)return n.tridentSel.getRangeAt(0);
                try {
                    (r = n.getSel()) && (i = r.rangeCount > 0 ? r.getRangeAt(0) : r.createRange ? r.createRange() : a.createRange())
                } catch (c) {
                }
                if (d && i && i.setStart && a.selection) {
                    try {
                        s = a.selection.createRange()
                    } catch (c) {
                    }
                    s && s.item && (o = s.item(0), i = a.createRange(), i.setStartBefore(o), i.setEndAfter(o))
                }
                return i || (i = a.createRange ? a.createRange() : a.body.createTextRange()), i.setStart && 9 === i.startContainer.nodeType && i.collapsed && (o = n.dom.getRoot(), i.setStart(o, 0), i.setEnd(o, 0)), n.selectedRange && n.explicitRange && (0 === t(i.START_TO_START, i, n.selectedRange) && 0 === t(i.END_TO_END, i, n.selectedRange) ? i = n.explicitRange : (n.selectedRange = null, n.explicitRange = null)), i
            }, setRng: function (e, t) {
                var n = this, r;
                if (e.select)try {
                    e.select()
                } catch (i) {
                } else if (n.tridentSel) {
                    if (e.cloneRange)try {
                        return void n.tridentSel.addRange(e)
                    } catch (i) {
                    }
                } else if (r = n.getSel()) {
                    n.explicitRange = e;
                    try {
                        r.removeAllRanges(), r.addRange(e)
                    } catch (i) {
                    }
                    t === !1 && r.extend && (r.collapse(e.endContainer, e.endOffset), r.extend(e.startContainer, e.startOffset)), n.selectedRange = r.rangeCount > 0 ? r.getRangeAt(0) : null
                }
            }, setNode: function (e) {
                var t = this;
                return t.setContent(t.dom.getOuterHTML(e)), e
            }, getNode: function () {
                function e(e, t) {
                    for (var n = e; e && 3 === e.nodeType && 0 === e.length;)e = t ? e.nextSibling : e.previousSibling;
                    return e || n
                }

                var t = this, n = t.getRng(), r, i = n.startContainer, o = n.endContainer, a = n.startOffset, s = n.endOffset, l = t.dom.getRoot();
                return n ? n.setStart ? (r = n.commonAncestorContainer, !n.collapsed && (i == o && 2 > s - a && i.hasChildNodes() && (r = i.childNodes[a]), 3 === i.nodeType && 3 === o.nodeType && (i = i.length === a ? e(i.nextSibling, !0) : i.parentNode, o = 0 === s ? e(o.previousSibling, !1) : o.parentNode, i && i === o)) ? i : r && 3 == r.nodeType ? r.parentNode : r) : (r = n.item ? n.item(0) : n.parentElement(), r.ownerDocument !== t.win.document && (r = l), r) : l
            }, getSelectedBlocks: function (t, n) {
                var r = this, i = r.dom, o, a, s = [];
                if (a = i.getRoot(), t = i.getParent(t || r.getStart(), i.isBlock), n = i.getParent(n || r.getEnd(), i.isBlock), t && t != a && s.push(t), t && n && t != n) {
                    o = t;
                    for (var l = new e(t, a); (o = l.next()) && o != n;)i.isBlock(o) && s.push(o)
                }
                return n && t != n && n != a && s.push(n), s
            }, isForward: function () {
                var e = this.dom, t = this.getSel(), n, r;
                return t && t.anchorNode && t.focusNode ? (n = e.createRng(), n.setStart(t.anchorNode, t.anchorOffset), n.collapse(!0), r = e.createRng(), r.setStart(t.focusNode, t.focusOffset), r.collapse(!0), n.compareBoundaryPoints(n.START_TO_START, r) <= 0) : !0
            }, normalize: function () {
                var e = this, t = e.getRng();
                return !d && new i(e.dom).normalize(t) && e.setRng(t, e.isForward()), t
            }, selectorChanged: function (e, t) {
                var n = this, r;
                return n.selectorChangedData || (n.selectorChangedData = {}, r = {}, n.editor.on("NodeChange", function (e) {
                    var t = e.element, i = n.dom, o = i.getParents(t, null, i.getRoot()), a = {};
                    l(n.selectorChangedData, function (e, t) {
                        l(o, function (n) {
                            return i.is(n, t) ? (r[t] || (l(e, function (e) {
                                e(!0, {node: n, selector: t, parents: o})
                            }), r[t] = e), a[t] = e, !1) : void 0
                        })
                    }), l(r, function (e, n) {
                        a[n] || (delete r[n], l(e, function (e) {
                            e(!1, {node: t, selector: n, parents: o})
                        }))
                    })
                })), n.selectorChangedData[e] || (n.selectorChangedData[e] = []), n.selectorChangedData[e].push(t), n
            }, getScrollContainer: function () {
                for (var e, t = this.dom.getRoot(); t && "BODY" != t.nodeName;) {
                    if (t.scrollHeight > t.clientHeight) {
                        e = t;
                        break
                    }
                    t = t.parentNode
                }
                return e
            }, scrollIntoView: function (e) {
                function t(e) {
                    for (var t = 0, n = 0, r = e; r && r.nodeType;)t += r.offsetLeft || 0, n += r.offsetTop || 0, r = r.offsetParent;
                    return {x: t, y: n}
                }

                var n, r, i = this, o = i.dom, a = o.getRoot(), s, l;
                if ("BODY" != a.nodeName) {
                    var c = i.getScrollContainer();
                    if (c)return n = t(e).y - t(c).y, l = c.clientHeight, s = c.scrollTop, void((s > n || n + 25 > s + l) && (c.scrollTop = s > n ? n : n - l + 25))
                }
                r = o.getViewPort(i.editor.getWin()), n = o.getPos(e).y, s = r.y, l = r.h, (n < r.y || n + 25 > s + l) && i.editor.getWin().scrollTo(0, s > n ? n : n - l + 25)
            }, _moveEndPoint: function (t, n, r) {
                var i = n, a = new e(n, i), s = this.dom.schema.getNonEmptyElements();
                do {
                    if (3 == n.nodeType && 0 !== u(n.nodeValue).length)return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
                    if (s[n.nodeName])return void(r ? t.setStartBefore(n) : "BR" == n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
                    if (o.ie && o.ie < 11 && this.dom.isBlock(n) && this.dom.isEmpty(n))return void(r ? t.setStart(n, 0) : t.setEnd(n, 0))
                } while (n = r ? a.next() : a.prev());
                "BODY" == i.nodeName && (r ? t.setStart(i, 0) : t.setEnd(i, i.childNodes.length))
            }, destroy: function () {
                this.win = null, this.controlSelection.destroy()
            }
        }, s
    }), r(L, [p], function (e) {
        function t(e, t) {
            function r(e) {
                return e.replace(/%(\w+)/g, "")
            }

            var i, o, a = e.dom, s = "", l, c;
            if (c = e.settings.preview_styles, c === !1)return "";
            if (c || (c = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"), "string" == typeof t) {
                if (t = e.formatter.get(t), !t)return;
                t = t[0]
            }
            return i = t.block || t.inline || "span", o = a.create(i), n(t.styles, function (e, t) {
                e = r(e), e && a.setStyle(o, t, e)
            }), n(t.attributes, function (e, t) {
                e = r(e), e && a.setAttrib(o, t, e)
            }), n(t.classes, function (e) {
                e = r(e), a.hasClass(o, e) || a.addClass(o, e)
            }), e.fire("PreviewFormats"), a.setStyles(o, {
                position: "absolute",
                left: -65535
            }), e.getBody().appendChild(o), l = a.getStyle(e.getBody(), "fontSize", !0), l = /px$/.test(l) ? parseInt(l, 10) : 0, n(c.split(" "), function (t) {
                var n = a.getStyle(o, t, !0);
                if (!("background-color" == t && /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) && (n = a.getStyle(e.getBody(), t, !0), "#ffffff" == a.toHex(n).toLowerCase()) || "color" == t && "#000000" == a.toHex(n).toLowerCase())) {
                    if ("font-size" == t && /em|%$/.test(n)) {
                        if (0 === l)return;
                        n = parseFloat(n, 10) / (/%$/.test(n) ? 100 : 1), n = n * l + "px"
                    }
                    "border" == t && n && (s += "padding:0 2px;"), s += t + ":" + n + ";"
                }
            }), e.fire("AfterPreviewFormats"), a.remove(o), s
        }

        var n = e.each;
        return {getCssText: t}
    }), r(M, [f, B, p, L], function (e, t, n, r) {
        return function (i) {
            function o(e) {
                return e.nodeType && (e = e.nodeName), !!i.schema.getTextBlockElements()[e.toLowerCase()]
            }

            function a(e, t) {
                return z.getParents(e, t, z.getRoot())
            }

            function s(e) {
                return 1 === e.nodeType && "_mce_caret" === e.id
            }

            function l() {
                d({
                    valigntop: [{selector: "td,th", styles: {verticalAlign: "top"}}],
                    valignmiddle: [{selector: "td,th", styles: {verticalAlign: "middle"}}],
                    valignbottom: [{selector: "td,th", styles: {verticalAlign: "bottom"}}],
                    alignleft: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {textAlign: "left"},
                        defaultBlock: "div"
                    }, {selector: "img,table", collapsed: !1, styles: {"float": "left"}}],
                    aligncenter: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {textAlign: "center"},
                        defaultBlock: "div"
                    }, {
                        selector: "img",
                        collapsed: !1,
                        styles: {display: "block", marginLeft: "auto", marginRight: "auto"}
                    }, {selector: "table", collapsed: !1, styles: {marginLeft: "auto", marginRight: "auto"}}],
                    alignright: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {textAlign: "right"},
                        defaultBlock: "div"
                    }, {selector: "img,table", collapsed: !1, styles: {"float": "right"}}],
                    alignjustify: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {textAlign: "justify"},
                        defaultBlock: "div"
                    }],
                    bold: [{inline: "strong", remove: "all"}, {
                        inline: "span",
                        styles: {fontWeight: "bold"}
                    }, {inline: "b", remove: "all"}],
                    italic: [{inline: "em", remove: "all"}, {
                        inline: "span",
                        styles: {fontStyle: "italic"}
                    }, {inline: "i", remove: "all"}],
                    underline: [{inline: "span", styles: {textDecoration: "underline"}, exact: !0}, {
                        inline: "u",
                        remove: "all"
                    }],
                    strikethrough: [{
                        inline: "span",
                        styles: {textDecoration: "line-through"},
                        exact: !0
                    }, {inline: "strike", remove: "all"}],
                    forecolor: {inline: "span", styles: {color: "%value"}, wrap_links: !1},
                    hilitecolor: {inline: "span", styles: {backgroundColor: "%value"}, wrap_links: !1},
                    fontname: {inline: "span", styles: {fontFamily: "%value"}},
                    fontsize: {inline: "span", styles: {fontSize: "%value"}},
                    fontsize_class: {inline: "span", attributes: {"class": "%value"}},
                    blockquote: {block: "blockquote", wrapper: 1, remove: "all"},
                    subscript: {inline: "sub"},
                    superscript: {inline: "sup"},
                    code: {inline: "code"},
                    link: {
                        inline: "a", selector: "a", remove: "all", split: !0, deep: !0, onmatch: function () {
                            return !0
                        }, onformat: function (e, t, n) {
                            nt(n, function (t, n) {
                                z.setAttrib(e, n, t)
                            })
                        }
                    },
                    removeformat: [{
                        selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q",
                        remove: "all",
                        split: !0,
                        expand: !1,
                        block_expand: !0,
                        deep: !0
                    }, {
                        selector: "span",
                        attributes: ["style", "class"],
                        remove: "empty",
                        split: !0,
                        expand: !1,
                        deep: !0
                    }, {selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0}]
                }), nt("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function (e) {
                    d(e, {block: e, remove: "all"})
                }), d(i.settings.formats)
            }

            function c() {
                i.addShortcut("ctrl+b", "bold_desc", "Bold"), i.addShortcut("ctrl+i", "italic_desc", "Italic"), i.addShortcut("ctrl+u", "underline_desc", "Underline");
                for (var e = 1; 6 >= e; e++)i.addShortcut("ctrl+" + e, "", ["FormatBlock", !1, "h" + e]);
                i.addShortcut("ctrl+7", "", ["FormatBlock", !1, "p"]), i.addShortcut("ctrl+8", "", ["FormatBlock", !1, "div"]), i.addShortcut("ctrl+9", "", ["FormatBlock", !1, "address"])
            }

            function u(e) {
                return e ? F[e] : F
            }

            function d(e, t) {
                e && ("string" != typeof e ? nt(e, function (e, t) {
                    d(t, e)
                }) : (t = t.length ? t : [t], nt(t, function (e) {
                    e.deep === Q && (e.deep = !e.selector), e.split === Q && (e.split = !e.selector || e.inline), e.remove === Q && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                }), F[e] = t))
            }

            function f(e) {
                var t;
                return i.dom.getParent(e, function (e) {
                    return t = i.dom.getStyle(e, "text-decoration"), t && "none" !== t
                }), t
            }

            function p(e) {
                var t;
                1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = f(e.parentNode), i.dom.getStyle(e, "color") && t ? i.dom.setStyle(e, "text-decoration", t) : i.dom.getStyle(e, "textdecoration") === t && i.dom.setStyle(e, "text-decoration", null))
            }

            function h(t, n, r) {
                function a(e, t) {
                    if (t = t || m, e) {
                        if (t.onformat && t.onformat(e, t, n, r), nt(t.styles, function (t, r) {
                                z.setStyle(e, r, k(t, n))
                            }), t.styles) {
                            var i = z.getAttrib(e, "style");
                            i && e.setAttribute("data-mce-style", i)
                        }
                        nt(t.attributes, function (t, r) {
                            z.setAttrib(e, r, k(t, n))
                        }), nt(t.classes, function (t) {
                            t = k(t, n), z.hasClass(e, t) || z.addClass(e, t)
                        })
                    }
                }

                function l() {
                    function t(t, n) {
                        var i = new e(n);
                        for (r = i.current(); r; r = i.prev())if (r.childNodes.length > 1 || r == t || "BR" == r.tagName)return r
                    }

                    var n = i.selection.getRng(), o = n.startContainer, a = n.endContainer;
                    if (o != a && 0 === n.endOffset) {
                        var s = t(o, a), l = 3 == s.nodeType ? s.length : s.childNodes.length;
                        n.setEnd(s, l)
                    }
                    return n
                }

                function c(e, t, n, r, i) {
                    var o = [], a = -1, s, l = -1, c = -1, u;
                    return nt(e.childNodes, function (e, t) {
                        return "UL" === e.nodeName || "OL" === e.nodeName ? (a = t, s = e, !1) : void 0
                    }), nt(e.childNodes, function (e, n) {
                        "SPAN" === e.nodeName && "bookmark" == z.getAttrib(e, "data-mce-type") && (e.id == t.id + "_start" ? l = n : e.id == t.id + "_end" && (c = n))
                    }), 0 >= a || a > l && c > a ? (nt(rt(e.childNodes), i), 0) : (u = z.clone(n, Y), nt(rt(e.childNodes), function (e, t) {
                        (a > l && a > t || l > a && t > a) && (o.push(e), e.parentNode.removeChild(e))
                    }), a > l ? e.insertBefore(u, s) : l > a && e.insertBefore(u, s.nextSibling), r.push(u), nt(o, function (e) {
                        u.appendChild(e)
                    }), u)
                }

                function d(e, r, i) {
                    var l = [], u, d, p = !0;
                    u = m.inline || m.block, d = z.create(u), a(d), V.walk(e, function (e) {
                        function h(e) {
                            var y, C, x, w, _;
                            return _ = p, y = e.nodeName.toLowerCase(), C = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && Z(e) && (_ = p, p = "true" === Z(e), w = !0), N(y, "br") ? (g = 0, void(m.block && z.remove(e))) : m.wrapper && v(e, t, n) ? void(g = 0) : p && !w && m.block && !m.wrapper && o(y) && U(C, u) ? (e = z.rename(e, u), a(e), l.push(e), void(g = 0)) : m.selector && (nt(f, function (t) {
                                "collapsed"in t && t.collapsed !== b || z.is(e, t.selector) && !s(e) && (a(e, t), x = !0)
                            }), !m.inline || x) ? void(g = 0) : void(!p || w || !U(u, y) || !U(C, u) || !i && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || s(e) || m.inline && q(e) ? "li" == y && r ? g = c(e, r, d, l, h) : (g = 0, nt(rt(e.childNodes), h), w && (p = _), g = 0) : (g || (g = z.clone(d, Y), e.parentNode.insertBefore(g, e), l.push(g)), g.appendChild(e)))
                        }

                        var g;
                        nt(e, h)
                    }), m.wrap_links === !1 && nt(l, function (e) {
                        function t(e) {
                            var n, r, i;
                            if ("A" === e.nodeName) {
                                for (r = z.clone(d, Y), l.push(r), i = rt(e.childNodes), n = 0; n < i.length; n++)r.appendChild(i[n]);
                                e.appendChild(r)
                            }
                            nt(rt(e.childNodes), t)
                        }

                        t(e)
                    }), nt(l, function (e) {
                        function r(e) {
                            var t = 0;
                            return nt(e.childNodes, function (e) {
                                T(e) || M(e) || t++
                            }), t
                        }

                        function i(e) {
                            var t, n;
                            return nt(e.childNodes, function (e) {
                                return 1 != e.nodeType || M(e) || s(e) ? void 0 : (t = e, Y)
                            }), t && !M(t) && _(t, m) && (n = z.clone(t, Y), a(n), z.replace(n, e, X), z.remove(t, 1)), n || e
                        }

                        var o;
                        if (o = r(e), (l.length > 1 || !q(e)) && 0 === o)return void z.remove(e, 1);
                        if (m.inline || m.wrapper) {
                            if (m.exact || 1 !== o || (e = i(e)), nt(f, function (t) {
                                    nt(z.select(t.inline, e), function (e) {
                                        var r;
                                        if (!M(e)) {
                                            if (t.wrap_links === !1) {
                                                r = e.parentNode;
                                                do if ("A" === r.nodeName)return; while (r = r.parentNode)
                                            }
                                            B(t, n, e, t.exact ? e : null)
                                        }
                                    })
                                }), v(e.parentNode, t, n))return z.remove(e, 1), e = 0, X;
                            m.merge_with_parents && z.getParent(e.parentNode, function (r) {
                                return v(r, t, n) ? (z.remove(e, 1), e = 0, X) : void 0
                            }), e && m.merge_siblings !== !1 && (e = H(L(e), e), e = H(e, L(e, X)))
                        }
                    })
                }

                var f = u(t), m = f[0], g, y, b = !r && W.isCollapsed();
                if (m)if (r)r.nodeType ? (y = z.createRng(), y.setStartBefore(r), y.setEndAfter(r), d(A(y, f), null, !0)) : d(r, null, !0); else if (b && m.inline && !z.select("td.mce-item-selected,th.mce-item-selected").length)O("apply", t, n); else {
                    var C = i.selection.getNode();
                    $ || !f[0].defaultBlock || z.getParent(C, z.isBlock) || h(f[0].defaultBlock), i.selection.setRng(l()), g = W.getBookmark(), d(A(W.getRng(X), f), g), m.styles && (m.styles.color || m.styles.textDecoration) && (it(C, p, "childNodes"), p(C)), W.moveToBookmark(g), I(W.getRng(X)), i.nodeChanged()
                }
            }

            function m(e, t, n) {
                function r(e) {
                    var n, i, o, a, s;
                    if (1 === e.nodeType && Z(e) && (a = b, b = "true" === Z(e), s = !0), n = rt(e.childNodes), b && !s)for (i = 0, o = p.length; o > i && !B(p[i], t, e, e); i++);
                    if (h.deep && n.length) {
                        for (i = 0, o = n.length; o > i; i++)r(n[i]);
                        s && (b = a)
                    }
                }

                function o(n) {
                    var r;
                    return nt(a(n.parentNode).reverse(), function (n) {
                        var i;
                        r || "_start" == n.id || "_end" == n.id || (i = v(n, e, t), i && i.split !== !1 && (r = n))
                    }), r
                }

                function s(e, n, r, i) {
                    var o, a, s, l, c, u;
                    if (e) {
                        for (u = e.parentNode, o = n.parentNode; o && o != u; o = o.parentNode) {
                            for (a = z.clone(o, Y), c = 0; c < p.length; c++)if (B(p[c], t, a, a)) {
                                a = 0;
                                break
                            }
                            a && (s && a.appendChild(s), l || (l = a), s = a)
                        }
                        !i || h.mixed && q(e) || (n = z.split(e, n)), s && (r.parentNode.insertBefore(s, r), l.appendChild(r))
                    }
                    return n
                }

                function l(e) {
                    return s(o(e), e, e, !0)
                }

                function c(e) {
                    var t = z.get(e ? "_start" : "_end"), n = t[e ? "firstChild" : "lastChild"];
                    return M(n) && (n = n[e ? "firstChild" : "lastChild"]), z.remove(t, !0), n
                }

                function d(e) {
                    var t, n, o = e.commonAncestorContainer;
                    e = A(e, p, X), h.split && (t = P(e, X), n = P(e), t != n ? (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" == t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), o && /^T(HEAD|BODY|FOOT|R)$/.test(o.nodeName) && /^(TH|TD)$/.test(n.nodeName) && n.firstChild && (n = n.firstChild || n), t = R(t, "span", {
                        id: "_start",
                        "data-mce-type": "bookmark"
                    }), n = R(n, "span", {
                        id: "_end",
                        "data-mce-type": "bookmark"
                    }), l(t), l(n), t = c(X), n = c()) : t = n = l(t), e.startContainer = t.parentNode, e.startOffset = j(t), e.endContainer = n.parentNode, e.endOffset = j(n) + 1), V.walk(e, function (e) {
                        nt(e, function (e) {
                            r(e), 1 === e.nodeType && "underline" === i.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === f(e.parentNode) && B({
                                deep: !1,
                                exact: !0,
                                inline: "span",
                                styles: {textDecoration: "underline"}
                            }, null, e)
                        })
                    })
                }

                var p = u(e), h = p[0], m, g, b = !0;
                return n ? void(n.nodeType ? (g = z.createRng(), g.setStartBefore(n), g.setEndAfter(n), d(g)) : d(n)) : void(W.isCollapsed() && h.inline && !z.select("td.mce-item-selected,th.mce-item-selected").length ? O("remove", e, t) : (m = W.getBookmark(), d(W.getRng(X)), W.moveToBookmark(m), h.inline && y(e, t, W.getStart()) && I(W.getRng(!0)), i.nodeChanged()))
            }

            function g(e, t, n) {
                var r = u(e);
                !y(e, t, n) || "toggle"in r[0] && !r[0].toggle ? h(e, t, n) : m(e, t, n)
            }

            function v(e, t, n, r) {
                function i(e, t, i) {
                    var o, a, s = t[i], l;
                    if (t.onmatch)return t.onmatch(e, t, i);
                    if (s)if (s.length === Q) {
                        for (o in s)if (s.hasOwnProperty(o)) {
                            if (a = "attributes" === i ? z.getAttrib(e, o) : E(e, o), r && !a && !t.exact)return;
                            if ((!r || t.exact) && !N(a, S(k(s[o], n), o)))return
                        }
                    } else for (l = 0; l < s.length; l++)if ("attributes" === i ? z.getAttrib(e, s[l]) : E(e, s[l]))return t;
                    return t
                }

                var o = u(t), a, s, l;
                if (o && e)for (s = 0; s < o.length; s++)if (a = o[s], _(e, a) && i(e, a, "attributes") && i(e, a, "styles")) {
                    if (l = a.classes)for (s = 0; s < l.length; s++)if (!z.hasClass(e, l[s]))return;
                    return a
                }
            }

            function y(e, t, n) {
                function r(n) {
                    var r = z.getRoot();
                    return n === r ? !1 : (n = z.getParent(n, function (n) {
                        return n.parentNode === r || !!v(n, e, t, !0)
                    }), v(n, e, t))
                }

                var i;
                return n ? r(n) : (n = W.getNode(), r(n) ? X : (i = W.getStart(), i != n && r(i) ? X : Y))
            }

            function b(e, t) {
                var n, r = [], i = {};
                return n = W.getStart(), z.getParent(n, function (n) {
                    var o, a;
                    for (o = 0; o < e.length; o++)a = e[o], !i[a] && v(n, a, t) && (i[a] = !0, r.push(a))
                }, z.getRoot()), r
            }

            function C(e) {
                var t = u(e), n, r, i, o, s;
                if (t)for (n = W.getStart(), r = a(n), o = t.length - 1; o >= 0; o--) {
                    if (s = t[o].selector, !s || t[o].defaultBlock)return X;
                    for (i = r.length - 1; i >= 0; i--)if (z.is(r[i], s))return X
                }
                return Y
            }

            function x(e, t, n) {
                var r;
                return J || (J = {}, r = {}, i.on("NodeChange", function (e) {
                    var t = a(e.element), n = {};
                    nt(J, function (e, i) {
                        nt(t, function (o) {
                            return v(o, i, {}, e.similar) ? (r[i] || (nt(e, function (e) {
                                e(!0, {node: o, format: i, parents: t})
                            }), r[i] = e), n[i] = e, !1) : void 0
                        })
                    }), nt(r, function (i, o) {
                        n[o] || (delete r[o], nt(i, function (n) {
                            n(!1, {node: e.element, format: o, parents: t})
                        }))
                    })
                })), nt(e.split(","), function (e) {
                    J[e] || (J[e] = [], J[e].similar = n), J[e].push(t)
                }), this
            }

            function w(e) {
                return r.getCssText(i, e)
            }

            function _(e, t) {
                return N(e, t.inline) ? X : N(e, t.block) ? X : t.selector ? 1 == e.nodeType && z.is(e, t.selector) : void 0
            }

            function N(e, t) {
                return e = e || "", t = t || "", e = "" + (e.nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() == t.toLowerCase()
            }

            function E(e, t) {
                return S(z.getStyle(e, t), t)
            }

            function S(e, t) {
                return ("color" == t || "backgroundColor" == t) && (e = z.toHex(e)), "fontWeight" == t && 700 == e && (e = "bold"), "fontFamily" == t && (e = e.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + e
            }

            function k(e, t) {
                return "string" != typeof e ? e = e(t) : t && (e = e.replace(/%(\w+)/g, function (e, n) {
                    return t[n] || e
                })), e
            }

            function T(e) {
                return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
            }

            function R(e, t, n) {
                var r = z.create(t, n);
                return e.parentNode.insertBefore(r, e), r.appendChild(e), r
            }

            function A(t, n, r) {
                function s(e) {
                    function t(e) {
                        return "BR" == e.nodeName && e.getAttribute("data-mce-bogus") && !e.nextSibling
                    }

                    var r, i, o, a, s;
                    if (r = i = e ? g : y, a = e ? "previousSibling" : "nextSibling", s = z.getRoot(), 3 == r.nodeType && !T(r) && (e ? v > 0 : b < r.nodeValue.length))return r;
                    for (; ;) {
                        if (!n[0].block_expand && q(i))return i;
                        for (o = i[a]; o; o = o[a])if (!M(o) && !T(o) && !t(o))return i;
                        if (i.parentNode == s) {
                            r = i;
                            break
                        }
                        i = i.parentNode
                    }
                    return r
                }

                function l(e, t) {
                    for (t === Q && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();)e = e.childNodes[t], e && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
                    return {node: e, offset: t}
                }

                function c(e) {
                    for (var t = e; t;) {
                        if (1 === t.nodeType && Z(t))return "false" === Z(t) ? t : e;
                        t = t.parentNode
                    }
                    return e
                }

                function u(t, n, o) {
                    function a(e, t) {
                        var n, i, a = e.nodeValue;
                        return "undefined" == typeof t && (t = o ? a.length : 0), o ? (n = a.lastIndexOf(" ", t), i = a.lastIndexOf("\xa0", t), n = n > i ? n : i, -1 === n || r || n++) : (n = a.indexOf(" ", t), i = a.indexOf("\xa0", t), n = -1 !== n && (-1 === i || i > n) ? n : i), n
                    }

                    var s, l, c, u;
                    if (3 === t.nodeType) {
                        if (c = a(t, n), -1 !== c)return {container: t, offset: c};
                        u = t
                    }
                    for (s = new e(t, z.getParent(t, q) || i.getBody()); l = s[o ? "prev" : "next"]();)if (3 === l.nodeType) {
                        if (u = l, c = a(l), -1 !== c)return {container: l, offset: c}
                    } else if (q(l))break;
                    return u ? (n = o ? 0 : u.length, {container: u, offset: n}) : void 0
                }

                function d(e, r) {
                    var i, o, s, l;
                    for (3 == e.nodeType && 0 === e.nodeValue.length && e[r] && (e = e[r]), i = a(e), o = 0; o < i.length; o++)for (s = 0; s < n.length; s++)if (l = n[s], !("collapsed"in l && l.collapsed !== t.collapsed) && z.is(i[o], l.selector))return i[o];
                    return e
                }

                function f(e, t) {
                    var r, i = z.getRoot();
                    if (n[0].wrapper || (r = z.getParent(e, n[0].block, i)), r || (r = z.getParent(3 == e.nodeType ? e.parentNode : e, function (e) {
                            return e != i && o(e)
                        })), r && n[0].wrapper && (r = a(r, "ul,ol").reverse()[0] || r), !r)for (r = e; r[t] && !q(r[t]) && (r = r[t], !N(r, "br")););
                    return r || e
                }

                var p, h, m, g = t.startContainer, v = t.startOffset, y = t.endContainer, b = t.endOffset;
                if (1 == g.nodeType && g.hasChildNodes() && (p = g.childNodes.length - 1, g = g.childNodes[v > p ? p : v], 3 == g.nodeType && (v = 0)), 1 == y.nodeType && y.hasChildNodes() && (p = y.childNodes.length - 1, y = y.childNodes[b > p ? p : b - 1], 3 == y.nodeType && (b = y.nodeValue.length)), g = c(g), y = c(y), (M(g.parentNode) || M(g)) && (g = M(g) ? g : g.parentNode, g = g.nextSibling || g, 3 == g.nodeType && (v = 0)), (M(y.parentNode) || M(y)) && (y = M(y) ? y : y.parentNode, y = y.previousSibling || y, 3 == y.nodeType && (b = y.length)), n[0].inline && (t.collapsed && (m = u(g, v, !0), m && (g = m.container, v = m.offset), m = u(y, b), m && (y = m.container, b = m.offset)), h = l(y, b), h.node)) {
                    for (; h.node && 0 === h.offset && h.node.previousSibling;)h = l(h.node.previousSibling);
                    h.node && h.offset > 0 && 3 === h.node.nodeType && " " === h.node.nodeValue.charAt(h.offset - 1) && h.offset > 1 && (y = h.node, y.splitText(h.offset - 1))
                }
                return (n[0].inline || n[0].block_expand) && (n[0].inline && 3 == g.nodeType && 0 !== v || (g = s(!0)), n[0].inline && 3 == y.nodeType && b !== y.nodeValue.length || (y = s())), n[0].selector && n[0].expand !== Y && !n[0].inline && (g = d(g, "previousSibling"), y = d(y, "nextSibling")), (n[0].block || n[0].selector) && (g = f(g, "previousSibling"), y = f(y, "nextSibling"), n[0].block && (q(g) || (g = s(!0)), q(y) || (y = s()))), 1 == g.nodeType && (v = j(g), g = g.parentNode), 1 == y.nodeType && (b = j(y) + 1, y = y.parentNode), {
                    startContainer: g,
                    startOffset: v,
                    endContainer: y,
                    endOffset: b
                }
            }

            function B(e, t, n, r) {
                var i, o, a;
                if (!_(n, e))return Y;
                if ("all" != e.remove)for (nt(e.styles, function (e, i) {
                    e = S(k(e, t), i), "number" == typeof i && (i = e, r = 0), (!r || N(E(r, i), e)) && z.setStyle(n, i, ""), a = 1
                }), a && "" === z.getAttrib(n, "style") && (n.removeAttribute("style"), n.removeAttribute("data-mce-style")), nt(e.attributes, function (e, i) {
                    var o;
                    if (e = k(e, t), "number" == typeof i && (i = e, r = 0), !r || N(z.getAttrib(r, i), e)) {
                        if ("class" == i && (e = z.getAttrib(n, i), e && (o = "", nt(e.split(/\s+/), function (e) {
                                /mce\w+/.test(e) && (o += (o ? " " : "") + e)
                            }), o)))return void z.setAttrib(n, i, o);
                        "class" == i && n.removeAttribute("className"), G.test(i) && n.removeAttribute("data-mce-" + i), n.removeAttribute(i)
                    }
                }), nt(e.classes, function (e) {
                    e = k(e, t), (!r || z.hasClass(r, e)) && z.removeClass(n, e)
                }), o = z.getAttribs(n), i = 0; i < o.length; i++)if (0 !== o[i].nodeName.indexOf("_"))return Y;
                return "none" != e.remove ? (D(n, e), X) : void 0
            }

            function D(e, t) {
                function n(e, t, n) {
                    return e = L(e, t, n), !e || "BR" == e.nodeName || q(e)
                }

                var r = e.parentNode, o;
                t.block && ($ ? r == z.getRoot() && (t.list_block && N(e, t.list_block) || nt(rt(e.childNodes), function (e) {
                    U($, e.nodeName.toLowerCase()) ? o ? o.appendChild(e) : (o = R(e, $), z.setAttribs(o, i.settings.forced_root_block_attrs)) : o = 0
                })) : q(e) && !q(r) && (n(e, Y) || n(e.firstChild, X, 1) || e.insertBefore(z.create("br"), e.firstChild), n(e, X) || n(e.lastChild, Y, 1) || e.appendChild(z.create("br")))), t.selector && t.inline && !N(t.inline, e) || z.remove(e, 1)
            }

            function L(e, t, n) {
                if (e)for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t])if (1 == e.nodeType || !T(e))return e
            }

            function M(e) {
                return e && 1 == e.nodeType && "bookmark" == e.getAttribute("data-mce-type")
            }

            function H(e, t) {
                function n(e, t) {
                    function n(e) {
                        var t = {};
                        return nt(z.getAttribs(e), function (n) {
                            var r = n.nodeName.toLowerCase();
                            0 !== r.indexOf("_") && "style" !== r && "data-mce-style" !== r && (t[r] = z.getAttrib(e, r))
                        }), t
                    }

                    function r(e, t) {
                        var n, r;
                        for (r in e)if (e.hasOwnProperty(r)) {
                            if (n = t[r], n === Q)return Y;
                            if (e[r] != n)return Y;
                            delete t[r]
                        }
                        for (r in t)if (t.hasOwnProperty(r))return Y;
                        return X
                    }

                    return e.nodeName != t.nodeName ? Y : r(n(e), n(t)) && r(z.parseStyle(z.getAttrib(e, "style")), z.parseStyle(z.getAttrib(t, "style"))) ? !M(e) && !M(t) : Y
                }

                function r(e, t) {
                    for (i = e; i; i = i[t]) {
                        if (3 == i.nodeType && 0 !== i.nodeValue.length)return e;
                        if (1 == i.nodeType && !M(i))return i
                    }
                    return e
                }

                var i, o;
                if (e && t && (e = r(e, "previousSibling"), t = r(t, "nextSibling"), n(e, t))) {
                    for (i = e.nextSibling; i && i != t;)o = i, i = i.nextSibling, e.appendChild(o);
                    return z.remove(t), nt(rt(t.childNodes), function (t) {
                        e.appendChild(t)
                    }), e
                }
                return t
            }

            function P(t, n) {
                var r, o, a;
                return r = t[n ? "startContainer" : "endContainer"], o = t[n ? "startOffset" : "endOffset"], 1 == r.nodeType && (a = r.childNodes.length - 1, !n && o && o--, r = r.childNodes[o > a ? a : o]), 3 === r.nodeType && n && o >= r.nodeValue.length && (r = new e(r, i.getBody()).next() || r), 3 !== r.nodeType || n || 0 !== o || (r = new e(r, i.getBody()).prev() || r), r
            }

            function O(t, n, r) {
                function a(e) {
                    var t = z.create("span", {id: y, "data-mce-bogus": !0, style: b ? "color:red" : ""});
                    return e && t.appendChild(i.getDoc().createTextNode(K)), t
                }

                function s(e, t) {
                    for (; e;) {
                        if (3 === e.nodeType && e.nodeValue !== K || e.childNodes.length > 1)return !1;
                        t && 1 === e.nodeType && t.push(e), e = e.firstChild
                    }
                    return !0
                }

                function l(e) {
                    for (; e;) {
                        if (e.id === y)return e;
                        e = e.parentNode
                    }
                }

                function c(t) {
                    var n;
                    if (t)for (n = new e(t, t), t = n.current(); t; t = n.next())if (3 === t.nodeType)return t
                }

                function d(e, t) {
                    var n, r;
                    if (e)r = W.getRng(!0), s(e) ? (t !== !1 && (r.setStartBefore(e), r.setEndBefore(e)), z.remove(e)) : (n = c(e), n.nodeValue.charAt(0) === K && (n = n.deleteData(0, 1)), z.remove(e, 1)), W.setRng(r); else if (e = l(W.getStart()), !e)for (; e = z.get(y);)d(e, !1)
                }

                function f() {
                    var e, t, i, o, s, d, f;
                    e = W.getRng(!0), o = e.startOffset, d = e.startContainer, f = d.nodeValue, t = l(W.getStart()), t && (i = c(t)), f && o > 0 && o < f.length && /\w/.test(f.charAt(o)) && /\w/.test(f.charAt(o - 1)) ? (s = W.getBookmark(), e.collapse(!0), e = A(e, u(n)), e = V.split(e), h(n, r, e), W.moveToBookmark(s)) : (t && i.nodeValue === K ? h(n, r, t) : (t = a(!0), i = t.firstChild, e.insertNode(t), o = 1, h(n, r, t)), W.setCursorLocation(i, o))
                }

                function p() {
                    var e = W.getRng(!0), t, i, s, l, c, d, f = [], p, h;
                    for (t = e.startContainer, i = e.startOffset, c = t, 3 == t.nodeType && ((i != t.nodeValue.length || t.nodeValue === K) && (l = !0), c = c.parentNode); c;) {
                        if (v(c, n, r)) {
                            d = c;
                            break
                        }
                        c.nextSibling && (l = !0), f.push(c), c = c.parentNode
                    }
                    if (d)if (l)s = W.getBookmark(), e.collapse(!0), e = A(e, u(n), !0), e = V.split(e), m(n, r, e), W.moveToBookmark(s); else {
                        for (h = a(), c = h, p = f.length - 1; p >= 0; p--)c.appendChild(z.clone(f[p], !1)), c = c.firstChild;
                        c.appendChild(z.doc.createTextNode(K)), c = c.firstChild;
                        var g = z.getParent(d, o);
                        g && z.isEmpty(g) ? d.parentNode.replaceChild(h, d) : z.insertAfter(h, d), W.setCursorLocation(c, 1), z.isEmpty(d) && z.remove(d)
                    }
                }

                function g() {
                    var e;
                    e = l(W.getStart()), e && !z.isEmpty(e) && it(e, function (e) {
                        1 != e.nodeType || e.id === y || z.isEmpty(e) || z.setAttrib(e, "data-mce-bogus", null)
                    }, "childNodes")
                }

                var y = "_mce_caret", b = i.settings.caret_debug;
                i._hasCaretEvents || (tt = function () {
                    var e = [], t;
                    if (s(l(W.getStart()), e))for (t = e.length; t--;)z.setAttrib(e[t], "data-mce-bogus", "1")
                }, et = function (e) {
                    var t = e.keyCode;
                    d(), (8 == t || 37 == t || 39 == t) && d(l(W.getStart())), g()
                }, i.on("SetContent", function (e) {
                    e.selection && g()
                }), i._hasCaretEvents = !0), "apply" == t ? f() : p()
            }

            function I(t) {
                var n = t.startContainer, r = t.startOffset, i, o, a, s, l;
                if (3 == n.nodeType && r >= n.nodeValue.length && (r = j(n), n = n.parentNode, i = !0), 1 == n.nodeType)for (s = n.childNodes, n = s[Math.min(r, s.length - 1)], o = new e(n, z.getParent(n, z.isBlock)), (r > s.length - 1 || i) && o.next(), a = o.current(); a; a = o.next())if (3 == a.nodeType && !T(a))return l = z.create("a", null, K), a.parentNode.insertBefore(l, a), t.setStart(a, 0), W.setRng(t), void z.remove(l)
            }

            var F = {}, z = i.dom, W = i.selection, V = new t(z), U = i.schema.isValidChild, q = z.isBlock, $ = i.settings.forced_root_block, j = z.nodeIndex, K = "\ufeff", G = /^(src|href|style)$/, Y = !1, X = !0, J, Q, Z = z.getContentEditable, et, tt, nt = n.each, rt = n.grep, it = n.walk, ot = n.extend;
            ot(this, {
                get: u,
                register: d,
                apply: h,
                remove: m,
                toggle: g,
                match: y,
                matchAll: b,
                matchNode: v,
                canApply: C,
                formatChanged: x,
                getCssText: w
            }), l(), c(), i.on("BeforeGetContent", function () {
                tt && tt()
            }), i.on("mouseup keydown", function (e) {
                et && et(e)
            })
        }
    }), r(H, [g, p], function (e, t) {
        var n = t.trim, r;
        return r = new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>", "<div[^>]+data-mce-bogus[^>]+><\\/div>", '\\s?data-mce-selected="[^"]+"'].join("|"), "gi"), function (t) {
            function i() {
                return n(t.getContent({format: "raw", no_events: 1}).replace(r, ""))
            }

            function o(e) {
                a.typing = !1, a.add({}, e)
            }

            var a = this, s = 0, l = [], c, u, d = 0;
            return t.on("init", function () {
                a.add()
            }), t.on("BeforeExecCommand", function (e) {
                var t = e.command;
                "Undo" != t && "Redo" != t && "mceRepaint" != t && a.beforeChange()
            }), t.on("ExecCommand", function (e) {
                var t = e.command;
                "Undo" != t && "Redo" != t && "mceRepaint" != t && o(e)
            }), t.on("ObjectResizeStart", function () {
                a.beforeChange()
            }), t.on("SaveContent ObjectResized blur", o), t.on("DragEnd", o), t.on("KeyUp", function (n) {
                var r = n.keyCode;
                (r >= 33 && 36 >= r || r >= 37 && 40 >= r || 45 == r || 13 == r || n.ctrlKey) && (o(), t.nodeChanged()), (46 == r || 8 == r || e.mac && (91 == r || 93 == r)) && t.nodeChanged(), u && a.typing && (t.isDirty() || (t.isNotDirty = !l[0] || i() == l[0].content, t.isNotDirty || t.fire("change", {
                    level: l[0],
                    lastLevel: null
                })), t.fire("TypingUndo"), u = !1, t.nodeChanged())
            }), t.on("KeyDown", function (e) {
                var t = e.keyCode;
                return t >= 33 && 36 >= t || t >= 37 && 40 >= t || 45 == t ? void(a.typing && o(e)) : void((16 > t || t > 20) && 224 != t && 91 != t && !a.typing && (a.beforeChange(), a.typing = !0, a.add({}, e), u = !0))
            }), t.on("MouseDown", function (e) {
                a.typing && o(e)
            }), t.addShortcut("ctrl+z", "", "Undo"), t.addShortcut("ctrl+y,ctrl+shift+z", "", "Redo"), t.on("AddUndo Undo Redo ClearUndos MouseUp", function (e) {
                e.isDefaultPrevented() || t.nodeChanged()
            }), a = {
                data: l, typing: !1, beforeChange: function () {
                    d || (c = t.selection.getBookmark(2, !0))
                }, add: function (e, n) {
                    var r, o = t.settings, a;
                    if (e = e || {}, e.content = i(), d || t.removed)return null;
                    if (a = l[s], t.fire("BeforeAddUndo", {
                            level: e,
                            lastLevel: a,
                            originalEvent: n
                        }).isDefaultPrevented())return null;
                    if (a && a.content == e.content)return null;
                    if (l[s] && (l[s].beforeBookmark = c), o.custom_undo_redo_levels && l.length > o.custom_undo_redo_levels) {
                        for (r = 0; r < l.length - 1; r++)l[r] = l[r + 1];
                        l.length--, s = l.length
                    }
                    e.bookmark = t.selection.getBookmark(2, !0), s < l.length - 1 && (l.length = s + 1), l.push(e), s = l.length - 1;
                    var u = {level: e, lastLevel: a, originalEvent: n};
                    return t.fire("AddUndo", u), s > 0 && (t.isNotDirty = !1, t.fire("change", u)), e
                }, undo: function () {
                    var e;
                    return a.typing && (a.add(), a.typing = !1), s > 0 && (e = l[--s], 0 === s && (t.isNotDirty = !0), t.setContent(e.content, {format: "raw"}), t.selection.moveToBookmark(e.beforeBookmark), t.fire("undo", {level: e})), e
                }, redo: function () {
                    var e;
                    return s < l.length - 1 && (e = l[++s], t.setContent(e.content, {format: "raw"}), t.selection.moveToBookmark(e.bookmark), t.fire("redo", {level: e})), e
                }, clear: function () {
                    l = [], s = 0, a.typing = !1, t.fire("ClearUndos")
                }, hasUndo: function () {
                    return s > 0 || a.typing && l[0] && i() != l[0].content
                }, hasRedo: function () {
                    return s < l.length - 1 && !this.typing
                }, transact: function (e) {
                    a.beforeChange();
                    try {
                        d++, e()
                    } finally {
                        d--
                    }
                    a.add()
                }
            }
        }
    }), r(P, [f, B, g], function (e, t, n) {
        var r = n.ie && n.ie < 11;
        return function (i) {
            function o(o) {
                function f(e) {
                    return e && a.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && !/^(fixed|absolute)/i.test(e.style.position) && "true" !== a.getContentEditable(e)
                }

                function p(e) {
                    var t;
                    a.isBlock(e) && (t = s.getRng(), e.appendChild(a.create("span", null, "\xa0")), s.select(e), e.lastChild.outerHTML = "", s.setRng(t))
                }

                function h(e) {
                    for (var t = e, n = [], r; t = t.firstChild;) {
                        if (a.isBlock(t))return;
                        1 != t.nodeType || d[t.nodeName.toLowerCase()] || n.push(t)
                    }
                    for (r = n.length; r--;)t = n[r], !t.hasChildNodes() || t.firstChild == t.lastChild && "" === t.firstChild.nodeValue ? a.remove(t) : "A" == t.nodeName && " " === (t.innerText || t.textContent) && a.remove(t)
                }

                function m(t) {
                    function r(e) {
                        for (; e;) {
                            if (1 == e.nodeType || 3 == e.nodeType && e.data && /[\r\n\s]/.test(e.data))return e;
                            e = e.nextSibling
                        }
                    }

                    var i, o, l, c = t, u;
                    if (n.ie && n.ie < 9 && B && B.firstChild && B.firstChild == B.lastChild && "BR" == B.firstChild.tagName && a.remove(B.firstChild), "LI" == t.nodeName) {
                        var f = r(t.firstChild);
                        f && /^(UL|OL)$/.test(f.nodeName) && t.insertBefore(a.doc.createTextNode("\xa0"), t.firstChild)
                    }
                    if (l = a.createRng(), t.hasChildNodes()) {
                        for (i = new e(t, t); o = i.current();) {
                            if (3 == o.nodeType) {
                                l.setStart(o, 0), l.setEnd(o, 0);
                                break
                            }
                            if (d[o.nodeName.toLowerCase()]) {
                                l.setStartBefore(o), l.setEndBefore(o);
                                break
                            }
                            c = o, o = i.next()
                        }
                        o || (l.setStart(c, 0), l.setEnd(c, 0))
                    } else"BR" == t.nodeName ? t.nextSibling && a.isBlock(t.nextSibling) ? ((!D || 9 > D) && (u = a.create("br"), t.parentNode.insertBefore(u, t)), l.setStartBefore(t), l.setEndBefore(t)) : (l.setStartAfter(t), l.setEndAfter(t)) : (l.setStart(t, 0), l.setEnd(t, 0));
                    s.setRng(l), a.remove(u), s.scrollIntoView(t)
                }

                function g(e) {
                    var t = l.forced_root_block;
                    t && t.toLowerCase() === e.tagName.toLowerCase() && a.setAttribs(e, l.forced_root_block_attrs)
                }

                function v(e) {
                    var t = R, n, i, o;
                    if (e || "TABLE" == O ? (n = a.create(e || F), g(n)) : n = B.cloneNode(!1), o = n, l.keep_styles !== !1)do if (/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U|VAR|CITE|DFN|CODE|MARK|Q|SUP|SUB|SAMP)$/.test(t.nodeName)) {
                        if ("_mce_caret" == t.id)continue;
                        i = t.cloneNode(!1), a.setAttrib(i, "id", ""), n.hasChildNodes() ? (i.appendChild(n.firstChild), n.appendChild(i)) : (o = i, n.appendChild(i))
                    } while (t = t.parentNode);
                    return r || (o.innerHTML = '<br data-mce-bogus="1">'), n
                }

                function y(t) {
                    var n, r, i;
                    if (3 == R.nodeType && (t ? A > 0 : A < R.nodeValue.length))return !1;
                    if (R.parentNode == B && z && !t)return !0;
                    if (t && 1 == R.nodeType && R == B.firstChild)return !0;
                    if ("TABLE" === R.nodeName || R.previousSibling && "TABLE" == R.previousSibling.nodeName)return z && !t || !z && t;
                    for (n = new e(R, B), 3 == R.nodeType && (t && 0 === A ? n.prev() : t || A != R.nodeValue.length || n.next()); r = n.current();) {
                        if (1 === r.nodeType) {
                            if (!r.getAttribute("data-mce-bogus") && (i = r.nodeName.toLowerCase(), d[i] && "br" !== i))return !1
                        } else if (3 === r.nodeType && !/^[ \t\r\n]*$/.test(r.nodeValue))return !1;
                        t ? n.prev() : n.next()
                    }
                    return !0
                }

                function b(e, t) {
                    var n, r, o, s, l, c, d = F || "P";
                    if (r = a.getParent(e, a.isBlock), c = i.getBody().nodeName.toLowerCase(), !r || !f(r)) {
                        if (r = r || T, !r.hasChildNodes())return n = a.create(d), g(n), r.appendChild(n), S.setStart(n, 0), S.setEnd(n, 0), n;
                        for (s = e; s.parentNode != r;)s = s.parentNode;
                        for (; s && !a.isBlock(s);)o = s, s = s.previousSibling;
                        if (o && u.isValidChild(c, d.toLowerCase())) {
                            for (n = a.create(d), g(n), o.parentNode.insertBefore(n, o), s = o; s && !a.isBlock(s);)l = s.nextSibling, n.appendChild(s), s = l;
                            S.setStart(e, t), S.setEnd(e, t)
                        }
                    }
                    return e
                }

                function C() {
                    function e(e) {
                        for (var t = P[e ? "firstChild" : "lastChild"]; t && 1 != t.nodeType;)t = t[e ? "nextSibling" : "previousSibling"];
                        return t === B
                    }

                    function t() {
                        var e = P.parentNode;
                        return "LI" == e.nodeName ? e : P
                    }

                    var n = P.parentNode.nodeName;
                    /^(OL|UL|LI)$/.test(n) && (F = "LI"), M = F ? v(F) : a.create("BR"), e(!0) && e() ? "LI" == n ? a.insertAfter(M, t()) : a.replace(M, P) : e(!0) ? "LI" == n ? (a.insertAfter(M, t()), M.appendChild(a.doc.createTextNode(" ")), M.appendChild(P)) : P.parentNode.insertBefore(M, P) : e() ? (a.insertAfter(M, t()), p(M)) : (P = t(), k = S.cloneRange(), k.setStartAfter(B), k.setEndAfter(P), H = k.extractContents(), "LI" == F && "LI" == H.firstChild.nodeName ? (M = H.firstChild, a.insertAfter(H, P)) : (a.insertAfter(H, P), a.insertAfter(M, P))), a.remove(B), m(M), c.add()
                }

                function x() {
                    for (var t = new e(R, B), n; n = t.next();)if (d[n.nodeName.toLowerCase()] || n.length > 0)return !0
                }

                function w() {
                    var e, t, n;
                    R && 3 == R.nodeType && A >= R.nodeValue.length && (r || x() || (e = a.create("br"), S.insertNode(e), S.setStartAfter(e), S.setEndAfter(e), t = !0)), e = a.create("br"), S.insertNode(e), r && "PRE" == O && (!D || 8 > D) && e.parentNode.insertBefore(a.doc.createTextNode("\r"), e), n = a.create("span", {}, "&nbsp;"), e.parentNode.insertBefore(n, e), s.scrollIntoView(n), a.remove(n), t ? (S.setStartBefore(e), S.setEndBefore(e)) : (S.setStartAfter(e), S.setEndAfter(e)), s.setRng(S), c.add()
                }

                function _(e) {
                    do 3 === e.nodeType && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild; while (e)
                }

                function N(e) {
                    var t = a.getRoot(), n, r;
                    for (n = e; n !== t && "false" !== a.getContentEditable(n);)"true" === a.getContentEditable(n) && (r = n), n = n.parentNode;
                    return n !== t ? r : t
                }

                function E(e) {
                    var t;
                    r || (e.normalize(), t = e.lastChild, (!t || /^(left|right)$/gi.test(a.getStyle(t, "float", !0))) && a.add(e, "br"))
                }

                var S, k, T, R, A, B, D, L, M, H, P, O, I, F, z;
                if (S = s.getRng(!0), !o.isDefaultPrevented()) {
                    if (!S.collapsed)return void i.execCommand("Delete");
                    if (new t(a).normalize(S), R = S.startContainer, A = S.startOffset, F = (l.force_p_newlines ? "p" : "") || l.forced_root_block, F = F ? F.toUpperCase() : "", D = a.doc.documentMode, L = o.shiftKey, 1 == R.nodeType && R.hasChildNodes() && (z = A > R.childNodes.length - 1, R = R.childNodes[Math.min(A, R.childNodes.length - 1)] || R, A = z && 3 == R.nodeType ? R.nodeValue.length : 0), T = N(R)) {
                        if (c.beforeChange(), !a.isBlock(T) && T != a.getRoot())return void((!F || L) && w());
                        if ((F && !L || !F && L) && (R = b(R, A)), B = a.getParent(R, a.isBlock), P = B ? a.getParent(B.parentNode, a.isBlock) : null, O = B ? B.nodeName.toUpperCase() : "", I = P ? P.nodeName.toUpperCase() : "", "LI" != I || o.ctrlKey || (B = P, O = I), "LI" == O) {
                            if (!F && L)return void w();
                            if (a.isEmpty(B))return void C()
                        }
                        if ("PRE" == O && l.br_in_pre !== !1) {
                            if (!L)return void w()
                        } else if (!F && !L && "LI" != O || F && L)return void w();
                        F && B === i.getBody() || (F = F || "P", y() ? (M = /^(H[1-6]|PRE|FIGURE)$/.test(O) && "HGROUP" != I ? v(F) : v(), l.end_container_on_empty_block && f(P) && a.isEmpty(B) ? M = a.split(P, B) : a.insertAfter(M, B), m(M)) : y(!0) ? (M = B.parentNode.insertBefore(v(), B), p(M), m(B)) : (k = S.cloneRange(), k.setEndAfter(B), H = k.extractContents(), _(H), M = H.firstChild, a.insertAfter(H, B), h(M), E(B), m(M)), a.setAttrib(M, "id", ""), i.fire("NewBlock", {newBlock: M}), c.add())
                    }
                }
            }

            var a = i.dom, s = i.selection, l = i.settings, c = i.undoManager, u = i.schema, d = u.getNonEmptyElements();
            i.on("keydown", function (e) {
                13 == e.keyCode && o(e) !== !1 && e.preventDefault()
            })
        }
    }), r(O, [], function () {
        return function (e) {
            function t() {
                var t = i.getStart(), s = e.getBody(), l, c, u, d, f, p, h, m = -16777215, g, v, y, b, C;
                if (C = n.forced_root_block, t && 1 === t.nodeType && C) {
                    for (; t && t != s;) {
                        if (a[t.nodeName])return;
                        t = t.parentNode
                    }
                    if (l = i.getRng(), l.setStart) {
                        c = l.startContainer, u = l.startOffset, d = l.endContainer, f = l.endOffset;
                        try {
                            v = e.getDoc().activeElement === s
                        } catch (x) {
                        }
                    } else l.item && (t = l.item(0), l = e.getDoc().body.createTextRange(), l.moveToElementText(t)), v = l.parentElement().ownerDocument === e.getDoc(), y = l.duplicate(), y.collapse(!0), u = -1 * y.move("character", m), y.collapsed || (y = l.duplicate(), y.collapse(!1), f = -1 * y.move("character", m) - u);
                    for (t = s.firstChild, b = s.nodeName.toLowerCase(); t;)if ((3 === t.nodeType || 1 == t.nodeType && !a[t.nodeName]) && o.isValidChild(b, C.toLowerCase())) {
                        if (3 === t.nodeType && 0 === t.nodeValue.length) {
                            h = t, t = t.nextSibling, r.remove(h);
                            continue
                        }
                        p || (p = r.create(C, e.settings.forced_root_block_attrs), t.parentNode.insertBefore(p, t), g = !0), h = t, t = t.nextSibling, p.appendChild(h)
                    } else p = null, t = t.nextSibling;
                    if (g && v) {
                        if (l.setStart)l.setStart(c, u), l.setEnd(d, f), i.setRng(l); else try {
                            l = e.getDoc().body.createTextRange(), l.moveToElementText(s), l.collapse(!0), l.moveStart("character", u), f > 0 && l.moveEnd("character", f), l.select()
                        } catch (x) {
                        }
                        e.nodeChanged()
                    }
                }
            }

            var n = e.settings, r = e.dom, i = e.selection, o = e.schema, a = o.getBlockElements();
            n.forced_root_block && e.on("NodeChange", t)
        }
    }), r(I, [S, g, p], function (e, n, r) {
        var i = r.each, o = r.extend, a = r.map, s = r.inArray, l = r.explode, c = n.gecko, u = n.ie, d = !0, f = !1;
        return function (r) {
            function p(e, t, n) {
                var r;
                return e = e.toLowerCase(), (r = N.exec[e]) ? (r(e, t, n), d) : f
            }

            function h(e) {
                var t;
                return e = e.toLowerCase(), (t = N.state[e]) ? t(e) : -1
            }

            function m(e) {
                var t;
                return e = e.toLowerCase(), (t = N.value[e]) ? t(e) : f
            }

            function g(e, t) {
                t = t || "exec", i(e, function (e, n) {
                    i(n.toLowerCase().split(","), function (n) {
                        N[t][n] = e
                    })
                })
            }

            function v(e, n, i) {
                return n === t && (n = f), i === t && (i = null), r.getDoc().execCommand(e, n, i)
            }

            function y(e) {
                return S.match(e)
            }

            function b(e, n) {
                S.toggle(e, n ? {value: n} : t), r.nodeChanged()
            }

            function C(e) {
                k = _.getBookmark(e)
            }

            function x() {
                _.moveToBookmark(k)
            }

            var w = r.dom, _ = r.selection, N = {state: {}, exec: {}, value: {}}, E = r.settings, S = r.formatter, k;
            o(this, {
                execCommand: p,
                queryCommandState: h,
                queryCommandValue: m,
                addCommands: g
            }), g({
                "mceResetDesignMode,mceBeginUndoLevel": function () {
                }, "mceEndUndoLevel,mceAddUndoLevel": function () {
                    r.undoManager.add()
                }, "Cut,Copy,Paste": function (e) {
                    var t = r.getDoc(), i;
                    try {
                        v(e)
                    } catch (o) {
                        i = d
                    }
                    if (i || !t.queryCommandSupported(e)) {
                        var a = r.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                        n.mac && (a = a.replace(/Ctrl\+/g, "\u2318+")), r.windowManager.alert(a)
                    }
                }, unlink: function () {
                    if (_.isCollapsed()) {
                        var e = _.getNode();
                        return void("A" == e.tagName && r.dom.remove(e, !0))
                    }
                    S.remove("link")
                }, "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function (e) {
                    var t = e.substring(7);
                    "full" == t && (t = "justify"), i("left,center,right,justify".split(","), function (e) {
                        t != e && S.remove("align" + e)
                    }), b("align" + t), p("mceRepaint")
                }, "InsertUnorderedList,InsertOrderedList": function (e) {
                    var t, n;
                    v(e), t = w.getParent(_.getNode(), "ol,ul"), t && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (C(), w.split(n, t), x()))
                }, "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                    b(e)
                }, "ForeColor,HiliteColor,FontName": function (e, t, n) {
                    b(e, n)
                }, FontSize: function (e, t, n) {
                    var r, i;
                    n >= 1 && 7 >= n && (i = l(E.font_size_style_values), r = l(E.font_size_classes), n = r ? r[n - 1] || n : i[n - 1] || n), b(e, n)
                }, RemoveFormat: function (e) {
                    S.remove(e)
                }, mceBlockQuote: function () {
                    b("blockquote")
                }, FormatBlock: function (e, t, n) {
                    return b(n || "p")
                }, mceCleanup: function () {
                    var e = _.getBookmark();
                    r.setContent(r.getContent({cleanup: d}), {cleanup: d}), _.moveToBookmark(e)
                }, mceRemoveNode: function (e, t, n) {
                    var i = n || _.getNode();
                    i != r.getBody() && (C(), r.dom.remove(i, d), x())
                }, mceSelectNodeDepth: function (e, t, n) {
                    var i = 0;
                    w.getParent(_.getNode(), function (e) {
                        return 1 == e.nodeType && i++ == n ? (_.select(e), f) : void 0
                    }, r.getBody())
                }, mceSelectNode: function (e, t, n) {
                    _.select(n)
                }, mceInsertContent: function (t, n, i) {
                    function o(e) {
                        function t(e) {
                            return r[e] && 3 == r[e].nodeType
                        }

                        var n, r, i;
                        return n = _.getRng(!0), r = n.startContainer, i = n.startOffset, 3 == r.nodeType && (i > 0 ? e = e.replace(/^&nbsp;/, " ") : t("previousSibling") || (e = e.replace(/^ /, "&nbsp;")), i < r.length ? e = e.replace(/&nbsp;(<br>|)$/, " ") : t("nextSibling") || (e = e.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), e
                    }

                    var a, s, l, c, d, f, p, h, m, g, v;
                    /^ | $/.test(i) && (i = o(i)), a = r.parser, s = new e({}, r.schema), v = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#200B;</span>', f = {
                        content: i,
                        format: "html",
                        selection: !0
                    }, r.fire("BeforeSetContent", f), i = f.content, -1 == i.indexOf("{$caret}") && (i += "{$caret}"), i = i.replace(/\{\$caret\}/, v), h = _.getRng();
                    var y = h.startContainer || (h.parentElement ? h.parentElement() : null), b = r.getBody();
                    y === b && _.isCollapsed() && w.isBlock(b.firstChild) && w.isEmpty(b.firstChild) && (h = w.createRng(), h.setStart(b.firstChild, 0), h.setEnd(b.firstChild, 0), _.setRng(h)), _.isCollapsed() || r.getDoc().execCommand("Delete", !1, null), l = _.getNode();
                    var C = {context: l.nodeName.toLowerCase()};
                    if (d = a.parse(i, C), m = d.lastChild, "mce_marker" == m.attr("id"))for (p = m, m = m.prev; m; m = m.walk(!0))if (3 == m.type || !w.isBlock(m.name)) {
                        m.parent.insert(p, m, "br" === m.name);
                        break
                    }
                    if (C.invalid) {
                        for (_.setContent(v), l = _.getNode(), c = r.getBody(), 9 == l.nodeType ? l = m = c : m = l; m !== c;)l = m, m = m.parentNode;
                        i = l == c ? c.innerHTML : w.getOuterHTML(l), i = s.serialize(a.parse(i.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function () {
                            return s.serialize(d)
                        }))), l == c ? w.setHTML(c, i) : w.setOuterHTML(l, i)
                    } else i = s.serialize(d), m = l.firstChild, g = l.lastChild, !m || m === g && "BR" === m.nodeName ? w.setHTML(l, i) : _.setContent(i);
                    p = w.get("mce_marker"), _.scrollIntoView(p), h = w.createRng(), m = p.previousSibling, m && 3 == m.nodeType ? (h.setStart(m, m.nodeValue.length), u || (g = p.nextSibling, g && 3 == g.nodeType && (m.appendData(g.data), g.parentNode.removeChild(g)))) : (h.setStartBefore(p), h.setEndBefore(p)), w.remove(p), _.setRng(h), r.fire("SetContent", f), r.addVisual()
                }, mceInsertRawHTML: function (e, t, n) {
                    _.setContent("tiny_mce_marker"), r.setContent(r.getContent().replace(/tiny_mce_marker/g, function () {
                        return n
                    }))
                }, mceToggleFormat: function (e, t, n) {
                    b(n)
                }, mceSetContent: function (e, t, n) {
                    r.setContent(n)
                }, "Indent,Outdent": function (e) {
                    var t, n, o;
                    t = E.indentation, n = /[a-z%]+$/i.exec(t), t = parseInt(t, 10), h("InsertUnorderedList") || h("InsertOrderedList") ? v(e) : (E.forced_root_block || w.getParent(_.getNode(), w.isBlock) || S.apply("div"), i(_.getSelectedBlocks(), function (i) {
                        if ("LI" != i.nodeName) {
                            var a = r.getParam("indent_use_margin", !1) ? "margin" : "padding";
                            a += "rtl" == w.getStyle(i, "direction", !0) ? "Right" : "Left", "outdent" == e ? (o = Math.max(0, parseInt(i.style[a] || 0, 10) - t), w.setStyle(i, a, o ? o + n : "")) : (o = parseInt(i.style[a] || 0, 10) + t + n, w.setStyle(i, a, o))
                        }
                    }))
                }, mceRepaint: function () {
                    if (c)try {
                        C(d), _.getSel() && _.getSel().selectAllChildren(r.getBody()), _.collapse(d), x()
                    } catch (e) {
                    }
                }, InsertHorizontalRule: function () {
                    r.execCommand("mceInsertContent", !1, "<hr />")
                }, mceToggleVisualAid: function () {
                    r.hasVisual = !r.hasVisual, r.addVisual()
                }, mceReplaceContent: function (e, t, n) {
                    r.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, _.getContent({format: "text"})))
                }, mceInsertLink: function (e, t, n) {
                    var r;
                    "string" == typeof n && (n = {href: n}), r = w.getParent(_.getNode(), "a"), n.href = n.href.replace(" ", "%20"), r && n.href || S.remove("link"), n.href && S.apply("link", n, r)
                }, selectAll: function () {
                    var e = w.getRoot(), t;
                    _.getRng().setStart ? (t = w.createRng(), t.setStart(e, 0), t.setEnd(e, e.childNodes.length), _.setRng(t)) : (t = _.getRng(), t.item || (t.moveToElementText(e), t.select()))
                }, "delete": function () {
                    v("Delete");
                    var e = r.getBody();
                    w.isEmpty(e) && (r.setContent(""), e.firstChild && w.isBlock(e.firstChild) ? r.selection.setCursorLocation(e.firstChild, 0) : r.selection.setCursorLocation(e, 0))
                }, mceNewDocument: function () {
                    r.setContent("")
                }
            }), g({
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function (e) {
                    var t = "align" + e.substring(7), n = _.isCollapsed() ? [w.getParent(_.getNode(), w.isBlock)] : _.getSelectedBlocks(), r = a(n, function (e) {
                        return !!S.matchNode(e, t)
                    });
                    return -1 !== s(r, d)
                }, "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                    return y(e)
                }, mceBlockQuote: function () {
                    return y("blockquote")
                }, Outdent: function () {
                    var e;
                    if (E.inline_styles) {
                        if ((e = w.getParent(_.getStart(), w.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0)return d;
                        if ((e = w.getParent(_.getEnd(), w.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0)return d
                    }
                    return h("InsertUnorderedList") || h("InsertOrderedList") || !E.inline_styles && !!w.getParent(_.getNode(), "BLOCKQUOTE")
                }, "InsertUnorderedList,InsertOrderedList": function (e) {
                    var t = w.getParent(_.getNode(), "ul,ol");
                    return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
                }
            }, "state"), g({
                "FontSize,FontName": function (e) {
                    var t = 0, n;
                    return (n = w.getParent(_.getNode(), "span")) && (t = "fontsize" == e ? n.style.fontSize : n.style.fontFamily.replace(/, /g, ",").replace(/[\'\"]/g, "").toLowerCase()), t
                }
            }, "value"), g({
                Undo: function () {
                    r.undoManager.undo()
                }, Redo: function () {
                    r.undoManager.redo()
                }
            })
        }
    }), r(F, [p], function (e) {
        function t(e, i) {
            var o = this, a, s;
            if (e = r(e), i = o.settings = i || {}, /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e))return void(o.source = e);
            var l = 0 === e.indexOf("//");
            0 !== e.indexOf("/") || l || (e = (i.base_uri ? i.base_uri.protocol || "http" : "http") + "://mce_host" + e), /^[\w\-]*:?\/\//.test(e) || (s = i.base_uri ? i.base_uri.path : new t(location.href).directory, e = "" === i.base_uri.protocol ? "//mce_host" + o.toAbsPath(s, e) : (i.base_uri && i.base_uri.protocol || "http") + "://mce_host" + o.toAbsPath(s, e)), e = e.replace(/@@/g, "(mce_at)"), e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e), n(["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], function (t, n) {
                var r = e[n];
                r && (r = r.replace(/\(mce_at\)/g, "@@")), o[t] = r
            }), a = i.base_uri, a && (o.protocol || (o.protocol = a.protocol), o.userInfo || (o.userInfo = a.userInfo), o.port || "mce_host" !== o.host || (o.port = a.port), o.host && "mce_host" !== o.host || (o.host = a.host), o.source = ""), l && (o.protocol = "")
        }

        var n = e.each, r = e.trim, i = {ftp: 21, http: 80, https: 443, mailto: 25};
        return t.prototype = {
            setPath: function (e) {
                var t = this;
                e = /^(.*?)\/?(\w+)?$/.exec(e), t.path = e[0], t.directory = e[1], t.file = e[2], t.source = "", t.getURI()
            }, toRelative: function (e) {
                var n = this, r;
                if ("./" === e)return e;
                if (e = new t(e, {base_uri: n}), "mce_host" != e.host && n.host != e.host && e.host || n.port != e.port || n.protocol != e.protocol && "" !== e.protocol)return e.getURI();
                var i = n.getURI(), o = e.getURI();
                return i == o || "/" == i.charAt(i.length - 1) && i.substr(0, i.length - 1) == o ? i : (r = n.toRelPath(n.path, e.path), e.query && (r += "?" + e.query), e.anchor && (r += "#" + e.anchor), r)
            }, toAbsolute: function (e, n) {
                return e = new t(e, {base_uri: this}), e.getURI(n && this.isSameOrigin(e))
            }, isSameOrigin: function (e) {
                if (this.host == e.host && this.protocol == e.protocol) {
                    if (this.port == e.port)return !0;
                    var t = i[this.protocol];
                    if (t && (this.port || t) == (e.port || t))return !0
                }
                return !1
            }, toRelPath: function (e, t) {
                var n, r = 0, i = "", o, a;
                if (e = e.substring(0, e.lastIndexOf("/")), e = e.split("/"), n = t.split("/"), e.length >= n.length)for (o = 0, a = e.length; a > o; o++)if (o >= n.length || e[o] != n[o]) {
                    r = o + 1;
                    break
                }
                if (e.length < n.length)for (o = 0, a = n.length; a > o; o++)if (o >= e.length || e[o] != n[o]) {
                    r = o + 1;
                    break
                }
                if (1 === r)return t;
                for (o = 0, a = e.length - (r - 1); a > o; o++)i += "../";
                for (o = r - 1, a = n.length; a > o; o++)i += o != r - 1 ? "/" + n[o] : n[o];
                return i
            }, toAbsPath: function (e, t) {
                var r, i = 0, o = [], a, s;
                for (a = /\/$/.test(t) ? "/" : "", e = e.split("/"), t = t.split("/"), n(e, function (e) {
                    e && o.push(e)
                }), e = o, r = t.length - 1, o = []; r >= 0; r--)0 !== t[r].length && "." !== t[r] && (".." !== t[r] ? i > 0 ? i-- : o.push(t[r]) : i++);
                return r = e.length - i, s = 0 >= r ? o.reverse().join("/") : e.slice(0, r).join("/") + "/" + o.reverse().join("/"), 0 !== s.indexOf("/") && (s = "/" + s), a && s.lastIndexOf("/") !== s.length - 1 && (s += a), s
            }, getURI: function (e) {
                var t, n = this;
                return (!n.source || e) && (t = "", e || (t += n.protocol ? n.protocol + "://" : "//", n.userInfo && (t += n.userInfo + "@"), n.host && (t += n.host), n.port && (t += ":" + n.port)), n.path && (t += n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), n.source = t), n.source
            }
        }, t
    }), r(z, [p], function (e) {
        function t() {
        }

        var n = e.each, r = e.extend, i, o;
        return t.extend = i = function (e) {
            function t() {
                var e, t, n, r = this;
                if (!o && (r.init && r.init.apply(r, arguments), t = r.Mixins))for (e = t.length; e--;)n = t[e], n.init && n.init.apply(r, arguments)
            }

            function a() {
                return this
            }

            function s(e, t) {
                return function () {
                    var n = this, r = n._super, i;
                    return n._super = c[e], i = t.apply(n, arguments), n._super = r, i
                }
            }

            var l = this, c = l.prototype, u, d, f;
            o = !0, u = new l, o = !1, e.Mixins && (n(e.Mixins, function (t) {
                t = t;
                for (var n in t)"init" !== n && (e[n] = t[n])
            }), c.Mixins && (e.Mixins = c.Mixins.concat(e.Mixins))), e.Methods && n(e.Methods.split(","), function (t) {
                e[t] = a
            }), e.Properties && n(e.Properties.split(","), function (t) {
                var n = "_" + t;
                e[t] = function (e) {
                    var t = this, r;
                    return e !== r ? (t[n] = e, t) : t[n]
                }
            }), e.Statics && n(e.Statics, function (e, n) {
                t[n] = e
            }), e.Defaults && c.Defaults && (e.Defaults = r({}, c.Defaults, e.Defaults));
            for (d in e)f = e[d], u[d] = "function" == typeof f && c[d] ? s(d, f) : f;
            return t.prototype = u, t.constructor = t, t.extend = i, t
        }, t
    }), r(W, [p], function (e) {
        function t(e) {
            function t() {
                return !1
            }

            function n() {
                return !0
            }

            function r(r, i) {
                var o, a, s, u;
                if (r = r.toLowerCase(), i = i || {}, i.type = r, i.target || (i.target = l), i.preventDefault || (i.preventDefault = function () {
                        i.isDefaultPrevented = n
                    }, i.stopPropagation = function () {
                        i.isPropagationStopped = n
                    }, i.stopImmediatePropagation = function () {
                        i.isImmediatePropagationStopped = n
                    }, i.isDefaultPrevented = t, i.isPropagationStopped = t, i.isImmediatePropagationStopped = t), e.beforeFire && e.beforeFire(i), o = c[r])for (a = 0, s = o.length; s > a; a++) {
                    if (o[a] = u = o[a], i.isImmediatePropagationStopped())return i.stopPropagation(), i;
                    if (u.call(l, i) === !1)return i.preventDefault(), i
                }
                return i
            }

            function i(e, n, r) {
                var i, o, a;
                if (n === !1 && (n = t), n)for (o = e.toLowerCase().split(" "), a = o.length; a--;)e = o[a], i = c[e], i || (i = c[e] = [], u(e, !0)), r ? i.unshift(n) : i.push(n);
                return s
            }

            function o(e, t) {
                var n, r, i, o, a;
                if (e)for (o = e.toLowerCase().split(" "), n = o.length; n--;) {
                    if (e = o[n], r = c[e], !e) {
                        for (i in c)u(i, !1), delete c[i];
                        return s
                    }
                    if (r) {
                        if (t)for (a = r.length; a--;)r[a] === t && r.splice(a, 1); else r.length = 0;
                        r.length || (u(e, !1), delete c[e])
                    }
                } else {
                    for (e in c)u(e, !1);
                    c = {}
                }
                return s
            }

            function a(e) {
                return e = e.toLowerCase(), !(!c[e] || 0 === c[e].length)
            }

            var s = this, l, c = {}, u;
            e = e || {}, l = e.scope || s, u = e.toggleEvent || t, s.fire = r, s.on = i, s.off = o, s.has = a
        }

        var n = e.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit", " ");
        return t.isNative = function (e) {
            return !!n[e.toLowerCase()]
        }, t
    }), r(V, [z], function (e) {
        function t(e) {
            for (var t = [], n = e.length, r; n--;)r = e[n], r.__checked || (t.push(r), r.__checked = 1);
            for (n = t.length; n--;)delete t[n].__checked;
            return t
        }

        var n = /^([\w\\*]+)?(?:#([\w\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i, r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, i = /^\s*|\s*$/g, o, a = e.extend({
            init: function (e) {
                function t(e) {
                    return e ? (e = e.toLowerCase(), function (t) {
                        return "*" === e || t.type === e
                    }) : void 0
                }

                function o(e) {
                    return e ? function (t) {
                        return t._name === e
                    } : void 0
                }

                function a(e) {
                    return e ? (e = e.split("."), function (t) {
                        for (var n = e.length; n--;)if (!t.hasClass(e[n]))return !1;
                        return !0
                    }) : void 0
                }

                function s(e, t, n) {
                    return e ? function (r) {
                        var i = r[e] ? r[e]() : "";
                        return t ? "=" === t ? i === n : "*=" === t ? i.indexOf(n) >= 0 : "~=" === t ? (" " + i + " ").indexOf(" " + n + " ") >= 0 : "!=" === t ? i != n : "^=" === t ? 0 === i.indexOf(n) : "$=" === t ? i.substr(i.length - n.length) === n : !1 : !!n
                    } : void 0
                }

                function l(e) {
                    var t;
                    return e ? (e = /(?:not\((.+)\))|(.+)/i.exec(e), e[1] ? (t = u(e[1], []), function (e) {
                        return !d(e, t)
                    }) : (e = e[2], function (t, n, r) {
                        return "first" === e ? 0 === n : "last" === e ? n === r - 1 : "even" === e ? n % 2 === 0 : "odd" === e ? n % 2 === 1 : t[e] ? t[e]() : !1
                    })) : void 0
                }

                function c(e, r, c) {
                    function u(e) {
                        e && r.push(e)
                    }

                    var d;
                    return d = n.exec(e.replace(i, "")), u(t(d[1])), u(o(d[2])), u(a(d[3])), u(s(d[4], d[5], d[6])), u(l(d[7])), r.psuedo = !!d[7], r.direct = c, r
                }

                function u(e, t) {
                    var n = [], i, o, a;
                    do if (r.exec(""), o = r.exec(e), o && (e = o[3], n.push(o[1]), o[2])) {
                        i = o[3];
                        break
                    } while (o);
                    for (i && u(i, t), e = [], a = 0; a < n.length; a++)">" != n[a] && e.push(c(n[a], [], ">" === n[a - 1]));
                    return t.push(e), t
                }

                var d = this.match;
                this._selectors = u(e, [])
            }, match: function (e, t) {
                var n, r, i, o, a, s, l, c, u, d, f, p, h;
                for (t = t || this._selectors, n = 0, r = t.length; r > n; n++) {
                    for (a = t[n], o = a.length, h = e, p = 0, i = o - 1; i >= 0; i--)for (c = a[i]; h;) {
                        if (c.psuedo)for (f = h.parent().items(), u = d = f.length; u-- && f[u] !== h;);
                        for (s = 0, l = c.length; l > s; s++)if (!c[s](h, u, d)) {
                            s = l + 1;
                            break
                        }
                        if (s === l) {
                            p++;
                            break
                        }
                        if (i === o - 1)break;
                        h = h.parent()
                    }
                    if (p === o)return !0
                }
                return !1
            }, find: function (e) {
                function n(e, t, i) {
                    var o, a, s, l, c, u = t[i];
                    for (o = 0, a = e.length; a > o; o++) {
                        for (c = e[o], s = 0, l = u.length; l > s; s++)if (!u[s](c, o, a)) {
                            s = l + 1;
                            break
                        }
                        if (s === l)i == t.length - 1 ? r.push(c) : c.items && n(c.items(), t, i + 1); else if (u.direct)return;
                        c.items && n(c.items(), t, i)
                    }
                }

                var r = [], i, s, l = this._selectors;
                if (e.items) {
                    for (i = 0, s = l.length; s > i; i++)n(e.items(), l[i], 0);
                    s > 1 && (r = t(r))
                }
                return o || (o = a.Collection), new o(r)
            }
        });
        return a
    }), r(U, [p, V, z], function (e, t, n) {
        var r, i, o = Array.prototype.push, a = Array.prototype.slice;
        return i = {
            length: 0, init: function (e) {
                e && this.add(e)
            }, add: function (t) {
                var n = this;
                return e.isArray(t) ? o.apply(n, t) : t instanceof r ? n.add(t.toArray()) : o.call(n, t), n
            }, set: function (e) {
                var t = this, n = t.length, r;
                for (t.length = 0, t.add(e), r = t.length; n > r; r++)delete t[r];
                return t
            }, filter: function (e) {
                var n = this, i, o, a = [], s, l;
                for ("string" == typeof e ? (e = new t(e), l = function (t) {
                    return e.match(t)
                }) : l = e, i = 0, o = n.length; o > i; i++)s = n[i], l(s) && a.push(s);
                return new r(a)
            }, slice: function () {
                return new r(a.apply(this, arguments))
            }, eq: function (e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            }, each: function (t) {
                return e.each(this, t), this
            }, toArray: function () {
                return e.toArray(this)
            }, indexOf: function (e) {
                for (var t = this, n = t.length; n-- && t[n] !== e;);
                return n
            }, reverse: function () {
                return new r(e.toArray(this).reverse())
            }, hasClass: function (e) {
                return this[0] ? this[0].hasClass(e) : !1
            }, prop: function (e, t) {
                var n = this, r, i;
                return t !== r ? (n.each(function (n) {
                    n[e] && n[e](t)
                }), n) : (i = n[0], i && i[e] ? i[e]() : void 0)
            }, exec: function (t) {
                var n = this, r = e.toArray(arguments).slice(1);
                return n.each(function (e) {
                    e[t] && e[t].apply(e, r)
                }), n
            }, remove: function () {
                for (var e = this.length; e--;)this[e].remove();
                return this
            }
        }, e.each("fire on off show hide addClass removeClass append prepend before after reflow".split(" "), function (t) {
            i[t] = function () {
                var n = e.toArray(arguments);
                return this.each(function (e) {
                    t in e && e[t].apply(e, n)
                }), this
            }
        }), e.each("text name disabled active selected checked visible parent value data".split(" "), function (e) {
            i[e] = function (t) {
                return this.prop(e, t)
            }
        }), r = n.extend(i), t.Collection = r, r
    }), r(q, [p, y], function (e, t) {
        return {
            id: function () {
                return t.DOM.uniqueId()
            }, createFragment: function (e) {
                return t.DOM.createFragment(e)
            }, getWindowSize: function () {
                return t.DOM.getViewPort()
            }, getSize: function (e) {
                var t, n;
                if (e.getBoundingClientRect) {
                    var r = e.getBoundingClientRect();
                    t = Math.max(r.width || r.right - r.left, e.offsetWidth), n = Math.max(r.height || r.bottom - r.bottom, e.offsetHeight)
                } else t = e.offsetWidth, n = e.offsetHeight;
                return {width: t, height: n}
            }, getPos: function (e, n) {
                return t.DOM.getPos(e, n)
            }, getViewPort: function (e) {
                return t.DOM.getViewPort(e)
            }, get: function (e) {
                return document.getElementById(e)
            }, addClass: function (e, n) {
                return t.DOM.addClass(e, n)
            }, removeClass: function (e, n) {
                return t.DOM.removeClass(e, n)
            }, hasClass: function (e, n) {
                return t.DOM.hasClass(e, n)
            }, toggleClass: function (e, n, r) {
                return t.DOM.toggleClass(e, n, r)
            }, css: function (e, n, r) {
                return t.DOM.setStyle(e, n, r)
            }, on: function (e, n, r, i) {
                return t.DOM.bind(e, n, r, i)
            }, off: function (e, n, r) {
                return t.DOM.unbind(e, n, r)
            }, fire: function (e, n, r) {
                return t.DOM.fire(e, n, r)
            }, innerHtml: function (e, n) {
                t.DOM.setHTML(e, n)
            }
        }
    }), r($, [z, p, W, U, q], function (e, t, n, r, i) {
        function o(e) {
            return e._eventDispatcher || (e._eventDispatcher = new n({
                scope: e, toggleEvent: function (t, r) {
                    r && n.isNative(t) && (e._nativeEvents || (e._nativeEvents = {}), e._nativeEvents[t] = !0, e._rendered && e.bindPendingEvents())
                }
            })), e._eventDispatcher
        }

        var a = {}, s = "onmousewheel"in document, l = !1, c = "mce-", u = e.extend({
            Statics: {
                elementIdCache: a,
                classPrefix: c
            },
            isRtl: function () {
                return u.rtl
            },
            classPrefix: c,
            init: function (e) {
                var n = this, r, o;
                if (n.settings = e = t.extend({}, n.Defaults, e), n._id = e.id || i.id(), n._text = n._name = "", n._width = n._height = 0, n._aria = {role: e.role}, r = e.classes)for (r = r.split(" "), r.map = {}, o = r.length; o--;)r.map[r[o]] = !0;
                n._classes = r || [], n.visible(!0), t.each("title text width height name classes visible disabled active value".split(" "), function (t) {
                    var r = e[t], i;
                    r !== i ? n[t](r) : n["_" + t] === i && (n["_" + t] = !1)
                }), n.on("click", function () {
                    return n.disabled() ? !1 : void 0
                }), e.classes && t.each(e.classes.split(" "), function (e) {
                    n.addClass(e)
                }), n.settings = e, n._borderBox = n.parseBox(e.border), n._paddingBox = n.parseBox(e.padding), n._marginBox = n.parseBox(e.margin), e.hidden && n.hide()
            },
            Properties: "parent,title,text,width,height,disabled,active,name,value",
            Methods: "renderHtml",
            getContainerElm: function () {
                return document.body
            },
            getParentCtrl: function (e) {
                for (var t, n = this.getRoot().controlIdLookup; e && n && !(t = n[e.id]);)e = e.parentNode;
                return t
            },
            parseBox: function (e) {
                var t, n = 10;
                if (e)return "number" == typeof e ? (e = e || 0, {
                    top: e,
                    left: e,
                    bottom: e,
                    right: e
                }) : (e = e.split(" "), t = e.length, 1 === t ? e[1] = e[2] = e[3] = e[0] : 2 === t ? (e[2] = e[0], e[3] = e[1]) : 3 === t && (e[3] = e[1]), {
                    top: parseInt(e[0], n) || 0,
                    right: parseInt(e[1], n) || 0,
                    bottom: parseInt(e[2], n) || 0,
                    left: parseInt(e[3], n) || 0
                })
            },
            borderBox: function () {
                return this._borderBox
            },
            paddingBox: function () {
                return this._paddingBox
            },
            marginBox: function () {
                return this._marginBox
            },
            measureBox: function (e, t) {
                function n(t) {
                    var n = document.defaultView;
                    return n ? (t = t.replace(/[A-Z]/g, function (e) {
                        return "-" + e
                    }), n.getComputedStyle(e, null).getPropertyValue(t)) : e.currentStyle[t]
                }

                function r(e) {
                    var t = parseFloat(n(e), 10);
                    return isNaN(t) ? 0 : t
                }

                return {
                    top: r(t + "TopWidth"),
                    right: r(t + "RightWidth"),
                    bottom: r(t + "BottomWidth"),
                    left: r(t + "LeftWidth")
                }
            },
            initLayoutRect: function () {
                var e = this, t = e.settings, n, r, o = e.getEl(), a, s, l, c, u, d, f, p;
                n = e._borderBox = e._borderBox || e.measureBox(o, "border"), e._paddingBox = e._paddingBox || e.measureBox(o, "padding"), e._marginBox = e._marginBox || e.measureBox(o, "margin"), p = i.getSize(o), d = t.minWidth, f = t.minHeight, l = d || p.width, c = f || p.height, a = t.width, s = t.height, u = t.autoResize, u = "undefined" != typeof u ? u : !a && !s, a = a || l, s = s || c;
                var h = n.left + n.right, m = n.top + n.bottom, g = t.maxWidth || 65535, v = t.maxHeight || 65535;
                return e._layoutRect = r = {
                    x: t.x || 0,
                    y: t.y || 0,
                    w: a,
                    h: s,
                    deltaW: h,
                    deltaH: m,
                    contentW: a - h,
                    contentH: s - m,
                    innerW: a - h,
                    innerH: s - m,
                    startMinWidth: d || 0,
                    startMinHeight: f || 0,
                    minW: Math.min(l, g),
                    minH: Math.min(c, v),
                    maxW: g,
                    maxH: v,
                    autoResize: u,
                    scrollW: 0
                }, e._lastLayoutRect = {}, r
            },
            layoutRect: function (e) {
                var t = this, n = t._layoutRect, r, i, o, a, s, l;
                return n || (n = t.initLayoutRect()), e ? (o = n.deltaW, a = n.deltaH, e.x !== s && (n.x = e.x), e.y !== s && (n.y = e.y), e.minW !== s && (n.minW = e.minW), e.minH !== s && (n.minH = e.minH), i = e.w, i !== s && (i = i < n.minW ? n.minW : i, i = i > n.maxW ? n.maxW : i, n.w = i, n.innerW = i - o), i = e.h, i !== s && (i = i < n.minH ? n.minH : i, i = i > n.maxH ? n.maxH : i, n.h = i, n.innerH = i - a), i = e.innerW, i !== s && (i = i < n.minW - o ? n.minW - o : i, i = i > n.maxW - o ? n.maxW - o : i, n.innerW = i, n.w = i + o), i = e.innerH, i !== s && (i = i < n.minH - a ? n.minH - a : i, i = i > n.maxH - a ? n.maxH - a : i, n.innerH = i, n.h = i + a), e.contentW !== s && (n.contentW = e.contentW), e.contentH !== s && (n.contentH = e.contentH), r = t._lastLayoutRect, (r.x !== n.x || r.y !== n.y || r.w !== n.w || r.h !== n.h) && (l = u.repaintControls, l && l.map && !l.map[t._id] && (l.push(t), l.map[t._id] = !0), r.x = n.x, r.y = n.y, r.w = n.w, r.h = n.h), t) : n
            },
            repaint: function () {
                var e = this, t, n, r, i, o = 0, a = 0, s, l;
                l = document.createRange ? function (e) {
                    return e
                } : Math.round, t = e.getEl().style, r = e._layoutRect, s = e._lastRepaintRect || {}, i = e._borderBox, o = i.left + i.right, a = i.top + i.bottom, r.x !== s.x && (t.left = l(r.x) + "px", s.x = r.x), r.y !== s.y && (t.top = l(r.y) + "px", s.y = r.y), r.w !== s.w && (t.width = l(r.w - o) + "px", s.w = r.w), r.h !== s.h && (t.height = l(r.h - a) + "px", s.h = r.h), e._hasBody && r.innerW !== s.innerW && (n = e.getEl("body").style, n.width = l(r.innerW) + "px", s.innerW = r.innerW), e._hasBody && r.innerH !== s.innerH && (n = n || e.getEl("body").style, n.height = l(r.innerH) + "px", s.innerH = r.innerH), e._lastRepaintRect = s, e.fire("repaint", {}, !1)
            },
            on: function (e, t) {
                function n(e) {
                    var t, n;
                    return "string" != typeof e ? e : function (i) {
                        return t || r.parentsAndSelf().each(function (r) {
                            var i = r.settings.callbacks;
                            return i && (t = i[e]) ? (n = r, !1) : void 0
                        }), t.call(n, i)
                    }
                }

                var r = this;
                return o(r).on(e, n(t)), r
            },
            off: function (e, t) {
                return o(this).off(e, t), this
            },
            fire: function (e, t, n) {
                var r = this;
                if (t = t || {}, t.control || (t.control = r), t = o(r).fire(e, t), n !== !1 && r.parent)for (var i = r.parent(); i && !t.isPropagationStopped();)i.fire(e, t, !1), i = i.parent();
                return t
            },
            hasEventListeners: function (e) {
                return o(this).has(e)
            },
            parents: function (e) {
                var t = this, n, i = new r;
                for (n = t.parent(); n; n = n.parent())i.add(n);
                return e && (i = i.filter(e)), i
            },
            parentsAndSelf: function (e) {
                return new r(this).add(this.parents(e))
            },
            next: function () {
                var e = this.parent().items();
                return e[e.indexOf(this) + 1]
            },
            prev: function () {
                var e = this.parent().items();
                return e[e.indexOf(this) - 1]
            },
            findCommonAncestor: function (e, t) {
                for (var n; e;) {
                    for (n = t; n && e != n;)n = n.parent();
                    if (e == n)break;
                    e = e.parent()
                }
                return e
            },
            hasClass: function (e, t) {
                var n = this._classes[t || "control"];
                return e = this.classPrefix + e, n && !!n.map[e]
            },
            addClass: function (e, t) {
                var n = this, r, i;
                return e = this.classPrefix + e, r = n._classes[t || "control"], r || (r = [], r.map = {}, n._classes[t || "control"] = r), r.map[e] || (r.map[e] = e, r.push(e), n._rendered && (i = n.getEl(t), i && (i.className = r.join(" ")))), n
            },
            removeClass: function (e, t) {
                var n = this, r, i, o;
                if (e = this.classPrefix + e, r = n._classes[t || "control"], r && r.map[e])for (delete r.map[e], i = r.length; i--;)r[i] === e && r.splice(i, 1);
                return n._rendered && (o = n.getEl(t), o && (o.className = r.join(" "))), n
            },
            toggleClass: function (e, t, n) {
                var r = this;
                return t ? r.addClass(e, n) : r.removeClass(e, n), r
            },
            classes: function (e) {
                var t = this._classes[e || "control"];
                return t ? t.join(" ") : ""
            },
            innerHtml: function (e) {
                return i.innerHtml(this.getEl(), e), this
            },
            getEl: function (e, t) {
                var n, r = e ? this._id + "-" + e : this._id;
                return n = a[r] = (t === !0 ? null : a[r]) || i.get(r)
            },
            visible: function (e) {
                var t = this, n;
                return "undefined" != typeof e ? (t._visible !== e && (t._rendered && (t.getEl().style.display = e ? "" : "none"), t._visible = e, n = t.parent(), n && (n._lastRect = null), t.fire(e ? "show" : "hide")), t) : t._visible
            },
            show: function () {
                return this.visible(!0)
            },
            hide: function () {
                return this.visible(!1)
            },
            focus: function () {
                try {
                    this.getEl().focus()
                } catch (e) {
                }
                return this
            },
            blur: function () {
                return this.getEl().blur(), this
            },
            aria: function (e, t) {
                var n = this, r = n.getEl(n.ariaTarget);
                return "undefined" == typeof t ? n._aria[e] : (n._aria[e] = t, n._rendered && r.setAttribute("role" == e ? e : "aria-" + e, t), n)
            },
            encode: function (e, t) {
                return t !== !1 && (e = this.translate(e)), (e || "").replace(/[&<>"]/g, function (e) {
                    return "&#" + e.charCodeAt(0) + ";"
                })
            },
            translate: function (e) {
                return u.translate ? u.translate(e) : e
            },
            before: function (e) {
                var t = this, n = t.parent();
                return n && n.insert(e, n.items().indexOf(t), !0), t
            },
            after: function (e) {
                var t = this, n = t.parent();
                return n && n.insert(e, n.items().indexOf(t)), t
            },
            remove: function () {
                var e = this, t = e.getEl(), n = e.parent(), r, o;
                if (e.items) {
                    var s = e.items().toArray();
                    for (o = s.length; o--;)s[o].remove()
                }
                n && n.items && (r = [], n.items().each(function (t) {
                    t !== e && r.push(t)
                }), n.items().set(r), n._lastRect = null), e._eventsRoot && e._eventsRoot == e && i.off(t);
                var l = e.getRoot().controlIdLookup;
                if (l && delete l[e._id], delete a[e._id], t && t.parentNode) {
                    var c = t.getElementsByTagName("*");
                    for (o = c.length; o--;)delete a[c[o].id];
                    t.parentNode.removeChild(t)
                }
                return e._rendered = !1, e
            },
            renderBefore: function (e) {
                var t = this;
                return e.parentNode.insertBefore(i.createFragment(t.renderHtml()), e), t.postRender(), t
            },
            renderTo: function (e) {
                var t = this;
                return e = e || t.getContainerElm(), e.appendChild(i.createFragment(t.renderHtml())), t.postRender(), t
            },
            postRender: function () {
                var e = this, t = e.settings, n, r, o, a, s;
                for (a in t)0 === a.indexOf("on") && e.on(a.substr(2), t[a]);
                if (e._eventsRoot) {
                    for (o = e.parent(); !s && o; o = o.parent())s = o._eventsRoot;
                    if (s)for (a in s._nativeEvents)e._nativeEvents[a] = !0
                }
                e.bindPendingEvents(), t.style && (n = e.getEl(), n && (n.setAttribute("style", t.style), n.style.cssText = t.style)), e._visible || i.css(e.getEl(), "display", "none"), e.settings.border && (r = e.borderBox(), i.css(e.getEl(), {
                    "border-top-width": r.top,
                    "border-right-width": r.right,
                    "border-bottom-width": r.bottom,
                    "border-left-width": r.left
                }));
                var l = e.getRoot();
                l.controlIdLookup || (l.controlIdLookup = {}), l.controlIdLookup[e._id] = e;
                for (var c in e._aria)e.aria(c, e._aria[c]);
                e.fire("postrender", {}, !1)
            },
            scrollIntoView: function (e) {
                function t(e, t) {
                    var n, r, i = e;
                    for (n = r = 0; i && i != t && i.nodeType;)n += i.offsetLeft || 0, r += i.offsetTop || 0, i = i.offsetParent;
                    return {x: n, y: r}
                }

                var n = this.getEl(), r = n.parentNode, i, o, a, s, l, c, u = t(n, r);
                return i = u.x, o = u.y, a = n.offsetWidth, s = n.offsetHeight, l = r.clientWidth, c = r.clientHeight, "end" == e ? (i -= l - a, o -= c - s) : "center" == e && (i -= l / 2 - a / 2, o -= c / 2 - s / 2), r.scrollLeft = i, r.scrollTop = o, this
            },
            bindPendingEvents: function () {
                function e(e) {
                    var t = o.getParentCtrl(e.target);
                    t && t.fire(e.type, e)
                }

                function t() {
                    var e = d._lastHoverCtrl;
                    e && (e.fire("mouseleave", {target: e.getEl()}), e.parents().each(function (e) {
                        e.fire("mouseleave", {target: e.getEl()})
                    }), d._lastHoverCtrl = null)
                }

                function n(e) {
                    var t = o.getParentCtrl(e.target), n = d._lastHoverCtrl, r = 0, i, a, s;
                    if (t !== n) {
                        if (d._lastHoverCtrl = t, a = t.parents().toArray().reverse(), a.push(t), n) {
                            for (s = n.parents().toArray().reverse(), s.push(n), r = 0; r < s.length && a[r] === s[r]; r++);
                            for (i = s.length - 1; i >= r; i--)n = s[i], n.fire("mouseleave", {target: n.getEl()})
                        }
                        for (i = r; i < a.length; i++)t = a[i], t.fire("mouseenter", {target: t.getEl()})
                    }
                }

                function r(e) {
                    e.preventDefault(), "mousewheel" == e.type ? (e.deltaY = -1 / 40 * e.wheelDelta, e.wheelDeltaX && (e.deltaX = -1 / 40 * e.wheelDeltaX)) : (e.deltaX = 0, e.deltaY = e.detail), e = o.fire("wheel", e)
                }

                var o = this, a, c, u, d, f, p;
                if (o._rendered = !0, f = o._nativeEvents) {
                    for (u = o.parents().toArray(), u.unshift(o), a = 0, c = u.length; !d && c > a; a++)d = u[a]._eventsRoot;
                    for (d || (d = u[u.length - 1] || o), o._eventsRoot = d, c = a, a = 0; c > a; a++)u[a]._eventsRoot = d;
                    var h = d._delegates;
                    h || (h = d._delegates = {});
                    for (p in f) {
                        if (!f)return !1;
                        "wheel" !== p || l ? ("mouseenter" === p || "mouseleave" === p ? d._hasMouseEnter || (i.on(d.getEl(), "mouseleave", t), i.on(d.getEl(), "mouseover", n), d._hasMouseEnter = 1) : h[p] || (i.on(d.getEl(), p, e), h[p] = !0), f[p] = !1) : s ? i.on(o.getEl(), "mousewheel", r) : i.on(o.getEl(), "DOMMouseScroll", r)
                    }
                }
            },
            getRoot: function () {
                for (var e = this, t, n = []; e;) {
                    if (e.rootControl) {
                        t = e.rootControl;
                        break
                    }
                    n.push(e), t = e, e = e.parent()
                }
                t || (t = this);
                for (var r = n.length; r--;)n[r].rootControl = t;
                return t
            },
            reflow: function () {
                return this.repaint(), this
            }
        });
        return u
    }), r(j, [], function () {
        var e = {}, t;
        return {
            add: function (t, n) {
                e[t.toLowerCase()] = n
            }, has: function (t) {
                return !!e[t.toLowerCase()]
            }, create: function (n, r) {
                var i, o, a;
                if (!t) {
                    a = tinymce.ui;
                    for (o in a)e[o.toLowerCase()] = a[o];
                    t = !0
                }
                if ("string" == typeof n ? (r = r || {}, r.type = n) : (r = n, n = r.type), n = n.toLowerCase(), i = e[n], !i)throw new Error("Could not find control by type: " + n);
                return i = new i(r), i.type = n, i
            }
        }
    }), r(K, [], function () {
        return function (e) {
            function t(e) {
                return e = e || b, e && e.getAttribute("role")
            }

            function n(e) {
                for (var n, r = e || b; r = r.parentNode;)if (n = t(r))return n
            }

            function r(e) {
                var t = b;
                return t ? t.getAttribute("aria-" + e) : void 0
            }

            function i(e) {
                var t = e.tagName.toUpperCase();
                return "INPUT" == t || "TEXTAREA" == t
            }

            function o(e) {
                return i(e) && !e.hidden ? !0 : /^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell)$/.test(t(e)) ? !0 : !1
            }

            function a(e) {
                function t(e) {
                    if (1 == e.nodeType && "none" != e.style.display) {
                        o(e) && n.push(e);
                        for (var r = 0; r < e.childNodes.length; r++)t(e.childNodes[r])
                    }
                }

                var n = [];
                return t(e || y.getEl()), n
            }

            function s(e) {
                var t, n;
                e = e || C, n = e.parents().toArray(), n.unshift(e);
                for (var r = 0; r < n.length && (t = n[r], !t.settings.ariaRoot); r++);
                return t
            }

            function l(e) {
                var t = s(e), n = a(t.getEl());
                t.settings.ariaRemember && "lastAriaIndex"in t ? c(t.lastAriaIndex, n) : c(0, n)
            }

            function c(e, t) {
                return 0 > e ? e = t.length - 1 : e >= t.length && (e = 0), t[e] && t[e].focus(), e
            }

            function u(e, t) {
                var n = -1, r = s();
                t = t || a(r.getEl());
                for (var i = 0; i < t.length; i++)t[i] === b && (n = i);
                n += e, r.lastAriaIndex = c(n, t)
            }

            function d() {
                var e = n();
                "tablist" == e ? u(-1, a(b.parentNode)) : C.parent().submenu ? g() : u(-1)
            }

            function f() {
                var e = t(), i = n();
                "tablist" == i ? u(1, a(b.parentNode)) : "menuitem" == e && "menu" == i && r("haspopup") ? v() : u(1)
            }

            function p() {
                u(-1)
            }

            function h() {
                var e = t(), i = n();
                "menuitem" == e && "menubar" == i ? v() : "button" == e && r("haspopup") ? v({key: "down"}) : u(1)
            }

            function m(e) {
                var t = n();
                if ("tablist" == t) {
                    var r = a(C.getEl("body"))[0];
                    r && r.focus()
                } else u(e.shiftKey ? -1 : 1)
            }

            function g() {
                C.fire("cancel")
            }

            function v(e) {
                e = e || {}, C.fire("click", {target: b, aria: e})
            }

            var y = e.root, b, C;
            return b = document.activeElement, C = y.getParentCtrl(b), y.on("keydown", function (e) {
                function t(e, t) {
                    i(b) || t(e) !== !1 && e.preventDefault()
                }

                if (!e.isDefaultPrevented())switch (e.keyCode) {
                    case 37:
                        t(e, d);
                        break;
                    case 39:
                        t(e, f);
                        break;
                    case 38:
                        t(e, p);
                        break;
                    case 40:
                        t(e, h);
                        break;
                    case 27:
                        g();
                        break;
                    case 14:
                    case 13:
                    case 32:
                        t(e, v);
                        break;
                    case 9:
                        m(e) !== !1 && e.preventDefault()
                }
            }), y.on("focusin", function (e) {
                b = e.target, C = e.control
            }), {focusFirst: l}
        }
    }), r(G, [$, U, V, j, K, p, q], function (e, t, n, r, i, o, a) {
        var s = {};
        return e.extend({
            layout: "", innerClass: "container-inner", init: function (e) {
                var n = this;
                n._super(e), e = n.settings, n._fixed = e.fixed, n._items = new t, n.isRtl() && n.addClass("rtl"), n.addClass("container"), n.addClass("container-body", "body"), e.containerCls && n.addClass(e.containerCls), n._layout = r.create((e.layout || n.layout) + "layout"), n.settings.items && n.add(n.settings.items), n._hasBody = !0
            }, items: function () {
                return this._items
            }, find: function (e) {
                return e = s[e] = s[e] || new n(e), e.find(this)
            }, add: function (e) {
                var t = this;
                return t.items().add(t.create(e)).parent(t), t
            }, focus: function (e) {
                var t = this, n, r, i;
                return e && (r = t.keyboardNav || t.parents().eq(-1)[0].keyboardNav) ? void r.focusFirst(t) : (i = t.find("*"), t.statusbar && i.add(t.statusbar.items()), i.each(function (e) {
                    return e.settings.autofocus ? (n = null, !1) : void(e.canFocus && (n = n || e))
                }), n && n.focus(), t)
            }, replace: function (e, t) {
                for (var n, r = this.items(), i = r.length; i--;)if (r[i] === e) {
                    r[i] = t;
                    break
                }
                i >= 0 && (n = t.getEl(), n && n.parentNode.removeChild(n), n = e.getEl(), n && n.parentNode.removeChild(n)), t.parent(this)
            }, create: function (t) {
                var n = this, i, a = [];
                return o.isArray(t) || (t = [t]), o.each(t, function (t) {
                    t && (t instanceof e || ("string" == typeof t && (t = {type: t}), i = o.extend({}, n.settings.defaults, t), t.type = i.type = i.type || t.type || n.settings.defaultType || (i.defaults ? i.defaults.type : null), t = r.create(i)), a.push(t))
                }), a
            }, renderNew: function () {
                var e = this;
                return e.items().each(function (t, n) {
                    var r, i;
                    t.parent(e), t._rendered || (r = e.getEl("body"), i = a.createFragment(t.renderHtml()), r.hasChildNodes() && n <= r.childNodes.length - 1 ? r.insertBefore(i, r.childNodes[n]) : r.appendChild(i), t.postRender())
                }), e._layout.applyClasses(e), e._lastRect = null, e
            }, append: function (e) {
                return this.add(e).renderNew()
            }, prepend: function (e) {
                var t = this;
                return t.items().set(t.create(e).concat(t.items().toArray())), t.renderNew()
            }, insert: function (e, t, n) {
                var r = this, i, o, a;
                return e = r.create(e), i = r.items(), !n && t < i.length - 1 && (t += 1), t >= 0 && t < i.length && (o = i.slice(0, t).toArray(), a = i.slice(t).toArray(), i.set(o.concat(e, a))), r.renderNew()
            }, fromJSON: function (e) {
                var t = this;
                for (var n in e)t.find("#" + n).value(e[n]);
                return t
            }, toJSON: function () {
                var e = this, t = {};
                return e.find("*").each(function (e) {
                    var n = e.name(), r = e.value();
                    n && "undefined" != typeof r && (t[n] = r)
                }), t
            }, preRender: function () {
            }, renderHtml: function () {
                var e = this, t = e._layout, n = this.settings.role;
                return e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '"' + (n ? ' role="' + this.settings.role + '"' : "") + '><div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }, postRender: function () {
                var e = this, t;
                return e.items().exec("postRender"), e._super(), e._layout.postRender(e), e._rendered = !0, e.settings.style && a.css(e.getEl(), e.settings.style), e.settings.border && (t = e.borderBox(), a.css(e.getEl(), {
                    "border-top-width": t.top,
                    "border-right-width": t.right,
                    "border-bottom-width": t.bottom,
                    "border-left-width": t.left
                })), e.parent() || (e.keyboardNav = new i({root: e})), e
            }, initLayoutRect: function () {
                var e = this, t = e._super();
                return e._layout.recalc(e), t
            }, recalc: function () {
                var e = this, t = e._layoutRect, n = e._lastRect;
                return n && n.w == t.w && n.h == t.h ? void 0 : (e._layout.recalc(e), t = e.layoutRect(), e._lastRect = {
                    x: t.x,
                    y: t.y,
                    w: t.w,
                    h: t.h
                }, !0)
            }, reflow: function () {
                var t;
                if (this.visible()) {
                    for (e.repaintControls = [], e.repaintControls.map = {}, this.recalc(), t = e.repaintControls.length; t--;)e.repaintControls[t].repaint();
                    "flow" !== this.settings.layout && "stack" !== this.settings.layout && this.repaint(), e.repaintControls = []
                }
                return this
            }
        })
    }), r(Y, [q], function (e) {
        function t() {
            var e = document, t, n, r, i, o, a, s, l, c = Math.max;
            return t = e.documentElement, n = e.body, r = c(t.scrollWidth, n.scrollWidth), i = c(t.clientWidth, n.clientWidth), o = c(t.offsetWidth, n.offsetWidth), a = c(t.scrollHeight, n.scrollHeight), s = c(t.clientHeight, n.clientHeight), l = c(t.offsetHeight, n.offsetHeight), {
                width: o > r ? i : r,
                height: l > a ? s : a
            }
        }

        return function (n, r) {
            function i() {
                return a.getElementById(r.handle || n)
            }

            var o, a = document, s, l, c, u, d, f;
            r = r || {}, l = function (n) {
                var l = t(), p, h;
                n.preventDefault(), s = n.button, p = i(), d = n.screenX, f = n.screenY, h = window.getComputedStyle ? window.getComputedStyle(p, null).getPropertyValue("cursor") : p.runtimeStyle.cursor, o = a.createElement("div"), e.css(o, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: l.width,
                    height: l.height,
                    zIndex: 2147483647,
                    opacity: 1e-4,
                    background: "red",
                    cursor: h
                }), a.body.appendChild(o), e.on(a, "mousemove", u), e.on(a, "mouseup", c), r.start(n)
            }, u = function (e) {
                return e.button !== s ? c(e) : (e.deltaX = e.screenX - d, e.deltaY = e.screenY - f, e.preventDefault(), void r.drag(e))
            }, c = function (t) {
                e.off(a, "mousemove", u), e.off(a, "mouseup", c), o.parentNode.removeChild(o), r.stop && r.stop(t)
            }, this.destroy = function () {
                e.off(i())
            }, e.on(i(), "mousedown", l)
        }
    }), r(X, [q, Y], function (e, t) {
        return {
            init: function () {
                var e = this;
                e.on("repaint", e.renderScroll)
            }, renderScroll: function () {
                function n() {
                    function t(t, a, s, l, c, u) {
                        var d, f, p, h, m, g, v, y, b;
                        if (f = i.getEl("scroll" + t)) {
                            if (y = a.toLowerCase(), b = s.toLowerCase(), i.getEl("absend") && e.css(i.getEl("absend"), y, i.layoutRect()[l] - 1), !c)return void e.css(f, "display", "none");
                            e.css(f, "display", "block"), d = i.getEl("body"), p = i.getEl("scroll" + t + "t"), h = d["client" + s] - 2 * o, h -= n && r ? f["client" + u] : 0, m = d["scroll" + s], g = h / m, v = {}, v[y] = d["offset" + a] + o, v[b] = h, e.css(f, v), v = {}, v[y] = d["scroll" + a] * g, v[b] = h * g, e.css(p, v)
                        }
                    }

                    var n, r, a;
                    a = i.getEl("body"), n = a.scrollWidth > a.clientWidth, r = a.scrollHeight > a.clientHeight, t("h", "Left", "Width", "contentW", n, "Height"), t("v", "Top", "Height", "contentH", r, "Width")
                }

                function r() {
                    function n(n, r, a, s, l) {
                        var c, u = i._id + "-scroll" + n, d = i.classPrefix;
                        i.getEl().appendChild(e.createFragment('<div id="' + u + '" class="' + d + "scrollbar " + d + "scrollbar-" + n + '"><div id="' + u + 't" class="' + d + 'scrollbar-thumb"></div></div>')), i.draghelper = new t(u + "t", {
                            start: function () {
                                c = i.getEl("body")["scroll" + r], e.addClass(e.get(u), d + "active")
                            }, drag: function (e) {
                                var t, u, d, f, p = i.layoutRect();
                                u = p.contentW > p.innerW, d = p.contentH > p.innerH, f = i.getEl("body")["client" + a] - 2 * o, f -= u && d ? i.getEl("scroll" + n)["client" + l] : 0, t = f / i.getEl("body")["scroll" + a], i.getEl("body")["scroll" + r] = c + e["delta" + s] / t
                            }, stop: function () {
                                e.removeClass(e.get(u), d + "active")
                            }
                        })
                    }

                    i.addClass("scroll"), n("v", "Top", "Height", "Y", "Width"), n("h", "Left", "Width", "X", "Height")
                }

                var i = this, o = 2;
                i.settings.autoScroll && (i._hasScroll || (i._hasScroll = !0, r(), i.on("wheel", function (e) {
                    var t = i.getEl("body");
                    t.scrollLeft += 10 * (e.deltaX || 0), t.scrollTop += 10 * e.deltaY, n()
                }), e.on(i.getEl("body"), "scroll", n)), n())
            }
        }
    }), r(J, [G, X], function (e, t) {
        return e.extend({
            Defaults: {layout: "fit", containerCls: "panel"}, Mixins: [t], renderHtml: function () {
                var e = this, t = e._layout, n = e.settings.html;
                return e.preRender(), t.preRender(e), "undefined" == typeof n ? n = '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + t.renderHtml(e) + "</div>" : ("function" == typeof n && (n = n.call(e)), e._hasBody = !1), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1" role="group">' + (e._preBodyHtml || "") + n + "</div>"
            }
        })
    }), r(Q, [q], function (e) {
        function t(t, n, r) {
            var i, o, a, s, l, c, u, d, f, p;
            return f = e.getViewPort(), o = e.getPos(n), a = o.x, s = o.y, t._fixed && (a -= f.x, s -= f.y), i = t.getEl(), p = e.getSize(i), l = p.width, c = p.height, p = e.getSize(n), u = p.width, d = p.height, r = (r || "").split(""), "b" === r[0] && (s += d), "r" === r[1] && (a += u), "c" === r[0] && (s += Math.round(d / 2)), "c" === r[1] && (a += Math.round(u / 2)), "b" === r[3] && (s -= c), "r" === r[4] && (a -= l), "c" === r[3] && (s -= Math.round(c / 2)), "c" === r[4] && (a -= Math.round(l / 2)), {
                x: a,
                y: s,
                w: l,
                h: c
            }
        }

        return {
            testMoveRel: function (n, r) {
                for (var i = e.getViewPort(), o = 0; o < r.length; o++) {
                    var a = t(this, n, r[o]);
                    if (this._fixed) {
                        if (a.x > 0 && a.x + a.w < i.w && a.y > 0 && a.y + a.h < i.h)return r[o]
                    } else if (a.x > i.x && a.x + a.w < i.w + i.x && a.y > i.y && a.y + a.h < i.h + i.y)return r[o]
                }
                return r[0]
            }, moveRel: function (e, n) {
                "string" != typeof n && (n = this.testMoveRel(e, n));
                var r = t(this, e, n);
                return this.moveTo(r.x, r.y)
            }, moveBy: function (e, t) {
                var n = this, r = n.layoutRect();
                return n.moveTo(r.x + e, r.y + t), n
            }, moveTo: function (t, n) {
                function r(e, t, n) {
                    return 0 > e ? 0 : e + n > t ? (e = t - n, 0 > e ? 0 : e) : e
                }

                var i = this;
                if (i.settings.constrainToViewport) {
                    var o = e.getViewPort(window), a = i.layoutRect();
                    t = r(t, o.w + o.x, a.w), n = r(n, o.h + o.y, a.h)
                }
                return i._rendered ? i.layoutRect({
                    x: t,
                    y: n
                }).repaint() : (i.settings.x = t, i.settings.y = n), i.fire("move", {x: t, y: n}), i
            }
        }
    }), r(Z, [q], function (e) {
        return {
            resizeToContent: function () {
                this._layoutRect.autoResize = !0, this._lastRect = null, this.reflow()
            }, resizeTo: function (t, n) {
                if (1 >= t || 1 >= n) {
                    var r = e.getWindowSize();
                    t = 1 >= t ? t * r.w : t, n = 1 >= n ? n * r.h : n
                }
                return this._layoutRect.autoResize = !1, this.layoutRect({minW: t, minH: n, w: t, h: n}).reflow()
            }, resizeBy: function (e, t) {
                var n = this, r = n.layoutRect();
                return n.resizeTo(r.w + e, r.h + t)
            }
        }
    }), r(et, [J, Q, Z, q], function (e, t, n, r) {
        function i(e) {
            var t;
            for (t = s.length; t--;)s[t] === e && s.splice(t, 1);
            for (t = l.length; t--;)l[t] === e && l.splice(t, 1)
        }

        var o, a, s = [], l = [], c, u = e.extend({
            Mixins: [t, n], init: function (e) {
                function t() {
                    var e, t = u.zIndex || 65535, n;
                    if (l.length)for (e = 0; e < l.length; e++)l[e].modal && (t++, n = l[e]), l[e].getEl().style.zIndex = t, l[e].zIndex = t, t++;
                    var i = document.getElementById(d.classPrefix + "modal-block");
                    n ? r.css(i, "z-index", n.zIndex - 1) : i && (i.parentNode.removeChild(i), c = !1), u.currentZIndex = t
                }

                function n(e, t) {
                    for (; e;) {
                        if (e == t)return !0;
                        e = e.parent()
                    }
                }

                function i(e) {
                    function t(t, n) {
                        for (var r, i = 0; i < s.length; i++)if (s[i] != e)for (r = s[i].parent(); r && (r = r.parent());)r == e && s[i].fixed(t).moveBy(0, n).repaint()
                    }

                    var n = r.getViewPort().y;
                    e.settings.autofix && (e._fixed ? e._autoFixY > n && (e.fixed(!1).layoutRect({y: e._autoFixY}).repaint(), t(!1, e._autoFixY - n)) : (e._autoFixY = e.layoutRect().y, e._autoFixY < n && (e.fixed(!0).layoutRect({y: 0}).repaint(), t(!0, n - e._autoFixY))))
                }

                var d = this;
                d._super(e), d._eventsRoot = d, d.addClass("floatpanel"), e.autohide && (o || (o = function (e) {
                    for (var t = s.length; t--;) {
                        var r = s[t], i = r.getParentCtrl(e.target);
                        if (r.settings.autohide) {
                            if (i && (n(i, r) || r.parent() === i))continue;
                            e = r.fire("autohide", {target: e.target}), e.isDefaultPrevented() || r.hide()
                        }
                    }
                }, r.on(document, "click", o)), s.push(d)), e.autofix && (a || (a = function () {
                    var e;
                    for (e = s.length; e--;)i(s[e])
                }, r.on(window, "scroll", a)), d.on("move", function () {
                    i(this)
                })), d.on("postrender show", function (e) {
                    if (e.control == d) {
                        var n, i = d.classPrefix;
                        d.modal && !c && (n = r.createFragment('<div id="' + i + 'modal-block" class="' + i + "reset " + i + 'fade"></div>'), n = n.firstChild, d.getContainerElm().appendChild(n), setTimeout(function () {
                            r.addClass(n, i + "in"), r.addClass(d.getEl(), i + "in")
                        }, 0), c = !0), l.push(d), t()
                    }
                }), d.on("close hide", function (e) {
                    if (e.control == d) {
                        for (var n = l.length; n--;)l[n] === d && l.splice(n, 1);
                        t()
                    }
                }), d.on("show", function () {
                    d.parents().each(function (e) {
                        return e._fixed ? (d.fixed(!0), !1) : void 0
                    })
                }), e.popover && (d._preBodyHtml = '<div class="' + d.classPrefix + 'arrow"></div>', d.addClass("popover").addClass("bottom").addClass(d.isRtl() ? "end" : "start"))
            }, fixed: function (e) {
                var t = this;
                if (t._fixed != e) {
                    if (t._rendered) {
                        var n = r.getViewPort();
                        e ? t.layoutRect().y -= n.y : t.layoutRect().y += n.y
                    }
                    t.toggleClass("fixed", e), t._fixed = e
                }
                return t
            }, show: function () {
                var e = this, t, n = e._super();
                for (t = s.length; t-- && s[t] !== e;);
                return -1 === t && s.push(e), n
            }, hide: function () {
                return i(this), this._super()
            }, hideAll: function () {
                u.hideAll()
            }, close: function () {
                var e = this;
                return e.fire("close"), e.remove()
            }, remove: function () {
                i(this), this._super()
            }, postRender: function () {
                var e = this;
                return e.settings.bodyRole && this.getEl("body").setAttribute("role", e.settings.bodyRole), e._super()
            }
        });
        return u.hideAll = function () {
            for (var e = s.length; e--;) {
                var t = s[e];
                t && t.settings.autohide && (t.hide(), s.splice(e, 1))
            }
        }, u
    }), r(tt, [et, J, q, Y], function (e, t, n, r) {
        var i = e.extend({
            modal: !0,
            Defaults: {
                border: 1,
                layout: "flex",
                containerCls: "panel",
                role: "dialog",
                callbacks: {
                    submit: function () {
                        this.fire("submit", {data: this.toJSON()})
                    }, close: function () {
                        this.close()
                    }
                }
            },
            init: function (e) {
                var n = this;
                n._super(e), n.isRtl() && n.addClass("rtl"), n.addClass("window"), n._fixed = !0, e.buttons && (n.statusbar = new t({
                    layout: "flex",
                    border: "1 0 0 0",
                    spacing: 3,
                    padding: 10,
                    align: "center",
                    pack: n.isRtl() ? "start" : "end",
                    defaults: {type: "button"},
                    items: e.buttons
                }), n.statusbar.addClass("foot"), n.statusbar.parent(n)), n.on("click", function (e) {
                    -1 != e.target.className.indexOf(n.classPrefix + "close") && n.close()
                }), n.on("cancel", function () {
                    n.close()
                }), n.aria("describedby", n.describedBy || n._id + "-none"), n.aria("label", e.title), n._fullscreen = !1
            },
            recalc: function () {
                var e = this, t = e.statusbar, r, i, o, a;
                e._fullscreen && (e.layoutRect(n.getWindowSize()), e.layoutRect().contentH = e.layoutRect().innerH), e._super(), r = e.layoutRect(), e.settings.title && !e._fullscreen && (i = r.headerW, i > r.w && (o = r.x - Math.max(0, i / 2), e.layoutRect({
                    w: i,
                    x: o
                }), a = !0)), t && (t.layoutRect({w: e.layoutRect().innerW}).recalc(), i = t.layoutRect().minW + r.deltaW, i > r.w && (o = r.x - Math.max(0, i - r.w), e.layoutRect({
                    w: i,
                    x: o
                }), a = !0)), a && e.recalc()
            },
            initLayoutRect: function () {
                var e = this, t = e._super(), r = 0, i;
                if (e.settings.title && !e._fullscreen) {
                    i = e.getEl("head");
                    var o = n.getSize(i);
                    t.headerW = o.width, t.headerH = o.height, r += t.headerH
                }
                e.statusbar && (r += e.statusbar.layoutRect().h), t.deltaH += r, t.minH += r, t.h += r;
                var a = n.getWindowSize();
                return t.x = Math.max(0, a.w / 2 - t.w / 2), t.y = Math.max(0, a.h / 2 - t.h / 2), t
            },
            renderHtml: function () {
                var e = this, t = e._layout, n = e._id, r = e.classPrefix, i = e.settings, o = "", a = "", s = i.html;
                return e.preRender(), t.preRender(e), i.title && (o = '<div id="' + n + '-head" class="' + r + 'window-head"><div id="' + n + '-title" class="' + r + 'title">' + e.encode(i.title) + '</div><button type="button" class="' + r + 'close" aria-hidden="true">\xd7</button><div id="' + n + '-dragh" class="' + r + 'dragh"></div></div>'), i.url && (s = '<iframe src="' + i.url + '" tabindex="-1"></iframe>'), "undefined" == typeof s && (s = t.renderHtml(e)), e.statusbar && (a = e.statusbar.renderHtml()), '<div id="' + n + '" class="' + e.classes() + '" hidefocus="1"><div class="' + e.classPrefix + 'reset" role="application">' + o + '<div id="' + n + '-body" class="' + e.classes("body") + '">' + s + "</div>" + a + "</div></div>"
            },
            fullscreen: function (e) {
                var t = this, r = document.documentElement, i, o = t.classPrefix, a;
                if (e != t._fullscreen)if (n.on(window, "resize", function () {
                        var e;
                        if (t._fullscreen)if (i)t._timer || (t._timer = setTimeout(function () {
                            var e = n.getWindowSize();
                            t.moveTo(0, 0).resizeTo(e.w, e.h), t._timer = 0
                        }, 50)); else {
                            e = (new Date).getTime();
                            var r = n.getWindowSize();
                            t.moveTo(0, 0).resizeTo(r.w, r.h), (new Date).getTime() - e > 50 && (i = !0)
                        }
                    }), a = t.layoutRect(), t._fullscreen = e, e) {
                    t._initial = {
                        x: a.x,
                        y: a.y,
                        w: a.w,
                        h: a.h
                    }, t._borderBox = t.parseBox("0"), t.getEl("head").style.display = "none", a.deltaH -= a.headerH + 2, n.addClass(r, o + "fullscreen"), n.addClass(document.body, o + "fullscreen"), t.addClass("fullscreen");
                    var s = n.getWindowSize();
                    t.moveTo(0, 0).resizeTo(s.w, s.h)
                } else t._borderBox = t.parseBox(t.settings.border), t.getEl("head").style.display = "", a.deltaH += a.headerH, n.removeClass(r, o + "fullscreen"), n.removeClass(document.body, o + "fullscreen"), t.removeClass("fullscreen"), t.moveTo(t._initial.x, t._initial.y).resizeTo(t._initial.w, t._initial.h);
                return t.reflow()
            },
            postRender: function () {
                var e = this, t;
                setTimeout(function () {
                    e.addClass("in")
                }, 0), e._super(), e.statusbar && e.statusbar.postRender(), e.focus(), this.dragHelper = new r(e._id + "-dragh", {
                    start: function () {
                        t = {x: e.layoutRect().x, y: e.layoutRect().y}
                    }, drag: function (n) {
                        e.moveTo(t.x + n.deltaX, t.y + n.deltaY)
                    }
                }), e.on("submit", function (t) {
                    t.isDefaultPrevented() || e.close()
                })
            },
            submit: function () {
                return this.fire("submit", {data: this.toJSON()})
            },
            remove: function () {
                var e = this, t = e.classPrefix;
                e.dragHelper.destroy(), e._super(), e.statusbar && this.statusbar.remove(), e._fullscreen && (n.removeClass(document.documentElement, t + "fullscreen"), n.removeClass(document.body, t + "fullscreen"))
            },
            getContentWindow: function () {
                var e = this.getEl().getElementsByTagName("iframe")[0];
                return e ? e.contentWindow : null
            }
        });
        return i
    }), r(nt, [tt], function (e) {
        var t = e.extend({
            init: function (e) {
                e = {
                    border: 1,
                    padding: 20,
                    layout: "flex",
                    pack: "center",
                    align: "center",
                    containerCls: "panel",
                    autoScroll: !0,
                    buttons: {type: "button", text: "Ok", action: "ok"},
                    items: {type: "label", multiline: !0, maxWidth: 500, maxHeight: 200}
                }, this._super(e)
            }, Statics: {
                OK: 1, OK_CANCEL: 2, YES_NO: 3, YES_NO_CANCEL: 4, msgBox: function (n) {
                    var r, i = n.callback || function () {
                        };
                    switch (n.buttons) {
                        case t.OK_CANCEL:
                            r = [{
                                type: "button", text: "Ok", subtype: "primary", onClick: function (e) {
                                    e.control.parents()[1].close(), i(!0)
                                }
                            }, {
                                type: "button", text: "Cancel", onClick: function (e) {
                                    e.control.parents()[1].close(), i(!1)
                                }
                            }];
                            break;
                        case t.YES_NO:
                            r = [{
                                type: "button", text: "Ok", subtype: "primary", onClick: function (e) {
                                    e.control.parents()[1].close(), i(!0)
                                }
                            }];
                            break;
                        case t.YES_NO_CANCEL:
                            r = [{
                                type: "button", text: "Ok", subtype: "primary", onClick: function (e) {
                                    e.control.parents()[1].close()
                                }
                            }];
                            break;
                        default:
                            r = [{
                                type: "button", text: "Ok", subtype: "primary", onClick: function (e) {
                                    e.control.parents()[1].close(), i(!0)
                                }
                            }]
                    }
                    return new e({
                        padding: 20,
                        x: n.x,
                        y: n.y,
                        minWidth: 300,
                        minHeight: 100,
                        layout: "flex",
                        pack: "center",
                        align: "center",
                        buttons: r,
                        title: n.title,
                        role: "alertdialog",
                        items: {type: "label", multiline: !0, maxWidth: 500, maxHeight: 200, text: n.text},
                        onPostRender: function () {
                            this.aria("describedby", this.items()[0]._id)
                        },
                        onClose: n.onClose,
                        onCancel: function () {
                            i(!1)
                        }
                    }).renderTo(document.body).reflow()
                }, alert: function (e, n) {
                    return "string" == typeof e && (e = {text: e}), e.callback = n, t.msgBox(e)
                }, confirm: function (e, n) {
                    return "string" == typeof e && (e = {text: e}), e.callback = n, e.buttons = t.OK_CANCEL, t.msgBox(e)
                }
            }
        });
        return t
    }), r(rt, [tt, nt], function (e, t) {
        return function (n) {
            function r() {
                return o.length ? o[o.length - 1] : void 0
            }

            var i = this, o = [];
            i.windows = o, i.open = function (t, r) {
                var i;
                return n.editorManager.activeEditor = n, t.title = t.title || " ", t.url = t.url || t.file, t.url && (t.width = parseInt(t.width || 320, 10), t.height = parseInt(t.height || 240, 10)), t.body && (t.items = {
                    defaults: t.defaults,
                    type: t.bodyType || "form",
                    items: t.body
                }), t.url || t.buttons || (t.buttons = [{
                    text: "Ok", subtype: "primary", onclick: function () {
                        i.find("form")[0].submit()
                    }
                }, {
                    text: "Cancel", onclick: function () {
                        i.close()
                    }
                }]), i = new e(t), o.push(i), i.on("close", function () {
                    for (var e = o.length; e--;)o[e] === i && o.splice(e, 1);
                    n.focus()
                }), t.data && i.on("postRender", function () {
                    this.find("*").each(function (e) {
                        var n = e.name();
                        n in t.data && e.value(t.data[n])
                    })
                }), i.features = t || {}, i.params = r || {}, n.nodeChanged(), i.renderTo().reflow()
            }, i.alert = function (e, r, i) {
                t.alert(e, function () {
                    r ? r.call(i || this) : n.focus()
                })
            }, i.confirm = function (e, n, r) {
                t.confirm(e, function (e) {
                    n.call(r || this, e)
                })
            }, i.close = function () {
                r() && r().close()
            }, i.getParams = function () {
                return r() ? r().params : null
            }, i.setParams = function (e) {
                r() && (r().params = e)
            }, i.getWindows = function () {
                return o
            }
        }
    }), r(it, [R, B, x, m, g, p], function (e, t, n, r, i, o) {
        return function (a) {
            function s(e, t) {
                try {
                    a.getDoc().execCommand(e, !1, t)
                } catch (n) {
                }
            }

            function l() {
                var e = a.getDoc().documentMode;
                return e ? e : 6
            }

            function c(e) {
                return e.isDefaultPrevented()
            }

            function u() {
                function t(e) {
                    var t = new i(function () {
                    });
                    o.each(a.getBody().getElementsByTagName("*"), function (e) {
                        "SPAN" == e.tagName && e.setAttribute("mce-data-marked", 1), !e.hasAttribute("data-mce-style") && e.hasAttribute("style") && a.dom.setAttrib(e, "style", e.getAttribute("style"))
                    }), t.observe(a.getDoc(), {
                        childList: !0,
                        attributes: !0,
                        subtree: !0,
                        attributeFilter: ["style"]
                    }), a.getDoc().execCommand(e ? "ForwardDelete" : "Delete", !1, null);
                    var n = a.selection.getRng(), r = n.startContainer.parentNode;
                    o.each(t.takeRecords(), function (e) {
                        if (q.isChildOf(e.target, a.getBody())) {
                            if ("style" == e.attributeName) {
                                var t = e.target.getAttribute("data-mce-style");
                                t ? e.target.setAttribute("style", t) : e.target.removeAttribute("style")
                            }
                            o.each(e.addedNodes, function (e) {
                                if ("SPAN" == e.nodeName && !e.getAttribute("mce-data-marked")) {
                                    var t, i;
                                    e == r && (t = n.startOffset, i = e.firstChild), q.remove(e, !0), i && (n.setStart(i, t), n.setEnd(i, t), a.selection.setRng(n))
                                }
                            })
                        }
                    }), t.disconnect(), o.each(a.dom.select("span[mce-data-marked]"), function (e) {
                        e.removeAttribute("mce-data-marked")
                    })
                }

                var n = a.getDoc(), r = "data:text/mce-internal,", i = window.MutationObserver, s, l;
                i || (s = !0, i = function () {
                    function e(e) {
                        var t = e.relatedNode || e.target;
                        n.push({target: t, addedNodes: [t]})
                    }

                    function t(e) {
                        var t = e.relatedNode || e.target;
                        n.push({target: t, attributeName: e.attrName})
                    }

                    var n = [], r;
                    this.observe = function (n) {
                        r = n, r.addEventListener("DOMSubtreeModified", e, !1), r.addEventListener("DOMNodeInsertedIntoDocument", e, !1), r.addEventListener("DOMNodeInserted", e, !1), r.addEventListener("DOMAttrModified", t, !1)
                    }, this.disconnect = function () {
                        r.removeEventListener("DOMSubtreeModified", e, !1), r.removeEventListener("DOMNodeInsertedIntoDocument", e, !1), r.removeEventListener("DOMNodeInserted", e, !1), r.removeEventListener("DOMAttrModified", t, !1)
                    }, this.takeRecords = function () {
                        return n
                    }
                }), a.on("keydown", function (n) {
                    var r = n.keyCode == U, i = e.metaKeyPressed(n);
                    if (!c(n) && (r || n.keyCode == V)) {
                        var o = a.selection.getRng(), s = o.startContainer, l = o.startOffset;
                        if (!i && o.collapsed && 3 == s.nodeType && (r ? l < s.data.length : l > 0))return;
                        n.preventDefault(), i && a.selection.getSel().modify("extend", r ? "forward" : "backward", "word"), t(r)
                    }
                }), a.on("keypress", function (n) {
                    c(n) || $.isCollapsed() || !n.charCode || e.metaKeyPressed(n) || (n.preventDefault(), t(!0), a.selection.setContent(String.fromCharCode(n.charCode)))
                }), a.addCommand("Delete", function () {
                    t()
                }), a.addCommand("ForwardDelete", function () {
                    t(!0)
                }), s || (a.on("dragstart", function (e) {
                    var t;
                    a.selection.isCollapsed() && "IMG" == e.target.tagName && $.select(e.target), l = $.getRng(), t = a.selection.getContent(), t.length > 0 && e.dataTransfer.setData("URL", "data:text/mce-internal," + escape(t))
                }), a.on("drop", function (e) {
                    if (!c(e)) {
                        var i = e.dataTransfer.getData("URL");
                        if (!i || -1 == i.indexOf(r) || !n.caretRangeFromPoint)return;
                        i = unescape(i.substr(r.length)), n.caretRangeFromPoint && (e.preventDefault(), window.setTimeout(function () {
                            var r = n.caretRangeFromPoint(e.x, e.y);
                            l && ($.setRng(l), l = null), t(), $.setRng(r), a.insertContent(i)
                        }, 0))
                    }
                }), a.on("cut", function (e) {
                    !c(e) && e.clipboardData && (e.preventDefault(), e.clipboardData.clearData(), e.clipboardData.setData("text/html", a.selection.getContent()), e.clipboardData.setData("text/plain", a.selection.getContent({format: "text"})), t(!0))
                }))
            }

            function d() {
                function e(e) {
                    var t = q.create("body"), n = e.cloneContents();
                    return t.appendChild(n), $.serializer.serialize(t, {format: "html"})
                }

                function n(n) {
                    if (!n.setStart) {
                        if (n.item)return !1;
                        var r = n.duplicate();
                        return r.moveToElementText(a.getBody()), t.compareRanges(n, r)
                    }
                    var i = e(n), o = q.createRng();
                    o.selectNode(a.getBody());
                    var s = e(o);
                    return i === s
                }

                a.on("keydown", function (e) {
                    var t = e.keyCode, r, i;
                    if (!c(e) && (t == U || t == V)) {
                        if (r = a.selection.isCollapsed(), i = a.getBody(), r && !q.isEmpty(i))return;
                        if (!r && !n(a.selection.getRng()))return;
                        e.preventDefault(), a.setContent(""), i.firstChild && q.isBlock(i.firstChild) ? a.selection.setCursorLocation(i.firstChild, 0) : a.selection.setCursorLocation(i, 0), a.nodeChanged()
                    }
                })
            }

            function f() {
                a.on("keydown", function (t) {
                    !c(t) && 65 == t.keyCode && e.metaKeyPressed(t) && (t.preventDefault(), a.execCommand("SelectAll"))
                })
            }

            function p() {
                a.settings.content_editable || (q.bind(a.getDoc(), "focusin", function () {
                    $.setRng($.getRng())
                }), q.bind(a.getDoc(), "mousedown", function (e) {
                    e.target == a.getDoc().documentElement && (a.getBody().focus(), $.setRng($.getRng()))
                }))
            }

            function h() {
                a.on("keydown", function (e) {
                    if (!c(e) && e.keyCode === V && $.isCollapsed() && 0 === $.getRng(!0).startOffset) {
                        var t = $.getNode(), n = t.previousSibling;
                        if ("HR" == t.nodeName)return q.remove(t), void e.preventDefault();
                        n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (q.remove(n), e.preventDefault())
                    }
                })
            }

            function m() {
                window.Range.prototype.getClientRects || a.on("mousedown", function (e) {
                    if (!c(e) && "HTML" === e.target.nodeName) {
                        var t = a.getBody();
                        t.blur(), setTimeout(function () {
                            t.focus()
                        }, 0)
                    }
                })
            }

            function g() {
                a.on("click", function (e) {
                    e = e.target, /^(IMG|HR)$/.test(e.nodeName) && $.getSel().setBaseAndExtent(e, 0, e, 1), "A" == e.nodeName && q.hasClass(e, "mce-item-anchor") && $.select(e), a.nodeChanged()
                })
            }

            function v() {
                function e() {
                    var e = q.getAttribs($.getStart().cloneNode(!1));
                    return function () {
                        var t = $.getStart();
                        t !== a.getBody() && (q.setAttrib(t, "style", null), W(e, function (e) {
                            t.setAttributeNode(e.cloneNode(!0))
                        }))
                    }
                }

                function t() {
                    return !$.isCollapsed() && q.getParent($.getStart(), q.isBlock) != q.getParent($.getEnd(), q.isBlock)
                }

                a.on("keypress", function (n) {
                    var r;
                    return c(n) || 8 != n.keyCode && 46 != n.keyCode || !t() ? void 0 : (r = e(), a.getDoc().execCommand("delete", !1, null), r(), n.preventDefault(), !1)
                }), q.bind(a.getDoc(), "cut", function (n) {
                    var r;
                    !c(n) && t() && (r = e(), setTimeout(function () {
                        r()
                    }, 0))
                })
            }

            function y() {
                var e, n;
                a.on("selectionchange", function () {
                    n && (clearTimeout(n), n = 0), n = window.setTimeout(function () {
                        if (!a.removed) {
                            var n = $.getRng();
                            e && t.compareRanges(n, e) || (a.nodeChanged(), e = n)
                        }
                    }, 50)
                })
            }

            function b() {
                document.body.setAttribute("role", "application")
            }

            function C() {
                a.on("keydown", function (e) {
                    if (!c(e) && e.keyCode === V && $.isCollapsed() && 0 === $.getRng(!0).startOffset) {
                        var t = $.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase())return e.preventDefault(), !1
                    }
                })
            }

            function x() {
                l() > 7 || (s("RespectVisibilityInDesign", !0), a.contentStyles.push(".mceHideBrInPre pre br {display: none}"), q.addClass(a.getBody(), "mceHideBrInPre"), K.addNodeFilter("pre", function (e) {
                    for (var t = e.length, r, i, o, a; t--;)for (r = e[t].getAll("br"), i = r.length; i--;)o = r[i], a = o.prev, a && 3 === a.type && "\n" != a.value.charAt(a.value - 1) ? a.value += "\n" : o.parent.insert(new n("#text", 3), o, !0).value = "\n"
                }), G.addNodeFilter("pre", function (e) {
                    for (var t = e.length, n, r, i, o; t--;)for (n = e[t].getAll("br"), r = n.length; r--;)i = n[r], o = i.prev, o && 3 == o.type && (o.value = o.value.replace(/\r?\n$/, ""))
                }))
            }

            function w() {
                q.bind(a.getBody(), "mouseup", function () {
                    var e, t = $.getNode();
                    "IMG" == t.nodeName && ((e = q.getStyle(t, "width")) && (q.setAttrib(t, "width", e.replace(/[^0-9%]+/g, "")), q.setStyle(t, "width", "")), (e = q.getStyle(t, "height")) && (q.setAttrib(t, "height", e.replace(/[^0-9%]+/g, "")), q.setStyle(t, "height", "")))
                })
            }

            function _() {
                a.on("keydown", function (t) {
                    var n, r, i, o, s;
                    if (!c(t) && t.keyCode == e.BACKSPACE && (n = $.getRng(), r = n.startContainer, i = n.startOffset, o = q.getRoot(), s = r, n.collapsed && 0 === i)) {
                        for (; s && s.parentNode && s.parentNode.firstChild == s && s.parentNode != o;)s = s.parentNode;
                        "BLOCKQUOTE" === s.tagName && (a.formatter.toggle("blockquote", null, s), n = q.createRng(), n.setStart(r, 0), n.setEnd(r, 0), $.setRng(n))
                    }
                })
            }

            function N() {
                function e() {
                    a._refreshContentEditable(), s("StyleWithCSS", !1), s("enableInlineTableEditing", !1), j.object_resizing || s("enableObjectResizing", !1)
                }

                j.readonly || a.on("BeforeExecCommand MouseDown", e)
            }

            function E() {
                function e() {
                    W(q.select("a"), function (e) {
                        var t = e.parentNode, n = q.getRoot();
                        if (t.lastChild === e) {
                            for (; t && !q.isBlock(t);) {
                                if (t.parentNode.lastChild !== t || t === n)return;
                                t = t.parentNode
                            }
                            q.add(t, "br", {"data-mce-bogus": 1})
                        }
                    })
                }

                a.on("SetContent ExecCommand", function (t) {
                    ("setcontent" == t.type || "mceInsertLink" === t.command) && e()
                })
            }

            function S() {
                j.forced_root_block && a.on("init", function () {
                    s("DefaultParagraphSeparator", j.forced_root_block)
                })
            }

            function k() {
                a.on("Undo Redo SetContent", function (e) {
                    e.initial || a.execCommand("mceRepaint")
                })
            }

            function T() {
                a.on("keydown", function (e) {
                    var t;
                    c(e) || e.keyCode != V || (t = a.getDoc().selection.createRange(), t && t.item && (e.preventDefault(), a.undoManager.beforeChange(), q.remove(t.item(0)), a.undoManager.add()))
                })
            }

            function R() {
                var e;
                l() >= 10 && (e = "", W("p div h1 h2 h3 h4 h5 h6".split(" "), function (t, n) {
                    e += (n > 0 ? "," : "") + t + ":empty"
                }), a.contentStyles.push(e + "{padding-right: 1px !important}"))
            }

            function A() {
                l() < 9 && (K.addNodeFilter("noscript", function (e) {
                    for (var t = e.length, n, r; t--;)n = e[t], r = n.firstChild, r && n.attr("data-mce-innertext", r.value)
                }), G.addNodeFilter("noscript", function (e) {
                    for (var t = e.length, i, o, a; t--;)i = e[t], o = e[t].firstChild, o ? o.value = r.decode(o.value) : (a = i.attributes.map["data-mce-innertext"], a && (i.attr("data-mce-innertext", null), o = new n("#text", 3), o.value = a, o.raw = !0, i.append(o)))
                }))
            }

            function B() {
                function e(e, t) {
                    var n = i.createTextRange();
                    try {
                        n.moveToPoint(e, t)
                    } catch (r) {
                        n = null
                    }
                    return n
                }

                function t(t) {
                    var r;
                    t.button ? (r = e(t.x, t.y), r && (r.compareEndPoints("StartToStart", a) > 0 ? r.setEndPoint("StartToStart", a) : r.setEndPoint("EndToEnd", a), r.select())) : n()
                }

                function n() {
                    var e = r.selection.createRange();
                    a && !e.item && 0 === e.compareEndPoints("StartToEnd", e) && a.select(), q.unbind(r, "mouseup", n), q.unbind(r, "mousemove", t), a = o = 0
                }

                var r = q.doc, i = r.body, o, a, s;
                r.documentElement.unselectable = !0, q.bind(r, "mousedown contextmenu", function (i) {
                    if ("HTML" === i.target.nodeName) {
                        if (o && n(), s = r.documentElement, s.scrollHeight > s.clientHeight)return;
                        o = 1, a = e(i.x, i.y), a && (q.bind(r, "mouseup", n), q.bind(r, "mousemove", t), q.getRoot().focus(), a.select())
                    }
                })
            }

            function D() {
                a.on("keyup focusin mouseup", function (t) {
                    65 == t.keyCode && e.metaKeyPressed(t) || $.normalize()
                }, !0)
            }

            function L() {
                a.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")
            }

            function M() {
                a.inline || a.on("keydown", function () {
                    document.activeElement == document.body && a.getWin().focus()
                })
            }

            function H() {
                a.inline || (a.contentStyles.push("body {min-height: 150px}"), a.on("click", function (e) {
                    "HTML" == e.target.nodeName && (a.getBody().focus(), a.selection.normalize(), a.nodeChanged())
                }))
            }

            function P() {
                i.mac && a.on("keydown", function (t) {
                    !e.metaKeyPressed(t) || 37 != t.keyCode && 39 != t.keyCode || (t.preventDefault(), a.selection.getSel().modify("move", 37 == t.keyCode ? "backward" : "forward", "word"))
                })
            }

            function O() {
                s("AutoUrlDetect", !1)
            }

            function I() {
                a.inline || a.on("focus blur beforegetcontent", function () {
                    var e = a.dom.create("br");
                    a.getBody().appendChild(e), e.parentNode.removeChild(e)
                }, !0)
            }

            function F() {
                a.on("click", function (e) {
                    var t = e.target;
                    do if ("A" === t.tagName)return void e.preventDefault(); while (t = t.parentNode)
                }), a.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
            }

            function z() {
                a.on("init", function () {
                    a.dom.bind(a.getBody(), "submit", function (e) {
                        e.preventDefault()
                    })
                })
            }

            var W = o.each, V = e.BACKSPACE, U = e.DELETE, q = a.dom, $ = a.selection, j = a.settings, K = a.parser, G = a.serializer, Y = i.gecko, X = i.ie, J = i.webkit;
            C(), _(), d(), D(), J && (u(), p(), g(), S(), z(), i.iOS ? (y(), M(), H(), F()) : f()), X && i.ie < 11 && (h(), b(), x(), w(), T(), R(), A(), B()), i.ie >= 11 && (H(), I()), i.ie && (f(), O()), Y && (h(), m(), v(), N(), E(), k(), L(), P())
        }
    }), r(ot, [W], function (e) {
        function t(t) {
            return t._eventDispatcher || (t._eventDispatcher = new e({
                scope: t, toggleEvent: function (n, r) {
                    e.isNative(n) && t.toggleNativeEvent && t.toggleNativeEvent(n, r)
                }
            })), t._eventDispatcher
        }

        return {
            fire: function (e, n, r) {
                var i = this;
                if (i.removed && "remove" !== e)return n;
                if (n = t(i).fire(e, n, r), r !== !1 && i.parent)for (var o = i.parent(); o && !n.isPropagationStopped();)o.fire(e, n, !1), o = o.parent();
                return n
            }, on: function (e, n, r) {
                return t(this).on(e, n, r)
            }, off: function (e, n) {
                return t(this).off(e, n)
            }, hasEventListeners: function (e) {
                return t(this).has(e)
            }
        }
    }), r(at, [ot, y, p], function (e, t, n) {
        function r(e, t) {
            return "selectionchange" == t ? e.getDoc() : !e.inline && /^mouse|click|contextmenu|drop/.test(t) ? e.getDoc() : e.getBody()
        }

        function i(e, t) {
            var n = e.settings.event_root, i = e.editorManager, a = i.eventRootElm || r(e, t);
            if (n) {
                if (i.rootEvents || (i.rootEvents = {}, i.on("RemoveEditor", function () {
                        i.activeEditor || (o.unbind(a), delete i.rootEvents)
                    })), i.rootEvents[t])return;
                a == e.getBody() && (a = o.select(n)[0], i.eventRootElm = a), i.rootEvents[t] = !0, o.bind(a, t, function (e) {
                    for (var n = e.target, r = i.editors, a = r.length; a--;) {
                        var s = r[a].getBody();
                        (s === n || o.isChildOf(n, s)) && (r[a].hidden || r[a].fire(t, e))
                    }
                })
            } else e.dom.bind(a, t, function (n) {
                e.hidden || e.fire(t, n)
            })
        }

        var o = t.DOM, a = {
            bindPendingEventDelegates: function () {
                var e = this;
                n.each(e._pendingNativeEvents, function (t) {
                    i(e, t)
                })
            }, toggleNativeEvent: function (e, t) {
                var n = this;
                n.settings.readonly || "focus" != e && "blur" != e && (t ? n.initialized ? i(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && n.dom.unbind(r(n, e), e))
            }
        };
        return a = n.extend({}, e, a)
    }), r(st, [p, g], function (e, t) {
        var n = e.each, r = e.explode, i = {f9: 120, f10: 121, f11: 122};
        return function (o) {
            var a = this, s = {};
            o.on("keyup keypress keydown", function (e) {
                (e.altKey || e.ctrlKey || e.metaKey) && n(s, function (n) {
                    var r = t.mac ? e.metaKey : e.ctrlKey;
                    if (n.ctrl == r && n.alt == e.altKey && n.shift == e.shiftKey)return e.keyCode == n.keyCode || e.charCode && e.charCode == n.charCode ? (e.preventDefault(), "keydown" == e.type && n.func.call(n.scope), !0) : void 0
                })
            }), a.add = function (t, a, l, c) {
                var u;
                return u = l, "string" == typeof l ? l = function () {
                    o.execCommand(u, !1, null)
                } : e.isArray(u) && (l = function () {
                    o.execCommand(u[0], u[1], u[2])
                }), n(r(t.toLowerCase()), function (e) {
                    var t = {func: l, scope: c || o, desc: o.translate(a), alt: !1, ctrl: !1, shift: !1};
                    n(r(e, "+"), function (e) {
                        switch (e) {
                            case"alt":
                            case"ctrl":
                            case"shift":
                                t[e] = !0;
                                break;
                            default:
                                t.charCode = e.charCodeAt(0), t.keyCode = i[e] || e.toUpperCase().charCodeAt(0)
                        }
                    }), s[(t.ctrl ? "ctrl" : "") + "," + (t.alt ? "alt" : "") + "," + (t.shift ? "shift" : "") + "," + t.keyCode] = t
                }), !0
            }
        }
    }), r(lt, [y, C, x, k, S, D, M, H, P, O, I, F, b, l, rt, w, N, it, g, p, at, st], function (e, n, r, i, o, a, s, l, c, u, d, f, p, h, m, g, v, y, b, C, x, w) {
        function _(e, t, r) {
            var i = this, o, a;
            o = i.documentBaseUrl = r.documentBaseURL, a = r.baseURI, i.settings = t = k({
                id: e,
                theme: "modern",
                delta_width: 0,
                delta_height: 0,
                popup_css: "",
                plugins: "",
                document_base_url: o,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                padd_empty_editor: !0,
                render_ui: !0,
                indentation: "30px",
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: "simple",
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",
                validate: !0,
                entity_encoding: "named",
                url_converter: i.convertURL,
                url_converter_scope: i,
                ie7_compat: !0
            }, t), n.language = t.language || "en", n.languageLoad = t.language_load, n.baseURL = r.baseURL, i.id = t.id = e, i.isNotDirty = !0, i.plugins = {}, i.documentBaseURI = new f(t.document_base_url || o, {base_uri: a}), i.baseURI = a, i.contentCSS = [], i.contentStyles = [], i.shortcuts = new w(i), i.execCommands = {}, i.queryStateCommands = {}, i.queryValueCommands = {}, i.loadedCSS = {}, i.suffix = r.suffix, i.editorManager = r, i.inline = t.inline, r.fire("SetupEditor", i), i.execCallback("setup", i)
        }

        var N = e.DOM, E = n.ThemeManager, S = n.PluginManager, k = C.extend, T = C.each, R = C.explode, A = C.inArray, B = C.trim, D = C.resolve, L = h.Event, M = b.gecko, H = b.ie;
        return _.prototype = {
            render: function () {
                function e() {
                    N.unbind(window, "ready", e), n.render()
                }

                function t() {
                    var e = p.ScriptLoader;
                    if (r.language && "en" != r.language && !r.language_url && (r.language_url = n.editorManager.baseURL + "/langs/" + r.language + ".js"), r.language_url && e.add(r.language_url), r.theme && "function" != typeof r.theme && "-" != r.theme.charAt(0) && !E.urls[r.theme]) {
                        var t = r.theme_url;
                        t = t ? n.documentBaseURI.toAbsolute(t) : "themes/" + r.theme + "/theme" + o + ".js", E.load(r.theme, t)
                    }
                    C.isArray(r.plugins) && (r.plugins = r.plugins.join(" ")), T(r.external_plugins, function (e, t) {
                        S.load(t, e), r.plugins += " " + t
                    }), T(r.plugins.split(/[ ,]/), function (e) {
                        if (e = B(e), e && !S.urls[e])if ("-" == e.charAt(0)) {
                            e = e.substr(1, e.length);
                            var t = S.dependencies(e);
                            T(t, function (e) {
                                var t = {prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js"};
                                e = S.createUrl(t, e), S.load(e.resource, e)
                            })
                        } else S.load(e, {prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js"})
                    }), e.loadQueue(function () {
                        n.removed || n.init()
                    })
                }

                var n = this, r = n.settings, i = n.id, o = n.suffix;
                if (!L.domLoaded)return void N.bind(window, "ready", e);
                if (n.getElement() && b.contentEditable) {
                    r.inline ? n.inline = !0 : (n.orgVisibility = n.getElement().style.visibility, n.getElement().style.visibility = "hidden");
                    var a = n.getElement().form || N.getParent(i, "form");
                    a && (n.formElement = a, r.hidden_input && !/TEXTAREA|INPUT/i.test(n.getElement().nodeName) && (N.insertAfter(N.create("input", {
                        type: "hidden",
                        name: i
                    }), i), n.hasHiddenInput = !0), n.formEventDelegate = function (e) {
                        n.fire(e.type, e)
                    }, N.bind(a, "submit reset", n.formEventDelegate), n.on("reset", function () {
                        n.setContent(n.startContent, {format: "raw"})
                    }), !r.submit_patch || a.submit.nodeType || a.submit.length || a._mceOldSubmit || (a._mceOldSubmit = a.submit, a.submit = function () {
                        return n.editorManager.triggerSave(), n.isNotDirty = !0, a._mceOldSubmit(a)
                    })), n.windowManager = new m(n), "xml" == r.encoding && n.on("GetContent", function (e) {
                        e.save && (e.content = N.encode(e.content))
                    }), r.add_form_submit_trigger && n.on("submit", function () {
                        n.initialized && n.save()
                    }), r.add_unload_trigger && (n._beforeUnload = function () {
                        !n.initialized || n.destroyed || n.isHidden() || n.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                        })
                    }, n.editorManager.on("BeforeUnload", n._beforeUnload)), t()
                }
            }, init: function () {
                function e(n) {
                    var r = S.get(n), i, o;
                    i = S.urls[n] || t.documentBaseUrl.replace(/\/$/, ""), n = B(n), r && -1 === A(m, n) && (T(S.dependencies(n), function (t) {
                        e(t)
                    }), o = new r(t, i), t.plugins[n] = o, o.init && (o.init(t, i), m.push(n)))
                }

                var t = this, n = t.settings, r = t.getElement(), i, o, a, s, l, c, u, d, f, p, h, m = [];
                if (t.rtl = this.editorManager.i18n.rtl, t.editorManager.add(t), n.aria_label = n.aria_label || N.getAttrib(r, "aria-label", t.getLang("aria.rich_text_area")), n.theme && ("function" != typeof n.theme ? (n.theme = n.theme.replace(/-/, ""), c = E.get(n.theme), t.theme = new c(t, E.urls[n.theme]), t.theme.init && t.theme.init(t, E.urls[n.theme] || t.documentBaseUrl.replace(/\/$/, ""))) : t.theme = n.theme), T(n.plugins.replace(/\-/g, "").split(/[ ,]/), e), n.render_ui && t.theme && (t.orgDisplay = r.style.display, "function" != typeof n.theme ? (i = n.width || r.style.width || r.offsetWidth, o = n.height || r.style.height || r.offsetHeight, a = n.min_height || 100, p = /^[0-9\.]+(|px)$/i, p.test("" + i) && (i = Math.max(parseInt(i, 10), 100)), p.test("" + o) && (o = Math.max(parseInt(o, 10), a)), l = t.theme.renderUI({
                        targetNode: r,
                        width: i,
                        height: o,
                        deltaWidth: n.delta_width,
                        deltaHeight: n.delta_height
                    }), n.content_editable || (N.setStyles(l.sizeContainer || l.editorContainer, {
                        wi2dth: i,
                        h2eight: o
                    }), o = (l.iframeHeight || o) + ("number" == typeof o ? l.deltaHeight || 0 : ""), a > o && (o = a))) : (l = n.theme(t, r), l.editorContainer.nodeType && (l.editorContainer = l.editorContainer.id = l.editorContainer.id || t.id + "_parent"), l.iframeContainer.nodeType && (l.iframeContainer = l.iframeContainer.id = l.iframeContainer.id || t.id + "_iframecontainer"), o = l.iframeHeight || r.offsetHeight), t.editorContainer = l.editorContainer), n.content_css && T(R(n.content_css), function (e) {
                        t.contentCSS.push(t.documentBaseURI.toAbsolute(e))
                    }), n.content_style && t.contentStyles.push(n.content_style), n.content_editable)return r = s = l = null, t.initContentBody();
                for (t.iframeHTML = n.doctype + "<html><head>", n.document_base_url != t.documentBaseUrl && (t.iframeHTML += '<base href="' + t.documentBaseURI.getURI() + '" />'), !b.caretAfter && n.ie7_compat && (t.iframeHTML += '<meta http-equiv="X-UA-Compatible" content="IE=7" />'), t.iframeHTML += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', h = 0; h < t.contentCSS.length; h++) {
                    var g = t.contentCSS[h];
                    t.iframeHTML += '<link type="text/css" rel="stylesheet" href="' + g + '" />', t.loadedCSS[g] = !0
                }
                d = n.body_id || "tinymce", -1 != d.indexOf("=") && (d = t.getParam("body_id", "", "hash"), d = d[t.id] || d), f = n.body_class || "", -1 != f.indexOf("=") && (f = t.getParam("body_class", "", "hash"), f = f[t.id] || ""), t.iframeHTML += '</head><body id="' + d + '" class="mce-content-body ' + f + '" onload="window.parent.tinymce.get(\'' + t.id + "').fire('load');\"><br></body></html>";
                var v = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + t.id + '");document.write(ed.iframeHTML);document.close();ed.initContentBody(true);})()';
                if (document.domain != location.hostname && (u = v), s = N.add(l.iframeContainer, "iframe", {
                        id: t.id + "_ifr",
                        src: u || 'javascript:""',
                        frameBorder: "0",
                        allowTransparency: "true",
                        title: t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                        style: {width: "100%", height: o, display: "block"}
                    }), H)try {
                    t.getDoc()
                } catch (y) {
                    s.src = u = v
                }
                t.contentAreaContainer = l.iframeContainer, l.editorContainer && (N.get(l.editorContainer).style.display = t.orgDisplay), N.get(t.id).style.display = "none", N.setAttrib(t.id, "aria-hidden", !0), u || t.initContentBody(), r = s = l = null
            }, initContentBody: function (t) {
                var n = this, o = n.settings, f = N.get(n.id), p = n.getDoc(), h, m;
                o.inline || (n.getElement().style.visibility = n.orgVisibility), t || o.content_editable || (p.open(), p.write(n.iframeHTML), p.close()), o.content_editable && (n.on("remove", function () {
                    var e = this.getBody();
                    N.removeClass(e, "mce-content-body"), N.removeClass(e, "mce-edit-focus"), N.setAttrib(e, "contentEditable", null)
                }), N.addClass(f, "mce-content-body"), n.contentDocument = p = o.content_document || document, n.contentWindow = o.content_window || window, n.bodyElement = f, o.content_document = o.content_window = null, o.root_name = f.nodeName.toLowerCase()), h = n.getBody(), h.disabled = !0, o.readonly || (n.inline && "static" == N.getStyle(h, "position", !0) && (h.style.position = "relative"), h.contentEditable = n.getParam("content_editable_state", !0)), h.disabled = !1, n.schema = new g(o), n.dom = new e(p, {
                    keep_values: !0,
                    url_converter: n.convertURL,
                    url_converter_scope: n,
                    hex_colors: o.force_hex_style_colors,
                    class_filter: o.class_filter,
                    update_styles: !0,
                    root_element: o.content_editable ? n.id : null,
                    collect: o.content_editable,
                    schema: n.schema,
                    onSetAttrib: function (e) {
                        n.fire("SetAttrib", e)
                    }
                }), n.parser = new v(o, n.schema), n.parser.addAttributeFilter("src,href,style,tabindex", function (e, t) {
                    for (var r = e.length, i, o = n.dom, a, s; r--;)i = e[r], a = i.attr(t), s = "data-mce-" + t, i.attributes.map[s] || ("style" === t ? i.attr(s, o.serializeStyle(o.parseStyle(a), i.name)) : "tabindex" === t ? (i.attr(s, a), i.attr(t, null)) : i.attr(s, n.convertURL(a, t, i.name)))
                }), n.parser.addNodeFilter("script", function (e) {
                    for (var t = e.length, n; t--;)n = e[t], n.attr("type", "mce-" + (n.attr("type") || "text/javascript"))
                }), n.parser.addNodeFilter("#cdata", function (e) {
                    for (var t = e.length, n; t--;)n = e[t], n.type = 8, n.name = "#comment", n.value = "[CDATA[" + n.value + "]]"
                }), n.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
                    for (var t = e.length, i, o = n.schema.getNonEmptyElements(); t--;)i = e[t], i.isEmpty(o) && (i.empty().append(new r("br", 1)).shortEnded = !0)
                }), n.serializer = new i(o, n), n.selection = new a(n.dom, n.getWin(), n.serializer, n), n.formatter = new s(n), n.undoManager = new l(n), n.forceBlocks = new u(n), n.enterKey = new c(n), n.editorCommands = new d(n), n.fire("PreInit"), o.browser_spellcheck || o.gecko_spellcheck || (p.body.spellcheck = !1, N.setAttrib(h, "spellcheck", "false")), n.fire("PostRender"), n.quirks = y(n), o.directionality && (h.dir = o.directionality), o.nowrap && (h.style.whiteSpace = "nowrap"), o.protect && n.on("BeforeSetContent", function (e) {
                    T(o.protect, function (t) {
                        e.content = e.content.replace(t, function (e) {
                            return "<!--mce:protected " + escape(e) + "-->"
                        })
                    })
                }), n.on("SetContent", function () {
                    n.addVisual(n.getBody())
                }), o.padd_empty_editor && n.on("PostProcess", function (e) {
                    e.content = e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/, "")
                }), n.load({
                    initial: !0,
                    format: "html"
                }), n.startContent = n.getContent({format: "raw"}), n.initialized = !0, n.bindPendingEventDelegates(), n.fire("init"), n.focus(!0), n.nodeChanged({initial: !0}), n.execCallback("init_instance_callback", n), n.contentStyles.length > 0 && (m = "", T(n.contentStyles, function (e) {
                    m += e + "\r\n"
                }), n.dom.addStyle(m)), T(n.contentCSS, function (e) {
                    n.loadedCSS[e] || (n.dom.loadCSS(e), n.loadedCSS[e] = !0)
                }), o.auto_focus && setTimeout(function () {
                    var e = n.editorManager.get(o.auto_focus);
                    e.selection.select(e.getBody(), 1), e.selection.collapse(1), e.getBody().focus(), e.getWin().focus()
                }, 100), f = p = h = null
            }, focus: function (e) {
                var t, n = this, r = n.selection, i = n.settings.content_editable, o, a, s = n.getDoc(), l;
                if (!e) {
                    if (o = r.getRng(), o.item && (a = o.item(0)), n._refreshContentEditable(), i || (b.opera || n.getBody().focus(), n.getWin().focus()), M || i) {
                        if (l = n.getBody(), l.setActive)try {
                            l.setActive()
                        } catch (c) {
                            l.focus()
                        } else l.focus();
                        i && r.normalize()
                    }
                    a && a.ownerDocument == s && (o = s.body.createControlRange(), o.addElement(a), o.select())
                }
                n.editorManager.activeEditor != n && ((t = n.editorManager.activeEditor) && t.fire("deactivate", {relatedTarget: n}), n.fire("activate", {relatedTarget: t})), n.editorManager.activeEditor = n
            }, execCallback: function (e) {
                var t = this, n = t.settings[e], r;
                if (n)return t.callbackLookup && (r = t.callbackLookup[e]) && (n = r.func, r = r.scope), "string" == typeof n && (r = n.replace(/\.\w+$/, ""), r = r ? D(r) : 0, n = D(n), t.callbackLookup = t.callbackLookup || {}, t.callbackLookup[e] = {
                    func: n,
                    scope: r
                }), n.apply(r || t, Array.prototype.slice.call(arguments, 1))
            }, translate: function (e) {
                var t = this.settings.language || "en", n = this.editorManager.i18n;
                return e ? n.data[t + "." + e] || e.replace(/\{\#([^\}]+)\}/g, function (e, r) {
                    return n.data[t + "." + r] || "{#" + r + "}"
                }) : ""
            }, getLang: function (e, n) {
                return this.editorManager.i18n.data[(this.settings.language || "en") + "." + e] || (n !== t ? n : "{#" + e + "}")
            }, getParam: function (e, t, n) {
                var r = e in this.settings ? this.settings[e] : t, i;
                return "hash" === n ? (i = {}, "string" == typeof r ? T(r.split(r.indexOf("=") > 0 ? /[;,](?![^=;,]*(?:[;,]|$))/ : ","), function (e) {
                    e = e.split("="), i[B(e[0])] = B(e.length > 1 ? e[1] : e)
                }) : i = r, i) : r
            }, nodeChanged: function () {
                var e = this, t = e.selection, n, r, i;
                !e.initialized || e.settings.disable_nodechange || e.settings.readonly || (i = e.getBody(), n = t.getStart() || i, n = H && n.ownerDocument != e.getDoc() ? e.getBody() : n, "IMG" == n.nodeName && t.isCollapsed() && (n = n.parentNode), r = [], e.dom.getParent(n, function (e) {
                    return e === i ? !0 : void r.push(e)
                }), e.fire("NodeChange", {element: n, parents: r}))
            }, addButton: function (e, t) {
                var n = this;
                t.cmd && (t.onclick = function () {
                    n.execCommand(t.cmd)
                }), t.text || t.icon || (t.icon = e), n.buttons = n.buttons || {}, t.tooltip = t.tooltip || t.title, n.buttons[e] = t
            }, addMenuItem: function (e, t) {
                var n = this;
                t.cmd && (t.onclick = function () {
                    n.execCommand(t.cmd)
                }), n.menuItems = n.menuItems || {}, n.menuItems[e] = t
            }, addCommand: function (e, t, n) {
                this.execCommands[e] = {func: t, scope: n || this}
            }, addQueryStateHandler: function (e, t, n) {
                this.queryStateCommands[e] = {func: t, scope: n || this}
            }, addQueryValueHandler: function (e, t, n) {
                this.queryValueCommands[e] = {func: t, scope: n || this}
            }, addShortcut: function (e, t, n, r) {
                this.shortcuts.add(e, t, n, r)
            }, execCommand: function (e, t, n, r) {
                var i = this, o = 0, a;
                return /^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e) || r && r.skip_focus || i.focus(), r = k({}, r), r = i.fire("BeforeExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), r.isDefaultPrevented() ? !1 : (a = i.execCommands[e]) && a.func.call(a.scope, t, n) !== !0 ? (i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0) : (T(i.plugins, function (r) {
                    return r.execCommand && r.execCommand(e, t, n) ? (i.fire("ExecCommand", {
                        command: e,
                        ui: t,
                        value: n
                    }), o = !0, !1) : void 0
                }), o ? o : i.theme && i.theme.execCommand && i.theme.execCommand(e, t, n) ? (i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0) : i.editorCommands.execCommand(e, t, n) ? (i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0) : (i.getDoc().execCommand(e, t, n), void i.fire("ExecCommand", {command: e, ui: t, value: n})))
            }, queryCommandState: function (e) {
                var t = this, n, r;
                if (!t._isHidden()) {
                    if ((n = t.queryStateCommands[e]) && (r = n.func.call(n.scope), r !== !0))return r;
                    if (r = t.editorCommands.queryCommandState(e), -1 !== r)return r;
                    try {
                        return t.getDoc().queryCommandState(e)
                    } catch (i) {
                    }
                }
            }, queryCommandValue: function (e) {
                var n = this, r, i;
                if (!n._isHidden()) {
                    if ((r = n.queryValueCommands[e]) && (i = r.func.call(r.scope), i !== !0))return i;
                    if (i = n.editorCommands.queryCommandValue(e), i !== t)return i;
                    try {
                        return n.getDoc().queryCommandValue(e)
                    } catch (o) {
                    }
                }
            }, show: function () {
                var e = this;
                e.hidden && (e.hidden = !1, e.inline ? e.getBody().contentEditable = !0 : (N.show(e.getContainer()), N.hide(e.id)), e.load(), e.fire("show"))
            }, hide: function () {
                var e = this, t = e.getDoc();
                e.hidden || (e.hidden = !0, H && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = !1, e == e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (N.hide(e.getContainer()), N.setStyle(e.id, "display", e.orgDisplay)), e.fire("hide"))
            }, isHidden: function () {
                return !!this.hidden
            }, setProgressState: function (e, t) {
                this.fire("ProgressState", {state: e, time: t})
            }, load: function (e) {
                var n = this, r = n.getElement(), i;
                return r ? (e = e || {}, e.load = !0, i = n.setContent(r.value !== t ? r.value : r.innerHTML, e), e.element = r, e.no_events || n.fire("LoadContent", e), e.element = r = null, i) : void 0
            }, save: function (e) {
                var t = this, n = t.getElement(), r, i;
                if (n && t.initialized)return e = e || {}, e.save = !0, e.element = n, r = e.content = t.getContent(e), e.no_events || t.fire("SaveContent", e), r = e.content, /TEXTAREA|INPUT/i.test(n.nodeName) ? n.value = r : (t.inline || (n.innerHTML = r), (i = N.getParent(t.id, "form")) && T(i.elements, function (e) {
                    return e.name == t.id ? (e.value = r, !1) : void 0
                })), e.element = n = null, e.set_dirty !== !1 && (t.isNotDirty = !0), r
            }, setContent: function (e, t) {
                var n = this, r = n.getBody(), i;
                return t = t || {}, t.format = t.format || "html", t.set = !0, t.content = e, t.no_events || n.fire("BeforeSetContent", t), e = t.content, 0 === e.length || /^\s+$/.test(e) ? (i = n.settings.forced_root_block, i && n.schema.isValidChild(r.nodeName.toLowerCase(), i.toLowerCase()) ? (e = H && 11 > H ? "" : '<br data-mce-bogus="1">', e = n.dom.createHTML(i, n.settings.forced_root_block_attrs, e)) : H || (e = '<br data-mce-bogus="1">'), r.innerHTML = e, n.fire("SetContent", t)) : ("raw" !== t.format && (e = new o({}, n.schema).serialize(n.parser.parse(e, {isRootContent: !0}))), t.content = B(e), n.dom.setHTML(r, t.content), t.no_events || n.fire("SetContent", t)), t.content
            }, getContent: function (e) {
                var t = this, n, r = t.getBody();
                return e = e || {}, e.format = e.format || "html", e.get = !0, e.getInner = !0, e.no_events || t.fire("BeforeGetContent", e), n = "raw" == e.format ? r.innerHTML : "text" == e.format ? r.innerText || r.textContent : t.serializer.serialize(r, e), e.content = "text" != e.format ? B(n) : n, e.no_events || t.fire("GetContent", e), e.content
            }, insertContent: function (e) {
                this.execCommand("mceInsertContent", !1, e)
            }, isDirty: function () {
                return !this.isNotDirty
            }, getContainer: function () {
                var e = this;
                return e.container || (e.container = N.get(e.editorContainer || e.id + "_parent")), e.container
            }, getContentAreaContainer: function () {
                return this.contentAreaContainer
            }, getElement: function () {
                return N.get(this.settings.content_element || this.id)
            }, getWin: function () {
                var e = this, t;
                return e.contentWindow || (t = N.get(e.id + "_ifr"), t && (e.contentWindow = t.contentWindow)), e.contentWindow
            }, getDoc: function () {
                var e = this, t;
                return e.contentDocument || (t = e.getWin(), t && (e.contentDocument = t.document)), e.contentDocument
            }, getBody: function () {
                return this.bodyElement || this.getDoc().body
            }, convertURL: function (e, t, n) {
                var r = this, i = r.settings;
                return i.urlconverter_callback ? r.execCallback("urlconverter_callback", e, n, !0, t) : !i.convert_urls || n && "LINK" == n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : i.relative_urls ? r.documentBaseURI.toRelative(e) : e = r.documentBaseURI.toAbsolute(e, i.remove_script_host)
            }, addVisual: function (e) {
                var n = this, r = n.settings, i = n.dom, o;
                e = e || n.getBody(), n.hasVisual === t && (n.hasVisual = r.visual), T(i.select("table,a", e), function (e) {
                    var t;
                    switch (e.nodeName) {
                        case"TABLE":
                            return o = r.visual_table_class || "mce-item-table", t = i.getAttrib(e, "border"), void(t && "0" != t || (n.hasVisual ? i.addClass(e, o) : i.removeClass(e, o)));
                        case"A":
                            return void(i.getAttrib(e, "href", !1) || (t = i.getAttrib(e, "name") || e.id, o = r.visual_anchor_class || "mce-item-anchor", t && (n.hasVisual ? i.addClass(e, o) : i.removeClass(e, o))))
                    }
                }), n.fire("VisualAid", {element: e, hasVisual: n.hasVisual})
            }, remove: function () {
                var e = this;
                if (!e.removed) {
                    e.removed = 1, e.save(), e.hasHiddenInput && N.remove(e.getElement().nextSibling), e.inline || (H && 10 > H && e.getDoc().execCommand("SelectAll", !1, null), N.setStyle(e.id, "display", e.orgDisplay), e.getBody().onload = null, L.unbind(e.getWin()), L.unbind(e.getDoc()));
                    var t = e.getContainer();
                    L.unbind(e.getBody()), L.unbind(t), e.fire("remove"), e.editorManager.remove(e), N.remove(t), e.destroy()
                }
            }, destroy: function (e) {
                var t = this, n;
                if (!t.destroyed) {
                    if (!e && !t.removed)return void t.remove();
                    e && M && (L.unbind(t.getDoc()), L.unbind(t.getWin()), L.unbind(t.getBody())), e || (t.editorManager.off("beforeunload", t._beforeUnload), t.theme && t.theme.destroy && t.theme.destroy(), t.selection.destroy(), t.dom.destroy()), n = t.formElement, n && (n._mceOldSubmit && (n.submit = n._mceOldSubmit, n._mceOldSubmit = null), N.unbind(n, "submit reset", t.formEventDelegate)), t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null, t.settings.content_element = t.bodyElement = t.contentDocument = t.contentWindow = null, t.selection && (t.selection = t.selection.win = t.selection.dom = t.selection.dom.doc = null), t.destroyed = 1
                }
            }, _refreshContentEditable: function () {
                var e = this, t, n;
                e._isHidden() && (t = e.getBody(), n = t.parentNode, n.removeChild(t), n.appendChild(t), t.focus())
            }, _isHidden: function () {
                var e;
                return M ? (e = this.selection.getSel(), !e || !e.rangeCount || 0 === e.rangeCount) : 0
            }
        }, k(_.prototype, x), _
    }), r(ct, [], function () {
        var e = {};
        return {
            rtl: !1, add: function (t, n) {
                for (var r in n)e[r] = n[r];
                this.rtl = this.rtl || "rtl" === e._dir
            }, translate: function (t) {
                if ("undefined" == typeof t)return t;
                if ("string" != typeof t && t.raw)return t.raw;
                if (t.push) {
                    var n = t.slice(1);
                    t = (e[t[0]] || t[0]).replace(/\{([^\}]+)\}/g, function (e, t) {
                        return n[t]
                    })
                }
                return e[t] || t
            }, data: e
        }
    }), r(ut, [y, g], function (e, t) {
        function n(e) {
            function s() {
                try {
                    return document.activeElement
                } catch (e) {
                    return document.body
                }
            }

            function l(e, t) {
                if (t && t.startContainer) {
                    if (!e.isChildOf(t.startContainer, e.getRoot()) || !e.isChildOf(t.endContainer, e.getRoot()))return;
                    return {
                        startContainer: t.startContainer,
                        startOffset: t.startOffset,
                        endContainer: t.endContainer,
                        endOffset: t.endOffset
                    }
                }
                return t
            }

            function c(e, t) {
                var n;
                return t.startContainer ? (n = e.getDoc().createRange(), n.setStart(t.startContainer, t.startOffset), n.setEnd(t.endContainer, t.endOffset)) : n = t, n
            }

            function u(e) {
                return !!a.getParent(e, n.isEditorUIElement)
            }

            function d(n) {
                var d = n.editor;
                d.on("init", function () {
                    (d.inline || t.ie) && (d.on("nodechange keyup", function () {
                        var e = document.activeElement;
                        e && e.id == d.id + "_ifr" && (e = d.getBody()), d.dom.isChildOf(e, d.getBody()) && (d.lastRng = d.selection.getRng())
                    }), t.webkit && !r && (r = function () {
                        var t = e.activeEditor;
                        if (t && t.selection) {
                            var n = t.selection.getRng();
                            n && !n.collapsed && (d.lastRng = n)
                        }
                    }, a.bind(document, "selectionchange", r)))
                }), d.on("setcontent", function () {
                    d.lastRng = null
                }), d.on("mousedown", function () {
                    d.selection.lastFocusBookmark = null
                }), d.on("focusin", function () {
                    var t = e.focusedEditor;
                    d.selection.lastFocusBookmark && (d.selection.setRng(c(d, d.selection.lastFocusBookmark)), d.selection.lastFocusBookmark = null), t != d && (t && t.fire("blur", {focusedEditor: d}), e.activeEditor = d, e.focusedEditor = d, d.fire("focus", {blurredEditor: t}), d.focus(!0)), d.lastRng = null
                }), d.on("focusout", function () {
                    window.setTimeout(function () {
                        var t = e.focusedEditor;
                        u(s()) || t != d || (d.fire("blur", {focusedEditor: null}), e.focusedEditor = null, d.selection && (d.selection.lastFocusBookmark = null))
                    }, 0)
                }), i || (i = function (t) {
                    var n = e.activeEditor;
                    n && t.target.ownerDocument == document && (n.selection && (n.selection.lastFocusBookmark = l(n.dom, n.lastRng)), u(t.target) || e.focusedEditor != n || (n.fire("blur", {focusedEditor: null}), e.focusedEditor = null))
                }, a.bind(document, "focusin", i)), d.inline && !o && (o = function (t) {
                    var n = e.activeEditor;
                    if (n.inline && !n.dom.isChildOf(t.target, n.getBody())) {
                        var r = n.selection.getRng();
                        r.collapsed || (n.lastRng = r)
                    }
                }, a.bind(document, "mouseup", o))
            }

            function f(t) {
                e.focusedEditor == t.editor && (e.focusedEditor = null), e.activeEditor || (a.unbind(document, "selectionchange", r), a.unbind(document, "focusin", i), a.unbind(document, "mouseup", o), r = i = o = null)
            }

            e.on("AddEditor", d), e.on("RemoveEditor", f)
        }

        var r, i, o, a = e.DOM;
        return n.isEditorUIElement = function (e) {
            return -1 !== e.className.toString().indexOf("mce-")
        }, n
    }), r(dt, [lt, y, F, g, p, ot, ct, ut], function (e, t, n, r, i, o, a, s) {
        function l(e) {
            var t = g.editors, n;
            delete t[e.id];
            for (var r = 0; r < t.length; r++)if (t[r] == e) {
                t.splice(r, 1), n = !0;
                break
            }
            return g.activeEditor == e && (g.activeEditor = t[0]), g.focusedEditor == e && (g.focusedEditor = null), n
        }

        function c(e) {
            return e && !(e.getContainer() || e.getBody()).parentNode && (l(e), e.destroy(!0), e = null), e
        }

        var u = t.DOM, d = i.explode, f = i.each, p = i.extend, h = 0, m, g;
        return g = {
            majorVersion: "4",
            minorVersion: "0.26",
            releaseDate: "2014-05-06",
            editors: [],
            i18n: a,
            activeEditor: null,
            setup: function () {
                var e = this, t, r, i = "", o, a;
                if (r = document.location.href.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(r) || (r += "/"), o = window.tinymce || window.tinyMCEPreInit)t = o.base || o.baseURL, i = o.suffix; else {
                    for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++)if (a = l[c].src, /tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)) {
                        -1 != a.indexOf(".min") && (i = ".min"), t = a.substring(0, a.lastIndexOf("/"));
                        break
                    }
                    !t && document.currentScript && (a = document.currentScript.src, -1 != a.indexOf(".min") && (i = ".min"), t = a.substring(0, a.lastIndexOf("/")))
                }
                e.baseURL = new n(r).toAbsolute(t), e.documentBaseURL = r, e.baseURI = new n(e.baseURL), e.suffix = i, e.focusManager = new s(e)
            },
            init: function (t) {
                function n(e) {
                    var t = e.id;
                    return t || (t = e.name, t = t && !u.get(t) ? e.name : u.uniqueId(), e.setAttribute("id", t)), t
                }

                function r(t, n) {
                    if (!c(s.get(t))) {
                        var r = new e(t, n, s);
                        l.push(r), r.render()
                    }
                }

                function i(e, t, n) {
                    var r = e[t];
                    if (r)return r.apply(n || this, Array.prototype.slice.call(arguments, 2))
                }

                function o(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : u.hasClass(e, t)
                }

                function a() {
                    var c, g;
                    if (u.unbind(window, "ready", a), i(t, "onpageload"), t.types)return void f(t.types, function (e) {
                        f(u.select(e.selector), function (i) {
                            r(n(i), p({}, t, e))
                        })
                    });
                    if (t.selector)return void f(u.select(t.selector), function (e) {
                        r(n(e), t)
                    });
                    switch (t.mode) {
                        case"exact":
                            c = t.elements || "", c.length > 0 && f(d(c), function (n) {
                                u.get(n) ? (m = new e(n, t, s), l.push(m), m.render()) : f(document.forms, function (e) {
                                    f(e.elements, function (e) {
                                        e.name === n && (n = "mce_editor_" + h++, u.setAttrib(e, "id", n), r(n, t))
                                    })
                                })
                            });
                            break;
                        case"textareas":
                        case"specific_textareas":
                            f(u.select("textarea"), function (e) {
                                t.editor_deselector && o(e, t.editor_deselector) || (!t.editor_selector || o(e, t.editor_selector)) && r(n(e), t)
                            })
                    }
                    t.oninit && (c = g = 0, f(l, function (e) {
                        g++, e.initialized ? c++ : e.on("init", function () {
                            c++, c == g && i(t, "oninit")
                        }), c == g && i(t, "oninit")
                    }))
                }

                var s = this, l = [], m;
                s.settings = t, u.bind(window, "ready", a)
            },
            get: function (e) {
                return arguments.length ? e in this.editors ? this.editors[e] : null : this.editors
            },
            add: function (e) {
                var t = this, n = t.editors;
                return n[e.id] = e, n.push(e), t.activeEditor = e, t.fire("AddEditor", {editor: e}), m || (m = function () {
                    t.fire("BeforeUnload")
                }, u.bind(window, "beforeunload", m)), e
            },
            createEditor: function (t, n) {
                return this.add(new e(t, n, this))
            },
            remove: function (e) {
                var t = this, n, r = t.editors, i;
                {
                    if (e)return "string" == typeof e ? (e = e.selector || e, void f(u.select(e), function (e) {
                        t.remove(r[e.id])
                    })) : (i = e, r[i.id] ? (l(i) && t.fire("RemoveEditor", {editor: i}), r.length || u.unbind(window, "beforeunload", m), i.remove(), i) : null);
                    for (n = r.length - 1; n >= 0; n--)t.remove(r[n])
                }
            },
            execCommand: function (t, n, r) {
                var i = this, o = i.get(r);
                switch (t) {
                    case"mceAddEditor":
                        return i.get(r) || new e(r, i.settings, i).render(), !0;
                    case"mceRemoveEditor":
                        return o && o.remove(), !0;
                    case"mceToggleEditor":
                        return o ? (o.isHidden() ? o.show() : o.hide(), !0) : (i.execCommand("mceAddEditor", 0, r), !0)
                }
                return i.activeEditor ? i.activeEditor.execCommand(t, n, r) : !1
            },
            triggerSave: function () {
                f(this.editors, function (e) {
                    e.save()
                })
            },
            addI18n: function (e, t) {
                a.add(e, t)
            },
            translate: function (e) {
                return a.translate(e)
            }
        }, p(g, o), g.setup(), window.tinymce = window.tinyMCE = g, g
    }), r(ft, [dt, p], function (e, t) {
        var n = t.each, r = t.explode;
        e.on("AddEditor", function (e) {
            var t = e.editor;
            t.on("preInit", function () {
                function e(e, t) {
                    n(t, function (t, n) {
                        t && s.setStyle(e, n, t)
                    }), s.rename(e, "span")
                }

                function i(e) {
                    s = t.dom, l.convert_fonts_to_spans && n(s.select("font,u,strike", e.node), function (e) {
                        o[e.nodeName.toLowerCase()](s, e)
                    })
                }

                var o, a, s, l = t.settings;
                l.inline_styles && (a = r(l.font_size_legacy_values), o = {
                    font: function (t, n) {
                        e(n, {
                            backgroundColor: n.style.backgroundColor,
                            color: n.color,
                            fontFamily: n.face,
                            fontSize: a[parseInt(n.size, 10) - 1]
                        })
                    }, u: function (t, n) {
                        e(n, {textDecoration: "underline"})
                    }, strike: function (t, n) {
                        e(n, {textDecoration: "line-through"})
                    }
                }, t.on("PreProcess SetContent", i))
            })
        })
    }), r(pt, [], function () {
        return {
            send: function (e) {
                function t() {
                    !e.async || 4 == n.readyState || r++ > 1e4 ? (e.success && 1e4 > r && 200 == n.status ? e.success.call(e.success_scope, "" + n.responseText, n, e) : e.error && e.error.call(e.error_scope, r > 1e4 ? "TIMED_OUT" : "GENERAL", n, e), n = null) : setTimeout(t, 10)
                }

                var n, r = 0;
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = e.async === !1 ? !1 : !0, e.data = e.data || "", n = new XMLHttpRequest) {
                    if (n.overrideMimeType && n.overrideMimeType(e.content_type), n.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.content_type && n.setRequestHeader("Content-Type", e.content_type), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(e.data), !e.async)return t();
                    setTimeout(t, 10)
                }
            }
        }
    }), r(ht, [], function () {
        function e(t, n) {
            var r, i, o, a;
            if (n = n || '"', null === t)return "null";
            if (o = typeof t, "string" == o)return i = "\bb	t\nn\ff\rr\"\"''\\\\", n + t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function (e, t) {
                return '"' === n && "'" === e ? e : (r = i.indexOf(t), r + 1 ? "\\" + i.charAt(r + 1) : (e = t.charCodeAt().toString(16), "\\u" + "0000".substring(e.length) + e))
            }) + n;
            if ("object" == o) {
                if (t.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(t)) {
                    for (r = 0, i = "["; r < t.length; r++)i += (r > 0 ? "," : "") + e(t[r], n);
                    return i + "]"
                }
                i = "{";
                for (a in t)t.hasOwnProperty(a) && (i += "function" != typeof t[a] ? (i.length > 1 ? "," + n : n) + a + n + ":" + e(t[a], n) : "");
                return i + "}"
            }
            return "" + t
        }

        return {
            serialize: e, parse: function (e) {
                try {
                    return window[String.fromCharCode(101) + "val"]("(" + e + ")")
                } catch (t) {
                }
            }
        }
    }), r(mt, [ht, pt, p], function (e, t, n) {
        function r(e) {
            this.settings = i({}, e), this.count = 0
        }

        var i = n.extend;
        return r.sendRPC = function (e) {
            return (new r).send(e)
        }, r.prototype = {
            send: function (n) {
                var r = n.error, o = n.success;
                n = i(this.settings, n), n.success = function (t, i) {
                    t = e.parse(t), "undefined" == typeof t && (t = {error: "JSON Parse error."}), t.error ? r.call(n.error_scope || n.scope, t.error, i) : o.call(n.success_scope || n.scope, t.result)
                }, n.error = function (e, t) {
                    r && r.call(n.error_scope || n.scope, e, t)
                }, n.data = e.serialize({
                    id: n.id || "c" + this.count++,
                    method: n.method,
                    params: n.params
                }), n.content_type = "application/json", t.send(n)
            }
        }, r
    }), r(gt, [y], function (e) {
        return {
            callbacks: {}, count: 0, send: function (n) {
                var r = this, i = e.DOM, o = n.count !== t ? n.count : r.count, a = "tinymce_jsonp_" + o;
                r.callbacks[o] = function (e) {
                    i.remove(a), delete r.callbacks[o], n.callback(e)
                }, i.add(i.doc.body, "script", {id: a, src: n.url, type: "text/javascript"}), r.count++
            }
        }
    }), r(vt, [], function () {
        function e() {
            s = [];
            for (var e in a)s.push(e);
            i.length = s.length
        }

        function n() {
            function n(e) {
                var n, r;
                return r = e !== t ? u + e : i.indexOf(",", u), -1 === r || r > i.length ? null : (n = i.substring(u, r), u = r + 1, n)
            }

            var r, i, s, u = 0;
            if (a = {}, c) {
                o.load(l), i = o.getAttribute(l) || "";
                do {
                    var d = n();
                    if (null === d)break;
                    if (r = n(parseInt(d, 32) || 0), null !== r) {
                        if (d = n(), null === d)break;
                        s = n(parseInt(d, 32) || 0), r && (a[r] = s)
                    }
                } while (null !== r);
                e()
            }
        }

        function r() {
            var t, n = "";
            if (c) {
                for (var r in a)t = a[r], n += (n ? "," : "") + r.length.toString(32) + "," + r + "," + t.length.toString(32) + "," + t;
                o.setAttribute(l, n);
                try {
                    o.save(l)
                } catch (i) {
                }
                e()
            }
        }

        var i, o, a, s, l, c;
        try {
            if (window.localStorage)return localStorage
        } catch (u) {
        }
        return l = "tinymce", o = document.documentElement, c = !!o.addBehavior, c && o.addBehavior("#default#userData"), i = {
            key: function (e) {
                return s[e]
            }, getItem: function (e) {
                return e in a ? a[e] : null
            }, setItem: function (e, t) {
                a[e] = "" + t, r()
            }, removeItem: function (e) {
                delete a[e], r()
            }, clear: function () {
                a = {}, r()
            }
        }, n(), i
    }), r(yt, [y, l, b, C, p, g], function (e, t, n, r, i, o) {
        var a = window.tinymce;
        return a.DOM = e.DOM, a.ScriptLoader = n.ScriptLoader, a.PluginManager = r.PluginManager, a.ThemeManager = r.ThemeManager, a.dom = a.dom || {}, a.dom.Event = t.Event, i.each(i, function (e, t) {
            a[t] = e
        }), i.each("isOpera isWebKit isIE isGecko isMac".split(" "), function (e) {
            a[e] = o[e.substr(2).toLowerCase()]
        }), {}
    }), r(bt, [z, p], function (e, t) {
        return e.extend({
            Defaults: {firstControlClass: "first", lastControlClass: "last"}, init: function (e) {
                this.settings = t.extend({}, this.Defaults, e)
            }, preRender: function (e) {
                e.addClass(this.settings.containerClass, "body")
            }, applyClasses: function (e) {
                var t = this, n = t.settings, r, i, o;
                r = e.items().filter(":visible"), i = n.firstControlClass, o = n.lastControlClass, r.each(function (e) {
                    e.removeClass(i).removeClass(o), n.controlClass && e.addClass(n.controlClass)
                }), r.eq(0).addClass(i), r.eq(-1).addClass(o)
            }, renderHtml: function (e) {
                var t = this, n = t.settings, r, i = "";
                return r = e.items(), r.eq(0).addClass(n.firstControlClass), r.eq(-1).addClass(n.lastControlClass), r.each(function (e) {
                    n.controlClass && e.addClass(n.controlClass), i += e.renderHtml()
                }), i
            }, recalc: function () {
            }, postRender: function () {
            }
        })
    }), r(Ct, [bt], function (e) {
        return e.extend({
            Defaults: {containerClass: "abs-layout", controlClass: "abs-layout-item"},
            recalc: function (e) {
                e.items().filter(":visible").each(function (e) {
                    var t = e.settings;
                    e.layoutRect({x: t.x, y: t.y, w: t.w, h: t.h}), e.recalc && e.recalc()
                })
            },
            renderHtml: function (e) {
                return '<div id="' + e._id + '-absend" class="' + e.classPrefix + 'abs-end"></div>' + this._super(e)
            }
        })
    }), r(xt, [$, Q], function (e, t) {
        return e.extend({
            Mixins: [t], Defaults: {classes: "widget tooltip tooltip-n"}, text: function (e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t._rendered && (t.getEl().lastChild.innerHTML = t.encode(e)), t) : t._value
            }, renderHtml: function () {
                var e = this, t = e.classPrefix;
                return '<div id="' + e._id + '" class="' + e.classes() + '" role="presentation"><div class="' + t + 'tooltip-arrow"></div><div class="' + t + 'tooltip-inner">' + e.encode(e._text) + "</div></div>"
            }, repaint: function () {
                var e = this, t, n;
                t = e.getEl().style, n = e._layoutRect, t.left = n.x + "px", t.top = n.y + "px", t.zIndex = 131070
            }
        })
    }), r(wt, [$, xt], function (e, t) {
        var n, r = e.extend({
            init: function (e) {
                var t = this;
                t._super(e), e = t.settings, t.canFocus = !0, e.tooltip && r.tooltips !== !1 && (t.on("mouseenter", function (n) {
                    var r = t.tooltip().moveTo(-65535);
                    if (n.control == t) {
                        var i = r.text(e.tooltip).show().testMoveRel(t.getEl(), ["bc-tc", "bc-tl", "bc-tr"]);
                        r.toggleClass("tooltip-n", "bc-tc" == i), r.toggleClass("tooltip-nw", "bc-tl" == i), r.toggleClass("tooltip-ne", "bc-tr" == i), r.moveRel(t.getEl(), i)
                    } else r.hide()
                }), t.on("mouseleave mousedown click", function () {
                    t.tooltip().hide()
                })), t.aria("label", e.ariaLabel || e.tooltip)
            }, tooltip: function () {
                return n || (n = new t({type: "tooltip"}), n.renderTo()), n
            }, active: function (e) {
                var t = this, n;
                return e !== n && (t.aria("pressed", e), t.toggleClass("active", e)), t._super(e)
            }, disabled: function (e) {
                var t = this, n;
                return e !== n && (t.aria("disabled", e), t.toggleClass("disabled", e)), t._super(e)
            }, postRender: function () {
                var e = this, t = e.settings;
                e._rendered = !0, e._super(), e.parent() || !t.width && !t.height || (e.initLayoutRect(), e.repaint()), t.autofocus && e.focus()
            }, remove: function () {
                this._super(), n && (n.remove(), n = null)
            }
        });
        return r
    }), r(_t, [wt], function (e) {
        return e.extend({
            Defaults: {classes: "widget btn", role: "button"}, init: function (e) {
                var t = this, n;
                t.on("click mousedown", function (e) {
                    e.preventDefault()
                }), t._super(e), n = e.size, e.subtype && t.addClass(e.subtype), n && t.addClass("btn-" + n)
            }, icon: function (e) {
                var t = this, n = t.classPrefix;
                if ("undefined" == typeof e)return t.settings.icon;
                if (t.settings.icon = e, e = e ? n + "ico " + n + "i-" + t.settings.icon : "", t._rendered) {
                    var r = t.getEl().firstChild, i = r.getElementsByTagName("i")[0];
                    e ? (i && i == r.firstChild || (i = document.createElement("i"), r.insertBefore(i, r.firstChild)), i.className = e) : i && r.removeChild(i), t.text(t._text)
                }
                return t
            }, repaint: function () {
                var e = this.getEl().firstChild.style;
                e.width = e.height = "100%", this._super()
            }, text: function (e) {
                var t = this;
                if (t._rendered) {
                    var n = t.getEl().lastChild.lastChild;
                    n && (n.data = t.translate(e))
                }
                return t._super(e)
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.classPrefix, r = e.settings.icon, i;
                return i = e.settings.image, i ? (r = "none", "string" != typeof i && (i = window.getSelection ? i[0] : i[1]), i = " style=\"background-image: url('" + i + "')\"") : i = "", r = e.settings.icon ? n + "ico " + n + "i-" + r : "", '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1" aria-labelledby="' + t + '"><button role="presentation" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + (e._text ? (r ? "\xa0" : "") + e.encode(e._text) : "") + "</button></div>"
            }
        })
    }), r(Nt, [G], function (e) {
        return e.extend({
            Defaults: {defaultType: "button", role: "group"}, renderHtml: function () {
                var e = this, t = e._layout;
                return e.addClass("btn-group"), e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '"><div id="' + e._id + '-body">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }
        })
    }), r(Et, [wt], function (e) {
        return e.extend({
            Defaults: {classes: "checkbox", role: "checkbox", checked: !1}, init: function (e) {
                var t = this;
                t._super(e), t.on("click mousedown", function (e) {
                    e.preventDefault()
                }), t.on("click", function (e) {
                    e.preventDefault(), t.disabled() || t.checked(!t.checked())
                }), t.checked(t.settings.checked)
            }, checked: function (e) {
                var t = this;
                return "undefined" != typeof e ? (e ? t.addClass("checked") : t.removeClass("checked"), t._checked = e, t.aria("checked", e), t) : t._checked
            }, value: function (e) {
                return this.checked(e)
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.classPrefix;
                return '<div id="' + t + '" class="' + e.classes() + '" unselectable="on" aria-labelledby="' + t + '-al" tabindex="-1"><i class="' + n + "ico " + n + 'i-checkbox"></i><span id="' + t + '-al" class="' + n + 'label">' + e.encode(e._text) + "</span></div>"
            }
        })
    }), r(St, [_t, et], function (e, t) {
        return e.extend({
            showPanel: function () {
                var e = this, n = e.settings;
                if (e.active(!0), e.panel)e.panel.show(); else {
                    var r = n.panel;
                    r.type && (r = {
                        layout: "grid",
                        items: r
                    }), r.role = r.role || "dialog", r.popover = !0, r.autohide = !0, r.ariaRoot = !0, e.panel = new t(r).on("hide", function () {
                        e.active(!1)
                    }).on("cancel", function (t) {
                        t.stopPropagation(), e.focus(), e.hidePanel()
                    }).parent(e).renderTo(e.getContainerElm()), e.panel.fire("show"), e.panel.reflow()
                }
                e.panel.moveRel(e.getEl(), n.popoverAlign || (e.isRtl() ? ["bc-tr", "bc-tc"] : ["bc-tl", "bc-tc"]))
            }, hidePanel: function () {
                var e = this;
                e.panel && e.panel.hide()
            }, postRender: function () {
                var e = this;
                return e.aria("haspopup", !0), e.on("click", function (t) {
                    t.control === e && (e.panel && e.panel.visible() ? e.hidePanel() : (e.showPanel(), e.panel.focus(!!t.aria)))
                }), e._super()
            }
        })
    }), r(kt, [St, y], function (e, t) {
        var n = t.DOM;
        return e.extend({
            init: function (e) {
                this._super(e), this.addClass("colorbutton")
            }, color: function (e) {
                return e ? (this._color = e, this.getEl("preview").style.backgroundColor = e, this) : this._color
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.classPrefix, r = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "", i = e.settings.image ? " style=\"background-image: url('" + e.settings.image + "')\"" : "";
                return '<div id="' + t + '" class="' + e.classes() + '" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + '<span id="' + t + '-preview" class="' + n + 'preview"></span>' + (e._text ? (r ? " " : "") + e._text : "") + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1"> <i class="' + n + 'caret"></i></button></div>'
            }, postRender: function () {
                var e = this, t = e.settings.onclick;
                return e.on("click", function (r) {
                    r.aria && "down" == r.aria.key || r.control != e || n.getParent(r.target, "." + e.classPrefix + "open") || (r.stopImmediatePropagation(), t.call(e, r))
                }), delete e.settings.onclick, e._super()
            }
        })
    }), r(Tt, [wt, j, q], function (e, t, n) {
        return e.extend({
            init: function (e) {
                var t = this;
                t._super(e), t.addClass("combobox"), t.subinput = !0, t.ariaTarget = "inp", e = t.settings, e.menu = e.menu || e.values, e.menu && (e.icon = "caret"), t.on("click", function (n) {
                    for (var r = n.target, i = t.getEl(); r && r != i;)r.id && -1 != r.id.indexOf("-open") && (t.fire("action"), e.menu && (t.showMenu(), n.aria && t.menu.items()[0].focus())), r = r.parentNode
                }), t.on("keydown", function (e) {
                    "INPUT" == e.target.nodeName && 13 == e.keyCode && t.parents().reverse().each(function (n) {
                        return e.preventDefault(), t.fire("change"), n.hasEventListeners("submit") && n.toJSON ? (n.fire("submit", {data: n.toJSON()}), !1) : void 0
                    })
                }), e.placeholder && (t.addClass("placeholder"), t.on("focusin", function () {
                    t._hasOnChange || (n.on(t.getEl("inp"), "change", function () {
                        t.fire("change")
                    }), t._hasOnChange = !0), t.hasClass("placeholder") && (t.getEl("inp").value = "", t.removeClass("placeholder"))
                }), t.on("focusout", function () {
                    0 === t.value().length && (t.getEl("inp").value = e.placeholder, t.addClass("placeholder"))
                }))
            }, showMenu: function () {
                var e = this, n = e.settings, r;
                e.menu || (r = n.menu || [], r.length ? r = {
                    type: "menu",
                    items: r
                } : r.type = r.type || "menu", e.menu = t.create(r).parent(e).renderTo(e.getContainerElm()), e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function (t) {
                    t.control === e.menu && e.focus()
                }), e.menu.on("show hide", function (t) {
                    t.control.items().each(function (t) {
                        t.active(t.value() == e.value())
                    })
                }).fire("show"), e.menu.on("select", function (t) {
                    e.value(t.control.value())
                }), e.on("focusin", function (t) {
                    "INPUT" == t.target.tagName.toUpperCase() && e.menu.hide()
                }), e.aria("expanded", !0)), e.menu.show(), e.menu.layoutRect({w: e.layoutRect().w}), e.menu.moveRel(e.getEl(), e.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"])
            }, value: function (e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t.removeClass("placeholder"), t._rendered && (t.getEl("inp").value = e), t) : t._rendered ? (e = t.getEl("inp").value, e != t.settings.placeholder ? e : "") : t._value
            }, disabled: function (e) {
                var t = this;
                return t._rendered && "undefined" != typeof e && (t.getEl("inp").disabled = e), t._super(e)
            }, focus: function () {
                this.getEl("inp").focus()
            }, repaint: function () {
                var e = this, t = e.getEl(), r = e.getEl("open"), i = e.layoutRect(), o, a;
                o = r ? i.w - n.getSize(r).width - 10 : i.w - 10;
                var s = document;
                return s.all && (!s.documentMode || s.documentMode <= 8) && (a = e.layoutRect().h - 2 + "px"), n.css(t.firstChild, {
                    width: o,
                    lineHeight: a
                }), e._super(), e
            }, postRender: function () {
                var e = this;
                return n.on(this.getEl("inp"), "change", function () {
                    e.fire("change")
                }), e._super()
            }, remove: function () {
                n.off(this.getEl("inp")), this._super()
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.settings, r = e.classPrefix, i = n.value || n.placeholder || "", o, a, s = "", l = "";
                return "spellcheck"in n && (l += ' spellcheck="' + n.spellcheck + '"'), n.maxLength && (l += ' maxlength="' + n.maxLength + '"'), n.size && (l += ' size="' + n.size + '"'), n.subtype && (l += ' type="' + n.subtype + '"'), e.disabled() && (l += ' disabled="disabled"'), o = n.icon, o && "caret" != o && (o = r + "ico " + r + "i-" + n.icon), a = e._text, (o || a) && (s = '<div id="' + t + '-open" class="' + r + "btn " + r + 'open" tabIndex="-1" role="button"><button id="' + t + '-action" type="button" hidefocus="1" tabindex="-1">' + ("caret" != o ? '<i class="' + o + '"></i>' : '<i class="' + r + 'caret"></i>') + (a ? (o ? " " : "") + a : "") + "</button></div>", e.addClass("has-open")), '<div id="' + t + '" class="' + e.classes() + '"><input id="' + t + '-inp" class="' + r + "textbox " + r + 'placeholder" value="' + i + '" hidefocus="1"' + l + " />" + s + "</div>"
            }
        })
    }), r(Rt, [wt], function (e) {
        return e.extend({
            init: function (e) {
                var t = this;
                e.delimiter || (e.delimiter = "\xbb"), t._super(e), t.addClass("path"), t.canFocus = !0, t.on("click", function (e) {
                    var n, r = e.target;
                    (n = r.getAttribute("data-index")) && t.fire("select", {value: t.data()[n], index: n})
                })
            }, focus: function () {
                var e = this;
                return e.getEl().firstChild.focus(), e
            }, data: function (e) {
                var t = this;
                return "undefined" != typeof e ? (t._data = e, t.update(), t) : t._data
            }, update: function () {
                this.innerHtml(this._getPathHtml())
            }, postRender: function () {
                var e = this;
                e._super(), e.data(e.settings.data)
            }, renderHtml: function () {
                var e = this;
                return '<div id="' + e._id + '" class="' + e.classes() + '">' + e._getPathHtml() + "</div>"
            }, _getPathHtml: function () {
                var e = this, t = e._data || [], n, r, i = "", o = e.classPrefix;
                for (n = 0, r = t.length; r > n; n++)i += (n > 0 ? '<div class="' + o + 'divider" aria-hidden="true"> ' + e.settings.delimiter + " </div>" : "") + '<div role="button" class="' + o + "path-item" + (n == r - 1 ? " " + o + "last" : "") + '" data-index="' + n + '" tabindex="-1" id="' + e._id + "-" + n + '" aria-level="' + n + '">' + t[n].name + "</div>";
                return i || (i = '<div class="' + o + 'path-item">\xa0</div>'), i
            }
        })
    }), r(At, [Rt, dt], function (e, t) {
        return e.extend({
            postRender: function () {
                function e(e) {
                    if (1 === e.nodeType) {
                        if ("BR" == e.nodeName || e.getAttribute("data-mce-bogus"))return !0;
                        if ("bookmark" === e.getAttribute("data-mce-type"))return !0
                    }
                    return !1
                }

                var n = this, r = t.activeEditor;
                return n.on("select", function (t) {
                    var n = [], i, o = r.getBody();
                    for (r.focus(), i = r.selection.getStart(); i && i != o;)e(i) || n.push(i), i = i.parentNode;
                    r.selection.select(n[n.length - 1 - t.index]), r.nodeChanged()
                }), r.on("nodeChange", function (t) {
                    for (var i = [], o = t.parents, a = o.length; a--;)if (1 == o[a].nodeType && !e(o[a])) {
                        var s = r.fire("ResolveName", {name: o[a].nodeName.toLowerCase(), target: o[a]});
                        i.push({name: s.name})
                    }
                    n.data(i)
                }), n._super()
            }
        })
    }), r(Bt, [G], function (e) {
        return e.extend({
            Defaults: {layout: "flex", align: "center", defaults: {flex: 1}}, renderHtml: function () {
                var e = this, t = e._layout, n = e.classPrefix;
                return e.addClass("formitem"), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<div id="' + e._id + '-title" class="' + n + 'title">' + e.settings.title + "</div>" : "") + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }
        })
    }), r(Dt, [G, Bt], function (e, t) {
        return e.extend({
            Defaults: {
                containerCls: "form",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: 20,
                labelGap: 30,
                spacing: 10,
                callbacks: {
                    submit: function () {
                        this.submit()
                    }
                }
            }, preRender: function () {
                var e = this, n = e.items();
                n.each(function (n) {
                    var r, i = n.settings.label;
                    i && (r = new t({
                        layout: "flex",
                        autoResize: "overflow",
                        defaults: {flex: 1},
                        items: [{
                            type: "label",
                            id: n._id + "-l",
                            text: i,
                            flex: 0,
                            forId: n._id,
                            disabled: n.disabled()
                        }]
                    }), r.type = "formitem", n.aria("labelledby", n._id + "-l"), "undefined" == typeof n.settings.flex && (n.settings.flex = 1), e.replace(n, r), r.add(n))
                })
            }, recalcLabels: function () {
                var e = this, t = 0, n = [], r, i;
                if (e.settings.labelGapCalc !== !1)for (e.items().filter("formitem").each(function (e) {
                    var r = e.items()[0], i = r.getEl().clientWidth;
                    t = i > t ? i : t, n.push(r)
                }), i = e.settings.labelGap || 0, r = n.length; r--;)n[r].settings.minWidth = t + i
            }, visible: function (e) {
                var t = this._super(e);
                return e === !0 && this._rendered && this.recalcLabels(), t
            }, submit: function () {
                return this.fire("submit", {data: this.toJSON()})
            }, postRender: function () {
                var e = this;
                e._super(), e.recalcLabels(), e.fromJSON(e.settings.data)
            }
        })
    }), r(Lt, [Dt], function (e) {
        return e.extend({
            Defaults: {
                containerCls: "fieldset",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: "25 15 5 15",
                labelGap: 30,
                spacing: 10,
                border: 1
            }, renderHtml: function () {
                var e = this, t = e._layout, n = e.classPrefix;
                return e.preRender(), t.preRender(e), '<fieldset id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<legend id="' + e._id + '-title" class="' + n + 'fieldset-title">' + e.settings.title + "</legend>" : "") + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></fieldset>"
            }
        })
    }), r(Mt, [Tt], function (e) {
        return e.extend({
            init: function (e) {
                var t = this, n = tinymce.activeEditor, r;
                e.spellcheck = !1, r = n.settings.file_browser_callback, r && (e.icon = "browse", e.onaction = function () {
                    r(t.getEl("inp").id, t.getEl("inp").value, e.filetype, window)
                }), t._super(e)
            }
        })
    }), r(Ht, [Ct], function (e) {
        return e.extend({
            recalc: function (e) {
                var t = e.layoutRect(), n = e.paddingBox();
                e.items().filter(":visible").each(function (e) {
                    e.layoutRect({
                        x: n.left,
                        y: n.top,
                        w: t.innerW - n.right - n.left,
                        h: t.innerH - n.top - n.bottom
                    }), e.recalc && e.recalc()
                })
            }
        })
    }), r(Pt, [Ct], function (e) {
        return e.extend({
            recalc: function (e) {
                var t, n, r, i, o, a, s, l, c, u, d, f, p, h, m, g, v = [], y, b, C, x, w, _, N, E, S, k, T, R, A, B, D, L, M, H, P, O, I, F, z = Math.max, W = Math.min;
                for (r = e.items().filter(":visible"), i = e.layoutRect(), o = e._paddingBox, a = e.settings, f = e.isRtl() ? a.direction || "row-reversed" : a.direction, s = a.align, l = e.isRtl() ? a.pack || "end" : a.pack, c = a.spacing || 0, ("row-reversed" == f || "column-reverse" == f) && (r = r.set(r.toArray().reverse()), f = f.split("-")[0]), "column" == f ? (S = "y", N = "h", E = "minH", k = "maxH", R = "innerH", T = "top", A = "deltaH", B = "contentH", P = "left", M = "w", D = "x", L = "innerW", H = "minW", O = "right", I = "deltaW", F = "contentW") : (S = "x", N = "w", E = "minW", k = "maxW", R = "innerW", T = "left", A = "deltaW", B = "contentW", P = "top", M = "h", D = "y", L = "innerH", H = "minH", O = "bottom", I = "deltaH", F = "contentH"), d = i[R] - o[T] - o[T], _ = u = 0, t = 0, n = r.length; n > t; t++)p = r[t], h = p.layoutRect(), m = p.settings, g = m.flex, d -= n - 1 > t ? c : 0, g > 0 && (u += g, h[k] && v.push(p), h.flex = g), d -= h[E], y = o[P] + h[H] + o[O], y > _ && (_ = y);
                if (x = {}, x[E] = 0 > d ? i[E] - d + i[A] : i[R] - d + i[A], x[H] = _ + i[I], x[B] = i[R] - d, x[F] = _, x.minW = W(x.minW, i.maxW), x.minH = W(x.minH, i.maxH), x.minW = z(x.minW, i.startMinWidth), x.minH = z(x.minH, i.startMinHeight), !i.autoResize || x.minW == i.minW && x.minH == i.minH) {
                    for (C = d / u, t = 0, n = v.length; n > t; t++)p = v[t], h = p.layoutRect(), b = h[k], y = h[E] + h.flex * C, y > b ? (d -= h[k] - h[E], u -= h.flex, h.flex = 0, h.maxFlexSize = b) : h.maxFlexSize = 0;
                    for (C = d / u, w = o[T], x = {}, 0 === u && ("end" == l ? w = d + o[T] : "center" == l ? (w = Math.round(i[R] / 2 - (i[R] - d) / 2) + o[T], 0 > w && (w = o[T])) : "justify" == l && (w = o[T], c = Math.floor(d / (r.length - 1)))), x[D] = o[P], t = 0, n = r.length; n > t; t++)p = r[t], h = p.layoutRect(), y = h.maxFlexSize || h[E], "center" === s ? x[D] = Math.round(i[L] / 2 - h[M] / 2) : "stretch" === s ? (x[M] = z(h[H] || 0, i[L] - o[P] - o[O]), x[D] = o[P]) : "end" === s && (x[D] = i[L] - h[M] - o.top), h.flex > 0 && (y += h.flex * C), x[N] = y, x[S] = w, p.layoutRect(x), p.recalc && p.recalc(), w += y + c
                } else if (x.w = x.minW, x.h = x.minH, e.layoutRect(x), this.recalc(e), null === e._lastRect) {
                    var V = e.parent();
                    V && (V._lastRect = null, V.recalc())
                }
            }
        })
    }), r(Ot, [bt], function (e) {
        return e.extend({
            Defaults: {containerClass: "flow-layout", controlClass: "flow-layout-item", endClass: "break"},
            recalc: function (e) {
                e.items().filter(":visible").each(function (e) {
                    e.recalc && e.recalc()
                })
            }
        })
    }), r(It, [$, wt, et, p, dt, g], function (e, t, n, r, i, o) {
        function a(e) {
            function t(t, n) {
                return function () {
                    var r = this;
                    e.on("nodeChange", function (i) {
                        var o = e.formatter, a = null;
                        s(i.parents, function (e) {
                            return s(t, function (t) {
                                return n ? o.matchNode(e, n, {value: t.value}) && (a = t.value) : o.matchNode(e, t.value) && (a = t.value), a ? !1 : void 0
                            }), a ? !1 : void 0
                        }), r.value(a)
                    })
                }
            }

            function r(e) {
                e = e.replace(/;$/, "").split(";");
                for (var t = e.length; t--;)e[t] = e[t].split("=");
                return e
            }

            function i() {
                function t(e) {
                    var n = [];
                    if (e)return s(e, function (e) {
                        var o = {text: e.title, icon: e.icon};
                        if (e.items)o.menu = t(e.items); else {
                            var a = e.format || "custom" + r++;
                            e.format || (e.name = a, i.push(e)), o.format = a
                        }
                        n.push(o)
                    }), n
                }

                function n() {
                    var n;
                    return n = t(e.settings.style_formats_merge ? e.settings.style_formats ? o.concat(e.settings.style_formats) : o : e.settings.style_formats || o)
                }

                var r = 0, i = [], o = [{
                    title: "Headings",
                    items: [{title: "Heading 1", format: "h1"}, {title: "Heading 2", format: "h2"}, {
                        title: "Heading 3",
                        format: "h3"
                    }, {title: "Heading 4", format: "h4"}, {title: "Heading 5", format: "h5"}, {
                        title: "Heading 6",
                        format: "h6"
                    }]
                }, {
                    title: "Inline",
                    items: [{title: "Bold", icon: "bold", format: "bold"}, {
                        title: "Italic",
                        icon: "italic",
                        format: "italic"
                    }, {title: "Underline", icon: "underline", format: "underline"}, {
                        title: "Strikethrough",
                        icon: "strikethrough",
                        format: "strikethrough"
                    }, {title: "Superscript", icon: "superscript", format: "superscript"}, {
                        title: "Subscript",
                        icon: "subscript",
                        format: "subscript"
                    }, {title: "Code", icon: "code", format: "code"}]
                }, {
                    title: "Blocks",
                    items: [{title: "Paragraph", format: "p"}, {
                        title: "Blockquote",
                        format: "blockquote"
                    }, {title: "Div", format: "div"}, {title: "Pre", format: "pre"}]
                }, {
                    title: "Alignment",
                    items: [{title: "Left", icon: "alignleft", format: "alignleft"}, {
                        title: "Center",
                        icon: "aligncenter",
                        format: "aligncenter"
                    }, {title: "Right", icon: "alignright", format: "alignright"}, {
                        title: "Justify",
                        icon: "alignjustify",
                        format: "alignjustify"
                    }]
                }];
                return e.on("init", function () {
                    s(i, function (t) {
                        e.formatter.register(t.name, t)
                    })
                }), {
                    type: "menu", items: n(), onPostRender: function (t) {
                        e.fire("renderFormatsMenu", {control: t.control})
                    }, itemDefaults: {
                        preview: !0, textStyle: function () {
                            return this.settings.format ? e.formatter.getCssText(this.settings.format) : void 0
                        }, onPostRender: function () {
                            var t = this, n = this.settings.format;
                            n && t.parent().on("show", function () {
                                t.disabled(!e.formatter.canApply(n)), t.active(e.formatter.match(n))
                            })
                        }, onclick: function () {
                            this.settings.format && d(this.settings.format)
                        }
                    }
                }
            }

            function o() {
                return e.undoManager ? e.undoManager.hasUndo() : !1
            }

            function a() {
                return e.undoManager ? e.undoManager.hasRedo() : !1
            }

            function l() {
                var t = this;
                t.disabled(!o()), e.on("Undo Redo AddUndo TypingUndo", function () {
                    t.disabled(!o())
                })
            }

            function c() {
                var t = this;
                t.disabled(!a()), e.on("Undo Redo AddUndo TypingUndo", function () {
                    t.disabled(!a())
                })
            }

            function u() {
                var t = this;
                e.on("VisualAid", function (e) {
                    t.active(e.hasVisual)
                }), t.active(e.hasVisual)
            }

            function d(t) {
                t.control && (t = t.control.value()), t && e.execCommand("mceToggleFormat", !1, t)
            }

            var f;
            f = i(), s({
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                strikethrough: "Strikethrough",
                subscript: "Subscript",
                superscript: "Superscript"
            }, function (t, n) {
                e.addButton(n, {
                    tooltip: t, onPostRender: function () {
                        var t = this;
                        e.formatter ? e.formatter.formatChanged(n, function (e) {
                            t.active(e)
                        }) : e.on("init", function () {
                            e.formatter.formatChanged(n, function (e) {
                                t.active(e)
                            })
                        })
                    }, onclick: function () {
                        d(n)
                    }
                })
            }), s({
                outdent: ["Decrease indent", "Outdent"],
                indent: ["Increase indent", "Indent"],
                cut: ["Cut", "Cut"],
                copy: ["Copy", "Copy"],
                paste: ["Paste", "Paste"],
                help: ["Help", "mceHelp"],
                selectall: ["Select all", "SelectAll"],
                hr: ["Insert horizontal rule", "InsertHorizontalRule"],
                removeformat: ["Clear formatting", "RemoveFormat"],
                visualaid: ["Visual aids", "mceToggleVisualAid"],
                newdocument: ["New document", "mceNewDocument"]
            }, function (t, n) {
                e.addButton(n, {tooltip: t[0], cmd: t[1]})
            }), s({
                blockquote: ["Blockquote", "mceBlockQuote"],
                numlist: ["Numbered list", "InsertOrderedList"],
                bullist: ["Bullet list", "InsertUnorderedList"],
                subscript: ["Subscript", "Subscript"],
                superscript: ["Superscript", "Superscript"],
                alignleft: ["Align left", "JustifyLeft"],
                aligncenter: ["Align center", "JustifyCenter"],
                alignright: ["Align right", "JustifyRight"],
                alignjustify: ["Justify", "JustifyFull"]
            }, function (t, n) {
                e.addButton(n, {
                    tooltip: t[0], cmd: t[1], onPostRender: function () {
                        var t = this;
                        e.formatter ? e.formatter.formatChanged(n, function (e) {
                            t.active(e)
                        }) : e.on("init", function () {
                            e.formatter.formatChanged(n, function (e) {
                                t.active(e)
                            })
                        })
                    }
                })
            }), e.addButton("undo", {
                tooltip: "Undo",
                onPostRender: l,
                cmd: "undo"
            }), e.addButton("redo", {
                tooltip: "Redo",
                onPostRender: c,
                cmd: "redo"
            }), e.addMenuItem("newdocument", {
                text: "New document",
                shortcut: "Ctrl+N",
                icon: "newdocument",
                cmd: "mceNewDocument"
            }), e.addMenuItem("undo", {
                text: "Undo",
                icon: "undo",
                shortcut: "Ctrl+Z",
                onPostRender: l,
                cmd: "undo"
            }), e.addMenuItem("redo", {
                text: "Redo",
                icon: "redo",
                shortcut: "Ctrl+Y",
                onPostRender: c,
                cmd: "redo"
            }), e.addMenuItem("visualaid", {
                text: "Visual aids",
                selectable: !0,
                onPostRender: u,
                cmd: "mceToggleVisualAid"
            }), s({
                cut: ["Cut", "Cut", "Ctrl+X"],
                copy: ["Copy", "Copy", "Ctrl+C"],
                paste: ["Paste", "Paste", "Ctrl+V"],
                selectall: ["Select all", "SelectAll", "Ctrl+A"],
                bold: ["Bold", "Bold", "Ctrl+B"],
                italic: ["Italic", "Italic", "Ctrl+I"],
                underline: ["Underline", "Underline"],
                strikethrough: ["Strikethrough", "Strikethrough"],
                subscript: ["Subscript", "Subscript"],
                superscript: ["Superscript", "Superscript"],
                removeformat: ["Clear formatting", "RemoveFormat"]
            }, function (t, n) {
                e.addMenuItem(n, {text: t[0], icon: n, shortcut: t[2], cmd: t[1]})
            }), e.on("mousedown", function () {
                n.hideAll()
            }), e.addButton("styleselect", {
                type: "menubutton",
                text: "Formats",
                menu: f
            }), e.addButton("formatselect", function () {
                var n = [], i = r(e.settings.block_formats || "Paragraph=p;Address=address;Pre=pre;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6");
                return s(i, function (t) {
                    n.push({
                        text: t[0], value: t[1], textStyle: function () {
                            return e.formatter.getCssText(t[1])
                        }
                    })
                }), {type: "listbox", text: i[0][0], values: n, fixedWidth: !0, onselect: d, onPostRender: t(n)}
            }), e.addButton("fontselect", function () {
                var n = "Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats", i = [], o = r(e.settings.font_formats || n);
                return s(o, function (e) {
                    i.push({
                        text: {raw: e[0]},
                        value: e[1],
                        textStyle: -1 == e[1].indexOf("dings") ? "font-family:" + e[1] : ""
                    })
                }), {
                    type: "listbox",
                    text: "Font Family",
                    tooltip: "Font Family",
                    values: i,
                    fixedWidth: !0,
                    onPostRender: t(i, "fontname"),
                    onselect: function (t) {
                        t.control.settings.value && e.execCommand("FontName", !1, t.control.settings.value)
                    }
                }
            }), e.addButton("fontsizeselect", function () {
                var n = [], r = "8pt 10pt 12pt 14pt 18pt 24pt 36pt", i = e.settings.fontsize_formats || r;
                return s(i.split(" "), function (e) {
                    n.push({text: e, value: e})
                }), {
                    type: "listbox",
                    text: "Font Sizes",
                    tooltip: "Font Sizes",
                    values: n,
                    fixedWidth: !0,
                    onPostRender: t(n, "fontsize"),
                    onclick: function (t) {
                        t.control.settings.value && e.execCommand("FontSize", !1, t.control.settings.value)
                    }
                }
            }), e.addMenuItem("formats", {text: "Formats", menu: f})
        }

        var s = r.each;
        i.on("AddEditor", function (t) {
            t.editor.rtl && (e.rtl = !0), a(t.editor)
        }), e.translate = function (e) {
            return i.translate(e)
        }, t.tooltips = !o.iOS
    }), r(Ft, [Ct], function (e) {
        return e.extend({
            recalc: function (e) {
                var t = e.settings, n, r, i, o, a, s, l, c, u, d, f, p, h, m, g, v, y, b, C, x, w, _, N = [], E = [], S, k, T, R;
                for (t = e.settings, i = e.items().filter(":visible"), o = e.layoutRect(), r = t.columns || Math.ceil(Math.sqrt(i.length)), n = Math.ceil(i.length / r), y = t.spacingH || t.spacing || 0, b = t.spacingV || t.spacing || 0, C = t.alignH || t.align, x = t.alignV || t.align, g = e._paddingBox, C && "string" == typeof C && (C = [C]), x && "string" == typeof x && (x = [x]), d = 0; r > d; d++)N.push(0);
                for (f = 0; n > f; f++)E.push(0);
                for (f = 0; n > f; f++)for (d = 0; r > d && (u = i[f * r + d], u); d++)c = u.layoutRect(), S = c.minW, k = c.minH, N[d] = S > N[d] ? S : N[d], E[f] = k > E[f] ? k : E[f];
                for (T = o.innerW - g.left - g.right, w = 0, d = 0; r > d; d++)w += N[d] + (d > 0 ? y : 0), T -= (d > 0 ? y : 0) + N[d];
                for (R = o.innerH - g.top - g.bottom, _ = 0, f = 0; n > f; f++)_ += E[f] + (f > 0 ? b : 0), R -= (f > 0 ? b : 0) + E[f];
                if (w += g.left + g.right, _ += g.top + g.bottom, l = {}, l.minW = w + (o.w - o.innerW), l.minH = _ + (o.h - o.innerH), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH, l.minW = Math.min(l.minW, o.maxW), l.minH = Math.min(l.minH, o.maxH), l.minW = Math.max(l.minW, o.startMinWidth), l.minH = Math.max(l.minH, o.startMinHeight), !o.autoResize || l.minW == o.minW && l.minH == o.minH) {
                    o.autoResize && (l = e.layoutRect(l), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH);
                    var A;
                    A = "start" == t.packV ? 0 : R > 0 ? Math.floor(R / n) : 0;
                    var B = 0, D = t.flexWidths;
                    if (D)for (d = 0; d < D.length; d++)B += D[d]; else B = r;
                    var L = T / B;
                    for (d = 0; r > d; d++)N[d] += D ? D[d] * L : L;
                    for (h = g.top, f = 0; n > f; f++) {
                        for (p = g.left, s = E[f] + A, d = 0; r > d && (u = i[f * r + d], u); d++)m = u.settings, c = u.layoutRect(), a = Math.max(N[d], c.startMinWidth), c.x = p, c.y = h, v = m.alignH || (C ? C[d] || C[0] : null), "center" == v ? c.x = p + a / 2 - c.w / 2 : "right" == v ? c.x = p + a - c.w : "stretch" == v && (c.w = a), v = m.alignV || (x ? x[d] || x[0] : null), "center" == v ? c.y = h + s / 2 - c.h / 2 : "bottom" == v ? c.y = h + s - c.h : "stretch" == v && (c.h = s), u.layoutRect(c), p += a + y, u.recalc && u.recalc();
                        h += s + b
                    }
                } else if (l.w = l.minW, l.h = l.minH, e.layoutRect(l), this.recalc(e), null === e._lastRect) {
                    var M = e.parent();
                    M && (M._lastRect = null, M.recalc())
                }
            }
        })
    }), r(zt, [wt], function (e) {
        return e.extend({
            renderHtml: function () {
                var e = this;
                return e.addClass("iframe"), e.canFocus = !1, '<iframe id="' + e._id + '" class="' + e.classes() + '" tabindex="-1" src="' + (e.settings.url || "javascript:''") + '" frameborder="0"></iframe>'
            }, src: function (e) {
                this.getEl().src = e
            }, html: function (e, t) {
                var n = this, r = this.getEl().contentWindow.document.body;
                return r ? (r.innerHTML = e, t && t()) : setTimeout(function () {
                    n.html(e)
                }, 0), this
            }
        })
    }), r(Wt, [wt, q], function (e, t) {
        return e.extend({
            init: function (e) {
                var t = this;
                t._super(e), t.addClass("widget"), t.addClass("label"), t.canFocus = !1, e.multiline && t.addClass("autoscroll"), e.strong && t.addClass("strong")
            }, initLayoutRect: function () {
                var e = this, n = e._super();
                if (e.settings.multiline) {
                    var r = t.getSize(e.getEl());
                    r.width > n.maxW && (n.minW = n.maxW, e.addClass("multiline")), e.getEl().style.width = n.minW + "px", n.startMinH = n.h = n.minH = Math.min(n.maxH, t.getSize(e.getEl()).height)
                }
                return n
            }, repaint: function () {
                var e = this;
                return e.settings.multiline || (e.getEl().style.lineHeight = e.layoutRect().h + "px"), e._super()
            }, text: function (e) {
                var t = this;
                return t._rendered && e && this.innerHtml(t.encode(e)), t._super(e)
            }, renderHtml: function () {
                var e = this, t = e.settings.forId;
                return '<label id="' + e._id + '" class="' + e.classes() + '"' + (t ? ' for="' + t + '"' : "") + ">" + e.encode(e._text) + "</label>"
            }
        })
    }), r(Vt, [G], function (e) {
        return e.extend({
            Defaults: {role: "toolbar", layout: "flow"}, init: function (e) {
                var t = this;
                t._super(e), t.addClass("toolbar")
            }, postRender: function () {
                var e = this;
                return e.items().addClass("toolbar-item"), e._super()
            }
        })
    }), r(Ut, [Vt], function (e) {
        return e.extend({
            Defaults: {
                role: "menubar",
                containerCls: "menubar",
                ariaRoot: !0,
                defaults: {type: "menubutton"}
            }
        })
    }), r(qt, [_t, j, Ut], function (e, t, n) {
        function r(e, t) {
            for (; e;) {
                if (t === e)return !0;
                e = e.parentNode
            }
            return !1
        }

        var i = e.extend({
            init: function (e) {
                var t = this;
                t._renderOpen = !0, t._super(e), t.addClass("menubtn"), e.fixedWidth && t.addClass("fixed-width"), t.aria("haspopup", !0), t.hasPopup = !0
            }, showMenu: function () {
                var e = this, n = e.settings, r;
                return e.menu && e.menu.visible() ? e.hideMenu() : (e.menu || (r = n.menu || [], r.length ? r = {
                    type: "menu",
                    items: r
                } : r.type = r.type || "menu", e.menu = t.create(r).parent(e).renderTo(), e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function (t) {
                    t.control.parent() === e.menu && (t.stopPropagation(), e.focus(), e.hideMenu())
                }), e.menu.on("select", function () {
                    e.focus()
                }), e.menu.on("show hide", function (t) {
                    t.control == e.menu && e.activeMenu("show" == t.type), e.aria("expanded", "show" == t.type)
                }).fire("show")), e.menu.show(), e.menu.layoutRect({w: e.layoutRect().w}), void e.menu.moveRel(e.getEl(), e.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"]))
            }, hideMenu: function () {
                var e = this;
                e.menu && (e.menu.items().each(function (e) {
                    e.hideMenu && e.hideMenu()
                }), e.menu.hide())
            }, activeMenu: function (e) {
                this.toggleClass("active", e)
            }, renderHtml: function () {
                var e = this, t = e._id, r = e.classPrefix, i = e.settings.icon ? r + "ico " + r + "i-" + e.settings.icon : "";
                return e.aria("role", e.parent()instanceof n ? "menuitem" : "button"), '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1" aria-labelledby="' + t + '"><button id="' + t + '-open" role="presentation" type="button" tabindex="-1">' + (i ? '<i class="' + i + '"></i>' : "") + "<span>" + (e._text ? (i ? "\xa0" : "") + e.encode(e._text) : "") + '</span> <i class="' + r + 'caret"></i></button></div>'
            }, postRender: function () {
                var e = this;
                return e.on("click", function (t) {
                    t.control === e && r(t.target, e.getEl()) && (e.showMenu(), t.aria && e.menu.items()[0].focus())
                }), e.on("mouseenter", function (t) {
                    var n = t.control, r = e.parent(), o;
                    n && r && n instanceof i && n.parent() == r && (r.items().filter("MenuButton").each(function (e) {
                        e.hideMenu && e != n && (e.menu && e.menu.visible() && (o = !0), e.hideMenu())
                    }), o && (n.focus(), n.showMenu()))
                }), e._super()
            }, text: function (e) {
                var t = this, n, r;
                if (t._rendered)for (r = t.getEl("open").getElementsByTagName("span"), n = 0; n < r.length; n++)r[n].innerHTML = (t.settings.icon && e ? "\xa0" : "") + t.encode(e);
                return this._super(e)
            }, remove: function () {
                this._super(), this.menu && this.menu.remove()
            }
        });
        return i
    }), r($t, [qt], function (e) {
        return e.extend({
            init: function (e) {
                var t = this, n, r, i, o, a;
                if (t._values = n = e.values, n) {
                    for (r = 0; r < n.length; r++)if (i = n[r].selected || e.value === n[r].value) {
                        o = o || n[r].text, t._value = n[r].value;
                        break
                    }
                    !i && n.length > 0 && (o = n[0].text, t._value = n[0].value), e.menu = n
                }
                e.text = e.text || o || n[0].text, t._super(e), t.addClass("listbox"), t.on("select", function (n) {
                    var r = n.control;
                    a && (n.lastControl = a), e.multiple ? r.active(!r.active()) : t.value(n.control.settings.value), a = r
                })
            }, value: function (e) {
                function t(e, n) {
                    e.items().each(function (e) {
                        r = e.value() === n, r && (i = i || e.text()), e.active(r), e.menu && t(e.menu, n)
                    })
                }

                var n = this, r, i, o, a;
                if ("undefined" != typeof e) {
                    if (n.menu)t(n.menu, e); else for (o = n.settings.menu, a = 0; a < o.length; a++)r = o[a].value == e, r && (i = i || o[a].text), o[a].active = r;
                    n.text(i || this.settings.text)
                }
                return n._super(e)
            }
        })
    }), r(jt, [wt, j, g], function (e, t, n) {
        return e.extend({
            Defaults: {border: 0, role: "menuitem"}, init: function (e) {
                var t = this;
                t.hasPopup = !0, t._super(e), e = t.settings, t.addClass("menu-item"), e.menu && t.addClass("menu-item-expand"), e.preview && t.addClass("menu-item-preview"), ("-" === t._text || "|" === t._text) && (t.addClass("menu-item-sep"), t.aria("role", "separator"), t._text = "-"), e.selectable && (t.aria("role", "menuitemcheckbox"), t.addClass("menu-item-checkbox"), e.icon = "selected"), e.preview || e.selectable || t.addClass("menu-item-normal"), t.on("mousedown", function (e) {
                    e.preventDefault()
                }), e.menu && !e.ariaHideMenu && t.aria("haspopup", !0)
            }, hasMenus: function () {
                return !!this.settings.menu
            }, showMenu: function () {
                var e = this, n = e.settings, r, i = e.parent();
                if (i.items().each(function (t) {
                        t !== e && t.hideMenu()
                    }), n.menu) {
                    r = e.menu, r ? r.show() : (r = n.menu, r.length ? r = {
                        type: "menu",
                        items: r
                    } : r.type = r.type || "menu", i.settings.itemDefaults && (r.itemDefaults = i.settings.itemDefaults), r = e.menu = t.create(r).parent(e).renderTo(), r.reflow(), r.fire("show"), r.on("cancel", function (t) {
                        t.stopPropagation(), e.focus(), r.hide()
                    }), r.on("hide", function (t) {
                        t.control === r && e.removeClass("selected")
                    }), r.submenu = !0), r._parentMenu = i, r.addClass("menu-sub");
                    var o = r.testMoveRel(e.getEl(), e.isRtl() ? ["tl-tr", "bl-br", "tr-tl", "br-bl"] : ["tr-tl", "br-bl", "tl-tr", "bl-br"]);
                    r.moveRel(e.getEl(), o), r.rel = o, o = "menu-sub-" + o, r.removeClass(r._lastRel), r.addClass(o), r._lastRel = o, e.addClass("selected"), e.aria("expanded", !0)
                }
            }, hideMenu: function () {
                var e = this;
                return e.menu && (e.menu.items().each(function (e) {
                    e.hideMenu && e.hideMenu()
                }), e.menu.hide(), e.aria("expanded", !1)), e
            }, renderHtml: function () {
                var e = this, t = e._id, r = e.settings, i = e.classPrefix, o = e.encode(e._text), a = e.settings.icon, s = "", l = r.shortcut;
                return a && e.parent().addClass("menu-has-icons"), r.image && (a = "none", s = " style=\"background-image: url('" + r.image + "')\""), l && n.mac && (l = l.replace(/ctrl\+alt\+/i, "&#x2325;&#x2318;"), l = l.replace(/ctrl\+/i, "&#x2318;"), l = l.replace(/alt\+/i, "&#x2325;"), l = l.replace(/shift\+/i, "&#x21E7;")), a = i + "ico " + i + "i-" + (e.settings.icon || "none"), '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1">' + ("-" !== o ? '<i class="' + a + '"' + s + "></i>\xa0" : "") + ("-" !== o ? '<span id="' + t + '-text" class="' + i + 'text">' + o + "</span>" : "") + (l ? '<div id="' + t + '-shortcut" class="' + i + 'menu-shortcut">' + l + "</div>" : "") + (r.menu ? '<div class="' + i + 'caret"></div>' : "") + "</div>"
            }, postRender: function () {
                var e = this, t = e.settings, n = t.textStyle;
                if ("function" == typeof n && (n = n.call(this)), n) {
                    var r = e.getEl("text");
                    r && r.setAttribute("style", n)
                }
                return e.on("mouseenter click", function (n) {
                    n.control === e && (t.menu || "click" !== n.type ? (e.showMenu(), n.aria && e.menu.focus(!0)) : (e.fire("select"), e.parent().hideAll()))
                }), e._super(), e
            }, active: function (e) {
                return "undefined" != typeof e && this.aria("checked", e), this._super(e)
            }, remove: function () {
                this._super(), this.menu && this.menu.remove()
            }
        })
    }), r(Kt, [et, jt, p], function (e, t, n) {
        var r = e.extend({
            Defaults: {
                defaultType: "menuitem",
                border: 1,
                layout: "stack",
                role: "application",
                bodyRole: "menu",
                ariaRoot: !0
            }, init: function (e) {
                var t = this;
                if (e.autohide = !0, e.constrainToViewport = !0, e.itemDefaults)for (var r = e.items, i = r.length; i--;)r[i] = n.extend({}, e.itemDefaults, r[i]);
                t._super(e), t.addClass("menu")
            }, repaint: function () {
                return this.toggleClass("menu-align", !0), this._super(), this.getEl().style.height = "", this.getEl("body").style.height = "", this
            }, cancel: function () {
                var e = this;
                e.hideAll(), e.fire("select")
            }, hideAll: function () {
                var e = this;
                return this.find("menuitem").exec("hideMenu"), e._super()
            }, preRender: function () {
                var e = this;
                return e.items().each(function (t) {
                    var n = t.settings;
                    return n.icon || n.selectable ? (e._hasIcons = !0, !1) : void 0
                }), e._super()
            }
        });
        return r
    }), r(Gt, [Et], function (e) {
        return e.extend({Defaults: {classes: "radio", role: "radio"}})
    }), r(Yt, [wt, Y], function (e, t) {
        return e.extend({
            renderHtml: function () {
                var e = this, t = e.classPrefix;
                return e.addClass("resizehandle"), "both" == e.settings.direction && e.addClass("resizehandle-both"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes() + '"><i class="' + t + "ico " + t + 'i-resize"></i></div>'
            }, postRender: function () {
                var e = this;
                e._super(), e.resizeDragHelper = new t(this._id, {
                    start: function () {
                        e.fire("ResizeStart")
                    }, drag: function (t) {
                        "both" != e.settings.direction && (t.deltaX = 0), e.fire("Resize", t)
                    }, stop: function () {
                        e.fire("ResizeEnd")
                    }
                })
            }, remove: function () {
                return this.resizeDragHelper && this.resizeDragHelper.destroy(), this._super()
            }
        })
    }), r(Xt, [wt], function (e) {
        return e.extend({
            renderHtml: function () {
                var e = this;
                return e.addClass("spacer"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes() + '"></div>'
            }
        })
    }), r(Jt, [qt, q], function (e, t) {
        return e.extend({
            Defaults: {classes: "widget btn splitbtn", role: "button"}, repaint: function () {
                var e = this, n = e.getEl(), r = e.layoutRect(), i, o;
                return e._super(), i = n.firstChild, o = n.lastChild, t.css(i, {
                    width: r.w - t.getSize(o).width,
                    height: r.h - 2
                }), t.css(o, {height: r.h - 2}), e
            }, activeMenu: function (e) {
                var n = this;
                t.toggleClass(n.getEl().lastChild, n.classPrefix + "active", e)
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.classPrefix, r = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "";
                return '<div id="' + t + '" class="' + e.classes() + '" role="button" tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">' + (r ? '<i class="' + r + '"></i>' : "") + (e._text ? (r ? " " : "") + e._text : "") + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1">' + (e._menuBtnText ? (r ? "\xa0" : "") + e._menuBtnText : "") + ' <i class="' + n + 'caret"></i></button></div>'
            }, postRender: function () {
                var e = this, t = e.settings.onclick;
                return e.on("click", function (e) {
                    var n = e.target;
                    if (e.control == this)for (; n;) {
                        if (e.aria && "down" != e.aria.key || "BUTTON" == n.nodeName && -1 == n.className.indexOf("open"))return e.stopImmediatePropagation(), void t.call(this, e);
                        n = n.parentNode
                    }
                }), delete e.settings.onclick, e._super()
            }
        })
    }), r(Qt, [Ot], function (e) {
        return e.extend({
            Defaults: {
                containerClass: "stack-layout",
                controlClass: "stack-layout-item",
                endClass: "break"
            }
        })
    }), r(Zt, [J, q], function (e, t) {
        return e.extend({
            lastIdx: 0,
            Defaults: {layout: "absolute", defaults: {type: "panel"}},
            activateTab: function (e) {
                var n;
                this.activeTabId && (n = this.getEl(this.activeTabId), t.removeClass(n, this.classPrefix + "active"), n.setAttribute("aria-selected", "false")), this.activeTabId = "t" + e, n = this.getEl("t" + e), n.setAttribute("aria-selected", "true"), t.addClass(n, this.classPrefix + "active"), e != this.lastIdx && (this.items()[this.lastIdx].hide(), this.lastIdx = e), this.items()[e].show().fire("showtab"), this.reflow()
            },
            renderHtml: function () {
                var e = this, t = e._layout, n = "", r = e.classPrefix;
                return e.preRender(), t.preRender(e), e.items().each(function (t, i) {
                    var o = e._id + "-t" + i;
                    t.aria("role", "tabpanel"), t.aria("labelledby", o), n += '<div id="' + o + '" class="' + r + 'tab" unselectable="on" role="tab" aria-controls="' + t._id + '" aria-selected="false" tabIndex="-1">' + e.encode(t.settings.title) + "</div>"
                }), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1"><div id="' + e._id + '-head" class="' + r + 'tabs" role="tablist">' + n + '</div><div id="' + e._id + '-body" class="' + e.classes("body") + '">' + t.renderHtml(e) + "</div></div>"
            },
            postRender: function () {
                var e = this;
                e._super(), e.settings.activeTab = e.settings.activeTab || 0, e.activateTab(e.settings.activeTab), this.on("click", function (t) {
                    var n = t.target.parentNode;
                    if (t.target.parentNode.id == e._id + "-head")for (var r = n.childNodes.length; r--;)n.childNodes[r] == t.target && e.activateTab(r)
                })
            },
            initLayoutRect: function () {
                var e = this, n, r, i;
                r = t.getSize(e.getEl("head")).width, r = 0 > r ? 0 : r, i = 0, e.items().each(function (t, n) {
                    r = Math.max(r, t.layoutRect().minW), i = Math.max(i, t.layoutRect().minH), e.settings.activeTab != n && t.hide()
                }), e.items().each(function (e) {
                    e.settings.x = 0, e.settings.y = 0, e.settings.w = r, e.settings.h = i, e.layoutRect({
                        x: 0,
                        y: 0,
                        w: r,
                        h: i
                    })
                });
                var o = t.getSize(e.getEl("head")).height;
                return e.settings.minWidth = r, e.settings.minHeight = i + o, n = e._super(), n.deltaH += o, n.innerH = n.h - n.deltaH, n
            }
        })
    }), r(en, [wt, q], function (e, t) {
        return e.extend({
            init: function (e) {
                var t = this;
                t._super(e), t._value = e.value || "", t.addClass("textbox"), e.multiline ? t.addClass("multiline") : t.on("keydown", function (e) {
                    13 == e.keyCode && t.parents().reverse().each(function (t) {
                        return e.preventDefault(), t.hasEventListeners("submit") && t.toJSON ? (t.fire("submit", {data: t.toJSON()}), !1) : void 0
                    })
                })
            }, disabled: function (e) {
                var t = this;
                return t._rendered && "undefined" != typeof e && (t.getEl().disabled = e), t._super(e)
            }, value: function (e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t._rendered && (t.getEl().value = e), t) : t._rendered ? t.getEl().value : t._value
            }, repaint: function () {
                var e = this, t, n, r, i = 0, o = 0, a;
                t = e.getEl().style, n = e._layoutRect, a = e._lastRepaintRect || {};
                var s = document;
                return !e.settings.multiline && s.all && (!s.documentMode || s.documentMode <= 8) && (t.lineHeight = n.h - o + "px"), r = e._borderBox, i = r.left + r.right + 8, o = r.top + r.bottom + (e.settings.multiline ? 8 : 0), n.x !== a.x && (t.left = n.x + "px", a.x = n.x), n.y !== a.y && (t.top = n.y + "px", a.y = n.y), n.w !== a.w && (t.width = n.w - i + "px", a.w = n.w), n.h !== a.h && (t.height = n.h - o + "px", a.h = n.h), e._lastRepaintRect = a, e.fire("repaint", {}, !1), e
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.settings, r = e.encode(e._value, !1), i = "";
                return "spellcheck"in n && (i += ' spellcheck="' + n.spellcheck + '"'), n.maxLength && (i += ' maxlength="' + n.maxLength + '"'), n.size && (i += ' size="' + n.size + '"'), n.subtype && (i += ' type="' + n.subtype + '"'), e.disabled() && (i += ' disabled="disabled"'), n.multiline ? '<textarea id="' + t + '" class="' + e.classes() + '" ' + (n.rows ? ' rows="' + n.rows + '"' : "") + ' hidefocus="1"' + i + ">" + r + "</textarea>" : '<input id="' + t + '" class="' + e.classes() + '" value="' + r + '" hidefocus="1"' + i + " />"
            }, postRender: function () {
                var e = this;
                return t.on(e.getEl(), "change", function (t) {
                    e.fire("change", t)
                }), e._super()
            }, remove: function () {
                t.off(this.getEl()), this._super()
            }
        })
    }),r(tn, [q, $], function (e, t) {
        return function (n, r) {
            var i = this, o, a = t.classPrefix;
            i.show = function (t) {
                return i.hide(), o = !0, window.setTimeout(function () {
                    o && n.appendChild(e.createFragment('<div class="' + a + "throbber" + (r ? " " + a + "throbber-inline" : "") + '"></div>'))
                }, t || 0), i
            }, i.hide = function () {
                var e = n.lastChild;
                return e && -1 != e.className.indexOf("throbber") && e.parentNode.removeChild(e), o = !1, i
            }
        }
    }),a([l, c, u, d, f, p, h, m, g, v, y, b, C, x, w, _, N, E, S, k, T, R, A, B, D, L, M, H, P, O, I, F, z, W, V, U, q, $, j, K, G, Y, X, J, Q, Z, et, tt, nt, rt, it, ot, at, st, lt, ct, ut, dt, ft, pt, ht, mt, gt, vt, yt, bt, Ct, xt, wt, _t, Nt, Et, St, kt, Tt, Rt, At, Bt, Dt, Lt, Mt, Ht, Pt, Ot, It, Ft, zt, Wt, Vt, Ut, qt, $t, jt, Kt, Gt, Yt, Xt, Jt, Qt, Zt, en, tn])
}(this);