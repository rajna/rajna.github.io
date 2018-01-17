/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		41:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "js/" + ({"0":"act-app-luodipage/index","1":"act-mokao-luodipage/index","2":"act-mokaoshizhan/index","3":"act-pubianlianxi/index","4":"act-zhenduilianxi/index","5":"ap-meigao-luodipage/index","6":"ap-mokao-luodipage/index","7":"gre-app-luodipage/index","8":"harvard-activity-versiontwopage/index","9":"harvard-activitypage/index","10":"ielts-Test-luodipage/index","11":"ielts-app-luodipage/index","12":"luodipageAct/index","13":"luodipageIelts/index","14":"luodipageSat-inner/index","15":"luodipageSat/index","16":"luodipageSat2/index","17":"luodipageToefl-inner/index","18":"luodipageToefl/index","19":"luodipageToeflData/index","20":"newsat-Test-luodipage/index","21":"sanli-2017page/index","22":"sat-Test-luodipage/index","23":"sat-app-luodipage/index","24":"sat-mokao-luodipage/index","25":"sat-mokaoshizhan/index","26":"sat-pubianlianxi/index","27":"sat-zhenduilianxi/index","28":"tiku-mokao-luodipage/index","29":"toefl-Test-luodipage/index","30":"toefl-app-luodipage/index","31":"toefl-download-page/index","32":"toefl-mokao-luodipage/index","33":"toefl-mokaoshizhan/index","34":"toefl-zonghelianxi/index","35":"toeflkaobei-app-luodipage/index","36":"zhuanti-toefl-clue/index","37":"zhuantiAp/index","38":"zhuantiIelts/index","39":"zhuantiSat/index","40":"zhuantiToefl/index"}[chunkId]||chunkId) + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/ })
/************************************************************************/
/******/ ({

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(246))(3);

/***/ },

/***/ 246:
/***/ function(module, exports) {

	module.exports = dll;

/***/ },

/***/ 247:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 253:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/img/6d36f055a7ceb117cb9f1395f750f2ff.png";

/***/ },

