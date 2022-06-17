_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[117],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),p=t("98BF"),i=t("Zb5r"),c=t("AOjV"),o=s.a.createElement;function l({plugin:a,name:e}){const t=p.defaultConfig.variants[a]||["responsive"];e=e||a.replace(/([a-z])([A-Z])/g,((a,e,t)=>`${e} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((a=>!t.includes(a))).slice(0,2),s=`By default, ${t.length?`only ${Object(i.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${e} utilities.`;return o("div",{className:"prose"},o("p",{dangerouslySetInnerHTML:{__html:s}}),o("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",o("code",null,a)," property in the ",o("code",null,"variants")," section of your"," ",o("code",null,"tailwind.config.js")," file."),o("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(i.a)(n)," variants:"),o(c.a,{path:"variants.extend",before:"...",add:{[a]:n}}))}},LZQ4:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return N}));var n=t("HALo"),s=t("dhJC"),p=t("q1tI"),i=t.n(p),c=t("7ljp"),o=t("YFqc"),l=t.n(o),u=t("tc9R"),r=t("pOT7"),m=t("vRWG"),d=t("I6Nb"),g=t("tnc+"),b=t.n(g),k=t("8C7G"),h=t("wH44");i.a.createElement;const j={Layout:m.DocumentationLayout,classes:{plugin:b()},meta:{title:"Line Height",description:"Utilities for controlling the leading (line height) of an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Relative line-heights",slug:"relative-line-heights",children:[]},{title:"Fixed line-heights",slug:"fixed-line-heights",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},O=d.ContentsLayout;function N(a){let{components:e}=a,t=Object(s.a)(a,["components"]);return Object(c.a)(O,Object(n.a)({},j,t,{components:e,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(u.a,{level:2,id:"relative-line-heights",toc:!0},"Relative line-heights"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"leading-none"),", ",Object(c.a)("inlineCode",{parentName:"p"},"leading-tight"),", ",Object(c.a)("inlineCode",{parentName:"p"},"leading-snug"),", ",Object(c.a)("inlineCode",{parentName:"p"},"leading-normal"),", ",Object(c.a)("inlineCode",{parentName:"p"},"leading-relaxed"),", and ",Object(c.a)("inlineCode",{parentName:"p"},"leading-loose")," utilities to give an element a relative line-height based on its current font-size.")),Object(c.a)(r.a,{preview:'\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-purple-600">.leading-none</p>\n    <p class="leading-none text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-purple-600">.leading-tight</p>\n    <p class="leading-tight text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-purple-600">.leading-snug</p>\n    <p class="leading-snug text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-purple-600">.leading-normal</p>\n    <p class="leading-normal text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-purple-600">.leading-relaxed</p>\n    <p class="leading-relaxed text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div>\n    <p class="text-sm text-purple-600">.leading-loose</p>\n    <p class="leading-loose text-purple-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-none</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-tight</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-snug</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-normal</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-relaxed</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-loose</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(u.a,{level:2,id:"fixed-line-heights",toc:!0},"Fixed line-heights"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"leading-{size}")," utilities to give an element a fixed line-height, irrespective of the current font-size. These are useful when you need very precise control over an element\u2019s final size.")),Object(c.a)(r.a,{preview:'\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-3</p>\n    <p class="leading-3 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-4</p>\n    <p class="leading-4 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-5</p>\n    <p class="leading-5 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-6</p>\n    <p class="leading-6 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-7</p>\n    <p class="leading-7 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-8</p>\n    <p class="leading-8 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div class="mb-6">\n    <p class="mb-1 text-sm text-emerald-600">.leading-9</p>\n    <p class="leading-9 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n  <div>\n    <p class="mb-1 text-sm text-emerald-600">.leading-10</p>\n    <p class="leading-10 text-emerald-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-3</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-4</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-5</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-6</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-7</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-9</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">leading-10</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control the line height of an element at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing line height utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:leading-loose")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"leading-loose")," utility at only medium screen sizes and above."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"leading-none ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:leading-loose")," ...",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Lorem ipsum dolor sit amet ...",Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)("p",null,"It\u2019s important to note that by default, Tailwind\u2019s ",Object(c.a)(l.a,{href:"/docs/font-size",passHref:!0},Object(c.a)("a",null,"font-size"))," utilities each set their own default line-height. This means that any time you use a responsive font-size utility like ",Object(c.a)("inlineCode",{parentName:"p"},"sm:text-xl"),", any explicit line-height you have set for a smaller breakpoint will be overridden."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- The `leading-loose` class will be overridden at the `md` breakpoint --\x3e"),"\n",Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"text-lg leading-loose md:text-xl",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  Lorem ipsum dolor sit amet ...\n",Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"If you want to override the default line-height after setting a breakpoint-specific font-size, make sure to set a breakpoint-specific line-height as well:"),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- The `leading-loose` class will be overridden at the `md` breakpoint --\x3e"),"\n",Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"text-lg leading-loose md:text-xl md:leading-loose",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  Lorem ipsum dolor sit amet ...\n",Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"Using the same line-height across different font sizes is generally not going to give you good typographic results. Line-height should typically get smaller as font-size increases, so the default behavior here usually saves you a ton of work. If you find yourself fighting it, you can always ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://tailwindcss.com/docs/font-size#customizing"}),"customize your font-size scale")," to not include default line-heights."),Object(c.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)("p",null,"By default, Tailwind provides six relative and eight fixed ",Object(c.a)("inlineCode",{parentName:"p"},"line-height")," utilities. You change, add, or remove these by customizing the ",Object(c.a)("inlineCode",{parentName:"p"},"lineHeight")," section of your Tailwind theme config."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       lineHeight",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'extra-loose'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'2.5'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'12'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'3rem'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(c.a)(u.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(k.a,{plugin:"lineHeight",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(h.a,{plugin:"lineHeight",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j},hCV3:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/line-height",function(){return t("LZQ4")}])},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"b",(function(){return k}));var n=t("HALo"),s=t("q1tI"),p=t.n(s),i=t("iuhU"),c=t("ZMKu"),o=p.a.createElement;const l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},u={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},r={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(a){const e=Object(s.useRef)(),{0:t,1:p}=Object(s.useState)(!1),{0:i,1:c}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function a(){c({height:e.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(a);return a(),n.observe(e.current.contentDocument.body),()=>{n.disconnect()}}),[t]),o("iframe",Object(n.a)({},a,{ref:e,onLoad:()=>p(!0),style:i}))}function g({color:a,snippet:e}){return o("div",{className:Object(i.a)("overflow-hidden rounded-b-xl",l[a],{"bg-gray-800":!l[a]})},o("pre",{className:Object(i.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[a]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:e}})))}function b({preview:a,src:e,snippet:t,previewClassName:n,color:s="gray"}){return o("div",{className:"relative overflow-hidden mb-8"},a?o("div",{className:Object(i.a)("rounded-t-xl overflow-hidden",u[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):o(d,{src:e,className:Object(i.a)("w-full rounded-t-xl",u[s])}),o(g,{color:s,snippet:t}))}function k({preview:a,src:e,previewClassName:t,snippet:n,color:p="gray",min:l=!1}){const b=Object(s.useRef)(),k=Object(c.h)(0),h=Object(s.useRef)(),{0:j,1:O}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const a=new window.ResizeObserver((()=>{k.set(0)}));return a.observe(b.current),()=>{a.disconnect()}}),[]),o("div",{className:"relative mb-8"},o("div",{ref:b,className:`relative rounded-t-xl ${r[p]}`},o("div",{className:l?"md:w-88":void 0},o(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(k,(a=>-a))}},a?o("div",{className:Object(i.a)("rounded-t-xl",t,u[p],{"p-10":!t}),dangerouslySetInnerHTML:{__html:a}}):o(d,{src:e,className:Object(i.a)("w-full rounded-t-xl",u[p],{"pointer-events-none":j})}))),o("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},o(c.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(l?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),O(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),O(!1)}},o("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},o("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${m[p]}`,style:{width:"0.4375rem"}},o("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),o(g,{color:p,snippet:n}))}},"tnc+":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("lineHeight",[["leading",["lineHeight"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}}},[["hCV3",0,2,6,8,1,3,4,5,7,9,10]]]);