import{a as M,b as N,d as S,f as E,g as x}from"./chunk-RRHKEHBO.js";import{b as D,c as P}from"./chunk-WDPDYX7B.js";import{d as I}from"./chunk-VK4IWBEN.js";import{Aa as u,Mb as R,Q as d,Sa as f,T as p,Ua as g,Va as y,Xa as C,Ya as v,Z as h,Zb as F,ba as m,fa as c,tb as b,ub as A,vb as w}from"./chunk-ZE2CB7U5.js";var O=[{path:"dashboard",loadComponent:()=>import("./chunk-MG32ZWIY.js").then(t=>t.default),children:[{path:"welcome",loadComponent:()=>import("./chunk-STGO677U.js").then(t=>t.default)},{path:"profile",loadComponent:()=>import("./chunk-6O5EA6FT.js").then(t=>t.default),children:[{path:"info-user",loadComponent:()=>import("./chunk-ECUVTPK7.js").then(t=>t.default)},{path:"abstract",loadComponent:()=>import("./chunk-7R67UKBZ.js").then(t=>t.default)},{path:"jobs",loadComponent:()=>import("./chunk-FDN6GI3A.js").then(t=>t.default)},{path:"skills",loadComponent:()=>import("./chunk-TWSTS44V.js").then(t=>t.default)},{path:"courses",loadComponent:()=>import("./chunk-MF35JZ25.js").then(t=>t.default)}]},{path:"glossary",loadComponent:()=>import("./chunk-VP4QI7L4.js").then(t=>t.default)},{path:"templates",loadComponent:()=>import("./chunk-PRBPH2MO.js").then(t=>t.default)},{path:"diplomas",loadComponent:()=>import("./chunk-YRRQZVUL.js").then(t=>t.default)}]},{path:"**",redirectTo:"dashboard/welcome",pathMatch:"full"}];var B="@",z=(()=>{let e=class e{constructor(r,n,i,a,s){this.doc=r,this.delegate=n,this.zone=i,this.animationType=a,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=h(g,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-K6DVYNUE.js").then(n=>n)).catch(n=>{throw new d(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(r,n){let i=this.delegate.createRenderer(r,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new l(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let j=s.createRenderer(r,n);a.use(j),this.scheduler?.notify(9)}).catch(s=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){f()},e.\u0275prov=p({token:e,factory:e.\u0275fac});let t=e;return t})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,r,n){this.delegate.insertBefore(e,o,r,n)}removeChild(e,o,r){this.delegate.removeChild(e,o,r)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,r,n){this.delegate.setAttribute(e,o,r,n)}removeAttribute(e,o,r){this.delegate.removeAttribute(e,o,r)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,r,n){this.delegate.setStyle(e,o,r,n)}removeStyle(e,o,r){this.delegate.removeStyle(e,o,r)}setProperty(e,o,r){this.shouldReplay(o)&&this.replay.push(n=>n.setProperty(e,o,r)),this.delegate.setProperty(e,o,r)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,r){return this.shouldReplay(o)&&this.replay.push(n=>n.listen(e,o,r)),this.delegate.listen(e,o,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(B)}};function T(t="animations"){return C("NgAsyncAnimations"),c([{provide:y,useFactory:(e,o,r)=>new z(e,o,r,t),deps:[I,M,v]},{provide:u,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var k={providers:[F({eventCoalescing:!0}),E(O,x()),T(),D(P())]};var _=(()=>{let e=class e{constructor(){this.title="curriculunVitae"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[R],decls:2,vars:0,template:function(n,i){n&1&&(b(0,"div"),w(1,"router-outlet"),A())},dependencies:[S]});let t=e;return t})();N(_,k).catch(t=>console.error(t));
