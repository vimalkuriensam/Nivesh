"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[7356],{71234:function(e,t,r){var n=r(67294),i=(r(26720),r(85893));function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function c(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(h,e);var t,r,n,s,d=(n=h,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(s){var r=l(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return c(this,e)});function h(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(e=d.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return t=h,(r=[{key:"componentDidMount",value:function(){var e=this,t={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",r).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.ObjectResponse.SchemeDataList,MainTitle:t.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,t){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(t.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,t={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",r).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.ObjectResponse.SchemeDataList,MainTitle:t.ObjectResponse.TitleResponse})})).catch((function(t){console.log(t),e.setState({items:null})}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.isLoaded,n=t.items;return t.MainTitle,r?(0,i.jsx)("div",{className:"API-Section",children:(0,i.jsx)("div",{className:"api",children:n&&n.map((function(t){return(0,i.jsxs)("div",{className:"api-flex",children:[(0,i.jsxs)("div",{className:"flex-container",children:[(0,i.jsx)("div",{className:"flex-item fg3",children:t.SchemeName}),(0,i.jsx)("div",{className:"flex-item",children:(0,i.jsx)("a",{href:"https://app.nivesh.com/Home/Index?SchemeCode=".concat(t.SchemeCode,"&selectedcategoryId=").concat(e.props.productCategoryId),target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,i.jsxs)("div",{className:"flex-container1",children:[(0,i.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,i.jsxs)("div",{className:"flex-container2",children:[(0,i.jsxs)("div",{className:"flex-item1",children:[t.OneYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[t.TwoYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[t.ThreeYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[t.FiveYearReturn,"%"]})]})]},t.SchemeCode)}))})}):(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:"Funds are Loading"})})}}])&&a(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),h}(n.Component);t.Z=d},37356:function(e,t,r){r.r(t),r.d(t,{BajajFinanceLtd:function(){return w},default:function(){return H}});var n=r(67294),i=r(71234),s=r(27037),a=r.p+"0da2067536545e006a73d8c2e12e3d76.png",o=r.p+"169a7a782789ff7a387076c3cac91b6c.svg",c=r.p+"b681f7fddb84840e2c6069e4e0afbf6b.svg",l=r.p+"ef5a206ba520863722afdacc0a21c09e.svg",d=r(93998),h=r(34964),p=r(67580),f=r(28744),u=r(64593),m=r(75412),x=r(10682),b=r(85893);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function D(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(w,e);var t,r,n,f,C=(n=w,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(f){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return D(this,e)});function w(){var e;y(this,w);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return N(F(e=C.call.apply(C,[this].concat(r))),"data",{BajajFinance:{Title:"",ProductCategoryId:"2",DefaultProductId:""}}),e}return t=w,(r=[{key:"render",value:function(){var e=this.data.BajajFinance,t=this.props.t,r=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com/en/"},{"@type":"ListItem",position:2,name:"Fixed Deposit",item:"https://nivesh.com/en/fixed-deposit/"},{"@type":"ListItem",position:3,name:"HDFC Ltd.",item:"https://nivesh.com/en/fixed-deposit/hdfc-ltd/"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What is the Highest Rate on HDFC Corporate Fixed Deposit Schemes?",acceptedAnswer:{"@type":"Answer",text:"According to HDFC Fixed Deposit plan, the highest rate of interest on Fixed Deposits is 6.5% for regular citizens. For senior citizens, the highest FD rate is 6.75%."}},{"@type":"Question",name:"What is the Eligibility for HDFC 5-year Tax Saving Deposit?",acceptedAnswer:{"@type":"Answer",text:"The eligibility criteria for HDFC Tax Saving Deposit schemes are nominal. An investor must be a resident individual to be eligible for HDFC 5-year Tax Saving Deposit."}},{"@type":"Question",name:"What is the Eligibility for Regular HDFC FD Schemes?",acceptedAnswer:{"@type":"Answer",text:"The individuals or groups eligible for regular HDFC FD schemes includes:\n              Residents\n              Hindu undivided families\n              Sole proprietorship firms\n              Partnership firms\n              Limited companies\n              Trust accounts\n              HDFC has one of the most streamlined and organized features for HDFC Fixed Deposit renewal online."}},{"@type":"Question",name:"What are the Documents Required for the HDFC Fixed Deposit?",acceptedAnswer:{"@type":"Answer",text:'The documents required include:\n              Recent photograph\n              KYC documents\n              Individual & Company proofs:\n              PAN card\n              Aadhaar Card\n              Passport\n              Driving License\n              Voter’s ID\n              Partnership proofs:\n              Incorporating certificate\n              Authorized signatories ID proofs\n              Partnership Deed\n              Authorized signatories\' signatures\n              Hindu Undivided Family:\n              Self-attested PAN card\n              HUF declaration deed\n              HUF’s Bank Statement"\n                  }\n                },{\n                  "@type": "Question",\n                  "name": "How to Renew HDFC Fixed Deposit Online?",\n                  "acceptedAnswer": {\n                    "@type": "Answer",\n                    "text": "An investor can renew their Fixed Deposit post the completion of its tenure. To do the same, one needs to visit the nearest branch or official website of HDFC bank. It is simple to renew the HDFC Fixed Deposit online. One needs to fill a Fixed Deposit renewal form, provide the necessary details and click on the renewal button. If you are having any difficulty in renewing your HDFC Fixed Deposit online then, should visit the nearest branch of HDFC. The competent staff of HDFC will guide you with the process and shall renew your Fixed Deposit too.'}}]}]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(u.q,{children:[(0,b.jsx)("meta",{charSet:"utf-8"}),(0,b.jsx)("title",{children:t("MetaTitle:mT60")}),(0,b.jsx)("meta",{name:"description",content:t("MetaDescription:mD60")}),(0,b.jsx)("link",{rel:"canonical",href:window.location.href}),(0,b.jsx)("script",{type:"application/ld+json",children:r})]}),(0,b.jsx)(x.Z,{children:(0,b.jsxs)(m.Z,{children:[(0,b.jsx)(m.Z.Item,{href:"/",children:t("BreadCrumb:bd-45")}),(0,b.jsx)(m.Z.Item,{href:"/fixed-deposit",children:t("BreadCrumb:bd-46")}),(0,b.jsx)(m.Z.Item,{active:!0,children:t("BreadCrumb:bd-48")})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsxs)("div",{className:"col-lg-7 col-md-6 col-12 mb-4",children:[(0,b.jsx)("h2",{children:t("HDFCLtd:hDFC1")}),(0,b.jsx)("p",{children:t("HDFCLtd:hDFC2")}),(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,b.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:t("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"col-lg-5 xol-md-6",children:(0,b.jsx)("img",{src:a,alt:"",className:"img-fluid"})})]}),(0,b.jsxs)("div",{className:"container features ourPartCaptital",children:[(0,b.jsx)("h2",{children:t("HDFCLtd:hDFC3")}),(0,b.jsxs)("div",{className:"row mt-4",children:[(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:o,alt:""}),(0,b.jsx)("h4",{children:t("HDFCLtd:hDFC4")}),(0,b.jsx)("p",{className:"small-text",children:t("HDFCLtd:hDFC5")})]}),(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:c,alt:""}),(0,b.jsx)("h4",{children:t("HDFCLtd:hDFC6")}),(0,b.jsx)("p",{className:"small-text",children:t("HDFCLtd:hDFC7")})]}),(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:l,alt:""}),(0,b.jsx)("h4",{children:t("HDFCLtd:hDFC8")}),(0,b.jsx)("p",{className:"small-text",children:t("HDFCLtd:hDFC9")})]})]}),(0,b.jsx)("div",{className:"text-center mt-4",children:(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",target:"_blank",className:"btn btn-primary",children:t("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"bg-light ourPartCaptital",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:t("HDFCLtd:hDFC10")}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:d.Z,alt:""}),(0,b.jsx)("h3",{children:t("HDFCLtd:hDFC11")})]})})}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:h.Z,alt:""}),(0,b.jsx)("h3",{children:t("HDFCLtd:hDFC12")})]})})}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:p.Z,alt:""}),(0,b.jsx)("h3",{children:t("HDFCLtd:hDFC13")})]})})})]})}),(0,b.jsx)("div",{className:"API-Section",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:t("HDFCLtd:hDFC14")}),(0,b.jsx)("div",{className:"row row justify-content-lg-center",children:(0,b.jsx)("div",{className:"col col-lg-10",children:(0,b.jsx)(i.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:t("HDFCLtd:hDFC15")}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:s.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:t("HDFCLtd:hDFC16")})]})})}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:s.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:t("HDFCLtd:hDFC17")})]})})}),(0,b.jsx)("div",{className:"col-lg-4 mt-4 mb-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:s.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:t("HDFCLtd:hDFC18")})]})})}),(0,b.jsx)("div",{className:"text-center mt-4",children:(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",target:"_blank",className:"btn btn-primary",children:t("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"gardient-red",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-white",children:t("HDFCLtd:hDFC54")}),(0,b.jsx)("p",{className:"text-white",children:t("HDFCLtd:hDFC55")})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"mt-4",children:t("HDFCLtd:hDFC19")}),(0,b.jsx)("h3",{className:"mt-4",children:t("HDFCLtd:hDFC20")}),(0,b.jsx)("p",{children:t("HDFCLtd:hDFC21")}),(0,b.jsx)("h3",{children:t("HDFCLtd:hDFC22")}),(0,b.jsx)("p",{children:t("HDFCLtd:hDFC23")}),(0,b.jsx)("h3",{children:t("HDFCLtd:hDFC24")}),(0,b.jsxs)("p",{children:[t("HDFCLtd:hDFC25"),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:t("HDFCLtd:hDFC26")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC27")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC28")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC29")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC30")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC31")})]}),t("HDFCLtd:hDFC32")]}),(0,b.jsx)("h3",{children:t("HDFCLtd:hDFC33")}),(0,b.jsxs)("p",{children:[t("HDFCLtd:hDFC34"),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC35")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC36")}),(0,b.jsx)("h4",{children:t("HDFCLtd:hDFC37")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC38")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC39")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC40")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC41")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC42")}),(0,b.jsx)("h4",{children:t("HDFCLtd:hDFC43")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC44")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC45")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC46")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC47")}),(0,b.jsx)("h4",{children:t("HDFCLtd:hDFC48")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC49")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC50")}),(0,b.jsx)("li",{children:t("HDFCLtd:hDFC51")})]}),(0,b.jsx)("h3",{children:t("HDFCLtd:hDFC52")}),(0,b.jsx)("p",{children:t("HDFCLtd:hDFC53")})]})]})}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),w}(n.Component),H=(0,f.Z)()(w)},10164:function(e,t,r){var n=r(8081),i=r.n(n),s=r(23645),a=r.n(s)()(i());a.push([e.id,'.api-button{\r\n     background-color: #FFFFFF;\r\n     font-size: 18px;\r\n     font-family: "Montserrat";\r\n     font-weight: 600;\r\n     text-align: center;\r\n     color: #202D62;\r\n     line-height: 24px;\r\n     padding: 10px 32px;\r\n     float: right;\r\n     border-radius: 4px;\r\n}\r\n\r\n@media(max-width:768px){\r\n    .api-button{\r\n        float: right;\r\n        font-size: 12px;\r\n        padding: 4px;\r\n        border-radius: 4px;\r\n    }\r\n}\r\n\r\n.api h2{\r\n    text-align: center;\r\n    margin-bottom: 24px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.API-Section{\r\n    background: #E2E9F1;\r\n}\r\n\r\n#below-head{\r\n    background-color: #e9e9e9;\r\n    padding: 15px;\r\n}\r\n\r\n#below-head-values{\r\n    background-color: #C4DFF4;\r\n}\r\n\r\n.api-table>thead>tr>th {\r\n    padding: 15px;\r\n    background-color: #202D62;\r\n    color: white;\r\n}\r\n\r\n.api-table{\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.api-table>thead>tr>th{\r\n    line-height: inherit;\r\n}\r\n\r\n.table>thead>tr>th{\r\n    vertical-align: inherit;\r\n}\r\n\r\n.api-table>tbody>tr>th{\r\n    padding: 15px;\r\n}\r\n.api-table>tbody>tr>td{\r\n    padding: 15px;\r\n}\r\n\r\n.flex-container{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #202D62;\r\n    padding: 8px;\r\n    align-items: center;\r\n}\r\n.flex-container1{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #e9e9e9;\r\n    padding: 8px;\r\n}\r\n.flex-container2{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #C4DFF4;\r\n    padding: 8px;\r\n}\r\n.flex-item{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: white;\r\n}\r\n.flex-item1{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: #202D62;\r\n}\r\n\r\n@media (max-width:768px){\r\n    .flex-item{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .flex-item1{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.fg3{\r\n    flex-grow: 3;\r\n}\r\n\r\n.api-flex{\r\n    margin-bottom: 30px;\r\n}\r\n',""]),t.Z=a},27037:function(e,t,r){t.Z=r.p+"acc372b66bb3509f2c178168de1ad7d4.svg"},67580:function(e,t,r){t.Z=r.p+"78859b4572905010651001c8082fa35b.svg"},93998:function(e,t,r){t.Z=r.p+"169a7a782789ff7a387076c3cac91b6c.svg"},34964:function(e,t,r){t.Z=r.p+"13866396306567e675cf3885fee45414.svg"},75412:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(87462),i=r(63366),s=r(94184),a=r.n(s),o=r(67294),c=r(76792),l=r(48358),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],h=o.forwardRef((function(e,t){var r=e.bsPrefix,s=e.active,h=e.children,p=e.className,f=e.as,u=void 0===f?"li":f,m=e.linkAs,x=void 0===m?l.Z:m,b=e.linkProps,C=e.href,y=e.title,j=e.target,g=(0,i.Z)(e,d),D=(0,c.vE)(r,"breadcrumb-item");return o.createElement(u,(0,n.Z)({ref:t},g,{className:a()(D,p,{active:s}),"aria-current":s?"page":void 0}),s?h:o.createElement(x,(0,n.Z)({},b,{href:C,title:y,target:j}),h))}));h.displayName="BreadcrumbItem",h.defaultProps={active:!1,linkProps:{}};var p=h,f=["bsPrefix","className","listProps","children","label","as"],u=o.forwardRef((function(e,t){var r=e.bsPrefix,s=e.className,l=e.listProps,d=e.children,h=e.label,p=e.as,u=void 0===p?"nav":p,m=(0,i.Z)(e,f),x=(0,c.vE)(r,"breadcrumb");return o.createElement(u,(0,n.Z)({"aria-label":h,className:s,ref:t},m),o.createElement("ol",(0,n.Z)({},l,{className:a()(x,null==l?void 0:l.className)}),d))}));u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}},u.Item=p;var m=u},26720:function(e,t,r){var n=r(93379),i=r.n(n),s=r(7795),a=r.n(s),o=r(90569),c=r.n(o),l=r(3565),d=r.n(l),h=r(19216),p=r.n(h),f=r(44589),u=r.n(f),m=r(10164),x={};x.styleTagTransform=u(),x.setAttributes=d(),x.insert=c().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=p(),i()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals}}]);