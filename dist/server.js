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

/***/ "./src/server/server.dev.js":
/*!**********************************!*\
  !*** ./src/server/server.dev.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webpack.config.js */ \"./webpack.config.js\");\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(),\n  DIST_DIR = __dirname,\n  HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default().join(DIST_DIR, 'index.html'),\n  compiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()((_webpack_config_js__WEBPACK_IMPORTED_MODULE_5___default()));\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler, {\n  publicPath: (_webpack_config_js__WEBPACK_IMPORTED_MODULE_5___default().output.publicPath)\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler));\napp.get('/', function (req, res, next) {\n  compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {\n    if (err) {\n      return next(err);\n    }\n    res.set('content-type', 'text/html');\n    res.send(result);\n    res.end();\n  });\n});\nvar PORT = process.env.PORT || 8080;\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack://expack/./src/server/server.dev.js?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\nvar CopyWebpackPlugin = __webpack_require__(/*! copy-webpack-plugin */ \"copy-webpack-plugin\");\nvar FileIncludeWebpackPlugin = __webpack_require__(/*! file-include-webpack-plugin */ \"file-include-webpack-plugin\");\nvar mode = \"development\" || 0;\nvar devMode = mode === \"development\";\nvar target = devMode ? \"web\" : \"browserslist\";\nvar devtool = devMode ? \"source-map\" : undefined;\nvar PATH = devMode ? [\"@babel/polyfill\", \"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000\", \"./src/main.js\"] : [\"@babel/polyfill\", path.resolve(__dirname, 'src', \"main.js\")];\nmodule.exports = {\n  mode: mode,\n  target: target,\n  devtool: devtool,\n  // devServer: {\n  //     port: 8080,\n  //     open: true,\n  //     hot: true\n  // },\n  entry: {\n    main: PATH\n  },\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    publicPath: '/',\n    clean: true,\n    filename: '[name].js',\n    assetModuleFilename: 'assets/[name][ext]'\n  },\n  module: {\n    rules: [{\n      test: /\\.html$/i,\n      include: [path.resolve(__dirname, '.html')\n      // path.resolve(__dirname, 'html/header.html'),\n      ],\n\n      use: 'html-loader'\n    }, {\n      test: /\\.ejs$/,\n      use: {\n        loader: \"html-loader\"\n      }\n    }, {\n      test: /\\.s[ac]ss$/i,\n      use: [devMode ? \"style-loader\" : MiniCssExtractPlugin.loader, \"css-loader\", {\n        loader: \"postcss-loader\",\n        options: {\n          postcssOptions: {\n            plugins: [[\"postcss-preset-env\"]]\n          }\n        }\n      }, 'group-css-media-queries-loader', {\n        loader: 'resolve-url-loader'\n      }, {\n        loader: 'sass-loader',\n        options: {\n          sourceMap: true\n        }\n      }]\n    }, {\n      test: /\\.m?js$/,\n      exclude: /(node_modules|bower_components)/,\n      use: {\n        loader: 'babel-loader',\n        options: {\n          presets: ['@babel/preset-env']\n        }\n      }\n    }, {\n      test: /\\.woff2?$/i,\n      type: 'asset/resource',\n      generator: {\n        filename: 'fonts/[name][ext]'\n      }\n    }, {\n      test: /\\.(jpe?g|png|webp|gif|svg)$/i,\n      use: devMode ? [] : [{\n        loader: 'image-webpack-loader',\n        options: {\n          mozjpeg: {\n            progressive: true\n          },\n          optipng: {\n            enabled: false\n          },\n          pngquant: {\n            quality: [0.65, 0.9],\n            speed: 4\n          },\n          gifsicle: {\n            interlaced: false\n          },\n          webp: {\n            quality: 75\n          }\n        }\n      }],\n      type: 'asset/resource',\n      generator: {\n        filename: 'img/[name][ext]'\n      }\n    }]\n  },\n  plugins: [new HtmlWebpackPlugin({\n    title: 'MAIN',\n    template: './src/html/index.html',\n    filename: \"./index.html\",\n    excludeChunks: ['server']\n  }), new HtmlWebpackPlugin({\n    title: 'ABOUT',\n    template: './src/html/pages/about.html',\n    filename: \"./about.html\",\n    excludeChunks: ['server']\n  }), new MiniCssExtractPlugin({\n    filename: \"[name].css\",\n    chunkFilename: \"[id].css\"\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()\n  // new CopyWebpackPlugin({\n  //     patterns: [\n  //         { from: \"src/html\", to: \"views\" }\n  //     ]\n  // })\n  ]\n};\n\n//# sourceURL=webpack://expack/./webpack.config.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/polyfill");

/***/ }),

/***/ "copy-webpack-plugin":
/*!**************************************!*\
  !*** external "copy-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("copy-webpack-plugin");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "file-include-webpack-plugin":
/*!**********************************************!*\
  !*** external "file-include-webpack-plugin" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("file-include-webpack-plugin");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("@babel/polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.dev.js");
/******/ 	
/******/ })()
;