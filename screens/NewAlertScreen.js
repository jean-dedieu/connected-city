import React, { useState } from "react";
import {
  ScrollView,
  Input,
  label,
  View,
  Image,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import * as alertsActions from "../store/alerts-actions";
import ImagePicker from "../components/ImagePicker";
import LocationPicker from "../components/LocationPicker";
import emailjs from "emailjs-com";

const NewAlertScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");

  const [descriptionValue, setDescriptionValue] = useState("");

  //const [placeValue, setPlaceValue] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    //next: add validation
    setTitleValue(text);
  };
  const descriptionChangeHandler = (text) => {
    //next: add validation
    setDescriptionValue(text);
  };

  /* const placeChangeHandler = (text) => {
    //next: add validation
    setPlaceValue(text);
  };*/
  /*** Make sure the new added alert will be save
   * returns new Alert
   */
  const saveAlertHandler = () => {
    dispatch(alertsActions.addAlert(titleValue, descriptionValue));

    //get redicted after adding new alert
    props.navigation.goBack();
  };



  /**Send Email notification after the form has been submitted
   * We use EmailJS library
 
 function sendEmail(){

    preventDefault(e);

    emailjs.sendForm(
        "gmail",
        "template_v1g5yxn",
        e.target,
        "user_N42beUP76Pf7XpxeAaU3P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(e);
  };
  */

  /**Alert form
   * This will return  our alert form fields
   * The form fields data will be handled by the functions we declared here up
   */
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Quel alerte ?</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={titleChangeHandler}
        value={titleValue}
        name="title"
      />

      <Text style={styles.label}>Décrivez votre alerte</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={descriptionChangeHandler}
        value={descriptionValue}
        name="description"
      />
      
      <Button
        title="Envoyer >"
        color={Colors.primary}
        onPress={() => {
          saveAlertHandler();
        }}
      />
    </View>
  );
};

NewAlertScreen.navigationOptions = {
  headerTitle: "Ajouter alerte",
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewAlertScreen;
