(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(8),r=c.n(s),n=(c(14),c(15),c(9)),i=c(5),l=c(7),d=(c(16),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),o=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],j=c(2),u=c.n(j),h=c(0),b=function(e){var t=e.users,c=e.selectedUser,a=e.changeSelectedUser,s=e.searchQuery,r=e.changeSearchQuery,n=e.categories,i=e.selectedCategories,l=e.changeCategory,d=e.clearCategories;return Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(h.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:u()({"is-active":!c}),onClick:function(){return a(0)},children:"All"}),t.map((function(e){return Object(h.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:u()({"is-active":e.id===c}),onClick:function(){return a(e.id)},children:e.name},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:s,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Boolean(s)&&Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return r("")}})})]})}),Object(h.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(h.jsx)("a",{href:"#/","data-cy":"AllCategories",onClick:d,className:u()("button","is-success","mr-6",{"is-outlined":Boolean(i.length)}),children:"All"}),n.map((function(e){return Object(h.jsx)("a",{"data-cy":"Category",className:u()("button","mr-2","my-1",{"is-info":i.includes(e.id)}),href:"#/",onClick:function(){return l(e.id)},children:e.title},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){a(0),r(""),d()},children:"Reset all filters"})})]})})},x=function(e){var t=e.product,c=t.user,a=t.category,s=function(e){return"m"===e};return Object(h.jsxs)("tr",{"data-cy":"Product",children:[Object(h.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:t.id}),Object(h.jsx)("td",{"data-cy":"ProductName",children:t.name}),Object(h.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(a.icon," - ").concat(a.title)}),Object(h.jsx)("td",{"data-cy":"ProductUser",className:u()("has-text-link",{"has-text-link":s(c.sex),"has-text-danger":!s(c.sex)}),children:c.name})]})},f=function(e){var t=e.products;return Object(h.jsx)("div",{className:"box table-container",children:t.length?Object(h.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(x,{product:e},e.id)}))})]}):Object(h.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})},m=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=o.find((function(t){var c=t.id;return e.categoryId===c})),c=d.find((function(e){var c=e.id;return t.ownerId===c}));return Object(l.a)(Object(l.a)({},e),{},{category:t,user:c})}));var O=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),j=l[0],u=l[1],x=Object(a.useState)([]),O=Object(i.a)(x,2),p=O[0],g=O[1],y=function(e,t){var c=t.userId,a=t.searchQuery,s=t.selectedCategories,r=function(e,t){return t?e.filter((function(e){return e.user.id===t})):e}(e,c);return r=function(e,t){var c=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(c)}))}(r,a),r=function(e,t){return t.length?e.filter((function(e){var c=e.category;return t.includes(c.id)})):e}(r,s),r}(m,{userId:c,searchQuery:j,selectedCategories:p});return Object(h.jsx)("div",{className:"section",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"Product Categories"}),Object(h.jsx)(b,{users:d,selectedUser:c,changeSelectedUser:function(e){return s(e)},searchQuery:j,changeSearchQuery:function(e){return u(e)},categories:o,selectedCategories:p,changeCategory:function(e){if(p.includes(e))return t=e,void g((function(e){return e.filter((function(e){return e!==t}))}));var t,c;c=e,g((function(e){return[].concat(Object(n.a)(e),[c])}))},clearCategories:function(){return g([])}}),Object(h.jsx)(f,{products:y})]})})};r.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f8970e5b.chunk.js.map