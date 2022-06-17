(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6407],{21370:function(e,a){"use strict";a.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},90760:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return x}});var t=n(159),s=n(10219),l=(n(67294),n(3905)),r=n(41664),p=n(49485),o=n(34304),i=n(27606),c=n(83096),u=n(7947),m=n(16048),d=n(36627);const k=["components"],h=i.L,g=(N="Heading",function(e){return console.warn("Component "+N+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var N;const f={Layout:h,classes:{utilities:{".will-change-auto":{"will-change":"auto"},".will-change-scroll":{"will-change":"scroll-position"},".will-change-contents":{"will-change":"contents"},".will-change-transform":{"will-change":"transform"}}},meta:{title:"Will Change",description:"Utilities for optimizing upcoming animations of elements that are expected to change."},slug:"will-change",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Optimizing with will change",slug:"optimizing-with-will-change",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},y=c.X_;function x(e){let{components:a}=e,n=(0,s.Z)(e,k);return(0,l.kt)(y,(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,l.kt)(o.X,{level:3,id:"optimizing-with-will-change",nextElement:{type:"paragraph"}},"Optimizing with will change"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"will-change-scroll"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"will-change-contents")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"will-change-transform")," to optimize an element that\u2019s expected to change in the near future by instructing the browser to prepare the necessary animation before it actually begins."),(0,l.kt)("pre",{className:"language-html"},(0,l.kt)("code",{parentName:"pre",className:"language-html"},(0,l.kt)("span",{parentName:"code",className:"token tag"},(0,l.kt)("span",{parentName:"span",className:"token tag"},(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,l.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,l.kt)("span",{parentName:"span",className:"token attr-value"},(0,l.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"overflow-auto ",(0,l.kt)("span",{parentName:"span",className:"code-highlight bg-code-highlight"},"will-change-scroll"),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,l.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",(0,l.kt)("span",{parentName:"code",className:"token tag"},(0,l.kt)("span",{parentName:"span",className:"token tag"},(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,l.kt)("p",null,"It\u2019s recommended that you apply these utilities just before an element changes, and then remove it shortly after it finishes using ",(0,l.kt)("inlineCode",{parentName:"p"},"will-change-auto"),"."),(0,l.kt)("p",null,"The will-change property is intended to be used as a last resort when dealing with ",(0,l.kt)("strong",{parentName:"p"},"known performance problems"),". Avoid using these utilities too much, or simply in anticipation of performance issues, as it could actually cause the page to be less performant."),(0,l.kt)("hr",null),(0,l.kt)(g,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,l.kt)(g,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,l.kt)(d.k,{defaultClass:"will-change-auto",featuredClass:"will-change-scroll",mdxType:"HoverFocusAndOtherStates"}),(0,l.kt)(g,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,l.kt)(m.p,{defaultClass:"will-change-auto",featuredClass:"will-change-scroll",mdxType:"BreakpointsAndMediaQueries"}),(0,l.kt)("hr",null),(0,l.kt)(o.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,l.kt)(o.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,l.kt)("p",null,"By default, Tailwind provides four ",(0,l.kt)("inlineCode",{parentName:"p"},"will-change")," utilities. You can customize these values by editing ",(0,l.kt)("inlineCode",{parentName:"p"},"theme.willChange")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"theme.extend.willChange")," in your ",(0,l.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,l.kt)(p.M,{filename:"tailwind.config.js"},(0,l.kt)("pre",{className:"language-diff-js"},(0,l.kt)("code",{parentName:"pre",className:"language-diff-js"},(0,l.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,l.kt)("span",{parentName:"span",className:"token plain"},"module"),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"."),(0,l.kt)("span",{parentName:"span",className:"token property-access"},"exports"),(0,l.kt)("span",{parentName:"span",className:"token plain"}," "),(0,l.kt)("span",{parentName:"span",className:"token operator"},"="),(0,l.kt)("span",{parentName:"span",className:"token plain"}," "),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,l.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,l.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,l.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,l.kt)("span",{parentName:"span",className:"token literal-property property"},"theme"),(0,l.kt)("span",{parentName:"span",className:"token operator"},":"),(0,l.kt)("span",{parentName:"span",className:"token plain"}," "),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,l.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,l.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,l.kt)("span",{parentName:"span",className:"token plain"},"    "),(0,l.kt)("span",{parentName:"span",className:"token literal-property property"},"extend"),(0,l.kt)("span",{parentName:"span",className:"token operator"},":"),(0,l.kt)("span",{parentName:"span",className:"token plain"}," "),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,l.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,l.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,l.kt)("span",{parentName:"span",className:"token plain"},"      "),(0,l.kt)("span",{parentName:"span",className:"token literal-property property"},"willChange"),(0,l.kt)("span",{parentName:"span",className:"token operator"},":"),(0,l.kt)("span",{parentName:"span",className:"token plain"}," "),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"{"),(0,l.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,l.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,l.kt)("span",{parentName:"span",className:"token plain"},"        "),(0,l.kt)("span",{parentName:"span",className:"token string-property property"},"'left-top'"),(0,l.kt)("span",{parentName:"span",className:"token operator"},":"),(0,l.kt)("span",{parentName:"span",className:"token plain"}," "),(0,l.kt)("span",{parentName:"span",className:"token string"},"'left, top'"),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},","),(0,l.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,l.kt)("span",{parentName:"code",className:"token language-js inserted"},(0,l.kt)("span",{parentName:"span",className:"token plain"},"      "),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,l.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,l.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,l.kt)("span",{parentName:"span",className:"token plain"},"    "),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,l.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,l.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,l.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"}"),(0,l.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,l.kt)("span",{parentName:"code",className:"token language-js unchanged"},(0,l.kt)("span",{parentName:"span",className:"token plain"}),(0,l.kt)("span",{parentName:"span",className:"token punctuation"},"}"),"\n")))),(0,l.kt)("p",null,"Learn more about customizing the default theme in the ",(0,l.kt)(r.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,l.kt)("a",null,"theme customization"))," documentation."),(0,l.kt)(o.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,l.kt)(u.k,{property:"will-change",featuredClass:"will-change-[top,left]",mdxType:"ArbitraryValues"}))}x.isMDXComponent=!0,x.layoutProps=f},7947:function(e,a,n){"use strict";n.d(a,{k:function(){return s}});var t=n(85893);function s({property:e,name:a,defaultClass:n,featuredClass:s,element:l="div",children:r}){const p=a||(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("code",{children:e})," value"]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["If you need to use a one-off ",p," that doesn\u2019t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value."]}),r||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,l).replace("{defaultClass} ",n?`${n} `:"").replace("{featuredClass}",s)}})}),(0,t.jsxs)("p",{children:["Learn more about arbitrary value support in the"," ",(0,t.jsx)("a",{href:"/docs/adding-custom-styles#using-arbitrary-values",children:"arbitrary values"})," documentation."]})]})}},16048:function(e,a,n){"use strict";n.d(a,{p:function(){return s}});var t=n(85893);function s({defaultClass:e,featuredClass:a,element:n="div",children:s}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,t.jsxs)("code",{children:["md:",a]})," to apply the ",(0,t.jsx)("code",{children:a})," utility at only medium screen sizes and above."]}),s||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,n).replace("{defaultClass} ",e?`${e} `:"").replace("{featuredClass}",a)}})}),(0,t.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,t.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,t.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,t.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},49485:function(e,a,n){"use strict";n.d(a,{M:function(){return l}});var t=n(79836),s=n(85893);function l({filename:e,children:a}){return(0,s.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,s.jsx)(t.n,{primary:{name:e},showTabMarkers:!1}),(0,s.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:a})]})}},36627:function(e,a,n){"use strict";n.d(a,{k:function(){return s}});var t=n(85893);function s({property:e,utility:a,variant:n="hover",defaultClass:s,featuredClass:l,element:r="div",children:p}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,t.jsxs)("code",{children:[n,":",l]})," ","to only apply the ",(0,t.jsx)("code",{children:l})," utility on ",n,"."]}),p||(0,t.jsx)("pre",{className:"language-html",children:(0,t.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,r).replace("{defaultClass} ",s?`${s} `:"").replace("{variant}",n).replace("{featuredClass}",l)}})}),(0,t.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,t.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},79836:function(e,a,n){"use strict";n.d(a,{n:function(){return l}});var t=n(86010),s=n(85893);function l({primary:e,secondary:a=[],showTabMarkers:n=!0,side:l,translucent:r=!1,children:p}){return(0,s.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,s.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[e.name,n&&(e.saved?(0,s.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,s.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,s.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,s.jsxs)("div",{className:(0,t.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===l?"rounded-tl lg:rounded-tr":"rounded-tl",r&&"dark:bg-slate-800/50"),children:[a.map((({name:e,open:a=!0,className:n})=>(0,s.jsx)("div",{className:(0,t.Z)("px-4 py-1 border-r border-slate-200/5",n,{italic:!a}),children:e},e))),p&&(0,s.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:p})]})]})}},27606:function(e,a,n){"use strict";n.d(a,{L:function(){return d}});var t=n(92809),s=n(92417),l=n(9008),r=n(11163),p=n(21370),o=n(34878),i=n(50946),c=n(85893);function u(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?u(Object(n),!0).forEach((function(a){(0,t.Z)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e){let a=(0,r.useRouter)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.D,{suffix:"/"===a.pathname?void 0:"Tailwind CSS",children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,c.jsxs)(l.default,{children:[(0,c.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,c.jsx)("meta",{name:"twitter:image",content:`https://tailwindcss.com${p.Z}`},"twitter:image")]}),(0,c.jsx)(s.C,m({nav:i.u},e))]})}d.nav=i.u},59350:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/will-change",function(){return n(90760)}])}},function(e){e.O(0,[9774,184,4327,489,946,2888,179],(function(){return a=59350,e(e.s=a);var a}));var a=e.O();_N_E=a}]);