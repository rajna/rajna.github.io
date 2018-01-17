webpackJsonp([20],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(443);


/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(247);
	__webpack_require__(253);
	__webpack_require__(444);

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

		var h1 = $('.nav-content').height();
		var h2 = $('.partbanner').height();
		if ($(window).scrollTop() > h1 + h2) {
			$('.nav-content').css({ 'position': 'fixed', 'top': '0px', 'left': '0px', 'right': '0px' });
		} else {
			$('.nav-content').css({ 'position': 'relative' });
		}

		$(window).scroll(function (e) {
			var scrollTop = $(this).scrollTop();
			var h1 = $('.nav-content').height();
			var h2 = $('.partbanner').height();
			if ($(window).scrollTop() > h1 + h2) {
				$('.nav-content').css({ 'position': 'fixed', 'top': '0px', 'left': '0px', 'right': '0px', 'z-index': '99' });
			} else {
				$('.nav-content').css({ 'position': 'relative' });
			}

			if (scrollTop > 600) {
				$(".partside").show();
			} else {
				$(".partside").hide();
			}
		});

		$(".backtop").on("click", function () {
			$("html,body").animate({ scrollTop: $("#wrapper").offset().top }, 600);
		});

		$('.nav-content li.nav').click(function (event) {
			var id = $(this).attr('data-id');
			$("html,body").animate({ scrollTop: $(".part" + id).offset().top }, 600);
		});

		$('.showzhenti').click(function (event) {
			var title = $(this).attr('data-title');
			var text = $(this).attr('data-text');
			var id = $(this).attr('data-id');
			$('.newsatoverlay .overlay-title span').text(title);
			$('.newsatoverlay .content-title').text(text);
			$('.newsatoverlay .overlay-content .list').hide();
			$('.newsatoverlay .overlay-content .list' + id).show();
			$('.newsatoverlay').show();
			$('.layer-bg').show();
		});

		/*隐藏浮层*/
		$('body').on('click', '.close_btn', function () {
			$('.newsatoverlay').hide();
			$('.layer-bg').hide();
		});
		$('body').on('click', '.layer-bg', function () {
			$('.newsatoverlay').hide();
			$('.layer-bg').hide();
		});
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ },

/***/ 444:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});