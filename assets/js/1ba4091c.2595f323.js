"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[340],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={title:"Duck Image Generator"},i=void 0,c={unversionedId:"fun/duck",id:"fun/duck",title:"Duck Image Generator",description:"This command generates random embedded duck pictures. Quack! \ud83e\udd86\ud83e\udd86\ud83e\udd86",source:"@site/docs/fun/duck.md",sourceDirName:"fun",slug:"/fun/duck",permalink:"/fun/duck",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/duck.md",tags:[],version:"current",frontMatter:{title:"Duck Image Generator"},sidebar:"sidebar",previous:{title:"Deathmatch Game",permalink:"/fun/deathmatch"},next:{title:"Fun Info",permalink:"/fun/funinfo"}},u={},l=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],d={toc:l},p="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This command generates random embedded duck pictures. Quack! \ud83e\udd86\ud83e\udd86\ud83e\udd86"),(0,a.yg)("h2",{id:"trigger"},"Trigger"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Command"),(0,a.yg)("br",null),"\n",(0,a.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,a.yg)("inlineCode",{parentName:"p"},"randduck")),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-randduck")," - Generates a random embedded duck picture.")),(0,a.yg)("h2",{id:"code"},"Code"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/fun/duck.go.tmpl",file:"../../../src/fun/duck.go.tmpl"},'{{/* \n    Generates random embedded duck pictures \ud83e\udd86\n    See <https://yagpdb-cc.github.io/fun/duck> for more information.\n\n    Author: Satty9361 <https://github.com/Satty9361>\n*/}}\n\n{{ $link := "https://random-d.uk/api/" }}\n{{ $c := randInt 10 }}\n{{ if lt $c 7 }}\n    {{ $link = joinStr "" $link (toString (randInt 1 130) ) ".jpg" }}\n{{ else }}\n    {{ $link = joinStr "" $link (toString (randInt 1 29)) ".gif" }}\n{{ end }}\n{{ sendMessage nil (cembed "image" (sdict "url" $link)) }}\n')),(0,a.yg)("h2",{id:"author"},"Author"),(0,a.yg)("p",null,"This custom command was written by ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Satty9361"},"@Satty9361"),"."))}s.isMDXComponent=!0}}]);