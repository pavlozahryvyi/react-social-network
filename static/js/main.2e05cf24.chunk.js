(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports={nav:"Navbar_nav__2z6qM",item:"Navbar_item__1M2r1",active:"Navbar_active__1Cvlk"}},,,,,,function(e,a,t){e.exports={item:"Post_item__uylRa",message:"Post_message__1cJ9b",postInfo:"Post_postInfo__3ntmH",postLikes:"Post_postLikes__2wWuv"}},function(e,a,t){e.exports={postsBlock:"MyPosts_postsBlock__2GYzi"}},function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1Z_vz",dialogsBlock:"Dialogs_dialogsBlock__3Rzxf",messagesBlock:"Dialogs_messagesBlock__1IRJT"}},,,,function(e,a,t){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3J8Gf",profileImage:"ProfileInfo_profileImage__UpdgS"}},function(e,a,t){e.exports={active:"DialogItem_active__oFyRn",dialog:"DialogItem_dialog__27tK4"}},,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/logo.b970052f.png"},function(e,a,t){e.exports={header:"Header_header__2XvnI"}},,,function(e,a,t){},function(e,a,t){e.exports={message:"Message_message__1qpfU"}},function(e,a,t){e.exports={newsBlock:"News_newsBlock__1mQ6Q"}},function(e,a,t){e.exports={musicBlock:"Music_musicBlock__Z7jMI"}},function(e,a,t){e.exports={settingsBlock:"Settings_settingsBlock__i-W_A"}},function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n);t(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(21),l=t.n(o),c=t(5),i=t(7),r=(t(36),t(22)),m=t.n(r),d=t(23),u=t.n(d),p=function(){return s.a.createElement("header",{className:u.a.header},s.a.createElement("img",{src:m.a}))},g=t(4),f=t.n(g),v=function(){return s.a.createElement("nav",{className:f.a.nav},s.a.createElement("div",{className:f.a.item},s.a.createElement(c.b,{to:"/profile",activeClassName:f.a.active},"Profile")),s.a.createElement("div",{className:f.a.item},s.a.createElement(c.b,{to:"/dialogs",activeClassName:f.a.active},"Messages")),s.a.createElement("div",{className:f.a.item},s.a.createElement(c.b,{to:"/news",activeClassName:f.a.active},"News")),s.a.createElement("div",{className:f.a.item},s.a.createElement(c.b,{to:"/music",activeClassName:f.a.active},"Music")),s.a.createElement("div",{className:f.a.item},s.a.createElement(c.b,{to:"/settings",activeClassName:f.a.active},"Settings")))},E=t(26),_=t.n(E),N=t(11),w=t.n(N),P=t(10),k=t.n(P),x=function(e){return s.a.createElement("div",{className:k.a.item},s.a.createElement("div",{className:k.a.postInfo},s.a.createElement("img",{src:"https://static.turbosquid.com/Preview/2019/02/12__04_46_30/cirlce_43.jpgF75B8343-6B7D-4C48-9F15-26C555FCB2DDZoom.jpg",alt:""}),s.a.createElement("div",{className:k.a.postLikes},s.a.createElement("span",null,"Like ",e.likes))),s.a.createElement("div",{className:k.a.message},e.message))},h=function(e){var a=s.a.createRef();return s.a.createElement("div",{className:w.a.newPostBlock},s.a.createElement("h3",null,"New post"),s.a.createElement("p",null,"Welcome! You can add a new post now!"),s.a.createElement("p",null,'Click "Add post" button or write your text and click the button to add a new post',s.a.createElement("span",null," *CSS will be soon")," ;)"),s.a.createElement("div",null,s.a.createElement("textarea",{onChange:function(){var t=a.current.value;console.log(t),e.updateNewPostText(t)},ref:a,value:e.newPostText})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.addPost()}},"Add post")))},B=function(e){var a=e.postData.map((function(e){return s.a.createElement(x,{message:e.message,likes:e.likesCount})}));return s.a.createElement("div",{className:w.a.postsBlock},s.a.createElement(h,{addPost:e.addPost,updateNewPostText:e.updateNewPostText,newPostText:e.newPostText}),s.a.createElement("div",null,s.a.createElement("h3",null,"My posts"),a))},D=t(16),C=t.n(D),T=function(e){return s.a.createElement("div",{className:"profileInfo"},s.a.createElement("div",{className:C.a.profileImage},s.a.createElement("img",{src:"https://image.winudf.com/v2/image/Y29tLmJlYWNoLmJhbGliZWFjaHdhbGxwYXBlcl9zY3JlZW5fMF8xNTMyOTc5NTE3XzA0NQ/screen-0.jpg?fakeurl=1&type=.jpg",alt:""})),s.a.createElement("div",{className:C.a.descriptionBlock},"ava + description"))},b=function(e){return console.log("---props in Profile ",e),s.a.createElement("div",{className:_.a.ProfileContent},s.a.createElement(T,null),s.a.createElement(B,{postData:e.postData,addPost:e.addPost,newPostText:e.newPostText,updateNewPostText:e.updateNewPostText}))},I=t(12),y=t.n(I),O=t(27),M=t.n(O),W=function(e){return s.a.createElement("div",{className:M.a.message},e.message)},S=t(17),J=t.n(S),A=function(e){console.log("--- DialogItem props ",e);var a="/dialogs/".concat(e.id);return s.a.createElement("div",{className:J.a.dialog},s.a.createElement(c.b,{activeClassName:J.a.active,to:a},e.name))},L=function(e){console.log("--- Dialogs props ",e);var a=e.dialogData,t=e.messagesData,n=a.map((function(e){return s.a.createElement(A,{name:e.name,id:e.id})})),o=t.map((function(e){return s.a.createElement(W,{message:e.message})})),l=s.a.createRef();return s.a.createElement("div",{className:y.a.dialogs},s.a.createElement("div",{className:y.a.dialogsBlock},n),s.a.createElement("div",{className:y.a.messagesBlock},o,s.a.createElement("textarea",{ref:l}),s.a.createElement("button",{onClick:function(){var e=l.current.value;alert(e)}},"Add")))},R=t(28),Y=t.n(R),j=function(){return s.a.createElement("div",{className:Y.a.newsBlock},"News")},z=t(29),F=t.n(z),H=function(e){return s.a.createElement("div",{className:F.a.musicBlock},"Music")},Z=t(30),G=t.n(Z),q=function(){return s.a.createElement("div",{className:G.a.settingsBlock},"Settings")};var Q=function(e){return console.log("--- App props ",e),s.a.createElement(c.a,null,s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(p,null),s.a.createElement(v,null),s.a.createElement("div",{className:"app-wrapper-block"},s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(i.a,{path:"/profile",render:function(){return s.a.createElement(b,{postData:e.state.profilePage.postData,addPost:e.addPost,newPostText:e.state.profilePage.newPostText,updateNewPostText:e.updateNewPostText})}}),s.a.createElement(i.a,{path:"/dialogs",render:function(){return s.a.createElement(L,{dialogData:e.state.dialogsPage.dialogData,messagesData:e.state.dialogsPage.messagesData})}}),s.a.createElement(i.a,{path:"/news",component:j}),s.a.createElement(i.a,{path:"/music",component:H}),s.a.createElement(i.a,{path:"/settings",component:q})))))},X={profilePage:{postData:[{id:2,message:"My first react app!",likesCount:32},{id:3,message:"I need more CSS",likesCount:15},{id:3,message:"COOOOOOOOOOOOOOL!!!",likesCount:15},{id:4,message:"React is cool!",likesCount:45}],newPostText:"Welcome! Have a nice day!"},dialogsPage:{dialogData:[{id:1,name:"Pavel"},{id:2,name:"Andrey"},{id:3,name:"Egor"},{id:4,name:"Sasha"}],messagesData:[{id:1,message:"Yo!"},{id:2,message:"How are you?"},{id:3,message:"What are you doing?"},{id:4,message:"Hi!"}]},siteBar:{}},U=function(){var e=X.profilePage.newPostText,a={id:5,message:e,likesCount:0};""!==e&&(X.profilePage.postData.push(a),X.profilePage.newPostText="",$(X))},K=function(e){X.profilePage.newPostText=e,$(X)},$=function(e){l.a.render(s.a.createElement(Q,{state:e,addPost:U,updateNewPostText:K}),document.getElementById("root"))};$(X),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[31,1,2]]]);
//# sourceMappingURL=main.2e05cf24.chunk.js.map