(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb8a3f92"],{"59ca":function(t,a,e){"use strict";function s(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}e("95c6");var n=s(e("c23d"));
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
 */t.exports=n},"5d6b":function(t,a,e){var s=e("e53d").parseInt,n=e("a1ce").trim,i=e("e692"),o=/^[-+]?0[xX]/;t.exports=8!==s(i+"08")||22!==s(i+"0x16")?function(t,a){var e=n(String(t),3);return s(e,a>>>0||(o.test(e)?16:10))}:s},7445:function(t,a,e){var s=e("63b6"),n=e("5d6b");s(s.G+s.F*(parseInt!=n),{parseInt:n})},"83b0":function(t,a,e){},a1ce:function(t,a,e){var s=e("63b6"),n=e("25eb"),i=e("294c"),o=e("e692"),r="["+o+"]",l="​",c=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),d=function(t,a,e){var n={},r=i(function(){return!!o[t]()||l[t]()!=l}),c=n[t]=r?a(f):o[t];e&&(n[e]=c),s(s.P+s.F*r,"String",n)},f=d.trim=function(t,a){return t=String(n(t)),1&a&&(t=t.replace(c,"")),2&a&&(t=t.replace(u,"")),t};t.exports=d},b9e9:function(t,a,e){e("7445"),t.exports=e("584a").parseInt},de8a:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"all"},[e("Navbar",{attrs:{user:t.user}}),e("router-view",{attrs:{user:t.user}})],1)},n=[],i=e("e814"),o=e.n(i),r=e("59ca"),l=e.n(r),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("button",{staticClass:"bar",on:{click:function(a){t.display=!t.display}}},[e("i",{staticClass:"fas fa-bars"})]),e("div",{class:{menu:!0,display:t.display}},[e("div",{staticClass:"content"},[t.user.id?e("div",{staticClass:"user"},[e("div",{staticClass:"photo",style:{backgroundImage:"url("+t.user.data.photoURL+")"}}),e("p",{staticClass:"name"},[t._v(t._s(t.user.data.displayName))])]):t._e(),t.user.id?t._e():e("div",{staticClass:"user"},[e("p",{staticClass:"mb-2"},[t._v("尚未登入")]),e("a",{staticClass:"name",attrs:{href:"#","data-toggle":"modal","data-target":"#login-modal"},on:{click:function(a){t.display=!t.display}}},[t._v("\n          登入/註冊\n        ")])]),e("ul",{staticClass:"list mt-5"},[e("li",{on:{click:function(a){t.display=!t.display}}},[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"fas fa-skull-crossbones"}),t._v(" 挑戰海盜\n          ")])],1),e("li",{on:{click:function(a){t.display=!t.display}}},[e("router-link",{attrs:{to:"/ranking"}},[e("i",{staticClass:"fas fa-award"}),t._v(" 每週排行榜\n          ")])],1),e("li",{on:{click:function(a){t.display=!t.display}}},[t._m(0)])])]),e("div",{staticClass:"foot"},[t.user.id?e("button",{staticClass:"btn btn-small btn-success",on:{click:function(a){return t.signOut()}}},[t._v("\n        登出\n      ")]):t._e()]),e("button",{staticClass:"exit",on:{click:function(a){t.display=!1}}},[e("i",{staticClass:"fas fa-times"})])]),e("div",{staticClass:"modal fade",attrs:{id:"login-modal",tabindex:"-1",role:"dialog","aria-labelledby":"loginLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("button",{staticClass:"btn btn-lg btn-outline-primary",attrs:{type:"submit"},on:{click:function(a){return t.loginClick()}}},[e("i",{staticClass:"fab fa-google"}),t._v(" 使用 google 繼續\n        ")])])])])])},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{target:"_blank",href:"https://forms.gle/ogzpetD3RoKF63Zu8"}},[e("i",{staticClass:"fas fa-file-alt"}),t._v(" 意見回饋\n          ")])}],d=e("1157"),f=e.n(d),p={props:["user"],data:function(){return{display:!1}},methods:{toggleMenu:function(){var t=this;t.display=!t.display},signOut:function(){var t=this;l.a.auth().signOut().then(function(){},function(t){console.log("登出失敗",t)}),t.display=!t.display},loginClick:function(){var t=l.a.auth(),a=new l.a.auth.GoogleAuthProvider;a.addScope("profile"),a.addScope("email"),t.signInWithPopup(a).then(function(t){var a={user:t.user};f()("#login-modal").modal("hide"),l.a.database().ref("users/".concat(a.user.uid)).set({email:a.user.email,displayName:a.user.displayName,photoURL:a.user.photoURL}),console.log("登入成功~")}).catch(function(t){if("auth/account-exists-with-different-credential"===t.code){var a=t.email;console.log("google登入錯誤-使用者信箱：",a)}})}},created:function(){}},g=p,v=(e("f031"),e("2877")),b=Object(v["a"])(g,c,u,!1,null,"3b5a66ca",null),h=b.exports,m={name:"Front",data:function(){return{lastTime:"",user:{id:"",data:{photoURL:""}}}},components:{Navbar:h},methods:{LoginOrNot:function(){var t=this;l.a.auth().onAuthStateChanged(function(a){a?l.a.database().ref("users/".concat(a.uid)).on("value",function(a){t.user.data=a.val(),t.user.id=a.key}):t.user.id=""})},getLastDate:function(){var t=this;l.a.database().ref("resetDate/").once("value").then(function(a){t.lastTime=a.val()}).then(function(){t.resetDate()})},resetDate:function(){var t=this,a=new Date,e=o()(a-new Date(t.lastTime),10)/1e3/3600/24;if(e>=7){var s=Math.floor(t.getFirstDayOfWeek(a));l.a.database().ref("resetDate/").set(s)}},getFirstDayOfWeek:function(t){var a=t.getDay()||7;return new Date(t.getFullYear(),t.getMonth(),t.getDate()+1-a)}},created:function(){this.LoginOrNot(),this.getLastDate()}},y=m,C=Object(v["a"])(y,s,n,!1,null,null,null);a["default"]=C.exports},e692:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,a,e){t.exports=e("b9e9")},f031:function(t,a,e){"use strict";var s=e("83b0"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-bb8a3f92.afb2f7d9.js.map