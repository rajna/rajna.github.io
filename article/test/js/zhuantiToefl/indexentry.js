webpackJsonp([40],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(559);


/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(250);
	__webpack_require__(256);
	__webpack_require__(560);
	__webpack_require__(390);
	var Swiper = __webpack_require__(391);
	__webpack_require__(393);
	__webpack_require__(263);
	__webpack_require__(264);
	$(function () {
	  var imageflow = __webpack_require__(365);
	  //3秒后出现弹窗
	  setTimeout(function () {
	    $(".layer-bg").show();
	    $(".overlay-toefl").show();
	  }, 3000);

	  $('.toefl-left li.scroll').click(function (event) {
	    var id = $(this).attr('data-id');
	    $("html,body").animate({ scrollTop: $(".part" + id).offset().top }, 600);
	  });
	  $('.backtop').click(function (event) {
	    $("html,body").animate({ scrollTop: 0 }, 600);
	  });

	  $('.zhuantiOverlay .close-btn').click(function () {
	    $('.layer-bg').hide();
	    $('.zhuantiOverlay').hide();
	    $(".overlay-toefl").hide();
	    clearinput();
	  });

	  $('.layer-bg').click(function () {
	    $('.layer-bg').hide();
	    $('.zhuantiOverlay').hide();
	    $(".overlay-toefl").hide();
	    clearinput();
	  });

	  var instanceOne = new imageflow();
	  instanceOne.init({ ImageFlowID: 'starsIF',
	    captions: false,
	    slider: false,
	    startID: 1
	  });

	  $(".part17-slide").flexslider({
	    slideshowSpeed: 3000, //展示时间间隔ms
	    animationSpeed: 400, //滚动时间ms
	    animation: "slide",
	    animationLoop: true,
	    slideshow: false,
	    slideToStart: 0,
	    directionNav: true,
	    before: function before(slider) {
	      var id = parseInt(slider.animatingTo) + 1;
	      $('.tag-item').removeClass('current');
	      $('.tag-item' + id).addClass('current');
	    }
	  });

	  $('.carousel').carousel({
	    interval: false
	  });

	  $(".posdiv").on("mouseover", function () {
	    var num = $(this).attr("data-pos");
	    $(".posdiv").removeClass("pos_hover");
	    $(this).addClass("pos_hover");
	    $(".qieh").hide();
	    $(".qieh" + num).show();
	  });

	  $("#doyoo_panel").hide();
	  $("#doyoo_monitor").css("visibility", "hidden");

	  $('.showOverlay').click(function (e) {
	    $(".layer-bg").show();
	    $(".overlay-toefl").show();
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

	  var params = {
	    "userform_save": "http://sat.sljy.com/ajax/userform/setuserclew"
	  };

	  function clearinput() {
	    $('.phone').val("");
	  }

	  //part1线索
	  $(".regBtn").click(function () {
	    var tel = $.trim($(this).parents('.form').find('.phone').val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $(this).parents('.form').find('.phoneWarn');
	    var text = $(this).attr('data-text');
	    var id = $(this).attr('data-id');
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
	        "style_id": id,
	        "transform": text
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {
	        if (data.status == 0) {
	          $phoneWarn.html(data.message).css('visibility', 'visible');
	          return false;
	        } else {
	          $('.layer-bg').show();
	          $('.overlay-toefl').hide();
	          $('.zhuantiOverlay').show();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });
	  //弹窗切换
	  $(".overlay-toefl .overlayContent-toefl .head ul li").click(function (e) {
	    //e.preventDefault();
	    $(this).addClass('active').siblings().removeClass('active');
	    var num = $(this).attr('data-num');
	    $('.overlayContent-toefl .content .qieh').hide();
	    $('.overlayContent-toefl .content .qieh' + num).show();
	  });

	  $(".overlay-toefl .overlayContent-toefl .content .qieh").click(function () {
	    $(".overlay-toefl #type1-iphone").css("border", "1px solid #ff4a46");
	    $(".overlay-toefl #type1-iphone").focus();
	  });

	  /*隐藏弹窗浮层*/
	  $('body').on('click', '.overlayContent-toefl .close_btn', function () {
	    $('.overlay-toefl').hide();
	    $('.layer-bg').hide();
	  });

	  /*点击关闭按钮后30秒再一次显示浮层*/
	  $('body').one('click', '.overlayContent-toefl .close_btn', function () {
	    setTimeout(function () {
	      $(".layer-bg").show();
	      $(".overlay-toefl").show();
	    }, 30000);
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)))

/***/ },

/***/ 560:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});