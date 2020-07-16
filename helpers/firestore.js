import * as firebase from 'firebase';
import 'firebase/firestore';
import ENV from '../env';

if (!firebase.apps.length) {
    firebase.initializeApp(ENV.firebaseKeys);
}

const db = firebase.firestore();

export { firebase, db };

// const storage = Fire.storage();
// const storageReference = storage.ref(ENV.imageBucketReference);

// export const fileUploader = (image) => {
//     const uploadTask = storageReference.child(ENV.imageBucketReference + image.name).put(image, image.data.type);
//     uploadTask.on(Fire.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
//         function (snapshot) {
//             // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//             var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log('Upload is ' + progress + '% done');
//             switch (snapshot.state) {
//                 case Fire.storage.TaskState.PAUSED: // or 'paused'
//                     console.log('Upload is paused');
//                     break;
//                 case Fire.storage.TaskState.RUNNING: // or 'running'
//                     console.log('Upload is running');
//                     break;
//             }
//         }, (error) => {
//             // A full list of error codes is available at
//             // https://firebase.google.com/docs/storage/web/handle-errors
//             switch (error.code) {
//                 case 'storage/unauthorized':
//                     // User doesn't have permission to access the object
//                     break;
//                 case 'storage/canceled':
//                     // User canceled the upload
//                     break;
//                 case 'storage/unknown':
//                     // Unknown error occurred, inspect error.serverResponse
//                     break;
//             }
//         }, () => {
//             // Upload completed successfully, now we can get the download URL
//             uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
//                 console.log('File available at', downloadURL);
//             });
//         });
// };