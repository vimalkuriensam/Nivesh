"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[2109],{71234:function(e,r,n){var a=n(67294),t=(n(26720),n(85893));function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,r){return c=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},c(e,r)}function o(e,r){if(r&&("object"===i(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var l=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&c(e,r)}(h,e);var r,n,a,i,l=(a=h,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=d(a);if(i){var n=d(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return o(this,e)});function h(){var e;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,h),(e=l.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return r=h,(n=[{key:"componentDidMount",value:function(){var e=this,r={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",n).then((function(e){return e.json()})).then((function(r){e.setState({isLoaded:!0,items:r.ObjectResponse.SchemeDataList,MainTitle:r.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,r){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(r.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,r={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",n).then((function(e){return e.json()})).then((function(r){e.setState({isLoaded:!0,items:r.ObjectResponse.SchemeDataList,MainTitle:r.ObjectResponse.TitleResponse})})).catch((function(r){console.log(r),e.setState({items:null})}))}},{key:"render",value:function(){var e=this,r=this.state,n=r.isLoaded,a=r.items;return r.MainTitle,n?(0,t.jsx)("div",{className:"API-Section",children:(0,t.jsx)("div",{className:"api",children:a&&a.map((function(r){return(0,t.jsxs)("div",{className:"api-flex",children:[(0,t.jsxs)("div",{className:"flex-container",children:[(0,t.jsx)("div",{className:"flex-item fg3",children:r.SchemeName}),(0,t.jsx)("div",{className:"flex-item",children:(0,t.jsx)("a",{href:"https://app.nivesh.com/Home/Index?SchemeCode=".concat(r.SchemeCode,"&selectedcategoryId=").concat(e.props.productCategoryId),target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,t.jsxs)("div",{className:"flex-container1",children:[(0,t.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,t.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,t.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,t.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,t.jsxs)("div",{className:"flex-container2",children:[(0,t.jsxs)("div",{className:"flex-item1",children:[r.OneYearReturn,"%"]}),(0,t.jsxs)("div",{className:"flex-item1",children:[r.TwoYearReturn,"%"]}),(0,t.jsxs)("div",{className:"flex-item1",children:[r.ThreeYearReturn,"%"]}),(0,t.jsxs)("div",{className:"flex-item1",children:[r.FiveYearReturn,"%"]})]})]},r.SchemeCode)}))})}):(0,t.jsx)("div",{children:(0,t.jsx)("h1",{children:"Funds are Loading"})})}}])&&s(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),h}(a.Component);r.Z=l},22109:function(e,r,n){n.r(r),n.d(r,{BajajFinanceLtd:function(){return P},default:function(){return S}});var a=n(67294),t=n(71234),i=n(27037),s=n.p+"aee2a54c415c68ecad60b6e2c3596e6e.png",c=n.p+"5bd003999a28d0cf78721887fbb490e4.svg",o=n.p+"dcd2a5a41084096bbaa841102ed5cbdb.svg",d=n.p+"5e9e6254b5d06b14d774173f25150510.svg",l=n(93998),h=n(34964),f=n(67580),p=n(28744),u=n(64593),m=n(75412),x=n(10682),b=n(85893);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function y(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function g(e,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,r){return v=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},v(e,r)}function N(e,r){if(r&&("object"===j(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function C(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var P=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&v(e,r)}(P,e);var r,n,a,p,j=(a=P,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=M(a);if(p){var n=M(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return N(this,e)});function P(){var e;y(this,P);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return C(w(e=j.call.apply(j,[this].concat(n))),"data",{BajajFinance:{Title:"",ProductCategoryId:"2",DefaultProductId:""}}),e}return r=P,(n=[{key:"render",value:function(){var e=this.data.BajajFinance,r=this.props.t;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(u.q,{children:[(0,b.jsx)("meta",{charSet:"utf-8"}),(0,b.jsx)("title",{children:r("MetaTitle:mT59")}),(0,b.jsx)("meta",{name:"description",content:r("MetaDescription:mD59")}),(0,b.jsx)("link",{rel:"canonical",href:window.location.href})]}),(0,b.jsx)(x.Z,{children:(0,b.jsxs)(m.Z,{children:[(0,b.jsx)(m.Z.Item,{href:"/",children:"Home"}),(0,b.jsx)(m.Z.Item,{href:"/fixed-deposit",children:"Fixed Deposit"}),(0,b.jsx)(m.Z.Item,{active:!0,children:"Mahindra Finance Limited"})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsxs)("div",{className:"col-lg-7 col-md-6 col-12 mb-4",children:[(0,b.jsx)("h2",{children:r("Mahindra:mahindra1")}),(0,b.jsx)("p",{children:r("Mahindra:mahindra2")}),(0,b.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,b.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:r("CTAFooter:InvestNow1")})})]}),(0,b.jsx)("div",{className:"col-lg-5 col-md-6",children:(0,b.jsx)("img",{src:s,alt:"",className:"img-fluid"})})]}),(0,b.jsxs)("div",{className:"container features ourPartCaptital",children:[(0,b.jsx)("h2",{children:r("Mahindra:mahindra3")}),(0,b.jsxs)("div",{className:"row",children:[(0,b.jsxs)("div",{className:"col-lg-4",children:[(0,b.jsx)("img",{src:c,alt:""}),(0,b.jsx)("h4",{children:r("Mahindra:mahindra4")}),(0,b.jsx)("p",{className:"small-text",children:r("Mahindra:mahindra5")})]}),(0,b.jsxs)("div",{className:"col-lg-4",children:[(0,b.jsx)("img",{src:o,alt:""}),(0,b.jsx)("h4",{children:r("Mahindra:mahindra6")}),(0,b.jsx)("p",{className:"small-text",children:r("Mahindra:mahindra7")})]}),(0,b.jsxs)("div",{className:"col-lg-4",children:[(0,b.jsx)("img",{src:d,alt:""}),(0,b.jsx)("h4",{children:r("Mahindra:mahindra8")}),(0,b.jsx)("p",{className:"small-text",children:r("Mahindra:mahindra9")})]})]})]}),(0,b.jsx)("div",{className:"bg-light ourPartCaptital",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:r("Mahindra:mahindra10")}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:l.Z,alt:""}),(0,b.jsx)("h3",{children:r("Mahindra:mahindra11")})]})})}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:h.Z,alt:""}),(0,b.jsx)("h3",{children:r("Mahindra:mahindra12")})]})})}),(0,b.jsx)("div",{className:"col-lg-4",children:(0,b.jsx)("div",{className:"card mt-4",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:f.Z,alt:""}),(0,b.jsx)("h3",{children:r("Mahindra:mahindra13")})]})})})]})}),(0,b.jsx)("div",{className:"API-Section",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:r("Mahindra:mahindra14")}),(0,b.jsx)("div",{className:"row row justify-content-lg-center",children:(0,b.jsx)("div",{className:"col col-lg-10",children:(0,b.jsx)(t.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-center",children:r("Mahindra:mahindra15")}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:i.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:r("Mahindra:mahindra16")})]})})}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:i.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:r("Mahindra:mahindra17")})]})})}),(0,b.jsx)("div",{className:"col-lg-4 mt-4",children:(0,b.jsx)("div",{className:"card",children:(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("img",{src:i.Z,className:"check-svg"}),(0,b.jsx)("h4",{children:r("Mahindra:mahindra18")})]})})})]}),(0,b.jsx)("div",{className:"gardient-red",children:(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"text-white",children:r("Mahindra:mahindra19")}),(0,b.jsx)("p",{className:"text-white",children:r("Mahindra:mahindra20")})]})}),(0,b.jsxs)("div",{className:"container container-wrapper",children:[(0,b.jsx)("h2",{className:"mt-4",children:r("Mahindra:mahindra21")}),(0,b.jsx)("h3",{className:"mt-4",children:r("Mahindra:mahindra22")}),(0,b.jsx)("p",{children:r("Mahindra:mahindra23")}),(0,b.jsx)("h3",{children:r("Mahindra:mahindra24")}),(0,b.jsx)("p",{children:r("Mahindra:mahindra25")}),(0,b.jsx)("h3",{children:r("Mahindra:mahindra26")}),(0,b.jsx)("p",{children:r("Mahindra:mahindra27")}),(0,b.jsx)("h3",{children:r("Mahindra:mahindra28")}),(0,b.jsx)("p",{children:r("Mahindra:mahindra29")}),(0,b.jsx)("h3",{children:r("Mahindra:mahindra30")}),(0,b.jsx)("p",{children:r("Mahindra:mahindra31")}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:r("Mahindra:mahindra32")}),(0,b.jsx)("li",{children:r("Mahindra:mahindra33")}),(0,b.jsx)("li",{children:r("Mahindra:mahindra34")}),(0,b.jsx)("li",{children:r("Mahindra:mahindra35")}),(0,b.jsx)("li",{children:r("Mahindra:mahindra36")}),(0,b.jsx)("li",{children:r("Mahindra:mahindra37")}),(0,b.jsx)("li",{children:r("Mahindra:mahindra38")}),(0,b.jsx)("li",{children:r("Mahindra:mahindra39")}),(0,b.jsx)("li",{children:r("Mahindra:mahindra40")}),(0,b.jsx)("li",{children:r("Mahindra:mahindra41")}),(0,b.jsx)("li",{children:r("Mahindra:mahindra42")})]}),(0,b.jsx)("p",{children:r("Mahindra:mahindra43")}),(0,b.jsx)("h3",{children:r("Mahindra:mahindra44")}),(0,b.jsx)("p",{children:r("Mahindra:mahindra45")})]})]})}}])&&g(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),P}(a.Component),S=(0,p.Z)()(P)},10164:function(e,r,n){var a=n(8081),t=n.n(a),i=n(23645),s=n.n(i)()(t());s.push([e.id,'.api-button{\r\n     background-color: #FFFFFF;\r\n     font-size: 18px;\r\n     font-family: "Montserrat";\r\n     font-weight: 600;\r\n     text-align: center;\r\n     color: #202D62;\r\n     line-height: 24px;\r\n     padding: 10px 32px;\r\n     float: right;\r\n     border-radius: 4px;\r\n}\r\n\r\n@media(max-width:768px){\r\n    .api-button{\r\n        float: right;\r\n        font-size: 12px;\r\n        padding: 4px;\r\n        border-radius: 4px;\r\n    }\r\n}\r\n\r\n.api h2{\r\n    text-align: center;\r\n    margin-bottom: 24px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.API-Section{\r\n    background: #E2E9F1;\r\n}\r\n\r\n#below-head{\r\n    background-color: #e9e9e9;\r\n    padding: 15px;\r\n}\r\n\r\n#below-head-values{\r\n    background-color: #C4DFF4;\r\n}\r\n\r\n.api-table>thead>tr>th {\r\n    padding: 15px;\r\n    background-color: #202D62;\r\n    color: white;\r\n}\r\n\r\n.api-table{\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.api-table>thead>tr>th{\r\n    line-height: inherit;\r\n}\r\n\r\n.table>thead>tr>th{\r\n    vertical-align: inherit;\r\n}\r\n\r\n.api-table>tbody>tr>th{\r\n    padding: 15px;\r\n}\r\n.api-table>tbody>tr>td{\r\n    padding: 15px;\r\n}\r\n\r\n.flex-container{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #202D62;\r\n    padding: 8px;\r\n    align-items: center;\r\n}\r\n.flex-container1{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #e9e9e9;\r\n    padding: 8px;\r\n}\r\n.flex-container2{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #C4DFF4;\r\n    padding: 8px;\r\n}\r\n.flex-item{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: white;\r\n}\r\n.flex-item1{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: #202D62;\r\n}\r\n\r\n@media (max-width:768px){\r\n    .flex-item{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .flex-item1{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.fg3{\r\n    flex-grow: 3;\r\n}\r\n\r\n.api-flex{\r\n    margin-bottom: 30px;\r\n}\r\n',""]),r.Z=s},27037:function(e,r,n){r.Z=n.p+"acc372b66bb3509f2c178168de1ad7d4.svg"},67580:function(e,r,n){r.Z=n.p+"78859b4572905010651001c8082fa35b.svg"},93998:function(e,r,n){r.Z=n.p+"169a7a782789ff7a387076c3cac91b6c.svg"},34964:function(e,r,n){r.Z=n.p+"13866396306567e675cf3885fee45414.svg"},75412:function(e,r,n){n.d(r,{Z:function(){return m}});var a=n(87462),t=n(63366),i=n(94184),s=n.n(i),c=n(67294),o=n(76792),d=n(48358),l=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],h=c.forwardRef((function(e,r){var n=e.bsPrefix,i=e.active,h=e.children,f=e.className,p=e.as,u=void 0===p?"li":p,m=e.linkAs,x=void 0===m?d.Z:m,b=e.linkProps,j=e.href,y=e.title,g=e.target,v=(0,t.Z)(e,l),N=(0,o.vE)(n,"breadcrumb-item");return c.createElement(u,(0,a.Z)({ref:r},v,{className:s()(N,f,{active:i}),"aria-current":i?"page":void 0}),i?h:c.createElement(x,(0,a.Z)({},b,{href:j,title:y,target:g}),h))}));h.displayName="BreadcrumbItem",h.defaultProps={active:!1,linkProps:{}};var f=h,p=["bsPrefix","className","listProps","children","label","as"],u=c.forwardRef((function(e,r){var n=e.bsPrefix,i=e.className,d=e.listProps,l=e.children,h=e.label,f=e.as,u=void 0===f?"nav":f,m=(0,t.Z)(e,p),x=(0,o.vE)(n,"breadcrumb");return c.createElement(u,(0,a.Z)({"aria-label":h,className:i,ref:r},m),c.createElement("ol",(0,a.Z)({},d,{className:s()(x,null==d?void 0:d.className)}),l))}));u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}},u.Item=f;var m=u},26720:function(e,r,n){var a=n(93379),t=n.n(a),i=n(7795),s=n.n(i),c=n(90569),o=n.n(c),d=n(3565),l=n.n(d),h=n(19216),f=n.n(h),p=n(44589),u=n.n(p),m=n(10164),x={};x.styleTagTransform=u(),x.setAttributes=l(),x.insert=o().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=f(),t()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals}}]);