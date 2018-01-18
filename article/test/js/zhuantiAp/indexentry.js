webpackJsonp([37],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(520);


/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(250);
	__webpack_require__(256);

	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(521);

	$(function () {
	  $('.apOverlay').show();
	  $('.layer-bg').show();
	  $('#doyoo_panel').hide();
	  $('.part7 .item-title').hover(function () {
	    var id = $(this).attr('data-id');
	    $('.part7 .item-title').removeClass('active');
	    $(this).addClass('active');
	    $('.part7 .item-content').hide();
	    $('.part7 .content' + id).show();
	  });

	  $("#part9Slider").flexslider({
	    slideshowSpeed: 3000, //展示时间间隔ms
	    animationSpeed: 400, //滚动时间ms
	    animation: "slide",
	    animationLoop: true,
	    slideshow: false,
	    slideToStart: 0,
	    controlNav: false,
	    directionNav: true
	  });
	  $("#part11Slider").flexslider({
	    slideshowSpeed: 3000, //展示时间间隔ms
	    animationSpeed: 400, //滚动时间ms
	    animation: "slide",
	    animationLoop: true,
	    slideshow: false,
	    slideToStart: 0,
	    controlNav: true,
	    directionNav: false
	  });

	  $('.left-nav-list li:not(".backtop")').click(function (event) {
	    var id = $(this).attr('data-id');
	    $("html,body").animate({ scrollTop: $(".part" + id).offset().top }, 600);
	  });
	  $('.backtop').click(function (event) {
	    $("html,body").animate({ scrollTop: 0 }, 600);
	  });

	  $('.part4 .subject-item .btns').click(function (event) {
	    $('.apFiveOverlay').show();
	    $('.layer-bg').show();
	  });

	  $('.part12 .btns').click(function (event) {
	    $("html,body").animate({ scrollTop: $("#part12-iphone").offset().top }, 600);
	    $('#part12-iphone').css('border', '1px solid #ff253f');
	    $('#part12-iphone').focus();
	  });

	  var params = {
	    "userform_save": "http://sat.sljy.com/ajax/userform/setuserclew"
	  };

	  function clearinput() {
	    $('body input[type="tel"]').val("");
	  }

	  $(".nav-list li.nav").click(function () {
	    var id = $(this).attr("data-id");
	    $(".part1 ul li.qieh" + id).addClass("active").siblings().removeClass("active");
	  });

	  $('body').on('click', '.regBtn', function () {
	    var id = $(this).attr('data-id');
	    var text = $(this).attr('data-text');
	    var tel = $.trim($(this).parents('.form').find('.phone').val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $(this).parents('.form').find('.phoneWarn');
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
	          $('.zhuantiOverlay').show();
	          $('.apOverlay').hide();
	          $('.apFiveOverlay').hide();
	          $phoneWarn.css('visibility', 'hidden');
	        }
	      }
	    });
	  });

	  /*隐藏浮层*/
	  $('body').on('click', '.close-btn', function () {
	    $('.zhuantiOverlay').hide();
	    $('.apOverlay').hide();
	    $('.apFiveOverlay').hide();
	    $('.layer-bg').hide();
	    clearinput();
	  });

	  var ifclose = true;

	  $('body').on('click', '.close_btn', function () {
	    $('.zhuantiOverlay').hide();
	    $('.apOverlay').hide();
	    $('.apFiveOverlay').hide();
	    $('.layer-bg').hide();
	    clearinput();
	    if (ifclose) {
	      setTimeout(function () {
	        $('.apOverlay').show();
	        $('.layer-bg').show();
	      }, 30000);
	      ifclose = false;
	    }
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)))

/***/ },

/***/ 521:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});