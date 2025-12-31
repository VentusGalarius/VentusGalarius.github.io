import{an as M,i_ as Pe,dc as ue,dd as U,ga as xe,gs as H,i as P,cq as fe,i$ as z,d9 as me,d7 as he,cs as pe,j0 as je,r as p,gg as ge,b as y,j1 as ze,j as e,d8 as Q,j2 as we,k as X,j3 as ke,aS as v,N as Y,j4 as Ke,bv as Ge,m as $,l as F,co as V,fG as qe,iD as Qe,gd as J,c3 as _e,ge as be,gw as Ae,j5 as Se,dg as W,cC as D,j6 as Xe,eX as Ye,j7 as ye,j8 as Ce,s as x,ck as Te,q as Ne,v as B,cE as ve,fF as Le,j9 as De,fl as Je,ba as Ze,u as K,ag as Ie,em as es,bH as ss,aq as Ee,fw as Re,cA as Fe,H as N,dH as ts,ja as ns,fC as as,fB as rs,fm as os,jb as is,bK as cs,a6 as ds,ik as ls,jc as ae,C as us,jd as xs,je as fs,d3 as ms,dV as hs,cB as G,jf as ps,jg as js,ah as gs,jh as ws,ji as ks,jj as re,hX as _s,gU as bs}from"./index-pFCF53l2.js";import{u as Z}from"./useTonRecipient-ChdT5Nv9.js";import{u as Be,t as As,a as Ss,I as ys}from"./Nfts-BQ9zFWVr.js";function oe(s){return!!s.dns}function I(s){var a;const t=M();return s.sale!==void 0||!Pe(t.rawAddress,(a=s.owner)==null?void 0:a.address)}const Oe=s=>{const t=ue(U),a=xe(t),r=H(),o=P().activeTonWallet.rawAddress;return fe(["estimate-link-nft",s.nftAddress,s.linkToAddress,r,a,o],async()=>{const i=new z(o);return r.estimate(await t(),i.encodeNftLink(s))},{enabled:!!t})},We=s=>{const t=me(),a=H(),r=P(),n=he(),o=r.activeTonWallet.rawAddress;return pe(async()=>{const i=new z(o);return await a.send(await t(U),je,i.encodeNftLink(s)),n("link-dns"),!0})};function $e(s,t){const[a,r]=p.useState(!1),[n,o]=p.useState(!1),[i,c]=p.useState(!1),u=p.useRef(s.data),d=async()=>{const f=await s.refetch();if(i&&r(!1),t(f.data,u.current)){r(!1),o(!0);return}u.current=f.data,setTimeout(d,1e3)};return p.useEffect(()=>()=>c(!0),[]),{isLoading:a,isCompleted:n,data:s.data,refetch:(f=1e4)=>{u.current=s.data,r(!0),c(!1),o(!1),setTimeout(()=>{a&&c(!0)},f),d()}}}const ie=({nft:s})=>{var f;const t=ge(),{t:a}=y(),r=ze(s),{data:n,isLoading:o}=r,i=((f=n==null?void 0:n.wallet)==null?void 0:f.address)||"",{refetch:c,isLoading:u,isCompleted:d}=$e(r,(l,m)=>{var j,h;return!!((j=m==null?void 0:m.wallet)!=null&&j.address)!=!!((h=l==null?void 0:l.wallet)!=null&&h.address)});return p.useEffect(()=>{d&&t(a(i?"dns_address_linked":"dns_address_unlinked"))},[d,i]),i?e.jsx(Rs,{nft:s,linkedAddress:i,isLoading:u,refetch:c}):e.jsx(Ns,{nft:s,isLoading:o||u,refetch:c})},Cs=x(B)`
    cursor: pointer;
    color: ${s=>s.isDisabled?s.theme.textSecondary:s.theme.textAccent};
    pointer-events: ${s=>s.isDisabled?"none":"unset"};
`,Ts=new Te(.02),Ve=_e.fromRelativeAmount({asset:Ne,amount:Ts}),Ns=({nft:s,isLoading:t,refetch:a})=>{const r=Q(),{t:n}=y(),[o,i]=p.useState(),c=M(),[u,d]=p.useState(c.rawAddress),f=S=>{if(o==="wallet")return i("confirm");i(void 0),S?a():d(c.rawAddress)},{recipient:l,isLoading:m}=Z(s.address),{refetch:j,...h}=Oe({nftAddress:s.address,linkToAddress:u}),g=p.useCallback(async S=>{d(S),await j(),i("confirm")},[j,s.address]),w=We({nftAddress:s.address,linkToAddress:u}),C=we(u,c.rawAddress),T=X(),k=()=>e.jsxs(J,{onClose:f,recipient:l,assetAmount:Ve,fitContent:!0,estimation:h,...w,children:[e.jsx(be,{}),e.jsx(Ae,{}),e.jsxs(Se,{children:[e.jsx(W,{hover:!1,children:e.jsxs(D,{children:[e.jsx(Xe,{children:n(C?"dns_current_address":"wallet_address")}),e.jsx(Ye,{right:!0,text:$(F(u,T)),secondary:e.jsx(Cs,{isDisabled:w.isLoading,onClick:()=>i("wallet"),children:n("replace")})})]})}),e.jsx(ye,{}),e.jsx(Ce,{})]})]}),A=p.useCallback(()=>e.jsx(Ds,{onSave:g,isLoading:h.isFetching,domain:s.dns}),[g,h.isFetching]),E=I(s),L=()=>{if(h.error){r(h.error);return}i("confirm")},_=ke(s.dns);return e.jsxs(e.Fragment,{children:[e.jsx(v,{type:"button",size:"large",secondary:!0,fullWidth:!0,disabled:E,loading:h.isFetching||m||t,onClick:L,children:n(_?"nft_link_username_button":"nft_link_domain_button")}),e.jsx(Y,{title:n(o==="wallet"?"wallet_address":"send_screen_steps_comfirm_title"),isOpen:!!o,hideButton:!0,handleClose:()=>f(),backShadow:!0,children:o==="wallet"?A:k})]})},vs=x(ve)`
    color: ${s=>s.theme.textSecondary};
    margin-bottom: 1.5rem;
`,Ls=x(Le)`
    align-items: flex-start;
`,Ds=({onSave:s,isLoading:t,domain:a})=>{const{t:r}=y(),[n,o]=p.useState(""),[i,c]=p.useState(!1),u=p.useMemo(()=>{if(!i)return!0;try{return V.Address.parse(n),!0}catch{return!1}},[i,n]),d=f=>{f.stopPropagation(),f.preventDefault(),c(!0);try{s(V.Address.parse(n).toRawString())}catch(l){console.error(l)}};return e.jsxs(Ls,{onSubmit:d,children:[e.jsx(vs,{children:r("add_dns_address").replace("%1%",a)}),e.jsx(qe,{id:"dns-address",disabled:t,isValid:u,value:n,onChange:o,label:r("wallet_address"),clearButton:!0}),e.jsx(Qe,{}),e.jsx(v,{fullWidth:!0,size:"large",primary:!0,disabled:!n,loading:t,children:"Save"})]})},Es=x(B)`
    text-align: center;
    color: ${s=>s.theme.accentOrange};
`,ce="",Rs=({nft:s,linkedAddress:t,isLoading:a,refetch:r})=>{const n=Q(),{t:o}=y(),i=M(),[c,u]=p.useState(!1),d=A=>{u(!1),A===!0&&r()},{recipient:f,isLoading:l}=Z(s.address),m=Oe({nftAddress:s.address,linkToAddress:ce}),j=We({nftAddress:s.address,linkToAddress:ce}),h=()=>e.jsxs(J,{onClose:d,recipient:f,assetAmount:Ve,fitContent:!0,estimation:m,...j,children:[e.jsx(be,{}),e.jsx(Ae,{}),e.jsxs(Se,{children:[e.jsx(ye,{}),e.jsx(Ce,{})]})]}),g=I(s),w=ke(s.dns),C=()=>{if(m.error){n(m.error);return}u(!0)},T=X(),k=Object.values(Ge(i)?Ke(i.publicKey,T):{}).every(({address:A})=>!we(A.toRawString(),t));return e.jsxs(e.Fragment,{children:[e.jsx(v,{type:"button",size:"large",secondary:!0,fullWidth:!0,disabled:g,loading:m.isFetching||l||a,onClick:C,children:o("nft_unlink_domain_button").replace("{{address}}",$(F(t,T)))}),k&&!a&&e.jsx(Es,{children:o(w?"tme_linked_with_another_address_warn":"dns_linked_with_another_address_warn")}),e.jsx(Y,{title:o("confirm_unlink"),isOpen:c,hideButton:!0,handleClose:()=>d(),backShadow:!0,children:h})]})},Fs=s=>{const t=ue(U),a=xe(t),r=H(),o=P().activeTonWallet.rawAddress;return fe(["estimate-nft-renew",s.nftAddress,r,a,o],async()=>{const i=new z(o);return r.estimate(await t(),i.encodeNftRenew(s))},{enabled:!!t})},Bs=s=>{const t=me(),a=H(),r=P(),n=he(),o=r.activeTonWallet.rawAddress;return pe(async()=>{const i=new z(o);return await a.send(await t(U),je,i.encodeNftRenew(s)),n("renew-dns"),!0})},Os=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Ws=x(v)`
    margin-bottom: 0.75rem;
`,$s=x(B)`
    color: ${s=>s.danger?s.theme.accentRed:s.theme.textSecondary};
`,Vs=_e.fromRelativeAmount({asset:Ne,amount:new Te(.02)}),Ms=1e3*60*60*24*366,Us={year:"numeric",hour:void 0,minute:void 0},Hs=({nft:s})=>{const t=ge(),a=I(s),r=Q(),{t:n,i18n:{language:o}}=y(),i=new Intl.RelativeTimeFormat(Je(o),{style:"long"}),c=De(s),{data:u,isLoading:d}=c,{refetch:f,isLoading:l,isCompleted:m}=$e(c,(_,S)=>!!(_!=null&&_.getTime())&&_.getTime()!==(S==null?void 0:S.getTime()));p.useEffect(()=>{m&&t(n("renew_nft_renewed"))},[m]);const j=Be(Date.now()+Ms,Us),[h,g]=p.useState(!1),w=_=>{g(!1),_&&f()},{recipient:C,isLoading:T}=Z(s.address),k=Fs({nftAddress:s.address}),A=Bs({nftAddress:s.address}),E=()=>{if(k.error){r(k.error);return}g(!0)};if(!d&&!u)return null;const L=As(u);return e.jsxs(e.Fragment,{children:[e.jsxs(Os,{children:[e.jsx(Ws,{type:"button",disabled:a||l,loading:d||k.isFetching||T,onClick:E,size:"large",secondary:!0,fullWidth:!0,children:l?n("renew_nft_in_progress"):n("dns_renew_until_btn").replace("%{untilDate}",j)}),L!==""&&e.jsx($s,{danger:Number(L)<=30,children:n("renew_nft_expiration_date").replace("%1%",i.format(Number(L),"days"))})]}),e.jsx(Y,{isOpen:h,hideButton:!0,handleClose:()=>w,backShadow:!0,children:()=>e.jsx(J,{onClose:w,recipient:C,assetAmount:Vs,fitContent:!0,estimation:k,...A})})]})},de=s=>{const{marketplace:t}=s.metadata,a=V.Address.parse(s.address).toString();switch(t){case"getgems.io":return`https://getgems.io/nft/${a}`;default:return`https://getgems.io/nft/${a}`}},R=({url:s})=>{const{t}=y(),a=K();return e.jsx(Ie,{children:e.jsx(v,{size:"large",secondary:!0,fullWidth:!0,onClick:r=>{r.preventDefault(),r.stopPropagation(),a.openPage(s)},children:t("nft_open_in_marketplace")})})},O=({nftItem:s})=>{var n;const t=K(),{t:a}=y(),r=M();return e.jsxs(e.Fragment,{children:[e.jsx(v,{primary:!0,size:"large",fullWidth:!0,disabled:s.sale!==void 0||((n=s.owner)==null?void 0:n.address)!==r.rawAddress,onClick:o=>{o.preventDefault(),o.stopPropagation(),t.uiEvents.emit("transferNft",{method:"transferNft",params:s})},children:a("nft_transfer_nft")}),s.sale&&e.jsx(zs,{children:a("nft_on_sale_text")})]})},Ps=x(B)`
    width: 100%;
    color: ${s=>s.theme.textSecondary};
`,zs=x(Ps)`
    width: 100%;
    padding: 0 1rem;
    text-align: left;
`,Ks=({kind:s,nftItem:t})=>{var r,n;if(Ze())return e.jsx(e.Fragment,{children:e.jsx(R,{url:de(t)})});switch(s){case"token":return e.jsxs(e.Fragment,{children:[e.jsx(O,{nftItem:t}),e.jsx(R,{url:de(t)})]});case"ton.dns":return e.jsxs(e.Fragment,{children:[e.jsx(O,{nftItem:t}),e.jsx(R,{url:`https://dns.ton.org/#${(r=t.dns)==null?void 0:r.slice(0,-4)}`}),oe(t)&&e.jsxs(e.Fragment,{children:[e.jsx(ie,{nft:t}),e.jsx(Hs,{nft:t})]})]});case"telegram.number":{const o=t.metadata.name.replace(/\s/g,"").slice(1);return e.jsxs(e.Fragment,{children:[e.jsx(O,{nftItem:t}),e.jsx(R,{url:`https://fragment.com/number/${o}`})]})}case"telegram.name":return e.jsxs(e.Fragment,{children:[e.jsx(O,{nftItem:t}),e.jsx(R,{url:`https://fragment.com/username/${(n=t.dns)==null?void 0:n.slice(0,-5)}`}),oe(t)&&e.jsx(ie,{nft:t})]})}},Gs=x.div`
    width: 100%;
`,qs=x.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.625rem;
`,Qs=x(N)`
    cursor: pointer;
    color: ${s=>s.theme.textAccent};
