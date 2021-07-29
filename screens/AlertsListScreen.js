import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const AlertsListScreen = props => {
        return (<View>
            <Text>Toutes les alertes</Text>
        </View>
        );
};

AlertsListScreen.navigationOptions = navData => {
       return { 
               headerTitle: 'Toutes les alertes',
               headerRight:() => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                       <Item title='Ajouter alerte' iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                       onPress={() => {
  //NewAlert is our identifier for NewAlert Screen 
                               navData.navigation.navigate('NewAlert');
                       }}
                       
                       />
               </HeaderButtons>
         };
};
const styles = StyleSheet.create({});

export default AlertsListScreen;