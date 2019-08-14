webpackHotUpdate("cms",{

/***/ "./node_modules/gatsby-plugin-google-analytics/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-analytics/index.js ***!
  \**************************************************************/
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
        props.onClick(e);
      }

      var redirect = true;

      if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) {
        redirect = false;
      }

      if (props.target && props.target.toLowerCase() !== "_self") {
        redirect = false;
      }

      if (window.ga) {
        window.ga("send", "event", {
          eventCategory: "Outbound Link",
          eventAction: "click",
          eventLabel: props.href,
          transport: redirect ? "beacon" : "",
          hitCallback: function hitCallback() {
            if (redirect) {
              document.location = props.href;
            }
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

; /* eslint-disable global-require, import/no-unresolved, no-var, camelcase, func-names */ (function register() { /* react-hot-loader/webpack */ var safe_require = function safe_require() { return  false ? undefined : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"); }; var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : safe_require()).default; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/kathy/Documents/mel2020/melforprogress.com/node_modules/gatsby-plugin-google-analytics/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/kathy/Documents/mel2020/melforprogress.com/node_modules/gatsby-plugin-google-analytics/index.js"); } })(); 

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
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-google-analytics */ "./node_modules/gatsby-plugin-google-analytics/index.js");
/* harmony import */ var gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/social/facebook.svg */ "./src/img/social/facebook.svg");
/* harmony import */ var _img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/social/instagram.svg */ "./src/img/social/instagram.svg");
/* harmony import */ var _img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/social/twitter.svg */ "./src/img/social/twitter.svg");
/* harmony import */ var _img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName="/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Footer.js";(function(){var enterModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var Footer=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Footer,_React$Component);function Footer(){return _React$Component.apply(this,arguments)||this;}var _proto=Footer.prototype;_proto.render=function render(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer",{className:"footer has-background-primary-dark has-text-white-ter",__source:{fileName:_jsxFileName,lineNumber:12},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"content has-text-centered has-background-primary-dark has-text-white-ter",__source:{fileName:_jsxFileName,lineNumber:13},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container has-background-primary-dark has-text-white-ter",__source:{fileName:_jsxFileName,lineNumber:14},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"columns",__source:{fileName:_jsxFileName,lineNumber:15},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"column is-4",__source:{fileName:_jsxFileName,lineNumber:16},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section",{className:"menu",__source:{fileName:_jsxFileName,lineNumber:17},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:"menu-list",__source:{fileName:_jsxFileName,lineNumber:18},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:19},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/",className:"navbar-item",__source:{fileName:_jsxFileName,lineNumber:20},__self:this},"Home")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:24},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item",to:"/issues",__source:{fileName:_jsxFileName,lineNumber:25},__self:this},"Issues"))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"column is-4",__source:{fileName:_jsxFileName,lineNumber:32},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section",{__source:{fileName:_jsxFileName,lineNumber:33},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:"menu-list",__source:{fileName:_jsxFileName,lineNumber:34},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:35},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_3__["OutboundLink"],{className:"navbar-item navbar-link",href:"https://secure.actblue.com/donate/melforprogress",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:36},__self:this},"Donate"))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"column is-4 social",__source:{fileName:_jsxFileName,lineNumber:45},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{title:"facebook",target:"_blank",href:"https://www.facebook.com/melforprogress/",__source:{fileName:_jsxFileName,lineNumber:46},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:_img_social_facebook_svg__WEBPACK_IMPORTED_MODULE_4___default.a,alt:"Facebook",style:{width:'1em',height:'1em'},__source:{fileName:_jsxFileName,lineNumber:47},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{title:"twitter",target:"_blank",href:"https://twitter.com/melforprogress",__source:{fileName:_jsxFileName,lineNumber:53},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{className:"fas fa-lg",src:_img_social_twitter_svg__WEBPACK_IMPORTED_MODULE_6___default.a,alt:"Twitter",style:{width:'1em',height:'1em'},__source:{fileName:_jsxFileName,lineNumber:54},__self:this})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{title:"instagram",target:"_blank",href:"https://instagram.com/mel.gagarin",__source:{fileName:_jsxFileName,lineNumber:61},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:_img_social_instagram_svg__WEBPACK_IMPORTED_MODULE_5___default.a,alt:"Instagram",style:{width:'1em',height:'1em'},__source:{fileName:_jsxFileName,lineNumber:62},__self:this})))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:70},__self:this},"Paid for by Committee to Elect Mel Gagarin"))));};// @ts-ignore
_proto.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);};return Footer;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);var _default=Footer;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;if(!reactHotLoader){return;}reactHotLoader.register(Footer,"Footer","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Footer.js");reactHotLoader.register(_default,"default","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Footer.js");})();;(function(){var leaveModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all.sass */ "./src/components/all.sass");
/* harmony import */ var _all_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_all_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SiteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SiteMetadata */ "./src/components/SiteMetadata.js");
var _jsxFileName="/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Layout.js";(function(){var enterModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;enterModule&&enterModule(module);})();var __signature__=typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal.default.signature:function(a){return a;};var TemplateWrapper=function TemplateWrapper(_ref){var children=_ref.children;var _useSiteMetadata=Object(_SiteMetadata__WEBPACK_IMPORTED_MODULE_5__["default"])(),title=_useSiteMetadata.title,description=_useSiteMetadata.description;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:11},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"],{__source:{fileName:_jsxFileName,lineNumber:12},__self:this},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",{lang:"en",__source:{fileName:_jsxFileName,lineNumber:13},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title",{__source:{fileName:_jsxFileName,lineNumber:14},__self:this},title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"description",content:description,__source:{fileName:_jsxFileName,lineNumber:15},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{href:'https://actionnetwork.org/css/style-embed-v3.css',rel:'stylesheet',type:'text/css',__source:{fileName:_jsxFileName,lineNumber:16},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Oswald&display=swap",rel:"stylesheet",__source:{fileName:_jsxFileName,lineNumber:17},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto&display=swap",rel:"stylesheet",__source:{fileName:_jsxFileName,lineNumber:18},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/apple-touch-icon.png",__source:{fileName:_jsxFileName,lineNumber:19},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"theme-color",content:"#fff",__source:{fileName:_jsxFileName,lineNumber:24},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:type",content:"business.business",__source:{fileName:_jsxFileName,lineNumber:26},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:title",content:title,__source:{fileName:_jsxFileName,lineNumber:27},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:url",content:"/",__source:{fileName:_jsxFileName,lineNumber:28},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg",__source:{fileName:_jsxFileName,lineNumber:29},__self:this})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"],{__source:{fileName:_jsxFileName,lineNumber:31},__self:this}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"template-content",__source:{fileName:_jsxFileName,lineNumber:32},__self:this},children),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"],{__source:{fileName:_jsxFileName,lineNumber:33},__self:this}));};__signature__(TemplateWrapper,"useSiteMetadata{{ title, description }}",function(){return[_SiteMetadata__WEBPACK_IMPORTED_MODULE_5__["default"]];});var _default=TemplateWrapper;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;if(!reactHotLoader){return;}reactHotLoader.register(TemplateWrapper,"TemplateWrapper","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Layout.js");reactHotLoader.register(_default,"default","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Layout.js");})();;(function(){var leaveModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

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
_this.state.active?_this.setState({navBarActiveClass:'is-active'}):_this.setState({navBarActiveClass:''});});};_this.state={active:false,navBarActiveClass:''};return _this;}var _proto=Navbar.prototype;_proto.render=function render(){var _this2=this;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation",id:"navbar",__source:{fileName:_jsxFileName,lineNumber:36},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container",__source:{fileName:_jsxFileName,lineNumber:42},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-brand",__source:{fileName:_jsxFileName,lineNumber:43},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/",className:"navbar-item",title:"Logo",__source:{fileName:_jsxFileName,lineNumber:44},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-title",__source:{fileName:_jsxFileName,lineNumber:45},__self:this},"Mel for Progress")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function onClick(){return _this2.toggleHamburger();},__source:{fileName:_jsxFileName,lineNumber:48},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:53},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:54},__self:this}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:55},__self:this}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass,__source:{fileName:_jsxFileName,lineNumber:58},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"navbar-start has-text-centered",__source:{fileName:_jsxFileName,lineNumber:62},__self:this},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:"navbar-item navbar-link",to:"/issues",__source:{fileName:_jsxFileName,lineNumber:63},__self:this},"Issues"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_plugin_google_analytics__WEBPACK_IMPORTED_MODULE_3__["OutboundLink"],{className:"navbar-item navbar-link",href:"https://secure.actblue.com/donate/melforprogress",target:"_blank",__source:{fileName:_jsxFileName,lineNumber:66},__self:this},"Donate")))));};// @ts-ignore
_proto.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){// @ts-ignore
this[key]=eval(code);};return Navbar;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component),_temp);var _default=Navbar;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function(){var reactHotLoader=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;if(!reactHotLoader){return;}reactHotLoader.register(Navbar,"Navbar","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Navbar.js");reactHotLoader.register(_default,"default","/Users/kathy/Documents/mel2020/melforprogress.com/src/components/Navbar.js");})();;(function(){var leaveModule=(typeof reactHotLoaderGlobal!=='undefined'?reactHotLoaderGlobal:__webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;leaveModule&&leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/gatsby-plugin-netlify-cms/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.33e7891dbd017a316d2a.hot-update.js.map