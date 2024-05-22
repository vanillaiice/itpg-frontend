import{a as X}from"../chunks/Snackbar.DbxO-GXt.js";import{s as Y,o as N,e as y,k as v,t as K,c as T,a as Q,l as I,m as P,d as b,b as R,f as V,i as k,g as L,q as ne,h as oe,u as B,E as W}from"../chunks/scheduler.Dgxcbnqg.js";import{S as Z,i as x,b as H,c as A,a as D,m as E,t as $,d as S,e as M,f as re,g as le}from"../chunks/index.BAd-COy6.js";import{T as ee,G as ie}from"../chunks/Table.BEDIcvDl.js";async function ue(){let s=await X.getProfessors();return s==null?{courses:[]}:{courses:s}}const Ce=Object.freeze(Object.defineProperty({__proto__:null,load:ue},Symbol.toStringTag,{value:"Module"}));function fe(s){let e,a,o="<i>arrow_back</i>",r,u,h="Back",f,t,_,c=s[1].name+"",w,m,g,l,i,d,q,G,U,O,F;function te(n){s[7](n)}let J={style:"stripes scroll",opts:s[5]};s[3]!==void 0&&(J.data=s[3]),g=new ee({props:J}),N.push(()=>H(g,"data",te)),g.$on("rowClicked",s[8]);function se(n){s[9](n)}function ae(n){s[10](n)}let j={};return s[2]!==void 0&&(j.dialog=s[2]),s[4]!==void 0&&(j.course=s[4]),d=new ie({props:j}),N.push(()=>H(d,"dialog",se)),N.push(()=>H(d,"course",ae)),{c(){e=y("nav"),a=y("button"),a.innerHTML=o,r=v(),u=y("h6"),u.textContent=h,f=v(),t=y("h3"),_=K("Courses by: "),w=K(c),m=v(),A(g.$$.fragment),i=v(),A(d.$$.fragment),this.h()},l(n){e=T(n,"NAV",{});var p=Q(e);a=T(p,"BUTTON",{class:!0,"data-svelte-h":!0}),I(a)!=="svelte-1igx40d"&&(a.innerHTML=o),r=P(p),u=T(p,"H6",{class:!0,"data-svelte-h":!0}),I(u)!=="svelte-esaipg"&&(u.textContent=h),p.forEach(b),f=P(n),t=T(n,"H3",{});var C=Q(t);_=R(C,"Courses by: "),w=R(C,c),C.forEach(b),m=P(n),D(g.$$.fragment,n),i=P(n),D(d.$$.fragment,n),this.h()},h(){V(a,"class","circle transparent"),V(u,"class","max")},m(n,p){k(n,e,p),L(e,a),L(e,r),L(e,u),k(n,f,p),k(n,t,p),L(t,_),L(t,w),k(n,m,p),E(g,n,p),k(n,i,p),E(d,n,p),U=!0,O||(F=ne(a,"click",s[6]),O=!0)},p(n,[p]){(!U||p&2)&&c!==(c=n[1].name+"")&&oe(w,c);const C={};!l&&p&8&&(l=!0,C.data=n[3],B(()=>l=!1)),g.$set(C);const z={};!q&&p&4&&(q=!0,z.dialog=n[2],B(()=>q=!1)),!G&&p&16&&(G=!0,z.course=n[4],B(()=>G=!1)),d.$set(z)},i(n){U||($(g.$$.fragment,n),$(d.$$.fragment,n),U=!0)},o(n){S(g.$$.fragment,n),S(d.$$.fragment,n),U=!1},d(n){n&&(b(e),b(f),b(t),b(m),b(i)),M(g,n),M(d,n),O=!1,F()}}}function ce(s,e,a){let{data:o={name:{},uuid:{}}}=e,{show:r=!1}=e,u;const h=[{key:"courseCode",title:"Code"},{key:"courseName",title:"Name"},{key:"scoreTeaching",title:"Teaching"},{key:"scoreCoursework",title:"Coursework"},{key:"scoreLearning",title:"Learning"},{key:"scoreAverage",title:"Average"}];var f=[],t={};(async i=>{await X.getScoresByProfessorUUID(i).then(d=>{a(3,f=d??[])}).catch(d=>{console.log(d)})})(o.uuid);const c=()=>{a(0,r=!0)};function w(i){f=i,a(3,f)}const m=i=>{a(4,t=i.detail.data),u.showModal()};function g(i){u=i,a(2,u)}function l(i){t=i,a(4,t)}return s.$$set=i=>{"data"in i&&a(1,o=i.data),"show"in i&&a(0,r=i.show)},[r,o,u,f,t,h,c,w,m,g,l]}class de extends Z{constructor(e){super(),x(this,e,ce,fe,Y,{data:1,show:0})}}function _e(s){let e,a,o,r;function u(t){s[5](t)}function h(t){s[6](t)}let f={};return s[2]!==void 0&&(f.data=s[2]),s[1]!==void 0&&(f.show=s[1]),e=new de({props:f}),N.push(()=>H(e,"data",u)),N.push(()=>H(e,"show",h)),{c(){A(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,_){E(e,t,_),r=!0},p(t,_){const c={};!a&&_&4&&(a=!0,c.data=t[2],B(()=>a=!1)),!o&&_&2&&(o=!0,c.show=t[1],B(()=>o=!1)),e.$set(c)},i(t){r||($(e.$$.fragment,t),r=!0)},o(t){S(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function pe(s){let e,a;return e=new ee({props:{style:"stripes",opts:s[3],data:s[0].courses}}),e.$on("rowClicked",s[4]),{c(){A(e.$$.fragment)},l(o){D(e.$$.fragment,o)},m(o,r){E(e,o,r),a=!0},p(o,r){const u={};r&1&&(u.data=o[0].courses),e.$set(u)},i(o){a||($(e.$$.fragment,o),a=!0)},o(o){S(e.$$.fragment,o),a=!1},d(o){M(e,o)}}}function me(s){let e,a="ITPG - Professors",o,r,u="Last 100 Added Professors 🧑‍🏫",h,f,t,_,c;const w=[pe,_e],m=[];function g(l,i){return l[1]?0:1}return f=g(s),t=m[f]=w[f](s),{c(){e=y("title"),e.textContent=a,o=v(),r=y("h6"),r.textContent=u,h=v(),t.c(),_=W(),this.h()},l(l){e=T(l,"TITLE",{"data-svelte-h":!0}),I(e)!=="svelte-1mdqp4r"&&(e.textContent=a),o=P(l),r=T(l,"H6",{class:!0,"data-svelte-h":!0}),I(r)!=="svelte-d384ne"&&(r.textContent=u),h=P(l),t.l(l),_=W(),this.h()},h(){V(r,"class","center-align")},m(l,i){k(l,e,i),k(l,o,i),k(l,r,i),k(l,h,i),m[f].m(l,i),k(l,_,i),c=!0},p(l,[i]){let d=f;f=g(l),f===d?m[f].p(l,i):(le(),S(m[d],1,1,()=>{m[d]=null}),re(),t=m[f],t?t.p(l,i):(t=m[f]=w[f](l),t.c()),$(t,1),t.m(_.parentNode,_))},i(l){c||($(t),c=!0)},o(l){S(t),c=!1},d(l){l&&(b(e),b(o),b(r),b(h),b(_)),m[f].d(l)}}}function ge(s,e,a){let{data:o={courses:{}}}=e,r=!0;var u={name:{},uuid:{}};const h=[{key:"name",title:"Name"}],f=c=>{a(2,u.uuid=c.detail.data.uuid,u),a(2,u.name=c.detail.data.name,u),a(1,r=!1)};function t(c){u=c,a(2,u)}function _(c){r=c,a(1,r)}return s.$$set=c=>{"data"in c&&a(0,o=c.data)},[o,r,u,h,f,t,_]}class ye extends Z{constructor(e){super(),x(this,e,ge,me,Y,{data:0})}}export{ye as component,Ce as universal};