!function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=43)}([,function(t,e,n){t.exports=n(2)(3)},function(t,e){t.exports=_xe_dll_common},function(t,e,n){t.exports=n(2)(85)},,,function(t,e,n){t.exports=n(2)(16)},,,function(t,e,n){t.exports=n(2)(83)},,function(t,e,n){t.exports=n(19)},function(t,e,n){t.exports=n(2)(58)},function(t,e,n){t.exports=n(2)(1)},,,,,,function(t,e,n){t.exports=n(20)},function(t,e,n){var a=n(21),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},function(t,e,n){t.exports=n(2)(11)},,,,,,,,,,,,function(t,e,n){t.exports=n(2)(41)},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(12),i=n.n(a),o=n(9),s=n.n(o),l=n(33),r=n.n(l),c=n(11),d=n.n(c),u=n(3),f=n.n(u),p=n(6),h=n.n(p),m=n(1),v=n.n(m),x=n(13),y=n.n(x);!function(t,e){function n(t,n,a,i,o,s){if(this.key=n,this.elem=t,this.callback=a,this.withForm=i,this.container=o,this.apiUrl=s,this.interval=null,this.draftId=null,this.component=null,this.$component=e(),this.componentName="",this.uid=null,e(this.elem).attr("name")&&""!=e(this.elem).attr("name"))return this.init(),this.bindEvents(),this;console.error("Must set 'name' attribute ")}n.prototype={init:function(){this.uid=this._getUid(),this.appendComponent(),y.a.all([t.app("Lang"),t.app("Request")]).then(function(t){t[0].requestTransAll(["xe::draftSave","xe::draftSaved","xe::autoSave","xe::draftLoad"])})},_getUid:function(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},bindEvents:function(){var n=this;e(this.elem).on("input.draft",function(){n.saveEventHandler()}),n.$component.on("click",".draft_title",function(t){var a;t.preventDefault();var i=e(this).data("type"),o=e(this).data("item");switch(n.onApply(o),i){case"modal":n.$component.xeModal("hide");break;case"collapse":v()(a=n.$component.show()).call(a,".panel-body").empty()}}),n.$component.on("click",".xe-draftBtnCloseModal",function(){n.$component.xeModal("hide")}),n.$component.on("click",".btn_draft_delete",function(t){t.preventDefault();var a=e(this),i=a.data("id");n.reqDelete(i,function(){a.closest("li").remove()})}),t.app("Form").then(function(t){t.get(n.elem).$$on("submit",function(){return n.deleteAuto(n.key)},{name:"xe.draft"})})},toggle:function(t){var n=this;switch(this.componentName){case"modal":!t&&n.$component.hasClass("in")?n.$component.xeModal("hide"):n.load({key:n.key},function(t){var a,i='<div class="draft_save_list">';i+="<ul>",h()(t).call(t,function(t,n){var a;i+="<li>",i+=f()(a="<a href='#' class='draft_title' data-item='".concat(d()(t),'\' data-type="modal">')).call(a,e(e.parseHTML(t.val)).text(),"</a>"),i+='<div class="draft_info">',1==t.is_auto?i+='<span class="draft_state">'.concat(window.XE.Lang.trans("xe::autoSave"),"</span>"):i+='<span class="draft_state v2">'.concat(window.XE.Lang.trans("xe::draftSave"),"</span>"),i+='<span class="draft_date">'.concat(t.created_at.substr(0,16).replace(/-/g," "),"</span>"),i+='<a href="#" class="btn_draft_delete" data-id="'.concat(t.id,'"><i class="xi-close"></i></a>'),i+="</div>",i+="</li>"}),i+="</ul>",i+="</div>",v()(a=n.$component).call(a,".xe-modal-body").html(i),n.$component.xeModal("show")});break;case"collapse":!t&&n.$component.hasClass("in")?n.$component.hide():n.load({key:n.key},function(t){var a,i='<div class="draft_save_list">';i+="<ul>",h()(t).call(t,function(t,n){var a;i+="<li>",i+=f()(a="<a href='#' class='draft_title' data-item='".concat(d()(t),'\' data-type="collapse">')).call(a,e(e.parseHTML(t.val)).text(),"</a>"),i+='<div class="draft_info">',1==t.is_auto?i+='<span class="draft_state">'.concat(window.XE.Lang.trans("xe::autoSave"),"</span>"):i+='<span class="draft_state v2">'.concat(window.XE.Lang.trans("xe::draftSave"),"</span>"),i+='<span class="draft_date">'.concat(t.created_at.substr(0,16).replace(/-/g," "),"</span>"),i+='<a href="#" class="btn_draft_delete" data-id="'.concat(t.id,'"><i class="xi-close"></i></a>'),i+="</div>",i+="</li>"}),i+="</ul>",i+="</div>",v()(a=n.$component).call(a,".panel-body").html(i),n.$component.show()})}},getModalTemplate:function(){return['<div class="xe-modal fade" id="xe-draftModal">','<div class="xe-modal-dialog">','<div class="xe-modal-content">','<div class="xe-modal-header">','<button type="button" class="btn-close xe-draftBtnClose" data-dismiss="xe-modal" aria-label="Close"><i class="xi-close"></i></button>','<strong class="xe-modal-title"></strong>',"</div>",'<div class="xe-modal-body"></div>','<div class="xe-modal-footer">','<button type="button" class="xe-btn xe-btn-default" data-dismiss="xe-modal">Close</button>',"</div>","</div>","</div>","</div>"].join("\n")},getCollapseTemplate:function(){return['<div class="panel panel-default">','<div class="panel-body"></div>',"</div>"].join("\n")},appendComponent:function(){var t=e("<div>");if(e(this.container).length<1)e(this.elem).closest("form").after(t.html(this.getModalTemplate())),this.componentName="modal",this.$component=e("#xe-draftModal");else{this.componentName="collapse",this.$component=e(this.container);var n=this._collapseClass();this.$component.addClass([n,"collapse"].join(" ")).html(t.html(this.getCollapseTemplate()))}},onApply:function(t){this.setId(t.id);var n=t.etc;n[e(this.elem).attr("name")]=t.val,a.init(e(this.elem).closest("form")[0],n),this.callback(n)},_collapseClass:function(){return"__xe_draft_collapse_"+this.uid},saveEventHandler:function(){var t=this;this.intervalClear(),this.interval=r()(function(){t.setAuto(),t.intervalClear()},3e3)},intervalClear:function(){this.interval&&clearTimeout(this.interval)},draftSet:function(){""!=s()(e).call(e,e(this.elem).val())&&(null==this.draftId?this.reqPost():this.reqPut(),window.XE.toast("success",window.XE.Lang.trans("xe::draftSaved")))},reqPost:function(){var t;window.XE.ajax({url:this.apiUrl.draft.add,type:"post",dataType:"json",data:this.getReqSerialize()+"&key="+this.key,success:i()(t=function(t){null===t.draftId?this.unsetId():this.setId(t.draftId)}).call(t,this)})},reqPut:function(){var t;window.XE.ajax({url:this.apiUrl.draft.update+"/"+this.draftId,type:"post",dataType:"json",data:this.getReqSerialize(),success:i()(t=function(t){var n,a=this;null===t.draftId&&(v()(n=this.$component).call(n,"li > a").each(function(){var t=e(this),n=t.data("item");if(n.id===a.draftId){var i=e(a.elem).val();n.val=i,n.etc.content=i,t.data("item",n).text(e(e.parseHTML(i)).text())}}),this.unsetId())}).call(t,this)})},setAuto:function(){window.XE.ajax({url:this.apiUrl.auto.set,type:"post",data:this.getReqSerialize()+"&key="+this.key})},deleteAuto:function(t){var e=this;return t=t||this.key,new y.a(function(n,a){t&&window.XE.ajax({url:e.apiUrl.auto.unset,type:"post",data:"key="+t,success:function(){n()},error:function(t){a(t)}})})},load:function(t,e){var n=this;window.XE.ajax({url:n.apiUrl.draft.list,type:"get",dataType:"json",data:t,success:function(t){h()(t).call(t,function(t,e){1===t.is_auto&&(n.key=t.id)}),e&&e(t)}})},getReqSerialize:function(){return(!0===this.withForm?e(this.elem).closest("form").serialize():[e(this.elem).attr("name"),e(this.elem).val()].join("="))+"&rep="+e(this.elem).attr("name")},reqDelete:function(t,e){(t=t||this.draftId)&&(t==this.draftId&&(this.draftId=null),window.XE.ajax({url:this.apiUrl.draft.delete+"/"+t,type:"post",dataType:"json",success:function(){e&&e()}}))},setId:function(t){this.draftId=t},unsetId:function(){this.draftId=null}};var a={init:function(t,e){for(var n in e){var a=n;e[n]instanceof Array?(a+="[]",this.multiple(t[a],e[n])):this.single(t[a],e[n])}},multiple:function(t,n){var a,o;e(t).is(":checkbox")?e.each(n,i()(a=function(e,n){this.toCheckbox(t,n)}).call(a,this)):e.each(n,i()(o=function(n,a){this.toInput(e(t).eq(n)[0],a)}).call(o,this))},single:function(t,n){e(t).is(":checkbox")?this.toCheckbox(t,n):e(t).is(":radio")?this.toRadio(t,n):e(t).is("select")?this.toSelect(t,n):this.toInput(t,n)},toCheckbox:function(t,n){e(t).each(function(){if(e(this).attr("value")==n)return e(this).prop("checked",!0),!1})},toRadio:function(t,n){e(t).each(function(){if(e(this).attr("value")==n)return e(this).prop("checked",!0),!1})},toSelect:function(t,n){e(t).children().each(function(){if(e(this).attr("value")==n)return e(this).prop("selected",!0),!1})},toInput:function(t,n){e(t).is("input[type=hidden]")||e(t).val(n)}};e.fn.draft=function(t){var a,o;if(!(t=e.extend({},{container:null,withForm:!1,callback:null},t)).key||!t.btnLoad||!t.btnSave)return console.error("must need key, btnLoad and btnSave"),!1;var s=new n(this,t.key,t.callback,t.withForm,t.container,t.apiUrl);return i()(a=e(t.btnLoad).unbind("click.draft")).call(a,"click.draft",function(t){t.preventDefault(),s.toggle(!0)}),i()(o=e(t.btnSave).unbind("click.draft")).call(o,"click.draft",function(t){t.preventDefault(),s.draftSet()}),s}}(window.XE,window.jQuery)}]);