"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4355],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),l=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},m=function(e){var n=l(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,g=c["".concat(s,".").concat(u)]||c[u]||p[u]||a;return t?i.createElement(g,d(d({ref:n},m),{},{components:t})):i.createElement(g,d({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,d=new Array(a);d[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,d[1]=o;for(var l=2;l<a;l++)d[l]=t[l];return i.createElement.apply(null,d)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(8168),r=(t(6540),t(5680));const a={title:"Raid Admin"},d=void 0,o={unversionedId:"moderation/raid-guard/raid-admin",id:"moderation/raid-guard/raid-admin",title:"Raid Admin",description:"This command provides staff commands to mass action members suspected to be part of a raid.",source:"@site/docs/moderation/raid-guard/raid-admin.md",sourceDirName:"moderation/raid-guard",slug:"/moderation/raid-guard/raid-admin",permalink:"/moderation/raid-guard/raid-admin",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/moderation/raid-guard/raid-admin.md",tags:[],version:"current",frontMatter:{title:"Raid Admin"},sidebar:"sidebar",previous:{title:"Join Trigger",permalink:"/moderation/raid-guard/join-trigger"},next:{title:"Overview",permalink:"/moderation/report-system/overview"}},s={},l=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],m={toc:l},c="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,i.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This command provides staff commands to mass action members suspected to be part of a raid."),(0,r.yg)("p",null,"For more information about the raid guard system, see ",(0,r.yg)("a",{parentName:"p",href:"overview"},"this")," page."),(0,r.yg)("h2",{id:"trigger"},"Trigger"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"Command"),(0,r.yg)("br",null),"\n",(0,r.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"raid")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-raid <action>")," - Runs the provided action on all members suspected to have been part of the raid.\n",(0,r.yg)("inlineCode",{parentName:"li"},"action")," must be one of ",(0,r.yg)("inlineCode",{parentName:"li"},"ban")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"kick"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"-raid clear")," - Dismisses the report and clears the raid list.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The command may take a bit to finish running, as it has to run the action on all members.")),(0,r.yg)("h2",{id:"code"},"Code"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../src/moderation/raid_guard/raid_admin.go.tmpl",file:"../../../../src/moderation/raid_guard/raid_admin.go.tmpl"},'{{/*\n    Admin command for the raid system.\n    See <https://yagpdb-cc.github.io/moderation/raid-guard/raid-admin> for more information.\n\n    Author: ENGINEER15 <https://github.com/engineer152/>\n*/}}\n\n{{$t := "" }}\n{{$cc := toInt .CCID }}\n{{$l := cslice}}\n{{$thumb := (sdict "url" "https://cdn.discordapp.com/emojis/714051544265392229.gif")}}\n{{$qlen := 0}}\n\n{{$q:=cslice}}\n{{with (dbGet 0 "raidlist").Value}}\n    {{$q =$q.AppendSlice .}}{{end}}\n{{$nq:=cslice}}\n{{range $i,$e:=$q}}\n    {{if $i}}\n        {{$nq =$nq.Append $e}}\n    {{end}}\n{{end}}\n\n{{with .CmdArgs}}\n    {{$t = index . 0}}{{end}} \n{{with (dbGet 0 "raidlist").Value}}\n    {{$l = $l.AppendSlice . }}{{end}}\n{{$qlen = len $l}}\n\n{{$embed := sdict \n    "title" " \ud83d\udee1 RAID GUARD"\n    "description" "*Initializing in 3...*"\n    "color" 14232643\n    "thumbnail" $thumb }}\n\n{{$channel := .Channel.ID }}\n{{$user := "" }}\n\n{{with .ExecData }}\n    {{$embed = sdict .Embed }}\n    {{$qlen = .Qlen }}\n    {{$data := sdict . }}\n    {{$thumb := "" }}\n    {{$command := .Command}}\n    {{ $msgs := split $embed.description "\\n" | cslice.AppendSlice }}\n    {{$title := split $embed.title "\\n" | cslice.AppendSlice }}\n    {{$msgs = cslice }}{{ $title = cslice }}\n    {{if $q}}\n        {{with (index $q 0) }}\n            {{$user = . }}{{end}}\n        {{if eq $command "kick"}}\n            {{$k := execAdmin (printf "kick %d For being part of a RAID" $user.ID ) }}\n        {{else if eq $command "ban"}}\n            {{$k := execAdmin (printf "ban %d For being part of a RAID" $user.ID ) }}\n        {{end}}\n        {{if not (eq (len $nq) 0) }}\n            {{$title = $title.Append (print "\ud83d\udc62 REMOVING ALL RAID MEMBERS" )}}\n            {{$msgs = $msgs.Append (printf "Currently Removing: %s" $user.Username )}}\n            {{$thumb = (sdict "url" "https://cdn.discordapp.com/emojis/714051544265392229.gif")}}\n            {{dbSet 0 "raidlist" $nq}}\n            {{execCC $cc $channel 2 $data }}\n        {{else}}\n            {{$title = $title.Append (print "**\u2705 COMPLETE**" )}}\n            {{$msgs = $msgs.Append (printf "ALL %d RAIDERS HAVE BEEN REMOVED.\\nYour server has been protected by**\ud83d\udee1 RAID GUARD.**" $qlen )}}\n            {{$thumb = (sdict "url" "https://cdn.discordapp.com/emojis/565142262401728512.png")}}\n            {{dbDel 0 "raidlist"}}\n        {{end}}\n    {{else}}\n        {{$thumb = (sdict "url" "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/281/person-shrugging_1f937.png")}}\n        {{$title = $title.Append (print "\\n" )}}\n        {{$msgs = $msgs.Append (print "\u274c THE RAIDLIST IS EMPTY\\n\\nNo RAID has happened recently. \ud83d\udc4d" )}}\n    {{end}}\n    {{$embed.Set "title" (joinStr "\\n" $title.StringSlice ) }}\n    {{$embed.Set "description" (joinStr "\\n" $msgs.StringSlice ) }}\n    {{$embed.Set "thumbnail" $thumb }}\n    {{$data.Set "Embed" $embed }}\n    {{editMessage .ChannelID .MsgID (cembed $embed) }}\n\n{{else}}\n    \n    {{if eq $t "clear"}}\n        {{dbDel 0 "raidlist"}}\n        {{$embed2 := sdict \n            "title" "\u2705 COMPLETE"\n            "description" "\ud83e\uddf9 RAID LIST HAS NOW BEEN CLEARED"\n            "color" 14232643 }}\n        {{sendMessage nil (cembed $embed2) }}\n    {{else if or (eq $t "kick") (eq $t "ban")}}\n        {{$initial := sendMessageRetID nil (cembed $embed) }}\n        {{sleep 3 }}\n        {{execCC $cc (.Channel.ID) 0 (sdict\n            "Embed" $embed\n            "MsgID" $initial\n            "ChannelID" .Channel.ID\n            "Qlen" $qlen\n            "Command" $t)}}\n    {{end}}{{end}}\n')),(0,r.yg)("h2",{id:"author"},"Author"),(0,r.yg)("p",null,"This custom command was written by ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/engineer152/"},"@ENGINEER15"),"."))}p.isMDXComponent=!0}}]);