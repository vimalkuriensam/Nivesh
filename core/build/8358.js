"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[8358,3260],{1119:function(e,n,r){var t=r(67294),i=r(9669),s=r.n(i),o=r(35848),a=(r(73935),r(85893));function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,s=[],o=!0,a=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(s.push(t.value),!n||s.length!==n);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==r.return||r.return()}finally{if(a)throw i}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return u(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}n.Z=(0,o.Z)()((function(e){var n=d((0,t.useState)({Name:"",Email:"",Phone:"",Holder:""}),2),r=n[0],i=n[1],o=d((0,t.useState)(!1),2),u=o[0],h=o[1];function m(e){var n=window.location.search.substring(1);console.log(n);var r=n.split("&");console.log(r);for(var t=0;t<r.length;t++){var i=r[t].split("=");if(console.log(i),i[0]==e)return i[1]}return!1}function f(e){return m("utm_source")||e}function p(e){return m("utm_content")||e}function j(e){return m("utm_campaign")||e}function x(e){return m("utm_medium")||e}var b=function(e){var n=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},r);n[e.target.id]=e.target.value,i(n)},y=e.t,v=e.sourceName,g=e.campaignName,N=e.contentName,w=e.mediumName;return(0,a.jsx)("div",{className:"col-lg-4 col-md-6 col-12 mb-5",children:(0,a.jsxs)("div",{className:"formKnow",children:[(0,a.jsx)("h4",{children:y("CTAFooter:formText2")}),!u&&(0,a.jsxs)("form",{onSubmit:function(e){return function(e,n,t,i,o){e.preventDefault();var a={Name:r.Name,PhoneNo:r.Phone,Email:r.Email,Message:r.Holder,IsDistributor:0,TypeRequest:"LeadPartnerForm|".concat(j(t),"|").concat(p(i),"|").concat(x(o),"|").concat(f(n))};s().post("https://api.nivesh.com/API/WebAddLeadPartner",a,{headers:{"Content-Type":"application/json"}}).then((function(e){h(!0)}))}(e,v,g,N,w)},children:[(0,a.jsx)("div",{className:"form-group",children:(0,a.jsx)("input",{onChange:function(e){return b(e)},type:"text",className:"form-control",id:"Name",value:r.Name,placeholder:y("CTAFooter:formText4"),required:!0})}),(0,a.jsx)("div",{className:"form-group",children:(0,a.jsx)("input",{onChange:function(e){return b(e)},type:"email",className:"form-control",id:"Email",value:r.Email,placeholder:y("CTAFooter:formText5"),required:!0})}),(0,a.jsx)("div",{className:"form-group",children:(0,a.jsx)("input",{onChange:function(e){return b(e)},type:"text",className:"form-control",id:"Phone",value:r.Phone,placeholder:y("CTAFooter:formText6"),required:!0})}),(0,a.jsxs)("div",{className:"radioKonw",children:[(0,a.jsx)("span",{children:y("CTAFooter:formText7")}),(0,a.jsxs)("div",{className:"form-check",children:[(0,a.jsx)("input",{onChange:function(e){return b(e)},className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"Holder",value:"ARN Holder",required:!0}),(0,a.jsx)("label",{className:"form-check-label",for:"Holder",children:y("CTAFooter:formText8")})]}),(0,a.jsxs)("div",{className:"form-check",children:[(0,a.jsx)("input",{onChange:function(e){return b(e)},className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"Holder",value:"NON ARN Holder",required:!0}),(0,a.jsx)("label",{className:"form-check-label",for:"Holder",children:y("CTAFooter:formText9")})]})]}),(0,a.jsxs)("div",{className:"form-check",children:[(0,a.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault",required:!0,checked:!0}),(0,a.jsx)("label",{className:"form-check1-label",for:"flexCheckDefault",children:y("CTAFooter:formText10")})]}),(0,a.jsx)("button",{className:"btn btn-primary",children:y("CTAFooter:formText11")})]}),u&&(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:y("CTAFooter:headerName27")})})]})})}))},53260:function(e,n,r){r.r(n),r.d(n,{Content:function(){return T}});var t=r(67294),i=r(35848),s=r(85893);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function c(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e,n){return l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},l(e,n)}function d(e,n){if(n&&("object"===o(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var m=t.lazy((function(){return r.e(7026).then(r.bind(r,87026))})),f=t.lazy((function(){return r.e(4130).then(r.bind(r,24130))})),p=t.lazy((function(){return r.e(3298).then(r.bind(r,83298))})),j=t.lazy((function(){return r.e(4638).then(r.bind(r,34638))})),x=t.lazy((function(){return r.e(4517).then(r.bind(r,74517))})),b=t.lazy((function(){return r.e(9717).then(r.bind(r,89717))})),y=t.lazy((function(){return r.e(2157).then(r.bind(r,52157))})),v=t.lazy((function(){return r.e(9777).then(r.bind(r,69777))})),g=t.lazy((function(){return r.e(8434).then(r.bind(r,8434))})),N=t.lazy((function(){return r.e(2332).then(r.bind(r,2332))})),w=function(e){var n,r,i=e.children,o=(n=(0,t.useState)(!0),r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,s=[],o=!0,a=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(s.push(t.value),!n||s.length!==n);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==r.return||r.return()}finally{if(a)throw i}}return s}}(n,r)||function(e,n){if(e){if("string"==typeof e)return h(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],c=o[1];return(0,s.jsxs)("p",{className:"text small-text",children:[a?i.slice(0,150):i,(0,s.jsx)("span",{onClick:function(){c(!a)},className:"read-or-hide",children:a?"...Read More":"Read Less"})]})},T=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&l(e,n)}(T,e);var n,r,i,o,h=(i=T,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=u(i);if(o){var r=u(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d(this,e)});function T(){return a(this,T),h.apply(this,arguments)}return n=T,(r=[{key:"render",value:function(){var e=this.props.t;return(0,s.jsxs)("div",{className:"container container-wrapper",children:[(0,s.jsx)("h2",{className:"text-center",children:e("Testimonials:testiT1")}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(m,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT2")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT3")}),(0,s.jsx)(w,{children:e("Testimonials:testiT4")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(x,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT6")}),(0,s.jsx)(w,{children:e("Testimonials:testiT7")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(N,{})}),(0,s.jsxs)("h6",{children:[e("Testimonials:testiT8")," "]})]})]}),(0,s.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(p,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT9")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT10")}),(0,s.jsx)(w,{children:e("Testimonials:testiT12")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(j,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT13")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT14")}),(0,s.jsx)(w,{children:e("Testimonials:testiT16")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(b,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT17")}),(0,s.jsx)(w,{children:e("Testimonials:testiT18")})]})]}),(0,s.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(g,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT19")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(f,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT20")}),(0,s.jsx)("p",{className:"small-text",children:e("Testimonials:testiT21")}),(0,s.jsx)(w,{children:e("Testimonials:testiT23")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(v,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT24")})]}),(0,s.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading...."}),children:(0,s.jsx)(y,{})}),(0,s.jsx)("h6",{children:e("Testimonials:testiT25")})]})]})]})]})}}])&&c(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),T}(t.Component);n.default=(0,i.Z)()(T)},77157:function(e,n,r){r.r(n);var t=r(67294),i=r(9669),s=r.n(i),o=r(64593),a=r(75412),c=r(10682),l=r(26793),d=r(85893);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,s=[],o=!0,a=!1;try{for(r=r.call(e);!(o=(t=r.next()).done)&&(s.push(t.value),!n||s.length!==n);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==r.return||r.return()}finally{if(a)throw i}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return f(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}n.default=function(){var e=m((0,t.useState)({fullName:"",email:"",phone:"",message:""}),2),n=e[0],r=e[1],i=(0,l.$)().t,f=m((0,t.useState)(!1),2),p=f[0],j=f[1];function x(e){var n=window.location.search.substring(1);console.log(n);var r=n.split("&");console.log(r);for(var t=0;t<r.length;t++){var i=r[t].split("=");if(console.log(i),i[0]==e)return i[1]}return!1}var b=function(e){var t=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){h(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},n);t[e.target.id]=e.target.value,r(t)};return(0,d.jsxs)("section",{children:[(0,d.jsxs)(o.q,{children:[(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("link",{rel:"canonical",href:window.location.href})]}),(0,d.jsx)(c.Z,{children:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(a.Z.Item,{href:"/",children:i("BreadCrumb:bd-45")}),(0,d.jsx)(a.Z.Item,{active:!0,children:i("BreadCrumb:bd-85")})]})}),(0,d.jsx)("div",{id:"conatct-formsection",children:(0,d.jsxs)("div",{className:"container container-wrapper",children:[(0,d.jsx)("h2",{children:"Let's Get In Touch"}),(0,d.jsx)("p",{children:"Here are the ways you can contact us with any questions you have"}),(0,d.jsx)("div",{className:"contact-flex",children:(0,d.jsxs)("div",{className:"form-flex1",children:[(0,d.jsxs)("div",{className:"contactform-flex",children:[!p&&(0,d.jsxs)("form",{action:"",onSubmit:function(e){return function(e){e.preventDefault();var r={Name:n.fullName,PhoneNo:n.phone,Email:n.email,Message:n.message,IsDistributor:0,TypeRequest:"ContactUsForm|".concat(x("utm_campaign"),"|").concat(x("utm_content"),"|").concat(x("utm_medium"),"|").concat(x("utm_source"))};s().post("https://api.nivesh.com/API/WebAddLead",r,{headers:{"Content-Type":"application/json"}}).then((function(e){j(!0)}))}(e)},children:[(0,d.jsx)("h2",{className:"form-heading",children:"Send Us Message"}),(0,d.jsxs)("div",{className:"conatactform",children:[(0,d.jsx)("label",{htmlFor:"form_name1",children:"Full Name"}),(0,d.jsx)("input",{onChange:function(e){return b(e)},className:"form_name1",type:"text",id:"fullName",name:"fullName",required:!0}),(0,d.jsx)("label",{htmlFor:"form_email1",children:"Email Address"}),(0,d.jsx)("input",{onChange:function(e){return b(e)},className:"form_email1",id:"email",type:"email",name:"email",required:!0}),(0,d.jsx)("label",{htmlFor:"form_phone1",children:"Phone Number"}),(0,d.jsx)("input",{onChange:function(e){return b(e)},className:"form_phone1",id:"phone",type:"tel",name:"phone",required:!0}),(0,d.jsx)("label",{htmlFor:"form_emessage",children:"Message"}),(0,d.jsx)("textarea",{onChange:function(e){return b(e)},className:"form_message",id:"message",name:"message",required:!0,rows:"5"}),(0,d.jsx)("button",{id:"form_button1",children:"Submit"})]})]}),p&&(0,d.jsx)("div",{className:"form_success",children:(0,d.jsx)("p",{children:"Your form is successfully submitted. Our representative will get in touch with you shortly."})})]}),(0,d.jsxs)("div",{className:"contact-information",children:[(0,d.jsx)("h2",{className:"form-heading1",children:"Contact Information"}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{className:"contact-iconflex",children:[(0,d.jsx)("span",{children:(0,d.jsx)("i",{className:"fa fa-map-marker"})}),(0,d.jsx)("span",{children:(0,d.jsxs)("p",{children:["3rd Floor, B-26-27",(0,d.jsx)("br",{}),"Sector 01, Noida 201301, UP, India"]})})]}),(0,d.jsxs)("li",{className:"contact-iconflex",children:[(0,d.jsx)("span",{children:(0,d.jsx)("i",{className:"fa fa-phone"})}),(0,d.jsx)("span",{children:(0,d.jsx)("p",{children:"+91-7290029202"})})]}),(0,d.jsxs)("li",{className:"contact-iconflex",children:[(0,d.jsx)("span",{children:(0,d.jsx)("i",{className:"fa fa-envelope-o"})}),(0,d.jsx)("span",{children:(0,d.jsx)("p",{children:"contact@nivesh.com"})})]}),(0,d.jsxs)("li",{className:"contact-iconflex",children:[(0,d.jsx)("span",{children:(0,d.jsx)("i",{className:"fa fa-envelope-o"})}),(0,d.jsx)("span",{children:(0,d.jsx)("p",{children:"Monday - Friday"})})]})]}),(0,d.jsx)("h2",{className:"form-heading1",children:"Find Us On"}),(0,d.jsxs)("div",{className:"social-handles",children:[(0,d.jsx)("a",{href:"https://www.facebook.com/niveshapp",target:"_blank",children:(0,d.jsx)("i",{className:"fa fa-facebook"})}),(0,d.jsx)("a",{href:"https://twitter.com/niveshapp",target:"_blank",children:(0,d.jsx)("i",{className:"fa fa-twitter"})}),(0,d.jsx)("a",{href:"https://in.linkedin.com/company/nivesh",target:"_blank",children:(0,d.jsx)("i",{className:"fa fa-linkedin"})}),(0,d.jsx)("a",{href:"https://www.instagram.com/nivesh.com_official",target:"_blank",children:(0,d.jsx)("i",{className:"fa fa-instagram"})}),(0,d.jsx)("a",{href:"https://www.youtube.com/channel/UCF9gt8_AP-KfwwUb2dBDGxQ",target:"_blank",children:(0,d.jsx)("i",{className:"fa fa-youtube"})})]})]})]})})]})})]})}},75104:function(e,n,r){r.r(n),r.d(n,{Grow:function(){return x}});var t=r(67294),i=r(1119),s=r(53260),o=r(35848),a=r(64593),c=r(10682),l=r(75412),d=r(85893);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function h(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function m(e,n){return m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},m(e,n)}function f(e,n){if(n&&("object"===u(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var x=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&m(e,n)}(x,e);var n,r,t,o,u=(t=x,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=j(t);if(o){var r=j(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)});function x(){var e,n,r,t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,x),t=function(e){return e.toLocaleString("en-IN",{maximumFractionDigits:0})},(r="formatNumber")in(n=p(e=u.call(this)))?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,e.state={items:void 0},e}return n=x,(r=[{key:"componentDidMount",value:function(){var e=this,n={method:"POST",headers:{"Content-Type":"application/json",token:"636F8F63-06C4-4D95-8562-392B34025FB0"},body:JSON.stringify({TotalClient:"",TotalPartner:"",TotalPartnerOverCities:"",NoOfTransaction:"",TotalTransactionValue:""})};fetch("https://api.nivesh.com/API/GetSummaryDetails",n).then((function(e){return e.json()})).then((function(n){e.setState({items:n.SummaryDetailsList})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.t,n=this.state.items,r=JSON.stringify([{"@context":"https://schema.org/","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://nivesh.com/en"},{"@type":"ListItem",position:2,name:"Partner",item:"https://nivesh.com/en/partner/"},{"@type":"ListItem",position:3,name:"Grow Your Mutual-fund",item:"https://nivesh.com/en/partner/grow-your-mutual-fund"}]}]);return(0,d.jsxs)("main",{children:[(0,d.jsxs)(a.q,{children:[(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("title",{children:e("MetaTitle:mT75")}),(0,d.jsx)("meta",{name:"description",content:e("MetaDescription:mD75")}),(0,d.jsx)("link",{rel:"canonical",href:window.location.href}),(0,d.jsx)("script",{type:"application/ld+json",children:r})]}),(0,d.jsx)(c.Z,{children:(0,d.jsxs)(l.Z,{children:[(0,d.jsx)(l.Z.Item,{href:"/",children:e("BreadCrumb:bd-45")}),(0,d.jsx)(l.Z.Item,{active:!0,children:e("BreadCrumb:bd-76")})]})}),(0,d.jsx)("div",{className:"container container-wrapper",children:(0,d.jsxs)("div",{className:"row reverse-mobilecolumn",children:[(0,d.jsxs)("div",{className:"col-lg-8 col-md-6 col-12",children:[(0,d.jsxs)("h1",{children:[e("GrowMF:GMF1"),(0,d.jsx)("br",{}),e("GrowMF:GMF2")]}),(0,d.jsx)("p",{children:e("GrowMF:GMF3")}),(0,d.jsx)("div",{className:"col-lg-6 mb-4",children:(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsx)("h3",{children:n?this.formatNumber(n.TotalPartner):"Loading..."}),(0,d.jsxs)("p",{children:[e("Home:hOME61")," ",(0,d.jsx)("span",{children:n?this.formatNumber(n.TotalPartnerOverCities):"Loading..."})," ",e("Home:hOME61-A")]})]})})}),(0,d.jsx)("div",{className:"col-lg-6 mb-4",children:(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsx)("h3",{children:n?this.formatNumber(n.TotalClient):"Loading..."}),(0,d.jsx)("p",{children:e("Home:hOME62")})]})})}),(0,d.jsx)("div",{className:"col-lg-6 mb-4",children:(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsx)("h3",{children:n?this.formatNumber(n.NoOfTransaction):"Loading..."}),(0,d.jsx)("p",{children:e("Home:hOME63")})]})})}),(0,d.jsx)("div",{className:"col-lg-6 mb-4",children:(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("h3",{children:["Rs. ",n?this.formatNumber(parseInt(n.TotalTransactionValue)):"Loading..."]}),(0,d.jsx)("p",{children:e("Home:hOME64")})]})})})]}),(0,d.jsx)(i.Z,{campaignName:"Web-Grow-MF Contact Us Form",contentName:"",mediumName:"website",sourceName:"organic"})]})}),(0,d.jsx)("div",{className:"landingPlatforms",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col-lg-12",children:[(0,d.jsx)("h2",{className:"text-white",children:e("GrowMF:GMF4")}),(0,d.jsx)("h2",{className:"text-white",children:e("GrowMF:GMF5")}),(0,d.jsxs)("p",{className:"text-white",children:[e("GrowMF:GMF6"),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),e("GrowMF:GMF7")]})]})})})}),(0,d.jsx)("div",{className:"container container-wrapper",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col-lg-12",children:[(0,d.jsx)("h2",{children:e("GrowMF:GMF8")}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:e("GrowMF:GMF9")}),(0,d.jsx)("li",{children:e("GrowMF:GMF10")}),(0,d.jsx)("li",{children:e("GrowMF:GMF11")}),(0,d.jsx)("li",{children:e("GrowMF:GMF12")})]}),(0,d.jsx)("div",{className:"text-left",children:(0,d.jsx)("a",{href:"#",title:"",className:"btn btn-primary",children:e("CTAFooter:JoinUs1")})})]})})}),(0,d.jsx)("div",{className:"bg-light",children:(0,d.jsx)("div",{className:"container container-wrapper",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col-lg-12 getStartedBtn",children:[(0,d.jsx)("h2",{children:e("GrowMF:GMF13")}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:e("GrowMF:GMF14")}),(0,d.jsx)("li",{children:e("GrowMF:GMF15")}),(0,d.jsx)("li",{children:e("GrowMF:GMF16")}),(0,d.jsx)("li",{children:e("GrowMF:GMF17")}),(0,d.jsx)("li",{children:e("GrowMF:GMF18")})]})]})})})}),(0,d.jsx)("div",{className:"container container-wrapper",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col-lg-12",children:[(0,d.jsx)("h2",{children:e("GrowMF:GMF19")}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:e("GrowMF:GMF20")}),(0,d.jsx)("li",{children:e("GrowMF:GMF21")}),(0,d.jsx)("li",{children:e("GrowMF:GMF22")})]}),(0,d.jsx)("div",{className:"text-left",children:(0,d.jsx)("a",{href:"#",title:"",className:"btn btn-primary",children:e("CTAFooter:JoinUs1")})})]})})}),(0,d.jsx)(s.default,{})]})}}])&&h(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),x}(t.Component);n.default=(0,o.Z)()(x)}}]);