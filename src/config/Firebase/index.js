import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDcS2EoGMS2uFWDufqjUjW31sqZ26CwP5k",
  authDomain: "final-project-backend-75f98.firebaseapp.com",
  projectId: "final-project-backend-75f98",
  storageBucket: "final-project-backend-75f98.appspot.com",
  messagingSenderId: "810106903422",
  appId: "1:810106903422:web:1cf46a17a815b8383a312f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;