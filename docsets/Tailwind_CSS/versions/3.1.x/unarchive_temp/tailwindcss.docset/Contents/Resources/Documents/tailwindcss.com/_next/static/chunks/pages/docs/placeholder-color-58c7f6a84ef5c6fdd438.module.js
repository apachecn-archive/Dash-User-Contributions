(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[145],{"1Nmd":function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return N}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),o=n("7ljp"),l=n("YFqc"),r=n.n(l),i=n("tc9R"),u=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),b=n("2YpA"),j=n.n(b),g=n("8C7G"),O=n("wH44"),h=(p.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:j(),transformSelector:a=>Object(o.a)(p.a.Fragment,null,a.split("::")[0].trim().replace(/^\./,"").replace(/\\/g,""),Object(o.a)("span",{className:"text-gray-500"},"::placeholder")),preview:(a,e)=>{var{className:n}=e;return Object(o.a)("td",{className:"text-center font-medium text-base whitespace-nowrap align-middle ".concat(n),style:a},Object(o.a)("div",{className:"w-16 mx-auto"},"Aa"))}},meta:{title:"Placeholder Color",description:"Utilities for controlling the color of placeholder text."},tableOfContents:[{title:"Usage",slug:"usage",children:[{title:"Changing opacity",slug:"changing-opacity"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Focus",slug:"focus",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Placeholder Colors",slug:"placeholder-colors"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),k=m.ContentsLayout;function N(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(o.a)(k,Object(t.a)({},h,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(i.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Control the placeholder color of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"placeholder-{color}")," utilities.")),Object(o.a)(u.a,{preview:'\n  <div class="max-w-xs">\n    <input class="block appearance-none placeholder-gray-500 border border-emerald-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-emerald-200" placeholder="jane@example.com">\n    <input class="mt-4 block appearance-none placeholder-red-300 border border-red-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-red-200" placeholder="jane@example.com">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">placeholder-gray-500</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">placeholder-red-300</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:"text-center p-6",color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(i.a,{level:3,id:"changing-opacity",toc:!0},"Changing opacity"),Object(o.a)("p",null,"Control the opacity of an element's placeholder color using the ",Object(o.a)("inlineCode",{parentName:"p"},"placeholder-opacity-{amount}")," utilities.")),Object(o.a)(u.a,{preview:'\n  <div class="space-y-4">\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-75 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-50 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-25 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" placeholder="jane@example.com">\n    </div>\n    <div class="max-w-xs">\n      <input class="block appearance-none placeholder-gray-500 placeholder-opacity-0 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" placeholder="jane@example.com">\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder-gray-500 <span class="code-highlight bg-code-highlight">placeholder-opacity-100</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder-gray-500 <span class="code-highlight bg-code-highlight">placeholder-opacity-75</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder-gray-500 <span class="code-highlight bg-code-highlight">placeholder-opacity-50</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder-gray-500 <span class="code-highlight bg-code-highlight">placeholder-opacity-25</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder-gray-500 <span class="code-highlight bg-code-highlight">placeholder-opacity-0</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)("p",null,"Learn more in the ",Object(o.a)(r.a,{href:"/docs/placeholder-opacity",passHref:!0},Object(o.a)("a",null,"placeholder opacity documentation")),"."),Object(o.a)(i.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the text color of an input placeholder at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing text color utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:placeholder-green-500")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"placeholder-green-500")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"placeholder-gray-500 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:placeholder-green-500"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"placeholder"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"jane@example.com",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(i.a,{level:2,id:"focus",toc:!0},"Focus"),Object(o.a)("p",null,"To control the placeholder color of an element on focus, add the ",Object(o.a)("inlineCode",{parentName:"p"},"focus:")," prefix to any existing placeholder color utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"focus:placeholder-blue-600")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"placeholder-blue-600")," utility on focus.")),Object(o.a)(u.a,{preview:'\n  <div class="max-w-xs mx-auto">\n    <input class="block appearance-none bg-white placeholder-gray-600 border border-indigo-200 rounded w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:border-indigo-400 focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-200" placeholder="jane@example.com">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder-gray-600 <span class="code-highlight bg-code-highlight">focus:placeholder-gray-400</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jane@example.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:"text-center p-6",color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)("p",null,"Focus utilities can also be combined with responsive utilities by adding the responsive ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(o.a)("em",{parentName:"p"},"before")," the ",Object(o.a)("inlineCode",{parentName:"p"},"focus:")," prefix."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:placeholder-gray-900 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:focus:placeholder-red-600")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)(i.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(i.a,{level:3,id:"placeholder-colors",toc:!0},"Placeholder Colors"),Object(o.a)("p",null,"By default, Tailwind makes the entire ",Object(o.a)(r.a,{href:"/docs/customizing-colors#default-color-palette",passHref:!0},Object(o.a)("a",null,"default color palette"))," available as placeholder colors."),Object(o.a)("p",null,"You can ",Object(o.a)(r.a,{href:"/docs/colors#customizing",passHref:!0},Object(o.a)("a",null,"customize your color palette"))," by editing ",Object(o.a)("inlineCode",{parentName:"p"},"theme.colors")," in your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, or customize just your placeholder colors in the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.textColor")," section."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token function-variable function"}),"placeholderColor"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token parameter"}),"theme")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token arrow operator"}),"=>")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token function"}),"theme"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"("),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'colors'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),")"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     placeholderColor",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'primary'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'#3490dc'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'secondary'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'#ffed4a'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'danger'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'#e3342f'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(i.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(g.a,{plugin:"placeholderColor",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(i.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"placeholderColor",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=h},"2YpA":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,theme:e,variants:n,corePlugins:l}){const r=(0,s.default)(e("placeholderColor")),i=a=>l("placeholderOpacity")?(0,o.default)({color:a,property:"color",variable:"--tw-placeholder-opacity"}):{color:(0,p.default)(a)};a(t.default.fromPairs(t.default.map(r,(a,e)=>[(0,c.default)("placeholder",e)+"::placeholder",i(a)])),n("placeholderColor"))}};var t=l(n("XMip")),s=l(n("9Jru")),c=l(n("dzuX")),p=l(n("OiSs")),o=l(n("kFV+"));function l(a){return a&&a.__esModule?a:{default:a}}},"9Jru":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;const t=a=>Object.assign({},...Object.entries(a).flatMap(([a,e])=>"object"==typeof e?Object.entries(t(e)).map(([e,n])=>({[a+("DEFAULT"===e?"":"-"+e)]:n})):[{[""+a]:e}]));var s=t;e.default=s},OiSs:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return s.default.isFunction(a)?a({}):a};var t,s=(t=n("XMip"))&&t.__esModule?t:{default:t}},"k2+i":function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/placeholder-color",function(){return n("1Nmd")}])}},[["k2+i",0,2,6,10,1,3,4,5,7,8,11]]]);