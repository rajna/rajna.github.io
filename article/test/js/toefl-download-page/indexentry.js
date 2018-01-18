webpackJsonp([31],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(491);


/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(250);
	__webpack_require__(256);

	__webpack_require__(492);

	__webpack_require__(338);
	__webpack_require__(495);

	$(function () {});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)))

/***/ },

/***/ 492:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(496);
	var overlay = __webpack_require__(497);

	var subject = "",
	    source = "",
	    mode = "",
	    channelType = "",
	    channelName = "",
	    activityName = "",
	    joinType = "";
	var formwrap = ".overlayContent ";
	$('.intercept').on('click', function () {
	  $('.overlayContent').show();
	  $('.layer-bg').show();
	  subject = $(this).attr('data-subject');
	  source = $(this).attr('data-source');
	  mode = $(this).attr('data-mode');
	  channelType = $(this).attr('data-channelType');
	  channelName = $(this).attr('data-channelName');
	  activityName = $(this).attr('data-activityName');
	  joinType = $(this).attr('data-joinType');
	  var title = $(this).attr('data-title');
	  var littletitle = $(this).attr('data-littletitle');
	  $('.overlayContent .step1 .title').html(title);
	  $('.overlayContent .step1 .littleTitle').html(littletitle);

	  //科目为留学
	  if (subject == "留学") {
	    $(formwrap + "#subjectwrap," + formwrap + "#subjectwrap+.subjectWarn").show();
	  }
	});

	/*隐藏浮层*/
	$('body').on('click', '.close_btn', function () {
	  $('.overlayContent').hide();
	  $('.layer-bg').hide();
	  $(formwrap + "#subjectwrap," + formwrap + "#subjectwrap+.subjectWarn").hide();
	});
	$('body').on('click', '.layer-bg', function () {
	  $('.overlayContent').hide();
	  $('.layer-bg').hide();
	  $(formwrap + "#subjectwrap," + formwrap + "#subjectwrap+.subjectWarn").hide();
	});
	/*注册按钮点击*/
	$('body').on('click', '.regBtn', function () {
	  var inputsubject;
	  var tel = $.trim($(formwrap + '.phone').val());
	  var yzm = $.trim($(formwrap + '.VeriCode').val());
	  var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	  $(formwrap + '.warnTips').css('visibility', 'hidden');

	  if (subject == "留学") {
	    inputsubject = $.trim($(formwrap + '#subject').val());
	    if (inputsubject == '' || inputsubject == null) {
	      $(formwrap + '.subjectWarn').html('请选择考试').css('visibility', 'visible');
	      return false;
	    }
	  }
	  if (tel == '' || tel == null) {
	    $(formwrap + '.phoneWarn').html('请输入手机号码').css('visibility', 'visible');
	    return false;
	  }
	  if (telReg == true) {
	    $(formwrap + '.phoneWarn').html('请输入正确手机号码').css('visibility', 'visible');
	    return false;
	  }
	  if (yzm == '' || yzm == null) {
	    $(formwrap + '.VeriCodeWarn').html('请输入验证码').css('visibility', 'visible');
	    $(formwrap + '.phoneWarn').css('visibility', 'hidden');
	    return false;
	  }
	  //调接口
	  $.ajax({
	    url: '/ajax/userform/save',
	    data: { 'mobile': tel,
	      'code': yzm,
	      'subject': subject != "留学" ? subject : inputsubject,
	      'source': source,
	      'mode': mode,
	      'channel_type': channelType,
	      'channel_name': channelName,
	      'activity_name': activityName,
	      'join_type': joinType
	    },
	    type: "post",
	    dataType: "json",
	    success: function success(data) {
	      if (data.status != 1) {
	        $(formwrap + '.VeriCodeWarn').html('验证码错误').css('visibility', 'visible');
	        return false;
	      } else {
	        $(formwrap + '#imgUrl').attr('src', data.url);
	        $(formwrap + '#wechat').text(data.wechat);
	        $(formwrap + '.warnTips').css('visibility', 'hidden');
	        $(formwrap + '.step1').hide();
	        $(formwrap + '.step2').show();
	      }
	    }
	  });
	});

	/*发送验证码按钮点击*/
	$('body').on('click', formwrap + '#sendVeriCode', function () {
	  var tel = $.trim($(formwrap + '.phone').val());
	  var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	  if (tel == null || tel == '') {
	    $(formwrap + '.phoneWarn').html('请输入手机号码').css('visibility', 'visible');
	    return false;
	  }
	  if (telReg == true) {
	    $(formwrap + '.phoneWarn').html('请输入正确手机号码').css('visibility', 'visible');
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
	          $(formwrap + '.phoneWarn').css('visibility', 'hidden');
	          var callback = null;
	          var waitTimeInterval = 60;
	          $(formwrap + '.verify_code_btn').prop('disabled', true);
	          $(formwrap + '.verify_code_btn').val('重新发送验证码(' + waitTimeInterval + '秒)');
	          var time = waitTimeInterval;
	          var verifyTimer = null;
	          clearTimeout(verifyTimer);
	          (function startSendVeriCodeTimer() {
	            verifyTimer = setTimeout(function () {
	              time--;
	              $(formwrap + '.verify_code_btn').val('重新发送验证码(' + ('0' + time).slice(-2) + '秒)');
	              if (time > 0) {
	                startSendVeriCodeTimer();
	              } else {
	                $(formwrap + '.verify_code_btn').prop('disabled', false);
	                $(formwrap + 'verify_code_btn').val('重新发送验证码');
	                time = waitTimeInterval;
	                if ($.isFunction(callback)) {
	                  callback($(formwrap + '.verify_code_btn'));
	                }
	              }
	            }, 1000);
	          })();
	        }
	      }
	    });
	  }
	});

	$(function () {
	  overlay();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)))

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	$('body').append('<div class="layer-bg">\n  </div>\n  <div class="overlayContent">\n    <div class="close_btn">\xD7</div>\n    <div class="step1">\n      <div class="title">\n        \u9A8C\u8BC1\u624B\u673A\uFF0C\u83B7\u53D6\u8001\u5E08\u4E2A\u4EBA\u5FAE\u4FE1\u4E8C\u7EF4\u7801\n      </div>\n      <div class="littleTitle">\u9A8C\u8BC1\u624B\u673A\uFF0C\u83B7\u5F97\u72EC\u5BB6\u5907\u8003\u8D44\u6599\u4E0B\u8F7D\u6743\u9650</div>\n\n      <div class="regItem" id="subjectwrap">\n          <select class="subject" id="subject">\n            <option value=\'\'>\u8BF7\u9009\u62E9\u8003\u8BD5</option>\n            <option value=\'toefl\'>\u6258\u798F</option>\n            <option value=\'ielts\'>\u96C5\u601D</option>\n            <option value=\'sat\'>SAT</option>\n            <option value=\'act\'>ACT</option>\n            <option value=\'gre\'>GRE</option>\n            <option value=\'gmat\'>GMAT</option>\n            <option value=\'sat2\'>SAT2</option>\n            <option value=\'ssat\'>SSAT</option>\n            <option value=\'ap\'>AP</option>\n            <option value=\'ib\'>IB</option>\n            <option value=\'a-level\'>A-LEVEL</option>\n          </select>\n      </div>\n      <div class="warnTips subjectWarn"></div>\n\n      <div class="regItem">\n          <span class="icon-tel"></span>\n          <input type="tel" class="phone" id="iphone" placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801">\n      </div>\n      <div class="warnTips phoneWarn"></div>\n      <div class="regItem">\n          <span class="icon-massage"></span>\n          <input type="tel" maxlength="6" class="VeriCode left" id="VeriCode" placeholder="\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801">\n          <input type="button" value="\u53D1\u9001\u9A8C\u8BC1\u7801" id="sendVeriCode" class="verify_code_btn left">\n          <div class="clear"></div> \n      </div>\n      <div class="warnTips VeriCodeWarn"></div>\n      <div class="regItem">\n        <input class="regBtn" type="button" value="\u63D0\u4EA4">\n      </div>\n    </div>\n    <div class="step2">\n      <div class="title">\n        \u626B\u4E00\u626B\u6DFB\u52A0\u8001\u5E08\u4E2A\u4EBA\u5FAE\u4FE1<br/>\n        <span>\u5C31\u53EF\u4EE5\u548C\u8001\u5E08\u5BF9\u8BDD\u5566</span>\n      </div>\n      <img src=\'\' id="imgUrl">\n      <div class="tips">\n        \u6216\u76F4\u63A5\u641C\u7D22\u8001\u5E08\u7684\u5FAE\u4FE1ID\uFF1A<span id="wechat">bella5203</span>\u6DFB\u52A0\n      </div>\n    </div>\n  </div>');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)))

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	module.exports = function overlay(options) {
	  var params = {
	    "send_sms_code": "/ajax/userform/send_sms_code",
	    "userform_save": "/ajax/userform/save"
	  };

	  if (options) {
	    params = $.extend({}, params, options);
	  }
	  var subject = "",
	      source = "",
	      mode = "",
	      channelType = "",
	      channelName = "",
	      activityName = "",
	      joinType = "";
	  var formwrap = ".overlayContent ";
	  $('.intercept').on('click', function () {
	    $('.overlayContent').show();
	    $('.layer-bg').show();
	    subject = $(this).attr('data-subject');
	    source = $(this).attr('data-source');
	    mode = $(this).attr('data-mode');
	    channelType = $(this).attr('data-channelType');
	    channelName = $(this).attr('data-channelName');
	    activityName = $(this).attr('data-activityName');
	    joinType = $(this).attr('data-joinType');
	    var title = $(this).attr('data-title');
	    var littletitle = $(this).attr('data-littletitle');
	    $('.overlayContent .step1 .title').html(title);
	    $('.overlayContent .step1 .littleTitle').html(littletitle);

	    //科目为留学
	    if (subject == "留学") {
	      $(formwrap + "#subjectwrap," + formwrap + "#subjectwrap+.subjectWarn").show();
	    }
	  });

	  /*隐藏浮层*/
	  $('body').on('click', '.close_btn', function () {
	    $('.overlayContent').hide();
	    $('.layer-bg').hide();
	    $(formwrap + "#subjectwrap," + formwrap + "#subjectwrap+.subjectWarn").hide();
	  });
	  $('body').on('click', '.layer-bg', function () {
	    $('.overlayContent').hide();
	    $('.layer-bg').hide();
	    $(formwrap + "#subjectwrap," + formwrap + "#subjectwrap+.subjectWarn").hide();
	  });
	  /*注册按钮点击*/
	  $('body').on('click', '.regBtn', function () {
	    var inputsubject;
	    var tel = $.trim($(formwrap + '.phone').val());
	    var yzm = $.trim($(formwrap + '.VeriCode').val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    $(formwrap + '.warnTips').css('visibility', 'hidden');

	    if (subject == "留学") {
	      inputsubject = $.trim($(formwrap + '#subject').val());
	      if (inputsubject == '' || inputsubject == null) {
	        $(formwrap + '.subjectWarn').html('请选择考试').css('visibility', 'visible');
	        return false;
	      }
	    }
	    if (tel == '' || tel == null) {
	      $(formwrap + '.phoneWarn').html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $(formwrap + '.phoneWarn').html('请输入正确手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (yzm == '' || yzm == null) {
	      $(formwrap + '.VeriCodeWarn').html('请输入验证码').css('visibility', 'visible');
	      $(formwrap + '.phoneWarn').css('visibility', 'hidden');
	      return false;
	    }
	    //调接口
	    $.ajax({
	      url: params.userform_save,
	      data: { 'mobile': tel,
	        'code': yzm,
	        'subject': subject != "留学" ? subject : inputsubject,
	        'source': source,
	        'mode': mode,
	        'channel_type': channelType,
	        'channel_name': channelName,
	        'activity_name': activityName,
	        'join_type': joinType
	      },
	      type: "post",
	      dataType: "json",
	      success: function success(data) {
	        if (data.status != 1) {
	          $(formwrap + '.VeriCodeWarn').html('验证码错误').css('visibility', 'visible');
	          return false;
	        } else {
	          $(formwrap + '#imgUrl').attr('src', data.url);
	          $(formwrap + '#wechat').text(data.wechat);
	          $(formwrap + '.warnTips').css('visibility', 'hidden');
	          $(formwrap + '.step1').hide();
	          $(formwrap + '.step2').show();
	        }
	      }
	    });
	  });

	  /*发送验证码按钮点击*/
	  $('body').on('click', formwrap + '#sendVeriCode', function () {
	    var tel = $.trim($(formwrap + '.phone').val());
	    var telReg = !tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
	    if (tel == null || tel == '') {
	      $(formwrap + '.phoneWarn').html('请输入手机号码').css('visibility', 'visible');
	      return false;
	    }
	    if (telReg == true) {
	      $(formwrap + '.phoneWarn').html('请输入正确手机号码').css('visibility', 'visible');
	      return false;
	    } else {
	      $.ajax({
	        //url: '../static/jsontest/overlay.json',
	        url: params.send_sms_code,
	        data: { 'mobile': tel },
	        type: "post",
	        dataType: "json",
	        success: function success(data) {
	          if (data.status == 1) {
	            $(formwrap + '.phoneWarn').css('visibility', 'hidden');
	            var callback = null;
	            var waitTimeInterval = 60;
	            $(formwrap + '.verify_code_btn').prop('disabled', true);
	            $(formwrap + '.verify_code_btn').val('重新发送验证码(' + waitTimeInterval + '秒)');
	            var time = waitTimeInterval;
	            var verifyTimer = null;
	            clearTimeout(verifyTimer);
	            (function startSendVeriCodeTimer() {
	              verifyTimer = setTimeout(function () {
	                time--;
	                $(formwrap + '.verify_code_btn').val('重新发送验证码(' + ('0' + time).slice(-2) + '秒)');
	                if (time > 0) {
	                  startSendVeriCodeTimer();
	                } else {
	                  $(formwrap + '.verify_code_btn').prop('disabled', false);
	                  $(formwrap + 'verify_code_btn').val('重新发送验证码');
	                  time = waitTimeInterval;
	                  if ($.isFunction(callback)) {
	                    callback($(formwrap + '.verify_code_btn'));
	                  }
	                }
	              }, 1000);
	            })();
	          }
	        }
	      });
	    }
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)))

/***/ }

});