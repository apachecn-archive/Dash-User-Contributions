(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2751],{96442:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/create-react-app",function(){return c(93352)}])},32079:function(a,b,c){"use strict";c.d(b,{a:function(){return f}});var d=c(85893),e=c(74903);function f(a){var b=a.title,c=a.description,f=a.children;return(0,d.jsxs)(e.i,{children:[(0,d.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,d.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,d.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,d.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:b}),(0,d.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:c})]})}),(0,d.jsx)("section",{className:"mb-16 relative",children:f})]})}},93352:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return i},"default":function(){return j}});var d=c(85893),e=c(53339),f=c(32079),g=c(62223),h=[{title:"Create your project",body:function(){return(0,d.jsxs)("p",{children:["Start by creating a new React project with"," ",(0,d.jsx)("a",{href:"https://create-react-app.dev/docs/getting-started",children:"Create React App v5.0+"})," if you don't have one already set up."]})},code:{name:"Terminal",lang:"terminal",code:"npx create-react-app my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:function(){return(0,d.jsxs)("p",{children:["Install ",(0,d.jsx)("code",{children:"tailwindcss"})," and its peer dependencies via npm, and then run the init command to generate both ",(0,d.jsx)("code",{children:"tailwind.config.js"})," and ",(0,d.jsx)("code",{children:"postcss.config.js"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"}},{title:"Configure your template paths",body:function(){return(0,d.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,d.jsx)("code",{children:"tailwind.config.js"})," file."]})},code:{name:"tailwind.config.js",lang:"js",code:"  module.exports = {\n>   content: [\n>     \"./src/**/*.{js,jsx,ts,tsx}\",\n>   ],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }"}},{title:"Add the Tailwind directives to your CSS",body:function(){return(0,d.jsxs)("p",{children:["Add the ",(0,d.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your"," ",(0,d.jsx)("code",{children:"./src/index.css"})," file."]})},code:{name:"index.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start your build process",body:function(){return(0,d.jsxs)("p",{children:["Run your build process with ",(0,d.jsx)("code",{children:"npm run start"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm run start"}},{title:"Start using Tailwind in your project",body:function(){return(0,d.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."})},code:{name:"App.js",lang:"jsx",code:"  export default function App() {\n    return (\n>     <h1 className=\"text-3xl font-bold underline\">\n>       Hello world!\n>     </h1>\n    )\n  }"}},],i=!0;function j(a){var b=a.code;return(0,d.jsx)(f.a,{title:"Install Tailwind CSS with Create React App",description:"Setting up Tailwind CSS in a Create React App project.",children:(0,d.jsx)(g.R,{steps:h,code:b})})}j.layoutProps={meta:{title:"Install Tailwind CSS with Create React App",section:"Installation"},Layout:e.L,allowOverflow:!1}}},function(a){a.O(0,[9840,6852,4713,8055,9774,2888,179],function(){return a(a.s=96442)}),_N_E=a.O()}])