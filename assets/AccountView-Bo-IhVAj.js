import{jM as I,jN as P,g as B,em as O,r as u,j as t,s as l,aS as S,a as m,p,f as L,jO as q,hQ as W,hR as M,iL as $,fM as D,fN as Q,cb as F,bY as f,fJ as H,n as g,u as y,an as U,ba as z,b as T,k as Y,jP as V,co as K,q as X,l as G,fF as k,jQ as J,bR as Z,x as ee,y as te,cE as w,fw as ne,I as se,hY as oe}from"./index-pFCF53l2.js";import{d as v}from"./index-B0JA3rv4.js";import{T as re}from"./TransitionGroup-Ba4hsFgp.js";var x={},R;function ae(){if(R)return x;R=1;var e=x&&x.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(x,"__esModule",{value:!0});const a=e(I()),n=e(P());class r{constructor(s,i,c,d){this.ur=s,this.fountainEncoder=new a.default(s.cbor,i,c,d)}get fragmentsLength(){return this.fountainEncoder.fragmentsLength}get fragments(){return this.fountainEncoder.fragments}get messageLength(){return this.fountainEncoder.messageLength}get cbor(){return this.ur.cbor}encodeWhole(){return[...new Array(this.fragmentsLength)].map(()=>this.nextPart())}nextPart(){const s=this.fountainEncoder.nextPart();return this.fountainEncoder.isSinglePart()?r.encodeSinglePart(this.ur):r.encodePart(this.ur.type,s)}static encodeUri(s,i){const c=i.join("/");return[s,c].join(":")}static encodeUR(s){return r.encodeUri("ur",s)}static encodePart(s,i){const c=`${i.seqNum}-${i.seqLength}`,d=n.default.encode(i.cbor().toString("hex"),n.default.STYLES.MINIMAL);return r.encodeUR([s,c,d])}static encodeSinglePart(s){const i=n.default.encode(s.cbor.toString("hex"),n.default.STYLES.MINIMAL);return r.encodeUR([s.type,i])}}return x.default=r,x}var ie=ae();const ce=B(ie),j=l.div`
    width: 100%;
    padding-bottom: 100%;
    position: relative;
`;function de(e,a){for(var n=[],r=0,o=e.length;r<o;)n.push(e.slice(r,r+=a));return n}const ke=O.memo(({message:e})=>{const[a,n]=u.useState("");return u.useEffect(()=>{let r=[...e];const o=de(r,256);if(o.length===1)n(e);else{let s=0;const i=setInterval(()=>{let c=o[s];n(c.join("")),s++,s===o.length&&(s=0)},100);return()=>clearInterval(i)}},[e]),t.jsx(j,{children:t.jsx(v.QRCode,{size:400,value:a,qrStyle:"dots",eyeRadius:{inner:2,outer:16}})})}),we=({data:e})=>{const a=u.useMemo(()=>new ce(e),[]),[n,r]=u.useState(a.nextPart());return u.useEffect(()=>{const o=setInterval(()=>{r(a.nextPart().toUpperCase())},200);return()=>{clearInterval(o)}},[]),t.jsx(j,{children:t.jsx(v.QRCode,{size:400,value:n,qrStyle:"dots",eyeRadius:{inner:2,outer:16}})})},le=l.div`
    display: flex;
    padding: 4px;
    position: relative;
    justify-content: center;
    gap: 3px;
    user-select: none;
    border-radius: ${e=>e.theme.corner2xSmall};
    background: ${e=>e.theme.backgroundContent};
    width: fit-content;
`;function ue({active:e,values:a,setActive:n,className:r}){return t.jsx(le,{className:r,children:a.map(o=>t.jsx(S,{size:"small",secondary:o.id!==e,onClick:s=>{s.stopPropagation(),s.preventDefault(),n(o.id)},children:o.name},o.id))})}const xe=l.div`
    display: flex;
    align-items: center;
`,E=l.div`
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 20px;
    background: white;
    max-width: 300px;

    ${e=>e.margin&&g`
            margin-bottom: 16px;
        `}

    ${e=>e.extension&&g`
            @media (max-width: 768px) {
                max-width: 217px;
                padding: 16px;
            }
        `}

    canvas {
        width: 100% !important;
        height: 100% !important;
        position: absolute;
    }
`,A=l(w)`
    display: inline-block;
    word-break: break-all;
    color: black;
    margin: 16px 4px 0;
    text-align: center;
    font-family: ${e=>e.theme.fontMono};

    ${e=>e.extension&&g`
            @media (max-width: 768px) {
                margin-top: 8px;
            }
        `}
`,pe=l.div`
    display: flex;
    padding-bottom: 16px;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ${e=>e.extension&&g`
            @media (max-width: 768px) {
                padding-bottom: 0;
            }
        `}
`,he=l(ne)`
    text-align: center;
`,fe=l(w)`
    text-align: center;
    color: ${e=>e.theme.textSecondary};
`,ge=l(se)`
    width: fit-content;
    margin: 0 auto 10px;
`,C=({title:e,description:a})=>{const{extension:n}=m();return t.jsxs(pe,{extension:n,children:[e&&t.jsx(he,{children:e}),t.jsx(fe,{children:a})]})},N=({address:e})=>{const a=y(),{t:n}=T();return t.jsx(xe,{children:t.jsxs(S,{secondary:!0,onClick:r=>{r.preventDefault(),a.copyToClipboard(e,n("copied"))},children:[t.jsx(te,{}),t.jsx("span",{children:n("Copy_address")})]})})},me=({jetton:e})=>{const a=y(),{extension:n}=m(),r=U(),o=z(),{t:s}=T(),i=Y(),c=V({blockchain:p.TON,address:e?K.Address.parse(e):X.address}),d=G(r.rawAddress,i);return t.jsxs(k,{children:[t.jsx(C,{title:s("receive_ton"),description:s("receive_ton_description")}),t.jsxs(E,{extension:n,onClick:h=>{h.preventDefault(),a.copyToClipboard(d,s("copied"))},children:[o&&t.jsx(ge,{accountType:"watch-only"}),t.jsx(j,{children:t.jsx(v.QRCode,{size:400,value:J({address:d,jetton:e}),logoImage:c||"https://wallet.tonkeeper.com/img/toncoin.svg",logoPadding:8,qrStyle:"dots",eyeRadius:{inner:2,outer:16}})}),t.jsx(A,{extension:n,children:d})]}),t.jsx(N,{address:d})]})},ve=({token:e})=>{const a=y(),{t:n}=T(),{extension:r}=m(),o=Z(),s=e===f.id?f:ee;let i;return e===f.id?i={title:n("receive_trc20"),description:n("receive_trc20_description")}:i={title:n("receive_trx"),description:n("receive_trx_description")},o?t.jsxs(k,{children:[t.jsx(C,{...i}),t.jsxs(E,{extension:r,onClick:c=>{c.preventDefault(),a.copyToClipboard(o.address,n("copied"))},children:[t.jsx(j,{children:t.jsx(v.QRCode,{size:400,value:o.address,logoImage:s.image,logoPadding:8,qrStyle:"dots",eyeRadius:{inner:2,outer:16}})}),t.jsx(A,{extension:r,children:o.address})]}),t.jsx(N,{address:o.address})]}):null},je=l(ue)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
`,ye=l(oe)`
    position: relative;
`,Te=[{id:p.TON,name:"Ton"},{id:p.TRON,name:"Tron"}],Ee=({chain:e=p.TON,jetton:a,handleClose:n})=>{const{standalone:r}=m(),[o,s]=u.useState(e),i=u.useRef(null),c=u.useRef(null),d=o===p.TON,h=d?i:c,b=L();return t.jsxs(q,{standalone:r,children:[t.jsx(W,{children:t.jsx(M,{children:t.jsx(ye,{handleClose:n,center:!0,children:!a&&b&&t.jsx(je,{active:o,setActive:s,values:Te})})})}),t.jsx($,{standalone:!1,extension:!0,fullWidth:!0,children:t.jsx(re,{childFactory:D(!d),children:t.jsx(Q,{nodeRef:h,classNames:"right-to-left",addEndListener:_=>{setTimeout(_,H)},children:t.jsx("div",{ref:h,children:d?t.jsx(me,{jetton:a&&F(a)?a:void 0}):b&&t.jsx(ve,{token:a||f.id})})},d?"ton":"tron")})})]})};export{ke as A,E as B,C as H,we as K,Ee as R,ae as r};
