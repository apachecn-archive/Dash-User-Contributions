_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),r=t("Zb5r"),o=t("AOjV"),i=s.a.createElement;function p({plugin:e,name:a}){const t=c.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`By default, ${t.length?`only ${Object(r.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:s}}),i("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(r.a)(n)," variants:"),i(o.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},EYah:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-image",function(){return t("xPJo")}])},P5DM:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("backgroundImage",[["bg",["background-image"]]],{resolveArbitraryValue:c.asLookupValue})};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n},c=t("fC9q")},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return j}));var n=t("HALo"),s=t("q1tI"),c=t.n(s),r=t("iuhU"),o=t("ZMKu"),i=c.a.createElement;const p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},b={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},u={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){const a=Object(s.useRef)(),{0:t,1:c}=Object(s.useState)(!1),{0:r,1:o}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function e(){o({height:a.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(e);return e(),n.observe(a.current.contentDocument.body),()=>{n.disconnect()}}),[t]),i("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>c(!0),style:r}))}function d({color:e,snippet:a}){return i("div",{className:Object(r.a)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]})},i("pre",{className:Object(r.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g({preview:e,src:a,snippet:t,previewClassName:n,color:s="gray"}){return i("div",{className:"relative overflow-hidden mb-8"},e?i("div",{className:Object(r.a)("rounded-t-xl overflow-hidden",l[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):i(m,{src:a,className:Object(r.a)("w-full rounded-t-xl",l[s])}),i(d,{color:s,snippet:t}))}function j({preview:e,src:a,previewClassName:t,snippet:n,color:c="gray",min:p=!1}){const g=Object(s.useRef)(),j=Object(o.h)(0),O=Object(s.useRef)(),{0:N,1:f}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{j.set(0)}));return e.observe(g.current),()=>{e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:g,className:`relative rounded-t-xl ${b[c]}`},i("div",{className:p?"md:w-88":void 0},i(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(j,(e=>-e))}},e?i("div",{className:Object(r.a)("rounded-t-xl",t,l[c],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):i(m,{src:a,className:Object(r.a)("w-full rounded-t-xl",l[c],{"pointer-events-none":N})}))),i("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(o.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(p?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),f(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),f(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${u[c]}`,style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(d,{color:c,snippet:n}))}},xPJo:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t("HALo"),s=t("dhJC"),c=t("q1tI"),r=t.n(c),o=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),b=t("pOT7"),u=t("vRWG"),m=t("I6Nb"),d=t("P5DM"),g=t.n(d),j=t("8C7G"),O=t("wH44");r.a.createElement;const N={Layout:u.DocumentationLayout,classes:{plugin:g()},meta:{title:"Background Image",description:"Utilities for controlling an element's background image."},tableOfContents:[{title:"Linear gradients",slug:"linear-gradients",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Background Images",slug:"background-images"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},f=m.ContentsLayout;function h(e){let{components:a}=e,t=Object(s.a)(e,["components"]);return Object(o.a)(f,Object(n.a)({},N,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"linear-gradients",toc:!0},"Linear gradients"),Object(o.a)("p",null,"To give an element a linear gradient background, use one of the ",Object(o.a)("inlineCode",{parentName:"p"},"bg-gradient-{direction}")," utilities, in combination with the ",Object(o.a)(p.a,{href:"/docs/gradient-color-stops",passHref:!0},Object(o.a)("a",null,"gradient color stop"))," utilities.")),Object(o.a)(b.a,{preview:'\n  <div class="h-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"></div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:void 0,min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the background image of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing background image utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:bg-gradient-to-r")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"bg-gradient-to-r")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-gradient-to-l ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:bg-gradient-to-r")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(o.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(l.a,{level:3,id:"background-images",toc:!0},"Background Images"),Object(o.a)("p",null,"By default, Tailwind includes background image utilities for creating linear gradient backgrounds in eight directions."),Object(o.a)("p",null,"You can add your own background images by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.backgroundImage")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token function-variable function"}),"backgroundImage"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token parameter"}),"theme")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token arrow operator"}),"=>")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'hero-pattern'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"\"url('/img/hero-pattern.svg')\""),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'footer-texture'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"\"url('/img/footer-texture.png')\""),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"These don\u2019t just have to be gradients \u2014 they can be any background images you need."),Object(o.a)("p",null,"These classes will take the form ",Object(o.a)("inlineCode",{parentName:"p"},"bg-{key}"),", so ",Object(o.a)("inlineCode",{parentName:"p"},"hero-pattern")," will become ",Object(o.a)("inlineCode",{parentName:"p"},"bg-hero-pattern")," for example."),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(j.a,{plugin:"backgroundImage",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"backgroundImage",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=N}},[["EYah",0,2,6,8,1,3,4,5,7,9,10]]]);