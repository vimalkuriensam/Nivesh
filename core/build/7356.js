"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[7356],{71234:function(e,r,t){var n=t(67294),i=(t(26720),t(85893));function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,r){return c=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},c(e,r)}function o(e,r){if(r&&("object"===s(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var d=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&c(e,r)}(h,e);var r,t,n,s,d=(n=h,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=l(n);if(s){var t=l(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return o(this,e)});function h(){var e;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,h),(e=d.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return r=h,(t=[{key:"componentDidMount",value:function(){var e=this,r={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(r){e.setState({isLoaded:!0,items:r.ObjectResponse.SchemeDataList,MainTitle:r.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,r){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(r.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,r={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(r){e.setState({isLoaded:!0,items:r.ObjectResponse.SchemeDataList,MainTitle:r.ObjectResponse.TitleResponse})})).catch((function(r){console.log(r),e.setState({items:null})}))}},{key:"render",value:function(){var e=this,r=this.state,t=r.isLoaded,n=r.items;return r.MainTitle,t?(0,i.jsx)("div",{className:"API-Section",children:(0,i.jsx)("div",{className:"api",children:n&&n.map((function(r){return(0,i.jsxs)("div",{className:"api-flex",children:[(0,i.jsxs)("div",{className:"flex-container",children:[(0,i.jsx)("div",{className:"flex-item fg3",children:r.SchemeName}),(0,i.jsx)("div",{className:"flex-item",children:(0,i.jsx)("a",{href:"https://app.nivesh.com/Home/Index?SchemeCode=".concat(r.SchemeCode,"&selectedcategoryId=").concat(e.props.productCategoryId),target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,i.jsxs)("div",{className:"flex-container1",children:[(0,i.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,i.jsxs)("div",{className:"flex-container2",children:[(0,i.jsxs)("div",{className:"flex-item1",children:[r.OneYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[r.TwoYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[r.ThreeYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[r.FiveYearReturn,"%"]})]})]},r.SchemeCode)}))})}):(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:"Funds are Loading"})})}}])&&a(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),h}(n.Component);r.Z=d},37356:function(e,r,t){t.r(r),t.d(r,{BajajFinanceLtd:function(){return w},default:function(){return L}});var n=t(67294),i=t(71234),s=t(27037),a=t.p+"0da2067536545e006a73d8c2e12e3d76.png",c=t.p+"169a7a782789ff7a387076c3cac91b6c.svg",o=t.p+"b681f7fddb84840e2c6069e4e0afbf6b.svg",l=t.p+"ef5a206ba520863722afdacc0a21c09e.svg",d=t(93998),h=t(34964),f=t(67580),p=t(28744),u=t(64593),m=t(75412),x=t(10682),b=t(85893);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function C(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function y(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,r){return g=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},g(e,r)}function v(e,r){if(r&&("object"===j(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function N(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var w=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&g(e,r)}(w,e);var r,t,n,p,j=(n=w,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=D(n);if(p){var t=D(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return v(this,e)});function w(){var e;C(this,w);for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return N(F(e=j.call.apply(j,[this].concat(t))),"data",{BajajFinance:{Title:"",ProductCategoryId:"2",DefaultProductId:""}}),e}return r=w,(t=[{key:"render",value:function(){var e=this.data.BajajFinance,r=this.props.t;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(u.q,{children:[(0,b.jsx)("meta",{charSet:"utf-8"}),(0,b.jsx)("title",{children:r("MetaTitle:mT60")}),(0,b.jsx)("meta",{name:"description",content:r("MetaDescription:mD60")}),(0,b.jsx)("link",{rel:"canonical",href:window.location.href})]}),(0,b.jsx)(x.Z,{children:(0,b.jsxs)(m.Z,{children:[(0,b.jsx)(m.Z.Item,{href:"/",children:"Home"}),(0,b.jsx)(m.Z.Item,{href:"/fixed-deposit",children:"Fixed Deposit"}),(0,b.jsx)(m.Z.Item,{active:!0,children:"HDFC Limited"})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsxs)("div",{className:"col-lg-7 col-md-6 col-12 mb-4",children:[(0,b.jsx)("h2",{children:r("HDFCLtd:hDFC1")}),(0,b.jsx)("p",{children:r("HDFCLtd:hDFC2")}),(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,b.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:r("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"col-lg-5 xol-md-6",children:(0,b.jsx)("img",{src:a,alt:"",className:"img-fluid"})})]}),(0,b.jsxs)("div",{className:"container features ourPartCaptital",children:[(0,b.jsx)("h2",{children:r("HDFCLtd:hDFC3")}),(0,b.jsxs)("div",{className:"row mt-4",children:[(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:c,alt:""}),(0,b.jsx)("h4",{children:r("HDFCLtd:hDFC4")}),(0,b.jsx)("p",{className:"small-text",children:r("HDFCLtd:hDFC5")})]}),(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:o,alt:""}),(0,b.jsx)("h4",{children:r("HDFCLtd:hDFC6")}),(0,b.jsx)("p",{className:"small-text",children:r("HDFCLtd:hDFC7")})]}),(0,b.jsxs)("div",{className:"col-lg-4 mb-4",children:[(0,b.jsx)("img",{src:l,alt:""}),(0,b.jsx)("h4",{children:r("HDFCLtd:hDFC8")}),(0,b.jsx)("p",{className:"small-text",children:r("HDFCLtd:hDFC9")})]})]}),(0,b.jsx)("div",{className:"text-center mt-4",children:(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",target:"_blank",className:"btn btn-primary",children:r("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"bg-light ourPartCaptital",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:r("HDFCLtd:hDFC10")}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:d.Z,alt:""}),(0,b.jsx)("h3",{children:r("HDFCLtd:hDFC11")})]})})}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:h.Z,alt:""}),(0,b.jsx)("h3",{children:r("HDFCLtd:hDFC12")})]})})}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:f.Z,alt:""}),(0,b.jsx)("h3",{children:r("HDFCLtd:hDFC13")})]})})})]})}),(0,b.jsx)("div",{className:"API-Section",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:r("HDFCLtd:hDFC14")}),(0,b.jsx)("div",{className:"row row justify-content-lg-center",children:(0,b.jsx)("div",{className:"col col-lg-10",children:(0,b.jsx)(i.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:r("HDFCLtd:hDFC15")}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:s.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:r("HDFCLtd:hDFC16")})]})})}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:s.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:r("HDFCLtd:hDFC17")})]})})}),(0,b.jsx)("div",{className:"col-lg-4 mt-4 mb-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:s.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:r("HDFCLtd:hDFC18")})]})})}),(0,b.jsx)("div",{className:"text-center mt-4",children:(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",target:"_blank",className:"btn btn-primary",children:r("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"gardient-red",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-white",children:r("HDFCLtd:hDFC54")}),(0,b.jsx)("p",{className:"text-white",children:r("HDFCLtd:hDFC55")})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"mt-4",children:r("HDFCLtd:hDFC19")}),(0,b.jsx)("h3",{className:"mt-4",children:r("HDFCLtd:hDFC20")}),(0,b.jsx)("p",{children:r("HDFCLtd:hDFC21")}),(0,b.jsx)("h3",{children:r("HDFCLtd:hDFC22")}),(0,b.jsx)("p",{children:r("HDFCLtd:hDFC23")}),(0,b.jsx)("h3",{children:r("HDFCLtd:hDFC24")}),(0,b.jsxs)("p",{children:[r("HDFCLtd:hDFC25"),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:r("HDFCLtd:hDFC26")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC27")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC28")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC29")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC30")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC31")})]}),r("HDFCLtd:hDFC32")]}),(0,b.jsx)("h3",{children:r("HDFCLtd:hDFC33")}),(0,b.jsxs)("p",{children:[r("HDFCLtd:hDFC34"),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC35")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC36")}),(0,b.jsx)("h4",{children:r("HDFCLtd:hDFC37")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC38")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC39")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC40")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC41")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC42")}),(0,b.jsx)("h4",{children:r("HDFCLtd:hDFC43")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC44")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC45")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC46")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC47")}),(0,b.jsx)("h4",{children:r("HDFCLtd:hDFC48")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC49")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC50")}),(0,b.jsx)("li",{children:r("HDFCLtd:hDFC51")})]}),(0,b.jsx)("h3",{children:r("HDFCLtd:hDFC52")}),(0,b.jsx)("p",{children:r("HDFCLtd:hDFC53")})]})]})}}])&&y(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),w}(n.Component),L=(0,p.Z)()(w)},10164:function(e,r,t){var n=t(8081),i=t.n(n),s=t(23645),a=t.n(s)()(i());a.push([e.id,'.api-button{\r\n     background-color: #FFFFFF;\r\n     font-size: 18px;\r\n     font-family: "Montserrat";\r\n     font-weight: 600;\r\n     text-align: center;\r\n     color: #202D62;\r\n     line-height: 24px;\r\n     padding: 10px 32px;\r\n     float: right;\r\n     border-radius: 4px;\r\n}\r\n\r\n@media(max-width:768px){\r\n    .api-button{\r\n        float: right;\r\n        font-size: 12px;\r\n        padding: 4px;\r\n        border-radius: 4px;\r\n    }\r\n}\r\n\r\n.api h2{\r\n    text-align: center;\r\n    margin-bottom: 24px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.API-Section{\r\n    background: #E2E9F1;\r\n}\r\n\r\n#below-head{\r\n    background-color: #e9e9e9;\r\n    padding: 15px;\r\n}\r\n\r\n#below-head-values{\r\n    background-color: #C4DFF4;\r\n}\r\n\r\n.api-table>thead>tr>th {\r\n    padding: 15px;\r\n    background-color: #202D62;\r\n    color: white;\r\n}\r\n\r\n.api-table{\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.api-table>thead>tr>th{\r\n    line-height: inherit;\r\n}\r\n\r\n.table>thead>tr>th{\r\n    vertical-align: inherit;\r\n}\r\n\r\n.api-table>tbody>tr>th{\r\n    padding: 15px;\r\n}\r\n.api-table>tbody>tr>td{\r\n    padding: 15px;\r\n}\r\n\r\n.flex-container{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #202D62;\r\n    padding: 8px;\r\n    align-items: center;\r\n}\r\n.flex-container1{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #e9e9e9;\r\n    padding: 8px;\r\n}\r\n.flex-container2{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #C4DFF4;\r\n    padding: 8px;\r\n}\r\n.flex-item{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: white;\r\n}\r\n.flex-item1{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: #202D62;\r\n}\r\n\r\n@media (max-width:768px){\r\n    .flex-item{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .flex-item1{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.fg3{\r\n    flex-grow: 3;\r\n}\r\n\r\n.api-flex{\r\n    margin-bottom: 30px;\r\n}\r\n',""]),r.Z=a},27037:function(e,r,t){r.Z=t.p+"acc372b66bb3509f2c178168de1ad7d4.svg"},67580:function(e,r,t){r.Z=t.p+"78859b4572905010651001c8082fa35b.svg"},93998:function(e,r,t){r.Z=t.p+"169a7a782789ff7a387076c3cac91b6c.svg"},34964:function(e,r,t){r.Z=t.p+"13866396306567e675cf3885fee45414.svg"},75412:function(e,r,t){t.d(r,{Z:function(){return m}});var n=t(87462),i=t(63366),s=t(94184),a=t.n(s),c=t(67294),o=t(76792),l=t(48358),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],h=c.forwardRef((function(e,r){var t=e.bsPrefix,s=e.active,h=e.children,f=e.className,p=e.as,u=void 0===p?"li":p,m=e.linkAs,x=void 0===m?l.Z:m,b=e.linkProps,j=e.href,C=e.title,y=e.target,g=(0,i.Z)(e,d),v=(0,o.vE)(t,"breadcrumb-item");return c.createElement(u,(0,n.Z)({ref:r},g,{className:a()(v,f,{active:s}),"aria-current":s?"page":void 0}),s?h:c.createElement(x,(0,n.Z)({},b,{href:j,title:C,target:y}),h))}));h.displayName="BreadcrumbItem",h.defaultProps={active:!1,linkProps:{}};var f=h,p=["bsPrefix","className","listProps","children","label","as"],u=c.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,l=e.listProps,d=e.children,h=e.label,f=e.as,u=void 0===f?"nav":f,m=(0,i.Z)(e,p),x=(0,o.vE)(t,"breadcrumb");return c.createElement(u,(0,n.Z)({"aria-label":h,className:s,ref:r},m),c.createElement("ol",(0,n.Z)({},l,{className:a()(x,null==l?void 0:l.className)}),d))}));u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}},u.Item=f;var m=u},26720:function(e,r,t){var n=t(93379),i=t.n(n),s=t(7795),a=t.n(s),c=t(90569),o=t.n(c),l=t(3565),d=t.n(l),h=t(19216),f=t.n(h),p=t(44589),u=t.n(p),m=t(10164),x={};x.styleTagTransform=u(),x.setAttributes=d(),x.insert=o().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=f(),i()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals}}]);