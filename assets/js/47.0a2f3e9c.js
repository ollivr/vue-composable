(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{361:function(e,t,r){"use strict";r.r(t);r(53),r(38),r(36);var n=r(39),o=r(72),u=r(209),i=r(319),a=function(e){var t,r=e.length-1,n=e.slice();do{t=!1;for(var o=0;o<r;o+=1)if(n[o]>n[o+1]){var u=n[o];n[o]=n[o+1],n[o+1]=u,t=!0}r-=1}while(t);return n},c=Object(o.c)({name:"worker-function-example",setup:function(){var e=Object(o.k)(15e3),t=Object(u.q)({refreshMs:10}).now,r=Object(n.a)(Array(5e4)).map((function(){return Math.floor(1e6*Math.random())})),c=Object(o.k)([]),l=Object(o.a)((function(){return c.value.slice(0,10)})),s=Object(o.a)((function(){return c.value.slice(-10)})),v=Object(i.y)(a,{timeout:e}),m=v.exec;return{now:t,timeout:e,firstSegment:l,lastSegment:s,sortArray:function(){c.value=a(r)},sortWorker:function(){m(r).then((function(e){return c.value=e})).catch((function(e){return c.value=["error",e]}))},working:v.loading,error:v.error,cancelled:v.cancelled}}}),l=r(19),s=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Sort")]),e._v(" "),r("p",[e._v("time: "+e._s(e.now))]),e._v(" "),r("h6",[e._v("\n    If UI thread is working the refresh rate should go down and the time will\n    stop\n  ")]),e._v(" "),r("div",[r("label",[e._v("Timeout")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.timeout,expression:"timeout",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.timeout},on:{input:function(t){t.target.composing||(e.timeout=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("p",[e._v("\n    Numbers:\n    "),r("b",[e._v(e._s(e.firstSegment))]),e._v("...\n    "),r("b",[e._v(e._s(e.lastSegment))])]),e._v(" "),r("ul",[r("li",[r("button",{on:{click:e.sortArray}},[e._v("Function")])]),e._v(" "),r("li",[r("button",{attrs:{disabled:e.working},on:{click:e.sortWorker}},[e._v("Worker")]),e._v(" "),e.cancelled?r("p",{style:{color:"red"}},[e._v(e._s(e.error))]):e._e()])])])}),[],!1,null,null,null);t.default=s.exports}}]);