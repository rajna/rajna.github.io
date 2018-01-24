import React, { Component } from 'react'
import { Navigator } from 'react-native'
import Learnpage from './Learnpage'
import colors from '../../config/colors'
import navigationBar from '../../components/NavBar/NavBar'
import Icon from 'react-native-vector-icons/MaterialIcons'

const initialRoute = {component: Learnpage, name: 'learn'}

class LearnpageNav extends Component {
  static navigationOptions = {
      tabBarLabel: '学词',

      tabBarIcon: ({ tintColor }) => (
        <Icon color={tintColor} name='whatshot' size={26} />
      ),
    };
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
    const { toggleSideMenu } = this.props
    return (
      <route.component toggleSideMenu={toggleSideMenu} navigator={navigator} {...route.passProps} />
    )
  }
  render () {
    const { toggleSideMenu } = this.props
    return (
      <Navigator
        //navigationBar={navigationBar(toggleSideMenu)}
        initialRoute={initialRoute}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}

export default LearnpageNav
