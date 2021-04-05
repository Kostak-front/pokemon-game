import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
   apiKey: "AIzaSyAdHlCZjCiX6NfdyPJISLE1CYu6VsuklfA",
   authDomain: "pokemon-game-9adb7.firebaseapp.com",
   databaseURL: "https://pokemon-game-9adb7-default-rtdb.firebaseio.com",
   projectId: "pokemon-game-9adb7",
   storageBucket: "pokemon-game-9adb7.appspot.com",
   messagingSenderId: "385218487970",
   appId: "1:385218487970:web:57a62737a2abf919f599fb"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;