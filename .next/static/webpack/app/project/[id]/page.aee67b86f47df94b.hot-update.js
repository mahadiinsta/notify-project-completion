"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/project/[id]/page",{

/***/ "(app-pages-browser)/./src/app/project/[id]/page.jsx":
/*!***************************************!*\
  !*** ./src/app/project/[id]/page.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_furlong_new_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/furlong_new_logo.png */ \"(app-pages-browser)/./public/furlong_new_logo.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Project(param) {\n    let { params } = param;\n    var _projectData_projectData_Salesperson, _projectData_projectData, _projectData, _projectData_projectData1, _projectData1, _projectData_projectData2, _projectData2, _projectData_projectData3, _projectData3, _projectData_projectData4, _projectData4, _projectData_projectData5, _projectData5;\n    _s();\n    const [projectData, setProjectData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{\n        const res = await fetch(\"http://localhost:3000/api/projectapi?id=\".concat(params.id));\n        const data = await res.json();\n        setProjectData(data);\n        setLoading(false);\n    }, []);\n    if (loading === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                height: \"100vh\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        fontSize: \"40px\",\n                        fontWeight: \"bold\",\n                        color: \"\"\n                    },\n                    children: \"Loading.............\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                height: \"100vh\",\n                marginTop: \"5%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Hi \",\n                            (_projectData = projectData) === null || _projectData === void 0 ? void 0 : (_projectData_projectData = _projectData.projectData) === null || _projectData_projectData === void 0 ? void 0 : (_projectData_projectData_Salesperson = _projectData_projectData.Salesperson) === null || _projectData_projectData_Salesperson === void 0 ? void 0 : _projectData_projectData_Salesperson.name,\n                            \",\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"A quick email to say that the following project has now been completed.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Project details : Project - \",\n                            (_projectData1 = projectData) === null || _projectData1 === void 0 ? void 0 : (_projectData_projectData1 = _projectData1.projectData) === null || _projectData_projectData1 === void 0 ? void 0 : _projectData_projectData1.Name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Project Summary- \",\n                            (_projectData2 = projectData) === null || _projectData2 === void 0 ? void 0 : (_projectData_projectData2 = _projectData2.projectData) === null || _projectData_projectData2 === void 0 ? void 0 : _projectData_projectData2.Work_Summary_Sale\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current Estimated time (Budget) -\",\n                            (_projectData3 = projectData) === null || _projectData3 === void 0 ? void 0 : (_projectData_projectData3 = _projectData3.projectData) === null || _projectData_projectData3 === void 0 ? void 0 : _projectData_projectData3.Budget_time_Add_Remove\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            \"Current Estimated time (Allowance) -\",\n                            (_projectData4 = projectData) === null || _projectData4 === void 0 ? void 0 : (_projectData_projectData4 = _projectData4.projectData) === null || _projectData_projectData4 === void 0 ? void 0 : _projectData_projectData4.Allowance_time_Add_Remove\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            \"Relevant notes / issues : -\",\n                            \" \",\n                            (_projectData5 = projectData) === null || _projectData5 === void 0 ? void 0 : (_projectData_projectData5 = _projectData5.projectData) === null || _projectData_projectData5 === void 0 ? void 0 : _projectData_projectData5.Work_Summary_Sale\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Should you wish to discuss anything further please make contact.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Regards,\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this),\n                    \"Furlong Painting\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\notify-project-completion\\\\src\\\\app\\\\project\\\\[id]\\\\page.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"XO2ipodJPV7G8cI5dNWZzTLA0DU=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvamVjdC9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUU0QztBQUNlO0FBQzVCO0FBRWhCLFNBQVNJLFFBQVEsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWO1FBZ0RmQyxzQ0FBQUEsMEJBQUFBLGNBT3lCQSwyQkFBQUEsZUFFWEEsMkJBQUFBLGVBSWxCQSwyQkFBQUEsZUFNQUEsMkJBQUFBLGVBTUFBLDJCQUFBQTs7SUF4RVgsTUFBTSxDQUFDQSxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLE1BQU0sTUFBTUMsTUFDaEIsMkNBQXFELE9BQVZOLE9BQU9PLEVBQUU7UUFHdEQsTUFBTUMsT0FBTyxNQUFNSCxJQUFJSSxJQUFJO1FBRTNCUCxlQUFlTTtRQUNmSixXQUFXO0lBQ2IsR0FBRyxFQUFFO0lBRUwsSUFBSUQsWUFBWSxNQUFNO1FBQ3BCLHFCQUNFLDhEQUFDTztZQUNDQyxPQUFPO2dCQUNMQyxRQUFRO2dCQUNSQyxTQUFTO2dCQUNUQyxZQUFZO2dCQUNaQyxnQkFBZ0I7WUFDbEI7c0JBRUEsNEVBQUNMOzBCQUlDLDRFQUFDTTtvQkFBR0wsT0FBTzt3QkFBRU0sVUFBVTt3QkFBUUMsWUFBWTt3QkFBUUMsT0FBTztvQkFBRzs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7OztJQU14RTtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ1Y7WUFDQ0MsT0FBTztnQkFDTEUsU0FBUztnQkFDVEUsZ0JBQWdCO2dCQUNoQkgsUUFBUTtnQkFDUlMsV0FBVztZQUNiO3NCQUVBLDRFQUFDWDtnQkFBSUMsT0FBTztvQkFBRVcsU0FBUztnQkFBTzs7a0NBQzVCLDhEQUFDQzs7NEJBQUU7NkJBQUl0QixlQUFBQSx5QkFBQUEsb0NBQUFBLDJCQUFBQSxhQUFhQSxXQUFXLGNBQXhCQSxnREFBQUEsdUNBQUFBLHlCQUEwQnVCLFdBQVcsY0FBckN2QiwyREFBQUEscUNBQXVDd0IsSUFBSTs0QkFBQzs7Ozs7OztrQ0FDbkQsOERBQUNDOzs7OztrQ0FDRCw4REFBQ0g7a0NBQUU7Ozs7OztrQ0FJSCw4REFBQ0c7Ozs7O2tDQUNELDhEQUFDSDs7NEJBQUU7NkJBQTZCdEIsZ0JBQUFBLHlCQUFBQSxxQ0FBQUEsNEJBQUFBLGNBQWFBLFdBQVcsY0FBeEJBLGdEQUFBQSwwQkFBMEIwQixJQUFJOzs7Ozs7O2tDQUM5RCw4REFBQ0Q7Ozs7O2tDQUNELDhEQUFDSDs7NEJBQUU7NkJBQWtCdEIsZ0JBQUFBLHlCQUFBQSxxQ0FBQUEsNEJBQUFBLGNBQWFBLFdBQVcsY0FBeEJBLGdEQUFBQSwwQkFBMEIyQixpQkFBaUI7Ozs7Ozs7a0NBQ2hFLDhEQUFDRjs7Ozs7a0NBQ0QsOERBQUNIOzs0QkFBRTs2QkFFQXRCLGdCQUFBQSx5QkFBQUEscUNBQUFBLDRCQUFBQSxjQUFhQSxXQUFXLGNBQXhCQSxnREFBQUEsMEJBQTBCNEIsc0JBQXNCOzs7Ozs7O2tDQUVuRCw4REFBQ0g7Ozs7O2tDQUNELDhEQUFDSDs7NEJBQ0U7NEJBQUk7NkJBRUp0QixnQkFBQUEseUJBQUFBLHFDQUFBQSw0QkFBQUEsY0FBYUEsV0FBVyxjQUF4QkEsZ0RBQUFBLDBCQUEwQjZCLHlCQUF5Qjs7Ozs7OztrQ0FFdEQsOERBQUNKOzs7OztrQ0FDRCw4REFBQ0g7OzRCQUNFOzRCQUFJOzRCQUN1Qjs2QkFDM0J0QixnQkFBQUEseUJBQUFBLHFDQUFBQSw0QkFBQUEsY0FBYUEsV0FBVyxjQUF4QkEsZ0RBQUFBLDBCQUEwQjJCLGlCQUFpQjs7Ozs7OztrQ0FFOUMsOERBQUNGOzs7OztrQ0FDRCw4REFBQ0E7Ozs7O2tDQU9ELDhEQUFDSDtrQ0FBRTs7Ozs7O2tDQUdILDhEQUFDRzs7Ozs7a0NBQ0QsOERBQUNIO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNHOzs7OztvQkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEI7R0E5RndCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9qZWN0L1tpZF0vcGFnZS5qc3g/MzVjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9mdXJsb25nX25ld19sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IFtwcm9qZWN0RGF0YSwgc2V0UHJvamVjdERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2plY3RhcGk/aWQ9JHtwYXJhbXMuaWR9YFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBzZXRQcm9qZWN0RGF0YShkYXRhKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcgPT09IHRydWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgaGVpZ2h0PVwiNTBweFwiIHdpZHRoPXtcIjEwMCVcIn0gLz5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250U2l6ZTogXCI0MHB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBjb2xvcjogXCJcIiB9fT5cclxuICAgICAgICAgICAgTG9hZGluZy4uLi4uLi4uLi4uLi5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiNSVcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgIDxwPkhpIHtwcm9qZWN0RGF0YT8ucHJvamVjdERhdGE/LlNhbGVzcGVyc29uPy5uYW1lfSw8L3A+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBBIHF1aWNrIGVtYWlsIHRvIHNheSB0aGF0IHRoZSBmb2xsb3dpbmcgcHJvamVjdCBoYXMgbm93IGJlZW5cclxuICAgICAgICAgICAgY29tcGxldGVkLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8cD5Qcm9qZWN0IGRldGFpbHMgOiBQcm9qZWN0IC0ge3Byb2plY3REYXRhPy5wcm9qZWN0RGF0YT8uTmFtZX08L3A+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxwPlByb2plY3QgU3VtbWFyeS0ge3Byb2plY3REYXRhPy5wcm9qZWN0RGF0YT8uV29ya19TdW1tYXJ5X1NhbGV9PC9wPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgQ3VycmVudCBFc3RpbWF0ZWQgdGltZSAoQnVkZ2V0KSAtXHJcbiAgICAgICAgICAgIHtwcm9qZWN0RGF0YT8ucHJvamVjdERhdGE/LkJ1ZGdldF90aW1lX0FkZF9SZW1vdmV9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIEN1cnJlbnQgRXN0aW1hdGVkIHRpbWUgKEFsbG93YW5jZSkgLVxyXG4gICAgICAgICAgICB7cHJvamVjdERhdGE/LnByb2plY3REYXRhPy5BbGxvd2FuY2VfdGltZV9BZGRfUmVtb3ZlfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICBSZWxldmFudCBub3RlcyAvIGlzc3VlcyA6IC17XCIgXCJ9XHJcbiAgICAgICAgICAgIHtwcm9qZWN0RGF0YT8ucHJvamVjdERhdGE/LldvcmtfU3VtbWFyeV9TYWxlfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHsvKiB7cHJvamVjdERhdGE/LnByb2plY3REYXRhPy52YXJpYXRpb25EYXRhLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBQcm9qZWN0IFZhcmlhdGlvbnMgKEZhbHNlID0gbm9uZSkgLVxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0RGF0YT8ucHJvamVjdERhdGE/LnZhcmlhdGlvbkRhdGF9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFNob3VsZCB5b3Ugd2lzaCB0byBkaXNjdXNzIGFueXRoaW5nIGZ1cnRoZXIgcGxlYXNlIG1ha2UgY29udGFjdC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHA+UmVnYXJkcyw8L3A+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIEZ1cmxvbmcgUGFpbnRpbmdcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsb2dvIiwiSW1hZ2UiLCJQcm9qZWN0IiwicGFyYW1zIiwicHJvamVjdERhdGEiLCJzZXRQcm9qZWN0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzIiwiZmV0Y2giLCJpZCIsImRhdGEiLCJqc29uIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaDEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIm1haW4iLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwicCIsIlNhbGVzcGVyc29uIiwibmFtZSIsImJyIiwiTmFtZSIsIldvcmtfU3VtbWFyeV9TYWxlIiwiQnVkZ2V0X3RpbWVfQWRkX1JlbW92ZSIsIkFsbG93YW5jZV90aW1lX0FkZF9SZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/project/[id]/page.jsx\n"));

/***/ })

});