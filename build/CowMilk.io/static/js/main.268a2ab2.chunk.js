(this["webpackJsonpmoney-launderer"]=this["webpackJsonpmoney-launderer"]||[]).push([[0],{143:function(e,t,n){},145:function(e,t,n){},151:function(e,t){},159:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(51),s=n.n(i),c=(n(143),n(87)),o=n(22),u=n(201),l=n(69),d=(n(145),n(13)),b=n(9),p=n(40),x=n(16),m=n(0),A=n.n(m),g=n(202),j=n(200),h=n(121),f=n(216),O=n(203),y=n(209),w=n(211),v=n(213),k=n(214),H=n(215),C=n(210),E=n(208),T=n(206),B=n(205),Q=n(217),S=n(218),M=n(53),I=(n(147),n(73)),V=new(n(112).a)({supportedChainIds:[250]}),P=new(n(113).a)({rpc:{250:"https://rpcapi.fantom.network/"},bridge:"https://bridge.walletconnect.org",qrcode:!0,infuraId:"12351ae7b81b4899bf671dfc4f732b16"}),R=n.p+"static/media/meta.c901ad35.svg",N=n.p+"static/media/walletConnect.a4166a89.svg",W=n.p+"static/media/logo_new.040831f8.png",U=n.p+"static/media/link4.7de17b67.svg",D=n(74),z="0xE3624Ebd9936Ea8EeD4a916b05B23e6500705C12",G=n(64),Y=n(45),J=n(115),K=Object(J.a)({apiKey:"AIzaSyBr6orVb_ljzS4oPHBxKWi6nmirfruk79E",authDomain:"money-laundry.firebaseapp.com",projectId:"money-laundry",storageBucket:"money-laundry.appspot.com",messagingSenderId:"173373586038",appId:"1:173373586038:web:fe37ad5e8669899a72bd57",measurementId:"G-MQ51WC3HYM"}),L=Object(Y.d)(K),Z=n(6),F=function(e){var t=e.link,n=Object(l.b)().account,r=Object(a.useState)(0),i=Object(x.a)(r,2),s=i[0],c=i[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(b.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(Y.b)(L,"referrals",n),e.next=3,Object(Y.c)(t);case 3:(a=e.sent).data()&&c(a.data().referrals);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t&&n&&""!==t&&e()}),[t,n]),Object(Z.jsx)(w.a,{sx:{color:"rgb(23, 33, 94)",transition:"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",boxShadow:"rgb(0 0 0 / 59%) 6px 6px 20px 6px",borderRadius:"20px",background:"rgb(251, 241, 225)",marginBottom:"24px"},children:Object(Z.jsxs)(v.a,{children:[Object(Z.jsx)(k.a,{variant:"h5",sx:{fontWeight:"bold",textAlign:"center"},children:"Referrals"}),Object(Z.jsx)(H.a,{sx:{marginTop:"8px"}}),Object(Z.jsxs)(E.a,{container:!0,sx:{marginTop:"10px",marginBottom:"10px"},spacing:2,children:[Object(Z.jsx)(E.a,{item:!0,xs:9,children:"Your Referrals"}),Object(Z.jsx)(E.a,{sx:{textAlign:"right"},item:!0,xs:3,children:s})]}),Object(Z.jsx)(T.a,{sx:{width:"100%",mt:2,mb:2},variant:"outlined",children:Object(Z.jsx)(B.a,{value:t})}),Object(Z.jsx)(k.a,{variant:"subtitle2",sx:{fontSize:"16px",textAlign:"center"},children:"Earn 12% of the FTM used to milk money from anyone who uses your referral link."})]})})},X=function(){var e=q(),t=Object(c.b)(),n=Object(x.a)(t,2),r=n[0],i=(n[1],Object(a.useState)(!1)),s=Object(x.a)(i,2),o=s[0],u=s[1],m=a.useState({amount:0,dlgOpen:!1,refAddress:r.get("ref"),balWallet:0,balContract:0,miners:0}),g=Object(x.a)(m,2),j=g[0],J=g[1],K=a.useState(0),X=Object(x.a)(K,2),_=X[0],$=X[1],ee=Object(l.b)(),te=ee.error,ne=ee.account,ae=ee.activate,re=ee.deactivate,ie=ee.library,se=ee.chainId;a.useEffect((function(){window.ethereum&&V.isAuthorized().then((function(e){ae(V)}))}),[]);var ce=function(){var e=Object(b.a)(A.a.mark((function e(){var t,n,a,r,i,s,c,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ne||!ie){e.next=35;break}return e.prev=1,e.next=4,ie.getSigner();case 4:return t=e.sent,n=new D.a(z,I,t),a={value:Object(G.b)(j.amount.toString(),"ether")},r=j.refAddress?j.refAddress:ne,e.next=10,n.buyEggs(r,a);case 10:return i=e.sent,e.next=13,i.wait();case 13:if(!j.refAddress){e.next=29;break}if(j.refAddress===ne){e.next=29;break}return s=Object(Y.b)(L,"referrals",j.refAddress),c=Object(Y.a)(L,"referrals"),e.next=19,Object(Y.c)(s);case 19:if(!(o=e.sent).data()){e.next=26;break}return e.next=23,Object(Y.e)(Object(Y.b)(c,j.refAddress),{referrals:o.data().referrals+1});case 23:console.log("Step 1"),e.next=29;break;case 26:return e.next=28,Object(Y.e)(Object(Y.b)(c,j.refAddress),{referrals:1});case 28:console.log("step 2");case 29:M.b.success("Milking Completed!"),e.next=35;break;case 32:e.prev=32,e.t0=e.catch(1),M.b.error("Transaction Error!");case 35:case"end":return e.stop()}}),e,null,[[1,32]])})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(b.a)(A.a.mark((function e(){var t,n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ne||!ie){e.next=17;break}return e.prev=1,e.next=4,ie.getSigner();case 4:return t=e.sent,n=new D.a(z,I,t),e.next=8,n.hatchEggs("0x0000000000000000000000000000000000000000");case 8:return a=e.sent,e.next=11,a.wait();case 11:M.b.success("Re Milking Successful!"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),M.b.error("Transaction Error!");case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(b.a)(A.a.mark((function e(){var t,n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ne||!ie){e.next=17;break}return e.prev=1,e.next=4,ie.getSigner();case 4:return t=e.sent,n=new D.a(z,I,t),e.next=8,n.sellEggs();case 8:return a=e.sent,e.next=11,a.wait();case 11:M.b.success("Re Milking Successful!"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),M.b.error("Transaction Error!");case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();a.useEffect((function(){var e=function(){var e=Object(b.a)(A.a.mark((function e(){var t,n,a,r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.getBalance(ne);case 3:return t=e.sent,e.next=6,ie.getBalance(z);case 6:return n=e.sent,e.next=9,ie.getSigner();case 9:return a=e.sent,r=new D.a(z,I,a),e.next=13,r.getMyMiners(ne);case 13:i=e.sent,J(Object(p.a)(Object(p.a)({},j),{},{balWallet:Number(Number(Object(G.a)(t,"ether")).toFixed(4)),balContract:Number(Number(Object(G.a)(n,"ether")).toFixed(4)),miners:Number(Object(G.a)(i,0))})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();ne&&ie&&e()}),[ne,ie]),a.useEffect((function(){var e=function(){var e=Object(b.a)(A.a.mark((function e(){var t,n,a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new h.a("https://rpc.ftm.tools/"),n=new D.a(z,I,t),e.next=5,n.getMyMiners(ne);case 5:if(a=e.sent,!(Number(Object(G.a)(a,"ether"))>0)){e.next=11;break}return e.next=9,n.beanRewards(ne);case 9:r=e.sent,$(Number(Number(Object(G.a)(r,"ether")).toFixed(4)));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),$(0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();ne&&ie&&e()}),[ne,ie]),a.useEffect((function(){te&&"0xfa"!==window.ethereum.chainId&&(M.b.error("Wrong Network!"),u(!0))}),[te]),a.useEffect((function(){ne&&J(Object(p.a)(Object(p.a)({},j),{},{link:"https://cowmilking.netlify.app/?ref=".concat(ne)}))}),[ne]),Object(a.useEffect)((function(){250===se&&u(!1)}),[se]);var le,de=function(){var e=Object(b.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.ethereum){e.next=4;break}return e.next=4,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0xfa",chainName:"Fantom Opera Mainnet",rpcUrls:["https://rpcapi.fantom.network/"],nativeCurrency:{name:"Fantom",symbol:"FTM",decimal:18},blockExplorerUrls:["https://ftmscan.com/"]}]});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(Z.jsx)("div",{className:e.root,children:Object(Z.jsxs)(f.a,{sx:{p:"48px 16px",maxWidth:"400px",ml:"auto",mr:"auto"},children:[Object(Z.jsx)(M.a,{closeOnClick:!0,position:"bottom-left"}),Object(Z.jsx)(O.a,{open:j.dlgOpen,onClose:function(){return J(Object(p.a)(Object(p.a)({},j),{},{dlgOpen:!1}))},sx:{"& .MuiPaper-root":{borderRadius:"16px"}},children:Object(Z.jsxs)(y.a,{sx:{minWidth:"400px",minHeight:"400px"},children:[Object(Z.jsx)(w.a,{sx:{minHeight:"150px",textAlign:"center",boxShadow:"none",cursor:"pointer"},onClick:function(){window.ethereum?(ne&&re(),ae(V),J(Object(p.a)(Object(p.a)({},j),{},{dlgOpen:!j.dlgOpen}))):M.b.error("No metatmask wallet detected.")},children:Object(Z.jsxs)(v.a,{children:[Object(Z.jsx)("img",{src:R,className:e.svgicon,alt:""}),Object(Z.jsx)(k.a,{variant:"h5",sx:{fontWeight:"bold",pt:2},children:"Metamask"}),Object(Z.jsx)(k.a,{variant:"h6",sx:{pt:1,color:"#b5b5b5"},children:"Connect to your metamask wallet"})]})}),Object(Z.jsx)(H.a,{}),Object(Z.jsx)(w.a,{sx:{minHeight:"150px",textAlign:"center",boxShadow:"none",cursor:"pointer"},onClick:function(){ne&&re(),ae(P),J(Object(p.a)(Object(p.a)({},j),{},{dlgOpen:!j.dlgOpen}))},children:Object(Z.jsxs)(v.a,{children:[Object(Z.jsx)("img",{src:N,className:e.svgicon,alt:""}),Object(Z.jsx)(k.a,{variant:"h5",sx:{fontWeight:"bold",pt:2},children:"WallectConnect"}),Object(Z.jsx)(k.a,{variant:"h6",sx:{pt:1,color:"#b5b5b5"},children:"Scan with WalletConnect to connect"})]})})]})}),Object(Z.jsxs)("div",{className:e.box,children:[Object(Z.jsx)("div",{className:e.logobox,children:Object(Z.jsx)("img",{src:W,className:e.logo,alt:""})}),!o&&Object(Z.jsx)(C.a,{className:e.btn,sx:{position:{xs:"inherit",md:"fixed"},width:{xs:"100%",md:"inherit"},right:{md:"48px"},top:{md:"48px"},mb:{xs:3,md:"inherit"}},onClick:function(){ne?re():J(Object(p.a)(Object(p.a)({},j),{},{dlgOpen:!j.dlgOpen}))},children:void 0!==ne?"Disconnect":"Connect"}),o&&Object(Z.jsx)(C.a,{className:e.btn,sx:{position:{xs:"inherit",md:"fixed"},width:{xs:"100%",md:"inherit"},right:{md:"48px"},top:{md:"48px"},mb:{xs:3,md:"inherit"}},onClick:de,children:"Switch Network"}),Object(Z.jsx)(k.a,{sx:{textAlign:"center",letterSpacing:"0.05em"},variant:"h6",children:"The FTM Reward Pool with the tastiest daily return and lowest dev fee"})]}),Object(Z.jsx)(w.a,{sx:{color:"rgb(23, 33, 94)",transition:"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",boxShadow:"rgb(0 0 0 / 59%) 6px 6px 20px 6px",borderRadius:"20px",background:"rgb(251, 241, 225)",marginBottom:"24px"},children:Object(Z.jsxs)(v.a,{children:[Object(Z.jsxs)(E.a,{container:!0,spacing:2,children:[Object(Z.jsx)(E.a,{sx:{fontSize:20,color:"GrayText",marginTop:"15px"},item:!0,xs:6,children:"Contract"}),Object(Z.jsxs)(E.a,{sx:{textAlign:"right",marginTop:"15px",fontSize:20},item:!0,xs:6,children:[j.balContract," FTM"]}),Object(Z.jsx)(E.a,{sx:{fontSize:20,color:"GrayText"},item:!0,xs:6,children:"Wallet"}),Object(Z.jsxs)(E.a,{sx:{textAlign:"right",fontSize:20},item:!0,xs:6,children:[j.balWallet," FTM"]}),Object(Z.jsx)(E.a,{sx:{fontSize:20,color:"GrayText"},item:!0,xs:6,children:"Your cows"}),Object(Z.jsxs)(E.a,{sx:{textAlign:"right",fontSize:20},item:!0,xs:6,children:[j.miners," COWS"]})]}),Object(Z.jsxs)(f.a,{sx:{pt:4,pb:4,"& .MuiFormControl-root":{width:"100%"}},children:[Object(Z.jsx)(T.a,{sx:{width:"25ch"},variant:"outlined",children:Object(Z.jsx)(B.a,{type:"number",id:"outlined-adornment-amount",value:j.amount,onChange:(le="amount",function(e){J(Object(p.a)(Object(p.a)({},j),{},Object(d.a)({},le,e.target.value)))}),endAdornment:Object(Z.jsx)(Q.a,{position:"end",children:"FTM"}),"aria-describedby":"outlined-amount-helper-text",inputProps:{"aria-label":"amount"}})}),Object(Z.jsx)(C.a,{sx:{width:"100%",mt:3,mb:3},className:e.btn,onClick:ce,disabled:!ne||!(j.amount>0),children:"Invest Money"}),Object(Z.jsx)(H.a,{}),Object(Z.jsxs)(E.a,{container:!0,spacing:2,sx:{mt:2,mb:2},children:[Object(Z.jsx)(E.a,{item:!0,xs:6,children:Object(Z.jsx)(k.a,{variant:"h5",sx:{fontWeight:"bold"},children:"Your rewards"})}),Object(Z.jsx)(E.a,{sx:{textAlign:"right"},item:!0,xs:6,children:Object(Z.jsxs)(k.a,{variant:"h5",sx:{fontWeight:"bold"},children:[_," FTM"]})})]}),Object(Z.jsxs)("div",{style:{display:"flex"},children:[Object(Z.jsx)(C.a,{onClick:oe,disabled:!ne,sx:{width:"50%",m:1},className:e.btn,children:"BUY COWS"}),Object(Z.jsx)(C.a,{onClick:ue,disabled:!ne,sx:{width:"50%",m:1},className:e.btn,children:"MILK"})]})]})]})}),Object(Z.jsx)(w.a,{sx:{color:"rgb(23, 33, 94)",transition:"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",boxShadow:"rgb(0 0 0 / 59%) 6px 6px 20px 6px",borderRadius:"20px",background:"rgb(251, 241, 225)",marginBottom:"24px"},children:Object(Z.jsxs)(v.a,{children:[Object(Z.jsx)(k.a,{variant:"h5",sx:{fontWeight:"bold"},children:"Milking Facts"}),Object(Z.jsx)(H.a,{sx:{mt:1,mb:3}}),Object(Z.jsxs)(E.a,{container:!0,spacing:2,children:[Object(Z.jsx)(E.a,{item:!0,xs:9,children:"Daily Return"}),Object(Z.jsx)(E.a,{sx:{textAlign:"right"},item:!0,xs:3,children:"8%"}),Object(Z.jsx)(E.a,{item:!0,xs:9,children:"APR"}),Object(Z.jsx)(E.a,{sx:{textAlign:"right"},item:!0,xs:3,children:"2,920%"}),Object(Z.jsx)(E.a,{item:!0,xs:9,children:"Dev Fee"}),Object(Z.jsx)(E.a,{sx:{textAlign:"right"},item:!0,xs:3,children:"6%"})]})]})}),Object(Z.jsx)(F,{link:j.link}),Object(Z.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:"48px"},children:[Object(Z.jsx)(S.a,{onClick:function(){return window.open("https://ftmscan.com/address/".concat(z),"_blank")},children:Object(Z.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAMAAAC4A3VPAAAAA3NCSVQICAjb4U/gAAABBVBMVEX///8AHmgAHWcAH2cAH2gAHmcAHmcAHWgAH2QAHmgAH2kAHmgAHWgAHWcAHmkAHmcAAAAAHmgAG2kAHmYAHmcAHmcAH2cAH2gAHmgAHmcAHWgAGmYAHmcAHmcAHHEAHWgAH2cAHmcAHmgAH2cAHmcAGWsAH2gAH2YAG2UAHmgAH2cAHmcAHmgAGmmQnb2wutAuR4P3+Pv2+PofOnvz9PjDytygrMdvgarIz97P1eMlP379/v4GJGv5+ftidaIoQoCCkbUAH2ggO3uPnb2/x9nf4+xAV47///+vudAwSYWfq8YQLXJ/j7Pv8fZfcqDAyNpQZZhgc6HQ1uPg5O3w8vZwgauAj7TGtxCKAAAALnRSTlMATIO15+a0giHFZPNiaCL0AcQ4cLCo6OC4iFgK0tQJLPkqZ+9eH78ZJqLho2UnaRDnrQAAA8VJREFUaIHtm+d2mzAUgJXOjGY0abM6kq50O11xuhPhSfDAMfH7P0oZkkEgwb2y0Tk94f6yg+DDfOhKVwFCwli4cfMWLTVu37m7QOJYXCoXx2NpkROXV8wQKV25FxFXTQGDWA2Ia+smketrhGwY8sjj/gbZNEukdJNsmUZukQemkQ/JtmnkDjFNpLRCXnek1Wi2Ws2GZQzZbnZYdG0jSOuik4gLp3Sk0+t3hOj3SkYOWhFo6Nr2aBh9brklIrnEyzb7Po6+N1FKEUgu0RvFf7vy8ErByKnEiXB0p4ZWCkVyiceZvmhhlcKQaYmprTilEKRMohgopcVIhcRUI4TSQqRaohhwpQXIfImptkCluchiiWLAlOYgQRJTu0CUqpFQiWIAlKqQDkKiGFxpV3VtFEi7j5IoBlPaUtxGcuSnz0iJYjClX74ikN/Ca6o3tQnDugwvEhzphid5MgPSPgkPIb0RpMjj6Abo9HQvbIMdoA5Gdnj0BzrE0+n0qIVCfo92+oHvJKw/hweAIm2/7Zi6rH9d4FJBN9pr7FIMsu23HfpGJh7LXvCE12NJeUKpDtI/5Tp0QIpiwCTWw3PUQvofL2EDUtiW5cgha6uJpHQEnGPwgW48zZHaSF8p6zC5cww20HmJHKmPTAxIyg7jyga6WZCJOYa0w9jygW42ZDzHaGSU8uyWGehmRVKnLs+BPLvVMucyM9K/fsNsDuTZbSi54nNA0mkO7DKAxSSOpffVXJCUJnOgkN3KQ8Y5cCBmtxKR/lamVMxupSLjHJjMbiUjeQ708meAc0VS+tNv8qtg7J4z8rff5E9+kwpZIStkhayQ1xfpqBqjkMqjKKvo/OoZgAzWOKRLIlJkUOHVZkXWVHqkyKvgZ+YubBUjR8pjSJGOV8QsRIZETzo3kq9uhTso6iwIktVi8npfsWzI1lWzdRYE6bCC+kq+WbU4yuaq/VM8khfUqjUN5RKwnVs6q5FuTi1WgIzrLJlSFdLOrcUKkdM6S6JUjuQSPYVFADIundNKpciesqBGIJVKJchiiUCkQmkGCZEIRkqVppAwiQikRKmIBErEILNKk0iwRBwyrTRGIiRikaJSjkRJxCOTShkSJ1EDmVD6N0AOkBK1kLHSOOASNZGxUrxEbeRUKVqiPpJSqxb+Um+i9V8x3Qepzs7PzzR3/W+e3aqQFTJCGn9YdZvsmkbukj3TyD2ybxq5Tx49Nkt88pSQg0OTxMNnweP5Rh8j34peQnhu7LWHFy/5qxavjswQj14n3ih5s/x2p1zcu/cfPkasf1Xv8jarlK7jAAAAAElFTkSuQmCC",className:e.linkimg,alt:""})}),Object(Z.jsx)(S.a,{onClick:function(){return window.open("https://t.me/moneylaundererftmchat","_blank")},children:Object(Z.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADW0lEQVRo3u2aP3KbQBSHvyQuPRNUqTScQOQG+ARWLkCsE0Tp0sU6QewTWOYCQSewbmB0AnBJtylUpEuxawVhFnYRCM3EvxmPR+Lt4316+/cBvOm09K5rh2Mv9AEfcDUmGZDkaZScFMjYCx1gClyp/6YSwBpYAXGeRmIQkLEXusAPFbxz4O8hgBhY5GmUHQVEZWCuIPrQAri1zZAViOr/v9D3/66UAbM8jdamDd5bQFwDT0eAQN3jUd3TSEYZGXvhPWDstGMt8zSaNRl9OHEIAP98NHG3YrNqDTL2wjnwfUCIIszzVmwSnYG2a429MAAehyYo6ZNuIa0EUVPssQa2jTIFI8oXdLPW/AQhUDHNqy68yohasdOhI26QV94BVGWkrxW7SWsL21cx7oEUNoDHUgZ8A0Z5Gl0Ct4btpirWnc7KBhy+ATRRDNxVbEF+G7Z3VKxLHchVj8EL4A65Umcam48W/q7qQKY9AKyBhzyNlga2voXfoPhhB6J2tl1J8K/7JMULqm87mqy4Fvdwxl7ov/gvDvYuQDJghpweZxUQN8ip/VrT3gZkz/7sACdFLZHdZ111UWX7Xv1YCRWzk9oS2cpHZv7VGLFRBjzQcJpTWXiZ9xPgUmPvHBBLK5AY+evHdUalLDRBQLuufdEGJAE+mxQHSlkwgQCYtADZyQbEBMBFZiGwhIB2Xeu5DcgUuTVIkGMjLmZHHcJ+lAIyOqYqBYZ2lSqCZIZtfPX3U0EJ5IznluyMIVQm22gXcxEkaeHI13wfW2QC2k/9u5h3C2LHtVi3vDttUNDmJsWYy+eRuCMQH1mX8g3tLwzttLGWQVbmfoxh5ga2bgv/e7FWZUR0COMgJ4XHhgEdWPoV1GVEzfWxqTcLBcBTVXYsx9KLluV1qerMvugBBPTZCSz9COQBbU+6utYN/RchlsiV+St2q/oiT6Ob8pe6lf0W+EK/ta3rFm0yNAWKupKpj6w2npK0JVPt8xHVwGZ17luzukW7thq/FZvkfDRx6eYYfIiWeRrVTkKNz0e2YrMaGMZo82n8DFE9Brs/MsTMsIxk/TA0UDBuzwAZ8jSamDZo7FpFbcUmOx9NHoA/HHgQqtECmYnMptH/+8JABZBDu1c4UMEP+wpHDZjPAC/VvOnU9BdAxzlbow3rDQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAASdEVYdEVYSUY6T3JpZW50YXRpb24AMYRY7O8AAAAASUVORK5CYII=",className:e.linkimg,alt:""})}),Object(Z.jsx)(S.a,{onClick:function(){return window.open("https://discord.gg/ZGegwcxHGz","_blank")},children:Object(Z.jsx)("img",{src:U,className:e.linkimg2,alt:""})}),Object(Z.jsx)(S.a,{onClick:function(){return window.open("https://money-launderer.gitbook.io/money-laundry/","_blank")},children:Object(Z.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACjUlEQVR4nO2bv2sTYRjHP3dpUiGGw0REAlIXpQgFOzk5KR27CG4u6uQkOLSDP7oqSBE7iVTRSVr/BBEH52QrdTL+uGK1yDUpaJreOZgGCY3v+17ucrm872c6kuc5nvf7vu/3nrtLwGAw6IwlE/TwxvIJbGuRgBksCnEX1QcuFi/rpfzdhYXLTZmEMVFAe/BVoCgnV6KUCZgrbO0AzMskCAXAthaBYsmxOX0yy3iutwpTs+ck64wHt+bx+mkVAq4gKYAtjAiYATglGPwwUJ5wOoeyOeIV0N7zh9qDr6w18Ro+AE7BZnoy1/n8w2aVS9fPqtScOGIBuumxCLyGj9fw+ixn8CgLsD/jo4LYA0Yc7QVQ3gK9TNAp2OSLw9wjHUxkJjg9mWNqNl1XADAmGJ0HVNaaf7uwlKG+BXqgTR/QywTTivoWGO7bAWWMCSZdQNJoL4D2JhhZJyhi9UmFjc/bUrHlCafzXOGgvH+/75eBmaBlh1MubJ4skTVCIsLOWNxPmIwJqiZEZYJhPSFqEusE497bsiTWCQ7L02PtPUB7AbTvBM3tsGpC2me8G+09QHsBjAkqZxgTTPeMd6O9B2gvgDFB5Qxjgume8W609wDtBTAmqJxhTDDdM97NSHmAW+v8QmVTNkd6Bax/3OXHT5/dVvDfuMd33smeMj4snsmGSguw8X0vXDEDJ3hQL326LRstLcCx4+Ocv1DCOZINV1fMLC/VALi1dHVOJU/aA4Z58P0g84eJOsBYdsSuf23EAli8AXj/doudRiv2gsLwzf29f+iq5go9IJPx5wkyF7/Ufh1+9fyr6vkHigUvVHOEK+Dmo2vrey3/DLACyL3PHjwuFve3j+bvJV2IwWBIF38A4oC5hQZpSSYAAAAASUVORK5CYII=",className:e.linkimg2,alt:""})}),Object(Z.jsx)(S.a,{onClick:function(){return window.open("https://cdn.discordapp.com/attachments/958386777545117696/961617828887285781/Money_Laundry_Audit.pdf","_blank")},children:Object(Z.jsx)("img",{src:"data:image/png;base64,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",className:e.linkimg2,alt:""})})]})]})})},q=Object(g.a)((function(e){return Object(j.a)({root:{width:"100%",minHeight:"100vh","& .MuiButton-root":{display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",verticalAlign:"middle",lineHeight:"2",textTransform:"uppercase",transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",backgroundColor:"#1969fe",borderRadius:"8px",padding:"10px",boxShadow:"rgb(0 0 0 / 59%) 2px 2px 8px 2px",color:"rgb(23, 33, 94)",minWidth:"138px"}},box:{maxWidth:"400px",margin:"0 auto",marginBottom:"20px"},logobox:{textAlign:"center",paddingBottom:"24px",justifyContent:"center",display:"flex"},logo:{width:"360px",height:"70px"},linkimg:{width:"48px",height:"48px",borderRadius:"24px"},linkimg2:{width:"28px",height:"28px",borderRadius:"24px",backgroundColor:"#17215e",padding:8},svgicon:{height:"60px",width:"80px"},btn:{color:"white!important",fontSize:"16px!important","&:hover":{backgroundColor:"navy!important"},"&:disabled":{backgroundColor:"gray!important"}}})}));function _(e){var t=new u.a(e);return t.pollingInterval=12e3,t}var $=function(){return Object(Z.jsx)(c.a,{children:Object(Z.jsx)(l.a,{getLibrary:_,children:Object(Z.jsx)(o.c,{children:Object(Z.jsx)(o.a,{path:"/",element:Object(Z.jsx)(X,{})})})})})},ee=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,318)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(Z.jsx)(r.a.StrictMode,{children:Object(Z.jsx)($,{})}),document.getElementById("root")),ee()},73:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sellEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"beanRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"buyEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyMiners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')}},[[159,1,2]]]);
//# sourceMappingURL=main.268a2ab2.chunk.js.map