import React, { useState } from 'react';
import { ScrollView, View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import * as picturesActions from '../../store/actions/pictures';
import ImgPicker from '../../Components/ImagePicker';

const NewPictureScreen = props => {
    
    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const dispatch = useDispatch();

    const titleChangerHandler = text => {
        setTitleValue(text);
    };

    const savePlaceHandler = () => {
        dispatch(picturesActions.addPicture(titleValue, selectedImage));
        props.navigation.goBack();
    }

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath);
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.TextInput} onChangeText={titleChangerHandler} value={titleValue} />
                <ImgPicker onImageTaken={imageTakenHandler}/>
                <Button title='Save Picture' color={Colors.primary} onPress={savePlaceHandler} />
            </View>
        </ScrollView>
    );
};

NewPictureScreen.navigationOptions = {
    headerTitle: 'Add Picture'
}

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

export default NewPictureScreen;