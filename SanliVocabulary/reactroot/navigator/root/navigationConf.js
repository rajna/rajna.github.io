'use strict'
import { StackNavigator,NavigationActions } from 'react-navigation'

import Bookpage from '../../pages/Bookpage/Bookpage'

import BookReSelectpage from '../../pages/BookReSelectpage/BookReSelectpage'

import Wordlearnpage from '../../pages/Wordlearnpage/Wordlearnpage'

import Fuxipage from '../../pages/Fuxipage/Fuxipage'

import Finishpage from '../../pages/Finishpage/Finishpage'

import Habbitpage from '../../pages/Habbitpage/Habbitpage'

import Loginpage from '../../pages/Loginpage/Loginpage'

import DrawerNavigation from '../drawer/navigationConf'

const routeConfiguration = {
  DrawerNavigation: { screen: DrawerNavigation, path: 'DrawerNavigation'},
  Bookpage: { screen: Bookpage },
  BookReSelectpage: { screen: BookReSelectpage },
  Wordlearnpage: { screen: Wordlearnpage },
  Fuxipage: { screen: Fuxipage },
  Finishpage: { screen: Finishpage },
  Habbitpage: { screen: Habbitpage},
  Loginpage: {screen: Loginpage}
};


const stackNavigatorConfiguration = {
  headerMode: 'none'//,
  //initialRouteName: 'DrawerNavigation'
}


export const Root = StackNavigator(routeConfiguration,stackNavigatorConfiguration);

const ActionForLoggedOut = Root.router.getActionForPathAndParams("Loginpage");

const stateForLoggedOut = Root.router.getStateForAction(ActionForLoggedOut);

const ActionForBookNotSelected = Root.router.getActionForPathAndParams("Bookpage");
const ActionForBookSelected = Root.router.getActionForPathAndParams("DrawerNavigation");

const stateForBookNotSelected = Root.router.getStateForAction(ActionForBookNotSelected,stateForLoggedOut);
const stateForBookSelected = Root.router.getStateForAction(ActionForBookSelected,stateForLoggedOut);

const initialState = { stateForBookNotSelected, stateForBookSelected,stateForLoggedOut};

export const RootReducer = (state=initialState,action) => {
  switch (action.type) {
      case "HABBIT_RESET":
            return {
              ...state,
              stateForBookSelected: Root.router.getStateForAction(
                                      NavigationActions.reset({
                                        index: 1,
                                        actions: [
                                            NavigationActions.navigate({ routeName: "Loginpage" }),
                                            NavigationActions.navigate({ routeName: "DrawerNavigation" })
                                        ]
                                      })
                                    )
            };
      case "CHOOSE_BOOK":
        return {
            ...state,
            stateForBookNotSelected:Root.router.getStateForAction(Root.router.getActionForPathAndParams("Habbitpage"),state.stateForBookNotSelected)
        }
      case "Navigation/BACK":
            return {
              ...state,
               stateForBookSelected:Root.router.getStateForAction(action,state.stateForBookSelected),
              stateForBookNotSelected: Root.router.getStateForAction(
                NavigationActions.back(),
                state.stateForBookNotSelected
              )
            };

      default:
        return {
            ...state,
            stateForBookSelected:Root.router.getStateForAction(action,state.stateForBookSelected),
            //stateForBookNotSelected:Root.router.getStateForAction(action,state.stateForBookNotSelected),
        }
    }
}
