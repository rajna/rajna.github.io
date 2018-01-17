webpackJsonp([13],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(391);


/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(247);
	__webpack_require__(253);
	__webpack_require__(392);

	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(389);
	__webpack_require__(390);

	$(function () {
	  var imageflow = __webpack_require__(362);
	  $(".part5-slide").flexslider({
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
	  //
	  // $(".part8-slide").flexslider({
	  //   slideshowSpeed: 3000, //展示时间间隔ms
	  //   animationSpeed: 400, //滚动时间ms
	  //   animation:"slide",
	  //   animationLoop: true,
	  //   slideshow: false,
	  //   slideToStart: 0,
	  //   directionNav:true
	  // });

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

	  var instanceOne = new imageflow();
	  instanceOne.init({ ImageFlowID: 'starsIF',
	    captions: false,
	    slider: false,
	    startID: 1
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ },

/***/ 392:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});