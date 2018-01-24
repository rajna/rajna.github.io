'use strict';

import React, { Component } from 'react';
// Redux
import { Provider,combineReducers,injectReducer} from 'react-redux'

import { PersistGate } from "redux-persist/es/integration/react";

require("./reactroot/util/storage")
import configureStore from './reactroot/store/store'

const { store, persistor } = configureStore();

import SQLite from './reactroot/db/SQLite';
var sqLite = new SQLite();

import {
  AppRegistry,
  Navigator
} from 'react-native';

// Navigation
import RootNavigation from './reactroot/navigator/root/view/RootNavigation'

import {setInitBook} from './reactroot/store/usersetting';

class Approot extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillmount(){}
  componentDidMount(){
      sqLite.createTable();
//      var fromnative=this.props.KEY=="fromnative"?true:false;
//      if(fromnative) {
//       store.dispatch(setInitBook(fromnative))
//      }

  }
  componentWillUnmount(){
      sqLite.close();
  }
  render(){
    return(
      <Provider store={store}  uriPrefix={'sanlivocabulary://sanlivocabulary/'}>
       <PersistGate persistor={persistor}>
        <RootNavigation nativedata={this.props.KEY}/>
       </PersistGate>
      </Provider>
    )
  }
}
AppRegistry.registerComponent('HelloWorld', () => Approot)
