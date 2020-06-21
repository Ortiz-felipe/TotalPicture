import React from 'react';
import FitImage from 'react-native-fit-image';
import { View } from 'react-native';
 
// custom styles for FitImage
var styles = StyleSheet.create({
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
});
 

const fitimage1 = () => {
    // draws image to fit inherited space automatically, even when screen is rotated.
    // even you don't need to provide original size in v1.2.0
    
    return(

        <FitImage
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        style={styles.fitImage}
        />
    )
}

const fitimage2 = () => {
        
    // draws image to fit inherited space automatically and disables loading indicator
    
    return(
        <FitImage
        indicator={false} // disable loading indicator
        indicatorColor="white" // react native colors or color codes like #919191
        indicatorSize="large" // (small | large) or integer
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        style={styles.fitImage}
        />
    )
}

const fitimage3 = () => {
    // draws image to fit inherited space automatically, even when screen is rotated.
    
    return(        
        <FitImage
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        originalWidth={400}
        originalHeight={400}
        style={styles.fitImage}
        />
    )
}


const fitimage4 = () => {
    // could use resizeMode
    
    return(
        <FitImage
        resizeMode="contain"
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        />
    )
}


const fitimage6 = () => {

    // or draws image to specific size like Image component.
    
    return(
        <FitImage
        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        style={styles.fitImageWithSize}
        />
    )
}


const fitimage7 = () => {
    // draws local image (currently, it does not support responsive)

    var image = "./image/horizontal_1.jpg";
    return(
        <FitImage
        source={require(image)}
        style={styles.fitImageWithSize}
        />
    )
}



export default function Fitimage(){
    return (
    
        <View>
            {fitimage1()}
            {fitimage2()}
            {fitimage3()}
            {fitimage4()}
            {fitimage6()}
            {fitimage7()}
        </View>
    )
}