import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './TotalPictureNavigator';


const AppNavigator = props => {
    // const isAuth = useSelector(state => !!state.auth.token);

    return(
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;
