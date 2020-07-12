import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Icon = props => {

    const iconName = Platform.OS === 'android' ? `ios-${props.icon}` : `md-${props.icon}`;
    const iconSize = props.size;
    const iconColor = props.color;

    return(
        <Ionicons style={styles.iconStyle} name={iconName} size={iconSize} color={iconColor}/>
    );
}

const styles = StyleSheet.create({
    iconStyle: {
        marginRight: 10
    }
})

export default Icon;