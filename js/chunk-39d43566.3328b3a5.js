(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39d43566"],{"20ff":function(t,n,a){"use strict";a.r(n);var s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"rank-area"},[a("div",{staticClass:"content"},[a("div",{staticClass:"list-con"},t._l(t.data,function(n,s){return a("div",{key:s,staticClass:"list"},[a("div",{staticClass:"rank"},[t._v(t._s(s+1))]),a("div",{staticClass:"name"},[t._v(t._s(n.name))]),a("div",{staticClass:"sec"},[t._v(t._s(n.sec)+" 秒")])])}),0)])])},c=[],i=(a("55dd"),a("a4bb")),e=a.n(i),r=a("59ca"),u=a.n(r),o={name:"Ranking",data:function(){return{data:[]}},methods:{getData:function(){var t=this;u.a.database().ref("notLogin").once("value").then(function(n){var a=n.val(),s=e()(a);t.data=s.map(function(t){return a[t]}),t.data=t.data.filter(function(t){return t.sec>0}).sort(function(t,n){return t.sec>n.sec?1:-1})})}},created:function(){this.getData()}},f=o,l=(a("5569"),a("2877")),d=Object(l["a"])(f,s,c,!1,null,"5478f6f6",null);n["default"]=d.exports},"27b9":function(t,n,a){},"2f21":function(t,n,a){"use strict";var s=a("79e5");t.exports=function(t,n){return!!t&&s(function(){n?t.call(null,function(){},1):t.call(null)})}},5569:function(t,n,a){"use strict";var s=a("27b9"),c=a.n(s);c.a},"55dd":function(t,n,a){"use strict";var s=a("5ca1"),c=a("d8e8"),i=a("4bf8"),e=a("79e5"),r=[].sort,u=[1,2,3];s(s.P+s.F*(e(function(){u.sort(void 0)})||!e(function(){u.sort(null)})||!a("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(i(this)):r.call(i(this),c(t))}})},"59ca":function(t,n,a){"use strict";function s(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}a("95c6");var c=s(a("c23d"));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t.exports=c}}]);
//# sourceMappingURL=chunk-39d43566.3328b3a5.js.map