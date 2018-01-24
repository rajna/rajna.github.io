import React, { Component } from 'react';

import {
  Animated,
    Easing,
    StyleSheet,
    View
} from 'react-native';


var styles = StyleSheet.create({
  background: {
    backgroundColor: '#bbbbbb',
    height: 5,
    overflow: 'hidden'
  },
  fill: {
    backgroundColor: '#3b5998',
    height: 5
  }
});

export default class ProgressBar extends Component {
 constructor(props) {
        super(props);
        this.state={
            progress: new Animated.Value(0)
        }
  }
  componentDidUpdate(prevProps, prevState) {
      if (this.props.progress >= 0 && this.props.progress != prevProps.progress) {
        this.update();
      }
    }
  update() {
      Animated.timing(this.state.progress, {
        easing: this.props.easing||Easing.inOut(Easing.ease),
        duration: this.props.easingDuration||500,
        toValue: this.props.progress
      }).start();
    }
  render() {
    var fillWidth = this.state.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0 * this.props.style.width, 1 * this.props.style.width],
        });

        return (
          <View style={[styles.background, this.props.backgroundStyle, this.props.style]}>
            <Animated.View style={[styles.fill, this.props.fillStyle, { width: fillWidth }]}/>
          </View>
        );
  }
}

