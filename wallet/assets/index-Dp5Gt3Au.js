import{j as e,gH as I,gI as L,gJ as P,L as k,B as R,bL as S,s as r,cA as p,dg as v,b as A,a as H,by as $,r as g,fw as E,bn as M,H as O,e as T,gK as f,gL as z,c0 as G,ag as b,dP as J,dQ as w,gM as l,bz as K,gN as N,gO as _,dG as D,dI as F,dJ as j}from"./index-pFCF53l2.js";import{a as Q,b as y,P as X}from"./PromotionsCarousel-C0IWHsiO.js";const q=r.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 1rem;
    gap: 1rem;
`,U=r.button`
    border: none;
    background: transparent;
    height: fit-content;
    width: fit-content;
    color: ${s=>s.theme.textAccent};
    cursor: pointer;
    padding: 4px 8px;
`,V=r.div`
    padding-left: 1rem;
    padding-right: 1rem;
`,u=r(p)`
    width: ${s=>s.width} !important;
    margin-left: ${s=>s.marginLeft} !important;
    margin-bottom: 0;
`,B=r.div`
    margin-left: auto;
    margin-right: 1rem;
    color: ${s=>s.theme.iconTertiary};
    transition: transform 0.15s ease;
`,W=r(v)`
    padding-left: 1rem;

    &:hover ${B} {
        transform: translateX(2px);
    }
`,Y=({category:s,className:t})=>{const{t:a}=A(),{browserLength:d}=H(),[C,{width:oe}]=$(),c=g.useMemo(()=>s.apps.reduce((n,o,i)=>(i%(d??3)===0?n.push([o]):n[n.length-1].push(o),n),[]),[s.apps]),m=g.useMemo(()=>c.map(n=>n.map(o=>o.url).join("")),[c]),h=c.length>1;return e.jsxs("div",{className:t,ref:C,children:[e.jsxs(q,{children:[e.jsx(E,{children:s.title}),h&&e.jsx(M,{to:T.browser+f.category+"/"+s.id,children:e.jsx(U,{children:e.jsx(O,{children:a("browser_apps_all")})})})]}),h?e.jsx(z,{gap:"8px",infinite:!1,children:c.map((n,o)=>e.jsx(u,{children:n.map(i=>e.jsx(x,{item:i},i.url))},m[o]))}):c.map((n,o)=>e.jsx(V,{children:e.jsx(u,{width:"100%",children:n.map(i=>e.jsx(x,{item:i},i.url))},m[o])},m[o]))]})},x=({item:s})=>{const t=Q(s.url,"recommendation");return e.jsx(W,{onClick:t,children:e.jsxs(I,{children:[e.jsx(L,{src:s.icon}),e.jsxs(P,{children:[e.jsx(k,{children:s.name}),e.jsx(R,{children:s.description})]}),e.jsx(B,{children:e.jsx(S,{})})]})},s.url)},Z=()=>{const{id:s}=G(),{data:t}=y(),a=t==null?void 0:t.categories.find(d=>d.id===s);return e.jsxs(b,{children:[e.jsx(J,{title:a==null?void 0:a.title}),e.jsx(w,{children:a?e.jsx(p,{children:a.apps.map(d=>e.jsx(x,{item:d},d.url))}):e.jsxs(p,{children:[e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]})})]})},ee=r(w)`
    padding: 0;
`,se=r(X)`
    margin-bottom: 1rem;
`,te=r(Y)`
    margin-bottom: 1rem;
`,ne=r.div`
    padding: 0 1rem;
`,re=()=>{const{data:s}=y();return K(),e.jsxs(b,{children:[e.jsx(N,{}),e.jsx(ee,{children:s?e.jsxs(e.Fragment,{children:[s.apps.length>0?e.jsx(se,{apps:s.apps}):null,s.categories.map(t=>e.jsx(te,{category:t},t.id))]}):e.jsx(ne,{children:e.jsx(_,{})})})]})},de=()=>{const{path:s}=D();return e.jsxs(F,{children:[e.jsx(j,{path:s+`${f.category}/:id`,component:Z}),e.jsx(j,{path:"*",component:re})]})};export{de as default};
