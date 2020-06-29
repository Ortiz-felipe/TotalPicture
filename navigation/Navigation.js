
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationActions } from '@react-navigation/compat';

import { Icon } from 'react-native-vector-icons';
import { User } from '../Components/User/User'



function Home(){
    return (
        <View style={styles.container}>
            <Text>
                Home screen
            </Text>
        </View>
    )
}
function TakePicture(){
    return (
        <View style={styles.container}>
            <Text>
                TakePicture screen
            </Text>
        </View>
    )
}
function Picture(){
    return (
        <View style={styles.container}>
            <Text>
                Picture screen
            </Text>
        </View>
    )
}
function UserScreen(){
    return (
        <User/>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alingItems: 'center'
    }
})


const TabNavigator = createCompatNavigatorFactory(createStackNavigator)(
    {
        Home: { 
            screen: Home, 
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color:tintColor}]} size={25} name={'home'} />
                    </View>
                ),
            }
        },
        User: { 
            screen: UserScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color:tintColor}]} size={25} name={'user'} />
                    </View>
                ),
            }
        },
        TakePicture: { 
            screen: TakePicture,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color:tintColor}]} size={25} name={'camera'} />
                    </View>
                ),
            }
        },
        Picture: { 
            screen: Picture,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{color:tintColor}]} size={25} name={'image'} />
                    </View>
                ),
            }
        }
    },
    {
        initialRouteName: 'Home',
        activeColor: 'white',
        inactiveColor: 'black',
        barstyle: { backgroundColor: '#694fad'}
    }
);
export default createAppContainer(TabNavigator);