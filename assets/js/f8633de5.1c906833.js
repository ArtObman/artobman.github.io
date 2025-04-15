"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8831],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(8168),o=(t(6540),t(5680));const a={title:"Component Handler"},i=void 0,l={unversionedId:"fun/anon-channel/component-handler",id:"fun/anon-channel/component-handler",title:"Component Handler",description:'This command responds to the "Send an anonymous message" button created by the main cc by presenting a modal for users',source:"@site/docs/fun/anon-channel/component-handler.md",sourceDirName:"fun/anon-channel",slug:"/fun/anon-channel/component-handler",permalink:"/fun/anon-channel/component-handler",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/anon-channel/component-handler.md",tags:[],version:"current",frontMatter:{title:"Component Handler"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/fun/anon-channel/overview"},next:{title:"Main CC",permalink:"/fun/anon-channel/main-cc"}},c={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],u={toc:s},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,'This command responds to the "Send an anonymous message" button created by the main cc by presenting a modal for users\nto send their message in.'),(0,o.yg)("p",null,"For more information about the anonymous channel, see the ",(0,o.yg)("a",{parentName:"p",href:"overview"},"overview page"),"."),(0,o.yg)("h2",{id:"trigger"},"Trigger"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Type:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Component"),(0,o.yg)("br",null),"\n",(0,o.yg)("strong",{parentName:"p"},"Custom ID:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"\\Aanon_submit\\b")),(0,o.yg)("h2",{id:"code"},"Code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../src/fun/anon_channel/component_handler.go.tmpl",file:"../../../../src/fun/anon_channel/component_handler.go.tmpl"},'{{/*\n    Handler for anon submit button.\n    See <https://yagpdb-cc.github.io/fun/anon-channel/component-handler> for more information.\n \n    Author: SoggySaussages <https://github.com/SoggySaussages>\n*/}}\n\n{{ sendModal ( sdict "title" "Submit anonymous message" "custom_id" "anon_submit" "fields" ( cslice ( sdict "label" "Message" "required" true "style" 2 "max_length" 2000 ) ) ) }}\n')),(0,o.yg)("h2",{id:"author"},"Author"),(0,o.yg)("p",null,"This custom command was written by ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/SoggySaussages"},"@soggysaussages"),"."))}m.isMDXComponent=!0}}]);