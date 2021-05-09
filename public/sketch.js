/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("let canvas = document.querySelector('#canvas');\r\nlet ctx = canvas.getContext('2d');\r\n/*\r\ntypes:\r\ntile map editor,\r\ntile editor...types:\r\n  black and white\r\n  gray-scale\r\n  rgb\r\n*/\r\nvar editorType = prompt('Enter editor type: tile-map, tile-painter');\r\nif (editorType == 'tile-map') {\r\n    alert('Mode set to tile map editor');\r\n}\r\nelse if (editorType == 'tile-painter') {\r\n    alert('Mode set to tile painter');\r\n    var tilePainterMode = prompt('Enter editor mode: grayscale, rgb, black-n-white');\r\n}\r\nelse {\r\n    alert('Invalid mode specified.');\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGl4ZWwtaW1hZ2UtZWRpdG9yLWFycmF5Ly4vc3JjL2luZGV4LnRzP2ZmYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxNQUFNLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakUsSUFBSSxHQUFHLEdBQTZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFNUQ7Ozs7Ozs7RUFPRTtBQUVGLElBQUksVUFBVSxHQUFXLE1BQU0sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0FBQzdFLElBQUcsVUFBVSxJQUFHLFVBQVUsRUFBQztJQUN6QixLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztDQUN0QztLQUNJLElBQUcsVUFBVSxJQUFHLGNBQWMsRUFBQztJQUNsQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNsQyxJQUFJLGVBQWUsR0FBVyxNQUFNLENBQUMsa0RBQWtELENBQUMsQ0FBQztDQUUxRjtLQUFLO0lBQ0osS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Q0FFbEMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xyXG5sZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbi8qXHJcbnR5cGVzOlxyXG50aWxlIG1hcCBlZGl0b3IsXHJcbnRpbGUgZWRpdG9yLi4udHlwZXM6XHJcbiAgYmxhY2sgYW5kIHdoaXRlXHJcbiAgZ3JheS1zY2FsZVxyXG4gIHJnYlxyXG4qL1xyXG5cclxudmFyIGVkaXRvclR5cGU6IHN0cmluZyA9IHByb21wdCgnRW50ZXIgZWRpdG9yIHR5cGU6IHRpbGUtbWFwLCB0aWxlLXBhaW50ZXInKTtcclxuaWYoZWRpdG9yVHlwZSA9PSd0aWxlLW1hcCcpe1xyXG4gIGFsZXJ0KCdNb2RlIHNldCB0byB0aWxlIG1hcCBlZGl0b3InKTtcclxufVxyXG5lbHNlIGlmKGVkaXRvclR5cGUgPT0ndGlsZS1wYWludGVyJyl7XHJcbiAgYWxlcnQoJ01vZGUgc2V0IHRvIHRpbGUgcGFpbnRlcicpO1xyXG4gIHZhciB0aWxlUGFpbnRlck1vZGU6IHN0cmluZyA9IHByb21wdCgnRW50ZXIgZWRpdG9yIG1vZGU6IGdyYXlzY2FsZSwgcmdiLCBibGFjay1uLXdoaXRlJyk7XHJcbiAgXHJcbn1lbHNlIHtcclxuICBhbGVydCgnSW52YWxpZCBtb2RlIHNwZWNpZmllZC4nKTtcclxuICBcclxufVxyXG5cclxuIl19\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;