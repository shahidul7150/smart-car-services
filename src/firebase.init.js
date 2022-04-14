// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9P5m-2Fj4i5xMOJi_a3tKViDCv79IYak",
  authDomain: "smart-car-services-a856b.firebaseapp.com",
  projectId: "smart-car-services-a856b",
  storageBucket: "smart-car-services-a856b.appspot.com",
  messagingSenderId: "400242196683",
  appId: "1:400242196683:web:91e150657a1376b4cb9b4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;