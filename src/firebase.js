import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyATiwf3TBZfhQL9msNFUoI2VJl8HRJyYsI",
    authDomain: "simple-note-with-react.firebaseapp.com",
    databaseURL: "https://simple-note-with-react.firebaseio.com",
    projectId: "simple-note-with-react",
    storageBucket: "simple-note-with-react.appspot.com",
    messagingSenderId: "483516019348"
};
firebase.initializeApp(config);
export const firebaseConnect = firebase.database().ref('database')



