import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconBar from './IconBar';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Metadata = props => {
    return (
        <View style={styles.container}>
            <IconBar />
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.subtitle}>{props.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    text: { 
        fontWeight: "600" 
    },
    subtitle: {
        opacity: 0.8
    }
});

export default Metadata;