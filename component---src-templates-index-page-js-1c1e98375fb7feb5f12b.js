(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{205:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(210),o=a(308),i=a.n(o),c=a(309),l=a.n(c),u=a(222),d=a(310),m=a.n(d),p=a(311),f=a.n(p);a(312);var h=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={randomHash:1e3*Math.random()},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=r.prototype;return s.handleFormLoaded=function(){setTimeout(function(){document.querySelector("#can-form-area-join-our-campaign-for-progress-2").classList.add("loaded")},100)},s.render=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{url:"https://actionnetwork.org/widgets/v3/form/join-our-campaign-for-progress-2?format=js&source=widget&hash="+this.state.randomHash,onLoad:this.handleFormLoaded.bind(this)}),n.a.createElement("div",{id:"can-form-area-join-our-campaign-for-progress-2"}))},r}(n.a.Component);a(18),a(30),a(31),a(14),a(50);var b={tablet:"(min-width: 768px)"},g=function(e){var t=e.sizeSrcMap,a=e.src,r=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["sizeSrcMap","src"]);return n.a.createElement("picture",null,Object.keys(t).map(function(e){return n.a.createElement("source",{media:b[e]||b.tablet,srcSet:t[e]})}),n.a.createElement("img",Object.assign({src:a},r)))},E=function(e){var t=e.children;return n.a.createElement("div",{className:m.a.billboard},n.a.createElement(u.a,null,n.a.createElement(g,{id:"headshot",className:m.a.heroImage,src:i.a,sizeSrcMap:{tablet:l.a}}),n.a.createElement("div",{className:m.a.actionNetworkSection,id:"action-network-section"},n.a.createElement(h,null)),t))},v=(a(212),a(211)),y=a(214),w=a(209),N=a(216),_=function(e){var t=e.children;return n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("div",{className:"title"},n.a.createElement("span",{className:"underlined"},t)))};var k=[5,10,15,25,100],M=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={selectedAmount:k[3]},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this;return n.a.createElement("div",{className:"donate-picker--container"},n.a.createElement(_,null,n.a.createElement(v.a,{id:w.b.donate.header,defaultMessage:"A Grassroots Campaign"})),n.a.createElement("p",{className:"intro_para"},n.a.createElement(v.a,{id:w.b.donate.description,defaultMessage:Object(N.b)("Mel is not accepting donations from corporate PACs, real estate developers, or the\n            fossil fuel industry, so as a congressman he will answer to his neighbors, not to special interest groups.")})),n.a.createElement("div",{className:"donate-picker--select-container"},k.map(function(t){return console.log("amount",t,e.state.selectedAmount,e.state.selectedAmount===t)||n.a.createElement(O,{key:t,amount:t,isSelected:e.state.selectedAmount===t,onClick:function(){return e.setState({selectedAmount:t})}})})),n.a.createElement(y.OutboundLink,{className:"button--primary",href:"https://secure.actblue.com/donate/melforprogress?amount="+this.state.selectedAmount,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(v.a,{id:w.b.donate.link,defaultMessage:"Donate"})))},r}(n.a.Component),O=function(e){var t=e.amount,a=e.isSelected,r=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["amount","isSelected"]);return console.log("isSelected",a)||n.a.createElement("button",Object.assign({},r,{className:"donate-picker--select "+(a?"donate-picker--select--selected":"")}),"$",t)},j=M,C=a(208),P=a(223),S=a.n(P),L=a(224),x=a.n(L),A=a(225),I=a.n(A),R=a(226),H=a.n(R);a.d(t,"IndexPageTemplate",function(){return T});var T=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),n.a.createElement("div",null,n.a.createElement(E,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",null,n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("div",{className:"title"},n.a.createElement("span",{className:"underlined"},n.a.createElement(v.a,{id:w.b.home.about.header,defaultMessage:"Mel Gagarin Is Running for Congress"})))),n.a.createElement("div",null,n.a.createElement(v.a,{id:w.b.home.about.summary,defaultMessage:Object(N.b)("Melquiades Gagarin is a stay-at-home dad and a lifelong advocate who is running\n                      for congress in New York’s Sixth Congressional District to be the bold, progressive fighter unbeholden to the\n                      political establishment that this moment calls for.")})),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement(v.a,{id:w.b.home.about.background,defaultMessage:Object(N.b)("He was born in Elmhurst to a Puerto-Rican working-class mother and a Filipino immigrant\n                      father, and raised by his mom and abuela. He went to Resurrection Ascension and Archbishop Molloy in district before\n                      attending American University in Washington, DC. Mel worked as a congressional aide representing large parts of the\n                      6th Congressional District, advocated on the Hill alongside criminal justice reformers, and organized across Queens\n                      as part of a movement to build a more just future for the nation’s most diverse county.")})),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement(v.a,{id:w.b.home.about.background,defaultMessage:Object(N.b)("Mel has always been dedicated to fighting for progress. He is running to fight for working\n                      class people, people of color, immigrants, the elderly, and our future.  He won’t be accepting any money from\n                      corporations, the fossil fuel industry or real estate developers. The only interests he will ever answer to are those\n                      of neighbors in the district. Mel lives in Kew Gardens with his wife Aleda, their three beautiful children, and their\n                      dachshund, Chewbacca. ")})),n.a.createElement("br",null),n.a.createElement("div",{className:"content"},n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("div",{className:"title"},n.a.createElement("span",{className:"underlined"},n.a.createElement(v.a,{id:w.b.home.about.header,defaultMessage:"Policy for the People"})))),n.a.createElement("div",{className:"intro_para"},n.a.createElement(v.a,{id:w.b.home.about.summary,defaultMessage:Object(N.b)("Mel advocates for a government that puts people before politics, human interest above corporate\n                        greed, and the needs of the many above the benefit of the wealthy and powerful. ")}),n.a.createElement(C.a,{className:"readmore",to:"/issues"},n.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read Mel’s Platform >"}))),n.a.createElement("div",{className:"issue_teaser_container"},n.a.createElement("div",{className:"issue_teaser"},n.a.createElement("div",{className:"issue-bug_container"},n.a.createElement("img",{className:"issue-bug_teaser",src:S.a})),n.a.createElement("div",{className:"issue_blurb"},n.a.createElement(v.a,{id:w.b.home.about.summary,defaultMessage:Object(N.b)("Housing is a human right and guaranteed affordable housing should be a national priority. ")}),n.a.createElement(C.a,{className:"readmore",to:"/issues#Housing"},n.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"})))),n.a.createElement("div",{className:"issue_teaser"},n.a.createElement("div",{className:"issue-bug_container"},n.a.createElement("img",{className:"issue-bug_teaser",src:x.a})),n.a.createElement("div",{className:"issue_blurb"},n.a.createElement(v.a,{id:w.b.home.about.summary,defaultMessage:Object(N.b)("Our elders are owed respect and dignity in their golden years, regardless of their or their family’s financial circumstances. ")}),n.a.createElement(C.a,{className:"readmore",to:"/issues#GoldenYears"},n.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"})))),n.a.createElement("div",{className:"issue_teaser"},n.a.createElement("div",{className:"issue-bug_container"},n.a.createElement("img",{className:"issue-bug_teaser",src:I.a})),n.a.createElement("div",{className:"issue_blurb"},n.a.createElement(v.a,{id:w.b.home.about.summary,defaultMessage:Object(N.b)("Climate change is the defining challenge of our time. A Green New Deal is not only a possibility, it is now a necessity.")}),n.a.createElement(C.a,{className:"readmore",to:"/issues#GND"},n.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"})))),n.a.createElement("div",{className:"issue_teaser"},n.a.createElement("div",{className:"issue-bug_container"},n.a.createElement("img",{className:"issue-bug_teaser",src:H.a})),n.a.createElement("div",{className:"issue_blurb"},n.a.createElement(v.a,{id:w.b.home.about.summary,defaultMessage:Object(N.b)("Healthcare is a right, not a privilege, and it’s time to focus on the American people and their health over the profits of billion-dollar corporations.")}),n.a.createElement(C.a,{className:"readmore",to:"/issues#m4a"},n.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"}))))),n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement(C.a,{className:"readmore",to:"/issues"},n.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"More Issues >"})))),n.a.createElement(j,null),n.a.createElement("div",{className:"content"},n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("div",{className:"title"},n.a.createElement("span",{className:"underlined"},n.a.createElement(v.a,{id:w.b.home.about.header,defaultMessage:"In the Press"})))),n.a.createElement("div",{className:"press_clipping"},n.a.createElement("div",{className:"press_headline"},n.a.createElement(y.OutboundLink,{className:"press_headline",href:"https://www.cityandstateny.com/articles/politics/campaigns-elections/house-challengers-everybodys-going-be-talking-about.html",target:"_blank"},"The House challengers everybody’s going to be talking about")),n.a.createElement("div",{className:"press_quote"},"“We can’t afford to have Democrats that are going to run to the middle and play it safe, side with Republicans. And it’s not that I’m opposed to bipartisanship, but what does it get you when that bipartisanship has always been compromising Democratic values?”",n.a.createElement(y.OutboundLink,{className:"readmore",href:"https://www.cityandstateny.com/articles/politics/campaigns-elections/house-challengers-everybodys-going-be-talking-about.html",target:"_blank",rel:"noopener noreferrer"},"Read More >")),n.a.createElement(y.OutboundLink,{href:"https://www.cityandstateny.com/articles/politics/campaigns-elections/house-challengers-everybodys-going-be-talking-about.html",target:"_blank"},n.a.createElement("div",{className:"press_credit"},"City & State New York",n.a.createElement("div",{className:"press_date"},"November 10, 2019")))),n.a.createElement("div",{className:"press_clipping"},n.a.createElement("div",{className:"press_headline"},n.a.createElement(y.OutboundLink,{className:"press_headline",href:"https://www.punknews.org/article/71199/interviews-punks-on-politics-getting-to-know-mel-gagarin",target:"_blank"},"Punks on Politics: Getting to know Mel Gagarin")),n.a.createElement("div",{className:"press_quote"},"“Donald Trump isn’t an anomaly. He is a natural result of a broken political and economic system that allows him to rise. This is a part of the complicity of the Democratic establishment that continues to play politics as usual...”",n.a.createElement(y.OutboundLink,{className:"readmore",href:"https://www.punknews.org/article/71199/interviews-punks-on-politics-getting-to-know-mel-gagarin",target:"_blank",rel:"noopener noreferrer"},"Read More >")),n.a.createElement(y.OutboundLink,{href:"https://www.punknews.org/article/71199/interviews-punks-on-politics-getting-to-know-mel-gagarin",target:"_blank"},n.a.createElement("div",{className:"press_credit"},"punknews.org",n.a.createElement("div",{className:"press_date"},"November 4, 2019")))),n.a.createElement("div",{className:"press_clipping"},n.a.createElement("div",{className:"press_headline"},n.a.createElement(y.OutboundLink,{className:"press_headline",href:"https://queenseagle.com/all/mel-gagarin-queens-democratic-primary-us-rep-grace-meng",target:"_blank"},"U.S. Rep Meng to face first primary challenge since taking office")),n.a.createElement("div",{className:"press_quote"},"Gagarin will reject corporate donations. Meng has not. “Since 2013 our district hasn't had a choice, and I'm going to provide that choice,” Gagarin said.",n.a.createElement(y.OutboundLink,{className:"readmore",href:"https://queenseagle.com/all/mel-gagarin-queens-democratic-primary-us-rep-grace-meng",target:"_blank",rel:"noopener noreferrer"},"Read More >")),n.a.createElement(y.OutboundLink,{href:"https://queenseagle.com/all/mel-gagarin-queens-democratic-primary-us-rep-grace-meng",target:"_blank"},n.a.createElement("div",{className:"press_credit"},"Queens Daily Eagle",n.a.createElement("div",{className:"press_date"},"July 23, 2019")))))))))))))};t.default=function(){return n.a.createElement(s.a,null,n.a.createElement(T,null))}},222:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(236),o=a.n(s);t.a=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:o.a.pageUnderNavbar},e.children))}},223:function(e,t,a){e.exports=a.p+"static/Policy-Housing-118b8baa57bcb7ff500b0c23ee1d2fbe.png"},224:function(e,t,a){e.exports=a.p+"static/Policy-GoldenYears-1b0eb6096ea1a6fcccca8a777d74f972.png"},225:function(e,t,a){e.exports=a.p+"static/Policy-GreenNewDeal-ffe371f8f97010603566386f09b01b04.png"},226:function(e,t,a){e.exports=a.p+"static/Policy-M4A-7e59d839201bfc1986509e30c45a145f.png"},308:function(e,t,a){e.exports=a.p+"static/Hero-mobile-6592cc59ce91d6eb2d7d8257f305b546.png"},309:function(e,t,a){e.exports=a.p+"static/Hero-desktop_tablet-7dd5787dea0bd79cd73fbcee38b673de.jpg"},311:function(e,t,a){"use strict";a(30),a(31),a(14),a(50),a(41),a(133),a(91),a(90),Object.defineProperty(t,"__esModule",{value:!0});var r,n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),s=a(0),o=(r=s)&&r.__esModule?r:{default:r},i=a(95);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.scriptLoaderId="id"+a.constructor.idCount++,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].Component),n(t,[{key:"componentDidMount",value:function(){var e,t,a,r=this.props,n=r.onError,s=r.onLoad,o=r.url;this.constructor.loadedScripts[o]?s():this.constructor.erroredScripts[o]?n():this.constructor.scriptObservers[o]?this.constructor.scriptObservers[o][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[o]=(e={},t=this.scriptLoaderId,a=this.props,t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e),this.createScript())}},{key:"componentWillUnmount",value:function(){var e=this.props.url,t=this.constructor.scriptObservers[e];t&&delete t[this.scriptLoaderId]}},{key:"createScript",value:function(){var e=this,t=this.props,a=t.onCreate,r=t.url,n=t.attributes,s=document.createElement("script");a(),n&&Object.keys(n).forEach(function(e){return s.setAttribute(e,n[e])}),s.src=r,s.hasAttribute("async")||(s.async=1);var o=function(t){var a=e.constructor.scriptObservers[r];Object.keys(a).forEach(function(n){t(a[n])&&delete e.constructor.scriptObservers[r][e.scriptLoaderId]})};s.onload=function(){e.constructor.loadedScripts[r]=!0,o(function(e){return e.onLoad(),!0})},s.onerror=function(){e.constructor.erroredScripts[r]=!0,o(function(e){return e.onError(),!0})},document.body.appendChild(s)}},{key:"render",value:function(){return null}}]),t}();c.propTypes={attributes:i.PropTypes.object,onCreate:i.PropTypes.func,onError:i.PropTypes.func.isRequired,onLoad:i.PropTypes.func.isRequired,url:i.PropTypes.string.isRequired},c.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},c.scriptObservers={},c.loadedScripts={},c.erroredScripts={},c.idCount=0,t.default=c,e.exports=t.default}}]);
//# sourceMappingURL=component---src-templates-index-page-js-1c1e98375fb7feb5f12b.js.map