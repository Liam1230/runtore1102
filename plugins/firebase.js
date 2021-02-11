import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAdSgkt0bCJ5dGfw6KYYqZlENQVUH0Y4PY",
  authDomain: "runtore.firebaseapp.com",
  databaseURL: "https://runtore.firebaseio.com",
  projectId: "runtore",
  storageBucket: "runtore.appspot.com",
  messagingSenderId: "577364328815",
  appId: "1:577364328815:web:ee6197dcf658e3008c689a",
  measurementId: "G-NDECZR47JM"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = firebase.firestore()


export default function(app,inject){
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
  inject('fireAuth', firebase.auth())
  inject('fireStorage', firebase.storage())
}


