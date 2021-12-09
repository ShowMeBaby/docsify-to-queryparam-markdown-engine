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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ \"./src/plugin.js\");\n\r\n\r\nif (!window.$docsify) {\r\n  window.$docsify = {}\r\n}\r\n\r\nwindow.$docsify.plugins = (window.$docsify.plugins || []).concat(_plugin__WEBPACK_IMPORTED_MODULE_0__[\"install\"])\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/plugin.js":
/*!***********************!*\
  !*** ./src/plugin.js ***!
  \***********************/
/*! exports provided: install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\nfunction getMdFile(target) {\r\n  return Promise.resolve()\r\n    .then(() => fetch(target))\r\n    .then(response => {\r\n      if (!response.ok) {\r\n        throw new Error('HTTP error, status = ' + response.status)\r\n      }\r\n      return response.text()\r\n    })\r\n}\r\n\r\nfunction getElementsByClassName(classname) {\r\n  return Array.from(document.getElementsByClassName(classname))\r\n}\r\n\r\nfunction getElementById(id) {\r\n  return document.getElementById(id)\r\n}\r\n\r\nfunction getUrlFileName(url) {\r\n  const urlArr = url.split('?')[0].split('/')\r\n  return urlArr[urlArr.length - 1]\r\n}\r\n\r\nfunction toCustom(config, vm) {\r\n  if (vm.route.query.custom) {\r\n    let hideSidebar = false\r\n    config.hideClassName.forEach(function (classname) {\r\n      getElementsByClassName(classname).forEach(function (el) {\r\n        if (classname != 'content') {\r\n          el.style.display = 'none'\r\n          if (classname === 'sidebar') {\r\n            hideSidebar = true\r\n          }\r\n        }\r\n      })\r\n    })\r\n    if (hideSidebar) {\r\n      getElementsByClassName(['content']).forEach(function (el) {\r\n        el.style.left = '0px'\r\n      })\r\n    }\r\n  }\r\n}\r\n\r\nfunction install(hook, vm) {\r\n  const config = Object.assign(\r\n    {},\r\n    {\r\n      hideClassName: [\r\n        'cover',\r\n        'sidebar',\r\n        'sidebar-toggle',\r\n        'github-corner'\r\n      ]\r\n    },\r\n    vm.config.queryParamMarkdownEngine\r\n  )\r\n\r\n  hook.mounted(() => toCustom(config, vm))\r\n  hook.beforeEach((content, next) => {\r\n    const mdurl = vm.route.query.mdurl\r\n    if (mdurl) {\r\n      getMdFile(mdurl)\r\n        .then(data => next(data))\r\n        .catch(err => console.error(err))\r\n    } else {\r\n      next(content)\r\n    }\r\n  })\r\n  hook.doneEach(() => {\r\n    const mdurl = vm.route.query.mdurl\r\n    let oldtitle = document.title\r\n    oldtitle = oldtitle.endsWith('.md')\r\n      ? oldtitle.substring(0, oldtitle.length - 3)\r\n      : oldtitle\r\n\r\n    if (mdurl) {\r\n      const newtitle = getUrlFileName(mdurl)\r\n      // 若远程md链接存在则修改title名\r\n      document.title = newtitle\r\n      if (vm.config.autoHeader) {\r\n        // 若autoHeader为true,则修改对应标题为远程文件名\r\n        const el = getElementById(oldtitle + 'md')\r\n        if (el && el.children) {\r\n          const childrenTagA = el.children[0]\r\n          childrenTagA.setAttribute('data-id', newtitle)\r\n          childrenTagA.setAttribute('href', 'javascript:void(0);')\r\n          childrenTagA.innerHTML = `<span>${newtitle}</span>`\r\n          el.id = newtitle\r\n        }\r\n      }\r\n    }\r\n    // 执行隐藏页面元素操作\r\n    toCustom(config, vm)\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/plugin.js?");

/***/ })

/******/ });