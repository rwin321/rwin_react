(this["webpackJsonpreact-rwin-1"]=this["webpackJsonpreact-rwin-1"]||[]).push([[3],{367:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(39),o=a(40),s=a(41),r=a(42),l=a(0),i=a.n(l),c=a(18),u=a(26),p=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(r.a)(l,t);var a=Object(s.a)(l);function l(){return Object(n.a)(this,l),a.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(c.a,{to:"/login"})}}]),l}(i.a.Component);return Object(u.b)(p)(t)}},368:function(e,t,a){e.exports={profileInfoBlock:"ProfileInfo_profileInfoBlock__gNs5q",profileDescp:"ProfileInfo_profileDescp__28oxQ",photoCamera:"ProfileInfo_photoCamera__3kKkS",contact:"ProfileInfo_contact__2d2rl",inputFile:"ProfileInfo_inputFile__2orLt",profileStatus:"ProfileInfo_profileStatus__1AlUf",profileDataEditBtn:"ProfileInfo_profileDataEditBtn__1_Qsn",uploadPhoto:"ProfileInfo_uploadPhoto__27I9i"}},369:function(e,t,a){e.exports={profileStatus:"ProfileStatusWithHooks_profileStatus__2VHT9",span:"ProfileStatusWithHooks_span__1T-d_",input:"ProfileStatusWithHooks_input__2t62G"}},370:function(e,t,a){e.exports={item:"Post_item__9zG6y",likesCont:"Post_likesCont__3GHPU",likes:"Post_likes__37z5f",deleteBtn:"Post_deleteBtn__IPcGY",likeBtn:"Post_likeBtn__168KF"}},371:function(e,t,a){e.exports=a.p+"static/media/postLogo.22e0e6fa.jpg"},372:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__25v-1",posts:"MyPosts_posts__29tyG",addPostBtn:"MyPosts_addPostBtn__3T73O Post_deleteBtn__IPcGY"}},373:function(e,t,a){"use strict";a.r(t);var n=a(39),o=a(40),s=a(41),r=a(42),l=a(0),i=a.n(l),c=a(80),u=a(114),p=a(368),m=a.n(p),f=a(58),d=a(369),b=a.n(d),E=a(57),h=a(89),v=a(113),_=a(159),P=Object(h.a)(20),k=Object(_.a)({form:"status"})((function(e){var t=e.onStatusChange,a=e.status,n=e.deactivateMode;return i.a.createElement("form",null,i.a.createElement("div",null,i.a.createElement(v.a,{onChange:t,autoFocus:!0,value:a,validate:P,name:"status",onBlur:n,component:E.a})))})),O=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],s=Object(l.useState)(e.status),r=Object(c.a)(s,2),u=r[0],p=r[1];Object(l.useEffect)((function(){p(e.status)}),[e.status]);return i.a.createElement("div",{className:b.a.profileStatus},!n&&i.a.createElement("div",{className:b.a.span},i.a.createElement("b",null,"Status"),":",i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"---------")),n&&i.a.createElement("div",{className:b.a.input},i.a.createElement(k,{onStatusChange:function(e){p(e.currentTarget.value)},deactivateMode:function(){o(!1),e.updateUserStatus(u)},status:u})))},g=a(59),j=a.n(g),S=a(70),y=a.n(S),N=Object(_.a)({form:"edit-profileData"})((function(e){var t=e.profile,a=e.error,n=e.handleSubmit;return i.a.createElement("form",{onSubmit:n},i.a.createElement("div",null,i.a.createElement("button",{className:m.a.profileDataEditBtn},"save")),a&&i.a.createElement("div",{className:y.a.formSummaryError},a),i.a.createElement("b",null,"Full Name"),":",Object(E.c)("Full name","fullName",[],E.a),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(E.c)("About me","aboutMe",[],E.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),":",Object(E.c)("","lookingForAJob",[],E.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(E.c)("My professional skills","lookingForAJobDescription",[],E.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return i.a.createElement("div",{key:e,className:m.a.contact}," ",Object(E.c)(e,"contacts."+e,[],E.a)," ")}))))})),B=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",{className:m.a.profileDescp},i.a.createElement("div",null," ",i.a.createElement("b",null,"Full Name"),":  ",t.fullName," "),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"already working"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"skills:"),"  ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return i.a.createElement(I,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))),i.a.createElement("div",null,a&&i.a.createElement("button",{className:m.a.profileDataEditBtn,onClick:n}," edit ")))},I=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:m.a.contact},i.a.createElement("b",null,t),": ",a," ")},C=function(e){var t=e.profile,a=Object(u.a)(e,["profile"]),n=Object(l.useState)(!1),o=Object(c.a)(n,2),s=o[0],r=o[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",{className:m.a.profileInfoBlock},i.a.createElement("img",{src:t.photos.large||j.a,className:m.a.photoCamera}),a.isOwner&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&a.savePhoto(e.target.files[0])},className:m.a.uploadPhoto}),i.a.createElement("div",{className:m.a.profileStatus},i.a.createElement(O,{status:a.status,updateUserStatus:a.updateUserStatus})),s?i.a.createElement(N,{initialValues:t,profile:t,onSubmit:function(e){a.saveProfile(e).then((function(){r(!1)}))}}):i.a.createElement(B,{profile:t,isOwner:a.isOwner,goToEditMode:function(){r(!0)}}))},U=a(120),A=a(370),D=a.n(A),M=a(371),w=a.n(M),F=a(362),T=a(156),x=a.n(T),J=function(e){var t=Object(l.useState)(0),a=Object(c.a)(t,2),n=a[0],o=a[1];return i.a.createElement("div",{className:D.a.item},i.a.createElement("img",{src:w.a}),i.a.createElement("span",null,"  ",e.message," "),i.a.createElement("span",{className:D.a.likesCont},"likes: ",n," "),i.a.createElement("button",{className:D.a.likeBtn,onClick:function(){for(var e=n;e<1;e++)o(e+1)}},"like"),i.a.createElement(F.a,null,i.a.createElement(x.a,{className:D.a.deleteBtn,onClick:function(){e.deletePost(e.post.id)}})))},G=a(372),H=a.n(G),z=Object(h.a)(40),L=Object(_.a)({form:"addPost"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(v.a,{placeholder:"type your post...",validate:z,name:"postText",component:E.b})),i.a.createElement("div",null,i.a.createElement("button",{className:H.a.addPostBtn},"add post")))})),V=i.a.memo((function(e){var t=e.posts.map((function(t){return i.a.createElement(J,{deletePost:e.deletePost,key:t.id,message:t.message,likeCount:t.likesCount,post:t})}));return i.a.createElement("div",{className:H.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(L,{onSubmit:function(t){e.addPost(t.postText)}}),i.a.createElement("div",{className:H.a.posts},t))})),W=a(26),K=Object(W.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:U.a,deletePost:U.c})(V),Q=function(e){return i.a.createElement("div",null,i.a.createElement(C,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,saveProfile:e.saveProfile}),function(){if(null!=e.profile)return i.a.createElement(K,null)}())},Y=a(18),q=a(367),R=a(12),X=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(Q,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),a}(i.a.Component);t.default=Object(R.d)(Object(W.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:U.d,getUserStatus:U.e,updateUserStatus:U.h,savePhoto:U.f,saveProfile:U.g}),Y.g,q.a)(X)}}]);
//# sourceMappingURL=3.2ec5bc2d.chunk.js.map