(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i7 = decorators.length - 1, decorator; i7 >= 0; i7--)
      if (decorator = decorators[i7])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/tslib/tslib.es6.mjs
  function __decorate(decorators, target, key, desc) {
    var c4 = arguments.length, r6 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r6 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i7 = decorators.length - 1; i7 >= 0; i7--)
        if (d3 = decorators[i7])
          r6 = (c4 < 3 ? d3(r6) : c4 > 3 ? d3(target, key, r6) : d3(target, key)) || r6;
    return c4 > 3 && r6 && Object.defineProperty(target, key, r6), r6;
  }

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t = (t5) => (e7, o6) => {
    void 0 !== o6 ? o6.addInitializer(() => {
      customElements.define(t5, e7);
    }) : customElements.define(t5, e7);
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t2 = globalThis;
  var e = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t5, e7, o6) {
      if (this._$cssResult$ = true, o6 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t5, this.t = e7;
    }
    get styleSheet() {
      let t5 = this.o;
      const s3 = this.t;
      if (e && void 0 === t5) {
        const e7 = void 0 !== s3 && 1 === s3.length;
        e7 && (t5 = o.get(s3)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e7 && o.set(s3, t5));
      }
      return t5;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t5) => new n("string" == typeof t5 ? t5 : t5 + "", void 0, s);
  var i = (t5, ...e7) => {
    const o6 = 1 === t5.length ? t5[0] : e7.reduce((e8, s3, o7) => e8 + ((t6) => {
      if (true === t6._$cssResult$)
        return t6.cssText;
      if ("number" == typeof t6)
        return t6;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s3) + t5[o7 + 1], t5[0]);
    return new n(o6, t5, s);
  };
  var S = (s3, o6) => {
    if (e)
      s3.adoptedStyleSheets = o6.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
    else
      for (const e7 of o6) {
        const o7 = document.createElement("style"), n6 = t2.litNonce;
        void 0 !== n6 && o7.setAttribute("nonce", n6), o7.textContent = e7.cssText, s3.appendChild(o7);
      }
  };
  var c = e ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
    let e7 = "";
    for (const s3 of t6.cssRules)
      e7 += s3.cssText;
    return r(e7);
  })(t5) : t5;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t5, s3) => t5;
  var u = { toAttribute(t5, s3) {
    switch (s3) {
      case Boolean:
        t5 = t5 ? l : null;
        break;
      case Object:
      case Array:
        t5 = null == t5 ? t5 : JSON.stringify(t5);
    }
    return t5;
  }, fromAttribute(t5, s3) {
    let i7 = t5;
    switch (s3) {
      case Boolean:
        i7 = null !== t5;
        break;
      case Number:
        i7 = null === t5 ? null : Number(t5);
        break;
      case Object:
      case Array:
        try {
          i7 = JSON.parse(t5);
        } catch (t6) {
          i7 = null;
        }
    }
    return i7;
  } };
  var f = (t5, s3) => !i2(t5, s3);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t5) {
      this._$Ei(), (this.l ??= []).push(t5);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t5, s3 = y) {
      if (s3.state && (s3.attribute = false), this._$Ei(), this.elementProperties.set(t5, s3), !s3.noAccessor) {
        const i7 = Symbol(), r6 = this.getPropertyDescriptor(t5, i7, s3);
        void 0 !== r6 && e2(this.prototype, t5, r6);
      }
    }
    static getPropertyDescriptor(t5, s3, i7) {
      const { get: e7, set: h3 } = r2(this.prototype, t5) ?? { get() {
        return this[s3];
      }, set(t6) {
        this[s3] = t6;
      } };
      return { get() {
        return e7?.call(this);
      }, set(s4) {
        const r6 = e7?.call(this);
        h3.call(this, s4), this.requestUpdate(t5, r6, i7);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t5) {
      return this.elementProperties.get(t5) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties")))
        return;
      const t5 = n2(this);
      t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized")))
        return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t6 = this.properties, s3 = [...h(t6), ...o2(t6)];
        for (const i7 of s3)
          this.createProperty(i7, t6[i7]);
      }
      const t5 = this[Symbol.metadata];
      if (null !== t5) {
        const s3 = litPropertyMetadata.get(t5);
        if (void 0 !== s3)
          for (const [t6, i7] of s3)
            this.elementProperties.set(t6, i7);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t6, s3] of this.elementProperties) {
        const i7 = this._$Eu(t6, s3);
        void 0 !== i7 && this._$Eh.set(i7, t6);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s3) {
      const i7 = [];
      if (Array.isArray(s3)) {
        const e7 = new Set(s3.flat(1 / 0).reverse());
        for (const s4 of e7)
          i7.unshift(c(s4));
      } else
        void 0 !== s3 && i7.push(c(s3));
      return i7;
    }
    static _$Eu(t5, s3) {
      const i7 = s3.attribute;
      return false === i7 ? void 0 : "string" == typeof i7 ? i7 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
    }
    addController(t5) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
    }
    removeController(t5) {
      this._$EO?.delete(t5);
    }
    _$E_() {
      const t5 = /* @__PURE__ */ new Map(), s3 = this.constructor.elementProperties;
      for (const i7 of s3.keys())
        this.hasOwnProperty(i7) && (t5.set(i7, this[i7]), delete this[i7]);
      t5.size > 0 && (this._$Ep = t5);
    }
    createRenderRoot() {
      const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t5, this.constructor.elementStyles), t5;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t5) => t5.hostConnected?.());
    }
    enableUpdating(t5) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t5) => t5.hostDisconnected?.());
    }
    attributeChangedCallback(t5, s3, i7) {
      this._$AK(t5, i7);
    }
    _$EC(t5, s3) {
      const i7 = this.constructor.elementProperties.get(t5), e7 = this.constructor._$Eu(t5, i7);
      if (void 0 !== e7 && true === i7.reflect) {
        const r6 = (void 0 !== i7.converter?.toAttribute ? i7.converter : u).toAttribute(s3, i7.type);
        this._$Em = t5, null == r6 ? this.removeAttribute(e7) : this.setAttribute(e7, r6), this._$Em = null;
      }
    }
    _$AK(t5, s3) {
      const i7 = this.constructor, e7 = i7._$Eh.get(t5);
      if (void 0 !== e7 && this._$Em !== e7) {
        const t6 = i7.getPropertyOptions(e7), r6 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : u;
        this._$Em = e7, this[e7] = r6.fromAttribute(s3, t6.type), this._$Em = null;
      }
    }
    requestUpdate(t5, s3, i7) {
      if (void 0 !== t5) {
        if (i7 ??= this.constructor.getPropertyOptions(t5), !(i7.hasChanged ?? f)(this[t5], s3))
          return;
        this.P(t5, s3, i7);
      }
      false === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t5, s3, i7) {
      this._$AL.has(t5) || this._$AL.set(t5, s3), true === i7.reflect && this._$Em !== t5 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t5);
    }
    async _$ET() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t6) {
        Promise.reject(t6);
      }
      const t5 = this.scheduleUpdate();
      return null != t5 && await t5, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending)
        return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t7, s4] of this._$Ep)
            this[t7] = s4;
          this._$Ep = void 0;
        }
        const t6 = this.constructor.elementProperties;
        if (t6.size > 0)
          for (const [s4, i7] of t6)
            true !== i7.wrapped || this._$AL.has(s4) || void 0 === this[s4] || this.P(s4, this[s4], i7);
      }
      let t5 = false;
      const s3 = this._$AL;
      try {
        t5 = this.shouldUpdate(s3), t5 ? (this.willUpdate(s3), this._$EO?.forEach((t6) => t6.hostUpdate?.()), this.update(s3)) : this._$EU();
      } catch (s4) {
        throw t5 = false, this._$EU(), s4;
      }
      t5 && this._$AE(s3);
    }
    willUpdate(t5) {
    }
    _$AE(t5) {
      this._$EO?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
    }
    _$EU() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t5) {
      return true;
    }
    update(t5) {
      this._$Ej &&= this._$Ej.forEach((t6) => this._$EC(t6, this[t6])), this._$EU();
    }
    updated(t5) {
    }
    firstUpdated(t5) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.4");

  // node_modules/@lit/reactive-element/decorators/property.js
  var o3 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r3 = (t5 = o3, e7, r6) => {
    const { kind: n6, metadata: i7 } = r6;
    let s3 = globalThis.litPropertyMetadata.get(i7);
    if (void 0 === s3 && globalThis.litPropertyMetadata.set(i7, s3 = /* @__PURE__ */ new Map()), s3.set(r6.name, t5), "accessor" === n6) {
      const { name: o6 } = r6;
      return { set(r7) {
        const n7 = e7.get.call(this);
        e7.set.call(this, r7), this.requestUpdate(o6, n7, t5);
      }, init(e8) {
        return void 0 !== e8 && this.P(o6, void 0, t5), e8;
      } };
    }
    if ("setter" === n6) {
      const { name: o6 } = r6;
      return function(r7) {
        const n7 = this[o6];
        e7.call(this, r7), this.requestUpdate(o6, n7, t5);
      };
    }
    throw Error("Unsupported decorator location: " + n6);
  };
  function n3(t5) {
    return (e7, o6) => "object" == typeof o6 ? r3(t5, e7, o6) : ((t6, e8, o7) => {
      const r6 = e8.hasOwnProperty(o7);
      return e8.constructor.createProperty(o7, r6 ? { ...t6, wrapped: true } : t6), r6 ? Object.getOwnPropertyDescriptor(e8, o7) : void 0;
    })(t5, e7, o6);
  }

  // node_modules/lit-html/lit-html.js
  var t3 = globalThis;
  var i3 = t3.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var e4 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o4 = "?" + h2;
  var n4 = `<${o4}>`;
  var r4 = document;
  var l2 = () => r4.createComment("");
  var c3 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
  var a2 = Array.isArray;
  var u2 = (t5) => a2(t5) || "function" == typeof t5?.[Symbol.iterator];
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t5) => (i7, ...s3) => ({ _$litType$: t5, strings: i7, values: s3 });
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r4.createTreeWalker(r4, 129);
  function P(t5, i7) {
    if (!a2(t5) || !t5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i7) : i7;
  }
  var V = (t5, i7) => {
    const s3 = t5.length - 1, o6 = [];
    let r6, l3 = 2 === i7 ? "<svg>" : 3 === i7 ? "<math>" : "", c4 = f2;
    for (let i8 = 0; i8 < s3; i8++) {
      const s4 = t5[i8];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s4.length && (c4.lastIndex = y3, u3 = c4.exec(s4), null !== u3); )
        y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r6 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r6 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r6 = void 0);
      const x2 = c4 === m && t5[i8 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s4 + n4 : d3 >= 0 ? (o6.push(a3), s4.slice(0, d3) + e4 + s4.slice(d3) + h2 + x2) : s4 + h2 + (-2 === d3 ? i8 : x2);
    }
    return [P(t5, l3 + (t5[s3] || "<?>") + (2 === i7 ? "</svg>" : 3 === i7 ? "</math>" : "")), o6];
  };
  var N = class _N {
    constructor({ strings: t5, _$litType$: s3 }, n6) {
      let r6;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t5.length - 1, d3 = this.parts, [f3, v2] = V(t5, s3);
      if (this.el = _N.createElement(f3, n6), C.currentNode = this.el.content, 2 === s3 || 3 === s3) {
        const t6 = this.el.content.firstChild;
        t6.replaceWith(...t6.childNodes);
      }
      for (; null !== (r6 = C.nextNode()) && d3.length < u3; ) {
        if (1 === r6.nodeType) {
          if (r6.hasAttributes())
            for (const t6 of r6.getAttributeNames())
              if (t6.endsWith(e4)) {
                const i7 = v2[a3++], s4 = r6.getAttribute(t6).split(h2), e7 = /([.?@])?(.*)/.exec(i7);
                d3.push({ type: 1, index: c4, name: e7[2], strings: s4, ctor: "." === e7[1] ? H : "?" === e7[1] ? I : "@" === e7[1] ? L : k }), r6.removeAttribute(t6);
              } else
                t6.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r6.removeAttribute(t6));
          if ($.test(r6.tagName)) {
            const t6 = r6.textContent.split(h2), s4 = t6.length - 1;
            if (s4 > 0) {
              r6.textContent = i3 ? i3.emptyScript : "";
              for (let i7 = 0; i7 < s4; i7++)
                r6.append(t6[i7], l2()), C.nextNode(), d3.push({ type: 2, index: ++c4 });
              r6.append(t6[s4], l2());
            }
          }
        } else if (8 === r6.nodeType)
          if (r6.data === o4)
            d3.push({ type: 2, index: c4 });
          else {
            let t6 = -1;
            for (; -1 !== (t6 = r6.data.indexOf(h2, t6 + 1)); )
              d3.push({ type: 7, index: c4 }), t6 += h2.length - 1;
          }
        c4++;
      }
    }
    static createElement(t5, i7) {
      const s3 = r4.createElement("template");
      return s3.innerHTML = t5, s3;
    }
  };
  function S2(t5, i7, s3 = t5, e7) {
    if (i7 === T)
      return i7;
    let h3 = void 0 !== e7 ? s3._$Co?.[e7] : s3._$Cl;
    const o6 = c3(i7) ? void 0 : i7._$litDirective$;
    return h3?.constructor !== o6 && (h3?._$AO?.(false), void 0 === o6 ? h3 = void 0 : (h3 = new o6(t5), h3._$AT(t5, s3, e7)), void 0 !== e7 ? (s3._$Co ??= [])[e7] = h3 : s3._$Cl = h3), void 0 !== h3 && (i7 = S2(t5, h3._$AS(t5, i7.values), h3, e7)), i7;
  }
  var M = class {
    constructor(t5, i7) {
      this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i7;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t5) {
      const { el: { content: i7 }, parts: s3 } = this._$AD, e7 = (t5?.creationScope ?? r4).importNode(i7, true);
      C.currentNode = e7;
      let h3 = C.nextNode(), o6 = 0, n6 = 0, l3 = s3[0];
      for (; void 0 !== l3; ) {
        if (o6 === l3.index) {
          let i8;
          2 === l3.type ? i8 = new R(h3, h3.nextSibling, this, t5) : 1 === l3.type ? i8 = new l3.ctor(h3, l3.name, l3.strings, this, t5) : 6 === l3.type && (i8 = new z(h3, this, t5)), this._$AV.push(i8), l3 = s3[++n6];
        }
        o6 !== l3?.index && (h3 = C.nextNode(), o6++);
      }
      return C.currentNode = r4, e7;
    }
    p(t5) {
      let i7 = 0;
      for (const s3 of this._$AV)
        void 0 !== s3 && (void 0 !== s3.strings ? (s3._$AI(t5, s3, i7), i7 += s3.strings.length - 2) : s3._$AI(t5[i7])), i7++;
    }
  };
  var R = class _R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t5, i7, s3, e7) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t5, this._$AB = i7, this._$AM = s3, this.options = e7, this._$Cv = e7?.isConnected ?? true;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i7 = this._$AM;
      return void 0 !== i7 && 11 === t5?.nodeType && (t5 = i7.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i7 = this) {
      t5 = S2(this, t5, i7), c3(t5) ? t5 === E || null == t5 || "" === t5 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t5 !== this._$AH && t5 !== T && this._(t5) : void 0 !== t5._$litType$ ? this.$(t5) : void 0 !== t5.nodeType ? this.T(t5) : u2(t5) ? this.k(t5) : this._(t5);
    }
    O(t5) {
      return this._$AA.parentNode.insertBefore(t5, this._$AB);
    }
    T(t5) {
      this._$AH !== t5 && (this._$AR(), this._$AH = this.O(t5));
    }
    _(t5) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t5 : this.T(r4.createTextNode(t5)), this._$AH = t5;
    }
    $(t5) {
      const { values: i7, _$litType$: s3 } = t5, e7 = "number" == typeof s3 ? this._$AC(t5) : (void 0 === s3.el && (s3.el = N.createElement(P(s3.h, s3.h[0]), this.options)), s3);
      if (this._$AH?._$AD === e7)
        this._$AH.p(i7);
      else {
        const t6 = new M(e7, this), s4 = t6.u(this.options);
        t6.p(i7), this.T(s4), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i7 = A.get(t5.strings);
      return void 0 === i7 && A.set(t5.strings, i7 = new N(t5)), i7;
    }
    k(t5) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i7 = this._$AH;
      let s3, e7 = 0;
      for (const h3 of t5)
        e7 === i7.length ? i7.push(s3 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s3 = i7[e7], s3._$AI(h3), e7++;
      e7 < i7.length && (this._$AR(s3 && s3._$AB.nextSibling, e7), i7.length = e7);
    }
    _$AR(t5 = this._$AA.nextSibling, i7) {
      for (this._$AP?.(false, true, i7); t5 && t5 !== this._$AB; ) {
        const i8 = t5.nextSibling;
        t5.remove(), t5 = i8;
      }
    }
    setConnected(t5) {
      void 0 === this._$AM && (this._$Cv = t5, this._$AP?.(t5));
    }
  };
  var k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t5, i7, s3, e7, h3) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t5, this.name = i7, this._$AM = e7, this.options = h3, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String()), this.strings = s3) : this._$AH = E;
    }
    _$AI(t5, i7 = this, s3, e7) {
      const h3 = this.strings;
      let o6 = false;
      if (void 0 === h3)
        t5 = S2(this, t5, i7, 0), o6 = !c3(t5) || t5 !== this._$AH && t5 !== T, o6 && (this._$AH = t5);
      else {
        const e8 = t5;
        let n6, r6;
        for (t5 = h3[0], n6 = 0; n6 < h3.length - 1; n6++)
          r6 = S2(this, e8[s3 + n6], i7, n6), r6 === T && (r6 = this._$AH[n6]), o6 ||= !c3(r6) || r6 !== this._$AH[n6], r6 === E ? t5 = E : t5 !== E && (t5 += (r6 ?? "") + h3[n6 + 1]), this._$AH[n6] = r6;
      }
      o6 && !e7 && this.j(t5);
    }
    j(t5) {
      t5 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 ?? "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t5) {
      this.element[this.name] = t5 === E ? void 0 : t5;
    }
  };
  var I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t5) {
      this.element.toggleAttribute(this.name, !!t5 && t5 !== E);
    }
  };
  var L = class extends k {
    constructor(t5, i7, s3, e7, h3) {
      super(t5, i7, s3, e7, h3), this.type = 5;
    }
    _$AI(t5, i7 = this) {
      if ((t5 = S2(this, t5, i7, 0) ?? E) === T)
        return;
      const s3 = this._$AH, e7 = t5 === E && s3 !== E || t5.capture !== s3.capture || t5.once !== s3.once || t5.passive !== s3.passive, h3 = t5 !== E && (s3 === E || e7);
      e7 && this.element.removeEventListener(this.name, this, s3), h3 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var z = class {
    constructor(t5, i7, s3) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s3;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      S2(this, t5);
    }
  };
  var j = t3.litHtmlPolyfillSupport;
  j?.(N, R), (t3.litHtmlVersions ??= []).push("3.2.1");
  var B = (t5, i7, s3) => {
    const e7 = s3?.renderBefore ?? i7;
    let h3 = e7._$litPart$;
    if (void 0 === h3) {
      const t6 = s3?.renderBefore ?? null;
      e7._$litPart$ = h3 = new R(i7.insertBefore(l2(), t6), t6, void 0, s3 ?? {});
    }
    return h3._$AI(t5), h3;
  };

  // node_modules/lit-element/lit-element.js
  var r5 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t5 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t5.firstChild, t5;
    }
    update(t5) {
      const s3 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = B(s3, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  };
  r5._$litElement$ = true, r5["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: r5 });
  var i4 = globalThis.litElementPolyfillSupport;
  i4?.({ LitElement: r5 });
  (globalThis.litElementVersions ??= []).push("4.1.1");

  // node_modules/@material/web/icon/internal/icon.js
  var Icon = class extends r5 {
    render() {
      return x`<slot></slot>`;
    }
    connectedCallback() {
      super.connectedCallback();
      const ariaHidden = this.getAttribute("aria-hidden");
      if (ariaHidden === "false") {
        this.removeAttribute("aria-hidden");
        return;
      }
      this.setAttribute("aria-hidden", "true");
    }
  };

  // node_modules/@material/web/icon/internal/icon-styles.js
  var styles = i`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;

  // node_modules/@material/web/icon/icon.js
  var MdIcon = class MdIcon2 extends Icon {
  };
  MdIcon.styles = [styles];
  MdIcon = __decorate([
    t("md-icon")
  ], MdIcon);

  // node_modules/@adobe/lit-mobx/lib/mixin-custom.js
  var reaction = Symbol("LitMobxRenderReaction");
  var cachedRequestUpdate = Symbol("LitMobxRequestUpdate");
  function MobxReactionUpdateCustom(constructor, ReactionConstructor) {
    var _a2, _b;
    return _b = class MobxReactingElement extends constructor {
      constructor() {
        super(...arguments);
        this[_a2] = () => {
          this.requestUpdate();
        };
      }
      connectedCallback() {
        super.connectedCallback();
        const name = this.constructor.name || this.nodeName;
        this[reaction] = new ReactionConstructor(`${name}.update()`, this[cachedRequestUpdate]);
        if (this.hasUpdated)
          this.requestUpdate();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        if (this[reaction]) {
          this[reaction].dispose();
          this[reaction] = void 0;
        }
      }
      update(changedProperties) {
        if (this[reaction]) {
          this[reaction].track(super.update.bind(this, changedProperties));
        } else {
          super.update(changedProperties);
        }
      }
    }, _a2 = cachedRequestUpdate, _b;
  }

  // node_modules/mobx/lib/mobx.module.js
  var extendStatics = function(d3, b3) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b4) {
      d4.__proto__ = b4;
    } || function(d4, b4) {
      for (var p3 in b4)
        if (b4.hasOwnProperty(p3))
          d4[p3] = b4[p3];
    };
    return extendStatics(d3, b3);
  };
  function __extends(d3, b3) {
    extendStatics(d3, b3);
    function __() {
      this.constructor = d3;
    }
    d3.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t5) {
      for (var s3, i7 = 1, n6 = arguments.length; i7 < n6; i7++) {
        s3 = arguments[i7];
        for (var p3 in s3)
          if (Object.prototype.hasOwnProperty.call(s3, p3))
            t5[p3] = s3[p3];
      }
      return t5;
    };
    return __assign.apply(this, arguments);
  };
  function __values(o6) {
    var m2 = typeof Symbol === "function" && o6[Symbol.iterator], i7 = 0;
    if (m2)
      return m2.call(o6);
    return {
      next: function() {
        if (o6 && i7 >= o6.length)
          o6 = void 0;
        return { value: o6 && o6[i7++], done: !o6 };
      }
    };
  }
  function __read(o6, n6) {
    var m2 = typeof Symbol === "function" && o6[Symbol.iterator];
    if (!m2)
      return o6;
    var i7 = m2.call(o6), r6, ar = [], e7;
    try {
      while ((n6 === void 0 || n6-- > 0) && !(r6 = i7.next()).done)
        ar.push(r6.value);
    } catch (error) {
      e7 = { error };
    } finally {
      try {
        if (r6 && !r6.done && (m2 = i7["return"]))
          m2.call(i7);
      } finally {
        if (e7)
          throw e7.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i7 = 0; i7 < arguments.length; i7++)
      ar = ar.concat(__read(arguments[i7]));
    return ar;
  }
  var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is a production build.";
  var EMPTY_ARRAY = [];
  Object.freeze(EMPTY_ARRAY);
  var EMPTY_OBJECT = {};
  Object.freeze(EMPTY_OBJECT);
  function getNextId() {
    return ++globalState.mobxGuid;
  }
  function fail(message) {
    invariant(false, message);
    throw "X";
  }
  function invariant(check, message) {
    if (!check)
      throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
  }
  function once(func) {
    var invoked = false;
    return function() {
      if (invoked)
        return;
      invoked = true;
      return func.apply(this, arguments);
    };
  }
  var noop = function() {
  };
  function unique(list) {
    var res = [];
    list.forEach(function(item) {
      if (res.indexOf(item) === -1)
        res.push(item);
    });
    return res;
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isPlainObject(value) {
    if (value === null || typeof value !== "object")
      return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
  }
  function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
      enumerable: false,
      writable: true,
      configurable: true,
      value
    });
  }
  function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
      enumerable: false,
      writable: false,
      configurable: true,
      value
    });
  }
  function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || descriptor.configurable !== false && descriptor.writable !== false;
  }
  function assertPropertyConfigurable(object, prop) {
    if (!isPropertyConfigurable(object, prop))
      fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
  }
  function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function(x2) {
      return isObject(x2) && x2[propName] === true;
    };
  }
  function isES6Map(thing) {
    return thing instanceof Map;
  }
  function isES6Set(thing) {
    return thing instanceof Set;
  }
  function getPlainObjectKeys(object) {
    var enumerables = /* @__PURE__ */ new Set();
    for (var key in object)
      enumerables.add(key);
    Object.getOwnPropertySymbols(object).forEach(function(k2) {
      if (Object.getOwnPropertyDescriptor(object, k2).enumerable)
        enumerables.add(k2);
    });
    return Array.from(enumerables);
  }
  function stringifyKey(key) {
    if (key && key.toString)
      return key.toString();
    else
      return new String(key).toString();
  }
  function getMapLikeKeys(map2) {
    if (isPlainObject(map2))
      return Object.keys(map2);
    if (Array.isArray(map2))
      return map2.map(function(_a2) {
        var _b = __read(_a2, 1), key = _b[0];
        return key;
      });
    if (isES6Map(map2) || isObservableMap(map2))
      return Array.from(map2.keys());
    return fail("Cannot get keys from '" + map2 + "'");
  }
  function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
  }
  var $mobx = Symbol("mobx administration");
  var Atom = (
    /** @class */
    function() {
      function Atom2(name) {
        if (name === void 0) {
          name = "Atom@" + getNextId();
        }
        this.name = name;
        this.isPendingUnobservation = false;
        this.isBeingObserved = false;
        this.observers = /* @__PURE__ */ new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
      }
      Atom2.prototype.onBecomeObserved = function() {
        if (this.onBecomeObservedListeners) {
          this.onBecomeObservedListeners.forEach(function(listener) {
            return listener();
          });
        }
      };
      Atom2.prototype.onBecomeUnobserved = function() {
        if (this.onBecomeUnobservedListeners) {
          this.onBecomeUnobservedListeners.forEach(function(listener) {
            return listener();
          });
        }
      };
      Atom2.prototype.reportObserved = function() {
        return reportObserved(this);
      };
      Atom2.prototype.reportChanged = function() {
        startBatch();
        propagateChanged(this);
        endBatch();
      };
      Atom2.prototype.toString = function() {
        return this.name;
      };
      return Atom2;
    }()
  );
  var isAtom = createInstanceofPredicate("Atom", Atom);
  function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) {
      onBecomeObservedHandler = noop;
    }
    if (onBecomeUnobservedHandler === void 0) {
      onBecomeUnobservedHandler = noop;
    }
    var atom = new Atom(name);
    if (onBecomeObservedHandler !== noop) {
      onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
      onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
  }
  function identityComparer(a3, b3) {
    return a3 === b3;
  }
  function structuralComparer(a3, b3) {
    return deepEqual(a3, b3);
  }
  function shallowComparer(a3, b3) {
    return deepEqual(a3, b3, 1);
  }
  function defaultComparer(a3, b3) {
    return Object.is(a3, b3);
  }
  var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
  };
  var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
  var mobxPendingDecorators = Symbol("mobx pending decorators");
  var enumerableDescriptorCache = {};
  var nonEnumerableDescriptorCache = {};
  function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache2 = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return cache2[prop] || (cache2[prop] = {
      configurable: true,
      enumerable,
      get: function() {
        initializeInstance(this);
        return this[prop];
      },
      set: function(value) {
        initializeInstance(this);
        this[prop] = value;
      }
    });
  }
  function initializeInstance(target) {
    var e_1, _a2;
    if (target[mobxDidRunLazyInitializersSymbol] === true)
      return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
      addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
      var keys2 = __spread(Object.getOwnPropertySymbols(decorators), Object.keys(decorators));
      try {
        for (var keys_1 = __values(keys2), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
          var key = keys_1_1.value;
          var d3 = decorators[key];
          d3.propertyCreator(target, d3.prop, d3.descriptor, d3.decoratorTarget, d3.decoratorArguments);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (keys_1_1 && !keys_1_1.done && (_a2 = keys_1.return))
            _a2.call(keys_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
  }
  function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
      var decoratorArguments;
      var decorator = function decorate(target, prop, descriptor, applyImmediately) {
        if (applyImmediately === true) {
          propertyCreator(target, prop, descriptor, target, decoratorArguments);
          return null;
        }
        if (!quacksLikeADecorator(arguments))
          fail("This function is a decorator, but it wasn't invoked like a decorator");
        if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
          var inheritedDecorators = target[mobxPendingDecorators];
          addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
        }
        target[mobxPendingDecorators][prop] = {
          prop,
          propertyCreator,
          descriptor,
          decoratorTarget: target,
          decoratorArguments
        };
        return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
      };
      if (quacksLikeADecorator(arguments)) {
        decoratorArguments = EMPTY_ARRAY;
        return decorator.apply(null, arguments);
      } else {
        decoratorArguments = Array.prototype.slice.call(arguments);
        return decorator;
      }
    };
  }
  function quacksLikeADecorator(args) {
    return (args.length === 2 || args.length === 3) && (typeof args[1] === "string" || typeof args[1] === "symbol") || args.length === 4 && args[3] === true;
  }
  function deepEnhancer(v2, _2, name) {
    if (isObservable(v2))
      return v2;
    if (Array.isArray(v2))
      return observable.array(v2, { name });
    if (isPlainObject(v2))
      return observable.object(v2, void 0, { name });
    if (isES6Map(v2))
      return observable.map(v2, { name });
    if (isES6Set(v2))
      return observable.set(v2, { name });
    return v2;
  }
  function shallowEnhancer(v2, _2, name) {
    if (v2 === void 0 || v2 === null)
      return v2;
    if (isObservableObject(v2) || isObservableArray(v2) || isObservableMap(v2) || isObservableSet(v2))
      return v2;
    if (Array.isArray(v2))
      return observable.array(v2, { name, deep: false });
    if (isPlainObject(v2))
      return observable.object(v2, void 0, { name, deep: false });
    if (isES6Map(v2))
      return observable.map(v2, { name, deep: false });
    if (isES6Set(v2))
      return observable.set(v2, { name, deep: false });
    return fail("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
  }
  function referenceEnhancer(newValue) {
    return newValue;
  }
  function refStructEnhancer(v2, oldValue, name) {
    if (isObservable(v2))
      throw "observable.struct should not be used with observable values";
    if (deepEqual(v2, oldValue))
      return oldValue;
    return v2;
  }
  function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function(target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
      if (true) {
        invariant(!descriptor || !descriptor.get, '@observable cannot be used on getter (property "' + stringifyKey(propertyName) + '"), use @computed instead.');
      }
      var initialValue = descriptor ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value : void 0;
      asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = (
      // Extra process checks, as this happens during module initialization
      typeof process !== "undefined" && process.env && true ? function observableDecorator() {
        if (arguments.length < 2)
          return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
        return decorator.apply(null, arguments);
      } : decorator
    );
    res.enhancer = enhancer;
    return res;
  }
  var defaultCreateObservableOptions = {
    deep: true,
    name: void 0,
    defaultDecorator: void 0,
    proxy: true
  };
  Object.freeze(defaultCreateObservableOptions);
  function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
      fail("invalid option for (extend)observable: " + key);
  }
  function asCreateObservableOptions(thing) {
    if (thing === null || thing === void 0)
      return defaultCreateObservableOptions;
    if (typeof thing === "string")
      return { name: thing, deep: true, proxy: true };
    if (true) {
      if (typeof thing !== "object")
        return fail("expected options object");
      Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
  }
  var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
  var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
  var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
  var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
  function getEnhancerFromOptions(options) {
    return options.defaultDecorator ? options.defaultDecorator.enhancer : options.deep === false ? referenceEnhancer : deepEnhancer;
  }
  function createObservable(v2, arg2, arg3) {
    if (typeof arguments[1] === "string" || typeof arguments[1] === "symbol") {
      return deepDecorator.apply(null, arguments);
    }
    if (isObservable(v2))
      return v2;
    var res = isPlainObject(v2) ? observable.object(v2, arg2, arg3) : Array.isArray(v2) ? observable.array(v2, arg2) : isES6Map(v2) ? observable.map(v2, arg2) : isES6Set(v2) ? observable.set(v2, arg2) : v2;
    if (res !== v2)
      return res;
    fail("The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
  }
  var observableFactories = {
    box: function(value, options) {
      if (arguments.length > 2)
        incorrectlyUsedAsDecorator("box");
      var o6 = asCreateObservableOptions(options);
      return new ObservableValue(value, getEnhancerFromOptions(o6), o6.name, true, o6.equals);
    },
    array: function(initialValues, options) {
      if (arguments.length > 2)
        incorrectlyUsedAsDecorator("array");
      var o6 = asCreateObservableOptions(options);
      return createObservableArray(initialValues, getEnhancerFromOptions(o6), o6.name);
    },
    map: function(initialValues, options) {
      if (arguments.length > 2)
        incorrectlyUsedAsDecorator("map");
      var o6 = asCreateObservableOptions(options);
      return new ObservableMap(initialValues, getEnhancerFromOptions(o6), o6.name);
    },
    set: function(initialValues, options) {
      if (arguments.length > 2)
        incorrectlyUsedAsDecorator("set");
      var o6 = asCreateObservableOptions(options);
      return new ObservableSet(initialValues, getEnhancerFromOptions(o6), o6.name);
    },
    object: function(props, decorators, options) {
      if (typeof arguments[1] === "string")
        incorrectlyUsedAsDecorator("object");
      var o6 = asCreateObservableOptions(options);
      if (o6.proxy === false) {
        return extendObservable({}, props, decorators, o6);
      } else {
        var defaultDecorator = getDefaultDecoratorFromObjectOptions(o6);
        var base = extendObservable({}, void 0, void 0, o6);
        var proxy = createDynamicObservableObject(base);
        extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
        return proxy;
      }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
  };
  var observable = createObservable;
  Object.keys(observableFactories).forEach(function(name) {
    return observable[name] = observableFactories[name];
  });
  function incorrectlyUsedAsDecorator(methodName) {
    fail(
      // process.env.NODE_ENV !== "production" &&
      "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?"
    );
  }
  var computedDecorator = createPropDecorator(false, function(instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get3 = descriptor.get, set4 = descriptor.set;
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({
      get: get3,
      set: set4,
      context: instance
    }, options));
  });
  var computedStructDecorator = computedDecorator({ equals: comparer.structural });
  var computed = function computed2(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
      return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
      return computedDecorator.apply(null, arguments);
    }
    if (true) {
      invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
      invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || "";
    return new ComputedValue(opts);
  };
  computed.struct = computedStructDecorator;
  var IDerivationState;
  (function(IDerivationState2) {
    IDerivationState2[IDerivationState2["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    IDerivationState2[IDerivationState2["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    IDerivationState2[IDerivationState2["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    IDerivationState2[IDerivationState2["STALE"] = 2] = "STALE";
  })(IDerivationState || (IDerivationState = {}));
  var TraceMode;
  (function(TraceMode2) {
    TraceMode2[TraceMode2["NONE"] = 0] = "NONE";
    TraceMode2[TraceMode2["LOG"] = 1] = "LOG";
    TraceMode2[TraceMode2["BREAK"] = 2] = "BREAK";
  })(TraceMode || (TraceMode = {}));
  var CaughtException = (
    /** @class */
    /* @__PURE__ */ function() {
      function CaughtException2(cause) {
        this.cause = cause;
      }
      return CaughtException2;
    }()
  );
  function isCaughtException(e7) {
    return e7 instanceof CaughtException;
  }
  function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
      case IDerivationState.UP_TO_DATE:
        return false;
      case IDerivationState.NOT_TRACKING:
      case IDerivationState.STALE:
        return true;
      case IDerivationState.POSSIBLY_STALE: {
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart();
        var obs = derivation.observing, l3 = obs.length;
        for (var i7 = 0; i7 < l3; i7++) {
          var obj = obs[i7];
          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e7) {
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            }
            if (derivation.dependenciesState === IDerivationState.STALE) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }
        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
    }
  }
  function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    if (globalState.computationDepth > 0 && hasObservers)
      fail("Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
      fail((globalState.enforceActions ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") + atom.name);
  }
  function checkIfStateReadsAreAllowed(observable2) {
    if (!globalState.allowStateReads && globalState.observableRequiresReaction) {
      console.warn("[mobx] Observable " + observable2.name + " being read outside a reactive context");
    }
  }
  function trackDerivedFunction(derivation, f3, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
      result = f3.call(context);
    } else {
      try {
        result = f3.call(context);
      } catch (e7) {
        result = new CaughtException(e7);
      }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
  }
  function warnAboutDerivationWithoutDependencies(derivation) {
    if (false)
      return;
    if (derivation.observing.length !== 0)
      return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
      console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
  }
  function bindDependencies(derivation) {
    var prevObserving = derivation.observing;
    var observing = derivation.observing = derivation.newObserving;
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    var i0 = 0, l3 = derivation.unboundDepsCount;
    for (var i7 = 0; i7 < l3; i7++) {
      var dep = observing[i7];
      if (dep.diffValue === 0) {
        dep.diffValue = 1;
        if (i0 !== i7)
          observing[i0] = dep;
        i0++;
      }
      if (dep.dependenciesState > lowestNewObservingDerivationState) {
        lowestNewObservingDerivationState = dep.dependenciesState;
      }
    }
    observing.length = i0;
    derivation.newObserving = null;
    l3 = prevObserving.length;
    while (l3--) {
      var dep = prevObserving[l3];
      if (dep.diffValue === 0) {
        removeObserver(dep, derivation);
      }
      dep.diffValue = 0;
    }
    while (i0--) {
      var dep = observing[i0];
      if (dep.diffValue === 1) {
        dep.diffValue = 0;
        addObserver(dep, derivation);
      }
    }
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
      derivation.dependenciesState = lowestNewObservingDerivationState;
      derivation.onBecomeStale();
    }
  }
  function clearObserving(derivation) {
    var obs = derivation.observing;
    derivation.observing = [];
    var i7 = obs.length;
    while (i7--)
      removeObserver(obs[i7], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
  }
  function untracked(action3) {
    var prev = untrackedStart();
    try {
      return action3();
    } finally {
      untrackedEnd(prev);
    }
  }
  function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
  }
  function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
  }
  function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
  }
  function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
  }
  function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
      return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i7 = obs.length;
    while (i7--)
      obs[i7].lowestObserverState = IDerivationState.UP_TO_DATE;
  }
  var currentActionId = 0;
  var nextActionId = 1;
  var functionNameDescriptor = Object.getOwnPropertyDescriptor(function() {
  }, "name");
  var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;
  function createAction(actionName, fn, ref) {
    if (true) {
      invariant(typeof fn === "function", "`action` can only be invoked on functions");
      if (typeof actionName !== "string" || !actionName)
        fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function() {
      return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    if (true) {
      if (isFunctionNameConfigurable) {
        Object.defineProperty(res, "name", { value: actionName });
      }
    }
    return res;
  }
  function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
      return fn.apply(scope, args);
    } catch (err) {
      runInfo.error = err;
      throw err;
    } finally {
      _endAction(runInfo);
    }
  }
  function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && true) {
      startTime = Date.now();
      var l3 = args && args.length || 0;
      var flattendArgs = new Array(l3);
      if (l3 > 0)
        for (var i7 = 0; i7 < l3; i7++)
          flattendArgs[i7] = args[i7];
      spyReportStart({
        type: "action",
        name: actionName,
        object: scope,
        arguments: flattendArgs
      });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
      prevDerivation,
      prevAllowStateChanges,
      prevAllowStateReads,
      notifySpy,
      startTime,
      actionId: nextActionId++,
      parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
  }
  function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
      fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== void 0) {
      globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && true) {
      spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
  }
  function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
  }
  function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
  }
  var ObservableValue = (
    /** @class */
    function(_super) {
      __extends(ObservableValue2, _super);
      function ObservableValue2(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) {
          name = "ObservableValue@" + getNextId();
        }
        if (notifySpy === void 0) {
          notifySpy = true;
        }
        if (equals === void 0) {
          equals = comparer.default;
        }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, void 0, name);
        if (notifySpy && isSpyEnabled() && true) {
          spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
      }
      ObservableValue2.prototype.dehanceValue = function(value) {
        if (this.dehancer !== void 0)
          return this.dehancer(value);
        return value;
      };
      ObservableValue2.prototype.set = function(newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
          var notifySpy = isSpyEnabled();
          if (notifySpy && true) {
            spyReportStart({
              type: "update",
              name: this.name,
              newValue,
              oldValue
            });
          }
          this.setNewValue(newValue);
          if (notifySpy && true)
            spyReportEnd();
        }
      };
      ObservableValue2.prototype.prepareNewValue = function(newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this,
            type: "update",
            newValue
          });
          if (!change)
            return globalState.UNCHANGED;
          newValue = change.newValue;
        }
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
      };
      ObservableValue2.prototype.setNewValue = function(newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
          notifyListeners(this, {
            type: "update",
            object: this,
            newValue,
            oldValue
          });
        }
      };
      ObservableValue2.prototype.get = function() {
        this.reportObserved();
        return this.dehanceValue(this.value);
      };
      ObservableValue2.prototype.intercept = function(handler) {
        return registerInterceptor(this, handler);
      };
      ObservableValue2.prototype.observe = function(listener, fireImmediately) {
        if (fireImmediately)
          listener({
            object: this,
            type: "update",
            newValue: this.value,
            oldValue: void 0
          });
        return registerListener(this, listener);
      };
      ObservableValue2.prototype.toJSON = function() {
        return this.get();
      };
      ObservableValue2.prototype.toString = function() {
        return this.name + "[" + this.value + "]";
      };
      ObservableValue2.prototype.valueOf = function() {
        return toPrimitive(this.get());
      };
      ObservableValue2.prototype[Symbol.toPrimitive] = function() {
        return this.valueOf();
      };
      return ObservableValue2;
    }(Atom)
  );
  var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
  var ComputedValue = (
    /** @class */
    function() {
      function ComputedValue2(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = [];
        this.newObserving = null;
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = /* @__PURE__ */ new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false;
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        invariant(options.get, "missing option for computed: get");
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
          this.setter = createAction(this.name + "-setter", options.set);
        this.equals = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
      }
      ComputedValue2.prototype.onBecomeStale = function() {
        propagateMaybeChanged(this);
      };
      ComputedValue2.prototype.onBecomeObserved = function() {
        if (this.onBecomeObservedListeners) {
          this.onBecomeObservedListeners.forEach(function(listener) {
            return listener();
          });
        }
      };
      ComputedValue2.prototype.onBecomeUnobserved = function() {
        if (this.onBecomeUnobservedListeners) {
          this.onBecomeUnobservedListeners.forEach(function(listener) {
            return listener();
          });
        }
      };
      ComputedValue2.prototype.get = function() {
        if (this.isComputing)
          fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
          if (shouldCompute(this)) {
            this.warnAboutUntrackedRead();
            startBatch();
            this.value = this.computeValue(false);
            endBatch();
          }
        } else {
          reportObserved(this);
          if (shouldCompute(this)) {
            if (this.trackAndCompute())
              propagateChangeConfirmed(this);
          }
        }
        var result = this.value;
        if (isCaughtException(result))
          throw result.cause;
        return result;
      };
      ComputedValue2.prototype.peek = function() {
        var res = this.computeValue(false);
        if (isCaughtException(res))
          throw res.cause;
        return res;
      };
      ComputedValue2.prototype.set = function(value) {
        if (this.setter) {
          invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
          this.isRunningSetter = true;
          try {
            this.setter.call(this.scope, value);
          } finally {
            this.isRunningSetter = false;
          }
        } else
          invariant(false, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
      };
      ComputedValue2.prototype.trackAndCompute = function() {
        if (isSpyEnabled() && true) {
          spyReport({
            object: this.scope,
            type: "compute",
            name: this.name
          });
        }
        var oldValue = this.value;
        var wasSuspended = (
          /* see #1208 */
          this.dependenciesState === IDerivationState.NOT_TRACKING
        );
        var newValue = this.computeValue(true);
        var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals(oldValue, newValue);
        if (changed) {
          this.value = newValue;
        }
        return changed;
      };
      ComputedValue2.prototype.computeValue = function(track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
          res = trackDerivedFunction(this, this.derivation, this.scope);
        } else {
          if (globalState.disableErrorBoundaries === true) {
            res = this.derivation.call(this.scope);
          } else {
            try {
              res = this.derivation.call(this.scope);
            } catch (e7) {
              res = new CaughtException(e7);
            }
          }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
      };
      ComputedValue2.prototype.suspend = function() {
        if (!this.keepAlive) {
          clearObserving(this);
          this.value = void 0;
        }
      };
      ComputedValue2.prototype.observe = function(listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = void 0;
        return autorun(function() {
          var newValue = _this.get();
          if (!firstTime || fireImmediately) {
            var prevU = untrackedStart();
            listener({
              type: "update",
              object: _this,
              newValue,
              oldValue: prevValue
            });
            untrackedEnd(prevU);
          }
          firstTime = false;
          prevValue = newValue;
        });
      };
      ComputedValue2.prototype.warnAboutUntrackedRead = function() {
        if (false)
          return;
        if (this.requiresReaction === true) {
          fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
          console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
          console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
      };
      ComputedValue2.prototype.toJSON = function() {
        return this.get();
      };
      ComputedValue2.prototype.toString = function() {
        return this.name + "[" + this.derivation.toString() + "]";
      };
      ComputedValue2.prototype.valueOf = function() {
        return toPrimitive(this.get());
      };
      ComputedValue2.prototype[Symbol.toPrimitive] = function() {
        return this.valueOf();
      };
      return ComputedValue2;
    }()
  );
  var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
  var MobXGlobals = (
    /** @class */
    /* @__PURE__ */ function() {
      function MobXGlobals2() {
        this.version = 5;
        this.UNCHANGED = {};
        this.trackingDerivation = null;
        this.computationDepth = 0;
        this.runId = 0;
        this.mobxGuid = 0;
        this.inBatch = 0;
        this.pendingUnobservations = [];
        this.pendingReactions = [];
        this.isRunningReactions = false;
        this.allowStateChanges = true;
        this.allowStateReads = true;
        this.enforceActions = false;
        this.spyListeners = [];
        this.globalReactionErrorHandlers = [];
        this.computedRequiresReaction = false;
        this.reactionRequiresObservable = false;
        this.observableRequiresReaction = false;
        this.computedConfigurable = false;
        this.disableErrorBoundaries = false;
        this.suppressReactionErrors = false;
      }
      return MobXGlobals2;
    }()
  );
  var mockGlobal = {};
  function getGlobal() {
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    return mockGlobal;
  }
  var canMergeGlobalState = true;
  var isolateCalled = false;
  var globalState = function() {
    var global2 = getGlobal();
    if (global2.__mobxInstanceCount > 0 && !global2.__mobxGlobals)
      canMergeGlobalState = false;
    if (global2.__mobxGlobals && global2.__mobxGlobals.version !== new MobXGlobals().version)
      canMergeGlobalState = false;
    if (!canMergeGlobalState) {
      setTimeout(function() {
        if (!isolateCalled) {
          fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
        }
      }, 1);
      return new MobXGlobals();
    } else if (global2.__mobxGlobals) {
      global2.__mobxInstanceCount += 1;
      if (!global2.__mobxGlobals.UNCHANGED)
        global2.__mobxGlobals.UNCHANGED = {};
      return global2.__mobxGlobals;
    } else {
      global2.__mobxInstanceCount = 1;
      return global2.__mobxGlobals = new MobXGlobals();
    }
  }();
  function addObserver(observable2, node) {
    observable2.observers.add(node);
    if (observable2.lowestObserverState > node.dependenciesState)
      observable2.lowestObserverState = node.dependenciesState;
  }
  function removeObserver(observable2, node) {
    observable2.observers.delete(node);
    if (observable2.observers.size === 0) {
      queueForUnobservation(observable2);
    }
  }
  function queueForUnobservation(observable2) {
    if (observable2.isPendingUnobservation === false) {
      observable2.isPendingUnobservation = true;
      globalState.pendingUnobservations.push(observable2);
    }
  }
  function startBatch() {
    globalState.inBatch++;
  }
  function endBatch() {
    if (--globalState.inBatch === 0) {
      runReactions();
      var list = globalState.pendingUnobservations;
      for (var i7 = 0; i7 < list.length; i7++) {
        var observable2 = list[i7];
        observable2.isPendingUnobservation = false;
        if (observable2.observers.size === 0) {
          if (observable2.isBeingObserved) {
            observable2.isBeingObserved = false;
            observable2.onBecomeUnobserved();
          }
          if (observable2 instanceof ComputedValue) {
            observable2.suspend();
          }
        }
      }
      globalState.pendingUnobservations = [];
    }
  }
  function reportObserved(observable2) {
    checkIfStateReadsAreAllowed(observable2);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
      if (derivation.runId !== observable2.lastAccessedBy) {
        observable2.lastAccessedBy = derivation.runId;
        derivation.newObserving[derivation.unboundDepsCount++] = observable2;
        if (!observable2.isBeingObserved) {
          observable2.isBeingObserved = true;
          observable2.onBecomeObserved();
        }
      }
      return true;
    } else if (observable2.observers.size === 0 && globalState.inBatch > 0) {
      queueForUnobservation(observable2);
    }
    return false;
  }
  function propagateChanged(observable2) {
    if (observable2.lowestObserverState === IDerivationState.STALE)
      return;
    observable2.lowestObserverState = IDerivationState.STALE;
    observable2.observers.forEach(function(d3) {
      if (d3.dependenciesState === IDerivationState.UP_TO_DATE) {
        if (d3.isTracing !== TraceMode.NONE) {
          logTraceInfo(d3, observable2);
        }
        d3.onBecomeStale();
      }
      d3.dependenciesState = IDerivationState.STALE;
    });
  }
  function propagateChangeConfirmed(observable2) {
    if (observable2.lowestObserverState === IDerivationState.STALE)
      return;
    observable2.lowestObserverState = IDerivationState.STALE;
    observable2.observers.forEach(function(d3) {
      if (d3.dependenciesState === IDerivationState.POSSIBLY_STALE)
        d3.dependenciesState = IDerivationState.STALE;
      else if (d3.dependenciesState === IDerivationState.UP_TO_DATE)
        observable2.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
  }
  function propagateMaybeChanged(observable2) {
    if (observable2.lowestObserverState !== IDerivationState.UP_TO_DATE)
      return;
    observable2.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable2.observers.forEach(function(d3) {
      if (d3.dependenciesState === IDerivationState.UP_TO_DATE) {
        d3.dependenciesState = IDerivationState.POSSIBLY_STALE;
        if (d3.isTracing !== TraceMode.NONE) {
          logTraceInfo(d3, observable2);
        }
        d3.onBecomeStale();
      }
    });
  }
  function logTraceInfo(derivation, observable2) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable2.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
      var lines = [];
      printDepTree(getDependencyTree(derivation), lines, 1);
      new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable2.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
  }
  function printDepTree(tree, lines, depth) {
    if (lines.length >= 1e3) {
      lines.push("(and many more)");
      return;
    }
    lines.push("" + new Array(depth).join("	") + tree.name);
    if (tree.dependencies)
      tree.dependencies.forEach(function(child) {
        return printDepTree(child, lines, depth + 1);
      });
  }
  var Reaction = (
    /** @class */
    function() {
      function Reaction2(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) {
          name = "Reaction@" + getNextId();
        }
        if (requiresObservable === void 0) {
          requiresObservable = false;
        }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = [];
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
      }
      Reaction2.prototype.onBecomeStale = function() {
        this.schedule();
      };
      Reaction2.prototype.schedule = function() {
        if (!this._isScheduled) {
          this._isScheduled = true;
          globalState.pendingReactions.push(this);
          runReactions();
        }
      };
      Reaction2.prototype.isScheduled = function() {
        return this._isScheduled;
      };
      Reaction2.prototype.runReaction = function() {
        if (!this.isDisposed) {
          startBatch();
          this._isScheduled = false;
          if (shouldCompute(this)) {
            this._isTrackPending = true;
            try {
              this.onInvalidate();
              if (this._isTrackPending && isSpyEnabled() && true) {
                spyReport({
                  name: this.name,
                  type: "scheduled-reaction"
                });
              }
            } catch (e7) {
              this.reportExceptionInDerivation(e7);
            }
          }
          endBatch();
        }
      };
      Reaction2.prototype.track = function(fn) {
        if (this.isDisposed) {
          return;
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && true) {
          startTime = Date.now();
          spyReportStart({
            name: this.name,
            type: "reaction"
          });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, void 0);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
          clearObserving(this);
        }
        if (isCaughtException(result))
          this.reportExceptionInDerivation(result.cause);
        if (notify && true) {
          spyReportEnd({
            time: Date.now() - startTime
          });
        }
        endBatch();
      };
      Reaction2.prototype.reportExceptionInDerivation = function(error) {
        var _this = this;
        if (this.errorHandler) {
          this.errorHandler(error, this);
          return;
        }
        if (globalState.disableErrorBoundaries)
          throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
          console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)");
        } else {
          console.error(message, error);
        }
        if (isSpyEnabled()) {
          spyReport({
            type: "error",
            name: this.name,
            message,
            error: "" + error
          });
        }
        globalState.globalReactionErrorHandlers.forEach(function(f3) {
          return f3(error, _this);
        });
      };
      Reaction2.prototype.dispose = function() {
        if (!this.isDisposed) {
          this.isDisposed = true;
          if (!this._isRunning) {
            startBatch();
            clearObserving(this);
            endBatch();
          }
        }
      };
      Reaction2.prototype.getDisposer = function() {
        var r6 = this.dispose.bind(this);
        r6[$mobx] = this;
        return r6;
      };
      Reaction2.prototype.toString = function() {
        return "Reaction[" + this.name + "]";
      };
      Reaction2.prototype.trace = function(enterBreakPoint) {
        if (enterBreakPoint === void 0) {
          enterBreakPoint = false;
        }
        trace(this, enterBreakPoint);
      };
      return Reaction2;
    }()
  );
  var MAX_REACTION_ITERATIONS = 100;
  var reactionScheduler = function(f3) {
    return f3();
  };
  function runReactions() {
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
      return;
    reactionScheduler(runReactionsHelper);
  }
  function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    while (allReactions.length > 0) {
      if (++iterations === MAX_REACTION_ITERATIONS) {
        console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
        allReactions.splice(0);
      }
      var remainingReactions = allReactions.splice(0);
      for (var i7 = 0, l3 = remainingReactions.length; i7 < l3; i7++)
        remainingReactions[i7].runReaction();
    }
    globalState.isRunningReactions = false;
  }
  var isReaction = createInstanceofPredicate("Reaction", Reaction);
  function isSpyEnabled() {
    return !!globalState.spyListeners.length;
  }
  function spyReport(event) {
    if (false)
      return;
    if (!globalState.spyListeners.length)
      return;
    var listeners = globalState.spyListeners;
    for (var i7 = 0, l3 = listeners.length; i7 < l3; i7++)
      listeners[i7](event);
  }
  function spyReportStart(event) {
    if (false)
      return;
    var change = __assign(__assign({}, event), { spyReportStart: true });
    spyReport(change);
  }
  var END_EVENT = { spyReportEnd: true };
  function spyReportEnd(change) {
    if (false)
      return;
    if (change)
      spyReport(__assign(__assign({}, change), { spyReportEnd: true }));
    else
      spyReport(END_EVENT);
  }
  function spy(listener) {
    if (false) {
      console.warn("[mobx.spy] Is a no-op in production builds");
      return function() {
      };
    } else {
      globalState.spyListeners.push(listener);
      return once(function() {
        globalState.spyListeners = globalState.spyListeners.filter(function(l3) {
          return l3 !== listener;
        });
      });
    }
  }
  function dontReassignFields() {
    fail("@action fields are not reassignable");
  }
  function namedActionDecorator(name) {
    return function(target, prop, descriptor) {
      if (descriptor) {
        if (descriptor.get !== void 0) {
          return fail("@action cannot be used with getters");
        }
        if (descriptor.value) {
          return {
            value: createAction(name, descriptor.value),
            enumerable: false,
            configurable: true,
            writable: true
            // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
          };
        }
        var initializer_1 = descriptor.initializer;
        return {
          enumerable: false,
          configurable: true,
          writable: true,
          initializer: function() {
            return createAction(name, initializer_1.call(this));
          }
        };
      }
      return actionFieldDecorator(name).apply(this, arguments);
    };
  }
  function actionFieldDecorator(name) {
    return function(target, prop, descriptor) {
      Object.defineProperty(target, prop, {
        configurable: true,
        enumerable: false,
        get: function() {
          return void 0;
        },
        set: function(value) {
          addHiddenProp(this, prop, action(name, value));
        }
      });
    };
  }
  function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
      defineBoundAction(target, propertyName, descriptor.value);
      return null;
    }
    if (descriptor) {
      return {
        configurable: true,
        enumerable: false,
        get: function() {
          defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
          return this[propertyName];
        },
        set: dontReassignFields
      };
    }
    return {
      enumerable: false,
      configurable: true,
      set: function(v2) {
        defineBoundAction(this, propertyName, v2);
      },
      get: function() {
        return void 0;
      }
    };
  }
  var action = function action2(arg1, arg2, arg3, arg4) {
    if (arguments.length === 1 && typeof arg1 === "function")
      return createAction(arg1.name || "<unnamed action>", arg1);
    if (arguments.length === 2 && typeof arg2 === "function")
      return createAction(arg1, arg2);
    if (arguments.length === 1 && typeof arg1 === "string")
      return namedActionDecorator(arg1);
    if (arg4 === true) {
      addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
    } else {
      return namedActionDecorator(arg2).apply(null, arguments);
    }
  };
  action.bound = boundActionDecorator;
  function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
  }
  function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
  }
  function autorun(view, opts) {
    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }
    if (true) {
      invariant(typeof view === "function", "Autorun expects a function as first argument");
      invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = opts && opts.name || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction3;
    if (runSync) {
      reaction3 = new Reaction(name, function() {
        this.track(reactionRunner);
      }, opts.onError, opts.requiresObservable);
    } else {
      var scheduler_1 = createSchedulerFromOptions(opts);
      var isScheduled_1 = false;
      reaction3 = new Reaction(name, function() {
        if (!isScheduled_1) {
          isScheduled_1 = true;
          scheduler_1(function() {
            isScheduled_1 = false;
            if (!reaction3.isDisposed)
              reaction3.track(reactionRunner);
          });
        }
      }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
      view(reaction3);
    }
    reaction3.schedule();
    return reaction3.getDisposer();
  }
  var run = function(f3) {
    return f3();
  };
  function createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function(f3) {
      return setTimeout(f3, opts.delay);
    } : run;
  }
  function reaction2(expression, effect, opts) {
    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }
    if (true) {
      invariant(typeof expression === "function", "First argument to reaction should be a function");
      invariant(typeof opts === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer.default;
    var r6 = new Reaction(name, function() {
      if (firstTime || runSync) {
        reactionRunner();
      } else if (!isScheduled) {
        isScheduled = true;
        scheduler(reactionRunner);
      }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
      isScheduled = false;
      if (r6.isDisposed)
        return;
      var changed = false;
      r6.track(function() {
        var nextValue = expression(r6);
        changed = firstTime || !equals(value, nextValue);
        value = nextValue;
      });
      if (firstTime && opts.fireImmediately)
        effectAction(value, r6);
      if (!firstTime && changed === true)
        effectAction(value, r6);
      if (firstTime)
        firstTime = false;
    }
    r6.schedule();
    return r6.getDisposer();
  }
  function wrapErrorHandler(errorHandler, baseFn) {
    return function() {
      try {
        return baseFn.apply(this, arguments);
      } catch (e7) {
        errorHandler.call(this, e7);
      }
    };
  }
  function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
  }
  function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
  }
  function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
      atom[listenersKey].add(cb);
    } else {
      atom[listenersKey] = /* @__PURE__ */ new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
      return fail("Not an atom that can be (un)observed");
    return function() {
      var hookListeners = atom[listenersKey];
      if (hookListeners) {
        hookListeners.delete(cb);
        if (hookListeners.size === 0) {
          delete atom[listenersKey];
        }
      }
    };
  }
  function extendObservable(target, properties, decorators, options) {
    if (true) {
      invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
      invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
      invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target);
    asObservableObject(target, options.name, defaultDecorator.enhancer);
    if (properties)
      extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
  }
  function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
  }
  function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a2, e_2, _b;
    if (true) {
      invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
      if (decorators) {
        var keys2 = getPlainObjectKeys(decorators);
        try {
          for (var keys_1 = __values(keys2), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            if (!(key in properties))
              fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (keys_1_1 && !keys_1_1.done && (_a2 = keys_1.return))
              _a2.call(keys_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    }
    startBatch();
    try {
      var keys2 = getPlainObjectKeys(properties);
      try {
        for (var keys_2 = __values(keys2), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
          var key = keys_2_1.value;
          var descriptor = Object.getOwnPropertyDescriptor(properties, key);
          if (true) {
            if (!isPlainObject(properties))
              fail("'extendObservabe' only accepts plain objects as second argument");
            if (isComputed(descriptor.value))
              fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
          }
          var decorator = decorators && key in decorators ? decorators[key] : descriptor.get ? computedDecorator : defaultDecorator;
          if (typeof decorator !== "function")
            fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
          var resultDescriptor = decorator(target, key, descriptor, true);
          if (resultDescriptor)
            Object.defineProperty(target, key, resultDescriptor);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return))
            _b.call(keys_2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    } finally {
      endBatch();
    }
  }
  function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
  }
  function nodeToDependencyTree(node) {
    var result = {
      name: node.name
    };
    if (node.observing && node.observing.length > 0)
      result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
  }
  function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
  }
  FlowCancellationError.prototype = Object.create(Error.prototype);
  function _isComputed(value, property) {
    if (value === null || value === void 0)
      return false;
    if (property !== void 0) {
      if (isObservableObject(value) === false)
        return false;
      if (!value[$mobx].values.has(property))
        return false;
      var atom = getAtom(value, property);
      return isComputedValue(atom);
    }
    return isComputedValue(value);
  }
  function isComputed(value) {
    if (arguments.length > 1)
      return fail("isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
  }
  function _isObservable(value, property) {
    if (value === null || value === void 0)
      return false;
    if (property !== void 0) {
      if (isObservableMap(value) || isObservableArray(value))
        return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
      if (isObservableObject(value)) {
        return value[$mobx].values.has(property);
      }
      return false;
    }
    return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
  }
  function isObservable(value) {
    if (arguments.length !== 1)
      fail("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
  }
  function keys(obj) {
    if (isObservableObject(obj)) {
      return obj[$mobx].getKeys();
    }
    if (isObservableMap(obj)) {
      return Array.from(obj.keys());
    }
    if (isObservableSet(obj)) {
      return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
      return obj.map(function(_2, index) {
        return index;
      });
    }
    return fail("'keys()' can only be used on observable objects, arrays, sets and maps");
  }
  function set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
      startBatch();
      var values_1 = key;
      try {
        for (var key_1 in values_1)
          set(obj, key_1, values_1[key_1]);
      } finally {
        endBatch();
      }
      return;
    }
    if (isObservableObject(obj)) {
      var adm = obj[$mobx];
      var existingObservable = adm.values.get(key);
      if (existingObservable) {
        adm.write(key, value);
      } else {
        adm.addObservableProp(key, value, adm.defaultEnhancer);
      }
    } else if (isObservableMap(obj)) {
      obj.set(key, value);
    } else if (isObservableSet(obj)) {
      obj.add(key);
    } else if (isObservableArray(obj)) {
      if (typeof key !== "number")
        key = parseInt(key, 10);
      invariant(key >= 0, "Not a valid index: '" + key + "'");
      startBatch();
      if (key >= obj.length)
        obj.length = key + 1;
      obj[key] = value;
      endBatch();
    } else {
      return fail("'set()' can only be used on observable objects, arrays and maps");
    }
  }
  var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
  };
  function cache(map2, key, value, options) {
    if (options.detectCycles)
      map2.set(key, value);
    return value;
  }
  function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source))
      return source;
    if (typeof source !== "object")
      return source;
    if (source === null)
      return null;
    if (source instanceof Date)
      return source;
    if (isObservableValue(source))
      return toJSHelper(source.get(), options, __alreadySeen);
    if (isObservable(source))
      keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
      return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
      var res_1 = cache(__alreadySeen, source, [], options);
      var toAdd = source.map(function(value) {
        return toJSHelper(value, options, __alreadySeen);
      });
      res_1.length = toAdd.length;
      for (var i7 = 0, l3 = toAdd.length; i7 < l3; i7++)
        res_1[i7] = toAdd[i7];
      return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
      if (options.exportMapsAsObjects === false) {
        var res_2 = cache(__alreadySeen, source, /* @__PURE__ */ new Set(), options);
        source.forEach(function(value) {
          res_2.add(toJSHelper(value, options, __alreadySeen));
        });
        return res_2;
      } else {
        var res_3 = cache(__alreadySeen, source, [], options);
        source.forEach(function(value) {
          res_3.push(toJSHelper(value, options, __alreadySeen));
        });
        return res_3;
      }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
      if (options.exportMapsAsObjects === false) {
        var res_4 = cache(__alreadySeen, source, /* @__PURE__ */ new Map(), options);
        source.forEach(function(value, key) {
          res_4.set(key, toJSHelper(value, options, __alreadySeen));
        });
        return res_4;
      } else {
        var res_5 = cache(__alreadySeen, source, {}, options);
        source.forEach(function(value, key) {
          res_5[key] = toJSHelper(value, options, __alreadySeen);
        });
        return res_5;
      }
    }
    var res = cache(__alreadySeen, source, {}, options);
    getPlainObjectKeys(source).forEach(function(key) {
      res[key] = toJSHelper(source[key], options, __alreadySeen);
    });
    return res;
  }
  function toJS(source, options) {
    if (typeof options === "boolean")
      options = { detectCycles: options };
    if (!options)
      options = defaultOptions;
    options.detectCycles = options.detectCycles === void 0 ? options.recurseEverything === true : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles)
      __alreadySeen = /* @__PURE__ */ new Map();
    return toJSHelper(source, options, __alreadySeen);
  }
  function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
      enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
      return fail("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
      console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
  }
  function getAtomFromArgs(args) {
    switch (args.length) {
      case 0:
        return globalState.trackingDerivation;
      case 1:
        return getAtom(args[0]);
      case 2:
        return getAtom(args[0], args[1]);
    }
  }
  function transaction(action3, thisArg) {
    if (thisArg === void 0) {
      thisArg = void 0;
    }
    startBatch();
    try {
      return action3.apply(thisArg);
    } finally {
      endBatch();
    }
  }
  function getAdm(target) {
    return target[$mobx];
  }
  function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
  }
  var objectProxyTraps = {
    has: function(target, name) {
      if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
        return true;
      var adm = getAdm(target);
      if (isPropertyKey(name))
        return adm.has(name);
      return name in target;
    },
    get: function(target, name) {
      if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
        return target[name];
      var adm = getAdm(target);
      var observable2 = adm.values.get(name);
      if (observable2 instanceof Atom) {
        var result = observable2.get();
        if (result === void 0) {
          adm.has(name);
        }
        return result;
      }
      if (isPropertyKey(name))
        adm.has(name);
      return target[name];
    },
    set: function(target, name, value) {
      if (!isPropertyKey(name))
        return false;
      set(target, name, value);
      return true;
    },
    deleteProperty: function(target, name) {
      if (!isPropertyKey(name))
        return false;
      var adm = getAdm(target);
      adm.remove(name);
      return true;
    },
    ownKeys: function(target) {
      var adm = getAdm(target);
      adm.keysAtom.reportObserved();
      return Reflect.ownKeys(target);
    },
    preventExtensions: function(target) {
      fail("Dynamic observable objects cannot be frozen");
      return false;
    }
  };
  function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
  }
  function hasInterceptors(interceptable) {
    return interceptable.interceptors !== void 0 && interceptable.interceptors.length > 0;
  }
  function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function() {
      var idx = interceptors.indexOf(handler);
      if (idx !== -1)
        interceptors.splice(idx, 1);
    });
  }
  function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
      var interceptors = __spread(interceptable.interceptors || []);
      for (var i7 = 0, l3 = interceptors.length; i7 < l3; i7++) {
        change = interceptors[i7](change);
        invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
        if (!change)
          break;
      }
      return change;
    } finally {
      untrackedEnd(prevU);
    }
  }
  function hasListeners(listenable) {
    return listenable.changeListeners !== void 0 && listenable.changeListeners.length > 0;
  }
  function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function() {
      var idx = listeners.indexOf(handler);
      if (idx !== -1)
        listeners.splice(idx, 1);
    });
  }
  function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
      return;
    listeners = listeners.slice();
    for (var i7 = 0, l3 = listeners.length; i7 < l3; i7++) {
      listeners[i7](change);
    }
    untrackedEnd(prevU);
  }
  var MAX_SPLICE_SIZE = 1e4;
  var arrayTraps = {
    get: function(target, name) {
      if (name === $mobx)
        return target[$mobx];
      if (name === "length")
        return target[$mobx].getArrayLength();
      if (typeof name === "number") {
        return arrayExtensions.get.call(target, name);
      }
      if (typeof name === "string" && !isNaN(name)) {
        return arrayExtensions.get.call(target, parseInt(name));
      }
      if (arrayExtensions.hasOwnProperty(name)) {
        return arrayExtensions[name];
      }
      return target[name];
    },
    set: function(target, name, value) {
      if (name === "length") {
        target[$mobx].setArrayLength(value);
      }
      if (typeof name === "number") {
        arrayExtensions.set.call(target, name, value);
      }
      if (typeof name === "symbol" || isNaN(name)) {
        target[name] = value;
      } else {
        arrayExtensions.set.call(target, parseInt(name), value);
      }
      return true;
    },
    preventExtensions: function(target) {
      fail("Observable arrays cannot be frozen");
      return false;
    }
  };
  function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = "ObservableArray@" + getNextId();
    }
    if (owned === void 0) {
      owned = false;
    }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);
      adm.spliceWithArray(0, 0, initialValues);
      allowStateChangesEnd(prev);
    }
    return proxy;
  }
  var ObservableArrayAdministration = (
    /** @class */
    function() {
      function ObservableArrayAdministration2(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = void 0;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function(newV, oldV) {
          return enhancer(newV, oldV, name + "[..]");
        };
      }
      ObservableArrayAdministration2.prototype.dehanceValue = function(value) {
        if (this.dehancer !== void 0)
          return this.dehancer(value);
        return value;
      };
      ObservableArrayAdministration2.prototype.dehanceValues = function(values) {
        if (this.dehancer !== void 0 && values.length > 0)
          return values.map(this.dehancer);
        return values;
      };
      ObservableArrayAdministration2.prototype.intercept = function(handler) {
        return registerInterceptor(this, handler);
      };
      ObservableArrayAdministration2.prototype.observe = function(listener, fireImmediately) {
        if (fireImmediately === void 0) {
          fireImmediately = false;
        }
        if (fireImmediately) {
          listener({
            object: this.proxy,
            type: "splice",
            index: 0,
            added: this.values.slice(),
            addedCount: this.values.length,
            removed: [],
            removedCount: 0
          });
        }
        return registerListener(this, listener);
      };
      ObservableArrayAdministration2.prototype.getArrayLength = function() {
        this.atom.reportObserved();
        return this.values.length;
      };
      ObservableArrayAdministration2.prototype.setArrayLength = function(newLength) {
        if (typeof newLength !== "number" || newLength < 0)
          throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
          return;
        else if (newLength > currentLength) {
          var newItems = new Array(newLength - currentLength);
          for (var i7 = 0; i7 < newLength - currentLength; i7++)
            newItems[i7] = void 0;
          this.spliceWithArray(currentLength, 0, newItems);
        } else
          this.spliceWithArray(newLength, currentLength - newLength);
      };
      ObservableArrayAdministration2.prototype.updateArrayLength = function(oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
          throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
      };
      ObservableArrayAdministration2.prototype.spliceWithArray = function(index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === void 0)
          index = 0;
        else if (index > length)
          index = length;
        else if (index < 0)
          index = Math.max(0, length + index);
        if (arguments.length === 1)
          deleteCount = length - index;
        else if (deleteCount === void 0 || deleteCount === null)
          deleteCount = 0;
        else
          deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === void 0)
          newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy,
            type: "splice",
            index,
            removedCount: deleteCount,
            added: newItems
          });
          if (!change)
            return EMPTY_ARRAY;
          deleteCount = change.removedCount;
          newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function(v2) {
          return _this.enhancer(v2, void 0);
        });
        if (true) {
          var lengthDelta = newItems.length - deleteCount;
          this.updateArrayLength(length, lengthDelta);
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
          this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
      };
      ObservableArrayAdministration2.prototype.spliceItemsIntoValues = function(index, deleteCount, newItems) {
        var _a2;
        if (newItems.length < MAX_SPLICE_SIZE) {
          return (_a2 = this.values).splice.apply(_a2, __spread([index, deleteCount], newItems));
        } else {
          var res = this.values.slice(index, index + deleteCount);
          this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
          return res;
        }
      };
      ObservableArrayAdministration2.prototype.notifyArrayChildUpdate = function(index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
          object: this.proxy,
          type: "update",
          index,
          newValue,
          oldValue
        } : null;
        if (notifySpy && true)
          spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
          notifyListeners(this, change);
        if (notifySpy && true)
          spyReportEnd();
      };
      ObservableArrayAdministration2.prototype.notifyArraySplice = function(index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
          object: this.proxy,
          type: "splice",
          index,
          removed,
          added,
          removedCount: removed.length,
          addedCount: added.length
        } : null;
        if (notifySpy && true)
          spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
          notifyListeners(this, change);
        if (notifySpy && true)
          spyReportEnd();
      };
      return ObservableArrayAdministration2;
    }()
  );
  var arrayExtensions = {
    intercept: function(handler) {
      return this[$mobx].intercept(handler);
    },
    observe: function(listener, fireImmediately) {
      if (fireImmediately === void 0) {
        fireImmediately = false;
      }
      var adm = this[$mobx];
      return adm.observe(listener, fireImmediately);
    },
    clear: function() {
      return this.splice(0);
    },
    replace: function(newItems) {
      var adm = this[$mobx];
      return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function() {
      return this.slice();
    },
    toJSON: function() {
      return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function(index, deleteCount) {
      var newItems = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        newItems[_i - 2] = arguments[_i];
      }
      var adm = this[$mobx];
      switch (arguments.length) {
        case 0:
          return [];
        case 1:
          return adm.spliceWithArray(index);
        case 2:
          return adm.spliceWithArray(index, deleteCount);
      }
      return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function(index, deleteCount, newItems) {
      var adm = this[$mobx];
      return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function() {
      var items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
      }
      var adm = this[$mobx];
      adm.spliceWithArray(adm.values.length, 0, items);
      return adm.values.length;
    },
    pop: function() {
      return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function() {
      return this.splice(0, 1)[0];
    },
    unshift: function() {
      var items = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
      }
      var adm = this[$mobx];
      adm.spliceWithArray(0, 0, items);
      return adm.values.length;
    },
    reverse: function() {
      if (true) {
        console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
      }
      var clone = this.slice();
      return clone.reverse.apply(clone, arguments);
    },
    sort: function(compareFn) {
      if (true) {
        console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
      }
      var clone = this.slice();
      return clone.sort.apply(clone, arguments);
    },
    remove: function(value) {
      var adm = this[$mobx];
      var idx = adm.dehanceValues(adm.values).indexOf(value);
      if (idx > -1) {
        this.splice(idx, 1);
        return true;
      }
      return false;
    },
    get: function(index) {
      var adm = this[$mobx];
      if (adm) {
        if (index < adm.values.length) {
          adm.atom.reportObserved();
          return adm.dehanceValue(adm.values[index]);
        }
        console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
      }
      return void 0;
    },
    set: function(index, newValue) {
      var adm = this[$mobx];
      var values = adm.values;
      if (index < values.length) {
        checkIfStateModificationsAreAllowed(adm.atom);
        var oldValue = values[index];
        if (hasInterceptors(adm)) {
          var change = interceptChange(adm, {
            type: "update",
            object: adm.proxy,
            index,
            newValue
          });
          if (!change)
            return;
          newValue = change.newValue;
        }
        newValue = adm.enhancer(newValue, oldValue);
        var changed = newValue !== oldValue;
        if (changed) {
          values[index] = newValue;
          adm.notifyArrayChildUpdate(index, newValue, oldValue);
        }
      } else if (index === values.length) {
        adm.spliceWithArray(index, 0, [newValue]);
      } else {
        throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
      }
    }
  };
  [
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
  ].forEach(function(funcName) {
    arrayExtensions[funcName] = function() {
      var adm = this[$mobx];
      adm.atom.reportObserved();
      var res = adm.dehanceValues(adm.values);
      return res[funcName].apply(res, arguments);
    };
  });
  var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
  function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
  }
  var _a;
  var ObservableMapMarker = {};
  var ObservableMap = (
    /** @class */
    function() {
      function ObservableMap2(initialData, enhancer, name) {
        if (enhancer === void 0) {
          enhancer = deepEnhancer;
        }
        if (name === void 0) {
          name = "ObservableMap@" + getNextId();
        }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
          throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = /* @__PURE__ */ new Map();
        this._hasMap = /* @__PURE__ */ new Map();
        this.merge(initialData);
      }
      ObservableMap2.prototype._has = function(key) {
        return this._data.has(key);
      };
      ObservableMap2.prototype.has = function(key) {
        var _this = this;
        if (!globalState.trackingDerivation)
          return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
          var newEntry = entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
          this._hasMap.set(key, newEntry);
          onBecomeUnobserved(newEntry, function() {
            return _this._hasMap.delete(key);
          });
        }
        return entry.get();
      };
      ObservableMap2.prototype.set = function(key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: hasKey ? "update" : "add",
            object: this,
            newValue: value,
            name: key
          });
          if (!change)
            return this;
          value = change.newValue;
        }
        if (hasKey) {
          this._updateValue(key, value);
        } else {
          this._addValue(key, value);
        }
        return this;
      };
      ObservableMap2.prototype.delete = function(key) {
        var _this = this;
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: "delete",
            object: this,
            name: key
          });
          if (!change)
            return false;
        }
        if (this._has(key)) {
          var notifySpy = isSpyEnabled();
          var notify = hasListeners(this);
          var change = notify || notifySpy ? {
            type: "delete",
            object: this,
            oldValue: this._data.get(key).value,
            name: key
          } : null;
          if (notifySpy && true)
            spyReportStart(__assign(__assign({}, change), { name: this.name, key }));
          transaction(function() {
            _this._keysAtom.reportChanged();
            _this._updateHasMapEntry(key, false);
            var observable2 = _this._data.get(key);
            observable2.setNewValue(void 0);
            _this._data.delete(key);
          });
          if (notify)
            notifyListeners(this, change);
          if (notifySpy && true)
            spyReportEnd();
          return true;
        }
        return false;
      };
      ObservableMap2.prototype._updateHasMapEntry = function(key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
          entry.setNewValue(value);
        }
      };
      ObservableMap2.prototype._updateValue = function(key, newValue) {
        var observable2 = this._data.get(key);
        newValue = observable2.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
          var notifySpy = isSpyEnabled();
          var notify = hasListeners(this);
          var change = notify || notifySpy ? {
            type: "update",
            object: this,
            oldValue: observable2.value,
            name: key,
            newValue
          } : null;
          if (notifySpy && true)
            spyReportStart(__assign(__assign({}, change), { name: this.name, key }));
          observable2.setNewValue(newValue);
          if (notify)
            notifyListeners(this, change);
          if (notifySpy && true)
            spyReportEnd();
        }
      };
      ObservableMap2.prototype._addValue = function(key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function() {
          var observable2 = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
          _this._data.set(key, observable2);
          newValue = observable2.value;
          _this._updateHasMapEntry(key, true);
          _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
          type: "add",
          object: this,
          name: key,
          newValue
        } : null;
        if (notifySpy && true)
          spyReportStart(__assign(__assign({}, change), { name: this.name, key }));
        if (notify)
          notifyListeners(this, change);
        if (notifySpy && true)
          spyReportEnd();
      };
      ObservableMap2.prototype.get = function(key) {
        if (this.has(key))
          return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(void 0);
      };
      ObservableMap2.prototype.dehanceValue = function(value) {
        if (this.dehancer !== void 0) {
          return this.dehancer(value);
        }
        return value;
      };
      ObservableMap2.prototype.keys = function() {
        this._keysAtom.reportObserved();
        return this._data.keys();
      };
      ObservableMap2.prototype.values = function() {
        var self2 = this;
        var nextIndex = 0;
        var keys2 = Array.from(this.keys());
        return makeIterable({
          next: function() {
            return nextIndex < keys2.length ? { value: self2.get(keys2[nextIndex++]), done: false } : { done: true };
          }
        });
      };
      ObservableMap2.prototype.entries = function() {
        var self2 = this;
        var nextIndex = 0;
        var keys2 = Array.from(this.keys());
        return makeIterable({
          next: function() {
            if (nextIndex < keys2.length) {
              var key = keys2[nextIndex++];
              return {
                value: [key, self2.get(key)],
                done: false
              };
            }
            return { done: true };
          }
        });
      };
      ObservableMap2.prototype[_a = $mobx, Symbol.iterator] = function() {
        return this.entries();
      };
      ObservableMap2.prototype.forEach = function(callback, thisArg) {
        var e_1, _b;
        try {
          for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
            callback.call(thisArg, value, key, this);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return))
              _b.call(_c);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      };
      ObservableMap2.prototype.merge = function(other) {
        var _this = this;
        if (isObservableMap(other)) {
          other = other.toJS();
        }
        transaction(function() {
          if (isPlainObject(other))
            getPlainObjectKeys(other).forEach(function(key) {
              return _this.set(key, other[key]);
            });
          else if (Array.isArray(other))
            other.forEach(function(_b) {
              var _c = __read(_b, 2), key = _c[0], value = _c[1];
              return _this.set(key, value);
            });
          else if (isES6Map(other)) {
            if (other.constructor !== Map)
              fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name);
            other.forEach(function(value, key) {
              return _this.set(key, value);
            });
          } else if (other !== null && other !== void 0)
            fail("Cannot initialize map from " + other);
        });
        return this;
      };
      ObservableMap2.prototype.clear = function() {
        var _this = this;
        transaction(function() {
          untracked(function() {
            var e_2, _b;
            try {
              for (var _c = __values(_this.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                _this.delete(key);
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (_d && !_d.done && (_b = _c.return))
                  _b.call(_c);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          });
        });
      };
      ObservableMap2.prototype.replace = function(values) {
        var _this = this;
        transaction(function() {
          var newKeys = getMapLikeKeys(values);
          var oldKeys = Array.from(_this.keys());
          var missingKeys = oldKeys.filter(function(k2) {
            return newKeys.indexOf(k2) === -1;
          });
          missingKeys.forEach(function(k2) {
            return _this.delete(k2);
          });
          _this.merge(values);
        });
        return this;
      };
      Object.defineProperty(ObservableMap2.prototype, "size", {
        get: function() {
          this._keysAtom.reportObserved();
          return this._data.size;
        },
        enumerable: true,
        configurable: true
      });
      ObservableMap2.prototype.toPOJO = function() {
        var e_3, _b;
        var res = {};
        try {
          for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
            res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return))
              _b.call(_c);
          } finally {
            if (e_3)
              throw e_3.error;
          }
        }
        return res;
      };
      ObservableMap2.prototype.toJS = function() {
        return new Map(this);
      };
      ObservableMap2.prototype.toJSON = function() {
        return this.toPOJO();
      };
      ObservableMap2.prototype.toString = function() {
        var _this = this;
        return this.name + "[{ " + Array.from(this.keys()).map(function(key) {
          return stringifyKey(key) + ": " + ("" + _this.get(key));
        }).join(", ") + " }]";
      };
      ObservableMap2.prototype.observe = function(listener, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
      };
      ObservableMap2.prototype.intercept = function(handler) {
        return registerInterceptor(this, handler);
      };
      return ObservableMap2;
    }()
  );
  var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
  var _a$1;
  var ObservableSetMarker = {};
  var ObservableSet = (
    /** @class */
    function() {
      function ObservableSet2(initialData, enhancer, name) {
        if (enhancer === void 0) {
          enhancer = deepEnhancer;
        }
        if (name === void 0) {
          name = "ObservableSet@" + getNextId();
        }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = /* @__PURE__ */ new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
          throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function(newV, oldV) {
          return enhancer(newV, oldV, name);
        };
        if (initialData) {
          this.replace(initialData);
        }
      }
      ObservableSet2.prototype.dehanceValue = function(value) {
        if (this.dehancer !== void 0) {
          return this.dehancer(value);
        }
        return value;
      };
      ObservableSet2.prototype.clear = function() {
        var _this = this;
        transaction(function() {
          untracked(function() {
            var e_1, _b;
            try {
              for (var _c = __values(_this._data.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var value = _d.value;
                _this.delete(value);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_d && !_d.done && (_b = _c.return))
                  _b.call(_c);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          });
        });
      };
      ObservableSet2.prototype.forEach = function(callbackFn, thisArg) {
        var e_2, _b;
        try {
          for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
            var value = _d.value;
            callbackFn.call(thisArg, value, value, this);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_d && !_d.done && (_b = _c.return))
              _b.call(_c);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      };
      Object.defineProperty(ObservableSet2.prototype, "size", {
        get: function() {
          this._atom.reportObserved();
          return this._data.size;
        },
        enumerable: true,
        configurable: true
      });
      ObservableSet2.prototype.add = function(value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: "add",
            object: this,
            newValue: value
          });
          if (!change)
            return this;
        }
        if (!this.has(value)) {
          transaction(function() {
            _this._data.add(_this.enhancer(value, void 0));
            _this._atom.reportChanged();
          });
          var notifySpy = isSpyEnabled();
          var notify = hasListeners(this);
          var change = notify || notifySpy ? {
            type: "add",
            object: this,
            newValue: value
          } : null;
          if (notifySpy && true)
            spyReportStart(change);
          if (notify)
            notifyListeners(this, change);
          if (notifySpy && true)
            spyReportEnd();
        }
        return this;
      };
      ObservableSet2.prototype.delete = function(value) {
        var _this = this;
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: "delete",
            object: this,
            oldValue: value
          });
          if (!change)
            return false;
        }
        if (this.has(value)) {
          var notifySpy = isSpyEnabled();
          var notify = hasListeners(this);
          var change = notify || notifySpy ? {
            type: "delete",
            object: this,
            oldValue: value
          } : null;
          if (notifySpy && true)
            spyReportStart(__assign(__assign({}, change), { name: this.name }));
          transaction(function() {
            _this._atom.reportChanged();
            _this._data.delete(value);
          });
          if (notify)
            notifyListeners(this, change);
          if (notifySpy && true)
            spyReportEnd();
          return true;
        }
        return false;
      };
      ObservableSet2.prototype.has = function(value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
      };
      ObservableSet2.prototype.entries = function() {
        var nextIndex = 0;
        var keys2 = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
          next: function() {
            var index = nextIndex;
            nextIndex += 1;
            return index < values.length ? { value: [keys2[index], values[index]], done: false } : { done: true };
          }
        });
      };
      ObservableSet2.prototype.keys = function() {
        return this.values();
      };
      ObservableSet2.prototype.values = function() {
        this._atom.reportObserved();
        var self2 = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
          next: function() {
            return nextIndex < observableValues.length ? { value: self2.dehanceValue(observableValues[nextIndex++]), done: false } : { done: true };
          }
        });
      };
      ObservableSet2.prototype.replace = function(other) {
        var _this = this;
        if (isObservableSet(other)) {
          other = other.toJS();
        }
        transaction(function() {
          if (Array.isArray(other)) {
            _this.clear();
            other.forEach(function(value) {
              return _this.add(value);
            });
          } else if (isES6Set(other)) {
            _this.clear();
            other.forEach(function(value) {
              return _this.add(value);
            });
          } else if (other !== null && other !== void 0) {
            fail("Cannot initialize set from " + other);
          }
        });
        return this;
      };
      ObservableSet2.prototype.observe = function(listener, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
      };
      ObservableSet2.prototype.intercept = function(handler) {
        return registerInterceptor(this, handler);
      };
      ObservableSet2.prototype.toJS = function() {
        return new Set(this);
      };
      ObservableSet2.prototype.toString = function() {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
      };
      ObservableSet2.prototype[_a$1 = $mobx, Symbol.iterator] = function() {
        return this.values();
      };
      return ObservableSet2;
    }()
  );
  var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);
  var ObservableObjectAdministration = (
    /** @class */
    function() {
      function ObservableObjectAdministration2(target, values, name, defaultEnhancer) {
        if (values === void 0) {
          values = /* @__PURE__ */ new Map();
        }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
      }
      ObservableObjectAdministration2.prototype.read = function(key) {
        return this.values.get(key).get();
      };
      ObservableObjectAdministration2.prototype.write = function(key, newValue) {
        var instance = this.target;
        var observable2 = this.values.get(key);
        if (observable2 instanceof ComputedValue) {
          observable2.set(newValue);
          return;
        }
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: "update",
            object: this.proxy || instance,
            name: key,
            newValue
          });
          if (!change)
            return;
          newValue = change.newValue;
        }
        newValue = observable2.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
          var notify = hasListeners(this);
          var notifySpy = isSpyEnabled();
          var change = notify || notifySpy ? {
            type: "update",
            object: this.proxy || instance,
            oldValue: observable2.value,
            name: key,
            newValue
          } : null;
          if (notifySpy && true)
            spyReportStart(__assign(__assign({}, change), { name: this.name, key }));
          observable2.setNewValue(newValue);
          if (notify)
            notifyListeners(this, change);
          if (notifySpy && true)
            spyReportEnd();
        }
      };
      ObservableObjectAdministration2.prototype.has = function(key) {
        var map2 = this.pendingKeys || (this.pendingKeys = /* @__PURE__ */ new Map());
        var entry = map2.get(key);
        if (entry)
          return entry.get();
        else {
          var exists = !!this.values.get(key);
          entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
          map2.set(key, entry);
          return entry.get();
        }
      };
      ObservableObjectAdministration2.prototype.addObservableProp = function(propName, newValue, enhancer) {
        if (enhancer === void 0) {
          enhancer = this.defaultEnhancer;
        }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy || target,
            name: propName,
            type: "add",
            newValue
          });
          if (!change)
            return;
          newValue = change.newValue;
        }
        var observable2 = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable2);
        newValue = observable2.value;
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
      };
      ObservableObjectAdministration2.prototype.addComputedProp = function(propertyOwner, propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
          Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
      };
      ObservableObjectAdministration2.prototype.remove = function(key) {
        if (!this.values.has(key))
          return;
        var target = this.target;
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy || target,
            name: key,
            type: "remove"
          });
          if (!change)
            return;
        }
        try {
          startBatch();
          var notify = hasListeners(this);
          var notifySpy = isSpyEnabled();
          var oldObservable = this.values.get(key);
          var oldValue = oldObservable && oldObservable.get();
          oldObservable && oldObservable.set(void 0);
          this.keysAtom.reportChanged();
          this.values.delete(key);
          if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
              entry.set(false);
          }
          delete this.target[key];
          var change = notify || notifySpy ? {
            type: "remove",
            object: this.proxy || target,
            oldValue,
            name: key
          } : null;
          if (notifySpy && true)
            spyReportStart(__assign(__assign({}, change), { name: this.name, key }));
          if (notify)
            notifyListeners(this, change);
          if (notifySpy && true)
            spyReportEnd();
        } finally {
          endBatch();
        }
      };
      ObservableObjectAdministration2.prototype.illegalAccess = function(owner, propName) {
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
      };
      ObservableObjectAdministration2.prototype.observe = function(callback, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
      };
      ObservableObjectAdministration2.prototype.intercept = function(handler) {
        return registerInterceptor(this, handler);
      };
      ObservableObjectAdministration2.prototype.notifyPropertyAddition = function(key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy ? {
          type: "add",
          object: this.proxy || this.target,
          name: key,
          newValue
        } : null;
        if (notifySpy && true)
          spyReportStart(__assign(__assign({}, change), { name: this.name, key }));
        if (notify)
          notifyListeners(this, change);
        if (notifySpy && true)
          spyReportEnd();
        if (this.pendingKeys) {
          var entry = this.pendingKeys.get(key);
          if (entry)
            entry.set(true);
        }
        this.keysAtom.reportChanged();
      };
      ObservableObjectAdministration2.prototype.getKeys = function() {
        var e_1, _a2;
        this.keysAtom.reportObserved();
        var res = [];
        try {
          for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            if (value instanceof ObservableValue)
              res.push(key);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return))
              _a2.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        return res;
      };
      return ObservableObjectAdministration2;
    }()
  );
  function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) {
      name = "";
    }
    if (defaultEnhancer === void 0) {
      defaultEnhancer = deepEnhancer;
    }
    if (Object.prototype.hasOwnProperty.call(target, $mobx))
      return target[$mobx];
    invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
      name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
      name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, /* @__PURE__ */ new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
  }
  var observablePropertyConfigs = /* @__PURE__ */ Object.create(null);
  var computedPropertyConfigs = /* @__PURE__ */ Object.create(null);
  function generateObservablePropConfig(propName) {
    return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
      configurable: true,
      enumerable: true,
      get: function() {
        return this[$mobx].read(propName);
      },
      set: function(v2) {
        this[$mobx].write(propName, v2);
      }
    });
  }
  function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
      initializeInstance(owner);
      return owner[$mobx];
    }
    return adm;
  }
  function generateComputedPropConfig(propName) {
    return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
      configurable: globalState.computedConfigurable,
      enumerable: false,
      get: function() {
        return getAdministrationForComputedPropOwner(this).read(propName);
      },
      set: function(v2) {
        getAdministrationForComputedPropOwner(this).write(propName, v2);
      }
    });
  }
  var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
  function isObservableObject(thing) {
    if (isObject(thing)) {
      initializeInstance(thing);
      return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
  }
  function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
      if (isObservableArray(thing)) {
        if (property !== void 0)
          fail("It is not possible to get index atoms from arrays");
        return thing[$mobx].atom;
      }
      if (isObservableSet(thing)) {
        return thing[$mobx];
      }
      if (isObservableMap(thing)) {
        var anyThing = thing;
        if (property === void 0)
          return anyThing._keysAtom;
        var observable2 = anyThing._data.get(property) || anyThing._hasMap.get(property);
        if (!observable2)
          fail("the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
        return observable2;
      }
      initializeInstance(thing);
      if (property && !thing[$mobx])
        thing[property];
      if (isObservableObject(thing)) {
        if (!property)
          return fail("please specify a property");
        var observable2 = thing[$mobx].values.get(property);
        if (!observable2)
          fail("no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
        return observable2;
      }
      if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
        return thing;
      }
    } else if (typeof thing === "function") {
      if (isReaction(thing[$mobx])) {
        return thing[$mobx];
      }
    }
    return fail("Cannot obtain atom from " + thing);
  }
  function getAdministration(thing, property) {
    if (!thing)
      fail("Expecting some object");
    if (property !== void 0)
      return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
      return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
      return thing;
    initializeInstance(thing);
    if (thing[$mobx])
      return thing[$mobx];
    fail("Cannot obtain administration from " + thing);
  }
  function getDebugName(thing, property) {
    var named2;
    if (property !== void 0)
      named2 = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
      named2 = getAdministration(thing);
    else
      named2 = getAtom(thing);
    return named2.name;
  }
  var toString = Object.prototype.toString;
  function deepEqual(a3, b3, depth) {
    if (depth === void 0) {
      depth = -1;
    }
    return eq(a3, b3, depth);
  }
  function eq(a3, b3, depth, aStack, bStack) {
    if (a3 === b3)
      return a3 !== 0 || 1 / a3 === 1 / b3;
    if (a3 == null || b3 == null)
      return false;
    if (a3 !== a3)
      return b3 !== b3;
    var type2 = typeof a3;
    if (type2 !== "function" && type2 !== "object" && typeof b3 != "object")
      return false;
    var className = toString.call(a3);
    if (className !== toString.call(b3))
      return false;
    switch (className) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a3 === "" + b3;
      case "[object Number]":
        if (+a3 !== +a3)
          return +b3 !== +b3;
        return +a3 === 0 ? 1 / +a3 === 1 / b3 : +a3 === +b3;
      case "[object Date]":
      case "[object Boolean]":
        return +a3 === +b3;
      case "[object Symbol]":
        return typeof Symbol !== "undefined" && Symbol.valueOf.call(a3) === Symbol.valueOf.call(b3);
      case "[object Map]":
      case "[object Set]":
        if (depth >= 0) {
          depth++;
        }
        break;
    }
    a3 = unwrap(a3);
    b3 = unwrap(b3);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
      if (typeof a3 != "object" || typeof b3 != "object")
        return false;
      var aCtor = a3.constructor, bCtor = b3.constructor;
      if (aCtor !== bCtor && !(typeof aCtor === "function" && aCtor instanceof aCtor && typeof bCtor === "function" && bCtor instanceof bCtor) && ("constructor" in a3 && "constructor" in b3)) {
        return false;
      }
    }
    if (depth === 0) {
      return false;
    } else if (depth < 0) {
      depth = -1;
    }
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      if (aStack[length] === a3)
        return bStack[length] === b3;
    }
    aStack.push(a3);
    bStack.push(b3);
    if (areArrays) {
      length = a3.length;
      if (length !== b3.length)
        return false;
      while (length--) {
        if (!eq(a3[length], b3[length], depth - 1, aStack, bStack))
          return false;
      }
    } else {
      var keys2 = Object.keys(a3);
      var key = void 0;
      length = keys2.length;
      if (Object.keys(b3).length !== length)
        return false;
      while (length--) {
        key = keys2[length];
        if (!(has$1(b3, key) && eq(a3[key], b3[key], depth - 1, aStack, bStack)))
          return false;
      }
    }
    aStack.pop();
    bStack.pop();
    return true;
  }
  function unwrap(a3) {
    if (isObservableArray(a3))
      return a3.slice();
    if (isES6Map(a3) || isObservableMap(a3))
      return Array.from(a3.entries());
    if (isES6Set(a3) || isObservableSet(a3))
      return Array.from(a3.entries());
    return a3;
  }
  function has$1(a3, key) {
    return Object.prototype.hasOwnProperty.call(a3, key);
  }
  function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
  }
  function getSelf() {
    return this;
  }
  if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
  }
  (function() {
    function testCodeMinification() {
    }
    if (testCodeMinification.name !== "testCodeMinification" && true && typeof process !== "undefined" && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
      var varName = ["process", "env", "NODE_ENV"].join(".");
      console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
  })();
  if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy,
      extras: {
        getDebugName
      },
      $mobx
    });
  }

  // node_modules/@adobe/lit-mobx/lib/mixin.js
  function MobxReactionUpdate(constructor) {
    return MobxReactionUpdateCustom(constructor, Reaction);
  }

  // node_modules/@adobe/lit-mobx/lit-mobx.js
  var MobxLitElement = class extends MobxReactionUpdate(r5) {
  };

  // node_modules/lit-html/directive.js
  var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e5 = (t5) => (...e7) => ({ _$litDirective$: t5, values: e7 });
  var i5 = class {
    constructor(t5) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t5, e7, i7) {
      this._$Ct = t5, this._$AM = e7, this._$Ci = i7;
    }
    _$AS(t5, e7) {
      return this.update(t5, e7);
    }
    update(t5, e7) {
      return this.render(...e7);
    }
  };

  // node_modules/lit-html/directives/class-map.js
  var e6 = e5(class extends i5 {
    constructor(t5) {
      if (super(t5), t5.type !== t4.ATTRIBUTE || "class" !== t5.name || t5.strings?.length > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t5) {
      return " " + Object.keys(t5).filter((s3) => t5[s3]).join(" ") + " ";
    }
    update(s3, [i7]) {
      if (void 0 === this.st) {
        this.st = /* @__PURE__ */ new Set(), void 0 !== s3.strings && (this.nt = new Set(s3.strings.join(" ").split(/\s/).filter((t5) => "" !== t5)));
        for (const t5 in i7)
          i7[t5] && !this.nt?.has(t5) && this.st.add(t5);
        return this.render(i7);
      }
      const r6 = s3.element.classList;
      for (const t5 of this.st)
        t5 in i7 || (r6.remove(t5), this.st.delete(t5));
      for (const t5 in i7) {
        const s4 = !!i7[t5];
        s4 === this.st.has(t5) || this.nt?.has(t5) || (s4 ? (r6.add(t5), this.st.add(t5)) : (r6.remove(t5), this.st.delete(t5)));
      }
      return T;
    }
  });

  // node_modules/lit-html/directives/style-map.js
  var n5 = "important";
  var i6 = " !" + n5;
  var o5 = e5(class extends i5 {
    constructor(t5) {
      if (super(t5), t5.type !== t4.ATTRIBUTE || "style" !== t5.name || t5.strings?.length > 2)
        throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t5) {
      return Object.keys(t5).reduce((e7, r6) => {
        const s3 = t5[r6];
        return null == s3 ? e7 : e7 + `${r6 = r6.includes("-") ? r6 : r6.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s3};`;
      }, "");
    }
    update(e7, [r6]) {
      const { style: s3 } = e7.element;
      if (void 0 === this.ft)
        return this.ft = new Set(Object.keys(r6)), this.render(r6);
      for (const t5 of this.ft)
        null == r6[t5] && (this.ft.delete(t5), t5.includes("-") ? s3.removeProperty(t5) : s3[t5] = null);
      for (const t5 in r6) {
        const e8 = r6[t5];
        if (null != e8) {
          this.ft.add(t5);
          const r7 = "string" == typeof e8 && e8.endsWith(i6);
          t5.includes("-") || r7 ? s3.setProperty(t5, r7 ? e8.slice(0, -11) : e8, r7 ? n5 : "") : s3[t5] = e8;
        }
      }
      return T;
    }
  });

  // demo/app.css
  var styles2 = i`:host {
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
}

#main-grid {
  height: 100vh;

  display: grid;
  grid-template-columns: 326px 1fr;
  grid-template-rows: min-content min-content min-content 1fr min-content;
  grid-template-areas:
    "header header"
    "filters filters"
    "left-bar example-controls"
    "left-bar example"
    "footer footer";
}

md-icon.icon-button {
  --md-icon-size: 16px;
}

#header {
  grid-area: header;

  display: grid;
  grid-template: min-content / subgrid;

  padding: 4px 10px;
  border-bottom: 2px solid #ccc;

  .header-group {
    display: flex;
    align-items: center;
  }

  .main-title {
    grid-row: 1;
    grid-column: 1;

    font-size: 20px;
    height: 42px;
  }

  .header-controls {
    grid-row: 1;
    grid-column: 2;

    display: grid;
    grid-template-rows: min-content;
    grid-template-columns: min-content 1fr repeat(4, min-content);
  }

  .base-path-input {
    grid-row: 1;
  }

  .expt-path-input {
    grid-row: 3;
  }

  .path-input {
    grid-column: 1 / -1;
    display: grid;
    grid-template: min-content / subgrid;

    place-content: center;
    place-items: center start;

    height: 30px;
    font-size: small;
    text-overflow: ellipsis;
    overflow-x: hidden;
    flex: 1;
    gap: 8px;

    label {
      text-wrap: nowrap;
    }

    input {
      width: calc(100% - 8px);
      font-size: 12px;
    }

    &.edited input {
      background: var(--lit-bric-50);
    }
  }

  .file-suggestions {
    grid-row: 2;
    grid-column: 1 / -1;
    font-size: x-small;
    flex-wrap: wrap;
    row-gap: 4px;
    column-gap: 10px;

    a.current-file {
      color: var(--lit-neutral-800);
      text-decoration: unset;
      font-weight: 700;
    }
  }

  .file-upload {
    input {
      display: none;
    }
  }

  .sxs-mode-button {
    color: var(--lit-cyea-700);
    border-color: var(--lit-cyea-200);

    &.active {
      background: var(--lit-cyea-200);
      border-color: var(--lit-cyea-700);
    }
  }

  .copy-link-button {
    color: var(--lit-cyea-700);
    border-color: var(--lit-cyea-700);

    text-wrap-mode: nowrap;
  }
}

