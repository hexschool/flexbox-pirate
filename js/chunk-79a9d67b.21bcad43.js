(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79a9d67b"],{"4bf7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.statue.start?e._e():n("div",{staticClass:"gameStart"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.statGame(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"請輸入暱稱"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),n("input",{attrs:{type:"submit",value:"確定",disabled:""===e.user.name}})])])])},r=[],u=(n("7f7f"),n("59ca")),s=n.n(u),i={name:"Game",data:function(){return{user:{id:"",name:""},statue:{start:!1}}},methods:{statGame:function(){var e=this,t=new Date,n=Math.floor(t/1e3);e.user.id=n+e.user.name,s.a.database().ref("notLogin/".concat(e.user.id)).set({name:e.user.name,startTime:String(t),endTime:"未完成"}),this.$bus.$emit("user:name",e.user),e.$router.push("play")}}},o=i,c=(n("81a0"),n("2877")),f=Object(c["a"])(o,a,r,!1,null,"6b0b2056",null);t["default"]=f.exports},"59ca":function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}n("95c6");var r=a(n("c23d"));
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
 */e.exports=r},"7f7f":function(e,t,n){var a=n("86cc").f,r=Function.prototype,u=/^\s*function ([^ (]*)/,s="name";s in r||n("9e1e")&&a(r,s,{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(e){return""}}})},"81a0":function(e,t,n){"use strict";var a=n("df30"),r=n.n(a);r.a},df30:function(e,t,n){}}]);
//# sourceMappingURL=chunk-79a9d67b.21bcad43.js.map