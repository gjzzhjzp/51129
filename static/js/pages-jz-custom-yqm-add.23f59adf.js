(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jz-custom-yqm-add"],{"20ea":function(t,e,n){"use strict";n.r(e);var a=n("5a85"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},3960:function(t,e,n){var a=n("adc5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("bcbfb042",a,!0,{sourceMap:!1,shadowMode:!1})},"3ab3":function(t,e,n){var a=n("8c8e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0cf935c1",a,!0,{sourceMap:!1,shadowMode:!1})},"59d6":function(t,e,n){"use strict";n.r(e);var a=n("e270"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"5a85":function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("c975"),n("b64b"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=n("6985"),u=t.database(),o="jz-custom-yqm";function s(t){var e={};for(var n in r.validator)t.indexOf(n)>-1&&(e[n]=r.validator[n]);return e}var c={data:function(){var t={user_name_type:0,user_name:"",value:"",status:!0};return{number:1,description:"邀请码用于查看加密资源详情，一天最多申请5个，每个邀请码用一次失效，且只能申请账号在申请当天使用，过期失效",formData:t,formOptions:{user_name_type_localdata:[{value:0,text:"微博"},{value:1,text:"抖音"}]},rules:(0,i.default)({},s(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return console.log("value",t),Object.assign(t,{user_id:u.getCloudEnv("$cloudEnv_uid")}),u.collection(o).add(t).then((function(t){uni.showToast({icon:"none",title:"已申请，等待管理员审核"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))}}};e.default=c}).call(this,n("a9ff")["default"])},6288:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uIcon:n("e850").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-numberbox"},[n("v-uni-view",{staticClass:"u-icon-minus",class:{"u-icon-disabled":t.disabled||t.inputVal<=t.min},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.btnTouchStart("minus")},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTimer.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"minus",size:t.size}})],1),n("v-uni-input",{staticClass:"u-number-input",class:{"u-input-disabled":t.disabled},style:{color:t.color,fontSize:t.size+"rpx",background:t.bgColor,height:t.inputHeight+"rpx",width:t.inputWidth+"rpx"},attrs:{disabled:t.disabledInput||t.disabled,"cursor-spacing":t.getCursorSpacing,type:"number"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.onBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)}},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}}),n("v-uni-view",{staticClass:"u-icon-plus",class:{"u-icon-disabled":t.disabled||t.inputVal>=t.max},style:{background:t.bgColor,height:t.inputHeight+"rpx",color:t.color},on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.btnTouchStart("plus")},touchend:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTimer.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"plus",size:t.size}})],1)],1)},r=[]},6985:function(t,e,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=s,e.enumConverter=e.validator=void 0;var i=a(n("3835")),r=a(n("b85c")),u={user_name_type:{rules:[{format:"int"},{range:[{value:0,text:"微博"},{value:1,text:"抖音"}]}],defaultValue:0,label:"账号平台"},user_name:{rules:[{format:"string"}],label:"账号昵称"},value:{rules:[{format:"string"}],label:"邀请码"},status:{rules:[{format:"bool"}],defaultValue:!0,label:"生效状态"}};e.validator=u;var o={user_name_type_valuetotext:{0:"微博",1:"抖音"}};function s(t,e){var n={};for(var a in t){var u=t[a],o=u.type,s=u.value;switch(o){case"search":"string"===typeof s&&s.length&&(n[a]=new RegExp(s));break;case"select":if(s.length){var c,l=[],d=(0,r.default)(s);try{for(d.s();!(c=d.n()).done;){var f=c.value;l.push(e.eq(f))}}catch(_){d.e(_)}finally{d.f()}n[a]=e.or(l)}break;case"range":if(s.length){var p=s[0],h=s[1];n[a]=e.and([e.gte(p),e.lte(h)])}break;case"date":if(s.length){var m=(0,i.default)(s,2),v=m[0],b=m[1],g=new Date(v),x=new Date(b);n[a]=e.and([e.gte(g),e.lte(x)])}break;case"timestamp":if(s.length){var y=(0,i.default)(s,2),w=y[0],C=y[1];n[a]=e.and([e.gte(w),e.lte(C)])}break}}return n}e.enumConverter=o},"7bb5":function(t,e,n){"use strict";var a=n("3ab3"),i=n.n(a);i.a},"8c8e":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-container[data-v-6cba1f7e]{padding:15px}.uni-input-border[data-v-6cba1f7e],\n.uni-textarea-border[data-v-6cba1f7e]{width:100%;font-size:14px;color:#666;border:1px #e5e5e5 solid;border-radius:5px;box-sizing:border-box}.uni-input-border[data-v-6cba1f7e]{padding:0 10px;height:35px}.uni-textarea-border[data-v-6cba1f7e]{padding:10px;height:80px}.uni-button-group[data-v-6cba1f7e]{margin-top:50px;\ndisplay:flex;\njustify-content:center}.uni-button[data-v-6cba1f7e]{width:184px;padding:12px 20px;font-size:14px;border-radius:4px;line-height:1;margin:0}",""]),t.exports=e},a592:function(t,e,n){"use strict";var a=n("3960"),i=n.n(a);i.a},adc5:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/***字体大小规范***/\r\n/***颜色定义***/\r\n/***行间距***/.u-numberbox[data-v-1efc5dca]{display:inline-flex;align-items:center}.u-number-input[data-v-1efc5dca]{position:relative;text-align:center;padding:0;margin:0 %?6?%;display:flex;flex-direction:row;align-items:center;justify-content:center}.u-icon-plus[data-v-1efc5dca],\r\n.u-icon-minus[data-v-1efc5dca]{width:%?60?%;display:flex;flex-direction:row;justify-content:center;align-items:center}.u-icon-plus[data-v-1efc5dca]{border-radius:0 %?8?% %?8?% 0}.u-icon-minus[data-v-1efc5dca]{border-radius:%?8?% 0 0 %?8?%}.u-icon-disabled[data-v-1efc5dca]{color:#c8c9cc!important;background:#f7f8fa!important}.u-input-disabled[data-v-1efc5dca]{color:#c8c9cc!important;background-color:#f2f3f5!important}',""]),t.exports=e},c412:function(t,e,n){"use strict";n.r(e);var a=n("6288"),i=n("59d6");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a592");var u,o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"1efc5dca",null,!1,a["a"],u);e["default"]=s.exports},e270:function(t,e,n){"use strict";n("c975"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-number-box",props:{value:{type:Number,default:1},bgColor:{type:String,default:"#F2F3F5"},min:{type:Number,default:0},max:{type:Number,default:99999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:26},color:{type:String,default:"#323233"},inputWidth:{type:[Number,String],default:80},inputHeight:{type:[Number,String],default:50},index:{type:[Number,String],default:""},disabledInput:{type:Boolean,default:!1},cursorSpacing:{type:[Number,String],default:100},longPress:{type:Boolean,default:!0},pressTime:{type:[Number,String],default:250},positiveInteger:{type:Boolean,default:!0}},watch:{value:function(t,e){this.changeFromInner||(this.inputVal=t,this.$nextTick((function(){this.changeFromInner=!1})))},inputVal:function(t,e){var n=this;if(""!=t){var a=0,i=this.$u.test.number(t);a=i&&t>=this.min&&t<=this.max?t:e,this.positiveInteger&&(t<0||-1!==String(t).indexOf("."))&&(a=e,this.$nextTick((function(){n.inputVal=e}))),this.handleChange(a,"change")}}},data:function(){return{inputVal:1,timer:null,changeFromInner:!1,innerChangeTimer:null}},created:function(){this.inputVal=Number(this.value)},computed:{getCursorSpacing:function(){return Number(uni.upx2px(this.cursorSpacing))}},methods:{btnTouchStart:function(t){var e=this;this[t](),this.longPress&&(clearInterval(this.timer),this.timer=null,this.timer=setInterval((function(){e[t]()}),this.pressTime))},clearTimer:function(){var t=this;this.$nextTick((function(){clearInterval(t.timer),t.timer=null}))},minus:function(){this.computeVal("minus")},plus:function(){this.computeVal("plus")},calcPlus:function(t,e){var n,a,i;try{a=t.toString().split(".")[1].length}catch(u){a=0}try{i=e.toString().split(".")[1].length}catch(u){i=0}n=Math.pow(10,Math.max(a,i));var r=a>=i?a:i;return((t*n+e*n)/n).toFixed(r)},calcMinus:function(t,e){var n,a,i;try{a=t.toString().split(".")[1].length}catch(u){a=0}try{i=e.toString().split(".")[1].length}catch(u){i=0}n=Math.pow(10,Math.max(a,i));var r=a>=i?a:i;return((t*n-e*n)/n).toFixed(r)},computeVal:function(t){if(uni.hideKeyboard(),!this.disabled){var e=0;"minus"===t?e=this.calcMinus(this.inputVal,this.step):"plus"===t&&(e=this.calcPlus(this.inputVal,this.step)),e<this.min||e>this.max||(this.inputVal=e,this.handleChange(e,t))}},onBlur:function(t){var e=this,n=0,a=t.detail.value;/(^\d+$)/.test(a)&&0!=a[0]||(n=this.min),n=+a,n>this.max?n=this.max:n<this.min&&(n=this.min),this.$nextTick((function(){e.inputVal=n})),this.handleChange(n,"blur")},onFocus:function(){this.$emit("focus")},handleChange:function(t,e){var n=this;this.disabled||(this.innerChangeTimer&&(clearTimeout(this.innerChangeTimer),this.innerChangeTimer=null),this.changeFromInner=!0,this.innerChangeTimer=setTimeout((function(){n.changeFromInner=!1}),150),this.$emit("input",Number(t)),this.$emit(e,{value:Number(t),index:this.index}))}}};e.default=a},e53d:function(t,e,n){"use strict";n.r(e);var a=n("fe2c"),i=n("20ea");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("7bb5");var u,o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"6cba1f7e",null,!1,a["a"],u);e["default"]=s.exports},fe2c:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("01c9").default,uniForms:n("df7d").default,uAlertTips:n("9836").default,uniFormsItem:n("c51d").default,uNumberBox:n("c412").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-container uni-yqm"},[n("u-navbar",{attrs:{"is-back":!0,title:"申请邀请码"}}),n("uni-forms",{ref:"form",attrs:{value:t.formData,"validate-trigger":"submit","err-show-type":"toast"}},[n("u-alert-tips",{attrs:{type:"warning",description:t.description}}),n("v-uni-view",{staticStyle:{"margin-top":"20px"}},[n("uni-forms-item",{attrs:{name:"user_name_type",label:"申请个数:"}},[n("v-uni-view",{staticStyle:{"margin-top":"6px"}},[n("u-number-box",{attrs:{max:5,min:1,size:40},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-button-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)},r=[]}}]);