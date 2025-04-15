"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2346],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=m(n),u=i,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var m=2;m<s;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var r=n(8168),i=(n(6540),n(5680));const s={title:"Snipe Message"},o=void 0,a={unversionedId:"utilities/snipe-message",id:"utilities/snipe-message",title:"Snipe Message",description:"Retrieves the most recently deleted message in the past hour (non-premium) / 12 hours (premium).",source:"@site/docs/utilities/snipe-message.md",sourceDirName:"utilities",slug:"/utilities/snipe-message",permalink:"/utilities/snipe-message",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/snipe-message.md",tags:[],version:"current",frontMatter:{title:"Snipe Message"},sidebar:"sidebar",previous:{title:"Send Message",permalink:"/utilities/send-message"},next:{title:"View Time",permalink:"/utilities/view-time"}},l={},m=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],p={toc:m},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Retrieves the most recently deleted message in the past hour (non-premium) / 12 hours (premium)."),(0,i.yg)("h2",{id:"trigger"},"Trigger"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Type:")," ",(0,i.yg)("inlineCode",{parentName:"p"},"Command"),(0,i.yg)("br",null),"\n",(0,i.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,i.yg)("inlineCode",{parentName:"p"},"snipe")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-snipe")," - Retrieves the most recently deleted message in the past hour (non-premium) / 12 hours (premium).")),(0,i.yg)("h2",{id:"code"},"Code"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/snipe.go.tmpl",file:"../../../src/utilities/snipe.go.tmpl"},'{{/* \n    Retrieves the most recent deleted message in the past hour (non-premium) / 12 hours (premium).\n    See <https://yagpdb-cc.github.io/utilities/snipe-message> for more information.\n\n    Author: zen | \u30bc\u30f3#0008 <https://github.com/z3nn13/>\n*/}}\n\n{{ $re := `\\n\\n(<t:(\\d+):f> \\(<t:\\d+:R>\\)) \\*\\*[\\w.#]+\\*\\* \\(ID (\\d{17,19})\\)\\:` }}\n{{ $undelete := execAdmin "ud -a" }}\n{{ $data := reFindAllSubmatches $re $undelete 1 }}\n{{ if not $data }}\n    Nothing to snipe here\n    {{ return }}\n{{ end }}\n\n{{ $ex := or (and (hasPrefix "a_" .Guild.Icon) "gif") "png" }}\n{{ $icon := printf "https://cdn.discordapp.com/icons/%d/%s.%s?size=1024" .Guild.ID .Guild.Icon $ex }}\n\n{{ $col := 0 }}\n{{ $pos := 0 }}\n{{ range $.Guild.Roles }}\n    {{- if not (and (in $.Member.Roles .ID) .Color (lt $pos .Position) ) }} {{- continue }} {{- end }}\n    {{- $pos = .Position }} {{- $col = .Color -}}\n{{ end }}\n\n{{ $member := getMember (index $data 0 3) }}\n{{ $msg := index (reSplit $re $undelete 2) 1|trimSpace }}\n{{ $time := timestampToTime (index $data 0 2) }}\n{{ $embed := sdict\n    "author" (sdict\n        "name" (printf "%s (ID %d)" $member.User.String $member.User.ID)\n        "icon_url" ($member.User.AvatarURL "256")\n    )\n    "description" (printf "Message from <t:%d:R>:\\n%s" $time.Unix $msg)\n    "footer" (sdict\n        "icon_url" $icon\n    )\n    "timestamp" $time\n    "color" $col\n}}\n{{ $send := sdict "reply" .Message.ID "embed" $embed }}\n\n{{ $imgRe := `\\.(?i:jpe?g|png|gif|tif|webp)`}}\n{{ if and ($imgURL := reFind .LinkRegex $msg) (reFind $imgRe $imgURL) }}\n    {{ $embed.footer.Set "text" (print "\u26a0\ufe0f An image link was detected\\n" $embed.footer.text) }}\n    {{ $embed.Set "image" (sdict "url" $imgURL) }}\n{{ end }}\n\n{{ if not $msg }}\n    {{ $embed.footer.Set "text" (print "\u26a0\ufe0f An attachment/embed was deleted\\n" $embed.footer.text) }}\n{{ end }}\n\n{{ if gt (len (printf "Message from <t:%d:R>:\\n%s" $time.Unix $msg)) 2000 }}\n    {{ $embed.footer.Set "text" (print "\u26a0\ufe0f Message exceeded 2k characters. Contents sent as file instead\\n" $embed.footer.text) }}\n    {{ $embed.Set "description" (printf "Message from <t:%d:R>") }}\n    {{ $send.Set "file" $msg }}\n{{ end }}\n\n{{ sendMessage nil (complexMessage $send) }}\n')),(0,i.yg)("h2",{id:"author"},"Author"),(0,i.yg)("p",null,"This custom command was written by ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/z3nn13"},"zen | \u30bc\u30f3"),"."))}c.isMDXComponent=!0}}]);