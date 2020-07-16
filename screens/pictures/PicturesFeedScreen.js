import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import * as placesActions from '../../store/actions/places';
import Place from '../../models/Place';
import Picture from '../../Components/User/Picture';
// import User from '../../Components/User/User';

const picturePosts = [];
let post = new Place(1, 'Nuevo Post', 'Tomado desde mi iPhone', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1920px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg');
let post2 = new Place(2, 'Nuevo Post', 'Tomado desde mi iPhone', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1920px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg');
picturePosts.push(post);
picturePosts.push(post2);
const headerImage = require('../../images/foto1.jpeg');

const PicturesFeedScreen = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();
    const products = useSelector(state => state.places.places);
    const dispatch = useDispatch();

    const loadProducts = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(placesActions.fetchProducts());
        } catch (err) {
            setError(err.message);
        }
        setIsRefreshing(false);
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        const willFocusSub = props.navigation.addListener(
            'willFocus',
            loadProducts
        );

        return () => {
            willFocusSub.remove();
        };
    }, [loadProducts]);

    useEffect(() => {
        setIsLoading(true);
        loadProducts().then(() => {
            setIsLoading(false);
        });
    }, [dispatch, loadProducts]);

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', {
            productId: id,
            productTitle: title
        });
    };

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>An error occurred!</Text>
                <Button
                    title="Try again"
                    onPress={loadProducts}
                    color={Colors.primary}
                />
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    if (!isLoading && products.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No products found. Maybe start adding some!</Text>
            </View>
        );
    }

    return (
        <FlatList
            onRefresh={loadProducts}
            refreshing={isRefreshing}
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {
                        selectItemHandler(itemData.item.id, itemData.item.title);
                    }}
                >
                    <Button
                        color={Colors.primary}
                        title="View Details"
                        onPress={() => {
                            selectItemHandler(itemData.item.id, itemData.item.title);
                        }}
                    />
                    <Button
                        color={Colors.primary}
                        title="To Cart"
                        onPress={() => {
                            dispatch(cartActions.addToCart(itemData.item));
                        }}
                    />
                </ProductItem>
            )}
        />
    );


    // return (
    //     <View style={styles.container}>
    //         {/* {/* <User/>
    //         <Text style={{ color: 'white' }}>Pictures Overview Screen</Text>
    //         <Text>Pagina Principal</Text>
    //         <Text>Aqui deberia ir el pictures feed</Text> */}
    //         <FlatList
    //             data={picturePosts}
    //             keyExtractor={item => item.id}
    //             renderItem={itemData => (
    //                 <Picture
    //                     headerImage={'https://image.shutterstock.com/image-illustration/profile-picture-600w-404137708.jpg'}
    //                     name='Felipe'
    //                     postImage={itemData.item.imageUri}
    //                     metadataName={itemData.item.title}
    //                     metadataDescription={itemData.item.description}
    //                 ></Picture>
    //             )}
    //         />

    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PicturesFeedScreen;