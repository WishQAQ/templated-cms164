/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
//jQuery mousewheel
/*
$("html,body").bind("mousewheel",bodyScroll)
var bodyScroll = function (delta,aS,aQ,deltaY){
	delta.preventDefault();
	if (deltaY > 0) {
		if(NOW>0 && SCROLL == true) {
			NOW-- 
			scrollAnimate(NOW)
		}
	} else if (deltaY < 0) {
			if(NOW<LIMIT && SCROLL == true) {
				NOW++ 
				scrollAnimate(NOW)
		}
	}
	return false;
}
*/
(function(a) {
	function d(b) {
		var c = b || window.event,
			d = [].slice.call(arguments, 1),
			e = 0,
			f = !0,
			g = 0,
			h = 0;
		return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
	}
	var b = ["DOMMouseScroll", "mousewheel"] ;
	if (a.event.fixHooks) for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
	a.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener) for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
			else this.onmousewheel = d
		},
		teardown: function() {
			if (this.removeEventListener) for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
			else this.onmousewheel = null
		}
	},
	a.fn.extend({
		mousewheel: function(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	})
})(jQuery);

//jQuery animate easing method
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/***********************
Copyright C 2012 sunyang
FileName: jQuery.plus.extend.js
Author: adis
Version: 1.0
Date: 2012-11-15
Description: 整合常用javascript方式
************************/

jQuery.fn.extend({
	//去除连接和表单元素虚线
	outline:function(){
		return this.each(function(){
			var _this = $(this) ;
			_this.focus(function(){
				_this.blur()
			})
		})
	},
	//添加类名并且清除同类该类名
	tabClass:function(className) {
		return this.each(function(){
			$(this).addClass(className).siblings().removeClass(className)
		})
	},
	//元素划过样式切换
	hoverClass:function(className) {
		return this.each(function(){
			var _this = $(this) ;
			_this.hover(function(){
				_this.addClass(className)
			},function(){
				_this.removeClass(className)
			})
		})
	},
	//表单文本元素聚焦样式切换
	focusClass:function(className) {
		return this.each(function(){
			var _this = $(this) ;
			_this.focus(function(){
				_this.addClass(className)
			}).blur(function(){
				_this.removeClass(className)
			})	
		})
	},
	//表单文本元素聚焦默认提示文本
	defaultValue:function(className) {
		return this.each(function(){
			var _this = $(this) ;
			var def = "" ;
			if(_this.val().length != def) _this.addClass(className)
			_this.focus(function(){
				if(_this.val() == def) _this.val("").addClass(className)
			}).blur(function(){
				if(_this.val().length == 0) _this.val(def).removeClass(className)
			})	
		})		
	}
})

