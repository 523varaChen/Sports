(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-list/components/uni-list-chat/uni-list-chat"],{157:function(t,e,i){"use strict";i.r(e);var n=i(158),a=i(160);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i(174);var u,s=i(31),o=Object(s["default"])(a["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],u);o.options.__file="uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue",e["default"]=o.exports},158:function(t,e,i){"use strict";i.r(e);var n=i(159);i.d(e,"render",(function(){return n["render"]})),i.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]})),i.d(e,"recyclableRender",(function(){return n["recyclableRender"]})),i.d(e,"components",(function(){return n["components"]}))},159:function(t,e,i){"use strict";var n;i.r(e),i.d(e,"render",(function(){return a})),i.d(e,"staticRenderFns",(function(){return u})),i.d(e,"recyclableRender",(function(){return r})),i.d(e,"components",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=(t._self._c,t.isDraft?t.note.slice(14):null);t.$mp.data=Object.assign({},{$root:{g0:i}})},r=!1,u=[];a._withStripped=!0},160:function(t,e,i){"use strict";i.r(e);var n=i(161),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},161:function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=45,a={name:"UniListChat",emits:["click"],props:{title:{type:String,default:""},note:{type:String,default:""},clickable:{type:Boolean,default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},badgeText:{type:[String,Number],default:""},badgePositon:{type:String,default:"right"},time:{type:String,default:""},avatarCircle:{type:Boolean,default:!1},avatar:{type:String,default:""},avatarList:{type:Array,default:function(){return[]}}},computed:{isDraft:function(){return"[uni-im-draft]"==this.note.slice(0,14)},isSingle:function(){if("dot"===this.badgeText)return"uni-badge--dot";var t=this.badgeText.toString();return t.length>1?"uni-badge--complex":"uni-badge--single"},computedAvatar:function(){return this.avatarList.length>4?(this.imageWidth=.31*n,"avatarItem--3"):this.avatarList.length>1?(this.imageWidth=.47*n,"avatarItem--2"):(this.imageWidth=n,"avatarItem--1")}},watch:{avatar:{handler:function(e){var i=this;"cloud://"==e.substr(0,8)?t.getTempFileURL({fileList:[e]}).then((function(t){var e=t.fileList||t.result.fileList;i.avatarUrl=e[0].tempFileURL})):this.avatarUrl=e},immediate:!0}},data:function(){return{isFirstChild:!1,border:!0,imageWidth:50,avatarUrl:""}},mounted:function(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0),this.border=this.list.border)},methods:{getForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniList",e=this.$parent,i=e.$options.name;while(i!==t){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick:function(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},openPage:function(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi:function(t){var e=this,n={url:this.to,success:function(t){e.$emit("click",{data:t})},fail:function(t){e.$emit("click",{data:t})}};switch(t){case"navigateTo":i.navigateTo(n);break;case"redirectTo":i.redirectTo(n);break;case"reLaunch":i.reLaunch(n);break;case"switchTab":i.switchTab(n);break;default:i.navigateTo(n)}}}};e.default=a}).call(this,i(162)["default"],i(1)["default"])},174:function(t,e,i){"use strict";i.r(e);var n=i(175),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},175:function(t,e,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-list/components/uni-list-chat/uni-list-chat-create-component',
    {
        'uni_modules/uni-list/components/uni-list-chat/uni-list-chat-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(157))
        })
    },
    [['uni_modules/uni-list/components/uni-list-chat/uni-list-chat-create-component']]
]);