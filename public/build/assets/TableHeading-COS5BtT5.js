import{r,j as n}from"./app-CsKp3Ihm.js";function c({title:e,titleId:l,...a},t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),e?r.createElement("title",{id:l},e):null,r.createElement("path",{fillRule:"evenodd",d:"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const i=r.forwardRef(c);function d({title:e,titleId:l,...a},t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),e?r.createElement("title",{id:l},e):null,r.createElement("path",{fillRule:"evenodd",d:"M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z",clipRule:"evenodd"}))}const u=r.forwardRef(d);function x({sort_field:e=null,sort_direction:l=null,name:a,sortable:t=!0,sortChanged:o=()=>{},children:s}){return n.jsx("th",{onClick:()=>o(a),children:n.jsxs("div",{className:"px-3 py-3 flex items-center gap-2 cursor-pointer",children:[t&&n.jsxs("div",{children:[n.jsx(u,{className:"w-4 "+(e===a&&l==="asc"?"text-white":" ")}),n.jsx(i,{className:"w-4 -mt-2 "+(e===a&&l==="desc"?"text-white":" ")})]}),s]})})}export{x as T};
