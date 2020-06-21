import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image,  SafeAreaView, ScrollView } from 'react-native';
import FitImage from 'react-native-fit-image';
import Constants from 'expo-constants';


export default function Picture() {

  var imageH = require('./image/horizontal_7.jpg');
  var imageV = require('./image/foto5.jpeg');

  const horizontal = () => {
    
    return (
      <View style={{ transform: [{ rotate: '90deg' }], alignSelf:"center" }}>
        <Image 
          source={imageH} 
          style={{
            alignSelf:"center",
            flex: 1,
          }}
        />
      </View>
    )
  }
  const vertical = () => { //resizeMode = "contain"

    var styleVertical = {
      height: 650,
      width: 350,
      flex:1,
      alignSelf: "center",
    }

    return (
      <View style={{ alignSelf: "center" }}>
        <Image source={imageV} style={styleVertical}/>
      </View>
    )
  }

  const RenderImage = () => {
    var isHorizontal = true;

    if (isHorizontal) { return horizontal(); }
    else { return vertical(); }
  }


  return (  <View> { RenderImage } </View>  )
  /*
  return(
    <View style={{ transform: [{ rotate: '90deg' }], alignSelf:"center" }}>
      <Image 
        source={imageH} 
        style={{
          alignSelf:"center",
          flex: 1,
        }}
      />
    </View>
  )
  
  /*
  return (
    <Image source={imageH}
    style={{flex:1, alignSelf: "center", transform: [{ rotate: '90deg' }] }}
    />
  )*/
}

const styles = StyleSheet.create({
  
  container2: {
    backgroundColor:"black",
    alignSelf: "center",
    width:500,
    height: 800
  },
  container:{
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
/*









  image: {
    flex: 0,
    width: "100%",
    height: 500 ,
    //resizeMode: "cover",
    //justifyContent: "center",
    alignSelf: "center",
    resizeMode:'contain',
    transform: [{ rotate: '90deg' }]
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    transform: [{ rotate: '90deg' }],
    alignSelf: "center",
    width: "100%",

  },


  image2: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: "center",
    resizeMode: 'contain',
  },
  image3: {
    flex: 1,
    aspectRatio: 1.5, 
    resizeMode: 'contain',
    alignSelf: "center",
  },
  image4: {
    flex:1,
    alignSelf: "center",
    resizeMode: "contain"      
  },


  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    alignSelf: "center",

  },
  */
});


  // https://stackoverflow.com/questions/47592920/how-to-view-multiple-capture-image-horizontally-in-react-native