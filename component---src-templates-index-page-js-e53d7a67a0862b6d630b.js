(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{203:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=(r(206),r(208)),i=(r(228),r(229),r(257)),s=r.n(i),c=r(258),u=r.n(c),l=r(222);var d=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.handleFormLoaded=function(){setTimeout(function(){document.querySelector("#can-form-area-join-our-campaign-for-progress-2").classList.add("loaded")},100)},a.render=function(){return o.a.createElement("div",{id:"billboard"},o.a.createElement(s.a,{url:"https://actionnetwork.org/widgets/v3/form/join-our-campaign-for-progress-2?format=js&source=widget&hash="+9999*Math.random(),onLoad:this.handleFormLoaded.bind(this)}),o.a.createElement(l.a,null,o.a.createElement("img",{id:"headshot",src:u.a}),this.props.children,o.a.createElement("div",{className:"content",style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("h1",{style:{textAlign:"center"}},"Join Our Campaign for Progress!")),o.a.createElement("div",{id:"can-form-area-join-our-campaign-for-progress-2"})))},n}(o.a.Component);r.d(t,"IndexPageTemplate",function(){return p});var p=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),o.a.createElement("div",null,o.a.createElement(d,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section"},o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column is-10 is-offset-1"},o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content"},o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("h1",{className:"title"},"Mel Gagarin Is Running for Congress")),o.a.createElement("div",null,o.a.createElement("div",null,"Melquiades Gagarin is a stay-at-home dad and community organizer who is running to represent New York’s 6th Congressional District to put people before politics, human dignity above corporate greed, and the needs of the many above the benefit of the wealthy and the powerful."),o.a.createElement("br",null),o.a.createElement("div",null,"Born in Elmhurst to a Puerto-Rican working-class mother and a Filipino immigrant father, he was raised by his mom and abuela. He went to Resurrection Ascension and Archbishop Molloy in district before attending American University in Washington, DC. From working as a congressional aide representing parts of New York’s 6th Congressional District, to advocating on the Hill alongside criminal justice reformers, Mel has always been dedicated to fighting for progress. He currently resides in Kew Gardens with his wife Aleda, their three children, and their dachshund. "))))))))))};t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(p,null))}},222:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){return o.a.createElement("div",{className:"page-content"},e.children)}},257:function(e,t,r){"use strict";r(29),r(30),r(14),r(50),r(39),r(132),r(92),r(94),Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),i=(n=a)&&n.__esModule?n:{default:n},s=r(52);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scriptLoaderId="id"+r.constructor.idCount++,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["default"].Component),o(t,[{key:"componentDidMount",value:function(){var e,t,r,n=this.props,o=n.onError,a=n.onLoad,i=n.url;this.constructor.loadedScripts[i]?a():this.constructor.erroredScripts[i]?o():this.constructor.scriptObservers[i]?this.constructor.scriptObservers[i][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[i]=(e={},t=this.scriptLoaderId,r=this.props,t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e),this.createScript())}},{key:"componentWillUnmount",value:function(){var e=this.props.url,t=this.constructor.scriptObservers[e];t&&delete t[this.scriptLoaderId]}},{key:"createScript",value:function(){var e=this,t=this.props,r=t.onCreate,n=t.url,o=t.attributes,a=document.createElement("script");r(),o&&Object.keys(o).forEach(function(e){return a.setAttribute(e,o[e])}),a.src=n,a.hasAttribute("async")||(a.async=1);var i=function(t){var r=e.constructor.scriptObservers[n];Object.keys(r).forEach(function(o){t(r[o])&&delete e.constructor.scriptObservers[n][e.scriptLoaderId]})};a.onload=function(){e.constructor.loadedScripts[n]=!0,i(function(e){return e.onLoad(),!0})},a.onerror=function(){e.constructor.erroredScripts[n]=!0,i(function(e){return e.onError(),!0})},document.body.appendChild(a)}},{key:"render",value:function(){return null}}]),t}();c.propTypes={attributes:s.PropTypes.object,onCreate:s.PropTypes.func,onError:s.PropTypes.func.isRequired,onLoad:s.PropTypes.func.isRequired,url:s.PropTypes.string.isRequired},c.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},c.scriptObservers={},c.loadedScripts={},c.erroredScripts={},c.idCount=0,t.default=c,e.exports=t.default},258:function(e,t,r){e.exports=r.p+"static/supercropped-6fc5eb8ae28588c7053b01059b4ea988.jpg"}}]);
//# sourceMappingURL=component---src-templates-index-page-js-e53d7a67a0862b6d630b.js.map