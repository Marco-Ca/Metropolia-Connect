import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyCs0qpsRTnbQtI9fqR0Y8JBrXtekQuYmDY",
    authDomain: "metropolia-connect.firebaseapp.com",
    databaseURL: "https://metropolia-connect.firebaseio.com",
    projectId: "metropolia-connect",
    storageBucket: "metropolia-connect.appspot.com",
    messagingSenderId: "1043047877131"

};
firebase.initializeApp(config);

export default firebase;