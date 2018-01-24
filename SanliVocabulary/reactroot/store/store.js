'use strict'
import {
  persistCombineReducers,
  persistStore,
  persistReducer
} from "redux-persist";
import storage from "redux-persist/es/storage";
// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import composablefetch from '../middleware/composablefetch'

// Navigation
import { Root,RootReducer} from '../navigator/root/navigationConf'
import Drawer  from '../navigator/drawer/navigationConf'
import { HomeTabNavigation,HomeTabReducer } from '../navigator/hometab/navigationConf'

import bookReducer from './book'

import usersettingReducer from './usersetting'

// Middleware
const middleware = () => {
  //return applyMiddleware(thunk,composablefetch,createLogger())
  return applyMiddleware(thunk,composablefetch)
}

const config = {
  key: "rootusersetting",
  storage
};

// We are only persisting the usersettingReducer
const UsersettingReducer = persistReducer(config, usersettingReducer);

const rootReducer=combineReducers({
    root: RootReducer,

    drawer: (state,action) => Drawer.router.getStateForAction(action,state),

    homeTab: HomeTabReducer,

    databook: bookReducer,

    usersetting: UsersettingReducer

  });

function configureStore() {
  let store = createStore(rootReducer,middleware());
  let persistor = persistStore(store);
  return { persistor, store };
}

export default configureStore;
