import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PicturesFeedScreen from '../screens/pictures/PicturesFeedScreen';
import Colors from '../constants/Colors';
import AuthScreen from '../screens/user/AuthScreen';
import PictureDetailsScreen from '../screens/pictures/PictureDetailsScreen';
import StartupScreen from '../screens/StartupScreen';
import { Ionicons } from '@expo/vector-icons';
import * as authActions from '../store/actions/auth';
import CameraScreen, {screenOptions as cameraOptions} from '../screens/camera/CameraScreen';
import UserDetailsScreen from '../screens/user/UserDetailsScreen';
import CreatePictureScreen from '../screens/pictures/CreatePictureScreen';
import Icon from '../Components/UI/Icon';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
};

const bottomTabNavOptions = ({route}) => ({
    tabBarIcon: ({color, size}) => {
        let iconName;
        if (route.name === 'Feed') {
            iconName = 'home'
        } else if (route.name === 'Camera') {
            iconName = 'camera'
        } else {
            iconName = 'person'
        }
        return <Icon icon={iconName} color={color} size={size} />
    }
})

const PicturesStackNavigator = createStackNavigator();

export const PicturesNavigator = () => {
    return(
        <PicturesStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <PicturesStackNavigator.Screen name="PicturesOverview" component={PicturesFeedScreen} />
            <PicturesStackNavigator.Screen name="PictureDetails" component={PictureDetailsScreen} />
        </PicturesStackNavigator.Navigator>
    );
};

const CameraStackNavigator = createStackNavigator();

export const CameraNavigator = () => {
    return(
        <CameraStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <CameraStackNavigator.Screen name="Browse Pictures" component={CameraScreen}/>
            <CameraStackNavigator.Screen name="CreatePost" component={CreatePictureScreen}/>
        </CameraStackNavigator.Navigator>
    );
}

const TabNavigator = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return(
        <TabNavigator.Navigator screenOptions={bottomTabNavOptions}>
            <TabNavigator.Screen name="Feed" component={PicturesNavigator} />
            <TabNavigator.Screen name="Camera" component={CameraNavigator} />
            <TabNavigator.Screen name="User" component={UserDetailsScreen} />
        </TabNavigator.Navigator>
    );
}

// const TotalPictureNavigator = createStackNavigator({
//     PicturesOverview: PicturesOverviewScreen,
//     Details:DetailsScreen
// }, {defaultNavOptions: defaultNavOptions});

// const AuthNavigator = createStackNavigator({
//     Auth: AuthScreen
// }, {defaultNavOptions: defaultNavOptions});

// const MainNavigator = createSwitchNavigator({
//     Startup: StartupScreen,
//     Auth: AuthNavigator,
//     Pictures: TotalPictureNavigator    
// });

// export default createAppContainer(MainNavigator);