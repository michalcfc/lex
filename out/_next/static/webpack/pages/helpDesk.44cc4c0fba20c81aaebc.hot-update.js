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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Container */ \"./components/Container/index.tsx\");\n/* harmony import */ var _utilis_prismicQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../utilis/prismicQueries */ \"./utilis/prismicQueries.js\");\n/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Grid */ \"./components/Grid/index.tsx\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismic-reactjs */ \"./node_modules/prismic-reactjs/dist/prismic-reactjs.js\");\n/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/michal/Pulpit/lex/pages/helpDesk.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Energy = function Energy() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),\n      loader = _useState[0],\n      setLoader = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      text = _useState2[0],\n      setText = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      homeDoc = _useState3[0],\n      setHomeDoc = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      notFound = _useState4[0],\n      toggleNotFound = _useState4[1]; // useEffect(() => {\n  // setText(getAllPages('help'))\n  //     if(text) {\n  //         setLoader(false)\n  //     }\n  // }, [text]);\n  // Fetch the Prismic initial Prismic content on page load\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    var fetchPrismicContent = /*#__PURE__*/function () {\n      var _ref = (0,_home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var queryResponse, homeDocContent;\n        return _home_michal_Pulpit_lex_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return (0,_utilis_prismicQueries__WEBPACK_IMPORTED_MODULE_6__.queryHomeContent)();\n\n              case 2:\n                queryResponse = _context.sent;\n                homeDocContent = queryResponse.data;\n\n                if (homeDocContent) {\n                  setHomeDoc(homeDocContent);\n                } else {\n                  toggleNotFound(true);\n                }\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchPrismicContent() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchPrismicContent();\n  }, []);\n  console.log(homeDoc);\n\n  var renderText = function renderText() {\n    var test = text === null || text === void 0 ? void 0 : text.data.allPagess.edges.filter(function (e) {\n      return e.node._meta.id == \"YKY8qhAAACAA88kf\";\n    }).pop();\n    return test === null || test === void 0 ? void 0 : test.node.description;\n  };\n\n  var getCategories = function getCategories() {\n    var categroies = text === null || text === void 0 ? void 0 : text.data.allPagess.edges.filter(function (e) {\n      return e.node._meta.id !== \"YKY8qhAAACAA88kf\";\n    });\n    return categroies;\n  }; // Return the page if a document was retrieved from Prismic\n\n\n  if (homeDoc) {\n    var title = prismic_reactjs__WEBPACK_IMPORTED_MODULE_8__.RichText.asText(homeDoc.headline);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_5__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n          children: \"LEXELL Help Desk IT\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {\n        gridGap: \"2rem\",\n        columns: \"360px 1fr\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(prismic_reactjs__WEBPACK_IMPORTED_MODULE_8__.RichText, {\n            render: renderText()\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }, _this);\n  }\n\n  if (notFound) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotFound, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 16\n    }, _this);\n  }\n\n  return null;\n};\n\n_s(Energy, \"Ei1gOtDBUhkKgXZdLmJ14uUoJsQ=\");\n\n_c = Energy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Energy); // export async function getStaticProps({ previewData }) {\n//     const allPages = await getAllPages(previewData)\n//     return {\n//         props: {\n//             text: allPages[0].node.description\n//         },\n//     }\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"Energy\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGVscERlc2sudHN4PzMxNWIiXSwibmFtZXMiOlsiRW5lcmd5IiwidXNlU3RhdGUiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJ0ZXh0Iiwic2V0VGV4dCIsImhvbWVEb2MiLCJzZXRIb21lRG9jIiwibm90Rm91bmQiLCJ0b2dnbGVOb3RGb3VuZCIsInVzZUVmZmVjdCIsImZldGNoUHJpc21pY0NvbnRlbnQiLCJxdWVyeUhvbWVDb250ZW50IiwicXVlcnlSZXNwb25zZSIsImhvbWVEb2NDb250ZW50IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJUZXh0IiwidGVzdCIsImFsbFBhZ2VzcyIsImVkZ2VzIiwiZmlsdGVyIiwiZSIsIm5vZGUiLCJfbWV0YSIsImlkIiwicG9wIiwiZGVzY3JpcHRpb24iLCJnZXRDYXRlZ29yaWVzIiwiY2F0ZWdyb2llcyIsInRpdGxlIiwiUmljaFRleHQiLCJoZWFkbGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQU1BOztBQUVBLElBQU1BLE1BQTJCLEdBQUcsU0FBOUJBLE1BQThCLEdBQU07QUFBQTs7QUFBQSxrQkFFVkMsK0NBQVEsQ0FBQyxJQUFELENBRkU7QUFBQSxNQUUvQkMsTUFGK0I7QUFBQSxNQUV2QkMsU0FGdUI7O0FBQUEsbUJBR2RGLCtDQUFRLENBQUMsSUFBRCxDQUhNO0FBQUEsTUFHL0JHLElBSCtCO0FBQUEsTUFHekJDLE9BSHlCOztBQUFBLG1CQUlSSiwrQ0FBUSxDQUFDLElBQUQsQ0FKQTtBQUFBLE1BSS9CSyxPQUorQjtBQUFBLE1BSXRCQyxVQUpzQjs7QUFBQSxtQkFLSE4sK0NBQVEsQ0FBQyxLQUFELENBTEw7QUFBQSxNQUsvQk8sUUFMK0I7QUFBQSxNQUtyQkMsY0FMcUIsa0JBT3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFDQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsbUJBQW1CO0FBQUEsdVNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDSUMsd0VBQWdCLEVBRHBCOztBQUFBO0FBQ2xCQyw2QkFEa0I7QUFFbEJDLDhCQUZrQixHQUVERCxhQUFhLENBQUNFLElBRmI7O0FBR3hCLG9CQUFJRCxjQUFKLEVBQW9CO0FBQ2hCUCw0QkFBVSxDQUFDTyxjQUFELENBQVY7QUFDSCxpQkFGRCxNQUVPO0FBQ0hMLGdDQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0g7O0FBUHVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQW5CRSxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsT0FBekI7O0FBU0FBLHVCQUFtQjtBQUN0QixHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUFLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxPQUFaOztBQUVBLE1BQU1ZLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsUUFBTUMsSUFBSSxHQUFHZixJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRVcsSUFBTixDQUFXSyxTQUFYLENBQXFCQyxLQUFyQixDQUEyQkMsTUFBM0IsQ0FBa0MsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsSUFBRixDQUFPQyxLQUFQLENBQWFDLEVBQWIsSUFBbUIsa0JBQXZCO0FBQUEsS0FBbkMsRUFBOEVDLEdBQTlFLEVBQWI7QUFDQSxXQUFPUixJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRUssSUFBTixDQUFXSSxXQUFsQjtBQUNILEdBSEQ7O0FBS0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCLFFBQU1DLFVBQVUsR0FBRzFCLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFVyxJQUFOLENBQVdLLFNBQVgsQ0FBcUJDLEtBQXJCLENBQTJCQyxNQUEzQixDQUFrQyxVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9DLEtBQVAsQ0FBYUMsRUFBYixLQUFvQixrQkFBeEI7QUFBQSxLQUFuQyxDQUFuQjtBQUNBLFdBQU9JLFVBQVA7QUFDSCxHQUhELENBbkNzQyxDQXdDdEM7OztBQUNBLE1BQUl4QixPQUFKLEVBQWE7QUFDVCxRQUFNeUIsS0FBSyxHQUFHQyw0REFBQSxDQUFnQjFCLE9BQU8sQ0FBQzJCLFFBQXhCLENBQWQ7QUFDQSx3QkFDSSw4REFBQywwREFBRDtBQUFBLDhCQUNJLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFNSSw4REFBQyxxREFBRDtBQUNJLGVBQU8sRUFBQyxNQURaO0FBRUksZUFBTyxFQUFDLFdBRlo7QUFBQSwrQkFhSTtBQUFBLGlDQUNJLDhEQUFDLHFEQUFEO0FBQVUsa0JBQU0sRUFBRWYsVUFBVTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQTJCSDs7QUFFRCxNQUFJVixRQUFKLEVBQWM7QUFDVix3QkFBTyw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNIOztBQUVELFNBQU8sSUFBUDtBQUNILENBN0VEOztHQUFNUixNOztLQUFBQSxNO0FBK0VOLCtEQUFlQSxNQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvaGVscERlc2sudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgSG9tZVByb3BzIH0gZnJvbSBcIi4vLi4vVHlwZXMvSG9tZS5kXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQGNvbXBvbmVudHMvQ29udGFpbmVyXCJcbmltcG9ydCB7IHF1ZXJ5SG9tZUNvbnRlbnQgfSBmcm9tICcuLy4uL3V0aWxpcy9wcmlzbWljUXVlcmllcydcbmltcG9ydCBHcmlkIGZyb20gXCJAY29tcG9uZW50cy9HcmlkXCJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkBjb21wb25lbnRzL0xvYWRlclwiXG5pbXBvcnQgTWVudUFzaWRlIGZyb20gXCJAY29tcG9uZW50cy9NZW51QXNpZGVcIlxuaW1wb3J0IE1lbnVBc2lkZU1vYmlsZSBmcm9tIFwiQGNvbXBvbmVudHMvTWVudUFzaWRlTW9iaWxlXCJcbmltcG9ydCB7IGdldEFsbFBhZ2VzIH0gZnJvbSBcIi4uL3V0aWxpcy9xdWVyeVwiO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSAgZnJvbSBcIi4vLi4vdXRpbGlzL2FwaVwiXG5pbXBvcnQge1JpY2hUZXh0fSBmcm9tIFwicHJpc21pYy1yZWFjdGpzXCI7XG5cbmNvbnN0IEVuZXJneTogUmVhY3QuRkM8SG9tZVByb3BzPiA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2hvbWVEb2MsIHNldEhvbWVEb2NdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW25vdEZvdW5kLCB0b2dnbGVOb3RGb3VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNldFRleHQoZ2V0QWxsUGFnZXMoJ2hlbHAnKSlcbiAgICAvLyAgICAgaWYodGV4dCkge1xuICAgIC8vICAgICAgICAgc2V0TG9hZGVyKGZhbHNlKVxuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW3RleHRdKTtcblxuICAgIC8vIEZldGNoIHRoZSBQcmlzbWljIGluaXRpYWwgUHJpc21pYyBjb250ZW50IG9uIHBhZ2UgbG9hZFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUHJpc21pY0NvbnRlbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVJlc3BvbnNlID0gYXdhaXQgcXVlcnlIb21lQ29udGVudCgpO1xuICAgICAgICAgICAgY29uc3QgaG9tZURvY0NvbnRlbnQgPSBxdWVyeVJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZiAoaG9tZURvY0NvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBzZXRIb21lRG9jKGhvbWVEb2NDb250ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlTm90Rm91bmQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZldGNoUHJpc21pY0NvbnRlbnQoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zb2xlLmxvZyhob21lRG9jKVxuXG4gICAgY29uc3QgcmVuZGVyVGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGVzdCA9IHRleHQ/LmRhdGEuYWxsUGFnZXNzLmVkZ2VzLmZpbHRlcihlID0+IGUubm9kZS5fbWV0YS5pZCA9PSBcIllLWThxaEFBQUNBQTg4a2ZcIikucG9wKClcbiAgICAgICAgcmV0dXJuIHRlc3Q/Lm5vZGUuZGVzY3JpcHRpb25cbiAgICB9XG5cbiAgICBjb25zdCBnZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ3JvaWVzID0gdGV4dD8uZGF0YS5hbGxQYWdlc3MuZWRnZXMuZmlsdGVyKGUgPT4gZS5ub2RlLl9tZXRhLmlkICE9PSBcIllLWThxaEFBQUNBQTg4a2ZcIilcbiAgICAgICAgcmV0dXJuIGNhdGVncm9pZXNcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIHBhZ2UgaWYgYSBkb2N1bWVudCB3YXMgcmV0cmlldmVkIGZyb20gUHJpc21pY1xuICAgIGlmIChob21lRG9jKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gUmljaFRleHQuYXNUZXh0KGhvbWVEb2MuaGVhZGxpbmUpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkxFWEVMTCBIZWxwIERlc2sgSVQ8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cblxuXG4gICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEdhcD1cIjJyZW1cIlxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVwiMzYwcHggMWZyXCJcbiAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qe2lzTW9iaWxlKCkgJiYgdGV4dCovfVxuICAgICAgICAgICAgICAgICAgICB7LyogICAgPyA8TWVudUFzaWRlTW9iaWxlKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgY2F0ZWdvcmllcz17Z2V0Q2F0ZWdvcmllcygpfSovfVxuICAgICAgICAgICAgICAgICAgICB7LyogICAgLz4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qICAgIDogPE1lbnVBc2lkZSovfVxuICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIGNhdGVnb3JpZXM9e2dldENhdGVnb3JpZXMoKX0qL31cbiAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICB0YWc9eydoZWxwJ30qL31cbiAgICAgICAgICAgICAgICAgICAgey8qICAgIC8+fSovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0IHJlbmRlcj17cmVuZGVyVGV4dCgpfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAobm90Rm91bmQpIHtcbiAgICAgICAgcmV0dXJuIDxOb3RGb3VuZCAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW5lcmd5XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHByZXZpZXdEYXRhIH0pIHtcbi8vICAgICBjb25zdCBhbGxQYWdlcyA9IGF3YWl0IGdldEFsbFBhZ2VzKHByZXZpZXdEYXRhKVxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHByb3BzOiB7XG4vLyAgICAgICAgICAgICB0ZXh0OiBhbGxQYWdlc1swXS5ub2RlLmRlc2NyaXB0aW9uXG4vLyAgICAgICAgIH0sXG4vLyAgICAgfVxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/helpDesk.tsx\n");

/***/ })

});