import React, { useReducer } from 'react';
import { StyleSheet, Text, View, ImageBackground, 
  Image,  SafeAreaView, ScrollView, TextInput, Button } from 'react-native';
import FitImage from 'react-native-fit-image';
import Constants from 'expo-constants';


export default function Picture() {

  var imageH = require(props.navigation.state.params.fotoH);
  var imageV = require(props.navigation.state.params.fotoV);

 
/*
  const getImage = () => {
    // pasarla del componente search o user => image,
    var image = {
      url: "",
      hashtag: [""],
      comments: [""],
      votosPosivios: 0,
      votosNegativos: 0
    }

  }
*/
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

    return (
      <View style={{ alignSelf: "center" }}>
        <Image source={imageV} style={{width:"100%", flex:1}}/>
      </View>
    )
  }

  const RenderImage = () => {
    var isHorizontal = false;

    if (isHorizontal) { return horizontal(); }
    else { return vertical(); }
  }
  ///////////////////////////////////////////
  const [value, onChangeText] = React.useState('');
  const [textos, setTextos] = React.useState([]);
  const write = () => {

    setTextos(...textos, value);

  }


/**
 * <View style={{flex:1, width:"100%"}}>
      <Image source={imageV} style={{flex: 1, width:"100%"}} />
    </View>
 */


  return (  
    <View style={{backgroundColor: "red", flex: 1, margin:10}}>
      
      {RenderImage}    

        <View style={ {
          flex: 1, flexDirection: 'row',  position: 'absolute', bottom:0, 
        }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 3 , width: "75%", backgroundColor: "white", borderRadius:20}}
            onChangeText={text => onChangeText(text)}
          />
          <Button title="coment."
          onPress= {write}
            style={{
              width: "10%",
              heigth: 50,
              backgroundColor: "black"
            }}
          />
        </View>
    </View>  
    )
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

});

