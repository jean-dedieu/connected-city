import { Platform } from "react-native";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import{createStackNavigator,createAppContainer} from 'react-navigation-stack';

/**import all screen files required for navigation
 * AlertsListScreen:  alerts list
 * AlertDetailScreen: when single alert clicked, it will show its details
 * NewAlertScreen: to create a new alert
 * MapScreen: for alert geolocalisation
 * Colors: for application colors depending on operating system platform
 * */

import AlertsListScreen from "../screens/AlertsListScreen";
import AlertDetailScreen from "../screens/AlertDetailScreen";
import NewAlertScreen from "../screens/NewAlertScreen";
import MapScreen from "../screens/MapScreen";
import Colors from "../constants/Colors";

/** create application navigation
 *
 */
const AlertsNavigator = createStackNavigator(
  {
    Alerts: AlertsListScreen,
    AlertDetail: AlertDetailScreen,
    NewAlert: NewAlertScreen,
    Map: MapScreen,
  },
  {
    defautNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "#53c7b8" : Colors.primary,
      },
      headerTintColor: Platform.OS === "android" ? "#53c7b8" : Colors.primary,
    },
  }
);

export default createAppContainer(AlertsNavigator);
