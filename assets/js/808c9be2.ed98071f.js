"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4148],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},g="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(t),c=o,m=g["".concat(u,".").concat(c)]||g[c]||f[c]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(8168),o=(t(6540),t(5680));const a={title:"Wheel of Fortune"},i=void 0,l={unversionedId:"fun/wheel-of-fortune",id:"fun/wheel-of-fortune",title:"Wheel of Fortune",description:"This command runs the wheel of fortune game.",source:"@site/docs/fun/wheel-of-fortune.md",sourceDirName:"fun",slug:"/fun/wheel-of-fortune",permalink:"/fun/wheel-of-fortune",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/wheel-of-fortune.md",tags:[],version:"current",frontMatter:{title:"Wheel of Fortune"},sidebar:"sidebar",previous:{title:"Uwuify CC",permalink:"/fun/uwuify"},next:{title:"X Word Story Game",permalink:"/fun/x-word-story"}},u={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],p={toc:s},g="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(g,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This command runs the wheel of fortune game."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"This command assumes that you have an existing currency system set up to provide credits to users.")),(0,o.yg)("h2",{id:"trigger"},"Trigger"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Type:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Regex"),(0,o.yg)("br",null),"\n",(0,o.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"\\A\\-(?i)wheel(offortune)?")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"wheeloffortune <bet>")," - Runs the wheel of fortune game, betting ",(0,o.yg)("inlineCode",{parentName:"li"},"bet"),".")),(0,o.yg)("admonition",{title:"Aliases",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Instead of ",(0,o.yg)("inlineCode",{parentName:"p"},"wheeloffortune"),", you can also use ",(0,o.yg)("inlineCode",{parentName:"p"},"wheel")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"wheelOfFortune")," (the command is case insensitive).")),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\ud83d\udccc ",(0,o.yg)("inlineCode",{parentName:"p"},"$dbName"),(0,o.yg)("br",null),"\nDatabase entry name that stores the user's credits.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"$limit"),(0,o.yg)("br",null),"\nThe message to show users when they don't have enough credits to play.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"$bb1"),(0,o.yg)("br",null),"\nThe message to show users when they attempt to bet less than 1 credit.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"$helpText"),(0,o.yg)("br",null),"\nThe help text for the command."))),(0,o.yg)("h2",{id:"code"},"Code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/fun/wheel_of_fortune.go.tmpl",file:"../../../src/fun/wheel_of_fortune.go.tmpl"},'{{/*\n    Wheel of fortune game that integrates with an existing currency system.\n    See <https://yagpdb-cc.github.io/fun/wheel-of-fortune> for more information.\n\n    Author: Hyakki999 <https://github.com/Hyakki999>\n*/}}\n\n{{/* Configurable values */}}\n{{ $dbName := "CREDITS" }}\n{{ $limit := " insufficient \ud83e\udd86" }}\n{{ $bb1 := " you have to bet at least 1 \ud83e\udd86" }}\n{{ $helpText := "-wheel <amount>\\nFor example: **-wheel 10**\\nThis way you would be betting 10 \ud83e\udd86." }}\n{{/* End of configurable values */}}\n\n{{/* Do not change anything below */}}  \n{{ $pos := 1.0 }}\n{{ if lt (randInt 0 11) 7 }}\n    {{ $pos = (index (shuffle (cslice 0.1 0.3 0.5 0.2)) 0) }}\n{{ else }}\n    {{ $pos = (index (shuffle (cslice 1.2 2.4 1.7 1.5)) 0) }}\n{{ end }}\n\n{{ $a := dict 0.1 `\\\u2199\ufe0f` 0.2 "\u2190" 0.3 "\u2193" 0.5 `\\\u2198\ufe0f` 1.2 "\u2192" 1.5 `\\\u2196\ufe0f` 1.7 "\u2191" 2.4 `\\\u2197\ufe0f` }}\n{{ $arrow := $a.Get $pos }}\n\n{{ $fh := "\ud83e\udd86\\n\\n   \u300e1.5\u300f   \u300e1.7\u300f   \u300e2.4\u300f\\n\\n\u300e0.2\u300f      " }}\n{{ $sh := "      \u300e1.2\u300f\\n\\n     \u300e0.1\u300f   \u300e0.3\u300f   \u300e0.5\u300f" }}\n{{ $bal := toInt (dbGet .User.ID $dbName).Value }}\n{{ $red := 0xff2627 }}\n{{ $gre := 0x76ff03 }}\n\n{{ if .CmdArgs}}\n    {{ $bet := index .CmdArgs 0 | toInt }}\n    {{ if ge $bet 1 }}\n        {{ if ge $bal $bet }}\n            {{ $silent := dbIncr .User.ID $dbName ( mult -1 $bet ) }}\n            {{ $amount := toInt ( round ( mult ( toFloat $bet ) $pos ) ) }}\n            {{ $silent := dbIncr .User.ID $dbName $amount }}\n            {{ sendMessage nil ( cembed "color" $gre "title" ( print .User.String " won: " $amount $fh $arrow $sh ) ) }}\n        {{ else }}\n        {{ sendMessage nil ( cembed "color" $red "title" ( print .User.String $limit ) ) }}\n        {{ end }}\n    {{ else }}\n    {{ sendMessage nil ( cembed "color" $red "title" ( print .User.String $bb1 ) ) }}\n    {{ end }}\n{{ else }}\n{{ sendMessage nil ( cembed "color" $red "title" ( print "Usage: \\n" $helpText ) ) }}\n{{ end }}\n')),(0,o.yg)("h2",{id:"author"},"Author"),(0,o.yg)("p",null,"This custom command was written by ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Hyakki999"},"@Hyakki999"),"."))}f.isMDXComponent=!0}}]);