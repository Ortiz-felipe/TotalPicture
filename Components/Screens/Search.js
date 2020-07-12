import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Search(){
    return(
        <View style={styles.container}>1
            <Text> Search Screen </Text>
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