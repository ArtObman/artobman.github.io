"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8472],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(8168),i=(n(6540),n(5680));const o={title:"World Clock"},l=void 0,a={unversionedId:"utilities/world-clock",id:"utilities/world-clock",title:"World Clock",description:"This command shows the current time in various cities around the world.",source:"@site/docs/utilities/world-clock.md",sourceDirName:"utilities",slug:"/utilities/world-clock",permalink:"/utilities/world-clock",draft:!1,editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/utilities/world-clock.md",tags:[],version:"current",frontMatter:{title:"World Clock"},sidebar:"sidebar",previous:{title:"View Time",permalink:"/utilities/view-time"}},c={},s=[{value:"Trigger",id:"trigger",level:2},{value:"Usage",id:"usage",level:2},{value:"Changing the cities used",id:"changing-the-cities-used",level:2},{value:"Code",id:"code",level:2},{value:"Author",id:"author",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This command shows the current time in various cities around the world."),(0,i.yg)("h2",{id:"trigger"},"Trigger"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Type:")," ",(0,i.yg)("inlineCode",{parentName:"p"},"Command"),(0,i.yg)("br",null),"\n",(0,i.yg)("strong",{parentName:"p"},"Trigger:")," ",(0,i.yg)("inlineCode",{parentName:"p"},"worldclock")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"-worldclock")," - Shows the current time in various cities around the world.")),(0,i.yg)("h2",{id:"changing-the-cities-used"},"Changing the cities used"),(0,i.yg)("p",null,"To change the cities displayed, just modify the ",(0,i.yg)("inlineCode",{parentName:"p"},"$clocks")," variable.\nThe key is the city name and the value is its timezone database name."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"To get the latter value, you can use ",(0,i.yg)("a",{parentName:"p",href:"https://kevinnovak.github.io/Time-Zone-Picker/"},"this tool")," to find it (select the ",(0,i.yg)("inlineCode",{parentName:"p"},"Area/City")," option).")),(0,i.yg)("h2",{id:"code"},"Code"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-gotmpl",metastring:"file=../../../src/utilities/world_clock.go.tmpl",file:"../../../src/utilities/world_clock.go.tmpl"},'{{/*\n    Simple world clock.\n    See <https://yagpdb-cc.github.io/utilities/world-clock> for more information.\n\n    Author: jo3-l <https://github.com/jo3-l>\n*/}}\n\n{{ $clocks := sdict\n    "Vancouver" "America/Vancouver"\n    "New York" "America/New_York"\n    "London" "Europe/London"\n    "Moscow" "Europe/Moscow"\n    "Tokyo" "Asia/Tokyo"\n}}\n\n{{ $embed := sdict\n    "title" "\ud83d\udd70\ufe0f World Clock"\n    "fields" cslice\n    "color" 0x0070BB\n    "footer" (sdict "text" "Your time")\n    "timestamp" currentTime\n}}\n\n{{ range $name, $ := $clocks }}\n    {{- $time := currentTime.In (newDate 0 0 0 0 0 0 .).Location }}\n    {{- $formatted := printf "%s, %s"\n        $time.Weekday.String\n        ($time.Format "3:04:05 PM")\n    }}\n    {{- $embed.fields.Append (sdict\n        "name" $name\n        "value" $formatted\n    ) | $embed.Set "fields" -}}\n{{ end }}\n\n{{ sendMessage nil (cembed $embed) }}\n')),(0,i.yg)("h2",{id:"author"},"Author"),(0,i.yg)("p",null,"This custom command was written by ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/jo3-l"},"@jo3-l"),"."))}p.isMDXComponent=!0}}]);