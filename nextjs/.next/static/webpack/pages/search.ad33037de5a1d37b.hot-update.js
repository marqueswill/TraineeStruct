"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./src/components/RestaurantCard.tsx":
/*!*******************************************!*\
  !*** ./src/components/RestaurantCard.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ restaurantCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_RestaurantCard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/RestaurantCard.module.css */ \"./src/styles/RestaurantCard.module.css\");\n/* harmony import */ var _styles_RestaurantCard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_RestaurantCard_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction restaurantCard(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_RestaurantCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_RestaurantCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().img_container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: (_styles_RestaurantCard_module_css__WEBPACK_IMPORTED_MODULE_1___default().logo),\n                    src: \"/images/restaurants/\".concat(props.restaurant.name.toLowerCase().replaceAll(\" \", \"_\"), \".png\"),\n                    alt: props.restaurant.name\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: props.restaurant.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.restaurant.description\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.restaurant.contacts\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.restaurant.location\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.restaurant.phone\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.restaurant.schedule\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/restaurant/menu/\".concat(props.restaurant.id),\n                        children: \"Visualizar card\\xe1pio\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/RestaurantCard.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXN0YXVyYW50Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3dEO0FBRXpDLFNBQVNDLGVBQWVDLEtBQWlDO0lBQ3RFLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXSiwrRUFBVzs7MEJBQ3pCLDhEQUFDTTtnQkFBS0YsV0FBV0osd0ZBQW9COzBCQUNuQyw0RUFBQ1E7b0JBQ0RKLFdBQVdKLCtFQUFXO29CQUNwQlUsS0FBSyx1QkFFbUIsT0FGSVIsTUFBTVMsVUFBVSxDQUFDQyxJQUFJLENBQzlDQyxXQUFXLEdBQ1hDLFVBQVUsQ0FBQyxLQUFLLE1BQUs7b0JBQ3hCQyxLQUFLYixNQUFNUyxVQUFVLENBQUNDLElBQUk7Ozs7Ozs7Ozs7OzBCQUc5Qiw4REFBQ047O2tDQUNDLDhEQUFDVTtrQ0FBSWQsTUFBTVMsVUFBVSxDQUFDQyxJQUFJOzs7Ozs7a0NBQzFCLDhEQUFDSztrQ0FBR2YsTUFBTVMsVUFBVSxDQUFDTyxXQUFXOzs7Ozs7a0NBQ2hDLDhEQUFDRDtrQ0FBR2YsTUFBTVMsVUFBVSxDQUFDUSxRQUFROzs7Ozs7a0NBQzdCLDhEQUFDRjtrQ0FBR2YsTUFBTVMsVUFBVSxDQUFDUyxRQUFROzs7Ozs7a0NBQzdCLDhEQUFDSDtrQ0FBR2YsTUFBTVMsVUFBVSxDQUFDVSxLQUFLOzs7Ozs7a0NBQzFCLDhEQUFDSjtrQ0FBR2YsTUFBTVMsVUFBVSxDQUFDVyxRQUFROzs7Ozs7a0NBQzdCLDhEQUFDQzt3QkFBRUMsTUFBTSxvQkFBd0MsT0FBcEJ0QixNQUFNUyxVQUFVLENBQUNjLEVBQUU7a0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXN0YXVyYW50Q2FyZC50c3g/Y2UxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXN0YXVyYW50IH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1Jlc3RhdXJhbnRDYXJkLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzdGF1cmFudENhcmQocHJvcHM6IHsgcmVzdGF1cmFudDogUmVzdGF1cmFudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmltZ19jb250YWluZXJ9PlxuICAgICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299XG4gICAgICAgICAgc3JjPXtgL2ltYWdlcy9yZXN0YXVyYW50cy8ke3Byb3BzLnJlc3RhdXJhbnQubmFtZVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5yZXBsYWNlQWxsKFwiIFwiLCBcIl9cIil9LnBuZ2B9XG4gICAgICAgICAgYWx0PXtwcm9wcy5yZXN0YXVyYW50Lm5hbWV9XG4gICAgICAgIC8+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiA+XG4gICAgICAgIDxoMT57cHJvcHMucmVzdGF1cmFudC5uYW1lfTwvaDE+XG4gICAgICAgIDxwPntwcm9wcy5yZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHA+e3Byb3BzLnJlc3RhdXJhbnQuY29udGFjdHN9PC9wPlxuICAgICAgICA8cD57cHJvcHMucmVzdGF1cmFudC5sb2NhdGlvbn08L3A+XG4gICAgICAgIDxwPntwcm9wcy5yZXN0YXVyYW50LnBob25lfTwvcD5cbiAgICAgICAgPHA+e3Byb3BzLnJlc3RhdXJhbnQuc2NoZWR1bGV9PC9wPlxuICAgICAgICA8YSBocmVmPXtgL3Jlc3RhdXJhbnQvbWVudS8ke3Byb3BzLnJlc3RhdXJhbnQuaWR9YH0+XG4gICAgICAgICAgVmlzdWFsaXphciBjYXJkw6FwaW9cbiAgICAgICAgPC9hPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInJlc3RhdXJhbnRDYXJkIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwic3BhbiIsImltZ19jb250YWluZXIiLCJpbWciLCJsb2dvIiwic3JjIiwicmVzdGF1cmFudCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2VBbGwiLCJhbHQiLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsImNvbnRhY3RzIiwibG9jYXRpb24iLCJwaG9uZSIsInNjaGVkdWxlIiwiYSIsImhyZWYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/RestaurantCard.tsx\n"));

/***/ })

});