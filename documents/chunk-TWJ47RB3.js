import{a as V}from"./chunk-EKVDNAGW.js";import{a as B}from"./chunk-JECGZSFY.js";import{l as O,m as $}from"./chunk-OVY5MO4W.js";import{$ as S,Db as a,Eb as _,Fb as h,Gb as j,Hb as D,Kb as I,Lb as F,Mb as P,Oa as l,X as g,Zb as M,a as c,b as p,eb as u,fb as E,gb as v,ja as y,ka as w,kb as C,lb as L,mb as d,nb as m,ob as x,pb as n,qb as o,rb as k,sb as T,wb as J,xb as b}from"./chunk-P7VCVAHH.js";var N=(e,i,t)=>({"text-purple-500":e,"font-bold":i,"text-gray-600":t});function A(e,i){if(e&1){let t=T();n(0,"li")(1,"button",4),J("click",function(){let r=y(t).$implicit,f=b();return w(f.showJob(r.endDate))}),a(2),F(3,"date"),o()()}if(e&2){let t=i.$implicit;C(I(6,N,t.show,t.show,!t.show)),l(2),h(" ",P(3,3,t.endDate,"yyyy")," | ")}}function U(e,i){if(e&1&&(n(0,"li"),a(1),o()),e&2){let t=i.$implicit;l(),_(t)}}function q(e,i){if(e&1&&(n(0,"table",7)(1,"thead",8)(2,"tr",8)(3,"td",9),a(4,"Empresa: "),o(),n(5,"td",10),a(6),o()(),n(7,"tr",8)(8,"td",9),a(9,"Puesto :"),o(),n(10,"td",10),a(11),o()(),n(12,"tr",8)(13,"td",9),a(14,"Fecha : "),o(),n(15,"td",10),a(16),o()()(),n(17,"tbody")(18,"tr",11)(19,"td",12),m(20,U,2,1,"li",null,d),o()()()()),e&2){let t=b().$implicit;l(6),h("",t.enterprise," "),l(5),_(t.jobTitle),l(5),j(" ",t.startDate," - ",t.endDate,""),l(4),x(t.activities)}}function z(e,i){if(e&1&&u(0,q,22,4,"table",7),e&2){let t=i.$implicit;L(t.show?0:-1)}}function G(e,i){if(e&1&&(n(0,"div",5)(1,"div",6),m(2,z,1,1,null,null,d),o()()),e&2){let t=b();l(2),x(t.jobList)}}function H(e,i){e&1&&k(0,"app-loading")}var ee=(()=>{let i=class i{constructor(){this.userProfile=g(B),this.user=M(()=>this.userProfile.user()),this.jobList=this.getJobListLocalStorage()}ngOnInit(){this.setJobListLocalStorage(),console.log(this.jobList)}getJobListLocalStorage(){return localStorage.getItem("dateShowTab")?JSON.parse(localStorage.getItem("dateShowTab")):[]}setJobListLocalStorage(){this.user()&&(this.jobList=this.user().profesionalProfile.workExperience.map((s,r)=>r>0?p(c({},s),{show:!1}):p(c({},s),{show:!0})),localStorage.setItem("dateShowTab",JSON.stringify(this.jobList)))}showJob(s){this.jobList=this.user().profesionalProfile.workExperience.map(r=>s===r.endDate?p(c({},r),{show:!0}):p(c({},r),{show:!1})),console.log(this.jobList)}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=S({type:i,selectors:[["app-jobs"]],standalone:!0,features:[D],decls:10,vars:0,consts:[[1,"pt-4","pl-5","text-center"],[1,"mb-4","border-b","border-gray-200","dark:border-gray-700","pl-14"],[1,"flex","flex-wrap","-mb-px","text-sm","text-center"],[3,"class"],["routerLinkActive","active","type","button",1,"inline-block","p-4","border-b-2","rounded-t-lg","text-lg",3,"click"],[1,"pl-8","pr-14","pb-14"],[1,"p-5","rounded-lg","backdrop-blur-xl","text-justify","text-lg"],[1,"min-w-full","text-left","text-md","font-light","text-surface","txt-desv"],[1,"border-b","border-neutral-200"],[1,"px-6","py-4","text-blue-900","font-light"],[1,"text-black","font-mono","font-semibold"],[1,"border-b","border-neutral-200","text-justify"],["colSpan","2",1,"px-6","py-4"]],template:function(r,f){r&1&&(n(0,"h4",0),a(1,"Experiencia laboral"),o(),n(2,"div",1)(3,"ul",2),m(4,A,4,10,"li",3,d),o()(),u(6,G,4,0)(7,H,1,0),E(8,6,null,null,7),v(1e3)),r&2&&(l(4),x(f.jobList))},dependencies:[$,O,V],styles:["tr[_ngcontent-%COMP%]{transition:background-color .3s}tr[_ngcontent-%COMP%]:hover{background-color:#e6b8e43d}"]});let e=i;return e})();export{ee as a};
