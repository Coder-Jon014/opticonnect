import{j as r,Y as l}from"./app-CsKp3Ihm.js";import{A as t}from"./AuthenticatedLayout-thap6LXq.js";import{O as o}from"./constants-D0vbge5G.js";import"./ApplicationLogo-CCa-f3Aj.js";import"./transition-DobwvkZz.js";function b({auth:a,olts:s}){return console.log(s),r.jsxs(t,{user:a.user,header:r.jsx("h2",{className:"font-semibold text-xl text-white leading-tight",children:"OLTs"}),subheader:r.jsx("p",{className:"font-regular text-md text-[var(--subheader)] leading-tight",children:"List of OLTs in the system"}),children:[r.jsx(l,{title:"OLTs"}),r.jsx("div",{className:"py-8",children:r.jsx("div",{className:"w-full mx-auto sm:px-6 lg:px-8",children:r.jsx("div",{className:"mt-4",children:r.jsx("div",{className:"overflow-hidden shadow-sm sm:rounded-lg",children:r.jsx("div",{className:"p-2 text-gray-900 dark:text-gray-100",children:r.jsx("div",{className:"overflow-auto rounded bg-[var(--foreground)] border-2 border-[var(--border)] p-4",children:r.jsxs("table",{className:"min-w-full rounded-lg",children:[r.jsx("thead",{className:"text-xs text-left text-[var(--table-headings)] uppercase rounded-t-lg border-b border-[var(--border)]",children:r.jsxs("tr",{children:[r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"OLT Name"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Parish"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Town"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Customer Count"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Business Customer Count"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Residential Customer Count"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"OLT Value"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Resource"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Rank"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Level"})]})}),r.jsx("tbody",{children:s.data.map((e,d)=>r.jsxs("tr",{className:`hover:bg-[var(--table-hover)] border-b border-[var(--border)] rounded-full text-white text-nowrap ${d===0?"bg-[var(--even-odd)]":""}`,children:[r.jsx("td",{className:"py-2 px-4 rounded-l-lg ",children:e.olt_name}),r.jsx("td",{className:"py-2 px-4 ",children:e.parish}),r.jsx("td",{className:"py-2 px-4 ",children:e.town}),r.jsx("td",{className:"py-2 px-4 ",children:e.customer_count}),r.jsx("td",{className:"py-2 px-4 ",children:e.business_customer_count}),r.jsx("td",{className:"py-2 px-4 ",children:e.residential_customer_count}),r.jsx("td",{className:"py-2 px-4 ",children:e.olt_value}),r.jsx("td",{className:"py-2 px-4 ",children:e.resource_name}),r.jsx("td",{className:"py-2 px-4 ",children:e.rank}),r.jsx("td",{className:`py-2 px-4 rounded-r-lg ${o[e.level?"High":"Low"]}`,children:e.level})]},e.olt_id))})]})})})})})})})]})}export{b as default};
