"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/stacked-text-blocks.jsx":
/*!************************************************!*\
  !*** ./src/components/stacked-text-blocks.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useInView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useInView */ \"(app-pages-browser)/./src/hooks/useInView.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_Button_headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/button/button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst StackedTextBlocks = (param)=>{\n    let { data, className } = param;\n    _s();\n    const [ref, isInView] = (0,_hooks_useInView__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        threshold: 0.1\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_5__.twMerge)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(\"bg-[#2B2C32]/95 fill py-20 text-white\", className)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 transform transition-all duration-700 ease-in-out  \".concat(isInView ? \"opacity-100 translate-y-0\" : \"opacity-0 translate-y-10\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center lg:text-left lg:w-1/2 text-4xl sm:text-5xl \",\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg:w-1/2 flex flex-col gap-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col gap-16\",\n                                children: data.blocks.map((block, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-6 lg:gap-12 items-start\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                src: block.imageSrc,\n                                                alt: \"White Star\",\n                                                width: 1,\n                                                height: 1,\n                                                className: \"w-16 lg:w-40\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex flex-col gap-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        children: block.title\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: block.description\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined),\n                            (data === null || data === void 0 ? void 0 : data.CTA) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                className: \"w-fit bg-black px-8 py-3 text-white rounded-md mx\",\n                                children: data === null || data === void 0 ? void 0 : data.CTA\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StackedTextBlocks, \"ojK7MdA6iKbpJmZUooifUG0YDGk=\", false, function() {\n    return [\n        _hooks_useInView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = StackedTextBlocks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StackedTextBlocks);\nvar _c;\n$RefreshReg$(_c, \"StackedTextBlocks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3N0YWNrZWQtdGV4dC1ibG9ja3MuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUwQztBQUNTO0FBQ3BCO0FBQ1U7QUFDTDtBQUNPO0FBRTNDLE1BQU1RLG9CQUFvQjtRQUFDLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFOztJQUM1QyxNQUFNLENBQUNDLEtBQUtDLFNBQVMsR0FBR1osNERBQVNBLENBQUM7UUFDaENhLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0E7WUFDQ0osV0FBV0wsdURBQU9BLENBQ2hCQyxpREFBVUEsQ0FBQyx5Q0FBeUNJO3NCQUd0RCw0RUFBQ0k7Z0JBQ0NILEtBQUtBO2dCQUNMRCxXQUFXLDZKQUVWLE9BRENFLFdBQVcsOEJBQThCOztrQ0FHM0MsOERBQUNHO3dCQUFHTCxXQUFVO2tDQUNYRCxLQUFLTyxLQUFLOzs7Ozs7a0NBRWIsOERBQUNGO3dCQUFJSixXQUFVOzswQ0FDYiw4REFBQ0k7Z0NBQUlKLFdBQVU7MENBQ1pELEtBQUtRLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUN2Qiw4REFBQ047d0NBQWdCSixXQUFVOzswREFDekIsOERBQUNOLGtEQUFLQTtnREFDSmlCLEtBQUtGLE1BQU1HLFFBQVE7Z0RBQ25CQyxLQUFJO2dEQUNKQyxPQUFPO2dEQUNQQyxRQUFRO2dEQUNSZixXQUFVOzs7Ozs7MERBRVosOERBQUNJO2dEQUFJSixXQUFVOztrRUFDYiw4REFBQ2dCO2tFQUFJUCxNQUFNSCxLQUFLOzs7Ozs7a0VBQ2hCLDhEQUFDVztrRUFBR1IsTUFBTVMsV0FBVzs7Ozs7Ozs7Ozs7Ozt1Q0FWZlI7Ozs7Ozs7Ozs7NEJBZWJYLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTW9CLEdBQUcsbUJBQ1IsOERBQUN0QixrRkFBTUE7Z0NBQUNHLFdBQVU7MENBQ2ZELGlCQUFBQSwyQkFBQUEsS0FBTW9CLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUI7R0FqRE1yQjs7UUFDb0JSLHdEQUFTQTs7O0tBRDdCUTtBQW1ETiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3N0YWNrZWQtdGV4dC1ibG9ja3MuanN4PzU5ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgdXNlSW5WaWV3IGZyb20gXCJAL2hvb2tzL3VzZUluVmlld1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gXCJ0YWlsd2luZC1tZXJnZVwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IFN0YWNrZWRUZXh0QmxvY2tzID0gKHsgZGF0YSwgY2xhc3NOYW1lIH0pID0+IHtcclxuICBjb25zdCBbcmVmLCBpc0luVmlld10gPSB1c2VJblZpZXcoe1xyXG4gICAgdGhyZXNob2xkOiAwLjEsIC8vIFRyaWdnZXIgd2hlbiAxMCUgb2YgdGhlIGNvbXBvbmVudCBpcyB2aXNpYmxlXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXt0d01lcmdlKFxyXG4gICAgICAgICAgY2xhc3NOYW1lcyhcImJnLVsjMkIyQzMyXS85NSBmaWxsIHB5LTIwIHRleHQtd2hpdGVcIiwgY2xhc3NOYW1lKVxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgbWQ6bWF4LXctc2NyZWVuLW1kIGxnOm1heC13LXNjcmVlbi1sZyB4bDptYXgtdy1zY3JlZW4teGwgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC0xMiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0ICAke1xyXG4gICAgICAgICAgICBpc0luVmlldyA/IFwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiIDogXCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktMTBcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtbGVmdCBsZzp3LTEvMiB0ZXh0LTR4bCBzbTp0ZXh0LTV4bCBcIj5cclxuICAgICAgICAgICAge2RhdGEudGl0bGV9XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMiBmbGV4IGZsZXgtY29sIGdhcC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTE2XCI+XHJcbiAgICAgICAgICAgICAge2RhdGEuYmxvY2tzLm1hcCgoYmxvY2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgbGc6Z2FwLTEyIGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YmxvY2suaW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiV2hpdGUgU3RhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTYgbGc6dy00MFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj57YmxvY2sudGl0bGV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57YmxvY2suZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2RhdGE/LkNUQSAmJiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZpdCBiZy1ibGFjayBweC04IHB5LTMgdGV4dC13aGl0ZSByb3VuZGVkLW1kIG14XCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YT8uQ1RBfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YWNrZWRUZXh0QmxvY2tzO1xyXG4iXSwibmFtZXMiOlsidXNlSW5WaWV3IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwidHdNZXJnZSIsImNsYXNzTmFtZXMiLCJCdXR0b24iLCJTdGFja2VkVGV4dEJsb2NrcyIsImRhdGEiLCJjbGFzc05hbWUiLCJyZWYiLCJpc0luVmlldyIsInRocmVzaG9sZCIsImRpdiIsImgzIiwidGl0bGUiLCJibG9ja3MiLCJtYXAiLCJibG9jayIsImluZGV4Iiwic3JjIiwiaW1hZ2VTcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImg2IiwicCIsImRlc2NyaXB0aW9uIiwiQ1RBIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/stacked-text-blocks.jsx\n"));

/***/ })

});