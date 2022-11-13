import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCOJPp4Iy-Nc3j9r3IM2OiWSKMGFHGqw5A",
  authDomain: "twitter-clone-36223.firebaseapp.com",
  projectId: "twitter-clone-36223",
  storageBucket: "twitter-clone-36223.appspot.com",
  messagingSenderId: "800233791621",
  appId: "1:800233791621:web:498288556f1645b63909ec",
  measurementId: "G-BRK78XR36K"
};

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
