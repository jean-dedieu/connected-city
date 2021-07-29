import React, {useState} from 'react';
import { ScrollView, View, Button, Text,TextInput, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import * as alertsPlacesActions from '../store/alerts-places-actions';

const NewAlertScreen = props => {
    const [titleValue, setTitleValue] = useState('');
    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        //next: add validation
        setTitleValue(text);
    };

 /*** Make sure the new added alert will be save
  * @returns new Alert
  */
    const saveAlertHandler = () => {
        dispatch(alertsPlacesActions.addAlert(titleValue));
        //get redicted after adding new alert
        ShadowPropTypesIOS.navigation.goBack();

    };
    return (
        <ScrollView>
        <View style={styles.form}>
        <Text style={styles.label}>Votre nouvel alerte</Text>
        <TextInput style={styles.TextInput} onChangeText={titleChangeHandler} value={titleValue}/>
        <Button 
            title="Envoyer >" 
            color={Colors.primary} 
            onPress={saveAlertHandler}
            />
      </View>
        </ScrollView>     
    );
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    TextInput: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewAlertScreen;