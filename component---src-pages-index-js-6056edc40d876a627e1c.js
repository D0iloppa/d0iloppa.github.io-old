(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("KQm4"),r=a("q1tI"),c=a.n(r),u=a("I/Ru"),o=a("vrFN"),l=a("Otpx"),s=a("xY/9"),i=a("9ft3"),m=a("6Rqd"),b=a("L6NH");t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges.map((function(e){var t=e.node;return new i.a(t)})),d=t.site.siteMetadata,f=d.author,p=d.language,w=["All"].concat(Object(n.a)(Object(b.a)(a))),g=Object(r.useState)(0),h=g[0],O=g[1],j=Object(r.useMemo)((function(){return 0===h?a:a.filter((function(e){return e.categories.includes(w[h])}))}),[w,h,a]),k=Object(r.useCallback)((function(e,t){return O(t)}),[]);return c.a.createElement(u.a,null,c.a.createElement(o.a,{title:"Home"}),c.a.createElement(l.a,{author:f,language:p}),c.a.createElement(m.a,{className:"tabs",value:h,onChange:k,tabs:w}),c.a.createElement(s.a,{posts:j.slice(0,4),moreUrl:"posts/"+(0===h?"":w[h]),showMoreButton:j.length>4}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6056edc40d876a627e1c.js.map