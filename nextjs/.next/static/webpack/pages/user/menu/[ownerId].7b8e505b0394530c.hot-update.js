"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/menu/[ownerId]",{

/***/ "./src/pages/user/menu/[ownerId].tsx":
/*!*******************************************!*\
  !*** ./src/pages/user/menu/[ownerId].tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ UserMenuPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\"use session\";\n\n\nvar __N_SSP = true;\nfunction UserMenuPage(param) {\n    let { user } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            alert(\"Fa\\xe7a login para continuar!\");\n            router.push(\"/api/auth/signin\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Fa\\xe7a Login!\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/user/menu/[ownerId].tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/user/menu/[ownerId].tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this);\n    } else {\n        if (session && session.user) {\n            if (session.user.id !== router.query.ownerId) router.push(\"/user/profile\");\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/restaurant/menu/\".concat(user.restaurant.id),\n                children: \"Card\\xe1pio\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/user/menu/[ownerId].tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/user/menu/[ownerId].tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(UserMenuPage, \"vw9t8RUraqhrNzOwKGq5oVjz818=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = UserMenuPage;\nvar _c;\n$RefreshReg$(_c, \"UserMenuPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlci9tZW51L1tvd25lcklkXS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFDO0FBRzRDO0FBQ0w7O0FBa0J6QixTQUFTRSxhQUFhLEtBRW9CO1FBRnBCLEVBQ25DQyxJQUFJLEVBQ21ELEdBRnBCOztJQUduQyxNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxNQUFNQyxPQUFPLEVBQUUsR0FBR04sMkRBQVVBO0lBRXBDLE1BQU0sRUFBRU8sTUFBTSxFQUFFLEdBQUdQLDJEQUFVQSxDQUFDO1FBQzVCUSxVQUFVO1FBQ1ZDO1lBQ0VDLE1BQU07WUFDTk4sT0FBT08sSUFBSSxDQUFFO1FBQ2Y7SUFDRjtJQUVBLElBQUlKLFdBQVksV0FBVTtRQUN4QixxQkFDRSw4REFBQ0s7c0JBQ0MsNEVBQUNDOzBCQUFHOzs7Ozs7Ozs7OztJQUdWLE9BQU87UUFDTCxJQUFJUCxXQUFXQSxRQUFRSCxJQUFJLEVBQUU7WUFDM0IsSUFBSUcsUUFBUUgsSUFBSSxDQUFDVyxFQUFFLEtBQUtWLE9BQU9XLEtBQUssQ0FBQ0MsT0FBTyxFQUMxQ1osT0FBT08sSUFBSSxDQUFFO1FBQ2pCO1FBQ0EscUJBQ0UsOERBQUNDO3NCQUVDLDRFQUFDSztnQkFBRUMsTUFBTSxvQkFBdUMsT0FBbkJmLEtBQUtnQixVQUFVLENBQUNMLEVBQUU7MEJBQUk7Ozs7Ozs7Ozs7O0lBR3pEO0FBQ0Y7R0FoQ3dCWjs7UUFHUEQsa0RBQVNBO1FBQ0VELHVEQUFVQTtRQUVqQkEsdURBQVVBOzs7S0FOUEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VzZXIvbWVudS9bb3duZXJJZF0udHN4PzcxODYiXSwic291cmNlc0NvbnRlbnQiOlsiYHVzZSBzZXNzaW9uYDtcblxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8e1xuICB1c2VyOiBhbnk7XG59PiA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IG93bmVySWQgPSBjb250ZXh0LnF1ZXJ5Lm93bmVySWQ7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvb3duZXIvJHtvd25lcklkfWAsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gIH0pO1xuXG4gIGxldCB1c2VyID0ge307XG4gIGlmIChyZXMub2spIHtcbiAgICB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgfVxuXG4gIHJldHVybiB7IHByb3BzOiB7IHVzZXIgfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlck1lbnVQYWdlKHtcbiAgdXNlcixcbn06IEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZTx0eXBlb2YgZ2V0U2VydmVyU2lkZVByb3BzPikge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3QgeyBzdGF0dXMgfSA9IHVzZVNlc3Npb24oe1xuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIG9uVW5hdXRoZW50aWNhdGVkKCkge1xuICAgICAgYWxlcnQoXCJGYcOnYSBsb2dpbiBwYXJhIGNvbnRpbnVhciFcIik7XG4gICAgICByb3V0ZXIucHVzaChgL2FwaS9hdXRoL3NpZ25pbmApO1xuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChzdGF0dXMgPT09IGBsb2FkaW5nYCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RmHDp2EgTG9naW4hPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyLmlkICE9PSByb3V0ZXIucXVlcnkub3duZXJJZClcbiAgICAgICAgcm91dGVyLnB1c2goYC91c2VyL3Byb2ZpbGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkodXNlcil9ICovfVxuICAgICAgICA8YSBocmVmPXtgL3Jlc3RhdXJhbnQvbWVudS8ke3VzZXIucmVzdGF1cmFudC5pZH1gfT5DYXJkw6FwaW88L2E+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIlVzZXJNZW51UGFnZSIsInVzZXIiLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInJlcXVpcmVkIiwib25VbmF1dGhlbnRpY2F0ZWQiLCJhbGVydCIsInB1c2giLCJkaXYiLCJoMSIsImlkIiwicXVlcnkiLCJvd25lcklkIiwiYSIsImhyZWYiLCJyZXN0YXVyYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/user/menu/[ownerId].tsx\n"));

/***/ })

});