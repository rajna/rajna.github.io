'use strict'

// React
import React,{PureComponent} from 'react'
// Navigation
import { addNavigationHelpers,NavigationActions } from 'react-navigation'
import { HomeTab } from '../navigationConf'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.homeTab,
  usersetting:state.usersetting
  }
}

class HomeTabNavigation extends PureComponent {

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <HomeTab
        screenProps={
          {tabBarVisible:this.props.usersetting.bookid}
        }
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(HomeTabNavigation)
