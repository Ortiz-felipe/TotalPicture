import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { Drawer } from 'react-native-paper';
import { MainTabScreen } from '../../navigation/NavigationTab';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const PicturesOverviewScreen = props => {

    return(
        <NavigationContainer>
            <Drawer.Navigator initialRoutName="Home">
                <Drawer.Screen name="Home" component={MainTabScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
});

export default PicturesOverviewScreen;