(function(t){function e(e){for(var c,a,s=e[0],r=e[1],u=e[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(c=!1)}c&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var c={},i={app:0},o=[];function a(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=c,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)a.d(n,c,function(e){return t[e]}.bind(null,c));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/todo-list/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"305e":function(t,e,n){"use strict";n("f674")},"3e8e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function i(t,e){var n=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["e"])(n)}const o={};o.render=i;var a=o,s=n("6c02"),r=Object(c["E"])("data-v-2e826cef");Object(c["t"])("data-v-2e826cef");var u={class:"container"};Object(c["r"])();var l=r((function(t,e,n,i,o,a){var s=Object(c["x"])("app-header"),r=Object(c["x"])("todo-list"),l=Object(c["x"])("app-footer");return Object(c["q"])(),Object(c["e"])("div",u,[Object(c["h"])(s),Object(c["h"])(r),Object(c["h"])(l)])})),d=Object(c["E"])("data-v-7ca863aa");Object(c["t"])("data-v-7ca863aa");var f=Object(c["h"])("div",{class:"title"},"Todo List",-1);Object(c["r"])();var b=d((function(t,e,n,i,o,a){return Object(c["q"])(),Object(c["e"])("header",null,[f])})),h={name:"Header"};n("305e");h.render=b,h.__scopeId="data-v-7ca863aa";var p=h,v=Object(c["E"])("data-v-6b2b372c");Object(c["t"])("data-v-6b2b372c");var O={class:"tab"},j=Object(c["h"])("i",{class:"iconfont icon-done"},null,-1),m=Object(c["g"])(" 已完成"),y=Object(c["h"])("i",{class:"iconfont icon-todo"},null,-1),g=Object(c["g"])(" 待办");Object(c["r"])();var k=v((function(t,e,n,i,o,a){return Object(c["q"])(),Object(c["e"])("footer",null,[Object(c["h"])("ul",O,[Object(c["h"])("li",{class:["tab-item",{active:"0"===a.status}],onClick:e[1]||(e[1]=function(t){return a.status="0"})},[j,m],2),Object(c["h"])("li",{class:["tab-item",{active:"1"===a.status}],onClick:e[2]||(e[2]=function(t){return a.status="1"})},[y,g],2)])])})),x={name:"Footer",data:function(){return{}},computed:{status:{get:function(){return this.$store.getters.status},set:function(t){this.$store.dispatch("setStatus",t)}}}};n("a75c");x.render=k,x.__scopeId="data-v-6b2b372c";var T=x,C=Object(c["E"])("data-v-67a8c989");Object(c["t"])("data-v-67a8c989");var w={class:"todo-list"},L={ref:"slide-todo-wrap",class:"todo"},S={class:"btn-box"},q=Object(c["h"])("i",{class:"iconfont icon-edit"},null,-1),I=Object(c["h"])("i",{class:"iconfont icon-delete"},null,-1),_={key:0,class:"empty"},A={key:1,class:"insert-wrap"},D={ref:"slide-done-wrap",class:"done"},E={class:"btn-box",style:{"z-index":"-1"}},$=Object(c["h"])("i",{class:"iconfont icon-edit"},null,-1),M=Object(c["h"])("i",{class:"iconfont icon-delete"},null,-1),P={key:0,class:"empty"},X={key:1,class:"insert-wrap"};Object(c["r"])();var N=C((function(t,e,n,i,o,a){return Object(c["q"])(),Object(c["e"])("div",w,[Object(c["h"])(c["b"],{name:"slide-right"},{default:C((function(){return[Object(c["D"])(Object(c["h"])("section",L,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(o.todoList,(function(t){return Object(c["q"])(),Object(c["e"])("div",{key:t.id,class:"todo-item slide-item"},[Object(c["h"])("i",{class:"iconfont icon-yuanxing",onClick:function(e){return a.handleDone(t.id,t.isComplete)}},null,8,["onClick"]),Object(c["h"])("span",null,Object(c["z"])(t.content),1),Object(c["h"])("div",S,[Object(c["h"])("div",{class:"edit",onClick:function(e){return a.handleEdit(t.id,t.content)}},[q],8,["onClick"]),Object(c["h"])("div",{class:"delete",onClick:function(e){return a.handleDelete(t.id)}},[I],8,["onClick"])])])})),128)),!o.todoList||o.todoList.length<=0?(Object(c["q"])(),Object(c["e"])("div",_,"还没有待办的事项")):Object(c["f"])("",!0),o.inputActive?(Object(c["q"])(),Object(c["e"])("div",A,[Object(c["h"])("div",{ref:"todo-input",contenteditable:"true",class:"textarea",onFocus:e[1]||(e[1]=function(t){return o.inputActive=!0})},null,544),o.updateId?(Object(c["q"])(),Object(c["e"])("div",{key:0,class:"save-btn",onClick:e[2]||(e[2]=function(){return a.handleUpdate&&a.handleUpdate.apply(a,arguments)})},"保存")):(Object(c["q"])(),Object(c["e"])("div",{key:1,class:"save-btn",onClick:e[3]||(e[3]=function(){return a.handleSave&&a.handleSave.apply(a,arguments)})},"保存"))])):Object(c["f"])("",!0),Object(c["D"])(Object(c["h"])("div",{class:"insert-btn",onClick:e[4]||(e[4]=function(){return a.handleInsertBtn&&a.handleInsertBtn.apply(a,arguments)})},null,512),[[c["B"],!o.inputActive]])],512),[[c["B"],"1"===a.status]])]})),_:1}),Object(c["h"])(c["b"],{name:"slide-left"},{default:C((function(){return[Object(c["D"])(Object(c["h"])("section",D,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(o.doneList,(function(t){return Object(c["q"])(),Object(c["e"])("div",{key:t.id,class:"done-item slide-item"},[Object(c["h"])("i",{class:"iconfont icon-wancheng1",onClick:function(e){return a.handleDone(t.id,t.isComplete)}},null,8,["onClick"]),Object(c["h"])("span",null,Object(c["z"])(t.content),1),Object(c["h"])("div",E,[Object(c["h"])("div",{class:"edit",onClick:function(e){return a.handleEdit(t.id,t.content)}},[$],8,["onClick"]),Object(c["h"])("div",{class:"delete",onClick:function(e){return a.handleDelete(t.id)}},[M],8,["onClick"])])])})),128)),!o.doneList||o.doneList.length<=0?(Object(c["q"])(),Object(c["e"])("div",P,"还没有已完成的事项")):Object(c["f"])("",!0),o.inputActive?(Object(c["q"])(),Object(c["e"])("div",X,[Object(c["h"])("div",{ref:"done-input",contenteditable:"true",class:"textarea",onFocus:e[5]||(e[5]=function(t){return o.inputActive=!0})},null,544),o.updateId?(Object(c["q"])(),Object(c["e"])("div",{key:0,class:"save-btn",onClick:e[6]||(e[6]=function(){return a.handleUpdate&&a.handleUpdate.apply(a,arguments)})},"保存")):(Object(c["q"])(),Object(c["e"])("div",{key:1,class:"save-btn",onClick:e[7]||(e[7]=function(){return a.handleSave&&a.handleSave.apply(a,arguments)})},"保存"))])):Object(c["f"])("",!0)],512),[[c["B"],"0"===a.status]])]})),_:1}),o.inputActive?(Object(c["q"])(),Object(c["e"])("div",{key:0,class:"mask",onClick:e[8]||(e[8]=function(t){return o.inputActive=!1})})):Object(c["f"])("",!0)])})),U=(n("159b"),n("ac1f"),n("1276"),n("7db0"),n("498a"),n("c72e"));U.init({appId:"KPVLgMgYWD0PwYqsMzQRs5hI-MdYXbMMI",appKey:"YJWsS81h89jbzqex54peI84M"});var B=U,z={name:"TodoList",data:function(){return{inputActive:!1,todoList:null,doneList:null,updateId:""}},computed:{status:function(){return this.$store.getters.status}},watch:{status:function(){this.handleSlide()}},created:function(){var t=this;this.getTodoList(),this.$nextTick((function(){t.handleSlide()}))},methods:{handleSlide:function(){var t,e,n="1"===this.status?this.$refs["slide-todo-wrap"]:this.$refs["slide-done-wrap"],c=0;n.addEventListener("touchstart",(function(e){var n=e.target.parentNode,i=n.parentNode.querySelectorAll(".slide-item");i.forEach((function(t){t!==n&&(t.style.transform="translateX(0px)")})),-1!==n.className.indexOf("slide-item")&&(c=0|parseInt(n.style.transform.split("(")[1]),n.style.transition="",t=e.changedTouches[0].pageX)})),n.addEventListener("touchmove",(function(n){var i=n.target.parentNode;if(-1!==i.className.indexOf("slide-item"))if(e=t-n.changedTouches[0].pageX,c){var o=c-e>=0?0:c-e;if(o<-120)return;i.style.transform="translateX(".concat(o,"px)")}else{var a=-e<-120?-120:-e;if(a>0)return;i.style.transform="translateX(".concat(a,"px)")}})),n.addEventListener("touchend",(function(t){var n=t.target.parentNode;-1!==n.className.indexOf("slide-item")&&(e>60?(n.style.transition="transform .3s",n.style.transform="translateX(-120px)"):(n.style.transition="transform .3s",n.style.transform="translateX(0)"))}))},handleEdit:function(t,e){var n=this;this.inputActive=!0,this.updateId=t,setTimeout((function(){var t="1"===n.status?n.$refs["todo-input"]:n.$refs["done-input"];t.innerText=e,t.focus()}),20)},handleDelete:function(t){var e=this,n=B.Object.createWithoutData("todo",t);n.destroy().then((function(){e.getTodoList(),console.log("删除成功")})).catch((function(){alert("删除失败")}))},getTodoList:function(){var t=this,e=new B.Query("todo");e.find().then((function(e){var n=[],c=[];e.forEach((function(t){var e={id:t.id,content:t.attributes.content,isComplete:t.attributes.isComplete};t.attributes.isComplete?c.push(e):n.push(e)})),t.todoList=n,t.doneList=c})).catch((function(){alert("查询失败")}))},insertTodo:function(t){var e=this,n=B.Object.extend("todo"),c=new n;c.set("content",t),c.set("isComplete",!1),c.save().then((function(){e.getTodoList(),console.log("保存成功")})).catch((function(){alert("新增失败")}))},handleDone:function(t,e){var n=this,c=B.Object.createWithoutData("todo",t);c.set("isComplete",!e),c.save().then((function(){n.getTodoList(),console.log("更新成功")})).catch((function(){alert("更新失败")}))},handleSave:function(){var t=this.$refs["todo-input"].innerText;null!=t&&""!==t.trim()&&(this.insertTodo(t),this.$refs["todo-input"].innerHTML="",this.inputActive=!1)},handleUpdate:function(){var t=this,e="1"===this.status?this.$refs["todo-input"]:this.$refs["done-input"],n=e.innerText;if(null!=n&&""!==n.trim()){var c=B.Object.createWithoutData("todo",this.updateId);c.set("content",n),c.save().then((function(){t.inputActive=!1,t.getTodoList(),console.log("更新成功")})).catch((function(){alert("更新失败")}))}},handleInsertBtn:function(){var t=this;this.inputActive=!0,this.updateId="",setTimeout((function(){t.$refs["todo-input"].focus()}),20)},toDetail:function(t,e){this.$router.push({path:"/detail",query:{id:t,content:e}})}}};n("6e9c");z.render=N,z.__scopeId="data-v-67a8c989";var W=z,F={components:{AppHeader:p,AppFooter:T,TodoList:W}};n("fcea");F.render=l,F.__scopeId="data-v-2e826cef";var H=F,Y=[{path:"/",name:"Home",component:H}],J=Object(s["a"])({history:Object(s["b"])(),routes:Y}),K=J,Q=n("5502"),R=Object(Q["a"])({state:{status:"1"},mutations:{SET_STATUS:function(t,e){t.status=e}},actions:{setStatus:function(t,e){var n=t.commit;n("SET_STATUS",e)}},getters:{status:function(t){return t.status}}});n("5cfb"),n("3e8e"),n("8df9");Object(c["d"])(a).use(R).use(K).mount("#app")},"58a9":function(t,e,n){},"6e9c":function(t,e,n){"use strict";n("58a9")},"75e3":function(t,e,n){},"8df9":function(t,e,n){},a75c:function(t,e,n){"use strict";n("75e3")},f674:function(t,e,n){},f891:function(t,e,n){},fcea:function(t,e,n){"use strict";n("f891")}});
//# sourceMappingURL=app.a4e8500b.js.map