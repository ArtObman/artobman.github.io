"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9098],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(p,".").concat(u)]||d[u]||g[u]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={title:"Parse Text"},i=void 0,s={unversionedId:"code-snippets/parse-text",id:"code-snippets/parse-text",title:"Parse Text",description:"Code snippet to parse text into a slice of arguments, much like how .CmdArgs is constructed.",source:"@site/docs/code-snippets/parse-text.md",sourceDirName:"code-snippets",slug:"/code-snippets/parse-text",permalink:"/code-snippets/parse-text",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/code-snippets/parse-text.md",tags:[],version:"current",frontMatter:{title:"Parse Text"},sidebar:"sidebar",previous:{title:"Parse Flags",permalink:"/code-snippets/parse-flags"},next:{title:"String to Time",permalink:"/code-snippets/string2time"}},p={},l=[{value:"Code",id:"code",level:2},{value:"Usage",id:"usage",level:2},{value:"Author",id:"author",level:2}],c={toc:l},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Code snippet to parse text into a slice of arguments, much like how ",(0,a.yg)("inlineCode",{parentName:"p"},".CmdArgs")," is constructed."),(0,a.yg)("p",null,"Licensed under the terms of the Unlicense."),(0,a.yg)("h2",{id:"code"},"Code"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/code_snippets/parse_text.go.tmpl",file:"../../../src/code_snippets/parse_text.go.tmpl"},'{{/*\n    Parses text into a slice of arguments, much like how .CmdArgs is constructed.\n    See <https://yagpdb-cc.github.io/code-snippets/parse-text> for more information.\n\n    Licensed under the terms of the Unlicense.\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{/* Let $text be the text. */}}\n{{ $text := .StrippedMsg }}\n\n{{ $regex := `\\x60(.*?)\\x60|"(.*?)"|[^\\s]+` }}\n{{ $clean := cslice }}\n{{ range reFindAllSubmatches $regex $text }}\n    {{- $clean = $clean.Append (or (index . 2) (index . 1) (index . 0)) -}}\n{{ end }}\n')),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"First, add in the code snippet above:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-gotmpl"},"{{/* code snippet goes here */}}\n")),(0,a.yg)("p",null,"Next, change the value of ",(0,a.yg)("inlineCode",{parentName:"p"},"$text")," to the value you like. Say we wanted to use ",(0,a.yg)("inlineCode",{parentName:"p"},".Message.Content")," rather than ",(0,a.yg)("inlineCode",{parentName:"p"},".StrippedMsg"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff",metastring:"{3}","{3}":!0},"{{/* Let $text be the text. */}}\n- {{ $text := .StrippedMsg }}\n+ {{ $text := .Message.Content }}\n{{/* rest of code snippet goes here */}}\n")),(0,a.yg)("p",null,"You may now access the parsed slice of arguments using ",(0,a.yg)("inlineCode",{parentName:"p"},"$clean"),", which will be a ",(0,a.yg)("inlineCode",{parentName:"p"},"cslice"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"{2}","{2}":!0},"{{/* code snippet goes here */}}\nParsed args: `{{json $clean}}`\n")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"You can convert ",(0,a.yg)("inlineCode",{parentName:"p"},"$clean")," to a string slice (what ",(0,a.yg)("inlineCode",{parentName:"p"},".CmdArgs"),", ",(0,a.yg)("inlineCode",{parentName:"p"},".Args"),", and so on are) by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"StringSlice")," method: ",(0,a.yg)("inlineCode",{parentName:"p"},"{{$clean.StringSlice}}"),".")),(0,a.yg)("h2",{id:"author"},"Author"),(0,a.yg)("p",null,"This code snippet was written by ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}g.isMDXComponent=!0}}]);