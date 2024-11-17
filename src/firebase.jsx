// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyD1DYNlGES3BYyNxhGPyLZ3r3j-9u-vaQ8",
//   authDomain: "fukla-e3512.firebaseapp.com",
//   databaseURL: "https://fukla-e3512-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "fukla-e3512",
//   storageBucket: "fukla-e3512.appspot.com",
//   messagingSenderId: "702976350796",
//   appId: "1:702976350796:web:e87a55c69e85f8c98ef2e9"
// };

// firebase.initializeApp(firebaseConfig);
// var storage = firebase.storage();

// export default storage;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMnrGpgDW_TR7z1aVCRfiLNdq37SQMfKA',
  authDomain: 'fukla-53b12.firebaseapp.com',
  projectId: 'fukla-53b12',
  storageBucket: 'fukla-53b12.firebasestorage.app',
  messagingSenderId: '946151555563',
  appId: '1:946151555563:web:4bc492e25b51b79914d9ae',
  measurementId: 'G-3DLDKZM0XZ',
};

// Initialize Items
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// We have 4 folders - Braids, Nails, Extensions and Tattoo
const storage = getStorage(app);
console.log(storage);
// Export analytics and storage for reuse
export { analytics, storage, logEvent, listAll, ref, getDownloadURL };
