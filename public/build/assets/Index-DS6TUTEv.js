import{j as r,Y as t}from"./app-CsKp3Ihm.js";import{A as o}from"./AuthenticatedLayout-thap6LXq.js";import{P as x}from"./Pagination-DA0d13S7.js";import"./ApplicationLogo-CCa-f3Aj.js";import"./transition-DobwvkZz.js";function m({auth:s,slas:a,queryParams:l}){const d=a.data||[];return console.log(d),r.jsxs(o,{user:s.user,header:r.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"SLAs"}),children:[r.jsx(t,{title:"SLAs"}),r.jsx("div",{className:"py-12",children:r.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:r.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:r.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[r.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[r.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500",children:r.jsxs("tr",{children:[r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Outage ID"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Refund Amount"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Duration (Hours)"}),r.jsx("th",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:"Compensation Details"})]})}),r.jsx("tbody",{children:d.map(e=>r.jsxs("tr",{children:[r.jsx("td",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:e.id}),r.jsx("td",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.refund_amount)}),r.jsx("td",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:e.max_duration}),r.jsx("td",{className:"py-2 px-4 border-b border-gray-200 dark:border-gray-700",children:e.compensation_details})]},e.id))})]}),r.jsx(x,{links:a.links})]})})})})]})}export{m as default};
