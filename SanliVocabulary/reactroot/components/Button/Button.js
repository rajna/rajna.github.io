import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
});


export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
