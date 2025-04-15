"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1830],{5680:(e,r,t)=>{t.d(r,{xA:()=>g,yg:()=>m});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},g=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),c=l(t),d=o,m=c["".concat(i,".").concat(d)]||c[d]||s[d]||a;return t?n.createElement(m,p(p({ref:r},g),{},{components:t})):n.createElement(m,p({ref:r},g))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[c]="string"==typeof e?e:o,p[1]=u;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5551:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=t(8168),o=(t(6540),t(5680));const a={title:"Delete Group"},p=void 0,u={unversionedId:"fun/cah-groups/delgroup",id:"fun/cah-groups/delgroup",title:"Delete Group",description:"This command deletes a group of CAH card packs.",source:"@site/docs/fun/cah-groups/delgroup.md",sourceDirName:"fun/cah-groups",slug:"/fun/cah-groups/delgroup",permalink:"/fun/cah-groups/delgroup",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/cah-groups/delgroup.md",tags:[],version:"current",frontMatter:{title:"Delete Group"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/fun/cah-groups/overview"},next:{title:"End Game",permalink:"/fun/cah-groups/endgame"}},i={},l=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],g={toc:l},c="wrapper";function s(e){let{components:r,...t}=e;return(0,o.yg)(c,(0,n.A)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This command deletes a group of CAH card packs."),(0,o.yg)("p",null,"For more information about the CAH card pack system, see ",(0,o.yg)("a",{parentName:"p",href:"overview"},"this")," page."),(0,o.yg)("h2",{id:"trigger"},"Trigger"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Type:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Command"),(0,o.yg)("br",null),"\n",(0,o.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"delgroup")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-delgroup <group-name>")," - Deletes the CAH card pack with the given name.")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If your group name has spaces in it, you need to put quotes around it: ",(0,o.yg)("inlineCode",{parentName:"p"},'-delgroup "group name"'),".")),(0,o.yg)("h2",{id:"code"},"Code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../src/fun/cah_groups/delgroup.go.tmpl",file:"../../../../src/fun/cah_groups/delgroup.go.tmpl"},'{{/*\n    Deletes a group of CAH card packs.\n    See <https://yagpdb-cc.github.io/fun/cah-groups/delgroup> for more information.\n\n    Author: LRitzdorf <https://github.com/LRitzdorf>\n*/}}\n\n{{ $fullKey := joinStr "" "group " (index .CmdArgs 0) }}\n{{ if ne (len .CmdArgs) 1 }}\n    Command usage: `-delgroup "group name"`\nUse group names previously set up with the `-setgroup` command, viewable with `-listgroups`.\nYou can have a group name with spaces, but make sure to put it in quotes!\n{{ else if (dbGet 0 $fullKey) }}\n    {{ dbDel 0 $fullKey }}\n    Pack group `{{index .CmdArgs 0}}` deleted.\n{{ else }}\n    Pack group `{{index .CmdArgs 0}}` does not exist.\n{{ end }}\n')),(0,o.yg)("h2",{id:"author"},"Author"),(0,o.yg)("p",null,"This custom command was written by ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/LRitzdorf"},"@LRitzdorf"),"."))}s.isMDXComponent=!0}}]);