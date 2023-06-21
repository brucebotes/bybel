"use strict";(()=>{var eo=Object.defineProperty,Xi=Object.defineProperties,Yi=Object.getOwnPropertyDescriptor,Gi=Object.getOwnPropertyDescriptors;var Qr=Object.getOwnPropertySymbols;var Zi=Object.prototype.hasOwnProperty,Qi=Object.prototype.propertyIsEnumerable;var to=(e,t,r)=>t in e?eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,vt=(e,t)=>{for(var r in t||={})Zi.call(t,r)&&to(e,r,t[r]);if(Qr)for(var r of Qr(t))Qi.call(t,r)&&to(e,r,t[r]);return e},ro=(e,t)=>Xi(e,Gi(t));var $=(e,t,r,o)=>{for(var i=o>1?void 0:o?Yi(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&eo(t,r,i),i};var Ee=window,Ae=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rr=Symbol(),oo=new WeakMap,ne=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==rr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(Ae&&t===void 0){let o=r!==void 0&&r.length===1;o&&(t=oo.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&oo.set(r,t))}return t}toString(){return this.cssText}},io=e=>new ne(typeof e=="string"?e:e+"",void 0,rr),S=(e,...t)=>{let r=e.length===1?e[0]:t.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new ne(r,e,rr)},or=(e,t)=>{Ae?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{let o=document.createElement("style"),i=Ee.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,e.appendChild(o)})},Pe=Ae?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let o of t.cssRules)r+=o.cssText;return io(r)})(e):e;var ir,Te=window,so=Te.trustedTypes,ts=so?so.emptyScript:"",no=Te.reactiveElementPolyfillSupport,Mt={toAttribute(e,t){switch(t){case Boolean:e=e?ts:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ao=(e,t)=>t!==e&&(t==t||e==e),sr={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:ao},mt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((r,o)=>{let i=this._$Ep(o,r);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,r=sr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,o){return{get(){return this[r]},set(i){let s=this[t];this[r]=i,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||sr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(let i of o)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let i of o)r.unshift(Pe(i))}else t!==void 0&&r.push(Pe(t));return r}static _$Ep(t,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;let r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return or(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r,o=sr){var i;let s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){let n=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:Mt).toAttribute(r,o.type);this._$El=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,r){var o;let i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){let n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Mt;this._$El=s,this[s]=a.fromAttribute(r,n.type),this._$El=null}}requestUpdate(t,r,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||ao)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let r=!1,o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(o)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};mt.finalized=!0,mt.elementProperties=new Map,mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},no?.({ReactiveElement:mt}),((ir=Te.reactiveElementVersions)!==null&&ir!==void 0?ir:Te.reactiveElementVersions=[]).push("1.6.1");var nr,Re=window,Ut=Re.trustedTypes,lo=Ut?Ut.createPolicy("lit-html",{createHTML:e=>e}):void 0,je="$lit$",bt=`lit$${(Math.random()+"").slice(9)}$`,lr="?"+bt,es=`<${lr}>`,Ft=document,le=()=>Ft.createComment(""),ce=e=>e===null||typeof e!="object"&&typeof e!="function",bo=Array.isArray,go=e=>bo(e)||typeof e?.[Symbol.iterator]=="function",ar=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,co=/-->/g,uo=/>/g,Et=RegExp(`>|${ar}(?:([^\\s"'>=/]+)(${ar}*=${ar}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ho=/'/g,po=/"/g,vo=/^(?:script|style|textarea|title)$/i,yo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),g=yo(1),xo=yo(2),D=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),fo=new WeakMap,Vt=Ft.createTreeWalker(Ft,129,null,!1),ko=(e,t)=>{let r=e.length-1,o=[],i,s=t===2?"<svg>":"",n=ae;for(let l=0;l<r;l++){let c=e[l],d,f,p=-1,m=0;for(;m<c.length&&(n.lastIndex=m,f=n.exec(c),f!==null);)m=n.lastIndex,n===ae?f[1]==="!--"?n=co:f[1]!==void 0?n=uo:f[2]!==void 0?(vo.test(f[2])&&(i=RegExp("</"+f[2],"g")),n=Et):f[3]!==void 0&&(n=Et):n===Et?f[0]===">"?(n=i??ae,p=-1):f[1]===void 0?p=-2:(p=n.lastIndex-f[2].length,d=f[1],n=f[3]===void 0?Et:f[3]==='"'?po:ho):n===po||n===ho?n=Et:n===co||n===uo?n=ae:(n=Et,i=void 0);let k=n===Et&&e[l+1].startsWith("/>")?" ":"";s+=n===ae?c+es:p>=0?(o.push(d),c.slice(0,p)+je+c.slice(p)+bt+k):c+bt+(p===-2?(o.push(void 0),l):k)}let a=s+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[lo!==void 0?lo.createHTML(a):a,o]},At=class{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let s=0,n=0,a=t.length-1,l=this.parts,[c,d]=ko(t,r);if(this.el=At.createElement(c,o),Vt.currentNode=this.el.content,r===2){let f=this.el.content,p=f.firstChild;p.remove(),f.append(...p.childNodes)}for(;(i=Vt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let f=[];for(let p of i.getAttributeNames())if(p.endsWith(je)||p.startsWith(bt)){let m=d[n++];if(f.push(p),m!==void 0){let k=i.getAttribute(m.toLowerCase()+je).split(bt),_=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:_[2],strings:k,ctor:_[1]==="."?Le:_[1]==="?"?Oe:_[1]==="@"?ze:Tt})}else l.push({type:6,index:s})}for(let p of f)i.removeAttribute(p)}if(vo.test(i.tagName)){let f=i.textContent.split(bt),p=f.length-1;if(p>0){i.textContent=Ut?Ut.emptyScript:"";for(let m=0;m<p;m++)i.append(f[m],le()),Vt.nextNode(),l.push({type:2,index:++s});i.append(f[p],le())}}}else if(i.nodeType===8)if(i.data===lr)l.push({type:2,index:s});else{let f=-1;for(;(f=i.data.indexOf(bt,f+1))!==-1;)l.push({type:7,index:s}),f+=bt.length-1}s++}}static createElement(t,r){let o=Ft.createElement("template");return o.innerHTML=t,o}};function Pt(e,t,r=e,o){var i,s,n,a;if(t===D)return t;let l=o!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[o]:r._$Cl,c=ce(t)?void 0:t._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(e),l._$AT(e,r,o)),o!==void 0?((n=(a=r)._$Co)!==null&&n!==void 0?n:a._$Co=[])[o]=l:r._$Cl=l),l!==void 0&&(t=Pt(e,l._$AS(e,t.values),l,o)),t}var Ie=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var r;let{el:{content:o},parts:i}=this._$AD,s=((r=t?.creationScope)!==null&&r!==void 0?r:Ft).importNode(o,!0);Vt.currentNode=s;let n=Vt.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new yt(n,n.nextSibling,this,t):c.type===1?d=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(d=new Ne(n,this,t)),this._$AV.push(d),c=i[++l]}a!==c?.index&&(n=Vt.nextNode(),a++)}return s}v(t){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}},yt=class{constructor(t,r,o,i){var s;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Pt(this,t,r),ce(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):go(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==C&&ce(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ft.createTextNode(t)),this._$AH=t}g(t){var r;let{values:o,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=At.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(o);else{let n=new Ie(s,this),a=n.u(this.options);n.v(o),this.$(a),this._$AH=n}}_$AC(t){let r=fo.get(t.strings);return r===void 0&&fo.set(t.strings,r=new At(t)),r}T(t){bo(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,i=0;for(let s of t)i===r.length?r.push(o=new yt(this.k(le()),this.k(le()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cp=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}},Tt=class{constructor(t,r,o,i,s){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,o,i){let s=this.strings,n=!1;if(s===void 0)t=Pt(this,t,r,0),n=!ce(t)||t!==this._$AH&&t!==D,n&&(this._$AH=t);else{let a=t,l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Pt(this,a[o+l],r,l),c===D&&(c=this._$AH[l]),n||(n=!ce(c)||c!==this._$AH[l]),c===C?t=C:t!==C&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!i&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Le=class extends Tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}},rs=Ut?Ut.emptyScript:"",Oe=class extends Tt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==C?this.element.setAttribute(this.name,rs):this.element.removeAttribute(this.name)}},ze=class extends Tt{constructor(t,r,o,i,s){super(t,r,o,i,s),this.type=5}_$AI(t,r=this){var o;if((t=(o=Pt(this,t,r,0))!==null&&o!==void 0?o:C)===D)return;let i=this._$AH,s=t===C&&i!==C||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==C&&(i===C||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},Ne=class{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Pt(this,t)}},_o={O:je,P:bt,A:lr,C:1,M:ko,L:Ie,D:go,R:Pt,I:yt,V:Tt,H:Oe,N:ze,U:Le,F:Ne},mo=Re.litHtmlPolyfillSupport;mo?.(At,yt),((nr=Re.litHtmlVersions)!==null&&nr!==void 0?nr:Re.litHtmlVersions=[]).push("2.7.2");var wo=(e,t,r)=>{var o,i;let s=(o=r?.renderBefore)!==null&&o!==void 0?o:t,n=s._$litPart$;if(n===void 0){let a=(i=r?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new yt(t.insertBefore(le(),a),a,void 0,r??{})}return n._$AI(e),n};var cr,ur;var H=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,r;let o=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=o.firstChild),o}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wo(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return D}};H.finalized=!0,H._$litElement$=!0,(cr=globalThis.litElementHydrateSupport)===null||cr===void 0||cr.call(globalThis,{LitElement:H});var $o=globalThis.litElementPolyfillSupport;$o?.({LitElement:H});((ur=globalThis.litElementVersions)!==null&&ur!==void 0?ur:globalThis.litElementVersions=[]).push("3.3.1");var T=e=>t=>typeof t=="function"?((r,o)=>(customElements.define(r,o),o))(e,t):((r,o)=>{let{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(n){customElements.define(r,n)}}})(e,t);var os=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function h(e){return(t,r)=>r!==void 0?((o,i,s)=>{i.constructor.createProperty(s,o)})(e,t,r):os(e,t)}function R(e){return h({...e,state:!0})}var st=({finisher:e,descriptor:t})=>(r,o)=>{var i;if(o===void 0){let s=(i=r.originalKey)!==null&&i!==void 0?i:r.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(r.key)}:{...r,key:s};return e!=null&&(n.finisher=function(a){e(a,s)}),n}{let s=r.constructor;t!==void 0&&Object.defineProperty(r,o,t(o)),e?.(s,o)}};function I(e,t){return st({descriptor:r=>{let o={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){let i=typeof r=="symbol"?Symbol():"__"+r;o.get=function(){var s,n;return this[i]===void 0&&(this[i]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(e))!==null&&n!==void 0?n:null),this[i]}}return o}})}var hr,oa=((hr=window.HTMLSlotElement)===null||hr===void 0?void 0:hr.prototype.assignedElements)!=null?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter(r=>r.nodeType===Node.ELEMENT_NODE);var J={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xt=e=>(...t)=>({_$litDirective$:e,values:t}),lt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var{I:is}=_o;var Co=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;var Eo=e=>e.strings===void 0,So=()=>document.createComment(""),Ht=(e,t,r)=>{var o;let i=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(r===void 0){let n=i.insertBefore(So(),s),a=i.insertBefore(So(),s);r=new is(n,a,e,e.options)}else{let n=r._$AB.nextSibling,a=r._$AM,l=a!==e;if(l){let c;(o=r._$AQ)===null||o===void 0||o.call(r,e),r._$AM=e,r._$AP!==void 0&&(c=e._$AU)!==a._$AU&&r._$AP(c)}if(n!==s||l){let c=r._$AA;for(;c!==n;){let d=c.nextSibling;i.insertBefore(c,s),c=d}}}return r},kt=(e,t,r=e)=>(e._$AI(t,r),e),ss={},De=(e,t=ss)=>e._$AH=t,Ao=e=>e._$AH,Be=e=>{var t;(t=e._$AP)===null||t===void 0||t.call(e,!1,!0);let r=e._$AA,o=e._$AB.nextSibling;for(;r!==o;){let i=r.nextSibling;r.remove(),r=i}};var Po=(e,t,r)=>{let o=new Map;for(let i=t;i<=r;i++)o.set(e[i],i);return o},qt=xt(class extends lt{constructor(e){if(super(e),e.type!==J.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;r===void 0?r=t:t!==void 0&&(o=t);let i=[],s=[],n=0;for(let a of e)i[n]=o?o(a,n):n,s[n]=r(a,n),n++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){var i;let s=Ao(e),{values:n,keys:a}=this.dt(t,r,o);if(!Array.isArray(s))return this.ht=a,n;let l=(i=this.ht)!==null&&i!==void 0?i:this.ht=[],c=[],d,f,p=0,m=s.length-1,k=0,_=n.length-1;for(;p<=m&&k<=_;)if(s[p]===null)p++;else if(s[m]===null)m--;else if(l[p]===a[k])c[k]=kt(s[p],n[k]),p++,k++;else if(l[m]===a[_])c[_]=kt(s[m],n[_]),m--,_--;else if(l[p]===a[_])c[_]=kt(s[p],n[_]),Ht(e,c[_+1],s[p]),p++,_--;else if(l[m]===a[k])c[k]=kt(s[m],n[k]),Ht(e,s[p],s[m]),m--,k++;else if(d===void 0&&(d=Po(a,k,_),f=Po(l,p,m)),d.has(l[p]))if(d.has(l[m])){let E=f.get(a[k]),z=E!==void 0?s[E]:null;if(z===null){let K=Ht(e,s[p]);kt(K,n[k]),c[k]=K}else c[k]=kt(z,n[k]),Ht(e,s[p],z),s[E]=null;k++}else Be(s[m]),m--;else Be(s[p]),p++;for(;k<=_;){let E=Ht(e,c[_+1]);kt(E,n[k]),c[k++]=E}for(;p<=m;){let E=s[p++];E!==null&&Be(E)}return this.ht=a,De(e,c),D}});function*To(e,t){if(e!==void 0){let r=0;for(let o of e)yield t(o,r++)}}function*Ro(e,t,r=1){let o=t===void 0?0:e;t!=null||(t=e);for(let i=o;r>0?i<t:t<i;i+=r)yield i}var ns=/[$_\p{ID_Start}]/u,as=/[$_\u200C\u200D\p{ID_Continue}]/u;function ls(e,t){return(t?/^[\x00-\xFF]*$/:/^[\x00-\x7F]*$/).test(e)}function Io(e,t=!1){let r=[],o=0;for(;o<e.length;){let i=e[o],s=function(n){if(!t)throw new TypeError(n);r.push({type:"INVALID_CHAR",index:o,value:e[o++]})};if(i==="*"){r.push({type:"ASTERISK",index:o,value:e[o++]});continue}if(i==="+"||i==="?"){r.push({type:"MODIFIER",index:o,value:e[o++]});continue}if(i==="\\"){r.push({type:"ESCAPED_CHAR",index:o++,value:e[o++]});continue}if(i==="{"){r.push({type:"OPEN",index:o,value:e[o++]});continue}if(i==="}"){r.push({type:"CLOSE",index:o,value:e[o++]});continue}if(i===":"){let n="",a=o+1;for(;a<e.length;){let l=e.substr(a,1);if(a===o+1&&ns.test(l)||a!==o+1&&as.test(l)){n+=e[a++];continue}break}if(!n){s(`Missing parameter name at ${o}`);continue}r.push({type:"NAME",index:o,value:n}),o=a;continue}if(i==="("){let n=1,a="",l=o+1,c=!1;if(e[l]==="?"){s(`Pattern cannot start with "?" at ${l}`);continue}for(;l<e.length;){if(!ls(e[l],!1)){s(`Invalid character '${e[l]}' at ${l}.`),c=!0;break}if(e[l]==="\\"){a+=e[l++]+e[l++];continue}if(e[l]===")"){if(n--,n===0){l++;break}}else if(e[l]==="("&&(n++,e[l+1]!=="?")){s(`Capturing groups are not allowed at ${l}`),c=!0;break}a+=e[l++]}if(c)continue;if(n){s(`Unbalanced pattern at ${o}`);continue}if(!a){s(`Missing pattern at ${o}`);continue}r.push({type:"PATTERN",index:o,value:a}),o=l;continue}r.push({type:"CHAR",index:o,value:e[o++]})}return r.push({type:"END",index:o,value:""}),r}function Lo(e,t={}){let r=Io(e),{prefixes:o="./"}=t,i=`[^${Kt(t.delimiter===void 0?"/#?":t.delimiter)}]+?`,s=[],n=0,a=0,l="",c=new Set,d=E=>{if(a<r.length&&r[a].type===E)return r[a++].value},f=()=>{let E=d("MODIFIER");return E||d("ASTERISK")},p=E=>{let z=d(E);if(z!==void 0)return z;let{type:K,index:ot}=r[a];throw new TypeError(`Unexpected ${K} at ${ot}, expected ${E}`)},m=()=>{let E="",z;for(;z=d("CHAR")||d("ESCAPED_CHAR");)E+=z;return E},k=E=>E,_=t.encodePart||k;for(;a<r.length;){let E=d("CHAR"),z=d("NAME"),K=d("PATTERN");if(!z&&!K&&d("ASTERISK")&&(K=".*"),z||K){let A=E||"";o.indexOf(A)===-1&&(l+=A,A=""),l&&(s.push(_(l)),l="");let w=z||n++;if(c.has(w))throw new TypeError(`Duplicate name '${w}'.`);c.add(w),s.push({name:w,prefix:_(A),suffix:"",pattern:K||i,modifier:f()||""});continue}let ot=E||d("ESCAPED_CHAR");if(ot){l+=ot;continue}if(d("OPEN")){let A=m(),w=d("NAME")||"",b=d("PATTERN")||"";!w&&!b&&d("ASTERISK")&&(b=".*");let y=m();p("CLOSE");let j=f()||"";if(!w&&!b&&!j){l+=A;continue}if(!w&&!b&&!A)continue;l&&(s.push(_(l)),l=""),s.push({name:w||(b?n++:""),pattern:w&&!b?i:b,prefix:_(A),suffix:_(y),modifier:j});continue}l&&(s.push(_(l)),l=""),p("END")}return s}function Kt(e){return e.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function Oo(e){return e&&e.ignoreCase?"ui":"u"}function cs(e,t){if(!t)return e;let r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,i=r.exec(e.source);for(;i;)t.push({name:i[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),i=r.exec(e.source);return e}function us(e,t,r){let o=e.map(i=>No(i,t,r).source);return new RegExp(`(?:${o.join("|")})`,Oo(r))}function hs(e,t,r){return zo(Lo(e,r),t,r)}function zo(e,t,r={}){let{strict:o=!1,start:i=!0,end:s=!0,encode:n=d=>d}=r,a=`[${Kt(r.endsWith===void 0?"":r.endsWith)}]|$`,l=`[${Kt(r.delimiter===void 0?"/#?":r.delimiter)}]`,c=i?"^":"";for(let d of e)if(typeof d=="string")c+=Kt(n(d));else{let f=Kt(n(d.prefix)),p=Kt(n(d.suffix));if(d.pattern)if(t&&t.push(d),f||p)if(d.modifier==="+"||d.modifier==="*"){let m=d.modifier==="*"?"?":"";c+=`(?:${f}((?:${d.pattern})(?:${p}${f}(?:${d.pattern}))*)${p})${m}`}else c+=`(?:${f}(${d.pattern})${p})${d.modifier}`;else d.modifier==="+"||d.modifier==="*"?c+=`((?:${d.pattern})${d.modifier})`:c+=`(${d.pattern})${d.modifier}`;else c+=`(?:${f}${p})${d.modifier}`}if(s)o||(c+=`${l}?`),c+=r.endsWith?`(?=${a})`:"$";else{let d=e[e.length-1],f=typeof d=="string"?l.indexOf(d[d.length-1])>-1:d===void 0;o||(c+=`(?:${l}(?=${a}))?`),f||(c+=`(?=${l}|${a})`)}return new RegExp(c,Oo(r))}function No(e,t,r){return e instanceof RegExp?cs(e,t):Array.isArray(e)?us(e,t,r):hs(e,t,r)}var wt={delimiter:"",prefixes:"",sensitive:!0,strict:!0},ds={delimiter:".",prefixes:"",sensitive:!0,strict:!0},ps={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};function fs(e,t){return e.length?e[0]==="/"?!0:!t||e.length<2?!1:(e[0]=="\\"||e[0]=="{")&&e[1]=="/":!1}function Do(e,t){return e.startsWith(t)?e.substring(t.length,e.length):e}function ms(e,t){return e.endsWith(t)?e.substr(0,e.length-t.length):e}function Bo(e){return!e||e.length<2?!1:e[0]==="["||(e[0]==="\\"||e[0]==="{")&&e[1]==="["}var Mo=["ftp","file","http","https","ws","wss"];function Vo(e){if(!e)return!0;for(let t of Mo)if(e.test(t))return!0;return!1}function bs(e,t){if(e=Do(e,"#"),t||e==="")return e;let r=new URL("https://example.com");return r.hash=e,r.hash?r.hash.substring(1,r.hash.length):""}function gs(e,t){if(e=Do(e,"?"),t||e==="")return e;let r=new URL("https://example.com");return r.search=e,r.search?r.search.substring(1,r.search.length):""}function vs(e,t){return t||e===""?e:Bo(e)?Ho(e):Fo(e)}function ys(e,t){if(t||e==="")return e;let r=new URL("https://example.com");return r.password=e,r.password}function xs(e,t){if(t||e==="")return e;let r=new URL("https://example.com");return r.username=e,r.username}function ks(e,t,r){if(r||e==="")return e;if(t&&!Mo.includes(t))return new URL(`${t}:${e}`).pathname;let o=e[0]=="/";return e=new URL(o?e:"/-"+e,"https://example.com").pathname,o||(e=e.substring(2,e.length)),e}function _s(e,t,r){return Uo(t)===e&&(e=""),r||e===""?e:qo(e)}function ws(e,t){return e=ms(e,":"),t||e===""?e:pr(e)}function Uo(e){switch(e){case"ws":case"http":return"80";case"wws":case"https":return"443";case"ftp":return"21";default:return""}}function pr(e){if(e==="")return e;if(/^[-+.A-Za-z0-9]*$/.test(e))return e.toLowerCase();throw new TypeError(`Invalid protocol '${e}'.`)}function $s(e){if(e==="")return e;let t=new URL("https://example.com");return t.username=e,t.username}function Ss(e){if(e==="")return e;let t=new URL("https://example.com");return t.password=e,t.password}function Fo(e){if(e==="")return e;if(/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e))throw new TypeError(`Invalid hostname '${e}'`);let t=new URL("https://example.com");return t.hostname=e,t.hostname}function Ho(e){if(e==="")return e;if(/[^0-9a-fA-F[\]:]/g.test(e))throw new TypeError(`Invalid IPv6 hostname '${e}'`);return e.toLowerCase()}function qo(e){if(e===""||/^[0-9]*$/.test(e)&&parseInt(e)<=65535)return e;throw new TypeError(`Invalid port '${e}'.`)}function Cs(e){if(e==="")return e;let t=new URL("https://example.com");return t.pathname=e[0]!=="/"?"/-"+e:e,e[0]!=="/"?t.pathname.substring(2,t.pathname.length):t.pathname}function Es(e){return e===""?e:new URL(`data:${e}`).pathname}function As(e){if(e==="")return e;let t=new URL("https://example.com");return t.search=e,t.search.substring(1,t.search.length)}function Ps(e){if(e==="")return e;let t=new URL("https://example.com");return t.hash=e,t.hash.substring(1,t.hash.length)}var Ts=class{constructor(e){this.tokenList=[],this.internalResult={},this.tokenIndex=0,this.tokenIncrement=1,this.componentStart=0,this.state=0,this.groupDepth=0,this.hostnameIPv6BracketDepth=0,this.shouldTreatAsStandardURL=!1,this.input=e}get result(){return this.internalResult}parse(){for(this.tokenList=Io(this.input,!0);this.tokenIndex<this.tokenList.length;this.tokenIndex+=this.tokenIncrement){if(this.tokenIncrement=1,this.tokenList[this.tokenIndex].type==="END"){if(this.state===0){this.rewind(),this.isHashPrefix()?this.changeState(9,1):this.isSearchPrefix()?(this.changeState(8,1),this.internalResult.hash=""):(this.changeState(7,0),this.internalResult.search="",this.internalResult.hash="");continue}else if(this.state===2){this.rewindAndSetState(5);continue}this.changeState(10,0);break}if(this.groupDepth>0)if(this.isGroupClose())this.groupDepth-=1;else continue;if(this.isGroupOpen()){this.groupDepth+=1;continue}switch(this.state){case 0:this.isProtocolSuffix()&&(this.internalResult.username="",this.internalResult.password="",this.internalResult.hostname="",this.internalResult.port="",this.internalResult.pathname="",this.internalResult.search="",this.internalResult.hash="",this.rewindAndSetState(1));break;case 1:if(this.isProtocolSuffix()){this.computeShouldTreatAsStandardURL();let e=7,t=1;this.shouldTreatAsStandardURL&&(this.internalResult.pathname="/"),this.nextIsAuthoritySlashes()?(e=2,t=3):this.shouldTreatAsStandardURL&&(e=2),this.changeState(e,t)}break;case 2:this.isIdentityTerminator()?this.rewindAndSetState(3):(this.isPathnameStart()||this.isSearchPrefix()||this.isHashPrefix())&&this.rewindAndSetState(5);break;case 3:this.isPasswordPrefix()?this.changeState(4,1):this.isIdentityTerminator()&&this.changeState(5,1);break;case 4:this.isIdentityTerminator()&&this.changeState(5,1);break;case 5:this.isIPv6Open()?this.hostnameIPv6BracketDepth+=1:this.isIPv6Close()&&(this.hostnameIPv6BracketDepth-=1),this.isPortPrefix()&&!this.hostnameIPv6BracketDepth?this.changeState(6,1):this.isPathnameStart()?this.changeState(7,0):this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 6:this.isPathnameStart()?this.changeState(7,0):this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 7:this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 8:this.isHashPrefix()&&this.changeState(9,1);break;case 9:break;case 10:break}}}changeState(e,t){switch(this.state){case 0:break;case 1:this.internalResult.protocol=this.makeComponentString();break;case 2:break;case 3:this.internalResult.username=this.makeComponentString();break;case 4:this.internalResult.password=this.makeComponentString();break;case 5:this.internalResult.hostname=this.makeComponentString();break;case 6:this.internalResult.port=this.makeComponentString();break;case 7:this.internalResult.pathname=this.makeComponentString();break;case 8:this.internalResult.search=this.makeComponentString();break;case 9:this.internalResult.hash=this.makeComponentString();break;case 10:break}this.changeStateWithoutSettingComponent(e,t)}changeStateWithoutSettingComponent(e,t){this.state=e,this.componentStart=this.tokenIndex+t,this.tokenIndex+=t,this.tokenIncrement=0}rewind(){this.tokenIndex=this.componentStart,this.tokenIncrement=0}rewindAndSetState(e){this.rewind(),this.state=e}safeToken(e){return e<0&&(e=this.tokenList.length-e),e<this.tokenList.length?this.tokenList[e]:this.tokenList[this.tokenList.length-1]}isNonSpecialPatternChar(e,t){let r=this.safeToken(e);return r.value===t&&(r.type==="CHAR"||r.type==="ESCAPED_CHAR"||r.type==="INVALID_CHAR")}isProtocolSuffix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}nextIsAuthoritySlashes(){return this.isNonSpecialPatternChar(this.tokenIndex+1,"/")&&this.isNonSpecialPatternChar(this.tokenIndex+2,"/")}isIdentityTerminator(){return this.isNonSpecialPatternChar(this.tokenIndex,"@")}isPasswordPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}isPortPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}isPathnameStart(){return this.isNonSpecialPatternChar(this.tokenIndex,"/")}isSearchPrefix(){if(this.isNonSpecialPatternChar(this.tokenIndex,"?"))return!0;if(this.tokenList[this.tokenIndex].value!=="?")return!1;let e=this.safeToken(this.tokenIndex-1);return e.type!=="NAME"&&e.type!=="PATTERN"&&e.type!=="CLOSE"&&e.type!=="ASTERISK"}isHashPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,"#")}isGroupOpen(){return this.tokenList[this.tokenIndex].type=="OPEN"}isGroupClose(){return this.tokenList[this.tokenIndex].type=="CLOSE"}isIPv6Open(){return this.isNonSpecialPatternChar(this.tokenIndex,"[")}isIPv6Close(){return this.isNonSpecialPatternChar(this.tokenIndex,"]")}makeComponentString(){let e=this.tokenList[this.tokenIndex],t=this.safeToken(this.componentStart).index;return this.input.substring(t,e.index)}computeShouldTreatAsStandardURL(){let e={};Object.assign(e,wt),e.encodePart=pr;let t=No(this.makeComponentString(),void 0,e);this.shouldTreatAsStandardURL=Vo(t)}},dr=["protocol","username","password","hostname","port","pathname","search","hash"],_t="*";function jo(e,t){if(typeof e!="string")throw new TypeError("parameter 1 is not of type 'string'.");let r=new URL(e,t);return{protocol:r.protocol.substring(0,r.protocol.length-1),username:r.username,password:r.password,hostname:r.hostname,port:r.port,pathname:r.pathname,search:r.search!=""?r.search.substring(1,r.search.length):void 0,hash:r.hash!=""?r.hash.substring(1,r.hash.length):void 0}}function gt(e,t){return t?Wt(e):e}function ue(e,t,r){let o;if(typeof t.baseURL=="string")try{o=new URL(t.baseURL),e.protocol=gt(o.protocol.substring(0,o.protocol.length-1),r),e.username=gt(o.username,r),e.password=gt(o.password,r),e.hostname=gt(o.hostname,r),e.port=gt(o.port,r),e.pathname=gt(o.pathname,r),e.search=gt(o.search.substring(1,o.search.length),r),e.hash=gt(o.hash.substring(1,o.hash.length),r)}catch{throw new TypeError(`invalid baseURL '${t.baseURL}'.`)}if(typeof t.protocol=="string"&&(e.protocol=ws(t.protocol,r)),typeof t.username=="string"&&(e.username=xs(t.username,r)),typeof t.password=="string"&&(e.password=ys(t.password,r)),typeof t.hostname=="string"&&(e.hostname=vs(t.hostname,r)),typeof t.port=="string"&&(e.port=_s(t.port,e.protocol,r)),typeof t.pathname=="string"){if(e.pathname=t.pathname,o&&!fs(e.pathname,r)){let i=o.pathname.lastIndexOf("/");i>=0&&(e.pathname=gt(o.pathname.substring(0,i+1),r)+e.pathname)}e.pathname=ks(e.pathname,e.protocol,r)}return typeof t.search=="string"&&(e.search=gs(t.search,r)),typeof t.hash=="string"&&(e.hash=bs(t.hash,r)),e}function Wt(e){return e.replace(/([+*?:{}()\\])/g,"\\$1")}function Rs(e){return e.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function js(e,t){let r=".*",o=`[^${Rs(t.delimiter===void 0?"/#?":t.delimiter)}]+?`,i=/[$_\u200C\u200D\p{ID_Continue}]/u,s="";for(let n=0;n<e.length;++n){let a=e[n],l=n>0?e[n-1]:null,c=n<e.length-1?e[n+1]:null;if(typeof a=="string"){s+=Wt(a);continue}if(a.pattern===""){if(a.modifier===""){s+=Wt(a.prefix);continue}s+=`{${Wt(a.prefix)}}${a.modifier}`;continue}let d=typeof a.name!="number",f=t.prefixes!==void 0?t.prefixes:"./",p=a.suffix!==""||a.prefix!==""&&(a.prefix.length!==1||!f.includes(a.prefix));if(!p&&d&&a.pattern===o&&a.modifier===""&&c&&!c.prefix&&!c.suffix)if(typeof c=="string"){let m=c.length>0?c[0]:"";p=i.test(m)}else p=typeof c.name=="number";if(!p&&a.prefix===""&&l&&typeof l=="string"&&l.length>0){let m=l[l.length-1];p=f.includes(m)}p&&(s+="{"),s+=Wt(a.prefix),d&&(s+=`:${a.name}`),a.pattern===r?!d&&(!l||typeof l=="string"||l.modifier||p||a.prefix!=="")?s+="*":s+=`(${r})`:a.pattern===o?d||(s+=`(${o})`):s+=`(${a.pattern})`,a.pattern===o&&d&&a.suffix!==""&&i.test(a.suffix[0])&&(s+="\\"),s+=Wt(a.suffix),p&&(s+="}"),s+=a.modifier}return s}var Ko=class{constructor(e={},t,r){this.regexp={},this.keys={},this.component_pattern={};try{let o;if(typeof t=="string"?o=t:r=t,typeof e=="string"){let a=new Ts(e);if(a.parse(),e=a.result,o===void 0&&typeof e.protocol!="string")throw new TypeError("A base URL must be provided for a relative constructor string.");e.baseURL=o}else{if(!e||typeof e!="object")throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");if(o)throw new TypeError("parameter 1 is not of type 'string'.")}typeof r>"u"&&(r={ignoreCase:!1});let i={ignoreCase:r.ignoreCase===!0},s={pathname:_t,protocol:_t,username:_t,password:_t,hostname:_t,port:_t,search:_t,hash:_t};this.pattern=ue(s,e,!0),Uo(this.pattern.protocol)===this.pattern.port&&(this.pattern.port="");let n;for(n of dr){if(!(n in this.pattern))continue;let a={},l=this.pattern[n];switch(this.keys[n]=[],n){case"protocol":Object.assign(a,wt),a.encodePart=pr;break;case"username":Object.assign(a,wt),a.encodePart=$s;break;case"password":Object.assign(a,wt),a.encodePart=Ss;break;case"hostname":Object.assign(a,ds),Bo(l)?a.encodePart=Ho:a.encodePart=Fo;break;case"port":Object.assign(a,wt),a.encodePart=qo;break;case"pathname":Vo(this.regexp.protocol)?(Object.assign(a,ps,i),a.encodePart=Cs):(Object.assign(a,wt,i),a.encodePart=Es);break;case"search":Object.assign(a,wt,i),a.encodePart=As;break;case"hash":Object.assign(a,wt,i),a.encodePart=Ps;break}try{let c=Lo(l,a);this.regexp[n]=zo(c,this.keys[n],a),this.component_pattern[n]=js(c,a)}catch{throw new TypeError(`invalid ${n} pattern '${this.pattern[n]}'.`)}}}catch(o){throw new TypeError(`Failed to construct 'URLPattern': ${o.message}`)}}test(e={},t){let r={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof e!="string"&&t)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof e>"u")return!1;try{typeof e=="object"?r=ue(r,e,!1):r=ue(r,jo(e,t),!1)}catch{return!1}let o;for(o of dr)if(!this.regexp[o].exec(r[o]))return!1;return!0}exec(e={},t){let r={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof e!="string"&&t)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof e>"u")return;try{typeof e=="object"?r=ue(r,e,!1):r=ue(r,jo(e,t),!1)}catch{return null}let o={};t?o.inputs=[e,t]:o.inputs=[e];let i;for(i of dr){let s=this.regexp[i].exec(r[i]);if(!s)return null;let n={};for(let[a,l]of this.keys[i].entries())if(typeof l.name=="string"||typeof l.name=="number"){let c=s[a+1];n[l.name]=c}o[i]={input:r[i]||"",groups:n}}return o}get protocol(){return this.component_pattern.protocol}get username(){return this.component_pattern.username}get password(){return this.component_pattern.password}get hostname(){return this.component_pattern.hostname}get port(){return this.component_pattern.port}get pathname(){return this.component_pattern.pathname}get search(){return this.component_pattern.search}get hash(){return this.component_pattern.hash}};globalThis.URLPattern||(globalThis.URLPattern=Ko);var Wo=new WeakMap,Jo=e=>{if((r=>r.pattern!==void 0)(e))return e.pattern;let t=Wo.get(e);return t===void 0&&Wo.set(e,t=new URLPattern({pathname:e.path})),t},he=class{constructor(t,r,o){this.routes=[],this.o=[],this.t={},this.i=i=>{if(i.routes===this)return;let s=i.routes;this.o.push(s),s.l=this,i.stopImmediatePropagation(),i.onDisconnect=()=>{var a;(a=this.o)===null||a===void 0||a.splice(this.o.indexOf(s)>>>0,1)};let n=Xo(this.t);n!==void 0&&s.goto(n)},(this.h=t).addController(this),this.routes=[...r],this.fallback=o?.fallback}link(t){var r,o;if(t?.startsWith("/"))return t;if(t?.startsWith("."))throw Error("Not implemented");return t!=null||(t=this.u),((o=(r=this.l)===null||r===void 0?void 0:r.link())!==null&&o!==void 0?o:"")+t}async goto(t){var r;let o;if(this.routes.length===0&&this.fallback===void 0)o=t,this.u="",this.t={0:o};else{let i=this.v(t);if(i===void 0)throw Error("No route found for "+t);let s=Jo(i).exec({pathname:t}),n=(r=s?.pathname.groups)!==null&&r!==void 0?r:{};if(o=Xo(n),typeof i.enter=="function"&&await i.enter(n)===!1)return;this.p=i,this.t=n,this.u=o===void 0?t:t.substring(0,t.length-o.length)}if(o!==void 0)for(let i of this.o)i.goto(o);this.h.requestUpdate()}outlet(){var t,r;return(r=(t=this.p)===null||t===void 0?void 0:t.render)===null||r===void 0?void 0:r.call(t,this.t)}get params(){return this.t}v(t){let r=this.routes.find(o=>Jo(o).test({pathname:t}));return r||this.fallback===void 0?r:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.h.addEventListener($t.eventName,this.i);let t=new $t(this);this.h.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){var t;(t=this._)===null||t===void 0||t.call(this),this.l=void 0}},Xo=e=>{let t;for(let r of Object.keys(e))/\d+/.test(r)&&(t===void 0||r>t)&&(t=r);return t&&e[t]},$t=class extends Event{constructor(t){super($t.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}};$t.eventName="lit-routes-connected";var Is=location.origin||location.protocol+"//"+location.host,de=class extends he{constructor(){super(...arguments),this.m=t=>{let r=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||r)return;let o=t.composedPath().find(n=>n.tagName==="A");if(o===void 0||o.target!==""||o.hasAttribute("download")||o.getAttribute("rel")==="external")return;let i=o.href;if(i===""||i.startsWith("mailto:"))return;let s=window.location;o.origin===Is&&(t.preventDefault(),i!==s.href&&(window.history.pushState({},"",i),this.goto(o.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}};var Jt=class extends Event{constructor(t,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=r,this.subscribe=o}};var pe=class{constructor(t,r,o,i){var s;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=t,r.context!==void 0){let n=r;this.context=n.context,this.callback=n.callback,this.subscribe=(s=n.subscribe)!==null&&s!==void 0&&s}else this.context=r,this.callback=o,this.subscribe=i!=null&&i;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Jt(this.context,this.t,this.subscribe))}};var Me=class{constructor(t){this.callbacks=new Map,this.updateObservers=()=>{for(let[r,o]of this.callbacks)r(this.o,o)},t!==void 0&&(this.value=t)}get value(){return this.o}set value(t){this.setValue(t)}setValue(t,r=!1){let o=r||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}addCallback(t,r){r&&(this.callbacks.has(t)||this.callbacks.set(t,()=>{this.callbacks.delete(t)})),t(this.value)}clearCallbacks(){this.callbacks.clear()}};var fr=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,Object.setPrototypeOf(this,new.target.prototype)}},fe=class extends Me{constructor(t,r,o){super(r.context!==void 0?r.initialValue:o),this.onContextRequest=i=>{i.context===this.context&&i.composedPath()[0]!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,i.subscribe))},this.host=t,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new fr(this.context))}};function Ve({context:e}){return st({finisher:(t,r)=>{let o=new WeakMap;t.addInitializer(a=>{o.set(a,new fe(a,{context:e}))});let i=Object.getOwnPropertyDescriptor(t.prototype,r),s=i?.set,n={...i,set:function(a){var l;(l=o.get(this))===null||l===void 0||l.setValue(a),s&&s.call(this,a)}};Object.defineProperty(t.prototype,r,n)}})}function Xt({context:e,subscribe:t}){return st({finisher:(r,o)=>{r.addInitializer(i=>{new pe(i,{context:e,callback:s=>{i[o]=s},subscribe:t})})}})}var Yt="ix-db";var Yo=e=>e.split("|||").map(t=>t.split("||").map(Os)),Os=e=>e.replace(/\d+\|/g,t=>`||${t}`).substr(2).split("||").map(t=>{let[r,o]=t.split("|");return{n:r,txt:o}});var zs=(e,t)=>e.concat(t.filter(r=>e.indexOf(r)===-1)),Ns=(e,t)=>e.length?e.map((r,o)=>zs(r,t[o])):[...t],Go=e=>e?e.length===1?[...e[0]]:e.reduce((t,r)=>Ns(t,r),[]):[],Rt=["ge","ex","le","nu","de","jos","jud","ru","1sa","2sa","1ki","2ki","1ch","2ch","ezr","ne","es","job","ps","pr","ec","so","isa","jer","la","eze","da","ho","joe","am","ob","jon","mic","na","hab","zep","hag","zec","mal","mt","mr","lu","joh","ac","ro","1co","2co","ga","eph","php","col","1th","2th","1ti","2ti","tit","phm","heb","jas","1pe","2pe","1jo","2jo","3jo","jude","re"];var mr=Rt.map(e=>[e]),Ds=e=>e.reduce((t,r)=>(r.forEach(o=>t[o]=r[0]),t),{}),Bs=e=>e.reduce((t,r,o)=>(r.forEach(i=>t[i]=Rt[o]),t),{}),br=e=>{let t=Ds(e);return r=>t[r&&r.toLowerCase()]||""},gr=e=>{let t=Bs(e);return r=>t[r&&r.toLowerCase()]||""};function vr(e){let t=Go([...e,mr]),r=br(t),o=gr(t),i=t.map(A=>A.join("|")).join("|"),s="\\d{1,3}",n="\\d{1,3}",a=new RegExp(`^(${i})\\s*(${s})[ ]*:[ ]*(${n})\\b`),l=new RegExp(`^(${i})[ ]*(${s})\\b`),c=new RegExp(`^(?:${i})$`),d=new RegExp(`(^|,|;)(${i})`,"g"),f=new RegExp(`,(${i})`,"g"),p=new RegExp(`(${i})(\\d)`,"g"),m=new RegExp(`^(${s})[ ]*:[ ]*(${n})\\b`),k=new RegExp(`^(?:${i})[ ]*ff`),_=new RegExp(`^(${i})(\\d|$)`,"g");function E(A,w,b){let y,j={};return A===""?{}:w?(b.book&&b.chapter&&b.verse?j={book:b.book,chapter:b.chapter}:b.book&&b.chapter&&(j={book:b.book}),j):A===void 0?vt({},b):((y=A.match(a))?j={book:r(y[1]),chapter:y[2],verse:y[3]}:(y=A.match(l))?j={book:r(y[1]),chapter:y[2]}:(y=A.match(c))?j={book:r(y[0])}:(y=A.match(m))?j={book:b.book,chapter:y[1],verse:y[2]}:(y=A.match(/(\d{1,3}\b)/))?b.verse?j={book:b.book,chapter:b.chapter,verse:y[1]}:j={book:b.book,chapter:y[1]}:j=vt({},b),j)}function z(A,w){let b,y,j=!1,[it,er]=A.split("-").map(Zr=>Zr.trim().toLowerCase());return(/\d{1,3}[ ]*ff$/i.test(it)||k.test(it))&&(it=it.replace(/[ ]*ff$/,""),j=!0),(b=it.match(a))?(y={book:r(b[1]),chapter:b[2],verse:b[3]},w=vt({},y)):(b=it.match(l))?(y={book:r(b[1]),chapter:b[2],verse:"1"},w={book:y.book,chapter:y.chapter}):(b=it.match(c))?(y={book:r(b[0]),chapter:"1",verse:"1"},w={book:y.book}):(b=it.match(m))?(y={book:w.book,chapter:b[1],verse:b[2]},w=vt({},y)):(b=it.match(/(\d{1,3}\b)/))&&(w.verse?(y={book:w.book,chapter:w.chapter,verse:b[1]},w=vt({},y)):(y={book:w.book,chapter:b[1],verse:"1"},w={book:y.book,chapter:y.chapter})),{start:y,end:E(er,j,w),ctx:w}}let K=A=>{let{ranges:w}=A.split(/[,\n;]+/g).reduce((b,y)=>{let j=z(y,b.ctx);return b.ctx=j.ctx,j.start&&b.ranges.push({start:j.start,end:j.end}),b},{ctx:{book:"genesis"},ranges:[]});return w},ot=A=>A.toLowerCase().replace(/\n+/g,";").replace(/\s/g,"").split(";").reduce((w,b)=>[...w,b.split(",").reduce((y,j)=>{let it=j.split("-").map(er=>er.replace(_,(Zr,Wi,Ji)=>`${o(Wi)}${Ji||""}`)).join("-");return[...y,it]},[])],[]).join(";"),Ce=A=>A.toLowerCase().replace(d,(w,b,y)=>`${b}${r(y)}`).replace(f,(w,b)=>`, ${b}`).replace(p,(w,b,y)=>`${b} ${y}`).replace(/;/g,`
`);this.getVerseRanges=K,this.bookNames=t,this.normaliseBookName=r,this.normaliseBookNameShort=o,this.partToRange=z,this.compressRangesText=ot,this.uncompressRangesText=Ce}var Zo=vr;var me={key:"af",displayname:"afrikaans",abbreviations:[["Genesis","gen","ge","gn"],["Eksodus","eks","ek"],["Levitikus","lev","le","lv"],["Numeri","num","nu","nm"],["Deuteronomium","deut","dt"],["Josua","jos","js"],["Rigters","rig"],["Rut","rt"],["1 Samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","een samuel"],["2 Samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","twee samuel"],["1 Konings","1 kon","i kgs","1kgs","i kon","1kon","i konings","1konings","een konings","een kon","een kgs"],["2 Konings","2 kon","2 kgs","ii kgs","2kgs","ii kon","2kon","ii konings","2konings","2nd kgs","2nd kings","twee konings","twee kon","twee kgs"],["1 Kronieke","1 kron","1 kr","i kr","1kr","1 krn","i krn","1krn","i kron","1kron","i kronieke","1kronieke","een kronieke"],["2 Kronieke","2 kron","2 kr","ii kr","2kr","2 krn","ii krn","2krn","ii kron","2kron","ii kronieke","2kronieke","twee kronieke"],["Esra","esra","esr"],["Nehemia","neh","ne"],["Ester","est","es"],["Job","job","job","jb"],["Psalm","pslm","ps","psalms","psa","psm","pss"],["Spreuke","spr","sp"],["Prediker","pred","pre"],["Hooglied van Salomo","hooglied","hoog","salomo","sal","hvs","hs"],["Jesaja","jes","js"],["Jeremia","jer","je","jr"],["Klaagliedere van Jeremia","klaaglied","klaag","klj"],["Esegi\xEBl","eseg","ese","esg"],["Daniel","dan","da","dn"],["Hosea","hos","ho"],["Jo\xEBl","joel","joe","jl"],["Amos","amos","am"],["Obadja","obad","ob"],["Jona","jnh","jon"],["Miga","mig","mg"],["Nahum","nah","na"],["Habakuk","hab","hb"],["Sefanja","sefan","sef","sf"],["Haggai","hag","hg"],["Sagaria","sag","sg"],["Maleagi","mal","ml"],["Mattheus","matt","mat","mt"],["Markus","mark","mar","mrk","mk","mr"],["Lukas","luk","lk"],["Johannes","john","joh","jhn","jh","jn"],["Handelinge","han","hand","hd"],["Romeine","rom","ro","rm"],["1 Korinthi\xEBrs","1 korinte","1 kor","1 ko","i ko","1ko","i kor","1kor","i korinthiers","1korinthiers","een korinthiers"],["2 Korinthi\xEBrs","2 korinte","2 kor","2 ko","i ko","2ko","ii kor","2kor","ii korinthiers","2korinthiers","twee korinthiers"],["Galasi\xEBrs","gal","ga"],["Efesi\xEBrs","efes","efe","ef"],["Filippense","filp","fil","flp","fl"],["Kolossense","kol","kl"],["1 Thessalonicense","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonicense","1thessalonicense","een thessalonicense","eerste thessalonicense"],["2 Thessalonicense","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonicense","2thessalonicense","twee thessalonicense","tweede thessalonicense"],["1 Timotheus","1 tim","1 ti","i ti","1ti","i tim","1tim","i timotheus","1timotheus","een timotheus","eerste timotheus"],["2 Timotheus","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timotheus","2timotheus","twee timotheus","tweede timotheus"],["Titus","titus","tit"],["Fil\xE9mon","filem","file","flm"],["Hebre\xEBrs","heb"],["Jakobus","jak","jk"],["1 Petrus","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i petrus","1petrus","een petrus","eerste petrus"],["2 Petrus","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii petrus","2petrus","twee petrus","tweede petrus"],["1 Johannes","1 jn","i jn","1jn","i jo","1jo","i joh","1 joh","1joh","i jhn","1 jhn","1jhn","i johannes","1johannes","een johannes","eerste johannes"],["2 Johannes","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2 joh","2joh","ii jhn","2 jhn","2jhn","ii johannes","2johannes","twee johannes","tweede johannes"],["3 Johannes","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii johannes","3johannes","drie johannes","derde johannes"],["Judas","jd"],["Openbaring","open","opb","op","die openbaring"]]};var yr={key:"en",displayname:"english",abbreviations:[["genesis","gen","ge","gn"],["exodus","exo","ex","exod"],["leviticus","lev","le","lv"],["numbers","num","nu","nm","nb"],["deuteronomy","deut","dt"],["joshua","josh","jos","jsh"],["judges","judg","jdg","jg","jdgs"],["ruth","rth","ru"],["1 samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","1st samuel","first samuel"],["2 samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","2nd samuel","second samuel"],["1 kings","1 kgs","1 ki","1k","i kgs","1kgs","i ki","1ki","i kings","1kings","1st kgs","1st kings","first kings","first kgs","1kin"],["2 kings","2 kgs","2 ki","2k","ii kgs","2kgs","ii ki","2ki","ii kings","2kings","2nd kgs","2nd kings","second kings","second kgs","2kin"],["1 chronicles","1 chron","1 ch","i ch","1ch","1 chr","i chr","1chr","i chron","1chron","i chronicles","1chronicles","1st chronicles","first chronicles"],["2 chronicles","2 chron","2 ch","ii ch","2ch","ii chr","2chr","ii chron","2chron","ii chronicles","2chronicles","2nd chronicles","second chronicles"],["ezra","ezra","ezr"],["nehemiah","neh","ne"],["esther","esth","es"],["job","job","job","jb"],["psalm","pslm","ps","psalms","psa","psm","pss"],["proverbs","prov","pr","prv"],["ecclesiastes","eccles","ec","qoh","qoheleth"],["song of solomon","song","so","canticle of canticles","canticles","song of songs","sos"],["isaiah","isa","is"],["jeremiah","jer","je","jr"],["lamentations","lam","la"],["ezekiel","ezek","eze","ezk"],["daniel","dan","da","dn"],["hosea","hos","ho"],["joel","joel","joe","jl"],["amos","amos","am"],["obadiah","obad","ob"],["jonah","jnh","jon"],["micah","micah","mic"],["nahum","nah","na"],["habakkuk","hab","hab"],["zephaniah","zeph","zep","zp"],["haggai","hag","hg"],["zechariah","zech","zec","zc"],["malachi","mal","mal","ml"],["matthew","matt","mt"],["mark","mrk","mk","mr"],["luke","luk","lk"],["john","john","jn","jhn"],["acts","acts","ac"],["romans","rom","ro","rm"],["1 corinthians","1 cor","1 co","i co","1co","i cor","1cor","i corinthians","1corinthians","1st corinthians","first corinthians"],["2 corinthians","2 cor","2 co","ii co","2co","ii cor","2cor","ii corinthians","2corinthians","2nd corinthians","second corinthians"],["galatians","gal","ga"],["ephesians","ephes","eph"],["philippians","phil","php"],["colossians","col","col"],["1 thessalonians","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonians","1thessalonians","1st thessalonians","first thessalonians"],["2 thessalonians","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonians","2thessalonians","2nd thessalonians","second thessalonians"],["1 timothy","1 tim","1 ti","i ti","1ti","i tim","1tim","i timothy","1timothy","1st timothy","first timothy"],["2 timothy","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timothy","2timothy","2nd timothy","second timothy"],["titus","titus","tit"],["philemon","philem","phm"],["hebrews","hebrews","heb"],["james","james","jas","jm"],["1 peter","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i peter","1peter","1st peter","first peter"],["2 peter","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii peter","2peter","2nd peter","second peter"],["1 john","1 jn","i jn","1jn","i jo","1jo","i joh","1joh","i jhn","1 jhn","1jhn","i john","1john","1st john","first john"],["2 john","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2joh","ii jhn","2 jhn","2jhn","ii john","2john","2nd john","second john"],["3 john","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii john","3john","3rd john","third john"],["jude","jd"],["revelation","rev","re","the revelation"]]};var N,O,Zt,W,Gt,ct,ti=(e,t,r)=>{Gt=jt(t),ct=jt(r);let o=/^\[([\d]*):([[\d]*):([\d])*\]$/,i=e.match(o);if(i)N=parseInt(i[1]),O=parseInt(i[2]),Zt=parseInt(i[3]);else{let s=e.split(":");N=parseInt(s[0]),O=parseInt(s[1]),Zt=parseInt(s[2])}switch(N){case 15:case 18:Ms();break;case 1:case 20:case 22:case 26:case 32:case 27:Qo();break;case 8:Qo();break;default:W=Zt}return i?`[${N}:${O}:${W}]`:`${N}:${O}:${W}`};function Ms(){let e=ct.last.books[N].chapters[O].verse-Gt.last.books[N].chapters[O].verse;W=Zt+e,e<0?W=W<1?0:W:W=W>ct.last.books[N].chapters[O].verse?ct.last.books[N].chapters[O].verse:W}function Qo(){if(W=Zt,ct.last.books[N].chapters[O].verse!==Gt.last.books[N].chapters[O].verse){let e=!1,t=!1;O-1>=0&&ct.last.books[N].chapters[O-1].verse!==Gt.last.books[N].chapters[O-1].verse&&(t=!0),O+1<=ct.last.books[N].chapter&&ct.last.books[N].chapters[O+1].verse!==Gt.last.books[N].chapters[O+1].verse&&(e=!0),e&&W>ct.last.books[N].chapters[O].verse&&(W=1,O=O+1),t&&ct.last.books[N].chapters[O].verse>Gt.last.books[N].chapters[O].verse&&(W=Zt+1)}}var kr=ti,Vs=new Zo([me,yr].map(({abbreviations:e})=>e)),{bookNames:ri,getVerseRanges:Us}=Vs,ei=ri.reduce((e,t,r)=>(e[t[0]]=r,e),{}),Fs=ri.reduce((e,t,r)=>(e[r]=t[0],e),{}),Ue={},oi=(e,t)=>{Ue[e]=Hs(t)},jt=e=>Ue[e],Hs=e=>{let t=[],r={},o={book:0,books:{}};return e.forEach((i,s)=>{o.book=s,o.books[s]={chapter:0,chapters:{}},i.forEach((n,a)=>{o.books[s].chapter=a,o.books[s].chapters[a]={verse:0},n.forEach(l=>{o.books[s].chapters[a].verse=+l.n,r[`${s}:${a}:${l.n}`]=t.length,t.push({hash:`${s}:${a}:${l.n}`,text:l.txt})})})}),{verseList:t,verseLookUp:r,last:o}},qs=(e,t)=>{let{start:r,end:o}=t,i=jt(e);if(!i)return{};let s=i.verseLookUp[`${ei[r.book]}:${r.chapter-1}:${r.verse}`],n=i.last.book,a=xr(ei[o.book],n),l=i.last.books[a].chapter,c=xr(o.chapter&&o.chapter-1,l),d=i.last.books[a].chapters[c].verse,f=xr(o.verse,d),p=i.verseLookUp[`${a}:${c}:${f}`];return{start:ro(vt({},r),{index:s}),end:{book:Ks(a),chapter:`${c+1}`,verse:`${f}`,index:p}}},xr=(e,t)=>e===void 0||e>t?t:e,Ks=e=>Fs[e],Ws=e=>{let t=e.split(":");return{book:Rt[+t[0]],chapter:`${+t[1]+1}`,verse:t[2]}},ii=({rangesText:e,versionName:t})=>Us(e||"gen - rev").map(i=>qs(t,i)),Js=(e,t)=>Ue[e].verseLookUp[t],Xs=(e,t)=>Ue[e].verseList[t],_r=(e,t)=>{let r=Js(e,t),o=Xs(e,r);return{text:o?o.text:"",prettyRef:Qs(Ws(t))}},Ys=(e,t)=>{let r=[];for(let o=e;o<=t;o++)r.push(o);return r},Gs=(e,t,r)=>Ys(t,r).map(o=>jt(e).verseList[o].hash),si=(e,t)=>{let r=[],o=t.map(({start:i,end:s})=>Gs(e,i.index,s.index));return r.concat(...o)},Zs=e=>e.replace(/\b\w/g,t=>t.toUpperCase()),Qs=({book:e,chapter:t,verse:r})=>`${Zs(e)} ${t}:${r}`;var be={},wr=(e,t)=>(be[e]||(be[e]=fetch(t).then(r=>{if(r.status>=400)throw delete be[e],new Error("Bad res from server");return r.text()}).then(r=>{let o=Yo(r);return oi(e,o),o})),be[e]);var Fe="",ai=async e=>{if(Fe)return ni(Fe);let t=await fetch(e);if(!t.ok)throw new Error("Bad res from server");return Fe=await t.text(),ni(Fe)},ni=e=>{let t=e.split(`
`);return t.splice(0,1),t.map(tn)},tn=e=>{let[t,r,o,i,s,n]=e.split("	"),a=t+"-"+r+"-"+o+":"+i,l=t+"-"+r+"-"+o;return{key:a,verse:l,sort:i,words:s,refs:n}};function $r(e){let[t,r,o]=e.split(":");return`${parseInt(t)+1}-${parseInt(r)+1}-${o}`}var It="/bybel";var en=Object.defineProperty;var rn=Object.getOwnPropertyDescriptor;var u=(e,t,r,o)=>{for(var i=o>1?void 0:o?rn(t,r):t,s=e.length-1,n;s>=0;s--)(n=e[s])&&(i=(o?n(t,r,i):n(i))||i);return o&&i&&en(t,r,i),i};var V=xt(class extends lt{constructor(e){var t;if(super(e),e.type!==J.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in t)t[s]&&!(!((r=this.nt)===null||r===void 0)&&r.has(s))&&this.it.add(s);return this.render(t)}let i=e.element.classList;this.it.forEach(s=>{s in t||(i.remove(s),this.it.delete(s))});for(let s in t){let n=!!t[s];n===this.it.has(s)||!((o=this.nt)===null||o===void 0)&&o.has(s)||(n?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return D}});var li=function(e,t,r,o){var i=arguments.length,s=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},L=class extends H{emit(t,r){let o=new CustomEvent(t,Object.assign({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return this.dispatchEvent(o),o}};li([h()],L.prototype,"dir",void 0);li([h()],L.prototype,"lang",void 0);var B=S`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var ci=S`
  ${B}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;var Qt=class extends L{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return g`
      <slot
        part="base"
        class=${V({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      ></slot>
    `}};Qt.styles=ci;u([h({reflect:!0})],Qt.prototype,"variant",2);u([h({type:Boolean,reflect:!0})],Qt.prototype,"pill",2);u([h({type:Boolean,reflect:!0})],Qt.prototype,"pulse",2);Qt=u([T("sl-badge")],Qt);var Sr="";function He(e){Sr=e}function ui(e=""){if(!Sr){let t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)He(r.getAttribute("data-shoelace"));else{let o=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src)),i="";o&&(i=o.getAttribute("src")),He(i.split("/").slice(0,-1).join("/"))}}return Sr.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var on={name:"default",resolver:e=>ui(`assets/icons/${e}.svg`)},hi=on;var di={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},sn={name:"system",resolver:e=>e in di?`data:image/svg+xml,${encodeURIComponent(di[e])}`:""},pi=sn;var nn=[hi,pi],Cr=[];function fi(e){Cr.push(e)}function mi(e){Cr=Cr.filter(t=>t!==e)}function Er(e){return nn.find(t=>t.name===e)}function U(e,t){let r=Object.assign({waitUntilFirstUpdate:!1},t);return(o,i)=>{let{update:s}=o,n=Array.isArray(e)?e:[e];o.update=function(a){n.forEach(l=>{let c=l;if(a.has(c)){let d=a.get(c),f=this[c];d!==f&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](d,f)}}),s.call(this,a)}}}var bi=S`
  ${B}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;var ge=Symbol(),qe=Symbol(),Ar,Pr=new Map,ut=class extends L{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t?.spriteSheet)return g`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?ge:qe}catch{return qe}try{let i=document.createElement("div");i.innerHTML=await o.text();let s=i.firstElementChild;if(((r=s?.tagName)==null?void 0:r.toLowerCase())!=="svg")return ge;Ar||(Ar=new DOMParser);let a=Ar.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ge}catch{return ge}}connectedCallback(){super.connectedCallback(),fi(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),mi(this)}getUrl(){let e=Er(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;let t=Er(this.library),r=this.getUrl();if(!r){this.svg=null;return}let o=Pr.get(r);if(o||(o=this.resolveIcon(r,t),Pr.set(r,o)),!this.initialRender)return;let i=await o;if(i===qe&&Pr.delete(r),r===this.getUrl()){if(Co(i)){this.svg=i;return}switch(i){case qe:case ge:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=t?.mutator)==null||e.call(t,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ut.styles=bi;u([R()],ut.prototype,"svg",2);u([h({reflect:!0})],ut.prototype,"name",2);u([h()],ut.prototype,"src",2);u([h()],ut.prototype,"label",2);u([h({reflect:!0})],ut.prototype,"library",2);u([U("label")],ut.prototype,"handleLabelChange",1);u([U(["name","src","library"])],ut.prototype,"setIcon",1);ut=u([T("sl-icon")],ut);var Tr=new Set,an=new MutationObserver(yi),te=new Map,gi=document.documentElement.dir||"ltr",vi=document.documentElement.lang||navigator.language,Lt;an.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Rr(...e){e.map(t=>{let r=t.$code.toLowerCase();te.has(r)?te.set(r,Object.assign(Object.assign({},te.get(r)),t)):te.set(r,t),Lt||(Lt=t)}),yi()}function yi(){gi=document.documentElement.dir||"ltr",vi=document.documentElement.lang||navigator.language,[...Tr.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Ke=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Tr.add(this.host)}hostDisconnected(){Tr.delete(this.host)}dir(){return`${this.host.dir||gi}`.toLowerCase()}lang(){return`${this.host.lang||vi}`.toLowerCase()}getTranslationData(t){var r,o;let i=new Intl.Locale(t),s=i?.language.toLowerCase(),n=(o=(r=i?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",a=te.get(`${s}-${n}`),l=te.get(s);return{locale:i,language:s,region:n,primary:a,secondary:l}}exists(t,r){var o;let{primary:i,secondary:s}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||s&&s[t]||r.includeFallback&&Lt&&Lt[t])}term(t,...r){let{primary:o,secondary:i}=this.getTranslationData(this.lang()),s;if(o&&o[t])s=o[t];else if(i&&i[t])s=i[t];else if(Lt&&Lt[t])s=Lt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...r):s}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var ln={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Rr(ln);var tt=class extends Ke{};var xi=S`
  ${B}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;var jr=class extends L{constructor(){super(...arguments),this.localize=new tt(this)}render(){return g`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};jr.styles=xi;jr=u([T("sl-spinner")],jr);var ve=new WeakMap,ye=new WeakMap,Ir=new WeakSet,We=new WeakMap,St=class{constructor(t,r){(this.host=t).addController(this),this.options=Object.assign({form:o=>{if(o.hasAttribute("form")&&o.getAttribute("form")!==""){let i=o.getRootNode(),s=o.getAttribute("form");if(s)return i.getElementById(s)}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!==null&&i!==void 0?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},r),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),We.set(this.host,[]),this.options.assumeInteractionOn.forEach(r=>{this.host.addEventListener(r,this.handleInteraction)})}hostDisconnected(){this.detachForm(),We.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,ve.has(this.form)?ve.get(this.form).add(this.host):ve.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ye.has(this.form)||(ye.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=ve.get(this.form))===null||t===void 0||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ye.has(this.form)&&(this.form.reportValidity=ye.get(this.form),ye.delete(this.form))),this.form=void 0}handleFormData(t){let r=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";!r&&!s&&typeof o=="string"&&o.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(n=>{t.formData.append(o,n.toString())}):t.formData.append(o,i.toString()))}handleFormSubmit(t){var r;let o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=ve.get(this.form))===null||r===void 0||r.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!o&&!i(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),We.set(this.host,[])}handleInteraction(t){let r=We.get(this.host);r.includes(t.type)||r.push(t.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){let t=this.form.querySelectorAll("*");for(let r of t)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0}setUserInteracted(t,r){r?Ir.add(t):Ir.delete(t),t.requestUpdate()}doAction(t,r){if(this.form){let o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",r&&(o.name=r.name,o.value=r.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{r.hasAttribute(i)&&o.setAttribute(i,r.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!==null&&t!==void 0?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let r=this.host,o=!!Ir.has(r),i=!!r.required;r.toggleAttribute("data-required",i),r.toggleAttribute("data-optional",!i),r.toggleAttribute("data-invalid",!t),r.toggleAttribute("data-valid",t),r.toggleAttribute("data-user-invalid",!t&&o),r.toggleAttribute("data-user-valid",t&&o)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let r=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||r.preventDefault(),this.host.dispatchEvent(r)||t?.preventDefault()}},Je=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),hu=Object.freeze(Object.assign(Object.assign({},Je),{valid:!1,valueMissing:!0})),du=Object.freeze(Object.assign(Object.assign({},Je),{valid:!1,customError:!0}));var ht=class{constructor(t,...r){this.slotNames=[],(this.host=t).addController(this),this.slotNames=r,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let r=t;if(r.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!r.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){let r=t.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()}};var _i=Symbol.for(""),cn=e=>{if(e?.r===_i)return e?._$litStatic$};var ee=(e,...t)=>({_$litStatic$:t.reduce((r,o,i)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]),r:_i}),ki=new Map,wi=e=>(t,...r)=>{let o=r.length,i,s,n=[],a=[],l,c=0,d=!1;for(;c<o;){for(l=t[c];c<o&&(s=r[c],(i=cn(s))!==void 0);)l+=i+t[++c],d=!0;a.push(s),n.push(l),c++}if(c===o&&n.push(t[o]),d){let f=n.join("$$lit$$");(t=ki.get(f))===void 0&&(n.raw=n,ki.set(f,t=n)),r=a}return e(t,...r)},re=wi(g),bu=wi(xo);var v=e=>e??C;var $i=S`
  ${B}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;var P=class extends L{constructor(){super(),this.formControlController=new St(this,{form:e=>{if(e.hasAttribute("form")){let t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new ht(this,"[default]","prefix","suffix"),this.localize=new tt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener",this.handleHostClick=e=>{(this.disabled||this.loading)&&(e.preventDefault(),e.stopImmediatePropagation())},this.addEventListener("click",this.handleHostClick)}get validity(){return this.isButton()?this.button.validity:Je}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?ee`a`:ee`button`;return re`
      <${t}
        part="base"
        class=${V({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${v(e?void 0:this.disabled)}
        type=${v(e?void 0:this.type)}
        title=${this.title}
        name=${v(e?void 0:this.name)}
        value=${v(e?void 0:this.value)}
        href=${v(e?this.href:void 0)}
        target=${v(e?this.target:void 0)}
        download=${v(e?this.download:void 0)}
        rel=${v(e?this.rel:void 0)}
        role=${v(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?re` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?re`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};P.styles=$i;u([I(".button")],P.prototype,"button",2);u([R()],P.prototype,"hasFocus",2);u([R()],P.prototype,"invalid",2);u([h()],P.prototype,"title",2);u([h({reflect:!0})],P.prototype,"variant",2);u([h({reflect:!0})],P.prototype,"size",2);u([h({type:Boolean,reflect:!0})],P.prototype,"caret",2);u([h({type:Boolean,reflect:!0})],P.prototype,"disabled",2);u([h({type:Boolean,reflect:!0})],P.prototype,"loading",2);u([h({type:Boolean,reflect:!0})],P.prototype,"outline",2);u([h({type:Boolean,reflect:!0})],P.prototype,"pill",2);u([h({type:Boolean,reflect:!0})],P.prototype,"circle",2);u([h()],P.prototype,"type",2);u([h()],P.prototype,"name",2);u([h()],P.prototype,"value",2);u([h()],P.prototype,"href",2);u([h()],P.prototype,"target",2);u([h()],P.prototype,"rel",2);u([h()],P.prototype,"download",2);u([h()],P.prototype,"form",2);u([h({attribute:"formaction"})],P.prototype,"formAction",2);u([h({attribute:"formenctype"})],P.prototype,"formEnctype",2);u([h({attribute:"formmethod"})],P.prototype,"formMethod",2);u([h({attribute:"formnovalidate",type:Boolean})],P.prototype,"formNoValidate",2);u([h({attribute:"formtarget"})],P.prototype,"formTarget",2);u([U("disabled",{waitUntilFirstUpdate:!0})],P.prototype,"handleDisabledChange",1);P=u([T("sl-button")],P);var Xe=(e="value")=>(t,r)=>{let o=t.constructor,i=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,a){var l;let c=o.getPropertyOptions(e),d=typeof c.attribute=="string"?c.attribute:e;if(s===d){let f=c.converter||Mt,m=(typeof f=="function"?f:(l=f?.fromAttribute)!==null&&l!==void 0?l:Mt.fromAttribute)(a,c.type);this[e]!==m&&(this[r]=m)}i.call(this,s,n,a)}};var xe=xt(class extends lt{constructor(e){if(super(e),e.type!==J.PROPERTY&&e.type!==J.ATTRIBUTE&&e.type!==J.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Eo(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===D||t===C)return t;let r=e.element,o=e.name;if(e.type===J.PROPERTY){if(t===r[o])return D}else if(e.type===J.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(o))return D}else if(e.type===J.ATTRIBUTE&&r.getAttribute(o)===t+"")return D;return De(e),t}});var Si=S`
  ${B}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;var F=class extends L{constructor(){super(...arguments),this.formControlController=new St(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return g`
      <label
        part="base"
        class=${V({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${v(this.value)}
          .indeterminate=${xe(this.indeterminate)}
          .checked=${xe(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?g`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?g`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};F.styles=Si;u([I('input[type="checkbox"]')],F.prototype,"input",2);u([R()],F.prototype,"hasFocus",2);u([h()],F.prototype,"title",2);u([h()],F.prototype,"name",2);u([h()],F.prototype,"value",2);u([h({reflect:!0})],F.prototype,"size",2);u([h({type:Boolean,reflect:!0})],F.prototype,"disabled",2);u([h({type:Boolean,reflect:!0})],F.prototype,"checked",2);u([h({type:Boolean,reflect:!0})],F.prototype,"indeterminate",2);u([Xe("checked")],F.prototype,"defaultChecked",2);u([h({reflect:!0})],F.prototype,"form",2);u([h({type:Boolean,reflect:!0})],F.prototype,"required",2);u([U("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);u([U(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],F.prototype,"handleStateChange",1);F=u([T("sl-checkbox")],F);var Ci=S`
  ${B}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var X=class extends L{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?ee`a`:ee`button`;return re`
      <${t}
        part="base"
        class=${V({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${v(e?void 0:this.disabled)}
        type=${v(e?void 0:"button")}
        href=${v(e?this.href:void 0)}
        target=${v(e?this.target:void 0)}
        download=${v(e?this.download:void 0)}
        rel=${v(e&&this.target?"noreferrer noopener":void 0)}
        role=${v(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${v(this.name)}
          library=${v(this.library)}
          src=${v(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};X.styles=Ci;u([I(".icon-button")],X.prototype,"button",2);u([R()],X.prototype,"hasFocus",2);u([h()],X.prototype,"name",2);u([h()],X.prototype,"library",2);u([h()],X.prototype,"src",2);u([h()],X.prototype,"href",2);u([h()],X.prototype,"target",2);u([h()],X.prototype,"download",2);u([h()],X.prototype,"label",2);u([h({type:Boolean,reflect:!0})],X.prototype,"disabled",2);X=u([T("sl-icon-button")],X);function et(e,t,r){return new Promise(o=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");let i=e.animate(t,Object.assign(Object.assign({},r),{duration:un()?0:r.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function un(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function dt(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{let o=requestAnimationFrame(r);t.addEventListener("cancel",()=>o,{once:!0}),t.addEventListener("finish",()=>o,{once:!0}),t.cancel()})))}var Ai=new Map,hn=new WeakMap;function dn(e){return e??{keyframes:[],options:{duration:0}}}function Ei(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function M(e,t){Ai.set(e,dn(t))}function rt(e,t,r){let o=hn.get(e);if(o?.[t])return Ei(o[t],r.dir);let i=Ai.get(t);return i?Ei(i,r.dir):{keyframes:[],options:{duration:0}}}var Lr=new Set;function pn(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ot(e){if(Lr.add(e),!document.body.classList.contains("sl-scroll-lock")){let t=pn();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function zt(e){Lr.delete(e),Lr.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function oe(e,t){return new Promise(r=>{function o(i){i.target===e&&(e.removeEventListener(t,o),r())}e.addEventListener(t,o)})}function Pi(e){let t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Ti(e){var t,r;let o=[];function i(a){a instanceof HTMLElement&&(o.push(a),a.shadowRoot!==null&&a.shadowRoot.mode==="open"&&i(a.shadowRoot)),[...a.children].forEach(l=>i(l))}i(e);let s=(t=o.find(a=>Pi(a)))!==null&&t!==void 0?t:null,n=(r=o.reverse().find(a=>Pi(a)))!==null&&r!==void 0?r:null;return{start:s,end:n}}var ke=[],Nt=class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){ke.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ke=ke.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ke[ke.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){let{start:t,end:r}=Ti(this.element),o=this.tabDirection==="forward"?t:r;typeof o?.focus=="function"&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}};var Ri=S`
  ${B}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var pt=class extends L{constructor(){super(...arguments),this.hasSlotController=new ht(this,"footer"),this.localize=new tt(this),this.modal=new Nt(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ot(this))}disconnectedCallback(){super.disconnectedCallback(),zt(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){let r=rt(this,"dialog.denyClose",{dir:this.localize.dir()});et(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ot(this);let e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([dt(this.dialog),dt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});let t=rt(this,"dialog.show",{dir:this.localize.dir()}),r=rt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([et(this.panel,t.keyframes,t.options),et(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([dt(this.dialog),dt(this.overlay)]);let e=rt(this,"dialog.hide",{dir:this.localize.dir()}),t=rt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([et(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),et(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,zt(this);let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,oe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,oe(this,"sl-after-hide")}render(){return g`
      <div
        part="base"
        class=${V({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${v(this.noHeader?this.label:void 0)}
          aria-labelledby=${v(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":g`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="dialog__body"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};pt.styles=Ri;u([I(".dialog")],pt.prototype,"dialog",2);u([I(".dialog__panel")],pt.prototype,"panel",2);u([I(".dialog__overlay")],pt.prototype,"overlay",2);u([h({type:Boolean,reflect:!0})],pt.prototype,"open",2);u([h({reflect:!0})],pt.prototype,"label",2);u([h({attribute:"no-header",type:Boolean,reflect:!0})],pt.prototype,"noHeader",2);u([U("open",{waitUntilFirstUpdate:!0})],pt.prototype,"handleOpenChange",1);pt=u([T("sl-dialog")],pt);M("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});M("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});M("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});M("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});M("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});function Or(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ji=S`
  ${B}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var Y=class extends L{constructor(){super(...arguments),this.hasSlotController=new ht(this,"footer"),this.localize=new tt(this),this.modal=new Nt(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.open&&!this.contained&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ot(this)))}disconnectedCallback(){super.disconnectedCallback(),zt(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){let r=rt(this,"drawer.denyClose",{dir:this.localize.dir()});et(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ot(this));let e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([dt(this.drawer),dt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});let t=rt(this,`drawer.show${Or(this.placement)}`,{dir:this.localize.dir()}),r=rt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([et(this.panel,t.keyframes,t.options),et(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),zt(this)),await Promise.all([dt(this.drawer),dt(this.overlay)]);let e=rt(this,`drawer.hide${Or(this.placement)}`,{dir:this.localize.dir()}),t=rt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([et(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),et(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ot(this)),this.open&&this.contained&&(this.modal.deactivate(),zt(this))}async show(){if(!this.open)return this.open=!0,oe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,oe(this,"sl-after-hide")}render(){return g`
      <div
        part="base"
        class=${V({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${v(this.noHeader?this.label:void 0)}
          aria-labelledby=${v(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":g`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Y.styles=ji;u([I(".drawer")],Y.prototype,"drawer",2);u([I(".drawer__panel")],Y.prototype,"panel",2);u([I(".drawer__overlay")],Y.prototype,"overlay",2);u([h({type:Boolean,reflect:!0})],Y.prototype,"open",2);u([h({reflect:!0})],Y.prototype,"label",2);u([h({reflect:!0})],Y.prototype,"placement",2);u([h({type:Boolean,reflect:!0})],Y.prototype,"contained",2);u([h({attribute:"no-header",type:Boolean,reflect:!0})],Y.prototype,"noHeader",2);u([U("open",{waitUntilFirstUpdate:!0})],Y.prototype,"handleOpenChange",1);u([U("contained",{waitUntilFirstUpdate:!0})],Y.prototype,"handleNoModalChange",1);Y=u([T("sl-drawer")],Y);M("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});M("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});M("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});M("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});M("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});M("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});M("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});M("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});M("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});M("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});M("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Ii=S`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;var Li=S`
  ${B}
  ${Ii}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;var x=class extends L{constructor(){super(...arguments),this.formControlController=new St(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ht(this,"help-text","label"),this.localize=new tt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,o){this.input.setRangeText(e,t,r,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,o=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return g`
      <div
        part="form-control"
        class=${V({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${V({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${v(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${v(this.placeholder)}
              minlength=${v(this.minlength)}
              maxlength=${v(this.maxlength)}
              min=${v(this.min)}
              max=${v(this.max)}
              step=${v(this.step)}
              .value=${xe(this.value)}
              autocapitalize=${v(this.autocapitalize)}
              autocomplete=${v(this.autocomplete)}
              autocorrect=${v(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${v(this.pattern)}
              enterkeyhint=${v(this.enterkeyhint)}
              inputmode=${v(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?g`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?g`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?g`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:g`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};x.styles=Li;u([I(".input__control")],x.prototype,"input",2);u([R()],x.prototype,"hasFocus",2);u([h()],x.prototype,"title",2);u([h({reflect:!0})],x.prototype,"type",2);u([h()],x.prototype,"name",2);u([h()],x.prototype,"value",2);u([Xe()],x.prototype,"defaultValue",2);u([h({reflect:!0})],x.prototype,"size",2);u([h({type:Boolean,reflect:!0})],x.prototype,"filled",2);u([h({type:Boolean,reflect:!0})],x.prototype,"pill",2);u([h()],x.prototype,"label",2);u([h({attribute:"help-text"})],x.prototype,"helpText",2);u([h({type:Boolean})],x.prototype,"clearable",2);u([h({type:Boolean,reflect:!0})],x.prototype,"disabled",2);u([h()],x.prototype,"placeholder",2);u([h({type:Boolean,reflect:!0})],x.prototype,"readonly",2);u([h({attribute:"password-toggle",type:Boolean})],x.prototype,"passwordToggle",2);u([h({attribute:"password-visible",type:Boolean})],x.prototype,"passwordVisible",2);u([h({attribute:"no-spin-buttons",type:Boolean})],x.prototype,"noSpinButtons",2);u([h({reflect:!0})],x.prototype,"form",2);u([h({type:Boolean,reflect:!0})],x.prototype,"required",2);u([h()],x.prototype,"pattern",2);u([h({type:Number})],x.prototype,"minlength",2);u([h({type:Number})],x.prototype,"maxlength",2);u([h()],x.prototype,"min",2);u([h()],x.prototype,"max",2);u([h()],x.prototype,"step",2);u([h()],x.prototype,"autocapitalize",2);u([h()],x.prototype,"autocorrect",2);u([h()],x.prototype,"autocomplete",2);u([h({type:Boolean})],x.prototype,"autofocus",2);u([h()],x.prototype,"enterkeyhint",2);u([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],x.prototype,"spellcheck",2);u([h()],x.prototype,"inputmode",2);u([U("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);u([U("step",{waitUntilFirstUpdate:!0})],x.prototype,"handleStepChange",1);u([U("value",{waitUntilFirstUpdate:!0})],x.prototype,"handleValueChange",1);x=u([T("sl-input")],x);var Ye=class{constructor(t,r=450){this._scroll_elem=null;this._currentY=0;this._previousY=0;this._scrollDirection="";this.offscreen=!1;this._handleScrollEvent=t=>{let r=s=>{let n=!this._previousY||this._previousY<s?"down":"up";return this._previousY=s,n};this._currentY=t.target.scrollTop,this._scrollDirection=r(this._currentY);let o=this._scrollDirection==="down"&&this._currentY>this.keep_zone,i=o!==this.offscreen;this.offscreen=o,i&&this.host&&this.host.requestUpdate()};this.host=t,this.keep_zone=r,t.addController(this)}_registerScrollElement(){this._scroll_elem=document.querySelector("app-web-component")}hostConnected(){setTimeout(()=>{this._registerScrollElement(),this._scroll_elem&&this._scroll_elem.addEventListener("scroll",this._handleScrollEvent.bind(this))},500)}hostDisconnected(){this._scroll_elem&&this._scroll_elem.removeEventListener("scroll",this._handleScrollEvent.bind(this))}};var nt=class extends H{constructor(){super();this.reference="";this._rangesText="";this._filterText="";this._fullWords=!1;this._caseSensitive=!1;this.bibleScroll=new Ye(this,100)}firstUpdated(r){super.firstUpdated(r)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this.destroy()}destroy(){}_toggleCaseSensitive(r){this._caseSensitive=r.target.checked}_toggleFullWords(r){this._fullWords=r.target.checked}_updateRangeText(r){this.reference="",this._rangesText=r.target.value}_updateFilterText(r){this._filterText=r.target.value}_onToggleDraw(){this.dispatchEvent(new CustomEvent("toggle-drawer",{bubbles:!0,cancelable:!0}))}render(){let r={"hide-heading":this.bibleScroll.offscreen,"show-heading":!this.bibleScroll.offscreen};return g`
<div class="heading ${V(r)}">
  <div class="reference-controls">
    <sl-icon-button 
      name="list" 
      label="list"
      class="icon-button" 
      @click=${this._onToggleDraw}
    ></sl-icon-button>
    <sl-input 
      clearable
      class="reference-input"
      placeholder="Verwysing"
      value=${this.reference!==""?this.reference:this._rangesText}
      @sl-input=${this._updateRangeText}
      @sl-clear=${()=>this._rangesText=""}
    >
      <sl-icon name="book" slot="prefix"></sl-icon>
      ${this._filterText.length>0?g`<sl-badge slot="suffix">Soek</sl-badge>`:C}
    </sl-input>
    <sl-icon-button 
      name="search" 
      label="search"
      class="icon-button" 
      @click=${()=>this.dialog.show()}
    >
    </sl-icon-button>
  </div>
</div> 
<sl-dialog label="Soek 'n woord in die verse">
  <sl-input
    autofocus
    clearable
    class="controls-input"
    placeholder="Soek 'n woord"
    value=${this._filterText}
    @sl-input=${this._updateFilterText}
    @sl-clear=${()=>this._filterText=""}
  >
    <sl-icon name="search" slot="prefix"></sl-icon>
  </sl-input>
  <div class="controls">
    <div class="controls-checkbox">
      <sl-checkbox
        ?checked=${this._caseSensitive}
        @click=${this._toggleCaseSensitive}
      >
        LeTTeR
      </sl-checkbox>
    </div>
    <div class="controls-checkbox">
      <sl-checkbox
        ?checked=${this._fullWords}
        @click=${this._toggleFullWords}
      >
        Woord
      </sl-checkbox>
    </div>
  </div>
  <sl-button slot="footer" size="small" @click=${()=>this.dialog.hide()}>
    Exit
    <sl-icon slot="prefix" name="x-lg"></sl-icon>
  </sl-button>
</sl-dialog> 
<interlinear-bible 
  rangesText=${this.reference!==""?this.reference:this._rangesText}
  filterText=${this._filterText}
  ?caseSensitive=${this._caseSensitive}
  ?fullWords=${this._fullWords}
>
</interlinear-bible>`}};nt.styles=S`
    :host{
      display: block;
    }
    .heading {
      position: sticky;
      top: 0px;
      left: 0px;
      z-index: 10;
      display: flex;
      gap: 1rem;
      transition: 0.4s ease-in-out;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    .icon-button {
      color: var(--sl-color-primary-500);
      margin: 10px 5px;
      font-size: var(--sl-font-size-large)
    }
    .reference-controls{
      display: flex;
      justify-content:flex-start;
      align-items: center;
      gap: 1rem;
    }
    .reference-input{
      flex-grow: 4;
      margin: 2px;
    }
    .reference-input::part(input) {
      width: 8rem;
    }
    .controls {
      display: flex;
      justify-content: space-around;
      gap: 2rem;
      align-items: center;
    }
    .controls-input{
      margin-bottom: 2rem;
    }
    .contols-checkbox {
      display: flex;
      align-items: center;
      flex-shrink: 1;
    }
    .hide-heading {
      translate: 0 -125px;
    }
    .show-heading {
      translate: none;
    }
  `,$([h({type:String,reflect:!0})],nt.prototype,"reference",2),$([R()],nt.prototype,"_rangesText",2),$([R()],nt.prototype,"_filterText",2),$([R()],nt.prototype,"_fullWords",2),$([R()],nt.prototype,"_caseSensitive",2),$([I("sl-dialog")],nt.prototype,"dialog",2),nt=$([T("bible-head")],nt);var _e=class extends lt{constructor(t){if(super(t),this.et=C,t.type!==J.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===C||t==null)return this.ft=void 0,this.et=t;if(t===D)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;let r=[t];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};_e.directiveName="unsafeHTML",_e.resultType=1;var Oi=xt(_e);var fn=(e,t=!1,r=!1)=>{let o=/(["'])(\\\1|.)*?\1/g,i=/[^\s"']+/g,s=e.match(o)||[],n=e.replace(o,"").match(i)||[],a=m=>m.substring(1,m.length-1),l=s.map(a),c=r?"":"i",d=t?"\\b":"",f=m=>new RegExp(d+m+d,c),p=[...l,...n].map(f);return m=>{let k=0;for(;p[k]&&p[k].test(m);)k++;return k===p.length}},zi=fn;var G=class extends H{constructor(){super();this.rangesText="";this.filterText="";this.fullWords=!1;this.caseSensitive=!1;this._verses=[];this._hashList=[];this._versionName="afr";this._altVersionName="kjv";this._onVerseClicked=r=>{let o=r.currentTarget;if(o){if(o.getAttribute("activated")!==null){o.removeAttribute("activated");let s=o.closest(".container");if(s){let n=o.nextSibling;s.removeChild(n)}return}else o.setAttribute("activated","");let i=o.dataset.hash;if(i){let s=kr(i,this._versionName,this._altVersionName),n=$r(s),a=document.createElement("tsk-refs");a.setAttribute("refs",n),o.after(a)}}}}firstUpdated(r){super.firstUpdated(r)}connectedCallback(){super.connectedCallback(),this.initialize()}disconnectedCallback(){this.destroy()}attributeChangedCallback(r,o,i){super.attributeChangedCallback(r,o,i),this._setVerses()}initialize(){let r=`${window.origin}${It}/web/resources/${this._versionName}.txt`;wr(this._versionName,r).then(()=>{r=`${window.origin}${It}/web/resources/${this._altVersionName}.txt`,wr(this._altVersionName,r).then(()=>{this._setVerses()}).catch(o=>console.log("Error loading bibles",o))}).catch(console.log)}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach(r=>{r.addEventListener("mousedown",this.rippleEffect)})}rippleEffect(r){let o=this.getBoundingClientRect(),i=document.createElement("div"),s=getComputedStyle(this).overflow,n="rgba(255,255,255,0)",a="rgba(255,255,255,.3)",l=Math.sqrt(o.width*o.width+o.height*o.height)/10;this.style.overflow="hidden",i.style=`
      width:20px;
      height:20px;
      border-radius: 50%;
      background: radial-gradient(circle, 
      ${a} 0%, ${n} 5%, ${n} 7%, 
      ${a} 13%, ${a} 17%, ${n} 30%, 
      ${n} 35%, ${a} 51%,${a} 58%,
      ${n} 68%, ${n} 75%, ${a} 100%);
      position: absolute;
      opacity: 0;
      transform-origin: 'center center';
      left: ${r.clientX-o.left-10}px;
      top: ${r.clientY-o.top-10}px;`,this.prepend(i);let c=i.animate([{transform:"scale(0)",opacity:1},{transform:`scale(${l})`,opacity:.1}],{duration:800});Promise.resolve(c.finished).then(()=>{i.remove(),this.style.overflow=s})}async _setVerses(){let r=zi(this.filterText,this.fullWords,this.caseSensitive);if(this.rangesText.length<2)return;let o=[],i=ii({rangesText:this.rangesText,versionName:this._versionName});if(i.length===0)return;this._hashList=si(this._versionName,i);let s=0;for(let n of this._hashList){let a=_r(this._versionName,n);if(r(a.text)){let l=kr(n,this._versionName,this._altVersionName),c=_r(this._altVersionName,l),d={afr:a,kjv:await this._style_KJV_verse($r(l),c),uuid:this._uuid(),hash:n};o.push(d),s++}if(s>99)break}this._verses=o}_getTSKRefs(r){return new Promise((o,i)=>{if(this._ixdb){let s=this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(r));s.onsuccess=n=>{let a=n.target.result;return a.sort((l,c)=>parseInt(l.sort)-parseInt(c.sort)),o(a)},s.onerror=n=>i(n)}else return null})}async _style_KJV_verse(r,o){try{let i=await this._getTSKRefs(r);i&&i.length>0&&i.forEach(s=>{o.text=o.text.replace(s.words,"<b>"+s.words+"</b>")})}catch(i){console.log("Error Formatting KJV",i)}return o}_uuid(){return Math.random().toString(36).substring(2,12)}destroy(){}render(){return g`
        <div class="container">
          ${qt(this._verses,r=>r.uuid,r=>g`
                <div class="ripple-box"
                  data-uuid=${r.uuid}
                  data-hash=${r.hash}
                  @click=${this._onVerseClicked}
                >
                  <p class="afrtext">
                    ${r.afr.prettyRef} ${r.afr.text}
                  </p>
                  ${r.kjv.text.length>0?g`
                      <p class="kjvtext" >
                        ${r.kjv.prettyRef} ${Oi(r.kjv.text)}
                      </p>

                      `:C}
                </div>
               `)}
        </div>
    `}};G.styles=S`
    :host{
      display: block;
    }
    .ripple-box:hover {
      background-color: var(--sl-color-neutral-100);
      cursor: pointer;
    }
    .ripple-box {
      display: block;
      position: relative;  /* MUST HAVE for MWC-RIPPLE */
      justify-content: center;
      flex-direction: column;
      padding: 4px;
      margin-bottom: 0.5rem;
    }
    .ripple-box[activated] {
      background-color: var(--sl-color-primary-100);
    }
    .ripple-box[activated]:hover {
      background-color: var(--sl-color-primary-200);
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
    b {
      font-weight: var(--sl-font-weight-bold);
    }
  `,$([h({type:String,attribute:!0})],G.prototype,"rangesText",2),$([h({type:String,attribute:!0})],G.prototype,"filterText",2),$([h({type:Boolean,attribute:!0})],G.prototype,"fullWords",2),$([h({type:Boolean,attribute:!0})],G.prototype,"caseSensitive",2),$([R()],G.prototype,"_verses",2),$([R()],G.prototype,"_hashList",2),$([Xt({context:Yt})],G.prototype,"_ixdb",2),$([I("#input")],G.prototype,"_input",2),G=$([T("interlinear-bible")],G);function at(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(!1)var i,s;throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(n){return"'"+n+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ie(e){return!!e&&!!e[Z]}function Bt(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var o=Object.getPrototypeOf(r);if(o===null)return!0;var i=Object.hasOwnProperty.call(o,"constructor")&&o.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===_n}(e)||Array.isArray(e)||!!e[Hi]||!!(!((t=e.constructor)===null||t===void 0)&&t[Hi])||qr(e)||Kr(e))}function $e(e,t,r){r===void 0&&(r=!1),se(e)===0?(r?Object.keys:Gr)(e).forEach(function(o){r&&typeof o=="symbol"||t(o,e[o],e)}):e.forEach(function(o,i){return t(i,o,e)})}function se(e){var t=e[Z];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:qr(e)?2:Kr(e)?3:0}function Mr(e,t){return se(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function mn(e,t){return se(e)===2?e.get(t):e[t]}function qi(e,t,r){var o=se(e);o===2?e.set(t,r):o===3?e.add(r):e[t]=r}function bn(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function qr(e){return xn&&e instanceof Map}function Kr(e){return kn&&e instanceof Set}function Dt(e){return e.o||e.t}function Wr(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=wn(e);delete t[Z];for(var r=Gr(t),o=0;o<r.length;o++){var i=r[o],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Jr(e,t){return t===void 0&&(t=!1),Xr(e)||ie(e)||!Bt(e)||(se(e)>1&&(e.set=e.add=e.clear=e.delete=gn),Object.freeze(e),t&&$e(e,function(r,o){return Jr(o,!0)},!0)),e}function gn(){at(2)}function Xr(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ft(e){var t=$n[e];return t||at(18,e),t}function Ni(){return Se}function zr(e,t){t&&(ft("Patches"),e.u=[],e.s=[],e.v=t)}function Ge(e){Vr(e),e.p.forEach(vn),e.p=null}function Vr(e){e===Se&&(Se=e.l)}function Di(e){return Se={p:[],l:Se,h:e,m:!0,_:0}}function vn(e){var t=e[Z];t.i===0||t.i===1?t.j():t.O=!0}function Nr(e,t){t._=t.p.length;var r=t.p[0],o=e!==void 0&&e!==r;return t.h.g||ft("ES5").S(t,e,o),o?(r[Z].P&&(Ge(t),at(4)),Bt(e)&&(e=Ze(t,e),t.l||Qe(t,e)),t.u&&ft("Patches").M(r[Z].t,e,t.u,t.s)):e=Ze(t,r,[]),Ge(t),t.u&&t.v(t.u,t.s),e!==Ki?e:void 0}function Ze(e,t,r){if(Xr(t))return t;var o=t[Z];if(!o)return $e(t,function(a,l){return Bi(e,o,t,a,l,r)},!0),t;if(o.A!==e)return t;if(!o.P)return Qe(e,o.t,!0),o.t;if(!o.I){o.I=!0,o.A._--;var i=o.i===4||o.i===5?o.o=Wr(o.k):o.o,s=i,n=!1;o.i===3&&(s=new Set(i),i.clear(),n=!0),$e(s,function(a,l){return Bi(e,o,i,a,l,r,n)}),Qe(e,i,!1),r&&e.u&&ft("Patches").N(o,r,e.u,e.s)}return o.o}function Bi(e,t,r,o,i,s,n){if(ie(i)){var a=Ze(e,i,s&&t&&t.i!==3&&!Mr(t.R,o)?s.concat(o):void 0);if(qi(r,o,a),!ie(a))return;e.m=!1}else n&&r.add(i);if(Bt(i)&&!Xr(i)){if(!e.h.D&&e._<1)return;Ze(e,i),t&&t.A.l||Qe(e,i)}}function Qe(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&Jr(t,r)}function Dr(e,t){var r=e[Z];return(r?Dt(r):e)[t]}function Mi(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var o=Object.getOwnPropertyDescriptor(r,t);if(o)return o;r=Object.getPrototypeOf(r)}}function Ur(e){e.P||(e.P=!0,e.l&&Ur(e.l))}function Br(e){e.o||(e.o=Wr(e.t))}function Fr(e,t,r){var o=qr(t)?ft("MapSet").F(t,r):Kr(t)?ft("MapSet").T(t,r):e.g?function(i,s){var n=Array.isArray(i),a={i:n?1:0,A:s?s.A:Ni(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,c=Hr;n&&(l=[a],c=we);var d=Proxy.revocable(l,c),f=d.revoke,p=d.proxy;return a.k=p,a.j=f,p}(t,r):ft("ES5").J(t,r);return(r?r.A:Ni()).p.push(o),o}function yn(e){return ie(e)||at(22,e),function t(r){if(!Bt(r))return r;var o,i=r[Z],s=se(r);if(i){if(!i.P&&(i.i<4||!ft("ES5").K(i)))return i.t;i.I=!0,o=Vi(r,s),i.I=!1}else o=Vi(r,s);return $e(o,function(n,a){i&&mn(i.t,n)===a||qi(o,n,t(a))}),s===3?new Set(o):o}(e)}function Vi(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Wr(e)}var Ui,Se,Yr=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",xn=typeof Map<"u",kn=typeof Set<"u",Fi=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Ki=Yr?Symbol.for("immer-nothing"):((Ui={})["immer-nothing"]=!0,Ui),Hi=Yr?Symbol.for("immer-draftable"):"__$immer_draftable",Z=Yr?Symbol.for("immer-state"):"__$immer_state";var _n=""+Object.prototype.constructor,Gr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,wn=Object.getOwnPropertyDescriptors||function(e){var t={};return Gr(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},$n={},Hr={get:function(e,t){if(t===Z)return e;var r=Dt(e);if(!Mr(r,t))return function(i,s,n){var a,l=Mi(s,n);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,r,t);var o=r[t];return e.I||!Bt(o)?o:o===Dr(e.t,t)?(Br(e),e.o[t]=Fr(e.A.h,o,e)):o},has:function(e,t){return t in Dt(e)},ownKeys:function(e){return Reflect.ownKeys(Dt(e))},set:function(e,t,r){var o=Mi(Dt(e),t);if(o?.set)return o.set.call(e.k,r),!0;if(!e.P){var i=Dr(Dt(e),t),s=i?.[Z];if(s&&s.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(bn(r,i)&&(r!==void 0||Mr(e.t,t)))return!0;Br(e),Ur(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return Dr(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Br(e),Ur(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=Dt(e),o=Reflect.getOwnPropertyDescriptor(r,t);return o&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:o.enumerable,value:r[t]}},defineProperty:function(){at(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){at(12)}},we={};$e(Hr,function(e,t){we[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),we.deleteProperty=function(e,t){return we.set.call(this,e,t,void 0)},we.set=function(e,t,r){return Hr.set.call(this,e[0],t,r,e[0])};var Sn=function(){function e(r){var o=this;this.g=Fi,this.D=!0,this.produce=function(i,s,n){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=o;return function(_){var E=this;_===void 0&&(_=a);for(var z=arguments.length,K=Array(z>1?z-1:0),ot=1;ot<z;ot++)K[ot-1]=arguments[ot];return l.produce(_,function(Ce){var A;return(A=s).call.apply(A,[E,Ce].concat(K))})}}var c;if(typeof s!="function"&&at(6),n!==void 0&&typeof n!="function"&&at(7),Bt(i)){var d=Di(o),f=Fr(o,i,void 0),p=!0;try{c=s(f),p=!1}finally{p?Ge(d):Vr(d)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(_){return zr(d,n),Nr(_,d)},function(_){throw Ge(d),_}):(zr(d,n),Nr(c,d))}if(!i||typeof i!="object"){if((c=s(i))===void 0&&(c=i),c===Ki&&(c=void 0),o.D&&Jr(c,!0),n){var m=[],k=[];ft("Patches").M(i,c,m,k),n(m,k)}return c}at(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(c){for(var d=arguments.length,f=Array(d>1?d-1:0),p=1;p<d;p++)f[p-1]=arguments[p];return o.produceWithPatches(c,function(m){return i.apply(void 0,[m].concat(f))})};var n,a,l=o.produce(i,s,function(c,d){n=c,a=d});return typeof Promise<"u"&&l instanceof Promise?l.then(function(c){return[c,n,a]}):[l,n,a]},typeof r?.useProxies=="boolean"&&this.setUseProxies(r.useProxies),typeof r?.autoFreeze=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){Bt(r)||at(8),ie(r)&&(r=yn(r));var o=Di(this),i=Fr(this,r,void 0);return i[Z].C=!0,Vr(o),i},t.finishDraft=function(r,o){var i=r&&r[Z],s=i.A;return zr(s,o),Nr(void 0,s)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!Fi&&at(20),this.g=r},t.applyPatches=function(r,o){var i;for(i=o.length-1;i>=0;i--){var s=o[i];if(s.path.length===0&&s.op==="replace"){r=s.value;break}}i>-1&&(o=o.slice(i+1));var n=ft("Patches").$;return ie(r)?n(r,o):this.produce(r,function(a){return n(a,o)})},e}(),Q=new Sn,tr=Q.produce,Tp=Q.produceWithPatches.bind(Q),Rp=Q.setAutoFreeze.bind(Q),jp=Q.setUseProxies.bind(Q),Ip=Q.applyPatches.bind(Q),Lp=Q.createDraft.bind(Q),Op=Q.finishDraft.bind(Q);var Ct=class extends H{constructor(){super();this.tskRefs=[]}firstUpdated(r){super.firstUpdated(r)}connectedCallback(){super.connectedCallback(),this.refs&&this._getAll(this.refs)}disconnectedCallback(){this.destroy()}updated(){this.shadowRoot.querySelectorAll(".ripple-ref-word").forEach(r=>{r.addEventListener("mousedown",this.rippleEffect)})}rippleEffect(r){let o=this.getBoundingClientRect(),i=document.createElement("div"),s=getComputedStyle(this).overflow,n="rgba(255,255,255,0)",a="rgba(255,255,255,.3)",l=Math.sqrt(o.width*o.width+o.height*o.height)/10;this.style.overflow="hidden",i.style=`
      width:20px;
      height:20px;
      border-radius: 50%;
      background: radial-gradient(circle, 
      ${a} 0%, ${n} 5%, ${n} 7%, 
      ${a} 13%, ${a} 17%, ${n} 30%, 
      ${n} 35%, ${a} 51%,${a} 58%,
      ${n} 68%, ${n} 75%, ${a} 100%);
      position: absolute;
      opacity: 0;
      transform-origin: 'center center';
      left: ${r.clientX-o.left-10}px;
      top: ${r.clientY-o.top-10}px;`,this.prepend(i);let c=i.animate([{transform:"scale(0)",opacity:1},{transform:`scale(${l})`,opacity:.1}],{duration:800});Promise.resolve(c.finished).then(()=>{i.remove(),this.style.overflow=s})}_readIXDB(r){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").openCursor(IDBKeyRange.only(r)).onsuccess=o=>{let i=o.target.result;i&&(this.tskRefs=tr(this.tskRefs,s=>(s.push({display:!1,ref:i.value}),s.sort((n,a)=>parseInt(n.ref.sort)-parseInt(a.ref.sort)),s)),i.continue())})}_getAll(r){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(r)).onsuccess=o=>{let i=o.target.result;i.sort((s,n)=>parseInt(s.sort)-parseInt(n.sort)),i=i.map(s=>({display:!1,ref:s})),this.tskRefs=tr(this.tskRefs,()=>i)})}destroy(){}render(){return g`
    <div class="refs-container">
      <mwc-list>
      ${qt(this.tskRefs,r=>r.ref.key,(r,o)=>g`
            <div class="ripple-ref-word" @click=${i=>{let s=i.currentTarget;r.display?s.removeAttribute("activated"):s.setAttribute("activated",""),this.tskRefs=tr(this.tskRefs,n=>(n[o].display=!n[o].display,n))}}
            >
              <p class="ref-word">${r.ref.words}</p>
            </div>
            ${r.display===!0?g`<interlinear-bible rangesText=${r.ref.refs}></interlinear-bible>`:""}
         `)}  
      </mwc-list>  
    </div>
    `}};Ct.styles=S`
    :host {
      display: block;
    }
    .refs-container {
      border: 1px solid var(--sl-color-primary-400);
      border-radius: 5px;
      margin: 2px;
      padding: 5px;
    }
    .ripple-ref-word:hover {
      background-color: var(--sl-color-neutral-100);
      cursor: pointer;
    }
    .ripple-ref-word {
      display: block;
      position: relative;  /* MUST HAVE for MWC-RIPPLE */
      justify-content: center;
      flex-direction: column;
      padding: 4px;
    }
    .ripple-ref-word[activated] {
      background-color: var(--sl-color-primary-200);
    }
    .ripple-ref-word[activated]:hover {
      background-color: var(--sl-color-primary-300);
    }
    .ref-word {
      font-weight: var(--sl-font-weight-bold);
      font-size: var(--sl-font-size-medium);
      margin: 0.5rem 2rem;
    }
  `,$([h({type:String,attribute:!0})],Ct.prototype,"refs",2),$([Xt({context:Yt})],Ct.prototype,"_ixdb",2),$([R()],Ct.prototype,"tskRefs",2),Ct=$([T("tsk-refs")],Ct);He(`${It}/web/shoelace`);var q=class extends H{constructor(){super();this._dbName="idxDB";this._ixdb={ixdb:void 0};this._num_chapters=10;this._selected_chapter=10;this._selected_book="";this._router=new de(this,[{path:"",render:()=>g`<bible-head></bible-head>`},{path:"/",render:()=>g`<bible-head></bible-head>`},{path:"chat",render:()=>g`<h1>Chat app not available in off line mode</h1>`}],{fallback:{render:()=>g`<h1>404 Route not found</h1> <p>In single page app router!</p>`}});this.initialize_IDB()}_unSelect_items(){this.renderRoot.querySelectorAll(".ripple-box").forEach(o=>{o.removeAttribute("activated")})}_toggleActive(r){this._unSelect_items(),r.currentTarget.setAttribute("activated","")}connectedCallback(){super.connectedCallback()}firstUpdated(){}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach(r=>{r.addEventListener("mousedown",this.rippleEffect)})}rippleEffect(r){let o=this.getBoundingClientRect(),i=document.createElement("div"),s=getComputedStyle(this).overflow,n="rgba(255,255,255,0)",a="rgba(255,255,255,.3)",l=Math.sqrt(o.width*o.width+o.height*o.height)/10;this.style.overflow="hidden",i.style=`
      width:20px;
      height:20px;
      border-radius: 50%;
      background: radial-gradient(circle, 
      ${a} 0%, ${n} 5%, ${n} 7%, 
      ${a} 13%, ${a} 17%, ${n} 30%, 
      ${n} 35%, ${a} 51%,${a} 58%,
      ${n} 68%, ${n} 75%, ${a} 100%);
      position: absolute;
      opacity: 0;
      transform-origin: 'center center';
      left: ${r.clientX-o.left-10}px;
      top: ${r.clientY-o.top-10}px;`,this.prepend(i);let c=i.animate([{transform:"scale(0)",opacity:1},{transform:`scale(${l})`,opacity:.1}],{duration:800});Promise.resolve(c.finished).then(()=>{i.remove(),this.style.overflow=s})}initialize_IDB(){let r=indexedDB.open(this._dbName,1);r.onerror=i=>{alert("Error accessing TSK database!"+i.target.result)};let o=i=>{if(q.loadingIXDB)return;q.loadingIXDB=!0;let s=`${window.origin}${It}/web/resources/tsk.txt`;ai(s).then(n=>{console.log("tsk loaded!");let a=i.transaction("xref","readwrite").objectStore("xref");n.forEach(l=>{a.add(l)}),console.log("All done!")}).catch(n=>{console.log("Failed to load TSK \u2192",n),alert("Failed to create TSK database! No cross references are available. Try using a reload.")})};r.onsuccess=i=>{this._ixdb.ixdb=i.target.result;let s=this._ixdb.ixdb.transaction("xref").objectStore("xref").count();s.onsuccess=()=>{s.result===0&&o(this._ixdb.ixdb)}},r.onupgradeneeded=i=>{let s=i.target.result;console.log("Creating a new IDB instance for tsk!");let n=s.createObjectStore("xref",{keyPath:"key"});n.createIndex("verse","verse",{unique:!1}),n.transaction.oncomplete=()=>{o(s)}}}async gotoRef(r){if(r!==void 0){let o=r;history.pushState({},"",o),await this._router.goto(o)}}_setBook(r,o){this._toggleActive(r),this._num_chapters=jt("afr").last.books[o].chapter+1,this._selected_book=Rt[o],this.dialog.show()}_setChapter(r){this._selected_chapter=r,this.dialog.hide(),this.drawer.hide()}render(){return g`
      <sl-dialog
        label="Kies 'n hoofstuk."
      >
        ${To(Ro(this._num_chapters),r=>g`<sl-button 
            class="chapter-button"
            variant="text"
            @click=${()=>this._setChapter(r+1)}
          >
            ${r+1}
          </sl-button>`)}
      </sl-dialog>
      <sl-drawer placement="start">
        ${this.render_menu()}
      </sl-drawer>
      <bible-head 
        reference=${this._selected_book!==""?this._selected_book+" "+this._selected_chapter:C}
        @toggle-drawer=${()=>this.drawer.show()}
      > </bible-head>
      `}render_menu(){return g`
        ${qt(me.abbreviations,r=>r[0],(r,o)=>g`
          <div class="ripple-box"
            @click=${i=>{this._setBook(i,o)}}
          >
            <p class="book-name">${r[0]}</p>
          </div>

        `)}
    `}};q.loadingIXDB=!1,q.styles=S`
    :host {
      display: block; /* customElement defaults to inline!!*/
      height: 100vh;
      padding: 0px 5px 5px 5px;
      overflow-y: scroll; /* sets where we are goining to attach the scroller evemnt listener - see BibleHead component & controller */
    }
    .ripple-box:hover {
      background-color: var(--sl-color-neutral-100);
      cursor: pointer;
    }
    .ripple-box {
      display: block;
      position: relative;  /* MUST HAVE for MWC-RIPPLE */
      justify-content: center;
      flex-direction: column;
      padding: 4px;
    }
    .ripple-box[activated] {
      background-color: var(--sl-color-primary-100);
    }
    .ripple-box[activated]:hover {
      background-color: var(--sl-color-primary-200);
    }
    .book-name {
      margin: 0.5rem 2rem;
    }
    .chapter-button {
      width: 4rem;
    }
    .chapter-button::part(base):hover {
      background-color: var(--sl-color-primary-50);
    }

    `,$([I("sl-drawer")],q.prototype,"drawer",2),$([I("sl-dialog")],q.prototype,"dialog",2),$([Ve({context:Yt}),R()],q.prototype,"_ixdb",2),$([R()],q.prototype,"_num_chapters",2),$([R()],q.prototype,"_selected_chapter",2),$([R()],q.prototype,"_selected_book",2),q=$([T("app-web-component")],q);})();
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

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/range.js:
  (**
   * @license
   * Copyright 2021 Google LLC
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

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=bundle.js.map
