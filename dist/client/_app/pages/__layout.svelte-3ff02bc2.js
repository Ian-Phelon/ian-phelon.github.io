import{_ as te}from"../chunks/preload-helper-ec9aa979.js";import{S as U,i as q,s as F,e as $,t as M,k as z,c as E,a as w,h as B,d as h,m as D,b as o,g as I,F as d,G as j,j as me,l as le,H as C,I as re,J as ae,$ as pe,K as se,L as ge,M as G,w as W,x as J,y as Q,q as N,o as O,B as X,n as Y,p as Z,N as oe,O as K,P as ie,Q as ne,R,T as H,U as ce,V as be,W as we,X as ke,Y as $e,Z as Ee,_ as ye,a0 as xe}from"../chunks/vendor-70cf62c1.js";function ue(v,e,l){const t=v.slice();return t[3]=e[l],t}function fe(v){let e,l,t=(v[3]=="es"?"\u{1F1F2}\u{1F1FD}":"\u{1F1FA}\u{1F1F8}")+"",r,s,a,m;function f(){return v[2](v[3])}return{c(){e=$("button"),l=$("p"),r=M(t),s=z(),this.h()},l(c){e=E(c,"BUTTON",{type:!0,class:!0});var p=w(e);l=E(p,"P",{class:!0});var b=w(l);r=B(b,t),b.forEach(h),s=D(p),p.forEach(h),this.h()},h(){o(l,"class","pr-2 pl-2 pt-1 pb-1"),o(e,"type","button"),o(e,"class","m-1 border-2 border-secondary hover:bottom-5 bg-raised rounded-sm relative bottom-4 left-2")},m(c,p){I(c,e,p),d(e,l),d(l,r),d(e,s),a||(m=j(e,"click",f),a=!0)},p(c,p){v=c,p&1&&t!==(t=(v[3]=="es"?"\u{1F1F2}\u{1F1FD}":"\u{1F1FA}\u{1F1F8}")+"")&&me(r,t)},d(c){c&&h(e),a=!1,m()}}}function Ae(v){let e,l=v[0],t=[];for(let r=0;r<l.length;r+=1)t[r]=fe(ue(v,l,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=le()},l(r){for(let s=0;s<t.length;s+=1)t[s].l(r);e=le()},m(r,s){for(let a=0;a<t.length;a+=1)t[a].m(r,s);I(r,e,s)},p(r,[s]){if(s&3){l=r[0];let a;for(a=0;a<l.length;a+=1){const m=ue(r,l,a);t[a]?t[a].p(m,s):(t[a]=fe(m),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:C,o:C,d(r){re(t,r),r&&h(e)}}}function Le(v,e,l){let t,r;return ae(v,pe,a=>l(0,t=a)),ae(v,se,a=>l(1,r=a)),[t,r,a=>ge(se,r=a,r)]}class he extends U{constructor(e){super();q(this,e,Le,Ae,F,{})}}function de(v,e,l){const t=v.slice();return t[5]=e[l],t[7]=l,t}function Ie(v){let e,l;return{c(){e=$("img"),this.h()},l(t){e=E(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","w-24 absolute pt-2 pl-2"),oe(e.src,l="asdf-mini.svg")||o(e,"src",l),o(e,"alt","Restaurant Logo")},m(t,r){I(t,e,r)},d(t){t&&h(e)}}}function Ve(v){let e,l;return{c(){e=$("img"),this.h()},l(t){e=E(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){o(e,"class","w-72 absolute -top-7 -left-5"),oe(e.src,l="asdf.svg")||o(e,"src",l),o(e,"alt","Restaurant Logo")},m(t,r){I(t,e,r)},d(t){t&&h(e)}}}function ve(v){let e,l,t,r,s,a,m,f,c,p,b,u,x,_,g;return _=new he({}),{c(){e=$("div"),l=$("a"),t=M("Menu"),r=z(),s=$("a"),a=M("Catering"),m=z(),f=$("a"),c=M("About"),p=z(),b=$("a"),u=M("Contact"),x=z(),W(_.$$.fragment),this.h()},l(i){e=E(i,"DIV",{class:!0});var k=w(e);l=E(k,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var L=w(l);t=B(L,"Menu"),L.forEach(h),r=D(k),s=E(k,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var A=w(s);a=B(A,"Catering"),A.forEach(h),m=D(k),f=E(k,"A",{class:!0,href:!0});var n=w(f);c=B(n,"About"),n.forEach(h),p=D(k),b=E(k,"A",{class:!0,href:!0});var y=w(b);u=B(y,"Contact"),y.forEach(h),x=D(k),J(_.$$.fragment,k),k.forEach(h),this.h()},h(){o(l,"class","p-2 hover:underline hover:italic"),o(l,"sveltekit:prefetch",""),o(l,"href","/menu"),o(s,"class","p-2 hover:underline hover:italic"),o(s,"sveltekit:prefetch",""),o(s,"href","/catering"),o(f,"class","p-2 hover:underline hover:italic"),o(f,"href","/#about"),o(b,"class","p-2 hover:underline hover:italic"),o(b,"href","/#contact"),o(e,"class","text-on-primary text-center underline-offset-2 relative top-12 text-lg")},m(i,k){I(i,e,k),d(e,l),d(l,t),d(e,r),d(e,s),d(s,a),d(e,m),d(e,f),d(f,c),d(e,p),d(e,b),d(b,u),d(e,x),Q(_,e,null),g=!0},i(i){g||(N(_.$$.fragment,i),g=!0)},o(i){O(_.$$.fragment,i),g=!1},d(i){i&&h(e),X(_)}}}function ze(v){let e,l,t,r,s,a,m,f,c,p,b=v[2],u=[];for(let _=0;_<b.length;_+=1)u[_]=_e(de(v,b,_));const x=_=>O(u[_],1,1,()=>{u[_]=null});return a=new he({}),{c(){e=$("div"),l=$("div"),t=$("ol");for(let _=0;_<u.length;_+=1)u[_].c();r=z(),s=$("div"),W(a.$$.fragment),this.h()},l(_){e=E(_,"DIV",{class:!0});var g=w(e);l=E(g,"DIV",{class:!0});var i=w(l);t=E(i,"OL",{class:!0});var k=w(t);for(let A=0;A<u.length;A+=1)u[A].l(k);k.forEach(h),i.forEach(h),r=D(g),s=E(g,"DIV",{class:!0});var L=w(s);J(a.$$.fragment,L),L.forEach(h),g.forEach(h),this.h()},h(){o(t,"class","mt-2 flex flex-col flex-auto"),o(l,"class","m-4 mr-10 ml-10 relative top-1/4"),o(s,"class","absolute bottom-4 right-1/3"),o(e,"class","dropdown-area bg-surface bg-opacity-60 text-center svelte-rl9ywn")},m(_,g){I(_,e,g),d(e,l),d(l,t);for(let i=0;i<u.length;i+=1)u[i].m(t,null);d(e,r),d(e,s),Q(a,s,null),f=!0,c||(p=j(e,"click",v[3]),c=!0)},p(_,g){if(g&4){b=_[2];let i;for(i=0;i<b.length;i+=1){const k=de(_,b,i);u[i]?(u[i].p(k,g),N(u[i],1)):(u[i]=_e(k),u[i].c(),N(u[i],1),u[i].m(t,null))}for(Y(),i=b.length;i<u.length;i+=1)x(i);Z()}},i(_){if(!f){for(let g=0;g<b.length;g+=1)N(u[g]);N(a.$$.fragment,_),G(()=>{m||(m=K(e,ne,{duration:1500},!0)),m.run(1)}),f=!0}},o(_){u=u.filter(Boolean);for(let g=0;g<u.length;g+=1)O(u[g]);O(a.$$.fragment,_),m||(m=K(e,ne,{duration:1500},!1)),m.run(0),f=!1},d(_){_&&h(e),re(u,_),X(a),_&&m&&m.end(),c=!1,p()}}}function De(v){let e,l,t,r,s,a,m,f;return{c(){e=$("div"),l=$("button"),t=R("svg"),r=R("title"),s=M("Navigation Menu"),a=R("path"),this.h()},l(c){e=E(c,"DIV",{class:!0});var p=w(e);l=E(p,"BUTTON",{class:!0});var b=w(l);t=H(b,"svg",{class:!0,viewBox:!0,xmlns:!0});var u=w(t);r=H(u,"title",{});var x=w(r);s=B(x,"Navigation Menu"),x.forEach(h),a=H(u,"path",{class:!0,d:!0}),w(a).forEach(h),u.forEach(h),b.forEach(h),p.forEach(h),this.h()},h(){o(a,"class","fill-purew"),o(a,"d","M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"),o(t,"class","h-3 w-3"),o(t,"viewBox","0 0 20 20"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(l,"class","border border-purew rounded bg-tertiary px-3 py-2"),o(e,"class","absolute right-2.5 top-6")},m(c,p){I(c,e,p),d(e,l),d(l,t),d(t,r),d(r,s),d(t,a),m||(f=j(e,"click",v[3]),m=!0)},p:C,i:C,o:C,d(c){c&&h(e),m=!1,f()}}}function Me(v){let e,l,t,r,s,a,m,f,c,p,b;return{c(){e=$("div"),l=$("a"),t=R("svg"),r=R("path"),s=z(),a=$("a"),m=R("svg"),f=R("path"),c=z(),p=$("a"),b=M("Call and Order Now"),this.h()},l(u){e=E(u,"DIV",{class:!0});var x=w(e);l=E(x,"A",{href:!0});var _=w(l);t=H(_,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0});var g=w(t);r=H(g,"path",{d:!0}),w(r).forEach(h),g.forEach(h),_.forEach(h),s=D(x),a=E(x,"A",{href:!0});var i=w(a);m=H(i,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0});var k=w(m);f=H(k,"path",{d:!0}),w(f).forEach(h),k.forEach(h),i.forEach(h),x.forEach(h),c=D(u),p=E(u,"A",{class:!0,href:!0});var L=w(p);b=B(L,"Call and Order Now"),L.forEach(h),this.h()},h(){o(r,"d","M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"),o(t,"class","fill-white hover:-rotate-6 hover:h-9 mr-2 hover:bottom-1.5 relative"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"width","42"),o(t,"height","42"),o(t,"viewBox","0 0 24 24"),o(l,"href","https://www.facebook.com"),o(f,"d","M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"),o(m,"class","fill-white hover:rotate-6 hover:h-9 mr-2 hover:bottom-1.5 relative"),o(m,"xmlns","http://www.w3.org/2000/svg"),o(m,"width","42"),o(m,"height","42"),o(m,"viewBox","0 0 24 24"),o(a,"href","https://www.instagram.com"),o(e,"class","flex flex-row absolute right-1 top-2"),o(p,"class","absolute right-4 -bottom-10 text-on-primary hover:-translate-y-1 hover:text-lg hover:underline"),o(p,"href","tel:123-456-7890")},m(u,x){I(u,e,x),d(e,l),d(l,t),d(t,r),d(e,s),d(e,a),d(a,m),d(m,f),I(u,c,x),I(u,p,x),d(p,b)},p:C,i:C,o:C,d(u){u&&h(e),u&&h(c),u&&h(p)}}}function _e(v){let e,l,t=v[5].name+"",r,s,a,m,f;return{c(){e=$("a"),l=$("li"),r=M(t),a=z(),this.h()},l(c){e=E(c,"A",{"sveltekit:prefetch":!0,href:!0});var p=w(e);l=E(p,"LI",{class:!0});var b=w(l);r=B(b,t),b.forEach(h),a=D(p),p.forEach(h),this.h()},h(){o(l,"class","p-3 m-1 border-2 border-secondary rounded-sm bg-gradient-to-b from-slate-200 to-surface"),o(e,"sveltekit:prefetch",""),o(e,"href",m="/"+v[5].slug)},m(c,p){I(c,e,p),d(e,l),d(l,r),d(e,a),f=!0},p:C,i(c){f||(G(()=>{s||(s=K(l,ie,{x:400,delay:v[7]*200},!0)),s.run(1)}),f=!0)},o(c){s||(s=K(l,ie,{x:400,delay:v[7]*200},!1)),s.run(0),f=!1},d(c){c&&h(e),c&&s&&s.end()}}}function Be(v){let e,l,t,r,s,a,m,f,c,p,b,u;G(v[4]);function x(n,y){return n[0]>=768?Ve:Ie}let _=x(v),g=_(v),i=v[0]>=768&&ve();const k=[Me,De,ze],L=[];function A(n,y){return n[0]>=768?0:!n[1]&&n[0]<768?1:n[1]?2:-1}return~(f=A(v))&&(c=L[f]=k[f](v)),{c(){e=z(),l=$("header"),t=$("div"),r=$("a"),s=$("div"),g.c(),a=z(),i&&i.c(),m=z(),c&&c.c(),this.h()},l(n){e=D(n),l=E(n,"HEADER",{class:!0});var y=w(l);t=E(y,"DIV",{class:!0});var V=w(t);r=E(V,"A",{href:!0});var T=w(r);s=E(T,"DIV",{class:!0});var P=w(s);g.l(P),P.forEach(h),T.forEach(h),a=D(V),i&&i.l(V),m=D(V),c&&c.l(V),V.forEach(h),y.forEach(h),this.h()},h(){o(s,"class","md:relative"),o(r,"href","/#"),o(t,"class","md:relative"),o(l,"class","sticky top-0 bg-primary md:max-w-full md:h-24 h-20")},m(n,y){I(n,e,y),I(n,l,y),d(l,t),d(t,r),d(r,s),g.m(s,null),d(t,a),i&&i.m(t,null),d(t,m),~f&&L[f].m(t,null),p=!0,b||(u=j(window,"resize",v[4]),b=!0)},p(n,[y]){_!==(_=x(n))&&(g.d(1),g=_(n),g&&(g.c(),g.m(s,null))),n[0]>=768?i?y&1&&N(i,1):(i=ve(),i.c(),N(i,1),i.m(t,m)):i&&(Y(),O(i,1,1,()=>{i=null}),Z());let V=f;f=A(n),f===V?~f&&L[f].p(n,y):(c&&(Y(),O(L[V],1,1,()=>{L[V]=null}),Z()),~f?(c=L[f],c?c.p(n,y):(c=L[f]=k[f](n),c.c()),N(c,1),c.m(t,null)):c=null)},i(n){p||(N(i),N(c),p=!0)},o(n){O(i),O(c),p=!1},d(n){n&&h(e),n&&h(l),g.d(),i&&i.d(),~f&&L[f].d(),b=!1,u()}}}function Ne(v,e,l){let t,r=!1;const s=[{name:"About",slug:"#about"},{name:"Contact",slug:"#contact"},{name:"Menu",slug:"menu"},{name:"Catering",slug:"catering"}];function a(){l(1,r=!r)}function m(){l(0,t=window.innerWidth)}return[t,r,s,a,m]}class Oe extends U{constructor(e){super();q(this,e,Ne,Be,F,{})}}function Ce(v){let e,l,t,r,s,a,m,f,c,p,b,u,x,_,g,i,k;e=new Oe({});const L=v[1].default,A=$e(L,v,v[0],null);return{c(){W(e.$$.fragment),l=z(),t=$("main"),A&&A.c(),r=z(),s=$("footer"),a=$("p"),m=M("visit "),f=$("a"),c=M("kit.svelte.dev"),p=M(" to learn SvelteKit!"),b=z(),u=$("p"),x=M("visit "),_=$("a"),g=M("kit.svelte.dev"),i=M(" to learn SvelteKit!"),this.h()},l(n){J(e.$$.fragment,n),l=D(n),t=E(n,"MAIN",{class:!0});var y=w(t);A&&A.l(y),y.forEach(h),r=D(n),s=E(n,"FOOTER",{class:!0});var V=w(s);a=E(V,"P",{class:!0});var T=w(a);m=B(T,"visit "),f=E(T,"A",{class:!0,href:!0});var P=w(f);c=B(P,"kit.svelte.dev"),P.forEach(h),p=B(T," to learn SvelteKit!"),T.forEach(h),b=D(V),u=E(V,"P",{class:!0});var S=w(u);x=B(S,"visit "),_=E(S,"A",{class:!0,href:!0});var ee=w(_);g=B(ee,"kit.svelte.dev"),ee.forEach(h),i=B(S," to learn SvelteKit!"),S.forEach(h),V.forEach(h),this.h()},h(){o(t,"class","bg-surface text-on-surface p-1.5"),o(f,"class","font-bold"),o(f,"href","https://kit.svelte.dev"),o(a,"class","text-on-primary"),o(_,"class","font-bold"),o(_,"href","https://kit.svelte.dev"),o(u,"class","text-on-primary"),o(s,"class","static bg-tertiary min-w-min bottom-0")},m(n,y){Q(e,n,y),I(n,l,y),I(n,t,y),A&&A.m(t,null),I(n,r,y),I(n,s,y),d(s,a),d(a,m),d(a,f),d(f,c),d(a,p),d(s,b),d(s,u),d(u,x),d(u,_),d(_,g),d(u,i),k=!0},p(n,[y]){A&&A.p&&(!k||y&1)&&Ee(A,L,n,n[0],k?xe(L,n[0],y,null):ye(n[0]),null)},i(n){k||(N(e.$$.fragment,n),N(A,n),k=!0)},o(n){O(e.$$.fragment,n),O(A,n),k=!1},d(n){X(e,n),n&&h(l),n&&h(t),A&&A.d(n),n&&h(r),n&&h(s)}}}ce("es",()=>te(()=>import("../chunks/es-01e6edc7.js"),[]));ce("en",()=>te(()=>import("../chunks/en-9a184367.js"),[]));async function Pe({session:v}){return be({fallbackLocale:"en",initialLocale:v.acceptedLanguage||we()}),await ke(),{}}function Te(v,e,l){let{$$slots:t={},$$scope:r}=e;return v.$$set=s=>{"$$scope"in s&&l(0,r=s.$$scope)},[r,t]}class Se extends U{constructor(e){super();q(this,e,Te,Ce,F,{})}}export{Se as default,Pe as load};