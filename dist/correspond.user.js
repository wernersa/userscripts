// ==UserScript==
// @name        Correspond
// @version     1.0.3.0
// @author      Werner Sævland
// @description Format and copy SMS correspondence from messages.google.com
// @homepage    https://github.com/wernersa/userscripts
// @supportURL  https://github.com/wernersa/userscripts
// @match       *://messages.google.com/*
// @updateURL   https://github.com/wernersa/userscripts/raw/master/dist/correspond.user.js
// @license     GNU GPL3
// @grant       GM_setValue
// @grant       GM_getValue
// ==/UserScript==

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);document.arrive("mws-tombstone-message-wrapper",(function(){this.remove()})),document.arrive("mws-message-status",(function(){this.remove()})),document.arrive("mws-avatar",(function(){this.closest("mws-message-wrapper")&&this.remove()})),document.arrive(".text-msg",(function(){var e=this.closest("mws-text-message-part");if("text-msg-container outgoing"==e.firstChild.getAttribute("class"))var t=!0;else t=!1;var n=e.getAttribute("aria-label");if(t)var r="SMS fra <b>u.t.</b>";else r="SMS fra <b>pas.</b>";var o="<b>"+n.match(/\d*. \w* \d* kl. \d*:\d*/)+"</b> - "+r+"</br>"+(n=(n=n.split(" sa: ")[1]).split(/. Mottatt|. Sendt /)[0])+"</br></br>";this.innerHTML=o}))},function(e,t){!function(e,t,n){"use strict";if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var r,o=0,i=(r=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector,{matchesSelector:function(e,t){return e instanceof HTMLElement&&r.call(e,t)},addMethod:function(e,t,n){var r=e[t];e[t]=function(){return n.length==arguments.length?n.apply(this,arguments):"function"==typeof r?r.apply(this,arguments):void 0}},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback)},checkChildNodesRecursively:function(e,t,n,r){for(var o,l=0;o=e[l];l++)n(o,t,r)&&r.push({callback:t.callback,elem:o}),o.childNodes.length>0&&i.checkChildNodesRecursively(o.childNodes,t,n,r)},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return void 0===t||"number"==typeof t.length&&t!==e||(t=[t]),t}}),l=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null};return e.prototype.addEvent=function(e,t,n,r){var o={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(o),this._eventsBucket.push(o),o},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null)}},e.prototype.beforeAdding=function(e){this._beforeAdding=e},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e},e}(),a=function(t,r){var o=new l,a=this,c={fireOnAttributesModification:!1};return o.beforeAdding((function(n){var o,i=n.target;i!==e.document&&i!==e||(i=document.getElementsByTagName("html")[0]),o=new MutationObserver((function(e){r.call(this,e,n)}));var l=t(n.options);o.observe(i,l),n.observer=o,n.me=a})),o.beforeRemoving((function(e){e.observer.disconnect()})),this.bindEvent=function(e,t,n){t=i.mergeArrays(c,t);for(var r=i.toElementsArray(this),l=0;l<r.length;l++)o.addEvent(r[l],e,t,n)},this.unbindEvent=function(){var e=i.toElementsArray(this);o.removeEvent((function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1}))},this.unbindEventWithSelectorOrCallback=function(e){var t,r=i.toElementsArray(this),l=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===l)return!0;return!1}:function(t){for(var o=0;o<r.length;o++)if((this===n||t.target===r[o])&&t.selector===e)return!0;return!1},o.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(e,t){var r=i.toElementsArray(this);o.removeEvent((function(o){for(var i=0;i<r.length;i++)if((this===n||o.target===r[i])&&o.selector===e&&o.callback===t)return!0;return!1}))},this},c=new function(){var e={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};function t(e,t,r){return!(!i.matchesSelector(e,t.selector)||(e._id===n&&(e._id=o++),-1!=t.firedElems.indexOf(e._id)))&&(t.firedElems.push(e._id),!0)}var r=(c=new a((function(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t}),(function(e,n){e.forEach((function(e){var r=e.addedNodes,o=e.target,l=[];null!==r&&r.length>0?i.checkChildNodesRecursively(r,n,t,l):"attributes"===e.type&&t(o,n,l)&&l.push({callback:n.callback,elem:o}),i.callCallbacks(l,n)}))}))).bindEvent;return c.bindEvent=function(t,n,o){void 0===o?(o=n,n=e):n=i.mergeArrays(e,n);var l=i.toElementsArray(this);if(n.existing){for(var a=[],c=0;c<l.length;c++)for(var s=l[c].querySelectorAll(t),u=0;u<s.length;u++)a.push({callback:o,elem:s[u]});if(n.onceOnly&&a.length)return o.call(a[0].elem,a[0].elem);setTimeout(i.callCallbacks,1,a)}r.call(this,t,n,o)},c},s=new function(){var e={};function t(e,t){return i.matchesSelector(e,t.selector)}var n=(s=new a((function(){return{childList:!0,subtree:!0}}),(function(e,n){e.forEach((function(e){var r=e.removedNodes,o=[];null!==r&&r.length>0&&i.checkChildNodesRecursively(r,n,t,o),i.callCallbacks(o,n)}))}))).bindEvent;return s.bindEvent=function(t,r,o){void 0===o?(o=r,r=e):r=i.mergeArrays(e,r),n.call(this,t,r,o)},s};t&&d(t.fn),d(HTMLElement.prototype),d(NodeList.prototype),d(HTMLCollection.prototype),d(HTMLDocument.prototype),d(Window.prototype);var u={};return f(c,u,"unbindAllArrive"),f(s,u,"unbindAllLeave"),u}function f(e,t,n){i.addMethod(t,n,e.unbindEvent),i.addMethod(t,n,e.unbindEventWithSelectorOrCallback),i.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function d(e){e.arrive=c.bindEvent,f(c,e,"unbindArrive"),e.leave=s.bindEvent,f(s,e,"unbindLeave")}}(window,"undefined"==typeof jQuery?null:jQuery,void 0)}]);