"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[2109],{71234:function(e,n,t){var a=t(67294),i=t(85893);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function s(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,n){return c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},c(e,n)}function o(e,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var l=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&c(e,n)}(h,e);var n,t,a,r,l=(a=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=d(a);if(r){var t=d(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return o(this,e)});function h(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,h),(e=l.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return n=h,(t=[{key:"componentDidMount",value:function(){var e=this,n={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,items:n.ObjectResponse.SchemeDataList,MainTitle:n.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,n){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(n.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,n={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,items:n.ObjectResponse.SchemeDataList,MainTitle:n.ObjectResponse.TitleResponse})})).catch((function(n){console.log(n),e.setState({items:null})}))}},{key:"render",value:function(){var e=this.state,n=e.isLoaded,t=e.items;return e.MainTitle,n?(0,i.jsx)("div",{className:"API-Section",children:(0,i.jsx)("div",{className:"api",children:t&&t.map((function(e){return(0,i.jsxs)("div",{className:"api-flex",children:[(0,i.jsxs)("div",{className:"flex-container",children:[(0,i.jsx)("div",{className:"flex-item fg3",children:e.SchemeName}),(0,i.jsx)("div",{className:"flex-item",children:(0,i.jsx)("a",{href:e.InvestURL,target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,i.jsxs)("div",{className:"flex-container1",children:[(0,i.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,i.jsxs)("div",{className:"flex-container2",children:[(0,i.jsxs)("div",{className:"flex-item1",children:[e.OneYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[e.TwoYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[e.ThreeYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[e.FiveYearReturn,"%"]})]})]},e.SchemeCode)}))})}):(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:"Funds are Loading"})})}}])&&s(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),h}(a.Component);n.Z=l},22109:function(e,n,t){t.r(n),t.d(n,{BajajFinanceLtd:function(){return I},default:function(){return P}});var a=t(67294),i=t(71234),r=t(27037),s=t.p+"aee2a54c415c68ecad60b6e2c3596e6e.png",c=t.p+"5bd003999a28d0cf78721887fbb490e4.svg",o=t.p+"dcd2a5a41084096bbaa841102ed5cbdb.svg",d=t.p+"5e9e6254b5d06b14d774173f25150510.svg",l=t(93998),h=t(34964),u=t(67580),m=t(35848),p=t(64593),f=t(75412),x=t(10682),y=t(85893);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function j(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function v(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,n){return g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},g(e,n)}function N(e,n){if(n&&("object"===b(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var I=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&g(e,n)}(I,e);var n,t,a,m,b=(a=I,m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=w(a);if(m){var t=w(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return N(this,e)});function I(){var e;j(this,I);for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return C(M(e=b.call.apply(b,[this].concat(t))),"data",{BajajFinance:{Title:"",ProductCategoryId:"2",DefaultProductId:""}}),e}return n=I,(t=[{key:"render",value:function(){var e=this.data.BajajFinance,n=this.props.t,t=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com/en/"},{"@type":"ListItem",position:2,name:"Fixed Deposit",item:"https://nivesh.com/en/fixed-deposit/"},{"@type":"ListItem",position:3,name:"Mahindra Finance Limited",item:"https://nivesh.com/en/fixed-deposit/mahindra-finance-limited/"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Is Mahindra Finance Safe for FD?",acceptedAnswer:{"@type":"Answer",text:"Yes, Mahindra Finance is safe for FD. It has FAAA Crisil Rating. The rating implies a high level of safety. Moreover, the Mahindra Finance FD scheme is strategic with good interest rates."}},{"@type":"Question",name:"How Good is the Mahindra Finance Fixed Deposit?",acceptedAnswer:{"@type":"Answer",text:"It is advantageous to invest your money in the form of a Fixed Deposit at Mahindra Finance. The Mahindra finance Fixed Deposit rates are competitive and customer-friendly."}},{"@type":"Question",name:"How is the Payment of Interest Made on Mahindra FD?",acceptedAnswer:{"@type":"Answer",text:"The payment of interest in Mahira finance FD online is made through online means. Your interest gets credited to your account annually."}},{"@type":"Question",name:"What is the Renewal/Repayment of Deposits Procedure?",acceptedAnswer:{"@type":"Answer",text:"You can easily renew or repay the deposits at Mahindra Finance. All you need to do is just fill up the online form and submit the necessary documents along with it."}},{"@type":"Question",name:"What is the Eligibility Criteria for Mahindra Finance Fixed Deposit?",acceptedAnswer:{"@type":"Answer",text:"Like every non-banking financial institution, Mahindra Finance also has some set criteria for Fixed Deposits. People that eligible to open a Fixed Deposit at Mahindra Finance include:\n\n              Single individuals\n              NRIs\n              Companies\n              Family Trusts\n              HUFs\n              Charitable Trusts\n              NGOs\n              Sole Proprietorship\n              Clubs\n              Societies\n              Foundations\n              The documentation required varies depending upon the nature of investors. Generally, one needs to submit identity proof, address proof, PAN Card, Certification of incorporation, cancel cheque leaf, etc. An investor can easily open a Mahindra Finance Fixed Deposit online. All you need to do is just download the form from the website. You can also submit an inquiry or call back form on the official website of Mahindra Finance to know the exact procedure for opening the Fixed Deposit."}},{"@type":"Question",name:"How Can I Open Mahindra Finance FD Online?",acceptedAnswer:{"@type":"Answer",text:"It is easy to open FD online in Mahindra Finance. You can check your eligibility online and fill the online application form for a Fixed Deposit. You can also request a call to understand the exact process of FD opening."}}]}]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(p.q,{children:[(0,y.jsx)("meta",{charSet:"utf-8"}),(0,y.jsx)("title",{children:n("MetaTitle:mT59")}),(0,y.jsx)("meta",{name:"description",content:n("MetaDescription:mD59")}),(0,y.jsx)("link",{rel:"canonical",href:window.location.href}),(0,y.jsx)("script",{type:"application/ld+json",children:t})]}),(0,y.jsx)(x.Z,{children:(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(f.Z.Item,{href:"/",children:n("BreadCrumb:bd-45")}),(0,y.jsx)(f.Z.Item,{href:"/fixed-deposit",children:n("BreadCrumb:bd-46")}),(0,y.jsx)(f.Z.Item,{active:!0,children:n("BreadCrumb:bd-52")})]})}),(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsxs)("div",{className:"col-lg-7 col-md-6 col-12 mb-4",children:[(0,y.jsx)("h2",{children:n("Mahindra:mahindra1")}),(0,y.jsx)("p",{children:n("Mahindra:mahindra2")}),(0,y.jsx)("a",{href:"https://nivesh.app.link/RwZsD9vJGtb",children:(0,y.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:n("CTAFooter:InvestNow1")})})]}),(0,y.jsx)("div",{className:"col-lg-5 col-md-6",children:(0,y.jsx)("img",{src:s,alt:"",className:"img-fluid"})})]}),(0,y.jsxs)("div",{className:"container features ourPartCaptital",children:[(0,y.jsx)("h2",{children:n("Mahindra:mahindra3")}),(0,y.jsxs)("div",{className:"row mt-4",children:[(0,y.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,y.jsx)("img",{src:c,alt:""}),(0,y.jsx)("h4",{children:n("Mahindra:mahindra4")}),(0,y.jsx)("p",{className:"small-text",children:n("Mahindra:mahindra5")})]}),(0,y.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,y.jsx)("img",{src:o,alt:""}),(0,y.jsx)("h4",{children:n("Mahindra:mahindra6")}),(0,y.jsx)("p",{className:"small-text",children:n("Mahindra:mahindra7")})]}),(0,y.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,y.jsx)("img",{src:d,alt:""}),(0,y.jsx)("h4",{children:n("Mahindra:mahindra8")}),(0,y.jsx)("p",{className:"small-text",children:n("Mahindra:mahindra9")})]})]})]}),(0,y.jsx)("div",{className:"bg-light ourPartCaptital",children:(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsx)("h2",{className:"text-center",children:n("Mahindra:mahindra10")}),(0,y.jsx)("div",{className:"col-lg-4",children:(0,y.jsx)("div",{className:"card mt-4",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:l.Z,alt:""}),(0,y.jsx)("h3",{children:n("Mahindra:mahindra11")})]})})}),(0,y.jsx)("div",{className:"col-lg-4",children:(0,y.jsx)("div",{className:"card mt-4",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:h.Z,alt:""}),(0,y.jsx)("h3",{children:n("Mahindra:mahindra12")})]})})}),(0,y.jsx)("div",{className:"col-lg-4",children:(0,y.jsx)("div",{className:"card mt-4",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:u.Z,alt:""}),(0,y.jsx)("h3",{children:n("Mahindra:mahindra13")})]})})})]})}),(0,y.jsx)("div",{className:"API-Section",children:(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsx)("h2",{className:"text-center",children:n("Mahindra:mahindra14")}),(0,y.jsx)("div",{className:"row row justify-content-lg-center",children:(0,y.jsx)("div",{className:"col col-lg-10",children:(0,y.jsx)(i.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsx)("h2",{className:"text-center",children:n("Mahindra:mahindra15")}),(0,y.jsx)("div",{className:"col-lg-4 mt-4",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:r.Z,className:"check-svg"}),(0,y.jsx)("h4",{children:n("Mahindra:mahindra16")})]})})}),(0,y.jsx)("div",{className:"col-lg-4 mt-4",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:r.Z,className:"check-svg"}),(0,y.jsx)("h4",{children:n("Mahindra:mahindra17")})]})})}),(0,y.jsx)("div",{className:"col-lg-4 mt-4",children:(0,y.jsx)("div",{className:"card",children:(0,y.jsxs)("div",{className:"card-body",children:[(0,y.jsx)("img",{src:r.Z,className:"check-svg"}),(0,y.jsx)("h4",{children:n("Mahindra:mahindra18")})]})})})]}),(0,y.jsx)("div",{className:"gardient-red",children:(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsx)("h2",{className:"text-white",children:n("Mahindra:mahindra19")}),(0,y.jsx)("p",{className:"text-white",children:n("Mahindra:mahindra20")})]})}),(0,y.jsxs)("div",{className:"container container-wrapper",children:[(0,y.jsx)("h2",{className:"mt-4",children:n("Mahindra:mahindra21")}),(0,y.jsx)("h3",{className:"mt-4",children:n("Mahindra:mahindra22")}),(0,y.jsx)("p",{children:n("Mahindra:mahindra23")}),(0,y.jsx)("h3",{children:n("Mahindra:mahindra24")}),(0,y.jsx)("p",{children:n("Mahindra:mahindra25")}),(0,y.jsx)("h3",{children:n("Mahindra:mahindra26")}),(0,y.jsx)("p",{children:n("Mahindra:mahindra27")}),(0,y.jsx)("h3",{children:n("Mahindra:mahindra28")}),(0,y.jsx)("p",{children:n("Mahindra:mahindra29")}),(0,y.jsx)("h3",{children:n("Mahindra:mahindra30")}),(0,y.jsx)("p",{children:n("Mahindra:mahindra31")}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:n("Mahindra:mahindra32")}),(0,y.jsx)("li",{children:n("Mahindra:mahindra33")}),(0,y.jsx)("li",{children:n("Mahindra:mahindra34")}),(0,y.jsx)("li",{children:n("Mahindra:mahindra35")}),(0,y.jsx)("li",{children:n("Mahindra:mahindra36")}),(0,y.jsx)("li",{children:n("Mahindra:mahindra37")}),(0,y.jsx)("li",{children:n("Mahindra:mahindra38")}),(0,y.jsx)("li",{children:n("Mahindra:mahindra39")}),(0,y.jsx)("li",{children:n("Mahindra:mahindra40")}),(0,y.jsx)("li",{children:n("Mahindra:mahindra41")}),(0,y.jsx)("li",{children:n("Mahindra:mahindra42")})]}),(0,y.jsx)("p",{children:n("Mahindra:mahindra43")}),(0,y.jsx)("h3",{children:n("Mahindra:mahindra44")}),(0,y.jsx)("p",{children:n("Mahindra:mahindra45")})]})]})}}])&&v(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),I}(a.Component),P=(0,m.Z)()(I)},27037:function(e,n,t){n.Z=t.p+"acc372b66bb3509f2c178168de1ad7d4.svg"},67580:function(e,n,t){n.Z=t.p+"78859b4572905010651001c8082fa35b.svg"},93998:function(e,n,t){n.Z=t.p+"169a7a782789ff7a387076c3cac91b6c.svg"},34964:function(e,n,t){n.Z=t.p+"13866396306567e675cf3885fee45414.svg"},75412:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(87462),i=t(63366),r=t(94184),s=t.n(r),c=t(67294),o=t(76792),d=t(48358),l=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],h=c.forwardRef((function(e,n){var t=e.bsPrefix,r=e.active,h=e.children,u=e.className,m=e.as,p=void 0===m?"li":m,f=e.linkAs,x=void 0===f?d.Z:f,y=e.linkProps,b=e.href,j=e.title,v=e.target,g=(0,i.Z)(e,l),N=(0,o.vE)(t,"breadcrumb-item");return c.createElement(p,(0,a.Z)({ref:n},g,{className:s()(N,u,{active:r}),"aria-current":r?"page":void 0}),r?h:c.createElement(x,(0,a.Z)({},y,{href:b,title:j,target:v}),h))}));h.displayName="BreadcrumbItem",h.defaultProps={active:!1,linkProps:{}};var u=h,m=["bsPrefix","className","listProps","children","label","as"],p=c.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,d=e.listProps,l=e.children,h=e.label,u=e.as,p=void 0===u?"nav":u,f=(0,i.Z)(e,m),x=(0,o.vE)(t,"breadcrumb");return c.createElement(p,(0,a.Z)({"aria-label":h,className:r,ref:n},f),c.createElement("ol",(0,a.Z)({},d,{className:s()(x,null==d?void 0:d.className)}),l))}));p.displayName="Breadcrumb",p.defaultProps={label:"breadcrumb",listProps:{}},p.Item=u;var f=p}}]);