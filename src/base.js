import firebase from "firebase/app";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBH02KvcuIyzBojrP0z52m8rpYBQR_73Hg",
    authDomain: "robotronics-2021.firebaseapp.com",
    projectId: "robotronics-2021",
    storageBucket: "robotronics-2021.appspot.com",
    messagingSenderId: "513144849351",
    appId: "1:513144849351:web:5c7daedf925bc7cf298fe2",
    measurementId: "G-94RG6578RS",
  });
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
