/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/helpDesk",{

/***/ "./pages/helpDesk.tsx":
/*!****************************!*\
  !*** ./pages/helpDesk.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Container */ \"./components/Container/index.tsx\");\n/* harmony import */ var _utilis_prismicQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../utilis/prismicQueries */ \"./utilis/prismicQueries.js\");\n/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Grid */ \"./components/Grid/index.tsx\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/Loader */ \"./components/Loader/index.tsx\");\n/* harmony import */ var _components_MenuAside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/MenuAside */ \"./components/MenuAside/index.tsx\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/michal/Pulpit/lex/pages/helpDesk.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Energy = function Energy() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),\n      loader = _useState[0],\n      setLoader = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      homeDoc = _useState3[0],\n      setHomeDoc = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      notFound = _useState4[0],\n      toggleNotFound = _useState4[1]; // useEffect(() => {\n  // setText(getAllPages('help'))\n  //     if(text) {\n  //         setLoader(false)\n  //     }\n  // }, [text]);\n  // Fetch the Prismic initial Prismic content on page load\n\n\n  var t = 'help';\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var fetchPrismicContent = /*#__PURE__*/function () {\n      var _ref = (0,_home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var queryResponse, homeDocContent;\n        return _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return (0,_utilis_prismicQueries__WEBPACK_IMPORTED_MODULE_6__.queryHomeContent)(t);\n\n              case 2:\n                queryResponse = _context.sent;\n                homeDocContent = queryResponse;\n\n                if (homeDocContent) {\n                  setHomeDoc(homeDocContent);\n                } else {\n                  toggleNotFound(true);\n                }\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchPrismicContent() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchPrismicContent();\n  }, []);\n  console.log(homeDoc);\n\n  var renderText = function renderText() {\n    var test = homeDoc === null || homeDoc === void 0 ? void 0 : homeDoc.data.allPagess.edges.filter(function (e) {\n      return e.node._meta.id == \"YKY8qhAAACAA88kf\";\n    }).pop();\n    return test === null || test === void 0 ? void 0 : test.node.description;\n  };\n\n  var getCategories = function getCategories() {\n    var categroies = homeDoc === null || homeDoc === void 0 ? void 0 : homeDoc.data.allPagess.edges.filter(function (e) {\n      return e.node._meta.id !== \"YKY8qhAAACAA88kf\";\n    });\n    return categroies;\n  }; // Return the page if a document was retrieved from Prismic\n\n\n  if (homeDoc) {\n    var title = prismic_reactjs__WEBPACK_IMPORTED_MODULE_10__.RichText.asText(homeDoc.headline);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_5__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n          children: \"LEXELL Help Desk IT\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n        gridGap: \"2rem\",\n        columns: \"360px 1fr\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuAside__WEBPACK_IMPORTED_MODULE_9__.default, {\n          categories: getCategories(),\n          tag: 'help'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(prismic_reactjs__WEBPACK_IMPORTED_MODULE_10__.RichText, {\n            render: renderText()\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, _this);\n  }\n\n  if (notFound) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 16\n    }, _this);\n  }\n\n  return null;\n};\n\n_s(Energy, \"Ei1gOtDBUhkKgXZdLmJ14uUoJsQ=\");\n\n_c = Energy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Energy); // export async function getStaticProps({ previewData }) {\n//     const allPages = await getAllPages(previewData)\n//     return {\n//         props: {\n//             text: allPages[0].node.description\n//         },\n//     }\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"Energy\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscERlc2sudHN4PzMxNWIiXSwibmFtZXMiOlsiRW5lcmd5IiwidXNlU3RhdGUiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJ0ZXh0Iiwic2V0VGV4dCIsImhvbWVEb2MiLCJzZXRIb21lRG9jIiwibm90Rm91bmQiLCJ0b2dnbGVOb3RGb3VuZCIsInQiLCJ1c2VFZmZlY3QiLCJmZXRjaFByaXNtaWNDb250ZW50IiwicXVlcnlIb21lQ29udGVudCIsInF1ZXJ5UmVzcG9uc2UiLCJob21lRG9jQ29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJUZXh0IiwidGVzdCIsImRhdGEiLCJhbGxQYWdlc3MiLCJlZGdlcyIsImZpbHRlciIsImUiLCJub2RlIiwiX21ldGEiLCJpZCIsInBvcCIsImRlc2NyaXB0aW9uIiwiZ2V0Q2F0ZWdvcmllcyIsImNhdGVncm9pZXMiLCJ0aXRsZSIsIlJpY2hUZXh0IiwiaGVhZGxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFFQSxJQUFNQSxNQUEyQixHQUFHLFNBQTlCQSxNQUE4QixHQUFNO0FBQUE7O0FBQUEsa0JBRVZDLCtDQUFRLENBQUMsSUFBRCxDQUZFO0FBQUEsTUFFL0JDLE1BRitCO0FBQUEsTUFFdkJDLFNBRnVCOztBQUFBLG1CQUdkRiwrQ0FBUSxDQUFDLElBQUQsQ0FITTtBQUFBLE1BRy9CRyxJQUgrQjtBQUFBLE1BR3pCQyxPQUh5Qjs7QUFBQSxtQkFJUkosK0NBQVEsQ0FBQyxJQUFELENBSkE7QUFBQSxNQUkvQkssT0FKK0I7QUFBQSxNQUl0QkMsVUFKc0I7O0FBQUEsbUJBS0hOLCtDQUFRLENBQUMsS0FBRCxDQUxMO0FBQUEsTUFLL0JPLFFBTCtCO0FBQUEsTUFLckJDLGNBTHFCLGtCQU90QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0Es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cG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEhvbWVQcm9wcyB9IGZyb20gXCIuLy4uL1R5cGVzL0hvbWUuZFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBjb21wb25lbnRzL0NvbnRhaW5lclwiXG5pbXBvcnQgeyBxdWVyeUhvbWVDb250ZW50IH0gZnJvbSAnLi8uLi91dGlsaXMvcHJpc21pY1F1ZXJpZXMnXG5pbXBvcnQgR3JpZCBmcm9tIFwiQGNvbXBvbmVudHMvR3JpZFwiXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAY29tcG9uZW50cy9Mb2FkZXJcIlxuaW1wb3J0IE1lbnVBc2lkZSBmcm9tIFwiQGNvbXBvbmVudHMvTWVudUFzaWRlXCJcbmltcG9ydCBNZW51QXNpZGVNb2JpbGUgZnJvbSBcIkBjb21wb25lbnRzL01lbnVBc2lkZU1vYmlsZVwiXG5pbXBvcnQgeyBnZXRBbGxQYWdlcyB9IGZyb20gXCIuLi91dGlsaXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzTW9iaWxlIH0gIGZyb20gXCIuLy4uL3V0aWxpcy9hcGlcIlxuaW1wb3J0IHtSaWNoVGV4dH0gZnJvbSBcInByaXNtaWMtcmVhY3Rqc1wiO1xuXG5jb25zdCBFbmVyZ3k6IFJlYWN0LkZDPEhvbWVQcm9wcz4gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtob21lRG9jLCBzZXRIb21lRG9jXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtub3RGb3VuZCwgdG9nZ2xlTm90Rm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBzZXRUZXh0KGdldEFsbFBhZ2VzKCdoZWxwJykpXG4gICAgLy8gICAgIGlmKHRleHQpIHtcbiAgICAvLyAgICAgICAgIHNldExvYWRlcihmYWxzZSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIFt0ZXh0XSk7XG5cbiAgICAvLyBGZXRjaCB0aGUgUHJpc21pYyBpbml0aWFsIFByaXNtaWMgY29udGVudCBvbiBwYWdlIGxvYWRcbiAgICBjb25zdCB0ID0gJ2hlbHAnXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hQcmlzbWljQ29udGVudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UmVzcG9uc2UgPSBhd2FpdCBxdWVyeUhvbWVDb250ZW50KHQpO1xuICAgICAgICAgICAgY29uc3QgaG9tZURvY0NvbnRlbnQgPSBxdWVyeVJlc3BvbnNlO1xuICAgICAgICAgICAgaWYgKGhvbWVEb2NDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgc2V0SG9tZURvYyhob21lRG9jQ29udGVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvZ2dsZU5vdEZvdW5kKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmZXRjaFByaXNtaWNDb250ZW50KCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc29sZS5sb2coaG9tZURvYylcblxuICAgIGNvbnN0IHJlbmRlclRleHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBob21lRG9jPy5kYXRhLmFsbFBhZ2Vzcy5lZGdlcy5maWx0ZXIoZSA9PiBlLm5vZGUuX21ldGEuaWQgPT0gXCJZS1k4cWhBQUFDQUE4OGtmXCIpLnBvcCgpXG4gICAgICAgIHJldHVybiB0ZXN0Py5ub2RlLmRlc2NyaXB0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2F0ZWdyb2llcyA9IGhvbWVEb2M/LmRhdGEuYWxsUGFnZXNzLmVkZ2VzLmZpbHRlcihlID0+IGUubm9kZS5fbWV0YS5pZCAhPT0gXCJZS1k4cWhBQUFDQUE4OGtmXCIpXG4gICAgICAgIHJldHVybiBjYXRlZ3JvaWVzXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBwYWdlIGlmIGEgZG9jdW1lbnQgd2FzIHJldHJpZXZlZCBmcm9tIFByaXNtaWNcbiAgICBpZiAoaG9tZURvYykge1xuICAgICAgICBjb25zdCB0aXRsZSA9IFJpY2hUZXh0LmFzVGV4dChob21lRG9jLmhlYWRsaW5lKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5MRVhFTEwgSGVscCBEZXNrIElUPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG5cblxuICAgICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgICAgIGdyaWRHYXA9XCIycmVtXCJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucz1cIjM2MHB4IDFmclwiXG4gICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKntpc01vYmlsZSgpICYmIHRleHQqL31cbiAgICAgICAgICAgICAgICAgICAgey8qICAgID8gPE1lbnVBc2lkZU1vYmlsZSovfVxuICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIGNhdGVnb3JpZXM9e2dldENhdGVnb3JpZXMoKX0qL31cbiAgICAgICAgICAgICAgICAgICAgey8qICAgIC8+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKiAgICA6IDxNZW51QXNpZGUqL31cbiAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICBjYXRlZ29yaWVzPXtnZXRDYXRlZ29yaWVzKCl9Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgdGFnPXsnaGVscCd9Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKiAgICAvPn0qL31cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVBc2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17Z2V0Q2F0ZWdvcmllcygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnPXsnaGVscCd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHQgcmVuZGVyPXtyZW5kZXJUZXh0KCl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGlmIChub3RGb3VuZCkge1xuICAgICAgICByZXR1cm4gPExvYWRlciAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5lcmd5XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHByZXZpZXdEYXRhIH0pIHtcbi8vICAgICBjb25zdCBhbGxQYWdlcyA9IGF3YWl0IGdldEFsbFBhZ2VzKHByZXZpZXdEYXRhKVxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgICAgICB0ZXh0OiBhbGxQYWdlc1swXS5ub2RlLmRlc2NyaXB0aW9uXG4vLyAgICAgICAgIH0sXG4vLyAgICAgfVxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/helpDesk.tsx\n");

/***/ })

});