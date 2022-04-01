"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[9720,3260,6136],{16136:function(e,n,t){t.r(n),t.d(n,{NApi:function(){return u}});var r=t(67294),i=t(28744),s=t(85893);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,n){return c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},c(e,n)}function l(e,n){if(n&&("object"===o(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var u=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&c(e,n)}(u,e);var n,t,r,i,o=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=d(r);if(i){var t=d(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return l(this,e)});function u(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),(e=o.call(this)).state={items:[],isLoaded:!1},e}return n=u,(t=[{key:"componentDidMount",value:function(){var e=this,n={method:"POST",headers:{"Content-Type":"application/json",token:"636F8F63-06C4-4D95-8562-392B34025FB0"},body:JSON.stringify({TotalClient:"",TotalPartner:"",TotalPartnerOverCities:"",NoOfTransaction:"",TotalTransactionValue:""})};fetch("https://api.nivesh.com/API/GetSummaryDetails",n).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,items:n.SummaryDetailsList})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,n=e.isLoaded,t=e.items,r=this.props.t;return n?(0,s.jsx)("div",{id:"about-stats",children:(0,s.jsx)("div",{className:"container container-wrapper",children:t&&(0,s.jsxs)("div",{className:"row row justify-content-center align-items-center",children:[(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsx)("h2",{className:"text-white",children:t.TotalPartner.toLocaleString("en-IN",{maximumFractionDigits:0})}),(0,s.jsxs)("h4",{className:"text-white",children:[r("Home:hOME61")," ",(0,s.jsx)("span",{children:t.TotalPartnerOverCities.toLocaleString("en-IN",{maximumFractionDigits:0})})," ",r("Home:hOME61-A")]})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsx)("h2",{className:"text-white",children:t.TotalClient.toLocaleString("en-IN",{maximumFractionDigits:0})}),(0,s.jsx)("h4",{className:"text-white",children:r("Home:hOME62")})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsx)("h2",{className:"text-white",children:t.NoOfTransaction.toLocaleString("en-IN",{maximumFractionDigits:0})}),(0,s.jsx)("h4",{className:"text-white",children:r("Home:hOME63")})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsxs)("h2",{className:"text-white",children:["Rs. ",parseInt(t.TotalTransactionValue).toLocaleString("en-IN",{maximumFractionDigits:0})]}),(0,s.jsx)("h4",{className:"text-white",children:r("Home:hOME64")})]})})]})})}):(0,s.jsx)("div",{children:"Loading..."})}}])&&a(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),u}(r.Component);n.default=(0,i.Z)()(u)},53260:function(e,n,t){t.r(n),t.d(n,{Content:function(){return P}});var r=t(67294),i=t(28744),s=t(85893);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){return l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},l(e,n)}function d(e,n){if(n&&("object"===o(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var p=r.lazy((function(){return t.e(7026).then(t.bind(t,87026))})),f=r.lazy((function(){return t.e(4130).then(t.bind(t,24130))})),m=r.lazy((function(){return t.e(3298).then(t.bind(t,83298))})),x=r.lazy((function(){return t.e(4638).then(t.bind(t,34638))})),b=r.lazy((function(){return t.e(4517).then(t.bind(t,74517))})),j=r.lazy((function(){return t.e(9717).then(t.bind(t,89717))})),y=r.lazy((function(){return t.e(5460).then(t.bind(t,75460))})),S=r.lazy((function(){return t.e(8419).then(t.bind(t,58419))})),v=r.lazy((function(){return t.e(2584).then(t.bind(t,62584))})),N=r.lazy((function(){return t.e(9602).then(t.bind(t,79602))})),g=function(e){var n,t,i=e.children,o=(n=(0,r.useState)(!0),t=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,s=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(s.push(r.value),!n||s.length!==n);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return s}}(n,t)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,n):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],c=o[1];return(0,s.jsxs)("p",{className:"text small-text",children:[a?i.slice(0,150):i,(0,s.jsx)("span",{onClick:function(){c(!a)},className:"read-or-hide",children:a?"...Read More":"Read Less"})]})},P=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&l(e,n)}(P,e);var n,t,i,o,h=(i=P,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=u(i);if(o){var t=u(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return d(this,e)});function P(){return a(this,P),h.apply(this,arguments)}return n=P,(t=[{key:"render",value:function(){var e=this.props.t;return(0,s.jsxs)("div",{className:"container container-wrapper",children:[(0,s.jsx)("h2",{className:"text-center",children:e("Testimonials:testiT1")}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(p,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT2")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT3")}),(0,s.jsx)(g,{children:e("Testimonials:testiT4")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(b,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT6")}),(0,s.jsx)(g,{children:e("Testimonials:testiT7")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(N,{})}),(0,s.jsxs)("h6",{children:[e("Testimonials:testiT8")," "]})]})]}),(0,s.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(m,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT9")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT10")}),(0,s.jsx)(g,{children:e("Testimonials:testiT12")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(x,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT13")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT14")}),(0,s.jsx)(g,{children:e("Testimonials:testiT16")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(j,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT17")}),(0,s.jsx)(g,{children:e("Testimonials:testiT18")})]})]}),(0,s.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(v,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT19")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(f,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT20")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT21")}),(0,s.jsx)(g,{children:e("Testimonials:testiT23")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(S,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT24")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(y,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT25")})]})]})]})]})}}])&&c(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),P}(r.Component);n.default=(0,i.Z)()(P)},43249:function(e,n,t){var r=t(67294),i=t(28744),s=t(85893);function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,s=[],o=!0,a=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(s.push(r.value),!n||s.length!==n);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}n.Z=(0,i.Z)()((function(e){var n=o((0,r.useState)(),2),t=n[0],i=n[1],a=o((0,r.useState)(),2),c=(a[0],a[1],o((0,r.useState)(),2)),l=c[0],d=c[1],u=o((0,r.useState)(),2),h=u[0],p=u[1],f=o((0,r.useState)(),2),m=f[0],x=f[1],b=o((0,r.useState)(),2),j=(b[0],b[1],e.t);return(0,s.jsx)("div",{className:"container mt-5",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-8",children:(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"mb-3 row",children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:" col-sm-4 calc-label",children:j("CTAFooter:calculator4")}),(0,s.jsx)("div",{className:"col-sm-8",children:(0,s.jsx)("input",{onChange:function(e){return i(e.target.value)},type:"number",className:"calc-control",id:"exampleFormControlInput1",placeholder:""})})]}),(0,s.jsxs)("div",{className:"mb-3 row",children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"col-sm-4 calc-label",children:j("CTAFooter:calculator5")}),(0,s.jsx)("div",{className:"col-sm-8",children:(0,s.jsx)("input",{onChange:function(e){return d(e.target.value)},type:"number",className:"calc-control",id:"exampleFormControlInput1",placeholder:""})})]}),(0,s.jsxs)("div",{className:"mb-3 row",children:[(0,s.jsx)("label",{htmlFor:"exampleFormControlInput1",className:" col-sm-4 calc-label",children:j("CTAFooter:calculator6")}),(0,s.jsx)("div",{className:"col-sm-8",children:(0,s.jsx)("input",{onChange:function(e){return p(e.target.value)},type:"number",className:"calc-control",id:"exampleFormControlInput1",placeholder:""})})]}),(0,s.jsx)("button",{onClick:function(){var e;e=t*Math.pow(1+l/100,h),x(e.toLocaleString("en-IN",{maximumFractionDigits:0,currency:"INR"}))},type:"button",className:"btn btn-primary",children:"Calculate"})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)("div",{className:"pricipalDiv",children:[(0,s.jsx)("h3",{children:j("CTAFooter:calculator1")}),(0,s.jsxs)("h4",{children:[j("CTAFooter:calculator2"),m]})]})})]})})}))},99720:function(e,n,t){t.r(n),t.d(n,{NPS:function(){return I},default:function(){return A}});var r=t(67294),i=t(16136),s=t(43249),o=t(117),a=t(53260),c=t.p+"1a92b83d9ad9435e8f73b9a3c7545b44.png",l=t.p+"8abc886d477e2df03a0561188080e5a7.svg",d=t.p+"0858ac393025d6dcc57899999755b616.svg",u=t.p+"b1321f3920133671ecae9bffaa8cc327.svg",h=t(28744),p=t(64593),f=t(75412),m=t(10682),x=(t(26720),t(85893));function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function j(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,n){return y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},y(e,n)}function S(e,n){if(n&&("object"===b(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var N=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&y(e,n)}(o,e);var n,t,r,i,s=(r=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v(r);if(i){var t=v(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return S(this,e)});function o(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),(e=s.call(this)).state={items:[],isLoaded:!1},e}return n=o,(t=[{key:"componentDidMount",value:function(){var e=this,n={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,items:n.ObjectResponse.productCategoryList})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,n){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(n.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,n={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",t).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,items:n.ObjectResponse.productCategoryList})})).catch((function(n){console.log(n),e.setState({items:null})}))}},{key:"render",value:function(){var e=this.state,n=e.isLoaded,t=e.items;return n?(0,x.jsx)("div",{className:"API-Section",children:(0,x.jsx)("div",{className:"api",children:t&&t.map((function(e){return(0,x.jsx)("div",{className:"api-flex",children:(0,x.jsxs)("div",{className:"flex-container",children:[(0,x.jsx)("div",{className:"flex-item fg3",children:e.Product_name}),(0,x.jsx)("div",{className:"flex-item",children:(0,x.jsx)("a",{href:e.URLName,target:"_blank",className:"api-button",children:"Invest Now"})})]})},e.Product_name)}))})}):(0,x.jsx)("div",{children:(0,x.jsx)("h1",{children:"Funds are Loading"})})}}])&&j(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),o}(r.Component);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function P(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,n){return w=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},w(e,n)}function C(e,n){if(n&&("object"===g(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var I=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&w(e,n)}(j,e);var n,t,r,h,b=(r=j,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=O(r);if(h){var t=O(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return C(this,e)});function j(){var e,n,t,r;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,j),r={NPS:{Title:"",ProductCategoryId:"6",SebiCategory:"",SebiSubCategory:"",DefaultProductId:"1"}},(t="data")in(n=T(e=b.call(this)))?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n.data=r,e}return n=j,(t=[{key:"render",value:function(){var e=this.data.NPS,n=this.props.t,t=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com"},{"@type":"ListItem",position:2,name:"National Pension Scheme",item:"https://nivesh.com/en/national-pension-scheme/"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How do I Choose an NPS Scheme?",acceptedAnswer:{"@type":"Answer",text:"There are various choices available under the best NPS scheme in India. NPS schemes can automatically invest money based on the age of the subscriber. This is known as Auto choice. However, the individual also has the flexibility to choose various asset classes for investment under the Active choice; including stocks, government securities, and fixed income instruments other than government securities."}},{"@type":"Question",name:"What is the Current NPS Interest Rate?",acceptedAnswer:{"@type":"Answer",text:"The Interest rates for the NPS schemes range between 9% to 12% depending on the type of scheme."}},{"@type":"Question",name:"How is NPS Calculated?",acceptedAnswer:{"@type":"Answer",text:"NPS is calculated based on your current age when you start investing and when you wish to retire. The amount that will be invested per month, returns expected, investment period, the percentage of return throughout the period of investment you receive, all of this will be a factor in how you can calculate your NPS amounts."}},{"@type":"Question",name:"How Much Pension will I get From NPS?",acceptedAnswer:{"@type":"Answer",text:"This depends on the amount invested and the rate of return given by the fund over the period of investment."}},{"@type":"Question",name:"How Withdrawal of NPS Funds happens?",acceptedAnswer:{"@type":"Answer",text:"Reaching the age of 60: Out of the total accumulated NPS funds, at least 40% needs to be used for the purchase of an annuity for providing a monthly pension. Balance is paid as a lump sum to the individual. If the total amount is less than INR 2 Lakhs, the individual can withdraw 100% of the corpus.\n          Before reaching the age of 60: Funds in the National Pension Scheme investment can be withdrawn before the age of 60, only if the individual has completed 10 years in NPS. Individuals will have to pay at least 80% of the accumulated pension to purchase the annuity for monthly income.\n          Death of the individual: Upon the death of the individual, the registered nominee can withdraw 100% of the NPS funds. If the nominee wishes, the NPS account can be continued provided the KYC procedure is followed."}}]}]);return(0,x.jsxs)("main",{children:[(0,x.jsxs)(p.q,{children:[(0,x.jsx)("meta",{charSet:"utf-8"}),(0,x.jsx)("title",{children:n("MetaTitle:mT52")}),(0,x.jsx)("meta",{name:"description",content:n("MetaDescription:mD52")}),(0,x.jsx)("link",{rel:"canonical",href:window.location.href}),(0,x.jsx)("script",{type:"application/ld+json",children:t})]}),(0,x.jsx)(m.Z,{children:(0,x.jsxs)(f.Z,{children:[(0,x.jsx)(f.Z.Item,{href:"/",children:n("BreadCrumb:bd-45")}),(0,x.jsx)(f.Z.Item,{active:!0,children:n("BreadCrumb:bd-63")})]})}),(0,x.jsx)("div",{className:"container container-wrapper",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-lg-7 col-md-6 mb-4",children:[(0,x.jsx)("h1",{children:n("NPS:nPS1")}),(0,x.jsx)("p",{children:n("NPS:nPS2")}),(0,x.jsx)("div",{className:"registerFair",children:(0,x.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,x.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:n("CTAFooter:InvestNow1")})})})]}),(0,x.jsx)("div",{className:"col-lg-5 col-md-6",children:(0,x.jsx)("img",{src:c,className:"img-fluid"})})]})}),(0,x.jsx)("div",{className:"API-Section",children:(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"text-center",children:"Best NPS Plans"}),(0,x.jsx)("div",{className:"row row justify-content-lg-center",children:(0,x.jsx)("div",{className:"col col-lg-10",children:(0,x.jsx)(N,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,x.jsx)("div",{className:"bg-white",children:(0,x.jsxs)("div",{className:"container features",children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-lg-12",children:(0,x.jsx)("h2",{className:"mb-4",children:n("NPS:nPS3")})}),(0,x.jsx)("div",{className:"col-lg-3 col-md-6 mb-4",children:(0,x.jsxs)("div",{className:"imgFeatures",children:[(0,x.jsx)("img",{src:l}),(0,x.jsx)("h4",{children:n("NPS:nPS4")}),(0,x.jsx)("p",{className:"small-text",children:n("NPS:nPS5")})]})}),(0,x.jsx)("div",{className:"col-lg-3 col-md-6 mb-4",children:(0,x.jsxs)("div",{className:"imgFeatures",children:[(0,x.jsx)("img",{src:d}),(0,x.jsx)("h4",{children:n("NPS:nPS6")}),(0,x.jsx)("p",{className:"small-text",children:n("NPS:nPS7")})]})}),(0,x.jsx)("div",{className:"col-lg-3 col-md-6 mb-4",children:(0,x.jsxs)("div",{className:"imgFeatures",children:[(0,x.jsx)("img",{src:u}),(0,x.jsx)("h4",{children:n("NPS:nPS8")}),(0,x.jsx)("p",{className:"small-text",children:n("NPS:nPS9")})]})}),(0,x.jsx)("div",{className:"col-lg-3 col-md-6 mb-4",children:(0,x.jsxs)("div",{className:"imgFeatures",children:[(0,x.jsx)("img",{src:u}),(0,x.jsx)("h4",{children:n("NPS:nPS10")}),(0,x.jsx)("p",{className:"small-text",children:n("NPS:nPS11")})]})})]}),(0,x.jsx)("div",{className:"text-center mt-5",children:(0,x.jsx)("a",{href:"https://app.nivesh.com/home/index",className:"btn btn-primary",children:n("CTAFooter:InvestNow1")})})]})}),(0,x.jsx)("div",{className:"getStarted",children:(0,x.jsx)("div",{className:"container container-wrapper",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-lg-5 getStartedBtn mb-5",children:[(0,x.jsx)("h2",{children:n("NPS:nPS12")}),(0,x.jsx)("p",{children:n("NPS:nPS13")}),(0,x.jsx)("div",{className:"text-left",children:(0,x.jsx)("a",{href:"https://app.nivesh.com/home/index",className:"btn btn-primary",children:n("CTAFooter:InvestNow1")})})]}),(0,x.jsxs)("div",{className:"col-lg-7",children:[(0,x.jsxs)("div",{className:"stepWrp",children:[(0,x.jsxs)("div",{className:"stepLft",children:[" ",n("NPS:nPS14-A")]}),(0,x.jsx)("div",{className:"stepRgt",children:n("NPS:nPS14")})]}),(0,x.jsxs)("div",{className:"stepWrp",children:[(0,x.jsxs)("div",{className:"stepLft",children:[" ",n("NPS:nPS15-A")]}),(0,x.jsx)("div",{className:"stepRgt",children:n("NPS:nPS15")})]}),(0,x.jsxs)("div",{className:"stepWrp",children:[(0,x.jsxs)("div",{className:"stepLft",children:[" ",n("NPS:nPS16-A")]}),(0,x.jsx)("div",{className:"stepRgt",children:n("NPS:nPS16")})]}),(0,x.jsxs)("div",{className:"stepWrp",children:[(0,x.jsxs)("div",{className:"stepLft",children:[" ",n("NPS:nPS17-A")]}),(0,x.jsx)("div",{className:"stepRgt",children:n("NPS:nPS17")})]})]})]})})}),(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{children:n("NPS:nPS18")}),(0,x.jsxs)(o.mQ,{children:[(0,x.jsxs)(o.td,{children:[(0,x.jsx)(o.OK,{children:n("NPS:nPS19")}),(0,x.jsx)(o.OK,{children:n("NPS:nPS32")}),(0,x.jsx)(o.OK,{children:n("NPS:nPS37")})]}),(0,x.jsxs)(o.x4,{children:[(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:n("NPS:nPS20")}),(0,x.jsx)("li",{children:n("NPS:nPS21")})]}),(0,x.jsx)("p",{children:"There are two sub-accounts available while opening an NPS funds in India:"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)("b",{children:n("NPS:nPS22")})}),n("NPS:nPS23"),(0,x.jsx)("br",{}),n("NPS:nPS24"),(0,x.jsx)("br",{}),n("NPS:nPS25"),(0,x.jsx)("br",{}),n("NPS:nPS26"),(0,x.jsx)("br",{}),(0,x.jsx)("li",{children:(0,x.jsx)("b",{children:n("NPS:nPS27")})}),n("NPS:nPS28"),(0,x.jsx)("br",{}),n("NPS:nPS29"),(0,x.jsx)("br",{}),n("NPS:nPS30"),(0,x.jsx)("br",{}),n("NPS:nPS31")]})]}),(0,x.jsxs)(o.x4,{children:[(0,x.jsx)("p",{children:n("NPS:nPS33")}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:n("NPS:nPS35")}),(0,x.jsx)("li",{children:n("NPS:nPS35-A")}),(0,x.jsx)("li",{children:n("NPS:nPS35-B")})]}),(0,x.jsx)("p",{children:n("NPS:nPS36")})]}),(0,x.jsxs)(o.x4,{children:[(0,x.jsx)("p",{children:n("NPS:nPS38")}),(0,x.jsx)("ul",{children:(0,x.jsx)("li",{children:n("NPS:nPS39")})})]})]})]}),(0,x.jsx)(i.default,{}),(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{children:n("NPS:nPS40")}),(0,x.jsx)("p",{children:(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:n("NPS:nPS41")}),(0,x.jsx)("li",{children:n("NPS:nPS42")}),(0,x.jsx)("li",{children:n("NPS:nPS43")}),(0,x.jsx)("li",{children:n("NPS:nPS44")})]})})]}),(0,x.jsx)("div",{className:"landingPlatforms",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("h2",{children:n("NPS:nPS45")}),(0,x.jsxs)("ul",{className:"ul-white",children:[(0,x.jsx)("li",{children:n("NPS:nPS46")}),(0,x.jsx)("li",{children:n("NPS:nPS47")}),(0,x.jsx)("li",{children:n("NPS:nPS48")}),(0,x.jsx)("li",{children:n("NPS:nPS49")}),(0,x.jsx)("li",{children:n("NPS:nPS50")})]})]})})}),(0,x.jsx)("div",{className:"calCulator",children:(0,x.jsxs)("div",{className:"container container-wrapper",children:[(0,x.jsx)("h2",{className:"mb-4",children:"Use Our National Pension Calculator to Figure Out the Pension Amount you Accumulate"}),(0,x.jsx)(s.Z,{})]})}),(0,x.jsx)(a.default,{}),(0,x.jsx)("div",{className:"container testimonials",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"col-lg-12",children:[(0,x.jsx)("h2",{children:n("NPS:nPS51")}),(0,x.jsxs)("div",{id:"accordion",children:[(0,x.jsx)("h3",{children:n("NPS:nPS52")}),(0,x.jsx)("p",{children:n("NPS:nPS53")}),(0,x.jsx)("h3",{children:n("NPS:nPS54")}),(0,x.jsx)("p",{children:n("NPS:nPS55")}),(0,x.jsx)("h3",{children:n("NPS:nPS56")}),(0,x.jsx)("p",{children:n("NPS:nPS57")}),(0,x.jsx)("h3",{children:n("NPS:nPS58")}),(0,x.jsx)("p",{children:n("NPS:nPS59")}),(0,x.jsx)("h3",{children:n("NPS:nPS60")}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:n("NPS:nPS61")}),(0,x.jsx)("li",{children:n("NPS:nPS62")}),(0,x.jsx)("li",{children:n("NPS:nPS64")})]})]})]})})})]})}}])&&P(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),j}(r.Component),A=(0,h.Z)()(I)},10164:function(e,n,t){var r=t(8081),i=t.n(r),s=t(23645),o=t.n(s)()(i());o.push([e.id,'.api-button{\r\n     background-color: #FFFFFF;\r\n     font-size: 18px;\r\n     font-family: "Montserrat";\r\n     font-weight: 600;\r\n     text-align: center;\r\n     color: #202D62;\r\n     line-height: 24px;\r\n     padding: 10px 32px;\r\n     float: right;\r\n     border-radius: 4px;\r\n}\r\n\r\n@media(max-width:768px){\r\n    .api-button{\r\n        float: right;\r\n        font-size: 12px;\r\n        padding: 4px;\r\n        border-radius: 4px;\r\n    }\r\n}\r\n\r\n.api h2{\r\n    text-align: center;\r\n    margin-bottom: 24px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.API-Section{\r\n    background: #E2E9F1;\r\n}\r\n\r\n#below-head{\r\n    background-color: #e9e9e9;\r\n    padding: 15px;\r\n}\r\n\r\n#below-head-values{\r\n    background-color: #C4DFF4;\r\n}\r\n\r\n.api-table>thead>tr>th {\r\n    padding: 15px;\r\n    background-color: #202D62;\r\n    color: white;\r\n}\r\n\r\n.api-table{\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.api-table>thead>tr>th{\r\n    line-height: inherit;\r\n}\r\n\r\n.table>thead>tr>th{\r\n    vertical-align: inherit;\r\n}\r\n\r\n.api-table>tbody>tr>th{\r\n    padding: 15px;\r\n}\r\n.api-table>tbody>tr>td{\r\n    padding: 15px;\r\n}\r\n\r\n.flex-container{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #202D62;\r\n    padding: 8px;\r\n    align-items: center;\r\n}\r\n.flex-container1{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #e9e9e9;\r\n    padding: 8px;\r\n}\r\n.flex-container2{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #C4DFF4;\r\n    padding: 8px;\r\n}\r\n.flex-item{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: white;\r\n}\r\n.flex-item1{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: #202D62;\r\n}\r\n\r\n@media (max-width:768px){\r\n    .flex-item{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .flex-item1{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.fg3{\r\n    flex-grow: 3;\r\n}\r\n\r\n.api-flex{\r\n    margin-bottom: 30px;\r\n}\r\n',""]),n.Z=o},26720:function(e,n,t){var r=t(93379),i=t.n(r),s=t(7795),o=t.n(s),a=t(90569),c=t.n(a),l=t(3565),d=t.n(l),u=t(19216),h=t.n(u),p=t(44589),f=t.n(p),m=t(10164),x={};x.styleTagTransform=f(),x.setAttributes=d(),x.insert=c().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=h(),i()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals}}]);