/***/ 260:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

	var _typeof2 = __webpack_require__(262);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _setImmediate2 = __webpack_require__(330);

	var _setImmediate3 = _interopRequireDefault(_setImmediate2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	 * jQuery FlexSlider v2.2.2
	 * Copyright 2012 WooThemes
	 * Contributing Author: Tyler Smith
	 */
	(function (e) {
	    e.flexslider = function (t, n) {
	        var r = e(t);
	        r.vars = e.extend({}, e.flexslider.defaults, n);
	        var i = r.vars.namespace,
	            s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
	            o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
	            u = "click touchend MSPointerUp",
	            a = "",
	            f,
	            l = r.vars.direction === "vertical",
	            c = r.vars.reverse,
	            h = r.vars.itemWidth > 0,
	            p = r.vars.animation === "fade",
	            d = r.vars.asNavFor !== "",
	            v = {},
	            m = !0;
	        e.data(t, "flexslider", r);
	        v = {
	            init: function init() {
	                r.animating = !1;
	                r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10);
	                isNaN(r.currentSlide) && (r.currentSlide = 0);
	                r.animatingTo = r.currentSlide;
	                r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
	                r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
	                r.slides = e(r.vars.selector, r);
	                r.container = e(r.containerSelector, r);
	                r.count = r.slides.length;
	                r.syncExists = e(r.vars.sync).length > 0;
	                r.vars.animation === "slide" && (r.vars.animation = "swing");
	                r.prop = l ? "top" : "marginLeft";
	                r.args = {};
	                r.manualPause = !1;
	                r.stopped = !1;
	                r.started = !1;
	                r.startTimeout = null;
	                r.transitions = !r.vars.video && !p && r.vars.useCSS && function () {
	                    var e = document.createElement("div"),
	                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
	                    for (var n in t) {
	                        if (e.style[t[n]] !== undefined) {
	                            r.pfx = t[n].replace("Perspective", "").toLowerCase();
	                            r.prop = "-" + r.pfx + "-transform";
	                            return !0;
	                        }
	                    }return !1;
	                }();
	                r.vars.controlsContainer !== "" && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer));
	                r.vars.manualControls !== "" && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls));
	                if (r.vars.randomize) {
	                    r.slides.sort(function () {
	                        return Math.round(Math.random()) - .5;
	                    });
	                    r.container.empty().append(r.slides);
	                }
	                r.doMath();
	                r.setup("init");
	                r.vars.controlNav && v.controlNav.setup();
	                r.vars.directionNav && v.directionNav.setup();
	                r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard) && e(document).bind("keyup", function (e) {
	                    var t = e.keyCode;
	                    if (!r.animating && (t === 39 || t === 37)) {
	                        var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1;
	                        r.flexAnimate(n, r.vars.pauseOnAction);
	                    }
	                });
	                r.vars.mousewheel && r.bind("mousewheel", function (e, t, n, i) {
	                    e.preventDefault();
	                    var s = t < 0 ? r.getTarget("next") : r.getTarget("prev");
	                    r.flexAnimate(s, r.vars.pauseOnAction);
	                });
	                r.vars.pausePlay && v.pausePlay.setup();
	                r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init();
	                if (r.vars.slideshow) {
	                    r.vars.pauseOnHover && r.hover(function () {
	                        !r.manualPlay && !r.manualPause && r.pause();
	                    }, function () {
	                        !r.manualPause && !r.manualPlay && !r.stopped && r.play();
	                    });
	                    if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play();
	                }
	                d && v.asNav.setup();
	                o && r.vars.touch && v.touch();
	                (!p || p && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize);
	                r.find("img").attr("draggable", "false");
	                setTimeout(function () {
	                    r.vars.start(r);
	                }, 200);
	            },
	            asNav: {
	                setup: function setup() {
	                    r.asNav = !0;
	                    r.animatingTo = Math.floor(r.currentSlide / r.move);
	                    r.currentItem = r.currentSlide;
	                    r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide");
	                    if (!s) r.slides.on(u, function (t) {
	                        t.preventDefault();
	                        var n = e(this),
	                            s = n.index(),
	                            o = n.offset().left - e(r).scrollLeft();
	                        if (o <= 0 && n.hasClass(i + "active-slide")) r.flexAnimate(r.getTarget("prev"), !0);else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) {
	                            r.direction = r.currentItem < s ? "next" : "prev";
	                            r.flexAnimate(s, r.vars.pauseOnAction, !1, !0, !0);
	                        }
	                    });else {
	                        t._slider = r;
	                        r.slides.each(function () {
	                            var t = this;
	                            t._gesture = new MSGesture();
	                            t._gesture.target = t;
	                            t.addEventListener("MSPointerDown", function (e) {
	                                e.preventDefault();
	                                e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId);
	                            }, !1);
	                            t.addEventListener("MSGestureTap", function (t) {
	                                t.preventDefault();
	                                var n = e(this),
	                                    i = n.index();
	                                if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
	                                    r.direction = r.currentItem < i ? "next" : "prev";
	                                    r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0);
	                                }
	                            });
	                        });
	                    }
	                }
	            },
	            controlNav: {
	                setup: function setup() {
	                    r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging();
	                },
	                setupPaging: function setupPaging() {
	                    var t = r.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
	                        n = 1,
	                        s,
	                        o;
	                    r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>');
	                    if (r.pagingCount > 1) for (var f = 0; f < r.pagingCount; f++) {
	                        o = r.slides.eq(f);
	                        s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + n + "</a>";
	                        if ("thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
	                            var l = o.attr("data-thumbcaption");
	                            "" != l && undefined != l && (s += '<span class="' + i + 'caption">' + l + "</span>");
	                        }
	                        r.controlNavScaffold.append("<li>" + s + "</li>");
	                        n++;
	                    }
	                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
	                    v.controlNav.set();
	                    v.controlNav.active();
	                    r.controlNavScaffold.delegate("a, img", u, function (t) {
	                        t.preventDefault();
	                        if (a === "" || a === t.type) {
	                            var n = e(this),
	                                s = r.controlNav.index(n);
	                            if (!n.hasClass(i + "active")) {
	                                r.direction = s > r.currentSlide ? "next" : "prev";
	                                r.flexAnimate(s, r.vars.pauseOnAction);
	                            }
	                        }
	                        a === "" && (a = t.type);
	                        v.setToClearWatchedEvent();
	                    });
	                },
	                setupManual: function setupManual() {
	                    r.controlNav = r.manualControls;
	                    v.controlNav.active();
	                    r.controlNav.bind(u, function (t) {
	                        t.preventDefault();
	                        if (a === "" || a === t.type) {
	                            var n = e(this),
	                                s = r.controlNav.index(n);
	                            if (!n.hasClass(i + "active")) {
	                                s > r.currentSlide ? r.direction = "next" : r.direction = "prev";
	                                r.flexAnimate(s, r.vars.pauseOnAction);
	                            }
	                        }
	                        a === "" && (a = t.type);
	                        v.setToClearWatchedEvent();
	                    });
	                },
	                set: function set() {
	                    var t = r.vars.controlNav === "thumbnails" ? "img" : "a";
	                    r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r);
	                },
	                active: function active() {
	                    r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active");
	                },
	                update: function update(t, n) {
	                    r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
	                    v.controlNav.set();
	                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active();
	                }
	            },
	            directionNav: {
	                setup: function setup() {
	                    var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
	                    if (r.controlsContainer) {
	                        e(r.controlsContainer).append(t);
	                        r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer);
	                    } else {
	                        r.append(t);
	                        r.directionNav = e("." + i + "direction-nav li a", r);
	                    }
	                    v.directionNav.update();
	                    r.directionNav.bind(u, function (t) {
	                        t.preventDefault();
	                        var n;
	                        if (a === "" || a === t.type) {
	                            n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev");
	                            r.flexAnimate(n, r.vars.pauseOnAction);
	                        }
	                        a === "" && (a = t.type);
	                        v.setToClearWatchedEvent();
	                    });
	                },
	                update: function update() {
	                    var e = i + "disabled";
	                    r.pagingCount === 1 ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex");
	                }
	            },
	            pausePlay: {
	                setup: function setup() {
	                    var t = e('<div class="' + i + 'pauseplay"><a></a></div>');
	                    if (r.controlsContainer) {
	                        r.controlsContainer.append(t);
	                        r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer);
	                    } else {
	                        r.append(t);
	                        r.pausePlay = e("." + i + "pauseplay a", r);
	                    }
	                    v.pausePlay.update(r.vars.slideshow ? i + "pause" : i + "play");
	                    r.pausePlay.bind(u, function (t) {
	                        t.preventDefault();
	                        if (a === "" || a === t.type) if (e(this).hasClass(i + "pause")) {
	                            r.manualPause = !0;
	                            r.manualPlay = !1;
	                            r.pause();
	                        } else {
	                            r.manualPause = !1;
	                            r.manualPlay = !0;
	                            r.play();
	                        }
	                        a === "" && (a = t.type);
	                        v.setToClearWatchedEvent();
	                    });
	                },
	                update: function update(e) {
	                    e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText);
	                }
	            },
	            touch: function touch() {
	                var e,
	                    n,
	                    i,
	                    o,
	                    u,
	                    a,
	                    f = !1,
	                    d = 0,
	                    v = 0,
	                    m = 0;
	                if (!s) {
	                    var g = function g(s) {
	                        if (r.animating) s.preventDefault();else if (window.navigator.msPointerEnabled || s.touches.length === 1) {
	                            r.pause();
	                            o = l ? r.h : r.w;
	                            a = Number(new Date());
	                            d = s.touches[0].pageX;
	                            v = s.touches[0].pageY;
	                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
	                            e = l ? v : d;
	                            n = l ? d : v;
	                            t.addEventListener("touchmove", y, !1);
	                            t.addEventListener("touchend", b, !1);
	                        }
	                    };

	                    var y = function y(t) {
	                        d = t.touches[0].pageX;
	                        v = t.touches[0].pageY;
	                        u = l ? e - v : e - d;
	                        f = l ? Math.abs(u) < Math.abs(d - n) : Math.abs(u) < Math.abs(v - n);
	                        var s = 500;
	                        if (!f || Number(new Date()) - a > s) {
	                            t.preventDefault();
	                            if (!p && r.transitions) {
	                                r.vars.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1);
	                                r.setProps(i + u, "setTouch");
	                            }
	                        }
	                    };

	                    var b = function b(s) {
	                        t.removeEventListener("touchmove", y, !1);
	                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
	                            var l = c ? -u : u,
	                                h = l > 0 ? r.getTarget("next") : r.getTarget("prev");
	                            r.canAdvance(h) && (Number(new Date()) - a < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0);
	                        }
	                        t.removeEventListener("touchend", b, !1);
	                        e = null;
	                        n = null;
	                        u = null;
	                        i = null;
	                    };

	                    t.addEventListener("touchstart", g, !1);
	                } else {
	                    var w = function w(e) {
	                        e.stopPropagation();
	                        if (r.animating) e.preventDefault();else {
	                            r.pause();
	                            t._gesture.addPointer(e.pointerId);
	                            m = 0;
	                            o = l ? r.h : r.w;
	                            a = Number(new Date());
	                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
	                        }
	                    };

	                    var E = function E(e) {
	                        e.stopPropagation();
	                        var n = e.target._slider;
	                        if (!n) return;
	                        var r = -e.translationX,
	                            s = -e.translationY;
	                        m += l ? s : r;
	                        u = m;
	                        f = l ? Math.abs(m) < Math.abs(-r) : Math.abs(m) < Math.abs(-s);
	                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
	                            (0, _setImmediate3["default"])(function () {
	                                t._gesture.stop();
	                            });
	                            return;
	                        }
	                        if (!f || Number(new Date()) - a > 500) {
	                            e.preventDefault();
	                            if (!p && n.transitions) {
	                                n.vars.animationLoop || (u = m / (n.currentSlide === 0 && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / o + 2 : 1));
	                                n.setProps(i + u, "setTouch");
	                            }
	                        }
	                    };

	                    var S = function S(t) {
	                        t.stopPropagation();
	                        var r = t.target._slider;
	                        if (!r) return;
	                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
	                            var s = c ? -u : u,
	                                l = s > 0 ? r.getTarget("next") : r.getTarget("prev");
	                            r.canAdvance(l) && (Number(new Date()) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2) ? r.flexAnimate(l, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0);
	                        }
	                        e = null;
	                        n = null;
	                        u = null;
	                        i = null;
	                        m = 0;
	                    };

	                    t.style.msTouchAction = "none";
	                    t._gesture = new MSGesture();
	                    t._gesture.target = t;
	                    t.addEventListener("MSPointerDown", w, !1);
	                    t._slider = r;
	                    t.addEventListener("MSGestureChange", E, !1);
	                    t.addEventListener("MSGestureEnd", S, !1);
	                }
	            },
	            resize: function resize() {
	                if (!r.animating && r.is(":visible")) {
	                    h || r.doMath();
	                    if (p) v.smoothHeight();else if (h) {
	                        r.slides.width(r.computedW);
	                        r.update(r.pagingCount);
	                        r.setProps();
	                    } else if (l) {
	                        r.viewport.height(r.h);
	                        r.setProps(r.h, "setTotal");
	                    } else {
	                        r.vars.smoothHeight && v.smoothHeight();
	                        r.newSlides.width(r.computedW);
	                        r.setProps(r.computedW, "setTotal");
	                    }
	                }
	            },
	            smoothHeight: function smoothHeight(e) {
	                if (!l || p) {
	                    var t = p ? r : r.viewport;
	                    e ? t.animate({
	                        height: r.slides.eq(r.animatingTo).height()
	                    }, e) : t.height(r.slides.eq(r.animatingTo).height());
	                }
	            },
	            sync: function sync(t) {
	                var n = e(r.vars.sync).data("flexslider"),
	                    i = r.animatingTo;
	                switch (t) {
	                    case "animate":
	                        n.flexAnimate(i, r.vars.pauseOnAction, !1, !0);
	                        break;
	                    case "play":
	                        !n.playing && !n.asNav && n.play();
	                        break;
	                    case "pause":
	                        n.pause();
	                }
	            },
	            uniqueID: function uniqueID(t) {
	                t.find("[id]").each(function () {
	                    var t = e(this);
	                    t.attr("id", t.attr("id") + "_clone");
	                });
	                return t;
	            },
	            pauseInvisible: {
	                visProp: null,
	                init: function init() {
	                    var e = ["webkit", "moz", "ms", "o"];
	                    if ("hidden" in document) return "hidden";
	                    for (var t = 0; t < e.length; t++) {
	                        e[t] + "Hidden" in document && (v.pauseInvisible.visProp = e[t] + "Hidden");
	                    }if (v.pauseInvisible.visProp) {
	                        var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
	                        document.addEventListener(n, function () {
	                            v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play();
	                        });
	                    }
	                },
	                isHidden: function isHidden() {
	                    return document[v.pauseInvisible.visProp] || !1;
	                }
	            },
	            setToClearWatchedEvent: function setToClearWatchedEvent() {
	                clearTimeout(f);
	                f = setTimeout(function () {
	                    a = "";
	                }, 3e3);
	            }
	        };
	        r.flexAnimate = function (t, n, s, u, a) {
	            !r.vars.animationLoop && t !== r.currentSlide && (r.direction = t > r.currentSlide ? "next" : "prev");
	            d && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next" : "prev");
	            if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) {
	                if (d && u) {
	                    var f = e(r.vars.asNavFor).data("flexslider");
	                    r.atEnd = t === 0 || t === r.count - 1;
	                    f.flexAnimate(t, !0, !1, !0, a);
	                    r.direction = r.currentItem < t ? "next" : "prev";
	                    f.direction = r.direction;
	                    if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) {
	                        r.currentItem = t;
	                        r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
	                        return !1;
	                    }
	                    r.currentItem = t;
	                    r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
	                    t = Math.floor(t / r.visible);
	                }
	                r.animating = !0;
	                r.animatingTo = t;
	                n && r.pause();
	                r.vars.before(r);
	                r.syncExists && !a && v.sync("animate");
	                r.vars.controlNav && v.controlNav.active();
	                h || r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
	                r.atEnd = t === 0 || t === r.last;
	                r.vars.directionNav && v.directionNav.update();
	                if (t === r.last) {
	                    r.vars.end(r);
	                    r.vars.animationLoop || r.pause();
	                }
	                if (!p) {
	                    var m = l ? r.slides.filter(":first").height() : r.computedW,
	                        g,
	                        y,
	                        b;
	                    if (h) {
	                        g = r.vars.itemMargin;
	                        b = (r.itemW + g) * r.move * r.animatingTo;
	                        y = b > r.limit && r.visible !== 1 ? r.limit : b;
	                    } else r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next" ? y = c ? (r.count + r.cloneOffset) * m : 0 : r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev" ? y = c ? 0 : (r.count + 1) * m : y = c ? (r.count - 1 - t + r.cloneOffset) * m : (t + r.cloneOffset) * m;
	                    r.setProps(y, "", r.vars.animationSpeed);
	                    if (r.transitions) {
	                        if (!r.vars.animationLoop || !r.atEnd) {
	                            r.animating = !1;
	                            r.currentSlide = r.animatingTo;
	                        }
	                        r.container.unbind("webkitTransitionEnd transitionend");
	                        r.container.bind("webkitTransitionEnd transitionend", function () {
	                            r.wrapup(m);
	                        });
	                    } else r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function () {
	                        r.wrapup(m);
	                    });
	                } else if (!o) {
	                    r.slides.eq(r.currentSlide).css({
	                        zIndex: 1
	                    }).animate({
	                        opacity: 0
	                    }, r.vars.animationSpeed, r.vars.easing);
	                    r.slides.eq(t).css({
	                        zIndex: 2
	                    }).animate({
	                        opacity: 1
	                    }, r.vars.animationSpeed, r.vars.easing, r.wrapup);
	                } else {
	                    r.slides.eq(r.currentSlide).css({
	                        opacity: 0,
	                        zIndex: 1
	                    });
	                    r.slides.eq(t).css({
	                        opacity: 1,
	                        zIndex: 2
	                    });
	                    r.wrapup(m);
	                }
	                r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed);
	            }
	        };
	        r.wrapup = function (e) {
	            !p && !h && (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop && r.setProps(e, "jumpStart"));
	            r.animating = !1;
	            r.currentSlide = r.animatingTo;
	            r.vars.after(r);
	        };
	        r.animateSlides = function () {
	            !r.animating && m && r.flexAnimate(r.getTarget("next"));
	        };
	        r.pause = function () {
	            clearInterval(r.animatedSlides);
	            r.animatedSlides = null;
	            r.playing = !1;
	            r.vars.pausePlay && v.pausePlay.update("play");
	            r.syncExists && v.sync("pause");
	        };
	        r.play = function () {
	            r.playing && clearInterval(r.animatedSlides);
	            r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
	            r.started = r.playing = !0;
	            r.vars.pausePlay && v.pausePlay.update("pause");
	            r.syncExists && v.sync("play");
	        };
	        r.stop = function () {
	            r.pause();
	            r.stopped = !0;
	        };
	        r.canAdvance = function (e, t) {
	            var n = d ? r.pagingCount - 1 : r.last;
	            return t ? !0 : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !d ? !1 : r.vars.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0;
	        };
	        r.getTarget = function (e) {
	            r.direction = e;
	            return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last : r.currentSlide - 1;
	        };
	        r.setProps = function (e, t, n) {
	            var i = function () {
	                var n = e ? e : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
	                    i = function () {
	                    if (h) return t === "setTouch" ? e : c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n;
	                    switch (t) {
	                        case "setTotal":
	                            return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
	                        case "setTouch":
	                            return c ? e : e;
	                        case "jumpEnd":
	                            return c ? e : r.count * e;
	                        case "jumpStart":
	                            return c ? r.count * e : e;
	                        default:
	                            return e;
	                    }
	                }();
	                return i * -1 + "px";
	            }();
	            if (r.transitions) {
	                i = l ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)";
	                n = n !== undefined ? n / 1e3 + "s" : "0s";
	                r.container.css("-" + r.pfx + "-transition-duration", n);
	                r.container.css("transition-duration", n);
	            }
	            r.args[r.prop] = i;
	            (r.transitions || n === undefined) && r.container.css(r.args);
	            r.container.css("transform", i);
	        };
	        r.setup = function (t) {
	            if (!p) {
	                var n, s;
	                if (t === "init") {
	                    r.viewport = e('<div class="' + i + 'viewport"></div>').css({
	                        overflow: "hidden",
	                        position: "relative"
	                    }).appendTo(r).append(r.container);
	                    r.cloneCount = 0;
	                    r.cloneOffset = 0;
	                    if (c) {
	                        s = e.makeArray(r.slides).reverse();
	                        r.slides = e(s);
	                        r.container.empty().append(r.slides);
	                    }
	                }
	                if (r.vars.animationLoop && !h) {
	                    r.cloneCount = 2;
	                    r.cloneOffset = 1;
	                    t !== "init" && r.container.find(".clone").remove();
	                    r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true"));
	                    v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);
	                    v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container);
	                }
	                r.newSlides = e(r.vars.selector, r);
	                n = c ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
	                if (l && !h) {
	                    r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
	                    setTimeout(function () {
	                        r.newSlides.css({
	                            display: "block"
	                        });
	                        r.doMath();
	                        r.viewport.height(r.h);
	                        r.setProps(n * r.h, "init");
	                    }, t === "init" ? 100 : 0);
	                } else {
	                    r.container.width((r.count + r.cloneCount) * 200 + "%");
	                    r.setProps(n * r.computedW, "init");
	                    setTimeout(function () {
	                        r.doMath();
	                        r.newSlides.css({
	                            width: r.computedW,
	                            "float": "left",
	                            display: "block"
	                        });
	                        r.vars.smoothHeight && v.smoothHeight();
	                    }, t === "init" ? 100 : 0);
	                }
	            } else {
	                r.slides.css({
	                    width: "100%",
	                    "float": "left",
	                    marginRight: "-100%",
	                    position: "relative"
	                });
	                t === "init" && (o ? r.slides.css({
	                    opacity: 0,
	                    display: "block",
	                    webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
	                    zIndex: 1
	                }).eq(r.currentSlide).css({
	                    opacity: 1,
	                    zIndex: 2
	                }) : r.slides.css({
	                    opacity: 0,
	                    display: "block",
	                    zIndex: 1
	                }).eq(r.currentSlide).css({
	                    zIndex: 2
	                }).animate({
	                    opacity: 1
	                }, r.vars.animationSpeed, r.vars.easing));
	                r.vars.smoothHeight && v.smoothHeight();
	            }
	            h || r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide");
	            r.vars.init(r);
	        };
	        r.doMath = function () {
	            var e = r.slides.first(),
	                t = r.vars.itemMargin,
	                n = r.vars.minItems,
	                i = r.vars.maxItems;
	            r.w = r.viewport === undefined ? r.width() : r.viewport.width();
	            r.h = e.height();
	            r.boxPadding = e.outerWidth() - e.width();
	            if (h) {
	                r.itemT = r.vars.itemWidth + t;
	                r.minW = n ? n * r.itemT : r.w;
	                r.maxW = i ? i * r.itemT - t : r.w;
	                r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth;
	                r.visible = Math.floor(r.w / r.itemW);
	                r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible;
	                r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
	                r.last = r.pagingCount - 1;
	                r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t;
	            } else {
	                r.itemW = r.w;
	                r.pagingCount = r.count;
	                r.last = r.count - 1;
	            }
	            r.computedW = r.itemW - r.boxPadding;
	        };
	        r.update = function (e, t) {
	            r.doMath();
	            if (!h) {
	                e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1);
	                r.animatingTo = r.currentSlide;
	            }
	            if (r.vars.controlNav && !r.manualControls) if (t === "add" && !h || r.pagingCount > r.controlNav.length) v.controlNav.update("add");else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) {
	                if (h && r.currentSlide > r.last) {
	                    r.currentSlide -= 1;
	                    r.animatingTo -= 1;
	                }
	                v.controlNav.update("remove", r.last);
	            }
	            r.vars.directionNav && v.directionNav.update();
	        };
	        r.addSlide = function (t, n) {
	            var i = e(t);
	            r.count += 1;
	            r.last = r.count - 1;
	            l && c ? n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i);
	            r.update(n, "add");
	            r.slides = e(r.vars.selector + ":not(.clone)", r);
	            r.setup();
	            r.vars.added(r);
	        };
	        r.removeSlide = function (t) {
	            var n = isNaN(t) ? r.slides.index(e(t)) : t;
	            r.count -= 1;
	            r.last = r.count - 1;
	            isNaN(t) ? e(t, r.slides).remove() : l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
	            r.doMath();
	            r.update(n, "remove");
	            r.slides = e(r.vars.selector + ":not(.clone)", r);
	            r.setup();
	            r.vars.removed(r);
	        };
	        v.init();
	    };
	    var focused;
	    e(window).blur(function (e) {
	        focused = !1;
	    }).focus(function (e) {
	        focused = !0;
	    });
	    e.flexslider.defaults = {
	        namespace: "flex-",
	        selector: ".slides > li",
	        animation: "fade",
	        easing: "swing",
	        direction: "horizontal",
	        reverse: !1,
	        animationLoop: !0,
	        smoothHeight: !1,
	        startAt: 0,
	        slideshow: !0,
	        slideshowSpeed: 7e3,
	        animationSpeed: 600,
	        initDelay: 0,
	        randomize: !1,
	        thumbCaptions: !1,
	        pauseOnAction: !0,
	        pauseOnHover: !1,
	        pauseInvisible: !0,
	        useCSS: !0,
	        touch: !0,
	        video: !1,
	        controlNav: !0,
	        directionNav: !0,
	        prevText: "Previous",
	        nextText: "Next",
	        keyboard: !0,
	        multipleKeyboard: !1,
	        mousewheel: !1,
	        pausePlay: !1,
	        pauseText: "Pause",
	        playText: "Play",
	        controlsContainer: "",
	        manualControls: "",
	        sync: "",
	        asNavFor: "",
	        itemWidth: 0,
	        itemMargin: 0,
	        minItems: 1,
	        maxItems: 0,
	        move: 0,
	        allowOneSlide: !0,
	        start: function start() {},
	        before: function before() {},
	        after: function after() {},
	        end: function end() {},
	        added: function added() {},
	        removed: function removed() {},
	        init: function init() {}
	    };
	    e.fn.flexslider = function (t) {
	        t === undefined && (t = {});
	        if ((typeof t === "undefined" ? "undefined" : (0, _typeof3["default"])(t)) == "object") return this.each(function () {
	            var n = e(this),
	                r = t.selector ? t.selector : ".slides > li",
	                i = n.find(r);
	            if (i.length === 1 && t.allowOneSlide === !0 || i.length === 0) {
	                i.fadeIn(400);
	                t.start && t.start(n);
	            } else n.data("flexslider") === undefined && new e.flexslider(this, t);
	        });
	        var n = e(this).data("flexslider");
	        switch (t) {
	            case "play":
	                n.play();
	                break;
	            case "pause":
	                n.pause();
	                break;
	            case "stop":
	                n.stop();
	                break;
	            case "next":
	                n.flexAnimate(n.getTarget("next"), !0);
	                break;
	            case "prev":
	            case "previous":
	                n.flexAnimate(n.getTarget("prev"), !0);
	                break;
	            default:
	                typeof t == "number" && n.flexAnimate(t, !0);
	        }
	    };
	})(jQuery);
	(function (e) {
	    e.flexslider = function (t, n) {
	        var r = e(t);
	        r.vars = e.extend({}, e.flexslider.defaults, n);
	        var i = r.vars.namespace,
	            s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
	            o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
	            u = "click touchend MSPointerUp",
	            a = "",
	            f,
	            l = r.vars.direction === "vertical",
	            c = r.vars.reverse,
	            h = r.vars.itemWidth > 0,
	            p = r.vars.animation === "fade",
	            d = r.vars.asNavFor !== "",
	            v = {},
	            m = !0;
	        e.data(t, "flexslider", r);
	        v = {
	            init: function init() {
	                r.animating = !1;
	                r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10);
	                isNaN(r.currentSlide) && (r.currentSlide = 0);
	                r.animatingTo = r.currentSlide;
	                r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
	                r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
	                r.slides = e(r.vars.selector, r);
	                r.container = e(r.containerSelector, r);
	                r.count = r.slides.length;
	                r.syncExists = e(r.vars.sync).length > 0;
	                r.vars.animation === "slide" && (r.vars.animation = "swing");
	                r.prop = l ? "top" : "marginLeft";
	                r.args = {};
	                r.manualPause = !1;
	                r.stopped = !1;
	                r.started = !1;
	                r.startTimeout = null;
	                r.transitions = !r.vars.video && !p && r.vars.useCSS && function () {
	                    var e = document.createElement("div"),
	                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
	                    for (var n in t) {
	                        if (e.style[t[n]] !== undefined) {
	                            r.pfx = t[n].replace("Perspective", "").toLowerCase();
	                            r.prop = "-" + r.pfx + "-transform";
	                            return !0;
	                        }
	                    }return !1;
	                }();
	                r.vars.controlsContainer !== "" && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer));
	                r.vars.manualControls !== "" && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls));
	                if (r.vars.randomize) {
	                    r.slides.sort(function () {
	                        return Math.round(Math.random()) - .5;
	                    });
	                    r.container.empty().append(r.slides);
	                }
	                r.doMath();
	                r.setup("init");
	                r.vars.controlNav && v.controlNav.setup();
	                r.vars.directionNav && v.directionNav.setup();
	                r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard) && e(document).bind("keyup", function (e) {
	                    var t = e.keyCode;
	                    if (!r.animating && (t === 39 || t === 37)) {
	                        var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1;
	                        r.flexAnimate(n, r.vars.pauseOnAction);
	                    }
	                });
	                r.vars.mousewheel && r.bind("mousewheel", function (e, t, n, i) {
	                    e.preventDefault();
	                    var s = t < 0 ? r.getTarget("next") : r.getTarget("prev");
	                    r.flexAnimate(s, r.vars.pauseOnAction);
	                });
	                r.vars.pausePlay && v.pausePlay.setup();
	                r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init();
	                if (r.vars.slideshow) {
	                    r.vars.pauseOnHover && r.hover(function () {
	                        !r.manualPlay && !r.manualPause && r.pause();
	                    }, function () {
	                        !r.manualPause && !r.manualPlay && !r.stopped && r.play();
	                    });
	                    if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play();
	                }
	                d && v.asNav.setup();
	                o && r.vars.touch && v.touch();
	                (!p || p && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize);
	                r.find("img").attr("draggable", "false");
	                setTimeout(function () {
	                    r.vars.start(r);
	                }, 200);
	            },
	            asNav: {
	                setup: function setup() {
	                    r.asNav = !0;
	                    r.animatingTo = Math.floor(r.currentSlide / r.move);
	                    r.currentItem = r.currentSlide;
	                    r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide");
	                    if (!s) r.slides.on(u, function (t) {
	                        t.preventDefault();
	                        var n = e(this),
	                            s = n.index(),
	                            o = n.offset().left - e(r).scrollLeft();
	                        if (o <= 0 && n.hasClass(i + "active-slide")) r.flexAnimate(r.getTarget("prev"), !0);else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) {
	                            r.direction = r.currentItem < s ? "next" : "prev";
	                            r.flexAnimate(s, r.vars.pauseOnAction, !1, !0, !0);
	                        }
	                    });else {
	                        t._slider = r;
	                        r.slides.each(function () {
	                            var t = this;
	                            t._gesture = new MSGesture();
	                            t._gesture.target = t;
	                            t.addEventListener("MSPointerDown", function (e) {
	                                e.preventDefault();
	                                e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId);
	                            }, !1);
	                            t.addEventListener("MSGestureTap", function (t) {
	                                t.preventDefault();
	                                var n = e(this),
	                                    i = n.index();
	                                if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
	                                    r.direction = r.currentItem < i ? "next" : "prev";
	                                    r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0);
	                                }
	                            });
	                        });
	                    }
	                }
	            },
	            controlNav: {
	                setup: function setup() {
	                    r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging();
	                },
	                setupPaging: function setupPaging() {
	                    var t = r.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
	                        n = 1,
	                        s,
	                        o;
	                    r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>');
	                    if (r.pagingCount > 1) for (var f = 0; f < r.pagingCount; f++) {
	                        o = r.slides.eq(f);
	                        s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + n + "</a>";
	                        if ("thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
	                            var l = o.attr("data-thumbcaption");
	                            "" != l && undefined != l && (s += '<span class="' + i + 'caption">' + l + "</span>");
	                        }
	                        r.controlNavScaffold.append("<li>" + s + "</li>");
	                        n++;
	                    }
	                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
	                    v.controlNav.set();
	                    v.controlNav.active();
	                    r.controlNavScaffold.delegate("a, img", u, function (t) {
	                        t.preventDefault();
	                        if (a === "" || a === t.type) {
	                            var n = e(this),
	                                s = r.controlNav.index(n);
	                            if (!n.hasClass(i + "active")) {
	                                r.direction = s > r.currentSlide ? "next" : "prev";
	                                r.flexAnimate(s, r.vars.pauseOnAction);
	                            }
	                        }
	                        a === "" && (a = t.type);
	                        v.setToClearWatchedEvent();
	                    });
	                },
	                setupManual: function setupManual() {
	                    r.controlNav = r.manualControls;
	                    v.controlNav.active();
	                    r.controlNav.bind(u, function (t) {
	                        t.preventDefault();
	                        if (a === "" || a === t.type) {
	                            var n = e(this),
	                                s = r.controlNav.index(n);
	                            if (!n.hasClass(i + "active")) {
	                                s > r.currentSlide ? r.direction = "next" : r.direction = "prev";
	                                r.flexAnimate(s, r.vars.pauseOnAction);
	                            }
	                        }
	                        a === "" && (a = t.type);
	                        v.setToClearWatchedEvent();
	                    });
	                },
	                set: function set() {
	                    var t = r.vars.controlNav === "thumbnails" ? "img" : "a";
	                    r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r);
	                },
	                active: function active() {
	                    r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active");
	                },
	                update: function update(t, n) {
	                    r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
	                    v.controlNav.set();
	                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active();
	                }
	            },
	            directionNav: {
	                setup: function setup() {
	                    var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
	                    if (r.controlsContainer) {
	                        e(r.controlsContainer).append(t);
	                        r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer);
	                    } else {
	                        r.append(t);
	                        r.directionNav = e("." + i + "direction-nav li a", r);
	                    }
	                    v.directionNav.update();
	                    r.directionNav.bind(u, function (t) {
	                        t.preventDefault();
	                        var n;
	                        if (a === "" || a === t.type) {
	                            n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev");
	                            r.flexAnimate(n, r.vars.pauseOnAction);
	                        }
	                        a === "" && (a = t.type);
	                        v.setToClearWatchedEvent();
	                    });
	                },
	                update: function update() {
	                    var e = i + "disabled";
	                    r.pagingCount === 1 ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex");
	                }
	            },
	            pausePlay: {
	                setup: function setup() {
	                    var t = e('<div class="' + i + 'pauseplay"><a></a></div>');
	                    if (r.controlsContainer) {
	                        r.controlsContainer.append(t);
	                        r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer);
	                    } else {
	                        r.append(t);
	                        r.pausePlay = e("." + i + "pauseplay a", r);
	                    }
	                    v.pausePlay.update(r.vars.slideshow ? i + "pause" : i + "play");
	                    r.pausePlay.bind(u, function (t) {
	                        t.preventDefault();
	                        if (a === "" || a === t.type) if (e(this).hasClass(i + "pause")) {
	                            r.manualPause = !0;
	                            r.manualPlay = !1;
	                            r.pause();
	                        } else {
	                            r.manualPause = !1;
	                            r.manualPlay = !0;
	                            r.play();
	                        }
	                        a === "" && (a = t.type);
	                        v.setToClearWatchedEvent();
	                    });
	                },
	                update: function update(e) {
	                    e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText);
	                }
	            },
	            touch: function touch() {
	                var e,
	                    n,
	                    i,
	                    o,
	                    u,
	                    a,
	                    f = !1,
	                    d = 0,
	                    v = 0,
	                    m = 0;
	                if (!s) {
	                    var g = function g(s) {
	                        if (r.animating) s.preventDefault();else if (window.navigator.msPointerEnabled || s.touches.length === 1) {
	                            r.pause();
	                            o = l ? r.h : r.w;
	                            a = Number(new Date());
	                            d = s.touches[0].pageX;
	                            v = s.touches[0].pageY;
	                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
	                            e = l ? v : d;
	                            n = l ? d : v;
	                            t.addEventListener("touchmove", y, !1);
	                            t.addEventListener("touchend", b, !1);
	                        }
	                    };

	                    var y = function y(t) {
	                        d = t.touches[0].pageX;
	                        v = t.touches[0].pageY;
	                        u = l ? e - v : e - d;
	                        f = l ? Math.abs(u) < Math.abs(d - n) : Math.abs(u) < Math.abs(v - n);
	                        var s = 500;
	                        if (!f || Number(new Date()) - a > s) {
	                            t.preventDefault();
	                            if (!p && r.transitions) {
	                                r.vars.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1);
	                                r.setProps(i + u, "setTouch");
	                            }
	                        }
	                    };

	                    var b = function b(s) {
	                        t.removeEventListener("touchmove", y, !1);
	                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
	                            var l = c ? -u : u,
	                                h = l > 0 ? r.getTarget("next") : r.getTarget("prev");
	                            r.canAdvance(h) && (Number(new Date()) - a < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0);
	                        }
	                        t.removeEventListener("touchend", b, !1);
	                        e = null;
	                        n = null;
	                        u = null;
	                        i = null;
	                    };

	                    t.addEventListener("touchstart", g, !1);
	                } else {
	                    var w = function w(e) {
	                        e.stopPropagation();
	                        if (r.animating) e.preventDefault();else {
	                            r.pause();
	                            t._gesture.addPointer(e.pointerId);
	                            m = 0;
	                            o = l ? r.h : r.w;
	                            a = Number(new Date());
	                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
	                        }
	                    };

	                    var E = function E(e) {
	                        e.stopPropagation();
	                        var n = e.target._slider;
	                        if (!n) return;
	                        var r = -e.translationX,
	                            s = -e.translationY;
	                        m += l ? s : r;
	                        u = m;
	                        f = l ? Math.abs(m) < Math.abs(-r) : Math.abs(m) < Math.abs(-s);
	                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
	                            (0, _setImmediate3["default"])(function () {
	                                t._gesture.stop();
	                            });
	                            return;
	                        }
	                        if (!f || Number(new Date()) - a > 500) {
	                            e.preventDefault();
	                            if (!p && n.transitions) {
	                                n.vars.animationLoop || (u = m / (n.currentSlide === 0 && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / o + 2 : 1));
	                                n.setProps(i + u, "setTouch");
	                            }
	                        }
	                    };

	                    var S = function S(t) {
	                        t.stopPropagation();
	                        var r = t.target._slider;
	                        if (!r) return;
	                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
	                            var s = c ? -u : u,
	                                l = s > 0 ? r.getTarget("next") : r.getTarget("prev");
	                            r.canAdvance(l) && (Number(new Date()) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2) ? r.flexAnimate(l, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0);
	                        }
	                        e = null;
	                        n = null;
	                        u = null;
	                        i = null;
	                        m = 0;
	                    };

	                    t.style.msTouchAction = "none";
	                    t._gesture = new MSGesture();
	                    t._gesture.target = t;
	                    t.addEventListener("MSPointerDown", w, !1);
	                    t._slider = r;
	                    t.addEventListener("MSGestureChange", E, !1);
	                    t.addEventListener("MSGestureEnd", S, !1);
	                }
	            },
	            resize: function resize() {
	                if (!r.animating && r.is(":visible")) {
	                    h || r.doMath();
	                    if (p) v.smoothHeight();else if (h) {
	                        r.slides.width(r.computedW);
	                        r.update(r.pagingCount);
	                        r.setProps();
	                    } else if (l) {
	                        r.viewport.height(r.h);
	                        r.setProps(r.h, "setTotal");
	                    } else {
	                        r.vars.smoothHeight && v.smoothHeight();
	                        r.newSlides.width(r.computedW);
	                        r.setProps(r.computedW, "setTotal");
	                    }
	                }
	            },
	            smoothHeight: function smoothHeight(e) {
	                if (!l || p) {
	                    var t = p ? r : r.viewport;
	                    e ? t.animate({
	                        height: r.slides.eq(r.animatingTo).height()
	                    }, e) : t.height(r.slides.eq(r.animatingTo).height());
	                }
	            },
	            sync: function sync(t) {
	                var n = e(r.vars.sync).data("flexslider"),
	                    i = r.animatingTo;
	                switch (t) {
	                    case "animate":
	                        n.flexAnimate(i, r.vars.pauseOnAction, !1, !0);
	                        break;
	                    case "play":
	                        !n.playing && !n.asNav && n.play();
	                        break;
	                    case "pause":
	                        n.pause();
	                }
	            },
	            uniqueID: function uniqueID(t) {
	                t.find("[id]").each(function () {
	                    var t = e(this);
	                    t.attr("id", t.attr("id") + "_clone");
	                });
	                return t;
	            },
	            pauseInvisible: {
	                visProp: null,
	                init: function init() {
	                    var e = ["webkit", "moz", "ms", "o"];
	                    if ("hidden" in document) return "hidden";
	                    for (var t = 0; t < e.length; t++) {
	                        e[t] + "Hidden" in document && (v.pauseInvisible.visProp = e[t] + "Hidden");
	                    }if (v.pauseInvisible.visProp) {
	                        var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
	                        document.addEventListener(n, function () {
	                            v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play();
	                        });
	                    }
	                },
	                isHidden: function isHidden() {
	                    return document[v.pauseInvisible.visProp] || !1;
	                }
	            },
	            setToClearWatchedEvent: function setToClearWatchedEvent() {
	                clearTimeout(f);
	                f = setTimeout(function () {
	                    a = "";
	                }, 3e3);
	            }
	        };
	        r.flexAnimate = function (t, n, s, u, a) {
	            !r.vars.animationLoop && t !== r.currentSlide && (r.direction = t > r.currentSlide ? "next" : "prev");
	            d && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next" : "prev");
	            if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) {
	                if (d && u) {
	                    var f = e(r.vars.asNavFor).data("flexslider");
	                    r.atEnd = t === 0 || t === r.count - 1;
	                    f.flexAnimate(t, !0, !1, !0, a);
	                    r.direction = r.currentItem < t ? "next" : "prev";
	                    f.direction = r.direction;
	                    if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) {
	                        r.currentItem = t;
	                        r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
	                        return !1;
	                    }
	                    r.currentItem = t;
	                    r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
	                    t = Math.floor(t / r.visible);
	                }
	                r.animating = !0;
	                r.animatingTo = t;
	                n && r.pause();
	                r.vars.before(r);
	                r.syncExists && !a && v.sync("animate");
	                r.vars.controlNav && v.controlNav.active();
	                h || r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
	                r.atEnd = t === 0 || t === r.last;
	                r.vars.directionNav && v.directionNav.update();
	                if (t === r.last) {
	                    r.vars.end(r);
	                    r.vars.animationLoop || r.pause();
	                }
	                if (!p) {
	                    var m = l ? r.slides.filter(":first").height() : r.computedW,
	                        g,
	                        y,
	                        b;
	                    if (h) {
	                        g = r.vars.itemMargin;
	                        b = (r.itemW + g) * r.move * r.animatingTo;
	                        y = b > r.limit && r.visible !== 1 ? r.limit : b;
	                    } else r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next" ? y = c ? (r.count + r.cloneOffset) * m : 0 : r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev" ? y = c ? 0 : (r.count + 1) * m : y = c ? (r.count - 1 - t + r.cloneOffset) * m : (t + r.cloneOffset) * m;
	                    r.setProps(y, "", r.vars.animationSpeed);
	                    if (r.transitions) {
	                        if (!r.vars.animationLoop || !r.atEnd) {
	                            r.animating = !1;
	                            r.currentSlide = r.animatingTo;
	                        }
	                        r.container.unbind("webkitTransitionEnd transitionend");
	                        r.container.bind("webkitTransitionEnd transitionend", function () {
	                            r.wrapup(m);
	                        });
	                    } else r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function () {
	                        r.wrapup(m);
	                    });
	                } else if (!o) {
	                    r.slides.eq(r.currentSlide).css({
	                        zIndex: 1
	                    }).animate({
	                        opacity: 0
	                    }, r.vars.animationSpeed, r.vars.easing);
	                    r.slides.eq(t).css({
	                        zIndex: 2
	                    }).animate({
	                        opacity: 1
	                    }, r.vars.animationSpeed, r.vars.easing, r.wrapup);
	                } else {
	                    r.slides.eq(r.currentSlide).css({
	                        opacity: 0,
	                        zIndex: 1
	                    });
	                    r.slides.eq(t).css({
	                        opacity: 1,
	                        zIndex: 2
	                    });
	                    r.wrapup(m);
	                }
	                r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed);
	            }
	        };
	        r.wrapup = function (e) {
	            !p && !h && (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop && r.setProps(e, "jumpStart"));
	            r.animating = !1;
	            r.currentSlide = r.animatingTo;
	            r.vars.after(r);
	        };
	        r.animateSlides = function () {
	            !r.animating && m && r.flexAnimate(r.getTarget("next"));
	        };
	        r.pause = function () {
	            clearInterval(r.animatedSlides);
	            r.animatedSlides = null;
	            r.playing = !1;
	            r.vars.pausePlay && v.pausePlay.update("play");
	            r.syncExists && v.sync("pause");
	        };
	        r.play = function () {
	            r.playing && clearInterval(r.animatedSlides);
	            r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
	            r.started = r.playing = !0;
	            r.vars.pausePlay && v.pausePlay.update("pause");
	            r.syncExists && v.sync("play");
	        };
	        r.stop = function () {
	            r.pause();
	            r.stopped = !0;
	        };
	        r.canAdvance = function (e, t) {
	            var n = d ? r.pagingCount - 1 : r.last;
	            return t ? !0 : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !d ? !1 : r.vars.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0;
	        };
	        r.getTarget = function (e) {
	            r.direction = e;
	            return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last : r.currentSlide - 1;
	        };
	        r.setProps = function (e, t, n) {
	            var i = function () {
	                var n = e ? e : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
	                    i = function () {
	                    if (h) return t === "setTouch" ? e : c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n;
	                    switch (t) {
	                        case "setTotal":
	                            return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
	                        case "setTouch":
	                            return c ? e : e;
	                        case "jumpEnd":
	                            return c ? e : r.count * e;
	                        case "jumpStart":
	                            return c ? r.count * e : e;
	                        default:
	                            return e;
	                    }
	                }();
	                return i * -1 + "px";
	            }();
	            if (r.transitions) {
	                i = l ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)";
	                n = n !== undefined ? n / 1e3 + "s" : "0s";
	                r.container.css("-" + r.pfx + "-transition-duration", n);
	                r.container.css("transition-duration", n);
	            }
	            r.args[r.prop] = i;
	            (r.transitions || n === undefined) && r.container.css(r.args);
	            r.container.css("transform", i);
	        };
	        r.setup = function (t) {
	            if (!p) {
	                var n, s;
	                if (t === "init") {
	                    r.viewport = e('<div class="' + i + 'viewport"></div>').css({
	                        overflow: "hidden",
	                        position: "relative"
	                    }).appendTo(r).append(r.container);
	                    r.cloneCount = 0;
	                    r.cloneOffset = 0;
	                    if (c) {
	                        s = e.makeArray(r.slides).reverse();
	                        r.slides = e(s);
	                        r.container.empty().append(r.slides);
	                    }
	                }
	                if (r.vars.animationLoop && !h) {
	                    r.cloneCount = 2;
	                    r.cloneOffset = 1;
	                    t !== "init" && r.container.find(".clone").remove();
	                    r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true"));
	                    v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);
	                    v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container);
	                }
	                r.newSlides = e(r.vars.selector, r);
	                n = c ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
	                if (l && !h) {
	                    r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
	                    setTimeout(function () {
	                        r.newSlides.css({
	                            display: "block"
	                        });
	                        r.doMath();
	                        r.viewport.height(r.h);
	                        r.setProps(n * r.h, "init");
	                    }, t === "init" ? 100 : 0);
	                } else {
	                    r.container.width((r.count + r.cloneCount) * 200 + "%");
	                    r.setProps(n * r.computedW, "init");
	                    setTimeout(function () {
	                        r.doMath();
	                        r.newSlides.css({
	                            width: r.computedW,
	                            "float": "left",
	                            display: "block"
	                        });
	                        r.vars.smoothHeight && v.smoothHeight();
	                    }, t === "init" ? 100 : 0);
	                }
	            } else {
	                r.slides.css({
	                    width: "100%",
	                    "float": "left",
	                    marginRight: "-100%",
	                    position: "relative"
	                });
	                t === "init" && (o ? r.slides.css({
	                    opacity: 0,
	                    display: "block",
	                    webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
	                    zIndex: 1
	                }).eq(r.currentSlide).css({
	                    opacity: 1,
	                    zIndex: 2
	                }) : r.slides.css({
	                    opacity: 0,
	                    display: "block",
	                    zIndex: 1
	                }).eq(r.currentSlide).css({
	                    zIndex: 2
	                }).animate({
	                    opacity: 1
	                }, r.vars.animationSpeed, r.vars.easing));
	                r.vars.smoothHeight && v.smoothHeight();
	            }
	            h || r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide");
	            r.vars.init(r);
	        };
	        r.doMath = function () {
	            var e = r.slides.first(),
	                t = r.vars.itemMargin,
	                n = r.vars.minItems,
	                i = r.vars.maxItems;
	            r.w = r.viewport === undefined ? r.width() : r.viewport.width();
	            r.h = e.height();
	            r.boxPadding = e.outerWidth() - e.width();
	            if (h) {
	                r.itemT = r.vars.itemWidth + t;
	                r.minW = n ? n * r.itemT : r.w;
	                r.maxW = i ? i * r.itemT - t : r.w;
	                r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth;
	                r.visible = Math.floor(r.w / r.itemW);
	                r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible;
	                r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
	                r.last = r.pagingCount - 1;
	                r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t;
	            } else {
	                r.itemW = r.w;
	                r.pagingCount = r.count;
	                r.last = r.count - 1;
	            }
	            r.computedW = r.itemW - r.boxPadding;
	        };
	        r.update = function (e, t) {
	            r.doMath();
	            if (!h) {
	                e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1);
	                r.animatingTo = r.currentSlide;
	            }
	            if (r.vars.controlNav && !r.manualControls) if (t === "add" && !h || r.pagingCount > r.controlNav.length) v.controlNav.update("add");else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) {
	                if (h && r.currentSlide > r.last) {
	                    r.currentSlide -= 1;
	                    r.animatingTo -= 1;
	                }
	                v.controlNav.update("remove", r.last);
	            }
	            r.vars.directionNav && v.directionNav.update();
	        };
	        r.addSlide = function (t, n) {
	            var i = e(t);
	            r.count += 1;
	            r.last = r.count - 1;
	            l && c ? n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i);
	            r.update(n, "add");
	            r.slides = e(r.vars.selector + ":not(.clone)", r);
	            r.setup();
	            r.vars.added(r);
	        };
	        r.removeSlide = function (t) {
	            var n = isNaN(t) ? r.slides.index(e(t)) : t;
	            r.count -= 1;
	            r.last = r.count - 1;
	            isNaN(t) ? e(t, r.slides).remove() : l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
	            r.doMath();
	            r.update(n, "remove");
	            r.slides = e(r.vars.selector + ":not(.clone)", r);
	            r.setup();
	            r.vars.removed(r);
	        };
	        v.init();
	    };
	    var focused;
	    e(window).blur(function (e) {
	        focused = !1;
	    }).focus(function (e) {
	        focused = !0;
	    });
	    e.flexslider.defaults = {
	        namespace: "flex-",
	        selector: ".slides > li",
	        animation: "fade",
	        easing: "swing",
	        direction: "horizontal",
	        reverse: !1,
	        animationLoop: !0,
	        smoothHeight: !1,
	        startAt: 0,
	        slideshow: !0,
	        slideshowSpeed: 7e3,
	        animationSpeed: 600,
	        initDelay: 0,
	        randomize: !1,
	        thumbCaptions: !1,
	        pauseOnAction: !0,
	        pauseOnHover: !1,
	        pauseInvisible: !0,
	        useCSS: !0,
	        touch: !0,
	        video: !1,
	        controlNav: !0,
	        directionNav: !0,
	        prevText: "Previous",
	        nextText: "Next",
	        keyboard: !0,
	        multipleKeyboard: !1,
	        mousewheel: !1,
	        pausePlay: !1,
	        pauseText: "Pause",
	        playText: "Play",
	        controlsContainer: "",
	        manualControls: "",
	        sync: "",
	        asNavFor: "",
	        itemWidth: 0,
	        itemMargin: 0,
	        minItems: 1,
	        maxItems: 0,
	        move: 0,
	        allowOneSlide: !0,
	        start: function start() {},
	        before: function before() {},
	        after: function after() {},
	        end: function end() {},
	        added: function added() {},
	        removed: function removed() {},
	        init: function init() {}
	    };
	    e.fn.flexslider = function (t) {
	        t === undefined && (t = {});
	        if ((typeof t === "undefined" ? "undefined" : (0, _typeof3["default"])(t)) == "object") return this.each(function () {
	            var n = e(this),
	                r = t.selector ? t.selector : ".slides > li",
	                i = n.find(r);
	            if (i.length === 1 && t.allowOneSlide === !0 || i.length === 0) {
	                i.fadeIn(400);
	                t.start && t.start(n);
	            } else n.data("flexslider") === undefined && new e.flexslider(this, t);
	        });
	        var n = e(this).data("flexslider");
	        switch (t) {
	            case "play":
	                n.play();
	                break;
	            case "pause":
	                n.pause();
	                break;
	            case "stop":
	                n.stop();
	                break;
	            case "next":
	                n.flexAnimate(n.getTarget("next"), !0);
	                break;
	            case "prev":
	            case "previous":
	                n.flexAnimate(n.getTarget("prev"), !0);
	                break;
	            default:
	                typeof t == "number" && n.flexAnimate(t, !0);
	        }
	    };
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(263);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(314);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2["default"] === "function" && typeof _iterator2["default"] === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2["default"] === "function" && obj.constructor === _symbol2["default"] && obj !== _symbol2["default"].prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = typeof _symbol2["default"] === "function" && _typeof(_iterator2["default"]) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2["default"] === "function" && obj.constructor === _symbol2["default"] && obj !== _symbol2["default"].prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(265);
	__webpack_require__(309);
	module.exports = __webpack_require__(313).f('iterator');

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(266)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(269)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(267)
	  , defined   = __webpack_require__(268);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },

