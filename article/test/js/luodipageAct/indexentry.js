webpackJsonp([12],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(376);


/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(247);
	__webpack_require__(253);
	__webpack_require__(377);

	__webpack_require__(387);
	var Swiper = __webpack_require__(388);
	__webpack_require__(389);
	__webpack_require__(390);

	$(function () {

	  $(".part3 .method .rows").on("mouseover", function () {
	    $(this).find(".img_hover").show();
	  });
	  $(".part3 .method .rows").on("mouseout", function () {
	    $(this).find(".img_hover").hide();
	  });

	  var viewSwiper = new Swiper('.view .swiper-container', {
	    paginationClickable: true,
	    direction: 'horizontal',
	    onSlideChangeStart: function onSlideChangeStart() {
	      updateNavPosition();
	    }
	  });

	  $('.preview .arrow-left').on('click', function (e) {
	    e.preventDefault();
	    if (viewSwiper.activeIndex == 0) {
	      viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
	      return;
	    }
	    viewSwiper.swipePrev();
	  });
	  $('.preview .arrow-right').on('click', function (e) {
	    e.preventDefault();
	    if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
	      viewSwiper.swipeTo(0, 1000);
	      return;
	    }
	    viewSwiper.swipeNext();
	  });

	  var previewSwiper = new Swiper('.preview .swiper-container', {
	    visibilityFullFit: true,
	    slidesPerView: 'auto',
	    onlyExternal: true,
	    onSlideClick: function onSlideClick() {
	      viewSwiper.swipeTo(previewSwiper.clickedSlideIndex);
	    }
	  });

	  function updateNavPosition() {
	    $('.preview .active-nav').removeClass('active-nav');
	    var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav');
	    if (!activeNav.hasClass('swiper-slide-visible')) {
	      if (activeNav.index() > previewSwiper.activeIndex) {
	        var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1;
	        previewSwiper.swipeTo(activeNav.index() - thumbsPerNav);
	      } else {
	        previewSwiper.swipeTo(activeNav.index());
	      }
	    }
	  }

	  $('.part7 .hovername span').hover(function () {
	    var text = $(this).attr('data-text');
	    var id = $(this).attr('data-id');
	    $('.teacher img').hide();
	    $('.teacher .teacher' + id).show();
	    $('.part7 .hovername span').removeClass('current');
	    $(this).addClass('current');
	    $('.part7 .text').html(text);
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

/***/ 377:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});