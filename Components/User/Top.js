import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import BarTop from './BarTop';


export default function Top(){

    const image =  "../../img/foto2.jpg";
    
    
    return (

        <View style={styles.top}>
            <ImageBackground source={require(image)} style={styles.image}>
                    <View style={styles.contenido}>
                        <Text style={styles.text}>
                            Foto de Perfil...
                        </Text>
                    </View>
            </ImageBackground>
            <BarTop/>
        </View>
    );
}  

const styles = StyleSheet.create({
    top:{
        flex: 0,
        height: '100%',

    },
    contenido: {
        textAlign: 'center',
        position: 'absolute',
        bottom: 0, 
        
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text:{
        color: '#FFD700',
        fontWeight: 'bold',
        fontSize: 30,
        
    },
});