#filters {
  grid-area: filters;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: max-content 1fr max-content max-content;
  gap: 10px;

  .filter-pending {
    opacity: 0.7;
    cursor: wait;
  }

  .filter-group {
    grid-row: span 1;
    grid-column: span 2;

    &.filter-group-wide {
      grid-column: span 4;
    }

    height: 22px;

    display: grid;
    grid-template: auto / subgrid;
    align-items: center;
    gap: 10px;

    label.row-label {
      font-weight: bold;
      font-size: larger;
      line-height: 16px;
    }

    .filter-chips {
      display: flex;
      flex-direction: row;
      gap: 6px;

      .filter-chip {
        color: var(--lit-neutral-700);
        /* background: var(--lit-bric-50); */
        border-radius: 2px;
        border: 1px solid var(--lit-gray-700);
        padding: 2px;

        cursor: pointer;
        user-select: none;

        &.selected {
          color: var(--lit-neutral-900);
          background: var(--lit-bric-100);
        }
      }
    }

    .data-filter {
      display: flex;
      flex-direction: row;
      align-items: center;

      grid-column: span 3;

      input {
        min-width: 300px;
        flex: 1;

        &::placeholder {
          opacity: 0.5;
        }
      }

      .preset-links {
        margin-left: 10px;

        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        align-items: center;
        row-gap: 4px;
        column-gap: 8px;

        font-size: x-small;

        .preset-filter {
          color: -webkit-link;
          cursor: pointer;
          text-decoration: underline;
        }

        .current-filter {
          color: var(--lit-neutral-800);
          text-decoration: unset;
          font-weight: 700;
        }
      }
    }
  }
}

