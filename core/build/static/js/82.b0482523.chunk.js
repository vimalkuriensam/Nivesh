(this.webpackJsonpNivesh=this.webpackJsonpNivesh||[]).push([[82],{1337:function(e,t,a){"use strict";a.r(t),a.d(t,"numberStatsSection",(function(){return E}));var n=a(70),l=a(71),r=a(73),c=a(72),i=a(0),m=a.n(i),s=a(676),o=m.a.lazy((function(){return a.e(61).then(a.bind(null,1282))})),u=m.a.lazy((function(){return a.e(69).then(a.bind(null,1284))})),d=m.a.lazy((function(){return a.e(73).then(a.bind(null,1286))})),h=m.a.lazy((function(){return a.e(64).then(a.bind(null,1288))})),E=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).formatNumber=function(e){return e.toLocaleString("en-IN",{maximumFractionDigits:0})},e.state={items:void 0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json",token:"636F8F63-06C4-4D95-8562-392B34025FB0"},body:JSON.stringify({TotalClient:"",TotalPartner:"",TotalPartnerOverCities:"",NoOfTransaction:"",TotalTransactionValue:""})};fetch("https://api.nivesh.com/API/GetSummaryDetails",t).then((function(e){return e.json()})).then((function(t){e.setState({items:t.SummaryDetailsList})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.t,t=this.state.items;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{id:"map-section"},m.a.createElement("div",{className:"container container-wrapper"},m.a.createElement("h2",{className:"text-center text-white mb-4"},e("Home:hOME60")),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement(i.Suspense,{fallback:m.a.createElement("div",null,"Loading....")},m.a.createElement(h,null))),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"map-flex border border-white p-3"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(i.Suspense,{fallback:m.a.createElement("div",null,"Loading....")},m.a.createElement(u,null))),m.a.createElement("div",{className:"col-lg-8"},m.a.createElement("h2",{className:"text-right text-white"},t?this.formatNumber(t.TotalPartner):"Loading..."),m.a.createElement("h6",{className:"text-right text-white"},e("Home:hOME61")," ",m.a.createElement("span",null,t?this.formatNumber(t.TotalPartnerOverCities):"Loading...")," ",e("Home:hOME61-A")))),m.a.createElement("div",{className:"map-flex border border-white p-3"},m.a.createElement("div",{className:"col-lg-8"},m.a.createElement("h2",{className:"text-left text-white"},t?this.formatNumber(t.TotalClient):"Loading..."),m.a.createElement("h6",{className:"text-left text-white"},e("Home:hOME62"))),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(i.Suspense,{fallback:m.a.createElement("div",null,"Loading....")},m.a.createElement(o,null)))))))),m.a.createElement("div",{className:"gardient-red"},m.a.createElement("div",{className:"container container-wrapper"},m.a.createElement("div",{className:"row row justify-content-between"},m.a.createElement("div",{className:"col-lg-3 border border-white p-5 mb-4"},m.a.createElement("h2",{className:"text-white text-center"},t?this.formatNumber(t.NoOfTransaction):"Loading..."),m.a.createElement("p",{className:"text-center text-white"},e("Home:hOME63"))),m.a.createElement("div",{className:"col-lg-3 border border-white p-5 mb-4 text-center"},m.a.createElement(i.Suspense,{fallback:m.a.createElement("div",null,"Loading....")},m.a.createElement(d,null))),m.a.createElement("div",{className:"col-lg-3 border border-white p-5 mb-4"},m.a.createElement("h2",{className:"text-white text-center"},"Rs. ",t?this.formatNumber(parseInt(t.TotalTransactionValue)):"Loading..."),m.a.createElement("p",{className:"text-center text-white"},e("Home:hOME64")))))))}}]),a}(i.Component);t.default=Object(s.a)()(E)}}]);
//# sourceMappingURL=82.b0482523.chunk.js.map