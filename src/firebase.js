
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBksL1utOuMuN-UDPHCtonYJwyzRgWxOgQ",
  authDomain: "clone-d3ca0.firebaseapp.com",
  databaseURL: "https://clone-d3ca0.firebaseio.com",
  projectId: "clone-d3ca0",
  storageBucket: "clone-d3ca0.appspot.com",
  messagingSenderId: "20543604709",
  appId: "1:20543604709:web:43269bbfc8a48f7eee110c",
  measurementId: "G-EHKZBB8TKH"
};

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();


  export {db , auth};