import React, { useState, useCallback } from 'react';
import { ScrollView, View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import * as placesActions from '../../store/actions/places';
import ImgPicker from '../../Components/TakePicture/ImagePicker';
import LocationPicker from '../../Components/TakePicture/LocationPicker';

const NewPlaceScreen = props => {
    
    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [selectedLocation, setSelectedLocation] = useState();
    const dispatch = useDispatch();

    const titleChangerHandler = text => {
        setTitleValue(text);
    };

    const descriptionChangerHandler = text => {
        setDescriptionValue(text);
    };

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue, descriptionValue, selectedImage, selectedLocation));
        props.navigation.navigate('PicturesFeed');
    }

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath);
    }

    const locationPickedHandler = useCallback(location => {
        setSelectedLocation(location);
    }, []);

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.textInput} onChangeText={titleChangerHandler} value={titleValue} />
                <Text style={styles.label}>Description</Text>
                <TextInput style={styles.textInput} onChangeText={descriptionChangerHandler} value={descriptionValue} />
                <ImgPicker onImageTaken={imageTakenHandler}/>
                <LocationPicker navigation={props.navigation} onLocationPicked={locationPickedHandler}/>
                <Button title='Save Place' color={Colors.primary} onPress={savePlaceHandler} />
            </View>
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewPlaceScreen;