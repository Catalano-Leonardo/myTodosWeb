import{S as A,D as J,F as Q,G as P,H as W,I as y,J as N,U as b,h as g,z as F,K as X,L as p,M as z,v as C,C as ee,m as te,E as ne,N as ae,O as re,B as fe,P as q,Q as U,n as $,R as G,w as ie,V as se,W as ue,X as le,Y as _e,Z as H,_ as V,$ as ce,a0 as ve,a1 as de,e as B,k as K,a2 as oe,a3 as be,a4 as he,a5 as me,a6 as ye,a7 as ge,d as D,b as Pe}from"./runtime.DTpu0EA1.js";import{c as Ee}from"./store.D2sDRlcC.js";function I(t,i=null,v){if(typeof t!="object"||t===null||A in t)return t;const _=p(t);if(_!==J&&_!==Q)return t;var r=new Map,l=z(t),d=P(0);l&&r.set("length",P(t.length));var h;return new Proxy(t,{defineProperty(s,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&W();var f=r.get(e);return f===void 0?(f=P(n.value),r.set(e,f)):y(f,I(n.value,h)),!0},deleteProperty(s,e){var n=r.get(e);if(n===void 0)e in s&&r.set(e,P(b));else{if(l&&typeof e=="string"){var f=r.get("length"),a=Number(e);Number.isInteger(a)&&a<f.v&&y(f,a)}y(n,b),Z(d)}return!0},get(s,e,n){var o;if(e===A)return t;var f=r.get(e),a=e in s;if(f===void 0&&(!a||(o=N(s,e))!=null&&o.writable)&&(f=P(I(a?s[e]:b,h)),r.set(e,f)),f!==void 0){var u=g(f);return u===b?void 0:u}return Reflect.get(s,e,n)},getOwnPropertyDescriptor(s,e){var n=Reflect.getOwnPropertyDescriptor(s,e);if(n&&"value"in n){var f=r.get(e);f&&(n.value=g(f))}else if(n===void 0){var a=r.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==b)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return n},has(s,e){var u;if(e===A)return!0;var n=r.get(e),f=n!==void 0&&n.v!==b||Reflect.has(s,e);if(n!==void 0||F!==null&&(!f||(u=N(s,e))!=null&&u.writable)){n===void 0&&(n=P(f?I(s[e],h):b),r.set(e,n));var a=g(n);if(a===b)return!1}return f},set(s,e,n,f){var w;var a=r.get(e),u=e in s;if(l&&e==="length")for(var o=n;o<a.v;o+=1){var E=r.get(o+"");E!==void 0?y(E,b):o in s&&(E=P(b),r.set(o+"",E))}a===void 0?(!u||(w=N(s,e))!=null&&w.writable)&&(a=P(void 0),y(a,I(n,h)),r.set(e,a)):(u=a.v!==b,y(a,I(n,h)));var m=Reflect.getOwnPropertyDescriptor(s,e);if(m!=null&&m.set&&m.set.call(f,n),!u){if(l&&typeof e=="string"){var S=r.get("length"),O=Number(e);Number.isInteger(O)&&O>=S.v&&y(S,O+1)}Z(d)}return!0},ownKeys(s){g(d);var e=Reflect.ownKeys(s).filter(a=>{var u=r.get(a);return u===void 0||u.v!==b});for(var[n,f]of r)f.v!==b&&!(n in s)&&e.push(n);return e},setPrototypeOf(){X()}})}function Z(t,i=1){y(t,t.v+i)}function k(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Oe(t,i,v=!1){C&&ee();var _=t,r=null,l=null,d=b,h=v?ne:0,s=!1;const e=(f,a=!0)=>{s=!0,n(a,f)},n=(f,a)=>{if(d===(d=f))return;let u=!1;if(C){const o=_.data===ae;!!d===o&&(_=re(),fe(_),q(!1),u=!0)}d?(r?U(r):a&&(r=$(()=>a(_))),l&&G(l,()=>{l=null})):(l?U(l):a&&(l=$(()=>a(_))),r&&G(r,()=>{r=null})),u&&q(!0)};te(()=>{s=!1,i(e),s||n(null,null)},h),C&&(_=ie)}function j(t){for(var i=F,v=F;i!==null&&!(i.f&(le|_e));)i=i.parent;try{return H(i),t()}finally{H(v)}}function Te(t,i,v,_){var Y;var r=(v&me)!==0,l=!V||(v&ce)!==0,d=(v&ve)!==0,h=(v&ye)!==0,s=!1,e;d?[e,s]=Ee(()=>t[i]):e=t[i];var n=A in t||de in t,f=((Y=N(t,i))==null?void 0:Y.set)??(n&&d&&i in t?c=>t[i]=c:void 0),a=_,u=!0,o=!1,E=()=>(o=!0,u&&(u=!1,h?a=B(_):a=_),a);e===void 0&&_!==void 0&&(f&&l&&se(),e=E(),f&&f(e));var m;if(l)m=()=>{var c=t[i];return c===void 0?E():(u=!0,o=!1,c)};else{var S=j(()=>(r?K:oe)(()=>t[i]));S.f|=ue,m=()=>{var c=g(S);return c!==void 0&&(a=void 0),c===void 0?a:c}}if(!(v&be))return m;if(f){var O=t.$$legacy;return function(c,R){return arguments.length>0?((!l||!R||O||s)&&f(R?m():c),c):m()}}var w=!1,M=!1,x=ge(e),T=j(()=>K(()=>{var c=m(),R=g(x);return w?(w=!1,M=!0,R):(M=!1,x.v=c)}));return r||(T.equals=he),function(c,R){if(arguments.length>0){const L=R?g(T):l&&d?I(c):c;return T.equals(L)||(w=!0,y(x,L),o&&a!==void 0&&(a=L),B(()=>g(T))),c}return g(T)}}function Ae(t){D===null&&k(),V&&D.l!==null?Re(D).m.push(t):Pe(()=>{const i=B(t);if(typeof i=="function")return i})}function we(t,i,{bubbles:v=!1,cancelable:_=!1}={}){return new CustomEvent(t,{detail:i,bubbles:v,cancelable:_})}function Ne(){const t=D;return t===null&&k(),(i,v,_)=>{var l;const r=(l=t.s.$$events)==null?void 0:l[i];if(r){const d=z(r)?r.slice():[r],h=we(i,v,_);for(const s of d)s.call(t.x,h);return!h.defaultPrevented}return!0}}function Re(t){var i=t.l;return i.u??(i.u={a:[],b:[],m:[]})}export{I as a,Ne as c,Oe as i,Ae as o,Te as p};
