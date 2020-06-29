import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import User from './Components/User/User';
import { createAppContainer } from './navigation/Navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <createAppContainer/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  },
});
