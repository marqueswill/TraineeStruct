"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/profile/[id]",{

/***/ "./src/pages/user/profile/[id].tsx":
/*!*****************************************!*\
  !*** ./src/pages/user/profile/[id].tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ UserMenuPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\"use session\";\n\n\nvar __N_SSP = true;\nfunction UserMenuPage(param) {\n    let { user } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            alert(\"Fa\\xe7a login para continuar!\");\n            router.push(\"/api/auth/signin\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Fa\\xe7a Login!\"\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/user/profile/[id].tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/user/profile/[id].tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this);\n    } else {\n        if (session && session.user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    JSON.stringify(user),\n                    session.user.isOwner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/restaurant/menu/\".concat(user.restaurant.id),\n                        children: \"Card\\xe1pio\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/user/profile/[id].tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/pages/user/profile/[id].tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this);\n        }\n    }\n}\n_s(UserMenuPage, \"vw9t8RUraqhrNzOwKGq5oVjz818=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = UserMenuPage;\nvar _c;\n$RefreshReg$(_c, \"UserMenuPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlci9wcm9maWxlL1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQztBQUk0QztBQUNMOztBQWtCekIsU0FBU0UsYUFBYSxLQUVvQjtRQUZwQixFQUNuQ0MsSUFBSSxFQUNtRCxHQUZwQjs7SUFHbkMsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUksTUFBTUMsT0FBTyxFQUFFLEdBQUdOLDJEQUFVQTtJQUVwQyxNQUFNLEVBQUVPLE1BQU0sRUFBRSxHQUFHUCwyREFBVUEsQ0FBQztRQUM1QlEsVUFBVTtRQUNWQztZQUNFQyxNQUFNO1lBQ05OLE9BQU9PLElBQUksQ0FBRTtRQUNmO0lBQ0Y7SUFFQSxJQUFJSixXQUFZLFdBQVU7UUFDeEIscUJBQ0UsOERBQUNLO3NCQUNDLDRFQUFDQzswQkFBRzs7Ozs7Ozs7Ozs7SUFHVixPQUFPO1FBQ0wsSUFBSVAsV0FBV0EsUUFBUUgsSUFBSSxFQUFFO1lBQzNCLHFCQUNFLDhEQUFDUzs7b0JBQ0VFLEtBQUtDLFNBQVMsQ0FBQ1o7b0JBQ2ZHLFFBQVFILElBQUksQ0FBQ2EsT0FBTyxrQkFDbkIsOERBQUNDO3dCQUFFQyxNQUFNLG9CQUF1QyxPQUFuQmYsS0FBS2dCLFVBQVUsQ0FBQ0MsRUFBRTtrQ0FBSTs7Ozs7Ozs7Ozs7O1FBSTNEO0lBQ0Y7QUFDRjtHQWhDd0JsQjs7UUFHUEQsa0RBQVNBO1FBQ0VELHVEQUFVQTtRQUVqQkEsdURBQVVBOzs7S0FOUEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VzZXIvcHJvZmlsZS9baWRdLnRzeD9jZDM5Il0sInNvdXJjZXNDb250ZW50IjpbImB1c2Ugc2Vzc2lvbmA7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1Byb2ZpbGUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8e1xuICB1c2VyOiBhbnk7XG59PiA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IG93bmVySWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyL293bmVyLyR7b3duZXJJZH1gLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICB9KTtcblxuICBsZXQgdXNlciA9IHt9O1xuICBpZiAocmVzLm9rKSB7XG4gICAgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIH1cblxuICByZXR1cm4geyBwcm9wczogeyB1c2VyIH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJNZW51UGFnZSh7XG4gIHVzZXIsXG59OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz4pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGNvbnN0IHsgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBvblVuYXV0aGVudGljYXRlZCgpIHtcbiAgICAgIGFsZXJ0KFwiRmHDp2EgbG9naW4gcGFyYSBjb250aW51YXIhXCIpO1xuICAgICAgcm91dGVyLnB1c2goYC9hcGkvYXV0aC9zaWduaW5gKTtcbiAgICB9LFxuICB9KTtcblxuICBpZiAoc3RhdHVzID09PSBgbG9hZGluZ2ApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkZhw6dhIExvZ2luITwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24udXNlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkodXNlcil9XG4gICAgICAgICAge3Nlc3Npb24udXNlci5pc093bmVyICYmIChcbiAgICAgICAgICAgIDxhIGhyZWY9e2AvcmVzdGF1cmFudC9tZW51LyR7dXNlci5yZXN0YXVyYW50LmlkfWB9PkNhcmTDoXBpbzwvYT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIlVzZXJNZW51UGFnZSIsInVzZXIiLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInJlcXVpcmVkIiwib25VbmF1dGhlbnRpY2F0ZWQiLCJhbGVydCIsInB1c2giLCJkaXYiLCJoMSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc093bmVyIiwiYSIsImhyZWYiLCJyZXN0YXVyYW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/user/profile/[id].tsx\n"));

/***/ })

});