(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-069f3291"],{"54f7":function(t,e,n){},"5d6b":function(t,e,n){var r=n("e53d").parseInt,a=n("a1ce").trim,c=n("e692"),s=/^[-+]?0[xX]/;t.exports=8!==r(c+"08")||22!==r(c+"0x16")?function(t,e){var n=a(String(t),3);return r(n,e>>>0||(s.test(n)?16:10))}:r},7445:function(t,e,n){var r=n("63b6"),a=n("5d6b");r(r.G+r.F*(parseInt!=a),{parseInt:a})},a1ce:function(t,e,n){var r=n("63b6"),a=n("25eb"),c=n("294c"),s=n("e692"),i="["+s+"]",o="​",u=RegExp("^"+i+i+"*"),f=RegExp(i+i+"*$"),l=function(t,e,n){var a={},i=c(function(){return!!s[t]()||o[t]()!=o}),u=a[t]=i?e(p):s[t];n&&(a[n]=u),r(r.P+r.F*i,"String",a)},p=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},b8cb:function(t,e,n){"use strict";var r=n("54f7"),a=n.n(r);a.a},b9e9:function(t,e,n){n("7445"),t.exports=n("584a").parseInt},c202:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"end"},[n("h3",{staticClass:"title"},[t._v("— 恭喜過關 —")]),t.sec&&t.sec>0?n("h2",{staticClass:"h1 mt-3"},[t._v("你花了 "+t._s(t.sec)+" 秒完成關卡")]):t._e(),n("p",{staticClass:"mt-3 text-center"},[t._v("\n    如果你喜歡我們的小遊戲，歡迎點擊下方連結提供意見回饋，以提升遊戲品質\n  ")]),n("a",{staticClass:"btn btn-warning mt-5",attrs:{href:"https://forms.gle/ogzpetD3RoKF63Zu8",target:"_blank"}},[t._v("意見回饋")])])},a=[],c=n("e814"),s=n.n(c),i={name:"simple_end",data:function(){return{sec:""}},methods:{getSec:function(){var t=localStorage.getItem("startTime"),e=localStorage.getItem("endTime");this.sec=s()(new Date(e)-new Date(t),10)/1e3}},created:function(){var t=this;t.getSec();var e=localStorage.getItem("endTime");(""===e||e<0)&&t.$router.push("/")}},o=i,u=(n("b8cb"),n("2877")),f=Object(u["a"])(o,r,a,!1,null,"49c3692a",null);e["default"]=f.exports},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,n){t.exports=n("b9e9")}}]);
//# sourceMappingURL=chunk-069f3291.0b73d28d.js.map