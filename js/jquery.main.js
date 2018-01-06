$(function(){
	//public outline clear code
	$("a").outline()
	
	indexFlash()
	
	//瀑布流代码
	$.waterFall({parentElm:"#index>ul",waterElm:"#index>ul>li",loadElm:"#index>.loading",initTop:0,maxHeight:0,paddingBottom:20,notAnyMore:"notAnyMore",ajaxUrl:"",ajaxType:"get",ajaxDateType:"text",ajaxCache:false})
	$.waterFall({parentElm:"#lab>ul",waterElm:"#lab>ul>li",loadElm:"#lab>.loading",initTop:0,maxHeight:0,paddingBottom:20,notAnyMore:"notAnyMore",ajaxUrl:"labpbl.asp?typeid=0",ajaxType:"get",ajaxDateType:"text",ajaxCache:false})
	$.waterFall({parentElm:"#tag0>ul",waterElm:"#tag0>ul>li",loadElm:"#tag0>.loading",initTop:0,maxHeight:0,paddingBottom:20,notAnyMore:"notAnyMore",ajaxUrl:"workpbl.asp?typeid=0",ajaxType:"get",ajaxDateType:"text",ajaxCache:false})
	$.waterFall({parentElm:"#tag3>ul",waterElm:"#tag3>ul>li",loadElm:"#tag3>.loading",initTop:0,maxHeight:0,paddingBottom:20,notAnyMore:"notAnyMore",ajaxUrl:"workpbl.asp?typeid=3",ajaxType:"get",ajaxDateType:"text",ajaxCache:false})
	$.waterFall({parentElm:"#tag4>ul",waterElm:"#tag4>ul>li",loadElm:"#tag4>.loading",initTop:0,maxHeight:0,paddingBottom:20,notAnyMore:"notAnyMore",ajaxUrl:"workpbl.asp?typeid=4",ajaxType:"get",ajaxDateType:"text",ajaxCache:false})
	$.waterFall({parentElm:"#tag5>ul",waterElm:"#tag5>ul>li",loadElm:"#tag5>.loading",initTop:0,maxHeight:0,paddingBottom:20,notAnyMore:"notAnyMore",ajaxUrl:"workpbl.asp?typeid=5",ajaxType:"get",ajaxDateType:"text",ajaxCache:false})
	$.waterFall({parentElm:"#tag6>ul",waterElm:"#tag6>ul>li",loadElm:"#tag6>.loading",initTop:0,maxHeight:0,paddingBottom:20,notAnyMore:"notAnyMore",ajaxUrl:"workpbl.asp?typeid=6",ajaxType:"get",ajaxDateType:"text",ajaxCache:false})
	$.waterFall({parentElm:"#tag7>ul",waterElm:"#tag7>ul>li",loadElm:"#tag7>.loading",initTop:0,maxHeight:0,paddingBottom:20,notAnyMore:"notAnyMore",ajaxUrl:"workpbl.asp?typeid=7",ajaxType:"get",ajaxDateType:"text",ajaxCache:false})
	$.waterFall({parentElm:"#tag8>ul",waterElm:"#tag8>ul>li",loadElm:"#tag8>.loading",initTop:0,maxHeight:0,paddingBottom:20,notAnyMore:"notAnyMore",ajaxUrl:"workpbl.asp?typeid=8",ajaxType:"get",ajaxDateType:"text",ajaxCache:false})
	$.waterFall({parentElm:"#tag10>ul",waterElm:"#tag10>ul>li",loadElm:"#tag9>.loading",initTop:0,maxHeight:0,paddingBottom:20,notAnyMore:"notAnyMore",ajaxUrl:"workpbl.asp?typeid=10",ajaxType:"get",ajaxDateType:"text",ajaxCache:false})
	
	$(".asideNav>.pageTop,.pageTopContent>.btnArea>.topBtn").bind("click",function(){
		$("html,body").stop().animate({scrollTop:0})
		return false
	})
	$(".asideNav>.pageBottom,.pageTopContent>.btnArea>.bottomBtn").bind("click",function(){
		$("html,body").stop().animate({scrollTop:$(document).height()})
		return false
	})
	
	$(".pageTopContent").css({top:($(window).height()*0.5)})
	$(".asideNav").css({top:($(window).height()*0.5)})
})