`,q=x(ve)`
    color: ${s=>s.theme.textSecondary};
`,Xs=es.memo(({nftItem:s})=>{var h;const{t}=y(),{data:a}=ss(s.address),{data:r,isLoading:n}=De(s),o=Be(r,{year:"numeric",hour:void 0,minute:void 0}),i=a??s,c=K(),u=Ee(),d=(h=i.owner)==null?void 0:h.address,f=V.Address.parse(i.address).toString(),l=X(),m=u.NFTOnExplorerUrl??"https://tonviewer.com/nft/%s",j=F(f,l,!0);return e.jsxs(Gs,{children:[e.jsxs(qs,{children:[e.jsx(Re,{children:t("nft_details")}),e.jsx(Qs,{onClick:()=>c.openPage(m.replace("%s",f)),children:t("nft_view_in_explorer")})]}),e.jsxs(Fe,{margin:!1,children:[d&&e.jsx(W,{onClick:()=>c.copyToClipboard(F(d,l)),children:e.jsxs(D,{children:[e.jsx(q,{children:t("nft_owner_address")}),e.jsx(N,{children:$(F(d,l))})]})}),!!(r||n)&&e.jsx(W,{hover:!1,children:e.jsxs(D,{children:[e.jsx(q,{children:t("dns_expiration_date")}),r?e.jsx(N,{children:o}):e.jsx(ts,{})]})}),e.jsx(W,{onClick:()=>c.copyToClipboard(j),children:e.jsxs(D,{children:[e.jsx(q,{children:t("nft_contract_address")}),e.jsx(N,{children:$(j)})]})})]})]})}),le=x.div`
    display: flex;
    flex-direction: column;
    padding: 0.875rem 1rem;
