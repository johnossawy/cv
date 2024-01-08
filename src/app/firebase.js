// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCBdZeA1It4XkDntXHQQoYZG8iC5CSQB8",
  authDomain: "project-test-f87d8.firebaseapp.com",
  projectId: "project-test-f87d8",
  storageBucket: "project-test-f87d8.appspot.com",
  messagingSenderId: "115541409080",
  appId: "1:115541409080:web:bdc9133f72203fe82c95cd",
  measurementId: "G-E2Y7T13FXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);