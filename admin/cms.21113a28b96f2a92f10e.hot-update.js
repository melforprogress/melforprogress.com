webpackHotUpdate("cms",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Billboard.module.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--12-oneOf-0-1!./node_modules/postcss-loader/lib??postcss-1!./src/components/Billboard.module.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".Billboard-module--action-network-area--3fveC {\n  height: 400px;\n}\n", "", {"version":3,"sources":["/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Billboard.module.css"],"names":[],"mappings":"AAAA;EACE,cAAc;CACf","file":"Billboard.module.css","sourcesContent":[".action-network-area {\n  height: 400px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"actionNetworkArea": "Billboard-module--action-network-area--3fveC"
};

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
/* harmony import */ var _PageContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageContent */ "./src/components/PageContent.js");
/* harmony import */ var _Billboard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Billboard.module.css */ "./src/components/Billboard.module.css");
/* harmony import */ var _Billboard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Billboard_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName="/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Billboard.js";(function(){var enterModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var Billboard=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Billboard,_React$Component);function Billboard(){return _React$Component.apply(this,arguments)||this;}var _proto=Billboard.prototype;_proto.handleFormLoaded=function handleFormLoaded(){var _this=this;setTimeout(function(){console.log("checking....");var element=document.querySelector("#can-form-area-join-our-campaign-for-progress-2");console.log("element=",element);if(!element){console.log("NOT FOUND");return _this.handleFormLoaded();}console.log('adding to element classList',JSON.stringify(element.classList));element.classList.add("loaded");console.log("now it's ",element,JSON.stringify(element.classList));},100);};_proto.render=function render(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"billboard",__source:{fileName:_jsxFileName,lineNumber:28},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_2___default.a,{url:"https://actionnetwork.org/widgets/v3/form/join-our-campaign-for-progress-2?format=js&source=widget",onLoad:this.handleFormLoaded.bind(this),__source:{fileName:_jsxFileName,lineNumber:29},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PageContent__WEBPACK_IMPORTED_MODULE_4__["default"],{__source:{fileName:_jsxFileName,lineNumber:33},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{id:"headshot",src:_img_content_supercropped_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,__source:{fileName:_jsxFileName,lineNumber:34},__self:this}),this.props.children,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"content",style:{display:'flex',justifyContent:'center',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:36},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",{style:{textAlign:'center'},__source:{fileName:_jsxFileName,lineNumber:37},__self:this},"Join Our Campaign for Progress!")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"can-form-area-join-our-campaign-for-progress-2",className:_Billboard_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.actionNetworkArea,__source:{fileName:_jsxFileName,lineNumber:39},__self:this})));};// @ts-ignore
_proto.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);};return Billboard;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);;(function(){var reactHotLoader=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;if(!reactHotLoader){return;}reactHotLoader.register(Billboard,"Billboard","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Billboard.js");})();;(function(){var leaveModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Billboard.module.css":
/*!*********************************************!*\
  !*** ./src/components/Billboard.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--12-oneOf-0-1!../../node_modules/postcss-loader/lib??postcss-1!./Billboard.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Billboard.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":false}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;



/***/ })

})
//# sourceMappingURL=cms.21113a28b96f2a92f10e.hot-update.js.map