import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBPmJakkJ_xtSp9kPZHSnF-IyyfFGMhLvY",
    authDomain: "e-bicycle-app.firebaseapp.com",
    projectId: "e-bicycle-app",
    storageBucket: "e-bicycle-app.appspot.com",
    messagingSenderId: "689113967592",
    appId: "1:689113967592:web:d9e982db476119b2c5d25d"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


