import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'


const AlertDetailScreen = props => {
    return (<View>
        <Text>Informations alerte</Text>
    </View>
    );
};

AlertDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('alertTitle')
    };
};
const styles = StyleSheet.create({});

export default AlertDetailScreen;