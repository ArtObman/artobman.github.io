"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8407],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var o=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=l,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||a;return t?o.createElement(g,r(r({ref:n},d),{},{components:t})):o.createElement(g,r({ref:n},d))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<a;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(8168),l=(t(6540),t(5680));const a={title:"Lockdown"},r=void 0,i={unversionedId:"moderation/lockdown",id:"moderation/lockdown",title:"Lockdown",description:"Simulates a lockdown command.",source:"@site/docs/moderation/lockdown.md",sourceDirName:"moderation",slug:"/moderation/lockdown",permalink:"/moderation/lockdown",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/lockdown.md",tags:[],version:"current",frontMatter:{title:"Lockdown"},sidebar:"sidebar",previous:{title:"Emote Filter",permalink:"/moderation/emote-filter"},next:{title:"Nickname Moderation",permalink:"/moderation/nickname-moderation"}},s={},c=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],d={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,o.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Simulates a lockdown command."),(0,l.yg)("p",null,"It accomplishes this by deleting every message sent if the channel is locked; it does not actually change any role permissions."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"The reason this command locks down channels in such a roundabout way is because modifying channel permissions directly is not supported in YAGPDB template scripting.\nThis may change in the future, but for now, this command is the closest you can get to a lockdown command.")),(0,l.yg)("h2",{id:"trigger"},"Trigger"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Type:")," ",(0,l.yg)("inlineCode",{parentName:"p"},"Regex"),(0,l.yg)("br",null),"\n",(0,l.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,l.yg)("inlineCode",{parentName:"p"},".*")),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-lock <channel|'nil'> <amount>")," - Locks down the channel provided (",(0,l.yg)("inlineCode",{parentName:"li"},"nil")," denotes the current channel) and deletes the ",(0,l.yg)("inlineCode",{parentName:"li"},"amount")," most recent messages. To delete no messages, use ",(0,l.yg)("inlineCode",{parentName:"li"},"0")," for amount. Messages from moderators will not be deleted."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"-unlock <channel>")," - Unlocks a channel previously locked using this command.")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"-lock nil 5\n")),(0,l.yg)("p",null,"Would lock the current channel and delete the 5 most recent messages, excluding those of moderators."),(0,l.yg)("h2",{id:"configuration"},"Configuration"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\ud83d\udccc ",(0,l.yg)("inlineCode",{parentName:"li"},"$ModsRoles"),(0,l.yg)("br",null),"\nList of role IDs. A member with any one of these roles will be considered a moderator and will be exempt from lockdown.")),(0,l.yg)("h2",{id:"code"},"Code"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/moderation/lockdown.go.tmpl",file:"../../../src/moderation/lockdown.go.tmpl"},'{{/*\n    "Locks down" channels by deleting all messages sent. Does not actually change permissions.\n    See <https://yagpdb-cc.github.io/moderation/lockdown> for more information.\n\n    Author: Pedro Pessoa <https://github.com/Pedro-Pessoa>\n*/}}\n\n{{/* Configurable values */}}\n{{$ModsRoles := cslice 674429313097007106 673258482211749917}}\n{{/* End of configurable values */}}\n\n{{/* ACTUAL CODE DONT TOUCH */}}\n{{$isMod := false}} {{range .Member.Roles}} {{if in $ModsRoles .}} {{$isMod = true}} {{end}} {{end}}\n{{$isCmd := false}} {{if (and (reFind `\\A-(un)?lock` (lower .Cmd)) ($isMod))}} {{$isCmd = true}} {{end}}\n{{if and (dbGet .Channel.ID "is_blocked") (not $isMod)}} {{deleteTrigger 1}}\n{{else}}\n    {{if not $isMod}}\n        {{with (dbGet .Channel.ID "msg_tracker").Value}}\n            {{$slice := cslice.AppendSlice .}}\n            {{if lt (len $slice) 50}}\n                {{$slice = $slice.Append $.Message.ID}}\n                {{dbSet $.Channel.ID "msg_tracker" $slice}}\n            {{else}}\n                {{$slice = slice $slice 1}}\n                {{$slice = $slice.Append $.Message.ID}}\n                {{dbSet $.Channel.ID "msg_tracker" $slice}}\n            {{end}}\n        {{else}}\n            {{$firstID := cslice .Message.ID}}\n            {{dbSet .Channel.ID "msg_tracker" $firstID}}\n        {{end}}\n    {{end}}\n{{end}}\n{{if $isCmd}}\n    {{$split := split .Cmd " "}}\n    {{if ge (len $split) 2}}\n        {{$channel := reReplace `<|>|#` (index $split 1) ""}}\n        {{if eq (lower $channel) "nil"}} {{$channel = .Channel.ID}}\n        {{else if reFind `\\d{17,19}` $channel}} {{$channel = toInt $channel}}\n        {{end}}\n        {{if getChannelOrThread $channel}}\n            {{if not (reFind `^-un` (lower .Cmd))}}\n                {{if eq (len $split) 3}}\n                    {{$amount := (toInt (index $split 2))}}\n                    {{if dbGet $channel "is_blocked"}}\n                        The channel <#{{$channel}}> is already blocked.\n                    {{else}}\n                        {{dbSet $channel "is_blocked" true}}\n                        {{with (dbGet $channel "msg_tracker").Value}}\n                            {{$slice := cslice.AppendSlice .}}\n                            {{if gt $amount (len $slice)}} {{$amount = sub (len $slice) 1}} {{end}}\n                            {{if gt $amount 0}}\n                                {{$counter := 1}}\n                                {{range seq 0 $amount}}\n                                    {{- with (getMessage $channel (index $slice (sub (len $slice) $counter))) -}}\n                                        {{- if not .Pinned -}}\n                                            {{- deleteMessage $channel .ID 1 -}}\n                                        {{- end -}}\n                                    {{- end -}}\n                                    {{- $counter = add $counter 1 -}}\n                {{end}}\n                                {{$slice = slice $slice 0 (sub (len $slice) $amount)}}\n                                {{dbSet $channel "msg_tracker" $slice}}\n                            {{end}}\n                        {{end}}\n                        The channel <#{{$channel}}> is now blocked.\n                    {{end}}\n                {{else}}\n                    {{print "Correct usage is: -lock <channelID> <amount of msgs to del>\\n``ChannelID`` can be nil and ``amount of msgs`` can be 0."}}\n                {{end}}\n            {{else}}\n                {{if eq (len $split) 2}}\n                    {{if dbGet $channel "is_blocked"}}\n                        The channel <#{{$channel}}> is no longer blocked.\n                        {{dbDel $channel "is_blocked"}}\n                    {{else}}\n                        The channel <#{{$channel}}> is not blocked.\n                    {{end}}\n                {{else}}\n                    {{print "Correct usage is: -unlock <channelID>\\n``ChannelID`` can be nil"}}\n                {{end}}\n            {{end}}\n        {{else}}\n            Thats not a valid channel.\n        {{end}}\n    {{else}}\n        {{print "**Correct usage is:**\\n`-unlock <channelID>`\\n`-lock <channelID> <amount of msgs to del>`"}}\n    {{end}}\n{{end}}\n')),(0,l.yg)("h2",{id:"author"},"Author"),(0,l.yg)("p",null,"This custom command was written by ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Pedro-Pessoa"},"@Pedro-Pessoa"),"."))}u.isMDXComponent=!0}}]);