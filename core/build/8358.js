"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[8358,3260],{35174:function(e,r,n){n.d(r,{Z:function(){return F}});var t=n(67294),i=n(93379),o=n.n(i),s=n(7795),a=n.n(s),l=n(90569),c=n.n(l),d=n(3565),u=n.n(d),h=n(19216),f=n.n(h),m=n(44589),p=n.n(m),x=n(61514),j={};j.styleTagTransform=p(),j.setAttributes=u(),j.insert=c().bind(null,"head"),j.domAPI=a(),j.insertStyleElement=f(),o()(x.Z,j),x.Z&&x.Z.locals&&x.Z.locals;var b=n(9669),y=n.n(b),v=n(35848),g=(n(73935),n(85893));function w(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function N(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function T(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return O(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var F=(0,v.Z)()((function(e){var r=T((0,t.useState)({Name:"",Email:"",Phone:"",Holder:""}),2),n=r[0],i=r[1],o=T((0,t.useState)(!1),2),s=o[0],a=o[1];function l(e){var r=window.location.search.substring(1);console.log(r);var n=r.split("&");console.log(n);for(var t=0;t<n.length;t++){var i=n[t].split("=");if(console.log(i),i[0]==e)return i[1]}return!1}var c=function(e){var r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?w(Object(n),!0).forEach((function(r){N(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},n);r[e.target.id]=e.target.value,i(r)},d=e.t;return(0,g.jsx)("div",{className:"col-lg-4 col-md-6 col-12 mb-5",children:(0,g.jsxs)("div",{className:"formKnow",children:[(0,g.jsx)("h4",{children:d("CTAFooter:formText2")}),!s&&(0,g.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var r={Name:n.Name,PhoneNo:n.Phone,Email:n.Email,Message:n.Holder,IsDistributor:0,TypeRequest:"LeadPartnerForm|".concat(l("utm_campaign"),"|").concat(l("utm_content"),"|").concat(l("utm_medium"),"|").concat(l("utm_source"))};y().post("https://api.nivesh.com/API/WebAddLeadPartner",r,{headers:{"Content-Type":"application/json"}}).then((function(e){a(!0)}))}(e)},children:[(0,g.jsx)("div",{className:"form-group",children:(0,g.jsx)("input",{onChange:function(e){return c(e)},type:"text",className:"form-control",id:"Name",value:n.Name,placeholder:d("CTAFooter:formText4"),required:!0})}),(0,g.jsx)("div",{className:"form-group",children:(0,g.jsx)("input",{onChange:function(e){return c(e)},type:"email",className:"form-control",id:"Email",value:n.Email,placeholder:d("CTAFooter:formText5"),required:!0})}),(0,g.jsx)("div",{className:"form-group",children:(0,g.jsx)("input",{onChange:function(e){return c(e)},type:"text",className:"form-control",id:"Phone",value:n.Phone,placeholder:d("CTAFooter:formText6"),required:!0})}),(0,g.jsxs)("div",{className:"radioKonw",children:[(0,g.jsx)("span",{children:d("CTAFooter:formText7")}),(0,g.jsxs)("div",{className:"form-check",children:[(0,g.jsx)("input",{onChange:function(e){return c(e)},className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"Holder",value:"ARN Holder",required:!0}),(0,g.jsx)("label",{className:"form-check-label",for:"Holder",children:d("CTAFooter:formText8")})]}),(0,g.jsxs)("div",{className:"form-check",children:[(0,g.jsx)("input",{onChange:function(e){return c(e)},className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"Holder",value:"NON ARN Holder",required:!0}),(0,g.jsx)("label",{className:"form-check-label",for:"Holder",children:d("CTAFooter:formText9")})]})]}),(0,g.jsxs)("div",{className:"form-check",children:[(0,g.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault",required:!0,checked:!0}),(0,g.jsx)("label",{className:"form-check1-label",for:"flexCheckDefault",children:d("CTAFooter:formText10")})]}),(0,g.jsx)("button",{className:"btn btn-primary",children:d("CTAFooter:formText11")})]}),s&&(0,g.jsx)("div",{children:(0,g.jsx)("p",{children:"Your form is successfully submitted. Our representative will get in touch with you shortly."})})]})})}))},53260:function(e,r,n){n.r(r),n.d(r,{Content:function(){return T}});var t=n(67294),i=n(35848),o=n(85893);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function l(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function c(e,r){return c=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},c(e,r)}function d(e,r){if(r&&("object"===s(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var f=t.lazy((function(){return n.e(7026).then(n.bind(n,87026))})),m=t.lazy((function(){return n.e(4130).then(n.bind(n,24130))})),p=t.lazy((function(){return n.e(3298).then(n.bind(n,83298))})),x=t.lazy((function(){return n.e(4638).then(n.bind(n,34638))})),j=t.lazy((function(){return n.e(4517).then(n.bind(n,74517))})),b=t.lazy((function(){return n.e(9717).then(n.bind(n,89717))})),y=t.lazy((function(){return n.e(5460).then(n.bind(n,75460))})),v=t.lazy((function(){return n.e(8419).then(n.bind(n,58419))})),g=t.lazy((function(){return n.e(2584).then(n.bind(n,62584))})),w=t.lazy((function(){return n.e(9602).then(n.bind(n,79602))})),N=function(e){var r,n,i=e.children,s=(r=(0,t.useState)(!0),n=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(r,n)||function(e,r){if(e){if("string"==typeof e)return h(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,r):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=s[0],l=s[1];return(0,o.jsxs)("p",{className:"text small-text",children:[a?i.slice(0,150):i,(0,o.jsx)("span",{onClick:function(){l(!a)},className:"read-or-hide",children:a?"...Read More":"Read Less"})]})},T=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&c(e,r)}(T,e);var r,n,i,s,h=(i=T,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=u(i);if(s){var n=u(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return d(this,e)});function T(){return a(this,T),h.apply(this,arguments)}return r=T,(n=[{key:"render",value:function(){var e=this.props.t;return(0,o.jsxs)("div",{className:"container container-wrapper",children:[(0,o.jsx)("h2",{className:"text-center",children:e("Testimonials:testiT1")}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,o.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(f,{})}),(0,o.jsx)("h6",{children:e("Testimonials:testiT2")}),(0,o.jsx)("p",{className:"small-text",children:e("Testimonials:testiT3")}),(0,o.jsx)(N,{children:e("Testimonials:testiT4")})]}),(0,o.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(j,{})}),(0,o.jsx)("h6",{children:e("Testimonials:testiT6")}),(0,o.jsx)(N,{children:e("Testimonials:testiT7")})]}),(0,o.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(w,{})}),(0,o.jsxs)("h6",{children:[e("Testimonials:testiT8")," "]})]})]}),(0,o.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,o.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(p,{})}),(0,o.jsx)("h6",{children:e("Testimonials:testiT9")}),(0,o.jsx)("p",{className:"small-text",children:e("Testimonials:testiT10")}),(0,o.jsx)(N,{children:e("Testimonials:testiT12")})]}),(0,o.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(x,{})}),(0,o.jsx)("h6",{children:e("Testimonials:testiT13")}),(0,o.jsx)("p",{className:"small-text",children:e("Testimonials:testiT14")}),(0,o.jsx)(N,{children:e("Testimonials:testiT16")})]}),(0,o.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(b,{})}),(0,o.jsx)("h6",{children:e("Testimonials:testiT17")}),(0,o.jsx)(N,{children:e("Testimonials:testiT18")})]})]}),(0,o.jsxs)("div",{className:"col-lg-4 col-12",children:[(0,o.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(g,{})}),(0,o.jsx)("h6",{children:e("Testimonials:testiT19")})]}),(0,o.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(m,{})}),(0,o.jsx)("h6",{children:e("Testimonials:testiT20")}),(0,o.jsx)("p",{className:"small-text",children:e("Testimonials:testiT21")}),(0,o.jsx)(N,{children:e("Testimonials:testiT23")})]}),(0,o.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(v,{})}),(0,o.jsx)("h6",{children:e("Testimonials:testiT24")})]}),(0,o.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded",children:[(0,o.jsx)(t.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(y,{})}),(0,o.jsx)("h6",{children:e("Testimonials:testiT25")})]})]})]})]})}}])&&l(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),T}(t.Component);r.default=(0,i.Z)()(T)},77157:function(e,r,n){n.r(r);var i=n(67294),o=(n(17654),n(9669)),s=n.n(o),a=n(64593),l=n(75412),c=n(10682),d=n(85893);function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function h(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,i,o=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,r)||function(e,r){if(e){if("string"==typeof e)return m(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}r.default=function(){var e=f((0,i.useState)({fullName:"",email:"",phone:"",message:""}),2),r=e[0],n=e[1],o=f((0,i.useState)(!1),2),m=o[0],p=o[1];function x(e){var r=window.location.search.substring(1);console.log(r);var n=r.split("&");console.log(n);for(var t=0;t<n.length;t++){var i=n[t].split("=");if(console.log(i),i[0]==e)return i[1]}return!1}var j=function(e){var t=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){h(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},r);t[e.target.id]=e.target.value,n(t)};return(0,d.jsxs)("section",{children:[(0,d.jsxs)(a.q,{children:[(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("link",{rel:"canonical",href:window.location.href})]}),(0,d.jsx)(c.Z,{children:(0,d.jsxs)(l.Z,{children:[(0,d.jsx)(l.Z.Item,{href:"/",children:t("BreadCrumb:bd-45")}),(0,d.jsx)(l.Z.Item,{active:!0,children:t("BreadCrumb:bd-85")})]})}),(0,d.jsx)("div",{id:"conatct-formsection",children:(0,d.jsxs)("div",{className:"container container-wrapper",children:[(0,d.jsx)("h2",{children:"Let's Get In Touch"}),(0,d.jsx)("p",{children:"Here are the ways you can contact us with any questions you have"}),(0,d.jsx)("div",{className:"contact-flex",children:(0,d.jsxs)("div",{className:"form-flex1",children:[(0,d.jsxs)("div",{className:"contactform-flex",children:[!m&&(0,d.jsxs)("form",{action:"",onSubmit:function(e){return function(e){e.preventDefault();var n={Name:r.fullName,PhoneNo:r.phone,Email:r.email,Message:r.message,IsDistributor:0,TypeRequest:"ContactUsForm|".concat(x("utm_campaign"),"|").concat(x("utm_content"),"|").concat(x("utm_medium"),"|").concat(x("utm_source"))};s().post("https://api.nivesh.com/API/WebAddLead",n,{headers:{"Content-Type":"application/json"}}).then((function(e){p(!0)}))}(e)},children:[(0,d.jsx)("h2",{className:"form-heading",children:"Send Us Message"}),(0,d.jsxs)("div",{className:"conatactform",children:[(0,d.jsx)("label",{htmlFor:"form_name1",children:"Full Name"}),(0,d.jsx)("input",{onChange:function(e){return j(e)},className:"form_name1",type:"text",id:"fullName",name:"fullName",required:!0}),(0,d.jsx)("label",{htmlFor:"form_email1",children:"Email Address"}),(0,d.jsx)("input",{onChange:function(e){return j(e)},className:"form_email1",id:"email",type:"email",name:"email",required:!0}),(0,d.jsx)("label",{htmlFor:"form_phone1",children:"Phone Number"}),(0,d.jsx)("input",{onChange:function(e){return j(e)},className:"form_phone1",id:"phone",type:"tel",name:"phone",required:!0}),(0,d.jsx)("label",{htmlFor:"form_emessage",children:"Message"}),(0,d.jsx)("textarea",{onChange:function(e){return j(e)},className:"form_message",id:"message",name:"message",required:!0,rows:"5"}),(0,d.jsx)("button",{id:"form_button1",children:"Submit"})]})]}),m&&(0,d.jsx)("div",{className:"form_success",children:(0,d.jsx)("p",{children:"Your form is successfully submitted. Our representative will get in touch with you shortly."})})]}),(0,d.jsxs)("div",{className:"contact-information",children:[(0,d.jsx)("h2",{className:"form-heading1",children:"Contact Information"}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{className:"contact-iconflex",children:[(0,d.jsx)("span",{children:(0,d.jsx)("i",{className:"fa fa-map-marker"})}),(0,d.jsx)("span",{children:(0,d.jsxs)("p",{children:["3rd Floor, B-26-27",(0,d.jsx)("br",{}),"Sector 01, Noida 201301, UP, India"]})})]}),(0,d.jsxs)("li",{className:"contact-iconflex",children:[(0,d.jsx)("span",{children:(0,d.jsx)("i",{className:"fa fa-phone"})}),(0,d.jsx)("span",{children:(0,d.jsx)("p",{children:"+91 7290026469"})})]}),(0,d.jsxs)("li",{className:"contact-iconflex",children:[(0,d.jsx)("span",{children:(0,d.jsx)("i",{className:"fa fa-envelope-o"})}),(0,d.jsx)("span",{children:(0,d.jsx)("p",{children:"contact@nivesh.com"})})]}),(0,d.jsxs)("li",{className:"contact-iconflex",children:[(0,d.jsx)("span",{children:(0,d.jsx)("i",{className:"fa fa-envelope-o"})}),(0,d.jsx)("span",{children:(0,d.jsx)("p",{children:"Monday - Friday"})})]})]}),(0,d.jsx)("h2",{className:"form-heading1",children:"Find Us On"}),(0,d.jsxs)("div",{className:"social-handles",children:[(0,d.jsx)("a",{href:"https://www.facebook.com/niveshapp",target:"_blank",children:(0,d.jsx)("i",{className:"fa fa-facebook"})}),(0,d.jsx)("a",{href:"https://twitter.com/niveshapp",target:"_blank",children:(0,d.jsx)("i",{className:"fa fa-twitter"})}),(0,d.jsx)("a",{href:"https://in.linkedin.com/company/nivesh",target:"_blank",children:(0,d.jsx)("i",{className:"fa fa-linkedin"})}),(0,d.jsx)("a",{href:"https://www.instagram.com/nivesh.com_official",target:"_blank",children:(0,d.jsx)("i",{className:"fa fa-instagram"})}),(0,d.jsx)("a",{href:"https://www.youtube.com/channel/UCF9gt8_AP-KfwwUb2dBDGxQ",target:"_blank",children:(0,d.jsx)("i",{className:"fa fa-youtube"})})]})]})]})})]})})]})}},75104:function(e,r,n){n.r(r),n.d(r,{Grow:function(){return j}});var t=n(67294),i=n(35174),o=n(53260),s=n(35848),a=n(64593),l=n(10682),c=n(75412),d=n(85893);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function h(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function f(e,r){return f=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},f(e,r)}function m(e,r){if(r&&("object"===u(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var j=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&f(e,r)}(j,e);var r,n,t,s,u=(t=j,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=x(t);if(s){var n=x(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return m(this,e)});function j(){var e,r,n,t;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,j),t=function(e){return e.toLocaleString("en-IN",{maximumFractionDigits:0})},(n="formatNumber")in(r=p(e=u.call(this)))?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,e.state={items:void 0},e}return r=j,(n=[{key:"componentDidMount",value:function(){var e=this,r={method:"POST",headers:{"Content-Type":"application/json",token:"636F8F63-06C4-4D95-8562-392B34025FB0"},body:JSON.stringify({TotalClient:"",TotalPartner:"",TotalPartnerOverCities:"",NoOfTransaction:"",TotalTransactionValue:""})};fetch("https://api.nivesh.com/API/GetSummaryDetails",r).then((function(e){return e.json()})).then((function(r){e.setState({items:r.SummaryDetailsList})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.t,r=this.state.items;return(0,d.jsxs)("main",{children:[(0,d.jsxs)(a.q,{children:[(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("title",{children:e("MetaTitle:mT75")}),(0,d.jsx)("meta",{name:"description",content:e("MetaDescription:mD75")}),(0,d.jsx)("link",{rel:"canonical",href:window.location.href})]}),(0,d.jsx)(l.Z,{children:(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(c.Z.Item,{href:"/",children:e("BreadCrumb:bd-45")}),(0,d.jsx)(c.Z.Item,{active:!0,children:e("BreadCrumb:bd-76")})]})}),(0,d.jsx)("div",{className:"container container-wrapper",children:(0,d.jsxs)("div",{className:"row reverse-mobilecolumn",children:[(0,d.jsxs)("div",{className:"col-lg-8 col-md-6 col-12",children:[(0,d.jsxs)("h1",{children:[e("GrowMF:GMF1"),(0,d.jsx)("br",{}),e("GrowMF:GMF2")]}),(0,d.jsx)("p",{children:e("GrowMF:GMF3")}),(0,d.jsx)("div",{className:"col-lg-6 mb-4",children:(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsx)("h3",{children:r?this.formatNumber(r.TotalPartner):"Loading..."}),(0,d.jsxs)("p",{children:[e("Home:hOME61")," ",(0,d.jsx)("span",{children:r?this.formatNumber(r.TotalPartnerOverCities):"Loading..."})," ",e("Home:hOME61-A")]})]})})}),(0,d.jsx)("div",{className:"col-lg-6 mb-4",children:(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsx)("h3",{children:r?this.formatNumber(r.TotalClient):"Loading..."}),(0,d.jsx)("p",{children:e("Home:hOME62")})]})})}),(0,d.jsx)("div",{className:"col-lg-6 mb-4",children:(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsx)("h3",{children:r?this.formatNumber(r.NoOfTransaction):"Loading..."}),(0,d.jsx)("p",{children:e("Home:hOME63")})]})})}),(0,d.jsx)("div",{className:"col-lg-6 mb-4",children:(0,d.jsx)("div",{className:"card",children:(0,d.jsxs)("div",{className:"card-body",children:[(0,d.jsxs)("h3",{children:["Rs. ",r?this.formatNumber(parseInt(r.TotalTransactionValue)):"Loading..."]}),(0,d.jsx)("p",{children:e("Home:hOME64")})]})})})]}),(0,d.jsx)(i.Z,{})]})}),(0,d.jsx)("div",{className:"landingPlatforms",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col-lg-12",children:[(0,d.jsx)("h2",{className:"text-white",children:e("GrowMF:GMF4")}),(0,d.jsx)("h2",{className:"text-white",children:e("GrowMF:GMF5")}),(0,d.jsxs)("p",{className:"text-white",children:[e("GrowMF:GMF6"),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),e("GrowMF:GMF7")]})]})})})}),(0,d.jsx)("div",{className:"container container-wrapper",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col-lg-12",children:[(0,d.jsx)("h2",{children:e("GrowMF:GMF8")}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:e("GrowMF:GMF9")}),(0,d.jsx)("li",{children:e("GrowMF:GMF10")}),(0,d.jsx)("li",{children:e("GrowMF:GMF11")}),(0,d.jsx)("li",{children:e("GrowMF:GMF12")})]}),(0,d.jsx)("div",{className:"text-left",children:(0,d.jsx)("a",{href:"#",title:"",className:"btn btn-primary",children:e("CTAFooter:JoinUs1")})})]})})}),(0,d.jsx)("div",{className:"bg-light",children:(0,d.jsx)("div",{className:"container container-wrapper",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col-lg-12 getStartedBtn",children:[(0,d.jsx)("h2",{children:e("GrowMF:GMF13")}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:e("GrowMF:GMF14")}),(0,d.jsx)("li",{children:e("GrowMF:GMF15")}),(0,d.jsx)("li",{children:e("GrowMF:GMF16")}),(0,d.jsx)("li",{children:e("GrowMF:GMF17")}),(0,d.jsx)("li",{children:e("GrowMF:GMF18")})]})]})})})}),(0,d.jsx)("div",{className:"container container-wrapper",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col-lg-12",children:[(0,d.jsx)("h2",{children:e("GrowMF:GMF19")}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:e("GrowMF:GMF20")}),(0,d.jsx)("li",{children:e("GrowMF:GMF21")}),(0,d.jsx)("li",{children:e("GrowMF:GMF22")})]}),(0,d.jsx)("div",{className:"text-left",children:(0,d.jsx)("a",{href:"#",title:"",className:"btn btn-primary",children:e("CTAFooter:JoinUs1")})})]})})}),(0,d.jsx)(o.default,{})]})}}])&&h(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),j}(t.Component);r.default=(0,s.Z)()(j)},61514:function(e,r,n){var t=n(8081),i=n.n(t),o=n(23645),s=n.n(o)()(i());s.push([e.id,".radioKonw{\r\n    padding:15px !important;\r\n\tfont-family:'Montserrat' !important;\r\n\tfont-size:14px !important;\r\n   color: #A1A1A1 !important;\r\n\tborder: 1px solid #61D68E !important;\r\n}\r\n\r\n.formKnow{\r\n\tpadding: 15px;\r\n\tborder: 1px solid #61D68E !important;\r\n}\r\n\r\n.formKnow h3{\r\n\tfont-size: 18px;\r\n\ttext-align: center;\r\n\tcolor: #243B71;\r\n\r\n}\r\n\r\n.form-check{\r\n\tpadding-left: 0px;\r\n\tmargin-top: 5px;\r\n\r\n}\r\n.form-check-label{\r\n\r\n\tfont-family:'Montserrat' !important;\r\n\tfont-size: 14px;\r\n\tfont-weight: 400;\r\n\tmargin-left: 20px;\r\n\tcolor: black;;\r\n\r\n\r\n}\r\n\r\n.form-check1-label{\r\n\tfont-size: 12px;\r\n\tfont-weight: 400;\r\n\tmargin-left: 20px;\r\n\tfont-family:'Montserrat' !important;\r\n}\r\n\r\n.form-group{\r\n\tcolor:black;\r\n}\r\n\r\n.form-control{\r\n  padding: 20px;\r\n  font-family:'Montserrat' !important;\r\n\tfont-size:14px !important;\r\n   color: #A1A1A1 !important;\r\n\tborder: 1px solid #61D68E !important;\r\n}",""]),r.Z=s}}]);