// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrOTQl-pnDbl3P_Gk57i2tAx61Xmz-DXo",
  authDomain: "crystal-cup.firebaseapp.com",
  projectId: "crystal-cup",
  storageBucket: "crystal-cup.appspot.com",
  messagingSenderId: "794775885560",
  appId: "1:794775885560:web:38e7639aa16b262e460d0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;