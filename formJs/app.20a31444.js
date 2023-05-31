(function(){"use strict";var e={504:function(e,t,n){var o=n(963),i=n(252);const s={id:"app"},l={key:0},r={key:1,class:"progressbar"},a=(0,i.uE)('<div class="step" id="1">1</div><div class="connector" id="c1"></div><div class="step" id="2">2</div><div class="connector" id="c2"></div><div class="step" id="3">3</div><div class="connector" id="c3"></div><div class="step" id="4">4</div>',7),d=[a];function u(e,t,n,o,a,u){const c=(0,i.up)("Basic"),p=(0,i.up)("Contact"),m=(0,i.up)("Personal"),h=(0,i.up)("Signup"),f=(0,i.up)("Details");return(0,i.wg)(),(0,i.iD)("div",s,[5!=a.s?((0,i.wg)(),(0,i.iD)("h1",l,"Registration Form")):(0,i.kq)("",!0),5!=a.s?((0,i.wg)(),(0,i.iD)("div",r,d)):(0,i.kq)("",!0),((0,i.wg)(),(0,i.j4)(i.Ob,null,[1==a.s?((0,i.wg)(),(0,i.j4)(c,{key:0,onMovef:u.next,m:this.s},null,8,["onMovef","m"])):(0,i.kq)("",!0)],1024)),((0,i.wg)(),(0,i.j4)(i.Ob,null,[2==a.s?((0,i.wg)(),(0,i.j4)(p,{key:0,onMovef:u.next,onMoveb:u.previous,m:this.s},null,8,["onMovef","onMoveb","m"])):(0,i.kq)("",!0)],1024)),((0,i.wg)(),(0,i.j4)(i.Ob,null,[3==a.s?((0,i.wg)(),(0,i.j4)(m,{key:0,onMovef:u.next,onMoveb:u.previous,m:this.s},null,8,["onMovef","onMoveb","m"])):(0,i.kq)("",!0)],1024)),((0,i.wg)(),(0,i.j4)(i.Ob,null,[4==a.s?((0,i.wg)(),(0,i.j4)(h,{key:0,onMovef:u.next,onMoveb:u.previous,m:this.s},null,8,["onMovef","onMoveb","m"])):(0,i.kq)("",!0)],1024)),5==a.s?((0,i.wg)(),(0,i.j4)(f,{key:2,info:this.info},null,8,["info"])):(0,i.kq)("",!0)])}const c=e=>((0,i.dD)("data-v-52795f85"),e=e(),(0,i.Cn)(),e),p={class:"formbox"},m=c((()=>(0,i._)("h2",null,"Basic Information",-1))),h=c((()=>(0,i._)("label",{for:"title"},"Title",-1))),f=c((()=>(0,i._)("option",null,"Master",-1))),v=c((()=>(0,i._)("option",null,"Miss",-1))),w=c((()=>(0,i._)("option",null,"Mr.",-1))),y=c((()=>(0,i._)("option",null,"Mrs.",-1))),b=[f,v,w,y],g=c((()=>(0,i._)("label",{for:"firstname"},"First Name *",-1))),_=c((()=>(0,i._)("label",{for:"lastname"},"Last Name *",-1))),x=c((()=>(0,i._)("label",{for:"company"},"Company",-1)));function k(e,t,n,s,l,r){return(0,i.wg)(),(0,i.iD)("div",p,[m,(0,i._)("form",null,[h,(0,i.wy)((0,i._)("select",{name:"title","onUpdate:modelValue":t[0]||(t[0]=e=>this.title=e)},b,512),[[o.bM,this.title]]),g,(0,i.wy)((0,i._)("input",{type:"text",name:"firstname","onUpdate:modelValue":t[1]||(t[1]=e=>this.fname=e),onInput:t[2]||(t[2]=(...e)=>r.show&&r.show(...e))},null,544),[[o.nr,this.fname]]),_,(0,i.wy)((0,i._)("input",{type:"text",name:"lastname","onUpdate:modelValue":t[3]||(t[3]=e=>this.lname=e),onInput:t[4]||(t[4]=(...e)=>r.show&&r.show(...e))},null,544),[[o.nr,this.lname]]),x,(0,i.wy)((0,i._)("input",{type:"text",name:"company","onUpdate:modelValue":t[5]||(t[5]=e=>this.company=e)},null,512),[[o.nr,this.company]]),(0,i._)("button",{class:"next",disabled:"",onClick:t[6]||(t[6]=(...e)=>r.next&&r.next(...e))},"next")])])}var C={name:"BasicApp",props:{m:Number},data(){return{title:"Mr.",lname:"",fname:"",company:""}},methods:{show(){""!==this.lname&&""!==this.fname?document.querySelector(".next").disabled=!1:document.querySelector(".next").disabled=!0},next(){this.fname=this.fname[0].toUpperCase()+this.fname.slice(1,this.fname.length),this.lname=this.lname[0].toUpperCase()+this.lname.slice(1,this.lname.length),this.$emit("movef",{id:1,title:this.title,firstName:this.fname,lastName:this.lname,company:this.company})}}},S=n(744);const q=(0,S.Z)(C,[["render",k],["__scopeId","data-v-52795f85"]]);var N=q;const M=e=>((0,i.dD)("data-v-d6e2114c"),e=e(),(0,i.Cn)(),e),I={class:"formbox"},D=M((()=>(0,i._)("h2",null,"Contact Information",-1))),B=M((()=>(0,i._)("label",{for:"email"},"Email *",-1))),O=M((()=>(0,i._)("label",{for:"phonenumber"},"Phone Number *",-1))),P={class:"btngroup"};function j(e,t,n,s,l,r){return(0,i.wg)(),(0,i.iD)("div",I,[D,(0,i._)("form",null,[B,(0,i.wy)((0,i._)("input",{type:"text",name:"email","onUpdate:modelValue":t[0]||(t[0]=e=>this.email=e),onInput:t[1]||(t[1]=(...e)=>r.show&&r.show(...e))},null,544),[[o.nr,this.email]]),O,(0,i.wy)((0,i._)("input",{type:"text",name:"phonenumber","onUpdate:modelValue":t[2]||(t[2]=e=>this.phone=e),onInput:t[3]||(t[3]=(...e)=>r.show&&r.show(...e))},null,544),[[o.nr,this.phone]]),(0,i._)("div",P,[(0,i._)("button",{class:"previous",onClick:t[4]||(t[4]=(...e)=>r.previous&&r.previous(...e))},"previous"),(0,i._)("button",{class:"next",disabled:"",onClick:t[5]||(t[5]=(...e)=>r.next&&r.next(...e))},"next")])])])}var U={name:"ContactApp",props:{m:Number},data(){return{email:"",phone:""}},methods:{show(){""!=this.email&&""!=this.phone?document.querySelector(".next").disabled=!1:document.querySelector(".next").disabled=!0},next(){this.$emit("movef",{id:2,email:this.email,phoneNumber:this.phone})},previous(){this.$emit("moveb",{id:2})}}};const V=(0,S.Z)(U,[["render",j],["__scopeId","data-v-d6e2114c"]]);var A=V;const E=e=>((0,i.dD)("data-v-6d3da498"),e=e(),(0,i.Cn)(),e),Z={class:"formbox"},L=E((()=>(0,i._)("h2",null,"Personal Information",-1))),F=E((()=>(0,i._)("legend",{for:"genderBox"},"Gender",-1))),$={id:"genderbox"},T=E((()=>(0,i._)("label",{for:"Male"},"Male",-1))),z=E((()=>(0,i._)("label",{for:"Female"},"Female",-1))),G=E((()=>(0,i._)("label",{for:"unspecified"},"Other",-1))),H=E((()=>(0,i._)("label",{for:"dob"},"Date of Birth",-1))),K=E((()=>(0,i._)("label",{for:"nin"},"National ID (NIN)*",-1))),R=E((()=>(0,i._)("small",null,"*NIN must be 11 digits long",-1))),W={class:"btngroup"};function Y(e,t,n,s,l,r){return(0,i.wg)(),(0,i.iD)("div",Z,[L,(0,i._)("form",null,[F,(0,i._)("div",$,[(0,i._)("div",null,[(0,i._)("input",{type:"checkbox",id:"Male",class:"check",value:"Male",onClick:t[0]||(t[0]=e=>r.gSelector(e))}),T]),(0,i._)("div",null,[(0,i._)("input",{type:"checkbox",id:"Female",value:"Female",class:"check",onClick:t[1]||(t[1]=e=>r.gSelector(e))}),z]),(0,i._)("div",null,[(0,i._)("input",{type:"checkbox",id:"unspecified",value:"unspecified",class:"check",onClick:t[2]||(t[2]=e=>r.gSelector(e))}),G])]),H,(0,i.wy)((0,i._)("input",{type:"date",name:"dob","onUpdate:modelValue":t[3]||(t[3]=e=>this.dob=e)},null,512),[[o.nr,this.dob]]),K,(0,i.wy)((0,i._)("input",{type:"text",name:"nin","onUpdate:modelValue":t[4]||(t[4]=e=>this.nin=e),onInput:t[5]||(t[5]=(...e)=>r.show&&r.show(...e)),id:"nin"},null,544),[[o.nr,this.nin]]),R,(0,i._)("div",W,[(0,i._)("button",{class:"previous",onClick:t[6]||(t[6]=(...e)=>r.previous&&r.previous(...e))},"previous"),(0,i._)("button",{class:"next",disabled:"",onClick:t[7]||(t[7]=(...e)=>r.next&&r.next(...e))},"next")])])])}var J={name:"PersonalApp",props:{m:Number},data(){return{gender:"",dob:"",nin:""}},methods:{show(){""!=this.nin&&this.nin.length>=11?(document.querySelector(".next").disabled=!1,document.querySelector("small").style.display="none",document.querySelector("#nin").style.marginBottom="0.7rem"):(document.querySelector("small").style.display="block",document.querySelector(".next").disabled=!0,document.querySelector("#nin").style.marginBottom="0")},next(){this.$emit("movef",{id:3,gender:this.gender,dob:this.dob,nin:this.nin})},previous(){this.$emit("moveb",{id:3})},gSelector(e){var t=e.currentTarget.id;document.querySelectorAll(".check").forEach((function(e){e.value!=t&&(e.checked=!1)})),this.gender=t}}};const Q=(0,S.Z)(J,[["render",Y],["__scopeId","data-v-6d3da498"]]);var X=Q;const ee=e=>((0,i.dD)("data-v-41a0d5d1"),e=e(),(0,i.Cn)(),e),te={class:"formbox"},ne=ee((()=>(0,i._)("h2",null,"Signup Information",-1))),oe=ee((()=>(0,i._)("label",{for:"username"},"Username *",-1))),ie=ee((()=>(0,i._)("label",{for:"password1"},"Password *",-1))),se={class:"confirmer"},le=ee((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"green"},[(0,i._)("path",{id:"path1",d:"M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z",fill:"none"})],-1))),re=ee((()=>(0,i._)("small",null,"*Password must be longer than 8 characters",-1))),ae={class:"shower"},de=ee((()=>(0,i._)("label",{for:"password2"},"Confirm Password *",-1))),ue={class:"confirmer"},ce=ee((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"green"},[(0,i._)("path",{id:"path2",d:"M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z",fill:"none"})],-1))),pe={class:"shower"},me={class:"btngroup"};function he(e,t,n,s,l,r){return(0,i.wg)(),(0,i.iD)("div",te,[ne,(0,i._)("form",null,[oe,(0,i.wy)((0,i._)("input",{type:"text",name:"username","onUpdate:modelValue":t[0]||(t[0]=e=>this.user=e),onInput:t[1]||(t[1]=(...e)=>r.show&&r.show(...e))},null,544),[[o.nr,this.user]]),ie,(0,i._)("div",se,[(0,i.wy)((0,i._)("input",{id:"pw0",type:"password",name:"password1","onUpdate:modelValue":t[2]||(t[2]=e=>this.pw=e),onInput:t[3]||(t[3]=(...e)=>r.passwordValidator&&r.passwordValidator(...e))},null,544),[[o.nr,this.pw]]),le]),re,(0,i._)("div",ae,[(0,i._)("input",{type:"checkbox",id:"0",onClick:t[4]||(t[4]=e=>r.togglePassword(e))}),(0,i.Uk)(" Show Password ")]),de,(0,i._)("div",ue,[(0,i.wy)((0,i._)("input",{type:"password",name:"password2",id:"pw1","onUpdate:modelValue":t[5]||(t[5]=e=>this.pw2=e),onInput:t[6]||(t[6]=(...e)=>r.show&&r.show(...e))},null,544),[[o.nr,this.pw2]]),ce]),(0,i._)("div",pe,[(0,i._)("input",{type:"checkbox",id:"1",onClick:t[7]||(t[7]=e=>r.togglePassword(e))}),(0,i.Uk)(" Show Password ")]),(0,i._)("div",me,[(0,i._)("button",{class:"previous",onClick:t[8]||(t[8]=(...e)=>r.previous&&r.previous(...e))},"previous"),(0,i._)("button",{class:"next",disabled:"",onClick:t[9]||(t[9]=(...e)=>r.next&&r.next(...e))},"submit")])])])}var fe={name:"SignupApp",props:{m:Number},data(){return{user:"",pw:"",pw2:""}},methods:{show(){""!=this.user&&this.pw==this.pw2&&""!=this.pw?(document.querySelector(".next").disabled=!1,document.querySelector("#path2").style.fill="green"):(document.querySelector(".next").disabled=!0,document.querySelector("#path2").style.fill="red"),""!=this.pw2?document.querySelectorAll(".shower")[1].style.display="block":(document.querySelectorAll(".shower")[1].style.display="none",document.querySelector("#path2").style.fill="none")},next(){this.$emit("movef",{id:4,username:this.user,password:this.pw2})},previous(){this.$emit("moveb",{id:4})},passwordValidator(){this.pw.length>=8?(document.querySelector("#path1").style.fill="green",document.querySelector("small").style.display="none",document.querySelector("#pw0").style.marginBottom="0.7rem"):(document.querySelector("#path1").style.fill="red",document.querySelector("small").style.display="block",document.querySelector("#pw0").style.marginBottom="0px",document.querySelector(".next").disabled=!0),""==this.pw&&(document.querySelector("small").style.display="none",document.querySelector("#path1").style.fill="none",document.querySelector(".shower").style.display="none"),""!=this.pw&&(document.querySelector(".shower").style.display="block")},togglePassword(e){var t=e.currentTarget.id;t="pw"+t,1==e.currentTarget.checked?document.getElementById(t).type="text":document.getElementById(t).type="password"}}};const ve=(0,S.Z)(fe,[["render",he],["__scopeId","data-v-41a0d5d1"]]);var we=ve,ye=n(577);const be=e=>((0,i.dD)("data-v-13658b81"),e=e(),(0,i.Cn)(),e),ge={id:"container"},_e=be((()=>(0,i._)("h1",null,"Welcome,",-1))),xe={key:0};function ke(e,t,n,o,s,l){return(0,i.wg)(),(0,i.iD)("div",ge,[_e,(0,i._)("h2",null,(0,ye.zw)(n.info.title)+" "+(0,ye.zw)(n.info.lastName)+" "+(0,ye.zw)(n.info.firstName),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.info,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{id:"infoBox",key:e},[0!==e.length&&"title"!=t&&"firstName"!=t&&"lastName"!=t&&"username"!=t&&"password"!=t?((0,i.wg)(),(0,i.iD)("div",xe,[(0,i._)("h3",null,(0,ye.zw)(t),1),(0,i._)("p",null,(0,ye.zw)(e),1)])):(0,i.kq)("",!0)])))),128))])}var Ce={name:"DetailsApp",props:{info:Object}};const Se=(0,S.Z)(Ce,[["render",ke],["__scopeId","data-v-13658b81"]]);var qe=Se,Ne={name:"App",components:{Basic:N,Contact:A,Personal:X,Signup:we,Details:qe},data(){return{s:1,info:{title:"",firstName:"",lastName:"",Company:"","Email Address":"","Phone Number":"",Gender:"","Date of Birth":"","National Identification Number":"",username:"",password:""}}},methods:{next(e){var t=e.id.toString();switch(document.getElementById(t).style.backgroundColor="#3535dd",document.getElementById(t).style.color="white",e.id<4&&(t="c"+t,document.getElementById(t).style.backgroundColor="#3535dd"),this.s=e.id+1,e.id){case 1:this.info.title=e.title,this.info.firstName=e.firstName,this.info.lastName=e.lastName,this.info.Company=e.company;break;case 2:this.info["Email Address"]=e.email,this.info["Phone Number"]=e.phoneNumber;break;case 3:this.info.Gender=e.gender,this.info["Date of Birth"]=e.dob,this.info["National Identification Number"]=e.nin;break;case 4:this.info.username=e.username,this.info.password=e.password;break}},previous(e){this.s=e.id-1}}};const Me=(0,S.Z)(Ne,[["render",u]]);var Ie=Me;(0,o.ri)(Ie).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,s){if(!o){var l=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],s=e[u][2];for(var r=!0,a=0;a<o.length;a++)(!1&s||l>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(r=!1,s<l&&(l=s));if(r){e.splice(u--,1);var d=i();void 0!==d&&(t=d)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,i,s]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,s,l=o[0],r=o[1],a=o[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(a)var u=a(n)}for(t&&t(o);d<l.length;d++)s=l[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},o=self["webpackChunkform_app"]=self["webpackChunkform_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(504)}));o=n.O(o)})();
//# sourceMappingURL=app.20a31444.js.map