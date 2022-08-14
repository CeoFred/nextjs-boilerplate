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

/***/ "./store/slices/app.slice.ts":
/*!***********************************!*\
  !*** ./store/slices/app.slice.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appSlice\": function() { return /* binding */ appSlice; },\n/* harmony export */   \"selectAuthState\": function() { return /* binding */ selectAuthState; },\n/* harmony export */   \"setAppState\": function() { return /* binding */ setAppState; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n\n\n\n// Initial state\nvar initialState = {\n    loaded: false\n};\n// Actual Slice\nvar appSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"app\",\n    initialState: initialState,\n    reducers: {\n        // Action to set the authentication status\n        setAppState: function setAppState(state, action) {\n            state.loaded = action.payload;\n        }\n    },\n    // Special reducer for hydrating the state. Special case for next-redux-wrapper\n    extraReducers: function(builder) {\n        builder.addCase(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE, function(state, action) {\n            return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state, action.payload.app);\n        }).addCase;\n    }\n});\nvar setAppState = appSlice.actions.setAppState;\nvar selectAuthState = function(state) {\n    return state.app;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (appSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZXMvYXBwLnNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTZEO0FBRWhCO0FBTzdDLGdCQUFnQjtBQUNoQixJQUFNRSxZQUFZLEdBQVE7SUFDeEJDLE1BQU0sRUFBRSxLQUFLO0NBQ2Q7QUFFRCxlQUFlO0FBQ1IsSUFBTUMsUUFBUSxHQUFHSiw2REFBVyxDQUFDO0lBQ2xDSyxJQUFJLEVBQUUsS0FBSztJQUNYSCxZQUFZLEVBQVpBLFlBQVk7SUFDWkksUUFBUSxFQUFFO1FBRVIsMENBQTBDO1FBQzFDQyxXQUFXLEVBQVhBLFNBQUFBLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUU7WUFDekJELEtBQUssQ0FBQ0wsTUFBTSxHQUFHTSxNQUFNLENBQUNDLE9BQU8sQ0FBQztTQUMvQjtLQUNGO0lBRUMsK0VBQStFO0lBQy9FQyxhQUFhLEVBQUUsU0FBQ0MsT0FBTyxFQUFLO1FBQzVCQSxPQUFPLENBQ0pDLE9BQU8sQ0FBQ1osdURBQU8sRUFBRSxTQUFDTyxLQUFLLEVBQUVDLE1BQThCLEVBQUs7WUFDM0QsT0FBTyxtRkFDRkQsS0FBSyxFQUNMQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0ksR0FBRyxDQUN0QjtTQUNGLENBQUMsQ0FBQ0QsT0FBTztLQUNiO0NBQ0YsQ0FBQyxDQUFDO0FBRUksSUFBTSxXQUFhLEdBQUtULFFBQVEsQ0FBQ1csT0FBTyxDQUFoQ1IsV0FBVyxDQUFzQjtBQUV6QyxJQUFNUyxlQUFlLEdBQUcsU0FBQ1IsS0FBZTtXQUFLQSxLQUFLLENBQUNNLEdBQUc7Q0FBQSxDQUFDO0FBRTlELCtEQUFlVixRQUFRLENBQUNhLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9zbGljZXMvYXBwLnNsaWNlLnRzPzFkNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcblxuLy8gVHlwZSBmb3Igb3VyIHN0YXRlXG5leHBvcnQgaW50ZXJmYWNlIEFwcCB7XG4gIGxvYWRlZDogYm9vbGVhbjtcbn1cblxuLy8gSW5pdGlhbCBzdGF0ZVxuY29uc3QgaW5pdGlhbFN0YXRlOiBBcHAgPSB7XG4gIGxvYWRlZDogZmFsc2UsXG59O1xuXG4vLyBBY3R1YWwgU2xpY2VcbmV4cG9ydCBjb25zdCBhcHBTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJhcHBcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuXG4gICAgLy8gQWN0aW9uIHRvIHNldCB0aGUgYXV0aGVudGljYXRpb24gc3RhdHVzXG4gICAgc2V0QXBwU3RhdGUoc3RhdGUsIGFjdGlvbikge1xuICAgICAgc3RhdGUubG9hZGVkID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcblxuICAgIC8vIFNwZWNpYWwgcmVkdWNlciBmb3IgaHlkcmF0aW5nIHRoZSBzdGF0ZS4gU3BlY2lhbCBjYXNlIGZvciBuZXh0LXJlZHV4LXdyYXBwZXJcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDYXNlKEhZRFJBVEUsIChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGFueSxhbnk+KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQuYXBwLFxuICAgICAgICB9XG4gICAgICB9KS5hZGRDYXNlXG4gIH1cbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRBcHBTdGF0ZSB9ID0gYXBwU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEF1dGhTdGF0ZSA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmFwcDtcblxuZXhwb3J0IGRlZmF1bHQgYXBwU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJIWURSQVRFIiwiaW5pdGlhbFN0YXRlIiwibG9hZGVkIiwiYXBwU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRBcHBTdGF0ZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsImFwcCIsImFjdGlvbnMiLCJzZWxlY3RBdXRoU3RhdGUiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/slices/app.slice.ts\n"));

/***/ })

});