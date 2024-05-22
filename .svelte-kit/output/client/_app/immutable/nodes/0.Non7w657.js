import{s as be,o as Pt,e as c,k as v,t as Rt,c as u,a as S,l as V,m as y,d as h,b as jt,f as p,i as Q,g as a,r as Dt,q as vt,a2 as ce,u as Vt,v as ue,j as Yt,h as ve,a3 as ge,z as ie,p as Me,K as ze,L as Ge,M as We,N as Ze,n as Ke}from"../chunks/scheduler.Dgxcbnqg.js";import{S as ye,i as ke,b as Ft,c as $t,a as te,m as ee,t as Gt,d as Wt,e as ne}from"../chunks/index.BAd-COy6.js";import{S as Le,u as _e,a as Zt}from"../chunks/Snackbar.DbxO-GXt.js";import{L as Kt,p as Je}from"../chunks/passwordMatch.DtFSjvj-.js";import{v as Qt,r as Xt,e as Ie,m as Qe,a as Xe}from"../chunks/validators.Rol07ro1.js";import{P as Ye}from"../chunks/PasswordMeter.CEE5veXg.js";const $e=!1,An=Object.freeze(Object.defineProperty({__proto__:null,ssr:$e},Symbol.toStringTag,{value:"Module"}));(()=>{let s,t,e,r;const o={light:"",dark:""},_=[];async function k(n){return await new Promise(l=>setTimeout(l,n))}function d(){return"fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const l=Math.random()*16|0;return(n==="x"?l:l&3|8).toString(16)})}function m(n,l){try{return typeof n=="string"?(l??document).querySelector(n):n}catch{return null}}function g(n,l){try{return typeof n=="string"?(l??document).querySelectorAll(n):n??_}catch{return _}}function T(n,l){var i,f;return(f=(i=n==null?void 0:n.classList)==null?void 0:i.contains(l))!=null?f:!1}function D(n,l){var i;return((i=n==null?void 0:n.tagName)==null?void 0:i.toLowerCase())===l}function F(n,l){var i;return((i=n==null?void 0:n.type)==null?void 0:i.toLowerCase())===l}function j(n,l){var i;(i=n==null?void 0:n.classList)==null||i.add(l)}function b(n,l){var i;(i=n==null?void 0:n.classList)==null||i.remove(l)}function O(n,l,i,f=!0){n==null||n.addEventListener(l,i,f)}function it(n,l,i,f=!0){n==null||n.removeEventListener(l,i,f)}function E(n,l){var i;(i=l==null?void 0:l.parentNode)==null||i.insertBefore(n,l)}function N(n){return n==null?void 0:n.previousElementSibling}function X(n){return n==null?void 0:n.nextElementSibling}function K(n){return n==null?void 0:n.parentElement}function kt(n){const l=document.createElement("div");for(let i=0,f=Object.keys(n),C=f.length;i<C;i++){const Z=f[i];l.setAttribute(Z,n[Z])}return l}function W(n){const l=n;F(l,"number")&&!l.value&&(l.value=""),l.placeholder||(l.placeholder=" "),n.getAttribute("data-ui")&&et(n,null)}function Y(n){et(n.currentTarget,null,null,n)}function dt(n){const l=n.currentTarget,i=K(l),f=m("input:not([type=file], [type=checkbox], [type=radio]), select, textarea",i);f&&f.focus()}function A(n){const l=n.currentTarget;W(l)}function U(n){const l=n.currentTarget;W(l)}function st(n){it(document.body,"click",st);const l=n.target,i=g("menu.active");for(let f=0,C=i.length;f<C;f++)Nt(l,i[f],n)}function mt(n){const l=n.currentTarget;b(l,"active"),s&&clearTimeout(s)}function $(n){const l=n.currentTarget;M(l)}function pt(n){const l=n.currentTarget;nt(l)}function R(n){const l=n.currentTarget;M(l,n)}function w(n){const l=n.currentTarget;nt(l,n)}function ht(n){const l=n.currentTarget;tt(l)}function I(){t&&clearTimeout(t),t=setTimeout(()=>{ot()},180)}function M(n,l){if(l&&l.key==="Enter"){const C=N(n);return F(C,"file")?C.click():void 0}const i=n,f=X(n);!F(f,"text")||(f.value=i.files?Array.from(i.files).map(C=>C.name).join(", "):"",f.readOnly=!0,O(f,"keydown",R,!1),W(f))}function nt(n,l){if(l&&l.key==="Enter"){const C=N(n);return F(C,"color")?C.click():void 0}const i=n,f=X(n);!F(f,"text")||(f.readOnly=!0,f.value=i.value,O(f,"keydown",w,!1),W(f))}function tt(n){const l=K(n),i=K(n);l.removeAttribute("style"),T(l,"min")&&l.style.setProperty("---size",`${Math.max(n.scrollHeight,i.offsetHeight)}px`)}function ft(n){const l=K(n),i=m("span",l),f=g("input",l);if(!f.length||!i)return;const C=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size"))||16,Z=T(l,"max")?0:.25*C*100/f[0].offsetWidth,B=[],lt=[];for(let Mt=0,L=f.length;Mt<L;Mt++){const J=parseFloat(f[Mt].min)||0,yt=parseFloat(f[Mt].max)||100,ut=parseFloat(f[Mt].value)||0,At=(ut-J)*100/(yt-J),Tt=Z/2-Z*At/100;B.push(At+Tt),lt.push(ut)}let P=B[0],G=0,H=100-G-P,St=lt[0],wt=lt[1]||0;f.length>1&&(P=Math.abs(B[1]-B[0]),G=B[1]>B[0]?B[0]:B[1],H=100-G-P,wt>St&&(St=lt[1]||0,wt=lt[0])),l.style.setProperty("---start",`${G}%`),l.style.setProperty("---end",`${H}%`),l.style.setProperty("---value1",`'${St}'`),l.style.setProperty("---value2",`'${wt}'`)}function gt(n){if(n){const i=n.target;if(i.type==="range")return ft(i)}const l=g(".slider > input[type=range]");l.length?O(globalThis,"input",gt,!1):it(globalThis,"input",gt,!1);for(let i=0,f=l.length;i<f;i++)ft(l[i])}async function et(n,l,i,f){if(!(!l&&(l=m(n.getAttribute("data-ui")),!l))){if(D(l,"dialog"))return await at(n,l);if(D(l,"menu"))return Nt(n,l,f);if(T(l,"snackbar"))return Ct(n,l,i);if(T(l,"page"))return rt(n,l);if(_t(n),T(l,"active"))return b(l,"active");j(l,"active")}}function _t(n){n.id&&T(n,"page")&&(n=m(`[data-ui="#${n.id}"]`));const l=K(n);if(!T(l,"tabs"))return;const i=g("a",l);for(let f=0,C=i.length;f<C;f++)b(i[f],"active");j(n,"active")}function rt(n,l){_t(n);const i=K(l);if(i)for(let f=0,C=i.children.length;f<C;f++)T(i.children[f],"page")&&b(i.children[f],"active");j(l,"active")}function Nt(n,l,i){e&&clearTimeout(e),e=setTimeout(()=>{var f,C;if(O(document.body,"click",st),_t(n),T(l,"active")){if(!i)return b(l,"active");const B=i.target,lt=m((f=B.getAttribute("data-ui"))!=null?f:""),P=B.closest("menu"),G=!m("menu",(C=B.closest("[data-ui]"))!=null?C:void 0);return lt&&lt!==P?Nt(B,lt):!lt&&!G&&P?!1:b(l,"active")}const Z=g("menu.active");for(let B=0,lt=Z.length;B<lt;B++)b(Z[B],"active");j(l,"active")},90)}async function at(n,l){var i;(i=document.activeElement)==null||i.blur(),_t(n);let f=N(l);const C=l,Z=T(l,"active")||C.open,B=T(l,"modal"),lt=K(l),P=D(lt,"nav");if(T(f,"overlay")||(f=kt({class:"overlay"}),E(f,l),await k(90)),f.onclick=()=>{B||(b(n,"active"),b(l,"active"),b(f,"active"),C.close())},P){const G=g("dialog, a, .overlay",lt);for(let H=0,St=G.length;H<St;H++){const wt=G[H];b(wt,"active"),wt.open&&wt.close()}}Z?(b(n,"active"),b(f,"active"),b(l,"active"),C.close()):(!D(n,"button")&&!T(n,"button")&&!T(n,"chip")&&j(n,"active"),j(f,"active"),j(l,"active"),B?C.showModal():C.show())}function Ct(n,l,i){var f;(f=document.activeElement)==null||f.blur(),_t(n);const C=g(".snackbar.active");for(let Z=0,B=C.length;Z<B;Z++)b(C[Z],"active");j(l,"active"),O(l,"click",mt),s&&clearTimeout(s),i!==-1&&(s=setTimeout(()=>{b(l,"active")},i??6e3))}function It(){if(o.light&&o.dark)return o;const n=document.createElement("body");n.className="light",document.body.appendChild(n);const l=document.createElement("body");l.className="dark",document.body.appendChild(l);const i=getComputedStyle(n),f=getComputedStyle(l),C=["--primary","--on-primary","--primary-container","--on-primary-container","--secondary","--on-secondary","--secondary-container","--on-secondary-container","--tertiary","--on-tertiary","--tertiary-container","--on-tertiary-container","--error","--on-error","--error-container","--on-error-container","--background","--on-background","--surface","--on-surface","--surface-variant","--on-surface-variant","--outline","--outline-variant","--shadow","--scrim","--inverse-surface","--inverse-on-surface","--inverse-primary","--surface-dim","--surface-bright","--surface-container-lowest","--surface-container-low","--surface-container","--surface-container-high","--surface-container-highest"];for(let Z=0,B=C.length;Z<B;Z++)o.light+=C[Z]+":"+i.getPropertyValue(C[Z])+";",o.dark+=C[Z]+":"+f.getPropertyValue(C[Z])+";";return document.body.removeChild(n),document.body.removeChild(l),o}function bt(n){if(!n||!globalThis.materialDynamicColors)return It();const l=/dark/i.test(document.body.className)?"dark":"light";return n.light&&n.dark?(o.light=n.light,o.dark=n.dark,document.body.setAttribute("style",n[l]),n):globalThis.materialDynamicColors(n).then(i=>{const f=C=>{let Z="";for(let B=0,lt=Object.keys(C),P=lt.length;B<P;B++){const G=lt[B],H=C[G],St=G.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();Z+="--"+St+":"+H+";"}return Z};return o.light=f(i.light),o.dark=f(i.dark),document.body.setAttribute("style",o[l]),o})}function q(n){if(!n)return/dark/i.test(document.body.className)?"dark":"light";document.body.classList.remove("light","dark"),document.body.classList.add(n);const l=n==="light"?o.light:o.dark;return globalThis.materialDynamicColors&&document.body.setAttribute("style",l),n}function z(){r||(r=new MutationObserver(I),r.observe(document.body,{childList:!0,subtree:!0}),I())}function ot(n,l){if(n){if(n==="setup")return z();if(n==="guid")return d();if(n==="mode")return q(l);if(n==="theme")return bt(l);const P=m(n);if(!P)return;et(P,P,l)}const i=g("[data-ui]");for(let P=0,G=i.length;P<G;P++)O(i[P],"click",Y);const f=g(".field > label");for(let P=0,G=f.length;P<G;P++)O(f[P],"click",dt);const C=g(".field > input:not([type=file], [type=color], [type=range]), .field > select, .field > textarea");for(let P=0,G=C.length;P<G;P++){const H=C[P];O(H,"focus",A),O(H,"blur",U),W(H)}const Z=g(".field > input[type=file]");for(let P=0,G=Z.length;P<G;P++){const H=Z[P];O(H,"change",$),M(H)}const B=g(".field > input[type=color]");for(let P=0,G=B.length;P<G;P++){const H=B[P];O(H,"change",pt),nt(H)}const lt=g(".field.textarea > textarea");for(let P=0,G=lt.length;P<G;P++){const H=lt[P];O(H,"input",ht),tt(H)}gt()}return globalThis.addEventListener&&globalThis.addEventListener("load",async()=>await ot("setup")),globalThis.beercss=ot,globalThis.ui=ot,globalThis.ui})();function De(s){let t,e;return{c(){t=c("p"),e=Rt(s[2]),this.h()},l(r){t=u(r,"P",{class:!0});var o=S(t);e=jt(o,s[2]),o.forEach(h),this.h()},h(){p(t,"class","error padding")},m(r,o){Q(r,t,o),a(t,e)},p(r,o){o&4&&ve(e,r[2])},d(r){r&&h(t)}}}function tn(s){let t,e,r="Reset Password",o,_,k,d,m,g,T,D,F="email",j,b,O="email",it,E,N,X,K="Cancel",kt,W,Y,dt,A,U,st,mt,$,pt,R=s[2]!=""&&De(s);function w(I){s[10](I)}let ht={type:"primary"};return s[1]!==void 0&&(ht.msg=s[1]),U=new Le({props:ht}),Pt.push(()=>Ft(U,"msg",w)),{c(){t=c("dialog"),e=c("h5"),e.textContent=r,o=v(),_=c("div"),k=v(),d=c("form"),m=c("div"),g=c("input"),T=v(),D=c("label"),D.textContent=F,j=v(),b=c("i"),b.textContent=O,it=v(),R&&R.c(),E=v(),N=c("nav"),X=c("button"),X.textContent=K,kt=v(),W=c("button"),Y=Rt("Confirm"),A=v(),$t(U.$$.fragment),this.h()},l(I){t=u(I,"DIALOG",{class:!0});var M=S(t);e=u(M,"H5",{"data-svelte-h":!0}),V(e)!=="svelte-9i7m6w"&&(e.textContent=r),o=y(M),_=u(M,"DIV",{class:!0}),S(_).forEach(h),k=y(M),d=u(M,"FORM",{});var nt=S(d);m=u(nt,"DIV",{class:!0});var tt=S(m);g=u(tt,"INPUT",{type:!0,name:!0,autocomplete:!0}),T=y(tt),D=u(tt,"LABEL",{"data-svelte-h":!0}),V(D)!=="svelte-1e3qw5k"&&(D.textContent=F),j=y(tt),b=u(tt,"I",{"data-svelte-h":!0}),V(b)!=="svelte-k2q616"&&(b.textContent=O),tt.forEach(h),it=y(nt),R&&R.l(nt),E=y(nt),N=u(nt,"NAV",{class:!0});var ft=S(N);X=u(ft,"BUTTON",{class:!0,"data-svelte-h":!0}),V(X)!=="svelte-16yk0wp"&&(X.textContent=K),kt=y(ft),W=u(ft,"BUTTON",{class:!0,type:!0});var gt=S(W);Y=jt(gt,"Confirm"),gt.forEach(h),ft.forEach(h),nt.forEach(h),M.forEach(h),A=y(I),te(U.$$.fragment,I),this.h()},h(){p(_,"class","small-space"),p(g,"type","email"),p(g,"name","email"),p(g,"autocomplete","username"),p(m,"class","field label suffix round border"),p(X,"class","transparent link"),p(W,"class","transparent link"),p(W,"type","submit"),W.disabled=dt=!s[3].valid,p(N,"class","right-align no-space"),p(t,"class","modal center middle")},m(I,M){Q(I,t,M),a(t,e),a(t,o),a(t,_),a(t,k),a(t,d),a(d,m),a(m,g),a(m,T),a(m,D),a(m,j),a(m,b),a(d,it),R&&R.m(d,null),a(d,E),a(d,N),a(N,X),a(N,kt),a(N,W),a(W,Y),s[9](t),Q(I,A,M),ee(U,I,M),mt=!0,$||(pt=[Dt(Qt.call(null,g,[Xt,Ie])),vt(X,"click",s[7]),vt(W,"click",s[8]),Dt(s[4].call(null,d)),vt(d,"submit",ce(s[6]))],$=!0)},p(I,[M]){I[2]!=""?R?R.p(I,M):(R=De(I),R.c(),R.m(d,E)):R&&(R.d(1),R=null),(!mt||M&8&&dt!==(dt=!I[3].valid))&&(W.disabled=dt);const nt={};!st&&M&2&&(st=!0,nt.msg=I[1],Vt(()=>st=!1)),U.$set(nt)},i(I){mt||(Gt(U.$$.fragment,I),mt=!0)},o(I){Wt(U.$$.fragment,I),mt=!1},d(I){I&&(h(t),h(A)),R&&R.d(),s[9](null),ne(U,I),$=!1,ue(pt)}}}function en(s,t,e){let r,{dialog:o}=t,_="",k="";const d=_e({email:{}});Yt(s,d,b=>e(3,r=b));const m=async b=>{e(2,k=""),await Zt.reset(b).then(()=>{o.close(),r.reset(),e(1,_="reset link sent !")}).catch(O=>{e(2,k=O)})};function g(b){ge.call(this,s,b)}const T=()=>{e(2,k=""),o.close(),r.reset()},D=()=>{m(r.email.value)};function F(b){Pt[b?"unshift":"push"](()=>{o=b,e(0,o)})}function j(b){_=b,e(1,_)}return s.$$set=b=>{"dialog"in b&&e(0,o=b.dialog)},[o,_,k,r,d,m,g,T,D,F,j]}class nn extends ye{constructor(t){super(),ke(this,t,en,tn,be,{dialog:0})}}function Be(s){let t,e;return{c(){t=c("p"),e=Rt(s[2]),this.h()},l(r){t=u(r,"P",{class:!0});var o=S(t);e=jt(o,s[2]),o.forEach(h),this.h()},h(){p(t,"class","error padding")},m(r,o){Q(r,t,o),a(t,e)},p(r,o){o&4&&ve(e,r[2])},d(r){r&&h(t)}}}function ln(s){let t;return{c(){t=c("progress"),this.h()},l(e){t=u(e,"PROGRESS",{class:!0}),S(t).forEach(h),this.h()},h(){p(t,"class","circle small")},m(e,r){Q(e,t,r)},d(e){e&&h(t)}}}function sn(s){let t;return{c(){t=Rt("Confirm")},l(e){t=jt(e,"Confirm")},m(e,r){Q(e,t,r)},d(e){e&&h(t)}}}function rn(s){let t,e,r="Login",o,_,k,d,m,g,T,D,F="email",j,b,O="email",it,E,N,X,K,kt="password",W,Y,dt="visibility",A,U,st="Forgot password ?",mt,$,pt,R,w="Cancel",ht,I,M,nt,tt,ft,gt,et,_t,rt=s[2]!=""&&Be(s);function Nt(q,z){return q[3]?ln:sn}let at=Nt(s),Ct=at(s);function It(q){s[12](q)}let bt={};return s[1]!==void 0&&(bt.dialog=s[1]),tt=new nn({props:bt}),Pt.push(()=>Ft(tt,"dialog",It)),{c(){t=c("dialog"),e=c("h5"),e.textContent=r,o=v(),_=c("div"),k=v(),d=c("form"),m=c("div"),g=c("input"),T=v(),D=c("label"),D.textContent=F,j=v(),b=c("i"),b.textContent=O,it=v(),E=c("div"),N=c("input"),X=v(),K=c("label"),K.textContent=kt,W=v(),Y=c("i"),Y.textContent=dt,A=v(),U=c("button"),U.textContent=st,mt=v(),rt&&rt.c(),$=v(),pt=c("nav"),R=c("button"),R.textContent=w,ht=v(),I=c("button"),Ct.c(),nt=v(),$t(tt.$$.fragment),this.h()},l(q){t=u(q,"DIALOG",{class:!0});var z=S(t);e=u(z,"H5",{"data-svelte-h":!0}),V(e)!=="svelte-1vyibn5"&&(e.textContent=r),o=y(z),_=u(z,"DIV",{class:!0}),S(_).forEach(h),k=y(z),d=u(z,"FORM",{});var ot=S(d);m=u(ot,"DIV",{class:!0});var n=S(m);g=u(n,"INPUT",{type:!0,name:!0,autocomplete:!0}),T=y(n),D=u(n,"LABEL",{"data-svelte-h":!0}),V(D)!=="svelte-1e3qw5k"&&(D.textContent=F),j=y(n),b=u(n,"I",{"data-svelte-h":!0}),V(b)!=="svelte-k2q616"&&(b.textContent=O),n.forEach(h),it=y(ot),E=u(ot,"DIV",{class:!0});var l=S(E);N=u(l,"INPUT",{type:!0,name:!0,autocomplete:!0}),X=y(l),K=u(l,"LABEL",{"data-svelte-h":!0}),V(K)!=="svelte-kcc32r"&&(K.textContent=kt),W=y(l),Y=u(l,"I",{"data-svelte-h":!0}),V(Y)!=="svelte-1bcfmfs"&&(Y.textContent=dt),l.forEach(h),A=y(ot),U=u(ot,"BUTTON",{class:!0,"data-svelte-h":!0}),V(U)!=="svelte-1gsttbg"&&(U.textContent=st),mt=y(ot),rt&&rt.l(ot),$=y(ot),pt=u(ot,"NAV",{class:!0});var i=S(pt);R=u(i,"BUTTON",{class:!0,"data-svelte-h":!0}),V(R)!=="svelte-gt1ofs"&&(R.textContent=w),ht=y(i),I=u(i,"BUTTON",{class:!0,type:!0});var f=S(I);Ct.l(f),f.forEach(h),i.forEach(h),ot.forEach(h),z.forEach(h),nt=y(q),te(tt.$$.fragment,q),this.h()},h(){p(_,"class","small-space"),p(g,"type","email"),p(g,"name","email"),p(g,"autocomplete","username"),p(m,"class","field label suffix round border"),p(N,"type","password"),p(N,"name","password"),p(N,"autocomplete","current-password"),p(E,"class","field label suffix round border"),p(U,"class","small secondary transparent underline"),p(R,"class","transparent link"),p(I,"class","transparent link"),I.disabled=M=!s[4].valid,p(I,"type","submit"),p(pt,"class","right-align no-space"),p(t,"class","modal center middle")},m(q,z){Q(q,t,z),a(t,e),a(t,o),a(t,_),a(t,k),a(t,d),a(d,m),a(m,g),a(m,T),a(m,D),a(m,j),a(m,b),a(d,it),a(d,E),a(E,N),a(E,X),a(E,K),a(E,W),a(E,Y),a(d,A),a(d,U),a(d,mt),rt&&rt.m(d,null),a(d,$),a(d,pt),a(pt,R),a(pt,ht),a(pt,I),Ct.m(I,null),s[11](t),Q(q,nt,z),ee(tt,q,z),gt=!0,et||(_t=[Dt(Qt.call(null,g,[Xt,Ie])),Dt(Qt.call(null,N,[Xt])),vt(U,"click",s[8]),vt(R,"click",s[9]),vt(I,"click",ce(s[10])),Dt(s[5].call(null,d)),vt(d,"submit",ce(s[7]))],et=!0)},p(q,[z]){q[2]!=""?rt?rt.p(q,z):(rt=Be(q),rt.c(),rt.m(d,$)):rt&&(rt.d(1),rt=null),at!==(at=Nt(q))&&(Ct.d(1),Ct=at(q),Ct&&(Ct.c(),Ct.m(I,null))),(!gt||z&16&&M!==(M=!q[4].valid))&&(I.disabled=M);const ot={};!ft&&z&2&&(ft=!0,ot.dialog=q[1],Vt(()=>ft=!1)),tt.$set(ot)},i(q){gt||(Gt(tt.$$.fragment,q),gt=!0)},o(q){Wt(tt.$$.fragment,q),gt=!1},d(q){q&&(h(t),h(nt)),rt&&rt.d(),Ct.d(),s[11](null),ne(tt,q),et=!1,ue(_t)}}}function an(s,t,e){let r,o;Yt(s,Kt,E=>e(13,r=E));let{dialog:_}=t;const k=_e({email:{},password:{}});Yt(s,k,E=>e(4,o=E));let d,m="",g;const T=async(E,N)=>{e(3,g=!0),e(2,m=""),await Zt.login(E,N).then(()=>{ie(Kt,r=!r,r),_.close()}).catch(X=>{e(2,m=X)}).finally(()=>{e(3,g=!1)})};function D(E){ge.call(this,s,E)}const F=()=>{_.close(),d.showModal()},j=()=>{e(2,m=""),_.close(),o.reset()},b=()=>{T(o.email.value,o.password.value)};function O(E){Pt[E?"unshift":"push"](()=>{_=E,e(0,_)})}function it(E){d=E,e(1,d)}return s.$$set=E=>{"dialog"in E&&e(0,_=E.dialog)},[_,d,m,g,o,k,T,D,F,j,b,O,it]}class on extends ye{constructor(t){super(),ke(this,t,an,rn,be,{dialog:0})}}function Ue(s){let t,e;return{c(){t=c("p"),e=Rt(s[4]),this.h()},l(r){t=u(r,"P",{class:!0});var o=S(t);e=jt(o,s[4]),o.forEach(h),this.h()},h(){p(t,"class","error padding")},m(r,o){Q(r,t,o),a(t,e)},p(r,o){o&16&&ve(e,r[4])},d(r){r&&h(t)}}}function cn(s){let t;return{c(){t=c("progress"),this.h()},l(e){t=u(e,"PROGRESS",{class:!0}),S(t).forEach(h),this.h()},h(){p(t,"class","circle small")},m(e,r){Q(e,t,r)},d(e){e&&h(t)}}}function un(s){let t;return{c(){t=Rt("Confirm")},l(e){t=jt(e,"Confirm")},m(e,r){Q(e,t,r)},d(e){e&&h(t)}}}function Ve(s){let t,e;return{c(){t=c("p"),e=Rt(s[4]),this.h()},l(r){t=u(r,"P",{class:!0});var o=S(t);e=jt(o,s[4]),o.forEach(h),this.h()},h(){p(t,"class","error padding")},m(r,o){Q(r,t,o),a(t,e)},p(r,o){o&16&&ve(e,r[4])},d(r){r&&h(t)}}}function fn(s){let t;return{c(){t=c("progress"),this.h()},l(e){t=u(e,"PROGRESS",{class:!0}),S(t).forEach(h),this.h()},h(){p(t,"class","circle small")},m(e,r){Q(e,t,r)},d(e){e&&h(t)}}}function dn(s){let t;return{c(){t=Rt("Confirm")},l(e){t=jt(e,"Confirm")},m(e,r){Q(e,t,r)},d(e){e&&h(t)}}}function mn(s){let t,e,r="Signup",o,_,k,d,m,g,T,D,F="email",j,b,O="email",it,E,N,X,K,kt="password",W,Y,dt="visibility",A,U,st,mt,$,pt="confirm password",R,w,ht="visibility",I,M,nt,tt,ft,gt,et,_t,rt="Cancel",Nt,at,Ct,It,bt,q,z="Confirm",ot,n,l,i,f,C,Z,B,lt="confirmation code",P,G,H="code",St,wt,Mt="Resend",L,J,yt,ut,At="Cancel",Tt,Ot,Jt,fe,Bt,Ce,we,le,Te,Ne;function qe(x){s[18](x)}function He(x){s[19](x)}let Ee={};s[2]!==void 0&&(Ee.password=s[2]),s[3]!==void 0&&(Ee.score=s[3]),M=new Ye({props:Ee}),Pt.push(()=>Ft(M,"password",qe)),Pt.push(()=>Ft(M,"score",He));let Et=s[4]!=""&&Ue(s);function Ae(x,ct){return x[7]?cn:un}let de=Ae(s),qt=de(s),xt=s[4]!=""&&Ve(s);function Oe(x,ct){return x[7]?fn:dn}let me=Oe(s),Ht=me(s);function Re(x){s[26](x)}function je(x){s[27](x)}let xe={};return s[5]!==void 0&&(xe.type=s[5]),s[6]!==void 0&&(xe.msg=s[6]),Bt=new Le({props:xe}),Pt.push(()=>Ft(Bt,"type",Re)),Pt.push(()=>Ft(Bt,"msg",je)),{c(){t=c("dialog"),e=c("h5"),e.textContent=r,o=v(),_=c("div"),k=v(),d=c("form"),m=c("div"),g=c("input"),T=v(),D=c("label"),D.textContent=F,j=v(),b=c("i"),b.textContent=O,it=v(),E=c("div"),N=c("input"),X=v(),K=c("label"),K.textContent=kt,W=v(),Y=c("i"),Y.textContent=dt,A=v(),U=c("div"),st=c("input"),mt=v(),$=c("label"),$.textContent=pt,R=v(),w=c("i"),w.textContent=ht,I=v(),$t(M.$$.fragment),ft=v(),Et&&Et.c(),gt=v(),et=c("nav"),_t=c("button"),_t.textContent=rt,Nt=v(),at=c("button"),qt.c(),It=v(),bt=c("dialog"),q=c("h5"),q.textContent=z,ot=v(),n=c("div"),l=v(),i=c("form"),f=c("div"),C=c("input"),Z=v(),B=c("label"),B.textContent=lt,P=v(),G=c("i"),G.textContent=H,St=v(),wt=c("button"),wt.textContent=Mt,L=v(),xt&&xt.c(),J=v(),yt=c("nav"),ut=c("button"),ut.textContent=At,Tt=v(),Ot=c("button"),Ht.c(),fe=v(),$t(Bt.$$.fragment),this.h()},l(x){t=u(x,"DIALOG",{class:!0});var ct=S(t);e=u(ct,"H5",{"data-svelte-h":!0}),V(e)!=="svelte-6cxnz4"&&(e.textContent=r),o=y(ct),_=u(ct,"DIV",{class:!0}),S(_).forEach(h),k=y(ct),d=u(ct,"FORM",{});var Lt=S(d);m=u(Lt,"DIV",{class:!0});var Ut=S(m);g=u(Ut,"INPUT",{type:!0,name:!0,autocomplete:!0}),T=y(Ut),D=u(Ut,"LABEL",{"data-svelte-h":!0}),V(D)!=="svelte-1e3qw5k"&&(D.textContent=F),j=y(Ut),b=u(Ut,"I",{"data-svelte-h":!0}),V(b)!=="svelte-k2q616"&&(b.textContent=O),Ut.forEach(h),it=y(Lt),E=u(Lt,"DIV",{class:!0});var se=S(E);N=u(se,"INPUT",{type:!0,name:!0,autocomplete:!0}),X=y(se),K=u(se,"LABEL",{"data-svelte-h":!0}),V(K)!=="svelte-kcc32r"&&(K.textContent=kt),W=y(se),Y=u(se,"I",{"data-svelte-h":!0}),V(Y)!=="svelte-1bcfmfs"&&(Y.textContent=dt),se.forEach(h),A=y(Lt),U=u(Lt,"DIV",{class:!0});var re=S(U);st=u(re,"INPUT",{type:!0,name:!0,autocomplete:!0}),mt=y(re),$=u(re,"LABEL",{"data-svelte-h":!0}),V($)!=="svelte-aj97ft"&&($.textContent=pt),R=y(re),w=u(re,"I",{"data-svelte-h":!0}),V(w)!=="svelte-1bcfmfs"&&(w.textContent=ht),re.forEach(h),I=y(Lt),te(M.$$.fragment,Lt),ft=y(Lt),Et&&Et.l(Lt),gt=y(Lt),et=u(Lt,"NAV",{class:!0});var pe=S(et);_t=u(pe,"BUTTON",{class:!0,"data-svelte-h":!0}),V(_t)!=="svelte-1a6oxb8"&&(_t.textContent=rt),Nt=y(pe),at=u(pe,"BUTTON",{class:!0});var Pe=S(at);qt.l(Pe),Pe.forEach(h),pe.forEach(h),Lt.forEach(h),ct.forEach(h),It=y(x),bt=u(x,"DIALOG",{class:!0});var ae=S(bt);q=u(ae,"H5",{"data-svelte-h":!0}),V(q)!=="svelte-sliufq"&&(q.textContent=z),ot=y(ae),n=u(ae,"DIV",{class:!0}),S(n).forEach(h),l=y(ae),i=u(ae,"FORM",{});var zt=S(i);f=u(zt,"DIV",{class:!0});var oe=S(f);C=u(oe,"INPUT",{type:!0,name:!0,autocomplete:!0}),Z=y(oe),B=u(oe,"LABEL",{"data-svelte-h":!0}),V(B)!=="svelte-87ysgm"&&(B.textContent=lt),P=y(oe),G=u(oe,"I",{"data-svelte-h":!0}),V(G)!=="svelte-1fzkmqf"&&(G.textContent=H),oe.forEach(h),St=y(zt),wt=u(zt,"BUTTON",{class:!0,"data-svelte-h":!0}),V(wt)!=="svelte-1cw9q24"&&(wt.textContent=Mt),L=y(zt),xt&&xt.l(zt),J=y(zt),yt=u(zt,"NAV",{class:!0});var he=S(yt);ut=u(he,"BUTTON",{class:!0,"data-svelte-h":!0}),V(ut)!=="svelte-fx6v3l"&&(ut.textContent=At),Tt=y(he),Ot=u(he,"BUTTON",{type:!0,class:!0});var Se=S(Ot);Ht.l(Se),Se.forEach(h),he.forEach(h),zt.forEach(h),ae.forEach(h),fe=y(x),te(Bt.$$.fragment,x),this.h()},h(){p(_,"class","small-space"),p(g,"type","email"),p(g,"name","email"),p(g,"autocomplete","email"),p(m,"class","field label suffix round border"),p(N,"type","password"),p(N,"name","password"),p(N,"autocomplete","new-password"),p(E,"class","field label suffix round border"),p(st,"type","password"),p(st,"name","confirmPassword"),p(st,"autocomplete","new-password"),p(U,"class","field label suffix round border"),p(_t,"class","transparent link"),p(at,"class","transparent link"),at.disabled=Ct=!s[8].valid||!(s[3]>=3),p(et,"class","right-align no-space"),p(t,"class","modal center middle"),p(n,"class","small-space"),p(C,"type","text"),p(C,"name","code"),p(C,"autocomplete","off"),p(f,"class","field label suffix round border"),p(wt,"class","responsive"),p(ut,"class","transparent link"),p(Ot,"type","submit"),p(Ot,"class","transparent link"),Ot.disabled=Jt=!s[9].valid,p(yt,"class","right-align no-space"),p(bt,"class","modal center middle")},m(x,ct){Q(x,t,ct),a(t,e),a(t,o),a(t,_),a(t,k),a(t,d),a(d,m),a(m,g),a(m,T),a(m,D),a(m,j),a(m,b),a(d,it),a(d,E),a(E,N),Me(N,s[2]),a(E,X),a(E,K),a(E,W),a(E,Y),a(d,A),a(d,U),a(U,st),a(U,mt),a(U,$),a(U,R),a(U,w),a(d,I),ee(M,d,null),a(d,ft),Et&&Et.m(d,null),a(d,gt),a(d,et),a(et,_t),a(et,Nt),a(et,at),qt.m(at,null),s[22](t),Q(x,It,ct),Q(x,bt,ct),a(bt,q),a(bt,ot),a(bt,n),a(bt,l),a(bt,i),a(i,f),a(f,C),a(f,Z),a(f,B),a(f,P),a(f,G),a(i,St),a(i,wt),a(i,L),xt&&xt.m(i,null),a(i,J),a(i,yt),a(yt,ut),a(yt,Tt),a(yt,Ot),Ht.m(Ot,null),s[25](bt),Q(x,fe,ct),ee(Bt,x,ct),le=!0,Te||(Ne=[Dt(Qt.call(null,g,[Xt,Ie])),vt(N,"input",s[17]),Dt(Qt.call(null,N,[Xt])),Dt(Qt.call(null,st,[Xt,Je])),vt(_t,"click",s[20]),vt(at,"click",s[21]),Dt(s[10].call(null,d)),vt(d,"submit",ce(s[16])),Dt(Qt.call(null,C,[Xt,Qe(8),Xe(8)])),vt(wt,"click",s[14]),vt(ut,"click",s[23]),vt(Ot,"click",s[24]),Dt(s[11].call(null,i)),vt(i,"submit",ce(s[15]))],Te=!0)},p(x,[ct]){ct&4&&N.value!==x[2]&&Me(N,x[2]);const Lt={};!nt&&ct&4&&(nt=!0,Lt.password=x[2],Vt(()=>nt=!1)),!tt&&ct&8&&(tt=!0,Lt.score=x[3],Vt(()=>tt=!1)),M.$set(Lt),x[4]!=""?Et?Et.p(x,ct):(Et=Ue(x),Et.c(),Et.m(d,gt)):Et&&(Et.d(1),Et=null),de!==(de=Ae(x))&&(qt.d(1),qt=de(x),qt&&(qt.c(),qt.m(at,null))),(!le||ct&264&&Ct!==(Ct=!x[8].valid||!(x[3]>=3)))&&(at.disabled=Ct),x[4]!=""?xt?xt.p(x,ct):(xt=Ve(x),xt.c(),xt.m(i,J)):xt&&(xt.d(1),xt=null),me!==(me=Oe(x))&&(Ht.d(1),Ht=me(x),Ht&&(Ht.c(),Ht.m(Ot,null))),(!le||ct&512&&Jt!==(Jt=!x[9].valid))&&(Ot.disabled=Jt);const Ut={};!Ce&&ct&32&&(Ce=!0,Ut.type=x[5],Vt(()=>Ce=!1)),!we&&ct&64&&(we=!0,Ut.msg=x[6],Vt(()=>we=!1)),Bt.$set(Ut)},i(x){le||(Gt(M.$$.fragment,x),Gt(Bt.$$.fragment,x),le=!0)},o(x){Wt(M.$$.fragment,x),Wt(Bt.$$.fragment,x),le=!1},d(x){x&&(h(t),h(It),h(bt),h(fe)),ne(M),Et&&Et.d(),qt.d(),s[22](null),xt&&xt.d(),Ht.d(),s[25](null),ne(Bt,x),Te=!1,ue(Ne)}}}function pn(s,t,e){let r,o,_;Yt(s,Kt,w=>e(28,o=w));let{dialog:k}=t;const d=_e({email:{},password:{}},"signup");Yt(s,d,w=>e(8,r=w));const m=_e({code:{}},"confirm");Yt(s,m,w=>e(9,_=w));let g,T="",D=0,F="",j="",b="",O;const it=async(w,ht)=>{e(7,O=!0),e(4,F=""),await Zt.register(w,ht).then(()=>{k.close(),g.showModal()}).catch(I=>{e(4,F=I)}).finally(()=>{e(7,O=!1)})},E=async w=>{e(7,O=!0),e(4,F=""),await Zt.confirm(w).then(()=>{e(5,j="primary"),e(6,b="confirmed"),g.close(),Zt.login(r.email.value,r.password.value).then(()=>{r.reset(),_.reset(),e(6,b="logged in"),ie(Kt,o=!0,o)}).catch(ht=>{e(5,j="error"),e(6,b=ht)}).finally(()=>{e(7,O=!1)})}).catch(ht=>{e(4,F=ht)}).finally(()=>{e(7,O=!1)})},N=async()=>{e(7,O=!0),e(4,F=""),await Zt.resendCode(r.email.value,r.password.value).then(()=>{e(5,j="primary"),e(6,b="code resent")}).catch(w=>{e(4,F=w)}).finally(()=>{e(7,O=!1)})};function X(w){ge.call(this,s,w)}function K(w){ge.call(this,s,w)}function kt(){T=this.value,e(2,T)}function W(w){T=w,e(2,T)}function Y(w){D=w,e(3,D)}const dt=()=>{e(4,F=""),e(3,D=0),k.close(),r.reset()},A=()=>{it(r.email.value,r.password.value)};function U(w){Pt[w?"unshift":"push"](()=>{k=w,e(0,k)})}const st=()=>{e(4,F=""),g.close(),_.reset(),r.reset()},mt=()=>{E(_.code.value)};function $(w){Pt[w?"unshift":"push"](()=>{g=w,e(1,g)})}function pt(w){j=w,e(5,j)}function R(w){b=w,e(6,b)}return s.$$set=w=>{"dialog"in w&&e(0,k=w.dialog)},[k,g,T,D,F,j,b,O,r,_,d,m,it,E,N,X,K,kt,W,Y,dt,A,U,st,mt,$,pt,R]}class hn extends ye{constructor(t){super(),ke(this,t,pn,mn,be,{dialog:0})}}function Fe(s){let t,e="Dashboard";return{c(){t=c("a"),t.textContent=e,this.h()},l(r){t=u(r,"A",{href:!0,"data-svelte-h":!0}),V(t)!=="svelte-f77er"&&(t.textContent=e),this.h()},h(){p(t,"href","/dashboard")},m(r,o){Q(r,t,o)},d(r){r&&h(t)}}}function gn(s){let t,e,r;function o(d,m){return d[2]?vn:bn}let _=o(s),k=_(s);return{c(){t=c("button"),k.c(),this.h()},l(d){t=u(d,"BUTTON",{class:!0});var m=S(t);k.l(m),m.forEach(h),this.h()},h(){p(t,"class","border small")},m(d,m){Q(d,t,m),k.m(t,null),e||(r=[vt(t,"click",s[13]),vt(t,"mouseleave",s[14]),vt(t,"mouseenter",s[15])],e=!0)},p(d,m){_!==(_=o(d))&&(k.d(1),k=_(d),k&&(k.c(),k.m(t,null)))},d(d){d&&h(t),k.d(),e=!1,ue(r)}}}function _n(s){let t,e,r="<span>Signup</span> <i>person_add</i>",o,_,k="<span>Login</span> <i>login</i>",d,m;return{c(){t=c("nav"),e=c("button"),e.innerHTML=r,o=v(),_=c("button"),_.innerHTML=k,this.h()},l(g){t=u(g,"NAV",{class:!0});var T=S(t);e=u(T,"BUTTON",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-fudo3u"&&(e.innerHTML=r),o=y(T),_=u(T,"BUTTON",{class:!0,"data-svelte-h":!0}),V(_)!=="svelte-b9rw55"&&(_.innerHTML=k),T.forEach(h),this.h()},h(){p(e,"class","border left-round small max"),p(_,"class","border right-round small max"),p(t,"class","no-space")},m(g,T){Q(g,t,T),a(t,e),a(t,o),a(t,_),d||(m=[vt(e,"click",s[11]),vt(_,"click",s[12])],d=!0)},p:Ke,d(g){g&&h(t),d=!1,ue(m)}}}function bn(s){let t,e,r="sync_saved_locally";return{c(){t=Rt(`Signed in
						`),e=c("i"),e.textContent=r},l(o){t=jt(o,`Signed in
						`),e=u(o,"I",{"data-svelte-h":!0}),V(e)!=="svelte-brggrc"&&(e.textContent=r)},m(o,_){Q(o,t,_),Q(o,e,_)},d(o){o&&(h(t),h(e))}}}function vn(s){let t,e="Logout",r,o,_="logout";return{c(){t=c("span"),t.textContent=e,r=v(),o=c("i"),o.textContent=_},l(k){t=u(k,"SPAN",{"data-svelte-h":!0}),V(t)!=="svelte-1rheak"&&(t.textContent=e),r=y(k),o=u(k,"I",{"data-svelte-h":!0}),V(o)!=="svelte-cpu96a"&&(o.textContent=_)},m(k,d){Q(k,t,d),Q(k,r,d),Q(k,o,d)},d(k){k&&(h(t),h(r),h(o))}}}function yn(s){let t,e="dark_mode";return{c(){t=c("i"),t.textContent=e},l(r){t=u(r,"I",{"data-svelte-h":!0}),V(t)!=="svelte-922dac"&&(t.textContent=e)},m(r,o){Q(r,t,o)},d(r){r&&h(t)}}}function kn(s){let t,e="light_mode";return{c(){t=c("i"),t.textContent=e},l(r){t=u(r,"I",{"data-svelte-h":!0}),V(t)!=="svelte-1h1jdua"&&(t.textContent=e)},m(r,o){Q(r,t,o)},d(r){r&&h(t)}}}function Cn(s){let t,e,r,o,_,k="menu",d,m,g,T="Home",D,F,j="Courses",b,O,it="Professors",E,N,X="Scores",K,kt,W,Y,dt,A,U,st,mt,$,pt='<a href="/" id="home" class="svelte-xdwcoc">Is this professor good ?</a>',R,w,ht,I,M,nt,tt,ft,gt,et,_t,rt,Nt,at,Ct=`<section class="center-align"><a class="no-margin center-align" href="/about">about</a>
			~
			<a class="no-margin center-align" href="/contact">contact</a>
			~
			<a class="no-margin center-align" href="/privacy">privacy</a>
			~
			<a class="no-margin center-align" href="/disclaimer">disclaimer</a></section> <section class="center-align"><a class="no-margin center-align link" href="https://github.com/vanillaiice" target="_blank">© 2024 🍦 vanillaiice</a>
			~ made with
			<a class="no-margin center-align link" href="https://beercss.com" target="_blank">beercss</a>
			&amp;
			<a class="button circle transparent no-margin" href="https://kit.svelte.dev/" target="_blank"><img class="tiny" src="/svelte-logo.svg" alt="sveltejs Logo"/></a></section> <section class="center-align"><a class="button circle transparent" href="https://github.com/vanillaiice/itpg" target="_blank"><i><img src="/github.svg" alt="github"/></i></a> <a class="button circle transparent" href="https://twitter.com/vanillaiiceee" target="_blank"><i><img src="/x.svg" alt="twitter"/></i></a></section>`,It,bt,q,z=s[6]&&Fe();function ot(L,J){return L[6]?gn:_n}let n=ot(s),l=n(s);function i(L,J){return L[5]?kn:yn}let f=i(s),C=f(s);function Z(L){s[16](L)}let B={};s[0]!==void 0&&(B.dialog=s[0]),w=new on({props:B}),Pt.push(()=>Ft(w,"dialog",Z));function lt(L){s[17](L)}let P={};s[1]!==void 0&&(P.dialog=s[1]),M=new hn({props:P}),Pt.push(()=>Ft(M,"dialog",lt));const G=s[10].default,H=ze(G,s,s[9],null);function St(L){s[18](L)}function wt(L){s[19](L)}let Mt={};return s[3]!==void 0&&(Mt.type=s[3]),s[4]!==void 0&&(Mt.msg=s[4]),et=new Le({props:Mt}),Pt.push(()=>Ft(et,"type",St)),Pt.push(()=>Ft(et,"msg",wt)),{c(){t=c("div"),e=c("header"),r=c("nav"),o=c("button"),_=c("i"),_.textContent=k,d=v(),m=c("menu"),g=c("a"),g.textContent=T,D=v(),F=c("a"),F.textContent=j,b=v(),O=c("a"),O.textContent=it,E=v(),N=c("a"),N.textContent=X,K=v(),z&&z.c(),kt=v(),W=c("div"),Y=v(),l.c(),dt=v(),A=c("button"),C.c(),U=v(),st=c("div"),mt=v(),$=c("h5"),$.innerHTML=pt,R=v(),$t(w.$$.fragment),I=v(),$t(M.$$.fragment),tt=v(),ft=c("main"),H&&H.c(),gt=v(),$t(et.$$.fragment),Nt=v(),at=c("footer"),at.innerHTML=Ct,this.h()},l(L){t=u(L,"DIV",{class:!0});var J=S(t);e=u(J,"HEADER",{class:!0});var yt=S(e);r=u(yt,"NAV",{});var ut=S(r);o=u(ut,"BUTTON",{class:!0});var At=S(o);_=u(At,"I",{"data-svelte-h":!0}),V(_)!=="svelte-pcqr2l"&&(_.textContent=k),d=y(At),m=u(At,"MENU",{class:!0});var Tt=S(m);g=u(Tt,"A",{href:!0,"data-svelte-h":!0}),V(g)!=="svelte-5a0zws"&&(g.textContent=T),D=y(Tt),F=u(Tt,"A",{href:!0,"data-svelte-h":!0}),V(F)!=="svelte-1rrhvjn"&&(F.textContent=j),b=y(Tt),O=u(Tt,"A",{href:!0,"data-svelte-h":!0}),V(O)!=="svelte-caebbr"&&(O.textContent=it),E=y(Tt),N=u(Tt,"A",{href:!0,"data-svelte-h":!0}),V(N)!=="svelte-1kuq42z"&&(N.textContent=X),K=y(Tt),z&&z.l(Tt),Tt.forEach(h),At.forEach(h),kt=y(ut),W=u(ut,"DIV",{class:!0}),S(W).forEach(h),Y=y(ut),l.l(ut),dt=y(ut),A=u(ut,"BUTTON",{class:!0});var Ot=S(A);C.l(Ot),Ot.forEach(h),ut.forEach(h),U=y(yt),st=u(yt,"DIV",{class:!0}),S(st).forEach(h),mt=y(yt),$=u(yt,"H5",{class:!0,"data-svelte-h":!0}),V($)!=="svelte-ezx1wq"&&($.innerHTML=pt),yt.forEach(h),R=y(J),te(w.$$.fragment,J),I=y(J),te(M.$$.fragment,J),tt=y(J),ft=u(J,"MAIN",{class:!0});var Jt=S(ft);H&&H.l(Jt),Jt.forEach(h),gt=y(J),te(et.$$.fragment,J),Nt=y(J),at=u(J,"FOOTER",{class:!0,"data-svelte-h":!0}),V(at)!=="svelte-slb6xx"&&(at.innerHTML=Ct),J.forEach(h),this.h()},h(){p(g,"href","/"),p(F,"href","/courses"),p(O,"href","/professors"),p(N,"href","/scores"),p(m,"class","no-wrap"),p(o,"class","circle transparent"),p(W,"class","max"),p(A,"class","transparent small circle"),p(st,"class","small-space"),p($,"class","small-padding"),p(e,"class","fill"),p(ft,"class","responsive max padding"),p(at,"class","fill fixed padding"),p(t,"class","max")},m(L,J){Q(L,t,J),a(t,e),a(e,r),a(r,o),a(o,_),a(o,d),a(o,m),a(m,g),a(m,D),a(m,F),a(m,b),a(m,O),a(m,E),a(m,N),a(m,K),z&&z.m(m,null),a(r,kt),a(r,W),a(r,Y),l.m(r,null),a(r,dt),a(r,A),C.m(A,null),a(e,U),a(e,st),a(e,mt),a(e,$),a(t,R),ee(w,t,null),a(t,I),ee(M,t,null),a(t,tt),a(t,ft),H&&H.m(ft,null),a(t,gt),ee(et,t,null),a(t,Nt),a(t,at),It=!0,bt||(q=vt(A,"click",s[7]),bt=!0)},p(L,[J]){L[6]?z||(z=Fe(),z.c(),z.m(m,null)):z&&(z.d(1),z=null),n===(n=ot(L))&&l?l.p(L,J):(l.d(1),l=n(L),l&&(l.c(),l.m(r,dt))),f!==(f=i(L))&&(C.d(1),C=f(L),C&&(C.c(),C.m(A,null)));const yt={};!ht&&J&1&&(ht=!0,yt.dialog=L[0],Vt(()=>ht=!1)),w.$set(yt);const ut={};!nt&&J&2&&(nt=!0,ut.dialog=L[1],Vt(()=>nt=!1)),M.$set(ut),H&&H.p&&(!It||J&512)&&Ge(H,G,L,L[9],It?Ze(G,L[9],J,null):We(L[9]),null);const At={};!_t&&J&8&&(_t=!0,At.type=L[3],Vt(()=>_t=!1)),!rt&&J&16&&(rt=!0,At.msg=L[4],Vt(()=>rt=!1)),et.$set(At)},i(L){It||(Gt(w.$$.fragment,L),Gt(M.$$.fragment,L),Gt(H,L),Gt(et.$$.fragment,L),It=!0)},o(L){Wt(w.$$.fragment,L),Wt(M.$$.fragment,L),Wt(H,L),Wt(et.$$.fragment,L),It=!1},d(L){L&&h(t),z&&z.d(),l.d(),C.d(),ne(w),ne(M),H&&H.d(L),ne(et),bt=!1,q()}}}function wn(s,t,e){let r;Yt(s,Kt,A=>e(6,r=A));let{$$slots:o={},$$scope:_}=t,k,d,m,g="",T="",D=localStorage.getItem("theme")=="dark";const F=A=>{localStorage.setItem("theme",A),document.body.className=A},j=()=>{const U=document.body.className==="light"?"dark":"light";e(5,D=U=="dark"),F(U)},b=async()=>{Zt.isLoggedIn().then(A=>{A?(ie(Kt,r=!0,r),e(3,g="primary"),e(4,T="logged in")):ie(Kt,r=!1,r)}).catch(()=>{ie(Kt,r=!1,r)})},O=async()=>{Zt.logout().then(async()=>{await b(),e(3,g="primary"),e(4,T="logged out")}).catch(A=>{e(3,g="error"),e(4,T=A)})};b();const it=()=>{d.showModal()},E=()=>{k.showModal()},N=()=>{O()},X=()=>{e(2,m=!1)},K=()=>{e(2,m=!0)};function kt(A){k=A,e(0,k)}function W(A){d=A,e(1,d)}function Y(A){g=A,e(3,g)}function dt(A){T=A,e(4,T)}return s.$$set=A=>{"$$scope"in A&&e(9,_=A.$$scope)},[k,d,m,g,T,D,r,j,O,_,o,it,E,N,X,K,kt,W,Y,dt]}class On extends ye{constructor(t){super(),ke(this,t,wn,Cn,be,{})}}export{On as component,An as universal};
