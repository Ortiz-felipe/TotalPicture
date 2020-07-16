import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StartupScreen from '../screens/StartupScreen';
// import AuthScreen from '../screens/user/AuthScreen';
import PicturesFeedScreen from '../screens/pictures/PicturesFeedScreen';
import PictureDetailsScreen from '../screens/pictures/PictureDetailsScreen';
import CameraScreen from '../screens/camera/CameraScreen';
import UserDetailsScreen from '../screens/user/UserDetailsScreen';
import CreatePictureScreen from '../screens/pictures/CreatePictureScreen';
import MapScreen from '../screens/pictures/MapScreen';
import { Ionicons } from '@expo/vector-icons';
import * as authActions from '../store/actions/auth';
import Colors from '../constants/Colors';
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

// const bottomTabNavOptions = ({route}) => ({
//     tabBarIcon: ({color, size}) => {
//         let iconName;
//         if (route.name === 'Feed') {
//             iconName = 'home'
//         } else if (route.name === 'Camera') {
//             iconName = 'camera'
//         } else {
//             iconName = 'person'
//         }
//         return <Icon icon={iconName} color={color} size={size} style={{}} />
//     }
// })

// const PicturesStackNavigator = createStackNavigator();

// export const PicturesNavigator = () => {
//     return(
//         <PicturesStackNavigator.Navigator screenOptions={defaultNavOptions}>
//             <PicturesStackNavigator.Screen name="PicturesOverview" component={PicturesFeedScreen} />
//             <PicturesStackNavigator.Screen name="PictureDetails" component={PictureDetailsScreen} />
//         </PicturesStackNavigator.Navigator>
//     );
// };

// const CameraStackNavigator = createStackNavigator();

// export const CameraNavigator = () => {
//     return(
//         <CameraStackNavigator.Navigator screenOptions={defaultNavOptions}>
//             <CameraStackNavigator.Screen name="CreatePost" component={CreatePictureScreen}/>
//             <CameraStackNavigator.Screen name='Map' component={MapScreen} />
//         </CameraStackNavigator.Navigator>
//     );
// }

// const TabNavigator = createBottomTabNavigator();

// export const BottomTabNavigator = () => {
//     return(
//         <TabNavigator.Navigator screenOptions={bottomTabNavOptions}>
//             <TabNavigator.Screen name="Feed" component={PicturesNavigator} />
//             <TabNavigator.Screen name="Camera" component={CameraNavigator} />
//             <TabNavigator.Screen name="User" component={UserDetailsScreen} />
//         </TabNavigator.Navigator>
//     );
// }

const CreatePostNavigator = createStackNavigator({
    TakePicture: CreatePictureScreen,
    CurrentLocation: MapScreen
}, {defaultNavOptions: defaultNavOptions});

const PictureNavigator = createStackNavigator({
    PicturesFeed: PicturesFeedScreen,
    Details:PictureDetailsScreen
}, {defaultNavOptions: defaultNavOptions});

// const AuthNavigator = createStackNavigator({
//     Auth: AuthScreen
// }, {defaultNavOptions: defaultNavOptions});

const BottomTabNavigator = createBottomTabNavigator({
    Feed: PictureNavigator,
    Camera: CreatePostNavigator,
    User: UserDetailsScreen
})

// const MainNavigator = createSwitchNavigator({
//     Startup: StartupScreen,
//     Auth: AuthNavigator,
//     Pictures: BottomTabNavigator    
// });

export default createAppContainer(BottomTabNavigator);