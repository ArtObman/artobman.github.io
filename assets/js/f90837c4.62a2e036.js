"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1215],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=s(t),p=o,m=c["".concat(l,".").concat(p)]||c[p]||g[p]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[c]="string"==typeof e?e:o,i[1]=d;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=t(8168),o=(t(6540),t(5680));const a={title:"Modal Handler"},i=void 0,d={unversionedId:"fun/qotd/advanced/modal-handler",id:"fun/qotd/advanced/modal-handler",title:"Modal Handler",description:"This command parses the modal submitted questions and triggers the Main CC to add them to the queue.",source:"@site/docs/fun/qotd/advanced/modal-handler.md",sourceDirName:"fun/qotd/advanced",slug:"/fun/qotd/advanced/modal-handler",permalink:"/fun/qotd/advanced/modal-handler",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/fun/qotd/advanced/modal-handler.md",tags:[],version:"current",frontMatter:{title:"Modal Handler"},sidebar:"sidebar",previous:{title:"Main CC",permalink:"/fun/qotd/advanced/main-cc"},next:{title:"Question of the Day",permalink:"/fun/qotd/basic/qotd"}},l={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],u={toc:s},c="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This command parses the modal submitted questions and triggers the Main CC to add them to the queue."),(0,o.yg)("p",null,"For more information about the QOTD system, see ",(0,o.yg)("a",{parentName:"p",href:"overview"},"the overview page"),"."),(0,o.yg)("h2",{id:"trigger"},"Trigger"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Type:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Modal"),(0,o.yg)("br",null),"\n",(0,o.yg)("strong",{parentName:"p"},"Custom ID:")," ",(0,o.yg)("inlineCode",{parentName:"p"},"\\A0?qotd-")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"For best results, do not restrict this command's channels or roles.")),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"All configuration is done via the ",(0,o.yg)("inlineCode",{parentName:"p"},"qotd setup")," command. Only run the setup command after installing all four CCs in the QOTD\nsystem. See the ",(0,o.yg)("a",{parentName:"p",href:"overview/#configuration"},"QOTD system overview")," for more information."),(0,o.yg)("h2",{id:"code"},"Code"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../../../src/fun/qotd/advanced/modal_handler.go.tmpl",file:"../../../../../src/fun/qotd/advanced/modal_handler.go.tmpl"},'{{/*\n    Handles modals during QOTD usage.\n    See <https://yagpdb-cc.github.io/fun/qotd/modal-handler> for more information.\n \n    Author: SoggySaussages <https://github.com/SoggySaussages>\n*/}}\n\n{{ ephemeralResponse }}\n\n{{ $config := dbGet 0 "qotd-config" }}\n{{ with $config }}\n    {{ $config = .Value }}\n{{ else }}\n    Something went wrong, please run `{{ .ServerPrefix }}qotd setup` again.\n    {{ return }}\n{{ end }}\n\n{{ if not $config.SuggestionsOpen }}\n    Sorry, a server admin has disabled question suggestions.\n{{ end }}\n\n{{ execCC $config.MainCC nil 0 ( sdict "Suggestion" ( index .Values 0 ) ) }}\nDone!\n')),(0,o.yg)("h2",{id:"author"},"Author"),(0,o.yg)("p",null,"This custom command was written by ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/SoggySaussages"},"@SoggySaussages"),"."))}g.isMDXComponent=!0}}]);