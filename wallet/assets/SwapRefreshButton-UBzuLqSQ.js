import{u as _e,cq as $e,cO as V,cr as Ye,cs as ce,be as Xe,g8 as et,fm as tt,jZ as st,co as v,cS as Q,j_ as fe,cP as de,an as nt,aq as ot,ck as P,M as at,cQ as rt,j$ as le,k0 as Ie,c8 as it,r as m,dk as ct,c3 as C,q as oe,cT as dt,cU as lt,p as ae,b as S,j as t,aS as b,cl as pe,J as Fe,fG as pt,L as k,s as i,v as Pe,N as ue,t as ut,a as Ne,cf as mt,B as g,bl as Be,dH as me,cn as ht,n as $,d4 as xt,k1 as gt,cW as _,d2 as ee,k2 as ft,c_ as jt,c$ as wt,d0 as yt,d1 as St,cj as Re,ay as I,dK as bt,bE as vt,en as At,k3 as Ct,gV as kt,C as Tt,jd as z,bq as Oe,de as _t,dt as Ee,bk as Le,aW as $t,R as It,bh as Ft,h$ as Pt,e as Nt,bm as Bt,a1 as Me,aj as Rt,k4 as Ot,k5 as Et}from"./index-pFCF53l2.js";import{a as We,u as H,f as q,g as U,h as F,i as J,e as je,j as he,k as xe,p as Ve,d as Lt}from"./useSwapMobileNotification-BXB33XwE.js";import{a as Mt,b as Wt,c as Vt,d as Dt}from"./useSwapAssets--ZQPa-Xu.js";const we={slippagePercent:1,maxPriceImpact:.3},Y=()=>{const e=_e();return $e([V.SWAP_OPTIONS],async()=>{const n=await e.storage.get(V.SWAP_OPTIONS);return{slippagePercent:(n==null?void 0:n.slippagePercent)||we.slippagePercent,maxPriceImpact:(n==null?void 0:n.maxPriceImpact)||we.maxPriceImpact}})},Ht=()=>{const e=_e(),n=Ye();return ce(async s=>{const o=await e.storage.get(V.SWAP_OPTIONS);await e.storage.set(V.SWAP_OPTIONS,{...o,...s}),await n.invalidateQueries([V.SWAP_OPTIONS])})};function qt(){const e=nt(),{swapService:n}=We(),s=ot(),{data:o}=Y(),r=s.web_swaps_referral_address;return ce(a=>{if(!o)throw new Error("SwapOptions query was not resolved yet");return n.encodeSwap({swap:Zt(a),options:{senderAddress:e.rawAddress,slippage:new P(o.slippagePercent).div(100).decimalPlaces(5).toString(),...r&&{referralAddress:v.Address.parse(r).toRawString()},...a.excessAddress&&{excessAddress:a.excessAddress}}})})}function Ut(e={}){const{mutateAsync:n}=qt(),{data:s}=Xe(),{excessAccount:o}=et(),{data:r}=tt(),a=st(),d=async(c,...l)=>({encoded:await n(...l),variant:c});return ce(async c=>{var y,T;const l=[d("external",c)],u=r?r.batterySettings.enabledForSwaps:!0;(e.forceCalculateBattery||s!=null&&s.batteryUnitsBalance.gt(0)&&u)&&l.push(d("battery",{...c,excessAddress:v.Address.parse(o).toRawString()})),Q(c.trade.from.asset.address)||l.push(d("gasless",{...c,excessAddress:v.Address.parse(a.relayAddress).toRawString()}));const p=await Promise.all(l),f=p.find(w=>w.variant==="external").encoded,h={valid_until:(Date.now()+10*60*1e3)/1e3,messages:[{address:v.Address.parse(f.to).toString({bounceable:!0}),amount:f.value,payload:f.body}]},j=(y=p.find(w=>w.variant==="battery"))==null?void 0:y.encoded;j&&(h.messagesVariants={[fe.BATTERY]:{messages:[{address:v.Address.parse(j.to).toString({bounceable:!0}),amount:j.value,payload:j.body}]}});const x=(T=p.find(w=>w.variant==="gasless"))==null?void 0:T.encoded;return x&&(h.messagesVariants||(h.messagesVariants={}),h.messagesVariants[fe.GASLESS]={messages:[{address:v.Address.parse(x.to).toString({bounceable:!0}),amount:x.value,payload:x.body}],options:{asset:de(c.trade.from.asset.address)}}),h})}const Zt=e=>{if(e.provider==="stonfi")return{provider:"stonfi",stonfiTrade:e.trade.rawTrade};if(e.provider==="dedust")return{provider:"dedust",dedustTrade:e.trade.rawTrade};at()},D=new Map,te=["stonfi","dedust"],Gt=Ie([]);let B=0;function N(){const e=rt(),[n,s]=le(Gt),[o]=H(),[r]=q(),[a]=U(),[d,c]=F(),l=J(),{swapService:u}=We(),p=$e({queryKey:[it.swapCalculate,o.id,r.id,a==null?void 0:a.shiftedBy(o.decimals).toFixed(0)],queryFn:async({signal:f})=>{s([]),c(void 0),B=B+1;const h=B;if(l)return[];Se(o),Se(r);const j=ct(a,o.decimals);let x=[];return new Promise((y,T)=>{let w=0;te.forEach(async Z=>{try{const A=u.calculateSwap(ye(o.address),ye(r.address),j.toFixed(0),Z);f&&(f.onabort=()=>A.cancel());const G=await A,X=await zt(G,e,o,r);if(h!==B){T(new Error("Calculation cancelled"));return}const ge=R(X)[0];x=R(x.concat(ge)),x[0].trade&&c(x[0]),s(Je=>R([...Je,ge])),w=w+1,w===te.length&&y(x)}catch(A){if(h!==B){T(new Error("Calculation cancelled"));return}console.error(A);const G={provider:Z,trade:null};x=R(x.concat(G)),x[0].trade&&c(x[0]),s(X=>R([...X,G])),w=w+1,w===te.length&&y(x)}})})},cacheTime:0});return m.useMemo(()=>({...p,fetchedSwaps:n}),[p,n])}const ye=e=>Q(e)?"ton":v.Address.isAddress(e)?e.toRawString():e,re=e=>e==="ton"?"TON":v.Address.parse(e),R=e=>e.slice().sort((n,s)=>n.trade?s.trade?s.trade.to.weiAmount.comparedTo(n.trade.to.weiAmount):-1:1),zt=async(e,n,s,o)=>{const r=await Kt(e.trades,n);if(e.provider==="dedust")return e.trades.length===0?[{provider:"dedust",trade:null}]:e.trades.map(a=>({provider:"dedust",trade:{from:new C({asset:s,weiAmount:a.fromAmount}),to:new C({asset:o,weiAmount:a.toAmount}),path:a.path.map(d=>r.find(c=>je(c.address,re(d)))),blockchainFee:new C({asset:oe,weiAmount:a.blockchainFee}),rawTrade:a.dedustRawTrade}}));if(e.provider==="stonfi"){const a=e.trades[0];return a?[{provider:"stonfi",trade:{from:new C({asset:s,weiAmount:a.fromAmount}),to:new C({asset:o,weiAmount:a.toAmount}),blockchainFee:new C({asset:oe,weiAmount:a.blockchainFee}),rawTrade:a.stonfiRawTrade,path:a.path.map(d=>r.find(c=>je(c.address,re(d))))}}]:[{provider:"stonfi",trade:null}]}return[]},Kt=async(e,n)=>{const s=e.flatMap(o=>o.path.map(re));return Promise.all(s.map(o=>Qt(n,o)))},Se=e=>{D.has(e.address)||D.set(e.address,Promise.resolve(e))},Qt=async(e,n)=>{if(Q(n))return oe;if(D.has(n))return D.get(n);if(v.Address.isAddress(n)){const o=new dt(e.tonApiV2).getJettonInfo({accountId:n.toRawString()}).then(r=>({symbol:r.metadata.symbol,decimals:Number(r.metadata.decimals),name:r.metadata.name,blockchain:ae.TON,address:n,id:lt(ae.TON,n),image:r.preview,verification:r.verification}));return D.set(n,o),o}else throw new Error("Unable to get asset info for extra currency.")},Jt=({onClick:e,isEncodingProcess:n,size:s="medium"})=>{const{t:o}=S(),[r]=U(),[a]=H(),{data:d}=he(),{isFetching:c,data:l}=N(),[u]=F(),p=xe(),{data:f}=Y();return J()?t.jsx(b,{size:s,secondary:!0,disabled:!0,children:o("swap_enter_amount")}):!c&&(l!=null&&l.every(y=>!y.trade))?t.jsx(b,{size:s,disabled:!0,children:o("swap_trade_is_not_available")}):c&&!(u!=null&&u.trade)||!d||p===void 0||!f?t.jsx(b,{size:s,secondary:!0,loading:!0,children:o("continue")}):!u||!u.trade?t.jsx(b,{size:s,secondary:!0,disabled:!0,children:o("swap_trade_is_not_available")}):(r==null?void 0:r.gt(pe(d,a.decimals)))?t.jsx(b,{size:s,secondary:!0,disabled:!0,children:o("swap_not_enough_funds")}):(p==null?void 0:p.gt(f.maxPriceImpact))?t.jsx(b,{size:s,secondary:!0,disabled:!0,children:o("swap_price_impact_too_high")}):t.jsx(b,{size:s,primary:!0,onClick:e,loading:n,children:o("continue")})},Yt=m.forwardRef(({className:e,isDisabled:n},s)=>{const{t:o}=S(),[r,a]=Mt(),d=Fe();return t.jsx(pt,{id:"swap-search",value:r,onChange:c=>a(c),ref:s,disabled:n,label:o("swap_search"),clearButton:!0,className:e,size:"small",autoFocus:d==="swap_widget_web"?100:"notification"})}),Xt=i.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`,es=i(Pe)`
    display: block;
    margin-top: 4px;
    color: ${e=>e.theme.textSecondary};