/***/ 267:
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },

/***/ 268:
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(270)
	  , $export        = __webpack_require__(271)
	  , redefine       = __webpack_require__(286)
	  , hide           = __webpack_require__(276)
	  , has            = __webpack_require__(287)
	  , Iterators      = __webpack_require__(288)
	  , $iterCreate    = __webpack_require__(289)
	  , setToStringTag = __webpack_require__(305)
	  , getPrototypeOf = __webpack_require__(307)
	  , ITERATOR       = __webpack_require__(306)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },

/***/ 270:
/***/ function(module, exports) {

	module.exports = true;

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(272)
	  , core      = __webpack_require__(273)
	  , ctx       = __webpack_require__(274)
	  , hide      = __webpack_require__(276)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },

/***/ 272:
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },

/***/ 273:
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(275);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },

/***/ 275:
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(277)
	  , createDesc = __webpack_require__(285);
	module.exports = __webpack_require__(281) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(278)
	  , IE8_DOM_DEFINE = __webpack_require__(280)
	  , toPrimitive    = __webpack_require__(284)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(281) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(279);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },

/***/ 279:
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(281) && !__webpack_require__(282)(function(){
	  return Object.defineProperty(__webpack_require__(283)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(282)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },

/***/ 282:
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(279)
	  , document = __webpack_require__(272).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(279);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },

/***/ 285:
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(276);

/***/ },

/***/ 287:
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },

/***/ 288:
/***/ function(module, exports) {

	module.exports = {};

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(290)
	  , descriptor     = __webpack_require__(285)
	  , setToStringTag = __webpack_require__(305)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(276)(IteratorPrototype, __webpack_require__(306)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(278)
	  , dPs         = __webpack_require__(291)
	  , enumBugKeys = __webpack_require__(303)
	  , IE_PROTO    = __webpack_require__(300)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(283)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(304).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(277)
	  , anObject = __webpack_require__(278)
	  , getKeys  = __webpack_require__(292);

	module.exports = __webpack_require__(281) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(293)
	  , enumBugKeys = __webpack_require__(303);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(287)
	  , toIObject    = __webpack_require__(294)
	  , arrayIndexOf = __webpack_require__(297)(false)
	  , IE_PROTO     = __webpack_require__(300)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(295)
	  , defined = __webpack_require__(268);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(296);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },

/***/ 296:
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(294)
	  , toLength  = __webpack_require__(298)
	  , toIndex   = __webpack_require__(299);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(267)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(267)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(301)('keys')
	  , uid    = __webpack_require__(302);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(272)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },

/***/ 302:
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },

/***/ 303:
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(272).document && document.documentElement;

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(277).f
	  , has = __webpack_require__(287)
	  , TAG = __webpack_require__(306)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(301)('wks')
	  , uid        = __webpack_require__(302)
	  , Symbol     = __webpack_require__(272).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(287)
	  , toObject    = __webpack_require__(308)
	  , IE_PROTO    = __webpack_require__(300)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(268);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(310);
	var global        = __webpack_require__(272)
	  , hide          = __webpack_require__(276)
	  , Iterators     = __webpack_require__(288)
	  , TO_STRING_TAG = __webpack_require__(306)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(311)
	  , step             = __webpack_require__(312)
	  , Iterators        = __webpack_require__(288)
	  , toIObject        = __webpack_require__(294);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(269)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },

/***/ 311:
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },

/***/ 312:
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(306);

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(315), __esModule: true };

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(316);
	__webpack_require__(327);
	__webpack_require__(328);
	__webpack_require__(329);
	module.exports = __webpack_require__(273).Symbol;

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(272)
	  , has            = __webpack_require__(287)
	  , DESCRIPTORS    = __webpack_require__(281)
	  , $export        = __webpack_require__(271)
	  , redefine       = __webpack_require__(286)
	  , META           = __webpack_require__(317).KEY
	  , $fails         = __webpack_require__(282)
	  , shared         = __webpack_require__(301)
	  , setToStringTag = __webpack_require__(305)
	  , uid            = __webpack_require__(302)
	  , wks            = __webpack_require__(306)
	  , wksExt         = __webpack_require__(313)
	  , wksDefine      = __webpack_require__(318)
	  , keyOf          = __webpack_require__(319)
	  , enumKeys       = __webpack_require__(320)
	  , isArray        = __webpack_require__(323)
	  , anObject       = __webpack_require__(278)
	  , toIObject      = __webpack_require__(294)
	  , toPrimitive    = __webpack_require__(284)
	  , createDesc     = __webpack_require__(285)
	  , _create        = __webpack_require__(290)
	  , gOPNExt        = __webpack_require__(324)
	  , $GOPD          = __webpack_require__(326)
	  , $DP            = __webpack_require__(277)
	  , $keys          = __webpack_require__(292)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(325).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(322).f  = $propertyIsEnumerable;
	  __webpack_require__(321).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(270)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(276)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(302)('meta')
	  , isObject = __webpack_require__(279)
	  , has      = __webpack_require__(287)
	  , setDesc  = __webpack_require__(277).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(282)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(272)
	  , core           = __webpack_require__(273)
	  , LIBRARY        = __webpack_require__(270)
	  , wksExt         = __webpack_require__(313)
	  , defineProperty = __webpack_require__(277).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(292)
	  , toIObject = __webpack_require__(294);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(292)
	  , gOPS    = __webpack_require__(321)
	  , pIE     = __webpack_require__(322);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },

