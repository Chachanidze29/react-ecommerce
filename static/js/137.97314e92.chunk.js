"use strict";(self.webpackChunklecture_8=self.webpackChunklecture_8||[]).push([[137],{1827:function(e,r,n){n(2791);var t=n(184);r.Z=function(e){var r=e.clickHandler,n=e.children;return(0,t.jsx)("button",{className:"p-2 mt-4 text-white bg-blue-500 rounded-lg w-28 border-2 border-transparent hover:border-blue-500 hover:text-blue-500 hover:bg-white",onClick:r,children:n})}},5148:function(e,r,n){n(2791);var t=n(184);r.Z=function(e){var r=e.product;return(0,t.jsxs)("div",{className:"flex items-center px-2 py-4 m-2 rounded-lg cursor-pointer",children:[(0,t.jsx)("img",{src:r.image,className:"w-40 h-40 rounded-lg",alt:"Product Photo"}),(0,t.jsxs)("div",{className:"flex flex-col justify-between w-full ml-10",children:[(0,t.jsx)("p",{children:r.title}),(0,t.jsxs)("p",{children:["Price: $",r.price]}),(null===r||void 0===r?void 0:r.quantity)>0&&(0,t.jsxs)("p",{children:["Quantity:",r.quantity]}),!isNaN(Math.round(r.price*r.quantity))&&(0,t.jsxs)("p",{children:["Total Price:$",Math.round(r.price*r.quantity)]})]})]})}},5137:function(e,r,n){n.r(r);var t=n(5148),c=n(3070),i=n(402),l=n(1827),u=n(184);r.default=function(){var e=(0,c.jD)(),r=e.cartItems,n=e.cartDispatch;return(0,u.jsxs)("div",{className:"flex flex-col flex-wrap items-center w-full",children:[r.length>0&&(0,u.jsx)(l.Z,{clickHandler:function(){return n((0,i.LL)())},children:"Clear List"}),0===r.length?(0,u.jsx)("p",{className:"mt-10",children:"Cart is empty"}):r.map((function(e){return(0,u.jsxs)("div",{className:"w-1/2",children:[(0,u.jsx)(t.Z,{product:e},e.id),(0,u.jsxs)("div",{className:"flex justify-between",children:[(0,u.jsx)(l.Z,{clickHandler:function(){return n((0,i.gK)(e))},children:"Add to Cart"}),(0,u.jsx)(l.Z,{clickHandler:function(){return n((0,i.cl)(e.id))},children:"Remove from cart"}),(0,u.jsx)(l.Z,{clickHandler:function(){return n((0,i.rN)(e.id))},children:"Clear Item"})]})]},e.id)}))]})}},402:function(e,r,n){n.d(r,{gK:function(){return c},LL:function(){return u},rN:function(){return l},cl:function(){return i}});var t={ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM:"CLEAR_ITEM",CLEAR_CART:"CLEAR_CART"},c=function(e){return{type:t.ADD_ITEM,payload:e}},i=function(e){return{type:t.REMOVE_ITEM,payload:e}},l=function(e){return{type:t.CLEAR_ITEM,payload:e}},u=function(){return{type:t.CLEAR_CART}}}}]);
//# sourceMappingURL=137.97314e92.chunk.js.map