(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{205:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var r=a(0),n=a.n(r),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(206),a(9).default.enqueue;var l=n.a.createContext({});function A(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,s=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,s&&i(s),!s&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(l.Consumer,null,function(e){return n.a.createElement(A,{data:t,query:a,render:r||i,staticQueryData:e})})}},206:function(e,t,a){var r;e.exports=(r=a(209))&&r.default||r},208:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(214),s=a(205),l=a(207),A=a(210),o=a.n(A),c=a(211),u=a.n(c),d=a(212),g=a.n(d);var f=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement("footer",{className:"footer has-background-primary-dark has-text-white-ter"},n.a.createElement("div",{className:"content has-text-centered has-background-primary-dark has-text-white-ter"},n.a.createElement("div",{className:"container has-background-primary-dark has-text-white-ter"},n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-4"},n.a.createElement("section",{className:"menu"},n.a.createElement("ul",{className:"menu-list"},n.a.createElement("li",null,n.a.createElement(s.a,{to:"/",className:"navbar-item"},"Home")),n.a.createElement("li",null,n.a.createElement(s.a,{className:"navbar-item",to:"/issues"},"Issues"))))),n.a.createElement("div",{className:"column is-4"},n.a.createElement("section",null,n.a.createElement("ul",{className:"menu-list"},n.a.createElement("li",null,n.a.createElement(l.OutboundLink,{className:"navbar-item navbar-link",href:"https://secure.actblue.com/donate/melforprogress",target:"_blank"},"Donate"))))),n.a.createElement("div",{className:"column is-4 social"},n.a.createElement("a",{title:"facebook",target:"_blank",href:"https://www.facebook.com/melforprogress/"},n.a.createElement("img",{src:o.a,alt:"Facebook",style:{width:"1em",height:"1em"}})),n.a.createElement("a",{title:"twitter",target:"_blank",href:"https://twitter.com/melforprogress"},n.a.createElement("img",{className:"fas fa-lg",src:g.a,alt:"Twitter",style:{width:"1em",height:"1em"}})),n.a.createElement("a",{title:"instagram",target:"_blank",href:"https://instagram.com/mel.gagarin"},n.a.createElement("img",{src:u.a,alt:"Instagram",style:{width:"1em",height:"1em"}})))),n.a.createElement("div",null,"Paid for by Committee to Elect Mel Gagarin"))))},r}(n.a.Component);var m=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).toggleHamburger=function(){a.setState({active:!a.state.active},function(){a.state.active?a.setState({navBarActiveClass:"is-active"}):a.setState({navBarActiveClass:""})})},a.state={active:!1,navBarActiveClass:""},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this;return n.a.createElement("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main-navigation",id:"navbar"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(s.a,{to:"/",className:"navbar-item",title:"Logo"},n.a.createElement("div",{className:"navbar-title"},"Mel for Progress")),n.a.createElement("div",{className:"navbar-burger burger "+this.state.navBarActiveClass,"data-target":"navMenu",onClick:function(){return e.toggleHamburger()}},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))),n.a.createElement("div",{id:"navMenu",className:"navbar-menu "+this.state.navBarActiveClass},n.a.createElement("div",{className:"navbar-start has-text-centered"},n.a.createElement(s.a,{className:"navbar-item navbar-link",to:"/issues"},"Issues"),n.a.createElement(l.OutboundLink,{className:"navbar-item navbar-link",href:"https://secure.actblue.com/donate/melforprogress",target:"_blank"},"Donate")))))},r}(n.a.Component),j=(a(215),a(213)),M=function(){return j.data.site.siteMetadata};t.a=function(e){var t=e.children,a=M(),r=a.title,s=a.description;return n.a.createElement("div",null,n.a.createElement(i.Helmet,null,n.a.createElement("html",{lang:"en"}),n.a.createElement("title",null,r),n.a.createElement("meta",{name:"description",content:s}),n.a.createElement("link",{href:"https://actionnetwork.org/css/style-embed-v3.css",rel:"stylesheet",type:"text/css"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Oswald&display=swap",rel:"stylesheet"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto&display=swap",rel:"stylesheet"}),n.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/apple-touch-icon.png"}),n.a.createElement("meta",{name:"theme-color",content:"#fff"}),n.a.createElement("meta",{property:"og:type",content:"business.business"}),n.a.createElement("meta",{property:"og:title",content:r}),n.a.createElement("meta",{property:"og:url",content:"/"}),n.a.createElement("meta",{property:"og:image",content:"/img/og-image.jpg"})),n.a.createElement(m,null),n.a.createElement("div",{className:"template-content"},t),n.a.createElement(f,null))}},209:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(93);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},210:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIyLjY3NiAwSDEuMzI0Qy41OTMgMCAwIC41OTMgMCAxLjMyNHYyMS4zNTJDMCAyMy40MDguNTkzIDI0IDEuMzI0IDI0aDExLjQ5NHYtOS4yOTRIOS42ODl2LTMuNjIxaDMuMTI5VjguNDFjMC0zLjA5OSAxLjg5NC00Ljc4NSA0LjY1OS00Ljc4NSAxLjMyNSAwIDIuNDY0LjA5NyAyLjc5Ni4xNDF2My4yNGgtMS45MjFjLTEuNSAwLTEuNzkyLjcyMS0xLjc5MiAxLjc3MXYyLjMxMWgzLjU4NGwtLjQ2NSAzLjYzSDE2LjU2VjI0aDYuMTE1Yy43MzMgMCAxLjMyNS0uNTkyIDEuMzI1LTEuMzI0VjEuMzI0QzI0IC41OTMgMjMuNDA4IDAgMjIuNjc2IDAiLz48L3N2Zz4="},211:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SW5zdGFncmFtIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAwQzguNzQgMCA4LjMzMy4wMTUgNy4wNTMuMDcyIDUuNzc1LjEzMiA0LjkwNS4zMzMgNC4xNC42M2MtLjc4OS4zMDYtMS40NTkuNzE3LTIuMTI2IDEuMzg0Uy45MzUgMy4zNS42MyA0LjE0Qy4zMzMgNC45MDUuMTMxIDUuNzc1LjA3MiA3LjA1My4wMTIgOC4zMzMgMCA4Ljc0IDAgMTJzLjAxNSAzLjY2Ny4wNzIgNC45NDdjLjA2IDEuMjc3LjI2MSAyLjE0OC41NTggMi45MTMuMzA2Ljc4OC43MTcgMS40NTkgMS4zODQgMi4xMjYuNjY3LjY2NiAxLjMzNiAxLjA3OSAyLjEyNiAxLjM4NC43NjYuMjk2IDEuNjM2LjQ5OSAyLjkxMy41NThDOC4zMzMgMjMuOTg4IDguNzQgMjQgMTIgMjRzMy42NjctLjAxNSA0Ljk0Ny0uMDcyYzEuMjc3LS4wNiAyLjE0OC0uMjYyIDIuOTEzLS41NTguNzg4LS4zMDYgMS40NTktLjcxOCAyLjEyNi0xLjM4NC42NjYtLjY2NyAxLjA3OS0xLjMzNSAxLjM4NC0yLjEyNi4yOTYtLjc2NS40OTktMS42MzYuNTU4LTIuOTEzLjA2LTEuMjguMDcyLTEuNjg3LjA3Mi00Ljk0N3MtLjAxNS0zLjY2Ny0uMDcyLTQuOTQ3Yy0uMDYtMS4yNzctLjI2Mi0yLjE0OS0uNTU4LTIuOTEzLS4zMDYtLjc4OS0uNzE4LTEuNDU5LTEuMzg0LTIuMTI2QzIxLjMxOSAxLjM0NyAyMC42NTEuOTM1IDE5Ljg2LjYzYy0uNzY1LS4yOTctMS42MzYtLjQ5OS0yLjkxMy0uNTU4QzE1LjY2Ny4wMTIgMTUuMjYgMCAxMiAwem0wIDIuMTZjMy4yMDMgMCAzLjU4NS4wMTYgNC44NS4wNzEgMS4xNy4wNTUgMS44MDUuMjQ5IDIuMjI3LjQxNS41NjIuMjE3Ljk2LjQ3NyAxLjM4Mi44OTYuNDE5LjQyLjY3OS44MTkuODk2IDEuMzgxLjE2NC40MjIuMzYgMS4wNTcuNDEzIDIuMjI3LjA1NyAxLjI2Ni4wNyAxLjY0Ni4wNyA0Ljg1cy0uMDE1IDMuNTg1LS4wNzQgNC44NWMtLjA2MSAxLjE3LS4yNTYgMS44MDUtLjQyMSAyLjIyNy0uMjI0LjU2Mi0uNDc5Ljk2LS44OTkgMS4zODItLjQxOS40MTktLjgyNC42NzktMS4zOC44OTYtLjQyLjE2NC0xLjA2NS4zNi0yLjIzNS40MTMtMS4yNzQuMDU3LTEuNjQ5LjA3LTQuODU5LjA3LTMuMjExIDAtMy41ODYtLjAxNS00Ljg1OS0uMDc0LTEuMTcxLS4wNjEtMS44MTYtLjI1Ni0yLjIzNi0uNDIxLS41NjktLjIyNC0uOTYtLjQ3OS0xLjM3OS0uODk5LS40MjEtLjQxOS0uNjktLjgyNC0uOS0xLjM4LS4xNjUtLjQyLS4zNTktMS4wNjUtLjQyLTIuMjM1LS4wNDUtMS4yNi0uMDYxLTEuNjQ5LS4wNjEtNC44NDQgMC0zLjE5Ni4wMTYtMy41ODYuMDYxLTQuODYxLjA2MS0xLjE3LjI1NS0xLjgxNC40Mi0yLjIzNC4yMS0uNTcuNDc5LS45Ni45LTEuMzgxLjQxOS0uNDE5LjgxLS42ODkgMS4zNzktLjg5OC40Mi0uMTY2IDEuMDUxLS4zNjEgMi4yMjEtLjQyMSAxLjI3NS0uMDQ1IDEuNjUtLjA2IDQuODU5LS4wNmwuMDQ1LjAzem0wIDMuNjc4Yy0zLjQwNSAwLTYuMTYyIDIuNzYtNi4xNjIgNi4xNjIgMCAzLjQwNSAyLjc2IDYuMTYyIDYuMTYyIDYuMTYyIDMuNDA1IDAgNi4xNjItMi43NiA2LjE2Mi02LjE2MiAwLTMuNDA1LTIuNzYtNi4xNjItNi4xNjItNi4xNjJ6TTEyIDE2Yy0yLjIxIDAtNC0xLjc5LTQtNHMxLjc5LTQgNC00IDQgMS43OSA0IDQtMS43OSA0LTQgNHptNy44NDYtMTAuNDA1YzAgLjc5NS0uNjQ2IDEuNDQtMS40NCAxLjQ0LS43OTUgMC0xLjQ0LS42NDYtMS40NC0xLjQ0IDAtLjc5NC42NDYtMS40MzkgMS40NC0xLjQzOS43OTMtLjAwMSAxLjQ0LjY0NSAxLjQ0IDEuNDM5eiIvPjwvc3ZnPg=="},212:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},213:function(e){e.exports={data:{site:{siteMetadata:{title:"Mel for Progress",description:"Mel Gagarin is running for Congress to represent NY-6"}}}}},216:function(e,t,a){var r=a(1),n=a(7),i=a(32),s=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},224:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(240),s=a.n(i);t.a=function(e){var t=e.imageInfo,a={borderRadius:"5px"},r=t.alt,i=void 0===r?"":r,l=t.childImageSharp,A=t.image;return A&&A.childImageSharp?n.a.createElement(s.a,{style:a,fluid:A.childImageSharp.fluid,alt:i}):l?n.a.createElement(s.a,{style:a,fluid:l.fluid,alt:i}):A&&"string"==typeof A?n.a.createElement("img",{style:a,src:A,alt:i}):null}},225:function(e,t,a){"use strict";var r=a(242),n=a(0),i=a.n(n),s=a(205),l=a(224);var A=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return i.a.createElement("div",{className:"columns is-multiline"},e&&e.map(function(e){var t=e.node;return i.a.createElement("div",{className:"is-parent column is-6",key:t.id},i.a.createElement("article",{className:"blog-list-item tile is-child box notification "+(t.frontmatter.featuredpost?"is-featured":"")},i.a.createElement("header",null,t.frontmatter.featuredimage?i.a.createElement("div",{className:"featured-thumbnail"},i.a.createElement(l.a,{imageInfo:{image:t.frontmatter.featuredimage,alt:"featured image thumbnail for post "+t.title}})):null,i.a.createElement("p",{className:"post-meta"},i.a.createElement(s.a,{className:"title has-text-primary is-size-4",to:t.fields.slug},t.frontmatter.title),i.a.createElement("span",null," • "),i.a.createElement("span",{className:"subtitle is-size-5 is-block"},t.frontmatter.date))),i.a.createElement("p",null,t.excerpt,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(s.a,{className:"button",to:t.fields.slug},"Keep Reading →"))))}))},r}(i.a.Component);t.a=function(){return i.a.createElement(s.b,{query:"3722544792",render:function(e,t){return i.a.createElement(A,{data:e,count:t})},data:r})}},240:function(e,t,a){"use strict";a(29),a(30),a(14),a(96),a(153),a(241);var r=a(17);t.__esModule=!0,t.default=void 0;var n,i=r(a(75)),s=r(a(76)),l=r(a(154)),A=r(a(142)),o=r(a(0)),c=r(a(52)),u=function(e){var t=(0,A.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=L([].concat(t.fluid))),t.fixed&&(t.fixed=L([].concat(t.fixed))),t},d=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),f=function(e){var t=u(e),a=d(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,j="undefined"!=typeof window,M=j&&window.IntersectionObserver,N=new WeakMap;function p(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),o.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function L(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function h(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})})}function y(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var b=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(N.has(e.target)){var t=N.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),N.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),N.set(e,t)),function(){a.unobserve(e),N.delete(e)}},S=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",A=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?y(e,!0):"")+y(e)}).join("")+"<img "+o+s+l+a+r+t+i+n+A+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=o.default.createElement(w,(0,A.default)({src:t},n));return a.length>1?o.default.createElement("picture",null,r(a),i):i},w=o.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,d=e.draggable,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,A.default)({sizes:a,srcSet:r,src:n},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:d,style:(0,A.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});w.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=j&&f(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&M&&!t.critical&&!a.seenBefore;var r=t.critical||j&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=d(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,d=void 0===c?{}:c,g=e.placeholderClassName,f=e.fluid,m=e.fixed,j=e.backgroundColor,M=e.durationFadeIn,N=e.Tag,L=e.itemProp,y=e.loading,b=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,D=!0===this.state.fadeIn&&!this.state.imgCached,v=(0,A.default)({opacity:x?1:0,transition:D?"opacity "+M+"ms":"none"},l),T="boolean"==typeof j?"lightgray":j,z={transitionDelay:M+"ms"},C=(0,A.default)({opacity:this.state.imgLoaded?0:1},D&&z,l,d),Y={title:t,alt:this.state.isVisible?"":a,style:C,className:g};if(f){var Q=f,O=Q[0];return o.default.createElement(N,{className:(r||"")+" gatsby-image-wrapper",style:(0,A.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},o.default.createElement(N,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),T&&o.default.createElement(N,{title:t,style:(0,A.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},D&&z)}),O.base64&&o.default.createElement(I,{src:O.base64,spreadProps:Y,imageVariants:Q,generateSources:E}),O.tracedSVG&&o.default.createElement(I,{src:O.tracedSVG,spreadProps:Y,imageVariants:Q,generateSources:h}),this.state.isVisible&&o.default.createElement("picture",null,p(Q),o.default.createElement(w,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:L,loading:y,draggable:b})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,A.default)({alt:a,title:t,loading:y},O,{imageVariants:Q}))}}))}if(m){var k=m,B=k[0],U=(0,A.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},i);return"inherit"===i.display&&delete U.display,o.default.createElement(N,{className:(r||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},T&&o.default.createElement(N,{title:t,style:(0,A.default)({backgroundColor:T,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},D&&z)}),B.base64&&o.default.createElement(I,{src:B.base64,spreadProps:Y,imageVariants:k,generateSources:E}),B.tracedSVG&&o.default.createElement(I,{src:B.tracedSVG,spreadProps:Y,imageVariants:k,generateSources:h}),this.state.isVisible&&o.default.createElement("picture",null,p(k),o.default.createElement(w,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:L,loading:y,draggable:b})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,A.default)({alt:a,title:t,loading:y},B,{imageVariants:k}))}}))}return null},t}(o.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var D=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:D,sizes:v,fixed:c.default.oneOfType([D,c.default.arrayOf(D)]),fluid:c.default.oneOfType([v,c.default.arrayOf(v)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=x;t.default=T},241:function(e,t,a){"use strict";a(216)("fixed",function(e){return function(){return e(this,"tt","","")}})},242:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"This week we’ll take a look at all the steps required to make astonishing coffee with a Chemex at home. The Chemex Coffeemaker is a manual, pour-over style glass-container coffeemaker that Peter Schlumbohm invented in 1941, and which continues to be manufactured by the Chemex Corporation in Chicopee, Massachusetts. In 1958, designers at the Illinois Institute of Technology said that the Chemex…",id:"df8f52a8-f0bd-5541-976c-033687f5f92a",fields:{slug:"/blog/2017-01-04-a-beginners-guide-to-brewing-with-chemex/"},frontmatter:{title:"A beginners’ guide to brewing with Chemex",templateKey:"blog-post",date:"January 04, 2017",featuredpost:!1,featuredimage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABpy06iknQJ//EABsQAQACAgMAAAAAAAAAAAAAAAEAAhMUAxIi/9oACAEBAAEFAhB81mYm3yVdvs5C0//EABYRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAgBAwEBPwGtP//EABYRAQEBAAAAAAAAAAAAAAAAAAASAf/aAAgBAgEBPwGU4//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhEDEBIhIpH/2gAIAQEABj8CirJN6Vx4dsaZew//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUGBkf/aAAgBAQABPyGnnUVLVKmCPWzyddqLgpGmOUH2f//aAAwDAQACAAMAAAAQ+x//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEDAQE/EE+FH//EABYRAQEBAAAAAAAAAAAAAAAAAAEQQf/aAAgBAgEBPxBGw//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExQVFxofD/2gAIAQEAAT8Qvh6ud7uFSxhZebuBUFDgtqCGHyQPqp2EUtnjceyT84n/2Q==",aspectRatio:1.497659906396256,src:"/static/ad53658d229612b8d23d0307be253419/bb41f/chemex.jpg",srcSet:"/static/ad53658d229612b8d23d0307be253419/d3f3e/chemex.jpg 30w,\n/static/ad53658d229612b8d23d0307be253419/9cab2/chemex.jpg 60w,\n/static/ad53658d229612b8d23d0307be253419/bb41f/chemex.jpg 120w,\n/static/ad53658d229612b8d23d0307be253419/eb15c/chemex.jpg 180w,\n/static/ad53658d229612b8d23d0307be253419/53d18/chemex.jpg 240w,\n/static/ad53658d229612b8d23d0307be253419/0979f/chemex.jpg 1920w",sizes:"(max-width: 120px) 100vw, 120px"}}}}}},{node:{excerpt:"We expect the shipment of a limited quantity of green beans next Monday. We’ll be offering the roasted beans from Tuesday, but quantities are limited, so be quick. Blue Mountain Peak is the highest mountain in Jamaica and one of the highest peaks in the Caribbean at 7,402 ft. It is the home of Blue Mountain coffee and their famous tours. It is located on the border of the Portland and Saint Thomas…",id:"8199cd5d-e781-5048-8db8-ddf4acb1e8c0",fields:{slug:"/blog/2017-01-04-just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week/"},frontmatter:{title:"Just in: small batch of Jamaican Blue Mountain in store next week",templateKey:"blog-post",date:"January 04, 2017",featuredpost:!0,featuredimage:null}}},{node:{excerpt:"The SCAA updated the wheel to reflect the finer nuances needed to describe flavors more precisely. The new descriptions are more detailed and hence allow cuppers to distinguish between more flavors. While this is going to be a big change for professional coffee tasters, it means a lot to you as a consumer as well. We’ll explain how the wheel came to be, how pros use it and what the flavors…",id:"61f4e8bf-e886-5d4e-8725-ef3b73db18a1",fields:{slug:"/blog/2016-12-17-making-sense-of-the-scaas-new-flavor-wheel/"},frontmatter:{title:"Making sense of the SCAA’s new Flavor Wheel",templateKey:"blog-post",date:"December 17, 2016",featuredpost:!1,featuredimage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABBP/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAcAgztrnmf/EABoQAQEAAgMAAAAAAAAAAAAAAAIBAxIAEST/2gAIAQEAAQUCOboqHTIdUh5lmtNdXP/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwFOFP/EABYRAQEBAAAAAAAAAAAAAAAAAAARMf/aAAgBAgEBPwHUf//EABsQAAICAwEAAAAAAAAAAAAAAAABESECIjES/9oACAEBAAY/AtYpk5dbtkUhZy9nw80Wf//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQWFx/9oACAEBAAE/IV1BgTaSgFuId8nhG6lGXUPEL0B8jo7hU//aAAwDAQACAAMAAAAQHB//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxAI/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAWH/2gAIAQIBAT8Qwp//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMVFh/9oACAEBAAE/EGGKPrWWwixsQJLKfOx7wyKn0u8yafIoHvQruRvEFKaayGEIBWYcn//Z",aspectRatio:1.5036710719530102,src:"/static/19a6d5ab24bbc3b3531f11ecab349683/bb41f/flavor_wheel.jpg",srcSet:"/static/19a6d5ab24bbc3b3531f11ecab349683/d3f3e/flavor_wheel.jpg 30w,\n/static/19a6d5ab24bbc3b3531f11ecab349683/9cab2/flavor_wheel.jpg 60w,\n/static/19a6d5ab24bbc3b3531f11ecab349683/bb41f/flavor_wheel.jpg 120w,\n/static/19a6d5ab24bbc3b3531f11ecab349683/eb15c/flavor_wheel.jpg 180w,\n/static/19a6d5ab24bbc3b3531f11ecab349683/53d18/flavor_wheel.jpg 240w,\n/static/19a6d5ab24bbc3b3531f11ecab349683/6a8a9/flavor_wheel.jpg 1024w",sizes:"(max-width: 120px) 100vw, 120px"}}}}}}]}}}}}]);
//# sourceMappingURL=3-7eddcf4ccd03c40b3b35.js.map