(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{5506:function(t,e,n){},"5b35":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("156a"));function i(t){return t&&t.__esModule?t:{default:t}}var s=function(){return n.e("components/myvideo").then(n.bind(null,"e591"))},a=function(){return n.e("components/other").then(n.bind(null,"08b5"))},u={data:function(){return{videoList:{},shareDetail:{},loginMsg:""}},components:{myvideo:s,other:a},created:function(){var e=this;t.login({provider:"weixin",scopes:"auth_base",success:function(n){o.default.thirdLogin({type:4,code:n.code}).then(function(n){return e.loginMsg=n.data,t.setStorage({key:"loginMsg",data:n.data.data,success:function(){console.log("获取登录验证成功")}}),o.default.videoList({},e.loginMsg.data.access_token)}).then(function(t){e.videoList=t.data.data.video_list,console.log(e.videoList,444444)})}})},mounted:function(){},onPullDownRefresh:function(){var e=this;this.videoList={},o.default.videoList({},this.loginMsg.data.access_token).then(function(t){e.videoList=t.data.data.video_list}),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){console.log("触底了");var t=this.videoList.length-1,e=this.videoList[t].video_id;this.getMoreVideo(e)},methods:{getUserInfo:function(e){t.navigateTo({url:"../userInfo/userInfo?user_id=".concat(e)})},del:function(t){console.log(t),this.videoList.splice(t,1)},getMoreVideo:function(t){var e=this;o.default.videoList({last_id:t},this.loginMsg.data.access_token).then(function(t){t.data.data.video_list.map(function(t){e.videoList.push(t)})})}}};e.default=u}).call(this,n("543d")["default"])},cf7d:function(t,e,n){"use strict";n.r(e);var o=n("fd39"),i=n("e898");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("d7bb");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"78f07922",null);e["default"]=u.exports},d7bb:function(t,e,n){"use strict";var o=n("5506"),i=n.n(o);i.a},e898:function(t,e,n){"use strict";n.r(e);var o=n("5b35"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},fd39:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}},[["6988","common/runtime","common/vendor"]]]);