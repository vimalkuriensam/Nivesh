"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[3832],{71234:function(e,t,n){var a=n(67294),r=(n(17654),n(85893));function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function o(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(u,e);var t,n,a,i,d=(a=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(a);if(i){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return o(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=d.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return t=u,(n=[{key:"componentDidMount",value:function(){var e=this,t={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",n).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.ObjectResponse.SchemeDataList,MainTitle:t.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,t){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(t.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,t={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",n).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.ObjectResponse.SchemeDataList,MainTitle:t.ObjectResponse.TitleResponse})})).catch((function(t){console.log(t),e.setState({items:null})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.isLoaded,a=t.items;return t.MainTitle,n?(0,r.jsx)("div",{className:"API-Section",children:(0,r.jsx)("div",{className:"api",children:a&&a.map((function(t){return(0,r.jsxs)("div",{className:"api-flex",children:[(0,r.jsxs)("div",{className:"flex-container",children:[(0,r.jsx)("div",{className:"flex-item fg3",children:t.SchemeName}),(0,r.jsx)("div",{className:"flex-item",children:(0,r.jsx)("a",{href:"https://app.nivesh.com/Home/Index?SchemeCode=".concat(t.SchemeCode,"&selectedcategoryId=").concat(e.props.productCategoryId),target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,r.jsxs)("div",{className:"flex-container1",children:[(0,r.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,r.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,r.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,r.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,r.jsxs)("div",{className:"flex-container2",children:[(0,r.jsxs)("div",{className:"flex-item1",children:[t.OneYearReturn,"%"]}),(0,r.jsxs)("div",{className:"flex-item1",children:[t.TwoYearReturn,"%"]}),(0,r.jsxs)("div",{className:"flex-item1",children:[t.ThreeYearReturn,"%"]}),(0,r.jsxs)("div",{className:"flex-item1",children:[t.FiveYearReturn,"%"]})]})]},t.SchemeCode)}))})}):(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"Funds are Loading"})})}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a.Component);t.Z=d},43832:function(e,t,n){n.r(t),n.d(t,{BajajFinanceLtd:function(){return w},default:function(){return C}});var a=n(67294),r=n(71234),i=n(27037),s=n.p+"bc4cf8c3b2664d38ce0573dd0715fc20.png",c=n.p+"fcfbf833ce93b9a1edbe62538aefc995.svg",o=n.p+"90c097c11b95037dcc7ef3754af7c84f.svg",l=n.p+"44af138b13289bad5d924827e8774538.svg",d=n(93998),u=n(34964),h=n(67580),p=n(35848),f=n(64593),m=n(75412),j=n(10682),y=n(85893);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}function g(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(w,e);var t,n,a,p,b=(a=w,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(a);if(p){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function w(){var e;x(this,w);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return N(I(e=b.call.apply(b,[this].concat(n))),"data",{BajajFinance:{Title:"",ProductCategoryId:"2",SebiCategory:"",SebiSubCategory:"",DefaultProductId:"1"}}),e}return t=w,(n=[{key:"render",value:function(){var e=this.data.BajajFinance,t=this.props.t,n=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com/en/"},{"@type":"ListItem",position:2,name:"Fixed Deposit",item:"https://nivesh.com/en/fixed-deposit/"},{"@type":"ListItem",position:3,name:"Bajaj Finance Ltd",item:"https://nivesh.com/en/fixed-deposit/bajaj-finance-ltd/"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Is Bajaj Finance Corporate FD Safe?",acceptedAnswer:{"@type":"Answer",text:"Bajaj Finance is one of the best financial institutions. It is safe for a Fixed Deposit scheme. The company has the highest safety rating from CRISIL FAAA/stable rating. This rating gives the assurance that your investment is not at risk. Moreover, the Bajaj Finance Fixed Deposit rates are also the highest."}},{"@type":"Question",name:"Is Bajaj Finance FD Insured by RBI?",acceptedAnswer:{"@type":"Answer",text:"As per the regulations from RBI, your investment in Bajaj Finance Fixed Deposit is more likely to be safe. RBI has made deposit insurance compulsory for all financial institutions. Therefore, your investment at Bajaj finance is insured and at the lowest risk."}},{"@type":"Question",name:"Who all can Invest in Bajaj Finance Fixed Deposit?",acceptedAnswer:{"@type":"Answer",text:"Any individual or corporate less than 60 years of age can invest in Bajaj Finance Fixed Deposit. Senior Citizens can avail of an additional Fixed Deposit interest benefit at Bajaj Finance."}},{"@type":"Question",name:"Which Interest Pay-out Options are Available?",acceptedAnswer:{"@type":"Answer",text:"Cumulative and non-cumulative are the two pay-out options at Bajaj Finance. Under cumulative interest payout, the investor receives an interest amount after the completion of deposit tenure. Whereas, in non-cumulative interest payout one can opt for quarterly, half-yearly, or yearly interest payout."}},{"@type":"Question",name:"How will I get the Maturity Amount when FD gets Matured?",acceptedAnswer:{"@type":"Answer",text:"After the maturity of your Bajaj Finance Fixed Deposit, the amount will be credited to your linked bank account. You can also opt for reinvesting the amount in any Bajaj Finance Ltd. Fixed Deposit Scheme or withdraw the same."}}]}]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(f.q,{children:[(0,y.jsx)("meta",{charSet:"utf-8"}),(0,y.jsx)("title",{children:t("MetaTitle:mT57")}),(0,y.jsx)("meta",{name:"description",content:t("MetaDescription:mD57")}),(0,y.jsx)("link",{rel:"canonical",href:window.location.href}),(0,y.jsx)("script",{type:"application/ld+json",children:n})]}),(0,y.jsx)(j.Z,{children:(0,y.jsxs)(m.Z,{children:[(0,y.jsx)(m.Z.Item,{href:"/",children:t("BreadCrumb:bd-45")}),(0,y.jsx)(m.Z.Item,{href:"/fixed-deposit",children:t("BreadCrumb:bd-46")}),(0,y.jsx)(m.Z.Item,{active:!0,children:t("BreadCrumb:bd-51")})]})}),(0,y.jsx)("div",{className:"container container-wrapper",children:(0,y.jsxs)("div",{className:"row",children:[(0,y.jsxs)("div",{className:"col-lg-7 col-md-6 col-12 mb-4",children:[(0,y.jsxs)("h2",{children:[" ",t("BajajFinance:IBFFD1")]}),(0,y.jsx)("p",{children:t("BajajFinance:IBFFD2")}),(0,y.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,y.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:t("CTAFooter:InvestNow1")})})]}),(0,y.jsx)("div",{className:"col-lg-5 col-md-6 col-12",children:(0,y.jsx)("img",{src:s,alt:"",className:"img-fluid"})})]})}),(0,y.jsxs)("div",{className:"container features ourPartCaptital",children:[(0,y.jsx)("h2",{children:t("BajajFinance:IBFFD3")}),(0,y.jsxs)("div",{className:"row row justify-content-center mt-4",children:[(0,y.jsxs)("div",{className:"col-lg-4 col-md-6 mb-4",children:[(0,y.jsx)("img",{src:c,alt:""}),(0,y.jsx)("h4",{children:t("BajajFinance:IBFFD4")}),(0,y.jsxs)("p",{className:"small-text",children:[t("BajajFinance:IBFFD5")," "]})]}),(0,y.jsxs)("div",{className:"col-lg-4 col-md-6 mb-4",children:[(0,y.jsx)("img",{src:o,alt:""}),(0,y.jsx)("h4",{children:t("BajajFinance:IBFFD6")}),(0,y.jsxs)("p",{className:"small-text",children:[t("BajajFinance:IBFFD7")," "]})]}),(0,y.jsxs)("div",{className:"col-lg-4 col-md-6 mb-4",children:[(0,y.jsx)("img",{src:l,alt:""}),(0,y.jsx)("h4",{children:t("BajajFinance:IBFFD8")}),(0,y.jsxs)("p",{className:"small-text",children:[t("BajajFinance:IBFFD9")," "]})]})]})]}),(0,y.jsx)("div",{className:"bg-light ourPartCaptital",children:(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsx)("h2",{className:"text-center",children:t("BajajFinance:IBFFD10")}),(0,y.jsxs)("div",{className:"row row justify-content-center",children:[(0,y.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,y.jsx)("div",{className:"card mt-4",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:d.Z,alt:""}),(0,y.jsx)("h3",{children:t("BajajFinance:IBFFD11")})]})})}),(0,y.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,y.jsx)("div",{className:"card mt-4",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:u.Z,alt:""}),(0,y.jsx)("h3",{children:t("BajajFinance:IBFFD12")})]})})}),(0,y.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,y.jsx)("div",{className:"card mt-4",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:h.Z,alt:""}),(0,y.jsx)("h3",{children:t("BajajFinance:IBFFD13")})]})})})]})]})}),(0,y.jsx)("div",{className:"API-Section",children:(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsx)("h2",{className:"text-center",children:t("BajajFinance:IBFFD14")}),(0,y.jsx)("div",{className:"row row justify-content-lg-center",children:(0,y.jsx)("div",{className:"col col-lg-10",children:(0,y.jsx)(r.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsx)("h2",{className:"text-center",children:t("BajajFinance:IBFFD15")}),(0,y.jsxs)("div",{className:"row row justify-content-center",children:[(0,y.jsx)("div",{className:"col-lg-4 col-md-6 mt-4",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:i.Z,className:"check-svg"}),(0,y.jsx)("h4",{children:t("BajajFinance:IBFFD16")})]})})}),(0,y.jsx)("div",{className:"col-lg-4 col-md-6 mt-4",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:i.Z,className:"check-svg"}),(0,y.jsx)("h4",{children:t("BajajFinance:IBFFD17")})]})})}),(0,y.jsx)("div",{className:"col-lg-4 col-md-6 mt-4",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:i.Z,className:"check-svg"}),(0,y.jsx)("h4",{children:t("BajajFinance:IBFFD18")})]})})})]})]}),(0,y.jsx)("div",{className:"gardient-red",children:(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsx)("h2",{className:"text-white",children:t("BajajFinance:IBFFD19")}),(0,y.jsx)("p",{className:"text-white",children:t("BajajFinance:IBFFD20")})]})}),(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsx)("h2",{className:"mt-4",children:t("BajajFinance:IBFFD21")}),(0,y.jsx)("h3",{className:"mt-4",children:t("BajajFinance:IBFFD22")}),(0,y.jsx)("p",{children:t("BajajFinance:IBFFD23")}),(0,y.jsx)("h3",{children:t("BajajFinance:IBFFD24")}),(0,y.jsx)("p",{children:t("BajajFinance:IBFFD25")}),(0,y.jsx)("h3",{children:t("BajajFinance:IBFFD26")}),(0,y.jsx)("p",{children:t("BajajFinance:IBFFD27")}),(0,y.jsx)("h3",{children:t("BajajFinance:IBFFD28")}),(0,y.jsx)("p",{children:t("BajajFinance:IBFFD29")}),(0,y.jsx)("h3",{children:t("BajajFinance:IBFFD30")}),(0,y.jsx)("p",{children:t("BajajFinance:IBFFD31")})]})]})}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),w}(a.Component),C=(0,p.Z)()(w)},27037:function(e,t,n){t.Z=n.p+"acc372b66bb3509f2c178168de1ad7d4.svg"},67580:function(e,t,n){t.Z=n.p+"78859b4572905010651001c8082fa35b.svg"},93998:function(e,t,n){t.Z=n.p+"169a7a782789ff7a387076c3cac91b6c.svg"},34964:function(e,t,n){t.Z=n.p+"13866396306567e675cf3885fee45414.svg"},75412:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(63366),i=n(94184),s=n.n(i),c=n(67294),o=n(76792),l=n(48358),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],u=c.forwardRef((function(e,t){var n=e.bsPrefix,i=e.active,u=e.children,h=e.className,p=e.as,f=void 0===p?"li":p,m=e.linkAs,j=void 0===m?l.Z:m,y=e.linkProps,b=e.href,x=e.title,v=e.target,F=(0,r.Z)(e,d),g=(0,o.vE)(n,"breadcrumb-item");return c.createElement(f,(0,a.Z)({ref:t},F,{className:s()(g,h,{active:i}),"aria-current":i?"page":void 0}),i?u:c.createElement(j,(0,a.Z)({},y,{href:b,title:x,target:v}),u))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var h=u,p=["bsPrefix","className","listProps","children","label","as"],f=c.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,l=e.listProps,d=e.children,u=e.label,h=e.as,f=void 0===h?"nav":h,m=(0,r.Z)(e,p),j=(0,o.vE)(n,"breadcrumb");return c.createElement(f,(0,a.Z)({"aria-label":u,className:i,ref:t},m),c.createElement("ol",(0,a.Z)({},l,{className:s()(j,null==l?void 0:l.className)}),d))}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}},f.Item=h;var m=f}}]);