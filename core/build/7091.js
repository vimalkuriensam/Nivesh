"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[7091],{71234:function(e,t,i){var n=i(67294),r=i(85893);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function o(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(h,e);var t,i,n,s,d=(n=h,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(s){var i=l(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return o(this,e)});function h(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(e=d.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return t=h,(i=[{key:"componentDidMount",value:function(){var e=this,t={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",i).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.ObjectResponse.SchemeDataList,MainTitle:t.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,t){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(t.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,t={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",i).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.ObjectResponse.SchemeDataList,MainTitle:t.ObjectResponse.TitleResponse})})).catch((function(t){console.log(t),e.setState({items:null})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,i=e.items;return e.MainTitle,t?(0,r.jsx)("div",{className:"API-Section",children:(0,r.jsx)("div",{className:"api",children:i&&i.map((function(e){return(0,r.jsxs)("div",{className:"api-flex",children:[(0,r.jsxs)("div",{className:"flex-container",children:[(0,r.jsx)("div",{className:"flex-item fg3",children:e.SchemeName}),(0,r.jsx)("div",{className:"flex-item",children:(0,r.jsx)("a",{href:e.InvestURL,target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,r.jsxs)("div",{className:"flex-container1",children:[(0,r.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,r.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,r.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,r.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,r.jsxs)("div",{className:"flex-container2",children:[(0,r.jsxs)("div",{className:"flex-item1",children:[e.OneYearReturn,"%"]}),(0,r.jsxs)("div",{className:"flex-item1",children:[e.TwoYearReturn,"%"]}),(0,r.jsxs)("div",{className:"flex-item1",children:[e.ThreeYearReturn,"%"]}),(0,r.jsxs)("div",{className:"flex-item1",children:[e.FiveYearReturn,"%"]})]})]},e.SchemeCode)}))})}):(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"Funds are Loading"})})}}])&&c(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),h}(n.Component);t.Z=d},17091:function(e,t,i){i.r(t),i.d(t,{BajajFinanceLtd:function(){return F},default:function(){return S}});var n=i(67294),r=i(71234),s=i(27037),c=i.p+"536e461aa4e18ff4c0eec1ca4c62e061.png",a=i.p+"5bd003999a28d0cf78721887fbb490e4.svg",o=i.p+"ef5a206ba520863722afdacc0a21c09e.svg",l=i.p+"57006305f0f56ee96b32b2cba2b04ee7.svg",d=i(93998),h=i(34964),u=i(67580),p=i(35848),f=i(64593),m=i(75412),x=i(10682),I=i(85893);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function C(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function w(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(F,e);var t,i,n,p,b=(n=F,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(n);if(p){var i=N(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return C(this,e)});function F(){var e;y(this,F);for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return w(g(e=b.call.apply(b,[this].concat(i))),"data",{BajajFinance:{Title:"",ProductCategoryId:"2",DefaultProductId:""}}),e}return t=F,(i=[{key:"render",value:function(){var e=this.data.BajajFinance,t=this.props.t,i=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com/en/"},{"@type":"ListItem",position:2,name:"Fixed Deposit",item:"https://nivesh.com/en/fixed-deposit/"},{"@type":"ListItem",position:3,name:"ICICI Home Finance Co. Ltd",item:"https://nivesh.com/en/fixed-deposit/icici-home-finance-co-ltd/"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Is ICICI Home Finance FD Safe?",acceptedAnswer:{"@type":"Answer",text:"The ICICI Home Finance FD is one of the safest and risk-free means for investment. ICICI Home Finance FD has an AAA Stable rating from leading organisations such as CARE, CRISIL and ICRA."}},{"@type":"Question",name:"What is the Highest FD Rate for ICICI Home Finance?",acceptedAnswer:{"@type":"Answer",text:"The highest rate for ICICI Home Finance Fixed Deposit is 6.70%. A senior citizen can get an additional interest rate under ICICI Home finance Fixed Deposit scheme."}},{"@type":"Question",name:"How Many Years will the FD Double in ICICI?",acceptedAnswer:{"@type":"Answer",text:"To know in how many years FD will be double one need to divide 72 by the applicable interest rate. The answer to this equation will give you the number of years in which the FD amount will be doubled."}},{"@type":"Question",name:"Are There Any Special Rates for Senior Citizens FD of ICICI Home Finance?",acceptedAnswer:{"@type":"Answer",text:"ICICI Home Finance FD Rates are the best in the industry. The financial institution offers an additional interest of 0.25% to senior citizens."}},{"@type":"Question",name:"What is the Eligibility Criteria to Avail ICICI Home Finance Fixed Deposit Scheme?",acceptedAnswer:{"@type":"Answer",text:"In order to open a Fixed Deposit under the ICICI Home finance FD Scheme, the investor must be a resident Indian Citizen, non-resident Indian or person of Indian origin. The age of the investor must be more than 18 years. ICICI Home Finance also allows Hindu Undivided Family (HUF), Public or private firms, companies, foundations and the entities like Association of Persons, Societies, or Trusts for FD creation."}}]}]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(f.q,{children:[(0,I.jsx)("meta",{charSet:"utf-8"}),(0,I.jsx)("title",{children:t("MetaTitle:mT62")}),(0,I.jsx)("meta",{name:"description",content:t("MetaDescription:mD62")}),(0,I.jsx)("link",{rel:"canonical",href:window.location.href}),(0,I.jsx)("script",{type:"application/ld+json",children:i})]}),(0,I.jsx)(x.Z,{children:(0,I.jsxs)(m.Z,{children:[(0,I.jsx)(m.Z.Item,{href:"/",children:t("BreadCrumb:bd-45")}),(0,I.jsx)(m.Z.Item,{href:"/fixed-deposit",children:t("BreadCrumb:bd-46")}),(0,I.jsx)(m.Z.Item,{active:!0,children:t("BreadCrumb:bd-49")})]})}),(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsxs)("div",{className:"col-lg-7 col-md-6 col-12 mb-4",children:[(0,I.jsx)("h2",{children:t("ICICI:iciciFixed1")}),(0,I.jsx)("p",{children:t("ICICI:iciciFixed2")}),(0,I.jsx)("a",{href:"https://nivesh.app.link/RwZsD9vJGtb",children:(0,I.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:t("CTAFooter:InvestNow1")})})]}),(0,I.jsx)("div",{className:"col-lg-5 col-md-6",children:(0,I.jsx)("img",{src:c,alt:"",className:"img-fluid"})})]}),(0,I.jsxs)("div",{className:"container features ourPartCaptital",children:[(0,I.jsx)("h2",{children:t("ICICI:iciciFixed3")}),(0,I.jsxs)("div",{className:"row mt-4",children:[(0,I.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,I.jsx)("img",{src:a,alt:""}),(0,I.jsx)("h4",{children:t("ICICI:iciciFixed4")}),(0,I.jsx)("p",{className:"small-text",children:t("ICICI:iciciFixed5")})]}),(0,I.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,I.jsx)("img",{src:o,alt:""}),(0,I.jsx)("h4",{children:t("ICICI:iciciFixed6")}),(0,I.jsx)("p",{className:"small-text",children:t("ICICI:iciciFixed7")})]}),(0,I.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,I.jsx)("img",{src:l,alt:""}),(0,I.jsx)("h4",{children:t("ICICI:iciciFixed8")}),(0,I.jsx)("p",{className:"small-text",children:t("ICICI:iciciFixed9")})]})]}),(0,I.jsx)("div",{className:"text-center mt-4",children:(0,I.jsx)("a",{href:"https://nivesh.app.link/RwZsD9vJGtb",target:"_blank",className:"btn btn-primary",children:t("CTAFooter:InvestNow1")})})]}),(0,I.jsx)("div",{className:"bg-light ourPartCaptital",children:(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsx)("h2",{className:"text-center",children:t("ICICI:iciciFixed10")}),(0,I.jsx)("div",{className:"col-lg-4",children:(0,I.jsx)("div",{className:"card mt-4",children:(0,I.jsxs)("div",{className:"card-body",children:[(0,I.jsx)("img",{src:d.Z,alt:""}),(0,I.jsx)("h3",{children:t("ICICI:iciciFixed11")})]})})}),(0,I.jsx)("div",{className:"col-lg-4",children:(0,I.jsx)("div",{className:"card mt-4",children:(0,I.jsxs)("div",{className:"card-body",children:[(0,I.jsx)("img",{src:h.Z,alt:""}),(0,I.jsx)("h3",{children:t("ICICI:iciciFixed12")})]})})}),(0,I.jsx)("div",{className:"col-lg-4",children:(0,I.jsx)("div",{className:"card mt-4",children:(0,I.jsxs)("div",{className:"card-body",children:[(0,I.jsx)("img",{src:u.Z,alt:""}),(0,I.jsx)("h3",{children:t("ICICI:iciciFixed13")})]})})})]})}),(0,I.jsx)("div",{className:"API-Section",children:(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsx)("h2",{className:"text-center",children:t("ICICI:iciciFixed14")}),(0,I.jsx)("div",{className:"row row justify-content-lg-center",children:(0,I.jsx)("div",{className:"col col-lg-10",children:(0,I.jsx)(r.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsx)("h2",{className:"text-center",children:t("ICICI:iciciFixed15")}),(0,I.jsx)("div",{className:"col-lg-4 mt-4",children:(0,I.jsx)("div",{className:"card",children:(0,I.jsxs)("div",{className:"card-body",children:[(0,I.jsx)("img",{src:s.Z,className:"check-svg"}),(0,I.jsx)("h4",{children:t("ICICI:iciciFixed16")})]})})}),(0,I.jsx)("div",{className:"col-lg-4 mt-4",children:(0,I.jsx)("div",{className:"card",children:(0,I.jsxs)("div",{className:"card-body",children:[(0,I.jsx)("img",{src:s.Z,className:"check-svg"}),(0,I.jsx)("h4",{children:t("ICICI:iciciFixed17")})]})})}),(0,I.jsx)("div",{className:"col-lg-4 mt-4 mb-4",children:(0,I.jsx)("div",{className:"card",children:(0,I.jsxs)("div",{className:"card-body",children:[(0,I.jsx)("img",{src:s.Z,className:"check-svg"}),(0,I.jsx)("h4",{children:t("ICICI:iciciFixed18")})]})})}),(0,I.jsx)("div",{className:"text-center mt-4",children:(0,I.jsx)("a",{href:"https://nivesh.app.link/RwZsD9vJGtb",target:"_blank",className:"btn btn-primary",children:t("CTAFooter:InvestNow1")})})]}),(0,I.jsx)("div",{className:"gardient-red",children:(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsx)("h2",{className:"text-white",children:t("ICICI:iciciFixed19")}),(0,I.jsx)("p",{className:"text-white",children:t("ICICI:iciciFixed20")})]})}),(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsx)("h2",{className:"mt-4",children:t("ICICI:iciciFixed21")}),(0,I.jsx)("h3",{className:"mt-4",children:t("ICICI:iciciFixed22")}),(0,I.jsx)("p",{children:t("ICICI:iciciFixed23")}),(0,I.jsx)("h3",{children:t("ICICI:iciciFixed24")}),(0,I.jsx)("p",{children:t("ICICI:iciciFixed25")}),(0,I.jsx)("h3",{children:t("ICICI:iciciFixed26")}),(0,I.jsx)("p",{children:t("ICICI:iciciFixed27")}),(0,I.jsx)("h3",{children:t("ICICI:iciciFixed28")}),(0,I.jsx)("p",{children:t("ICICI:iciciFixed29")}),(0,I.jsx)("h3",{children:t("ICICI:iciciFixed30")}),(0,I.jsx)("p",{children:t("ICICI:iciciFixed31")})]})]})}}])&&j(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),F}(n.Component),S=(0,p.Z)()(F)},27037:function(e,t,i){t.Z=i.p+"acc372b66bb3509f2c178168de1ad7d4.svg"},67580:function(e,t,i){t.Z=i.p+"78859b4572905010651001c8082fa35b.svg"},93998:function(e,t,i){t.Z=i.p+"169a7a782789ff7a387076c3cac91b6c.svg"},34964:function(e,t,i){t.Z=i.p+"13866396306567e675cf3885fee45414.svg"},75412:function(e,t,i){i.d(t,{Z:function(){return m}});var n=i(87462),r=i(63366),s=i(94184),c=i.n(s),a=i(67294),o=i(76792),l=i(48358),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],h=a.forwardRef((function(e,t){var i=e.bsPrefix,s=e.active,h=e.children,u=e.className,p=e.as,f=void 0===p?"li":p,m=e.linkAs,x=void 0===m?l.Z:m,I=e.linkProps,b=e.href,y=e.title,j=e.target,v=(0,r.Z)(e,d),C=(0,o.vE)(i,"breadcrumb-item");return a.createElement(f,(0,n.Z)({ref:t},v,{className:c()(C,u,{active:s}),"aria-current":s?"page":void 0}),s?h:a.createElement(x,(0,n.Z)({},I,{href:b,title:y,target:j}),h))}));h.displayName="BreadcrumbItem",h.defaultProps={active:!1,linkProps:{}};var u=h,p=["bsPrefix","className","listProps","children","label","as"],f=a.forwardRef((function(e,t){var i=e.bsPrefix,s=e.className,l=e.listProps,d=e.children,h=e.label,u=e.as,f=void 0===u?"nav":u,m=(0,r.Z)(e,p),x=(0,o.vE)(i,"breadcrumb");return a.createElement(f,(0,n.Z)({"aria-label":h,className:s,ref:t},m),a.createElement("ol",(0,n.Z)({},l,{className:c()(x,null==l?void 0:l.className)}),d))}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}},f.Item=u;var m=f}}]);