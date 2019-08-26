webpackHotUpdate("cms",{

/***/ "./node_modules/gatsby-plugin-amplitude-analytics/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gatsby-plugin-amplitude-analytics/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.OutboundLink = OutboundLink;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function OutboundLink(props) {
  return _react.default.createElement("a", (0, _extends2.default)({}, props, {
    onClick: function onClick(e) {
      if (typeof props.onClick === "function") {
        props.onClick();
      }

      var redirect = true;

      if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) {
        redirect = false;
      }

      if (props.target && props.target.toLowerCase() !== "_self") {
        redirect = false;
      }

      if (typeof window.amplitude === 'object') {
        window.amplitude.getInstance().logEvent(window.amplitudeEventTypes.outboundLinkClick, {
          href: props.href
        }, function () {
          if (redirect) {
            document.location = props.href;
          }
        });
      } else {
        if (redirect) {
          document.location = props.href;
        }
      }

      return false;
    }
  }));
}

OutboundLink.propTypes = {
  href: _propTypes.default.string,
  target: _propTypes.default.string,
  onClick: _propTypes.default.func
};

; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/kathy/Documents/mel2020/melforprogress.com/node_modules/gatsby-plugin-amplitude-analytics/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/kathy/Documents/mel2020/melforprogress.com/node_modules/gatsby-plugin-amplitude-analytics/index.js"); } })(); 

/***/ }),

/***/ "./src/components/Billboard.js":
/*!*************************************!*\
  !*** ./src/components/Billboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Billboard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-load-script */ "./node_modules/react-load-script/lib/index.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_content_supercropped_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/content/supercropped.jpg */ "./src/img/content/supercropped.jpg");
/* harmony import */ var _img_content_supercropped_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_content_supercropped_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_plugin_amplitude_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-amplitude-analytics */ "./node_modules/gatsby-plugin-amplitude-analytics/index.js");
/* harmony import */ var gatsby_plugin_amplitude_analytics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_amplitude_analytics__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName="/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Billboard.js";(function(){var enterModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var Billboard=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Billboard,_React$Component);function Billboard(){return _React$Component.apply(this,arguments)||this;}var _proto=Billboard.prototype;_proto.handleFormLoaded=function handleFormLoaded(){setTimeout(function(){// console.log(document.querySelector("#can-form-area-join-our-campaign-for-progress-2"))
return document.querySelector("#can-form-area-join-our-campaign-for-progress-2").classList.add("loaded");},500);};_proto.render=function render(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:18},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link",{href:'https://actionnetwork.org/css/style-embed-v3.css',rel:'stylesheet',type:'text/css',__source:{fileName:_jsxFileName,lineNumber:19},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{display:'flex'},__source:{fileName:_jsxFileName,lineNumber:20},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"can-form-area-join-our-campaign-for-progress-2",style:{'width':'100%'},__source:{fileName:_jsxFileName,lineNumber:21},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_2___default.a,{url:'https://actionnetwork.org/widgets/v3/form/join-our-campaign-for-progress-2?format=js&source=widget',onCreate:this.handleFormLoaded.bind(this),__source:{fileName:_jsxFileName,lineNumber:25},__self:this}));};// @ts-ignore
_proto.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);};return Billboard;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);;(function(){var reactHotLoader=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;if(!reactHotLoader){return;}reactHotLoader.register(Billboard,"Billboard","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Billboard.js");})();;(function(){var leaveModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.c79129fb429766088a10.hot-update.js.map