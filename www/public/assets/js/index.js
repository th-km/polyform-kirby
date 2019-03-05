/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/os-browserify/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/os-browserify/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.endianness = function () { return 'LE' };\n\nexports.hostname = function () {\n    if (typeof location !== 'undefined') {\n        return location.hostname\n    }\n    else return '';\n};\n\nexports.loadavg = function () { return [] };\n\nexports.uptime = function () { return 0 };\n\nexports.freemem = function () {\n    return Number.MAX_VALUE;\n};\n\nexports.totalmem = function () {\n    return Number.MAX_VALUE;\n};\n\nexports.cpus = function () { return [] };\n\nexports.type = function () { return 'Browser' };\n\nexports.release = function () {\n    if (typeof navigator !== 'undefined') {\n        return navigator.appVersion;\n    }\n    return '';\n};\n\nexports.networkInterfaces\n= exports.getNetworkInterfaces\n= function () { return {} };\n\nexports.arch = function () { return 'javascript' };\n\nexports.platform = function () { return 'browser' };\n\nexports.tmpdir = exports.tmpDir = function () {\n    return '/tmp';\n};\n\nexports.EOL = '\\n';\n\nexports.homedir = function () {\n\treturn '/'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb3MtYnJvd3NlcmlmeS9icm93c2VyLmpzPzNjNDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQiw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1Qiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxVQUFVOztBQUV6Qiw0QkFBNEI7O0FBRTVCLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9vcy1icm93c2VyaWZ5L2Jyb3dzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzLmVuZGlhbm5lc3MgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnTEUnIH07XG5cbmV4cG9ydHMuaG9zdG5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lXG4gICAgfVxuICAgIGVsc2UgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5sb2FkYXZnID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfTtcblxuZXhwb3J0cy51cHRpbWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAwIH07XG5cbmV4cG9ydHMuZnJlZW1lbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbn07XG5cbmV4cG9ydHMudG90YWxtZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG59O1xuXG5leHBvcnRzLmNwdXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9O1xuXG5leHBvcnRzLnR5cGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnQnJvd3NlcicgfTtcblxuZXhwb3J0cy5yZWxlYXNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb247XG4gICAgfVxuICAgIHJldHVybiAnJztcbn07XG5cbmV4cG9ydHMubmV0d29ya0ludGVyZmFjZXNcbj0gZXhwb3J0cy5nZXROZXR3b3JrSW50ZXJmYWNlc1xuPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7fSB9O1xuXG5leHBvcnRzLmFyY2ggPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnamF2YXNjcmlwdCcgfTtcblxuZXhwb3J0cy5wbGF0Zm9ybSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdicm93c2VyJyB9O1xuXG5leHBvcnRzLnRtcGRpciA9IGV4cG9ydHMudG1wRGlyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAnL3RtcCc7XG59O1xuXG5leHBvcnRzLkVPTCA9ICdcXG4nO1xuXG5leHBvcnRzLmhvbWVkaXIgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAnLydcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/os-browserify/browser.js\n");

/***/ }),

