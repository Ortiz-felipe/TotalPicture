import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import Colors from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImgPicker = props => {
    const [pickedImage, setPickedImage] = useState();
    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        let permissionStatus;
        if (result.status != 'granted') {
            Alert.alert('Insufficient Permissions!', `You'll need camera permissions to use this app.`, [{text: 'Okay'}]);
            permissionStatus = false;
        };
        permissionStatus = true;

        return permissionStatus;
    };
    
    const takeImageHandler = async () => {
        const hasPermissions = await verifyPermissions();
        if (!hasPermissions) {
            return;
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
            base64: true
        });

        setPickedImage(image);
        props.onImageTaken(image);
    }

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedImage ? (<Text>No Image Picked Yet</Text>)
                : (<Image style={styles.image} source={{uri: pickedImage.uri}}/>)}
            </View>
            <Button title='Take Image!' color={Colors.primary} onPress={takeImageHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    imagePicker:{
        alignItems: 'center',
        marginBottom: 15,

    },
    imagePreview:{
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    image:{
        width: '100%',
        height: '100%'
    }
});

export default ImgPicker;