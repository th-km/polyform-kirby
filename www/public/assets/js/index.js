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
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Accordions\n// ——————————————————\nvar container = document.querySelector('.services');\n\nvar getHeight = function getHeight(accordion, content) {\n  var inner = content.children[0];\n  var height = accordion.classList.contains('js-is-open') ? 0 : inner.getBoundingClientRect().height;\n  return height;\n};\n\nvar toggleAccordion = function toggleAccordion(accordion) {\n  accordion.classList.toggle('js-is-open');\n};\n\nvar updateHeight = function updateHeight(element, height) {\n  element.style.height = \"\".concat(height, \"px\");\n};\n\ncontainer.addEventListener('click', function (e) {\n  var header = e.target.closest('.accordion__header');\n  if (!header) return;\n  var accordion = header.parentElement;\n  var content = header.nextElementSibling;\n  var height = getHeight(accordion, content);\n  updateHeight(content, height);\n  toggleAccordion(accordion);\n}); // Slides\n// ——————————————————\n\nvar heroTag = document.querySelector('.hero');\nvar images = document.querySelectorAll('img');\nvar currentImage = 0;\nvar interval = 0; // Loop\n\nvar loop = function loop() {\n  currentImage += 1;\n\n  if (currentImage > images.length - 1) {\n    currentImage = 0;\n  } // Remove class\n\n\n  images.forEach(function (image) {\n    image.classList.remove('js-is-visible');\n  }); // Add class to the current image\n\n  images[currentImage].classList.add('js-is-visible');\n}; // Define interval\n\n\nvar startLoop = function startLoop() {\n  interval = setInterval(loop, 150);\n}; // Stop the loop\n\n\nheroTag.addEventListener('mouseenter', function () {\n  startLoop();\n}); // Start again\n\nheroTag.addEventListener('mouseleave', function () {\n  clearInterval(interval);\n}); // Mobile touch\n\nheroTag.addEventListener('touchstart', function () {\n  startLoop();\n});\nheroTag.addEventListener('touchend', function () {\n  clearInterval(interval);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaW5kZXguanM/OWE1NyJdLCJuYW1lcyI6WyJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRIZWlnaHQiLCJhY2NvcmRpb24iLCJjb250ZW50IiwiaW5uZXIiLCJjaGlsZHJlbiIsImhlaWdodCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9nZ2xlQWNjb3JkaW9uIiwidG9nZ2xlIiwidXBkYXRlSGVpZ2h0IiwiZWxlbWVudCIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoZWFkZXIiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsImhlcm9UYWciLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudEltYWdlIiwiaW50ZXJ2YWwiLCJsb29wIiwibGVuZ3RoIiwiZm9yRWFjaCIsImltYWdlIiwicmVtb3ZlIiwiYWRkIiwic3RhcnRMb29wIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBbEI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEVBQXdCO0FBQ3hDLE1BQU1DLEtBQUssR0FBR0QsT0FBTyxDQUFDRSxRQUFSLENBQWlCLENBQWpCLENBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLFNBQVMsQ0FBQ0ssU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsWUFBN0IsSUFDWCxDQURXLEdBRVhKLEtBQUssQ0FBQ0sscUJBQU4sR0FBOEJILE1BRmxDO0FBSUEsU0FBT0EsTUFBUDtBQUNELENBUEQ7O0FBU0EsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBUixTQUFTLEVBQUk7QUFDbkNBLFdBQVMsQ0FBQ0ssU0FBVixDQUFvQkksTUFBcEIsQ0FBMkIsWUFBM0I7QUFDRCxDQUZEOztBQUlBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLE9BQUQsRUFBVVAsTUFBVixFQUFxQjtBQUN4Q08sU0FBTyxDQUFDQyxLQUFSLENBQWNSLE1BQWQsYUFBMEJBLE1BQTFCO0FBQ0QsQ0FGRDs7QUFJQVIsU0FBUyxDQUFDaUIsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQUMsQ0FBQyxFQUFJO0FBQ3ZDLE1BQU1DLE1BQU0sR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsb0JBQWpCLENBQWY7QUFDQSxNQUFJLENBQUNGLE1BQUwsRUFBYTtBQUViLE1BQU1mLFNBQVMsR0FBR2UsTUFBTSxDQUFDRyxhQUF6QjtBQUNBLE1BQU1qQixPQUFPLEdBQUdjLE1BQU0sQ0FBQ0ksa0JBQXZCO0FBQ0EsTUFBTWYsTUFBTSxHQUFHTCxTQUFTLENBQUNDLFNBQUQsRUFBWUMsT0FBWixDQUF4QjtBQUVBUyxjQUFZLENBQUNULE9BQUQsRUFBVUcsTUFBVixDQUFaO0FBQ0FJLGlCQUFlLENBQUNSLFNBQUQsQ0FBZjtBQUNELENBVkQsRSxDQVlBO0FBQ0E7O0FBQ0EsSUFBTW9CLE9BQU8sR0FBR3ZCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFoQjtBQUNBLElBQU11QixNQUFNLEdBQUd4QixRQUFRLENBQUN5QixnQkFBVCxDQUEwQixLQUExQixDQUFmO0FBRUEsSUFBSUMsWUFBWSxHQUFHLENBQW5CO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLENBQWYsQyxDQUVBOztBQUNBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakJGLGNBQVksSUFBSSxDQUFoQjs7QUFDQSxNQUFJQSxZQUFZLEdBQUdGLE1BQU0sQ0FBQ0ssTUFBUCxHQUFnQixDQUFuQyxFQUFzQztBQUNwQ0gsZ0JBQVksR0FBRyxDQUFmO0FBQ0QsR0FKZ0IsQ0FNakI7OztBQUNBRixRQUFNLENBQUNNLE9BQVAsQ0FBZSxVQUFBQyxLQUFLLEVBQUk7QUFDdEJBLFNBQUssQ0FBQ3ZCLFNBQU4sQ0FBZ0J3QixNQUFoQixDQUF1QixlQUF2QjtBQUNELEdBRkQsRUFQaUIsQ0FXakI7O0FBQ0FSLFFBQU0sQ0FBQ0UsWUFBRCxDQUFOLENBQXFCbEIsU0FBckIsQ0FBK0J5QixHQUEvQixDQUFtQyxlQUFuQztBQUNELENBYkQsQyxDQWVBOzs7QUFDQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCUCxVQUFRLEdBQUdRLFdBQVcsQ0FBQ1AsSUFBRCxFQUFPLEdBQVAsQ0FBdEI7QUFDRCxDQUZELEMsQ0FJQTs7O0FBQ0FMLE9BQU8sQ0FBQ1AsZ0JBQVIsQ0FBeUIsWUFBekIsRUFBdUMsWUFBTTtBQUMzQ2tCLFdBQVM7QUFDVixDQUZELEUsQ0FJQTs7QUFDQVgsT0FBTyxDQUFDUCxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxZQUFNO0FBQzNDb0IsZUFBYSxDQUFDVCxRQUFELENBQWI7QUFDRCxDQUZELEUsQ0FJQTs7QUFDQUosT0FBTyxDQUFDUCxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxZQUFNO0FBQzNDa0IsV0FBUztBQUNWLENBRkQ7QUFJQVgsT0FBTyxDQUFDUCxnQkFBUixDQUF5QixVQUF6QixFQUFxQyxZQUFNO0FBQ3pDb0IsZUFBYSxDQUFDVCxRQUFELENBQWI7QUFDRCxDQUZEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWNjb3JkaW9uc1xuLy8g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXMnKVxuXG5jb25zdCBnZXRIZWlnaHQgPSAoYWNjb3JkaW9uLCBjb250ZW50KSA9PiB7XG4gIGNvbnN0IGlubmVyID0gY29udGVudC5jaGlsZHJlblswXVxuICBjb25zdCBoZWlnaHQgPSBhY2NvcmRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1pcy1vcGVuJylcbiAgICA/IDBcbiAgICA6IGlubmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXG4gIHJldHVybiBoZWlnaHRcbn1cblxuY29uc3QgdG9nZ2xlQWNjb3JkaW9uID0gYWNjb3JkaW9uID0+IHtcbiAgYWNjb3JkaW9uLmNsYXNzTGlzdC50b2dnbGUoJ2pzLWlzLW9wZW4nKVxufVxuXG5jb25zdCB1cGRhdGVIZWlnaHQgPSAoZWxlbWVudCwgaGVpZ2h0KSA9PiB7XG4gIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxufVxuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZS50YXJnZXQuY2xvc2VzdCgnLmFjY29yZGlvbl9faGVhZGVyJylcbiAgaWYgKCFoZWFkZXIpIHJldHVyblxuXG4gIGNvbnN0IGFjY29yZGlvbiA9IGhlYWRlci5wYXJlbnRFbGVtZW50XG4gIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nXG4gIGNvbnN0IGhlaWdodCA9IGdldEhlaWdodChhY2NvcmRpb24sIGNvbnRlbnQpXG5cbiAgdXBkYXRlSGVpZ2h0KGNvbnRlbnQsIGhlaWdodClcbiAgdG9nZ2xlQWNjb3JkaW9uKGFjY29yZGlvbilcbn0pXG5cbi8vIFNsaWRlc1xuLy8g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG5jb25zdCBoZXJvVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKVxuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcblxubGV0IGN1cnJlbnRJbWFnZSA9IDBcbmxldCBpbnRlcnZhbCA9IDBcblxuLy8gTG9vcFxuY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgY3VycmVudEltYWdlICs9IDFcbiAgaWYgKGN1cnJlbnRJbWFnZSA+IGltYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgY3VycmVudEltYWdlID0gMFxuICB9XG5cbiAgLy8gUmVtb3ZlIGNsYXNzXG4gIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdqcy1pcy12aXNpYmxlJylcbiAgfSlcblxuICAvLyBBZGQgY2xhc3MgdG8gdGhlIGN1cnJlbnQgaW1hZ2VcbiAgaW1hZ2VzW2N1cnJlbnRJbWFnZV0uY2xhc3NMaXN0LmFkZCgnanMtaXMtdmlzaWJsZScpXG59XG5cbi8vIERlZmluZSBpbnRlcnZhbFxuY29uc3Qgc3RhcnRMb29wID0gKCkgPT4ge1xuICBpbnRlcnZhbCA9IHNldEludGVydmFsKGxvb3AsIDE1MClcbn1cblxuLy8gU3RvcCB0aGUgbG9vcFxuaGVyb1RhZy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICBzdGFydExvb3AoKVxufSlcblxuLy8gU3RhcnQgYWdhaW5cbmhlcm9UYWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbn0pXG5cbi8vIE1vYmlsZSB0b3VjaFxuaGVyb1RhZy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICBzdGFydExvb3AoKVxufSlcblxuaGVyb1RhZy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/index.js\n");

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