#example-controls {
  grid-area: example-controls;
  height: 24px;
  margin-right: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

#example {
  grid-area: example;
  margin-right: 10px;

  overflow: hidden;
}

#left-bar {
  grid-area: left-bar;

  margin-left: 10px;
  margin-right: 16px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.status-emoji {
  width: 20px;
  height: 20px;
  padding-right: 4px;
  display: block;
}

.flex-spacer {
  flex: 1;
}

.number-changer {
  display: flex;
  flex-direction: row;
  align-items: center;

  white-space: nowrap;

  button {
    padding: 2px 6px;
    background: buttonface;
  }
}

.raw-json-button {
  .material-icon {
    margin-left: 4px;
    margin-right: 0;
  }
}

#raw-json-popover {
  width: 90%;
  height: 90%;

  border: 1px solid black;
  border-radius: 6px;

  &::backdrop {
    background-color: hsla(0, 0%, 25%, 0.7); /* gray */
  }

  .flex-column-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .raw-json-header {
    font-size: large;
    padding: 8px;
    border-bottom: 1px solid gray;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .invisible-button {
      /* we need a <button> element for the popover API */
      display: contents;
    }

    md-icon {
      height: 24px;
      width: 24px;
      min-width: 24px;
      --md-icon-size: 24px;
    }
  }

  .raw-json-content {
    font-family: monospace;
    white-space: pre-wrap;
    overflow-y: scroll;

    padding: 4px;
    flex: 1;
  }
}

