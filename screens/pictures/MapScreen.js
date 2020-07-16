import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Platform, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

const MapScreen = props => {
    const initialLocation = props.navigation.getParam('initialLocation');
    const readonly = props.navigation.getParam('readonly');

    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const mapRegion = {
        latitude: initialLocation ? initialLocation.lat :37.78,
        longitude: initialLocation ? initialLocation.long : -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const selectLocationHandler = event => {
        if (readonly) {
            return;
        }
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            long: event.nativeEvent.coordinate.longitude
        })
    };

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert('Select a location', 'Please select a location first!', [{ text: 'Okay' }])
            return;
        }
        props.navigation.navigate('NewPlace', { pickedLocation: selectedLocation });
    }, [selectedLocation]);

    useEffect(() => {
        props.navigation.setParams({ saveLocation: savePickedLocationHandler });
    }, [savePickedLocationHandler])
    let markerCoordinates;

    if (selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.long
        }
    }

    return (
        <MapView style={styles.map} region={mapRegion} onPress={selectLocationHandler}>
            {markerCoordinates && <Marker title='Picked Location' coordinate={markerCoordinates}></Marker>}
        </MapView>
    );
};

MapScreen.navigationOptions = navData => {
    const saveFn = navData.navigation.getParam('saveLocation');
    const readonly = navData.navigation.getParam('readonly');
    if (readonly) {
        return {};
    }
    return {
        headerRight: <TouchableOpacity style={styles.headerButton} onPress={saveFn}>
            <Text style={styles.headerButtonText}>Save</Text>
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    headerButton: {
        marginHorizontal: 20
    },
    headerButtonText: {
        fontSize: 16,
        color: Platform.OS === 'android' ? 'white' : Colors.primary
    },
    map: {
        flex: 1
    }
});

export default MapScreen;