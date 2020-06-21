import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import User from './Components/User/User';

export default function App() {
  return (
    <View style={styles.container}>
      <User/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  },
});
