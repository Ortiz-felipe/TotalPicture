import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';


/*
    pROBANDO BOTONES NO ES DEFINITIVO => HAY QUE ARREGLAR.
*/

export default function BarTop() {


    const toast = () => { ToastAndroid.show('Toast desde f()', ToastAndroid.LONG)  };

    return (
        <View style={styles.general}>
            <Button title="____.btn-1____" style={styles.btnBlue} onPress={() => console.log('hola')}/>
            <Button title="___.btn-2___" style={styles.btnBlue} onPress={()=> toast()} />
            <Button 
                title="____.btn-3____" 
                style={styles.btnBlue}
                onPress={() => {
                    ToastAndroid.show('Toast BTN_3', ToastAndroid.LONG)}
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    general:{
        width: '100%',
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    btnBlue: {
        flex: 1,
        backgroundColor: 'black',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    btn: {
        //flexDirection:'column',
        //  HAY QUE VER COMO LO HACEMOS.
    }
})


