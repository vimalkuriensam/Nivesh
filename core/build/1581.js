"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[1581,6136],{80133:function(e,n,o){var r=o(67294),t=o(35848),s=o(85893);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,t,s=[],a=!0,l=!1;try{for(o=o.call(e);!(a=(r=o.next()).done)&&(s.push(r.value),!n||s.length!==n);a=!0);}catch(e){l=!0,t=e}finally{try{a||null==o.return||o.return()}finally{if(l)throw t}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return l(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,r=new Array(n);o<n;o++)r[o]=e[o];return r}n.Z=(0,t.Z)()((function(e){var n=a((0,r.useState)(),2),o=n[0],t=n[1],l=a((0,r.useState)(),2),c=l[0],i=l[1],m=a((0,r.useState)(),2),d=m[0],h=m[1],L=a((0,r.useState)(),2),x=L[0],H=L[1],j=e.t;return(0,s.jsxs)("div",{className:"row mt-5",children:[(0,s.jsx)("div",{className:"col-lg-8",children:(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"mb-3 row",children:[(0,s.jsx)("label",{for:"exampleFormControlInput1",className:" col-sm-4 calc-label",children:j("CTAFooter:calculator21")}),(0,s.jsx)("div",{className:"col-sm-8",children:(0,s.jsx)("input",{value:o,onChange:function(e){return n=e.target.value.split(",").join(""),o=parseInt(n).toLocaleString("en-IN",{maximumFractionDigits:0,currency:"INR"}),void t(o);var n,o},type:"text",className:"calc-control",id:"exampleFormControlInput1",placeholder:""})})]}),(0,s.jsxs)("div",{className:"mb-3 row",children:[(0,s.jsx)("label",{for:"exampleFormControlInput1",className:"col-sm-4 calc-label",children:j("CTAFooter:calculator22")}),(0,s.jsx)("div",{className:"col-sm-8",children:(0,s.jsx)("input",{onChange:function(e){return i(e.target.value)},type:"number",className:"calc-control",id:"exampleFormControlInput1",placeholder:""})})]}),(0,s.jsxs)("div",{className:"mb-3 row",children:[(0,s.jsx)("label",{for:"exampleFormControlInput1",className:" col-sm-4 calc-label",children:j("CTAFooter:calculator23")}),(0,s.jsx)("div",{className:"col-sm-8",children:(0,s.jsx)("input",{onChange:function(e){return h(e.target.value)},type:"number",className:"calc-control",id:"exampleFormControlInput1",placeholder:""})})]}),(0,s.jsx)("button",{onClick:function(){var e,n,r;e=Math.pow(1+c/100/12,12*-d),n=o.split(",").join(""),r=parseInt(n),H((r*(c/100/12/(1-e))).toLocaleString("en-IN",{maximumFractionDigits:0,currency:"INR"}))},type:"button",className:"btn btn-primary",children:j("CTAFooter:calculator9")})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)("div",{className:"pricipalDiv",children:[(0,s.jsx)("h3",{children:j("CTAFooter:calculator15")}),(0,s.jsxs)("h4",{children:[j("CTAFooter:calculator20")," ",x]})]})})]})}))},16136:function(e,n,o){o.r(n),o.d(n,{NApi:function(){return d}});var r=o(67294),t=o(35848),s=o(85893);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,n){return c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},c(e,n)}function i(e,n){if(n&&("object"===a(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var d=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&c(e,n)}(d,e);var n,o,r,t,a=(r=d,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m(r);if(t){var o=m(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return i(this,e)});function d(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,d),(e=a.call(this)).state={items:[],isLoaded:!1},e}return n=d,(o=[{key:"componentDidMount",value:function(){var e=this,n={method:"POST",headers:{"Content-Type":"application/json",token:"636F8F63-06C4-4D95-8562-392B34025FB0"},body:JSON.stringify({TotalClient:"",TotalPartner:"",TotalPartnerOverCities:"",NoOfTransaction:"",TotalTransactionValue:""})};fetch("https://api.nivesh.com/API/GetSummaryDetails",n).then((function(e){return e.json()})).then((function(n){e.setState({isLoaded:!0,items:n.SummaryDetailsList})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,n=e.isLoaded,o=e.items,r=this.props.t;return n?(0,s.jsx)("div",{id:"about-stats",children:(0,s.jsx)("div",{className:"container container-wrapper",children:o&&(0,s.jsxs)("div",{className:"row row justify-content-center align-items-center",children:[(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsx)("h2",{className:"text-white",children:o.TotalPartner.toLocaleString("en-IN",{maximumFractionDigits:0})}),(0,s.jsxs)("h4",{className:"text-white",children:[r("Home:hOME61")," ",(0,s.jsx)("span",{children:o.TotalPartnerOverCities.toLocaleString("en-IN",{maximumFractionDigits:0})})," ",r("Home:hOME61-A")]})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsx)("h2",{className:"text-white",children:o.TotalClient.toLocaleString("en-IN",{maximumFractionDigits:0})}),(0,s.jsx)("h4",{className:"text-white",children:r("Home:hOME62")})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsx)("h2",{className:"text-white",children:o.NoOfTransaction.toLocaleString("en-IN",{maximumFractionDigits:0})}),(0,s.jsx)("h4",{className:"text-white",children:r("Home:hOME63")})]})}),(0,s.jsx)("div",{className:"col-lg-3 col-md-6 col-12 mb-4",children:(0,s.jsxs)("div",{className:"card-box",children:[(0,s.jsxs)("h2",{className:"text-white",children:["Rs. ",parseInt(o.TotalTransactionValue).toLocaleString("en-IN",{maximumFractionDigits:0})]}),(0,s.jsx)("h4",{className:"text-white",children:r("Home:hOME64")})]})})]})})}):(0,s.jsx)("div",{children:"Loading..."})}}])&&l(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),d}(r.Component);n.default=(0,t.Z)()(d)},31581:function(e,n,o){o.r(n),o.d(n,{LoanAgainstSecurities:function(){return O},default:function(){return C}});var r=o(67294),t=o(117),s=o(16136),a=o.p+"173133aa5831198706029c06aec1af81.png",l=o.p+"5aef2fa602408b985c261b007af68eb5.svg",c=o.p+"0d107bdc570d7686bab88208958a6d86.svg",i=o.p+"4622017a2584f6de1d70dd80a12ab4f7.svg",m=o.p+"bad3d4507fb7eccb3c4ac95754f8075a.svg",d=o.p+"cc7e03359f671230c7ffc265e9345600.svg",h=o.p+"52de90b97958936b11928bdc4b1f1e00.svg",L=o(61510),x=o(44651),H=o(35848),j=o(64593),u=o(80133),p=o(10682),f=o(75412),I=o(85893);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function y(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,n){return N=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},N(e,n)}function g(e,n){if(n&&("object"===b(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&N(e,n)}(O,e);var n,o,r,H,b=(r=O,H=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=w(r);if(H){var o=w(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return g(this,e)});function O(){return v(this,O),b.apply(this,arguments)}return n=O,(o=[{key:"render",value:function(){var e=this.props.t;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(j.q,{children:[(0,I.jsx)("meta",{charSet:"utf-8"}),(0,I.jsx)("title",{children:e("MetaTitle:mT55")}),(0,I.jsx)("meta",{name:"description",content:e("MetaDescription:mD55")}),(0,I.jsx)("link",{rel:"canonical",href:window.location.href})]}),(0,I.jsx)(p.Z,{children:(0,I.jsxs)(f.Z,{children:[(0,I.jsx)(f.Z.Item,{href:"/",children:e("BreadCrumb:bd-45")}),(0,I.jsx)(f.Z.Item,{active:!0,children:e("BreadCrumb:bd-72")})]})}),(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsxs)("div",{className:"col-lg-7 col-md-6 mb-4",children:[(0,I.jsx)("h1",{children:e("HomeLoan:IHL2")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL3")}),(0,I.jsx)("a",{href:"https://nivesh.app.link/RwZsD9vJGtb",target:"_blank",className:"btn btn-primary",children:e("CTAFooter:InvestNow1")})]}),(0,I.jsx)("div",{className:"col-lg-5 col-md-6",children:(0,I.jsx)("img",{src:a,alt:"",className:"img-fluid"})})]}),(0,I.jsx)("div",{className:"loanAgainst ourPartCaptital",children:(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsx)("h2",{className:"text-center",children:e("HomeLoan:IHL4")}),(0,I.jsxs)("div",{className:"row row justify-content-center",children:[(0,I.jsxs)("div",{className:"col-lg-4 col-md-6 mt-4 loan-box",children:[(0,I.jsx)("img",{src:l,alt:""}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL5")}),(0,I.jsxs)("p",{className:"small-text",children:[e("HomeLoan:IHL6")," "]})]}),(0,I.jsxs)("div",{className:"col-lg-4 col-md-6 mt-4 loan-box",children:[(0,I.jsx)("img",{src:c,alt:""}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL7")}),(0,I.jsx)("p",{className:"small-text",children:e("HomeLoan:IHL8")})]}),(0,I.jsxs)("div",{className:"col-lg-4 col-md-6 mt-4 loan-box",children:[(0,I.jsx)("img",{src:i,alt:""}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL9")}),(0,I.jsx)("p",{className:"small-text",children:e("HomeLoan:IHL10")})]}),(0,I.jsxs)("div",{className:"col-lg-4 col-md-6 mt-4 loan-box",children:[(0,I.jsx)("img",{src:m,alt:""}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL11")}),(0,I.jsxs)("p",{className:"small-text",children:[e("HomeLoan:IHL12")," "]})]}),(0,I.jsxs)("div",{className:"col-lg-4 col-md-6 mt-4 loan-box",children:[(0,I.jsx)("img",{src:d,alt:""}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL13")}),(0,I.jsxs)("p",{className:"small-text",children:[e("HomeLoan:IHL14")," "]})]}),(0,I.jsxs)("div",{className:"col-lg-4 col-md-6 mt-4 loan-box",children:[(0,I.jsx)("img",{src:h,alt:""}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL15")}),(0,I.jsx)("p",{className:"small-text",children:e("HomeLoan:IHL16")})]})]}),(0,I.jsx)("div",{className:"text-center mt-4",children:(0,I.jsx)("a",{href:"https://nivesh.app.link/RwZsD9vJGtb",target:"_blank",className:"btn btn-primary",children:e("CTAFooter:InvestNow1")})})]})}),(0,I.jsx)("div",{className:"ourPartCaptital",children:(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsx)("h2",{className:"text-center",children:e("HomeLoan:IHL17")}),(0,I.jsxs)("div",{className:"row row justify-content-center",children:[(0,I.jsx)("div",{className:"col-lg-4 col-md-6 mt-4",children:(0,I.jsx)("div",{className:"card h-100",children:(0,I.jsxs)("div",{className:"card-body",children:[(0,I.jsx)("img",{src:L.Z}),(0,I.jsx)("h4",{children:e("HomeLoan:IHL18")})]})})}),(0,I.jsx)("div",{className:"col-lg-4 col-md-6 mt-4",children:(0,I.jsx)("div",{className:"card h-100",children:(0,I.jsxs)("div",{className:"card-body",children:[(0,I.jsx)("img",{src:x.Z}),(0,I.jsx)("h4",{children:e("HomeLoan:IHL19")})]})})})]})]})}),(0,I.jsx)("div",{className:"loanAgainst",children:(0,I.jsx)("div",{className:"container container-wrapper",children:(0,I.jsxs)(t.mQ,{children:[(0,I.jsxs)(t.td,{children:[(0,I.jsx)(t.OK,{children:e("HomeLoan:IHL20")}),(0,I.jsx)(t.OK,{children:e("HomeLoan:IHL28")}),(0,I.jsx)(t.OK,{children:e("HomeLoan:IHL31")}),(0,I.jsx)(t.OK,{children:e("HomeLoan:IHL33")})]}),(0,I.jsx)(t.x4,{children:(0,I.jsxs)("p",{children:[e("HomeLoan:IHL21"),(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:e("HomeLoan:IHL22")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL23")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL24")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL25")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL26")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL27")})]})]})}),(0,I.jsx)(t.x4,{children:(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:e("HomeLoan:IHL29")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL30")})]})}),(0,I.jsx)(t.x4,{children:(0,I.jsx)("p",{children:e("HomeLoan:IHL32")})}),(0,I.jsxs)(t.x4,{children:[(0,I.jsx)("p",{children:e("HomeLoan:IHL34")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL35")}),(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:e("HomeLoan:IHL36")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL37")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL38")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL39")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL40")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL41")})]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL42")}),(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:e("HomeLoan:IHL43")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL44")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL45")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL46")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL47")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL48")})]})]})]})})}),(0,I.jsx)(s.default,{}),(0,I.jsx)("div",{className:"calCulator",children:(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsx)("h2",{className:"mb-4",children:e("CTAFooter:calculatorA")}),(0,I.jsx)(u.Z,{})]})}),(0,I.jsx)("div",{className:"getCustomer",children:(0,I.jsxs)("div",{className:"container container-wrapper text-center",children:[(0,I.jsx)("h2",{className:"text-white",children:e("HomeLoan:IHL158")}),(0,I.jsx)("a",{href:"https://nivesh.app.link/RwZsD9vJGtb",className:"btn btn-secondary",children:e("HomeLoan:IHL159")})]})}),(0,I.jsxs)("div",{className:"container container-wrapper",children:[(0,I.jsx)("h2",{className:"mb-4",children:e("HomeLoan:IHL49")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL50")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL51")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL52")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL53")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL54")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL55")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL56")}),(0,I.jsxs)("p",{children:[e("HomeLoan:IHL57"),(0,I.jsx)("br",{}),e("HomeLoan:IHL58"),(0,I.jsx)("br",{}),e("HomeLoan:IHL59"),(0,I.jsx)("br",{}),e("HomeLoan:IHL60")+e("HomeLoan:IHL61"),(0,I.jsx)("br",{}),e("HomeLoan:IHL62")]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL63")}),(0,I.jsxs)("p",{children:[e("HomeLoan:IHL64"),(0,I.jsx)("br",{}),(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:e("HomeLoan:IHL65")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL66")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL67")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL68")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL69")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL70")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL71")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL72")})]})]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL73")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL74")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL75")}),(0,I.jsxs)("p",{children:[" ",e("HomeLoan:IHL76")]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL77")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL78")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL79")}),(0,I.jsxs)("p",{children:[" ",e("HomeLoan:IHL80")]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL81")}),(0,I.jsxs)("p",{children:[" ",e("HomeLoan:IHL82")]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL83")}),(0,I.jsxs)("p",{children:[" ",e("HomeLoan:IHL84")]}),(0,I.jsxs)("h3",{children:[" ",e("HomeLoan:IHL85")]}),(0,I.jsx)("p",{children:e("HomeLoan:IHL86")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL87")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL88")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL89")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL90")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL91")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL92")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL93")}),(0,I.jsxs)("p",{children:[e("HomeLoan:IHL94"),(0,I.jsx)("br",{}),e("HomeLoan:IHL95"),(0,I.jsx)("br",{}),e("HomeLoan:IHL96"),(0,I.jsx)("br",{}),e("HomeLoan:IHL97")]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL98")}),(0,I.jsxs)("p",{children:[e("HomeLoan:IHL99"),(0,I.jsx)("br",{}),(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:e("HomeLoan:IHL100")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL101")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL102")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL103")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL104")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL105")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL106")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL107")})]})]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL108")}),(0,I.jsxs)("p",{children:[e("HomeLoan:IHL109"),(0,I.jsx)("br",{}),e("HomeLoan:IHL110"),(0,I.jsx)("br",{}),e("HomeLoan:IHL111"),(0,I.jsx)("br",{}),e("HomeLoan:IHL112")]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL113")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL114")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL115")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL116")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL117")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL118")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL119")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL120")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL121")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL122")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL123")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL124")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL125")}),(0,I.jsxs)("p",{children:[" ",e("HomeLoan:IHL126")]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL127")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL128")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL129")}),(0,I.jsxs)("p",{children:[e("HomeLoan:IHL130"),(0,I.jsx)("br",{}),e("HomeLoan:IHL131"),(0,I.jsx)("br",{}),e("HomeLoan:IHL132"),(0,I.jsx)("br",{}),e("HomeLoan:IHL133"),(0,I.jsx)("br",{}),e("HomeLoan:IHL134"),(0,I.jsx)("br",{}),e("HomeLoan:IHL135"),(0,I.jsx)("br",{}),e("HomeLoan:IHL136"),(0,I.jsx)("br",{}),e("HomeLoan:IHL137")]}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL138")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL139")}),(0,I.jsxs)("h3",{children:[" ",e("HomeLoan:IHL140")]}),(0,I.jsx)("p",{children:e("HomeLoan:IHL141")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL142")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL143")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL144")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL145")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL146")}),(0,I.jsx)("p",{children:e("HomeLoan:IHL147")}),(0,I.jsx)("h3",{children:e("HomeLoan:IHL148")}),(0,I.jsxs)("p",{children:[e("HomeLoan:IHL149"),(0,I.jsx)("br",{}),e("HomeLoan:IHL150"),(0,I.jsx)("br",{})]}),(0,I.jsxs)("ul",{children:[(0,I.jsx)("li",{children:e("HomeLoan:IHL151")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL152")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL153")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL154")}),(0,I.jsx)("li",{children:e("HomeLoan:IHL155")})]})]})]})}}])&&y(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),O}(r.Component),C=(0,H.Z)()(O)},44651:function(e,n,o){n.Z=o.p+"58f15ef202551679678e8724e23c3de2.svg"},61510:function(e,n,o){n.Z=o.p+"6c7572cadb0fed9a670b944b9ccf8f18.svg"}}]);