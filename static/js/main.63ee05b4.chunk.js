(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports={nav:"Navbar_nav__2z6qM",item:"Navbar_item__1M2r1",active:"Navbar_active__1Cvlk"}},,,,,function(e,a,t){e.exports=t.p+"static/media/logo.b970052f.png"},,function(e,a,t){e.exports={postsBlock:"MyPosts_postsBlock__2GYzi",newPostBlock:"MyPosts_newPostBlock__23WbY"}},function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1Z_vz",dialogsBlock:"Dialogs_dialogsBlock__3Rzxf",messagesBlock:"Dialogs_messagesBlock__1IRJT"}},,,,function(e,a,t){e.exports={active:"DialogItem_active__oFyRn",dialog:"DialogItem_dialog__27tK4"}},,function(e,a,t){},,,function(e,a,t){e.exports={header:"Header_header__2XvnI"}},,,function(e,a,t){e.exports={ProfileContent:"Profile_ProfileContent__3F7pk"}},function(e,a,t){e.exports={item:"Post_item__uylRa"}},function(e,a,t){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3J8Gf"}},function(e,a,t){e.exports={message:"Message_message__1qpfU"}},function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},,,,,,function(e,a,t){e.exports={nav:"News_nav__2kotm",item:"News_item__3UaYa"}},function(e,a,t){},function(e,a,t){e.exports={nav:"Settings_nav__AcH-0",item:"Settings_item__29ZzC"}},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n);t(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(20),l=t.n(o),i=t(5),c=t(7),r=(t(33),t(9)),m=t.n(r),d=t(21),u=t.n(d),p=function(){return s.a.createElement("header",{className:u.a.header},s.a.createElement("img",{src:m.a}),s.a.createElement("h1",null,"Welcome"))},g=t(4),v=t.n(g),f=function(){return s.a.createElement("nav",{className:v.a.nav},s.a.createElement("div",{className:v.a.item},s.a.createElement(i.b,{to:"/profile",activeClassName:v.a.active},"Profile")),s.a.createElement("div",{className:v.a.item},s.a.createElement(i.b,{to:"/dialogs",activeClassName:v.a.active},"Messages")),s.a.createElement("div",{className:v.a.item},s.a.createElement(i.b,{to:"/news",activeClassName:v.a.active},"News")),s.a.createElement("div",{className:v.a.item},s.a.createElement(i.b,{to:"/music",activeClassName:v.a.active},"Music")),s.a.createElement("div",{className:v.a.item},s.a.createElement(i.b,{to:"/settings",activeClassName:v.a.active},"Settings")))},E=t(24),_=t.n(E),P=t(11),N=t.n(P),w=t(25),k=t.n(w),x=function(e){return s.a.createElement("div",{className:k.a.item},s.a.createElement("img",{src:"https://static.turbosquid.com/Preview/2019/02/12__04_46_30/cirlce_43.jpgF75B8343-6B7D-4C48-9F15-26C555FCB2DDZoom.jpg",alt:""}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"Like ",e.likes)))},h=function(e){var a=e.postData.map((function(e){return s.a.createElement(x,{message:e.message,likes:e.likesCount})})),t=s.a.createRef();return s.a.createElement("div",{className:N.a.postsBlock},s.a.createElement("div",{className:N.a.newPostBlock},s.a.createElement("h3",null,"New post"),s.a.createElement("p",null,"Welcome to the updated app! You can add a new post now"),s.a.createElement("p",null,'Click "Add post" button or write your text and click the button to add a new post',s.a.createElement("span",null," *CSS will be soon")," ;)"),s.a.createElement("div",null,s.a.createElement("textarea",{onChange:function(){var a=t.current.value;console.log(a),e.updateNewPostText(a)},ref:t,value:e.newPostText})),s.a.createElement("div",null,s.a.createElement("button",{onClick:function(){e.addPost()}},"Add post"))),s.a.createElement("div",{className:N.a.allPostsBlock},s.a.createElement("h3",null,"My posts"),a))},C=t(26),D=t.n(C),B=function(e){return s.a.createElement("div",{className:"profileInfo"},s.a.createElement("div",null,s.a.createElement("img",{src:"https://image.winudf.com/v2/image/Y29tLmJlYWNoLmJhbGliZWFjaHdhbGxwYXBlcl9zY3JlZW5fMF8xNTMyOTc5NTE3XzA0NQ/screen-0.jpg?fakeurl=1&type=.jpg",alt:""})),s.a.createElement("div",{className:D.a.descriptionBlock},"ava + description"))},b=function(e){return console.log("---props in Profile ",e),s.a.createElement("div",{className:_.a.ProfileContent},s.a.createElement(B,null),s.a.createElement(h,{postData:e.postData,addPost:e.addPost,newPostText:e.newPostText,updateNewPostText:e.updateNewPostText}))},T=t(12),y=t.n(T),O=t(27),M=t.n(O),W=function(e){return s.a.createElement("div",{className:M.a.message},e.message)},I=t(16),S=t.n(I),Y=function(e){console.log("--- DialogItem props ",e);var a="/dialogs/".concat(e.id);return s.a.createElement("div",{className:S.a.dialog},s.a.createElement(i.b,{activeClassName:S.a.active,to:a},e.name))},z=function(e){console.log("--- Dialogs props ",e);var a=e.dialogData,t=e.messagesData,n=a.map((function(e){return s.a.createElement(Y,{name:e.name,id:e.id})})),o=t.map((function(e){return s.a.createElement(W,{message:e.message})})),l=s.a.createRef();return s.a.createElement("div",{className:y.a.dialogs},s.a.createElement("div",{className:y.a.dialogsBlock},n),s.a.createElement("div",{className:y.a.messagesBlock},o,s.a.createElement("textarea",{ref:l}),s.a.createElement("button",{onClick:function(){var e=l.current.value;alert(e)}},"Add")))},A=(t(39),function(){return s.a.createElement("div",null,"News")}),F=(t(40),function(e){return s.a.createElement("div",null,"Music")}),J=(t(41),function(){return s.a.createElement("div",null,"Settings")});var R=function(e){return console.log("--- App props ",e),s.a.createElement(i.a,null,s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(p,null),s.a.createElement(f,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(c.a,{path:"/profile",render:function(){return s.a.createElement(b,{postData:e.state.profilePage.postData,addPost:e.addPost,newPostText:e.state.profilePage.newPostText,updateNewPostText:e.updateNewPostText})}}),s.a.createElement(c.a,{path:"/dialogs",render:function(){return s.a.createElement(z,{dialogData:e.state.dialogsPage.dialogData,messagesData:e.state.dialogsPage.messagesData})}}),s.a.createElement(c.a,{path:"/news",component:A}),s.a.createElement(c.a,{path:"/music",component:F}),s.a.createElement(c.a,{path:"/settings",component:J}))))},H={profilePage:{postData:[{id:2,message:"My first react app!",likesCount:32},{id:3,message:"I need more CSS",likesCount:15},{id:3,message:"COOOOOOOOOOOOOOL!!!",likesCount:15},{id:4,message:"React is cool!",likesCount:45}],newPostText:"Welcome! Have a nice day!"},dialogsPage:{dialogData:[{id:1,name:"Pavel"},{id:2,name:"Andrey"},{id:3,name:"Egor"},{id:4,name:"Sasha"}],messagesData:[{id:1,message:"Yo!"},{id:2,message:"How are you?"},{id:3,message:"What are you doing?"},{id:4,message:"Hi!"}]},siteBar:{}},j=function(){var e=H.profilePage.newPostText,a={id:5,message:e,likesCount:0};""!==e&&(H.profilePage.postData.push(a),H.profilePage.newPostText="",G(H))},Z=function(e){H.profilePage.newPostText=e,G(H)},G=function(e){l.a.render(s.a.createElement(R,{state:e,addPost:j,updateNewPostText:Z}),document.getElementById("root"))};G(H),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[28,1,2]]]);
//# sourceMappingURL=main.63ee05b4.chunk.js.map