(this["webpackJsonplogivations-test-project"]=this["webpackJsonplogivations-test-project"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n.n(c),s=n(4),a=(n(21),n(22),n(2)),o=function(e){var t=e.expense;return Object(r.jsx)("div",{children:t.title})},u=Object(a.b)((function(e){return e}))((function(e){var t=e.expenses;return t.length?Object(r.jsx)("div",{children:t.map((function(e){return Object(r.jsx)(o,{expense:e},e.id)}))}):Object(r.jsx)("p",{children:"There are no any expenses yet."})})),l=n(11),j=n(12),b=n(15),p=n(14),O="CREATE_ITEM";var d=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={title:""},e.submitHandler=function(t){t.preventDefault();var n=e.state.title;if(n.trim()){var r={title:n,id:Date.now().toString()};e.props.createItem(r),e.setState({title:""})}},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(r.jsx)("label",{htmlFor:"text",children:"Enter your expense"}),Object(r.jsx)("input",{className:"expenseInput",type:"text",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}}),Object(r.jsx)("button",{type:"submit",children:"Add expense"})]})}}]),n}(c.Component),h={createItem:function(e){return{type:O,payload:e}}},x=Object(a.b)(null,h)(d);var v=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(x,{}),Object(r.jsx)(u,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))},g=n(3),m=n(13),y=n(9),E={expenses:[]},_=Object(g.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(y.a)(Object(y.a)({},e),{},{expenses:[].concat(Object(m.a)(e.expenses),[t.payload])});default:return e}}),Object(g.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),S=Object(r.jsx)(a.a,{store:_,children:Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(v,{})})});Object(s.render)(S,document.getElementById("root")),f()}},[[29,1,2]]]);
//# sourceMappingURL=main.7d64fd6d.chunk.js.map