import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Icon from '../../Components/UI/Icon';

const UserDetailsScreen = props => {
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.titleBar}>
                <Icon icon='arrow-back' size={24} color='red' />
                <Icon icon='more' size={24} color='red' />                
            </View>
            <View style={{ alignSelf: "center" }}>
                <View style={styles.profileImage}>
                    <Image source={require('../../images/perfil.jpg')} style={styles.image} resizeMode='contain'></Image>
                </View>
                <View style={styles.dm}>
                    <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
                </View>
                <TouchableOpacity style={styles.active} onPress={() =>{}}>
                    <View style={styles.add}>
                        <Ionicons name="ios-add" size={48} color="#DFD8C8"
                            style={{ marginTop: 6, marginLeft: 2 }}
                        ></Ionicons>
                    </View>
                </TouchableOpacity>

                <View style={styles.infoContainer}>
                    <Text
                        style={[styles.text, { fontWeight: "200", fontSize: 36 }]}
                    >Username</Text>
                    <Text
                        style={[styles.text, { color: "red", fontSize: 14 }]}
                    >Photographer</Text>
                </View>
            </View>

            <View >
                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>25</Text>
                        <Text style={[styles.text, styles.subText]}>Followers</Text>
                    </View>
                    <View style={[styles.statsBox,
                    { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}
                    >
                        <Text style={[styles.text, { fontSize: 24 }]}>5</Text>
                        <Text style={[styles.text, styles.subText]}>PICTURES</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>5</Text>
                        <Text style={[styles.text, styles.subText]}>Following</Text>
                    </View>
                </View>
            </View>


            {/* <View style={{ marginTop: 32 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    {llenarPublicacionesVerticales()}

                </ScrollView>
            </View>

            {llenarPublicacionesHorizontales()} */}

        </ScrollView>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#fff"
    },
    text: {
        fontFamily: "open-sans",
        fontSize: 24,
        color: "white"
    },
    subText: {
        fontSize: 12,
        fontWeight: "500"
    },
    image: {
        flex: 1,
        width: undefined,
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

    mediaImagenContainerVertical: {
        width: 100,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10,
        backgroundColor: "black"
    },
    mediaImagenContainerHorizontal: {
        width: 300,
        height: 150,
        borderRadius: 12,
        overflow: "hidden",
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "black"
    }
});

export default UserDetailsScreen;
