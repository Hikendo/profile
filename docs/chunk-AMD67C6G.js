import"./chunk-N6YNCHDY.js";import"./chunk-P6CMD4AT.js";import{N as $e,Z as wt,_ as Ye,c as je,ra as He}from"./chunk-OE32TZQN.js";import"./chunk-SZR6QNXC.js";import"./chunk-TCG7F4HX.js";import"./chunk-4E2GVZ5E.js";import"./chunk-TIJPPFAI.js";import{a as We,b as Ue,c as Be}from"./chunk-I3G33I47.js";import"./chunk-QKLFRKBY.js";import{d as Fe,i as Le,k as De,n as Re}from"./chunk-MDFCGTKH.js";import{Ab as _e,Bb as Te,Gb as xt,Ib as Ne,Lb as q,Ma as Ae,Nb as ze,Ra as T,Sa as A,T as Ht,U as be,Xa as Oe,Z as ht,ba as G,ca as ye,da as ke,gb as bt,jb as Se,ka as gt,kb as F,la as xe,ma as we,pb as Ie,qb as Pe,rb as I,sb as N,tb as X,ua as Ce,ub as Ee,vb as Me,yb as yt,zb as kt}from"./chunk-SLK6PVAY.js";function Ve(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ve(Object(n),!0).forEach(function(a){y(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function zt(t){"@babel/helpers - typeof";return zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zt(t)}function na(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ge(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function aa(t,e,n){return e&&Ge(t.prototype,e),n&&Ge(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function re(t,e){return ia(t)||sa(t,e)||yn(t,e)||la()}function dt(t){return ra(t)||oa(t)||yn(t)||fa()}function ra(t){if(Array.isArray(t))return Gt(t)}function ia(t){if(Array.isArray(t))return t}function oa(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function sa(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function yn(t,e){if(t){if(typeof t=="string")return Gt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gt(t,e)}}function Gt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function fa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function la(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xe=function(){},ie={},kn={},xn=null,wn={mark:Xe,measure:Xe};try{typeof window<"u"&&(ie=window),typeof document<"u"&&(kn=document),typeof MutationObserver<"u"&&(xn=MutationObserver),typeof performance<"u"&&(wn=performance)}catch{}var ca=ie.navigator||{},qe=ca.userAgent,Ke=qe===void 0?"":qe,H=ie,g=kn,Je=xn,Ct=wn,ti=!!H.document,j=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",Cn=~Ke.indexOf("MSIE")||~Ke.indexOf("Trident/"),At,Ot,St,It,Pt,L="___FONT_AWESOME___",Xt=16,An="fa",On="svg-inline--fa",Q="data-fa-i2svg",qt="data-fa-pseudo-element",ua="data-fa-pseudo-element-pending",oe="data-prefix",se="data-icon",Qe="fontawesome-i2svg",ma="async",da=["HTML","HEAD","STYLE","SCRIPT"],Sn=function(){try{return!0}catch{return!1}}(),h="classic",b="sharp",fe=[h,b];function pt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[h]}})}var ft=pt((At={},y(At,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),y(At,b,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),At)),lt=pt((Ot={},y(Ot,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(Ot,b,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ot)),ct=pt((St={},y(St,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(St,b,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),St)),pa=pt((It={},y(It,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(It,b,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),It)),va=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,In="fa-layers-text",ha=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ga=pt((Pt={},y(Pt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(Pt,b,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Pt)),Pn=[1,2,3,4,5,6,7,8,9,10],ba=Pn.concat([11,12,13,14,15,16,17,18,19,20]),ya=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ut=new Set;Object.keys(lt[h]).map(ut.add.bind(ut));Object.keys(lt[b]).map(ut.add.bind(ut));var ka=[].concat(fe,dt(ut),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",K.GROUP,K.SWAP_OPACITY,K.PRIMARY,K.SECONDARY]).concat(Pn.map(function(t){return"".concat(t,"x")})).concat(ba.map(function(t){return"w-".concat(t)})),ot=H.FontAwesomeConfig||{};function xa(t){var e=g.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function wa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}g&&typeof g.querySelector=="function"&&(Ze=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Ze.forEach(function(t){var e=re(t,2),n=e[0],a=e[1],r=wa(xa(n));r!=null&&(ot[a]=r)}));var Ze,En={styleDefault:"solid",familyDefault:"classic",cssPrefix:An,replacementClass:On,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);var at=c(c({},En),ot);at.autoReplaceSvg||(at.observeMutations=!1);var m={};Object.keys(En).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(n){at[t]=n,st.forEach(function(a){return a(m)})},get:function(){return at[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){at.cssPrefix=e,st.forEach(function(n){return n(m)})},get:function(){return at.cssPrefix}});H.FontAwesomeConfig=m;var st=[];function Ca(t){return st.push(t),function(){st.splice(st.indexOf(t),1)}}var Y=Xt,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Aa(t){if(!(!t||!j)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=g.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return g.head.insertBefore(e,a),t}}var Oa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mt(){for(var t=12,e="";t-- >0;)e+=Oa[Math.random()*62|0];return e}function rt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function le(t){return t.classList?rt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Mn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Mn(t[n]),'" ')},"").trim()}function Dt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ce(t){return t.size!==z.size||t.x!==z.x||t.y!==z.y||t.rotate!==z.rotate||t.flipX||t.flipY}function Ia(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Pa(t){var e=t.transform,n=t.width,a=n===void 0?Xt:n,r=t.height,i=r===void 0?Xt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Cn?f+="translate(".concat(e.x/Y-a/2,"em, ").concat(e.y/Y-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/Y,"em), calc(-50% + ").concat(e.y/Y,"em)) "):f+="translate(".concat(e.x/Y,"em, ").concat(e.y/Y,"em) "),f+="scale(".concat(e.size/Y*(e.flipX?-1:1),", ").concat(e.size/Y*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Ea=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function _n(){var t=An,e=On,n=m.cssPrefix,a=m.replacementClass,r=Ea;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var tn=!1;function Wt(){m.autoAddCss&&!tn&&(Aa(_n()),tn=!0)}var Ma={mixout:function(){return{dom:{css:_n,insertCss:Wt}}},hooks:function(){return{beforeDOMElementCreation:function(){Wt()},beforeI2svg:function(){Wt()}}}},D=H||{};D[L]||(D[L]={});D[L].styles||(D[L].styles={});D[L].hooks||(D[L].hooks={});D[L].shims||(D[L].shims=[]);var E=D[L],Tn=[],_a=function t(){g.removeEventListener("DOMContentLoaded",t),Ft=1,Tn.map(function(e){return e()})},Ft=!1;j&&(Ft=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),Ft||g.addEventListener("DOMContentLoaded",_a));function Ta(t){j&&(Ft?setTimeout(t,0):Tn.push(t))}function vt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Mn(t):"<".concat(e," ").concat(Sa(a),">").concat(i.map(vt).join(""),"</").concat(e,">")}function en(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Na=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Ut=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?Na(n,r):n,f,u,l;for(a===void 0?(f=1,l=e[i[0]]):(f=0,l=a);f<o;f++)u=i[f],l=s(l,e[u],u,e);return l};function za(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Kt(t){var e=za(t);return e.length===1?e[0].toString(16):null}function Fa(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function nn(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Jt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=nn(e);typeof E.hooks.addPack=="function"&&!r?E.hooks.addPack(t,nn(e)):E.styles[t]=c(c({},E.styles[t]||{}),i),t==="fas"&&Jt("fa",e)}var Et,Mt,_t,tt=E.styles,La=E.shims,Da=(Et={},y(Et,h,Object.values(ct[h])),y(Et,b,Object.values(ct[b])),Et),ue=null,Nn={},zn={},Fn={},Ln={},Dn={},Ra=(Mt={},y(Mt,h,Object.keys(ft[h])),y(Mt,b,Object.keys(ft[b])),Mt);function ja(t){return~ka.indexOf(t)}function $a(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ja(r)?r:null}var Rn=function(){var e=function(i){return Ut(tt,function(o,s,f){return o[f]=Ut(s,i,{}),o},{})};Nn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),zn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Dn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in tt||m.autoFetchSvg,a=Ut(La,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Fn=a.names,Ln=a.unicodes,ue=Rt(m.styleDefault,{family:m.familyDefault})};Ca(function(t){ue=Rt(t.styleDefault,{family:m.familyDefault})});Rn();function me(t,e){return(Nn[t]||{})[e]}function Ya(t,e){return(zn[t]||{})[e]}function J(t,e){return(Dn[t]||{})[e]}function jn(t){return Fn[t]||{prefix:null,iconName:null}}function Ha(t){var e=Ln[t],n=me("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return ue}var de=function(){return{prefix:null,iconName:null,rest:[]}};function Rt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?h:n,r=ft[a][t],i=lt[a][t]||lt[a][r],o=t in E.styles?t:null;return i||o||null}var an=(_t={},y(_t,h,Object.keys(ct[h])),y(_t,b,Object.keys(ct[b])),_t);function jt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},y(e,h,"".concat(m.cssPrefix,"-").concat(h)),y(e,b,"".concat(m.cssPrefix,"-").concat(b)),e),o=null,s=h;(t.includes(i[h])||t.some(function(u){return an[h].includes(u)}))&&(s=h),(t.includes(i[b])||t.some(function(u){return an[b].includes(u)}))&&(s=b);var f=t.reduce(function(u,l){var d=$a(m.cssPrefix,l);if(tt[l]?(l=Da[s].includes(l)?pa[s][l]:l,o=l,u.prefix=l):Ra[s].indexOf(l)>-1?(o=l,u.prefix=Rt(l,{family:s})):d?u.iconName=d:l!==m.replacementClass&&l!==i[h]&&l!==i[b]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var p=o==="fa"?jn(u.iconName):{},v=J(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||v||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!tt.far&&tt.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},de());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===b&&(tt.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=J(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var Wa=function(){function t(){na(this,t),this.definitions={}}return aa(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=c(c({},n.definitions[s]||{}),o[s]),Jt(s,o[s]);var f=ct[h][s];f&&Jt(f,o[s]),Rn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,l=u[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][f]=u}),n}}]),t}(),rn=[],et={},nt={},Ua=Object.keys(nt);function Ba(t,e){var n=e.mixoutsTo;return rn=t,et={},Object.keys(nt).forEach(function(a){Ua.indexOf(a)===-1&&delete nt[a]}),rn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),zt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){et[o]||(et[o]=[]),et[o].push(i[o])})}a.provides&&a.provides(nt)}),n}function Qt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=et[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function Z(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=et[t]||[];r.forEach(function(i){i.apply(null,n)})}function R(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return nt[t]?nt[t].apply(null,e):void 0}function Zt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||W();if(e)return e=J(n,e)||e,en($n.definitions,n,e)||en(E.styles,n,e)}var $n=new Wa,Va=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,Z("noAuto")},Ga={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(Z("beforeI2svg",e),R("pseudoElements2svg",e),R("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ta(function(){qa({autoReplaceSvgRoot:n}),Z("watch",e)})}},Xa={icon:function(e){if(e===null)return null;if(zt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:J(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Rt(e[0]);return{prefix:a,iconName:J(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(va))){var r=jt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:J(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=W();return{prefix:i,iconName:J(i,e)||e}}}},O={noAuto:Va,config:m,dom:Ga,parse:Xa,library:$n,findIconDefinition:Zt,toHtml:vt},qa=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?g:n;(Object.keys(E.styles).length>0||m.autoFetchSvg)&&j&&m.autoReplaceSvg&&O.dom.i2svg({node:a})};function $t(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return vt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(j){var a=g.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ka(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ce(o)&&n.found&&!a.found){var s=n.width,f=n.height,u={x:s/f/2,y:.5};r.style=Dt(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ja(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function pe(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,u=t.maskId,l=t.titleId,d=t.extra,p=t.watchable,v=p===void 0?!1:p,x=a.found?a:n,S=x.width,P=x.height,M=r==="fak",k=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function($){return d.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(d.classes).join(" "),w={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(P)})},_=M&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/P*16*.0625,"em")}:{};v&&(w.attributes[Q]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(l||mt())},children:[f]}),delete w.attributes.title);var C=c(c({},w),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:s,styles:c(c({},_),d.styles)}),B=a.found&&n.found?R("generateAbstractMask",C)||{children:[],attributes:{}}:R("generateAbstractIcon",C)||{children:[],attributes:{}},V=B.children,Yt=B.attributes;return C.children=V,C.attributes=Yt,s?Ja(C):Ka(C)}function on(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[Q]="");var l=c({},o.styles);ce(r)&&(l.transform=Pa({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);var d=Dt(l);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Qa(t){var e=t.content,n=t.title,a=t.extra,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Dt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Bt=E.styles;function te(t){var e=t[0],n=t[1],a=t.slice(4),r=re(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(K.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Za={found:!1,width:512,height:512};function tr(t,e){!Sn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ee(t,e){var n=e;return e==="fa"&&m.styleDefault!==null&&(e=W()),new Promise(function(a,r){var i={found:!1,width:512,height:512,icon:R("missingIconAbstract")||{}};if(n==="fa"){var o=jn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Bt[e]&&Bt[e][t]){var s=Bt[e][t];return a(te(s))}tr(t,e),a(c(c({},Za),{},{icon:m.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var sn=function(){},ne=m.measurePerformance&&Ct&&Ct.mark&&Ct.measure?Ct:{mark:sn,measure:sn},it='FA "6.5.2"',er=function(e){return ne.mark("".concat(it," ").concat(e," begins")),function(){return Yn(e)}},Yn=function(e){ne.mark("".concat(it," ").concat(e," ends")),ne.measure("".concat(it," ").concat(e),"".concat(it," ").concat(e," begins"),"".concat(it," ").concat(e," ends"))},ve={begin:er,end:Yn},Tt=function(){};function fn(t){var e=t.getAttribute?t.getAttribute(Q):null;return typeof e=="string"}function nr(t){var e=t.getAttribute?t.getAttribute(oe):null,n=t.getAttribute?t.getAttribute(se):null;return e&&n}function ar(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function rr(){if(m.autoReplaceSvg===!0)return Nt.replace;var t=Nt[m.autoReplaceSvg];return t||Nt.replace}function ir(t){return g.createElementNS("http://www.w3.org/2000/svg",t)}function or(t){return g.createElement(t)}function Hn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?ir:or:n;if(typeof t=="string")return g.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Hn(o,{ceFn:a}))}),r}function sr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Nt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Hn(r),n)}),n.getAttribute(Q)===null&&m.keepOriginalSource){var a=g.createComment(sr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~le(n).indexOf(m.replacementClass))return Nt.replace(e);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return vt(s)}).join(`
`);n.setAttribute(Q,""),n.innerHTML=o}};function ln(t){t()}function Wn(t,e){var n=typeof e=="function"?e:Tt;if(t.length===0)n();else{var a=ln;m.mutateApproach===ma&&(a=H.requestAnimationFrame||ln),a(function(){var r=rr(),i=ve.begin("mutate");t.map(r),i(),n()})}}var he=!1;function Un(){he=!0}function ae(){he=!1}var Lt=null;function cn(t){if(Je&&m.observeMutations){var e=t.treeCallback,n=e===void 0?Tt:e,a=t.nodeCallback,r=a===void 0?Tt:a,i=t.pseudoElementsCallback,o=i===void 0?Tt:i,s=t.observeMutationsRoot,f=s===void 0?g:s;Lt=new Je(function(u){if(!he){var l=W();rt(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!fn(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&fn(d.target)&&~ya.indexOf(d.attributeName))if(d.attributeName==="class"&&nr(d.target)){var p=jt(le(d.target)),v=p.prefix,x=p.iconName;d.target.setAttribute(oe,v||l),x&&d.target.setAttribute(se,x)}else ar(d.target)&&r(d.target)})}}),j&&Lt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fr(){Lt&&Lt.disconnect()}function lr(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function cr(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=jt(le(t));return r.prefix||(r.prefix=W()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ya(r.prefix,t.innerText)||me(r.prefix,Kt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ur(t){var e=rt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||mt()):(e["aria-hidden"]="true",e.focusable="false")),e}function mr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function un(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=cr(t),a=n.iconName,r=n.prefix,i=n.rest,o=ur(t),s=Qt("parseNodeAttributes",{},t),f=e.styleParser?lr(t):[];return c({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var dr=E.styles;function Bn(t){var e=m.autoReplaceSvg==="nest"?un(t,{styleParser:!1}):un(t);return~e.extra.classes.indexOf(In)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}var U=new Set;fe.map(function(t){U.add("fa-".concat(t))});Object.keys(ft[h]).map(U.add.bind(U));Object.keys(ft[b]).map(U.add.bind(U));U=dt(U);function mn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var n=g.documentElement.classList,a=function(d){return n.add("".concat(Qe,"-").concat(d))},r=function(d){return n.remove("".concat(Qe,"-").concat(d))},i=m.autoFetchSvg?U:fe.map(function(l){return"fa-".concat(l)}).concat(Object.keys(dr));i.includes("fa")||i.push("fa");var o=[".".concat(In,":not([").concat(Q,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=ve.begin("onTree"),u=s.reduce(function(l,d){try{var p=Bn(d);p&&l.push(p)}catch(v){Sn||v.name==="MissingIcon"&&console.error(v)}return l},[]);return new Promise(function(l,d){Promise.all(u).then(function(p){Wn(p,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),l()})}).catch(function(p){f(),d(p)})})}function pr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Bn(t).then(function(n){n&&Wn([n],e)})}function vr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Zt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Zt(r||{})),t(a,c(c({},n),{},{mask:r}))}}var hr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?z:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,u=n.maskId,l=u===void 0?null:u,d=n.title,p=d===void 0?null:d,v=n.titleId,x=v===void 0?null:v,S=n.classes,P=S===void 0?[]:S,M=n.attributes,k=M===void 0?{}:M,w=n.styles,_=w===void 0?{}:w;if(e){var C=e.prefix,B=e.iconName,V=e.icon;return $t(c({type:"icon"},e),function(){return Z("beforeDOMElementCreation",{iconDefinition:e,params:n}),m.autoA11y&&(p?k["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(x||mt()):(k["aria-hidden"]="true",k.focusable="false")),pe({icons:{main:te(V),mask:f?te(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:B,transform:c(c({},z),r),symbol:o,title:p,maskId:l,titleId:x,extra:{attributes:k,styles:_,classes:P}})})}},gr={mixout:function(){return{icon:vr(hr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mn,n.nodeCallback=pr,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?g:a,i=n.callback,o=i===void 0?function(){}:i;return mn(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,l=a.mask,d=a.maskId,p=a.extra;return new Promise(function(v,x){Promise.all([ee(r,s),l.iconName?ee(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var P=re(S,2),M=P[0],k=P[1];v([n,pe({icons:{main:M,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Dt(s);f.length>0&&(r.style=f);var u;return ce(o)&&(u=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},br={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return $t({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(dt(i)).join(" ")},children:o}]})}}}},yr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,l=a.styles,d=l===void 0?{}:l;return $t({type:"counter",content:n},function(){return Z("beforeDOMElementCreation",{content:n,params:a}),Qa({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(dt(s))}})})}}}},kr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?z:r,o=a.title,s=o===void 0?null:o,f=a.classes,u=f===void 0?[]:f,l=a.attributes,d=l===void 0?{}:l,p=a.styles,v=p===void 0?{}:p;return $t({type:"text",content:n},function(){return Z("beforeDOMElementCreation",{content:n,params:a}),on({content:n,transform:c(c({},z),i),title:s,extra:{attributes:d,styles:v,classes:["".concat(m.cssPrefix,"-layers-text")].concat(dt(u))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Cn){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/u,f=l.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,on({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},xr=new RegExp('"',"ug"),dn=[1105920,1112319];function wr(t){var e=t.replace(xr,""),n=Fa(e,0),a=n>=dn[0]&&n<=dn[1],r=e.length===2?e[0]===e[1]:!1;return{value:Kt(r?e[0]:e),isSecondary:a||r}}function pn(t,e){var n="".concat(ua).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=rt(t.children),o=i.filter(function(V){return V.getAttribute(qt)===e})[0],s=H.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(ha),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?b:h,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?lt[p][f[2].toLowerCase()]:ga[p][u],x=wr(d),S=x.value,P=x.isSecondary,M=f[0].startsWith("FontAwesome"),k=me(v,S),w=k;if(M){var _=Ha(S);_.iconName&&_.prefix&&(k=_.iconName,v=_.prefix)}if(k&&!P&&(!o||o.getAttribute(oe)!==v||o.getAttribute(se)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var C=mr(),B=C.extra;B.attributes[qt]=e,ee(k,v).then(function(V){var Yt=pe(c(c({},C),{},{icons:{main:V,mask:de()},prefix:v,iconName:w,extra:B,watchable:!0})),$=g.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=Yt.map(function(ea){return vt(ea)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Cr(t){return Promise.all([pn(t,"::before"),pn(t,"::after")])}function Ar(t){return t.parentNode!==document.head&&!~da.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(qt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function vn(t){if(j)return new Promise(function(e,n){var a=rt(t.querySelectorAll("*")).filter(Ar).map(Cr),r=ve.begin("searchPseudoElements");Un(),Promise.all(a).then(function(){r(),ae(),e()}).catch(function(){r(),ae(),n()})})}var Or={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=vn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?g:a;m.searchPseudoElements&&vn(r)}}},hn=!1,Sr={mixout:function(){return{dom:{unwatch:function(){Un(),hn=!0}}}},hooks:function(){return{bootstrap:function(){cn(Qt("mutationObserverCallbacks",{}))},noAuto:function(){fr()},watch:function(n){var a=n.observeMutationsRoot;hn?ae():cn(Qt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},gn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Ir={mixout:function(){return{parse:{transform:function(n){return gn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=gn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(l)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:c({},v.outer),children:[{tag:"g",attributes:c({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),v.path)}]}]}}}},Vt={x:0,y:0,width:"100%",height:"100%"};function bn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Pr(t){return t.tag==="g"?t.children:[t]}var Er={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?jt(r.split(" ").map(function(o){return o.trim()})):de();return i.prefix||(i.prefix=W()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,u=i.width,l=i.icon,d=o.width,p=o.icon,v=Ia({transform:f,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:c(c({},Vt),{},{fill:"white"})},S=l.children?{children:l.children.map(bn)}:{},P={tag:"g",attributes:c({},v.inner),children:[bn(c({tag:l.tag,attributes:c(c({},l.attributes),v.path)},S))]},M={tag:"g",attributes:c({},v.outer),children:[P]},k="mask-".concat(s||mt()),w="clip-".concat(s||mt()),_={tag:"mask",attributes:c(c({},Vt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,M]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Pr(p)},_]};return a.push(C,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(k,")")},Vt)}),{children:a,attributes:r}}}},Mr={provides:function(e){var n=!1;H.matchMedia&&(n=H.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},_r={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Tr=[Ma,gr,br,yr,kr,Or,Sr,Ir,Er,Mr,_r];Ba(Tr,{mixoutsTo:O});var ei=O.noAuto,Vn=O.config,ni=O.library,Gn=O.dom,Xn=O.parse,ai=O.findIconDefinition,ri=O.toHtml,qn=O.icon,ii=O.layer,Nr=O.text,zr=O.counter;var Fr=["*"],Lr=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},Dr=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Rr=t=>{let e={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:t.rotate!==null,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n)},ge=new WeakSet,Kn="fa-auto-css";function jr(t,e){if(!e.autoAddCss||ge.has(t))return;if(t.getElementById(Kn)!=null){e.autoAddCss=!1,ge.add(t);return}let n=t.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id",Kn),n.innerHTML=Gn.css();let a=t.head.childNodes,r=null;for(let i=a.length-1;i>-1;i--){let o=a[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}t.head.insertBefore(n,r),e.autoAddCss=!1,ge.add(t)}var $r=t=>t.prefix!==void 0&&t.iconName!==void 0,Yr=(t,e)=>$r(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:e,iconName:t},Hr=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(a){Vn.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ht({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Wr=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...a){for(let r of a){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let i of r.icon[2])typeof i=="string"&&(this.definitions[r.prefix][i]=r)}}addIconPacks(...a){for(let r of a){let i=Object.keys(r).map(o=>r[o]);this.addIcons(...i)}}getIconDefinition(a,r){return a in this.definitions&&r in this.definitions[a]?this.definitions[a][r]:null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Ht({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Ur=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ke({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[gt]});let t=e;return t})(),Br=(()=>{let e=class e{constructor(a,r){this.renderer=a,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}};e.\u0275fac=function(r){return new(r||e)(A(Oe),A(Ce))},e.\u0275cmp=G({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[gt,q],ngContentSelectors:Fr,decls:1,vars:0,template:function(r,i){r&1&&(_e(),Te(0))},encapsulation:2});let t=e;return t})(),Qn=(()=>{let e=class e{constructor(a,r,i,o,s){this.sanitizer=a,this.config=r,this.iconLibrary=i,this.stackItem=o,this.document=ht(Fe),s!=null&&o==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){Dr();return}if(a){let r=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(r!=null){let i=this.buildParams();jr(this.document,this.config);let o=qn(r,i);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(o.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(a){let r=Yr(a,this.config.defaultPrefix);if("icon"in r)return r;let i=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return i??(Lr(r),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?Xn.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:Rr(a),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};e.\u0275fac=function(r){return new(r||e)(A(je),A(Hr),A(Wr),A(Ur,8),A(Br,8))},e.\u0275cmp=G({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,i){r&2&&(Me("innerHTML",i.renderedIconHTML,Ae),Se("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[gt,q],decls:0,vars:0,template:function(r,i){},encapsulation:2});let t=e;return t})();var Zn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ye({type:e}),e.\u0275inj=be({});let t=e;return t})();var Xr=(t,e)=>e.nameItem,qr=t=>["/dashboard/profile/",t];function Kr(t,e){t&1&&(I(0,"span"),xt(1," Solo Iconos "),N())}function Jr(t,e){if(t&1&&(I(0,"span"),xt(1),N()),t&2){let n=kt().$implicit;T(),Ne(" ",n.describe,"")}}function Qr(t,e){if(t&1){let n=Ee();I(0,"li",8),yt("click",function(){let r=xe(n).$implicit,i=kt();return we(i.toggleShowMenu(r.nameItem))}),I(1,"button",9),X(2,"fa-icon",3),bt(3,Jr,2,1,"span",4),N()()}if(t&2){let n=e.$implicit,a=kt();F("routerLink",ze(4,qr,n.nameItem)),T(),F("disabled",n.show),T(),F("icon",n.faIcon),T(),F("ngIf",a.showText)}}function Zr(t,e){t&1&&(I(0,"span"),xt(1," Regresar"),N())}var ta=(()=>{let e=class e{constructor(a,r){this.location=a,this.router=r,this.menuFloat=ht(Be),this.faMenu=We,this.faBack=Ue,this.itemCurrentUrl="",this.showText=!0}goBack(){this.location.back(),setTimeout(()=>{this.router.url.includes("/dashboard/profile/")&&(this.itemCurrentUrl=this.router.url.replace("/dashboard/profile/",""),this.menuFloat.toggleShowMenu(this.itemCurrentUrl))},100)}ngOnInit(){console.log(this.menuFloat.menuProfile())}toggleText(){this.showText=!this.showText}toggleShowMenu(a){this.menuFloat.toggleShowMenu(a)}};e.\u0275fac=function(r){return new(r||e)(A(Le),A(wt))},e.\u0275cmp=G({type:e,selectors:[["app-menu-profile"]],standalone:!0,features:[q],decls:12,vars:4,consts:[[1,"float-menu"],[1,"text-left"],[1,"text-left","noHoverButton",3,"click"],[3,"icon"],[4,"ngIf"],[1,"text-left","hoverList",3,"routerLink"],[1,"text-left","bg-deep-orange-200",3,"click"],[1,"text-left","noHoverButton"],[1,"text-left","hoverList",3,"click","routerLink"],[1,"text-left","noHoverButton",3,"disabled"]],template:function(r,i){r&1&&(I(0,"div",0)(1,"ul")(2,"li",1)(3,"button",2),yt("click",function(){return i.toggleText()}),X(4,"fa-icon",3),bt(5,Kr,2,0,"span",4),N()(),Ie(6,Qr,4,6,"li",5,Xr),I(8,"li",6),yt("click",function(){return i.goBack()}),I(9,"button",7),X(10,"fa-icon",3),bt(11,Zr,2,0,"span",4),N()()()()),r&2&&(T(4),F("icon",i.faMenu),T(),F("ngIf",i.showText),T(),Pe(i.menuFloat.menuProfile()),T(4),F("icon",i.faBack),T(),F("ngIf",i.showText))},dependencies:[Ye,Zn,Qn,Re,De],styles:[".float-menu[_ngcontent-%COMP%]{top:0;position:relative;right:0;width:100%;background-color:#f9f9f943}.float-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}.float-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;text-decoration:none;padding:10px;color:#333;background-color:#f9f9f952;width:100%}.float-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#b892bb79;padding:10px;width:100%;text-align:left}.float-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled{background-color:#9f878758;padding:10px;width:100%;text-align:left;pointer-events:none}.float-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{pointer-events:none!important}.noHoverButton[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none}"]});let t=e;return t})();var Ui=(()=>{let e=class e{constructor(a){this.router=a}ngOnInit(){}};e.\u0275fac=function(r){return new(r||e)(A(wt))},e.\u0275cmp=G({type:e,selectors:[["app-layout-page"]],standalone:!0,features:[q],decls:6,vars:0,consts:[[1,"flex","mt-16","gap-4"],[1,"flex-shrink-0"],[1,"shadow-lg","bg-gradient-to-tl","from-orange-50","from-15%","via-white","via-30%","to-transparent","flex-grow"]],template:function(r,i){r&1&&(I(0,"div",0)(1,"div",1),X(2,"app-menu-profile"),N(),I(3,"div",2),X(4,"router-outlet")(5,"div"),N()())},dependencies:[He,$e,ta],styles:["@keyframes _ngcontent-%COMP%_reveal-animation{0%{opacity:0}to{opacity:1}}.reveal[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_reveal-animation 5s}"]});let t=e;return t})();export{Ui as default};
