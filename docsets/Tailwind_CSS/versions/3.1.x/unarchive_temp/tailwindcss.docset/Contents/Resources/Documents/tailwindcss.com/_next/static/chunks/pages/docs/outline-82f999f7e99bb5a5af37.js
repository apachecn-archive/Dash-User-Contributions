_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[131],{"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),s=n.n(a),o=n("98BF"),c=n("Zb5r"),r=n("AOjV"),i=s.a.createElement;function l({plugin:e,name:t}){const n=o.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,((e,t,n)=>`${t} ${n.toLowerCase()}`));const a=["responsive","hover","focus","active","group-hover"].filter((e=>!n.includes(e))).slice(0,2),s=`By default, ${n.length?`only ${Object(c.a)(n).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${t} utilities.`;return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:s}}),i("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(c.a)(a)," variants:"),i(r.a,{path:"variants.extend",before:"...",add:{[e]:a}}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),s=n.n(a),o=(n("Btb4"),n("AI3G")),c=n("iuhU"),r=s.a.createElement;function i({value:e}){return"string"===typeof e?r("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),e.map(((t,n)=>r(a.Fragment,{key:n},r(i,{value:t}),n===e.length-1?null:r("span",{className:"token punctuation"},", ")))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof e?r("span",{className:"token boolean"},e.toString()):e.toString()}function l({edits:e,indent:t="",type:n="inserted"}){return r("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===n,"deleted-sign deleted":"inserted"!==n})},Object.keys(e).map(((s,o)=>{return r(a.Fragment,{key:o},r("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===n,deleted:"inserted"!==n})},"inserted"===n?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(l=s)?l:`'${l}'`,r("span",{className:"token operator"},":")," ",r(i,{value:e[s]}),r("span",{className:"token punctuation"},","),"\n");var l})))}function p({path:e,add:t,remove:n,before:s,after:c}){return e="string"===typeof e?e.split("."):e,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",e.map(((e,t)=>r(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(o.a)(s).map(((t,n)=>r(a.Fragment,{key:n},"  ".repeat(e.length+2),r("span",{className:"token comment"},`// ${t}`),"\n")))),n&&r(l,{edits:n,type:"deleted",indent:"  ".repeat(e.length+1)}),t&&r(l,{edits:t,type:"inserted",indent:"  ".repeat(e.length+1)}),r("span",{className:"token unchanged"},c&&Object(o.a)(c).map((t=>`${"  ".repeat(e.length+2)}${t}\n`)),e.map(((t,n)=>r(a.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n"))),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),s=n("p+I8"),o=n("GAX2").default;e.exports=(e,t,n)=>{const c=[];return function e(t,n,r){let i;(n=n||{}).indent=n.indent||"\t",r=r||"",i=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+n.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const a="["+i.newLine+t.map(((a,s)=>{const o=t.length-1===s?i.newLine:","+i.newLineOrSpace;let c=e(a,n,r+n.indent);return n.transform&&(c=n.transform(t,s,c)),i.indent+c+o})).join("")+i.pad+"]";return c.pop(),l(a)}if(s(t)){let a=Object.keys(t).concat(o(t));if(n.filter&&(a=a.filter((e=>n.filter(t,e)))),0===a.length)return"{}";c.push(t);const s="{"+i.newLine+a.map(((s,o)=>{const c=a.length-1===o?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,n);let d=e(t[s],n,r+n.indent);return n.transform&&(d=n.transform(t,s,d)),i.indent+String(u)+": "+d+c})).join("")+i.pad+"}";return c.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter((t=>Object.prototype.propertyIsEnumerable.call(e,t)))},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce(((t,n,a)=>0===a?n:a===e.length-1?`${t} and ${n}`:`${t}, ${n}`),"")}n.d(t,"a",(function(){return a}))},neGr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({matchUtilities:e,theme:t,variants:n}){e({outline:e=>{let[t,n="0"]=Array.isArray(e)?e:[e];return{outline:t,"outline-offset":n}}},{values:t("outline"),variants:n("outline"),type:"any"})}}},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return f}));var a=n("HALo"),s=n("q1tI"),o=n.n(s),c=n("iuhU"),r=n("ZMKu"),i=o.a.createElement;const l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){const t=Object(s.useRef)(),{0:n,1:o}=Object(s.useState)(!1),{0:c,1:r}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!n)return;function e(){r({height:t.current.contentDocument.body.scrollHeight})}const a=new window.ResizeObserver(e);return e(),a.observe(t.current.contentDocument.body),()=>{a.disconnect()}}),[n]),i("iframe",Object(a.a)({},e,{ref:t,onLoad:()=>o(!0),style:c}))}function m({color:e,snippet:t}){return i("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",l[e],{"bg-gray-800":!l[e]})},i("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[e]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g({preview:e,src:t,snippet:n,previewClassName:a,color:s="gray"}){return i("div",{className:"relative overflow-hidden mb-8"},e?i("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",p[s],a,{"p-10":!a}),dangerouslySetInnerHTML:{__html:e}}):i(b,{src:t,className:Object(c.a)("w-full rounded-t-xl",p[s])}),i(m,{color:s,snippet:n}))}function f({preview:e,src:t,previewClassName:n,snippet:a,color:o="gray",min:l=!1}){const g=Object(s.useRef)(),f=Object(r.h)(0),O=Object(s.useRef)(),{0:j,1:N}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{f.set(0)}));return e.observe(g.current),()=>{e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:g,className:`relative rounded-t-xl ${u[o]}`},i("div",{className:l?"md:w-88":void 0},i(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(f,(e=>-e))}},e?i("div",{className:Object(c.a)("rounded-t-xl",n,p[o],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):i(b,{src:t,className:Object(c.a)("w-full rounded-t-xl",p[o],{"pointer-events-none":j})}))),i("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(r.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(l?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),N(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[o]}`,style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(m,{color:o,snippet:a}))}},vKYu:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("HALo"),s=n("dhJC"),o=n("q1tI"),c=n.n(o),r=n("7ljp"),i=(n("YFqc"),n("tc9R")),l=n("pOT7"),p=n("vRWG"),u=n("I6Nb"),d=n("neGr"),b=n.n(d),m=n("8C7G"),g=n("wH44");c.a.createElement;const f={Layout:p.DocumentationLayout,classes:{plugin:b()},meta:{title:"Outline",description:"Utilities for controlling an element's outline."},tableOfContents:[{title:"Remove outlines",slug:"remove-outlines",children:[]},{title:"Dotted outlines",slug:"dotted-outlines",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Outlines",slug:"outlines"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},O=u.ContentsLayout;function j(e){let{components:t}=e,n=Object(s.a)(e,["components"]);return Object(r.a)(O,Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"remove-outlines",toc:!0},"Remove outlines"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"outline-none")," to hide the default browser outline on focused elements."),Object(r.a)("p",null,"It is highly recommended to apply your own focus styling for accessibility when using this utility.")),Object(r.a)(l.a,{preview:'\n  <div class="flex space-x-6 justify-center">\n    <input type="text" class="px-4 py-3 leading-5 border rounded-md" placeholder="Default focus style" />\n    <input type="text" class="px-4 py-3 leading-5 border rounded-md focus:outline-none focus:ring focus:border-blue-400" placeholder="Custom focus style" />\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Default focus style<span class="token punctuation">"</span></span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Custom focus style<span class="token punctuation">"</span></span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:outline-none focus:ring focus:border-blue-300</span> ...<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"The ",Object(r.a)("inlineCode",{parentName:"p"},"outline-none")," utility is implemented using a transparent outline under the hood to ensure elements are still visibly focused to ",Object(r.a)("a",Object(a.a)({parentName:"p"},{href:"https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/"}),"Windows high contrast mode")," users."),Object(r.a)(i.a,{level:2,id:"dotted-outlines",toc:!0},"Dotted outlines"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"outline-white")," and ",Object(r.a)("inlineCode",{parentName:"p"},"outline-black")," utilities to add a 2px dotted border around an element with a 2px offset. These are useful as an accessible general purpose custom focus style if you don\u2019t want to design your own.")),Object(r.a)(l.a,{preview:'\n  <div class="min-w-0 flex-1 bg-gray-100 p-10 flex items-center justify-center">\n    <button type="button" class="px-6 py-3 rounded-md font-semibold bg-blue-600 text-white focus:outline-black">Button A</button>\n  </div>\n  <div class="min-w-0 flex-1 bg-blue-700 p-10 flex items-center justify-center">\n    <button type="button" class="px-6 py-3 rounded-md font-semibold bg-white text-gray-900 focus:outline-white">Button B</button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:outline-black</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:outline-white</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"flex",color:void 0,min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(i.a,{level:3,id:"outlines",toc:!0},"Outlines"),Object(r.a)("p",null,"By default, Tailwind provides three outline utilities. You can customize these by editing the ",Object(r.a)("inlineCode",{parentName:"p"},"theme.outline")," section of your ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(a.a)({parentName:"div"},{className:"language-js"}),Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n  module",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    theme",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      extend",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        outline",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n          blue",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token string"}),"'2px solid #0000ff'"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n      ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(r.a)("p",null,"You can also provide an ",Object(r.a)("inlineCode",{parentName:"p"},"outline-offset")," value for any custom outline utilities using a tuple of the form ",Object(r.a)("inlineCode",{parentName:"p"},"[outline, outlineOffset]"),":"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(a.a)({parentName:"div"},{className:"language-js"}),Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n  module",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    theme",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      extend",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        outline",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n          blue",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token string"}),"'2px solid #0000ff'"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token string"}),"'1px'"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n      ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(r.a)(i.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(m.a,{plugin:"outline",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(g.a,{plugin:"outline",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=f},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("cpVT"),s=n("q1tI"),o=n.n(s),c=n("AOjV"),r=n("AI3G"),i=n("Zb5r"),l=o.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d({plugin:e,name:t}){const n=Object(r.a)(e);return t=t||e.replace(/([a-z])([A-Z])/g,((e,t,n)=>`${t} ${n.toLowerCase()}`)),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(n.map((e=>`<code>${e}</code>`)))}})," ",n.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(c.a,{path:"corePlugins",before:"...",add:n.reduce(((e,t)=>u(u({},e),{},{[t]:!1})),{})}))}},zG4Y:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/outline",function(){return n("vKYu")}])}},[["zG4Y",0,2,6,1,3,4,5,7]]]);