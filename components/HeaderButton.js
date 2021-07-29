import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Color from '../constants/Colors';
import { Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CustomHeaderButton = props => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Platform.OS==='android' ? '#53C7B8' : Colors.primary}/>
};

export default CustomHeaderButton;