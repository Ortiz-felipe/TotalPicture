import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreatePictureScreen = props => {
    return(
        <View style={styles.container}>
            <Text>Creacion de un nuevo post</Text>
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

export default CreatePictureScreen;