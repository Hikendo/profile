import{a as w}from"./chunk-YYS37JCY.js";import{c as j}from"./chunk-TZHPEYTZ.js";import{m as T,n as M}from"./chunk-GLNNAFS2.js";import{Fb as t,Gb as p,Hb as I,Kb as U,Ma as y,Pb as f,Qa as i,Rb as c,Y as P,aa as g,dc as F,eb as h,fb as E,gb as b,jb as D,qb as e,rb as n,sb as l,yb as C}from"./chunk-VQAJBVA3.js";var B=()=>[T];function G(r,o){if(r&1&&(e(0,"div",1)(1,"div",2),l(2,"img",3),n(),e(3,"div",4)(4,"div",5)(5,"div",6),t(6,"Nombre : "),l(7,"br"),e(8,"span",7),t(9),n()(),e(10,"ul",8)(11,"li",9),t(12,"Tel\xE9fono : "),l(13,"br"),e(14,"span",7),t(15),n()(),e(16,"li",9),t(17,"Email :"),l(18,"br"),e(19,"span",7),t(20),n()(),e(21,"li",9),t(22,"Grado Acad\xE9mico :"),l(23,"br"),e(24,"span",7),t(25),n()(),e(26,"li",9),t(27,"Instituci\xF3n :"),l(28,"br"),e(29,"span",7),t(30),n()(),e(31,"li",9),t(32,"Fecha :"),l(33,"br"),e(34,"span",7),t(35),f(36,"date"),n(),t(37," - "),e(38,"span",7),t(39),f(40,"date"),n()()()()()()),r&2){let d,s,m,u,x,_,v,S,a=C();i(2),D("src",(d=a.user())==null||d.profesionalProfile==null||d.profesionalProfile.data==null?null:d.profesionalProfile.data.imgUrl,y),i(7),I("",(s=a.user())==null||s.profesionalProfile==null?null:s.profesionalProfile.name," "),i(6),p((m=a.user())==null?null:m.profesionalProfile.data.phoneNumber),i(5),p((u=a.user())==null||u.profesionalProfile==null||u.profesionalProfile.data==null?null:u.profesionalProfile.data.email),i(5),p((x=a.user())==null?null:x.profesionalProfile.education[0].academicDegree),i(5),p((_=a.user())==null?null:_.profesionalProfile.education[0].institution),i(5),p(c(36,8,(v=a.user())==null?null:v.profesionalProfile.education[0].startDate,"yyyy")),i(4),p(c(40,11,(S=a.user())==null?null:S.profesionalProfile.education[0].endDate,"yyyy"))}}function N(r,o){r&1&&l(0,"app-loading")}var J=(()=>{let o=class o{constructor(){this.userProfile=P(j),this.user=F(()=>this.userProfile.user())}getUser(){console.log(this.user())}};o.\u0275fac=function(m){return new(m||o)},o.\u0275cmp=g({type:o,selectors:[["app-user"]],standalone:!0,features:[U],decls:6,vars:0,consts:[[1,"pt-4","pl-5","text-center"],[1,"p-6","text-justify","text-lg","grid","grid-cols-5","gap-2","backdrop-blur-sm"],[1,"col-span-2"],["width","90%","alt","Sunset in the mountains",1,"rounded-3xl","p-2",3,"src"],[1,"col-span-3","txt-desv"],[1,"font-normal","text-xl"],[1,"font-normal","text-2xl"],[1,"font-bold"],[1,"text-gray-700"],[1,"mt-3"]],template:function(m,u){m&1&&(e(0,"h4",0),t(1,"Datos Generales"),n(),h(2,G,41,14)(3,N,1,0),E(4,2,B,null,3),b(1e3))},dependencies:[M,w]});let r=o;return r})();export{J as a};