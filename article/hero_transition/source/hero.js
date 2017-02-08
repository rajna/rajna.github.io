import fetch from 'isomorphic-fetch'

require('./css/hero.scss');

const React = require('react');

const render = require('react-dom').render;

import CoreAnimatedPages from './components/libcomponents/core-animated-pages.js';

class AppResource extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selected:1,
      selectedsub:1
    }
  }

  handleClick(page,subpage,e){
    this.setState({
      selectedsub:subpage,
      selected:page
    });
  }

  getPageStyle(flag){
    return flag?{opacity:"1",position:"relative",zIndex:"9999"}:{opacity:"0",position:"relative",zIndex:"1"}
  }

        /*<CoreAnimatedPages selected="1">
            <div label="1">
              <div className="circle" >
                <div data-heroid="thing" data-hero="hero" className="circleInner">

                </div>
              </div>
            </div>
            <div label="2">
              <div className="search" data-heroid="thing" data-hero="hero"><span>+</span><input type="text"/></div>
            </div>
          </CoreAnimatedPages>*/
  
  render(){
    var self=this;
  	return (
      <div className="heroApp">
          
            <CoreAnimatedPages selected={this.state.selected}>
              <div label="1" className="page1 squarewrap">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((item,i)=>{
                  return (
                      <div key={i} className="square" data-heroid={"thing"+item} data-hero={self.state.selectedsub==item?"true":"false"} onClick={this.handleClick.bind(this,1,item)}>
                        <section>{item}</section>
                      </div>
                    )
                })}
              </div>

              <div label="2">
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((item,i)=>{
                  return (
                      <div key={i} label={item} style={self.getPageStyle(self.state.selectedsub==item)}>
                        <div className="page" data-heroid={"thing"+item} data-hero={this.state.selectedsub==item?"true":"false"}>
                          <section><span onClick={this.handleClick.bind(this,2,item)}>X</span></section>
                          <div>
                            <div className="circle">+</div>
                          </div>
                        </div>
                      </div>
                    )
                })}
              </div>

            </CoreAnimatedPages>
      </div>
  	)
  }
}

  render(
      <AppResource/>,
      document.getElementById('app')
    )
