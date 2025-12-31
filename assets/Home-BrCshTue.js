import{j as t,c as p,gR as E,r as l,b as g,H as d,s as m,n as f,br as b,bX as C,dM as S,gS as T,gT as O,p as N}from"./index-pFCF53l2.js";import{N as x}from"./Nfts-BQ9zFWVr.js";import{J as L}from"./Jettons-CmVzMbPG.js";import{H as B}from"./TonActions-YW9sg-nG.js";import"./useSwapMobileNotification-BXB33XwE.js";import"./HideForState-DGbvkaW_.js";const v=({assets:e,nfts:n})=>t.jsxs(t.Fragment,{children:[t.jsx(L,{assets:e}),t.jsx(x,{nfts:n})]}),w=m.div`
    display: flex;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    justify-content: center;
    gap: 2.25rem;

    user-select: none;
`,h=m.div`
    cursor: pointer;

    padding: 0.5rem;
    margin: -0.5rem;
    box-sizing: border-box;

    ${e=>e.active?f`
                  color: ${e.theme.textPrimary};
              `:f`
                  color: ${e.theme.textSecondary};
              `}
`,F=m.div`
    position: absolute;
    height: 3px;
    width: 0px;
    bottom: -0.5rem;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.accentBlue};
`;var o;(function(e){e[e.TOKENS=0]="TOKENS",e[e.COLLECTIBLES=1]="COLLECTIBLES"})(o||(o={}));const I=({tab:e,onTab:n})=>{const{t:i}=g(),s=l.useRef(null),r=l.useRef(null);return l.useEffect(()=>{if(s.current&&r.current){const a=s.current.childNodes[e],u=40;r.current.style.width=u+"px",r.current.style.left=a.offsetLeft+(a.clientWidth-u)/2+"px",window.requestAnimationFrame(()=>{r.current&&(r.current.style.transition="all 0.3s ease-in-out")})}},[s,r,e]),t.jsxs(w,{ref:s,children:[t.jsx(h,{active:e===o.TOKENS,onClick:()=>n(o.TOKENS),children:t.jsx(d,{children:i("jettons_list_title")})}),t.jsx(h,{active:e===o.COLLECTIBLES,onClick:()=>n(o.COLLECTIBLES),children:t.jsx(d,{children:i("wallet_collectibles_tab_lable")})}),t.jsx(F,{ref:r})]})},c="collectibles",R=({assets:e,nfts:n})=>{const i=p(),[s,r]=E(),a=l.useMemo(()=>new URLSearchParams(s).get(c)==="open"?o.COLLECTIBLES:o.TOKENS,[s,i]),u=l.useCallback(j=>{j===o.COLLECTIBLES?s.has(c)||s.append(c,"open"):s.has(c)&&s.delete(c),r(s,{replace:!0})},[s,r]);return t.jsxs(t.Fragment,{children:[t.jsx(I,{tab:a,onTab:u}),a===o.COLLECTIBLES?t.jsx(x,{nfts:n}):t.jsx(L,{assets:e})]})},k=({assets:e,nfts:n})=>e.length+n.length<11||e.length<4?t.jsx(v,{assets:e,nfts:n}):t.jsx(R,{assets:e,nfts:n}),$=()=>{const{isFetched:e}=b(),{assets:n,error:i}=C(),{data:s,isFetching:r}=S(),a=!n||r;return!s||!n||!e?t.jsx(T,{}):t.jsxs(t.Fragment,{children:[t.jsx(O,{error:i,isFetching:a}),t.jsx(B,{chain:N.TON}),t.jsx(k,{assets:n,nfts:s})]})};export{$ as default};
