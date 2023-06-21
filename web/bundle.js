"use strict";(()=>{var Do=Object.defineProperty,nn=Object.defineProperties,an=Object.getOwnPropertyDescriptor,ln=Object.getOwnPropertyDescriptors;var No=Object.getOwnPropertySymbols;var cn=Object.prototype.hasOwnProperty,un=Object.prototype.propertyIsEnumerable;var zo=(t,e,r)=>e in t?Do(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,St=(t,e)=>{for(var r in e||={})cn.call(e,r)&&zo(t,r,e[r]);if(No)for(var r of No(e))un.call(e,r)&&zo(t,r,e[r]);return t},Bo=(t,e)=>nn(t,ln(e));var w=(t,e,r,o)=>{for(var i=o>1?void 0:o?an(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(o?n(e,r,i):n(i))||i);return o&&i&&Do(e,r,i),i};var Ye=window,Ge=Ye.ShadowRoot&&(Ye.ShadyCSS===void 0||Ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pr=Symbol(),Uo=new WeakMap,ke=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==Pr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(Ge&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=Uo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Uo.set(r,e))}return e}toString(){return this.cssText}},Mo=t=>new ke(typeof t=="string"?t:t+"",void 0,Pr),yt=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new ke(r,t,Pr)},Tr=(t,e)=>{Ge?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{let o=document.createElement("style"),i=Ye.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)})},Ze=Ge?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return Mo(r)})(t):t;var Rr,Qe=window,Vo=Qe.trustedTypes,hn=Vo?Vo.emptyScript:"",Ho=Qe.reactiveElementPolyfillSupport,Lr={toAttribute(t,e){switch(e){case Boolean:t=t?hn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Fo=(t,e)=>e!==t&&(e==e||t==t),jr={attribute:!0,type:String,converter:Lr,reflect:!1,hasChanged:Fo},_t=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((r,o)=>{let i=this._$Ep(o,r);i!==void 0&&(this._$Ev.set(i,o),e.push(i))}),e}static createProperty(e,r=jr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){let o=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){return{get(){return this[r]},set(i){let s=this[e];this[r]=i,this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||jr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let r=this.properties,o=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(let i of o)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)r.unshift(Ze(i))}else e!==void 0&&r.push(Ze(e));return r}static _$Ep(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,o;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;let r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Tr(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostConnected)===null||o===void 0?void 0:o.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostDisconnected)===null||o===void 0?void 0:o.call(r)})}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EO(e,r,o=jr){var i;let s=this.constructor._$Ep(e,o);if(s!==void 0&&o.reflect===!0){let n=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:Lr).toAttribute(r,o.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,r){var o;let i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){let n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:Lr;this._$El=s,this[s]=a.fromAttribute(r,n.type),this._$El=null}}requestUpdate(e,r,o){let i=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||Fo)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let r=!1,o=this._$AL;try{r=this.shouldUpdate(o),r?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(o)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,o)=>this._$EO(o,this[o],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};_t.finalized=!0,_t.elementProperties=new Map,_t.elementStyles=[],_t.shadowRootOptions={mode:"open"},Ho?.({ReactiveElement:_t}),((Rr=Qe.reactiveElementVersions)!==null&&Rr!==void 0?Rr:Qe.reactiveElementVersions=[]).push("1.6.1");var Ir,tr=window,Yt=tr.trustedTypes,qo=Yt?Yt.createPolicy("lit-html",{createHTML:t=>t}):void 0,er="$lit$",xt=`lit$${(Math.random()+"").slice(9)}$`,Nr="?"+xt,dn=`<${Nr}>`,Gt=document,$e=()=>Gt.createComment(""),Se=t=>t===null||typeof t!="object"&&typeof t!="function",Zo=Array.isArray,Qo=t=>Zo(t)||typeof t?.[Symbol.iterator]=="function",Or=`[ 	
\f\r]`,we=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ko=/-->/g,Wo=/>/g,Ot=RegExp(`>|${Or}(?:([^\\s"'>=/]+)(${Or}*=${Or}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jo=/'/g,Xo=/"/g,ti=/^(?:script|style|textarea|title)$/i,ei=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),I=ei(1),el=ei(2),G=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Yo=new WeakMap,Xt=Gt.createTreeWalker(Gt,129,null,!1),ri=(t,e)=>{let r=t.length-1,o=[],i,s=e===2?"<svg>":"",n=we;for(let l=0;l<r;l++){let c=t[l],h,d,p=-1,m=0;for(;m<c.length&&(n.lastIndex=m,d=n.exec(c),d!==null);)m=n.lastIndex,n===we?d[1]==="!--"?n=Ko:d[1]!==void 0?n=Wo:d[2]!==void 0?(ti.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=Ot):d[3]!==void 0&&(n=Ot):n===Ot?d[0]===">"?(n=i??we,p=-1):d[1]===void 0?p=-2:(p=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?Ot:d[3]==='"'?Xo:Jo):n===Xo||n===Jo?n=Ot:n===Ko||n===Wo?n=we:(n=Ot,i=void 0);let b=n===Ot&&t[l+1].startsWith("/>")?" ":"";s+=n===we?c+dn:p>=0?(o.push(h),c.slice(0,p)+er+c.slice(p)+xt+b):c+xt+(p===-2?(o.push(void 0),l):b)}let a=s+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[qo!==void 0?qo.createHTML(a):a,o]},Nt=class{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let s=0,n=0,a=e.length-1,l=this.parts,[c,h]=ri(e,r);if(this.el=Nt.createElement(c,o),Xt.currentNode=this.el.content,r===2){let d=this.el.content,p=d.firstChild;p.remove(),d.append(...p.childNodes)}for(;(i=Xt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let d=[];for(let p of i.getAttributeNames())if(p.endsWith(er)||p.startsWith(xt)){let m=h[n++];if(d.push(p),m!==void 0){let b=i.getAttribute(m.toLowerCase()+er).split(xt),x=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:x[2],strings:b,ctor:x[1]==="."?or:x[1]==="?"?ir:x[1]==="@"?sr:Dt})}else l.push({type:6,index:s})}for(let p of d)i.removeAttribute(p)}if(ti.test(i.tagName)){let d=i.textContent.split(xt),p=d.length-1;if(p>0){i.textContent=Yt?Yt.emptyScript:"";for(let m=0;m<p;m++)i.append(d[m],$e()),Xt.nextNode(),l.push({type:2,index:++s});i.append(d[p],$e())}}}else if(i.nodeType===8)if(i.data===Nr)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(xt,d+1))!==-1;)l.push({type:7,index:s}),d+=xt.length-1}s++}}static createElement(e,r){let o=Gt.createElement("template");return o.innerHTML=e,o}};function zt(t,e,r=t,o){var i,s,n,a;if(e===G)return e;let l=o!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[o]:r._$Cl,c=Se(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,r,o)),o!==void 0?((n=(a=r)._$Co)!==null&&n!==void 0?n:a._$Co=[])[o]=l:r._$Cl=l),l!==void 0&&(e=zt(t,l._$AS(t,e.values),l,o)),e}var rr=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;let{el:{content:o},parts:i}=this._$AD,s=((r=e?.creationScope)!==null&&r!==void 0?r:Gt).importNode(o,!0);Xt.currentNode=s;let n=Xt.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new Ct(n,n.nextSibling,this,e):c.type===1?h=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(h=new nr(n,this,e)),this._$AV.push(h),c=i[++l]}a!==c?.index&&(n=Xt.nextNode(),a++)}return s}v(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},Ct=class{constructor(e,r,o,i){var s;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=zt(this,e,r),Se(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==G&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Qo(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==E&&Se(this._$AH)?this._$AA.nextSibling.data=e:this.$(Gt.createTextNode(e)),this._$AH=e}g(e){var r;let{values:o,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Nt.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===s)this._$AH.v(o);else{let n=new rr(s,this),a=n.u(this.options);n.v(o),this.$(a),this._$AH=n}}_$AC(e){let r=Yo.get(e.strings);return r===void 0&&Yo.set(e.strings,r=new Nt(e)),r}T(e){Zo(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,i=0;for(let s of e)i===r.length?r.push(o=new Ct(this.k($e()),this.k($e()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,r);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}},Dt=class{constructor(e,r,o,i,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,o,i){let s=this.strings,n=!1;if(s===void 0)e=zt(this,e,r,0),n=!Se(e)||e!==this._$AH&&e!==G,n&&(this._$AH=e);else{let a=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=zt(this,a[o+l],r,l),c===G&&(c=this._$AH[l]),n||(n=!Se(c)||c!==this._$AH[l]),c===E?e=E:e!==E&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!i&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},or=class extends Dt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}},pn=Yt?Yt.emptyScript:"",ir=class extends Dt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==E?this.element.setAttribute(this.name,pn):this.element.removeAttribute(this.name)}},sr=class extends Dt{constructor(e,r,o,i,s){super(e,r,o,i,s),this.type=5}_$AI(e,r=this){var o;if((e=(o=zt(this,e,r,0))!==null&&o!==void 0?o:E)===G)return;let i=this._$AH,s=e===E&&i!==E||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==E&&(i===E||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,o;typeof this._$AH=="function"?this._$AH.call((o=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},nr=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){zt(this,e)}},oi={O:er,P:xt,A:Nr,C:1,M:ri,L:rr,D:Qo,R:zt,I:Ct,V:Dt,H:ir,N:sr,U:or,F:nr},Go=tr.litHtmlPolyfillSupport;Go?.(Nt,Ct),((Ir=tr.litHtmlVersions)!==null&&Ir!==void 0?Ir:tr.litHtmlVersions=[]).push("2.7.2");var ii=(t,e,r)=>{var o,i;let s=(o=r?.renderBefore)!==null&&o!==void 0?o:e,n=s._$litPart$;if(n===void 0){let a=(i=r?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new Ct(e.insertBefore($e(),a),a,void 0,r??{})}return n._$AI(t),n};var zr,Dr;var K=class extends _t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;let o=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=o.firstChild),o}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ii(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return G}};K.finalized=!0,K._$litElement$=!0,(zr=globalThis.litElementHydrateSupport)===null||zr===void 0||zr.call(globalThis,{LitElement:K});var si=globalThis.litElementPolyfillSupport;si?.({LitElement:K});((Dr=globalThis.litElementVersions)!==null&&Dr!==void 0?Dr:globalThis.litElementVersions=[]).push("3.3.1");var Et=t=>e=>typeof e=="function"?((r,o)=>(customElements.define(r,o),o))(t,e):((r,o)=>{let{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(n){customElements.define(r,n)}}})(t,e);var fn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function lt(t){return(e,r)=>r!==void 0?((o,i,s)=>{i.constructor.createProperty(s,o)})(t,e,r):fn(t,e)}function H(t){return lt({...t,state:!0})}var ct=({finisher:t,descriptor:e})=>(r,o)=>{var i;if(o===void 0){let s=(i=r.originalKey)!==null&&i!==void 0?i:r.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(r.key)}:{...r,key:s};return t!=null&&(n.finisher=function(a){t(a,s)}),n}{let s=r.constructor;e!==void 0&&Object.defineProperty(r,o,e(o)),t?.(s,o)}};function Ce(t,e){return ct({descriptor:r=>{let o={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){let i=typeof r=="symbol"?Symbol():"__"+r;o.get=function(){var s,n;return this[i]===void 0&&(this[i]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&n!==void 0?n:null),this[i]}}return o}})}var Br,Al=((Br=window.HTMLSlotElement)===null||Br===void 0?void 0:Br.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(r=>r.nodeType===Node.ELEMENT_NODE);var Zt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Qt=t=>(...e)=>({_$litDirective$:t,values:e}),At=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var{I:mn}=oi;var ni=()=>document.createComment(""),te=(t,e,r)=>{var o;let i=t._$AA.parentNode,s=e===void 0?t._$AB:e._$AA;if(r===void 0){let n=i.insertBefore(ni(),s),a=i.insertBefore(ni(),s);r=new mn(n,a,t,t.options)}else{let n=r._$AB.nextSibling,a=r._$AM,l=a!==t;if(l){let c;(o=r._$AQ)===null||o===void 0||o.call(r,t),r._$AM=t,r._$AP!==void 0&&(c=t._$AU)!==a._$AU&&r._$AP(c)}if(n!==s||l){let c=r._$AA;for(;c!==n;){let h=c.nextSibling;i.insertBefore(c,s),c=h}}}return r},Pt=(t,e,r=t)=>(t._$AI(e,r),t),vn={},ai=(t,e=vn)=>t._$AH=e,li=t=>t._$AH,ar=t=>{var e;(e=t._$AP)===null||e===void 0||e.call(t,!1,!0);let r=t._$AA,o=t._$AB.nextSibling;for(;r!==o;){let i=r.nextSibling;r.remove(),r=i}};var ci=(t,e,r)=>{let o=new Map;for(let i=e;i<=r;i++)o.set(t[i],i);return o},ee=Qt(class extends At{constructor(t){if(super(t),t.type!==Zt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);let i=[],s=[],n=0;for(let a of t)i[n]=o?o(a,n):n,s[n]=r(a,n),n++;return{values:s,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){var i;let s=li(t),{values:n,keys:a}=this.dt(e,r,o);if(!Array.isArray(s))return this.ht=a,n;let l=(i=this.ht)!==null&&i!==void 0?i:this.ht=[],c=[],h,d,p=0,m=s.length-1,b=0,x=n.length-1;for(;p<=m&&b<=x;)if(s[p]===null)p++;else if(s[m]===null)m--;else if(l[p]===a[b])c[b]=Pt(s[p],n[b]),p++,b++;else if(l[m]===a[x])c[x]=Pt(s[m],n[x]),m--,x--;else if(l[p]===a[x])c[x]=Pt(s[p],n[x]),te(t,c[x+1],s[p]),p++,x--;else if(l[m]===a[b])c[b]=Pt(s[m],n[b]),te(t,s[p],s[m]),m--,b++;else if(h===void 0&&(h=ci(a,b,x),d=ci(l,p,m)),h.has(l[p]))if(h.has(l[m])){let S=d.get(a[b]),R=S!==void 0?s[S]:null;if(R===null){let q=te(t,s[p]);Pt(q,n[b]),c[b]=q}else c[b]=Pt(R,n[b]),te(t,s[p],R),s[S]=null;b++}else ar(s[m]),m--;else ar(s[p]),p++;for(;b<=x;){let S=te(t,c[x+1]);Pt(S,n[b]),c[b++]=S}for(;p<=m;){let S=s[p++];S!==null&&ar(S)}return this.ht=a,ai(t,c),G}});function*ui(t,e){if(t!==void 0){let r=0;for(let o of t)yield e(o,r++)}}function*hi(t,e,r=1){let o=e===void 0?0:t;e!=null||(e=t);for(let i=o;r>0?i<e:e<i;i+=r)yield i}var bn=/[$_\p{ID_Start}]/u,gn=/[$_\u200C\u200D\p{ID_Continue}]/u;function yn(t,e){return(e?/^[\x00-\xFF]*$/:/^[\x00-\x7F]*$/).test(t)}function pi(t,e=!1){let r=[],o=0;for(;o<t.length;){let i=t[o],s=function(n){if(!e)throw new TypeError(n);r.push({type:"INVALID_CHAR",index:o,value:t[o++]})};if(i==="*"){r.push({type:"ASTERISK",index:o,value:t[o++]});continue}if(i==="+"||i==="?"){r.push({type:"MODIFIER",index:o,value:t[o++]});continue}if(i==="\\"){r.push({type:"ESCAPED_CHAR",index:o++,value:t[o++]});continue}if(i==="{"){r.push({type:"OPEN",index:o,value:t[o++]});continue}if(i==="}"){r.push({type:"CLOSE",index:o,value:t[o++]});continue}if(i===":"){let n="",a=o+1;for(;a<t.length;){let l=t.substr(a,1);if(a===o+1&&bn.test(l)||a!==o+1&&gn.test(l)){n+=t[a++];continue}break}if(!n){s(`Missing parameter name at ${o}`);continue}r.push({type:"NAME",index:o,value:n}),o=a;continue}if(i==="("){let n=1,a="",l=o+1,c=!1;if(t[l]==="?"){s(`Pattern cannot start with "?" at ${l}`);continue}for(;l<t.length;){if(!yn(t[l],!1)){s(`Invalid character '${t[l]}' at ${l}.`),c=!0;break}if(t[l]==="\\"){a+=t[l++]+t[l++];continue}if(t[l]===")"){if(n--,n===0){l++;break}}else if(t[l]==="("&&(n++,t[l+1]!=="?")){s(`Capturing groups are not allowed at ${l}`),c=!0;break}a+=t[l++]}if(c)continue;if(n){s(`Unbalanced pattern at ${o}`);continue}if(!a){s(`Missing pattern at ${o}`);continue}r.push({type:"PATTERN",index:o,value:a}),o=l;continue}r.push({type:"CHAR",index:o,value:t[o++]})}return r.push({type:"END",index:o,value:""}),r}function fi(t,e={}){let r=pi(t),{prefixes:o="./"}=e,i=`[^${re(e.delimiter===void 0?"/#?":e.delimiter)}]+?`,s=[],n=0,a=0,l="",c=new Set,h=S=>{if(a<r.length&&r[a].type===S)return r[a++].value},d=()=>{let S=h("MODIFIER");return S||h("ASTERISK")},p=S=>{let R=h(S);if(R!==void 0)return R;let{type:q,index:nt}=r[a];throw new TypeError(`Unexpected ${q} at ${nt}, expected ${S}`)},m=()=>{let S="",R;for(;R=h("CHAR")||h("ESCAPED_CHAR");)S+=R;return S},b=S=>S,x=e.encodePart||b;for(;a<r.length;){let S=h("CHAR"),R=h("NAME"),q=h("PATTERN");if(!R&&!q&&h("ASTERISK")&&(q=".*"),R||q){let C=S||"";o.indexOf(C)===-1&&(l+=C,C=""),l&&(s.push(x(l)),l="");let k=R||n++;if(c.has(k))throw new TypeError(`Duplicate name '${k}'.`);c.add(k),s.push({name:k,prefix:x(C),suffix:"",pattern:q||i,modifier:d()||""});continue}let nt=S||h("ESCAPED_CHAR");if(nt){l+=nt;continue}if(h("OPEN")){let C=m(),k=h("NAME")||"",v=h("PATTERN")||"";!k&&!v&&h("ASTERISK")&&(v=".*");let y=m();p("CLOSE");let A=d()||"";if(!k&&!v&&!A){l+=C;continue}if(!k&&!v&&!C)continue;l&&(s.push(x(l)),l=""),s.push({name:k||(v?n++:""),pattern:k&&!v?i:v,prefix:x(C),suffix:x(y),modifier:A});continue}l&&(s.push(x(l)),l=""),p("END")}return s}function re(t){return t.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function mi(t){return t&&t.ignoreCase?"ui":"u"}function _n(t,e){if(!e)return t;let r=/\((?:\?<(.*?)>)?(?!\?)/g,o=0,i=r.exec(t.source);for(;i;)e.push({name:i[1]||o++,prefix:"",suffix:"",modifier:"",pattern:""}),i=r.exec(t.source);return t}function xn(t,e,r){let o=t.map(i=>bi(i,e,r).source);return new RegExp(`(?:${o.join("|")})`,mi(r))}function kn(t,e,r){return vi(fi(t,r),e,r)}function vi(t,e,r={}){let{strict:o=!1,start:i=!0,end:s=!0,encode:n=h=>h}=r,a=`[${re(r.endsWith===void 0?"":r.endsWith)}]|$`,l=`[${re(r.delimiter===void 0?"/#?":r.delimiter)}]`,c=i?"^":"";for(let h of t)if(typeof h=="string")c+=re(n(h));else{let d=re(n(h.prefix)),p=re(n(h.suffix));if(h.pattern)if(e&&e.push(h),d||p)if(h.modifier==="+"||h.modifier==="*"){let m=h.modifier==="*"?"?":"";c+=`(?:${d}((?:${h.pattern})(?:${p}${d}(?:${h.pattern}))*)${p})${m}`}else c+=`(?:${d}(${h.pattern})${p})${h.modifier}`;else h.modifier==="+"||h.modifier==="*"?c+=`((?:${h.pattern})${h.modifier})`:c+=`(${h.pattern})${h.modifier}`;else c+=`(?:${d}${p})${h.modifier}`}if(s)o||(c+=`${l}?`),c+=r.endsWith?`(?=${a})`:"$";else{let h=t[t.length-1],d=typeof h=="string"?l.indexOf(h[h.length-1])>-1:h===void 0;o||(c+=`(?:${l}(?=${a}))?`),d||(c+=`(?=${l}|${a})`)}return new RegExp(c,mi(r))}function bi(t,e,r){return t instanceof RegExp?_n(t,e):Array.isArray(t)?xn(t,e,r):kn(t,e,r)}var Rt={delimiter:"",prefixes:"",sensitive:!0,strict:!0},wn={delimiter:".",prefixes:"",sensitive:!0,strict:!0},$n={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};function Sn(t,e){return t.length?t[0]==="/"?!0:!e||t.length<2?!1:(t[0]=="\\"||t[0]=="{")&&t[1]=="/":!1}function gi(t,e){return t.startsWith(e)?t.substring(e.length,t.length):t}function Cn(t,e){return t.endsWith(e)?t.substr(0,t.length-e.length):t}function yi(t){return!t||t.length<2?!1:t[0]==="["||(t[0]==="\\"||t[0]==="{")&&t[1]==="["}var _i=["ftp","file","http","https","ws","wss"];function xi(t){if(!t)return!0;for(let e of _i)if(t.test(e))return!0;return!1}function En(t,e){if(t=gi(t,"#"),e||t==="")return t;let r=new URL("https://example.com");return r.hash=t,r.hash?r.hash.substring(1,r.hash.length):""}function An(t,e){if(t=gi(t,"?"),e||t==="")return t;let r=new URL("https://example.com");return r.search=t,r.search?r.search.substring(1,r.search.length):""}function Pn(t,e){return e||t===""?t:yi(t)?$i(t):wi(t)}function Tn(t,e){if(e||t==="")return t;let r=new URL("https://example.com");return r.password=t,r.password}function Rn(t,e){if(e||t==="")return t;let r=new URL("https://example.com");return r.username=t,r.username}function jn(t,e,r){if(r||t==="")return t;if(e&&!_i.includes(e))return new URL(`${e}:${t}`).pathname;let o=t[0]=="/";return t=new URL(o?t:"/-"+t,"https://example.com").pathname,o||(t=t.substring(2,t.length)),t}function Ln(t,e,r){return ki(e)===t&&(t=""),r||t===""?t:Si(t)}function In(t,e){return t=Cn(t,":"),e||t===""?t:Mr(t)}function ki(t){switch(t){case"ws":case"http":return"80";case"wws":case"https":return"443";case"ftp":return"21";default:return""}}function Mr(t){if(t==="")return t;if(/^[-+.A-Za-z0-9]*$/.test(t))return t.toLowerCase();throw new TypeError(`Invalid protocol '${t}'.`)}function On(t){if(t==="")return t;let e=new URL("https://example.com");return e.username=t,e.username}function Nn(t){if(t==="")return t;let e=new URL("https://example.com");return e.password=t,e.password}function wi(t){if(t==="")return t;if(/[\t\n\r #%/:<>?@[\]^\\|]/g.test(t))throw new TypeError(`Invalid hostname '${t}'`);let e=new URL("https://example.com");return e.hostname=t,e.hostname}function $i(t){if(t==="")return t;if(/[^0-9a-fA-F[\]:]/g.test(t))throw new TypeError(`Invalid IPv6 hostname '${t}'`);return t.toLowerCase()}function Si(t){if(t===""||/^[0-9]*$/.test(t)&&parseInt(t)<=65535)return t;throw new TypeError(`Invalid port '${t}'.`)}function zn(t){if(t==="")return t;let e=new URL("https://example.com");return e.pathname=t[0]!=="/"?"/-"+t:t,t[0]!=="/"?e.pathname.substring(2,e.pathname.length):e.pathname}function Dn(t){return t===""?t:new URL(`data:${t}`).pathname}function Bn(t){if(t==="")return t;let e=new URL("https://example.com");return e.search=t,e.search.substring(1,e.search.length)}function Un(t){if(t==="")return t;let e=new URL("https://example.com");return e.hash=t,e.hash.substring(1,e.hash.length)}var Mn=class{constructor(t){this.tokenList=[],this.internalResult={},this.tokenIndex=0,this.tokenIncrement=1,this.componentStart=0,this.state=0,this.groupDepth=0,this.hostnameIPv6BracketDepth=0,this.shouldTreatAsStandardURL=!1,this.input=t}get result(){return this.internalResult}parse(){for(this.tokenList=pi(this.input,!0);this.tokenIndex<this.tokenList.length;this.tokenIndex+=this.tokenIncrement){if(this.tokenIncrement=1,this.tokenList[this.tokenIndex].type==="END"){if(this.state===0){this.rewind(),this.isHashPrefix()?this.changeState(9,1):this.isSearchPrefix()?(this.changeState(8,1),this.internalResult.hash=""):(this.changeState(7,0),this.internalResult.search="",this.internalResult.hash="");continue}else if(this.state===2){this.rewindAndSetState(5);continue}this.changeState(10,0);break}if(this.groupDepth>0)if(this.isGroupClose())this.groupDepth-=1;else continue;if(this.isGroupOpen()){this.groupDepth+=1;continue}switch(this.state){case 0:this.isProtocolSuffix()&&(this.internalResult.username="",this.internalResult.password="",this.internalResult.hostname="",this.internalResult.port="",this.internalResult.pathname="",this.internalResult.search="",this.internalResult.hash="",this.rewindAndSetState(1));break;case 1:if(this.isProtocolSuffix()){this.computeShouldTreatAsStandardURL();let t=7,e=1;this.shouldTreatAsStandardURL&&(this.internalResult.pathname="/"),this.nextIsAuthoritySlashes()?(t=2,e=3):this.shouldTreatAsStandardURL&&(t=2),this.changeState(t,e)}break;case 2:this.isIdentityTerminator()?this.rewindAndSetState(3):(this.isPathnameStart()||this.isSearchPrefix()||this.isHashPrefix())&&this.rewindAndSetState(5);break;case 3:this.isPasswordPrefix()?this.changeState(4,1):this.isIdentityTerminator()&&this.changeState(5,1);break;case 4:this.isIdentityTerminator()&&this.changeState(5,1);break;case 5:this.isIPv6Open()?this.hostnameIPv6BracketDepth+=1:this.isIPv6Close()&&(this.hostnameIPv6BracketDepth-=1),this.isPortPrefix()&&!this.hostnameIPv6BracketDepth?this.changeState(6,1):this.isPathnameStart()?this.changeState(7,0):this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 6:this.isPathnameStart()?this.changeState(7,0):this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 7:this.isSearchPrefix()?this.changeState(8,1):this.isHashPrefix()&&this.changeState(9,1);break;case 8:this.isHashPrefix()&&this.changeState(9,1);break;case 9:break;case 10:break}}}changeState(t,e){switch(this.state){case 0:break;case 1:this.internalResult.protocol=this.makeComponentString();break;case 2:break;case 3:this.internalResult.username=this.makeComponentString();break;case 4:this.internalResult.password=this.makeComponentString();break;case 5:this.internalResult.hostname=this.makeComponentString();break;case 6:this.internalResult.port=this.makeComponentString();break;case 7:this.internalResult.pathname=this.makeComponentString();break;case 8:this.internalResult.search=this.makeComponentString();break;case 9:this.internalResult.hash=this.makeComponentString();break;case 10:break}this.changeStateWithoutSettingComponent(t,e)}changeStateWithoutSettingComponent(t,e){this.state=t,this.componentStart=this.tokenIndex+e,this.tokenIndex+=e,this.tokenIncrement=0}rewind(){this.tokenIndex=this.componentStart,this.tokenIncrement=0}rewindAndSetState(t){this.rewind(),this.state=t}safeToken(t){return t<0&&(t=this.tokenList.length-t),t<this.tokenList.length?this.tokenList[t]:this.tokenList[this.tokenList.length-1]}isNonSpecialPatternChar(t,e){let r=this.safeToken(t);return r.value===e&&(r.type==="CHAR"||r.type==="ESCAPED_CHAR"||r.type==="INVALID_CHAR")}isProtocolSuffix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}nextIsAuthoritySlashes(){return this.isNonSpecialPatternChar(this.tokenIndex+1,"/")&&this.isNonSpecialPatternChar(this.tokenIndex+2,"/")}isIdentityTerminator(){return this.isNonSpecialPatternChar(this.tokenIndex,"@")}isPasswordPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}isPortPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,":")}isPathnameStart(){return this.isNonSpecialPatternChar(this.tokenIndex,"/")}isSearchPrefix(){if(this.isNonSpecialPatternChar(this.tokenIndex,"?"))return!0;if(this.tokenList[this.tokenIndex].value!=="?")return!1;let t=this.safeToken(this.tokenIndex-1);return t.type!=="NAME"&&t.type!=="PATTERN"&&t.type!=="CLOSE"&&t.type!=="ASTERISK"}isHashPrefix(){return this.isNonSpecialPatternChar(this.tokenIndex,"#")}isGroupOpen(){return this.tokenList[this.tokenIndex].type=="OPEN"}isGroupClose(){return this.tokenList[this.tokenIndex].type=="CLOSE"}isIPv6Open(){return this.isNonSpecialPatternChar(this.tokenIndex,"[")}isIPv6Close(){return this.isNonSpecialPatternChar(this.tokenIndex,"]")}makeComponentString(){let t=this.tokenList[this.tokenIndex],e=this.safeToken(this.componentStart).index;return this.input.substring(e,t.index)}computeShouldTreatAsStandardURL(){let t={};Object.assign(t,Rt),t.encodePart=Mr;let e=bi(this.makeComponentString(),void 0,t);this.shouldTreatAsStandardURL=xi(e)}},Ur=["protocol","username","password","hostname","port","pathname","search","hash"],Tt="*";function di(t,e){if(typeof t!="string")throw new TypeError("parameter 1 is not of type 'string'.");let r=new URL(t,e);return{protocol:r.protocol.substring(0,r.protocol.length-1),username:r.username,password:r.password,hostname:r.hostname,port:r.port,pathname:r.pathname,search:r.search!=""?r.search.substring(1,r.search.length):void 0,hash:r.hash!=""?r.hash.substring(1,r.hash.length):void 0}}function kt(t,e){return e?oe(t):t}function Ee(t,e,r){let o;if(typeof e.baseURL=="string")try{o=new URL(e.baseURL),t.protocol=kt(o.protocol.substring(0,o.protocol.length-1),r),t.username=kt(o.username,r),t.password=kt(o.password,r),t.hostname=kt(o.hostname,r),t.port=kt(o.port,r),t.pathname=kt(o.pathname,r),t.search=kt(o.search.substring(1,o.search.length),r),t.hash=kt(o.hash.substring(1,o.hash.length),r)}catch{throw new TypeError(`invalid baseURL '${e.baseURL}'.`)}if(typeof e.protocol=="string"&&(t.protocol=In(e.protocol,r)),typeof e.username=="string"&&(t.username=Rn(e.username,r)),typeof e.password=="string"&&(t.password=Tn(e.password,r)),typeof e.hostname=="string"&&(t.hostname=Pn(e.hostname,r)),typeof e.port=="string"&&(t.port=Ln(e.port,t.protocol,r)),typeof e.pathname=="string"){if(t.pathname=e.pathname,o&&!Sn(t.pathname,r)){let i=o.pathname.lastIndexOf("/");i>=0&&(t.pathname=kt(o.pathname.substring(0,i+1),r)+t.pathname)}t.pathname=jn(t.pathname,t.protocol,r)}return typeof e.search=="string"&&(t.search=An(e.search,r)),typeof e.hash=="string"&&(t.hash=En(e.hash,r)),t}function oe(t){return t.replace(/([+*?:{}()\\])/g,"\\$1")}function Vn(t){return t.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function Hn(t,e){let r=".*",o=`[^${Vn(e.delimiter===void 0?"/#?":e.delimiter)}]+?`,i=/[$_\u200C\u200D\p{ID_Continue}]/u,s="";for(let n=0;n<t.length;++n){let a=t[n],l=n>0?t[n-1]:null,c=n<t.length-1?t[n+1]:null;if(typeof a=="string"){s+=oe(a);continue}if(a.pattern===""){if(a.modifier===""){s+=oe(a.prefix);continue}s+=`{${oe(a.prefix)}}${a.modifier}`;continue}let h=typeof a.name!="number",d=e.prefixes!==void 0?e.prefixes:"./",p=a.suffix!==""||a.prefix!==""&&(a.prefix.length!==1||!d.includes(a.prefix));if(!p&&h&&a.pattern===o&&a.modifier===""&&c&&!c.prefix&&!c.suffix)if(typeof c=="string"){let m=c.length>0?c[0]:"";p=i.test(m)}else p=typeof c.name=="number";if(!p&&a.prefix===""&&l&&typeof l=="string"&&l.length>0){let m=l[l.length-1];p=d.includes(m)}p&&(s+="{"),s+=oe(a.prefix),h&&(s+=`:${a.name}`),a.pattern===r?!h&&(!l||typeof l=="string"||l.modifier||p||a.prefix!=="")?s+="*":s+=`(${r})`:a.pattern===o?h||(s+=`(${o})`):s+=`(${a.pattern})`,a.pattern===o&&h&&a.suffix!==""&&i.test(a.suffix[0])&&(s+="\\"),s+=oe(a.suffix),p&&(s+="}"),s+=a.modifier}return s}var Ci=class{constructor(t={},e,r){this.regexp={},this.keys={},this.component_pattern={};try{let o;if(typeof e=="string"?o=e:r=e,typeof t=="string"){let a=new Mn(t);if(a.parse(),t=a.result,o===void 0&&typeof t.protocol!="string")throw new TypeError("A base URL must be provided for a relative constructor string.");t.baseURL=o}else{if(!t||typeof t!="object")throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");if(o)throw new TypeError("parameter 1 is not of type 'string'.")}typeof r>"u"&&(r={ignoreCase:!1});let i={ignoreCase:r.ignoreCase===!0},s={pathname:Tt,protocol:Tt,username:Tt,password:Tt,hostname:Tt,port:Tt,search:Tt,hash:Tt};this.pattern=Ee(s,t,!0),ki(this.pattern.protocol)===this.pattern.port&&(this.pattern.port="");let n;for(n of Ur){if(!(n in this.pattern))continue;let a={},l=this.pattern[n];switch(this.keys[n]=[],n){case"protocol":Object.assign(a,Rt),a.encodePart=Mr;break;case"username":Object.assign(a,Rt),a.encodePart=On;break;case"password":Object.assign(a,Rt),a.encodePart=Nn;break;case"hostname":Object.assign(a,wn),yi(l)?a.encodePart=$i:a.encodePart=wi;break;case"port":Object.assign(a,Rt),a.encodePart=Si;break;case"pathname":xi(this.regexp.protocol)?(Object.assign(a,$n,i),a.encodePart=zn):(Object.assign(a,Rt,i),a.encodePart=Dn);break;case"search":Object.assign(a,Rt,i),a.encodePart=Bn;break;case"hash":Object.assign(a,Rt,i),a.encodePart=Un;break}try{let c=fi(l,a);this.regexp[n]=vi(c,this.keys[n],a),this.component_pattern[n]=Hn(c,a)}catch{throw new TypeError(`invalid ${n} pattern '${this.pattern[n]}'.`)}}}catch(o){throw new TypeError(`Failed to construct 'URLPattern': ${o.message}`)}}test(t={},e){let r={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof t!="string"&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof t>"u")return!1;try{typeof t=="object"?r=Ee(r,t,!1):r=Ee(r,di(t,e),!1)}catch{return!1}let o;for(o of Ur)if(!this.regexp[o].exec(r[o]))return!1;return!0}exec(t={},e){let r={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if(typeof t!="string"&&e)throw new TypeError("parameter 1 is not of type 'string'.");if(typeof t>"u")return;try{typeof t=="object"?r=Ee(r,t,!1):r=Ee(r,di(t,e),!1)}catch{return null}let o={};e?o.inputs=[t,e]:o.inputs=[t];let i;for(i of Ur){let s=this.regexp[i].exec(r[i]);if(!s)return null;let n={};for(let[a,l]of this.keys[i].entries())if(typeof l.name=="string"||typeof l.name=="number"){let c=s[a+1];n[l.name]=c}o[i]={input:r[i]||"",groups:n}}return o}get protocol(){return this.component_pattern.protocol}get username(){return this.component_pattern.username}get password(){return this.component_pattern.password}get hostname(){return this.component_pattern.hostname}get port(){return this.component_pattern.port}get pathname(){return this.component_pattern.pathname}get search(){return this.component_pattern.search}get hash(){return this.component_pattern.hash}};globalThis.URLPattern||(globalThis.URLPattern=Ci);var Ei=new WeakMap,Ai=t=>{if((r=>r.pattern!==void 0)(t))return t.pattern;let e=Ei.get(t);return e===void 0&&Ei.set(t,e=new URLPattern({pathname:t.path})),e},Ae=class{constructor(e,r,o){this.routes=[],this.o=[],this.t={},this.i=i=>{if(i.routes===this)return;let s=i.routes;this.o.push(s),s.l=this,i.stopImmediatePropagation(),i.onDisconnect=()=>{var a;(a=this.o)===null||a===void 0||a.splice(this.o.indexOf(s)>>>0,1)};let n=Pi(this.t);n!==void 0&&s.goto(n)},(this.h=e).addController(this),this.routes=[...r],this.fallback=o?.fallback}link(e){var r,o;if(e?.startsWith("/"))return e;if(e?.startsWith("."))throw Error("Not implemented");return e!=null||(e=this.u),((o=(r=this.l)===null||r===void 0?void 0:r.link())!==null&&o!==void 0?o:"")+e}async goto(e){var r;let o;if(this.routes.length===0&&this.fallback===void 0)o=e,this.u="",this.t={0:o};else{let i=this.v(e);if(i===void 0)throw Error("No route found for "+e);let s=Ai(i).exec({pathname:e}),n=(r=s?.pathname.groups)!==null&&r!==void 0?r:{};if(o=Pi(n),typeof i.enter=="function"&&await i.enter(n)===!1)return;this.p=i,this.t=n,this.u=o===void 0?e:e.substring(0,e.length-o.length)}if(o!==void 0)for(let i of this.o)i.goto(o);this.h.requestUpdate()}outlet(){var e,r;return(r=(e=this.p)===null||e===void 0?void 0:e.render)===null||r===void 0?void 0:r.call(e,this.t)}get params(){return this.t}v(e){let r=this.routes.find(o=>Ai(o).test({pathname:e}));return r||this.fallback===void 0?r:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.h.addEventListener(jt.eventName,this.i);let e=new jt(this);this.h.dispatchEvent(e),this._=e.onDisconnect}hostDisconnected(){var e;(e=this._)===null||e===void 0||e.call(this),this.l=void 0}},Pi=t=>{let e;for(let r of Object.keys(t))/\d+/.test(r)&&(e===void 0||r>e)&&(e=r);return e&&t[e]},jt=class extends Event{constructor(e){super(jt.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}};jt.eventName="lit-routes-connected";var Fn=location.origin||location.protocol+"//"+location.host,Pe=class extends Ae{constructor(){super(...arguments),this.m=e=>{let r=e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey;if(e.defaultPrevented||r)return;let o=e.composedPath().find(n=>n.tagName==="A");if(o===void 0||o.target!==""||o.hasAttribute("download")||o.getAttribute("rel")==="external")return;let i=o.href;if(i===""||i.startsWith("mailto:"))return;let s=window.location;o.origin===Fn&&(e.preventDefault(),i!==s.href&&(window.history.pushState({},"",i),this.goto(o.pathname)))},this.R=e=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}};var ie=class extends Event{constructor(e,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=o}};var Te=class{constructor(e,r,o,i){var s;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){let n=r;this.context=n.context,this.callback=n.callback,this.subscribe=(s=n.subscribe)!==null&&s!==void 0&&s}else this.context=r,this.callback=o,this.subscribe=i!=null&&i;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ie(this.context,this.t,this.subscribe))}};var lr=class{constructor(e){this.callbacks=new Map,this.updateObservers=()=>{for(let[r,o]of this.callbacks)r(this.o,o)},e!==void 0&&(this.value=e)}get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){let o=r||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}addCallback(e,r){r&&(this.callbacks.has(e)||this.callbacks.set(e,()=>{this.callbacks.delete(e)})),e(this.value)}clearCallbacks(){this.callbacks.clear()}};var Vr=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,Object.setPrototypeOf(this,new.target.prototype)}},Re=class extends lr{constructor(e,r,o){super(r.context!==void 0?r.initialValue:o),this.onContextRequest=i=>{i.context===this.context&&i.composedPath()[0]!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,i.subscribe))},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new Vr(this.context))}};function cr({context:t}){return ct({finisher:(e,r)=>{let o=new WeakMap;e.addInitializer(a=>{o.set(a,new Re(a,{context:t}))});let i=Object.getOwnPropertyDescriptor(e.prototype,r),s=i?.set,n={...i,set:function(a){var l;(l=o.get(this))===null||l===void 0||l.setValue(a),s&&s.call(this,a)}};Object.defineProperty(e.prototype,r,n)}})}function se({context:t,subscribe:e}){return ct({finisher:(r,o)=>{r.addInitializer(i=>{new Te(i,{context:t,callback:s=>{i[o]=s},subscribe:e})})}})}var ne="ix-db";var Ti=t=>t.split("|||").map(e=>e.split("||").map(Kn)),Kn=t=>t.replace(/\d+\|/g,e=>`||${e}`).substr(2).split("||").map(e=>{let[r,o]=e.split("|");return{n:r,txt:o}});var Wn=(t,e)=>t.concat(e.filter(r=>t.indexOf(r)===-1)),Jn=(t,e)=>t.length?t.map((r,o)=>Wn(r,e[o])):[...e],Ri=t=>t?t.length===1?[...t[0]]:t.reduce((e,r)=>Jn(e,r),[]):[],Bt=["ge","ex","le","nu","de","jos","jud","ru","1sa","2sa","1ki","2ki","1ch","2ch","ezr","ne","es","job","ps","pr","ec","so","isa","jer","la","eze","da","ho","joe","am","ob","jon","mic","na","hab","zep","hag","zec","mal","mt","mr","lu","joh","ac","ro","1co","2co","ga","eph","php","col","1th","2th","1ti","2ti","tit","phm","heb","jas","1pe","2pe","1jo","2jo","3jo","jude","re"];var Hr=Bt.map(t=>[t]),Xn=t=>t.reduce((e,r)=>(r.forEach(o=>e[o]=r[0]),e),{}),Yn=t=>t.reduce((e,r,o)=>(r.forEach(i=>e[i]=Bt[o]),e),{}),Fr=t=>{let e=Xn(t);return r=>e[r&&r.toLowerCase()]||""},qr=t=>{let e=Yn(t);return r=>e[r&&r.toLowerCase()]||""};function Kr(t){let e=Ri([...t,Hr]),r=Fr(e),o=qr(e),i=e.map(C=>C.join("|")).join("|"),s="\\d{1,3}",n="\\d{1,3}",a=new RegExp(`^(${i})\\s*(${s})[ ]*:[ ]*(${n})\\b`),l=new RegExp(`^(${i})[ ]*(${s})\\b`),c=new RegExp(`^(?:${i})$`),h=new RegExp(`(^|,|;)(${i})`,"g"),d=new RegExp(`,(${i})`,"g"),p=new RegExp(`(${i})(\\d)`,"g"),m=new RegExp(`^(${s})[ ]*:[ ]*(${n})\\b`),b=new RegExp(`^(?:${i})[ ]*ff`),x=new RegExp(`^(${i})(\\d|$)`,"g");function S(C,k,v){let y,A={};return C===""?{}:k?(v.book&&v.chapter&&v.verse?A={book:v.book,chapter:v.chapter}:v.book&&v.chapter&&(A={book:v.book}),A):C===void 0?St({},v):((y=C.match(a))?A={book:r(y[1]),chapter:y[2],verse:y[3]}:(y=C.match(l))?A={book:r(y[1]),chapter:y[2]}:(y=C.match(c))?A={book:r(y[0])}:(y=C.match(m))?A={book:v.book,chapter:y[1],verse:y[2]}:(y=C.match(/(\d{1,3}\b)/))?v.verse?A={book:v.book,chapter:v.chapter,verse:y[1]}:A={book:v.book,chapter:y[1]}:A=St({},v),A)}function R(C,k){let v,y,A=!1,[at,Ar]=C.split("-").map(Oo=>Oo.trim().toLowerCase());return(/\d{1,3}[ ]*ff$/i.test(at)||b.test(at))&&(at=at.replace(/[ ]*ff$/,""),A=!0),(v=at.match(a))?(y={book:r(v[1]),chapter:v[2],verse:v[3]},k=St({},y)):(v=at.match(l))?(y={book:r(v[1]),chapter:v[2],verse:"1"},k={book:y.book,chapter:y.chapter}):(v=at.match(c))?(y={book:r(v[0]),chapter:"1",verse:"1"},k={book:y.book}):(v=at.match(m))?(y={book:k.book,chapter:v[1],verse:v[2]},k=St({},y)):(v=at.match(/(\d{1,3}\b)/))&&(k.verse?(y={book:k.book,chapter:k.chapter,verse:v[1]},k=St({},y)):(y={book:k.book,chapter:v[1],verse:"1"},k={book:y.book,chapter:y.chapter})),{start:y,end:S(Ar,A,k),ctx:k}}let q=C=>{let{ranges:k}=C.split(/[,\n;]+/g).reduce((v,y)=>{let A=R(y,v.ctx);return v.ctx=A.ctx,A.start&&v.ranges.push({start:A.start,end:A.end}),v},{ctx:{book:"genesis"},ranges:[]});return k},nt=C=>C.toLowerCase().replace(/\n+/g,";").replace(/\s/g,"").split(";").reduce((k,v)=>[...k,v.split(",").reduce((y,A)=>{let at=A.split("-").map(Ar=>Ar.replace(x,(Oo,on,sn)=>`${o(on)}${sn||""}`)).join("-");return[...y,at]},[])],[]).join(";"),Xe=C=>C.toLowerCase().replace(h,(k,v,y)=>`${v}${r(y)}`).replace(d,(k,v)=>`, ${v}`).replace(p,(k,v,y)=>`${v} ${y}`).replace(/;/g,`
`);this.getVerseRanges=q,this.bookNames=e,this.normaliseBookName=r,this.normaliseBookNameShort=o,this.partToRange=R,this.compressRangesText=nt,this.uncompressRangesText=Xe}var ji=Kr;var je={key:"af",displayname:"afrikaans",abbreviations:[["Genesis","gen","ge","gn"],["Eksodus","eks","ek"],["Levitikus","lev","le","lv"],["Numeri","num","nu","nm"],["Deuteronomium","deut","dt"],["Josua","jos","js"],["Rigters","rig"],["Rut","rt"],["1 Samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","een samuel"],["2 Samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","twee samuel"],["1 Konings","1 kon","i kgs","1kgs","i kon","1kon","i konings","1konings","een konings","een kon","een kgs"],["2 Konings","2 kon","2 kgs","ii kgs","2kgs","ii kon","2kon","ii konings","2konings","2nd kgs","2nd kings","twee konings","twee kon","twee kgs"],["1 Kronieke","1 kron","1 kr","i kr","1kr","1 krn","i krn","1krn","i kron","1kron","i kronieke","1kronieke","een kronieke"],["2 Kronieke","2 kron","2 kr","ii kr","2kr","2 krn","ii krn","2krn","ii kron","2kron","ii kronieke","2kronieke","twee kronieke"],["Esra","esra","esr"],["Nehemia","neh","ne"],["Ester","est","es"],["Job","job","job","jb"],["Psalm","pslm","ps","psalms","psa","psm","pss"],["Spreuke","spr","sp"],["Prediker","pred","pre"],["Hooglied van Salomo","hooglied","hoog","salomo","sal","hvs","hs"],["Jesaja","jes","js"],["Jeremia","jer","je","jr"],["Klaagliedere van Jeremia","klaaglied","klaag","klj"],["Esegi\xEBl","eseg","ese","esg"],["Daniel","dan","da","dn"],["Hosea","hos","ho"],["Jo\xEBl","joel","joe","jl"],["Amos","amos","am"],["Obadja","obad","ob"],["Jona","jnh","jon"],["Miga","mig","mg"],["Nahum","nah","na"],["Habakuk","hab","hb"],["Sefanja","sefan","sef","sf"],["Haggai","hag","hg"],["Sagaria","sag","sg"],["Maleagi","mal","ml"],["Mattheus","matt","mat","mt"],["Markus","mark","mar","mrk","mk","mr"],["Lukas","luk","lk"],["Johannes","john","joh","jhn","jh","jn"],["Handelinge","han","hand","hd"],["Romeine","rom","ro","rm"],["1 Korinthi\xEBrs","1 korinte","1 kor","1 ko","i ko","1ko","i kor","1kor","i korinthiers","1korinthiers","een korinthiers"],["2 Korinthi\xEBrs","2 korinte","2 kor","2 ko","i ko","2ko","ii kor","2kor","ii korinthiers","2korinthiers","twee korinthiers"],["Galasi\xEBrs","gal","ga"],["Efesi\xEBrs","efes","efe","ef"],["Filippense","filp","fil","flp","fl"],["Kolossense","kol","kl"],["1 Thessalonicense","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonicense","1thessalonicense","een thessalonicense","eerste thessalonicense"],["2 Thessalonicense","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonicense","2thessalonicense","twee thessalonicense","tweede thessalonicense"],["1 Timotheus","1 tim","1 ti","i ti","1ti","i tim","1tim","i timotheus","1timotheus","een timotheus","eerste timotheus"],["2 Timotheus","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timotheus","2timotheus","twee timotheus","tweede timotheus"],["Titus","titus","tit"],["Fil\xE9mon","filem","file","flm"],["Hebre\xEBrs","heb"],["Jakobus","jak","jk"],["1 Petrus","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i petrus","1petrus","een petrus","eerste petrus"],["2 Petrus","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii petrus","2petrus","twee petrus","tweede petrus"],["1 Johannes","1 jn","i jn","1jn","i jo","1jo","i joh","1 joh","1joh","i jhn","1 jhn","1jhn","i johannes","1johannes","een johannes","eerste johannes"],["2 Johannes","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2 joh","2joh","ii jhn","2 jhn","2jhn","ii johannes","2johannes","twee johannes","tweede johannes"],["3 Johannes","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii johannes","3johannes","drie johannes","derde johannes"],["Judas","jd"],["Openbaring","open","opb","op","die openbaring"]]};var Wr={key:"en",displayname:"english",abbreviations:[["genesis","gen","ge","gn"],["exodus","exo","ex","exod"],["leviticus","lev","le","lv"],["numbers","num","nu","nm","nb"],["deuteronomy","deut","dt"],["joshua","josh","jos","jsh"],["judges","judg","jdg","jg","jdgs"],["ruth","rth","ru"],["1 samuel","1 sam","1 sa","1samuel","1s","i sa","1 sm","1sa","i sam","1sam","i samuel","1st samuel","first samuel"],["2 samuel","2 sam","2 sa","2s","ii sa","2 sm","2sa","ii sam","2sam","ii samuel","2samuel","2nd samuel","second samuel"],["1 kings","1 kgs","1 ki","1k","i kgs","1kgs","i ki","1ki","i kings","1kings","1st kgs","1st kings","first kings","first kgs","1kin"],["2 kings","2 kgs","2 ki","2k","ii kgs","2kgs","ii ki","2ki","ii kings","2kings","2nd kgs","2nd kings","second kings","second kgs","2kin"],["1 chronicles","1 chron","1 ch","i ch","1ch","1 chr","i chr","1chr","i chron","1chron","i chronicles","1chronicles","1st chronicles","first chronicles"],["2 chronicles","2 chron","2 ch","ii ch","2ch","ii chr","2chr","ii chron","2chron","ii chronicles","2chronicles","2nd chronicles","second chronicles"],["ezra","ezra","ezr"],["nehemiah","neh","ne"],["esther","esth","es"],["job","job","job","jb"],["psalm","pslm","ps","psalms","psa","psm","pss"],["proverbs","prov","pr","prv"],["ecclesiastes","eccles","ec","qoh","qoheleth"],["song of solomon","song","so","canticle of canticles","canticles","song of songs","sos"],["isaiah","isa","is"],["jeremiah","jer","je","jr"],["lamentations","lam","la"],["ezekiel","ezek","eze","ezk"],["daniel","dan","da","dn"],["hosea","hos","ho"],["joel","joel","joe","jl"],["amos","amos","am"],["obadiah","obad","ob"],["jonah","jnh","jon"],["micah","micah","mic"],["nahum","nah","na"],["habakkuk","hab","hab"],["zephaniah","zeph","zep","zp"],["haggai","hag","hg"],["zechariah","zech","zec","zc"],["malachi","mal","mal","ml"],["matthew","matt","mt"],["mark","mrk","mk","mr"],["luke","luk","lk"],["john","john","jn","jhn"],["acts","acts","ac"],["romans","rom","ro","rm"],["1 corinthians","1 cor","1 co","i co","1co","i cor","1cor","i corinthians","1corinthians","1st corinthians","first corinthians"],["2 corinthians","2 cor","2 co","ii co","2co","ii cor","2cor","ii corinthians","2corinthians","2nd corinthians","second corinthians"],["galatians","gal","ga"],["ephesians","ephes","eph"],["philippians","phil","php"],["colossians","col","col"],["1 thessalonians","1 thess","1 th","i th","1th","i thes","1thes","i thess","1thess","i thessalonians","1thessalonians","1st thessalonians","first thessalonians"],["2 thessalonians","2 thess","2 th","ii th","2th","ii thes","2thes","ii thess","2thess","ii thessalonians","2thessalonians","2nd thessalonians","second thessalonians"],["1 timothy","1 tim","1 ti","i ti","1ti","i tim","1tim","i timothy","1timothy","1st timothy","first timothy"],["2 timothy","2 tim","2 ti","ii ti","2ti","ii tim","2tim","ii timothy","2timothy","2nd timothy","second timothy"],["titus","titus","tit"],["philemon","philem","phm"],["hebrews","hebrews","heb"],["james","james","jas","jm"],["1 peter","1 pet","1 pe","i pe","1pe","i pet","1pet","i pt","1 pt","1pt","i peter","1peter","1st peter","first peter"],["2 peter","2 pet","2 pe","ii pe","2pe","ii pet","2pet","ii pt","2 pt","2pt","ii peter","2peter","2nd peter","second peter"],["1 john","1 jn","i jn","1jn","i jo","1jo","i joh","1joh","i jhn","1 jhn","1jhn","i john","1john","1st john","first john"],["2 john","2 jn","ii jn","2jn","ii jo","2jo","ii joh","2joh","ii jhn","2 jhn","2jhn","ii john","2john","2nd john","second john"],["3 john","3 jn","iii jn","3jn","iii jo","3jo","iii joh","3joh","iii jhn","3 jhn","3jhn","iii john","3john","3rd john","third john"],["jude","jd"],["revelation","rev","re","the revelation"]]};var O,T,le,W,ae,pt,Ii=(t,e,r)=>{ae=Ut(e),pt=Ut(r);let o=/^\[([\d]*):([[\d]*):([\d])*\]$/,i=t.match(o);if(i)O=parseInt(i[1]),T=parseInt(i[2]),le=parseInt(i[3]);else{let s=t.split(":");O=parseInt(s[0]),T=parseInt(s[1]),le=parseInt(s[2])}switch(O){case 15:case 18:Gn();break;case 1:case 20:case 22:case 26:case 32:case 27:Li();break;case 8:Li();break;default:W=le}return i?`[${O}:${T}:${W}]`:`${O}:${T}:${W}`};function Gn(){let t=pt.last.books[O].chapters[T].verse-ae.last.books[O].chapters[T].verse;W=le+t,t<0?W=W<1?0:W:W=W>pt.last.books[O].chapters[T].verse?pt.last.books[O].chapters[T].verse:W}function Li(){if(W=le,pt.last.books[O].chapters[T].verse!==ae.last.books[O].chapters[T].verse){let t=!1,e=!1;T-1>=0&&pt.last.books[O].chapters[T-1].verse!==ae.last.books[O].chapters[T-1].verse&&(e=!0),T+1<=pt.last.books[O].chapter&&pt.last.books[O].chapters[T+1].verse!==ae.last.books[O].chapters[T+1].verse&&(t=!0),t&&W>pt.last.books[O].chapters[T].verse&&(W=1,T=T+1),e&&pt.last.books[O].chapters[T].verse>ae.last.books[O].chapters[T].verse&&(W=le+1)}}var Xr=Ii,Zn=new ji([je,Wr].map(({abbreviations:t})=>t)),{bookNames:Ni,getVerseRanges:Qn}=Zn,Oi=Ni.reduce((t,e,r)=>(t[e[0]]=r,t),{}),ta=Ni.reduce((t,e,r)=>(t[r]=e[0],t),{}),ur={},zi=(t,e)=>{ur[t]=ea(e)},Ut=t=>ur[t],ea=t=>{let e=[],r={},o={book:0,books:{}};return t.forEach((i,s)=>{o.book=s,o.books[s]={chapter:0,chapters:{}},i.forEach((n,a)=>{o.books[s].chapter=a,o.books[s].chapters[a]={verse:0},n.forEach(l=>{o.books[s].chapters[a].verse=+l.n,r[`${s}:${a}:${l.n}`]=e.length,e.push({hash:`${s}:${a}:${l.n}`,text:l.txt})})})}),{verseList:e,verseLookUp:r,last:o}},ra=(t,e)=>{let{start:r,end:o}=e,i=Ut(t);if(!i)return{};let s=i.verseLookUp[`${Oi[r.book]}:${r.chapter-1}:${r.verse}`],n=i.last.book,a=Jr(Oi[o.book],n),l=i.last.books[a].chapter,c=Jr(o.chapter&&o.chapter-1,l),h=i.last.books[a].chapters[c].verse,d=Jr(o.verse,h),p=i.verseLookUp[`${a}:${c}:${d}`];return{start:Bo(St({},r),{index:s}),end:{book:oa(a),chapter:`${c+1}`,verse:`${d}`,index:p}}},Jr=(t,e)=>t===void 0||t>e?e:t,oa=t=>ta[t],ia=t=>{let e=t.split(":");return{book:Bt[+e[0]],chapter:`${+e[1]+1}`,verse:e[2]}},Di=({rangesText:t,versionName:e})=>Qn(t||"gen - rev").map(i=>ra(e,i)),sa=(t,e)=>ur[t].verseLookUp[e],na=(t,e)=>ur[t].verseList[e],Yr=(t,e)=>{let r=sa(t,e),o=na(t,r);return{text:o?o.text:"",prettyRef:ua(ia(e))}},aa=(t,e)=>{let r=[];for(let o=t;o<=e;o++)r.push(o);return r},la=(t,e,r)=>aa(e,r).map(o=>Ut(t).verseList[o].hash),Bi=(t,e)=>{let r=[],o=e.map(({start:i,end:s})=>la(t,i.index,s.index));return r.concat(...o)},ca=t=>t.replace(/\b\w/g,e=>e.toUpperCase()),ua=({book:t,chapter:e,verse:r})=>`${ca(t)} ${e}:${r}`;var Le={},Gr=(t,e)=>(Le[t]||(Le[t]=fetch(e).then(r=>{if(r.status>=400)throw delete Le[t],new Error("Bad res from server");return r.text()}).then(r=>{let o=Ti(r);return zi(t,o),o})),Le[t]);var hr="",Mi=async t=>{if(hr)return Ui(hr);let e=await fetch(t);if(!e.ok)throw new Error("Bad res from server");return hr=await e.text(),Ui(hr)},Ui=t=>{let e=t.split(`
`);return e.splice(0,1),e.map(ha)},ha=t=>{let[e,r,o,i,s,n]=t.split("	"),a=e+"-"+r+"-"+o+":"+i,l=e+"-"+r+"-"+o;return{key:a,verse:l,sort:i,words:s,refs:n}};function Zr(t){let[e,r,o]=t.split(":");return`${parseInt(e)+1}-${parseInt(r)+1}-${o}`}var Mt="/bybel";var Fi=Object.defineProperty,da=Object.defineProperties,pa=Object.getOwnPropertyDescriptor,fa=Object.getOwnPropertyDescriptors,Vi=Object.getOwnPropertySymbols,ma=Object.prototype.hasOwnProperty,va=Object.prototype.propertyIsEnumerable,Hi=(t,e,r)=>e in t?Fi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,J=(t,e)=>{for(var r in e||(e={}))ma.call(e,r)&&Hi(t,r,e[r]);if(Vi)for(var r of Vi(e))va.call(e,r)&&Hi(t,r,e[r]);return t},ft=(t,e)=>da(t,fa(e));var u=(t,e,r,o)=>{for(var i=o>1?void 0:o?pa(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(o?n(e,r,i):n(i))||i);return o&&i&&Fi(e,r,i),i};var Ie=new WeakMap,Oe=new WeakMap,Qr=new WeakSet,dr=new WeakMap,ce=class{constructor(t,e){(this.host=t).addController(this),this.options=J({form:r=>{if(r.hasAttribute("form")&&r.getAttribute("form")!==""){let o=r.getRootNode(),i=r.getAttribute("form");if(i)return o.getElementById(i)}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),dr.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),dr.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Ie.has(this.form)?Ie.get(this.form).add(this.host):Ie.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Oe.has(this.form)||(Oe.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=Ie.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Oe.has(this.form)&&(this.form.reportValidity=Oe.get(this.form),Oe.delete(this.form))),this.form=void 0}handleFormData(t){let e=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),i=this.host.tagName.toLowerCase()==="sl-button";!e&&!i&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(s=>{t.formData.append(r,s.toString())}):t.formData.append(r,o.toString()))}handleFormSubmit(t){var e;let r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((e=Ie.get(this.form))==null||e.forEach(i=>{this.setUserInteracted(i,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),dr.set(this.host,[])}handleInteraction(t){let e=dr.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){let t=this.form.querySelectorAll("*");for(let e of t)if(typeof e.reportValidity=="function"&&!e.reportValidity())return!1}return!0}setUserInteracted(t,e){e?Qr.add(t):Qr.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let r=document.createElement("button");r.type=t,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&(r.name=e.name,r.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&r.setAttribute(o,e.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,r=!!Qr.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&r),e.toggleAttribute("data-user-valid",t&&r)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},pr=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),yu=Object.freeze(ft(J({},pr),{valid:!1,valueMissing:!0})),_u=Object.freeze(ft(J({},pr),{valid:!1,customError:!0}));var fr=window,so=fr.ShadowRoot&&(fr.ShadyCSS===void 0||fr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,no=Symbol(),qi=new WeakMap,os=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==no)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(so&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=qi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&qi.set(e,t))}return t}toString(){return this.cssText}},ba=t=>new os(typeof t=="string"?t:t+"",void 0,no),j=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new os(r,t,no)},ga=(t,e)=>{so?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{let o=document.createElement("style"),i=fr.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)})},Ki=so?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return ba(r)})(t):t,to,mr=window,Wi=mr.trustedTypes,ya=Wi?Wi.emptyScript:"",Ji=mr.reactiveElementPolyfillSupport,pe={toAttribute(t,e){switch(e){case Boolean:t=t?ya:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},is=(t,e)=>e!==t&&(e==e||t==t),eo={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:is},ue=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let o=this._$Ep(r,e);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,e=eo){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){let i=this[t];this[e]=o,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||eo}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of r)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let o of r)e.unshift(Ki(o))}else t!==void 0&&e.push(Ki(t));return e}static _$Ep(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ga(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=eo){var o;let i=this.constructor._$Ep(t,r);if(i!==void 0&&r.reflect===!0){let s=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:pe).toAttribute(e,r.type);this._$El=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,e){var r;let o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){let s=o.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:pe;this._$El=i,this[i]=n.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||is)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ue.finalized=!0,ue.elementProperties=new Map,ue.elementStyles=[],ue.shadowRootOptions={mode:"open"},Ji?.({ReactiveElement:ue}),((to=mr.reactiveElementVersions)!==null&&to!==void 0?to:mr.reactiveElementVersions=[]).push("1.6.1");var ro,vr=window,fe=vr.trustedTypes,Xi=fe?fe.createPolicy("lit-html",{createHTML:t=>t}):void 0,wt=`lit$${(Math.random()+"").slice(9)}$`,ao="?"+wt,_a=`<${ao}>`,me=document,ze=(t="")=>me.createComment(t),De=t=>t===null||typeof t!="object"&&typeof t!="function",ss=Array.isArray,ns=t=>ss(t)||typeof t?.[Symbol.iterator]=="function",Ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yi=/-->/g,Gi=/>/g,Vt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zi=/'/g,Qi=/"/g,as=/^(?:script|style|textarea|title)$/i,ls=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),L=ls(1),cs=ls(2),Z=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),ts=new WeakMap,he=me.createTreeWalker(me,129,null,!1),us=(t,e)=>{let r=t.length-1,o=[],i,s=e===2?"<svg>":"",n=Ne;for(let l=0;l<r;l++){let c=t[l],h,d,p=-1,m=0;for(;m<c.length&&(n.lastIndex=m,d=n.exec(c),d!==null);)m=n.lastIndex,n===Ne?d[1]==="!--"?n=Yi:d[1]!==void 0?n=Gi:d[2]!==void 0?(as.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=Vt):d[3]!==void 0&&(n=Vt):n===Vt?d[0]===">"?(n=i??Ne,p=-1):d[1]===void 0?p=-2:(p=n.lastIndex-d[2].length,h=d[1],n=d[3]===void 0?Vt:d[3]==='"'?Qi:Zi):n===Qi||n===Zi?n=Vt:n===Yi||n===Gi?n=Ne:(n=Vt,i=void 0);let b=n===Vt&&t[l+1].startsWith("/>")?" ":"";s+=n===Ne?c+_a:p>=0?(o.push(h),c.slice(0,p)+"$lit$"+c.slice(p)+wt+b):c+wt+(p===-2?(o.push(void 0),l):b)}let a=s+(t[r]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Xi!==void 0?Xi.createHTML(a):a,o]},br=class{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let i=0,s=0,n=t.length-1,a=this.parts,[l,c]=us(t,e);if(this.el=br.createElement(l,r),he.currentNode=this.el.content,e===2){let h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(o=he.nextNode())!==null&&a.length<n;){if(o.nodeType===1){if(o.hasAttributes()){let h=[];for(let d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(wt)){let p=c[s++];if(h.push(d),p!==void 0){let m=o.getAttribute(p.toLowerCase()+"$lit$").split(wt),b=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:b[2],strings:m,ctor:b[1]==="."?ds:b[1]==="?"?ps:b[1]==="@"?fs:Ue})}else a.push({type:6,index:i})}for(let d of h)o.removeAttribute(d)}if(as.test(o.tagName)){let h=o.textContent.split(wt),d=h.length-1;if(d>0){o.textContent=fe?fe.emptyScript:"";for(let p=0;p<d;p++)o.append(h[p],ze()),he.nextNode(),a.push({type:2,index:++i});o.append(h[d],ze())}}}else if(o.nodeType===8)if(o.data===ao)a.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(wt,h+1))!==-1;)a.push({type:7,index:i}),h+=wt.length-1}i++}}static createElement(t,e){let r=me.createElement("template");return r.innerHTML=t,r}};function Ht(t,e,r=t,o){var i,s,n,a;if(e===Z)return e;let l=o!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[o]:r._$Cl,c=De(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(t),l._$AT(t,r,o)),o!==void 0?((n=(a=r)._$Co)!==null&&n!==void 0?n:a._$Co=[])[o]=l:r._$Cl=l),l!==void 0&&(e=Ht(t,l._$AS(t,e.values),l,o)),e}var hs=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;let{el:{content:r},parts:o}=this._$AD,i=((e=t?.creationScope)!==null&&e!==void 0?e:me).importNode(r,!0);he.currentNode=i;let s=he.nextNode(),n=0,a=0,l=o[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new Be(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new ms(s,this,t)),this.u.push(c),l=o[++a]}n!==l?.index&&(s=he.nextNode(),n++)}return i}p(t){let e=0;for(let r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Be=class{constructor(t,e,r,o){var i;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cm=(i=o?.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ht(this,t,e),De(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==Z&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ns(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==P&&De(this._$AH)?this._$AA.nextSibling.data=t:this.T(me.createTextNode(t)),this._$AH=t}$(t){var e;let{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=br.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.p(r);else{let s=new hs(i,this),n=s.v(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(t){let e=ts.get(t.strings);return e===void 0&&ts.set(t.strings,e=new br(t)),e}k(t){ss(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,o=0;for(let i of t)o===e.length?e.push(r=new Be(this.O(ze()),this.O(ze()),this,this.options)):r=e[o],r._$AI(i),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ue=class{constructor(t,e,r,o,i){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){let i=this.strings,s=!1;if(i===void 0)t=Ht(this,t,e,0),s=!De(t)||t!==this._$AH&&t!==Z,s&&(this._$AH=t);else{let n=t,a,l;for(t=i[0],a=0;a<i.length-1;a++)l=Ht(this,n[r+a],e,a),l===Z&&(l=this._$AH[a]),s||(s=!De(l)||l!==this._$AH[a]),l===P?t=P:t!==P&&(t+=(l??"")+i[a+1]),this._$AH[a]=l}s&&!o&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ds=class extends Ue{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}},xa=fe?fe.emptyScript:"",ps=class extends Ue{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,xa):this.element.removeAttribute(this.name)}},fs=class extends Ue{constructor(t,e,r,o,i){super(t,e,r,o,i),this.type=5}_$AI(t,e=this){var r;if((t=(r=Ht(this,t,e,0))!==null&&r!==void 0?r:P)===Z)return;let o=this._$AH,i=t===P&&o!==P||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==P&&(o===P||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},ms=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ht(this,t)}},vs={P:"$lit$",A:wt,M:ao,C:1,L:us,R:hs,D:ns,V:Ht,I:Be,H:Ue,N:ps,U:fs,B:ds,F:ms},es=vr.litHtmlPolyfillSupport;es?.(br,Be),((ro=vr.litHtmlVersions)!==null&&ro!==void 0?ro:vr.litHtmlVersions=[]).push("2.6.1");var ka=(t,e,r)=>{var o,i;let s=(o=r?.renderBefore)!==null&&o!==void 0?o:e,n=s._$litPart$;if(n===void 0){let a=(i=r?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new Be(e.insertBefore(ze(),a),a,void 0,r??{})}return n._$AI(t),n},oo,io,de=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ka(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Z}};de.finalized=!0,de._$litElement$=!0,(oo=globalThis.litElementHydrateSupport)===null||oo===void 0||oo.call(globalThis,{LitElement:de});var rs=globalThis.litElementPolyfillSupport;rs?.({LitElement:de});((io=globalThis.litElementVersions)!==null&&io!==void 0?io:globalThis.litElementVersions=[]).push("3.2.0");var U=j`
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
`;var bs=j`
  ${U}

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
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
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
`;var ys=Symbol.for(""),wa=t=>{if(t?.r===ys)return t?._$litStatic$},ve=(t,...e)=>({_$litStatic$:e.reduce((r,o,i)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[i+1],t[0]),r:ys}),gs=new Map,_s=t=>(e,...r)=>{let o=r.length,i,s,n=[],a=[],l,c=0,h=!1;for(;c<o;){for(l=e[c];c<o&&(s=r[c],(i=wa(s))!==void 0);)l+=i+e[++c],h=!0;a.push(s),n.push(l),c++}if(c===o&&n.push(e[o]),h){let d=n.join("$$lit$$");(e=gs.get(d))===void 0&&(n.raw=n,gs.set(d,e=n)),r=a}return t(e,...r)},be=_s(L),Mu=_s(cs);var g=t=>t??P;var Lt=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){let e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};var lo=new Set,$a=new MutationObserver($s),ge=new Map,xs=document.documentElement.dir||"ltr",ks=document.documentElement.lang||navigator.language,Ft;$a.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function ws(...t){t.map(e=>{let r=e.$code.toLowerCase();ge.has(r)?ge.set(r,Object.assign(Object.assign({},ge.get(r)),e)):ge.set(r,e),Ft||(Ft=e)}),$s()}function $s(){xs=document.documentElement.dir||"ltr",ks=document.documentElement.lang||navigator.language,[...lo.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Ss=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){lo.add(this.host)}hostDisconnected(){lo.delete(this.host)}dir(){return`${this.host.dir||xs}`.toLowerCase()}lang(){return`${this.host.lang||ks}`.toLowerCase()}getTranslationData(t){var e,r;let o=new Intl.Locale(t),i=o?.language.toLowerCase(),s=(r=(e=o?.region)===null||e===void 0?void 0:e.toLowerCase())!==null&&r!==void 0?r:"",n=ge.get(`${i}-${s}`),a=ge.get(i);return{locale:o,language:i,region:s,primary:n,secondary:a}}exists(t,e){var r;let{primary:o,secondary:i}=this.getTranslationData((r=e.lang)!==null&&r!==void 0?r:this.lang());return e=Object.assign({includeFallback:!1},e),!!(o&&o[t]||i&&i[t]||e.includeFallback&&Ft&&Ft[t])}term(t,...e){let{primary:r,secondary:o}=this.getTranslationData(this.lang()),i;if(r&&r[t])i=r[t];else if(o&&o[t])i=o[t];else if(Ft&&Ft[t])i=Ft[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,e)}};var mt=class extends Ss{},Sa={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ws(Sa);function B(t,e){let r=J({waitUntilFirstUpdate:!1},e);return(o,i)=>{let{update:s}=o,n=Array.isArray(t)?t:[t];o.update=function(a){n.forEach(l=>{let c=l;if(a.has(c)){let h=a.get(c),d=this[c];h!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,d)}}),s.call(this,a)}}}var $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},gr=t=>(...e)=>({_$litDirective$:t,values:e}),yr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Q=gr(class extends yr{constructor(t){var e;if(super(t),t.type!==$t.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,o;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in e)e[s]&&!(!((r=this.st)===null||r===void 0)&&r.has(s))&&this.nt.add(s);return this.render(e)}let i=t.element.classList;this.nt.forEach(s=>{s in e||(i.remove(s),this.nt.delete(s))});for(let s in e){let n=!!e[s];n===this.nt.has(s)||!((o=this.st)===null||o===void 0)&&o.has(s)||(n?(i.add(s),this.nt.add(s)):(i.remove(s),this.nt.delete(s)))}return Z}});var M=t=>e=>typeof e=="function"?((r,o)=>(customElements.define(r,o),o))(t,e):((r,o)=>{let{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(n){customElements.define(r,n)}}})(t,e),Ca=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?ft(J({},e),{finisher(r){r.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function f(t){return(e,r)=>r!==void 0?((o,i,s)=>{i.constructor.createProperty(s,o)})(t,e,r):Ca(t,e)}function ut(t){return f(ft(J({},t),{state:!0}))}var Ea=({finisher:t,descriptor:e})=>(r,o)=>{var i;if(o===void 0){let s=(i=r.originalKey)!==null&&i!==void 0?i:r.key,n=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(r.key)}:ft(J({},r),{key:s});return t!=null&&(n.finisher=function(a){t(a,s)}),n}{let s=r.constructor;e!==void 0&&Object.defineProperty(r,o,e(o)),t?.(s,o)}};function V(t,e){return Ea({descriptor:r=>{let o={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(t))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){let i=typeof r=="symbol"?Symbol():"__"+r;o.get=function(){var s,n;return this[i]===void 0&&(this[i]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&n!==void 0?n:null),this[i]}}return o}})}var co,lh=((co=window.HTMLSlotElement)===null||co===void 0?void 0:co.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(r=>r.nodeType===Node.ELEMENT_NODE),N=class extends de{emit(t,e){let r=new CustomEvent(t,J({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(r),r}};u([f()],N.prototype,"dir",2);u([f()],N.prototype,"lang",2);var $=class extends N{constructor(){super(...arguments),this.formControlController=new ce(this,{form:t=>{if(t.hasAttribute("form")){let e=t.getRootNode(),r=t.getAttribute("form");return e.getElementById(r)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Lt(this,"[default]","prefix","suffix"),this.localize=new mt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:pr}get validationMessage(){return this.isButton()?this.button.validationMessage:""}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleHostClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopImmediatePropagation())}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?ve`a`:ve`button`;return be`
      <${e}
        part="base"
        class=${Q({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${g(t?void 0:this.disabled)}
        type=${g(t?void 0:this.type)}
        title=${this.title}
        name=${g(t?void 0:this.name)}
        value=${g(t?void 0:this.value)}
        href=${g(t?this.href:void 0)}
        target=${g(t?this.target:void 0)}
        download=${g(t?this.download:void 0)}
        rel=${g(t?this.rel:void 0)}
        role=${g(t?void 0:"button")}
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
        ${this.caret?be` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?be`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};$.styles=bs;u([V(".button")],$.prototype,"button",2);u([ut()],$.prototype,"hasFocus",2);u([ut()],$.prototype,"invalid",2);u([f()],$.prototype,"title",2);u([f({reflect:!0})],$.prototype,"variant",2);u([f({reflect:!0})],$.prototype,"size",2);u([f({type:Boolean,reflect:!0})],$.prototype,"caret",2);u([f({type:Boolean,reflect:!0})],$.prototype,"disabled",2);u([f({type:Boolean,reflect:!0})],$.prototype,"loading",2);u([f({type:Boolean,reflect:!0})],$.prototype,"outline",2);u([f({type:Boolean,reflect:!0})],$.prototype,"pill",2);u([f({type:Boolean,reflect:!0})],$.prototype,"circle",2);u([f()],$.prototype,"type",2);u([f()],$.prototype,"name",2);u([f()],$.prototype,"value",2);u([f()],$.prototype,"href",2);u([f()],$.prototype,"target",2);u([f()],$.prototype,"rel",2);u([f()],$.prototype,"download",2);u([f()],$.prototype,"form",2);u([f({attribute:"formaction"})],$.prototype,"formAction",2);u([f({attribute:"formenctype"})],$.prototype,"formEnctype",2);u([f({attribute:"formmethod"})],$.prototype,"formMethod",2);u([f({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);u([f({attribute:"formtarget"})],$.prototype,"formTarget",2);u([B("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$=u([M("sl-button")],$);var Cs=j`
  ${U}

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
`;var uo=class extends N{constructor(){super(...arguments),this.localize=new mt(this)}render(){return L`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};uo.styles=Cs;uo=u([M("sl-spinner")],uo);var ho="";function Me(t){ho=t}function po(t=""){if(!ho){let e=[...document.getElementsByTagName("script")],r=e.find(o=>o.hasAttribute("data-shoelace"));if(r)Me(r.getAttribute("data-shoelace"));else{let o=e.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src)),i="";o&&(i=o.getAttribute("src")),Me(i.split("/").slice(0,-1).join("/"))}}return ho.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Aa={name:"default",resolver:t=>po(`assets/icons/${t}.svg`)},Es=Aa;var As={caret:`
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
  `},Pa={name:"system",resolver:t=>t in As?`data:image/svg+xml,${encodeURIComponent(As[t])}`:""},Ps=Pa;var Ta=[Es,Ps],fo=[];function Ts(t){fo.push(t)}function Rs(t){fo=fo.filter(e=>e!==t)}function mo(t){return Ta.find(e=>e.name===t)}var js=j`
  ${U}

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
`;var Ve=Symbol(),_r=Symbol(),vo,bo=new Map,ot=class extends N{constructor(){super(...arguments),this.svg=null,this.label="",this.library="default"}static async resolveIcon(t){var e;let r;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?Ve:_r}catch{return _r}try{let o=document.createElement("div");o.innerHTML=await r.text();let i=o.firstElementChild;if(((e=i?.tagName)==null?void 0:e.toLowerCase())!=="svg")return Ve;vo||(vo=new DOMParser);let n=vo.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):Ve}catch{return Ve}}connectedCallback(){super.connectedCallback(),Ts(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Rs(this)}getUrl(){let t=mo(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let e=mo(this.library),r=this.getUrl();if(!r){this.svg=null;return}let o=bo.get(r);o||(o=ot.resolveIcon(r),bo.set(r,o));let i=await o;if(i===_r&&bo.delete(r),r===this.getUrl())switch(i){case _r:case Ve:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(t=e?.mutator)==null||t.call(e,this.svg),this.emit("sl-load")}}render(){return this.svg}};ot.styles=js;u([ut()],ot.prototype,"svg",2);u([f({reflect:!0})],ot.prototype,"name",2);u([f()],ot.prototype,"src",2);u([f()],ot.prototype,"label",2);u([f({reflect:!0})],ot.prototype,"library",2);u([B("label")],ot.prototype,"handleLabelChange",1);u([B(["name","src","library"])],ot.prototype,"setIcon",1);ot=u([M("sl-icon")],ot);var{I:kd}=vs,Ra=t=>t.strings===void 0,ja={},La=(t,e=ja)=>t._$AH=e,He=gr(class extends yr{constructor(t){if(super(t),t.type!==$t.PROPERTY&&t.type!==$t.ATTRIBUTE&&t.type!==$t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ra(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Z||e===P)return e;let r=t.element,o=t.name;if(t.type===$t.PROPERTY){if(e===r[o])return Z}else if(t.type===$t.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(o))return Z}else if(t.type===$t.ATTRIBUTE&&r.getAttribute(o)===e+"")return Z;return La(t),e}});var xr=(t="value")=>(e,r)=>{let o=e.constructor,i=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(s,n,a){var l;let c=o.getPropertyOptions(t),h=typeof c.attribute=="string"?c.attribute:t;if(s===h){let d=c.converter||pe,m=(typeof d=="function"?d:(l=d?.fromAttribute)!=null?l:pe.fromAttribute)(a,c.type);this[t]!==m&&(this[r]=m)}i.call(this,s,n,a)}};var Ls=j`
  ${U}

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
`;var z=class extends N{constructor(){super(...arguments),this.formControlController=new ce(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return L`
      <label
        part="base"
        class=${Q({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${g(this.value)}
          .indeterminate=${He(this.indeterminate)}
          .checked=${He(this.checked)}
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
          ${this.checked?L`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?L`
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
    `}};z.styles=Ls;u([V('input[type="checkbox"]')],z.prototype,"input",2);u([ut()],z.prototype,"hasFocus",2);u([f()],z.prototype,"title",2);u([f()],z.prototype,"name",2);u([f()],z.prototype,"value",2);u([f({reflect:!0})],z.prototype,"size",2);u([f({type:Boolean,reflect:!0})],z.prototype,"disabled",2);u([f({type:Boolean,reflect:!0})],z.prototype,"checked",2);u([f({type:Boolean,reflect:!0})],z.prototype,"indeterminate",2);u([xr("checked")],z.prototype,"defaultChecked",2);u([f({reflect:!0})],z.prototype,"form",2);u([f({type:Boolean,reflect:!0})],z.prototype,"required",2);u([B("disabled",{waitUntilFirstUpdate:!0})],z.prototype,"handleDisabledChange",1);u([B(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],z.prototype,"handleStateChange",1);z=u([M("sl-checkbox")],z);function Is(t){let e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function Os(t){var e,r;let o=[];function i(a){a instanceof HTMLElement&&(o.push(a),a.shadowRoot!==null&&a.shadowRoot.mode==="open"&&i(a.shadowRoot)),[...a.children].forEach(l=>i(l))}i(t);let s=(e=o.find(a=>Is(a)))!=null?e:null,n=(r=o.reverse().find(a=>Is(a)))!=null?r:null;return{start:s,end:n}}var Fe=[],kr=class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Fe.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Fe=Fe.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Fe[Fe.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){let{start:t,end:e}=Os(this.element),r=this.tabDirection==="forward"?t:e;typeof r?.focus=="function"&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}};var go=new Set;function Ia(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function qt(t){if(go.add(t),!document.body.classList.contains("sl-scroll-lock")){let e=Ia();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Kt(t){go.delete(t),go.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}var Ns=j`
  ${U}

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
`;var Ds=new Map,Oa=new WeakMap;function Na(t){return t??{keyframes:[],options:{duration:0}}}function zs(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function D(t,e){Ds.set(t,Na(e))}function it(t,e,r){let o=Oa.get(t);if(o?.[e])return zs(o[e],r.dir);let i=Ds.get(e);return i?zs(i,r.dir):{keyframes:[],options:{duration:0}}}function ye(t,e){return new Promise(r=>{function o(i){i.target===t&&(t.removeEventListener(e,o),r())}t.addEventListener(e,o)})}function st(t,e,r){return new Promise(o=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");let i=t.animate(e,ft(J({},r),{duration:za()?0:r.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function za(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function vt(t){return Promise.all(t.getAnimations().map(e=>new Promise(r=>{let o=requestAnimationFrame(r);e.addEventListener("cancel",()=>o,{once:!0}),e.addEventListener("finish",()=>o,{once:!0}),e.cancel()})))}var ht=class extends N{constructor(){super(...arguments),this.hasSlotController=new Lt(this,"footer"),this.localize=new mt(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new kr(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),qt(this))}disconnectedCallback(){super.disconnectedCallback(),Kt(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let r=it(this,"dialog.denyClose",{dir:this.localize.dir()});st(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(t){this.open&&t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),qt(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([vt(this.dialog),vt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=it(this,"dialog.show",{dir:this.localize.dir()}),r=it(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([st(this.panel,e.keyframes,e.options),st(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([vt(this.dialog),vt(this.overlay)]);let t=it(this,"dialog.hide",{dir:this.localize.dir()}),e=it(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([st(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),st(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Kt(this);let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ye(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ye(this,"sl-after-hide")}render(){return L`
      <div
        part="base"
        class=${Q({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${g(this.noHeader?this.label:void 0)}
          aria-labelledby=${g(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":L`
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
    `}};ht.styles=Ns;u([V(".dialog")],ht.prototype,"dialog",2);u([V(".dialog__panel")],ht.prototype,"panel",2);u([V(".dialog__overlay")],ht.prototype,"overlay",2);u([f({type:Boolean,reflect:!0})],ht.prototype,"open",2);u([f({reflect:!0})],ht.prototype,"label",2);u([f({attribute:"no-header",type:Boolean,reflect:!0})],ht.prototype,"noHeader",2);u([B("open",{waitUntilFirstUpdate:!0})],ht.prototype,"handleOpenChange",1);ht=u([M("sl-dialog")],ht);D("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});D("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});D("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});D("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});D("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Bs=j`
  ${U}

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
`;var X=class extends N{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?ve`a`:ve`button`;return be`
      <${e}
        part="base"
        class=${Q({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${g(t?void 0:this.disabled)}
        type=${g(t?void 0:"button")}
        href=${g(t?this.href:void 0)}
        target=${g(t?this.target:void 0)}
        download=${g(t?this.download:void 0)}
        rel=${g(t&&this.target?"noreferrer noopener":void 0)}
        role=${g(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${g(this.name)}
          library=${g(this.library)}
          src=${g(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};X.styles=Bs;u([V(".icon-button")],X.prototype,"button",2);u([ut()],X.prototype,"hasFocus",2);u([f()],X.prototype,"name",2);u([f()],X.prototype,"library",2);u([f()],X.prototype,"src",2);u([f()],X.prototype,"href",2);u([f()],X.prototype,"target",2);u([f()],X.prototype,"download",2);u([f()],X.prototype,"label",2);u([f({type:Boolean,reflect:!0})],X.prototype,"disabled",2);X=u([M("sl-icon-button")],X);var Us=j`
  ${U}

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
`;function Ms(t){return t.charAt(0).toUpperCase()+t.slice(1)}var Y=class extends N{constructor(){super(...arguments),this.hasSlotController=new Lt(this,"footer"),this.localize=new mt(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new kr(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),qt(this)))}disconnectedCallback(){super.disconnectedCallback(),Kt(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let r=it(this,"drawer.denyClose",{dir:this.localize.dir()});st(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(t){this.open&&!this.contained&&t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),qt(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([vt(this.drawer),vt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=it(this,`drawer.show${Ms(this.placement)}`,{dir:this.localize.dir()}),r=it(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([st(this.panel,e.keyframes,e.options),st(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Kt(this)),await Promise.all([vt(this.drawer),vt(this.overlay)]);let t=it(this,`drawer.hide${Ms(this.placement)}`,{dir:this.localize.dir()}),e=it(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([st(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),st(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),qt(this)),this.open&&this.contained&&(this.modal.deactivate(),Kt(this))}async show(){if(!this.open)return this.open=!0,ye(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ye(this,"sl-after-hide")}render(){return L`
      <div
        part="base"
        class=${Q({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${g(this.noHeader?this.label:void 0)}
          aria-labelledby=${g(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":L`
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
    `}};Y.styles=Us;u([V(".drawer")],Y.prototype,"drawer",2);u([V(".drawer__panel")],Y.prototype,"panel",2);u([V(".drawer__overlay")],Y.prototype,"overlay",2);u([f({type:Boolean,reflect:!0})],Y.prototype,"open",2);u([f({reflect:!0})],Y.prototype,"label",2);u([f({reflect:!0})],Y.prototype,"placement",2);u([f({type:Boolean,reflect:!0})],Y.prototype,"contained",2);u([f({attribute:"no-header",type:Boolean,reflect:!0})],Y.prototype,"noHeader",2);u([B("open",{waitUntilFirstUpdate:!0})],Y.prototype,"handleOpenChange",1);u([B("contained",{waitUntilFirstUpdate:!0})],Y.prototype,"handleNoModalChange",1);Y=u([M("sl-drawer")],Y);D("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});D("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});D("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});D("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});D("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});D("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});D("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});D("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});D("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});D("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});D("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Vs=j`
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
`;var Hs=j`
  ${U}
  ${Vs}

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
    background: none;
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
`;var _=class extends N{constructor(){super(...arguments),this.formControlController=new ce(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Lt(this,"help-text","label"),this.localize=new mt(this),this.hasFocus=!1,this.title="",this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){let t=document.createElement("input");return t.type="date",t.value=this.value,t.valueAsDate}set valueAsDate(t){let e=document.createElement("input");e.type="date",e.valueAsDate=t,this.value=e.value}get valueAsNumber(){let t=document.createElement("input");return t.type="number",t.value=this.value,t.valueAsNumber}set valueAsNumber(t){let e=document.createElement("input");e.type="number",e.valueAsNumber=t,this.value=e.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,o){this.input.setRangeText(t,e,r,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,o=this.helpText?!0:!!e,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return L`
      <div
        part="form-control"
        class=${Q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":o})}
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
            class=${Q({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${g(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${g(this.placeholder)}
              minlength=${g(this.minlength)}
              maxlength=${g(this.maxlength)}
              min=${g(this.min)}
              max=${g(this.max)}
              step=${g(this.step)}
              .value=${He(this.value)}
              autocapitalize=${g(this.autocapitalize)}
              autocomplete=${g(this.autocomplete)}
              autocorrect=${g(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${g(this.pattern)}
              enterkeyhint=${g(this.enterkeyhint)}
              inputmode=${g(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?L`
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
            ${this.passwordToggle&&!this.disabled?L`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?L`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:L`
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
    `}};_.styles=Hs;u([V(".input__control")],_.prototype,"input",2);u([ut()],_.prototype,"hasFocus",2);u([f()],_.prototype,"title",2);u([f({reflect:!0})],_.prototype,"type",2);u([f()],_.prototype,"name",2);u([f()],_.prototype,"value",2);u([xr()],_.prototype,"defaultValue",2);u([f({reflect:!0})],_.prototype,"size",2);u([f({type:Boolean,reflect:!0})],_.prototype,"filled",2);u([f({type:Boolean,reflect:!0})],_.prototype,"pill",2);u([f()],_.prototype,"label",2);u([f({attribute:"help-text"})],_.prototype,"helpText",2);u([f({type:Boolean})],_.prototype,"clearable",2);u([f({type:Boolean,reflect:!0})],_.prototype,"disabled",2);u([f()],_.prototype,"placeholder",2);u([f({type:Boolean,reflect:!0})],_.prototype,"readonly",2);u([f({attribute:"password-toggle",type:Boolean})],_.prototype,"passwordToggle",2);u([f({attribute:"password-visible",type:Boolean})],_.prototype,"passwordVisible",2);u([f({attribute:"no-spin-buttons",type:Boolean})],_.prototype,"noSpinButtons",2);u([f({reflect:!0})],_.prototype,"form",2);u([f({type:Boolean,reflect:!0})],_.prototype,"required",2);u([f()],_.prototype,"pattern",2);u([f({type:Number})],_.prototype,"minlength",2);u([f({type:Number})],_.prototype,"maxlength",2);u([f()],_.prototype,"min",2);u([f()],_.prototype,"max",2);u([f()],_.prototype,"step",2);u([f()],_.prototype,"autocapitalize",2);u([f()],_.prototype,"autocorrect",2);u([f()],_.prototype,"autocomplete",2);u([f({type:Boolean})],_.prototype,"autofocus",2);u([f()],_.prototype,"enterkeyhint",2);u([f({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],_.prototype,"spellcheck",2);u([f()],_.prototype,"inputmode",2);u([B("disabled",{waitUntilFirstUpdate:!0})],_.prototype,"handleDisabledChange",1);u([B("step",{waitUntilFirstUpdate:!0})],_.prototype,"handleStepChange",1);u([B("value",{waitUntilFirstUpdate:!0})],_.prototype,"handleValueChange",1);_=u([M("sl-input")],_);var Fs=Qt(class extends At{constructor(t){var e;if(super(t),t.type!==Zt.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,o;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in e)e[s]&&!(!((r=this.nt)===null||r===void 0)&&r.has(s))&&this.it.add(s);return this.render(e)}let i=t.element.classList;this.it.forEach(s=>{s in e||(i.remove(s),this.it.delete(s))});for(let s in e){let n=!!e[s];n===this.it.has(s)||!((o=this.nt)===null||o===void 0)&&o.has(s)||(n?(i.add(s),this.it.add(s)):(i.remove(s),this.it.delete(s)))}return G}});var wr=class{constructor(e,r=450){this._currentY=0;this._previousY=0;this._scrollDirection="";this.offscreen=!1;this._handleScrollEvent=e=>{console.log("Scroll Event");let r=s=>{let n=!this._previousY||this._previousY<s?"down":"up";return this._previousY=s,n};this._currentY=e.target.scrollTop,this._scrollDirection=r(this._currentY);let o=this._scrollDirection==="down"&&this._currentY>this.keep_zone,i=o!==this.offscreen;this.offscreen=o,i&&this.host&&this.host.requestUpdate()};this.host=e,this.keep_zone=r,e.addController(this)}_registerScrollElement(){this._scroll_elem=document.querySelector("app-web-component")}hostConnected(){console.log("host connected"),setTimeout(()=>{this._registerScrollElement(),this._scroll_elem.addEventListener("scroll",this._handleScrollEvent.bind(this))},500)}hostDisconnected(){this._scroll_elem.removeEventListener("scroll",this._handleScrollEvent.bind(this))}};var bt=class extends K{constructor(){super();this.reference="";this._rangesText="";this._filterText="";this._fullWords=!1;this._caseSensitive=!1;this.bibleScroll=new wr(this,100)}firstUpdated(r){super.firstUpdated(r)}connectedCallback(){super.connectedCallback()}disconnectedCallback(){this.destroy()}destroy(){}_toggleCaseSensitive(r){this._caseSensitive=r.target.checked}_toggleFullWords(r){this._fullWords=r.target.checked}_updateRangeText(r){this.reference="",this._rangesText=r.target.value}_updateFilterText(r){this._filterText=r.target.value}_onToggleDraw(){this.dispatchEvent(new CustomEvent("toggle-drawer",{bubbles:!0,cancelable:!0}))}render(){let r={"hide-heading":this.bibleScroll.offscreen,"show-heading":!this.bibleScroll.offscreen};return I`
    <div class="heading ${Fs(r)}">
      <sl-icon-button 
        name="list" 
        label="Edit" 
        class="icon-button" 
        @click=${this._onToggleDraw}
      ></sl-icon-button>
      <div class="controls-container">
        <div class="reference">
          <sl-input 
            class="reference-input"
            placeholder="Verwysing"
            value=${this.reference!==""?this.reference:this._rangesText}
            @input=${this._updateRangeText}
          >
            <sl-icon name="book" slot="prefix"></sl-icon>
          </sl-input>
        </div>  
        <div class="controls">
          <sl-input
            class="controls-input"
            placeholder="Soek 'n woord"
            value=${this._filterText}
            @input=${this._updateFilterText}
          >
           <sl-icon name="search" slot="prefix"></sl-icon>
          </sl-input>
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
      </div>
     </div> 
      <interlinear-bible 
          rangesText=${this.reference!==""?this.reference:this._rangesText}
          filterText=${this._filterText}
          ?caseSensitive=${this._caseSensitive}
          ?fullWords=${this._fullWords}
          >
        </interlinear-bible>
    `}};bt.styles=yt`
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
      /*margin: 8px;*/
    }
    .controls-container {
      display: flex;
      flex-direction: column;
      flex: 2;
      margin: 3px;
    }
    .reference {
      display: flex;
      gap: 1rem;
    }
    .reference-input{
      flex-grow: 4;
      margin: 2px;
    }
    .controls {
      display: flex;
      justify-content: space-between;
      gap: 5px;
      align-items: center;
    }
    .controls-input {
      flex-grow: 2;
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
    .icon-button {
      color: var(--sl-color-primary-500);
      margin: 10px 5px;
      font-size: 1.5rem;
    }
  `,w([lt({type:String,reflect:!0})],bt.prototype,"reference",2),w([H()],bt.prototype,"_rangesText",2),w([H()],bt.prototype,"_filterText",2),w([H()],bt.prototype,"_fullWords",2),w([H()],bt.prototype,"_caseSensitive",2),bt=w([Et("bible-head")],bt);var qe=class extends At{constructor(e){if(super(e),this.et=E,e.type!==Zt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===E||e==null)return this.ft=void 0,this.et=e;if(e===G)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let r=[e];return r.raw=r,this.ft={_$litType$:this.constructor.resultType,strings:r,values:[]}}};qe.directiveName="unsafeHTML",qe.resultType=1;var qs=Qt(qe);var Da=(t,e=!1,r=!1)=>{let o=/(["'])(\\\1|.)*?\1/g,i=/[^\s"']+/g,s=t.match(o)||[],n=t.replace(o,"").match(i)||[],a=m=>m.substring(1,m.length-1),l=s.map(a),c=r?"":"i",h=e?"\\b":"",d=m=>new RegExp(h+m+h,c),p=[...l,...n].map(d);return m=>{let b=0;for(;p[b]&&p[b].test(m);)b++;return b===p.length}},Ks=Da;var tt=class extends K{constructor(){super();this.rangesText="";this.filterText="";this.fullWords=!1;this.caseSensitive=!1;this._verses=[];this._hashList=[];this._versionName="afr";this._altVersionName="kjv";this._onVerseClicked=r=>{let o=r.currentTarget;if(o){if(o.getAttribute("activated")!==null){o.removeAttribute("activated");let s=o.closest(".container");if(s){let n=o.nextSibling;s.removeChild(n)}return}else o.setAttribute("activated","");let i=o.dataset.hash;if(i){let s=Xr(i,this._versionName,this._altVersionName),n=Zr(s),a=document.createElement("tsk-refs");a.setAttribute("refs",n),o.after(a)}}}}firstUpdated(r){super.firstUpdated(r)}connectedCallback(){super.connectedCallback(),this.initialize()}disconnectedCallback(){this.destroy()}attributeChangedCallback(r,o,i){super.attributeChangedCallback(r,o,i),this._setVerses()}initialize(){let r=`${window.origin}${Mt}/web/resources/${this._versionName}.txt`;Gr(this._versionName,r).then(()=>{r=`${window.origin}${Mt}/web/resources/${this._altVersionName}.txt`,Gr(this._altVersionName,r).then(()=>{this._setVerses()}).catch(o=>console.log("Error loading bibles",o))}).catch(console.log)}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach(r=>{r.addEventListener("mousedown",this.rippleEffect)})}rippleEffect(r){let o=this.getBoundingClientRect(),i=document.createElement("div"),s=getComputedStyle(this).overflow,n="rgba(255,255,255,0)",a="rgba(255,255,255,.3)",l=Math.sqrt(o.width*o.width+o.height*o.height)/10;this.style.overflow="hidden",i.style=`
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
      top: ${r.clientY-o.top-10}px;`,this.prepend(i);let c=i.animate([{transform:"scale(0)",opacity:1},{transform:`scale(${l})`,opacity:.1}],{duration:800});Promise.resolve(c.finished).then(()=>{i.remove(),this.style.overflow=s})}async _setVerses(){let r=Ks(this.filterText,this.fullWords,this.caseSensitive);if(this.rangesText.length<2)return;let o=[],i=Di({rangesText:this.rangesText,versionName:this._versionName});if(i.length===0)return;this._hashList=Bi(this._versionName,i);let s=0;for(let n of this._hashList){let a=Yr(this._versionName,n);if(r(a.text)){let l=Xr(n,this._versionName,this._altVersionName),c=Yr(this._altVersionName,l),h={afr:a,kjv:await this._style_KJV_verse(Zr(l),c),uuid:this._uuid(),hash:n};o.push(h),s++}if(s>99)break}this._verses=o}_getTSKRefs(r){return new Promise((o,i)=>{if(this._ixdb){let s=this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(r));s.onsuccess=n=>{let a=n.target.result;return a.sort((l,c)=>parseInt(l.sort)-parseInt(c.sort)),o(a)},s.onerror=n=>i(n)}else return null})}async _style_KJV_verse(r,o){try{let i=await this._getTSKRefs(r);i&&i.length>0&&i.forEach(s=>{o.text=o.text.replace(s.words,"<b>"+s.words+"</b>")})}catch(i){console.log("Error Formatting KJV",i)}return o}_uuid(){return Math.random().toString(36).substring(2,12)}destroy(){}render(){return I`
        <div class="container">
          ${ee(this._verses,r=>r.uuid,r=>I`
                <div class="ripple-box"
                  data-uuid=${r.uuid}
                  data-hash=${r.hash}
                  @click=${this._onVerseClicked}
                >
                  <p class="afrtext">
                    ${r.afr.prettyRef} ${r.afr.text}
                  </p>
                  ${r.kjv.text.length>0?I`
                      <p class="kjvtext" >
                        ${r.kjv.prettyRef} ${qs(r.kjv.text)}
                      </p>

                      `:E}
                </div>
               `)}
        </div>
    `}};tt.styles=yt`
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
  `,w([lt({type:String,attribute:!0})],tt.prototype,"rangesText",2),w([lt({type:String,attribute:!0})],tt.prototype,"filterText",2),w([lt({type:Boolean,attribute:!0})],tt.prototype,"fullWords",2),w([lt({type:Boolean,attribute:!0})],tt.prototype,"caseSensitive",2),w([H()],tt.prototype,"_verses",2),w([H()],tt.prototype,"_hashList",2),w([se({context:ne})],tt.prototype,"_ixdb",2),w([Ce("#input")],tt.prototype,"_input",2),tt=w([Et("interlinear-bible")],tt);function dt(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];if(!1)var i,s;throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(n){return"'"+n+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function _e(t){return!!t&&!!t[et]}function Jt(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var o=Object.getPrototypeOf(r);if(o===null)return!0;var i=Object.hasOwnProperty.call(o,"constructor")&&o.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Ka}(t)||Array.isArray(t)||!!t[tn]||!!(!((e=t.constructor)===null||e===void 0)&&e[tn])||Ao(t)||Po(t))}function We(t,e,r){r===void 0&&(r=!1),xe(t)===0?(r?Object.keys:Io)(t).forEach(function(o){r&&typeof o=="symbol"||e(o,t[o],t)}):t.forEach(function(o,i){return e(i,o,t)})}function xe(t){var e=t[et];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Ao(t)?2:Po(t)?3:0}function wo(t,e){return xe(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Ba(t,e){return xe(t)===2?t.get(e):t[e]}function en(t,e,r){var o=xe(t);o===2?t.set(e,r):o===3?t.add(r):t[e]=r}function Ua(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Ao(t){return Fa&&t instanceof Map}function Po(t){return qa&&t instanceof Set}function Wt(t){return t.o||t.t}function To(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Wa(t);delete e[et];for(var r=Io(e),o=0;o<r.length;o++){var i=r[o],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Ro(t,e){return e===void 0&&(e=!1),jo(t)||_e(t)||!Jt(t)||(xe(t)>1&&(t.set=t.add=t.clear=t.delete=Ma),Object.freeze(t),e&&We(t,function(r,o){return Ro(o,!0)},!0)),t}function Ma(){dt(2)}function jo(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function gt(t){var e=Ja[t];return e||dt(18,t),e}function Ws(){return Je}function yo(t,e){e&&(gt("Patches"),t.u=[],t.s=[],t.v=e)}function $r(t){$o(t),t.p.forEach(Va),t.p=null}function $o(t){t===Je&&(Je=t.l)}function Js(t){return Je={p:[],l:Je,h:t,m:!0,_:0}}function Va(t){var e=t[et];e.i===0||e.i===1?e.j():e.O=!0}function _o(t,e){e._=e.p.length;var r=e.p[0],o=t!==void 0&&t!==r;return e.h.g||gt("ES5").S(e,t,o),o?(r[et].P&&($r(e),dt(4)),Jt(t)&&(t=Sr(e,t),e.l||Cr(e,t)),e.u&&gt("Patches").M(r[et].t,t,e.u,e.s)):t=Sr(e,r,[]),$r(e),e.u&&e.v(e.u,e.s),t!==rn?t:void 0}function Sr(t,e,r){if(jo(e))return e;var o=e[et];if(!o)return We(e,function(a,l){return Xs(t,o,e,a,l,r)},!0),e;if(o.A!==t)return e;if(!o.P)return Cr(t,o.t,!0),o.t;if(!o.I){o.I=!0,o.A._--;var i=o.i===4||o.i===5?o.o=To(o.k):o.o,s=i,n=!1;o.i===3&&(s=new Set(i),i.clear(),n=!0),We(s,function(a,l){return Xs(t,o,i,a,l,r,n)}),Cr(t,i,!1),r&&t.u&&gt("Patches").N(o,r,t.u,t.s)}return o.o}function Xs(t,e,r,o,i,s,n){if(_e(i)){var a=Sr(t,i,s&&e&&e.i!==3&&!wo(e.R,o)?s.concat(o):void 0);if(en(r,o,a),!_e(a))return;t.m=!1}else n&&r.add(i);if(Jt(i)&&!jo(i)){if(!t.h.D&&t._<1)return;Sr(t,i),e&&e.A.l||Cr(t,i)}}function Cr(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&Ro(e,r)}function xo(t,e){var r=t[et];return(r?Wt(r):t)[e]}function Ys(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var o=Object.getOwnPropertyDescriptor(r,e);if(o)return o;r=Object.getPrototypeOf(r)}}function So(t){t.P||(t.P=!0,t.l&&So(t.l))}function ko(t){t.o||(t.o=To(t.t))}function Co(t,e,r){var o=Ao(e)?gt("MapSet").F(e,r):Po(e)?gt("MapSet").T(e,r):t.g?function(i,s){var n=Array.isArray(i),a={i:n?1:0,A:s?s.A:Ws(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,c=Eo;n&&(l=[a],c=Ke);var h=Proxy.revocable(l,c),d=h.revoke,p=h.proxy;return a.k=p,a.j=d,p}(e,r):gt("ES5").J(e,r);return(r?r.A:Ws()).p.push(o),o}function Ha(t){return _e(t)||dt(22,t),function e(r){if(!Jt(r))return r;var o,i=r[et],s=xe(r);if(i){if(!i.P&&(i.i<4||!gt("ES5").K(i)))return i.t;i.I=!0,o=Gs(r,s),i.I=!1}else o=Gs(r,s);return We(o,function(n,a){i&&Ba(i.t,n)===a||en(o,n,e(a))}),s===3?new Set(o):o}(t)}function Gs(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return To(t)}var Zs,Je,Lo=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Fa=typeof Map<"u",qa=typeof Set<"u",Qs=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",rn=Lo?Symbol.for("immer-nothing"):((Zs={})["immer-nothing"]=!0,Zs),tn=Lo?Symbol.for("immer-draftable"):"__$immer_draftable",et=Lo?Symbol.for("immer-state"):"__$immer_state";var Ka=""+Object.prototype.constructor,Io=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Wa=Object.getOwnPropertyDescriptors||function(t){var e={};return Io(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},Ja={},Eo={get:function(t,e){if(e===et)return t;var r=Wt(t);if(!wo(r,e))return function(i,s,n){var a,l=Ys(s,n);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,r,e);var o=r[e];return t.I||!Jt(o)?o:o===xo(t.t,e)?(ko(t),t.o[e]=Co(t.A.h,o,t)):o},has:function(t,e){return e in Wt(t)},ownKeys:function(t){return Reflect.ownKeys(Wt(t))},set:function(t,e,r){var o=Ys(Wt(t),e);if(o?.set)return o.set.call(t.k,r),!0;if(!t.P){var i=xo(Wt(t),e),s=i?.[et];if(s&&s.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(Ua(r,i)&&(r!==void 0||wo(t.t,e)))return!0;ko(t),So(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return xo(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,ko(t),So(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=Wt(t),o=Reflect.getOwnPropertyDescriptor(r,e);return o&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:o.enumerable,value:r[e]}},defineProperty:function(){dt(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){dt(12)}},Ke={};We(Eo,function(t,e){Ke[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ke.deleteProperty=function(t,e){return Ke.set.call(this,t,e,void 0)},Ke.set=function(t,e,r){return Eo.set.call(this,t[0],e,r,t[0])};var Xa=function(){function t(r){var o=this;this.g=Qs,this.D=!0,this.produce=function(i,s,n){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=o;return function(x){var S=this;x===void 0&&(x=a);for(var R=arguments.length,q=Array(R>1?R-1:0),nt=1;nt<R;nt++)q[nt-1]=arguments[nt];return l.produce(x,function(Xe){var C;return(C=s).call.apply(C,[S,Xe].concat(q))})}}var c;if(typeof s!="function"&&dt(6),n!==void 0&&typeof n!="function"&&dt(7),Jt(i)){var h=Js(o),d=Co(o,i,void 0),p=!0;try{c=s(d),p=!1}finally{p?$r(h):$o(h)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(x){return yo(h,n),_o(x,h)},function(x){throw $r(h),x}):(yo(h,n),_o(c,h))}if(!i||typeof i!="object"){if((c=s(i))===void 0&&(c=i),c===rn&&(c=void 0),o.D&&Ro(c,!0),n){var m=[],b=[];gt("Patches").M(i,c,m,b),n(m,b)}return c}dt(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(c){for(var h=arguments.length,d=Array(h>1?h-1:0),p=1;p<h;p++)d[p-1]=arguments[p];return o.produceWithPatches(c,function(m){return i.apply(void 0,[m].concat(d))})};var n,a,l=o.produce(i,s,function(c,h){n=c,a=h});return typeof Promise<"u"&&l instanceof Promise?l.then(function(c){return[c,n,a]}):[l,n,a]},typeof r?.useProxies=="boolean"&&this.setUseProxies(r.useProxies),typeof r?.autoFreeze=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){Jt(r)||dt(8),_e(r)&&(r=Ha(r));var o=Js(this),i=Co(this,r,void 0);return i[et].C=!0,$o(o),i},e.finishDraft=function(r,o){var i=r&&r[et],s=i.A;return yo(s,o),_o(void 0,s)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!Qs&&dt(20),this.g=r},e.applyPatches=function(r,o){var i;for(i=o.length-1;i>=0;i--){var s=o[i];if(s.path.length===0&&s.op==="replace"){r=s.value;break}}i>-1&&(o=o.slice(i+1));var n=gt("Patches").$;return _e(r)?n(r,o):this.produce(r,function(a){return n(a,o)})},t}(),rt=new Xa,Er=rt.produce,yb=rt.produceWithPatches.bind(rt),_b=rt.setAutoFreeze.bind(rt),xb=rt.setUseProxies.bind(rt),kb=rt.applyPatches.bind(rt),wb=rt.createDraft.bind(rt),$b=rt.finishDraft.bind(rt);var It=class extends K{constructor(){super();this.tskRefs=[]}firstUpdated(r){super.firstUpdated(r)}connectedCallback(){super.connectedCallback(),this.refs&&this._getAll(this.refs)}disconnectedCallback(){this.destroy()}updated(){this.shadowRoot.querySelectorAll(".ripple-ref-word").forEach(r=>{r.addEventListener("mousedown",this.rippleEffect)})}rippleEffect(r){let o=this.getBoundingClientRect(),i=document.createElement("div"),s=getComputedStyle(this).overflow,n="rgba(255,255,255,0)",a="rgba(255,255,255,.3)",l=Math.sqrt(o.width*o.width+o.height*o.height)/10;this.style.overflow="hidden",i.style=`
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
      top: ${r.clientY-o.top-10}px;`,this.prepend(i);let c=i.animate([{transform:"scale(0)",opacity:1},{transform:`scale(${l})`,opacity:.1}],{duration:800});Promise.resolve(c.finished).then(()=>{i.remove(),this.style.overflow=s})}_readIXDB(r){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").openCursor(IDBKeyRange.only(r)).onsuccess=o=>{let i=o.target.result;i&&(this.tskRefs=Er(this.tskRefs,s=>(s.push({display:!1,ref:i.value}),s.sort((n,a)=>parseInt(n.ref.sort)-parseInt(a.ref.sort)),s)),i.continue())})}_getAll(r){this._ixdb&&(this._ixdb.ixdb.transaction("xref").objectStore("xref").index("verse").getAll(IDBKeyRange.only(r)).onsuccess=o=>{let i=o.target.result;i.sort((s,n)=>parseInt(s.sort)-parseInt(n.sort)),i=i.map(s=>({display:!1,ref:s})),this.tskRefs=Er(this.tskRefs,()=>i)})}destroy(){}render(){return I`
    <div class="refs-container">
      <mwc-list>
      ${ee(this.tskRefs,r=>r.ref.key,(r,o)=>I`
            <div class="ripple-ref-word" @click=${i=>{let s=i.currentTarget;r.display?s.removeAttribute("activated"):s.setAttribute("activated",""),this.tskRefs=Er(this.tskRefs,n=>(n[o].display=!n[o].display,n))}}
            >
              <p class="ref-word">${r.ref.words}</p>
            </div>
            ${r.display===!0?I`<interlinear-bible rangesText=${r.ref.refs}></interlinear-bible>`:""}
         `)}  
      </mwc-list>  
    </div>
    `}};It.styles=yt`
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
  `,w([lt({type:String,attribute:!0})],It.prototype,"refs",2),w([se({context:ne})],It.prototype,"_ixdb",2),w([H()],It.prototype,"tskRefs",2),It=w([Et("tsk-refs")],It);Me(`${Mt}/web/shoelace`);var F=class extends K{constructor(){super();this._dbName="idxDB";this._ixdb={ixdb:void 0};this._num_chapters=10;this._selected_chapter=10;this._selected_book="";this._router=new Pe(this,[{path:"",render:()=>I`<bible-head></bible-head>`},{path:"/",render:()=>I`<bible-head></bible-head>`},{path:"chat",render:()=>I`<h1>Chat app not available in off line mode</h1>`}],{fallback:{render:()=>I`<h1>404 Route not found</h1> <p>In single page app router!</p>`}});this.initialize_IDB()}_unSelect_items(){this.renderRoot.querySelectorAll(".ripple-box").forEach(o=>{o.removeAttribute("activated")})}_toggleActive(r){this._unSelect_items(),r.currentTarget.setAttribute("activated","")}connectedCallback(){super.connectedCallback()}firstUpdated(){}updated(){this.shadowRoot.querySelectorAll(".ripple-box").forEach(r=>{r.addEventListener("mousedown",this.rippleEffect)})}rippleEffect(r){let o=this.getBoundingClientRect(),i=document.createElement("div"),s=getComputedStyle(this).overflow,n="rgba(255,255,255,0)",a="rgba(255,255,255,.3)",l=Math.sqrt(o.width*o.width+o.height*o.height)/10;this.style.overflow="hidden",i.style=`
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
      top: ${r.clientY-o.top-10}px;`,this.prepend(i);let c=i.animate([{transform:"scale(0)",opacity:1},{transform:`scale(${l})`,opacity:.1}],{duration:800});Promise.resolve(c.finished).then(()=>{i.remove(),this.style.overflow=s})}initialize_IDB(){let r=indexedDB.open(this._dbName,1);r.onerror=i=>{alert("Error accessing TSK database!"+i.target.result)};let o=i=>{if(F.loadingIXDB)return;F.loadingIXDB=!0;let s=`${window.origin}${Mt}/web/resources/tsk.txt`;Mi(s).then(n=>{console.log("tsk loaded!");let a=i.transaction("xref","readwrite").objectStore("xref");n.forEach(l=>{a.add(l)}),console.log("All done!")}).catch(n=>{console.log("Failed to load TSK \u2192",n),alert("Failed to create TSK database! No cross references are available. Try using a reload.")})};r.onsuccess=i=>{this._ixdb.ixdb=i.target.result;let s=this._ixdb.ixdb.transaction("xref").objectStore("xref").count();s.onsuccess=()=>{s.result===0&&o(this._ixdb.ixdb)}},r.onupgradeneeded=i=>{let s=i.target.result;console.log("Creating a new IDB instance for tsk!");let n=s.createObjectStore("xref",{keyPath:"key"});n.createIndex("verse","verse",{unique:!1}),n.transaction.oncomplete=()=>{o(s)}}}async gotoRef(r){if(r!==void 0){let o=r;history.pushState({},"",o),await this._router.goto(o)}}_setBook(r,o){this._toggleActive(r),this._num_chapters=Ut("afr").last.books[o].chapter+1,this._selected_book=Bt[o],this.dialog.show()}_setChapter(r){this._selected_chapter=r,this.dialog.hide(),this.drawer.hide()}render(){return I`
      <sl-dialog
        label="Kies 'n hoofstuk."
      >
        ${ui(hi(this._num_chapters),r=>I`<sl-button 
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
        reference=${this._selected_book!==""?this._selected_book+" "+this._selected_chapter:E}
        @toggle-drawer=${()=>this.drawer.show()}
      > </bible-head>
      `}render_menu(){return I`
        ${ee(je.abbreviations,r=>r[0],(r,o)=>I`
          <div class="ripple-box"
            @click=${i=>{this._setBook(i,o)}}
          >
            <p class="book-name">${r[0]}</p>
          </div>

        `)}
    `}};F.loadingIXDB=!1,F.styles=yt`
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

    `,w([Ce("sl-drawer")],F.prototype,"drawer",2),w([Ce("sl-dialog")],F.prototype,"dialog",2),w([cr({context:ne}),H()],F.prototype,"_ixdb",2),w([H()],F.prototype,"_num_chapters",2),w([H()],F.prototype,"_selected_chapter",2),w([H()],F.prototype,"_selected_book",2),F=w([Et("app-web-component")],F);})();
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

@shoelace-style/shoelace/dist/chunks/chunk.DUT32TWM.js:
  (*! Bundled license information:
  
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
  *)

@shoelace-style/shoelace/dist/chunks/chunk.IJY6XTKC.js:
  (*! Bundled license information:
  
  lit-html/static.js:
    (**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.V47DPYLL.js:
  (*! Bundled license information:
  
  lit-html/directives/if-defined.js:
    (**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.UP75L23G.js:
  (*! Bundled license information:
  
  lit-html/directive.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.ORW72H2K.js:
  (*! Bundled license information:
  
  lit-html/directives/class-map.js:
    (**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@shoelace-style/shoelace/dist/chunks/chunk.ROLL4627.js:
  (*! Bundled license information:
  
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
  
  @lit/reactive-element/decorators/query-async.js:
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
  *)

@shoelace-style/shoelace/dist/chunks/chunk.OXFFPZHD.js:
  (*! Bundled license information:
  
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
  *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
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
