const __vite__fileDeps=["../nodes/0.Non7w657.js","../chunks/scheduler.Dgxcbnqg.js","../chunks/index.BAd-COy6.js","../chunks/Snackbar.DbxO-GXt.js","../chunks/index.BnQT6tZ-.js","../chunks/passwordMatch.DtFSjvj-.js","../chunks/validators.Rol07ro1.js","../chunks/PasswordMeter.CEE5veXg.js","../assets/0.DCAzx7HC.css","../nodes/1.BJkq8N4o.js","../chunks/stores.CqkRlcZ3.js","../chunks/entry.DJ-X7GeV.js","../nodes/2.CSIAX3Ep.js","../chunks/Table.BEDIcvDl.js","../assets/Table.aHMfhN_1.css","../nodes/3.DlJlmOvI.js","../nodes/4.BMDwmOCa.js","../nodes/5.Cu53zloh.js","../nodes/6._0ETZ1Qa.js","../nodes/7.DSkl30Qs.js","../nodes/8.DVNOREwm.js","../nodes/9.B-aKrHpQ.js","../nodes/10.BqwzEQdb.js","../nodes/11.Cp5p6-02.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as q,k as B,E as h,m as U,i as v,d as g,F,G,e as H,c as W,a as j,f as D,H as d,t as z,b as J,h as K,o as O,I as R,C as Q}from"../chunks/scheduler.Dgxcbnqg.js";import{S as X,i as Y,d as w,f as A,t as E,g as I,c as P,a as T,m as L,e as y}from"../chunks/index.BAd-COy6.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},p=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(o=>{if(o=M(o,i),o in V)return;V[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!i)for(let b=_.length-1;b>=0;b--){const k=_[b];if(k.href===o&&(!c||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Z,c||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),c)return new Promise((b,k)=>{u.addEventListener("load",b),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=R(r,_(a)),a[12](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&L(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){I();const o=e;w(o.$$.fragment,1,0,()=>{y(o,1)}),A()}r?(e=R(r,_(t)),t[12](e),P(e.$$.fragment),E(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&E(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[12](null),e&&y(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=R(r,_(a)),a[11](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&L(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){I();const o=e;w(o.$$.fragment,1,0,()=>{y(o,1)}),A()}r?(e=R(r,_(t)),t[11](e),P(e.$$.fragment),E(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&E(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[11](null),e&&y(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=R(r,_(a)),a[10](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,s){e&&L(e,t,s),v(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){I();const o=e;w(o.$$.fragment,1,0,()=>{y(o,1)}),A()}r?(e=R(r,_(t)),t[10](e),P(e.$$.fragment),E(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&E(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[10](null),e&&y(e,t)}}}function S(a){let e,n=a[6]&&C(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=W(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=j(e);n&&n.l(r),r.forEach(g),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,r){v(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=C(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function C(a){let e;return{c(){e=z(a[7])},l(n){e=J(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let c=a[5]&&S(a);return{c(){n.c(),i=B(),c&&c.c(),r=h()},l(l){n.l(l),i=U(l),c&&c.l(l),r=h()},m(l,m){s[e].m(l,m),v(l,i,m),c&&c.m(l,m),v(l,r,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?s[e].p(l,m):(I(),w(s[u],1,1,()=>{s[u]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),E(n,1),n.m(i.parentNode,i)),l[5]?c?c.p(l,m):(c=S(l),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(l){_||(E(n),_=!0)},o(l){w(n),_=!1},d(l){l&&(g(i),g(r)),s[e].d(l),c&&c.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:c=null}=e;F(i.page.notify);let l=!1,m=!1,u=null;G(()=>{const f=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),f});function b(f){O[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function k(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function N(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,s=f.form),"data_0"in f&&n(3,o=f.data_0),"data_1"in f&&n(4,c=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,o,c,l,m,u,i,r,b,k,N]}class oe extends X{constructor(e){super(),Y(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.Non7w657.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>p(()=>import("../nodes/1.BJkq8N4o.js"),__vite__mapDeps([9,1,2,10,11,4]),import.meta.url),()=>p(()=>import("../nodes/2.CSIAX3Ep.js"),__vite__mapDeps([12,1,2,3,4,6,13,14]),import.meta.url),()=>p(()=>import("../nodes/3.DlJlmOvI.js"),__vite__mapDeps([15,1,2]),import.meta.url),()=>p(()=>import("../nodes/4.BMDwmOCa.js"),__vite__mapDeps([16,1,2]),import.meta.url),()=>p(()=>import("../nodes/5.Cu53zloh.js"),__vite__mapDeps([17,3,1,4,2,13,6,14]),import.meta.url),()=>p(()=>import("../nodes/6._0ETZ1Qa.js"),__vite__mapDeps([18,1,2,3,4,7,5,6]),import.meta.url),()=>p(()=>import("../nodes/7.DSkl30Qs.js"),__vite__mapDeps([19,1,2]),import.meta.url),()=>p(()=>import("../nodes/8.DVNOREwm.js"),__vite__mapDeps([20,1,2]),import.meta.url),()=>p(()=>import("../nodes/9.B-aKrHpQ.js"),__vite__mapDeps([21,3,1,4,2,13,6,14]),import.meta.url),()=>p(()=>import("../nodes/10.BqwzEQdb.js"),__vite__mapDeps([22,1,2,10,11,4,3,7]),import.meta.url),()=>p(()=>import("../nodes/11.Cp5p6-02.js"),__vite__mapDeps([23,3,1,4,2,13,6,14]),import.meta.url)],le=[],ce={"/":[2],"/about":[3],"/contact":[4],"/courses":[5],"/dashboard":[6],"/disclaimer":[7],"/privacy":[8],"/professors":[9],"/resetpass":[10],"/scores":[11]},fe={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{ce as dictionary,fe as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
