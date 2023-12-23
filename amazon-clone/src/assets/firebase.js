import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBGqcaGOapfnSbyrzhrzKXUR9eqX8uGrXU",
	authDomain: "e-lalisa.firebaseapp.com",
	projectId: "e-lalisa",
	storageBucket: "e-lalisa.appspot.com",
	messagingSenderId: "76817039139",
	appId: "1:76817039139:web:af1a7c16ef36b5d2c41696",
	measurementId: "G-VEWP2NNLH5",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
