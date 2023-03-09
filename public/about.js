/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ (() => {

eval("const f1 = document.querySelector('.f1')\r\nconst f2 = document.querySelector('.f2')\r\nconst f3 = document.querySelector('.f3')\r\nconst dropdownTitle = document.querySelector('.dropdown--title')\r\n\r\nf1.addEventListener('click', () => {\r\n    document.body.style.fontFamily = 'sans-serif'\r\n    dropdownTitle.textContent = 'Sans-Serif'\r\n    console.log(\"helo\");\r\n})\r\nf2.addEventListener('click', () => {\r\n    document.body.style.fontFamily = 'serif'\r\n    dropdownTitle.textContent = 'Serif'\r\n})\r\nf3.addEventListener('click', () => {\r\n    document.body.style.fontFamily = 'monospace'\r\n    dropdownTitle.textContent = 'Mono'\r\n})\n\n//# sourceURL=webpack://1-project/./src/js/about.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/about.js"]();
/******/ 	
/******/ })()
;