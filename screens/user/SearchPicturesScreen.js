import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchPicturesScreen = props => {
    return(
        <View style={styles.container}>
            <Text>Aqui va una pequeña barra de busqueda</Text>
            <Text>Y un pequeño colage de fotos?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SearchPicturesScreen;