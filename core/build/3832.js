"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[3832],{71234:function(e,n,t){var r=t(67294),a=(t(26720),t(85893));function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n){return o=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},o(e,n)}function c(e,n){if(n&&("object"===i(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var d=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&o(e,n)}(p,e);var n,t,r,i,d=(r=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=l(r);if(i){var t=l(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return c(this,e)});function p(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(e=d.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return n=p,(t=[{key:"componentDidMount",value:function(){var e=this,n={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,items:n.ObjectResponse.SchemeDataList,MainTitle:n.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,n){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(n.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,n={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,items:n.ObjectResponse.SchemeDataList,MainTitle:n.ObjectResponse.TitleResponse})})).catch((function(n){console.log(n),e.setState({items:null})}))}},{key:"render",value:function(){var e=this,n=this.state,t=n.isLoaded,r=n.items;return n.MainTitle,t?(0,a.jsx)("div",{className:"API-Section",children:(0,a.jsx)("div",{className:"api",children:r&&r.map((function(n){return(0,a.jsxs)("div",{className:"api-flex",children:[(0,a.jsxs)("div",{className:"flex-container",children:[(0,a.jsx)("div",{className:"flex-item fg3",children:n.SchemeName}),(0,a.jsx)("div",{className:"flex-item",children:(0,a.jsx)("a",{href:"https://app.nivesh.com/Home/Index?SchemeCode=".concat(n.SchemeCode,"&selectedcategoryId=").concat(e.props.productCategoryId),target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,a.jsxs)("div",{className:"flex-container1",children:[(0,a.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,a.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,a.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,a.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,a.jsxs)("div",{className:"flex-container2",children:[(0,a.jsxs)("div",{className:"flex-item1",children:[n.OneYearReturn,"%"]}),(0,a.jsxs)("div",{className:"flex-item1",children:[n.TwoYearReturn,"%"]}),(0,a.jsxs)("div",{className:"flex-item1",children:[n.ThreeYearReturn,"%"]}),(0,a.jsxs)("div",{className:"flex-item1",children:[n.FiveYearReturn,"%"]})]})]},n.SchemeCode)}))})}):(0,a.jsx)("div",{children:(0,a.jsx)("h1",{children:"Funds are Loading"})})}}])&&s(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),p}(r.Component);n.Z=d},43832:function(e,n,t){t.r(n),t.d(n,{BajajFinanceLtd:function(){return N},default:function(){return C}});var r=t(67294),a=t(71234),i=t(27037),s=t.p+"bc4cf8c3b2664d38ce0573dd0715fc20.png",o=t.p+"fcfbf833ce93b9a1edbe62538aefc995.svg",c=t.p+"90c097c11b95037dcc7ef3754af7c84f.svg",l=t.p+"44af138b13289bad5d924827e8774538.svg",d=t(93998),p=t(34964),u=t(67580),h=t(35848),f=t(64593),m=t(75412),j=t(10682),x=t(85893);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,n){return v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},v(e,n)}function F(e,n){if(n&&("object"===b(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function B(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var N=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&v(e,n)}(N,e);var n,t,r,h,b=(r=N,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=w(r);if(h){var t=w(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return F(this,e)});function N(){var e;y(this,N);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return B(I(e=b.call.apply(b,[this].concat(t))),"data",{BajajFinance:{Title:"",ProductCategoryId:"2",SebiCategory:"",SebiSubCategory:"",DefaultProductId:"1"}}),e}return n=N,(t=[{key:"render",value:function(){var e=this.data.BajajFinance,n=this.props.t,t=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com/en/"},{"@type":"ListItem",position:2,name:"Fixed Deposit",item:"https://nivesh.com/en/fixed-deposit/"},{"@type":"ListItem",position:3,name:"Bajaj Finance Ltd",item:"https://nivesh.com/en/fixed-deposit/bajaj-finance-ltd/"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Is Bajaj Finance Corporate FD Safe?",acceptedAnswer:{"@type":"Answer",text:"Bajaj Finance is one of the best financial institutions. It is safe for a Fixed Deposit scheme. The company has the highest safety rating from CRISIL FAAA/stable rating. This rating gives the assurance that your investment is not at risk. Moreover, the Bajaj Finance Fixed Deposit rates are also the highest."}},{"@type":"Question",name:"Is Bajaj Finance FD Insured by RBI?",acceptedAnswer:{"@type":"Answer",text:"As per the regulations from RBI, your investment in Bajaj Finance Fixed Deposit is more likely to be safe. RBI has made deposit insurance compulsory for all financial institutions. Therefore, your investment at Bajaj finance is insured and at the lowest risk."}},{"@type":"Question",name:"Who all can Invest in Bajaj Finance Fixed Deposit?",acceptedAnswer:{"@type":"Answer",text:"Any individual or corporate less than 60 years of age can invest in Bajaj Finance Fixed Deposit. Senior Citizens can avail of an additional Fixed Deposit interest benefit at Bajaj Finance."}},{"@type":"Question",name:"Which Interest Pay-out Options are Available?",acceptedAnswer:{"@type":"Answer",text:"Cumulative and non-cumulative are the two pay-out options at Bajaj Finance. Under cumulative interest payout, the investor receives an interest amount after the completion of deposit tenure. Whereas, in non-cumulative interest payout one can opt for quarterly, half-yearly, or yearly interest payout."}},{"@type":"Question",name:"How will I get the Maturity Amount when FD gets Matured?",acceptedAnswer:{"@type":"Answer",text:"After the maturity of your Bajaj Finance Fixed Deposit, the amount will be credited to your linked bank account. You can also opt for reinvesting the amount in any Bajaj Finance Ltd. Fixed Deposit Scheme or withdraw the same."}}]}]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(f.q,{children:[(0,x.jsx)("meta",{charSet:"utf-8"}),(0,x.jsx)("title",{children:n("MetaTitle:mT57")}),(0,x.jsx)("meta",{name:"description",content:n("MetaDescription:mD57")}),(0,x.jsx)("link",{rel:"canonical",href:window.location.href}),(0,x.jsx)("script",{type:"application/ld+json",children:t})]}),(0,x.jsx)(j.Z,{children:(0,x.jsxs)(m.Z,{children:[(0,x.jsx)(m.Z.Item,{href:"/",children:n("BreadCrumb:bd-45")}),(0,x.jsx)(m.Z.Item,{href:"/fixed-deposit",children:n("BreadCrumb:bd-46")}),(0,x.jsx)(m.Z.Item,{active:!0,children:n("BreadCrumb:bd-51")})]})}),(0,x.jsx)("div",{className:"container container-wrapper",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-lg-7 col-md-6 col-12 mb-4",children:[(0,x.jsxs)("h2",{children:[" ",n("BajajFinance:IBFFD1")]}),(0,x.jsx)("p",{children:n("BajajFinance:IBFFD2")}),(0,x.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,x.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:n("CTAFooter:InvestNow1")})})]}),(0,x.jsx)("div",{className:"col-lg-5 col-md-6 col-12",children:(0,x.jsx)("img",{src:s,alt:"",className:"img-fluid"})})]})}),(0,x.jsxs)("div",{className:"container features ourPartCaptital",children:[(0,x.jsx)("h2",{children:n("BajajFinance:IBFFD3")}),(0,x.jsxs)("div",{className:"row row justify-content-center mt-4",children:[(0,x.jsxs)("div",{className:"col-lg-4 col-md-6 mb-4",children:[(0,x.jsx)("img",{src:o,alt:""}),(0,x.jsx)("h4",{children:n("BajajFinance:IBFFD4")}),(0,x.jsxs)("p",{className:"small-text",children:[n("BajajFinance:IBFFD5")," "]})]}),(0,x.jsxs)("div",{className:"col-lg-4 col-md-6 mb-4",children:[(0,x.jsx)("img",{src:c,alt:""}),(0,x.jsx)("h4",{children:n("BajajFinance:IBFFD6")}),(0,x.jsxs)("p",{className:"small-text",children:[n("BajajFinance:IBFFD7")," "]})]}),(0,x.jsxs)("div",{className:"col-lg-4 col-md-6 mb-4",children:[(0,x.jsx)("img",{src:l,alt:""}),(0,x.jsx)("h4",{children:n("BajajFinance:IBFFD8")}),(0,x.jsxs)("p",{className:"small-text",children:[n("BajajFinance:IBFFD9")," "]})]})]})]}),(0,x.jsx)("div",{className:"bg-light ourPartCaptital",children:(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"text-center",children:n("BajajFinance:IBFFD10")}),(0,x.jsxs)("div",{className:"row row justify-content-center",children:[(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsx)("div",{className:"card mt-4",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:d.Z,alt:""}),(0,x.jsx)("h3",{children:n("BajajFinance:IBFFD11")})]})})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsx)("div",{className:"card mt-4",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:p.Z,alt:""}),(0,x.jsx)("h3",{children:n("BajajFinance:IBFFD12")})]})})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsx)("div",{className:"card mt-4",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:u.Z,alt:""}),(0,x.jsx)("h3",{children:n("BajajFinance:IBFFD13")})]})})})]})]})}),(0,x.jsx)("div",{className:"API-Section",children:(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"text-center",children:n("BajajFinance:IBFFD14")}),(0,x.jsx)("div",{className:"row row justify-content-lg-center",children:(0,x.jsx)("div",{className:"col col-lg-10",children:(0,x.jsx)(a.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"text-center",children:n("BajajFinance:IBFFD15")}),(0,x.jsxs)("div",{className:"row row justify-content-center",children:[(0,x.jsx)("div",{className:"col-lg-4 col-md-6 mt-4",children:(0,x.jsx)("div",{className:"card",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:i.Z,className:"check-svg"}),(0,x.jsx)("h4",{children:n("BajajFinance:IBFFD16")})]})})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-6 mt-4",children:(0,x.jsx)("div",{className:"card",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:i.Z,className:"check-svg"}),(0,x.jsx)("h4",{children:n("BajajFinance:IBFFD17")})]})})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-6 mt-4",children:(0,x.jsx)("div",{className:"card",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:i.Z,className:"check-svg"}),(0,x.jsx)("h4",{children:n("BajajFinance:IBFFD18")})]})})})]})]}),(0,x.jsx)("div",{className:"gardient-red",children:(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"text-white",children:n("BajajFinance:IBFFD19")}),(0,x.jsx)("p",{className:"text-white",children:n("BajajFinance:IBFFD20")})]})}),(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"mt-4",children:n("BajajFinance:IBFFD21")}),(0,x.jsx)("h3",{className:"mt-4",children:n("BajajFinance:IBFFD22")}),(0,x.jsx)("p",{children:n("BajajFinance:IBFFD23")}),(0,x.jsx)("h3",{children:n("BajajFinance:IBFFD24")}),(0,x.jsx)("p",{children:n("BajajFinance:IBFFD25")}),(0,x.jsx)("h3",{children:n("BajajFinance:IBFFD26")}),(0,x.jsx)("p",{children:n("BajajFinance:IBFFD27")}),(0,x.jsx)("h3",{children:n("BajajFinance:IBFFD28")}),(0,x.jsx)("p",{children:n("BajajFinance:IBFFD29")}),(0,x.jsx)("h3",{children:n("BajajFinance:IBFFD30")}),(0,x.jsx)("p",{children:n("BajajFinance:IBFFD31")})]})]})}}])&&g(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),N}(r.Component),C=(0,h.Z)()(N)},10164:function(e,n,t){var r=t(8081),a=t.n(r),i=t(23645),s=t.n(i)()(a());s.push([e.id,'.api-button{\r\n     background-color: #FFFFFF;\r\n     font-size: 18px;\r\n     font-family: "Montserrat";\r\n     font-weight: 600;\r\n     text-align: center;\r\n     color: #202D62;\r\n     line-height: 24px;\r\n     padding: 10px 32px;\r\n     float: right;\r\n     border-radius: 4px;\r\n}\r\n\r\n@media(max-width:768px){\r\n    .api-button{\r\n        float: right;\r\n        font-size: 12px;\r\n        padding: 4px;\r\n        border-radius: 4px;\r\n    }\r\n}\r\n\r\n.api h2{\r\n    text-align: center;\r\n    margin-bottom: 24px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.API-Section{\r\n    background: #E2E9F1;\r\n}\r\n\r\n#below-head{\r\n    background-color: #e9e9e9;\r\n    padding: 15px;\r\n}\r\n\r\n#below-head-values{\r\n    background-color: #C4DFF4;\r\n}\r\n\r\n.api-table>thead>tr>th {\r\n    padding: 15px;\r\n    background-color: #202D62;\r\n    color: white;\r\n}\r\n\r\n.api-table{\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.api-table>thead>tr>th{\r\n    line-height: inherit;\r\n}\r\n\r\n.table>thead>tr>th{\r\n    vertical-align: inherit;\r\n}\r\n\r\n.api-table>tbody>tr>th{\r\n    padding: 15px;\r\n}\r\n.api-table>tbody>tr>td{\r\n    padding: 15px;\r\n}\r\n\r\n.flex-container{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #202D62;\r\n    padding: 8px;\r\n    align-items: center;\r\n}\r\n.flex-container1{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #e9e9e9;\r\n    padding: 8px;\r\n}\r\n.flex-container2{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #C4DFF4;\r\n    padding: 8px;\r\n}\r\n.flex-item{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: white;\r\n}\r\n.flex-item1{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: #202D62;\r\n}\r\n\r\n@media (max-width:768px){\r\n    .flex-item{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .flex-item1{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.fg3{\r\n    flex-grow: 3;\r\n}\r\n\r\n.api-flex{\r\n    margin-bottom: 30px;\r\n}\r\n',""]),n.Z=s},27037:function(e,n,t){n.Z=t.p+"acc372b66bb3509f2c178168de1ad7d4.svg"},67580:function(e,n,t){n.Z=t.p+"78859b4572905010651001c8082fa35b.svg"},93998:function(e,n,t){n.Z=t.p+"169a7a782789ff7a387076c3cac91b6c.svg"},34964:function(e,n,t){n.Z=t.p+"13866396306567e675cf3885fee45414.svg"},75412:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),a=t(63366),i=t(94184),s=t.n(i),o=t(67294),c=t(76792),l=t(48358),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],p=o.forwardRef((function(e,n){var t=e.bsPrefix,i=e.active,p=e.children,u=e.className,h=e.as,f=void 0===h?"li":h,m=e.linkAs,j=void 0===m?l.Z:m,x=e.linkProps,b=e.href,y=e.title,g=e.target,v=(0,a.Z)(e,d),F=(0,c.vE)(t,"breadcrumb-item");return o.createElement(f,(0,r.Z)({ref:n},v,{className:s()(F,u,{active:i}),"aria-current":i?"page":void 0}),i?p:o.createElement(j,(0,r.Z)({},x,{href:b,title:y,target:g}),p))}));p.displayName="BreadcrumbItem",p.defaultProps={active:!1,linkProps:{}};var u=p,h=["bsPrefix","className","listProps","children","label","as"],f=o.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,l=e.listProps,d=e.children,p=e.label,u=e.as,f=void 0===u?"nav":u,m=(0,a.Z)(e,h),j=(0,c.vE)(t,"breadcrumb");return o.createElement(f,(0,r.Z)({"aria-label":p,className:i,ref:n},m),o.createElement("ol",(0,r.Z)({},l,{className:s()(j,null==l?void 0:l.className)}),d))}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}},f.Item=u;var m=f},26720:function(e,n,t){var r=t(93379),a=t.n(r),i=t(7795),s=t.n(i),o=t(90569),c=t.n(o),l=t(3565),d=t.n(l),p=t(19216),u=t.n(p),h=t(44589),f=t.n(h),m=t(10164),j={};j.styleTagTransform=f(),j.setAttributes=d(),j.insert=c().bind(null,"head"),j.domAPI=s(),j.insertStyleElement=u(),a()(m.Z,j),m.Z&&m.Z.locals&&m.Z.locals}}]);