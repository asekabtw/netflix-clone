import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA63VZcEs3N3ftfMo8RCZp_1ezSI_BH358",
  authDomain: "netflix-clone-20544.firebaseapp.com",
  projectId: "netflix-clone-20544",
  storageBucket: "netflix-clone-20544.appspot.com",
  messagingSenderId: "573572058398",
  appId: "1:573572058398:web:ba12dc4fb9ac4ba1904d0f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
