webpackJsonp([36],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(509);


/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(247);
	__webpack_require__(253);
	__webpack_require__(510);

	__webpack_require__(516);

	$(function () {

	  var params = {
	    "userform_save": "http://sat.sljy.com/ajax/userform/setuserclew"
	  };

	  function clearinput() {
	    $('#part1-iphone').val("");
	    $('#part2-iphone').val("");
	    $('#part3-iphone').val("");
	    $('#type-toefl-iphone').val("");
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
	    $(".zhuanti-clue-toefl-part1 ul li.qieh" + id).get(0).scrollIntoView();
	  });

	  $(".posdiv").on("mouseover", function () {
	    var num = $(this).attr("data-pos");
	    $(".posdiv").removeClass("pos_hover");
	    $(this).addClass("pos_hover");
	    $(".zhuanti-clue-toefl-part2 .qieh").hide();
	    $(".zhuanti-clue-toefl-part2 .qieh" + num).show();
	  });

	  $(".zhuanti-clue-toefl-part1 .qieh1,.zhuanti-clue-toefl-part1 .qieh2,.zhuanti-clue-toefl-part1 .qieh4").click(function () {
	    $(this).parents('.zhuanti-clue-toefl-part1').find('.phone').css("border", "1px solid #ff4a46");
	    $(this).parents('.zhuanti-clue-toefl-part1').find('.phone').focus();
	  });

	  $(".zhuanti-clue-toefl-part2 .qieh").click(function () {
	    $(".zhuanti-clue-toefl-part2 #part2-iphone").css("border", "1px solid #ff4a46");
	    $(".zhuanti-clue-toefl-part2 #part2-iphone").focus();
	  });

	  $(".zhuanti-clue-toefl-part3 .info").click(function () {
	    $(".zhuanti-clue-toefl-part3 #part3-iphone").css("border", "1px solid #ff4a46");
	    $(".zhuanti-clue-toefl-part3 #part3-iphone").focus();
	  });

	  //  $(".zhuanti-clue-toefl-banner .abtn").click(function(){
	  //   $("html,body").animate({scrollTop:$(".zhuanti-clue-toefl-part2").offset().top},600);
	  // })

	  $('body').on('click', '.part1-regBtn', function () {

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
	        "style_id": "zhuanti-toefl-1",
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
	    var $phoneWarn = $('.zhuanti-clue-toefl-part2 .phoneWarn');
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
	        "style_id": "zhuanti-toefl-2",
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
	    var $phoneWarn = $('.zhuanti-clue-toefl-part3 .phoneWarn');
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
	        "style_id": "zhuanti-toefl-3",
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
	  $('body').on('click', '.toefl-regBtn', function () {
	    $(this).removeClass("regBtnbling");
	    var tel = $.trim($("#type-toefl-iphone").val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    var $phoneWarn = $('.overlay-type-toefl .phoneWarn');
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
	        "style_id": "zhuanti-toefl-4",
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
	  $('body').on('click', '.close_btn', function () {
	    $('.zhuantiOverlay').hide();
	    $('.layer-bg').hide();
	  });

	  $('body').on('click', '.layer-bg', function () {
	    $('.zhuantiOverlay').hide();
	    $('.layer-bg').hide();
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ },

/***/ 510:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	$(function () {
			(function () {
					var params = {
							"userform_save": "http://sat.sljy.com/ajax/userform/setuserclew"
					};

					$('body').append('<div class="layer-bg layer-bg-type1">' + '</div>' + '<div class="overlay-type1">' + '<div class="overlayContenttoefl">' + '<div class="close_btn layer-bg-type1-close_btn"></div>' + '<div class="head">' + '<ul>' + '<li class="active" data-num="1">托福TPO 1-53领取</li>' + '<li data-num="2">托福完整版机经领取</li>' + '<li data-num="3">托福历年真题及解析领取</li>' + '</ul>' + '</div>' + '<div class="content">' + '<div class="qieh qieh1"></div>' + '<div class="qieh qieh2"></div>' + '<div class="qieh qieh3"></div>' + '</div>' + '<div class="form">' + '<div class="regItem">' + '<span></span>' + '<input type="tel" class="phone" id="type1-iphone" placeholder="请填写接收资料链接的手机号">' + '<div class="warnTips phoneWarn"></div>' + '</div>' + '<div class="regItem layer-bg-type1-regBtn">' + '<input class="regBtn" type="button" value="提交立即领取全套托福资料">' + '</div>' + '</div>' + '</div>' + '</div>');

					//弹窗切换
					$(".overlay-type1 .overlayContenttoefl .head ul li").click(function (e) {
							//e.preventDefault();				
							$(this).addClass('active').siblings().removeClass('active');
							var num = $(this).attr('data-num');
							$('.qieh').hide();
							$('.qieh' + num).show();
					});

					$(".overlay-type1 .overlayContenttoefl .content .qieh1").click(function () {
							$(".overlay-type1 #type1-iphone").css("border", "1px solid #ff4a46");
					});

					//if(options) {
					//  params=$.extend({},params,options);
					//}
					var formwrap = ".overlayContenttoefl ";
					// if($('.xiaomaclue-toefl-type1').length>0){
					// 	$('.overlay-type1').show();
					//   $('.layer-bg-type1').show();
					// }


					$('.xiaomaclue-toefl-type1').on('click', function () {
							$('.overlay-type1').show();
							$('.layer-bg-type1').show();
					});

					/*隐藏浮层*/
					$('body').on('click', '.layer-bg-type1-close_btn', function () {
							$('.overlay-type1').hide();
							$('.layer-bg-type1').hide();
					});

					$('body').on('click', '.layer-bg-type1', function () {
							$('.overlay-type1').hide();
							$('.layer-bg-type1').hide();
					});

					/*注册按钮点击*/

					$('body').on('click', '.layer-bg-type1-regBtn', function () {

							var tel = $.trim($(".overlay-type1 #type1-iphone").val());
							var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
							var $phoneWarn = $('.overlay-type1 .phoneWarn');
							$phoneWarn.css('visibility', 'hidden');

							if (tel == '' || tel == null) {
									$phoneWarn.html('请输入手机号码').css('visibility', 'visible');
									return false;
							}
							if (telReg == true) {
									$phoneWarn.html('请输入正确手机号码').css('visibility', 'visible');
									return false;
							}

							//调接口
							$.ajax({
									url: params.userform_save,
									data: {
											"mobile": tel,
											"style_id": "toefl-1"
									},
									type: "post",
									dataType: "json",
									success: function success(data) {

											if (data.status == 0) {
													$phoneWarn.html(data.message).css('visibility', 'visible');
													return false;
											} else {
													$('.overlay-type1').hide();
													$('.layer-bg-type1').hide();
													$('.layer-bg').show();
													$('.zhuantiOverlay').show();
													$phoneWarn.css('visibility', 'hidden');
											}
									}
							});
					});
			})();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ }

});