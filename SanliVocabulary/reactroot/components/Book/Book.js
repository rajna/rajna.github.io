import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  View
} from 'react-native';

let {width} = Dimensions.get('window');

var ratio=width/750;

const styles = StyleSheet.create({
    content:{
        width:140*ratio,
        height:154*ratio,
        paddingTop:40*ratio
    },
    text:{
        color:'white',
        fontSize:24*ratio,
        textAlign:'center'
    }
});


export default class Book extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}>
        <View style={styles.content}>
            {this.props.selected?<Image style={{width:140*ratio,height:154*ratio,position:'absolute'}} source={{uri: 'bookchoosedbg'}} />:
            <Image style={{width:140*ratio,height:154*ratio,position:'absolute'}} source={{uri: 'bookdefaultbg'}} />
            }
            {this.props.jian?<Image style={{width:50*ratio,height:48*ratio,position:'absolute'}} source={{uri: 'bookjian'}} />:null}
            <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
