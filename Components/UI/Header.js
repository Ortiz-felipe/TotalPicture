import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from './Icon';

const profileImageSize = 36;

const Header = props => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={props.image} />
                <Text style={styles.text}>{props.userName}</Text>
            </View>
            <Icon icon='more' size={23} />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    avatar: {
        aspectRatio: 1,
        backgroundColor: "#D8D8D8",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#979797",
        borderRadius: profileImageSize / 2,
        width: profileImageSize,
        height: profileImageSize,
        resizeMode: "cover",
        marginRight: 12
    },
    text: {
        fontFamily: 'open-sans',
        fontWeight: '600'
    }
});

export default Header;