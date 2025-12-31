import{b as L,r as t,jW as E,j as o,fd as w,cz as I,gi as y,jX as h,u as N,N as q,s as S,jY as A}from"./index-pFCF53l2.js";const B=S.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`,R=S(A)`
    margin: 1rem 0;
`,_=S.div`
    margin-top: 1rem;
    display: flex;
    gap: 8px;
    width: 100%;

    > * {
        flex: 1;
    }
`,z=({ledgerParams:e,onClose:u})=>{const{t:c}=L(),[d,n]=t.useState(!1),[l,i]=t.useState(0),{mutateAsync:f,data:a,isLoading:g,isDeviceConnected:r,reset:p}=E(),j=async()=>{try{const C=await f();try{if("tonProof"in e){const x=await C.getAddressProof(e.path,e.tonProof);n(!0),setTimeout(()=>e.onSubmit(x),500);return}const s=[];for(const x of e.transactions){const k=await C.signTransaction(e.path,x);s.push(k),i(v=>v+1)}n(!0),setTimeout(()=>e.onSubmit(s),500)}catch(s){console.error(s),typeof s=="object"&&s&&"message"in s&&s.message.includes("0x6985")?u(new h("Cancel auth request")):u(s)}}catch(C){console.debug(C)}};t.useEffect(()=>{j()},[]);const T=()=>{p(),j()};let m="connect";r&&(m="open-ton"),a&&(m="confirm-tx"),d&&(m="all-completed");const b="transactions"in e?{transactionsToSign:e.transactions.length,signingTransactionIndex:l,action:"transaction"}:{action:"ton-proof"};return o.jsxs(B,{children:[o.jsx(R,{...b,currentStep:m}),o.jsx(w,{children:o.jsx(I,{children:o.jsxs(_,{children:[o.jsx(y,{secondary:!0,onClick:()=>u(new h("Cancel auth request")),children:c("cancel")}),o.jsx(y,{primary:!0,loading:g||!!a||d,onClick:T,children:c("try_again")})]})})})]})},U=()=>{const e=N(),{t:u}=L(),[c,d]=t.useState(void 0),[n,l]=t.useState(void 0),i=t.useCallback(()=>{d(void 0),l(void 0)},[]),f=t.useCallback(r=>{e.uiEvents.emit("response",{method:"response",id:n,params:r}),i()},[e,n,i]),a=t.useCallback(r=>{n&&e.uiEvents.emit("response",{method:"response",id:n,params:r??new Error("Unknown Ledger error")}),i()},[n,e,i]);t.useEffect(()=>{const r=p=>{d(p.params),l(p.id)};return e.uiEvents.on("ledger",r),()=>{e.uiEvents.off("ledger",r)}},[e]);const g=t.useCallback(()=>{if(!(!c||!n))return o.jsx(z,{ledgerParams:{...c,onSubmit:f},onClose:a})},[e,c,n,a,f]);return o.jsx(q,{isOpen:c!=null&&n!=null,handleClose:()=>a(new h("Cancel auth request")),title:u("ledger_connect_header"),children:g})};export{z as LedgerContent,U as default};
