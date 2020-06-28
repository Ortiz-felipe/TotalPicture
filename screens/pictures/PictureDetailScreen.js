import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PictureDetailScreen = props => {
    return (
        <View>
            <Text>Picture Detail Screen</Text>
        </View>
    );
};

PictureDetailScreen.navigationOptions = navData => {
    return {
        headerTitle:navData.navigation.getParam('pictureTitle')
    };
}

const styles = StyleSheet.create({

});

export default PictureDetailScreen;