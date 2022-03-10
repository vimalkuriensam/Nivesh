"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[4019,3260,5695,6136],{16136:function(e,t,r){r.r(t),r.d(t,{NApi:function(){return u}});var n=r(67294),i=r(28744),s=r(85893);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function a(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(u,e);var t,r,n,i,o=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(i){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return a(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=o.call(this)).state={items:[],isLoaded:!1},e}return t=u,(r=[{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json",token:"636F8F63-06C4-4D95-8562-392B34025FB0"},body:JSON.stringify({TotalClient:"",TotalPartner:"",TotalPartnerOverCities:"",NoOfTransaction:"",TotalTransactionValue:""})};fetch("https://api.nivesh.com/API/GetSummaryDetails",t).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.SummaryDetailsList})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,r=e.items,n=this.props.t;return t?(0,s.jsx)("div",{id:"about-stats",children:(0,s.jsx)("div",{className:"container container-wrapper",children:r&&(0,s.jsxs)("div",{className:"row row justify-content-center align-items-center",children:[(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsx)("h2",{className:"text-white",children:r.TotalPartner.toLocaleString("en-IN",{maximumFractionDigits:0})}),(0,s.jsxs)("h4",{className:"text-white",children:[n("Home:hOME61")," ",(0,s.jsx)("span",{children:r.TotalPartnerOverCities.toLocaleString("en-IN",{maximumFractionDigits:0})})," ",n("Home:hOME61-A")]})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsx)("h2",{className:"text-white",children:r.TotalClient.toLocaleString("en-IN",{maximumFractionDigits:0})}),(0,s.jsx)("h4",{className:"text-white",children:n("Home:hOME62")})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsx)("h2",{className:"text-white",children:r.NoOfTransaction.toLocaleString("en-IN",{maximumFractionDigits:0})}),(0,s.jsx)("h4",{className:"text-white",children:n("Home:hOME63")})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsxs)("h2",{className:"text-white",children:["Rs. ",parseInt(r.TotalTransactionValue).toLocaleString("en-IN",{maximumFractionDigits:0})]}),(0,s.jsx)("h4",{className:"text-white",children:n("Home:hOME64")})]})})]})})}):(0,s.jsx)("div",{children:"Loading..."})}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.Component);t.default=(0,i.Z)()(u)},35695:function(e,t,r){r.r(t),r.d(t,{PartnerFD:function(){return b},default:function(){return y}});var n=r(67294),i=r.p+"ebe7fc6de268f71f0ce97b3be2183f85.svg",s=r(61510),o=r.p+"dbcbd85c0b9470eb67bab651680ca678.svg",c=r.p+"d341cd2aad4bd42d0b789729174da896.svg",l=r(44651),a=r.p+"5a4b86f02f558e0067bdbd4a79bda71a.svg",d=r(28744),u=r(85893);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(b,e);var t,r,n,d,f=(n=b,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(d){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function b(){return h(this,b),f.apply(this,arguments)}return t=b,(r=[{key:"render",value:function(){var e=this.props.t;return(0,u.jsx)("div",{className:"ourPartCaptital",children:(0,u.jsx)("div",{className:"container container-wrapper invest",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-lg-12",children:(0,u.jsx)("h2",{children:e("FixedDeposits:fixedD63")})}),(0,u.jsx)("div",{className:"col-lg-4 mb-4",children:(0,u.jsxs)("div",{className:"card h-100",children:[(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("img",{src:i}),(0,u.jsx)("h4",{children:e("FixedDeposits:fixedD64")}),(0,u.jsx)("p",{children:e("FixedDeposits:fixedD65")})]}),(0,u.jsx)("div",{className:"card-footer pt-0",children:(0,u.jsx)("a",{href:"/fixed-deposit/pnb-housing-finance-ltd/",className:"btn btn-primary",children:e("CTAFooter:MoreButton")})})]})}),(0,u.jsx)("div",{className:"col-lg-4 mb-4",children:(0,u.jsxs)("div",{className:"card h-100",children:[(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("img",{src:s.Z}),(0,u.jsx)("h4",{children:e("FixedDeposits:fixedD66")}),(0,u.jsx)("p",{children:e("FixedDeposits:fixedD67")})]}),(0,u.jsx)("div",{className:"card-footer pt-0",children:(0,u.jsx)("a",{href:"/fixed-deposit/hdfc-ltd",className:"btn btn-primary",children:e("CTAFooter:MoreButton")})})]})}),(0,u.jsx)("div",{className:"col-lg-4 mb-4",children:(0,u.jsxs)("div",{className:"card h-100",children:[(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("img",{src:o}),(0,u.jsx)("h4",{children:e("FixedDeposits:fixedD68")}),(0,u.jsx)("p",{children:e("FixedDeposits:fixedD69")})]}),(0,u.jsx)("div",{className:"card-footer pt-0",children:(0,u.jsx)("a",{href:"/fixed-deposit/icici-home-finance-co-ltd",className:"btn btn-primary",children:e("CTAFooter:MoreButton")})})]})}),(0,u.jsx)("div",{className:"col-lg-4 mb-4",children:(0,u.jsxs)("div",{className:"card h-100",children:[(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("img",{src:c}),(0,u.jsx)("h4",{children:e("FixedDeposits:fixedD70")}),(0,u.jsx)("p",{children:e("FixedDeposits:fixedD71")})]}),(0,u.jsx)("div",{className:"card-footer pt-0",children:(0,u.jsx)("a",{href:"/fixed-deposit/shriram-transport-finance-company-ltd",className:"btn btn-primary",children:e("CTAFooter:MoreButton")})})]})}),(0,u.jsx)("div",{className:"col-lg-4 mb-4",children:(0,u.jsxs)("div",{className:"card h-100",children:[(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("img",{src:l.Z}),(0,u.jsx)("h4",{children:e("FixedDeposits:fixedD72")}),(0,u.jsx)("p",{children:e("FixedDeposits:fixedD73")})]}),(0,u.jsx)("div",{className:"card-footer pt-0",children:(0,u.jsx)("a",{href:"/fixed-deposit/bajaj-finance-ltd",className:"btn btn-primary",children:e("CTAFooter:MoreButton")})})]})}),(0,u.jsx)("div",{className:"col-lg-4 mb-4",children:(0,u.jsxs)("div",{className:"card h-100",children:[(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("img",{src:a}),(0,u.jsx)("h4",{children:e("FixedDeposits:fixedD74")}),(0,u.jsx)("p",{children:e("FixedDeposits:fixedD75")})]}),(0,u.jsx)("div",{className:"card-footer pt-0",children:(0,u.jsx)("a",{href:"/fixed-deposit/mahindra-finance-limited/",className:"btn btn-primary",children:e("CTAFooter:MoreButton")})})]})})]})})})}}])&&x(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),b}(n.Component),y=(0,d.Z)()(b)},71234:function(e,t,r){var n=r(67294),i=(r(26720),r(85893));function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(u,e);var t,r,n,s,d=(n=u,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=a(n);if(s){var r=a(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=d.call(this)).state={items:[],MainTitle:[],isLoaded:!1},e}return t=u,(r=[{key:"componentDidMount",value:function(){var e=this,t={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",r).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.ObjectResponse.SchemeDataList,MainTitle:t.ObjectResponse.TitleResponse})})).catch((function(e){console.log(e)}))}},{key:"shouldComponentUpdate",value:function(e,t){return e.productCategoryId!==this.props.productCategoryId||e.sebiCategoryId!==this.props.sebiCategoryId||e.sebiSubCategoryId!==this.props.sebiSubCategoryId||JSON.stringify(t.items)!==JSON.stringify(this.state.items)}},{key:"componentDidUpdate",value:function(){var e=this,t={ProductCategoryId:this.props.productCategoryId,ClientCode:"",LanguageId:1,device:"",AMCCode:"",SebiCategoryId:this.props.sebiCategoryId?this.props.sebiCategoryId:"",SebiSubCategoryId:this.props.sebiSubCategoryId?this.props.sebiSubCategoryId:"",DefaultProductId:this.props.defaultProductId?this.props.defaultProductId:""},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};this.setState({isLoaded:!1}),fetch("https://api.nivesh.com/API/getSchemeDataFromProduct",r).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t.ObjectResponse.SchemeDataList,MainTitle:t.ObjectResponse.TitleResponse})})).catch((function(t){console.log(t),e.setState({items:null})}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.isLoaded,n=t.items;return t.MainTitle,r?(0,i.jsx)("div",{className:"API-Section",children:(0,i.jsx)("div",{className:"api",children:n&&n.map((function(t){return(0,i.jsxs)("div",{className:"api-flex",children:[(0,i.jsxs)("div",{className:"flex-container",children:[(0,i.jsx)("div",{className:"flex-item fg3",children:t.SchemeName}),(0,i.jsx)("div",{className:"flex-item",children:(0,i.jsx)("a",{href:"https://app.nivesh.com/Home/Index?SchemeCode=".concat(t.SchemeCode,"&selectedcategoryId=").concat(e.props.productCategoryId),target:"_blank",className:"api-button",children:"Invest Now"})})]}),(0,i.jsxs)("div",{className:"flex-container1",children:[(0,i.jsx)("div",{className:"flex-item1",children:"1 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"2 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"3 Year"}),(0,i.jsx)("div",{className:"flex-item1",children:"5 Year"})]}),(0,i.jsxs)("div",{className:"flex-container2",children:[(0,i.jsxs)("div",{className:"flex-item1",children:[t.OneYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[t.TwoYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[t.ThreeYearReturn,"%"]}),(0,i.jsxs)("div",{className:"flex-item1",children:[t.FiveYearReturn,"%"]})]})]},t.SchemeCode)}))})}):(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:"Funds are Loading"})})}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(n.Component);t.Z=d},53260:function(e,t,r){r.r(t),r.d(t,{Content:function(){return w}});var n=r(67294),i=r(28744),s=r(85893);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function d(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=n.lazy((function(){return r.e(7026).then(r.bind(r,87026))})),x=n.lazy((function(){return r.e(4130).then(r.bind(r,24130))})),p=n.lazy((function(){return r.e(3298).then(r.bind(r,83298))})),m=n.lazy((function(){return r.e(4638).then(r.bind(r,34638))})),j=n.lazy((function(){return r.e(4517).then(r.bind(r,74517))})),b=n.lazy((function(){return r.e(9717).then(r.bind(r,89717))})),y=n.lazy((function(){return r.e(7784).then(r.bind(r,17784))})),v=n.lazy((function(){return r.e(926).then(r.bind(r,50926))})),g=n.lazy((function(){return r.e(7946).then(r.bind(r,27946))})),D=n.lazy((function(){return r.e(8439).then(r.bind(r,38439))})),N=function(e){var t,r,i=e.children,o=(t=(0,n.useState)(!0),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,s=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(e){c=!0,i=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return s}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],l=o[1];return(0,s.jsxs)("p",{className:"text small-text",children:[c?i.slice(0,150):i,(0,s.jsx)("span",{onClick:function(){l(!c)},className:"read-or-hide",children:c?"...Read More":"Read Less"})]})},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(w,e);var t,r,i,o,f=(i=w,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(i);if(o){var r=u(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function w(){return c(this,w),f.apply(this,arguments)}return t=w,(r=[{key:"render",value:function(){var e=this.props.t;return(0,s.jsxs)("div",{className:"container container-wrapper",children:[(0,s.jsx)("h2",{className:"text-center",children:e("Testimonials:testiT1")}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(h,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT2")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT3")}),(0,s.jsx)(N,{children:e("Testimonials:testiT4")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(j,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT6")}),(0,s.jsx)(N,{children:e("Testimonials:testiT7")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(D,{})}),(0,s.jsxs)("h6",{children:[e("Testimonials:testiT8")," "]})]})]}),(0,s.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(p,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT9")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT10")}),(0,s.jsx)(N,{children:e("Testimonials:testiT12")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(m,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT13")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT14")}),(0,s.jsx)(N,{children:e("Testimonials:testiT16")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(b,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT17")}),(0,s.jsx)(N,{children:e("Testimonials:testiT18")})]})]}),(0,s.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(g,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT19")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(x,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT20")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT21")}),(0,s.jsx)(N,{children:e("Testimonials:testiT23")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(v,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT24")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(n.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(y,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT25")})]})]})]})]})}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),w}(n.Component);t.default=(0,i.Z)()(w)},74019:function(e,t,r){r.r(t),r.d(t,{default:function(){return P},fd:function(){return O}});var n=r(67294),i=r.p+"f502462d2a5d57df7dceb30f089aec85.png",s=r.p+"8a99933e67c7b3365c4eaf50e0278cbb.svg",o=r.p+"302caf55347788581ca252b916f5982f.svg",c=r.p+"c7c7a7aa4ad7f45c2847b16a7d976285.svg",l=r.p+"ebb3a6273d36b2cdb04983ea9621477f.svg",a=r.p+"55dcd33d3a08cd71b83784f88899a0dc.svg",d=r(117),u=(r(17654),r(16136)),f=r(28744),h=r(85893);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,s=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(e){c=!0,i=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var m=(0,f.Z)()((function(e){var t=x((0,n.useState)(),2),r=t[0],i=t[1],s=x((0,n.useState)(),2),o=s[0],c=s[1],l=x((0,n.useState)(),2),a=l[0],d=l[1],u=x((0,n.useState)(),2),f=u[0],p=u[1],m=x((0,n.useState)(),2),j=m[0],b=m[1],y=e.t;return(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-8",children:(0,h.jsxs)("form",{children:[(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)("label",{htmlFor:"exampleFormControlInput1",className:" col-sm-4 calc-label",children:y("CTAFooter:calculator4")}),(0,h.jsx)("div",{className:"col-sm-8",children:(0,h.jsx)("input",{onChange:function(e){return i(e.target.value)},type:"text",className:"calc-control",id:"exampleFormControlInput1",placeholder:""})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"col-sm-4 calc-label",children:y("CTAFooter:calculator5")}),(0,h.jsx)("div",{className:"col-sm-8",children:(0,h.jsx)("input",{onChange:function(e){return d(e.target.value)},type:"text",className:"calc-control",id:"exampleFormControlInput1",placeholder:""})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)("label",{htmlFor:"exampleFormControlInput1",className:" col-sm-4 calc-label",children:y("CTAFooter:calculator6")}),(0,h.jsx)("div",{className:"col-sm-8",children:(0,h.jsx)("input",{onChange:function(e){return p(e.target.value)},type:"number",className:"calc-control",id:"exampleFormControlInput1",placeholder:""})})]}),(0,h.jsxs)("div",{className:"mb-3 row",children:[(0,h.jsx)("label",{htmlFor:"exampleFormControlInput1",className:" col-sm-4 calc-label",children:"Compounding Period in Years"}),(0,h.jsx)("div",{className:"col-sm-8",children:(0,h.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"number",className:"calc-control",id:"exampleFormControlInput1",placeholder:""})})]}),(0,h.jsx)("button",{onClick:function(){var e;e=parseInt(r*Math.pow(1+a/(100*o),f*o)),b(e.toLocaleString("en-IN",{maximumFractionDigits:0,currency:"INR"}))},type:"button",className:"btn btn-primary",children:"Calculate"})]})}),(0,h.jsx)("div",{className:"col-lg-4",children:(0,h.jsxs)("div",{className:"pricipalDiv",children:[(0,h.jsx)("h3",{children:y("CTAFooter:calculator1")}),(0,h.jsxs)("h4",{children:["Maturity Value: ₹ ",j]})]})})]})})),j=r(71234),b=r(53260),y=r(35695),v=r(64593),g=r(75412),D=r(10682);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}function S(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(p,e);var t,r,n,f,x=(n=p,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(n);if(f){var r=C(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return S(this,e)});function p(){var e,t,r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),n={FD:{Title:"",ProductCategoryId:"2",SebiCategory:"",SebiSubCategory:"",DefaultProductId:"1"}},(r="data")in(t=T(e=x.call(this)))?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t.data=n,e}return t=p,(r=[{key:"render",value:function(){var e=this.data.FD,t=this.props.t;return(0,h.jsxs)("section",{children:[(0,h.jsxs)(v.q,{children:[(0,h.jsx)("meta",{charSet:"utf-8"}),(0,h.jsx)("title",{children:t("MetaTitle:mT56")}),(0,h.jsx)("meta",{name:"description",content:t("MetaDescription:mD56")}),(0,h.jsx)("link",{rel:"canonical",href:window.location.href})]}),(0,h.jsx)(D.Z,{children:(0,h.jsxs)(g.Z,{children:[(0,h.jsx)(g.Z.Item,{href:"/",children:"Home"}),(0,h.jsx)(g.Z.Item,{active:!0,children:"Fixed Deposit"})]})}),(0,h.jsx)("div",{className:"container container-wrapper",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-lg-7 col-md-6 mb-4",children:[(0,h.jsx)("h1",{children:t("FixedDeposits:fixedD1")}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD2")}),(0,h.jsx)("div",{className:"registerFair",children:(0,h.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,h.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:t("CTAFooter:InvestNow1")})})})]}),(0,h.jsx)("div",{className:"col-lg-5 col-md-6 col-12",children:(0,h.jsx)("img",{src:i,className:"img-fluid"})})]})}),(0,h.jsx)("div",{className:"API-Section",children:(0,h.jsxs)("div",{className:"container container-wrapper",children:[(0,h.jsx)("h2",{className:"text-center",children:t("FixedDeposits:fixedD3")}),(0,h.jsx)("div",{className:"row row justify-content-lg-center",children:(0,h.jsx)("div",{className:"col col-lg-10",children:(0,h.jsx)(j.Z,{productCategoryId:e.ProductCategoryId,sebiCategory:e.SebiCategory,sebiSubCategory:e.SebiSubCategory,defaultProductId:e.DefaultProductId})})})]})}),(0,h.jsxs)("div",{className:"container features",children:[(0,h.jsx)("h2",{children:t("FixedDeposits:fixedD4")}),(0,h.jsxs)("div",{className:"row row mb-4 mt-4 justify-content-md-center",children:[(0,h.jsx)("div",{className:"col-lg-4 col-md-4 mb-4",children:(0,h.jsxs)("div",{className:"imgFeatures",children:[(0,h.jsx)("img",{src:s}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD5")})]})}),(0,h.jsx)("div",{className:"col-lg-4 col-md-4 mb-4",children:(0,h.jsxs)("div",{className:"imgFeatures",children:[(0,h.jsx)("img",{src:o}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD6")})]})}),(0,h.jsx)("div",{className:"col-lg-4 col-md-4 mb-4",children:(0,h.jsxs)("div",{className:"imgFeatures",children:[(0,h.jsx)("img",{src:c}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD7")})]})}),(0,h.jsx)("div",{className:"col-lg-4 col-md-4 mb-4",children:(0,h.jsxs)("div",{className:"imgFeatures",children:[(0,h.jsx)("img",{src:l}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD8")})]})}),(0,h.jsx)("div",{className:"col-lg-4 col-md-4 mb-4",children:(0,h.jsxs)("div",{className:"imgFeatures",children:[(0,h.jsx)("img",{src:a}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD9")})]})})]}),(0,h.jsx)("a",{href:"https://app.nivesh.com/home/index",children:(0,h.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",children:t("CTAFooter:InvestNow1")})})]}),(0,h.jsx)("div",{className:"getCustomer",children:(0,h.jsxs)("div",{className:"container ourPartnerWrp",children:[(0,h.jsx)("h2",{children:t("FixedDeposits:fixedD10")}),(0,h.jsxs)("div",{className:"row row justify-content-md-center",children:[(0,h.jsx)("div",{className:"col col-lg-5 col-md-6 col-12 mb-4",children:(0,h.jsxs)("div",{className:"ourPartner",children:[(0,h.jsx)("h4",{children:t("FixedDeposits:fixedD11")}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD12")})]})}),(0,h.jsx)("div",{className:"col col-lg-5 col-md-6 col-12 mb-4",children:(0,h.jsxs)("div",{className:"ourPartner",children:[(0,h.jsx)("h4",{children:t("FixedDeposits:fixedD13")}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD14")})]})}),(0,h.jsx)("div",{className:"col col-lg-5 col-md-6 col-12 mb-4",children:(0,h.jsxs)("div",{className:"ourPartner",children:[(0,h.jsx)("h4",{children:t("FixedDeposits:fixedD15")}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD16")})]})}),(0,h.jsx)("div",{className:"col col-lg-5 col-md-6 col-12 mb-4",children:(0,h.jsxs)("div",{className:"ourPartner",children:[(0,h.jsx)("h4",{children:t("FixedDeposits:fixedD17")}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD18")})]})})]}),(0,h.jsx)("div",{className:"ctaBtnOur",children:(0,h.jsx)("a",{href:"https://app.nivesh.com/home/index",children:"Start Now"})})]})}),(0,h.jsx)(y.default,{}),(0,h.jsxs)("div",{className:"container container-wrapper",children:[(0,h.jsx)("h2",{children:t("FixedDeposits:fixedD19")}),(0,h.jsxs)(d.mQ,{children:[(0,h.jsxs)(d.td,{children:[(0,h.jsx)(d.OK,{children:t("FixedDeposits:fixedD20")}),(0,h.jsx)(d.OK,{children:t("FixedDeposits:fixedD21")}),(0,h.jsx)(d.OK,{children:t("FixedDeposits:fixedD22")})]}),(0,h.jsx)(d.x4,{children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:t("FixedDeposits:fixedD23")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD24")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD25")})]})}),(0,h.jsx)(d.x4,{children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:t("FixedDeposits:fixedD26")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD27")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD28")})]})}),(0,h.jsx)(d.x4,{children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:t("FixedDeposits:fixedD29")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD30")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD31")})]})})]})]}),(0,h.jsx)(u.default,{}),(0,h.jsx)(b.default,{}),(0,h.jsx)("div",{className:"calCulator",children:(0,h.jsxs)("div",{className:"container container-wrapper",children:[(0,h.jsx)("h2",{children:"FD Calculator"}),(0,h.jsx)(m,{})]})}),(0,h.jsx)("div",{className:"container testimonials",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsxs)("div",{className:"col-lg-12",children:[(0,h.jsx)("h2",{children:t("FixedDeposits:fixedD32")}),(0,h.jsxs)("div",{id:"accordion",children:[(0,h.jsx)("h3",{children:t("FixedDeposits:fixedD33")}),(0,h.jsx)("div",{children:(0,h.jsx)("p",{children:t("FixedDeposits:fixedD34")})}),(0,h.jsx)("h3",{children:t("FixedDeposits:fixedD35")}),(0,h.jsx)("div",{children:(0,h.jsx)("p",{children:t("FixedDeposits:fixedD36")})}),(0,h.jsx)("h3",{children:t("FixedDeposits:fixedD37")}),(0,h.jsx)("div",{children:(0,h.jsx)("p",{children:t("FixedDeposits:fixedD38")})}),(0,h.jsx)("h3",{children:t("FixedDeposits:fixedD39")}),(0,h.jsx)("div",{children:(0,h.jsx)("p",{children:t("FixedDeposits:fixedD40")})}),(0,h.jsx)("h3",{children:t("FixedDeposits:fixedD41")}),(0,h.jsxs)("div",{children:[" ",(0,h.jsx)("p",{children:t("FixedDeposits:fixedD42")})]}),(0,h.jsx)("h3",{children:t("FixedDeposits:fixedD43")}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD44")}),(0,h.jsx)("h3",{children:t("FixedDeposits:fixedD46")}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD47")}),(0,h.jsx)("h3",{children:t("FixedDeposits:fixedD49")}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD50")}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:t("FixedDeposits:fixedD52")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD53")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD54")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD55")})]}),(0,h.jsx)("h3",{children:t("FixedDeposits:fixedD56")}),(0,h.jsx)("p",{children:t("FixedDeposits:fixedD57")}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:t("FixedDeposits:fixedD58")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD59")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD60")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD61")}),(0,h.jsx)("li",{children:t("FixedDeposits:fixedD62")})]})]})]})})})]})}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(n.Component),P=(0,f.Z)()(O)},10164:function(e,t,r){var n=r(8081),i=r.n(n),s=r(23645),o=r.n(s)()(i());o.push([e.id,'.api-button{\r\n     background-color: #FFFFFF;\r\n     font-size: 18px;\r\n     font-family: "Montserrat";\r\n     font-weight: 600;\r\n     text-align: center;\r\n     color: #202D62;\r\n     line-height: 24px;\r\n     padding: 10px 32px;\r\n     float: right;\r\n     border-radius: 4px;\r\n}\r\n\r\n@media(max-width:768px){\r\n    .api-button{\r\n        float: right;\r\n        font-size: 12px;\r\n        padding: 4px;\r\n        border-radius: 4px;\r\n    }\r\n}\r\n\r\n.api h2{\r\n    text-align: center;\r\n    margin-bottom: 24px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.API-Section{\r\n    background: #E2E9F1;\r\n}\r\n\r\n#below-head{\r\n    background-color: #e9e9e9;\r\n    padding: 15px;\r\n}\r\n\r\n#below-head-values{\r\n    background-color: #C4DFF4;\r\n}\r\n\r\n.api-table>thead>tr>th {\r\n    padding: 15px;\r\n    background-color: #202D62;\r\n    color: white;\r\n}\r\n\r\n.api-table{\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.api-table>thead>tr>th{\r\n    line-height: inherit;\r\n}\r\n\r\n.table>thead>tr>th{\r\n    vertical-align: inherit;\r\n}\r\n\r\n.api-table>tbody>tr>th{\r\n    padding: 15px;\r\n}\r\n.api-table>tbody>tr>td{\r\n    padding: 15px;\r\n}\r\n\r\n.flex-container{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #202D62;\r\n    padding: 8px;\r\n    align-items: center;\r\n}\r\n.flex-container1{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #e9e9e9;\r\n    padding: 8px;\r\n}\r\n.flex-container2{\r\n    display: flex;\r\n    flex-flow:row wrap;\r\n    background-color: #C4DFF4;\r\n    padding: 8px;\r\n}\r\n.flex-item{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: white;\r\n}\r\n.flex-item1{\r\n    margin: 5px;\r\n    font-size: 18px;\r\n    font-family: "Montserrat", Sans-serif;\r\n    font-weight: 600;\r\n    flex-grow: 1;\r\n    flex-shrink:0;\r\n    flex-basis:20%;\r\n    color: #202D62;\r\n}\r\n\r\n@media (max-width:768px){\r\n    .flex-item{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n@media (max-width:768px){\r\n    .flex-item1{\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.fg3{\r\n    flex-grow: 3;\r\n}\r\n\r\n.api-flex{\r\n    margin-bottom: 30px;\r\n}\r\n',""]),t.Z=o},44651:function(e,t,r){t.Z=r.p+"58f15ef202551679678e8724e23c3de2.svg"},61510:function(e,t,r){t.Z=r.p+"6c7572cadb0fed9a670b944b9ccf8f18.svg"},26720:function(e,t,r){var n=r(93379),i=r.n(n),s=r(7795),o=r.n(s),c=r(90569),l=r.n(c),a=r(3565),d=r.n(a),u=r(19216),f=r.n(u),h=r(44589),x=r.n(h),p=r(10164),m={};m.styleTagTransform=x(),m.setAttributes=d(),m.insert=l().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=f(),i()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals}}]);