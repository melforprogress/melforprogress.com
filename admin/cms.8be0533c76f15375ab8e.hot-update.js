webpackHotUpdate("cms",{

/***/ "./node_modules/react-load-script/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-load-script/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Script = function (_React$Component) {
  _inherits(Script, _React$Component);

  // A dictionary mapping script URL to a boolean value indicating if the script
  // has failed to load.


  // A dictionary mapping script URLs to a dictionary mapping
  // component key to component for all components that are waiting
  // for the script to load.
  function Script(props) {
    _classCallCheck(this, Script);

    var _this = _possibleConstructorReturn(this, (Script.__proto__ || Object.getPrototypeOf(Script)).call(this, props));

    _this.scriptLoaderId = 'id' + _this.constructor.idCount++; // eslint-disable-line space-unary-ops, no-plusplus
    return _this;
  }

  // A counter used to generate a unique id for each component that uses
  // ScriptLoaderMixin.


  // A dictionary mapping script URL to a boolean value indicating if the script
  // has already been loaded.


  _createClass(Script, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          onError = _props.onError,
          onLoad = _props.onLoad,
          url = _props.url;


      if (this.constructor.loadedScripts[url]) {
        onLoad();
        return;
      }

      if (this.constructor.erroredScripts[url]) {
        onError();
        return;
      }

      // If the script is loading, add the component to the script's observers
      // and return. Otherwise, initialize the script's observers with the component
      // and start loading the script.
      if (this.constructor.scriptObservers[url]) {
        this.constructor.scriptObservers[url][this.scriptLoaderId] = this.props;
        return;
      }

      this.constructor.scriptObservers[url] = _defineProperty({}, this.scriptLoaderId, this.props);

      this.createScript();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var url = this.props.url;

      var observers = this.constructor.scriptObservers[url];

      // If the component is waiting for the script to load, remove the
      // component from the script's observers before unmounting the component.
      if (observers) {
        delete observers[this.scriptLoaderId];
      }
    }
  }, {
    key: 'createScript',
    value: function createScript() {
      var _this2 = this;

      var _props2 = this.props,
          onCreate = _props2.onCreate,
          url = _props2.url,
          attributes = _props2.attributes;

      var script = document.createElement('script');

      onCreate();

      // add 'data-' or non standard attributes to the script tag
      if (attributes) {
        Object.keys(attributes).forEach(function (prop) {
          return script.setAttribute(prop, attributes[prop]);
        });
      }

      script.src = url;

      // default async to true if not set with custom attributes
      if (!script.hasAttribute('async')) {
        script.async = 1;
      }

      var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(shouldRemoveObserver) {
        var observers = _this2.constructor.scriptObservers[url];
        Object.keys(observers).forEach(function (key) {
          if (shouldRemoveObserver(observers[key])) {
            delete _this2.constructor.scriptObservers[url][_this2.scriptLoaderId];
          }
        });
      };
      script.onload = function () {
        _this2.constructor.loadedScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          observer.onLoad();
          return true;
        });
      };

      script.onerror = function () {
        _this2.constructor.erroredScripts[url] = true;
        callObserverFuncAndRemoveObserver(function (observer) {
          observer.onError();
          return true;
        });
      };

      document.body.appendChild(script);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Script;
}(_react2.default.Component);

Script.propTypes = {
  attributes: _propTypes.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onCreate: _propTypes.PropTypes.func,
  onError: _propTypes.PropTypes.func.isRequired,
  onLoad: _propTypes.PropTypes.func.isRequired,
  url: _propTypes.PropTypes.string.isRequired
};
Script.defaultProps = {
  attributes: {},
  onCreate: function onCreate() {},
  onError: function onError() {},
  onLoad: function onLoad() {} };
Script.scriptObservers = {};
Script.loadedScripts = {};
Script.erroredScripts = {};
Script.idCount = 0;
exports.default = Script;
module.exports = exports['default'];

; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/kathy/Documents/mel2020/melforprogress.com/node_modules/react-load-script/lib/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/kathy/Documents/mel2020/melforprogress.com/node_modules/react-load-script/lib/index.js"); } })(); 

/***/ }),

/***/ "./src/components/Billboard.js":
/*!*************************************!*\
  !*** ./src/components/Billboard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-load-script */ "./node_modules/react-load-script/lib/index.js");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_content_supercropped_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/content/supercropped.jpg */ "./src/img/content/supercropped.jpg");
/* harmony import */ var _img_content_supercropped_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_content_supercropped_jpg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName="/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Billboard.js";(function(){var enterModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var _default=function _default(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:6},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{display:'flex',paddingTop:'72px'},__source:{fileName:_jsxFileName,lineNumber:7},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_img_content_supercropped_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,__source:{fileName:_jsxFileName,lineNumber:8},__self:this})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_1___default.a,{url:'https://actionnetwork.org/widgets/v3/form/join-caban-for-queens-full?format=js&source=widget',onCreate:handleFormLoaded,__source:{fileName:_jsxFileName,lineNumber:10},__self:this}));};/* harmony default export */ __webpack_exports__["default"] = (_default);function handleFormLoaded(){setTimeout(function(){return document.querySelector("#form-area").classList.add("loaded");},500);};(function(){var reactHotLoader=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;if(!reactHotLoader){return;}reactHotLoader.register(handleFormLoaded,"handleFormLoaded","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Billboard.js");reactHotLoader.register(_default,"default","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Billboard.js");})();;(function(){var leaveModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.8be0533c76f15375ab8e.hot-update.js.map