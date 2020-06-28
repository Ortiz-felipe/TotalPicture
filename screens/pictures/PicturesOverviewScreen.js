import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../Components/UI/HeaderButton';
import PictureItem from '../../Components/UI/PictureItem';

const PicturesOverviewScreen = props => {
    const pictures = useSelector(state => state.pictures.pictures);

    return (
        <FlatList 
            data={pictures} 
            keyExtractor={item => item.id} 
            renderItem={
                itemData => (
                    <PictureItem 
                        image={itemData.item.imageUri} 
                        title={itemData.item.title} 
                        address={null} 
                        onSelect={() => {
                            props.navigation.navigate('PictureDetail', {
                                pictureTitle: itemData.item.title, 
                                pictureId: itemData.item.id
                            })
                        }}
                    />)
            }
        />
    );
};

PicturesOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Add Place'
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate('NewPicture');
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({

});

export default PicturesOverviewScreen;