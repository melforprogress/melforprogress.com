webpackHotUpdate("cms",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Footer.module.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--12-oneOf-0-1!./node_modules/postcss-loader/lib??postcss-1!./src/components/Footer.module.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".Footer-module--paid-for-message--SPfHr {\n  border: 1px solid;\n  width: auto;\n  padding: 7px;\n  display: inline-block;\n  margin: 8px 7px 5px 7px;\n}\n\n.Footer-module--footer-info--2VG_9 {\n  display: inline-block;\n  margin-bottom: 10px\n}\n\n.Footer-module--contact-line--2eKky {\n  font-size: 12px;\n}\n\n.Footer-module--contact-line--2eKky a {\n  cursor: pointer;\n  color: white;\n}\n\n.Footer-module--contact-line--2eKky a:hover {\n  color: white;\n}\n", "", {"version":3,"sources":["/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Footer.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,wBAAwB;CACzB;;AAED;EACE,sBAAsB;EACtB,mBAAmB;CACpB;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,gBAAgB;EAChB,aAAa;CACd;;AAED;EACE,aAAa;CACd","file":"Footer.module.css","sourcesContent":[".paid-for-message {\n  border: 1px solid;\n  width: auto;\n  padding: 7px;\n  display: inline-block;\n  margin: 8px 7px 5px 7px;\n}\n\n.footer-info {\n  display: inline-block;\n  margin-bottom: 10px\n}\n\n.contact-line {\n  font-size: 12px;\n}\n\n.contact-line a {\n  cursor: pointer;\n  color: white;\n}\n\n.contact-line a:hover {\n  color: white;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"paidForMessage": "Footer-module--paid-for-message--SPfHr",
	"footerInfo": "Footer-module--footer-info--2VG_9",
	"contactLine": "Footer-module--contact-line--2eKky"
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
var _jsxFileName="/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Billboard.js";(function(){var enterModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var Billboard=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Billboard,_React$Component);function Billboard(){return _React$Component.apply(this,arguments)||this;}var _proto=Billboard.prototype;_proto.handleFormLoaded=function handleFormLoaded(){setTimeout(function(){document.querySelector("#can-form-area-join-our-campaign-for-progress-2").classList.add("loaded");},100);};_proto.render=function render(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"billboard",__source:{fileName:_jsxFileName,lineNumber:17},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_load_script__WEBPACK_IMPORTED_MODULE_2___default.a,{url:"https://actionnetwork.org/widgets/v3/form/join-our-campaign-for-progress-2?format=js&source=widget&hash="+Math.random()*9999,onLoad:this.handleFormLoaded.bind(this),__source:{fileName:_jsxFileName,lineNumber:19},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PageContent__WEBPACK_IMPORTED_MODULE_4__["default"],{__source:{fileName:_jsxFileName,lineNumber:23},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{id:"headshot",src:_img_content_supercropped_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,__source:{fileName:_jsxFileName,lineNumber:24},__self:this}),this.props.children,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"content",style:{display:'flex',justifyContent:'center',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:26},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",{style:{textAlign:'center'},__source:{fileName:_jsxFileName,lineNumber:27},__self:this},"Join Our Campaign for Progress!")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"can-form-area-join-our-campaign-for-progress-2",__source:{fileName:_jsxFileName,lineNumber:29},__self:this})));};// @ts-ignore
_proto.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);};return Billboard;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);;(function(){var reactHotLoader=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;if(!reactHotLoader){return;}reactHotLoader.register(Billboard,"Billboard","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Billboard.js");})();;(function(){var leaveModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-google-analytics */ "./node_modules/gatsby-plugin-google-analytics/index.js");
/* harmony import */ var gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/social/facebook.svg */ "./src/img/social/facebook.svg");
/* harmony import */ var _img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/social/instagram.svg */ "./src/img/social/instagram.svg");
/* harmony import */ var _img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/social/twitter.svg */ "./src/img/social/twitter.svg");
/* harmony import */ var _img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer.module.css */ "./src/components/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName="/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Footer.js";(function(){var enterModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var Footer=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Footer,_React$Component);function Footer(){return _React$Component.apply(this,arguments)||this;}var _proto=Footer.prototype;_proto.render=function render(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer",{className:"footer has-background-primary-dark has-text-white-ter",__source:{fileName:_jsxFileName,lineNumber:13},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"content has-text-centered has-background-primary-dark has-text-white-ter",__source:{fileName:_jsxFileName,lineNumber:14},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container has-background-primary-dark has-text-white-ter",__source:{fileName:_jsxFileName,lineNumber:15},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"social",__source:{fileName:_jsxFileName,lineNumber:16},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_2__["OutboundLink"],{title:"facebook",target:"_blank",href:"https://www.facebook.com/melforprogress/",__source:{fileName:_jsxFileName,lineNumber:17},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:_img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_3___default.a,alt:"Facebook",style:{width:'1em',height:'1em'},__source:{fileName:_jsxFileName,lineNumber:18},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_2__["OutboundLink"],{title:"twitter",target:"_blank",href:"https://twitter.com/melforprogress",__source:{fileName:_jsxFileName,lineNumber:24},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:"fas fa-lg",src:_img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_5___default.a,alt:"Twitter",style:{width:'1em',height:'1em'},__source:{fileName:_jsxFileName,lineNumber:25},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_2__["OutboundLink"],{title:"instagram",target:"_blank",href:"https://instagram.com/mel.gagarin",__source:{fileName:_jsxFileName,lineNumber:32},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:_img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_4___default.a,alt:"Instagram",style:{width:'1em',height:'1em'},__source:{fileName:_jsxFileName,lineNumber:33},__self:this}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.footerInfo,__source:{fileName:_jsxFileName,lineNumber:40},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.contactLine,__source:{fileName:_jsxFileName,lineNumber:41},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"mailto:info@melforprogress.com",__source:{fileName:_jsxFileName,lineNumber:41},__self:this},"General inquiries: info@melforprogress.com")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.contactLine,__source:{fileName:_jsxFileName,lineNumber:42},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"mailto:press@melforprogress.com",__source:{fileName:_jsxFileName,lineNumber:42},__self:this},"Press inquiries: press@melforprogress.com")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_Footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.paidForMessage,__source:{fileName:_jsxFileName,lineNumber:43},__self:this},"Paid for by Committee to Elect Mel Gagarin")))));};// @ts-ignore
_proto.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);};return Footer;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);var _default=Footer;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;if(!reactHotLoader){return;}reactHotLoader.register(Footer,"Footer","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Footer.js");reactHotLoader.register(_default,"default","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Footer.js");})();;(function(){var leaveModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Footer.module.css":
/*!******************************************!*\
  !*** ./src/components/Footer.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--12-oneOf-0-1!../../node_modules/postcss-loader/lib??postcss-1!./Footer.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./src/components/Footer.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":false}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;



/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-google-analytics */ "./node_modules/gatsby-plugin-google-analytics/index.js");
/* harmony import */ var gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_3__);
var _temp,_jsxFileName="/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Navbar.js";(function(){var enterModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var Navbar=(_temp=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Navbar,_React$Component);function Navbar(props){var _this;_this=_React$Component.call(this,props)||this;_this.toggleHamburger=function(){// toggle the active boolean in the state
_this.setState({active:!_this.state.active},// after state has been updated,
function(){// set the class in state for the navbar accordingly
_this.state.active?_this.setState({navBarActiveClass:'is-active'}):_this.setState({navBarActiveClass:''});});};_this.state={active:false,navBarActiveClass:''};return _this;}var _proto=Navbar.prototype;_proto.render=function render(){var _this2=this;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation",id:"navbar",__source:{fileName:_jsxFileName,lineNumber:36},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container",__source:{fileName:_jsxFileName,lineNumber:42},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-brand",__source:{fileName:_jsxFileName,lineNumber:43},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/",className:"navbar-item",title:"Logo",__source:{fileName:_jsxFileName,lineNumber:44},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-title",__source:{fileName:_jsxFileName,lineNumber:45},__self:this},"Mel for Progress")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function onClick(){return _this2.toggleHamburger();},__source:{fileName:_jsxFileName,lineNumber:48},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:53},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:54},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:55},__self:this}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass,__source:{fileName:_jsxFileName,lineNumber:58},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-start has-text-centered",__source:{fileName:_jsxFileName,lineNumber:62},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item navbar-link",to:"/",__source:{fileName:_jsxFileName,lineNumber:63},__self:this},"Home"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item navbar-link",to:"/issues",__source:{fileName:_jsxFileName,lineNumber:66},__self:this},"Issues"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_3__["OutboundLink"],{className:"navbar-item navbar-link",href:"https://secure.actblue.com/donate/melforprogress",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:69},__self:this},"Donate")))));};// @ts-ignore
_proto.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);};return Navbar;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component),_temp);var _default=Navbar;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;if(!reactHotLoader){return;}reactHotLoader.register(Navbar,"Navbar","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Navbar.js");reactHotLoader.register(_default,"default","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Navbar.js");})();;(function(){var leaveModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.1a9d2e3aed839a58f753.hot-update.js.map