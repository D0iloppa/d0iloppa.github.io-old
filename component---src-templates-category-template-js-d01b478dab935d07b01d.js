(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5AJ6":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("wx14"),o=n("q1tI"),r=n.n(o),i=n("Ff2n"),c=n("iuhU"),l=n("H2TA"),s=n("NqtD"),u=o.forwardRef((function(e,t){var n=e.children,r=e.classes,l=e.className,u=e.color,f=void 0===u?"inherit":u,m=e.component,d=void 0===m?"svg":m,p=e.fontSize,v=void 0===p?"default":p,b=e.htmlColor,g=e.titleAccess,h=e.viewBox,w=void 0===h?"0 0 24 24":h,y=Object(i.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.createElement(d,Object(a.a)({className:Object(c.a)(r.root,l,"inherit"!==f&&r["color".concat(Object(s.a)(f))],"default"!==v&&r["fontSize".concat(Object(s.a)(v))]),focusable:"false",viewBox:w,color:b,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},y),n,g?o.createElement("title",null,g):null)}));u.muiName="SvgIcon";var f=Object(l.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(u);function m(e,t){var n=function(t,n){return r.a.createElement(f,Object(a.a)({ref:n},t),e)};return n.muiName=f.muiName,r.a.memo(r.a.forwardRef(n))}},MF2s:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),i=n("I/Ru"),c=n("vrFN"),l=n("9ft3"),s=n("xY/9"),u=n("6Rqd"),f=(n("v12b"),function(e){var t=e.tabIndex,n=e.onChange,a=e.tabs,r=e.posts;return o.a.createElement("div",{className:"posts-page-body-wrapper"},o.a.createElement("div",{className:"posts-page-body"},o.a.createElement(u.a,{className:"tabs",value:t,onChange:n,tabs:a}),o.a.createElement(s.a,{posts:0===t?r:r.filter((function(e){return e.categories.includes(a[t])})),showMoreButton:!1})))}),m=(n("nOBP"),function(e){var t=e.title,n=e.subtitle;return o.a.createElement("div",{className:"posts-page-header-wrapper"},o.a.createElement("div",{className:"posts-page-title"},t),o.a.createElement("div",{className:"posts-page-sub-title"},n))});t.default=function(e){var t=e.pageContext,n=t.edges,a=t.currentCategory,s=n.map((function(e){var t=e.node;return new l.a(t)})),u=t.categories,d=u.findIndex((function(e){return e===a}));return o.a.createElement(i.a,null,o.a.createElement(c.a,{title:"Posts"}),o.a.createElement(m,{title:u[d],subtitle:s.length+" posts"}),o.a.createElement(f,{tabIndex:d,onChange:function(e,t){0===t?Object(r.navigate)("/posts"):Object(r.navigate)("/posts/"+u[t])},tabs:u,posts:0===d?s:s.filter((function(e){return e.categories.includes(u[d])}))}))}},"g+pH":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("gk1O");function o(e){return Object(a.a)(e).defaultView||window}},gk1O:function(e,t,n){"use strict";function a(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return a}))},l3Wi:function(e,t,n){"use strict";function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function a(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];var i=this,c=function(){e.apply(i,o)};clearTimeout(t),t=setTimeout(c,n)}return a.clear=function(){clearTimeout(t)},a}n.d(t,"a",(function(){return a}))},nOBP:function(e,t,n){},tr08:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("aXM8"),o=(n("q1tI"),n("cNwE"));function r(){return Object(a.a)()||o.a}},v12b:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-category-template-js-d01b478dab935d07b01d.js.map