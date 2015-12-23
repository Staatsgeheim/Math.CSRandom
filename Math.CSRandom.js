// ==UserScript==
// @name        Math.CSRandom
// @namespace   *
// @include     *
// @version     1
// @grant       none

unsafeWindow.eval("function CSRandom() { var csPRN = new Uint32Array(2);	window.crypto.getRandomValues(csPRN);	var finalRN = ((csPRN[0] * Math.pow(2,20)) + (csPRN[1] >>> 8)) * Math.pow(2,-56); /* console.log(finalRN); */ return finalRN; }; Math.random = CSRandom;");

// ==/UserScript==