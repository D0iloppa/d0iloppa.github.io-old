(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("KQm4"),r=a("q1tI"),o=a.n(r),u=a("I/Ru"),c=a("vrFN"),s=a("Otpx"),i=a("xY/9"),l=a("9ft3"),f=a("6Rqd");a("ToJy"),t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges.map((function(e){var t=e.node;return new l.a(t)})),m=t.site.siteMetadata,p=m.author,d=m.language,b=["All"].concat(Object(n.a)(function(e){var t={};return e.forEach((function(e){e.categories.forEach((function(e){t[e]=t[e]?t[e]+1:1}))})),function(e){var t=[];for(var a in e)t.push([a,e[a]]);return t.sort((function(e,t){return t[1]-e[1]})),t}(t).map((function(e){return e[0]}))}(a))),g=Object(r.useState)(0),h=g[0],w=g[1],v=Object(r.useMemo)((function(){return 0===h?a:a.filter((function(e){return e.categories.includes(b[h])}))}),[b,h,a]),E=Object(r.useCallback)((function(e,t){return w(t)}),[]);return o.a.createElement(u.a,null,o.a.createElement(c.a,{title:"Home"}),o.a.createElement(s.a,{author:p,language:d}),o.a.createElement(f.a,{className:"tabs",value:h,onChange:E,tabs:b}),o.a.createElement(i.a,{posts:v.slice(0,4),moreUrl:"posts/"+(0===h?"":b[h]),showMoreButton:v.length>4}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-66e85e030e33cc2034bf.js.map