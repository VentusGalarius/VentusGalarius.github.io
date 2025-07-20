import{j as e,ag as i,bb as o,N as r,b as n,s as t,L as l}from"./index-pFCF53l2.js";import{b as p,S as c,a as d}from"./SwapRefreshButton-UBzuLqSQ.js";import{d as f}from"./useSwapMobileNotification-BXB33XwE.js";import{E as m,f as u}from"./ErrorBoundary-DlkjD_lW.js";import{H as x}from"./HideForState-DGbvkaW_.js";import"./useSwapAssets--ZQPa-Xu.js";const B=()=>{const[a,s]=f();return e.jsx(i,{children:e.jsx(x,{feature:o.swap,children:e.jsx(m,{fallbackRender:u("Failed to display Swap page"),children:e.jsx(r,{isOpen:a,handleClose:()=>s(!1),title:e.jsx(w,{}),children:()=>e.jsx(S,{})})})})})},j=t.div`
    position: relative;
`,h=t.div`
    display: flex;
`,b=t(l)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5rem;
    right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
`,w=()=>{const{t:a}=n();return e.jsxs(j,{children:[e.jsxs(h,{children:[e.jsx(c,{}),e.jsx(d,{})]}),e.jsx(b,{children:a("wallet_swap")})]})},g=t.div`
    overflow-y: auto;
    min-height: calc(var(--app-height) - 7rem);
`,S=()=>e.jsx(g,{children:e.jsx(p,{})});export{B as default};
