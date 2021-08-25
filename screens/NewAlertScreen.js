import React, {useState} from 'react';
import { ScrollView,
         View, 
         Button, 
         Text,
         TextInput, 
         StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import * as alertsActions from '../store/alerts-actions';
import ImagePicker from '../components/ImagePicker';


const NewAlertScreen = props => {
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        //next: add validation
        setTitleValue(text);
    };
    const descriptionChangeHandler = text => {
        //next: add validation
        setDescriptionValue(text);
    };
 /*** Make sure the new added alert will be save
  * returns new Alert
  */
    const saveAlertHandler = () => {
        dispatch(alertsActions.addAlert(titleValue, descriptionValue));
        
        //get redicted after adding new alert
        props.navigation.goBack();

    };
    return (
         <ScrollView>
        <View style={styles.form}>
        <Text style={styles.label}>Quel alerte ?</Text>
       
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler} 
          value={titleValue}
          />
          
          <Text style={styles.label}>Décrivez votre alerte</Text>
       
          <TextInput
           style={styles.textInput}
           onChangeText={descriptionChangeHandler} 
           value={descriptionValue}
          
          />
     
        <Button 
            title="Envoyer >" 
            color={Colors.primary} 
            onPress={saveAlertHandler}
            />
      </View>
        </ScrollView>     
    );
  };

    NewAlertScreen.navigationOptions = {
        headerTitle: 'Ajouter alerte'
       };

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewAlertScreen;