webpackJsonp([38],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(534);


/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(250);
	__webpack_require__(256);
	__webpack_require__(535);

	$(function () {

	  var params = {
	    "userform_save": "http://sat.sljy.com/ajax/userform/setuserclew"
	  };

	  function clearinput() {
	    $('#part1-iphone').val("");
	    $('#part2-iphone').val("");
	    $('#part3-iphone').val("");
	    $('#type-ielts-iphone').val("");
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

	  $(".nav-list li.nav").click(function () {
	    var id = $(this).attr("data-id");
	    $(".part1 ul li.qieh" + id).addClass("active").siblings().removeClass("active");
	  });

	  $(".posdiv").on("mouseover", function () {
	    var num = $(this).attr("data-pos");
	    $(".posdiv").removeClass("pos_hover");
	    $(this).addClass("pos_hover");
	    $(".part2 .qieh").hide();
	    $(".part2 .qieh" + num).show();
	  });

	  $(".part1 ul li").click(function () {
	    $(".part1 #part1-iphone").css("border", "1px solid #ff4a46");
	  });

	  $(".part2 .content .introduce .qieh").click(function () {
	    $(".part2 #part2-iphone").css("border", "1px solid #ff4a46");
	  });

	  $(".part3 .info").click(function () {
	    $(".part3 #part3-iphone").css("border", "1px solid #ff4a46");
	  });

	  $(".partbanner .abtn").click(function () {
	    $("html,body").animate({ scrollTop: $(".part2").offset().top }, 600);
	  });

	  $('body').on('click', '.part1-regBtn', function () {

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
	        "style_id": "zhuanti-ielts-1",
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

	  $('body').on('click', '.part2-regBtn', function () {

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
	        "style_id": "zhuanti-ielts-2",
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

	  $('body').on('click', '.part3-regBtn', function () {

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
	        "style_id": "zhuanti-ielts-3",
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

	  //底部浮层
	  $('body').on('click', '.ielts-regBtn', function () {
	    $(this).removeClass("regBtnbling");
	    var tel = $.trim($("#type-ielts-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('.overlay-type-ielts .phoneWarn');
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
	        "style_id": "zhuanti-ielts-4",
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

	  /*隐藏浮层*/
	  $('body').on('click', '.close-btn', function () {
	    $('.zhuantiOverlay').hide();
	    $('.layer-bg').hide();
	  });

	  $('body').on('click', '.layer-bg', function () {
	    $('.zhuantiOverlay').hide();
	    $('.layer-bg').hide();
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)))

/***/ },

/***/ 535:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});