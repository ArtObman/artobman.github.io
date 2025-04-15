"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9047],{5680:(e,i,n)=>{n.d(i,{xA:()=>d,yg:()=>f});var t=n(6540);function o(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function a(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?a(Object(n),!0).forEach((function(i){o(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function r(e,i){if(null==e)return{};var n,t,o=function(e,i){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),m=function(e){var i=t.useContext(l),n=i;return e&&(n="function"==typeof e?e(i):s(s({},i),e)),n},d=function(e){var i=m(e.components);return t.createElement(l.Provider,{value:i},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},c=t.forwardRef((function(e,i){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),g=m(n),c=o,f=g["".concat(l,".").concat(c)]||g[c]||p[c]||a;return n?t.createElement(f,s(s({ref:i},d),{},{components:n})):t.createElement(f,s({ref:i},d))}));function f(e,i){var n=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var r={};for(var l in i)hasOwnProperty.call(i,l)&&(r[l]=i[l]);r.originalType=e,r[g]="string"==typeof e?e:o,s[1]=r;for(var m=2;m<a;m++)s[m]=n[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},893:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>m});var t=n(8168),o=(n(6540),n(5680));const a={title:"Big Emoji v2"},s=void 0,r={unversionedId:"utilities/big-emoji-v2",id:"utilities/big-emoji-v2",title:"Big Emoji v2",description:"An improved version of the original big emoji CC. Has all the features of the original version, but also the following features:",source:"@site/docs/utilities/big-emoji-v2.md",sourceDirName:"utilities",slug:"/utilities/big-emoji-v2",permalink:"/utilities/big-emoji-v2",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/big-emoji-v2.md",tags:[],version:"current",frontMatter:{title:"Big Emoji v2"},sidebar:"sidebar",previous:{title:"Big Emoji v1",permalink:"/utilities/big-emoji-v1"},next:{title:"Bookmark Message",permalink:"/utilities/bookmark"}},l={},m=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Code",id:"code",level:2},{value:"Attribution",id:"attribution",level:2},{value:"Author",id:"author",level:2}],d={toc:m},g="wrapper";function p(e){let{components:i,...n}=e;return(0,o.yg)(g,(0,t.A)({},d,n,{components:i,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"An improved version of the ",(0,o.yg)("a",{parentName:"p",href:"big-emoji-v1"},"original big emoji CC"),". Has all the features of the original version, but also the following features:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"View emojis using message ID"),(0,o.yg)("li",{parentName:"ul"},"View emojis from other members' messages"),(0,o.yg)("li",{parentName:"ul"},"View reaction emojis"),(0,o.yg)("li",{parentName:"ul"},"Will generate a list of emojis (up to 25) to view if there are multiple targets.")),(0,o.yg)("admonition",{title:"Moderation",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"While it's fun to view emojis other members are using this is also a moderation tool. It can often be difficult to see detailed emojis in messages or when used as reactions; being able to safely pull them into a staff channel can allow you to moderate things such as NSFW emojis without drawing attention to them. This also allows you to better view reactions while on mobile since Discord has made it near impossible to view reaction names and images.")),(0,o.yg)("h2",{id:"trigger"},"Trigger"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Type:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Regex"),(0,o.yg)("br",null),"\n",(0,o.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"\\A(-|<@!?204255221017214977>\\s*)(be|big-?emo(te|ji))(\\s+|\\z)")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-bigemoji <emoji>")," - Views an enlarged version of the emoji provided."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-bigemoji <message-id>")," - Views enlarged versions of emojis within the message provided. Should be in the same channel as the triggering command."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-bigemoji <message-id> -re")," - Same as above, but views reaction emojis instead."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-bigemoji <link>")," - Views enlarged versions of emojis within the message provided. Should be in a channel which YAGPDB has access to."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-bigemoji <link> -re")," - Same as above, but views reaction emojis instead."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"-bigemoji help")," - Displays a help message similar to the above.")),(0,o.yg)("admonition",{title:"Limitations",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Due to a few limitations some default emojis won't generate proper links or may be incorrect altogether. Most will work but some will not, sorry for any inconvenience."),(0,o.yg)("p",{parentName:"admonition"},"Custom emojis are displayed in their actual image size, while default emojis are displayed in 72x72 as that is the largest size the Twemoji CDN provides in PNG format.")),(0,o.yg)("admonition",{title:"Aliases",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Instead of ",(0,o.yg)("inlineCode",{parentName:"p"},"bigemoji"),", you can also use ",(0,o.yg)("inlineCode",{parentName:"p"},"be"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"bigemote"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"big-emote"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"big-emoji"),".")),(0,o.yg)("h2",{id:"code"},"Code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/big_emoji_v2.go.tmpl",file:"../../../src/utilities/big_emoji_v2.go.tmpl"},'{{/*\n    Allows you to enlarge virtually any emoji.\n    See <https://yagpdb-cc.github.io/utilities/big-emoji-v2> for more information.\n\n    Author: dvoraknt <https://github.com/dvoraknt>\n\n    Twemoji images are licensed under CC-BY 4.0 and are provided by the official Twemoji project at https://github.com/twitter/twemoji\n*/}}\n\n{{deleteTrigger 0}}\n{{if .CmdArgs}}\n    {{$waitMsg := sendMessageRetID nil (print "<a:loading:844230891781226496> **Loading** <a:loading:844230891781226496>")}}\n    {{$embed := sdict}}{{$subArg := index .CmdArgs 0}}{{$emoji := ""}}{{$defEmoji := ""}}{{$fields := cslice}}{{$chan := 0}}{{$msg := 0}}{{$error := false}}{{$ogMsg := ""}}\n\n    {{if reFind `^(\\d{17,20})` $subArg}}\n        {{if getMessage nil $subArg}}\n            {{$msg = $subArg}}{{$chan = .nil}}\n            {{$ogMsg = (getMessage nil $subArg).Content}}\n            {{$emoji = reFindAllSubmatches `<(a)?:[\\w~]+:(\\d+)>` $ogMsg}}\n            {{$defEmoji = reFindAllSubmatches `([\\x{1f1e6}-\\x{1f1ff}]{2}|\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?(\\x{200D}\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?)*|[#\\d*]\\x{FE0F}?\\x{20E3})` $ogMsg}}\n        {{else}}\n            {{editMessage nil $waitMsg (print "**Message not found:** If the message isn\'t in <#" .Channel.ID "> you\'ll need to use the full message link. Make sure that the message has not been deleted.")}}\n            {{deleteMessage nil $waitMsg 10}}\n            {{$error = true}}\n        {{end}}\n\n    {{else if $linkArg := reFind `(?:[^<]|\\A)https?:\\/\\/(?:www\\.)?(?:ptb\\.|canary\\.)?discord(?:app)?\\.com\\/channels\\/(\\d{17,19})\\/(\\d{17,19})\\/(\\d{17,19})(?:[^\\d]|\\z)|<https?:\\/\\/(?:www\\.)?(?:ptb\\.|canary\\.)?discord(?:app)?\\.com\\/channels\\/(\\d{17,19})\\/(\\d{17,19})\\/(\\d{17,19})(?:[^>\\d]|\\z)` $subArg}}\n        {{$linkVar := (reFindAll `\\d+` $linkArg)}}\n        {{$chan = index $linkVar 1}}{{$msg = index $linkVar 2}}\n        {{if getMessage $chan $msg}}\n            {{$ogMsg = (getMessage $chan $msg).Content}}\n            {{$emoji = reFindAllSubmatches `<(a)?:[\\w~]+:(\\d+)>` $ogMsg}}\n            {{$defEmoji = reFindAllSubmatches `([\\x{1f1e6}-\\x{1f1ff}]{2}|\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?(\\x{200D}\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?)*|[#\\d*]\\x{FE0F}?\\x{20E3})` $ogMsg}}\n        {{else}}\n            {{editMessage nil $waitMsg (print "**Message not found:** Make sure YAGPDB has permission to read messages in <#" $chan "> and that the message has not been deleted.")}}\n            {{deleteMessage nil $waitMsg 10}}\n            {{$error = true}}\n        {{end}}\n        \n    {{else if eq $subArg "help"}}\n        {{$helpEmbed := sdict\n        \n        "title" (joinStr "" "Big Emoji Help") \n        "description" "This command will allow you to view a single emoji as a larger image or generate image/gif links for up to 25 individual emojis.\\n\\nYou can use it to view your own emojis, emojis in other messages, used as reactions, or even in a different channel. Use any message ID or message link to extract the emojis and enlarge them.\\n\\nTo capture reactions use the optional `-re` flag after the message ID or link." \n        "color" 4645612 \n        "fields" (cslice \n            (sdict "name" "Syntax" "value" "```elm\\n-bigemoji <Emoji> (minimum 1, maximum 25)\\n-bigemoji <MessageID> (use when original message exists within the same channel)\\n-bigemoji <MessageLink> (use to view reactions from anywhere that YAGPDB has read access)```" "inline" false)\n            (sdict "name" "Reaction Flag Usage" "value" "```elm\\n-bigemoji <MessageID> -re\\n-bigemoji <MessageLink> -re```" "inline" false)\n            (sdict "name" "Available Triggers" "value" "`-bigemoji` `-bigemote` `-big-emoji` `-big-emote` `-be`")\n            (sdict "name" "Information" "value" "Due to a few limitations some default emojis won\'t generate proper links or may be incorrect altogether. Most will work but some will not, sorry for any inconvenience.\\n\\nCustom emojis are displayed in their actual image size, default emojis are displayed in 72x72 as that is largest size the Twemoji CDN provides in PNG format." "inline" false)\n        )\n        "footer" (sdict "text" .Message.Author.String "icon_url" (.User.AvatarURL "256"))\n        "timestamp" currentTime\n        }}\n        {{editMessage nil $waitMsg (complexMessageEdit "content" "" "embed" (cembed $helpEmbed))}}\n        \n    {{else if eq $subArg "-re"}}\n        {{editMessage nil $waitMsg (print "**Invalid Syntax:** The `-re` flag must be placed after the message ID/link.")}}\n        {{deleteMessage nil $waitMsg 10}}\n        {{$error = true}}\n\n    {{else}}\n        {{$emoji = reFindAllSubmatches `<(a)?:[\\w~]+:(\\d+)>` .Message.Content}}\n        {{$defEmoji = reFindAllSubmatches `([\\x{1f1e6}-\\x{1f1ff}]{2}|\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?(\\x{200D}\\p{So}\\x{fe0f}?[\\x{1f3fb}-\\x{1f3ff}]?)*|[#\\d*]\\x{FE0F}?\\x{20E3})` .Message.Content}}\n    {{end}}\n    \n    {{if and (reFind `(?i)-re` (print .CmdArgs)) $ogMsg}}\n    {{$emoji = cslice.AppendSlice $emoji}}{{$defEmoji = cslice.AppendSlice $defEmoji}}\n        {{range (getMessage $chan $msg).Reactions}}\n            {{if and (ne (toInt .Emoji.ID) 0) (not .Emoji.Animated)}}\n                {{- $emoji = $emoji.AppendSlice (cslice (cslice (printf "<:%s:%d>" .Emoji.Name .Emoji.ID) "" .Emoji.ID)) -}}\n            {{else if (ne (toInt .Emoji.ID) 0) .Emoji.Animated}}\n                {{- $emoji = $emoji.AppendSlice (cslice (cslice (printf "<:%s:%d>" .Emoji.Name .Emoji.ID) "a" .Emoji.ID)) -}}\n            {{else if eq (toInt .Emoji.ID) 0}}\n                {{- $defEmoji = $defEmoji.AppendSlice (cslice (cslice .Emoji.Name)) -}}\n            {{end}}\n        {{end}}\n    {{end}}\n    \n    {{if $emoji}}\n    {{if eq (add (len $emoji) (len $defEmoji)) 1}}\n        {{with $emoji}}\n            {{$animated := index . 0 1}}\n            {{$id := str (index . 0 2)}}\n            {{$ext := ".png"}}{{$typeExt := "Image"}}\n            {{if $animated}}{{$ext = ".gif"}} {{$typeExt = "Gif"}}{{end}}\n            {{$embed.Set "image" (sdict "url" (printf "https://cdn.discordapp.com/emojis/%s%s" $id $ext))}}\n            {{- $embed.Set "description" (print "`" (index (split (index $emoji 0 0) ":") 1) "`\\n[" $typeExt " Link](https://cdn.discordapp.com/emojis/" $id $ext ")") -}}\n        {{end}}\n    {{else}}\n        {{range $emoji}}\n            {{$animated := index . 1}}\n            {{$id := index . 2}}\n            {{$ext := ".png"}}{{$typeExt := "Image"}}\n            {{if $animated}}{{$ext = ".gif"}}{{$typeExt = "Gif"}}{{end}}\n            {{- $fields = $fields.Append (sdict "name" (print "`" (index (split (index . 0) ":") 1) "`") "value" (print "[" $typeExt " Link](https://cdn.discordapp.com/emojis/" $id $ext ")") "inline" true) -}}\n        {{end}}\n        {{$embed.Set "title" "This message contains more than one emoji."}}\n        {{$embed.Set "fields" $fields}}\n    {{end}}\n    {{end}}\n    \n    {{if $defEmoji}}\n        {{$emoji_U := ""}}{{$url := "https://twemoji.maxcdn.com/v/latest/72x72/"}}\n\n        {{if eq (add (len $emoji) (len $defEmoji)) 1}}\n            {{- range toRune (index $defEmoji 0 0)}}\n                {{- $emoji_U = joinStr "-" $emoji_U (printf "%04x" .)}}\n            {{- end -}}\n            {{$url = joinStr "" $url $emoji_U ".png"}}\n            {{$embed.Set "image"  (sdict "url" $url)}}\n            {{- $embed.Set "description" (print "`" (index $defEmoji 0 0) "`\\n[Image Link](" $url ")") -}}\n        {{else}}\n            {{range $defEmoji}}\n                {{- range toRune (index . 0)}}\n                    {{- $emoji_U = joinStr "-" $emoji_U (printf "%04x" . )}}\n                {{end}}\n                {{- $fields = $fields.Append (sdict "name" (print "`" (index . 0) "`") "value" (print "[Image Link](" (joinStr "" $url $emoji_U ".png") ")") "inline" true) -}}\n                {{$emoji_U = ""}}\n            {{end}}\n            {{$embed.Set "title" "This message contains more than one emoji."}}\n            {{$embed.Set "fields" $fields}}\n        {{end}}\n    {{end}}\n        \n    {{if and (not $emoji) (not $defEmoji) (not $error) (not (eq $subArg "help"))}}\n        {{editMessage nil $waitMsg (print "This message does not contain any emojis or you have given an incorrect message ID.")}}\n        {{deleteMessage nil $waitMsg 10}}\n    {{else if and (gt (len $fields) 25) (not $error) (not (eq $subArg "help"))}}\n        {{editMessage nil $waitMsg (print "There are more than 25 emojis in the message, please try again with fewer emojis or with a different source message.")}}\n        {{deleteMessage nil $waitMsg 10}}\n    {{else if $embed}}\n        {{$embed.Set "color" 0x39ff14}}\n        {{$embed.Set "title" (joinStr "" "Big Emoji")}}\n        {{if $defEmoji}}\n            {{$embed.Set "footer" (sdict "text" (print "Default emoji not correct? Check help.\\n" .Message.Author.String "  |  -bigemoji help") "icon_url" (.User.AvatarURL "256"))}}\n        {{else}}\n            {{$embed.Set "footer" (sdict "text" (print .Message.Author.String "  |  -bigemoji help") "icon_url" (.User.AvatarURL "256"))}}\n        {{end}}\n        {{editMessage nil $waitMsg (complexMessageEdit "content" "" "embed" (cembed $embed))}}\n    {{end}}\n\n{{else}}\n    {{$failMsg := sendMessageRetID nil (print "No arguments provided! Use `-bigemoji help` for information on how to use this command.")}}\n    {{deleteMessage nil $failMsg 10}}\n{{end}}\n')),(0,o.yg)("h2",{id:"attribution"},"Attribution"),(0,o.yg)("p",null,"This command uses Twemoji images provided by the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/twitter/twemoji"},"official Twemoji project"),", which are licensed under CC-BY 4.0."),(0,o.yg)("h2",{id:"author"},"Author"),(0,o.yg)("p",null,"This custom command was written by ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/dvoraknt"},"@dvoraknt"),"."))}p.isMDXComponent=!0}}]);