jQuery.extend({
	//$.tab({parentElm:"parentElm",tabElm:"tabElm",switchElm:"switchElm",trigger:"trigger",tabClassName:"tabClassName",tabSwitchClassName:"tabSwitchClassName"})
	tab:function(opt){
		var def = {
			trigger:"hover",
			tabClassName:"selected",
			tabSwitchClassName:"block"
		}
		var opt = $.extend(def,opt) ;
		var parentElm = $(opt.parentElm)
		var tabElm = $(opt.tabElm) ;
		var switchElm = $(opt.switchElm) ;
		var trigger = opt.trigger ;
		var tabClassName = opt.tabClassName ;
		var tabSwitchClassName = opt.tabSwitchClassName ;
		tabElm.bind(trigger,function(){
			var _this = $(this) ;
			var _thisIndex = _this.index() ;
			_this.tabClass(tabClassName) ;
			switchElm.eq(_thisIndex).tabClass(tabSwitchClassName) ;
		})
	},
	//$.scroll({parentElm:"parentElm",scrollElm:"scrollElm",direction:"direction",prevElm:"prevElm",nextElm:"nextElm",controlElm:"controlElm",limitNum:limitNum,delay:delay,transition:transition,easing:"easing",space:space,controlElmClassName:"controlElmClassName",scrollElmChild:"scrollElmChild"})
	scroll:function(opt){
		var def = {
			direction:"marginLeft",
			prevElm:null,
			nextElm:null,
			limitNum:1,
			delay:7000,
			transition:1000,
			easing:"swing",
			controlElmClassName:"selected",
			scrollElmChild:"li"
		}
		var opt = $.extend(def,opt) ;
		var parentElm = $(opt.parentElm) ;
		var scrollElm = $(opt.scrollElm) ;
		var direction = opt.direction ;
		var prevElm = $(opt.prevElm) ;
		var nextElm = $(opt.nextElm) ;
		var controlElm = $(opt.controlElm) ;
		var limitNum = opt.limitNum ;
		var delay = opt.delay ;
		var transition = opt.transition ;
		var easing = opt.easing ;
		var space = opt.space ;
		var controlElmClassName = opt.controlElmClassName ;
		var scrollIndex = 0 ;
		var scrollElmLength = scrollElm.find(opt.scrollElmChild).length ;
		var limit = scrollElmLength-limitNum ;
		var distance = 0 ;
		var scrollSetInter = function(){
			scrollIndex+1>limit?scrollIndex=0:scrollIndex++ ;
			scrollAnimate(scrollIndex)
		}
		var scrollTimer = setInterval(scrollSetInter,delay)
		parentElm.hover(function(){
			clearInterval(scrollTimer)
		},function(){
			scrollTimer = setInterval(scrollSetInter,delay)
		})
		prevElm.click(function(){
			scrollIndex-1<0?scrollIndex=limit:scrollIndex-- ;
			scrollAnimate(scrollIndex)
		})
		nextElm.click(function(){
			scrollIndex+1>limit?scrollIndex=0:scrollIndex++ ;
			scrollAnimate(scrollIndex)
		})
		controlElm.click(function(){
			var _this = $(this) ;
			var _thisIndex = _this.index() ;
			scrollIndex = _thisIndex ;
			scrollAnimate(scrollIndex)
		})
		function scrollAnimate(target) {
			distance = -(target*space) ;
			controlElm.eq(target).tabClass(controlElmClassName) ;
			eval("scrollElm.stop().animate({"+direction+":distance},transition,easing)")
		}
	},
	//$.scrollLoop({parentElm:"parentElm",scrollElm:"scrollElm",prevElm:"prevElm",nextElm:"nextElm",delay:delay,transition:transition,easing:"easing",space:space,scrollElmChild:"scrollElmChild"})
	scrollLoop:function(opt){
		var def = {
			prevElm:null,
			nextElm:null,
			delay:7000,
			transition:1000,
			easing:"swing",
			scrollElmChild:"li"
		}
		var opt = $.extend(def,opt) ;
		var parentElm = $(opt.parentElm) ;
		var scrollElm = $(opt.scrollElm) ;
		var prevElm = $(opt.prevElm) ;
		var nextElm = $(opt.nextElm) ;
		var delay = opt.delay ;
		var transition = opt.transition ;
		var easing = opt.easing ;
		var space = -opt.space ;
		var scrollLoopLock = true ;
		var scrollLoopIndex = 0 ;
		var scrollElmLength = scrollElm.find(opt.scrollElmChild).length ;
		var scrollLoopLimit = scrollElmLength - 1 ;
		var prevScrollLoop = function(){
			if(scrollLoopLock) {
				scrollLoopLock = false ;
				scrollLoopIndex-1<0?scrollLoopIndex=scrollLoopLimit:scrollLoopIndex-- ;
				scrollElm.css({marginLeft:space}) ;
				scrollElm.find(opt.scrollElmChild+":last").prependTo(opt.scrollElm) ;
				scrollElm.animate({marginLeft:0},transition,easing,function(){
					scrollLoopLock = true ;
				})
			}
		}
		var nextScrollLoop = function(){
			if(scrollLoopLock) {
				scrollLoopLock = false ;
				scrollLoopIndex+1>scrollLoopLimit?scrollLoopIndex=0:scrollLoopIndex++ ;
				scrollElm.animate({marginLeft:space},transition,easing,function(){
					scrollElm.find(opt.scrollElmChild+":first").appendTo(this) ;
					scrollElm.css({marginLeft:0}) ;
					scrollLoopLock = true ;
				})
			}
		}
		var scrollLoopSetInter = nextScrollLoop ;
		var scrollLoopTimer = setInterval(scrollLoopSetInter,delay) ;
		parentElm.hover(function(){
			clearInterval(scrollLoopTimer) ;
		},function(){
			scrollLoopTimer = setInterval(scrollLoopSetInter,delay) ;
		})
		prevElm.bind("click",prevScrollLoop) ;
		nextElm.bind("click",nextScrollLoop) ;
	}
})