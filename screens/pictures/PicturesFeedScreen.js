import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Post from '../../models/Post';
import Picture from '../../Components/User/Picture';
// import User from '../../Components/User/User';

const picturePosts = [];
let post = new Post(1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1920px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg', 'Nuevo Post', 'Tomado desde mi iPhone');
picturePosts.push(post);
const headerImage = require('../../images/foto1.jpeg');

const PicturesFeedScreen = props => {
    return (
        <View style={styles.container}>
            {/* {/* <User/>
            <Text style={{ color: 'white' }}>Pictures Overview Screen</Text>
            <Text>Pagina Principal</Text>
            <Text>Aqui deberia ir el pictures feed</Text> */}
            <Picture
                headerImage={'https://image.shutterstock.com/image-illustration/profile-picture-600w-404137708.jpg'}
                name='Felipe'
                postImage={post.imageUri}
                metadataName={post.title}
                metadataDescription={post.description}
            ></Picture>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PicturesFeedScreen;