(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(210),o=a(308),i=a.n(o),c=a(309),l=a.n(c),u=a(222),d=a(310),m=a.n(d),p=a(311),f=a.n(p);a(312);var g=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={randomHash:1e3*Math.random()},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.handleFormLoaded=function(){setTimeout(function(){document.querySelector("#can-form-area-join-our-campaign-for-progress-2").classList.add("loaded")},100)},s.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{url:"https://actionnetwork.org/widgets/v3/form/join-our-campaign-for-progress-2?format=js&source=widget&hash="+this.state.randomHash,onLoad:this.handleFormLoaded.bind(this)}),r.a.createElement("div",{id:"can-form-area-join-our-campaign-for-progress-2"}))},n}(r.a.Component);a(18),a(30),a(31),a(14),a(50);var b={tablet:"(min-width: 768px)"},h=function(e){var t=e.sizeSrcMap,a=e.src,n=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["sizeSrcMap","src"]);return r.a.createElement("picture",null,Object.keys(t).map(function(e){return r.a.createElement("source",{media:b[e]||b.tablet,srcSet:t[e]})}),r.a.createElement("img",Object.assign({src:a},n)))},E=function(e){var t=e.children;return r.a.createElement("div",{className:m.a.billboard},r.a.createElement(u.a,null,r.a.createElement(h,{id:"headshot",className:m.a.heroImage,src:i.a,sizeSrcMap:{tablet:l.a}}),r.a.createElement("div",{className:m.a.actionNetworkSection,id:"action-network-section"},r.a.createElement(g,null)),t))},v=(a(212),a(211)),y=a(214),N=a(209),w=a(216),_=function(e){var t=e.children;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"underlined"},t)))};var k=[5,10,15,25,100],O=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={selectedAmount:k[3]},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement("div",{className:"donate-picker--container"},r.a.createElement(_,null,r.a.createElement(v.a,{id:N.b.donate.header,defaultMessage:"A Grassroots Campaign"})),r.a.createElement("p",{className:"intro_para"},r.a.createElement(v.a,{id:N.b.donate.description,defaultMessage:Object(w.b)("Mel is not accepting donations from corporate PACs, real estate developers, or the\n            fossil fuel industry, so as a congressman he will answer to his neighbors, not to special interest groups.")})),r.a.createElement("div",{className:"donate-picker--select-container"},k.map(function(t){return console.log("amount",t,e.state.selectedAmount,e.state.selectedAmount===t)||r.a.createElement(M,{key:t,amount:t,isSelected:e.state.selectedAmount===t,onClick:function(){return e.setState({selectedAmount:t})}})})),r.a.createElement(y.OutboundLink,{className:"button--primary",href:"https://secure.actblue.com/donate/melforprogress?amount="+this.state.selectedAmount,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(v.a,{id:N.b.donate.link,defaultMessage:"Donate"})))},n}(r.a.Component),M=function(e){var t=e.amount,a=e.isSelected,n=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["amount","isSelected"]);return console.log("isSelected",a)||r.a.createElement("button",Object.assign({},n,{className:"donate-picker--select "+(a?"donate-picker--select--selected":"")}),"$",t)},j=O,P=a(208),C=a(223),x=a.n(C),L=a(224),S=a.n(L),A=a(225),I=a.n(A),T=a(226),R=a.n(T),D=a(313),H=a.n(D),q=a(314),G=a.n(q),F=a(315),B=a.n(F),z=a(316),U=a.n(z);a.d(t,"IndexPageTemplate",function(){return Y});var Y=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.a.createElement("div",null,r.a.createElement(E,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"underlined"},r.a.createElement(v.a,{id:N.b.home.about.header,defaultMessage:"Mel Gagarin Is Running for Congress"})))),r.a.createElement("div",null,r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(w.b)("Melquiades Gagarin is a stay-at-home dad and a lifelong advocate who is running\n                      for congress in New York’s Sixth Congressional District to be the bold, progressive fighter unbeholden to the\n                      political establishment that this moment calls for.")})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(v.a,{id:N.b.home.about.background,defaultMessage:Object(w.b)("He was born in Elmhurst to a Puerto-Rican working-class mother and a Filipino immigrant\n                      father, and raised by his mom and abuela. He went to Resurrection Ascension and Archbishop Molloy in district before\n                      attending American University in Washington, DC. Mel worked as a congressional aide representing large parts of the\n                      6th Congressional District, advocated on the Hill alongside criminal justice reformers, and organized across Queens\n                      as part of a movement to build a more just future for the nation’s most diverse county.")})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(v.a,{id:N.b.home.about.background,defaultMessage:Object(w.b)("Mel has always been dedicated to fighting for progress. He is running to fight for working\n                      class people, people of color, immigrants, the elderly, and our future.  He won’t be accepting any money from\n                      corporations, the fossil fuel industry or real estate developers. The only interests he will ever answer to are those\n                      of neighbors in the district. Mel lives in Kew Gardens with his wife Aleda, their three beautiful children, and their\n                      dachshund, Chewbacca. ")})),r.a.createElement("br",null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"underlined"},r.a.createElement(v.a,{id:N.b.home.about.header,defaultMessage:"Policy for the People"})))),r.a.createElement("div",{className:"intro_para"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(w.b)("Mel advocates for a government that puts people before politics, human interest above corporate\n                        greed, and the needs of the many above the benefit of the wealthy and powerful. ")}),r.a.createElement(P.a,{className:"readmore",to:"/issues"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read Mel’s Platform >"}))),r.a.createElement("div",{className:"issue_teaser_container"},r.a.createElement("div",{className:"issue_teaser"},r.a.createElement("div",{className:"issue-bug_container"},r.a.createElement("img",{className:"issue-bug_teaser",src:x.a})),r.a.createElement("div",{className:"issue_blurb"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(w.b)("Housing is a human right and guaranteed affordable housing should be a national priority. ")}),r.a.createElement(P.a,{className:"readmore",to:"/issues#Housing"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"})))),r.a.createElement("div",{className:"issue_teaser"},r.a.createElement("div",{className:"issue-bug_container"},r.a.createElement("img",{className:"issue-bug_teaser",src:S.a})),r.a.createElement("div",{className:"issue_blurb"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(w.b)("Our elders are owed respect and dignity in their golden years, regardless of their or their family’s financial circumstances. ")}),r.a.createElement(P.a,{className:"readmore",to:"/issues#GoldenYears"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"})))),r.a.createElement("div",{className:"issue_teaser"},r.a.createElement("div",{className:"issue-bug_container"},r.a.createElement("img",{className:"issue-bug_teaser",src:I.a})),r.a.createElement("div",{className:"issue_blurb"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(w.b)("Climate change is the defining challenge of our time. A Green New Deal is not only a possibility, it is now a necessity.")}),r.a.createElement(P.a,{className:"readmore",to:"/issues#GND"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"})))),r.a.createElement("div",{className:"issue_teaser"},r.a.createElement("div",{className:"issue-bug_container"},r.a.createElement("img",{className:"issue-bug_teaser",src:R.a})),r.a.createElement("div",{className:"issue_blurb"},r.a.createElement(v.a,{id:N.b.home.about.summary,defaultMessage:Object(w.b)("Healthcare is a right, not a privilege, and it’s time to focus on the American people and their health over the profits of billion-dollar corporations.")}),r.a.createElement(P.a,{className:"readmore",to:"/issues#m4a"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"Read More >"}))))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(P.a,{className:"readmore",to:"/issues"},r.a.createElement(v.a,{id:"issues.readmore",defaultMessage:"More Issues >"})))),r.a.createElement(j,null),r.a.createElement("div",{className:"content",id:"endorsements"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"underlined"},r.a.createElement(v.a,{id:N.b.home.about.header,defaultMessage:"Endorsed by"})))),r.a.createElement("div",{className:"endorsement_container"},r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://twitter.com/People4Bernie/status/1207735843911340034",target:"_blank"},r.a.createElement("img",{className:"endorsement_bug",src:U.a,alt:"The People for Bernie"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://brandnewcongress.org/Mel-Gagarin",target:"_blank"},r.a.createElement("img",{className:"endorsement_bug",src:H.a,alt:"Brand New Congress"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"http://forwardthinkingdemocracy.com/index.php/2019/12/18/forward-thinking-democracy-announces-endorsement-of-mel-gagarin-ny-06/",target:"_blank"},r.a.createElement("img",{className:"endorsement_bug",src:G.a,alt:"Forward Thinking Democracy"})),r.a.createElement(y.OutboundLink,{className:"endorsement",href:"https://twitter.com/ProgressiveOur/status/1161000854566113281",target:"_blank"},r.a.createElement("img",{className:"endorsement_bug",src:B.a,alt:"Our Progressive Future"})))),r.a.createElement("div",{className:"content",id:"press"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"underlined"},r.a.createElement(v.a,{id:N.b.home.about.header,defaultMessage:"In the Press"})))),r.a.createElement("div",{className:"press_clipping"},r.a.createElement("div",{className:"press_headline"},r.a.createElement(y.OutboundLink,{className:"press_headline",href:"https://www.cityandstateny.com/articles/politics/campaigns-elections/house-challengers-everybodys-going-be-talking-about.html",target:"_blank"},"The House challengers everybody’s going to be talking about")),r.a.createElement("div",{className:"press_quote"},"“We can’t afford to have Democrats that are going to run to the middle and play it safe, side with Republicans. And it’s not that I’m opposed to bipartisanship, but what does it get you when that bipartisanship has always been compromising Democratic values?”",r.a.createElement(y.OutboundLink,{className:"readmore",href:"https://www.cityandstateny.com/articles/politics/campaigns-elections/house-challengers-everybodys-going-be-talking-about.html",target:"_blank",rel:"noopener noreferrer"},"Read More >")),r.a.createElement(y.OutboundLink,{href:"https://www.cityandstateny.com/articles/politics/campaigns-elections/house-challengers-everybodys-going-be-talking-about.html",target:"_blank"},r.a.createElement("div",{className:"press_credit"},"City & State New York",r.a.createElement("div",{className:"press_date"},"November 10, 2019")))),r.a.createElement("div",{className:"press_clipping"},r.a.createElement("div",{className:"press_headline"},r.a.createElement(y.OutboundLink,{className:"press_headline",href:"https://www.punknews.org/article/71199/interviews-punks-on-politics-getting-to-know-mel-gagarin",target:"_blank"},"Punks on Politics: Getting to know Mel Gagarin")),r.a.createElement("div",{className:"press_quote"},"“Donald Trump isn’t an anomaly. He is a natural result of a broken political and economic system that allows him to rise. This is a part of the complicity of the Democratic establishment that continues to play politics as usual...”",r.a.createElement(y.OutboundLink,{className:"readmore",href:"https://www.punknews.org/article/71199/interviews-punks-on-politics-getting-to-know-mel-gagarin",target:"_blank",rel:"noopener noreferrer"},"Read More >")),r.a.createElement(y.OutboundLink,{href:"https://www.punknews.org/article/71199/interviews-punks-on-politics-getting-to-know-mel-gagarin",target:"_blank"},r.a.createElement("div",{className:"press_credit"},"punknews.org",r.a.createElement("div",{className:"press_date"},"November 4, 2019")))),r.a.createElement("div",{className:"press_clipping"},r.a.createElement("div",{className:"press_headline"},r.a.createElement(y.OutboundLink,{className:"press_headline",href:"https://queenseagle.com/all/mel-gagarin-queens-democratic-primary-us-rep-grace-meng",target:"_blank"},"U.S. Rep Meng to face first primary challenge since taking office")),r.a.createElement("div",{className:"press_quote"},"Gagarin will reject corporate donations. Meng has not. “Since 2013 our district hasn't had a choice, and I'm going to provide that choice,” Gagarin said.",r.a.createElement(y.OutboundLink,{className:"readmore",href:"https://queenseagle.com/all/mel-gagarin-queens-democratic-primary-us-rep-grace-meng",target:"_blank",rel:"noopener noreferrer"},"Read More >")),r.a.createElement(y.OutboundLink,{href:"https://queenseagle.com/all/mel-gagarin-queens-democratic-primary-us-rep-grace-meng",target:"_blank"},r.a.createElement("div",{className:"press_credit"},"Queens Daily Eagle",r.a.createElement("div",{className:"press_date"},"July 23, 2019")))))))))))))};t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(Y,null))}},222:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(236),o=a.n(s);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:o.a.pageUnderNavbar},e.children))}},223:function(e,t,a){e.exports=a.p+"static/Policy-Housing-118b8baa57bcb7ff500b0c23ee1d2fbe.png"},224:function(e,t,a){e.exports=a.p+"static/Policy-GoldenYears-1b0eb6096ea1a6fcccca8a777d74f972.png"},225:function(e,t,a){e.exports=a.p+"static/Policy-GreenNewDeal-ffe371f8f97010603566386f09b01b04.png"},226:function(e,t,a){e.exports=a.p+"static/Policy-M4A-7e59d839201bfc1986509e30c45a145f.png"},308:function(e,t,a){e.exports=a.p+"static/Hero-mobile-6592cc59ce91d6eb2d7d8257f305b546.png"},309:function(e,t,a){e.exports=a.p+"static/Hero-desktop_tablet-7dd5787dea0bd79cd73fbcee38b673de.jpg"},311:function(e,t,a){"use strict";a(30),a(31),a(14),a(50),a(41),a(133),a(91),a(90),Object.defineProperty(t,"__esModule",{value:!0});var n,r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),o=(n=s)&&n.__esModule?n:{default:n},i=a(95);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.scriptLoaderId="id"+a.constructor.idCount++,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].Component),r(t,[{key:"componentDidMount",value:function(){var e,t,a,n=this.props,r=n.onError,s=n.onLoad,o=n.url;this.constructor.loadedScripts[o]?s():this.constructor.erroredScripts[o]?r():this.constructor.scriptObservers[o]?this.constructor.scriptObservers[o][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[o]=(e={},t=this.scriptLoaderId,a=this.props,t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e),this.createScript())}},{key:"componentWillUnmount",value:function(){var e=this.props.url,t=this.constructor.scriptObservers[e];t&&delete t[this.scriptLoaderId]}},{key:"createScript",value:function(){var e=this,t=this.props,a=t.onCreate,n=t.url,r=t.attributes,s=document.createElement("script");a(),r&&Object.keys(r).forEach(function(e){return s.setAttribute(e,r[e])}),s.src=n,s.hasAttribute("async")||(s.async=1);var o=function(t){var a=e.constructor.scriptObservers[n];Object.keys(a).forEach(function(r){t(a[r])&&delete e.constructor.scriptObservers[n][e.scriptLoaderId]})};s.onload=function(){e.constructor.loadedScripts[n]=!0,o(function(e){return e.onLoad(),!0})},s.onerror=function(){e.constructor.erroredScripts[n]=!0,o(function(e){return e.onError(),!0})},document.body.appendChild(s)}},{key:"render",value:function(){return null}}]),t}();c.propTypes={attributes:i.PropTypes.object,onCreate:i.PropTypes.func,onError:i.PropTypes.func.isRequired,onLoad:i.PropTypes.func.isRequired,url:i.PropTypes.string.isRequired},c.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},c.scriptObservers={},c.loadedScripts={},c.erroredScripts={},c.idCount=0,t.default=c,e.exports=t.default},313:function(e,t,a){e.exports=a.p+"static/BNC_logo-400px-c59f7dc5c84ae12f4036613cf1be98a8.png"},314:function(e,t,a){e.exports=a.p+"static/FTD_logo-200px-0df453d851374b4f88dd35b6774dfec3.png"},315:function(e,t,a){e.exports=a.p+"static/OPF_logo-200px-813bc54e9479bfcc9ff32156075ccc3d.png"},316:function(e,t,a){e.exports=a.p+"static/PFB_logo-9660eb8f773fa06d9e774a6b34d715dd.png"}}]);
//# sourceMappingURL=component---src-templates-index-page-js-0044c7f9e5e16f3908e2.js.map