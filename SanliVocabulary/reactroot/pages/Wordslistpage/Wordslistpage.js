import React, { Component } from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Icomoon'

export default class Wordslistpage extends React.Component {
  static navigationOptions = {
        tabBarLabel: '词汇表',

        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} name='glossary' size={24} />
        ),
      };
  render() {
    return (
        <View>
            <TouchableOpacity
                      onPress={
                        () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0} })
                      }
                      style={{
                        padding:20,
                        borderRadius:20,
                        backgroundColor:'deeppink',
                        marginTop:20
                      }}>
                      <Text>{'jump to tab one'}</Text>
                    </TouchableOpacity>
        </View>
    )
  }
}