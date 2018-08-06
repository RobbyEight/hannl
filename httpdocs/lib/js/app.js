/*! han.nl v0.1.0 */!function r(d,s,a){function l(t,e){if(!s[t]){if(!d[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var i=s[t]={exports:{}};d[t][0].call(i.exports,function(e){return l(d[t][1][e]||e)},i,i.exports,r,d,s,a)}return s[t].exports}for(var c="function"==typeof require&&require,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,t,n){var i=e("matches-selector");t.exports=function(e,t,n){for(var o=n?e:e.parentNode;o&&o!==document;){if(i(o,t))return o;o=o.parentNode}}},{"matches-selector":6}],2:[function(e,t,n){var i,r,d;function s(){i=window.addEventListener?"addEventListener":"attachEvent",r=window.removeEventListener?"removeEventListener":"detachEvent",d="addEventListener"!==i?"on":""}n.bind=function(e,t,n,o){return i||s(),e[i](d+t,n,o||!1),n},n.unbind=function(e,t,n,o){return r||s(),e[r](d+t,n,o||!1),n}},{}],3:[function(e,t,n){var r=e("closest"),d=e("component-event"),s=["focus","blur"];n.bind=function(n,o,e,i,t){return-1!==s.indexOf(e)&&(t=!0),d.bind(n,e,function(e){var t=e.target||e.srcElement;e.delegateTarget=r(t,o,!0,n),e.delegateTarget&&i.call(n,e)},t)},n.unbind=function(e,t,n,o){-1!==s.indexOf(t)&&(o=!0),d.unbind(e,t,n,o)}},{closest:1,"component-event":2}],4:[function(e,t,n){"use strict";var o={byMatcher:function(e,t,n){if(void 0===n&&(n={}),null===n||Array.isArray(n)||"object"!=typeof n)throw new Error("Expected opts to be an object.");if(e&&e!==document)return t(e)?e:this.byMatcher(e.parentNode,t,n);if(n.throwOnMiss)throw new Error("Expected to find parent node, but none was found.")},byClassName:function(e,t,n){return this.byMatcher(e,function(e){return e.classList.contains(t)},n)},withDataAttribute:function(e,t,n){return this.byMatcher(e,function(e){return e.dataset.hasOwnProperty(t)},n)}};t.exports=o},{}],5:[function(e,t,n){"use strict";t.exports=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n}},{}],6:[function(e,t,n){var o=Element.prototype,i=o.matchesSelector||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;t.exports=function(e,t){if(i)return i.call(e,t);for(var n=e.parentNode.querySelectorAll(t),o=0;o<n.length;++o)if(n[o]==e)return!0;return!1}},{}],7:[function(e,t,n){var o,i;o=this,i=function(e){"use strict";var t="function"==typeof Promise?Promise:function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(){};return t(function(){n()}),{then:function(e){n=e}}},L={_:[],add:function(e,t,n,o){L.remove(e),L._.push({el:e,defaultStyle:t,timeoutId:n,onCancelled:o})},remove:function(e){var t=L.findIndex(e);if(-1!==t){var n=L._[t];clearTimeout(n.timeoutId),n.onCancelled(),L._.splice(t,1)}},find:function(e){return L._[L.findIndex(e)]},findIndex:function(n){var o=-1;return L._.some(function(e,t){if(e.el===n)return o=t,!0}),o}},j="cubic-bezier( 0.19, 1, 0.22, 1 )";function O(e){return 0!==e.offsetHeight}function q(e){e.style.visibility="",e.style.height="",e.style.paddingTop="",e.style.paddingBottom="",e.style.borderTopWidth="",e.style.borderBottomWidth="",e.style.overflow="",e.style.transition="",e.style.webkitTransition=""}function M(e){return+e.replace(/px/,"")}e.slideDown=function(P){var W=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new t(function(e){if(W.onComplete&&console.warn("options.onComplete will be deprecated. use 'then' instead"),-1===L.findIndex(P)){var t=O(P),n="number"==typeof W.endHeight,o=W.display||"block",i=W.duration||400,r=W.onComplete||function(){},d=W.onCancelled||function(){},s=P.getAttribute("style")||"",a=window.getComputedStyle(P),l=function(e,t){var n=e.getAttribute("style")||"",o=window.getComputedStyle(e);e.style.visibility="hidden",e.style.display=t||"block";var i=M(o.getPropertyValue("width"));e.style.position="absolute",e.style.width=i+"px",e.style.height="",e.style.paddingTop="",e.style.paddingBottom="",e.style.borderTopWidth="",e.style.borderBottomWidth="";var r=M(o.getPropertyValue("padding-top")),d=M(o.getPropertyValue("padding-bottom")),s=M(o.getPropertyValue("border-top-width")),a=M(o.getPropertyValue("border-bottom-width")),l=e.scrollHeight;return e.setAttribute("style",n),{height:l,paddingTop:r,paddingBottom:d,borderTop:s,borderBottom:a}}(P,o),c=/border-box/.test(a.getPropertyValue("box-sizing")),p=l.height,u=l.paddingTop,f=l.paddingBottom,m=l.borderTop,y=l.borderBottom,g=i+"ms",h=["height "+g+" "+j,"padding "+g+" "+j,"border-width "+g+" "+j].join(),b=t?a.height:"0px",v=t?a.paddingTop:"0px",w=t?a.paddingBottom:"0px",x=t?a.borderTopWidth:"0px",_=t?a.borderBottomWidth:"0px",T=n?W.endHeight+"px":c?p+m+y+"px":p-u-f+"px",A=u+"px",E=f+"px",C=m+"px",B=y+"px";if(b===T&&v===A&&w===E&&x===C&&_===B)return r(),void e();requestAnimationFrame(function(){P.style.height=b,P.style.paddingTop=v,P.style.paddingBottom=w,P.style.borderTopWidth=x,P.style.borderBottomWidth=_,P.style.display=o,P.style.overflow="hidden",P.style.visibility="visible",P.style.transition=h,P.style.webkitTransition=h,requestAnimationFrame(function(){P.style.height=T,P.style.paddingTop=A,P.style.paddingBottom=E,P.style.borderTopWidth=C,P.style.borderBottomWidth=B})});var S=setTimeout(function(){q(P),P.style.display=o,n&&(P.style.height=W.endHeight+"px",P.style.overflow="hidden"),L.remove(P),r(),e()},i);L.add(P,s,S,d)}})},e.slideUp=function(_){var T=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new t(function(e){if(T.onComplete&&console.warn("options.onComplete will be deprecated. use 'then' instead"),-1===L.findIndex(_)){var t=O(_),n=T.display||"block",o=T.duration||400,i=T.onComplete||function(){},r=T.onCancelled||function(){};if(!t)return i(),void e();var d=_.getAttribute("style")||"",s=window.getComputedStyle(_),a=/border-box/.test(s.getPropertyValue("box-sizing")),l=M(s.getPropertyValue("padding-top")),c=M(s.getPropertyValue("padding-bottom")),p=M(s.getPropertyValue("border-top-width")),u=M(s.getPropertyValue("border-bottom-width")),f=_.scrollHeight,m=o+"ms",y=["height "+m+" "+j,"padding "+m+" "+j,"border-width "+m+" "+j].join(),g=a?f+p+u+"px":f-l-c+"px",h=l+"px",b=c+"px",v=p+"px",w=u+"px";requestAnimationFrame(function(){_.style.height=g,_.style.paddingTop=h,_.style.paddingBottom=b,_.style.borderTopWidth=v,_.style.borderBottomWidth=w,_.style.display=n,_.style.overflow="hidden",_.style.transition=y,_.style.webkitTransition=y,requestAnimationFrame(function(){_.style.height=0,_.style.paddingTop=0,_.style.paddingBottom=0,_.style.borderTopWidth=0,_.style.borderBottomWidth=0})});var x=setTimeout(function(){q(_),_.style.display="none",L.remove(_),i(),e()},o);L.add(_,d,x,r)}})},e.slideStop=function(e){if(L.find(e)){var t=window.getComputedStyle(e),n=t.height,o=t.paddingTop,i=t.paddingBottom,r=t.borderTopWidth,d=t.borderBottomWidth;q(e),e.style.height=n,e.style.paddingTop=o,e.style.paddingBottom=i,e.style.borderTopWidth=r,e.style.borderBottomWidth=d,e.style.overflow="hidden",L.remove(e)}},e.isVisible=O,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof n&&void 0!==t?i(n):"function"==typeof define&&define.amd?define(["exports"],i):i(o.slideAnim={})},{}],8:[function(e,t,n){var o=e("delegate-events"),i=e("../../../constants"),r=e("slide-anim").slideUp,d=e("slide-anim").slideDown,s=e("find-parent");function a(e,t,n){if(e&&t){var o=s.byClassName(t,"js-collapsible");"false"===e.getAttribute("aria-expanded")?(e.setAttribute("aria-expanded",!0),o.classList.add(i.OPEN_CLASS),d(t,{duration:n||200}).then(function(){t.setAttribute("tabIndex","-1"),t.focus()})):(e.setAttribute("aria-expanded",!1),o.classList.remove(i.OPEN_CLASS),r(t,{duration:n||200}))}}o.bind(document.body,".js-collapsible__button","click",function(e){var t=e.delegateTarget,n=t.getAttribute("aria-controls");n&&a(t,document.getElementById(n))}),function(){for(var e=document.querySelectorAll(".js-collapsible"),t=0,n=e.length;t<n;++t){var o=e[t];a(o.querySelector(".js-collapsible__button"),o.querySelector(".js-collapsible__content"),1)}}()},{"../../../constants":12,"delegate-events":3,"find-parent":4,"slide-anim":7}],9:[function(e,t,n){arguments[4][8][0].apply(n,arguments)},{"../../../constants":12,"delegate-events":3,dup:8,"find-parent":4,"slide-anim":7}],10:[function(e,t,n){window.HAN={},e("./components/content/collapsibles"),e("./components/content/submenu-course"),e("./utils/grid")},{"./components/content/collapsibles":8,"./components/content/submenu-course":9,"./utils/grid":11}],11:[function(e,t,n){var o=0;function i(){if(o%2==0){var e=document.createElement("div");e.classList.add("demo-grid-overlay"),e.innerHTML='<div class="demo-grid"><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div><div class="demo-grid__item"><span></span></div></div>',document.body.appendChild(e)}else document.body.removeChild(document.querySelector(".demo-grid-overlay"));++o}window.HAN.grid=i,document.addEventListener("keydown",function(e){76===e.which&&e.ctrlKey&&i()},!1)},{}],12:[function(e,t,n){var o=e("keymirror")({}),i=Object.assign({},{OPEN_CLASS:"is-open"},o,{KEY_ESCAPE:27});t.exports=i},{keymirror:5}]},{},[10]);