.raw-json-link {
  display: flex;
  flex-direction: row;
  align-items: center;

  white-space: nowrap;

  a {
    display: contents;
  }
}

.sxs-source-select {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-items: center;
  row-gap: 4px;
  column-gap: 8px;

  font-size: x-small;

  .preset-sxs {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }

  .current-sxs {
    color: var(--lit-neutral-800);
    text-decoration: unset;
    font-weight: 700;
  }
}

#footer {
  background-color: #f3f3f3;
  border-top: 1px solid #ccc;
  height: 15px;
  font-size: 11px;
  padding: 5px 15px;

  grid-area: footer;
  margin-top: 5px;
}
`;

  // demo/data_index.css
  var styles3 = i`.index-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
}

.index-header {
  font-weight: bold;
  font-size: larger;
  padding: 4px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  line-height: 16px;

  .index-header-buttons {
    display: flex;
    align-items: center;
  }
}

.icon-button[disabled] {
  pointer-events: none;
  cursor: default;
  color: var(--lit-neutral-200);
}

.icon-button-active {
  color: var(--lit-cyea-500);
  outline: 1px solid var(--lit-cyea-500);
  border-radius: 2px;
}

.metrics-holder {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr max-content;

  .metric-entry {
    display: grid;
    grid-row: span 1;
    grid-column: span 2;
    grid-template: auto / subgrid;
  }
}

.index-contents {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: scroll;
}

.index-entry {
  background: var(--lit-neutral-50);
  border: 1px solid var(--lit-neutral-200);
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    margin-bottom: 1px;

    .display-name {
      font-weight: bold;
    }

    .score-chip {
      border-radius: 2px;
      border: 1px solid var(--lit-gray-700);
      padding: 0 2px;
      font-size: smaller;
    }

    .task {
      background: var(--lit-bric-50);
      border-radius: 2px;
      border: 1px solid var(--lit-gray-700);
      padding: 0 2px;
      font-size: smaller;
    }

    .no-answer-indicator {
      color: var(--lit-bric-500);
    }
  }
}

.index-entry.selected {
  background: var(--lit-cyea-300);
  border: 1px solid var(--lit-neutral-500);
}
`;

  // demo/elements/shared_styles.css
  var styles4 = i`/**
 * Shared styles for all modules.
 */
:host {
  /* LIT Brand Palettes */
  --lit-cyea-50:  #EDFFFA;
  --lit-cyea-100: #CDF2FA;
  --lit-cyea-200: #AFE6DE;
  --lit-cyea-300: #7BCCCC;
  --lit-cyea-400: #52A6B3;
  --lit-cyea-500: #348199;
  --lit-cyea-600: #1F6180;
  --lit-cyea-700: #114566;
  --lit-cyea-800: #092F4D;
  --lit-cyea-900: #041D33;

  --lit-mage-50:  #FFF5F7;
  --lit-mage-100: #FEEAEF;
  --lit-mage-200: #FED5E0;
  --lit-mage-300: #F9A9C0;
  --lit-mage-400: #EF7CA1;
  --lit-mage-500: #E25287;
  --lit-mage-600: #CE2F75;
  --lit-mage-700: #B7166A;
  --lit-mage-800: #800060;
  --lit-mage-900: #470046;

  --lit-bric-50:  #FDF8EA;
  --lit-bric-100: #F9F1DC;
  --lit-bric-200: #EFD9AB;
  --lit-bric-300: #E4BC78;
  --lit-bric-400: #D59441;
  --lit-bric-500: #C26412;
  --lit-bric-600: #A93D00;
  --lit-bric-700: #8B2100;
  --lit-bric-800: #6A0C00;
  --lit-bric-900: #470000;

  --lit-neutral-50:  #F8F9FA;
  --lit-neutral-100: #F1F3F4;
  --lit-neutral-200: #E8EAED;
  --lit-neutral-300: #DADCE0;
  --lit-neutral-400: #BDC1C6;
  --lit-neutral-500: #9AA0A6;
  --lit-neutral-600: #80868B;
  --lit-neutral-700: #5F6368;
  --lit-neutral-800: #3C4043;
  --lit-neutral-900: #202124;

  /* LIT Major Tonal Palettes */
  --lit-majtonal-p-50:  #EEFBF8;
  --lit-majtonal-p-100: #D8F2ED;
  --lit-majtonal-p-200: #C0E7E3;
  --lit-majtonal-p-300: #A1D2D4;
  --lit-majtonal-p-400: #72AEB9;
  --lit-majtonal-p-500: #48879C;
  --lit-majtonal-p-600: #326882;
  --lit-majtonal-p-700: #284E67;
  --lit-majtonal-p-800: #1D3649;
  --lit-majtonal-p-900: #142838;

  --lit-majtonal-s-50:  #FFF5F7;
  --lit-majtonal-s-100: #FAEDF0;
  --lit-majtonal-s-200: #F7DBE4;
  --lit-majtonal-s-300: #EDBDCD;
  --lit-majtonal-s-400: #E091AC;
  --lit-majtonal-s-500: #CC6990;
  --lit-majtonal-s-600: #BE4079;
  --lit-majtonal-s-700: #9D2D69;
  --lit-majtonal-s-800: #651A54;
  --lit-majtonal-s-900: #3B0A3C;

  --lit-majtonal-t-50:  #FCF8EF;
  --lit-majtonal-t-100: #F9F7ED;
  --lit-majtonal-t-200: #EDDEBF;
  --lit-majtonal-t-300: #E0C9A2;
  --lit-majtonal-t-400: #CEA269;
  --lit-majtonal-t-500: #B6763E;
  --lit-majtonal-t-600: #A14C1C;
  --lit-majtonal-t-700: #7E351F;
  --lit-majtonal-t-800: #58211B;
  --lit-majtonal-t-900: #3B0A0B;

  --lit-majtonal-nv-50:  #F0F7F7;
  --lit-majtonal-nv-100: #EBF3F2;
  --lit-majtonal-nv-200: #E3ECED;
  --lit-majtonal-nv-300: #CCD9DD;
  --lit-majtonal-nv-400: #B5C6CA;
  --lit-majtonal-nv-500: #9CAFB4;
  --lit-majtonal-nv-600: #72868F;
  --lit-majtonal-nv-700: #596C75;
  --lit-majtonal-nv-800: #3F5259;
  --lit-majtonal-nv-900: #222C35;

  /* LIT Minor Tonal Palettes */
  --lit-mintonal-p-1: #F5F9FA;
  --lit-mintonal-p-2: #EFF5F7;
  --lit-mintonal-p-3: #E9F1F4;
  --lit-mintonal-p-4: #E7F0F3;
  --lit-mintonal-p-5: #E3EDF1;

  --lit-mintonal-s-1: #F9F2F7;
  --lit-mintonal-s-2: #F5EBF2;
  --lit-mintonal-s-3: #F1E3EE;
  --lit-mintonal-s-4: #F0E0EC;
  --lit-mintonal-s-5: #EDDBE9;

  --lit-mintonal-t-1: #FAF4F3;
  --lit-mintonal-t-2: #F6EDEB;
  --lit-mintonal-t-3: #F2E7E3;
  --lit-mintonal-t-4: #F3E4E1;
  --lit-mintonal-t-5: #EFE0DB;

  /* Google Red, Exclusively for Errors */
  --google-red-50: #FCE8E6;
  --google-red-500: #EA4335;
  --google-red-600: #D93025;
  --google-red-700: #C5221F;

  /* Viz Colors */
  --viz-color-orange-1: #FFD8C3;
  --viz-color-orange-2: #F0BD80;
  --viz-color-orange-3: #FF9230;
  --viz-color-orange-4: #BA4A0D;

  --viz-color-blue-1: #87CDF9;
  --viz-color-blue-2: #61AFF7;
  --viz-color-blue-3: #3C7DBF;
  --viz-color-blue-4: #184889;

  --viz-color-yellow-1: #FAF49F;
  --viz-color-yellow-2: #FFE839;
  --viz-color-yellow-3: #FFC700;
  --viz-color-yellow-4: #848014;

  --viz-color-purple-1: #CDC5FF;
  --viz-color-purple-2: #9B86EF;
  --viz-color-purple-3: #7647EA;
  --viz-color-purple-4: #270085;

  --viz-color-coral-1: #F6AEA9;
  --viz-color-coral-2: #FF777B;
  --viz-color-coral-3: #FC4F61;
  --viz-color-coral-4: #B12D33;

  --viz-color-teal-1: #BDF4E7;
  --viz-color-teal-2: #7DDAD3;
  --viz-color-teal-3: #1F978A;
  --viz-color-teal-4: #006067;

  --viz-color-magenta-1: #EDC4E6;
  --viz-color-magenta-2: #EF96CD;
  --viz-color-magenta-3: #B22A72;
  --viz-color-magenta-4: #632440;

  --viz-color-grey-1: #DADCE0;
  --viz-color-grey-2: #B5BCC3;
  --viz-color-grey-3: #879695;
  --viz-color-grey-4: #515050;

  /* Compatibility Aliases */
  --lit-gray-700: var(--lit-neutral-700);
  --lit-gray-800: var(--lit-neutral-700);
  /* For field names, etc. like preds (MulticlassPreds) */
  --lit-bold-label-color: var(--lit-majtonal-nv-800);
  --lit-light-label-color: var(--lit-majtonal-nv-600);

  --lit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14),
                    0 3px 1px -2px rgba(0, 0, 0, .2),
                    0 1px 5px 0 rgba(0, 0, 0, .12);
}

button {
  width: fit-content;
  max-height: 100%;
  background: white;
  pointer-events: auto;
  cursor: pointer;
  border: 1px solid darkgrey;
  margin: 5px;
  text-align: center;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  display: flex;
}

button.accent {
  background: rgb(47, 140, 155);
  border: none;
  color: white;
}

button.accent:hover {
  background: rgb(33, 98, 108);
}


button:hover {
  background: #faf49f;
}

button:disabled {
  background: darkgrey;
  color: lightgrey;
  pointer-events: none;
  cursor: auto;
}

.dropdown-label {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.3px;
  color: var(--lit-neutral-800);
}

.dropdown {
  outline: none;
  border: none;
  border-bottom: 1px solid var(--lit-neutral-400);
  appearance: none;
  -webkit-appearance: none;
  padding: 4px 18px 3px 4px;
  margin:  2px  8px 2px 0;
  color: var(--lit-neutral-800);
  background-color: transparent;
  /* SVG background-image sets fill: var(--lit-neutral-800) as HEX value */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%233C4043%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-size: .65em auto, 100%;
  background-position: top 50% right 5.5px;
  background-repeat: no-repeat;
}

.dropdown:hover {
  background-color: var(--lit-mintonal-p-3);
  cursor: pointer;
}

.dropdown:active {
  color: var(--lit-cyea-600);
  /* SVG background-image sets fill: var(--lit-cyea-600) as HEX value */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231F6180%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-color: var(--lit-mintonal-p-1);
}

.dropdown:disabled {
  color: var(--lit-neutral-400);
  /* SVG background-image sets fill: var(--lit-neutral-200) as HEX value */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23E8EAED%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
}

.dropdown.borderless { /* Not currently in use but available */
  border: none;
}

.dropdown.hairline { /* Not currently in use but likely will be in AppToolbar */
  border: 1px solid var(--lit-neutral-400);
  border-radius: 4px;
  padding: 4px 16px 4px 5px;
}

.dropdown.hairline:disabled {
  border: 1px solid var(--lit-neutral-200);
  border-radius: 4px;
}

.monospace {
  font-family: 'Share Tech Mono', monospace;
}

/* Field name headings, for use in module content. */
.field-title {
  font-size: 14px;
}

/* Smaller field name headings, as in the data table. */
.field-name {
  font-weight: bold;
  color: var(--lit-bold-label-color);
}

mwc-textfield {
  --mdc-theme-primary: #2f8c9b;
}

/* For in-line icons in a <span> */
.material-icon {
  font-family: 'Material Icons';
  vertical-align: middle;
  margin: 0;
}

.material-icon-outlined {
  font-family: 'Material Icons Outlined';
  vertical-align: middle;
  margin: 0;
}

/* Token chips */
.token-chip-function {
  color: #5f6368;
  font-family: 'Roboto';
  background: #f8f9fa;
  border-radius: 2px;
  border: 1px solid transparent; /* for spacing */
  padding: 2px;
  width: fit-content;
}

.token-chip-function.selected {
  border: 1px solid #80868b;
}

.token-chip-function:hover {
  background: #e8eaed;
}

.token-chip-label {
  color: #3c4043;
  font-family: 'Roboto Mono', monospace;
  border: 1px solid transparent; /* for spacing */
  border-radius: 2px;
  padding: 2px;
  width: fit-content;
}

.token-chip-label.selected {
  color: #098591;
  border-color: #098591;
}

.token-chip-label:not(:only-child):hover {
  background: #e4f7fb;
}

.token-chip-generated {
  color: #8430ce;
  font-family: 'Roboto';
  background: #f3e8fd;
  border: 1px solid transparent; /* for spacing */
  border-radius: 2px;
  padding: 2px;
  width: fit-content;
}

.token-chip-generated.selected {
  border-color: #a142f4;
}

.token-chip-generated:hover {
  background: #e9d2fd;
}

.filled-button,
.hairline-button {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.3px;
  padding: 0 12px;
  margin: 0 4px;
  border-radius: 4px;
}

.filled-button.xl,
.hairline-button.xl {
  font-size: 14px;
  line-height: 24px;
}

.filled-button .material-icon:first-child,
.hairline-button .material-icon:first-child {
  margin-right: 4px;
}

/**
 * Design Spec Deviation -- No button:focus states
 *
 * A decision was made to remove the :focus style from LIT buttons until a
 * complete accessibility audit is completed.
 */

.filled-button {
  background: var(--lit-majtonal-p-500);
  border: 1px solid var(--lit-majtonal-p-500);
  color: white;
}

.filled-button:active {
  background: var(--lit-majtonal-p-700);
  border: 1px solid var(--lit-majtonal-p-700);
}

.filled-button:hover {
  background: var(--lit-majtonal-p-600);
  border: 1px solid var(--lit-majtonal-p-600);
}

.filled-button:disabled {
  background: var(--lit-neutral-100);
  border: 1px solid var(--lit-neutral-100);
  color: var(--lit-neutral-400);
}

.hairline-button {
  background: transparent;
  border: 1px solid var(--lit-neutral-400);
  color: var(--lit-cyea-600);
}

.hairline-button:hover {
  background-color: var(--lit-mintonal-p-3);
  border: 1px solid var(--lit-neutral-400);
  color: var(--lit-cyea-600);
}

.hairline-button:disabled {
  color: var(--lit-neutral-400);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--lit-neutral-200);
}

.hairline-button:active,
.hairline-button.active {
  background-color: var(--lit-mintonal-p-4);
  border: 1px solid var(--lit-cyea-500);
  color: var(--lit-cyea-500);
}

.pin-icon {
  height: 14px;
  width: 14px;
  min-width: 14px;
  --mdc-icon-size: 14px;
  user-select: none;
  color: var(--lit-cyea-500);
  margin-right: 2px;
}

.icon-button.cyea {
  color: var(--lit-cyea-500);
}

.icon {
  height: 16px;
  width: 16px;
  min-width: 16px;
  --mdc-icon-size: 16px;
  user-select: none;
  color: var(--lit-neutral-700);
}

/**
 * For standalone MWC icons as buttons. We don't use mwc-icon-button because it
 * adds a large backdrop and extra whitespace.
 */
.icon-button {
  height: 16px;
  width: 16px;
  min-width: 16px;
  --mdc-icon-size: 16px;
  cursor: pointer;
  user-select: none;
  color: var(--lit-neutral-700);
}

.icon-button:hover {
  color: var(--lit-neutral-500);
}

.icon-button:disabled,
mwc-icon.disabled{
  pointer-events: none;
  cursor: default;
  color: var(--lit-neutral-200);
}

.icon-button:active {
  color: var(--lit-neutral-900);
}

mwc-icon.mdi-outlined {
  --mdc-icon-font: "Material Icons Outlined";
}

.span-outlined {
  font-family: "Material Icons Outlined";
}

.icon-button.large-icon {
  height: 20px;
  width: 20px;
  min-width: 20px;
  --mdc-icon-size: 20px;
  padding: 0x 2px 0px 2px;
}

.icon-button.white-icon {
  color: var(--lit-neutral-100);
}

.icon-button.white-icon:hover {
  color: var(--lit-neutral-400);
}

.icon-button.cyea-icon {
  color: var(--lit-cyea-800);
}

.icon-button.cyea-icon:hover {
  color: var(--lit-cyea-600);
}

.large-help-icon{
  position: relative;
  height: 14px;
  width: 14px;
  min-width: 14px;
  --mdc-icon-size: 14px;
  margin: auto;
}

.help-icon{
  cursor: pointer;
  height: 12px;
  width: 12px;
  min-width: 12px;
  --mdc-icon-size: 12px;
}

/**
 * Main container to use inside modules.
 * If this contains a .module-toolbar and a .module-results-area,
 * the results area will scroll while the toolbar remains at the top.
 */
.module-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Toolbar container for module controls. */
.module-toolbar {
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  min-height: 36px;
  box-sizing: border-box;
  padding: 0 4px;
}

.module-toolbar > * {
  margin: 0px 4px;
}

.module-results-area {
  flex: 1;
  overflow-y: auto;
}

.module-content {
  box-sizing: border-box;
  flex-grow: 1;
  flex-shrink: 1;
}

.module-footer {
  align-items: center;
  border-top: 1px solid var(--viz-color-grey-1);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: space-between;
  height: 36px;
  padding: 0 8px;
}

/** Status text in a module footer. **/
.module-status {
  color: var(--lit-neutral-800);
  font-style: italic;
  font-weight: normal;
  margin: 0 0.5em;
}

/**
 * Spacer div: insert this before content if you want a module without a
 * subtitle to align horizontally to one that does have one.
 * Used in span graph and annotated text modules, where the gold preds don't
 * have a subtitle for the model name.
 */
.offset-for-module-header {
  height: 0;
  margin-top: 24px; /* match .header height from widget.css */
}

mwc-icon.outlined {
  --mdc-icon-font: "Material Icons Outlined";
}