$(window).scroll(function(){
	var pageTopContent = $(".pageTopContent") ;
	var pageTop = $(".asideNav") ;
	var wintop = $(window).scrollTop() ;
	var winHeight = $(window).height() ;
	pageTopContent.stop().animate({top:wintop+(winHeight*0.5)})
	if(wintop>(winHeight*0.5)) pageTop.css({opacity:1})
	else pageTop.css({opacity:0})
	pageTop.stop().animate({top:wintop+(winHeight*0.5)})
})

$(window).resize(function(){
	var pageTopContent = $(".pageTopContent") ;
	var pageTop = $(".pageTop") ;
	var wintop = $(window).scrollTop() ;
	var winHeight = $(window).height() ;
	pageTopContent.stop().animate({top:wintop+(winHeight*0.5)})
	pageTop.stop().animate({top:wintop+(winHeight*0.5)})
})

function indexFlash() {
	var indexFlashIndex = 0 ;
	var limit = $(".indexBanner>.indexBannerList>li").length-1 ;
	var prenElm = $(".indexBanner>.indexBannerControl>.prevBtn") ;
	var nextElm = $(".indexBanner>.indexBannerControl>.nextBtn") ;
	var indexFlashLock = true ;
	$(".indexBanner>.indexBannerList>li").css({opacity:0}) ;
	$(".indexBanner>.indexBannerList>li").eq(0).css({opacity:1}) ;
	var prevAnimate = function() {
		if(indexFlashLock) {
			indexFlashLock = false ;
			$(".indexBanner>.indexBannerList>li").eq(indexFlashIndex).stop().animate({opacity:0},"slow",function(){
				$(this).removeClass("selected")
				$(".indexBanner>.indexBannerList>li").eq(indexFlashIndex).removeAttr("style").addClass("selected").css({opacity:1})
				indexFlashLock = true
			})
			indexFlashIndex-1<0?indexFlashIndex=limit:indexFlashIndex-- ;
			$(".indexBanner>.indexBannerList>li").eq(indexFlashIndex).css({position:"absolute",top:0,left:0,display:"block",opacity:1,width:"100%"})
		}
	}
	var nextAnimate = function() {
		if(indexFlashLock) {
			indexFlashLock = false ;
			$(".indexBanner>.indexBannerList>li").eq(indexFlashIndex).stop().animate({opacity:0},"slow",function(){
				$(this).removeClass("selected")
				$(".indexBanner>.indexBannerList>li").eq(indexFlashIndex).removeAttr("style").addClass("selected").css({opacity:1})
				indexFlashLock = true
			})
			indexFlashIndex+1>limit?indexFlashIndex=0:indexFlashIndex++ ;
			$(".indexBanner>.indexBannerList>li").eq(indexFlashIndex).css({position:"absolute",top:0,left:0,display:"block",opacity:1,width:"100%"})
		}
	}
	var indexFlashSetFun = nextAnimate ;
	var indexFlashSet = setInterval(indexFlashSetFun,5000)
	$(".indexBanner").hover(function(){
		clearInterval(indexFlashSet)
	},function(){
		indexFlashSet = setInterval(indexFlashSetFun,5000)
	})
	prenElm.bind("click",prevAnimate)
	nextElm.bind("click",nextAnimate)
}

