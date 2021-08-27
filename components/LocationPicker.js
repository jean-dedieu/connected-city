import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import Colors from "../constants/Colors";
import MapPreview from "./MapPreview";

const LocationPicker = (props) => {
  const [isFetching, setIsFetching] = useState(false);

  const [pickedLocation, setPickedLocation] = useState();
  /**
   *
   * @returns  user permissin to acces his localisation
   */
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        " Permissions insuffisantes",
        "Pour utiliser cette application vous devez activer la localisation.",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };
  const getLocationHandler = async () => {
    /**The localisation permission
     * will be executed to get Handler localisation
     * we check if has localisation permissions
     */
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      console.log(location);
      /** Set picked location
       * after user allow to be localised
       * We will get his latitude and longitude
       * and we format them into an adress
       *
       */
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (error) {
      Alert.alert(
        "Localisation impossible",
        "veuillez réessayer ultérieurement ou pointer la localisation sur la carte",
        [{ text: "Ok" }]
      );
    }
    setIsFetching(false);
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview style={styles.mapPreview} location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>Adresse pas encore ajoutée</Text>
        )}
      </MapPreview>

      <Button
        title="Localiser alerte"
        color={Colors.primary}
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default LocationPicker;
