"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9557],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=i,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(8168),i=(r(6540),r(5680));const o={title:"Display Struct"},a=void 0,s={unversionedId:"utilities/display-struct",id:"utilities/display-struct",title:"Display Struct",description:"This command shows you all the available properties of a structure in addition to a link to the Discord docs on that structure.",source:"@site/docs/utilities/display-struct.md",sourceDirName:"utilities",slug:"/utilities/display-struct",permalink:"/utilities/display-struct",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/display-struct.md",tags:[],version:"current",frontMatter:{title:"Display Struct"},sidebar:"sidebar",previous:{title:"Preview Color",permalink:"/utilities/color-preview"},next:{title:"Edit Message",permalink:"/utilities/edit"}},l={},c=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This command shows you all the available properties of a structure in addition to a link to the Discord docs on that structure."),(0,i.yg)("h2",{id:"trigger"},"Trigger"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Type:")," ",(0,i.yg)("inlineCode",{parentName:"p"},"Regex"),(0,i.yg)("br",null),"\n",(0,i.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,i.yg)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(struct)(ure)?(\\s+|\\z)")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-struct <name>")," - Displays the structure with the name provided. ",(0,i.yg)("inlineCode",{parentName:"li"},"<name>")," must be one of ",(0,i.yg)("inlineCode",{parentName:"li"},"channel"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"guild"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"user"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"member"),", or ",(0,i.yg)("inlineCode",{parentName:"li"},"message"),".")),(0,i.yg)("admonition",{title:"Aliases",type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Instead of ",(0,i.yg)("inlineCode",{parentName:"p"},"struct"),", you can also use ",(0,i.yg)("inlineCode",{parentName:"p"},"structure"),".")),(0,i.yg)("h2",{id:"code"},"Code"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/struct.go.tmpl",file:"../../../src/utilities/struct.go.tmpl"},'{{/*\n    Shows all the available properties and methods of a structure with a link to the Discord docs on that structure.\n    See <https://yagpdb-cc.github.io/utilities/display-struct> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ $targets := sdict "Channel" .Channel "Guild" .Guild "User" .User "Member" .Member "Message" .Message }}\n{{ $resources := sdict\n    "Channel" "https://discordapp.com/developers/docs/resources/channel#channel-object"\n    "Guild" "https://discordapp.com/developers/docs/resources/guild#guild-resource"\n    "User" "https://discordapp.com/developers/docs/resources/user#user-object"\n    "Member" "https://discordapp.com/developers/docs/resources/guild#guild-member-object"\n    "Message" "https://discordapp.com/developers/docs/resources/channel#message-object"\n}}\n{{ $target := 0 }}\n{{ $name := "" }}\n{{ $input := (parseArgs 1 "**Syntax:** -struct <struct>" (carg "string" "structure")).Get 0 | lower }}\n{{ range $struct, $v := $targets }}\n    {{- if eq (lower $struct) $input }}\n        {{- $target = $v }}\n        {{- $name = $struct }}\n    {{- end -}}\n{{ end }}\n{{ if $target}}\n    {{ $json := printf "```go\\n%+v```" $target }}\n    {{ sendMessage nil (cembed\n        "title" (printf "\u276f %s Object" $name)\n        "url" (index $resources $name)\n        "description" $json\n        "color" 14232643\n    ) }}\n{{ else }}\n    Please provide a valid target to view.\n{{ end }}\n')),(0,i.yg)("h2",{id:"author"},"Author"),(0,i.yg)("p",null,"This custom command was written by ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}d.isMDXComponent=!0}}]);