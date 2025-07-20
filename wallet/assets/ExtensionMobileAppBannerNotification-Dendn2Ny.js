import{b as m,aW as h,ad as f,r as l,k7 as b,j as e,N as g,aS as c,k8 as _,s as o,cE as j,hX as w,cn as y}from"./index-pFCF53l2.js";import{d as E}from"./index-B0JA3rv4.js";import{u as k}from"./useMobileBannerUrl-ETMlhwUX.js";const B=o.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`,S=o.div`
    padding: 16px;
    border-radius: ${t=>t.theme.cornerSmall};
    background-color: ${t=>t.theme.constantWhite};
    margin-bottom: 20px;
    width: fit-content;
`,W=o(j)`
    color: ${t=>t.theme.textSecondary};
    margin-bottom: 32px;
    max-width: 366px;
    text-wrap: balance;
`,N=o(w)`
    margin-bottom: 4px;
    max-width: 326px;
    text-wrap: balance;
`,v=o(y)`
    width: 100%;
`,R=({className:t})=>{const{t:s}=m(),n=k(),a=h(),{mutate:d}=f(),[p,r]=l.useState(!1),u=!!(navigator!=null&&navigator.userAgent)&&/iPhone/.test(navigator.userAgent),i=b(_);l.useEffect(()=>{n&&i.length===0&&r(!0)},[n,i.length]);const x=()=>{r(!1),d({dismissMobileQRBanner:!0})};return e.jsx(g,{isOpen:p,handleClose:x,children:()=>!!n&&e.jsxs(B,{className:t,children:[e.jsx(S,{children:e.jsx(E.QRCode,{size:160,value:n,bgColor:a.constantWhite,fgColor:a.constantBlack,quietZone:0})}),e.jsx(N,{children:s("pro_download_mobile_banner_title")}),e.jsx(W,{children:s("pro_download_mobile_banner_description")}),e.jsx(v,{href:n,children:u?e.jsx(c,{primary:!0,size:"large",fullWidth:!0,children:s("update_download")}):e.jsx(c,{secondary:!0,size:"large",fullWidth:!0,children:s("pro_download_mobile_banner_description_link")})})]})})};export{R as ExtensionMobileAppBannerNotification,R as default};
