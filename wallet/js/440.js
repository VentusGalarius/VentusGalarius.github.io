"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[440],{440:(s,e,t)=>{t.r(e),t.d(e,{default:()=>c});var l=t(540),i=t(527),n=t(848);const c=function(s){var e=s.initData;return(0,l.useEffect)((function(){var s,t=!1;return s=document.getElementById("product"),lottie.loadAnimation({container:s,renderer:"svg",loop:!0,autoplay:!0,path:"/assets/stickers/star_sell_test.json?v=2"}),$(".sum_sell_stars").on("input",(function(){var s=$(this).val();(s=(s=(s=s.replace(/[^0-9.,]/g,"")).replace(/,/g,".")).replace(/(\..*)\./g,"$1"))>1e5&&(s=1e5),$(".count_rec_usdt").html((.009*s).toFixed(3)),$(this).val(s)})),$(".pay_stars").on("click",(function(){t||(t=!0,$(".pay_stars").css("opacity","0.5"),fetch("/api/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({initData:e,stars:$(".sum_sell_stars").val()})}).then((function(s){return s.json()})).then((function(s){var e;$(".pay_stars").css("opacity","1"),t=!1,s.result?window.location.href=s.url:(e=s.message,Telegram.WebApp.showPopup({title:"WalletStars",message:e,buttons:[{id:"ok",type:"close",text:"Ок"}]}))})))})),function(){console.log("Очистка эффектов")}}),[]),(0,n.jsx)("div",{children:(0,n.jsx)("div",{class:"content",children:(0,n.jsxs)("div",{style:{"margin-bottom":"100px"},class:"main_content",children:[(0,n.jsx)("div",{class:"block_product_market",children:(0,n.jsx)("div",{id:"product"})}),(0,n.jsxs)("div",{class:"inputs_block sell_inputs",children:[(0,n.jsxs)("div",{style:{width:"100%"},class:"block_inp_sell_",children:[(0,n.jsx)("div",{class:"name_sent",children:"Количество звёзд"}),(0,n.jsx)("input",{value:"50",autocomplete:"off",type:"text",placeholder:"50 - 100.000",class:"sum_sell_stars input_def"})]}),(0,n.jsxs)("div",{class:"block_inp_sell_",children:[(0,n.jsx)("div",{class:"name_sent",children:"Вы получите:"}),(0,n.jsxs)("div",{class:"block_recive_usdt_for_sell",children:[(0,n.jsx)("span",{class:"count_rec_usdt",children:"0.45"}),(0,n.jsxs)("svg",{class:"",width:"20",height:"20",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsxs)("g",{"clip-path":"url(#clip0_27_12197)",children:[(0,n.jsx)("path",{d:"M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z",fill:"#009393"}),(0,n.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20.0232 21.4351C23.2209 21.4351 25.8933 20.8992 26.5465 20.1832C25.9919 19.576 23.986 19.0977 21.4386 18.9668V20.4795C20.9826 20.503 20.5085 20.5145 20.0227 20.5145C19.5369 20.5145 19.0628 20.503 18.6058 20.4795V18.9668C16.0594 19.0977 14.0526 19.576 13.498 20.1832C14.1521 20.8992 16.825 21.4351 20.0227 21.4351H20.0232ZM25.7046 14.3151V16.3982H21.4386V17.8426C24.4351 17.997 26.6836 18.6319 26.7003 19.3917V20.9757C26.6836 21.7355 24.4351 22.369 21.4386 22.5238V26.0689H18.6063V22.5238C15.6098 22.3695 13.3623 21.7355 13.3455 20.9757V19.3917C13.3623 18.6319 15.6098 17.997 18.6063 17.8426V16.3982H14.3403V14.3151H25.7051H25.7046ZM12.6627 11H27.6384C27.9963 11 28.3259 11.1866 28.5044 11.4898L32.8671 18.9152C33.093 19.3004 33.0261 19.7865 32.7034 20.0985L20.6944 31.7177C20.3049 32.0941 19.6792 32.0941 19.2906 31.7177L7.2964 20.1141C6.96682 19.7944 6.90453 19.2944 7.14765 18.9074L11.8115 11.4667C11.9933 11.1774 12.3159 11.0005 12.6631 11.0005L12.6627 11Z",fill:"white"})]}),(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{id:"clip0_27_12197",children:(0,n.jsx)("rect",{width:"40",height:"40",fill:"white"})})})]})]})]})]}),(0,n.jsxs)("div",{class:"description_product",children:["Продавая «Telegram Stars», вы соглашаетесь с ",(0,n.jsx)(i.N_,{to:"/rules",class:"rule_text_inspect",children:"правилами"})," сервиса."]}),(0,n.jsx)("div",{class:"blue_btn_def pay_stars",children:"Продать звёзды"})]})})})}}}]);