"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(protected)/course/[id]/page",{

/***/ "(app-pages-browser)/./src/app/components/topic.tsx":
/*!**************************************!*\
  !*** ./src/app/components/topic.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Topic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaChevronDown_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronDown!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Topic(param) {\n    let { id, name, description } = param;\n    _s();\n    const [accordionOpen, setAccordionOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleAccordionChange = ()=>{\n        setAccordionOpen(!accordionOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative topic-name bg-white rounded-lg p-4 rounded-e-none rounded-s-none border-dashed border-b-slate-400 \".concat(accordionOpen ? \"border-b-2\" : \"border-b-0\", \" \"),\n                onClick: toggleAccordionChange,\n                children: [\n                    name,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-10 absolute top-2/4 -translate-y-2/4 right-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronDown_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaChevronDown, {\n                            className: \"transition-all \".concat(accordionOpen ? \"rotate-180\" : \"rotate-0\")\n                        }, void 0, false, {\n                            fileName: \"/home/nefertem/Documents/projects/work/technical-test/etap-test-case/frontend/src/app/components/topic.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nefertem/Documents/projects/work/technical-test/etap-test-case/frontend/src/app/components/topic.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nefertem/Documents/projects/work/technical-test/etap-test-case/frontend/src/app/components/topic.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"topic-name bg-white rounded-lg transition-all \".concat(accordionOpen ? \"h-auto p-4\" : \"h-0 p-0 overflow-hidden\"),\n                children: [\n                    description,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                            href: \"/course/topic/\" + id,\n                            type: \"button\",\n                            className: \"px-5 py-2 text-white rounded-md bg-primary\",\n                            children: \"Start \"\n                        }, void 0, false, {\n                            fileName: \"/home/nefertem/Documents/projects/work/technical-test/etap-test-case/frontend/src/app/components/topic.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/nefertem/Documents/projects/work/technical-test/etap-test-case/frontend/src/app/components/topic.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nefertem/Documents/projects/work/technical-test/etap-test-case/frontend/src/app/components/topic.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nefertem/Documents/projects/work/technical-test/etap-test-case/frontend/src/app/components/topic.tsx\",\n        lineNumber: 10,\n        columnNumber: 12\n    }, this);\n}\n_s(Topic, \"LlHvkXQQxbe1vwIYCEEolgOhLpw=\");\n_c = Topic;\nvar _c;\n$RefreshReg$(_c, \"Topic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy90b3BpYy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNhO0FBQy9CLFNBQVNFLE1BQU0sS0FBaUM7UUFBakMsRUFBRUMsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBVSxHQUFqQzs7SUFDMUIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkQsTUFBTVEsd0JBQXdCO1FBQzFCRCxpQkFBaUIsQ0FBQ0Q7SUFDdEI7SUFFQSxxQkFBTyw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2xCLDhEQUFDRDtnQkFBSUMsV0FBVyw4R0FBMEosT0FBNUNKLGdCQUFnQixlQUFlLGNBQWE7Z0JBQUlLLFNBQVNIOztvQkFDbExKO2tDQUVELDhEQUFDSzt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ1QsOEZBQWFBOzRCQUFDUyxXQUFXLGtCQUE0RCxPQUExQ0osZ0JBQWdCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUduRiw4REFBQ0c7Z0JBQUlDLFdBQVcsaURBQTBHLE9BQXpESixnQkFBZ0IsZUFBZTs7b0JBQzNGRDtrQ0FFRCw4REFBQ0k7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNFOzRCQUFLQyxNQUFNLG1CQUFtQlY7NEJBQUlXLE1BQUs7NEJBQVNKLFdBQVU7c0NBQTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4SDtHQXZCd0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy90b3BpYy50c3g/ZTMzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZhQ2hldnJvbkRvd24gfSBmcm9tICdyZWFjdC1pY29ucy9mYSdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcGljKHsgaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCB9OiB0b3BpYykge1xuICAgIGNvbnN0IFthY2NvcmRpb25PcGVuLCBzZXRBY2NvcmRpb25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0b2dnbGVBY2NvcmRpb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIHNldEFjY29yZGlvbk9wZW4oIWFjY29yZGlvbk9wZW4pXG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIHRvcGljLW5hbWUgYmctd2hpdGUgcm91bmRlZC1sZyBwLTQgcm91bmRlZC1lLW5vbmUgcm91bmRlZC1zLW5vbmUgYm9yZGVyLWRhc2hlZCBib3JkZXItYi1zbGF0ZS00MDAgJHthY2NvcmRpb25PcGVuID8gJ2JvcmRlci1iLTInIDogJ2JvcmRlci1iLTAnfSBgfSBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb25DaGFuZ2V9PlxuICAgICAgICAgICAge25hbWV9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBhYnNvbHV0ZSB0b3AtMi80IC10cmFuc2xhdGUteS0yLzQgcmlnaHQtMlwiPlxuICAgICAgICAgICAgICAgIDxGYUNoZXZyb25Eb3duIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tYWxsICR7YWNjb3JkaW9uT3BlbiA/ICdyb3RhdGUtMTgwJyA6ICdyb3RhdGUtMCd9YH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b3BpYy1uYW1lIGJnLXdoaXRlIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgJHthY2NvcmRpb25PcGVuID8gJ2gtYXV0byBwLTQnIDogJ2gtMCBwLTAgb3ZlcmZsb3ctaGlkZGVuJ31gfT5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG10LTRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2NvdXJzZS90b3BpYy8nICsgaWR9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJweC01IHB5LTIgdGV4dC13aGl0ZSByb3VuZGVkLW1kIGJnLXByaW1hcnlcIj5TdGFydCA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJGYUNoZXZyb25Eb3duIiwiVG9waWMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImFjY29yZGlvbk9wZW4iLCJzZXRBY2NvcmRpb25PcGVuIiwidG9nZ2xlQWNjb3JkaW9uQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsIkxpbmsiLCJocmVmIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/topic.tsx\n"));

/***/ })

});