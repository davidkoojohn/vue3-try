import{d as e,r as t,c as o,o as s,a as n,b as r,B as a,_ as u,e as d,f as l,w as i,L as p,g as c,h as f,i as m,j as _,k as h,l as E,m as L}from"./vendor.116f3db4.js";var b=e({name:"App"});let v;b.render=function(e,n,r,a,u,d){const l=t("router-view");return s(),o(l)};const y={},g=function(e,t){if(!t||0===t.length)return e();if(void 0===v){const e=document.createElement("link").relList;v=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if((e=`/ganhuo-vue3/${e}`)in y)return;y[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":v,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},A=[{path:"/",name:"Landing",component:()=>g((()=>import("./Landing.5457ba3c.js")),["assets/Landing.5457ba3c.js","assets/Landing.5ba82b53.css","assets/vendor.116f3db4.js","assets/vendor.072a43cd.css"])},{path:"/ts",name:"TS",component:()=>g((()=>import("./TS.00df23a0.js")),["assets/TS.00df23a0.js","assets/vendor.116f3db4.js","assets/vendor.072a43cd.css"])},{path:"/about",name:"About",component:()=>g((()=>import("./About.02df7b0f.js")),["assets/About.02df7b0f.js","assets/vendor.116f3db4.js","assets/vendor.072a43cd.css"])}],j=n({history:r(),routes:A});const k={},P=m(" Header "),T=m(" Footer ");k.render=function(e,t){const n=_,r=h,a=E,u=p;return s(),o(u,null,{default:i((()=>[c(n,{style:{color:"#fff"}},{default:i((()=>[P])),_:1}),c(r,{style:{"background-color":"#fff"}},{default:i((()=>[f(e.$slots,"default")])),_:3}),c(a,{style:{"border-top":"1px solid #efefef"}},{default:i((()=>[T])),_:1})])),_:3})};let O=L(b);var $;O.use(j),O.component("AppLayout",k),($=O).use(a),$.use(u),$.use(d),$.use(l),O.mount("#app");
