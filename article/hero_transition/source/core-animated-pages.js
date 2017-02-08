'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('es5-shim');

require('es5-shim/es5-sham');

const React = require('react');
const ReactDOM = require('react-dom');

import CoreSelector from '../libcomponents/core-selector.js';

import {CoreStyle} from '../libcomponents/core-style.js';

class CoreAnimatedPages extends React.Component{
    constructor(props) {
        super(props);
        this.state={
        	selected:this.props.selected,
        	old:null
        }
    }

    _handleChange(select){
    	var self=this;

    	if(this.animating) return

    	this.select=select;
    	
    	var old=self.state.old;

    	var oldid=old.props.label;

    	var now=null;

    	self.props.children.map((item,i)=>{
                if(item.props.label!=oldid) {
                	now=self.refs["page"+item.props.label];
                	self.setState({old:item});
                }
            });

        setTimeout(function(){
            self.applyTransition(self.refs["page"+oldid],now);
        },1);
    	

    	
    }

    applyTransition(src,dist){
    	src.setAttribute('animate','');
    	dist.setAttribute('animate','');

    	var option={
    		src:src,
    		dist:dist,
    		easing:'cubic-bezier(0.4,0,0.2,1)'
    	}

    	this.transitionPrepare(option);
    }

    transitionPrepare(option){
    	var self=this;
    	var src = option.src, dist = option.dist;
    	var ss="[data-hero=true]";

    	var h$=this.findAllInChildren(src,ss);

    	var hArray=[];

    	for (var i=0, h0; h0=h$[i]; i++) {
    		var v = h0.getAttribute('data-heroid');
    		var ds='[data-hero=true][data-heroid="'+v+'"]';
    		var h1=this.findAllInChildren(dist,ds)[0];
    		if(v&&h1){
    			var c0=getComputedStyle(h0);
    			var c1=getComputedStyle(h1);
    			var h={
    				h0:h0,
    				b0:h0.getBoundingClientRect(),
    				r0:c0.borderRadius,
    				h1:h1,
    				b1:h1.getBoundingClientRect(),
    				r1:c1.borderRaduis
    			};

    			var dl=h.b0.left-h.b1.left;
    			var dt=h.b0.top-h.b1.top;
    			var sw=h.b0.width/h.b1.width;
    			var sh=h.b0.height/h.b1.height;

    			if (h.r0 !== h.r1) {
		        	h.h1.style.borderRadius = h.r0;
		        }

		        h.h1.style[self.TRANSFORM_NAME] = 'translate(' + dl + 'px,' + dt + 'px)' + ' scale(' + sw + ',' + sh + ')';
          		h.h1.style[self.TRANSFORM_NAME + 'Origin'] = '0 0';

          		hArray.push(h);
    		}
    	}

    	this.setState({selected:this.select=="1"?"2":"1"});

    	src.offsetTop;

    	self.transitionGo(hArray,option);
    }

    transitionGo(hArray,options){
    	var self=this;
    	this.animating=true;
    	var props = [
	        'border-radius',
	        'width',
	        'height',
	        this.TRANSFORM_CSSNAME
	      ];

	    var duration = options && options.duration || 
          (CoreStyle.g.transitions.heroDuration || 
          CoreStyle.g.transitions.duration);

        hArray.forEach(function(h){
        	
        	var h0=h.h0;
        	//console.log(h0.getAttribute('data-heroid'));
        	//console.log(h0.getAttribute('data-herodelayed'));
        	var d = CoreStyle.g.transitions.heroDelay;
	        var wt = [];
	        props.forEach(function(p) {
	          wt.push(p + ' ' + duration + ' ' + options.easing + ' ' + d);
	        });
		    h.h1.addEventListener(self.TRANSITIONEND_NAME, function() {
		    	self.complete(hArray);
		    });
		    h.h1.style[self.TRANSITION_NAME] = wt.join(', ');
		    h.h1.style.borderRadius = h.r1;
			h.h1.style[self.TRANSFORM_NAME] = '';
	        
	       
        });

        
        
    }

    complete(heros) {
      var self=this;
      if(!this.animating) return
      heros.forEach(function(h) {
      	h.h1.style[self.TRANSFORM_NAME] = '';
        h.h1.style[self.TRANSITION_NAME] = '';
      })

      this.animating=false
    }

    findAllInChildren(node, selector){
    	return node.querySelectorAll(selector)
    }

    componentWillReceiveProps(nextProps){
        var self=this;
        self._handleChange(nextProps.selected);
    }

    componentDidMount(){
    	var self=this;
    	var webkitStyles = '-webkit-transition' in document.documentElement.style
    	this.TRANSFORM_NAME = webkitStyles ? 'webkitTransform' : 'transform';
    	this.TRANSFORM_CSSNAME= webkitStyles ? '-webkit-transform' : 'transform';
    	this.TRANSITION_NAME=webkitStyles ? 'webkitTransition' : 'transition';
    	this.TRANSITIONEND_NAME=webkitStyles? 'webkitTransitionEnd' : 'transitionend';
    	this.setState({old:self.refs.root.getSelectedItem()});
    	this.animating=false;
    }

    render(){
        var _this2 = this;
        var children=React.Children.map(this.props.children,function(c){
        					return (<div label={c.props.label} style={{height:"100%",overflow:"scroll"}} ref={"page"+c.props.label}>{c}</div>)
        				});
        if(children.length<2) {
        	console.error("Need two pages at least");
        	return <div>"Need two pages"</div>
        }else{
        	return <CoreSelector selected={this.state.selected} ref="root" className="pageWrap">
        			{children}
	           </CoreSelector>
        }
        
    }
}

module.exports=CoreAnimatedPages;