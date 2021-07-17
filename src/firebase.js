import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGJKLM1ptSBOdQcoJYejOngtmpmBdDk7Y",
  authDomain: "discord-clone-a39f521.firebaseapp.com",
  projectId: "discord-clone-a39f521",
  storageBucket: "discord-clone-a39f521.appspot.com",
  messagingSenderId: "372094613878",
  appId: "1:372094613878:web:4acca1914af39259586257",
  measurementId: "G-YZ2R46LKRE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; // explicit fire
export default db; // implicit fire or default fire(anywhere)
 