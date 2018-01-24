import React, { Component } from 'react'

import Learnpage from '../../pages/Learnpage/Learnpage';

import Execisepage from '../../pages/Execisepage/Execisepage';

import Wordslistpage from '../../pages/Wordslistpage/Wordslistpage';

import { TabNavigator} from "react-navigation";

import {
  Dimensions
} from 'react-native';

let {width} = Dimensions.get('window');

var ratio=width/750;

const routeConfiguration = {
  学词: { screen: Learnpage},
  练词: { screen: Execisepage },
  词汇表: { screen: Wordslistpage }
}

const tabNavigatorConfiguration = {
  tabBarPosition:'bottom',
      tabBarOptions: {
        showIcon:true,
        labelStyle: {
          fontSize: 22*ratio,
          marginTop:0
        },
        iconStyle:{
          borderColor:'#333'
        },
        activeTintColor: '#ff8b0a',
        inactiveTintColor: '#999999',
        style: {
          backgroundColor: 'white',
          height:100*ratio,
          borderTopWidth:1,
          borderColor:'#dbdbdb'
        },
        indicatorStyle:{
            backgroundColor: 'white',
        }
      }
}

export const HomeTab = TabNavigator(routeConfiguration,tabNavigatorConfiguration);

export const HomeTabReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return HomeTab.router.getStateForAction(action,state)
  }
}

