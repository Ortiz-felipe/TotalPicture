import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import User from '../../Components/User/User';

const PicturesOverviewScreen = props => {
    return(
        <View style={{ backgroundColor: "black", flex:1 }}>
            <User/>
        </View>
    );
}

const styles = StyleSheet.create({
});

export default PicturesOverviewScreen;