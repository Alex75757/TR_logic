(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4b25"],{"0818":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col s6 offset-s3"},[e("h1",[t._v("Delete contact")]),e("label",{attrs:{for:""}},[t._v(" Are you shure?")]),e("hr"),e("h3",[t._v(" Contact")]),e("div",[t._v("Title: "+t._s(t.task.title))]),e("div",[t._v("Description: "+t._s(t.task.description))]),e("hr"),e("h4",[t._v("Delete?")]),e("button",{staticClass:"button button--delete",attrs:{type:"button"},on:{click:t.submitDelete}},[t._v(" Yes")]),e("button",{staticClass:"button button--change",attrs:{type:"button"},on:{click:t.submitCancel}},[t._v(" No")])])])},i=[],o={computed:{task:function(){return this.$store.getters.taskById(+this.$route.params.id)}},methods:{submitDelete:function(){this.$store.dispatch("deleteContact",this.task.id),this.$router.push("/")},submitCancel:function(){this.$router.push("/")}}},a=o,u=e("2877"),c=Object(u["a"])(a,n,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0a4b25.25a9cc08.js.map