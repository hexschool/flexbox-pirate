(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e1dc3bd"],{"59ca":function(t,e,n){"use strict";function a(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}n("95c6");var o=a(n("c23d"));
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
 */t.exports=o},"8b48":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"all"},[n("button",{staticClass:"btn btn-lg btn-outline-primary",attrs:{type:"submit"},on:{click:function(e){return t.loginClick()}}},[n("i",{staticClass:"fab fa-google"}),t._v(" 使用google繼續\n  ")])])},o=[],i=n("59ca"),c=n.n(i),s={methods:{loginClick:function(){var t=c.a.auth(),e=this,n=new c.a.auth.GoogleAuthProvider;n.addScope("profile"),n.addScope("email"),t.signInWithPopup(n).then(function(t){var n={user:t.user},a=c.a.database().ref("/users/".concat(n.uid)).once("value").then(function(t){return t.displayName});"string"!==typeof a&&c.a.database().ref("users/".concat(n.uid)).set({email:n.email,displayName:n.displayName,photoURL:n.photoURL}),e.$router.push("/")}).catch(function(t){if("auth/account-exists-with-different-credential"===t.code){var e=t.email;console.log("google登入錯誤-使用者信箱：",e)}})}},created:function(){var t;c.a.auth().onAuthStateChanged(function(e){e?(t=e,console.log("User is logined",t)):(t=null,console.log("User is not logined yet."))})}},u=s,l=(n("cc39"),n("2877")),r=Object(l["a"])(u,a,o,!1,null,"5eb588a4",null);e["default"]=r.exports},b9f0:function(t,e,n){},cc39:function(t,e,n){"use strict";var a=n("b9f0"),o=n.n(a);o.a}}]);
//# sourceMappingURL=chunk-0e1dc3bd.9c64b59f.js.map