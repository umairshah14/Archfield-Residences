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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useInView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useInView */ \"(app-pages-browser)/./src/hooks/useInView.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst StackedTextBlocks = (param)=>{\n    let { data } = param;\n    _s();\n    const [ref, isInView] = (0,_hooks_useInView__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        threshold: 0.1\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#2B2C32]/95 fill py-20 text-white \",\n            className: twMerge(classNames(\"flex flex-col lg:flex-row lg:gap-20 pb-10\", className)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: ref,\n                className: \"px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 transform transition-all duration-700 ease-in-out  \".concat(isInView ? \"opacity-100 translate-y-0\" : \"opacity-0 translate-y-10\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center lg:text-left lg:w-1/2 text-4xl sm:text-5xl \",\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-16 lg:w-1/2 \",\n                        children: data.blocks.map((block, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-6 lg:gap-12 items-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        src: block.imageSrc,\n                                        alt: \"White Star\",\n                                        width: 1,\n                                        height: 1,\n                                        className: \"w-16 lg:w-40\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col gap-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                children: block.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: block.description\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Personal Projects\\\\Archfield-Residences\\\\src\\\\components\\\\stacked-text-blocks.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StackedTextBlocks, \"ojK7MdA6iKbpJmZUooifUG0YDGk=\", false, function() {\n    return [\n        _hooks_useInView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = StackedTextBlocks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StackedTextBlocks); // \"use client\";\n // import useInView from \"@/hooks/useInView\";\n // import React from \"react\";\n // import WhiteStar from \"@/images/white-star.svg\";\n // import Image from \"next/image\";\n // const StackedTextBlocks = () => {\n //   const [ref, isInView] = useInView({\n //     threshold: 0.1, // Trigger when 10% of the component is visible\n //   });\n //   return (\n //     <div>\n //       <div className=\"bg-[#2B2C32]/95 fill py-20 text-white \">\n //         <div\n //           ref={ref}\n //           className={`px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 transform transition-all duration-700 ease-in-out  ${\n //             isInView ? \"opacity-100 translate-y-0\" : \"opacity-0 translate-y-10\"\n //           }`}\n //         >\n //           <h3 className=\"text-center lg:text-left lg:w-1/2 text-4xl sm:text-5xl \">\n //             WHAT WE OFFER\n //           </h3>\n //           <div className=\"flex flex-col gap-16 lg:w-1/2 \">\n //             <div className=\"flex gap-6 lg:gap-12 items-start\">\n //               <Image\n //                 src=\"images/white-star.svg\"\n //                 alt=\"White Star\"\n //                 width={1}\n //                 height={1}\n //                 className=\"w-10 lg:w-fit lg:h-fit\"\n //               />\n //               <div className=\"flex flex-col gap-4\">\n //                 <h6>STAFF & CORPORATE ACCOMMODATION</h6>\n //                 <p>\n //                   We specialise in providing accommodation suited to business\n //                   staff, contractors and working professionals. With this in\n //                   mind we aim to make sure that all our properties have every\n //                   necessary amenity needed to make your stay as comfortable as\n //                   possible\n //                 </p>\n //               </div>\n //             </div>\n //             <div className=\"flex gap-6 lg:gap-12 items-start\">\n //               <Image\n //                 src={WhiteStar}\n //                 alt=\"White Star\"\n //                 width={1}\n //                 height={1}\n //                 className=\"w-10 lg:w-fit lg:h-fit\"\n //               />\n //               <div className=\"flex flex-col gap-4\">\n //                 <h6>GUEST STAYS</h6>\n //                 <p>\n //                   Experience the epitome of comfort with Archfield Residences,\n //                   offering a home away from home that caters to both short and\n //                   mid-term stays. Whether you're seeking a stylish space to\n //                   work, play, or unwind, we've got you covered at one of our\n //                   serviced accommodations.\n //                 </p>\n //               </div>\n //             </div>\n //             <div className=\"flex gap-6 lg:gap-12 items-start\">\n //               <Image\n //                 src={WhiteStar}\n //                 alt=\"White Star\"\n //                 width={1}\n //                 height={1}\n //                 className=\"w-10 lg:w-fit lg:h-fit\"\n //               />\n //               <div className=\"flex flex-col gap-4\">\n //                 <h6>NATIONAL COVERAGE</h6>\n //                 <p>\n //                   We have a dedicated team that sources bespoke accommodation\n //                   for staff and guests across the entire UK. Whether you need a\n //                   1-bedroom flat or a 7-bedroom house, we have something for\n //                   everyone.\n //                 </p>\n //               </div>\n //             </div>\n //           </div>\n //         </div>\n //       </div>\n //     </div>\n //   );\n // };\n // export default StackedTextBlocks;\nvar _c;\n$RefreshReg$(_c, \"StackedTextBlocks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3N0YWNrZWQtdGV4dC1ibG9ja3MuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTBDO0FBQ1M7QUFDcEI7QUFFL0IsTUFBTUssb0JBQW9CO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUNqQyxNQUFNLENBQUNDLEtBQUtDLFNBQVMsR0FBR1IsNERBQVNBLENBQUM7UUFDaENTLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTtZQUNUQSxXQUFXQyxRQUNUQyxXQUFXLDZDQUE2Q0Y7c0JBRTlELDRFQUFDRDtnQkFDQ0gsS0FBS0E7Z0JBQ0xJLFdBQVcsNkpBRVYsT0FEQ0gsV0FBVyw4QkFBOEI7O2tDQUczQyw4REFBQ007d0JBQUdILFdBQVU7a0NBQ1hMLEtBQUtTLEtBQUs7Ozs7OztrQ0FFYiw4REFBQ0w7d0JBQUlDLFdBQVU7a0NBQ1pMLEtBQUtVLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUN2Qiw4REFBQ1Q7Z0NBQWdCQyxXQUFVOztrREFDekIsOERBQUNQLGtEQUFLQTt3Q0FDSmdCLEtBQUtGLE1BQU1HLFFBQVE7d0NBQ25CQyxLQUFJO3dDQUNKQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSYixXQUFVOzs7Ozs7a0RBRVosOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ2M7MERBQUlQLE1BQU1ILEtBQUs7Ozs7OzswREFDaEIsOERBQUNXOzBEQUFHUixNQUFNUyxXQUFXOzs7Ozs7Ozs7Ozs7OytCQVZmUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnhCO0dBekNNZDs7UUFDb0JMLHdEQUFTQTs7O0tBRDdCSztBQTJDTiwrREFBZUEsaUJBQWlCQSxFQUFDLENBRWpDLGdCQUFnQjtDQUVoQiw2Q0FBNkM7Q0FDN0MsNkJBQTZCO0NBQzdCLG1EQUFtRDtDQUNuRCxrQ0FBa0M7Q0FFbEMsb0NBQW9DO0NBQ3BDLHdDQUF3QztDQUN4QyxzRUFBc0U7Q0FDdEUsUUFBUTtDQUNSLGFBQWE7Q0FDYixZQUFZO0NBQ1osaUVBQWlFO0NBQ2pFLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIscUxBQXFMO0NBQ3JMLGtGQUFrRjtDQUNsRixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLHFGQUFxRjtDQUNyRiw0QkFBNEI7Q0FDNUIsa0JBQWtCO0NBQ2xCLDZEQUE2RDtDQUM3RCxpRUFBaUU7Q0FDakUsdUJBQXVCO0NBQ3ZCLDhDQUE4QztDQUM5QyxtQ0FBbUM7Q0FDbkMsNEJBQTRCO0NBQzVCLDZCQUE2QjtDQUM3QixxREFBcUQ7Q0FDckQsbUJBQW1CO0NBQ25CLHNEQUFzRDtDQUN0RCwyREFBMkQ7Q0FDM0Qsc0JBQXNCO0NBQ3RCLGdGQUFnRjtDQUNoRiwrRUFBK0U7Q0FDL0UsZ0ZBQWdGO0NBQ2hGLGlGQUFpRjtDQUNqRiw2QkFBNkI7Q0FDN0IsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsaUVBQWlFO0NBQ2pFLHVCQUF1QjtDQUN2QixrQ0FBa0M7Q0FDbEMsbUNBQW1DO0NBQ25DLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IscURBQXFEO0NBQ3JELG1CQUFtQjtDQUNuQixzREFBc0Q7Q0FDdEQsdUNBQXVDO0NBQ3ZDLHNCQUFzQjtDQUN0QixpRkFBaUY7Q0FDakYsaUZBQWlGO0NBQ2pGLDhFQUE4RTtDQUM5RSwrRUFBK0U7Q0FDL0UsNkNBQTZDO0NBQzdDLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLGlFQUFpRTtDQUNqRSx1QkFBdUI7Q0FDdkIsa0NBQWtDO0NBQ2xDLG1DQUFtQztDQUNuQyw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLHFEQUFxRDtDQUNyRCxtQkFBbUI7Q0FDbkIsc0RBQXNEO0NBQ3RELDZDQUE2QztDQUM3QyxzQkFBc0I7Q0FDdEIsZ0ZBQWdGO0NBQ2hGLGtGQUFrRjtDQUNsRiwrRUFBK0U7Q0FDL0UsOEJBQThCO0NBQzlCLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGFBQWE7Q0FDYixPQUFPO0NBQ1AsS0FBSztDQUVMLG9DQUFvQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zdGFja2VkLXRleHQtYmxvY2tzLmpzeD81OWQ0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHVzZUluVmlldyBmcm9tIFwiQC9ob29rcy91c2VJblZpZXdcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBTdGFja2VkVGV4dEJsb2NrcyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtyZWYsIGlzSW5WaWV3XSA9IHVzZUluVmlldyh7XHJcbiAgICB0aHJlc2hvbGQ6IDAuMSwgLy8gVHJpZ2dlciB3aGVuIDEwJSBvZiB0aGUgY29tcG9uZW50IGlzIHZpc2libGVcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMyQjJDMzJdLzk1IGZpbGwgcHktMjAgdGV4dC13aGl0ZSBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3R3TWVyZ2UoXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lcyhcImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGc6Z2FwLTIwIHBiLTEwXCIsIGNsYXNzTmFtZSlcclxuICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BweC00IG1kOm1heC13LXNjcmVlbi1tZCBsZzptYXgtdy1zY3JlZW4tbGcgeGw6bWF4LXctc2NyZWVuLXhsIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtMTIgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTcwMCBlYXNlLWluLW91dCAgJHtcclxuICAgICAgICAgICAgaXNJblZpZXcgPyBcIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTBcIiA6IFwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTEwXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgbGc6dy0xLzIgdGV4dC00eGwgc206dGV4dC01eGwgXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTYgbGc6dy0xLzIgXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLmJsb2Nrcy5tYXAoKGJsb2NrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBsZzpnYXAtMTIgaXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Jsb2NrLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJXaGl0ZSBTdGFyXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezF9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xNiBsZzp3LTQwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg2PntibG9jay50aXRsZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICA8cD57YmxvY2suZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YWNrZWRUZXh0QmxvY2tzO1xyXG5cclxuLy8gXCJ1c2UgY2xpZW50XCI7XHJcblxyXG4vLyBpbXBvcnQgdXNlSW5WaWV3IGZyb20gXCJAL2hvb2tzL3VzZUluVmlld1wiO1xyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBXaGl0ZVN0YXIgZnJvbSBcIkAvaW1hZ2VzL3doaXRlLXN0YXIuc3ZnXCI7XHJcbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuLy8gY29uc3QgU3RhY2tlZFRleHRCbG9ja3MgPSAoKSA9PiB7XHJcbi8vICAgY29uc3QgW3JlZiwgaXNJblZpZXddID0gdXNlSW5WaWV3KHtcclxuLy8gICAgIHRocmVzaG9sZDogMC4xLCAvLyBUcmlnZ2VyIHdoZW4gMTAlIG9mIHRoZSBjb21wb25lbnQgaXMgdmlzaWJsZVxyXG4vLyAgIH0pO1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMkIyQzMyXS85NSBmaWxsIHB5LTIwIHRleHQtd2hpdGUgXCI+XHJcbi8vICAgICAgICAgPGRpdlxyXG4vLyAgICAgICAgICAgcmVmPXtyZWZ9XHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IG1kOm1heC13LXNjcmVlbi1tZCBsZzptYXgtdy1zY3JlZW4tbGcgeGw6bWF4LXctc2NyZWVuLXhsIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtMTIgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTcwMCBlYXNlLWluLW91dCAgJHtcclxuLy8gICAgICAgICAgICAgaXNJblZpZXcgPyBcIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTBcIiA6IFwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTEwXCJcclxuLy8gICAgICAgICAgIH1gfVxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgbGc6dy0xLzIgdGV4dC00eGwgc206dGV4dC01eGwgXCI+XHJcbi8vICAgICAgICAgICAgIFdIQVQgV0UgT0ZGRVJcclxuLy8gICAgICAgICAgIDwvaDM+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTE2IGxnOnctMS8yIFwiPlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgbGc6Z2FwLTEyIGl0ZW1zLXN0YXJ0XCI+XHJcbi8vICAgICAgICAgICAgICAgPEltYWdlXHJcbi8vICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvd2hpdGUtc3Rhci5zdmdcIlxyXG4vLyAgICAgICAgICAgICAgICAgYWx0PVwiV2hpdGUgU3RhclwiXHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aD17MX1cclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodD17MX1cclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgbGc6dy1maXQgbGc6aC1maXRcIlxyXG4vLyAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XHJcbi8vICAgICAgICAgICAgICAgICA8aDY+U1RBRkYgJiBDT1JQT1JBVEUgQUNDT01NT0RBVElPTjwvaDY+XHJcbi8vICAgICAgICAgICAgICAgICA8cD5cclxuLy8gICAgICAgICAgICAgICAgICAgV2Ugc3BlY2lhbGlzZSBpbiBwcm92aWRpbmcgYWNjb21tb2RhdGlvbiBzdWl0ZWQgdG8gYnVzaW5lc3NcclxuLy8gICAgICAgICAgICAgICAgICAgc3RhZmYsIGNvbnRyYWN0b3JzIGFuZCB3b3JraW5nIHByb2Zlc3Npb25hbHMuIFdpdGggdGhpcyBpblxyXG4vLyAgICAgICAgICAgICAgICAgICBtaW5kIHdlIGFpbSB0byBtYWtlIHN1cmUgdGhhdCBhbGwgb3VyIHByb3BlcnRpZXMgaGF2ZSBldmVyeVxyXG4vLyAgICAgICAgICAgICAgICAgICBuZWNlc3NhcnkgYW1lbml0eSBuZWVkZWQgdG8gbWFrZSB5b3VyIHN0YXkgYXMgY29tZm9ydGFibGUgYXNcclxuLy8gICAgICAgICAgICAgICAgICAgcG9zc2libGVcclxuLy8gICAgICAgICAgICAgICAgIDwvcD5cclxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBsZzpnYXAtMTIgaXRlbXMtc3RhcnRcIj5cclxuLy8gICAgICAgICAgICAgICA8SW1hZ2VcclxuLy8gICAgICAgICAgICAgICAgIHNyYz17V2hpdGVTdGFyfVxyXG4vLyAgICAgICAgICAgICAgICAgYWx0PVwiV2hpdGUgU3RhclwiXHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aD17MX1cclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodD17MX1cclxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAgbGc6dy1maXQgbGc6aC1maXRcIlxyXG4vLyAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XHJcbi8vICAgICAgICAgICAgICAgICA8aDY+R1VFU1QgU1RBWVM8L2g2PlxyXG4vLyAgICAgICAgICAgICAgICAgPHA+XHJcbi8vICAgICAgICAgICAgICAgICAgIEV4cGVyaWVuY2UgdGhlIGVwaXRvbWUgb2YgY29tZm9ydCB3aXRoIEFyY2hmaWVsZCBSZXNpZGVuY2VzLFxyXG4vLyAgICAgICAgICAgICAgICAgICBvZmZlcmluZyBhIGhvbWUgYXdheSBmcm9tIGhvbWUgdGhhdCBjYXRlcnMgdG8gYm90aCBzaG9ydCBhbmRcclxuLy8gICAgICAgICAgICAgICAgICAgbWlkLXRlcm0gc3RheXMuIFdoZXRoZXIgeW91J3JlIHNlZWtpbmcgYSBzdHlsaXNoIHNwYWNlIHRvXHJcbi8vICAgICAgICAgICAgICAgICAgIHdvcmssIHBsYXksIG9yIHVud2luZCwgd2UndmUgZ290IHlvdSBjb3ZlcmVkIGF0IG9uZSBvZiBvdXJcclxuLy8gICAgICAgICAgICAgICAgICAgc2VydmljZWQgYWNjb21tb2RhdGlvbnMuXHJcbi8vICAgICAgICAgICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTYgbGc6Z2FwLTEyIGl0ZW1zLXN0YXJ0XCI+XHJcbi8vICAgICAgICAgICAgICAgPEltYWdlXHJcbi8vICAgICAgICAgICAgICAgICBzcmM9e1doaXRlU3Rhcn1cclxuLy8gICAgICAgICAgICAgICAgIGFsdD1cIldoaXRlIFN0YXJcIlxyXG4vLyAgICAgICAgICAgICAgICAgd2lkdGg9ezF9XHJcbi8vICAgICAgICAgICAgICAgICBoZWlnaHQ9ezF9XHJcbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGxnOnctZml0IGxnOmgtZml0XCJcclxuLy8gICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGg2Pk5BVElPTkFMIENPVkVSQUdFPC9oNj5cclxuLy8gICAgICAgICAgICAgICAgIDxwPlxyXG4vLyAgICAgICAgICAgICAgICAgICBXZSBoYXZlIGEgZGVkaWNhdGVkIHRlYW0gdGhhdCBzb3VyY2VzIGJlc3Bva2UgYWNjb21tb2RhdGlvblxyXG4vLyAgICAgICAgICAgICAgICAgICBmb3Igc3RhZmYgYW5kIGd1ZXN0cyBhY3Jvc3MgdGhlIGVudGlyZSBVSy4gV2hldGhlciB5b3UgbmVlZCBhXHJcbi8vICAgICAgICAgICAgICAgICAgIDEtYmVkcm9vbSBmbGF0IG9yIGEgNy1iZWRyb29tIGhvdXNlLCB3ZSBoYXZlIHNvbWV0aGluZyBmb3JcclxuLy8gICAgICAgICAgICAgICAgICAgZXZlcnlvbmUuXHJcbi8vICAgICAgICAgICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFN0YWNrZWRUZXh0QmxvY2tzO1xyXG4iXSwibmFtZXMiOlsidXNlSW5WaWV3IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiU3RhY2tlZFRleHRCbG9ja3MiLCJkYXRhIiwicmVmIiwiaXNJblZpZXciLCJ0aHJlc2hvbGQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0d01lcmdlIiwiY2xhc3NOYW1lcyIsImgzIiwidGl0bGUiLCJibG9ja3MiLCJtYXAiLCJibG9jayIsImluZGV4Iiwic3JjIiwiaW1hZ2VTcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImg2IiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/stacked-text-blocks.jsx\n"));

/***/ })

});