"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[2109],{71234:function(e,n,r){var t=r(67294),a=(r(26720),r(85893));function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function o(e,n){return o=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},o(e,n)}function c(e,n){if(n&&("object"===i(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var l=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&o(e,n)}(h,e);var n,r,t,i,l=(t=h,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=d(t);if(i){var r=d(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return c(this,e)});function h(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,h),(e=l.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return n=h,(r=[{key:"componentDidMount",value:function(){var e=this,n={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",r).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,items:n.ObjectResponse.SchemeDataList,MainTitle:n.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,n){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(n.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,n={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",r).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,items:n.ObjectResponse.SchemeDataList,MainTitle:n.ObjectResponse.TitleResponse})})).catch((function(n){console.log(n),e.setState({items:null})}))}},{key:"render",value:function(){var e=this,n=this.state,r=n.isLoaded,t=n.items;return n.MainTitle,r?(0,a.jsx)("div",{className:"API-Section",children:(0,a.jsx)("div",{className:"api",children:t&&t.map((function(n){return(0,a.jsxs)("div",{className:"api-flex",children:[(0,a.jsxs)("div",{className:"flex-container",children:[(0,a.jsx)("div",{className:"flex-item fg3",children:n.SchemeName}),(0,a.jsx)("div",{className:"flex-item",children:(0,a.jsx)("a",{href:"https://app.nivesh.com/Home/Index?SchemeCode=".concat(n.SchemeCode,"&selectedcategoryId=").concat(e.props.productCategoryId),target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,a.jsxs)("div",{className:"flex-container1",children:[(0,a.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,a.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,a.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,a.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,a.jsxs)("div",{className:"flex-container2",children:[(0,a.jsxs)("div",{className:"flex-item1",children:[n.OneYearReturn,"%"]}),(0,a.jsxs)("div",{className:"flex-item1",children:[n.TwoYearReturn,"%"]}),(0,a.jsxs)("div",{className:"flex-item1",children:[n.ThreeYearReturn,"%"]}),(0,a.jsxs)("div",{className:"flex-item1",children:[n.FiveYearReturn,"%"]})]})]},n.SchemeCode)}))})}):(0,a.jsx)("div",{children:(0,a.jsx)("h1",{children:"Funds are Loading"})})}}])&&s(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),h}(t.Component);n.Z=l},22109:function(e,n,r){r.r(n),r.d(n,{BajajFinanceLtd:function(){return I},default:function(){return P}});var t=r(67294),a=r(71234),i=r(27037),s=r.p+"aee2a54c415c68ecad60b6e2c3596e6e.png",o=r.p+"5bd003999a28d0cf78721887fbb490e4.svg",c=r.p+"dcd2a5a41084096bbaa841102ed5cbdb.svg",d=r.p+"5e9e6254b5d06b14d774173f25150510.svg",l=r(93998),h=r(34964),p=r(67580),m=r(35848),u=r(64593),f=r(75412),x=r(10682),b=r(85893);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function j(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function v(e,n){return v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},v(e,n)}function w(e,n){if(n&&("object"===y(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function C(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var I=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&v(e,n)}(I,e);var n,r,t,m,y=(t=I,m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=M(t);if(m){var r=M(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return w(this,e)});function I(){var e;j(this,I);for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return C(N(e=y.call.apply(y,[this].concat(r))),"data",{BajajFinance:{Title:"",ProductCategoryId:"2",DefaultProductId:""}}),e}return n=I,(r=[{key:"render",value:function(){var e=this.data.BajajFinance,n=this.props.t,r=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com/en/"},{"@type":"ListItem",position:2,name:"Fixed Deposit",item:"https://nivesh.com/en/fixed-deposit/"},{"@type":"ListItem",position:3,name:"Mahindra Finance Limited",item:"https://nivesh.com/en/fixed-deposit/mahindra-finance-limited/"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Is Mahindra Finance Safe for FD?",acceptedAnswer:{"@type":"Answer",text:"Yes, Mahindra Finance is safe for FD. It has FAAA Crisil Rating. The rating implies a high level of safety. Moreover, the Mahindra Finance FD scheme is strategic with good interest rates."}},{"@type":"Question",name:"How Good is the Mahindra Finance Fixed Deposit?",acceptedAnswer:{"@type":"Answer",text:"It is advantageous to invest your money in the form of a Fixed Deposit at Mahindra Finance. The Mahindra finance Fixed Deposit rates are competitive and customer-friendly."}},{"@type":"Question",name:"How is the Payment of Interest Made on Mahindra FD?",acceptedAnswer:{"@type":"Answer",text:"The payment of interest in Mahira finance FD online is made through online means. Your interest gets credited to your account annually."}},{"@type":"Question",name:"What is the Renewal/Repayment of Deposits Procedure?",acceptedAnswer:{"@type":"Answer",text:"You can easily renew or repay the deposits at Mahindra Finance. All you need to do is just fill up the online form and submit the necessary documents along with it."}},{"@type":"Question",name:"What is the Eligibility Criteria for Mahindra Finance Fixed Deposit?",acceptedAnswer:{"@type":"Answer",text:"Like every non-banking financial institution, Mahindra Finance also has some set criteria for Fixed Deposits. People that eligible to open a Fixed Deposit at Mahindra Finance include:\n\n              Single individuals\n              NRIs\n              Companies\n              Family Trusts\n              HUFs\n              Charitable Trusts\n              NGOs\n              Sole Proprietorship\n              Clubs\n              Societies\n              Foundations\n              The documentation required varies depending upon the nature of investors. Generally, one needs to submit identity proof, address proof, PAN Card, Certification of incorporation, cancel cheque leaf, etc. An investor can easily open a Mahindra Finance Fixed Deposit online. All you need to do is just download the form from the website. You can also submit an inquiry or call back form on the official website of Mahindra Finance to know the exact procedure for opening the Fixed Deposit."}},{"@type":"Question",name:"How Can I Open Mahindra Finance FD Online?",acceptedAnswer:{"@type":"Answer",text:"It is easy to open FD online in Mahindra Finance. You can check your eligibility online and fill the online application form for a Fixed Deposit. You can also request a call to understand the exact process of FD opening."}}]}]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(u.q,{children:[(0,b.jsx)("meta",{charSet:"utf-8"}),(0,b.jsx)("title",{children:n("MetaTitle:mT59")}),(0,b.jsx)("meta",{name:"description",content:n("MetaDescription:mD59")}),(0,b.jsx)("link",{rel:"canonical",href:window.location.href}),(0,b.jsx)("script",{type:"application/ld+json",children:r})]}),(0,b.jsx)(x.Z,{children:(0,b.jsxs)(f.Z,{children:[(0,b.jsx)(f.Z.Item,{href:"/",children:n("BreadCrumb:bd-45")}),(0,b.jsx)(f.Z.Item,{href:"/fixed-deposit",children:n("BreadCrumb:bd-46")}),(0,b.jsx)(f.Z.Item,{active:!0,children:n("BreadCrumb:bd-52")})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsxs)("div",{className:"col-lg-7 col-md-6 col-12 mb-4",children:[(0,b.jsx)("h2",{children:n("Mahindra:mahindra1")}),(0,b.jsx)("p",{children:n("Mahindra:mahindra2")}),(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,b.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:n("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"col-lg-5 col-md-6",children:(0,b.jsx)("img",{src:s,alt:"",className:"img-fluid"})})]}),(0,b.jsxs)("div",{className:"container features ourPartCaptital",children:[(0,b.jsx)("h2",{children:n("Mahindra:mahindra3")}),(0,b.jsxs)("div",{className:"row mt-4",children:[(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:o,alt:""}),(0,b.jsx)("h4",{children:n("Mahindra:mahindra4")}),(0,b.jsx)("p",{className:"small-text",children:n("Mahindra:mahindra5")})]}),(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:c,alt:""}),(0,b.jsx)("h4",{children:n("Mahindra:mahindra6")}),(0,b.jsx)("p",{className:"small-text",children:n("Mahindra:mahindra7")})]}),(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:d,alt:""}),(0,b.jsx)("h4",{children:n("Mahindra:mahindra8")}),(0,b.jsx)("p",{className:"small-text",children:n("Mahindra:mahindra9")})]})]})]}),(0,b.jsx)("div",{className:"bg-light ourPartCaptital",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:n("Mahindra:mahindra10")}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:l.Z,alt:""}),(0,b.jsx)("h3",{children:n("Mahindra:mahindra11")})]})})}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:h.Z,alt:""}),(0,b.jsx)("h3",{children:n("Mahindra:mahindra12")})]})})}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:p.Z,alt:""}),(0,b.jsx)("h3",{children:n("Mahindra:mahindra13")})]})})})]})}),(0,b.jsx)("div",{className:"API-Section",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:n("Mahindra:mahindra14")}),(0,b.jsx)("div",{className:"row row justify-content-lg-center",children:(0,b.jsx)("div",{className:"col col-lg-10",children:(0,b.jsx)(a.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:n("Mahindra:mahindra15")}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:i.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:n("Mahindra:mahindra16")})]})})}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:i.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:n("Mahindra:mahindra17")})]})})}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:i.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:n("Mahindra:mahindra18")})]})})})]}),(0,b.jsx)("div",{className:"gardient-red",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-white",children:n("Mahindra:mahindra19")}),(0,b.jsx)("p",{className:"text-white",children:n("Mahindra:mahindra20")})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"mt-4",children:n("Mahindra:mahindra21")}),(0,b.jsx)("h3",{className:"mt-4",children:n("Mahindra:mahindra22")}),(0,b.jsx)("p",{children:n("Mahindra:mahindra23")}),(0,b.jsx)("h3",{children:n("Mahindra:mahindra24")}),(0,b.jsx)("p",{children:n("Mahindra:mahindra25")}),(0,b.jsx)("h3",{children:n("Mahindra:mahindra26")}),(0,b.jsx)("p",{children:n("Mahindra:mahindra27")}),(0,b.jsx)("h3",{children:n("Mahindra:mahindra28")}),(0,b.jsx)("p",{children:n("Mahindra:mahindra29")}),(0,b.jsx)("h3",{children:n("Mahindra:mahindra30")}),(0,b.jsx)("p",{children:n("Mahindra:mahindra31")}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:n("Mahindra:mahindra32")}),(0,b.jsx)("li",{children:n("Mahindra:mahindra33")}),(0,b.jsx)("li",{children:n("Mahindra:mahindra34")}),(0,b.jsx)("li",{children:n("Mahindra:mahindra35")}),(0,b.jsx)("li",{children:n("Mahindra:mahindra36")}),(0,b.jsx)("li",{children:n("Mahindra:mahindra37")}),(0,b.jsx)("li",{children:n("Mahindra:mahindra38")}),(0,b.jsx)("li",{children:n("Mahindra:mahindra39")}),(0,b.jsx)("li",{children:n("Mahindra:mahindra40")}),(0,b.jsx)("li",{children:n("Mahindra:mahindra41")}),(0,b.jsx)("li",{children:n("Mahindra:mahindra42")})]}),(0,b.jsx)("p",{children:n("Mahindra:mahindra43")}),(0,b.jsx)("h3",{children:n("Mahindra:mahindra44")}),(0,b.jsx)("p",{children:n("Mahindra:mahindra45")})]})]})}}])&&g(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),I}(t.Component),P=(0,m.Z)()(I)},10164:function(e,n,r){var t=r(8081),a=r.n(t),i=r(23645),s=r.n(i)()(a());s.push([e.id,'.api-button{\r\n     background-color: #FFFFFF;\r\n     font-size: 18px;\r\n     font-family: "Montserrat";\r\n     font-weight: 600;\r\n     text-align: center;\r\n     color: #202D62;\r\n     line-height: 24px;\r\n     padding: 10px 32px;\r\n     float: right;\r\n     border-radius: 4px;\r\n}\r\n\r\n@media(max-width:768px){\r\n    .api-button{\r\n        float: right;\r\n        font-size: 12px;\r\n        padding: 4px;\r\n        border-radius: 4px;\r\n    }\r\n}\r\n\r\n.api h2{\r\n    text-align: center;\r\n    margin-bottom: 24px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.API-Section{\r\n    background: #E2E9F1;\r\n}\r\n\r\n#below-head{\r\n    background-color: #e9e9e9;\r\n    padding: 15px;\r\n}\r\n\r\n#below-head-values{\r\n    background-color: #C4DFF4;\r\n}\r\n\r\n.api-table>thead>tr>th {\r\n    padding: 15px;\r\n    background-color: #202D62;\r\n    color: white;\r\n}\r\n\r\n.api-table{\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.api-table>thead>tr>th{\r\n    line-height: inherit;\r\n}\r\n\r\n.table>thead>tr>th{\r\n    vertical-align: inherit;\r\n}\r\n\r\n.api-table>tbody>tr>th{\r\n    padding: 15px;\r\n}\r\n.api-table>tbody>tr>td{\r\n    padding: 15px;\r\n}\r\n\r\n.flex-container{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #202D62;\r\n    padding: 8px;\r\n    align-items: center;\r\n}\r\n.flex-container1{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #e9e9e9;\r\n    padding: 8px;\r\n}\r\n.flex-container2{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #C4DFF4;\r\n    padding: 8px;\r\n}\r\n.flex-item{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: white;\r\n}\r\n.flex-item1{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: #202D62;\r\n}\r\n\r\n@media (max-width:768px){\r\n    .flex-item{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .flex-item1{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.fg3{\r\n    flex-grow: 3;\r\n}\r\n\r\n.api-flex{\r\n    margin-bottom: 30px;\r\n}\r\n',""]),n.Z=s},27037:function(e,n,r){n.Z=r.p+"acc372b66bb3509f2c178168de1ad7d4.svg"},67580:function(e,n,r){n.Z=r.p+"78859b4572905010651001c8082fa35b.svg"},93998:function(e,n,r){n.Z=r.p+"169a7a782789ff7a387076c3cac91b6c.svg"},34964:function(e,n,r){n.Z=r.p+"13866396306567e675cf3885fee45414.svg"},75412:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(87462),a=r(63366),i=r(94184),s=r.n(i),o=r(67294),c=r(76792),d=r(48358),l=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],h=o.forwardRef((function(e,n){var r=e.bsPrefix,i=e.active,h=e.children,p=e.className,m=e.as,u=void 0===m?"li":m,f=e.linkAs,x=void 0===f?d.Z:f,b=e.linkProps,y=e.href,j=e.title,g=e.target,v=(0,a.Z)(e,l),w=(0,c.vE)(r,"breadcrumb-item");return o.createElement(u,(0,t.Z)({ref:n},v,{className:s()(w,p,{active:i}),"aria-current":i?"page":void 0}),i?h:o.createElement(x,(0,t.Z)({},b,{href:y,title:j,target:g}),h))}));h.displayName="BreadcrumbItem",h.defaultProps={active:!1,linkProps:{}};var p=h,m=["bsPrefix","className","listProps","children","label","as"],u=o.forwardRef((function(e,n){var r=e.bsPrefix,i=e.className,d=e.listProps,l=e.children,h=e.label,p=e.as,u=void 0===p?"nav":p,f=(0,a.Z)(e,m),x=(0,c.vE)(r,"breadcrumb");return o.createElement(u,(0,t.Z)({"aria-label":h,className:i,ref:n},f),o.createElement("ol",(0,t.Z)({},d,{className:s()(x,null==d?void 0:d.className)}),l))}));u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}},u.Item=p;var f=u},26720:function(e,n,r){var t=r(93379),a=r.n(t),i=r(7795),s=r.n(i),o=r(90569),c=r.n(o),d=r(3565),l=r.n(d),h=r(19216),p=r.n(h),m=r(44589),u=r.n(m),f=r(10164),x={};x.styleTagTransform=u(),x.setAttributes=l(),x.insert=c().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=p(),a()(f.Z,x),f.Z&&f.Z.locals&&f.Z.locals}}]);