`,Ys=x.div`
    border-top: 1px solid ${s=>s.theme.separatorCommon};
`,Js=x(N)`
    margin-bottom: 0.5rem;
`,Zs=x.span`
    position: relative;
    top: 3px;
    margin-left: 4px;
`,Me="0:b774d95eb20543f186c06b371ab88ad704f7e256130caf96189368a7d0cb6ccf",Ue="0:80d78a35f955a14b679faa887ff4cd5bfc0f43b4a4eea2a7e6927f3701b273c2",He="0:0e41dc1dc3c9067ed24248580e12b3359818d83dee0304fabcf80845eafafdb2",Is="0:e1955aba7249f23e4fd2086654a176516d98b134e0df701302677c037c358b17",lt=[Me,He,Ue,Is],et=x(_s)`
    word-break: break-word;

    user-select: none;
`,st=x(bs)`
    color: ${s=>s.theme.textSecondary};
    border: 1px solid ${s=>s.theme.buttonTertiaryBackground};
    border-radius: 6px;
    padding: 3.5px 6px 4.5px;
    text-transform: uppercase;

    position: relative;
    top: -3px;

    white-space: nowrap;
`,tt=x(B)`
    color: ${s=>s.isTrusted?s.theme.textSecondary:s.theme.accentOrange};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`,nt=x.div`
    text-align: center;
