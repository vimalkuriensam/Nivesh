"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[5071],{1119:function(e,t,r){var n=r(67294),i=(r(17654),r(9669)),s=r.n(i),l=r(35848),a=(r(73935),r(85893));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,s=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);l=!0);}catch(e){a=!0,i=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw i}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.Z=(0,l.Z)()((function(e){var t=u((0,n.useState)({Name:"",Email:"",Phone:"",Holder:""}),2),r=t[0],i=t[1],l=u((0,n.useState)(!1),2),d=l[0],h=l[1];function m(e){var t=window.location.search.substring(1);console.log(t);var r=t.split("&");console.log(r);for(var n=0;n<r.length;n++){var i=r[n].split("=");if(console.log(i),i[0]==e)return i[1]}return!1}var x=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);t[e.target.id]=e.target.value,i(t)},j=e.t;return(0,a.jsx)("div",{className:"col-lg-4 col-md-6 col-12 mb-5",children:(0,a.jsxs)("div",{className:"formKnow",children:[(0,a.jsx)("h4",{children:j("CTAFooter:formText2")}),!d&&(0,a.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={Name:r.Name,PhoneNo:r.Phone,Email:r.Email,Message:r.Holder,IsDistributor:0,TypeRequest:"LeadPartnerForm|".concat(m("utm_campaign"),"|").concat(m("utm_content"),"|").concat(m("utm_medium"),"|").concat(m("utm_source"))};s().post("https://api.nivesh.com/API/WebAddLeadPartner",t,{headers:{"Content-Type":"application/json"}}).then((function(e){h(!0)}))}(e)},children:[(0,a.jsx)("div",{className:"form-group",children:(0,a.jsx)("input",{onChange:function(e){return x(e)},type:"text",className:"form-control",id:"Name",value:r.Name,placeholder:j("CTAFooter:formText4"),required:!0})}),(0,a.jsx)("div",{className:"form-group",children:(0,a.jsx)("input",{onChange:function(e){return x(e)},type:"email",className:"form-control",id:"Email",value:r.Email,placeholder:j("CTAFooter:formText5"),required:!0})}),(0,a.jsx)("div",{className:"form-group",children:(0,a.jsx)("input",{onChange:function(e){return x(e)},type:"text",className:"form-control",id:"Phone",value:r.Phone,placeholder:j("CTAFooter:formText6"),required:!0})}),(0,a.jsxs)("div",{className:"radioKonw",children:[(0,a.jsx)("span",{children:j("CTAFooter:formText7")}),(0,a.jsxs)("div",{className:"form-check",children:[(0,a.jsx)("input",{onChange:function(e){return x(e)},className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"Holder",value:"ARN Holder",required:!0}),(0,a.jsx)("label",{className:"form-check-label",for:"Holder",children:j("CTAFooter:formText8")})]}),(0,a.jsxs)("div",{className:"form-check",children:[(0,a.jsx)("input",{onChange:function(e){return x(e)},className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"Holder",value:"NON ARN Holder",required:!0}),(0,a.jsx)("label",{className:"form-check-label",for:"Holder",children:j("CTAFooter:formText9")})]})]}),(0,a.jsxs)("div",{className:"form-check",children:[(0,a.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault",required:!0,checked:!0}),(0,a.jsx)("label",{className:"form-check1-label",for:"flexCheckDefault",children:j("CTAFooter:formText10")})]}),(0,a.jsx)("button",{className:"btn btn-primary",children:j("CTAFooter:formText11")})]}),d&&(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:"Your form is successfully submitted. Our representative will get in touch with you shortly."})})]})})}))},12343:function(e,t,r){r.r(t),r.d(t,{ARN:function(){return p}});var n=r(67294),i=r(1119),s=r(35848),l=r(64593),a=r(75412),c=r(10682),o=r(85893);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function x(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(p,e);var t,r,n,s,u=(n=p,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(s){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return x(this,e)});function p(){return d(this,p),u.apply(this,arguments)}return t=p,(r=[{key:"render",value:function(){var e=this.props.t,t=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com/en"},{"@type":"ListItem",position:2,name:"Partner",item:"https://nivesh.com/en/partner/"},{"@type":"ListItem",position:3,name:"All about amfi arn code",item:"https://nivesh.com/en/partner/grow-your-mutual-fund"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"Who Allots ARN Number?",acceptedAnswer:{"@type":"Answer",text:"The Association of Mutual Funds in India allots the AMFI Registration Number to every mutual fund distributor for helping their customers invest in the mutual fund schemes."}},{"@type":"Question",name:"How do I Renew my ARN Number Online?",acceptedAnswer:{"@type":"Answer",text:"The renewal of the ARN number can only be done by visiting the official portal of the Association of Mutual Funds in India. To complete the process, the prospect needs to submit the PAN card mobile number. Also, the copy proving that you have cleared the NISM examination needs to get submitted. Without legitimate documents, the ARN number cannot get renewed."}},{"@type":"Question",name:"Is it Possible to Apply for the ARN Number Online?",acceptedAnswer:{"@type":"Answer",text:"Yes, after qualifying for the NISM-V mutual fund distribution certificate examination, a person can apply for the ARN number online by visiting the official website of AMFI (Association of Mutual Funds in India)"}},{"@type":"Question",name:"How do I download an ARN Certificate?",acceptedAnswer:{"@type":"Answer",text:"To download the ARN certificate, you need to visit the official website of the Association of Mutual Funds in India"}}]}]);return(0,o.jsxs)("section",{children:[(0,o.jsxs)(l.q,{children:[(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("title",{children:e("MetaTitle:mT74")}),(0,o.jsx)("meta",{name:"description",content:e("MetaDescription:mD74")}),(0,o.jsx)("link",{rel:"canonical",href:window.location.href}),(0,o.jsx)("script",{type:"application/ld+json",children:t})]}),(0,o.jsx)(c.Z,{children:(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(a.Z.Item,{href:"/",children:e("BreadCrumb:bd-45")}),(0,o.jsx)(a.Z.Item,{active:!0,children:e("BreadCrumb:bd-77")})]})}),(0,o.jsx)("div",{id:"ARN-Banner",children:(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsxs)("div",{className:"row reverse-mobilecolumn",children:[(0,o.jsxs)("div",{className:"col-lg-8 col-md-6 col-12 ARN-box",children:[(0,o.jsx)("h2",{children:e("ARN:aRN1")}),(0,o.jsxs)("p",{children:[e("ARN:aRN2"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("ARN:aRN3"),(0,o.jsx)("br",{}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:e("ARN:aRN5")}),(0,o.jsx)("li",{children:e("ARN:aRN6")})]}),e("ARN:aRN7")]})]}),(0,o.jsx)(i.Z,{})]})})}),(0,o.jsx)("div",{id:"arncode-section",children:(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsxs)("div",{className:"row ",children:[(0,o.jsx)("h2",{children:e("ARN:aRN9")}),(0,o.jsxs)("p",{className:"txt-white",children:[e("ARN:aRN10"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("ARN:aRN12"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("ARN:aRN13"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("ARN:aRN14")]})]})})}),(0,o.jsx)("div",{id:"arn-number",children:(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsxs)("div",{className:"row row justify-content-center",children:[(0,o.jsx)("h2",{className:"arn-nhead",children:e("ARN:aRN15")}),(0,o.jsx)("h6",{className:"text-center text-white",children:e("ARN:aRN16")}),(0,o.jsx)("div",{className:"col-lg-6 col-md-6 col-12 mt-4",children:(0,o.jsx)("div",{className:"card mb-4 h-100",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsxs)("h3",{children:[e("ARN:aRN17"),"​"]}),(0,o.jsxs)("p",{className:"small-text text-left",children:[e("ARN:aRN18"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("ul",{className:"small-text",children:[(0,o.jsx)("li",{children:e("ARN:aRN20")}),(0,o.jsx)("li",{children:e("ARN:aRN21")}),(0,o.jsx)("li",{children:e("ARN:aRN22")}),(0,o.jsx)("li",{children:e("ARN:aRN23")}),(0,o.jsx)("li",{children:e("ARN:aRN24")}),(0,o.jsx)("li",{children:e("ARN:aRN25")})]})]})]})})}),(0,o.jsx)("div",{className:"col-lg-6 col-md-6 col-12 mt-4",children:(0,o.jsx)("div",{className:"card mb-4 h-100",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h3",{children:e("ARN:aRN26")}),(0,o.jsxs)("p",{className:"small-text text-left",children:[e("ARN:aRN27"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("ul",{className:"small-text",children:[(0,o.jsx)("li",{children:e("ARN:aRN28")}),(0,o.jsx)("li",{children:e("ARN:aRN29")}),(0,o.jsx)("li",{children:e("ARN:aRN30")}),(0,o.jsx)("li",{children:e("ARN:aRN31")}),(0,o.jsx)("li",{children:e("ARN:aRN32")})]})]})]})})})]})})}),(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("h2",{children:e("ARN:aRN33")}),(0,o.jsxs)("table",{className:"table custom-table responsive-customtable",children:[(0,o.jsx)("thead",{className:"thead-blue",children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"col",children:e("ARN:aRN34")}),(0,o.jsx)("th",{scope:"col",children:e("ARN:aRN36")}),(0,o.jsx)("th",{scope:"col",children:e("ARN:aRN38")})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"row",children:e("ARN:aRN35")}),(0,o.jsx)("td",{children:e("ARN:aRN37")}),(0,o.jsx)("td",{children:e("ARN:aRN39")})]})})]}),(0,o.jsx)("div",{className:"col-lg-6 col-md-6 col-12 mt-4",children:(0,o.jsx)("div",{className:"card h-100 mb-4",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h3",{children:e("ARN:aRN40")}),(0,o.jsxs)("p",{className:"small-text text-left",children:[e("ARN:aRN41"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("ARN:aRN42"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("ARN:aRN43"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("ARN:aRN44")]})]})})}),(0,o.jsx)("div",{className:"col-lg-6 col-md-6 col-12 mt-4",children:(0,o.jsx)("div",{className:"card h-100 mb-4",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h3",{children:e("ARN:aRN45")}),(0,o.jsxs)("p",{className:"small-text text-left",children:[e("ARN:aRN46"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("ARN:aRN48"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("ARN:aRN49")]})]})})})]})}),(0,o.jsx)("div",{id:"registration-process",children:(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-lg-5 col-md-6 mb-4",children:[(0,o.jsx)("h2",{children:e("ARN:aRN50")}),(0,o.jsx)("p",{children:e("ARN:aRN51")}),(0,o.jsx)("a",{href:"https://app.nivesh.com/home/index",target:"_blank",className:"btn btn-primary",children:e("CTAFooter:LoginNow1")})]}),(0,o.jsxs)("div",{className:"col-lg-7 col-md-6",children:[(0,o.jsx)("div",{className:"col-lg-3 col-12",children:(0,o.jsx)("h3",{children:e("ARN:aRN53")})}),(0,o.jsx)("div",{className:"col-lg-9 col-12",children:(0,o.jsx)("p",{children:e("ARN:aRN54")})}),(0,o.jsx)("div",{className:"col-lg-3 col-12",children:(0,o.jsx)("h3",{children:e("ARN:aRN55")})}),(0,o.jsx)("div",{className:"col-lg-9 col-12",children:(0,o.jsx)("p",{children:e("ARN:aRN56")})}),(0,o.jsx)("div",{className:"col-lg-3 col-12",children:(0,o.jsx)("h3",{children:e("ARN:aRN57")})}),(0,o.jsx)("div",{className:"col-lg-9 col-12",children:(0,o.jsx)("p",{children:e("ARN:aRN58")})}),(0,o.jsx)("div",{className:"col-lg-3 col-12",children:(0,o.jsx)("h3",{children:e("ARN:aRN59")})}),(0,o.jsx)("div",{className:"col-lg-9 col-12",children:(0,o.jsx)("p",{children:e("ARN:aRN60")})}),(0,o.jsx)("div",{className:"col-lg-3 col-12",children:(0,o.jsx)("h3",{children:e("ARN:aRN61")})}),(0,o.jsx)("div",{className:"col-lg-9 col-12",children:(0,o.jsx)("p",{children:e("ARN:aRN62")})}),(0,o.jsx)("div",{className:"col-lg-3 col-12",children:(0,o.jsx)("h3",{children:e("ARN:aRN63")})}),(0,o.jsx)("div",{className:"col-lg-9 col-12",children:(0,o.jsx)("p",{children:e("ARN:aRN64")})})]})]})})}),(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-lg-12 col-12",children:[(0,o.jsx)("h2",{children:e("ARN:aRN65")}),(0,o.jsxs)("table",{className:"table custom-table responsive-customtable",children:[(0,o.jsx)("thead",{className:"thead-blue",children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"col"}),(0,o.jsxs)("th",{scope:"col",children:[e("ARN:aRN66")," "]}),(0,o.jsx)("th",{scope:"col",children:e("ARN:aRN77")})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"row",children:e("ARN:aRN67")}),(0,o.jsx)("td",{children:e("ARN:aRN72")}),(0,o.jsx)("td",{children:e("ARN:aRN78")})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"row",children:e("ARN:aRN68")}),(0,o.jsx)("td",{children:e("ARN:aRN73")}),(0,o.jsx)("td",{children:e("ARN:aRN79")})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"row",children:e("ARN:aRN69")}),(0,o.jsx)("td",{children:e("ARN:aRN74")}),(0,o.jsx)("td",{children:e("ARN:aRN80")})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"row",children:e("ARN:aRN70")}),(0,o.jsx)("td",{children:e("ARN:aRN75")}),(0,o.jsx)("td",{children:e("ARN:aRN81")})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{scope:"row",children:e("ARN:aRN71")}),(0,o.jsx)("td",{children:e("ARN:aRN76")}),(0,o.jsx)("td",{children:e("ARN:aRN82")})]})]})]})]})})}),(0,o.jsx)("div",{className:"container testimonials",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-lg-12",children:[(0,o.jsx)("h2",{children:e("ARN:aRN83")}),(0,o.jsxs)("div",{id:"accordion",children:[(0,o.jsx)("h3",{children:e("ARN:aRN84")}),(0,o.jsx)("p",{children:e("ARN:aRN85")}),(0,o.jsx)("h3",{children:e("ARN:aRN86")}),(0,o.jsx)("p",{children:e("ARN:aRN87")}),(0,o.jsx)("h3",{children:e("ARN:aRN88")}),(0,o.jsx)("p",{children:e("ARN:aRN89")}),(0,o.jsx)("h3",{children:e("ARN:aRN90")}),(0,o.jsx)("p",{children:e("ARN:aRN91")})]})]})})})]})}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(n.Component);t.default=(0,s.Z)()(p)},51177:function(e,t,r){r.r(t),r.d(t,{BMF:function(){return p}});var n=r(67294),i=r(1119),s=(r(17654),r(35848)),l=r(64593),a=r(75412),c=r(10682),o=r(85893);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function x(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(p,e);var t,r,n,s,u=(n=p,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(s){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return x(this,e)});function p(){return d(this,p),u.apply(this,arguments)}return t=p,(r=[{key:"render",value:function(){var e=this.props.t,t=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com/en"},{"@type":"ListItem",position:2,name:"Become a Mutual Fund Distributor",item:"https://nivesh.com/en/partner/become-mutual-fund-distributors"}]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What are Mutual Funds?",acceptedAnswer:{"@type":"Answer",text:"In simple words, it can be stated that a mutual fund is an investment tool through which clients or investors purchase securities. Each and every fund has its own risk-return characteristics."}},{"@type":"Question",name:"Who is a Mutual Fund Agent?",acceptedAnswer:{"@type":"Answer",text:"A mutual fund advisor is a qualified professional who helps the investors by suggesting to them the best mutual fund schemes."}},{"@type":"Question",name:"How Does a Mutual Fund Agent Earn?",acceptedAnswer:{"@type":"Answer",text:"The earnings of the mutual fund advisor come through commission on their clients’ investment."}},{"@type":"Question",name:"How to Become a Mutual Fund Distributor in India?",acceptedAnswer:{"@type":"Answer",text:"The first and foremost thing to do is, getting registered for the NISM Examination. The best part is you can appear for this exam of mutual fund advisor online as well in India."}},{"@type":"Question",name:"What are the Benefits of Joining Nivesh as a Mutual Fund Distributor?",acceptedAnswer:{"@type":"Answer",text:"The major benefit is you can work remotely.\n      Completely online platform\n      Opportunity to deal in multiple products"}},{"@type":"Question",name:"How to Start a Mutual Fund Distribution Business?",acceptedAnswer:{"@type":"Answer",text:"After completing the examination and getting the ARN Number, you can start working as a Mutual Funds Distributor. Either you can join the mutual fund distribution platforms like Nivesh or can also go for the direct ones."}},{"@type":"Question",name:"How Much can I Earn After Becoming a Mutual Fund Agent?",acceptedAnswer:{"@type":"Answer",text:"The earnings of a mutual fund advisor depend upon the commissions. The more clients you attract and convert into potential investors, the higher you earn."}},{"@type":"Question",name:"Is it Necessary to Qualify the NISM Exam for Becoming a Mutual Fund Advisor?",acceptedAnswer:{"@type":"Answer",text:"Yes, it is mandatory to clear the NISM exam to become a mutual fund distributor in India. However, Nivesh has an interesting model where one can simply just refer a client to our team and once the investment is made they can earn too."}},{"@type":"Question",name:"How to Start Mutual Fund Distribution Business?",acceptedAnswer:{"@type":"Answer",text:"Once you have obtained AMFI Registration Number (ARN), you are ready to start your mutual fund distribution business. Here are the steps that you need to carry out for the same:\n      Getting Product\n      Knowledge\n      Empanelment\n      Knowledge of Investment Planning\n      Find out the Needs of Investor\n      Investment & Asset Allocation\n      Documentation\n      Commission Structure\n      Hand Holding\n      Portfolio Review & Restructuring\n      Business Growth Strategies"}},{"@type":"Question",name:"Is there Any Option for Senior Citizens to Become a Mutual Fund Distributor?",acceptedAnswer:{"@type":"Answer",text:"Yes, the citizens crossed the age of 50 years as of 31st May 2010, can easily get the NISM Mutual Fund Distribution Certificate by: Taking part in NISM Series VA Mutual Fund Distributors Certification Examination.\n      Or completing the NISM’s Continuing Professional Education (CPE) Training Program."}}]}]);return(0,o.jsxs)("main",{children:[(0,o.jsxs)(l.q,{children:[(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsx)("title",{children:e("MetaTitle:mT73")}),(0,o.jsx)("meta",{name:"description",content:e("MetaDescription:mD73")}),(0,o.jsx)("link",{rel:"canonical",href:window.location.href}),(0,o.jsx)("script",{type:"application/ld+json",children:t})]}),(0,o.jsx)(c.Z,{children:(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(a.Z.Item,{href:"/",children:e("BreadCrumb:bd-45")}),(0,o.jsx)(a.Z.Item,{active:!0,children:e("BreadCrumb:bd-75")})]})}),(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsxs)("div",{className:"row reverse-mobilecolumn",children:[(0,o.jsxs)("div",{className:"col-lg-8 col-md-6 col-12",children:[(0,o.jsx)("h1",{children:e("MutualFundDistributor:BMFD1")}),(0,o.jsxs)("p",{children:[e("MutualFundDistributor:BMFD2"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("MutualFundDistributor:BMFD4"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("MutualFundDistributor:BMFD6")]})]}),(0,o.jsx)(i.Z,{})]})}),(0,o.jsx)("div",{className:"getStarted beMutFund",children:(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-lg-5 getStartedBtn mb-4",children:[(0,o.jsx)("h2",{children:e("MutualFundDistributor:BMFD14")}),(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD15")}),(0,o.jsx)("a",{href:"/partner",title:"",className:"btn btn-primary",children:e("CTAFooter:NiveshPartnerbtn")})]}),(0,o.jsxs)("div",{className:"col-lg-7",children:[(0,o.jsx)("div",{className:"col-lg-3 ",children:(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD16")})}),(0,o.jsxs)("div",{className:"col-lg-9",children:[(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD17")})," "]}),(0,o.jsx)("div",{className:"col-lg-3",children:(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD18")})}),(0,o.jsx)("div",{className:"col-lg-9",children:(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD19")})}),(0,o.jsx)("div",{className:"col-lg-3",children:(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD20")})}),(0,o.jsx)("div",{className:"col-lg-9",children:(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD21")})}),(0,o.jsxs)("div",{className:"col-lg-3",children:[(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD22")})," "]}),(0,o.jsxs)("div",{className:"col-lg-9",children:[(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD23")})," "]}),(0,o.jsxs)("div",{className:"col-lg-3",children:[(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD24")})," "]}),(0,o.jsxs)("div",{className:"col-lg-9",children:[(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD25")})," "]}),(0,o.jsxs)("div",{className:"col-lg-3",children:[(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD26")})," "]}),(0,o.jsxs)("div",{className:"col-lg-9",children:[(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD27")})," "]})]})]})})}),(0,o.jsx)("div",{className:"gardient-red",children:(0,o.jsxs)("div",{className:"container container-wrapper",children:[(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-lg-12",children:[(0,o.jsx)("h2",{className:"text-white",children:e("MutualFundDistributor:BMFD30")}),(0,o.jsxs)("p",{className:"text-white",children:[e("MutualFundDistributor:BMFD31"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("MutualFundDistributor:BMFD33")]})]})}),(0,o.jsx)("div",{className:"ctaBtnOur text-left",children:(0,o.jsx)("a",{href:"/nism-certification-exam",children:e("CTAFooter:NISMbtn1")})})]})}),(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-lg-12",children:[(0,o.jsx)("h2",{children:e("MutualFundDistributor:BMFD34")}),(0,o.jsxs)("p",{children:[e("MutualFundDistributor:BMFD35"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("MutualFundDistributor:BMFD37"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("MutualFundDistributor:BMFD39")]}),(0,o.jsx)("br",{}),(0,o.jsx)("h2",{children:e("MutualFundDistributor:BMFD42")}),(0,o.jsxs)("p",{children:[e("MutualFundDistributor:BMFD43"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("MutualFundDistributor:BMFD45")]}),(0,o.jsx)("div",{className:"clearDiv"}),(0,o.jsx)("div",{className:"mutChilBtn",children:(0,o.jsx)("a",{href:"#",title:"",className:"btn btn-primary",children:e("CTAFooter:JoinUs1")})})]})})}),(0,o.jsx)("div",{className:"getCustomer",children:(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsxs)("div",{className:"row row justify-content-center",children:[(0,o.jsx)("div",{className:"col-lg-4 col-md-6 col-12 mb-4",children:(0,o.jsx)("div",{className:"card h-100 mt-4",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD46")}),(0,o.jsxs)("p",{className:"small-text text-left",children:[e("MutualFundDistributor:BMFD48"),(0,o.jsxs)("ul",{className:"small-text",children:[(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD50")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD51")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD52")})]})]}),(0,o.jsx)("a",{href:"#",className:"btn btn-primary",children:e("CTAFooter:JoinUs1")})]})})}),(0,o.jsx)("div",{className:"col-lg-4 col-md-6 col-12",children:(0,o.jsx)("div",{className:"card mt-4 h-100",children:(0,o.jsxs)("div",{className:"card-body",children:[(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD54")}),(0,o.jsxs)("p",{className:"small-text text-left",children:[e("MutualFundDistributor:BMFD55"),(0,o.jsxs)("ul",{className:"small-text",children:[(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD56")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD57")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD58")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD59")})]})]}),(0,o.jsx)("a",{href:"/partner/grow-your-mutual-fund",className:"btn btn-primary",children:e("CTAFooter:GrowBtn1")})]})})})]})})}),(0,o.jsx)("div",{className:"bg-light",children:(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-lg-12",children:[(0,o.jsx)("h2",{children:e("MutualFundDistributor:BMFD60")}),(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD61")})]})})})}),(0,o.jsx)("div",{className:"gardient-red",children:(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-lg-12",children:[(0,o.jsx)("h2",{className:"text-white",children:e("MutualFundDistributor:BMFD62")}),(0,o.jsxs)("p",{className:"text-white",children:[e("MutualFundDistributor:BMFD63"),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),e("MutualFundDistributor:BMFD65"),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),e("MutualFundDistributor:BMFD67"),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{})," ",e("MutualFundDistributor:BMFD69")]})]})})})}),(0,o.jsx)("div",{className:"container testimonials",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-lg-12",children:[(0,o.jsx)("h2",{children:e("MutualFundDistributor:BMFD70")}),(0,o.jsxs)("div",{id:"accordion",children:[(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD71")}),(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD72")}),(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD74")}),(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD75")}),(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD77")}),(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD78")}),(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD80")}),(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD81")}),(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD83")}),(0,o.jsx)("p",{children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD85")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD86")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD87")})]})}),(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD89")}),(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD90")}),(0,o.jsxs)("h3",{children:[e("MutualFundDistributor:BMFD92")," "]}),(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD93")}),(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD95")}),(0,o.jsx)("p",{children:e("MutualFundDistributor:BMFD96")}),(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD98")}),(0,o.jsxs)("p",{children:[e("MutualFundDistributor:BMFD99"),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD101")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD102")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD103")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD104")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD105")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD106")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD107")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD108")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD109")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD110")}),(0,o.jsx)("li",{children:e("MutualFundDistributor:BMFD111")})]})]}),(0,o.jsx)("h3",{children:e("MutualFundDistributor:BMFD113")}),(0,o.jsxs)("p",{children:[e("MutualFundDistributor:BMFD114"),(0,o.jsx)("br",{}),e("MutualFundDistributor:BMFD115")]})]})]})})})]})}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(n.Component);t.default=(0,s.Z)()(p)}}]);