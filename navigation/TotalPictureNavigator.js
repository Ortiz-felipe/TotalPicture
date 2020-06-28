import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import PicturesOverviewScreen from '../screens/pictures/PicturesOverviewScreen';
import Colors from '../constants/Colors';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';
import { Ionicons } from '@expo/vector-icons';
import * as authActions from '../store/actions/auth';
import PictureDetailScreen from '../screens/pictures/PictureDetailScreen';
import NewPictureScreen from '../screens/pictures/NewPictureScreen';

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

const TotalPictureNavigator = createStackNavigator({
    PicturesOverview: PicturesOverviewScreen,
    PictureDetail: PictureDetailScreen,
    NewPicture: NewPictureScreen

}, {defaultNavOptions: defaultNavOptions});

const AuthNavigator = createStackNavigator({
    Auth: AuthScreen
}, {defaultNavOptions: defaultNavOptions});

const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Auth: AuthNavigator,
    Pictures: TotalPictureNavigator    
});

export default createAppContainer(MainNavigator);