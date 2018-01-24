import React from 'react';
//import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import SampleText from '../../components/SampleText/SampleText';

import HomeTabNavigation from '../hometab/views/HomeTabNavigation'

import BookReSelectpage from '../../pages/BookReSelectpage/BookReSelectpage'

import SideBar from '../../components/Menu/Menu'

//const MyNavScreen = ({ navigation, banner }) => (
//  <ScrollView style={styles.container}>
//    <SampleText>{banner}</SampleText>
//    <Button
//      onPress={() => navigation.navigate('DrawerOpen')}
//      title="Open drawer"
//    />
//    <Button onPress={() => navigation.goBack(null)} title="Go back" />
//  </ScrollView>
//);
//
//
//const DraftsScreen = ({ navigation }) => (
//  <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
//);

//DraftsScreen.navigationOptions = {
//  drawerLabel: 'Drafts',
//  drawerIcon: ({ tintColor }) => (
//    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
//  ),
//};

const routeConfiguration = {
  HomeTabNavigation: { screen: HomeTabNavigation },
//  Chat: { screen: DraftsScreen },
  HomeToBookpage: { screen: BookReSelectpage }
}

const drawerNavigatorConfiguration = {
  contentComponent: props => <SideBar {...props} />
}

const Drawer = DrawerNavigator(routeConfiguration,drawerNavigatorConfiguration);


//const styles = StyleSheet.create({
//  container: {
//    marginTop: Platform.OS === 'ios' ? 20 : 0,
//  },
//});


export default Drawer;