import{a as h}from"./chunk-ODS6EMNX.js";import{a as g}from"./chunk-WZTC4GFW.js";import{n as u}from"./chunk-QZNVYRBW.js";import{$b as f,Db as c,Ib as d,Y as r,aa as o,eb as a,fb as p,gb as m,pb as l,qb as n,rb as i}from"./chunk-TTYKXLMU.js";var k=()=>[import("./chunk-F5NPCAK6.js").then(e=>e.SkillsChartsComponent)];function v(e,t){e&1&&(l(0,"div",1)(1,"div",2),i(2,"app-skills-charts",3),n(),l(3,"div",2),i(4,"app-skills-charts",4),n(),l(5,"div",5),i(6,"app-skills-charts",6),n()())}function y(e,t){e&1&&i(0,"app-loading")}var I=(()=>{let t=class t{constructor(){this.userProfile=r(g),this.user=f(()=>this.userProfile.user()||this.getStorageUser()),this.saveStorageUser()}ngOnInit(){}getStorageUser(){return localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):[]}saveStorageUser(){this.user()&&localStorage.setItem("user",JSON.stringify(this.user()))}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=o({type:t,selectors:[["app-skills"]],standalone:!0,features:[d],decls:8,vars:0,consts:[[1,"pt-4","pl-5","text-center"],[1,"grid","grid-cols-2","gap-4","bg-white"],[1,"p-5"],["skillType","skillLanguaje","type","combo","title","Habilidades del Lenguaje"],["skillType","skillTechnical","type","single","title","Habilidades T\xE9cnicas"],[1,"col-span-2","p-5"],["skillType","skillSoft","type","single","title","Habilidades Interpersonales"]],template:function(s,C){s&1&&(l(0,"h4",0),c(1,"Habilidades"),n(),i(2,"br")(3,"hr"),a(4,v,7,0)(5,y,1,0),p(6,4,k,null,5),m(1e3))},dependencies:[u,h],styles:[".chartjs-tooltip[_ngcontent-%COMP%]{background-color:#efefe5c1!important}"]});let e=t;return e})();export{I as a};