import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, ScrollView } from 'react-native';
import Top from './Top';
import Publicacion from './contenido/Publicacion';



export default function Usuario(){

    var publicaciones = [];
    for( var i = 0; i < 10; i++){
        publicaciones.push( 
        <View  style={styles.publicacion}>
            <Publicacion />
        </View>
        );
    }
   
    return (

        <View style={styles.all}>
            <View style={styles.top}>
                <Top/>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.publicacion}>
                    {publicaciones}
                </View>
            </ScrollView>
        </View>
       
    )
}

const styles = StyleSheet.create({
    all: {
        backgroundColor: 'red',
    },
    publicaciones: {
        flex: 1,
        flexDirection:'column',
    },
    scrollView: {
        marginHorizontal: 0,
        backgroundColor: 'blue',
        height: '70%',
    
    },
    publicacionesConteiner:{
        width: '100%',
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    publicacion:{
        marginHorizontal: 10,
        marginVertical: 10,
    },
    top:{
        height: '30%'
    }
});
