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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appSlice\": function() { return /* binding */ appSlice; },\n/* harmony export */   \"selectAuthState\": function() { return /* binding */ selectAuthState; },\n/* harmony export */   \"setAppState\": function() { return /* binding */ setAppState; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n\n\n\n\n// Initial state\nvar initialState = {\n    loaded: false\n};\n// Actual Slice\nvar appSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"app\",\n    initialState: initialState,\n    reducers: {\n        // Action to set the authentication status\n        setAppState: function setAppState(state, action) {\n            state.loaded = action.payload;\n        }\n    },\n    // Special reducer for hydrating the state. Special case for next-redux-wrapper\n    extraReducers: function(builder) {\n        builder.addCase(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE, function(state, action) {\n            return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state, action.payload.app);\n        }).addCase(\"LOAD_COMPLETE\", function(state, action) {\n            console.log(\"App loaded\");\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), {\n                loaded: action.payload\n            });\n        });\n    }\n});\nvar setAppState = appSlice.actions.setAppState;\nvar selectAuthState = function(state) {\n    return state.app;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (appSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZXMvYXBwLnNsaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkQ7QUFFaEI7QUFPN0MsZ0JBQWdCO0FBQ2hCLElBQU1FLFlBQVksR0FBUTtJQUN4QkMsTUFBTSxFQUFFLEtBQUs7Q0FDZDtBQUVELGVBQWU7QUFDUixJQUFNQyxRQUFRLEdBQUdKLDZEQUFXLENBQUM7SUFDbENLLElBQUksRUFBRSxLQUFLO0lBQ1hILFlBQVksRUFBWkEsWUFBWTtJQUNaSSxRQUFRLEVBQUU7UUFFUiwwQ0FBMEM7UUFDMUNDLFdBQVcsRUFBWEEsU0FBQUEsV0FBVyxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sRUFBRTtZQUN6QkQsS0FBSyxDQUFDTCxNQUFNLEdBQUdNLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQy9CO0tBQ0Y7SUFFQywrRUFBK0U7SUFDL0VDLGFBQWEsRUFBRSxTQUFDQyxPQUFPLEVBQUs7UUFDNUJBLE9BQU8sQ0FDSkMsT0FBTyxDQUFDWix1REFBTyxFQUFFLFNBQUNPLEtBQUssRUFBRUMsTUFBOEIsRUFBSztZQUMzRCxPQUFPLG1GQUNGRCxLQUFLLEVBQ0xDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSSxHQUFHLENBQ3RCO1NBQ0YsQ0FBQyxDQUFDRCxPQUFPLENBQUMsZUFBZSxFQUFDLFNBQUNMLEtBQUssRUFBQ0MsTUFBOEIsRUFBSztZQUNuRU0sT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyx3S0FDRlIsS0FBSztnQkFDUkwsTUFBTSxFQUFFTSxNQUFNLENBQUNDLE9BQU87Y0FDdkI7U0FDRixDQUFDO0tBQ0w7Q0FDRixDQUFDLENBQUM7QUFFSSxJQUFNLFdBQWEsR0FBS04sUUFBUSxDQUFDYSxPQUFPLENBQWhDVixXQUFXLENBQXNCO0FBRXpDLElBQU1XLGVBQWUsR0FBRyxTQUFDVixLQUFlO1dBQUtBLEtBQUssQ0FBQ00sR0FBRztDQUFBLENBQUM7QUFFOUQsK0RBQWVWLFFBQVEsQ0FBQ2UsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3NsaWNlcy9hcHAuc2xpY2UudHM/MWQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSxQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IEFwcFN0YXRlIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuXG4vLyBUeXBlIGZvciBvdXIgc3RhdGVcbmV4cG9ydCBpbnRlcmZhY2UgQXBwIHtcbiAgbG9hZGVkOiBib29sZWFuO1xufVxuXG4vLyBJbml0aWFsIHN0YXRlXG5jb25zdCBpbml0aWFsU3RhdGU6IEFwcCA9IHtcbiAgbG9hZGVkOiBmYWxzZSxcbn07XG5cbi8vIEFjdHVhbCBTbGljZVxuZXhwb3J0IGNvbnN0IGFwcFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImFwcFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG5cbiAgICAvLyBBY3Rpb24gdG8gc2V0IHRoZSBhdXRoZW50aWNhdGlvbiBzdGF0dXNcbiAgICBzZXRBcHBTdGF0ZShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5sb2FkZWQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICB9LFxuXG4gICAgLy8gU3BlY2lhbCByZWR1Y2VyIGZvciBoeWRyYXRpbmcgdGhlIHN0YXRlLiBTcGVjaWFsIGNhc2UgZm9yIG5leHQtcmVkdXgtd3JhcHBlclxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlclxuICAgICAgLmFkZENhc2UoSFlEUkFURSwgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248YW55LGFueT4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5hcHAsXG4gICAgICAgIH1cbiAgICAgIH0pLmFkZENhc2UoXCJMT0FEX0NPTVBMRVRFXCIsKHN0YXRlLGFjdGlvbjogUGF5bG9hZEFjdGlvbjxhbnksYW55PikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFwcCBsb2FkZWRcIik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgbG9hZGVkOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0QXBwU3RhdGUgfSA9IGFwcFNsaWNlLmFjdGlvbnM7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RBdXRoU3RhdGUgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PiBzdGF0ZS5hcHA7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiSFlEUkFURSIsImluaXRpYWxTdGF0ZSIsImxvYWRlZCIsImFwcFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0QXBwU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJhcHAiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9ucyIsInNlbGVjdEF1dGhTdGF0ZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/slices/app.slice.ts\n"));

/***/ })

});