"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7811],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=m(t),d=i,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[c]="string"==typeof e?e:i,o[1]=r;for(var m=2;m<l;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3238:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var a=t(8168),i=(t(6540),t(5680));const l={title:"Slot Machine"},o=void 0,r={unversionedId:"fun/slot-machine",id:"fun/slot-machine",title:"Slot Machine",description:"This command runs the slot machine game.",source:"@site/docs/fun/slot-machine.md",sourceDirName:"fun",slug:"/fun/slot-machine",permalink:"/fun/slot-machine",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/slot-machine.md",tags:[],version:"current",frontMatter:{title:"Slot Machine"},sidebar:"sidebar",previous:{title:"Repeat Phrase",permalink:"/fun/repeat"},next:{title:"Starboard V1",permalink:"/fun/starboardv1"}},s={},m=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],p={toc:m},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This command runs the slot machine game."),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"This command assumes that you have an existing currency system set up to provide credits to users.")),(0,i.yg)("h2",{id:"trigger"},"Trigger"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Type:")," ",(0,i.yg)("inlineCode",{parentName:"p"},"Command"),(0,i.yg)("br",null),"\n",(0,i.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,i.yg)("inlineCode",{parentName:"p"},"slotmachine")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"slotmachine <amount>")," - Runs the slot machine, betting ",(0,i.yg)("inlineCode",{parentName:"li"},"amount")," credits.")),(0,i.yg)("h2",{id:"configuration"},"Configuration"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\ud83d\udccc ",(0,i.yg)("inlineCode",{parentName:"p"},"$dbName"),(0,i.yg)("br",null),"\nDatabase entry name that stores the user's credits.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$gameName"),(0,i.yg)("br",null),"\nWhat the game should be called.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$user"),(0,i.yg)("br",null),"\nWhat the player should be called.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$spinName"),(0,i.yg)("br",null),"\nWhat to show to users when the slot machine is currently spinning.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$lose"),(0,i.yg)("br",null),"\nText to show users when they lose.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$win"),(0,i.yg)("br",null),"\nText to show users when they win.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$profit"),(0,i.yg)("br",null),"\nWhat 'profit' should be called.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$currency"),(0,i.yg)("br",null),"\nName of the currency.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$payOut"),(0,i.yg)("br",null),"\nWhat 'pay out' should be called.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$youHave"),(0,i.yg)("br",null),"\nWhat 'you have' should be called.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$helper"),(0,i.yg)("br",null),"\nHelper text title.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$helpText"),(0,i.yg)("br",null),"\nHelp text for the command.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$notEnough"),(0,i.yg)("br",null),"\nMessage to show to users when they do not have sufficient credits.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$betBelow1"),(0,i.yg)("br",null),"\nMessage to show to users when they bet less than one credit.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\ud83d\udccc ",(0,i.yg)("inlineCode",{parentName:"p"},"$bettingChannel"),(0,i.yg)("br",null),"\nChannel ID where users can play the game.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$minMax"),(0,i.yg)("br",null),"\nWhether there should be a minimum/maximum amount users can bet (see the options below).")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$minBet"),(0,i.yg)("br",null),"\nMinimum amount people can bet.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$maxBet"),(0,i.yg)("br",null),"\nMaximum amount people can bet.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"$outOfRange"),(0,i.yg)("br",null),"\nMessage to show to users when they bet an amount that is less than the minimum / greater than the maximum.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\ud83d\udccc ",(0,i.yg)("inlineCode",{parentName:"p"},"$channels"),(0,i.yg)("br",null),"\nA list of arbitrary channel IDs in your server to prevent the game from lagging."))),(0,i.yg)("h2",{id:"code"},"Code"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/fun/slot_machine.go.tmpl",file:"../../../src/fun/slot_machine.go.tmpl"},'{{/*\n    Slot machine game that integrates with an existing currency system.\n    See <https://yagpdb-cc.github.io/fun/slot-machine> for more information.\n\n    Author: Pedro Pessoa <https://github.com/Pedro-Pessoa>\n*/}}\n\n{{/* Configurable values */}}\n{{ $dbName := "CREDITS" }}\n{{ $gameName := "Slot Machine" }}\n{{ $user := "User" }}\n{{ $spinName := "SPINNING" }}\n{{ $lose := "You lost :(" }}\n{{ $win := "YOU WON!" }}\n{{ $profit := "Profit" }}\n{{ $currency := "Credits" }}\n{{ $payOut := "Pay Out" }}\n{{ $youHave := "you have " }}\n{{ $helper := "Usage" }}\n{{ $helpText := "-bet <amount>\\nFor example: **-bet 10**\\nThis way you would be betting 10 credits." }}\n{{ $notEnough := "Insuficient credits" }}\n{{ $bettingChannel := 640790412986023949 }}\n{{ $minMax := true }}\n{{ $minBet := 100 }}\n{{ $maxBet := 200 }}\n{{ $betBelow1 := printf "You have to bet %v credit at least" $minBet }}\n{{ $outOfRange := printf "You have to bet between %v and %v!" $minBet $maxBet}}\n{{ $channels := cslice\n    650881854722932746\n    663411278139883520\n    641092472423972864\n    642429118633213953\n    678827664135553044\n}}\n{{/* End of configurable values */}}\n\n{{ $template := "**-------------------\\n %s | %s | %s |\\n-------------------\\n- %s -**" }}\n{{ $header := printf "%s | %s: %s" $gameName $user .User.Username }}\n{{ $slotEmoji := "<a:slotmoney:1058566805427322900>" }}\n{{ $g := 65280 }}{{ $y := 16776960 }}{{ $r := 16711680 }}{{ $b := 65534 }}\n{{ $emojis := cslice "\ud83e\udd47" "\ud83e\udd47" "\ud83e\udd47" "\ud83e\udd47" "\ud83e\udd47" "\ud83e\udd47" "\ud83e\udd47"\n    "\ud83d\udc8e" "\ud83d\udc8e" "\ud83d\udc8e" "\ud83d\udc8e" "\ud83d\udc8e" "\ud83d\udc8e"\n    "\ud83d\udcaf" "\ud83d\udcaf" "\ud83d\udcaf" "\ud83d\udcaf"\n    "\ud83d\udcb5" "\ud83d\udcb5" "\ud83d\udcb5"\n    "\ud83d\udcb0" "\ud83d\udcb0" }}\n{{ $choosen := index (shuffle $emojis) 0 }}\n{{ $choosen2 := index (shuffle $emojis) 0 }}\n{{ $choosen3 := index (shuffle $emojis) 0 }}\n{{ $bal := toInt (dbGet .User.ID $dbName).Value }}\n{{ $embed := sdict\n    "color" $g\n    "fields" (cslice (sdict\n        "name" $header\n        "value" (printf $template $slotEmoji $slotEmoji $slotEmoji $spinName)\n        "inline" false\n    )) }}\n{{ if and (not .ExecData) (eq .Channel.ID $bettingChannel) (not (dbGet .User.ID "block_slot_123456")) }}\n    {{ if .CmdArgs }}\n        {{ $bet := toInt (index .CmdArgs 0) }}\n        {{ $ok := true }}\n        {{ if $minMax }}\n            {{ if or (lt $bet $minBet) (gt $bet $maxBet) }}\n                {{ $ok = false }}\n                {{ $outOfRange }}\n            {{ end }}\n        {{ end }}\n        {{ if $ok }}\n            {{ if ge $bet 1 }}\n                {{ if ge $bal $bet }}\n                    {{ dbSet .User.ID "block_slot_123456" true }}\n                    {{ $silent := dbIncr .User.ID $dbName (mult -1 $bet) }}\n                    {{ $id := sendMessageRetID nil (cembed $embed) }}\n                    {{ execCC .CCID (index (shuffle $channels) 0) 2 (sdict\n                        "depth" 1\n                        "id" $id\n                        "bet" $bet\n                    ) }}\n                {{ else }} {{ $notEnough }}, {{ .User.Mention }}! {{ end }}\n            {{ else }} {{ $betBelow1 }}, {{ .User.Mention }}! {{ end }}\n        {{ end }}\n    {{ else }}\n        {{ $embedHelp := cembed\n            "title" $gameName\n            "fields" (cslice\n                (sdict \n                    "name" $payOut \n                    "value" "**\ud83e\udd47\ud83e\udd47\u2753 - 1x\\n\ud83d\udc8e\ud83d\udc8e\u2753 - 2x\\n\ud83d\udcaf\ud83d\udcaf\u2753 - 3x\\n\ud83e\udd47\ud83e\udd47\ud83e\udd47 - 3x\\n\ud83d\udc8e\ud83d\udc8e\ud83d\udc8e - 4x\\n\ud83d\udcb5\ud83d\udcb5\u2753 - 4x\\n\ud83d\udcaf\ud83d\udcaf\ud83d\udcaf - 5x\\n\ud83d\udcb0\ud83d\udcb0\u2753 - 5x\\n\ud83d\udcb5\ud83d\udcb5\ud83d\udcb5 - 10x\\n\ud83d\udcb0\ud83d\udcb0\ud83d\udcb0 - 15x**"\n                    "inline" false\n                )\n                (sdict "name" $helper "value" $helpText "inline" false)\n            )\n            "color" $y\n        }}\n        {{ sendMessage nil $embedHelp }}\n    {{ end }}\n{{ end }}\n\n{{ with .ExecData }}\n    {{ if eq .depth 1 }}\n        {{ $embed.Set "fields" (cslice (sdict\n            "name" $header\n            "value" (printf $template $choosen $slotEmoji $slotEmoji $spinName)\n            "inline" false\n        )) }}\n        {{ editMessage $bettingChannel .id (cembed $embed) }}\n        {{ execCC $.CCID (index (shuffle $channels) 0) 1 (sdict\n            "depth" 2\n            "id" .id\n            "choosen" $choosen\n            "bet" .bet\n        ) }}\n    {{ else if eq .depth 2 }}\n        {{ $embed.Set "fields" (cslice\n            (sdict\n                "name" $header\n                "value" (printf $template .choosen $choosen2 $slotEmoji $spinName)\n                "inline" false\n            )\n        ) }}\n        {{ editMessage $bettingChannel .id (cembed $embed) }}\n        {{ execCC $.CCID (index (shuffle $channels) 0) 1 (sdict\n            "depth" 3\n            "id" .id\n            "choosen" .choosen\n            "choosen2" $choosen2\n            "bet" .bet\n        ) }}\n    {{ else if eq .depth 3 }}\n        {{ $announce := $lose }}\n        {{ $multiplier := 1 }}\n        {{ if (and (eq .choosen "\ud83d\udc8e") (eq .choosen2 "\ud83d\udc8e") (ne $choosen3 "\ud83d\udc8e")) }}\n            {{ $multiplier = 2 }}\n        {{ else if or (and (eq .choosen "\ud83e\udd47") (eq .choosen2 "\ud83e\udd47") (eq $choosen3 "\ud83e\udd47")) (and (eq .choosen "\ud83d\udcaf") (eq .choosen2 "\ud83d\udcaf") (ne $choosen3 "\ud83d\udcaf")) }}\n            {{ $multiplier = 3 }}\n        {{ else if or (and (eq .choosen "\ud83d\udc8e") (eq .choosen2 "\ud83d\udc8e") (eq $choosen3 "\ud83d\udc8e")) (and (eq .choosen "\ud83d\udcb5") (eq .choosen2 "\ud83d\udcb5") (ne $choosen3 "\ud83d\udcb5")) }}\n            {{ $multiplier = 4 }}\n        {{ else if or (and (eq .choosen "\ud83d\udcaf") (eq .choosen2 "\ud83d\udcaf") (eq $choosen3 "\ud83d\udcaf")) (and (eq .choosen "\ud83d\udcb0") (eq .choosen2 "\ud83d\udcb0") (ne $choosen3 "\ud83d\udcb0")) }}\n            {{ $multiplier = 5 }}\n        {{ else if and (eq .choosen "\ud83d\udcb5") (eq .choosen2 "\ud83d\udcb5") (eq $choosen3 "\ud83d\udcb5") }}\n            {{ $multiplier = 10 }}\n        {{ else if and (eq .choosen "\ud83d\udcb0") (eq .choosen2 "\ud83d\udcb0") (eq $choosen3 "\ud83d\udcb0") }}\n            {{ $multiplier = 15 }}\n        {{ end }}\n        {{ $pag1 := sdict "name" $profit "value" (joinStr "" "**-" .bet " " (lower $currency) "**") "inline" true }}\n        {{ $c := $r }}\n        {{ if eq .choosen .choosen2 }}\n            {{ $c = $b }}\n            {{ $announce = $win }}\n            {{ $pag1 = (sdict "name" $profit "value" (joinStr "" "**" (mult .bet $multiplier) " " (lower $currency) "**") "inline" true) }}\n            {{ $silent2 := dbIncr $.User.ID $dbName (mult .bet $multiplier) }}\n        {{ end }}\n        {{ $embed.Set "fields" (cslice\n            (sdict\n                "name" $header\n                "value" (printf $template .choosen .choosen2 $choosen3 $announce)\n                "inline" false\n            )\n        ) }}\n        {{ $embed.Set "color" $c }}\n        {{ $embed.Set "fields" ($embed.fields.Append $pag1) }}\n        {{ $saldo := toInt (dbGet $.User.ID $dbName).Value }}\n        {{ $pag2 := sdict\n            "name" $currency\n            "value" (joinStr "" $youHave " **" $saldo " " (lower $currency) "**")\n            "inline" true\n         }}\n        {{ $embed.Set "fields" ($embed.fields.Append $pag2) }}\n        {{ editMessage $bettingChannel .id (cembed $embed) }}\n        {{ dbDel $.User.ID "block_slot_123456" }}\n    {{ end }}\n{{ end }}\n')),(0,i.yg)("h2",{id:"author"},"Author"),(0,i.yg)("p",null,"This custom command was written by ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Pedro-Pessoa"},"@Pedro-Pessoa"),"."))}u.isMDXComponent=!0}}]);