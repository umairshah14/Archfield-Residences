"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/for-guests/corporate-housing/page",{

/***/ "(app-pages-browser)/./src/components/stacked-text-blocks.jsx":
/*!************************************************!*\
  !*** ./src/components/stacked-text-blocks.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useInView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useInView */ \"(app-pages-browser)/./src/hooks/useInView.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_Button_headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/button/button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst StackedTextBlocks = (param)=>{\n    let { data, className } = param;\n    _s();\n    const [ref, isInView] = (0,_hooks_useInView__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        threshold: 0.1\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.twMerge)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(\"bg-[#2B2C32]/95 fill py-20 text-white\", className)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: ref,\n                    className: \"px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 transform transition-all duration-700 ease-in-out  \".concat(isInView ? \"opacity-100 translate-y-0\" : \"opacity-0 translate-y-10\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-center lg:text-left lg:w-1/2 text-4xl sm:text-5xl \",\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-16 lg:w-1/2 \",\n                            children: data.blocks.map((block, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-6 lg:gap-12 items-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            src: block.imageSrc,\n                                            alt: \"White Star\",\n                                            width: 1,\n                                            height: 1,\n                                            className: \"w-16 lg:w-40\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col gap-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                    children: block.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: block.description\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                (data === null || data === void 0 ? void 0 : data.CTA) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    className: \"w-fit bg-black px-8 py-3 text-white rounded-md\",\n                    children: data === null || data === void 0 ? void 0 : data.CTA\n                }, void 0, false, {\n                    fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StackedTextBlocks, \"ojK7MdA6iKbpJmZUooifUG0YDGk=\", false, function() {\n    return [\n        _hooks_useInView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = StackedTextBlocks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StackedTextBlocks);\nvar _c;\n$RefreshReg$(_c, \"StackedTextBlocks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3N0YWNrZWQtdGV4dC1ibG9ja3MuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUwQztBQUNTO0FBQ3BCO0FBQ1U7QUFDTDtBQUNPO0FBRTNDLE1BQU1RLG9CQUFvQjtRQUFDLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFOztJQUM1QyxNQUFNLENBQUNDLEtBQUtDLFNBQVMsR0FBR1osNERBQVNBLENBQUM7UUFDaENhLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0E7WUFDQ0osV0FBV0wsdURBQU9BLENBQ2hCQyxpREFBVUEsQ0FBQyx5Q0FBeUNJOzs4QkFHdEQsOERBQUNJO29CQUNDSCxLQUFLQTtvQkFDTEQsV0FBVyw2SkFFVixPQURDRSxXQUFXLDhCQUE4Qjs7c0NBRzNDLDhEQUFDRzs0QkFBR0wsV0FBVTtzQ0FDWEQsS0FBS08sS0FBSzs7Ozs7O3NDQUViLDhEQUFDRjs0QkFBSUosV0FBVTtzQ0FDWkQsS0FBS1EsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ3ZCLDhEQUFDTjtvQ0FBZ0JKLFdBQVU7O3NEQUN6Qiw4REFBQ04sa0RBQUtBOzRDQUNKaUIsS0FBS0YsTUFBTUcsUUFBUTs0Q0FDbkJDLEtBQUk7NENBQ0pDLE9BQU87NENBQ1BDLFFBQVE7NENBQ1JmLFdBQVU7Ozs7OztzREFFWiw4REFBQ0k7NENBQUlKLFdBQVU7OzhEQUNiLDhEQUFDZ0I7OERBQUlQLE1BQU1ILEtBQUs7Ozs7Ozs4REFDaEIsOERBQUNXOzhEQUFHUixNQUFNUyxXQUFXOzs7Ozs7Ozs7Ozs7O21DQVZmUjs7Ozs7Ozs7Ozs7Ozs7OztnQkFnQmJYLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTW9CLEdBQUcsbUJBQ1IsOERBQUN0QixrRkFBTUE7b0JBQUNHLFdBQVU7OEJBQ2ZELGlCQUFBQSwyQkFBQUEsS0FBTW9CLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhCO0dBL0NNckI7O1FBQ29CUix3REFBU0E7OztLQUQ3QlE7QUFpRE4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zdGFja2VkLXRleHQtYmxvY2tzLmpzeD81OWQ0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHVzZUluVmlldyBmcm9tIFwiQC9ob29rcy91c2VJblZpZXdcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tIFwidGFpbHdpbmQtbWVyZ2VcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XHJcblxyXG5jb25zdCBTdGFja2VkVGV4dEJsb2NrcyA9ICh7IGRhdGEsIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgW3JlZiwgaXNJblZpZXddID0gdXNlSW5WaWV3KHtcclxuICAgIHRocmVzaG9sZDogMC4xLCAvLyBUcmlnZ2VyIHdoZW4gMTAlIG9mIHRoZSBjb21wb25lbnQgaXMgdmlzaWJsZVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17dHdNZXJnZShcclxuICAgICAgICAgIGNsYXNzTmFtZXMoXCJiZy1bIzJCMkMzMl0vOTUgZmlsbCBweS0yMCB0ZXh0LXdoaXRlXCIsIGNsYXNzTmFtZSlcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BweC00IG1kOm1heC13LXNjcmVlbi1tZCBsZzptYXgtdy1zY3JlZW4tbGcgeGw6bWF4LXctc2NyZWVuLXhsIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtMTIgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTcwMCBlYXNlLWluLW91dCAgJHtcclxuICAgICAgICAgICAgaXNJblZpZXcgPyBcIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTBcIiA6IFwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTEwXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgbGc6dy0xLzIgdGV4dC00eGwgc206dGV4dC01eGwgXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTYgbGc6dy0xLzIgXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLmJsb2Nrcy5tYXAoKGJsb2NrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBsZzpnYXAtMTIgaXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Jsb2NrLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJXaGl0ZSBTdGFyXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBsZzp3LTQwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg2PntibG9jay50aXRsZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8cD57YmxvY2suZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7ZGF0YT8uQ1RBICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZpdCBiZy1ibGFjayBweC04IHB5LTMgdGV4dC13aGl0ZSByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAge2RhdGE/LkNUQX1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFja2VkVGV4dEJsb2NrcztcclxuIl0sIm5hbWVzIjpbInVzZUluVmlldyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsInR3TWVyZ2UiLCJjbGFzc05hbWVzIiwiQnV0dG9uIiwiU3RhY2tlZFRleHRCbG9ja3MiLCJkYXRhIiwiY2xhc3NOYW1lIiwicmVmIiwiaXNJblZpZXciLCJ0aHJlc2hvbGQiLCJkaXYiLCJoMyIsInRpdGxlIiwiYmxvY2tzIiwibWFwIiwiYmxvY2siLCJpbmRleCIsInNyYyIsImltYWdlU3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoNiIsInAiLCJkZXNjcmlwdGlvbiIsIkNUQSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/stacked-text-blocks.jsx\n"));

/***/ })

});