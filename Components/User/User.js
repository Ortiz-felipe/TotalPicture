// https://www.youtube.com/watch?v=Zw7FkwXotxg
import { StackNavigator } from 'react-navigation';
import React, { useState }from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ToastAndroid, Button,
    TouchableOpacity
} from 'react-native'; 
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StackNavigator } from 'react-navigation';



export default function User(){

    var [followers, setFollowers] = useState(55);
    var [pictures, setPictures] = useState(999);
    var [following, setFollowing] = useState(55);
    const userImage = "../../images/perfil.jpg";
    //const publicacion = "../../images/foto2.jpg";
    var fotosV = [
        require("../../images/foto1.jpeg"),
        require("../../images/foto2.jpeg"),
        require("../../images/foto3.jpeg"),
        require("../../images/foto4.jpeg"),
        require("../../images/foto5.jpeg"),
        require("../../images/foto6.jpeg"),
        require("../../images/foto7.jpeg")
    ];
    var fotosH = [
        require("../../images/horizontal_1.jpg"),
        require("../../images/horizontal_2.jpg"),
        require("../../images/horizontal_3.jpg"),
        require("../../images/horizontal_4.jpg"),
        require("../../images/horizontal_5.jpg"),
        require("../../images/horizontal_6.jpg"),
        require("../../images/horizontal_7.jpg"),
        require("../../images/horizontal_8.jpg"),
        require("../../images/horizontal_9.jpg")
    ];
    var imgV = 0;
    var imgH = 0;

    //** En este metodo se tendria que ir a buscar las fotos y cargarlas en el render. **//
    const vertical = (_key) => {
        return (
            <TouchableOpacity onPress={ pictureV(fotosV[imgV]) }  key={_key}>
                <View style={styles.mediaImagenContainerVertical}>
                    <Image source={fotosV[imgV]} style={styles.image} resizeMode="cover"></Image>
                    <Text 
                        style={{backgroundColor: "black", color: "white", textAlign: "center"}}
                    > 
                        Description... 
                    </Text>
                </View>
            </TouchableOpacity>
        )
    };
    const horizontal = (_key) => {
        return (
            <TouchableOpacity onPress={pictureH(fotosH[imgH])}  key={_key}>
                <View style={styles.mediaImagenContainerHorizontal}>
                    <Image source={fotosH[imgH]} 
                        style={styles.image} resizeMode="cover"
                    ></Image>
                    <Text 
                        style={{backgroundColor: "black", color: "white", textAlign: "center"}}
                    > 
                        Description... 
                    </Text>
                </View>
            </TouchableOpacity>
        )
    };
    
    const llenarPublicacionesVerticales = () => {
        var array = [];
        for (var i = 0; i < 7; i++){
            array.push(vertical(i));
            imgV++;
        }
        return array;
    };

    const llenarPublicacionesHorizontales = () => {
        var array = [];
        for (var i = 1; i <= 9; i++){
            array.push(horizontal(i));
            imgH++;
        }
        return array;
    };

    const pictureV = (navImgV) => {
        props.navigation.navigate(
            'DetailPage',
            navImgV
          );
        }
    };
    const pictureH = (navImgH) => {
        props.navigation.navigate(
            'DetailPage',
            navImgH
          );
        }
    };

    const showToast = () => {
        setFollowers(followers++);
        ToastAndroid.show("Following Uesr followers: " + followers, ToastAndroid.SHORT);
    }
    
    // f() => te lleva a donde esta a la publicacion

    // f() => seguir usuario 

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                    <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                </View>

                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require(userImage)} style={styles.image} resizeMode="center"></Image>
                    </View>
                    <View style={styles.dm}>
                        <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                    </View>
                    <TouchableOpacity  style={styles.active} onPress={() => showToast()}>
                        <View style={styles.add}>
                            <Ionicons name="ios-add" size={48} color="#DFD8C8"
                                style={{marginTop: 6, marginLeft: 2}}
                            ></Ionicons>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.infoContainer}>
                        <Text
                            style={[styles.text, { fontWeight: "200", fontSize: 36}]}
                        >Username</Text>
                        <Text
                            style={[styles.text, {color: "red", fontSize: 14}]}
                        >Photographer</Text>
                    </View>
                </View>
                
                <View >
                   <View style={styles.statsContainer}>
                       <View style={styles.statsBox}>
                           <Text style={[styles.text, { fontSize: 24 }]}>{followers}</Text>
                           <Text style={[styles.text, styles.subText]}>Followers</Text>
                       </View>
                       <View style={[styles.statsBox, 
                            { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1}]}
                        >
                           <Text style={[styles.text, { fontSize: 24 }]}>{pictures}</Text>
                           <Text style={[styles.text, styles.subText]}>PICTURES</Text>
                       </View>
                       <View style={styles.statsBox}>
                           <Text style={[styles.text, { fontSize: 24 }]}>{following}</Text>
                           <Text style={[styles.text, styles.subText]}>Following</Text>
                       </View>
                   </View>
                </View>

                
                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        
                        { llenarPublicacionesVerticales() }

                    </ScrollView>
                </View>

                { llenarPublicacionesHorizontales() }

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#fff"
    },
    text: {
        fontFamily: "sans-serif-condensed",
        fontSize: 24,
        color: "white"
    },
    subText: {
        fontSize: 12,
        fontWeight: "500" 
    },
    image: {
        flex: 1,
        width:undefined,
        height: undefined
    },
    titleBar: {//-----------//
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
       
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    
    statsContainer: {
       flexDirection: "row",
       alignSelf: "center",
       marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    
    mediaImagenContainerVertical:{
        width: 100,
        height:  200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10,
        backgroundColor: "black"
    },
    mediaImagenContainerHorizontal:{
        width: 300,
        height:  150,
        borderRadius: 12,
        overflow: "hidden",
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "black"
    }
})


/**
 * Cada publicacion te tiene que llevar a la pnatalla Picture con la publicacion cargada
 * 
 * Funcionamiento de botones
 * 
 */
