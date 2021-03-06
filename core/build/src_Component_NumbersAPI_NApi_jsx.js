"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkNivesh"] = self["webpackChunkNivesh"] || []).push([["src_Component_NumbersAPI_NApi_jsx"],{

/***/ "./src/Component/NumbersAPI/NApi.jsx":
/*!*******************************************!*\
  !*** ./src/Component/NumbersAPI/NApi.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NApi\": function() { return /* binding */ NApi; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/withTranslation.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar NApi = /*#__PURE__*/function (_Component) {\n  _inherits(NApi, _Component);\n\n  var _super = _createSuper(NApi);\n\n  function NApi() {\n    var _this;\n\n    _classCallCheck(this, NApi);\n\n    _this = _super.call(this);\n    _this.state = {\n      items: [],\n      isLoaded: false\n    };\n    return _this;\n  }\n\n  _createClass(NApi, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var url = 'https://api.nivesh.com/API/GetSummaryDetails';\n      var postBody = {\n        TotalClient: \"\",\n        TotalPartner: \"\",\n        TotalPartnerOverCities: \"\",\n        NoOfTransaction: \"\",\n        TotalTransactionValue: \"\"\n      };\n      var requestMetadata = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          'token': '636F8F63-06C4-4D95-8562-392B34025FB0'\n        },\n        body: JSON.stringify(postBody)\n      };\n      fetch(url, requestMetadata).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        _this2.setState({\n          isLoaded: true,\n          items: data.SummaryDetailsList\n        });\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          isLoaded = _this$state.isLoaded,\n          items = _this$state.items;\n      var t = this.props.t;\n      if (!isLoaded) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        children: \"Loading...\"\n      });\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        id: \"about-stats\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n          className: \"container container-wrapper\",\n          children: items && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"row row justify-content-center align-items-center\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n              className: \"col-lg-3 col-md-6 col-12 mb-4\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \"card-box\",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                  className: \"text-white\",\n                  children: items.TotalPartner.toLocaleString('en-IN', {\n                    maximumFractionDigits: 0\n                  })\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h4\", {\n                  className: \"text-white\",\n                  children: [t(\"Home:hOME61\"), \" \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                    children: items.TotalPartnerOverCities.toLocaleString('en-IN', {\n                      maximumFractionDigits: 0\n                    })\n                  }), \" \", t(\"Home:hOME61-A\")]\n                })]\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n              className: \"col-lg-3 col-md-6 col-12 mb-4\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \"card-box\",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                  className: \"text-white\",\n                  children: items.TotalClient.toLocaleString('en-IN', {\n                    maximumFractionDigits: 0\n                  })\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h4\", {\n                  className: \"text-white\",\n                  children: t(\"Home:hOME62\")\n                })]\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n              className: \"col-lg-3 col-md-6 col-12 mb-4\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \"card-box\",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                  className: \"text-white\",\n                  children: items.NoOfTransaction.toLocaleString('en-IN', {\n                    maximumFractionDigits: 0\n                  })\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h4\", {\n                  className: \"text-white\",\n                  children: t(\"Home:hOME63\")\n                })]\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n              className: \"col-lg-3 col-md-6 col-12 mb-4\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \"card-box\",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h2\", {\n                  className: \"text-white\",\n                  children: [\"Rs. \", parseInt(items.TotalTransactionValue).toLocaleString('en-IN', {\n                    maximumFractionDigits: 0\n                  })]\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h4\", {\n                  className: \"text-white\",\n                  children: t(\"Home:hOME64\")\n                })]\n              })\n            })]\n          })\n        })\n      });\n    }\n  }]);\n\n  return NApi;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.withTranslation)()(NApi));\n\n//# sourceURL=webpack://Nivesh/./src/Component/NumbersAPI/NApi.jsx?");

/***/ })

}]);