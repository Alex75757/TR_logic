(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b5ece2a"],{"6be9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("h2",[t._v("Change contact "+t._s(t.task.title))]),a("form",{on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[t._l(t.task,(function(e,s){return a("div",{key:s,staticClass:"field"},[a("h4",[t._v(t._s(s)+" ")]),"id"!==s&&"email"!==s?a("input",{directives:[{name:"model",rawName:"v-model",value:t.task[s],expression:"task[i]"}],staticClass:"validate",attrs:{type:"text",required:""},domProps:{value:t.task[s]},on:{input:function(e){e.target.composing||t.$set(t.task,s,e.target.value)}}}):"email"==s?a("input",{directives:[{name:"model",rawName:"v-model",value:t.task[s],expression:"task[i]"}],staticClass:"validate",attrs:{type:"email",required:""},domProps:{value:t.task[s]},on:{input:function(e){e.target.composing||t.$set(t.task,s,e.target.value)}}}):a("p",{staticClass:"validate"},[t._v(" "+t._s(t.task[s])+" ")])])})),a("br"),a("button",{staticClass:"button button--delete",attrs:{type:"submit"}},[t._v(" Change contact")]),a("router-link",{staticClass:"button button--change",attrs:{tag:"button",to:"/addfield/"+t.task.id}},[t._v(" Add field ")]),a("router-link",{staticClass:"button button--delete",attrs:{tag:"button",to:"/deletefield/"+t.task.id}},[t._v(" Delete field ")]),a("button",{staticClass:"button",attrs:{type:"submit"},on:{click:t.changeCancel}},[t._v(" Cancel")])],2),a("router-view")],1)])},i=[],n={computed:{task:function(){return this.$store.getters.taskById(+this.$route.params.id)}},methods:{submitHandler:function(){this.$store.dispatch("updateContact",this.task.id),this.$router.push("/")},changeCancel:function(){this.$router.push("/")},addField:function(){this.$router.push("/addfield/"+this.task.id)},deleteField:function(){this.$router.push("/deletefield/"+this.task.id)}}},u=n,o=(a("86a1"),a("2877")),r=Object(o["a"])(u,s,i,!1,null,"8c49c53c",null);e["default"]=r.exports},"86a1":function(t,e,a){"use strict";a("e5bb")},e5bb:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1b5ece2a.5fb7b1dc.js.map