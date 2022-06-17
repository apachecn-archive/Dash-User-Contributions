_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[103],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("rePB"),s=t("q1tI"),c=t.n(s),r=t("98BF"),o=t("Zb5r"),i=t("AOjV"),p=c.a.createElement;function l(e){var a=e.plugin,t=e.name,s=r.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",p("code",null,a)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(c)," variants:"),p(i.a,{path:"variants.extend",before:"...",add:Object(n.a)({},a,c)}))}},C7gB:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/grid-template-rows",function(){return t("a+39")}])},"a+39":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),r=t.n(c),o=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),m=t("I6Nb"),b=t("zOK1"),g=t.n(b),j=t("8C7G"),O=t("wH44"),f=(r.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g.a},meta:{title:"Grid Template Rows",description:"Utilities for specifying the rows in a grid layout."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),N=m.ContentsLayout;function h(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(o.a)(N,Object(n.a)({},f,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"grid-rows-{n}")," utilities to create grids with ",Object(o.a)("em",{parentName:"p"},"n")," equally sized rows.")),Object(o.a)(u.a,{preview:'\n  <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">1</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">2</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">3</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">4</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">5</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">6</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">7</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">8</div>\n    <div class="bg-light-blue-500 rounded-md flex items-center justify-center text-white text-2xl font-extrabold">9</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-64 grid <span class="code-highlight bg-code-highlight">grid-rows-3</span> grid-flow-col gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"bg-white p-8",color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the rows of a grid at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing grid-template-rows utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:grid-rows-6")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"grid-rows-6")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"grid grid-rows-2 ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:grid-rows-6")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)("p",null,"By default, Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You change, add, or remove these by customizing the ",Object(o.a)("inlineCode",{parentName:"p"},"gridTemplateRows")," section of your Tailwind theme config."),Object(o.a)("p",null,"You have direct access to the ",Object(o.a)("inlineCode",{parentName:"p"},"grid-template-rows")," CSS property here so you can make your custom rows values as generic or as complicated and site-specific as you like."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       gridTemplateRows",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// Simple 8 row grid"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'8'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'repeat(8, minmax(0, 1fr))'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// Complex site-specific row configuration"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'layout'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'200px minmax(900px, 1fr) 100px'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(j.a,{plugin:"gridTemplateRows",name:"grid-template-rows",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"gridTemplateRows",name:"grid-template-rows",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=f},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return j}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),r=t("iuhU"),o=t("ZMKu"),i=c.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var a=Object(s.useRef)(),t=Object(s.useState)(!1),c=t[0],r=t[1],o=Object(s.useState)({}),p=o[0],l=o[1];return Object(s.useEffect)((function(){if(c){var e=new window.ResizeObserver(t);return t(),e.observe(a.current.contentDocument.body),function(){e.disconnect()}}function t(){l({height:a.current.contentDocument.body.scrollHeight})}}),[c]),i("iframe",Object(n.a)({},e,{ref:a,onLoad:function(){return r(!0)},style:p}))}function b(e){var a=e.color,t=e.snippet;return i("div",{className:Object(r.a)("overflow-hidden rounded-b-xl",p[a],{"bg-gray-800":!p[a]})},i("pre",{className:Object(r.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[a]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g(e){var a=e.preview,t=e.src,n=e.snippet,s=e.previewClassName,c=e.color,o=void 0===c?"gray":c;return i("div",{className:"relative overflow-hidden mb-8"},a?i("div",{className:Object(r.a)("rounded-t-xl overflow-hidden",l[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):i(m,{src:t,className:Object(r.a)("w-full rounded-t-xl",l[o])}),i(b,{color:o,snippet:n}))}function j(e){var a=e.preview,t=e.src,n=e.previewClassName,c=e.snippet,p=e.color,g=void 0===p?"gray":p,j=e.min,O=void 0!==j&&j,f=Object(s.useRef)(),N=Object(o.h)(0),h=Object(s.useRef)(),v=Object(s.useState)(!1),x=v[0],k=v[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){N.set(0)}));return e.observe(f.current),function(){e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:f,className:"relative rounded-t-xl ".concat(u[g])},i("div",{className:O?"md:w-88":void 0},i(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(N,(function(e){return-e}))}},a?i("div",{className:Object(r.a)("rounded-t-xl",n,l[g],{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):i(m,{src:t,className:Object(r.a)("w-full rounded-t-xl",l[g],{"pointer-events-none":x})}))),i("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(o.d.div,{drag:"x",_dragX:N,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(O?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:N},onDragStart:function(){document.body.classList.add("cursor-grabbing"),k(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),k(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[g]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(b,{color:g,snippet:c}))}},zOK1:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("gridTemplateRows",[["grid-rows",["gridTemplateRows"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}}},[["C7gB",0,2,6,1,3,4,5,7,8,9]]]);