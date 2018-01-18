webpackJsonp([19],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(442);


/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(250);
	__webpack_require__(256);
	__webpack_require__(443);

	__webpack_require__(263);
	__webpack_require__(264);

	__webpack_require__(393);

	$(function () {
	  var imageflow = __webpack_require__(365);

	  $(".part6-slide").flexslider({
	    slideshowSpeed: 3000, //展示时间间隔ms
	    animationSpeed: 400, //滚动时间ms
	    animation: "slide",
	    animationLoop: true,
	    slideshow: true,
	    slideToStart: 0,
	    controlNav: true,
	    directionNav: false
	  });

	  $(".backtop").on("click", function () {
	    $("html,body").animate({ scrollTop: $("#wrapper").offset().top }, 600);
	  });

	  $('.luodipagenav li').click(function (event) {
	    var id = $(this).attr('data-item');
	    $("html,body").animate({ scrollTop: $(".part" + id).offset().top }, 600);
	  });

	  var h1 = $('.luodipageHead').height();
	  var h2 = $('.luodipage-banner').height();
	  if ($(window).scrollTop() > h1 + h2) {
	    $('.luodipagenav').css({ 'position': 'fixed', 'top': '0px', 'left': '0px', 'right': '0px' });
	  } else {
	    $('.luodipagenav').css({ 'position': 'relative' });
	  }

	  $(window).scroll(function (e) {
	    var scrollTop = $(this).scrollTop();
	    var h1 = $('.luodipageHead').height();
	    var h2 = $('.luodipage-banner').height();
	    if ($(window).scrollTop() > h1 + h2) {
	      $('.luodipagenav').css({ 'position': 'fixed', 'top': '0px', 'left': '0px', 'right': '0px', 'z-index': '99999' });
	    } else {
	      $('.luodipagenav').css({ 'position': 'relative' });
	    }

	    if (scrollTop > 600) {
	      $(".part9").show();
	    } else {
	      $(".part9").hide();
	    }
	  });

	  /*隐藏浮层*/
	  $('body').on('click', '.close_btn', function () {
	    $('.luodipageOverlay').hide();
	    $('.layer-bg').hide();
	  });
	  $('body').on('click', '.layer-bg', function () {
	    $('.luodipageOverlay').hide();
	    $('.layer-bg').hide();
	  });

	  $('body').on('click', '.confirmbtn', function () {
	    $('.luodipageOverlay').hide();
	    $('.layer-bg').hide();
	  });
	  var subject = $('#xueke').val();
	  var source = $('#source').val();
	  var mode = $('#mode').val();
	  var channel_type = $('#channel_type').val();
	  var channel_name = $('#channel_name').val();
	  var activity_name = $('#activity_name').val();
	  var join_type = $('#join_type').val();
	  var title = "",
	      title2 = "",
	      text = "",
	      type = "",
	      baidu = "",
	      tiqu = "";

	  $('.showOverlay').on('click', function () {
	    var ifcheckin = $('#ifcheckin').val();
	    title = $(this).attr('data-title');
	    title2 = $(this).attr('data-title2');
	    text = $(this).attr('data-text');
	    type = $(this).attr('data-type');
	    baidu = $(this).attr('data-baidu');
	    tiqu = $(this).attr('data-tiqu');

	    $('.luodipageOverlay').show();
	    $('.layer-bg').show();
	    $('.luodipageOverlay .step1 .title').html(title);
	    $('.luodipageOverlay .step2 .title').html(title2);

	    $('.luodipageOverlay .VeriCode').val('');
	    $('.phoneWarn').css('visibility', 'hidden');
	    $('.luodipageOverlay .step2 .baiduyun_content #baidu').html(baidu);
	    $('.luodipageOverlay .step2 .baiduyun_content #tiqu').html(tiqu);
	    if (ifcheckin == 'false') {
	      $('.luodipageOverlay .step1').show();
	      $('.luodipageOverlay .step2').hide();
	      $('.luodipageOverlay .step2 .baiduyun_content').hide();
	    } else {
	      $('.luodipageOverlay .step1').hide();
	      $('.luodipageOverlay .step2').show();
	      $('.luodipageOverlay .step2 .baiduyun_content').show();
	    }
	  });

	  /*注册按钮点击*/
	  $('body').on('click', '.submitbtns', function () {
	    var tel = $.trim($('.phone').val());
	    var yzm = $.trim($('.VeriCode').val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    $('.warnTips').css('visibility', 'hidden');
	    if (tel == '' || tel == null) {
	      $('.phoneWarn').html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $('.phoneWarn').html('请输入正确手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (yzm == '' || yzm == null) {
	      $('.VeriCodeWarn').html('请输入验证码').css('visibility', 'visible');
	      $('.phoneWarn').css('visibility', 'hidden');
	      return false;
	    }
	    //调接口
	    $.ajax({
	      url: '/ajax/userform/save',
	      //url: '../static/jsontest/overlay.json',
	      data: { 'mobile': tel, 'code': yzm,
	        'subject': subject,
	        'source': source,
	        'mode': mode,
	        'channel_type': channel_type,
	        'channel_name': channel_name,
	        'activity_name': activity_name,
	        'join_type': join_type },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {
	        if (data.status == 0) {
	          $('.VeriCodeWarn').html('验证码错误').css('visibility', 'visible');
	          return false;
	        }
	        if (type == 1) {
	          $('#ifcheckin').val('true');
	          $('.warnTips').css('visibility', 'hidden');
	          $('.luodipageOverlay .step1').hide();
	          $('.luodipageOverlay .step2').show();
	          $('.luodipageOverlay .step2 .qrcode_content').show();
	          $('.qrcode_content .text').html('<div class="text">学习顾问将第一时间联系你' + text + '，您也<br/>可以联系三立' + subject + '学习顾问咨询。微信号ID：<span id="wechatnum">13734433272</span></div>');
	        }
	        if (type == 2) {
	          $('#ifcheckin').val('true');
	          $('.warnTips').css('visibility', 'hidden');
	          $('.luodipageOverlay .step1').hide();
	          $('.luodipageOverlay .step2').show();
	          $('.luodipageOverlay .step2 .baiduyun_content').show();
	          $('.luodipageOverlay .step2 .baiduyun_content #baidu').html(baidu);
	          $('.luodipageOverlay .step2 .baiduyun_content #tiqu').html(tiqu);
	        }
	      }
	    });
	  });

	  /*发送验证码按钮点击*/
	  $('body').on('click', '#sendVeriCode', function () {
	    var tel = $.trim($('.phone').val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    if (tel == null || tel == '') {
	      $('.phoneWarn').html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $('.phoneWarn').html('请输入正确手机号码').css('visibility', 'visible');
	      return false;
	    } else {
	      $.ajax({
	        //url: '../static/jsontest/overlay.json',
	        url: '/ajax/userform/send_sms_code',
	        data: { 'mobile': tel },
	        type: "post",
	        dataType: "json",
	        success: function success(data) {
	          if (data.status == 1) {
	            $('.phoneWarn').css('visibility', 'hidden');
	            var callback = null;
	            var waitTimeInterval = 60;
	            $('.verify_code_btn').prop('disabled', true);
	            $('.verify_code_btn').val('重新发送验证码(' + waitTimeInterval + '秒)');
	            var time = waitTimeInterval;
	            var verifyTimer = null;
	            clearTimeout(verifyTimer);
	            (function startSendVeriCodeTimer() {
	              verifyTimer = setTimeout(function () {
	                time--;
	                $('.verify_code_btn').val('重新发送验证码(' + ('0' + time).slice(-2) + '秒)');
	                if (time > 0) {
	                  startSendVeriCodeTimer();
	                } else {
	                  $('.verify_code_btn').prop('disabled', false);
	                  $('.verify_code_btn').val('重新发送验证码');
	                  time = waitTimeInterval;
	                  if ($.isFunction(callback)) {
	                    callback($('.verify_code_btn'));
	                  }
	                }
	              }, 1000);
	            })();
	          }
	        }
	      });
	    }
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)))

/***/ },

/***/ 443:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});