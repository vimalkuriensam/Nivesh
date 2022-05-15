"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkNivesh"] = self["webpackChunkNivesh"] || []).push([["src_Component_Top10_api_jsx"],{

/***/ "./src/Component/Top10/api.jsx":
/*!*************************************!*\
  !*** ./src/Component/Top10/api.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style.css */ \"./src/style.css\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar api = /*#__PURE__*/function (_Component) {\n  _inherits(api, _Component);\n\n  var _super = _createSuper(api);\n\n  function api() {\n    var _this;\n\n    _classCallCheck(this, api);\n\n    _this = _super.call(this);\n    _this.state = {\n      items: [],\n      MainTitle: [],\n      isLoaded: false\n    };\n    return _this;\n  }\n\n  _createClass(api, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var url = 'https://api.nivesh.com/API/getSchemesDataV2';\n      var postBody = {\n        ProductCategoryId: this.props.productCategoryId,\n        ClientCode: \"\",\n        LanguageId: 1,\n        device: \"\",\n        AMCCode: \"\",\n        SebiCategoryId: this.props.sebiCategoryId ? this.props.sebiCategoryId : \"\",\n        SebiSubCategoryId: this.props.sebiSubCategoryId ? this.props.sebiSubCategoryId : \"\",\n        DefaultProductId: this.props.defaultProductId ? this.props.defaultProductId : \"\"\n      };\n      var requestMetadata = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(postBody)\n      };\n      fetch(url, requestMetadata).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        _this2.setState({\n          isLoaded: true,\n          items: data.ObjectResponse.SchemeDataList,\n          MainTitle: data.ObjectResponse.TitleResponse\n        });\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      var _nextState$MainTitle, _this$state$MainTitle;\n\n      if (nextProps.productCategoryId !== this.props.productCategoryId) {\n        return true;\n      } else if (nextProps.sebiCategoryId !== this.props.sebiCategoryId) {\n        return true;\n      } else if (nextProps.sebiSubCategoryId !== this.props.sebiSubCategoryId) {\n        return true;\n      } else if (nextProps.defaultProductId !== this.props.defaultProductId) {\n        return true;\n      } else if (((_nextState$MainTitle = nextState.MainTitle) === null || _nextState$MainTitle === void 0 ? void 0 : _nextState$MainTitle.Title) !== ((_this$state$MainTitle = this.state.MainTitle) === null || _this$state$MainTitle === void 0 ? void 0 : _this$state$MainTitle.Title)) {\n        return true;\n      } else if (JSON.stringify(nextState.items) !== JSON.stringify(this.state.items)) {\n        return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      var _this3 = this;\n\n      var url = 'https://api.nivesh.com/API/getSchemesDataV2';\n      var postBody = {\n        ProductCategoryId: this.props.productCategoryId,\n        ClientCode: \"\",\n        LanguageId: 1,\n        device: \"\",\n        AMCCode: \"\",\n        SebiCategoryId: this.props.sebiCategoryId ? this.props.sebiCategoryId : \"\",\n        SebiSubCategoryId: this.props.sebiSubCategoryId ? this.props.sebiSubCategoryId : \"\",\n        DefaultProductId: this.props.defaultProductId ? this.props.defaultProductId : \"\"\n      };\n      var requestMetadata = {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(postBody)\n      };\n      this.setState({\n        isLoaded: false\n      });\n      fetch(url, requestMetadata).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        _this3.setState({\n          isLoaded: true,\n          items: data.ObjectResponse.SchemeDataList,\n          MainTitle: data.ObjectResponse.TitleResponse\n        });\n      }).catch(function (error) {\n        console.log(error);\n\n        _this3.setState({\n          items: null\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _MainTitle$,\n          _this4 = this;\n\n      var _this$state = this.state,\n          isLoaded = _this$state.isLoaded,\n          items = _this$state.items,\n          MainTitle = _this$state.MainTitle;\n      if (!isLoaded) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h1\", {\n          children: \" Fund Tables are Loading \"\n        })\n      });\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n        className: \"api\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h2\", {\n          children: MainTitle && ((_MainTitle$ = MainTitle[1]) === null || _MainTitle$ === void 0 ? void 0 : _MainTitle$.Title)\n        }), items && items.map(function (item) {\n          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n            className: \"api-flex\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n              className: \"flex-container\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n                className: \"flex-item fg3\",\n                children: item.SchemeName\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n                className: \"flex-item\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"a\", {\n                  href: \"https://app.nivesh.com/Home/Index?SchemeCode=\".concat(item.SchemeCode, \"&selectedcategoryId=\").concat(_this4.props.productCategoryId),\n                  target: \"_blank\",\n                  className: \"api-button\",\n                  children: \"Invest Now\"\n                })\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n              className: \"flex-container1\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n                className: \"flex-item1\",\n                children: \"1 Year\"\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n                className: \"flex-item1\",\n                children: \"2 Year\"\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n                className: \"flex-item1\",\n                children: \"3 Year\"\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n                className: \"flex-item1\",\n                children: \"5 Year\"\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n              className: \"flex-container2\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n                className: \"flex-item1\",\n                children: [item.OneYearReturn, \"%\"]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n                className: \"flex-item1\",\n                children: [item.TwoYearReturn, \"%\"]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n                className: \"flex-item1\",\n                children: [item.ThreeYearReturn, \"%\"]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n                className: \"flex-item1\",\n                children: [item.FiveYearReturn, \"%\"]\n              })]\n            })]\n          }, item.SchemeCode);\n        })]\n      });\n    }\n  }]);\n\n  return api;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\n\n//# sourceURL=webpack://Nivesh/./src/Component/Top10/api.jsx?");

/***/ })

}]);