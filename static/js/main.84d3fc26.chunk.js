(window["webpackJsonpcart-project"]=window["webpackJsonpcart-project"]||[]).push([[0],{21:function(t,n,e){t.exports=e(33)},26:function(t,n,e){},33:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(6),o=e.n(i),u=(e(26),e(1)),c=e(2),d=e(8);function l(){var t=Object(u.a)(["\n  text-align: center;\n  border: none;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  margin: 0px;\n  width: 20px;\n  height: 19px;\n  outline: none;\n  \n  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);return l=function(){return t},t}function p(){var t=Object(u.a)(["\n  border-radius: 0 15px 15px 0;\n"]);return p=function(){return t},t}function f(){var t=Object(u.a)(["\n  border-radius: 15px 0 0 15px;\n"]);return f=function(){return t},t}function b(){var t=Object(u.a)(["\n  display: inline-block;\n  border: 1px solid #ddd;\n  margin: 0px;\n  width: 25px;\n  height: 21px;\n  text-align: center;\n  background: #eee;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n"]);return b=function(){return t},t}function m(){var t=Object(u.a)(["\n  min-width: 95px;\n"]);return m=function(){return t},t}var s=c.a.div(m()),v=c.a.div(b()),x=Object(c.a)(v)(f()),y=Object(c.a)(v)(p()),g=c.a.input(l()),h=function(t){var n=t.id,e=t.quantity,r=t.addQuantity,i=t.subtractQuantity;t.inputQuantity;return a.a.createElement(s,null,a.a.createElement(x,{onClick:function(){return i(n)}},"-"),a.a.createElement(g,{type:"number",value:e}),a.a.createElement(y,{onClick:function(){return r(n)}},"+"))};function O(){var t=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return O=function(){return t},t}function E(){var t=Object(u.a)(["\n  font-size: 16px;\n  text-align: center;\n  background-color: grey;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n"]);return E=function(){return t},t}function j(){var t=Object(u.a)(["\n  font-size: 14px;\n  font-weight: 300;\n  width: 20%;\n  padding: 10px;\n  text-align: start;\n  border-bottom: 1px solid black;\n  \n  :first-child {\n    width: 40%\n  }\n"]);return j=function(){return t},t}var w=c.a.td(j()),I=c.a.button(E()),k=c.a.div(O()),T=function(t){var n=t.item,e=t.removeItem,r=t.addQuantity,i=t.subtractQuantity,o=t.inputQuantity;return a.a.createElement("tr",null,a.a.createElement(w,null,n.title),a.a.createElement(w,null,"".concat(n.price," USD")),a.a.createElement(w,null,a.a.createElement(h,{id:n.id,quantity:n.quantity,subtractQuantity:i,addQuantity:r,inputQuantity:o})),a.a.createElement(w,null,a.a.createElement(k,null,"".concat(n.totalPrice," USD"),a.a.createElement(I,{onClick:function(){return e(n.id)}},"-"))))};function Q(){var t=Object(u.a)(["\n  align-self: flex-end;\n  font-size: 18px;\n  font-weight: 400;\n  padding: 0 20px;\n"]);return Q=function(){return t},t}function P(){var t=Object(u.a)(["\n  font-size: 14px;\n  font-weight: 400;\n  width: 20%;\n  padding: 10px;\n  text-align: start;\n  border-bottom: 1px solid black;\n  \n  :first-child {\n    width: 40%\n  }\n"]);return P=function(){return t},t}function A(){var t=Object(u.a)(["\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n"]);return A=function(){return t},t}function C(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 20px 40px 20px;\n  border: 1px solid black;\n"]);return C=function(){return t},t}function D(){var t=Object(u.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 15px;\n"]);return D=function(){return t},t}function q(){var t=Object(u.a)(["\n  padding: 0 5px;\n"]);return q=function(){return t},t}var U=c.a.div(q()),_=c.a.div(D()),N=c.a.div(C()),z=c.a.table(A()),S=c.a.th(P()),R=c.a.div(Q()),Y=function(t){var n=t.addedItems,e=t.total,r=t.removeItem,i=t.addQuantity,o=t.subtractQuantity,u=t.inputQuantity;return a.a.createElement(U,null,a.a.createElement(_,null,"Cart"),a.a.createElement(N,null,a.a.createElement(z,null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement(S,null,"Item"),a.a.createElement(S,null,"Price"),a.a.createElement(S,null,"Quantity"),a.a.createElement(S,null,"Total price")),n.map(function(t){return a.a.createElement(T,{key:t.id,item:t,removeItem:r,addQuantity:i,subtractQuantity:o,inputQuantity:u})}))),a.a.createElement(R,null,"Total Amount: ".concat(e," USD"))))};function M(){var t=Object(u.a)(["\n  width: 100%;\n  font-size: 12px;\n  padding: 7px 0;\n  font-weight: 700;\n  background-color: #cccccc;\n  border-radius: 10px;\n  border: 1px solid #a8a8a8;\n  cursor: pointer;\n"]);return M=function(){return t},t}function B(){var t=Object(u.a)(["\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 10px;\n"]);return B=function(){return t},t}function J(){var t=Object(u.a)(["\n  font-size: 14px;\n  font-weight: 300;\n  margin-bottom: 10px;\n"]);return J=function(){return t},t}function V(){var t=Object(u.a)(["\n  padding: 10px 5px;\n  border: 1px solid black;\n  border-top: 2px solid black;\n  \n  :nth-child(3n + 1) {\n    border-right: 2px solid black;\n    \n    "," {\n      border-right: 2px solid black;\n      border-bottom: 2px solid black;\n    }\n  }\n  \n  :nth-child(3n + 2) {\n    "," {\n      border-bottom: 2px solid black;\n    }\n  }\n  \n  :nth-child(3n) {\n    border-left: 2px solid black;\n    \n    "," {\n      border-right: 2px solid black;\n      border-bottom: 2px solid black;\n      border-left: 2px solid black;\n    }\n  }\n"]);return V=function(){return t},t}function F(){var t=Object(u.a)(["\n  position: relative;\n  height: 100px;\n  overflow: hidden;\n  border: 1px solid black;\n  margin-bottom: 10px;\n  \n   &::before, &::after {\n    content: '';\n    position: absolute;\n    height: 2px;\n    width: 100%;\n    top: 50%;\n    left: 0;\n    background: #000;\n  }\n  \n  &::before {\n    transform: rotate(26deg);\n  }\n  \n  &::after {\n    transform: rotate(-26deg);\n  }\n"]);return F=function(){return t},t}var G=c.a.div(F()),H=c.a.div(V(),G,G,G),K=c.a.div(J()),L=c.a.div(B()),W=c.a.button(M()),X=function(t){var n=t.product,e=t.addToCart,r=n.id,i=n.title,o=n.price;return a.a.createElement(H,null,a.a.createElement(G,null),a.a.createElement(K,null,i),a.a.createElement(L,null,"".concat(o," USD")),a.a.createElement(W,{onClick:function(){return e(r)}},"Add to Cart"))};function Z(){var t=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 10%;\n  grid-row-gap: 10px;\n"]);return Z=function(){return t},t}function $(){var t=Object(u.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 15px;\n"]);return $=function(){return t},t}function tt(){var t=Object(u.a)(["\n  padding: 0 5px;\n"]);return tt=function(){return t},t}var nt=c.a.div(tt()),et=c.a.div($()),rt=c.a.div(Z()),at=function(t){var n=t.products,e=t.addToCart;return a.a.createElement(nt,null,a.a.createElement(et,null,"Products"),a.a.createElement(rt,null,n.map(function(t){return a.a.createElement(X,{key:t.id,product:t,addToCart:e})})))};function it(){var t=Object(u.a)(["\n  margin-bottom: 30px;\n"]);return it=function(){return t},t}function ot(){var t=Object(u.a)(["\n  margin-bottom: 30px;\n"]);return ot=function(){return t},t}function ut(){var t=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 768px;\n    margin: 50px auto 0;\n"]);return ut=function(){return t},t}var ct=c.a.div(ut()),dt=c.a.div(ot()),lt=c.a.div(it()),pt=Object(d.b)(function(t){return{products:t.products,addedItems:t.addedItems,total:t.total}},function(t){return{addToCart:function(n){t(function(t){return{type:"ADD_TO_CART",id:t}}(n))},removeItem:function(n){t(function(t){return{type:"REMOVE_ITEM",id:t}}(n))},addQuantity:function(n){t(function(t){return{type:"ADD_QUANTITY",id:t}}(n))},subtractQuantity:function(n){t(function(t){return{type:"SUBTRACT_QUANTITY",id:t}}(n))},inputQuantity:function(n,e){t(function(t,n){return{type:"INPUT_QUANTITY",quantity:n,id:t}}(n,e))}}})(function(t){var n=t.products,e=t.addedItems,r=t.total,i=t.addToCart,o=t.removeItem,u=t.addQuantity,c=t.subtractQuantity,d=t.inputQuantity;return a.a.createElement(ct,null,a.a.createElement(dt,null,a.a.createElement(Y,{addedItems:e,total:r,removeItem:o,addQuantity:u,subtractQuantity:c,inputQuantity:d})),a.a.createElement(lt,null,a.a.createElement(at,{products:n,addToCart:i})))}),ft=e(18),bt=e(17);function mt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function st(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?mt(e,!0).forEach(function(n){Object(bt.a)(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):mt(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var vt={products:[{id:1,title:"Product Name",price:50,img:null},{id:2,title:"Product Name",price:30,img:null},{id:3,title:"Product Name",price:20,img:null}],addedItems:[],total:0},xt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_TO_CART":var e=t.products.find(function(t){return t.id===n.id}),r=t.addedItems.find(function(t){return t.id===e.id});if(r){e.quantity+=1,e.totalPrice+=e.price;var a=t.total+e.price;return st({},t,{total:a})}e.quantity=1,e.totalPrice=e.price;var i=t.total+e.price;return st({},t,{addedItems:[].concat(Object(ft.a)(t.addedItems),[e]),total:i});case"REMOVE_ITEM":var o=t.addedItems.find(function(t){return t.id===n.id}),u=t.addedItems.filter(function(t){return t.id!==n.id}),c=t.total-o.price*o.quantity;return st({},t,{addedItems:u,total:c});case"ADD_QUANTITY":var d=t.addedItems.find(function(t){return t.id===n.id});d.quantity+=1,d.totalPrice+=d.price;var l=t.total+d.price;return st({},t,{total:l});case"INPUT_QUANTITY":var p=t.addedItems.find(function(t){return t.id===n.id});if(n.quantity<=0){var f=t.addedItems.filter(function(t){return t.id!==n.id}),b=t.total-p.totalPrice;return st({},t,{addedItems:f,total:b})}var m=t.total-p.totalPrice;return p.quantity=n.quantity,p.totalPrice=p.quantity*p.price,st({},t,{total:m+=p.totalPrice});case"SUBTRACT_QUANTITY":var s=t.addedItems.find(function(t){return t.id===n.id});s.quantity-=1,s.totalPrice-=s.price;var v=t.total-s.price;if(0===s.quantity){var x=t.addedItems.filter(function(t){return t.id!==n.id});return st({},t,{addedItems:x,total:v})}return st({},t,{total:v});default:return t}},yt=e(7),gt=Object(yt.b)(xt);o.a.render(a.a.createElement(d.a,{store:gt},a.a.createElement(pt,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.84d3fc26.chunk.js.map