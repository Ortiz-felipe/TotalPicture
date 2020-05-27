import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';


export default function Publicacion(){
    const image = "../../../img/foto2.jpg";
 
    return (
        <View style={styles.div}>
            <ImageBackground source={require(image)} style={styles.image}>
                
            </ImageBackground>
            <Text style={styles.text}>
                [1]  Descripcion...
            </Text>
            <Text style={styles.text}>
                [2]  Descripcion...
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    div: {
        backgroundColor: '#0E1C45',
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: '100%',
    },
    text: {
        color: '#FBF34A',
    }
}); 