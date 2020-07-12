import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from './Icon';

const IconBar = props => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Icon icon='heart-empty' size={25} />
                <Icon icon='chatbubbles' size={23} />
                <Icon icon='send' size={23} />
            </View>
            <Icon icon='bookmark' size={23} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

});

export default IconBar;