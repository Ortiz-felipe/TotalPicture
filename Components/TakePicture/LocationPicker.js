import React, { useState, useEffect } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import * as Localtion from 'expo-location';
import * as Permissions from 'expo-permissions';
import Colors from '../../constants/Colors';
import MapPreview from './MapPreview';

const LocationPicker = props => {
    const [pickedLocation, setPickedLocation] = useState();
    const [isFetching, setIsFetching] = useState(false);

    const mapPickedLocation = props.navigation.getParam('pickedLocation');

    const {onLocationPicked} = props;

    useEffect(() => {
        if (mapPickedLocation) {
            setPickedLocation(mapPickedLocation);
            props.onLocationPicked(mapPickedLocation);
        };
    }, [mapPickedLocation, onLocationPicked]);

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        let permissionStatus;
        if (result.status != 'granted') {
            Alert.alert('Insufficient Permissions!', `You'll need to grant location permissions to use this app.`, [{ text: 'Okay' }]);
            permissionStatus = false;
        };
        permissionStatus = true;

        return permissionStatus;
    };

    const getLocationHadler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return;
        }

        try {
            setIsFetching(true);
            const location = await Localtion.getCurrentPositionAsync({ timeout: 5000 });
            console.log(location);
            setPickedLocation({
                lat: location.coords.latitude,
                long: location.coords.longitude
            });
            props.onLocationPicked({
                lat: location.coords.latitude,
                long: location.coords.longitude
            })
        } catch (error) {
            Alert.alert('Could not fetch location', 'Please try again later or pick a location on the map', [{ text: 'Okay' }]);
        }
        setIsFetching(false);

    }

    const pickOnMapHandler = () => {
        props.navigation.navigate('CurrentLocation');
    }

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation} onPress={pickOnMapHandler}>
                {isFetching ? <ActivityIndicator size='large'/> : <Text>No location chosen yet!</Text>}
            </MapPreview>
            <View style={styles.actions}>
            <Button title="Get User Location!" color={Colors.primary} onPress={getLocationHadler} />
            <Button title="Pick on Map" onPress={pickOnMapHandler} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    locationPicker: {
        marginBottom: 15,

    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,        
    }
});

export default LocationPicker;