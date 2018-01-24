import React, { Component } from 'react';

import {
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Icomoon'

export default class Execisepage extends React.Component {
  static navigationOptions = {
        tabBarLabel: '练词',

        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} name='practice' size={24} />
        ),
      };
  render() {
    return <Text style={{ flex : 1,backgroundColor:'#999'}}>execise</Text>
  }
}