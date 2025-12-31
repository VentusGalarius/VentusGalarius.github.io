import{gP as m,r as a,u as x,aM as C,a as d,aY as h,cq as k,c8 as b,s as f,gH as w,aq as E,j as c,gL as j,gI as y,gJ as I,L as A,B as P}from"./index-pFCF53l2.js";const v=(e,t,n)=>{const r=new Date,s=m.stringify({utm_source:"tonkeeper",utm_campaign:t==="recommendation"?"recom":`feat-${r.getMonth()+1}-${r.getFullYear()}`,utm_medium:n}),o=e.includes("?")?"&":"?";return`${e}${o}${s}`};function l(e,t,n,r){const s=a.useRef(t);a.useLayoutEffect(()=>{s.current=t},[t]),a.useEffect(()=>{if(!e)return;const o=(n==null?void 0:n.current)??window;if(!(o&&o.addEventListener))return;const u=i=>s.current(i);return o.addEventListener(e,u,r),()=>{o.removeEventListener(e,u,r)}},[e,n,r])}function L({callback:e,precisionXPx:t,precisionYPx:n}){const r=a.useRef({clientX:0,clientY:0}),s=a.useRef(null),o=a.useCallback(i=>{r.current={clientY:i.clientY,clientX:i.clientX}},[]),u=a.useCallback(i=>{const p=Math.abs(i.clientX-r.current.clientX)<(t??10),g=Math.abs(i.clientY-r.current.clientY)<(n??10);p&&g&&e()},[e,t,n]);return l("mousedown",o,s),l("mouseup",u,s),s}function M(e,t){const n=x(),r=C(),{tonendpoint:s}=d();return a.useCallback(()=>{r(o=>new h({from:t==="featured"?"banner":"browser",url:e,location:o})),n.openPage(v(e,t,s.getTrack()),{forceExternalBrowser:!0})},[e,n,r,s])}function $(e){let t=e.length;for(;t!=0;){let n=Math.floor(Math.random()*t);t--,[e[t],e[n]]=[e[n],e[t]]}}function S(){const{tonendpoint:e}=d();return k([b.featuredRecommendations],async()=>{const t=await e.getAppsPopular();return t.categories=t.categories.filter(n=>n.id!=="featured"),t.apps&&$(t.apps),t})}const R=f.div`
    width: 100%;
    aspect-ratio: 2 / 1;

    background-image: ${e=>`url(${e.img})`};
    background-size: cover;
    border-radius: ${e=>e.theme.cornerSmall};

    display: inline-flex !important;
    align-items: flex-end;
    justify-content: flex-start;
    cursor: pointer;
`,Y=f(w)`
    margin-left: 1rem;
`,X=({apps:e,onClickApp:t,className:n,...r})=>{const o=E().featured_play_interval||1e3*10;return c.jsx(j,{className:n,gap:"8px",centerPadding:"16px",autoplaySpeed:o,...r,children:e.map(u=>c.jsx(B,{item:u,onClickApp:t},u.url))})},B=({item:e,onClickApp:t})=>{const n=M(e.url,"featured"),r=a.useCallback(()=>{t?t(e):n()},[t,n,e]),s=L({callback:r});return c.jsx(R,{img:e.poster,ref:s,children:c.jsxs(Y,{children:[c.jsx(y,{src:e.icon}),c.jsxs(I,{color:e.textColor,children:[c.jsx(A,{children:e.name}),c.jsx(P,{children:e.description})]})]})})};export{X as P,M as a,S as b,l as u};
