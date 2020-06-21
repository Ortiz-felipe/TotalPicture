import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { createStackNavigator } from 'react-navigation-stack';
import Picture from './component/Picture';
//import Fitimage from './component/Fitimage';

export default function App() {
  
  return (
   <Picture/>
  );
  
 /*
  return(
    <Fitimage/>
  );
  */
}


/*
const Navigator = createStackNavigator({
  Categories: {
    screen: Picture,
    navigationOptions: {
      headerTitle: 'Picture'
    }
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/