import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CameraScreen = props => {
    const takePhotoHandler = () => {
        props.navigation.navigate('CreatePost')
    }

    return(
        <View style={styles.container}>
            <Text>Aqui va el modulo de camara</Text>
            <Button title="Tomar foto!" onPress={takePhotoHandler} />
        </View>
    );
};

export const screenOptions = {
    headerTitle: 'Camera Screen'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CameraScreen;