"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5359],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var i=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),g=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=g(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=g(t),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return t?i.createElement(m,s(s({ref:n},c),{},{components:t})):i.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var g=2;g<r;g++)s[g]=t[g];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>g});var i=t(8168),o=(t(6540),t(5680));const r={title:"Ghost-Ping Detector v2"},s=void 0,a={unversionedId:"utilities/ghost-ping-v2",id:"utilities/ghost-ping-v2",title:"Ghost-Ping Detector v2",description:"Version two of the ghost ping detector. Has all the features of the original in addition to the ability to send logs when a ghost ping is detected.",source:"@site/docs/utilities/ghost-ping-v2.md",sourceDirName:"utilities",slug:"/utilities/ghost-ping-v2",permalink:"/utilities/ghost-ping-v2",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/ghost-ping-v2.md",tags:[],version:"current",frontMatter:{title:"Ghost-Ping Detector v2"},sidebar:"sidebar",previous:{title:"Ghost-Ping Detector v1",permalink:"/utilities/ghost-ping-v1"},next:{title:"JSON Converter",permalink:"/utilities/json-converter"}},l={},g=[{value:"Trigger",id:"trigger",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],c={toc:g},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Version two of the ghost ping detector. Has all the features of the original in addition to the ability to send logs when a ghost ping is detected."),(0,o.yg)("admonition",{title:"Ghost pings",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},'A ghost ping is when you mention a user and then delete the message, leaving a ping that cannot be found: hence the term "ghost ping".')),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"This command only works if the ghost ping was deleted within 5 seconds of being sent (or 10 seconds if ",(0,o.yg)("a",{parentName:"p",href:"ghost-ping-v2/#configuration"},(0,o.yg)("inlineCode",{parentName:"a"},"$CHECK")," is enabled"),").")),(0,o.yg)("h2",{id:"trigger"},"Trigger"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Type:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Regex"),(0,o.yg)("br",null),"\n",(0,o.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"<@!?\\d{17,19}>")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"\\A"),"."),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"$CHECK"),(0,o.yg)("br",null),"\nWhether to schedule two ",(0,o.yg)("inlineCode",{parentName:"p"},"execCC")," checks. The way this command works is that it checks after 5 seconds whether the message was deleted. This does mean that if you delete the message more than 5 seconds after message creation, this CC won't catch it by default."),(0,o.yg)("p",{parentName:"li"},"By enabling this option, the command will check twice instead of once, meaning that messages deleted between 5 and 10 seconds of being sent will be caught as well.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"$LOG"),(0,o.yg)("br",null),"\nWhether message logs should be sent in the channel when ghost pings are detected."))),(0,o.yg)("h2",{id:"code"},"Code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/ghostping_v2.go.tmpl",file:"../../../src/utilities/ghostping_v2.go.tmpl"},'{{/*\n    Ghost-ping detector v2.\n    See <https://yagpdb-cc.github.io/utilities/ghost-ping-v2> for more information.\n\n    Author: Devonte <https://github.com/devnote-dev>\n*/}}\n\n{{/* Configurable values */}}\n{{ $CHECK := false }}\n{{ $LOG := false }}\n{{/* End of configurable values */}}\n\n{{ if .ExecData }}\n    {{ $mentions := "" }} {{ $ping := false }}\n    {{ if ($m := getMessage nil .ExecData.message) }}\n        {{ if not $m.Mentions }}\n            {{ $ping = true }}\n        {{ end }}\n    {{ else }}\n        {{ $ping = true }}\n    {{ end }}\n\n    {{ if $ping }}\n        {{ if gt (len .ExecData.mentions) 1 }}\n            {{ range .ExecData.mentions }}\n                {{- $mentions = joinStr ">, <@" $mentions . -}}\n            {{ end }}\n        {{ else }}\n            {{ $mentions = index .ExecData.mentions 0 }}\n        {{ end }}\n\n        {{ $col := 16777215 }} {{ $p := 0 }} {{ $r := .Member.Roles }}\n        {{ range .Guild.Roles }}\n            {{- if and (in $r .ID) (.Color) (lt $p .Position) -}}\n                {{- $p = .Position -}}\n                {{- $col = .Color -}}\n            {{- end -}}\n        {{ end }}\n\n        {{ $log := "" }}\n        {{ if $LOG }}\n            {{ $log = print "\\n**Logs:** [Message Logs](" (exec "logs") ")" }}\n        {{ end }}\n\n        {{/* Embed Construct */}}\n        {{ $embed := cembed\n            "description" (print "**Channel:** <#" .Channel.ID ">\\n**Message:**\\n" .ExecData.content "\\n\\n**Mentioned Users:** <@" $mentions ">" $log)\n            "color" $col\n            "footer" (sdict "text" "Detector triggered")\n            "timestamp" currentTime }}\n\n        {{/* Content Format */}}\n        {{ $msgContent := print "Ghost ping detected by <@" .ExecData.author ">!" }}\n\n        {{ sendMessage nil (complexMessage "content" $msgContent "embed" $embed) }}\n    {{ else }}\n        {{ if and $CHECK (not .ExecData.break) }}\n            {{ $ids := cslice }}\n\n            {{ range .Message.Mentions }}\n                {{- $ids = $ids.Append (str .ID) -}}\n            {{ end }}\n\n            {{ execCC .CCID nil 5 (sdict "message" .Message.ID "author" .Message.Author.ID "mentions" $ids "content" .Message.Content "break" true) }}\n        {{ end }}\n    {{ end }}\n{{ else }}\n    {{ if .Message.Mentions }}\n        {{ $ids := cslice }}\n        {{ range .Message.Mentions }}\n            {{ $ids = $ids.Append (str .ID) }}\n        {{ end }}\n\n        {{ execCC .CCID nil 5 (sdict "message" .Message.ID "author" .Message.Author.ID "mentions" $ids "content" .Message.Content "break" false) }}\n    {{ end }}\n{{ end }}\n')),(0,o.yg)("h2",{id:"author"},"Author"),(0,o.yg)("p",null,"This custom command was written by ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/devnote-dev"},"@devnote-dev"),"."))}d.isMDXComponent=!0}}]);