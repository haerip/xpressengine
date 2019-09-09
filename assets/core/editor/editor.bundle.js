!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=41)}({0:function(t,e,n){t.exports=n(2)(0)},13:function(t,e,n){t.exports=n(2)(1)},14:function(t,e,n){t.exports=n(2)(6)},15:function(t,e,n){t.exports=n(2)(9)},16:function(t,e,n){t.exports=n(2)(10)},2:function(t,e){t.exports=_xe_dll_common},24:function(t,e,n){t.exports=n(2)(66)},25:function(t,e,n){t.exports=n(2)(4)},31:function(t,e,n){t.exports=n(2)(18)},32:function(t,e,n){t.exports=n(2)(24)},4:function(t,e,n){t.exports=n(2)(2)},41:function(t,e,n){n(68),t.exports=n(42)},42:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o);n(5).default.app("Editor",function(t){t.define({editorSettings:{name:"XEtextarea",configs:{}},interfaces:{initialize:function(t,e){e=i.a.extend(!0,{fileUpload:{},suggestion:{},names:{file:{image:{}},tag:{},mention:{}},extensions:[],fontFamily:[],perms:{},files:[]},e);var n=i()("#"+t),o=e.height,r=e.fontFamily,s=e.fontSize;this.addProps({editor:n,selector:t,options:e}),o&&n.css("height",o+"px"),(r||s)&&(r&&r.length>0&&n.css("font-family",r.join(",")),s&&n.css("font-size",s)),n.parents("form").on("submit",function(){var t=e.names.file.input,o=e.files,r=i()();if(n.nextAll(".paramWrap").remove(),n.after("<div class='paramWrap'>"),r=n.nextAll(".paramWrap"),o.length>0)for(var s=0,a=o.length;s<a;s+=1){var l=o[s];r.append("<input type='hidden'name='"+t+"[]' value='"+l.id+"' />")}})},getContents:function(){return this.props.editor.val()},setContents:function(t){this.props.editor.val(t)},addContents:function(t){var e=this.props.editor.val();this.props.editor.val(e)},on:function(t,e){this.props.editor.on(t,e)},getContentDom:function(){return!1},reset:function(){this.props.editor.val("").focus(),this.props.editor.nextAll(".paramWrap").remove()}}})})},5:function(t,e,n){t.exports=n(2)(274)},68:function(t,e,n){"use strict";n.r(e);var o=n(13),i=n.n(o),r=n(4),s=n.n(r),a=n(7),l=n.n(a),u=n(15),d=n.n(u),c=n(14),f=n.n(c),h=n(31),p=n.n(h),v=n(16),g=n.n(v),y=n(0),m=n.n(y),w=n(32),E=n(24),S=function(t){function e(t){return s()(this,e),d()(this,f()(e).call(this,t))}return g()(e,t),e}(E.default),x=function(t){function e(t){return s()(this,e),d()(this,f()(e).call(this,t))}return g()(e,t),e}(E.default),O=function(t){function e(t){return s()(this,e),d()(this,f()(e).call(this,t))}return g()(e,t),e}(E.default),k=function(t){function e(t){return s()(this,e),d()(this,f()(e).call(this,t))}return g()(e,t),e}(E.default),C={editorSettings:["name"],interfaces:["initialize","addContents","getContents","setContents","getContentDom"],tools:{property:["id","events"],events:["iconClick","elementDoubleClick"]}},b=function(){function t(){s()(this,t)}return l()(t,null,[{key:"isValidBeforeCreateInstance",value:function(t,e,n){if(!t)throw new k("Editor가 사용할 field를 지정해야 합니다.");if(n.editorList.length>0){for(var o=!0,i=0,r=n.editorList.length;i<r;i+=1)if(n.editorList[i]===t)throw o=!1,new O("Editor가 이미 사용 중입니다: ".concat(t));if(!o)return!1}return!0}},{key:"isValidEditorOptions",value:function(t,e){var n=!0;for(var o in C.editorSettings)if(!t.hasOwnProperty(C.editorSettings[o]))throw n=!1,new S("Editor 규격이 맞지 않음 (구현 필요 [editorSettings: ".concat(C.editorSettings[o],"])"));for(var i in C.interfaces)if(!e.hasOwnProperty(C.interfaces[i]))throw n=!1,new S("Editor 규격이 맞지 않음 (구현 필요 [interface: ".concat(C.interfaces[i],"])"));if(t.hasOwnProperty("plugins")&&t.plugins instanceof Array&&t.plugins.length>0&&!t.hasOwnProperty("addPlugins"))throw n=!1,new S("Editor 규격이 맞지 않음 (구현 필요 [fn:addPlugins])");if(window.XEeditor.editorSet.hasOwnProperty(t.name))throw n=!1,new S("이미 같은 이름의 에디터가 등록되어 있음: ".concat(t.name));return!!n}},{key:"isValidToolsObject",value:function(t){for(var e=!0,n=0,o=C.tools.property.length;n<o;n+=1)if(!t.hasOwnProperty(C.tools.property[n]))throw e=!1,new x("EditorTool 규격이 맞지 않음 (속성이 없음: ".concat(C.tools.property[n],")"));for(var i=0,r=C.tools.events.length;i<r;i+=1)if(!t.events.hasOwnProperty(C.tools.events[i]))throw e=!1,new x("EditorTool 규격이 맞지 않음 (이벤트가 정의되지 않음: ".concat(C.tools.events[i],")"));return e}}]),t}(),P=n(25),T=function(){function t(e,n,o,i){s()(this,t);var r={editorOptions:o,toolInfoList:i};Object(P.eventify)(this),this.editorName=e,this.selector=n,this.props={},this.getOptions=function(){return r}}return l()(t,[{key:"getInstance",value:function(){return this}},{key:"getContents",value:function(){return XEeditor.editorSet[this.editorName].getContents.call(this)}},{key:"setContents",value:function(t){XEeditor.editorSet[this.editorName].setContents.call(this,t)}},{key:"addContents",value:function(t){XEeditor.editorSet[this.editorName].addContents.call(this,t)}},{key:"addProps",value:function(t){for(var e in t)this.props[e]=t[e]}},{key:"addTools",value:function(t){XEeditor.editorSet[this.editorName].addTools.call(this,this.getOptions().toolInfoList,t)}},{key:"on",value:function(t,e){XEeditor.editorSet[this.editorName].on.call(this,t,e)}},{key:"renderFileUploader",value:function(t){XEeditor.editorSet[this.editorName].renderFileUploader.call(this,t)}},{key:"getContentDom",value:function(){return"function"==typeof XEeditor.editorSet[this.editorName].getContentDom&&XEeditor.editorSet[this.editorName].getContentDom.call(this)}},{key:"reset",value:function(){XEeditor.editorSet[this.editorName].reset.call(this)}}]),t}(),X=function(){function t(e,n){for(var o in s()(this,t),this.name=e.name,this.configs=e.configs,this.editorList=[],this.interfaces={},Object(P.eventify)(this),e.hasOwnProperty("plugins")&&e.plugins instanceof Array&&e.plugins.length>0&&e.hasOwnProperty("addPlugins")&&e.addPlugins(e.plugins),n)this[o]=n[o]}return l()(t,[{key:"create",value:function(t,e,n,o){if(o=o||[],n=m.a.extend(this.configs||{},n||{}),b.isValidBeforeCreateInstance(t,o,this)){var i=new T(this.name,t,n,o);if(i._editor=this,this.editorList[t]=i,this.initialize.call(this.editorList[t],t,e,n),o&&o.length>0){for(var r={},s=[],a=0,l=o.length;a<l;a+=1)window.XEeditor.getTool(o[a].id)?(r[o[a].id]=window.XEeditor.getTool(o[a].id),s.push(o[a])):console.error("define된 tool이 존재하지 않음. ["+o[a].id+"]");this.addTools&&"function"==typeof this.addTools&&this.addTools.call(this.editorList[t],r,s)}return this.editorList[t]}}}]),t}(),j=function t(e){for(var n in s()(this,t),e)this[n]=e[n]},D=n(5),N=function(t){function e(){var t;return s()(this,e),(t=d()(this,f()(e).call(this))).toolsSet={},t.editorSet={},t.editorOptionSet={},t.tools={define:function(e){m.a.isFunction(console.warn)&&m.a.isFunction(console.trace)&&(console.warn("DEPRECATED: XEeditor.tools.define() is deprecated. use XEeditor.defineTool"),console.trace()),t.defineTool(e)},get:function(e){return m.a.isFunction(console.warn)&&m.a.isFunction(console.trace)&&(console.warn("DEPRECATED: XEeditor.tools.get() is deprecated. use XEeditor.getTool"),console.trace()),t.getTool(e)}},t}return g()(e,t),l()(e,[{key:"boot",value:function(t){var n=this;return this.booted()?i.a.resolve(this):new i.a(function(o){p()(f()(e.prototype),"boot",n).call(n,t),o(n)})}},{key:"define",value:function(t){var e=t.editorSettings,n=t.interfaces;try{if(b.isValidEditorOptions(e,n)){var o=new X(e,n);this.editorSet[e.name]=o,this.editorOptionSet[e.name]=e,this.$$emit("editor.define",o)}}catch(t){}}},{key:"getEditor",value:function(t){var e=this;return this.editorSet[t]?i.a.resolve(this.editorSet[t]):new i.a(function(t){e.$$on("editor.define",function(e,n){t(n)})})}},{key:"defineTool",value:function(t){try{b.isValidToolsObject(t)&&(this.toolsSet[t.id]=new j(t))}catch(t){console.error(t)}}},{key:"getTool",value:function(t){return this.toolsSet[t]}},{key:"attachDomId",value:function(t,e){return m()(t).attr("xe-tool-id",e).clone().wrapAll("<div/>").parent().html()}},{key:"getDomSelector",value:function(t){return'[xe-tool-id="'+t+'"]'}}],[{key:"appName",value:function(){return"Editor"}}]),e}(w.default),L=(e.default=N,new N);window.XEeditor||(window.XEeditor=L),D.default.registerApp("Editor",L)},7:function(t,e,n){t.exports=n(2)(7)}});