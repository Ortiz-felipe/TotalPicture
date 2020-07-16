import * as FileSystem from 'expo-file-system';
import { insertPlace, fetchPlaces } from '../../helpers/db';
import { firebase } from '../../helpers/firestore';
import ENV from '../../env';

export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';

export const addPlace = (title, description, image, location) => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=${ENV.googleApiKey}`);

        if (!response.ok) {
            throw new Error('Something went wrong with the reverse geocoding');
        }

        const responseData = await response.json();

        if (!responseData.results) {
            throw new Error('Something went wrong with the reverse geocoding');
        }

        const address = responseData.results[0].formatted_address;

        const fileName = image.uri.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;

        const imageResponse = await fetch(image.uri);
        const imageBlob = await imageResponse.blob();

        console.log(imageBlob);

        try {
            const imageUrl = await fileUploader(imageBlob);
            const saveData = { title: title, description: description, imageUrl: imageUrl, location: location, datetime: new Date() }
            const postId = await addPlaceInFirestore(saveData);
            // await FileSystem.moveAsync({
            //     from: image,
            //     to: newPath
            // });
            // const dbResult = await insertPlace(title, newPath, address, location.lat, location.long);
            // console.log(dbResult);
            dispatch({ type: ADD_PLACE, placeData: { id: postId, title: title, description: description, image: newPath, location: location} });
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
};

export const loadPlaces = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchPlaces();
            console.log(dbResult);
            dispatch({ type: SET_PLACES, places: dbResult.rows._array });
        } catch (error) {
            throw error;
        }


    }
}

const addPlaceInFirestore = async (data) => {
    const db = firebase.firestore();
    const result = new Promise((resolve, reject) => {
        db.collection(ENV.postsCollection)
        .add(data)
        .then((docRef) => {
            resolve(docRef.id);
        })
        .catch((error) => {
            reject(error);
        });
    })
    return result;
};

const fileUploader = async (image) => {
    const storage = firebase.storage();
    const storageReference = storage.ref(ENV.imageBucketReference);
    const uploadTask = new Promise((resolve, reject) => {
        storageReference.child(image.data.name)
            .put(image, { contentType: image.data.type })
            .then(ref => {
                ref.ref.getDownloadURL().then(downloadUrl => {
                    resolve(downloadUrl);
                })
            })
            .catch(error => {
                throw error;
            });
    });

    return uploadTask;
    
    

    // const uploadTask = storageReference.child(image.data.name).put(image, { contentType: image.data.type });
    // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    //     (snapshot) => {
    //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         console.log('Upload is ' + progress + '% done');
    //         switch (snapshot.state) {
    //             case firebase.storage.TaskState.PAUSED: // or 'paused'
    //                 console.log('Upload is paused');
    //                 break;
    //             case firebase.storage.TaskState.RUNNING: // or 'running'
    //                 console.log('Upload is running');
    //                 break;
    //         }
    //     }, (error) => {
    //         // A full list of error codes is available at
    //         // https://firebase.google.com/docs/storage/web/handle-errors
    //         switch (error.code) {
    //             case 'storage/unauthorized':
    //                 // User doesn't have permission to access the object
    //                 break;
    //             case 'storage/canceled':
    //                 // User canceled the upload
    //                 break;
    //             case 'storage/unknown':
    //                 // Unknown error occurred, inspect error.serverResponse
    //                 break;
    //         }
    //     }, () => {
    //         // Upload completed successfully, now we can get the download URL
    //         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //             console.log('File available at', downloadURL);
    //             return downloadURL;
    //         });
    //     });
}