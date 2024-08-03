import{j as e,Y as d}from"./app-ekkVJCk3.js";import{A as l}from"./AuthenticatedLayout-LZbSwmXd.js";import{T as i}from"./constants-D0vbge5G.js";import"./ApplicationLogo-Cju9_G4y.js";import"./transition-BFusUh31.js";function h({auth:r,teams:a}){return e.jsxs(l,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-white leading-tight",children:"Teams"}),subheader:e.jsx("p",{className:"font-regular text-md text-[var(--subheader)] leading-tight",children:"List of teams in the system"}),children:[e.jsx(d,{title:"Teams"}),e.jsx("div",{className:"py-8",children:e.jsx("div",{className:"w-full mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-2 text-gray-900 dark:text-gray-100",children:e.jsx("div",{className:"overflow-auto rounded bg-[var(--foreground)] border-2 border-[var(--border)] p-4",children:e.jsxs("table",{className:"min-w-full rounded-lg",children:[e.jsx("thead",{className:"text-xs text-left text-[var(--table-headings)] uppercase rounded-t-lg border-b border-[var(--border)]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2 px-4 ",children:"Team Name"}),e.jsx("th",{className:"py-2 px-4 ",children:"Resources"}),e.jsx("th",{className:"py-2 px-4 ",children:"Team Type"}),e.jsx("th",{className:"py-2 px-4 ",children:"Team Status"})]})}),e.jsx("tbody",{children:a.data.map((s,t)=>e.jsxs("tr",{className:`hover:bg-[var(--table-hover)] border-b border-[var(--border)] rounded-full text-white text-nowrap ${t===0?"bg-[var(--even-odd)]":""}`,children:[e.jsx("td",{className:"py-2 px-4 rounded-l-lg ",children:s.team_name}),e.jsx("td",{className:"py-2 px-4 ",children:s.resource_name.join(", ")}),e.jsx("td",{className:"py-2 px-4 ",children:s.team_type}),e.jsx("td",{className:`py-2 px-4 rounded-r-lg ${i[s.status?"Active":"Inactive"]}`,children:s.status?"Active":"Inactive"})]},s.team_id))})]})})})})})})})]})}export{h as default};
