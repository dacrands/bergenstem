!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=17)}([function(e,t,o){var n,r,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),l=null,d=0,c=[],p=o(14);function f(e,t){for(var o=0;o<e.length;o++){var n=e[o],r=i[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(x(n.parts[a],t))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(x(n.parts[a],t));i[n.id]={id:n.id,refs:1,parts:s}}}}function u(e,t){for(var o=[],n={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):o.push(n[a]={id:a,parts:[s]})}return o}function g(e,t){var o=s(e.insertInto);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),c.push(t);else if("bottom"===e.insertAt)o.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertInto+" "+e.insertAt.before);o.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function b(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),h(t,e.attrs),g(e,t),t}function h(e,t){Object.keys(t).forEach(function(o){e.setAttribute(o,t[o])})}function x(e,t){var o,n,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=d++;o=l||(l=b(t)),n=w.bind(null,o,a,!1),r=w.bind(null,o,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),g(e,t),t}(t),n=function(e,t,o){var n=o.css,r=o.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(n=p(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,o,t),r=function(){m(o),o.href&&URL.revokeObjectURL(o.href)}):(o=b(t),n=function(e,t){var o=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}.bind(null,o),r=function(){m(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var o=u(e,t);return f(o,t),function(e){for(var n=[],r=0;r<o.length;r++){var a=o[r];(s=i[a.id]).refs--,n.push(s)}e&&f(u(e,t),t);for(r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var y,v=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=v(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(i).concat([r]).join("\n")}var a;return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},function(e,t){const o=document.querySelector(".video-wrapper"),n="https://img.youtube.com/vi/"+o.dataset.embed+"/sddefault.jpg",r=new Image;r.src=n,r.addEventListener("load",()=>{o.appendChild(r)}),o.addEventListener("click",()=>{let e=document.createElement("iframe");e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),e.setAttribute("src","https://www.youtube.com/embed/"+o.dataset.embed+"?rel=0&showinfo=0&autoplay=1"),o.innerHTML="",o.appendChild(e)})},function(e,t){const o=document.querySelector("nav"),n=document.querySelectorAll(".patty"),r=document.querySelector(".resources"),i=document.querySelector(".toggle-menu"),a=document.querySelector(".toggle-button"),s=document.querySelector(".resource-menu");console.log(o.offsetHeight),console.log(o.offsetHeight),window.innerWidth<1e3&&(i.classList.add("toggle-menu__show"),i.classList.toString().includes("toggle-menu__show")&&n.forEach(e=>{e.classList.remove("patty-collapse")})),window.addEventListener("resize",()=>{window.innerWidth<1e3&&(console.log("happy"),i.classList.add("toggle-menu__show"),i.classList.toString().includes("toggle-menu__show")&&n.forEach(e=>{e.classList.remove("patty-collapse")}))}),a.addEventListener("click",()=>{n.forEach(e=>{e.classList.toggle("patty-collapse")}),i.classList.toggle("toggle-menu__show")}),r.addEventListener("click",()=>{s.classList.toggle("resource-menu__show")})},function(e,t,o){(e.exports=o(1)(!1)).push([e.i,'.header{min-height:35vh;background:#dadada;color:#3a3636}.box{font-size:1.2rem;display:grid;width:100%;grid-template-areas:"a a b b c" "a a b b c" "a a b b c" "a a b b d";grid-auto-rows:50px auto}.box-content__item{margin:30px 0}.box-content__item p{margin:0}.box-content{display:flex;flex-direction:column;justify-content:center}.box:first-of-type .box-content:first-of-type{background:#f7f7f7;grid-area:a}.box:first-of-type .box-content:nth-of-type(2){grid-area:b}.box:first-of-type .box-content:nth-of-type(3){background:#0c0c0c;grid-area:c}.box:first-of-type .box-content:nth-of-type(3) h3{color:#f7f3f3}.box:first-of-type .box-content:nth-of-type(3) p{color:#c5bdbd}.box:first-of-type .box-content:last-of-type{background:#d1cccc;grid-area:d}.box h3{color:#424242;margin-bottom:50px}.box p{color:#212121}.box-2{background:#1d1c1c;display:grid;align-content:space-around;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}.box-2 h4{color:#f7f3f3}.box-2 ol{color:#b6b5b5}.box-2 .box-content:nth-of-type(2){background:#f7f7f7}.box-2 .box-content:nth-of-type(2) h4{color:#2b2929}.box-2 h4:nth-of-type(2) h4 .box-3{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}.box-3 .box-content .lead,.box-3 p{color:#504e4d}.box-content{padding:40px}.box-content .lead{color:#424242;font-size:1.6rem}@media (max-width:1200px){.box{grid-template-areas:"a a a c c" "a a a c c" "b b b c c" "b b b d d"}.header h1{font-size:3rem}}@media (max-width:768px){.header h1{font-size:2.5rem}.box{grid-template-areas:"a a a a a" "a a a a a" "b b b b b" "b b b b b" "c c c c c" "c c c c c" "d d d d d" "d d d d d"}}',""])},function(e,t,o){var n=o(4);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(1)(!1)).push([e.i,"h1{text-align:center}header{display:flex;align-items:center}.jumbotron{background:none}.projects-container{display:grid}.projects-container nav{position:fixed;top:50%;z-index:4}.projects{display:flex;flex-flow:row wrap;align-content:center;justify-content:center}.project{background:#e7e7eb;width:300px;height:300px;margin:2%;overflow:hidden;display:grid;align-items:center;justify-items:center;grid-template-columns:1;grid-template-rows:50px 1fr 40px;border-radius:2%;transition:all .3s cubic-bezier(.25,.8,.25,1);box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.project-title{text-align:center;font-size:1.2rem;grid-row:1/2}.project-img,.project-title{grid-column:1/-1;width:100%;height:100%}.project-img{grid-row:2/3;box-shadow:none;overflow:hidden;transition:all .2s ease-in}.project-img img{object-fit:cover;overflow:hidden}.project-btn{grid-column:1/-1;grid-row:3/-1}.project-btn .btn{align-self:center;box-shadow:0 1px 3px rgba(0,0,0,.5);transition:all .1s}.project-btn .btn-light:hover{box-shadow:0 2px 5px rgba(0,0,0,.3);background:#fdfdfd}.project-btn form{display:inline-block}.project__overlay{background:#313130be;grid-column:2/-1;grid-row:2/3;width:100%;height:100%;position:relative;display:grid;justify-content:baseline;align-content:center;transition:.2s;transform:translateX(100%);padding:15px}.project__overlay p{color:#f0f8ff}.project:hover .project-img{transform:scale(.98)}.project-show .row>*{padding:40px;align-items:center}.project-show .col-md-12:first-of-type{display:flex}@media (max-width:768px){.project{grid-template-rows:40px 40px 1fr;margin:5% 2%}.project-title{align-items:flex-end}.project-btn{grid-column:2/-1;grid-row:2/3;width:100%;height:100%;display:flex;justify-content:space-around}.project-img,.project__overlay{grid-column:1/-1;grid-row:3/-1}}",""])},function(e,t,o){var n=o(6);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(1)(!1)).push([e.i,'input,textarea{border:none;line-height:1.8;font-size:1.1rem;padding:5px 15px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}input:focus,textarea:focus{transition:box-shadow .15s ease-in;outline:none;box-shadow:0 5px 10px rgba(0,0,0,.25),0 5px 5px rgba(0,0,0,.22)}.form-container{background:#dadada;display:flex;flex-direction:column;font-size:1.3rem;margin:0!important}.form-header{text-align:center;background:#f7f7f7!important}.form-container form{margin:20px auto;display:grid;grid-template-areas:"a a b b" "c c c c" "d d d d"}.form-item{display:flex;flex-direction:column;margin:10px}.form-item:first-of-type{grid-area:a}.form-item:nth-of-type(2){grid-area:b}.form-item:nth-of-type(3){grid-area:c}.form-item:nth-of-type(4){grid-area:d}form>*{color:var(--dark)}.form-item button{background:#00a5ff;width:min-content;border:none;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);padding:5px 10px;font-size:1.2rem;color:#fff}.form-item button:hover{cursor:pointer;transition:all .1s ease-in;box-shadow:0 4px 8px rgba(0,0,0,.25),0 3px 3px rgba(0,0,0,.22)}',""])},function(e,t,o){var n=o(8);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(1)(!1)).push([e.i,'.video-wrapper{background-color:#000;margin-bottom:30px;position:relative;padding-top:56.25%;overflow:hidden;cursor:pointer;max-height:35vh}.video-wrapper img{width:100%;top:-16.84%;left:0;opacity:.7}.video-wrapper .play-button{width:90px;height:60px;background-color:#333;box-shadow:0 0 30px rgba(0,0,0,.6);z-index:1;opacity:.8;border-radius:6px}.video-wrapper .play-button:before{content:"";border-style:solid;border-width:15px 0 15px 26px;border-color:transparent transparent transparent #fff}.video-wrapper .play-button,.video-wrapper img{cursor:pointer}.video-wrapper .play-button,.video-wrapper .play-button:before,.video-wrapper iframe,.video-wrapper img{position:absolute}.video-wrapper .play-button,.video-wrapper .play-button:before{top:50%;left:50%;transform:translate3d(-50%,-50%,0)}.video-wrapper iframe{height:100%;width:100%;top:0;left:0}',""])},function(e,t,o){var n=o(10);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){(e.exports=o(1)(!1)).push([e.i,"*{box-sizing:border-box}body{margin:0}.shaded{background:#000;height:100%;z-index:10}.shaded,nav{width:100%;top:0;left:0;position:fixed}nav{z-index:9999;color:#ced4da;display:grid;grid-template-columns:100px 1fr;align-content:center;justify-content:center;font-size:.9rem;background:rgba(0,0,0,.9)}nav ul{list-style:none;display:flex;justify-content:space-around;height:inherit;background:none;margin:0}nav ul,nav ul>*{align-self:center}nav a{color:inherit;display:inline-block;padding:10px;font-weight:100}nav a,nav a:hover{text-decoration:none}nav a:hover{color:#fff}.navbar__landing{background:none;padding:15px}.logo{position:relative;font-weight:500;font-size:1.4rem;display:flex;align-items:center;width:100px;color:#f7f7f7}.resource-menu{position:relative;width:200px;left:100%;display:block;flex-direction:row;margin-left:-220px;background:#fff;display:none}.resource-menu a{color:#1a62d8;font-size:1rem;display:block}.resource-menu a:hover{color:#043587}.resource-menu ul{background:#f7f7f7;color:#212223;position:absolute;box-shadow:1px 1px 2px solid rgba(0,0,0,.6);border-radius:2%;padding:0;display:flex;margin:2px;flex-direction:column;width:100%;min-height:inherit;text-align:right}.resource-menu ul>*{display:inline-block;width:100%;margin:0}.resource-menu__show{display:block}@media (max-width:900px){nav{color:#dadada;display:flex;justify-content:space-between;padding:10px 20px}nav a{padding:0}nav a,nav ul{display:block}nav ul{height:inherit;margin:0 15px;padding:10px}nav ul>*{margin:20px;text-align:right}nav .resource-menu ul{display:block;background:#fff;margin-top:10px}nav .resource-menu a{padding:10px}.toggle-menu{position:absolute;width:100%;margin:0 auto;left:0;top:60px;transition:all .3s ease-in-out}.toggle-menu ul{margin:0;background:rgba(0,0,0,.9)}.toggle-menu__show{display:none}.toggle-button{min-height:40px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:5px;padding:5px;height:100%}.toggle-button:hover{cursor:pointer}.toggle-button>*{width:35px;height:.1rem;margin:3px 0;background:#bcb8b8;padding:0;transition:all .2s ease-in-out}.patty-collapse:last-of-type{background:red;margin:0;transform:translateY(-100%);transform:rotate(45deg)}.patty-collapse:first-of-type{background:red;margin:-2px 0;transform:translateY(50%);transform:rotate(-45deg)}}",""])},function(e,t,o){var n=o(12);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,r);n.locals&&(e.exports=n.locals)},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,n=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?o+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,o){(e.exports=o(1)(!1)).push([e.i,"html{font-size:1rem}body{font-family:Raleway,sans-serif;margin:0;color:#2e302f;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}hr{background-color:#2e302f;border-color:#2e302f}a{text-decoration:none}a:hover{text-decoration:underline}p{color:#2e302f;line-height:1.5}iframe,img{border:none;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}h3,h4,h5{font-weight:700;font-size:1.5rem;margin:0}.display-1{font-size:7rem;font-weight:100}.img-fluid{width:100%;height:auto}.navbar{transition:all .35s cubic-bezier(.25,.8,.25,1)}.navbar-bg{background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.navbar-landing{padding:30px;background:transparent;color:#fff}.header{display:grid;display:flex;align-items:center;justify-content:center;height:200px;width:100%}.header h1{font-size:4rem}#myCanvas{margin:0;position:absolute;top:0;overflow:hidden}#myCanvas,.overlay{height:70vh;width:100%}.overlay{display:flex;flex-direction:column;justify-content:center;align-items:center}.landing,.landing-container{height:70vh;width:100%}.landing{overflow:hidden}.landing-title{font-weight:500;color:#e4e7eb;text-shadow:2px 2px 4px rgba(0,0,0,.23);position:absolute;width:100%;text-align:center;font-family:Raleway,sans-serif;z-index:2}.content{display:flex;justify-content:space-around;flex-flow:wrap;min-height:30vh}.content-text{text-align:center;display:flex;flex-direction:column;padding:15px;margin:15px;justify-self:center;max-width:400px;min-width:100px}.info{min-height:60vh;padding:10%;display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:60px;align-items:center;justify-content:space-around}.info-content{align-self:center}.info-content p:first-of-type{font-size:1.2rem}.info:nth-of-type(2n){background:#f3f1f3}.about-container{margin-bottom:50px}.about-container h5{font-weight:700}.about-container .row>*{padding:15px;outline:3px #ff4500}.footer{background:rgba(0,0,0,.9);box-shadow:0 0 10px rgba(0,0,0,.219);font-size:.7rem;display:flex;justify-content:space-around;flex-wrap:wrap;padding:10px;align-content:center}.footer a,.footer p{color:#bdbfc1}.footer-item{display:flex;flex-direction:column;padding:10px}.footer-item>*{margin:0;padding:0}.footer .lead{font-weight:700;font-size:.9rem;margin-bottom:4px}.footer .btn,.footer a{margin:3px 0}.footer .btn{font-size:1em}@media (max-width:1000px){.display-1{font-size:3.5rem}.field h1{font-size:1.8rem}}@media (max-width:768px){.content{grid-gap:20px}.landing{background-position:bottom}.header h1{font-size:2.5rem}.footer{flex-flow:column wrap}}@media (max-width:480px){.display-1{font-size:2.5rem}.info{grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}.field h1{font-size:1.5rem}}",""])},function(e,t,o){var n=o(15);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o(0)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){"use strict";o.r(t);o(16),o(13),o(11),o(9),o(7),o(5),o(3),o(2);document.querySelector(".about"),document.querySelector(".landing-container");const n=document.querySelector(".navbar");document.querySelector("#navbar");window.addEventListener("scroll",()=>{window.scrollY>=5?n.classList.remove("navbar__landing"):n.classList.add("navbar__landing")}),$(".navbar-toggler").click(()=>{(n.classList.contains("navbar__landing")||window.scrollY<5)&&n.classList.toggle("navbar__landing")}),Trianglify({width:window.innerWidth,cell_size:15,variance:60,stroke_width:5,x_colors:["#290238","#421155","#7A4A8D","9A73A9"],y_colors:"match_x"}).canvas(document.getElementById("myCanvas")),$(window).scroll(()=>{let e=$(void 0).scrollTop();$(".landing-title").css({transform:"translate(0px, -"+e/8+"%)"})})}]);