`,at=x.div`
    display: flex;
    gap: 8px;
    width: 100%;

    > * {
        flex: 1;
    }
`,rt=x.div`
    .drop-down-container {
        z-index: 100;
        top: calc(100% + 12px);
        right: 0;
    }
`,ot=x(Fe)`
    margin: 0;

    svg {
        color: ${s=>s.theme.accentBlue};
    }
`,ut=({onClose:s,nftItem:t})=>{var ee,se,te,ne;const{mutateAsync:a,isLoading:r}=ns(),{mutate:n,isLoading:o}=as(),{mutateAsync:i}=rs(),{data:c}=os(),u=t.trust!==is.Whitelist,d=!!(c!=null&&c.trustedNfts.includes(((ee=t.collection)==null?void 0:ee.address)||t.address)),f=p.useRef(null),{t:l}=y(),{data:m}=cs(t),{description:j}=t.metadata,h=t.dns??t.metadata.name,g=p.useMemo(()=>{var b;switch((b=t.collection)==null?void 0:b.address){case Me:return"ton.dns";case Ue:return"telegram.name";case He:return"telegram.number";default:return"token"}},[t]),w=(se=t==null?void 0:t.collection)==null?void 0:se.name,C=(te=t.previews)==null?void 0:te.find(b=>b.resolution==="1500x1500"),{isOpen:T,onClose:k,onOpen:A}=ds(),E=b=>{b==="mark_spam"?a(t).then(s):b==="mark_trusted"&&n(t),k()},L=Ee(),_=K(),S=L.NFTOnExplorerUrl??"https://tonviewer.com/nft/%s";return e.jsxs(Le,{children:[s&&e.jsxs(ls,{children:[e.jsx(ae,{onClick:s,children:e.jsx(us,{})}),e.jsxs(nt,{children:[e.jsx(Re,{children:t.dns??t.metadata.name}),u&&e.jsxs(tt,{isTrusted:d,onClick:A,children:[l("suspicious_label_full")," ",e.jsx(xs,{color:d?"textSecondary":"accentOrange"})]})]}),e.jsx(fs,{isOpen:T,onClose:E,isTrusted:d}),e.jsx(rt,{children:e.jsx(ms,{containerClassName:"drop-down-container",payload:b=>e.jsxs(ot,{children:[e.jsx(G,{onClick:()=>{b(),i(t).then(s)},children:e.jsxs(D,{children:[e.jsx(N,{children:l("nft_actions_hide_nft")}),e.jsx(ps,{})]})}),e.jsx(G,{onClick:()=>{b(),a(t).then(s)},children:e.jsxs(D,{children:[e.jsx(N,{children:l("nft_actions_hide_and_report")}),e.jsx(js,{})]})}),e.jsx(G,{onClick:()=>_.openPage(S.replace("%s",t.address)),children:e.jsxs(D,{children:[e.jsx(N,{children:l("nft_actions_view_on_explorer")}),e.jsx(gs,{})]})})]}),children:e.jsx(ae,{children:e.jsx(hs,{})})})})]}),u&&!d&&e.jsxs(at,{children:[e.jsx(v,{warn:!0,type:"button",onClick:()=>a(t).then(s),loading:r,children:l("suspicious_buttons_report")}),e.jsx(v,{type:"button",onClick:()=>n(t),loading:o,children:l("suspicious_buttons_not_spam")})]}),e.jsxs(Ss,{children:[C&&e.jsx(ys,{ref:f,url:C.url}),e.jsxs(le,{children:[e.jsxs(et,{children:[h,t.sale&&e.jsxs(e.Fragment,{children:["  ",e.jsx(st,{children:l("nft_on_sale")})]})]}),w&&e.jsxs(ws,{open:!0,margin:"small",children:[w,t.approvedBy&&t.approvedBy.length>0&&e.jsx(Zs,{children:e.jsx(ks,{})})]}),j&&e.jsx(re,{text:j,margin:"last",contentColor:!0})]}),m&&((ne=m.metadata)==null?void 0:ne.description)&&e.jsxs(e.Fragment,{children:[e.jsx(Ys,{}),e.jsxs(le,{children:[e.jsx(Js,{children:l("nft_about_collection")}),e.jsx(re,{text:m.metadata.description,margin:"last",contentColor:!0})]})]})]}),e.jsx(Ks,{nftItem:t,kind:g}),e.jsx(Xs,{nftItem:t,kind:g})]})};export{lt as K,ut as N};
