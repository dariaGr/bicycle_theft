(this.webpackJsonpbicycle_theft=this.webpackJsonpbicycle_theft||[]).push([[0],{32:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);c(31),c(32);var n=c(1),s=c.n(n),a=c(28),r=c.n(a),l=(c(37),c(3)),i=c(12),j=(c(38),c.p+"static/media/logo.765cce5d.png"),o=(c(39),c(0)),b=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"header-body",children:[Object(o.jsx)(l.b,{to:"/",className:"header-logo",children:Object(o.jsx)("img",{src:j,alt:""})}),Object(o.jsx)("nav",{className:"header-menu",children:Object(o.jsxs)("ul",{className:"menu-list",children:[Object(o.jsx)("li",{className:"menu-item",children:Object(o.jsx)(l.b,{to:"/log",className:"menu-link",children:"Log in"})}),Object(o.jsx)("li",{className:"menu-item",children:Object(o.jsx)(l.b,{to:"/auth",className:"menu-link",children:"Sign up"})})]})})]})})})},u=(c(49),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"footer-body",children:"Designed and built by Daria Grebenjuk"})})})}),d=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"home-container",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"home-content",children:[Object(o.jsxs)("h1",{className:"home-description",children:["We are a bicycle rental company in major cities of the world.",Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"Let us know about a bike theft."})]}),Object(o.jsxs)("div",{className:"home-bottom",children:[Object(o.jsx)("div",{className:"home-inform",children:Object(o.jsx)(l.b,{to:"/inform-client",children:Object(o.jsx)("button",{className:"inform-button button",type:"button",children:"Report Theft"})})}),Object(o.jsxs)("div",{className:"home-registration",children:[Object(o.jsx)("button",{className:"home-button button",type:"button",children:Object(o.jsx)(l.b,{to:"/log",children:"Log in"})}),Object(o.jsx)("button",{className:"home-button button",type:"button",children:Object(o.jsx)(l.b,{to:"/auth",children:"Sign up"})})]})]})]})})}),Object(o.jsx)(u,{})]})},h=c(8),O=c(2),x=c(4),m=c.n(x),p=(c(51),c(52),c(6)),f=c.n(p),v=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(O.a)(a,2),i=r[0],j=r[1],d=Object(n.useState)(""),x=Object(O.a)(d,2),p=x[0],v=x[1],N=Object(n.useState)("general"),g=Object(O.a)(N,2),y=g[0],k=g[1],S=Object(n.useState)(""),F=Object(O.a)(S,2),w=F[0],C=F[1],I=Object(n.useState)(""),_=Object(O.a)(I,2),A=_[0],B=_[1],z=Object(n.useState)(""),D=Object(O.a)(z,2),L=D[0],E=D[1],G=Object(n.useState)(!1),P=Object(O.a)(G,2),T=P[0],J=P[1],H=function(){var e=Object(h.a)(m.a.mark((function e(t,c,n,s,a,r,l){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://sf-final-project.herokuapp.com/api/public/report",{licenseNumber:t,ownerFullName:c,clientId:n,type:s,color:a,date:r,description:l});case 3:e.sent,J(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,c,n,s,a,r,l){return e.apply(this,arguments)}}(),M=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"inform-content",children:[Object(o.jsx)("h1",{className:"inform-title",children:"\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e \u043a\u0440\u0430\u0436\u0435"}),Object(o.jsxs)("div",{className:"inform-form form",children:[Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"licenseNumber",children:"\u041d\u043e\u043c\u0435\u0440 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0438:"}),Object(o.jsx)("input",{type:"text",id:"licenseNumber",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"ownerFullName",children:"\u0424\u0418\u041e \u043a\u043b\u0438\u0435\u043d\u0442\u0430:"}),Object(o.jsx)("input",{type:"text",id:"ownerFullName",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"clientId",children:"Client ID:"}),Object(o.jsx)("input",{type:"text",id:"clientId",value:p,onChange:function(e){return v(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"type",children:"\u0422\u0438\u043f \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u0430:"}),Object(o.jsxs)("select",{id:"type",onChange:function(e){return k(e.target.value)},children:[Object(o.jsx)("option",{value:"general",children:"General"}),Object(o.jsx)("option",{value:"sport",children:"Sport"})]})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"color",children:"\u0426\u0432\u0435\u0442 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u0430:"}),Object(o.jsx)("input",{type:"text",id:"color",value:w,onChange:function(e){return C(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"date",children:"\u0414\u0430\u0442\u0430 \u043a\u0440\u0430\u0436\u0438:"}),Object(o.jsx)("input",{type:"date",id:"date",value:A,onChange:function(e){return B(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"description",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439:"}),Object(o.jsx)("textarea",{id:"description",value:L,onChange:function(e){return E(e.target.value)}})]})]})]}),Object(o.jsx)("button",{className:"button inform-client-button",type:"submit",onClick:function(){return H(c,i,p,y,w,A,L)},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]});return Object(o.jsxs)("div",{className:"inform-client",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"inform-client-container container",children:T?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"auth-title",children:"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e \u043a\u0440\u0430\u0436\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e!"}),Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("button",{className:"success-button button",type:"button",children:"Ok"})})]}):M}),Object(o.jsx)(u,{})]})},N=(c(71),function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(O.a)(a,2),i=r[0],j=r[1],d=Object(n.useState)("general"),x=Object(O.a)(d,2),p=x[0],v=x[1],N=Object(n.useState)(""),g=Object(O.a)(N,2),y=g[0],k=g[1],S=Object(n.useState)(""),F=Object(O.a)(S,2),w=F[0],C=F[1],I=Object(n.useState)("officer1"),_=Object(O.a)(I,2),A=_[0],B=_[1],z=Object(n.useState)(""),D=Object(O.a)(z,2),L=D[0],E=D[1],G=Object(n.useState)(!1),P=Object(O.a)(G,2),T=P[0],J=P[1],H=function(){var e=Object(h.a)(m.a.mark((function e(t,c,n,s,a,r,l){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://sf-final-project.herokuapp.com/api/public/report",{licenseNumber:t,ownerFullName:c,type:n,color:s,date:a,officer:r,description:l});case 3:e.sent,J(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,c,n,s,a,r,l){return e.apply(this,arguments)}}(),M=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"inform-content",children:[Object(o.jsx)("h1",{className:"inform-title",children:"\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e \u043a\u0440\u0430\u0436\u0435"}),Object(o.jsxs)("div",{className:"inform-form form",children:[Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"licenseNumber",children:"\u041d\u043e\u043c\u0435\u0440 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0438:"}),Object(o.jsx)("input",{type:"text",id:"licenseNumber",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"ownerFullName",children:"\u0424\u0418\u041e \u043a\u043b\u0438\u0435\u043d\u0442\u0430:"}),Object(o.jsx)("input",{type:"text",id:"ownerFullName",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"type",children:"\u0422\u0438\u043f \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u0430:"}),Object(o.jsxs)("select",{id:"type",onChange:function(e){return v(e.target.value)},children:[Object(o.jsx)("option",{value:"general",children:"General"}),Object(o.jsx)("option",{value:"sport",children:"Sport"})]})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"color",children:"\u0426\u0432\u0435\u0442 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u0430:"}),Object(o.jsx)("input",{type:"text",id:"color",value:y,onChange:function(e){return k(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"date",children:"\u0414\u0430\u0442\u0430 \u043a\u0440\u0430\u0436\u0438:"}),Object(o.jsx)("input",{type:"date",id:"date",value:w,onChange:function(e){return C(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"officer",children:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a:"}),Object(o.jsxs)("select",{id:"officer",onChange:function(e){return B(e.target.value)},children:[Object(o.jsx)("option",{value:"officer1",children:"\u0427\u0435\u0431\u0443\u0440\u0430\u0448\u043a\u0430"}),Object(o.jsx)("option",{value:"officer2",children:"\u041a\u0440\u043e\u043a\u043e\u0434\u0438\u043b \u0413\u0435\u043d\u0430"})]})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"description",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439:"}),Object(o.jsx)("textarea",{id:"description",value:L,onChange:function(e){return E(e.target.value)}})]})]})]}),Object(o.jsx)("button",{className:"button inform-employee-button",type:"submit",onClick:function(){return H(c,i,p,y,w,A,L)},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]});return Object(o.jsxs)("div",{className:"inform-employee",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"inform-employee-container container",children:T?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"auth-title",children:"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e \u043a\u0440\u0430\u0436\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e!"}),Object(o.jsx)(l.b,{to:"/home",children:Object(o.jsx)("button",{className:"success-button button",type:"button",children:"Ok"})})]}):M}),Object(o.jsx)(u,{})]})}),g=(c(72),function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(O.a)(a,2),i=r[0],j=r[1],d=Object(n.useState)(""),x=Object(O.a)(d,2),p=x[0],v=x[1],N=Object(n.useState)(""),g=Object(O.a)(N,2),y=g[0],k=g[1],S=Object(n.useState)(""),F=Object(O.a)(S,2),w=F[0],C=F[1],I=Object(n.useState)(!1),_=Object(O.a)(I,2),A=_[0],B=_[1],z=function(){var e=Object(h.a)(m.a.mark((function e(t,c,n,s,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://sf-final-project.herokuapp.com/api/auth/sign_up",{email:t,password:c,firstName:n,lastName:s,clientId:a});case 3:e.sent,B(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,c,n,s,a){return e.apply(this,arguments)}}(),D=Object(o.jsxs)("div",{className:"auth-form form",children:[Object(o.jsx)("h1",{className:"auth-title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"email",children:"E-mail:"}),Object(o.jsx)("input",{type:"text",id:"email",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(o.jsx)("input",{type:"password",id:"password",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"firstName",children:"\u0418\u043c\u044f:"}),Object(o.jsx)("input",{type:"text",id:"firstName",value:p,onChange:function(e){return v(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"lastName",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"}),Object(o.jsx)("input",{type:"text",id:"lastName",value:y,onChange:function(e){return k(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{htmlFor:"clientId",children:"Client ID:"}),Object(o.jsx)("input",{type:"text",id:"clientId",value:w,onChange:function(e){return C(e.target.value)}})]}),Object(o.jsx)("button",{className:"button",type:"submit",onClick:function(){return z(c,i,p,y,w)},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]});return Object(o.jsxs)("div",{className:"authorization",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"auth-container",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"auth-content",children:A?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"auth-title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"}),Object(o.jsx)(l.b,{to:"/user-account",children:Object(o.jsx)("button",{className:"success-button button",type:"button",children:"Ok"})})]}):D})})}),Object(o.jsx)(u,{})]})}),y=(c(73),function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(O.a)(a,2),i=r[0],j=r[1],d=Object(n.useState)(!1),x=Object(O.a)(d,2),p=x[0],v=x[1],N=Object(n.useState)(""),g=Object(O.a)(N,2),y=g[0],k=g[1],S=function(){var e=Object(h.a)(m.a.mark((function e(t,c){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("https://sf-final-project.herokuapp.com/api/auth/sign_in",{email:t,password:c});case 3:n=e.sent,k(n.data.data.token),v(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c){return e.apply(this,arguments)}}(),F=Object(o.jsxs)("div",{className:"log-form form",children:[Object(o.jsx)("h1",{className:"log-title",children:"\u0412\u0445\u043e\u0434 \u0432 \u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{for:"login",children:"\u041b\u043e\u0433\u0438\u043d:"}),Object(o.jsx)("input",{type:"text",id:"login",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-column",children:[Object(o.jsx)("label",{for:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(o.jsx)("input",{type:"password",id:"password",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(o.jsx)("button",{className:"button",type:"submit",onClick:function(){S(c,i)},children:"\u0412\u043e\u0439\u0442\u0438"})]});return Object(o.jsxs)("div",{className:"log",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"log-container",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"log-content",children:p?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"log-title",children:"\u0412\u0445\u043e\u0434 \u043f\u0440\u043e\u0448\u0435\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"}),Object(o.jsx)(l.b,{to:{pathname:"/user-account",token:y},children:Object(o.jsx)("button",{className:"success-button button",type:"button",children:"Ok"})})]}):F})})}),Object(o.jsx)(u,{})]})}),k=(c(74),function(){var e=Object(i.f)().token;return Object(o.jsxs)("div",{className:"user-account",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"user-account-container",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"user-account-content",children:[Object(o.jsx)("h1",{className:"user-account-title",children:"\u0423\u0447\u0435\u0442\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c"}),Object(o.jsxs)("div",{className:"user-account-info",children:[Object(o.jsx)(l.b,{to:"/inform-employee",children:Object(o.jsx)("button",{className:"inform-button button",type:"button",children:"\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e \u043a\u0440\u0430\u0436\u0435"})}),Object(o.jsx)(l.b,{to:{pathname:"/stolen-bicycles",token:e},children:Object(o.jsx)("div",{className:"user-account-desc",children:Object(o.jsx)("p",{children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e \u043a\u0440\u0430\u0436\u0430\u0445"})})}),Object(o.jsx)(l.b,{to:"/responsible-employees",children:Object(o.jsx)("div",{className:"user-account-desc",children:Object(o.jsx)("p",{children:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"})})})]})]})})}),Object(o.jsx)(u,{})]})}),S=(c(75),c(76),function(){return Object(o.jsxs)("div",{className:"lds-roller",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})}),F=function(){var e=Object(i.f)().token,t=Object(n.useState)([]),c=Object(O.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!1),j=Object(O.a)(r,2),d=j[0],x=j[1],p=function(){var t=Object(h.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("https://sf-final-project.herokuapp.com/api/cases",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){a(e.data.data)}));case 3:t.sent,x(!0),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){p()}),[]);var v=Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:["\u0424\u0418\u041e \u043a\u043b\u0438\u0435\u043d\u0442\u0430","\u0422\u0438\u043f \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u0430","\u0426\u0432\u0435\u0442 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u0430","\u0414\u0430\u0442\u0430 \u043a\u0440\u0430\u0436\u0438"].map((function(e,t){return Object(o.jsx)("th",{children:e},t)}))})}),Object(o.jsx)("tbody",{children:s.map((function(t,c){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)(l.b,{to:{pathname:"/bicycle-details",token:e,postId:t._id},children:t.ownerFullName})}),Object(o.jsx)("td",{children:Object(o.jsx)(l.b,{to:{pathname:"/bicycle-details",token:e,postId:t._id},children:t.type})}),Object(o.jsx)("td",{children:Object(o.jsx)(l.b,{to:{pathname:"/bicycle-details",token:e,postId:t._id},children:t.color})}),Object(o.jsx)("td",{children:Object(o.jsx)(l.b,{to:{pathname:"/bicycle-details",token:e,postId:t._id},children:t.date})}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{type:"button",className:"button",onClick:function(){return function(t){try{f.a.delete("https://sf-final-project.herokuapp.com/api/cases/".concat(t._id),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){}))}catch(c){console.log(c)}}(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},c)}))})]});return Object(o.jsxs)("div",{className:"bicycles",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"bicycles-container",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"bicycles-content",children:[Object(o.jsx)(l.b,{className:"bicycles-back",to:"/user-account",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(o.jsx)("h1",{className:"bicycles-title",children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e \u043a\u0440\u0430\u0436\u0430\u0445"}),d?v:Object(o.jsx)(S,{})]})})}),Object(o.jsx)(u,{})]})},w=(c(77),function(){var e=Object(i.f)(),t=e.token,c=e.postId,s=Object(n.useState)({}),a=Object(O.a)(s,2),r=a[0],j=a[1],d=Object(n.useState)(!1),x=Object(O.a)(d,2),p=x[0],v=x[1],N=Object(n.useState)(!1),g=Object(O.a)(N,2),y=g[0],k=g[1],F=Object(n.useState)(""),w=Object(O.a)(F,2),C=w[0],I=w[1],_=function(){var e=Object(h.a)(m.a.mark((function e(c){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://sf-final-project.herokuapp.com/api/cases/".concat(c),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){j(e.data.data)}));case 3:e.sent,v(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){_(c)}),[]);var A=function(){var e=Object(h.a)(m.a.mark((function e(c){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.put("https://sf-final-project.herokuapp.com/api/cases/".concat(c),{ownerFullName:C},{headers:{Authorization:"Bearer ".concat(t)}});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),B=Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"text",value:C,onChange:function(e){return I(e.target.value)}})}),z=Object(o.jsx)("table",{children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[y?Object(o.jsxs)("div",{children:[B,Object(o.jsx)("button",{onClick:function(){A(c),k(!1),_(c),_(c)},children:"Send"})]}):Object(o.jsx)("td",{children:r.ownerFullName}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{type:"button",className:"button",onClick:function(){k((function(e){return!e}))},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:r.licenseNumber}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{type:"button",className:"button",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(o.jsx)("tr",{children:Object(o.jsx)("td",{children:r.clientId})}),Object(o.jsx)("tr",{children:Object(o.jsx)("td",{children:r.createdAt})}),Object(o.jsx)("tr",{children:Object(o.jsx)("td",{children:r.updatedAt})}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:r.type}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{type:"button",className:"button",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:r.color}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{type:"button",className:"button",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:r.date}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{type:"button",className:"button",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:r.officer}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{type:"button",className:"button",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:r.description}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{type:"button",className:"button",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:r.resolution}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{type:"button",className:"button",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})]})]})});return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"bicycles-container",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"bicycles-content",children:[Object(o.jsx)(l.b,{className:"bicycles-back",to:"/user-account",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(o.jsx)("h1",{className:"bicycles-title",children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e \u043a\u0440\u0430\u0436\u0435"}),p?z:Object(o.jsx)(S,{})]})})}),Object(o.jsx)(u,{})]})}),C=(c(78),function(){return Object(o.jsxs)("div",{className:"employees",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"employees-container",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"employees-content",children:[Object(o.jsx)(l.b,{className:"employees-back",to:"/user-account",children:"\u041d\u0430\u0437\u0430\u0434"}),Object(o.jsx)("h1",{className:"employees-title",children:"\u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"}),Object(o.jsxs)("table",{className:"employees-table",children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a"}),Object(o.jsx)("th",{children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u21161"}),Object(o.jsx)("td",{children:"\u0434\u0430\u043d\u043d\u044b\u0435"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u21162"}),Object(o.jsx)("td",{children:"\u0434\u0430\u043d\u043d\u044b\u0435"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u21163"}),Object(o.jsx)("td",{children:"\u0434\u0430\u043d\u043d\u044b\u0435"})]})]})]})})}),Object(o.jsx)(u,{})]})}),I=(c(79),function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{children:Object(o.jsx)("h1",{children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"})}),Object(o.jsx)(u,{})]})}),_=(c(80),function(){return Object(o.jsxs)("div",{className:"not-found",children:[Object(o.jsx)("h1",{children:"Click on the home page button"}),Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("button",{className:"button",children:"Home Page"})})]})}),A=function(){return Object(o.jsx)(l.a,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",exact:!0,component:d}),Object(o.jsx)(i.a,{path:"/inform-client",component:v}),Object(o.jsx)(i.a,{path:"/inform-employee",component:N}),Object(o.jsx)(i.a,{path:"/auth",component:g}),Object(o.jsx)(i.a,{path:"/log",component:y}),Object(o.jsx)(i.a,{path:"/user-account",component:k}),Object(o.jsx)(i.a,{path:"/stolen-bicycles",component:F}),Object(o.jsx)(i.a,{path:"/bicycle-details",component:w}),Object(o.jsx)(i.a,{path:"/responsible-employees",component:C}),Object(o.jsx)(i.a,{path:"/employee-details",component:I}),Object(o.jsx)(i.a,{path:"*",component:_})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))},z=Object(o.jsx)(A,{});r.a.render(Object(o.jsx)(s.a.StrictMode,{children:z}),document.getElementById("root")),B()}},[[81,1,2]]]);
//# sourceMappingURL=main.c18b276e.chunk.js.map