(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([e.id,"* {\n  --main-color: #69BDAD;\n  --container: #F8F8F0;\n  --nav: #EEB977;\n  --nav-hover: #827157;\n  --white: #FFFFFF;\n  --ticked: #E1E1E1;\n  --button: #82d3c3;\n  --section: #4FBAA0;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n  background-color: var(--main-color);\n  display: flex;\n  flex-direction: column;\n}\n\n#content{\n  /*   background-color: var(--container);\n    box-shadow: 0 0 0 10px rgba(255,255,255,0.3); */\n}\n\nnav{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 25px;\n  background-color: var(--nav);\n  /*   padding: 30px;\n     */\n}\n\n\nul, li{\n  list-style: none;\n}\n\nnav li{\n  padding: 30px;\n  font-size: 1.5rem;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nnav li:hover{\n  background-color: var(--nav-hover);\n  height: 100%;\n  text-decoration: none;\n}\n\nmain{\n  background-color: var(--container);\n  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.3);\n  min-height: calc(100vh - 93px);\n  width: 80vw;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-content: center;\n  margin: 0 auto;\n}\n\nsection{\n  background-color: var(--section);\n  border-radius: 15px;\n  padding: 10px;\n  margin: 10px auto;\n  width: 50%;\n}\n\n.course{\n\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var h=o(p,a);a.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var c=a(e,o),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var a={};(()=>{t.d(a,{Z:()=>B});var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),s=t.n(i),c=t(565),l=t.n(c),d=t(216),u=t.n(d),m=t(589),p=t.n(m),h=t(426),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const y=[{name:"About",text:"Welcome to Happy Tails Cafe, where cozy meets cute. Our cafe is a haven for all animal lovers, complete with delicious treats, fresh coffee, and furry friends aplenty. Come visit us and enjoy a purrrfectly delightful experience unlike any other."},{name:"Hours",text:"<ul>\n                <li>Sunday: 8am - 6pm</li>\n                <li>Monday: 6am - 8pm</li>\n                <li>Tuesday: 6am - 8pm</li>\n                <li>Wednesday: 6am - 8pm</li>\n                <li>Thursday: 6am - 8pm</li>\n                <li>Friday: 6am - 10pm</li>\n                <li>Saturday: 6am - 10pm</li>\n            </ul>"},{name:"Location",text:"Happy Tails Cafe Nooks Neighborhood Café<br>123 Bell Tree Lane<br>New Horizons, AC 12345"}],g=()=>document.getElementById("main")?(console.log("main exists...deleting..."),document.getElementById("main").remove(),B(y)):(console.log("else home"),y),v=[{name:"Welcome to Happy Tails Cafe",text:"Welcome to our Animal Crossing themed café! <br>\nWe are a team of passionate and dedicated individuals who love bringing joy and smiles to our customers. \nOur café is designed to transport you to the whimsical world of Animal Crossing, where you can enjoy a cup of coffee or a tasty snack surrounded by all your favorite characters.<br><br>\nOur menu is carefully crafted to reflect the unique personality of each character, from the sweet and cuddly to the mischievous and quirky. \nWe strive to use only the highest quality ingredients in our drinks and snacks, so you can taste the difference with every sip and bite.<br><br>\nAt our café, we believe in fostering a sense of community and friendship. \nThat's why we offer a variety of events and activities throughout the year, such as game nights and cosplay events. \nIt's the perfect opportunity to connect with other Animal Crossing fans and make lasting memories.<br><br>\nThank you for considering our café for your next outing or event. We hope to see you soon and share our love of Animal Crossing with you!"}],b=()=>(document.getElementById("main")&&(console.log("main exists...deleting..."),document.getElementById("main").remove()),B(v)),w=[{name:"Happy Home Omelette",text:"A fluffy three-egg omelette filled with diced ham, bell peppers, and cheese, served with toast and a side of fresh fruit.",category:"Main Entrees"},{name:"Leafy Greens Salad",text:"A refreshing and crunchy salad made with mixed greens, carrots, cucumbers, and cherry tomatoes, topped with a sweet vinaigrette dressing and croutons shaped like leaves.",category:"Main Entrees"},{name:"Kawaii Curry Rice",text:"A comforting bowl of Japanese-style curry with tender chicken or veggies and fluffy rice, shaped like a cute animal.",category:"Main Entrees"},{name:"Rainbow Honey Tea",text:"A soothing ginger honey tea with a rainbow of fruit flavors, served with a honey-dipped honeycomb-shaped stirrer.",category:"Drinks"},{name:"Peachy Keen Iced Tea",text:"A refreshing iced tea infused with peach flavor and served with peach-shaped ice cubes.",category:"Drinks"},{name:"Starry Night Hot Cocoa",text:"A rich and creamy hot chocolate with a dash of cinnamon and a topping of homemade marshmallows shaped like stars.",category:"Drinks"},{name:"Pink Petal Tea",text:"A delicate and floral Japanese tea made with cherry blossoms, served in a dainty teapot and cups.",category:"Drinks"},{name:"Cinnamon Swirl Latte",text:"A cozy latte made with a sweet maple syrup and frothy milk, topped with a heart-shaped latte art.",category:"Drinks"},{name:"Black Pearl Delight: ",text:"A traditional milk tea made with black tea, creamy milk, and sweetened with a touch of sugar, then topped off with chewy tapioca pearls.",category:"Drinks"},{name:"Berry Matcha Marble: ",text:"This refreshing milk tea is made with a blend of sweet strawberry, earthy matcha green tea, and creamy milk, paired with chewy tapioca pearls for a fun and unique texture combination.",category:"Drinks"},{name:"Fossilized Cookies",text:"Delicious sugar cookies shaped like fossilized animal tracks, perfect for dunking in your tea or cocoa",category:"Desserts"},{name:"Berry Bustle Muffins",text:"Fresh-baked muffins bursting with blueberries, raspberries, and strawberries, and topped with a sprinkle of powdered sugar.",category:"Desserts"},{name:"DIY Animal Cookie Plate",text:"A fun and interactive snack for all ages, featuring a plate of animal-shaped cookies and various icings and toppings for you to decorate and make your own.",category:"Desserts"}],x=()=>(document.getElementById("main")&&(console.log("main exists...deleting..."),document.getElementById("main").remove()),B(w)),k=[{name:"Email",text:"contact@happytailscafe.com"},{name:"Phone",text:"555-194-2301"},{name:"Address",text:"Happy Tails Café Nooks Neighborhood Café<br>123 Bell Tree Lane<br>New Horizons, AC 12345"}],C=()=>(document.getElementById("main")&&(console.log("main exists...deleting..."),document.getElementById("main").remove()),B(k)),E=(...e)=>{console.log("appendContent");const n=document.getElementById("content");return e.forEach((e=>{console.log("elements--appendContent: "+e),n.appendChild(e)})),n},A=e=>{console.log("entering main...");let n,t=document.getElementById("main");return t||(t=document.createElement("main"),t.id="main"),e.forEach((e=>{if(e.category&&e.category!==n){n=e.category;const a=document.createElement("h2");a.className="course",a.textContent=n,t.appendChild(a)}const a=T(e);t.appendChild(a)})),t},T=e=>{const n=document.createElement("section");console.log("entering data for loop");let t=document.createElement("h3");t.textContent=e.name;let a=document.createElement("p");return a.innerHTML=e.text,n.append(t,a),n};E((()=>{const e=new Map;e.set(0,["Home",g]),e.set(1,["About",b]),e.set(2,["Menu",x]),e.set(3,["Contact",C]);const n=document.createElement("nav");return e.forEach((e=>{const t=document.createElement("li");t.textContent=e[0],t.addEventListener("click",(n=>{E(e[1]())})),n.appendChild(t)})),n})(),A(g()));const B=A;console.log("hello!!!")})()})();