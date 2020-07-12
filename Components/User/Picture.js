import React, { useReducer } from 'react';
import {
  StyleSheet, Text, View, ImageBackground,
  Image, SafeAreaView, ScrollView, TextInput, Button
} from 'react-native';
import Header from '../UI/Header';
import Metadata from '../UI/Metadata';


const Picture = props => {
  return (
    <View>
      <Header image={{ uri: props.headerImage }} userName={props.name} />
      <Image resizeMode='contain' source={{ uri: props.postImage }} style={styles.postImage} />
      <Metadata name={props.metadataName} description={props.metadataDescription} />
    </View>
  );
}

const styles = StyleSheet.create({

  container2: {
    backgroundColor: "black",
    alignSelf: "center",
    width: 500,
    height: 800
  },
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  postImage: {
    backgroundColor: "#D8D8D8",
    width: "100%",
    aspectRatio: 1
  }

});

export default Picture;

