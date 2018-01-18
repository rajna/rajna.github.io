webpackJsonp([16],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(423);


/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(250);
	__webpack_require__(256);
	__webpack_require__(424);

	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(392);
	__webpack_require__(393);

	$(function () {

	  $(".part1-slider").flexslider({
	    animation: "slide",
	    itemWidth: 250,
	    itemMargin: 5,
	    animationLoop: true,
	    slideshow: true,
	    slideToStart: 0,
	    directionNav: false,
	    controlNav: false
	  });

	  $('.part4 .smalltext').hover(function () {
	    var id = $(this).attr('data-id');
	    var title = $(this).attr('data-title');
	    var text = $(this).attr('data-text');
	    $('.part4 .bigtext').hide();
	    $('.part4 .smalltext').show();
	    $(this).parents('.textitem').find('.bigtext').show();
	    $(this).hide();
	    $('.linecontent img').hide();
	    $('.linecontent .line' + id).show();
	    $('.part4 .rightpart .right_img img').hide();
	    $('.part4 .rightpart .right_img .img' + id).show();
	    $('.part4 .rightpart .left .titletext').html(title);
	    $('.part4 .rightpart .left .desctext').html(text);
	  });

	  $('.part6 .rightpart .icon').hover(function () {
	    var text = $(this).attr('data-text');
	    $('.part6 .rightpart .icon').removeClass('current');
	    $(this).addClass('current');
	    $('.part6 .leftpart').html(text);
	  });

	  $('.part7 .hovername span').hover(function () {
	    var text = $(this).attr('data-text');
	    var id = $(this).attr('data-id');
	    $('.teacher img').hide();
	    $('.teacher .teacher' + id).show();
	    $('.part7 .hovername span').removeClass('current');
	    $(this).addClass('current');
	    $('.part7 .text').html(text);
	  });

	  $(".imgslider").flexslider({
	    slideshowSpeed: 3000, //展示时间间隔ms
	    animationSpeed: 400, //滚动时间ms
	    animation: "slide",
	    animationLoop: true,
	    slideshow: false,
	    slideToStart: 0,
	    controlNav: false,
	    directionNav: true
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

	  $(".backtop").on("click", function () {
	    $("html,body").animate({ scrollTop: $("#wrapper").offset().top }, 600);
	  });

	  $('.luodipagenav li').click(function (event) {
	    var id = $(this).attr('data-item');
	    $("html,body").animate({ scrollTop: $(".part" + id).offset().top }, 600);
	  });

	  $(".imgslider_bigger img").hide();

	  $(".imgslider ul li img").click(function (e) {
	    var num = $(this).attr("data-img");
	    e.stopPropagation();
	    $(".imgslider_bigger").find(".img" + num).show();
	  });

	  $("body,html").click(function () {
	    $(".imgslider_bigger img").hide();
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)))

/***/ },

/***/ 424:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});