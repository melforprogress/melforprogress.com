(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"BlogPostTemplate",function(){return j}),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),c=a(224),M=a(212),u=a.n(M),l=a(204),N=a(206),i=a(219),j=function(e){var t=e.content,a=e.contentComponent,n=e.description,M=e.tags,u=e.title,N=e.helmet,j=a||i.b;return r.a.createElement("section",{className:"section"},N||"",r.a.createElement("div",{className:"container content"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-10 is-offset-1"},r.a.createElement("h1",{className:"title is-size-2 has-text-weight-bold is-bold-light"},u),r.a.createElement("p",null,n),r.a.createElement(j,{content:t}),M&&M.length?r.a.createElement("div",{style:{marginTop:"4rem"}},r.a.createElement("h4",null,"Tags"),r.a.createElement("ul",{className:"taglist"},M.map(function(e){return r.a.createElement("li",{key:e+"tag"},r.a.createElement(l.a,{to:"/tags/"+Object(c.kebabCase)(e)+"/"},e))}))):null))))};t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(N.a,null,r.a.createElement(j,{content:t.html,contentComponent:i.a,description:t.frontmatter.description,helmet:r.a.createElement(u.a,{titleTemplate:"%s | Blog"},r.a.createElement("title",null,""+t.frontmatter.title),r.a.createElement("meta",{name:"description",content:""+t.frontmatter.description})),tags:t.frontmatter.tags,title:t.frontmatter.title}))};var s="1562462377"},204:function(e,t,a){"use strict";a.d(t,"b",function(){return N});var n=a(0),r=a.n(n),c=a(66),M=a.n(c);a.d(t,"a",function(){return M.a});a(205),a(9).default.enqueue;var u=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,M=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,M&&c(M),!M&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var N=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:n||c,staticQueryData:e})})}},205:function(e,t,a){var n;e.exports=(n=a(207))&&n.default||n},206:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(212),M=a(204),u=a(208),l=a.n(u),N=a(209),i=a.n(N),j=a(210),s=a.n(j);var L=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("footer",{className:"footer has-background-primary-dark has-text-white-ter"},r.a.createElement("div",{className:"content has-text-centered has-background-primary-dark has-text-white-ter"},r.a.createElement("div",{className:"container has-background-primary-dark has-text-white-ter"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-4"},r.a.createElement("section",{className:"menu"},r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",null,r.a.createElement(M.a,{to:"/",className:"navbar-item"},"Home")),r.a.createElement("li",null,r.a.createElement(M.a,{className:"navbar-item",to:"/issues"},"Issues"))))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("section",null,r.a.createElement("ul",{className:"menu-list"},r.a.createElement("li",null,r.a.createElement(M.a,{className:"navbar-item",to:"/donate"},"Donate"))))),r.a.createElement("div",{className:"column is-4 social"},r.a.createElement("a",{title:"facebook",target:"_blank",href:"https://www.facebook.com/melforprogress/"},r.a.createElement("img",{src:l.a,alt:"Facebook",style:{width:"1em",height:"1em"}})),r.a.createElement("a",{title:"twitter",target:"_blank",href:"https://twitter.com/melforprogress"},r.a.createElement("img",{className:"fas fa-lg",src:s.a,alt:"Twitter",style:{width:"1em",height:"1em"}})),r.a.createElement("a",{title:"instagram",target:"_blank",href:"https://instagram.com/mel.gagarin"},r.a.createElement("img",{src:i.a,alt:"Instagram",style:{width:"1em",height:"1em"}})))),r.a.createElement("div",null,"Paid for by Committee to Elect Mel Gagarin"))))},n}(r.a.Component);var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggleHamburger=function(){a.setState({active:!a.state.active},function(){a.state.active?a.setState({navBarActiveClass:"is-active"}):a.setState({navBarActiveClass:""})})},a.state={active:!1,navBarActiveClass:""},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation",id:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(M.a,{to:"/",className:"navbar-item",title:"Logo"},r.a.createElement("div",{className:"navbar-title"},"Mel for Progress")),r.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function(){return e.toggleHamburger()}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass},r.a.createElement("div",{className:"navbar-start has-text-centered"},r.a.createElement(M.a,{className:"navbar-item navbar-link",to:"/issues"},"Issues"),r.a.createElement("a",{className:"navbar-item navbar-link",href:"https://secure.actblue.com/donate/melforprogress",target:"_blank"},"Donate")))))},n}(r.a.Component),m=(a(213),a(211)),g=function(){return m.data.site.siteMetadata};t.a=function(e){var t=e.children,a=g(),n=a.title,M=a.description;return r.a.createElement("div",null,r.a.createElement(c.Helmet,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:M}),r.a.createElement("link",{href:"https://actionnetwork.org/css/style-embed-v3.css",rel:"stylesheet",type:"text/css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Oswald&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto&display=swap",rel:"stylesheet"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/apple-touch-icon.png"}),r.a.createElement("meta",{name:"theme-color",content:"#fff"}),r.a.createElement("meta",{property:"og:type",content:"business.business"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:url",content:"/"}),r.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),r.a.createElement(o,null),r.a.createElement("div",{className:"template-content"},t),r.a.createElement(L,null))}},207:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),c=a(93);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},208:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4="},209:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SW5zdGFncmFtIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwQzguNzQgMCA4LjMzMy4wMTUgNy4wNTMuMDcyIDUuNzc1LjEzMiA0LjkwNS4zMzMgNC4xNC42M2MtLjc4OS4zMDYtMS40NTkuNzE3LTIuMTI2IDEuMzg0Uy45MzUgMy4zNS42MyA0LjE0Qy4zMzMgNC45MDUuMTMxIDUuNzc1LjA3MiA3LjA1My4wMTIgOC4zMzMgMCA4Ljc0IDAgMTJzLjAxNSAzLjY2Ny4wNzIgNC45NDdjLjA2IDEuMjc3LjI2MSAyLjE0OC41NTggMi45MTMuMzA2Ljc4OC43MTcgMS40NTkgMS4zODQgMi4xMjYuNjY3LjY2NiAxLjMzNiAxLjA3OSAyLjEyNiAxLjM4NC43NjYuMjk2IDEuNjM2LjQ5OSAyLjkxMy41NThDOC4zMzMgMjMuOTg4IDguNzQgMjQgMTIgMjRzMy42NjctLjAxNSA0Ljk0Ny0uMDcyYzEuMjc3LS4wNiAyLjE0OC0uMjYyIDIuOTEzLS41NTguNzg4LS4zMDYgMS40NTktLjcxOCAyLjEyNi0xLjM4NC42NjYtLjY2NyAxLjA3OS0xLjMzNSAxLjM4NC0yLjEyNi4yOTYtLjc2NS40OTktMS42MzYuNTU4LTIuOTEzLjA2LTEuMjguMDcyLTEuNjg3LjA3Mi00Ljk0N3MtLjAxNS0zLjY2Ny0uMDcyLTQuOTQ3Yy0uMDYtMS4yNzctLjI2Mi0yLjE0OS0uNTU4LTIuOTEzLS4zMDYtLjc4OS0uNzE4LTEuNDU5LTEuMzg0LTIuMTI2QzIxLjMxOSAxLjM0NyAyMC42NTEuOTM1IDE5Ljg2LjYzYy0uNzY1LS4yOTctMS42MzYtLjQ5OS0yLjkxMy0uNTU4QzE1LjY2Ny4wMTIgMTUuMjYgMCAxMiAwem0wIDIuMTZjMy4yMDMgMCAzLjU4NS4wMTYgNC44NS4wNzEgMS4xNy4wNTUgMS44MDUuMjQ5IDIuMjI3LjQxNS41NjIuMjE3Ljk2LjQ3NyAxLjM4Mi44OTYuNDE5LjQyLjY3OS44MTkuODk2IDEuMzgxLjE2NC40MjIuMzYgMS4wNTcuNDEzIDIuMjI3LjA1NyAxLjI2Ni4wNyAxLjY0Ni4wNyA0Ljg1cy0uMDE1IDMuNTg1LS4wNzQgNC44NWMtLjA2MSAxLjE3LS4yNTYgMS44MDUtLjQyMSAyLjIyNy0uMjI0LjU2Mi0uNDc5Ljk2LS44OTkgMS4zODItLjQxOS40MTktLjgyNC42NzktMS4zOC44OTYtLjQyLjE2NC0xLjA2NS4zNi0yLjIzNS40MTMtMS4yNzQuMDU3LTEuNjQ5LjA3LTQuODU5LjA3LTMuMjExIDAtMy41ODYtLjAxNS00Ljg1OS0uMDc0LTEuMTcxLS4wNjEtMS44MTYtLjI1Ni0yLjIzNi0uNDIxLS41NjktLjIyNC0uOTYtLjQ3OS0xLjM3OS0uODk5LS40MjEtLjQxOS0uNjktLjgyNC0uOS0xLjM4LS4xNjUtLjQyLS4zNTktMS4wNjUtLjQyLTIuMjM1LS4wNDUtMS4yNi0uMDYxLTEuNjQ5LS4wNjEtNC44NDQgMC0zLjE5Ni4wMTYtMy41ODYuMDYxLTQuODYxLjA2MS0xLjE3LjI1NS0xLjgxNC40Mi0yLjIzNC4yMS0uNTcuNDc5LS45Ni45LTEuMzgxLjQxOS0uNDE5LjgxLS42ODkgMS4zNzktLjg5OC40Mi0uMTY2IDEuMDUxLS4zNjEgMi4yMjEtLjQyMSAxLjI3NS0uMDQ1IDEuNjUtLjA2IDQuODU5LS4wNmwuMDQ1LjAzem0wIDMuNjc4Yy0zLjQwNSAwLTYuMTYyIDIuNzYtNi4xNjIgNi4xNjIgMCAzLjQwNSAyLjc2IDYuMTYyIDYuMTYyIDYuMTYyIDMuNDA1IDAgNi4xNjItMi43NiA2LjE2Mi02LjE2MiAwLTMuNDA1LTIuNzYtNi4xNjItNi4xNjItNi4xNjJ6TTEyIDE2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNHptNy44NDYtMTAuNDA1YzAgLjc5NS0uNjQ2IDEuNDQtMS40NCAxLjQ0LS43OTUgMC0xLjQ0LS42NDYtMS40NC0xLjQ0IDAtLjc5NC42NDYtMS40MzkgMS40NC0xLjQzOS43OTMtLjAwMSAxLjQ0LjY0NSAxLjQ0IDEuNDM5eiIvPjwvc3ZnPg=="},210:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Mel for Progress",description:"Mel Gagarin is running for Congress to represent NY-6"}}}}},219:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),r=a.n(n),c=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:t}})};t.b=function(e){var t=e.content,a=e.className;return r.a.createElement("div",{className:a},t)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9df59d6c92c4e0de55e1.js.map