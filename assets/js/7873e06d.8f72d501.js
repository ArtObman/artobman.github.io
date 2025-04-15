"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5113],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,y=m["".concat(s,".").concat(g)]||m[g]||p[g]||i;return n?a.createElement(y,r(r({ref:t},d),{},{components:n})):a.createElement(y,r({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(8168),o=(n(6540),n(5680));const i={title:"Overview"},r=void 0,l={unversionedId:"fun/qotd/advanced/overview",id:"fun/qotd/advanced/overview",title:"Overview",description:"An advanced QOTD system which automatically posts a question every day, either a random default question or from a queue",source:"@site/docs/fun/qotd/advanced/overview.md",sourceDirName:"fun/qotd/advanced",slug:"/fun/qotd/advanced/overview",permalink:"/fun/qotd/advanced/overview",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/qotd/advanced/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/fun/qotd/overview"},next:{title:"Component Handler",permalink:"/fun/qotd/advanced/component-handler"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Installing",id:"installing",level:2},{value:"Main Command",id:"main-command",level:3},{value:"Component Handler",id:"component-handler",level:3},{value:"Modal Handler",id:"modal-handler",level:3},{value:"Interval Trigger",id:"interval-trigger",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Administration",id:"administration",level:3},{value:"Suggesting Questions",id:"suggesting-questions",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Author",id:"author",level:2}],d={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"An advanced QOTD system which automatically posts a question every day, either a random default question or from a queue\nof suggested questions from your server members."),(0,o.yg)("h2",{id:"features"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Permits server members to add questions to a queue.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Allows you to configure a queue channel to view the question queue and submit new questions."),(0,o.yg)("li",{parentName:"ul"},"Allows you to delete any question from the queue at any time."))),(0,o.yg)("li",{parentName:"ul"},"Posts a question in a delegated QOTD channel each day.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Posts the oldest question in the queue."),(0,o.yg)("li",{parentName:"ul"},"Posts a random default question if no questions in the queue."),(0,o.yg)("li",{parentName:"ul"},"Allows you to force a new question post with ",(0,o.yg)("inlineCode",{parentName:"li"},"qotd push"),"."))),(0,o.yg)("li",{parentName:"ul"},"Creates a new thread for each question.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"If you set up your QOTD channel as a forum channel, the system creates a new forum post for each question."))),(0,o.yg)("li",{parentName:"ul"},"Publishes each question, if used in an announcement channel."),(0,o.yg)("li",{parentName:"ul"},"Pings a role on each new question."),(0,o.yg)("li",{parentName:"ul"},"Sticky message at the bottom of the QOTD channel reminding members what the question is."),(0,o.yg)("li",{parentName:"ul"},"Completely interactive configuration setup, no config variables required.")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Most of these features are configurable via the interactive setup!")),(0,o.yg)("h2",{id:"installing"},"Installing"),(0,o.yg)("p",null,"As usual, there are instructions describing where to put the script and which trigger to use on the pages corresponding to the individual commands. Additionally, we've documented how and where to add these scripts down below."),(0,o.yg)("h3",{id:"main-command"},"Main Command"),(0,o.yg)("p",null,"Add the ",(0,o.yg)("a",{parentName:"p",href:"main-cc"},"main command")," as a new custom command. The trigger is a regex type with the trigger set to ",(0,o.yg)("inlineCode",{parentName:"p"},"\\A"),"."),(0,o.yg)("h3",{id:"component-handler"},"Component Handler"),(0,o.yg)("p",null,"Next, add the ",(0,o.yg)("a",{parentName:"p",href:"component-handler"},"component handler")," as a new custom command. The trigger is a component type with the\nCustom ID set to ",(0,o.yg)("inlineCode",{parentName:"p"},"\\Aqotd-"),"."),(0,o.yg)("h3",{id:"modal-handler"},"Modal Handler"),(0,o.yg)("p",null,"Next, add the ",(0,o.yg)("a",{parentName:"p",href:"modal-handler"},"modal handler")," as a new custom command. The trigger is a modal type with the\nCustom ID set to ",(0,o.yg)("inlineCode",{parentName:"p"},"\\A0?qotd-"),"."),(0,o.yg)("h3",{id:"interval-trigger"},"Interval Trigger"),(0,o.yg)("p",null,"Finally, add the ",(0,o.yg)("a",{parentName:"p",href:"interval"},"interval command")," as a new custom command. Configure this custom command to use the hourly interval trigger type, set to ",(0,o.yg)("inlineCode",{parentName:"p"},"24h")," (or any other interval of your choice) in an arbitrary channel."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Before saving the interval command, ",(0,o.yg)("em",{parentName:"p"},"disable it"),", and do not enable again until after you have completed the ",(0,o.yg)("a",{parentName:"p",href:"overview/#configuration"},"interactive setup"),".")),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"Now, it's time to configure your QOTD system. This is a completely interactive setup, so just run ",(0,o.yg)("inlineCode",{parentName:"p"},"-qotd setup")," (or\nreplace ",(0,o.yg)("inlineCode",{parentName:"p"},"-")," with your server's prefix) and follow the instructions."),(0,o.yg)("admonition",{type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"YAGPDB must have ",(0,o.yg)("inlineCode",{parentName:"p"},"View Channel"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Send Messages"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"Embed Links")," permission in the channel you run ",(0,o.yg)("inlineCode",{parentName:"p"},"qotd setup")," in.")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Once you are finished with setup, you can enable your ",(0,o.yg)("a",{parentName:"p",href:"#interval-trigger"},"interval cc"),". If you forget to do this,\nyour questions will not automatically post.")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("h3",{id:"administration"},"Administration"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"qotd setup")," - Starts the interactive setup. Run this at any time to reconfigure QOTD."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"qotd push")," - Pushes a new question immediately"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"qotd delete [ID or -all]")," - Deletes a question from the queue by ID or resets the queue to blank. ID is the\nquestion's place in the queue.")),(0,o.yg)("h3",{id:"suggesting-questions"},"Suggesting Questions"),(0,o.yg)("p",null,'Any of the below methods will work if "Suggestions Open" was enabled during interactive setup.'),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"qotd suggest [new question]")," - Adds a question to the suggestion queue. Can be run anywhere YAGPDB has view and send\nmessages permission."),(0,o.yg)("li",{parentName:"ul"},"Buttons: Buttons are located under each question, and under the question queue message. Tap them to open a modal to type\nyour question into."),(0,o.yg)("li",{parentName:"ul"},"Queue Channel: Sending any message in the queue channel will add a question to the queue.")),(0,o.yg)("admonition",{type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"It is recommended that you either remove ",(0,o.yg)("inlineCode",{parentName:"p"},"Send Messages")," permissions from your server members in your Queue channel, or\nset an appropriate slowmode to prevent users from spamming questions.")),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("p",null,"The interactive setup catches almost every error, particularly permissions errors. If the QOTD system isn't working, a\ngood first step is to run ",(0,o.yg)("inlineCode",{parentName:"p"},"qotd setup")," again and start from scratch. This will ",(0,o.yg)("em",{parentName:"p"},"not")," clear your queued questions, you\nwill need to run ",(0,o.yg)("inlineCode",{parentName:"p"},"qotd delete -all")," to do that."),(0,o.yg)("h2",{id:"author"},"Author"),(0,o.yg)("p",null,"This custom command system was written by ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/SoggySaussages"},"@SoggySaussages"),"."))}p.isMDXComponent=!0}}]);