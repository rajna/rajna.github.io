webpackJsonp([21],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(449);


/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(247);
	__webpack_require__(253);
	__webpack_require__(450);

	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(335);
	__webpack_require__(338);

	$(function () {

		$(".part4slide").flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 212,
			controlNav: false,
			directionNav: true,
			itemMargin: 5,
			slideshow: false,
			minItems: 2,
			maxItems: 4
		});

		var reg = {
			phone: /^0?1[3|4|5|7|8][0-9]\d{8}$/,
			code: /^\d+$/
		};

		$('.sanli2017-form1button').click(function () {
			var number = document.getElementById("number").value;
			var name = document.getElementById("name").value;
			var tel = document.getElementById("tel").value;
			var msg = null;

			if (!reg.code.test(number)) {
				msg = "请输入参加人数";
			}

			if (!reg.phone.test(tel)) {
				msg = "请输入有效的手机号码";
			}

			if (name == '') {
				msg = "请输入您的姓名";
			}

			if (msg) {
				alert(msg);
			} else {
				$.ajax({
					url: 'http://www.sljy.com/ajax/userform/save',
					//url: '../static/jsontest/overlay.json',
					data: {
						'number': number,
						'name': name,
						'tel': tel
					},
					type: "post",
					dataType: "json",
					success: function success(data) {}
				});
			}
		});

		$('.sanli2017-form2button').click(function () {
			var name2 = document.getElementById("name2").value;
			var tel2 = document.getElementById("tel2").value;
			var msg = null;

			if (!reg.phone.test(tel2)) {
				msg = "请输入有效的手机号码";
			}

			if (name2 == '') {
				msg = "请输入您的姓名";
			}

			if (msg) {
				alert(msg);
			} else {
				$.ajax({
					url: 'http://www.sljy.com/ajax/userform/save',
					//url: '../static/jsontest/overlay.json',
					data: {
						'name': name2,
						'tel': tel2
					},
					type: "post",
					dataType: "json",
					success: function success(data) {}
				});
			}
		});

		$('.sanli2017-form3button').click(function () {
			var number = document.getElementById("number3").value;
			var name = document.getElementById("name3").value;
			var tel = document.getElementById("tel3").value;
			var msg = null;

			if (!reg.code.test(number)) {
				msg = "请输入参加人数";
			}

			if (!reg.phone.test(tel)) {
				msg = "请输入有效的手机号码";
			}

			if (name == '') {
				msg = "请输入您的姓名";
			}

			if (msg) {
				alert(msg);
			} else {
				$.ajax({
					url: 'http://www.sljy.com/ajax/userform/save',
					//url: '../static/jsontest/overlay.json',
					data: {
						'number': number,
						'name': name,
						'tel': tel
					},
					type: "post",
					dataType: "json",
					success: function success(data) {}
				});
			}
		});
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ },

/***/ 450:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});