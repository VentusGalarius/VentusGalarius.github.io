import{b as v,r as i,fl as b,n as m,s as r,u as k,j as t,em as w,a as N,jk as y,j9 as D,jl as C,jm as S,jn as I,jo as $}from"./index-pFCF53l2.js";function z(e,n){const{i18n:o}=v();return i.useMemo(()=>e?new Intl.DateTimeFormat(b(o.language),{month:"short",day:"numeric",year:new Date().getFullYear()-1===new Date(e).getFullYear()?"numeric":void 0,hour:"numeric",minute:"numeric",...n}).format(e):"",[e,o.language,n])}function E(e){if(!e)return"";const n=Math.floor((new Date(e).getTime()-Date.now())/(1e3*60*60*24));return n<0?"0":n.toString()}const F=r.div`
    display: grid;
    margin: 0 0 2rem 0;
    gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`,T=r.div`
    position: relative;
    user-select: none;
    width: 100%;
    display: flex;
    flex-direction: column;

    background-color: ${e=>e.theme.backgroundContent};
    transition: background-color 0.1s ease;

    border-radius: ${e=>e.theme.cornerSmall};

    overflow: hidden;

    ${e=>{if(e.ios){if(e.isHover)return m`
                    background-color: ${e.theme.backgroundContentTint};
                `}else return e.hover?m`
                    cursor: pointer;

                    &:hover {
                        background-color: ${e.theme.backgroundContentTint};
                    }
                `:void 0}}
`,B=r.div`
    width: 100%;
    position: relative;
`,H=r.div`
    width: 100%;
    padding-bottom: 100%;

    ${e=>e.url&&m`
            background-image: url('${e.url}');
        `}
    background-size: cover;
`,L=r.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.75rem 0.5rem;
    white-space: nowrap;
`,A=r.div`
    position: absolute;
    top: 10px;
    right: 8px;
`,R=r.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 32px;
    width: 32px;
`,M=w.memo(({nft:e,resolution:n,onOpen:o,hideText:s})=>{var x;const a=e.sale!==void 0,u=(x=e.previews)==null?void 0:x.find(j=>j.resolution===n),{ios:g}=N(),[h,l]=i.useState(!1),c=i.useRef(null),d=i.useContext(y),{data:f}=D(e);i.useLayoutEffect(()=>{c.current&&d&&c.current.contains(d)?l(!0):l(!1)},[c.current,d,l]);const p=f&&Number(E(f))<=30;return t.jsxs(T,{hover:!0,isHover:h,ios:g,ref:c,onClick:()=>o(e),children:[t.jsxs(B,{children:[t.jsx(H,{url:u==null?void 0:u.url}),a&&t.jsx(A,{children:t.jsx(C,{})}),p&&t.jsx(R,{children:t.jsx(S,{})})]}),!s&&t.jsxs(L,{children:[t.jsx(I,{nft:e}),t.jsx($,{nft:e})]})]})}),G=({nfts:e,className:n})=>{const o=k();return t.jsx(F,{className:n,children:(e??[]).map(s=>{var a;return((a=s.metadata)==null?void 0:a.render_type)==="hidden"?t.jsx(t.Fragment,{}):t.jsx(M,{nft:s,resolution:"500x500",onOpen:()=>o.openNft(s)},s.address)})})};export{H as I,G as N,T as a,E as t,z as u};
