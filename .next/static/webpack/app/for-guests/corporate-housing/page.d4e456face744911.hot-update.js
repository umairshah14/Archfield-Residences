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

/***/ "(app-pages-browser)/./src/components/faqs-section.jsx":
/*!*****************************************!*\
  !*** ./src/components/faqs-section.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useInView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useInView */ \"(app-pages-browser)/./src/hooks/useInView.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Disclosure_DisclosureButton_DisclosurePanel_headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Disclosure,DisclosureButton,DisclosurePanel!=!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDownIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDownIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ChevronDownIcon.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FAQSection = (param)=>{\n    let { data, className } = param;\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [ref, isInView] = (0,_hooks_useInView__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        threshold: 0.1\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_4__.twMerge)(classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"bg-white fill py-20 text-black\", className)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col  gap-12 transform transition-all duration-700 ease-in-out  \".concat(isInView ? \"opacity-100 translate-y-0\" : \"opacity-0 translate-y-10\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center lg:text-left  text-4xl sm:text-5xl \",\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\faqs-section.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    data.faqs.map((faq, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Disclosure_DisclosureButton_DisclosurePanel_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Disclosure, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Disclosure_DisclosureButton_DisclosurePanel_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.DisclosureButton, {\n                                        className: \"flex flex-row justify-between items-center w-full\",\n                                        children: [\n                                            faq.question,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDownIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                className: \"w-4\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\faqs-section.jsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\faqs-section.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Disclosure_DisclosureButton_DisclosurePanel_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.DisclosurePanel, {\n                                        className: \"text-gray-500\",\n                                        children: faq.answer\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\faqs-section.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\faqs-section.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\faqs-section.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\faqs-section.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\faqs-section.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\faqs-section.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FAQSection, \"Bb/R8gAurJ09DA3CyIGwEGFtABY=\", false, function() {\n    return [\n        _hooks_useInView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = FAQSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FAQSection);\nvar _c;\n$RefreshReg$(_c, \"FAQSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2ZhcXMtc2VjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTBDO0FBQ0Y7QUFDQztBQUNMO0FBS1Q7QUFDbUM7QUFFOUQsTUFBTVMsYUFBYTtRQUFDLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFOztJQUNyQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxDQUFDWSxLQUFLQyxTQUFTLEdBQUdmLDREQUFTQSxDQUFDO1FBQ2hDZ0IsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQTtZQUNDTixXQUFXUix1REFBT0EsQ0FDaEJDLGlEQUFVQSxDQUFDLGtDQUFrQ087c0JBRy9DLDRFQUFDTTtnQkFDQ0gsS0FBS0E7Z0JBQ0xILFdBQVcsa0pBRVYsT0FEQ0ksV0FBVyw4QkFBOEI7O2tDQUczQyw4REFBQ0c7d0JBQUdQLFdBQVU7a0NBQ1hELEtBQUtTLEtBQUs7Ozs7OztvQkFHWlQsS0FBS1UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0M7d0JBQ25CLHFCQUNFLDhEQUFDbEIsMkhBQVVBO3NDQUNULDRFQUFDWTtnQ0FBSU4sV0FBVTs7a0RBQ2IsOERBQUNMLGlJQUFnQkE7d0NBQUNLLFdBQVU7OzRDQUN6QlcsSUFBSUUsUUFBUTswREFDYiw4REFBQ2hCLHlHQUFlQTtnREFBQ0csV0FBVTs7Ozs7Ozs7Ozs7O2tEQUU3Qiw4REFBQ0osZ0lBQWVBO3dDQUFDSSxXQUFVO2tEQUN4QlcsSUFBSUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBS3JCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0dBM0NNaEI7O1FBR29CVCx3REFBU0E7OztLQUg3QlM7QUE2Q04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmFxcy1zZWN0aW9uLmpzeD9hMjM0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHVzZUluVmlldyBmcm9tIFwiQC9ob29rcy91c2VJblZpZXdcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHR3TWVyZ2UgfSBmcm9tIFwidGFpbHdpbmQtbWVyZ2VcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHtcclxuICBEaXNjbG9zdXJlLFxyXG4gIERpc2Nsb3N1cmVCdXR0b24sXHJcbiAgRGlzY2xvc3VyZVBhbmVsLFxyXG59IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XHJcblxyXG5jb25zdCBGQVFTZWN0aW9uID0gKHsgZGF0YSwgY2xhc3NOYW1lIH0pID0+IHtcclxuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbcmVmLCBpc0luVmlld10gPSB1c2VJblZpZXcoe1xyXG4gICAgdGhyZXNob2xkOiAwLjEsIC8vIFRyaWdnZXIgd2hlbiAxMCUgb2YgdGhlIGNvbXBvbmVudCBpcyB2aXNpYmxlXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXt0d01lcmdlKFxyXG4gICAgICAgICAgY2xhc3NOYW1lcyhcImJnLXdoaXRlIGZpbGwgcHktMjAgdGV4dC1ibGFja1wiLCBjbGFzc05hbWUpXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBtZDptYXgtdy1zY3JlZW4tbWQgbGc6bWF4LXctc2NyZWVuLWxnIHhsOm1heC13LXNjcmVlbi14bCBteC1hdXRvIGZsZXggZmxleC1jb2wgIGdhcC0xMiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0ICAke1xyXG4gICAgICAgICAgICBpc0luVmlldyA/IFwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiIDogXCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktMTBcIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOnRleHQtbGVmdCAgdGV4dC00eGwgc206dGV4dC01eGwgXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICB7ZGF0YS5mYXFzLm1hcCgoZmFxLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxEaXNjbG9zdXJlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgPERpc2Nsb3N1cmVCdXR0b24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmYXEucXVlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duSWNvbiBjbGFzc05hbWU9XCJ3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Rpc2Nsb3N1cmVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxEaXNjbG9zdXJlUGFuZWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmYXEuYW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICA8L0Rpc2Nsb3N1cmVQYW5lbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRGlzY2xvc3VyZT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGQVFTZWN0aW9uO1xyXG4iXSwibmFtZXMiOlsidXNlSW5WaWV3IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInR3TWVyZ2UiLCJjbGFzc05hbWVzIiwiRGlzY2xvc3VyZSIsIkRpc2Nsb3N1cmVCdXR0b24iLCJEaXNjbG9zdXJlUGFuZWwiLCJDaGV2cm9uRG93bkljb24iLCJGQVFTZWN0aW9uIiwiZGF0YSIsImNsYXNzTmFtZSIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsInJlZiIsImlzSW5WaWV3IiwidGhyZXNob2xkIiwiZGl2IiwiaDMiLCJ0aXRsZSIsImZhcXMiLCJtYXAiLCJmYXEiLCJpbmRleCIsInF1ZXN0aW9uIiwiYW5zd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/faqs-section.jsx\n"));

/***/ })

});