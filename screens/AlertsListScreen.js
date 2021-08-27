import React, { useEffect } from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import { render } from "react-dom";
import AlertItem from "../components/AlertItem";
import * as alertsActions from "../store/alerts-actions";

const AlertsListScreen = (props) => {
  const alerts = useSelector((state) => state.alerts.alerts);
  /**
   * Dispatching our alerts
   * This is the only way to trigger our application state change.
   *  With React Redux, our components will never access the store directly
   * Connect does it for us.
   * When the application starts up
   */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(alertsActions.loadAlerts());
  }, [dispatch]);

  return (
    <FlatList
      data={alerts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <AlertItem
          image={itemData.item.image}
          title={itemData.item.title}
          description={itemData.item.description}
          address={itemData.item.address}
          onSelect={() => {
            props.navigation.navigate("AlertDetail", {
              alertTitle: itemData.item.title,
              alertDescription: itemData.item.description,
              alertId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};

AlertsListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Toutes les alertes",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Ajouter alerte"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            //NewAlert is our identifier for NewAlert Screen
            navData.navigation.navigate("NewAlert");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({});

export default AlertsListScreen;
