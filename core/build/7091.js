"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[7091],{71234:function(e,r,t){var n=t(67294),i=(t(26720),t(85893));function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,r){return a=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},a(e,r)}function o(e,r){if(r&&("object"===c(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var d=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&a(e,r)}(h,e);var r,t,n,c,d=(n=h,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=l(n);if(c){var t=l(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return o(this,e)});function h(){var e;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,h),(e=d.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return r=h,(t=[{key:"componentDidMount",value:function(){var e=this,r={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(r){e.setState({isLoaded:!0,items:r.ObjectResponse.SchemeDataList,MainTitle:r.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,r){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(r.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,r={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(r){e.setState({isLoaded:!0,items:r.ObjectResponse.SchemeDataList,MainTitle:r.ObjectResponse.TitleResponse})})).catch((function(r){console.log(r),e.setState({items:null})}))}},{key:"render",value:function(){var e=this,r=this.state,t=r.isLoaded,n=r.items;return r.MainTitle,t?(0,i.jsx)("div",{className:"API-Section",children:(0,i.jsx)("div",{className:"api",children:n&&n.map((function(r){return(0,i.jsxs)("div",{className:"api-flex",children:[(0,i.jsxs)("div",{className:"flex-container",children:[(0,i.jsx)("div",{className:"flex-item fg3",children:r.SchemeName}),(0,i.jsx)("div",{className:"flex-item",children:(0,i.jsx)("a",{href:"https://app.nivesh.com/Home/Index?SchemeCode=".concat(r.SchemeCode,"&selectedcategoryId=").concat(e.props.productCategoryId),target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,i.jsxs)("div",{className:"flex-container1",children:[(0,i.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,i.jsxs)("div",{className:"flex-container2",children:[(0,i.jsxs)("div",{className:"flex-item1",children:[r.OneYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[r.TwoYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[r.ThreeYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[r.FiveYearReturn,"%"]})]})]},r.SchemeCode)}))})}):(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:"Funds are Loading"})})}}])&&s(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),h}(n.Component);r.Z=d},17091:function(e,r,t){t.r(r),t.d(r,{BajajFinanceLtd:function(){return N},default:function(){return w}});var n=t(67294),i=t(71234),c=t(27037),s=t.p+"a0439eee85573f74887cb3ffb15af574.png",a=t.p+"5bd003999a28d0cf78721887fbb490e4.svg",o=t.p+"ef5a206ba520863722afdacc0a21c09e.svg",l=t.p+"57006305f0f56ee96b32b2cba2b04ee7.svg",d=t(93998),h=t(34964),p=t(67580),f=t(28744),u=t(64593),x=t(85893);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function y(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,r){return j=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},j(e,r)}function I(e,r){if(r&&("object"===m(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function C(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var N=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&j(e,r)}(N,e);var r,t,n,f,m=(n=N,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=v(n);if(f){var t=v(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return I(this,e)});function N(){var e;b(this,N);for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return C(g(e=m.call.apply(m,[this].concat(t))),"data",{BajajFinance:{Title:"",ProductCategoryId:"2",DefaultProductId:""}}),e}return r=N,(t=[{key:"render",value:function(){var e=this.data.BajajFinance,r=this.props.t;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(u.q,{children:[(0,x.jsx)("meta",{charSet:"utf-8"}),(0,x.jsx)("title",{children:r("MetaTitle:mT62")}),(0,x.jsx)("meta",{name:"description",content:r("MetaDescription:mD62")}),(0,x.jsx)("link",{rel:"canonical",href:window.location.href})]}),(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsxs)("div",{className:"col-lg-7 col-md-6 col-12 mb-4",children:[(0,x.jsx)("h2",{children:r("ICICI:iciciFixed1")}),(0,x.jsx)("p",{children:r("ICICI:iciciFixed2")}),(0,x.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,x.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:r("CTAFooter:InvestNow1")})})]}),(0,x.jsx)("div",{className:"col-lg-5 col-md-6",children:(0,x.jsx)("img",{src:s,alt:"",className:"img-fluid"})})]}),(0,x.jsxs)("div",{className:"container features ourPartCaptital",children:[(0,x.jsx)("h2",{children:r("ICICI:iciciFixed3")}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-lg-4",children:[(0,x.jsx)("img",{src:a,alt:""}),(0,x.jsx)("h4",{children:r("ICICI:iciciFixed4")}),(0,x.jsx)("p",{className:"small-text",children:r("ICICI:iciciFixed5")})]}),(0,x.jsxs)("div",{className:"col-lg-4",children:[(0,x.jsx)("img",{src:o,alt:""}),(0,x.jsx)("h4",{children:r("ICICI:iciciFixed6")}),(0,x.jsx)("p",{className:"small-text",children:r("ICICI:iciciFixed7")})]}),(0,x.jsxs)("div",{className:"col-lg-4",children:[(0,x.jsx)("img",{src:l,alt:""}),(0,x.jsx)("h4",{children:r("ICICI:iciciFixed8")}),(0,x.jsx)("p",{className:"small-text",children:r("ICICI:iciciFixed9")})]})]}),(0,x.jsx)("div",{className:"text-center mt-4",children:(0,x.jsx)("a",{href:"https://app.nivesh.com/home/index",target:"_blank",className:"btn btn-primary",children:r("CTAFooter:InvestNow1")})})]}),(0,x.jsx)("div",{className:"bg-light ourPartCaptital",children:(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"text-center",children:r("ICICI:iciciFixed10")}),(0,x.jsx)("div",{className:"col-lg-4",children:(0,x.jsx)("div",{className:"card mt-4",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:d.Z,alt:""}),(0,x.jsx)("h3",{children:r("ICICI:iciciFixed11")})]})})}),(0,x.jsx)("div",{className:"col-lg-4",children:(0,x.jsx)("div",{className:"card mt-4",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:h.Z,alt:""}),(0,x.jsx)("h3",{children:r("ICICI:iciciFixed12")})]})})}),(0,x.jsx)("div",{className:"col-lg-4",children:(0,x.jsx)("div",{className:"card mt-4",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:p.Z,alt:""}),(0,x.jsx)("h3",{children:r("ICICI:iciciFixed13")})]})})})]})}),(0,x.jsx)("div",{className:"API-Section",children:(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"text-center",children:r("ICICI:iciciFixed14")}),(0,x.jsx)("div",{className:"row row justify-content-lg-center",children:(0,x.jsx)("div",{className:"col col-lg-10",children:(0,x.jsx)(i.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"text-center",children:r("ICICI:iciciFixed15")}),(0,x.jsx)("div",{className:"col-lg-4 mt-4",children:(0,x.jsx)("div",{className:"card",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:c.Z,className:"check-svg"}),(0,x.jsx)("h4",{children:r("ICICI:iciciFixed16")})]})})}),(0,x.jsx)("div",{className:"col-lg-4 mt-4",children:(0,x.jsx)("div",{className:"card",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:c.Z,className:"check-svg"}),(0,x.jsx)("h4",{children:r("ICICI:iciciFixed17")})]})})}),(0,x.jsx)("div",{className:"col-lg-4 mt-4 mb-4",children:(0,x.jsx)("div",{className:"card",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsx)("img",{src:c.Z,className:"check-svg"}),(0,x.jsx)("h4",{children:r("ICICI:iciciFixed18")})]})})}),(0,x.jsx)("div",{className:"text-center mt-4",children:(0,x.jsx)("a",{href:"https://app.nivesh.com/home/index",target:"_blank",className:"btn btn-primary",children:r("CTAFooter:InvestNow1")})})]}),(0,x.jsx)("div",{className:"gardient-red",children:(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"text-white",children:r("ICICI:iciciFixed19")}),(0,x.jsx)("p",{className:"text-white",children:r("ICICI:iciciFixed20")})]})}),(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"mt-4",children:r("ICICI:iciciFixed21")}),(0,x.jsx)("h3",{className:"mt-4",children:r("ICICI:iciciFixed22")}),(0,x.jsx)("p",{children:r("ICICI:iciciFixed23")}),(0,x.jsx)("h3",{children:r("ICICI:iciciFixed24")}),(0,x.jsx)("p",{children:r("ICICI:iciciFixed25")}),(0,x.jsx)("h3",{children:r("ICICI:iciciFixed26")}),(0,x.jsx)("p",{children:r("ICICI:iciciFixed27")}),(0,x.jsx)("h3",{children:r("ICICI:iciciFixed28")}),(0,x.jsx)("p",{children:r("ICICI:iciciFixed29")}),(0,x.jsx)("h3",{children:r("ICICI:iciciFixed30")}),(0,x.jsx)("p",{children:r("ICICI:iciciFixed31")})]})]})}}])&&y(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),N}(n.Component),w=(0,f.Z)()(N)},10164:function(e,r,t){var n=t(8081),i=t.n(n),c=t(23645),s=t.n(c)()(i());s.push([e.id,'.api-button{\r\n     background-color: #FFFFFF;\r\n     font-size: 18px;\r\n     font-family: "Montserrat";\r\n     font-weight: 600;\r\n     text-align: center;\r\n     color: #202D62;\r\n     line-height: 24px;\r\n     padding: 10px 32px;\r\n     float: right;\r\n     border-radius: 4px;\r\n}\r\n\r\n@media(max-width:768px){\r\n    .api-button{\r\n        float: right;\r\n        font-size: 12px;\r\n        padding: 4px;\r\n        border-radius: 4px;\r\n    }\r\n}\r\n\r\n.api h2{\r\n    text-align: center;\r\n    margin-bottom: 24px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.API-Section{\r\n    background: #E2E9F1;\r\n}\r\n\r\n#below-head{\r\n    background-color: #e9e9e9;\r\n    padding: 15px;\r\n}\r\n\r\n#below-head-values{\r\n    background-color: #C4DFF4;\r\n}\r\n\r\n.api-table>thead>tr>th {\r\n    padding: 15px;\r\n    background-color: #202D62;\r\n    color: white;\r\n}\r\n\r\n.api-table{\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.api-table>thead>tr>th{\r\n    line-height: inherit;\r\n}\r\n\r\n.table>thead>tr>th{\r\n    vertical-align: inherit;\r\n}\r\n\r\n.api-table>tbody>tr>th{\r\n    padding: 15px;\r\n}\r\n.api-table>tbody>tr>td{\r\n    padding: 15px;\r\n}\r\n\r\n.flex-container{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #202D62;\r\n    padding: 8px;\r\n    align-items: center;\r\n}\r\n.flex-container1{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #e9e9e9;\r\n    padding: 8px;\r\n}\r\n.flex-container2{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #C4DFF4;\r\n    padding: 8px;\r\n}\r\n.flex-item{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: white;\r\n}\r\n.flex-item1{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: #202D62;\r\n}\r\n\r\n@media (max-width:768px){\r\n    .flex-item{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .flex-item1{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.fg3{\r\n    flex-grow: 3;\r\n}\r\n\r\n.api-flex{\r\n    margin-bottom: 30px;\r\n}\r\n',""]),r.Z=s},27037:function(e,r,t){r.Z=t.p+"acc372b66bb3509f2c178168de1ad7d4.svg"},67580:function(e,r,t){r.Z=t.p+"78859b4572905010651001c8082fa35b.svg"},93998:function(e,r,t){r.Z=t.p+"169a7a782789ff7a387076c3cac91b6c.svg"},34964:function(e,r,t){r.Z=t.p+"13866396306567e675cf3885fee45414.svg"},26720:function(e,r,t){var n=t(93379),i=t.n(n),c=t(7795),s=t.n(c),a=t(90569),o=t.n(a),l=t(3565),d=t.n(l),h=t(19216),p=t.n(h),f=t(44589),u=t.n(f),x=t(10164),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=o().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=p(),i()(x.Z,m),x.Z&&x.Z.locals&&x.Z.locals}}]);