/***/ 321:
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },

/***/ 322:
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(296);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(294)
	  , gOPN      = __webpack_require__(325).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(293)
	  , hiddenKeys = __webpack_require__(303).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(322)
	  , createDesc     = __webpack_require__(285)
	  , toIObject      = __webpack_require__(294)
	  , toPrimitive    = __webpack_require__(284)
	  , has            = __webpack_require__(287)
	  , IE8_DOM_DEFINE = __webpack_require__(280)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(281) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },

/***/ 327:
/***/ function(module, exports) {

	

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(318)('asyncIterator');

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(318)('observable');

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(331), __esModule: true };

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(332);
	module.exports = __webpack_require__(273).setImmediate;

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(271)
	  , $task   = __webpack_require__(333);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(274)
	  , invoke             = __webpack_require__(334)
	  , html               = __webpack_require__(304)
	  , cel                = __webpack_require__(283)
	  , global             = __webpack_require__(272)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(296)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },

/***/ 334:
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(336);
	__webpack_require__(337);

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	$(function () {

	  lanrenzhijia("#pageHead .dropdownitem");
	  function lanrenzhijia(_this) {
	    $(_this).each(function () {
	      var $this = $(this);
	      var l = $(this).find('.dropdownContent ul').length;
	      switch (l) {
	        case 1:
	          $(this).find('.dropdownContent').width(104);
	          break;
	        case 2:
	          $(this).find('.dropdownContent').width(204);
	          break;
	        case 3:
	          $(this).find('.dropdownContent').width(304);
	          break;
	        case 4:
	          $(this).find('.dropdownContent').width(404);
	          break;
	        case 5:
	          $(this).find('.dropdownContent').width(504);
	          break;
	        default:
	      }
	      var theMenu = $this.find(".dropdownlist");
	      var tarHeight = theMenu.height();
	      $this.hover(function () {
	        theMenu.css({ height: 40 }).show();
	      }, function () {
	        theMenu.css({ height: 0 }).hide();
	      });
	    });
	  }

	  $('.tougaobtn').on('mouseover', function () {
	    $('.onlytea').show();
	  });
	  $('.tougaobtn').on('mouseout', function () {
	    $('.onlytea').hide();
	  });

	  $('#homeHead .dropdownlist').hover(function () {
	    $('#homeHead .dropdownContent').hide();
	    $(this).find('.dropdownContent').show();
	  }, function () {
	    $('#homeHead .dropdownContent').hide();
	  });

	  /**/
	  $('.phoneIcon').hover(function () {
	    $('.hoverapp').hide();
	    $('.hoverphone').show();
	  });
	  $('.weiboIcon').hover(function () {
	    $('.hoverapp').hide();
	    $('.hoverweibo').show();
	  });
	  $('.wechatIcon').hover(function () {
	    $('.hoverapp').hide();
	    $('.hoverwechat').show();
	  });
	  $('.firstHead .headicon').on('mouseout', function () {
	    $('.hoverapp').hide();
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	$(function () {

		/*滚动页面头部fixed*/
		if ($(window).scrollTop() > 100) {
			$('#pageHead').css({ 'position': 'fixed', 'top': '0px', 'height': '80px', 'z-index': '99999' });
			$('#pageHead .firstHead').hide();
			$('#pageHead .secondHead').css({ 'margin-top': '10px' });
		} else {
			$('#pageHead').css({ 'position': 'relative', 'top': '0px', 'height': '110px' });
			$('#pageHead .firstHead').show();
			$('#pageHead .secondHead').css({ 'margin-top': '20px' });
		}
		$(window).scroll(function () {
			if ($(window).scrollTop() > 100) {
				$('#pageHead').css({ 'position': 'fixed', 'top': '0px', 'height': '80px', 'z-index': '99999' });
				$('#pageHead .firstHead').hide();
				$('#pageHead .secondHead').css({ 'margin-top': '10px' });
			} else {
				$('#pageHead').css({ 'position': 'relative', 'top': '0px', 'height': '110px' });
				$('#pageHead .firstHead').show();
				$('#pageHead .secondHead').css({ 'margin-top': '20px' });
			}
		});
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	$(function () {
	  /**/
	  $('.downloadApp span.ios').on('mouseenter', function () {
	    $('.downloadApp img').hide();
	    $(this).parents('.downloadApp').find('span.ios img').show();
	  });
	  $('.downloadApp span.android').on('mouseenter', function () {
	    $('.downloadApp img').hide();
	    $(this).parents('.downloadApp').find('span.android img').show();
	  });
	  $('.downloadApp span').on('mouseout', function () {
	    $('.downloadApp img').hide();
	  });
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/img/6d6be8b6e5749058aae3560d53ef92ce.png";

/***/ },

/***/ 345:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 362:
/***/ function(module, exports) {

	'use strict';

	/* ImageFlow constructor */
	module.exports = function ImageFlow() {
	    /* Setting option defaults */
	    this.defaults = {
	        animationSpeed: 50, /* Animation speed in ms */
	        aspectRatio: 2.5, /* Aspect ratio of the ImageFlow container (width divided by height) */
	        buttons: false, /* Toggle navigation buttons */
	        captions: false, /* Toggle captions */
	        circular: true, /* 循环 */
	        mousewheel: false,
	        imageCursor: 'pointer', /* Cursor type for all images - default is 'default' */
	        ImageFlowID: 'imageflow', /* Default id of the ImageFlow container */
	        imageFocusM: 5, /* Multiplicator for the focussed image size in percent */
	        imageFocusMax: 2, /* 左右二侧图片数量 */
	        imagePath: '', /* Path to the images relative to the reflect_.php script */
	        imageScaling: true, /* Toggle image scaling */
	        imagesHeight: 0.59, /* 高宽比例 */
	        imagesM: 1, /* 图片深度 */
	        onClick: function onClick() {}, /* Onclick behaviour */
	        opacity: false, /* Toggle image opacity */
	        opacityArray: [10, 8, 6, 4, 2], /* Image opacity (range: 0 to 10) first value is for the focussed image */
	        percentLandscape: 118, /* Scale landscape format */
	        percentOther: 120, /* Scale portrait and square format */
	        preloadImages: true, /* Toggles loading bar (false: requires img attributes height and width) */
	        reflections: true, /* Toggle reflections */
	        reflectionGET: '', /* Pass variables via the GET method to the reflect_.php script */
	        reflectionP: 0.5, /* Height of the reflection in percent of the source image */
	        reflectionPNG: false, /* Toggle reflect2.php or reflect3.php */
	        reflectPath: '', /* Path to the reflect_.php script */
	        scrollbarP: 0.6, /* Width of the scrollbar in percent */
	        slider: true, /* Toggle slider */
	        sliderCursor: 'e-resize', /* Slider cursor type - default is 'default' */
	        sliderWidth: 14, /* Width of the slider in px */
	        slideshow: false, /* Toggle slideshow */
	        slideshowSpeed: 3000, /* Time between slides in ms */
	        slideshowAutoplay: true, /* Toggle automatic slideshow play on startup */
	        startID: 1, /* Image ID to begin with */
	        glideToStartID: true, /* Toggle glide animation to start ID */
	        startAnimation: false, /* Animate images moving in from the right on startup */
	        xStep: 90 /* Step width on the x-axis in px */
	    };

	    /* Closure for this */
	    var my = this;

	    /* Initiate ImageFlow */
	    this.init = function (options) {
	        /* Evaluate options */
	        for (var name in my.defaults) {
	            this[name] = options !== undefined && options[name] !== undefined ? options[name] : my.defaults[name];
	        }

	        /* Try to get ImageFlow div element */
	        var ImageFlowDiv = document.getElementById(my.ImageFlowID);
	        if (ImageFlowDiv) {
	            /* Set it global within the ImageFlow scope */
	            ImageFlowDiv.style.visibility = 'visible';
	            this.ImageFlowDiv = ImageFlowDiv;

	            /* Try to create XHTML structure */
	            if (this.createStructure()) {
	                this.imagesDiv = document.getElementById(my.ImageFlowID + '_images');
	                this.captionDiv = document.getElementById(my.ImageFlowID + '_caption');
	                this.navigationDiv = document.getElementById(my.ImageFlowID + '_navigation');
	                this.scrollbarDiv = document.getElementById(my.ImageFlowID + '_scrollbar');
	                this.sliderDiv = document.getElementById(my.ImageFlowID + '_slider');
	                this.buttonNextDiv = document.getElementById(my.ImageFlowID + '_next');
	                this.buttonPreviousDiv = document.getElementById(my.ImageFlowID + '_previous');
	                this.buttonSlideshow = document.getElementById(my.ImageFlowID + '_slideshow');

	                this.indexArray = [];
	                this.current = 0;
	                this.imageID = 0;
	                this.target = 0;
	                this.memTarget = 0;
	                this.firstRefresh = true;
	                this.firstCheck = true;
	                this.busy = false;

	                /* Set height of the ImageFlow container and center the loading bar */
	                var width = this.ImageFlowDiv.offsetWidth;
	                var height = Math.round(width / my.aspectRatio);
	                document.getElementById(my.ImageFlowID + '_loading_txt').style.paddingTop = height * 0.5 - 22 + 'px';
	                ImageFlowDiv.style.height = height + 'px';

	                /* Init loading progress */
	                this.loadingProgress();
	            }
	        }
	    };

	    /* Create HTML Structure */
	    this.createStructure = function () {
	        /* Create images div container */
	        var imagesDiv = my.Helper.createDocumentElement('div', 'images');

	        /* Shift all images into the images div */
	        var node, version, src, imageNode;
	        var max = my.ImageFlowDiv.childNodes.length;
	        for (var index = 0; index < max; index++) {
	            node = my.ImageFlowDiv.childNodes[index];
	            if (node && node.nodeType == 1 && node.nodeName == 'IMG') {
	                /* Add 'reflect.php?img=' */
	                if (my.reflections === true) {
	                    version = my.reflectionPNG ? '3' : '2';
	                    src = my.imagePath + node.getAttribute('src', 2);
	                    //src = my.reflectPath+'reflect'+version+'.php?img='+src+my.reflectionGET;
	                    node.setAttribute('src', src);
	                }

	                /* Clone image nodes and append them to the images div */
	                imageNode = node.cloneNode(true);
	                imagesDiv.appendChild(imageNode);
	            }
	        }

	        /* Clone some more images to make a circular animation possible */
	        if (my.circular) {
	            /* Create temporary elements to hold the cloned images */
	            var first = my.Helper.createDocumentElement('div', 'images');
	            var last = my.Helper.createDocumentElement('div', 'images');

	            /* Make sure, that there are enough images to use circular mode */
	            max = imagesDiv.childNodes.length;
	            if (max < my.imageFocusMax) {
	                my.imageFocusMax = max;
	            }

	            /* Do not clone anything if there is only one image */
	            if (max > 1) {
	                /* Clone the first and last images */
	                var i;
	                for (i = 0; i < max; i++) {
	                    /* Number of clones on each side equals the imageFocusMax */
	                    node = imagesDiv.childNodes[i];
	                    if (i < my.imageFocusMax) {
	                        imageNode = node.cloneNode(true);
	                        first.appendChild(imageNode);
	                    }
	                    if (max - i < my.imageFocusMax + 1) {
	                        imageNode = node.cloneNode(true);
	                        last.appendChild(imageNode);
	                    }
	                }

	                /* Sort the image nodes in the following order: last | originals | first */
	                for (i = 0; i < max; i++) {
	                    node = imagesDiv.childNodes[i];
	                    imageNode = node.cloneNode(true);
	                    last.appendChild(imageNode);
	                }
	                for (i = 0; i < my.imageFocusMax; i++) {
	                    node = first.childNodes[i];
	                    imageNode = node.cloneNode(true);
	                    last.appendChild(imageNode);
	                }

	                /* Overwrite the imagesDiv with the new order */
	                imagesDiv = last;
	            }
	        }

	        /* Create slideshow button div and append it to the images div */
	        if (my.slideshow) {
	            var slideshowButton = my.Helper.createDocumentElement('div', 'slideshow');
	            imagesDiv.appendChild(slideshowButton);
	        }

	        /* Create loading text container */
	        var loadingP = my.Helper.createDocumentElement('p', 'loading_txt');
	        var loadingText = document.createTextNode(' ');
	        loadingP.appendChild(loadingText);

	        /* Create loading div container */
	        var loadingDiv = my.Helper.createDocumentElement('div', 'loading');

	        /* Create loading bar div container inside the loading div */
	        var loadingBarDiv = my.Helper.createDocumentElement('div', 'loading_bar');
	        loadingDiv.appendChild(loadingBarDiv);

	        /* Create captions div container */
	        var captionDiv = my.Helper.createDocumentElement('div', 'caption');

	        /* Create slider and button div container inside the scrollbar div */
	        var scrollbarDiv = my.Helper.createDocumentElement('div', 'scrollbar');
	        var sliderDiv = my.Helper.createDocumentElement('div', 'slider');
	        scrollbarDiv.appendChild(sliderDiv);
	        if (my.buttons) {
	            var buttonPreviousDiv = my.Helper.createDocumentElement('div', 'previous', 'button');
	            var buttonNextDiv = my.Helper.createDocumentElement('div', 'next', 'button');
	            scrollbarDiv.appendChild(buttonPreviousDiv);
	            scrollbarDiv.appendChild(buttonNextDiv);
	        }

	        /* Create navigation div container beneath images div */
	        var navigationDiv = my.Helper.createDocumentElement('div', 'navigation');
	        navigationDiv.appendChild(captionDiv);
	        navigationDiv.appendChild(scrollbarDiv);

	        /* Update document structure and return true on success */
	        var success = false;
	        if (my.ImageFlowDiv.appendChild(imagesDiv) && my.ImageFlowDiv.appendChild(loadingP) && my.ImageFlowDiv.appendChild(loadingDiv) && my.ImageFlowDiv.appendChild(navigationDiv)) {
	            /* Remove image nodes outside the images div */
	            max = my.ImageFlowDiv.childNodes.length;
	            for (index = 0; index < max; index++) {
	                node = my.ImageFlowDiv.childNodes[index];
	                if (node && node.nodeType == 1 && node.nodeName == 'IMG') {
	                    my.ImageFlowDiv.removeChild(node);
	                }
	            }
	            success = true;
	        }
	        return success;
	    };

	    /* Manage loading progress and call the refresh function */
	    this.loadingProgress = function () {
	        var p = my.loadingStatus();
	        if ((p < 100 || my.firstCheck) && my.preloadImages) {
	            /* Insert a short delay if the browser loads rapidly from its cache */
	            if (my.firstCheck && p == 100) {
	                my.firstCheck = false;
	                window.setTimeout(my.loadingProgress, 100);
	            } else {
	                window.setTimeout(my.loadingProgress, 40);
	            }
	        } else {
	            /* Hide loading elements */
	            document.getElementById(my.ImageFlowID + '_loading_txt').style.display = 'none';
	            document.getElementById(my.ImageFlowID + '_loading').style.display = 'none';

	            /* Refresh ImageFlow on window resize - delay adding this event for the IE */
	            window.setTimeout(my.Helper.addResizeEvent, 1000);

	            /* Call refresh once on startup to display images */
	            my.refresh();

	            /* Only initialize navigation elements if there is more than one image */
	            if (my.max > 1) {
	                /* Initialize mouse, touch and key support */
	                //my.MouseWheel.init();
	                my.MouseDrag.init();
	                my.Touch.init();
	                my.Key.init();

	                /* Toggle slideshow */
	                if (my.slideshow) {
	                    my.Slideshow.init();
	                }

	                /* Toggle scrollbar visibility */
	                if (my.slider) {
	                    my.scrollbarDiv.style.visibility = 'visible';
	                }
	            }
	        }
	    };

	    /* Return loaded images in percent, set loading bar width and loading text */
	    this.loadingStatus = function () {
	        var max = my.imagesDiv.childNodes.length;
	        var i = 0,
	            completed = 0;
	        var image = null;
	        for (var index = 0; index < max; index++) {
	            image = my.imagesDiv.childNodes[index];
	            if (image && image.nodeType == 1 && image.nodeName == 'IMG') {
	                if (image.complete) {
	                    completed++;
	                }
	                i++;
	            }
	        }

	        var finished = Math.round(completed / i * 100);
	        var loadingBar = document.getElementById(my.ImageFlowID + '_loading_bar');
	        loadingBar.style.width = finished + '%';

	        /* Do not count the cloned images */
	        if (my.circular) {
	            i = i - my.imageFocusMax * 2;
	            completed = finished < 1 ? 0 : Math.round(i / 100 * finished);
	        }

	        var loadingP = document.getElementById(my.ImageFlowID + '_loading_txt');
	        var loadingTxt = document.createTextNode('正在加载,请稍候 ' + completed + '/' + i);
	        loadingP.replaceChild(loadingTxt, loadingP.firstChild);
	        return finished;
	    };

	    /* Cache EVERYTHING that only changes on refresh or resize of the window */
	    this.refresh = function () {
	        /* Cache global variables */
	        this.imagesDivWidth = my.imagesDiv.offsetWidth + my.imagesDiv.offsetLeft;
	        this.maxHeight = Math.round(my.imagesDivWidth / my.aspectRatio);
	        this.maxFocus = my.imageFocusMax * my.xStep;
	        this.size = my.imagesDivWidth * 0.5;
	        this.sliderWidth = my.sliderWidth * 0.5;
	        this.scrollbarWidth = (my.imagesDivWidth - Math.round(my.sliderWidth) * 2) * my.scrollbarP;
	        this.imagesDivHeight = Math.round(my.maxHeight * my.imagesHeight);

	        /* Change imageflow div properties */
	        my.ImageFlowDiv.style.height = my.maxHeight + 'px';

	        /* Change images div properties */
	        my.imagesDiv.style.height = my.imagesDivHeight + 'px';

	        /* Change images div properties */
	        my.navigationDiv.style.height = my.maxHeight - my.imagesDivHeight + 'px';

	        /* Change captions div properties */
	        my.captionDiv.style.width = my.imagesDivWidth + 'px';
	        my.captionDiv.style.paddingTop = Math.round(my.imagesDivWidth * 0.02) + 'px';

	        /* Change scrollbar div properties */
	        my.scrollbarDiv.style.width = my.scrollbarWidth + 'px';
	        my.scrollbarDiv.style.marginTop = Math.round(my.imagesDivWidth * 0.02) + 'px';
	        my.scrollbarDiv.style.marginLeft = Math.round(my.sliderWidth + (my.imagesDivWidth - my.scrollbarWidth) / 2) + 'px';

	        /* Set slider attributes */
	        my.sliderDiv.style.cursor = my.sliderCursor;
	        my.sliderDiv.onmousedown = function () {
	            my.MouseDrag.start(this);return false;
	        };

	        if (my.buttons) {
	            my.buttonPreviousDiv.onclick = function () {
	                my.MouseWheel.handle(1);
	            };
	            my.buttonNextDiv.onclick = function () {
	                my.MouseWheel.handle(-1);
	            };
	        }

	        /* Set the reflection multiplicator */
	        var multi = my.reflections === true ? my.reflectionP + 1 : 1;

	        /* Set image attributes */
	        var max = my.imagesDiv.childNodes.length;
	        var i = 0;
	        var image = null;
	        for (var index = 0; index < max; index++) {
	            image = my.imagesDiv.childNodes[index];
	            if (image !== null && image.nodeType == 1 && image.nodeName == 'IMG') {
	                this.indexArray[i] = index;

	                /* Set image attributes to store values */
	                image.url = image.getAttribute('longdesc');
	                image.xPosition = -i * my.xStep;
	                image.i = i;

	                /* Add width and height as attributes only once */
	                if (my.firstRefresh) {
	                    if (image.getAttribute('width') !== null && image.getAttribute('height') !== null) {
	                        image.w = image.getAttribute('width');
	                        image.h = image.getAttribute('height') * multi;
	                    } else {
	                        image.w = image.width;
	                        image.h = image.height;
	                    }
	                }

	                /* Check source image format. Get image height minus reflection height! */
	                if (image.w > image.h / (my.reflectionP + 1)) {
	                    /* Landscape format */
	                    image.pc = my.percentLandscape;
	                    image.pcMem = my.percentLandscape;
	                } else {
	                    /* Portrait and square format */
	                    image.pc = my.percentOther;
	                    image.pcMem = my.percentOther;
	                }

	                /* Change image positioning */
	                if (my.imageScaling === false) {
	                    image.style.position = 'relative';
	                    image.style.display = 'inline';
	                }

	                /* Set image cursor type */
	                image.style.cursor = my.imageCursor;
	                i++;
	            }
	        }
	        this.max = my.indexArray.length;

	        /* Override dynamic sizes based on the first image */
	        if (my.imageScaling === false) {
	            image = my.imagesDiv.childNodes[my.indexArray[0]];

	            /* Set left padding for the first image */
	            this.totalImagesWidth = image.w * my.max;
	            image.style.paddingLeft = my.imagesDivWidth / 2 + image.w / 2 + 'px';

	            /* Override images and navigation div height */
	            my.imagesDiv.style.height = image.h + 'px';
	            my.navigationDiv.style.height = my.maxHeight - image.h + 'px';
	        }

	        /* Handle startID on the first refresh */
	        if (my.firstRefresh) {
	            /* Reset variable */
	            my.firstRefresh = false;

	            /* Set imageID to the startID */
	            my.imageID = my.startID - 1;
	            if (my.imageID < 0) {
	                my.imageID = 0;
	            }

	            /* Map image id range in cicular mode (ignore the cloned images) */
	            if (my.circular) {
	                my.imageID = my.imageID + my.imageFocusMax;
	            }

	            /* Make sure, that the id is smaller than the image count  */
	            var maxId = my.circular ? my.max - my.imageFocusMax - 1 : my.max - 1;
	            if (my.imageID > maxId) {
	                my.imageID = maxId;
	            }

	            /* Toggle glide animation to start ID */
	            if (my.glideToStartID === false) {
	                my.moveTo(-my.imageID * my.xStep);
	            }

	            /* Animate images moving in from the right */
	            if (my.startAnimation) {
	                my.moveTo(5000);
	            }
	        }

	        /* Only animate if there is more than one image */
	        if (my.max > 1) {
	            my.glideTo(my.imageID);
	        }

	        /* Display images in current order */
	        my.moveTo(my.current);
	    };

	    /* Main animation function */
	    this.moveTo = function (x) {
	        this.current = x;
	        this.zIndex = my.max;

	        /* Main loop */
	        for (var index = 0; index < my.max; index++) {
	            var image = my.imagesDiv.childNodes[my.indexArray[index]];
	            var currentImage = index * -my.xStep;

	            /* Enabled image scaling */
	            if (my.imageScaling) {
	                /* Don't display images that are not conf_focussed */
	                if (currentImage + my.maxFocus < my.memTarget || currentImage - my.maxFocus > my.memTarget) {
	                    try {
	                        image.style.visibility = 'hidden';
	                        image.style.display = 'none';
	                    } catch (e) {}
	                } else {
	                    try {
	                        var z = (Math.sqrt(10000 + x * x) + 100) * my.imagesM;
	                        var xs = x / z * my.size + my.size;

	                        /* Still hide images until they are processed, but set display style to block */
	                        image.style.display = 'block';

	                        /* Process new image height and width */
	                        var newImageH = image.h / image.w * image.pc / z * my.size;
	                        var newImageW = 0;
	                        switch (newImageH > my.maxHeight) {
	                            case false:
	                                newImageW = image.pc / z * my.size;
	                                break;

	                            default:
	                                newImageH = my.maxHeight;
	                                newImageW = image.w * newImageH / image.h;
	                                break;
	                        }

	                        var newImageTop = my.imagesDivHeight - newImageH + newImageH / (my.reflectionP + 1) * my.reflectionP;

	                        /* Set new image properties */
	                        image.style.left = xs - image.pc / 2 / z * my.size + 'px';
	                        if (newImageW && newImageH) {
	                            image.style.height = newImageH + 'px';
	                            image.style.width = newImageW + 'px';
	                            image.style.top = newImageTop + 'px';
	                        }
	                        image.style.visibility = 'visible';

	                        /* Set image layer through zIndex */
	                        switch (x < 0) {
	                            case true:
	                                this.zIndex++;
	                                break;

	                            default:
	                                this.zIndex = my.zIndex - 1;
	                                break;
	                        }

	                        /* Change zIndex and onclick function of the focussed image */
	                        switch (image.i == my.imageID) {
	                            case false:
	                                image.onclick = function () {
	                                    my.glideTo(this.i);
	                                };
	                                break;

	                            default:
	                                this.zIndex = my.zIndex + 1;
	                                if (image.url !== '') {
	                                    image.onclick = my.onClick;
	                                }
	                                break;
	                        }
	                        image.style.zIndex = my.zIndex;
	                    } catch (e) {}
	                }
	            }

	            /* Disabled image scaling */
	            else {
	                    if (currentImage + my.maxFocus < my.memTarget || currentImage - my.maxFocus > my.memTarget) {
	                        image.style.visibility = 'hidden';
	                    } else {
	                        image.style.visibility = 'visible';

	                        /* Change onclick function of the focussed image */
	                        switch (image.i == my.imageID) {
	                            case false:
	                                image.onclick = function () {
	                                    my.glideTo(this.i);
	                                };
	                                break;

	                            default:
	                                if (image.url !== '') {
	                                    image.onclick = my.onClick;
	                                }
	                                break;
	                        }
	                    }
	                    my.imagesDiv.style.marginLeft = x - my.totalImagesWidth + 'px';
	                }

	            x += my.xStep;
	        }
	    };

	    /* Initializes image gliding animation */
	    this.glideTo = function (imageID) {
	        /* Check for jumppoints */
	        var jumpTarget, clonedImageID;
	        if (my.circular) {
	            /* Trigger left jumppoint */
	            if (imageID + 1 === my.imageFocusMax) {
	                /* Set jump target to the same cloned image on the right */
	                clonedImageID = my.max - my.imageFocusMax;
	                jumpTarget = -clonedImageID * my.xStep;

	                /* Set the imageID to the last image */
	                imageID = clonedImageID - 1;
	            }

	            /* Trigger right jumppoint */
	            if (imageID === my.max - my.imageFocusMax) {
	                /* Set jump target to the same cloned image on the left */
	                clonedImageID = my.imageFocusMax - 1;
	                jumpTarget = -clonedImageID * my.xStep;

	                /* Set the imageID to the first image */
	                imageID = clonedImageID + 1;
	            }
	        }

	        /* Calculate new image position target */
	        var x = -imageID * my.xStep;
	        this.target = x;
	        this.memTarget = x;
	        this.imageID = imageID;

	        /* Display new caption */
	        var caption = "";
	        try {
	            caption = my.imagesDiv.childNodes[imageID].getAttribute('alt');
	        } catch (e) {}
	        if (caption === '' || my.captions === false) {
	            caption = ' ';
	        }
	        my.captionDiv.innerHTML = caption;

	        /* Set scrollbar slider to new position */
	        if (my.MouseDrag.busy === false) {
	            if (my.circular) {
	                this.newSliderX = (imageID - my.imageFocusMax) * my.scrollbarWidth / (my.max - my.imageFocusMax * 2 - 1) - my.MouseDrag.newX;
	            } else {
	                this.newSliderX = imageID * my.scrollbarWidth / (my.max - 1) - my.MouseDrag.newX;
	            }
	            my.sliderDiv.style.marginLeft = my.newSliderX - my.sliderWidth + 'px';
	        }

	        /* Only process if opacity or a multiplicator for the focussed image has been set */
	        if (my.opacity === true || my.imageFocusM !== my.defaults.imageFocusM) {
	            /* Set opacity for centered image */
	            my.Helper.setOpacity(my.imagesDiv.childNodes[imageID], my.opacityArray[0]);
	            my.imagesDiv.childNodes[imageID].pc = my.imagesDiv.childNodes[imageID].pc * my.imageFocusM;

	            /* Set opacity for the other images that are displayed */
	            var opacityValue = 0;
	            var rightID = 0;
	            var leftID = 0;
	            var last = my.opacityArray.length;

	            for (var i = 1; i < my.imageFocusMax + 1; i++) {
	                if (i + 1 > last) {
	                    opacityValue = my.opacityArray[last - 1];
	                } else {
	                    opacityValue = my.opacityArray[i];
	                }

	                rightID = imageID + i;
	                leftID = imageID - i;

	                if (rightID < my.max) {
	                    my.Helper.setOpacity(my.imagesDiv.childNodes[rightID], opacityValue);
	                    my.imagesDiv.childNodes[rightID].pc = my.imagesDiv.childNodes[rightID].pcMem;
	                }
	                if (leftID >= 0) {
	                    my.Helper.setOpacity(my.imagesDiv.childNodes[leftID], opacityValue);
	                    my.imagesDiv.childNodes[leftID].pc = my.imagesDiv.childNodes[leftID].pcMem;
	                }
	            }
	        }

	        /* Move the images to the jump target */
	        if (jumpTarget) {
	            my.moveTo(jumpTarget);
	        }

	        /* Animate gliding to new x position */
	        if (my.busy === false) {
	            my.busy = true;
	            my.animate();
	        }
	    };

	    /* Animates image gliding */
	    this.animate = function () {
	        switch (my.target < my.current - 1 || my.target > my.current + 1) {
	            case true:
	                my.moveTo(my.current + (my.target - my.current) / 3);
	                window.setTimeout(my.animate, my.animationSpeed);
	                my.busy = true;
	                break;

	            default:
	                my.busy = false;
	                break;
	        }
	    };

	    /* Used by user events to call the glideTo function */
	    this.glideOnEvent = function (imageID) {
	        /* Interrupt slideshow on mouse wheel, keypress, touch and mouse drag */
	        if (my.slideshow) {
	            my.Slideshow.interrupt();
	        }

	        /* Glide to new imageID */
	        my.glideTo(imageID);
	    };

	    /* Slideshow function */
	    this.Slideshow = {
	        direction: 1,

	        init: function init() {
	            /* Call start() if autoplay is enabled, stop() if it is disabled */
	            my.slideshowAutoplay ? my.Slideshow.start() : my.Slideshow.stop();
	        },

	        interrupt: function interrupt() {
	            /* Remove interrupt event */
	            my.Helper.removeEvent(my.ImageFlowDiv, 'click', my.Slideshow.interrupt);

	            /* Interrupt the slideshow */
	            my.Slideshow.stop();
	        },

	        addInterruptEvent: function addInterruptEvent() {
	            /* A click anywhere inside the ImageFlow div interrupts the slideshow */
	            my.Helper.addEvent(my.ImageFlowDiv, 'click', my.Slideshow.interrupt);
	        },

	        start: function start() {
	            /* Set button style to pause */
	            my.Helper.setClassName(my.buttonSlideshow, 'slideshow pause');

	            /* Set onclick behaviour to stop */
	            my.buttonSlideshow.onclick = function () {
	                my.Slideshow.stop();
	            };

	            /* Set slide interval */
	            my.Slideshow.action = window.setInterval(my.Slideshow.slide, my.slideshowSpeed);

	            /* Allow the user to always interrupt the slideshow */
	            window.setTimeout(my.Slideshow.addInterruptEvent, 100);
	        },

	        stop: function stop() {
	            /* Set button style to play */
	            my.Helper.setClassName(my.buttonSlideshow, 'slideshow play');

	            /* Set onclick behaviour to start */
	            my.buttonSlideshow.onclick = function () {
	                my.Slideshow.start();
	            };

	            /* Clear slide interval */
	            window.clearInterval(my.Slideshow.action);
	        },

	        slide: function slide() {
	            var newImageID = my.imageID + my.Slideshow.direction;
	            var reverseDirection = false;

	            /* Reverse direction at the last image on the right */
	            if (newImageID === my.max) {
	                my.Slideshow.direction = -1;
	                reverseDirection = true;
	            }

	            /* Reverse direction at the last image on the left */
	            if (newImageID < 0) {
	                my.Slideshow.direction = 1;
	                reverseDirection = true;
	            }

	            /* If direction is reversed recall this method, else call the glideTo method */
	            reverseDirection ? my.Slideshow.slide() : my.glideTo(newImageID);
	        }
	    };

	    /* Mouse Wheel support */
	    this.MouseWheel = {
	        init: function init() {
	            /* Init mouse wheel listener */
	            if (window.addEventListener) {
	                my.ImageFlowDiv.addEventListener('DOMMouseScroll', my.MouseWheel.get, false);
	            }
	            my.Helper.addEvent(my.ImageFlowDiv, 'mousewheel', my.MouseWheel.get);
	        },

	        get: function get(event) {
	            var delta = 0;
	            if (!event) {
	                event = window.event;
	            }
	            if (event.wheelDelta) {
	                delta = event.wheelDelta / 120;
	            } else if (event.detail) {
	                delta = -event.detail / 3;
	            }
	            if (delta) {

	                // if(my.mousewheel === true) {
	                //     my.MouseWheel.handle(delta);
	                //  }
	                my.MouseWheel.handle(delta);
	            }
	            my.Helper.suppressBrowserDefault(event);
	        },

	        handle: function handle(delta) {
	            var change = false;
	            var newImageID = 0;
	            if (delta > 0) {
	                if (my.imageID >= 1) {
	                    newImageID = my.imageID - 1;
	                    change = true;
	                }
	            } else {
	                if (my.imageID < my.max - 1) {
	                    newImageID = my.imageID + 1;
	                    change = true;
	                }
	            }

	            /* Glide to next (mouse wheel down) / previous (mouse wheel up) image  */
	            if (change) {
	                my.glideOnEvent(newImageID);
	            }
	        }
	    };

	    /* Mouse Dragging */
	    this.MouseDrag = {
	        object: null,
	        objectX: 0,
	        mouseX: 0,
	        newX: 0,
	        busy: false,

	        /* Init mouse event listener */
	        init: function init() {
	            my.Helper.addEvent(my.ImageFlowDiv, 'mousemove', my.MouseDrag.drag);
	            my.Helper.addEvent(my.ImageFlowDiv, 'mouseup', my.MouseDrag.stop);
	            my.Helper.addEvent(document, 'mouseup', my.MouseDrag.stop);

	            /* Avoid text and image selection while dragging  */
	            my.ImageFlowDiv.onselectstart = function () {
	                var selection = true;
	                if (my.MouseDrag.busy) {
	                    selection = false;
	                }
	                return selection;
	            };
	        },

	        start: function start(o) {
	            my.MouseDrag.object = o;
	            my.MouseDrag.objectX = my.MouseDrag.mouseX - o.offsetLeft + my.newSliderX;
	        },

	        stop: function stop() {
	            my.MouseDrag.object = null;
	            my.MouseDrag.busy = false;
	        },

	        drag: function drag(e) {
	            var posx = 0;
	            if (!e) {
	                e = window.event;
	            }
	            if (e.pageX) {
	                posx = e.pageX;
	            } else if (e.clientX) {
	                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	            }
	            my.MouseDrag.mouseX = posx;

	            if (my.MouseDrag.object !== null) {
	                var newX = my.MouseDrag.mouseX - my.MouseDrag.objectX + my.sliderWidth;

	                /* Make sure, that the slider is moved in proper relation to previous movements by the glideTo function */
	                if (newX < -my.newSliderX) {
	                    newX = -my.newSliderX;
	                }
	                if (newX > my.scrollbarWidth - my.newSliderX) {
	                    newX = my.scrollbarWidth - my.newSliderX;
	                }

	                /* Set new slider position */
	                var step, imageID;
	                if (my.circular) {
	                    step = (newX + my.newSliderX) / (my.scrollbarWidth / (my.max - my.imageFocusMax * 2 - 1));
	                    imageID = Math.round(step) + my.imageFocusMax;
	                } else {
	                    step = (newX + my.newSliderX) / (my.scrollbarWidth / (my.max - 1));
	                    imageID = Math.round(step);
	                }
	                my.MouseDrag.newX = newX;
	                my.MouseDrag.object.style.left = newX + 'px';
	                if (my.imageID !== imageID) {
	                    my.glideOnEvent(imageID);
	                }
	                my.MouseDrag.busy = true;
	            }
	        }
	    };

	    /* Safari touch events on the iPhone and iPod Touch */
	    this.Touch = {
	        x: 0,
	        startX: 0,
	        stopX: 0,
	        busy: false,
	        first: true,

	        /* Init touch event listener */
	        init: function init() {
	            my.Helper.addEvent(my.navigationDiv, 'touchstart', my.Touch.start);
	            my.Helper.addEvent(document, 'touchmove', my.Touch.handle);
	            my.Helper.addEvent(document, 'touchend', my.Touch.stop);
	        },

	        isOnNavigationDiv: function isOnNavigationDiv(e) {
	            var state = false;
	            if (e.touches) {
	                var target = e.touches[0].target;
	                if (target === my.navigationDiv || target === my.sliderDiv || target === my.scrollbarDiv) {
	                    state = true;
	                }
	            }
	            return state;
	        },

	        getX: function getX(e) {
	            var x = 0;
	            if (e.touches) {
	                x = e.touches[0].pageX;
	            }
	            return x;
	        },

	        start: function start(e) {
	            my.Touch.startX = my.Touch.getX(e);
	            my.Touch.busy = true;
	            my.Helper.suppressBrowserDefault(e);
	        },

	        isBusy: function isBusy() {
	            var busy = false;
	            if (my.Touch.busy) {
	                busy = true;
	            }
	            return busy;
	        },

	        /* Handle touch event position within the navigation div */
	        handle: function handle(e) {
	            if (my.Touch.isBusy && my.Touch.isOnNavigationDiv(e)) {
	                var max = my.circular ? my.max - my.imageFocusMax * 2 - 1 : my.max - 1;
	                if (my.Touch.first) {
	                    my.Touch.stopX = (max - my.imageID) * (my.imagesDivWidth / max);
	                    my.Touch.first = false;
	                }
	                var newX = -(my.Touch.getX(e) - my.Touch.startX - my.Touch.stopX);

	                /* Map x-axis touch coordinates in range of the ImageFlow width */
	                if (newX < 0) {
	                    newX = 0;
	                }
	                if (newX > my.imagesDivWidth) {
	                    newX = my.imagesDivWidth;
	                }

	                my.Touch.x = newX;

	                var imageID = Math.round(newX / (my.imagesDivWidth / max));
	                imageID = max - imageID;
	                if (my.imageID !== imageID) {
	                    if (my.circular) {
	                        imageID = imageID + my.imageFocusMax;
	                    }
	                    my.glideOnEvent(imageID);
	                }
	                my.Helper.suppressBrowserDefault(e);
	            }
	        },

	        stop: function stop() {
	            my.Touch.stopX = my.Touch.x;
	            my.Touch.busy = false;
	        }
	    };

	    /* Key support */
	    this.Key = {
	        /* Init key event listener */
	        init: function init() {
	            document.onkeydown = function (event) {
	                my.Key.handle(event);
	            };
	        },

	        /* Handle the arrow keys */
	        handle: function handle(event) {
	            var charCode = my.Key.get(event);
	            switch (charCode) {
	                /* Right arrow key */
	                case 39:
	                    my.MouseWheel.handle(-1);
	                    break;

	                /* Left arrow key */
	                case 37:
	                    my.MouseWheel.handle(1);
	                    break;
	            }
	        },

	        /* Get the current keycode */
	        get: function get(event) {
	            event = event || window.event;
	            return event.keyCode;
	        }
	    };

	    /* Helper functions */
	    this.Helper = {
	        /* Add events */
	        addEvent: function addEvent(obj, type, fn) {
	            if (obj.addEventListener) {
	                obj.addEventListener(type, fn, false);
	            } else if (obj.attachEvent) {
	                obj["e" + type + fn] = fn;
	                obj[type + fn] = function () {
	                    obj["e" + type + fn](window.event);
	                };
	                obj.attachEvent("on" + type, obj[type + fn]);
	            }
	        },

	        /* Remove events */
	        removeEvent: function removeEvent(obj, type, fn) {
	            if (obj.removeEventListener) {
	                obj.removeEventListener(type, fn, false);
	            } else if (obj.detachEvent) {
	                /* The IE breaks if you're trying to detach an unattached event /msdn.microsoft.com/en-us/library/ms536411(VS.85).aspx */
	                if (obj[type + fn] === undefined) {
	                    alert('Helper.removeEvent » Pointer to detach event is undefined - perhaps you are trying to detach an unattached event?');
	                }
	                obj.detachEvent('on' + type, obj[type + fn]);
	                obj[type + fn] = null;
	                obj['e' + type + fn] = null;
	            }
	        },

	        /* Set image opacity */
	        setOpacity: function setOpacity(object, value) {
	            if (my.opacity === true) {
	                object.style.opacity = value / 10;
	                object.style.filter = 'alpha(opacity=' + value * 10 + ')';
	            }
	        },

	        /* Create HTML elements */
	        createDocumentElement: function createDocumentElement(type, id, optionalClass) {
	            var element = document.createElement(type);
	            element.setAttribute('id', my.ImageFlowID + '_' + id);
	            if (optionalClass !== undefined) {
	                id += ' ' + optionalClass;
	            }
	            my.Helper.setClassName(element, id);
	            return element;
	        },

	        /* Set CSS class */
	        setClassName: function setClassName(element, className) {
	            if (element) {
	                element.setAttribute('class', className);
	                element.setAttribute('className', className);
	            }
	        },

	        /* Suppress default browser behaviour to avoid image/text selection while dragging */
	        suppressBrowserDefault: function suppressBrowserDefault(e) {
	            if (e.preventDefault) {
	                e.preventDefault();
	            } else {
	                e.returnValue = false;
	            }
	            return false;
	        },

	        /* Add functions to the window.onresize event - can not be done by addEvent */
	        addResizeEvent: function addResizeEvent() {
	            var otherFunctions = window.onresize;
	            if (typeof window.onresize != 'function') {
	                window.onresize = function () {
	                    my.refresh();
	                };
	            } else {
	                window.onresize = function () {
	                    if (otherFunctions) {
	                        otherFunctions();
	                    }
	                    my.refresh();
	                };
	            }
	        }
	    };
	};

	/* DOMContentLoaded event handler - by Tanny O'Haley [4] */
	var domReadyEvent = {
	    name: "domReadyEvent",
	    /* Array of DOMContentLoaded event handlers.*/
	    events: {},
	    domReadyID: 1,
	    bDone: false,
	    DOMContentLoadedCustom: null,

	    /* Function that adds DOMContentLoaded listeners to the array.*/
	    add: function add(handler) {
	        /* Assign each event handler a unique ID. If the handler has an ID, it has already been added to the events object or been run.*/
	        if (!handler.$$domReadyID) {
	            handler.$$domReadyID = this.domReadyID++;

	            /* If the DOMContentLoaded event has happened, run the function. */
	            if (this.bDone) {
	                handler();
	            }

	            /* store the event handler in the hash table */
	            this.events[handler.$$domReadyID] = handler;
	        }
	    },

	    remove: function remove(handler) {
	        /* Delete the event handler from the hash table */
	        if (handler.$$domReadyID) {
	            delete this.events[handler.$$domReadyID];
	        }
	    },

	    /* Function to process the DOMContentLoaded events array. */
	    run: function run() {
	        /* quit if this function has already been called */
	        if (this.bDone) {
	            return;
	        }

	        /* Flag this function so we don't do the same thing twice */
	        this.bDone = true;

	        /* iterates through array of registered functions */
	        for (var i in this.events) {
	            this.events[i]();
	        }
	    },

	    schedule: function schedule() {
	        /* Quit if the init function has already been called*/
	        if (this.bDone) {
	            return;
	        }

	        /* First, check for Safari or KHTML.*/
	        if (/KHTML|WebKit/i.test(navigator.userAgent)) {
	            if (/loaded|complete/.test(document.readyState)) {
	                this.run();
	            } else {
	                /* Not ready yet, wait a little more.*/
	                setTimeout(this.name + ".schedule()", 100);
	            }
	        } else if (document.getElementById("__ie_onload")) {
	            /* Second, check for IE.*/
	            return true;
	        }

	        /* Check for custom developer provided function.*/
	        if (typeof this.DOMContentLoadedCustom === "function") {
	            /* if DOM methods are supported, and the body element exists (using a double-check
	            including document.body, for the benefit of older moz builds [eg ns7.1] in which
	            getElementsByTagName('body')[0] is undefined, unless this script is in the body section) */
	            if (typeof document.getElementsByTagName !== 'undefined' && (document.getElementsByTagName('body')[0] !== null || document.body !== null)) {
	                /* Call custom function. */
	                if (this.DOMContentLoadedCustom()) {
	                    this.run();
	                } else {
	                    /* Not ready yet, wait a little more. */
	                    setTimeout(this.name + ".schedule()", 250);
	                }
	            }
	        }
	        return true;
	    },

	    init: function init() {
	        /* If addEventListener supports the DOMContentLoaded event.*/
	        if (document.addEventListener) {
	            document.addEventListener("DOMContentLoaded", function () {
	                domReadyEvent.run();
	            }, false);
	        }

	        /* Schedule to run the init function.*/
	        setTimeout("domReadyEvent.schedule()", 100);

	        function run() {
	            domReadyEvent.run();
	        }

	        /* Just in case window.onload happens first, add it to onload using an available method.*/
	        if (typeof addEvent !== "undefined") {
	            addEvent(window, "load", run);
	        } else if (document.addEventListener) {
	            document.addEventListener("load", run, false);
	        } else if (typeof window.onload === "function") {
	            var oldonload = window.onload;
	            window.onload = function () {
	                domReadyEvent.run();
	                oldonload();
	            };
	        } else {
	            window.onload = run;
	        }
	    }
	};

	var domReady = function domReady(handler) {
	    domReadyEvent.add(handler);
	};
	//domReadyEvent.init();


	/* Create ImageFlow instances when the DOM structure has been loaded */
	// domReady(function ()
	// {
	//     var instanceOne = new ImageFlow();
	//     instanceOne.init({ ImageFlowID: 'starsIF',
	//         captions: false,
	//         slider: false,
	//         startID: 1,
	//         onClick: function () {
	//           alert(1);
	//          },
	//     });
	// });

/***/ },

/***/ 387:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery, $, __webpack_provided_window_dot_jQuery) {"use strict";

	var _typeof2 = __webpack_require__(262);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	 * Swiper 2.7.6
	 * Mobile touch slider and framework with hardware accelerated transitions
	 *
	 * http://www.idangero.us/sliders/swiper/
	 *
	 * Copyright 2010-2015, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 *
	 * Licensed under GPL & MIT
	 *
	 * Released on: February 11, 2015
	*/
	var Swiper = function Swiper(a, b) {
	    "use strict";

	    function c(a, b) {
	        return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b);
	    }
	    function d(a) {
	        return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1;
	    }
	    function e() {
	        var a = G - J;
	        return b.freeMode && (a = G - J), b.slidesPerView > D.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a;
	    }
	    function f() {
	        function a(a) {
	            var c,
	                d,
	                e = function e() {
	                "undefined" != typeof D && null !== D && (void 0 !== D.imagesLoaded && D.imagesLoaded++, D.imagesLoaded === D.imagesToLoad.length && (D.reInit(), b.onImagesReady && D.fireCallback(b.onImagesReady, D)));
	            };
	            a.complete ? e() : (d = a.currentSrc || a.getAttribute("src"), d ? (c = new Image(), c.onload = e, c.onerror = e, c.src = d) : e());
	        }
	        var d = D.h.addEventListener,
	            e = "wrapper" === b.eventTarget ? D.wrapper : D.container;
	        if (D.browser.ie10 || D.browser.ie11 ? (d(e, D.touchEvents.touchStart, p), d(document, D.touchEvents.touchMove, q), d(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", D.resizeFix), g(), D._wheelEvent = !1, b.mousewheelControl) {
	            if (void 0 !== document.onmousewheel && (D._wheelEvent = "mousewheel"), !D._wheelEvent) try {
	                new WheelEvent("wheel"), D._wheelEvent = "wheel";
	            } catch (f) {}
	            D._wheelEvent || (D._wheelEvent = "DOMMouseScroll"), D._wheelEvent && d(D.container, D._wheelEvent, j);
	        }
	        if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
	            D.imagesToLoad = c("img", D.container);
	            for (var h = 0; h < D.imagesToLoad.length; h++) {
	                a(D.imagesToLoad[h]);
	            }
	        }
	    }
	    function g() {
	        var a,
	            d = D.h.addEventListener;
	        if (b.preventLinks) {
	            var e = c("a", D.container);
	            for (a = 0; a < e.length; a++) {
	                d(e[a], "click", n);
	            }
	        }
	        if (b.releaseFormElements) {
	            var f = c("input, textarea, select", D.container);
	            for (a = 0; a < f.length; a++) {
	                d(f[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(f[a], "mousedown", o, !0);
	            }
	        }
	        if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) {
	            d(D.slides[a], "click", k);
	        }if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) {
	            d(D.slides[a], D.touchEvents.touchStart, l);
	        }
	    }
	    function h() {
	        var a,
	            d = D.h.removeEventListener;
	        if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) {
	            d(D.slides[a], "click", k);
	        }if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) {
	            d(D.slides[a], D.touchEvents.touchStart, l);
	        }if (b.releaseFormElements) {
	            var e = c("input, textarea, select", D.container);
	            for (a = 0; a < e.length; a++) {
	                d(e[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(e[a], "mousedown", o, !0);
	            }
	        }
	        if (b.preventLinks) {
	            var f = c("a", D.container);
	            for (a = 0; a < f.length; a++) {
	                d(f[a], "click", n);
	            }
	        }
	    }
	    function i(a) {
	        var b = a.keyCode || a.charCode;
	        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
	            if (37 === b || 39 === b || 38 === b || 40 === b) {
	                for (var c = !1, d = D.h.getOffset(D.container), e = D.h.windowScroll().left, f = D.h.windowScroll().top, g = D.h.windowWidth(), h = D.h.windowHeight(), i = [[d.left, d.top], [d.left + D.width, d.top], [d.left, d.top + D.height], [d.left + D.width, d.top + D.height]], j = 0; j < i.length; j++) {
	                    var k = i[j];
	                    k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0);
	                }
	                if (!c) return;
	            }
	            N ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && D.swipeNext(), 37 === b && D.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && D.swipeNext(), 38 === b && D.swipePrev());
	        }
	    }
	    function j(a) {
	        var c = D._wheelEvent,
	            d = 0;
	        if (a.detail) d = -a.detail;else if ("mousewheel" === c) {
	            if (b.mousewheelControlForceToAxis) {
	                if (N) {
	                    if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;
	                    d = a.wheelDeltaX;
	                } else {
	                    if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;
	                    d = a.wheelDeltaY;
	                }
	            } else d = a.wheelDelta;
	        } else if ("DOMMouseScroll" === c) d = -a.detail;else if ("wheel" === c) if (b.mousewheelControlForceToAxis) {
	            if (N) {
	                if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;
	                d = -a.deltaX;
	            } else {
	                if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;
	                d = -a.deltaY;
	            }
	        } else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;
	        if (b.freeMode) {
	            var f = D.getWrapperTranslate() + d;
	            if (f > 0 && (f = 0), f < -e() && (f = -e()), D.setWrapperTransition(0), D.setWrapperTranslate(f), D.updateActiveSlide(f), 0 === f || f === -e()) return;
	        } else new Date().getTime() - V > 60 && (0 > d ? D.swipeNext() : D.swipePrev()), V = new Date().getTime();
	        return b.autoplay && D.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1;
	    }
	    function k(a) {
	        D.allowSlideClick && (m(a), D.fireCallback(b.onSlideClick, D, a));
	    }
	    function l(a) {
	        m(a), D.fireCallback(b.onSlideTouch, D, a);
	    }
	    function m(a) {
	        if (a.currentTarget) D.clickedSlide = a.currentTarget;else {
	            var c = a.srcElement;
	            do {
	                if (c.className.indexOf(b.slideClass) > -1) break;
	                c = c.parentNode;
	            } while (c);D.clickedSlide = c;
	        }
	        D.clickedSlideIndex = D.slides.indexOf(D.clickedSlide), D.clickedSlideLoopIndex = D.clickedSlideIndex - (D.loopedSlides || 0);
	    }
	    function n(a) {
	        return D.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in a && a.stopPropagation(), !1);
	    }
	    function o(a) {
	        return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1;
	    }
	    function p(a) {
	        if (b.preventLinks && (D.allowLinks = !0), D.isTouched || b.onlyExternal) return !1;
	        var c = a.target || a.srcElement;
	        document.activeElement && document.activeElement !== document.body && document.activeElement !== c && document.activeElement.blur();
	        var d = "input select textarea".split(" ");
	        if (b.noSwiping && c && t(c)) return !1;
	        if (_ = !1, D.isTouched = !0, $ = "touchstart" === a.type, !$ && "which" in a && 3 === a.which) return D.isTouched = !1, !1;
	        if (!$ || 1 === a.targetTouches.length) {
	            D.callPlugins("onTouchStartBegin"), !$ && !D.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
	            var e = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
	                f = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
	            D.touches.startX = D.touches.currentX = e, D.touches.startY = D.touches.currentY = f, D.touches.start = D.touches.current = N ? e : f, D.setWrapperTransition(0), D.positions.start = D.positions.current = D.getWrapperTranslate(), D.setWrapperTranslate(D.positions.start), D.times.start = new Date().getTime(), I = void 0, b.moveStartThreshold > 0 && (X = !1), b.onTouchStart && D.fireCallback(b.onTouchStart, D, a), D.callPlugins("onTouchStartEnd");
	        }
	    }
	    function q(a) {
	        if (D.isTouched && !b.onlyExternal && (!$ || "mousemove" !== a.type)) {
	            var c = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
	                d = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;
	            if ("undefined" == typeof I && N && (I = !!(I || Math.abs(d - D.touches.startY) > Math.abs(c - D.touches.startX))), "undefined" != typeof I || N || (I = !!(I || Math.abs(d - D.touches.startY) < Math.abs(c - D.touches.startX))), I) return void (D.isTouched = !1);
	            if (N) {
	                if (!b.swipeToNext && c < D.touches.startX || !b.swipeToPrev && c > D.touches.startX) return;
	            } else if (!b.swipeToNext && d < D.touches.startY || !b.swipeToPrev && d > D.touches.startY) return;
	            if (a.assignedToSwiper) return void (D.isTouched = !1);
	            if (a.assignedToSwiper = !0, b.preventLinks && (D.allowLinks = !1), b.onSlideClick && (D.allowSlideClick = !1), b.autoplay && D.stopAutoplay(!0), !$ || 1 === a.touches.length) {
	                if (D.isMoved || (D.callPlugins("onTouchMoveStart"), b.loop && (D.fixLoop(), D.positions.start = D.getWrapperTranslate()), b.onTouchMoveStart && D.fireCallback(b.onTouchMoveStart, D)), D.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, D.touches.current = N ? c : d, D.positions.current = (D.touches.current - D.touches.start) * b.touchRatio + D.positions.start, D.positions.current > 0 && b.onResistanceBefore && D.fireCallback(b.onResistanceBefore, D, D.positions.current), D.positions.current < -e() && b.onResistanceAfter && D.fireCallback(b.onResistanceAfter, D, Math.abs(D.positions.current + e())), b.resistance && "100%" !== b.resistance) {
	                    var f;
	                    if (D.positions.current > 0 && (f = 1 - D.positions.current / J / 2, D.positions.current = .5 > f ? J / 2 : D.positions.current * f), D.positions.current < -e()) {
	                        var g = (D.touches.current - D.touches.start) * b.touchRatio + (e() + D.positions.start);
	                        f = (J + g) / J;
	                        var h = D.positions.current - g * (1 - f) / 2,
	                            i = -e() - J / 2;
	                        D.positions.current = i > h || 0 >= f ? i : h;
	                    }
	                }
	                if (b.resistance && "100%" === b.resistance && (D.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (D.positions.current = 0), D.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (D.positions.current = -e())), !b.followFinger) return;
	                if (b.moveStartThreshold) {
	                    if (Math.abs(D.touches.current - D.touches.start) > b.moveStartThreshold || X) {
	                        if (!X) return X = !0, void (D.touches.start = D.touches.current);
	                        D.setWrapperTranslate(D.positions.current);
	                    } else D.positions.current = D.positions.start;
	                } else D.setWrapperTranslate(D.positions.current);
	                return (b.freeMode || b.watchActiveIndex) && D.updateActiveSlide(D.positions.current), b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grabbing", D.container.style.cursor = "-moz-grabbin", D.container.style.cursor = "-webkit-grabbing"), Y || (Y = D.touches.current), Z || (Z = new Date().getTime()), D.velocity = (D.touches.current - Y) / (new Date().getTime() - Z) / 2, Math.abs(D.touches.current - Y) < 2 && (D.velocity = 0), Y = D.touches.current, Z = new Date().getTime(), D.callPlugins("onTouchMoveEnd"), b.onTouchMove && D.fireCallback(b.onTouchMove, D, a), !1;
	            }
	        }
	    }
	    function r(a) {
	        if (I && D.swipeReset(), !b.onlyExternal && D.isTouched) {
	            D.isTouched = !1, b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grab", D.container.style.cursor = "-moz-grab", D.container.style.cursor = "-webkit-grab"), D.positions.current || 0 === D.positions.current || (D.positions.current = D.positions.start), b.followFinger && D.setWrapperTranslate(D.positions.current), D.times.end = new Date().getTime(), D.touches.diff = D.touches.current - D.touches.start, D.touches.abs = Math.abs(D.touches.diff), D.positions.diff = D.positions.current - D.positions.start, D.positions.abs = Math.abs(D.positions.diff);
	            var c = D.positions.diff,
	                d = D.positions.abs,
	                f = D.times.end - D.times.start;
	            5 > d && 300 > f && D.allowLinks === !1 && (b.freeMode || 0 === d || D.swipeReset(), b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0)), setTimeout(function () {
	                "undefined" != typeof D && null !== D && (b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0));
	            }, 100);
	            var g = e();
	            if (!D.isMoved && b.freeMode) return D.isMoved = !1, b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
	            if (!D.isMoved || D.positions.current > 0 || D.positions.current < -g) return D.swipeReset(), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
	            if (D.isMoved = !1, b.freeMode) {
	                if (b.freeModeFluid) {
	                    var h,
	                        i = 1e3 * b.momentumRatio,
	                        j = D.velocity * i,
	                        k = D.positions.current + j,
	                        l = !1,
	                        m = 20 * Math.abs(D.velocity) * b.momentumBounceRatio;
	                    -g > k && (b.momentumBounce && D.support.transitions ? (-m > k + g && (k = -g - m), h = -g, l = !0, _ = !0) : k = -g), k > 0 && (b.momentumBounce && D.support.transitions ? (k > m && (k = m), h = 0, l = !0, _ = !0) : k = 0), 0 !== D.velocity && (i = Math.abs((k - D.positions.current) / D.velocity)), D.setWrapperTranslate(k), D.setWrapperTransition(i), b.momentumBounce && l && D.wrapperTransitionEnd(function () {
	                        _ && (b.onMomentumBounce && D.fireCallback(b.onMomentumBounce, D), D.callPlugins("onMomentumBounce"), D.setWrapperTranslate(h), D.setWrapperTransition(300));
	                    }), D.updateActiveSlide(k);
	                }
	                return (!b.freeModeFluid || f >= 300) && D.updateActiveSlide(D.positions.current), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
	            }
	            H = 0 > c ? "toNext" : "toPrev", "toNext" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipeNext(!0, !0)), "toPrev" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipePrev(!0, !0));
	            var n = 0;
	            if ("auto" === b.slidesPerView) {
	                for (var o, p = Math.abs(D.getWrapperTranslate()), q = 0, r = 0; r < D.slides.length; r++) {
	                    if (o = N ? D.slides[r].getWidth(!0, b.roundLengths) : D.slides[r].getHeight(!0, b.roundLengths), q += o, q > p) {
	                        n = o;
	                        break;
	                    }
	                }n > J && (n = J);
	            } else n = F * b.slidesPerView;
	            "toNext" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipeNext(!0, !0) : D.swipeReset()), "toPrev" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipePrev(!0, !0) : D.swipeReset()), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), D.callPlugins("onTouchEnd");
	        }
	    }
	    function s(a, b) {
	        return a && a.getAttribute("class") && a.getAttribute("class").indexOf(b) > -1;
	    }
	    function t(a) {
	        var c = !1;
	        do {
	            s(a, b.noSwipingClass) && (c = !0), a = a.parentElement;
	        } while (!c && a.parentElement && !s(a, b.wrapperClass));return !c && s(a, b.wrapperClass) && s(a, b.noSwipingClass) && (c = !0), c;
	    }
	    function u(a, b) {
	        var c,
	            d = document.createElement("div");
	        return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML;
	    }
	    function v(a, c, d) {
	        function e() {
	            var f = +new Date(),
	                l = f - g;
	            h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (D.setWrapperTranslate(Math.ceil(h)), D._DOMAnimating = !0, window.setTimeout(function () {
	                e();
	            }, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && D.fireCallback(b.onSlideChangeEnd, D, j) : D.fireCallback(b.onSlideChangeEnd, D, j)), D.setWrapperTranslate(a), D._DOMAnimating = !1);
	        }
	        var f = "to" === c && d.speed >= 0 ? d.speed : b.speed,
	            g = +new Date();
	        if (D.support.transitions || !b.DOMAnimation) D.setWrapperTranslate(a), D.setWrapperTransition(f);else {
	            var h = D.getWrapperTranslate(),
	                i = Math.ceil((a - h) / f * (1e3 / 60)),
	                j = h > a ? "toNext" : "toPrev",
	                k = "toNext" === j ? h > a : a > h;
	            if (D._DOMAnimating) return;
	            e();
	        }
	        D.updateActiveSlide(a), b.onSlideNext && "next" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideNext, D, a), b.onSlidePrev && "prev" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlidePrev, D, a), b.onSlideReset && "reset" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideReset, D, a), "next" !== c && "prev" !== c && "to" !== c || d.runCallbacks !== !0 || w(c);
	    }
	    function w(a) {
	        if (D.callPlugins("onSlideChangeStart"), b.onSlideChangeStart) if (b.queueStartCallbacks && D.support.transitions) {
	            if (D._queueStartCallbacks) return;
	            D._queueStartCallbacks = !0, D.fireCallback(b.onSlideChangeStart, D, a), D.wrapperTransitionEnd(function () {
	                D._queueStartCallbacks = !1;
	            });
	        } else D.fireCallback(b.onSlideChangeStart, D, a);
	        if (b.onSlideChangeEnd) if (D.support.transitions) {
	            if (b.queueEndCallbacks) {
	                if (D._queueEndCallbacks) return;
	                D._queueEndCallbacks = !0, D.wrapperTransitionEnd(function (c) {
	                    D.fireCallback(b.onSlideChangeEnd, c, a);
	                });
	            } else D.wrapperTransitionEnd(function (c) {
	                D.fireCallback(b.onSlideChangeEnd, c, a);
	            });
	        } else b.DOMAnimation || setTimeout(function () {
	            D.fireCallback(b.onSlideChangeEnd, D, a);
	        }, 10);
	    }
	    function x() {
	        var a = D.paginationButtons;
	        if (a) for (var b = 0; b < a.length; b++) {
	            D.h.removeEventListener(a[b], "click", z);
	        }
	    }
	    function y() {
	        var a = D.paginationButtons;
	        if (a) for (var b = 0; b < a.length; b++) {
	            D.h.addEventListener(a[b], "click", z);
	        }
	    }
	    function z(a) {
	        for (var c, d = a.target || a.srcElement, e = D.paginationButtons, f = 0; f < e.length; f++) {
	            d === e[f] && (c = f);
	        }b.autoplay && D.stopAutoplay(!0), D.swipeTo(c);
	    }
	    function A() {
	        ab = setTimeout(function () {
	            b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearTimeout(ab), ab = void 0) : D.swipeTo(0)), D.wrapperTransitionEnd(function () {
	                "undefined" != typeof ab && A();
	            });
	        }, b.autoplay);
	    }
	    function B() {
	        D.calcSlides(), b.loader.slides.length > 0 && 0 === D.slides.length && D.loadSlides(), b.loop && D.createLoop(), D.init(), f(), b.pagination && D.createPagination(!0), b.loop || b.initialSlide > 0 ? D.swipeTo(b.initialSlide, 0, !1) : D.updateActiveSlide(0), b.autoplay && D.startAutoplay(), D.centerIndex = D.activeIndex, b.onSwiperCreated && D.fireCallback(b.onSwiperCreated, D), D.callPlugins("onSwiperCreated");
	    }
	    if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
	        var C = HTMLElement.prototype;
	        C.__defineGetter__ && C.__defineGetter__("outerHTML", function () {
	            return new XMLSerializer().serializeToString(this);
	        });
	    }
	    if (window.getComputedStyle || (window.getComputedStyle = function (a) {
	        return this.el = a, this.getPropertyValue = function (b) {
	            var c = /(\-([a-z]){1})/g;
	            return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function () {
	                return arguments[2].toUpperCase();
	            })), a.currentStyle[b] ? a.currentStyle[b] : null;
	        }, this;
	    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
	        for (var c = b || 0, d = this.length; d > c; c++) {
	            if (this[c] === a) return c;
	        }return -1;
	    }), (document.querySelectorAll || __webpack_provided_window_dot_jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
	        var D = this;
	        D.touches = {
	            start: 0,
	            startX: 0,
	            startY: 0,
	            current: 0,
	            currentX: 0,
	            currentY: 0,
	            diff: 0,
	            abs: 0
	        }, D.positions = {
	            start: 0,
	            abs: 0,
	            diff: 0,
	            current: 0
	        }, D.times = {
	            start: 0,
	            end: 0
	        }, D.id = new Date().getTime(), D.container = a.nodeType ? a : c(a)[0], D.isTouched = !1, D.isMoved = !1, D.activeIndex = 0, D.centerIndex = 0, D.activeLoaderIndex = 0, D.activeLoopIndex = 0, D.previousIndex = null, D.velocity = 0, D.snapGrid = [], D.slidesGrid = [], D.imagesToLoad = [], D.imagesLoaded = 0, D.wrapperLeft = 0, D.wrapperRight = 0, D.wrapperTop = 0, D.wrapperBottom = 0, D.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
	        var E,
	            F,
	            G,
	            H,
	            I,
	            J,
	            K = {
	            eventTarget: "wrapper",
	            mode: "horizontal",
	            touchRatio: 1,
	            speed: 300,
	            freeMode: !1,
	            freeModeFluid: !1,
	            momentumRatio: 1,
	            momentumBounce: !0,
	            momentumBounceRatio: 1,
	            slidesPerView: 1,
	            slidesPerGroup: 1,
	            slidesPerViewFit: !0,
	            simulateTouch: !0,
	            followFinger: !0,
	            shortSwipes: !0,
	            longSwipesRatio: .5,
	            moveStartThreshold: !1,
	            onlyExternal: !1,
	            createPagination: !0,
	            pagination: !1,
	            paginationElement: "span",
	            paginationClickable: !1,
	            paginationAsRange: !0,
	            resistance: !0,
	            scrollContainer: !1,
	            preventLinks: !0,
	            preventLinksPropagation: !1,
	            noSwiping: !1,
	            noSwipingClass: "swiper-no-swiping",
	            initialSlide: 0,
	            keyboardControl: !1,
	            mousewheelControl: !1,
	            mousewheelControlForceToAxis: !1,
	            useCSS3Transforms: !0,
	            autoplay: !1,
	            autoplayDisableOnInteraction: !0,
	            autoplayStopOnLast: !1,
	            loop: !1,
	            loopAdditionalSlides: 0,
	            roundLengths: !1,
	            calculateHeight: !1,
	            cssWidthAndHeight: !1,
	            updateOnImagesReady: !0,
	            releaseFormElements: !0,
	            watchActiveIndex: !1,
	            visibilityFullFit: !1,
	            offsetPxBefore: 0,
	            offsetPxAfter: 0,
	            offsetSlidesBefore: 0,
	            offsetSlidesAfter: 0,
	            centeredSlides: !1,
	            queueStartCallbacks: !1,
	            queueEndCallbacks: !1,
	            autoResize: !0,
	            resizeReInit: !1,
	            DOMAnimation: !0,
	            loader: {
	                slides: [],
	                slidesHTMLType: "inner",
	                surroundGroups: 1,
	                logic: "reload",
	                loadAllSlides: !1
	            },
	            swipeToPrev: !0,
	            swipeToNext: !0,
	            slideElement: "div",
	            slideClass: "swiper-slide",
	            slideActiveClass: "swiper-slide-active",
	            slideVisibleClass: "swiper-slide-visible",
	            slideDuplicateClass: "swiper-slide-duplicate",
	            wrapperClass: "swiper-wrapper",
	            paginationElementClass: "swiper-pagination-switch",
	            paginationActiveClass: "swiper-active-switch",
	            paginationVisibleClass: "swiper-visible-switch"
	        };
	        b = b || {};
	        for (var L in K) {
	            if (L in b && "object" == (0, _typeof3["default"])(b[L])) for (var M in K[L]) {
	                M in b[L] || (b[L][M] = K[L][M]);
	            } else L in b || (b[L] = K[L]);
	        }D.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");
	        var N = "horizontal" === b.mode,
	            O = ["mousedown", "mousemove", "mouseup"];
	        D.browser.ie10 && (O = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), D.browser.ie11 && (O = ["pointerdown", "pointermove", "pointerup"]), D.touchEvents = {
	            touchStart: D.support.touch || !b.simulateTouch ? "touchstart" : O[0],
	            touchMove: D.support.touch || !b.simulateTouch ? "touchmove" : O[1],
	            touchEnd: D.support.touch || !b.simulateTouch ? "touchend" : O[2]
	        };
	        for (var P = D.container.childNodes.length - 1; P >= 0; P--) {
	            if (D.container.childNodes[P].className) for (var Q = D.container.childNodes[P].className.split(/\s+/), R = 0; R < Q.length; R++) {
	                Q[R] === b.wrapperClass && (E = D.container.childNodes[P]);
	            }
	        }D.wrapper = E, D._extendSwiperSlide = function (a) {
	            return a.append = function () {
	                return b.loop ? a.insertAfter(D.slides.length - D.loopedSlides) : (D.wrapper.appendChild(a), D.reInit()), a;
	            }, a.prepend = function () {
	                return b.loop ? (D.wrapper.insertBefore(a, D.slides[D.loopedSlides]), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.wrapper.insertBefore(a, D.wrapper.firstChild), D.reInit(), a;
	            }, a.insertAfter = function (c) {
	                if ("undefined" == typeof c) return !1;
	                var d;
	                return b.loop ? (d = D.slides[c + 1 + D.loopedSlides], d ? D.wrapper.insertBefore(a, d) : D.wrapper.appendChild(a), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : (d = D.slides[c + 1], D.wrapper.insertBefore(a, d)), D.reInit(), a;
	            }, a.clone = function () {
	                return D._extendSwiperSlide(a.cloneNode(!0));
	            }, a.remove = function () {
	                D.wrapper.removeChild(a), D.reInit();
	            }, a.html = function (b) {
	                return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a);
	            }, a.index = function () {
	                for (var b, c = D.slides.length - 1; c >= 0; c--) {
	                    a === D.slides[c] && (b = c);
	                }return b;
	            }, a.isActive = function () {
	                return a.index() === D.activeIndex ? !0 : !1;
	            }, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function (b) {
	                return a.swiperSlideDataStorage[b];
	            }, a.setData = function (b, c) {
	                return a.swiperSlideDataStorage[b] = c, a;
	            }, a.data = function (b, c) {
	                return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a);
	            }, a.getWidth = function (b, c) {
	                return D.h.getWidth(a, b, c);
	            }, a.getHeight = function (b, c) {
	                return D.h.getHeight(a, b, c);
	            }, a.getOffset = function () {
	                return D.h.getOffset(a);
	            }, a;
	        }, D.calcSlides = function (a) {
	            var c = D.slides ? D.slides.length : !1;
	            D.slides = [], D.displaySlides = [];
	            for (var d = 0; d < D.wrapper.childNodes.length; d++) {
	                if (D.wrapper.childNodes[d].className) for (var e = D.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++) {
	                    f[i] === b.slideClass && D.slides.push(D.wrapper.childNodes[d]);
	                }
	            }for (d = D.slides.length - 1; d >= 0; d--) {
	                D._extendSwiperSlide(D.slides[d]);
	            }c !== !1 && (c !== D.slides.length || a) && (h(), g(), D.updateActiveSlide(), D.params.pagination && D.createPagination(), D.callPlugins("numberOfSlidesChanged"));
	        }, D.createSlide = function (a, c, d) {
	            c = c || D.params.slideClass, d = d || b.slideElement;
	            var e = document.createElement(d);
	            return e.innerHTML = a || "", e.className = c, D._extendSwiperSlide(e);
	        }, D.appendSlide = function (a, b, c) {
	            return a ? a.nodeType ? D._extendSwiperSlide(a).append() : D.createSlide(a, b, c).append() : void 0;
	        }, D.prependSlide = function (a, b, c) {
	            return a ? a.nodeType ? D._extendSwiperSlide(a).prepend() : D.createSlide(a, b, c).prepend() : void 0;
	        }, D.insertSlideAfter = function (a, b, c, d) {
	            return "undefined" == typeof a ? !1 : b.nodeType ? D._extendSwiperSlide(b).insertAfter(a) : D.createSlide(b, c, d).insertAfter(a);
	        }, D.removeSlide = function (a) {
	            if (D.slides[a]) {
	                if (b.loop) {
	                    if (!D.slides[a + D.loopedSlides]) return !1;
	                    D.slides[a + D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop();
	                } else D.slides[a].remove();
	                return !0;
	            }
	            return !1;
	        }, D.removeLastSlide = function () {
	            return D.slides.length > 0 ? (b.loop ? (D.slides[D.slides.length - 1 - D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.slides[D.slides.length - 1].remove(), !0) : !1;
	        }, D.removeAllSlides = function () {
	            for (var a = D.slides.length, b = D.slides.length - 1; b >= 0; b--) {
	                D.slides[b].remove(), b === a - 1 && D.setWrapperTranslate(0);
	            }
	        }, D.getSlide = function (a) {
	            return D.slides[a];
	        }, D.getLastSlide = function () {
	            return D.slides[D.slides.length - 1];
	        }, D.getFirstSlide = function () {
	            return D.slides[0];
	        }, D.activeSlide = function () {
	            return D.slides[D.activeIndex];
	        }, D.fireCallback = function () {
	            var a = arguments[0];
	            if ("[object Array]" === Object.prototype.toString.call(a)) for (var c = 0; c < a.length; c++) {
	                "function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	            } else "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && D.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        }, D.addCallback = function (a, b) {
	            var c,
	                e = this;
	            return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b));
	        }, D.removeCallbacks = function (a) {
	            D.params["on" + a] && (D.params["on" + a] = null);
	        };
	        var S = [];
	        for (var T in D.plugins) {
	            if (b[T]) {
	                var U = D.plugins[T](D, b[T]);
	                U && S.push(U);
	            }
	        }D.callPlugins = function (a, b) {
	            b || (b = {});
	            for (var c = 0; c < S.length; c++) {
	                a in S[c] && S[c][a](b);
	            }
	        }, !D.browser.ie10 && !D.browser.ie11 || b.onlyExternal || D.wrapper.classList.add("swiper-wp8-" + (N ? "horizontal" : "vertical")), b.freeMode && (D.container.className += " swiper-free-mode"), D.initialized = !1, D.init = function (a, c) {
	            var d = D.h.getWidth(D.container, !1, b.roundLengths),
	                e = D.h.getHeight(D.container, !1, b.roundLengths);
	            if (d !== D.width || e !== D.height || a) {
	                D.width = d, D.height = e;
	                var f, g, h, i, j, k, l;
	                J = N ? d : e;
	                var m = D.wrapper;
	                if (a && D.calcSlides(c), "auto" === b.slidesPerView) {
	                    var n = 0,
	                        o = 0;
	                    b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - this.slides[0].getWidth(!0, b.roundLengths)) / 2, D.wrapperRight = (J - D.slides[D.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (D.wrapperTop = (J - D.slides[0].getHeight(!0, b.roundLengths)) / 2, D.wrapperBottom = (J - D.slides[D.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), N ? (D.wrapperLeft >= 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight >= 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop >= 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom >= 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), k = 0;
	                    var p = 0;
	                    for (D.snapGrid = [], D.slidesGrid = [], h = 0, l = 0; l < D.slides.length; l++) {
	                        f = D.slides[l].getWidth(!0, b.roundLengths), g = D.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));
	                        var q = N ? f : g;
	                        if (b.centeredSlides) {
	                            var r = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getWidth(!0, b.roundLengths),
	                                s = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getHeight(!0, b.roundLengths),
	                                t = N ? r : s;
	                            if (q > J) {
	                                if (b.slidesPerViewFit) D.snapGrid.push(k + D.wrapperLeft), D.snapGrid.push(k + q - J + D.wrapperLeft);else for (var u = 0; u <= Math.floor(q / (J + D.wrapperLeft)); u++) {
	                                    D.snapGrid.push(0 === u ? k + D.wrapperLeft : k + D.wrapperLeft + J * u);
	                                }D.slidesGrid.push(k + D.wrapperLeft);
	                            } else D.snapGrid.push(p), D.slidesGrid.push(p);
	                            p += q / 2 + t / 2;
	                        } else {
	                            if (q > J) {
	                                if (b.slidesPerViewFit) D.snapGrid.push(k), D.snapGrid.push(k + q - J);else if (0 !== J) for (var v = 0; v <= Math.floor(q / J); v++) {
	                                    D.snapGrid.push(k + J * v);
	                                } else D.snapGrid.push(k);
	                            } else D.snapGrid.push(k);
	                            D.slidesGrid.push(k);
	                        }
	                        k += q, n += f, o += g;
	                    }
	                    b.calculateHeight && (D.height = h), N ? (G = n + D.wrapperRight + D.wrapperLeft, b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = n + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = D.height + "px")) : (b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = D.width + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = o + "px"), G = o + D.wrapperTop + D.wrapperBottom);
	                } else if (b.scrollContainer) m.style.width = "", m.style.height = "", i = D.slides[0].getWidth(!0, b.roundLengths), j = D.slides[0].getHeight(!0, b.roundLengths), G = N ? i : j, m.style.width = i + "px", m.style.height = j + "px", F = N ? i : j;else {
	                    if (b.calculateHeight) {
	                        for (h = 0, j = 0, N || (D.container.style.height = ""), m.style.height = "", l = 0; l < D.slides.length; l++) {
	                            D.slides[l].style.height = "", h = Math.max(D.slides[l].getHeight(!0), h), N || (j += D.slides[l].getHeight(!0));
	                        }g = h, D.height = g, N ? j = g : (J = g, D.container.style.height = J + "px");
	                    } else g = N ? D.height : D.height / b.slidesPerView, b.roundLengths && (g = Math.ceil(g)), j = N ? D.height : D.slides.length * g;
	                    for (f = N ? D.width / b.slidesPerView : D.width, b.roundLengths && (f = Math.ceil(f)), i = N ? D.slides.length * f : D.width, F = N ? f : g, b.offsetSlidesBefore > 0 && (N ? D.wrapperLeft = F * b.offsetSlidesBefore : D.wrapperTop = F * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (N ? D.wrapperRight = F * b.offsetSlidesAfter : D.wrapperBottom = F * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - F) / 2, D.wrapperRight = (J - F) / 2) : (D.wrapperTop = (J - F) / 2, D.wrapperBottom = (J - F) / 2)), N ? (D.wrapperLeft > 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight > 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop > 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom > 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), G = N ? i + D.wrapperRight + D.wrapperLeft : j + D.wrapperTop + D.wrapperBottom, parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"), parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"), k = 0, D.snapGrid = [], D.slidesGrid = [], l = 0; l < D.slides.length; l++) {
	                        D.snapGrid.push(k), D.slidesGrid.push(k), k += F, parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (D.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (D.slides[l].style.height = g + "px");
	                    }
	                }
	                D.initialized ? (D.callPlugins("onInit"), b.onInit && D.fireCallback(b.onInit, D)) : (D.callPlugins("onFirstInit"), b.onFirstInit && D.fireCallback(b.onFirstInit, D)), D.initialized = !0;
	            }
	        }, D.reInit = function (a) {
	            D.init(!0, a);
	        }, D.resizeFix = function (a) {
	            D.callPlugins("beforeResizeFix"), D.init(b.resizeReInit || a), b.freeMode ? D.getWrapperTranslate() < -e() && (D.setWrapperTransition(0), D.setWrapperTranslate(-e())) : (D.swipeTo(b.loop ? D.activeLoopIndex : D.activeIndex, 0, !1), b.autoplay && (D.support.transitions && "undefined" != typeof ab ? "undefined" != typeof ab && (clearTimeout(ab), ab = void 0, D.startAutoplay()) : "undefined" != typeof bb && (clearInterval(bb), bb = void 0, D.startAutoplay()))), D.callPlugins("afterResizeFix");
	        }, D.destroy = function (a) {
	            var c = D.h.removeEventListener,
	                d = "wrapper" === b.eventTarget ? D.wrapper : D.container;
	            if (D.browser.ie10 || D.browser.ie11 ? (c(d, D.touchEvents.touchStart, p), c(document, D.touchEvents.touchMove, q), c(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (c(d, "touchstart", p), c(d, "touchmove", q), c(d, "touchend", r)), b.simulateTouch && (c(d, "mousedown", p), c(document, "mousemove", q), c(document, "mouseup", r))), b.autoResize && c(window, "resize", D.resizeFix), h(), b.paginationClickable && x(), b.mousewheelControl && D._wheelEvent && c(D.container, D._wheelEvent, j), b.keyboardControl && c(document, "keydown", i), b.autoplay && D.stopAutoplay(), a) {
	                D.wrapper.removeAttribute("style");
	                for (var e = 0; e < D.slides.length; e++) {
	                    D.slides[e].removeAttribute("style");
	                }
	            }
	            D.callPlugins("onDestroy"), __webpack_provided_window_dot_jQuery && __webpack_provided_window_dot_jQuery(D.container).data("swiper") && __webpack_provided_window_dot_jQuery(D.container).removeData("swiper"), window.Zepto && window.Zepto(D.container).data("swiper") && window.Zepto(D.container).removeData("swiper"), D = null;
	        }, D.disableKeyboardControl = function () {
	            b.keyboardControl = !1, D.h.removeEventListener(document, "keydown", i);
	        }, D.enableKeyboardControl = function () {
	            b.keyboardControl = !0, D.h.addEventListener(document, "keydown", i);
	        };
	        var V = new Date().getTime();
	        if (D.disableMousewheelControl = function () {
	            return D._wheelEvent ? (b.mousewheelControl = !1, D.h.removeEventListener(D.container, D._wheelEvent, j), !0) : !1;
	        }, D.enableMousewheelControl = function () {
	            return D._wheelEvent ? (b.mousewheelControl = !0, D.h.addEventListener(D.container, D._wheelEvent, j), !0) : !1;
	        }, b.grabCursor) {
	            var W = D.container.style;
	            W.cursor = "move", W.cursor = "grab", W.cursor = "-moz-grab", W.cursor = "-webkit-grab";
	        }
	        D.allowSlideClick = !0, D.allowLinks = !0;
	        var X,
	            Y,
	            Z,
	            $ = !1,
	            _ = !0;
	        D.swipeNext = function (a, c) {
	            "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipeNext");
	            var d = D.getWrapperTranslate().toFixed(2),
	                f = d;
	            if ("auto" === b.slidesPerView) {
	                for (var g = 0; g < D.snapGrid.length; g++) {
	                    if (-d >= D.snapGrid[g].toFixed(2) && -d < D.snapGrid[g + 1].toFixed(2)) {
	                        f = -D.snapGrid[g + 1];
	                        break;
	                    }
	                }
	            } else {
	                var h = F * b.slidesPerGroup;
	                f = -(Math.floor(Math.abs(d) / Math.floor(h)) * h + h);
	            }
	            return f < -e() && (f = -e()), f === d ? !1 : (v(f, "next", {
	                runCallbacks: a
	            }), !0);
	        }, D.swipePrev = function (a, c) {
	            "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipePrev");
	            var d,
	                e = Math.ceil(D.getWrapperTranslate());
	            if ("auto" === b.slidesPerView) {
	                d = 0;
	                for (var f = 1; f < D.snapGrid.length; f++) {
	                    if (-e === D.snapGrid[f]) {
	                        d = -D.snapGrid[f - 1];
	                        break;
	                    }
	                    if (-e > D.snapGrid[f] && -e < D.snapGrid[f + 1]) {
	                        d = -D.snapGrid[f];
	                        break;
	                    }
	                }
	            } else {
	                var g = F * b.slidesPerGroup;
	                d = -(Math.ceil(-e / g) - 1) * g;
	            }
	            return d > 0 && (d = 0), d === e ? !1 : (v(d, "prev", {
	                runCallbacks: a
	            }), !0);
	        }, D.swipeReset = function (a) {
	            "undefined" == typeof a && (a = !0), D.callPlugins("onSwipeReset");
	            {
	                var c,
	                    d = D.getWrapperTranslate(),
	                    f = F * b.slidesPerGroup;
	                -e();
	            }
	            if ("auto" === b.slidesPerView) {
	                c = 0;
	                for (var g = 0; g < D.snapGrid.length; g++) {
	                    if (-d === D.snapGrid[g]) return;
	                    if (-d >= D.snapGrid[g] && -d < D.snapGrid[g + 1]) {
	                        c = D.positions.diff > 0 ? -D.snapGrid[g + 1] : -D.snapGrid[g];
	                        break;
	                    }
	                }
	                -d >= D.snapGrid[D.snapGrid.length - 1] && (c = -D.snapGrid[D.snapGrid.length - 1]), d <= -e() && (c = -e());
	            } else c = 0 > d ? Math.round(d / f) * f : 0, d <= -e() && (c = -e());
	            return b.scrollContainer && (c = 0 > d ? d : 0), c < -e() && (c = -e()), b.scrollContainer && J > F && (c = 0), c === d ? !1 : (v(c, "reset", {
	                runCallbacks: a
	            }), !0);
	        }, D.swipeTo = function (a, c, d) {
	            a = parseInt(a, 10), D.callPlugins("onSwipeTo", {
	                index: a,
	                speed: c
	            }), b.loop && (a += D.loopedSlides);
	            var f = D.getWrapperTranslate();
	            if (!(!isFinite(a) || a > D.slides.length - 1 || 0 > a)) {
	                var g;
	                return g = "auto" === b.slidesPerView ? -D.slidesGrid[a] : -a * F, g < -e() && (g = -e()), g === f ? !1 : ("undefined" == typeof d && (d = !0), v(g, "to", {
	                    index: a,
	                    speed: c,
	                    runCallbacks: d
	                }), !0);
	            }
	        }, D._queueStartCallbacks = !1, D._queueEndCallbacks = !1, D.updateActiveSlide = function (a) {
	            if (D.initialized && 0 !== D.slides.length) {
	                D.previousIndex = D.activeIndex, "undefined" == typeof a && (a = D.getWrapperTranslate()), a > 0 && (a = 0);
	                var c;
	                if ("auto" === b.slidesPerView) {
	                    if (D.activeIndex = D.slidesGrid.indexOf(-a), D.activeIndex < 0) {
	                        for (c = 0; c < D.slidesGrid.length - 1 && !(-a > D.slidesGrid[c] && -a < D.slidesGrid[c + 1]); c++) {}
	                        var d = Math.abs(D.slidesGrid[c] + a),
	                            e = Math.abs(D.slidesGrid[c + 1] + a);
	                        D.activeIndex = e >= d ? c : c + 1;
	                    }
	                } else D.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / F);
	                if (D.activeIndex === D.slides.length && (D.activeIndex = D.slides.length - 1), D.activeIndex < 0 && (D.activeIndex = 0), D.slides[D.activeIndex]) {
	                    if (D.calcVisibleSlides(a), D.support.classList) {
	                        var f;
	                        for (c = 0; c < D.slides.length; c++) {
	                            f = D.slides[c], f.classList.remove(b.slideActiveClass), D.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
	                        }D.slides[D.activeIndex].classList.add(b.slideActiveClass);
	                    } else {
	                        var g = new RegExp("\\s*" + b.slideActiveClass),
	                            h = new RegExp("\\s*" + b.slideVisibleClass);
	                        for (c = 0; c < D.slides.length; c++) {
	                            D.slides[c].className = D.slides[c].className.replace(g, "").replace(h, ""), D.visibleSlides.indexOf(D.slides[c]) >= 0 && (D.slides[c].className += " " + b.slideVisibleClass);
	                        }D.slides[D.activeIndex].className += " " + b.slideActiveClass;
	                    }
	                    if (b.loop) {
	                        var i = D.loopedSlides;
	                        D.activeLoopIndex = D.activeIndex - i, D.activeLoopIndex >= D.slides.length - 2 * i && (D.activeLoopIndex = D.slides.length - 2 * i - D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = D.slides.length - 2 * i + D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = 0);
	                    } else D.activeLoopIndex = D.activeIndex;
	                    b.pagination && D.updatePagination(a);
	                }
	            }
	        }, D.createPagination = function (a) {
	            if (b.paginationClickable && D.paginationButtons && x(), D.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
	                var d = "",
	                    e = D.slides.length,
	                    f = e;
	                b.loop && (f -= 2 * D.loopedSlides);
	                for (var g = 0; f > g; g++) {
	                    d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
	                }D.paginationContainer.innerHTML = d;
	            }
	            D.paginationButtons = c("." + b.paginationElementClass, D.paginationContainer), a || D.updatePagination(), D.callPlugins("onCreatePagination"), b.paginationClickable && y();
	        }, D.updatePagination = function (a) {
	            if (b.pagination && !(D.slides.length < 1)) {
	                var d = c("." + b.paginationActiveClass, D.paginationContainer);
	                if (d) {
	                    var e = D.paginationButtons;
	                    if (0 !== e.length) {
	                        for (var f = 0; f < e.length; f++) {
	                            e[f].className = b.paginationElementClass;
	                        }var g = b.loop ? D.loopedSlides : 0;
	                        if (b.paginationAsRange) {
	                            D.visibleSlides || D.calcVisibleSlides(a);
	                            var h,
	                                i = [];
	                            for (h = 0; h < D.visibleSlides.length; h++) {
	                                var j = D.slides.indexOf(D.visibleSlides[h]) - g;
	                                b.loop && 0 > j && (j = D.slides.length - 2 * D.loopedSlides + j), b.loop && j >= D.slides.length - 2 * D.loopedSlides && (j = D.slides.length - 2 * D.loopedSlides - j, j = Math.abs(j)), i.push(j);
	                            }
	                            for (h = 0; h < i.length; h++) {
	                                e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
	                            }b.loop ? void 0 !== e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass);
	                        } else b.loop ? e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass);
	                    }
	                }
	            }
	        }, D.calcVisibleSlides = function (a) {
	            var c = [],
	                d = 0,
	                e = 0,
	                f = 0;
	            N && D.wrapperLeft > 0 && (a += D.wrapperLeft), !N && D.wrapperTop > 0 && (a += D.wrapperTop);
	            for (var g = 0; g < D.slides.length; g++) {
	                d += e, e = "auto" === b.slidesPerView ? N ? D.h.getWidth(D.slides[g], !0, b.roundLengths) : D.h.getHeight(D.slides[g], !0, b.roundLengths) : F, f = d + e;
	                var h = !1;
	                b.visibilityFullFit ? (d >= -a && -a + J >= f && (h = !0), -a >= d && f >= -a + J && (h = !0)) : (f > -a && -a + J >= f && (h = !0), d >= -a && -a + J > d && (h = !0), -a > d && f > -a + J && (h = !0)), h && c.push(D.slides[g]);
	            }
	            0 === c.length && (c = [D.slides[D.activeIndex]]), D.visibleSlides = c;
	        };
	        var ab, bb;
	        D.startAutoplay = function () {
	            if (D.support.transitions) {
	                if ("undefined" != typeof ab) return !1;
	                if (!b.autoplay) return;
	                D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), A();
	            } else {
	                if ("undefined" != typeof bb) return !1;
	                if (!b.autoplay) return;
	                D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), bb = setInterval(function () {
	                    b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearInterval(bb), bb = void 0) : D.swipeTo(0));
	                }, b.autoplay);
	            }
	        }, D.stopAutoplay = function (a) {
	            if (D.support.transitions) {
	                if (!ab) return;
	                ab && clearTimeout(ab), ab = void 0, a && !b.autoplayDisableOnInteraction && D.wrapperTransitionEnd(function () {
	                    A();
	                }), D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D);
	            } else bb && clearInterval(bb), bb = void 0, D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D);
	        }, D.loopCreated = !1, D.removeLoopedSlides = function () {
	            if (D.loopCreated) for (var a = 0; a < D.slides.length; a++) {
	                D.slides[a].getData("looped") === !0 && D.wrapper.removeChild(D.slides[a]);
	            }
	        }, D.createLoop = function () {
	            if (0 !== D.slides.length) {
	                D.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : Math.floor(b.slidesPerView) + b.loopAdditionalSlides, D.loopedSlides > D.slides.length && (D.loopedSlides = D.slides.length);
	                var a,
	                    c = "",
	                    d = "",
	                    e = "",
	                    f = D.slides.length,
	                    g = Math.floor(D.loopedSlides / f),
	                    h = D.loopedSlides % f;
	                for (a = 0; g * f > a; a++) {
	                    var i = a;
	                    if (a >= f) {
	                        var j = Math.floor(a / f);
	                        i = a - f * j;
	                    }
	                    e += D.slides[i].outerHTML;
	                }
	                for (a = 0; h > a; a++) {
	                    d += u(b.slideDuplicateClass, D.slides[a].outerHTML);
	                }for (a = f - h; f > a; a++) {
	                    c += u(b.slideDuplicateClass, D.slides[a].outerHTML);
	                }var k = c + e + E.innerHTML + e + d;
	                for (E.innerHTML = k, D.loopCreated = !0, D.calcSlides(), a = 0; a < D.slides.length; a++) {
	                    (a < D.loopedSlides || a >= D.slides.length - D.loopedSlides) && D.slides[a].setData("looped", !0);
	                }D.callPlugins("onCreateLoop");
	            }
	        }, D.fixLoop = function () {
	            var a;
	            D.activeIndex < D.loopedSlides ? (a = D.slides.length - 3 * D.loopedSlides + D.activeIndex, D.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && D.activeIndex >= 2 * D.loopedSlides || D.activeIndex > D.slides.length - 2 * b.slidesPerView) && (a = -D.slides.length + D.activeIndex + D.loopedSlides, D.swipeTo(a, 0, !1));
	        }, D.loadSlides = function () {
	            var a = "";
	            D.activeLoaderIndex = 0;
	            for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++) {
	                a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
	            }D.wrapper.innerHTML = a, D.calcSlides(!0), b.loader.loadAllSlides || D.wrapperTransitionEnd(D.reloadSlides, !0);
	        }, D.reloadSlides = function () {
	            var a = b.loader.slides,
	                c = parseInt(D.activeSlide().data("swiperindex"), 10);
	            if (!(0 > c || c > a.length - 1)) {
	                D.activeLoaderIndex = c;
	                var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
	                    e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);
	                if (c > 0) {
	                    var f = -F * (c - d);
	                    D.setWrapperTranslate(f), D.setWrapperTransition(0);
	                }
	                var g;
	                if ("reload" === b.loader.logic) {
	                    D.wrapper.innerHTML = "";
	                    var h = "";
	                    for (g = d; e >= g; g++) {
	                        h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
	                    }D.wrapper.innerHTML = h;
	                } else {
	                    var i = 1e3,
	                        j = 0;
	                    for (g = 0; g < D.slides.length; g++) {
	                        var k = D.slides[g].data("swiperindex");
	                        d > k || k > e ? D.wrapper.removeChild(D.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j));
	                    }
	                    for (g = d; e >= g; g++) {
	                        var l;
	                        i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.insertBefore(l, D.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.appendChild(l));
	                    }
	                }
	                D.reInit(!0);
	            }
	        }, B();
	    }
	};
	Swiper.prototype = {
	    plugins: {},
	    wrapperTransitionEnd: function wrapperTransitionEnd(a, b) {
	        "use strict";

	        function c(h) {
	            if (h.target === f && (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b)) for (d = 0; d < g.length; d++) {
	                e.h.removeEventListener(f, g[d], c);
	            }
	        }
	        var d,
	            e = this,
	            f = e.wrapper,
	            g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
	        if (a) for (d = 0; d < g.length; d++) {
	            e.h.addEventListener(f, g[d], c);
	        }
	    },
	    getWrapperTranslate: function getWrapperTranslate(a) {
	        "use strict";

	        var b,
	            c,
	            d,
	            e,
	            f = this.wrapper;
	        return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0;
	    },
	    setWrapperTranslate: function setWrapperTranslate(a, b, c) {
	        "use strict";

	        var d,
	            e = this.wrapper.style,
	            f = {
	            x: 0,
	            y: 0,
	            z: 0
	        };
	        3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f);
	    },
	    setWrapperTransition: function setWrapperTransition(a) {
	        "use strict";

	        var b = this.wrapper.style;
	        b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", {
	            duration: a
	        }), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a);
	    },
	    h: {
	        getWidth: function getWidth(a, b, c) {
	            "use strict";

	            var d = window.getComputedStyle(a, null).getPropertyValue("width"),
	                e = parseFloat(d);
	            return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.ceil(e) : e;
	        },
	        getHeight: function getHeight(a, b, c) {
	            "use strict";

	            if (b) return a.offsetHeight;
	            var d = window.getComputedStyle(a, null).getPropertyValue("height"),
	                e = parseFloat(d);
	            return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.ceil(e) : e;
	        },
	        getOffset: function getOffset(a) {
	            "use strict";

	            var b = a.getBoundingClientRect(),
	                c = document.body,
	                d = a.clientTop || c.clientTop || 0,
	                e = a.clientLeft || c.clientLeft || 0,
	                f = window.pageYOffset || a.scrollTop,
	                g = window.pageXOffset || a.scrollLeft;
	            return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), {
	                top: b.top + f - d,
	                left: b.left + g - e
	            };
	        },
	        windowWidth: function windowWidth() {
	            "use strict";

	            return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0;
	        },
	        windowHeight: function windowHeight() {
	            "use strict";

	            return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0;
	        },
	        windowScroll: function windowScroll() {
	            "use strict";

	            return "undefined" != typeof pageYOffset ? {
	                left: window.pageXOffset,
	                top: window.pageYOffset
	            } : document.documentElement ? {
	                left: document.documentElement.scrollLeft,
	                top: document.documentElement.scrollTop
	            } : void 0;
	        },
	        addEventListener: function addEventListener(a, b, c, d) {
	            "use strict";

	            "undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
	        },
	        removeEventListener: function removeEventListener(a, b, c, d) {
	            "use strict";

	            "undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
	        }
	    },
	    setTransform: function setTransform(a, b) {
	        "use strict";

	        var c = a.style;
	        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b;
	    },
	    setTranslate: function setTranslate(a, b) {
	        "use strict";

	        var c = a.style,
	            d = {
	            x: b.x || 0,
	            y: b.y || 0,
	            z: b.z || 0
	        },
	            e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";
	        c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px");
	    },
	    setTransition: function setTransition(a, b) {
	        "use strict";

	        var c = a.style;
	        c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms";
	    },
	    support: {
	        touch: window.Modernizr && Modernizr.touch === !0 || function () {
	            "use strict";

	            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
	        }(),
	        transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
	            "use strict";

	            var a = document.createElement("div").style;
	            return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a;
	        }(),
	        transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
	            "use strict";

	            var a = document.createElement("div").style;
	            return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a;
	        }(),
	        transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
	            "use strict";

	            var a = document.createElement("div").style;
	            return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a;
	        }(),
	        classList: function () {
	            "use strict";

	            var a = document.createElement("div");
	            return "classList" in a;
	        }()
	    },
	    browser: {
	        ie8: function () {
	            "use strict";

	            var a = -1;
	            if ("Microsoft Internet Explorer" === navigator.appName) {
	                var b = navigator.userAgent,
	                    c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
	                null !== c.exec(b) && (a = parseFloat(RegExp.$1));
	            }
	            return -1 !== a && 9 > a;
	        }(),
	        ie10: window.navigator.msPointerEnabled,
	        ie11: window.navigator.pointerEnabled
	    }
	}, (__webpack_provided_window_dot_jQuery || window.Zepto) && !function (a) {
	    "use strict";

	    a.fn.swiper = function (b) {
	        var c;
	        return this.each(function (d) {
	            var e = a(this),
	                f = new Swiper(e[0], b);
	            d || (c = f), e.data("swiper", f);
	        }), c;
	    };
	}(__webpack_provided_window_dot_jQuery || window.Zepto),  true ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function () {
	    "use strict";

	    return Swiper;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245), __webpack_require__(245), __webpack_require__(245)))

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	$(function () {
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
	      type = "";
	  $('.showOverlay').on('click', function () {
	    $('.luodipageOverlay').show();
	    $('.layer-bg').show();
	    $('.luodipageOverlay .step1').show();
	    $('.luodipageOverlay .step2').hide();
	    $('.luodipageOverlay .step2 .desc_content').hide();
	    $('.luodipageOverlay .VeriCode').val('');
	    $('.phoneWarn').css('visibility', 'hidden');
	    title = $(this).attr('data-title');
	    title2 = $(this).attr('data-title2');
	    text = $(this).attr('data-text');
	    type = $(this).attr('data-type');
	    $('.luodipageOverlay .step1 .title').html(title);
	    $('.luodipageOverlay .step2 .title').html(title2);
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
	          $('.warnTips').css('visibility', 'hidden');
	          $('.luodipageOverlay .step1').hide();
	          $('.luodipageOverlay .step2').show();
	          $('.luodipageOverlay .step2 .qrcode_content').show();
	          $('.qrcode_content .text').html('<div class="text">学习顾问将第一时间联系你' + text + '，您也<br/>可以联系三立' + subject + '学习顾问咨询。微信号ID：<span id="wechatnum">13734433272</span></div>');
	        }
	        if (type == 2) {
	          $('.warnTips').css('visibility', 'hidden');
	          $('.luodipageOverlay .step1').hide();
	          $('.luodipageOverlay .step2').show();
	          $('.luodipageOverlay .step2 .baiduyun_content').show();
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
	                  $('verify_code_btn').val('重新发送验证码');
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(245)))

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(246))(11);

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/img/5f9833270cb29011decdbad7dd076b0b.png";

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/img/2295f47747067fce89c0116a1ee964e5.png";

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/img/ec60ae23ec47914ba15623d36eff27b2.png";

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/img/e68d1dfd61827b5f3d37088776360141.png";

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/img/57b3f8a698185e24ae45b995c037e519.png";

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/img/47985e4d0a7c13049e846c3b4df2e4ec.png";

/***/ }

/******/ });