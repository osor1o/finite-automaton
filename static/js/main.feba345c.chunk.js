(this["webpackJsonpfinite-automaton"]=this["webpackJsonpfinite-automaton"]||[]).push([[0],{179:function(e,t,a){e.exports=a(323)},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=a(13),i=a(30),u=a(4),s=a(344),m=a(34),b={global:{colors:{brand:"#1B2430",focus:"#7159c1"},font:{family:"Roboto",size:"18px",height:"20px"}}},p=a(8),f={open:!1},d=a(21),E={list:["A","B","C"]},h={list:["0","1"]},g={items:[{s1:"A",i:"0",s2:"A"},{s1:"B",i:"1",s2:"A"},{s1:"A",i:"1",s2:"B"}]},v={list:[]},O=Object(i.b)({sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_SIDE_BAR":case"CLOSE_SIDE_BAR":return Object(p.a)(Object(p.a)({},e),{},{open:t.payload});default:return e}},state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_STATE":return e.list.includes(t.payload)?e:Object(p.a)(Object(p.a)({},e),{},{list:[].concat(Object(d.a)(e.list),[t.payload])});default:return e}},input:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INPUT":return e.list.includes(t.payload)?e:Object(p.a)(Object(p.a)({},e),{},{list:[].concat(Object(d.a)(e.list),[t.payload])});default:return e}},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TABLE":return Object(p.a)(Object(p.a)({},e),{},{items:[].concat(Object(d.a)(e.items),[t.payload])});default:return e}},execution:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXECUTION":return Object(p.a)(Object(p.a)({},e),{},{list:[].concat(Object(d.a)(e.list),[t.payload])});default:return e}}}),j=a(332),y=a(347),w=a(348),S=a(333),D=function(e){var t=e.test,a=e.children,n=e.notTest;return void 0===n||n?!!t&&a:a},A=function(e){var t=Object(u.b)();return r.a.createElement(j.a.Consumer,null,(function(a){return r.a.createElement(m.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e),r.a.createElement(y.a,{level:"3",margin:"none"},"Finite Automaton"),r.a.createElement(D,{test:"small"===a},r.a.createElement(w.a,{icon:r.a.createElement(S.a,null),onClick:function(){return t({type:"OPEN_SIDE_BAR",payload:!0})}})))}))},C=a(171),x=a.n(C),I=a(345),_=function(e){var t=e.height,a=e.width,n=Object(u.c)((function(e){return e.state.list})),l=Object(u.c)((function(e){return e.table.items})),c={nodes:n.map((function(e){return{id:e,label:e}})),edges:l.map((function(e){return{from:e.s1,to:e.s2,label:e.i}}))},o={nodes:{font:{size:25},color:{border:"#1B2430",background:"#fff",highlight:{border:"#7159c1",background:"#fff"}},shape:"circle"},edges:{},height:t,width:a};return r.a.createElement(m.a,null,r.a.createElement(x.a,{key:Object(I.a)(),graph:c,options:o}))},k=a(346),B=a(341),T=a(334),R=a(349),U=a(173),N=function(e){var t=e.children,a=e.title;return r.a.createElement(m.a,{flex:"grow",margin:{bottom:"medium"},gap:"medium"},r.a.createElement(D,{test:a},r.a.createElement(U.a,{size:"xlarge"},a)),t)},z=function(){var e=Object(u.c)((function(e){return e.input.list})),t=Object(u.b)(),a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],i=l[1];return r.a.createElement("form",{onSubmit:function(e){var a;e.preventDefault(),i(""),t(""!==(a=c)?{type:"ADD_INPUT",payload:a.toUpperCase()}:{type:null})}},r.a.createElement(N,{title:"Inputs"},r.a.createElement(T.a,{data:e}),r.a.createElement(R.a,{placeholder:"Input",value:c,onChange:function(e){var t=e.target;return i(t.value)}}),r.a.createElement(w.a,{type:"submit",label:"+",primary:!0})))},L=function(){var e=Object(u.c)((function(e){return e.state.list})),t=Object(u.b)(),a=Object(n.useState)(""),l=Object(o.a)(a,2),c=l[0],i=l[1];return r.a.createElement("form",{onSubmit:function(e){var a;e.preventDefault(),i(""),t(""!==(a=c)?{type:"ADD_STATE",payload:a.toUpperCase()}:{type:null})}},r.a.createElement(N,{title:"States"},r.a.createElement(T.a,{data:e}),r.a.createElement(R.a,{placeholder:"State",value:c,onChange:function(e){var t=e.target;return i(t.value)}}),r.a.createElement(w.a,{type:"submit",label:"+",primary:!0})))},P=a(336),W=a(337),F=a(338),J=a(339),X=a(340),H=a(342),$=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.table.items})),a=Object(u.c)((function(e){return e.state.list})),l=Object(u.c)((function(e){return e.input.list})),c=Object(n.useState)(""),i=Object(o.a)(c,2),s=i[0],m=i[1],b=Object(n.useState)(""),p=Object(o.a)(b,2),f=p[0],d=p[1],E=Object(n.useState)(""),h=Object(o.a)(E,2),g=h[0],v=h[1];return r.a.createElement("form",{onSubmit:function(t){var a;t.preventDefault(),e(""!==(a={s1:s,i:f,s2:g}).s1&&""!==a.i&&""!==a.s2?{type:"ADD_TABLE",payload:a}:{type:null}),m(""),d(""),v("")}},r.a.createElement(N,{title:"Table"},r.a.createElement(P.a,null,r.a.createElement(W.a,null,r.a.createElement(F.a,null,r.a.createElement(J.a,{scope:"col",border:"bottom"},"S1"),r.a.createElement(J.a,{scope:"col",border:"bottom"},"Input"),r.a.createElement(J.a,{scope:"col",border:"bottom"},"S2"))),r.a.createElement(X.a,null,t.map((function(e,t){return r.a.createElement(F.a,{key:t},r.a.createElement(J.a,{scope:"row"},e.s1),r.a.createElement(J.a,{scope:"row"},e.i),r.a.createElement(J.a,{scope:"row"},e.s2))})))),r.a.createElement(H.a,{options:a,placeholder:"S1",value:s,onChange:function(e){var t=e.option;return m(t)}}),r.a.createElement(H.a,{options:l,placeholder:"Input",value:f,onChange:function(e){var t=e.option;return d(t)}}),r.a.createElement(H.a,{options:a,placeholder:"S2",value:g,onChange:function(e){var t=e.option;return v(t)}}),r.a.createElement(w.a,{type:"submit",label:"+",primary:!0})))},q=function(){var e=Object(u.c)((function(e){return e.input.list})),t=Object(u.c)((function(e){return e.execution.list})),a=Object(u.b)(),l=Object(n.useState)(""),c=Object(o.a)(l,2),i=c[0],s=c[1];return r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),a(""!==(t=i)?{type:"ADD_EXECUTION",payload:t.toUpperCase()}:{type:null}),s("")}},r.a.createElement(N,{title:"Execution"},r.a.createElement(T.a,{data:t}),r.a.createElement(H.a,{options:e,placeholder:"Input",value:i,onChange:function(e){var t=e.option;return s(t)}}),r.a.createElement(w.a,{type:"submit",label:"+",primary:!0})))},G=function(){var e=Object(u.c)((function(e){return e.state.list})),t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(l)}},r.a.createElement(N,{title:"Start"},r.a.createElement(H.a,{options:e,placeholder:"Initial State",value:l,onChange:function(e){var t=e.option;return c(t)}}),r.a.createElement(w.a,{type:"submit",label:"Run",primary:!0}),r.a.createElement(w.a,{label:"Clear"})))},K=function(){return r.a.createElement(m.a,{fill:!0,pad:"large",overflow:"auto"},r.a.createElement(L,null),r.a.createElement(z,null),r.a.createElement($,null),r.a.createElement(q,null),r.a.createElement(G,null))},M=function(){var e=Object(u.c)((function(e){return e.sidebar.open})),t=Object(u.b)();return r.a.createElement(j.a.Consumer,null,(function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{test:"small"!==a},r.a.createElement(m.a,{flex:!0,background:"light-2",align:"center",justify:"center",width:{max:"350px"}},r.a.createElement(K,null))),r.a.createElement(D,{test:e&&"small"===a},r.a.createElement(k.a,null,r.a.createElement(m.a,{background:"light-2",tag:"header",justify:"end",align:"center",direction:"row"},r.a.createElement(w.a,{icon:r.a.createElement(B.a,null),onClick:function(){return t({type:"CLOSE_SIDE_BAR",payload:!1})}})),r.a.createElement(m.a,{fill:!0,background:"light-2",align:"center",justify:"center"},r.a.createElement(K,null)))))}))},Q=Object(i.c)(O),V=function(){var e=Object(n.useRef)(null),t=Object(n.useState)({width:"600px",height:"600px"}),a=Object(o.a)(t,2),l=a[0],c=a[1];return Object(n.useLayoutEffect)((function(){e.current&&c({width:"".concat(e.current.offsetWidth,"px"),height:"".concat(e.current.offsetHeight,"px")})}),[e]),r.a.createElement(u.a,{store:Q},r.a.createElement(s.a,{theme:b,full:!0},r.a.createElement(m.a,{fill:!0},r.a.createElement(A,null),r.a.createElement(m.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},r.a.createElement(M,null),r.a.createElement(m.a,{flex:!0,align:"center",justify:"center",ref:e,overflow:"hidden"},r.a.createElement(_,{width:l.width,height:l.height}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[179,1,2]]]);
//# sourceMappingURL=main.feba345c.chunk.js.map