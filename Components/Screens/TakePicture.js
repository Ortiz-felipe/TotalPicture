import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TakePicture(){
    return(
        <View style={styles.container}>
            <Text> TakePicture Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        flex: 1,
        justifyContent: 'center',
    }
});