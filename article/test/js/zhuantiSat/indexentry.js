webpackJsonp([39],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(533);


/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(247);
	__webpack_require__(253);
	__webpack_require__(534);
	__webpack_require__(387);
	var Swiper = __webpack_require__(388);
	__webpack_require__(260);
	__webpack_require__(261);
	$(function () {

	  //3秒后出现弹窗
	  setTimeout(function () {
	    $(".layer-bg-sat").show();
	    $(".overlay-sat").show();
	  }, 3000);

	  $("#doyoo_panel").hide();
	  $("#doyoo_monitor").css("visibility", "hidden");

	  //表格弹窗start
	  var $satpop1 = $(".satpop1");
	  var $linksatpop1 = $("#satpop1");
	  var $sattable_overlay_1 = $(".sattable-overlay-1");
	  $linksatpop1.click(function () {
	    $sattable_overlay_1.show();
	    $satpop1.show();
	  });
	  $(".satpopclose_1").click(function () {
	    $sattable_overlay_1.hide();
	    $satpop1.hide();
	  });
	  $sattable_overlay_1.click(function () {
	    $sattable_overlay_1.hide();
	    $satpop1.hide();
	  });

	  var $satpop2 = $(".satpop2");
	  var $linksatpop2 = $("#satpop2");
	  var $sattable_overlay_2 = $(".sattable-overlay-2");
	  $linksatpop2.click(function () {
	    $sattable_overlay_2.show();
	    $satpop2.show();
	  });
	  $(".satpopclose_2").click(function () {
	    $sattable_overlay_2.hide();
	    $satpop2.hide();
	  });
	  $sattable_overlay_2.click(function () {
	    $sattable_overlay_2.hide();
	    $satpop2.hide();
	  });

	  //表格弹窗end
	  $(".posdiv1").on("mouseover", function () {
	    var num = $(this).attr("data-pos");
	    $(".posdiv1").removeClass("pos_hover");
	    $(this).addClass("pos_hover");
	    $(".qieh1").hide();
	    $(".qieh1" + num).show();
	  });

	  $(".posdiv2").on("mouseover", function () {
	    var num = $(this).attr("data-pos");
	    $(".posdiv2").removeClass("pos_hover");
	    $(this).addClass("pos_hover");
	    $(".qieh2").hide();
	    $(".qieh2" + num).show();
	  });

	  var viewSwiper = new Swiper('.view .swiper-container', {
	    paginationClickable: true,
	    direction: 'horizontal',
	    onSlideChangeStart: function onSlideChangeStart() {
	      updateNavPosition();
	    }
	  });

	  var previewSwiper = new Swiper('.preview .swiper-container', {
	    visibilityFullFit: true,
	    slidesPerView: 'auto',
	    onlyExternal: true,
	    onSlideClick: function onSlideClick() {
	      viewSwiper.swipeTo(previewSwiper.clickedSlideIndex);
	    }
	  });

	  function updateNavPosition() {
	    $('.preview .active-nav').removeClass('active-nav');
	    var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav');
	    if (!activeNav.hasClass('swiper-slide-visible')) {
	      if (activeNav.index() > previewSwiper.activeIndex) {
	        var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1;
	        previewSwiper.swipeTo(activeNav.index() - thumbsPerNav);
	      } else {
	        previewSwiper.swipeTo(activeNav.index());
	      }
	    }
	  }

	  $(".part1-slider").flexslider({
	    animation: "slide",
	    itemWidth: 340,
	    itemMargin: 5,
	    animationLoop: true,
	    slideshow: true,
	    slideToStart: 0,
	    directionNav: false,
	    controlNav: false
	  });

	  $(".part4 ul li .pos .abtn").click(function () {
	    $(".layer-bg-sat").show();
	    $(".overlay-sat").show();
	  });

	  $(".part5 ul.poslist li").mouseover(function () {
	    var num = $(this).attr("data-num");
	    $(this).find(".pos_hover").show();
	    $(this).siblings().find(".pos_hover").hide();
	    $("ul.imglist li.img" + num).show().siblings().hide();
	  });

	  $(".part9 .content .itemcontent").click(function () {
	    $(".layer-bg-sat").show();
	    $(".overlay-sat").show();
	  });

	  $("#part10_1 .pos3").click(function () {
	    $("#part10_1 .form_img input.phone").css("border", "1px solid #ff4a46");
	    $("#part10_1 .form_img input.phone").focus();
	  });

	  $("#part10_2 .pos1 .text").click(function () {
	    $(".layer-bg-sat").show();
	    $(".overlay-sat").show();
	  });

	  $("#part13 .inner-part2 .item .itemcontent a").click(function () {
	    $(".layer-bg-sat").show();
	    $(".overlay-sat").show();
	  });

	  // var top=$(window).scrollTop();
	  // if(top>$(".part1").height()/2+100){
	  //   $(".leftsidebar").show();
	  //   $(".rightsidebar").show();
	  // }
	  // $(window).scroll(function(e){
	  //   var top=$(window).scrollTop();
	  //   if(top>297){
	  //     $(".leftsidebar").show();
	  //     $(".rightsidebar").show();
	  //   }
	  //   if(top<297){
	  //     $(".leftsidebar").hide();
	  //     $(".rightsidebar").hide();
	  //   }
	  // })

	  var params = {
	    "userform_save": "http://sat.sljy.com/ajax/userform/setuserclew"
	  };

	  function clearinput() {
	    $('#part1-iphone').val("");
	    $('#part2-iphone').val("");
	    $('#part3-iphone').val("");
	    $('#part4-iphone').val("");
	    $('#part5-iphone').val("");
	    // $('#part6-name').val("");
	    $('#part6-iphone').val("");
	    // $('#part7-name').val("");
	    // $('#part7-password').val("");
	    // $('#part7-num1').val("");
	    // $('#part7-num2').val("");
	    // $('#part7-num3').val("");
	    //$('#part7-iphone').val("");
	    $('#part9-iphone').val("");
	    $('#part10-iphone').val("");
	    $('#part10-iphone2').val("");
	    $('#part13-iphone').val("");
	    $('#part14-iphone').val("");
	  }

	  $('.zhuantiOverlay .close-btn').click(function () {
	    $('.layer-bg').hide();
	    $('.zhuantiOverlay').hide();
	    clearinput();
	  });

	  $('.layer-bg').click(function () {
	    $('.layer-bg').hide();
	    $('.zhuantiOverlay').hide();
	    clearinput();
	  });

	  //part1线索
	  $(".part1 .part1-regBtn").click(function () {
	    var tel = $.trim($("#part1-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('.part1 .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-1",
	        "transform": "免费领取资料"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //part2线索
	  $(".part2 .part2-regBtn").click(function () {
	    var tel = $.trim($("#part2-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('.part2 .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-2",
	        "transform": "了解考试信息"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //part3线索
	  $(".part3 .part3-regBtn").click(function () {
	    var tel = $.trim($("#part3-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('.part3 .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-3",
	        "transform": "考位查询"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //part4线索
	  $(".part4 .part4-regBtn").click(function () {
	    var tel = $.trim($("#part4-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('.part4 .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-4",
	        "transform": "免费领取资料"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //part5线索
	  $(".part5 .part5-regBtn").click(function () {
	    var tel = $.trim($("#part5-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('.part5 .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-5",
	        "transform": "免费领取资料"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //part6线索
	  $(".part6 .regBtn").click(function () {
	    //var name = $.trim($("#part6-name").val());
	    var tel = $.trim($("#part6-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $warnTips = $('.part6 .warnTips');
	    $warnTips.css('visibility', 'hidden');

	    // if(name==''||name==null)
	    // {
	    //  	$warnTips.html('请输入姓名').css('visibility','visible');
	    //  	return false;
	    // }

	    if (tel == '' || tel == null) {
	      $warnTips.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $warnTips.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-6",
	        "transform": "了解考试信息"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $warnTips.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $warnTips.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  /*part7线索:在线算分系统
	  $(".part7 .regBtn").click(function(){
	  	  var num1 = $.trim($("#part7-num1").val());
	  	  var num2 = $.trim($("#part7-num2").val());
	  	  var num3 = $.trim($("#part7-num3").val());
	  	  var tel = $.trim($("#part7-iphone").val());
	     	var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	     	
	     	var $num1Warn = $('.part7 .num1Warn');
	     	$num1Warn.css('visibility','hidden');
	     	var $num2Warn = $('.part7 .num2Warn');
	     	$num2Warn.css('visibility','hidden');
	     	var $num3Warn = $('.part7 .num3Warn');
	     	$num3Warn.css('visibility','hidden');
	     	var $phoneWarn = $('.part7 .phoneWarn');
	     	$phoneWarn.css('visibility','hidden');
	       	if(num1==''||num1==null)
	     	{
	       	$num1Warn.html('请输入阅读预计答对题目数量').css('visibility','visible');
	       	return false;
	     	}
	     	if(num2==''||num2==null)
	     	{
	       	$num2Warn.html('请输入数学预计答对题目数量').css('visibility','visible');
	       	return false;
	     	}
	     	if(num3==''||num3==null)
	     	{
	       	$num3Warn.html('请输入文法预计答对题目数量').css('visibility','visible');
	       	return false;
	     	}
	     	if(tel==''||tel==null)
	     	{
	       	$phoneWarn.html('请输入手机号码').css('visibility','visible');
	       	return false;
	     	}
	     	if(telReg==true)
	     	{
	       	$phoneWarn.html('请输入正确的手机号码').css('visibility','visible');
	       	return false;
	     	}
	       	//调接口
	      	$.ajax({
	       	url: params.userform_save,
	       	data:{
	       	  	"mobile":tel,
	             "style_id":"zhuanti-sat-7",
	             "transform":"了解考试信息"
	         	},
	        type: "post",
	        dataType: "json",
	        success: function (data) {
	              	if(data.status==0)
	            	{
	              		$phoneWarn.html(data.message).css('visibility','visible');
	              		return false;
	            	}
	            	else
	            	{
	     		   		  $('.layer-bg').show();
	                 $('.zhuantiOverlay').show();
	                 $warnTips.css('visibility','hidden');
	            	}
	       	}
	     	});
	  })
	   */

	  //part9线索
	  $(".part9 .part9-regBtn").click(function () {
	    var tel = $.trim($("#part9-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('.part9 .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-7",
	        "transform": "免费领取资料"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //part10 线索1
	  $("#part10_1 .part10-regBtn").click(function () {
	    var tel = $.trim($("#part10-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('#part10_1 .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-8",
	        "transform": "免费领取资料"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //part10 线索2
	  $("#part10_2 .part10-regBtn2").click(function () {
	    var tel = $.trim($("#part10-iphone2").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('#part10_2 .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-9",
	        "transform": "免费领取资料"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //part13线索
	  $("#part13 .part13-regBtn").click(function () {
	    var tel = $.trim($("#part13-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('#part13 .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-10",
	        "transform": "免费领取资料"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //part14线索
	  $("#part14 .part14-regBtn").click(function () {
	    var tel = $.trim($("#part14-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('#part14 .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-11",
	        "transform": "免费领取资料"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //底部浮层
	  $('body').on('click', '.sat-regBtn', function () {
	    $(this).removeClass("regBtnbling");
	    var tel = $.trim($("#type-sat-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('.overlay-type-sat .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-12",
	        "transform": "免费领取资料"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  //弹窗切换
	  $(".overlay-sat .overlayContent-sat .head ul li").click(function (e) {
	    //e.preventDefault();       
	    $(this).addClass('active').siblings().removeClass('active');
	    var num = $(this).attr('data-num');
	    $('.overlayContent-sat .content .qieh').hide();
	    $('.overlayContent-sat .content .qieh' + num).show();
	  });

	  $(".overlay-sat .overlayContent-sat .content .qieh").click(function () {
	    $(".overlay-sat #type1-iphone").css("border", "1px solid #ff4a46");
	    $(".overlay-sat #type1-iphone").focus();
	  });

	  /*隐藏弹窗浮层*/
	  $('body').on('click', '.overlayContent-sat .close_btn', function () {
	    $('.overlay-sat').hide();
	    $('.layer-bg-sat').hide();
	  });

	  /*点击关闭按钮后30秒再一次显示浮层*/
	  $('body').one('click', '.overlayContent-sat .close_btn', function () {
	    setTimeout(function () {
	      $(".layer-bg-sat").show();
	      $(".overlay-sat").show();
	    }, 30000);
	  });

	  //弹窗浮层  
	  $('body').on('click', '.layer-bg-sat-regBtn', function () {
	    var tel = $.trim($(".overlay-sat #type1-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('.overlay-sat .phoneWarn');
	    $phoneWarn.css('visibility', 'hidden');

	    if (tel == '' || tel == null) {
	      $phoneWarn.html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $phoneWarn.html('请输入正确的手机号码').css('visibility', 'visible');
	      return false;
	    }

	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: {
	        "mobile": tel,
	        "style_id": "zhuanti-sat-13",
	        "transform": "免费领取资料"
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {

	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.overlay-sat').hide();
	          $('.layer-bg-sat').hide();
	          $('.layer-bg').show();
	          $('.zhuantiOverlay').show();
	        }
	      }
	    });
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ },

/***/ 534:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});