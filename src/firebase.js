import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD1DYNlGES3BYyNxhGPyLZ3r3j-9u-vaQ8",
  authDomain: "fukla-e3512.firebaseapp.com",
  databaseURL: "https://fukla-e3512-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fukla-e3512",
  storageBucket: "fukla-e3512.appspot.com",
  messagingSenderId: "702976350796",
  appId: "1:702976350796:web:e87a55c69e85f8c98ef2e9"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
  
export default storage;