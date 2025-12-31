import{n as f,s as i,b as h,j as s,H as g,gU as L,v as N,r as m,R as j,c6 as U,gV as y,dg as v,bY as D,e as b,q as w,cA as R,cj as F,bG as _,gW as O,a as P,e$ as E,cm as I,cP as J}from"./index-pFCF53l2.js";import{e as C}from"./useSwapMobileNotification-BXB33XwE.js";const A=i.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 0;
    box-sizing: border-box;
    gap: 1rem;
    width: 100%;

    ${e=>e.theme.proDisplayType==="mobile"&&f`
            padding: 0.5rem 1rem 0.5rem 0;
        `}
`,x=i.img`
    width: 44px;
    height: 44px;
    border-radius: ${e=>e.theme.cornerFull};

    pointer-events: none;

    ${e=>e.theme.proDisplayType==="mobile"&&f`
            width: 40px;
            height: 40px;
        `}
`,M=i.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    white-space: nowrap;
`,q=i.div`
    display: grid;
    grid-template-columns: auto 1fr 0fr;
    gap: 0.25rem;
    width: 100%;
`,G=i(g)`
    text-overflow: ellipsis;
    overflow: hidden;

    display: flex;
    align-items: center;
`,W=i(L)`
    display: inline-block;
    margin-left: 8px;
    padding: 3px 4px;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.displayType==="full-width"?e.theme.backgroundContent:e.theme.backgroundContentAttention};
    color: ${e=>e.theme.textSecondary};
`,z=i.div`
    display: flex;
    justify-content: space-between;
`,S=i(N)`
    color: ${e=>e.theme.textSecondary};
`,H=i(g)`
    color: ${e=>e.theme.textSecondary};
`,V=i.span`
    color: ${e=>e.theme.accentOrange};
`,T=({name:e,symbol:t,balance:r,secondary:n,fiatAmount:c,label:a,rate:o,verification:d})=>{const{t:p}=h();return s.jsxs(M,{children:[s.jsxs(q,{children:[s.jsxs(G,{children:[t??e,a?s.jsx(W,{className:"coin-label",children:a}):null]}),s.jsx(H,{}),s.jsx(g,{children:r})]}),s.jsxs(z,{children:[s.jsx(S,{children:d&&d!=="whitelist"?s.jsx(V,{children:p("approval_unverified_token")}):s.jsxs(s.Fragment,{children:[n," ",s.jsx(K,{data:o})]})}),s.jsx(S,{children:c})]})]})},Y=i.span`
  margin-left: 0.5rem;
  opacity: 0.64;

  ${e=>e.positive?f`
                color: ${e.theme.accentGreen};
            `:f`
                color: ${e.theme.accentRed};
            `}}
`,K=({data:e})=>{if(!e||!e.diff24h||e.diff24h==="0.00%")return null;const t=e.diff24h.startsWith("+");return s.jsx(Y,{positive:t,children:e.diff24h})},Q=i(x)`
    border-radius: unset;
`,X=m.forwardRef(({assetAmount:e,className:t},r)=>{const n=j(),{data:c}=U(),{fiatPrice:a,fiatAmount:o}=y(c,e.relativeAmount);return s.jsx(v,{onClick:()=>n(b.coins+"/"+e.asset.id,{replace:!1}),className:t,ref:r,children:s.jsxs(A,{children:[e.asset.id===D.id?s.jsx(Q,{src:e.image}):s.jsx(x,{src:e.image}),s.jsx(T,{name:e.asset.name,symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:a,fiatAmount:o,label:"TRC20",rate:c})]})})}),Z=m.forwardRef(({balance:e,className:t},r)=>{const{t:n}=h(),c=j(),{data:a}=F(_.TON),{fiatPrice:o,fiatAmount:d}=y(a,e.relativeAmount);return s.jsx(v,{onClick:()=>c(b.coins+"/ton",{replace:!1}),className:t,ref:r,children:s.jsxs(A,{children:[s.jsx(x,{src:"https://wallet.tonkeeper.com/img/toncoin.svg"}),s.jsx(T,{name:n("Toncoin"),symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:o,fiatAmount:d,rate:a})]})})}),B=m.forwardRef(({balance:e,className:t},r)=>O(e.asset)?s.jsx(X,{ref:r,assetAmount:e,className:t}):s.jsx(ee,{ref:r,balance:e,className:t})),ee=m.forwardRef(({balance:e,className:t},r)=>{const{t:n}=h(),c=j(),{fiat:a}=P(),{data:o}=E(),d=m.useMemo(()=>{const l=o==null?void 0:o.balances.find(u=>C(u.jetton.address,e.asset.address));return l!=null&&l.price?I(l.price,a):void 0},[o,a]),{fiatPrice:p,fiatAmount:k}=y(d,e.relativeAmount),$=m.useMemo(()=>{var l;return(l=o==null?void 0:o.balances.find(u=>C(u.jetton.address,e.asset.address)))==null?void 0:l.jetton.verification},[o,a]);return s.jsx(v,{onClick:()=>c(b.coins+`/${encodeURIComponent(J(e.asset.address))}`,{replace:!1}),className:t,ref:r,children:s.jsxs(A,{children:[s.jsx(x,{src:e.asset.image}),s.jsx(T,{name:e.asset.name??n("Unknown_COIN"),verification:$,symbol:e.asset.symbol,balance:e.stringRelativeAmount,secondary:p,fiatAmount:k,rate:d})]})})}),ne=({assets:e})=>{const[t,r]=m.useMemo(()=>[e.find(n=>n.asset.id===w.id),e.filter(n=>n.asset.id!==w.id)],[e]);return s.jsxs(s.Fragment,{children:[s.jsx(R,{noUserSelect:!0,children:s.jsx(Z,{balance:t})}),s.jsx(R,{noUserSelect:!0,children:r.map(n=>s.jsx(B,{balance:n},n.asset.id))})]})};export{B as A,ne as J,Z as T};
