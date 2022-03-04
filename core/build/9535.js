"use strict";(self.webpackChunkNivesh=self.webpackChunkNivesh||[]).push([[9535],{39535:function(e,t,n){n.r(t),n.d(t,{numberStatsSection:function(){return b}});var r=n(67294),i=n(28744),o=n(85893);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function l(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var h=r.lazy((function(){return n.e(5032).then(n.bind(n,25032))})),f=r.lazy((function(){return n.e(4945).then(n.bind(n,4945))})),m=r.lazy((function(){return n.e(5176).then(n.bind(n,15176))})),p=r.lazy((function(){return n.e(4482).then(n.bind(n,94482))})),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(x,e);var t,n,i,s,b=(i=x,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(i);if(s){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function x(){var e,t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,x),r=function(e){return e.toLocaleString("en-IN",{maximumFractionDigits:0})},(n="formatNumber")in(t=u(e=b.call(this)))?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,e.state={items:void 0},e}return t=x,(n=[{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json",token:"636F8F63-06C4-4D95-8562-392B34025FB0"},body:JSON.stringify({TotalClient:"",TotalPartner:"",TotalPartnerOverCities:"",NoOfTransaction:"",TotalTransactionValue:""})};fetch("https://api.nivesh.com/API/GetSummaryDetails",t).then((function(e){return e.json()})).then((function(t){e.setState({items:t.SummaryDetailsList})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.t,t=this.state.items;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{id:"map-section",children:(0,o.jsxs)("div",{className:"container container-wrapper",children:[(0,o.jsx)("h2",{className:"text-center text-white mb-4",children:e("Home:hOME60")}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(p,{})})}),(0,o.jsxs)("div",{className:"col-lg-6 col-md-6",children:[(0,o.jsxs)("div",{className:"map-flex border border-white p-3",children:[(0,o.jsx)("div",{className:"col-lg-4",children:(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(f,{})})}),(0,o.jsxs)("div",{className:"col-lg-8",children:[(0,o.jsx)("h2",{className:"text-right text-white",children:t?this.formatNumber(t.TotalPartner):"Loading..."}),(0,o.jsxs)("h6",{className:"text-right text-white",children:[e("Home:hOME61")," ",(0,o.jsx)("span",{children:t?this.formatNumber(t.TotalPartnerOverCities):"Loading..."})," ",e("Home:hOME61-A")]})]})]}),(0,o.jsxs)("div",{className:"map-flex border border-white p-3",children:[(0,o.jsxs)("div",{className:"col-lg-8",children:[(0,o.jsx)("h2",{className:"text-left text-white",children:t?this.formatNumber(t.TotalClient):"Loading..."}),(0,o.jsx)("h6",{className:"text-left text-white",children:e("Home:hOME62")})]}),(0,o.jsx)("div",{className:"col-lg-4",children:(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(h,{})})})]})]})]})]})}),(0,o.jsx)("div",{className:"gardient-red",children:(0,o.jsx)("div",{className:"container container-wrapper",children:(0,o.jsxs)("div",{className:"row row justify-content-between",children:[(0,o.jsxs)("div",{className:"col-lg-3 border border-white p-5 mb-4",children:[(0,o.jsx)("h2",{className:"text-white text-center",children:t?this.formatNumber(t.NoOfTransaction):"Loading..."}),(0,o.jsx)("p",{className:"text-center text-white",children:e("Home:hOME63")})]}),(0,o.jsx)("div",{className:"col-lg-3 border border-white p-5 mb-4 text-center",children:(0,o.jsx)(r.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading...."}),children:(0,o.jsx)(m,{})})}),(0,o.jsxs)("div",{className:"col-lg-3 border border-white p-5 mb-4",children:[(0,o.jsxs)("h2",{className:"text-white text-center",children:["Rs. ",t?this.formatNumber(parseInt(t.TotalTransactionValue)):"Loading..."]}),(0,o.jsx)("p",{className:"text-center text-white",children:e("Home:hOME64")})]})]})})})]})}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),x}(r.Component);t.default=(0,i.Z)()(b)}}]);