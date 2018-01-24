import {StyleSheet,Text,View,Image,TouchableHighlight,Animated,Dimensions} from 'react-native';

import React, { Component } from 'react';

import colors from '../../config/colors'

let {width} = Dimensions.get('window');

var ratio=width/750;

import Icon from 'react-native-vector-icons/Icomoon';

class Panel extends Component{
  constructor(props){
    super(props);
    this.icons = { //Step 2
      'up' : <Icon style={{paddingTop: 30*ratio,paddingRight: 20*ratio}} color={colors.grey2} name='stop' size={20} />,
      'down' : <Icon style={{paddingTop: 30*ratio,paddingRight: 20*ratio}} color={colors.grey2} name='pack' size={20} />
    };
    this.isinit=false;
    this.state = { //Step 3
      title : props.title,
      expanded : true,
      animation : new Animated.Value()
    };
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.active !== this.props.index&&!this.state.expanded){
          this.toggle()
      }
  }

  toggle(){ //Step 1
    if(this.state.expanded){
        if(this.props.opencallback){
            this.props.opencallback();
        }
    }
    let initialValue = !this.state.expanded? this.state.maxHeight +   this.state.minHeight : this.state.minHeight,
        finalValue = !this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
    this.setState({
      expanded : !this.state.expanded //Step 2
    });

    this.state.animation.setValue(initialValue); //Step 3
    Animated.spring( //Step 4
      this.state.animation,
      {
        toValue: finalValue
      }
    ).start(); //Step 5
  }


  _setMaxHeight(event){
    this.setState({
      maxHeight : event.nativeEvent.layout.height
    });

    if(!this.isinit){
      if(!this.props.isSelect){
        this.state.animation.setValue(this.state.minHeight);
      }else{
        this.setState({
              expanded : !this.state.expanded
            });
      }
      this.isinit=true;
    }
  }

  _setMinHeight(event){
    this.setState({
      minHeight : event.nativeEvent.layout.height
    });
  }

  render(){
    let icon = this.icons['down']
      if(this.state.expanded){
       icon = this.icons['up'];
      }
      return (
       <Animated.View
            style={[styles.container,{height: this.state.animation}]}>
          <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
              <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                <Text style={styles.title}>{this.state.title}</Text>
                  {icon}
              </View>
          </TouchableHighlight>
        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
       </Animated.View>
    );
  }
}
export default Panel;

var styles = StyleSheet.create({
  container : {
    backgroundColor: '#fff',
    marginBottom:24*ratio,
    marginLeft:20*ratio,
    marginRight:20*ratio,
    overflow:'hidden',
    //height:114*ratio,
    borderColor:'#fbefd0',
    borderWidth:1,
    borderRadius:4
  },
  titleContainer : {
    flexDirection: 'row',
    height:114*ratio,
    justifyContent:'center'
  },
  title : {
    flex : 1,
    paddingTop : 30*ratio,
    paddingLeft : 30*ratio,
    color :'#222222',
    fontSize: 34*ratio
    },
    button : {
    },
    buttonImage : {
      width : 30,
      height : 25
    },
    body : {
      borderTopWidth:1,
      borderTopColor:'#eaeaea'
    }
});

