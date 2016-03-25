define(function(e,t,n){"use strict";function fe(e,t){J.set(e,t),J.save()}function ue(e){e.preventDefault(),e.stopImmediatePropagation()}function ge(e){return e.hasOwnProperty("type")&&"contextmenu"===e.type?$(e.currentTarget).hasClass("cw-ul-list-view")?N.getWorkingSet($(e.currentTarget).data(u))[$(e.target).closest("li").not(".cw-null-element").index()]:$(e.target).closest("li").data(f):e.parent().hasClass("cw-ul-list-view")?N.getWorkingSet(e.parent().data(u))[e.not(".cw-null-element").index()]:e.data(f)}function pe(e,t){return{file:t?e.file:ge(e),pane:t?e.pane:N._getPaneIdForPath(ge(e).fullPath)}}function we(e,t){q.setFileViewFocus(q.WORKING_SET_VIEW),K.execute(Y.FILE_OPEN,{fullPath:pe(e,t).file.fullPath,paneId:pe(e,t).pane}).always(function(){N.focusActivePane()})}function he(){N.focusActivePane()}function me(e){K.execute(Y.FILE_CLOSE,{file:ge(e),paneId:pe(e).pane}).always(function(){he()})}function ve(){return!1}function be(){return $(a.createElement("li")).addClass("cw-prepare-placeholder cw-null-element").html("&nbsp;")}function _e(e,t,n,i){t=$("#"+t).data(u),i=$("#"+i).data(u),N._moveView(t,i,e,n).always(function(){K.execute(Y.FILE_OPEN,{fullPath:e.fullPath,paneId:i}).always(function(){he()})})}function Se(e,t,n){N._moveWorkingSetItem($("#"+t).data(u),e,n),he()}function Le(e){$(".cw-null-element").remove(),e.removeClass("cw-sortable-dragging"),e.show()}function De(){J.get(ee)&&h&&h.is(":visible")&&h.hide()}function Fe(e){"dragstart"===e.type?(ye=!0,De(),Pe=($e=$(e.currentTarget)).addClass("cw-sortable-dragging").index(),Ee=$(e.currentTarget).width(),Te=$(e.currentTarget).data(f),Ce=$(e.currentTarget).html(),ke=$(e.currentTarget).parent().attr("id"),e.originalEvent.dataTransfer.setData("Text",$(e.currentTarget).data(f).fullPath),e.originalEvent.dataTransfer.effectAllowed="move"):"dragend"===e.type&&(Ie||ye)&&(Le($e),$e=void 0,ye=void 0)}function Ne(e){var t=e.originalEvent.dataTransfer.files.length>0?!0:!1;if(t)return!0;if(void 0===$e)return!1;if("dragover"===e.type){if(e.stopPropagation(),e.preventDefault(),Me=e.currentTarget.id,$(e.target).is("li")||!$("#"+Me).find("li").length){$("#"+Me).find(".cw-prepare-placeholder").length||be().prependTo($("#"+Me)),e.originalEvent.dataTransfer.dropEffect="move",xe.width(Ee),xe.height(""),xe.html(Ce),$e.hide(),$(e.target).is("li")&&$(e.target).after(xe);var n=$(e.currentTarget).children("li:not(.cw-prepare-placeholder):not(.cw-sortable-dragging)");$(e.target).hasClass("cw-sortable-placeholder")||(Ve=n.index(xe))}$("#"+Me).find("em").length&&$("#"+Me).find("em").hide()}else if("drop"===e.type)return e.stopPropagation(),e.preventDefault(),ye=!1,Ie=!1,ke!==Me?_e(Te,ke,Ve,Me):Pe!==Ve?Se(Pe,ke,Ve):Ie=!0,!1}function Oe(e){$(e.currentTarget).find("li").length&&($(e.target).is("ul")||$(e.target).closest("li").hasClass("selected")||we(e),i.setTimeout(function(){le.open(e)},12))}function We(){v=$(a.createElement("div")).attr({id:"cw-first-tabbar","class":"cw-tabbar cw-height no-focus"}).on("selectstart",ve).on("contextmenu",ue).on("mouseleave",De).prependTo(m)}function Ae(e,t){var n=N.getWorkingSetSize(e),i=(Math.max(t.width(),t.parent().width())-M)/n;if(Number.isFinite(i))if(i>S)t.find(".cw-height-null").width(i-_).removeClass("cw-item-padding");else{var a=(Math.max(t.parent().width(),t.width())-x)/n;if(!Number.isFinite(a))return;t.find(".cw-height-null").width(a).addClass("cw-item-padding"),a>=L?t.find(".cw-itemshadow").removeClass("cw-item-width"):t.find(".cw-itemshadow").addClass("cw-item-width")}}function Re(e){$("#first-pane").length&&Ae(c,P),$("#second-pane").length&&Ae(d,y)}function ze(){var t,n,i,e=J.get(Q);e?(t="»",n="#37b1ac",i="Hide toolBar"):(t="«",n="",i="Show toolBar"),o[e?"show":"hide"](),s.css("right",e?30:0),w.html(t).attr("title",i).css("color",n),Re()}function je(e){w=$(a.createElement("div")).attr("class","cw-toggle-toolbar btn-alt-quiet").on("click",function(){fe(Q,!J.get(Q))}).appendTo(e)}function Be(e){w&&w.remove(),je(e),ze()}function He(){Be(v),b.css("right",58),T.css("right",30),k.css("right",28),I.css("right",0)}function Ue(){Be(C),b.css("right",28),T.css("right",0),k.css("right",58),I.css("right",30)}function qe(){var e,t=["splitview-icon-none","splitview-icon-vertical","splitview-icon-horizontal"],n=N.getLayoutScheme();n.columns>1?(e=1,Ue()):n.rows>1?(e=2,He()):(e=0,He()),p.removeClass(t.join(" ")).addClass(t[e])}function Ke(){g.html("←").attr("title",F.CMD_HIDE_SIDEBAR).addClass("cw-toggle-open")}function Xe(){g.html("→").attr("title",F.CMD_SHOW_SIDEBAR).removeClass("cw-toggle-open")}function Ye(e){r.is(":visible")?Ke():Xe()}function Ge(){g=$(a.createElement("div")).attr("class","cw-toggle-sidebar btn-alt-quiet").on("click",function(){H.toggle()}).appendTo(v),Ye()}function Je(){p=$(a.createElement("div")).attr({"class":"working-set-splitview-btn btn-alt-quiet",title:F.SPLITVIEW_MENU_TOOLTIP}).on("click",function(e){e.stopImmediatePropagation(),D=!D,D?se.open(e):se.close(),D=!D}).appendTo(v)}function Qe(){b=$(a.createElement("nav")).attr({id:"cw-first-navbar","class":"cw-navbar cw-first-navbar focused-tabbar cw-height"}).appendTo(v)}function Ze(){P=$(a.createElement("ul")).attr({id:"cw-first-nav-ul","class":"cw-nav-ul cw-height"}).data(u,c).on("contextmenu.workingSetView",Oe).on("drop dragover dragenter",Ne).html(F.EMPTY_VIEW_HEADER).appendTo(b)}function et(){C=$(a.createElement("div")).attr({id:"cw-second-tabbar","class":"cw-tabbar cw-height no-focus"}).on("selectstart",ve).on("contextmenu",ue).on("mouseleave",De).prependTo(E)}function tt(){k=$(a.createElement("nav")).attr({id:"cw-second-navbar","class":"cw-navbar cw-second-navbar cw-height"}).appendTo(C)}function nt(){y=$(a.createElement("ul")).attr({id:"cw-second-nav-ul","class":"cw-nav-ul cw-height"}).data(u,d).on("contextmenu.workingSetView",Oe).on("drop dragover",Ne).html(F.EMPTY_VIEW_HEADER).appendTo(k)}function it(e){return $("<div class='cw-file-status-icon can-close'></div>").mousedown(function(e){e.preventDefault()}).on("click",function(e){e.stopPropagation(),me($(this).parent())}).appendTo(e)}function at(e,t){J.get(ee)&&"object"==typeof e.data(f)&&(h.find(".cw-parentPath").html(e.data(f)._parentPath),h.find(".cw-language").html("Language Id : "+B.getLanguageForPath(e.data(f).fullPath).getId()),e.data(f).stat(function(e,t){void 0!==t&&(h.find(".cw-date").html("<br>"+t.mtime),h.find(".cw-size").html(j.prettyPrintBytes(t.size.valueOf())),h.find(".cw-hash").html("<br>hash : "+t._hash))}),U.readAsText(e.data(f)).done(function(e){h.find(".cw-charcount").html(e.length+" Chars"),h.find(".cw-lines").html(j.format(F.STATUSBAR_LINE_COUNT_PLURAL,j.getLines(e).length)),h.find(".cw-lineEnding").html("line ending : "+U.sniffLineEndings(e))}),h.show())}function rt(e,t){if(!J.get(ee))return!1;if(h.is(":visible")){var n=function(){var e=t.currentTarget.clientHeight+14,n=t.currentTarget.parentNode.parentNode.parentNode.parentNode.offsetTop,i=a.getElementById("editor-holder").offsetTop,r=n+i,o=r+e+h.outerHeight(!0),s=t.pageX-h.outerWidth(!0)/2,l=t.pageX+h.outerWidth(!0)/2;return{maxTop:o,top:r-(h.outerHeight(!0)+14),bottom:r+e,left:s,right:l,width:a.body.clientWidth,height:e}};n().maxTop>a.body.clientHeight?(h.css("top",n().top),z.toggleClass(h.find(".cw-arrow"),"cw-arrow-bottom","cw-arrow-top")):(h.css("top",n().bottom),h.find(".cw-arrow").removeClass("cw-arrow-top"),h.find(".cw-arrow").addClass("cw-arrow-bottom")),h.find(".cw-arrow").css("left",t.pageX-h.offset().left),n().left<n().width&&n().right>n().width?h.css({right:9,left:""}):n().left<0&&n().right<n().width?h.css({right:"",left:9}):h.css({right:"",left:n().left})}}function ot(){document.title=(O.getCurrentDocument()&&O.getCurrentDocument().isDirty?"• ":"")+W.makeProjectRelativeIfPossible(N.getCurrentlyViewedPath(N.ACTIVE_PANE))+" ("+W.getProjectRoot().name+") "+de+" "+brackets.config.app_title}function st(e,t){var n=N._getPane(e),a=t.data(f),r=e===c?d:c,o=N._getPane(r);if(!o.getViewForPath(a.fullPath)){var s=N.getActivePaneId(),l=o.findInViewList(a.fullPath);-1!==l&&K.execute(Y.FILE_CLOSE,{File:a,paneId:e}),N._moveView(e,r,a).always(function(){K.execute(Y.FILE_OPEN,{fullPath:a.fullPath,paneId:r}).always(function(){var e=N._getPane(s);n.trigger("viewListChange"),o.trigger("viewListChange"),i.setTimeout(function(){e.focus(),n._lastFocusedElement=e.$el[0],N.setActivePaneId(s)},1)})})}}function lt(e,t){var n=N.getLayoutScheme();if(!(n.columns<2&&n.rows<2))if(t){e.addClass("cw-active-flipview");var i=e.parent().data(u),r=0,o=["flipview-icon-none","flipview-icon-top","flipview-icon-right","flipview-icon-bottom","flipview-icon-left"],s=["",F.TOP,F.RIGHT,F.BOTTOM,F.LEFT];n.columns>1&&e.data(f)?r=i===c?2:4:n.rows>1&&e.data(f)&&(r=i===c?3:1),$(a.createElement("div")).attr({title:j.format(F.FLIPVIEW_BTN_TOOLTIP,s[r].toLowerCase()),"class":"pane-header-flipview-btn"}).addClass(o[r]).mousedown(function(e){e.preventDefault()}).on("click",function(t){t.stopPropagation(),st(i,e)}).appendTo(e.find(".cw-parent-flipview"))}else e.removeClass("cw-active-flipview"),e.find(".cw-parent-flipview .pane-header-flipview-btn").remove()}function ct(e){var t=$(e.currentTarget),n=t.find(".cw-file-status-icon.can-close"),i=t.find(".cw-file-status-icon.dirty");"mouseup"===e.type?(e.stopPropagation(),e.preventDefault(),2===e.which&&me($(e.currentTarget))):"click"===e.type?t.hasClass("selected")||we($(e.currentTarget)):"mouseenter"===e.type?((t.hasClass("selected")||t.width()>=S)&&(i.length&&(t.data("file-is-dirty",!0),i.remove()),it(t),lt(t,!0)),at(t,e),!J.get(ee)&&t.parent().hasClass("cw-nav-ul")&&(t.hasClass("selected")?ot():document.title=pe(t).file._path)):"mousemove"===e.type?rt(t,e):"mouseleave"===e.type&&((t.hasClass("selected")||t.width()>=S)&&(t.data("file-is-dirty")?(n.removeClass("can-close"),n.addClass("dirty"),n.removeData("file-is-dirty")):n.remove(),lt(t,!1)),De(),!J.get(ee)&&t.parent().hasClass("cw-nav-ul")&&ot())}function dt(e,t){var n=N.findInWorkingSet(e,N.getCurrentlyViewedPath(e));n>-1&&t.find("li:not(.cw-null-element)").eq(n).addClass("selected"),Ae(e,t)}function ft(e){return U.getBaseName(e)}function ut(e){return ft(U.getDirectoryPath(e))}function gt(e,t){for(var n=t.length;n--;)if(e.fullPath!==t[n].fullPath&&ft(e.fullPath)===ft(t[n].fullPath))return!0}function Tt(e){if(!$(e.target).is("li"))return!1;if("dragstart"===e.type)ye=!0,wt=(pt=$(e.target)).index(),ht=$(e.target.parentNode).attr("id"),mt=$(e.target).height(),vt=$(e.target).html(),bt=ge($(e.target)),e.originalEvent.dataTransfer.setData("Text",ge($(e.target)).fullPath),e.originalEvent.dataTransfer.effectAllowed="move";else if("dragenter"===e.type){if(pt){$(e.target).after(xe);var t=$(e.target.parentNode).children("li:not(.cw-prepare-placeholder)");$(e.target).hasClass("cw-sortable-placeholder")||($t=t.index(xe)),Pt=$(e.target.parentNode).attr("id")}}else{if("dragover"===e.type)return e.preventDefault(),pt&&($(e.target.parentNode).find(".cw-prepare-placeholder").length||be().prependTo($(e.target.parentNode)),pt.hide(),xe.height(mt),xe.width(""),xe.html(vt)),!1;if("dragend"===e.type)return e.stopPropagation(),ye=void 0,ht!==Pt?_e(bt,ht,$t,Pt):wt!==$t?Se(wt,ht,$t):Le(pt),pt=void 0,!1;if("drop"===e.type)return e.preventDefault(),!1}}function Et(e,t,n){var i=N.getPaneTitle(e),r='<div class="working-set-header"><span class="working-set-header-title">'+i+'</span><span class="cw-item-length">'+n.children().length+"</span></div>",o=$("#"+e).find(".CodeMirror").height(),s=o-72,l=$(a.createElement("div")).attr({id:"cw-"+e+"-list-View","class":"cw-box-list-view"}).on("contextmenu",ue).html(void 0===i?"":r).insertAfter(t);$(a.createElement("ul")).addClass("cw-ul-list-view").attr("id","cw-"+e+"-ul-list-View").data(u,e).css("max-height",s).html(n.children().clone()).on("contextmenu.workingSetView",Oe).on("click mouseenter mouseleave mouseup","li",ct).on("dragstart dragenter dragover dragend drop","li",Tt).appendTo(l)}function Ct(e,t,n){var i=N.getWorkingSet(e)[t],r='<div class="cw-parent-flipview cw-height"></div>',o=B.getLanguageForPath(i.fullPath).getId(),s=i.fullPath.substr(i.fullPath.lastIndexOf(".")+1),c='<span class="file-icon-bar cw-icon-'+o+" cw-icon-"+s+'"></span>',d=O.getOpenDocumentForPath(i.fullPath),u='<div class="cw-file-status-icon dirty"></div><div class="cw-filestatus-dirtylinear"></div>',g=null!==d&&d.hasOwnProperty("isDirty")&&d.isDirty?u:"",p='<div class="cw-itemshadow cw-height"></div>',w=gt(i,N.getWorkingSet(l))?"<i class='directory'> &mdash; "+ut(i.fullPath)+"</i>":"",h=r+c+z.getFileEntryDisplay(i)+w+g+p,m=$(a.createElement("li")).html(h);m.css("max-width",m.appendTo(n).width()),n.find(m).remove(),m.attr({"class":"cw-height-null",draggable:"true"}).on("click mouseenter mousemove mouseleave mouseup",ct).on("dragstart dragenter dragover dragend drop",Fe).mousedown(function(e){e.stopPropagation()}).data(f,i),m.appendTo(n)}function kt(e,t,n){var i;for(i=0;e>i;i+=1)Ct(t,i,n);dt(t,n)}function yt(){T=$(a.createElement("div")).attr("class","cw-toggle-listview cw-first-listview btn-alt-quiet").on("click",function(e){$("#cw-first-pane-list-View").length?$("#cw-first-pane-list-View").remove():Et(c,v,P),e.stopPropagation()}).html("&equiv;").appendTo(v)}function It(){I=$(a.createElement("div")).attr("class","cw-toggle-listview cw-second-listview btn-alt-quiet").on("click",function(e){$("#cw-second-pane-list-View").length?$("#cw-second-pane-list-View").remove():Et(d,C,y),e.stopPropagation()}).html("&equiv;").appendTo(C)}function Vt(){if($("#first-pane").length){var e=N.getWorkingSetSize(c);e>0?(P.empty(),kt(e,c,P),$("#cw-first-pane-list-View").length&&($("#cw-first-pane-list-View").find("ul").empty(),$("#cw-first-pane-list-View").find(".cw-item-length").html(P.children().length),P.children().clone().appendTo($("#cw-first-pane-list-View").find("ul"))),T.show()):(P.html(F.EMPTY_VIEW_HEADER),T.hide(),$("#cw-first-pane-list-View").length&&$("#cw-first-pane-list-View").remove())}if($("#second-pane").length){var t=N.getWorkingSetSize(d);t>0?(y.empty(),kt(t,d,y),$("#cw-second-pane-list-View").length&&($("#cw-second-pane-list-View").find("ul").empty(),$("#cw-second-pane-list-View").find(".cw-item-length").html(y.children().length),y.children().clone().appendTo($("#cw-second-pane-list-View").find("ul"))),I.show()):(y.html(F.EMPTY_VIEW_HEADER),I.hide(),$("#cw-second-pane-list-View").length&&$("#cw-second-pane-list-View").remove())}}function Mt(e){window.setTimeout(function(){Vt()},3*V)}function xt(){$("#cw-first-pane-list-View").length&&$("#cw-first-pane-list-View").remove()}function St(){We(),Ge(),Je(),Qe(),Ze(),yt(),je(v)}function Lt(){et(),tt(),nt(),It()}function Dt(){K.register("custom-work-for-brackets-listview",re,function(){$("#"+N.getActivePaneId()).find(".cw-toggle-listview").click()}),X.addBinding(re,"Ctrl-Shift-V","all")}function Ft(){$("#cw-first-pane-list-View").length&&$("#cw-first-pane-ul-list-View").css("max-height",$("#first-pane").find(".CodeMirror").height()-72),$("#cw-second-pane-list-View").length&&$("#cw-second-pane-ul-list-View").css("max-height",$("#second-pane").find(".CodeMirror").height()-72)}var g,p,w,h,v,b,P,T,E,C,k,y,I,D,$e,Pe,Te,Ee,Ce,ke,ye,Ie,Ve,Me,pt,wt,ht,mt,vt,bt,$t,Pt,i=window,a=i.document,r=$("#sidebar"),o=$("#main-toolbar"),s=$(".main-view .content"),l="ALL_PANES",c="first-pane",d="second-pane",f="file",u="data-pane-id",m=$("#"+c),V=5,M=29,x=51,_=32,S=40,L=15,F=brackets.getModule("strings"),N=brackets.getModule("view/MainViewManager"),O=brackets.getModule("document/DocumentManager"),W=brackets.getModule("project/ProjectManager"),A=brackets.getModule("project/WorkingSetView"),R=brackets.getModule("project/FileTreeView"),z=brackets.getModule("utils/ViewUtils"),j=brackets.getModule("utils/StringUtils"),B=brackets.getModule("language/LanguageManager"),H=brackets.getModule("project/SidebarView"),U=brackets.getModule("file/FileUtils"),q=brackets.getModule("project/FileViewController"),K=brackets.getModule("command/CommandManager"),X=brackets.getModule("command/KeyBindingManager"),Y=brackets.getModule("command/Commands"),G=brackets.getModule("preferences/PreferencesManager"),J=G.getExtensionPrefs("custom.work"),Q="toggleToolbar",Z="hoverSidebar",ee="tooltip",te="workingFilesSidebar",ne="zIndex",ie="listView",ae="addiconprovider",re="customworkKeyIdListView",oe=brackets.getModule("command/Menus"),se=oe.getContextMenu(oe.ContextMenuIds.SPLITVIEW_MENU),le=oe.getContextMenu(oe.ContextMenuIds.WORKING_SET_CONTEXT_MENU),ce=oe.getContextMenu(oe.ContextMenuIds.PROJECT_MENU),de="mac"===brackets.platform?"—":"-",xe=$(a.createElement("li")).attr("class","cw-sortable-placeholder cw-null-element").html("&nbsp;");J.definePreference(Q,"boolean",!0).on("change",function(){ze()}),J.definePreference(ie,"boolean",!0).on("change",function(){J.get(ie)?$("body").on("click",xt):$("body").off("click",xt)});var _t=function(e){if(e.isFile){var t=B.getLanguageForPath(e.fullPath).getId(),n=e.fullPath.substr(e.fullPath.lastIndexOf(".")+1),i=$(a.createElement("span"));return i.addClass("jstree-icon file-icon file-icon-bar cw-icon-"+t+" cw-icon-"+n),i}};J.definePreference(ae,"boolean",!0).on("change",function(){J.get(ae)?(A.addIconProvider(_t),R.addIconProvider(_t)):i.setTimeout(function(){$(".open-files-container ul li .file-icon-bar").remove(),$(".jstree-brackets ul li .file-icon-bar").remove()},1),W.rerenderTree(),A.refresh(!0)}),J.definePreference(Z,"boolean",!0).on("change",function(){var e=$(a.createElement("div")).addClass("cw-hover-sidebar").on("mouseenter",function(){J.get(Z)&&!H.isVisible()&&($(this).addClass("cw-hover-open"),r.css({display:"-webkit-box","z-index":18}))}).insertBefore("#editor-holder"),t=function(){J.get(Z)&&e.hasClass("cw-hover-open")&&(ce.isOpen()||$(".jstree-leaf").find(".jstree-rename-input").length||$("#project-dropdown").is(":visible")||(r.css({display:"none","z-index":""}),e.removeClass("cw-hover-open")))};r.on("mouseleave",t),$(i).on("blur",t)}),J.definePreference(ee,"boolean",!0).on("change",function(){J.get(ee)?h=$(a.createElement("div")).attr({id:"cw-tooltip","class":"cw-tooltip"}).html('<div class="cw-arrow"></div><span class="cw-parentPath">&nbsp;</span><span class="cw-date">&nbsp;</span><br><span class="cw-size">&nbsp;</span> &mdash; <span class="cw-charcount">&nbsp;</span>&nbsp;<span class="cw-lines">&nbsp;</span> &mdash; <span class="cw-lineEnding">&nbsp;</span> &mdash; <span class="cw-language">&nbsp;</span><span class="cw-hash">&nbsp;</span>').hide().appendTo(a.body):h&&h.remove()}),J.definePreference(te,"boolean",!0).on("change",function(){J.get(te)?$("#working-set-list-container").removeClass("cw-hide-working-set-list-container"):$("#working-set-list-container").addClass("cw-hide-working-set-list-container")}),J.definePreference(ne,"number",!0).on("change",function(){var e=J.get(ne);"number"==typeof e&&(v&&v.css("z-index",e),C&&C.css("z-index",e))}),N.on("paneLayoutChange",function(e,t,n){qe(),Re(),$(".cw-box-list-view").length&&$(".cw-box-list-view").remove()}),N.on("activePaneChange",function(e,t,n){var i=$("#"+t).find(".cw-navbar"),a=$("#"+n).find(".cw-navbar");i.addClass("focused-tabbar"),a.removeClass("focused-tabbar"),Re()}),N.on("workingSetAdd workingSetAddList workingSetRemove workingSetRemoveList workingSetUpdate",function(e){Mt(e)}),N.on("currentFileChange",function(e,t,n,i,a){ye||Mt(e),De()}),N.on("workingSetSort workingSetMove",function(e,t){Mt(e)}),O.on("dirtyFlagChange",function(e){Mt(e)}),N.on("paneCreate",function(e,t){E=$("#"+d),Lt(),Re()}),$(i).resize(function(){Ft(),Re()}),$("#editor-holder, .bottom-panel").on("panelResizeUpdate",Ft),$("#editor-holder").on("panelResizeEnd",Re),r.on("panelResizeEnd",Re),r.on("panelCollapsed",function(e){Xe(),Re()}),r.on("panelExpanded",function(e){Ke(),Re()}),n.exports={viewTab:St,keys:Dt}});