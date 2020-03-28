// ==UserScript==
// @name         Correspond
// @namespace    http://github.com/XXXXXXXXXXX
// @version      0.1
// @description  Format and copy SMS correspondence from messages.google.com
// @author       Werner Sævland
// @license      GNU GPL3
// @match        *://messages.google.com/*
// @grant        none
// @require      file://B:\MEGA\Userscripts\correspond.user.js
// @require      https://redom.js.org/redom.min.js
// @require      https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js
// ==/UserScript==
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @homepage
// @homepageURL
// @supportURL
// @updateURL   http://github.com/

// Your code here...
//const { el, mount } = redom;
import { el, mount } from "https://redom.js.org/redom.es.min.js";

(function() {
  "use strict";

  console.log("Testin hot loaded script!")

  const hello = el("h1", "Hello world!");
  mount(document.body, hello);

})();
