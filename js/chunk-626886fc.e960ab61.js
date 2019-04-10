(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-626886fc"],{"59ca":function(t,a,n){"use strict";function s(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}n("95c6");var i=s(n("c23d"));
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
 */t.exports=i},"7d36":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("Navbar",{attrs:{user:t.user}}),n("router-view",{attrs:{userData:t.userData}})],1)},i=[],e=n("59ca"),u=n.n(e),r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{},[n("button",{staticClass:"bar",on:{click:function(a){t.display=!t.display}}},[n("i",{staticClass:"fas fa-bars"})]),n("div",{class:{menu:!0,display:t.display}},[n("div",{staticClass:"content"},[t.user.id?n("div",{staticClass:"user"},[n("div",{staticClass:"photo",style:{backgroundImage:"url("+t.user.data.photoURL+")"}}),n("article",[n("router-link",{attrs:{to:"/login"}},[t._v("\n            "+t._s(t.user.data.displayName)+"\n          ")])],1)]):t._e(),n("ul",{staticClass:"list mt-5"},[n("li",{on:{click:function(a){t.display=!t.display}}},[n("router-link",{attrs:{to:"/game/start"}},[t._v("\n            挑戰海盜\n          ")])],1),n("li",{on:{click:function(a){t.display=!t.display}}},[n("router-link",{attrs:{to:"/ranking"}},[t._v("\n            排行榜\n          ")])],1)])]),n("div",{staticClass:"foot"}),n("button",{staticClass:"exit",on:{click:function(a){t.display=!1}}},[n("i",{staticClass:"fas fa-times"})])])])},c=[],o={props:["user"],data:function(){return{display:!1}},methods:{toggleMenu:function(){var t=this;t.display=!t.display},signOut:function(){u.a.auth().signOut().then(function(){},function(t){console.log("登出失敗",t)})}},created:function(){}},l=o,d=(n("9b88"),n("2877")),f=Object(d["a"])(l,r,c,!1,null,"57cf218d",null),p=f.exports,v={name:"Game",data:function(){return{userData:{},user:{},statue:{start:!1}}},components:{Navbar:p},methods:{LoginOrNot:function(){var t=this;u.a.auth().onAuthStateChanged(function(a){a?u.a.database().ref("users/".concat(a.uid)).on("value",function(a){t.user.data=a.val(),t.user.id=a.key}):t.user.id=""})}},created:function(){var t=this;t.$bus.$on("user:name",function(a){t.userData=a}),t.LoginOrNot()}},b=v,h=(n("e4dd"),Object(d["a"])(b,s,i,!1,null,"b9272872",null));a["default"]=h.exports},"81ec":function(t,a,n){},"9b88":function(t,a,n){"use strict";var s=n("b2e1"),i=n.n(s);i.a},b2e1:function(t,a,n){},e4dd:function(t,a,n){"use strict";var s=n("81ec"),i=n.n(s);i.a}}]);
//# sourceMappingURL=chunk-626886fc.e960ab61.js.map