'use strict'

// React
import React ,{PureComponent}from 'react'
import {
BackHandler,
NativeModules,
DeviceEventEmitter
} from "react-native";
// Navigation
import { addNavigationHelpers,NavigationActions } from 'react-navigation'
import { Root } from '../navigationConf'
import {fetchCacheUsersettingData,getuserselectbook} from '../../../store/usersetting';
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state,nativedata) => {
 return {
    navigationState: state.root,
    usersetting:state.usersetting,
    nativedata:nativedata
 }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        dispatch: dispatch,
        fetchCacheUsersettingData:fetchCacheUsersettingData,
        getuserselectbook:getuserselectbook
    }
}

class RootNavigation extends PureComponent {
  constructor(props){
    super(props);
//    this.state={
//      rendertype:""
//    }
  }
  componentDidMount() {
    var self=this;
//    DeviceEventEmitter.addListener('ABC', function (e: Event) {
//                  self.setState({
//                    rendertype:e.type
//                  });
//            });
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
      const { dispatch, navigationState,usersetting} = this.props;
      if (navigationState.stateForBookSelected.index <= 1) {
        return false;
      }
      dispatch(NavigationActions.back());
      return true;
    };
  render(){
    const { dispatch, navigationState,nativedata,usersetting} = this.props;
    console.log(navigationState);
    //新用户learncount为0，选择书，设置背词习惯
    const  state = usersetting.bookid&&usersetting.learncount
      ? navigationState.stateForBookSelected
      : navigationState.stateForBookNotSelected;
    const state2 = !usersetting.token
      ? navigationState.stateForLoggedOut
      : state;
    return (
      <Root
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: state2,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RootNavigation)
