(this["webpackJsonpfirebase-auth"]=this["webpackJsonpfirebase-auth"]||[]).push([[0],{119:function(e,t,a){},129:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(16),i=a.n(r),o=(a(82),a(63)),l=a(18),s=a(10),d=a(29),u=a.n(d),j=a(48),b=a(42),p=a(55),O=a.n(p),h=b.a.initializeApp({apiKey:"AIzaSyBPcvADPeXHwRb7tRYD9uKNz-DLSixXx3U",authDomain:"omarnet.firebaseapp.com",databaseURL:"https://omarnet-default-rtdb.firebaseio.com/",projectId:"omarnet",storageBucket:"omarnet.appspot.com",messagingSenderId:"1019187639201",appId:"1:1019187639201:web:9d66c845d541a594bdd1e0"}),m=h.auth(),x=h.firestore(),f=(new b.a.auth.GoogleAuthProvider,function(){var e=Object(j.a)(u.a.mark((function e(t,a,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a&&n){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,m.signInWithEmailAndPassword(a,n);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),console.error(e.t0),O.a.fire({title:e.t0,icon:"",confirmButtonText:"ok"});case 12:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t,a,n){return e.apply(this,arguments)}}()),g=function(){m.signOut()},v=a(65),y=(a(119),a.p,a(165)),C=a(199),S=a(202),k=a(45),w=a(197),I=a(170),W=a(171),_=a(168),F=a(4);var T=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],d=i[1],u=Object(v.a)(m),j=Object(s.a)(u,3),b=j[0],p=j[1],O=(j[2],Object(l.f)());return Object(n.useEffect)((function(){p||b&&O.replace("/dashboard")}),[b,p]),Object(F.jsx)("div",{children:Object(F.jsx)(y.a,{component:"main",maxWidth:"xs",children:Object(F.jsxs)(C.a,{sx:{marginTop:88,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(F.jsx)(S.a,{style:{background:"rgb(231, 76, 60)"},sx:{m:1,backgroundColor:"rgb(231, 76, 60)"},children:Object(F.jsx)(_.a,{})}),Object(F.jsx)(k.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(F.jsxs)(C.a,{component:"form",onSubmit:function(e){return f(e,a,o)},noValidate:!0,sx:{mt:1},children:[Object(F.jsx)(w.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:a,onChange:function(e){return c(e.target.value)}}),Object(F.jsx)(w.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:o,onChange:function(e){return d(e.target.value)}}),Object(F.jsx)("br",{}),Object(F.jsx)("br",{}),Object(F.jsx)(I.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},style:{backgroundColor:"rgb(231, 76, 60)",color:"white"},children:"Sign In"}),Object(F.jsxs)(W.a,{container:!0,children:[Object(F.jsx)(W.a,{item:!0,xs:!0}),Object(F.jsx)(W.a,{item:!0})]})]})]})})})},B=(a(129),a(90)),E=a.n(B),D=a(182),L=a(172),z=a(179),A=a(185),N=a(186),P=a(174),R=a(178),q=a(177),V=a(173),U=a(175),H=a(176),J=a(184),K=a(136),M=a(201),X=a(180),G=a(181),Y=a(183),Q=a(187);var Z=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),l=o[0],d=o[1],u=Object(n.useState)("0"),j=Object(s.a)(u,2),p=j[0],O=j[1],h=Object(n.useState)(""),m=Object(s.a)(h,2),f=m[0],g=m[1],v=Object(n.useState)(!0),C=Object(s.a)(v,2),k=C[0],W=C[1],_=Object(n.useState)("+"),T=Object(s.a)(_,2),B=T[0],Z=T[1],$=Object(n.useState)([]),ee=Object(s.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),ce=Object(s.a)(ne,2),re=ce[0],ie=ce[1],oe=Object(n.useState)(""),le=Object(s.a)(oe,2),se=le[0],de=le[1],ue=Object(n.useState)(""),je=Object(s.a)(ue,2),be=je[0],pe=je[1],Oe=Object(n.useState)(!1),he=Object(s.a)(Oe,2),me=he[0],xe=he[1],fe=Object(n.useState)(!1),ge=Object(s.a)(fe,2),ve=ge[0],ye=ge[1],Ce=Object(n.useState)(""),Se=Object(s.a)(Ce,2),ke=Se[0],we=Se[1],Ie=Object(n.useState)(""),We=Object(s.a)(Ie,2),_e=We[0],Fe=We[1],Te=function(e,t){"plus"==t&&de(parseInt(se)+parseInt(e)),"minus"==t&&de(parseInt(se)-parseInt(e))},Be=new Intl.NumberFormat("AR-AR",{style:"currency",currency:"LBP"});Object(n.useEffect)((function(){console.log("useEffect Hook!!!"),x.collection("persons").orderBy("name","asc").onSnapshot((function(e){console.log("Firebase Snap!"),r(e.docs.map((function(e){return{id:e.id,name:e.data().name,datatime:e.data().datatime,balance:parseInt(e.data().balance),phone:e.data().phone}})))})),x.collection("products").orderBy("product_name","asc").onSnapshot((function(e){console.log("Firebase Snap!"),ae(e.docs.map((function(e){return{id:e.id,product_name:e.data().product_name,datatime:e.data().datatime,price:e.data().price,phone:e.data().phone,avatar:e.data().avatar}})))}))}),[]);var Ee=function(){xe(!1)},De=function(){ye(!1)};return Object(F.jsxs)(y.a,{children:[Object(F.jsxs)("center",{children:[Object(F.jsx)(I.a,{variant:"contained",onClick:function(){k?(W(!1),Z("-")):(W(!0),Z("+"))},style:{background:[k?"#3085d6":"red"],color:"white",fontSize:10},children:B}),Object(F.jsx)(w.a,{variant:"outlined",size:"small",id:"standard-basic",label:"Search Client",onChange:function(e){pe(e.target.value)}})]}),Object(F.jsxs)("center",{style:{display:[k?"none":"block"]},children:[Object(F.jsxs)("form",{noValidate:!0,children:[Object(F.jsx)(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"todo",label:"Full name",name:"todo",autoComplete:"off",value:l,onChange:function(e){return d(e.target.value)}}),Object(F.jsx)(w.a,{variant:"outlined",margin:"normal",required:!0,type:"number",fullWidth:!0,id:"balance",label:"balance",name:"balance",autoComplete:"off",value:p,onChange:function(e){return O(e.target.value)}}),Object(F.jsx)(w.a,{variant:"outlined",margin:"normal",required:!0,type:"number",fullWidth:!0,id:"balance",label:"phone",name:"phone",autoComplete:"off",value:f,onChange:function(e){return g(e.target.value)}}),Object(F.jsx)(I.a,{type:"submit",variant:"contained",style:{background:"#2980b9",color:"white"},fullWidth:!0,onClick:function(e){e.preventDefault(),x.collection("persons").add({name:l,datetime:b.a.firestore.FieldValue.serverTimestamp(),balance:parseInt(p),phone:f}),d(""),O(""),g("")},disabled:!l||!p||!f,startIcon:Object(F.jsx)(L.a,{}),children:"Save"}),Object(F.jsx)("br",{})]}),Object(F.jsx)("br",{})]}),Object(F.jsx)(V.a,{style:{marginTop:5},className:"table1",component:K.a,children:Object(F.jsxs)(P.a,{"aria-label":"simple table",children:[Object(F.jsx)(U.a,{children:Object(F.jsxs)(H.a,{style:{background:"#3085d6",color:"white",textAlign:"left"},children:[Object(F.jsx)(q.a,{align:"center",color:"primary",children:Object(F.jsx)("span",{style:{color:"white"},children:"fullname"})}),Object(F.jsx)(q.a,{align:"center",children:Object(F.jsx)("span",{style:{color:"white"},children:"balance"})}),Object(F.jsx)(q.a,{align:"center",children:Object(F.jsx)("span",{style:{color:"white"},children:"action"})})]})}),Object(F.jsx)(R.a,{children:c.filter((function(e){return""===be||e.name.toLowerCase().includes(be.toLowerCase())?e:void 0})).map((function(e){return Object(F.jsxs)(H.a,{children:[Object(F.jsx)(q.a,{align:"center",children:Object(F.jsxs)("h6",{children:[" ",e.name]})}),Object(F.jsx)(q.a,{align:"center",children:e.balance}),Object(F.jsxs)(q.a,{align:"center",children:[Object(F.jsx)(L.a,{cursor:"pointer",onClick:function(){return t=e,xe(!0),Fe(t.id),we(t.name),de(t.balance),void ie(t.phone);var t}}),Object(F.jsx)(z.a,{cursor:"pointer",onClick:function(){return t=e,ye(!0),Fe(t.id),we(t.name),de(t.balance),void ie(t.phone);var t}})]})]},e.id)}))})]})}),Object(F.jsxs)(M.a,{style:{},fullScreen:!0,open:me,onClose:Ee,children:[Object(F.jsx)(X.a,{style:{},children:Object(F.jsx)("div",{className:"containergrid",children:te.map((function(e){return Object(F.jsxs)(G.a,{sx:{maxWidth:345},style:{margin:"5px"},children:[Object(F.jsx)(D.a,{action:Object(F.jsx)(Y.a,{"aria-label":"settings"}),title:Object(F.jsx)("h1",{children:e.product_name}),subheader:Object(F.jsx)("h1",{children:e.price})}),Object(F.jsx)(J.a,{children:Object(F.jsx)(S.a,{style:{height:100,width:100,borderRadius:0},src:e.avatar,sx:{bgcolor:"red"},"aria-label":"recipe",children:"C"})}),Object(F.jsxs)("div",{style:{textAlign:"center"},children:[Object(F.jsx)(I.a,{name:"minus",onClick:function(t){return Te(e.price,t.currentTarget.name)},size:"small",variant:"outlined",children:Object(F.jsx)(A.a,{})}),"\xa0",Object(F.jsx)(I.a,{name:"plus",onClick:function(t){return Te(e.price,t.currentTarget.name)},size:"small",variant:"outlined",children:Object(F.jsx)(N.a,{})})]}),Object(F.jsx)("br",{})]})}))})}),Object(F.jsxs)(Q.a,{children:[Object(F.jsx)("a",{href:"https://api.whatsapp.com/send?phone=+961".concat(re),target:"_blank",children:Object(F.jsx)(E.a,{style:{color:"#2980b9"}})}),Object(F.jsx)(w.a,{margin:"normal",label:"full name",type:"text",autoComplete:"off",variant:"outlined",name:"updateTodo",value:ke,size:"small",onChange:function(e){return we(e.target.value)}}),Object(F.jsx)(w.a,{style:{outlineColor:"#2980b9"},margin:"normal",label:"balance",type:"number",variant:"outlined",name:"updateTodo",autoComplete:"off",size:"small",value:se,onChange:function(e){return de(e.target.value)}}),Object(F.jsx)(I.a,{onClick:Ee,variant:"contained",style:{background:"red",color:"white"},children:"Cancel"}),Object(F.jsx)(I.a,{disabled:!ke,onClick:function(){if(se<0)return alert("please instert valid");x.collection("persons").doc(_e).update({name:ke,balance:se}),xe(!1)},variant:"contained",style:{background:"#2980b9",color:"white"},children:"Save"})]})]}),Object(F.jsxs)(M.a,{fullScreen:!0,open:ve,onClose:De,children:[Object(F.jsx)("center",{children:Object(F.jsx)("h6",{children:"Edit Client Info"})}),Object(F.jsxs)(X.a,{children:[Object(F.jsx)(w.a,{autoFocus:!0,margin:"dense",id:"name",autoComplete:"off",value:ke,type:"email",fullWidth:!0,label:"Full name",variant:"outlined",onChange:function(e){return we(e.target.value)}}),Object(F.jsx)(w.a,{margin:"dense",id:"name",type:"number",label:"phone number",fullWidth:!0,value:re,autoComplete:"off",variant:"outlined",onChange:function(e){return ie(e.target.value)}})]}),Object(F.jsxs)(Q.a,{children:[Object(F.jsx)(I.a,{variant:"contained",onClick:De,children:"Cancel"}),Object(F.jsx)(I.a,{color:"primary",onClick:function(){if(se<0)return alert("please instert valid");x.collection("persons").doc(_e).update({name:ke,phone:re}),ye(!1)},variant:"contained",children:"Update"})]})]}),Object(F.jsx)("br",{}),Object(F.jsxs)("h6",{children:["\xa0",Be.format(c.reduce((function(e,t){return e+t.balance}),0))]})]})},$=a(169),ee=a(188),te=a(189),ae=a(190);var ne=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),l=o[0],d=o[1],p=Object(n.useState)("0"),O=Object(s.a)(p,2),h=O[0],m=O[1],f=Object(n.useState)(!0),g=Object(s.a)(f,2),v=g[0],C=g[1],S=Object(n.useState)("+"),k=Object(s.a)(S,2),W=k[0],_=k[1],T=c.a.useState(null),B=Object(s.a)(T,2),E=B[0],D=B[1],N=Object(n.useState)(""),P=Object(s.a)(N,2),R=P[0],q=P[1],V=Object(n.useState)(!1),U=Object(s.a)(V,2),H=U[0],J=U[1],K=Object(n.useState)(""),G=Object(s.a)(K,2),Z=G[0],ne=G[1],ce=Object(n.useState)(""),re=Object(s.a)(ce,2),ie=re[0],oe=re[1],le=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.files[0]){e.next=4;break}return e.abrupt("return",console.log("please select image"));case 4:return n=b.a.storage().ref(),c=n.child(a.name),e.next=8,c.put(a);case 8:return e.t0=D,e.next=11,c.getDownloadURL();case 11:e.t1=e.sent,(0,e.t0)(e.t1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){console.log("useEffect Hook!!!"),x.collection("products").orderBy("price","desc").onSnapshot((function(e){console.log("Firebase Snap!"),r(e.docs.map((function(e){return{id:e.id,product_name:e.data().product_name,datatime:e.data().datatime,price:e.data().price,phone:e.data().phone}})))}))}),[]);var se=function(){J(!1)};return Object(F.jsxs)(y.a,{children:[Object(F.jsx)(I.a,{variant:"contained",onClick:function(){v?(C(!1),_("-")):(C(!0),_("+"))},style:{background:[v?"#3085d6":"red"],color:"white",fontSize:10},children:W}),Object(F.jsx)("center",{style:{display:[v?"none":"block"]},children:Object(F.jsxs)("form",{noValidate:!0,children:[Object(F.jsx)(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"todo",label:"product name",name:"todo",autoComplete:"off",value:l,onChange:function(e){return d(e.target.value)}}),Object(F.jsx)(w.a,{variant:"outlined",margin:"normal",required:!0,type:"number",fullWidth:!0,id:"price",label:"price",name:"price",autoComplete:"off",value:h,onChange:function(e){return m(e.target.value)}}),Object(F.jsx)("input",{accept:"image/png",id:"image",type:"file",hidden:!0,onChange:le}),Object(F.jsx)(I.a,{variant:"outlined",color:"primary",children:Object(F.jsx)("label",{htmlFor:"image",children:"product image"})}),Object(F.jsx)(I.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,onClick:function(e){e.preventDefault(),E&&(x.collection("products").add({product_name:l,datetime:b.a.firestore.FieldValue.serverTimestamp(),price:h,avatar:E}),d(""),m(""),D(null))},disabled:!l||!h||!E,startIcon:Object(F.jsx)(L.a,{}),children:"Save"})]})}),Object(F.jsx)($.a,{dense:!0,children:a.map((function(e){return Object(F.jsxs)(ee.a,{children:[Object(F.jsx)(te.a,{primary:e.product_name,secondary:e.datetime}),Object(F.jsx)(te.a,{primary:e.price,secondary:e.datetime}),Object(F.jsxs)(ae.a,{children:[Object(F.jsx)(Y.a,{edge:"end","aria-label":"Edit",onClick:function(){return function(e){J(!0),oe(e.id),ne(e.product_name),q(e.price)}(e)},children:Object(F.jsx)(z.a,{})}),Object(F.jsx)(Y.a,{edge:"end","aria-label":"delete",onClick:function(){return t=e.id,void x.collection("products").doc(t).delete().then((function(e){console.log("Deleted!",e)}));var t},children:Object(F.jsx)(A.a,{})})]})]},e.id)}))}),Object(F.jsxs)(M.a,{fullScreen:!0,open:H,onClose:se,children:[Object(F.jsxs)(X.a,{children:[Object(F.jsx)(w.a,{variant:"outlined",margin:"normal",label:"product name",type:"text",fullWidth:!0,name:"updateTodo",value:Z,autoComplete:"off",onChange:function(e){return ne(e.target.value)}}),Object(F.jsx)(w.a,{variant:"outlined",margin:"normal",label:"price",type:"number",autoComplete:"off",fullWidth:!0,name:"updateTodo",value:R,onChange:function(e){return q(e.target.value)}})]}),Object(F.jsxs)(Q.a,{children:[Object(F.jsx)(I.a,{onClick:se,variant:"contained",style:{background:"red",color:"white"},children:"Cancel"}),Object(F.jsx)(I.a,{disabled:!R||!Z,onClick:function(){x.collection("products").doc(ie).update({product_name:Z,price:R}),J(!1)},variant:"contained",style:{background:"#3085d6",color:"white"},children:"Save"})]})]})]})},ce=a(191),re=a(192),ie=a(193),oe=a(194);var le=function(){var e=Object(v.a)(m),t=Object(s.a)(e,3),a=t[0],c=t[1],r=(t[2],Object(n.useState)("")),i=Object(s.a)(r,2),o=(i[0],i[1]),d=Object(l.f)(),b=Object(n.useState)(!0),p=Object(s.a)(b,2),h=p[0],f=p[1],y=Object(n.useState)("Person"),C=Object(s.a)(y,2),S=(C[0],C[1]),k=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.collection("users").where("uid","==",null===a||void 0===a?void 0:a.uid).get();case 3:return t=e.sent,e.next=6,t.docs[0].data();case 6:n=e.sent,o(n.name),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),O.a.fire({icon:"",text:"\u062e\u0637\u0623 \u0641\u064a \u062c\u0644\u0628 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",confirmButtonColor:"#3085d6",confirmButtonText:"\u062a\u0645"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(!c)return a?void k():d.replace("/login")}),[a,c]),Object(F.jsxs)("div",{className:"Person-content",children:[Object(F.jsx)("br",{}),"\xa0",Object(F.jsx)(I.a,{variant:"contained",style:{background:"red",color:"white"},onClick:g,children:Object(F.jsx)(ce.a,{})}),"\xa0",Object(F.jsx)(I.a,{onClick:function(){h?(f(!1),S("products")):(f(!0),S("person"))},variant:"contained",children:h?Object(F.jsx)(re.a,{}):Object(F.jsx)(ie.a,{})}),"\xa0",Object(F.jsx)(I.a,{onClick:function(){return d.push("/")},className:"homebutton",variant:"contained",children:Object(F.jsx)(oe.a,{style:{}})}),Object(F.jsx)("center",{children:Object(F.jsx)("br",{})}),Object(F.jsx)("div",{children:h?Object(F.jsx)(Z,{}):Object(F.jsx)(ne,{})})]})},se=a(196),de=a(195);var ue=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!0),o=Object(s.a)(i,2),l=o[0],d=o[1];return Object(n.useEffect)((function(){x.collection("products").orderBy("product_name","asc").onSnapshot((function(e){console.log("Firebase Snap!"),d(!1),r(e.docs.map((function(e){return{id:e.id,product_name:e.data().product_name,datatime:e.data().datatime,price:e.data().price,phone:e.data().phone,avatar:e.data().avatar}}))),(c.length=0)?d(!0):d(!1)}))}),[]),Object(F.jsx)(F.Fragment,{children:l?Object(F.jsx)("div",{children:Object(F.jsx)("div",{class:"main",children:Object(F.jsx)("div",{class:"circle"})})}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("center",{children:[" ",Object(F.jsx)("h3",{className:"MuiTypography-h5 ",style:{color:"#e74c3c"},children:"Omar Net \u0623\u0647\u0644\u0627 \u0628\u0643\u0645 \u0641\u064a \u0645\u062d\u0644"})]}),Object(F.jsx)("div",{className:"containergrid",children:c.map((function(e){return Object(F.jsxs)(G.a,{elevation:5,style:{maxWidth:"100%",marginBottom:10,marginLeft:10,marginRight:10},sx:{maxWidth:345},children:[Object(F.jsx)(D.a,{action:Object(F.jsx)(Y.a,{"aria-label":"settings",children:Object(F.jsx)("a",{target:"_blank",href:"https://api.whatsapp.com/send?phone=+96170342096&text=".concat(e.product_name),children:Object(F.jsx)(de.a,{style:{color:"#27ae60"}})})}),title:e.product_name,subheader:e.price+" L.L"}),Object(F.jsx)(J.a,{children:Object(F.jsx)(k.a,{variant:"body2",color:"text.secondary",children:Object(F.jsx)(se.a,{component:"img",style:{height:100,width:"auto"},image:e.avatar,alt:"omar_net"})})})]})}))})]})})};var je=function(){return Object(F.jsx)("div",{className:"app",children:Object(F.jsx)(o.a,{children:Object(F.jsxs)(l.c,{children:[Object(F.jsx)(l.a,{exact:!0,path:"/",component:ue}),Object(F.jsx)(l.a,{exact:!0,path:"/login",component:T}),Object(F.jsx)(l.a,{exact:!0,path:"/dashboard",component:le})]})})})},be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,205)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(je,{})}),document.getElementById("root")),be()},82:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.33cc9747.chunk.js.map