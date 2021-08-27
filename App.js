import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

//import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
/**Import alerts navigation
 *
 * return Alerts navigation
 */
import AlertsNavigator from "./navigation/AlertsNavigator";
import alertsReducer from "./store/alerts-reducer";
//calling the db initialisation when the app starts up
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initialized data base");
  })
  .catch((err) => {
    console.log("Initializing db failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  alerts: alertsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AlertsNavigator />
    </Provider>
  );
}
