"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.tsx\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ \"./store/index.ts\");\n\n\n\n\n\n\n\nvar App = function MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/user/Documents/projects/nextjs-boilerplate/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"/Users/user/Documents/projects/nextjs-boilerplate/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/user/Documents/projects/nextjs-boilerplate/pages/_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = App;\nApp.getInitialProps = _store__WEBPACK_IMPORTED_MODULE_5__.wrapper.getInitialPageProps(function(store) {\n    return function(param) {\n        var pathname = param.pathname, req = param.req, res = param.res;\n        // For the initial page load, getInitialProps will run on the server only.getInitialProps will then run on the client when navigating to a different route via the next / link component or by using next / router.\n        store.dispatch({\n            type: \"LOAD_COMPLETE\",\n            payload: true\n        });\n        return {\n            pageProps: {\n                hello: true\n            }\n        };\n    };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = _store__WEBPACK_IMPORTED_MODULE_5__.wrapper.withRedux(App));\nvar _c, _c1;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE2QztBQUNmO0FBRVc7QUFDQTtBQUNOO0FBR25DLElBQU1JLEdBQUcsR0FBRyxTQUFTQyxLQUFLLENBQUMsS0FBa0MsRUFBRTtRQUFsQ0MsU0FBUyxHQUFYLEtBQWtDLENBQWhDQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBa0MsQ0FBckJBLFNBQVM7SUFFL0MscUJBQU87OzBCQUNQLDhEQUFDTiwwREFBTTs7OztvQkFBRzswQkFDViw4REFBQ0ssU0FBUyxxRkFBS0MsU0FBUzs7OztvQkFBSTswQkFDNUIsOERBQUNMLDBEQUFNOzs7O29CQUFHOztvQkFDUDtDQUNKO0FBUEtFLEtBQUFBLEdBQUc7QUFTVEEsR0FBRyxDQUFDSSxlQUFlLEdBQUdMLCtEQUEyQixDQUFDTyxTQUFBQSxLQUFLO1dBQUksZ0JBQTRCO1lBQXpCQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLEdBQUcsU0FBSEEsR0FBRztRQUM5RSxtTkFBbU47UUFFbk5ILEtBQUssQ0FBQ0ksUUFBUSxDQUFDO1lBQ2JDLElBQUksRUFBRSxlQUFlO1lBQ3JCQyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTFQsU0FBUyxFQUFFO2dCQUNUVSxLQUFLLEVBQUUsSUFBSTthQUNkO1NBQ0Q7S0FDRDtDQUFBLENBQUMsQ0FBQztBQUdILCtEQUFlZCxNQUFBQSxxREFBaUIsQ0FBQ0MsR0FBRyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vc3RvcmUnO1xuXG5cbmNvbnN0IEFwcCA9IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcblxuICByZXR1cm4gPD5cbiAgPEhlYWRlciAvPlxuICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDxGb290ZXIgLz5cbiAgPC8+XG59XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSB3cmFwcGVyLmdldEluaXRpYWxQYWdlUHJvcHMoc3RvcmUgPT4gKHsgcGF0aG5hbWUsIHJlcSwgcmVzIH0pID0+IHtcbiAgLy8gRm9yIHRoZSBpbml0aWFsIHBhZ2UgbG9hZCwgZ2V0SW5pdGlhbFByb3BzIHdpbGwgcnVuIG9uIHRoZSBzZXJ2ZXIgb25seS5nZXRJbml0aWFsUHJvcHMgd2lsbCB0aGVuIHJ1biBvbiB0aGUgY2xpZW50IHdoZW4gbmF2aWdhdGluZyB0byBhIGRpZmZlcmVudCByb3V0ZSB2aWEgdGhlIG5leHQgLyBsaW5rIGNvbXBvbmVudCBvciBieSB1c2luZyBuZXh0IC8gcm91dGVyLlxuXG4gIHN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiAnTE9BRF9DT01QTEVURScsXG4gICAgcGF5bG9hZDogdHJ1ZVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhZ2VQcm9wczoge1xuICAgICAgaGVsbG86IHRydWVcbiAgfVxuIH1cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJGb290ZXIiLCJ3cmFwcGVyIiwiQXBwIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUGFnZVByb3BzIiwic3RvcmUiLCJwYXRobmFtZSIsInJlcSIsInJlcyIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJoZWxsbyIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});