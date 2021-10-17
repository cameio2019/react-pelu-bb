import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyABhzM4aF47oX46Mn0CEaq2y5XPs46YBm0",
    authDomain: "react-pelu-bb.firebaseapp.com",
    projectId: "react-pelu-bb",
    storageBucket: "react-pelu-bb.appspot.com",
    messagingSenderId: "497393469008",
    appId: "1:497393469008:web:c390ab08e544c8b8f43355"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore () {
    
    return firebase.firestore(app)
}