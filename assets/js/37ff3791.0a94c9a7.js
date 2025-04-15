"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7825],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>$});var i=t(6540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=i.createContext({}),c=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(u.Provider,{value:n},e.children)},g="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),g=c(t),f=s,$=g["".concat(u,".").concat(f)]||g[f]||l[f]||o;return t?i.createElement($,r(r({ref:n},d),{},{components:t})):i.createElement($,r({ref:n},d))}));function $(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[g]="string"==typeof e?e:s,r[1]=a;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2402:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(8168),s=(t(6540),t(5680));const o={title:"Main CC"},r=void 0,a={unversionedId:"fun/qotd/advanced/main-cc",id:"fun/qotd/advanced/main-cc",title:"Main CC",description:"This command holds the majority of the QOTD system's code, managing the QOTD channel, posting new questions, the queue,",source:"@site/docs/fun/qotd/advanced/main-cc.md",sourceDirName:"fun/qotd/advanced",slug:"/fun/qotd/advanced/main-cc",permalink:"/fun/qotd/advanced/main-cc",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/qotd/advanced/main-cc.md",tags:[],version:"current",frontMatter:{title:"Main CC"},sidebar:"sidebar",previous:{title:"Interval",permalink:"/fun/qotd/advanced/interval"},next:{title:"Modal Handler",permalink:"/fun/qotd/advanced/modal-handler"}},u={},c=[{value:"Trigger",id:"trigger",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],d={toc:c},g="wrapper";function l(e){let{components:n,...t}=e;return(0,s.yg)(g,(0,i.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This command holds the majority of the QOTD system's code, managing the QOTD channel, posting new questions, the queue,\nand any text commands from users."),(0,s.yg)("p",null,"For more information about the QOTD system, see ",(0,s.yg)("a",{parentName:"p",href:"overview"},"the overview page"),"."),(0,s.yg)("h2",{id:"trigger"},"Trigger"),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Type:")," ",(0,s.yg)("inlineCode",{parentName:"p"},"Regex"),(0,s.yg)("br",null),"\n",(0,s.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,s.yg)("inlineCode",{parentName:"p"},"\\A")),(0,s.yg)("admonition",{type:"note"},(0,s.yg)("p",{parentName:"admonition"},"For best results, do not restrict this command's channels or roles.")),(0,s.yg)("h2",{id:"configuration"},"Configuration"),(0,s.yg)("p",null,"All configuration is done via the ",(0,s.yg)("inlineCode",{parentName:"p"},"qotd setup")," command. Only run the setup command after installing all four CCs in the QOTD\nsystem. See the ",(0,s.yg)("a",{parentName:"p",href:"overview/#configuration"},"QOTD system overview")," for more information."),(0,s.yg)("h2",{id:"code"},"Code"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../../src/fun/qotd/advanced/qotd.go.tmpl",file:"../../../../../src/fun/qotd/advanced/qotd.go.tmpl"},'{{/*\n    QOTD posts a question every day, allowing users to submit their own as well.\n    See <https://yagpdb-cc.github.io/fun/qotd/overview> for more information.\n \n    Author: SoggySaussages <https://github.com/SoggySaussages>\n*/}}\n\n{{ $suggestion := false }}\n{{ $push := false }}\n{{ $refreshQueue := false }}\n{{ $newQuestion := false }}\n{{ $updateSticky := false }}\n\n{{ $setupErr := printf "QOTD hasn\'t been setup yet, please use `%sqotd setup` to get started!" .ServerPrefix }}\n\n{{ $config := dbGet 0 "qotd-config" }}\n{{ with $config }}\n  {{ $config = .Value }}\n{{ else }}\n  {{ $config = sdict "Complete" false }}\n{{ end }}\n\n{{ if not .ExecData }}\n  {{ if hasPrefix .Message.Content ( print .ServerPrefix "qotd" ) }}\n    {{ if eq .Message.Content ( print .ServerPrefix "qotd" ) }}\n      {{ if $config.Complete }}\n        Check out today\'s question in <#{{ or $config.ActiveThread $config.MainChannel }}>!\n        {{ return }}\n      {{ else }}\n        {{ $setupErr }}\n        {{ return }}\n      {{ end }}\n    {{ end }}\n\n    {{ $args := parseArgs 2 ""\n      ( carg "string" "Command (qotd)" )\n      ( carg "string" "Subcommand (suggest|setup|push|delete)" )\n      ( carg "string" "Additional Values" ) }}\n\n    {{ $subCmd := $args.Get 1 }}\n    {{ if eq $subCmd "suggest" }}\n      {{ if not $config.Complete }}\n        {{ $setupErr }}\n        {{ return }}\n      {{ end }}\n      {{ if not $config.SuggestionsOpen }}\n        Sorry, a server admin has disabled question suggestions.\n        {{ return }}\n      {{ end }}\n      {{ if $args.IsSet 2 }}\n        {{ $suggestion = $args.Get 2 }}\n        Your suggestion was submitted!\n      {{ else }}\n        Missing a question suggestion!\\nSyntax is `{{ .ServerPrefix }}qotd suggest {{ slice ( execAdmin "topic" ) 2 }}`\n        {{ return }}\n      {{ end }}\n    {{ else if eq $subCmd "push" }}\n      {{ if not $config.Complete }}\n        {{ $setupErr }}\n        {{ return }}\n      {{ end }}\n      {{ $push = hasPermissions .Permissions.ManageMessages }}\n    {{ else if hasPrefix $subCmd "del" }}\n      {{ if not $config.Complete }}\n        {{ $setupErr }}\n        {{ return }}\n      {{ end }}\n      {{ if not ( hasPermissions .Permissions.ManageServer ) }}\n        You can\'t run that command!\n        {{ return }}\n      {{ end }}\n      {{ if $args.IsSet 2 }}\n        {{ with toInt ( $args.Get 2 ) }}\n          {{ $int := sub . 1 }}\n          {{ if not $config.QuestionsQueue }}\n            There are no questions in the queue!\n            {{ return }}\n          {{ end }}\n          {{ $newQuestions := cslice }}\n          {{ range $i, $q := $config.QuestionsQueue }}\n            {{ if eq $i $int }}\n              Deleted `{{ $q.Question }}`!\n            {{ else }}\n              {{ $newQuestions = $newQuestions.Append $q }}\n            {{ end }}\n          {{ end }}\n          {{ $config.Set "QuestionsQueue" $newQuestions }}\n          {{ $refreshQueue = true }}\n        {{ else if hasPrefix ( $args.Get 2 ) "-a" }}\n          {{ $config.Set "QuestionsQueue" cslice }}\n          Reset question queue. \n          {{ $refreshQueue = true }}\n        {{ end }}\n      {{ else }}\n        Please use ID or -all.\n      {{ end }}\n    {{ else if eq $subCmd "setup" }}\n      {{ if not ( hasPermissions .Permissions.ManageServer ) }}\n        You can\'t run that command!\n        {{ return }}\n      {{ end }}\n      {{ $config.Set "MainCC" ( toInt .CCID ) }}\n      {{ $config.Set "Complete" false }}\n      {{ dbSet 0 "qotd-config" $config }}\n      {{ $embed := cembed "title" "QOTD Setup" "color" 0x93e9be "description" "Welcome to QOTD setup! For starters, please select the channel for QOTD announcements (supports forum channels, announcement channels, and other text channels)." }}\n      {{ $menu := cmenu "type" "channel" "custom_id" "qotd-setup-main_channel" "channel_types" (cslice 0 2 5 10 11 12 15) }}\n      {{ sendMessage nil ( complexMessage "embed" $embed "menus" $menu ) }}\n      {{ return }}\n    {{ end }}\n  {{ else if $config.Complete }}\n    {{ if eq .Channel.ID ( toInt64 $config.ActiveThread ) $config.MainChannel }}\n      {{ $updateSticky = true }}\n    {{ else if eq .Channel.ID $config.QueueChannel }}\n      {{ if not $config.SuggestionsOpen }}\n        {{ return }}\n      {{ end }}\n      {{ $suggestion = .Message.Content }}\n      {{ deleteTrigger 0 }}\n    {{ end }}\n  {{ end }}\n{{ else }}\n  {{ if .ExecData.Suggestion }}\n    {{ if not $config.SuggestionsOpen }}\n      {{ return }}\n    {{ end }}\n    {{ $suggestion = .ExecData.Suggestion }}\n  {{ else if eq .ExecData.Type "push" }}\n    {{ $push = true }}\n  {{ else if eq .ExecData.Type "refresh" }}\n    {{ $refreshQueue = true }}\n  {{ end }}\n{{ end }}\n\n{{ if $suggestion }}\n  {{/* Author: buthed010203 <https://github.com/buthed010203> */}}\n\n  {{ $col := 16777215 }}\n  {{ $p := 0 }}\n  {{ $r := .Member.Roles }}\n  {{ range .Guild.Roles }}\n    {{- if and ( in $r .ID ) .Color ( lt $p .Position ) }}\n        {{- $p = .Position }}\n        {{- $col = .Color }}\n    {{- end -}}\n  {{ end }}\n\n  {{ $newQuestion = sdict\n    "Question" $suggestion\n    "Author" ( sdict "ID" .User.ID "Color" $col )\n  }}\n{{ end }}\n\n{{ if $push }}\n  {{ $questions := cslice }}\n  {{ with $config.QuestionsQueue }}\n    {{ $questions = . }}\n  {{ end }}\n\n  {{ $chosenQuestion := sdict\n    "Custom" false\n    "Question" ( slice ( execAdmin "topic" ) 2 ) }}\n  {{ if and ( gt ( len $questions ) 0 ) $config.SuggestionsOpen }}\n    {{ $question := index $questions 0 }}\n    {{ $chosenQuestion = sdict\n      "Custom" true\n      "Question" $question.Question\n      "Author" $question.Author }}\n  {{ end }}\n\n  {{ $embed := sdict\n    "title" "Question of the day!" }}\n  {{ $pattern := printf "# %s\\n\\nQuestion chosen %%s." $chosenQuestion.Question }}\n\n  {{ if $chosenQuestion.Custom }}\n    {{ $embed.Set "description" ( printf $pattern ( printf "by <@%d>" $chosenQuestion.Author.ID ) ) }}\n    {{ $embed.Set "color" $chosenQuestion.Author.Color }}\n    {{ $newQuestions := cslice }}\n    {{ if gt ( len $questions ) 1 }}\n      {{ $newQuestions = slice $questions 1 }}\n    {{ end }}\n    {{ $config.Set "QuestionsQueue" $newQuestions }}\n    {{ $refreshQueue = true }}\n  {{ else }}\n    {{ $embed.Set "description" ( printf $pattern "at random" ) }}\n    {{ $embed.Set "color" ( randInt 0x000000 0xFFFFFF ) }}\n  {{ end }}\n\n  {{ $msg := sdict "embed" $embed }}\n  {{ with $config.MentionRole }}\n    {{ $msg.Set "content" ( printf "<@&%d>" . ) }}\n  {{ end }}\n  {{ if $config.SuggestionsOpen }}\n    {{ $msg.Set "buttons" ( cbutton "label" "Suggest a question!" "custom_id" "qotd-suggest" ) }}\n  {{ end }}\n  {{ $questionMessageID := 0 }}\n  {{ $trimmedQuestion := $chosenQuestion.Question }}\n  {{ if gt ( len $trimmedQuestion ) 100 }}\n    {{ $trimmedQuestion = slice $trimmedQuestion 0 100 }}\n  {{ end }}\n  {{ if $config.ForumMode }}\n    {{ $msg.Del "content" }}\n    {{ $thread := createForumPost $config.MainChannel $trimmedQuestion ( complexMessage $msg ) }}\n    {{ $config.Set "ActiveThread" $thread.ID }}\n    {{ with $config.MentionRole }}\n      {{ sendMessageNoEscape $thread.ID ( printf "<@&%d>" . ) }}\n    {{ end }}\n  {{ else }}\n    {{ $qMID := sendMessageNoEscapeRetID $config.MainChannel ( complexMessage $msg ) }}\n    {{ if $config.UseThreads }}\n      {{ $thread := createThread $config.MainChannel $qMID $trimmedQuestion }}\n      {{ $config.Set "ActiveThread" $thread.ID }}\n    {{ end }}\n    {{ if $config.Publish }}\n      {{ publishMessage $config.MainChannel $qMID }}\n    {{ end }}\n  {{ end }}\n  {{ with $config.Sticky }}\n    {{ $newSticky := sdict . }}\n    {{ $newSticky.Set "Message" $chosenQuestion.Question }}\n    {{ $newSticky.Set "Color" $msg.embed.color }}\n    {{ $newSticky.Set "ID" 0 }}\n    {{ $newSticky.Set "ExpiresAt" currentTime }}\n    {{ $config.Set "Sticky" $newSticky }}\n  {{ end }}\n{{ end }}\n\n{{ if and ( or $newQuestion $refreshQueue ) $config.SuggestionsOpen }}\n  {{ $questions := cslice }}\n  {{ with $config.QuestionsQueue }}\n    {{ $questions = . }}\n  {{ end }}\n\n  {{ if $newQuestion }}\n    {{ $questions = $questions.Append $newQuestion }}\n    {{ $config.Set "QuestionsQueue" $questions }}\n  {{ end }}\n\n  {{ if $config.QueueChannel }}\n    {{ $msg := sdict\n      "title" "Question Queue:"\n      "color" 5832643 }}\n    {{ range $i, $q := $questions }}\n      {{ $msg.Set "description" ( printf "%s\\n%d. %s (by <@%d>)" ( or $msg.description "" ) $i $q.Question $q.Author.ID ) }}\n    {{ end }}\n\n    {{ if getMessage $config.QueueChannel ( or $config.QueueMessage 0 ) }}\n      {{ editMessage $config.QueueChannel $config.QueueMessage ( complexMessageEdit\n        "embed" ( cembed $msg )\n        "buttons" ( cbutton "label" "Suggest a question!" "custom_id" "qotd-suggest" ) ) }}\n    {{ else }}\n      {{ $config.Set "QueueMessage" ( sendMessageRetID $config.QueueChannel ( complexMessage\n      "embed" ( cembed $msg )\n      "buttons" ( cbutton "label" "Suggest a question!" "custom_id" "qotd-suggest" ) ) ) }}\n    {{ end }}\n  {{ end }}\n{{ end }}\n\n{{ if and $updateSticky $config.Sticky }}\n  {{ if gt ( $config.Sticky.ExpiresAt.Sub currentTime | toInt64 ) 0 }}\n    {{ return }}\n  {{ end }}\n\n  {{ $id := sendMessageRetID ( or $config.ActiveThread $config.MainChannel ) ( cembed "description" $config.Sticky.Message "color" $config.Sticky.Color ) }}\n  {{ with $config.Sticky.ID }}\n    {{ deleteMessage ( or $config.ActiveThread $config.MainChannel ) . 0 }}\n  {{ end }}\n  {{ $newSticky := sdict $config.Sticky }}\n  {{ $newSticky.Set "ID" $id }}\n  {{ $newSticky.Set "ExpiresAt" ( currentTime.Add ( mult .TimeSecond $config.Sticky.Cooldown | toDuration )  ) }}\n  {{ $config.Set "Sticky" $newSticky }}\n{{ end }}\n\n{{ dbSet 0 "qotd-config" $config }}\n')),(0,s.yg)("h2",{id:"author"},"Author"),(0,s.yg)("p",null,"This custom command was written by ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/SoggySaussages"},"@SoggySaussages"),"."))}l.isMDXComponent=!0}}]);