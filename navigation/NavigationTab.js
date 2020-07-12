import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import PicturesOverviewScreen from '../screens/pictures/PicturesOverviewScreen';
import Colors from '../constants/Colors';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';
import { Ionicons } from '@expo/vector-icons';
import * as authActions from '../store/actions/auth';
//import * as Screens from '../Components/Screens/exports'
import HomeScreen from '../Components/Screens/HomeScreen'
import Search from '../Components/Screens/Search'
import ProfileScreen from '../Components/Screens/Profile'
import TakePicture from '../Components/Screens/TakePicture'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator(AppNavigator);


const HomeStack = createStackNavigator()
const DetailStack = createStackNavigator()

const MainTabScreen = () => (

    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#e91e63"
    style={{ backgroundColor: 'tomato' }}
    >
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="TakePicture"
        component={TakePicture}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
        }}
        />  
         <Tab.Screen
        name="Search"
        component={Search}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
        }}
        />

    </Tab.Navigator>
);
export default MainTabScreen;


const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Search: { screen: Search },
    TakePicture: { screen: TakePicture },
}, {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal',
});

/**
 * 

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: Screens.ProfileScreen },
    Search: { screen: Screens.Search },
    TakePicture: { screen: Screens.TakePicture },
}, {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal',
});
 */
  