`,ts=i.div`
    width: 100%;
    display: flex;
    gap: 8px;
    margin-top: 24px;

    > * {
        flex: 1;
    }
`,ss=i(ue)`
    ${e=>e.theme.displayType==="full-width"&&"max-width: 400px;"}
`,ns=({isOpen:e,onClose:n,tokenSymbol:s})=>{const{t:o}=S();return t.jsx(t.Fragment,{children:t.jsx(ss,{isOpen:e,handleClose:n,children:()=>t.jsxs(Xt,{children:[t.jsx(k,{children:o("swap_import_token_title").replace("%token%",s)}),t.jsx(es,{children:o("swap_unknown_token_description")}),t.jsxs(ts,{children:[t.jsx(b,{primary:!0,onClick:()=>n(!1),children:o("cancel")}),t.jsx(b,{secondary:!0,onClick:()=>n(!0),children:o("swap_import")})]})]})})})},os=i.div`
    overflow-y: auto;
    width: calc(100% + 2rem);
    margin: 0 -1rem;
    height: calc(100% - 54px);

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`,as=i.div`
    width: 100%;
    height: 1px;
    background-color: ${e=>e.theme.separatorCommon};
`,rs=({walletSwapAssets:e,onSelect:n})=>{const[s,o]=m.useState(e.slice(0,25)),r=m.useRef(null);m.useEffect(()=>{o(e.slice(0,25))},[e]);const a=()=>{if(!(r!=null&&r.current))return;r.current.scrollHeight-r.current.clientHeight-r.current.scrollTop<300&&o(c=>e.slice(0,c.length+25))};return t.jsx(os,{ref:r,onScroll:ut(a,100),children:e.length?s.map((d,c)=>t.jsxs(m.Fragment,{children:[t.jsx(He,{onClick:()=>n(d.assetAmount.asset),swapAsset:d}),c!==e.length-1&&t.jsx(as,{})]},d.assetAmount.asset.id)):t.jsx(is,{onSelect:n})})},be=i.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e=>e.theme.textSecondary};
`,is=({onSelect:e})=>{const{t:n}=S(),{data:s,isFetching:o}=Wt(),[r,a]=m.useState(!1),{mutate:d}=Vt();if(o)return t.jsx(be,{children:t.jsx(me,{})});if(!s)return t.jsx(be,{children:t.jsx(Pe,{children:n("swap_tokens_not_found")})});const c=l=>{a(!1),l&&(d(s.assetAmount.asset),e(s.assetAmount.asset))};return t.jsxs(t.Fragment,{children:[t.jsx(ns,{isOpen:r,onClose:c,tokenSymbol:s.assetAmount.asset.symbol}),t.jsx(He,{onClick:()=>a(!0),swapAsset:s})]})},cs=i.button`
    border: none;
    width: 100%;
    padding: 8px 1rem;
    display: flex;
    gap: 12px;
    background-color: transparent;

    transition: background-color 0.15s ease-in-out;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${e=>e.theme.backgroundContent};
    }
`,ds=i.img`
    height: 40px;
    width: 40px;
    border-radius: 100%;
`,ls=i.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 52px);
`,De=i.div`
    display: flex;
    align-items: center;
    gap: 4px;

    > *:first-child {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    > ${k} {
        color: ${e=>e.theme.textPrimary};
    }

    > *:nth-child(3) {
        margin-left: auto;
    }
`,ps=i(ht)`
    &:hover {
        > svg {
            color: ${e=>e.theme.iconSecondary};
        }
    }
`,us=i(De)`
    color: ${e=>e.theme.textSecondary};

    > *:nth-child(2) {
        margin-left: auto;
    }
`,ms=i(k)`
    color: ${e=>e.isZero?e.theme.textTertiary:e.theme.textPrimary};
`,He=({swapAsset:e,onClick:n})=>{const s=e.assetAmount.relativeAmount.isZero(),{fiat:o}=Ne(),r=Fe();let a;Q(e.assetAmount.asset.address)?a="https://tonviewer.com/price":a=`https://tonviewer.com/${e.assetAmount.asset.address.toString({urlSafe:!0})}`;const d=c=>{c.stopPropagation()};return t.jsxs(cs,{onClick:n,children:[t.jsx(ds,{src:e.assetAmount.asset.image}),t.jsxs(ls,{children:[t.jsxs(De,{children:[t.jsx(k,{children:e.assetAmount.asset.symbol}),r==="swap_widget_web"?t.jsx("div",{}):t.jsx(ps,{href:a,onClick:d,children:t.jsx(mt,{})}),t.jsx(ms,{isZero:s,children:e.assetAmount.stringRelativeAmount})]}),t.jsxs(us,{children:[t.jsx(g,{children:e.assetAmount.asset.name}),!s&&t.jsx(g,{children:Be(o,e.fiatAmount)})]})]})]})},qe=Ie(void 0),hs=e=>{const[n,s]=le(qe);return m.useCallback(()=>s(()=>({onClose:e})),[s,e])},xs=i(ue)`
    padding-bottom: 0;
`,gs=()=>{const{t:e}=S(),[n,s]=le(qe),o=r=>{n==null||n.onClose(r),s(void 0)};return t.jsx(t.Fragment,{children:t.jsx(xs,{isOpen:!!n,handleClose:()=>o(void 0),title:e("swap_tokens"),footer:t.jsx("div",{}),mobileFullScreen:!0,children:()=>t.jsx(Ss,{onSelect:o})})})},fs=i(Yt)`
    margin-bottom: 1rem;
`,js=i.div`
    ${e=>e.theme.proDisplayType==="desktop"?$`
                  height: 580px;
              `:e.theme.proDisplayType==="mobile"?$`
                  height: calc(var(--app-height) - env(safe-area-inset-bottom));
              `:$`
                  height: calc(var(--app-height) - 8rem);
              `}
`,ws=i.div`
    width: calc(100% + 2rem);
    margin: 0 -1rem;
    height: 1px;
    background-color: ${e=>e.theme.separatorCommon};
`,ys=i.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
`,Ss=({onSelect:e})=>{const n=Dt();return t.jsxs(js,{children:[t.jsx(fs,{isDisabled:!n}),t.jsx(ws,{}),n?t.jsx(rs,{onSelect:e,walletSwapAssets:n}):t.jsx(ys,{children:t.jsx(me,{})})]})},Ue=i(k)`
    display: block;
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 0;
    color: ${e=>e.theme.textPrimary};

    transition: color 0.15s ease-in-out;
`,bs=i.button`
    border: none;
    display: flex;
    align-items: center;
    background: none;
    padding: 0;
    cursor: pointer;
    gap: 6px;
    height: 36px;
    width: fit-content;

    &:hover {
        > ${Ue} {
            color: ${e=>e.theme.textSecondary};
        }
    }
`,vs=i.img`
    height: 24px;
    width: 24px;
    border-radius: 100%;
    flex-shrink: 0;
`,Ze=({token:e,onTokenChange:n,className:s})=>{const o=m.useCallback(a=>a&&n(a),[n]),r=hs(o);return t.jsxs(bs,{className:s,onClick:r,children:[t.jsx(vs,{src:e.image}),t.jsx(Ue,{children:e.symbol}),t.jsx(xt,{})]})},As=i.input`
    border: none;
    background: none;
    text-align: right;
    outline: none;
    width: 30px;
    color: ${e=>e.isErrored?e.theme.accentRed:e.theme.textPrimary};
    font-family: inherit;

    ${gt}

    &::placeholder {
        color: ${e=>e.theme.textTertiary};
    }
`,Cs=({value:e,onChange:n,decimals:s,className:o,isErrored:r})=>{const[a,d]=m.useState(""),c=u=>{let p=jt(u);if(!p){d(""),n(void 0);return}if(wt(p,s)&&yt(p)){if(!p.endsWith(_())){const f=new P(ee(p).replace(_(),".")),h=new P(ee(a).replace(_(),"."));f.eq(h)||(n(f),p=St(p))}d(p)}};m.useEffect(()=>{if(!e)d("");else if(!a.endsWith(_()))try{new P(ee(a).replace(_(),".")).eq(e)||d(ft(e))}catch{}},[e]);const l=_();return t.jsx(As,{id:"swap-amount",value:a,onChange:u=>c(u.target.value),placeholder:`0${l}00`,className:o,isErrored:r,inputMode:"decimal"})},ks=i(g)`
    color: ${e=>e.theme.textSecondary};
    cursor: default;
`,Ge=({amount:e,asset:n})=>{const{fiat:s}=Ne(),{data:o,isLoading:r}=Re(de(n.address));if(!e)return t.jsx("div",{});if(!r&&!(o!=null&&o.prices))return t.jsx("div",{});if(r)return t.jsx(I,{width:"80px",height:"12px",margin:"2px 0"});const a=Be(s,new P(o.prices).multipliedBy(e));return t.jsxs(ks,{children:["≈ ",a]})},ve=i(g)`
    color: ${e=>e.theme.textSecondary};
`,Ts=i.div`
    display: flex;
    height: 16px;
    align-items: center;
`,_s=i.button`
    border: none;
    background: none;
    color: ${e=>e.theme.accentBlue};
    height: fit-content;
    margin-left: 0.5rem;

    > * {
        display: block;
        height: fit-content;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`,$s=()=>{const[e,n]=U(),[s]=H(),{data:o}=he();return t.jsx(ze,{balance:o,decimals:s.decimals,onMax:()=>n(pe(o,s.decimals))})},Is=()=>{const[e]=q(),n=bt({address:e.address,blockchain:ae.TON});return t.jsx(ze,{balance:n,decimals:e.decimals})},ze=({balance:e,decimals:n=0,onMax:s})=>{const{t:o}=S(),r=vt();return t.jsxs(Ts,{children:[t.jsxs(ve,{children:[o("swap_balance"),": "]}),e?t.jsx(ve,{children:r(e,n)}):t.jsx(I,{width:"80px",height:"12px",margin:"2px 0"}),s&&t.jsx(_s,{disabled:!e||e.isZero(),onClick:s,children:t.jsx(At,{children:o("swap_max")})})]})},Fs=i.div`
    position: relative;
    background: ${e=>e.theme.backgroundContent};
    border-radius: ${e=>e.theme.displayType==="full-width"?e.theme.corner2xSmall:e.theme.cornerSmall};
    padding: 6px 12px;
`,Ps=i.div`
    color: ${e=>e.theme.textSecondary};
    gap: 8px;
    display: flex;

    padding: 4px 0;

    > *:first-child {
        margin-right: auto;
    }

    > * {
        cursor: default;
    }
`,Ns=i.div`
    display: flex;
    gap: 8px;
    padding: 6px 0;
`,Bs=i.div`
    display: flex;
    gap: 8px;
    padding: 4px 0;
    align-items: center;
    height: 16px;

    > * {
        margin-left: auto;
    }
`,Rs=i(Ze)`
    flex-shrink: 0;
`,Os=i(Cs)`
    flex: 1;
`,Es=({children:e})=>{const{t:n}=S(),[s,o]=U(),[r,a]=H(),{data:d}=he();return t.jsxs(Fs,{children:[t.jsxs(Ps,{children:[t.jsx(g,{children:n("swap_send")}),t.jsx($s,{})]}),t.jsxs(Ns,{children:[t.jsx(Rs,{token:r,onTokenChange:a}),t.jsx(Os,{value:s,onChange:Ct(o),decimals:r.decimals,isErrored:!!d&&!!s&&s.gt(pe(d,r.decimals))})]}),t.jsx(Bs,{children:t.jsx(Ge,{amount:s,asset:r})}),e]})},Ls=i.div`
    padding: 0 12px 12px;
    background: ${e=>e.theme.backgroundContent};
    border-radius: ${e=>e.theme.displayType==="full-width"?e.theme.corner2xSmall:e.theme.cornerSmall};
    height: fit-content;
`,Ms=i.div`
    color: ${e=>e.theme.textSecondary};
    padding: 10px 0;
    display: flex;
    align-items: center;
    > * {
        cursor: default;
    }
`,Ws=()=>{const{t:e}=S();return J()?t.jsx("div",{}):t.jsxs(Ls,{children:[t.jsx(Ms,{children:t.jsx(g,{children:e("swap_provider")})}),t.jsx(Ae,{provider:"stonfi"}),t.jsx(Ae,{provider:"dedust"})]})},Vs=i.div`
    height: 56px;
    border-radius: ${e=>e.theme.displayType==="full-width"?e.theme.corner2xSmall:e.theme.cornerSmall};
    border: 1px solid ${e=>e.isActive?e.theme.accentBlue:e.theme.separatorCommon};
    padding: 0 12px;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};

    transition: border-color 0.15s ease-in-out;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`,Ds=i.img`
    width: 24px;
    height: 24px;
    border-radius: 6px;
`,Hs=i.div`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
`,qs=i.div`
    padding: 10px 0;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,se=i(g)`
    color: ${e=>e.theme.textSecondary};
`,Us={stonfi:{imageUrl:"https://wallet.tonkeeper.com/img/swap/stonfi.png",label:"STON.fi"},dedust:{imageUrl:"https://wallet.tonkeeper.com/img/swap/dedust.png",label:"DeDust"}},Ae=({provider:e})=>{const{t:n}=S(),[s,o]=F(),r=(s==null?void 0:s.provider)===e,{fetchedSwaps:a,isFetching:d}=N(),c=a.find(y=>y.provider===e),l=c==null?void 0:c.trade,[u]=q(),{data:p,isFetching:f}=Re(de(u.address)),h=a.findIndex(y=>y.provider===e)===0&&!!(c!=null&&c.trade),j=Us[e],{fiatAmount:x}=kt(p,(l==null?void 0:l.to.relativeAmount)||new P(0));return t.jsxs(Vs,{isDisabled:!c||!l,isActive:r,onClick:()=>c&&l&&o(c),children:[t.jsx(Ds,{src:j.imageUrl}),t.jsxs(Hs,{children:[t.jsx(k,{children:j.label}),h&&t.jsx(se,{children:n("swap_best_price")})]}),t.jsx(qs,{children:!d&&!l?t.jsx(se,{children:n("swap_trade_is_not_available")}):t.jsxs(t.Fragment,{children:[l?t.jsx(k,{children:l.to.stringAssetRelativeAmount}):t.jsx(I,{width:"60px",height:"14px",margin:"3px 0"}),p&&l?t.jsxs(se,{children:["≈ ",x]}):f?t.jsx(I,{width:"60px",height:"12px",margin:"2px 0"}):t.jsx("div",{})]})})]})},Ke=i.div`
    transform: translateY(-100%);
    visibility: hidden;
    transition: transform ${e=>e.$transitionMS}ms ease-in-out,
        visibility ${e=>e.$transitionMS}ms ease-in-out;
`,Zs=i.div`
    display: grid;
    grid-template-rows: ${e=>e.$isOpened?"1fr":"0fr"};
    overflow: ${e=>e.$animationCompleted&&e.$isOpened?"visible":"hidden"};
    transition: grid-template-rows ${e=>e.$transitionMS}ms ease-in-out;

    ${Ke} {
        ${e=>e.$isOpened&&$`
                transform: translateY(0);
                visibility: visible;
            `}
    }
`,Gs=i.div`
    min-height: 0;
    min-width: 0;
`,zs=({children:e,isOpened:n,transitionMS:s=200})=>{const[o,r]=m.useState(!1),a=m.useRef();return m.useEffect(()=>{clearTimeout(a.current),n?a.current=setTimeout(()=>r(!0),200):r(!1)},[n]),t.jsx(Zs,{$animationCompleted:o,$isOpened:n,$transitionMS:s,children:t.jsx(Gs,{children:t.jsx(Ke,{$transitionMS:s,children:e})})})},Ks=i.div``,Qs=i.div`
    cursor: pointer;
    padding: 4px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${e=>e.theme.textSecondary};

    svg {
        color: ${e=>e.theme.textSecondary};
    }
`,Js=i(Ee)`
    transform: ${e=>e.isOpened?"rotate(180deg)":"rotate(0deg)"};
    transition: transform 0.2s ease-in-out;
    border: none;
`,O=i.div`
    position: relative;
    display: flex;
    padding: 4px 0;
    gap: 6px;
    align-items: center;

    > * {
        cursor: default;
    }
`,W=i.div`
    pointer-events: none;
    transform: translate3d(0, -10px, 0);
    z-index: 100;
    left: 0;
    right: 0;
    transition: all 0.15s ease-in-out;
    opacity: 0;
    position: absolute;
    background-color: ${e=>e.theme.backgroundContentTint};
    padding: 8px 12px;
    ${Oe};
    ${_t};

    ${e=>e.placement==="top"?$`
                  transform: translate3d(0, 10px, 0);
                  bottom: 30px;
              `:$`
                  transform: translate3d(0, -10px, 0);
                  top: 30px;
              `}
`,K=i.div`
    cursor: pointer;

    &:hover + ${W} {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`,E=i(g)`
    color: ${e=>e.theme.textSecondary};
`,L=i(g)`
    margin-left: auto;
`,M=()=>t.jsx(I,{width:"60px",height:"12px",margin:"2px 0"}),Ys=i(g)`
    color: ${e=>e.status==="low"?e.theme.accentGreen:e.status==="medium"||e.status==="unknown"?e.theme.accentOrange:e.theme.accentRed};
`,Ce=()=>{const{t:e}=S(),[n,s]=m.useState(!1),{isFetching:o}=N(),[r]=F(),a=xe(),{data:d}=Y(),c=J(),l=r==null?void 0:r.trade;if(!o&&!l||c)return null;const u=()=>{s(p=>!p)};return t.jsxs(Ks,{children:[t.jsxs(Qs,{onClick:u,children:[t.jsx(g,{children:e("swap_tx_info")}),t.jsx(Js,{transparent:!0,isOpened:n,children:t.jsx(Tt,{})})]}),t.jsxs(zs,{isOpened:n,children:[t.jsxs(O,{children:[t.jsx(E,{children:e("swap_price_impact")}),t.jsx(K,{children:t.jsx(z,{})}),t.jsx(W,{placement:"top",children:e("swap_price_impact_tooltip")}),t.jsx(L,{children:a===void 0||!l?t.jsx(M,{}):t.jsx(Ys,{status:Ve(a),children:a?t.jsxs(t.Fragment,{children:["≈ ",`${a.multipliedBy(100).decimalPlaces(2).toString().replace(".",_()).replace("-","+")}%`]}):e("swap_unknown_price_impact")})})]}),t.jsxs(O,{children:[t.jsx(E,{children:e("swap_minimum_received")}),t.jsx(K,{children:t.jsx(z,{})}),t.jsx(W,{placement:"top",children:e("swap_minimum_received_tooltip")}),t.jsx(L,{children:!l||!d?t.jsx(M,{}):t.jsxs(g,{children:["≈ ",new C({weiAmount:l.to.weiAmount.multipliedBy(100-d.slippagePercent).div(100),asset:l.to.asset}).stringAssetRelativeAmount]})})]}),t.jsxs(O,{children:[t.jsx(E,{children:e("swap_slippage")}),t.jsx(K,{children:t.jsx(z,{})}),t.jsx(W,{placement:"top",children:e("swap_slippage_tooltip")}),t.jsx(L,{children:!l||!d?t.jsx(M,{}):t.jsxs(g,{children:[d.slippagePercent,"%"]})})]}),t.jsxs(O,{children:[t.jsx(E,{children:e("swap_blockchain_fee")}),t.jsx(K,{children:t.jsx(z,{})}),t.jsx(W,{placement:"top",children:e("swap_blockchain_fee_tooltip")}),t.jsx(L,{children:l?t.jsxs(g,{children:["≈ ",l.blockchainFee.stringAssetRelativeAmount]}):t.jsx(M,{})})]}),t.jsxs(O,{children:[t.jsx(E,{children:e("swap_route")}),t.jsx(L,{children:l?t.jsx(g,{children:l.path.map(p=>p.symbol).join(" → ")}):t.jsx(M,{})})]})]})]})},Xs=i(g)`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${e=>e.impact==="medium"?e.theme.accentOrange:e.impact==="high"?e.theme.accentRed:e.theme.textSecondary};
    cursor: pointer;
    transition: color 0.15s ease-in-out;

    &:hover {
        ${e=>e.impact!=="medium"&&e.impact!=="high"&&$`
                color: ${e.theme.textPrimary};
            `};
    }
`,en=()=>t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.18144 1.65C4.63413 0.86592 4.86047 0.473881 5.11842 0.286474C5.64415 -0.0954914 6.35604 -0.0954914 6.88177 0.286474C7.13971 0.473881 7.36606 0.86592 7.81875 1.65L11.1096 7.35L11.1097 7.35001C11.5623 8.13408 11.7887 8.52612 11.822 8.84321C11.8899 9.48949 11.534 10.106 10.9403 10.3703C10.6491 10.5 10.1964 10.5 9.29099 10.5H2.7092C1.80382 10.5 1.35113 10.5 1.05986 10.3703C0.466204 10.106 0.110258 9.48949 0.178184 8.84321C0.211512 8.52612 0.437856 8.13408 0.890544 7.35L4.18144 1.65ZM5.1001 8.1C5.1001 7.60294 5.50304 7.2 6.0001 7.2C6.49715 7.2 6.9001 7.60294 6.9001 8.1C6.9001 8.59706 6.49715 9 6.0001 9C5.50304 9 5.1001 8.59706 5.1001 8.1ZM6.00002 2C5.53718 2 5.16822 2.38674 5.18997 2.84906L5.31946 5.60072C5.33656 5.96414 5.63619 6.25 6.00002 6.25C6.36384 6.25 6.66347 5.96414 6.68057 5.60072L6.81006 2.84906C6.83182 2.38674 6.46285 2 6.00002 2Z",fill:"currentColor"})}),tn=()=>{const[e,n]=m.useState("from"),[s]=F(),{isFetching:o}=N(),r=xe(),a=o&&!(s!=null&&s.trade)||r===void 0;if(!o&&!(s!=null&&s.trade))return null;if(a)return t.jsx(I,{width:"100px",height:"12px",margin:"2px 0"});const c=s.trade,l=e==="from"?c.from:c.to,u=e==="from"?c.to:c.from;if(l.relativeAmount.isZero())return null;const p=u.relativeAmount.div(l.relativeAmount),f=C.fromRelativeAmount({amount:p,asset:u.asset}),h=Ve(r);return t.jsxs(Xs,{impact:h,onClick:()=>n(j=>j==="from"?"to":"from"),children:["1 ",l.asset.symbol," ≈ ",f.stringAssetRelativeAmount,(h==="medium"||h==="high")&&t.jsx(en,{})]})},ke=i.div`
    background: ${e=>e.theme.backgroundContent};
    border-radius: ${e=>e.theme.displayType==="full-width"?e.theme.corner2xSmall:e.theme.cornerSmall};
    padding: 6px 12px;

    &:empty {
        display: none;
    }
`,sn=i.div`
    color: ${e=>e.theme.textSecondary};
    gap: 8px;
    display: flex;

    padding: 4px 0;

    > *:first-child {
        margin-right: auto;
    }

    > * {
        cursor: default;
    }
`,nn=i.div`
    display: flex;
    gap: 8px;
    padding: 6px 0;
`,on=i.div`
    margin-left: auto;
    overflow: auto;

    cursor: default;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`,an=i.div`
    display: flex;
    gap: 8px;
    padding: 4px 0;
    align-items: center;
    height: 16px;

    > :last-child {
        margin-left: auto;
    }
`,rn=i(Ze)`
    flex-shrink: 0;
`,cn=i(Le)`
    color: ${e=>e.theme.textTertiary};
`,dn=({separateInfo:e})=>{var d;const{t:n}=S(),[s,o]=q(),{isFetching:r}=N(),[a]=F();return t.jsxs(t.Fragment,{children:[t.jsxs(ke,{children:[t.jsxs(sn,{children:[t.jsx(g,{children:n("swap_receive")}),t.jsx(Is,{})]}),t.jsxs(nn,{children:[t.jsx(rn,{token:s,onTokenChange:o}),t.jsx(on,{children:!(a!=null&&a.trade)&&r?t.jsx(I,{width:"100px",height:"28px",margin:"4px 0"}):a!=null&&a.trade?t.jsx(Le,{children:a.trade.to.stringRelativeAmount}):t.jsx(cn,{children:"0"})})]}),t.jsxs(an,{children:[t.jsx(tn,{}),t.jsx(Ge,{amount:(d=a==null?void 0:a.trade)==null?void 0:d.to.relativeAmount,asset:s})]}),!e&&t.jsx(Ce,{})]}),e&&t.jsx(ke,{children:t.jsx(Ce,{})})]})},ln=i.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`,pn=i(Ee)`
    height: 32px;
    width: 32px;
    position: absolute;
    right: calc(50% - 16px);
    bottom: -20px;
    border: none;

    background-color: ${e=>e.theme.buttonTertiaryBackground};

    > svg {
        transition: color 0.15s ease-in-out;
    }

    &:hover {
        background-color: ${e=>e.theme.buttonTertiaryBackgroundHighlighted};
        > svg {
            color: ${e=>e.theme.iconPrimary};
        }
    }
`,An=({className:e})=>{const n=$t(),{isLoading:s,mutateAsync:o}=Ut(),[r,a]=m.useState(null),[d]=F(),[c,l]=H(),[u,p]=q(),[f,h]=U(),j=It(),[x,y]=Lt(),T=async()=>{const A=await o(d);a(A)},w=()=>{l(u),p(c),d!=null&&d.trade&&h(d.trade.to.relativeAmount)},Z=A=>{a(null),A&&(j(Nt.activity),y(!1))};return t.jsxs(ln,{className:e,children:[t.jsx(Es,{children:t.jsx(pn,{"data-testid":"change-swap",onClick:w,children:t.jsx(Ft,{})})}),t.jsx(dn,{}),n.displayType==="compact"&&t.jsx(Ws,{}),t.jsx(Jt,{onClick:T,isEncodingProcess:s||!!r,size:n.proDisplayType==="desktop"?"medium":"large"}),t.jsx(Pt,{handleClose:Z,params:r,waitInvalidation:!0}),t.jsx(gs,{})]})},Qe=i.label`
    cursor: pointer;
    ${Oe};
    ${Bt};
    box-sizing: border-box;

    text-align: center;

    padding: 8px 12px;

    background: ${e=>e.theme.fieldBackground};
    border: 1px solid transparent;
    transition: border-color 0.15s ease-in-out;
`,un=i.input`
    display: none;

    &:checked + ${Qe} {
        border: 1px solid ${e=>e.theme.accentBlue};
    }
`,mn=m.forwardRef((e,n)=>{const s=m.useId(),o=e.id||s,{className:r,children:a,...d}=e;return t.jsxs(t.Fragment,{children:[t.jsx(un,{type:"radio",ref:n,id:o,...d}),t.jsx(Qe,{className:r,htmlFor:o,children:a})]})}),hn=({isOpen:e,onClose:n})=>{const{t:s}=S();return t.jsx(t.Fragment,{children:t.jsx(ue,{isOpen:e,handleClose:n,title:s("swap_settings"),children:()=>t.jsx(yn,{onClose:n})})})},xn=i.div`
    padding-bottom: 10px;

    > * {
        display: block;
        cursor: default;
    }

    > ${g} {
        color: ${e=>e.theme.textSecondary};
    }
`,gn=i.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
`,fn=i(mn)`
    height: 36px;
    flex: 1;
`,jn=i.div`
    display: flex;
    gap: 0.5rem;
    > * {
        flex: 1;
    }
`,ie=[.5,1,3,5],Te=ie[1],wn=i.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`,yn=({onClose:e})=>{const{t:n}=S(),{data:s}=Y(),{mutate:o}=Ht(),[r,a]=m.useState();if(m.useLayoutEffect(()=>{s!=null&&s.slippagePercent&&(ie.includes(s==null?void 0:s.slippagePercent)?a(s==null?void 0:s.slippagePercent):(a(Te),o({slippagePercent:Te})))},[s==null?void 0:s.slippagePercent]),!s)return t.jsx(wn,{children:t.jsx(me,{})});const d=()=>{o({slippagePercent:r}),e==null||e()};return t.jsxs(t.Fragment,{children:[t.jsxs(xn,{children:[t.jsx(k,{children:n("swap_slippage")}),t.jsx(g,{children:n("swap_slippage_description")})]}),t.jsx(gn,{children:ie.map(c=>t.jsxs(fn,{name:"slippage-percent",value:c,checked:r===c,onChange:()=>a(c),children:[c,"%"]},c))}),t.jsxs(jn,{children:[t.jsx(b,{secondary:!0,onClick:e,children:n("cancel")}),t.jsx(b,{primary:!0,disabled:r===s.slippagePercent,onClick:d,children:n("save")})]})]})},Cn=()=>{const[e,n]=m.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(Me,{onClick:()=>n(!0),children:t.jsx(Rt,{})}),t.jsx(hn,{isOpen:e,onClose:()=>n(!1)})]})};let ne=!1;const kn=()=>{const{refetch:n,isFetching:s}=N(),[o,r]=m.useState(!1);return m.useEffect(()=>{if(ne=!1,s)r(!1);else{r(!0);const a=setTimeout(()=>{ne||(n(),ne=!0)},15e3);return()=>clearTimeout(a)}},[s]),t.jsx(Me,{onClick:()=>n(),children:o?t.jsx(Ot,{}):t.jsx(Et,{})})};export{zs as A,kn as S,Cn as a,An as b,Ws as c};
