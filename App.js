import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

//import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
/**Import alerts navigation
 * 
 * @returns Alerts navigation
 */
import AlertsNavigator from './navigation/AlertsNavigator';
import alertPlacesReducer from './store/alert-places-reducer';

const rootReducer = combineReducers({
  alertPlaces: alertPlacesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (<Provider store={store}>
    <AlertsNavigator/>
    </Provider>);
}
