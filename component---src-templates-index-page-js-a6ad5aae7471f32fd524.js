(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(216),o=a(351),c=a.n(o),i=a(352),l=a.n(i),u=a(213),m=a(353),d=a.n(m),p=a(354),f=a.n(p);a(355);var b=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={randomHash:1e3*Math.random()},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.handleFormLoaded=function(){setTimeout(function(){document.querySelector("#can-form-area-join-our-campaign-for-progress-2").classList.add("loaded")},100)},s.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{url:"https://actionnetwork.org/widgets/v3/form/join-our-campaign-for-progress-2?format=js&source=widget&hash="+this.state.randomHash,onLoad:this.handleFormLoaded.bind(this)}),r.a.createElement("div",{id:"can-form-area-join-our-campaign-for-progress-2"}))},n}(r.a.Component);a(18),a(30),a(31),a(14),a(50);var g={tablet:"(min-width: 768px)"},h=function(e){var t=e.sizeSrcMap,a=e.src,n=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["sizeSrcMap","src"]);return r.a.createElement("picture",null,Object.keys(t).map(function(e){return r.a.createElement("source",{media:g[e]||g.tablet,srcSet:t[e]})}),r.a.createElement("img",Object.assign({src:a},n)))},E=function(e){var t=e.children;return r.a.createElement("div",{className:d.a.billboard},r.a.createElement(u.a,null,r.a.createElement(h,{id:"headshot",className:d.a.heroImage,src:c.a,sizeSrcMap:{tablet:l.a}}),t))},v=(a(225),a(217)),y=a(218),N=a(215),_=a(219),w=function(e){var t=e.children;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"underlined"},t)))};var k=[5,10,15,25,100],O=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={selectedAmount:k[3]},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement("div",{className:"donate-picker--container"},r.a.createElement(w,null,r.a.createElement(v.a,{id:N.b.donate.header,defaultMessage:"A Grassroots Campaign"})),r.a.createElement("p",{className:"intro_para"},r.a.createElement(v.a,{id:N.b.donate.description,defaultMessage:Object(_.b)("Mel is not accepting donations from corporate PACs, real estate developers, or the\n            fossil fuel industry, so as a congressman he will answer to his neighbors, not to special interest groups.")})),r.a.createElement("div",{className:"donate-picker--select-container"},k.map(function(t){return console.log("amount",t,e.state.selectedAmount,e.state.selectedAmount===t)||r.a.createElement(M,{key:t,amount:t,isSelected:e.state.selectedAmount===t,onClick:function(){return e.setState({selectedAmount:t})}})})),r.a.createElement(y.OutboundLink,{className:"button--primary",href:"https://secure.actblue.com/donate/melforprogress?amount="+this.state.selectedAmount,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.a,{id:N.b.donate.link,defaultMessage:"Donate"})))},n}(r.a.Component),M=function(e){var t=e.amount,a=e.isSelected,n=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["amount","isSelected"]);return console.log("isSelected",a)||r.a.createElement("button",Object.assign({},n,{className:"donate-picker--select "+(a?"donate-picker--select--selected":"")}),"$",t)},j=O,P=a(221),x=a(236),C=a.n(x),L=a(237),I=a.n(L),S=a(238),A=a.n(S),T=a(239),H=a.n(T),R=a(356),D=a.n(R),G=a(357),F=a.n(G),U=a(358),q=a.n(U),z=a(359),B=a.n(z),Y=a(360),J=a.n(Y),Q=a(361),V=a.n(Q),W=a(362),$=a.n(W),K=a(363),X=a.n(K),Z=a(364),ee=a.n(Z);a.d(t,"IndexPageTemplate",function(){return te});var te=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.a.createElement("div",null,r.a.createElement(E,null,r.a.createElement("div",{class:"display-banner"},r.a.createElement("div",{class:"vote-banner-main"},r.a.createElement("div",{className:"vote-banner-container"},r.a.createElement("div",{className:"vote-banner"},"VOTE BY ",r.a.createElement("br",null),"JUNE 23")),r.a.createElement("div",{class:"vote-ballot-button-container"},r.a.createElement("a",{class:"vote-ballot-button",href:"http://www.nycabsentee.com"},"Request your ballot >")),r.a.createElement("div",{class:"links-container"},r.a.createElement("a",{class:"link-black",href:"/vote"},"More information for voters >")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"underlined"},r.a.createElement(v.a,{id:N.b.home.about.header,defaultMessage:"Mel Gagarin Is Running for Congress"})))),r.a.createElement("div",{className:"video-container-container"},r.a.createElement("div",{className:"video-container"},r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/CHgIjEzuazk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),r.a.createElement("div",{className:"intro_para"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(_.b)("Melquiades Gagarin is a Queens native, a community organizer, a policy advocate, a father of three, and a punk rocker running for Congress in New York’s Sixth Congressional District to fight for you.")}),r.a.createElement(P.a,{className:"readmore",to:"/about"},r.a.createElement(v.a,{id:"about.readmore",defaultMessage:"About Mel >"}))),r.a.createElement("br",null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"underlined"},r.a.createElement(v.a,{id:N.b.home.about.header,defaultMessage:"Policy for the People"})))),r.a.createElement("div",{className:"intro_para"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(_.b)("Mel advocates for a government that puts people before politics, human interest above corporate\n                        greed, and the needs of the many above the benefit of the wealthy and powerful. ")}),r.a.createElement(P.a,{className:"readmore",to:"/issues"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read Mel’s Platform >"}))),r.a.createElement("div",{className:"issue_teaser_container"},r.a.createElement("div",{className:"issue_teaser"},r.a.createElement("div",{className:"issue-bug_container"},r.a.createElement("img",{className:"issue-bug_teaser",src:C.a})),r.a.createElement("div",{className:"issue_blurb"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(_.b)("Housing is a human right and guaranteed affordable housing should be a national priority. ")}),r.a.createElement(P.a,{className:"readmore",to:"/issues#Housing"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"})))),r.a.createElement("div",{className:"issue_teaser"},r.a.createElement("div",{className:"issue-bug_container"},r.a.createElement("img",{className:"issue-bug_teaser",src:I.a})),r.a.createElement("div",{className:"issue_blurb"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(_.b)("Our elders are owed respect and dignity in their golden years, regardless of their or their family’s financial circumstances. ")}),r.a.createElement(P.a,{className:"readmore",to:"/issues#GoldenYears"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"})))),r.a.createElement("div",{className:"issue_teaser"},r.a.createElement("div",{className:"issue-bug_container"},r.a.createElement("img",{className:"issue-bug_teaser",src:A.a})),r.a.createElement("div",{className:"issue_blurb"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(_.b)("Climate change is the defining challenge of our time. A Green New Deal is not only a possibility, it is now a necessity.")}),r.a.createElement(P.a,{className:"readmore",to:"/issues#GND"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"})))),r.a.createElement("div",{className:"issue_teaser"},r.a.createElement("div",{className:"issue-bug_container"},r.a.createElement("img",{className:"issue-bug_teaser",src:H.a})),r.a.createElement("div",{className:"issue_blurb"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(_.b)("Healthcare is a right, not a privilege, and it’s time to focus on the American people and their health over the profits of billion-dollar corporations.")}),r.a.createElement(P.a,{className:"readmore",to:"/issues#m4a"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"}))))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(P.a,{className:"readmore",to:"/issues"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"More Issues >"})))),r.a.createElement(j,null),r.a.createElement("div",{className:"content",id:"endorsements"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"underlined"},r.a.createElement(v.a,{id:N.b.home.about.header,defaultMessage:"Endorsed by"})))),r.a.createElement("div",{className:"endorsement_container"},r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://twitter.com/People4Bernie/status/1207735843911340034",target:"_blank"},r.a.createElement("img",{className:"endorsement_bug",src:B.a,alt:"The People for Bernie"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"http://forwardthinkingdemocracy.com/index.php/2019/12/18/forward-thinking-democracy-announces-endorsement-of-mel-gagarin-ny-06/",target:"_blank"},r.a.createElement("img",{className:"endorsement_bug",src:F.a,alt:"Forward Thinking Democracy"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://twitter.com/ProgressiveOur/status/1161000854566113281",target:"_blank"},r.a.createElement("img",{className:"endorsement_bug",src:q.a,alt:"Our Progressive Future"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://www.facebook.com/QUIPClub/photos/a.389336338564077/653594858804889/?type=3&theater"},r.a.createElement("img",{className:"endorsement_bug",src:J.a,alt:"Queens United Independent Progressives"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://twitter.com/MelforProgress/status/1248235036610084870"},r.a.createElement("img",{className:"endorsement_bug",src:V.a,alt:"New York Progressive Action Network"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://duh4all.org/us-house-senate-candidates/us-congress-house-senate.html"},r.a.createElement("img",{className:"endorsement_bug",src:$.a,alt:"Demand Universal Healthcare"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://brandnewcongress.org/Mel-Gagarin",target:"_blank"},r.a.createElement("img",{className:"endorsement_bug",src:D.a,alt:"Brand New Congress"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://www.incomemovement.com/politics",target:"_blank"},r.a.createElement("img",{className:"endorsement_bug",src:X.a,alt:"Income Movement"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://twitter.com/MelforProgress/status/1250050186530996226",target:"_blank"},r.a.createElement("img",{className:"endorsement_bug",src:ee.a,alt:"American Progressives in STEM"})))),r.a.createElement("div",{className:"content",id:"signup"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"underlined"},r.a.createElement(v.a,{id:N.b.home.about.header,defaultMessage:"Join Our Movement"})))),r.a.createElement("div",{className:"an_widget",id:"action-network-section"},r.a.createElement(b,null)))))))))))};t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(te,null))}},213:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(220),o=a.n(s);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:o.a.pageUnderNavbar},e.children))}},236:function(e,t,a){e.exports=a.p+"static/Policy-Housing-118b8baa57bcb7ff500b0c23ee1d2fbe.png"},237:function(e,t,a){e.exports=a.p+"static/Policy-GoldenYears-1b0eb6096ea1a6fcccca8a777d74f972.png"},238:function(e,t,a){e.exports=a.p+"static/Policy-GreenNewDeal-ffe371f8f97010603566386f09b01b04.png"},239:function(e,t,a){e.exports=a.p+"static/Policy-M4A-7e59d839201bfc1986509e30c45a145f.png"},351:function(e,t,a){e.exports=a.p+"static/Hero-mobile-spring-00c0ed4314a7822ca5dbe9fcd4b2c03e.jpg"},352:function(e,t,a){e.exports=a.p+"static/Hero-desktop_tablet-spring-91bb7ae58aaf58e1afd64360fb27be22.jpg"},354:function(e,t,a){"use strict";a(30),a(31),a(14),a(50),a(39),a(133),a(92),a(90),Object.defineProperty(t,"__esModule",{value:!0});var n,r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),o=(n=s)&&n.__esModule?n:{default:n},c=a(95);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.scriptLoaderId="id"+a.constructor.idCount++,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].Component),r(t,[{key:"componentDidMount",value:function(){var e,t,a,n=this.props,r=n.onError,s=n.onLoad,o=n.url;this.constructor.loadedScripts[o]?s():this.constructor.erroredScripts[o]?r():this.constructor.scriptObservers[o]?this.constructor.scriptObservers[o][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[o]=(e={},t=this.scriptLoaderId,a=this.props,t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e),this.createScript())}},{key:"componentWillUnmount",value:function(){var e=this.props.url,t=this.constructor.scriptObservers[e];t&&delete t[this.scriptLoaderId]}},{key:"createScript",value:function(){var e=this,t=this.props,a=t.onCreate,n=t.url,r=t.attributes,s=document.createElement("script");a(),r&&Object.keys(r).forEach(function(e){return s.setAttribute(e,r[e])}),s.src=n,s.hasAttribute("async")||(s.async=1);var o=function(t){var a=e.constructor.scriptObservers[n];Object.keys(a).forEach(function(r){t(a[r])&&delete e.constructor.scriptObservers[n][e.scriptLoaderId]})};s.onload=function(){e.constructor.loadedScripts[n]=!0,o(function(e){return e.onLoad(),!0})},s.onerror=function(){e.constructor.erroredScripts[n]=!0,o(function(e){return e.onError(),!0})},document.body.appendChild(s)}},{key:"render",value:function(){return null}}]),t}();i.propTypes={attributes:c.PropTypes.object,onCreate:c.PropTypes.func,onError:c.PropTypes.func.isRequired,onLoad:c.PropTypes.func.isRequired,url:c.PropTypes.string.isRequired},i.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},i.scriptObservers={},i.loadedScripts={},i.erroredScripts={},i.idCount=0,t.default=i,e.exports=t.default},356:function(e,t,a){e.exports=a.p+"static/BNC_logo-400px-c59f7dc5c84ae12f4036613cf1be98a8.png"},357:function(e,t,a){e.exports=a.p+"static/FTD_logo-200px-3b4726a1b30f9d96793b35ae49dd6b68.png"},358:function(e,t,a){e.exports=a.p+"static/OPF_logo-200px-813bc54e9479bfcc9ff32156075ccc3d.png"},359:function(e,t,a){e.exports=a.p+"static/PFB_logo-9660eb8f773fa06d9e774a6b34d715dd.png"},360:function(e,t,a){e.exports=a.p+"static/QUIP-transparent-8fddf4cca3e1707d36afe407e18a15cc.png"},361:function(e,t,a){e.exports=a.p+"static/NYPAN-logo-f77c1df377749ccc8d8bf40d4f557dbe.png"},362:function(e,t,a){e.exports=a.p+"static/DUH_logo-7b29fa461e4a6166252c31585cbd610b.png"},363:function(e,t,a){e.exports=a.p+"static/IncomeMvmt_logo-12b78905010ff7ed249657db3af9d174.png"},364:function(e,t,a){e.exports=a.p+"static/APIS_logo-9d3cb9b2fdffdf4275a043e45ef62241.png"}}]);
//# sourceMappingURL=component---src-templates-index-page-js-a6ad5aae7471f32fd524.js.map