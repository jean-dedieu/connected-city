import React from 'react';
import { ScrollView, View, Button, Text,TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const NewAlertScreen = props => {
    return (
        <ScrollView>
        <View style={styles.form}>
        <Text style={styles.label}>Votre nouvel alerte</Text>
        <TextInput style={styles.TextInput}/>
        <Button title="Envoyer >" color={Colors.primary} onPress={() => {}}/>
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