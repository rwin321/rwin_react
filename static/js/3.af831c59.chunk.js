(this["webpackJsonpreact-rwin-1"]=this["webpackJsonpreact-rwin-1"]||[]).push([[3],{361:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(41),o=a(42),s=a(43),l=a(44),r=a(0),i=a.n(r),c=a(15),u=a(24),p=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(l.a)(r,t);var a=Object(s.a)(r);function r(){return Object(n.a)(this,r),a.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(c.a,{to:"/login"})}}]),r}(i.a.Component);return Object(u.b)(p)(t)}},363:function(e,t,a){e.exports={profileInfoBlock:"ProfileInfo_profileInfoBlock__gNs5q",profileDescp:"ProfileInfo_profileDescp__28oxQ",contactsMore:"ProfileInfo_contactsMore__1CEvN",photoCamera:"ProfileInfo_photoCamera__3kKkS",contact:"ProfileInfo_contact__2d2rl",inputFile:"ProfileInfo_inputFile__2orLt",profileStatus:"ProfileInfo_profileStatus__1AlUf",profileDataEditBtn:"ProfileInfo_profileDataEditBtn__1_Qsn",uploadPhoto:"ProfileInfo_uploadPhoto__27I9i"}},365:function(e,t,a){e.exports={profileStatus:"ProfileStatusWithHooks_profileStatus__2VHT9",span:"ProfileStatusWithHooks_span__1T-d_",input:"ProfileStatusWithHooks_input__2t62G"}},366:function(e,t,a){e.exports={item:"Post_item__9zG6y",likesCont:"Post_likesCont__3GHPU",likes:"Post_likes__37z5f",deleteBtn:"Post_deleteBtn__IPcGY",likeBtn:"Post_likeBtn__168KF",postContent:"Post_postContent__1_2iK"}},367:function(e,t,a){e.exports=a.p+"static/media/postLogo.22e0e6fa.jpg"},370:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__25v-1",posts:"MyPosts_posts__29tyG",addPostBtn:"MyPosts_addPostBtn__3T73O Post_deleteBtn__IPcGY"}},373:function(e,t,a){"use strict";a.r(t);var n=a(41),o=a(42),s=a(43),l=a(44),r=a(0),i=a.n(r),c=a(120),u=a(114),p=a(363),m=a.n(p),f=a(66),d=a(365),E=a.n(d),b=a(55),h=a(83),v=a(113),_=a(157),P=Object(h.a)(20),k=Object(_.a)({form:"status"})((function(e){var t=e.onStatusChange,a=e.status,n=e.deactivateMode;return i.a.createElement("form",null,i.a.createElement("div",null,i.a.createElement(v.a,{onChange:t,autoFocus:!0,value:a,validate:P,name:"status",onBlur:n,component:b.a})))})),O=function(e){var t=Object(r.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(e.status),l=Object(c.a)(s,2),u=l[0],p=l[1];Object(r.useEffect)((function(){p(e.status)}),[e.status]);return i.a.createElement("div",{className:E.a.profileStatus},!n&&i.a.createElement("div",{className:E.a.span},i.a.createElement("b",null,"Status"),":",i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"---------")),n&&i.a.createElement("div",{className:E.a.input},i.a.createElement(k,{onStatusChange:function(e){p(e.currentTarget.value)},deactivateMode:function(){o(!1),e.updateUserStatus(u)},status:u})))},g=a(57),j=a.n(g),S=a(67),y=a.n(S),N=Object(_.a)({form:"edit-profileData"})((function(e){var t=e.profile,a=e.error,n=e.handleSubmit;return i.a.createElement("form",{onSubmit:n},i.a.createElement("div",null,i.a.createElement("button",{className:m.a.profileDataEditBtn},"save")),a&&i.a.createElement("div",{className:y.a.formSummaryError},a),i.a.createElement("b",null,"Full Name"),":",Object(b.c)("Full name","fullName",[],b.a),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(b.c)("About me","aboutMe",[],b.a)),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),":",Object(b.c)("","lookingForAJob",[],b.a,{type:"checkbox"})),i.a.createElement("div",null,i.a.createElement("b",null,"My professional skills"),":",Object(b.c)("My professional skills","lookingForAJobDescription",[],b.b)),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return i.a.createElement("div",{key:e,className:m.a.contact}," ",Object(b.c)(e,"contacts."+e,[],b.a)," ")}))))})),C=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return i.a.createElement("div",{className:m.a.profileDescp},i.a.createElement("div",null," ",i.a.createElement("b",null,"Full Name"),":  ",t.fullName," "),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"already working"),t.lookingForAJob&&i.a.createElement("div",null,i.a.createElement("b",null,"skills:"),"  ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),i.a.createElement("button",null)," ",Object.keys(t.contacts).map((function(e){return i.a.createElement(I,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))),i.a.createElement("div",null,a&&i.a.createElement("button",{className:m.a.profileDataEditBtn,onClick:n}," edit ")))},I=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:m.a.contact},i.a.createElement("b",null,t),": ",a," ")},B=function(e){var t=e.profile,a=Object(u.a)(e,["profile"]),n=Object(r.useState)(!1),o=Object(c.a)(n,2),s=o[0],l=o[1];return t?i.a.createElement("div",{className:m.a.profileInfoBlock},i.a.createElement("img",{src:t.photos.large||j.a,className:m.a.photoCamera}),a.isOwner&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&a.savePhoto(e.target.files[0])},className:m.a.uploadPhoto}),i.a.createElement("div",{className:m.a.profileStatus},i.a.createElement(O,{status:a.status,updateUserStatus:a.updateUserStatus})),s?i.a.createElement(N,{initialValues:t,profile:t,onSubmit:function(e){a.saveProfile(e).then((function(){l(!1)}))}}):i.a.createElement(C,{profile:t,isOwner:a.isOwner,goToEditMode:function(){l(!0)}})):i.a.createElement(f.a,null)},U=a(121),M=a(366),A=a.n(M),D=a(367),w=a.n(D),F=a(374),T=a(369),x=a.n(T),J=a(368),G=a.n(J),H=function(e){var t=Object(r.useState)(0),a=Object(c.a)(t,2),n=a[0],o=a[1];return i.a.createElement("div",{className:A.a.item},i.a.createElement("img",{src:w.a}),i.a.createElement("div",{className:A.a.postContent},e.message),i.a.createElement("div",{className:A.a.likesCont},"likes: ",n," "),i.a.createElement("button",{className:A.a.likeBtn,onClick:function(){for(var e=n;e<1;e++)o(e+1)}},i.a.createElement(G.a,null)),i.a.createElement(F.a,null,i.a.createElement(x.a,{className:A.a.deleteBtn,onClick:function(){e.deletePost(e.post.id)}})))},z=a(370),L=a.n(z),V=Object(h.a)(40),K=Object(_.a)({form:"addPost"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(v.a,{placeholder:"type your post...",validate:V,name:"postText",component:b.b})),i.a.createElement("div",null,i.a.createElement("button",{className:L.a.addPostBtn},"add post")))})),W=i.a.memo((function(e){var t=e.posts.map((function(t){return i.a.createElement(H,{deletePost:e.deletePost,key:t.id,message:t.message,likeCount:t.likesCount,post:t})}));return i.a.createElement("div",{className:L.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(K,{onSubmit:function(t){e.addPost(t.postText)}}),i.a.createElement("div",{className:L.a.posts},t))})),Q=a(24),Y=Object(Q.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:U.a,deletePost:U.c})(W),q=function(e){return i.a.createElement("div",null,i.a.createElement(B,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,saveProfile:e.saveProfile}),function(){if(null!=e.profile)return i.a.createElement(Y,null)}())},R=a(15),X=a(361),Z=a(12),$=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(q,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),a}(i.a.Component);t.default=Object(Z.d)(Object(Q.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:U.d,getUserStatus:U.e,updateUserStatus:U.h,savePhoto:U.f,saveProfile:U.g}),R.g,X.a)($)}}]);
//# sourceMappingURL=3.af831c59.chunk.js.map