jQuery.extend({		
	//$.waterFall({parentElm:"parentElm",waterElm:"waterElm",loadElm:"loadElm",initTop:initTop,maxHeight:maxHeight,paddingBottom:paddingBottom,notAnyMore:"notAnyMore",ajaxUrl:"ajaxUrl",ajaxType:"ajaxType",ajaxDateType:"ajaxDateType",ajaxCache:false})
	waterFall:function(opt){
		var def = {
		}
		var opt = $.extend(def,opt) ;
		var parentElm = $(opt.parentElm) ;
		var loadElm = $(opt.loadElm) ;
		var initTop = opt.initTop ;
		var paddingBottom = opt.paddingBottom ;
		var ajaxUrl = opt.ajaxUrl ;
		var ajaxType = opt.ajaxType ;
		var ajaxDateType = opt.ajaxDateType ;
		var ajaxCache = opt.ajaxCache ;
		var notAnyMore = opt.notAnyMore ;
		var waterFallLocked = true ;
		var pageIndex=1;
		var waterFallInit = function() {
			var waterElm = $(opt.waterElm) ;
			var maxHeight = opt.maxHeight ;
			var parentElmWidth = parentElm.outerWidth() ;
			var waterElmWidth = $(opt.waterElm).outerWidth() ;
			var columnNum = parseInt(parentElmWidth/waterElmWidth) ;
			if(columnNum == 0) columnNum = 1
			var padding = 0 ;
			if(columnNum != 1) padding = parseInt((parentElmWidth-columnNum*waterElmWidth)/(columnNum-1)) ;
			var waterFallTopData = [] ;
			var waterFallLeftData = [] ;
			if(columnNum == 1) {
				waterFallTopData[0] = 0 ;
				waterFallLeftData[0] = (parentElmWidth-waterElmWidth)/2 ;
			} else {
				for(var i=0;i<columnNum;i++) {
					waterFallTopData[i] = 0 ;
					waterFallLeftData[i] = i*(padding+waterElmWidth) ;
				}
			}
			waterElm.each(function(i,dom){
				var domHeight = $(dom).height() ;
				var thisColumn = (i+1)%columnNum ;
				thisColumn == 0 ? thisColumn = (columnNum-1) : thisColumn-- ;
				$(dom).css({position:"absolute",top:waterFallTopData[thisColumn],left:waterFallLeftData[thisColumn],margin:0}) ;
				waterFallTopData[thisColumn] += domHeight + 20 ;
			})
			for(var i=0;i<waterFallTopData.length;i++) {
				if(waterFallTopData[i] > maxHeight) maxHeight = waterFallTopData[i] ;
			}
			parentElm.css({height:(maxHeight-20)})
		}
		window.waterFallFadeOut = function(dom) {
			$(dom).parents(".cover").css({background:"none"})
			$(dom).animate({opacity:1},2000)
			$(window).resize()
		}
		var reloadData = function() {
			$.ajax({
				url:ajaxUrl+"&page="+pageIndex,
				type:ajaxType,
				dataType:ajaxDateType,
				beforeSend:function(){
					loadElm.animate({opacity:1})
				},
				cache:ajaxCache,
				success:function(data) {
					data = eval(data)
					var dataLength = data.length ;
					$.each(data,function(InfoIndex,Info){
						if(InfoIndex != (dataLength-1)) {
							var dom = "" ;
							dom += '<li>' ;
							dom += '<div class="type">' ;
							dom += Info.type ;
							dom += '</div>' ;
							dom += '<div class="cover"><a href="'+Info.url+'" target="_blank"><img style="opacity:0;filter:Alpha(opacity=0);" src="'+Info.src+'" height="'+Info.height+'" alt="'+Info.title+'" title="'+Info.title+'" onload="waterFallFadeOut(this)" /></a></div>' ;
							dom += '<strong class="title"><a href="'+Info.url+'" target="_blank">'+Info.title+'</a></strong>' ;
							dom += '<p class="intro">'+Info.intro+'</p>' ;
							dom += '<div class="border"></div>' ;
							dom += '</li>' ;
							parentElm.append(dom) ;
						} else {
							if(Info) {
								setTimeout(function(){
									loadElm.text(notAnyMore).show()
								},1000)
								setTimeout(function(){
									loadElm.animate({opacity:0})
								},3000)
								$(window).unbind("scroll",scrollReload)
							}
						}
					})
					waterFallInit()
					waterFallLocked = true ;
					loadElm.animate({opacity:0}) ;
					pageIndex++ ;
				}
			})
		}
		var scrollReload = function() {
			var wintop = $(window).scrollTop() ;
			var reloadPosition = ($(document).height()-($(window).height()*2)) ;
			if(wintop >= reloadPosition && waterFallLocked) {
				waterFallLocked = false ;
				reloadData() ;
			}
		}
		if(parentElm.length != 0) {
			$(window).bind("load",function(){
				//alert(0)
				//parentElm.animate({opacity:1})
				//parentElm.css({opacity:0})
				waterFallInit()
			})
			$(window).bind("resize",waterFallInit)
			$(window).bind("scroll",scrollReload)
		}
	}
})