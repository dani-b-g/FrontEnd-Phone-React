(this["webpackJsonpphone-app"]=this["webpackJsonpphone-app"]||[]).push([[0],{49:function(e,n,c){},50:function(e,n,c){},75:function(e,n,c){"use strict";c.r(n);var t=c(2),a=c(0),s=c.n(a),i=c(12),r=c.n(i),j=(c(49),c(50),c(42)),l=c(14),o=c(27),d=function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(t.jsx)(l.a.Brand,{children:"Phone-App"}),Object(t.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(t.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(t.jsx)(o.a,{className:"mr-auto",children:Object(t.jsx)(o.a.Link,{href:"#home",children:"Home"})})})]})})},h=c(43),b=c(37),x=c.n(b),O=function(){var e=Object(a.useState)({data:[],loading:!0}),n=Object(h.a)(e,2),c=n[0],t=n[1];return Object(a.useEffect)((function(){(function(){var e="".concat("https://phonex-react.herokuapp.com","/phone");return x.a.get(e,{crossDomain:!0})})().then((function(e){var n=e.data;t({data:n,loading:!1})}))}),[]),c},p=c(40),m=c(18),u=c(38),g=c(41),f=c(13),v=c(39),N=c(25),F=function(e){var n=e.phone;return Object(t.jsxs)(f.a,{className:"m-1",style:{width:"18rem"},children:[Object(t.jsx)(f.a.Img,{variant:"top",className:"imgCard",src:"../../assets/img/".concat(n.imageFileName)}),Object(t.jsxs)(f.a.Body,{children:[Object(t.jsx)(f.a.Title,{children:n.name}),Object(t.jsx)(f.a.Text,{children:n.description}),Object(t.jsxs)(v.a,{className:"p-2",children:[Object(t.jsx)(m.a,{variant:"primary",children:"Details"}),Object(t.jsx)(N.a,{className:"offset-5",children:Object(t.jsx)("span",{className:" text-center align-middle ",children:"".concat(n.price," \u20ac")})})]})]})]})},y=function(){var e=O(),n=e.data;e.loading;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(p.a,{className:"mb-0",children:[Object(t.jsx)("h1",{children:"PhoneList"}),Object(t.jsx)("p",{}),Object(t.jsx)("p",{children:Object(t.jsx)(m.a,{variant:"primary",children:Object(t.jsxs)("span",{children:["Add phone ",Object(t.jsx)(u.a,{className:"ml-2",icon:g.a})]})})})]}),Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("div",{className:"grid-row",children:n.map((function(e){return console.log(e),Object(t.jsx)(F,{phone:e},e.id)}))})})]})};var C=function(){return Object(t.jsx)("div",{children:Object(t.jsxs)(j.a,{fluid:!0,className:"p-0",children:[Object(t.jsx)(d,{}),Object(t.jsx)(y,{})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,s=n.getLCP,i=n.getTTFB;c(e),t(e),a(e),s(e),i(e)}))};c(74);r.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(C,{})}),document.getElementById("root")),T()}},[[75,1,2]]]);
//# sourceMappingURL=main.26337f0b.chunk.js.map