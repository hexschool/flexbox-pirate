(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af21b1e8"],{"0f31":function(t,n,a){"use strict";var c=a("155d"),s=a.n(c);s.a},"155d":function(t,n,a){},"20ff":function(t,n,a){"use strict";a.r(n);var c=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"rank-area"},[a("div",{staticClass:"content"},[a("div",{staticClass:"list-con"},t._l(t.data,function(n,c){return a("div",{key:c,staticClass:"list"},[a("div",{staticClass:"rank"},[t._v(t._s(c+1))]),a("div",{staticClass:"name"},[t._v(t._s(n.nickName))]),a("div",{staticClass:"sec"},[t._v(t._s(n.sec)+" 秒")])])}),0)])])},s=[],e=(a("55dd"),a("a4bb")),i=a.n(e),r=a("59ca"),u=a.n(r),o={name:"Ranking",data:function(){return{data:[]}},methods:{getData:function(){var t=this;u.a.database().ref("records").once("value").then(function(n){var a=n.val(),c=i()(a);t.data=c.map(function(t){return a[t]}),t.data=t.data.filter(function(t){return t.sec>0}).sort(function(t,n){return t.sec>n.sec?1:-1})})}},created:function(){this.getData()}},f=o,l=(a("0f31"),a("2877")),d=Object(l["a"])(f,c,s,!1,null,"3b4a0cd6",null);n["default"]=d.exports},"2f21":function(t,n,a){"use strict";var c=a("79e5");t.exports=function(t,n){return!!t&&c(function(){n?t.call(null,function(){},1):t.call(null)})}},"55dd":function(t,n,a){"use strict";var c=a("5ca1"),s=a("d8e8"),e=a("4bf8"),i=a("79e5"),r=[].sort,u=[1,2,3];c(c.P+c.F*(i(function(){u.sort(void 0)})||!i(function(){u.sort(null)})||!a("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(e(this)):r.call(e(this),s(t))}})},"59ca":function(t,n,a){"use strict";function c(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}a("95c6");var s=c(a("c23d"));
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
 */t.exports=s}}]);
//# sourceMappingURL=chunk-af21b1e8.854da859.js.map