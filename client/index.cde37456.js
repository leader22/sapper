function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e){t.$$.on_destroy.push(function(t,n){const e=t.subscribe(n);return e.unsubscribe?()=>e.unsubscribe():e}(n,e))}function u(t,n,e){if(t){const o=a(t,n,e);return t[0](o)}}function a(t,e,o){return t[1]?n({},n(e.$$scope.ctx,t[1](o?o(e):{}))):e.$$scope.ctx}function f(t,e,o,s){return t[1]?n({},n(e.$$scope.changed||{},t[1](s?s(o):{}))):e.$$scope.changed||{}}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function p(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function b(){return g(" ")}function y(){return g("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function _(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function v(t){return Array.from(t.childNodes)}function E(t,n,e,o){for(let o=0;o<t.length;o+=1){const s=t[o];if(s.nodeName===n){for(let t=0;t<s.attributes.length;t+=1){const n=s.attributes[t];e[n.name]||s.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?m(n):p(n)}function k(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=n,t.splice(e,1)[0]}return g(n)}function N(t){return k(t," ")}function A(t,n){n=""+n,t.data!==n&&(t.data=n)}function C(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function L(t,n,e){t.classList[e?"add":"remove"](n)}class S{constructor(t,n=null){this.e=p("div"),this.a=n,this.u(t)}m(t,n=null){for(let e=0;e<this.n.length;e+=1)d(t,this.n[e],n);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(h)}}let M;function T(t){M=t}function H(){if(!M)throw new Error("Function called outside component initialization");return M}function O(t){H().$$.on_mount.push(t)}function j(t){H().$$.after_update.push(t)}function P(t,n){H().$$.context.set(t,n)}function q(t){return H().$$.context.get(t)}const z=[],B=[],F=[],D=[],G=Promise.resolve();let I=!1;function J(t){F.push(t)}function K(){const t=new Set;do{for(;z.length;){const t=z.shift();T(t),Q(t.$$)}for(;B.length;)B.pop()();for(let n=0;n<F.length;n+=1){const e=F[n];t.has(e)||(e(),t.add(e))}F.length=0}while(z.length);for(;D.length;)D.pop()();I=!1}function Q(t){t.fragment&&(t.update(t.dirty),s(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(J))}const R=new Set;let U;function V(){U={r:0,c:[],p:U}}function W(){U.r||s(U.c),U=U.p}function X(t,n){t&&t.i&&(R.delete(t),t.i(n))}function Y(t,n,e,o){if(t&&t.o){if(R.has(t))return;R.add(t),U.c.push(()=>{R.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const Z="undefined"!=typeof window?window:global;function tt(t,n){const e={},o={},s={$$scope:1};let r=t.length;for(;r--;){const c=t[r],i=n[r];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)s[t]||(e[t]=i[t],s[t]=1);t[r]=i}else for(const t in c)s[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function nt(t,n,o){const{fragment:c,on_mount:i,on_destroy:u,after_update:a}=t.$$;c.m(n,o),J(()=>{const n=i.map(e).filter(r);u?u.push(...n):s(n),t.$$.on_mount=[]}),a.forEach(J)}function et(t,n){t.$$.fragment&&(s(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function ot(t,n){t.$$.dirty||(z.push(t),I||(I=!0,G.then(K)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function st(n,e,r,c,i,u){const a=M;T(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:null};let d=!1;l.ctx=r?r(n,f,(t,e,o=e)=>(l.ctx&&i(l.ctx[t],l.ctx[t]=o)&&(l.bound[t]&&l.bound[t](o),d&&ot(n,t)),e)):f,l.update(),d=!0,s(l.before_update),l.fragment=c(l.ctx),e.target&&(e.hydrate?l.fragment.l(v(e.target)):l.fragment.c(),e.intro&&X(n.$$.fragment),nt(n,e.target,e.anchor),K()),T(a)}let rt;"undefined"!=typeof HTMLElement&&(rt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}});class ct{$destroy(){et(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{V as A,W as B,q as C,C as D,m as E,_ as F,L as G,S as H,$ as I,x as J,s as K,j as L,B as M,O as N,J as O,i as P,Z as Q,ct as S,b as a,N as b,u as c,E as d,p as e,v as f,h as g,w as h,st as i,d as j,f as k,a as l,nt as m,Y as n,et as o,g as p,k as q,t as r,c as s,X as t,l as u,y as v,A as w,n as x,tt as y,P as z};