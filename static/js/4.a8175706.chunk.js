(this["webpackJsonpreact-rwin-1"]=this["webpackJsonpreact-rwin-1"]||[]).push([[4],{297:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2_q0H",dialogsItems:"Dialogs_dialogsItems__15Euw",dialog:"Dialogs_dialog__jrvvh",active:"Dialogs_active__2fdKX",logoImg:"Dialogs_logoImg__2EL3O",messages:"Dialogs_messages__1OjnU",message:"Dialogs_message__3jTDq"}},302:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),l=t(129),i=t(297),m=t.n(i),o=t(16),c=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:m.a.dialog+" "+m.a.active},n.a.createElement("span",null,n.a.createElement("img",{className:m.a.logoImg,src:"https://miro.medium.com/fit/c/256/256/2*xhm2q3S8_kRKnrHumo3Rvg.png",alt:"ervin_just_win"})),n.a.createElement("span",null,n.a.createElement(o.b,{to:a},e.name)))},r=function(e){return n.a.createElement("div",{className:m.a.messagesContent},n.a.createElement("div",{className:m.a.message},e.message),n.a.createElement("div",null))},g=t(89),d=t(130),u=t(41),_=t(67),E=Object(_.a)(100),v=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(g.a,{component:u.b,validate:[_.b,E],name:"newMessageBody",placeholder:"Enter new message"})),n.a.createElement("div",null,n.a.createElement("button",null,"Send")))})),b=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return n.a.createElement(c,{name:e.name,id:e.id})})),s=a.messages.map((function(e){return n.a.createElement(r,{message:e.message,id:e.id})}));return n.a.createElement("div",{className:m.a.dialogs},n.a.createElement("div",{className:m.a.dialogsItems},t),n.a.createElement("div",{className:m.a.messages},n.a.createElement("div",null,s)),n.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},f=t(15),p=t(141),w=t(8);a.default=Object(w.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendMessage:l.b}),p.a)(b)}}]);
//# sourceMappingURL=4.a8175706.chunk.js.map