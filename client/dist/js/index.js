!function (a, b) {
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)
            throw new Error('jQuery requires a window with a document');
        return b(a);
    } : b(a);
}('undefined' != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = '2.1.1', n = function (a, b) {
            return new n.fn.init(a, b);
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase();
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: '',
        length: 0,
        toArray: function () {
            return d.call(this);
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function (a, b) {
            return n.each(this, a, b);
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ('boolean' == typeof g && (j = g, g = arguments[h] || {}, h++), 'object' == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: 'jQuery' + (m + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (a) {
            throw new Error(a);
        },
        noop: function () {
        },
        isFunction: function (a) {
            return 'function' === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window;
        },
        isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) >= 0;
        },
        isPlainObject: function (a) {
            return 'object' !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, 'isPrototypeOf') ? !1 : !0;
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a)
                return !1;
            return !0;
        },
        type: function (a) {
            return null == a ? a + '' : 'object' == typeof a || 'function' == typeof a ? h[i.call(a)] || 'object' : typeof a;
        },
        globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf('use strict') ? (b = l.createElement('script'), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function (a) {
            return a.replace(p, 'ms-').replace(q, r);
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1)
                            break;
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1)
                            break;
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break;
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break;
            return a;
        },
        trim: function (a) {
            return null == a ? '' : (a + '').replace(o, '');
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, 'string' == typeof a ? [a] : a) : f.call(c, a)), c;
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return 'string' == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: k
    }), n.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
        h['[object ' + b + ']'] = b.toLowerCase();
    });
    function s(a) {
        var b = a.length, c = n.type(a);
        return 'function' === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' == typeof b && b > 0 && b - 1 in a;
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = 'sizzle' + -new Date(), v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
                return a === b && (l = !0), 0;
            }, C = 'undefined', D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a)
                        return b;
                return -1;
            }, L = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', M = '[\\x20\\t\\r\\n\\f]', N = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', O = N.replace('w', 'w#'), P = '\\[' + M + '*(' + N + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + O + '))|)' + M + '*\\]', Q = ':(' + N + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + P + ')*)|.*)\\)|)', R = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'), S = new RegExp('^' + M + '*,' + M + '*'), T = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'), U = new RegExp('=' + M + '*([^\\]\'"]*?)' + M + '*\\]', 'g'), V = new RegExp(Q), W = new RegExp('^' + O + '$'), X = {
                ID: new RegExp('^#(' + N + ')'),
                CLASS: new RegExp('^\\.(' + N + ')'),
                TAG: new RegExp('^(' + N.replace('w', 'w*') + ')'),
                ATTR: new RegExp('^' + P),
                PSEUDO: new RegExp('^' + Q),
                CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
                bool: new RegExp('^(?:' + L + ')$', 'i'),
                needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'), db = function (a, b, c) {
                var d = '0x' + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
        } catch (eb) {
            I = {
                apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b));
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1;
                }
            };
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || 'string' != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h), d;
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h), d;
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return I.apply(d, b.getElementsByClassName(j)), d;
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && 'object' !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute('id')) ? s = r.replace(bb, '\\$&') : b.setAttribute('id', s), s = '[id=\'' + s + '\'] ', l = o.length;
                        while (l--)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(',');
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)), d;
                        } catch (y) {
                        } finally {
                            r || b.removeAttribute('id');
                        }
                }
            }
            return i(a.replace(R, '$1'), b, d, e);
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + ' ') > d.cacheLength && delete b[a.shift()], b[c + ' '] = e;
            }
            return b;
        }
        function hb(a) {
            return a[u] = !0, a;
        }
        function ib(a) {
            var b = n.createElement('div');
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function jb(a, b) {
            var c = a.split('|'), e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b;
        }
        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1;
        }
        function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return 'input' === c && b.type === a;
            };
        }
        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ('input' === c || 'button' === c) && b.type === a;
            };
        }
        function nb(a) {
            return hb(function (b) {
                return b = +b, hb(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a;
        }
        c = fb.support = {}, f = fb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? 'HTML' !== b.nodeName : !1;
        }, m = fb.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener('unload', function () {
                m();
            }, !1) : g.attachEvent && g.attachEvent('onunload', function () {
                m();
            })), c.attributes = ib(function (a) {
                return a.className = 'i', !a.getAttribute('className');
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment('')), !a.getElementsByTagName('*').length;
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                return a.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', a.firstChild.className = 'i', 2 === a.getElementsByClassName('i').length;
            }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute('id') === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode('id');
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0;
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ('*' === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                a.innerHTML = '<select msallowclip=\'\'><option selected=\'\'></option></select>', a.querySelectorAll('[msallowclip^=\'\']').length && q.push('[*^$]=' + M + '*(?:\'\'|"")'), a.querySelectorAll('[selected]').length || q.push('\\[' + M + '*(?:value|' + L + ')'), a.querySelectorAll(':checked').length || q.push(':checked');
            }), ib(function (a) {
                var b = e.createElement('input');
                b.setAttribute('type', 'hidden'), a.appendChild(b).setAttribute('name', 'D'), a.querySelectorAll('[name=d]').length && q.push('name' + M + '*[*^$|!~]?='), a.querySelectorAll(':enabled').length || q.push(':enabled', ':disabled'), a.querySelectorAll('*,:x'), q.push(',.*:');
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, 'div'), s.call(a, '[s!=\'\']:x'), r.push('!=', Q);
            }), q = q.length && new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1;
            }, B = b ? function (a, b) {
                if (a === b)
                    return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b)
                    return l = !0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g)
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)
                    return kb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, e) : n;
        }, fb.matches = function (a, b) {
            return fb(a, null, null, b);
        }, fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, '=\'$1\']'), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d;
                } catch (e) {
                }
            return fb(b, n, null, [a]).length > 0;
        }, fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, fb.error = function (a) {
            throw new Error('Syntax error, unrecognized expression: ' + a);
        }, fb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = fb.getText = function (a) {
            var b, c = '', d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ('string' == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a);
                } else if (3 === f || 4 === f)
                    return a.nodeValue;
            } else
                while (b = a[d++])
                    c += e(b);
            return c;
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                '>': {
                    dir: 'parentNode',
                    first: !0
                },
                ' ': { dir: 'parentNode' },
                '+': {
                    dir: 'previousSibling',
                    first: !0
                },
                '~': { dir: 'previousSibling' }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || '').replace(cb, db), '~=' === a[2] && (a[3] = ' ' + a[3] + ' '), a.slice(0, 4);
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), 'nth' === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ('even' === a[3] || 'odd' === a[3])), a[5] = +(a[7] + a[8] || 'odd' === a[3])) : a[3] && fb.error(a[0]), a;
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return '*' === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function (a) {
                    var b = y[a + ' '];
                    return b || (b = new RegExp('(^|' + M + ')' + a + '(' + M + '|$)')) && y(a, function (a) {
                        return b.test('string' == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute('class') || '');
                    });
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);
                        return null == e ? '!=' === b : b ? (e += '', '=' === b ? e === c : '!=' === b ? e !== c : '^=' === b ? c && 0 === e.indexOf(c) : '*=' === b ? c && e.indexOf(c) > -1 : '$=' === b ? c && e.slice(-c.length) === c : '~=' === b ? (' ' + e + ' ').indexOf(c) > -1 : '|=' === b ? e === c || e.slice(0, c.length + 1) === c + '-' : !1) : !0;
                    };
                },
                CHILD: function (a, b, c, d, e) {
                    var f = 'nth' !== a.slice(0, 3), g = 'last' !== a.slice(-4), h = 'of-type' === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? 'nextSibling' : 'previousSibling', q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = 'only' === a && !o && 'nextSibling';
                                }
                                return !0;
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [
                                            w,
                                            n,
                                            m
                                        ];
                                        break;
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [
                                            w,
                                            m
                                        ]), l === b))
                                        break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error('unsupported pseudo: ' + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [
                        a,
                        a,
                        '',
                        b
                    ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: hb(function (a) {
                    var b = [], c = [], d = h(a.replace(R, '$1'));
                    return d[u] ? hb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }),
                has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0;
                    };
                }),
                contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: hb(function (a) {
                    return W.test(a || '') || fb.error('unsupported lang: ' + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang'))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + '-');
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function (a) {
                    return a === o;
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function (a) {
                    return a.disabled === !1;
                },
                disabled: function (a) {
                    return a.disabled === !0;
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return 'input' === b && !!a.checked || 'option' === b && !!a.selected;
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0;
                },
                parent: function (a) {
                    return !d.pseudos.empty(a);
                },
                header: function (a) {
                    return Z.test(a.nodeName);
                },
                input: function (a) {
                    return Y.test(a.nodeName);
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return 'input' === b && 'button' === a.type || 'button' === b;
                },
                text: function (a) {
                    var b;
                    return 'input' === a.nodeName.toLowerCase() && 'text' === a.type && (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase());
                },
                first: nb(function () {
                    return [0];
                }),
                last: nb(function (a, b) {
                    return [b - 1];
                }),
                eq: nb(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }),
                even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a;
                }),
                odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a;
                }),
                lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)
                        a.push(d);
                    return a;
                }),
                gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)
                        a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
            d.pseudos[b] = lb(b);
        for (b in {
                submit: !0,
                reset: !0
            })
            d.pseudos[b] = mb(b);
        function pb() {
        }
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb(), g = fb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + ' '];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, ' ')
                }), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                if (!c)
                    break;
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
        };
        function qb(a) {
            for (var b = 0, c = a.length, d = ''; c > b; b++)
                d += a[b].value;
            return d;
        }
        function rb(a, b, c) {
            var d = b.dir, e = c && 'parentNode' === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f);
            } : function (b, c, g) {
                var h, i, j = [
                        w,
                        f
                    ];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0;
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))
                                return !0;
                        }
            };
        }
        function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0;
            } : a[0];
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c;
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g;
        }
        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || '*', h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else
                    r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
            });
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g ? 1 : 0, k = rb(function (a) {
                        return a === b;
                    }, h, !0), l = rb(function (a) {
                        return K.call(b, a) > -1;
                    }, h, !0), m = [function (a, c, d) {
                            return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        }]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: ' ' === a[i - 2].type ? '*' : '' })).replace(R, '$1'), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
                    }
                    m.push(c);
                }
            return sb(m);
        }
        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                    var l, m, o, p = 0, q = '0', r = f && [], s = [], t = j, u = f || e && d.find.TAG('*', k), v = w += null == t ? 1 : Math.random() || 0.1, x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break;
                                }
                            k && (w = v);
                        }
                        c && ((l = !o && l) && p--, f && r.push(l));
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++])
                            o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--)
                                    r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s);
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
                    }
                    return k && (w = v, j = t), r;
                };
            return c ? hb(f) : f;
        }
        return h = fb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + ' '];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)
                    f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a;
            }
            return f;
        }, i = fb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = 'function' == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && 'ID' === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
                        return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a)
                            return I.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
        }, c.sortStable = u.split('').sort(B).join('') === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement('div'));
        }), ib(function (a) {
            return a.innerHTML = '<a href=\'#\'></a>', '#' === a.firstChild.getAttribute('href');
        }) || jb('type|href|height|width', function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ib(function (a) {
            return a.innerHTML = '<input/>', a.firstChild.setAttribute('value', ''), '' === a.firstChild.getAttribute('value');
        }) || jb('value', function (a, b, c) {
            return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ib(function (a) {
            return null == a.getAttribute('disabled');
        }) || jb(L, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), fb;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[':'] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        if (b.nodeType)
            return n.grep(a, function (a) {
                return a === b !== c;
            });
        if ('string' == typeof b) {
            if (w.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ':not(' + a + ')'), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ('string' != typeof a)
                return this.pushStack(n(a).filter(function () {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0;
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + ' ' + a : a, d;
        },
        filter: function (a) {
            return this.pushStack(x(this, a || [], !1));
        },
        not: function (a) {
            return this.pushStack(x(this, a || [], !0));
        },
        is: function (a) {
            return !!x(this, 'string' == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
            var c, d;
            if (!a)
                return this;
            if ('string' == typeof a) {
                if (c = '<' === a[0] && '>' === a[a.length - 1] && a.length >= 3 ? [
                        null,
                        a,
                        null
                    ] : z.exec(a), !c || !c[1] && b)
                    return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b)
                            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this;
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? 'undefined' != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c))
                        break;
                    d.push(a);
                }
            return d;
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0;
            });
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || 'string' != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f);
        },
        index: function (a) {
            return a ? 'string' == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a;
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
            return n.dir(a, 'parentNode');
        },
        parentsUntil: function (a, b, c) {
            return n.dir(a, 'parentNode', c);
        },
        next: function (a) {
            return D(a, 'nextSibling');
        },
        prev: function (a) {
            return D(a, 'previousSibling');
        },
        nextAll: function (a) {
            return n.dir(a, 'nextSibling');
        },
        prevAll: function (a) {
            return n.dir(a, 'previousSibling');
        },
        nextUntil: function (a, b, c) {
            return n.dir(a, 'nextSibling', c);
        },
        prevUntil: function (a, b, c) {
            return n.dir(a, 'previousSibling', c);
        },
        siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
            return n.sibling(a.firstChild);
        },
        contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return 'Until' !== a.slice(-5) && (d = c), d && 'string' == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }
    n.Callbacks = function (a) {
        a = 'string' == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break;
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
            }, k = {
                add: function () {
                    if (h) {
                        var c = h.length;
                        !function g(b) {
                            n.each(b, function (b, c) {
                                var d = n.type(c);
                                'function' === d ? a.unique && k.has(c) || h.push(c) : c && c.length && 'string' !== d && g(c);
                            });
                        }(arguments), d ? f = h.length : b && (e = c, j(b));
                    }
                    return this;
                },
                remove: function () {
                    return h && n.each(arguments, function (a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1)
                            h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                    }), this;
                },
                has: function (a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
                },
                empty: function () {
                    return h = [], f = 0, this;
                },
                disable: function () {
                    return h = i = b = void 0, this;
                },
                disabled: function () {
                    return !h;
                },
                lock: function () {
                    return i = void 0, b || k.disable(), this;
                },
                locked: function () {
                    return !i;
                },
                fireWith: function (a, b) {
                    return !h || c && !i || (b = b || [], b = [
                        a,
                        b.slice ? b.slice() : b
                    ], d ? i.push(b) : j(b)), this;
                },
                fire: function () {
                    return k.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!c;
                }
            };
        return k;
    }, n.extend({
        Deferred: function (a) {
            var b = [
                    [
                        'resolve',
                        'done',
                        n.Callbacks('once memory'),
                        'resolved'
                    ],
                    [
                        'reject',
                        'fail',
                        n.Callbacks('once memory'),
                        'rejected'
                    ],
                    [
                        'notify',
                        'progress',
                        n.Callbacks('memory')
                    ]
                ], c = 'pending', d = {
                    state: function () {
                        return c;
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this;
                    },
                    then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + 'With'](this === d ? c.promise() : this, g ? [a] : arguments);
                                });
                            }), a = null;
                        }).promise();
                    },
                    promise: function (a) {
                        return null != a ? n.extend(a, d) : d;
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + 'With'](this === e ? d : this, arguments), this;
                }, e[f[0] + 'With'] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                    };
                }, i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler('ready'), n(l).off('ready'))));
        }
    });
    function I() {
        l.removeEventListener('DOMContentLoaded', I, !1), a.removeEventListener('load', I, !1), n.ready();
    }
    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), 'complete' === l.readyState ? setTimeout(n.ready) : (l.addEventListener('DOMContentLoaded', I, !1), a.addEventListener('load', I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ('object' === n.type(c)) {
            e = !0;
            for (h in c)
                n.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c);
            })), b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {};
            }
        }), this.expando = n.expando + Math.random();
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = { value: c }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ('string' == typeof b)
                f[b] = c;
            else if (n.isEmptyObject(f))
                n.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f;
        },
        get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function (a, b, c) {
            var d;
            return void 0 === b || b && 'string' == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [
                    b,
                    e
                ] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)
                    delete g[d[c]];
            }
        },
        hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = 'data-' + b.replace(O, '-$1').toLowerCase(), c = a.getAttribute(d), 'string' == typeof c) {
                try {
                    c = 'true' === c ? !0 : 'false' === c ? !1 : 'null' === c ? null : +c + '' === c ? +c : N.test(c) ? n.parseJSON(c) : c;
                } catch (e) {
                }
                M.set(a, b, c);
            } else
                c = void 0;
        return c;
    }
    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function (a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function (a, b) {
            M.remove(a, b);
        },
        _data: function (a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function (a, b) {
            L.remove(a, b);
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, 'hasDataAttrs'))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, 'hasDataAttrs', !0);
                }
                return e;
            }
            return 'object' == typeof a ? this.each(function () {
                M.set(this, a);
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)
                        return c;
                    if (c = M.get(f, d), void 0 !== c)
                        return c;
                    if (c = P(f, d, void 0), void 0 !== c)
                        return c;
                } else
                    this.each(function () {
                        var c = M.get(this, d);
                        M.set(this, d, b), -1 !== a.indexOf('-') && void 0 !== c && M.set(this, a, b);
                    });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function (a) {
            return this.each(function () {
                M.remove(this, a);
            });
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || 'fx') + 'queue', d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
        },
        dequeue: function (a, b) {
            b = b || 'fx';
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                    n.dequeue(a, b);
                };
            'inprogress' === e && (e = c.shift(), d--), e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function (a, b) {
            var c = b + 'queueHooks';
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks('once memory').add(function () {
                    L.remove(a, [
                        b + 'queue',
                        c
                    ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return 'string' != typeof a && (b = a, a = 'fx', c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), 'fx' === a && 'inprogress' !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a);
            });
        },
        clearQueue: function (a) {
            return this.queue(a || 'fx', []);
        },
        promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                    --d || e.resolveWith(f, [f]);
                };
            'string' != typeof a && (b = a, a = void 0), a = a || 'fx';
            while (g--)
                c = L.get(f[g], a + 'queueHooks'), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [
            'Top',
            'Right',
            'Bottom',
            'Left'
        ], S = function (a, b) {
            return a = b || a, 'none' === n.css(a, 'display') || !n.contains(a.ownerDocument, a);
        }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement('div')), c = l.createElement('input');
        c.setAttribute('type', 'radio'), c.setAttribute('checked', 'checked'), c.setAttribute('name', 't'), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = '<textarea>x</textarea>', k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = 'undefined';
    k.focusinBubbles = 'onfocusin' in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {
        }
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || '').match(E) || [''], j = b.length;
                while (j--)
                    h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join('.')
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || '').match(E) || [''], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), g = f = m.length;
                        while (f--)
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ('**' !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, 'events'));
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, 'type') ? b.type : b, r = j.call(b, 'namespace') ? b.namespace.split('.') : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf('.') >= 0 && (r = q.split('.'), q = r.shift(), r.sort()), k = q.indexOf(':') < 0 && 'on' + q, b = b[n.expando] ? b : new n.Event(q, 'object' == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + r.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                        p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())
                    b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, 'events') || {})[b.type] && L.get(g, 'handle'), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, 'events') || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || 'click' !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || 'click' !== a.type) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + ' ', void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        });
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
        fixHooks: {},
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
            }
        },
        mouseHooks: {
            props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function (a) {
            if (a[n.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)
                c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: 'focusin'
            },
            blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: 'focusout'
            },
            click: {
                trigger: function () {
                    return 'checkbox' === this.type && this.click && n.nodeName(this, 'input') ? (this.click(), !1) : void 0;
                },
                _default: function (a) {
                    return n.nodeName(a.target, 'a');
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
        }
    }, n.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            }
        };
    }), k.focusinBubbles || n.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            },
            teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            }
        };
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ('object' == typeof a) {
                'string' != typeof b && (c = c || b, b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ('string' == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
                d = $;
            else if (!d)
                return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b);
            });
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler), this;
            if ('object' == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || 'function' == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
            option: [
                1,
                '<select multiple=\'multiple\'>',
                '</select>'
            ],
            thead: [
                1,
                '<table>',
                '</table>'
            ],
            col: [
                2,
                '<table><colgroup>',
                '</colgroup></table>'
            ],
            tr: [
                2,
                '<table><tbody>',
                '</tbody></table>'
            ],
            td: [
                3,
                '<table><tbody><tr>',
                '</tr></tbody></table>'
            ],
            _default: [
                0,
                '',
                ''
            ]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    function jb(a, b) {
        return n.nodeName(a, 'table') && n.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a;
    }
    function kb(a) {
        return a.type = (null !== a.getAttribute('type')) + '/' + a.type, a;
    }
    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute('type'), a;
    }
    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            L.set(a[c], 'globalEval', !b || L.get(b[c], 'globalEval'));
    }
    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c]);
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }
    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || '*') : a.querySelectorAll ? a.querySelectorAll(b || '*') : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
    }
    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        'input' === c && T.test(a.type) ? b.checked = a.checked : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue);
    }
    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
                    pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
                        nb(f[d], g[d]);
                else
                    nb(a, h);
            return g = ob(h, 'script'), g.length > 0 && mb(g, !i && ob(a, 'script')), h;
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ('object' === n.type(e))
                        n.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                        f = f || k.appendChild(b.createElement('div')), g = (bb.exec(e) || [
                            '',
                            ''
                        ])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, '<$1></$2>') + h[2], j = h[0];
                        while (j--)
                            f = f.lastChild;
                        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = '';
                    } else
                        l.push(b.createTextNode(e));
            k.textContent = '', m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), 'script'), i && mb(f), c)) {
                    j = 0;
                    while (e = f[j++])
                        fb.test(e.type || '') && c.push(e);
                }
            return k;
        },
        cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e];
                }
                delete M.cache[c[M.expando]];
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, 'script')), c.parentNode.removeChild(c));
            return this;
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = '');
            return this;
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b);
            });
        },
        html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ('string' == typeof a && !db.test(a) && !ib[(bb.exec(a) || [
                        '',
                        ''
                    ])[1].toLowerCase()]) {
                    a = a.replace(ab, '<$1></$2>');
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0;
                    } catch (e) {
                    }
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function (a) {
            return this.remove(a, !0);
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && 'string' == typeof p && !k.checkClone && eb.test(p))
                return this.each(function (c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, 'script'), kb), g = f.length; l > j; j++)
                    h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, 'script'))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)
                        h = f[j], fb.test(h.type || '') && !L.access(h, 'globalEval') && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, '')));
            }
            return this;
        }
    }), n.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var qb, rb = {};
    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], 'display');
        return e.detach(), f;
    }
    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), 'none' !== c && c || (qb = (qb || n('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c;
    }
    var ub = /^margin/, vb = new RegExp('^(' + Q + ')(?!px)[a-z%]+$', 'i'), wb = function (a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null);
        };
    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ('' !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + '' : g;
    }
    function yb(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function () {
        var b, c, d = l.documentElement, e = l.createElement('div'), f = l.createElement('div');
        if (f.style) {
            f.style.backgroundClip = 'content-box', f.cloneNode(!0).style.backgroundClip = '', k.clearCloneStyle = 'content-box' === f.style.backgroundClip, e.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute', e.appendChild(f);
            function g() {
                f.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', f.innerHTML = '', d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = '1%' !== g.top, c = '4px' === g.width, d.removeChild(e);
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b;
                },
                boxSizingReliable: function () {
                    return null == c && g(), c;
                },
                reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement('div'));
                    return c.style.cssText = f.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', c.style.marginRight = c.style.width = '0', f.style.width = '1px', d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b;
                }
            });
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e;
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp('^(' + Q + ')(.*)$', 'i'), Bb = new RegExp('^([+-])=(' + Q + ')', 'i'), Cb = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        }, Db = {
            letterSpacing: '0',
            fontWeight: '400'
        }, Eb = [
            'Webkit',
            'O',
            'Moz',
            'ms'
        ];
    function Fb(a, b) {
        if (b in a)
            return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--)
            if (b = Eb[e] + c, b in a)
                return b;
        return d;
    }
    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
    }
    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2)
            'margin' === c && (g += n.css(a, c + R[f], !0, e)), d ? ('content' === c && (g -= n.css(a, 'padding' + R[f], !0, e)), 'margin' !== c && (g -= n.css(a, 'border' + R[f] + 'Width', !0, e))) : (g += n.css(a, 'padding' + R[f], !0, e), 'padding' !== c && (g += n.css(a, 'border' + R[f] + 'Width', !0, e)));
        return g;
    }
    function Ib(a, b, c) {
        var d = !0, e = 'width' === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = 'border-box' === n.css(a, 'boxSizing', !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Hb(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
    }
    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = L.get(d, 'olddisplay'), c = d.style.display, b ? (f[g] || 'none' !== c || (d.style.display = ''), '' === d.style.display && S(d) && (f[g] = L.access(d, 'olddisplay', tb(d.nodeName)))) : (e = S(d), 'none' === c && e || L.set(d, 'olddisplay', e ? c : n.css(d, 'display'))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = b ? f[g] || '' : 'none'));
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xb(a, 'opacity');
                        return '' === c ? '1' : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: { 'float': 'cssFloat' },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 'string' === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = 'number'), null != c && c === c && ('number' !== f || n.cssNumber[h] || (c += 'px'), k.clearCloneStyle || '' !== c || 0 !== b.indexOf('background') || (i[b] = 'inherit'), g && 'set' in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && 'get' in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), 'normal' === e && b in Db && (e = Db[b]), '' === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
        }
    }), n.each([
        'height',
        'width'
    ], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? zb.test(n.css(a, 'display')) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
                    return Ib(a, b, d);
                }) : Ib(a, b, d) : void 0;
            },
            set: function (a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, 'border-box' === n.css(a, 'boxSizing', !1, e), e) : 0);
            }
        };
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, { display: 'inline-block' }, xb, [
            a,
            'marginRight'
        ]) : void 0;
    }), n.each({
        margin: '',
        padding: '',
        border: 'Width'
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c]; 4 > d; d++)
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function () {
            return Jb(this, !0);
        },
        hide: function () {
            return Jb(this);
        },
        toggle: function (a) {
            return 'boolean' == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide();
            });
        }
    });
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e);
    }
    n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || 'swing', this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? '' : 'px');
        },
        cur: function () {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
        },
        run: function (a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this;
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ''), b && 'auto' !== b ? b : 0) : a.elem[a.prop];
            },
            set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function (a) {
            return a;
        },
        swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2;
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp('^(?:([+-])=|)(' + Q + ')([a-z%]*)$', 'i'), Pb = /queueHooks$/, Qb = [Vb], Rb = {
            '*': [function (a, b) {
                    var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? '' : 'px'), g = (n.cssNumber[a] || 'px' !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do
                            h = h || '.5', g /= h, n.style(c.elem, a, g + f);
                        while (h !== (h = c.cur() / d) && 1 !== h && --i);
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
                }]
        };
    function Sb() {
        return setTimeout(function () {
            Lb = void 0;
        }), Lb = n.now();
    }
    function Tb(a, b) {
        var c, d = 0, e = { height: a };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = R[d], e['margin' + c] = e['padding' + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb['*']), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d;
    }
    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, 'fxshow');
        c.queue || (h = n._queueHooks(a, 'fx'), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i();
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, 'fx').length || h.empty.fire();
            });
        })), 1 === a.nodeType && ('height' in b || 'width' in b) && (c.overflow = [
            o.overflow,
            o.overflowX,
            o.overflowY
        ], j = n.css(a, 'display'), k = 'none' === j ? L.get(a, 'olddisplay') || tb(a.nodeName) : j, 'inline' === k && 'none' === n.css(a, 'float') && (o.display = 'inline-block')), c.overflow && (o.overflow = 'hidden', l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b)
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || 'toggle' === e, e === (p ? 'hide' : 'show')) {
                    if ('show' !== e || !q || void 0 === q[d])
                        continue;
                    p = !0;
                }
                m[d] = q && q[d] || n.style(a, d);
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            'inline' === ('none' === j ? tb(a.nodeName) : j) && (o.display = j);
        else {
            q ? 'hidden' in q && (p = q.hidden) : q = L.access(a, 'fxshow', {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide();
            }), l.done(function () {
                var b;
                L.remove(a, 'fxshow');
                for (b in m)
                    n.style(a, b, m[b]);
            });
            for (d in m)
                g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = 'width' === d || 'height' === d ? 1 : 0));
        }
    }
    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && 'expand' in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e);
            } else
                b[d] = e;
    }
    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () {
                delete i.elem;
            }), i = function () {
                if (e)
                    return !1;
                for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                    j.tweens[g].run(f);
                return h.notifyWith(a, [
                    j,
                    f,
                    c
                ]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
            }, j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Lb || Sb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0, d = b ? j.tweens.length : 0;
                    if (e)
                        return this;
                    for (e = !0; d > c; c++)
                        j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [
                        j,
                        b
                    ]) : h.rejectWith(a, [
                        j,
                        b
                    ]), this;
                }
            }), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)
            if (d = Qb[f].call(j, a, k, j.opts))
                return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(Xb, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ['*']) : a = a.split(' ');
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
        },
        prefilter: function (a, b) {
            b ? Qb.unshift(a) : Qb.push(a);
        }
    }), n.speed = function (a, b, c) {
        var d = a && 'object' == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = 'fx'), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css('opacity', 0).show().end().animate({ opacity: b }, a, c, d);
        },
        animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                    var b = Xb(this, n.extend({}, a), f);
                    (e || L.get(this, 'finish')) && b.stop(!0);
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return 'string' != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || 'fx', []), this.each(function () {
                var b = !0, e = null != a && a + 'queueHooks', f = n.timers, g = L.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;)
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a);
            });
        },
        finish: function (a) {
            return a !== !1 && (a = a || 'fx'), this.each(function () {
                var b, c = L.get(this), d = c[a + 'queue'], e = c[a + 'queueHooks'], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([
        'toggle',
        'show',
        'hide'
    ], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || 'boolean' == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Tb('show'),
        slideUp: Tb('hide'),
        slideToggle: Tb('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0;
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function () {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function () {
        clearInterval(Mb), Mb = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || 'fx', this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d);
            };
        });
    }, function () {
        var a = l.createElement('input'), b = l.createElement('select'), c = b.appendChild(l.createElement('option'));
        a.type = 'checkbox', k.checkOn = '' !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement('input'), a.value = 't', a.type = 'radio', k.radioValue = 't' === a.value;
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && 'get' in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ''), c) : void n.removeAttr(a, b));
        },
        removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && 'radio' === b && n.nodeName(a, 'input')) {
                        var c = a.value;
                        return a.setAttribute('type', b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), Zb = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function (a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e;
        };
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        propFix: {
            'for': 'htmlFor',
            'class': 'className'
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && 'get' in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute('tabindex') || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), n.each([
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
    ], function () {
        n.propFix[this.toLowerCase()] = this;
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 'string' == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).addClass(a.call(this, b, this.className));
                });
            if (h)
                for (b = (a || '').match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ac, ' ') : ' ')) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
                        g = n.trim(d), c.className !== g && (c.className = g);
                    }
            return this;
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || 'string' == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).removeClass(a.call(this, b, this.className));
                });
            if (h)
                for (b = (a || '').match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ac, ' ') : '')) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(' ' + e + ' ') >= 0)
                                d = d.replace(' ' + e + ' ', ' ');
                        g = a ? n.trim(d) : '', c.className !== g && (c.className = g);
                    }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return 'boolean' == typeof b && 'string' === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function () {
                if ('string' === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else
                    (c === U || 'boolean' === c) && (this.className && L.set(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : L.get(this, '__className__') || '');
            });
        },
        hasClass: function (a) {
            for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(ac, ' ').indexOf(b) >= 0)
                    return !0;
            return !1;
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a), this.each(function (c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = '' : 'number' == typeof e ? e += '' : n.isArray(e) && (e = n.map(e, function (a) {
                            return null == a ? '' : a + '';
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') || (this.value = e));
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && 'get' in b && void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, 'string' == typeof c ? c.replace(bc, '') : null == c ? '' : c);
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, 'value');
                    return null != b ? b : n.trim(n.text(a));
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = 'select-one' === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) || c.parentNode.disabled && n.nodeName(c.parentNode, 'optgroup'))) {
                            if (b = n(c).val(), f)
                                return b;
                            g.push(b);
                        }
                    return g;
                },
                set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([
        'radio',
        'checkbox'
    ], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute('value') ? 'on' : a.value;
        });
    }), n.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
            return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + '');
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || 'string' != typeof a)
            return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, 'text/xml');
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName('parsererror').length) && n.error('Invalid XML: ' + a), b;
    };
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = '*/'.concat('*');
    try {
        fc = location.href;
    } catch (qc) {
        fc = l.createElement('a'), fc.href = '', fc = fc.href;
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
        return function (b, c) {
            'string' != typeof b && (c = b, b = '*');
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    '+' === d[0] ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function sc(a, b, c, d) {
        var e = {}, f = a === oc;
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return 'string' != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e['*'] && g('*');
    }
    function tc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function uc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ('*' === i[0])
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + ' ' + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ('*' === f)
                    f = i;
                else if ('*' !== i && i !== f) {
                    if (g = j[i + ' ' + f] || j['* ' + f], !g)
                        for (e in j)
                            if (h = e.split(' '), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a['throws'])
                            b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: 'parsererror',
                                    error: g ? l : 'No conversion from ' + i + ' to ' + f
                                };
                            }
                }
        return {
            state: 'success',
            data: b
        };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: 'GET',
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': pc,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
            },
            converters: {
                '* text': String,
                'text html': !0,
                'text json': n.parseJSON,
                'text xml': n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a);
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function (a, b) {
            'object' == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks('once memory'), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = 'canceled', v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = ic.exec(e))
                                    f[b[1].toLowerCase()] = b[2];
                            }
                            b = f[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? e : null;
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this;
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this;
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a)
                                    q[b] = [
                                        q[b],
                                        a[b]
                                    ];
                            else
                                v.always(a[v.status]);
                        return this;
                    },
                    abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this;
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + '').replace(gc, '').replace(lc, ec[1] + '//'), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || '*').toLowerCase().match(E) || [''], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ('http:' === h[1] ? '80' : '443')) === (ec[3] || ('http:' === ec[1] ? '80' : '443')))), k.data && k.processData && 'string' != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)
                return v;
            i = k.global, i && 0 === n.active++ && n.event.trigger('ajaxStart'), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? '&' : '?') + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, '$1_=' + cc++) : d + (dc.test(d) ? '&' : '?') + '_=' + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader('If-Modified-Since', n.lastModified[d]), n.etag[d] && v.setRequestHeader('If-None-Match', n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType), v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ('*' !== k.dataTypes[0] ? ', ' + pc + '; q=0.01' : '') : k.accepts['*']);
            for (j in k.headers)
                v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = 'abort';
            for (j in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                v[j](k[j]);
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1, i && m.trigger('ajaxSend', [
                    v,
                    k
                ]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort('timeout');
                }, k.timeout));
                try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w);
                }
            } else
                x(-1, 'No Transport');
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (n.lastModified[d] = w), w = v.getResponseHeader('etag'), w && (n.etag[d] = w)), 204 === a || 'HEAD' === k.type ? x = 'nocontent' : 304 === a ? x = 'notmodified' : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + '', j ? o.resolveWith(l, [
                    r,
                    x,
                    v
                ]) : o.rejectWith(l, [
                    v,
                    x,
                    s
                ]), v.statusCode(q), q = void 0, i && m.trigger(j ? 'ajaxSuccess' : 'ajaxError', [
                    v,
                    k,
                    j ? r : s
                ]), p.fireWith(l, [
                    v,
                    x
                ]), i && (m.trigger('ajaxComplete', [
                    v,
                    k
                ]), --n.active || n.event.trigger('ajaxStop')));
            }
            return v;
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, 'json');
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, 'script');
        }
    }), n.each([
        'get',
        'post'
    ], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), n.each([
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
    ], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: 'GET',
            dataType: 'script',
            async: !1,
            global: !1,
            'throws': !0
        });
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b));
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, 'body') || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a);
    };
    var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;
    function Bc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function (b, e) {
                c || xc.test(a) ? d(a, e) : Bc(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d);
            });
        else if (c || 'object' !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Bc(a + '[' + e + ']', b[e], c, d);
    }
    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
                b = n.isFunction(b) ? b() : null == b ? '' : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b);
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function () {
                e(this.name, this.value);
            });
        else
            for (c in a)
                Bc(c, a[c], b, e);
        return d.join('&').replace(wc, '+');
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, 'elements');
                return a ? n.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(':disabled') && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a));
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(yc, '\r\n')
                    };
                }) : {
                    name: b.name,
                    value: c.replace(yc, '\r\n')
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest();
        } catch (a) {
        }
    };
    var Cc = 0, Dc = {}, Ec = {
            0: 200,
            1223: 204
        }, Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on('unload', function () {
        for (var a in Dc)
            Dc[a]();
    }), k.cors = !!Fc && 'withCredentials' in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Fc && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, 'abort' === a ? f.abort() : 'error' === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, 'string' == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b('error'), b = Dc[g] = b('abort');
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b)
                        throw h;
                }
            },
            abort: function () {
                b && b();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
            'text script': function (a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter('script', function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET');
    }), n.ajaxTransport('script', function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n('<script>').prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on('load error', c = function (a) {
                        b.remove(), c = null, a && e('error' === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                },
                abort: function () {
                    c && c();
                }
            };
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var a = Gc.pop() || n.expando + '_' + cc++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter('json jsonp', function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? 'url' : 'string' == typeof b.data && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && Hc.test(b.data) && 'data');
        return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, '$1' + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? '&' : '?') + b.jsonp + '=' + e), b.converters['script json'] = function () {
            return g || n.error(e + ' was not called'), g[0];
        }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
        }), 'script') : void 0;
    }), n.parseHTML = function (a, b, c) {
        if (!a || 'string' != typeof a)
            return null;
        'boolean' == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
    };
    var Ic = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ('string' != typeof a && Ic)
            return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(' ');
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && 'object' == typeof b && (e = 'POST'), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: 'html',
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n('<div>').append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function (a, b) {
            g.each(c, f || [
                a.responseText,
                b,
                a
            ]);
        }), this;
    }, n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem;
        }).length;
    };
    var Jc = a.document.documentElement;
    function Kc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, 'position'), l = n(a), m = {};
            'static' === k && (a.style.position = 'relative'), h = l.offset(), f = n.css(a, 'top'), i = n.css(a, 'left'), j = ('absolute' === k || 'fixed' === k) && (f + i).indexOf('auto') > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), 'using' in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function (b) {
                    n.offset.setOffset(this, a, b);
                });
            var b, c, d = this[0], e = {
                    top: 0,
                    left: 0
                }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e;
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {
                        top: 0,
                        left: 0
                    };
                return 'fixed' === n.css(c, 'position') ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], 'html') || (d = a.offset()), d.top += n.css(a[0], 'borderTopWidth', !0), d.left += n.css(a[0], 'borderLeftWidth', !0)), {
                    top: b.top - d.top - n.css(c, 'marginTop', !0),
                    left: b.left - d.left - n.css(c, 'marginLeft', !0)
                };
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Jc;
                while (a && !n.nodeName(a, 'html') && 'static' === n.css(a, 'position'))
                    a = a.offsetParent;
                return a || Jc;
            });
        }
    }), n.each({
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    }, function (b, c) {
        var d = 'pageYOffset' === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each([
        'top',
        'left'
    ], function (a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + 'px' : c) : void 0;
        });
    }), n.each({
        Height: 'height',
        Width: 'width'
    }, function (a, b) {
        n.each({
            padding: 'inner' + a,
            content: b,
            '': 'outer' + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || 'boolean' != typeof d), g = c || (d === !0 || e === !0 ? 'margin' : 'border');
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement['client' + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body['scroll' + a], e['scroll' + a], b.body['offset' + a], e['offset' + a], e['client' + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function () {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, 'function' == typeof define && define.amd && define('jquery', [], function () {
        return n;
    });
    var Lc = a.jQuery, Mc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
});
(function () {
    var n = this, t = n._, r = Array.prototype, e = Object.prototype, u = Function.prototype, i = r.push, a = r.slice, o = r.concat, l = e.toString, c = e.hasOwnProperty, f = Array.isArray, s = Object.keys, p = u.bind, h = function (n) {
            return n instanceof h ? n : this instanceof h ? void (this._wrapped = n) : new h(n);
        };
    'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : n._ = h, h.VERSION = '1.7.0';
    var g = function (n, t, r) {
        if (t === void 0)
            return n;
        switch (null == r ? 3 : r) {
        case 1:
            return function (r) {
                return n.call(t, r);
            };
        case 2:
            return function (r, e) {
                return n.call(t, r, e);
            };
        case 3:
            return function (r, e, u) {
                return n.call(t, r, e, u);
            };
        case 4:
            return function (r, e, u, i) {
                return n.call(t, r, e, u, i);
            };
        }
        return function () {
            return n.apply(t, arguments);
        };
    };
    h.iteratee = function (n, t, r) {
        return null == n ? h.identity : h.isFunction(n) ? g(n, t, r) : h.isObject(n) ? h.matches(n) : h.property(n);
    }, h.each = h.forEach = function (n, t, r) {
        if (null == n)
            return n;
        t = g(t, r);
        var e, u = n.length;
        if (u === +u)
            for (e = 0; u > e; e++)
                t(n[e], e, n);
        else {
            var i = h.keys(n);
            for (e = 0, u = i.length; u > e; e++)
                t(n[i[e]], i[e], n);
        }
        return n;
    }, h.map = h.collect = function (n, t, r) {
        if (null == n)
            return [];
        t = h.iteratee(t, r);
        for (var e, u = n.length !== +n.length && h.keys(n), i = (u || n).length, a = Array(i), o = 0; i > o; o++)
            e = u ? u[o] : o, a[o] = t(n[e], e, n);
        return a;
    };
    var v = 'Reduce of empty array with no initial value';
    h.reduce = h.foldl = h.inject = function (n, t, r, e) {
        null == n && (n = []), t = g(t, e, 4);
        var u, i = n.length !== +n.length && h.keys(n), a = (i || n).length, o = 0;
        if (arguments.length < 3) {
            if (!a)
                throw new TypeError(v);
            r = n[i ? i[o++] : o++];
        }
        for (; a > o; o++)
            u = i ? i[o] : o, r = t(r, n[u], u, n);
        return r;
    }, h.reduceRight = h.foldr = function (n, t, r, e) {
        null == n && (n = []), t = g(t, e, 4);
        var u, i = n.length !== +n.length && h.keys(n), a = (i || n).length;
        if (arguments.length < 3) {
            if (!a)
                throw new TypeError(v);
            r = n[i ? i[--a] : --a];
        }
        for (; a--;)
            u = i ? i[a] : a, r = t(r, n[u], u, n);
        return r;
    }, h.find = h.detect = function (n, t, r) {
        var e;
        return t = h.iteratee(t, r), h.some(n, function (n, r, u) {
            return t(n, r, u) ? (e = n, !0) : void 0;
        }), e;
    }, h.filter = h.select = function (n, t, r) {
        var e = [];
        return null == n ? e : (t = h.iteratee(t, r), h.each(n, function (n, r, u) {
            t(n, r, u) && e.push(n);
        }), e);
    }, h.reject = function (n, t, r) {
        return h.filter(n, h.negate(h.iteratee(t)), r);
    }, h.every = h.all = function (n, t, r) {
        if (null == n)
            return !0;
        t = h.iteratee(t, r);
        var e, u, i = n.length !== +n.length && h.keys(n), a = (i || n).length;
        for (e = 0; a > e; e++)
            if (u = i ? i[e] : e, !t(n[u], u, n))
                return !1;
        return !0;
    }, h.some = h.any = function (n, t, r) {
        if (null == n)
            return !1;
        t = h.iteratee(t, r);
        var e, u, i = n.length !== +n.length && h.keys(n), a = (i || n).length;
        for (e = 0; a > e; e++)
            if (u = i ? i[e] : e, t(n[u], u, n))
                return !0;
        return !1;
    }, h.contains = h.include = function (n, t) {
        return null == n ? !1 : (n.length !== +n.length && (n = h.values(n)), h.indexOf(n, t) >= 0);
    }, h.invoke = function (n, t) {
        var r = a.call(arguments, 2), e = h.isFunction(t);
        return h.map(n, function (n) {
            return (e ? t : n[t]).apply(n, r);
        });
    }, h.pluck = function (n, t) {
        return h.map(n, h.property(t));
    }, h.where = function (n, t) {
        return h.filter(n, h.matches(t));
    }, h.findWhere = function (n, t) {
        return h.find(n, h.matches(t));
    }, h.max = function (n, t, r) {
        var e, u, i = -1 / 0, a = -1 / 0;
        if (null == t && null != n) {
            n = n.length === +n.length ? n : h.values(n);
            for (var o = 0, l = n.length; l > o; o++)
                e = n[o], e > i && (i = e);
        } else
            t = h.iteratee(t, r), h.each(n, function (n, r, e) {
                u = t(n, r, e), (u > a || u === -1 / 0 && i === -1 / 0) && (i = n, a = u);
            });
        return i;
    }, h.min = function (n, t, r) {
        var e, u, i = 1 / 0, a = 1 / 0;
        if (null == t && null != n) {
            n = n.length === +n.length ? n : h.values(n);
            for (var o = 0, l = n.length; l > o; o++)
                e = n[o], i > e && (i = e);
        } else
            t = h.iteratee(t, r), h.each(n, function (n, r, e) {
                u = t(n, r, e), (a > u || 1 / 0 === u && 1 / 0 === i) && (i = n, a = u);
            });
        return i;
    }, h.shuffle = function (n) {
        for (var t, r = n && n.length === +n.length ? n : h.values(n), e = r.length, u = Array(e), i = 0; e > i; i++)
            t = h.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
        return u;
    }, h.sample = function (n, t, r) {
        return null == t || r ? (n.length !== +n.length && (n = h.values(n)), n[h.random(n.length - 1)]) : h.shuffle(n).slice(0, Math.max(0, t));
    }, h.sortBy = function (n, t, r) {
        return t = h.iteratee(t, r), h.pluck(h.map(n, function (n, r, e) {
            return {
                value: n,
                index: r,
                criteria: t(n, r, e)
            };
        }).sort(function (n, t) {
            var r = n.criteria, e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0)
                    return 1;
                if (e > r || e === void 0)
                    return -1;
            }
            return n.index - t.index;
        }), 'value');
    };
    var m = function (n) {
        return function (t, r, e) {
            var u = {};
            return r = h.iteratee(r, e), h.each(t, function (e, i) {
                var a = r(e, i, t);
                n(u, e, a);
            }), u;
        };
    };
    h.groupBy = m(function (n, t, r) {
        h.has(n, r) ? n[r].push(t) : n[r] = [t];
    }), h.indexBy = m(function (n, t, r) {
        n[r] = t;
    }), h.countBy = m(function (n, t, r) {
        h.has(n, r) ? n[r]++ : n[r] = 1;
    }), h.sortedIndex = function (n, t, r, e) {
        r = h.iteratee(r, e, 1);
        for (var u = r(t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            r(n[o]) < u ? i = o + 1 : a = o;
        }
        return i;
    }, h.toArray = function (n) {
        return n ? h.isArray(n) ? a.call(n) : n.length === +n.length ? h.map(n, h.identity) : h.values(n) : [];
    }, h.size = function (n) {
        return null == n ? 0 : n.length === +n.length ? n.length : h.keys(n).length;
    }, h.partition = function (n, t, r) {
        t = h.iteratee(t, r);
        var e = [], u = [];
        return h.each(n, function (n, r, i) {
            (t(n, r, i) ? e : u).push(n);
        }), [
            e,
            u
        ];
    }, h.first = h.head = h.take = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : a.call(n, 0, t);
    }, h.initial = function (n, t, r) {
        return a.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)));
    }, h.last = function (n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : a.call(n, Math.max(n.length - t, 0));
    }, h.rest = h.tail = h.drop = function (n, t, r) {
        return a.call(n, null == t || r ? 1 : t);
    }, h.compact = function (n) {
        return h.filter(n, h.identity);
    };
    var y = function (n, t, r, e) {
        if (t && h.every(n, h.isArray))
            return o.apply(e, n);
        for (var u = 0, a = n.length; a > u; u++) {
            var l = n[u];
            h.isArray(l) || h.isArguments(l) ? t ? i.apply(e, l) : y(l, t, r, e) : r || e.push(l);
        }
        return e;
    };
    h.flatten = function (n, t) {
        return y(n, t, !1, []);
    }, h.without = function (n) {
        return h.difference(n, a.call(arguments, 1));
    }, h.uniq = h.unique = function (n, t, r, e) {
        if (null == n)
            return [];
        h.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = h.iteratee(r, e));
        for (var u = [], i = [], a = 0, o = n.length; o > a; a++) {
            var l = n[a];
            if (t)
                a && i === l || u.push(l), i = l;
            else if (r) {
                var c = r(l, a, n);
                h.indexOf(i, c) < 0 && (i.push(c), u.push(l));
            } else
                h.indexOf(u, l) < 0 && u.push(l);
        }
        return u;
    }, h.union = function () {
        return h.uniq(y(arguments, !0, !0, []));
    }, h.intersection = function (n) {
        if (null == n)
            return [];
        for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) {
            var i = n[e];
            if (!h.contains(t, i)) {
                for (var a = 1; r > a && h.contains(arguments[a], i); a++);
                a === r && t.push(i);
            }
        }
        return t;
    }, h.difference = function (n) {
        var t = y(a.call(arguments, 1), !0, !0, []);
        return h.filter(n, function (n) {
            return !h.contains(t, n);
        });
    }, h.zip = function (n) {
        if (null == n)
            return [];
        for (var t = h.max(arguments, 'length').length, r = Array(t), e = 0; t > e; e++)
            r[e] = h.pluck(arguments, e);
        return r;
    }, h.object = function (n, t) {
        if (null == n)
            return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++)
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r;
    }, h.indexOf = function (n, t, r) {
        if (null == n)
            return -1;
        var e = 0, u = n.length;
        if (r) {
            if ('number' != typeof r)
                return e = h.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r;
        }
        for (; u > e; e++)
            if (n[e] === t)
                return e;
        return -1;
    }, h.lastIndexOf = function (n, t, r) {
        if (null == n)
            return -1;
        var e = n.length;
        for ('number' == typeof r && (e = 0 > r ? e + r + 1 : Math.min(e, r + 1)); --e >= 0;)
            if (n[e] === t)
                return e;
        return -1;
    }, h.range = function (n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r)
            u[i] = n;
        return u;
    };
    var d = function () {
    };
    h.bind = function (n, t) {
        var r, e;
        if (p && n.bind === p)
            return p.apply(n, a.call(arguments, 1));
        if (!h.isFunction(n))
            throw new TypeError('Bind must be called on a function');
        return r = a.call(arguments, 2), e = function () {
            if (!(this instanceof e))
                return n.apply(t, r.concat(a.call(arguments)));
            d.prototype = n.prototype;
            var u = new d();
            d.prototype = null;
            var i = n.apply(u, r.concat(a.call(arguments)));
            return h.isObject(i) ? i : u;
        };
    }, h.partial = function (n) {
        var t = a.call(arguments, 1);
        return function () {
            for (var r = 0, e = t.slice(), u = 0, i = e.length; i > u; u++)
                e[u] === h && (e[u] = arguments[r++]);
            for (; r < arguments.length;)
                e.push(arguments[r++]);
            return n.apply(this, e);
        };
    }, h.bindAll = function (n) {
        var t, r, e = arguments.length;
        if (1 >= e)
            throw new Error('bindAll must be passed function names');
        for (t = 1; e > t; t++)
            r = arguments[t], n[r] = h.bind(n[r], n);
        return n;
    }, h.memoize = function (n, t) {
        var r = function (e) {
            var u = r.cache, i = t ? t.apply(this, arguments) : e;
            return h.has(u, i) || (u[i] = n.apply(this, arguments)), u[i];
        };
        return r.cache = {}, r;
    }, h.delay = function (n, t) {
        var r = a.call(arguments, 2);
        return setTimeout(function () {
            return n.apply(null, r);
        }, t);
    }, h.defer = function (n) {
        return h.delay.apply(h, [
            n,
            1
        ].concat(a.call(arguments, 1)));
    }, h.throttle = function (n, t, r) {
        var e, u, i, a = null, o = 0;
        r || (r = {});
        var l = function () {
            o = r.leading === !1 ? 0 : h.now(), a = null, i = n.apply(e, u), a || (e = u = null);
        };
        return function () {
            var c = h.now();
            o || r.leading !== !1 || (o = c);
            var f = t - (c - o);
            return e = this, u = arguments, 0 >= f || f > t ? (clearTimeout(a), a = null, o = c, i = n.apply(e, u), a || (e = u = null)) : a || r.trailing === !1 || (a = setTimeout(l, f)), i;
        };
    }, h.debounce = function (n, t, r) {
        var e, u, i, a, o, l = function () {
                var c = h.now() - a;
                t > c && c > 0 ? e = setTimeout(l, t - c) : (e = null, r || (o = n.apply(i, u), e || (i = u = null)));
            };
        return function () {
            i = this, u = arguments, a = h.now();
            var c = r && !e;
            return e || (e = setTimeout(l, t)), c && (o = n.apply(i, u), i = u = null), o;
        };
    }, h.wrap = function (n, t) {
        return h.partial(t, n);
    }, h.negate = function (n) {
        return function () {
            return !n.apply(this, arguments);
        };
    }, h.compose = function () {
        var n = arguments, t = n.length - 1;
        return function () {
            for (var r = t, e = n[t].apply(this, arguments); r--;)
                e = n[r].call(this, e);
            return e;
        };
    }, h.after = function (n, t) {
        return function () {
            return --n < 1 ? t.apply(this, arguments) : void 0;
        };
    }, h.before = function (n, t) {
        var r;
        return function () {
            return --n > 0 ? r = t.apply(this, arguments) : t = null, r;
        };
    }, h.once = h.partial(h.before, 2), h.keys = function (n) {
        if (!h.isObject(n))
            return [];
        if (s)
            return s(n);
        var t = [];
        for (var r in n)
            h.has(n, r) && t.push(r);
        return t;
    }, h.values = function (n) {
        for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
            e[u] = n[t[u]];
        return e;
    }, h.pairs = function (n) {
        for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++)
            e[u] = [
                t[u],
                n[t[u]]
            ];
        return e;
    }, h.invert = function (n) {
        for (var t = {}, r = h.keys(n), e = 0, u = r.length; u > e; e++)
            t[n[r[e]]] = r[e];
        return t;
    }, h.functions = h.methods = function (n) {
        var t = [];
        for (var r in n)
            h.isFunction(n[r]) && t.push(r);
        return t.sort();
    }, h.extend = function (n) {
        if (!h.isObject(n))
            return n;
        for (var t, r, e = 1, u = arguments.length; u > e; e++) {
            t = arguments[e];
            for (r in t)
                c.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, h.pick = function (n, t, r) {
        var e, u = {};
        if (null == n)
            return u;
        if (h.isFunction(t)) {
            t = g(t, r);
            for (e in n) {
                var i = n[e];
                t(i, e, n) && (u[e] = i);
            }
        } else {
            var l = o.apply([], a.call(arguments, 1));
            n = new Object(n);
            for (var c = 0, f = l.length; f > c; c++)
                e = l[c], e in n && (u[e] = n[e]);
        }
        return u;
    }, h.omit = function (n, t, r) {
        if (h.isFunction(t))
            t = h.negate(t);
        else {
            var e = h.map(o.apply([], a.call(arguments, 1)), String);
            t = function (n, t) {
                return !h.contains(e, t);
            };
        }
        return h.pick(n, t, r);
    }, h.defaults = function (n) {
        if (!h.isObject(n))
            return n;
        for (var t = 1, r = arguments.length; r > t; t++) {
            var e = arguments[t];
            for (var u in e)
                n[u] === void 0 && (n[u] = e[u]);
        }
        return n;
    }, h.clone = function (n) {
        return h.isObject(n) ? h.isArray(n) ? n.slice() : h.extend({}, n) : n;
    }, h.tap = function (n, t) {
        return t(n), n;
    };
    var b = function (n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t)
            return n === t;
        n instanceof h && (n = n._wrapped), t instanceof h && (t = t._wrapped);
        var u = l.call(n);
        if (u !== l.call(t))
            return !1;
        switch (u) {
        case '[object RegExp]':
        case '[object String]':
            return '' + n == '' + t;
        case '[object Number]':
            return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
        case '[object Date]':
        case '[object Boolean]':
            return +n === +t;
        }
        if ('object' != typeof n || 'object' != typeof t)
            return !1;
        for (var i = r.length; i--;)
            if (r[i] === n)
                return e[i] === t;
        var a = n.constructor, o = t.constructor;
        if (a !== o && 'constructor' in n && 'constructor' in t && !(h.isFunction(a) && a instanceof a && h.isFunction(o) && o instanceof o))
            return !1;
        r.push(n), e.push(t);
        var c, f;
        if ('[object Array]' === u) {
            if (c = n.length, f = c === t.length)
                for (; c-- && (f = b(n[c], t[c], r, e)););
        } else {
            var s, p = h.keys(n);
            if (c = p.length, f = h.keys(t).length === c)
                for (; c-- && (s = p[c], f = h.has(t, s) && b(n[s], t[s], r, e)););
        }
        return r.pop(), e.pop(), f;
    };
    h.isEqual = function (n, t) {
        return b(n, t, [], []);
    }, h.isEmpty = function (n) {
        if (null == n)
            return !0;
        if (h.isArray(n) || h.isString(n) || h.isArguments(n))
            return 0 === n.length;
        for (var t in n)
            if (h.has(n, t))
                return !1;
        return !0;
    }, h.isElement = function (n) {
        return !(!n || 1 !== n.nodeType);
    }, h.isArray = f || function (n) {
        return '[object Array]' === l.call(n);
    }, h.isObject = function (n) {
        var t = typeof n;
        return 'function' === t || 'object' === t && !!n;
    }, h.each([
        'Arguments',
        'Function',
        'String',
        'Number',
        'Date',
        'RegExp'
    ], function (n) {
        h['is' + n] = function (t) {
            return l.call(t) === '[object ' + n + ']';
        };
    }), h.isArguments(arguments) || (h.isArguments = function (n) {
        return h.has(n, 'callee');
    }), 'function' != typeof /./ && (h.isFunction = function (n) {
        return 'function' == typeof n || !1;
    }), h.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n));
    }, h.isNaN = function (n) {
        return h.isNumber(n) && n !== +n;
    }, h.isBoolean = function (n) {
        return n === !0 || n === !1 || '[object Boolean]' === l.call(n);
    }, h.isNull = function (n) {
        return null === n;
    }, h.isUndefined = function (n) {
        return n === void 0;
    }, h.has = function (n, t) {
        return null != n && c.call(n, t);
    }, h.noConflict = function () {
        return n._ = t, this;
    }, h.identity = function (n) {
        return n;
    }, h.constant = function (n) {
        return function () {
            return n;
        };
    }, h.noop = function () {
    }, h.property = function (n) {
        return function (t) {
            return t[n];
        };
    }, h.matches = function (n) {
        var t = h.pairs(n), r = t.length;
        return function (n) {
            if (null == n)
                return !r;
            n = new Object(n);
            for (var e = 0; r > e; e++) {
                var u = t[e], i = u[0];
                if (u[1] !== n[i] || !(i in n))
                    return !1;
            }
            return !0;
        };
    }, h.times = function (n, t, r) {
        var e = Array(Math.max(0, n));
        t = g(t, r, 1);
        for (var u = 0; n > u; u++)
            e[u] = t(u);
        return e;
    }, h.random = function (n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
    }, h.now = Date.now || function () {
        return new Date().getTime();
    };
    var _ = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#x27;',
            '`': '&#x60;'
        }, w = h.invert(_), j = function (n) {
            var t = function (t) {
                    return n[t];
                }, r = '(?:' + h.keys(n).join('|') + ')', e = RegExp(r), u = RegExp(r, 'g');
            return function (n) {
                return n = null == n ? '' : '' + n, e.test(n) ? n.replace(u, t) : n;
            };
        };
    h.escape = j(_), h.unescape = j(w), h.result = function (n, t) {
        if (null == n)
            return void 0;
        var r = n[t];
        return h.isFunction(r) ? n[t]() : r;
    };
    var x = 0;
    h.uniqueId = function (n) {
        var t = ++x + '';
        return n ? n + t : t;
    }, h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var A = /(.)^/, k = {
            '\'': '\'',
            '\\': '\\',
            '\r': 'r',
            '\n': 'n',
            '\u2028': 'u2028',
            '\u2029': 'u2029'
        }, O = /\\|'|\r|\n|\u2028|\u2029/g, F = function (n) {
            return '\\' + k[n];
        };
    h.template = function (n, t, r) {
        !t && r && (t = r), t = h.defaults({}, t, h.templateSettings);
        var e = RegExp([
                (t.escape || A).source,
                (t.interpolate || A).source,
                (t.evaluate || A).source
            ].join('|') + '|$', 'g'), u = 0, i = '__p+=\'';
        n.replace(e, function (t, r, e, a, o) {
            return i += n.slice(u, o).replace(O, F), u = o + t.length, r ? i += '\'+\n((__t=(' + r + '))==null?\'\':_.escape(__t))+\n\'' : e ? i += '\'+\n((__t=(' + e + '))==null?\'\':__t)+\n\'' : a && (i += '\';\n' + a + '\n__p+=\''), t;
        }), i += '\';\n', t.variable || (i = 'with(obj||{}){\n' + i + '}\n'), i = 'var __t,__p=\'\',__j=Array.prototype.join,' + 'print=function(){__p+=__j.call(arguments,\'\');};\n' + i + 'return __p;\n';
        try {
            var a = new Function(t.variable || 'obj', '_', i);
        } catch (o) {
            throw o.source = i, o;
        }
        var l = function (n) {
                return a.call(this, n, h);
            }, c = t.variable || 'obj';
        return l.source = 'function(' + c + '){\n' + i + '}', l;
    }, h.chain = function (n) {
        var t = h(n);
        return t._chain = !0, t;
    };
    var E = function (n) {
        return this._chain ? h(n).chain() : n;
    };
    h.mixin = function (n) {
        h.each(h.functions(n), function (t) {
            var r = h[t] = n[t];
            h.prototype[t] = function () {
                var n = [this._wrapped];
                return i.apply(n, arguments), E.call(this, r.apply(h, n));
            };
        });
    }, h.mixin(h), h.each([
        'pop',
        'push',
        'reverse',
        'shift',
        'sort',
        'splice',
        'unshift'
    ], function (n) {
        var t = r[n];
        h.prototype[n] = function () {
            var r = this._wrapped;
            return t.apply(r, arguments), 'shift' !== n && 'splice' !== n || 0 !== r.length || delete r[0], E.call(this, r);
        };
    }), h.each([
        'concat',
        'join',
        'slice'
    ], function (n) {
        var t = r[n];
        h.prototype[n] = function () {
            return E.call(this, t.apply(this._wrapped, arguments));
        };
    }), h.prototype.value = function () {
        return this._wrapped;
    }, 'function' == typeof define && define.amd && define('underscore', [], function () {
        return h;
    });
}.call(this));
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('backbone', [
            'underscore',
            'jquery',
            'exports'
        ], function (_, $, exports) {
            root.Backbone = factory(root, exports, _, $);
        });
    } else if (typeof exports !== 'undefined') {
        var _ = require('underscore'), $;
        try {
            $ = require('jquery');
        } catch (e) {
        }
        factory(root, exports, _, $);
    } else {
        root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$);
    }
}(this, function (root, Backbone, _, $) {
    var previousBackbone = root.Backbone;
    var array = [];
    var push = array.push;
    var slice = array.slice;
    var splice = array.splice;
    Backbone.VERSION = '1.1.1';
    Backbone.$ = $;
    Backbone.noConflict = function () {
        root.Backbone = previousBackbone;
        return this;
    };
    Backbone.emulateHTTP = false;
    Backbone.emulateJSON = false;
    var Events = Backbone.Events = {
        on: function (name, callback, context) {
            if (!eventsApi(this, 'on', name, [
                    callback,
                    context
                ]) || !callback)
                return this;
            this._events || (this._events = {});
            var events = this._events[name] || (this._events[name] = []);
            events.push({
                callback: callback,
                context: context,
                ctx: context || this
            });
            return this;
        },
        once: function (name, callback, context) {
            if (!eventsApi(this, 'once', name, [
                    callback,
                    context
                ]) || !callback)
                return this;
            var self = this;
            var once = _.once(function () {
                self.off(name, once);
                callback.apply(this, arguments);
            });
            once._callback = callback;
            return this.on(name, once, context);
        },
        off: function (name, callback, context) {
            var retain, ev, events, names, i, l, j, k;
            if (!this._events || !eventsApi(this, 'off', name, [
                    callback,
                    context
                ]))
                return this;
            if (!name && !callback && !context) {
                this._events = void 0;
                return this;
            }
            names = name ? [name] : _.keys(this._events);
            for (i = 0, l = names.length; i < l; i++) {
                name = names[i];
                if (events = this._events[name]) {
                    this._events[name] = retain = [];
                    if (callback || context) {
                        for (j = 0, k = events.length; j < k; j++) {
                            ev = events[j];
                            if (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) {
                                retain.push(ev);
                            }
                        }
                    }
                    if (!retain.length)
                        delete this._events[name];
                }
            }
            return this;
        },
        trigger: function (name) {
            if (!this._events)
                return this;
            var args = slice.call(arguments, 1);
            if (!eventsApi(this, 'trigger', name, args))
                return this;
            var events = this._events[name];
            var allEvents = this._events.all;
            if (events)
                triggerEvents(events, args);
            if (allEvents)
                triggerEvents(allEvents, arguments);
            return this;
        },
        stopListening: function (obj, name, callback) {
            var listeningTo = this._listeningTo;
            if (!listeningTo)
                return this;
            var remove = !name && !callback;
            if (!callback && typeof name === 'object')
                callback = this;
            if (obj)
                (listeningTo = {})[obj._listenId] = obj;
            for (var id in listeningTo) {
                obj = listeningTo[id];
                obj.off(name, callback, this);
                if (remove || _.isEmpty(obj._events))
                    delete this._listeningTo[id];
            }
            return this;
        }
    };
    var eventSplitter = /\s+/;
    var eventsApi = function (obj, action, name, rest) {
        if (!name)
            return true;
        if (typeof name === 'object') {
            for (var key in name) {
                obj[action].apply(obj, [
                    key,
                    name[key]
                ].concat(rest));
            }
            return false;
        }
        if (eventSplitter.test(name)) {
            var names = name.split(eventSplitter);
            for (var i = 0, l = names.length; i < l; i++) {
                obj[action].apply(obj, [names[i]].concat(rest));
            }
            return false;
        }
        return true;
    };
    var triggerEvents = function (events, args) {
        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
        switch (args.length) {
        case 0:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx);
            return;
        case 1:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx, a1);
            return;
        case 2:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx, a1, a2);
            return;
        case 3:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
            return;
        default:
            while (++i < l)
                (ev = events[i]).callback.apply(ev.ctx, args);
            return;
        }
    };
    var listenMethods = {
        listenTo: 'on',
        listenToOnce: 'once'
    };
    _.each(listenMethods, function (implementation, method) {
        Events[method] = function (obj, name, callback) {
            var listeningTo = this._listeningTo || (this._listeningTo = {});
            var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
            listeningTo[id] = obj;
            if (!callback && typeof name === 'object')
                callback = this;
            obj[implementation](name, callback, this);
            return this;
        };
    });
    Events.bind = Events.on;
    Events.unbind = Events.off;
    _.extend(Backbone, Events);
    var Model = Backbone.Model = function (attributes, options) {
        var attrs = attributes || {};
        options || (options = {});
        this.cid = _.uniqueId('c');
        this.attributes = {};
        if (options.collection)
            this.collection = options.collection;
        if (options.parse)
            attrs = this.parse(attrs, options) || {};
        attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
        this.set(attrs, options);
        this.changed = {};
        this.initialize.apply(this, arguments);
    };
    _.extend(Model.prototype, Events, {
        changed: null,
        validationError: null,
        idAttribute: 'id',
        initialize: function () {
        },
        toJSON: function (options) {
            return _.clone(this.attributes);
        },
        sync: function () {
            return Backbone.sync.apply(this, arguments);
        },
        get: function (attr) {
            return this.attributes[attr];
        },
        escape: function (attr) {
            return _.escape(this.get(attr));
        },
        has: function (attr) {
            return this.get(attr) != null;
        },
        set: function (key, val, options) {
            var attr, attrs, unset, changes, silent, changing, prev, current;
            if (key == null)
                return this;
            if (typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }
            options || (options = {});
            if (!this._validate(attrs, options))
                return false;
            unset = options.unset;
            silent = options.silent;
            changes = [];
            changing = this._changing;
            this._changing = true;
            if (!changing) {
                this._previousAttributes = _.clone(this.attributes);
                this.changed = {};
            }
            current = this.attributes, prev = this._previousAttributes;
            if (this.idAttribute in attrs)
                this.id = attrs[this.idAttribute];
            for (attr in attrs) {
                val = attrs[attr];
                if (!_.isEqual(current[attr], val))
                    changes.push(attr);
                if (!_.isEqual(prev[attr], val)) {
                    this.changed[attr] = val;
                } else {
                    delete this.changed[attr];
                }
                unset ? delete current[attr] : current[attr] = val;
            }
            if (!silent) {
                if (changes.length)
                    this._pending = options;
                for (var i = 0, l = changes.length; i < l; i++) {
                    this.trigger('change:' + changes[i], this, current[changes[i]], options);
                }
            }
            if (changing)
                return this;
            if (!silent) {
                while (this._pending) {
                    options = this._pending;
                    this._pending = false;
                    this.trigger('change', this, options);
                }
            }
            this._pending = false;
            this._changing = false;
            return this;
        },
        unset: function (attr, options) {
            return this.set(attr, void 0, _.extend({}, options, { unset: true }));
        },
        clear: function (options) {
            var attrs = {};
            for (var key in this.attributes)
                attrs[key] = void 0;
            return this.set(attrs, _.extend({}, options, { unset: true }));
        },
        hasChanged: function (attr) {
            if (attr == null)
                return !_.isEmpty(this.changed);
            return _.has(this.changed, attr);
        },
        changedAttributes: function (diff) {
            if (!diff)
                return this.hasChanged() ? _.clone(this.changed) : false;
            var val, changed = false;
            var old = this._changing ? this._previousAttributes : this.attributes;
            for (var attr in diff) {
                if (_.isEqual(old[attr], val = diff[attr]))
                    continue;
                (changed || (changed = {}))[attr] = val;
            }
            return changed;
        },
        previous: function (attr) {
            if (attr == null || !this._previousAttributes)
                return null;
            return this._previousAttributes[attr];
        },
        previousAttributes: function () {
            return _.clone(this._previousAttributes);
        },
        fetch: function (options) {
            options = options ? _.clone(options) : {};
            if (options.parse === void 0)
                options.parse = true;
            var model = this;
            var success = options.success;
            options.success = function (resp) {
                if (!model.set(model.parse(resp, options), options))
                    return false;
                if (success)
                    success(model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            wrapError(this, options);
            return this.sync('read', this, options);
        },
        save: function (key, val, options) {
            var attrs, method, xhr, attributes = this.attributes;
            if (key == null || typeof key === 'object') {
                attrs = key;
                options = val;
            } else {
                (attrs = {})[key] = val;
            }
            options = _.extend({ validate: true }, options);
            if (attrs && !options.wait) {
                if (!this.set(attrs, options))
                    return false;
            } else {
                if (!this._validate(attrs, options))
                    return false;
            }
            if (attrs && options.wait) {
                this.attributes = _.extend({}, attributes, attrs);
            }
            if (options.parse === void 0)
                options.parse = true;
            var model = this;
            var success = options.success;
            options.success = function (resp) {
                model.attributes = attributes;
                var serverAttrs = model.parse(resp, options);
                if (options.wait)
                    serverAttrs = _.extend(attrs || {}, serverAttrs);
                if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
                    return false;
                }
                if (success)
                    success(model, resp, options);
                model.trigger('sync', model, resp, options);
            };
            wrapError(this, options);
            method = this.isNew() ? 'create' : options.patch ? 'patch' : 'update';
            if (method === 'patch')
                options.attrs = attrs;
            xhr = this.sync(method, this, options);
            if (attrs && options.wait)
                this.attributes = attributes;
            return xhr;
        },
        destroy: function (options) {
            options = options ? _.clone(options) : {};
            var model = this;
            var success = options.success;
            var destroy = function () {
                model.trigger('destroy', model, model.collection, options);
            };
            options.success = function (resp) {
                if (options.wait || model.isNew())
                    destroy();
                if (success)
                    success(model, resp, options);
                if (!model.isNew())
                    model.trigger('sync', model, resp, options);
            };
            if (this.isNew()) {
                options.success();
                return false;
            }
            wrapError(this, options);
            var xhr = this.sync('delete', this, options);
            if (!options.wait)
                destroy();
            return xhr;
        },
        url: function () {
            var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
            if (this.isNew())
                return base;
            return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
        },
        parse: function (resp, options) {
            return resp;
        },
        clone: function () {
            return new this.constructor(this.attributes);
        },
        isNew: function () {
            return !this.has(this.idAttribute);
        },
        isValid: function (options) {
            return this._validate({}, _.extend(options || {}, { validate: true }));
        },
        _validate: function (attrs, options) {
            if (!options.validate || !this.validate)
                return true;
            attrs = _.extend({}, this.attributes, attrs);
            var error = this.validationError = this.validate(attrs, options) || null;
            if (!error)
                return true;
            this.trigger('invalid', this, error, _.extend(options, { validationError: error }));
            return false;
        }
    });
    var modelMethods = [
        'keys',
        'values',
        'pairs',
        'invert',
        'pick',
        'omit'
    ];
    _.each(modelMethods, function (method) {
        Model.prototype[method] = function () {
            var args = slice.call(arguments);
            args.unshift(this.attributes);
            return _[method].apply(_, args);
        };
    });
    var Collection = Backbone.Collection = function (models, options) {
        options || (options = {});
        if (options.model)
            this.model = options.model;
        if (options.comparator !== void 0)
            this.comparator = options.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (models)
            this.reset(models, _.extend({ silent: true }, options));
    };
    var setOptions = {
        add: true,
        remove: true,
        merge: true
    };
    var addOptions = {
        add: true,
        remove: false
    };
    _.extend(Collection.prototype, Events, {
        model: Model,
        initialize: function () {
        },
        toJSON: function (options) {
            return this.map(function (model) {
                return model.toJSON(options);
            });
        },
        sync: function () {
            return Backbone.sync.apply(this, arguments);
        },
        add: function (models, options) {
            return this.set(models, _.extend({ merge: false }, options, addOptions));
        },
        remove: function (models, options) {
            var singular = !_.isArray(models);
            models = singular ? [models] : _.clone(models);
            options || (options = {});
            var i, l, index, model;
            for (i = 0, l = models.length; i < l; i++) {
                model = models[i] = this.get(models[i]);
                if (!model)
                    continue;
                delete this._byId[model.id];
                delete this._byId[model.cid];
                index = this.indexOf(model);
                this.models.splice(index, 1);
                this.length--;
                if (!options.silent) {
                    options.index = index;
                    model.trigger('remove', model, this, options);
                }
                this._removeReference(model, options);
            }
            return singular ? models[0] : models;
        },
        set: function (models, options) {
            options = _.defaults({}, options, setOptions);
            if (options.parse)
                models = this.parse(models, options);
            var singular = !_.isArray(models);
            models = singular ? models ? [models] : [] : _.clone(models);
            var i, l, id, model, attrs, existing, sort;
            var at = options.at;
            var targetModel = this.model;
            var sortable = this.comparator && at == null && options.sort !== false;
            var sortAttr = _.isString(this.comparator) ? this.comparator : null;
            var toAdd = [], toRemove = [], modelMap = {};
            var add = options.add, merge = options.merge, remove = options.remove;
            var order = !sortable && add && remove ? [] : false;
            for (i = 0, l = models.length; i < l; i++) {
                attrs = models[i] || {};
                if (attrs instanceof Model) {
                    id = model = attrs;
                } else {
                    id = attrs[targetModel.prototype.idAttribute || 'id'];
                }
                if (existing = this.get(id)) {
                    if (remove)
                        modelMap[existing.cid] = true;
                    if (merge) {
                        attrs = attrs === model ? model.attributes : attrs;
                        if (options.parse)
                            attrs = existing.parse(attrs, options);
                        existing.set(attrs, options);
                        if (sortable && !sort && existing.hasChanged(sortAttr))
                            sort = true;
                    }
                    models[i] = existing;
                } else if (add) {
                    model = models[i] = this._prepareModel(attrs, options);
                    if (!model)
                        continue;
                    toAdd.push(model);
                    this._addReference(model, options);
                }
                model = existing || model;
                if (order && (model.isNew() || !modelMap[model.id]))
                    order.push(model);
                modelMap[model.id] = true;
            }
            if (remove) {
                for (i = 0, l = this.length; i < l; ++i) {
                    if (!modelMap[(model = this.models[i]).cid])
                        toRemove.push(model);
                }
                if (toRemove.length)
                    this.remove(toRemove, options);
            }
            if (toAdd.length || order && order.length) {
                if (sortable)
                    sort = true;
                this.length += toAdd.length;
                if (at != null) {
                    for (i = 0, l = toAdd.length; i < l; i++) {
                        this.models.splice(at + i, 0, toAdd[i]);
                    }
                } else {
                    if (order)
                        this.models.length = 0;
                    var orderedModels = order || toAdd;
                    for (i = 0, l = orderedModels.length; i < l; i++) {
                        this.models.push(orderedModels[i]);
                    }
                }
            }
            if (sort)
                this.sort({ silent: true });
            if (!options.silent) {
                for (i = 0, l = toAdd.length; i < l; i++) {
                    (model = toAdd[i]).trigger('add', model, this, options);
                }
                if (sort || order && order.length)
                    this.trigger('sort', this, options);
            }
            return singular ? models[0] : models;
        },
        reset: function (models, options) {
            options || (options = {});
            for (var i = 0, l = this.models.length; i < l; i++) {
                this._removeReference(this.models[i], options);
            }
            options.previousModels = this.models;
            this._reset();
            models = this.add(models, _.extend({ silent: true }, options));
            if (!options.silent)
                this.trigger('reset', this, options);
            return models;
        },
        push: function (model, options) {
            return this.add(model, _.extend({ at: this.length }, options));
        },
        pop: function (options) {
            var model = this.at(this.length - 1);
            this.remove(model, options);
            return model;
        },
        unshift: function (model, options) {
            return this.add(model, _.extend({ at: 0 }, options));
        },
        shift: function (options) {
            var model = this.at(0);
            this.remove(model, options);
            return model;
        },
        slice: function () {
            return slice.apply(this.models, arguments);
        },
        get: function (obj) {
            if (obj == null)
                return void 0;
            return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
        },
        at: function (index) {
            return this.models[index];
        },
        where: function (attrs, first) {
            if (_.isEmpty(attrs))
                return first ? void 0 : [];
            return this[first ? 'find' : 'filter'](function (model) {
                for (var key in attrs) {
                    if (attrs[key] !== model.get(key))
                        return false;
                }
                return true;
            });
        },
        findWhere: function (attrs) {
            return this.where(attrs, true);
        },
        sort: function (options) {
            if (!this.comparator)
                throw new Error('Cannot sort a set without a comparator');
            options || (options = {});
            if (_.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this);
            } else {
                this.models.sort(_.bind(this.comparator, this));
            }
            if (!options.silent)
                this.trigger('sort', this, options);
            return this;
        },
        pluck: function (attr) {
            return _.invoke(this.models, 'get', attr);
        },
        fetch: function (options) {
            options = options ? _.clone(options) : {};
            if (options.parse === void 0)
                options.parse = true;
            var success = options.success;
            var collection = this;
            options.success = function (resp) {
                var method = options.reset ? 'reset' : 'set';
                collection[method](resp, options);
                if (success)
                    success(collection, resp, options);
                collection.trigger('sync', collection, resp, options);
            };
            wrapError(this, options);
            return this.sync('read', this, options);
        },
        create: function (model, options) {
            options = options ? _.clone(options) : {};
            if (!(model = this._prepareModel(model, options)))
                return false;
            if (!options.wait)
                this.add(model, options);
            var collection = this;
            var success = options.success;
            options.success = function (model, resp) {
                if (options.wait)
                    collection.add(model, options);
                if (success)
                    success(model, resp, options);
            };
            model.save(null, options);
            return model;
        },
        parse: function (resp, options) {
            return resp;
        },
        clone: function () {
            return new this.constructor(this.models);
        },
        _reset: function () {
            this.length = 0;
            this.models = [];
            this._byId = {};
        },
        _prepareModel: function (attrs, options) {
            if (attrs instanceof Model)
                return attrs;
            options = options ? _.clone(options) : {};
            options.collection = this;
            var model = new this.model(attrs, options);
            if (!model.validationError)
                return model;
            this.trigger('invalid', this, model.validationError, options);
            return false;
        },
        _addReference: function (model, options) {
            this._byId[model.cid] = model;
            if (model.id != null)
                this._byId[model.id] = model;
            if (!model.collection)
                model.collection = this;
            model.on('all', this._onModelEvent, this);
        },
        _removeReference: function (model, options) {
            if (this === model.collection)
                delete model.collection;
            model.off('all', this._onModelEvent, this);
        },
        _onModelEvent: function (event, model, collection, options) {
            if ((event === 'add' || event === 'remove') && collection !== this)
                return;
            if (event === 'destroy')
                this.remove(model, options);
            if (model && event === 'change:' + model.idAttribute) {
                delete this._byId[model.previous(model.idAttribute)];
                if (model.id != null)
                    this._byId[model.id] = model;
            }
            this.trigger.apply(this, arguments);
        }
    });
    var methods = [
        'forEach',
        'each',
        'map',
        'collect',
        'reduce',
        'foldl',
        'inject',
        'reduceRight',
        'foldr',
        'find',
        'detect',
        'filter',
        'select',
        'reject',
        'every',
        'all',
        'some',
        'any',
        'include',
        'contains',
        'invoke',
        'max',
        'min',
        'toArray',
        'size',
        'first',
        'head',
        'take',
        'initial',
        'rest',
        'tail',
        'drop',
        'last',
        'without',
        'difference',
        'indexOf',
        'shuffle',
        'lastIndexOf',
        'isEmpty',
        'chain',
        'sample'
    ];
    _.each(methods, function (method) {
        Collection.prototype[method] = function () {
            var args = slice.call(arguments);
            args.unshift(this.models);
            return _[method].apply(_, args);
        };
    });
    var attributeMethods = [
        'groupBy',
        'countBy',
        'sortBy',
        'indexBy'
    ];
    _.each(attributeMethods, function (method) {
        Collection.prototype[method] = function (value, context) {
            var iterator = _.isFunction(value) ? value : function (model) {
                return model.get(value);
            };
            return _[method](this.models, iterator, context);
        };
    });
    var View = Backbone.View = function (options) {
        this.cid = _.uniqueId('view');
        options || (options = {});
        _.extend(this, _.pick(options, viewOptions));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents();
    };
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;
    var viewOptions = [
        'model',
        'collection',
        'el',
        'id',
        'attributes',
        'className',
        'tagName',
        'events'
    ];
    _.extend(View.prototype, Events, {
        tagName: 'div',
        $: function (selector) {
            return this.$el.find(selector);
        },
        initialize: function () {
        },
        render: function () {
            return this;
        },
        remove: function () {
            this.$el.remove();
            this.stopListening();
            return this;
        },
        setElement: function (element, delegate) {
            if (this.$el)
                this.undelegateEvents();
            this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
            this.el = this.$el[0];
            if (delegate !== false)
                this.delegateEvents();
            return this;
        },
        delegateEvents: function (events) {
            if (!(events || (events = _.result(this, 'events'))))
                return this;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method))
                    method = this[events[key]];
                if (!method)
                    continue;
                var match = key.match(delegateEventSplitter);
                var eventName = match[1], selector = match[2];
                method = _.bind(method, this);
                eventName += '.delegateEvents' + this.cid;
                if (selector === '') {
                    this.$el.on(eventName, method);
                } else {
                    this.$el.on(eventName, selector, method);
                }
            }
            return this;
        },
        undelegateEvents: function () {
            this.$el.off('.delegateEvents' + this.cid);
            return this;
        },
        _ensureElement: function () {
            if (!this.el) {
                var attrs = _.extend({}, _.result(this, 'attributes'));
                if (this.id)
                    attrs.id = _.result(this, 'id');
                if (this.className)
                    attrs['class'] = _.result(this, 'className');
                var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
                this.setElement($el, false);
            } else {
                this.setElement(_.result(this, 'el'), false);
            }
        }
    });
    Backbone.sync = function (method, model, options) {
        var type = methodMap[method];
        _.defaults(options || (options = {}), {
            emulateHTTP: Backbone.emulateHTTP,
            emulateJSON: Backbone.emulateJSON
        });
        var params = {
            type: type,
            dataType: 'json'
        };
        if (!options.url) {
            params.url = _.result(model, 'url') || urlError();
        }
        if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
            params.contentType = 'application/json';
            params.data = JSON.stringify(options.attrs || model.toJSON(options));
        }
        if (options.emulateJSON) {
            params.contentType = 'application/x-www-form-urlencoded';
            params.data = params.data ? { model: params.data } : {};
        }
        if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
            params.type = 'POST';
            if (options.emulateJSON)
                params.data._method = type;
            var beforeSend = options.beforeSend;
            options.beforeSend = function (xhr) {
                xhr.setRequestHeader('X-HTTP-Method-Override', type);
                if (beforeSend)
                    return beforeSend.apply(this, arguments);
            };
        }
        if (params.type !== 'GET' && !options.emulateJSON) {
            params.processData = false;
        }
        if (params.type === 'PATCH' && noXhrPatch) {
            params.xhr = function () {
                return new ActiveXObject('Microsoft.XMLHTTP');
            };
        }
        var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
        model.trigger('request', model, xhr, options);
        return xhr;
    };
    var noXhrPatch = typeof window !== 'undefined' && !!window.ActiveXObject && !(window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent);
    var methodMap = {
        'create': 'POST',
        'update': 'PUT',
        'patch': 'PATCH',
        'delete': 'DELETE',
        'read': 'GET'
    };
    Backbone.ajax = function () {
        return Backbone.$.ajax.apply(Backbone.$, arguments);
    };
    var Router = Backbone.Router = function (options) {
        options || (options = {});
        if (options.routes)
            this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    _.extend(Router.prototype, Events, {
        initialize: function () {
        },
        route: function (route, name, callback) {
            if (!_.isRegExp(route))
                route = this._routeToRegExp(route);
            if (_.isFunction(name)) {
                callback = name;
                name = '';
            }
            if (!callback)
                callback = this[name];
            var router = this;
            Backbone.history.route(route, function (fragment) {
                var args = router._extractParameters(route, fragment);
                router.execute(callback, args);
                router.trigger.apply(router, ['route:' + name].concat(args));
                router.trigger('route', name, args);
                Backbone.history.trigger('route', router, name, args);
            });
            return this;
        },
        execute: function (callback, args) {
            if (callback)
                callback.apply(this, args);
        },
        navigate: function (fragment, options) {
            Backbone.history.navigate(fragment, options);
            return this;
        },
        _bindRoutes: function () {
            if (!this.routes)
                return;
            this.routes = _.result(this, 'routes');
            var route, routes = _.keys(this.routes);
            while ((route = routes.pop()) != null) {
                this.route(route, this.routes[route]);
            }
        },
        _routeToRegExp: function (route) {
            route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
                return optional ? match : '([^/?]+)';
            }).replace(splatParam, '([^?]*?)');
            return new RegExp('^' + route + '(?:\\?(.*))?$');
        },
        _extractParameters: function (route, fragment) {
            var params = route.exec(fragment).slice(1);
            return _.map(params, function (param, i) {
                if (i === params.length - 1)
                    return param || null;
                return param ? decodeURIComponent(param) : null;
            });
        }
    });
    var History = Backbone.History = function () {
        this.handlers = [];
        _.bindAll(this, 'checkUrl');
        if (typeof window !== 'undefined') {
            this.location = window.location;
            this.history = window.history;
        }
    };
    var routeStripper = /^[#\/]|\s+$/g;
    var rootStripper = /^\/+|\/+$/g;
    var isExplorer = /msie [\w.]+/;
    var trailingSlash = /\/$/;
    var pathStripper = /#.*$/;
    History.started = false;
    _.extend(History.prototype, Events, {
        interval: 50,
        atRoot: function () {
            return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
        },
        getHash: function (window) {
            var match = (window || this).location.href.match(/#(.*)$/);
            return match ? match[1] : '';
        },
        getFragment: function (fragment, forcePushState) {
            if (fragment == null) {
                if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                    fragment = decodeURI(this.location.pathname + this.location.search);
                    var root = this.root.replace(trailingSlash, '');
                    if (!fragment.indexOf(root))
                        fragment = fragment.slice(root.length);
                } else {
                    fragment = this.getHash();
                }
            }
            return fragment.replace(routeStripper, '');
        },
        start: function (options) {
            if (History.started)
                throw new Error('Backbone.history has already been started');
            History.started = true;
            this.options = _.extend({ root: '/' }, this.options, options);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var fragment = this.getFragment();
            var docMode = document.documentMode;
            var oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7);
            this.root = ('/' + this.root + '/').replace(rootStripper, '/');
            if (oldIE && this._wantsHashChange) {
                var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = frame.hide().appendTo('body')[0].contentWindow;
                this.navigate(fragment);
            }
            if (this._hasPushState) {
                Backbone.$(window).on('popstate', this.checkUrl);
            } else if (this._wantsHashChange && 'onhashchange' in window && !oldIE) {
                Backbone.$(window).on('hashchange', this.checkUrl);
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
            }
            this.fragment = fragment;
            var loc = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    this.fragment = this.getFragment(null, true);
                    this.location.replace(this.root + '#' + this.fragment);
                    return true;
                } else if (this._hasPushState && this.atRoot() && loc.hash) {
                    this.fragment = this.getHash().replace(routeStripper, '');
                    this.history.replaceState({}, document.title, this.root + this.fragment);
                }
            }
            if (!this.options.silent)
                return this.loadUrl();
        },
        stop: function () {
            Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
            clearInterval(this._checkUrlInterval);
            History.started = false;
        },
        route: function (route, callback) {
            this.handlers.unshift({
                route: route,
                callback: callback
            });
        },
        checkUrl: function (e) {
            var current = this.getFragment();
            if (current === this.fragment && this.iframe) {
                current = this.getFragment(this.getHash(this.iframe));
            }
            if (current === this.fragment)
                return false;
            if (this.iframe)
                this.navigate(current);
            this.loadUrl();
        },
        loadUrl: function (fragment) {
            fragment = this.fragment = this.getFragment(fragment);
            return _.any(this.handlers, function (handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true;
                }
            });
        },
        navigate: function (fragment, options) {
            if (!History.started)
                return false;
            if (!options || options === true)
                options = { trigger: !!options };
            var url = this.root + (fragment = this.getFragment(fragment || ''));
            fragment = fragment.replace(pathStripper, '');
            if (this.fragment === fragment)
                return;
            this.fragment = fragment;
            if (fragment === '' && url !== '/')
                url = url.slice(0, -1);
            if (this._hasPushState) {
                this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, fragment, options.replace);
                if (this.iframe && fragment !== this.getFragment(this.getHash(this.iframe))) {
                    if (!options.replace)
                        this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, fragment, options.replace);
                }
            } else {
                return this.location.assign(url);
            }
            if (options.trigger)
                return this.loadUrl(fragment);
        },
        _updateHash: function (location, fragment, replace) {
            if (replace) {
                var href = location.href.replace(/(javascript:|#).*$/, '');
                location.replace(href + '#' + fragment);
            } else {
                location.hash = '#' + fragment;
            }
        }
    });
    Backbone.history = new History();
    var extend = function (protoProps, staticProps) {
        var parent = this;
        var child;
        if (protoProps && _.has(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function () {
                return parent.apply(this, arguments);
            };
        }
        _.extend(child, parent, staticProps);
        var Surrogate = function () {
            this.constructor = child;
        };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();
        if (protoProps)
            _.extend(child.prototype, protoProps);
        child.__super__ = parent.prototype;
        return child;
    };
    Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
    var urlError = function () {
        throw new Error('A "url" property or function must be specified');
    };
    var wrapError = function (model, options) {
        var error = options.error;
        options.error = function (resp) {
            if (error)
                error(model, resp, options);
            model.trigger('error', model, resp, options);
        };
    };
    return Backbone;
}));
define('tool/a', [
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone, _) {
    var exports = function () {
        var _this = this;
        return exports;
    };
});
define('webapp/model/model', [
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var Model = Backbone.Model.extend({});
    return Model;
});
define('tool/caesar', [
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone, _) {
    var exports = function () {
        var _this = this;
        function init(options) {
            var defaults = {};
            defaults.type = options.type || 'banner';
            defaults.selector = options.selector || '#caesarMobile';
            defaults.msg = options.msg || '';
            defaults.el = options.el || '';
            defaults.timeout = options.timeout || 0;
            defaults.foreground = options.foreground || 'yellow';
            defaults.url = options.url || '';
            this.options = defaults;
        }
        function addGlass(options) {
            var size = $('body').find('.glass').size();
            if (size > 0) {
            } else {
                $('body').prepend('<div class="glass"></div>');
            }
        }
        function showGlass(options) {
            $('body').find('.glass').show();
        }
        function hideGlass(options) {
            $('body').find('.glass').hide();
        }
        function deleteGlass(options) {
            $('body').find('.glass').remove();
        }
        function exports(options) {
            init(options);
            switch (options.type) {
            case 'banner':
                banner(options);
                break;
            case 'alert':
                addGlass(options);
                banner(options);
                break;
            case 'waiting':
                addGlass(options);
                waiting(options);
                break;
            case 'confirm':
                addGlass(options);
                _confirm(options);
                break;
            case 'bottomer':
                bottomer(options);
                break;
            case 'contact':
                addGlass(options);
                contact(options);
                break;
            case 'verify':
                verify(options);
                break;
            default:
                addGlass(options);
                break;
            }
            return this.options;
        }
        function banner(options) {
            var _this = options.that || this;
            var size = $('body').find('.banner').size();
            if (size > 0) {
            } else {
                if (_this.options.msg) {
                    var html = '' + '<div class="balance banner">' + '<span class="left pink">' + _this.options.msg + '</span>' + '<div class="clearfix"></div>' + '</div>';
                } else if (_this.options.el) {
                    var html = '' + '<div class="balance banner">' + _this.options.el + '</div>';
                }
                $('body').prepend(html);
            }
            $('.banner').show();
            function animatecss(x) {
                $('body .banner').removeClass(x).removeClass('ani').addClass(x + ' ani').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(_this).removeClass(x).addClass('animated');
                });
            }
            ;
            var timeout = _this.options.timeout;
            if (timeout > 0) {
                setTimeout(function () {
                    $('.banner').hide();
                }, timeout);
            }
        }
        function alert(options) {
            var _this = options.that || this;
        }
        function waiting(options) {
            var _this = options.that || this;
            var size = $('body').find('.mwaiting').size();
            var msgBox = '';
            if (_this.options.el) {
                msgBox = '' + '<div class="mwaiting-content">' + _this.options.el + '</div>';
            } else {
                msgBox = '' + '<div class="mwaiting-content">' + '<i></i>' + '<div class="msg">' + _this.options.msg + '</div>' + '</div>';
            }
            if (size > 0) {
                $('body').find('.mwaiting').html('').html(msgBox);
            } else {
                var html = '<div class="mwaiting">' + msgBox + '</div>';
                $('body').prepend(html);
            }
            $('.mwaiting').show();
            showGlass(options);
            var timeout = _this.options.timeout;
            if (timeout != 0) {
                setTimeout(function () {
                    $('.mwaiting').hide();
                    hideGlass(options);
                }, timeout);
            }
        }
        function _confirm(options) {
            var _options = options;
            var _this = options.that || this;
            var size = $('body').find('.confirm').size();
            var msgBox = '';
            if (_this.options.el) {
                msgBox = _this.options.el;
            } else {
                msgBox = '' + '<div class="foot">' + '<h4>' + _options.msg + '</h4>' + '<div class="or">' + '<a class="close" href="#">继续等待</a>' + '<a href="#" class="reelect">其他方式充值</a>' + '</div>' + '</div>';
            }
            if (size > 0) {
                $('body .confirm').html('').html(msgBox);
            } else {
                var html = '' + '<div class="underside confirm">' + msgBox + '</div>';
                $('body').append(html);
            }
            var contact = $('.confirm');
            var height = $('.confirm').height();
            var mheight = 0 - height;
            _this.showGlass();
            var hideGlass = _this.hideGlass;
            contact.css({ bottom: mheight }).show().animate({ bottom: 0 }, 200).on('click', '.close', function () {
                contact.animate({ bottom: mheight }, 200);
                hideGlass();
            });
            if (_this.options.url) {
                contact.on('click', '.reelect', function () {
                    window.location.href = _this.options.url;
                });
            }
        }
        function bottomer(options) {
            var _this = options.that || this;
        }
        function contact(options) {
            var _this = options.that || this;
            var size = $('body').find('.contact').size();
            if (size > 0) {
            } else {
                var html = '' + '<div class="underside contact">' + '<div class="foot foot-ss">' + '<div class="block01">' + '<ul>' + '<li><span>&bull;</span>验证码下发会有延迟\uFF0C请耐心等待</li>' + '<li><span>&bull;</span>检查手机网络信号是否畅通</li>' + '<li><span>&bull;</span>检查手机号输入是否正确</li>' + '</ul>' + '</div>' + '<a class="h5" tel="4006785158" href="javascript:TaduNative.callPhoneNumber(\'4006785158\');">客服电话&nbsp;400-678-5158</a>' + '<a class="close" href="#">返回</a>' + '</div>' + '</div>';
                $('body').append(html);
            }
            var contact = $('.contact');
            var height = $('.contact').height();
            var mheight = 0 - height;
            _this.showGlass();
            var hideGlass = _this.hideGlass;
            contact.css({ bottom: mheight }).show().animate({ bottom: 0 }, 200).on('click', '.close', function () {
                contact.animate({ bottom: mheight }, 200);
                hideGlass();
            });
            $('body .glass').click(function () {
                contact.animate({ bottom: mheight }, 200);
                hideGlass();
            });
        }
        function verify(options) {
            var _this = options.that || this;
            var selector = _this.options.selector;
            var timeout = _this.options.timeout;
            var button = $(selector);
            var text = button.val();
            var _confirm = _this.confirm;
            console.log(_this);
            var _options = {
                msg: '每次充值最多获取3次验证码\u3002',
                that: _this
            };
            var timer;
            var clickTime = 0;
            button.on('click', function () {
                clickTime++;
                if (clickTime > 3) {
                    alert(_options);
                    _confirm(_options);
                } else {
                    var me = $(this);
                    me.prop('disabled', true);
                    var tm = timeout;
                    timer = setInterval(function () {
                        if (timeout < 0) {
                            clearInterval(timer);
                            me.val(text);
                            me.prop('disabled', false);
                            timeout = tm;
                        } else {
                            me.val('重新发送(' + timeout + ')');
                            timeout--;
                        }
                    }, 1000);
                }
            });
        }
        function input(options) {
            var _this = options.that || this;
            var selector = _this.options.selector;
            var inputDiv = $(selector);
            inputDiv.on('input', 'input', function () {
            }).on('click', '.fault', function () {
            });
        }
        function destory(options) {
            switch (options.type) {
            case 'banner':
                break;
            case 'alert':
                break;
            case 'waiting':
                $('.mwaiting').hide();
                hideGlass(options);
                break;
            case 'confirm':
                break;
            case 'bottomer':
                break;
            case 'contact':
                break;
            case 'verify':
                break;
            default:
                break;
            }
        }
        return {
            init: function (options) {
                init(options);
            },
            exports: function (options) {
                exports(options);
            },
            destory: function (options) {
                destory(options);
            }
        };
    };
    return exports;
});
define('webapp/template/main.html', [], function () {
    return '<h3>Template says: <%= model.message %></h3>\n\n<a href="#a1">a1</a><br/>\n<a href="#a2">a2</a><br/>\n<a href="#a3">a3</a><br/>\n\n<a href="#giftbag">giftbag</a><br/>\n<a href="#goods/digest">goods/digest</a><br/>\n<a href="#goods/detail">goods/detail</a><br/>';
});
define('webapp/template/a.html', [], function () {
    return '<h5>渲染<%= model.message %></h5>\n\n<a href="#close" class="close">返回</a>';
});
define('webapp/view/view', [
    'jquery',
    'underscore',
    'backbone',
    'tool/a',
    'webapp/model/model',
    'tool/caesar',
    'webapp/template/main.html',
    'webapp/template/a.html'
], function ($, _, Backbone, a, model, Caesar, template, aTpl) {
    var View = Backbone.View.extend({
        el: '#main',
        initialize: function () {
            this.model = new model({ message: 'Hello World' });
            this.aModel = new model({ message: 'A' });
            this.template = _.template(template, { model: this.model.toJSON() });
        },
        render: function (type) {
            alert('view view type: ' + type);
            switch (type) {
            case 'a1':
                this.aTemplate = _.template(aTpl, { model: this.aModel.toJSON() });
                $(this.el).append(this.aTemplate);
                var options = {
                    type: 'waiting',
                    msg: '请稍后\uFF01',
                    timeout: 500
                };
                var caesar = Caesar();
                caesar.exports(options);
                break;
            case 'giftbag':
                break;
            default:
                $(this.el).append(this.template);
                break;
            }
        },
        showWaiting: function () {
        }
    });
    return new View();
});
define('webapp/config/config', [
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone, _) {
    var Config = Backbone.Model.extend({
        page: [
            {
                name: '',
                route: ''
            },
            {
                name: '',
                route: ''
            },
            {
                name: '',
                route: ''
            }
        ],
        route: [
            {},
            {},
            {}
        ],
        url: {
            baseurl: '/api/v1/wechat',
            giftbag: {
                list: '/giftbag/list',
                detail: '/giftbag/detail'
            },
            goods: { detail: '/goods/detail' }
        }
    });
    return Config;
});
define('tool/dialog-test', [
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone, _) {
    var exports = function () {
        var _this = this;
        function a() {
            alert('dialog');
        }
        function init() {
            var overlay = $('.md-overlay');
            var f = $('.md-trigger');
            var l = f.size();
            for (var i = 0; i < l; i++) {
                var el = f.eq(i);
                function removeModal(hasPerspective, modal) {
                    modal.removeClass('md-show');
                    if (hasPerspective) {
                        $(document.documentElement).removeClass('md-perspective');
                    }
                }
                function removeModalHandler(modal) {
                    removeModal(el.hasClass('md-setperspective'), modal);
                }
                el.on('click', function (ev) {
                    var me = $(this);
                    var slct = me.data('modal');
                    var modal = $('#' + slct);
                    modal.addClass('md-show');
                    if (el.hasClass('md-setperspective')) {
                        setTimeout(function () {
                            $(document.documentElement).addClass('md-perspective');
                        }, 25);
                    }
                    var close = modal.find('.md-close');
                    close.on('click', function (ev) {
                        ev.stopPropagation();
                        removeModalHandler(modal);
                    });
                });
            }
        }
        return {
            a: function () {
                a();
            },
            init: function () {
                init();
            }
        };
    };
    return exports;
});
define('tool/slider', ['jquery'], function ($) {
    function Swipe(container, options) {
        'use strict';
        var noop = function () {
        };
        var offloadFn = function (fn) {
            setTimeout(fn || noop, 0);
        };
        var browser = {
            addEventListener: !!window.addEventListener,
            touch: 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch,
            transitions: function (temp) {
                var props = [
                    'transitionProperty',
                    'WebkitTransition',
                    'MozTransition',
                    'OTransition',
                    'msTransition'
                ];
                for (var i in props)
                    if (temp.style[props[i]] !== undefined)
                        return true;
                return false;
            }(document.createElement('swipe'))
        };
        if (!container)
            return;
        var element = container.children[0];
        var slides, slidePos, width, length;
        options = options || {};
        var index = parseInt(options.startSlide, 10) || 0;
        var speed = options.speed || 300;
        options.continuous = options.continuous !== undefined ? options.continuous : true;
        function setup() {
            slides = element.children;
            length = slides.length;
            if (slides.length < 2)
                options.continuous = false;
            if (browser.transitions && options.continuous && slides.length < 3) {
                element.appendChild(slides[0].cloneNode(true));
                element.appendChild(element.children[1].cloneNode(true));
                slides = element.children;
            }
            slidePos = new Array(slides.length);
            width = container.getBoundingClientRect().width || container.offsetWidth;
            element.style.width = slides.length * width + 'px';
            var pos = slides.length;
            while (pos--) {
                var slide = slides[pos];
                slide.style.width = width + 'px';
                slide.setAttribute('data-index', pos);
                if (browser.transitions) {
                    slide.style.left = pos * -width + 'px';
                    move(pos, index > pos ? -width : index < pos ? width : 0, 0);
                }
            }
            if (options.continuous && browser.transitions) {
                move(circle(index - 1), -width, 0);
                move(circle(index + 1), width, 0);
            }
            if (!browser.transitions)
                element.style.left = index * -width + 'px';
            container.style.visibility = 'visible';
        }
        function prev() {
            if (options.continuous)
                slide(index - 1);
            else if (index)
                slide(index - 1);
        }
        function next() {
            if (options.continuous)
                slide(index + 1);
            else if (index < slides.length - 1)
                slide(index + 1);
        }
        function circle(index) {
            return (slides.length + index % slides.length) % slides.length;
        }
        function slide(to, slideSpeed) {
            if (index == to)
                return;
            if (browser.transitions) {
                var direction = Math.abs(index - to) / (index - to);
                if (options.continuous) {
                    var natural_direction = direction;
                    direction = -slidePos[circle(to)] / width;
                    if (direction !== natural_direction)
                        to = -direction * slides.length + to;
                }
                var diff = Math.abs(index - to) - 1;
                while (diff--)
                    move(circle((to > index ? to : index) - diff - 1), width * direction, 0);
                to = circle(to);
                move(index, width * direction, slideSpeed || speed);
                move(to, 0, slideSpeed || speed);
                if (options.continuous)
                    move(circle(to - direction), -(width * direction), 0);
            } else {
                to = circle(to);
                animate(index * -width, to * -width, slideSpeed || speed);
            }
            index = to;
            offloadFn(options.callback && options.callback(index, slides[index]));
        }
        function move(index, dist, speed) {
            translate(index, dist, speed);
            slidePos[index] = dist;
        }
        function translate(index, dist, speed) {
            var slide = slides[index];
            var style = slide && slide.style;
            if (!style)
                return;
            style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = speed + 'ms';
            style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
            style.msTransform = style.MozTransform = style.OTransform = 'translateX(' + dist + 'px)';
        }
        function animate(from, to, speed) {
            if (!speed) {
                element.style.left = to + 'px';
                return;
            }
            var start = +new Date();
            var timer = setInterval(function () {
                var timeElap = +new Date() - start;
                if (timeElap > speed) {
                    element.style.left = to + 'px';
                    if (delay)
                        begin();
                    options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
                    clearInterval(timer);
                    return;
                }
                element.style.left = (to - from) * (Math.floor(timeElap / speed * 100) / 100) + from + 'px';
            }, 4);
        }
        var delay = options.auto || 3000;
        var interval;
        function begin() {
            interval = setTimeout(next, delay);
        }
        function stop() {
            clearTimeout(interval);
        }
        var start = {};
        var delta = {};
        var isScrolling;
        var events = {
            handleEvent: function (event) {
                switch (event.type) {
                case 'touchstart':
                    this.start(event);
                    break;
                case 'touchmove':
                    this.move(event);
                    break;
                case 'touchend':
                    offloadFn(this.end(event));
                    break;
                case 'webkitTransitionEnd':
                case 'msTransitionEnd':
                case 'oTransitionEnd':
                case 'otransitionend':
                case 'transitionend':
                    offloadFn(this.transitionEnd(event));
                    break;
                case 'resize':
                    offloadFn(setup);
                    break;
                }
                if (options.stopPropagation)
                    event.stopPropagation();
            },
            start: function (event) {
                var touches = event.touches[0];
                start = {
                    x: touches.pageX,
                    y: touches.pageY,
                    time: +new Date()
                };
                if (index !== 0 && typeof TaduNative != 'undefined') {
                    TaduNative.lockTouchEvent();
                }
                isScrolling = undefined;
                delta = {};
                element.addEventListener('touchmove', this, false);
                element.addEventListener('touchend', this, false);
            },
            move: function (event) {
                if (event.touches.length > 1 || event.scale && event.scale !== 1)
                    return;
                if (options.disableScroll)
                    event.preventDefault();
                var touches = event.touches[0];
                delta = {
                    x: touches.pageX - start.x,
                    y: touches.pageY - start.y
                };
                if (typeof isScrolling == 'undefined') {
                    isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
                }
                if (!isScrolling) {
                    event.preventDefault();
                    stop();
                    if (options.continuous) {
                        translate(circle(index - 1), delta.x + slidePos[circle(index - 1)], 0);
                        translate(index, delta.x + slidePos[index], 0);
                        translate(circle(index + 1), delta.x + slidePos[circle(index + 1)], 0);
                    } else {
                        delta.x = delta.x / (!index && delta.x > 0 || index == slides.length - 1 && delta.x < 0 ? Math.abs(delta.x) / width + 1 : 1);
                        translate(index - 1, delta.x + slidePos[index - 1], 0);
                        translate(index, delta.x + slidePos[index], 0);
                        translate(index + 1, delta.x + slidePos[index + 1], 0);
                    }
                }
            },
            end: function (event) {
                var duration = +new Date() - start.time;
                var isValidSlide = Number(duration) < 250 && Math.abs(delta.x) > 20 || Math.abs(delta.x) > width / 2;
                var isPastBounds = !index && delta.x > 0 || index == slides.length - 1 && delta.x < 0;
                if (options.continuous)
                    isPastBounds = false;
                var direction = delta.x < 0;
                if (!isScrolling) {
                    if (isValidSlide && !isPastBounds) {
                        if (direction) {
                            if (options.continuous) {
                                move(circle(index - 1), -width, 0);
                                move(circle(index + 2), width, 0);
                            } else {
                                move(index - 1, -width, 0);
                            }
                            move(index, slidePos[index] - width, speed);
                            move(circle(index + 1), slidePos[circle(index + 1)] - width, speed);
                            index = circle(index + 1);
                        } else {
                            if (options.continuous) {
                                move(circle(index + 1), width, 0);
                                move(circle(index - 2), -width, 0);
                            } else {
                                move(index + 1, width, 0);
                            }
                            move(index, slidePos[index] + width, speed);
                            move(circle(index - 1), slidePos[circle(index - 1)] + width, speed);
                            index = circle(index - 1);
                        }
                        options.callback && options.callback(index, slides[index]);
                    } else {
                        if (options.continuous) {
                            move(circle(index - 1), -width, speed);
                            move(index, 0, speed);
                            move(circle(index + 1), width, speed);
                        } else {
                            move(index - 1, -width, speed);
                            move(index, 0, speed);
                            move(index + 1, width, speed);
                        }
                    }
                }
                element.removeEventListener('touchmove', events, false);
                element.removeEventListener('touchend', events, false);
            },
            transitionEnd: function (event) {
                if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
                    if (delay)
                        begin();
                    options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
                }
            }
        };
        setup();
        if (delay)
            begin();
        if (browser.addEventListener) {
            if (browser.touch)
                element.addEventListener('touchstart', events, false);
            if (browser.transitions) {
                element.addEventListener('webkitTransitionEnd', events, false);
                element.addEventListener('msTransitionEnd', events, false);
                element.addEventListener('oTransitionEnd', events, false);
                element.addEventListener('otransitionend', events, false);
                element.addEventListener('transitionend', events, false);
            }
            window.addEventListener('resize', events, false);
        } else {
            window.onresize = function () {
                setup();
            };
        }
        return {
            setup: function () {
                setup();
            },
            slide: function (to, speed) {
                stop();
                slide(to, speed);
            },
            prev: function () {
                stop();
                prev();
            },
            next: function () {
                stop();
                next();
            },
            stop: function () {
                stop();
            },
            getPos: function () {
                return index;
            },
            getNumSlides: function () {
                return length;
            },
            kill: function () {
                stop();
                element.style.width = '';
                element.style.left = '';
                var pos = slides.length;
                while (pos--) {
                    var slide = slides[pos];
                    slide.style.width = '';
                    slide.style.left = '';
                    if (browser.transitions)
                        translate(pos, 0, 0);
                }
                if (browser.addEventListener) {
                    element.removeEventListener('touchstart', events, false);
                    element.removeEventListener('webkitTransitionEnd', events, false);
                    element.removeEventListener('msTransitionEnd', events, false);
                    element.removeEventListener('oTransitionEnd', events, false);
                    element.removeEventListener('otransitionend', events, false);
                    element.removeEventListener('transitionend', events, false);
                    window.removeEventListener('resize', events, false);
                } else {
                    window.onresize = null;
                }
            }
        };
    }
    return Swipe;
});
define('webapp/template/giftbagList.html', [], function () {
    return '<li class="pure-g adv">\n<% for (var i = 0;i < model.giftbagList.length;i++) { %>\n    <div class="pure-u-1 pure-u-md-1-3 giftbag" data-id="<%= model.giftbagList[i].id %>">\n        <a class="ad" href="#giftbag/detail/<%= model.giftbagList[i].id %>">\n            <strong><%= model.giftbagList[i].title %></strong>\n        </a>\n    </div>\n<% } %>\n</li>';
});
define('webapp/template/giftbagDetail.html', [], function () {
    return '<div class="pure-g adv">\n<% for (var i = 0;i < model.goodsList.length;i++) { %>\n    <div class="pure-u-1 pure-u-md-1-3 giftbag" data-id="<%= model.goodsList[i].id %>">\n        <a class="ad" href="#goods/detail/<%= model.goodsList[i].id %>">\n            <strong><%= model.goodsList[i].title %></strong>\n        </a>\n    </div>\n<% } %>\n</div>\n\n<a href="#close/main" class="close" data-target="main">\n    <span>&larr;</span>\n</a>';
});
define('webapp/template/goodsDetail.html', [], function () {
    return '<div class="pure-g adv">\n    <div class="pure-u-1 pure-u-md-1-3 giftbag" data-id="<%= model.goods.id %>">\n        <a class="ad goodadd" href="javascript:void(0);">\n            <strong><%= model.goods.title %></strong>\n        </a>\n    </div>\n</div>\n\n<a href="#close/giftbag-detail-view" class="close" data-target="main">\n    <span>&larr;</span>\n</a>';
});
define('webapp/view/index', [
    'jquery',
    'underscore',
    'backbone',
    'webapp/config/config',
    'webapp/model/model',
    'tool/dialog-test',
    'tool/slider',
    'tool/caesar',
    'webapp/template/main.html',
    'webapp/template/a.html',
    'webapp/template/giftbagList.html',
    'webapp/template/giftbagDetail.html',
    'webapp/template/goodsDetail.html'
], function ($, _, Backbone, config, Model, TDialog, Swipe, Caesar, template, aTpl, giftbagListTpl, giftbagDetailTpl, goodsDetailTpl) {
    var tdialog = TDialog();
    tdialog.init();
    var View = Backbone.View.extend({
        el: '#main',
        initialize: function () {
            window.pagination = {};
            window.pagination.giftbagList = 0;
            this.model = new Model({ message: 'Hello World' });
            this.aModel = new Model({ message: 'A' });
            this.giftbagModel = new Model({ message: 'A' });
            this.config = new config();
            this.template = _.template(template, { model: this.model.toJSON() });
            this.aTemplate = _.template(aTpl, { model: this.aModel.toJSON() });
        },
        render: function (type, obj) {
            alert('view index type: ' + type);
            $('html').on('touchstart', function () {
            }).on('touchmove', function () {
                return false;
            });
            switch (type) {
            case 'a1':
                $(this.el).append(this.aTemplate);
                var options = {
                    type: 'waiting',
                    msg: '请稍后\uFF01',
                    timeout: 500
                };
                var caesar = Caesar();
                caesar.exports(options);
                break;
            case 'giftbag':
                this.giftbagTemplate = _.template(giftbagTpl, { model: this.giftbagModel.toJSON() });
                $('#giftbag-view').html('').append(this.giftbagTemplate).addClass('show');
                break;
            case 'giftbagDetail':
                this.hideAd();
                var id = obj.id;
                var param = {};
                param.module = 'giftbagDetail';
                param.addPageGlass = this.addPageGlass;
                param.url = this.config.url.baseurl + this.config.url.giftbag.detail;
                param.type = 'GET';
                param.id = id;
                console.log('giftbagDetail: ' + id);
                param.success = function (data) {
                    var model = new Model(data);
                    var template = _.template(giftbagDetailTpl, { model: model.toJSON() });
                    var page = $('#giftbag-detail-view');
                    $('.page.show').removeClass('show');
                    page.html('').append(template).addClass('show').addClass('animated slideInUp').scrollTop(0);
                };
                param.error = function (response) {
                };
                param.callback = function () {
                    $('body').scrollTop(0);
                    param.addPageGlass();
                };
                this.ajax(param);
                break;
            case 'digest':
                break;
            case 'goodsDetail':
                var id = obj.id;
                var param = {};
                param.module = 'goodsDetail';
                param.addPageGlass = this.addPageGlass;
                param.url = this.config.url.baseurl + this.config.url.goods.detail;
                param.type = 'GET';
                param.id = id;
                console.log('goodsDetail: ' + id);
                param.success = function (data) {
                    var model = new Model(data);
                    var template = _.template(goodsDetailTpl, { model: model.toJSON() });
                    var page = $('#goods-detail-view');
                    $('.page.show').removeClass('show');
                    page.html('').append(template).addClass('show').addClass('animated zoomIn').scrollTop(0).on('click', '.goodadd', function () {
                        var me = $(this);
                        var id = me.data('id');
                        var sc = $('.shopping-count');
                        var sum = sc.text();
                        sum = parseInt(sum) + 1;
                        sc.text(sum);
                        console.log(sum);
                        if (sum > 0) {
                            sc.show();
                        } else {
                            sc.hide();
                        }
                    });
                };
                param.error = function (response) {
                };
                param.callback = function () {
                    $('body').scrollTop(0);
                    param.addPageGlass();
                };
                this.ajax(param);
                break;
            case 'close':
                var target = obj.target;
                $('.page.show').off();
                $('.page.show').removeClass('show');
                $('#' + target).addClass('show');
                if (target == 'main') {
                    this.showAd();
                    var glass = $('.glass-for-page');
                    if (glass.hasClass('show')) {
                        glass.removeClass('show');
                    }
                }
                $('body').scrollTop(0);
                break;
            default:
                this.addAd();
                this.addSales([
                    0,
                    1,
                    2,
                    3,
                    4
                ]);
                var openid = '0';
                var param = {};
                param.module = 'giftbagList';
                param.ajax = this.ajax;
                param.iscroll = this.iscroll;
                this.iscroll('#main', 'y');
                param.url = this.config.url.baseurl + this.config.url.giftbag.list;
                param.type = 'GET';
                param.openid = openid;
                param.pagination = window.pagination.giftbagList;
                param.success = function (data) {
                    var model = new Model(data);
                    var template = _.template(giftbagListTpl, { model: model.toJSON() });
                    var page = $('#main');
                    if (data.more == '0') {
                        page.find('.more').hide();
                    }
                    if (window.pagination.giftbagList == 0 && data.more != '0') {
                        page.append(template).addClass('show').append('<a href="javascript:void(0);" class="more">更多吃哒</a>').on('click', '.giftbag', function () {
                            var me = $(this);
                            var id = me.data('id');
                        }).on('click', '.more', function () {
                            var me = $(this);
                            window.pagination.giftbagList++;
                            param.ajax(param);
                            return false;
                        });
                    } else if (window.pagination.giftbagList != 0) {
                        page.find('.more').before(template);
                    }
                };
                param.error = function (response) {
                };
                param.callback = function () {
                    if ($('body').hasClass('mobile'))
                        param.iscroll('#main', 'y');
                };
                this.ajax(param);
                setTimeout(function () {
                }, 1000);
                break;
            }
        },
        addAd: function () {
            var html = '' + '<li id="slider" class="slider">' + '<div class="swipe-wrap">' + '<div class="wrap"><a href="javascript:void(0);"><img class="adimg" src="/wechat/images/ad/img.jpg"/></a></div>' + '<div class="wrap"><a href="javascript:void(0);"><img class="adimg" src="/wechat/images/ad/img02.jpg"/></a></div>' + '<div class="wrap"><a href="javascript:void(0);"><img class="adimg" src="/wechat/images/ad/img03.jpg"/></a></div>' + '<div class="wrap"><a href="javascript:void(0);"><img class="adimg" src="/wechat/images/ad/img04.jpg"/></a></div>' + '</div>' + '<div class="dot">' + '</div>' + '</li>';
            $('#main').append(html);
            var len = $('#slider .wrap').size();
            if (len > 1) {
                for (var i = 0; i < len; i++) {
                    $('#slider .dot').append(i == 0 ? '<span class="current"></span>' : '<span></span>');
                }
                var islider = new Swipe(document.getElementById('slider'), {
                    transitionEnd: function (index, elem) {
                        $('#slider .dot span').removeClass('current').eq(index).addClass('current');
                    }
                });
            }
        },
        hideAd: function () {
            $('#slider').hide();
        },
        showAd: function () {
            $('#slider').show();
        },
        addSales: function (arr) {
            var goodsHtml = '';
            for (var i = 0; i < arr.length; i++) {
                goodsHtml = goodsHtml + '' + '<div class="pure-1-5">' + '<a _type="x" class="p51" href="javascript:void(0);">' + '<img  _type="x" class="p51" src="/wechat/images/ad/img.jpg"/></a>' + '</div>';
            }
            var html = '' + '<li id="sales" class="pure-2g">' + goodsHtml + '</li>';
            $('#main').append(html);
            this.iscroll('#sales', 'x');
        },
        hideSales: function () {
            $('#sales').hide();
        },
        showSales: function () {
            $('#sales').show();
        },
        addPageGlass: function () {
            var glass = $('.glass-for-page');
            if (glass.hasClass('show')) {
                return;
            } else {
                glass.addClass('show');
            }
        },
        showWaiting: function () {
        },
        rendering: function (select, tpl) {
            $(select).html('').append(tpl).addClass('show');
        },
        ajax: function (param) {
            var options = {
                type: 'waiting',
                msg: '请稍后\uFF01'
            };
            var caesar = Caesar();
            caesar.exports(options);
            var data = {};
            switch (param.module) {
            case 'giftbagList':
                data = {
                    openid: param.openid,
                    pagination: param.pagination
                };
                break;
            case 'giftbagDetail':
                data = { id: param.id };
                break;
            case 'goodsDetail':
                data = { id: param.id };
                break;
            }
            $.ajax({
                url: param.url,
                type: param.type,
                dataType: 'json',
                data: data
            }).done(function (response) {
                if (response.code == 0) {
                    var data = response.data;
                    if (param.success) {
                        param.success(data);
                    }
                } else {
                    alert(response.msg);
                }
            }).fail(function (response) {
            }).always(function () {
                if (param.callback) {
                    param.callback();
                }
                caesar.destory(options);
            });
        },
        iscroll: function (select, type) {
            console.log(select);
            if (!select)
                return;
            var el = $('' + select);
            var _type = type;
            var bl = $('body');
            var bw = bl.width();
            var bh = bl.height();
            var ew = el.width();
            var eh = el.height() + 110;
            if (_type == 'y' && eh > bh) {
                doScroll();
            } else if (_type == 'x' && ew > bw) {
                doScroll();
            } else {
                return;
            }
            function doScroll(_type) {
                el.addClass('iscroll');
                console.log('load iscroll');
                var startPosition, endPosition, deltaX, deltaY, moveLength;
                var elm = document.getElementsByClassName('mobile')[0];
                elm.addEventListener('touchstart', function (e) {
                    var touch = e.touches[0];
                    var eX = el.offset().left;
                    var eY = el.css('top').split('px')[0];
                    eY = parseInt(eY);
                    startPosition = {
                        x: touch.pageX,
                        y: touch.pageY,
                        eX: eX,
                        eY: eY,
                        bh: bh,
                        bw: bw,
                        eh: eh,
                        ew: ew,
                        stype: 'y'
                    };
                });
                elm.addEventListener('touchmove', function (e) {
                    var touch = e.touches[0];
                    var target = e.target;
                    var name = target.className;
                    console.log('target name: ' + name);
                    if (name == 'adimg') {
                        return;
                    }
                    if (name == 'p51') {
                        console.log('11111111111111');
                        startPosition.stype = 'x';
                    } else {
                        startPosition.stype = 'y';
                    }
                    endPosition = {
                        x: touch.pageX,
                        y: touch.pageY
                    };
                    deltaX = endPosition.x - startPosition.x;
                    deltaY = endPosition.y - startPosition.y;
                    console.log('deltaX: ' + deltaX + ', deltaY: ' + deltaY);
                    var x = startPosition.eX + deltaX;
                    var xm = startPosition.bw - startPosition.ew + 0;
                    var y = startPosition.eY + deltaY;
                    var ym = startPosition.bh - startPosition.eh + 40;
                    if (startPosition.stype == 'y') {
                        if (y > 0) {
                            y = 0;
                        }
                        if (y < ym) {
                            y = ym;
                        }
                        el.css('top', y);
                    } else if (startPosition.stype == 'x') {
                        console.log(startPosition.stype);
                        console.log('x: ' + x + ', xm: ' + xm);
                        if (x > 0) {
                            x = 0;
                        }
                        if (x < xm) {
                            x = xm;
                        }
                        el.css('left', x);
                    }
                    if (deltaY >= 0) {
                    } else {
                    }
                });
            }
        },
        index: function (a) {
            return a ? typeof a == 'string' ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
        },
        removeModal: function (hasPerspective, modal) {
            modal.removeClass('show');
            if (hasPerspective) {
                $(document.documentElement).removeClass('perspective');
            }
        }
    });
    return new View();
});
console.log('routers/index');
define('webapp/router/index', [
    'jquery',
    'underscore',
    'backbone',
    'webapp/view/view',
    'webapp/view/index'
], function ($, _, Backbone, mainView, indexView) {
    var Router = Backbone.Router.extend({
        initialize: function () {
            this.indexView = indexView;
            this.mainView = mainView;
            addView();
            Backbone.history.start();
        },
        routes: {
            '': 'index',
            'a1': 'a1',
            'a2': 'a1',
            'a3': 'a1',
            'giftbag/list': 'giftbagList',
            'giftbag/detail/:id': 'giftbagDetail',
            'goods/list': 'goodsList',
            'goods/detail/:id': 'goodsDetail',
            'close/:target': 'close'
        },
        'index': function () {
            this.indexView.render();
        },
        'a1': function () {
            this.mainView.render('a1');
        },
        'giftbagList': function () {
            this.indexView.render('giftbagList');
        },
        'giftbagDetail': function (id) {
            var param = {};
            param.id = id;
            this.indexView.render('giftbagDetail', param);
        },
        'goodsList': function () {
            this.indexView.render('a1');
        },
        'goodsDetail': function (id) {
            var param = {};
            param.id = id;
            this.indexView.render('goodsDetail', param);
        },
        'close': function (target) {
            var param = {};
            param.target = target;
            this.indexView.render('close', param);
        }
    });
    function addView() {
    }
    return Router;
});
define('app', ['webapp/router/index'], function (router) {
    var init = function () {
        this.router = new router();
    };
    return { init: init };
});
requirejs.config({
    baseUrl: 'dist/js',
    paths: {
        'underscore': 'lib/src/underscore.min',
        'backbone': 'lib/src/backbone.min',
        'jquery': 'lib/src/jquery-1.11.3.min',
        'config': 'lib/config/config',
        'app': 'webapp/app'
    }
});
require([
    'jquery',
    'underscore',
    'backbone',
    'app'
], function ($, _, Backbone, app) {
    app.init();
});
define('webapp/main', [
    'jquery',
    'underscore',
    'backbone',
    'app'
], function () {
    return;
});