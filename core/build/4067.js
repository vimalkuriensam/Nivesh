"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[4067],{71234:function(e,r,t){var n=t(67294),i=(t(26720),t(85893));function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,r){return o=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},o(e,r)}function c(e,r){if(r&&("object"===a(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var d=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&o(e,r)}(h,e);var r,t,n,a,d=(n=h,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=l(n);if(a){var t=l(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return c(this,e)});function h(){var e;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,h),(e=d.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return r=h,(t=[{key:"componentDidMount",value:function(){var e=this,r={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(r){e.setState({isLoaded:!0,items:r.ObjectResponse.SchemeDataList,MainTitle:r.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,r){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(r.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,r={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(r){e.setState({isLoaded:!0,items:r.ObjectResponse.SchemeDataList,MainTitle:r.ObjectResponse.TitleResponse})})).catch((function(r){console.log(r),e.setState({items:null})}))}},{key:"render",value:function(){var e=this,r=this.state,t=r.isLoaded,n=r.items;return r.MainTitle,t?(0,i.jsx)("div",{className:"API-Section",children:(0,i.jsx)("div",{className:"api",children:n&&n.map((function(r){return(0,i.jsxs)("div",{className:"api-flex",children:[(0,i.jsxs)("div",{className:"flex-container",children:[(0,i.jsx)("div",{className:"flex-item fg3",children:r.SchemeName}),(0,i.jsx)("div",{className:"flex-item",children:(0,i.jsx)("a",{href:"https://app.nivesh.com/Home/Index?SchemeCode=".concat(r.SchemeCode,"&selectedcategoryId=").concat(e.props.productCategoryId),target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,i.jsxs)("div",{className:"flex-container1",children:[(0,i.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,i.jsxs)("div",{className:"flex-container2",children:[(0,i.jsxs)("div",{className:"flex-item1",children:[r.OneYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[r.TwoYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[r.ThreeYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[r.FiveYearReturn,"%"]})]})]},r.SchemeCode)}))})}):(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:"Funds are Loading"})})}}])&&s(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),h}(n.Component);r.Z=d},24067:function(e,r,t){t.r(r),t.d(r,{BajajFinanceLtd:function(){return C},default:function(){return I}});var n=t(67294),i=t(71234),a=t(27037),s=t.p+"8a3c397a14874011a17fd8c21e14988d.png",o=t.p+"37ba3249f8aa7c2ad8921d4cea82a235.svg",c=t.p+"90c097c11b95037dcc7ef3754af7c84f.svg",l=t.p+"23de168175838aab73723c45d12a9790.svg",d=t(93998),h=t(34964),m=t(67580),p=t(28744),f=t(64593),u=t(75412),x=t(10682),b=t(85893);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function g(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function j(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,r){return v=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},v(e,r)}function S(e,r){if(r&&("object"===y(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function F(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var C=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&v(e,r)}(C,e);var r,t,n,p,y=(n=C,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=w(n);if(p){var t=w(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return S(this,e)});function C(){var e;g(this,C);for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return F(N(e=y.call.apply(y,[this].concat(t))),"data",{BajajFinance:{Title:"",ProductCategoryId:"2",DefaultProductId:""}}),e}return r=C,(t=[{key:"render",value:function(){var e=this.data.BajajFinance,r=this.props.t,t=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com/en/"},{"@type":"ListItem",position:2,name:"Fixed Deposit",item:"https://nivesh.com/en/fixed-deposit/"},{"@type":"ListItem",position:3,name:"Shriram Transport Finance Company Ltd",item:"https://nivesh.com/en/fixed-deposit/shriram-transport-finance-company-ltd/"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Is Shriram Transport Finance FD Safe?",acceptedAnswer:{"@type":"Answer",text:"The FAAA/ Stable by CRISIL and MAA+ rates Shriram Transport FD. It has a stable outlook by ICRA. This rating indicates high credit reliability and means safety. The Shriram transport finance FD rates are competitive and as per the industry standards."}},{"@type":"Question",name:"What is the Highest FD Rate for Shriram Transport Finance?",acceptedAnswer:{"@type":"Answer",text:"The highest rate by Shriram transport finance fd online is 7.48%. It also offers an additional 0.40% to senior citizens."}},{"@type":"Question",name:"What is the Tenure Range for Shriram Transport Finance Fixed Deposit?",acceptedAnswer:{"@type":"Answer",text:"The tenure range for Shriram Transport finance for Fixed Deposit is 12 months to 60 months. The minimum deposit for Shriram Transport Finance Fixed Deposit is Rs. 5000/-"}},{"@type":"Question",name:"What is the Minimum Deposit Amount for Shriram Transport Finance Fixed Deposit?",acceptedAnswer:{"@type":"Answer",text:"The minimum deposit amount for Shriram Transport Finance Fixed Deposit is Rs. 5000/- The Shriram Transport Finance is available in two different schemes Cumulative deposits and non-cumulative deposits."}},{"@type":"Question",name:"What is the Current FD Interest Rate in Shriram Transport Finance?",acceptedAnswer:{"@type":"Answer",text:"Shriram Transport Finance Fixed Deposits are available at attractive interest rates. The interest rate on Fixed deposit depends upon the tenure of the loan and deposit too."}}]}]);return(0,b.jsxs)("main",{children:[(0,b.jsxs)(f.q,{children:[(0,b.jsx)("meta",{charSet:"utf-8"}),(0,b.jsx)("title",{children:r("MetaTitle:mT58")}),(0,b.jsx)("meta",{name:"description",content:r("MetaDescription:mD58")}),(0,b.jsx)("link",{rel:"canonical",href:window.location.href}),(0,b.jsx)("script",{type:"application/ld+json",children:t})]}),(0,b.jsx)(x.Z,{children:(0,b.jsxs)(u.Z,{children:[(0,b.jsx)(u.Z.Item,{href:"/",children:r("BreadCrumb:bd-45")}),(0,b.jsx)(u.Z.Item,{href:"/fixed-deposit",children:r("BreadCrumb:bd-46")}),(0,b.jsx)(u.Z.Item,{active:!0,children:r("BreadCrumb:bd-50")})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsxs)("div",{className:"col-lg-7 col-md-6 col-12 mb-4",children:[(0,b.jsx)("h2",{children:r("Shriram:shriramFixed1")}),(0,b.jsx)("p",{children:r("Shriram:shriramFixed2")}),(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,b.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:r("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"col-lg-5 col-md-6",children:(0,b.jsx)("img",{src:s,alt:"",className:"img-fluid"})})]}),(0,b.jsxs)("div",{className:"container features ourPartCaptital",children:[(0,b.jsx)("h2",{children:r("Shriram:shriramFixed3")}),(0,b.jsxs)("div",{className:"row mt-4",children:[(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:o,alt:""}),(0,b.jsx)("h4",{children:r("Shriram:shriramFixed4")}),(0,b.jsx)("p",{className:"small-text",children:r("Shriram:shriramFixed5")})]}),(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:c,alt:""}),(0,b.jsx)("h4",{children:r("Shriram:shriramFixed6")}),(0,b.jsx)("p",{className:"small-text",children:r("Shriram:shriramFixed7")})]}),(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:l,alt:""}),(0,b.jsx)("h4",{children:r("Shriram:shriramFixed8")}),(0,b.jsx)("p",{className:"small-text",children:r("Shriram:shriramFixed9")})]})]}),(0,b.jsx)("div",{className:"text-center mt-4",children:(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",target:"_blank",className:"btn btn-primary",children:r("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"bg-light ourPartCaptital",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:r("Shriram:shriramFixed10")}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:d.Z,alt:""}),(0,b.jsx)("h3",{children:r("Shriram:shriramFixed11")})]})})}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:h.Z,alt:""}),(0,b.jsx)("h3",{children:r("Shriram:shriramFixed12")})]})})}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:m.Z,alt:""}),(0,b.jsx)("h3",{children:r("Shriram:shriramFixed13")})]})})})]})}),(0,b.jsx)("div",{className:"API-Section",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:r("Shriram:shriramFixed14")}),(0,b.jsx)("div",{className:"row row justify-content-lg-center",children:(0,b.jsx)("div",{className:"col col-lg-10",children:(0,b.jsx)(i.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:r("Shriram:shriramFixed15")}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:a.Z,alt:"",className:"check-svg"}),(0,b.jsx)("h4",{children:r("Shriram:shriramFixed16")})]})})}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:a.Z,alt:"",className:"check-svg"}),(0,b.jsx)("h4",{children:r("Shriram:shriramFixed17")})]})})}),(0,b.jsx)("div",{className:"col-lg-4 mt-4 mb-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:a.Z,alt:"",className:"check-svg"}),(0,b.jsx)("h4",{children:r("Shriram:shriramFixed18")})]})})}),(0,b.jsx)("div",{className:"text-center mt-4",children:(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",target:"_blank",className:"btn btn-primary",children:r("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"gardient-red",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-white",children:r("Shriram:shriramFixed19")}),(0,b.jsx)("p",{className:"text-white",children:r("Shriram:shriramFixed20")})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"mt-4",children:r("Shriram:shriramFixed21")}),(0,b.jsx)("h3",{className:"mt-4",children:r("Shriram:shriramFixed22")}),(0,b.jsx)("p",{children:r("Shriram:shriramFixed23")}),(0,b.jsx)("h3",{children:r("Shriram:shriramFixed24")}),(0,b.jsx)("p",{children:r("Shriram:shriramFixed25")}),(0,b.jsx)("h3",{children:r("Shriram:shriramFixed26")}),(0,b.jsx)("p",{children:r("Shriram:shriramFixed27")}),(0,b.jsx)("h3",{children:r("Shriram:shriramFixed28")}),(0,b.jsx)("p",{children:r("Shriram:shriramFixed29")}),(0,b.jsx)("h3",{children:r("Shriram:shriramFixed30")}),(0,b.jsx)("p",{children:r("Shriram:shriramFixed31")})]})]})}}])&&j(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),C}(n.Component),I=(0,p.Z)()(C)},10164:function(e,r,t){var n=t(8081),i=t.n(n),a=t(23645),s=t.n(a)()(i());s.push([e.id,'.api-button{\r\n     background-color: #FFFFFF;\r\n     font-size: 18px;\r\n     font-family: "Montserrat";\r\n     font-weight: 600;\r\n     text-align: center;\r\n     color: #202D62;\r\n     line-height: 24px;\r\n     padding: 10px 32px;\r\n     float: right;\r\n     border-radius: 4px;\r\n}\r\n\r\n@media(max-width:768px){\r\n    .api-button{\r\n        float: right;\r\n        font-size: 12px;\r\n        padding: 4px;\r\n        border-radius: 4px;\r\n    }\r\n}\r\n\r\n.api h2{\r\n    text-align: center;\r\n    margin-bottom: 24px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.API-Section{\r\n    background: #E2E9F1;\r\n}\r\n\r\n#below-head{\r\n    background-color: #e9e9e9;\r\n    padding: 15px;\r\n}\r\n\r\n#below-head-values{\r\n    background-color: #C4DFF4;\r\n}\r\n\r\n.api-table>thead>tr>th {\r\n    padding: 15px;\r\n    background-color: #202D62;\r\n    color: white;\r\n}\r\n\r\n.api-table{\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.api-table>thead>tr>th{\r\n    line-height: inherit;\r\n}\r\n\r\n.table>thead>tr>th{\r\n    vertical-align: inherit;\r\n}\r\n\r\n.api-table>tbody>tr>th{\r\n    padding: 15px;\r\n}\r\n.api-table>tbody>tr>td{\r\n    padding: 15px;\r\n}\r\n\r\n.flex-container{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #202D62;\r\n    padding: 8px;\r\n    align-items: center;\r\n}\r\n.flex-container1{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #e9e9e9;\r\n    padding: 8px;\r\n}\r\n.flex-container2{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #C4DFF4;\r\n    padding: 8px;\r\n}\r\n.flex-item{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: white;\r\n}\r\n.flex-item1{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: #202D62;\r\n}\r\n\r\n@media (max-width:768px){\r\n    .flex-item{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .flex-item1{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.fg3{\r\n    flex-grow: 3;\r\n}\r\n\r\n.api-flex{\r\n    margin-bottom: 30px;\r\n}\r\n',""]),r.Z=s},27037:function(e,r,t){r.Z=t.p+"acc372b66bb3509f2c178168de1ad7d4.svg"},67580:function(e,r,t){r.Z=t.p+"78859b4572905010651001c8082fa35b.svg"},93998:function(e,r,t){r.Z=t.p+"169a7a782789ff7a387076c3cac91b6c.svg"},34964:function(e,r,t){r.Z=t.p+"13866396306567e675cf3885fee45414.svg"},75412:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(87462),i=t(63366),a=t(94184),s=t.n(a),o=t(67294),c=t(76792),l=t(48358),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],h=o.forwardRef((function(e,r){var t=e.bsPrefix,a=e.active,h=e.children,m=e.className,p=e.as,f=void 0===p?"li":p,u=e.linkAs,x=void 0===u?l.Z:u,b=e.linkProps,y=e.href,g=e.title,j=e.target,v=(0,i.Z)(e,d),S=(0,c.vE)(t,"breadcrumb-item");return o.createElement(f,(0,n.Z)({ref:r},v,{className:s()(S,m,{active:a}),"aria-current":a?"page":void 0}),a?h:o.createElement(x,(0,n.Z)({},b,{href:y,title:g,target:j}),h))}));h.displayName="BreadcrumbItem",h.defaultProps={active:!1,linkProps:{}};var m=h,p=["bsPrefix","className","listProps","children","label","as"],f=o.forwardRef((function(e,r){var t=e.bsPrefix,a=e.className,l=e.listProps,d=e.children,h=e.label,m=e.as,f=void 0===m?"nav":m,u=(0,i.Z)(e,p),x=(0,c.vE)(t,"breadcrumb");return o.createElement(f,(0,n.Z)({"aria-label":h,className:a,ref:r},u),o.createElement("ol",(0,n.Z)({},l,{className:s()(x,null==l?void 0:l.className)}),d))}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}},f.Item=m;var u=f},26720:function(e,r,t){var n=t(93379),i=t.n(n),a=t(7795),s=t.n(a),o=t(90569),c=t.n(o),l=t(3565),d=t.n(l),h=t(19216),m=t.n(h),p=t(44589),f=t.n(p),u=t(10164),x={};x.styleTagTransform=f(),x.setAttributes=d(),x.insert=c().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=m(),i()(u.Z,x),u.Z&&u.Z.locals&&u.Z.locals}}]);