(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9450],{35668:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/sveltekit",function(){return c(99845)}])},32079:function(a,b,c){"use strict";c.d(b,{a:function(){return f}});var d=c(85893),e=c(74903);function f(a){var b=a.title,c=a.description,f=a.children;return(0,d.jsxs)(e.i,{children:[(0,d.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,d.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,d.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,d.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:b}),(0,d.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:c})]})}),(0,d.jsx)("section",{className:"mb-16 relative",children:f})]})}},99845:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return i},"default":function(){return j}});var d=c(85893),e=c(53339),f=c(32079),g=c(62223),h=[{title:"Create your project",body:function(){return(0,d.jsxs)("p",{children:["Start by creating a new SvelteKit project if you don't have one set up already. The most common approach is outlined in the"," ",(0,d.jsx)("a",{href:"https://kit.svelte.dev/docs#introduction-getting-started",children:"Getting Started with SvelteKit"})," ","introduction."]})},code:{name:"Terminal",lang:"terminal",code:"npm init svelte@next my-app\ncd my-app"}},{title:"Install Tailwind CSS",body:function(){return(0,d.jsxs)("p",{children:["Install ",(0,d.jsx)("code",{children:"tailwindcss"})," and its peer dependencies via npm, and then run the following commands to generate both ",(0,d.jsx)("code",{children:"tailwind.config.cjs"})," and"," ",(0,d.jsx)("code",{children:"postcss.config.cjs"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init tailwind.config.cjs -p\nmv postcss.config.js postcss.config.cjs"}},{title:"Configure your template paths",body:function(){return(0,d.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,d.jsx)("code",{children:"tailwind.config.cjs"})," file."]})},code:{name:"tailwind.config.cjs",lang:"javascript",code:"  module.exports = {\n>   content: ['./src/**/*.{html,js,svelte,ts}'],\n    theme: {\n      extend: {}\n    },\n    plugins: []\n  };"}},{title:"Add the Tailwind directives to your CSS",body:function(){return(0,d.jsxs)("p",{children:["Create a ",(0,d.jsx)("code",{children:"./src/app.css"})," file and add the ",(0,d.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers."]})},code:{name:"app.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Import the CSS file",body:function(){return(0,d.jsxs)("p",{children:["Create a ",(0,d.jsx)("code",{children:"./src/routes/__layout.svelte"})," file and import the newly-created"," ",(0,d.jsx)("code",{children:"app.css"})," file."]})},code:{name:"__layout.svelte",lang:"html",code:"<script>\n  import \"../app.css\";\n</script>\n\n<slot />"}},{title:"Start your build process",body:function(){return(0,d.jsxs)("p",{children:["Run your build process with ",(0,d.jsx)("code",{children:"npm run dev"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:function(){return(0,d.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."})},code:{name:"index.svelte",lang:"html",code:"<h1 class=\"text-3xl font-bold underline\">\n  Hello world!\n</h1>"}},],i=!0;function j(a){var b=a.code;return(0,d.jsx)(f.a,{title:"Install Tailwind CSS with SvelteKit",description:"Setting up Tailwind CSS in a SvelteKit project.",children:(0,d.jsx)(g.R,{steps:h,code:b})})}j.layoutProps={meta:{title:"Install Tailwind CSS with SvelteKit",section:"Getting Started"},Layout:e.L,allowOverflow:!1}}},function(a){a.O(0,[9840,6852,4713,8055,9774,2888,179],function(){return a(a.s=35668)}),_N_E=a.O()}])