/*
 Highcharts JS v4.2.5 (2016-05-06)
 Exporting module

 (c) 2010-2016 Torstein Honsi

 License: www.highcharts.com/license
 */
(function (f) {
    typeof module === "object" && module.exports ? module.exports = f : f(Highcharts)
})(function (f) {
    var t = f.win, k = t.document, C = f.Chart, v = f.addEvent, D = f.removeEvent, E = f.fireEvent, s = f.createElement, u = f.discardElement, x = f.css, l = f.merge, q = f.each, r = f.extend, F = f.splat, G = Math.max, H = f.isTouchDevice, I = f.Renderer.prototype.symbols, A = f.getOptions(), B;
    r(A.lang, {
        printChart: "Print chart",
        downloadPNG: "Download PNG image",
        downloadJPEG: "Download JPEG image",
        downloadPDF: "Download PDF document",
        downloadSVG: "Download SVG vector image",
        contextButtonTitle: "Chart context menu"
    });
    A.navigation = {
        menuStyle: {border: "1px solid #A0A0A0", background: "#FFFFFF", padding: "5px 0"},
        menuItemStyle: {padding: "0 10px", background: "none", color: "#303030", fontSize: H ? "14px" : "11px"},
        menuItemHoverStyle: {background: "#4572A5", color: "#FFFFFF"},
        buttonOptions: {
            symbolFill: "#E0E0E0",
            symbolSize: 14,
            symbolStroke: "#666",
            symbolStrokeWidth: 3,
            symbolX: 12.5,
            symbolY: 10.5,
            align: "right",
            buttonSpacing: 3,
            height: 22,
            theme: {fill: "white", stroke: "none"},
            verticalAlign: "top",
            width: 24
        }
    };
    A.exporting = {
        type: "image/png", url: "http://export.highcharts.com/", printMaxWidth: 780, buttons: {
            contextButton: {
                menuClassName: "highcharts-contextmenu",
                symbol: "menu",
                _titleKey: "contextButtonTitle",
                menuItems: [{
                    textKey: "printChart", onclick: function () {
                        this.print()
                    }
                }, {separator: !0}, {
                    textKey: "downloadPNG", onclick: function () {
                        this.exportChart()
                    }
                }, {
                    textKey: "downloadJPEG", onclick: function () {
                        this.exportChart({type: "image/jpeg"})
                    }
                }, {
                    textKey: "downloadPDF", onclick: function () {
                        this.exportChart({type: "application/pdf"})
                    }
                },
                    {
                        textKey: "downloadSVG", onclick: function () {
                        this.exportChart({type: "image/svg+xml"})
                    }
                    }]
            }
        }
    };
    f.post = function (a, b, e) {
        var c, a = s("form", l({
            method: "post",
            action: a,
            enctype: "multipart/form-data"
        }, e), {display: "none"}, k.body);
        for (c in b)s("input", {type: "hidden", name: c, value: b[c]}, null, a);
        a.submit();
        u(a)
    };
    r(C.prototype, {
        sanitizeSVG: function (a) {
            return a.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/<svg /,
                '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g, " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, "\u00a0").replace(/&shy;/g, "\u00ad").replace(/<IMG /g, "<image ").replace(/<(\/?)TITLE>/g, "<$1title>").replace(/height=([^" ]+)/g, 'height="$1"').replace(/width=([^" ]+)/g, 'width="$1"').replace(/hc-svg-href="([^"]+)">/g, 'xlink:href="$1"/>').replace(/ id=([^" >]+)/g,
                ' id="$1"').replace(/class=([^" >]+)/g, 'class="$1"').replace(/ transform /g, " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)"/g, function (a) {
                    return a.toLowerCase()
                })
        }, getChartHTML: function () {
            return this.container.innerHTML
        }, getSVG: function (a) {
            var b = this, e, c, g, j, h, d = l(b.options, a), m = d.exporting.allowHTML;
            if (!k.createElementNS)k.createElementNS = function (a, b) {
                return k.createElement(b)
            };
            c = s("div", null, {
                position: "absolute",
                top: "-9999em",
                width: b.chartWidth + "px",
                height: b.chartHeight + "px"
            }, k.body);
            g = b.renderTo.style.width;
            h = b.renderTo.style.height;
            g = d.exporting.sourceWidth || d.chart.width || /px$/.test(g) && parseInt(g, 10) || 600;
            h = d.exporting.sourceHeight || d.chart.height || /px$/.test(h) && parseInt(h, 10) || 400;
            r(d.chart, {animation: !1, renderTo: c, forExport: !0, renderer: "SVGRenderer", width: g, height: h});
            d.exporting.enabled = !1;
            delete d.data;
            d.series = [];
            q(b.series, function (a) {
                j = l(a.userOptions, {animation: !1, enableMouseTracking: !1, showCheckbox: !1, visible: a.visible});
                j.isInternal || d.series.push(j)
            });
            a && q(["xAxis",
                "yAxis"], function (b) {
                q(F(a[b]), function (a, c) {
                    d[b][c] = l(d[b][c], a)
                })
            });
            e = new f.Chart(d, b.callback);
            q(["xAxis", "yAxis"], function (a) {
                q(b[a], function (b, c) {
                    var d = e[a][c], f = b.getExtremes(), g = f.userMin, f = f.userMax;
                    d && (g !== void 0 || f !== void 0) && d.setExtremes(g, f, !0, !1)
                })
            });
            g = e.getChartHTML();
            d = null;
            e.destroy();
            u(c);
            if (m && (c = g.match(/<\/svg>(.*?$)/)))c = '<foreignObject x="0" y="0" width="200" height="200"><body xmlns="http://www.w3.org/1999/xhtml">' + c[1] + "</body></foreignObject>", g = g.replace("</svg>", c + "</svg>");
            g = this.sanitizeSVG(g);
            return g = g.replace(/(url\(#highcharts-[0-9]+)&quot;/g, "$1").replace(/&quot;/g, "'")
        }, getSVGForExport: function (a, b) {
            var e = this.options.exporting;
            return this.getSVG(l({chart: {borderRadius: 0}}, e.chartOptions, b, {
                exporting: {
                    sourceWidth: a && a.sourceWidth || e.sourceWidth,
                    sourceHeight: a && a.sourceHeight || e.sourceHeight
                }
            }))
        }, exportChart: function (a, b) {
            var e = this.getSVGForExport(a, b), a = l(this.options.exporting, a);
            f.post(a.url, {
                filename: a.filename || "chart", type: a.type, width: a.width || 0, scale: a.scale ||
                2, svg: e
            }, a.formAttributes)
        }, print: function () {
            var a = this, b = a.container, e = [], c = b.parentNode, f = k.body, j = f.childNodes, h = a.options.exporting.printMaxWidth, d, m, n;
            if (!a.isPrinting) {
                a.isPrinting = !0;
                a.pointer.reset(null, 0);
                E(a, "beforePrint");
                if (n = h && a.chartWidth > h)d = a.hasUserSize, m = [a.chartWidth, a.chartHeight, !1], a.setSize(h, a.chartHeight, !1);
                q(j, function (a, b) {
                    if (a.nodeType === 1)e[b] = a.style.display, a.style.display = "none"
                });
                f.appendChild(b);
                t.focus();
                t.print();
                setTimeout(function () {
                    c.appendChild(b);
                    q(j, function (a,
                                   b) {
                        if (a.nodeType === 1)a.style.display = e[b]
                    });
                    a.isPrinting = !1;
                    if (n)a.setSize.apply(a, m), a.hasUserSize = d;
                    E(a, "afterPrint")
                }, 1E3)
            }
        }, contextMenu: function (a, b, e, c, f, j, h) {
            var d = this, m = d.options.navigation, n = m.menuItemStyle, o = d.chartWidth, p = d.chartHeight, l = "cache-" + a, i = d[l], w = G(f, j), y, z, t, u = function (b) {
                d.pointer.inClass(b.target, a) || z()
            };
            if (!i)d[l] = i = s("div", {className: a}, {
                position: "absolute",
                zIndex: 1E3,
                padding: w + "px"
            }, d.container), y = s("div", null, r({
                MozBoxShadow: "3px 3px 10px #888", WebkitBoxShadow: "3px 3px 10px #888",
                boxShadow: "3px 3px 10px #888"
            }, m.menuStyle), i), z = function () {
                x(i, {display: "none"});
                h && h.setState(0);
                d.openMenu = !1
            }, v(i, "mouseleave", function () {
                t = setTimeout(z, 500)
            }), v(i, "mouseenter", function () {
                clearTimeout(t)
            }), v(k, "mouseup", u), v(d, "destroy", function () {
                D(k, "mouseup", u)
            }), q(b, function (a) {
                if (a) {
                    var b = a.separator ? s("hr", null, null, y) : s("div", {
                        onmouseover: function () {
                            x(this, m.menuItemHoverStyle)
                        }, onmouseout: function () {
                            x(this, n)
                        }, onclick: function (b) {
                            b && b.stopPropagation();
                            z();
                            a.onclick && a.onclick.apply(d,
                                arguments)
                        }, innerHTML: a.text || d.options.lang[a.textKey]
                    }, r({cursor: "pointer"}, n), y);
                    d.exportDivElements.push(b)
                }
            }), d.exportDivElements.push(y, i), d.exportMenuWidth = i.offsetWidth, d.exportMenuHeight = i.offsetHeight;
            b = {display: "block"};
            e + d.exportMenuWidth > o ? b.right = o - e - f - w + "px" : b.left = e - w + "px";
            c + j + d.exportMenuHeight > p && h.alignOptions.verticalAlign !== "top" ? b.bottom = p - c - w + "px" : b.top = c + j - w + "px";
            x(i, b);
            d.openMenu = !0
        }, addButton: function (a) {
            var b = this, e = b.renderer, c = l(b.options.navigation.buttonOptions, a), g =
                c.onclick, j = c.menuItems, h, d, m = {
                stroke: c.symbolStroke,
                fill: c.symbolFill
            }, n = c.symbolSize || 12;
            if (!b.btnCount)b.btnCount = 0;
            if (!b.exportDivElements)b.exportDivElements = [], b.exportSVGElements = [];
            if (c.enabled !== !1) {
                var o = c.theme, p = o.states, k = p && p.hover, p = p && p.select, i;
                delete o.states;
                g ? i = function (a) {
                    a.stopPropagation();
                    g.call(b, a)
                } : j && (i = function () {
                    b.contextMenu(d.menuClassName, j, d.translateX, d.translateY, d.width, d.height, d);
                    d.setState(2)
                });
                c.text && c.symbol ? o.paddingLeft = f.pick(o.paddingLeft, 25) : c.text ||
                r(o, {width: c.width, height: c.height, padding: 0});
                d = e.button(c.text, 0, 0, i, o, k, p).attr({
                    title: b.options.lang[c._titleKey],
                    "stroke-linecap": "round",
                    zIndex: 3
                });
                d.menuClassName = a.menuClassName || "highcharts-menu-" + b.btnCount++;
                c.symbol && (h = e.symbol(c.symbol, c.symbolX - n / 2, c.symbolY - n / 2, n, n).attr(r(m, {
                    "stroke-width": c.symbolStrokeWidth || 1,
                    zIndex: 1
                })).add(d));
                d.add().align(r(c, {width: d.width, x: f.pick(c.x, B)}), !0, "spacingBox");
                B += (d.width + c.buttonSpacing) * (c.align === "right" ? -1 : 1);
                b.exportSVGElements.push(d, h)
            }
        },
        destroyExport: function (a) {
            var a = a.target, b, e;
            for (b = 0; b < a.exportSVGElements.length; b++)if (e = a.exportSVGElements[b])e.onclick = e.ontouchstart = null, a.exportSVGElements[b] = e.destroy();
            for (b = 0; b < a.exportDivElements.length; b++)e = a.exportDivElements[b], D(e, "mouseleave"), a.exportDivElements[b] = e.onmouseout = e.onmouseover = e.ontouchstart = e.onclick = null, u(e)
        }
    });
    I.menu = function (a, b, e, c) {
        return ["M", a, b + 2.5, "L", a + e, b + 2.5, "M", a, b + c / 2 + 0.5, "L", a + e, b + c / 2 + 0.5, "M", a, b + c - 1.5, "L", a + e, b + c - 1.5]
    };
    C.prototype.callbacks.push(function (a) {
        var b,
            e = a.options.exporting, c = e.buttons;
        B = 0;
        if (e.enabled !== !1) {
            for (b in c)a.addButton(c[b]);
            v(a, "destroy", a.destroyExport)
        }
    })
});
