(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{336:function(e,t,n){var r=n(2),a=n(337),u=n(106);r({target:"Array",proto:!0},{fill:a}),u("fill")},337:function(e,t,n){"use strict";var r=n(13),a=n(107),u=n(15);e.exports=function(e){for(var t=r(this),n=u(t.length),l=arguments.length,i=a(l>1?arguments[1]:void 0,n),c=l>2?arguments[2]:void 0,o=void 0===c?n:a(c,n);o>i;)t[i++]=e;return t}},447:function(e,t,n){"use strict";n.r(t);n(336),n(105),n(73),n(51);var r=n(103),a=n(314),u={name:"pagination-example",setup:function(){var e=Object(r.k)(new Array(100).fill(1).map((function(e,t){return t}))),t=Object(a.F)({currentPage:1,pageSize:10,total:Object(r.a)((function(){return e.value.length}))}),n=t.currentPage,u=t.lastPage,l=t.next,i=t.prev,c=t.offset,o=t.pageSize;return{currentPage:n,lastPage:u,next:l,prev:i,result:Object(r.a)((function(){var t=e.value;return Array.isArray(t)?t.slice(c.value,c.value+o.value):[]}))}}},l=n(27),i=Object(l.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("page "+e._s(e.currentPage)+" of "+e._s(e.lastPage))]),e._v(" "),n("p",[n("button",{on:{click:e.prev}},[e._v("prev")]),e._v(" "),n("button",{on:{click:e.next}},[e._v("next")])]),e._v(" "),n("ul",e._l(e.result,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0)])}),[],!1,null,null,null);t.default=i.exports}}]);