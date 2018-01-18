webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(362);


/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	__webpack_require__(250);
	__webpack_require__(256);

	__webpack_require__(363);

	__webpack_require__(364);

	$(function () {
	  var imageflow = __webpack_require__(365);
	  var instanceOne = new imageflow();
	  instanceOne.init({ ImageFlowID: 'starsIF',
	    captions: false,
	    slider: false,
	    startID: 1
	  });

	  $("#item1").css("display", "block");

	  $("#starsIF").click(function () {

	    var id = "#item" + (instanceOne.imageID - 1);
	    if (instanceOne.imageID - 1 == 5 || instanceOne.imageID - 1 == -1) {
	      id = "#item2";
	    }
	    $('.worditem').css("display", "none");
	    $(id).css("display", "block");
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)))

/***/ },

/***/ 363:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 364:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});