/***/ "./resources/css/index.css":
/*!*********************************!*\
  !*** ./resources/css/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvY3NzL2luZGV4LmNzcz82ODJiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Nzcy9pbmRleC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/css/index.css\n");

/***/ }),

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os */ \"./node_modules/os-browserify/browser.js\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);\n // Accordions\n// ——————————————————\n\nvar container = document.querySelector('.accordion-container');\n\nvar getHeight = function getHeight(accordion, content) {\n  var inner = content.children[0];\n  var height = accordion.classList.contains('is-open') ? 0 : inner.getBoundingClientRect().height;\n  return height;\n};\n\nvar toggleAccordion = function toggleAccordion(accordion) {\n  accordion.classList.toggle('is-open');\n};\n\nvar updateHeight = function updateHeight(el, height) {\n  el.style.height = \"\".concat(height, \"px\");\n};\n\ncontainer.addEventListener('click', function (e) {\n  var header = e.target.closest('.accordion-header');\n  if (!header) return;\n  var accordion = header.parentElement;\n  var content = header.nextElementSibling;\n  var height = getHeight(accordion, content);\n  updateHeight(content, height);\n  toggleAccordion(accordion);\n}); // Gallery\n// ——————————————————\n\nvar galleryTag = document.querySelector('.gallery');\nvar images = document.querySelectorAll('img');\nvar currentImage = 0;\nvar interval = 0; // Loop\n\nvar loop = function loop() {\n  currentImage += 1;\n\n  if (currentImage > images.length - 1) {\n    currentImage = 0;\n  } // Remove class\n\n\n  images.forEach(function (image) {\n    image.classList.remove('is-visible');\n  }); // Add class to the current image\n\n  images[currentImage].classList.add('is-visible');\n}; // Define interval\n\n\nvar startLoop = function startLoop() {\n  interval = setInterval(loop, 150);\n}; // Stop the loop\n\n\ngalleryTag.addEventListener('mouseenter', startLoop);\ngalleryTag.addEventListener('touchstart', startLoop); // Start again\n\ngalleryTag.addEventListener('mouseleave', function () {\n  return clearInterval(interval);\n});\ngalleryTag.addEventListener('touchend', function () {\n  return clearInterval(interval);\n}); // Menu\n// ——————————————————\n\nvar nav = document.querySelector('nav');\nvar lists = document.querySelectorAll('nav ul li');\nvar active = document.querySelector('nav ul li.active');\nvar indicator = document.querySelector('span.indicator');\n\nvar getPosition = function getPosition(tag) {\n  if (tag) {\n    indicator.style.width = \"\".concat(tag.offsetWidth, \"px\");\n    indicator.style.left = \"\".concat(tag.offsetLeft, \"px\");\n  }\n};\n\nlists.forEach(function (list) {\n  list.addEventListener('mouseenter', function () {\n    getPosition(this);\n  });\n});\nnav.addEventListener('mouseleave', function () {\n  return getPosition(active);\n});\ngetPosition(active);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW5kZXguanM/OWE1NyJdLCJuYW1lcyI6WyJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRIZWlnaHQiLCJhY2NvcmRpb24iLCJjb250ZW50IiwiaW5uZXIiLCJjaGlsZHJlbiIsImhlaWdodCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9nZ2xlQWNjb3JkaW9uIiwidG9nZ2xlIiwidXBkYXRlSGVpZ2h0IiwiZWwiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaGVhZGVyIiwidGFyZ2V0IiwiY2xvc2VzdCIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJnYWxsZXJ5VGFnIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRJbWFnZSIsImludGVydmFsIiwibG9vcCIsImxlbmd0aCIsImZvckVhY2giLCJpbWFnZSIsInJlbW92ZSIsImFkZCIsInN0YXJ0TG9vcCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm5hdiIsImxpc3RzIiwiYWN0aXZlIiwiaW5kaWNhdG9yIiwiZ2V0UG9zaXRpb24iLCJ0YWciLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibGVmdCIsIm9mZnNldExlZnQiLCJsaXN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Q0FFQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxTQUFELEVBQVlDLE9BQVosRUFBd0I7QUFDeEMsTUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUNFLFFBQVIsQ0FBaUIsQ0FBakIsQ0FBZDtBQUNBLE1BQU1DLE1BQU0sR0FBR0osU0FBUyxDQUFDSyxTQUFWLENBQW9CQyxRQUFwQixDQUE2QixT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TXVDLFNBQVMsR0FBR3hDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBbEI7O0FBRUEsSUFBTXdDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNDLEdBQVQsRUFBYztBQUNoQyxNQUFJQSxHQUFKLEVBQVM7QUFDUEYsYUFBUyxDQUFDekIsS0FBVixDQUFnQjRCLEtBQWhCLGFBQTJCRCxHQUFHLENBQUNFLFdBQS9CO0FBQ0FKLGFBQVMsQ0FBQ3pCLEtBQVYsQ0FBZ0I4QixJQUFoQixhQUEwQkgsR0FBRyxDQUFDSSxVQUE5QjtBQUNEO0FBQ0YsQ0FMRDs7QUFPQVIsS0FBSyxDQUFDUixPQUFOLENBQWMsVUFBQWlCLElBQUksRUFBSTtBQUNwQkEsTUFBSSxDQUFDL0IsZ0JBQUwsQ0FBc0IsWUFBdEIsRUFBb0MsWUFBVztBQUM3Q3lCLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUZEO0FBR0QsQ0FKRDtBQU1BSixHQUFHLENBQUNyQixnQkFBSixDQUFxQixZQUFyQixFQUFtQztBQUFBLFNBQU15QixXQUFXLENBQUNGLE1BQUQsQ0FBakI7QUFBQSxDQUFuQztBQUNBRSxXQUFXLENBQUNGLE1BQUQsQ0FBWCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNwdXMgfSBmcm9tICdvcydcblxuLy8gQWNjb3JkaW9uc1xuLy8g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uLWNvbnRhaW5lcicpXG5cbmNvbnN0IGdldEhlaWdodCA9IChhY2NvcmRpb24sIGNvbnRlbnQpID0+IHtcbiAgY29uc3QgaW5uZXIgPSBjb250ZW50LmNoaWxkcmVuWzBdXG4gIGNvbnN0IGhlaWdodCA9IGFjY29yZGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSA/IDAgOiBpbm5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcblxuICByZXR1cm4gaGVpZ2h0XG59XG5cbmNvbnN0IHRvZ2dsZUFjY29yZGlvbiA9IGFjY29yZGlvbiA9PiB7XG4gIGFjY29yZGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJylcbn1cblxuY29uc3QgdXBkYXRlSGVpZ2h0ID0gKGVsLCBoZWlnaHQpID0+IHtcbiAgZWwuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxufVxuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZS50YXJnZXQuY2xvc2VzdCgnLmFjY29yZGlvbi1oZWFkZXInKVxuICBpZiAoIWhlYWRlcikgcmV0dXJuXG5cbiAgY29uc3QgYWNjb3JkaW9uID0gaGVhZGVyLnBhcmVudEVsZW1lbnRcbiAgY29uc3QgY29udGVudCA9IGhlYWRlci5uZXh0RWxlbWVudFNpYmxpbmdcbiAgY29uc3QgaGVpZ2h0ID0gZ2V0SGVpZ2h0KGFjY29yZGlvbiwgY29udGVudClcblxuICB1cGRhdGVIZWlnaHQoY29udGVudCwgaGVpZ2h0KVxuICB0b2dnbGVBY2NvcmRpb24oYWNjb3JkaW9uKVxufSlcblxuLy8gR2FsbGVyeVxuLy8g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG5jb25zdCBnYWxsZXJ5VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKVxuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcblxubGV0IGN1cnJlbnRJbWFnZSA9IDBcbmxldCBpbnRlcnZhbCA9IDBcblxuLy8gTG9vcFxuY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgY3VycmVudEltYWdlICs9IDFcbiAgaWYgKGN1cnJlbnRJbWFnZSA+IGltYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgY3VycmVudEltYWdlID0gMFxuICB9XG5cbiAgLy8gUmVtb3ZlIGNsYXNzXG4gIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJylcbiAgfSlcblxuICAvLyBBZGQgY2xhc3MgdG8gdGhlIGN1cnJlbnQgaW1hZ2VcbiAgaW1hZ2VzW2N1cnJlbnRJbWFnZV0uY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpXG59XG5cbi8vIERlZmluZSBpbnRlcnZhbFxuY29uc3Qgc3RhcnRMb29wID0gKCkgPT4ge1xuICBpbnRlcnZhbCA9IHNldEludGVydmFsKGxvb3AsIDE1MClcbn1cblxuLy8gU3RvcCB0aGUgbG9vcFxuZ2FsbGVyeVRhZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc3RhcnRMb29wKVxuZ2FsbGVyeVRhZy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3RhcnRMb29wKVxuXG4vLyBTdGFydCBhZ2FpblxuZ2FsbGVyeVRhZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCkpXG5nYWxsZXJ5VGFnLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCkpXG5cbi8vIE1lbnVcbi8vIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JylcbmNvbnN0IGxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IHVsIGxpJylcbmNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdiB1bCBsaS5hY3RpdmUnKVxuY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5pbmRpY2F0b3InKVxuXG5jb25zdCBnZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHRhZykge1xuICBpZiAodGFnKSB7XG4gICAgaW5kaWNhdG9yLnN0eWxlLndpZHRoID0gYCR7dGFnLm9mZnNldFdpZHRofXB4YFxuICAgIGluZGljYXRvci5zdHlsZS5sZWZ0ID0gYCR7dGFnLm9mZnNldExlZnR9cHhgXG4gIH1cbn1cblxubGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgZ2V0UG9zaXRpb24odGhpcylcbiAgfSlcbn0pXG5cbm5hdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gZ2V0UG9zaXRpb24oYWN0aXZlKSlcbmdldFBvc2l0aW9uKGFjdGl2ZSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/index.js\n");

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/index.js ./resources/css/index.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/thomaskim/Sites/polyform/resources/js/index.js */"./resources/js/index.js");
module.exports = __webpack_require__(/*! /Users/thomaskim/Sites/polyform/resources/css/index.css */"./resources/css/index.css");


/***/ })

/******/ });