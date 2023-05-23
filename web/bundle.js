"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a4, b3) => {
    for (var prop in b3 ||= {})
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a4, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a4, prop, b3[prop]);
      }
    return a4;
  };
  var __spreadProps = (a4, b3) => __defProps(a4, __getOwnPropDescs(b3));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i10 = decorators.length - 1, decorator; i10 >= 0; i10--)
      if (decorator = decorators[i10])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // bundle/node_modules/@lit/reactive-element/css-tag.js
  var t = window;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var n = /* @__PURE__ */ new WeakMap();
  var o = class {
    constructor(t10, e12, n10) {
      if (this._$cssResult$ = true, n10 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t10, this.t = e12;
    }
    get styleSheet() {
      let t10 = this.o;
      const s11 = this.t;
      if (e && void 0 === t10) {
        const e12 = void 0 !== s11 && 1 === s11.length;
        e12 && (t10 = n.get(s11)), void 0 === t10 && ((this.o = t10 = new CSSStyleSheet()).replaceSync(this.cssText), e12 && n.set(s11, t10));
      }
      return t10;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t10) => new o("string" == typeof t10 ? t10 : t10 + "", void 0, s);
  var i = (t10, ...e12) => {
    const n10 = 1 === t10.length ? t10[0] : e12.reduce((e13, s11, n11) => e13 + ((t11) => {
      if (true === t11._$cssResult$)
        return t11.cssText;
      if ("number" == typeof t11)
        return t11;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t11 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s11) + t10[n11 + 1], t10[0]);
    return new o(n10, t10, s);
  };
  var S = (s11, n10) => {
    e ? s11.adoptedStyleSheets = n10.map((t10) => t10 instanceof CSSStyleSheet ? t10 : t10.styleSheet) : n10.forEach((e12) => {
      const n11 = document.createElement("style"), o13 = t.litNonce;
      void 0 !== o13 && n11.setAttribute("nonce", o13), n11.textContent = e12.cssText, s11.appendChild(n11);
    });
  };
  var c = e ? (t10) => t10 : (t10) => t10 instanceof CSSStyleSheet ? ((t11) => {
    let e12 = "";
    for (const s11 of t11.cssRules)
      e12 += s11.cssText;
    return r(e12);
  })(t10) : t10;

  // bundle/node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window;
  var r2 = e2.trustedTypes;
  var h = r2 ? r2.emptyScript : "";
  var o2 = e2.reactiveElementPolyfillSupport;
  var n2 = { toAttribute(t10, i10) {
    switch (i10) {
      case Boolean:
        t10 = t10 ? h : null;
        break;
      case Object:
      case Array:
        t10 = null == t10 ? t10 : JSON.stringify(t10);
    }
    return t10;
  }, fromAttribute(t10, i10) {
    let s11 = t10;
    switch (i10) {
      case Boolean:
        s11 = null !== t10;
        break;
      case Number:
        s11 = null === t10 ? null : Number(t10);
        break;
      case Object:
      case Array:
        try {
          s11 = JSON.parse(t10);
        } catch (t11) {
          s11 = null;
        }
    }
    return s11;
  } };
  var a = (t10, i10) => i10 !== t10 && (i10 == i10 || t10 == t10);
  var l = { attribute: true, type: String, converter: n2, reflect: false, hasChanged: a };
  var d = class extends HTMLElement {
    constructor() {
      super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
    }
    static addInitializer(t10) {
      var i10;
      this.finalize(), (null !== (i10 = this.h) && void 0 !== i10 ? i10 : this.h = []).push(t10);
    }
    static get observedAttributes() {
      this.finalize();
      const t10 = [];
      return this.elementProperties.forEach((i10, s11) => {
        const e12 = this._$Ep(s11, i10);
        void 0 !== e12 && (this._$Ev.set(e12, s11), t10.push(e12));
      }), t10;
    }
    static createProperty(t10, i10 = l) {
      if (i10.state && (i10.attribute = false), this.finalize(), this.elementProperties.set(t10, i10), !i10.noAccessor && !this.prototype.hasOwnProperty(t10)) {
        const s11 = "symbol" == typeof t10 ? Symbol() : "__" + t10, e12 = this.getPropertyDescriptor(t10, s11, i10);
        void 0 !== e12 && Object.defineProperty(this.prototype, t10, e12);
      }
    }
    static getPropertyDescriptor(t10, i10, s11) {
      return { get() {
        return this[i10];
      }, set(e12) {
        const r6 = this[t10];
        this[i10] = e12, this.requestUpdate(t10, r6, s11);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t10) {
      return this.elementProperties.get(t10) || l;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t10 = Object.getPrototypeOf(this);
      if (t10.finalize(), void 0 !== t10.h && (this.h = [...t10.h]), this.elementProperties = new Map(t10.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
        const t11 = this.properties, i10 = [...Object.getOwnPropertyNames(t11), ...Object.getOwnPropertySymbols(t11)];
        for (const s11 of i10)
          this.createProperty(s11, t11[s11]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i10) {
      const s11 = [];
      if (Array.isArray(i10)) {
        const e12 = new Set(i10.flat(1 / 0).reverse());
        for (const i11 of e12)
          s11.unshift(c(i11));
      } else
        void 0 !== i10 && s11.push(c(i10));
      return s11;
    }
    static _$Ep(t10, i10) {
      const s11 = i10.attribute;
      return false === s11 ? void 0 : "string" == typeof s11 ? s11 : "string" == typeof t10 ? t10.toLowerCase() : void 0;
    }
    u() {
      var t10;
      this._$E_ = new Promise((t11) => this.enableUpdating = t11), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t10 = this.constructor.h) || void 0 === t10 || t10.forEach((t11) => t11(this));
    }
    addController(t10) {
      var i10, s11;
      (null !== (i10 = this._$ES) && void 0 !== i10 ? i10 : this._$ES = []).push(t10), void 0 !== this.renderRoot && this.isConnected && (null === (s11 = t10.hostConnected) || void 0 === s11 || s11.call(t10));
    }
    removeController(t10) {
      var i10;
      null === (i10 = this._$ES) || void 0 === i10 || i10.splice(this._$ES.indexOf(t10) >>> 0, 1);
    }
    _$Eg() {
      this.constructor.elementProperties.forEach((t10, i10) => {
        this.hasOwnProperty(i10) && (this._$Ei.set(i10, this[i10]), delete this[i10]);
      });
    }
    createRenderRoot() {
      var t10;
      const s11 = null !== (t10 = this.shadowRoot) && void 0 !== t10 ? t10 : this.attachShadow(this.constructor.shadowRootOptions);
      return S(s11, this.constructor.elementStyles), s11;
    }
    connectedCallback() {
      var t10;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t10 = this._$ES) || void 0 === t10 || t10.forEach((t11) => {
        var i10;
        return null === (i10 = t11.hostConnected) || void 0 === i10 ? void 0 : i10.call(t11);
      });
    }
    enableUpdating(t10) {
    }
    disconnectedCallback() {
      var t10;
      null === (t10 = this._$ES) || void 0 === t10 || t10.forEach((t11) => {
        var i10;
        return null === (i10 = t11.hostDisconnected) || void 0 === i10 ? void 0 : i10.call(t11);
      });
    }
    attributeChangedCallback(t10, i10, s11) {
      this._$AK(t10, s11);
    }
    _$EO(t10, i10, s11 = l) {
      var e12;
      const r6 = this.constructor._$Ep(t10, s11);
      if (void 0 !== r6 && true === s11.reflect) {
        const h4 = (void 0 !== (null === (e12 = s11.converter) || void 0 === e12 ? void 0 : e12.toAttribute) ? s11.converter : n2).toAttribute(i10, s11.type);
        this._$El = t10, null == h4 ? this.removeAttribute(r6) : this.setAttribute(r6, h4), this._$El = null;
      }
    }
    _$AK(t10, i10) {
      var s11;
      const e12 = this.constructor, r6 = e12._$Ev.get(t10);
      if (void 0 !== r6 && this._$El !== r6) {
        const t11 = e12.getPropertyOptions(r6), h4 = "function" == typeof t11.converter ? { fromAttribute: t11.converter } : void 0 !== (null === (s11 = t11.converter) || void 0 === s11 ? void 0 : s11.fromAttribute) ? t11.converter : n2;
        this._$El = r6, this[r6] = h4.fromAttribute(i10, t11.type), this._$El = null;
      }
    }
    requestUpdate(t10, i10, s11) {
      let e12 = true;
      void 0 !== t10 && (((s11 = s11 || this.constructor.getPropertyOptions(t10)).hasChanged || a)(this[t10], i10) ? (this._$AL.has(t10) || this._$AL.set(t10, i10), true === s11.reflect && this._$El !== t10 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t10, s11))) : e12 = false), !this.isUpdatePending && e12 && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
      this.isUpdatePending = true;
      try {
        await this._$E_;
      } catch (t11) {
        Promise.reject(t11);
      }
      const t10 = this.scheduleUpdate();
      return null != t10 && await t10, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t10;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach((t11, i11) => this[i11] = t11), this._$Ei = void 0);
      let i10 = false;
      const s11 = this._$AL;
      try {
        i10 = this.shouldUpdate(s11), i10 ? (this.willUpdate(s11), null === (t10 = this._$ES) || void 0 === t10 || t10.forEach((t11) => {
          var i11;
          return null === (i11 = t11.hostUpdate) || void 0 === i11 ? void 0 : i11.call(t11);
        }), this.update(s11)) : this._$Ek();
      } catch (t11) {
        throw i10 = false, this._$Ek(), t11;
      }
      i10 && this._$AE(s11);
    }
    willUpdate(t10) {
    }
    _$AE(t10) {
      var i10;
      null === (i10 = this._$ES) || void 0 === i10 || i10.forEach((t11) => {
        var i11;
        return null === (i11 = t11.hostUpdated) || void 0 === i11 ? void 0 : i11.call(t11);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t10)), this.updated(t10);
    }
    _$Ek() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$E_;
    }
    shouldUpdate(t10) {
      return true;
    }
    update(t10) {
      void 0 !== this._$EC && (this._$EC.forEach((t11, i10) => this._$EO(i10, this[i10], t11)), this._$EC = void 0), this._$Ek();
    }
    updated(t10) {
    }
    firstUpdated(t10) {
    }
  };
  d.finalized = true, d.elementProperties = /* @__PURE__ */ new Map(), d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, null == o2 || o2({ ReactiveElement: d }), (null !== (s2 = e2.reactiveElementVersions) && void 0 !== s2 ? s2 : e2.reactiveElementVersions = []).push("1.6.1");

  // bundle/node_modules/lit-html/lit-html.js
  var t2;
  var i2 = window;
  var s3 = i2.trustedTypes;
  var e3 = s3 ? s3.createPolicy("lit-html", { createHTML: (t10) => t10 }) : void 0;
  var o3 = "$lit$";
  var n3 = `lit$${(Math.random() + "").slice(9)}$`;
  var l2 = "?" + n3;
  var h2 = `<${l2}>`;
  var r3 = document;
  var d2 = () => r3.createComment("");
  var u = (t10) => null === t10 || "object" != typeof t10 && "function" != typeof t10;
  var c2 = Array.isArray;
  var v = (t10) => c2(t10) || "function" == typeof (null == t10 ? void 0 : t10[Symbol.iterator]);
  var a2 = "[ 	\n\f\r]";
  var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p = RegExp(`>|${a2}(?:([^\\s"'>=/]+)(${a2}*=${a2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y = /^(?:script|style|textarea|title)$/i;
  var w = (t10) => (i10, ...s11) => ({ _$litType$: t10, strings: i10, values: s11 });
  var x = w(1);
  var b = w(2);
  var T = Symbol.for("lit-noChange");
  var A = Symbol.for("lit-nothing");
  var E = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129, null, false);
  var P = (t10, i10) => {
    const s11 = t10.length - 1, l9 = [];
    let r6, d4 = 2 === i10 ? "<svg>" : "", u5 = f;
    for (let i11 = 0; i11 < s11; i11++) {
      const s12 = t10[i11];
      let e12, c7, v3 = -1, a4 = 0;
      for (; a4 < s12.length && (u5.lastIndex = a4, c7 = u5.exec(s12), null !== c7); )
        a4 = u5.lastIndex, u5 === f ? "!--" === c7[1] ? u5 = _ : void 0 !== c7[1] ? u5 = m : void 0 !== c7[2] ? (y.test(c7[2]) && (r6 = RegExp("</" + c7[2], "g")), u5 = p) : void 0 !== c7[3] && (u5 = p) : u5 === p ? ">" === c7[0] ? (u5 = null != r6 ? r6 : f, v3 = -1) : void 0 === c7[1] ? v3 = -2 : (v3 = u5.lastIndex - c7[2].length, e12 = c7[1], u5 = void 0 === c7[3] ? p : '"' === c7[3] ? $ : g) : u5 === $ || u5 === g ? u5 = p : u5 === _ || u5 === m ? u5 = f : (u5 = p, r6 = void 0);
      const w3 = u5 === p && t10[i11 + 1].startsWith("/>") ? " " : "";
      d4 += u5 === f ? s12 + h2 : v3 >= 0 ? (l9.push(e12), s12.slice(0, v3) + o3 + s12.slice(v3) + n3 + w3) : s12 + n3 + (-2 === v3 ? (l9.push(void 0), i11) : w3);
    }
    const c6 = d4 + (t10[s11] || "<?>") + (2 === i10 ? "</svg>" : "");
    if (!Array.isArray(t10) || !t10.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== e3 ? e3.createHTML(c6) : c6, l9];
  };
  var V = class {
    constructor({ strings: t10, _$litType$: i10 }, e12) {
      let h4;
      this.parts = [];
      let r6 = 0, u5 = 0;
      const c6 = t10.length - 1, v3 = this.parts, [a4, f4] = P(t10, i10);
      if (this.el = V.createElement(a4, e12), C.currentNode = this.el.content, 2 === i10) {
        const t11 = this.el.content, i11 = t11.firstChild;
        i11.remove(), t11.append(...i11.childNodes);
      }
      for (; null !== (h4 = C.nextNode()) && v3.length < c6; ) {
        if (1 === h4.nodeType) {
          if (h4.hasAttributes()) {
            const t11 = [];
            for (const i11 of h4.getAttributeNames())
              if (i11.endsWith(o3) || i11.startsWith(n3)) {
                const s11 = f4[u5++];
                if (t11.push(i11), void 0 !== s11) {
                  const t12 = h4.getAttribute(s11.toLowerCase() + o3).split(n3), i12 = /([.?@])?(.*)/.exec(s11);
                  v3.push({ type: 1, index: r6, name: i12[2], strings: t12, ctor: "." === i12[1] ? k : "?" === i12[1] ? I : "@" === i12[1] ? L : R });
                } else
                  v3.push({ type: 6, index: r6 });
              }
            for (const i11 of t11)
              h4.removeAttribute(i11);
          }
          if (y.test(h4.tagName)) {
            const t11 = h4.textContent.split(n3), i11 = t11.length - 1;
            if (i11 > 0) {
              h4.textContent = s3 ? s3.emptyScript : "";
              for (let s11 = 0; s11 < i11; s11++)
                h4.append(t11[s11], d2()), C.nextNode(), v3.push({ type: 2, index: ++r6 });
              h4.append(t11[i11], d2());
            }
          }
        } else if (8 === h4.nodeType)
          if (h4.data === l2)
            v3.push({ type: 2, index: r6 });
          else {
            let t11 = -1;
            for (; -1 !== (t11 = h4.data.indexOf(n3, t11 + 1)); )
              v3.push({ type: 7, index: r6 }), t11 += n3.length - 1;
          }
        r6++;
      }
    }
    static createElement(t10, i10) {
      const s11 = r3.createElement("template");
      return s11.innerHTML = t10, s11;
    }
  };
  function N(t10, i10, s11 = t10, e12) {
    var o13, n10, l9, h4;
    if (i10 === T)
      return i10;
    let r6 = void 0 !== e12 ? null === (o13 = s11._$Co) || void 0 === o13 ? void 0 : o13[e12] : s11._$Cl;
    const d4 = u(i10) ? void 0 : i10._$litDirective$;
    return (null == r6 ? void 0 : r6.constructor) !== d4 && (null === (n10 = null == r6 ? void 0 : r6._$AO) || void 0 === n10 || n10.call(r6, false), void 0 === d4 ? r6 = void 0 : (r6 = new d4(t10), r6._$AT(t10, s11, e12)), void 0 !== e12 ? (null !== (l9 = (h4 = s11)._$Co) && void 0 !== l9 ? l9 : h4._$Co = [])[e12] = r6 : s11._$Cl = r6), void 0 !== r6 && (i10 = N(t10, r6._$AS(t10, i10.values), r6, e12)), i10;
  }
  var S2 = class {
    constructor(t10, i10) {
      this._$AV = [], this._$AN = void 0, this._$AD = t10, this._$AM = i10;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t10) {
      var i10;
      const { el: { content: s11 }, parts: e12 } = this._$AD, o13 = (null !== (i10 = null == t10 ? void 0 : t10.creationScope) && void 0 !== i10 ? i10 : r3).importNode(s11, true);
      C.currentNode = o13;
      let n10 = C.nextNode(), l9 = 0, h4 = 0, d4 = e12[0];
      for (; void 0 !== d4; ) {
        if (l9 === d4.index) {
          let i11;
          2 === d4.type ? i11 = new M(n10, n10.nextSibling, this, t10) : 1 === d4.type ? i11 = new d4.ctor(n10, d4.name, d4.strings, this, t10) : 6 === d4.type && (i11 = new z(n10, this, t10)), this._$AV.push(i11), d4 = e12[++h4];
        }
        l9 !== (null == d4 ? void 0 : d4.index) && (n10 = C.nextNode(), l9++);
      }
      return o13;
    }
    v(t10) {
      let i10 = 0;
      for (const s11 of this._$AV)
        void 0 !== s11 && (void 0 !== s11.strings ? (s11._$AI(t10, s11, i10), i10 += s11.strings.length - 2) : s11._$AI(t10[i10])), i10++;
    }
  };
  var M = class {
    constructor(t10, i10, s11, e12) {
      var o13;
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t10, this._$AB = i10, this._$AM = s11, this.options = e12, this._$Cp = null === (o13 = null == e12 ? void 0 : e12.isConnected) || void 0 === o13 || o13;
    }
    get _$AU() {
      var t10, i10;
      return null !== (i10 = null === (t10 = this._$AM) || void 0 === t10 ? void 0 : t10._$AU) && void 0 !== i10 ? i10 : this._$Cp;
    }
    get parentNode() {
      let t10 = this._$AA.parentNode;
      const i10 = this._$AM;
      return void 0 !== i10 && 11 === (null == t10 ? void 0 : t10.nodeType) && (t10 = i10.parentNode), t10;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t10, i10 = this) {
      t10 = N(this, t10, i10), u(t10) ? t10 === A || null == t10 || "" === t10 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t10 !== this._$AH && t10 !== T && this._(t10) : void 0 !== t10._$litType$ ? this.g(t10) : void 0 !== t10.nodeType ? this.$(t10) : v(t10) ? this.T(t10) : this._(t10);
    }
    k(t10) {
      return this._$AA.parentNode.insertBefore(t10, this._$AB);
    }
    $(t10) {
      this._$AH !== t10 && (this._$AR(), this._$AH = this.k(t10));
    }
    _(t10) {
      this._$AH !== A && u(this._$AH) ? this._$AA.nextSibling.data = t10 : this.$(r3.createTextNode(t10)), this._$AH = t10;
    }
    g(t10) {
      var i10;
      const { values: s11, _$litType$: e12 } = t10, o13 = "number" == typeof e12 ? this._$AC(t10) : (void 0 === e12.el && (e12.el = V.createElement(e12.h, this.options)), e12);
      if ((null === (i10 = this._$AH) || void 0 === i10 ? void 0 : i10._$AD) === o13)
        this._$AH.v(s11);
      else {
        const t11 = new S2(o13, this), i11 = t11.u(this.options);
        t11.v(s11), this.$(i11), this._$AH = t11;
      }
    }
    _$AC(t10) {
      let i10 = E.get(t10.strings);
      return void 0 === i10 && E.set(t10.strings, i10 = new V(t10)), i10;
    }
    T(t10) {
      c2(this._$AH) || (this._$AH = [], this._$AR());
      const i10 = this._$AH;
      let s11, e12 = 0;
      for (const o13 of t10)
        e12 === i10.length ? i10.push(s11 = new M(this.k(d2()), this.k(d2()), this, this.options)) : s11 = i10[e12], s11._$AI(o13), e12++;
      e12 < i10.length && (this._$AR(s11 && s11._$AB.nextSibling, e12), i10.length = e12);
    }
    _$AR(t10 = this._$AA.nextSibling, i10) {
      var s11;
      for (null === (s11 = this._$AP) || void 0 === s11 || s11.call(this, false, true, i10); t10 && t10 !== this._$AB; ) {
        const i11 = t10.nextSibling;
        t10.remove(), t10 = i11;
      }
    }
    setConnected(t10) {
      var i10;
      void 0 === this._$AM && (this._$Cp = t10, null === (i10 = this._$AP) || void 0 === i10 || i10.call(this, t10));
    }
  };
  var R = class {
    constructor(t10, i10, s11, e12, o13) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t10, this.name = i10, this._$AM = e12, this.options = o13, s11.length > 2 || "" !== s11[0] || "" !== s11[1] ? (this._$AH = Array(s11.length - 1).fill(new String()), this.strings = s11) : this._$AH = A;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t10, i10 = this, s11, e12) {
      const o13 = this.strings;
      let n10 = false;
      if (void 0 === o13)
        t10 = N(this, t10, i10, 0), n10 = !u(t10) || t10 !== this._$AH && t10 !== T, n10 && (this._$AH = t10);
      else {
        const e13 = t10;
        let l9, h4;
        for (t10 = o13[0], l9 = 0; l9 < o13.length - 1; l9++)
          h4 = N(this, e13[s11 + l9], i10, l9), h4 === T && (h4 = this._$AH[l9]), n10 || (n10 = !u(h4) || h4 !== this._$AH[l9]), h4 === A ? t10 = A : t10 !== A && (t10 += (null != h4 ? h4 : "") + o13[l9 + 1]), this._$AH[l9] = h4;
      }
      n10 && !e12 && this.j(t10);
    }
    j(t10) {
      t10 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t10 ? t10 : "");
    }
  };
  var k = class extends R {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t10) {
      this.element[this.name] = t10 === A ? void 0 : t10;
    }
  };
  var H = s3 ? s3.emptyScript : "";
  var I = class extends R {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t10) {
      t10 && t10 !== A ? this.element.setAttribute(this.name, H) : this.element.removeAttribute(this.name);
    }
  };
  var L = class extends R {
    constructor(t10, i10, s11, e12, o13) {
      super(t10, i10, s11, e12, o13), this.type = 5;
    }
    _$AI(t10, i10 = this) {
      var s11;
      if ((t10 = null !== (s11 = N(this, t10, i10, 0)) && void 0 !== s11 ? s11 : A) === T)
        return;
      const e12 = this._$AH, o13 = t10 === A && e12 !== A || t10.capture !== e12.capture || t10.once !== e12.once || t10.passive !== e12.passive, n10 = t10 !== A && (e12 === A || o13);
      o13 && this.element.removeEventListener(this.name, this, e12), n10 && this.element.addEventListener(this.name, this, t10), this._$AH = t10;
    }
    handleEvent(t10) {
      var i10, s11;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s11 = null === (i10 = this.options) || void 0 === i10 ? void 0 : i10.host) && void 0 !== s11 ? s11 : this.element, t10) : this._$AH.handleEvent(t10);
    }
  };
  var z = class {
    constructor(t10, i10, s11) {
      this.element = t10, this.type = 6, this._$AN = void 0, this._$AM = i10, this.options = s11;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t10) {
      N(this, t10);
    }
  };
  var Z = { O: o3, P: n3, A: l2, C: 1, M: P, L: S2, D: v, R: N, I: M, V: R, H: I, N: L, U: k, F: z };
  var j = i2.litHtmlPolyfillSupport;
  null == j || j(V, M), (null !== (t2 = i2.litHtmlVersions) && void 0 !== t2 ? t2 : i2.litHtmlVersions = []).push("2.7.2");
  var B = (t10, i10, s11) => {
    var e12, o13;
    const n10 = null !== (e12 = null == s11 ? void 0 : s11.renderBefore) && void 0 !== e12 ? e12 : i10;
    let l9 = n10._$litPart$;
    if (void 0 === l9) {
      const t11 = null !== (o13 = null == s11 ? void 0 : s11.renderBefore) && void 0 !== o13 ? o13 : null;
      n10._$litPart$ = l9 = new M(i10.insertBefore(d2(), t11), t11, void 0, null != s11 ? s11 : {});
    }
    return l9._$AI(t10), l9;
  };

  // bundle/node_modules/lit-element/lit-element.js
  var l3;
  var o4;
  var s4 = class extends d {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var t10, e12;
      const i10 = super.createRenderRoot();
      return null !== (t10 = (e12 = this.renderOptions).renderBefore) && void 0 !== t10 || (e12.renderBefore = i10.firstChild), i10;
    }
    update(t10) {
      const i10 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t10), this._$Do = B(i10, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t10;
      super.connectedCallback(), null === (t10 = this._$Do) || void 0 === t10 || t10.setConnected(true);
    }
    disconnectedCallback() {
      var t10;
      super.disconnectedCallback(), null === (t10 = this._$Do) || void 0 === t10 || t10.setConnected(false);
    }
    render() {
      return T;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, null === (l3 = globalThis.litElementHydrateSupport) || void 0 === l3 || l3.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  null == n4 || n4({ LitElement: s4 });
  (null !== (o4 = globalThis.litElementVersions) && void 0 !== o4 ? o4 : globalThis.litElementVersions = []).push("3.3.1");

  // bundle/node_modules/@lit/reactive-element/decorators/custom-element.js
  var e4 = (e12) => (n10) => "function" == typeof n10 ? ((e13, n11) => (customElements.define(e13, n11), n11))(e12, n10) : ((e13, n11) => {
    const { kind: t10, elements: s11 } = n11;
    return { kind: t10, elements: s11, finisher(n12) {
      customElements.define(e13, n12);
    } };
  })(e12, n10);

  // bundle/node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i10, e12) => "method" === e12.kind && e12.descriptor && !("value" in e12.descriptor) ? { ...e12, finisher(n10) {
    n10.createProperty(e12.key, i10);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e12.key, initializer() {
    "function" == typeof e12.initializer && (this[e12.key] = e12.initializer.call(this));
  }, finisher(n10) {
    n10.createProperty(e12.key, i10);
  } };
  function e5(e12) {
    return (n10, t10) => void 0 !== t10 ? ((i10, e13, n11) => {
      e13.constructor.createProperty(n11, i10);
    })(e12, n10, t10) : i3(e12, n10);
  }

  // bundle/node_modules/@lit/reactive-element/decorators/state.js
  function t3(t10) {
    return e5({ ...t10, state: true });
  }

  // bundle/node_modules/@lit/reactive-element/decorators/base.js
  var o5 = ({ finisher: e12, descriptor: t10 }) => (o13, n10) => {
    var r6;
    if (void 0 === n10) {
      const n11 = null !== (r6 = o13.originalKey) && void 0 !== r6 ? r6 : o13.key, i10 = null != t10 ? { kind: "method", placement: "prototype", key: n11, descriptor: t10(o13.key) } : { ...o13, key: n11 };
      return null != e12 && (i10.finisher = function(t11) {
        e12(t11, n11);
      }), i10;
    }
    {
      const r7 = o13.constructor;
      void 0 !== t10 && Object.defineProperty(o13, n10, t10(n10)), null == e12 || e12(r7, n10);
    }
  };

  // bundle/node_modules/@lit/reactive-element/decorators/event-options.js
  function e6(e12) {
    return o5({ finisher: (r6, t10) => {
      Object.assign(r6.prototype[t10], e12);
    } });
  }

  // bundle/node_modules/@lit/reactive-element/decorators/query.js
  function i4(i10, n10) {
    return o5({ descriptor: (o13) => {
      const t10 = { get() {
        var o14, n11;
        return null !== (n11 = null === (o14 = this.renderRoot) || void 0 === o14 ? void 0 : o14.querySelector(i10)) && void 0 !== n11 ? n11 : null;
      }, enumerable: true, configurable: true };
      if (n10) {
        const n11 = "symbol" == typeof o13 ? Symbol() : "__" + o13;
        t10.get = function() {
          var o14, t11;
          return void 0 === this[n11] && (this[n11] = null !== (t11 = null === (o14 = this.renderRoot) || void 0 === o14 ? void 0 : o14.querySelector(i10)) && void 0 !== t11 ? t11 : null), this[n11];
        };
      }
      return t10;
    } });
  }

  // bundle/node_modules/@lit/reactive-element/decorators/query-async.js
  function e7(e12) {
    return o5({ descriptor: (r6) => ({ async get() {
      var r7;
      return await this.updateComplete, null === (r7 = this.renderRoot) || void 0 === r7 ? void 0 : r7.querySelector(e12);
    }, enumerable: true, configurable: true }) });
  }

  // bundle/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  var n5;
  var e8 = null != (null === (n5 = window.HTMLSlotElement) || void 0 === n5 ? void 0 : n5.prototype.assignedElements) ? (o13, n10) => o13.assignedElements(n10) : (o13, n10) => o13.assignedNodes(n10).filter((o14) => o14.nodeType === Node.ELEMENT_NODE);
  function l4(n10) {
    const { slot: l9, selector: t10 } = null != n10 ? n10 : {};
    return o5({ descriptor: (o13) => ({ get() {
      var o14;
      const r6 = "slot" + (l9 ? `[name=${l9}]` : ":not([name])"), i10 = null === (o14 = this.renderRoot) || void 0 === o14 ? void 0 : o14.querySelector(r6), s11 = null != i10 ? e8(i10, n10) : [];
      return t10 ? s11.filter((o15) => o15.matches(t10)) : s11;
    }, enumerable: true, configurable: true }) });
  }

  // bundle/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
  function o6(o13, n10, r6) {
    let l9, s11 = o13;
    return "object" == typeof o13 ? (s11 = o13.slot, l9 = o13) : l9 = { flatten: n10 }, r6 ? l4({ slot: s11, flatten: n10, selector: r6 }) : o5({ descriptor: (e12) => ({ get() {
      var e13, t10;
      const o14 = "slot" + (s11 ? `[name=${s11}]` : ":not([name])"), n11 = null === (e13 = this.renderRoot) || void 0 === e13 ? void 0 : e13.querySelector(o14);
      return null !== (t10 = null == n11 ? void 0 : n11.assignedNodes(l9)) && void 0 !== t10 ? t10 : [];
    }, enumerable: true, configurable: true }) });
  }

  // bundle/node_modules/urlpattern-polyfill/dist/urlpattern.js
  var regexIdentifierStart = /[$_\p{ID_Start}]/u;
  var regexIdentifierPart = /[$_\u200C\u200D\p{ID_Continue}]/u;
  function isASCII(str, extended) {
    return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(str);
  }
  function lexer(str, lenient = false) {
    const tokens = [];
    let i10 = 0;
    while (i10 < str.length) {
      const char = str[i10];
      const ErrorOrInvalid = function(msg) {
        if (!lenient)
          throw new TypeError(msg);
        tokens.push({ type: "INVALID_CHAR", index: i10, value: str[i10++] });
      };
      if (char === "*") {
        tokens.push({ type: "ASTERISK", index: i10, value: str[i10++] });
        continue;
      }
      if (char === "+" || char === "?") {
        tokens.push({ type: "MODIFIER", index: i10, value: str[i10++] });
        continue;
      }
      if (char === "\\") {
        tokens.push({ type: "ESCAPED_CHAR", index: i10++, value: str[i10++] });
        continue;
      }
      if (char === "{") {
        tokens.push({ type: "OPEN", index: i10, value: str[i10++] });
        continue;
      }
      if (char === "}") {
        tokens.push({ type: "CLOSE", index: i10, value: str[i10++] });
        continue;
      }
      if (char === ":") {
        let name = "";
        let j3 = i10 + 1;
        while (j3 < str.length) {
          const code = str.substr(j3, 1);
          if (j3 === i10 + 1 && regexIdentifierStart.test(code) || j3 !== i10 + 1 && regexIdentifierPart.test(code)) {
            name += str[j3++];
            continue;
          }
          break;
        }
        if (!name) {
          ErrorOrInvalid(`Missing parameter name at ${i10}`);
          continue;
        }
        tokens.push({ type: "NAME", index: i10, value: name });
        i10 = j3;
        continue;
      }
      if (char === "(") {
        let count = 1;
        let pattern = "";
        let j3 = i10 + 1;
        let error = false;
        if (str[j3] === "?") {
          ErrorOrInvalid(`Pattern cannot start with "?" at ${j3}`);
          continue;
        }
        while (j3 < str.length) {
          if (!isASCII(str[j3], false)) {
            ErrorOrInvalid(`Invalid character '${str[j3]}' at ${j3}.`);
            error = true;
            break;
          }
          if (str[j3] === "\\") {
            pattern += str[j3++] + str[j3++];
            continue;
          }
          if (str[j3] === ")") {
            count--;
            if (count === 0) {
              j3++;
              break;
            }
          } else if (str[j3] === "(") {
            count++;
            if (str[j3 + 1] !== "?") {
              ErrorOrInvalid(`Capturing groups are not allowed at ${j3}`);
              error = true;
              break;
            }
          }
          pattern += str[j3++];
        }
        if (error) {
          continue;
        }
        if (count) {
          ErrorOrInvalid(`Unbalanced pattern at ${i10}`);
          continue;
        }
        if (!pattern) {
          ErrorOrInvalid(`Missing pattern at ${i10}`);
          continue;
        }
        tokens.push({ type: "PATTERN", index: i10, value: pattern });
        i10 = j3;
        continue;
      }
      tokens.push({ type: "CHAR", index: i10, value: str[i10++] });
    }
    tokens.push({ type: "END", index: i10, value: "" });
    return tokens;
  }
  function parse(str, options = {}) {
    const tokens = lexer(str);
    const { prefixes = "./" } = options;
    const defaultPattern = `[^${escapeString(options.delimiter === void 0 ? "/#?" : options.delimiter)}]+?`;
    const result = [];
    let key = 0;
    let i10 = 0;
    let path = "";
    let nameSet = /* @__PURE__ */ new Set();
    const tryConsume = (type) => {
      if (i10 < tokens.length && tokens[i10].type === type)
        return tokens[i10++].value;
    };
    const tryConsumeModifier = () => {
      const r6 = tryConsume("MODIFIER");
      if (r6) {
        return r6;
      }
      return tryConsume("ASTERISK");
    };
    const mustConsume = (type) => {
      const value = tryConsume(type);
      if (value !== void 0)
        return value;
      const { type: nextType, index } = tokens[i10];
      throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
    };
    const consumeText = () => {
      let result2 = "";
      let value;
      while (value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
        result2 += value;
      }
      return result2;
    };
    const DefaultEncodePart = (value) => {
      return value;
    };
    const encodePart = options.encodePart || DefaultEncodePart;
    while (i10 < tokens.length) {
      const char = tryConsume("CHAR");
      const name = tryConsume("NAME");
      let pattern = tryConsume("PATTERN");
      if (!name && !pattern && tryConsume("ASTERISK")) {
        pattern = ".*";
      }
      if (name || pattern) {
        let prefix = char || "";
        if (prefixes.indexOf(prefix) === -1) {
          path += prefix;
          prefix = "";
        }
        if (path) {
          result.push(encodePart(path));
          path = "";
        }
        const finalName = name || key++;
        if (nameSet.has(finalName)) {
          throw new TypeError(`Duplicate name '${finalName}'.`);
        }
        nameSet.add(finalName);
        result.push({
          name: finalName,
          prefix: encodePart(prefix),
          suffix: "",
          pattern: pattern || defaultPattern,
          modifier: tryConsumeModifier() || ""
        });
        continue;
      }
      const value = char || tryConsume("ESCAPED_CHAR");
      if (value) {
        path += value;
        continue;
      }
      const open = tryConsume("OPEN");
      if (open) {
        const prefix = consumeText();
        const name2 = tryConsume("NAME") || "";
        let pattern2 = tryConsume("PATTERN") || "";
        if (!name2 && !pattern2 && tryConsume("ASTERISK")) {
          pattern2 = ".*";
        }
        const suffix = consumeText();
        mustConsume("CLOSE");
        const modifier = tryConsumeModifier() || "";
        if (!name2 && !pattern2 && !modifier) {
          path += prefix;
          continue;
        }
        if (!name2 && !pattern2 && !prefix) {
          continue;
        }
        if (path) {
          result.push(encodePart(path));
          path = "";
        }
        result.push({
          name: name2 || (pattern2 ? key++ : ""),
          pattern: name2 && !pattern2 ? defaultPattern : pattern2,
          prefix: encodePart(prefix),
          suffix: encodePart(suffix),
          modifier
        });
        continue;
      }
      if (path) {
        result.push(encodePart(path));
        path = "";
      }
      mustConsume("END");
    }
    return result;
  }
  function escapeString(str) {
    return str.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
  }
  function flags(options) {
    return options && options.ignoreCase ? "ui" : "u";
  }
  function regexpToRegexp(path, keys) {
    if (!keys)
      return path;
    const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    let index = 0;
    let execResult = groupsRegex.exec(path.source);
    while (execResult) {
      keys.push({
        name: execResult[1] || index++,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
      });
      execResult = groupsRegex.exec(path.source);
    }
    return path;
  }
  function arrayToRegexp(paths, keys, options) {
    const parts = paths.map((path) => pathToRegexp(path, keys, options).source);
    return new RegExp(`(?:${parts.join("|")})`, flags(options));
  }
  function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
  }
  function tokensToRegexp(tokens, keys, options = {}) {
    const {
      strict = false,
      start = true,
      end = true,
      encode = (x3) => x3
    } = options;
    const endsWith = `[${escapeString(options.endsWith === void 0 ? "" : options.endsWith)}]|$`;
    const delimiter = `[${escapeString(options.delimiter === void 0 ? "/#?" : options.delimiter)}]`;
    let route = start ? "^" : "";
    for (const token of tokens) {
      if (typeof token === "string") {
        route += escapeString(encode(token));
      } else {
        const prefix = escapeString(encode(token.prefix));
        const suffix = escapeString(encode(token.suffix));
        if (token.pattern) {
          if (keys)
            keys.push(token);
          if (prefix || suffix) {
            if (token.modifier === "+" || token.modifier === "*") {
              const mod = token.modifier === "*" ? "?" : "";
              route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
            } else {
              route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
            }
          } else {
            if (token.modifier === "+" || token.modifier === "*") {
              route += `((?:${token.pattern})${token.modifier})`;
            } else {
              route += `(${token.pattern})${token.modifier}`;
            }
          }
        } else {
          route += `(?:${prefix}${suffix})${token.modifier}`;
        }
      }
    }
    if (end) {
      if (!strict)
        route += `${delimiter}?`;
      route += !options.endsWith ? "$" : `(?=${endsWith})`;
    } else {
      const endToken = tokens[tokens.length - 1];
      const isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
      if (!strict) {
        route += `(?:${delimiter}(?=${endsWith}))?`;
      }
      if (!isEndDelimited) {
        route += `(?=${delimiter}|${endsWith})`;
      }
    }
    return new RegExp(route, flags(options));
  }
  function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
      return regexpToRegexp(path, keys);
    if (Array.isArray(path))
      return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
  }
  var DEFAULT_OPTIONS = {
    delimiter: "",
    prefixes: "",
    sensitive: true,
    strict: true
  };
  var HOSTNAME_OPTIONS = {
    delimiter: ".",
    prefixes: "",
    sensitive: true,
    strict: true
  };
  var PATHNAME_OPTIONS = {
    delimiter: "/",
    prefixes: "/",
    sensitive: true,
    strict: true
  };
  function isAbsolutePathname(pathname, isPattern) {
    if (!pathname.length) {
      return false;
    }
    if (pathname[0] === "/") {
      return true;
    }
    if (!isPattern) {
      return false;
    }
    if (pathname.length < 2) {
      return false;
    }
    if ((pathname[0] == "\\" || pathname[0] == "{") && pathname[1] == "/") {
      return true;
    }
    return false;
  }
  function maybeStripPrefix(value, prefix) {
    if (value.startsWith(prefix)) {
      return value.substring(prefix.length, value.length);
    }
    return value;
  }
  function maybeStripSuffix(value, suffix) {
    if (value.endsWith(suffix)) {
      return value.substr(0, value.length - suffix.length);
    }
    return value;
  }
  function treatAsIPv6Hostname(value) {
    if (!value || value.length < 2) {
      return false;
    }
    if (value[0] === "[") {
      return true;
    }
    if ((value[0] === "\\" || value[0] === "{") && value[1] === "[") {
      return true;
    }
    return false;
  }
  var SPECIAL_SCHEMES = [
    "ftp",
    "file",
    "http",
    "https",
    "ws",
    "wss"
  ];
  function isSpecialScheme(protocol_regexp) {
    if (!protocol_regexp) {
      return true;
    }
    for (const scheme of SPECIAL_SCHEMES) {
      if (protocol_regexp.test(scheme)) {
        return true;
      }
    }
    return false;
  }
  function canonicalizeHash(hash, isPattern) {
    hash = maybeStripPrefix(hash, "#");
    if (isPattern || hash === "") {
      return hash;
    }
    const url = new URL("https://example.com");
    url.hash = hash;
    return url.hash ? url.hash.substring(1, url.hash.length) : "";
  }
  function canonicalizeSearch(search, isPattern) {
    search = maybeStripPrefix(search, "?");
    if (isPattern || search === "") {
      return search;
    }
    const url = new URL("https://example.com");
    url.search = search;
    return url.search ? url.search.substring(1, url.search.length) : "";
  }
  function canonicalizeHostname(hostname, isPattern) {
    if (isPattern || hostname === "") {
      return hostname;
    }
    if (treatAsIPv6Hostname(hostname)) {
      return ipv6HostnameEncodeCallback(hostname);
    } else {
      return hostnameEncodeCallback(hostname);
    }
  }
  function canonicalizePassword(password, isPattern) {
    if (isPattern || password === "") {
      return password;
    }
    const url = new URL("https://example.com");
    url.password = password;
    return url.password;
  }
  function canonicalizeUsername(username, isPattern) {
    if (isPattern || username === "") {
      return username;
    }
    const url = new URL("https://example.com");
    url.username = username;
    return url.username;
  }
  function canonicalizePathname(pathname, protocol, isPattern) {
    if (isPattern || pathname === "") {
      return pathname;
    }
    if (protocol && !SPECIAL_SCHEMES.includes(protocol)) {
      const url = new URL(`${protocol}:${pathname}`);
      return url.pathname;
    }
    const leadingSlash = pathname[0] == "/";
    pathname = new URL(
      !leadingSlash ? "/-" + pathname : pathname,
      "https://example.com"
    ).pathname;
    if (!leadingSlash) {
      pathname = pathname.substring(2, pathname.length);
    }
    return pathname;
  }
  function canonicalizePort(port, protocol, isPattern) {
    if (defaultPortForProtocol(protocol) === port) {
      port = "";
    }
    if (isPattern || port === "") {
      return port;
    }
    return portEncodeCallback(port);
  }
  function canonicalizeProtocol(protocol, isPattern) {
    protocol = maybeStripSuffix(protocol, ":");
    if (isPattern || protocol === "") {
      return protocol;
    }
    return protocolEncodeCallback(protocol);
  }
  function defaultPortForProtocol(protocol) {
    switch (protocol) {
      case "ws":
      case "http":
        return "80";
      case "wws":
      case "https":
        return "443";
      case "ftp":
        return "21";
      default:
        return "";
    }
  }
  function protocolEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    if (/^[-+.A-Za-z0-9]*$/.test(input))
      return input.toLowerCase();
    throw new TypeError(`Invalid protocol '${input}'.`);
  }
  function usernameEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL("https://example.com");
    url.username = input;
    return url.username;
  }
  function passwordEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL("https://example.com");
    url.password = input;
    return url.password;
  }
  function hostnameEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(input)) {
      throw new TypeError(`Invalid hostname '${input}'`);
    }
    const url = new URL("https://example.com");
    url.hostname = input;
    return url.hostname;
  }
  function ipv6HostnameEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    if (/[^0-9a-fA-F[\]:]/g.test(input)) {
      throw new TypeError(`Invalid IPv6 hostname '${input}'`);
    }
    return input.toLowerCase();
  }
  function portEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    if (/^[0-9]*$/.test(input) && parseInt(input) <= 65535) {
      return input;
    }
    throw new TypeError(`Invalid port '${input}'.`);
  }
  function standardURLPathnameEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL("https://example.com");
    url.pathname = input[0] !== "/" ? "/-" + input : input;
    if (input[0] !== "/") {
      return url.pathname.substring(2, url.pathname.length);
    }
    return url.pathname;
  }
  function pathURLPathnameEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL(`data:${input}`);
    return url.pathname;
  }
  function searchEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL("https://example.com");
    url.search = input;
    return url.search.substring(1, url.search.length);
  }
  function hashEncodeCallback(input) {
    if (input === "") {
      return input;
    }
    const url = new URL("https://example.com");
    url.hash = input;
    return url.hash.substring(1, url.hash.length);
  }
  var Parser = class {
    constructor(input) {
      this.tokenList = [];
      this.internalResult = {};
      this.tokenIndex = 0;
      this.tokenIncrement = 1;
      this.componentStart = 0;
      this.state = 0;
      this.groupDepth = 0;
      this.hostnameIPv6BracketDepth = 0;
      this.shouldTreatAsStandardURL = false;
      this.input = input;
    }
    get result() {
      return this.internalResult;
    }
    parse() {
      this.tokenList = lexer(this.input, true);
      for (; this.tokenIndex < this.tokenList.length; this.tokenIndex += this.tokenIncrement) {
        this.tokenIncrement = 1;
        if (this.tokenList[this.tokenIndex].type === "END") {
          if (this.state === 0) {
            this.rewind();
            if (this.isHashPrefix()) {
              this.changeState(9, 1);
            } else if (this.isSearchPrefix()) {
              this.changeState(8, 1);
              this.internalResult.hash = "";
            } else {
              this.changeState(7, 0);
              this.internalResult.search = "";
              this.internalResult.hash = "";
            }
            continue;
          } else if (this.state === 2) {
            this.rewindAndSetState(
              5
              /* HOSTNAME */
            );
            continue;
          }
          this.changeState(10, 0);
          break;
        }
        if (this.groupDepth > 0) {
          if (this.isGroupClose()) {
            this.groupDepth -= 1;
          } else {
            continue;
          }
        }
        if (this.isGroupOpen()) {
          this.groupDepth += 1;
          continue;
        }
        switch (this.state) {
          case 0:
            if (this.isProtocolSuffix()) {
              this.internalResult.username = "";
              this.internalResult.password = "";
              this.internalResult.hostname = "";
              this.internalResult.port = "";
              this.internalResult.pathname = "";
              this.internalResult.search = "";
              this.internalResult.hash = "";
              this.rewindAndSetState(
                1
                /* PROTOCOL */
              );
            }
            break;
          case 1:
            if (this.isProtocolSuffix()) {
              this.computeShouldTreatAsStandardURL();
              let nextState = 7;
              let skip = 1;
              if (this.shouldTreatAsStandardURL) {
                this.internalResult.pathname = "/";
              }
              if (this.nextIsAuthoritySlashes()) {
                nextState = 2;
                skip = 3;
              } else if (this.shouldTreatAsStandardURL) {
                nextState = 2;
              }
              this.changeState(nextState, skip);
            }
            break;
          case 2:
            if (this.isIdentityTerminator()) {
              this.rewindAndSetState(
                3
                /* USERNAME */
              );
            } else if (this.isPathnameStart() || this.isSearchPrefix() || this.isHashPrefix()) {
              this.rewindAndSetState(
                5
                /* HOSTNAME */
              );
            }
            break;
          case 3:
            if (this.isPasswordPrefix()) {
              this.changeState(4, 1);
            } else if (this.isIdentityTerminator()) {
              this.changeState(5, 1);
            }
            break;
          case 4:
            if (this.isIdentityTerminator()) {
              this.changeState(5, 1);
            }
            break;
          case 5:
            if (this.isIPv6Open()) {
              this.hostnameIPv6BracketDepth += 1;
            } else if (this.isIPv6Close()) {
              this.hostnameIPv6BracketDepth -= 1;
            }
            if (this.isPortPrefix() && !this.hostnameIPv6BracketDepth) {
              this.changeState(6, 1);
            } else if (this.isPathnameStart()) {
              this.changeState(7, 0);
            } else if (this.isSearchPrefix()) {
              this.changeState(8, 1);
            } else if (this.isHashPrefix()) {
              this.changeState(9, 1);
            }
            break;
          case 6:
            if (this.isPathnameStart()) {
              this.changeState(7, 0);
            } else if (this.isSearchPrefix()) {
              this.changeState(8, 1);
            } else if (this.isHashPrefix()) {
              this.changeState(9, 1);
            }
            break;
          case 7:
            if (this.isSearchPrefix()) {
              this.changeState(8, 1);
            } else if (this.isHashPrefix()) {
              this.changeState(9, 1);
            }
            break;
          case 8:
            if (this.isHashPrefix()) {
              this.changeState(9, 1);
            }
            break;
          case 9:
            break;
          case 10:
            break;
        }
      }
    }
    changeState(newState, skip) {
      switch (this.state) {
        case 0:
          break;
        case 1:
          this.internalResult.protocol = this.makeComponentString();
          break;
        case 2:
          break;
        case 3:
          this.internalResult.username = this.makeComponentString();
          break;
        case 4:
          this.internalResult.password = this.makeComponentString();
          break;
        case 5:
          this.internalResult.hostname = this.makeComponentString();
          break;
        case 6:
          this.internalResult.port = this.makeComponentString();
          break;
        case 7:
          this.internalResult.pathname = this.makeComponentString();
          break;
        case 8:
          this.internalResult.search = this.makeComponentString();
          break;
        case 9:
          this.internalResult.hash = this.makeComponentString();
          break;
        case 10:
          break;
      }
      this.changeStateWithoutSettingComponent(newState, skip);
    }
    changeStateWithoutSettingComponent(newState, skip) {
      this.state = newState;
      this.componentStart = this.tokenIndex + skip;
      this.tokenIndex += skip;
      this.tokenIncrement = 0;
    }
    rewind() {
      this.tokenIndex = this.componentStart;
      this.tokenIncrement = 0;
    }
    rewindAndSetState(newState) {
      this.rewind();
      this.state = newState;
    }
    safeToken(index) {
      if (index < 0) {
        index = this.tokenList.length - index;
      }
      if (index < this.tokenList.length) {
        return this.tokenList[index];
      }
      return this.tokenList[this.tokenList.length - 1];
    }
    isNonSpecialPatternChar(index, value) {
      const token = this.safeToken(index);
      return token.value === value && (token.type === "CHAR" || token.type === "ESCAPED_CHAR" || token.type === "INVALID_CHAR");
    }
    isProtocolSuffix() {
      return this.isNonSpecialPatternChar(this.tokenIndex, ":");
    }
    nextIsAuthoritySlashes() {
      return this.isNonSpecialPatternChar(this.tokenIndex + 1, "/") && this.isNonSpecialPatternChar(this.tokenIndex + 2, "/");
    }
    isIdentityTerminator() {
      return this.isNonSpecialPatternChar(this.tokenIndex, "@");
    }
    isPasswordPrefix() {
      return this.isNonSpecialPatternChar(this.tokenIndex, ":");
    }
    isPortPrefix() {
      return this.isNonSpecialPatternChar(this.tokenIndex, ":");
    }
    isPathnameStart() {
      return this.isNonSpecialPatternChar(this.tokenIndex, "/");
    }
    isSearchPrefix() {
      if (this.isNonSpecialPatternChar(this.tokenIndex, "?")) {
        return true;
      }
      if (this.tokenList[this.tokenIndex].value !== "?") {
        return false;
      }
      const previousToken = this.safeToken(this.tokenIndex - 1);
      return previousToken.type !== "NAME" && previousToken.type !== "PATTERN" && previousToken.type !== "CLOSE" && previousToken.type !== "ASTERISK";
    }
    isHashPrefix() {
      return this.isNonSpecialPatternChar(this.tokenIndex, "#");
    }
    isGroupOpen() {
      return this.tokenList[this.tokenIndex].type == "OPEN";
    }
    isGroupClose() {
      return this.tokenList[this.tokenIndex].type == "CLOSE";
    }
    isIPv6Open() {
      return this.isNonSpecialPatternChar(this.tokenIndex, "[");
    }
    isIPv6Close() {
      return this.isNonSpecialPatternChar(this.tokenIndex, "]");
    }
    makeComponentString() {
      const token = this.tokenList[this.tokenIndex];
      const componentCharStart = this.safeToken(this.componentStart).index;
      return this.input.substring(componentCharStart, token.index);
    }
    computeShouldTreatAsStandardURL() {
      const options = {};
      Object.assign(options, DEFAULT_OPTIONS);
      options.encodePart = protocolEncodeCallback;
      const regexp = pathToRegexp(this.makeComponentString(), void 0, options);
      this.shouldTreatAsStandardURL = isSpecialScheme(regexp);
    }
  };
  var COMPONENTS = [
    "protocol",
    "username",
    "password",
    "hostname",
    "port",
    "pathname",
    "search",
    "hash"
  ];
  var DEFAULT_PATTERN = "*";
  function extractValues(url, baseURL) {
    if (typeof url !== "string") {
      throw new TypeError(`parameter 1 is not of type 'string'.`);
    }
    const o13 = new URL(url, baseURL);
    return {
      protocol: o13.protocol.substring(0, o13.protocol.length - 1),
      username: o13.username,
      password: o13.password,
      hostname: o13.hostname,
      port: o13.port,
      pathname: o13.pathname,
      search: o13.search != "" ? o13.search.substring(1, o13.search.length) : void 0,
      hash: o13.hash != "" ? o13.hash.substring(1, o13.hash.length) : void 0
    };
  }
  function processBaseURLString(input, isPattern) {
    if (!isPattern) {
      return input;
    }
    return escapePatternString(input);
  }
  function applyInit(o13, init, isPattern) {
    let baseURL;
    if (typeof init.baseURL === "string") {
      try {
        baseURL = new URL(init.baseURL);
        o13.protocol = processBaseURLString(baseURL.protocol.substring(0, baseURL.protocol.length - 1), isPattern);
        o13.username = processBaseURLString(baseURL.username, isPattern);
        o13.password = processBaseURLString(baseURL.password, isPattern);
        o13.hostname = processBaseURLString(baseURL.hostname, isPattern);
        o13.port = processBaseURLString(baseURL.port, isPattern);
        o13.pathname = processBaseURLString(baseURL.pathname, isPattern);
        o13.search = processBaseURLString(baseURL.search.substring(1, baseURL.search.length), isPattern);
        o13.hash = processBaseURLString(baseURL.hash.substring(1, baseURL.hash.length), isPattern);
      } catch {
        throw new TypeError(`invalid baseURL '${init.baseURL}'.`);
      }
    }
    if (typeof init.protocol === "string") {
      o13.protocol = canonicalizeProtocol(init.protocol, isPattern);
    }
    if (typeof init.username === "string") {
      o13.username = canonicalizeUsername(init.username, isPattern);
    }
    if (typeof init.password === "string") {
      o13.password = canonicalizePassword(init.password, isPattern);
    }
    if (typeof init.hostname === "string") {
      o13.hostname = canonicalizeHostname(init.hostname, isPattern);
    }
    if (typeof init.port === "string") {
      o13.port = canonicalizePort(init.port, o13.protocol, isPattern);
    }
    if (typeof init.pathname === "string") {
      o13.pathname = init.pathname;
      if (baseURL && !isAbsolutePathname(o13.pathname, isPattern)) {
        const slashIndex = baseURL.pathname.lastIndexOf("/");
        if (slashIndex >= 0) {
          o13.pathname = processBaseURLString(baseURL.pathname.substring(0, slashIndex + 1), isPattern) + o13.pathname;
        }
      }
      o13.pathname = canonicalizePathname(o13.pathname, o13.protocol, isPattern);
    }
    if (typeof init.search === "string") {
      o13.search = canonicalizeSearch(init.search, isPattern);
    }
    if (typeof init.hash === "string") {
      o13.hash = canonicalizeHash(init.hash, isPattern);
    }
    return o13;
  }
  function escapePatternString(value) {
    return value.replace(/([+*?:{}()\\])/g, "\\$1");
  }
  function escapeRegexpString(value) {
    return value.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
  }
  function tokensToPattern(tokens, options) {
    const wildcardPattern = ".*";
    const segmentWildcardPattern = `[^${escapeRegexpString(options.delimiter === void 0 ? "/#?" : options.delimiter)}]+?`;
    const regexIdentifierPart2 = /[$_\u200C\u200D\p{ID_Continue}]/u;
    let result = "";
    for (let i10 = 0; i10 < tokens.length; ++i10) {
      const token = tokens[i10];
      const lastToken = i10 > 0 ? tokens[i10 - 1] : null;
      const nextToken = i10 < tokens.length - 1 ? tokens[i10 + 1] : null;
      if (typeof token === "string") {
        result += escapePatternString(token);
        continue;
      }
      if (token.pattern === "") {
        if (token.modifier === "") {
          result += escapePatternString(token.prefix);
          continue;
        }
        result += `{${escapePatternString(token.prefix)}}${token.modifier}`;
        continue;
      }
      const customName = typeof token.name !== "number";
      const optionsPrefixes = options.prefixes !== void 0 ? options.prefixes : "./";
      let needsGrouping = token.suffix !== "" || token.prefix !== "" && (token.prefix.length !== 1 || !optionsPrefixes.includes(token.prefix));
      if (!needsGrouping && customName && token.pattern === segmentWildcardPattern && token.modifier === "" && nextToken && !nextToken.prefix && !nextToken.suffix) {
        if (typeof nextToken === "string") {
          const code = nextToken.length > 0 ? nextToken[0] : "";
          needsGrouping = regexIdentifierPart2.test(code);
        } else {
          needsGrouping = typeof nextToken.name === "number";
        }
      }
      if (!needsGrouping && token.prefix === "" && lastToken && typeof lastToken === "string" && lastToken.length > 0) {
        const code = lastToken[lastToken.length - 1];
        needsGrouping = optionsPrefixes.includes(code);
      }
      if (needsGrouping) {
        result += "{";
      }
      result += escapePatternString(token.prefix);
      if (customName) {
        result += `:${token.name}`;
      }
      if (token.pattern === wildcardPattern) {
        if (!customName && (!lastToken || typeof lastToken === "string" || lastToken.modifier || needsGrouping || token.prefix !== "")) {
          result += "*";
        } else {
          result += `(${wildcardPattern})`;
        }
      } else if (token.pattern === segmentWildcardPattern) {
        if (!customName) {
          result += `(${segmentWildcardPattern})`;
        }
      } else {
        result += `(${token.pattern})`;
      }
      if (token.pattern === segmentWildcardPattern && customName && token.suffix !== "") {
        if (regexIdentifierPart2.test(token.suffix[0])) {
          result += "\\";
        }
      }
      result += escapePatternString(token.suffix);
      if (needsGrouping) {
        result += "}";
      }
      result += token.modifier;
    }
    return result;
  }
  var URLPattern2 = class {
    constructor(init = {}, baseURLOrOptions, options) {
      this.regexp = {};
      this.keys = {};
      this.component_pattern = {};
      try {
        let baseURL = void 0;
        if (typeof baseURLOrOptions === "string") {
          baseURL = baseURLOrOptions;
        } else {
          options = baseURLOrOptions;
        }
        if (typeof init === "string") {
          const parser = new Parser(init);
          parser.parse();
          init = parser.result;
          if (baseURL === void 0 && typeof init.protocol !== "string") {
            throw new TypeError(`A base URL must be provided for a relative constructor string.`);
          }
          init.baseURL = baseURL;
        } else {
          if (!init || typeof init !== "object") {
            throw new TypeError(`parameter 1 is not of type 'string' and cannot convert to dictionary.`);
          }
          if (baseURL) {
            throw new TypeError(`parameter 1 is not of type 'string'.`);
          }
        }
        if (typeof options === "undefined") {
          options = { ignoreCase: false };
        }
        const ignoreCaseOptions = { ignoreCase: options.ignoreCase === true };
        const defaults = {
          pathname: DEFAULT_PATTERN,
          protocol: DEFAULT_PATTERN,
          username: DEFAULT_PATTERN,
          password: DEFAULT_PATTERN,
          hostname: DEFAULT_PATTERN,
          port: DEFAULT_PATTERN,
          search: DEFAULT_PATTERN,
          hash: DEFAULT_PATTERN
        };
        this.pattern = applyInit(defaults, init, true);
        if (defaultPortForProtocol(this.pattern.protocol) === this.pattern.port) {
          this.pattern.port = "";
        }
        let component;
        for (component of COMPONENTS) {
          if (!(component in this.pattern))
            continue;
          const options2 = {};
          const pattern = this.pattern[component];
          this.keys[component] = [];
          switch (component) {
            case "protocol":
              Object.assign(options2, DEFAULT_OPTIONS);
              options2.encodePart = protocolEncodeCallback;
              break;
            case "username":
              Object.assign(options2, DEFAULT_OPTIONS);
              options2.encodePart = usernameEncodeCallback;
              break;
            case "password":
              Object.assign(options2, DEFAULT_OPTIONS);
              options2.encodePart = passwordEncodeCallback;
              break;
            case "hostname":
              Object.assign(options2, HOSTNAME_OPTIONS);
              if (treatAsIPv6Hostname(pattern)) {
                options2.encodePart = ipv6HostnameEncodeCallback;
              } else {
                options2.encodePart = hostnameEncodeCallback;
              }
              break;
            case "port":
              Object.assign(options2, DEFAULT_OPTIONS);
              options2.encodePart = portEncodeCallback;
              break;
            case "pathname":
              if (isSpecialScheme(this.regexp.protocol)) {
                Object.assign(options2, PATHNAME_OPTIONS, ignoreCaseOptions);
                options2.encodePart = standardURLPathnameEncodeCallback;
              } else {
                Object.assign(options2, DEFAULT_OPTIONS, ignoreCaseOptions);
                options2.encodePart = pathURLPathnameEncodeCallback;
              }
              break;
            case "search":
              Object.assign(options2, DEFAULT_OPTIONS, ignoreCaseOptions);
              options2.encodePart = searchEncodeCallback;
              break;
            case "hash":
              Object.assign(options2, DEFAULT_OPTIONS, ignoreCaseOptions);
              options2.encodePart = hashEncodeCallback;
              break;
          }
          try {
            const tokens = parse(pattern, options2);
            this.regexp[component] = tokensToRegexp(tokens, this.keys[component], options2);
            this.component_pattern[component] = tokensToPattern(tokens, options2);
          } catch {
            throw new TypeError(`invalid ${component} pattern '${this.pattern[component]}'.`);
          }
        }
      } catch (err) {
        throw new TypeError(`Failed to construct 'URLPattern': ${err.message}`);
      }
    }
    test(input = {}, baseURL) {
      let values = {
        pathname: "",
        protocol: "",
        username: "",
        password: "",
        hostname: "",
        port: "",
        search: "",
        hash: ""
      };
      if (typeof input !== "string" && baseURL) {
        throw new TypeError(`parameter 1 is not of type 'string'.`);
      }
      if (typeof input === "undefined") {
        return false;
      }
      try {
        if (typeof input === "object") {
          values = applyInit(values, input, false);
        } else {
          values = applyInit(values, extractValues(input, baseURL), false);
        }
      } catch (err) {
        return false;
      }
      let component;
      for (component of COMPONENTS) {
        if (!this.regexp[component].exec(values[component])) {
          return false;
        }
      }
      return true;
    }
    exec(input = {}, baseURL) {
      let values = {
        pathname: "",
        protocol: "",
        username: "",
        password: "",
        hostname: "",
        port: "",
        search: "",
        hash: ""
      };
      if (typeof input !== "string" && baseURL) {
        throw new TypeError(`parameter 1 is not of type 'string'.`);
      }
      if (typeof input === "undefined") {
        return;
      }
      try {
        if (typeof input === "object") {
          values = applyInit(values, input, false);
        } else {
          values = applyInit(values, extractValues(input, baseURL), false);
        }
      } catch (err) {
        return null;
      }
      let result = {};
      if (baseURL) {
        result.inputs = [input, baseURL];
      } else {
        result.inputs = [input];
      }
      let component;
      for (component of COMPONENTS) {
        let match = this.regexp[component].exec(values[component]);
        if (!match) {
          return null;
        }
        let groups = {};
        for (let [i10, key] of this.keys[component].entries()) {
          if (typeof key.name === "string" || typeof key.name === "number") {
            let value = match[i10 + 1];
            groups[key.name] = value;
          }
        }
        result[component] = {
          input: values[component] || "",
          groups
        };
      }
      return result;
    }
    get protocol() {
      return this.component_pattern.protocol;
    }
    get username() {
      return this.component_pattern.username;
    }
    get password() {
      return this.component_pattern.password;
    }
    get hostname() {
      return this.component_pattern.hostname;
    }
    get port() {
      return this.component_pattern.port;
    }
    get pathname() {
      return this.component_pattern.pathname;
    }
    get search() {
      return this.component_pattern.search;
    }
    get hash() {
      return this.component_pattern.hash;
    }
  };

  // bundle/node_modules/urlpattern-polyfill/index.js
  if (!globalThis.URLPattern) {
    globalThis.URLPattern = URLPattern2;
  }

  // bundle/node_modules/@lit-labs/router/routes.js
  var t4 = /* @__PURE__ */ new WeakMap();
  var i5 = (i10) => {
    if (((t10) => void 0 !== t10.pattern)(i10))
      return i10.pattern;
    let s11 = t4.get(i10);
    return void 0 === s11 && t4.set(i10, s11 = new URLPattern({ pathname: i10.path })), s11;
  };
  var s5 = class {
    constructor(t10, i10, s11) {
      this.routes = [], this.o = [], this.t = {}, this.i = (t11) => {
        if (t11.routes === this)
          return;
        const i11 = t11.routes;
        this.o.push(i11), i11.l = this, t11.stopImmediatePropagation(), t11.onDisconnect = () => {
          var t12;
          null === (t12 = this.o) || void 0 === t12 || t12.splice(this.o.indexOf(i11) >>> 0, 1);
        };
        const s12 = o7(this.t);
        void 0 !== s12 && i11.goto(s12);
      }, (this.h = t10).addController(this), this.routes = [...i10], this.fallback = null == s11 ? void 0 : s11.fallback;
    }
    link(t10) {
      var i10, s11;
      if (null == t10 ? void 0 : t10.startsWith("/"))
        return t10;
      if (null == t10 ? void 0 : t10.startsWith("."))
        throw Error("Not implemented");
      return null != t10 || (t10 = this.u), (null !== (s11 = null === (i10 = this.l) || void 0 === i10 ? void 0 : i10.link()) && void 0 !== s11 ? s11 : "") + t10;
    }
    async goto(t10) {
      var s11;
      let n10;
      if (0 === this.routes.length && void 0 === this.fallback)
        n10 = t10, this.u = "", this.t = { 0: n10 };
      else {
        const h4 = this.v(t10);
        if (void 0 === h4)
          throw Error("No route found for " + t10);
        const e12 = i5(h4).exec({ pathname: t10 }), r6 = null !== (s11 = null == e12 ? void 0 : e12.pathname.groups) && void 0 !== s11 ? s11 : {};
        if (n10 = o7(r6), "function" == typeof h4.enter && false === await h4.enter(r6))
          return;
        this.p = h4, this.t = r6, this.u = void 0 === n10 ? t10 : t10.substring(0, t10.length - n10.length);
      }
      if (void 0 !== n10)
        for (const t11 of this.o)
          t11.goto(n10);
      this.h.requestUpdate();
    }
    outlet() {
      var t10, i10;
      return null === (i10 = null === (t10 = this.p) || void 0 === t10 ? void 0 : t10.render) || void 0 === i10 ? void 0 : i10.call(t10, this.t);
    }
    get params() {
      return this.t;
    }
    v(t10) {
      const s11 = this.routes.find((s12) => i5(s12).test({ pathname: t10 }));
      return s11 || void 0 === this.fallback ? s11 : this.fallback ? { ...this.fallback, path: "/*" } : void 0;
    }
    hostConnected() {
      this.h.addEventListener(n6.eventName, this.i);
      const t10 = new n6(this);
      this.h.dispatchEvent(t10), this._ = t10.onDisconnect;
    }
    hostDisconnected() {
      var t10;
      null === (t10 = this._) || void 0 === t10 || t10.call(this), this.l = void 0;
    }
  };
  var o7 = (t10) => {
    let i10;
    for (const s11 of Object.keys(t10))
      /\d+/.test(s11) && (void 0 === i10 || s11 > i10) && (i10 = s11);
    return i10 && t10[i10];
  };
  var n6 = class extends Event {
    constructor(t10) {
      super(n6.eventName, { bubbles: true, composed: true, cancelable: false }), this.routes = t10;
    }
  };
  n6.eventName = "lit-routes-connected";

  // bundle/node_modules/@lit-labs/router/router.js
  var o8 = location.origin || location.protocol + "//" + location.host;
  var i6 = class extends s5 {
    constructor() {
      super(...arguments), this.m = (t10) => {
        const i10 = 0 !== t10.button || t10.metaKey || t10.ctrlKey || t10.shiftKey;
        if (t10.defaultPrevented || i10)
          return;
        const s11 = t10.composedPath().find((t11) => "A" === t11.tagName);
        if (void 0 === s11 || "" !== s11.target || s11.hasAttribute("download") || "external" === s11.getAttribute("rel"))
          return;
        const n10 = s11.href;
        if ("" === n10 || n10.startsWith("mailto:"))
          return;
        const e12 = window.location;
        s11.origin === o8 && (t10.preventDefault(), n10 !== e12.href && (window.history.pushState({}, "", n10), this.goto(s11.pathname)));
      }, this.R = (t10) => {
        this.goto(window.location.pathname);
      };
    }
    hostConnected() {
      super.hostConnected(), window.addEventListener("click", this.m), window.addEventListener("popstate", this.R), this.goto(window.location.pathname);
    }
    hostDisconnected() {
      super.hostDisconnected(), window.removeEventListener("click", this.m), window.removeEventListener("popstate", this.R);
    }
  };

  // bundle/node_modules/@lit-labs/context/lib/context-request-event.js
  var s6 = class extends Event {
    constructor(s11, t10, e12) {
      super("context-request", { bubbles: true, composed: true }), this.context = s11, this.callback = t10, this.subscribe = e12;
    }
  };

  // bundle/node_modules/@lit-labs/context/lib/create-context.js
  function n7(n10) {
    return n10;
  }

  // bundle/node_modules/@lit-labs/context/lib/controllers/context-consumer.js
  var s7 = class {
    constructor(t10, s11, i10, h4) {
      var e12;
      if (this.subscribe = false, this.provided = false, this.value = void 0, this.t = (t11, s12) => {
        this.unsubscribe && (this.unsubscribe !== s12 && (this.provided = false, this.unsubscribe()), this.subscribe || this.unsubscribe()), this.value = t11, this.host.requestUpdate(), this.provided && !this.subscribe || (this.provided = true, this.callback && this.callback(t11, s12)), this.unsubscribe = s12;
      }, this.host = t10, void 0 !== s11.context) {
        const t11 = s11;
        this.context = t11.context, this.callback = t11.callback, this.subscribe = null !== (e12 = t11.subscribe) && void 0 !== e12 && e12;
      } else
        this.context = s11, this.callback = i10, this.subscribe = null != h4 && h4;
      this.host.addController(this);
    }
    hostConnected() {
      this.dispatchRequest();
    }
    hostDisconnected() {
      this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0);
    }
    dispatchRequest() {
      this.host.dispatchEvent(new s6(this.context, this.t, this.subscribe));
    }
  };

  // bundle/node_modules/@lit-labs/context/lib/value-notifier.js
  var t5 = class {
    constructor(t10) {
      this.callbacks = /* @__PURE__ */ new Map(), this.updateObservers = () => {
        for (const [t11, s11] of this.callbacks)
          t11(this.o, s11);
      }, void 0 !== t10 && (this.value = t10);
    }
    get value() {
      return this.o;
    }
    set value(t10) {
      this.setValue(t10);
    }
    setValue(t10, s11 = false) {
      const i10 = s11 || !Object.is(t10, this.o);
      this.o = t10, i10 && this.updateObservers();
    }
    addCallback(t10, s11) {
      s11 && (this.callbacks.has(t10) || this.callbacks.set(t10, () => {
        this.callbacks.delete(t10);
      })), t10(this.value);
    }
    clearCallbacks() {
      this.callbacks.clear();
    }
  };

  // bundle/node_modules/@lit-labs/context/lib/controllers/context-provider.js
  var s8 = class extends Event {
    constructor(t10) {
      super("context-provider", { bubbles: true, composed: true }), this.context = t10, Object.setPrototypeOf(this, new.target.prototype);
    }
  };
  var e9 = class extends t5 {
    constructor(t10, s11, e12) {
      super(void 0 !== s11.context ? s11.initialValue : e12), this.onContextRequest = (t11) => {
        t11.context === this.context && t11.composedPath()[0] !== this.host && (t11.stopPropagation(), this.addCallback(t11.callback, t11.subscribe));
      }, this.host = t10, void 0 !== s11.context ? this.context = s11.context : this.context = s11, this.attachListeners(), this.host.addController(this);
    }
    attachListeners() {
      this.host.addEventListener("context-request", this.onContextRequest);
    }
    hostConnected() {
      this.host.dispatchEvent(new s8(this.context));
    }
  };

  // bundle/node_modules/@lit-labs/context/lib/decorators/provide.js
  function o9({ context: o13 }) {
    return o5({ finisher: (t10, n10) => {
      const r6 = /* @__PURE__ */ new WeakMap();
      t10.addInitializer((t11) => {
        r6.set(t11, new e9(t11, { context: o13 }));
      });
      const i10 = Object.getOwnPropertyDescriptor(t10.prototype, n10), c6 = null == i10 ? void 0 : i10.set, s11 = { ...i10, set: function(t11) {
        var e12;
        null === (e12 = r6.get(this)) || void 0 === e12 || e12.setValue(t11), c6 && c6.call(this, t11);
      } };
      Object.defineProperty(t10.prototype, n10, s11);
    } });
  }

  // bundle/node_modules/@lit-labs/context/lib/decorators/consume.js
  function t6({ context: t10, subscribe: o13 }) {
    return o5({ finisher: (e12, c6) => {
      e12.addInitializer((e13) => {
        new s7(e13, { context: t10, callback: (r6) => {
          e13[c6] = r6;
        }, subscribe: o13 });
      });
    } });
  }

  // bundle/src/components/context/indexdb-context.ts
  var ixdbContext = n7("ix-db");

  // bundle/src/artefacts/bible/util/compress-bible.ts
  var uncompress = (bible) => bible.split("|||").map((book2) => book2.split("||").map(unflattenChapter));
  var unflattenChapter = (chapter2) => chapter2.replace(/\d+\|/g, (match) => `||${match}`).substr(2).split("||").map((verse2) => {
    const [n10, txt] = verse2.split("|");
    return { n: n10, txt };
  });

  // bundle/src/artefacts/bible/bible-references/bible-book-names.js
  var merge = (a4, b3) => {
    return a4.concat(b3.filter((bb) => a4.indexOf(bb) === -1));
  };
  var mergeTwoLanguages = (a4, b3) => a4.length ? a4.map((book2, i10) => merge(book2, b3[i10])) : [...b3];
  var mergeLanguages = (args) => {
    if (!args)
      return [];
    if (args.length === 1)
      return [...args[0]];
    return args.reduce((acc, lang) => {
      return mergeTwoLanguages(acc, lang);
    }, []);
  };
  var urlNames = [
    "ge",
    "ex",
    "le",
    "nu",
    "de",
    "jos",
    "jud",
    "ru",
    "1sa",
    "2sa",
    "1ki",
    "2ki",
    "1ch",
    "2ch",
    "ezr",
    "ne",
    "es",
    "job",
    "ps",
    "pr",
    "ec",
    "so",
    "isa",
    "jer",
    "la",
    "eze",
    "da",
    "ho",
    "joe",
    "am",
    "ob",
    "jon",
    "mic",
    "na",
    "hab",
    "zep",
    "hag",
    "zec",
    "mal",
    "mt",
    "mr",
    "lu",
    "joh",
    "ac",
    "ro",
    "1co",
    "2co",
    "ga",
    "eph",
    "php",
    "col",
    "1th",
    "2th",
    "1ti",
    "2ti",
    "tit",
    "phm",
    "heb",
    "jas",
    "1pe",
    "2pe",
    "1jo",
    "2jo",
    "3jo",
    "jude",
    "re"
  ];
  var shortUrlNames = urlNames.map((n10) => [n10]);
  var getNormalise = (abbr2) => abbr2.reduce((acc, bookAbbrs) => {
    bookAbbrs.forEach((bookAbbr) => acc[bookAbbr] = bookAbbrs[0]);
    return acc;
  }, {});
  var getNormaliseShort = (abbr2) => abbr2.reduce((acc, bookAbbrs, i10) => {
    bookAbbrs.forEach(
      (bookAbbr) => acc[bookAbbr] = urlNames[i10]
      // shortest(bookAbbrs.filter(x => x !== ''))
    );
    return acc;
  }, {});
  var getNormaliseBookName = (abbr2) => {
    const normalise = getNormalise(abbr2);
    return (name) => normalise[name && name.toLowerCase()] || "";
  };
  var getNormaliseBookNameShort = (abbr2) => {
    const normaliseShort = getNormaliseShort(abbr2);
    return (name) => normaliseShort[name && name.toLowerCase()] || "";
  };

  // bundle/src/artefacts/bible/bible-references/bible-book-regex.js
  function BibleReferences(languages) {
    const bookNames2 = mergeLanguages([...languages, shortUrlNames]);
    const normaliseBookName = getNormaliseBookName(bookNames2);
    const normaliseBookNameShort = getNormaliseBookNameShort(bookNames2);
    const anyBookInAnyForm = bookNames2.map((names) => names.join("|")).join("|");
    const chapter2 = "\\d{1,3}";
    const verse2 = "\\d{1,3}";
    const bookChapterVerse = new RegExp(
      `^(${anyBookInAnyForm})\\s*(${chapter2})[ ]*:[ ]*(${verse2})\\b`
    );
    const bookChapter = new RegExp(`^(${anyBookInAnyForm})[ ]*(${chapter2})\\b`);
    const bookRegex = new RegExp(`^(?:${anyBookInAnyForm})$`);
    const separatorBookRegex = new RegExp(`(^|,|;)(${anyBookInAnyForm})`, "g");
    const commaBookRegex = new RegExp(`,(${anyBookInAnyForm})`, "g");
    const bookRegexNum = new RegExp(`(${anyBookInAnyForm})(\\d)`, "g");
    const chapterVerse = new RegExp(`^(${chapter2})[ ]*:[ ]*(${verse2})\\b`);
    const bookFf = new RegExp(`^(?:${anyBookInAnyForm})[ ]*ff`);
    const bookRegexNum2 = new RegExp(`^(${anyBookInAnyForm})(\\d|$)`, "g");
    function rightToRangeEnd(right, isFf, ctx) {
      let match;
      let out = {};
      if (right === "")
        return {};
      if (isFf) {
        if (ctx.book && ctx.chapter && ctx.verse) {
          out = {
            book: ctx.book,
            chapter: ctx.chapter
          };
        } else if (ctx.book && ctx.chapter) {
          out = {
            book: ctx.book
          };
        }
        return out;
      }
      if (right === void 0)
        return __spreadValues({}, ctx);
      if (match = right.match(bookChapterVerse)) {
        out = {
          book: normaliseBookName(match[1]),
          chapter: match[2],
          verse: match[3]
        };
      } else if (match = right.match(bookChapter)) {
        out = {
          book: normaliseBookName(match[1]),
          chapter: match[2]
        };
      } else if (match = right.match(bookRegex)) {
        out = {
          book: normaliseBookName(match[0])
        };
      } else if (match = right.match(chapterVerse)) {
        out = {
          book: ctx.book,
          chapter: match[1],
          verse: match[2]
        };
      } else if (match = right.match(/(\d{1,3}\b)/)) {
        if (ctx.verse) {
          out = {
            book: ctx.book,
            chapter: ctx.chapter,
            verse: match[1]
          };
        } else {
          out = {
            book: ctx.book,
            chapter: match[1]
          };
        }
      } else {
        out = __spreadValues({}, ctx);
      }
      return out;
    }
    function partToRange(part, ctx) {
      let match;
      let start;
      let isFf = false;
      let [left, right] = part.split("-").map((s11) => s11.trim().toLowerCase());
      if (/\d{1,3}[ ]*ff$/i.test(left) || bookFf.test(left)) {
        left = left.replace(/[ ]*ff$/, "");
        isFf = true;
      }
      if (match = left.match(bookChapterVerse)) {
        start = {
          book: normaliseBookName(match[1]),
          chapter: match[2],
          verse: match[3]
        };
        ctx = __spreadValues({}, start);
      } else if (match = left.match(bookChapter)) {
        start = {
          book: normaliseBookName(match[1]),
          chapter: match[2],
          verse: "1"
        };
        ctx = {
          book: start.book,
          chapter: start.chapter
        };
      } else if (match = left.match(bookRegex)) {
        start = {
          book: normaliseBookName(match[0]),
          chapter: "1",
          verse: "1"
        };
        ctx = { book: start.book };
      } else if (match = left.match(chapterVerse)) {
        start = {
          book: ctx.book,
          chapter: match[1],
          verse: match[2]
        };
        ctx = __spreadValues({}, start);
      } else if (match = left.match(/(\d{1,3}\b)/)) {
        if (ctx.verse) {
          start = {
            book: ctx.book,
            chapter: ctx.chapter,
            verse: match[1]
          };
          ctx = __spreadValues({}, start);
        } else {
          start = {
            book: ctx.book,
            chapter: match[1],
            verse: "1"
          };
          ctx = {
            book: start.book,
            chapter: start.chapter
          };
        }
      }
      return {
        start,
        end: rightToRangeEnd(right, isFf, ctx),
        ctx
      };
    }
    const getVerseRanges2 = (refs) => {
      const { ranges } = refs.split(/[,\n;]+/g).reduce(
        (acc, ref) => {
          const range = partToRange(ref, acc.ctx);
          acc.ctx = range.ctx;
          if (range.start) {
            acc.ranges.push({
              start: range.start,
              end: range.end
            });
          }
          return acc;
        },
        {
          ctx: { book: "genesis" },
          ranges: []
        }
      );
      return ranges;
    };
    const compressRangesText = (rangesText) => rangesText.toLowerCase().replace(/\n+/g, ";").replace(/\s/g, "").split(";").reduce((acc, line) => {
      return [
        ...acc,
        line.split(",").reduce((acc2, range) => {
          const parts = range.split("-").map(
            (part) => part.replace(
              bookRegexNum2,
              (_3, a4, b3) => `${normaliseBookNameShort(a4)}${b3 || ""}`
            )
          ).join("-");
          return [...acc2, parts];
        }, [])
      ];
    }, []).join(";");
    const uncompressRangesText = (rangesText) => rangesText.toLowerCase().replace(separatorBookRegex, (_3, a4, b3) => `${a4}${normaliseBookName(b3)}`).replace(commaBookRegex, (_3, a4) => `, ${a4}`).replace(bookRegexNum, (_3, a4, b3) => `${a4} ${b3}`).replace(/;/g, "\n");
    this.getVerseRanges = getVerseRanges2;
    this.bookNames = bookNames2;
    this.normaliseBookName = normaliseBookName;
    this.normaliseBookNameShort = normaliseBookNameShort;
    this.partToRange = partToRange;
    this.compressRangesText = compressRangesText;
    this.uncompressRangesText = uncompressRangesText;
  }

  // bundle/src/artefacts/bible/bible-references/index.js
  var bible_references_default = BibleReferences;

  // bundle/src/artefacts/bible/bible-langs/langs/af.js
  var af_default = {
    key: "af",
    displayname: "afrikaans",
    abbreviations: [
      [
        "genesis",
        "gen",
        "ge",
        "gn"
      ],
      [
        "eksodus",
        "eks",
        "ek"
      ],
      [
        "levitikus",
        "lev",
        "le",
        "lv"
      ],
      [
        "numeri",
        "num",
        "nu",
        "nm"
      ],
      [
        "deuteronomium",
        "deut",
        "dt"
      ],
      [
        "josua",
        "jos",
        "js"
      ],
      [
        "rigters",
        "rig"
      ],
      [
        "rut",
        "rt"
      ],
      [
        "1 samuel",
        "1 sam",
        "1 sa",
        "1samuel",
        "1s",
        "i sa",
        "1 sm",
        "1sa",
        "i sam",
        "1sam",
        "i samuel",
        "een samuel"
      ],
      [
        "2 samuel",
        "2 sam",
        "2 sa",
        "2s",
        "ii sa",
        "2 sm",
        "2sa",
        "ii sam",
        "2sam",
        "ii samuel",
        "2samuel",
        "twee samuel"
      ],
      [
        "1 konings",
        "1 kon",
        "i kgs",
        "1kgs",
        "i kon",
        "1kon",
        "i konings",
        "1konings",
        "een konings",
        "een kon",
        "een kgs"
      ],
      [
        "2 konings",
        "2 kon",
        "2 kgs",
        "ii kgs",
        "2kgs",
        "ii kon",
        "2kon",
        "ii konings",
        "2konings",
        "2nd kgs",
        "2nd kings",
        "twee konings",
        "twee kon",
        "twee kgs"
      ],
      [
        "1 kronieke",
        "1 kron",
        "1 kr",
        "i kr",
        "1kr",
        "1 krn",
        "i krn",
        "1krn",
        "i kron",
        "1kron",
        "i kronieke",
        "1kronieke",
        "een kronieke"
      ],
      [
        "2 kronieke",
        "2 kron",
        "2 kr",
        "ii kr",
        "2kr",
        "2 krn",
        "ii krn",
        "2krn",
        "ii kron",
        "2kron",
        "ii kronieke",
        "2kronieke",
        "twee kronieke"
      ],
      [
        "esra",
        "esra",
        "esr"
      ],
      [
        "nehemia",
        "neh",
        "ne"
      ],
      [
        "ester",
        "est",
        "es"
      ],
      [
        "job",
        "job",
        "job",
        "jb"
      ],
      [
        "psalm",
        "pslm",
        "ps",
        "psalms",
        "psa",
        "psm",
        "pss"
      ],
      [
        "spreuke",
        "spr",
        "sp"
      ],
      [
        "prediker",
        "pred",
        "pre"
      ],
      [
        "hooglied van salomo",
        "hooglied",
        "hoog",
        "salomo",
        "sal",
        "hvs",
        "hs"
      ],
      [
        "jesaja",
        "jes",
        "js"
      ],
      [
        "jeremia",
        "jer",
        "je",
        "jr"
      ],
      [
        "klaagliedere van jeremia",
        "klaaglied",
        "klaag",
        "klj"
      ],
      [
        "esegiel",
        "eseg",
        "ese",
        "esg"
      ],
      [
        "daniel",
        "dan",
        "da",
        "dn"
      ],
      [
        "hosea",
        "hos",
        "ho"
      ],
      [
        "joel",
        "joel",
        "joe",
        "jl"
      ],
      [
        "amos",
        "amos",
        "am"
      ],
      [
        "obadja",
        "obad",
        "ob"
      ],
      [
        "jona",
        "jnh",
        "jon"
      ],
      [
        "miga",
        "mig",
        "mg"
      ],
      [
        "nahum",
        "nah",
        "na"
      ],
      [
        "habakuk",
        "hab",
        "hb"
      ],
      [
        "sefanja",
        "sefan",
        "sef",
        "sf"
      ],
      [
        "haggai",
        "hag",
        "hg"
      ],
      [
        "sagaria",
        "sag",
        "sg"
      ],
      [
        "maleagi",
        "mal",
        "ml"
      ],
      [
        "mattheus",
        "matt",
        "mat",
        "mt"
      ],
      [
        "markus",
        "mark",
        "mar",
        "mrk",
        "mk",
        "mr"
      ],
      [
        "lukas",
        "luk",
        "lk"
      ],
      [
        "johannes",
        "john",
        "joh",
        "jhn",
        "jh",
        "jn"
      ],
      [
        "handelinge",
        "han",
        "hand",
        "hd"
      ],
      [
        "romeine",
        "rom",
        "ro",
        "rm"
      ],
      [
        "1 korinthiers",
        "1 korinte",
        "1 kor",
        "1 ko",
        "i ko",
        "1ko",
        "i kor",
        "1kor",
        "i korinthiers",
        "1korinthiers",
        "een korinthiers"
      ],
      [
        "2 korinthiers",
        "2 korinte",
        "2 kor",
        "2 ko",
        "i ko",
        "2ko",
        "ii kor",
        "2kor",
        "ii korinthiers",
        "2korinthiers",
        "twee korinthiers"
      ],
      [
        "galasiers",
        "gal",
        "ga"
      ],
      [
        "efesiers",
        "efes",
        "efe",
        "ef"
      ],
      [
        "filippense",
        "filp",
        "fil",
        "flp",
        "fl"
      ],
      [
        "kolossense",
        "kol",
        "kl"
      ],
      [
        "1 thessalonicense",
        "1 thess",
        "1 th",
        "i th",
        "1th",
        "i thes",
        "1thes",
        "i thess",
        "1thess",
        "i thessalonicense",
        "1thessalonicense",
        "een thessalonicense",
        "eerste thessalonicense"
      ],
      [
        "2 thessalonicense",
        "2 thess",
        "2 th",
        "ii th",
        "2th",
        "ii thes",
        "2thes",
        "ii thess",
        "2thess",
        "ii thessalonicense",
        "2thessalonicense",
        "twee thessalonicense",
        "tweede thessalonicense"
      ],
      [
        "1 timotheus",
        "1 tim",
        "1 ti",
        "i ti",
        "1ti",
        "i tim",
        "1tim",
        "i timotheus",
        "1timotheus",
        "een timotheus",
        "eerste timotheus"
      ],
      [
        "2 timotheus",
        "2 tim",
        "2 ti",
        "ii ti",
        "2ti",
        "ii tim",
        "2tim",
        "ii timotheus",
        "2timotheus",
        "twee timotheus",
        "tweede timotheus"
      ],
      [
        "titus",
        "titus",
        "tit"
      ],
      [
        "filemon",
        "filem",
        "file",
        "flm"
      ],
      [
        "hebreers",
        "heb"
      ],
      [
        "jakobus",
        "jak",
        "jk"
      ],
      [
        "1 petrus",
        "1 pet",
        "1 pe",
        "i pe",
        "1pe",
        "i pet",
        "1pet",
        "i pt",
        "1 pt",
        "1pt",
        "i petrus",
        "1petrus",
        "een petrus",
        "eerste petrus"
      ],
      [
        "2 petrus",
        "2 pet",
        "2 pe",
        "ii pe",
        "2pe",
        "ii pet",
        "2pet",
        "ii pt",
        "2 pt",
        "2pt",
        "ii petrus",
        "2petrus",
        "twee petrus",
        "tweede petrus"
      ],
      [
        "1 johannes",
        "1 jn",
        "i jn",
        "1jn",
        "i jo",
        "1jo",
        "i joh",
        "1 joh",
        "1joh",
        "i jhn",
        "1 jhn",
        "1jhn",
        "i johannes",
        "1johannes",
        "een johannes",
        "eerste johannes"
      ],
      [
        "2 johannes",
        "2 jn",
        "ii jn",
        "2jn",
        "ii jo",
        "2jo",
        "ii joh",
        "2 joh",
        "2joh",
        "ii jhn",
        "2 jhn",
        "2jhn",
        "ii johannes",
        "2johannes",
        "twee johannes",
        "tweede johannes"
      ],
      [
        "3 johannes",
        "3 jn",
        "iii jn",
        "3jn",
        "iii jo",
        "3jo",
        "iii joh",
        "3joh",
        "iii jhn",
        "3 jhn",
        "3jhn",
        "iii johannes",
        "3johannes",
        "drie johannes",
        "derde johannes"
      ],
      [
        "judas",
        //'jud', used in urlNames/tsk
        "jd"
      ],
      [
        "openbaring",
        "open",
        "opb",
        "op",
        "die openbaring"
      ]
    ]
  };

  // bundle/src/artefacts/bible/bible-langs/langs/en.js
  var en_default = {
    key: "en",
    displayname: "english",
    abbreviations: [
      [
        "genesis",
        "gen",
        "ge",
        "gn"
      ],
      [
        "exodus",
        "exo",
        "ex",
        "exod"
      ],
      [
        "leviticus",
        "lev",
        "le",
        "lv"
      ],
      [
        "numbers",
        "num",
        "nu",
        "nm",
        "nb"
      ],
      [
        "deuteronomy",
        "deut",
        "dt"
      ],
      [
        "joshua",
        "josh",
        "jos",
        "jsh"
      ],
      [
        "judges",
        "judg",
        "jdg",
        "jg",
        "jdgs"
      ],
      [
        "ruth",
        "rth",
        "ru"
      ],
      [
        "1 samuel",
        "1 sam",
        "1 sa",
        "1samuel",
        "1s",
        "i sa",
        "1 sm",
        "1sa",
        "i sam",
        "1sam",
        "i samuel",
        "1st samuel",
        "first samuel"
      ],
      [
        "2 samuel",
        "2 sam",
        "2 sa",
        "2s",
        "ii sa",
        "2 sm",
        "2sa",
        "ii sam",
        "2sam",
        "ii samuel",
        "2samuel",
        "2nd samuel",
        "second samuel"
      ],
      [
        "1 kings",
        "1 kgs",
        "1 ki",
        "1k",
        "i kgs",
        "1kgs",
        "i ki",
        "1ki",
        "i kings",
        "1kings",
        "1st kgs",
        "1st kings",
        "first kings",
        "first kgs",
        "1kin"
      ],
      [
        "2 kings",
        "2 kgs",
        "2 ki",
        "2k",
        "ii kgs",
        "2kgs",
        "ii ki",
        "2ki",
        "ii kings",
        "2kings",
        "2nd kgs",
        "2nd kings",
        "second kings",
        "second kgs",
        "2kin"
      ],
      [
        "1 chronicles",
        "1 chron",
        "1 ch",
        "i ch",
        "1ch",
        "1 chr",
        "i chr",
        "1chr",
        "i chron",
        "1chron",
        "i chronicles",
        "1chronicles",
        "1st chronicles",
        "first chronicles"
      ],
      [
        "2 chronicles",
        "2 chron",
        "2 ch",
        "ii ch",
        "2ch",
        "ii chr",
        "2chr",
        "ii chron",
        "2chron",
        "ii chronicles",
        "2chronicles",
        "2nd chronicles",
        "second chronicles"
      ],
      [
        "ezra",
        "ezra",
        "ezr"
      ],
      [
        "nehemiah",
        "neh",
        "ne"
      ],
      [
        "esther",
        "esth",
        "es"
      ],
      [
        "job",
        "job",
        "job",
        "jb"
      ],
      [
        "psalm",
        "pslm",
        "ps",
        "psalms",
        "psa",
        "psm",
        "pss"
      ],
      [
        "proverbs",
        "prov",
        "pr",
        "prv"
      ],
      [
        "ecclesiastes",
        "eccles",
        "ec",
        "qoh",
        "qoheleth"
      ],
      [
        "song of solomon",
        "song",
        "so",
        "canticle of canticles",
        "canticles",
        "song of songs",
        "sos"
      ],
      [
        "isaiah",
        "isa",
        "is"
      ],
      [
        "jeremiah",
        "jer",
        "je",
        "jr"
      ],
      [
        "lamentations",
        "lam",
        "la"
      ],
      [
        "ezekiel",
        "ezek",
        "eze",
        "ezk"
      ],
      [
        "daniel",
        "dan",
        "da",
        "dn"
      ],
      [
        "hosea",
        "hos",
        "ho"
      ],
      [
        "joel",
        "joel",
        "joe",
        "jl"
      ],
      [
        "amos",
        "amos",
        "am"
      ],
      [
        "obadiah",
        "obad",
        "ob"
      ],
      [
        "jonah",
        "jnh",
        "jon"
      ],
      [
        "micah",
        "micah",
        "mic"
      ],
      [
        "nahum",
        "nah",
        "na"
      ],
      [
        "habakkuk",
        "hab",
        "hab"
      ],
      [
        "zephaniah",
        "zeph",
        "zep",
        "zp"
      ],
      [
        "haggai",
        "hag",
        "hg"
      ],
      [
        "zechariah",
        "zech",
        "zec",
        "zc"
      ],
      [
        "malachi",
        "mal",
        "mal",
        "ml"
      ],
      [
        "matthew",
        "matt",
        "mt"
      ],
      [
        "mark",
        "mrk",
        "mk",
        "mr"
      ],
      [
        "luke",
        "luk",
        "lk"
      ],
      [
        "john",
        "john",
        "jn",
        "jhn"
      ],
      [
        "acts",
        "acts",
        "ac"
      ],
      [
        "romans",
        "rom",
        "ro",
        "rm"
      ],
      [
        "1 corinthians",
        "1 cor",
        "1 co",
        "i co",
        "1co",
        "i cor",
        "1cor",
        "i corinthians",
        "1corinthians",
        "1st corinthians",
        "first corinthians"
      ],
      [
        "2 corinthians",
        "2 cor",
        "2 co",
        "ii co",
        "2co",
        "ii cor",
        "2cor",
        "ii corinthians",
        "2corinthians",
        "2nd corinthians",
        "second corinthians"
      ],
      [
        "galatians",
        "gal",
        "ga"
      ],
      [
        "ephesians",
        "ephes",
        "eph"
      ],
      [
        "philippians",
        "phil",
        "php"
      ],
      [
        "colossians",
        "col",
        "col"
      ],
      [
        "1 thessalonians",
        "1 thess",
        "1 th",
        "i th",
        "1th",
        "i thes",
        "1thes",
        "i thess",
        "1thess",
        "i thessalonians",
        "1thessalonians",
        "1st thessalonians",
        "first thessalonians"
      ],
      [
        "2 thessalonians",
        "2 thess",
        "2 th",
        "ii th",
        "2th",
        "ii thes",
        "2thes",
        "ii thess",
        "2thess",
        "ii thessalonians",
        "2thessalonians",
        "2nd thessalonians",
        "second thessalonians"
      ],
      [
        "1 timothy",
        "1 tim",
        "1 ti",
        "i ti",
        "1ti",
        "i tim",
        "1tim",
        "i timothy",
        "1timothy",
        "1st timothy",
        "first timothy"
      ],
      [
        "2 timothy",
        "2 tim",
        "2 ti",
        "ii ti",
        "2ti",
        "ii tim",
        "2tim",
        "ii timothy",
        "2timothy",
        "2nd timothy",
        "second timothy"
      ],
      [
        "titus",
        "titus",
        "tit"
      ],
      [
        "philemon",
        "philem",
        "phm"
      ],
      [
        "hebrews",
        "hebrews",
        "heb"
      ],
      [
        "james",
        "james",
        "jas",
        "jm"
      ],
      [
        "1 peter",
        "1 pet",
        "1 pe",
        "i pe",
        "1pe",
        "i pet",
        "1pet",
        "i pt",
        "1 pt",
        "1pt",
        "i peter",
        "1peter",
        "1st peter",
        "first peter"
      ],
      [
        "2 peter",
        "2 pet",
        "2 pe",
        "ii pe",
        "2pe",
        "ii pet",
        "2pet",
        "ii pt",
        "2 pt",
        "2pt",
        "ii peter",
        "2peter",
        "2nd peter",
        "second peter"
      ],
      [
        "1 john",
        "1 jn",
        "i jn",
        "1jn",
        "i jo",
        "1jo",
        "i joh",
        "1joh",
        "i jhn",
        "1 jhn",
        "1jhn",
        "i john",
        "1john",
        "1st john",
        "first john"
      ],
      [
        "2 john",
        "2 jn",
        "ii jn",
        "2jn",
        "ii jo",
        "2jo",
        "ii joh",
        "2joh",
        "ii jhn",
        "2 jhn",
        "2jhn",
        "ii john",
        "2john",
        "2nd john",
        "second john"
      ],
      [
        "3 john",
        "3 jn",
        "iii jn",
        "3jn",
        "iii jo",
        "3jo",
        "iii joh",
        "3joh",
        "iii jhn",
        "3 jhn",
        "3jhn",
        "iii john",
        "3john",
        "3rd john",
        "third john"
      ],
      [
        "jude",
        //'jud', used in urlNames and tsk for Judges
        "jd"
      ],
      [
        "revelation",
        "rev",
        "re",
        "the revelation"
      ]
    ]
  };

  // bundle/src/artefacts/bible/util/bible-mapper.ts
  var book;
  var chapter;
  var verse;
  var mappedVerse;
  var from;
  var to;
  var hashMapper = (hash, fromBible, toBible) => {
    from = getVersion(fromBible);
    to = getVersion(toBible);
    const hash_regex = /^\[([\d]*):([[\d]*):([\d])*\]$/;
    const regMatch = hash.match(hash_regex);
    if (regMatch) {
      book = parseInt(regMatch[1]);
      chapter = parseInt(regMatch[2]);
      verse = parseInt(regMatch[3]);
    } else {
      const parts = hash.split(":");
      book = parseInt(parts[0]);
      chapter = parseInt(parts[1]);
      verse = parseInt(parts[2]);
    }
    switch (book) {
      case 15:
      case 18:
        padBookAtStart();
        break;
      case 1:
      case 20:
      case 22:
      case 26:
      case 32:
      case 27:
        displacedVerse();
        break;
      case 8:
        displacedVerse();
        break;
      default:
        mappedVerse = verse;
    }
    if (regMatch) {
      return `[${book}:${chapter}:${mappedVerse}]`;
    }
    return `${book}:${chapter}:${mappedVerse}`;
  };
  function padBookAtStart() {
    const delta = to.last.books[book].chapters[chapter].verse - from.last.books[book].chapters[chapter].verse;
    mappedVerse = verse + delta;
    if (delta < 0) {
      mappedVerse = mappedVerse < 1 ? 0 : mappedVerse;
    } else {
      mappedVerse = mappedVerse > to.last.books[book].chapters[chapter].verse ? to.last.books[book].chapters[chapter].verse : mappedVerse;
    }
  }
  function displacedVerse() {
    mappedVerse = verse;
    if (to.last.books[book].chapters[chapter].verse !== from.last.books[book].chapters[chapter].verse) {
      let firstCoupled = false;
      let secondCoupled = false;
      if (chapter - 1 >= 0 && to.last.books[book].chapters[chapter - 1].verse !== from.last.books[book].chapters[chapter - 1].verse)
        secondCoupled = true;
      if (chapter + 1 <= to.last.books[book].chapter && to.last.books[book].chapters[chapter + 1].verse !== from.last.books[book].chapters[chapter + 1].verse)
        firstCoupled = true;
      if (firstCoupled) {
        if (mappedVerse > to.last.books[book].chapters[chapter].verse) {
          mappedVerse = 1;
          chapter = chapter + 1;
        }
      }
      if (secondCoupled) {
        if (to.last.books[book].chapters[chapter].verse > from.last.books[book].chapters[chapter].verse) {
          mappedVerse = verse + 1;
        } else {
        }
      }
    }
  }

  // bundle/src/artefacts/bible/util/bible.ts
  var hashMapper2 = hashMapper;
  var bibleRefs = new bible_references_default(
    [af_default, en_default].map(({ abbreviations }) => abbreviations)
  );
  var { bookNames: abbr, getVerseRanges } = bibleRefs;
  var bookNumber = abbr.reduce(
    (acc, bookAbbrs, i10) => {
      acc[bookAbbrs[0]] = i10;
      return acc;
    },
    {}
  );
  var bookNames = abbr.reduce(
    (acc, bookAbbrs, i10) => {
      acc[i10] = bookAbbrs[0];
      return acc;
    },
    {}
  );
  var versions = {};
  var addBibleVersion = (versionName, version) => {
    versions[versionName] = bibleVersionToLookUp(version);
  };
  var getVersion = (versionName) => versions[versionName];
  var bibleVersionToLookUp = (bibleVersion) => {
    const verseList = [];
    const verseLookUp = {};
    const last = {
      book: 0,
      books: {}
    };
    bibleVersion.forEach((book2, b3) => {
      last.book = b3;
      last.books[b3] = {
        chapter: 0,
        chapters: {}
      };
      book2.forEach((chapter2, c6) => {
        last.books[b3].chapter = c6;
        last.books[b3].chapters[c6] = {
          verse: 0
        };
        chapter2.forEach((verse2) => {
          last.books[b3].chapters[c6].verse = +verse2.n;
          verseLookUp[`${b3}:${c6}:${verse2.n}`] = verseList.length;
          verseList.push({
            hash: `${b3}:${c6}:${verse2.n}`,
            text: verse2.txt
          });
        });
      });
    });
    return { verseList, verseLookUp, last };
  };
  var fillRangeEnds = (versionName, verseRange) => {
    const { start, end } = verseRange;
    const version = getVersion(versionName);
    if (!version)
      return {};
    const startIndex = version.verseLookUp[`${bookNumber[start.book]}:${start.chapter - 1}:${start.verse}`];
    const maxBook = version.last.book;
    const endBook = limit(bookNumber[end.book], maxBook);
    const maxChapter = version.last.books[endBook].chapter;
    const endChapter = limit(end.chapter && end.chapter - 1, maxChapter);
    const maxVerse = version.last.books[endBook].chapters[endChapter].verse;
    const endVerse = limit(end.verse, maxVerse);
    const endIndex = version.verseLookUp[`${endBook}:${endChapter}:${endVerse}`];
    return {
      start: __spreadProps(__spreadValues({}, start), {
        index: startIndex
      }),
      end: {
        book: getBookName(endBook),
        chapter: `${endChapter + 1}`,
        verse: `${endVerse}`,
        index: endIndex
      }
    };
  };
  var limit = (n10, max) => {
    if (n10 === void 0)
      return max;
    if (n10 > max)
      return max;
    return n10;
  };
  var getBookName = (index) => bookNames[index];
  var expandHash = (hash) => {
    const parts = hash.split(":");
    return {
      //book: getBookName(parts[0]),
      book: urlNames[+parts[0]],
      chapter: `${+parts[1] + 1}`,
      verse: parts[2]
    };
  };
  var getFullVerseRanges = ({
    rangesText,
    versionName
  }) => {
    const text = rangesText || "gen - rev";
    const ranges = getVerseRanges(text);
    return ranges.map((range) => fillRangeEnds(versionName, range));
  };
  var getIndexFromHash = (versionName, hash) => versions[versionName].verseLookUp[hash];
  var getVerseFromIndex = (versionName, index) => versions[versionName].verseList[index];
  var getVerseFromHash = (versionName, hash) => {
    const index = getIndexFromHash(versionName, hash);
    const verse2 = getVerseFromIndex(versionName, index);
    return {
      text: verse2 ? verse2.text : "",
      prettyRef: formatRef(expandHash(hash))
    };
  };
  var getIndexRange = (startIndex, endIndex) => {
    const indices = [];
    for (let i10 = startIndex; i10 <= endIndex; i10++) {
      indices.push(i10);
    }
    return indices;
  };
  var getHashesFromIndexRange = (versionName, startIndex, endIndex) => getIndexRange(startIndex, endIndex).map(
    (index) => getVersion(versionName).verseList[index].hash
  );
  var getHashesFromVerseRanges = (versionName, verseRanges) => {
    const res = [];
    const ranges = verseRanges.map(
      ({ start, end }) => getHashesFromIndexRange(versionName, start.index, end.index)
    );
    return res.concat(...ranges);
  };
  var titleCase = (str) => {
    return str.replace(/\b\w/g, (m3) => m3.toUpperCase());
  };
  var formatRef = ({
    book: book2,
    chapter: chapter2,
    verse: verse2
  }) => {
    return `${titleCase(book2)} ${chapter2}:${verse2}`;
  };

  // bundle/src/artefacts/bible/util/api.ts
  var versionsPromised = {};
  var loadVersion = (name, url) => {
    if (versionsPromised[name])
      return versionsPromised[name];
    console.log("Route: ", url);
    versionsPromised[name] = fetch(url).then((res) => {
      if (res.status >= 400) {
        delete versionsPromised[name];
        throw new Error("Bad res from server");
      }
      return res.text();
    }).then((text) => {
      const version = uncompress(text);
      addBibleVersion(name, version);
      return version;
    });
    return versionsPromised[name];
  };
  var tskText = "";
  var loadTSK = async (url) => {
    if (tskText)
      return processTSKText(tskText);
    console.log("Tsk Route: ", url);
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Bad res from server");
    }
    tskText = await res.text();
    return processTSKText(tskText);
  };
  var processTSKText = (tsk) => {
    const lines = tsk.split("\n");
    lines.splice(0, 1);
    return lines.map(processLine);
  };
  var processLine = (line) => {
    const [book2, chapter2, verse2, sort, words, refs] = line.split("	");
    const key = book2 + "-" + chapter2 + "-" + verse2 + ":" + sort;
    const v3 = book2 + "-" + chapter2 + "-" + verse2;
    return { key, verse: v3, sort, words, refs };
  };
  function mapHashToTSKkey(hash) {
    const [book2, chapter2, verse2] = hash.split(":");
    return `${parseInt(book2) + 1}-${parseInt(chapter2) + 1}-${verse2}`;
  }

  // bundle/node_modules/tslib/tslib.es6.js
  var extendStatics = function(d4, b3) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d5, b4) {
      d5.__proto__ = b4;
    } || function(d5, b4) {
      for (var p4 in b4)
        if (Object.prototype.hasOwnProperty.call(b4, p4))
          d5[p4] = b4[p4];
    };
    return extendStatics(d4, b3);
  };
  function __extends(d4, b3) {
    if (typeof b3 !== "function" && b3 !== null)
      throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
    extendStatics(d4, b3);
    function __() {
      this.constructor = d4;
    }
    d4.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t10) {
      for (var s11, i10 = 1, n10 = arguments.length; i10 < n10; i10++) {
        s11 = arguments[i10];
        for (var p4 in s11)
          if (Object.prototype.hasOwnProperty.call(s11, p4))
            t10[p4] = s11[p4];
      }
      return t10;
    };
    return __assign.apply(this, arguments);
  };
  function __decorate(decorators, target, key, desc) {
    var c6 = arguments.length, r6 = c6 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r6 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i10 = decorators.length - 1; i10 >= 0; i10--)
        if (d4 = decorators[i10])
          r6 = (c6 < 3 ? d4(r6) : c6 > 3 ? d4(target, key, r6) : d4(target, key)) || r6;
    return c6 > 3 && r6 && Object.defineProperty(target, key, r6), r6;
  }
  function __values(o13) {
    var s11 = typeof Symbol === "function" && Symbol.iterator, m3 = s11 && o13[s11], i10 = 0;
    if (m3)
      return m3.call(o13);
    if (o13 && typeof o13.length === "number")
      return {
        next: function() {
          if (o13 && i10 >= o13.length)
            o13 = void 0;
          return { value: o13 && o13[i10++], done: !o13 };
        }
      };
    throw new TypeError(s11 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o13, n10) {
    var m3 = typeof Symbol === "function" && o13[Symbol.iterator];
    if (!m3)
      return o13;
    var i10 = m3.call(o13), r6, ar = [], e12;
    try {
      while ((n10 === void 0 || n10-- > 0) && !(r6 = i10.next()).done)
        ar.push(r6.value);
    } catch (error) {
      e12 = { error };
    } finally {
      try {
        if (r6 && !r6.done && (m3 = i10["return"]))
          m3.call(i10);
      } finally {
        if (e12)
          throw e12.error;
      }
    }
    return ar;
  }

  // bundle/node_modules/@material/mwc-icon/mwc-icon-host.css.js
  var styles = i`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;

  // bundle/node_modules/@material/mwc-icon/mwc-icon.js
  var Icon = class Icon2 extends s4 {
    /** @soyTemplate */
    render() {
      return x`<span><slot></slot></span>`;
    }
  };
  Icon.styles = [styles];
  Icon = __decorate([
    e4("mwc-icon")
  ], Icon);

  // bundle/node_modules/@material/dom/ponyfill.js
  function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
  }

  // bundle/node_modules/@material/mwc-base/utils.js
  var isNodeElement = (node) => {
    return node.nodeType === Node.ELEMENT_NODE;
  };
  function addHasRemoveClass(element) {
    return {
      addClass: (className) => {
        element.classList.add(className);
      },
      removeClass: (className) => {
        element.classList.remove(className);
      },
      hasClass: (className) => element.classList.contains(className)
    };
  }
  var supportsPassive = false;
  var fn = () => {
  };
  var optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document.addEventListener("x", fn, optionsBlock);
  document.removeEventListener("x", fn);
  var supportsPassiveEventListener = supportsPassive;
  var deepActiveElementPath = (doc = window.document) => {
    let activeElement = doc.activeElement;
    const path = [];
    if (!activeElement) {
      return path;
    }
    while (activeElement) {
      path.push(activeElement);
      if (activeElement.shadowRoot) {
        activeElement = activeElement.shadowRoot.activeElement;
      } else {
        break;
      }
    }
    return path;
  };
  var doesElementContainFocus = (element) => {
    const activePath = deepActiveElementPath();
    if (!activePath.length) {
      return false;
    }
    const deepActiveElement = activePath[activePath.length - 1];
    const focusEv = new Event("check-if-focused", { bubbles: true, composed: true });
    let composedPath = [];
    const listener = (ev) => {
      composedPath = ev.composedPath();
    };
    document.body.addEventListener("check-if-focused", listener);
    deepActiveElement.dispatchEvent(focusEv);
    document.body.removeEventListener("check-if-focused", listener);
    return composedPath.indexOf(element) !== -1;
  };

  // bundle/node_modules/@material/mwc-base/base-element.js
  var BaseElement = class extends s4 {
    click() {
      if (this.mdcRoot) {
        this.mdcRoot.focus();
        this.mdcRoot.click();
        return;
      }
      super.click();
    }
    /**
     * Create and attach the MDC Foundation to the instance
     */
    createFoundation() {
      if (this.mdcFoundation !== void 0) {
        this.mdcFoundation.destroy();
      }
      if (this.mdcFoundationClass) {
        this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
        this.mdcFoundation.init();
      }
    }
    firstUpdated() {
      this.createFoundation();
    }
  };

  // bundle/node_modules/@material/base/foundation.js
  var MDCFoundation = (
    /** @class */
    function() {
      function MDCFoundation2(adapter) {
        if (adapter === void 0) {
          adapter = {};
        }
        this.adapter = adapter;
      }
      Object.defineProperty(MDCFoundation2, "cssClasses", {
        get: function() {
          return {};
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCFoundation2, "strings", {
        get: function() {
          return {};
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCFoundation2, "numbers", {
        get: function() {
          return {};
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCFoundation2, "defaultAdapter", {
        get: function() {
          return {};
        },
        enumerable: false,
        configurable: true
      });
      MDCFoundation2.prototype.init = function() {
      };
      MDCFoundation2.prototype.destroy = function() {
      };
      return MDCFoundation2;
    }()
  );

  // bundle/node_modules/@material/ripple/constants.js
  var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
    FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
    FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
    ROOT: "mdc-ripple-upgraded",
    UNBOUNDED: "mdc-ripple-upgraded--unbounded"
  };
  var strings = {
    VAR_FG_SCALE: "--mdc-ripple-fg-scale",
    VAR_FG_SIZE: "--mdc-ripple-fg-size",
    VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
    VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
    VAR_LEFT: "--mdc-ripple-left",
    VAR_TOP: "--mdc-ripple-top"
  };
  var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300
    // Delay between touch and simulated mouse events on touch devices
  };

  // bundle/node_modules/@material/ripple/util.js
  function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
      return { x: 0, y: 0 };
    }
    var x3 = pageOffset.x, y3 = pageOffset.y;
    var documentX = x3 + clientRect.left;
    var documentY = y3 + clientRect.top;
    var normalizedX;
    var normalizedY;
    if (evt.type === "touchstart") {
      var touchEvent = evt;
      normalizedX = touchEvent.changedTouches[0].pageX - documentX;
      normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    } else {
      var mouseEvent = evt;
      normalizedX = mouseEvent.pageX - documentX;
      normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
  }

  // bundle/node_modules/@material/ripple/foundation.js
  var ACTIVATION_EVENT_TYPES = [
    "touchstart",
    "pointerdown",
    "mousedown",
    "keydown"
  ];
  var POINTER_DEACTIVATION_EVENT_TYPES = [
    "touchend",
    "pointerup",
    "mouseup",
    "contextmenu"
  ];
  var activatedTargets = [];
  var MDCRippleFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCRippleFoundation2, _super);
      function MDCRippleFoundation2(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded = false;
        _this.activationTimer = 0;
        _this.fgDeactivationRemovalTimer = 0;
        _this.fgScale = "0";
        _this.frame = { width: 0, height: 0 };
        _this.initialSize = 0;
        _this.layoutFrame = 0;
        _this.maxRadius = 0;
        _this.unboundedCoords = { left: 0, top: 0 };
        _this.activationState = _this.defaultActivationState();
        _this.activationTimerCallback = function() {
          _this.activationAnimationHasEnded = true;
          _this.runDeactivationUXLogicIfReady();
        };
        _this.activateHandler = function(e12) {
          _this.activateImpl(e12);
        };
        _this.deactivateHandler = function() {
          _this.deactivateImpl();
        };
        _this.focusHandler = function() {
          _this.handleFocus();
        };
        _this.blurHandler = function() {
          _this.handleBlur();
        };
        _this.resizeHandler = function() {
          _this.layout();
        };
        return _this;
      }
      Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
        get: function() {
          return cssClasses;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation2, "strings", {
        get: function() {
          return strings;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation2, "numbers", {
        get: function() {
          return numbers;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
        get: function() {
          return {
            addClass: function() {
              return void 0;
            },
            browserSupportsCssVars: function() {
              return true;
            },
            computeBoundingRect: function() {
              return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
            },
            containsEventTarget: function() {
              return true;
            },
            deregisterDocumentInteractionHandler: function() {
              return void 0;
            },
            deregisterInteractionHandler: function() {
              return void 0;
            },
            deregisterResizeHandler: function() {
              return void 0;
            },
            getWindowPageOffset: function() {
              return { x: 0, y: 0 };
            },
            isSurfaceActive: function() {
              return true;
            },
            isSurfaceDisabled: function() {
              return true;
            },
            isUnbounded: function() {
              return true;
            },
            registerDocumentInteractionHandler: function() {
              return void 0;
            },
            registerInteractionHandler: function() {
              return void 0;
            },
            registerResizeHandler: function() {
              return void 0;
            },
            removeClass: function() {
              return void 0;
            },
            updateCssVariable: function() {
              return void 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCRippleFoundation2.prototype.init = function() {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple();
        this.registerRootHandlers(supportsPressRipple);
        if (supportsPressRipple) {
          var _a3 = MDCRippleFoundation2.cssClasses, ROOT_1 = _a3.ROOT, UNBOUNDED_1 = _a3.UNBOUNDED;
          requestAnimationFrame(function() {
            _this.adapter.addClass(ROOT_1);
            if (_this.adapter.isUnbounded()) {
              _this.adapter.addClass(UNBOUNDED_1);
              _this.layoutInternal();
            }
          });
        }
      };
      MDCRippleFoundation2.prototype.destroy = function() {
        var _this = this;
        if (this.supportsPressRipple()) {
          if (this.activationTimer) {
            clearTimeout(this.activationTimer);
            this.activationTimer = 0;
            this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
          }
          if (this.fgDeactivationRemovalTimer) {
            clearTimeout(this.fgDeactivationRemovalTimer);
            this.fgDeactivationRemovalTimer = 0;
            this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
          }
          var _a3 = MDCRippleFoundation2.cssClasses, ROOT_2 = _a3.ROOT, UNBOUNDED_2 = _a3.UNBOUNDED;
          requestAnimationFrame(function() {
            _this.adapter.removeClass(ROOT_2);
            _this.adapter.removeClass(UNBOUNDED_2);
            _this.removeCssVars();
          });
        }
        this.deregisterRootHandlers();
        this.deregisterDeactivationHandlers();
      };
      MDCRippleFoundation2.prototype.activate = function(evt) {
        this.activateImpl(evt);
      };
      MDCRippleFoundation2.prototype.deactivate = function() {
        this.deactivateImpl();
      };
      MDCRippleFoundation2.prototype.layout = function() {
        var _this = this;
        if (this.layoutFrame) {
          cancelAnimationFrame(this.layoutFrame);
        }
        this.layoutFrame = requestAnimationFrame(function() {
          _this.layoutInternal();
          _this.layoutFrame = 0;
        });
      };
      MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
        var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
        if (unbounded) {
          this.adapter.addClass(UNBOUNDED);
        } else {
          this.adapter.removeClass(UNBOUNDED);
        }
      };
      MDCRippleFoundation2.prototype.handleFocus = function() {
        var _this = this;
        requestAnimationFrame(function() {
          return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
        });
      };
      MDCRippleFoundation2.prototype.handleBlur = function() {
        var _this = this;
        requestAnimationFrame(function() {
          return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
        });
      };
      MDCRippleFoundation2.prototype.supportsPressRipple = function() {
        return this.adapter.browserSupportsCssVars();
      };
      MDCRippleFoundation2.prototype.defaultActivationState = function() {
        return {
          activationEvent: void 0,
          hasDeactivationUXRun: false,
          isActivated: false,
          isProgrammatic: false,
          wasActivatedByPointer: false,
          wasElementMadeActive: false
        };
      };
      MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
        var e_1, _a3;
        if (supportsPressRipple) {
          try {
            for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
              var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
              this.adapter.registerInteractionHandler(evtType, this.activateHandler);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a3 = ACTIVATION_EVENT_TYPES_1.return))
                _a3.call(ACTIVATION_EVENT_TYPES_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          if (this.adapter.isUnbounded()) {
            this.adapter.registerResizeHandler(this.resizeHandler);
          }
        }
        this.adapter.registerInteractionHandler("focus", this.focusHandler);
        this.adapter.registerInteractionHandler("blur", this.blurHandler);
      };
      MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
        var e_2, _a3;
        if (evt.type === "keydown") {
          this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
        } else {
          try {
            for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
              var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
              this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a3 = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
                _a3.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
      };
      MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
        var e_3, _a3;
        try {
          for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
            var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
            this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a3 = ACTIVATION_EVENT_TYPES_2.return))
              _a3.call(ACTIVATION_EVENT_TYPES_2);
          } finally {
            if (e_3)
              throw e_3.error;
          }
        }
        this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
        this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
        if (this.adapter.isUnbounded()) {
          this.adapter.deregisterResizeHandler(this.resizeHandler);
        }
      };
      MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
        var e_4, _a3;
        this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
        try {
          for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
            var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
            this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a3 = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
              _a3.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
      };
      MDCRippleFoundation2.prototype.removeCssVars = function() {
        var _this = this;
        var rippleStrings = MDCRippleFoundation2.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function(key) {
          if (key.indexOf("VAR_") === 0) {
            _this.adapter.updateCssVariable(rippleStrings[key], null);
          }
        });
      };
      MDCRippleFoundation2.prototype.activateImpl = function(evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
          return;
        }
        var activationState = this.activationState;
        if (activationState.isActivated) {
          return;
        }
        var previousActivationEvent = this.previousActivationEvent;
        var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
          return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === void 0;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
        var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
          return _this.adapter.containsEventTarget(target);
        });
        if (hasActivatedChild) {
          this.resetActivationState();
          return;
        }
        if (evt !== void 0) {
          activatedTargets.push(evt.target);
          this.registerDeactivationHandlers(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          this.animateActivation();
        }
        requestAnimationFrame(function() {
          activatedTargets = [];
          if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
            activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
            if (activationState.wasElementMadeActive) {
              _this.animateActivation();
            }
          }
          if (!activationState.wasElementMadeActive) {
            _this.activationState = _this.defaultActivationState();
          }
        });
      };
      MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
        return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
      };
      MDCRippleFoundation2.prototype.animateActivation = function() {
        var _this = this;
        var _a3 = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a3.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a3.VAR_FG_TRANSLATE_END;
        var _b3 = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b3.FG_DEACTIVATION, FG_ACTIVATION = _b3.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var translateStart = "";
        var translateEnd = "";
        if (!this.adapter.isUnbounded()) {
          var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
          translateStart = startPoint.x + "px, " + startPoint.y + "px";
          translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        clearTimeout(this.activationTimer);
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.rmBoundedActivationClasses();
        this.adapter.removeClass(FG_DEACTIVATION);
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer = setTimeout(function() {
          _this.activationTimerCallback();
        }, DEACTIVATION_TIMEOUT_MS);
      };
      MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
        var _a3 = this.activationState, activationEvent = _a3.activationEvent, wasActivatedByPointer = _a3.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
          startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        } else {
          startPoint = {
            x: this.frame.width / 2,
            y: this.frame.height / 2
          };
        }
        startPoint = {
          x: startPoint.x - this.initialSize / 2,
          y: startPoint.y - this.initialSize / 2
        };
        var endPoint = {
          x: this.frame.width / 2 - this.initialSize / 2,
          y: this.frame.height / 2 - this.initialSize / 2
        };
        return { startPoint, endPoint };
      };
      MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
        var _this = this;
        var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
        var _a3 = this.activationState, hasDeactivationUXRun = _a3.hasDeactivationUXRun, isActivated = _a3.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded) {
          this.rmBoundedActivationClasses();
          this.adapter.addClass(FG_DEACTIVATION);
          this.fgDeactivationRemovalTimer = setTimeout(function() {
            _this.adapter.removeClass(FG_DEACTIVATION);
          }, numbers.FG_DEACTIVATION_MS);
        }
      };
      MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
        var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded = false;
        this.adapter.computeBoundingRect();
      };
      MDCRippleFoundation2.prototype.resetActivationState = function() {
        var _this = this;
        this.previousActivationEvent = this.activationState.activationEvent;
        this.activationState = this.defaultActivationState();
        setTimeout(function() {
          return _this.previousActivationEvent = void 0;
        }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
      };
      MDCRippleFoundation2.prototype.deactivateImpl = function() {
        var _this = this;
        var activationState = this.activationState;
        if (!activationState.isActivated) {
          return;
        }
        var state = __assign({}, activationState);
        if (activationState.isProgrammatic) {
          requestAnimationFrame(function() {
            _this.animateDeactivation(state);
          });
          this.resetActivationState();
        } else {
          this.deregisterDeactivationHandlers();
          requestAnimationFrame(function() {
            _this.activationState.hasDeactivationUXRun = true;
            _this.animateDeactivation(state);
            _this.resetActivationState();
          });
        }
      };
      MDCRippleFoundation2.prototype.animateDeactivation = function(_a3) {
        var wasActivatedByPointer = _a3.wasActivatedByPointer, wasElementMadeActive = _a3.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
          this.runDeactivationUXLogicIfReady();
        }
      };
      MDCRippleFoundation2.prototype.layoutInternal = function() {
        var _this = this;
        this.frame = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame.height, this.frame.width);
        var getBoundedRadius = function() {
          var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
          return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
        };
        this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
          this.initialSize = initialSize - 1;
        } else {
          this.initialSize = initialSize;
        }
        this.fgScale = "" + this.maxRadius / this.initialSize;
        this.updateLayoutCssVars();
      };
      MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
        var _a3 = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a3.VAR_FG_SIZE, VAR_LEFT = _a3.VAR_LEFT, VAR_TOP = _a3.VAR_TOP, VAR_FG_SCALE = _a3.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
        if (this.adapter.isUnbounded()) {
          this.unboundedCoords = {
            left: Math.round(this.frame.width / 2 - this.initialSize / 2),
            top: Math.round(this.frame.height / 2 - this.initialSize / 2)
          };
          this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
          this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
        }
      };
      return MDCRippleFoundation2;
    }(MDCFoundation)
  );
  var foundation_default = MDCRippleFoundation;

  // bundle/node_modules/lit-html/directive.js
  var t8 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e10 = (t10) => (...e12) => ({ _$litDirective$: t10, values: e12 });
  var i7 = class {
    constructor(t10) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t10, e12, i10) {
      this._$Ct = t10, this._$AM = e12, this._$Ci = i10;
    }
    _$AS(t10, e12) {
      return this.update(t10, e12);
    }
    update(t10, e12) {
      return this.render(...e12);
    }
  };

  // bundle/node_modules/lit-html/directives/class-map.js
  var o10 = e10(class extends i7 {
    constructor(t10) {
      var i10;
      if (super(t10), t10.type !== t8.ATTRIBUTE || "class" !== t10.name || (null === (i10 = t10.strings) || void 0 === i10 ? void 0 : i10.length) > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t10) {
      return " " + Object.keys(t10).filter((i10) => t10[i10]).join(" ") + " ";
    }
    update(i10, [s11]) {
      var r6, o13;
      if (void 0 === this.it) {
        this.it = /* @__PURE__ */ new Set(), void 0 !== i10.strings && (this.nt = new Set(i10.strings.join(" ").split(/\s/).filter((t10) => "" !== t10)));
        for (const t10 in s11)
          s11[t10] && !(null === (r6 = this.nt) || void 0 === r6 ? void 0 : r6.has(t10)) && this.it.add(t10);
        return this.render(s11);
      }
      const e12 = i10.element.classList;
      this.it.forEach((t10) => {
        t10 in s11 || (e12.remove(t10), this.it.delete(t10));
      });
      for (const t10 in s11) {
        const i11 = !!s11[t10];
        i11 === this.it.has(t10) || (null === (o13 = this.nt) || void 0 === o13 ? void 0 : o13.has(t10)) || (i11 ? (e12.add(t10), this.it.add(t10)) : (e12.remove(t10), this.it.delete(t10)));
      }
      return T;
    }
  });

  // bundle/node_modules/lit-html/directives/style-map.js
  var i8 = "important";
  var n8 = " !" + i8;
  var o11 = e10(class extends i7 {
    constructor(t10) {
      var e12;
      if (super(t10), t10.type !== t8.ATTRIBUTE || "style" !== t10.name || (null === (e12 = t10.strings) || void 0 === e12 ? void 0 : e12.length) > 2)
        throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t10) {
      return Object.keys(t10).reduce((e12, r6) => {
        const s11 = t10[r6];
        return null == s11 ? e12 : e12 + `${r6 = r6.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s11};`;
      }, "");
    }
    update(e12, [r6]) {
      const { style: s11 } = e12.element;
      if (void 0 === this.ut) {
        this.ut = /* @__PURE__ */ new Set();
        for (const t10 in r6)
          this.ut.add(t10);
        return this.render(r6);
      }
      this.ut.forEach((t10) => {
        null == r6[t10] && (this.ut.delete(t10), t10.includes("-") ? s11.removeProperty(t10) : s11[t10] = "");
      });
      for (const t10 in r6) {
        const e13 = r6[t10];
        if (null != e13) {
          this.ut.add(t10);
          const r7 = "string" == typeof e13 && e13.endsWith(n8);
          t10.includes("-") || r7 ? s11.setProperty(t10, r7 ? e13.slice(0, -11) : e13, r7 ? i8 : "") : s11[t10] = e13;
        }
      }
      return T;
    }
  });

  // bundle/node_modules/@material/mwc-ripple/mwc-ripple-base.js
  var RippleBase = class extends BaseElement {
    constructor() {
      super(...arguments);
      this.primary = false;
      this.accent = false;
      this.unbounded = false;
      this.disabled = false;
      this.activated = false;
      this.selected = false;
      this.internalUseStateLayerCustomProperties = false;
      this.hovering = false;
      this.bgFocused = false;
      this.fgActivation = false;
      this.fgDeactivation = false;
      this.fgScale = "";
      this.fgSize = "";
      this.translateStart = "";
      this.translateEnd = "";
      this.leftPos = "";
      this.topPos = "";
      this.mdcFoundationClass = foundation_default;
    }
    get isActive() {
      return matches(this.parentElement || this, ":active");
    }
    createAdapter() {
      return {
        browserSupportsCssVars: () => true,
        isUnbounded: () => this.unbounded,
        isSurfaceActive: () => this.isActive,
        isSurfaceDisabled: () => this.disabled,
        addClass: (className) => {
          switch (className) {
            case "mdc-ripple-upgraded--background-focused":
              this.bgFocused = true;
              break;
            case "mdc-ripple-upgraded--foreground-activation":
              this.fgActivation = true;
              break;
            case "mdc-ripple-upgraded--foreground-deactivation":
              this.fgDeactivation = true;
              break;
            default:
              break;
          }
        },
        removeClass: (className) => {
          switch (className) {
            case "mdc-ripple-upgraded--background-focused":
              this.bgFocused = false;
              break;
            case "mdc-ripple-upgraded--foreground-activation":
              this.fgActivation = false;
              break;
            case "mdc-ripple-upgraded--foreground-deactivation":
              this.fgDeactivation = false;
              break;
            default:
              break;
          }
        },
        containsEventTarget: () => true,
        registerInteractionHandler: () => void 0,
        deregisterInteractionHandler: () => void 0,
        registerDocumentInteractionHandler: () => void 0,
        deregisterDocumentInteractionHandler: () => void 0,
        registerResizeHandler: () => void 0,
        deregisterResizeHandler: () => void 0,
        updateCssVariable: (varName, value) => {
          switch (varName) {
            case "--mdc-ripple-fg-scale":
              this.fgScale = value;
              break;
            case "--mdc-ripple-fg-size":
              this.fgSize = value;
              break;
            case "--mdc-ripple-fg-translate-end":
              this.translateEnd = value;
              break;
            case "--mdc-ripple-fg-translate-start":
              this.translateStart = value;
              break;
            case "--mdc-ripple-left":
              this.leftPos = value;
              break;
            case "--mdc-ripple-top":
              this.topPos = value;
              break;
            default:
              break;
          }
        },
        computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
        getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
      };
    }
    startPress(ev) {
      this.waitForFoundation(() => {
        this.mdcFoundation.activate(ev);
      });
    }
    endPress() {
      this.waitForFoundation(() => {
        this.mdcFoundation.deactivate();
      });
    }
    startFocus() {
      this.waitForFoundation(() => {
        this.mdcFoundation.handleFocus();
      });
    }
    endFocus() {
      this.waitForFoundation(() => {
        this.mdcFoundation.handleBlur();
      });
    }
    startHover() {
      this.hovering = true;
    }
    endHover() {
      this.hovering = false;
    }
    /**
     * Wait for the MDCFoundation to be created by `firstUpdated`
     */
    waitForFoundation(fn3) {
      if (this.mdcFoundation) {
        fn3();
      } else {
        this.updateComplete.then(fn3);
      }
    }
    update(changedProperties) {
      if (changedProperties.has("disabled")) {
        if (this.disabled) {
          this.endHover();
        }
      }
      super.update(changedProperties);
    }
    /** @soyTemplate */
    render() {
      const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
      const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
      const classes = {
        "mdc-ripple-surface--accent": this.accent,
        "mdc-ripple-surface--primary--activated": shouldActivateInPrimary,
        "mdc-ripple-surface--accent--activated": this.accent && this.activated,
        "mdc-ripple-surface--primary--selected": shouldSelectInPrimary,
        "mdc-ripple-surface--accent--selected": this.accent && this.selected,
        "mdc-ripple-surface--disabled": this.disabled,
        "mdc-ripple-surface--hover": this.hovering,
        "mdc-ripple-surface--primary": this.primary,
        "mdc-ripple-surface--selected": this.selected,
        "mdc-ripple-upgraded--background-focused": this.bgFocused,
        "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
        "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
        "mdc-ripple-upgraded--unbounded": this.unbounded,
        "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
      };
      return x`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o10(classes)}"
          style="${o11({
        "--mdc-ripple-fg-scale": this.fgScale,
        "--mdc-ripple-fg-size": this.fgSize,
        "--mdc-ripple-fg-translate-end": this.translateEnd,
        "--mdc-ripple-fg-translate-start": this.translateStart,
        "--mdc-ripple-left": this.leftPos,
        "--mdc-ripple-top": this.topPos
      })}"></div>`;
    }
  };
  __decorate([
    i4(".mdc-ripple-surface")
  ], RippleBase.prototype, "mdcRoot", void 0);
  __decorate([
    e5({ type: Boolean })
  ], RippleBase.prototype, "primary", void 0);
  __decorate([
    e5({ type: Boolean })
  ], RippleBase.prototype, "accent", void 0);
  __decorate([
    e5({ type: Boolean })
  ], RippleBase.prototype, "unbounded", void 0);
  __decorate([
    e5({ type: Boolean })
  ], RippleBase.prototype, "disabled", void 0);
  __decorate([
    e5({ type: Boolean })
  ], RippleBase.prototype, "activated", void 0);
  __decorate([
    e5({ type: Boolean })
  ], RippleBase.prototype, "selected", void 0);
  __decorate([
    e5({ type: Boolean })
  ], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
  __decorate([
    t3()
  ], RippleBase.prototype, "hovering", void 0);
  __decorate([
    t3()
  ], RippleBase.prototype, "bgFocused", void 0);
  __decorate([
    t3()
  ], RippleBase.prototype, "fgActivation", void 0);
  __decorate([
    t3()
  ], RippleBase.prototype, "fgDeactivation", void 0);
  __decorate([
    t3()
  ], RippleBase.prototype, "fgScale", void 0);
  __decorate([
    t3()
  ], RippleBase.prototype, "fgSize", void 0);
  __decorate([
    t3()
  ], RippleBase.prototype, "translateStart", void 0);
  __decorate([
    t3()
  ], RippleBase.prototype, "translateEnd", void 0);
  __decorate([
    t3()
  ], RippleBase.prototype, "leftPos", void 0);
  __decorate([
    t3()
  ], RippleBase.prototype, "topPos", void 0);

  // bundle/node_modules/@material/mwc-ripple/mwc-ripple.css.js
  var styles2 = i`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;

  // bundle/node_modules/@material/mwc-ripple/mwc-ripple.js
  var Ripple = class Ripple2 extends RippleBase {
  };
  Ripple.styles = [styles2];
  Ripple = __decorate([
    e4("mwc-ripple")
  ], Ripple);

  // bundle/node_modules/@material/mwc-base/aria-property.js
  function tsDecorator(prototype, name, descriptor) {
    const constructor = prototype.constructor;
    if (!descriptor) {
      const litInternalPropertyKey = `__${name}`;
      descriptor = constructor.getPropertyDescriptor(name, litInternalPropertyKey);
      if (!descriptor) {
        throw new Error("@ariaProperty must be used after a @property decorator");
      }
    }
    const propDescriptor = descriptor;
    let attribute = "";
    if (!propDescriptor.set) {
      throw new Error(`@ariaProperty requires a setter for ${name}`);
    }
    if (prototype.dispatchWizEvent) {
      return descriptor;
    }
    const wrappedDescriptor = {
      configurable: true,
      enumerable: true,
      set(value) {
        if (attribute === "") {
          const options = constructor.getPropertyOptions(name);
          attribute = typeof options.attribute === "string" ? options.attribute : name;
        }
        if (this.hasAttribute(attribute)) {
          this.removeAttribute(attribute);
        }
        propDescriptor.set.call(this, value);
      }
    };
    if (propDescriptor.get) {
      wrappedDescriptor.get = function() {
        return propDescriptor.get.call(this);
      };
    }
    return wrappedDescriptor;
  }
  function ariaProperty(protoOrDescriptor, name, descriptor) {
    if (name !== void 0) {
      return tsDecorator(protoOrDescriptor, name, descriptor);
    } else {
      throw new Error("@ariaProperty only supports TypeScript Decorators");
    }
  }

  // bundle/node_modules/@material/mwc-ripple/ripple-handlers.js
  var RippleHandlers = class {
    constructor(rippleFn) {
      this.startPress = (ev) => {
        rippleFn().then((r6) => {
          r6 && r6.startPress(ev);
        });
      };
      this.endPress = () => {
        rippleFn().then((r6) => {
          r6 && r6.endPress();
        });
      };
      this.startFocus = () => {
        rippleFn().then((r6) => {
          r6 && r6.startFocus();
        });
      };
      this.endFocus = () => {
        rippleFn().then((r6) => {
          r6 && r6.endFocus();
        });
      };
      this.startHover = () => {
        rippleFn().then((r6) => {
          r6 && r6.startHover();
        });
      };
      this.endHover = () => {
        rippleFn().then((r6) => {
          r6 && r6.endHover();
        });
      };
    }
  };

  // bundle/node_modules/lit-html/directives/if-defined.js
  var l5 = (l9) => null != l9 ? l9 : A;

  // bundle/node_modules/@material/mwc-button/mwc-button-base.js
  var ButtonBase = class extends s4 {
    constructor() {
      super(...arguments);
      this.raised = false;
      this.unelevated = false;
      this.outlined = false;
      this.dense = false;
      this.disabled = false;
      this.trailingIcon = false;
      this.fullwidth = false;
      this.icon = "";
      this.label = "";
      this.expandContent = false;
      this.shouldRenderRipple = false;
      this.rippleHandlers = new RippleHandlers(() => {
        this.shouldRenderRipple = true;
        return this.ripple;
      });
    }
    /** @soyTemplate */
    renderOverlay() {
      return x``;
    }
    /** @soyTemplate */
    renderRipple() {
      const filled = this.raised || this.unelevated;
      return this.shouldRenderRipple ? x`<mwc-ripple class="ripple" .primary="${!filled}" .disabled="${this.disabled}"></mwc-ripple>` : "";
    }
    focus() {
      const buttonElement = this.buttonElement;
      if (buttonElement) {
        this.rippleHandlers.startFocus();
        buttonElement.focus();
      }
    }
    blur() {
      const buttonElement = this.buttonElement;
      if (buttonElement) {
        this.rippleHandlers.endFocus();
        buttonElement.blur();
      }
    }
    /** @soyTemplate */
    getRenderClasses() {
      return {
        "mdc-button--raised": this.raised,
        "mdc-button--unelevated": this.unelevated,
        "mdc-button--outlined": this.outlined,
        "mdc-button--dense": this.dense
      };
    }
    /**
     * @soyTemplate
     * @soyAttributes buttonAttributes: #button
     * @soyClasses buttonClasses: #button
     */
    render() {
      return x`
      <button
          id="button"
          class="mdc-button ${o10(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${l5(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${o10({
        flex: this.expandContent
      })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
      </button>`;
    }
    /** @soyTemplate */
    renderIcon() {
      return x`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
    }
    handleRippleActivate(evt) {
      const onUp = () => {
        window.removeEventListener("mouseup", onUp);
        this.handleRippleDeactivate();
      };
      window.addEventListener("mouseup", onUp);
      this.rippleHandlers.startPress(evt);
    }
    handleRippleDeactivate() {
      this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
      this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
      this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
      this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
      this.rippleHandlers.endFocus();
    }
  };
  ButtonBase.shadowRootOptions = { mode: "open", delegatesFocus: true };
  __decorate([
    ariaProperty,
    e5({ type: String, attribute: "aria-haspopup" })
  ], ButtonBase.prototype, "ariaHasPopup", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], ButtonBase.prototype, "raised", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], ButtonBase.prototype, "unelevated", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], ButtonBase.prototype, "outlined", void 0);
  __decorate([
    e5({ type: Boolean })
  ], ButtonBase.prototype, "dense", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], ButtonBase.prototype, "disabled", void 0);
  __decorate([
    e5({ type: Boolean, attribute: "trailingicon" })
  ], ButtonBase.prototype, "trailingIcon", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], ButtonBase.prototype, "fullwidth", void 0);
  __decorate([
    e5({ type: String })
  ], ButtonBase.prototype, "icon", void 0);
  __decorate([
    e5({ type: String })
  ], ButtonBase.prototype, "label", void 0);
  __decorate([
    e5({ type: Boolean })
  ], ButtonBase.prototype, "expandContent", void 0);
  __decorate([
    i4("#button")
  ], ButtonBase.prototype, "buttonElement", void 0);
  __decorate([
    e7("mwc-ripple")
  ], ButtonBase.prototype, "ripple", void 0);
  __decorate([
    t3()
  ], ButtonBase.prototype, "shouldRenderRipple", void 0);
  __decorate([
    e6({ passive: true })
  ], ButtonBase.prototype, "handleRippleActivate", null);

  // bundle/node_modules/@material/mwc-button/styles.css.js
  var styles3 = i`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;

  // bundle/node_modules/@material/mwc-button/mwc-button.js
  var Button = class Button2 extends ButtonBase {
  };
  Button.styles = [styles3];
  Button = __decorate([
    e4("mwc-button")
  ], Button);

  // bundle/node_modules/@material/mwc-base/form-element.js
  var _a;
  var _b;
  var USING_SHADY_DOM = (_b = (_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) !== null && _b !== void 0 ? _b : false;
  var FormElement = class extends BaseElement {
    constructor() {
      super(...arguments);
      this.disabled = false;
      this.containingForm = null;
      this.formDataListener = (ev) => {
        if (!this.disabled) {
          this.setFormData(ev.formData);
        }
      };
    }
    findFormElement() {
      if (!this.shadowRoot || USING_SHADY_DOM) {
        return null;
      }
      const root = this.getRootNode();
      const forms = root.querySelectorAll("form");
      for (const form of Array.from(forms)) {
        if (form.contains(this)) {
          return form;
        }
      }
      return null;
    }
    connectedCallback() {
      var _a3;
      super.connectedCallback();
      this.containingForm = this.findFormElement();
      (_a3 = this.containingForm) === null || _a3 === void 0 ? void 0 : _a3.addEventListener("formdata", this.formDataListener);
    }
    disconnectedCallback() {
      var _a3;
      super.disconnectedCallback();
      (_a3 = this.containingForm) === null || _a3 === void 0 ? void 0 : _a3.removeEventListener("formdata", this.formDataListener);
      this.containingForm = null;
    }
    click() {
      if (this.formElement && !this.disabled) {
        this.formElement.focus();
        this.formElement.click();
      }
    }
    firstUpdated() {
      super.firstUpdated();
      if (this.shadowRoot) {
        this.mdcRoot.addEventListener("change", (e12) => {
          this.dispatchEvent(new Event("change", e12));
        });
      }
    }
  };
  FormElement.shadowRootOptions = { mode: "open", delegatesFocus: true };
  __decorate([
    e5({ type: Boolean })
  ], FormElement.prototype, "disabled", void 0);

  // bundle/node_modules/@material/mwc-checkbox/mwc-checkbox-base.js
  var CheckboxBase = class extends FormElement {
    constructor() {
      super(...arguments);
      this.checked = false;
      this.indeterminate = false;
      this.disabled = false;
      this.name = "";
      this.value = "on";
      this.reducedTouchTarget = false;
      this.animationClass = "";
      this.shouldRenderRipple = false;
      this.focused = false;
      this.mdcFoundationClass = void 0;
      this.mdcFoundation = void 0;
      this.rippleElement = null;
      this.rippleHandlers = new RippleHandlers(() => {
        this.shouldRenderRipple = true;
        this.ripple.then((v3) => this.rippleElement = v3);
        return this.ripple;
      });
    }
    createAdapter() {
      return {};
    }
    update(changedProperties) {
      const oldIndeterminate = changedProperties.get("indeterminate");
      const oldChecked = changedProperties.get("checked");
      const oldDisabled = changedProperties.get("disabled");
      if (oldIndeterminate !== void 0 || oldChecked !== void 0 || oldDisabled !== void 0) {
        const oldState = this.calculateAnimationStateName(!!oldChecked, !!oldIndeterminate, !!oldDisabled);
        const newState = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
        this.animationClass = `${oldState}-${newState}`;
      }
      super.update(changedProperties);
    }
    calculateAnimationStateName(checked, indeterminate, disabled) {
      if (disabled) {
        return "disabled";
      } else if (indeterminate) {
        return "indeterminate";
      } else if (checked) {
        return "checked";
      } else {
        return "unchecked";
      }
    }
    // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
    /** @soyTemplate */
    renderRipple() {
      return this.shouldRenderRipple ? this.renderRippleTemplate() : "";
    }
    /** @soyTemplate */
    renderRippleTemplate() {
      return x`<mwc-ripple
        .disabled="${this.disabled}"
        unbounded></mwc-ripple>`;
    }
    /**
     * @soyTemplate
     * @soyAttributes checkboxAttributes: input
     * @soyClasses checkboxClasses: .mdc-checkbox
     */
    render() {
      const selected = this.indeterminate || this.checked;
      const classes = {
        "mdc-checkbox--disabled": this.disabled,
        "mdc-checkbox--selected": selected,
        "mdc-checkbox--touch": !this.reducedTouchTarget,
        "mdc-ripple-upgraded--background-focused": this.focused,
        // transition animiation classes
        "mdc-checkbox--anim-checked-indeterminate": this.animationClass == "checked-indeterminate",
        "mdc-checkbox--anim-checked-unchecked": this.animationClass == "checked-unchecked",
        "mdc-checkbox--anim-indeterminate-checked": this.animationClass == "indeterminate-checked",
        "mdc-checkbox--anim-indeterminate-unchecked": this.animationClass == "indeterminate-unchecked",
        "mdc-checkbox--anim-unchecked-checked": this.animationClass == "unchecked-checked",
        "mdc-checkbox--anim-unchecked-indeterminate": this.animationClass == "unchecked-indeterminate"
      };
      const ariaChecked = this.indeterminate ? "mixed" : void 0;
      return x`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${o10(classes)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${l5(this.name)}"
              aria-checked="${l5(ariaChecked)}"
              aria-label="${l5(this.ariaLabel)}"
              aria-labelledby="${l5(this.ariaLabelledBy)}"
              aria-describedby="${l5(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? "true" : "false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
    }
    setFormData(formData) {
      if (this.name && this.checked) {
        formData.append(this.name, this.value);
      }
    }
    handleFocus() {
      this.focused = true;
      this.handleRippleFocus();
    }
    handleBlur() {
      this.focused = false;
      this.handleRippleBlur();
    }
    handleRippleMouseDown(event) {
      const onUp = () => {
        window.removeEventListener("mouseup", onUp);
        this.handleRippleDeactivate();
      };
      window.addEventListener("mouseup", onUp);
      this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
      this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
      this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
      this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
      this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
      this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
      this.rippleHandlers.endFocus();
    }
    handleChange() {
      this.checked = this.formElement.checked;
      this.indeterminate = this.formElement.indeterminate;
    }
    resetAnimationClass() {
      this.animationClass = "";
    }
    get isRippleActive() {
      var _a3;
      return ((_a3 = this.rippleElement) === null || _a3 === void 0 ? void 0 : _a3.isActive) || false;
    }
  };
  __decorate([
    i4(".mdc-checkbox")
  ], CheckboxBase.prototype, "mdcRoot", void 0);
  __decorate([
    i4("input")
  ], CheckboxBase.prototype, "formElement", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], CheckboxBase.prototype, "checked", void 0);
  __decorate([
    e5({ type: Boolean })
  ], CheckboxBase.prototype, "indeterminate", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], CheckboxBase.prototype, "disabled", void 0);
  __decorate([
    e5({ type: String, reflect: true })
  ], CheckboxBase.prototype, "name", void 0);
  __decorate([
    e5({ type: String })
  ], CheckboxBase.prototype, "value", void 0);
  __decorate([
    ariaProperty,
    e5({ type: String, attribute: "aria-label" })
  ], CheckboxBase.prototype, "ariaLabel", void 0);
  __decorate([
    ariaProperty,
    e5({ type: String, attribute: "aria-labelledby" })
  ], CheckboxBase.prototype, "ariaLabelledBy", void 0);
  __decorate([
    ariaProperty,
    e5({ type: String, attribute: "aria-describedby" })
  ], CheckboxBase.prototype, "ariaDescribedBy", void 0);
  __decorate([
    e5({ type: Boolean })
  ], CheckboxBase.prototype, "reducedTouchTarget", void 0);
  __decorate([
    t3()
  ], CheckboxBase.prototype, "animationClass", void 0);
  __decorate([
    t3()
  ], CheckboxBase.prototype, "shouldRenderRipple", void 0);
  __decorate([
    t3()
  ], CheckboxBase.prototype, "focused", void 0);
  __decorate([
    e7("mwc-ripple")
  ], CheckboxBase.prototype, "ripple", void 0);
  __decorate([
    e6({ passive: true })
  ], CheckboxBase.prototype, "handleRippleTouchStart", null);

  // bundle/node_modules/@material/mwc-checkbox/mwc-checkbox.css.js
  var styles4 = i`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;

  // bundle/node_modules/@material/mwc-checkbox/mwc-checkbox.js
  var Checkbox = class Checkbox2 extends CheckboxBase {
  };
  Checkbox.styles = [styles4];
  Checkbox = __decorate([
    e4("mwc-checkbox")
  ], Checkbox);

  // bundle/node_modules/blocking-elements/dist/blocking-elements.js
  (() => {
    var _a3, _b3, _c;
    const _blockingElements = Symbol();
    const _alreadyInertElements = Symbol();
    const _topElParents = Symbol();
    const _siblingsToRestore = Symbol();
    const _parentMO = Symbol();
    const _topChanged = Symbol();
    const _swapInertedSibling = Symbol();
    const _inertSiblings = Symbol();
    const _restoreInertedSiblings = Symbol();
    const _getParents = Symbol();
    const _getDistributedChildren = Symbol();
    const _isInertable = Symbol();
    const _handleMutations = Symbol();
    class BlockingElementsImpl {
      constructor() {
        this[_a3] = [];
        this[_b3] = [];
        this[_c] = /* @__PURE__ */ new Set();
      }
      destructor() {
        this[_restoreInertedSiblings](this[_topElParents]);
        const nullable = this;
        nullable[_blockingElements] = null;
        nullable[_topElParents] = null;
        nullable[_alreadyInertElements] = null;
      }
      get top() {
        const elems = this[_blockingElements];
        return elems[elems.length - 1] || null;
      }
      push(element) {
        if (!element || element === this.top) {
          return;
        }
        this.remove(element);
        this[_topChanged](element);
        this[_blockingElements].push(element);
      }
      remove(element) {
        const i10 = this[_blockingElements].indexOf(element);
        if (i10 === -1) {
          return false;
        }
        this[_blockingElements].splice(i10, 1);
        if (i10 === this[_blockingElements].length) {
          this[_topChanged](this.top);
        }
        return true;
      }
      pop() {
        const top = this.top;
        top && this.remove(top);
        return top;
      }
      has(element) {
        return this[_blockingElements].indexOf(element) !== -1;
      }
      /**
       * Sets `inert` to all document elements except the new top element, its
       * parents, and its distributed content.
       */
      [(_a3 = _blockingElements, _b3 = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
        const toKeepInert = this[_alreadyInertElements];
        const oldParents = this[_topElParents];
        if (!newTop) {
          this[_restoreInertedSiblings](oldParents);
          toKeepInert.clear();
          this[_topElParents] = [];
          return;
        }
        const newParents = this[_getParents](newTop);
        if (newParents[newParents.length - 1].parentNode !== document.body) {
          throw Error("Non-connected element cannot be a blocking element");
        }
        this[_topElParents] = newParents;
        const toSkip = this[_getDistributedChildren](newTop);
        if (!oldParents.length) {
          this[_inertSiblings](newParents, toSkip, toKeepInert);
          return;
        }
        let i10 = oldParents.length - 1;
        let j3 = newParents.length - 1;
        while (i10 > 0 && j3 > 0 && oldParents[i10] === newParents[j3]) {
          i10--;
          j3--;
        }
        if (oldParents[i10] !== newParents[j3]) {
          this[_swapInertedSibling](oldParents[i10], newParents[j3]);
        }
        i10 > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i10));
        j3 > 0 && this[_inertSiblings](newParents.slice(0, j3), toSkip, null);
      }
      /**
       * Swaps inertness between two sibling elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_swapInertedSibling](oldInert, newInert) {
        const siblingsToRestore = oldInert[_siblingsToRestore];
        if (this[_isInertable](oldInert) && !oldInert.inert) {
          oldInert.inert = true;
          siblingsToRestore.add(oldInert);
        }
        if (siblingsToRestore.has(newInert)) {
          newInert.inert = false;
          siblingsToRestore.delete(newInert);
        }
        newInert[_parentMO] = oldInert[_parentMO];
        newInert[_siblingsToRestore] = siblingsToRestore;
        oldInert[_parentMO] = void 0;
        oldInert[_siblingsToRestore] = void 0;
      }
      /**
       * Restores original inertness to the siblings of the elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_restoreInertedSiblings](elements) {
        for (const element of elements) {
          const mo = element[_parentMO];
          mo.disconnect();
          element[_parentMO] = void 0;
          const siblings = element[_siblingsToRestore];
          for (const sibling of siblings) {
            sibling.inert = false;
          }
          element[_siblingsToRestore] = void 0;
        }
      }
      /**
       * Inerts the siblings of the elements except the elements to skip. Stores
       * the inerted siblings into the element's symbol `_siblingsToRestore`.
       * Pass `toKeepInert` to collect the already inert elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_inertSiblings](elements, toSkip, toKeepInert) {
        for (const element of elements) {
          const parent = element.parentNode;
          const children = parent.children;
          const inertedSiblings = /* @__PURE__ */ new Set();
          for (let j3 = 0; j3 < children.length; j3++) {
            const sibling = children[j3];
            if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
              continue;
            }
            if (toKeepInert && sibling.inert) {
              toKeepInert.add(sibling);
            } else {
              sibling.inert = true;
              inertedSiblings.add(sibling);
            }
          }
          element[_siblingsToRestore] = inertedSiblings;
          const mo = new MutationObserver(this[_handleMutations].bind(this));
          element[_parentMO] = mo;
          let parentToObserve = parent;
          const maybeShadyRoot = parentToObserve;
          if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
            parentToObserve = maybeShadyRoot.host;
          }
          mo.observe(parentToObserve, {
            childList: true
          });
        }
      }
      /**
       * Handles newly added/removed nodes by toggling their inertness.
       * It also checks if the current top Blocking Element has been removed,
       * notifying and removing it.
       */
      [_handleMutations](mutations) {
        const parents = this[_topElParents];
        const toKeepInert = this[_alreadyInertElements];
        for (const mutation of mutations) {
          const target = mutation.target.host || mutation.target;
          const idx = target === document.body ? parents.length : parents.indexOf(target);
          const inertedChild = parents[idx - 1];
          const inertedSiblings = inertedChild[_siblingsToRestore];
          for (let i10 = 0; i10 < mutation.removedNodes.length; i10++) {
            const sibling = mutation.removedNodes[i10];
            if (sibling === inertedChild) {
              console.info("Detected removal of the top Blocking Element.");
              this.pop();
              return;
            }
            if (inertedSiblings.has(sibling)) {
              sibling.inert = false;
              inertedSiblings.delete(sibling);
            }
          }
          for (let i10 = 0; i10 < mutation.addedNodes.length; i10++) {
            const sibling = mutation.addedNodes[i10];
            if (!this[_isInertable](sibling)) {
              continue;
            }
            if (toKeepInert && sibling.inert) {
              toKeepInert.add(sibling);
            } else {
              sibling.inert = true;
              inertedSiblings.add(sibling);
            }
          }
        }
      }
      /**
       * Returns if the element is inertable.
       */
      [_isInertable](element) {
        return false === /^(style|template|script)$/.test(element.localName);
      }
      /**
       * Returns the list of newParents of an element, starting from element
       * (included) up to `document.body` (excluded).
       */
      [_getParents](element) {
        const parents = [];
        let current = element;
        while (current && current !== document.body) {
          if (current.nodeType === Node.ELEMENT_NODE) {
            parents.push(current);
          }
          if (current.assignedSlot) {
            while (current = current.assignedSlot) {
              parents.push(current);
            }
            current = parents.pop();
            continue;
          }
          current = current.parentNode || current.host;
        }
        return parents;
      }
      /**
       * Returns the distributed children of the element's shadow root.
       * Returns null if the element doesn't have a shadow root.
       */
      [_getDistributedChildren](element) {
        const shadowRoot = element.shadowRoot;
        if (!shadowRoot) {
          return null;
        }
        const result = /* @__PURE__ */ new Set();
        let i10;
        let j3;
        let nodes;
        const slots = shadowRoot.querySelectorAll("slot");
        if (slots.length && slots[0].assignedNodes) {
          for (i10 = 0; i10 < slots.length; i10++) {
            nodes = slots[i10].assignedNodes({
              flatten: true
            });
            for (j3 = 0; j3 < nodes.length; j3++) {
              if (nodes[j3].nodeType === Node.ELEMENT_NODE) {
                result.add(nodes[j3]);
              }
            }
          }
        }
        return result;
      }
    }
    document.$blockingElements = new BlockingElementsImpl();
  })();

  // bundle/node_modules/wicg-inert/dist/inert.esm.js
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i10 = 0; i10 < props.length; i10++) {
        var descriptor = props[i10];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  (function() {
    if (typeof window === "undefined") {
      return;
    }
    var slice = Array.prototype.slice;
    var matches2 = Element.prototype.matches || Element.prototype.msMatchesSelector;
    var _focusableElementsString = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "[contenteditable]"].join(",");
    var InertRoot = function() {
      function InertRoot2(rootElement, inertManager2) {
        _classCallCheck(this, InertRoot2);
        this._inertManager = inertManager2;
        this._rootElement = rootElement;
        this._managedNodes = /* @__PURE__ */ new Set();
        if (this._rootElement.hasAttribute("aria-hidden")) {
          this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden");
        } else {
          this._savedAriaHidden = null;
        }
        this._rootElement.setAttribute("aria-hidden", "true");
        this._makeSubtreeUnfocusable(this._rootElement);
        this._observer = new MutationObserver(this._onMutation.bind(this));
        this._observer.observe(this._rootElement, { attributes: true, childList: true, subtree: true });
      }
      _createClass(InertRoot2, [{
        key: "destructor",
        value: function destructor() {
          this._observer.disconnect();
          if (this._rootElement) {
            if (this._savedAriaHidden !== null) {
              this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden);
            } else {
              this._rootElement.removeAttribute("aria-hidden");
            }
          }
          this._managedNodes.forEach(function(inertNode) {
            this._unmanageNode(inertNode.node);
          }, this);
          this._observer = /** @type {?} */
          null;
          this._rootElement = /** @type {?} */
          null;
          this._managedNodes = /** @type {?} */
          null;
          this._inertManager = /** @type {?} */
          null;
        }
        /**
         * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
         */
      }, {
        key: "_makeSubtreeUnfocusable",
        /**
         * @param {!Node} startNode
         */
        value: function _makeSubtreeUnfocusable(startNode) {
          var _this2 = this;
          composedTreeWalk(startNode, function(node2) {
            return _this2._visitNode(node2);
          });
          var activeElement = document.activeElement;
          if (!document.body.contains(startNode)) {
            var node = startNode;
            var root = void 0;
            while (node) {
              if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                root = /** @type {!ShadowRoot} */
                node;
                break;
              }
              node = node.parentNode;
            }
            if (root) {
              activeElement = root.activeElement;
            }
          }
          if (startNode.contains(activeElement)) {
            activeElement.blur();
            if (activeElement === document.activeElement) {
              document.body.focus();
            }
          }
        }
        /**
         * @param {!Node} node
         */
      }, {
        key: "_visitNode",
        value: function _visitNode(node) {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = (
            /** @type {!HTMLElement} */
            node
          );
          if (element !== this._rootElement && element.hasAttribute("inert")) {
            this._adoptInertRoot(element);
          }
          if (matches2.call(element, _focusableElementsString) || element.hasAttribute("tabindex")) {
            this._manageNode(element);
          }
        }
        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_manageNode",
        value: function _manageNode(node) {
          var inertNode = this._inertManager.register(node, this);
          this._managedNodes.add(inertNode);
        }
        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_unmanageNode",
        value: function _unmanageNode(node) {
          var inertNode = this._inertManager.deregister(node, this);
          if (inertNode) {
            this._managedNodes["delete"](inertNode);
          }
        }
        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */
      }, {
        key: "_unmanageSubtree",
        value: function _unmanageSubtree(startNode) {
          var _this3 = this;
          composedTreeWalk(startNode, function(node) {
            return _this3._unmanageNode(node);
          });
        }
        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */
      }, {
        key: "_adoptInertRoot",
        value: function _adoptInertRoot(node) {
          var inertSubroot = this._inertManager.getInertRoot(node);
          if (!inertSubroot) {
            this._inertManager.setInert(node, true);
            inertSubroot = this._inertManager.getInertRoot(node);
          }
          inertSubroot.managedNodes.forEach(function(savedInertNode) {
            this._manageNode(savedInertNode.node);
          }, this);
        }
        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_onMutation",
        value: function _onMutation(records, self) {
          records.forEach(function(record) {
            var target = (
              /** @type {!HTMLElement} */
              record.target
            );
            if (record.type === "childList") {
              slice.call(record.addedNodes).forEach(function(node) {
                this._makeSubtreeUnfocusable(node);
              }, this);
              slice.call(record.removedNodes).forEach(function(node) {
                this._unmanageSubtree(node);
              }, this);
            } else if (record.type === "attributes") {
              if (record.attributeName === "tabindex") {
                this._manageNode(target);
              } else if (target !== this._rootElement && record.attributeName === "inert" && target.hasAttribute("inert")) {
                this._adoptInertRoot(target);
                var inertSubroot = this._inertManager.getInertRoot(target);
                this._managedNodes.forEach(function(managedNode) {
                  if (target.contains(managedNode.node)) {
                    inertSubroot._manageNode(managedNode.node);
                  }
                });
              }
            }
          }, this);
        }
      }, {
        key: "managedNodes",
        get: function get() {
          return new Set(this._managedNodes);
        }
        /** @return {boolean} */
      }, {
        key: "hasSavedAriaHidden",
        get: function get() {
          return this._savedAriaHidden !== null;
        }
        /** @param {?string} ariaHidden */
      }, {
        key: "savedAriaHidden",
        set: function set(ariaHidden) {
          this._savedAriaHidden = ariaHidden;
        },
        get: function get() {
          return this._savedAriaHidden;
        }
      }]);
      return InertRoot2;
    }();
    var InertNode = function() {
      function InertNode2(node, inertRoot) {
        _classCallCheck(this, InertNode2);
        this._node = node;
        this._overrodeFocusMethod = false;
        this._inertRoots = /* @__PURE__ */ new Set([inertRoot]);
        this._savedTabIndex = null;
        this._destroyed = false;
        this.ensureUntabbable();
      }
      _createClass(InertNode2, [{
        key: "destructor",
        value: function destructor() {
          this._throwIfDestroyed();
          if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var element = (
              /** @type {!HTMLElement} */
              this._node
            );
            if (this._savedTabIndex !== null) {
              element.setAttribute("tabindex", this._savedTabIndex);
            } else {
              element.removeAttribute("tabindex");
            }
            if (this._overrodeFocusMethod) {
              delete element.focus;
            }
          }
          this._node = /** @type {?} */
          null;
          this._inertRoots = /** @type {?} */
          null;
          this._destroyed = true;
        }
        /**
         * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
         * If the object has been destroyed, any attempt to access it will cause an exception.
         */
      }, {
        key: "_throwIfDestroyed",
        /**
         * Throw if user tries to access destroyed InertNode.
         */
        value: function _throwIfDestroyed() {
          if (this.destroyed) {
            throw new Error("Trying to access destroyed InertNode");
          }
        }
        /** @return {boolean} */
      }, {
        key: "ensureUntabbable",
        /** Save the existing tabindex value and make the node untabbable and unfocusable */
        value: function ensureUntabbable() {
          if (this.node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          var element = (
            /** @type {!HTMLElement} */
            this.node
          );
          if (matches2.call(element, _focusableElementsString)) {
            if (
              /** @type {!HTMLElement} */
              element.tabIndex === -1 && this.hasSavedTabIndex
            ) {
              return;
            }
            if (element.hasAttribute("tabindex")) {
              this._savedTabIndex = /** @type {!HTMLElement} */
              element.tabIndex;
            }
            element.setAttribute("tabindex", "-1");
            if (element.nodeType === Node.ELEMENT_NODE) {
              element.focus = function() {
              };
              this._overrodeFocusMethod = true;
            }
          } else if (element.hasAttribute("tabindex")) {
            this._savedTabIndex = /** @type {!HTMLElement} */
            element.tabIndex;
            element.removeAttribute("tabindex");
          }
        }
        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "addInertRoot",
        value: function addInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots.add(inertRoot);
        }
        /**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "removeInertRoot",
        value: function removeInertRoot(inertRoot) {
          this._throwIfDestroyed();
          this._inertRoots["delete"](inertRoot);
          if (this._inertRoots.size === 0) {
            this.destructor();
          }
        }
      }, {
        key: "destroyed",
        get: function get() {
          return (
            /** @type {!InertNode} */
            this._destroyed
          );
        }
      }, {
        key: "hasSavedTabIndex",
        get: function get() {
          return this._savedTabIndex !== null;
        }
        /** @return {!Node} */
      }, {
        key: "node",
        get: function get() {
          this._throwIfDestroyed();
          return this._node;
        }
        /** @param {?number} tabIndex */
      }, {
        key: "savedTabIndex",
        set: function set(tabIndex) {
          this._throwIfDestroyed();
          this._savedTabIndex = tabIndex;
        },
        get: function get() {
          this._throwIfDestroyed();
          return this._savedTabIndex;
        }
      }]);
      return InertNode2;
    }();
    var InertManager = function() {
      function InertManager2(document2) {
        _classCallCheck(this, InertManager2);
        if (!document2) {
          throw new Error("Missing required argument; InertManager needs to wrap a document.");
        }
        this._document = document2;
        this._managedNodes = /* @__PURE__ */ new Map();
        this._inertRoots = /* @__PURE__ */ new Map();
        this._observer = new MutationObserver(this._watchForInert.bind(this));
        addInertStyle(document2.head || document2.body || document2.documentElement);
        if (document2.readyState === "loading") {
          document2.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this));
        } else {
          this._onDocumentLoaded();
        }
      }
      _createClass(InertManager2, [{
        key: "setInert",
        value: function setInert(root, inert) {
          if (inert) {
            if (this._inertRoots.has(root)) {
              return;
            }
            var inertRoot = new InertRoot(root, this);
            root.setAttribute("inert", "");
            this._inertRoots.set(root, inertRoot);
            if (!this._document.body.contains(root)) {
              var parent = root.parentNode;
              while (parent) {
                if (parent.nodeType === 11) {
                  addInertStyle(parent);
                }
                parent = parent.parentNode;
              }
            }
          } else {
            if (!this._inertRoots.has(root)) {
              return;
            }
            var _inertRoot = this._inertRoots.get(root);
            _inertRoot.destructor();
            this._inertRoots["delete"](root);
            root.removeAttribute("inert");
          }
        }
        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */
      }, {
        key: "getInertRoot",
        value: function getInertRoot(element) {
          return this._inertRoots.get(element);
        }
        /**
         * Register the given InertRoot as managing the given node.
         * In the case where the node has a previously existing inert root, this inert root will
         * be added to its set of inert roots.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {!InertNode} inertNode
         */
      }, {
        key: "register",
        value: function register(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (inertNode !== void 0) {
            inertNode.addInertRoot(inertRoot);
          } else {
            inertNode = new InertNode(node, inertRoot);
          }
          this._managedNodes.set(node, inertNode);
          return inertNode;
        }
        /**
         * De-register the given InertRoot as managing the given inert node.
         * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
         * node from the InertManager's set of managed nodes if it is destroyed.
         * If the node is not currently managed, this is essentially a no-op.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
         */
      }, {
        key: "deregister",
        value: function deregister(node, inertRoot) {
          var inertNode = this._managedNodes.get(node);
          if (!inertNode) {
            return null;
          }
          inertNode.removeInertRoot(inertRoot);
          if (inertNode.destroyed) {
            this._managedNodes["delete"](node);
          }
          return inertNode;
        }
        /**
         * Callback used when document has finished loading.
         */
      }, {
        key: "_onDocumentLoaded",
        value: function _onDocumentLoaded() {
          var inertElements = slice.call(this._document.querySelectorAll("[inert]"));
          inertElements.forEach(function(inertElement) {
            this.setInert(inertElement, true);
          }, this);
          this._observer.observe(this._document.body || this._document.documentElement, { attributes: true, subtree: true, childList: true });
        }
        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_watchForInert",
        value: function _watchForInert(records, self) {
          var _this = this;
          records.forEach(function(record) {
            switch (record.type) {
              case "childList":
                slice.call(record.addedNodes).forEach(function(node) {
                  if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                  }
                  var inertElements = slice.call(node.querySelectorAll("[inert]"));
                  if (matches2.call(node, "[inert]")) {
                    inertElements.unshift(node);
                  }
                  inertElements.forEach(function(inertElement) {
                    this.setInert(inertElement, true);
                  }, _this);
                }, _this);
                break;
              case "attributes":
                if (record.attributeName !== "inert") {
                  return;
                }
                var target = (
                  /** @type {!HTMLElement} */
                  record.target
                );
                var inert = target.hasAttribute("inert");
                _this.setInert(target, inert);
                break;
            }
          }, this);
        }
      }]);
      return InertManager2;
    }();
    function composedTreeWalk(node, callback, shadowRootAncestor) {
      if (node.nodeType == Node.ELEMENT_NODE) {
        var element = (
          /** @type {!HTMLElement} */
          node
        );
        if (callback) {
          callback(element);
        }
        var shadowRoot = (
          /** @type {!HTMLElement} */
          element.shadowRoot
        );
        if (shadowRoot) {
          composedTreeWalk(shadowRoot, callback, shadowRoot);
          return;
        }
        if (element.localName == "content") {
          var content = (
            /** @type {!HTMLContentElement} */
            element
          );
          var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
          for (var i10 = 0; i10 < distributedNodes.length; i10++) {
            composedTreeWalk(distributedNodes[i10], callback, shadowRootAncestor);
          }
          return;
        }
        if (element.localName == "slot") {
          var slot = (
            /** @type {!HTMLSlotElement} */
            element
          );
          var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({ flatten: true }) : [];
          for (var _i = 0; _i < _distributedNodes.length; _i++) {
            composedTreeWalk(_distributedNodes[_i], callback, shadowRootAncestor);
          }
          return;
        }
      }
      var child = node.firstChild;
      while (child != null) {
        composedTreeWalk(child, callback, shadowRootAncestor);
        child = child.nextSibling;
      }
    }
    function addInertStyle(node) {
      if (node.querySelector("style#inert-style, link#inert-style")) {
        return;
      }
      var style = document.createElement("style");
      style.setAttribute("id", "inert-style");
      style.textContent = "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n";
      node.appendChild(style);
    }
    if (!HTMLElement.prototype.hasOwnProperty("inert")) {
      var inertManager = new InertManager(document);
      Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: true,
        /** @this {!HTMLElement} */
        get: function get() {
          return this.hasAttribute("inert");
        },
        /** @this {!HTMLElement} */
        set: function set(inert) {
          inertManager.setInert(this, inert);
        }
      });
    }
  })();

  // bundle/node_modules/@material/drawer/constants.js
  var cssClasses2 = {
    ANIMATE: "mdc-drawer--animate",
    CLOSING: "mdc-drawer--closing",
    DISMISSIBLE: "mdc-drawer--dismissible",
    MODAL: "mdc-drawer--modal",
    OPEN: "mdc-drawer--open",
    OPENING: "mdc-drawer--opening",
    ROOT: "mdc-drawer"
  };
  var strings2 = {
    APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
    CLOSE_EVENT: "MDCDrawer:closed",
    OPEN_EVENT: "MDCDrawer:opened",
    SCRIM_SELECTOR: ".mdc-drawer-scrim",
    LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
    LIST_ITEM_ACTIVATED_SELECTOR: ".mdc-list-item--activated,.mdc-deprecated-list-item--activated"
  };

  // bundle/node_modules/@material/drawer/dismissible/foundation.js
  var MDCDismissibleDrawerFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCDismissibleDrawerFoundation2, _super);
      function MDCDismissibleDrawerFoundation2(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCDismissibleDrawerFoundation2.defaultAdapter), adapter)) || this;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        return _this;
      }
      Object.defineProperty(MDCDismissibleDrawerFoundation2, "strings", {
        get: function() {
          return strings2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCDismissibleDrawerFoundation2, "cssClasses", {
        get: function() {
          return cssClasses2;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCDismissibleDrawerFoundation2, "defaultAdapter", {
        get: function() {
          return {
            addClass: function() {
              return void 0;
            },
            removeClass: function() {
              return void 0;
            },
            hasClass: function() {
              return false;
            },
            elementHasClass: function() {
              return false;
            },
            notifyClose: function() {
              return void 0;
            },
            notifyOpen: function() {
              return void 0;
            },
            saveFocus: function() {
              return void 0;
            },
            restoreFocus: function() {
              return void 0;
            },
            focusActiveNavigationItem: function() {
              return void 0;
            },
            trapFocus: function() {
              return void 0;
            },
            releaseFocus: function() {
              return void 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCDismissibleDrawerFoundation2.prototype.destroy = function() {
        if (this.animationFrame) {
          cancelAnimationFrame(this.animationFrame);
        }
        if (this.animationTimer) {
          clearTimeout(this.animationTimer);
        }
      };
      MDCDismissibleDrawerFoundation2.prototype.open = function() {
        var _this = this;
        if (this.isOpen() || this.isOpening() || this.isClosing()) {
          return;
        }
        this.adapter.addClass(cssClasses2.OPEN);
        this.adapter.addClass(cssClasses2.ANIMATE);
        this.runNextAnimationFrame(function() {
          _this.adapter.addClass(cssClasses2.OPENING);
        });
        this.adapter.saveFocus();
      };
      MDCDismissibleDrawerFoundation2.prototype.close = function() {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) {
          return;
        }
        this.adapter.addClass(cssClasses2.CLOSING);
      };
      MDCDismissibleDrawerFoundation2.prototype.isOpen = function() {
        return this.adapter.hasClass(cssClasses2.OPEN);
      };
      MDCDismissibleDrawerFoundation2.prototype.isOpening = function() {
        return this.adapter.hasClass(cssClasses2.OPENING) || this.adapter.hasClass(cssClasses2.ANIMATE);
      };
      MDCDismissibleDrawerFoundation2.prototype.isClosing = function() {
        return this.adapter.hasClass(cssClasses2.CLOSING);
      };
      MDCDismissibleDrawerFoundation2.prototype.handleKeydown = function(evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === "Escape" || keyCode === 27;
        if (isEscape) {
          this.close();
        }
      };
      MDCDismissibleDrawerFoundation2.prototype.handleTransitionEnd = function(evt) {
        var OPENING = cssClasses2.OPENING, CLOSING = cssClasses2.CLOSING, OPEN = cssClasses2.OPEN, ANIMATE = cssClasses2.ANIMATE, ROOT = cssClasses2.ROOT;
        var isRootElement = this.isElement(evt.target) && this.adapter.elementHasClass(evt.target, ROOT);
        if (!isRootElement) {
          return;
        }
        if (this.isClosing()) {
          this.adapter.removeClass(OPEN);
          this.closed();
          this.adapter.restoreFocus();
          this.adapter.notifyClose();
        } else {
          this.adapter.focusActiveNavigationItem();
          this.opened();
          this.adapter.notifyOpen();
        }
        this.adapter.removeClass(ANIMATE);
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(CLOSING);
      };
      MDCDismissibleDrawerFoundation2.prototype.opened = function() {
      };
      MDCDismissibleDrawerFoundation2.prototype.closed = function() {
      };
      MDCDismissibleDrawerFoundation2.prototype.runNextAnimationFrame = function(callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function() {
          _this.animationFrame = 0;
          clearTimeout(_this.animationTimer);
          _this.animationTimer = setTimeout(callback, 0);
        });
      };
      MDCDismissibleDrawerFoundation2.prototype.isElement = function(element) {
        return Boolean(element.classList);
      };
      return MDCDismissibleDrawerFoundation2;
    }(MDCFoundation)
  );
  var foundation_default2 = MDCDismissibleDrawerFoundation;

  // bundle/node_modules/@material/drawer/modal/foundation.js
  var MDCModalDrawerFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCModalDrawerFoundation2, _super);
      function MDCModalDrawerFoundation2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      MDCModalDrawerFoundation2.prototype.handleScrimClick = function() {
        this.close();
      };
      MDCModalDrawerFoundation2.prototype.opened = function() {
        this.adapter.trapFocus();
      };
      MDCModalDrawerFoundation2.prototype.closed = function() {
        this.adapter.releaseFocus();
      };
      return MDCModalDrawerFoundation2;
    }(MDCDismissibleDrawerFoundation)
  );
  var foundation_default3 = MDCModalDrawerFoundation;

  // bundle/node_modules/@material/mwc-base/observer.js
  var observer = (observer2) => (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (proto, propName) => {
      if (!proto.constructor._observers) {
        proto.constructor._observers = /* @__PURE__ */ new Map();
        const userUpdated = proto.updated;
        proto.updated = function(changedProperties) {
          userUpdated.call(this, changedProperties);
          changedProperties.forEach((v3, k3) => {
            const observers = this.constructor._observers;
            const observer3 = observers.get(k3);
            if (observer3 !== void 0) {
              observer3.call(this, this[k3], v3);
            }
          });
        };
      } else if (!proto.constructor.hasOwnProperty("_observers")) {
        const observers = proto.constructor._observers;
        proto.constructor._observers = /* @__PURE__ */ new Map();
        observers.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (v3, k3) => proto.constructor._observers.set(k3, v3)
        );
      }
      proto.constructor._observers.set(propName, observer2);
    }
  );

  // bundle/node_modules/@material/mwc-drawer/mwc-drawer-base.js
  var blockingElements = document.$blockingElements;
  var DrawerBase = class extends BaseElement {
    constructor() {
      super(...arguments);
      this._previousFocus = null;
      this.open = false;
      this.hasHeader = false;
      this.type = "";
    }
    get mdcFoundationClass() {
      return this.type === "modal" ? foundation_default3 : foundation_default2;
    }
    createAdapter() {
      return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { elementHasClass: (element, className) => element.classList.contains(className), saveFocus: () => {
        this._previousFocus = this.getRootNode().activeElement;
      }, restoreFocus: () => {
        const previousFocus = this._previousFocus && this._previousFocus.focus;
        if (previousFocus) {
          this._previousFocus.focus();
        }
      }, notifyClose: () => {
        this.open = false;
        this.dispatchEvent(new Event(strings2.CLOSE_EVENT, { bubbles: true, cancelable: true }));
      }, notifyOpen: () => {
        this.open = true;
        this.dispatchEvent(new Event(strings2.OPEN_EVENT, { bubbles: true, cancelable: true }));
      }, focusActiveNavigationItem: () => {
      }, trapFocus: () => {
        blockingElements.push(this);
        this.appContent.inert = true;
      }, releaseFocus: () => {
        blockingElements.remove(this);
        this.appContent.inert = false;
      } });
    }
    _handleScrimClick() {
      if (this.mdcFoundation instanceof foundation_default3) {
        this.mdcFoundation.handleScrimClick();
      }
    }
    render() {
      const dismissible = this.type === "dismissible" || this.type === "modal";
      const modal = this.type === "modal";
      const header = this.hasHeader ? x`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      ` : "";
      const classes = {
        "mdc-drawer--dismissible": dismissible,
        "mdc-drawer--modal": modal
      };
      return x`
      <aside class="mdc-drawer ${o10(classes)}">
        ${header}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${modal ? x`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>` : ""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `;
    }
    // note, we avoid calling `super.firstUpdated()` to control when
    // `createFoundation()` is called.
    firstUpdated() {
      this.mdcRoot.addEventListener("keydown", (e12) => this.mdcFoundation.handleKeydown(e12));
      this.mdcRoot.addEventListener("transitionend", (e12) => this.mdcFoundation.handleTransitionEnd(e12));
    }
    updated(changedProperties) {
      if (changedProperties.has("type")) {
        this.createFoundation();
      }
    }
  };
  __decorate([
    i4(".mdc-drawer")
  ], DrawerBase.prototype, "mdcRoot", void 0);
  __decorate([
    i4(".mdc-drawer-app-content")
  ], DrawerBase.prototype, "appContent", void 0);
  __decorate([
    observer(function(value) {
      if (this.type === "") {
        return;
      }
      if (value) {
        this.mdcFoundation.open();
      } else {
        this.mdcFoundation.close();
      }
    }),
    e5({ type: Boolean, reflect: true })
  ], DrawerBase.prototype, "open", void 0);
  __decorate([
    e5({ type: Boolean })
  ], DrawerBase.prototype, "hasHeader", void 0);
  __decorate([
    e5({ reflect: true })
  ], DrawerBase.prototype, "type", void 0);

  // bundle/node_modules/@material/mwc-drawer/mwc-drawer.css.js
  var styles5 = i`.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:rgba(98, 0, 238, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;

  // bundle/node_modules/@material/mwc-drawer/mwc-drawer.js
  var Drawer = class Drawer2 extends DrawerBase {
  };
  Drawer.styles = [styles5];
  Drawer = __decorate([
    e4("mwc-drawer")
  ], Drawer);

  // bundle/node_modules/@material/form-field/constants.js
  var cssClasses3 = {
    ROOT: "mdc-form-field"
  };
  var strings3 = {
    LABEL_SELECTOR: ".mdc-form-field > label"
  };

  // bundle/node_modules/@material/form-field/foundation.js
  var MDCFormFieldFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCFormFieldFoundation2, _super);
      function MDCFormFieldFoundation2(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCFormFieldFoundation2.defaultAdapter), adapter)) || this;
        _this.click = function() {
          _this.handleClick();
        };
        return _this;
      }
      Object.defineProperty(MDCFormFieldFoundation2, "cssClasses", {
        get: function() {
          return cssClasses3;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCFormFieldFoundation2, "strings", {
        get: function() {
          return strings3;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCFormFieldFoundation2, "defaultAdapter", {
        get: function() {
          return {
            activateInputRipple: function() {
              return void 0;
            },
            deactivateInputRipple: function() {
              return void 0;
            },
            deregisterInteractionHandler: function() {
              return void 0;
            },
            registerInteractionHandler: function() {
              return void 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCFormFieldFoundation2.prototype.init = function() {
        this.adapter.registerInteractionHandler("click", this.click);
      };
      MDCFormFieldFoundation2.prototype.destroy = function() {
        this.adapter.deregisterInteractionHandler("click", this.click);
      };
      MDCFormFieldFoundation2.prototype.handleClick = function() {
        var _this = this;
        this.adapter.activateInputRipple();
        requestAnimationFrame(function() {
          _this.adapter.deactivateInputRipple();
        });
      };
      return MDCFormFieldFoundation2;
    }(MDCFoundation)
  );
  var foundation_default4 = MDCFormFieldFoundation;

  // bundle/node_modules/@material/mwc-formfield/mwc-formfield-base.js
  var FormfieldBase = class extends BaseElement {
    constructor() {
      super(...arguments);
      this.alignEnd = false;
      this.spaceBetween = false;
      this.nowrap = false;
      this.label = "";
      this.mdcFoundationClass = foundation_default4;
    }
    createAdapter() {
      return {
        registerInteractionHandler: (type, handler) => {
          this.labelEl.addEventListener(type, handler);
        },
        deregisterInteractionHandler: (type, handler) => {
          this.labelEl.removeEventListener(type, handler);
        },
        activateInputRipple: async () => {
          const input = this.input;
          if (input instanceof FormElement) {
            const ripple = await input.ripple;
            if (ripple) {
              ripple.startPress();
            }
          }
        },
        deactivateInputRipple: async () => {
          const input = this.input;
          if (input instanceof FormElement) {
            const ripple = await input.ripple;
            if (ripple) {
              ripple.endPress();
            }
          }
        }
      };
    }
    get input() {
      var _a3, _b3;
      return (_b3 = (_a3 = this.slottedInputs) === null || _a3 === void 0 ? void 0 : _a3[0]) !== null && _b3 !== void 0 ? _b3 : null;
    }
    render() {
      const classes = {
        "mdc-form-field--align-end": this.alignEnd,
        "mdc-form-field--space-between": this.spaceBetween,
        "mdc-form-field--nowrap": this.nowrap
      };
      return x`
      <div class="mdc-form-field ${o10(classes)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`;
    }
    click() {
      this._labelClick();
    }
    _labelClick() {
      const input = this.input;
      if (input) {
        input.focus();
        input.click();
      }
    }
  };
  __decorate([
    e5({ type: Boolean })
  ], FormfieldBase.prototype, "alignEnd", void 0);
  __decorate([
    e5({ type: Boolean })
  ], FormfieldBase.prototype, "spaceBetween", void 0);
  __decorate([
    e5({ type: Boolean })
  ], FormfieldBase.prototype, "nowrap", void 0);
  __decorate([
    e5({ type: String }),
    observer(async function(label) {
      var _a3;
      (_a3 = this.input) === null || _a3 === void 0 ? void 0 : _a3.setAttribute("aria-label", label);
    })
  ], FormfieldBase.prototype, "label", void 0);
  __decorate([
    i4(".mdc-form-field")
  ], FormfieldBase.prototype, "mdcRoot", void 0);
  __decorate([
    o6("", true, "*")
  ], FormfieldBase.prototype, "slottedInputs", void 0);
  __decorate([
    i4("label")
  ], FormfieldBase.prototype, "labelEl", void 0);

  // bundle/node_modules/@material/mwc-formfield/mwc-formfield.css.js
  var styles6 = i`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;

  // bundle/node_modules/@material/mwc-formfield/mwc-formfield.js
  var Formfield = class Formfield2 extends FormfieldBase {
  };
  Formfield.styles = [styles6];
  Formfield = __decorate([
    e4("mwc-formfield")
  ], Formfield);

  // bundle/node_modules/@material/mwc-icon-button/mwc-icon-button-base.js
  var IconButtonBase = class extends s4 {
    constructor() {
      super(...arguments);
      this.disabled = false;
      this.icon = "";
      this.shouldRenderRipple = false;
      this.rippleHandlers = new RippleHandlers(() => {
        this.shouldRenderRipple = true;
        return this.ripple;
      });
    }
    /** @soyTemplate */
    renderRipple() {
      return this.shouldRenderRipple ? x`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` : "";
    }
    focus() {
      const buttonElement = this.buttonElement;
      if (buttonElement) {
        this.rippleHandlers.startFocus();
        buttonElement.focus();
      }
    }
    blur() {
      const buttonElement = this.buttonElement;
      if (buttonElement) {
        this.rippleHandlers.endFocus();
        buttonElement.blur();
      }
    }
    /** @soyTemplate */
    render() {
      return x`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel || this.icon}"
        aria-haspopup="${l5(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon ? x`<i class="material-icons">${this.icon}</i>` : ""}
    <span
      ><slot></slot
    ></span>
  </button>`;
    }
    handleRippleMouseDown(event) {
      const onUp = () => {
        window.removeEventListener("mouseup", onUp);
        this.handleRippleDeactivate();
      };
      window.addEventListener("mouseup", onUp);
      this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
      this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
      this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
      this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
      this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
      this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
      this.rippleHandlers.endFocus();
    }
  };
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], IconButtonBase.prototype, "disabled", void 0);
  __decorate([
    e5({ type: String })
  ], IconButtonBase.prototype, "icon", void 0);
  __decorate([
    ariaProperty,
    e5({ type: String, attribute: "aria-label" })
  ], IconButtonBase.prototype, "ariaLabel", void 0);
  __decorate([
    ariaProperty,
    e5({ type: String, attribute: "aria-haspopup" })
  ], IconButtonBase.prototype, "ariaHasPopup", void 0);
  __decorate([
    i4("button")
  ], IconButtonBase.prototype, "buttonElement", void 0);
  __decorate([
    e7("mwc-ripple")
  ], IconButtonBase.prototype, "ripple", void 0);
  __decorate([
    t3()
  ], IconButtonBase.prototype, "shouldRenderRipple", void 0);
  __decorate([
    e6({ passive: true })
  ], IconButtonBase.prototype, "handleRippleMouseDown", null);
  __decorate([
    e6({ passive: true })
  ], IconButtonBase.prototype, "handleRippleTouchStart", null);

  // bundle/node_modules/@material/mwc-icon-button/mwc-icon-button.css.js
  var styles7 = i`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;

  // bundle/node_modules/@material/mwc-icon-button/mwc-icon-button.js
  var IconButton = class IconButton2 extends IconButtonBase {
  };
  IconButton.styles = [styles7];
  IconButton = __decorate([
    e4("mwc-icon-button")
  ], IconButton);

  // bundle/node_modules/@material/mwc-list/mwc-list-item-base.js
  var ListItemBase = class extends s4 {
    constructor() {
      super(...arguments);
      this.value = "";
      this.group = null;
      this.tabindex = -1;
      this.disabled = false;
      this.twoline = false;
      this.activated = false;
      this.graphic = null;
      this.multipleGraphics = false;
      this.hasMeta = false;
      this.noninteractive = false;
      this.selected = false;
      this.shouldRenderRipple = false;
      this._managingList = null;
      this.boundOnClick = this.onClick.bind(this);
      this._firstChanged = true;
      this._skipPropRequest = false;
      this.rippleHandlers = new RippleHandlers(() => {
        this.shouldRenderRipple = true;
        return this.ripple;
      });
      this.listeners = [
        {
          target: this,
          eventNames: ["click"],
          cb: () => {
            this.onClick();
          }
        },
        {
          target: this,
          eventNames: ["mouseenter"],
          cb: this.rippleHandlers.startHover
        },
        {
          target: this,
          eventNames: ["mouseleave"],
          cb: this.rippleHandlers.endHover
        },
        {
          target: this,
          eventNames: ["focus"],
          cb: this.rippleHandlers.startFocus
        },
        {
          target: this,
          eventNames: ["blur"],
          cb: this.rippleHandlers.endFocus
        },
        {
          target: this,
          eventNames: ["mousedown", "touchstart"],
          cb: (e12) => {
            const name = e12.type;
            this.onDown(name === "mousedown" ? "mouseup" : "touchend", e12);
          }
        }
      ];
    }
    get text() {
      const textContent = this.textContent;
      return textContent ? textContent.trim() : "";
    }
    render() {
      const text = this.renderText();
      const graphic = this.graphic ? this.renderGraphic() : x``;
      const meta = this.hasMeta ? this.renderMeta() : x``;
      return x`
      ${this.renderRipple()}
      ${graphic}
      ${text}
      ${meta}`;
    }
    renderRipple() {
      if (this.shouldRenderRipple) {
        return x`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`;
      } else if (this.activated) {
        return x`<div class="fake-activated-ripple"></div>`;
      } else {
        return "";
      }
    }
    renderGraphic() {
      const graphicClasses = {
        multi: this.multipleGraphics
      };
      return x`
      <span class="mdc-deprecated-list-item__graphic material-icons ${o10(graphicClasses)}">
        <slot name="graphic"></slot>
      </span>`;
    }
    renderMeta() {
      return x`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
    }
    renderText() {
      const inner = this.twoline ? this.renderTwoline() : this.renderSingleLine();
      return x`
      <span class="mdc-deprecated-list-item__text">
        ${inner}
      </span>`;
    }
    renderSingleLine() {
      return x`<slot></slot>`;
    }
    renderTwoline() {
      return x`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
    }
    onClick() {
      this.fireRequestSelected(!this.selected, "interaction");
    }
    onDown(upName, evt) {
      const onUp = () => {
        window.removeEventListener(upName, onUp);
        this.rippleHandlers.endPress();
      };
      window.addEventListener(upName, onUp);
      this.rippleHandlers.startPress(evt);
    }
    fireRequestSelected(selected, source) {
      if (this.noninteractive) {
        return;
      }
      const customEv = new CustomEvent("request-selected", { bubbles: true, composed: true, detail: { source, selected } });
      this.dispatchEvent(customEv);
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.noninteractive) {
        this.setAttribute("mwc-list-item", "");
      }
      for (const listener of this.listeners) {
        for (const eventName of listener.eventNames) {
          listener.target.addEventListener(eventName, listener.cb, { passive: true });
        }
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      for (const listener of this.listeners) {
        for (const eventName of listener.eventNames) {
          listener.target.removeEventListener(eventName, listener.cb);
        }
      }
      if (this._managingList) {
        this._managingList.debouncedLayout ? this._managingList.debouncedLayout(true) : this._managingList.layout(true);
      }
    }
    // composed flag, event fire through shadow root and up through composed tree
    firstUpdated() {
      const ev = new Event("list-item-rendered", { bubbles: true, composed: true });
      this.dispatchEvent(ev);
    }
  };
  __decorate([
    i4("slot")
  ], ListItemBase.prototype, "slotElement", void 0);
  __decorate([
    e7("mwc-ripple")
  ], ListItemBase.prototype, "ripple", void 0);
  __decorate([
    e5({ type: String })
  ], ListItemBase.prototype, "value", void 0);
  __decorate([
    e5({ type: String, reflect: true })
  ], ListItemBase.prototype, "group", void 0);
  __decorate([
    e5({ type: Number, reflect: true })
  ], ListItemBase.prototype, "tabindex", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true }),
    observer(function(value) {
      if (value) {
        this.setAttribute("aria-disabled", "true");
      } else {
        this.setAttribute("aria-disabled", "false");
      }
    })
  ], ListItemBase.prototype, "disabled", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], ListItemBase.prototype, "twoline", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], ListItemBase.prototype, "activated", void 0);
  __decorate([
    e5({ type: String, reflect: true })
  ], ListItemBase.prototype, "graphic", void 0);
  __decorate([
    e5({ type: Boolean })
  ], ListItemBase.prototype, "multipleGraphics", void 0);
  __decorate([
    e5({ type: Boolean })
  ], ListItemBase.prototype, "hasMeta", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true }),
    observer(function(value) {
      if (value) {
        this.removeAttribute("aria-checked");
        this.removeAttribute("mwc-list-item");
        this.selected = false;
        this.activated = false;
        this.tabIndex = -1;
      } else {
        this.setAttribute("mwc-list-item", "");
      }
    })
  ], ListItemBase.prototype, "noninteractive", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true }),
    observer(function(value) {
      const role = this.getAttribute("role");
      const isAriaSelectable = role === "gridcell" || role === "option" || role === "row" || role === "tab";
      if (isAriaSelectable && value) {
        this.setAttribute("aria-selected", "true");
      } else if (isAriaSelectable) {
        this.setAttribute("aria-selected", "false");
      }
      if (this._firstChanged) {
        this._firstChanged = false;
        return;
      }
      if (this._skipPropRequest) {
        return;
      }
      this.fireRequestSelected(value, "property");
    })
  ], ListItemBase.prototype, "selected", void 0);
  __decorate([
    t3()
  ], ListItemBase.prototype, "shouldRenderRipple", void 0);
  __decorate([
    t3()
  ], ListItemBase.prototype, "_managingList", void 0);

  // bundle/node_modules/@material/mwc-list/mwc-list-item.css.js
  var styles8 = i`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;

  // bundle/node_modules/@material/mwc-list/mwc-list-item.js
  var ListItem = class ListItem2 extends ListItemBase {
  };
  ListItem.styles = [styles8];
  ListItem = __decorate([
    e4("mwc-list-item")
  ], ListItem);

  // bundle/node_modules/@material/dom/keyboard.js
  var KEY = {
    UNKNOWN: "Unknown",
    BACKSPACE: "Backspace",
    ENTER: "Enter",
    SPACEBAR: "Spacebar",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown",
    END: "End",
    HOME: "Home",
    ARROW_LEFT: "ArrowLeft",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_DOWN: "ArrowDown",
    DELETE: "Delete",
    ESCAPE: "Escape",
    TAB: "Tab"
  };
  var normalizedKeys = /* @__PURE__ */ new Set();
  normalizedKeys.add(KEY.BACKSPACE);
  normalizedKeys.add(KEY.ENTER);
  normalizedKeys.add(KEY.SPACEBAR);
  normalizedKeys.add(KEY.PAGE_UP);
  normalizedKeys.add(KEY.PAGE_DOWN);
  normalizedKeys.add(KEY.END);
  normalizedKeys.add(KEY.HOME);
  normalizedKeys.add(KEY.ARROW_LEFT);
  normalizedKeys.add(KEY.ARROW_UP);
  normalizedKeys.add(KEY.ARROW_RIGHT);
  normalizedKeys.add(KEY.ARROW_DOWN);
  normalizedKeys.add(KEY.DELETE);
  normalizedKeys.add(KEY.ESCAPE);
  normalizedKeys.add(KEY.TAB);
  var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9
  };
  var mappedKeyCodes = /* @__PURE__ */ new Map();
  mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
  mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
  mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
  mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
  mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
  mappedKeyCodes.set(KEY_CODE.END, KEY.END);
  mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
  mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
  mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
  mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
  mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
  mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
  mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
  mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
  var navigationKeys = /* @__PURE__ */ new Set();
  navigationKeys.add(KEY.PAGE_UP);
  navigationKeys.add(KEY.PAGE_DOWN);
  navigationKeys.add(KEY.END);
  navigationKeys.add(KEY.HOME);
  navigationKeys.add(KEY.ARROW_LEFT);
  navigationKeys.add(KEY.ARROW_UP);
  navigationKeys.add(KEY.ARROW_RIGHT);
  navigationKeys.add(KEY.ARROW_DOWN);
  function normalizeKey(evt) {
    var key = evt.key;
    if (normalizedKeys.has(key)) {
      return key;
    }
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
      return mappedKey;
    }
    return KEY.UNKNOWN;
  }

  // bundle/node_modules/@material/list/constants.js
  var _a2;
  var _b2;
  var cssClasses4 = {
    LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
    LIST_ITEM_CLASS: "mdc-list-item",
    LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
    LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
    LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
    LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
    ROOT: "mdc-list"
  };
  var evolutionClassNameMap = (_a2 = {}, _a2["" + cssClasses4.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", _a2["" + cssClasses4.LIST_ITEM_CLASS] = "mdc-list-item", _a2["" + cssClasses4.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", _a2["" + cssClasses4.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", _a2["" + cssClasses4.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", _a2["" + cssClasses4.ROOT] = "mdc-list", _a2);
  var deprecatedClassNameMap = (_b2 = {}, _b2["" + cssClasses4.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", _b2["" + cssClasses4.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", _b2["" + cssClasses4.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", _b2["" + cssClasses4.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", _b2["" + cssClasses4.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", _b2["" + cssClasses4.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", _b2["" + cssClasses4.ROOT] = "mdc-deprecated-list", _b2);
  var strings4 = {
    ACTION_EVENT: "MDCList:action",
    SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
    ARIA_CHECKED: "aria-checked",
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: "aria-current",
    ARIA_DISABLED: "aria-disabled",
    ARIA_ORIENTATION: "aria-orientation",
    ARIA_ORIENTATION_HORIZONTAL: "horizontal",
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: "aria-selected",
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses4.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses4.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: ".mdc-deprecated-list",
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses4.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses4.LIST_ITEM_CLASS + " a,\n    ." + cssClasses4.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + cssClasses4.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + ' input[type="radio"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + ' input[type="checkbox"]:not(:disabled)\n  ',
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
  };
  var numbers2 = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
  };

  // bundle/node_modules/@material/mwc-list/mwc-list-foundation.js
  var integerSort = (a4, b3) => {
    return a4 - b3;
  };
  var findIndexDiff = (oldSet, newSet) => {
    const oldArr = Array.from(oldSet);
    const newArr = Array.from(newSet);
    const diff = { added: [], removed: [] };
    const oldSorted = oldArr.sort(integerSort);
    const newSorted = newArr.sort(integerSort);
    let i10 = 0;
    let j3 = 0;
    while (i10 < oldSorted.length || j3 < newSorted.length) {
      const oldVal = oldSorted[i10];
      const newVal = newSorted[j3];
      if (oldVal === newVal) {
        i10++;
        j3++;
        continue;
      }
      if (oldVal !== void 0 && (newVal === void 0 || oldVal < newVal)) {
        diff.removed.push(oldVal);
        i10++;
        continue;
      }
      if (newVal !== void 0 && (oldVal === void 0 || newVal < oldVal)) {
        diff.added.push(newVal);
        j3++;
        continue;
      }
    }
    return diff;
  };
  var ELEMENTS_KEY_ALLOWED_IN = ["input", "button", "textarea", "select"];
  function isIndexSet(selectedIndex) {
    return selectedIndex instanceof Set;
  }
  var createSetFromIndex = (index) => {
    const entry = index === numbers2.UNSET_INDEX ? /* @__PURE__ */ new Set() : index;
    return isIndexSet(entry) ? new Set(entry) : /* @__PURE__ */ new Set([entry]);
  };
  var MDCListFoundation = class extends MDCFoundation {
    constructor(adapter) {
      super(Object.assign(Object.assign({}, MDCListFoundation.defaultAdapter), adapter));
      this.isMulti_ = false;
      this.wrapFocus_ = false;
      this.isVertical_ = true;
      this.selectedIndex_ = numbers2.UNSET_INDEX;
      this.focusedItemIndex_ = numbers2.UNSET_INDEX;
      this.useActivatedClass_ = false;
      this.ariaCurrentAttrValue_ = null;
    }
    static get strings() {
      return strings4;
    }
    static get numbers() {
      return numbers2;
    }
    static get defaultAdapter() {
      return {
        focusItemAtIndex: () => void 0,
        getFocusedElementIndex: () => 0,
        getListItemCount: () => 0,
        isFocusInsideList: () => false,
        isRootFocused: () => false,
        notifyAction: () => void 0,
        notifySelected: () => void 0,
        getSelectedStateForElementIndex: () => false,
        setDisabledStateForElementIndex: () => void 0,
        getDisabledStateForElementIndex: () => false,
        setSelectedStateForElementIndex: () => void 0,
        setActivatedStateForElementIndex: () => void 0,
        setTabIndexForElementIndex: () => void 0,
        setAttributeForElementIndex: () => void 0,
        getAttributeForElementIndex: () => null
      };
    }
    /**
     * Sets the private wrapFocus_ variable.
     */
    setWrapFocus(value) {
      this.wrapFocus_ = value;
    }
    /**
     * Sets the private wrapFocus_ variable.
     */
    setMulti(value) {
      this.isMulti_ = value;
      const currentIndex = this.selectedIndex_;
      if (value) {
        if (!isIndexSet(currentIndex)) {
          const isUnset = currentIndex === numbers2.UNSET_INDEX;
          this.selectedIndex_ = isUnset ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([currentIndex]);
        }
      } else {
        if (isIndexSet(currentIndex)) {
          if (currentIndex.size) {
            const vals = Array.from(currentIndex).sort(integerSort);
            this.selectedIndex_ = vals[0];
          } else {
            this.selectedIndex_ = numbers2.UNSET_INDEX;
          }
        }
      }
    }
    /**
     * Sets the isVertical_ private variable.
     */
    setVerticalOrientation(value) {
      this.isVertical_ = value;
    }
    /**
     * Sets the useActivatedClass_ private variable.
     */
    setUseActivatedClass(useActivated) {
      this.useActivatedClass_ = useActivated;
    }
    getSelectedIndex() {
      return this.selectedIndex_;
    }
    setSelectedIndex(index) {
      if (!this.isIndexValid_(index)) {
        return;
      }
      if (this.isMulti_) {
        this.setMultiSelectionAtIndex_(createSetFromIndex(index));
      } else {
        this.setSingleSelectionAtIndex_(index);
      }
    }
    /**
     * Focus in handler for the list items.
     */
    handleFocusIn(_3, listItemIndex) {
      if (listItemIndex >= 0) {
        this.adapter.setTabIndexForElementIndex(listItemIndex, 0);
      }
    }
    /**
     * Focus out handler for the list items.
     */
    handleFocusOut(_3, listItemIndex) {
      if (listItemIndex >= 0) {
        this.adapter.setTabIndexForElementIndex(listItemIndex, -1);
      }
      setTimeout(() => {
        if (!this.adapter.isFocusInsideList()) {
          this.setTabindexToFirstSelectedItem_();
        }
      }, 0);
    }
    /**
     * Key handler for the list.
     */
    handleKeydown(event, isRootListItem, listItemIndex) {
      const isArrowLeft = normalizeKey(event) === "ArrowLeft";
      const isArrowUp = normalizeKey(event) === "ArrowUp";
      const isArrowRight = normalizeKey(event) === "ArrowRight";
      const isArrowDown = normalizeKey(event) === "ArrowDown";
      const isHome = normalizeKey(event) === "Home";
      const isEnd = normalizeKey(event) === "End";
      const isEnter = normalizeKey(event) === "Enter";
      const isSpace = normalizeKey(event) === "Spacebar";
      if (this.adapter.isRootFocused()) {
        if (isArrowUp || isEnd) {
          event.preventDefault();
          this.focusLastElement();
        } else if (isArrowDown || isHome) {
          event.preventDefault();
          this.focusFirstElement();
        }
        return;
      }
      let currentIndex = this.adapter.getFocusedElementIndex();
      if (currentIndex === -1) {
        currentIndex = listItemIndex;
        if (currentIndex < 0) {
          return;
        }
      }
      let nextIndex;
      if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
        this.preventDefaultEvent(event);
        nextIndex = this.focusNextElement(currentIndex);
      } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
        this.preventDefaultEvent(event);
        nextIndex = this.focusPrevElement(currentIndex);
      } else if (isHome) {
        this.preventDefaultEvent(event);
        nextIndex = this.focusFirstElement();
      } else if (isEnd) {
        this.preventDefaultEvent(event);
        nextIndex = this.focusLastElement();
      } else if (isEnter || isSpace) {
        if (isRootListItem) {
          const target = event.target;
          if (target && target.tagName === "A" && isEnter) {
            return;
          }
          this.preventDefaultEvent(event);
          this.setSelectedIndexOnAction_(currentIndex, true);
        }
      }
      this.focusedItemIndex_ = currentIndex;
      if (nextIndex !== void 0) {
        this.setTabindexAtIndex_(nextIndex);
        this.focusedItemIndex_ = nextIndex;
      }
    }
    /**
     * Click handler for the list.
     */
    handleSingleSelection(index, isInteraction, force) {
      if (index === numbers2.UNSET_INDEX) {
        return;
      }
      this.setSelectedIndexOnAction_(index, isInteraction, force);
      this.setTabindexAtIndex_(index);
      this.focusedItemIndex_ = index;
    }
    /**
     * Focuses the next element on the list.
     */
    focusNextElement(index) {
      const count = this.adapter.getListItemCount();
      let nextIndex = index + 1;
      if (nextIndex >= count) {
        if (this.wrapFocus_) {
          nextIndex = 0;
        } else {
          return index;
        }
      }
      this.adapter.focusItemAtIndex(nextIndex);
      return nextIndex;
    }
    /**
     * Focuses the previous element on the list.
     */
    focusPrevElement(index) {
      let prevIndex = index - 1;
      if (prevIndex < 0) {
        if (this.wrapFocus_) {
          prevIndex = this.adapter.getListItemCount() - 1;
        } else {
          return index;
        }
      }
      this.adapter.focusItemAtIndex(prevIndex);
      return prevIndex;
    }
    focusFirstElement() {
      this.adapter.focusItemAtIndex(0);
      return 0;
    }
    focusLastElement() {
      const lastIndex = this.adapter.getListItemCount() - 1;
      this.adapter.focusItemAtIndex(lastIndex);
      return lastIndex;
    }
    /**
     * @param itemIndex Index of the list item
     * @param isEnabled Sets the list item to enabled or disabled.
     */
    setEnabled(itemIndex, isEnabled) {
      if (!this.isIndexValid_(itemIndex)) {
        return;
      }
      this.adapter.setDisabledStateForElementIndex(itemIndex, !isEnabled);
    }
    /**
     * Ensures that preventDefault is only called if the containing element
     * doesn't consume the event, and it will cause an unintended scroll.
     */
    preventDefaultEvent(evt) {
      const target = evt.target;
      const tagName = `${target.tagName}`.toLowerCase();
      if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
        evt.preventDefault();
      }
    }
    setSingleSelectionAtIndex_(index, isInteraction = true) {
      if (this.selectedIndex_ === index) {
        return;
      }
      if (this.selectedIndex_ !== numbers2.UNSET_INDEX) {
        this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, false);
        if (this.useActivatedClass_) {
          this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, false);
        }
      }
      if (isInteraction) {
        this.adapter.setSelectedStateForElementIndex(index, true);
      }
      if (this.useActivatedClass_) {
        this.adapter.setActivatedStateForElementIndex(index, true);
      }
      this.setAriaForSingleSelectionAtIndex_(index);
      this.selectedIndex_ = index;
      this.adapter.notifySelected(index);
    }
    setMultiSelectionAtIndex_(newIndex, isInteraction = true) {
      const oldIndex = createSetFromIndex(this.selectedIndex_);
      const diff = findIndexDiff(oldIndex, newIndex);
      if (!diff.removed.length && !diff.added.length) {
        return;
      }
      for (const removed of diff.removed) {
        if (isInteraction) {
          this.adapter.setSelectedStateForElementIndex(removed, false);
        }
        if (this.useActivatedClass_) {
          this.adapter.setActivatedStateForElementIndex(removed, false);
        }
      }
      for (const added of diff.added) {
        if (isInteraction) {
          this.adapter.setSelectedStateForElementIndex(added, true);
        }
        if (this.useActivatedClass_) {
          this.adapter.setActivatedStateForElementIndex(added, true);
        }
      }
      this.selectedIndex_ = newIndex;
      this.adapter.notifySelected(newIndex, diff);
    }
    /**
     * Sets aria attribute for single selection at given index.
     */
    setAriaForSingleSelectionAtIndex_(index) {
      if (this.selectedIndex_ === numbers2.UNSET_INDEX) {
        this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(index, strings4.ARIA_CURRENT);
      }
      const isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
      const ariaAttribute = isAriaCurrent ? strings4.ARIA_CURRENT : strings4.ARIA_SELECTED;
      if (this.selectedIndex_ !== numbers2.UNSET_INDEX) {
        this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, "false");
      }
      const ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : "true";
      this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
    }
    setTabindexAtIndex_(index) {
      if (this.focusedItemIndex_ === numbers2.UNSET_INDEX && index !== 0) {
        this.adapter.setTabIndexForElementIndex(0, -1);
      } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
        this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1);
      }
      this.adapter.setTabIndexForElementIndex(index, 0);
    }
    setTabindexToFirstSelectedItem_() {
      let targetIndex = 0;
      if (typeof this.selectedIndex_ === "number" && this.selectedIndex_ !== numbers2.UNSET_INDEX) {
        targetIndex = this.selectedIndex_;
      } else if (isIndexSet(this.selectedIndex_) && this.selectedIndex_.size > 0) {
        targetIndex = Math.min(...this.selectedIndex_);
      }
      this.setTabindexAtIndex_(targetIndex);
    }
    isIndexValid_(index) {
      if (index instanceof Set) {
        if (!this.isMulti_) {
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        }
        if (index.size === 0) {
          return true;
        } else {
          let isOneInRange = false;
          for (const entry of index) {
            isOneInRange = this.isIndexInRange_(entry);
            if (isOneInRange) {
              break;
            }
          }
          return isOneInRange;
        }
      } else if (typeof index === "number") {
        if (this.isMulti_) {
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
        }
        return index === numbers2.UNSET_INDEX || this.isIndexInRange_(index);
      } else {
        return false;
      }
    }
    isIndexInRange_(index) {
      const listSize = this.adapter.getListItemCount();
      return index >= 0 && index < listSize;
    }
    /**
     * Sets selected index on user action, toggles checkbox / radio based on
     * toggleCheckbox value. User interaction should not toggle list item(s) when
     * disabled.
     */
    setSelectedIndexOnAction_(index, isInteraction, force) {
      if (this.adapter.getDisabledStateForElementIndex(index)) {
        return;
      }
      let checkedIndex = index;
      if (this.isMulti_) {
        checkedIndex = /* @__PURE__ */ new Set([index]);
      }
      if (!this.isIndexValid_(checkedIndex)) {
        return;
      }
      if (this.isMulti_) {
        this.toggleMultiAtIndex(index, force, isInteraction);
      } else {
        if (isInteraction || force) {
          this.setSingleSelectionAtIndex_(index, isInteraction);
        } else {
          const isDeselection = this.selectedIndex_ === index;
          if (isDeselection) {
            this.setSingleSelectionAtIndex_(numbers2.UNSET_INDEX);
          }
        }
      }
      if (isInteraction) {
        this.adapter.notifyAction(index);
      }
    }
    toggleMultiAtIndex(index, force, isInteraction = true) {
      let newSelectionValue = false;
      if (force === void 0) {
        newSelectionValue = !this.adapter.getSelectedStateForElementIndex(index);
      } else {
        newSelectionValue = force;
      }
      const newSet = createSetFromIndex(this.selectedIndex_);
      if (newSelectionValue) {
        newSet.add(index);
      } else {
        newSet.delete(index);
      }
      this.setMultiSelectionAtIndex_(newSet, isInteraction);
    }
  };
  var mwc_list_foundation_default = MDCListFoundation;

  // bundle/node_modules/@material/mwc-list/mwc-list-base.js
  function debounceLayout(callback, waitInMS = 50) {
    let timeoutId;
    return function(updateItems = true) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(updateItems);
      }, waitInMS);
    };
  }
  var isListItem = (element) => {
    return element.hasAttribute("mwc-list-item");
  };
  function clearAndCreateItemsReadyPromise() {
    const oldResolver = this.itemsReadyResolver;
    this.itemsReady = new Promise((res) => {
      return this.itemsReadyResolver = res;
    });
    oldResolver();
  }
  var ListBase = class extends BaseElement {
    constructor() {
      super();
      this.mdcAdapter = null;
      this.mdcFoundationClass = mwc_list_foundation_default;
      this.activatable = false;
      this.multi = false;
      this.wrapFocus = false;
      this.itemRoles = null;
      this.innerRole = null;
      this.innerAriaLabel = null;
      this.rootTabbable = false;
      this.previousTabindex = null;
      this.noninteractive = false;
      this.itemsReadyResolver = () => {
      };
      this.itemsReady = Promise.resolve([]);
      this.items_ = [];
      const debouncedFunction = debounceLayout(this.layout.bind(this));
      this.debouncedLayout = (updateItems = true) => {
        clearAndCreateItemsReadyPromise.call(this);
        debouncedFunction(updateItems);
      };
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
      const result = await super.getUpdateComplete();
      await this.itemsReady;
      return result;
    }
    get items() {
      return this.items_;
    }
    updateItems() {
      var _a3;
      const nodes = (_a3 = this.assignedElements) !== null && _a3 !== void 0 ? _a3 : [];
      const listItems = [];
      for (const node of nodes) {
        if (isListItem(node)) {
          listItems.push(node);
          node._managingList = this;
        }
        if (node.hasAttribute("divider") && !node.hasAttribute("role")) {
          node.setAttribute("role", "separator");
        }
      }
      this.items_ = listItems;
      const selectedIndices = /* @__PURE__ */ new Set();
      this.items_.forEach((item, index) => {
        if (this.itemRoles) {
          item.setAttribute("role", this.itemRoles);
        } else {
          item.removeAttribute("role");
        }
        if (item.selected) {
          selectedIndices.add(index);
        }
      });
      if (this.multi) {
        this.select(selectedIndices);
      } else {
        const index = selectedIndices.size ? selectedIndices.entries().next().value[1] : -1;
        this.select(index);
      }
      const itemsUpdatedEv = new Event("items-updated", { bubbles: true, composed: true });
      this.dispatchEvent(itemsUpdatedEv);
    }
    get selected() {
      const index = this.index;
      if (!isIndexSet(index)) {
        if (index === -1) {
          return null;
        }
        return this.items[index];
      }
      const selected = [];
      for (const entry of index) {
        selected.push(this.items[entry]);
      }
      return selected;
    }
    get index() {
      if (this.mdcFoundation) {
        return this.mdcFoundation.getSelectedIndex();
      }
      return -1;
    }
    render() {
      const role = this.innerRole === null ? void 0 : this.innerRole;
      const ariaLabel = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel;
      const tabindex = this.rootTabbable ? "0" : "-1";
      return x`
      <!-- @ts-ignore -->
      <ul
          tabindex=${tabindex}
          role="${l5(role)}"
          aria-label="${l5(ariaLabel)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
    }
    renderPlaceholder() {
      var _a3;
      const nodes = (_a3 = this.assignedElements) !== null && _a3 !== void 0 ? _a3 : [];
      if (this.emptyMessage !== void 0 && nodes.length === 0) {
        return x`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `;
      }
      return null;
    }
    firstUpdated() {
      super.firstUpdated();
      if (!this.items.length) {
        this.mdcFoundation.setMulti(this.multi);
        this.layout();
      }
    }
    onFocusIn(evt) {
      if (this.mdcFoundation && this.mdcRoot) {
        const index = this.getIndexOfTarget(evt);
        this.mdcFoundation.handleFocusIn(evt, index);
      }
    }
    onFocusOut(evt) {
      if (this.mdcFoundation && this.mdcRoot) {
        const index = this.getIndexOfTarget(evt);
        this.mdcFoundation.handleFocusOut(evt, index);
      }
    }
    onKeydown(evt) {
      if (this.mdcFoundation && this.mdcRoot) {
        const index = this.getIndexOfTarget(evt);
        const target = evt.target;
        const isRootListItem = isListItem(target);
        this.mdcFoundation.handleKeydown(evt, isRootListItem, index);
      }
    }
    onRequestSelected(evt) {
      if (this.mdcFoundation) {
        let index = this.getIndexOfTarget(evt);
        if (index === -1) {
          this.layout();
          index = this.getIndexOfTarget(evt);
          if (index === -1) {
            return;
          }
        }
        const element = this.items[index];
        if (element.disabled) {
          return;
        }
        const selected = evt.detail.selected;
        const source = evt.detail.source;
        this.mdcFoundation.handleSingleSelection(index, source === "interaction", selected);
        evt.stopPropagation();
      }
    }
    getIndexOfTarget(evt) {
      const elements = this.items;
      const path = evt.composedPath();
      for (const pathItem of path) {
        let index = -1;
        if (isNodeElement(pathItem) && isListItem(pathItem)) {
          index = elements.indexOf(pathItem);
        }
        if (index !== -1) {
          return index;
        }
      }
      return -1;
    }
    createAdapter() {
      this.mdcAdapter = {
        getListItemCount: () => {
          if (this.mdcRoot) {
            return this.items.length;
          }
          return 0;
        },
        getFocusedElementIndex: this.getFocusedItemIndex,
        getAttributeForElementIndex: (index, attr) => {
          const listElement = this.mdcRoot;
          if (!listElement) {
            return "";
          }
          const element = this.items[index];
          return element ? element.getAttribute(attr) : "";
        },
        setAttributeForElementIndex: (index, attr, val) => {
          if (!this.mdcRoot) {
            return;
          }
          const element = this.items[index];
          if (element) {
            element.setAttribute(attr, val);
          }
        },
        focusItemAtIndex: (index) => {
          const element = this.items[index];
          if (element) {
            element.focus();
          }
        },
        setTabIndexForElementIndex: (index, value) => {
          const item = this.items[index];
          if (item) {
            item.tabindex = value;
          }
        },
        notifyAction: (index) => {
          const init = { bubbles: true, composed: true };
          init.detail = { index };
          const ev = new CustomEvent("action", init);
          this.dispatchEvent(ev);
        },
        notifySelected: (index, diff) => {
          const init = { bubbles: true, composed: true };
          init.detail = { index, diff };
          const ev = new CustomEvent("selected", init);
          this.dispatchEvent(ev);
        },
        isFocusInsideList: () => {
          return doesElementContainFocus(this);
        },
        isRootFocused: () => {
          const mdcRoot = this.mdcRoot;
          const root = mdcRoot.getRootNode();
          return root.activeElement === mdcRoot;
        },
        setDisabledStateForElementIndex: (index, value) => {
          const item = this.items[index];
          if (!item) {
            return;
          }
          item.disabled = value;
        },
        getDisabledStateForElementIndex: (index) => {
          const item = this.items[index];
          if (!item) {
            return false;
          }
          return item.disabled;
        },
        setSelectedStateForElementIndex: (index, value) => {
          const item = this.items[index];
          if (!item) {
            return;
          }
          item.selected = value;
        },
        getSelectedStateForElementIndex: (index) => {
          const item = this.items[index];
          if (!item) {
            return false;
          }
          return item.selected;
        },
        setActivatedStateForElementIndex: (index, value) => {
          const item = this.items[index];
          if (!item) {
            return;
          }
          item.activated = value;
        }
      };
      return this.mdcAdapter;
    }
    selectUi(index, activate = false) {
      const item = this.items[index];
      if (item) {
        item.selected = true;
        item.activated = activate;
      }
    }
    deselectUi(index) {
      const item = this.items[index];
      if (item) {
        item.selected = false;
        item.activated = false;
      }
    }
    select(index) {
      if (!this.mdcFoundation) {
        return;
      }
      this.mdcFoundation.setSelectedIndex(index);
    }
    toggle(index, force) {
      if (this.multi) {
        this.mdcFoundation.toggleMultiAtIndex(index, force);
      }
    }
    onListItemConnected(e12) {
      const target = e12.target;
      this.layout(this.items.indexOf(target) === -1);
    }
    layout(updateItems = true) {
      if (updateItems) {
        this.updateItems();
      }
      const first = this.items[0];
      for (const item of this.items) {
        item.tabindex = -1;
      }
      if (first) {
        if (this.noninteractive) {
          if (!this.previousTabindex) {
            this.previousTabindex = first;
          }
        } else {
          first.tabindex = 0;
        }
      }
      this.itemsReadyResolver();
    }
    getFocusedItemIndex() {
      if (!this.mdcRoot) {
        return -1;
      }
      if (!this.items.length) {
        return -1;
      }
      const activeElementPath = deepActiveElementPath();
      if (!activeElementPath.length) {
        return -1;
      }
      for (let i10 = activeElementPath.length - 1; i10 >= 0; i10--) {
        const activeItem = activeElementPath[i10];
        if (isListItem(activeItem)) {
          return this.items.indexOf(activeItem);
        }
      }
      return -1;
    }
    focusItemAtIndex(index) {
      for (const item of this.items) {
        if (item.tabindex === 0) {
          item.tabindex = -1;
          break;
        }
      }
      this.items[index].tabindex = 0;
      this.items[index].focus();
    }
    focus() {
      const root = this.mdcRoot;
      if (root) {
        root.focus();
      }
    }
    blur() {
      const root = this.mdcRoot;
      if (root) {
        root.blur();
      }
    }
  };
  __decorate([
    e5({ type: String })
  ], ListBase.prototype, "emptyMessage", void 0);
  __decorate([
    i4(".mdc-deprecated-list")
  ], ListBase.prototype, "mdcRoot", void 0);
  __decorate([
    o6("", true, "*")
  ], ListBase.prototype, "assignedElements", void 0);
  __decorate([
    o6("", true, '[tabindex="0"]')
  ], ListBase.prototype, "tabbableElements", void 0);
  __decorate([
    e5({ type: Boolean }),
    observer(function(value) {
      if (this.mdcFoundation) {
        this.mdcFoundation.setUseActivatedClass(value);
      }
    })
  ], ListBase.prototype, "activatable", void 0);
  __decorate([
    e5({ type: Boolean }),
    observer(function(newValue, oldValue) {
      if (this.mdcFoundation) {
        this.mdcFoundation.setMulti(newValue);
      }
      if (oldValue !== void 0) {
        this.layout();
      }
    })
  ], ListBase.prototype, "multi", void 0);
  __decorate([
    e5({ type: Boolean }),
    observer(function(value) {
      if (this.mdcFoundation) {
        this.mdcFoundation.setWrapFocus(value);
      }
    })
  ], ListBase.prototype, "wrapFocus", void 0);
  __decorate([
    e5({ type: String }),
    observer(function(_newValue, oldValue) {
      if (oldValue !== void 0) {
        this.updateItems();
      }
    })
  ], ListBase.prototype, "itemRoles", void 0);
  __decorate([
    e5({ type: String })
  ], ListBase.prototype, "innerRole", void 0);
  __decorate([
    e5({ type: String })
  ], ListBase.prototype, "innerAriaLabel", void 0);
  __decorate([
    e5({ type: Boolean })
  ], ListBase.prototype, "rootTabbable", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true }),
    observer(function(value) {
      var _a3, _b3;
      if (value) {
        const tabbable = (_b3 = (_a3 = this.tabbableElements) === null || _a3 === void 0 ? void 0 : _a3[0]) !== null && _b3 !== void 0 ? _b3 : null;
        this.previousTabindex = tabbable;
        if (tabbable) {
          tabbable.setAttribute("tabindex", "-1");
        }
      } else if (!value && this.previousTabindex) {
        this.previousTabindex.setAttribute("tabindex", "0");
        this.previousTabindex = null;
      }
    })
  ], ListBase.prototype, "noninteractive", void 0);

  // bundle/node_modules/@material/mwc-list/mwc-list.css.js
  var styles9 = i`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;

  // bundle/node_modules/@material/mwc-list/mwc-list.js
  var List = class List2 extends ListBase {
  };
  List.styles = [styles9];
  List = __decorate([
    e4("mwc-list")
  ], List);

  // bundle/node_modules/@material/notched-outline/constants.js
  var strings5 = {
    NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
  };
  var numbers3 = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8
  };
  var cssClasses5 = {
    NO_LABEL: "mdc-notched-outline--no-label",
    OUTLINE_NOTCHED: "mdc-notched-outline--notched",
    OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
  };

  // bundle/node_modules/@material/notched-outline/foundation.js
  var MDCNotchedOutlineFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCNotchedOutlineFoundation2, _super);
      function MDCNotchedOutlineFoundation2(adapter) {
        return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation2.defaultAdapter), adapter)) || this;
      }
      Object.defineProperty(MDCNotchedOutlineFoundation2, "strings", {
        get: function() {
          return strings5;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCNotchedOutlineFoundation2, "cssClasses", {
        get: function() {
          return cssClasses5;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCNotchedOutlineFoundation2, "numbers", {
        get: function() {
          return numbers3;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCNotchedOutlineFoundation2, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function() {
          return {
            addClass: function() {
              return void 0;
            },
            removeClass: function() {
              return void 0;
            },
            setNotchWidthProperty: function() {
              return void 0;
            },
            removeNotchWidthProperty: function() {
              return void 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCNotchedOutlineFoundation2.prototype.notch = function(notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
          notchWidth += numbers3.NOTCH_ELEMENT_PADDING;
        }
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
      };
      MDCNotchedOutlineFoundation2.prototype.closeNotch = function() {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
      };
      return MDCNotchedOutlineFoundation2;
    }(MDCFoundation)
  );

  // bundle/node_modules/@material/mwc-notched-outline/mwc-notched-outline-base.js
  var NotchedOutlineBase = class extends BaseElement {
    constructor() {
      super(...arguments);
      this.mdcFoundationClass = MDCNotchedOutlineFoundation;
      this.width = 0;
      this.open = false;
      this.lastOpen = this.open;
    }
    createAdapter() {
      return {
        addClass: (className) => this.mdcRoot.classList.add(className),
        removeClass: (className) => this.mdcRoot.classList.remove(className),
        setNotchWidthProperty: (width) => this.notchElement.style.setProperty("width", `${width}px`),
        removeNotchWidthProperty: () => this.notchElement.style.removeProperty("width")
      };
    }
    openOrClose(shouldOpen, width) {
      if (!this.mdcFoundation) {
        return;
      }
      if (shouldOpen && width !== void 0) {
        this.mdcFoundation.notch(width);
      } else {
        this.mdcFoundation.closeNotch();
      }
    }
    render() {
      this.openOrClose(this.open, this.width);
      const classes = o10({
        "mdc-notched-outline--notched": this.open
      });
      return x`
      <span class="mdc-notched-outline ${classes}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`;
    }
  };
  __decorate([
    i4(".mdc-notched-outline")
  ], NotchedOutlineBase.prototype, "mdcRoot", void 0);
  __decorate([
    e5({ type: Number })
  ], NotchedOutlineBase.prototype, "width", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], NotchedOutlineBase.prototype, "open", void 0);
  __decorate([
    i4(".mdc-notched-outline__notch")
  ], NotchedOutlineBase.prototype, "notchElement", void 0);

  // bundle/node_modules/@material/mwc-notched-outline/mwc-notched-outline.css.js
  var styles10 = i`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;

  // bundle/node_modules/@material/mwc-notched-outline/mwc-notched-outline.js
  var NotchedOutline = class NotchedOutline2 extends NotchedOutlineBase {
  };
  NotchedOutline.styles = [styles10];
  NotchedOutline = __decorate([
    e4("mwc-notched-outline")
  ], NotchedOutline);

  // bundle/node_modules/@material/floating-label/constants.js
  var cssClasses6 = {
    LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
    LABEL_REQUIRED: "mdc-floating-label--required",
    LABEL_SHAKE: "mdc-floating-label--shake",
    ROOT: "mdc-floating-label"
  };

  // bundle/node_modules/@material/floating-label/foundation.js
  var MDCFloatingLabelFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCFloatingLabelFoundation2, _super);
      function MDCFloatingLabelFoundation2(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation2.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler = function() {
          _this.handleShakeAnimationEnd();
        };
        return _this;
      }
      Object.defineProperty(MDCFloatingLabelFoundation2, "cssClasses", {
        get: function() {
          return cssClasses6;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCFloatingLabelFoundation2, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function() {
          return {
            addClass: function() {
              return void 0;
            },
            removeClass: function() {
              return void 0;
            },
            getWidth: function() {
              return 0;
            },
            registerInteractionHandler: function() {
              return void 0;
            },
            deregisterInteractionHandler: function() {
              return void 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCFloatingLabelFoundation2.prototype.init = function() {
        this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
      };
      MDCFloatingLabelFoundation2.prototype.destroy = function() {
        this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
      };
      MDCFloatingLabelFoundation2.prototype.getWidth = function() {
        return this.adapter.getWidth();
      };
      MDCFloatingLabelFoundation2.prototype.shake = function(shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
          this.adapter.addClass(LABEL_SHAKE);
        } else {
          this.adapter.removeClass(LABEL_SHAKE);
        }
      };
      MDCFloatingLabelFoundation2.prototype.float = function(shouldFloat) {
        var _a3 = MDCFloatingLabelFoundation2.cssClasses, LABEL_FLOAT_ABOVE = _a3.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a3.LABEL_SHAKE;
        if (shouldFloat) {
          this.adapter.addClass(LABEL_FLOAT_ABOVE);
        } else {
          this.adapter.removeClass(LABEL_FLOAT_ABOVE);
          this.adapter.removeClass(LABEL_SHAKE);
        }
      };
      MDCFloatingLabelFoundation2.prototype.setRequired = function(isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation2.cssClasses.LABEL_REQUIRED;
        if (isRequired) {
          this.adapter.addClass(LABEL_REQUIRED);
        } else {
          this.adapter.removeClass(LABEL_REQUIRED);
        }
      };
      MDCFloatingLabelFoundation2.prototype.handleShakeAnimationEnd = function() {
        var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
      };
      return MDCFloatingLabelFoundation2;
    }(MDCFoundation)
  );

  // bundle/node_modules/@material/mwc-floating-label/mwc-floating-label-directive.js
  var createAdapter = (labelElement) => {
    return {
      addClass: (className) => labelElement.classList.add(className),
      removeClass: (className) => labelElement.classList.remove(className),
      getWidth: () => labelElement.scrollWidth,
      registerInteractionHandler: (evtType, handler) => {
        labelElement.addEventListener(evtType, handler);
      },
      deregisterInteractionHandler: (evtType, handler) => {
        labelElement.removeEventListener(evtType, handler);
      }
    };
  };
  var FloatingLabelDirective = class extends i7 {
    constructor(partInfo) {
      super(partInfo);
      this.foundation = null;
      this.previousPart = null;
      switch (partInfo.type) {
        case t8.ATTRIBUTE:
        case t8.PROPERTY:
          break;
        default:
          throw new Error("FloatingLabel directive only support attribute and property parts");
      }
    }
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part, [label]) {
      if (part !== this.previousPart) {
        if (this.foundation) {
          this.foundation.destroy();
        }
        this.previousPart = part;
        const labelElement = part.element;
        labelElement.classList.add("mdc-floating-label");
        const adapter = createAdapter(labelElement);
        this.foundation = new MDCFloatingLabelFoundation(adapter);
        this.foundation.init();
      }
      return this.render(label);
    }
    render(_label) {
      return this.foundation;
    }
  };
  var floatingLabel = e10(FloatingLabelDirective);

  // bundle/node_modules/@material/line-ripple/constants.js
  var cssClasses7 = {
    LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
    LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
  };

  // bundle/node_modules/@material/line-ripple/foundation.js
  var MDCLineRippleFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCLineRippleFoundation2, _super);
      function MDCLineRippleFoundation2(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation2.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler = function(evt) {
          _this.handleTransitionEnd(evt);
        };
        return _this;
      }
      Object.defineProperty(MDCLineRippleFoundation2, "cssClasses", {
        get: function() {
          return cssClasses7;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCLineRippleFoundation2, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function() {
          return {
            addClass: function() {
              return void 0;
            },
            removeClass: function() {
              return void 0;
            },
            hasClass: function() {
              return false;
            },
            setStyle: function() {
              return void 0;
            },
            registerEventHandler: function() {
              return void 0;
            },
            deregisterEventHandler: function() {
              return void 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCLineRippleFoundation2.prototype.init = function() {
        this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
      };
      MDCLineRippleFoundation2.prototype.destroy = function() {
        this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
      };
      MDCLineRippleFoundation2.prototype.activate = function() {
        this.adapter.removeClass(cssClasses7.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(cssClasses7.LINE_RIPPLE_ACTIVE);
      };
      MDCLineRippleFoundation2.prototype.setRippleCenter = function(xCoordinate) {
        this.adapter.setStyle("transform-origin", xCoordinate + "px center");
      };
      MDCLineRippleFoundation2.prototype.deactivate = function() {
        this.adapter.addClass(cssClasses7.LINE_RIPPLE_DEACTIVATING);
      };
      MDCLineRippleFoundation2.prototype.handleTransitionEnd = function(evt) {
        var isDeactivating = this.adapter.hasClass(cssClasses7.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === "opacity") {
          if (isDeactivating) {
            this.adapter.removeClass(cssClasses7.LINE_RIPPLE_ACTIVE);
            this.adapter.removeClass(cssClasses7.LINE_RIPPLE_DEACTIVATING);
          }
        }
      };
      return MDCLineRippleFoundation2;
    }(MDCFoundation)
  );

  // bundle/node_modules/@material/mwc-line-ripple/mwc-line-ripple-directive.js
  var createAdapter2 = (lineElement) => {
    return {
      addClass: (className) => lineElement.classList.add(className),
      removeClass: (className) => lineElement.classList.remove(className),
      hasClass: (className) => lineElement.classList.contains(className),
      setStyle: (propertyName, value) => lineElement.style.setProperty(propertyName, value),
      registerEventHandler: (evtType, handler) => {
        lineElement.addEventListener(evtType, handler);
      },
      deregisterEventHandler: (evtType, handler) => {
        lineElement.removeEventListener(evtType, handler);
      }
    };
  };
  var LineRippleDirective = class extends i7 {
    constructor(partInfo) {
      super(partInfo);
      this.previousPart = null;
      this.foundation = null;
      switch (partInfo.type) {
        case t8.ATTRIBUTE:
        case t8.PROPERTY:
          return;
        default:
          throw new Error("LineRipple only support attribute and property parts.");
      }
    }
    /**
     * There is no PropertyPart in Lit 2 so far. For more info see:
     * https://github.com/lit/lit/issues/1863
     */
    update(part, _params) {
      if (this.previousPart !== part) {
        if (this.foundation) {
          this.foundation.destroy();
        }
        this.previousPart = part;
        const lineElement = part.element;
        lineElement.classList.add("mdc-line-ripple");
        const adapter = createAdapter2(lineElement);
        this.foundation = new MDCLineRippleFoundation(adapter);
        this.foundation.init();
      }
      return this.render();
    }
    render() {
      return this.foundation;
    }
  };
  var lineRipple = e10(LineRippleDirective);

  // bundle/node_modules/@material/textfield/constants.js
  var strings6 = {
    ARIA_CONTROLS: "aria-controls",
    ARIA_DESCRIBEDBY: "aria-describedby",
    INPUT_SELECTOR: ".mdc-text-field__input",
    LABEL_SELECTOR: ".mdc-floating-label",
    LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
    LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
    OUTLINE_SELECTOR: ".mdc-notched-outline",
    PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
    SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
    TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
  };
  var cssClasses8 = {
    DISABLED: "mdc-text-field--disabled",
    FOCUSED: "mdc-text-field--focused",
    HELPER_LINE: "mdc-text-field-helper-line",
    INVALID: "mdc-text-field--invalid",
    LABEL_FLOATING: "mdc-text-field--label-floating",
    NO_LABEL: "mdc-text-field--no-label",
    OUTLINED: "mdc-text-field--outlined",
    ROOT: "mdc-text-field",
    TEXTAREA: "mdc-text-field--textarea",
    WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
    WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
    WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
  };
  var numbers4 = {
    LABEL_SCALE: 0.75
  };
  var VALIDATION_ATTR_WHITELIST = [
    "pattern",
    "min",
    "max",
    "required",
    "step",
    "minlength",
    "maxlength"
  ];
  var ALWAYS_FLOAT_TYPES = [
    "color",
    "date",
    "datetime-local",
    "month",
    "range",
    "time",
    "week"
  ];

  // bundle/node_modules/@material/textfield/foundation.js
  var POINTERDOWN_EVENTS = ["mousedown", "touchstart"];
  var INTERACTION_EVENTS = ["click", "keydown"];
  var MDCTextFieldFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCTextFieldFoundation2, _super);
      function MDCTextFieldFoundation2(adapter, foundationMap) {
        if (foundationMap === void 0) {
          foundationMap = {};
        }
        var _this = _super.call(this, __assign(__assign({}, MDCTextFieldFoundation2.defaultAdapter), adapter)) || this;
        _this.isFocused = false;
        _this.receivedUserInput = false;
        _this.valid = true;
        _this.useNativeValidation = true;
        _this.validateOnValueChange = true;
        _this.helperText = foundationMap.helperText;
        _this.characterCounter = foundationMap.characterCounter;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.trailingIcon = foundationMap.trailingIcon;
        _this.inputFocusHandler = function() {
          _this.activateFocus();
        };
        _this.inputBlurHandler = function() {
          _this.deactivateFocus();
        };
        _this.inputInputHandler = function() {
          _this.handleInput();
        };
        _this.setPointerXOffset = function(evt) {
          _this.setTransformOrigin(evt);
        };
        _this.textFieldInteractionHandler = function() {
          _this.handleTextFieldInteraction();
        };
        _this.validationAttributeChangeHandler = function(attributesList) {
          _this.handleValidationAttributeChange(attributesList);
        };
        return _this;
      }
      Object.defineProperty(MDCTextFieldFoundation2, "cssClasses", {
        get: function() {
          return cssClasses8;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTextFieldFoundation2, "strings", {
        get: function() {
          return strings6;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTextFieldFoundation2, "numbers", {
        get: function() {
          return numbers4;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldAlwaysFloat", {
        get: function() {
          var type = this.getNativeInput().type;
          return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldFloat", {
        get: function() {
          return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTextFieldFoundation2.prototype, "shouldShake", {
        get: function() {
          return !this.isFocused && !this.isValid() && !!this.getValue();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTextFieldFoundation2, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldAdapter} for typing information on parameters and
         * return types.
         */
        get: function() {
          return {
            addClass: function() {
              return void 0;
            },
            removeClass: function() {
              return void 0;
            },
            hasClass: function() {
              return true;
            },
            setInputAttr: function() {
              return void 0;
            },
            removeInputAttr: function() {
              return void 0;
            },
            registerTextFieldInteractionHandler: function() {
              return void 0;
            },
            deregisterTextFieldInteractionHandler: function() {
              return void 0;
            },
            registerInputInteractionHandler: function() {
              return void 0;
            },
            deregisterInputInteractionHandler: function() {
              return void 0;
            },
            registerValidationAttributeChangeHandler: function() {
              return new MutationObserver(function() {
                return void 0;
              });
            },
            deregisterValidationAttributeChangeHandler: function() {
              return void 0;
            },
            getNativeInput: function() {
              return null;
            },
            isFocused: function() {
              return false;
            },
            activateLineRipple: function() {
              return void 0;
            },
            deactivateLineRipple: function() {
              return void 0;
            },
            setLineRippleTransformOrigin: function() {
              return void 0;
            },
            shakeLabel: function() {
              return void 0;
            },
            floatLabel: function() {
              return void 0;
            },
            setLabelRequired: function() {
              return void 0;
            },
            hasLabel: function() {
              return false;
            },
            getLabelWidth: function() {
              return 0;
            },
            hasOutline: function() {
              return false;
            },
            notchOutline: function() {
              return void 0;
            },
            closeOutline: function() {
              return void 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCTextFieldFoundation2.prototype.init = function() {
        var e_1, _a3, e_2, _b3;
        if (this.adapter.hasLabel() && this.getNativeInput().required) {
          this.adapter.setLabelRequired(true);
        }
        if (this.adapter.isFocused()) {
          this.inputFocusHandler();
        } else if (this.adapter.hasLabel() && this.shouldFloat) {
          this.notchOutline(true);
          this.adapter.floatLabel(true);
          this.styleFloating(true);
        }
        this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler);
        this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler);
        this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
        try {
          for (var POINTERDOWN_EVENTS_1 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next(); !POINTERDOWN_EVENTS_1_1.done; POINTERDOWN_EVENTS_1_1 = POINTERDOWN_EVENTS_1.next()) {
            var evtType = POINTERDOWN_EVENTS_1_1.value;
            this.adapter.registerInputInteractionHandler(evtType, this.setPointerXOffset);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (POINTERDOWN_EVENTS_1_1 && !POINTERDOWN_EVENTS_1_1.done && (_a3 = POINTERDOWN_EVENTS_1.return))
              _a3.call(POINTERDOWN_EVENTS_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        try {
          for (var INTERACTION_EVENTS_1 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
            var evtType = INTERACTION_EVENTS_1_1.value;
            this.adapter.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_b3 = INTERACTION_EVENTS_1.return))
              _b3.call(INTERACTION_EVENTS_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
        this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler);
        this.setcharacterCounter(this.getValue().length);
      };
      MDCTextFieldFoundation2.prototype.destroy = function() {
        var e_3, _a3, e_4, _b3;
        this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler);
        this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler);
        this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
        try {
          for (var POINTERDOWN_EVENTS_2 = __values(POINTERDOWN_EVENTS), POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next(); !POINTERDOWN_EVENTS_2_1.done; POINTERDOWN_EVENTS_2_1 = POINTERDOWN_EVENTS_2.next()) {
            var evtType = POINTERDOWN_EVENTS_2_1.value;
            this.adapter.deregisterInputInteractionHandler(evtType, this.setPointerXOffset);
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (POINTERDOWN_EVENTS_2_1 && !POINTERDOWN_EVENTS_2_1.done && (_a3 = POINTERDOWN_EVENTS_2.return))
              _a3.call(POINTERDOWN_EVENTS_2);
          } finally {
            if (e_3)
              throw e_3.error;
          }
        }
        try {
          for (var INTERACTION_EVENTS_2 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
            var evtType = INTERACTION_EVENTS_2_1.value;
            this.adapter.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler);
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_b3 = INTERACTION_EVENTS_2.return))
              _b3.call(INTERACTION_EVENTS_2);
          } finally {
            if (e_4)
              throw e_4.error;
          }
        }
        this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
      };
      MDCTextFieldFoundation2.prototype.handleTextFieldInteraction = function() {
        var nativeInput = this.adapter.getNativeInput();
        if (nativeInput && nativeInput.disabled) {
          return;
        }
        this.receivedUserInput = true;
      };
      MDCTextFieldFoundation2.prototype.handleValidationAttributeChange = function(attributesList) {
        var _this = this;
        attributesList.some(function(attributeName) {
          if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
            _this.styleValidity(true);
            _this.adapter.setLabelRequired(_this.getNativeInput().required);
            return true;
          }
          return false;
        });
        if (attributesList.indexOf("maxlength") > -1) {
          this.setcharacterCounter(this.getValue().length);
        }
      };
      MDCTextFieldFoundation2.prototype.notchOutline = function(openNotch) {
        if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {
          return;
        }
        if (openNotch) {
          var labelWidth = this.adapter.getLabelWidth() * numbers4.LABEL_SCALE;
          this.adapter.notchOutline(labelWidth);
        } else {
          this.adapter.closeOutline();
        }
      };
      MDCTextFieldFoundation2.prototype.activateFocus = function() {
        this.isFocused = true;
        this.styleFocused(this.isFocused);
        this.adapter.activateLineRipple();
        if (this.adapter.hasLabel()) {
          this.notchOutline(this.shouldFloat);
          this.adapter.floatLabel(this.shouldFloat);
          this.styleFloating(this.shouldFloat);
          this.adapter.shakeLabel(this.shouldShake);
        }
        if (this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid)) {
          this.helperText.showToScreenReader();
        }
      };
      MDCTextFieldFoundation2.prototype.setTransformOrigin = function(evt) {
        if (this.isDisabled() || this.adapter.hasOutline()) {
          return;
        }
        var touches = evt.touches;
        var targetEvent = touches ? touches[0] : evt;
        var targetClientRect = targetEvent.target.getBoundingClientRect();
        var normalizedX = targetEvent.clientX - targetClientRect.left;
        this.adapter.setLineRippleTransformOrigin(normalizedX);
      };
      MDCTextFieldFoundation2.prototype.handleInput = function() {
        this.autoCompleteFocus();
        this.setcharacterCounter(this.getValue().length);
      };
      MDCTextFieldFoundation2.prototype.autoCompleteFocus = function() {
        if (!this.receivedUserInput) {
          this.activateFocus();
        }
      };
      MDCTextFieldFoundation2.prototype.deactivateFocus = function() {
        this.isFocused = false;
        this.adapter.deactivateLineRipple();
        var isValid = this.isValid();
        this.styleValidity(isValid);
        this.styleFocused(this.isFocused);
        if (this.adapter.hasLabel()) {
          this.notchOutline(this.shouldFloat);
          this.adapter.floatLabel(this.shouldFloat);
          this.styleFloating(this.shouldFloat);
          this.adapter.shakeLabel(this.shouldShake);
        }
        if (!this.shouldFloat) {
          this.receivedUserInput = false;
        }
      };
      MDCTextFieldFoundation2.prototype.getValue = function() {
        return this.getNativeInput().value;
      };
      MDCTextFieldFoundation2.prototype.setValue = function(value) {
        if (this.getValue() !== value) {
          this.getNativeInput().value = value;
        }
        this.setcharacterCounter(value.length);
        if (this.validateOnValueChange) {
          var isValid = this.isValid();
          this.styleValidity(isValid);
        }
        if (this.adapter.hasLabel()) {
          this.notchOutline(this.shouldFloat);
          this.adapter.floatLabel(this.shouldFloat);
          this.styleFloating(this.shouldFloat);
          if (this.validateOnValueChange) {
            this.adapter.shakeLabel(this.shouldShake);
          }
        }
      };
      MDCTextFieldFoundation2.prototype.isValid = function() {
        return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
      };
      MDCTextFieldFoundation2.prototype.setValid = function(isValid) {
        this.valid = isValid;
        this.styleValidity(isValid);
        var shouldShake = !isValid && !this.isFocused && !!this.getValue();
        if (this.adapter.hasLabel()) {
          this.adapter.shakeLabel(shouldShake);
        }
      };
      MDCTextFieldFoundation2.prototype.setValidateOnValueChange = function(shouldValidate) {
        this.validateOnValueChange = shouldValidate;
      };
      MDCTextFieldFoundation2.prototype.getValidateOnValueChange = function() {
        return this.validateOnValueChange;
      };
      MDCTextFieldFoundation2.prototype.setUseNativeValidation = function(useNativeValidation) {
        this.useNativeValidation = useNativeValidation;
      };
      MDCTextFieldFoundation2.prototype.isDisabled = function() {
        return this.getNativeInput().disabled;
      };
      MDCTextFieldFoundation2.prototype.setDisabled = function(disabled) {
        this.getNativeInput().disabled = disabled;
        this.styleDisabled(disabled);
      };
      MDCTextFieldFoundation2.prototype.setHelperTextContent = function(content) {
        if (this.helperText) {
          this.helperText.setContent(content);
        }
      };
      MDCTextFieldFoundation2.prototype.setLeadingIconAriaLabel = function(label) {
        if (this.leadingIcon) {
          this.leadingIcon.setAriaLabel(label);
        }
      };
      MDCTextFieldFoundation2.prototype.setLeadingIconContent = function(content) {
        if (this.leadingIcon) {
          this.leadingIcon.setContent(content);
        }
      };
      MDCTextFieldFoundation2.prototype.setTrailingIconAriaLabel = function(label) {
        if (this.trailingIcon) {
          this.trailingIcon.setAriaLabel(label);
        }
      };
      MDCTextFieldFoundation2.prototype.setTrailingIconContent = function(content) {
        if (this.trailingIcon) {
          this.trailingIcon.setContent(content);
        }
      };
      MDCTextFieldFoundation2.prototype.setcharacterCounter = function(currentLength) {
        if (!this.characterCounter) {
          return;
        }
        var maxLength = this.getNativeInput().maxLength;
        if (maxLength === -1) {
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        }
        this.characterCounter.setCounterValue(currentLength, maxLength);
      };
      MDCTextFieldFoundation2.prototype.isBadInput = function() {
        return this.getNativeInput().validity.badInput || false;
      };
      MDCTextFieldFoundation2.prototype.isNativeInputValid = function() {
        return this.getNativeInput().validity.valid;
      };
      MDCTextFieldFoundation2.prototype.styleValidity = function(isValid) {
        var INVALID = MDCTextFieldFoundation2.cssClasses.INVALID;
        if (isValid) {
          this.adapter.removeClass(INVALID);
        } else {
          this.adapter.addClass(INVALID);
        }
        if (this.helperText) {
          this.helperText.setValidity(isValid);
          var helperTextValidation = this.helperText.isValidation();
          if (!helperTextValidation) {
            return;
          }
          var helperTextVisible = this.helperText.isVisible();
          var helperTextId = this.helperText.getId();
          if (helperTextVisible && helperTextId) {
            this.adapter.setInputAttr(strings6.ARIA_DESCRIBEDBY, helperTextId);
          } else {
            this.adapter.removeInputAttr(strings6.ARIA_DESCRIBEDBY);
          }
        }
      };
      MDCTextFieldFoundation2.prototype.styleFocused = function(isFocused) {
        var FOCUSED = MDCTextFieldFoundation2.cssClasses.FOCUSED;
        if (isFocused) {
          this.adapter.addClass(FOCUSED);
        } else {
          this.adapter.removeClass(FOCUSED);
        }
      };
      MDCTextFieldFoundation2.prototype.styleDisabled = function(isDisabled) {
        var _a3 = MDCTextFieldFoundation2.cssClasses, DISABLED = _a3.DISABLED, INVALID = _a3.INVALID;
        if (isDisabled) {
          this.adapter.addClass(DISABLED);
          this.adapter.removeClass(INVALID);
        } else {
          this.adapter.removeClass(DISABLED);
        }
        if (this.leadingIcon) {
          this.leadingIcon.setDisabled(isDisabled);
        }
        if (this.trailingIcon) {
          this.trailingIcon.setDisabled(isDisabled);
        }
      };
      MDCTextFieldFoundation2.prototype.styleFloating = function(isFloating) {
        var LABEL_FLOATING = MDCTextFieldFoundation2.cssClasses.LABEL_FLOATING;
        if (isFloating) {
          this.adapter.addClass(LABEL_FLOATING);
        } else {
          this.adapter.removeClass(LABEL_FLOATING);
        }
      };
      MDCTextFieldFoundation2.prototype.getNativeInput = function() {
        var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;
        return nativeInput || {
          disabled: false,
          maxLength: -1,
          required: false,
          type: "input",
          validity: {
            badInput: false,
            valid: true
          },
          value: ""
        };
      };
      return MDCTextFieldFoundation2;
    }(MDCFoundation)
  );
  var foundation_default5 = MDCTextFieldFoundation;

  // bundle/node_modules/lit-html/directive-helpers.js
  var { I: l6 } = Z;
  var e11 = (o13) => void 0 === o13.strings;
  var c3 = () => document.createComment("");
  var r4 = (o13, t10, i10) => {
    var n10;
    const d4 = o13._$AA.parentNode, v3 = void 0 === t10 ? o13._$AB : t10._$AA;
    if (void 0 === i10) {
      const t11 = d4.insertBefore(c3(), v3), n11 = d4.insertBefore(c3(), v3);
      i10 = new l6(t11, n11, o13, o13.options);
    } else {
      const l9 = i10._$AB.nextSibling, t11 = i10._$AM, e12 = t11 !== o13;
      if (e12) {
        let l10;
        null === (n10 = i10._$AQ) || void 0 === n10 || n10.call(i10, o13), i10._$AM = o13, void 0 !== i10._$AP && (l10 = o13._$AU) !== t11._$AU && i10._$AP(l10);
      }
      if (l9 !== v3 || e12) {
        let o14 = i10._$AA;
        for (; o14 !== l9; ) {
          const l10 = o14.nextSibling;
          d4.insertBefore(o14, v3), o14 = l10;
        }
      }
    }
    return i10;
  };
  var u2 = (o13, l9, t10 = o13) => (o13._$AI(l9, t10), o13);
  var f2 = {};
  var s9 = (o13, l9 = f2) => o13._$AH = l9;
  var m2 = (o13) => o13._$AH;
  var p2 = (o13) => {
    var l9;
    null === (l9 = o13._$AP) || void 0 === l9 || l9.call(o13, false, true);
    let t10 = o13._$AA;
    const i10 = o13._$AB.nextSibling;
    for (; t10 !== i10; ) {
      const o14 = t10.nextSibling;
      t10.remove(), t10 = o14;
    }
  };

  // bundle/node_modules/lit-html/directives/live.js
  var l7 = e10(class extends i7 {
    constructor(r6) {
      if (super(r6), r6.type !== t8.PROPERTY && r6.type !== t8.ATTRIBUTE && r6.type !== t8.BOOLEAN_ATTRIBUTE)
        throw Error("The `live` directive is not allowed on child or event bindings");
      if (!e11(r6))
        throw Error("`live` bindings can only contain a single expression");
    }
    render(r6) {
      return r6;
    }
    update(i10, [t10]) {
      if (t10 === T || t10 === A)
        return t10;
      const o13 = i10.element, l9 = i10.name;
      if (i10.type === t8.PROPERTY) {
        if (t10 === o13[l9])
          return T;
      } else if (i10.type === t8.BOOLEAN_ATTRIBUTE) {
        if (!!t10 === o13.hasAttribute(l9))
          return T;
      } else if (i10.type === t8.ATTRIBUTE && o13.getAttribute(l9) === t10 + "")
        return T;
      return s9(i10), t10;
    }
  });

  // bundle/node_modules/@material/mwc-textfield/mwc-textfield-base.js
  var passiveEvents = ["touchstart", "touchmove", "scroll", "mousewheel"];
  var createValidityObj = (customValidity = {}) => {
    const objectifiedCustomValidity = {};
    for (const propName in customValidity) {
      objectifiedCustomValidity[propName] = customValidity[propName];
    }
    return Object.assign({ badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: true, valueMissing: false }, objectifiedCustomValidity);
  };
  var TextFieldBase = class extends FormElement {
    constructor() {
      super(...arguments);
      this.mdcFoundationClass = foundation_default5;
      this.value = "";
      this.type = "text";
      this.placeholder = "";
      this.label = "";
      this.icon = "";
      this.iconTrailing = "";
      this.disabled = false;
      this.required = false;
      this.minLength = -1;
      this.maxLength = -1;
      this.outlined = false;
      this.helper = "";
      this.validateOnInitialRender = false;
      this.validationMessage = "";
      this.autoValidate = false;
      this.pattern = "";
      this.min = "";
      this.max = "";
      this.step = null;
      this.size = null;
      this.helperPersistent = false;
      this.charCounter = false;
      this.endAligned = false;
      this.prefix = "";
      this.suffix = "";
      this.name = "";
      this.readOnly = false;
      this.autocapitalize = "";
      this.outlineOpen = false;
      this.outlineWidth = 0;
      this.isUiValid = true;
      this.focused = false;
      this._validity = createValidityObj();
      this.validityTransform = null;
    }
    get validity() {
      this._checkValidity(this.value);
      return this._validity;
    }
    get willValidate() {
      return this.formElement.willValidate;
    }
    get selectionStart() {
      return this.formElement.selectionStart;
    }
    get selectionEnd() {
      return this.formElement.selectionEnd;
    }
    focus() {
      const focusEvt = new CustomEvent("focus");
      this.formElement.dispatchEvent(focusEvt);
      this.formElement.focus();
    }
    blur() {
      const blurEvt = new CustomEvent("blur");
      this.formElement.dispatchEvent(blurEvt);
      this.formElement.blur();
    }
    select() {
      this.formElement.select();
    }
    setSelectionRange(selectionStart, selectionEnd, selectionDirection) {
      this.formElement.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    update(changedProperties) {
      if (changedProperties.has("autoValidate") && this.mdcFoundation) {
        this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
      }
      if (changedProperties.has("value") && typeof this.value !== "string") {
        this.value = `${this.value}`;
      }
      super.update(changedProperties);
    }
    setFormData(formData) {
      if (this.name) {
        formData.append(this.name, this.value);
      }
    }
    /** @soyTemplate */
    render() {
      const shouldRenderCharCounter = this.charCounter && this.maxLength !== -1;
      const shouldRenderHelperText = !!this.helper || !!this.validationMessage || shouldRenderCharCounter;
      const classes = {
        "mdc-text-field--disabled": this.disabled,
        "mdc-text-field--no-label": !this.label,
        "mdc-text-field--filled": !this.outlined,
        "mdc-text-field--outlined": this.outlined,
        "mdc-text-field--with-leading-icon": this.icon,
        "mdc-text-field--with-trailing-icon": this.iconTrailing,
        "mdc-text-field--end-aligned": this.endAligned
      };
      return x`
      <label class="mdc-text-field ${o10(classes)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(shouldRenderHelperText)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderCharCounter)}
    `;
    }
    updated(changedProperties) {
      if (changedProperties.has("value") && changedProperties.get("value") !== void 0) {
        this.mdcFoundation.setValue(this.value);
        if (this.autoValidate) {
          this.reportValidity();
        }
      }
    }
    /** @soyTemplate */
    renderRipple() {
      return this.outlined ? "" : x`
      <span class="mdc-text-field__ripple"></span>
    `;
    }
    /** @soyTemplate */
    renderOutline() {
      return !this.outlined ? "" : x`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`;
    }
    /** @soyTemplate */
    renderLabel() {
      return !this.label ? "" : x`
      <span
          .floatingLabelFoundation=${floatingLabel(this.label)}
          id="label">${this.label}</span>
    `;
    }
    /** @soyTemplate */
    renderLeadingIcon() {
      return this.icon ? this.renderIcon(this.icon) : "";
    }
    /** @soyTemplate */
    renderTrailingIcon() {
      return this.iconTrailing ? this.renderIcon(this.iconTrailing, true) : "";
    }
    /** @soyTemplate */
    renderIcon(icon, isTrailingIcon = false) {
      const classes = {
        "mdc-text-field__icon--leading": !isTrailingIcon,
        "mdc-text-field__icon--trailing": isTrailingIcon
      };
      return x`<i class="material-icons mdc-text-field__icon ${o10(classes)}">${icon}</i>`;
    }
    /** @soyTemplate */
    renderPrefix() {
      return this.prefix ? this.renderAffix(this.prefix) : "";
    }
    /** @soyTemplate */
    renderSuffix() {
      return this.suffix ? this.renderAffix(this.suffix, true) : "";
    }
    /** @soyTemplate */
    renderAffix(content, isSuffix = false) {
      const classes = {
        "mdc-text-field__affix--prefix": !isSuffix,
        "mdc-text-field__affix--suffix": isSuffix
      };
      return x`<span class="mdc-text-field__affix ${o10(classes)}">
        ${content}</span>`;
    }
    /** @soyTemplate */
    renderInput(shouldRenderHelperText) {
      const minOrUndef = this.minLength === -1 ? void 0 : this.minLength;
      const maxOrUndef = this.maxLength === -1 ? void 0 : this.maxLength;
      const autocapitalizeOrUndef = this.autocapitalize ? this.autocapitalize : void 0;
      const showValidationMessage = this.validationMessage && !this.isUiValid;
      const ariaLabelledbyOrUndef = !!this.label ? "label" : void 0;
      const ariaControlsOrUndef = shouldRenderHelperText ? "helper-text" : void 0;
      const ariaDescribedbyOrUndef = this.focused || this.helperPersistent || showValidationMessage ? "helper-text" : void 0;
      return x`
      <input
          aria-labelledby=${l5(ariaLabelledbyOrUndef)}
          aria-controls="${l5(ariaControlsOrUndef)}"
          aria-describedby="${l5(ariaDescribedbyOrUndef)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${l7(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${l5(minOrUndef)}"
          maxlength="${l5(maxOrUndef)}"
          pattern="${l5(this.pattern ? this.pattern : void 0)}"
          min="${l5(this.min === "" ? void 0 : this.min)}"
          max="${l5(this.max === "" ? void 0 : this.max)}"
          step="${l5(this.step === null ? void 0 : this.step)}"
          size="${l5(this.size === null ? void 0 : this.size)}"
          name="${l5(this.name === "" ? void 0 : this.name)}"
          inputmode="${l5(this.inputMode)}"
          autocapitalize="${l5(autocapitalizeOrUndef)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`;
    }
    /** @soyTemplate */
    renderLineRipple() {
      return this.outlined ? "" : x`
      <span .lineRippleFoundation=${lineRipple()}></span>
    `;
    }
    /** @soyTemplate */
    renderHelperText(shouldRenderHelperText, shouldRenderCharCounter) {
      const showValidationMessage = this.validationMessage && !this.isUiValid;
      const classes = {
        "mdc-text-field-helper-text--persistent": this.helperPersistent,
        "mdc-text-field-helper-text--validation-msg": showValidationMessage
      };
      const ariaHiddenOrUndef = this.focused || this.helperPersistent || showValidationMessage ? void 0 : "true";
      const helperText = showValidationMessage ? this.validationMessage : this.helper;
      return !shouldRenderHelperText ? "" : x`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${l5(ariaHiddenOrUndef)}"
             class="mdc-text-field-helper-text ${o10(classes)}"
             >${helperText}</div>
        ${this.renderCharCounter(shouldRenderCharCounter)}
      </div>`;
    }
    /** @soyTemplate */
    renderCharCounter(shouldRenderCharCounter) {
      const length = Math.min(this.value.length, this.maxLength);
      return !shouldRenderCharCounter ? "" : x`
      <span class="mdc-text-field-character-counter"
            >${length} / ${this.maxLength}</span>`;
    }
    onInputFocus() {
      this.focused = true;
    }
    onInputBlur() {
      this.focused = false;
      this.reportValidity();
    }
    checkValidity() {
      const isValid = this._checkValidity(this.value);
      if (!isValid) {
        const invalidEvent = new Event("invalid", { bubbles: false, cancelable: true });
        this.dispatchEvent(invalidEvent);
      }
      return isValid;
    }
    reportValidity() {
      const isValid = this.checkValidity();
      this.mdcFoundation.setValid(isValid);
      this.isUiValid = isValid;
      return isValid;
    }
    _checkValidity(value) {
      const nativeValidity = this.formElement.validity;
      let validity = createValidityObj(nativeValidity);
      if (this.validityTransform) {
        const customValidity = this.validityTransform(value, validity);
        validity = Object.assign(Object.assign({}, validity), customValidity);
        this.mdcFoundation.setUseNativeValidation(false);
      } else {
        this.mdcFoundation.setUseNativeValidation(true);
      }
      this._validity = validity;
      return this._validity.valid;
    }
    setCustomValidity(message) {
      this.validationMessage = message;
      this.formElement.setCustomValidity(message);
    }
    handleInputChange() {
      this.value = this.formElement.value;
    }
    createAdapter() {
      return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
    }
    getRootAdapterMethods() {
      return Object.assign({ registerTextFieldInteractionHandler: (evtType, handler) => this.addEventListener(evtType, handler), deregisterTextFieldInteractionHandler: (evtType, handler) => this.removeEventListener(evtType, handler), registerValidationAttributeChangeHandler: (handler) => {
        const getAttributesList = (mutationsList) => {
          return mutationsList.map((mutation) => mutation.attributeName).filter((attributeName) => attributeName);
        };
        const observer2 = new MutationObserver((mutationsList) => {
          handler(getAttributesList(mutationsList));
        });
        const config = { attributes: true };
        observer2.observe(this.formElement, config);
        return observer2;
      }, deregisterValidationAttributeChangeHandler: (observer2) => observer2.disconnect() }, addHasRemoveClass(this.mdcRoot));
    }
    getInputAdapterMethods() {
      return {
        getNativeInput: () => this.formElement,
        // since HelperTextFoundation is not used, aria-describedby a11y logic
        // is implemented in render method instead of these adapter methods
        setInputAttr: () => void 0,
        removeInputAttr: () => void 0,
        isFocused: () => this.shadowRoot ? this.shadowRoot.activeElement === this.formElement : false,
        registerInputInteractionHandler: (evtType, handler) => this.formElement.addEventListener(evtType, handler, { passive: evtType in passiveEvents }),
        deregisterInputInteractionHandler: (evtType, handler) => this.formElement.removeEventListener(evtType, handler)
      };
    }
    getLabelAdapterMethods() {
      return {
        floatLabel: (shouldFloat) => this.labelElement && this.labelElement.floatingLabelFoundation.float(shouldFloat),
        getLabelWidth: () => {
          return this.labelElement ? this.labelElement.floatingLabelFoundation.getWidth() : 0;
        },
        hasLabel: () => Boolean(this.labelElement),
        shakeLabel: (shouldShake) => this.labelElement && this.labelElement.floatingLabelFoundation.shake(shouldShake),
        setLabelRequired: (isRequired) => {
          if (this.labelElement) {
            this.labelElement.floatingLabelFoundation.setRequired(isRequired);
          }
        }
      };
    }
    getLineRippleAdapterMethods() {
      return {
        activateLineRipple: () => {
          if (this.lineRippleElement) {
            this.lineRippleElement.lineRippleFoundation.activate();
          }
        },
        deactivateLineRipple: () => {
          if (this.lineRippleElement) {
            this.lineRippleElement.lineRippleFoundation.deactivate();
          }
        },
        setLineRippleTransformOrigin: (normalizedX) => {
          if (this.lineRippleElement) {
            this.lineRippleElement.lineRippleFoundation.setRippleCenter(normalizedX);
          }
        }
      };
    }
    // tslint:disable:ban-ts-ignore
    async getUpdateComplete() {
      var _a3;
      const result = await super.getUpdateComplete();
      await ((_a3 = this.outlineElement) === null || _a3 === void 0 ? void 0 : _a3.updateComplete);
      return result;
    }
    // tslint:enable:ban-ts-ignore
    firstUpdated() {
      var _a3;
      super.firstUpdated();
      this.mdcFoundation.setValidateOnValueChange(this.autoValidate);
      if (this.validateOnInitialRender) {
        this.reportValidity();
      }
      (_a3 = this.outlineElement) === null || _a3 === void 0 ? void 0 : _a3.updateComplete.then(() => {
        var _a4;
        this.outlineWidth = ((_a4 = this.labelElement) === null || _a4 === void 0 ? void 0 : _a4.floatingLabelFoundation.getWidth()) || 0;
      });
    }
    getOutlineAdapterMethods() {
      return {
        closeOutline: () => this.outlineElement && (this.outlineOpen = false),
        hasOutline: () => Boolean(this.outlineElement),
        notchOutline: (labelWidth) => {
          const outlineElement = this.outlineElement;
          if (outlineElement && !this.outlineOpen) {
            this.outlineWidth = labelWidth;
            this.outlineOpen = true;
          }
        }
      };
    }
    async layout() {
      await this.updateComplete;
      const labelElement = this.labelElement;
      if (!labelElement) {
        this.outlineOpen = false;
        return;
      }
      const shouldFloat = !!this.label && !!this.value;
      labelElement.floatingLabelFoundation.float(shouldFloat);
      if (!this.outlined) {
        return;
      }
      this.outlineOpen = shouldFloat;
      await this.updateComplete;
      const labelWidth = labelElement.floatingLabelFoundation.getWidth();
      if (this.outlineOpen) {
        this.outlineWidth = labelWidth;
        await this.updateComplete;
      }
    }
  };
  __decorate([
    i4(".mdc-text-field")
  ], TextFieldBase.prototype, "mdcRoot", void 0);
  __decorate([
    i4("input")
  ], TextFieldBase.prototype, "formElement", void 0);
  __decorate([
    i4(".mdc-floating-label")
  ], TextFieldBase.prototype, "labelElement", void 0);
  __decorate([
    i4(".mdc-line-ripple")
  ], TextFieldBase.prototype, "lineRippleElement", void 0);
  __decorate([
    i4("mwc-notched-outline")
  ], TextFieldBase.prototype, "outlineElement", void 0);
  __decorate([
    i4(".mdc-notched-outline__notch")
  ], TextFieldBase.prototype, "notchElement", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "value", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "type", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "placeholder", void 0);
  __decorate([
    e5({ type: String }),
    observer(function(_newVal, oldVal) {
      if (oldVal !== void 0 && this.label !== oldVal) {
        this.layout();
      }
    })
  ], TextFieldBase.prototype, "label", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "icon", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "iconTrailing", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], TextFieldBase.prototype, "disabled", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TextFieldBase.prototype, "required", void 0);
  __decorate([
    e5({ type: Number })
  ], TextFieldBase.prototype, "minLength", void 0);
  __decorate([
    e5({ type: Number })
  ], TextFieldBase.prototype, "maxLength", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true }),
    observer(function(_newVal, oldVal) {
      if (oldVal !== void 0 && this.outlined !== oldVal) {
        this.layout();
      }
    })
  ], TextFieldBase.prototype, "outlined", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "helper", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TextFieldBase.prototype, "validateOnInitialRender", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "validationMessage", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TextFieldBase.prototype, "autoValidate", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "pattern", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "min", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "max", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "step", void 0);
  __decorate([
    e5({ type: Number })
  ], TextFieldBase.prototype, "size", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TextFieldBase.prototype, "helperPersistent", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TextFieldBase.prototype, "charCounter", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TextFieldBase.prototype, "endAligned", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "prefix", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "suffix", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "name", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "inputMode", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TextFieldBase.prototype, "readOnly", void 0);
  __decorate([
    e5({ type: String })
  ], TextFieldBase.prototype, "autocapitalize", void 0);
  __decorate([
    t3()
  ], TextFieldBase.prototype, "outlineOpen", void 0);
  __decorate([
    t3()
  ], TextFieldBase.prototype, "outlineWidth", void 0);
  __decorate([
    t3()
  ], TextFieldBase.prototype, "isUiValid", void 0);
  __decorate([
    t3()
  ], TextFieldBase.prototype, "focused", void 0);
  __decorate([
    e6({ passive: true })
  ], TextFieldBase.prototype, "handleInputChange", null);

  // bundle/node_modules/@material/mwc-textfield/mwc-textfield.css.js
  var styles11 = i`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;

  // bundle/node_modules/@material/mwc-textfield/mwc-textfield.js
  var TextField = class TextField2 extends TextFieldBase {
  };
  TextField.styles = [styles11];
  TextField = __decorate([
    e4("mwc-textfield")
  ], TextField);

  // bundle/node_modules/@material/tab-indicator/constants.js
  var cssClasses9 = {
    ACTIVE: "mdc-tab-indicator--active",
    FADE: "mdc-tab-indicator--fade",
    NO_TRANSITION: "mdc-tab-indicator--no-transition"
  };
  var strings7 = {
    CONTENT_SELECTOR: ".mdc-tab-indicator__content"
  };

  // bundle/node_modules/@material/tab-indicator/foundation.js
  var MDCTabIndicatorFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCTabIndicatorFoundation2, _super);
      function MDCTabIndicatorFoundation2(adapter) {
        return _super.call(this, __assign(__assign({}, MDCTabIndicatorFoundation2.defaultAdapter), adapter)) || this;
      }
      Object.defineProperty(MDCTabIndicatorFoundation2, "cssClasses", {
        get: function() {
          return cssClasses9;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTabIndicatorFoundation2, "strings", {
        get: function() {
          return strings7;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTabIndicatorFoundation2, "defaultAdapter", {
        get: function() {
          return {
            addClass: function() {
              return void 0;
            },
            removeClass: function() {
              return void 0;
            },
            computeContentClientRect: function() {
              return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
            },
            setContentStyleProperty: function() {
              return void 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCTabIndicatorFoundation2.prototype.computeContentClientRect = function() {
        return this.adapter.computeContentClientRect();
      };
      return MDCTabIndicatorFoundation2;
    }(MDCFoundation)
  );

  // bundle/node_modules/@material/tab-indicator/fading-foundation.js
  var MDCFadingTabIndicatorFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCFadingTabIndicatorFoundation2, _super);
      function MDCFadingTabIndicatorFoundation2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      MDCFadingTabIndicatorFoundation2.prototype.activate = function() {
        this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      };
      MDCFadingTabIndicatorFoundation2.prototype.deactivate = function() {
        this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      };
      return MDCFadingTabIndicatorFoundation2;
    }(MDCTabIndicatorFoundation)
  );
  var fading_foundation_default = MDCFadingTabIndicatorFoundation;

  // bundle/node_modules/@material/tab-indicator/sliding-foundation.js
  var MDCSlidingTabIndicatorFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCSlidingTabIndicatorFoundation2, _super);
      function MDCSlidingTabIndicatorFoundation2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      MDCSlidingTabIndicatorFoundation2.prototype.activate = function(previousIndicatorClientRect) {
        if (!previousIndicatorClientRect) {
          this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
          return;
        }
        var currentClientRect = this.computeContentClientRect();
        var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
        var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
        this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter.setContentStyleProperty("transform", "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")");
        this.computeContentClientRect();
        this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
        this.adapter.setContentStyleProperty("transform", "");
      };
      MDCSlidingTabIndicatorFoundation2.prototype.deactivate = function() {
        this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      };
      return MDCSlidingTabIndicatorFoundation2;
    }(MDCTabIndicatorFoundation)
  );
  var sliding_foundation_default = MDCSlidingTabIndicatorFoundation;

  // bundle/node_modules/@material/mwc-tab-indicator/mwc-tab-indicator-base.js
  var TabIndicatorBase = class extends BaseElement {
    constructor() {
      super(...arguments);
      this.icon = "";
      this.fade = false;
    }
    get mdcFoundationClass() {
      return this.fade ? fading_foundation_default : sliding_foundation_default;
    }
    render() {
      const contentClasses = {
        "mdc-tab-indicator__content--icon": this.icon,
        "material-icons": this.icon,
        "mdc-tab-indicator__content--underline": !this.icon
      };
      return x`
      <span class="mdc-tab-indicator ${o10({
        "mdc-tab-indicator--fade": this.fade
      })}">
        <span class="mdc-tab-indicator__content ${o10(contentClasses)}">${this.icon}</span>
      </span>
      `;
    }
    updated(changedProperties) {
      if (changedProperties.has("fade")) {
        this.createFoundation();
      }
    }
    createAdapter() {
      return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { computeContentClientRect: () => this.contentElement.getBoundingClientRect(), setContentStyleProperty: (prop, value) => this.contentElement.style.setProperty(prop, value) });
    }
    computeContentClientRect() {
      return this.mdcFoundation.computeContentClientRect();
    }
    activate(previousIndicatorClientRect) {
      this.mdcFoundation.activate(previousIndicatorClientRect);
    }
    deactivate() {
      this.mdcFoundation.deactivate();
    }
  };
  __decorate([
    i4(".mdc-tab-indicator")
  ], TabIndicatorBase.prototype, "mdcRoot", void 0);
  __decorate([
    i4(".mdc-tab-indicator__content")
  ], TabIndicatorBase.prototype, "contentElement", void 0);
  __decorate([
    e5()
  ], TabIndicatorBase.prototype, "icon", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TabIndicatorBase.prototype, "fade", void 0);

  // bundle/node_modules/@material/mwc-tab-indicator/mwc-tab-indicator.css.js
  var styles12 = i`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}`;

  // bundle/node_modules/@material/mwc-tab-indicator/mwc-tab-indicator.js
  var TabIndicator = class TabIndicator2 extends TabIndicatorBase {
  };
  TabIndicator.styles = [styles12];
  TabIndicator = __decorate([
    e4("mwc-tab-indicator")
  ], TabIndicator);

  // bundle/node_modules/@material/tab/constants.js
  var cssClasses10 = {
    ACTIVE: "mdc-tab--active"
  };
  var strings8 = {
    ARIA_SELECTED: "aria-selected",
    CONTENT_SELECTOR: ".mdc-tab__content",
    INTERACTED_EVENT: "MDCTab:interacted",
    RIPPLE_SELECTOR: ".mdc-tab__ripple",
    TABINDEX: "tabIndex",
    TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator"
  };

  // bundle/node_modules/@material/tab/foundation.js
  var MDCTabFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCTabFoundation2, _super);
      function MDCTabFoundation2(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCTabFoundation2.defaultAdapter), adapter)) || this;
        _this.focusOnActivate = true;
        return _this;
      }
      Object.defineProperty(MDCTabFoundation2, "cssClasses", {
        get: function() {
          return cssClasses10;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTabFoundation2, "strings", {
        get: function() {
          return strings8;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTabFoundation2, "defaultAdapter", {
        get: function() {
          return {
            addClass: function() {
              return void 0;
            },
            removeClass: function() {
              return void 0;
            },
            hasClass: function() {
              return false;
            },
            setAttr: function() {
              return void 0;
            },
            activateIndicator: function() {
              return void 0;
            },
            deactivateIndicator: function() {
              return void 0;
            },
            notifyInteracted: function() {
              return void 0;
            },
            getOffsetLeft: function() {
              return 0;
            },
            getOffsetWidth: function() {
              return 0;
            },
            getContentOffsetLeft: function() {
              return 0;
            },
            getContentOffsetWidth: function() {
              return 0;
            },
            focus: function() {
              return void 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCTabFoundation2.prototype.handleClick = function() {
        this.adapter.notifyInteracted();
      };
      MDCTabFoundation2.prototype.isActive = function() {
        return this.adapter.hasClass(cssClasses10.ACTIVE);
      };
      MDCTabFoundation2.prototype.setFocusOnActivate = function(focusOnActivate) {
        this.focusOnActivate = focusOnActivate;
      };
      MDCTabFoundation2.prototype.activate = function(previousIndicatorClientRect) {
        this.adapter.addClass(cssClasses10.ACTIVE);
        this.adapter.setAttr(strings8.ARIA_SELECTED, "true");
        this.adapter.setAttr(strings8.TABINDEX, "0");
        this.adapter.activateIndicator(previousIndicatorClientRect);
        if (this.focusOnActivate) {
          this.adapter.focus();
        }
      };
      MDCTabFoundation2.prototype.deactivate = function() {
        if (!this.isActive()) {
          return;
        }
        this.adapter.removeClass(cssClasses10.ACTIVE);
        this.adapter.setAttr(strings8.ARIA_SELECTED, "false");
        this.adapter.setAttr(strings8.TABINDEX, "-1");
        this.adapter.deactivateIndicator();
      };
      MDCTabFoundation2.prototype.computeDimensions = function() {
        var rootWidth = this.adapter.getOffsetWidth();
        var rootLeft = this.adapter.getOffsetLeft();
        var contentWidth = this.adapter.getContentOffsetWidth();
        var contentLeft = this.adapter.getContentOffsetLeft();
        return {
          contentLeft: rootLeft + contentLeft,
          contentRight: rootLeft + contentLeft + contentWidth,
          rootLeft,
          rootRight: rootLeft + rootWidth
        };
      };
      return MDCTabFoundation2;
    }(MDCFoundation)
  );
  var foundation_default6 = MDCTabFoundation;

  // bundle/node_modules/@material/mwc-tab/mwc-tab-base.js
  var tabIdCounter = 0;
  var TabBase = class extends BaseElement {
    constructor() {
      super(...arguments);
      this.mdcFoundationClass = foundation_default6;
      this.label = "";
      this.icon = "";
      this.hasImageIcon = false;
      this.isFadingIndicator = false;
      this.minWidth = false;
      this.isMinWidthIndicator = false;
      this.indicatorIcon = "";
      this.stacked = false;
      this.focusOnActivate = true;
      this._active = false;
      this.initFocus = false;
      this.shouldRenderRipple = false;
      this.useStateLayerCustomProperties = false;
      this.rippleElement = null;
      this.rippleHandlers = new RippleHandlers(() => {
        this.shouldRenderRipple = true;
        this.ripple.then((v3) => this.rippleElement = v3);
        return this.ripple;
      });
    }
    get active() {
      return this._active;
    }
    connectedCallback() {
      this.dir = document.dir;
      super.connectedCallback();
    }
    firstUpdated() {
      super.firstUpdated();
      this.id = this.id || `mdc-tab-${++tabIdCounter}`;
    }
    render() {
      const classes = {
        "mdc-tab--min-width": this.minWidth,
        "mdc-tab--stacked": this.stacked
      };
      let iconTemplate = x``;
      if (this.hasImageIcon || this.icon) {
        iconTemplate = x`
        <span class="mdc-tab__icon material-icons"><slot name="icon">${this.icon}</slot></span>`;
      }
      let labelTemplate = x``;
      if (this.label) {
        labelTemplate = x`
        <span class="mdc-tab__text-label">${this.label}</span>`;
      }
      return x`
      <button
        @click="${this.handleClick}"
        class="mdc-tab ${o10(classes)}"
        role="tab"
        aria-selected="false"
        tabindex="-1"
        @focus="${this.focus}"
        @blur="${this.handleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
        <span class="mdc-tab__content">
          ${iconTemplate}
          ${labelTemplate}
          ${this.isMinWidthIndicator ? this.renderIndicator() : ""}
        </span>
        ${this.isMinWidthIndicator ? "" : this.renderIndicator()}
        ${this.renderRipple()}
      </button>`;
    }
    renderIndicator() {
      return x`<mwc-tab-indicator
        .icon="${this.indicatorIcon}"
        .fade="${this.isFadingIndicator}"></mwc-tab-indicator>`;
    }
    // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
    /** @soyCompatible */
    renderRipple() {
      return this.shouldRenderRipple ? x`<mwc-ripple primary
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"></mwc-ripple>` : "";
    }
    createAdapter() {
      return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { setAttr: (attr, value) => this.mdcRoot.setAttribute(attr, value), activateIndicator: async (previousIndicatorClientRect) => {
        await this.tabIndicator.updateComplete;
        this.tabIndicator.activate(previousIndicatorClientRect);
      }, deactivateIndicator: async () => {
        await this.tabIndicator.updateComplete;
        this.tabIndicator.deactivate();
      }, notifyInteracted: () => this.dispatchEvent(new CustomEvent(foundation_default6.strings.INTERACTED_EVENT, {
        detail: { tabId: this.id },
        bubbles: true,
        composed: true,
        cancelable: true
      })), getOffsetLeft: () => this.offsetLeft, getOffsetWidth: () => this.mdcRoot.offsetWidth, getContentOffsetLeft: () => this._contentElement.offsetLeft, getContentOffsetWidth: () => this._contentElement.offsetWidth, focus: () => {
        if (this.initFocus) {
          this.initFocus = false;
        } else {
          this.mdcRoot.focus();
        }
      } });
    }
    activate(clientRect) {
      if (!clientRect) {
        this.initFocus = true;
      }
      if (this.mdcFoundation) {
        this.mdcFoundation.activate(clientRect);
        this.setActive(this.mdcFoundation.isActive());
      } else {
        this.updateComplete.then(() => {
          this.mdcFoundation.activate(clientRect);
          this.setActive(this.mdcFoundation.isActive());
        });
      }
    }
    deactivate() {
      this.mdcFoundation.deactivate();
      this.setActive(this.mdcFoundation.isActive());
    }
    setActive(newValue) {
      const oldValue = this.active;
      if (oldValue !== newValue) {
        this._active = newValue;
        this.requestUpdate("active", oldValue);
      }
    }
    computeDimensions() {
      return this.mdcFoundation.computeDimensions();
    }
    computeIndicatorClientRect() {
      return this.tabIndicator.computeContentClientRect();
    }
    // NOTE: needed only for ShadyDOM where delegatesFocus is not implemented
    focus() {
      this.mdcRoot.focus();
      this.handleFocus();
    }
    handleClick() {
      this.handleFocus();
      this.mdcFoundation.handleClick();
    }
    handleFocus() {
      this.handleRippleFocus();
    }
    handleBlur() {
      this.handleRippleBlur();
    }
    handleRippleMouseDown(event) {
      const onUp = () => {
        window.removeEventListener("mouseup", onUp);
        this.handleRippleDeactivate();
      };
      window.addEventListener("mouseup", onUp);
      this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
      this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
      this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
      this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
      this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
      this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
      this.rippleHandlers.endFocus();
    }
    get isRippleActive() {
      var _a3;
      return ((_a3 = this.rippleElement) === null || _a3 === void 0 ? void 0 : _a3.isActive) || false;
    }
  };
  TabBase.shadowRootOptions = { mode: "open", delegatesFocus: true };
  __decorate([
    i4(".mdc-tab")
  ], TabBase.prototype, "mdcRoot", void 0);
  __decorate([
    i4("mwc-tab-indicator")
  ], TabBase.prototype, "tabIndicator", void 0);
  __decorate([
    e5()
  ], TabBase.prototype, "label", void 0);
  __decorate([
    e5()
  ], TabBase.prototype, "icon", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TabBase.prototype, "hasImageIcon", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TabBase.prototype, "isFadingIndicator", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TabBase.prototype, "minWidth", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TabBase.prototype, "isMinWidthIndicator", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true, attribute: "active" })
  ], TabBase.prototype, "active", null);
  __decorate([
    e5()
  ], TabBase.prototype, "indicatorIcon", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TabBase.prototype, "stacked", void 0);
  __decorate([
    observer(async function(value) {
      await this.updateComplete;
      this.mdcFoundation.setFocusOnActivate(value);
    }),
    e5({ type: Boolean })
  ], TabBase.prototype, "focusOnActivate", void 0);
  __decorate([
    i4(".mdc-tab__content")
  ], TabBase.prototype, "_contentElement", void 0);
  __decorate([
    t3()
  ], TabBase.prototype, "shouldRenderRipple", void 0);
  __decorate([
    t3()
  ], TabBase.prototype, "useStateLayerCustomProperties", void 0);
  __decorate([
    e7("mwc-ripple")
  ], TabBase.prototype, "ripple", void 0);
  __decorate([
    e6({ passive: true })
  ], TabBase.prototype, "handleRippleTouchStart", null);

  // bundle/node_modules/@material/mwc-tab/mwc-tab.css.js
  var styles13 = i`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative}.mdc-tab .mdc-tab__text-label{color:rgba(0, 0, 0, 0.6)}.mdc-tab .mdc-tab__icon{color:rgba(0, 0, 0, 0.54);fill:currentColor}.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:8px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + -12px );width:calc( 100% + -8px );margin-top:-2px;z-index:2}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring::after{content:"";border:2px solid transparent;border-radius:10px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring::after{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:8px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + -8px );width:calc( 100% + -8px );z-index:2}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring::after{content:"";border:2px solid transparent;border-radius:10px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring::after{border-color:CanvasText}}.mdc-tab__content{position:relative}.mdc-tab__icon{width:24px;height:24px;font-size:24px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab{background:none}.mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-tab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab .mdc-tab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-tab .mdc-tab__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab.mdc-ripple-upgraded--unbounded .mdc-tab__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab.mdc-ripple-upgraded--foreground-activation .mdc-tab__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab.mdc-ripple-upgraded--foreground-deactivation .mdc-tab__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-tab:hover .mdc-tab__ripple::before,.mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple::before,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple::after{transition:opacity 150ms linear}.mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;will-change:transform,opacity}:host{outline:none;flex:1 0 auto;display:flex;justify-content:center;-webkit-tap-highlight-color:transparent}.mdc-tab{height:var(--mdc-tab-height, 48px);margin-left:0;margin-right:0;padding-right:var(--mdc-tab-horizontal-padding, 24px);padding-left:var(--mdc-tab-horizontal-padding, 24px)}.mdc-tab--stacked{height:var(--mdc-tab-stacked-height, 72px)}.mdc-tab::-moz-focus-inner{border:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mdc-tab-text-label-color-default, rgba(0, 0, 0, 0.6))}.mdc-tab:not(.mdc-tab--active) .mdc-tab__icon{color:var(--mdc-tab-color-default, rgba(0, 0, 0, 0.54))}`;

  // bundle/node_modules/@material/mwc-tab/mwc-tab.js
  var Tab = class Tab2 extends TabBase {
  };
  Tab.styles = [styles13];
  Tab = __decorate([
    e4("mwc-tab")
  ], Tab);

  // bundle/node_modules/@material/tab-scroller/constants.js
  var cssClasses11 = {
    ANIMATING: "mdc-tab-scroller--animating",
    SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
    SCROLL_TEST: "mdc-tab-scroller__test"
  };
  var strings9 = {
    AREA_SELECTOR: ".mdc-tab-scroller__scroll-area",
    CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content"
  };

  // bundle/node_modules/@material/tab-scroller/rtl-scroller.js
  var MDCTabScrollerRTL = (
    /** @class */
    function() {
      function MDCTabScrollerRTL2(adapter) {
        this.adapter = adapter;
      }
      return MDCTabScrollerRTL2;
    }()
  );

  // bundle/node_modules/@material/tab-scroller/rtl-default-scroller.js
  var MDCTabScrollerRTLDefault = (
    /** @class */
    function(_super) {
      __extends(MDCTabScrollerRTLDefault2, _super);
      function MDCTabScrollerRTLDefault2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      MDCTabScrollerRTLDefault2.prototype.getScrollPositionRTL = function() {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var right = this.calculateScrollEdges().right;
        return Math.round(right - currentScrollLeft);
      };
      MDCTabScrollerRTLDefault2.prototype.scrollToRTL = function(scrollX) {
        var edges = this.calculateScrollEdges();
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(edges.right - scrollX);
        return {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        };
      };
      MDCTabScrollerRTLDefault2.prototype.incrementScrollRTL = function(scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(currentScrollLeft - scrollX);
        return {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        };
      };
      MDCTabScrollerRTLDefault2.prototype.getAnimatingScrollPosition = function(scrollX) {
        return scrollX;
      };
      MDCTabScrollerRTLDefault2.prototype.calculateScrollEdges = function() {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
          left: 0,
          right: contentWidth - rootWidth
        };
      };
      MDCTabScrollerRTLDefault2.prototype.clampScrollValue = function(scrollX) {
        var edges = this.calculateScrollEdges();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
      };
      return MDCTabScrollerRTLDefault2;
    }(MDCTabScrollerRTL)
  );

  // bundle/node_modules/@material/tab-scroller/rtl-negative-scroller.js
  var MDCTabScrollerRTLNegative = (
    /** @class */
    function(_super) {
      __extends(MDCTabScrollerRTLNegative2, _super);
      function MDCTabScrollerRTLNegative2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      MDCTabScrollerRTLNegative2.prototype.getScrollPositionRTL = function(translateX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        return Math.round(translateX - currentScrollLeft);
      };
      MDCTabScrollerRTLNegative2.prototype.scrollToRTL = function(scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(-scrollX);
        return {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        };
      };
      MDCTabScrollerRTLNegative2.prototype.incrementScrollRTL = function(scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(currentScrollLeft - scrollX);
        return {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: clampedScrollLeft - currentScrollLeft
        };
      };
      MDCTabScrollerRTLNegative2.prototype.getAnimatingScrollPosition = function(scrollX, translateX) {
        return scrollX - translateX;
      };
      MDCTabScrollerRTLNegative2.prototype.calculateScrollEdges = function() {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
          left: rootWidth - contentWidth,
          right: 0
        };
      };
      MDCTabScrollerRTLNegative2.prototype.clampScrollValue = function(scrollX) {
        var edges = this.calculateScrollEdges();
        return Math.max(Math.min(edges.right, scrollX), edges.left);
      };
      return MDCTabScrollerRTLNegative2;
    }(MDCTabScrollerRTL)
  );

  // bundle/node_modules/@material/tab-scroller/rtl-reverse-scroller.js
  var MDCTabScrollerRTLReverse = (
    /** @class */
    function(_super) {
      __extends(MDCTabScrollerRTLReverse2, _super);
      function MDCTabScrollerRTLReverse2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      MDCTabScrollerRTLReverse2.prototype.getScrollPositionRTL = function(translateX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        return Math.round(currentScrollLeft - translateX);
      };
      MDCTabScrollerRTLReverse2.prototype.scrollToRTL = function(scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(scrollX);
        return {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: currentScrollLeft - clampedScrollLeft
        };
      };
      MDCTabScrollerRTLReverse2.prototype.incrementScrollRTL = function(scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue(currentScrollLeft + scrollX);
        return {
          finalScrollPosition: clampedScrollLeft,
          scrollDelta: currentScrollLeft - clampedScrollLeft
        };
      };
      MDCTabScrollerRTLReverse2.prototype.getAnimatingScrollPosition = function(scrollX, translateX) {
        return scrollX + translateX;
      };
      MDCTabScrollerRTLReverse2.prototype.calculateScrollEdges = function() {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
          left: contentWidth - rootWidth,
          right: 0
        };
      };
      MDCTabScrollerRTLReverse2.prototype.clampScrollValue = function(scrollX) {
        var edges = this.calculateScrollEdges();
        return Math.min(Math.max(edges.right, scrollX), edges.left);
      };
      return MDCTabScrollerRTLReverse2;
    }(MDCTabScrollerRTL)
  );

  // bundle/node_modules/@material/tab-scroller/foundation.js
  var MDCTabScrollerFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCTabScrollerFoundation2, _super);
      function MDCTabScrollerFoundation2(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCTabScrollerFoundation2.defaultAdapter), adapter)) || this;
        _this.isAnimating = false;
        return _this;
      }
      Object.defineProperty(MDCTabScrollerFoundation2, "cssClasses", {
        get: function() {
          return cssClasses11;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTabScrollerFoundation2, "strings", {
        get: function() {
          return strings9;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTabScrollerFoundation2, "defaultAdapter", {
        get: function() {
          return {
            eventTargetMatchesSelector: function() {
              return false;
            },
            addClass: function() {
              return void 0;
            },
            removeClass: function() {
              return void 0;
            },
            addScrollAreaClass: function() {
              return void 0;
            },
            setScrollAreaStyleProperty: function() {
              return void 0;
            },
            setScrollContentStyleProperty: function() {
              return void 0;
            },
            getScrollContentStyleValue: function() {
              return "";
            },
            setScrollAreaScrollLeft: function() {
              return void 0;
            },
            getScrollAreaScrollLeft: function() {
              return 0;
            },
            getScrollContentOffsetWidth: function() {
              return 0;
            },
            getScrollAreaOffsetWidth: function() {
              return 0;
            },
            computeScrollAreaClientRect: function() {
              return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
            },
            computeScrollContentClientRect: function() {
              return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
            },
            computeHorizontalScrollbarHeight: function() {
              return 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCTabScrollerFoundation2.prototype.init = function() {
        var horizontalScrollbarHeight = this.adapter.computeHorizontalScrollbarHeight();
        this.adapter.setScrollAreaStyleProperty("margin-bottom", -horizontalScrollbarHeight + "px");
        this.adapter.addScrollAreaClass(MDCTabScrollerFoundation2.cssClasses.SCROLL_AREA_SCROLL);
      };
      MDCTabScrollerFoundation2.prototype.getScrollPosition = function() {
        if (this.isRTL()) {
          return this.computeCurrentScrollPositionRTL();
        }
        var currentTranslateX = this.calculateCurrentTranslateX();
        var scrollLeft = this.adapter.getScrollAreaScrollLeft();
        return scrollLeft - currentTranslateX;
      };
      MDCTabScrollerFoundation2.prototype.handleInteraction = function() {
        if (!this.isAnimating) {
          return;
        }
        this.stopScrollAnimation();
      };
      MDCTabScrollerFoundation2.prototype.handleTransitionEnd = function(evt) {
        var evtTarget = evt.target;
        if (!this.isAnimating || !this.adapter.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation2.strings.CONTENT_SELECTOR)) {
          return;
        }
        this.isAnimating = false;
        this.adapter.removeClass(MDCTabScrollerFoundation2.cssClasses.ANIMATING);
      };
      MDCTabScrollerFoundation2.prototype.incrementScroll = function(scrollXIncrement) {
        if (scrollXIncrement === 0) {
          return;
        }
        this.animate(this.getIncrementScrollOperation(scrollXIncrement));
      };
      MDCTabScrollerFoundation2.prototype.incrementScrollImmediate = function(scrollXIncrement) {
        if (scrollXIncrement === 0) {
          return;
        }
        var operation = this.getIncrementScrollOperation(scrollXIncrement);
        if (operation.scrollDelta === 0) {
          return;
        }
        this.stopScrollAnimation();
        this.adapter.setScrollAreaScrollLeft(operation.finalScrollPosition);
      };
      MDCTabScrollerFoundation2.prototype.scrollTo = function(scrollX) {
        if (this.isRTL()) {
          this.scrollToImplRTL(scrollX);
          return;
        }
        this.scrollToImpl(scrollX);
      };
      MDCTabScrollerFoundation2.prototype.getRTLScroller = function() {
        if (!this.rtlScrollerInstance) {
          this.rtlScrollerInstance = this.rtlScrollerFactory();
        }
        return this.rtlScrollerInstance;
      };
      MDCTabScrollerFoundation2.prototype.calculateCurrentTranslateX = function() {
        var transformValue = this.adapter.getScrollContentStyleValue("transform");
        if (transformValue === "none") {
          return 0;
        }
        var match = /\((.+?)\)/.exec(transformValue);
        if (!match) {
          return 0;
        }
        var matrixParams = match[1];
        var _a3 = __read(matrixParams.split(","), 6), a4 = _a3[0], b3 = _a3[1], c6 = _a3[2], d4 = _a3[3], tx = _a3[4], ty = _a3[5];
        return parseFloat(tx);
      };
      MDCTabScrollerFoundation2.prototype.clampScrollValue = function(scrollX) {
        var edges = this.calculateScrollEdges();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
      };
      MDCTabScrollerFoundation2.prototype.computeCurrentScrollPositionRTL = function() {
        var translateX = this.calculateCurrentTranslateX();
        return this.getRTLScroller().getScrollPositionRTL(translateX);
      };
      MDCTabScrollerFoundation2.prototype.calculateScrollEdges = function() {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
          left: 0,
          right: contentWidth - rootWidth
        };
      };
      MDCTabScrollerFoundation2.prototype.scrollToImpl = function(scrollX) {
        var currentScrollX = this.getScrollPosition();
        var safeScrollX = this.clampScrollValue(scrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        this.animate({
          finalScrollPosition: safeScrollX,
          scrollDelta
        });
      };
      MDCTabScrollerFoundation2.prototype.scrollToImplRTL = function(scrollX) {
        var animation = this.getRTLScroller().scrollToRTL(scrollX);
        this.animate(animation);
      };
      MDCTabScrollerFoundation2.prototype.getIncrementScrollOperation = function(scrollX) {
        if (this.isRTL()) {
          return this.getRTLScroller().incrementScrollRTL(scrollX);
        }
        var currentScrollX = this.getScrollPosition();
        var targetScrollX = scrollX + currentScrollX;
        var safeScrollX = this.clampScrollValue(targetScrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        return {
          finalScrollPosition: safeScrollX,
          scrollDelta
        };
      };
      MDCTabScrollerFoundation2.prototype.animate = function(animation) {
        var _this = this;
        if (animation.scrollDelta === 0) {
          return;
        }
        this.stopScrollAnimation();
        this.adapter.setScrollAreaScrollLeft(animation.finalScrollPosition);
        this.adapter.setScrollContentStyleProperty("transform", "translateX(" + animation.scrollDelta + "px)");
        this.adapter.computeScrollAreaClientRect();
        requestAnimationFrame(function() {
          _this.adapter.addClass(MDCTabScrollerFoundation2.cssClasses.ANIMATING);
          _this.adapter.setScrollContentStyleProperty("transform", "none");
        });
        this.isAnimating = true;
      };
      MDCTabScrollerFoundation2.prototype.stopScrollAnimation = function() {
        this.isAnimating = false;
        var currentScrollPosition = this.getAnimatingScrollPosition();
        this.adapter.removeClass(MDCTabScrollerFoundation2.cssClasses.ANIMATING);
        this.adapter.setScrollContentStyleProperty("transform", "translateX(0px)");
        this.adapter.setScrollAreaScrollLeft(currentScrollPosition);
      };
      MDCTabScrollerFoundation2.prototype.getAnimatingScrollPosition = function() {
        var currentTranslateX = this.calculateCurrentTranslateX();
        var scrollLeft = this.adapter.getScrollAreaScrollLeft();
        if (this.isRTL()) {
          return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
        }
        return scrollLeft - currentTranslateX;
      };
      MDCTabScrollerFoundation2.prototype.rtlScrollerFactory = function() {
        var initialScrollLeft = this.adapter.getScrollAreaScrollLeft();
        this.adapter.setScrollAreaScrollLeft(initialScrollLeft - 1);
        var newScrollLeft = this.adapter.getScrollAreaScrollLeft();
        if (newScrollLeft < 0) {
          this.adapter.setScrollAreaScrollLeft(initialScrollLeft);
          return new MDCTabScrollerRTLNegative(this.adapter);
        }
        var rootClientRect = this.adapter.computeScrollAreaClientRect();
        var contentClientRect = this.adapter.computeScrollContentClientRect();
        var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
        this.adapter.setScrollAreaScrollLeft(initialScrollLeft);
        if (rightEdgeDelta === newScrollLeft) {
          return new MDCTabScrollerRTLReverse(this.adapter);
        }
        return new MDCTabScrollerRTLDefault(this.adapter);
      };
      MDCTabScrollerFoundation2.prototype.isRTL = function() {
        return this.adapter.getScrollContentStyleValue("direction") === "rtl";
      };
      return MDCTabScrollerFoundation2;
    }(MDCFoundation)
  );
  var foundation_default7 = MDCTabScrollerFoundation;

  // bundle/node_modules/@material/mwc-tab-scroller/mwc-tab-scroller-base.js
  var TabScrollerBase = class extends BaseElement {
    constructor() {
      super(...arguments);
      this.mdcFoundationClass = foundation_default7;
      this._scrollbarHeight = -1;
    }
    _handleInteraction() {
      this.mdcFoundation.handleInteraction();
    }
    _handleTransitionEnd(e12) {
      this.mdcFoundation.handleTransitionEnd(e12);
    }
    render() {
      return x`
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area"
            @wheel="${this._handleInteraction}"
            @touchstart="${this._handleInteraction}"
            @pointerdown="${this._handleInteraction}"
            @mousedown="${this._handleInteraction}"
            @keydown="${this._handleInteraction}"
            @transitionend="${this._handleTransitionEnd}">
          <div class="mdc-tab-scroller__scroll-content"><slot></slot></div>
        </div>
      </div>
      `;
    }
    createAdapter() {
      return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { eventTargetMatchesSelector: (evtTarget, selector) => matches(evtTarget, selector), addScrollAreaClass: (className) => this.scrollAreaElement.classList.add(className), setScrollAreaStyleProperty: (prop, value) => this.scrollAreaElement.style.setProperty(prop, value), setScrollContentStyleProperty: (prop, value) => this.scrollContentElement.style.setProperty(prop, value), getScrollContentStyleValue: (propName) => window.getComputedStyle(this.scrollContentElement).getPropertyValue(propName), setScrollAreaScrollLeft: (scrollX) => this.scrollAreaElement.scrollLeft = scrollX, getScrollAreaScrollLeft: () => this.scrollAreaElement.scrollLeft, getScrollContentOffsetWidth: () => this.scrollContentElement.offsetWidth, getScrollAreaOffsetWidth: () => this.scrollAreaElement.offsetWidth, computeScrollAreaClientRect: () => this.scrollAreaElement.getBoundingClientRect(), computeScrollContentClientRect: () => this.scrollContentElement.getBoundingClientRect(), computeHorizontalScrollbarHeight: () => {
        if (this._scrollbarHeight === -1) {
          this.scrollAreaElement.style.overflowX = "scroll";
          this._scrollbarHeight = this.scrollAreaElement.offsetHeight - this.scrollAreaElement.clientHeight;
          this.scrollAreaElement.style.overflowX = "";
        }
        return this._scrollbarHeight;
      } });
    }
    /**
     * Returns the current visual scroll position
     * @return {number}
     */
    getScrollPosition() {
      return this.mdcFoundation.getScrollPosition();
    }
    /**
     * Returns the width of the scroll content
     * @return {number}
     */
    getScrollContentWidth() {
      return this.scrollContentElement.offsetWidth;
    }
    /**
     * Increments the scroll value by the given amount
     * @param {number} scrollXIncrement The pixel value by which to increment the
     *     scroll value
     */
    incrementScrollPosition(scrollXIncrement) {
      this.mdcFoundation.incrementScroll(scrollXIncrement);
    }
    /**
     * Scrolls to the given pixel position
     * @param {number} scrollX The pixel value to scroll to
     */
    scrollToPosition(scrollX) {
      this.mdcFoundation.scrollTo(scrollX);
    }
  };
  __decorate([
    i4(".mdc-tab-scroller")
  ], TabScrollerBase.prototype, "mdcRoot", void 0);
  __decorate([
    i4(".mdc-tab-scroller__scroll-area")
  ], TabScrollerBase.prototype, "scrollAreaElement", void 0);
  __decorate([
    i4(".mdc-tab-scroller__scroll-content")
  ], TabScrollerBase.prototype, "scrollContentElement", void 0);
  __decorate([
    e6({ passive: true })
  ], TabScrollerBase.prototype, "_handleInteraction", null);

  // bundle/node_modules/@material/mwc-tab-scroller/mwc-tab-scroller.css.js
  var styles14 = i`.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}:host{display:flex}.mdc-tab-scroller{flex:1}`;

  // bundle/node_modules/@material/mwc-tab-scroller/mwc-tab-scroller.js
  var TabScroller = class TabScroller2 extends TabScrollerBase {
  };
  TabScroller.styles = [styles14];
  TabScroller = __decorate([
    e4("mwc-tab-scroller")
  ], TabScroller);

  // bundle/node_modules/@material/tab-bar/constants.js
  var strings10 = {
    ARROW_LEFT_KEY: "ArrowLeft",
    ARROW_RIGHT_KEY: "ArrowRight",
    END_KEY: "End",
    ENTER_KEY: "Enter",
    HOME_KEY: "Home",
    SPACE_KEY: "Space",
    TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
    TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
    TAB_SELECTOR: ".mdc-tab"
  };
  var numbers5 = {
    ARROW_LEFT_KEYCODE: 37,
    ARROW_RIGHT_KEYCODE: 39,
    END_KEYCODE: 35,
    ENTER_KEYCODE: 13,
    EXTRA_SCROLL_AMOUNT: 20,
    HOME_KEYCODE: 36,
    SPACE_KEYCODE: 32
  };

  // bundle/node_modules/@material/tab-bar/foundation.js
  var ACCEPTABLE_KEYS = /* @__PURE__ */ new Set();
  ACCEPTABLE_KEYS.add(strings10.ARROW_LEFT_KEY);
  ACCEPTABLE_KEYS.add(strings10.ARROW_RIGHT_KEY);
  ACCEPTABLE_KEYS.add(strings10.END_KEY);
  ACCEPTABLE_KEYS.add(strings10.HOME_KEY);
  ACCEPTABLE_KEYS.add(strings10.ENTER_KEY);
  ACCEPTABLE_KEYS.add(strings10.SPACE_KEY);
  var KEYCODE_MAP = /* @__PURE__ */ new Map();
  KEYCODE_MAP.set(numbers5.ARROW_LEFT_KEYCODE, strings10.ARROW_LEFT_KEY);
  KEYCODE_MAP.set(numbers5.ARROW_RIGHT_KEYCODE, strings10.ARROW_RIGHT_KEY);
  KEYCODE_MAP.set(numbers5.END_KEYCODE, strings10.END_KEY);
  KEYCODE_MAP.set(numbers5.HOME_KEYCODE, strings10.HOME_KEY);
  KEYCODE_MAP.set(numbers5.ENTER_KEYCODE, strings10.ENTER_KEY);
  KEYCODE_MAP.set(numbers5.SPACE_KEYCODE, strings10.SPACE_KEY);
  var MDCTabBarFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCTabBarFoundation2, _super);
      function MDCTabBarFoundation2(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCTabBarFoundation2.defaultAdapter), adapter)) || this;
        _this.useAutomaticActivation = false;
        return _this;
      }
      Object.defineProperty(MDCTabBarFoundation2, "strings", {
        get: function() {
          return strings10;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTabBarFoundation2, "numbers", {
        get: function() {
          return numbers5;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTabBarFoundation2, "defaultAdapter", {
        get: function() {
          return {
            scrollTo: function() {
              return void 0;
            },
            incrementScroll: function() {
              return void 0;
            },
            getScrollPosition: function() {
              return 0;
            },
            getScrollContentWidth: function() {
              return 0;
            },
            getOffsetWidth: function() {
              return 0;
            },
            isRTL: function() {
              return false;
            },
            setActiveTab: function() {
              return void 0;
            },
            activateTabAtIndex: function() {
              return void 0;
            },
            deactivateTabAtIndex: function() {
              return void 0;
            },
            focusTabAtIndex: function() {
              return void 0;
            },
            getTabIndicatorClientRectAtIndex: function() {
              return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
            },
            getTabDimensionsAtIndex: function() {
              return { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
            },
            getPreviousActiveTabIndex: function() {
              return -1;
            },
            getFocusedTabIndex: function() {
              return -1;
            },
            getIndexOfTabById: function() {
              return -1;
            },
            getTabListLength: function() {
              return 0;
            },
            notifyTabActivated: function() {
              return void 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCTabBarFoundation2.prototype.setUseAutomaticActivation = function(useAutomaticActivation) {
        this.useAutomaticActivation = useAutomaticActivation;
      };
      MDCTabBarFoundation2.prototype.activateTab = function(index) {
        var previousActiveIndex = this.adapter.getPreviousActiveTabIndex();
        if (!this.indexIsInRange(index) || index === previousActiveIndex) {
          return;
        }
        var previousClientRect;
        if (previousActiveIndex !== -1) {
          this.adapter.deactivateTabAtIndex(previousActiveIndex);
          previousClientRect = this.adapter.getTabIndicatorClientRectAtIndex(previousActiveIndex);
        }
        this.adapter.activateTabAtIndex(index, previousClientRect);
        this.scrollIntoView(index);
        this.adapter.notifyTabActivated(index);
      };
      MDCTabBarFoundation2.prototype.handleKeyDown = function(evt) {
        var key = this.getKeyFromEvent(evt);
        if (key === void 0) {
          return;
        }
        if (!this.isActivationKey(key)) {
          evt.preventDefault();
        }
        if (this.useAutomaticActivation) {
          if (this.isActivationKey(key)) {
            return;
          }
          var index = this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(), key);
          this.adapter.setActiveTab(index);
          this.scrollIntoView(index);
        } else {
          var focusedTabIndex = this.adapter.getFocusedTabIndex();
          if (this.isActivationKey(key)) {
            this.adapter.setActiveTab(focusedTabIndex);
          } else {
            var index = this.determineTargetFromKey(focusedTabIndex, key);
            this.adapter.focusTabAtIndex(index);
            this.scrollIntoView(index);
          }
        }
      };
      MDCTabBarFoundation2.prototype.handleTabInteraction = function(evt) {
        this.adapter.setActiveTab(this.adapter.getIndexOfTabById(evt.detail.tabId));
      };
      MDCTabBarFoundation2.prototype.scrollIntoView = function(index) {
        if (!this.indexIsInRange(index)) {
          return;
        }
        if (index === 0) {
          this.adapter.scrollTo(0);
          return;
        }
        if (index === this.adapter.getTabListLength() - 1) {
          this.adapter.scrollTo(this.adapter.getScrollContentWidth());
          return;
        }
        if (this.isRTL()) {
          this.scrollIntoViewImplRTL(index);
          return;
        }
        this.scrollIntoViewImpl(index);
      };
      MDCTabBarFoundation2.prototype.determineTargetFromKey = function(origin, key) {
        var isRTL = this.isRTL();
        var maxIndex = this.adapter.getTabListLength() - 1;
        var shouldGoToEnd = key === strings10.END_KEY;
        var shouldDecrement = key === strings10.ARROW_LEFT_KEY && !isRTL || key === strings10.ARROW_RIGHT_KEY && isRTL;
        var shouldIncrement = key === strings10.ARROW_RIGHT_KEY && !isRTL || key === strings10.ARROW_LEFT_KEY && isRTL;
        var index = origin;
        if (shouldGoToEnd) {
          index = maxIndex;
        } else if (shouldDecrement) {
          index -= 1;
        } else if (shouldIncrement) {
          index += 1;
        } else {
          index = 0;
        }
        if (index < 0) {
          index = maxIndex;
        } else if (index > maxIndex) {
          index = 0;
        }
        return index;
      };
      MDCTabBarFoundation2.prototype.calculateScrollIncrement = function(index, nextIndex, scrollPosition, barWidth) {
        var nextTabDimensions = this.adapter.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
        var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
        var leftIncrement = relativeContentRight - numbers5.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft + numbers5.EXTRA_SCROLL_AMOUNT;
        if (nextIndex < index) {
          return Math.min(leftIncrement, 0);
        }
        return Math.max(rightIncrement, 0);
      };
      MDCTabBarFoundation2.prototype.calculateScrollIncrementRTL = function(index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
        var nextTabDimensions = this.adapter.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
        var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
        var leftIncrement = relativeContentRight + numbers5.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft - numbers5.EXTRA_SCROLL_AMOUNT;
        if (nextIndex > index) {
          return Math.max(leftIncrement, 0);
        }
        return Math.min(rightIncrement, 0);
      };
      MDCTabBarFoundation2.prototype.findAdjacentTabIndexClosestToEdge = function(index, tabDimensions, scrollPosition, barWidth) {
        var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
        var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
        var relativeRootDelta = relativeRootLeft + relativeRootRight;
        var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
        var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;
        if (leftEdgeIsCloser) {
          return index - 1;
        }
        if (rightEdgeIsCloser) {
          return index + 1;
        }
        return -1;
      };
      MDCTabBarFoundation2.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
        var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
        var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
        var rootDelta = rootLeft + rootRight;
        var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
        var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;
        if (leftEdgeIsCloser) {
          return index + 1;
        }
        if (rightEdgeIsCloser) {
          return index - 1;
        }
        return -1;
      };
      MDCTabBarFoundation2.prototype.getKeyFromEvent = function(evt) {
        if (ACCEPTABLE_KEYS.has(evt.key)) {
          return evt.key;
        }
        return KEYCODE_MAP.get(evt.keyCode);
      };
      MDCTabBarFoundation2.prototype.isActivationKey = function(key) {
        return key === strings10.SPACE_KEY || key === strings10.ENTER_KEY;
      };
      MDCTabBarFoundation2.prototype.indexIsInRange = function(index) {
        return index >= 0 && index < this.adapter.getTabListLength();
      };
      MDCTabBarFoundation2.prototype.isRTL = function() {
        return this.adapter.isRTL();
      };
      MDCTabBarFoundation2.prototype.scrollIntoViewImpl = function(index) {
        var scrollPosition = this.adapter.getScrollPosition();
        var barWidth = this.adapter.getOffsetWidth();
        var tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
        var nextIndex = this.findAdjacentTabIndexClosestToEdge(index, tabDimensions, scrollPosition, barWidth);
        if (!this.indexIsInRange(nextIndex)) {
          return;
        }
        var scrollIncrement = this.calculateScrollIncrement(index, nextIndex, scrollPosition, barWidth);
        this.adapter.incrementScroll(scrollIncrement);
      };
      MDCTabBarFoundation2.prototype.scrollIntoViewImplRTL = function(index) {
        var scrollPosition = this.adapter.getScrollPosition();
        var barWidth = this.adapter.getOffsetWidth();
        var tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
        var scrollWidth = this.adapter.getScrollContentWidth();
        var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL(index, tabDimensions, scrollPosition, barWidth, scrollWidth);
        if (!this.indexIsInRange(nextIndex)) {
          return;
        }
        var scrollIncrement = this.calculateScrollIncrementRTL(index, nextIndex, scrollPosition, barWidth, scrollWidth);
        this.adapter.incrementScroll(scrollIncrement);
      };
      return MDCTabBarFoundation2;
    }(MDCFoundation)
  );
  var foundation_default8 = MDCTabBarFoundation;

  // bundle/node_modules/@material/mwc-tab-bar/mwc-tab-bar-base.js
  var TabBarBase = class extends BaseElement {
    constructor() {
      super(...arguments);
      this.mdcFoundationClass = foundation_default8;
      this.activeIndex = 0;
      this._previousActiveIndex = -1;
    }
    _handleTabInteraction(e12) {
      this.mdcFoundation.handleTabInteraction(e12);
    }
    _handleKeydown(e12) {
      this.mdcFoundation.handleKeyDown(e12);
    }
    // TODO(sorvell): can scroller be optional for perf?
    render() {
      return x`
      <div class="mdc-tab-bar" role="tablist"
          @MDCTab:interacted="${this._handleTabInteraction}"
          @keydown="${this._handleKeydown}">
        <mwc-tab-scroller><slot></slot></mwc-tab-scroller>
      </div>
      `;
    }
    // TODO(sorvell): probably want to memoize this and use a `slotChange` event
    _getTabs() {
      return this.tabsSlot.assignedNodes({ flatten: true }).filter((e12) => e12 instanceof TabBase);
    }
    _getTab(index) {
      return this._getTabs()[index];
    }
    createAdapter() {
      return {
        scrollTo: (scrollX) => this.scrollerElement.scrollToPosition(scrollX),
        incrementScroll: (scrollXIncrement) => this.scrollerElement.incrementScrollPosition(scrollXIncrement),
        getScrollPosition: () => this.scrollerElement.getScrollPosition(),
        getScrollContentWidth: () => this.scrollerElement.getScrollContentWidth(),
        getOffsetWidth: () => this.mdcRoot.offsetWidth,
        isRTL: () => window.getComputedStyle(this.mdcRoot).getPropertyValue("direction") === "rtl",
        setActiveTab: (index) => this.mdcFoundation.activateTab(index),
        activateTabAtIndex: (index, clientRect) => {
          const tab = this._getTab(index);
          if (tab !== void 0) {
            tab.activate(clientRect);
          }
          this._previousActiveIndex = index;
        },
        deactivateTabAtIndex: (index) => {
          const tab = this._getTab(index);
          if (tab !== void 0) {
            tab.deactivate();
          }
        },
        focusTabAtIndex: (index) => {
          const tab = this._getTab(index);
          if (tab !== void 0) {
            tab.focus();
          }
        },
        // TODO(sorvell): tab may not be able to synchronously answer
        // `computeIndicatorClientRect` if an update is pending or it has not yet
        // updated. If this is necessary, LitElement may need a `forceUpdate`
        // method.
        getTabIndicatorClientRectAtIndex: (index) => {
          const tab = this._getTab(index);
          return tab !== void 0 ? tab.computeIndicatorClientRect() : new DOMRect();
        },
        getTabDimensionsAtIndex: (index) => {
          const tab = this._getTab(index);
          return tab !== void 0 ? tab.computeDimensions() : { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
        },
        getPreviousActiveTabIndex: () => {
          return this._previousActiveIndex;
        },
        getFocusedTabIndex: () => {
          const tabElements = this._getTabs();
          const activeElement = this.getRootNode().activeElement;
          return tabElements.indexOf(activeElement);
        },
        getIndexOfTabById: (id) => {
          const tabElements = this._getTabs();
          for (let i10 = 0; i10 < tabElements.length; i10++) {
            if (tabElements[i10].id === id) {
              return i10;
            }
          }
          return -1;
        },
        getTabListLength: () => this._getTabs().length,
        notifyTabActivated: (index) => {
          this.activeIndex = index;
          this.dispatchEvent(new CustomEvent(foundation_default8.strings.TAB_ACTIVATED_EVENT, { detail: { index }, bubbles: true, cancelable: true }));
        }
      };
    }
    firstUpdated() {
    }
    async getUpdateComplete() {
      const result = await super.getUpdateComplete();
      await this.scrollerElement.updateComplete;
      if (this.mdcFoundation === void 0) {
        this.createFoundation();
      }
      return result;
    }
    scrollIndexIntoView(index) {
      this.mdcFoundation.scrollIntoView(index);
    }
  };
  __decorate([
    i4(".mdc-tab-bar")
  ], TabBarBase.prototype, "mdcRoot", void 0);
  __decorate([
    i4("mwc-tab-scroller")
  ], TabBarBase.prototype, "scrollerElement", void 0);
  __decorate([
    i4("slot")
  ], TabBarBase.prototype, "tabsSlot", void 0);
  __decorate([
    observer(async function() {
      await this.updateComplete;
      if (this.activeIndex !== this._previousActiveIndex) {
        this.mdcFoundation.activateTab(this.activeIndex);
      }
    }),
    e5({ type: Number })
  ], TabBarBase.prototype, "activeIndex", void 0);

  // bundle/node_modules/@material/mwc-tab-bar/mwc-tab-bar.css.js
  var styles15 = i`.mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}:host{display:block}.mdc-tab-bar{flex:1}mwc-tab{--mdc-tab-height: 48px;--mdc-tab-stacked-height: 72px}`;

  // bundle/node_modules/@material/mwc-tab-bar/mwc-tab-bar.js
  var TabBar = class TabBar2 extends TabBarBase {
  };
  TabBar.styles = [styles15];
  TabBar = __decorate([
    e4("mwc-tab-bar")
  ], TabBar);

  // bundle/node_modules/@material/top-app-bar/constants.js
  var cssClasses12 = {
    FIXED_CLASS: "mdc-top-app-bar--fixed",
    FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
    SHORT_CLASS: "mdc-top-app-bar--short",
    SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
    SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
  };
  var numbers6 = {
    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
    MAX_TOP_APP_BAR_HEIGHT: 128
  };
  var strings11 = {
    ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
    NAVIGATION_EVENT: "MDCTopAppBar:nav",
    NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
    ROOT_SELECTOR: ".mdc-top-app-bar",
    TITLE_SELECTOR: ".mdc-top-app-bar__title"
  };

  // bundle/node_modules/@material/top-app-bar/foundation.js
  var MDCTopAppBarBaseFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCTopAppBarBaseFoundation2, _super);
      function MDCTopAppBarBaseFoundation2(adapter) {
        return _super.call(this, __assign(__assign({}, MDCTopAppBarBaseFoundation2.defaultAdapter), adapter)) || this;
      }
      Object.defineProperty(MDCTopAppBarBaseFoundation2, "strings", {
        get: function() {
          return strings11;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTopAppBarBaseFoundation2, "cssClasses", {
        get: function() {
          return cssClasses12;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTopAppBarBaseFoundation2, "numbers", {
        get: function() {
          return numbers6;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MDCTopAppBarBaseFoundation2, "defaultAdapter", {
        /**
         * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
         */
        get: function() {
          return {
            addClass: function() {
              return void 0;
            },
            removeClass: function() {
              return void 0;
            },
            hasClass: function() {
              return false;
            },
            setStyle: function() {
              return void 0;
            },
            getTopAppBarHeight: function() {
              return 0;
            },
            notifyNavigationIconClicked: function() {
              return void 0;
            },
            getViewportScrollY: function() {
              return 0;
            },
            getTotalActionItems: function() {
              return 0;
            }
          };
        },
        enumerable: false,
        configurable: true
      });
      MDCTopAppBarBaseFoundation2.prototype.handleTargetScroll = function() {
      };
      MDCTopAppBarBaseFoundation2.prototype.handleWindowResize = function() {
      };
      MDCTopAppBarBaseFoundation2.prototype.handleNavigationClick = function() {
        this.adapter.notifyNavigationIconClicked();
      };
      return MDCTopAppBarBaseFoundation2;
    }(MDCFoundation)
  );

  // bundle/node_modules/@material/top-app-bar/standard/foundation.js
  var INITIAL_VALUE = 0;
  var MDCTopAppBarFoundation = (
    /** @class */
    function(_super) {
      __extends(MDCTopAppBarFoundation2, _super);
      function MDCTopAppBarFoundation2(adapter) {
        var _this = _super.call(this, adapter) || this;
        _this.wasDocked = true;
        _this.isDockedShowing = true;
        _this.currentAppBarOffsetTop = 0;
        _this.isCurrentlyBeingResized = false;
        _this.resizeThrottleId = INITIAL_VALUE;
        _this.resizeDebounceId = INITIAL_VALUE;
        _this.lastScrollPosition = _this.adapter.getViewportScrollY();
        _this.topAppBarHeight = _this.adapter.getTopAppBarHeight();
        return _this;
      }
      MDCTopAppBarFoundation2.prototype.destroy = function() {
        _super.prototype.destroy.call(this);
        this.adapter.setStyle("top", "");
      };
      MDCTopAppBarFoundation2.prototype.handleTargetScroll = function() {
        var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
        var diff = currentScrollPosition - this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
        if (!this.isCurrentlyBeingResized) {
          this.currentAppBarOffsetTop -= diff;
          if (this.currentAppBarOffsetTop > 0) {
            this.currentAppBarOffsetTop = 0;
          } else if (Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight) {
            this.currentAppBarOffsetTop = -this.topAppBarHeight;
          }
          this.moveTopAppBar();
        }
      };
      MDCTopAppBarFoundation2.prototype.handleWindowResize = function() {
        var _this = this;
        if (!this.resizeThrottleId) {
          this.resizeThrottleId = setTimeout(function() {
            _this.resizeThrottleId = INITIAL_VALUE;
            _this.throttledResizeHandler();
          }, numbers6.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        }
        this.isCurrentlyBeingResized = true;
        if (this.resizeDebounceId) {
          clearTimeout(this.resizeDebounceId);
        }
        this.resizeDebounceId = setTimeout(function() {
          _this.handleTargetScroll();
          _this.isCurrentlyBeingResized = false;
          _this.resizeDebounceId = INITIAL_VALUE;
        }, numbers6.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
      };
      MDCTopAppBarFoundation2.prototype.checkForUpdate = function() {
        var offscreenBoundaryTop = -this.topAppBarHeight;
        var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop < 0;
        var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop > offscreenBoundaryTop;
        var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
        if (partiallyShowing) {
          this.wasDocked = false;
        } else {
          if (!this.wasDocked) {
            this.wasDocked = true;
            return true;
          } else if (this.isDockedShowing !== hasAnyPixelsOnscreen) {
            this.isDockedShowing = hasAnyPixelsOnscreen;
            return true;
          }
        }
        return partiallyShowing;
      };
      MDCTopAppBarFoundation2.prototype.moveTopAppBar = function() {
        if (this.checkForUpdate()) {
          var offset = this.currentAppBarOffsetTop;
          if (Math.abs(offset) >= this.topAppBarHeight) {
            offset = -numbers6.MAX_TOP_APP_BAR_HEIGHT;
          }
          this.adapter.setStyle("top", offset + "px");
        }
      };
      MDCTopAppBarFoundation2.prototype.throttledResizeHandler = function() {
        var currentHeight = this.adapter.getTopAppBarHeight();
        if (this.topAppBarHeight !== currentHeight) {
          this.wasDocked = false;
          this.currentAppBarOffsetTop -= this.topAppBarHeight - currentHeight;
          this.topAppBarHeight = currentHeight;
        }
        this.handleTargetScroll();
      };
      return MDCTopAppBarFoundation2;
    }(MDCTopAppBarBaseFoundation)
  );
  var foundation_default9 = MDCTopAppBarFoundation;

  // bundle/node_modules/@material/mwc-top-app-bar/mwc-top-app-bar-base-base.js
  var passiveEventOptionsIfSupported = supportsPassiveEventListener ? { passive: true } : void 0;
  var TopAppBarBaseBase = class extends BaseElement {
    constructor() {
      super(...arguments);
      this.centerTitle = false;
      this.handleTargetScroll = () => {
        this.mdcFoundation.handleTargetScroll();
      };
      this.handleNavigationClick = () => {
        this.mdcFoundation.handleNavigationClick();
      };
    }
    get scrollTarget() {
      return this._scrollTarget || window;
    }
    set scrollTarget(value) {
      this.unregisterScrollListener();
      const old = this.scrollTarget;
      this._scrollTarget = value;
      this.updateRootPosition();
      this.requestUpdate("scrollTarget", old);
      this.registerScrollListener();
    }
    updateRootPosition() {
      if (this.mdcRoot) {
        const windowScroller = this.scrollTarget === window;
        this.mdcRoot.style.position = windowScroller ? "" : "absolute";
      }
    }
    render() {
      let title = x`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;
      if (this.centerTitle) {
        title = x`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${title}</section>`;
      }
      return x`
      <header class="mdc-top-app-bar ${o10(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle ? null : title}
        </section>
        ${this.centerTitle ? title : null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${o10(this.contentClasses())}">
      <slot></slot>
    </div>
    `;
    }
    createAdapter() {
      return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { setStyle: (property, value) => this.mdcRoot.style.setProperty(property, value), getTopAppBarHeight: () => this.mdcRoot.clientHeight, notifyNavigationIconClicked: () => {
        this.dispatchEvent(new Event(strings11.NAVIGATION_EVENT, { bubbles: true, cancelable: true }));
      }, getViewportScrollY: () => this.scrollTarget instanceof Window ? this.scrollTarget.pageYOffset : this.scrollTarget.scrollTop, getTotalActionItems: () => this._actionItemsSlot.assignedNodes({ flatten: true }).length });
    }
    registerListeners() {
      this.registerScrollListener();
    }
    unregisterListeners() {
      this.unregisterScrollListener();
    }
    registerScrollListener() {
      this.scrollTarget.addEventListener("scroll", this.handleTargetScroll, passiveEventOptionsIfSupported);
    }
    unregisterScrollListener() {
      this.scrollTarget.removeEventListener("scroll", this.handleTargetScroll);
    }
    firstUpdated() {
      super.firstUpdated();
      this.updateRootPosition();
      this.registerListeners();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.unregisterListeners();
    }
  };
  __decorate([
    i4(".mdc-top-app-bar")
  ], TopAppBarBaseBase.prototype, "mdcRoot", void 0);
  __decorate([
    i4('slot[name="actionItems"]')
  ], TopAppBarBaseBase.prototype, "_actionItemsSlot", void 0);
  __decorate([
    e5({ type: Boolean })
  ], TopAppBarBaseBase.prototype, "centerTitle", void 0);
  __decorate([
    e5({ type: Object })
  ], TopAppBarBaseBase.prototype, "scrollTarget", null);

  // bundle/node_modules/@material/mwc-top-app-bar/mwc-top-app-bar-base.js
  var TopAppBarBase = class extends TopAppBarBaseBase {
    constructor() {
      super(...arguments);
      this.mdcFoundationClass = foundation_default9;
      this.prominent = false;
      this.dense = false;
      this.handleResize = () => {
        this.mdcFoundation.handleWindowResize();
      };
    }
    barClasses() {
      return {
        "mdc-top-app-bar--dense": this.dense,
        "mdc-top-app-bar--prominent": this.prominent,
        "center-title": this.centerTitle
      };
    }
    contentClasses() {
      return {
        "mdc-top-app-bar--fixed-adjust": !this.dense && !this.prominent,
        "mdc-top-app-bar--dense-fixed-adjust": this.dense && !this.prominent,
        "mdc-top-app-bar--prominent-fixed-adjust": !this.dense && this.prominent,
        "mdc-top-app-bar--dense-prominent-fixed-adjust": this.dense && this.prominent
      };
    }
    registerListeners() {
      super.registerListeners();
      window.addEventListener("resize", this.handleResize, passiveEventOptionsIfSupported);
    }
    unregisterListeners() {
      super.unregisterListeners();
      window.removeEventListener("resize", this.handleResize);
    }
  };
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], TopAppBarBase.prototype, "prominent", void 0);
  __decorate([
    e5({ type: Boolean, reflect: true })
  ], TopAppBarBase.prototype, "dense", void 0);

  // bundle/node_modules/@material/mwc-top-app-bar/mwc-top-app-bar.css.js
  var styles16 = i`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`;

  // bundle/node_modules/@material/mwc-top-app-bar/mwc-top-app-bar.js
  var TopAppBar = class TopAppBar2 extends TopAppBarBase {
  };
  TopAppBar.styles = [styles16];
  TopAppBar = __decorate([
    e4("mwc-top-app-bar")
  ], TopAppBar);

  // bundle/src/components/BibleHead.ts
  var BibleHead = class extends s4 {
    constructor() {
      super(...arguments);
      this._rangesText = "";
      this._filterText = "";
      this._fullWords = false;
      this._caseSensitive = false;
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
      console.log("Initialize bible-head internals");
    }
    connectedCallback() {
      super.connectedCallback();
    }
    disconnectedCallback() {
      this.destroy();
    }
    destroy() {
      console.log("Destroying bible-head internals!!");
    }
    _toggleCaseSensitive(e12) {
      this._caseSensitive = e12.target.checked;
    }
    _toggleFullWords(e12) {
      this._fullWords = e12.target.checked;
    }
    _updateRangeText(e12) {
      this._rangesText = e12.target.value;
    }
    _updateFilterText(e12) {
      this._filterText = e12.target.value;
    }
    render() {
      return x`
      <div class="container">
        <mwc-textfield
          label="Verwysing"
          icon="local_library"
          value=${this._rangesText}
          @input=${this._updateRangeText}
        ></mwc-textfield>
        <div class="controls">
          <mwc-textfield
            label="Soek 'n woord"
            icon="search"
            value=${this._filterText}
            @input=${this._updateFilterText}
          ></mwc-textfield>
          <div class="controls-checkbox">
            <mwc-formfield label="Case senititive">
              <mwc-checkbox
                ?checked=${this._caseSensitive}
                @change=${this._toggleCaseSensitive}
              ></mwc-checkbox>
            </mwc-formfield>
          </div>
          <div class="controls-checkbox">
            <mwc-formfield label="full words">
              <mwc-checkbox
                ?checked=${this._fullWords}
                @change=${this._toggleFullWords}
              ></mwc-checkbox>
            </mwc-formfield>
          </div>
        </div>
      <interlinear-bible 
          rangesText=${this._rangesText}
          filterText=${this._filterText}
          ?caseSensitive=${this._caseSensitive}
          ?fullWords=${this._fullWords}
          >
        </interlinear-bible>
      </div>
    `;
    }
  };
  BibleHead.styles = i`
    :host{
      display: block;
    }
    .container {
      height: 80vh;
      display: flex;
      flex-direction: column;
    }
    .controls {
      display: flex;
      justify-content: space-between;
    }
    .contols-checkbox {
      display: flex;
      align-items: center;
    }
    .bybel {
      overflow-y: scroll;
    }
    .ripple-box:hover {
      cursor: pointer;
    }
    .ripple-box {
      display: inline-flex;
      position: relative; /* MUST HAVE for MWC-RIPPLE */
      justify-content: center;
      /*text-align: center;*/
      flex-direction: column;
      padding: 4px;
    }
    .bible-text {
      margin: 0px;
      padding: 2px;
    }
  `;
  __decorateClass([
    t3()
  ], BibleHead.prototype, "_rangesText", 2);
  __decorateClass([
    t3()
  ], BibleHead.prototype, "_filterText", 2);
  __decorateClass([
    t3()
  ], BibleHead.prototype, "_fullWords", 2);
  __decorateClass([
    t3()
  ], BibleHead.prototype, "_caseSensitive", 2);
  BibleHead = __decorateClass([
    e4("bible-head")
  ], BibleHead);

  // bundle/node_modules/lit-html/directives/repeat.js
  var u3 = (e12, s11, t10) => {
    const r6 = /* @__PURE__ */ new Map();
    for (let l9 = s11; l9 <= t10; l9++)
      r6.set(e12[l9], l9);
    return r6;
  };
  var c4 = e10(class extends i7 {
    constructor(e12) {
      if (super(e12), e12.type !== t8.CHILD)
        throw Error("repeat() can only be used in text expressions");
    }
    dt(e12, s11, t10) {
      let r6;
      void 0 === t10 ? t10 = s11 : void 0 !== s11 && (r6 = s11);
      const l9 = [], o13 = [];
      let i10 = 0;
      for (const s12 of e12)
        l9[i10] = r6 ? r6(s12, i10) : i10, o13[i10] = t10(s12, i10), i10++;
      return { values: o13, keys: l9 };
    }
    render(e12, s11, t10) {
      return this.dt(e12, s11, t10).values;
    }
    update(s11, [t10, r6, c6]) {
      var d4;
      const a4 = m2(s11), { values: p4, keys: v3 } = this.dt(t10, r6, c6);
      if (!Array.isArray(a4))
        return this.ht = v3, p4;
      const h4 = null !== (d4 = this.ht) && void 0 !== d4 ? d4 : this.ht = [], m3 = [];
      let y3, x3, j3 = 0, k3 = a4.length - 1, w3 = 0, A3 = p4.length - 1;
      for (; j3 <= k3 && w3 <= A3; )
        if (null === a4[j3])
          j3++;
        else if (null === a4[k3])
          k3--;
        else if (h4[j3] === v3[w3])
          m3[w3] = u2(a4[j3], p4[w3]), j3++, w3++;
        else if (h4[k3] === v3[A3])
          m3[A3] = u2(a4[k3], p4[A3]), k3--, A3--;
        else if (h4[j3] === v3[A3])
          m3[A3] = u2(a4[j3], p4[A3]), r4(s11, m3[A3 + 1], a4[j3]), j3++, A3--;
        else if (h4[k3] === v3[w3])
          m3[w3] = u2(a4[k3], p4[w3]), r4(s11, a4[j3], a4[k3]), k3--, w3++;
        else if (void 0 === y3 && (y3 = u3(v3, w3, A3), x3 = u3(h4, j3, k3)), y3.has(h4[j3]))
          if (y3.has(h4[k3])) {
            const e12 = x3.get(v3[w3]), t11 = void 0 !== e12 ? a4[e12] : null;
            if (null === t11) {
              const e13 = r4(s11, a4[j3]);
              u2(e13, p4[w3]), m3[w3] = e13;
            } else
              m3[w3] = u2(t11, p4[w3]), r4(s11, a4[j3], t11), a4[e12] = null;
            w3++;
          } else
            p2(a4[k3]), k3--;
        else
          p2(a4[j3]), j3++;
      for (; w3 <= A3; ) {
        const e12 = r4(s11, m3[A3 + 1]);
        u2(e12, p4[w3]), m3[w3++] = e12;
      }
      for (; j3 <= k3; ) {
        const e12 = a4[j3++];
        null !== e12 && p2(e12);
      }
      return this.ht = v3, s9(s11, m3), T;
    }
  });

  // bundle/src/artefacts/bible/util/googlish.ts
  var googlish = (query, wholeWords = false, caseSensitive = false) => {
    const inquotes = /(["'])(\\\1|.)*?\1/g;
    const words = /[^\s"']+/g;
    const quoted = query.match(inquotes) || [];
    const rest = query.replace(inquotes, "").match(words) || [];
    const trim = (s11) => s11.substring(1, s11.length - 1);
    const dequoted = quoted.map(trim);
    const cs = caseSensitive ? "" : "i";
    const wb = wholeWords ? "\\b" : "";
    const toRegExp = (word) => new RegExp(wb + word + wb, cs);
    const regExps = [...dequoted, ...rest].map(toRegExp);
    return (text) => {
      let i10 = 0;
      while (regExps[i10] && regExps[i10].test(text))
        i10++;
      return i10 === regExps.length;
    };
  };
  var googlish_default = googlish;

  // bundle/src/components/InterlinearBible.ts
  var githubProject = "/bybel";
  var InterLinearBible = class extends s4 {
    constructor() {
      super();
      this.rangesText = "";
      this.filterText = "";
      this.fullWords = false;
      this.caseSensitive = false;
      this._verses = [];
      this._hashList = [];
      this._versionName = "afr";
      this._altVersionName = "kjv";
      this._onVerseClicked = (e12) => {
        const parent = e12.target.parentElement;
        if (parent) {
          const rippleElement = parent.querySelector("mwc-ripple");
          if (rippleElement) {
            if (rippleElement.getAttribute("activated") !== null) {
              rippleElement.removeAttribute("activated");
              rippleElement.removeAttribute("selected");
              const bybelElem = parent.closest(".bybel");
              if (bybelElem) {
                const nextSibling = parent.nextSibling;
                bybelElem.removeChild(nextSibling);
              }
              return;
            } else {
              rippleElement.setAttribute("activated", "");
              rippleElement.setAttribute("selected", "");
            }
          }
          const hash = parent.dataset.hash;
          if (hash) {
            const tskKey = mapHashToTSKkey(hash);
            const tskElem = document.createElement("tsk-refs");
            tskElem.setAttribute("refs", tskKey);
            parent.after(tskElem);
          }
        }
      };
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
    }
    connectedCallback() {
      super.connectedCallback();
      this.initialize();
    }
    disconnectedCallback() {
      this.destroy();
    }
    // one of our observred attributes has changed - respong to changes
    attributeChangedCallback(name, _old, value) {
      super.attributeChangedCallback(name, _old, value);
      this._setVerses();
    }
    initialize() {
      console.log("Initialize interlinear-bible internals");
      let url = `${window.origin}${githubProject}/web/resources/${this._versionName}.txt`;
      loadVersion(this._versionName, url).then(() => {
        url = `${window.origin}${githubProject}/web/resources/${this._altVersionName}.txt`;
        loadVersion(this._altVersionName, url).then(() => {
          this._setVerses();
        }).catch((err) => console.log("Error loading bibles", err));
      }).catch(console.log);
    }
    _attachRippleListeners() {
      const ripples = Array.from(this.shadowRoot.querySelectorAll("mwc-ripple"));
      ripples.forEach((ripple) => {
        const rh = new RippleHandlers(async () => ripple);
        const parent = ripple.parentNode;
        parent.addEventListener("mouseenter", rh.startHover);
        parent.addEventListener("mouseleave", rh.endHover);
        parent.addEventListener("mousedown", (e12) => {
          const onMouseUp = () => {
            window.removeEventListener("mouseup", onMouseUp);
            rh.endPress();
          };
          window.addEventListener("mouseup", onMouseUp);
          rh.startPress(e12);
        });
        parent.addEventListener("touchstart", (e12) => {
          const onTouchEnd = () => {
            window.removeEventListener("touchend", onTouchEnd);
            rh.endPress();
          };
          window.addEventListener("touchend", onTouchEnd);
          rh.startPress(e12);
        });
        parent.addEventListener("focus", rh.startFocus);
        parent.addEventListener("blur", rh.endFocus);
      });
    }
    updated() {
      this._attachRippleListeners();
    }
    _setVerses() {
      const filterFn = googlish_default(
        this.filterText,
        this.fullWords,
        this.caseSensitive
      );
      if (this.rangesText.length < 2)
        return;
      const v3 = [];
      const fullRange = getFullVerseRanges({
        rangesText: this.rangesText,
        versionName: this._versionName
      });
      if (fullRange.length === 0)
        return;
      this._hashList = getHashesFromVerseRanges(this._versionName, fullRange);
      let i10 = 0;
      for (let hash of this._hashList) {
        const a_ref = getVerseFromHash(this._versionName, hash);
        if (filterFn(a_ref.text)) {
          const e_ref = getVerseFromHash(
            this._altVersionName,
            hashMapper2(hash, this._versionName, this._altVersionName)
          );
          const ref = {
            afr: a_ref,
            kjv: e_ref,
            uuid: this._uuid(),
            hash
          };
          v3.push(ref);
          i10++;
        }
        if (i10 > 99)
          break;
      }
      this._verses = v3;
    }
    _uuid() {
      return Math.random().toString(36).substring(2, 12);
    }
    destroy() {
      console.log("Destroying interlinear-bible internals!!");
    }
    render() {
      return x`
      <div class="container">
        <div class="bybel">
          ${c4(
        this._verses,
        (verse2) => verse2.uuid,
        (v3) => x`
                <div class="ripple-box"
                  data-uuid=${v3.uuid}
                  data-hash=${v3.hash}
                  @click=${this._onVerseClicked}
                >
                  <p class="afrtext">
                    ${v3.afr.prettyRef} ${v3.afr.text}
                  </p>
                  ${v3.kjv.text.length > 0 ? x`
                      <p class="kjvtext" >
                        ${v3.kjv.prettyRef} ${v3.kjv.text}
                      </p>

                      ` : ""}
                  <mwc-ripple></mwc-ripple>
                </div>
               `
      )}
        </div>
      </div>
    `;
    }
  };
  InterLinearBible.styles = i`
    :host{
      display: block;
    }
    .container {
      display: flex;
    }
    .bybel {
      overflow-y: scroll;
    }
    .ripple-box:hover {
      cursor: pointer;
    }
    .ripple-box {
      /*display: inline-flex;*/ 
      display: flex;
      position: relative; /* MUST HAVE for MWC-RIPPLE */
      justify-content: center;
      /*text-align: center;*/
      flex-direction: column;
      padding: 4px;
    }
    .afrtext {
      margin: 0px;
      padding: 2px;
    }
    .kjvtext {
      margin: 0px;
      padding: 2px;
      font-style: italic;
      font-weight: lighter;
      font-size: smaller;
    }
  `;
  __decorateClass([
    e5({ type: String, attribute: true })
  ], InterLinearBible.prototype, "rangesText", 2);
  __decorateClass([
    e5({ type: String, attribute: true })
  ], InterLinearBible.prototype, "filterText", 2);
  __decorateClass([
    e5({ type: Boolean, attribute: true })
  ], InterLinearBible.prototype, "fullWords", 2);
  __decorateClass([
    e5({ type: Boolean, attribute: true })
  ], InterLinearBible.prototype, "caseSensitive", 2);
  __decorateClass([
    t3()
  ], InterLinearBible.prototype, "_verses", 2);
  __decorateClass([
    t3()
  ], InterLinearBible.prototype, "_hashList", 2);
  // @ts-ignore
  __decorateClass([
    i4("#input")
  ], InterLinearBible.prototype, "_input", 2);
  InterLinearBible = __decorateClass([
    e4("interlinear-bible")
  ], InterLinearBible);

  // bundle/node_modules/immer/dist/immer.esm.mjs
  function n9(n10) {
    for (var r6 = arguments.length, t10 = Array(r6 > 1 ? r6 - 1 : 0), e12 = 1; e12 < r6; e12++)
      t10[e12 - 1] = arguments[e12];
    if (true) {
      var i10 = Y[n10], o13 = i10 ? "function" == typeof i10 ? i10.apply(null, t10) : i10 : "unknown error nr: " + n10;
      throw Error("[Immer] " + o13);
    }
    throw Error("[Immer] minified error nr: " + n10 + (t10.length ? " " + t10.map(function(n11) {
      return "'" + n11 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function r5(n10) {
    return !!n10 && !!n10[Q];
  }
  function t9(n10) {
    var r6;
    return !!n10 && (function(n11) {
      if (!n11 || "object" != typeof n11)
        return false;
      var r7 = Object.getPrototypeOf(n11);
      if (null === r7)
        return true;
      var t10 = Object.hasOwnProperty.call(r7, "constructor") && r7.constructor;
      return t10 === Object || "function" == typeof t10 && Function.toString.call(t10) === Z2;
    }(n10) || Array.isArray(n10) || !!n10[L2] || !!(null === (r6 = n10.constructor) || void 0 === r6 ? void 0 : r6[L2]) || s10(n10) || v2(n10));
  }
  function i9(n10, r6, t10) {
    void 0 === t10 && (t10 = false), 0 === o12(n10) ? (t10 ? Object.keys : nn)(n10).forEach(function(e12) {
      t10 && "symbol" == typeof e12 || r6(e12, n10[e12], n10);
    }) : n10.forEach(function(t11, e12) {
      return r6(e12, t11, n10);
    });
  }
  function o12(n10) {
    var r6 = n10[Q];
    return r6 ? r6.i > 3 ? r6.i - 4 : r6.i : Array.isArray(n10) ? 1 : s10(n10) ? 2 : v2(n10) ? 3 : 0;
  }
  function u4(n10, r6) {
    return 2 === o12(n10) ? n10.has(r6) : Object.prototype.hasOwnProperty.call(n10, r6);
  }
  function a3(n10, r6) {
    return 2 === o12(n10) ? n10.get(r6) : n10[r6];
  }
  function f3(n10, r6, t10) {
    var e12 = o12(n10);
    2 === e12 ? n10.set(r6, t10) : 3 === e12 ? n10.add(t10) : n10[r6] = t10;
  }
  function c5(n10, r6) {
    return n10 === r6 ? 0 !== n10 || 1 / n10 == 1 / r6 : n10 != n10 && r6 != r6;
  }
  function s10(n10) {
    return X && n10 instanceof Map;
  }
  function v2(n10) {
    return q && n10 instanceof Set;
  }
  function p3(n10) {
    return n10.o || n10.t;
  }
  function l8(n10) {
    if (Array.isArray(n10))
      return Array.prototype.slice.call(n10);
    var r6 = rn(n10);
    delete r6[Q];
    for (var t10 = nn(r6), e12 = 0; e12 < t10.length; e12++) {
      var i10 = t10[e12], o13 = r6[i10];
      false === o13.writable && (o13.writable = true, o13.configurable = true), (o13.get || o13.set) && (r6[i10] = { configurable: true, writable: true, enumerable: o13.enumerable, value: n10[i10] });
    }
    return Object.create(Object.getPrototypeOf(n10), r6);
  }
  function d3(n10, e12) {
    return void 0 === e12 && (e12 = false), y2(n10) || r5(n10) || !t9(n10) || (o12(n10) > 1 && (n10.set = n10.add = n10.clear = n10.delete = h3), Object.freeze(n10), e12 && i9(n10, function(n11, r6) {
      return d3(r6, true);
    }, true)), n10;
  }
  function h3() {
    n9(2);
  }
  function y2(n10) {
    return null == n10 || "object" != typeof n10 || Object.isFrozen(n10);
  }
  function b2(r6) {
    var t10 = tn[r6];
    return t10 || n9(18, r6), t10;
  }
  function _2() {
    return U || n9(0), U;
  }
  function j2(n10, r6) {
    r6 && (b2("Patches"), n10.u = [], n10.s = [], n10.v = r6);
  }
  function O(n10) {
    g2(n10), n10.p.forEach(S3), n10.p = null;
  }
  function g2(n10) {
    n10 === U && (U = n10.l);
  }
  function w2(n10) {
    return U = { p: [], l: U, h: n10, m: true, _: 0 };
  }
  function S3(n10) {
    var r6 = n10[Q];
    0 === r6.i || 1 === r6.i ? r6.j() : r6.O = true;
  }
  function P2(r6, e12) {
    e12._ = e12.p.length;
    var i10 = e12.p[0], o13 = void 0 !== r6 && r6 !== i10;
    return e12.h.g || b2("ES5").S(e12, r6, o13), o13 ? (i10[Q].P && (O(e12), n9(4)), t9(r6) && (r6 = M2(e12, r6), e12.l || x2(e12, r6)), e12.u && b2("Patches").M(i10[Q].t, r6, e12.u, e12.s)) : r6 = M2(e12, i10, []), O(e12), e12.u && e12.v(e12.u, e12.s), r6 !== H2 ? r6 : void 0;
  }
  function M2(n10, r6, t10) {
    if (y2(r6))
      return r6;
    var e12 = r6[Q];
    if (!e12)
      return i9(r6, function(i10, o14) {
        return A2(n10, e12, r6, i10, o14, t10);
      }, true), r6;
    if (e12.A !== n10)
      return r6;
    if (!e12.P)
      return x2(n10, e12.t, true), e12.t;
    if (!e12.I) {
      e12.I = true, e12.A._--;
      var o13 = 4 === e12.i || 5 === e12.i ? e12.o = l8(e12.k) : e12.o, u5 = o13, a4 = false;
      3 === e12.i && (u5 = new Set(o13), o13.clear(), a4 = true), i9(u5, function(r7, i10) {
        return A2(n10, e12, o13, r7, i10, t10, a4);
      }), x2(n10, o13, false), t10 && n10.u && b2("Patches").N(e12, t10, n10.u, n10.s);
    }
    return e12.o;
  }
  function A2(e12, i10, o13, a4, c6, s11, v3) {
    if (c6 === o13 && n9(5), r5(c6)) {
      var p4 = M2(e12, c6, s11 && i10 && 3 !== i10.i && !u4(i10.R, a4) ? s11.concat(a4) : void 0);
      if (f3(o13, a4, p4), !r5(p4))
        return;
      e12.m = false;
    } else
      v3 && o13.add(c6);
    if (t9(c6) && !y2(c6)) {
      if (!e12.h.D && e12._ < 1)
        return;
      M2(e12, c6), i10 && i10.A.l || x2(e12, c6);
    }
  }
  function x2(n10, r6, t10) {
    void 0 === t10 && (t10 = false), !n10.l && n10.h.D && n10.m && d3(r6, t10);
  }
  function z2(n10, r6) {
    var t10 = n10[Q];
    return (t10 ? p3(t10) : n10)[r6];
  }
  function I2(n10, r6) {
    if (r6 in n10)
      for (var t10 = Object.getPrototypeOf(n10); t10; ) {
        var e12 = Object.getOwnPropertyDescriptor(t10, r6);
        if (e12)
          return e12;
        t10 = Object.getPrototypeOf(t10);
      }
  }
  function k2(n10) {
    n10.P || (n10.P = true, n10.l && k2(n10.l));
  }
  function E2(n10) {
    n10.o || (n10.o = l8(n10.t));
  }
  function N2(n10, r6, t10) {
    var e12 = s10(r6) ? b2("MapSet").F(r6, t10) : v2(r6) ? b2("MapSet").T(r6, t10) : n10.g ? function(n11, r7) {
      var t11 = Array.isArray(n11), e13 = { i: t11 ? 1 : 0, A: r7 ? r7.A : _2(), P: false, I: false, R: {}, l: r7, t: n11, k: null, o: null, j: null, C: false }, i10 = e13, o13 = en;
      t11 && (i10 = [e13], o13 = on);
      var u5 = Proxy.revocable(i10, o13), a4 = u5.revoke, f4 = u5.proxy;
      return e13.k = f4, e13.j = a4, f4;
    }(r6, t10) : b2("ES5").J(r6, t10);
    return (t10 ? t10.A : _2()).p.push(e12), e12;
  }
  function R2(e12) {
    return r5(e12) || n9(22, e12), function n10(r6) {
      if (!t9(r6))
        return r6;
      var e13, u5 = r6[Q], c6 = o12(r6);
      if (u5) {
        if (!u5.P && (u5.i < 4 || !b2("ES5").K(u5)))
          return u5.t;
        u5.I = true, e13 = D(r6, c6), u5.I = false;
      } else
        e13 = D(r6, c6);
      return i9(e13, function(r7, t10) {
        u5 && a3(u5.t, r7) === t10 || f3(e13, r7, n10(t10));
      }), 3 === c6 ? new Set(e13) : e13;
    }(e12);
  }
  function D(n10, r6) {
    switch (r6) {
      case 2:
        return new Map(n10);
      case 3:
        return Array.from(n10);
    }
    return l8(n10);
  }
  var G;
  var U;
  var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
  var X = "undefined" != typeof Map;
  var q = "undefined" != typeof Set;
  var B2 = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
  var H2 = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
  var L2 = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
  var Q = W ? Symbol.for("immer-state") : "__$immer_state";
  var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n10) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n10;
  }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n10) {
    return "Cannot apply patch, path doesn't resolve: " + n10;
  }, 16: 'Sets cannot have "replace" patches.', 17: function(n10) {
    return "Unsupported patch operation: " + n10;
  }, 18: function(n10) {
    return "The plugin for '" + n10 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n10 + "()` when initializing your application.";
  }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n10) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n10 + "'";
  }, 22: function(n10) {
    return "'current' expects a draft, got: " + n10;
  }, 23: function(n10) {
    return "'original' expects a draft, got: " + n10;
  }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
  var Z2 = "" + Object.prototype.constructor;
  var nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n10) {
    return Object.getOwnPropertyNames(n10).concat(Object.getOwnPropertySymbols(n10));
  } : Object.getOwnPropertyNames;
  var rn = Object.getOwnPropertyDescriptors || function(n10) {
    var r6 = {};
    return nn(n10).forEach(function(t10) {
      r6[t10] = Object.getOwnPropertyDescriptor(n10, t10);
    }), r6;
  };
  var tn = {};
  var en = { get: function(n10, r6) {
    if (r6 === Q)
      return n10;
    var e12 = p3(n10);
    if (!u4(e12, r6))
      return function(n11, r7, t10) {
        var e13, i11 = I2(r7, t10);
        return i11 ? "value" in i11 ? i11.value : null === (e13 = i11.get) || void 0 === e13 ? void 0 : e13.call(n11.k) : void 0;
      }(n10, e12, r6);
    var i10 = e12[r6];
    return n10.I || !t9(i10) ? i10 : i10 === z2(n10.t, r6) ? (E2(n10), n10.o[r6] = N2(n10.A.h, i10, n10)) : i10;
  }, has: function(n10, r6) {
    return r6 in p3(n10);
  }, ownKeys: function(n10) {
    return Reflect.ownKeys(p3(n10));
  }, set: function(n10, r6, t10) {
    var e12 = I2(p3(n10), r6);
    if (null == e12 ? void 0 : e12.set)
      return e12.set.call(n10.k, t10), true;
    if (!n10.P) {
      var i10 = z2(p3(n10), r6), o13 = null == i10 ? void 0 : i10[Q];
      if (o13 && o13.t === t10)
        return n10.o[r6] = t10, n10.R[r6] = false, true;
      if (c5(t10, i10) && (void 0 !== t10 || u4(n10.t, r6)))
        return true;
      E2(n10), k2(n10);
    }
    return n10.o[r6] === t10 && (void 0 !== t10 || r6 in n10.o) || Number.isNaN(t10) && Number.isNaN(n10.o[r6]) || (n10.o[r6] = t10, n10.R[r6] = true), true;
  }, deleteProperty: function(n10, r6) {
    return void 0 !== z2(n10.t, r6) || r6 in n10.t ? (n10.R[r6] = false, E2(n10), k2(n10)) : delete n10.R[r6], n10.o && delete n10.o[r6], true;
  }, getOwnPropertyDescriptor: function(n10, r6) {
    var t10 = p3(n10), e12 = Reflect.getOwnPropertyDescriptor(t10, r6);
    return e12 ? { writable: true, configurable: 1 !== n10.i || "length" !== r6, enumerable: e12.enumerable, value: t10[r6] } : e12;
  }, defineProperty: function() {
    n9(11);
  }, getPrototypeOf: function(n10) {
    return Object.getPrototypeOf(n10.t);
  }, setPrototypeOf: function() {
    n9(12);
  } };
  var on = {};
  i9(en, function(n10, r6) {
    on[n10] = function() {
      return arguments[0] = arguments[0][0], r6.apply(this, arguments);
    };
  }), on.deleteProperty = function(r6, t10) {
    return isNaN(parseInt(t10)) && n9(13), on.set.call(this, r6, t10, void 0);
  }, on.set = function(r6, t10, e12) {
    return "length" !== t10 && isNaN(parseInt(t10)) && n9(14), en.set.call(this, r6[0], t10, e12, r6[0]);
  };
  var un = function() {
    function e12(r6) {
      var e13 = this;
      this.g = B2, this.D = true, this.produce = function(r7, i11, o13) {
        if ("function" == typeof r7 && "function" != typeof i11) {
          var u5 = i11;
          i11 = r7;
          var a4 = e13;
          return function(n10) {
            var r8 = this;
            void 0 === n10 && (n10 = u5);
            for (var t10 = arguments.length, e14 = Array(t10 > 1 ? t10 - 1 : 0), o14 = 1; o14 < t10; o14++)
              e14[o14 - 1] = arguments[o14];
            return a4.produce(n10, function(n11) {
              var t11;
              return (t11 = i11).call.apply(t11, [r8, n11].concat(e14));
            });
          };
        }
        var f4;
        if ("function" != typeof i11 && n9(6), void 0 !== o13 && "function" != typeof o13 && n9(7), t9(r7)) {
          var c6 = w2(e13), s11 = N2(e13, r7, void 0), v3 = true;
          try {
            f4 = i11(s11), v3 = false;
          } finally {
            v3 ? O(c6) : g2(c6);
          }
          return "undefined" != typeof Promise && f4 instanceof Promise ? f4.then(function(n10) {
            return j2(c6, o13), P2(n10, c6);
          }, function(n10) {
            throw O(c6), n10;
          }) : (j2(c6, o13), P2(f4, c6));
        }
        if (!r7 || "object" != typeof r7) {
          if (void 0 === (f4 = i11(r7)) && (f4 = r7), f4 === H2 && (f4 = void 0), e13.D && d3(f4, true), o13) {
            var p4 = [], l9 = [];
            b2("Patches").M(r7, f4, p4, l9), o13(p4, l9);
          }
          return f4;
        }
        n9(21, r7);
      }, this.produceWithPatches = function(n10, r7) {
        if ("function" == typeof n10)
          return function(r8) {
            for (var t11 = arguments.length, i12 = Array(t11 > 1 ? t11 - 1 : 0), o14 = 1; o14 < t11; o14++)
              i12[o14 - 1] = arguments[o14];
            return e13.produceWithPatches(r8, function(r9) {
              return n10.apply(void 0, [r9].concat(i12));
            });
          };
        var t10, i11, o13 = e13.produce(n10, r7, function(n11, r8) {
          t10 = n11, i11 = r8;
        });
        return "undefined" != typeof Promise && o13 instanceof Promise ? o13.then(function(n11) {
          return [n11, t10, i11];
        }) : [o13, t10, i11];
      }, "boolean" == typeof (null == r6 ? void 0 : r6.useProxies) && this.setUseProxies(r6.useProxies), "boolean" == typeof (null == r6 ? void 0 : r6.autoFreeze) && this.setAutoFreeze(r6.autoFreeze);
    }
    var i10 = e12.prototype;
    return i10.createDraft = function(e13) {
      t9(e13) || n9(8), r5(e13) && (e13 = R2(e13));
      var i11 = w2(this), o13 = N2(this, e13, void 0);
      return o13[Q].C = true, g2(i11), o13;
    }, i10.finishDraft = function(r6, t10) {
      var e13 = r6 && r6[Q];
      e13 && e13.C || n9(9), e13.I && n9(10);
      var i11 = e13.A;
      return j2(i11, t10), P2(void 0, i11);
    }, i10.setAutoFreeze = function(n10) {
      this.D = n10;
    }, i10.setUseProxies = function(r6) {
      r6 && !B2 && n9(20), this.g = r6;
    }, i10.applyPatches = function(n10, t10) {
      var e13;
      for (e13 = t10.length - 1; e13 >= 0; e13--) {
        var i11 = t10[e13];
        if (0 === i11.path.length && "replace" === i11.op) {
          n10 = i11.value;
          break;
        }
      }
      e13 > -1 && (t10 = t10.slice(e13 + 1));
      var o13 = b2("Patches").$;
      return r5(n10) ? o13(n10, t10) : this.produce(n10, function(n11) {
        return o13(n11, t10);
      });
    }, e12;
  }();
  var an = new un();
  var fn2 = an.produce;
  var cn = an.produceWithPatches.bind(an);
  var sn = an.setAutoFreeze.bind(an);
  var vn = an.setUseProxies.bind(an);
  var pn = an.applyPatches.bind(an);
  var ln = an.createDraft.bind(an);
  var dn = an.finishDraft.bind(an);

  // bundle/src/components/TSKRefs.ts
  var TSKRefs = class extends s4 {
    constructor() {
      super();
      this.tskRefs = [];
      this._showVerse = false;
      this._handleElementRipple = (e12) => {
        const parent = e12.target.parentElement;
        if (parent) {
          const rippleElement = parent.querySelector("mwc-ripple");
          if (rippleElement) {
            if (rippleElement.getAttribute("activated") !== null) {
              rippleElement.removeAttribute("activated");
              rippleElement.removeAttribute("selected");
            } else {
              rippleElement.setAttribute("activated", "");
              rippleElement.setAttribute("selected", "");
            }
          }
        }
      };
    }
    firstUpdated(changedProperties) {
      super.firstUpdated(changedProperties);
    }
    connectedCallback() {
      super.connectedCallback();
      if (this.refs) {
        this._readIXDB(this.refs);
      }
    }
    disconnectedCallback() {
      this.destroy();
    }
    // left - example using a cursor
    _readIXDB(key) {
      if (this._ixdb) {
        this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").openCursor(IDBKeyRange.only(key)).onsuccess = (evt) => {
          const cursor = evt.target.result;
          if (cursor) {
            this.tskRefs = fn2(this.tskRefs, (data) => {
              data.push({ display: false, ref: cursor.value });
              return data;
            });
            cursor.continue();
          }
        };
      }
    }
    _getAll(key) {
      if (this._ixdb) {
        this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(key)).onsuccess = (evt) => {
          this.tskRefs = evt.target.result;
        };
      }
      ;
    }
    destroy() {
      console.log("Destroying tsk-refs internals!!");
    }
    render() {
      return x`
    <div class="refs-container">
      ${c4(
        this.tskRefs,
        (t10) => t10.ref.key,
        (v3, index) => x`
            <mwc-list-item class="ref-word" @click=${(e12) => {
          if (v3.display) {
            e12.target.removeAttribute("activated");
            e12.target.removeAttribute("selected");
          } else {
            e12.target.setAttribute("activated", "");
            e12.target.setAttribute("selected", "");
          }
          this.tskRefs = fn2(this.tskRefs, (data) => {
            data[index].display = !data[index].display;
            return data;
          });
          this._handleElementRipple(e12);
        }}>${v3.ref.words}</mwc-list-item>
            ${v3.display === true ? x`<interlinear-bible rangesText=${v3.ref.refs}></interlinear-bible>` : ""}
         `
      )}  
    </div>
    `;
    }
  };
  TSKRefs.styles = i`
    :host{
      display: block;
    }
    .refs-container {
      border: 1px solid blue;
      margin: 2px;
      padding: 5px;
    }
    .ref-word:hover {
      cursor: pointer;
    }
    mwc-list-item{
      font-size: 700;
      font-weight: 700;
    }
  `;
  __decorateClass([
    e5({ type: String, attribute: true })
  ], TSKRefs.prototype, "refs", 2);
  __decorateClass([
    t6({ context: ixdbContext })
  ], TSKRefs.prototype, "_ixdb", 2);
  __decorateClass([
    t3()
  ], TSKRefs.prototype, "tskRefs", 2);
  __decorateClass([
    t3()
  ], TSKRefs.prototype, "_showVerse", 2);
  TSKRefs = __decorateClass([
    e4("tsk-refs")
  ], TSKRefs);

  // bundle/src/main.ts
  console.log("JS Bundle loaded");
  var AppWebComponent = class extends s4 {
    constructor() {
      super();
      this._router = new i6(this, [
        {
          path: "",
          render: () => x`<bible-head></bible-head>`
        },
        {
          path: "/",
          render: () => x`<bible-head></bible-head>`
        },
        {
          path: "chat",
          render: () => x`<h1>Chat app not available in off line mode</h1>`
        }
      ], {
        fallback: {
          // throw the user back to the host Router
          // ie the server (or WASM router)
          //--enter: async (params) => {
          //--  window.location.href = window.origin + "/" + params[0];
          //--  return false;
          //--},
          render: () => x`<h1>404 Route not found</h1> <p>In single page app router!</p>`
        }
      });
      this._dbName = "idxDB";
      //@ts-ignore
      this._ixdb = { ixdb: void 0 };
      console.log("Creating App Web Component as root!");
      this.initialize_IDB();
    }
    connectedCallback() {
      super.connectedCallback();
    }
    firstUpdated() {
    }
    initialize_IDB() {
      const request = indexedDB.open(this._dbName, 1);
      request.onerror = (event) => {
        alert("Error accessing TSK database!" + event.target.result);
      };
      request.onsuccess = (event) => {
        this._ixdb.ixdb = event.target.result;
        console.log("IDB initialized", event.target);
      };
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        console.log("Creating a new IDB instance for tsk!");
        const objectStore = db.createObjectStore("xref", { keyPath: "key" });
        objectStore.createIndex("verse", "verse", { unique: false });
        objectStore.transaction.oncomplete = () => {
          try {
            const url = `${window.origin}/bybel/web/resources/tsk.txt`;
            loadTSK(url).then((tsk) => {
              console.log("tsk loaded!");
              const xrefObjectStore = db.transaction("xref", "readwrite").objectStore("xref");
              tsk.forEach((xrf) => {
                xrefObjectStore.add(xrf);
              });
              console.log("All done!");
            });
          } catch (e12) {
            alert("failed to load TSK and create IndexedDB!");
          }
        };
      };
    }
    async gotoRef(href) {
      if (href !== void 0) {
        const route = href;
        history.pushState({}, "", route);
        await this._router.goto(route);
      }
    }
    render() {
      return x`<bible-head></bible-head>`;
    }
    render_tabs() {
      return x`
        <mwc-tab-bar>
          <mwc-tab 
            label="Bybel" 
            icon="local_library" 
            minWidth 
            isMinWidthIndicator
            @click=${() => this.gotoRef("/")}
          ></mwc-tab>
          <mwc-tab 
            label="chat" 
            icon="message" 
            minWidth 
            isMinWidthIndicator
            @click=${() => this.gotoRef("chat")}
          ></mwc-tab>
        </mwc-tab-bar>
        <main>${this._router.outlet()}</main>
        `;
    }
  };
  AppWebComponent.styles = i`
      :host {
        display: block; /* customElement defaults to inline!!*/
      }

      footer {
        text-align: center;
      }
    `;
  __decorateClass([
    o9({ context: ixdbContext }),
    t3()
  ], AppWebComponent.prototype, "_ixdb", 2);
  AppWebComponent = __decorateClass([
    e4("app-web-component")
  ], AppWebComponent);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/router/routes.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/router/router.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-icon/mwc-icon-host.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon/mwc-icon.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/dom/ponyfill.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-base/utils.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-base/base-element.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/base/foundation.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/ripple/constants.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/ripple/foundation.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-ripple/mwc-ripple-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-ripple/mwc-ripple.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-ripple/mwc-ripple.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-base/aria-property.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-ripple/ripple-handlers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-button/mwc-button-base.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-button/styles.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-button/mwc-button.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-base/form-element.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-checkbox/mwc-checkbox-base.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-checkbox/mwc-checkbox.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-checkbox/mwc-checkbox.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

blocking-elements/dist/blocking-elements.js:
  (**
   * @license
   * Copyright 2016 Google Inc. All rights reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/drawer/constants.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/drawer/dismissible/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/drawer/modal/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-base/observer.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-drawer/mwc-drawer-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-drawer/mwc-drawer.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-drawer/mwc-drawer.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/form-field/constants.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/form-field/foundation.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-formfield/mwc-formfield-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-formfield/mwc-formfield.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-formfield/mwc-formfield.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-icon-button/mwc-icon-button-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-icon-button/mwc-icon-button.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon-button/mwc-icon-button.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list-item-base.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list-item.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list-item.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/dom/keyboard.js:
  (**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/list/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-list/mwc-list-foundation.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list-base.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-list/mwc-list.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/notched-outline/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/notched-outline/foundation.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-notched-outline/mwc-notched-outline-base.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-notched-outline/mwc-notched-outline.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-notched-outline/mwc-notched-outline.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/floating-label/constants.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/floating-label/foundation.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-floating-label/mwc-floating-label-directive.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/line-ripple/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/line-ripple/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-line-ripple/mwc-line-ripple-directive.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/textfield/constants.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/textfield/foundation.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-textfield/mwc-textfield-base.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-textfield/mwc-textfield.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-textfield/mwc-textfield.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/tab-indicator/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/tab-indicator/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/tab-indicator/fading-foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/tab-indicator/sliding-foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-tab-indicator/mwc-tab-indicator-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-tab-indicator/mwc-tab-indicator.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-tab-indicator/mwc-tab-indicator.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/tab/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/tab/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-tab/mwc-tab-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-tab/mwc-tab.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-tab/mwc-tab.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/tab-scroller/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/tab-scroller/rtl-scroller.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/tab-scroller/rtl-default-scroller.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/tab-scroller/rtl-negative-scroller.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/tab-scroller/rtl-reverse-scroller.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/tab-scroller/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-tab-scroller/mwc-tab-scroller-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-tab-scroller/mwc-tab-scroller.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-tab-scroller/mwc-tab-scroller.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/tab-bar/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/tab-bar/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-tab-bar/mwc-tab-bar-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-tab-bar/mwc-tab-bar.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-tab-bar/mwc-tab-bar.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/top-app-bar/constants.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/top-app-bar/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/top-app-bar/standard/foundation.js:
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)

@material/mwc-top-app-bar/mwc-top-app-bar-base-base.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-top-app-bar/mwc-top-app-bar-base.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/mwc-top-app-bar/mwc-top-app-bar.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-top-app-bar/mwc-top-app-bar.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=bundle.js.map
