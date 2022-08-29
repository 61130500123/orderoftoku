import firebase from 'firebase/compat/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyAqI_DqZOq9NjqlTfZ68tVIvEqThRLJt_M",
    authDomain: "orderoftoku-8f9bf.firebaseapp.com",
    projectId: "orderoftoku-8f9bf",
    storageBucket: "orderoftoku-8f9bf.appspot.com",
    messagingSenderId: "1053076153856",
    appId: "1:1053076153856:web:5edcf93bcc696413e39ae5",
    measurementId: "G-N4GDXG0FCR"
  });

  export default firebaseConfig;