/* TODO(b/254783802): consolidate this with <popup-container> */
.popup-container {
  background: white;
  border: 1px solid var(--lit-neutral-600);
  box-shadow: var(--lit-box-shadow);
}

.nowrap {
  white-space: nowrap;
}
`;

  // node_modules/d3-array/src/ascending.js
  function ascending(a3, b3) {
    return a3 == null || b3 == null ? NaN : a3 < b3 ? -1 : a3 > b3 ? 1 : a3 >= b3 ? 0 : NaN;
  }

  // node_modules/d3-array/src/descending.js
  function descending(a3, b3) {
    return a3 == null || b3 == null ? NaN : b3 < a3 ? -1 : b3 > a3 ? 1 : b3 >= a3 ? 0 : NaN;
  }

  // node_modules/d3-array/src/bisector.js
  function bisector(f3) {
    let compare1, compare2, delta;
    if (f3.length !== 2) {
      compare1 = ascending;
      compare2 = (d3, x2) => ascending(f3(d3), x2);
      delta = (d3, x2) => f3(d3) - x2;
    } else {
      compare1 = f3 === ascending || f3 === descending ? f3 : zero;
      compare2 = f3;
      delta = f3;
    }
    function left(a3, x2, lo = 0, hi = a3.length) {
      if (lo < hi) {
        if (compare1(x2, x2) !== 0)
          return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a3[mid], x2) < 0)
            lo = mid + 1;
          else
            hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function right(a3, x2, lo = 0, hi = a3.length) {
      if (lo < hi) {
        if (compare1(x2, x2) !== 0)
          return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a3[mid], x2) <= 0)
            lo = mid + 1;
          else
            hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function center(a3, x2, lo = 0, hi = a3.length) {
      const i7 = left(a3, x2, lo, hi - 1);
      return i7 > lo && delta(a3[i7 - 1], x2) > -delta(a3[i7], x2) ? i7 - 1 : i7;
    }
    return { left, center, right };
  }
  function zero() {
    return 0;
  }

  // node_modules/d3-array/src/number.js
  function number(x2) {
    return x2 === null ? NaN : +x2;
  }

  // node_modules/d3-array/src/bisect.js
  var ascendingBisect = bisector(ascending);
  var bisectRight = ascendingBisect.right;
  var bisectLeft = ascendingBisect.left;
  var bisectCenter = bisector(number).center;
  var bisect_default = bisectRight;

  // node_modules/d3-array/src/ticks.js
  var e10 = Math.sqrt(50);
  var e52 = Math.sqrt(10);
  var e22 = Math.sqrt(2);
  function tickSpec(start2, stop, count) {
    const step = (stop - start2) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e52 ? 5 : error >= e22 ? 2 : 1;
    let i1, i22, inc;
    if (power < 0) {
      inc = Math.pow(10, -power) / factor;
      i1 = Math.round(start2 * inc);
      i22 = Math.round(stop * inc);
      if (i1 / inc < start2)
        ++i1;
      if (i22 / inc > stop)
        --i22;
      inc = -inc;
    } else {
      inc = Math.pow(10, power) * factor;
      i1 = Math.round(start2 / inc);
      i22 = Math.round(stop / inc);
      if (i1 * inc < start2)
        ++i1;
      if (i22 * inc > stop)
        --i22;
    }
    if (i22 < i1 && 0.5 <= count && count < 2)
      return tickSpec(start2, stop, count * 2);
    return [i1, i22, inc];
  }
  function ticks(start2, stop, count) {
    stop = +stop, start2 = +start2, count = +count;
    if (!(count > 0))
      return [];
    if (start2 === stop)
      return [start2];
    const reverse = stop < start2, [i1, i22, inc] = reverse ? tickSpec(stop, start2, count) : tickSpec(start2, stop, count);
    if (!(i22 >= i1))
      return [];
    const n6 = i22 - i1 + 1, ticks2 = new Array(n6);
    if (reverse) {
      if (inc < 0)
        for (let i7 = 0; i7 < n6; ++i7)
          ticks2[i7] = (i22 - i7) / -inc;
      else
        for (let i7 = 0; i7 < n6; ++i7)
          ticks2[i7] = (i22 - i7) * inc;
    } else {
      if (inc < 0)
        for (let i7 = 0; i7 < n6; ++i7)
          ticks2[i7] = (i1 + i7) / -inc;
      else
        for (let i7 = 0; i7 < n6; ++i7)
          ticks2[i7] = (i1 + i7) * inc;
    }
    return ticks2;
  }
  function tickIncrement(start2, stop, count) {
    stop = +stop, start2 = +start2, count = +count;
    return tickSpec(start2, stop, count)[2];
  }
  function tickStep(start2, stop, count) {
    stop = +stop, start2 = +start2, count = +count;
    const reverse = stop < start2, inc = reverse ? tickIncrement(stop, start2, count) : tickIncrement(start2, stop, count);
    return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
  }

  // node_modules/d3-dispatch/src/dispatch.js
  var noop2 = { value: () => {
  } };
  function dispatch() {
    for (var i7 = 0, n6 = arguments.length, _2 = {}, t5; i7 < n6; ++i7) {
      if (!(t5 = arguments[i7] + "") || t5 in _2 || /[\s.]/.test(t5))
        throw new Error("illegal type: " + t5);
      _2[t5] = [];
    }
    return new Dispatch(_2);
  }
  function Dispatch(_2) {
    this._ = _2;
  }
  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t5) {
      var name = "", i7 = t5.indexOf(".");
      if (i7 >= 0)
        name = t5.slice(i7 + 1), t5 = t5.slice(0, i7);
      if (t5 && !types.hasOwnProperty(t5))
        throw new Error("unknown type: " + t5);
      return { type: t5, name };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _2 = this._, T2 = parseTypenames(typename + "", _2), t5, i7 = -1, n6 = T2.length;
      if (arguments.length < 2) {
        while (++i7 < n6)
          if ((t5 = (typename = T2[i7]).type) && (t5 = get(_2[t5], typename.name)))
            return t5;
        return;
      }
      if (callback != null && typeof callback !== "function")
        throw new Error("invalid callback: " + callback);
      while (++i7 < n6) {
        if (t5 = (typename = T2[i7]).type)
          _2[t5] = set2(_2[t5], typename.name, callback);
        else if (callback == null)
          for (t5 in _2)
            _2[t5] = set2(_2[t5], typename.name, null);
      }
      return this;
    },
    copy: function() {
      var copy3 = {}, _2 = this._;
      for (var t5 in _2)
        copy3[t5] = _2[t5].slice();
      return new Dispatch(copy3);
    },
    call: function(type2, that) {
      if ((n6 = arguments.length - 2) > 0)
        for (var args = new Array(n6), i7 = 0, n6, t5; i7 < n6; ++i7)
          args[i7] = arguments[i7 + 2];
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (t5 = this._[type2], i7 = 0, n6 = t5.length; i7 < n6; ++i7)
        t5[i7].value.apply(that, args);
    },
    apply: function(type2, that, args) {
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (var t5 = this._[type2], i7 = 0, n6 = t5.length; i7 < n6; ++i7)
        t5[i7].value.apply(that, args);
    }
  };
  function get(type2, name) {
    for (var i7 = 0, n6 = type2.length, c4; i7 < n6; ++i7) {
      if ((c4 = type2[i7]).name === name) {
        return c4.value;
      }
    }
  }
  function set2(type2, name, callback) {
    for (var i7 = 0, n6 = type2.length; i7 < n6; ++i7) {
      if (type2[i7].name === name) {
        type2[i7] = noop2, type2 = type2.slice(0, i7).concat(type2.slice(i7 + 1));
        break;
      }
    }
    if (callback != null)
      type2.push({ name, value: callback });
    return type2;
  }
  var dispatch_default = dispatch;

  // node_modules/d3-selection/src/namespaces.js
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces_default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  // node_modules/d3-selection/src/namespace.js
  function namespace_default(name) {
    var prefix = name += "", i7 = prefix.indexOf(":");
    if (i7 >= 0 && (prefix = name.slice(0, i7)) !== "xmlns")
      name = name.slice(i7 + 1);
    return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
  }

  // node_modules/d3-selection/src/creator.js
  function creatorInherit(name) {
    return function() {
      var document2 = this.ownerDocument, uri = this.namespaceURI;
      return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator_default(name) {
    var fullname = namespace_default(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  // node_modules/d3-selection/src/selector.js
  function none() {
  }
  function selector_default(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  // node_modules/d3-selection/src/selection/select.js
  function select_default(select) {
    if (typeof select !== "function")
      select = selector_default(select);
    for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
      for (var group = groups[j2], n6 = group.length, subgroup = subgroups[j2] = new Array(n6), node, subnode, i7 = 0; i7 < n6; ++i7) {
        if ((node = group[i7]) && (subnode = select.call(node, node.__data__, i7, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i7] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/array.js
  function array(x2) {
    return x2 == null ? [] : Array.isArray(x2) ? x2 : Array.from(x2);
  }

  // node_modules/d3-selection/src/selectorAll.js
  function empty() {
    return [];
  }
  function selectorAll_default(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectAll.js
  function arrayAll(select) {
    return function() {
      return array(select.apply(this, arguments));
    };
  }
  function selectAll_default(select) {
    if (typeof select === "function")
      select = arrayAll(select);
    else
      select = selectorAll_default(select);
    for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
      for (var group = groups[j2], n6 = group.length, node, i7 = 0; i7 < n6; ++i7) {
        if (node = group[i7]) {
          subgroups.push(select.call(node, node.__data__, i7, group));
          parents.push(node);
        }
      }
    }
    return new Selection(subgroups, parents);
  }

  // node_modules/d3-selection/src/matcher.js
  function matcher_default(selector) {
    return function() {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function(node) {
      return node.matches(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectChild.js
  var find = Array.prototype.find;
  function childFind(match) {
    return function() {
      return find.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selectChild_default(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  // node_modules/d3-selection/src/selection/selectChildren.js
  var filter = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match) {
    return function() {
      return filter.call(this.children, match);
    };
  }
  function selectChildren_default(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  // node_modules/d3-selection/src/selection/filter.js
  function filter_default(match) {
    if (typeof match !== "function")
      match = matcher_default(match);
    for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
      for (var group = groups[j2], n6 = group.length, subgroup = subgroups[j2] = [], node, i7 = 0; i7 < n6; ++i7) {
        if ((node = group[i7]) && match.call(node, node.__data__, i7, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/selection/sparse.js
  function sparse_default(update) {
    return new Array(update.length);
  }

  // node_modules/d3-selection/src/selection/enter.js
  function enter_default() {
    return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
  }
  function EnterNode(parent, datum2) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum2;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  // node_modules/d3-selection/src/constant.js
  function constant_default(x2) {
    return function() {
      return x2;
    };
  }

  // node_modules/d3-selection/src/selection/data.js
  function bindIndex(parent, group, enter, update, exit, data) {
    var i7 = 0, node, groupLength = group.length, dataLength = data.length;
    for (; i7 < dataLength; ++i7) {
      if (node = group[i7]) {
        node.__data__ = data[i7];
        update[i7] = node;
      } else {
        enter[i7] = new EnterNode(parent, data[i7]);
      }
    }
    for (; i7 < groupLength; ++i7) {
      if (node = group[i7]) {
        exit[i7] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i7, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    for (i7 = 0; i7 < groupLength; ++i7) {
      if (node = group[i7]) {
        keyValues[i7] = keyValue = key.call(node, node.__data__, i7, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i7] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }
    for (i7 = 0; i7 < dataLength; ++i7) {
      keyValue = key.call(parent, data[i7], i7, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i7] = node;
        node.__data__ = data[i7];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i7] = new EnterNode(parent, data[i7]);
      }
    }
    for (i7 = 0; i7 < groupLength; ++i7) {
      if ((node = group[i7]) && nodeByKeyValue.get(keyValues[i7]) === node) {
        exit[i7] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function data_default(value, key) {
    if (!arguments.length)
      return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function")
      value = constant_default(value);
    for (var m2 = groups.length, update = new Array(m2), enter = new Array(m2), exit = new Array(m2), j2 = 0; j2 < m2; ++j2) {
      var parent = parents[j2], group = groups[j2], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j2, parents)), dataLength = data.length, enterGroup = enter[j2] = new Array(dataLength), updateGroup = update[j2] = new Array(dataLength), exitGroup = exit[j2] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1)
            i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength)
            ;
          previous._next = next || null;
        }
      }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }
  function arraylike(data) {
    return typeof data === "object" && "length" in data ? data : Array.from(data);
  }

  // node_modules/d3-selection/src/selection/exit.js
  function exit_default() {
    return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
  }

  // node_modules/d3-selection/src/selection/join.js
  function join_default(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter)
        enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update)
        update = update.selection();
    }
    if (onexit == null)
      exit.remove();
    else
      onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  // node_modules/d3-selection/src/selection/merge.js
  function merge_default(context) {
    var selection2 = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
      for (var group0 = groups0[j2], group1 = groups1[j2], n6 = group0.length, merge = merges[j2] = new Array(n6), node, i7 = 0; i7 < n6; ++i7) {
        if (node = group0[i7] || group1[i7]) {
          merge[i7] = node;
        }
      }
    }
    for (; j2 < m0; ++j2) {
      merges[j2] = groups0[j2];
    }
    return new Selection(merges, this._parents);
  }

  // node_modules/d3-selection/src/selection/order.js
  function order_default() {
    for (var groups = this._groups, j2 = -1, m2 = groups.length; ++j2 < m2; ) {
      for (var group = groups[j2], i7 = group.length - 1, next = group[i7], node; --i7 >= 0; ) {
        if (node = group[i7]) {
          if (next && node.compareDocumentPosition(next) ^ 4)
            next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/sort.js
  function sort_default(compare) {
    if (!compare)
      compare = ascending2;
    function compareNode(a3, b3) {
      return a3 && b3 ? compare(a3.__data__, b3.__data__) : !a3 - !b3;
    }
    for (var groups = this._groups, m2 = groups.length, sortgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
      for (var group = groups[j2], n6 = group.length, sortgroup = sortgroups[j2] = new Array(n6), node, i7 = 0; i7 < n6; ++i7) {
        if (node = group[i7]) {
          sortgroup[i7] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  }
  function ascending2(a3, b3) {
    return a3 < b3 ? -1 : a3 > b3 ? 1 : a3 >= b3 ? 0 : NaN;
  }

  // node_modules/d3-selection/src/selection/call.js
  function call_default() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  // node_modules/d3-selection/src/selection/nodes.js
  function nodes_default() {
    return Array.from(this);
  }

  // node_modules/d3-selection/src/selection/node.js
  function node_default() {
    for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
      for (var group = groups[j2], i7 = 0, n6 = group.length; i7 < n6; ++i7) {
        var node = group[i7];
        if (node)
          return node;
      }
    }
    return null;
  }

  // node_modules/d3-selection/src/selection/size.js
  function size_default() {
    let size = 0;
    for (const node of this)
      ++size;
    return size;
  }

  // node_modules/d3-selection/src/selection/empty.js
  function empty_default() {
    return !this.node();
  }

  // node_modules/d3-selection/src/selection/each.js
  function each_default(callback) {
    for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
      for (var group = groups[j2], i7 = 0, n6 = group.length, node; i7 < n6; ++i7) {
        if (node = group[i7])
          callback.call(node, node.__data__, i7, group);
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/attr.js
  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function() {
      var v2 = value.apply(this, arguments);
      if (v2 == null)
        this.removeAttribute(name);
      else
        this.setAttribute(name, v2);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function() {
      var v2 = value.apply(this, arguments);
      if (v2 == null)
        this.removeAttributeNS(fullname.space, fullname.local);
      else
        this.setAttributeNS(fullname.space, fullname.local, v2);
    };
  }
  function attr_default(name, value) {
    var fullname = namespace_default(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
  }

  // node_modules/d3-selection/src/window.js
  function window_default(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
  }

  // node_modules/d3-selection/src/selection/style.js
  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function() {
      var v2 = value.apply(this, arguments);
      if (v2 == null)
        this.style.removeProperty(name);
      else
        this.style.setProperty(name, v2, priority);
    };
  }
  function style_default(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  // node_modules/d3-selection/src/selection/property.js
  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function() {
      var v2 = value.apply(this, arguments);
      if (v2 == null)
        delete this[name];
      else
        this[name] = v2;
    };
  }
  function property_default(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  // node_modules/d3-selection/src/selection/classed.js
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function(name) {
      var i7 = this._names.indexOf(name);
      if (i7 < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i7 = this._names.indexOf(name);
      if (i7 >= 0) {
        this._names.splice(i7, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node), i7 = -1, n6 = names.length;
    while (++i7 < n6)
      list.add(names[i7]);
  }
  function classedRemove(node, names) {
    var list = classList(node), i7 = -1, n6 = names.length;
    while (++i7 < n6)
      list.remove(names[i7]);
  }
  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function classed_default(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()), i7 = -1, n6 = names.length;
      while (++i7 < n6)
        if (!list.contains(names[i7]))
          return false;
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  // node_modules/d3-selection/src/selection/text.js
  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function() {
      var v2 = value.apply(this, arguments);
      this.textContent = v2 == null ? "" : v2;
    };
  }
  function text_default(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
  }

  // node_modules/d3-selection/src/selection/html.js
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function() {
      var v2 = value.apply(this, arguments);
      this.innerHTML = v2 == null ? "" : v2;
    };
  }
  function html_default(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  // node_modules/d3-selection/src/selection/raise.js
  function raise() {
    if (this.nextSibling)
      this.parentNode.appendChild(this);
  }
  function raise_default() {
    return this.each(raise);
  }

  // node_modules/d3-selection/src/selection/lower.js
  function lower() {
    if (this.previousSibling)
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function lower_default() {
    return this.each(lower);
  }

  // node_modules/d3-selection/src/selection/append.js
  function append_default(name) {
    var create2 = typeof name === "function" ? name : creator_default(name);
    return this.select(function() {
      return this.appendChild(create2.apply(this, arguments));
    });
  }

  // node_modules/d3-selection/src/selection/insert.js
  function constantNull() {
    return null;
  }
  function insert_default(name, before) {
    var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
    return this.select(function() {
      return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  // node_modules/d3-selection/src/selection/remove.js
  function remove() {
    var parent = this.parentNode;
    if (parent)
      parent.removeChild(this);
  }
  function remove_default() {
    return this.each(remove);
  }

  // node_modules/d3-selection/src/selection/clone.js
  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function clone_default(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  // node_modules/d3-selection/src/selection/datum.js
  function datum_default(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  // node_modules/d3-selection/src/selection/on.js
  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames2(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t5) {
      var name = "", i7 = t5.indexOf(".");
      if (i7 >= 0)
        name = t5.slice(i7 + 1), t5 = t5.slice(0, i7);
      return { type: t5, name };
    });
  }
  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on)
        return;
      for (var j2 = 0, i7 = -1, m2 = on.length, o6; j2 < m2; ++j2) {
        if (o6 = on[j2], (!typename.type || o6.type === typename.type) && o6.name === typename.name) {
          this.removeEventListener(o6.type, o6.listener, o6.options);
        } else {
          on[++i7] = o6;
        }
      }
      if (++i7)
        on.length = i7;
      else
        delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function() {
      var on = this.__on, o6, listener = contextListener(value);
      if (on)
        for (var j2 = 0, m2 = on.length; j2 < m2; ++j2) {
          if ((o6 = on[j2]).type === typename.type && o6.name === typename.name) {
            this.removeEventListener(o6.type, o6.listener, o6.options);
            this.addEventListener(o6.type, o6.listener = listener, o6.options = options);
            o6.value = value;
            return;
          }
        }
      this.addEventListener(typename.type, listener, options);
      o6 = { type: typename.type, name: typename.name, value, listener, options };
      if (!on)
        this.__on = [o6];
      else
        on.push(o6);
    };
  }
  function on_default(typename, value, options) {
    var typenames = parseTypenames2(typename + ""), i7, n6 = typenames.length, t5;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on)
        for (var j2 = 0, m2 = on.length, o6; j2 < m2; ++j2) {
          for (i7 = 0, o6 = on[j2]; i7 < n6; ++i7) {
            if ((t5 = typenames[i7]).type === o6.type && t5.name === o6.name) {
              return o6.value;
            }
          }
        }
      return;
    }
    on = value ? onAdd : onRemove;
    for (i7 = 0; i7 < n6; ++i7)
      this.each(on(typenames[i7], value, options));
    return this;
  }

  // node_modules/d3-selection/src/selection/dispatch.js
  function dispatchEvent(node, type2, params) {
    var window2 = window_default(node), event = window2.CustomEvent;
    if (typeof event === "function") {
      event = new event(type2, params);
    } else {
      event = window2.document.createEvent("Event");
      if (params)
        event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
      else
        event.initEvent(type2, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params);
    };
  }
  function dispatchFunction(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params.apply(this, arguments));
    };
  }
  function dispatch_default2(type2, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
  }

  // node_modules/d3-selection/src/selection/iterator.js
  function* iterator_default() {
    for (var groups = this._groups, j2 = 0, m2 = groups.length; j2 < m2; ++j2) {
      for (var group = groups[j2], i7 = 0, n6 = group.length, node; i7 < n6; ++i7) {
        if (node = group[i7])
          yield node;
      }
    }
  }

  // node_modules/d3-selection/src/selection/index.js
  var root = [null];
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: select_default,
    selectAll: selectAll_default,
    selectChild: selectChild_default,
    selectChildren: selectChildren_default,
    filter: filter_default,
    data: data_default,
    enter: enter_default,
    exit: exit_default,
    join: join_default,
    merge: merge_default,
    selection: selection_selection,
    order: order_default,
    sort: sort_default,
    call: call_default,
    nodes: nodes_default,
    node: node_default,
    size: size_default,
    empty: empty_default,
    each: each_default,
    attr: attr_default,
    style: style_default,
    property: property_default,
    classed: classed_default,
    text: text_default,
    html: html_default,
    raise: raise_default,
    lower: lower_default,
    append: append_default,
    insert: insert_default,
    remove: remove_default,
    clone: clone_default,
    datum: datum_default,
    on: on_default,
    dispatch: dispatch_default2,
    [Symbol.iterator]: iterator_default
  };
  var selection_default = selection;

  // node_modules/d3-color/src/define.js
  function define_default(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition)
      prototype[key] = definition[key];
    return prototype;
  }

  // node_modules/d3-color/src/color.js
  function Color() {
  }
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*";
  var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var reHex = /^#([0-9a-f]{3,8})$/;
  var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
  var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
  var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
  var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
  var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
  var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  define_default(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHex8() {
    return this.rgb().formatHex8();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format2) {
    var m2, l3;
    format2 = (format2 + "").trim().toLowerCase();
    return (m2 = reHex.exec(format2)) ? (l3 = m2[1].length, m2 = parseInt(m2[1], 16), l3 === 6 ? rgbn(m2) : l3 === 3 ? new Rgb(m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, (m2 & 15) << 4 | m2 & 15, 1) : l3 === 8 ? rgba(m2 >> 24 & 255, m2 >> 16 & 255, m2 >> 8 & 255, (m2 & 255) / 255) : l3 === 4 ? rgba(m2 >> 12 & 15 | m2 >> 8 & 240, m2 >> 8 & 15 | m2 >> 4 & 240, m2 >> 4 & 15 | m2 & 240, ((m2 & 15) << 4 | m2 & 15) / 255) : null) : (m2 = reRgbInteger.exec(format2)) ? new Rgb(m2[1], m2[2], m2[3], 1) : (m2 = reRgbPercent.exec(format2)) ? new Rgb(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, 1) : (m2 = reRgbaInteger.exec(format2)) ? rgba(m2[1], m2[2], m2[3], m2[4]) : (m2 = reRgbaPercent.exec(format2)) ? rgba(m2[1] * 255 / 100, m2[2] * 255 / 100, m2[3] * 255 / 100, m2[4]) : (m2 = reHslPercent.exec(format2)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, 1) : (m2 = reHslaPercent.exec(format2)) ? hsla(m2[1], m2[2] / 100, m2[3] / 100, m2[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n6) {
    return new Rgb(n6 >> 16 & 255, n6 >> 8 & 255, n6 & 255, 1);
  }
  function rgba(r6, g2, b3, a3) {
    if (a3 <= 0)
      r6 = g2 = b3 = NaN;
    return new Rgb(r6, g2, b3, a3);
  }
  function rgbConvert(o6) {
    if (!(o6 instanceof Color))
      o6 = color(o6);
    if (!o6)
      return new Rgb();
    o6 = o6.rgb();
    return new Rgb(o6.r, o6.g, o6.b, o6.opacity);
  }
  function rgb(r6, g2, b3, opacity) {
    return arguments.length === 1 ? rgbConvert(r6) : new Rgb(r6, g2, b3, opacity == null ? 1 : opacity);
  }
  function Rgb(r6, g2, b3, opacity) {
    this.r = +r6;
    this.g = +g2;
    this.b = +b3;
    this.opacity = +opacity;
  }
  define_default(Rgb, rgb, extend(Color, {
    brighter(k2) {
      k2 = k2 == null ? brighter : Math.pow(brighter, k2);
      return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
    },
    darker(k2) {
      k2 = k2 == null ? darker : Math.pow(darker, k2);
      return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }
  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function rgb_formatRgb() {
    const a3 = clampa(this.opacity);
    return `${a3 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a3 === 1 ? ")" : `, ${a3})`}`;
  }
  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }
  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }
  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h3, s3, l3, a3) {
    if (a3 <= 0)
      h3 = s3 = l3 = NaN;
    else if (l3 <= 0 || l3 >= 1)
      h3 = s3 = NaN;
    else if (s3 <= 0)
      h3 = NaN;
    return new Hsl(h3, s3, l3, a3);
  }
  function hslConvert(o6) {
    if (o6 instanceof Hsl)
      return new Hsl(o6.h, o6.s, o6.l, o6.opacity);
    if (!(o6 instanceof Color))
      o6 = color(o6);
    if (!o6)
      return new Hsl();
    if (o6 instanceof Hsl)
      return o6;
    o6 = o6.rgb();
    var r6 = o6.r / 255, g2 = o6.g / 255, b3 = o6.b / 255, min2 = Math.min(r6, g2, b3), max2 = Math.max(r6, g2, b3), h3 = NaN, s3 = max2 - min2, l3 = (max2 + min2) / 2;
    if (s3) {
      if (r6 === max2)
        h3 = (g2 - b3) / s3 + (g2 < b3) * 6;
      else if (g2 === max2)
        h3 = (b3 - r6) / s3 + 2;
      else
        h3 = (r6 - g2) / s3 + 4;
      s3 /= l3 < 0.5 ? max2 + min2 : 2 - max2 - min2;
      h3 *= 60;
    } else {
      s3 = l3 > 0 && l3 < 1 ? 0 : h3;
    }
    return new Hsl(h3, s3, l3, o6.opacity);
  }
  function hsl(h3, s3, l3, opacity) {
    return arguments.length === 1 ? hslConvert(h3) : new Hsl(h3, s3, l3, opacity == null ? 1 : opacity);
  }
  function Hsl(h3, s3, l3, opacity) {
    this.h = +h3;
    this.s = +s3;
    this.l = +l3;
    this.opacity = +opacity;
  }
  define_default(Hsl, hsl, extend(Color, {
    brighter(k2) {
      k2 = k2 == null ? brighter : Math.pow(brighter, k2);
      return new Hsl(this.h, this.s, this.l * k2, this.opacity);
    },
    darker(k2) {
      k2 = k2 == null ? darker : Math.pow(darker, k2);
      return new Hsl(this.h, this.s, this.l * k2, this.opacity);
    },
    rgb() {
      var h3 = this.h % 360 + (this.h < 0) * 360, s3 = isNaN(h3) || isNaN(this.s) ? 0 : this.s, l3 = this.l, m2 = l3 + (l3 < 0.5 ? l3 : 1 - l3) * s3, m1 = 2 * l3 - m2;
      return new Rgb(
        hsl2rgb(h3 >= 240 ? h3 - 240 : h3 + 120, m1, m2),
        hsl2rgb(h3, m1, m2),
        hsl2rgb(h3 < 120 ? h3 + 240 : h3 - 120, m1, m2),
        this.opacity
      );
    },
    clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl() {
      const a3 = clampa(this.opacity);
      return `${a3 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a3 === 1 ? ")" : `, ${a3})`}`;
    }
  }));
  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }
  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }
  function hsl2rgb(h3, m1, m2) {
    return (h3 < 60 ? m1 + (m2 - m1) * h3 / 60 : h3 < 180 ? m2 : h3 < 240 ? m1 + (m2 - m1) * (240 - h3) / 60 : m1) * 255;
  }

  // node_modules/d3-interpolate/src/basis.js
  function basis(t1, v0, v1, v2, v3) {
    var t22 = t1 * t1, t32 = t22 * t1;
    return ((1 - 3 * t1 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t1 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
  }
  function basis_default(values) {
    var n6 = values.length - 1;
    return function(t5) {
      var i7 = t5 <= 0 ? t5 = 0 : t5 >= 1 ? (t5 = 1, n6 - 1) : Math.floor(t5 * n6), v1 = values[i7], v2 = values[i7 + 1], v0 = i7 > 0 ? values[i7 - 1] : 2 * v1 - v2, v3 = i7 < n6 - 1 ? values[i7 + 2] : 2 * v2 - v1;
      return basis((t5 - i7 / n6) * n6, v0, v1, v2, v3);
    };
  }

  // node_modules/d3-interpolate/src/basisClosed.js
  function basisClosed_default(values) {
    var n6 = values.length;
    return function(t5) {
      var i7 = Math.floor(((t5 %= 1) < 0 ? ++t5 : t5) * n6), v0 = values[(i7 + n6 - 1) % n6], v1 = values[i7 % n6], v2 = values[(i7 + 1) % n6], v3 = values[(i7 + 2) % n6];
      return basis((t5 - i7 / n6) * n6, v0, v1, v2, v3);
    };
  }

  // node_modules/d3-interpolate/src/constant.js
  var constant_default2 = (x2) => () => x2;

  // node_modules/d3-interpolate/src/color.js
  function linear(a3, d3) {
    return function(t5) {
      return a3 + t5 * d3;
    };
  }
  function exponential(a3, b3, y3) {
    return a3 = Math.pow(a3, y3), b3 = Math.pow(b3, y3) - a3, y3 = 1 / y3, function(t5) {
      return Math.pow(a3 + t5 * b3, y3);
    };
  }
  function gamma(y3) {
    return (y3 = +y3) === 1 ? nogamma : function(a3, b3) {
      return b3 - a3 ? exponential(a3, b3, y3) : constant_default2(isNaN(a3) ? b3 : a3);
    };
  }
  function nogamma(a3, b3) {
    var d3 = b3 - a3;
    return d3 ? linear(a3, d3) : constant_default2(isNaN(a3) ? b3 : a3);
  }

  // node_modules/d3-interpolate/src/rgb.js
  var rgb_default = function rgbGamma(y3) {
    var color2 = gamma(y3);
    function rgb2(start2, end) {
      var r6 = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g2 = color2(start2.g, end.g), b3 = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
      return function(t5) {
        start2.r = r6(t5);
        start2.g = g2(t5);
        start2.b = b3(t5);
        start2.opacity = opacity(t5);
        return start2 + "";
      };
    }
    rgb2.gamma = rgbGamma;
    return rgb2;
  }(1);
  function rgbSpline(spline) {
    return function(colors) {
      var n6 = colors.length, r6 = new Array(n6), g2 = new Array(n6), b3 = new Array(n6), i7, color2;
      for (i7 = 0; i7 < n6; ++i7) {
        color2 = rgb(colors[i7]);
        r6[i7] = color2.r || 0;
        g2[i7] = color2.g || 0;
        b3[i7] = color2.b || 0;
      }
      r6 = spline(r6);
      g2 = spline(g2);
      b3 = spline(b3);
      color2.opacity = 1;
      return function(t5) {
        color2.r = r6(t5);
        color2.g = g2(t5);
        color2.b = b3(t5);
        return color2 + "";
      };
    };
  }
  var rgbBasis = rgbSpline(basis_default);
  var rgbBasisClosed = rgbSpline(basisClosed_default);

  // node_modules/d3-interpolate/src/numberArray.js
  function numberArray_default(a3, b3) {
    if (!b3)
      b3 = [];
    var n6 = a3 ? Math.min(b3.length, a3.length) : 0, c4 = b3.slice(), i7;
    return function(t5) {
      for (i7 = 0; i7 < n6; ++i7)
        c4[i7] = a3[i7] * (1 - t5) + b3[i7] * t5;
      return c4;
    };
  }
  function isNumberArray(x2) {
    return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
  }

  // node_modules/d3-interpolate/src/array.js
  function genericArray(a3, b3) {
    var nb = b3 ? b3.length : 0, na = a3 ? Math.min(nb, a3.length) : 0, x2 = new Array(na), c4 = new Array(nb), i7;
    for (i7 = 0; i7 < na; ++i7)
      x2[i7] = value_default(a3[i7], b3[i7]);
    for (; i7 < nb; ++i7)
      c4[i7] = b3[i7];
    return function(t5) {
      for (i7 = 0; i7 < na; ++i7)
        c4[i7] = x2[i7](t5);
      return c4;
    };
  }

  // node_modules/d3-interpolate/src/date.js
  function date_default(a3, b3) {
    var d3 = /* @__PURE__ */ new Date();
    return a3 = +a3, b3 = +b3, function(t5) {
      return d3.setTime(a3 * (1 - t5) + b3 * t5), d3;
    };
  }

  // node_modules/d3-interpolate/src/number.js
  function number_default(a3, b3) {
    return a3 = +a3, b3 = +b3, function(t5) {
      return a3 * (1 - t5) + b3 * t5;
    };
  }

  // node_modules/d3-interpolate/src/object.js
  function object_default(a3, b3) {
    var i7 = {}, c4 = {}, k2;
    if (a3 === null || typeof a3 !== "object")
      a3 = {};
    if (b3 === null || typeof b3 !== "object")
      b3 = {};
    for (k2 in b3) {
      if (k2 in a3) {
        i7[k2] = value_default(a3[k2], b3[k2]);
      } else {
        c4[k2] = b3[k2];
      }
    }
    return function(t5) {
      for (k2 in i7)
        c4[k2] = i7[k2](t5);
      return c4;
    };
  }

  // node_modules/d3-interpolate/src/string.js
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var reB = new RegExp(reA.source, "g");
  function zero2(b3) {
    return function() {
      return b3;
    };
  }
  function one(b3) {
    return function(t5) {
      return b3(t5) + "";
    };
  }
  function string_default(a3, b3) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i7 = -1, s3 = [], q = [];
    a3 = a3 + "", b3 = b3 + "";
    while ((am = reA.exec(a3)) && (bm = reB.exec(b3))) {
      if ((bs = bm.index) > bi) {
        bs = b3.slice(bi, bs);
        if (s3[i7])
          s3[i7] += bs;
        else
          s3[++i7] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s3[i7])
          s3[i7] += bm;
        else
          s3[++i7] = bm;
      } else {
        s3[++i7] = null;
        q.push({ i: i7, x: number_default(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b3.length) {
      bs = b3.slice(bi);
      if (s3[i7])
        s3[i7] += bs;
      else
        s3[++i7] = bs;
    }
    return s3.length < 2 ? q[0] ? one(q[0].x) : zero2(b3) : (b3 = q.length, function(t5) {
      for (var i8 = 0, o6; i8 < b3; ++i8)
        s3[(o6 = q[i8]).i] = o6.x(t5);
      return s3.join("");
    });
  }

  // node_modules/d3-interpolate/src/value.js
  function value_default(a3, b3) {
    var t5 = typeof b3, c4;
    return b3 == null || t5 === "boolean" ? constant_default2(b3) : (t5 === "number" ? number_default : t5 === "string" ? (c4 = color(b3)) ? (b3 = c4, rgb_default) : string_default : b3 instanceof color ? rgb_default : b3 instanceof Date ? date_default : isNumberArray(b3) ? numberArray_default : Array.isArray(b3) ? genericArray : typeof b3.valueOf !== "function" && typeof b3.toString !== "function" || isNaN(b3) ? object_default : number_default)(a3, b3);
  }

  // node_modules/d3-interpolate/src/round.js
  function round_default(a3, b3) {
    return a3 = +a3, b3 = +b3, function(t5) {
      return Math.round(a3 * (1 - t5) + b3 * t5);
    };
  }

  // node_modules/d3-interpolate/src/transform/decompose.js
  var degrees = 180 / Math.PI;
  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose_default(a3, b3, c4, d3, e7, f3) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a3 * a3 + b3 * b3))
      a3 /= scaleX, b3 /= scaleX;
    if (skewX = a3 * c4 + b3 * d3)
      c4 -= a3 * skewX, d3 -= b3 * skewX;
    if (scaleY = Math.sqrt(c4 * c4 + d3 * d3))
      c4 /= scaleY, d3 /= scaleY, skewX /= scaleY;
    if (a3 * d3 < b3 * c4)
      a3 = -a3, b3 = -b3, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e7,
      translateY: f3,
      rotate: Math.atan2(b3, a3) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX,
      scaleY
    };
  }

  // node_modules/d3-interpolate/src/transform/parse.js
  var svgNode;
  function parseCss(value) {
    const m2 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m2.isIdentity ? identity : decompose_default(m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
  }
  function parseSvg(value) {
    if (value == null)
      return identity;
    if (!svgNode)
      svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate()))
      return identity;
    value = value.matrix;
    return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  // node_modules/d3-interpolate/src/transform/index.js
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s3) {
      return s3.length ? s3.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s3, q) {
      if (xa !== xb || ya !== yb) {
        var i7 = s3.push("translate(", null, pxComma, null, pxParen);
        q.push({ i: i7 - 4, x: number_default(xa, xb) }, { i: i7 - 2, x: number_default(ya, yb) });
      } else if (xb || yb) {
        s3.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a3, b3, s3, q) {
      if (a3 !== b3) {
        if (a3 - b3 > 180)
          b3 += 360;
        else if (b3 - a3 > 180)
          a3 += 360;
        q.push({ i: s3.push(pop(s3) + "rotate(", null, degParen) - 2, x: number_default(a3, b3) });
      } else if (b3) {
        s3.push(pop(s3) + "rotate(" + b3 + degParen);
      }
    }
    function skewX(a3, b3, s3, q) {
      if (a3 !== b3) {
        q.push({ i: s3.push(pop(s3) + "skewX(", null, degParen) - 2, x: number_default(a3, b3) });
      } else if (b3) {
        s3.push(pop(s3) + "skewX(" + b3 + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s3, q) {
      if (xa !== xb || ya !== yb) {
        var i7 = s3.push(pop(s3) + "scale(", null, ",", null, ")");
        q.push({ i: i7 - 4, x: number_default(xa, xb) }, { i: i7 - 2, x: number_default(ya, yb) });
      } else if (xb !== 1 || yb !== 1) {
        s3.push(pop(s3) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function(a3, b3) {
      var s3 = [], q = [];
      a3 = parse(a3), b3 = parse(b3);
      translate(a3.translateX, a3.translateY, b3.translateX, b3.translateY, s3, q);
      rotate(a3.rotate, b3.rotate, s3, q);
      skewX(a3.skewX, b3.skewX, s3, q);
      scale(a3.scaleX, a3.scaleY, b3.scaleX, b3.scaleY, s3, q);
      a3 = b3 = null;
      return function(t5) {
        var i7 = -1, n6 = q.length, o6;
        while (++i7 < n6)
          s3[(o6 = q[i7]).i] = o6.x(t5);
        return s3.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  // node_modules/d3-timer/src/timer.js
  var frame = 0;
  var timeout = 0;
  var interval = 0;
  var pokeDelay = 1e3;
  var taskHead;
  var taskTail;
  var clockLast = 0;
  var clockNow = 0;
  var clockSkew = 0;
  var clock = typeof performance === "object" && performance.now ? performance : Date;
  var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f3) {
    setTimeout(f3, 17);
  };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function")
        throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail)
          taskTail._next = this;
        else
          taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t5 = new Timer();
    t5.restart(callback, delay, time);
    return t5;
  }
  function timerFlush() {
    now();
    ++frame;
    var t5 = taskHead, e7;
    while (t5) {
      if ((e7 = clockNow - t5._time) >= 0)
        t5._call.call(void 0, e7);
      t5 = t5._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now2 = clock.now(), delay = now2 - clockLast;
    if (delay > pokeDelay)
      clockSkew -= delay, clockLast = now2;
  }
  function nap() {
    var t0, t1 = taskHead, t22, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time)
          time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t22 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t22 : taskHead = t22;
      }
    }
    taskTail = t0;
    sleep(time);
  }
  function sleep(time) {
    if (frame)
      return;
    if (timeout)
      timeout = clearTimeout(timeout);
    var delay = time - clockNow;
    if (delay > 24) {
      if (time < Infinity)
        timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval)
        interval = clearInterval(interval);
    } else {
      if (!interval)
        clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  // node_modules/d3-timer/src/timeout.js
  function timeout_default(callback, delay, time) {
    var t5 = new Timer();
    delay = delay == null ? 0 : +delay;
    t5.restart((elapsed) => {
      t5.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t5;
  }

  // node_modules/d3-transition/src/transition/schedule.js
  var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule_default(node, name, id2, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules)
      node.__transition = {};
    else if (id2 in schedules)
      return;
    create(node, id2, {
      name,
      index,
      // For context during callback.
      group,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > CREATED)
      throw new Error("too late; already scheduled");
    return schedule;
  }
  function set3(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > STARTED)
      throw new Error("too late; already running");
    return schedule;
  }
  function get2(node, id2) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id2]))
      throw new Error("transition not found");
    return schedule;
  }
  function create(node, id2, self2) {
    var schedules = node.__transition, tween;
    schedules[id2] = self2;
    self2.timer = timer(schedule, 0, self2.time);
    function schedule(elapsed) {
      self2.state = SCHEDULED;
      self2.timer.restart(start2, self2.delay, self2.time);
      if (self2.delay <= elapsed)
        start2(elapsed - self2.delay);
    }
    function start2(elapsed) {
      var i7, j2, n6, o6;
      if (self2.state !== SCHEDULED)
        return stop();
      for (i7 in schedules) {
        o6 = schedules[i7];
        if (o6.name !== self2.name)
          continue;
        if (o6.state === STARTED)
          return timeout_default(start2);
        if (o6.state === RUNNING) {
          o6.state = ENDED;
          o6.timer.stop();
          o6.on.call("interrupt", node, node.__data__, o6.index, o6.group);
          delete schedules[i7];
        } else if (+i7 < id2) {
          o6.state = ENDED;
          o6.timer.stop();
          o6.on.call("cancel", node, node.__data__, o6.index, o6.group);
          delete schedules[i7];
        }
      }
      timeout_default(function() {
        if (self2.state === STARTED) {
          self2.state = RUNNING;
          self2.timer.restart(tick, self2.delay, self2.time);
          tick(elapsed);
        }
      });
      self2.state = STARTING;
      self2.on.call("start", node, node.__data__, self2.index, self2.group);
      if (self2.state !== STARTING)
        return;
      self2.state = STARTED;
      tween = new Array(n6 = self2.tween.length);
      for (i7 = 0, j2 = -1; i7 < n6; ++i7) {
        if (o6 = self2.tween[i7].value.call(node, node.__data__, self2.index, self2.group)) {
          tween[++j2] = o6;
        }
      }
      tween.length = j2 + 1;
    }
    function tick(elapsed) {
      var t5 = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i7 = -1, n6 = tween.length;
      while (++i7 < n6) {
        tween[i7].call(node, t5);
      }
      if (self2.state === ENDING) {
        self2.on.call("end", node, node.__data__, self2.index, self2.group);
        stop();
      }
    }
    function stop() {
      self2.state = ENDED;
      self2.timer.stop();
      delete schedules[id2];
      for (var i7 in schedules)
        return;
      delete node.__transition;
    }
  }

  // node_modules/d3-transition/src/interrupt.js
  function interrupt_default(node, name) {
    var schedules = node.__transition, schedule, active, empty2 = true, i7;
    if (!schedules)
      return;
    name = name == null ? null : name + "";
    for (i7 in schedules) {
      if ((schedule = schedules[i7]).name !== name) {
        empty2 = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i7];
    }
    if (empty2)
      delete node.__transition;
  }

  // node_modules/d3-transition/src/selection/interrupt.js
  function interrupt_default2(name) {
    return this.each(function() {
      interrupt_default(this, name);
    });
  }

  // node_modules/d3-transition/src/transition/tween.js
  function tweenRemove(id2, name) {
    var tween0, tween1;
    return function() {
      var schedule = set3(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i7 = 0, n6 = tween1.length; i7 < n6; ++i7) {
          if (tween1[i7].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i7, 1);
            break;
          }
        }
      }
      schedule.tween = tween1;
    };
  }
  function tweenFunction(id2, name, value) {
    var tween0, tween1;
    if (typeof value !== "function")
      throw new Error();
    return function() {
      var schedule = set3(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t5 = { name, value }, i7 = 0, n6 = tween1.length; i7 < n6; ++i7) {
          if (tween1[i7].name === name) {
            tween1[i7] = t5;
            break;
          }
        }
        if (i7 === n6)
          tween1.push(t5);
      }
      schedule.tween = tween1;
    };
  }
  function tween_default(name, value) {
    var id2 = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get2(this.node(), id2).tween;
      for (var i7 = 0, n6 = tween.length, t5; i7 < n6; ++i7) {
        if ((t5 = tween[i7]).name === name) {
          return t5.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
  }
  function tweenValue(transition2, name, value) {
    var id2 = transition2._id;
    transition2.each(function() {
      var schedule = set3(this, id2);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
      return get2(node, id2).value[name];
    };
  }

  // node_modules/d3-transition/src/transition/interpolate.js
  function interpolate_default(a3, b3) {
    var c4;
    return (typeof b3 === "number" ? number_default : b3 instanceof color ? rgb_default : (c4 = color(b3)) ? (b3 = c4, rgb_default) : string_default)(a3, b3);
  }

  // node_modules/d3-transition/src/transition/attr.js
  function attrRemove2(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS2(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrConstantNS2(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attrFunctionNS2(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attr_default2(name, value) {
    var fullname = namespace_default(name), i7 = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i7, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i7, value));
  }

  // node_modules/d3-transition/src/transition/attrTween.js
  function attrInterpolate(name, i7) {
    return function(t5) {
      this.setAttribute(name, i7.call(this, t5));
    };
  }
  function attrInterpolateNS(fullname, i7) {
    return function(t5) {
      this.setAttributeNS(fullname.space, fullname.local, i7.call(this, t5));
    };
  }
  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i7 = value.apply(this, arguments);
      if (i7 !== i0)
        t0 = (i0 = i7) && attrInterpolateNS(fullname, i7);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i7 = value.apply(this, arguments);
      if (i7 !== i0)
        t0 = (i0 = i7) && attrInterpolate(name, i7);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween_default(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    var fullname = namespace_default(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  // node_modules/d3-transition/src/transition/delay.js
  function delayFunction(id2, value) {
    return function() {
      init(this, id2).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id2, value) {
    return value = +value, function() {
      init(this, id2).delay = value;
    };
  }
  function delay_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
  }

  // node_modules/d3-transition/src/transition/duration.js
  function durationFunction(id2, value) {
    return function() {
      set3(this, id2).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id2, value) {
    return value = +value, function() {
      set3(this, id2).duration = value;
    };
  }
  function duration_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
  }

  // node_modules/d3-transition/src/transition/ease.js
  function easeConstant(id2, value) {
    if (typeof value !== "function")
      throw new Error();
    return function() {
      set3(this, id2).ease = value;
    };
  }
  function ease_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
  }

  // node_modules/d3-transition/src/transition/easeVarying.js
  function easeVarying(id2, value) {
    return function() {
      var v2 = value.apply(this, arguments);
      if (typeof v2 !== "function")
        throw new Error();
      set3(this, id2).ease = v2;
    };
  }
  function easeVarying_default(value) {
    if (typeof value !== "function")
      throw new Error();
    return this.each(easeVarying(this._id, value));
  }

  // node_modules/d3-transition/src/transition/filter.js
  function filter_default2(match) {
    if (typeof match !== "function")
      match = matcher_default(match);
    for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
      for (var group = groups[j2], n6 = group.length, subgroup = subgroups[j2] = [], node, i7 = 0; i7 < n6; ++i7) {
        if ((node = group[i7]) && match.call(node, node.__data__, i7, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/merge.js
  function merge_default2(transition2) {
    if (transition2._id !== this._id)
      throw new Error();
    for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m2 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m2; ++j2) {
      for (var group0 = groups0[j2], group1 = groups1[j2], n6 = group0.length, merge = merges[j2] = new Array(n6), node, i7 = 0; i7 < n6; ++i7) {
        if (node = group0[i7] || group1[i7]) {
          merge[i7] = node;
        }
      }
    }
    for (; j2 < m0; ++j2) {
      merges[j2] = groups0[j2];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/on.js
  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t5) {
      var i7 = t5.indexOf(".");
      if (i7 >= 0)
        t5 = t5.slice(0, i7);
      return !t5 || t5 === "start";
    });
  }
  function onFunction(id2, name, listener) {
    var on0, on1, sit = start(name) ? init : set3;
    return function() {
      var schedule = sit(this, id2), on = schedule.on;
      if (on !== on0)
        (on1 = (on0 = on).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function on_default2(name, listener) {
    var id2 = this._id;
    return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
  }

  // node_modules/d3-transition/src/transition/remove.js
  function removeFunction(id2) {
    return function() {
      var parent = this.parentNode;
      for (var i7 in this.__transition)
        if (+i7 !== id2)
          return;
      if (parent)
        parent.removeChild(this);
    };
  }
  function remove_default2() {
    return this.on("end.remove", removeFunction(this._id));
  }

  // node_modules/d3-transition/src/transition/select.js
  function select_default2(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function")
      select = selector_default(select);
    for (var groups = this._groups, m2 = groups.length, subgroups = new Array(m2), j2 = 0; j2 < m2; ++j2) {
      for (var group = groups[j2], n6 = group.length, subgroup = subgroups[j2] = new Array(n6), node, subnode, i7 = 0; i7 < n6; ++i7) {
        if ((node = group[i7]) && (subnode = select.call(node, node.__data__, i7, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i7] = subnode;
          schedule_default(subgroup[i7], name, id2, i7, subgroup, get2(node, id2));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selectAll.js
  function selectAll_default2(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function")
      select = selectorAll_default(select);
    for (var groups = this._groups, m2 = groups.length, subgroups = [], parents = [], j2 = 0; j2 < m2; ++j2) {
      for (var group = groups[j2], n6 = group.length, node, i7 = 0; i7 < n6; ++i7) {
        if (node = group[i7]) {
          for (var children2 = select.call(node, node.__data__, i7, group), child, inherit2 = get2(node, id2), k2 = 0, l3 = children2.length; k2 < l3; ++k2) {
            if (child = children2[k2]) {
              schedule_default(child, name, id2, k2, children2, inherit2);
            }
          }
          subgroups.push(children2);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selection.js
  var Selection2 = selection_default.prototype.constructor;
  function selection_default2() {
    return new Selection2(this._groups, this._parents);
  }

  // node_modules/d3-transition/src/transition/style.js
  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }
  function styleRemove2(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function styleFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
      if (value1 == null)
        string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id2, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
    return function() {
      var schedule = set3(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
      if (on !== on0 || listener0 !== listener)
        (on1 = (on0 = on).copy()).on(event, listener0 = listener);
      schedule.on = on1;
    };
  }
  function style_default2(name, value, priority) {
    var i7 = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
    return value == null ? this.styleTween(name, styleNull(name, i7)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i7, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i7, value), priority).on("end.style." + name, null);
  }

  // node_modules/d3-transition/src/transition/styleTween.js
  function styleInterpolate(name, i7, priority) {
    return function(t5) {
      this.style.setProperty(name, i7.call(this, t5), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t5, i0;
    function tween() {
      var i7 = value.apply(this, arguments);
      if (i7 !== i0)
        t5 = (i0 = i7) && styleInterpolate(name, i7, priority);
      return t5;
    }
    tween._value = value;
    return tween;
  }
  function styleTween_default(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  // node_modules/d3-transition/src/transition/text.js
  function textConstant2(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction2(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function text_default2(value) {
    return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
  }

  // node_modules/d3-transition/src/transition/textTween.js
  function textInterpolate(i7) {
    return function(t5) {
      this.textContent = i7.call(this, t5);
    };
  }
  function textTween(value) {
    var t0, i0;
    function tween() {
      var i7 = value.apply(this, arguments);
      if (i7 !== i0)
        t0 = (i0 = i7) && textInterpolate(i7);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function textTween_default(value) {
    var key = "text";
    if (arguments.length < 1)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, textTween(value));
  }

  // node_modules/d3-transition/src/transition/transition.js
  function transition_default() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
      for (var group = groups[j2], n6 = group.length, node, i7 = 0; i7 < n6; ++i7) {
        if (node = group[i7]) {
          var inherit2 = get2(node, id0);
          schedule_default(node, name, id1, i7, group, {
            time: inherit2.time + inherit2.delay + inherit2.duration,
            delay: 0,
            duration: inherit2.duration,
            ease: inherit2.ease
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  }

  // node_modules/d3-transition/src/transition/end.js
  function end_default() {
    var on0, on1, that = this, id2 = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = { value: reject }, end = { value: function() {
        if (--size === 0)
          resolve();
      } };
      that.each(function() {
        var schedule = set3(this, id2), on = schedule.on;
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      });
      if (size === 0)
        resolve();
    });
  }

  // node_modules/d3-transition/src/transition/index.js
  var id = 0;
  function Transition(groups, parents, name, id2) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id2;
  }
  function transition(name) {
    return selection_default().transition(name);
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection_default.prototype;
  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: select_default2,
    selectAll: selectAll_default2,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: filter_default2,
    merge: merge_default2,
    selection: selection_default2,
    transition: transition_default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: on_default2,
    attr: attr_default2,
    attrTween: attrTween_default,
    style: style_default2,
    styleTween: styleTween_default,
    text: text_default2,
    textTween: textTween_default,
    remove: remove_default2,
    tween: tween_default,
    delay: delay_default,
    duration: duration_default,
    ease: ease_default,
    easeVarying: easeVarying_default,
    end: end_default,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  // node_modules/d3-ease/src/cubic.js
  function cubicInOut(t5) {
    return ((t5 *= 2) <= 1 ? t5 * t5 * t5 : (t5 -= 2) * t5 * t5 + 2) / 2;
  }

  // node_modules/d3-transition/src/selection/transition.js
  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node, id2) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id2])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id2} not found`);
      }
    }
    return timing;
  }
  function transition_default2(name) {
    var id2, timing;
    if (name instanceof Transition) {
      id2 = name._id, name = name._name;
    } else {
      id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m2 = groups.length, j2 = 0; j2 < m2; ++j2) {
      for (var group = groups[j2], n6 = group.length, node, i7 = 0; i7 < n6; ++i7) {
        if (node = group[i7]) {
          schedule_default(node, name, id2, i7, group, timing || inherit(node, id2));
        }
      }
    }
    return new Transition(groups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/selection/index.js
  selection_default.prototype.interrupt = interrupt_default2;
  selection_default.prototype.transition = transition_default2;

  // node_modules/d3-brush/src/brush.js
  var { abs, max, min } = Math;
  function number1(e7) {
    return [+e7[0], +e7[1]];
  }
  function number2(e7) {
    return [number1(e7[0]), number1(e7[1])];
  }
  var X = {
    name: "x",
    handles: ["w", "e"].map(type),
    input: function(x2, e7) {
      return x2 == null ? null : [[+x2[0], e7[0][1]], [+x2[1], e7[1][1]]];
    },
    output: function(xy) {
      return xy && [xy[0][0], xy[1][0]];
    }
  };
  var Y = {
    name: "y",
    handles: ["n", "s"].map(type),
    input: function(y3, e7) {
      return y3 == null ? null : [[e7[0][0], +y3[0]], [e7[1][0], +y3[1]]];
    },
    output: function(xy) {
      return xy && [xy[0][1], xy[1][1]];
    }
  };
  var XY = {
    name: "xy",
    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
    input: function(xy) {
      return xy == null ? null : number2(xy);
    },
    output: function(xy) {
      return xy;
    }
  };
  function type(t5) {
    return { type: t5 };
  }

  // node_modules/d3-format/src/formatDecimal.js
  function formatDecimal_default(x2) {
    return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
  }
  function formatDecimalParts(x2, p3) {
    if ((i7 = (x2 = p3 ? x2.toExponential(p3 - 1) : x2.toExponential()).indexOf("e")) < 0)
      return null;
    var i7, coefficient = x2.slice(0, i7);
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x2.slice(i7 + 1)
    ];
  }

  // node_modules/d3-format/src/exponent.js
  function exponent_default(x2) {
    return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
  }

  // node_modules/d3-format/src/formatGroup.js
  function formatGroup_default(grouping, thousands) {
    return function(value, width) {
      var i7 = value.length, t5 = [], j2 = 0, g2 = grouping[0], length = 0;
      while (i7 > 0 && g2 > 0) {
        if (length + g2 + 1 > width)
          g2 = Math.max(1, width - length);
        t5.push(value.substring(i7 -= g2, i7 + g2));
        if ((length += g2 + 1) > width)
          break;
        g2 = grouping[j2 = (j2 + 1) % grouping.length];
      }
      return t5.reverse().join(thousands);
    };
  }

  // node_modules/d3-format/src/formatNumerals.js
  function formatNumerals_default(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i7) {
        return numerals[+i7];
      });
    };
  }

  // node_modules/d3-format/src/formatSpecifier.js
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier)))
      throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }
  formatSpecifier.prototype = FormatSpecifier.prototype;
  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
    this.align = specifier.align === void 0 ? ">" : specifier.align + "";
    this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === void 0 ? void 0 : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === void 0 ? "" : specifier.type + "";
  }
  FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };

  // node_modules/d3-format/src/formatTrim.js
  function formatTrim_default(s3) {
    out:
      for (var n6 = s3.length, i7 = 1, i0 = -1, i1; i7 < n6; ++i7) {
        switch (s3[i7]) {
          case ".":
            i0 = i1 = i7;
            break;
          case "0":
            if (i0 === 0)
              i0 = i7;
            i1 = i7;
            break;
          default:
            if (!+s3[i7])
              break out;
            if (i0 > 0)
              i0 = 0;
            break;
        }
      }
    return i0 > 0 ? s3.slice(0, i0) + s3.slice(i1 + 1) : s3;
  }

  // node_modules/d3-format/src/formatPrefixAuto.js
  var prefixExponent;
  function formatPrefixAuto_default(x2, p3) {
    var d3 = formatDecimalParts(x2, p3);
    if (!d3)
      return x2 + "";
    var coefficient = d3[0], exponent = d3[1], i7 = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n6 = coefficient.length;
    return i7 === n6 ? coefficient : i7 > n6 ? coefficient + new Array(i7 - n6 + 1).join("0") : i7 > 0 ? coefficient.slice(0, i7) + "." + coefficient.slice(i7) : "0." + new Array(1 - i7).join("0") + formatDecimalParts(x2, Math.max(0, p3 + i7 - 1))[0];
  }

  // node_modules/d3-format/src/formatRounded.js
  function formatRounded_default(x2, p3) {
    var d3 = formatDecimalParts(x2, p3);
    if (!d3)
      return x2 + "";
    var coefficient = d3[0], exponent = d3[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  // node_modules/d3-format/src/formatTypes.js
  var formatTypes_default = {
    "%": (x2, p3) => (x2 * 100).toFixed(p3),
    "b": (x2) => Math.round(x2).toString(2),
    "c": (x2) => x2 + "",
    "d": formatDecimal_default,
    "e": (x2, p3) => x2.toExponential(p3),
    "f": (x2, p3) => x2.toFixed(p3),
    "g": (x2, p3) => x2.toPrecision(p3),
    "o": (x2) => Math.round(x2).toString(8),
    "p": (x2, p3) => formatRounded_default(x2 * 100, p3),
    "r": formatRounded_default,
    "s": formatPrefixAuto_default,
    "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
    "x": (x2) => Math.round(x2).toString(16)
  };

  // node_modules/d3-format/src/identity.js
  function identity_default(x2) {
    return x2;
  }

  // node_modules/d3-format/src/locale.js
  var map = Array.prototype.map;
  var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function locale_default(locale2) {
    var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity_default : formatGroup_default(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity_default : formatNumerals_default(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "\u2212" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);
      var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
      if (type2 === "n")
        comma = true, type2 = "g";
      else if (!formatTypes_default[type2])
        precision === void 0 && (precision = 12), trim = true, type2 = "g";
      if (zero3 || fill === "0" && align === "=")
        zero3 = true, fill = "0", align = "=";
      var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
      var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
      precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
      function format2(value) {
        var valuePrefix = prefix, valueSuffix = suffix, i7, n6, c4;
        if (type2 === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;
          var valueNegative = value < 0 || 1 / value < 0;
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
          if (trim)
            value = formatTrim_default(value);
          if (valueNegative && +value === 0 && sign !== "+")
            valueNegative = false;
          valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
          if (maybeSuffix) {
            i7 = -1, n6 = value.length;
            while (++i7 < n6) {
              if (c4 = value.charCodeAt(i7), 48 > c4 || c4 > 57) {
                valueSuffix = (c4 === 46 ? decimal + value.slice(i7 + 1) : value.slice(i7)) + valueSuffix;
                value = value.slice(0, i7);
                break;
              }
            }
          }
        }
        if (comma && !zero3)
          value = group(value, Infinity);
        var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
        if (comma && zero3)
          value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
        switch (align) {
          case "<":
            value = valuePrefix + value + valueSuffix + padding;
            break;
          case "=":
            value = valuePrefix + padding + value + valueSuffix;
            break;
          case "^":
            value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
            break;
          default:
            value = padding + valuePrefix + value + valueSuffix;
            break;
        }
        return numerals(value);
      }
      format2.toString = function() {
        return specifier + "";
      };
      return format2;
    }
    function formatPrefix2(specifier, value) {
      var f3 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e7 = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k2 = Math.pow(10, -e7), prefix = prefixes[8 + e7 / 3];
      return function(value2) {
        return f3(k2 * value2) + prefix;
      };
    }
    return {
      format: newFormat,
      formatPrefix: formatPrefix2
    };
  }

  // node_modules/d3-format/src/defaultLocale.js
  var locale;
  var format;
  var formatPrefix;
  defaultLocale({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });
  function defaultLocale(definition) {
    locale = locale_default(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  // node_modules/d3-format/src/precisionFixed.js
  function precisionFixed_default(step) {
    return Math.max(0, -exponent_default(Math.abs(step)));
  }

  // node_modules/d3-format/src/precisionPrefix.js
  function precisionPrefix_default(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
  }

  // node_modules/d3-format/src/precisionRound.js
  function precisionRound_default(step, max2) {
    step = Math.abs(step), max2 = Math.abs(max2) - step;
    return Math.max(0, exponent_default(max2) - exponent_default(step)) + 1;
  }

  // node_modules/d3-scale/src/init.js
  function initRange(domain, range) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(domain);
        break;
      default:
        this.range(range).domain(domain);
        break;
    }
    return this;
  }
  function initInterpolator(domain, interpolator) {
    switch (arguments.length) {
      case 0:
        break;
      case 1: {
        if (typeof domain === "function")
          this.interpolator(domain);
        else
          this.range(domain);
        break;
      }
      default: {
        this.domain(domain);
        if (typeof interpolator === "function")
          this.interpolator(interpolator);
        else
          this.range(interpolator);
        break;
      }
    }
    return this;
  }

  // node_modules/d3-scale/src/constant.js
  function constants(x2) {
    return function() {
      return x2;
    };
  }

  // node_modules/d3-scale/src/number.js
  function number3(x2) {
    return +x2;
  }

  // node_modules/d3-scale/src/continuous.js
  var unit = [0, 1];
  function identity2(x2) {
    return x2;
  }
  function normalize(a3, b3) {
    return (b3 -= a3 = +a3) ? function(x2) {
      return (x2 - a3) / b3;
    } : constants(isNaN(b3) ? NaN : 0.5);
  }
  function clamper(a3, b3) {
    var t5;
    if (a3 > b3)
      t5 = a3, a3 = b3, b3 = t5;
    return function(x2) {
      return Math.max(a3, Math.min(b3, x2));
    };
  }
  function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0)
      d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else
      d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x2) {
      return r0(d0(x2));
    };
  }
  function polymap(domain, range, interpolate) {
    var j2 = Math.min(domain.length, range.length) - 1, d3 = new Array(j2), r6 = new Array(j2), i7 = -1;
    if (domain[j2] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++i7 < j2) {
      d3[i7] = normalize(domain[i7], domain[i7 + 1]);
      r6[i7] = interpolate(range[i7], range[i7 + 1]);
    }
    return function(x2) {
      var i8 = bisect_default(domain, x2, 1, j2) - 1;
      return r6[i8](d3[i8](x2));
    };
  }
  function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
  }
  function transformer() {
    var domain = unit, range = unit, interpolate = value_default, transform2, untransform, unknown, clamp = identity2, piecewise, output, input;
    function rescale() {
      var n6 = Math.min(domain.length, range.length);
      if (clamp !== identity2)
        clamp = clamper(domain[0], domain[n6 - 1]);
      piecewise = n6 > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }
    function scale(x2) {
      return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise(domain.map(transform2), range, interpolate)))(transform2(clamp(x2)));
    }
    scale.invert = function(y3) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform2), number_default)))(y3)));
    };
    scale.domain = function(_2) {
      return arguments.length ? (domain = Array.from(_2, number3), rescale()) : domain.slice();
    };
    scale.range = function(_2) {
      return arguments.length ? (range = Array.from(_2), rescale()) : range.slice();
    };
    scale.rangeRound = function(_2) {
      return range = Array.from(_2), interpolate = round_default, rescale();
    };
    scale.clamp = function(_2) {
      return arguments.length ? (clamp = _2 ? true : identity2, rescale()) : clamp !== identity2;
    };
    scale.interpolate = function(_2) {
      return arguments.length ? (interpolate = _2, rescale()) : interpolate;
    };
    scale.unknown = function(_2) {
      return arguments.length ? (unknown = _2, scale) : unknown;
    };
    return function(t5, u3) {
      transform2 = t5, untransform = u3;
      return rescale();
    };
  }
  function continuous() {
    return transformer()(identity2, identity2);
  }

  // node_modules/d3-scale/src/tickFormat.js
  function tickFormat(start2, stop, count, specifier) {
    var step = tickStep(start2, stop, count), precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start2), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
          specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop)))))
          specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
          specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }

  // node_modules/d3-scale/src/linear.js
  function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
      var d3 = domain();
      return ticks(d3[0], d3[d3.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
      var d3 = domain();
      return tickFormat(d3[0], d3[d3.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
      if (count == null)
        count = 10;
      var d3 = domain();
      var i0 = 0;
      var i1 = d3.length - 1;
      var start2 = d3[i0];
      var stop = d3[i1];
      var prestep;
      var step;
      var maxIter = 10;
      if (stop < start2) {
        step = start2, start2 = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }
      while (maxIter-- > 0) {
        step = tickIncrement(start2, stop, count);
        if (step === prestep) {
          d3[i0] = start2;
          d3[i1] = stop;
          return domain(d3);
        } else if (step > 0) {
          start2 = Math.floor(start2 / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start2 = Math.ceil(start2 * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }
      return scale;
    };
    return scale;
  }
  function linear2() {
    var scale = continuous();
    scale.copy = function() {
      return copy(scale, linear2());
    };
    initRange.apply(scale, arguments);
    return linearish(scale);
  }

  // node_modules/d3-scale/src/sequential.js
  function transformer2() {
    var x0 = 0, x1 = 1, t0, t1, k10, transform2, interpolator = identity2, clamp = false, unknown;
    function scale(x2) {
      return x2 == null || isNaN(x2 = +x2) ? unknown : interpolator(k10 === 0 ? 0.5 : (x2 = (transform2(x2) - t0) * k10, clamp ? Math.max(0, Math.min(1, x2)) : x2));
    }
    scale.domain = function(_2) {
      return arguments.length ? ([x0, x1] = _2, t0 = transform2(x0 = +x0), t1 = transform2(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
    };
    scale.clamp = function(_2) {
      return arguments.length ? (clamp = !!_2, scale) : clamp;
    };
    scale.interpolator = function(_2) {
      return arguments.length ? (interpolator = _2, scale) : interpolator;
    };
    function range(interpolate) {
      return function(_2) {
        var r0, r1;
        return arguments.length ? ([r0, r1] = _2, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
      };
    }
    scale.range = range(value_default);
    scale.rangeRound = range(round_default);
    scale.unknown = function(_2) {
      return arguments.length ? (unknown = _2, scale) : unknown;
    };
    return function(t5) {
      transform2 = t5, t0 = t5(x0), t1 = t5(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
      return scale;
    };
  }
  function copy2(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
  }
  function sequential() {
    var scale = linearish(transformer2()(identity2));
    scale.copy = function() {
      return copy2(scale, sequential());
    };
    return initInterpolator.apply(scale, arguments);
  }

  // node_modules/d3-scale-chromatic/src/colors.js
  function colors_default(specifier) {
    var n6 = specifier.length / 6 | 0, colors = new Array(n6), i7 = 0;
    while (i7 < n6)
      colors[i7] = "#" + specifier.slice(i7 * 6, ++i7 * 6);
    return colors;
  }

  // node_modules/d3-scale-chromatic/src/ramp.js
  var ramp_default = (scheme2) => rgbBasis(scheme2[scheme2.length - 1]);

  // node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
  var scheme = new Array(3).concat(
    "e5f5e0a1d99b31a354",
    "edf8e9bae4b374c476238b45",
    "edf8e9bae4b374c47631a354006d2c",
    "edf8e9c7e9c0a1d99b74c47631a354006d2c",
    "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
    "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
    "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
  ).map(colors_default);
  var Greens_default = ramp_default(scheme);

  // node_modules/d3-zoom/src/transform.js
  function Transform(k2, x2, y3) {
    this.k = k2;
    this.x = x2;
    this.y = y3;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function(k2) {
      return k2 === 1 ? this : new Transform(this.k * k2, this.x, this.y);
    },
    translate: function(x2, y3) {
      return x2 === 0 & y3 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y3);
    },
    apply: function(point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function(x2) {
      return x2 * this.k + this.x;
    },
    applyY: function(y3) {
      return y3 * this.k + this.y;
    },
    invert: function(location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function(x2) {
      return (x2 - this.x) / this.k;
    },
    invertY: function(y3) {
      return (y3 - this.y) / this.k;
    },
    rescaleX: function(x2) {
      return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
    },
    rescaleY: function(y3) {
      return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var identity3 = new Transform(1, 0, 0);
  transform.prototype = Transform.prototype;
  function transform(node) {
    while (!node.__zoom)
      if (!(node = node.parentNode))
        return identity3;
    return node.__zoom;
  }

  // demo/utils.ts
  function mean(values) {
    return values.reduce((a3, b3) => a3 + b3) / values.length;
  }
  function cumSumArray(array2) {
    const newArray = [];
    array2.reduce((a3, b3, i7) => newArray[i7] = a3 + b3, 0);
    return newArray;
  }
  var aisColor = sequential(Greens_default);
  var mrrColor = linear2().range(["#ffffff", "#61aff7"]);
  function makeEndpointURL(endpoint, params) {
    const paramsArray = Object.keys(params ?? {}).map(
      (key) => `${key}=${params[key]}`
    );
    const url = encodeURI(`.${endpoint}?${paramsArray.join("&")}`);
    return url;
  }
  var URLService = class {
    constructor() {
      this.initialParams = {};
      const urlSearchParams = new URLSearchParams(window.location.search);
      for (const [key, value] of urlSearchParams) {
        this.initialParams[key] = decodeURIComponent(value);
      }
      console.log("URLService: URL params", toJS(this.initialParams));
    }
    syncParam(name, decodeAndSet, furnishParamFn, encodeToString) {
      if (this.initialParams.hasOwnProperty(name)) {
        decodeAndSet(this.initialParams[name]);
      }
      reaction2(
        furnishParamFn,
        (param) => {
          const paramAsString = encodeToString(param);
          const url = new URL(window.location.href);
          url.searchParams.set(name, paramAsString);
          window.history.pushState({}, "", url.toString());
        },
        { fireImmediately: true }
      );
    }
  };
  __decorateClass([
    observable
  ], URLService.prototype, "initialParams", 2);
  function maybeTagSegment(matchers, segment, regexMode) {
    for (const [matcher, classes] of matchers) {
      if (segment.match(matcher) != null) {
        return x`<span class=${classes}>${segment}</span>`;
      }
    }
    return segment;
  }
  function tagMatchingSpans(text, matchers, regexMode) {
    const regexMatchers = matchers.filter(([m2, c4]) => m2 != null).map(([m2, c4]) => [RegExp(m2, regexMode), c4]);
    if (regexMatchers.length === 0)
      return x`${text}`;
    const taggedSegments = [];
    const bigRegex = RegExp(
      "(" + regexMatchers.map(([m2, c4]) => m2.source).join("|") + ")",
      regexMode
    );
    for (const segment of text.split(bigRegex)) {
      taggedSegments.push(maybeTagSegment(regexMatchers, segment, regexMode));
    }
    return x`${taggedSegments}`;
  }
  function stopPropagation(e7) {
    e7.stopPropagation();
  }

  // demo/data_index.ts
  var TDADataIndex = class extends MobxLitElement {
    constructor() {
      super(...arguments);
      this.maxPerPage = 100;
      this.selectedId = "";
      this.index = [];
      this.pageStart = 0;
      this.sorted = true;
    }
    static get styles() {
      return [styles4, styles2, styles3];
    }
    // Can't use @computed because it will not update properly when
    // this.index is updated. So, just a regular non-cached getter.
    get pageEnd() {
      return Math.min(this.pageStart + this.maxPerPage, this.index.length);
    }
    renderEntry(info) {
      const onClickEntry = () => {
        const event = new CustomEvent("example-clicked", {
          detail: { id: info.id }
        });
        this.dispatchEvent(event);
      };
      let isCorrectChip = null;
      if (info?.metrics?.["mrr_first"] != null) {
        const mrrFirst = info?.metrics?.["mrr_first"];
        const correctnessStyle = o5({
          "background": mrrColor(mrrFirst)
        });
        isCorrectChip = x`
        <div class='score-chip' style=${correctnessStyle} title="Best AIS score">
          r ${mrrFirst.toFixed(2)}
        </div>
      `;
      }
      let aisScoreChip = null;
      const aisScore = info.bestAISScore;
      if (aisScore) {
        const aisStyle = o5({ "background": aisColor(aisScore * 0.7) });
        aisScoreChip = x`
        <div class='score-chip' style=${aisStyle} title="Best AIS score">
          a ${aisScore.toFixed(2)}
        </div>
      `;
      }
      const classes = e6({
        "index-entry": true,
        "selected": this.selectedId === info.id
      });
      return x`
      <div class=${classes} @click=${onClickEntry}>
        <div class='header'>
          ${aisScoreChip}
          ${isCorrectChip}
          <div class='display-name'>${info.displayName}</div>
          <div class='flex-spacer'></div>
          ${info.task ? x`<div class='task'>task:${info.task}</div>` : null}
          ${info.hasTrexSentence === false ? x`<md-icon class='icon-button no-answer-indicator'
                    title='No supporting sentences in TREX.'>
              warning
              </md-icon>` : null}
        </div>
        <div class='description'>${info.description}</div>
      </div>
    `;
    }
    renderPageControls() {
      const toggleSorted = () => {
        this.sorted = !this.sorted;
      };
      const sortButtonClasses = e6({
        "icon-button": true,
        "icon-button-active": this.sorted
      });
      const pageZero = () => {
        this.pageStart = 0;
      };
      const pageEnd = () => {
        this.pageStart = this.maxPerPage * Math.floor((this.index.length - 1) / this.maxPerPage);
      };
      const pageBack = () => {
        this.pageStart = Math.max(0, this.pageStart - this.maxPerPage);
      };
      const pageForward = () => {
        if (this.pageStart + this.maxPerPage <= this.index.length) {
          this.pageStart += this.maxPerPage;
        }
      };
      const pageRandom = () => {
        const randIndex = Math.floor(
          Math.random() * Math.max(this.index.length - this.maxPerPage, 0)
        );
        this.pageStart = this.maxPerPage * Math.floor(randIndex / this.maxPerPage);
      };
      return x`
      <md-icon class=${sortButtonClasses} @click=${toggleSorted}
        title=${this.sorted ? "Original order" : "Sort by ID"}>
        sort
      </md-icon>
      <md-icon class='icon-button' @click=${pageZero}
        ?disabled=${this.pageStart === 0}>
        first_page
      </md-icon>
      <md-icon class='icon-button' @click=${pageBack}
        ?disabled=${this.pageStart === 0}>
        navigate_before
      </md-icon>
      <md-icon class='icon-button' @click=${pageForward}
        ?disabled=${this.pageEnd >= this.index.length}>
        navigate_next
      </md-icon>
      <md-icon class='icon-button' @click=${pageEnd}
        ?disabled=${this.pageEnd >= this.index.length}>
        last_page
      </md-icon>
      <md-icon class='icon-button outlined' @click=${pageRandom}>
        casino
      </md-icon>
    `;
    }
    renderMetrics() {
      const allMetrics = {};
      for (const entry of this.index) {
        if (entry.metrics != null) {
          for (const key of Object.keys(entry.metrics ?? {})) {
            if (!allMetrics.hasOwnProperty(key)) {
              allMetrics[key] = [];
            }
            allMetrics[key].push(entry.metrics[key]);
          }
        }
      }
      return x`
      <div class='metrics-holder'>
         ${Object.keys(allMetrics).map((key) => {
        return x`<div class='metric-entry'>
                <label>${key}</label>
                <div>${mean(allMetrics[key]).toFixed(3)}</div>
              </div>`;
      })}
      </div>
    `;
    }
    render() {
      const entryComparator = (a3, b3) => {
        const an = a3.displayName;
        const bn = b3.displayName;
        if (an > bn)
          return 1;
        else if (an === bn)
          return 0;
        else
          return -1;
      };
      const index = this.sorted ? this.index.slice().sort(entryComparator) : this.index;
      return x`
      <div class='index-container'>
        ${this.renderMetrics()}
        <div class='index-header'>
          <div class='index-header-text'>
            ${this.pageStart}-${this.pageEnd} of ${this.index.length} examples
          </div>
          <div class='index-header-buttons'>
            ${this.renderPageControls()}
          </div>
        </div>
        <div class='index-contents'>
          ${index.slice(this.pageStart, this.pageEnd).map((ex) => this.renderEntry(ex))}
        </div>
      </div>
    `;
    }
  };
  __decorateClass([
    n3({ type: Number })
  ], TDADataIndex.prototype, "maxPerPage", 2);
  __decorateClass([
    n3({ type: String })
  ], TDADataIndex.prototype, "selectedId", 2);
  __decorateClass([
    n3({ type: Array })
  ], TDADataIndex.prototype, "index", 2);
  __decorateClass([
    observable
  ], TDADataIndex.prototype, "pageStart", 2);
  __decorateClass([
    n3({ type: Boolean })
  ], TDADataIndex.prototype, "sorted", 2);
  TDADataIndex = __decorateClass([
    t("tda-data-index")
  ], TDADataIndex);

  // demo/elements/tooltip.css
  var styles5 = i`:host {
  --tooltip-max-width: 232px;
  --tooltip-width: auto;
  /**
   * Set this to inline if the wrapped content should also be rendered as
   * inline, such as when applying a tooltip to a sentence span as part of
   * a larger paragraph.
   *
   * TODO(lit-dev): see if we can use inline for this always? May cause issues
   * with tooltip positioning.
   */
  --anchor-display-mode: inline-block;
  --tooltip-position-left: auto;
  --tooltip-position-right: auto;
  --tooltip-position-top: auto;
  --tooltip-position-bottom: auto;
}

/* Tooltip */
.lit-tooltip {
  display: var(--anchor-display-mode);
}

/* Tooltip text */
.lit-tooltip .tooltip-text {
  max-width: var(--tooltip-max-width);
  width: var(--tooltip-width);

  background-color: #202124;
  opacity: 0.9;
  border-radius: 4px;
  color: #fff;
  padding: 0px 8px;

  position: absolute;
  z-index: 9999;
  white-space: normal;
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
  left: var(--tooltip-position-left);
  right: var(--tooltip-position-right);
  top: var(--tooltip-position-top);
  bottom: var(--tooltip-position-bottom);

  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tooltip-text.above {
  bottom: 28px;
}

.tooltip-text.left {
  right: 12px;
}

.lit-tooltip .tooltip-text a {
  color: #7bcccc;
}

/* Show the tooltip text when you mouse over the tooltip container */
.lit-tooltip:hover .tooltip-text:not(.disabled) {
  visibility: visible;
}

.lit-tooltip .tooltip-text:not(.force-show) {
  visibility: hidden;
}

/* Show the tooltip when forceShow is set. */
.lit-tooltip .tooltip-text.force-show {
  visibility: visible;
}
`;

  // demo/elements/tooltip.ts
  var LitTooltip = class extends r5 {
    constructor() {
      super(...arguments);
      this.content = "";
      this.tooltipPosition = "";
      this.shouldRenderAriaLabel = true;
      this.disabled = false;
      this.forceShow = false;
    }
    static get styles() {
      return [styles4, styles5];
    }
    renderAriaLabel() {
      return this.shouldRenderAriaLabel ? x`aria-label=${this.content}` : "";
    }
    /**
     * Renders the reference tooltip.
     */
    render() {
      const tooltipClass = e6({
        "tooltip-text": true,
        "above": this.tooltipPosition.indexOf("above") !== -1,
        "left": this.tooltipPosition.indexOf("left") !== -1,
        "force-show": this.forceShow,
        "disabled": this.disabled
      });
      return x`<div class='lit-tooltip'>
        <slot name="tooltip-anchor">
          ${!this.content ? "" : x`
            <span class="help-icon material-icon-outlined icon-button">
              help_outline
            </span>`}
        </slot>
        ${!this.content ? "" : x`
          <span class=${tooltipClass} ${this.renderAriaLabel()}>
              ${this.content}
          </span>`}
      </div>
    `;
    }
  };
  __decorateClass([
    n3({ type: String })
  ], LitTooltip.prototype, "content", 2);
  __decorateClass([
    n3({ type: String })
  ], LitTooltip.prototype, "tooltipPosition", 2);
  __decorateClass([
    n3({ type: Boolean })
  ], LitTooltip.prototype, "shouldRenderAriaLabel", 2);
  __decorateClass([
    n3({ type: Boolean })
  ], LitTooltip.prototype, "disabled", 2);
  __decorateClass([
    n3({ type: Boolean })
  ], LitTooltip.prototype, "forceShow", 2);
  LitTooltip = __decorateClass([
    t("lit-tooltip")
  ], LitTooltip);

  // demo/example_view.css
  var styles6 = i`.outer-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.query-example-container {
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;

  max-height: 50%;
  overflow-y: scroll;
}

.target-highlight {
  background: var(--lit-cyea-100);
  border-bottom: 1px solid var(--lit-cyea-400);
}

.prompt-highlight {
  background: var(--lit-mage-200);
  border-bottom: 1px solid var(--lit-mage-400);
}

.example-header {
  font-size: larger;
  margin: 15px 0;
  width: fit-content;

  .prompt-text::selection {
    /* var(--lit-mage-200) does not work for some reason, so hard-code it */
    background-color: #FED5E0;
  }

  .target-text {
    color: var(--lit-cyea-700);
    border: 2px solid var(--lit-cyea-400);
    border-radius: 4px;
    padding: 0 2px;

    cursor: pointer;
    user-select: none; /* don't mess with the prompt selection */
  }
}

.data-grid {
  display: grid;
  gap: 4px;

  /* pad children instead of using a larger gap */
  /* this is so we can do nice background highlight on subgrid areas */
  > * {
    padding: 3px;
  }

  label {
    font-weight: 700;
    color: var(--lit-neutral-800);
  }

  .value-missing {
    color: var(--lit-neutral-500);
    font-style: italic;
  }
}

.example-grid {
  padding: 10px 0;

  display: grid;
  grid-template-rows: repeat(6, min-content) 1fr;
  grid-template-columns: max-content minmax(400px, 1fr) minmax(100px, 2fr);

  &.example-grid-simplified {
    grid-template-rows: repeat(2, min-content) 1fr;
    grid-template-columns: max-content minmax(400px, 1fr);
  }

  .example-attribute {
    grid-row: auto;
    grid-column: span 2;

    display: grid;
    grid-template: auto / subgrid;
    gap: 10px;

    label {
      grid-row: 1;
      grid-column: 1;
    }

    .value {
      grid-row: 1;
      grid-column: 2;

      white-space: pre-wrap;
    }
  }

  .example-samples {
    grid-row: 1 / -1;
    grid-column: 3;
    margin-left: 10px; /* extra gap */

    display: grid;
    grid-template: subgrid / auto;
    gap: 10px;

    label {
      cursor: pointer;
      grid-row: 1;
      grid-column: 1;
    }

    .value {
      grid-row: 2 / -1;
      grid-column: 1;
    }
  }
}

.proponents-sxs-container {
  overflow-y: scroll;
  flex: 1;

  display: flex;
  flex-direction: row;
  gap: 5px;

  .vbar {
    background: #ccc;
    width: 2px;
  }

  .proponents {
    flex: 1;

    display: flex;
    flex-direction: column;

    padding-right: 5px;

    &.sxs {
      padding-right: 0px;
      padding-left: 5px;
      /* background: #f8f8f8; */
    }
  }
}

.proponents-header {
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;

  margin-top: 10px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  > :first-child {
    font-weight: 700;
    font-size: larger;
    margin-right: 12px;
  }

  .scroll-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    margin-right: 10px;
  }
}

.selector-rows {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .chips-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    label:first-child {
      width: 80px;
      font-size: smaller;
    }
  }

  .chips-holder {
    display: contents;
  }

  /* If there is only one row of chips, we can use a more relaxed spacing */
  &:has(:only-child) {
    .chips-row {
      gap: 8px;

      label:first-child {
        width: 100px;
        font-size: small;
      }
    }

    .proponent-chip {
      line-height: 20px;
      font-size: small;
    }
  }
}

/* TODO use LIT button style? */
.proponent-chip {
  min-width: 32px;
  line-height: 16px;
  font-size: smaller;
  text-align: center;
  cursor: pointer;

  background: var(--chip-color);
  border: 1px solid var(--lit-neutral-700);
  border-radius: 4px;
}

.proponent-correct {
  background: var(--viz-color-blue-2);
}

.proponent-list {
  overflow-y: scroll;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px; /* avoid clipping of borders */
}

.proponent-grid {
  padding: 8px;
  border: 1px solid var(--lit-neutral-400);
  border-radius: 8px;

  grid-template-rows: repeat(3, min-content) 1fr;
  grid-template-columns: max-content 80px minmax(300px, 8fr);

  .proponent-attribute {
    grid-row: auto;
    grid-column: span 2;
    align-self: start;

    border-radius: 4px;

    display: grid;
    grid-template: auto / subgrid;
    gap: 10px;

    label {
      grid-row: 1;
      grid-column: 1;
    }

    .value {
      grid-row: 1;
      grid-column: 2;

      &.numeric {
        text-align: right;
      }
    }
  }

  .proponent-text {
    grid-row: 1 / -2;
    grid-column: 3;
    margin-left: 10px; /* extra gap */

    display: grid;
    grid-template: subgrid / auto;
    gap: 10px;

    label {
      grid-row: 1;
      grid-column: 1;
    }

    .value {
      grid-row: 2 / -1;
      grid-column: 1;

      max-height: 500px;
      overflow-y: auto;
      white-space: pre-wrap;

      padding-bottom: 2px; /* avoid clip or scroll from span highlights */
    }
  }
}
`;

  // demo/example_view.ts
  var TDAExampleView = class extends MobxLitElement {
    constructor() {
      super();
      this.expandSamples = false;
      reaction2(
        () => this.example,
        () => {
          this.highlightPrompt = void 0;
          this.highlightTarget = void 0;
        }
      );
      this.handleDocumentSelection = () => {
        const selectedText = document.getSelection()?.toString() ?? "";
        if (selectedText === "") {
          this.highlightPrompt = void 0;
        }
      };
      this.handleDocumentClick = () => {
        this.highlightTarget = void 0;
      };
    }
    static get styles() {
      return [styles4, styles2, styles6];
    }
    // See https://lit.dev/docs/v1/components/events/#add-event-listeners-in-connectedcallback
    connectedCallback() {
      super.connectedCallback();
      document.addEventListener("selectionchange", this.handleDocumentSelection);
      document.addEventListener("click", this.handleDocumentClick);
    }
    disconnectedCallback() {
      document.removeEventListener("click", this.handleDocumentClick);
      document.removeEventListener(
        "selectionchange",
        this.handleDocumentSelection
      );
      super.disconnectedCallback();
    }
    renderDecoderSamples() {
      const label = this.example?.["8b_generations"] ? "8B Model Samples" : "Decoder Samples";
      const samples = this.example?.["8b_generations"] ?? this.example?.["temperature_samples"] ?? [];
      if (samples.length === 0) {
        return x`
        <div class='example-samples'>
          <label>${label}</label>
          <div class='value value-missing'>undefined</div>
        </div>
      `;
      }
      const toggleExpandSamples = () => {
        this.expandSamples = !this.expandSamples;
      };
      return x`
      <div class='example-samples'>
        <label @click=${toggleExpandSamples}>${label}
          <span class='material-icon-outlined'>
            ${this.expandSamples ? "unfold_less" : "unfold_more"}
          </span>
        </label>
        <div class='value'>
          ${this.expandSamples ? samples.map((s3) => x`${s3}<br>`) : samples.join(", ")}
        </div>
      </div>
    `;
    }
    renderQueryExample() {
      if (this.example == null)
        return null;
      const targetText = this.example["targets_plaintext"] ?? "";
      const onSelectPrompt = () => {
        const selectedText = document.getSelection()?.toString() ?? "";
        if (selectedText === "") {
          this.highlightPrompt = void 0;
        } else {
          this.highlightPrompt = selectedText;
        }
      };
      const onClickHighlightTarget = () => {
        if (this.highlightTarget === targetText) {
          this.highlightTarget = void 0;
        } else {
          this.highlightTarget = targetText;
        }
      };
      const renderAttribute = (label, text) => {
        const valueClass = e6({
          "value": true,
          "value-missing": text == null
        });
        return x`
        <div class='example-attribute'>
          <label>${label}</label>
          <div class=${valueClass}>${String(text)}</div>
        </div>
      `;
      };
      const confidenceLabel = this.example["8b_confidence"] !== void 0 ? "8B model confidence" : "confidence";
      const confidenceScore = this.example["8b_confidence"] ?? this.example["model_confidence"];
      const confidenceText = confidenceScore != null ? Number(confidenceScore).toFixed(2) : "N/A";
      const predictionText = `${targetText} (${confidenceLabel} = ${confidenceText})`;
      const frequencyCount = this.example["c4_frequency"] ?? this.example["fact_frequency"];
      const frequencyBucket = this.example["c4_frequency_bucket"] ?? this.example["frequency_bucket"];
      const frequencyText = frequencyCount ?? frequencyBucket ? `${frequencyCount} (bucket ${frequencyBucket})` : void 0;
      const groundTruth = this.example["groundtruth"] ?? this.example["ground_truth"];
      const targetTextClass = e6({
        "target-text": true,
        "target-highlight": this.highlightTarget === targetText
      });
      const isTrexTask = this.example["example_id"]?.startsWith("trex") || this.example["trex_id"] != null;
      if (!isTrexTask) {
        return x`
        <div class='query-example-container'>
          <div class='example-header' @click=${stopPropagation}>
            <strong>Query:</strong>
            <span class='prompt-text' @mousedown=${onSelectPrompt}
              @mouseup=${onSelectPrompt}>
              ${this.example["inputs_plaintext"]}
            </span>
            <span class=${targetTextClass} @click=${onClickHighlightTarget}>
              ${targetText}
            </span>
          </div>
          <div class='data-grid example-grid example-grid-simplified'>
            ${this.example["example_id"] ? renderAttribute("Example ID", this.example["example_id"]) : renderAttribute("TREX ID", this.example["trex_id"])}
            ${renderAttribute("Prompt", this.example["inputs_plaintext"])}
            ${renderAttribute("Prediction", predictionText)}
          </div>
        </div>
      `;
      }
      return x`
      <div class='query-example-container'>
        <div class='example-header' @click=${stopPropagation}>
          <strong>Query:</strong>
          <span class='prompt-text' @mousedown=${onSelectPrompt}
            @mouseup=${onSelectPrompt}>
            ${this.example["inputs_plaintext"]}
          </span>
          <span class=${targetTextClass} @click=${onClickHighlightTarget}>
            ${targetText}
          </span>
        </div>
        <div class='data-grid example-grid'>
          ${this.example["example_id"] ? renderAttribute("Example ID", this.example["example_id"]) : renderAttribute("TREX ID", this.example["trex_id"])}
          ${renderAttribute("Prompt", this.example["inputs_plaintext"])}
          ${renderAttribute("Prediction", predictionText)}
          ${renderAttribute("Ground Truth", groundTruth)}
          ${renderAttribute("Relation", this.example["relation"])}
          ${renderAttribute("C4 Fact Frequency", frequencyText)}
          ${renderAttribute("Has TREX Sentence", this.example["has_trex_sentence"])}
          ${this.renderDecoderSamples()}
        </div>
      </div>
    `;
    }
    renderIsCorrectAttribute(example, i7) {
      const isCorrect = example["proponent_correct"]?.[i7];
      const scoreClass = e6({
        "proponent-attribute": true,
        "proponent-correct": isCorrect ?? false
      });
      const valueText = isCorrect == null ? "N/A" : isCorrect ? "\u2713" : "-";
      return x`
      <div class=${scoreClass}>
        <label>Correct?</label>
        <div class='value numeric'>${valueText}</div>
      </div>
    `;
    }
    renderAisScoreAttribute(example, i7) {
      const aisScore = example["proponent_ais_scores"]?.[i7] ?? 0;
      const aisStyle = o5({ "background": aisColor(aisScore * 0.7) });
      const titleText = example["proponent_ais_best_windows"]?.[i7] ? `Best scoring window: "${example["proponent_ais_best_windows"]?.[i7]}"` : "Score for entire passage.";
      const labelText = example["proponent_ais_best_windows"]?.[i7] ? "AIS Score*" : "AIS Score";
      return x`
      <div class='proponent-attribute' style=${aisStyle} title=${titleText}>
        <label>${labelText}</label>
        <div class='value numeric'>
          ${example["proponent_ais_scores"]?.[i7].toFixed(4) ?? "-"}
        </div>
      </div>
    `;
    }
    renderProponents(example, isSxS = false) {
      if (example == null)
        return null;
      const numProponents = example["proponents"]?.length ?? 0;
      const proponentMatchers = [
        [this.highlightPrompt, "prompt-highlight"],
        [this.highlightTarget, "target-highlight"]
      ];
      const renderedRows = [];
      for (let i7 = 0; i7 < numProponents; i7++) {
        const proponentText = example["proponents"][i7];
        const proponentHTML = tagMatchingSpans(
          proponentText,
          proponentMatchers,
          "i"
        );
        const unfilteredRank = example["proponent_ranks"]?.[i7];
        const rankText = unfilteredRank != null ? `${i7} (${unfilteredRank})` : `${i7}`;
        const elementId = isSxS ? `proponent-sxs-${i7}` : `proponent-${i7}`;
        const row = x`
        <div class='data-grid proponent-grid' id=${elementId}>
          <div class='proponent-attribute'>
            <label>Rank</label>
            <div class='value numeric'>${rankText}</div>
          </div>
          <div class='proponent-attribute'>
            <label>TDA Score</label>
            <div class='value numeric'>${example["proponent_scores"]?.[i7].toFixed(4) ?? "-"}</div>
          </div>
          ${this.renderIsCorrectAttribute(example, i7)}
          ${this.renderAisScoreAttribute(example, i7)}
          <div class='proponent-text'>
            <label>Text</label>
            <div class='value'>${proponentHTML}</div>
          </div>
        </div>
      `;
        renderedRows.push(row);
      }
      let renderedIsCorrectSelector = null;
      if (example["proponent_correct"] != null) {
        const renderedIsCorrectChips = [];
        for (let i7 = 0; i7 < numProponents; i7++) {
          const onClickScrollTo = () => {
            const targetId = isSxS ? `proponent-sxs-${i7}` : `proponent-${i7}`;
            this.shadowRoot.getElementById(targetId)?.scrollIntoView();
          };
          const proponentText = example["proponents"][i7];
          const titleText = `[${i7}]: ${proponentText}`;
          const isCorrect = example["proponent_correct"][i7];
          const chipClasses = e6({
            "proponent-chip": true,
            "proponent-correct": isCorrect
          });
          const chip = x`
            <div class=${chipClasses}
              @click=${onClickScrollTo} title=${titleText}>
              ${isCorrect ? "\u2713" : "-"}
            </div>
          `;
          renderedIsCorrectChips.push(chip);
        }
        renderedIsCorrectSelector = x`
        <div class='chips-row'>
          <label>By correctness:</label>
          <div class='chips-holder'>
            ${renderedIsCorrectChips}
          </div>
        </div>
      `;
      }
      let renderedAisSelector = null;
      if (example["proponent_ais_scores"] != null) {
        const renderedAisChips = [];
        for (let i7 = 0; i7 < numProponents; i7++) {
          const onClickScrollTo = () => {
            const targetId = isSxS ? `proponent-sxs-${i7}` : `proponent-${i7}`;
            this.shadowRoot.getElementById(targetId)?.scrollIntoView();
          };
          const aisScore = example["proponent_ais_scores"]?.[i7];
          const chipStyle = o5({
            "--chip-color": aisColor((aisScore ?? 0) * 0.7)
          });
          const proponentText = example["proponents"][i7];
          const titleText = `[${i7}]: ${proponentText}`;
          const chip = x`
          <div class='proponent-chip' style=${chipStyle}
            @click=${onClickScrollTo} title=${titleText}>
            ${aisScore != null ? aisScore.toFixed(2) : "-"}
          </div>
        `;
          renderedAisChips.push(chip);
        }
        renderedAisSelector = x`
        <div class='chips-row'>
          <label>By AIS score:</label>
          <div class='chips-holder'>
            ${renderedAisChips}
          </div>
        </div>
      `;
      }
      const proponentListId = isSxS ? "proponent-list-sxs" : "proponent-list";
      const scrollToTop = () => {
        const elem = this.shadowRoot.getElementById(proponentListId);
        elem.scrollTop = 0;
      };
      const scrollToBottom = () => {
        const elem = this.shadowRoot.getElementById(proponentListId);
        elem.scrollTop = elem.scrollHeight;
      };
      const title = this.sxsExample !== void 0 ? isSxS ? "Baseline" : "Experiment" : "Retrieved Proponents";
      return x`
      ${isSxS ? x`<div class='vbar'></div>` : null}
      <div class='proponents ${isSxS ? "sxs" : ""}'>
        <div class='proponents-header'>
          <div>${title}</div>
          <div class='selector-rows'>
            ${renderedIsCorrectSelector}
            ${renderedAisSelector}
          </div>
          <div class='flex-spacer'></div>
          <div class='scroll-controls'>
            <md-icon class='icon-button' @click=${scrollToTop}>
              vertical_align_top
            </md-icon>
            <md-icon class='icon-button' @click=${scrollToBottom}>
              vertical_align_bottom
            </md-icon>
          </div>
        </div>
        <div class='proponent-list' id=${proponentListId}>
          ${renderedRows}
        </div>
      </div>
    `;
    }
    render() {
      if (this.example == null)
        return null;
      return x`
      <div class='outer-container'>
        ${this.renderQueryExample()}
        <div class='proponents-sxs-container'>
          ${this.renderProponents(this.example, false)}
          ${this.renderProponents(
        this.sxsExample,
        /* isSxs */
        true
      )}
        </div>
      </div>
    `;
    }
  };
  __decorateClass([
    n3({ type: Object })
  ], TDAExampleView.prototype, "example", 2);
  __decorateClass([
    n3({ type: Object })
  ], TDAExampleView.prototype, "sxsExample", 2);
  __decorateClass([
    observable
  ], TDAExampleView.prototype, "highlightPrompt", 2);
  __decorateClass([
    observable
  ], TDAExampleView.prototype, "highlightTarget", 2);
  __decorateClass([
    observable
  ], TDAExampleView.prototype, "expandSamples", 2);
  TDAExampleView = __decorateClass([
    t("tda-example-view")
  ], TDAExampleView);

  // demo/metrics.ts
  function getGroundTruthMetrics(isCorrect) {
    const precisionAtK = cumSumArray(isCorrect.map(Number)).map(
      (v2, i7) => v2 / (i7 + 1)
    );
    const posIndex = isCorrect.indexOf(true);
    return {
      "recall@10": Number(isCorrect.slice(0, 10).includes(true)),
      // 'recall@all': Number(isCorrect.includes(true)),
      // 'precision@1': precisionAtK[0] ?? 0,
      "precision@10": precisionAtK[9] ?? 0,
      // 'average_precision': precisionAtK ? mean(precisionAtK) : 0,
      "mrr_first": posIndex > -1 ? 1 / (1 + posIndex) : 0
    };
  }
  function getAISMetrics(aisScores, threshold = 0.5) {
    const binaryPreds = aisScores.map((v2) => Number(v2 > threshold));
    const precisionAtK = cumSumArray(binaryPreds).map((v2, i7) => v2 / (i7 + 1));
    const posIndex = binaryPreds.indexOf(1);
    return {
      "ais_threshold": threshold,
      "ais_recall@10": Number(binaryPreds.slice(0, 10).includes(1)),
      // 'ais_recall@all': Number(binaryPreds.includes(1)),
      // 'ais_precision@1': precisionAtK[0] ?? 0,
      "ais_precision@10": precisionAtK[9] ?? 0,
      // 'ais_average_precision': precisionAtK ? mean(precisionAtK) : 0,
      "ais_mrr_first": posIndex > -1 ? 1 / (1 + posIndex) : 0
    };
  }

  // demo/data_loader.ts
  async function loadRemoteJsonl(url) {
    const response = await fetch(url, {
      method: "GET"
    });
    if (response.status === 502) {
      const errorMessage = `Failed to load dataset from ${url}.`;
      throw new Error(errorMessage);
    }
    const jsonlResponse = await response.text();
    const lines = jsonlResponse.split("\n").filter((line) => line);
    return [...lines.map((line) => JSON.parse(line))];
  }
  var UploadedFileManager = class {
    constructor() {
      this.files = {};
    }
    addFile(name, file) {
      this.files[name] = file;
    }
    async loadExamples(name) {
      const file = this.files[name];
      const jsonlResponse = await file.text();
      const lines = jsonlResponse.split("\n").filter((line) => line);
      return [...lines.map((line) => JSON.parse(line))];
    }
  };
  var uploadedFileManager = new UploadedFileManager();
  var DataLoaderService = class {
    constructor() {
      this.jsonlPath = null;
      this.examples = [];
    }
    pathIsUploadedFile(path) {
      return path.startsWith("uploaded:");
    }
    /**
     * Load data, to be available via .getExample()
     */
    // TODO: add load-latest functionality, to avoid race conditions?
    async loadData(path) {
      this.examples = [];
      if (!path) {
        this.jsonlPath = path;
        return;
      }
      if (this.pathIsUploadedFile(path)) {
        this.examples = await uploadedFileManager.loadExamples(path);
      } else {
        this.examples = await loadRemoteJsonl(path);
      }
      this.jsonlPath = path;
      console.log(
        `DataLoaderService: parsed ${this.examples.length} examples from ${this.jsonlPath}`
      );
    }
    getExample(id2) {
      return this.examples[+id2];
    }
    getIndex(filter2) {
      const indexedExamples = this.examples.map(
        (ex, i7) => Object.assign({}, ex, { "_id": i7 })
      );
      let filteredExamples = indexedExamples;
      if (filter2) {
        const filterFn = Function("ex", `return ${filter2};`);
        filteredExamples = indexedExamples.filter(filterFn);
      }
      const index = filteredExamples.map((ex) => {
        const entry = {
          id: `${ex["_id"]}`,
          // Support older files that used 'trex_id' as the field name.
          displayName: ex["example_id"] ?? ex["trex_id"],
          description: `${ex["inputs_plaintext"]} ${ex["targets_plaintext"]}`,
          metrics: {}
        };
        if (ex.hasOwnProperty("task")) {
          entry.task = ex["task"];
        }
        if (ex.hasOwnProperty("relation")) {
          entry.relation = ex["relation"];
        }
        let tdaScores;
        if (tdaScores = ex["proponent_scores"]) {
          const bestTDAScore = Math.max(...tdaScores);
          if (isNaN(bestTDAScore)) {
            console.warn(
              "Warning: NaN value found for TDA score for example ",
              ex
            );
          } else {
            entry.bestTDAScore = bestTDAScore;
          }
        }
        if (ex["proponent_correct"]) {
          Object.assign(
            entry.metrics,
            getGroundTruthMetrics(ex["proponent_correct"])
          );
        }
        let aisScores;
        if (aisScores = ex["proponent_ais_scores"]) {
          const bestAISScore = Math.max(...aisScores);
          if (isNaN(bestAISScore)) {
            console.warn(
              "Warning: NaN value found for AIS score for example ",
              ex
            );
          } else {
            entry.bestAISScore = bestAISScore;
            Object.assign(
              entry.metrics,
              getAISMetrics(
                aisScores,
                /* threshold */
                0.5
              )
            );
          }
        }
        if (ex.hasOwnProperty("has_trex_sentence")) {
          entry.hasTrexSentence = ex["has_trex_sentence"];
        }
        return entry;
      });
      return index;
    }
  };
  __decorateClass([
    observable
  ], DataLoaderService.prototype, "jsonlPath", 2);
  __decorateClass([
    observable
  ], DataLoaderService.prototype, "examples", 2);

  // demo/presets.ts
  var JSONL_PRESETS = {
    // T-REx retrievals (Table 1)
    "trex_bm25": "https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_bm25.jsonl",
    "trex_gecko": "https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_gecko.jsonl",
    "trex_trak": "https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_trak.jsonl",
    "trex_exp1": "https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp1.jsonl",
    "trex_exp2": "https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp2.jsonl",
    "trex_exp3": "https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp3.jsonl",
    "trex_exp4": "https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp4.jsonl",
    "trex_exp5": "https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_exp5.jsonl",
    "trex_trackstar": "https://storage.googleapis.com/tda-resources/2410.17413/public/trex_retrievals_trackstar.jsonl",
    // C4 retrievals (Table 2)
    "c4_trex_bm25": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_bm25.jsonl",
    "c4_trex_gecko": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_gecko.jsonl",
    "c4_trex_grad_dot": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_grad_dot.jsonl",
    "c4_trex_grad_cosine": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_grad_cosine.jsonl",
    "c4_trex_trackstar": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_retrievals_trackstar.jsonl",
    // C4 retrievals for incorrect preds
    "c4_trex_incorrectpred_trackstar": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_trex_incorrectpred_retrievals_trackstar.jsonl",
    // Other tasks
    "c4_copa_trackstar_nontaskspecific": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_copa_retrievals_trackstar_nontaskspecific.jsonl",
    "c4_piqa_trackstar_nontaskspecific": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_piqa_retrievals_trackstar_nontaskspecific.jsonl",
    "c4_arithmetic_trackstar_nontaskspecific": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_arithmetic_retrievals_trackstar_nontaskspecific.jsonl",
    "c4_arithmeticwordproblem_trackstar_nontaskspecific": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_arithmeticwordproblem_retrievals_trackstar_nontaskspecific.jsonl",
    "c4_storygeneration_trackstar_nontaskspecific": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_storygeneration_retrievals_trackstar_nontaskspecific.jsonl",
    // Demo sample to load quickly
    "c4_demo_30_queries": "https://storage.googleapis.com/tda-resources/2410.17413/public/c4_demo30_retrievals_trackstar.jsonl"
  };
  var DEFAULT_PRESET = "c4_demo_30_queries";

  // demo/app.ts
  var TDAApp = class extends MobxLitElement {
    constructor() {
      super();
      this.urlService = new URLService();
      this.mainDataLoaderService = new DataLoaderService();
      this.sxsDataLoaderService = new DataLoaderService();
      this.metadata = {};
      this.jsonlPath = "";
      this.editedJsonlPath = "";
      this.dataFilter = "";
      this.editedDataFilter = "";
      this.sxsEnabled = false;
      this.sxsJsonlPath = "";
      this.editedSxsJsonlPath = "";
      this.dataIndex = [];
      this.statusMessage = "";
      this.selectedExId = "0";
      this.initialize();
    }
    static get styles() {
      return [styles4, styles2];
    }
    getBestURL() {
      const urlBase = this.metadata.canonicalURL || window.location.origin;
      return new URL(`${urlBase}${window.location.search}`).href;
    }
    onClickCopyLink() {
      const url = this.getBestURL();
      navigator.clipboard.writeText(url);
      console.log("Copied URL to this instance: ", url);
    }
    updateIndex(filter2) {
      this.dataIndex = [];
      this.taskFilter = void 0;
      this.editedDataFilter = filter2;
      this.statusMessage = `Loading data index from ${this.mainDataLoaderService.jsonlPath}`;
      this.dataIndex = this.mainDataLoaderService.getIndex(filter2);
      if (!this.dataIndex) {
        this.statusMessage = `Error: unable to read from ${this.mainDataLoaderService.jsonlPath}`;
      } else {
        this.statusMessage = "";
      }
    }
    updateExample(id2) {
      this.statusMessage = "Loading example...";
      const mainExample = this.mainDataLoaderService.getExample(id2);
      if (this.sxsJsonlPath) {
        const sxsExample = this.sxsDataLoaderService.getExample(id2);
        this.sxsExample = sxsExample;
      } else {
        this.sxsExample = void 0;
      }
      this.currentExample = mainExample;
      this.statusMessage = "";
    }
    async initialize() {
      if (Object.keys(this.metadata.defaultJsonlPaths ?? {}).length === 0) {
        this.metadata.defaultJsonlPaths = Object.assign({}, JSONL_PRESETS);
      }
      this.jsonlPath = this.metadata.defaultJsonlPaths?.[DEFAULT_PRESET] ?? "";
      this.urlService.syncParam(
        "jsonl_path",
        (urlParam) => {
          this.jsonlPath = urlParam;
        },
        () => this.jsonlPath,
        (path) => path
      );
      this.urlService.syncParam(
        "sxs_jsonl_path",
        (urlParam) => {
          this.sxsJsonlPath = urlParam;
          if (this.sxsJsonlPath) {
            this.sxsEnabled = true;
          }
        },
        () => [this.sxsJsonlPath, this.sxsEnabled],
        ([path, enabled]) => enabled ? path : ""
      );
      this.urlService.syncParam(
        "example_id",
        (urlParam) => {
          this.selectedExId = urlParam;
        },
        () => this.selectedExId,
        (id2) => id2
      );
      this.urlService.syncParam(
        "data_filter",
        (urlParam) => {
          this.dataFilter = urlParam;
          this.editedDataFilter = this.dataFilter;
        },
        () => this.dataFilter,
        (filter2) => filter2
      );
      reaction2(
        () => this.jsonlPath,
        async (path) => {
          this.editedJsonlPath = path;
          this.currentExample = void 0;
          this.dataFilter = "";
          await this.mainDataLoaderService.loadData(this.jsonlPath);
          this.updateIndex(this.dataFilter);
          this.updateExample(this.selectedExId);
        },
        { fireImmediately: true }
      );
      reaction2(
        () => this.sxsJsonlPath,
        async (path) => {
          this.editedSxsJsonlPath = path;
          await this.sxsDataLoaderService.loadData(path);
          this.updateExample(this.selectedExId);
        },
        { fireImmediately: true }
      );
      reaction2(
        () => this.dataFilter,
        async (filter2) => {
          this.updateIndex(filter2);
        }
        // {fireImmediately: true},
      );
      reaction2(
        () => this.selectedExId,
        async (id2) => {
          this.currentExample = void 0;
          this.updateExample(id2);
        }
        // {fireImmediately: true},
      );
    }
    selectExample(id2) {
      this.selectedExId = id2;
    }
    async getMetadata() {
    }
    renderRawJsonPopover() {
      const queryText = `${this.currentExample?.["inputs_plaintext"]} ${this.currentExample?.["targets_plaintext"]}`;
      const content = JSON.stringify(this.currentExample, null, "  ");
      return x`
      <button class='hairline-button raw-json-button' popovertarget='raw-json-popover'>
        <span>Raw JSON </span><span class='material-icon'>open_in_full</span>
      </button>
      <div id='raw-json-popover' popover>
        <div class='flex-column-container'>
          <div class='raw-json-header'>
            <div>Example [${this.selectedExId}]: ${queryText}</div>
            <button class='invisible-button'
              popovertarget='raw-json-popover' popovertargetaction='hide'>
              <md-icon class='icon-button outlined'>close</md-icon>
            </button>
          </div>
          <div class='raw-json-content'>${content}</div>
        </div>
      </div>
    `;
    }
    renderExampleControls() {
      const handleChangeEvalId = (e7) => {
        this.selectExample(e7.target.value);
      };
      const handlePlusButton = (e7) => {
        let currentValue = Number(this.selectedExId);
        currentValue++;
        this.selectExample(String(currentValue));
      };
      const handleMinusButton = (e7) => {
        let currentValue = Number(this.selectedExId);
        currentValue--;
        this.selectExample(String(currentValue));
      };
      return x`
      <div class="number-changer">
        Example index:
        <button class="decrease" @click=${handleMinusButton}><</button>
        <input
          type="number"
          id="number-field"
          value=${this.selectedExId}
          @change=${handleChangeEvalId} />
        <button class="increase" @click=${handlePlusButton}>></button>
      </div>
      <div class='flex-spacer'></div>
      ${this.renderRawJsonPopover()}
    `;
    }
    renderMainPathInput() {
      const setEditedJsonlPath = (e7) => {
        this.editedJsonlPath = e7.target.value;
      };
      const updateJsonlPath = () => {
        this.jsonlPath = this.editedJsonlPath;
      };
      const onEnterUpdatePath = (e7) => {
        if (e7.key === "Enter")
          updateJsonlPath();
      };
      const pathIsEdited = this.jsonlPath !== this.editedJsonlPath;
      const containerClasses = e6({
        "path-input": true,
        "base-path-input": true,
        "edited": pathIsEdited
      });
      const toggleSxsMode = () => {
        this.sxsEnabled = !this.sxsEnabled;
        if (this.sxsEnabled && !this.sxsJsonlPath) {
          this.editedSxsJsonlPath = this.editedJsonlPath;
        }
      };
      const sxsButtonClasses = e6({
        "hairline-button": true,
        "sxs-mode-button": true,
        "active": this.sxsEnabled
      });
      const sxsTooltipText = this.sxsEnabled ? "Exit SxS mode" : "Enter SxS mode";
      const handleFileUpload = (e7) => {
        const input = e7.target;
        if (input.files && input.files.length > 0) {
          const file = input.files[0];
          console.log("Uploaded file", file);
          const handle = `uploaded:${file.name}`;
          uploadedFileManager.addFile(handle, file);
          this.jsonlPath = handle;
        }
      };
      const clickFileUpload = () => {
        this.shadowRoot.getElementById("upload-main-jsonl")?.click();
      };
      return x`
      <div class=${containerClasses}>
        <label for='jsonl_path'>
          ${this.sxsEnabled ? "Experiment" : "Source"} file:
        </label>
        <input type='text' name='jsonl_path' title=${this.editedJsonlPath}
          value=${this.editedJsonlPath}
          @input=${setEditedJsonlPath}
          @keydown=${onEnterUpdatePath}>
        </input>
        <button class='hairline-button' @click=${updateJsonlPath}
         ?disabled=${!pathIsEdited}>
          Load
        </button>
        <div class='file-upload'>
          <input type="file" id="upload-main-jsonl" @change=${handleFileUpload} />
          <lit-tooltip content="Upload .jsonl file">
            <button class='hairline-button file-upload-button'
              slot='tooltip-anchor' @click=${clickFileUpload}>
              <span class='material-icon'>upload_file</span>
              Upload
            </button>
          </lit-tooltip>
        </div>
        <lit-tooltip content=${sxsTooltipText}>
          <button class=${sxsButtonClasses} slot='tooltip-anchor'
            @click=${toggleSxsMode}>
            <span class='material-icon'>compare</span>
            Compare
          </button>
        </lit-tooltip>
        <lit-tooltip content="Copy link to this page" tooltipPosition="left">
          <button class='hairline-button copy-link-button' slot='tooltip-anchor'
            @click=${this.onClickCopyLink}>
            <span class='material-icon'>link</span>
            Copy link
          </button>
        </lit-tooltip>
      </div>
    `;
    }
    renderSxsPathInput() {
      const setEditedJsonlPath = (e7) => {
        this.editedSxsJsonlPath = e7.target.value;
      };
      const updateJsonlPath = () => {
        this.sxsJsonlPath = this.editedSxsJsonlPath;
      };
      const onEnterUpdatePath = (e7) => {
        if (e7.key === "Enter")
          updateJsonlPath();
      };
      const pathIsEdited = this.sxsJsonlPath !== this.editedSxsJsonlPath;
      const containerClasses = e6({
        "path-input": true,
        "expt-path-input": true,
        "edited": pathIsEdited
      });
      const handleFileUpload = (e7) => {
        const input = e7.target;
        if (input.files && input.files.length > 0) {
          const file = input.files[0];
          console.log("Uploaded file", file);
          const handle = `uploaded:${file.name}`;
          uploadedFileManager.addFile(handle, file);
          this.sxsJsonlPath = handle;
        }
      };
      const clickFileUpload = () => {
        this.shadowRoot.getElementById("upload-sxs-jsonl")?.click();
      };
      return x`
      <div class=${containerClasses}>
        <label for='jsonl_path'>Baseline file:</label>
        <input type='text' name='jsonl_path' title=${this.editedSxsJsonlPath}
          value=${this.editedSxsJsonlPath}
          @input=${setEditedJsonlPath}
          @keydown=${onEnterUpdatePath}>
        </input>
        <button class='hairline-button' @click=${updateJsonlPath}
         ?disabled=${!pathIsEdited}>
          Load
        </button>
        <div class='file-upload'>
          <input type="file" id="upload-sxs-jsonl" @change=${handleFileUpload} />
          <lit-tooltip content="Upload .jsonl file">
            <button class='hairline-button file-upload-button'
              slot='tooltip-anchor' @click=${clickFileUpload}>
              <span class='material-icon'>upload_file</span>
              Upload
            </button>
          </lit-tooltip>
        </div>
      </div>
    `;
    }
    renderHeader() {
      const renderedFileSuggestions = Object.entries(
        this.metadata.defaultJsonlPaths ?? {}
      ).map(([name, path]) => {
        const url = makeEndpointURL("/", { "jsonl_path": path });
        const linkClasses = e6({ "current-file": path === this.jsonlPath });
        return x`<a class=${linkClasses} href=${url}>${name}</a>`;
      });
      return x`
      <div class='main-title header-group'>
        <img src="favicon.png" class='status-emoji'>
        Pretraining TDA Demo
      </div>
      <div class='header-controls'>
        ${this.renderMainPathInput()}
        <div class='header-group file-suggestions'>
          <label>Presets:</label>
          ${renderedFileSuggestions}
        </div>
        ${this.sxsEnabled ? this.renderSxsPathInput() : null}
      </div>
    `;
    }
    get dataByTask() {
      return Map.groupBy(
        this.dataIndex,
        (info) => info.task
      );
    }
    get filteredDataIndex() {
      let ret = this.dataIndex;
      if (this.taskFilter != null) {
        ret = this.dataByTask.get(this.taskFilter) ?? [];
      }
      return ret;
    }
    renderTaskFilters() {
      if (this.dataIndex.length <= 0) {
        return x`
        <div class='filter-group filter-pending'>
          <label class='row-label'>Task:</label>
          <div>(waiting for data)</div>
        </div>
      `;
      }
      const options = [...this.dataByTask.keys()].map((key) => {
        const selectOption = () => {
          if (this.taskFilter === key) {
            this.taskFilter = void 0;
          } else {
            this.taskFilter = key;
          }
        };
        const classes = e6({
          "filter-chip": true,
          "selected": this.taskFilter === key
        });
        return x`
        <div class=${classes} @click=${selectOption}>
          ${key} (${this.dataByTask.get(key).length})
        </div>
      `;
      });
      if (options.length <= 1) {
        return E;
      }
      return x`
      <div class='filter-group'>
        <label class='row-label'>Task:</label>
        <div class='filter-chips'>
          ${options}
        </div>
      </div>
    `;
    }
    renderDataFilters() {
      const setEditedDataFilter = (e7) => {
        this.editedDataFilter = e7.target.value;
      };
      const updateDataFilter = () => {
        this.dataFilter = this.editedDataFilter;
      };
      const onEnterUpdateDataFilter = (e7) => {
        if (e7.key === "Enter")
          updateDataFilter();
      };
      const filterIsEdited = this.dataFilter !== this.editedDataFilter;
      const filterGroupClasses = e6({
        "filter-group": true,
        "filter-group-wide": true,
        "filter-pending": this.dataIndex.length <= 0,
        "edited": filterIsEdited
      });
      const renderPreset = (name, filter2) => {
        const presetClasses = e6({
          "preset-filter": true,
          "current-filter": filter2 === this.dataFilter
        });
        const setDataFilter = () => {
          this.editedDataFilter = filter2;
          updateDataFilter();
        };
        return x`<span class=${presetClasses} @click=${setDataFilter}>${name}</span>`;
      };
      const filterPlaceholderText = "JS expression, such as ex.relation.startsWith('location')";
      return x`
      <div class=${filterGroupClasses}>
        <label class='row-label' for=data_filter'>Data Filter:</label>
        <div class='data-filter'>
          <input type='text' name='data_filter' title=${this.editedDataFilter}
            value=${this.editedDataFilter}
            placeholder=${this.editedDataFilter ? "" : filterPlaceholderText}
            @input=${setEditedDataFilter}
            @keydown=${onEnterUpdateDataFilter}>
          </input>
          <button class='hairline-button' @click=${updateDataFilter}
            ?disabled=${!filterIsEdited}>
            Apply
          </button>
          <div class='preset-links'>
            <label>Presets:</label>
            ${renderPreset("(no filter)", "")}
            ${renderPreset("Correct", "ex.is_8b_correct")}
            ${renderPreset(
        "Correct and Confident",
        'ex.is_8b_correct && ex["8b_confidence"] > 0.5'
      )}
            ${renderPreset(
        "Correct, Confident, and Common",
        'ex.is_8b_correct && ex["8b_confidence"] > 0.5 && ex.c4_frequency_bucket >= 3'
      )}
            ${renderPreset("Common (3,4,5)", "ex.c4_frequency_bucket >= 3")}
            ${renderPreset("Very Common (4,5)", "ex.c4_frequency_bucket >= 4")}
            ${renderPreset("Most Common (5)", "ex.c4_frequency_bucket >= 5")}
            ${renderPreset("Confident (>0.5)", 'ex["8b_confidence"] > 0.5')}
          </div>
        </div>
      </div>
    `;
    }
    render() {
      const onExampleClick = (e7) => {
        const id2 = e7.detail.id;
        if (id2 !== this.selectedExId) {
          this.selectExample(id2);
        }
      };
      return x`
      <div id="main-grid">
        <div id="header">
          ${this.renderHeader()}
        </div>
        <div id="filters">
          ${this.renderDataFilters()}
          ${this.renderTaskFilters()}
        </div>
        <div id='left-bar'>
          <tda-data-index .index=${this.filteredDataIndex}
            selectedId=${this.selectedExId}
            @example-clicked=${onExampleClick}>
          </tda-data-index>
        </div>
        <div id="example-controls">
          ${this.renderExampleControls()}
        </div>
        <div id="example">
          <tda-example-view .example=${this.currentExample}
           .sxsExample=${this.sxsEnabled ? this.sxsExample : void 0}>
          </tda-example-view>
        </div>
        <div id="footer">
          ${this.statusMessage}
        </div>
      </div>`;
    }
  };
  __decorateClass([
    observable
  ], TDAApp.prototype, "metadata", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "jsonlPath", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "editedJsonlPath", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "dataFilter", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "editedDataFilter", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "sxsEnabled", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "sxsJsonlPath", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "editedSxsJsonlPath", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "dataIndex", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "taskFilter", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "statusMessage", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "selectedExId", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "currentExample", 2);
  __decorateClass([
    observable
  ], TDAApp.prototype, "sxsExample", 2);
  __decorateClass([
    computed
  ], TDAApp.prototype, "dataByTask", 1);
  __decorateClass([
    computed
  ], TDAApp.prototype, "filteredDataIndex", 1);
  TDAApp = __decorateClass([
    t("tda-app")
  ], TDAApp);

  // demo/index.ts
  async function main() {
    B(x`<tda-app></tda-app>`, document.querySelector("#app-container"));
  }
  main();
})();
/*
 * @fileoverview A reusable tooltip element.
 *
 * @license
 * Copyright 2022-2024 Google LLC
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
 */
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

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

@lit/reactive-element/decorators/event-options.js:
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

@material/web/icon/internal/icon.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/icon/internal/icon-styles.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/icon/icon.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

mobx/lib/mobx.module.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)

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
*/
//# sourceMappingURL=bundle.js.map
