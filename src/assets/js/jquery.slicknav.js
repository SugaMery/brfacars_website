!function(e,t,n){var a={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",animations:"jquery",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},i="slicknav",s="slicknav";function o(t,n){this.element=t,this.settings=e.extend({},a,n),this.settings.duplicate||n.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=a,this._name=i,this.init()}Keyboard={DOWN:40,ENTER:13,ESCAPE:27,LEFT:37,RIGHT:39,SPACE:32,TAB:9,UP:38},o.prototype.init=function(){var n,a,i=this,o=e(this.element),l=this.settings;if(l.duplicate?i.mobileNav=o.clone():i.mobileNav=o,l.removeIds&&(i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("id")})),l.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("class")})),l.removeStyles&&(i.mobileNav.removeAttr("style"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("style")})),n=s+"_icon",""===l.label&&(n+=" "+s+"_no-text"),"a"==l.parentTag&&(l.parentTag='a href="#"'),i.mobileNav.attr("class",s+"_nav"),a=e('<div class="'+s+'_menu"></div>'),""!==l.brand){var r=e('<div class="'+s+'_brand">'+l.brand+"</div>");e(a).append(r)}i.btn=e(["<"+l.parentTag+' aria-haspopup="true" role="button" tabindex="0" class="'+s+"_btn "+s+'_collapsed">','<span class="'+s+'_menutxt">'+l.label+"</span>",'<span class="'+n+'">','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>',"</span>","</"+l.parentTag+">"].join("")),e(".navbar-toggle").append(i.btn),""!==l.appendTo?e(l.appendTo).append(a):e(l.prependTo).prepend(a),a.append(i.mobileNav);var c=i.mobileNav.find("li");e(c).each(function(){var t=e(this),n={};if(n.children=t.children("ul").attr("role","menu"),t.data("menu",n),n.children.length>0){var a=t.contents(),o=!1,r=[];e(a).each(function(){if(e(this).is("ul"))return!1;r.push(this),e(this).is("a")&&(o=!0)});var c=e("<"+l.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');l.allowParentLinks&&!l.nestedParentLinks&&o?e(r).wrapAll('<span class="'+s+"_parent-link "+s+'_row"/>').parent():e(r).wrapAll(c).parent().addClass(s+"_row"),l.showChildren?t.addClass(s+"_open"):t.addClass(s+"_collapsed"),t.addClass(s+"_parent");var p=e('<span class="'+s+'_arrow">'+(l.showChildren?l.openedSymbol:l.closedSymbol)+"</span>");l.allowParentLinks&&!l.nestedParentLinks&&o&&(p=p.wrap(c).parent()),e(r).last().after(p)}else 0===t.children().length&&t.addClass(s+"_txtnode");t.children("a").attr("role","menuitem").click(function(t){l.closeOnClick&&!e(t.target).parent().closest("li").hasClass(s+"_parent")&&e(i.btn).click()}),l.closeOnClick&&l.allowParentLinks&&(t.children("a").children("a").click(function(t){e(i.btn).click()}),t.find("."+s+"_parent-link a:not(."+s+"_item)").click(function(t){e(i.btn).click()}))}),e(c).each(function(){var t=e(this).data("menu");l.showChildren||i._visibilityToggle(t.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(t).mousedown(function(){i._outlines(!1)}),e(t).keyup(function(){i._outlines(!0)}),e(i.btn).click(function(e){e.preventDefault(),i._menuToggle()}),i.mobileNav.on("click","."+s+"_item",function(t){t.preventDefault(),i._itemClick(e(this))}),e(i.btn).keydown(function(t){var n=t||event;switch(n.keyCode){case Keyboard.ENTER:case Keyboard.SPACE:case Keyboard.DOWN:t.preventDefault(),n.keyCode===Keyboard.DOWN&&e(i.btn).hasClass(s+"_open")||i._menuToggle(),e(i.btn).next().find('[role="menuitem"]').first().focus()}}),i.mobileNav.on("keydown","."+s+"_item",function(t){var n=t||event;switch(n.keyCode){case Keyboard.ENTER:t.preventDefault(),i._itemClick(e(t.target));break;case Keyboard.RIGHT:t.preventDefault(),e(t.target).parent().hasClass(s+"_collapsed")&&i._itemClick(e(t.target)),e(t.target).next().find('[role="menuitem"]').first().focus()}}),i.mobileNav.on("keydown",'[role="menuitem"]',function(t){var n=t||event;switch(n.keyCode){case Keyboard.DOWN:t.preventDefault();var a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),o=a.index(t.target),l=o+1;a.length<=l&&(l=0);var r=a.eq(l);r.focus();break;case Keyboard.UP:t.preventDefault();var a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),o=a.index(t.target),r=a.eq(o-1);r.focus();break;case Keyboard.LEFT:if(t.preventDefault(),e(t.target).parent().parent().parent().hasClass(s+"_open")){var c=e(t.target).parent().parent().prev();c.focus(),i._itemClick(c)}else e(t.target).parent().parent().hasClass(s+"_nav")&&(i._menuToggle(),e(i.btn).focus());break;case Keyboard.ESCAPE:t.preventDefault(),i._menuToggle(),e(i.btn).focus()}}),l.allowParentLinks&&l.nestedParentLinks&&e("."+s+"_item a").click(function(e){e.stopImmediatePropagation()})},o.prototype._menuToggle=function(e){var t=this.btn,n=this.mobileNav;t.hasClass(s+"_collapsed")?(t.removeClass(s+"_collapsed"),t.addClass(s+"_open")):(t.removeClass(s+"_open"),t.addClass(s+"_collapsed")),t.addClass(s+"_animating"),this._visibilityToggle(n,t.parent(),!0,t)},o.prototype._itemClick=function(e){var t=this.settings,n=e.data("menu");n||((n={}).arrow=e.children("."+s+"_arrow"),n.ul=e.next("ul"),n.parent=e.parent(),n.parent.hasClass(s+"_parent-link")&&(n.parent=e.parent().parent(),n.ul=e.parent().next("ul")),e.data("menu",n)),n.parent.hasClass(s+"_collapsed")?(n.arrow.html(t.openedSymbol),n.parent.removeClass(s+"_collapsed"),n.parent.addClass(s+"_open"),n.parent.addClass(s+"_animating"),this._visibilityToggle(n.ul,n.parent,!0,e)):(n.arrow.html(t.closedSymbol),n.parent.addClass(s+"_collapsed"),n.parent.removeClass(s+"_open"),n.parent.addClass(s+"_animating"),this._visibilityToggle(n.ul,n.parent,!0,e))},o.prototype._visibilityToggle=function(t,n,a,i,o){var l=this,r=l.settings,c=l._getActionItems(t),p=0;function d(t,n){e(t).removeClass(s+"_animating"),e(n).removeClass(s+"_animating"),o||r.afterOpen(t)}function u(n,a){t.attr("aria-hidden","true"),c.attr("tabindex","-1"),l._setVisAttr(t,!0),t.hide(),e(n).removeClass(s+"_animating"),e(a).removeClass(s+"_animating"),o?"init"==n&&r.init():r.afterClose(n)}a&&(p=r.duration),t.hasClass(s+"_hidden")?(t.removeClass(s+"_hidden"),o||r.beforeOpen(i),"jquery"===r.animations?t.stop(!0,!0).slideDown(p,r.easingOpen,function(){d(i,n)}):"velocity"===r.animations&&t.velocity("finish").velocity("slideDown",{duration:p,easing:r.easingOpen,complete:function(){d(i,n)}}),t.attr("aria-hidden","false"),c.attr("tabindex","0"),l._setVisAttr(t,!1)):(t.addClass(s+"_hidden"),o||r.beforeClose(i),"jquery"===r.animations?t.stop(!0,!0).slideUp(p,this.settings.easingClose,function(){u(i,n)}):"velocity"===r.animations&&t.velocity("finish").velocity("slideUp",{duration:p,easing:r.easingClose,complete:function(){u(i,n)}}))},o.prototype._setVisAttr=function(t,n){var a=this,i=t.children("li").children("ul").not("."+s+"_hidden");n?i.each(function(){var t=e(this);t.attr("aria-hidden","true"),a._getActionItems(t).attr("tabindex","-1"),a._setVisAttr(t,n)}):i.each(function(){var t=e(this);t.attr("aria-hidden","false"),a._getActionItems(t).attr("tabindex","0"),a._setVisAttr(t,n)})},o.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var n=e.children("li"),a=n.find("a");t.links=a.add(n.find("."+s+"_item")),e.data("menu",t)}return t.links},o.prototype._outlines=function(t){t?e("."+s+"_item, ."+s+"_btn").css("outline",""):e("."+s+"_item, ."+s+"_btn").css("outline","none")},o.prototype.toggle=function(){this._menuToggle()},o.prototype.open=function(){this.btn.hasClass(s+"_collapsed")&&this._menuToggle()},o.prototype.close=function(){this.btn.hasClass(s+"_open")&&this._menuToggle()},e.fn[i]=function(t){var n,a=arguments;return void 0===t||"object"==typeof t?this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new o(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?(this.each(function(){var s=e.data(this,"plugin_"+i);s instanceof o&&"function"==typeof s[t]&&(n=s[t].apply(s,Array.prototype.slice.call(a,1)))}),void 0!==n?n:this):void 0}}(jQuery,document,window);