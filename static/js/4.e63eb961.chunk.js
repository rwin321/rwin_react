(this["webpackJsonpreact-rwin-1"]=this["webpackJsonpreact-rwin-1"]||[]).push([[4],{296:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1JLBa",dialogsItems:"Dialogs_dialogsItems__84ZcQ",dialog:"Dialogs_dialog__T3J_V",active:"Dialogs_active__3XSRk",itemName:"Dialogs_itemName__QxpN-",messagesContent:"Dialogs_messagesContent__3P9w5",sendMessageBtn:"Dialogs_sendMessageBtn__37PLd Post_deleteBtn__IPcGY"}},297:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(34),s=t(35),i=t(37),r=t(38),o=t(0),c=t.n(o),m=t(11),l=t(18),d=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var a=function(a){Object(r.a)(o,a);var t=Object(i.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(m.a,{to:"/login"})}}]),o}(c.a.Component);return Object(l.b)(d)(a)}},304:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(131),r=t(296),o=t.n(r),c=t(15),m=t(102),l=t.n(m),d=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:l()(o.a.dialog,o.a.active)},s.a.createElement(c.b,{to:a},s.a.createElement("img",{src:"https://miro.medium.com/fit/c/256/256/2*xhm2q3S8_kRKnrHumo3Rvg.png",alt:"image broken :("}),s.a.createElement("span",{className:o.a.itemName},e.name)))},g=function(e){return s.a.createElement("div",{className:o.a.messagesContent},e.message)},u=t(92),_=t(132),b=t(41),f=t(70),p=Object(f.a)(100),v=Object(_.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(u.a,{component:b.b,validate:p,name:"newMessageBody",placeholder:"Enter new message"})),s.a.createElement("div",null,s.a.createElement("button",{className:o.a.sendMessageBtn},"Send")))})),E=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(d,{name:e.name,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(g,{message:e.message,id:e.id})}));return s.a.createElement("div",{className:o.a.dialogs},s.a.createElement("div",{className:o.a.dialogsItems},t),s.a.createElement("div",{className:o.a.messages},n,s.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})))},h=t(18),N=t(297),j=t(8);a.default=Object(j.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:i.b}),N.a)(E)}}]);
//# sourceMappingURL=4.e63eb961.chunk.js.map