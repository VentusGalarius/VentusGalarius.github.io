import{b as r,u as l,r as d,cg as x,j as e,L as u,ag as y,ai as p,bw as m,ci as h,s,v as j,aS as f}from"./index-pFCF53l2.js";const v=s.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`,g=s(j)`
    color: ${t=>t.theme.textSecondary};
    margin-bottom: 1.5rem;
`,B=s.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
`,o=s(f)`
    display: flex;
    gap: 6px;

    > svg {
        color: ${t=>t.theme.buttonTertiaryForeground};
    }
`,_=()=>{const{t}=r(),i=l(),[a,n]=d.useState(!1),{data:c}=x();return e.jsxs(v,{children:[e.jsx(u,{children:t("activity_empty_transaction_title")}),e.jsx(g,{children:t("activity_empty_transaction_caption")}),e.jsxs(B,{children:[e.jsx(y,{children:e.jsxs(o,{size:"small",onClick:()=>n(!0),children:[e.jsx(p,{}),t("exchange_title")]})}),e.jsxs(o,{size:"small",onClick:()=>i.uiEvents.emit("receive",{method:"receive",params:{}}),children:[e.jsx(m,{}),t("wallet_receive")]})]}),e.jsx(h,{buy:c,open:a,handleClose:()=>n(!1)})]})};export{_ as default};
