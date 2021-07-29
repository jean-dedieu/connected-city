import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import { render } from 'react-dom';
import AlertItem from '../components/AlertItem';

const AlertsListScreen = props => {
        const alertPlaces = useSelector(state => state.alertPlaces.alertPlaces);
        return (<FlatList
                 data={alertPlaces}
                 keyExtractor={ item => item.id}
                 renderItem={itemData => <AlertItem image={null} title={itemData.item.title} address={null} onSelect={() => {
                         props.navigation.navigate('AlertDetail', {alertTitle: itemData.item.title, alertId: itemData.item.id});
                 }}/>
                }
                />
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